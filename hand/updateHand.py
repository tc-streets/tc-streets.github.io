#!/usr/bin/env python3.6
# update wither web with current hand from perm directory
import shutil
import os
path = '/mnt/c/projects/perm/with/hand'
shutil.rmtree(path)
os.makedirs(path)
os.chdir(path)
print(os.getcwd())
os.system('git clone https://github.com/wither7007/handbook.git .')
shutil.rmtree('.git')
