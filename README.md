# Database Term Project
![](public/assets/img/site-img.png)
<br>
This is the term project of Level 2 term 2. 
This is a project that can support a bus management system of the cities. 
Here there is a system admin panel, company panel, user panel. 
They have different functionalities.

Author: 
- Akibur Rahman ( 
[Github](https://github.com/akib-89) | 
[LinkedIn](https://www.linkedin.com/in/akibur-rahman-919b40188/) |
[Facebook](https://www.facebook.com/profile.php?id=100010756200351))

- Zarin Tasnim Batool (
[Github](https://github.com/zarinbatool18) | 
[Facebook](https://www.facebook.com/zt.batool)
)

Functionalities of different client side:
- Admin:
  * Can create a route.
  * Can create a location.
  * Update an existing route.(change the fare from one location to another)
  * Approve a company to the system.
- Company Owner:
  * Register a company.
  * Add a bus to the system.
  * Create a schedule for the buses. (which bus will operate on which route)
  * approve bus driver for the owned bus on a given date.
- Driver:
  * Register as a bus driver.
  * request for driving a bus for next couple of days.
  * Update the location of the bus currently driving. (Now it is done using web gui. but in future this will be done by ajax function)
- User:
  * Request for a trip.
  * Rate the last trip.

Some major functionality that is implemented now is

- [Router](#router)
- [Passport Authentication](#validation)
- [Bcrypt (Validation middlewares)](#validation)
- [Controller](#controller) (Not implemented in this project)
- [Service](#service)
- [Repository](#router) (Not implemented in this project)
- [Oracle Database Connection](#database-connection)

### Router
- Router here checks if the user is authorized or not. 
- It filters all the api calls in api route and routed them accordingly. 
- The controller (business) logic is also implemented in this layer.
- This layer fetches the data from the service layer and also does the business logic in this layer.
### Validation
- Validation middleware validates and sanitized the user input to minimize security risks.
- The validation here the work of the validation middleware is done using the passport authentication.

### Controller
Not included in this project
(The work of this layer is done in the Router layer of the repository).
- The main/business logic is implemented is controller layer
- It asks for data from service layer (But for this straight from repository)

### Service
Included in this project
- Service layer implements all logic related to sql queries
- It also fetches the data itself.

### Repository
Not included in this project 
(The work of this layer is done in the service layer of the repository).
- Repository is where the query is executed and served
- Redis or Node Caching is done here (Not included in this project)
### Database Connection
In this project the database used is oracle.
- Holds all the data to function the project correctly. 

### Download

Download zip of this repository, or clone this from git cli

### Dependencies

The project runs on NodeJS environment. So at first you should download node in your machine.

## Installing

After cloning create a database user with the following permission
- create session.
- create sequence.
- create trigger.
- create table.
- create procedure
- unlimited tablespace.

Or, Run the following code in cmd after connecting as sysdba.

```
define username = <USERNAME>
define password = <PASSWORD>
create user &username identified by &password;
grant create session, create view,
 create sequence,
 create procedure,
 create table,
 create trigger,
 create type,
 create materialized view
 to &username;
```

Then configure the project as mentioned [here](#configure). Then run the scripts.

Running the scripts:

```
npm install
```

## Configure

The environment variables and other sensitive info like password are kept in an env file.
Create a `.env` file in the root folder.
Add the following variables in it

```dotenv
PORT=4420
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASSWORD
DB_CONNECT_STRING=YOUR_DB_CONNECT_STRING
```

## Executing program

Run the script
```
npm start
```
to start node monitor realtime updater for node environment.
```
npm run dev
```
To kill process type ctrl+c `^C` in terminal


## End Points:
- GET:
  
  * [Home Page](#home-page)
  * [Public Get](#public-get)
  * [Auth](#auth-get)
  * [Admin Get](#admin-get)
  * [Company Get](#company-get)
  * [Driver Get](#driver-get)
  * [User Get](#user-get)
- POST:
  * [User Post](#user-post)
  * [Driver Post](#driver-post)
  * [Company Post](#company-post)
  * [Admin Post](#admin-post)

Depending on validation Category
- UnAuth (authentication/login not required):
  * [Home Page](#home-page)
  * [Public Get](#public-get)
  * [Auth](#auth-get)
- Auth (authentication/login required):
  * [Admin Get](#admin-get)
  * [Company Get](#company-get)
  * [Driver Get](#driver-get)
  * [User Get](#user-get)
  * [User Post](#user-post)
  * [Driver Post](#driver-post)
  * [Company Post](#company-post)
  * [Admin Post](#admin-post)
### Home Page
<kbd>GET</kbd> `BASEURL` 
### Public Get
<kbd>GET</kbd> `BASEURL/public` 

| Query                             | Endpoint                              | Request Params                  | Response Type |
|-----------------------------------|---------------------------------------|---------------------------------|---------------|
| Get fare                          | `/fare`                               | -src, des, <br/>route(optional) | `json`        |
| Get bus with id                   | `/bus/{id}`                           | -N/A                            | `json`        |
| Get bus dynamic status            | `/bus/{id}/dynamic_status`            | -N/A                            | `json`        |
| Get all company                   | `/company`                            | -N/A                            | `json`        |
| Get all route                     | `/route`                              | -N/A                            | `json`        |
| Get route by id                   | `/route/{id}`                         | -N/A                            | `json`        |
| Get all location                  | `/location`                           | -N/A                            | `json`        |
| Get location by id                | `/location/{id}`                      | -N/A                            | `json`        |
| Get all route passing location    | `/location/{location_id}/route`       | -N/A                            | `json`        |
| Get all location of a route       | `/route/{route_id}/location`          | -N/A                            | `json`        |
| Get all destination from location | `/location/{location_id}/destination` | -N/A                            | `json`        |
| Get bus in a route today          | `/route/{route_id}/bus`               | -date (optional)                | `json`        |

### Auth Get:
<kbd>GET</kbd> `BASEURL/auth` Response type: `<HTML/>`


| Query                | Endpoint            |
|----------------------|---------------------|
| Register User        | `/register`         |
| Request Admin Access | `/register_admin`   |
| Register Company     | `/register_company` |
| Register as Driver   | `/register_driver`  |
| Login                | `/login`            |
| Logout               | `/logout`           |

### Auth Post:
<kbd>POST</kbd> `BASEURL/auth` Response type: `<HTML/>`


| Query                | Endpoint            | Body Params                                           |
|----------------------|---------------------|-------------------------------------------------------|
| Register User        | `/register`         | name, phoneNumber, password, password2                |
| Request Admin Access | `/register_admin`   | name, phoneNumber, password, password2                |
| Register Company     | `/register_company` | name, phoneNumber, password, password2, <br/> company |
| Register as Driver   | `/register_driver`  | name, phoneNumber, password, password2, <br/> licence |
| Login                | `/login`            | phoneNumber, password                                 |
| Logout               | `/logout`           | N/A                                                   |


### Admin Get:

<kbd>GET</kbd> `BASEURL/admin` Response type: `<HTML/>`


| Query           | Endpoint           |
|-----------------|--------------------|
| Create Location | `/create_location` |
| Create Route    | `/create_route`    |
| Approve Company | `/approve_company` |
| Update Rote     | `/update_route`    |



### Admin Post:

<kbd>POST</kbd> `BASEURL/admin` Response type: `<HTML/>`


| Query           | Endpoint           | Body Params                                      |
|-----------------|--------------------|--------------------------------------------------|
| Create Location | `/create_location` | param                                            |
| Create Route    | `/create_route`    | param, loc_id, fares <br/> loc_id, fare is Array |
| Approve Company | `/approve_company` | param                                            |
| Update Rote     | `/update_route`    | param, loc_id, fares <br/> loc_id, fare is Array |

### Company Get:

<kbd>GET</kbd> `BASEURL/company` Response type: `<HTML/>`


| Query                           | Endpoint          |
|---------------------------------|-------------------|
| Add a bus under a company       | `/add_bus`        |
| Schedule a bus of company       | `/schedule_bus`   |
| Approve a driver from requested | `/approve_driver` |

### Company Post:

<kbd>POST</kbd> `BASEURL/company` Response type: `<HTML/>`

| Query                           | Endpoint          | Body Params                                |
|---------------------------------|-------------------|--------------------------------------------|
| Add a bus under a company       | `/add_bus`        | param, capacity                            |
| Schedule a bus of company       | `/schedule_bus`   | bus_id, route_id, operation_date, num_days |
| Approve a driver from requested | `/approve_driver` | bus_id, driver_id, operation_date          |

### Driver Get:

<kbd>GET</kbd> `BASEURL/company` Response type: `<HTML/>`


| Query                 | Endpoint          |
|-----------------------|-------------------|
| Request a bus         | `/req_bus`        |
| Update a bus location | `/bus_position`   |

### Driver Post:

<kbd>POST</kbd> `BASEURL/driver` Response type: `<HTML/>`

| Query                 | Endpoint        | Body Params                        |
|-----------------------|-----------------|------------------------------------|
| Request a bus         | `/req_bus`      | bus_id, num_days                   |
| Update a bus location | `/bus_position` | bus_id, x_coordinate, y_coordinate |


### User Get:

<kbd>GET</kbd> `BASEURL/user` Response type: `<HTML/>`


| Query                | Endpoint       |
|----------------------|----------------|
| Create a Trip        | `/create_trip` |
| End a running a trip | `/end_trip`    |
| Rate the last trip   | `/rate_last`   |


### User Post:

<kbd>POST</kbd> `BASEURL/company` Response type: `<HTML/>`

| Query                | Endpoint       | Body Params                     |
|----------------------|----------------|---------------------------------|
| Create a Trip        | `/create_trip` | source, destination, route, bus |
| End a running a trip | `/end_trip`    | param                           |
| Rate the last trip   | `/rate_last`   | rate                            |