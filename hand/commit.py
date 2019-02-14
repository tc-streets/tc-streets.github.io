import os
message = input("Enter commit message: ")
os.chdir("/mnt/c/projects/perm/hand")
os.system('git status')
os.system('git add .')
os.system('git status')
command = "git commit -m " + '"' + message + '"'
print(command)
os.system(command)
