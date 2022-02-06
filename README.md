# Database Term Project
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

- Zarin Tasnim Batool ()


# End Points:
- Get:
  * [Database Term Project](#database-term-project)
  * [Home Page](#home-page)
  * [Public Get](#public-get)
  * [Auth](#auth)
  * [Admin Get](#admin-get)

## Home Page
<kbd>GET</kbd> `BASEURL`
## Public Get
<kbd>GET</kbd> `BASEURL/public`

| Query                             | Endpoint                              | Request Params   | Response Type      |
|-----------------------------------|---------------------------------------|------------------| ------------------ |
| Get fare                          | `/fare`                               | -src, des, route | `json`             |
| Get bus with id                   | `/bus/{id}`                           | -N/A             | `json`             |
| Get bus dynamic status            | `/bus/{id}/dynamic_status`            | -N/A             | `json`             |
| Get all company                   | `/company`                            | -N/A             | `json`             |
| Get all route                     | `/route`                              | -N/A             | `json`             |
| Get route by id                   | `/route/{id}`                         | -N/A             | `json`             |
| Get all location                  | `/location`                           | -N/A             | `json`             |
| Get location by id                | `/location/{id}`                      | -N/A             | `json`             |
| Get all route passing locaiton    | `/location/{location_id}/route`       | -N/A             | `json`             |
| Get all location of a route       | `/route/{route_id}/location`          | -N/A             | `json`             |
| Get all destination from locaiton | `/location/{location_id}/destination` | -N/A             | `json`             |
| Get bus in a route today          | `/route/{route_id}/bus`               | -date            | `json`             |

## Admin Get:

## Auth