import os
import json

from pprint import pprint

def process_matches(file_path):
    with open(file_path) as json_file:
        try:
            data = json.load(json_file)
        except json.JSONDecodeError:
            return 0

    # CHange counter keeps track of if any changes are made
    change_counter = 0
    for like in data:
        if "chats" in like:
            change_counter = 1
            like["chats"] = True # Replaces list of chat history with boolean

    # If no new changes, no need to create new file
    if change_counter == 0:
        return 1

    new_file_path = file_path.replace(".json", "-modified.json")

    with open(new_file_path, "w") as new_json_file:
        json.dump(data, new_json_file)

    return 2


def process_user(file_path):
    """
    Remove `identity`, `account`, `first_name` and `last_name` from the user.json    
    """

    with open(file_path) as json_file:
        try:
            data = json.load(json_file)
        except json.JSONDecodeError:
            return 0 # Incorrect JSON

    # Change counter keeps track of if any changes are made
    change_counter = 0
    if "identity" in data:
        del data["identity"]
        change_counter += 1
    if "account" in data:
        del data["account"]
        change_counter += 1
    if "profile" in data:
        if "first_name" in data["profile"]:
            del data["profile"]["first_name"]
        if "last_name" in data["profile"]:
            del data["profile"]["last_name"]
        change_counter += 1

    # If no new changes, no need to create new file
    if change_counter == 0:
        return 1

    new_file_path = file_path.replace(".json", "-modified.json")

    with open(new_file_path, "w") as new_json_file:
        json.dump(data, new_json_file)

    return 2