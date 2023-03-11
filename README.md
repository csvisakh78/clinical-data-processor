# Introduction

Express Api service to consume payload from patient device and process the data to calculate the heart rate high/low value for 15 minutes interval and return processed date with raw data recieved

# Requirements

- Node.js (>= v16.0.0)
- Npm (>= v7.0.0)

# Prerequisites & Installation Setup

- Clone the repo
- Checkout to `main` branch
- cd to project folder `cd clinical-data-processor`
- Run `npm install` to install the needed node modules
- Create a `.env` file by referrring .env.example and replace the dummy config values with your local postgres db values
- Create a new database in postgresql server by running `create database clinical_metrics`

# Enviroment Variables

- POSTGRES_DB_HOST - Database host url
- POSTGRES_DB_NAME - Postgres Database Name
- POSTGRES_DB_USER - Database connection username
- POSTGRES_DB_PASSWORD - Database connection password

# Run/Start Service

Run `npm start` to make the service up

# Developer Notes

- Created a single api for consuming payload, processind heart rate data and return processed data with other metrics.
- Time interval is calculated on fixed minute basis ie 0-15, 16-30, 31-45, 46-59 of daytime
- Database 'clinical_metrics' is need to be created before running the project. Tables will be auto synced from sequelize model
- Added winston logger and implemented as writing to '.log' file inside 'logs' folder
- Curl Request and Response is added below for futher reference.

# Sample Curl Request

