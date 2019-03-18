import subprocess
MyOut = subprocess.Popen(['ls', '-l', '.'], 
            stdout=subprocess.PIPE, 
            stderr=subprocess.STDOUT)
stdout,stderr = MyOut.communicate()
print(stdout)
print(stderr)
