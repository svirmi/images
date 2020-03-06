#### image upload app 

##### Clone this repo

##### Run command to start project locally
```bash
docker run -it --rm -p 8080:8080 -u $(id -u ${USER}):$(id -g ${USER}) -v ${PWD}:/app node:12 /bin/bash
```
Inside container run 
```bash
cd app/images/
yarn serve
```
Open browser at http://localhost:8080/