```
curl -X POST \
  http://localhost:3000/api/heartRate \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
   "clinical_data":{
      "HEART_RATE":{
         "uom":"beats/min",
         "data":[
            {
               "on_date":"2020-10-06T06:48:17.503000Z",
               "measurement":"111"
            },
            {
               "on_date":"2020-10-06T06:48:38.065000Z",
               "measurement":"66"
            },
            {
               "on_date":"2020-10-06T06:55:36.001000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-06T06:59:07.841000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-06T07:01:35.759000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-06T07:15:06.645000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-06T07:38:24.969000Z",
               "measurement":"162"
            },
            {
               "on_date":"2020-10-06T07:38:29.969000Z",
               "measurement":"164"
            },
            {
               "on_date":"2020-10-06T07:38:33.969000Z",
               "measurement":"164"
            },
            {
               "on_date":"2020-10-06T07:38:36.969000Z",
               "measurement":"165"
            },
            {
               "on_date":"2020-10-06T07:38:40.969000Z",
               "measurement":"165"
            },
            {
               "on_date":"2020-10-06T07:38:45.969000Z",
               "measurement":"167"
            },
            {
               "on_date":"2020-10-06T07:38:54.969000Z",
               "measurement":"165"
            },
            {
               "on_date":"2020-10-06T07:38:55.969000Z",
               "measurement":"165"
            },
            {
               "on_date":"2020-10-06T07:39:00.969000Z",
               "measurement":"165"
            },
            {
               "on_date":"2020-10-06T07:39:05.969000Z",
               "measurement":"163"
            },
            {
               "on_date":"2020-10-06T07:39:14.969000Z",
               "measurement":"160"
            },
            {
               "on_date":"2020-10-06T07:39:19.969000Z",
               "measurement":"162"
            },
            {
               "on_date":"2020-10-06T07:39:24.969000Z",
               "measurement":"161"
            },
            {
               "on_date":"2020-10-06T07:39:28.969000Z",
               "measurement":"161"
            },
            {
               "on_date":"2020-10-06T07:39:30.969000Z",
               "measurement":"162"
            },
            {
               "on_date":"2020-10-06T07:39:35.969000Z",
               "measurement":"162"
            },
            {
               "on_date":"2020-10-06T07:39:44.969000Z",
               "measurement":"156"
            },
            {
               "on_date":"2020-10-06T07:39:46.969000Z",
               "measurement":"155"
            },
            {
               "on_date":"2020-10-06T07:39:50.969000Z",
               "measurement":"151"
            },
            {
               "on_date":"2020-10-06T07:39:55.969000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-06T07:40:00.969000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-06T07:40:05.969000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-06T07:40:14.969000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-06T07:40:19.969000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-06T07:40:20.969000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-06T07:40:28.969000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-06T07:40:30.969000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-06T07:40:39.969000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-06T07:40:42.969000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-06T07:40:47.969000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-06T07:40:51.969000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-06T07:40:55.969000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-06T07:41:04.969000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-06T07:41:08.969000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-06T07:41:10.969000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-06T07:41:15.969000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-06T07:41:21.969000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-06T07:41:29.969000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-06T07:41:30.969000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-06T07:41:35.969000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-06T07:41:40.969000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-06T07:41:45.969000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-06T07:41:54.969000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-06T07:41:55.969000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-06T07:42:04.969000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-06T07:42:09.969000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-06T07:42:13.969000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-06T07:42:15.969000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-06T07:42:20.969000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-06T07:42:29.969000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-06T07:42:34.969000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-06T07:42:35.969000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-06T07:42:40.969000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-06T07:42:45.969000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-06T07:42:54.969000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-06T07:42:56.969000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-06T07:43:03.969000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-06T07:43:07.969000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-06T07:43:12.969000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-06T07:43:19.969000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-06T07:43:20.969000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-06T07:43:28.969000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-06T07:43:30.969000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-06T07:43:36.969000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-06T07:43:40.969000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-06T07:43:51.293000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-06T08:29:27.974000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-06T08:35:44.473000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-06T08:39:38.974000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-06T08:44:03.973000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-06T08:46:13.973000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-06T09:01:55.433000Z",
               "measurement":"112"
            },
            {
               "on_date":"2020-10-06T09:05:52.148000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-06T09:21:39.413000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-06T09:30:41.435000Z",
               "measurement":"109"
            },
            {
               "on_date":"2020-10-06T09:32:16.935000Z",
               "measurement":"106"
            },
            {
               "on_date":"2020-10-06T09:49:27.434000Z",
               "measurement":"112"
            },
            {
               "on_date":"2020-10-06T09:53:33.434000Z",
               "measurement":"109"
            },
            {
               "on_date":"2020-10-06T09:57:55.929000Z",
               "measurement":"101"
            },
            {
               "on_date":"2020-10-06T10:00:09.114000Z",
               "measurement":"103"
            },
            {
               "on_date":"2020-10-06T10:01:15.115000Z",
               "measurement":"101"
            },
            {
               "on_date":"2020-10-06T10:08:01.115000Z",
               "measurement":"107"
            },
            {
               "on_date":"2020-10-06T10:11:19.114000Z",
               "measurement":"104"
            },
            {
               "on_date":"2020-10-06T10:18:51.114000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-06T10:25:09.114000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-06T10:28:20.116000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-06T10:33:32.115000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-06T10:39:15.116000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-06T10:43:45.117000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-06T10:48:27.617000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-06T10:51:24.617000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-06T10:57:38.117000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-06T11:05:12.608000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-06T11:06:38.108000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-06T11:12:48.116000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-06T11:20:04.030000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-06T11:25:48.115000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-06T11:27:35.115000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-06T11:35:18.613000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-06T11:37:22.613000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-06T11:43:16.112000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-06T11:46:29.613000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-06T11:52:20.612000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-06T11:56:46.113000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-06T12:05:46.112000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T12:09:52.112000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T12:14:55.112000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-06T12:20:08.110000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-06T12:23:36.610000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T12:30:38.110000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T12:34:48.110000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T12:40:19.610000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T12:42:18.610000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T12:46:58.108000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-06T12:52:03.107000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T12:56:48.108000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T13:01:13.107000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T13:02:48.107000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T13:05:58.844000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T13:11:49.844000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T13:16:49.844000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T13:21:19.844000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T13:26:24.844000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T13:31:00.343000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T13:36:14.843000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-06T13:42:39.843000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T13:46:39.843000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T13:50:59.842000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T13:56:34.842000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T14:00:59.841000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T14:06:14.841000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T14:12:19.840000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T14:17:19.840000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T14:21:04.840000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T14:26:14.840000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T14:31:09.839000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T14:36:04.839000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T14:41:00.334000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T14:46:24.834000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T14:50:59.837000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T14:56:34.837000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T15:01:49.836000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T15:07:24.836000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T15:12:24.836000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T15:16:09.836000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T15:21:04.836000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T15:27:29.836000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T15:31:14.835000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T15:37:34.835000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T15:40:59.835000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T15:46:49.835000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T15:51:14.833000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T15:56:14.833000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T16:00:59.833000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T16:06:21.833000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T16:11:44.832000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T16:15:59.832000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T16:21:14.832000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T16:27:39.831000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T16:32:29.831000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T16:37:04.831000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T16:41:54.831000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T16:45:59.831000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T16:51:14.830000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T16:56:40.829000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T17:01:14.828000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T17:02:49.828000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:06:08.070000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:11:01.570000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:18:31.569000Z",
               "measurement":"67"
            },
            {
               "on_date":"2020-10-06T17:21:01.569000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T17:26:58.568000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T17:31:16.565000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T17:39:17.062000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T17:41:26.562000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:47:51.567000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:51:01.567000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T17:56:11.567000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T18:01:01.566000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T18:06:31.566000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T18:11:16.566000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T18:16:46.566000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T18:21:45.066000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T18:26:01.566000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T18:31:20.565000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T18:37:29.065000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T18:41:17.563000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T18:48:00.063000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T18:52:01.561000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-06T18:59:41.560000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T19:03:51.560000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T19:08:51.561000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T19:11:01.561000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T19:16:01.561000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T19:21:31.561000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T19:26:51.561000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T19:31:06.561000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-06T19:36:01.561000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T19:41:02.059000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T19:46:06.559000Z",
               "measurement":"70"
            },
            {
               "on_date":"2020-10-06T19:51:01.559000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T19:56:41.559000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T20:01:34.558000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T20:06:26.557000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T20:15:43.556000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T20:18:11.556000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-06T20:20:59.556000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T20:29:25.057000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-06T20:34:09.556000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-06T20:36:16.553000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-06T20:41:01.553000Z",
               "measurement":"72"
            },
            {
               "on_date":"2020-10-06T20:50:31.554000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-06T20:53:40.054000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-06T20:56:21.554000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-06T21:01:51.554000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-06T21:02:58.554000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-06T21:06:08.268000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-06T21:11:13.268000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-07T00:44:19.181000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T00:50:54.681000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T00:52:14.681000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T00:58:24.681000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-07T01:01:34.181000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T01:08:04.176000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-07T01:14:13.181000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T01:18:56.938000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T01:21:12.438000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T01:28:52.438000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T01:34:59.633000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T01:40:04.134000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T01:48:44.235000Z",
               "measurement":"104"
            },
            {
               "on_date":"2020-10-07T01:58:48.885000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-07T02:06:32.465000Z",
               "measurement":"101"
            },
            {
               "on_date":"2020-10-07T02:09:12.173000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-07T02:12:05.165000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-07T02:12:36.243000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-07T02:17:38.094000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-07T02:20:34.371000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-07T02:22:04.449000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-07T02:38:17.947000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-07T02:41:17.448000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-07T02:50:29.945000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-07T02:53:36.947000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-07T02:58:35.447000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-07T03:01:37.445000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-07T03:10:20.945000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-07T03:14:41.446000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-07T03:17:10.946000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-07T03:23:41.945000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T03:26:22.945000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-07T03:34:12.945000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-07T03:36:10.445000Z",
               "measurement":"96"
            },
            {
               "on_date":"2020-10-07T03:45:01.445000Z",
               "measurement":"59"
            },
            {
               "on_date":"2020-10-07T03:46:32.945000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-07T03:54:50.140000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T04:00:56.640000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-07T04:02:39.140000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-07T04:07:38.640000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T04:11:44.140000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T04:16:28.139000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-07T04:21:44.639000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T04:26:33.639000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-07T04:31:18.639000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-07T04:40:56.639000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-07T04:43:08.139000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T04:46:16.639000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T04:53:41.137000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-07T04:59:44.727000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-07T05:05:51.321000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T05:07:23.821000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-07T05:10:15.820000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T05:11:24.063000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T05:19:55.559000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T05:22:54.062000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T05:30:19.562000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T05:33:12.563000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T05:39:28.559000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-07T05:43:03.560000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-07T05:47:05.062000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T05:55:41.562000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T06:03:58.560000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T06:08:18.560000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T06:15:41.060000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-07T06:18:54.560000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T06:23:44.059000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T06:27:27.560000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-07T06:32:23.559000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-07T06:36:19.059000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-07T06:41:09.059000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-07T06:47:05.558000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T06:51:55.558000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-07T07:00:40.554000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T07:05:04.554000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T07:10:14.555000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-07T07:15:17.554000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T07:19:07.054000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-07T07:24:49.037000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T07:26:02.054000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-07T07:32:14.020000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T07:39:15.038000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-07T07:43:22.054000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T07:47:01.054000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-07T07:55:56.054000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T07:57:15.474000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T08:01:07.553000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T08:10:44.053000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-07T08:12:19.053000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-07T08:16:38.553000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-07T08:30:19.053000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T08:34:19.552000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T08:38:13.050000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T08:43:03.049000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T08:50:36.548000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T08:52:30.048000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T09:04:45.833000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T09:08:09.821000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-07T09:13:47.820000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T09:20:56.820000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T09:22:23.320000Z",
               "measurement":"59"
            },
            {
               "on_date":"2020-10-07T09:32:15.616000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-07T09:38:44.619000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T09:43:09.619000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T09:46:30.110000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T09:51:49.619000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T10:00:16.286000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T10:04:13.286000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-07T10:08:26.286000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T10:11:14.786000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-07T21:31:54.607000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T21:33:56.303000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T21:40:55.800000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-07T21:43:34.794000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-07T21:48:03.298000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-07T21:55:16.296000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-07T21:56:29.796000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-07T22:03:38.791000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T22:10:40.294000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T22:15:47.796000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-07T22:19:24.294000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-07T22:24:45.294000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-07T22:30:49.791000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-07T22:35:55.768000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T22:38:36.294000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-07T22:40:58.794000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-07T22:47:58.789000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T22:51:42.287000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-07T22:58:06.286000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-07T23:02:21.286000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-07T23:15:24.781000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-07T23:16:40.281000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-07T23:20:58.280000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-07T23:29:53.778000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-07T23:31:52.278000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-07T23:39:13.278000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-07T23:45:05.777000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-07T23:46:24.777000Z",
               "measurement":"65"
            },
            {
               "on_date":"2020-10-07T23:54:27.377000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-07T23:58:09.056000Z",
               "measurement":"109"
            },
            {
               "on_date":"2020-10-07T23:59:19.134000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-08T00:01:39.634000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T00:08:14.134000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-08T00:13:28.134000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-08T00:19:16.631000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T00:25:51.633000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T00:27:10.633000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-08T00:32:03.632000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-08T00:39:09.631000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T00:42:06.631000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-08T00:50:41.631000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-08T00:55:47.131000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T00:56:57.631000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-08T01:05:39.630000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-08T01:09:13.630000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-08T01:16:51.630000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-08T01:30:03.360000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T01:33:15.359000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T01:36:06.860000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T01:45:56.361000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T01:48:03.561000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-08T01:54:48.561000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T01:56:03.561000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T02:04:13.056000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-08T02:08:55.061000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T02:12:48.061000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T02:19:16.060000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-08T02:24:52.060000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-08T02:26:19.060000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T02:37:39.522000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T02:42:12.559000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-08T02:47:19.053000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-08T02:52:40.559000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-08T02:58:21.559000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-08T03:08:36.556000Z",
               "measurement":"107"
            },
            {
               "on_date":"2020-10-08T03:20:22.555000Z",
               "measurement":"110"
            },
            {
               "on_date":"2020-10-08T03:25:29.056000Z",
               "measurement":"103"
            },
            {
               "on_date":"2020-10-08T03:27:48.556000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T03:32:09.556000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T03:40:52.556000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T03:43:53.056000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-08T03:48:55.557000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-08T03:53:25.057000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T04:00:40.557000Z",
               "measurement":"104"
            },
            {
               "on_date":"2020-10-08T04:04:58.053000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-08T04:07:16.057000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T04:12:36.057000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-08T04:17:59.058000Z",
               "measurement":"103"
            },
            {
               "on_date":"2020-10-08T04:25:54.559000Z",
               "measurement":"96"
            },
            {
               "on_date":"2020-10-08T04:27:03.059000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-08T04:32:18.060000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T04:37:43.560000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-08T04:43:30.561000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T04:47:02.062000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-08T04:53:25.560000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-08T05:00:43.559000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T05:02:35.559000Z",
               "measurement":"96"
            },
            {
               "on_date":"2020-10-08T05:03:58.059000Z",
               "measurement":"96"
            },
            {
               "on_date":"2020-10-08T05:10:39.277000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-08T05:12:49.777000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-08T05:18:42.279000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-08T05:24:25.778000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-08T05:28:12.278000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-08T05:34:35.778000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-08T05:36:14.778000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-08T05:40:59.777000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-08T05:47:49.777000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-08T06:00:50.769000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-08T06:04:15.274000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T06:08:28.274000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-08T06:11:19.774000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-08T06:18:29.771000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-08T06:24:35.271000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T06:29:04.764000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-08T06:37:29.773000Z",
               "measurement":"62"
            },
            {
               "on_date":"2020-10-08T06:50:51.771000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-08T06:54:46.767000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-08T06:59:24.771000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-08T07:04:34.771000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T07:06:33.771000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T07:15:57.271000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-08T07:19:17.771000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-08T07:25:35.270000Z",
               "measurement":"65"
            },
            {
               "on_date":"2020-10-08T07:39:19.771000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T07:47:49.118000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T07:47:54.118000Z",
               "measurement":"120"
            },
            {
               "on_date":"2020-10-08T07:47:59.118000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T07:48:00.118000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T07:48:09.118000Z",
               "measurement":"114"
            },
            {
               "on_date":"2020-10-08T07:48:13.118000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T07:48:17.118000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T07:48:23.118000Z",
               "measurement":"109"
            },
            {
               "on_date":"2020-10-08T07:48:25.118000Z",
               "measurement":"108"
            },
            {
               "on_date":"2020-10-08T07:48:31.118000Z",
               "measurement":"114"
            },
            {
               "on_date":"2020-10-08T07:48:36.118000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-08T07:48:44.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T07:48:45.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T07:48:50.111000Z",
               "measurement":"121"
            },
            {
               "on_date":"2020-10-08T07:48:55.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T07:49:04.111000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T07:49:09.111000Z",
               "measurement":"121"
            },
            {
               "on_date":"2020-10-08T07:49:13.111000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T07:49:16.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T07:49:20.111000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T07:49:26.111000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T07:49:32.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T07:49:35.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T07:49:44.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T07:49:46.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T07:49:54.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T07:49:58.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:50:04.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:50:09.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:50:13.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:50:16.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:50:22.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:50:25.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:50:32.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:50:36.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:50:40.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T07:50:46.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:50:52.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T07:50:55.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T07:51:04.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T07:51:08.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T07:51:10.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T07:51:19.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T07:51:21.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T07:51:26.111000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-08T07:51:33.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T07:51:36.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T07:51:42.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T07:51:48.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:51:53.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:51:55.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:52:03.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T07:52:07.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T07:52:14.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T07:52:16.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T07:52:20.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T07:52:27.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T07:52:30.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T07:52:36.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T07:52:42.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T07:52:46.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T07:52:54.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T07:52:58.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T07:53:03.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T07:53:09.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T07:53:11.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T07:53:16.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T07:53:22.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T07:53:25.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T07:53:31.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T07:53:36.111000Z",
               "measurement":"151"
            },
            {
               "on_date":"2020-10-08T07:53:40.111000Z",
               "measurement":"154"
            },
            {
               "on_date":"2020-10-08T07:53:48.111000Z",
               "measurement":"157"
            },
            {
               "on_date":"2020-10-08T07:53:50.111000Z",
               "measurement":"157"
            },
            {
               "on_date":"2020-10-08T07:53:59.111000Z",
               "measurement":"161"
            },
            {
               "on_date":"2020-10-08T07:54:01.111000Z",
               "measurement":"161"
            },
            {
               "on_date":"2020-10-08T07:54:09.111000Z",
               "measurement":"163"
            },
            {
               "on_date":"2020-10-08T07:54:10.111000Z",
               "measurement":"163"
            },
            {
               "on_date":"2020-10-08T07:54:15.111000Z",
               "measurement":"164"
            },
            {
               "on_date":"2020-10-08T07:54:24.111000Z",
               "measurement":"164"
            },
            {
               "on_date":"2020-10-08T07:54:25.111000Z",
               "measurement":"162"
            },
            {
               "on_date":"2020-10-08T07:54:34.111000Z",
               "measurement":"161"
            },
            {
               "on_date":"2020-10-08T07:54:39.111000Z",
               "measurement":"158"
            },
            {
               "on_date":"2020-10-08T07:54:44.111000Z",
               "measurement":"158"
            },
            {
               "on_date":"2020-10-08T07:54:48.111000Z",
               "measurement":"158"
            },
            {
               "on_date":"2020-10-08T07:54:50.111000Z",
               "measurement":"157"
            },
            {
               "on_date":"2020-10-08T07:54:55.111000Z",
               "measurement":"156"
            },
            {
               "on_date":"2020-10-08T07:55:00.111000Z",
               "measurement":"155"
            },
            {
               "on_date":"2020-10-08T07:55:08.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T07:55:14.111000Z",
               "measurement":"151"
            },
            {
               "on_date":"2020-10-08T07:55:17.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T07:55:23.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T07:55:29.111000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-08T07:55:30.111000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-08T07:55:37.111000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-08T07:55:43.111000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-08T07:55:45.111000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-08T07:55:50.111000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-08T07:55:59.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T07:56:00.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T07:56:09.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:13.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:15.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:20.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:56:25.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:30.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:38.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T07:56:40.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T07:56:45.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T07:56:54.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T07:56:59.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:57:02.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:57:05.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:57:11.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:57:17.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:57:24.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:57:28.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:57:32.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:57:37.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:57:42.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T07:57:45.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:57:50.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:57:59.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:58:02.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:58:09.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:58:11.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:58:18.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T07:58:21.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T07:58:29.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:58:31.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:58:36.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:58:43.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:58:46.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:58:53.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T07:58:55.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T07:59:03.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:59:06.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T07:59:14.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:59:19.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:59:24.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T07:59:26.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T07:59:32.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T07:59:37.111000Z",
               "measurement":"127"
            },
            {
               "on_date":"2020-10-08T07:59:43.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T07:59:45.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T07:59:50.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T07:59:59.111000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:00:01.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T08:00:06.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T08:00:14.111000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:00:17.111000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:00:21.111000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:00:26.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:00:34.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:00:36.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:00:40.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:00:48.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:00:50.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:00:59.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:01:00.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:01:09.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:01:10.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:01:19.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:01:24.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:01:28.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:01:30.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:01:36.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:01:44.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:01:45.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:01:54.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:01:56.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:02:03.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:02:08.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:02:14.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:02:16.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:02:22.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:02:27.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:02:30.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:02:39.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T08:02:40.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:02:49.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:02:50.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:02:57.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:03:00.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:03:08.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:03:11.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:03:16.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:03:23.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:03:27.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:03:31.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:03:39.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:03:40.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:03:48.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:03:54.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:03:56.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:04:00.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:04:07.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:04:12.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:04:19.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T08:04:21.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T08:04:29.111000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:04:30.111000Z",
               "measurement":"121"
            },
            {
               "on_date":"2020-10-08T08:04:38.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:04:44.111000Z",
               "measurement":"120"
            },
            {
               "on_date":"2020-10-08T08:04:49.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:04:51.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:04:55.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:05:04.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:05:06.111000Z",
               "measurement":"120"
            },
            {
               "on_date":"2020-10-08T08:05:14.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:05:17.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:05:21.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:05:29.111000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:05:32.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:05:36.111000Z",
               "measurement":"120"
            },
            {
               "on_date":"2020-10-08T08:05:40.111000Z",
               "measurement":"120"
            },
            {
               "on_date":"2020-10-08T08:05:46.111000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:05:54.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:05:58.111000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:06:03.111000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:06:06.111000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:06:10.111000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-08T08:06:18.111000Z",
               "measurement":"112"
            },
            {
               "on_date":"2020-10-08T08:06:21.111000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-08T08:06:25.111000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:06:34.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:06:37.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:06:40.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:06:49.111000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:06:53.111000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:06:55.111000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:07:01.111000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T08:07:09.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T08:07:13.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T08:07:15.111000Z",
               "measurement":"126"
            },
            {
               "on_date":"2020-10-08T08:07:24.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:07:27.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:07:31.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:07:39.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:07:44.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:07:45.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:07:50.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:07:55.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:08:00.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:08:09.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:08:11.111000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:08:15.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:08:20.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:08:25.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:08:34.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:08:35.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:08:41.111000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:08:49.111000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:08:50.111000Z",
               "measurement":"126"
            },
            {
               "on_date":"2020-10-08T08:08:58.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:09:00.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:09:09.111000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:09:14.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:09:15.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:09:23.111000Z",
               "measurement":"140"
            },
            {
               "on_date":"2020-10-08T08:09:27.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:09:30.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:09:39.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:09:43.111000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-08T08:09:49.111000Z",
               "measurement":"144"
            },
            {
               "on_date":"2020-10-08T08:09:52.111000Z",
               "measurement":"147"
            },
            {
               "on_date":"2020-10-08T08:09:58.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T08:10:00.111000Z",
               "measurement":"150"
            },
            {
               "on_date":"2020-10-08T08:10:06.111000Z",
               "measurement":"148"
            },
            {
               "on_date":"2020-10-08T08:10:11.111000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-08T08:10:19.111000Z",
               "measurement":"152"
            },
            {
               "on_date":"2020-10-08T08:10:24.111000Z",
               "measurement":"152"
            },
            {
               "on_date":"2020-10-08T08:10:27.111000Z",
               "measurement":"153"
            },
            {
               "on_date":"2020-10-08T08:10:31.111000Z",
               "measurement":"154"
            },
            {
               "on_date":"2020-10-08T08:10:38.111000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-08T08:10:40.111000Z",
               "measurement":"149"
            },
            {
               "on_date":"2020-10-08T08:10:49.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T08:10:52.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T08:10:59.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T08:11:00.111000Z",
               "measurement":"146"
            },
            {
               "on_date":"2020-10-08T08:11:07.111000Z",
               "measurement":"145"
            },
            {
               "on_date":"2020-10-08T08:11:10.111000Z",
               "measurement":"143"
            },
            {
               "on_date":"2020-10-08T08:11:19.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:11:23.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:11:27.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:11:32.111000Z",
               "measurement":"125"
            },
            {
               "on_date":"2020-10-08T08:11:35.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T08:11:41.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T08:11:46.111000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T08:11:54.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:11:56.111000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:12:03.111000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:12:09.111000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:12:12.111000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:12:19.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:12:20.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:12:27.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:12:31.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:12:39.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:12:41.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:12:49.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:12:51.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:12:59.111000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:13:03.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:13:08.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:13:13.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:13:17.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:13:22.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:13:27.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:13:33.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:13:35.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:13:41.111000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:13:49.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:13:51.111000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:13:57.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:14:00.111000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:14:06.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:14:14.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:14:19.111000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:14:23.111000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:22:19.668000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:22:22.668000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:22:27.668000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:22:29.668000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:22:33.668000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:22:42.668000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:22:43.668000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:22:51.668000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:22:53.668000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:23:02.668000Z",
               "measurement":"137"
            },
            {
               "on_date":"2020-10-08T08:23:06.668000Z",
               "measurement":"139"
            },
            {
               "on_date":"2020-10-08T08:23:12.664000Z",
               "measurement":"142"
            },
            {
               "on_date":"2020-10-08T08:23:14.664000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:23:22.664000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:23:23.664000Z",
               "measurement":"141"
            },
            {
               "on_date":"2020-10-08T08:23:32.664000Z",
               "measurement":"138"
            },
            {
               "on_date":"2020-10-08T08:23:34.664000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:23:38.664000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:23:47.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:23:52.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:23:53.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:23:58.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:24:07.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:24:11.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:24:13.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:24:22.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:24:25.664000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:24:29.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:24:37.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:24:39.664000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:24:46.664000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:24:51.664000Z",
               "measurement":"132"
            },
            {
               "on_date":"2020-10-08T08:24:53.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:25:02.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:25:07.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:25:12.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:25:13.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:25:18.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:25:27.664000Z",
               "measurement":"131"
            },
            {
               "on_date":"2020-10-08T08:25:32.664000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:25:33.664000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:25:42.664000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:25:47.664000Z",
               "measurement":"127"
            },
            {
               "on_date":"2020-10-08T08:25:48.664000Z",
               "measurement":"128"
            },
            {
               "on_date":"2020-10-08T08:25:53.664000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:25:58.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:26:04.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:26:12.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:26:17.664000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:26:18.664000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:26:23.664000Z",
               "measurement":"134"
            },
            {
               "on_date":"2020-10-08T08:26:32.664000Z",
               "measurement":"133"
            },
            {
               "on_date":"2020-10-08T08:26:37.664000Z",
               "measurement":"135"
            },
            {
               "on_date":"2020-10-08T08:26:40.664000Z",
               "measurement":"136"
            },
            {
               "on_date":"2020-10-08T08:26:47.664000Z",
               "measurement":"130"
            },
            {
               "on_date":"2020-10-08T08:26:49.664000Z",
               "measurement":"129"
            },
            {
               "on_date":"2020-10-08T08:26:56.664000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T08:26:58.664000Z",
               "measurement":"123"
            },
            {
               "on_date":"2020-10-08T08:27:07.664000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:27:12.664000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:27:14.664000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:27:18.664000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:27:27.664000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:27:28.664000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:27:37.664000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T08:27:41.664000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-08T08:27:47.664000Z",
               "measurement":"114"
            },
            {
               "on_date":"2020-10-08T08:27:48.664000Z",
               "measurement":"115"
            },
            {
               "on_date":"2020-10-08T08:27:56.664000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T08:27:58.664000Z",
               "measurement":"112"
            },
            {
               "on_date":"2020-10-08T08:28:06.664000Z",
               "measurement":"112"
            },
            {
               "on_date":"2020-10-08T08:28:08.664000Z",
               "measurement":"111"
            },
            {
               "on_date":"2020-10-08T08:28:15.664000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:28:18.664000Z",
               "measurement":"116"
            },
            {
               "on_date":"2020-10-08T08:28:27.664000Z",
               "measurement":"110"
            },
            {
               "on_date":"2020-10-08T08:28:29.664000Z",
               "measurement":"111"
            },
            {
               "on_date":"2020-10-08T08:28:34.664000Z",
               "measurement":"113"
            },
            {
               "on_date":"2020-10-08T08:28:42.664000Z",
               "measurement":"119"
            },
            {
               "on_date":"2020-10-08T08:28:47.664000Z",
               "measurement":"122"
            },
            {
               "on_date":"2020-10-08T08:28:52.664000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-08T08:28:57.664000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:28:58.664000Z",
               "measurement":"117"
            },
            {
               "on_date":"2020-10-08T08:42:37.976000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-08T09:17:29.971000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-08T09:50:01.965000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-08T09:51:30.656000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T10:31:05.518000Z",
               "measurement":"124"
            },
            {
               "on_date":"2020-10-08T10:52:20.449000Z",
               "measurement":"108"
            },
            {
               "on_date":"2020-10-08T11:00:16.949000Z",
               "measurement":"102"
            },
            {
               "on_date":"2020-10-08T11:03:36.952000Z",
               "measurement":"98"
            },
            {
               "on_date":"2020-10-08T11:10:56.454000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-08T11:15:39.955000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-08T11:19:36.456000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-08T11:25:10.955000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-08T11:27:11.455000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T11:35:11.455000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T11:36:35.455000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T22:10:42.438000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-08T22:12:08.938000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-08T22:14:22.149000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T22:20:55.648000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-08T22:22:56.648000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-08T22:30:50.647000Z",
               "measurement":"97"
            },
            {
               "on_date":"2020-10-08T22:32:35.647000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-08T22:40:02.144000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-08T22:44:00.646000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-08T22:47:11.644000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-08T22:54:45.144000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T23:00:40.644000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-08T23:02:37.644000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-08T23:09:45.645000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-08T23:13:50.645000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-08T23:18:10.644000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-08T23:22:50.641000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-08T23:26:35.642000Z",
               "measurement":"75"
            },
            {
               "on_date":"2020-10-08T23:34:15.642000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-08T23:36:10.642000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-08T23:41:25.643000Z",
               "measurement":"69"
            },
            {
               "on_date":"2020-10-08T23:47:00.643000Z",
               "measurement":"71"
            },
            {
               "on_date":"2020-10-08T23:51:00.641000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-08T23:56:20.641000Z",
               "measurement":"68"
            },
            {
               "on_date":"2020-10-09T00:01:10.641000Z",
               "measurement":"67"
            },
            {
               "on_date":"2020-10-09T00:09:54.988000Z",
               "measurement":"100"
            },
            {
               "on_date":"2020-10-09T00:10:10.066000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T00:12:52.565000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-09T00:17:21.671000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-09T00:18:57.247000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T00:27:18.346000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-09T00:30:22.022000Z",
               "measurement":"100"
            },
            {
               "on_date":"2020-10-09T00:35:42.100000Z",
               "measurement":"99"
            },
            {
               "on_date":"2020-10-09T00:39:22.100000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-09T00:42:01.100000Z",
               "measurement":"85"
            },
            {
               "on_date":"2020-10-09T00:46:25.599000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T00:51:44.099000Z",
               "measurement":"89"
            },
            {
               "on_date":"2020-10-09T01:00:52.598000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T01:02:47.098000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-09T01:03:12.598000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T01:06:38.290000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-09T01:14:44.290000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-09T01:16:12.290000Z",
               "measurement":"95"
            },
            {
               "on_date":"2020-10-09T01:25:31.790000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T01:27:19.287000Z",
               "measurement":"93"
            },
            {
               "on_date":"2020-10-09T01:35:11.287000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-09T01:36:23.787000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T01:43:09.287000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-09T01:50:40.285000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-09T01:52:51.787000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-09T01:58:45.281000Z",
               "measurement":"92"
            },
            {
               "on_date":"2020-10-09T02:03:22.781000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T02:10:14.286000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T02:12:08.286000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T02:18:23.785000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T02:21:59.285000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T02:27:14.785000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-09T02:35:55.785000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T02:40:48.784000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-09T02:43:25.784000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T02:47:59.284000Z",
               "measurement":"84"
            },
            {
               "on_date":"2020-10-09T02:54:13.783000Z",
               "measurement":"87"
            },
            {
               "on_date":"2020-10-09T02:59:56.283000Z",
               "measurement":"86"
            },
            {
               "on_date":"2020-10-09T03:02:29.283000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T03:06:58.782000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T03:11:20.782000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T03:20:39.281000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T03:23:54.281000Z",
               "measurement":"74"
            },
            {
               "on_date":"2020-10-09T03:26:11.779000Z",
               "measurement":"78"
            },
            {
               "on_date":"2020-10-09T03:33:35.430000Z",
               "measurement":"109"
            },
            {
               "on_date":"2020-10-09T03:35:33.507000Z",
               "measurement":"67"
            },
            {
               "on_date":"2020-10-09T03:49:41.093000Z",
               "measurement":"105"
            },
            {
               "on_date":"2020-10-09T03:50:57.170000Z",
               "measurement":"73"
            },
            {
               "on_date":"2020-10-09T03:52:58.670000Z",
               "measurement":"64"
            },
            {
               "on_date":"2020-10-09T04:02:13.641000Z",
               "measurement":"118"
            },
            {
               "on_date":"2020-10-09T04:04:19.203000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-09T04:09:42.206000Z",
               "measurement":"90"
            },
            {
               "on_date":"2020-10-09T04:15:57.707000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-09T04:17:05.707000Z",
               "measurement":"94"
            },
            {
               "on_date":"2020-10-09T04:22:57.708000Z",
               "measurement":"91"
            },
            {
               "on_date":"2020-10-09T04:29:17.209000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T04:33:49.706000Z",
               "measurement":"82"
            },
            {
               "on_date":"2020-10-09T04:36:44.709000Z",
               "measurement":"81"
            },
            {
               "on_date":"2020-10-09T04:45:06.209000Z",
               "measurement":"88"
            },
            {
               "on_date":"2020-10-09T04:54:48.709000Z",
               "measurement":"83"
            },
            {
               "on_date":"2020-10-09T04:59:55.705000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-09T05:01:26.203000Z",
               "measurement":"79"
            },
            {
               "on_date":"2020-10-09T05:07:43.201000Z",
               "measurement":"76"
            },
            {
               "on_date":"2020-10-09T05:12:12.072000Z",
               "measurement":"80"
            },
            {
               "on_date":"2020-10-09T05:20:25.875000Z",
               "measurement":"77"
            },
            {
               "on_date":"2020-10-09T05:23:18.372000Z",
               "measurement":"82"
            }
         ],
         "name":"Heart Rate"
      },
      "WEIGHT":{
         "uom":"Kg",
         "name":"Weight"
      },
      "BLOOD_GLUCOSE_LEVELS":{
         "uom":"mmol/L",
         "name":"Blood Glucose"
      },
      "HEIGHT":{
         "uom":"cm",
         "name":"Height"
      },
      "BP":{
         "uom":"mmHg",
         "name":"Blood Pressure"
      },
      "STEPS":{
         "uom":"",
         "data":[
            {
               "on_date":"2020-10-05T13:00:00.000000Z",
               "measurement":"11031"
            },
            {
               "on_date":"2020-10-06T13:00:00.000000Z",
               "measurement":"4667"
            },
            {
               "on_date":"2020-10-07T13:00:00.000000Z",
               "measurement":"13030"
            },
            {
               "on_date":"2020-10-08T13:00:00.000000Z",
               "measurement":"3048"
            }
         ],
         "name":"Steps"
      }
   },
   "patient_id":"gk6dhgh-9a60-4980-bb8b-787bf82689d7",
   "from_healthkit_sync":true,
   "orgId":"8gj4djk6s-a5ad-444b-b58c-358dcbd72dc3",
   "timestamp":"2020-10-09T05:36:31.381Z"
}'
```

