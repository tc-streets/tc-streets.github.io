cd ~/projects/tc-streets.github.io/data/
curl https://api.darksky.net/forecast/4e540394c2ac1019e17605a5565fbdd2/44.8267,-93.4233 > wet.json
git add . && git commit -m "another" 
git push https://tc-streets:tcstreets3409@github.com/tc-streets/tc-streets.github.io.git --force
