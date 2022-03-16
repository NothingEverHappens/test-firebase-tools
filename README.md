Alright - so the new extension emulator code lives on a separate branch: https://github.com/firebase/firebase-tools/tree/launch.extensions-emulator
To get that branch running on your machine:
If you haven't done so before, `git clone https://github.com/firebase/firebase-tools.git`
Then, go into that directory, and run git checkout launch.extensions-emulator
Then, npm i
and finally npm link
At this point, when you run a firebase command, you'll be using the code from that branch
Now, you need to go to a firebase project directory, and add some extensions
To do that, go to firebase.json, and add an extensions section, like so:

Kirill Cherkashin, 12:16 PM
I did the linking, mostly need help with getting extensions in

Joe Hanley, 12:17 PM
"extensions": {
"translate": "firebase/firestore-translate-text",
"httptest": "joehanley/greet-the-world@0.0.1",
}

Joe Hanley, 12:18 PM, Edited
Then, you need to create {instanceId}.env files to configure each extension, and place them in the 'extensions' directory of your firebase project directory
So, for example:
extensions/translate.env:LOCATION=us-west1
LANGUAGES=en,es,de,fr
COLLECTION_PATH=translations
INPUT_FIELD_NAME=input
OUTPUT_FIELD_NAME=translated
and extensions/httptest.env:LOCATION=us-west1
GREETING=hey what's up

Joe Hanley, 12:21 PM, Edited
At the end, you should have a directory structure that looks like:- firebase.json
- extensions/
  ---- translate.env
  ---- httptest.env
  Then you can just run the usual emulators commands, and it will download + spin up your extensions
  BTW - make sure you pull the latest changes from the launch.extensions-emulator branch - I merged in some changes from master yesterday evening, and broke things, and I just fixed them this morning

