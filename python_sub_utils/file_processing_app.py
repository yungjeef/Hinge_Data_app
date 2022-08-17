from tkinter import *
from tkinter.ttk import *
from tkinter.filedialog import askopenfile, askopenfilename 
import time

from processing_data import process_matches, process_user

ws = Tk()
ws.title('Hinge Data JSON Modifier')
ws.geometry('800x400') 


# =====================================================
# Tkinter Helper Function Section
# =====================================================

def open_file():
    file_path = askopenfilename(filetypes=[('JSON Files', '.json')])
    if file_path is not None and "user.json" in file_path:
        user_file_str.set(file_path)
    elif file_path is not None and "matches.json" in file_path:
        matches_file_str.set(file_path)


def uploadFiles():
    pb1 = Progressbar(
        ws, 
        orient=HORIZONTAL, 
        length=300, 
        mode='determinate'
        )
    pb1.grid(row=9, columnspan=3, pady=20)
    for i in range(3):
        ws.update_idletasks()
        pb1['value'] += 30
        time.sleep(1)
    pb1.destroy()

    results_str_color = "green"
    if not matches_file_str.get() and not user_file_str.get():
        results_str = "At least one of the two files must be included!"
        results_str_color = "red"
    else:
        results_str = "File Uploaded Successfully! Processing now."

    results_label = Label(
        ws, 
        text=results_str, 
        foreground=results_str_color).grid(row=10, columnspan=3, pady=10
    )

    if matches_file_str.get():
        matches_output_str = process_matches(matches_file_str.get())

    if user_file_str.get():
        user_output_str = process_user(user_file_str.get())

# ==========================================================
# Tkinter App Widget Section
# ==========================================================

# Description part of Tkinter app
overview = Label(
    ws,
    text="Overview",
    font=('Helvetica', 18, 'bold')
)
overview.grid(row=0, pady=15, padx=10, sticky='w')

description = Label(
    ws, 
    text="Upload your `user.json` and `matches.json` files. It will generate two new files "
    )
description.grid(row=1, column=0, columnspan=3, padx=10, sticky='w')

description2 = Label(
    ws, 
    text="`user-modified.json` and `matches-modified.json` that remove all personal information or chat history."
    )
description2.grid(row=2, column=0, columnspan=3, padx=10, sticky='w')

description3 = Label(
    ws, 
    text="You can then upload these two new files to the website.",
    )
description3.grid(row=3, column=0, columnspan=3, padx=10, sticky='w')

# Button part of Tkinter app
user_file_description = Label(
    ws, 
    text='Upload user.json'
    )
user_file_description.grid(row=6, column=0, pady=20, sticky='e')

user_file_button = Button(
    ws, 
    text ='Choose File', 
    command = lambda:open_file()
    ) 
user_file_button.grid(row=6, column=1, sticky='w')

user_file_str = StringVar()
user_file_label = Label(
    ws,
    textvariable=user_file_str,
)
user_file_label.grid(row=6, column=2)
user_file_str.set("")

matches_file_description = Label(
    ws, 
    text='Upload matches.json'
    )
matches_file_description.grid(row=7, column=0, pady=20, sticky='e')

matches_file_button = Button(
    ws, 
    text ='Choose File ', 
    command = lambda:open_file()
    ) 
matches_file_button.grid(row=7, column=1, sticky='w')

matches_file_str = StringVar()
matches_file_label = Label(
    ws,
    textvariable=matches_file_str,
)
matches_file_label.grid(row=7, column=2)
matches_file_str.set("")

upld = Button(
    ws, 
    text='Upload Files', 
    command=uploadFiles
    )
upld.grid(row=8, columnspan=3, pady=10)


ws.mainloop()