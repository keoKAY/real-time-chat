# create repo using gh and push the code to the repo
gh auth login --web -y 
gh repo create real-time-chat --public -y

# add the remote 
git remote add origin
git add . 
git commit -m "initial commit"
git push -u origin master
