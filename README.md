# EVOX-Vehicle-Info

This repo contains a mock vehicle information component utilizing data from EVOX's API.

## User Story

- As a user, I can view a vehicle image and information on page load.
- As a user, I can view vehicle image from EVOX's API
- As a user, I can request new vehicle base on vif number and product type ID.
- As a user, I can view updated vehicle image and information on a successful request.
- As a user, I will be notified of as unsuccessful request.

## Build and Run

1. fork and clone the repo
2. cd into directory

```shell
cd EVOX-Vehicle-Info
```

3. create a .env file in root directory. See `example_env`.
4. install node modules

```shell
npm install
```

5. install budo for LiveReload

```shell
npm install budo -g
```

6. run build script. (bundle.js has been ignored to prevent injected environment variables from leaking)

```shell
npm run build
```

## Demo Images

_Initial Page Load_
![Initial Page Load 1](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1553837580/EVOX/Initial_Page_Load_1.png)
![Initial Page Load 2](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1553837578/EVOX/Initial_Page_Load_2.png)

_On Successful Request_
![On Success Request](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1553837580/EVOX/On_Successful_Request.png)

_On Unsuccessful Request_
![On Unsuccessful Request](https://res.cloudinary.com/dqhe5ks7u/image/upload/v1553837580/EVOX/On_Failed_Request.png)
