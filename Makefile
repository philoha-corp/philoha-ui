push:
	git -c "http.https://github.com/.extraheader=Authorization: basic $(echo -n "x-access-token:$(gh auth token -u phidn)" | base64)" push origin master
