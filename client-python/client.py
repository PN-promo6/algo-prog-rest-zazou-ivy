import requests

albums = requests.get("http://localhost:3001/albums")
print(albums.text)

members = requests.get("http://localhost:3001/members")
print(members.text)

concertTours = requests.get("http://localhost:3001/concertTours")
print(concertTours.text)

labels = requests.get("http://localhost:3001/labels")
print(labels.text)