# Curl Response

```
{
    "succes": true,
    "processedData": [
        {
            "from_date": "2020-10-06T06:48:17.503000Z",
            "to_date": "2020-10-06T06:59:07.841000Z",
            "measurement": {
                "low": 66,
                "high": 148
            }
        },
        {
            "from_date": "2020-10-06T07:01:35.759000Z",
            "to_date": "2020-10-06T07:01:35.759000Z",
            "measurement": {
                "low": 138,
                "high": 138
            }
        },
        {
            "from_date": "2020-10-06T07:15:06.645000Z",
            "to_date": "2020-10-06T07:15:06.645000Z",
            "measurement": {
                "low": 134,
                "high": 134
            }
        },
        {
            "from_date": "2020-10-06T07:38:24.969000Z",
            "to_date": "2020-10-06T07:43:51.293000Z",
            "measurement": {
                "low": 130,
                "high": 167
            }
        },
        {
            "from_date": "2020-10-06T08:29:27.974000Z",
            "to_date": "2020-10-06T08:29:27.974000Z",
            "measurement": {
                "low": 93,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-06T08:35:44.473000Z",
            "to_date": "2020-10-06T08:44:03.973000Z",
            "measurement": {
                "low": 94,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-06T08:46:13.973000Z",
            "to_date": "2020-10-06T08:46:13.973000Z",
            "measurement": {
                "low": 97,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-06T09:01:55.433000Z",
            "to_date": "2020-10-06T09:05:52.148000Z",
            "measurement": {
                "low": 112,
                "high": 119
            }
        },
        {
            "from_date": "2020-10-06T09:21:39.413000Z",
            "to_date": "2020-10-06T09:21:39.413000Z",
            "measurement": {
                "low": 115,
                "high": 115
            }
        },
        {
            "from_date": "2020-10-06T09:30:41.435000Z",
            "to_date": "2020-10-06T09:32:16.935000Z",
            "measurement": {
                "low": 106,
                "high": 109
            }
        },
        {
            "from_date": "2020-10-06T09:49:27.434000Z",
            "to_date": "2020-10-06T09:57:55.929000Z",
            "measurement": {
                "low": 101,
                "high": 112
            }
        },
        {
            "from_date": "2020-10-06T10:00:09.114000Z",
            "to_date": "2020-10-06T10:11:19.114000Z",
            "measurement": {
                "low": 101,
                "high": 107
            }
        },
        {
            "from_date": "2020-10-06T10:18:51.114000Z",
            "to_date": "2020-10-06T10:28:20.116000Z",
            "measurement": {
                "low": 88,
                "high": 99
            }
        },
        {
            "from_date": "2020-10-06T10:33:32.115000Z",
            "to_date": "2020-10-06T10:43:45.117000Z",
            "measurement": {
                "low": 93,
                "high": 95
            }
        },
        {
            "from_date": "2020-10-06T10:48:27.617000Z",
            "to_date": "2020-10-06T10:57:38.117000Z",
            "measurement": {
                "low": 89,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-06T11:05:12.608000Z",
            "to_date": "2020-10-06T11:12:48.116000Z",
            "measurement": {
                "low": 86,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-06T11:20:04.030000Z",
            "to_date": "2020-10-06T11:27:35.115000Z",
            "measurement": {
                "low": 90,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-06T11:35:18.613000Z",
            "to_date": "2020-10-06T11:43:16.112000Z",
            "measurement": {
                "low": 80,
                "high": 81
            }
        },
        {
            "from_date": "2020-10-06T11:46:29.613000Z",
            "to_date": "2020-10-06T11:56:46.113000Z",
            "measurement": {
                "low": 78,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-06T12:05:46.112000Z",
            "to_date": "2020-10-06T12:14:55.112000Z",
            "measurement": {
                "low": 70,
                "high": 77
            }
        },
        {
            "from_date": "2020-10-06T12:20:08.110000Z",
            "to_date": "2020-10-06T12:23:36.610000Z",
            "measurement": {
                "low": 73,
                "high": 81
            }
        },
        {
            "from_date": "2020-10-06T12:30:38.110000Z",
            "to_date": "2020-10-06T12:42:18.610000Z",
            "measurement": {
                "low": 71,
                "high": 74
            }
        },
        {
            "from_date": "2020-10-06T12:46:58.108000Z",
            "to_date": "2020-10-06T12:56:48.108000Z",
            "measurement": {
                "low": 73,
                "high": 77
            }
        },
        {
            "from_date": "2020-10-06T13:01:13.107000Z",
            "to_date": "2020-10-06T13:11:49.844000Z",
            "measurement": {
                "low": 74,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T13:16:49.844000Z",
            "to_date": "2020-10-06T13:26:24.844000Z",
            "measurement": {
                "low": 72,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T13:31:00.343000Z",
            "to_date": "2020-10-06T13:42:39.843000Z",
            "measurement": {
                "low": 73,
                "high": 79
            }
        },
        {
            "from_date": "2020-10-06T13:46:39.843000Z",
            "to_date": "2020-10-06T13:56:34.842000Z",
            "measurement": {
                "low": 73,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T14:00:59.841000Z",
            "to_date": "2020-10-06T14:12:19.840000Z",
            "measurement": {
                "low": 68,
                "high": 76
            }
        },
        {
            "from_date": "2020-10-06T14:17:19.840000Z",
            "to_date": "2020-10-06T14:26:14.840000Z",
            "measurement": {
                "low": 70,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-06T14:31:09.839000Z",
            "to_date": "2020-10-06T14:41:00.334000Z",
            "measurement": {
                "low": 69,
                "high": 72
            }
        },
        {
            "from_date": "2020-10-06T14:46:24.834000Z",
            "to_date": "2020-10-06T14:56:34.837000Z",
            "measurement": {
                "low": 69,
                "high": 70
            }
        },
        {
            "from_date": "2020-10-06T15:01:49.836000Z",
            "to_date": "2020-10-06T15:12:24.836000Z",
            "measurement": {
                "low": 69,
                "high": 74
            }
        },
        {
            "from_date": "2020-10-06T15:16:09.836000Z",
            "to_date": "2020-10-06T15:27:29.836000Z",
            "measurement": {
                "low": 72,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T15:31:14.835000Z",
            "to_date": "2020-10-06T15:40:59.835000Z",
            "measurement": {
                "low": 74,
                "high": 76
            }
        },
        {
            "from_date": "2020-10-06T15:46:49.835000Z",
            "to_date": "2020-10-06T15:56:14.833000Z",
            "measurement": {
                "low": 72,
                "high": 74
            }
        },
        {
            "from_date": "2020-10-06T16:00:59.833000Z",
            "to_date": "2020-10-06T16:11:44.832000Z",
            "measurement": {
                "low": 69,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-06T16:15:59.832000Z",
            "to_date": "2020-10-06T16:27:39.831000Z",
            "measurement": {
                "low": 68,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-06T16:32:29.831000Z",
            "to_date": "2020-10-06T16:41:54.831000Z",
            "measurement": {
                "low": 68,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-06T16:45:59.831000Z",
            "to_date": "2020-10-06T16:56:40.829000Z",
            "measurement": {
                "low": 72,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T17:01:14.828000Z",
            "to_date": "2020-10-06T17:11:01.570000Z",
            "measurement": {
                "low": 73,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T17:18:31.569000Z",
            "to_date": "2020-10-06T17:26:58.568000Z",
            "measurement": {
                "low": 67,
                "high": 76
            }
        },
        {
            "from_date": "2020-10-06T17:31:16.565000Z",
            "to_date": "2020-10-06T17:41:26.562000Z",
            "measurement": {
                "low": 73,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T17:47:51.567000Z",
            "to_date": "2020-10-06T17:56:11.567000Z",
            "measurement": {
                "low": 72,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-06T18:01:01.566000Z",
            "to_date": "2020-10-06T18:11:16.566000Z",
            "measurement": {
                "low": 74,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T18:16:46.566000Z",
            "to_date": "2020-10-06T18:26:01.566000Z",
            "measurement": {
                "low": 72,
                "high": 75
            }
        },
        {
            "from_date": "2020-10-06T18:31:20.565000Z",
            "to_date": "2020-10-06T18:41:17.563000Z",
            "measurement": {
                "low": 68,
                "high": 69
            }
        },
        {
            "from_date": "2020-10-06T18:48:00.063000Z",
            "to_date": "2020-10-06T18:59:41.560000Z",
            "measurement": {
                "low": 68,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-06T19:03:51.560000Z",
            "to_date": "2020-10-06T19:11:01.561000Z",
            "measurement": {
                "low": 70,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-06T19:16:01.561000Z",
            "to_date": "2020-10-06T19:26:51.561000Z",
            "measurement": {
                "low": 68,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-06T19:31:06.561000Z",
            "to_date": "2020-10-06T19:41:02.059000Z",
            "measurement": {
                "low": 68,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-06T19:46:06.559000Z",
            "to_date": "2020-10-06T19:56:41.559000Z",
            "measurement": {
                "low": 70,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-06T20:01:34.558000Z",
            "to_date": "2020-10-06T20:06:26.557000Z",
            "measurement": {
                "low": 71,
                "high": 74
            }
        },
        {
            "from_date": "2020-10-06T20:15:43.556000Z",
            "to_date": "2020-10-06T20:29:25.057000Z",
            "measurement": {
                "low": 71,
                "high": 78
            }
        },
        {
            "from_date": "2020-10-06T20:34:09.556000Z",
            "to_date": "2020-10-06T20:41:01.553000Z",
            "measurement": {
                "low": 71,
                "high": 76
            }
        },
        {
            "from_date": "2020-10-06T20:50:31.554000Z",
            "to_date": "2020-10-06T20:56:21.554000Z",
            "measurement": {
                "low": 78,
                "high": 80
            }
        },
        {
            "from_date": "2020-10-06T21:01:51.554000Z",
            "to_date": "2020-10-06T21:11:13.268000Z",
            "measurement": {
                "low": 73,
                "high": 77
            }
        },
        {
            "from_date": "2020-10-07T00:44:19.181000Z",
            "to_date": "2020-10-07T00:44:19.181000Z",
            "measurement": {
                "low": 88,
                "high": 88
            }
        },
        {
            "from_date": "2020-10-07T00:50:54.681000Z",
            "to_date": "2020-10-07T00:58:24.681000Z",
            "measurement": {
                "low": 77,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-07T01:01:34.181000Z",
            "to_date": "2020-10-07T01:14:13.181000Z",
            "measurement": {
                "low": 81,
                "high": 95
            }
        },
        {
            "from_date": "2020-10-07T01:18:56.938000Z",
            "to_date": "2020-10-07T01:28:52.438000Z",
            "measurement": {
                "low": 85,
                "high": 85
            }
        },
        {
            "from_date": "2020-10-07T01:34:59.633000Z",
            "to_date": "2020-10-07T01:40:04.134000Z",
            "measurement": {
                "low": 84,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-07T01:48:44.235000Z",
            "to_date": "2020-10-07T01:58:48.885000Z",
            "measurement": {
                "low": 104,
                "high": 116
            }
        },
        {
            "from_date": "2020-10-07T02:06:32.465000Z",
            "to_date": "2020-10-07T02:12:36.243000Z",
            "measurement": {
                "low": 101,
                "high": 141
            }
        },
        {
            "from_date": "2020-10-07T02:17:38.094000Z",
            "to_date": "2020-10-07T02:22:04.449000Z",
            "measurement": {
                "low": 124,
                "high": 144
            }
        },
        {
            "from_date": "2020-10-07T02:38:17.947000Z",
            "to_date": "2020-10-07T02:41:17.448000Z",
            "measurement": {
                "low": 113,
                "high": 113
            }
        },
        {
            "from_date": "2020-10-07T02:50:29.945000Z",
            "to_date": "2020-10-07T02:58:35.447000Z",
            "measurement": {
                "low": 94,
                "high": 117
            }
        },
        {
            "from_date": "2020-10-07T03:01:37.445000Z",
            "to_date": "2020-10-07T03:14:41.446000Z",
            "measurement": {
                "low": 89,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-07T03:17:10.946000Z",
            "to_date": "2020-10-07T03:26:22.945000Z",
            "measurement": {
                "low": 91,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-07T03:34:12.945000Z",
            "to_date": "2020-10-07T03:36:10.445000Z",
            "measurement": {
                "low": 93,
                "high": 96
            }
        },
        {
            "from_date": "2020-10-07T03:45:01.445000Z",
            "to_date": "2020-10-07T03:54:50.140000Z",
            "measurement": {
                "low": 59,
                "high": 99
            }
        },
        {
            "from_date": "2020-10-07T04:00:56.640000Z",
            "to_date": "2020-10-07T04:11:44.140000Z",
            "measurement": {
                "low": 85,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-07T04:16:28.139000Z",
            "to_date": "2020-10-07T04:26:33.639000Z",
            "measurement": {
                "low": 86,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-07T04:31:18.639000Z",
            "to_date": "2020-10-07T04:43:08.139000Z",
            "measurement": {
                "low": 91,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-07T04:46:16.639000Z",
            "to_date": "2020-10-07T04:59:44.727000Z",
            "measurement": {
                "low": 88,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-07T05:05:51.321000Z",
            "to_date": "2020-10-07T05:11:24.063000Z",
            "measurement": {
                "low": 80,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-07T05:19:55.559000Z",
            "to_date": "2020-10-07T05:22:54.062000Z",
            "measurement": {
                "low": 88,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-07T05:30:19.562000Z",
            "to_date": "2020-10-07T05:43:03.560000Z",
            "measurement": {
                "low": 77,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-07T05:47:05.062000Z",
            "to_date": "2020-10-07T05:55:41.562000Z",
            "measurement": {
                "low": 86,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-07T06:03:58.560000Z",
            "to_date": "2020-10-07T06:08:18.560000Z",
            "measurement": {
                "low": 82,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-07T06:15:41.060000Z",
            "to_date": "2020-10-07T06:27:27.560000Z",
            "measurement": {
                "low": 76,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-07T06:32:23.559000Z",
            "to_date": "2020-10-07T06:41:09.059000Z",
            "measurement": {
                "low": 87,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-07T06:47:05.558000Z",
            "to_date": "2020-10-07T06:51:55.558000Z",
            "measurement": {
                "low": 82,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-07T07:00:40.554000Z",
            "to_date": "2020-10-07T07:10:14.555000Z",
            "measurement": {
                "low": 69,
                "high": 82
            }
        },
        {
            "from_date": "2020-10-07T07:15:17.554000Z",
            "to_date": "2020-10-07T07:26:02.054000Z",
            "measurement": {
                "low": 69,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-07T07:32:14.020000Z",
            "to_date": "2020-10-07T07:43:22.054000Z",
            "measurement": {
                "low": 76,
                "high": 81
            }
        },
        {
            "from_date": "2020-10-07T07:47:01.054000Z",
            "to_date": "2020-10-07T07:57:15.474000Z",
            "measurement": {
                "low": 75,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-07T08:01:07.553000Z",
            "to_date": "2020-10-07T08:12:19.053000Z",
            "measurement": {
                "low": 74,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-07T08:16:38.553000Z",
            "to_date": "2020-10-07T08:16:38.553000Z",
            "measurement": {
                "low": 77,
                "high": 77
            }
        },
        {
            "from_date": "2020-10-07T08:30:19.053000Z",
            "to_date": "2020-10-07T08:43:03.049000Z",
            "measurement": {
                "low": 80,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-07T08:50:36.548000Z",
            "to_date": "2020-10-07T08:52:30.048000Z",
            "measurement": {
                "low": 81,
                "high": 82
            }
        },
        {
            "from_date": "2020-10-07T09:04:45.833000Z",
            "to_date": "2020-10-07T09:13:47.820000Z",
            "measurement": {
                "low": 84,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-07T09:20:56.820000Z",
            "to_date": "2020-10-07T09:22:23.320000Z",
            "measurement": {
                "low": 59,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-07T09:32:15.616000Z",
            "to_date": "2020-10-07T09:43:09.619000Z",
            "measurement": {
                "low": 85,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-07T09:46:30.110000Z",
            "to_date": "2020-10-07T09:51:49.619000Z",
            "measurement": {
                "low": 84,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-07T10:00:16.286000Z",
            "to_date": "2020-10-07T10:11:14.786000Z",
            "measurement": {
                "low": 79,
                "high": 99
            }
        },
        {
            "from_date": "2020-10-07T21:31:54.607000Z",
            "to_date": "2020-10-07T21:43:34.794000Z",
            "measurement": {
                "low": 79,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-07T21:48:03.298000Z",
            "to_date": "2020-10-07T21:56:29.796000Z",
            "measurement": {
                "low": 89,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-07T22:03:38.791000Z",
            "to_date": "2020-10-07T22:10:40.294000Z",
            "measurement": {
                "low": 81,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-07T22:15:47.796000Z",
            "to_date": "2020-10-07T22:24:45.294000Z",
            "measurement": {
                "low": 82,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-07T22:30:49.791000Z",
            "to_date": "2020-10-07T22:40:58.794000Z",
            "measurement": {
                "low": 78,
                "high": 85
            }
        },
        {
            "from_date": "2020-10-07T22:47:58.789000Z",
            "to_date": "2020-10-07T22:58:06.286000Z",
            "measurement": {
                "low": 77,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-07T23:02:21.286000Z",
            "to_date": "2020-10-07T23:02:21.286000Z",
            "measurement": {
                "low": 79,
                "high": 79
            }
        },
        {
            "from_date": "2020-10-07T23:15:24.781000Z",
            "to_date": "2020-10-07T23:29:53.778000Z",
            "measurement": {
                "low": 73,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-07T23:31:52.278000Z",
            "to_date": "2020-10-07T23:39:13.278000Z",
            "measurement": {
                "low": 77,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-07T23:45:05.777000Z",
            "to_date": "2020-10-07T23:59:19.134000Z",
            "measurement": {
                "low": 65,
                "high": 109
            }
        },
        {
            "from_date": "2020-10-08T00:01:39.634000Z",
            "to_date": "2020-10-08T00:13:28.134000Z",
            "measurement": {
                "low": 84,
                "high": 88
            }
        },
        {
            "from_date": "2020-10-08T00:19:16.631000Z",
            "to_date": "2020-10-08T00:27:10.633000Z",
            "measurement": {
                "low": 81,
                "high": 82
            }
        },
        {
            "from_date": "2020-10-08T00:32:03.632000Z",
            "to_date": "2020-10-08T00:42:06.631000Z",
            "measurement": {
                "low": 80,
                "high": 95
            }
        },
        {
            "from_date": "2020-10-08T00:50:41.631000Z",
            "to_date": "2020-10-08T00:56:57.631000Z",
            "measurement": {
                "low": 76,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-08T01:05:39.630000Z",
            "to_date": "2020-10-08T01:09:13.630000Z",
            "measurement": {
                "low": 71,
                "high": 92
            }
        },
        {
            "from_date": "2020-10-08T01:16:51.630000Z",
            "to_date": "2020-10-08T01:16:51.630000Z",
            "measurement": {
                "low": 87,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-08T01:30:03.360000Z",
            "to_date": "2020-10-08T01:36:06.860000Z",
            "measurement": {
                "low": 83,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-08T01:45:56.361000Z",
            "to_date": "2020-10-08T01:56:03.561000Z",
            "measurement": {
                "low": 78,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-08T02:04:13.056000Z",
            "to_date": "2020-10-08T02:12:48.061000Z",
            "measurement": {
                "low": 83,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-08T02:19:16.060000Z",
            "to_date": "2020-10-08T02:26:19.060000Z",
            "measurement": {
                "low": 83,
                "high": 88
            }
        },
        {
            "from_date": "2020-10-08T02:37:39.522000Z",
            "to_date": "2020-10-08T02:42:12.559000Z",
            "measurement": {
                "low": 74,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-08T02:47:19.053000Z",
            "to_date": "2020-10-08T02:58:21.559000Z",
            "measurement": {
                "low": 74,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-08T03:08:36.556000Z",
            "to_date": "2020-10-08T03:08:36.556000Z",
            "measurement": {
                "low": 107,
                "high": 107
            }
        },
        {
            "from_date": "2020-10-08T03:20:22.555000Z",
            "to_date": "2020-10-08T03:27:48.556000Z",
            "measurement": {
                "low": 98,
                "high": 110
            }
        },
        {
            "from_date": "2020-10-08T03:32:09.556000Z",
            "to_date": "2020-10-08T03:43:53.056000Z",
            "measurement": {
                "low": 90,
                "high": 98
            }
        },
        {
            "from_date": "2020-10-08T03:48:55.557000Z",
            "to_date": "2020-10-08T03:53:25.057000Z",
            "measurement": {
                "low": 94,
                "high": 98
            }
        },
        {
            "from_date": "2020-10-08T04:00:40.557000Z",
            "to_date": "2020-10-08T04:12:36.057000Z",
            "measurement": {
                "low": 93,
                "high": 104
            }
        },
        {
            "from_date": "2020-10-08T04:17:59.058000Z",
            "to_date": "2020-10-08T04:27:03.059000Z",
            "measurement": {
                "low": 92,
                "high": 103
            }
        },
        {
            "from_date": "2020-10-08T04:32:18.060000Z",
            "to_date": "2020-10-08T04:43:30.561000Z",
            "measurement": {
                "low": 90,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-08T04:47:02.062000Z",
            "to_date": "2020-10-08T04:53:25.560000Z",
            "measurement": {
                "low": 87,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-08T05:00:43.559000Z",
            "to_date": "2020-10-08T05:12:49.777000Z",
            "measurement": {
                "low": 82,
                "high": 96
            }
        },
        {
            "from_date": "2020-10-08T05:18:42.279000Z",
            "to_date": "2020-10-08T05:28:12.278000Z",
            "measurement": {
                "low": 88,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-08T05:34:35.778000Z",
            "to_date": "2020-10-08T05:40:59.777000Z",
            "measurement": {
                "low": 91,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-08T05:47:49.777000Z",
            "to_date": "2020-10-08T05:47:49.777000Z",
            "measurement": {
                "low": 89,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-08T06:00:50.769000Z",
            "to_date": "2020-10-08T06:11:19.774000Z",
            "measurement": {
                "low": 77,
                "high": 88
            }
        },
        {
            "from_date": "2020-10-08T06:18:29.771000Z",
            "to_date": "2020-10-08T06:29:04.764000Z",
            "measurement": {
                "low": 75,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-08T06:37:29.773000Z",
            "to_date": "2020-10-08T06:37:29.773000Z",
            "measurement": {
                "low": 62,
                "high": 62
            }
        },
        {
            "from_date": "2020-10-08T06:50:51.771000Z",
            "to_date": "2020-10-08T06:59:24.771000Z",
            "measurement": {
                "low": 69,
                "high": 79
            }
        },
        {
            "from_date": "2020-10-08T07:04:34.771000Z",
            "to_date": "2020-10-08T07:06:33.771000Z",
            "measurement": {
                "low": 83,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-08T07:15:57.271000Z",
            "to_date": "2020-10-08T07:25:35.270000Z",
            "measurement": {
                "low": 65,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-08T07:39:19.771000Z",
            "to_date": "2020-10-08T07:39:19.771000Z",
            "measurement": {
                "low": 113,
                "high": 113
            }
        },
        {
            "from_date": "2020-10-08T07:47:49.118000Z",
            "to_date": "2020-10-08T07:59:59.111000Z",
            "measurement": {
                "low": 108,
                "high": 164
            }
        },
        {
            "from_date": "2020-10-08T08:00:01.111000Z",
            "to_date": "2020-10-08T08:14:23.111000Z",
            "measurement": {
                "low": 112,
                "high": 154
            }
        },
        {
            "from_date": "2020-10-08T08:22:19.668000Z",
            "to_date": "2020-10-08T08:28:58.664000Z",
            "measurement": {
                "low": 110,
                "high": 142
            }
        },
        {
            "from_date": "2020-10-08T08:42:37.976000Z",
            "to_date": "2020-10-08T08:42:37.976000Z",
            "measurement": {
                "low": 69,
                "high": 69
            }
        },
        {
            "from_date": "2020-10-08T09:17:29.971000Z",
            "to_date": "2020-10-08T09:17:29.971000Z",
            "measurement": {
                "low": 89,
                "high": 89
            }
        },
        {
            "from_date": "2020-10-08T09:50:01.965000Z",
            "to_date": "2020-10-08T09:51:30.656000Z",
            "measurement": {
                "low": 98,
                "high": 99
            }
        },
        {
            "from_date": "2020-10-08T10:31:05.518000Z",
            "to_date": "2020-10-08T10:31:05.518000Z",
            "measurement": {
                "low": 124,
                "high": 124
            }
        },
        {
            "from_date": "2020-10-08T10:52:20.449000Z",
            "to_date": "2020-10-08T10:52:20.449000Z",
            "measurement": {
                "low": 108,
                "high": 108
            }
        },
        {
            "from_date": "2020-10-08T11:00:16.949000Z",
            "to_date": "2020-10-08T11:10:56.454000Z",
            "measurement": {
                "low": 95,
                "high": 102
            }
        },
        {
            "from_date": "2020-10-08T11:15:39.955000Z",
            "to_date": "2020-10-08T11:27:11.455000Z",
            "measurement": {
                "low": 90,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-08T11:35:11.455000Z",
            "to_date": "2020-10-08T11:36:35.455000Z",
            "measurement": {
                "low": 90,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-08T22:10:42.438000Z",
            "to_date": "2020-10-08T22:14:22.149000Z",
            "measurement": {
                "low": 90,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-08T22:20:55.648000Z",
            "to_date": "2020-10-08T22:22:56.648000Z",
            "measurement": {
                "low": 91,
                "high": 93
            }
        },
        {
            "from_date": "2020-10-08T22:30:50.647000Z",
            "to_date": "2020-10-08T22:44:00.646000Z",
            "measurement": {
                "low": 87,
                "high": 97
            }
        },
        {
            "from_date": "2020-10-08T22:47:11.644000Z",
            "to_date": "2020-10-08T22:54:45.144000Z",
            "measurement": {
                "low": 84,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-08T23:00:40.644000Z",
            "to_date": "2020-10-08T23:13:50.645000Z",
            "measurement": {
                "low": 81,
                "high": 84
            }
        },
        {
            "from_date": "2020-10-08T23:18:10.644000Z",
            "to_date": "2020-10-08T23:26:35.642000Z",
            "measurement": {
                "low": 75,
                "high": 79
            }
        },
        {
            "from_date": "2020-10-08T23:34:15.642000Z",
            "to_date": "2020-10-08T23:41:25.643000Z",
            "measurement": {
                "low": 69,
                "high": 73
            }
        },
        {
            "from_date": "2020-10-08T23:47:00.643000Z",
            "to_date": "2020-10-08T23:56:20.641000Z",
            "measurement": {
                "low": 68,
                "high": 71
            }
        },
        {
            "from_date": "2020-10-09T00:01:10.641000Z",
            "to_date": "2020-10-09T00:12:52.565000Z",
            "measurement": {
                "low": 67,
                "high": 100
            }
        },
        {
            "from_date": "2020-10-09T00:17:21.671000Z",
            "to_date": "2020-10-09T00:27:18.346000Z",
            "measurement": {
                "low": 91,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-09T00:30:22.022000Z",
            "to_date": "2020-10-09T00:42:01.100000Z",
            "measurement": {
                "low": 85,
                "high": 100
            }
        },
        {
            "from_date": "2020-10-09T00:46:25.599000Z",
            "to_date": "2020-10-09T00:51:44.099000Z",
            "measurement": {
                "low": 89,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-09T01:00:52.598000Z",
            "to_date": "2020-10-09T01:14:44.290000Z",
            "measurement": {
                "low": 88,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-09T01:16:12.290000Z",
            "to_date": "2020-10-09T01:27:19.287000Z",
            "measurement": {
                "low": 91,
                "high": 95
            }
        },
        {
            "from_date": "2020-10-09T01:35:11.287000Z",
            "to_date": "2020-10-09T01:43:09.287000Z",
            "measurement": {
                "low": 79,
                "high": 91
            }
        },
        {
            "from_date": "2020-10-09T01:50:40.285000Z",
            "to_date": "2020-10-09T01:58:45.281000Z",
            "measurement": {
                "low": 86,
                "high": 92
            }
        },
        {
            "from_date": "2020-10-09T02:03:22.781000Z",
            "to_date": "2020-10-09T02:12:08.286000Z",
            "measurement": {
                "low": 82,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-09T02:18:23.785000Z",
            "to_date": "2020-10-09T02:27:14.785000Z",
            "measurement": {
                "low": 82,
                "high": 90
            }
        },
        {
            "from_date": "2020-10-09T02:35:55.785000Z",
            "to_date": "2020-10-09T02:43:25.784000Z",
            "measurement": {
                "low": 82,
                "high": 86
            }
        },
        {
            "from_date": "2020-10-09T02:47:59.284000Z",
            "to_date": "2020-10-09T02:59:56.283000Z",
            "measurement": {
                "low": 84,
                "high": 87
            }
        },
        {
            "from_date": "2020-10-09T03:02:29.283000Z",
            "to_date": "2020-10-09T03:11:20.782000Z",
            "measurement": {
                "low": 82,
                "high": 83
            }
        },
        {
            "from_date": "2020-10-09T03:20:39.281000Z",
            "to_date": "2020-10-09T03:26:11.779000Z",
            "measurement": {
                "low": 74,
                "high": 82
            }
        },
        {
            "from_date": "2020-10-09T03:33:35.430000Z",
            "to_date": "2020-10-09T03:35:33.507000Z",
            "measurement": {
                "low": 67,
                "high": 109
            }
        },
        {
            "from_date": "2020-10-09T03:49:41.093000Z",
            "to_date": "2020-10-09T03:52:58.670000Z",
            "measurement": {
                "low": 64,
                "high": 105
            }
        },
        {
            "from_date": "2020-10-09T04:02:13.641000Z",
            "to_date": "2020-10-09T04:09:42.206000Z",
            "measurement": {
                "low": 90,
                "high": 118
            }
        },
        {
            "from_date": "2020-10-09T04:15:57.707000Z",
            "to_date": "2020-10-09T04:29:17.209000Z",
            "measurement": {
                "low": 83,
                "high": 94
            }
        },
        {
            "from_date": "2020-10-09T04:33:49.706000Z",
            "to_date": "2020-10-09T04:36:44.709000Z",
            "measurement": {
                "low": 81,
                "high": 82
            }
        },
        {
            "from_date": "2020-10-09T04:45:06.209000Z",
            "to_date": "2020-10-09T04:59:55.705000Z",
            "measurement": {
                "low": 77,
                "high": 88
            }
        },
        {
            "from_date": "2020-10-09T05:01:26.203000Z",
            "to_date": "2020-10-09T05:12:12.072000Z",
            "measurement": {
                "low": 76,
                "high": 80
            }
        },
        {
            "from_date": "2020-10-09T05:20:25.875000Z",
            "to_date": "2020-10-09T05:23:18.372000Z",
            "measurement": {
                "low": 77,
                "high": 82
            }
        }
    ],
    "rawData": {
        "HEART_RATE": {
            "uom": "beats/min",
            "data": [
                {
                    "on_date": "2020-10-06T06:48:17.503000Z",
                    "measurement": "111"
                },
                {
                    "on_date": "2020-10-06T06:48:38.065000Z",
                    "measurement": "66"
                },
                {
                    "on_date": "2020-10-06T06:55:36.001000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-06T06:59:07.841000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-06T07:01:35.759000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-06T07:15:06.645000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-06T07:38:24.969000Z",
                    "measurement": "162"
                },
                {
                    "on_date": "2020-10-06T07:38:29.969000Z",
                    "measurement": "164"
                },
                {
                    "on_date": "2020-10-06T07:38:33.969000Z",
                    "measurement": "164"
                },
                {
                    "on_date": "2020-10-06T07:38:36.969000Z",
                    "measurement": "165"
                },
                {
                    "on_date": "2020-10-06T07:38:40.969000Z",
                    "measurement": "165"
                },
                {
                    "on_date": "2020-10-06T07:38:45.969000Z",
                    "measurement": "167"
                },
                {
                    "on_date": "2020-10-06T07:38:54.969000Z",
                    "measurement": "165"
                },
                {
                    "on_date": "2020-10-06T07:38:55.969000Z",
                    "measurement": "165"
                },
                {
                    "on_date": "2020-10-06T07:39:00.969000Z",
                    "measurement": "165"
                },
                {
                    "on_date": "2020-10-06T07:39:05.969000Z",
                    "measurement": "163"
                },
                {
                    "on_date": "2020-10-06T07:39:14.969000Z",
                    "measurement": "160"
                },
                {
                    "on_date": "2020-10-06T07:39:19.969000Z",
                    "measurement": "162"
                },
                {
                    "on_date": "2020-10-06T07:39:24.969000Z",
                    "measurement": "161"
                },
                {
                    "on_date": "2020-10-06T07:39:28.969000Z",
                    "measurement": "161"
                },
                {
                    "on_date": "2020-10-06T07:39:30.969000Z",
                    "measurement": "162"
                },
                {
                    "on_date": "2020-10-06T07:39:35.969000Z",
                    "measurement": "162"
                },
                {
                    "on_date": "2020-10-06T07:39:44.969000Z",
                    "measurement": "156"
                },
                {
                    "on_date": "2020-10-06T07:39:46.969000Z",
                    "measurement": "155"
                },
                {
                    "on_date": "2020-10-06T07:39:50.969000Z",
                    "measurement": "151"
                },
                {
                    "on_date": "2020-10-06T07:39:55.969000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-06T07:40:00.969000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-06T07:40:05.969000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-06T07:40:14.969000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-06T07:40:19.969000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-06T07:40:20.969000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-06T07:40:28.969000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-06T07:40:30.969000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-06T07:40:39.969000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-06T07:40:42.969000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-06T07:40:47.969000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-06T07:40:51.969000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-06T07:40:55.969000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-06T07:41:04.969000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-06T07:41:08.969000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-06T07:41:10.969000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-06T07:41:15.969000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-06T07:41:21.969000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-06T07:41:29.969000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-06T07:41:30.969000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-06T07:41:35.969000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-06T07:41:40.969000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-06T07:41:45.969000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-06T07:41:54.969000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-06T07:41:55.969000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-06T07:42:04.969000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-06T07:42:09.969000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-06T07:42:13.969000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-06T07:42:15.969000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-06T07:42:20.969000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-06T07:42:29.969000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-06T07:42:34.969000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-06T07:42:35.969000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-06T07:42:40.969000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-06T07:42:45.969000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-06T07:42:54.969000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-06T07:42:56.969000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-06T07:43:03.969000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-06T07:43:07.969000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-06T07:43:12.969000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-06T07:43:19.969000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-06T07:43:20.969000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-06T07:43:28.969000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-06T07:43:30.969000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-06T07:43:36.969000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-06T07:43:40.969000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-06T07:43:51.293000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-06T08:29:27.974000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-06T08:35:44.473000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-06T08:39:38.974000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-06T08:44:03.973000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-06T08:46:13.973000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-06T09:01:55.433000Z",
                    "measurement": "112"
                },
                {
                    "on_date": "2020-10-06T09:05:52.148000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-06T09:21:39.413000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-06T09:30:41.435000Z",
                    "measurement": "109"
                },
                {
                    "on_date": "2020-10-06T09:32:16.935000Z",
                    "measurement": "106"
                },
                {
                    "on_date": "2020-10-06T09:49:27.434000Z",
                    "measurement": "112"
                },
                {
                    "on_date": "2020-10-06T09:53:33.434000Z",
                    "measurement": "109"
                },
                {
                    "on_date": "2020-10-06T09:57:55.929000Z",
                    "measurement": "101"
                },
                {
                    "on_date": "2020-10-06T10:00:09.114000Z",
                    "measurement": "103"
                },
                {
                    "on_date": "2020-10-06T10:01:15.115000Z",
                    "measurement": "101"
                },
                {
                    "on_date": "2020-10-06T10:08:01.115000Z",
                    "measurement": "107"
                },
                {
                    "on_date": "2020-10-06T10:11:19.114000Z",
                    "measurement": "104"
                },
                {
                    "on_date": "2020-10-06T10:18:51.114000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-06T10:25:09.114000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-06T10:28:20.116000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-06T10:33:32.115000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-06T10:39:15.116000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-06T10:43:45.117000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-06T10:48:27.617000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-06T10:51:24.617000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-06T10:57:38.117000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-06T11:05:12.608000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-06T11:06:38.108000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-06T11:12:48.116000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-06T11:20:04.030000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-06T11:25:48.115000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-06T11:27:35.115000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-06T11:35:18.613000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-06T11:37:22.613000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-06T11:43:16.112000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-06T11:46:29.613000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-06T11:52:20.612000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-06T11:56:46.113000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-06T12:05:46.112000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T12:09:52.112000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T12:14:55.112000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-06T12:20:08.110000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-06T12:23:36.610000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T12:30:38.110000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T12:34:48.110000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T12:40:19.610000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T12:42:18.610000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T12:46:58.108000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-06T12:52:03.107000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T12:56:48.108000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T13:01:13.107000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T13:02:48.107000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T13:05:58.844000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T13:11:49.844000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T13:16:49.844000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T13:21:19.844000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T13:26:24.844000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T13:31:00.343000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T13:36:14.843000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-06T13:42:39.843000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T13:46:39.843000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T13:50:59.842000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T13:56:34.842000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T14:00:59.841000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T14:06:14.841000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T14:12:19.840000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T14:17:19.840000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T14:21:04.840000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T14:26:14.840000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T14:31:09.839000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T14:36:04.839000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T14:41:00.334000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T14:46:24.834000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T14:50:59.837000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T14:56:34.837000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T15:01:49.836000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T15:07:24.836000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T15:12:24.836000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T15:16:09.836000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T15:21:04.836000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T15:27:29.836000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T15:31:14.835000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T15:37:34.835000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T15:40:59.835000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T15:46:49.835000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T15:51:14.833000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T15:56:14.833000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T16:00:59.833000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T16:06:21.833000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T16:11:44.832000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T16:15:59.832000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T16:21:14.832000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T16:27:39.831000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T16:32:29.831000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T16:37:04.831000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T16:41:54.831000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T16:45:59.831000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T16:51:14.830000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T16:56:40.829000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T17:01:14.828000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T17:02:49.828000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:06:08.070000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:11:01.570000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:18:31.569000Z",
                    "measurement": "67"
                },
                {
                    "on_date": "2020-10-06T17:21:01.569000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T17:26:58.568000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T17:31:16.565000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T17:39:17.062000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T17:41:26.562000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:47:51.567000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:51:01.567000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T17:56:11.567000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T18:01:01.566000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T18:06:31.566000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T18:11:16.566000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T18:16:46.566000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T18:21:45.066000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T18:26:01.566000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T18:31:20.565000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T18:37:29.065000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T18:41:17.563000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T18:48:00.063000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T18:52:01.561000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-06T18:59:41.560000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T19:03:51.560000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T19:08:51.561000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T19:11:01.561000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T19:16:01.561000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T19:21:31.561000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T19:26:51.561000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T19:31:06.561000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-06T19:36:01.561000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T19:41:02.059000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T19:46:06.559000Z",
                    "measurement": "70"
                },
                {
                    "on_date": "2020-10-06T19:51:01.559000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T19:56:41.559000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T20:01:34.558000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T20:06:26.557000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T20:15:43.556000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T20:18:11.556000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-06T20:20:59.556000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T20:29:25.057000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-06T20:34:09.556000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-06T20:36:16.553000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-06T20:41:01.553000Z",
                    "measurement": "72"
                },
                {
                    "on_date": "2020-10-06T20:50:31.554000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-06T20:53:40.054000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-06T20:56:21.554000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-06T21:01:51.554000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-06T21:02:58.554000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-06T21:06:08.268000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-06T21:11:13.268000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-07T00:44:19.181000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T00:50:54.681000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T00:52:14.681000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T00:58:24.681000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-07T01:01:34.181000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T01:08:04.176000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-07T01:14:13.181000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T01:18:56.938000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T01:21:12.438000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T01:28:52.438000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T01:34:59.633000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T01:40:04.134000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T01:48:44.235000Z",
                    "measurement": "104"
                },
                {
                    "on_date": "2020-10-07T01:58:48.885000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-07T02:06:32.465000Z",
                    "measurement": "101"
                },
                {
                    "on_date": "2020-10-07T02:09:12.173000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-07T02:12:05.165000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-07T02:12:36.243000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-07T02:17:38.094000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-07T02:20:34.371000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-07T02:22:04.449000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-07T02:38:17.947000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-07T02:41:17.448000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-07T02:50:29.945000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-07T02:53:36.947000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-07T02:58:35.447000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-07T03:01:37.445000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-07T03:10:20.945000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-07T03:14:41.446000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-07T03:17:10.946000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-07T03:23:41.945000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T03:26:22.945000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-07T03:34:12.945000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-07T03:36:10.445000Z",
                    "measurement": "96"
                },
                {
                    "on_date": "2020-10-07T03:45:01.445000Z",
                    "measurement": "59"
                },
                {
                    "on_date": "2020-10-07T03:46:32.945000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-07T03:54:50.140000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T04:00:56.640000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-07T04:02:39.140000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-07T04:07:38.640000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T04:11:44.140000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T04:16:28.139000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-07T04:21:44.639000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T04:26:33.639000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-07T04:31:18.639000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-07T04:40:56.639000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-07T04:43:08.139000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T04:46:16.639000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T04:53:41.137000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-07T04:59:44.727000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-07T05:05:51.321000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T05:07:23.821000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-07T05:10:15.820000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T05:11:24.063000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T05:19:55.559000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T05:22:54.062000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T05:30:19.562000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T05:33:12.563000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T05:39:28.559000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-07T05:43:03.560000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-07T05:47:05.062000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T05:55:41.562000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T06:03:58.560000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T06:08:18.560000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T06:15:41.060000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-07T06:18:54.560000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T06:23:44.059000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T06:27:27.560000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-07T06:32:23.559000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-07T06:36:19.059000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-07T06:41:09.059000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-07T06:47:05.558000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T06:51:55.558000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-07T07:00:40.554000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T07:05:04.554000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T07:10:14.555000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-07T07:15:17.554000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T07:19:07.054000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-07T07:24:49.037000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T07:26:02.054000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-07T07:32:14.020000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T07:39:15.038000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-07T07:43:22.054000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T07:47:01.054000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-07T07:55:56.054000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T07:57:15.474000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T08:01:07.553000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T08:10:44.053000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-07T08:12:19.053000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-07T08:16:38.553000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-07T08:30:19.053000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T08:34:19.552000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T08:38:13.050000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T08:43:03.049000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T08:50:36.548000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T08:52:30.048000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T09:04:45.833000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T09:08:09.821000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-07T09:13:47.820000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T09:20:56.820000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T09:22:23.320000Z",
                    "measurement": "59"
                },
                {
                    "on_date": "2020-10-07T09:32:15.616000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-07T09:38:44.619000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T09:43:09.619000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T09:46:30.110000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T09:51:49.619000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T10:00:16.286000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T10:04:13.286000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-07T10:08:26.286000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T10:11:14.786000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-07T21:31:54.607000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T21:33:56.303000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T21:40:55.800000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-07T21:43:34.794000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-07T21:48:03.298000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-07T21:55:16.296000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-07T21:56:29.796000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-07T22:03:38.791000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T22:10:40.294000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T22:15:47.796000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-07T22:19:24.294000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-07T22:24:45.294000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-07T22:30:49.791000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-07T22:35:55.768000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T22:38:36.294000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-07T22:40:58.794000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-07T22:47:58.789000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T22:51:42.287000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-07T22:58:06.286000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-07T23:02:21.286000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-07T23:15:24.781000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-07T23:16:40.281000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-07T23:20:58.280000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-07T23:29:53.778000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-07T23:31:52.278000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-07T23:39:13.278000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-07T23:45:05.777000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-07T23:46:24.777000Z",
                    "measurement": "65"
                },
                {
                    "on_date": "2020-10-07T23:54:27.377000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-07T23:58:09.056000Z",
                    "measurement": "109"
                },
                {
                    "on_date": "2020-10-07T23:59:19.134000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-08T00:01:39.634000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T00:08:14.134000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-08T00:13:28.134000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-08T00:19:16.631000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T00:25:51.633000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T00:27:10.633000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-08T00:32:03.632000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-08T00:39:09.631000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T00:42:06.631000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-08T00:50:41.631000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-08T00:55:47.131000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T00:56:57.631000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-08T01:05:39.630000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-08T01:09:13.630000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-08T01:16:51.630000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-08T01:30:03.360000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T01:33:15.359000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T01:36:06.860000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T01:45:56.361000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T01:48:03.561000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-08T01:54:48.561000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T01:56:03.561000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T02:04:13.056000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-08T02:08:55.061000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T02:12:48.061000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T02:19:16.060000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-08T02:24:52.060000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-08T02:26:19.060000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T02:37:39.522000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T02:42:12.559000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-08T02:47:19.053000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-08T02:52:40.559000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-08T02:58:21.559000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-08T03:08:36.556000Z",
                    "measurement": "107"
                },
                {
                    "on_date": "2020-10-08T03:20:22.555000Z",
                    "measurement": "110"
                },
                {
                    "on_date": "2020-10-08T03:25:29.056000Z",
                    "measurement": "103"
                },
                {
                    "on_date": "2020-10-08T03:27:48.556000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T03:32:09.556000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T03:40:52.556000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T03:43:53.056000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-08T03:48:55.557000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-08T03:53:25.057000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T04:00:40.557000Z",
                    "measurement": "104"
                },
                {
                    "on_date": "2020-10-08T04:04:58.053000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-08T04:07:16.057000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T04:12:36.057000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-08T04:17:59.058000Z",
                    "measurement": "103"
                },
                {
                    "on_date": "2020-10-08T04:25:54.559000Z",
                    "measurement": "96"
                },
                {
                    "on_date": "2020-10-08T04:27:03.059000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-08T04:32:18.060000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T04:37:43.560000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-08T04:43:30.561000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T04:47:02.062000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-08T04:53:25.560000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-08T05:00:43.559000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T05:02:35.559000Z",
                    "measurement": "96"
                },
                {
                    "on_date": "2020-10-08T05:03:58.059000Z",
                    "measurement": "96"
                },
                {
                    "on_date": "2020-10-08T05:10:39.277000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-08T05:12:49.777000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-08T05:18:42.279000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-08T05:24:25.778000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-08T05:28:12.278000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-08T05:34:35.778000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-08T05:36:14.778000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-08T05:40:59.777000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-08T05:47:49.777000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-08T06:00:50.769000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-08T06:04:15.274000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T06:08:28.274000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-08T06:11:19.774000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-08T06:18:29.771000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-08T06:24:35.271000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T06:29:04.764000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-08T06:37:29.773000Z",
                    "measurement": "62"
                },
                {
                    "on_date": "2020-10-08T06:50:51.771000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-08T06:54:46.767000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-08T06:59:24.771000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-08T07:04:34.771000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T07:06:33.771000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T07:15:57.271000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-08T07:19:17.771000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-08T07:25:35.270000Z",
                    "measurement": "65"
                },
                {
                    "on_date": "2020-10-08T07:39:19.771000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T07:47:49.118000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T07:47:54.118000Z",
                    "measurement": "120"
                },
                {
                    "on_date": "2020-10-08T07:47:59.118000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T07:48:00.118000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T07:48:09.118000Z",
                    "measurement": "114"
                },
                {
                    "on_date": "2020-10-08T07:48:13.118000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T07:48:17.118000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T07:48:23.118000Z",
                    "measurement": "109"
                },
                {
                    "on_date": "2020-10-08T07:48:25.118000Z",
                    "measurement": "108"
                },
                {
                    "on_date": "2020-10-08T07:48:31.118000Z",
                    "measurement": "114"
                },
                {
                    "on_date": "2020-10-08T07:48:36.118000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-08T07:48:44.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T07:48:45.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T07:48:50.111000Z",
                    "measurement": "121"
                },
                {
                    "on_date": "2020-10-08T07:48:55.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T07:49:04.111000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T07:49:09.111000Z",
                    "measurement": "121"
                },
                {
                    "on_date": "2020-10-08T07:49:13.111000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T07:49:16.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T07:49:20.111000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T07:49:26.111000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T07:49:32.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T07:49:35.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T07:49:44.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T07:49:46.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T07:49:54.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T07:49:58.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:50:04.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:50:09.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:50:13.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:50:16.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:50:22.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:50:25.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:50:32.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:50:36.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:50:40.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T07:50:46.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:50:52.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T07:50:55.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T07:51:04.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T07:51:08.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T07:51:10.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T07:51:19.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T07:51:21.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T07:51:26.111000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-08T07:51:33.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T07:51:36.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T07:51:42.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T07:51:48.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:51:53.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:51:55.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:52:03.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T07:52:07.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T07:52:14.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T07:52:16.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T07:52:20.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T07:52:27.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T07:52:30.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T07:52:36.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T07:52:42.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T07:52:46.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T07:52:54.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T07:52:58.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T07:53:03.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T07:53:09.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T07:53:11.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T07:53:16.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T07:53:22.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T07:53:25.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T07:53:31.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T07:53:36.111000Z",
                    "measurement": "151"
                },
                {
                    "on_date": "2020-10-08T07:53:40.111000Z",
                    "measurement": "154"
                },
                {
                    "on_date": "2020-10-08T07:53:48.111000Z",
                    "measurement": "157"
                },
                {
                    "on_date": "2020-10-08T07:53:50.111000Z",
                    "measurement": "157"
                },
                {
                    "on_date": "2020-10-08T07:53:59.111000Z",
                    "measurement": "161"
                },
                {
                    "on_date": "2020-10-08T07:54:01.111000Z",
                    "measurement": "161"
                },
                {
                    "on_date": "2020-10-08T07:54:09.111000Z",
                    "measurement": "163"
                },
                {
                    "on_date": "2020-10-08T07:54:10.111000Z",
                    "measurement": "163"
                },
                {
                    "on_date": "2020-10-08T07:54:15.111000Z",
                    "measurement": "164"
                },
                {
                    "on_date": "2020-10-08T07:54:24.111000Z",
                    "measurement": "164"
                },
                {
                    "on_date": "2020-10-08T07:54:25.111000Z",
                    "measurement": "162"
                },
                {
                    "on_date": "2020-10-08T07:54:34.111000Z",
                    "measurement": "161"
                },
                {
                    "on_date": "2020-10-08T07:54:39.111000Z",
                    "measurement": "158"
                },
                {
                    "on_date": "2020-10-08T07:54:44.111000Z",
                    "measurement": "158"
                },
                {
                    "on_date": "2020-10-08T07:54:48.111000Z",
                    "measurement": "158"
                },
                {
                    "on_date": "2020-10-08T07:54:50.111000Z",
                    "measurement": "157"
                },
                {
                    "on_date": "2020-10-08T07:54:55.111000Z",
                    "measurement": "156"
                },
                {
                    "on_date": "2020-10-08T07:55:00.111000Z",
                    "measurement": "155"
                },
                {
                    "on_date": "2020-10-08T07:55:08.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T07:55:14.111000Z",
                    "measurement": "151"
                },
                {
                    "on_date": "2020-10-08T07:55:17.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T07:55:23.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T07:55:29.111000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-08T07:55:30.111000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-08T07:55:37.111000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-08T07:55:43.111000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-08T07:55:45.111000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-08T07:55:50.111000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-08T07:55:59.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T07:56:00.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T07:56:09.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:13.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:15.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:20.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:56:25.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:30.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:38.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T07:56:40.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T07:56:45.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T07:56:54.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T07:56:59.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:57:02.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:57:05.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:57:11.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:57:17.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:57:24.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:57:28.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:57:32.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:57:37.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:57:42.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T07:57:45.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:57:50.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:57:59.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:58:02.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:58:09.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:58:11.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:58:18.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T07:58:21.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T07:58:29.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:58:31.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:58:36.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:58:43.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:58:46.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:58:53.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T07:58:55.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T07:59:03.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:59:06.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T07:59:14.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:59:19.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:59:24.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T07:59:26.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T07:59:32.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T07:59:37.111000Z",
                    "measurement": "127"
                },
                {
                    "on_date": "2020-10-08T07:59:43.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T07:59:45.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T07:59:50.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T07:59:59.111000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:00:01.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T08:00:06.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T08:00:14.111000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:00:17.111000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:00:21.111000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:00:26.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:00:34.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:00:36.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:00:40.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:00:48.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:00:50.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:00:59.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:01:00.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:01:09.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:01:10.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:01:19.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:01:24.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:01:28.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:01:30.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:01:36.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:01:44.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:01:45.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:01:54.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:01:56.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:02:03.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:02:08.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:02:14.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:02:16.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:02:22.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:02:27.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:02:30.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:02:39.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T08:02:40.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:02:49.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:02:50.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:02:57.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:03:00.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:03:08.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:03:11.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:03:16.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:03:23.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:03:27.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:03:31.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:03:39.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:03:40.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:03:48.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:03:54.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:03:56.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:04:00.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:04:07.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:04:12.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:04:19.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T08:04:21.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T08:04:29.111000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:04:30.111000Z",
                    "measurement": "121"
                },
                {
                    "on_date": "2020-10-08T08:04:38.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:04:44.111000Z",
                    "measurement": "120"
                },
                {
                    "on_date": "2020-10-08T08:04:49.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:04:51.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:04:55.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:05:04.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:05:06.111000Z",
                    "measurement": "120"
                },
                {
                    "on_date": "2020-10-08T08:05:14.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:05:17.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:05:21.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:05:29.111000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:05:32.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:05:36.111000Z",
                    "measurement": "120"
                },
                {
                    "on_date": "2020-10-08T08:05:40.111000Z",
                    "measurement": "120"
                },
                {
                    "on_date": "2020-10-08T08:05:46.111000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:05:54.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:05:58.111000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:06:03.111000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:06:06.111000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:06:10.111000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-08T08:06:18.111000Z",
                    "measurement": "112"
                },
                {
                    "on_date": "2020-10-08T08:06:21.111000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-08T08:06:25.111000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:06:34.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:06:37.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:06:40.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:06:49.111000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:06:53.111000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:06:55.111000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:07:01.111000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T08:07:09.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T08:07:13.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T08:07:15.111000Z",
                    "measurement": "126"
                },
                {
                    "on_date": "2020-10-08T08:07:24.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:07:27.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:07:31.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:07:39.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:07:44.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:07:45.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:07:50.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:07:55.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:08:00.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:08:09.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:08:11.111000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:08:15.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:08:20.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:08:25.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:08:34.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:08:35.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:08:41.111000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:08:49.111000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:08:50.111000Z",
                    "measurement": "126"
                },
                {
                    "on_date": "2020-10-08T08:08:58.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:09:00.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:09:09.111000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:09:14.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:09:15.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:09:23.111000Z",
                    "measurement": "140"
                },
                {
                    "on_date": "2020-10-08T08:09:27.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:09:30.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:09:39.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:09:43.111000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-08T08:09:49.111000Z",
                    "measurement": "144"
                },
                {
                    "on_date": "2020-10-08T08:09:52.111000Z",
                    "measurement": "147"
                },
                {
                    "on_date": "2020-10-08T08:09:58.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T08:10:00.111000Z",
                    "measurement": "150"
                },
                {
                    "on_date": "2020-10-08T08:10:06.111000Z",
                    "measurement": "148"
                },
                {
                    "on_date": "2020-10-08T08:10:11.111000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-08T08:10:19.111000Z",
                    "measurement": "152"
                },
                {
                    "on_date": "2020-10-08T08:10:24.111000Z",
                    "measurement": "152"
                },
                {
                    "on_date": "2020-10-08T08:10:27.111000Z",
                    "measurement": "153"
                },
                {
                    "on_date": "2020-10-08T08:10:31.111000Z",
                    "measurement": "154"
                },
                {
                    "on_date": "2020-10-08T08:10:38.111000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-08T08:10:40.111000Z",
                    "measurement": "149"
                },
                {
                    "on_date": "2020-10-08T08:10:49.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T08:10:52.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T08:10:59.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T08:11:00.111000Z",
                    "measurement": "146"
                },
                {
                    "on_date": "2020-10-08T08:11:07.111000Z",
                    "measurement": "145"
                },
                {
                    "on_date": "2020-10-08T08:11:10.111000Z",
                    "measurement": "143"
                },
                {
                    "on_date": "2020-10-08T08:11:19.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:11:23.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:11:27.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:11:32.111000Z",
                    "measurement": "125"
                },
                {
                    "on_date": "2020-10-08T08:11:35.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T08:11:41.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T08:11:46.111000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T08:11:54.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:11:56.111000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:12:03.111000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:12:09.111000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:12:12.111000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:12:19.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:12:20.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:12:27.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:12:31.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:12:39.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:12:41.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:12:49.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:12:51.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:12:59.111000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:13:03.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:13:08.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:13:13.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:13:17.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:13:22.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:13:27.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:13:33.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:13:35.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:13:41.111000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:13:49.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:13:51.111000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:13:57.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:14:00.111000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:14:06.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:14:14.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:14:19.111000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:14:23.111000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:22:19.668000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:22:22.668000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:22:27.668000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:22:29.668000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:22:33.668000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:22:42.668000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:22:43.668000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:22:51.668000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:22:53.668000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:23:02.668000Z",
                    "measurement": "137"
                },
                {
                    "on_date": "2020-10-08T08:23:06.668000Z",
                    "measurement": "139"
                },
                {
                    "on_date": "2020-10-08T08:23:12.664000Z",
                    "measurement": "142"
                },
                {
                    "on_date": "2020-10-08T08:23:14.664000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:23:22.664000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:23:23.664000Z",
                    "measurement": "141"
                },
                {
                    "on_date": "2020-10-08T08:23:32.664000Z",
                    "measurement": "138"
                },
                {
                    "on_date": "2020-10-08T08:23:34.664000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:23:38.664000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:23:47.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:23:52.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:23:53.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:23:58.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:24:07.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:24:11.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:24:13.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:24:22.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:24:25.664000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:24:29.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:24:37.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:24:39.664000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:24:46.664000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:24:51.664000Z",
                    "measurement": "132"
                },
                {
                    "on_date": "2020-10-08T08:24:53.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:25:02.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:25:07.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:25:12.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:25:13.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:25:18.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:25:27.664000Z",
                    "measurement": "131"
                },
                {
                    "on_date": "2020-10-08T08:25:32.664000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:25:33.664000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:25:42.664000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:25:47.664000Z",
                    "measurement": "127"
                },
                {
                    "on_date": "2020-10-08T08:25:48.664000Z",
                    "measurement": "128"
                },
                {
                    "on_date": "2020-10-08T08:25:53.664000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:25:58.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:26:04.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:26:12.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:26:17.664000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:26:18.664000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:26:23.664000Z",
                    "measurement": "134"
                },
                {
                    "on_date": "2020-10-08T08:26:32.664000Z",
                    "measurement": "133"
                },
                {
                    "on_date": "2020-10-08T08:26:37.664000Z",
                    "measurement": "135"
                },
                {
                    "on_date": "2020-10-08T08:26:40.664000Z",
                    "measurement": "136"
                },
                {
                    "on_date": "2020-10-08T08:26:47.664000Z",
                    "measurement": "130"
                },
                {
                    "on_date": "2020-10-08T08:26:49.664000Z",
                    "measurement": "129"
                },
                {
                    "on_date": "2020-10-08T08:26:56.664000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T08:26:58.664000Z",
                    "measurement": "123"
                },
                {
                    "on_date": "2020-10-08T08:27:07.664000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:27:12.664000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:27:14.664000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:27:18.664000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:27:27.664000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:27:28.664000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:27:37.664000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T08:27:41.664000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-08T08:27:47.664000Z",
                    "measurement": "114"
                },
                {
                    "on_date": "2020-10-08T08:27:48.664000Z",
                    "measurement": "115"
                },
                {
                    "on_date": "2020-10-08T08:27:56.664000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T08:27:58.664000Z",
                    "measurement": "112"
                },
                {
                    "on_date": "2020-10-08T08:28:06.664000Z",
                    "measurement": "112"
                },
                {
                    "on_date": "2020-10-08T08:28:08.664000Z",
                    "measurement": "111"
                },
                {
                    "on_date": "2020-10-08T08:28:15.664000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:28:18.664000Z",
                    "measurement": "116"
                },
                {
                    "on_date": "2020-10-08T08:28:27.664000Z",
                    "measurement": "110"
                },
                {
                    "on_date": "2020-10-08T08:28:29.664000Z",
                    "measurement": "111"
                },
                {
                    "on_date": "2020-10-08T08:28:34.664000Z",
                    "measurement": "113"
                },
                {
                    "on_date": "2020-10-08T08:28:42.664000Z",
                    "measurement": "119"
                },
                {
                    "on_date": "2020-10-08T08:28:47.664000Z",
                    "measurement": "122"
                },
                {
                    "on_date": "2020-10-08T08:28:52.664000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-08T08:28:57.664000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:28:58.664000Z",
                    "measurement": "117"
                },
                {
                    "on_date": "2020-10-08T08:42:37.976000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-08T09:17:29.971000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-08T09:50:01.965000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-08T09:51:30.656000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T10:31:05.518000Z",
                    "measurement": "124"
                },
                {
                    "on_date": "2020-10-08T10:52:20.449000Z",
                    "measurement": "108"
                },
                {
                    "on_date": "2020-10-08T11:00:16.949000Z",
                    "measurement": "102"
                },
                {
                    "on_date": "2020-10-08T11:03:36.952000Z",
                    "measurement": "98"
                },
                {
                    "on_date": "2020-10-08T11:10:56.454000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-08T11:15:39.955000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-08T11:19:36.456000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-08T11:25:10.955000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-08T11:27:11.455000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T11:35:11.455000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T11:36:35.455000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T22:10:42.438000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-08T22:12:08.938000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-08T22:14:22.149000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T22:20:55.648000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-08T22:22:56.648000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-08T22:30:50.647000Z",
                    "measurement": "97"
                },
                {
                    "on_date": "2020-10-08T22:32:35.647000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-08T22:40:02.144000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-08T22:44:00.646000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-08T22:47:11.644000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-08T22:54:45.144000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T23:00:40.644000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-08T23:02:37.644000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-08T23:09:45.645000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-08T23:13:50.645000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-08T23:18:10.644000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-08T23:22:50.641000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-08T23:26:35.642000Z",
                    "measurement": "75"
                },
                {
                    "on_date": "2020-10-08T23:34:15.642000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-08T23:36:10.642000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-08T23:41:25.643000Z",
                    "measurement": "69"
                },
                {
                    "on_date": "2020-10-08T23:47:00.643000Z",
                    "measurement": "71"
                },
                {
                    "on_date": "2020-10-08T23:51:00.641000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-08T23:56:20.641000Z",
                    "measurement": "68"
                },
                {
                    "on_date": "2020-10-09T00:01:10.641000Z",
                    "measurement": "67"
                },
                {
                    "on_date": "2020-10-09T00:09:54.988000Z",
                    "measurement": "100"
                },
                {
                    "on_date": "2020-10-09T00:10:10.066000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T00:12:52.565000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-09T00:17:21.671000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-09T00:18:57.247000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T00:27:18.346000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-09T00:30:22.022000Z",
                    "measurement": "100"
                },
                {
                    "on_date": "2020-10-09T00:35:42.100000Z",
                    "measurement": "99"
                },
                {
                    "on_date": "2020-10-09T00:39:22.100000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-09T00:42:01.100000Z",
                    "measurement": "85"
                },
                {
                    "on_date": "2020-10-09T00:46:25.599000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T00:51:44.099000Z",
                    "measurement": "89"
                },
                {
                    "on_date": "2020-10-09T01:00:52.598000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T01:02:47.098000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-09T01:03:12.598000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T01:06:38.290000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-09T01:14:44.290000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-09T01:16:12.290000Z",
                    "measurement": "95"
                },
                {
                    "on_date": "2020-10-09T01:25:31.790000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T01:27:19.287000Z",
                    "measurement": "93"
                },
                {
                    "on_date": "2020-10-09T01:35:11.287000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-09T01:36:23.787000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T01:43:09.287000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-09T01:50:40.285000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-09T01:52:51.787000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-09T01:58:45.281000Z",
                    "measurement": "92"
                },
                {
                    "on_date": "2020-10-09T02:03:22.781000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T02:10:14.286000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T02:12:08.286000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T02:18:23.785000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T02:21:59.285000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T02:27:14.785000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-09T02:35:55.785000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T02:40:48.784000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-09T02:43:25.784000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T02:47:59.284000Z",
                    "measurement": "84"
                },
                {
                    "on_date": "2020-10-09T02:54:13.783000Z",
                    "measurement": "87"
                },
                {
                    "on_date": "2020-10-09T02:59:56.283000Z",
                    "measurement": "86"
                },
                {
                    "on_date": "2020-10-09T03:02:29.283000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T03:06:58.782000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T03:11:20.782000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T03:20:39.281000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T03:23:54.281000Z",
                    "measurement": "74"
                },
                {
                    "on_date": "2020-10-09T03:26:11.779000Z",
                    "measurement": "78"
                },
                {
                    "on_date": "2020-10-09T03:33:35.430000Z",
                    "measurement": "109"
                },
                {
                    "on_date": "2020-10-09T03:35:33.507000Z",
                    "measurement": "67"
                },
                {
                    "on_date": "2020-10-09T03:49:41.093000Z",
                    "measurement": "105"
                },
                {
                    "on_date": "2020-10-09T03:50:57.170000Z",
                    "measurement": "73"
                },
                {
                    "on_date": "2020-10-09T03:52:58.670000Z",
                    "measurement": "64"
                },
                {
                    "on_date": "2020-10-09T04:02:13.641000Z",
                    "measurement": "118"
                },
                {
                    "on_date": "2020-10-09T04:04:19.203000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-09T04:09:42.206000Z",
                    "measurement": "90"
                },
                {
                    "on_date": "2020-10-09T04:15:57.707000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-09T04:17:05.707000Z",
                    "measurement": "94"
                },
                {
                    "on_date": "2020-10-09T04:22:57.708000Z",
                    "measurement": "91"
                },
                {
                    "on_date": "2020-10-09T04:29:17.209000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T04:33:49.706000Z",
                    "measurement": "82"
                },
                {
                    "on_date": "2020-10-09T04:36:44.709000Z",
                    "measurement": "81"
                },
                {
                    "on_date": "2020-10-09T04:45:06.209000Z",
                    "measurement": "88"
                },
                {
                    "on_date": "2020-10-09T04:54:48.709000Z",
                    "measurement": "83"
                },
                {
                    "on_date": "2020-10-09T04:59:55.705000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-09T05:01:26.203000Z",
                    "measurement": "79"
                },
                {
                    "on_date": "2020-10-09T05:07:43.201000Z",
                    "measurement": "76"
                },
                {
                    "on_date": "2020-10-09T05:12:12.072000Z",
                    "measurement": "80"
                },
                {
                    "on_date": "2020-10-09T05:20:25.875000Z",
                    "measurement": "77"
                },
                {
                    "on_date": "2020-10-09T05:23:18.372000Z",
                    "measurement": "82"
                }
            ],
            "name": "Heart Rate"
        },
        "WEIGHT": {
            "uom": "Kg",
            "name": "Weight"
        },
        "BLOOD_GLUCOSE_LEVELS": {
            "uom": "mmol/L",
            "name": "Blood Glucose"
        },
        "HEIGHT": {
            "uom": "cm",
            "name": "Height"
        },
        "BP": {
            "uom": "mmHg",
            "name": "Blood Pressure"
        },
        "STEPS": {
            "uom": "",
            "data": [
                {
                    "on_date": "2020-10-05T13:00:00.000000Z",
                    "measurement": "11031"
                },
                {
                    "on_date": "2020-10-06T13:00:00.000000Z",
                    "measurement": "4667"
                },
                {
                    "on_date": "2020-10-07T13:00:00.000000Z",
                    "measurement": "13030"
                },
                {
                    "on_date": "2020-10-08T13:00:00.000000Z",
                    "measurement": "3048"
                }
            ],
            "name": "Steps"
        }
    }
}
```
