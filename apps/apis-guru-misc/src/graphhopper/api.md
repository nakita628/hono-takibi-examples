<h1 id="graphhopper-directions-api">GraphHopper Directions API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation,
route optimization, isochrone calculations and other tools in your application.

The GraphHopper Directions API consists of the following RESTful web services:

 * [Routing API](#tag/Routing-API),
 * [Route Optimization API](#tag/Route-Optimization-API),
 * [Isochrone API](#tag/Isochrone-API),
 * [Map Matching API](#tag/Map-Matching-API),
 * [Matrix API](#tag/Matrix-API),
 * [Geocoding API](#tag/Geocoding-API) and
 * [Cluster API](#tag/Cluster-API).

# Explore our APIs

## Get started

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)

Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.

In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.

## Insomnia

To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:

1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `"api_key": your API key`
3. Start exploring

![Insomnia](./img/insomnia.png)

## Postman

To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:

1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `"api_key": your API key`
3. Start exploring

![Postman](./img/postman.png)

## API Client Libraries

To speed up development and make coding easier, we offer the following client libraries:

 * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)
 * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API

### Bandwidth reduction

If you create your own client, make sure it supports http/2 and gzipped responses for best speed.

If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth
by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4)
and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error "Request Entity Too Large".

## Contact Us

If you have problems or questions, please read the following information:

- [FAQ](https://graphhopper.com/api/1/docs/FAQ/)
- [Public forum](https://discuss.graphhopper.com/c/directions-api)
- [Contact us](https://www.graphhopper.com/contact-form/)
- [GraphHopper Status Page](https://status.graphhopper.com/)

To stay informed about the latest developments, you can

- follow us on [twitter](https://twitter.com/graphhopper/),
- read [our blog](https://graphhopper.com/blog/),
- watch [our documentation repository](https://github.com/graphhopper/directions-api-doc),
- sign up for our newsletter or
- [our forum](https://discuss.graphhopper.com/c/directions-api).

Select the channel you like the most.


# Map Data and Routing Profiles

Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers.
This chapter gives an overview about the options you have.

## OpenStreetMap

#### Geographical Coverage

[OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region,
please visit [GraphHopper Maps](https://graphhopper.com/maps/).
You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge.
[Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.

#### Supported Vehicle Profiles

The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)
truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png)
scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png)
foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png)
hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png)
bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png)
mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png)
racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)

Please note:

 * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`
 * the free package supports only the vehicle profiles `car`, `bike` or `foot`
 * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.
 * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).
 * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.
 
## TomTom

If you want to include traffic, you can purchase the TomTom Add-on.
This Add-on only uses TomTom's road network and historical traffic information.
Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).

Please note the following:

 * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).
 * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).
 * We do *not* use TomTom's web services. We only use their data with our software.
 
[Contact us](https://www.graphhopper.com/contact-form/) for more details.

#### Geographical Coverage

We offer

- Europe including Russia
- North, Central and South America
- Saudi Arabia
- United Arab Emirates
- South Africa
- Australia

#### Supported Vehicle Profiles

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)

Base URLs:

* <a href="https://graphhopper.com/api/1">https://graphhopper.com/api/1</a>

<a href="https://www.graphhopper.com/terms/">Terms of service</a>
Email: <a href="mailto:support@graphhopper.com">API Support</a> 
Web: <a href="https://www.graphhopper.com/">API Support</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **key**, in: query.

<h1 id="graphhopper-directions-api-route-optimization-api">Route Optimization API</h1>


## Quickstart

The Route Optimization API can be used to solve [traveling salesman](https://en.wikipedia.org/wiki/Travelling_salesman_problem) or [vehicle routing problems](https://en.wikipedia.org/wiki/Vehicle_routing_problem).
Solve your first problem by following these steps. If you already have a GraphHopper account, start with step 2.

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)
3. Download [simple traveling salesman problem](https://gist.github.com/oblonski/fb2f2be534c3ebe7bebaa72151194182) and save it in a local folder
4. Open your command line, go to that local folder and use cURL ([What is cURL?](https://de.wikipedia.org/wiki/CURL)) as follows:

   ```
   curl -X POST -H "Content-Type: application/json"   "https://graphhopper.com/api/1/vrp?key=YOUR_CREATED_API_KEY" --data "@tsp.json"
   ```

Alternatively, you can use our Editor to explore that API:

1. Login to your GraphHopper account
2. Go to **Editor**
3. Click the **Optimize** button to solve your first problem
4. Analyze the solution on the **Map** or as raw **JSON Output**

If you have successfully solved the first problem, we recommend this tutorial - [Getting Started with the Optimization API](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/).
It shows and describes the essential elements to model your vehicle routing problem.

To explore the full specification, we recommend that you either use our [route editor](https://www.graphhopper.com/blog/2015/07/21/graphhoppers-new-route-optimization-editor/),
which you can find in our [dashboard](https://graphhopper.com/dashboard/),
or use a REST client such as Insomnia or Postman, as described [here](https://docs.graphhopper.com/#section/Explore-our-APIs/Insomnia).

## Tutorials

We provide [a number of tutorials](https://www.graphhopper.com/tutorial/) illustrating how to use the Route Optimization API and
how to model your vehicle routing problems:

- [Getting Start with the Optimization API - Traveling Salesman Problem](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/)
- [How to solve a traveling salesman problem with a week-planning horizon?](https://www.graphhopper.com/blog/2020/07/15/how-to-solve-a-traveling-salesman-problem-with-a-week-planning-horizon-and-driver-shifts/)
- [How to schedule technicians with skills and multiple dependencies between tasks?](https://www.graphhopper.com/blog/2016/06/03/how-to-route-technicians-with-skills-and-multiple-dependencies-between-tasks/)
- [What is the difference between the min. of completion time and min. transport time?](https://www.graphhopper.com/blog/2016/06/20/what-is-the-difference-between-the-minimization-of-completion-time-and-minimizing-transport-time/)
- [How to model multiple delivery routes with a single vehicle?](https://www.graphhopper.com/blog/2016/07/21/how-to-model-multiple-delivery-routes-with-a-single-vehicle/)


## POST route optimization problem

<a id="opIdsolveVRP"></a>

> Code samples

```bash
curl "https://example.com/vrp?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configuration": {
      "routing": {
        "calc_points": true,
        "snap_preventions": [
          "motorway",
          "trunk",
          "tunnel",
          "bridge",
          "ferry"
        ]
      }
    },
    "objectives": [
      {
        "type": "min",
        "value": "vehicles"
      },
      {
        "type": "min",
        "value": "completion_time"
      }
    ],
    "services": [
      {
        "address": {
          "lat": 52.537338,
          "location_id": "13.375854_52.537338",
          "lon": 13.375854
        },
        "id": "s-1",
        "name": "visit-Joe",
        "size": [
          1
        ],
        "time_windows": [
          {
            "earliest": 1554805329,
            "latest": 1554806329
          }
        ]
      },
      {
        "address": {
          "lat": 52.525851,
          "location_id": "13.393364_52.525851",
          "lon": 13.393364
        },
        "id": "s-2",
        "name": "serve-Peter",
        "size": [
          1
        ]
      },
      {
        "address": {
          "lat": 52.523543,
          "location_id": "13.416882_52.523543",
          "lon": 13.416882
        },
        "id": "s-3",
        "name": "visit-Michael",
        "size": [
          1
        ]
      },
      {
        "address": {
          "lat": 52.514038,
          "location_id": "13.395767_52.514038",
          "lon": 13.395767
        },
        "id": "s-4",
        "name": "do nothing",
        "size": [
          1
        ]
      }
    ],
    "shipments": [
      {
        "delivery": {
          "address": {
            "lat": 52.513614,
            "location_id": "13.380575_52.513614",
            "lon": 13.380575
          }
        },
        "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
        "name": "pickup and deliver pizza to Peter",
        "pickup": {
          "address": {
            "lat": 52.529961,
            "location_id": "13.387613_52.529961",
            "lon": 13.387613
          }
        },
        "priority": 1,
        "required_skills": [
          "physical strength"
        ],
        "size": [
          1
        ]
      }
    ],
    "vehicle_types": [
      {
        "capacity": [
          10
        ],
        "profile": "bike",
        "type_id": "cargo-bike"
      }
    ],
    "vehicles": [
      {
        "earliest_start": 1554804329,
        "latest_end": 1554808329,
        "max_jobs": 3,
        "start_address": {
          "lat": 52.537,
          "location_id": "berlin",
          "lon": 13.406
        },
        "type_id": "cargo-bike",
        "vehicle_id": "vehicle-1"
      },
      {
        "earliest_start": 1554804329,
        "latest_end": 1554808329,
        "max_jobs": 3,
        "skills": [
          "physical strength"
        ],
        "start_address": {
          "lat": 52.537,
          "location_id": "berlin",
          "lon": 13.406
        },
        "type_id": "cargo-bike",
        "vehicle_id": "vehicle-2"
      }
    ]
  }'
```

`POST /vrp`


To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).

To solve a new vehicle routing problem, make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp?key=<your_key>
```

It returns the solution to this problem in the JSON response.

Please note that this URL is very well suited to solve minor problems.
Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.


> Body parameter

```json
{
  "configuration": {
    "routing": {
      "calc_points": true,
      "snap_preventions": [
        "motorway",
        "trunk",
        "tunnel",
        "bridge",
        "ferry"
      ]
    }
  },
  "objectives": [
    {
      "type": "min",
      "value": "vehicles"
    },
    {
      "type": "min",
      "value": "completion_time"
    }
  ],
  "services": [
    {
      "address": {
        "lat": 52.537338,
        "location_id": "13.375854_52.537338",
        "lon": 13.375854
      },
      "id": "s-1",
      "name": "visit-Joe",
      "size": [
        1
      ],
      "time_windows": [
        {
          "earliest": 1554805329,
          "latest": 1554806329
        }
      ]
    },
    {
      "address": {
        "lat": 52.525851,
        "location_id": "13.393364_52.525851",
        "lon": 13.393364
      },
      "id": "s-2",
      "name": "serve-Peter",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.523543,
        "location_id": "13.416882_52.523543",
        "lon": 13.416882
      },
      "id": "s-3",
      "name": "visit-Michael",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.514038,
        "location_id": "13.395767_52.514038",
        "lon": 13.395767
      },
      "id": "s-4",
      "name": "do nothing",
      "size": [
        1
      ]
    }
  ],
  "shipments": [
    {
      "delivery": {
        "address": {
          "lat": 52.513614,
          "location_id": "13.380575_52.513614",
          "lon": 13.380575
        }
      },
      "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
      "name": "pickup and deliver pizza to Peter",
      "pickup": {
        "address": {
          "lat": 52.529961,
          "location_id": "13.387613_52.529961",
          "lon": 13.387613
        }
      },
      "priority": 1,
      "required_skills": [
        "physical strength"
      ],
      "size": [
        1
      ]
    }
  ],
  "vehicle_types": [
    {
      "capacity": [
        10
      ],
      "profile": "bike",
      "type_id": "cargo-bike"
    }
  ],
  "vehicles": [
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-1"
    },
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "skills": [
        "physical strength"
      ],
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-2"
    }
  ]
}
```

<h3 id="post-route-optimization-problem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Request](#schemarequest)|true|The request that contains the vehicle routing problem to be solved.|
|» algorithm|body|[Algorithm](#schemaalgorithm)|false|**Deprecated.** Use `objectives` instead.|
|» configuration|body|[Configuration](#schemaconfiguration)|false|Specifies general configurations.|
|» cost_matrices|body|[[CostMatrix](#schemacostmatrix)]|false|Specifies your own tranport time and distance matrices.|
|» objectives|body|[[Objective](#schemaobjective)]|false|Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.|
|» relations|body|[[JobRelation](#schemajobrelation) \| [GroupRelation](#schemagrouprelation)]|false|Defines additional relationships between orders.|
|» » *anyOf*|body|[JobRelation](#schemajobrelation)|false|none|
|» » *anyOf*|body|[GroupRelation](#schemagrouprelation)|false|none|
|» services|body|[[Service](#schemaservice)]|false|Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.|
|» shipments|body|[[Shipment](#schemashipment)]|false|Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.|
|» vehicle_types|body|[[VehicleType](#schemavehicletype)]|false|Specifies the available vehicle types. These types can be assigned to vehicles.|
|» vehicles|body|[[Vehicle](#schemavehicle)]|false|Specifies the available vehicles.|

> Example responses

> 200 Response

```json
{
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "job_id": "d62fcadd-c84a-4298-90b5-28550125bec5",
  "processing_time": 459,
  "solution": {
    "completion_time": 4172,
    "costs": 438,
    "distance": 17994,
    "max_operation_time": 2465,
    "no_unassigned": 0,
    "no_vehicles": 2,
    "preparation_time": 0,
    "routes": [
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.529961,
              "location_id": "13.387613_52.529961",
              "lon": 13.387613
            },
            "arr_date_time": null,
            "arr_time": 1554804789,
            "distance": 2012,
            "driving_time": 460,
            "end_date_time": null,
            "end_time": 1554804789,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.387613_52.529961",
            "preparation_time": 0,
            "type": "pickupShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.513614,
              "location_id": "13.380575_52.513614",
              "lon": 13.380575
            },
            "arr_date_time": null,
            "arr_time": 1554805344,
            "distance": 4560,
            "driving_time": 1015,
            "end_date_time": null,
            "end_time": 1554805344,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              0
            ],
            "load_before": [
              1
            ],
            "location_id": "13.380575_52.513614",
            "preparation_time": 0,
            "type": "deliverShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.514038,
              "location_id": "13.395767_52.514038",
              "lon": 13.395767
            },
            "arr_date_time": null,
            "arr_time": 1554805632,
            "distance": 5887,
            "driving_time": 1303,
            "end_date_time": null,
            "end_time": 1554805632,
            "id": "s-4",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.395767_52.514038",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.523543,
              "location_id": "13.416882_52.523543",
              "lon": 13.416882
            },
            "arr_date_time": null,
            "arr_time": 1554806253,
            "distance": 8486,
            "driving_time": 1924,
            "end_date_time": null,
            "end_time": 1554806253,
            "id": "s-3",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.416882_52.523543",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806794,
            "distance": 10618,
            "driving_time": 2465,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 2465,
        "distance": 10618,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40643,
                52.53631
              ],
              [
                13.40554,
                52.53616
              ],
              [
                13.4054,
                52.53608
              ],
              [
                13.40445,
                52.53513
              ],
              [
                13.40436,
                52.53509
              ],
              [
                13.40428,
                52.53508
              ],
              [
                13.40463,
                52.53419
              ],
              [
                13.40451,
                52.53419
              ],
              [
                13.4034,
                52.53401
              ],
              [
                13.403,
                52.53359
              ],
              [
                13.40291,
                52.53354
              ],
              [
                13.40268,
                52.53347
              ],
              [
                13.39888,
                52.53259
              ],
              [
                13.39839,
                52.53253
              ],
              [
                13.39812,
                52.53251
              ],
              [
                13.39616,
                52.53243
              ],
              [
                13.39579,
                52.5324
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.39163,
                52.53025
              ],
              [
                13.38797,
                52.52935
              ],
              [
                13.38763,
                52.52996
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38763,
                52.52996
              ],
              [
                13.38739,
                52.53039
              ],
              [
                13.38724,
                52.53036
              ],
              [
                13.38464,
                52.52929
              ],
              [
                13.38538,
                52.52871
              ],
              [
                13.38634,
                52.52792
              ],
              [
                13.38638,
                52.52779
              ],
              [
                13.38657,
                52.52763
              ],
              [
                13.38676,
                52.52741
              ],
              [
                13.38698,
                52.52713
              ],
              [
                13.38704,
                52.52701
              ],
              [
                13.38753,
                52.524
              ],
              [
                13.3877,
                52.52307
              ],
              [
                13.3878,
                52.52282
              ],
              [
                13.38788,
                52.52252
              ],
              [
                13.38802,
                52.52174
              ],
              [
                13.38519,
                52.52009
              ],
              [
                13.38539,
                52.5191
              ],
              [
                13.38548,
                52.51852
              ],
              [
                13.38042,
                52.51819
              ],
              [
                13.38071,
                52.5167
              ],
              [
                13.38076,
                52.51652
              ],
              [
                13.38084,
                52.51634
              ],
              [
                13.3821,
                52.51396
              ],
              [
                13.38055,
                52.51365
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38055,
                52.51365
              ],
              [
                13.38229,
                52.514
              ],
              [
                13.38363,
                52.51429
              ],
              [
                13.3848,
                52.51445
              ],
              [
                13.38504,
                52.51358
              ],
              [
                13.39124,
                52.51397
              ],
              [
                13.3911,
                52.51488
              ],
              [
                13.39303,
                52.51499
              ],
              [
                13.39317,
                52.5141
              ],
              [
                13.39548,
                52.51419
              ],
              [
                13.39571,
                52.51421
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39571,
                52.51421
              ],
              [
                13.39695,
                52.51434
              ],
              [
                13.39674,
                52.51523
              ],
              [
                13.39742,
                52.51531
              ],
              [
                13.39873,
                52.51558
              ],
              [
                13.39846,
                52.51599
              ],
              [
                13.39825,
                52.51729
              ],
              [
                13.39805,
                52.51755
              ],
              [
                13.39892,
                52.51761
              ],
              [
                13.39917,
                52.51764
              ],
              [
                13.39964,
                52.51775
              ],
              [
                13.40009,
                52.51791
              ],
              [
                13.40034,
                52.51797
              ],
              [
                13.4021,
                52.51864
              ],
              [
                13.40288,
                52.51896
              ],
              [
                13.40375,
                52.51936
              ],
              [
                13.40498,
                52.52001
              ],
              [
                13.40463,
                52.5203
              ],
              [
                13.40311,
                52.52144
              ],
              [
                13.40442,
                52.52189
              ],
              [
                13.40448,
                52.52192
              ],
              [
                13.40451,
                52.52195
              ],
              [
                13.40473,
                52.52199
              ],
              [
                13.40504,
                52.52208
              ],
              [
                13.40572,
                52.52235
              ],
              [
                13.40687,
                52.52294
              ],
              [
                13.40693,
                52.52299
              ],
              [
                13.40706,
                52.52319
              ],
              [
                13.40738,
                52.52378
              ],
              [
                13.40787,
                52.52443
              ],
              [
                13.4079,
                52.52453
              ],
              [
                13.40938,
                52.52401
              ],
              [
                13.40962,
                52.52398
              ],
              [
                13.41001,
                52.52395
              ],
              [
                13.41072,
                52.52391
              ],
              [
                13.41215,
                52.52389
              ],
              [
                13.41233,
                52.52386
              ],
              [
                13.4131,
                52.5235
              ],
              [
                13.41288,
                52.52333
              ],
              [
                13.41475,
                52.52247
              ],
              [
                13.41496,
                52.52264
              ],
              [
                13.41523,
                52.52251
              ],
              [
                13.41633,
                52.52338
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41684,
                52.52351
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.41684,
                52.52351
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.4163,
                52.52344
              ],
              [
                13.41587,
                52.52363
              ],
              [
                13.41572,
                52.5235
              ],
              [
                13.41409,
                52.5242
              ],
              [
                13.41454,
                52.52461
              ],
              [
                13.41454,
                52.52466
              ],
              [
                13.41358,
                52.52508
              ],
              [
                13.41366,
                52.52514
              ],
              [
                13.41344,
                52.52525
              ],
              [
                13.4133,
                52.52514
              ],
              [
                13.41316,
                52.5252
              ],
              [
                13.41107,
                52.52585
              ],
              [
                13.41118,
                52.52606
              ],
              [
                13.41118,
                52.52616
              ],
              [
                13.41095,
                52.52664
              ],
              [
                13.41097,
                52.52678
              ],
              [
                13.41084,
                52.52706
              ],
              [
                13.41057,
                52.52747
              ],
              [
                13.41028,
                52.52809
              ],
              [
                13.41032,
                52.52821
              ],
              [
                13.4102,
                52.52847
              ],
              [
                13.40999,
                52.52875
              ],
              [
                13.40984,
                52.52905
              ],
              [
                13.40982,
                52.52914
              ],
              [
                13.40984,
                52.52926
              ],
              [
                13.4104,
                52.52998
              ],
              [
                13.4105,
                52.53001
              ],
              [
                13.41064,
                52.53016
              ],
              [
                13.41082,
                52.5303
              ],
              [
                13.41198,
                52.53107
              ],
              [
                13.4122,
                52.53128
              ],
              [
                13.41232,
                52.53143
              ],
              [
                13.41247,
                52.53192
              ],
              [
                13.41267,
                52.53245
              ],
              [
                13.41275,
                52.53259
              ],
              [
                13.41215,
                52.5327
              ],
              [
                13.40731,
                52.53463
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 2465,
        "vehicle_id": "vehicle-2",
        "waiting_time": 0
      },
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.525851,
              "location_id": "13.393364_52.525851",
              "lon": 13.393364
            },
            "arr_date_time": null,
            "arr_time": 1554804743,
            "distance": 1884,
            "driving_time": 414,
            "end_date_time": null,
            "end_time": 1554804743,
            "id": "s-2",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.393364_52.525851",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537338,
              "location_id": "13.375854_52.537338",
              "lon": 13.375854
            },
            "arr_date_time": null,
            "arr_time": 1554805251,
            "distance": 4205,
            "driving_time": 922,
            "end_date_time": null,
            "end_time": 1554805329,
            "id": "s-1",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.375854_52.537338",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 78
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806036,
            "distance": 7376,
            "driving_time": 1629,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 1707,
        "distance": 7376,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40674,
                52.53571
              ],
              [
                13.40433,
                52.53313
              ],
              [
                13.40271,
                52.53149
              ],
              [
                13.40246,
                52.53121
              ],
              [
                13.40148,
                52.52999
              ],
              [
                13.40128,
                52.52993
              ],
              [
                13.40118,
                52.52988
              ],
              [
                13.40133,
                52.5296
              ],
              [
                13.40138,
                52.52951
              ],
              [
                13.40167,
                52.52914
              ],
              [
                13.40188,
                52.52895
              ],
              [
                13.398,
                52.52885
              ],
              [
                13.39289,
                52.52748
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39324,
                52.52575
              ],
              [
                13.39334,
                52.52573
              ],
              [
                13.39339,
                52.52584
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39339,
                52.52584
              ],
              [
                13.3934,
                52.52599
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39242,
                52.52823
              ],
              [
                13.39381,
                52.52852
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.38717,
                52.5315
              ],
              [
                13.38678,
                52.5315
              ],
              [
                13.38641,
                52.53147
              ],
              [
                13.38617,
                52.53143
              ],
              [
                13.38607,
                52.53155
              ],
              [
                13.38526,
                52.53225
              ],
              [
                13.38501,
                52.53252
              ],
              [
                13.38316,
                52.53418
              ],
              [
                13.38179,
                52.5355
              ],
              [
                13.38084,
                52.53523
              ],
              [
                13.38081,
                52.53531
              ],
              [
                13.3795,
                52.53677
              ],
              [
                13.37941,
                52.53682
              ],
              [
                13.37935,
                52.53683
              ],
              [
                13.37919,
                52.53682
              ],
              [
                13.37617,
                52.5361
              ],
              [
                13.37502,
                52.53698
              ],
              [
                13.37584,
                52.53734
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.37584,
                52.53734
              ],
              [
                13.37566,
                52.53726
              ],
              [
                13.37515,
                52.53763
              ],
              [
                13.37644,
                52.53841
              ],
              [
                13.37807,
                52.53935
              ],
              [
                13.37946,
                52.5402
              ],
              [
                13.3796,
                52.54019
              ],
              [
                13.37984,
                52.54021
              ],
              [
                13.37988,
                52.54012
              ],
              [
                13.38062,
                52.53936
              ],
              [
                13.38169,
                52.53832
              ],
              [
                13.38236,
                52.5377
              ],
              [
                13.38363,
                52.53661
              ],
              [
                13.38492,
                52.53555
              ],
              [
                13.38613,
                52.53447
              ],
              [
                13.38757,
                52.53338
              ],
              [
                13.38791,
                52.53354
              ],
              [
                13.38812,
                52.53368
              ],
              [
                13.38833,
                52.53392
              ],
              [
                13.38977,
                52.53518
              ],
              [
                13.39003,
                52.53539
              ],
              [
                13.39256,
                52.53701
              ],
              [
                13.39316,
                52.53739
              ],
              [
                13.39327,
                52.53744
              ],
              [
                13.3936,
                52.53757
              ],
              [
                13.40155,
                52.53982
              ],
              [
                13.40357,
                52.53715
              ],
              [
                13.40372,
                52.53719
              ],
              [
                13.40465,
                52.53727
              ],
              [
                13.4048,
                52.53726
              ],
              [
                13.4059,
                52.53736
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 1629,
        "vehicle_id": "vehicle-1",
        "waiting_time": 78
      }
    ],
    "service_duration": 0,
    "time": 4094,
    "transport_time": 4094,
    "unassigned": {
      "breaks": [],
      "details": [],
      "services": [],
      "shipments": []
    },
    "waiting_time": 78
  },
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "There has been an internal server error."
}
```

<h3 id="post-route-optimization-problem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response containing the solution|[Response](#schemaresponse)|
|400|Bad Request|Error occurred when reading the request. Request is invalid.|[BadRequest](#schemabadrequest)|
|500|Internal Server Error|Error occurred on server side.|[InternalErrorMessage](#schemainternalerrormessage)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## POST route optimization problem (batch mode)

<a id="opIdasyncVRP"></a>

> Code samples

```bash
curl "https://example.com/vrp/optimize?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configuration": {
      "routing": {
        "calc_points": true,
        "snap_preventions": [
          "motorway",
          "trunk",
          "tunnel",
          "bridge",
          "ferry"
        ]
      }
    },
    "objectives": [
      {
        "type": "min",
        "value": "vehicles"
      },
      {
        "type": "min",
        "value": "completion_time"
      }
    ],
    "services": [
      {
        "address": {
          "lat": 52.537338,
          "location_id": "13.375854_52.537338",
          "lon": 13.375854
        },
        "id": "s-1",
        "name": "visit-Joe",
        "size": [
          1
        ],
        "time_windows": [
          {
            "earliest": 1554805329,
            "latest": 1554806329
          }
        ]
      },
      {
        "address": {
          "lat": 52.525851,
          "location_id": "13.393364_52.525851",
          "lon": 13.393364
        },
        "id": "s-2",
        "name": "serve-Peter",
        "size": [
          1
        ]
      },
      {
        "address": {
          "lat": 52.523543,
          "location_id": "13.416882_52.523543",
          "lon": 13.416882
        },
        "id": "s-3",
        "name": "visit-Michael",
        "size": [
          1
        ]
      },
      {
        "address": {
          "lat": 52.514038,
          "location_id": "13.395767_52.514038",
          "lon": 13.395767
        },
        "id": "s-4",
        "name": "do nothing",
        "size": [
          1
        ]
      }
    ],
    "shipments": [
      {
        "delivery": {
          "address": {
            "lat": 52.513614,
            "location_id": "13.380575_52.513614",
            "lon": 13.380575
          }
        },
        "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
        "name": "pickup and deliver pizza to Peter",
        "pickup": {
          "address": {
            "lat": 52.529961,
            "location_id": "13.387613_52.529961",
            "lon": 13.387613
          }
        },
        "priority": 1,
        "required_skills": [
          "physical strength"
        ],
        "size": [
          1
        ]
      }
    ],
    "vehicle_types": [
      {
        "capacity": [
          10
        ],
        "profile": "bike",
        "type_id": "cargo-bike"
      }
    ],
    "vehicles": [
      {
        "earliest_start": 1554804329,
        "latest_end": 1554808329,
        "max_jobs": 3,
        "start_address": {
          "lat": 52.537,
          "location_id": "berlin",
          "lon": 13.406
        },
        "type_id": "cargo-bike",
        "vehicle_id": "vehicle-1"
      },
      {
        "earliest_start": 1554804329,
        "latest_end": 1554808329,
        "max_jobs": 3,
        "skills": [
          "physical strength"
        ],
        "start_address": {
          "lat": 52.537,
          "location_id": "berlin",
          "lon": 13.406
        },
        "type_id": "cargo-bike",
        "vehicle_id": "vehicle-2"
      }
    ]
  }'
```

`POST /vrp/optimize`


To solve a vehicle routing problem, perform the following steps:

1.) Make a HTTP POST to this URL

```
https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
```

It returns a job id (job_id).

2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

We recommend to query the solution every 500ms until it returns 'status=finished'.

**Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.


> Body parameter

```json
{
  "configuration": {
    "routing": {
      "calc_points": true,
      "snap_preventions": [
        "motorway",
        "trunk",
        "tunnel",
        "bridge",
        "ferry"
      ]
    }
  },
  "objectives": [
    {
      "type": "min",
      "value": "vehicles"
    },
    {
      "type": "min",
      "value": "completion_time"
    }
  ],
  "services": [
    {
      "address": {
        "lat": 52.537338,
        "location_id": "13.375854_52.537338",
        "lon": 13.375854
      },
      "id": "s-1",
      "name": "visit-Joe",
      "size": [
        1
      ],
      "time_windows": [
        {
          "earliest": 1554805329,
          "latest": 1554806329
        }
      ]
    },
    {
      "address": {
        "lat": 52.525851,
        "location_id": "13.393364_52.525851",
        "lon": 13.393364
      },
      "id": "s-2",
      "name": "serve-Peter",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.523543,
        "location_id": "13.416882_52.523543",
        "lon": 13.416882
      },
      "id": "s-3",
      "name": "visit-Michael",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.514038,
        "location_id": "13.395767_52.514038",
        "lon": 13.395767
      },
      "id": "s-4",
      "name": "do nothing",
      "size": [
        1
      ]
    }
  ],
  "shipments": [
    {
      "delivery": {
        "address": {
          "lat": 52.513614,
          "location_id": "13.380575_52.513614",
          "lon": 13.380575
        }
      },
      "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
      "name": "pickup and deliver pizza to Peter",
      "pickup": {
        "address": {
          "lat": 52.529961,
          "location_id": "13.387613_52.529961",
          "lon": 13.387613
        }
      },
      "priority": 1,
      "required_skills": [
        "physical strength"
      ],
      "size": [
        1
      ]
    }
  ],
  "vehicle_types": [
    {
      "capacity": [
        10
      ],
      "profile": "bike",
      "type_id": "cargo-bike"
    }
  ],
  "vehicles": [
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-1"
    },
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "skills": [
        "physical strength"
      ],
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-2"
    }
  ]
}
```

<h3 id="post-route-optimization-problem-batch-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Request](#schemarequest)|true|The request that contains the problem to be solved.|
|» algorithm|body|[Algorithm](#schemaalgorithm)|false|**Deprecated.** Use `objectives` instead.|
|» configuration|body|[Configuration](#schemaconfiguration)|false|Specifies general configurations.|
|» cost_matrices|body|[[CostMatrix](#schemacostmatrix)]|false|Specifies your own tranport time and distance matrices.|
|» objectives|body|[[Objective](#schemaobjective)]|false|Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.|
|» relations|body|[[JobRelation](#schemajobrelation) \| [GroupRelation](#schemagrouprelation)]|false|Defines additional relationships between orders.|
|» » *anyOf*|body|[JobRelation](#schemajobrelation)|false|none|
|» » *anyOf*|body|[GroupRelation](#schemagrouprelation)|false|none|
|» services|body|[[Service](#schemaservice)]|false|Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.|
|» shipments|body|[[Shipment](#schemashipment)]|false|Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.|
|» vehicle_types|body|[[VehicleType](#schemavehicletype)]|false|Specifies the available vehicle types. These types can be assigned to vehicles.|
|» vehicles|body|[[Vehicle](#schemavehicle)]|false|Specifies the available vehicles.|

> Example responses

> 200 Response

```json
{
  "job_id": "44886560-b584-4da5-b245-768151dacd8f"
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "There has been an internal server error."
}
```

<h3 id="post-route-optimization-problem-batch-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A jobId you can use to retrieve your solution from the server - see solution endpoint.|[JobId](#schemajobid)|
|400|Bad Request|Error occurred when reading client request. Request is invalid.|[BadRequest](#schemabadrequest)|
|500|Internal Server Error|Error occurred on server side.|[InternalErrorMessage](#schemainternalerrormessage)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## GET the solution (batch mode)

<a id="opIdgetSolution"></a>

> Code samples

```bash
curl "https://example.com/vrp/solution/string?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /vrp/solution/{jobId}`


Take the job id and fetch the solution for the vehicle routing problem from this URL:

```
https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
```

You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).


<h3 id="get-the-solution-batch-mode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|Request solution with jobId|

> Example responses

> 200 Response

```json
{
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "job_id": "d62fcadd-c84a-4298-90b5-28550125bec5",
  "processing_time": 459,
  "solution": {
    "completion_time": 4172,
    "costs": 438,
    "distance": 17994,
    "max_operation_time": 2465,
    "no_unassigned": 0,
    "no_vehicles": 2,
    "preparation_time": 0,
    "routes": [
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.529961,
              "location_id": "13.387613_52.529961",
              "lon": 13.387613
            },
            "arr_date_time": null,
            "arr_time": 1554804789,
            "distance": 2012,
            "driving_time": 460,
            "end_date_time": null,
            "end_time": 1554804789,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.387613_52.529961",
            "preparation_time": 0,
            "type": "pickupShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.513614,
              "location_id": "13.380575_52.513614",
              "lon": 13.380575
            },
            "arr_date_time": null,
            "arr_time": 1554805344,
            "distance": 4560,
            "driving_time": 1015,
            "end_date_time": null,
            "end_time": 1554805344,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              0
            ],
            "load_before": [
              1
            ],
            "location_id": "13.380575_52.513614",
            "preparation_time": 0,
            "type": "deliverShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.514038,
              "location_id": "13.395767_52.514038",
              "lon": 13.395767
            },
            "arr_date_time": null,
            "arr_time": 1554805632,
            "distance": 5887,
            "driving_time": 1303,
            "end_date_time": null,
            "end_time": 1554805632,
            "id": "s-4",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.395767_52.514038",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.523543,
              "location_id": "13.416882_52.523543",
              "lon": 13.416882
            },
            "arr_date_time": null,
            "arr_time": 1554806253,
            "distance": 8486,
            "driving_time": 1924,
            "end_date_time": null,
            "end_time": 1554806253,
            "id": "s-3",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.416882_52.523543",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806794,
            "distance": 10618,
            "driving_time": 2465,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 2465,
        "distance": 10618,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40643,
                52.53631
              ],
              [
                13.40554,
                52.53616
              ],
              [
                13.4054,
                52.53608
              ],
              [
                13.40445,
                52.53513
              ],
              [
                13.40436,
                52.53509
              ],
              [
                13.40428,
                52.53508
              ],
              [
                13.40463,
                52.53419
              ],
              [
                13.40451,
                52.53419
              ],
              [
                13.4034,
                52.53401
              ],
              [
                13.403,
                52.53359
              ],
              [
                13.40291,
                52.53354
              ],
              [
                13.40268,
                52.53347
              ],
              [
                13.39888,
                52.53259
              ],
              [
                13.39839,
                52.53253
              ],
              [
                13.39812,
                52.53251
              ],
              [
                13.39616,
                52.53243
              ],
              [
                13.39579,
                52.5324
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.39163,
                52.53025
              ],
              [
                13.38797,
                52.52935
              ],
              [
                13.38763,
                52.52996
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38763,
                52.52996
              ],
              [
                13.38739,
                52.53039
              ],
              [
                13.38724,
                52.53036
              ],
              [
                13.38464,
                52.52929
              ],
              [
                13.38538,
                52.52871
              ],
              [
                13.38634,
                52.52792
              ],
              [
                13.38638,
                52.52779
              ],
              [
                13.38657,
                52.52763
              ],
              [
                13.38676,
                52.52741
              ],
              [
                13.38698,
                52.52713
              ],
              [
                13.38704,
                52.52701
              ],
              [
                13.38753,
                52.524
              ],
              [
                13.3877,
                52.52307
              ],
              [
                13.3878,
                52.52282
              ],
              [
                13.38788,
                52.52252
              ],
              [
                13.38802,
                52.52174
              ],
              [
                13.38519,
                52.52009
              ],
              [
                13.38539,
                52.5191
              ],
              [
                13.38548,
                52.51852
              ],
              [
                13.38042,
                52.51819
              ],
              [
                13.38071,
                52.5167
              ],
              [
                13.38076,
                52.51652
              ],
              [
                13.38084,
                52.51634
              ],
              [
                13.3821,
                52.51396
              ],
              [
                13.38055,
                52.51365
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38055,
                52.51365
              ],
              [
                13.38229,
                52.514
              ],
              [
                13.38363,
                52.51429
              ],
              [
                13.3848,
                52.51445
              ],
              [
                13.38504,
                52.51358
              ],
              [
                13.39124,
                52.51397
              ],
              [
                13.3911,
                52.51488
              ],
              [
                13.39303,
                52.51499
              ],
              [
                13.39317,
                52.5141
              ],
              [
                13.39548,
                52.51419
              ],
              [
                13.39571,
                52.51421
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39571,
                52.51421
              ],
              [
                13.39695,
                52.51434
              ],
              [
                13.39674,
                52.51523
              ],
              [
                13.39742,
                52.51531
              ],
              [
                13.39873,
                52.51558
              ],
              [
                13.39846,
                52.51599
              ],
              [
                13.39825,
                52.51729
              ],
              [
                13.39805,
                52.51755
              ],
              [
                13.39892,
                52.51761
              ],
              [
                13.39917,
                52.51764
              ],
              [
                13.39964,
                52.51775
              ],
              [
                13.40009,
                52.51791
              ],
              [
                13.40034,
                52.51797
              ],
              [
                13.4021,
                52.51864
              ],
              [
                13.40288,
                52.51896
              ],
              [
                13.40375,
                52.51936
              ],
              [
                13.40498,
                52.52001
              ],
              [
                13.40463,
                52.5203
              ],
              [
                13.40311,
                52.52144
              ],
              [
                13.40442,
                52.52189
              ],
              [
                13.40448,
                52.52192
              ],
              [
                13.40451,
                52.52195
              ],
              [
                13.40473,
                52.52199
              ],
              [
                13.40504,
                52.52208
              ],
              [
                13.40572,
                52.52235
              ],
              [
                13.40687,
                52.52294
              ],
              [
                13.40693,
                52.52299
              ],
              [
                13.40706,
                52.52319
              ],
              [
                13.40738,
                52.52378
              ],
              [
                13.40787,
                52.52443
              ],
              [
                13.4079,
                52.52453
              ],
              [
                13.40938,
                52.52401
              ],
              [
                13.40962,
                52.52398
              ],
              [
                13.41001,
                52.52395
              ],
              [
                13.41072,
                52.52391
              ],
              [
                13.41215,
                52.52389
              ],
              [
                13.41233,
                52.52386
              ],
              [
                13.4131,
                52.5235
              ],
              [
                13.41288,
                52.52333
              ],
              [
                13.41475,
                52.52247
              ],
              [
                13.41496,
                52.52264
              ],
              [
                13.41523,
                52.52251
              ],
              [
                13.41633,
                52.52338
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41684,
                52.52351
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.41684,
                52.52351
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.4163,
                52.52344
              ],
              [
                13.41587,
                52.52363
              ],
              [
                13.41572,
                52.5235
              ],
              [
                13.41409,
                52.5242
              ],
              [
                13.41454,
                52.52461
              ],
              [
                13.41454,
                52.52466
              ],
              [
                13.41358,
                52.52508
              ],
              [
                13.41366,
                52.52514
              ],
              [
                13.41344,
                52.52525
              ],
              [
                13.4133,
                52.52514
              ],
              [
                13.41316,
                52.5252
              ],
              [
                13.41107,
                52.52585
              ],
              [
                13.41118,
                52.52606
              ],
              [
                13.41118,
                52.52616
              ],
              [
                13.41095,
                52.52664
              ],
              [
                13.41097,
                52.52678
              ],
              [
                13.41084,
                52.52706
              ],
              [
                13.41057,
                52.52747
              ],
              [
                13.41028,
                52.52809
              ],
              [
                13.41032,
                52.52821
              ],
              [
                13.4102,
                52.52847
              ],
              [
                13.40999,
                52.52875
              ],
              [
                13.40984,
                52.52905
              ],
              [
                13.40982,
                52.52914
              ],
              [
                13.40984,
                52.52926
              ],
              [
                13.4104,
                52.52998
              ],
              [
                13.4105,
                52.53001
              ],
              [
                13.41064,
                52.53016
              ],
              [
                13.41082,
                52.5303
              ],
              [
                13.41198,
                52.53107
              ],
              [
                13.4122,
                52.53128
              ],
              [
                13.41232,
                52.53143
              ],
              [
                13.41247,
                52.53192
              ],
              [
                13.41267,
                52.53245
              ],
              [
                13.41275,
                52.53259
              ],
              [
                13.41215,
                52.5327
              ],
              [
                13.40731,
                52.53463
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 2465,
        "vehicle_id": "vehicle-2",
        "waiting_time": 0
      },
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.525851,
              "location_id": "13.393364_52.525851",
              "lon": 13.393364
            },
            "arr_date_time": null,
            "arr_time": 1554804743,
            "distance": 1884,
            "driving_time": 414,
            "end_date_time": null,
            "end_time": 1554804743,
            "id": "s-2",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.393364_52.525851",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537338,
              "location_id": "13.375854_52.537338",
              "lon": 13.375854
            },
            "arr_date_time": null,
            "arr_time": 1554805251,
            "distance": 4205,
            "driving_time": 922,
            "end_date_time": null,
            "end_time": 1554805329,
            "id": "s-1",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.375854_52.537338",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 78
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806036,
            "distance": 7376,
            "driving_time": 1629,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 1707,
        "distance": 7376,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40674,
                52.53571
              ],
              [
                13.40433,
                52.53313
              ],
              [
                13.40271,
                52.53149
              ],
              [
                13.40246,
                52.53121
              ],
              [
                13.40148,
                52.52999
              ],
              [
                13.40128,
                52.52993
              ],
              [
                13.40118,
                52.52988
              ],
              [
                13.40133,
                52.5296
              ],
              [
                13.40138,
                52.52951
              ],
              [
                13.40167,
                52.52914
              ],
              [
                13.40188,
                52.52895
              ],
              [
                13.398,
                52.52885
              ],
              [
                13.39289,
                52.52748
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39324,
                52.52575
              ],
              [
                13.39334,
                52.52573
              ],
              [
                13.39339,
                52.52584
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39339,
                52.52584
              ],
              [
                13.3934,
                52.52599
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39242,
                52.52823
              ],
              [
                13.39381,
                52.52852
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.38717,
                52.5315
              ],
              [
                13.38678,
                52.5315
              ],
              [
                13.38641,
                52.53147
              ],
              [
                13.38617,
                52.53143
              ],
              [
                13.38607,
                52.53155
              ],
              [
                13.38526,
                52.53225
              ],
              [
                13.38501,
                52.53252
              ],
              [
                13.38316,
                52.53418
              ],
              [
                13.38179,
                52.5355
              ],
              [
                13.38084,
                52.53523
              ],
              [
                13.38081,
                52.53531
              ],
              [
                13.3795,
                52.53677
              ],
              [
                13.37941,
                52.53682
              ],
              [
                13.37935,
                52.53683
              ],
              [
                13.37919,
                52.53682
              ],
              [
                13.37617,
                52.5361
              ],
              [
                13.37502,
                52.53698
              ],
              [
                13.37584,
                52.53734
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.37584,
                52.53734
              ],
              [
                13.37566,
                52.53726
              ],
              [
                13.37515,
                52.53763
              ],
              [
                13.37644,
                52.53841
              ],
              [
                13.37807,
                52.53935
              ],
              [
                13.37946,
                52.5402
              ],
              [
                13.3796,
                52.54019
              ],
              [
                13.37984,
                52.54021
              ],
              [
                13.37988,
                52.54012
              ],
              [
                13.38062,
                52.53936
              ],
              [
                13.38169,
                52.53832
              ],
              [
                13.38236,
                52.5377
              ],
              [
                13.38363,
                52.53661
              ],
              [
                13.38492,
                52.53555
              ],
              [
                13.38613,
                52.53447
              ],
              [
                13.38757,
                52.53338
              ],
              [
                13.38791,
                52.53354
              ],
              [
                13.38812,
                52.53368
              ],
              [
                13.38833,
                52.53392
              ],
              [
                13.38977,
                52.53518
              ],
              [
                13.39003,
                52.53539
              ],
              [
                13.39256,
                52.53701
              ],
              [
                13.39316,
                52.53739
              ],
              [
                13.39327,
                52.53744
              ],
              [
                13.3936,
                52.53757
              ],
              [
                13.40155,
                52.53982
              ],
              [
                13.40357,
                52.53715
              ],
              [
                13.40372,
                52.53719
              ],
              [
                13.40465,
                52.53727
              ],
              [
                13.4048,
                52.53726
              ],
              [
                13.4059,
                52.53736
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 1629,
        "vehicle_id": "vehicle-1",
        "waiting_time": 78
      }
    ],
    "service_duration": 0,
    "time": 4094,
    "transport_time": 4094,
    "unassigned": {
      "breaks": [],
      "details": [],
      "services": [],
      "shipments": []
    },
    "waiting_time": 78
  },
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 404 Response

```json
{
  "message": "Invalid job_id 73314c89-ee4b-459c-aca4-0ad6d6e558da",
  "status": "finished"
}
```

<h3 id="get-the-solution-batch-mode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response containing the solution|[Response](#schemaresponse)|
|400|Bad Request|Error occurred on client side such as invalid input.|[BadRequest](#schemabadrequest)|
|404|Not Found|Requested solution could not be found.|Inline|
|500|Internal Server Error|Error occurred on server side.|None|

<h3 id="get-the-solution-batch-mode-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error message|
|status|string|false|none|status|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-routing-api">Routing API</h1>


### Introduction

![Routing screenshot](./img/routing-example.png)

The Routing API is part of the GraphHopper Directions API. Routing is the process of finding the best path connecting
two or more points, where the meaning of ''best'' depends on the vehicle and use case.

### Navigation
If you plan to use the Routing API for navigation, have a look at our [open source demo navigation application](https://github.com/graphhopper/graphhopper-navigation-example) and adapt it to your needs.

### Fast
To get started using this API, just provide two or more points and retrieve the fastest route through the road
network that connects them. This type of request is heavily optimized for query performance, so it does not
allow for some advanced features.
### Flexible
Unlock further flexible features via `ch.disable=true`.


## GET Route Endpoint

<a id="opIdgetRoute"></a>

> Code samples

```bash
curl "https://example.com/route?point=string&key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /route`

The GET request is the most simple one: just specify the parameter in the URL and you are done.
Can be tried directly in every browser.


<h3 id="get-route-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|point|query|[string]|true|The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible.<br>The maximum number depends on your plan.<br>|
|point_hint|query|[string]|false|The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters.<br>|
|snap_prevention|query|[string]|false|Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`.<br>|
|vehicle|query|[VehicleProfileId](#schemavehicleprofileid)|false|The vehicle profile for which the route should be calculated.<br>|
|curbside|query|[string]|false|Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.<br>|
|turn_costs|query|boolean|false|Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap.<br>|
|locale|query|string|false|The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.<br>|
|elevation|query|boolean|false|If `true`, a third coordinate, the altitude, is included with all positions in the response.<br>This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their<br>encodings. Unless you switch off the `points_encoded` parameter, you need special code on the<br>client side that can handle three-dimensional coordinates.<br>A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.<br>|
|details|query|[string]|false|Optional parameter to retrieve path details. You can request additional details for the route: `street_name`, <br>`time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).<br>|
|optimize|query|string|false|Normally, the calculated route will visit the points in the order you specified them.<br>If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.<br>Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.<br>|
|instructions|query|boolean|false|If instructions should be calculated and returned<br>|
|calc_points|query|boolean|false|If the points for the route should be calculated at all.<br>|
|debug|query|boolean|false|If `true`, the output will be formatted.<br>|
|points_encoded|query|boolean|false|Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact<br>but requires special client code to unpack. (We provide it in our JavaScript client library!)<br>Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.<br>See the description of the response format for more information.<br>|
|ch.disable|query|boolean|false|Use this parameter in combination with one or more parameters from below.<br>|
|weighting|query|string|false|Determines the way the "best" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`.<br>|
|heading|query|[integer(int32)]|false|Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.<br>In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.<br>This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.<br>|
|heading_penalty|query|integer(int32)|false|Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.<br>|
|pass_through|query|boolean|false|If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.<br>|
|block_area|query|string|false|Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`.<br>You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`.<br>You can specify several shapes, separating them with `;`. Requires `ch.disable=true`.<br>|
|avoid|query|string|false|Specify which road classes and environments you would like to avoid. <br>Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.<br>Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.<br>|
|algorithm|query|string|false|Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing:<br>With `alternative_route`, we give you not one but several routes that are close to optimal, but<br>not too similar to each other. <br>With `round_trip`, the route will get you back to where you started. This is meant for fun (think of<br>a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`.<br>You can control both of these features with additional parameters, see below. <br>|
|round_trip.distance|query|integer(int32)|false|If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.<br>|
|round_trip.seed|query|integer(int64)|false|If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.<br>|
|alternative_route.max_paths|query|integer(int32)|false|If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.<br>|
|alternative_route.max_weight_factor|query|number|false|If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.<br>|
|alternative_route.max_share_factor|query|number|false|If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vehicle|car|
|vehicle|bike|
|vehicle|foot|
|vehicle|hike|
|vehicle|mtb|
|vehicle|racingbike|
|vehicle|scooter|
|vehicle|truck|
|vehicle|small_truck|
|curbside|any|
|curbside|right|
|curbside|left|
|algorithm|round_trip|
|algorithm|alternative_route|

> Example responses

> 200 Response

```json
{
  "hints": {
    "visited_nodes.average": 58,
    "visited_nodes.sum": 58
  },
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ],
    "took": 2
  },
  "paths": [
    {
      "ascend": 6.3294677734375,
      "bbox": [
        11.539424,
        48.118343,
        11.558901,
        48.122364
      ],
      "descend": 25.0579833984375,
      "details": {},
      "distance": 1791.011,
      "instructions": [
        {
          "distance": 672.954,
          "heading": 89.04,
          "interval": [
            0,
            6
          ],
          "sign": 0,
          "street_name": "Lindenschmitstraße",
          "text": "Continue onto Lindenschmitstraße",
          "time": 144703
        },
        {
          "distance": 107.145,
          "interval": [
            6,
            7
          ],
          "sign": -2,
          "street_name": "",
          "text": "Turn left",
          "time": 22675
        },
        {
          "distance": 140.169,
          "interval": [
            7,
            10
          ],
          "sign": 2,
          "street_name": "Oberländerstraße",
          "text": "Turn right onto Oberländerstraße",
          "time": 28032
        },
        {
          "distance": 360.232,
          "interval": [
            10,
            18
          ],
          "sign": 1,
          "street_name": "",
          "text": "Turn slight right",
          "time": 72677
        },
        {
          "distance": 177.621,
          "interval": [
            18,
            20
          ],
          "sign": 2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn right onto Thalkirchner Straße",
          "time": 35524
        },
        {
          "distance": 332.89,
          "interval": [
            20,
            24
          ],
          "sign": -2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn left onto Thalkirchner Straße",
          "time": 67351
        },
        {
          "distance": 0,
          "interval": [
            24,
            24
          ],
          "last_heading": 45.67046584987792,
          "sign": 4,
          "street_name": "",
          "text": "Arrive at destination",
          "time": 0
        }
      ],
      "legs": [],
      "points": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.540387,
            48.118368
          ],
          [
            11.54061,
            48.118356
          ],
          [
            11.541941,
            48.118409
          ],
          [
            11.543696,
            48.118344
          ],
          [
            11.547167,
            48.118343
          ],
          [
            11.548478,
            48.118366
          ],
          [
            11.548487,
            48.119329
          ],
          [
            11.548807,
            48.119328
          ],
          [
            11.549408,
            48.119366
          ],
          [
            11.550349,
            48.119508
          ],
          [
            11.550441,
            48.119473
          ],
          [
            11.551109,
            48.119467
          ],
          [
            11.551553,
            48.119445
          ],
          [
            11.551748,
            48.119398
          ],
          [
            11.552087,
            48.119475
          ],
          [
            11.552236,
            48.119542
          ],
          [
            11.552353,
            48.119635
          ],
          [
            11.553853,
            48.121136
          ],
          [
            11.555448,
            48.12039
          ],
          [
            11.555797,
            48.120206
          ],
          [
            11.55632,
            48.120592
          ],
          [
            11.556716,
            48.120919
          ],
          [
            11.557326,
            48.121345
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "points_encoded": false,
      "snapped_waypoints": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "time": 370962,
      "transfers": 0,
      "weight": 307.852443
    }
  ]
}
```

> 400 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 501 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-route-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Routing Result|[RouteResponse](#schemarouteresponse)|
|400|Bad Request|Your request is not valid. For example, you specified too few or too many points.|[GHError](#schemagherror)|
|401|Unauthorized|Authentication necessary|[GHError](#schemagherror)|
|429|Too Many Requests|API limit reached.|[GHError](#schemagherror)|
|500|Internal Server Error|Internal server error. We get notified automatically and fix this asap.|[GHError](#schemagherror)|
|501|Not Implemented|Only a special list of vehicles is supported.|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|400|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|400|X-RateLimit-Limit|integer||Your current daily credit limit.|
|400|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|400|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|401|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|401|X-RateLimit-Limit|integer||Your current daily credit limit.|
|401|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|401|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|429|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|429|X-RateLimit-Limit|integer||Your current daily credit limit.|
|429|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|429|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|500|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|500|X-RateLimit-Limit|integer||Your current daily credit limit.|
|500|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|500|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|501|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|501|X-RateLimit-Limit|integer||Your current daily credit limit.|
|501|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|501|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## POST Route Endpoint

<a id="opIdpostRoute"></a>

> Code samples

```bash
curl "https://example.com/route?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "calc_points": true,
    "details": [
      "road_class",
      "surface"
    ],
    "instructions": true,
    "locale": "en",
    "point_hints": [
      "Lindenschmitstraße",
      "Thalkirchener Str."
    ],
    "points": [
      [
        11.539421,
        48.118477
      ],
      [
        11.559023,
        48.12228
      ]
    ],
    "points_encoded": false,
    "snap_preventions": [
      "motorway",
      "ferry",
      "tunnel"
    ],
    "vehicle": "bike"
  }'
```

`POST /route`

Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
If you are familiar with POST requests and JSON then do not hesitate to continue here.

Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
speed up the request.

To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `point_hints` and `snap_preventions`.

**Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.

For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
```json
{ "points": [[11,10], [22,20]] }
```
Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).

Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
```


> Body parameter

```json
{
  "calc_points": true,
  "details": [
    "road_class",
    "surface"
  ],
  "instructions": true,
  "locale": "en",
  "point_hints": [
    "Lindenschmitstraße",
    "Thalkirchener Str."
  ],
  "points": [
    [
      11.539421,
      48.118477
    ],
    [
      11.559023,
      48.12228
    ]
  ],
  "points_encoded": false,
  "snap_preventions": [
    "motorway",
    "ferry",
    "tunnel"
  ],
  "vehicle": "bike"
}
```

<h3 id="post-route-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RouteRequest](#schemarouterequest)|false|none|
|» algorithm|body|string|false|Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:<br>With `round_trip`, the route will get you back to where you started. This is meant for fun (think of<br>a bike trip), so we will add some randomness. This requires `ch.disable=true`.<br>With `alternative_route`, we give you not one but several routes that are close to optimal, but<br>not too similar to each other. You can control both of these features with additional parameters, see below.<br>|
|» alternative_route.max_paths|body|integer(int32)|false|If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.<br>|
|» alternative_route.max_share_factor|body|number|false|If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.<br>|
|» alternative_route.max_weight_factor|body|number|false|If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.<br>|
|» avoid|body|string|false|Specify which road classes and environments you would like to avoid.<br>Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.<br>Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.<br>|
|» block_area|body|string|false|Block road access via a point with the format `latitude,longitude`<br>or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`.<br>Separate several values with `;`. Requires `ch.disable=true`.<br>|
|» calc_points|body|boolean|false|If the points for the route should be calculated at all.<br>|
|» ch.disable|body|boolean|false|Use this parameter in combination with one or more parameters from below.<br>|
|» curbsides|body|[string]|false|Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.|
|» debug|body|boolean|false|If `true`, the output will be formatted.<br>|
|» details|body|[string]|false|Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,<br>`time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).<br>|
|» elevation|body|boolean|false|If `true`, a third coordinate, the altitude, is included with all positions in the response.<br>This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their<br>encodings. Unless you switch off the `points_encoded` parameter, you need special code on the<br>client side that can handle three-dimensional coordinates.<br>A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.<br>|
|» heading_penalty|body|integer(int32)|false|Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.<br>|
|» headings|body|[integer(int32)]|false|Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.<br>In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.<br>This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.<br>|
|» instructions|body|boolean|false|If instructions should be calculated and returned<br>|
|» locale|body|string|false|The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.<br>|
|» optimize|body|string|false|Normally, the calculated route will visit the points in the order you specified them.<br>If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.<br>Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.<br>|
|» pass_through|body|boolean|false|If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.<br>|
|» point_hints|body|[string]|false|Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|
|» points|body|[[number(double)]]|false|The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C<br>then you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]]<br>|
|» points_encoded|body|boolean|false|Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact<br>but requires special client code to unpack. (We provide it in our JavaScript client library!)<br>Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.<br>See the description of the response format for more information.<br>|
|» round_trip.distance|body|integer(int32)|false|If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.<br>|
|» round_trip.seed|body|integer(int64)|false|If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.<br>|
|» snap_preventions|body|[string]|false|Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`|
|» vehicle|body|object|false|none|
|» weighting|body|string|false|Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» algorithm|round_trip|
|» algorithm|alternative_route|
|» curbsides|any|
|» curbsides|right|
|» curbsides|left|

> Example responses

> 200 Response

```json
{
  "hints": {
    "visited_nodes.average": 58,
    "visited_nodes.sum": 58
  },
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ],
    "took": 2
  },
  "paths": [
    {
      "ascend": 6.3294677734375,
      "bbox": [
        11.539424,
        48.118343,
        11.558901,
        48.122364
      ],
      "descend": 25.0579833984375,
      "details": {},
      "distance": 1791.011,
      "instructions": [
        {
          "distance": 672.954,
          "heading": 89.04,
          "interval": [
            0,
            6
          ],
          "sign": 0,
          "street_name": "Lindenschmitstraße",
          "text": "Continue onto Lindenschmitstraße",
          "time": 144703
        },
        {
          "distance": 107.145,
          "interval": [
            6,
            7
          ],
          "sign": -2,
          "street_name": "",
          "text": "Turn left",
          "time": 22675
        },
        {
          "distance": 140.169,
          "interval": [
            7,
            10
          ],
          "sign": 2,
          "street_name": "Oberländerstraße",
          "text": "Turn right onto Oberländerstraße",
          "time": 28032
        },
        {
          "distance": 360.232,
          "interval": [
            10,
            18
          ],
          "sign": 1,
          "street_name": "",
          "text": "Turn slight right",
          "time": 72677
        },
        {
          "distance": 177.621,
          "interval": [
            18,
            20
          ],
          "sign": 2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn right onto Thalkirchner Straße",
          "time": 35524
        },
        {
          "distance": 332.89,
          "interval": [
            20,
            24
          ],
          "sign": -2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn left onto Thalkirchner Straße",
          "time": 67351
        },
        {
          "distance": 0,
          "interval": [
            24,
            24
          ],
          "last_heading": 45.67046584987792,
          "sign": 4,
          "street_name": "",
          "text": "Arrive at destination",
          "time": 0
        }
      ],
      "legs": [],
      "points": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.540387,
            48.118368
          ],
          [
            11.54061,
            48.118356
          ],
          [
            11.541941,
            48.118409
          ],
          [
            11.543696,
            48.118344
          ],
          [
            11.547167,
            48.118343
          ],
          [
            11.548478,
            48.118366
          ],
          [
            11.548487,
            48.119329
          ],
          [
            11.548807,
            48.119328
          ],
          [
            11.549408,
            48.119366
          ],
          [
            11.550349,
            48.119508
          ],
          [
            11.550441,
            48.119473
          ],
          [
            11.551109,
            48.119467
          ],
          [
            11.551553,
            48.119445
          ],
          [
            11.551748,
            48.119398
          ],
          [
            11.552087,
            48.119475
          ],
          [
            11.552236,
            48.119542
          ],
          [
            11.552353,
            48.119635
          ],
          [
            11.553853,
            48.121136
          ],
          [
            11.555448,
            48.12039
          ],
          [
            11.555797,
            48.120206
          ],
          [
            11.55632,
            48.120592
          ],
          [
            11.556716,
            48.120919
          ],
          [
            11.557326,
            48.121345
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "points_encoded": false,
      "snapped_waypoints": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "time": 370962,
      "transfers": 0,
      "weight": 307.852443
    }
  ]
}
```

> 400 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 501 Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="post-route-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Routing Result|[RouteResponse](#schemarouteresponse)|
|400|Bad Request|Your request is not valid. For example, you specified too few or too many points.|[GHError](#schemagherror)|
|401|Unauthorized|Authentication necessary|[GHError](#schemagherror)|
|429|Too Many Requests|API limit reached.|[GHError](#schemagherror)|
|500|Internal Server Error|Internal server error. We get notified automatically and fix this asap.|[GHError](#schemagherror)|
|501|Not Implemented|Only a special list of vehicles is supported.|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|400|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|400|X-RateLimit-Limit|integer||Your current daily credit limit.|
|400|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|400|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|401|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|401|X-RateLimit-Limit|integer||Your current daily credit limit.|
|401|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|401|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|429|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|429|X-RateLimit-Limit|integer||Your current daily credit limit.|
|429|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|429|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|500|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|500|X-RateLimit-Limit|integer||Your current daily credit limit.|
|500|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|500|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|
|501|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|501|X-RateLimit-Limit|integer||Your current daily credit limit.|
|501|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|501|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Coverage information

> Code samples

```bash
curl "https://example.com/route/info?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /route/info`

Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.


> Example responses

> 200 Response

```json
{
  "bbox": [
    13.072624,
    52.333508,
    13.763972,
    52.679616
  ],
  "build_date": "2014-02-21T16:52",
  "features": {
    "car": {
      "elevation": false
    },
    "foot": {
      "elevation": true
    }
  },
  "version": "0.4"
}
```

<h3 id="coverage-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Coverage Information|[InfoResponse](#schemainforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-matrix-api">Matrix API</h1>


### Introduction

![Matrix Example](./img/matrix-example.png)

The Matrix API is part of the [GraphHopper Directions API](https://graphhopper.com/#directions-api) and with
it you can calculate many-to-many distances and times a lot more efficient than calling the
Routing API multiple times.

In the [Routing API](#tag/Routing-API) we support multiple points, so called 'via points', which results in one
route being calculated. The Matrix API results in NxM routes, or more precise NxM distances or times being calculated
but [is a lot faster](https://www.graphhopper.com/blog/2019/06/04/incredibly-fast-distance-matrix-calculations-with-graphhopper/)
compared to NxM single requests.

The most simple example is a tourist trying to decide
which pizza is close to her instead of using beeline distance she can calculate a 1x4 matrix. Or a delivery service
often in the need of big NxN matrices to solve vehicle routing problems. For example the [GraphHopper Route Optimization API](#tag/Route-Optimization-API)
uses the Matrix API under the hood to achieve this.

Some other use cases for the Matrix API:

* Logistic problems often pick up many items from and deliver them to many locations.
* Calculating detours with many possible points in-between and selecting the best e.g. interesting for ridesharing or taxi applications. For this 1-to-many requests are necessary.
* Finding the best tour for a tourist in the need to visit as many points of interests as possible.
* ...

### API Clients and Examples

See the [clients](#section/API-Clients) section in the main document and [live examples](https://graphhopper.com/api/1/examples/#matrix).

### Description

The Matrix API calculates the well known distance-matrix for a set of points, i.e. it calculates all the distances
between every point combination. But we do not stop there, we also offer a time-, weight- and route-matrix.
The weight-matrix can be used as raw input for e.g. a vehicle routing problem ([VRP](http://en.wikipedia.org/wiki/Vehicle_routing_problem))
and is more precise than a time- or distance-matrix. E.g. for bike routes the actual weight of a route (e.g. the "beauty")
is what you want to decide if a route is 'better' and not always the taken time or distance.

A simple illustration for a 3x3 matrix with identical from and to points:

-          |to_point1|to_point2|to_point3
:-----------|:--------|:--------|:--------
from_point1 |0        |1->2     | 1->3
from_point2 |2->1     |0        | 2->3
from_point3 |3->1     |3->2     | 0

A simple illustration for a 1x3 matrix with different start- and end-points:

-          | to_point1  | to_point2 | t_point3
:-----------|:-----------|:----------|:--------
from_pointA |A->1        |A->2       |A->3


For every route 1->2, 1-3, ... or A->1,A->2,A->3 you can return only the weight, the time and the distance.
To calculate full routes you can use the [Routing API](#tag/Routing-API).

### Limits and Counts

The cost for one request depends on the number of locations and is documented [here](https://support.graphhopper.com/support/solutions/44000303787#what-is-one-credit).

One request should not exceed the Matrix API location limit, which depends on the subscription, see the
pricing tab in our dashboard.


## GET Matrix Endpoint

<a id="opIdgetMatrix"></a>

> Code samples

```bash
curl "https://example.com/matrix?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /matrix`

With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
as it works out-of-the-box in the browser. If possible you should
prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
and can also gzip the **request**. (Note, that all endpoints return gzipped responses).


<h3 id="get-matrix-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|point|query|[string]|false|Specify multiple points in `latitude,longitude` for which the weight-, route-, time- or distance-matrix should be calculated. In this case the starts are identical to the destinations. If there are N points, then NxN entries will be calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with from_point or to_point.|
|from_point|query|[string]|false|The starting points for the routes in `latitude,longitude`. E.g. if you want to calculate the three routes A-&gt;1, A-&gt;2, A-&gt;3 then you have one from_point parameter and three to_point parameters.|
|to_point|query|[string]|false|The destination points for the routes in `latitude,longitude`.|
|point_hint|query|[string]|false|Optional parameter. Specifies a hint for each `point` parameter to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|
|from_point_hint|query|[string]|false|For the from_point parameter. See point_hint|
|to_point_hint|query|[string]|false|For the to_point parameter. See point_hint|
|snap_prevention|query|[string]|false|Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`<br>|
|curbside|query|[string]|false|Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.|
|from_curbside|query|[string]|false|Curbside setting for the from_point parameter. See curbside.|
|to_curbside|query|[string]|false|Curbside setting for the to_point parameter. See curbside.|
|out_array|query|[string]|false|Specifies which arrays should be included in the response. Specify one or more of the following options 'weights', 'times', 'distances'. To specify more than one array use e.g. out_array=times&out_array=distances. The units of the entries of distances are meters, of times are seconds and of weights is arbitrary and it can differ for different vehicles or versions of this API.|
|vehicle|query|[VehicleProfileId](#schemavehicleprofileid)|false|The vehicle profile for which the matrix should be calculated.|
|fail_fast|query|boolean|false|Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).|
|turn_costs|query|boolean|false|Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|curbside|any|
|curbside|right|
|curbside|left|
|from_curbside|any|
|from_curbside|right|
|from_curbside|left|
|to_curbside|any|
|to_curbside|right|
|to_curbside|left|
|vehicle|car|
|vehicle|bike|
|vehicle|foot|
|vehicle|hike|
|vehicle|mtb|
|vehicle|racingbike|
|vehicle|scooter|
|vehicle|truck|
|vehicle|small_truck|

> Example responses

> 200 Response

```json
{
  "distances": [
    [
      0,
      97653,
      48887
    ],
    [
      97426,
      0,
      121035
    ],
    [
      49006,
      121049,
      0
    ]
  ],
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ]
  },
  "times": [
    [
      0,
      4197,
      2994
    ],
    [
      4192,
      0,
      6074
    ],
    [
      3006,
      6062,
      0
    ]
  ],
  "weights": [
    [
      0,
      5662.551,
      3727.147
    ],
    [
      5653.807,
      0,
      7889.653
    ],
    [
      3741.528,
      7878.365,
      0
    ]
  ]
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-matrix-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matrix API response|[MatrixResponse](#schemamatrixresponse)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## POST Matrix Endpoint

<a id="opIdpostMatrix"></a>

> Code samples

```bash
curl "https://example.com/matrix?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "from_point_hints": [
      "Copenhagen Street",
      "Richmond Avenue",
      "White Lion Street"
    ],
    "from_points": [
      [
        -0.11379003524780275,
        51.53664617804063
      ],
      [
        -0.10866165161132814,
        51.538621486960956
      ],
      [
        -0.11059284210205078,
        51.53245503603458
      ]
    ],
    "out_arrays": [
      "weights",
      "times",
      "distances"
    ],
    "to_point_hints": [
      "Cannon",
      "Cornhill"
    ],
    "to_points": [
      [
        -0.09576559066772462,
        51.512882367963456
      ],
      [
        -0.08797645568847656,
        51.51317615367198
      ]
    ],
    "vehicle": "car"
  }'
```

`POST /matrix`


The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
please refer to the [guide of the GET endpoint](#operation/getMatrix).

**Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.

For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
```json
{ "points": [[11,10], [22,20]], "vehicle": "car" }
```

A complete curl Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
```


> Body parameter

```json
{
  "from_point_hints": [
    "Copenhagen Street",
    "Richmond Avenue",
    "White Lion Street"
  ],
  "from_points": [
    [
      -0.11379003524780275,
      51.53664617804063
    ],
    [
      -0.10866165161132814,
      51.538621486960956
    ],
    [
      -0.11059284210205078,
      51.53245503603458
    ]
  ],
  "out_arrays": [
    "weights",
    "times",
    "distances"
  ],
  "to_point_hints": [
    "Cannon",
    "Cornhill"
  ],
  "to_points": [
    [
      -0.09576559066772462,
      51.512882367963456
    ],
    [
      -0.08797645568847656,
      51.51317615367198
    ]
  ],
  "vehicle": "car"
}
```

<h3 id="post-matrix-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MatrixRequest](#schemamatrixrequest) \| [SymmetricalMatrixRequest](#schemasymmetricalmatrixrequest)|false|none|
|» *oneOf*|body|[MatrixRequest](#schemamatrixrequest)|false|none|
|» *oneOf*|body|[SymmetricalMatrixRequest](#schemasymmetricalmatrixrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "distances": [
    [
      0,
      97653,
      48887
    ],
    [
      97426,
      0,
      121035
    ],
    [
      49006,
      121049,
      0
    ]
  ],
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ]
  },
  "times": [
    [
      0,
      4197,
      2994
    ],
    [
      4192,
      0,
      6074
    ],
    [
      3006,
      6062,
      0
    ]
  ],
  "weights": [
    [
      0,
      5662.551,
      3727.147
    ],
    [
      5653.807,
      0,
      7889.653
    ],
    [
      3741.528,
      7878.365,
      0
    ]
  ]
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="post-matrix-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Matrix API response|[MatrixResponse](#schemamatrixresponse)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Batch Matrix Endpoint

<a id="opIdcalculateMatrix"></a>

> Code samples

```bash
curl "https://example.com/matrix/calculate?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "from_point_hints": [
      "Copenhagen Street",
      "Richmond Avenue",
      "White Lion Street"
    ],
    "from_points": [
      [
        -0.11379003524780275,
        51.53664617804063
      ],
      [
        -0.10866165161132814,
        51.538621486960956
      ],
      [
        -0.11059284210205078,
        51.53245503603458
      ]
    ],
    "out_arrays": [
      "weights",
      "times",
      "distances"
    ],
    "to_point_hints": [
      "Cannon",
      "Cornhill"
    ],
    "to_points": [
      [
        -0.09576559066772462,
        51.512882367963456
      ],
      [
        -0.08797645568847656,
        51.51317615367198
      ]
    ],
    "vehicle": "car"
  }'
```

`POST /matrix/calculate`

Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.

The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
 * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
 * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`

Here are some full examples via curl:
```bash
$ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
{"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
```

Pick the returned `job_id` and use it in the next GET requests:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"status":"waiting"}
```

When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
```

Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
```json
{"message":"Cannot find from_points: 1"}
```
And the optional `hints` array.


> Body parameter

```json
{
  "from_point_hints": [
    "Copenhagen Street",
    "Richmond Avenue",
    "White Lion Street"
  ],
  "from_points": [
    [
      -0.11379003524780275,
      51.53664617804063
    ],
    [
      -0.10866165161132814,
      51.538621486960956
    ],
    [
      -0.11059284210205078,
      51.53245503603458
    ]
  ],
  "out_arrays": [
    "weights",
    "times",
    "distances"
  ],
  "to_point_hints": [
    "Cannon",
    "Cornhill"
  ],
  "to_points": [
    [
      -0.09576559066772462,
      51.512882367963456
    ],
    [
      -0.08797645568847656,
      51.51317615367198
    ]
  ],
  "vehicle": "car"
}
```

<h3 id="batch-matrix-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MatrixRequest](#schemamatrixrequest) \| [SymmetricalMatrixRequest](#schemasymmetricalmatrixrequest)|false|none|
|» *oneOf*|body|[MatrixRequest](#schemamatrixrequest)|false|none|
|» *oneOf*|body|[SymmetricalMatrixRequest](#schemasymmetricalmatrixrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "job_id": "44886560-b584-4da5-b245-768151dacd8f"
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="batch-matrix-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A jobId you can use to retrieve your solution from the server.|[JobId](#schemajobid)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## GET Batch Matrix Endpoint

<a id="opIdgetMatrixSolution"></a>

> Code samples

```bash
curl "https://example.com/matrix/solution/string?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /matrix/solution/{jobId}`

This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.


<h3 id="get-batch-matrix-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|Request solution with jobId|

> Example responses

> 200 Response

```json
{
  "distances": [
    [
      0,
      97653,
      48887
    ],
    [
      97426,
      0,
      121035
    ],
    [
      49006,
      121049,
      0
    ]
  ],
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ]
  },
  "times": [
    [
      0,
      4197,
      2994
    ],
    [
      4192,
      0,
      6074
    ],
    [
      3006,
      6062,
      0
    ]
  ],
  "weights": [
    [
      0,
      5662.551,
      3727.147
    ],
    [
      5653.807,
      0,
      7889.653
    ],
    [
      3741.528,
      7878.365,
      0
    ]
  ]
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="get-batch-matrix-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response containing the matrix|[MatrixResponse](#schemamatrixresponse)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-geocoding-api">Geocoding API</h1>

Everything about geocoding

## Geocoding Endpoint

<a id="opIdgetGeocode"></a>

> Code samples

```bash
curl "https://example.com/geocode?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /geocode`


### Introduction

![Geocoding Example](./img/geocoding-example.png)

_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
For example the conversion from `Berlin` to `52.5170365,13.3888599`.

_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).


<h3 id="geocoding-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.|
|locale|query|string|false|Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.|
|limit|query|integer(int32)|false|Specify the maximum number of results to return|
|reverse|query|boolean|false|It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.|
|debug|query|boolean|false|If `true`, the output will be formatted.|
|point|query|string|false|_Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.|
|provider|query|string|false|The provider parameter is currently under development and can fall back to `default` at any time.<br>The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers.<br>To try it append the `provider`parameter to the URL like `&provider=nominatim`,<br>the result structure should be identical in all cases - if not, please report this back to us.<br>Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider.<br>If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.<br><br>The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.<br><br>Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.<br><br>All providers support normal "forward" geocoding and reverse geocoding via `reverse=true`.<br><br>#### Default (`provider=default`)<br><br>This provider returns results of our internal geocoding engine, as described above.<br>In addition to the above documented parameters the following parameters are possible:<br>* `bbox` - the expected format is `minLon,minLat,maxLon,maxLat`<br>* `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.<br><br>#### Nominatim (`provider=nominatim`)<br><br>The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.<br><br>In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):<br><br>* `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat`<br>* `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.<br><br>#### Gisgraphy (`provider=gisgraphy`)<br><br>This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).<br><br>**Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.<br><br>Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.<br><br>In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):<br><br>* `radius` - radius in meters<br>* `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.<br><br>#### NetToolKit (`provider=nettoolkit`)<br><br>This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).<br><br>The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details):<br>- `source`: User can choose which source provider to geocode the address, this value is "NetToolKit" by default<br>- `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code<br><br>**Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).<br><br>#### OpenCage Data (`provider=opencagedata`)<br><br>This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).<br><br>In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):<br><br>* countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States. <br>* bounds - the expected format is `minLon,minLat,maxLon,maxLat`<br>|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Berlin",
      "osm_id": 240109189,
      "osm_key": "place",
      "osm_type": "N",
      "osm_value": "city",
      "point": {
        "lat": 52.5170365,
        "lng": 13.3888599
      },
      "postcode": "10117"
    },
    {
      "country": "Deutschland",
      "extent": [
        13.088345,
        52.6755087,
        13.7611609,
        52.33826
      ],
      "name": "Berlin",
      "osm_id": 62422,
      "osm_key": "place",
      "osm_type": "R",
      "osm_value": "city",
      "point": {
        "lat": 52.5198535,
        "lng": 13.4385964
      }
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3906703,
        52.5200704,
        13.3948873,
        52.5175007
      ],
      "name": "Humboldt-Universität zu Berlin",
      "osm_id": 120456814,
      "osm_key": "amenity",
      "osm_type": "W",
      "osm_value": "university",
      "point": {
        "lat": 52.51875685,
        "lng": 13.393560493637775
      },
      "postcode": "10117",
      "street": "Dorotheenstraße"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3924346,
        52.5191829,
        13.3948768,
        52.517526
      ],
      "housenumber": "6",
      "name": "Humboldt-Universität zu Berlin",
      "osm_id": 6647,
      "osm_key": "building",
      "osm_type": "R",
      "osm_value": "yes",
      "point": {
        "lat": 52.51840935,
        "lng": 13.392908021752554
      },
      "postcode": "10117",
      "street": "Unter den Linden"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.2364563,
        52.5161915,
        13.2433375,
        52.5129557
      ],
      "housenumber": "3",
      "name": "Olympiastadion Berlin",
      "osm_id": 38862723,
      "osm_key": "leisure",
      "osm_type": "W",
      "osm_value": "stadium",
      "point": {
        "lat": 52.5147077,
        "lng": 13.239776301622072
      },
      "postcode": "14053",
      "street": "Olympischer Platz"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3739245,
        52.528547,
        13.3818019,
        52.5229778
      ],
      "name": "Charité Universitätsmedizin Berlin",
      "osm_id": 583306346,
      "osm_key": "amenity",
      "osm_type": "W",
      "osm_value": "hospital",
      "point": {
        "lat": 52.52585125,
        "lng": 13.377739577932736
      },
      "postcode": "10117",
      "street": "Hufelandweg"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3906159,
        52.5190301,
        13.3923847,
        52.5174089
      ],
      "housenumber": "8",
      "name": "Staatsbibliothek zu Berlin",
      "osm_id": 180594,
      "osm_key": "amenity",
      "osm_type": "R",
      "osm_value": "library",
      "point": {
        "lat": 52.5182233,
        "lng": 13.391516532100738
      },
      "postcode": "10117",
      "street": "Unter den Linden"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Berlin Hauptbahnhof",
      "osm_id": 3856100103,
      "osm_key": "railway",
      "osm_type": "N",
      "osm_value": "station",
      "point": {
        "lat": 52.5249451,
        "lng": 13.3696614
      },
      "postcode": "10557",
      "street": "Washingtonplatz"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Schlacht um Berlin",
      "osm_id": 1078631331,
      "osm_key": "historic",
      "osm_type": "N",
      "osm_value": "battlefield",
      "point": {
        "lat": 52.5127537,
        "lng": 13.3814231
      },
      "postcode": "10117",
      "street": "Gertrud-Kolmar-Straße"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3807495,
        52.5083344,
        13.3822459,
        52.5074359
      ],
      "housenumber": "5",
      "name": "Abgeordnetenhaus von Berlin",
      "osm_id": 1154556,
      "osm_key": "office",
      "osm_type": "R",
      "osm_value": "government",
      "point": {
        "lat": 52.50786655,
        "lng": 13.381504320489928
      },
      "postcode": "10117",
      "street": "Niederkirchnerstraße"
    }
  ],
  "took": 37
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="geocoding-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array found locations|[GeocodingResponse](#schemageocodingresponse)|
|default|Default|Unexpected error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-isochrone-api">Isochrone API</h1>

Everything about isochrones

## Isochrone Endpoint

<a id="opIdgetIsochrone"></a>

> Code samples

```bash
curl "https://example.com/isochrone?point=string&key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /isochrone`

### Example
You can get an example response via:

```
curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
```

Don't forget to replace the placeholder with your own key.

### Introduction
![Isochrone screenshot](./img/isochrone-example.png)

An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.

### Use Cases
Some possible areas in which this API may be useful to you:

- real estate analysis
- realtors
- vehicle scheduling
- geomarketing
- reach of electric vehicles
- transport planning
- logistics (distribution and retail network planning)

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).


<h3 id="isochrone-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|point|query|string|true|Specify the start coordinate|
|time_limit|query|integer(int32)|false|Specify which time the vehicle should travel. In seconds.|
|distance_limit|query|integer(int32)|false|Specify which distance the vehicle should travel. In meters.|
|vehicle|query|[VehicleProfileId](#schemavehicleprofileid)|false|The vehicle profile for which the route should be calculated.<br>|
|buckets|query|integer(int32)|false|Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`.|
|reverse_flow|query|boolean|false|If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon "inside" to the point.<br>Example use case for `false`&#58; *How many potential customer can be reached within 30min travel time from your store* vs. `true`&#58; *How many customers can reach your store within 30min travel time.*<br>|
|weighting|query|string|false|Use `"shortest"` to get an isodistance line instead of an isochrone.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vehicle|car|
|vehicle|bike|
|vehicle|foot|
|vehicle|hike|
|vehicle|mtb|
|vehicle|racingbike|
|vehicle|scooter|
|vehicle|truck|
|vehicle|small_truck|
|weighting|fastest|
|weighting|shortest|

> Example responses

> 200 Response

```json
{
  "polygons": [
    {
      "geometry": {
        "coordinates": [
          [
            13.351851,
            52.51345
          ],
          [
            13.350402,
            52.516949
          ],
          [
            13.352598,
            52.522252
          ],
          [
            13.351851,
            52.51345
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "bucket": 0
      },
      "type": "Feature"
    }
  ]
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="isochrone-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Isochrone Result|[IsochroneResponse](#schemaisochroneresponse)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-map-matching-api">Map Matching API</h1>

Everything about map matching aka "snap to road"

## Map-match a GPX file

<a id="opIdpostGPX"></a>

> Code samples

```bash
curl "https://example.com/match?key=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /match`

### Example
You get an example response for a GPX via:

```
curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
```

A minimal working GPX file looks like
```gpx
<gpx>
 <trk>
  <trkseg>
   <trkpt lat="51.343657" lon="12.360708"></trkpt>
   <trkpt lat="51.343796" lon="12.361337"></trkpt>
   <trkpt lat="51.342784" lon="12.361882"></trkpt>
  </trkseg>
 </trk>
</gpx>
```

### Introduction
![Map Matching screenshot](./img/map-matching-example.gif)

The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.

In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.

Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).

### Limits and Counts
The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).

One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.


<h3 id="map-match-a-gpx-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gps_accuracy|query|integer|false|Specify the precision of a point, in meter|
|vehicle|query|string|false|Specify the vehicle profile like car|

> Example responses

> 200 Response

```json
{
  "hints": {
    "visited_nodes.average": 58,
    "visited_nodes.sum": 58
  },
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ],
    "took": 2
  },
  "paths": [
    {
      "ascend": 6.3294677734375,
      "bbox": [
        11.539424,
        48.118343,
        11.558901,
        48.122364
      ],
      "descend": 25.0579833984375,
      "details": {},
      "distance": 1791.011,
      "instructions": [
        {
          "distance": 672.954,
          "heading": 89.04,
          "interval": [
            0,
            6
          ],
          "sign": 0,
          "street_name": "Lindenschmitstraße",
          "text": "Continue onto Lindenschmitstraße",
          "time": 144703
        },
        {
          "distance": 107.145,
          "interval": [
            6,
            7
          ],
          "sign": -2,
          "street_name": "",
          "text": "Turn left",
          "time": 22675
        },
        {
          "distance": 140.169,
          "interval": [
            7,
            10
          ],
          "sign": 2,
          "street_name": "Oberländerstraße",
          "text": "Turn right onto Oberländerstraße",
          "time": 28032
        },
        {
          "distance": 360.232,
          "interval": [
            10,
            18
          ],
          "sign": 1,
          "street_name": "",
          "text": "Turn slight right",
          "time": 72677
        },
        {
          "distance": 177.621,
          "interval": [
            18,
            20
          ],
          "sign": 2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn right onto Thalkirchner Straße",
          "time": 35524
        },
        {
          "distance": 332.89,
          "interval": [
            20,
            24
          ],
          "sign": -2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn left onto Thalkirchner Straße",
          "time": 67351
        },
        {
          "distance": 0,
          "interval": [
            24,
            24
          ],
          "last_heading": 45.67046584987792,
          "sign": 4,
          "street_name": "",
          "text": "Arrive at destination",
          "time": 0
        }
      ],
      "legs": [],
      "points": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.540387,
            48.118368
          ],
          [
            11.54061,
            48.118356
          ],
          [
            11.541941,
            48.118409
          ],
          [
            11.543696,
            48.118344
          ],
          [
            11.547167,
            48.118343
          ],
          [
            11.548478,
            48.118366
          ],
          [
            11.548487,
            48.119329
          ],
          [
            11.548807,
            48.119328
          ],
          [
            11.549408,
            48.119366
          ],
          [
            11.550349,
            48.119508
          ],
          [
            11.550441,
            48.119473
          ],
          [
            11.551109,
            48.119467
          ],
          [
            11.551553,
            48.119445
          ],
          [
            11.551748,
            48.119398
          ],
          [
            11.552087,
            48.119475
          ],
          [
            11.552236,
            48.119542
          ],
          [
            11.552353,
            48.119635
          ],
          [
            11.553853,
            48.121136
          ],
          [
            11.555448,
            48.12039
          ],
          [
            11.555797,
            48.120206
          ],
          [
            11.55632,
            48.120592
          ],
          [
            11.556716,
            48.120919
          ],
          [
            11.557326,
            48.121345
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "points_encoded": false,
      "snapped_waypoints": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "time": 370962,
      "transfers": 0,
      "weight": 307.852443
    }
  ]
}
```

> default Response

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="map-match-a-gpx-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Routing Result|[RouteResponse](#schemarouteresponse)|
|default|Default|Unexpected Error|[GHError](#schemagherror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="graphhopper-directions-api-cluster-api">Cluster API</h1>


### Introduction

![Cluster Example](./img/cluster-solution.jpg)

It solves the “capacity clustering problem” by assigning a set of customers to a given number of distinct groups (called clusters).
The API “clusters” by minimizing the total distance from each individual customer to its designated group median.
It can also consider minimum and maximum capacity restrictions for each group.

Clustering can be used in many practical applications.
For example, it can help to plan territories, i.e. territory optimization for field teams with large territories for field workers,
or to solve large vehicle routing problems (VRP).


## POST Cluster Endpoint

<a id="opIdsolveClusteringProblem"></a>

> Code samples

```bash
curl "https://example.com/cluster?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configuration": {
      "clustering": {
        "max_quantity": 50,
        "min_quantity": 30,
        "num_clusters": 10
      },
      "response_type": "json",
      "routing": {
        "cost_per_meter": 0,
        "cost_per_second": 1,
        "profile": "car"
      }
    },
    "customers": [
      {
        "address": {
          "lat": 48.118434,
          "lon": 11.53941,
          "street_hint": "Lindenschmitstraße 52"
        },
        "id": "GraphHopper GmbH",
        "quantity": 10
      }
    ]
  }'
```

`POST /cluster`


The Cluster endpoint is used with a POST request towards
`https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
Please note that for problems that take longer than 10 seconds a bad request error is returned.
In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.


> Body parameter

```json
{
  "configuration": {
    "clustering": {
      "max_quantity": 50,
      "min_quantity": 30,
      "num_clusters": 10
    },
    "response_type": "json",
    "routing": {
      "cost_per_meter": 0,
      "cost_per_second": 1,
      "profile": "car"
    }
  },
  "customers": [
    {
      "address": {
        "lat": 48.118434,
        "lon": 11.53941,
        "street_hint": "Lindenschmitstraße 52"
      },
      "id": "GraphHopper GmbH",
      "quantity": 10
    }
  ]
}
```

<h3 id="post-cluster-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClusterRequest](#schemaclusterrequest)|true|Request object that contains the problem to be solved|
|» configuration|body|[ClusterConfiguration](#schemaclusterconfiguration)|false|none|
|» customers|body|[[ClusterCustomer](#schemaclustercustomer)]|false|none|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "ids": [
        "GraphHopper GmbH"
      ],
      "quantity": 40
    }
  ],
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "processing_time": 4900,
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "There has been an internal server error."
}
```

<h3 id="post-cluster-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response containing the solution|[ClusterResponse](#schemaclusterresponse)|
|400|Bad Request|Error occurred when reading the request. Request is invalid.|[BadRequest](#schemabadrequest)|
|500|Internal Server Error|Error occurred on server side.|[InternalErrorMessage](#schemainternalerrormessage)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Batch Cluster Endpoint

<a id="opIdasyncClusteringProblem"></a>

> Code samples

```bash
curl "https://example.com/cluster/calculate?key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "configuration": {
      "clustering": {
        "max_quantity": 50,
        "min_quantity": 30,
        "num_clusters": 10
      },
      "response_type": "json",
      "routing": {
        "cost_per_meter": 0,
        "cost_per_second": 1,
        "profile": "car"
      }
    },
    "customers": [
      {
        "address": {
          "lat": 48.118434,
          "lon": 11.53941,
          "street_hint": "Lindenschmitstraße 52"
        },
        "id": "GraphHopper GmbH",
        "quantity": 10
      }
    ]
  }'
```

`POST /cluster/calculate`


Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
long running problems only. The work flow is asynchronous:

- send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
- poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
  towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.


> Body parameter

```json
{
  "configuration": {
    "clustering": {
      "max_quantity": 50,
      "min_quantity": 30,
      "num_clusters": 10
    },
    "response_type": "json",
    "routing": {
      "cost_per_meter": 0,
      "cost_per_second": 1,
      "profile": "car"
    }
  },
  "customers": [
    {
      "address": {
        "lat": 48.118434,
        "lon": 11.53941,
        "street_hint": "Lindenschmitstraße 52"
      },
      "id": "GraphHopper GmbH",
      "quantity": 10
    }
  ]
}
```

<h3 id="batch-cluster-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClusterRequest](#schemaclusterrequest)|true|Request object that contains the problem to be solved|
|» configuration|body|[ClusterConfiguration](#schemaclusterconfiguration)|false|none|
|» customers|body|[[ClusterCustomer](#schemaclustercustomer)]|false|none|

> Example responses

> 200 Response

```json
{
  "job_id": "44886560-b584-4da5-b245-768151dacd8f"
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 500 Response

```json
{
  "code": 500,
  "message": "There has been an internal server error."
}
```

<h3 id="batch-cluster-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A jobId you can use to retrieve your solution from the server - see solution endpoint.|[JobId](#schemajobid)|
|400|Bad Request|Error occurred when reading client request. Request is invalid.|[BadRequest](#schemabadrequest)|
|500|Internal Server Error|Error occurred on server side.|[InternalErrorMessage](#schemainternalerrormessage)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## GET Batch Solution Endpoint

<a id="opIdgetClusterSolution"></a>

> Code samples

```bash
curl "https://example.com/cluster/solution/string?key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /cluster/solution/{jobId}`

This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
You can fetch it with the job_id, you have been sent.


<h3 id="get-batch-solution-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|Request solution with jobId|

> Example responses

> 200 Response

```json
{
  "clusters": [
    {
      "ids": [
        "GraphHopper GmbH"
      ],
      "quantity": 40
    }
  ],
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "processing_time": 4900,
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

> 400 Response

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

> 404 Response

```json
{
  "message": "Invalid job_id 73314c89-ee4b-459c-aca4-0ad6d6e558da",
  "status": "finished"
}
```

<h3 id="get-batch-solution-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A response containing the solution|[ClusterResponse](#schemaclusterresponse)|
|400|Bad Request|Error occurred on client side such as invalid input.|[BadRequest](#schemabadrequest)|
|404|Not Found|Requested solution could not be found.|Inline|
|500|Internal Server Error|Error occurred on server side.|None|

<h3 id="get-batch-solution-endpoint-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error message|
|status|string|false|none|status|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Credits|integer||The credit costs for this request. Note it could be a decimal and even negative number, e.g. when an async request failed.|
|200|X-RateLimit-Limit|integer||Your current daily credit limit.|
|200|X-RateLimit-Remaining|integer||Your remaining credits until the reset.|
|200|X-RateLimit-Reset|integer||The number of seconds that you have to wait before a reset of the credit count is done.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "address": {
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "snapped_waypoint": {
      "lat": 51.512665,
      "lon": -0.092869
    },
    "street_hint": "Queens Victoria Street 70"
  },
  "arr_date_time": "1970-01-01T00:00:00Z",
  "arr_time": 0,
  "distance": 0,
  "driving_time": 0,
  "end_date_time": "1970-01-01T00:00:00Z",
  "end_time": 0,
  "id": "string",
  "load_after": [
    0
  ],
  "load_before": [
    0
  ],
  "location_id": "string",
  "preparation_time": 0,
  "type": "start",
  "waiting_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ResponseAddress](#schemaresponseaddress)|false|none|Address of activity|
|arr_date_time|string(date-time)|false|none|Arrival date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.|
|arr_time|integer(int64)|false|none|Arrival time at this activity in seconds. If type is `start`, this is not available (since it makes no sense to have `arr_time` at start). However, `end_time` is available and actually means \"departure time\" at start location. It is important to note that `arr_time` does not necessarily mean \"start of underlying activity\", it solely means arrival time at activity location. If this activity has no time windows and if there are no further preparation times, `arr_time` is equal to activity start time.|
|distance|integer(int64)|false|none|cumulated distance from start to this activity in m|
|driving_time|integer(int64)|false|none|cumulated driving time from start to this driver activity in seconds|
|end_date_time|string(date-time)|false|none|End date time with offset like this 1970-01-01T01:00+01:00. If you do not use time-dependent optimization, this is `null`.|
|end_time|integer(int64)|false|none|End time of and thus departure time at this activity. If type is `end`, this is not available (since it makes no sense to have an `end_time` at end) `end_time` at each activity is equal to the departure time at the activity location.|
|id|string|false|none|Id referring to the underlying service or shipment, i.e. the shipment or service this activity belongs to|
|load_after|[integer(int32)]|false|none|Array with size/capacity dimensions after this activity|
|load_before|[integer(int32)]|false|none|Array with size/capacity dimensions before this activity|
|location_id|string|false|none|Id that refers to address|
|preparation_time|integer(int64)|false|none|preparation time at this activity in seconds|
|type|string|false|none|type of activity|
|waiting_time|integer(int64)|false|none|Waiting time at this activity in seconds. A waiting time can occur if the activity has at least one time window. If `arr_time` < `time_window.earliest` a waiting time of `time_window_earliest` - `arr_time` occurs.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|start|
|type|end|
|type|service|
|type|pickupShipment|
|type|deliverShipment|
|type|pickup|
|type|delivery|
|type|break|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
  "lat": 51.512665,
  "location_id": "550e8400-e29b-11d4-a716-446655440000",
  "lon": -0.092869,
  "name": "Queens Victoria Street 70, Second Floor, Flat 245",
  "street_hint": "Queens Victoria Street 70"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|curbside|string|false|none|Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap.|
|lat|number(double)|true|none|Latitude of location.|
|location_id|string|true|none|Specifies the id of the location.|
|lon|number(double)|true|none|Longitude of location.|
|name|string|false|none|Name of location.|
|street_hint|string|false|none|Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|

#### Enumerated Values

|Property|Value|
|---|---|
|curbside|right|
|curbside|left|
|curbside|any|

<h2 id="tocS_Algorithm">Algorithm</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithm"></a>
<a id="schema_Algorithm"></a>
<a id="tocSalgorithm"></a>
<a id="tocsalgorithm"></a>

```json
{
  "objective": "transport_time",
  "problem_type": "min"
}
```

Use `objectives` instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objective|string|false|none|none|
|problem_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|objective|transport_time|
|objective|completion_time|
|problem_type|min|
|problem_type|min-max|

<h2 id="tocS_BadRequest">BadRequest</h2>
<!-- backwards compatibility -->
<a id="schemabadrequest"></a>
<a id="schema_BadRequest"></a>
<a id="tocSbadrequest"></a>
<a id="tocsbadrequest"></a>

```json
{
  "hints": [
    {
      "details": "class java.lang.IllegalArgumentException",
      "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
    }
  ],
  "message": "Bad Request",
  "status": "finished"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hints|[[ErrorMessage](#schemaerrormessage)]|false|none|Optional error information.|
|message|string|false|none|Short error message|
|status|string|false|none|status|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "ids": [
    "GraphHopper GmbH"
  ],
  "quantity": 40
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|Array of customer ids assigned to this specific cluster|
|quantity|number(int32)|false|none|Cluster size|

<h2 id="tocS_ClusterConfiguration">ClusterConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfiguration"></a>
<a id="schema_ClusterConfiguration"></a>
<a id="tocSclusterconfiguration"></a>
<a id="tocsclusterconfiguration"></a>

```json
{
  "clustering": {
    "max_quantity": 50,
    "min_quantity": 30,
    "num_clusters": 10
  },
  "response_type": "json",
  "routing": {
    "cost_per_meter": 0,
    "cost_per_second": 1,
    "profile": "car"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clustering|[ClusterConfigurationClustering](#schemaclusterconfigurationclustering)|false|none|none|
|response_type|string|false|none|Specifies the response format. You can either choose `geojson` or `json`.|
|routing|[ClusterConfigurationRouting](#schemaclusterconfigurationrouting)|false|none|none|

<h2 id="tocS_ClusterConfigurationClustering">ClusterConfigurationClustering</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigurationclustering"></a>
<a id="schema_ClusterConfigurationClustering"></a>
<a id="tocSclusterconfigurationclustering"></a>
<a id="tocsclusterconfigurationclustering"></a>

```json
{
  "max_quantity": 50,
  "min_quantity": 30,
  "num_clusters": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_quantity|number(int32)|false|none|Specifies max. quantity in a cluster|
|min_quantity|number(int32)|false|none|Specifies min. quantity in a cluster|
|num_clusters|number(int32)|false|none|Specifies the number of clusters|

<h2 id="tocS_ClusterConfigurationRouting">ClusterConfigurationRouting</h2>
<!-- backwards compatibility -->
<a id="schemaclusterconfigurationrouting"></a>
<a id="schema_ClusterConfigurationRouting"></a>
<a id="tocSclusterconfigurationrouting"></a>
<a id="tocsclusterconfigurationrouting"></a>

```json
{
  "cost_per_meter": 0,
  "cost_per_second": 1,
  "profile": "car"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost_per_meter|number(double)|false|none|Cost per meter (travel distance)|
|cost_per_second|number(double)|false|none|Cost per second (travel time)|
|profile|string|false|none|The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap)|

<h2 id="tocS_ClusterCustomer">ClusterCustomer</h2>
<!-- backwards compatibility -->
<a id="schemaclustercustomer"></a>
<a id="schema_ClusterCustomer"></a>
<a id="tocSclustercustomer"></a>
<a id="tocsclustercustomer"></a>

```json
{
  "address": {
    "lat": 48.118434,
    "lon": 11.53941,
    "street_hint": "Lindenschmitstraße 52"
  },
  "id": "GraphHopper GmbH",
  "quantity": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ClusterCustomerAddress](#schemaclustercustomeraddress)|false|none|none|
|id|string|false|none|id of customer|
|quantity|number(int32)|false|none|demand of customer|

<h2 id="tocS_ClusterCustomerAddress">ClusterCustomerAddress</h2>
<!-- backwards compatibility -->
<a id="schemaclustercustomeraddress"></a>
<a id="schema_ClusterCustomerAddress"></a>
<a id="tocSclustercustomeraddress"></a>
<a id="tocsclustercustomeraddress"></a>

```json
{
  "lat": 48.118434,
  "lon": 11.53941,
  "street_hint": "Lindenschmitstraße 52"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|Latitude|
|lon|number(double)|false|none|Longitude|
|street_hint|string|false|none|Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|

<h2 id="tocS_ClusterRequest">ClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclusterrequest"></a>
<a id="schema_ClusterRequest"></a>
<a id="tocSclusterrequest"></a>
<a id="tocsclusterrequest"></a>

```json
{
  "configuration": {
    "clustering": {
      "max_quantity": 50,
      "min_quantity": 30,
      "num_clusters": 10
    },
    "response_type": "json",
    "routing": {
      "cost_per_meter": 0,
      "cost_per_second": 1,
      "profile": "car"
    }
  },
  "customers": [
    {
      "address": {
        "lat": 48.118434,
        "lon": 11.53941,
        "street_hint": "Lindenschmitstraße 52"
      },
      "id": "GraphHopper GmbH",
      "quantity": 10
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|[ClusterConfiguration](#schemaclusterconfiguration)|false|none|none|
|customers|[[ClusterCustomer](#schemaclustercustomer)]|false|none|none|

<h2 id="tocS_ClusterResponse">ClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclusterresponse"></a>
<a id="schema_ClusterResponse"></a>
<a id="tocSclusterresponse"></a>
<a id="tocsclusterresponse"></a>

```json
{
  "clusters": [
    {
      "ids": [
        "GraphHopper GmbH"
      ],
      "quantity": 40
    }
  ],
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "processing_time": 4900,
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[[Cluster](#schemacluster)]|false|none|none|
|copyrights|[string]|false|none|none|
|processing_time|number(double)|false|none|none|
|status|string|false|none|Indicates the current status of the job|
|waiting_time_in_queue|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting_in_queue|
|status|processing|
|status|finished|

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "routing": {
    "calc_points": false,
    "consider_traffic": false,
    "curbside_strictness": "soft",
    "fail_fast": true,
    "network_data_provider": "openstreetmap",
    "return_snapped_waypoints": false,
    "snap_preventions": [
      "motorway",
      "trunk",
      "bridge",
      "tunnel",
      "ferry"
    ]
  }
}
```

Specifies general configurations that are taken into account when solving the vehicle routing problem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routing|[Routing](#schemarouting)|false|none|This contains all routing specific configurations.|

<h2 id="tocS_CostMatrix">CostMatrix</h2>
<!-- backwards compatibility -->
<a id="schemacostmatrix"></a>
<a id="schema_CostMatrix"></a>
<a id="tocScostmatrix"></a>
<a id="tocscostmatrix"></a>

```json
{
  "data": {
    "distances": [
      [
        0
      ]
    ],
    "info": {
      "copyrights": [
        "string"
      ],
      "took": 0
    },
    "times": [
      [
        0
      ]
    ]
  },
  "location_ids": [
    "string"
  ],
  "profile": "string",
  "type": "default"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|JSON data of matrix response|
|location_ids|[string]|false|none|none|
|profile|string|false|none|vehicle profile or empty if catch all fallback|
|type|string|false|none|type of cost matrix, currently default or google are supported|

#### Enumerated Values

|Property|Value|
|---|---|
|type|default|
|type|google|

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "code": 0,
  "id": "string",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|Reason code<br><br>Code   \|  Reason<br>:------\|:---------<br>1 \| cannot serve required skill<br>2 \| cannot be visited within time window<br>3 \| does not fit into any vehicle due to capacity<br>4 \| cannot be assigned due to max distance constraint of vehicles<br>21 \| could not be assigned due to relation constraint<br>22 \| could not be assigned due to allowed vehicle constraint<br>23 \| could not be assigned due to max-time-in-vehicle constraint<br>24 \| driver does not need a break<br>25 \| could not be assigned due to disallowed vehicle constraint<br>26 \| could not be assigned due to max drive time constraint<br>27 \| could not be assigned due to max job constraint<br>28 \| could not be assigned due to max activity constraint<br>50 \| underlying location cannot be accessed over road network by at least one vehicle<br>|
|id|string|false|none|Id of unassigned service/shipment|
|reason|string|false|none|Human readable reason as listed above|

<h2 id="tocS_DriveTimeBreak">DriveTimeBreak</h2>
<!-- backwards compatibility -->
<a id="schemadrivetimebreak"></a>
<a id="schema_DriveTimeBreak"></a>
<a id="tocSdrivetimebreak"></a>
<a id="tocsdrivetimebreak"></a>

```json
{
  "duration": 2700,
  "initial_driving_time": 3600,
  "max_driving_time": 14400,
  "possible_split": [
    900,
    1800
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int64)|true|none|Specifies the duration of the break in seconds.|
|initial_driving_time|integer(int64)|false|none|Specifies the initial (current) driving time of a driver to allow dynamic adaptations in seconds.|
|max_driving_time|integer(int64)|true|none|Specifies the max driving time (in a row) without break in seconds.|
|possible_split|[integer(int64)]|false|none|Array specifying how a break duration (in seconds) can be split into several smaller breaks|

<h2 id="tocS_EncodedLineString">EncodedLineString</h2>
<!-- backwards compatibility -->
<a id="schemaencodedlinestring"></a>
<a id="schema_EncodedLineString"></a>
<a id="tocSencodedlinestring"></a>
<a id="tocsencodedlinestring"></a>

```json
"string"
```

A polyline-encoded list of positions. You'll need to decode this string in client code. We provide open source code in [Java](https://github.com/graphhopper/graphhopper/blob/e649aaed8d3f4378bf2d8889bbbc2318261eabb2/web-api/src/main/java/com/graphhopper/http/WebHelper.java#L54) and [JavaScript](https://github.com/graphhopper/directions-api-js-client/blob/cf43d1a5bc93a3e8007a44fcfc551117e4fa49bc/src/GHUtil.js#L27).

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "details": "class java.lang.IllegalArgumentException",
  "message": "unsupported json property [vehiles]. allowed properties: [vehicles, vehicle_types, services, shipments, relations, algorithm, objectives, cost_matrices, configuration]"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Details|
|message|string|false|none|error message|

<h2 id="tocS_GHError">GHError</h2>
<!-- backwards compatibility -->
<a id="schemagherror"></a>
<a id="schema_GHError"></a>
<a id="tocSgherror"></a>
<a id="tocsgherror"></a>

```json
{
  "hints": [
    {
      "message": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hints|[object]|false|none|Optional error information.|
|message|string|false|none|none|

<h2 id="tocS_GeocodingLocation">GeocodingLocation</h2>
<!-- backwards compatibility -->
<a id="schemageocodinglocation"></a>
<a id="schema_GeocodingLocation"></a>
<a id="tocSgeocodinglocation"></a>
<a id="tocsgeocodinglocation"></a>

```json
{
  "city": "string",
  "country": "string",
  "housenumber": "string",
  "name": "string",
  "osm_id": "string",
  "osm_key": "string",
  "osm_type": "string",
  "point": {
    "lat": 0,
    "lng": 0
  },
  "postcode": "string",
  "state": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the address|
|country|string|false|none|The country of the address|
|housenumber|string|false|none|The housenumber of the address|
|name|string|false|none|The name of the entity. Can be a boundary, POI, address, etc|
|osm_id|string|false|none|The OSM ID of the entity|
|osm_key|string|false|none|The OSM key of the entity|
|osm_type|string|false|none|N = node, R = relation, W = way|
|point|[GeocodingPoint](#schemageocodingpoint)|false|none|none|
|postcode|string|false|none|The postcode of the address|
|state|string|false|none|The state of the address|
|street|string|false|none|The street of the address|

<h2 id="tocS_GeocodingPoint">GeocodingPoint</h2>
<!-- backwards compatibility -->
<a id="schemageocodingpoint"></a>
<a id="schema_GeocodingPoint"></a>
<a id="tocSgeocodingpoint"></a>
<a id="tocsgeocodingpoint"></a>

```json
{
  "lat": 0,
  "lng": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|Latitude|
|lng|number(double)|false|none|Longitude|

<h2 id="tocS_GeocodingResponse">GeocodingResponse</h2>
<!-- backwards compatibility -->
<a id="schemageocodingresponse"></a>
<a id="schema_GeocodingResponse"></a>
<a id="tocSgeocodingresponse"></a>
<a id="tocsgeocodingresponse"></a>

```json
{
  "hits": [
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Berlin",
      "osm_id": 240109189,
      "osm_key": "place",
      "osm_type": "N",
      "osm_value": "city",
      "point": {
        "lat": 52.5170365,
        "lng": 13.3888599
      },
      "postcode": "10117"
    },
    {
      "country": "Deutschland",
      "extent": [
        13.088345,
        52.6755087,
        13.7611609,
        52.33826
      ],
      "name": "Berlin",
      "osm_id": 62422,
      "osm_key": "place",
      "osm_type": "R",
      "osm_value": "city",
      "point": {
        "lat": 52.5198535,
        "lng": 13.4385964
      }
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3906703,
        52.5200704,
        13.3948873,
        52.5175007
      ],
      "name": "Humboldt-Universität zu Berlin",
      "osm_id": 120456814,
      "osm_key": "amenity",
      "osm_type": "W",
      "osm_value": "university",
      "point": {
        "lat": 52.51875685,
        "lng": 13.393560493637775
      },
      "postcode": "10117",
      "street": "Dorotheenstraße"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3924346,
        52.5191829,
        13.3948768,
        52.517526
      ],
      "housenumber": "6",
      "name": "Humboldt-Universität zu Berlin",
      "osm_id": 6647,
      "osm_key": "building",
      "osm_type": "R",
      "osm_value": "yes",
      "point": {
        "lat": 52.51840935,
        "lng": 13.392908021752554
      },
      "postcode": "10117",
      "street": "Unter den Linden"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.2364563,
        52.5161915,
        13.2433375,
        52.5129557
      ],
      "housenumber": "3",
      "name": "Olympiastadion Berlin",
      "osm_id": 38862723,
      "osm_key": "leisure",
      "osm_type": "W",
      "osm_value": "stadium",
      "point": {
        "lat": 52.5147077,
        "lng": 13.239776301622072
      },
      "postcode": "14053",
      "street": "Olympischer Platz"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3739245,
        52.528547,
        13.3818019,
        52.5229778
      ],
      "name": "Charité Universitätsmedizin Berlin",
      "osm_id": 583306346,
      "osm_key": "amenity",
      "osm_type": "W",
      "osm_value": "hospital",
      "point": {
        "lat": 52.52585125,
        "lng": 13.377739577932736
      },
      "postcode": "10117",
      "street": "Hufelandweg"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3906159,
        52.5190301,
        13.3923847,
        52.5174089
      ],
      "housenumber": "8",
      "name": "Staatsbibliothek zu Berlin",
      "osm_id": 180594,
      "osm_key": "amenity",
      "osm_type": "R",
      "osm_value": "library",
      "point": {
        "lat": 52.5182233,
        "lng": 13.391516532100738
      },
      "postcode": "10117",
      "street": "Unter den Linden"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Berlin Hauptbahnhof",
      "osm_id": 3856100103,
      "osm_key": "railway",
      "osm_type": "N",
      "osm_value": "station",
      "point": {
        "lat": 52.5249451,
        "lng": 13.3696614
      },
      "postcode": "10557",
      "street": "Washingtonplatz"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "name": "Schlacht um Berlin",
      "osm_id": 1078631331,
      "osm_key": "historic",
      "osm_type": "N",
      "osm_value": "battlefield",
      "point": {
        "lat": 52.5127537,
        "lng": 13.3814231
      },
      "postcode": "10117",
      "street": "Gertrud-Kolmar-Straße"
    },
    {
      "city": "Berlin",
      "country": "Deutschland",
      "extent": [
        13.3807495,
        52.5083344,
        13.3822459,
        52.5074359
      ],
      "housenumber": "5",
      "name": "Abgeordnetenhaus von Berlin",
      "osm_id": 1154556,
      "osm_key": "office",
      "osm_type": "R",
      "osm_value": "government",
      "point": {
        "lat": 52.50786655,
        "lng": 13.381504320489928
      },
      "postcode": "10117",
      "street": "Niederkirchnerstraße"
    }
  ],
  "took": 37
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hits|[[GeocodingLocation](#schemageocodinglocation)]|false|none|none|
|took|number(int64)|false|none|in ms|

<h2 id="tocS_GroupRelation">GroupRelation</h2>
<!-- backwards compatibility -->
<a id="schemagrouprelation"></a>
<a id="schema_GroupRelation"></a>
<a id="tocSgrouprelation"></a>
<a id="tocsgrouprelation"></a>

```json
{
  "groups": [
    "group-A",
    "group-B"
  ],
  "type": "in_direct_sequence"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[string]|true|none|An array of groups that should be related|
|type|string|true|none|Specifies the type of relation. It must be either of type `in_sequence` or `in_direct_sequence`.<br>|

<h2 id="tocS_InfoResponse">InfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemainforesponse"></a>
<a id="schema_InfoResponse"></a>
<a id="tocSinforesponse"></a>
<a id="tocsinforesponse"></a>

```json
{
  "bbox": [
    13.072624,
    52.333508,
    13.763972,
    52.679616
  ],
  "build_date": "2014-02-21T16:52",
  "features": {
    "car": {
      "elevation": false
    },
    "foot": {
      "elevation": true
    }
  },
  "version": "0.4"
}
```

Information about the server and the geographical area that it covers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|string|false|none|The bounding box of the geographical area covered by this GraphHopper instance. Format: `"minLon,minLat,maxLon,maxLat"<br>|
|features|object|false|none|The supported features, such as elevation, per vehicle profile.<br>|
|version|string|false|none|The version of the GraphHopper server that provided this response. This is not related to the API version.<br>|

<h2 id="tocS_InternalErrorMessage">InternalErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemainternalerrormessage"></a>
<a id="schema_InternalErrorMessage"></a>
<a id="tocSinternalerrormessage"></a>
<a id="tocsinternalerrormessage"></a>

```json
{
  "code": 500,
  "message": "There has been an internal server error."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|Details|

<h2 id="tocS_IsochroneResponse">IsochroneResponse</h2>
<!-- backwards compatibility -->
<a id="schemaisochroneresponse"></a>
<a id="schema_IsochroneResponse"></a>
<a id="tocSisochroneresponse"></a>
<a id="tocsisochroneresponse"></a>

```json
{
  "polygons": [
    {
      "geometry": {
        "coordinates": [
          [
            13.351851,
            52.51345
          ],
          [
            13.350402,
            52.516949
          ],
          [
            13.352598,
            52.522252
          ],
          [
            13.351851,
            52.51345
          ]
        ],
        "type": "Polygon"
      },
      "properties": {
        "bucket": 0
      },
      "type": "Feature"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyrights|[string]|false|none|none|
|polygons|[[IsochroneResponsePolygon](#schemaisochroneresponsepolygon)]|false|none|The list of polygons in GeoJson format. It can be used e.g. in the Leaflet framework:<br><br>```<br>L.geoJson(json.polygons).addTo(map)<br>```<br><br>The number of polygon is identical to the specified buckets in the query. Every polygon contains the bucket number in the properties section of the GeoJson.<br>|

<h2 id="tocS_IsochroneResponsePolygon">IsochroneResponsePolygon</h2>
<!-- backwards compatibility -->
<a id="schemaisochroneresponsepolygon"></a>
<a id="schema_IsochroneResponsePolygon"></a>
<a id="tocSisochroneresponsepolygon"></a>
<a id="tocsisochroneresponsepolygon"></a>

```json
{
  "geometry": {
    "coordinates": [
      [
        [
          0
        ]
      ]
    ],
    "type": "string"
  },
  "properties": {
    "bucket": 0
  },
  "type": "string"
}
```

A found path

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Polygon](#schemapolygon)|false|none|none|
|properties|object|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
{
  "job_id": "44886560-b584-4da5-b245-768151dacd8f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|false|none|UUID. Unique id for your job/request with which you can fetch your solution|

<h2 id="tocS_JobRelation">JobRelation</h2>
<!-- backwards compatibility -->
<a id="schemajobrelation"></a>
<a id="schema_JobRelation"></a>
<a id="tocSjobrelation"></a>
<a id="tocsjobrelation"></a>

```json
{
  "ids": [
    "pickup-1",
    "pickup-2"
  ],
  "type": "in_direct_sequence",
  "vehicle_id": "driver-Peter"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|Specifies an array of shipment and/or service ids that are in relation. If you deal with services then you need to use the id of your services in ids. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use your shipment id plus the keyword `_pickup` or `_delivery`. If you want to place a service or shipment activity at the beginning of your route, use the special ID `start`. In turn, use `end` to place it at the end of the route.|
|type|string|true|none|Specifies the type of relation. It must be either of type `in_same_route`, `in_sequence` or `in_direct_sequence`.<br><br>`in_same_route`: As the name suggest, it enforces the specified services or shipments to be in the same route. It can be specified as follows:<br><br>```json<br>{<br>   "type": "in_same_route",<br>   "ids": ["serv_i_id","serv_j_id"]<br>}<br>```<br><br>This enforces service i to be in the same route as service j no matter which vehicle will be employed. If a specific vehicle (driver) is required to conduct this, just add a `vehicle_id` like this:<br><br>```<br>{<br>   "type": "in_same_route",<br>   "ids": ["serv_i_id","serv_j_id"],<br>   "vehicle_id": "vehicle1"<br>}<br>```<br><br>This not only enforce service i and j to be in the same route, but also makes sure that both services are in the route of `vehicle1`.<br><br>*Tip*: This way initial loads and vehicle routes can be modelled. For example, if your vehicles are already on the road and new orders come in, then vehicles can still be rescheduled subject to the orders that have already been assigned to these vehicles.<br><br><br><br>`in_sequence`: This relation type enforces n jobs to be in sequence. It can be specified as<br><br>```json<br>{<br>   "type": "in_sequence",<br>   "ids": ["serv_i_id","serv_j_id"]<br>}<br>```<br><br>which means that service j need to be in the same route as service i AND it needs to occur somewhere after service i. As described above if a specific vehicle needs to conduct this, just add `vehicle_id`.<br><br><br>`in_direct_sequence`: This enforces n services or shipments to be in direct sequence. It can be specified as<br><br>```json<br>{<br>   "type": "in_direct_sequence",<br>   "ids": ["serv_i_id","serv_j_id","serv_k_id"]<br>}<br>```<br><br>yielding service j to occur directly after service i, and service k to occur directly after service j i.e. in strong order. Again, a vehicle can be assigned a priority by adding a `vehicle_id` to the relation.<br><br><br>*Special IDs*:<br>If you look at the previous example and you want service i to be the first in the route, use the special ID `start` as follows:<br><br>```json<br>{<br>   "type": "in_direct_sequence",<br>   "ids": ["start","serv_i_id","serv_j_id","serv_k_id"]<br>}<br>```<br><br>Latter enforces the direct sequence of i, j and k at the beginning of the route. If this sequence should be bound to the end of the route, use the special ID `end` like this:<br><br>```json<br>{<br>   "type": "in_direct_sequence",<br>   "ids": ["serv_i_id","service_j_id","serv_k_id","end"]<br>}<br>```<br><br>If you deal with services then you need to use the 'id' of your services in the field 'ids'. To also consider sequences of the pickups and deliveries of your shipments, you need to use a special ID, i.e. use the shipment id plus the keyword `_pickup` or `_delivery`. For example, to ensure that the pickup and delivery of the shipment with the id 'my_shipment' are direct neighbors, you need the following specification:<br><br>```<br>{<br>   "type": "in_direct_sequence",<br>   "ids": ["my_ship_pickup","my_ship_delivery"]<br>}<br>```<br><br>|
|vehicle_id|string|false|none|Id of pre-assigned vehicle, i.e. the vehicle id that is determined to conduct the services and shipments in this relation.|

<h2 id="tocS_LineString">LineString</h2>
<!-- backwards compatibility -->
<a id="schemalinestring"></a>
<a id="schema_LineString"></a>
<a id="tocSlinestring"></a>
<a id="tocslinestring"></a>

```json
{
  "coordinates": [
    [
      0
    ]
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[[number]]|false|none|A list of coordinate pairs or triples, `[lon,lat]` or `[lon,lat,elevation]`.<br>|
|type|string|false|none|none|

<h2 id="tocS_MatrixRequest">MatrixRequest</h2>
<!-- backwards compatibility -->
<a id="schemamatrixrequest"></a>
<a id="schema_MatrixRequest"></a>
<a id="tocSmatrixrequest"></a>
<a id="tocsmatrixrequest"></a>

```json
{
  "from_point_hints": [
    "Copenhagen Street",
    "Richmond Avenue",
    "White Lion Street"
  ],
  "from_points": [
    [
      -0.11379003524780275,
      51.53664617804063
    ],
    [
      -0.10866165161132814,
      51.538621486960956
    ],
    [
      -0.11059284210205078,
      51.53245503603458
    ]
  ],
  "out_arrays": [
    "weights",
    "times",
    "distances"
  ],
  "to_point_hints": [
    "Cannon",
    "Cornhill"
  ],
  "to_points": [
    [
      -0.09576559066772462,
      51.512882367963456
    ],
    [
      -0.08797645568847656,
      51.51317615367198
    ]
  ],
  "vehicle": "car"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fail_fast|boolean|false|none|Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).|
|from_curbsides|[string]|false|none|See `curbsides`of symmetrical matrix|
|from_point_hints|[string]|false|none|See `point_hints`of symmetrical matrix|
|from_points|[[number(double)]]|false|none|The starting points for the routes in an array of `[longitude,latitude]`. For instance, if you want to calculate three routes from point A such as A->1, A->2, A->3 then you have one `from_point` parameter and three `to_point` parameters.|
|out_arrays|[string]|false|none|Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.|
|snap_preventions|[string]|false|none|See `snap_preventions` of symmetrical matrix|
|to_curbsides|[string]|false|none|See `curbsides`of symmetrical matrix|
|to_point_hints|[string]|false|none|See `point_hints`of symmetrical matrix|
|to_points|[[number(double)]]|false|none|The destination points for the routes in an array of `[longitude,latitude]`.|
|turn_costs|boolean|false|none|Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.|
|vehicle|object|false|none|none|

<h2 id="tocS_MatrixResponse">MatrixResponse</h2>
<!-- backwards compatibility -->
<a id="schemamatrixresponse"></a>
<a id="schema_MatrixResponse"></a>
<a id="tocSmatrixresponse"></a>
<a id="tocsmatrixresponse"></a>

```json
{
  "distances": [
    [
      0,
      97653,
      48887
    ],
    [
      97426,
      0,
      121035
    ],
    [
      49006,
      121049,
      0
    ]
  ],
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ]
  },
  "times": [
    [
      0,
      4197,
      2994
    ],
    [
      4192,
      0,
      6074
    ],
    [
      3006,
      6062,
      0
    ]
  ],
  "weights": [
    [
      0,
      5662.551,
      3727.147
    ],
    [
      5653.807,
      0,
      7889.653
    ],
    [
      3741.528,
      7878.365,
      0
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distances|[[number(int64)]]|false|none|The distance matrix for the specified points in the same order as the time matrix. The distances are in meters. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.|
|hints|[object]|false|none|Optional. Additional response data.|
|info|[ResponseInfo](#schemaresponseinfo)|false|none|Additional information for your request|
|times|[[number(int64)]]|false|none|The time matrix for the specified points in the order [[from1->to1, from1->to2, ...], [from2->to1, from2->to2, ...], ...]. The times are in seconds. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.|
|weights|[[number(double)]]|false|none|The weight matrix for the specified points in the same order as the time matrix. The weights for different vehicles can have a different unit but the weights array is perfectly suited as input for Vehicle Routing Problems as it is currently faster to calculate. If `fail_fast=false` the matrix will contain `null` for connections that could not be found.|

<h2 id="tocS_Objective">Objective</h2>
<!-- backwards compatibility -->
<a id="schemaobjective"></a>
<a id="schema_Objective"></a>
<a id="tocSobjective"></a>
<a id="tocsobjective"></a>

```json
{
  "type": "min",
  "value": "vehicles"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of objective function, i.e. `min` or `min-max`.<br><br> * `min`: Minimizes the objective value.<br> * `min-max`: Minimizes the maximum objective value.<br><br>For instance, `min` -> `vehicles` minimizes the number of employed vehicles.<br>`min` -> `completion_time` minimizes the sum of your vehicle routes' completion time.<br><br>If you use, for example, `min-max` -> `completion_time`, it minimizes the maximum of your vehicle routes' completion time, i.e. it minimizes the overall makespan.<br>This only makes sense if you have more than one vehicle. In case of one vehicle, switching from `min` to `min-max` should not have any impact.<br>If you have more than one vehicle, then the algorithm tries to constantly move stops from one vehicle to another such that<br>the completion time of longest vehicle route can be further reduced. For example, if you have one vehicle that takes 8 hours<br>to serve all customers, adding another vehicle (and using `min-max`) might halve the time to serve all customers to 4 hours. However,<br>this usually comes with higher transport costs.<br><br>If you want to minimize `vehicles` first and, second, `completion_time`, you can also combine different objectives like this:<br><br>```json<br>"objectives" : [<br>   {<br>      "type": "min",<br>      "value": "vehicles"<br>   },<br>   {<br>      "type": "min",<br>      "value": "completion_time"<br>   }<br>]<br>```<br><br>If you want to balance activities or the number of stops among all employed drivers, you need to specify it as follows:<br><br>```json<br>"objectives" : [<br>   {<br>      "type": "min-max",<br>      "value": "completion_time"<br>   },<br>   {<br>      "type": "min-max",<br>      "value": "activities"<br>   }<br>]<br>```<br>|
|value|string|true|none|The value of the objective function.<br>The objective value `transport_time` solely considers the time<br>your drivers spend on the road, i.e. transport time. In contrary to `transport_time`, `completion_time` also takes waiting times at customer sites into account.<br>The `completion_time` of a route is defined as the time from starting to ending the route,<br>i.e. the route's transport time, the sum of waiting times plus the sum of activity durations.<br>Note that choosing `transport_time` or `completion_time` only makes a difference if you specified time windows for your services/shipments since only in<br>scenarios with time windows waiting times can occur.<br>The objective value `vehicles` can only be used along with `min` and minimizes vehicles.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|min|
|type|min-max|
|value|completion_time|
|value|transport_time|
|value|vehicles|
|value|activities|

<h2 id="tocS_Pickup">Pickup</h2>
<!-- backwards compatibility -->
<a id="schemapickup"></a>
<a id="schema_Pickup"></a>
<a id="tocSpickup"></a>
<a id="tocspickup"></a>

```json
{
  "address": {
    "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "street_hint": "Queens Victoria Street 70"
  },
  "duration": 1800,
  "group": "ASAP",
  "preparation_time": 300,
  "time_windows": [
    {
      "earliest": 32400,
      "latest": 36000
    },
    {
      "earliest": 50400,
      "latest": 54000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|Specifies pickup or delivery address.|
|duration|integer(int64)|false|none|Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.|
|group|string|false|none|Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.|
|preparation_time|integer(int64)|false|none|Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.|
|time_windows|[[TimeWindow](#schematimewindow)]|false|none|Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds).|

<h2 id="tocS_Polygon">Polygon</h2>
<!-- backwards compatibility -->
<a id="schemapolygon"></a>
<a id="schema_Polygon"></a>
<a id="tocSpolygon"></a>
<a id="tocspolygon"></a>

```json
{
  "coordinates": [
    [
      [
        0
      ]
    ]
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[[[number]]]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "configuration": {
    "routing": {
      "calc_points": true,
      "snap_preventions": [
        "motorway",
        "trunk",
        "tunnel",
        "bridge",
        "ferry"
      ]
    }
  },
  "objectives": [
    {
      "type": "min",
      "value": "vehicles"
    },
    {
      "type": "min",
      "value": "completion_time"
    }
  ],
  "services": [
    {
      "address": {
        "lat": 52.537338,
        "location_id": "13.375854_52.537338",
        "lon": 13.375854
      },
      "id": "s-1",
      "name": "visit-Joe",
      "size": [
        1
      ],
      "time_windows": [
        {
          "earliest": 1554805329,
          "latest": 1554806329
        }
      ]
    },
    {
      "address": {
        "lat": 52.525851,
        "location_id": "13.393364_52.525851",
        "lon": 13.393364
      },
      "id": "s-2",
      "name": "serve-Peter",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.523543,
        "location_id": "13.416882_52.523543",
        "lon": 13.416882
      },
      "id": "s-3",
      "name": "visit-Michael",
      "size": [
        1
      ]
    },
    {
      "address": {
        "lat": 52.514038,
        "location_id": "13.395767_52.514038",
        "lon": 13.395767
      },
      "id": "s-4",
      "name": "do nothing",
      "size": [
        1
      ]
    }
  ],
  "shipments": [
    {
      "delivery": {
        "address": {
          "lat": 52.513614,
          "location_id": "13.380575_52.513614",
          "lon": 13.380575
        }
      },
      "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
      "name": "pickup and deliver pizza to Peter",
      "pickup": {
        "address": {
          "lat": 52.529961,
          "location_id": "13.387613_52.529961",
          "lon": 13.387613
        }
      },
      "priority": 1,
      "required_skills": [
        "physical strength"
      ],
      "size": [
        1
      ]
    }
  ],
  "vehicle_types": [
    {
      "capacity": [
        10
      ],
      "profile": "bike",
      "type_id": "cargo-bike"
    }
  ],
  "vehicles": [
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-1"
    },
    {
      "earliest_start": 1554804329,
      "latest_end": 1554808329,
      "max_jobs": 3,
      "skills": [
        "physical strength"
      ],
      "start_address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "type_id": "cargo-bike",
      "vehicle_id": "vehicle-2"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|[Algorithm](#schemaalgorithm)|false|none|**Deprecated.** Use `objectives` instead.|
|configuration|[Configuration](#schemaconfiguration)|false|none|Specifies general configurations.|
|cost_matrices|[[CostMatrix](#schemacostmatrix)]|false|none|Specifies your own tranport time and distance matrices.|
|objectives|[[Objective](#schemaobjective)]|false|none|Specifies an objective function. The vehicle routing problem is solved in such a way that this objective function is minimized.|
|relations|[[JobRelation](#schemajobrelation) \| [GroupRelation](#schemagrouprelation)]|false|none|Defines additional relationships between orders.|
|services|[[Service](#schemaservice)]|false|none|Specifies the orders of the type "service". These are, for example, pick-ups, deliveries or other stops that are to be approached by the specified vehicles. Each of these orders contains only one location.|
|shipments|[[Shipment](#schemashipment)]|false|none|Specifies the available shipments. Each shipment contains a pickup and a delivery stop, which must be processed one after the other.|
|vehicle_types|[[VehicleType](#schemavehicletype)]|false|none|Specifies the available vehicle types. These types can be assigned to vehicles.|
|vehicles|[[Vehicle](#schemavehicle)]|false|none|Specifies the available vehicles.|

<h2 id="tocS_Response">Response</h2>
<!-- backwards compatibility -->
<a id="schemaresponse"></a>
<a id="schema_Response"></a>
<a id="tocSresponse"></a>
<a id="tocsresponse"></a>

```json
{
  "copyrights": [
    "GraphHopper",
    "OpenStreetMap contributors"
  ],
  "job_id": "d62fcadd-c84a-4298-90b5-28550125bec5",
  "processing_time": 459,
  "solution": {
    "completion_time": 4172,
    "costs": 438,
    "distance": 17994,
    "max_operation_time": 2465,
    "no_unassigned": 0,
    "no_vehicles": 2,
    "preparation_time": 0,
    "routes": [
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.529961,
              "location_id": "13.387613_52.529961",
              "lon": 13.387613
            },
            "arr_date_time": null,
            "arr_time": 1554804789,
            "distance": 2012,
            "driving_time": 460,
            "end_date_time": null,
            "end_time": 1554804789,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.387613_52.529961",
            "preparation_time": 0,
            "type": "pickupShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.513614,
              "location_id": "13.380575_52.513614",
              "lon": 13.380575
            },
            "arr_date_time": null,
            "arr_time": 1554805344,
            "distance": 4560,
            "driving_time": 1015,
            "end_date_time": null,
            "end_time": 1554805344,
            "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
            "load_after": [
              0
            ],
            "load_before": [
              1
            ],
            "location_id": "13.380575_52.513614",
            "preparation_time": 0,
            "type": "deliverShipment",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.514038,
              "location_id": "13.395767_52.514038",
              "lon": 13.395767
            },
            "arr_date_time": null,
            "arr_time": 1554805632,
            "distance": 5887,
            "driving_time": 1303,
            "end_date_time": null,
            "end_time": 1554805632,
            "id": "s-4",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.395767_52.514038",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.523543,
              "location_id": "13.416882_52.523543",
              "lon": 13.416882
            },
            "arr_date_time": null,
            "arr_time": 1554806253,
            "distance": 8486,
            "driving_time": 1924,
            "end_date_time": null,
            "end_time": 1554806253,
            "id": "s-3",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.416882_52.523543",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806794,
            "distance": 10618,
            "driving_time": 2465,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 2465,
        "distance": 10618,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40643,
                52.53631
              ],
              [
                13.40554,
                52.53616
              ],
              [
                13.4054,
                52.53608
              ],
              [
                13.40445,
                52.53513
              ],
              [
                13.40436,
                52.53509
              ],
              [
                13.40428,
                52.53508
              ],
              [
                13.40463,
                52.53419
              ],
              [
                13.40451,
                52.53419
              ],
              [
                13.4034,
                52.53401
              ],
              [
                13.403,
                52.53359
              ],
              [
                13.40291,
                52.53354
              ],
              [
                13.40268,
                52.53347
              ],
              [
                13.39888,
                52.53259
              ],
              [
                13.39839,
                52.53253
              ],
              [
                13.39812,
                52.53251
              ],
              [
                13.39616,
                52.53243
              ],
              [
                13.39579,
                52.5324
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.39163,
                52.53025
              ],
              [
                13.38797,
                52.52935
              ],
              [
                13.38763,
                52.52996
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38763,
                52.52996
              ],
              [
                13.38739,
                52.53039
              ],
              [
                13.38724,
                52.53036
              ],
              [
                13.38464,
                52.52929
              ],
              [
                13.38538,
                52.52871
              ],
              [
                13.38634,
                52.52792
              ],
              [
                13.38638,
                52.52779
              ],
              [
                13.38657,
                52.52763
              ],
              [
                13.38676,
                52.52741
              ],
              [
                13.38698,
                52.52713
              ],
              [
                13.38704,
                52.52701
              ],
              [
                13.38753,
                52.524
              ],
              [
                13.3877,
                52.52307
              ],
              [
                13.3878,
                52.52282
              ],
              [
                13.38788,
                52.52252
              ],
              [
                13.38802,
                52.52174
              ],
              [
                13.38519,
                52.52009
              ],
              [
                13.38539,
                52.5191
              ],
              [
                13.38548,
                52.51852
              ],
              [
                13.38042,
                52.51819
              ],
              [
                13.38071,
                52.5167
              ],
              [
                13.38076,
                52.51652
              ],
              [
                13.38084,
                52.51634
              ],
              [
                13.3821,
                52.51396
              ],
              [
                13.38055,
                52.51365
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.38055,
                52.51365
              ],
              [
                13.38229,
                52.514
              ],
              [
                13.38363,
                52.51429
              ],
              [
                13.3848,
                52.51445
              ],
              [
                13.38504,
                52.51358
              ],
              [
                13.39124,
                52.51397
              ],
              [
                13.3911,
                52.51488
              ],
              [
                13.39303,
                52.51499
              ],
              [
                13.39317,
                52.5141
              ],
              [
                13.39548,
                52.51419
              ],
              [
                13.39571,
                52.51421
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39571,
                52.51421
              ],
              [
                13.39695,
                52.51434
              ],
              [
                13.39674,
                52.51523
              ],
              [
                13.39742,
                52.51531
              ],
              [
                13.39873,
                52.51558
              ],
              [
                13.39846,
                52.51599
              ],
              [
                13.39825,
                52.51729
              ],
              [
                13.39805,
                52.51755
              ],
              [
                13.39892,
                52.51761
              ],
              [
                13.39917,
                52.51764
              ],
              [
                13.39964,
                52.51775
              ],
              [
                13.40009,
                52.51791
              ],
              [
                13.40034,
                52.51797
              ],
              [
                13.4021,
                52.51864
              ],
              [
                13.40288,
                52.51896
              ],
              [
                13.40375,
                52.51936
              ],
              [
                13.40498,
                52.52001
              ],
              [
                13.40463,
                52.5203
              ],
              [
                13.40311,
                52.52144
              ],
              [
                13.40442,
                52.52189
              ],
              [
                13.40448,
                52.52192
              ],
              [
                13.40451,
                52.52195
              ],
              [
                13.40473,
                52.52199
              ],
              [
                13.40504,
                52.52208
              ],
              [
                13.40572,
                52.52235
              ],
              [
                13.40687,
                52.52294
              ],
              [
                13.40693,
                52.52299
              ],
              [
                13.40706,
                52.52319
              ],
              [
                13.40738,
                52.52378
              ],
              [
                13.40787,
                52.52443
              ],
              [
                13.4079,
                52.52453
              ],
              [
                13.40938,
                52.52401
              ],
              [
                13.40962,
                52.52398
              ],
              [
                13.41001,
                52.52395
              ],
              [
                13.41072,
                52.52391
              ],
              [
                13.41215,
                52.52389
              ],
              [
                13.41233,
                52.52386
              ],
              [
                13.4131,
                52.5235
              ],
              [
                13.41288,
                52.52333
              ],
              [
                13.41475,
                52.52247
              ],
              [
                13.41496,
                52.52264
              ],
              [
                13.41523,
                52.52251
              ],
              [
                13.41633,
                52.52338
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41684,
                52.52351
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.41684,
                52.52351
              ],
              [
                13.41654,
                52.52364
              ],
              [
                13.41631,
                52.52346
              ],
              [
                13.4163,
                52.52344
              ],
              [
                13.41587,
                52.52363
              ],
              [
                13.41572,
                52.5235
              ],
              [
                13.41409,
                52.5242
              ],
              [
                13.41454,
                52.52461
              ],
              [
                13.41454,
                52.52466
              ],
              [
                13.41358,
                52.52508
              ],
              [
                13.41366,
                52.52514
              ],
              [
                13.41344,
                52.52525
              ],
              [
                13.4133,
                52.52514
              ],
              [
                13.41316,
                52.5252
              ],
              [
                13.41107,
                52.52585
              ],
              [
                13.41118,
                52.52606
              ],
              [
                13.41118,
                52.52616
              ],
              [
                13.41095,
                52.52664
              ],
              [
                13.41097,
                52.52678
              ],
              [
                13.41084,
                52.52706
              ],
              [
                13.41057,
                52.52747
              ],
              [
                13.41028,
                52.52809
              ],
              [
                13.41032,
                52.52821
              ],
              [
                13.4102,
                52.52847
              ],
              [
                13.40999,
                52.52875
              ],
              [
                13.40984,
                52.52905
              ],
              [
                13.40982,
                52.52914
              ],
              [
                13.40984,
                52.52926
              ],
              [
                13.4104,
                52.52998
              ],
              [
                13.4105,
                52.53001
              ],
              [
                13.41064,
                52.53016
              ],
              [
                13.41082,
                52.5303
              ],
              [
                13.41198,
                52.53107
              ],
              [
                13.4122,
                52.53128
              ],
              [
                13.41232,
                52.53143
              ],
              [
                13.41247,
                52.53192
              ],
              [
                13.41267,
                52.53245
              ],
              [
                13.41275,
                52.53259
              ],
              [
                13.41215,
                52.5327
              ],
              [
                13.40731,
                52.53463
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 2465,
        "vehicle_id": "vehicle-2",
        "waiting_time": 0
      },
      {
        "activities": [
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "distance": 0,
            "driving_time": 0,
            "end_date_time": null,
            "end_time": 1554804329,
            "load_after": [
              0
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "start",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.525851,
              "location_id": "13.393364_52.525851",
              "lon": 13.393364
            },
            "arr_date_time": null,
            "arr_time": 1554804743,
            "distance": 1884,
            "driving_time": 414,
            "end_date_time": null,
            "end_time": 1554804743,
            "id": "s-2",
            "load_after": [
              1
            ],
            "load_before": [
              0
            ],
            "location_id": "13.393364_52.525851",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 0
          },
          {
            "address": {
              "lat": 52.537338,
              "location_id": "13.375854_52.537338",
              "lon": 13.375854
            },
            "arr_date_time": null,
            "arr_time": 1554805251,
            "distance": 4205,
            "driving_time": 922,
            "end_date_time": null,
            "end_time": 1554805329,
            "id": "s-1",
            "load_after": [
              2
            ],
            "load_before": [
              1
            ],
            "location_id": "13.375854_52.537338",
            "preparation_time": 0,
            "type": "service",
            "waiting_time": 78
          },
          {
            "address": {
              "lat": 52.537,
              "location_id": "berlin",
              "lon": 13.406
            },
            "arr_date_time": null,
            "arr_time": 1554806036,
            "distance": 7376,
            "driving_time": 1629,
            "load_before": [
              2
            ],
            "location_id": "berlin",
            "preparation_time": 0,
            "type": "end",
            "waiting_time": 0
          }
        ],
        "completion_time": 1707,
        "distance": 7376,
        "points": [
          {
            "coordinates": [
              [
                13.40608,
                52.53701
              ],
              [
                13.40674,
                52.53571
              ],
              [
                13.40433,
                52.53313
              ],
              [
                13.40271,
                52.53149
              ],
              [
                13.40246,
                52.53121
              ],
              [
                13.40148,
                52.52999
              ],
              [
                13.40128,
                52.52993
              ],
              [
                13.40118,
                52.52988
              ],
              [
                13.40133,
                52.5296
              ],
              [
                13.40138,
                52.52951
              ],
              [
                13.40167,
                52.52914
              ],
              [
                13.40188,
                52.52895
              ],
              [
                13.398,
                52.52885
              ],
              [
                13.39289,
                52.52748
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39324,
                52.52575
              ],
              [
                13.39334,
                52.52573
              ],
              [
                13.39339,
                52.52584
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.39339,
                52.52584
              ],
              [
                13.3934,
                52.52599
              ],
              [
                13.39358,
                52.52628
              ],
              [
                13.39354,
                52.5264
              ],
              [
                13.39242,
                52.52823
              ],
              [
                13.39381,
                52.52852
              ],
              [
                13.38973,
                52.53173
              ],
              [
                13.38717,
                52.5315
              ],
              [
                13.38678,
                52.5315
              ],
              [
                13.38641,
                52.53147
              ],
              [
                13.38617,
                52.53143
              ],
              [
                13.38607,
                52.53155
              ],
              [
                13.38526,
                52.53225
              ],
              [
                13.38501,
                52.53252
              ],
              [
                13.38316,
                52.53418
              ],
              [
                13.38179,
                52.5355
              ],
              [
                13.38084,
                52.53523
              ],
              [
                13.38081,
                52.53531
              ],
              [
                13.3795,
                52.53677
              ],
              [
                13.37941,
                52.53682
              ],
              [
                13.37935,
                52.53683
              ],
              [
                13.37919,
                52.53682
              ],
              [
                13.37617,
                52.5361
              ],
              [
                13.37502,
                52.53698
              ],
              [
                13.37584,
                52.53734
              ]
            ],
            "type": "LineString"
          },
          {
            "coordinates": [
              [
                13.37584,
                52.53734
              ],
              [
                13.37566,
                52.53726
              ],
              [
                13.37515,
                52.53763
              ],
              [
                13.37644,
                52.53841
              ],
              [
                13.37807,
                52.53935
              ],
              [
                13.37946,
                52.5402
              ],
              [
                13.3796,
                52.54019
              ],
              [
                13.37984,
                52.54021
              ],
              [
                13.37988,
                52.54012
              ],
              [
                13.38062,
                52.53936
              ],
              [
                13.38169,
                52.53832
              ],
              [
                13.38236,
                52.5377
              ],
              [
                13.38363,
                52.53661
              ],
              [
                13.38492,
                52.53555
              ],
              [
                13.38613,
                52.53447
              ],
              [
                13.38757,
                52.53338
              ],
              [
                13.38791,
                52.53354
              ],
              [
                13.38812,
                52.53368
              ],
              [
                13.38833,
                52.53392
              ],
              [
                13.38977,
                52.53518
              ],
              [
                13.39003,
                52.53539
              ],
              [
                13.39256,
                52.53701
              ],
              [
                13.39316,
                52.53739
              ],
              [
                13.39327,
                52.53744
              ],
              [
                13.3936,
                52.53757
              ],
              [
                13.40155,
                52.53982
              ],
              [
                13.40357,
                52.53715
              ],
              [
                13.40372,
                52.53719
              ],
              [
                13.40465,
                52.53727
              ],
              [
                13.4048,
                52.53726
              ],
              [
                13.4059,
                52.53736
              ],
              [
                13.40608,
                52.53701
              ]
            ],
            "type": "LineString"
          }
        ],
        "preparation_time": 0,
        "service_duration": 0,
        "transport_time": 1629,
        "vehicle_id": "vehicle-1",
        "waiting_time": 78
      }
    ],
    "service_duration": 0,
    "time": 4094,
    "transport_time": 4094,
    "unassigned": {
      "breaks": [],
      "details": [],
      "services": [],
      "shipments": []
    },
    "waiting_time": 78
  },
  "status": "finished",
  "waiting_time_in_queue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyrights|[string]|false|none|none|
|processing_time|integer(int64)|false|none|Processing time in ms. If job is still waiting in queue, processing_time is 0|
|solution|[Solution](#schemasolution)|false|none|Only available if status field indicates `finished`.|
|status|string|false|none|Indicates the current status of the job|
|waiting_time_in_queue|integer(int64)|false|none|Waiting time in ms|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting_in_queue|
|status|processing|
|status|finished|

<h2 id="tocS_ResponseAddress">ResponseAddress</h2>
<!-- backwards compatibility -->
<a id="schemaresponseaddress"></a>
<a id="schema_ResponseAddress"></a>
<a id="tocSresponseaddress"></a>
<a id="tocsresponseaddress"></a>

```json
{
  "lat": 51.512665,
  "location_id": "550e8400-e29b-11d4-a716-446655440000",
  "lon": -0.092869,
  "name": "Queens Victoria Street 70, Second Floor, Flat 245",
  "snapped_waypoint": {
    "lat": 51.512665,
    "lon": -0.092869
  },
  "street_hint": "Queens Victoria Street 70"
}
```

Address of activity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|Latitude of location.|
|location_id|string|false|none|Specifies the id of the location.|
|lon|number(double)|false|none|Longitude of location.|
|name|string|false|none|Name of location.|
|snapped_waypoint|[SnappedWaypoint](#schemasnappedwaypoint)|false|none|Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).|
|street_hint|string|false|none|Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|

<h2 id="tocS_ResponseInfo">ResponseInfo</h2>
<!-- backwards compatibility -->
<a id="schemaresponseinfo"></a>
<a id="schema_ResponseInfo"></a>
<a id="tocSresponseinfo"></a>
<a id="tocsresponseinfo"></a>

```json
{
  "copyrights": [
    "string"
  ],
  "took": 0
}
```

Additional information for your request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyrights|[string]|false|none|Attribution according to our documentation is necessary if no white-label option included.|
|took|number(double)|false|none|none|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "activities": [
    {
      "address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "distance": 0,
      "driving_time": 0,
      "end_date_time": "2019-02-25T20:20+01:00",
      "end_time": 1551122400,
      "load_after": [
        0
      ],
      "location_id": "berlin",
      "preparation_time": 0,
      "type": "start",
      "waiting_time": 0
    },
    {
      "address": {
        "lat": 52.527094,
        "location_id": "13.408642_52.527094",
        "lon": 13.408642
      },
      "arr_date_time": "2019-02-25T20:25:13+01:00",
      "arr_time": 1551122713,
      "distance": 1777,
      "driving_time": 313,
      "end_date_time": "2019-02-25T20:25:13+01:00",
      "end_time": 1551122713,
      "id": "berlin-2",
      "load_after": [
        0
      ],
      "load_before": [
        0
      ],
      "location_id": "13.408642_52.527094",
      "preparation_time": 0,
      "type": "service",
      "waiting_time": 0
    },
    {
      "address": {
        "lat": 52.527303,
        "location_id": "13.398170_52.527303",
        "lon": 13.39817
      },
      "arr_date_time": "2019-02-25T20:27:44+01:00",
      "arr_time": 1551122864,
      "distance": 2562,
      "driving_time": 464,
      "end_date_time": "2019-02-25T20:27:44+01:00",
      "end_time": 1551122864,
      "id": "berlin-1",
      "load_after": [
        0
      ],
      "load_before": [
        0
      ],
      "location_id": "13.398170_52.527303",
      "preparation_time": 0,
      "type": "service",
      "waiting_time": 0
    },
    {
      "address": {
        "lat": 52.537,
        "location_id": "berlin",
        "lon": 13.406
      },
      "arr_date_time": "2019-02-25T20:33:09+01:00",
      "arr_time": 1551123189,
      "distance": 4334,
      "driving_time": 789,
      "load_before": [
        0
      ],
      "location_id": "berlin",
      "preparation_time": 0,
      "type": "end",
      "waiting_time": 0
    }
  ],
  "completion_time": 1800,
  "distance": 10000,
  "points": [
    {
      "coordinates": [
        [
          13.4061,
          52.53701
        ],
        [
          13.40643,
          52.53634
        ],
        [
          13.4067,
          52.53573
        ],
        [
          13.40722,
          52.53479
        ],
        [
          13.40729,
          52.53468
        ],
        [
          13.40735,
          52.53463
        ],
        [
          13.41205,
          52.53275
        ],
        [
          13.41245,
          52.53264
        ],
        [
          13.41218,
          52.53166
        ],
        [
          13.41205,
          52.53139
        ],
        [
          13.41177,
          52.53112
        ],
        [
          13.41072,
          52.53033
        ],
        [
          13.41049,
          52.53014
        ],
        [
          13.4098,
          52.52928
        ],
        [
          13.40937,
          52.5287
        ],
        [
          13.40994,
          52.52858
        ],
        [
          13.41032,
          52.52782
        ],
        [
          13.41054,
          52.52745
        ],
        [
          13.41097,
          52.52656
        ],
        [
          13.41107,
          52.5265
        ],
        [
          13.41119,
          52.52614
        ],
        [
          13.41119,
          52.52604
        ],
        [
          13.41109,
          52.52587
        ],
        [
          13.40971,
          52.52631
        ],
        [
          13.40981,
          52.52659
        ],
        [
          13.40891,
          52.52683
        ],
        [
          13.40852,
          52.52695
        ]
      ],
      "type": "LineString"
    },
    {
      "coordinates": [
        [
          13.40852,
          52.52695
        ],
        [
          13.4081,
          52.52706
        ],
        [
          13.40802,
          52.52696
        ],
        [
          13.40469,
          52.52758
        ],
        [
          13.4033,
          52.52781
        ],
        [
          13.40331,
          52.52767
        ],
        [
          13.40298,
          52.52763
        ],
        [
          13.40261,
          52.52807
        ],
        [
          13.39818,
          52.52726
        ]
      ],
      "type": "LineString"
    },
    {
      "coordinates": [
        [
          13.39818,
          52.52726
        ],
        [
          13.39808,
          52.52725
        ],
        [
          13.39785,
          52.52768
        ],
        [
          13.39727,
          52.52866
        ],
        [
          13.39762,
          52.52876
        ],
        [
          13.3976,
          52.52914
        ],
        [
          13.39756,
          52.52943
        ],
        [
          13.39597,
          52.53243
        ],
        [
          13.39777,
          52.5325
        ],
        [
          13.39843,
          52.53254
        ],
        [
          13.39891,
          52.53259
        ],
        [
          13.40288,
          52.53354
        ],
        [
          13.40297,
          52.53359
        ],
        [
          13.40338,
          52.534
        ],
        [
          13.40466,
          52.53419
        ],
        [
          13.40433,
          52.53503
        ],
        [
          13.40443,
          52.53511
        ],
        [
          13.40541,
          52.53611
        ],
        [
          13.40547,
          52.53615
        ],
        [
          13.40643,
          52.53634
        ],
        [
          13.4061,
          52.53701
        ]
      ],
      "type": "LineString"
    }
  ],
  "preparation_time": 0,
  "service_duration": 0,
  "transport_time": 1800,
  "vehicle_id": "driver-stefan",
  "waiting_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[Activity](#schemaactivity)]|false|none|Array of activities|
|completion_time|integer(int64)|false|none|Completion time of route in seconds|
|distance|integer(int64)|false|none|Distance of route in meter|
|points|[[RoutePoint](#schemaroutepoint)]|false|none|Array of route planning points|
|preparation_time|integer(int64)|false|none|Preparation time of route in seconds|
|service_duration|integer(int64)|false|none|Service duration of route in seconds|
|transport_time|integer(int64)|false|none|Transport time of route in seconds|
|vehicle_id|string|false|none|Id of vehicle that operates route|
|waiting_time|integer(int64)|false|none|Waiting time of route in seconds|

<h2 id="tocS_RoutePoint">RoutePoint</h2>
<!-- backwards compatibility -->
<a id="schemaroutepoint"></a>
<a id="schema_RoutePoint"></a>
<a id="tocSroutepoint"></a>
<a id="tocsroutepoint"></a>

```json
{
  "coordinates": [
    {}
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[object]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_RouteRequest">RouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemarouterequest"></a>
<a id="schema_RouteRequest"></a>
<a id="tocSrouterequest"></a>
<a id="tocsrouterequest"></a>

```json
{
  "calc_points": true,
  "details": [
    "road_class",
    "surface"
  ],
  "instructions": true,
  "locale": "en",
  "point_hints": [
    "Lindenschmitstraße",
    "Thalkirchener Str."
  ],
  "points": [
    [
      11.539421,
      48.118477
    ],
    [
      11.559023,
      48.12228
    ]
  ],
  "points_encoded": false,
  "snap_preventions": [
    "motorway",
    "ferry",
    "tunnel"
  ],
  "vehicle": "bike"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Rather than looking for the shortest or fastest path, this lets you solve two different problems related to routing:<br>With `round_trip`, the route will get you back to where you started. This is meant for fun (think of<br>a bike trip), so we will add some randomness. This requires `ch.disable=true`.<br>With `alternative_route`, we give you not one but several routes that are close to optimal, but<br>not too similar to each other. You can control both of these features with additional parameters, see below.<br>|
|alternative_route.max_paths|integer(int32)|false|none|If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.<br>|
|alternative_route.max_share_factor|number|false|none|If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.<br>|
|alternative_route.max_weight_factor|number|false|none|If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.<br>|
|avoid|string|false|none|Specify which road classes and environments you would like to avoid.<br>Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.<br>Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.<br>|
|block_area|string|false|none|Block road access via a point with the format `latitude,longitude`<br>or an area defined by a circle `lat,lon,radius` or a rectangle `lat1,lon1,lat2,lon2`.<br>Separate several values with `;`. Requires `ch.disable=true`.<br>|
|calc_points|boolean|false|none|If the points for the route should be calculated at all.<br>|
|ch.disable|boolean|false|none|Use this parameter in combination with one or more parameters from below.<br>|
|curbsides|[string]|false|none|Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.|
|debug|boolean|false|none|If `true`, the output will be formatted.<br>|
|details|[string]|false|none|Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,<br>`time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).<br>|
|elevation|boolean|false|none|If `true`, a third coordinate, the altitude, is included with all positions in the response.<br>This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their<br>encodings. Unless you switch off the `points_encoded` parameter, you need special code on the<br>client side that can handle three-dimensional coordinates.<br>A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.<br>|
|heading_penalty|integer(int32)|false|none|Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.<br>|
|headings|[integer(int32)]|false|none|Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.<br>In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.<br>This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.<br>|
|instructions|boolean|false|none|If instructions should be calculated and returned<br>|
|locale|string|false|none|The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.<br>|
|optimize|string|false|none|Normally, the calculated route will visit the points in the order you specified them.<br>If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.<br>Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.<br>|
|pass_through|boolean|false|none|If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.<br>|
|point_hints|[string]|false|none|Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|
|points|[[number(double)]]|false|none|The points for the route in an array of `[longitude,latitude]`. For instance, if you want to calculate a route from point A to B to C<br>then you specify `points: [ [A_longitude, A_latitude], [B_longitude, B_latitude], [C_longitude, C_latitude]]<br>|
|points_encoded|boolean|false|none|Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact<br>but requires special client code to unpack. (We provide it in our JavaScript client library!)<br>Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.<br>See the description of the response format for more information.<br>|
|round_trip.distance|integer(int32)|false|none|If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.<br>|
|round_trip.seed|integer(int64)|false|none|If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.<br>|
|snap_preventions|[string]|false|none|Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`|
|vehicle|object|false|none|none|
|weighting|string|false|none|Determines the way the ''best'' route is calculated. Default is `fastest`. Other options are `shortest` (e.g. for `vehicle=foot` or `bike`) and `short_fastest` which finds a reasonable balance between `shortest` and `fastest`. Requires `ch.disable=true`.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|round_trip|
|algorithm|alternative_route|
|curbsides|any|
|curbsides|right|
|curbsides|left|

<h2 id="tocS_RouteResponse">RouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemarouteresponse"></a>
<a id="schema_RouteResponse"></a>
<a id="tocSrouteresponse"></a>
<a id="tocsrouteresponse"></a>

```json
{
  "hints": {
    "visited_nodes.average": 58,
    "visited_nodes.sum": 58
  },
  "info": {
    "copyrights": [
      "GraphHopper",
      "OpenStreetMap contributors"
    ],
    "took": 2
  },
  "paths": [
    {
      "ascend": 6.3294677734375,
      "bbox": [
        11.539424,
        48.118343,
        11.558901,
        48.122364
      ],
      "descend": 25.0579833984375,
      "details": {},
      "distance": 1791.011,
      "instructions": [
        {
          "distance": 672.954,
          "heading": 89.04,
          "interval": [
            0,
            6
          ],
          "sign": 0,
          "street_name": "Lindenschmitstraße",
          "text": "Continue onto Lindenschmitstraße",
          "time": 144703
        },
        {
          "distance": 107.145,
          "interval": [
            6,
            7
          ],
          "sign": -2,
          "street_name": "",
          "text": "Turn left",
          "time": 22675
        },
        {
          "distance": 140.169,
          "interval": [
            7,
            10
          ],
          "sign": 2,
          "street_name": "Oberländerstraße",
          "text": "Turn right onto Oberländerstraße",
          "time": 28032
        },
        {
          "distance": 360.232,
          "interval": [
            10,
            18
          ],
          "sign": 1,
          "street_name": "",
          "text": "Turn slight right",
          "time": 72677
        },
        {
          "distance": 177.621,
          "interval": [
            18,
            20
          ],
          "sign": 2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn right onto Thalkirchner Straße",
          "time": 35524
        },
        {
          "distance": 332.89,
          "interval": [
            20,
            24
          ],
          "sign": -2,
          "street_name": "Thalkirchner Straße",
          "text": "Turn left onto Thalkirchner Straße",
          "time": 67351
        },
        {
          "distance": 0,
          "interval": [
            24,
            24
          ],
          "last_heading": 45.67046584987792,
          "sign": 4,
          "street_name": "",
          "text": "Arrive at destination",
          "time": 0
        }
      ],
      "legs": [],
      "points": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.540387,
            48.118368
          ],
          [
            11.54061,
            48.118356
          ],
          [
            11.541941,
            48.118409
          ],
          [
            11.543696,
            48.118344
          ],
          [
            11.547167,
            48.118343
          ],
          [
            11.548478,
            48.118366
          ],
          [
            11.548487,
            48.119329
          ],
          [
            11.548807,
            48.119328
          ],
          [
            11.549408,
            48.119366
          ],
          [
            11.550349,
            48.119508
          ],
          [
            11.550441,
            48.119473
          ],
          [
            11.551109,
            48.119467
          ],
          [
            11.551553,
            48.119445
          ],
          [
            11.551748,
            48.119398
          ],
          [
            11.552087,
            48.119475
          ],
          [
            11.552236,
            48.119542
          ],
          [
            11.552353,
            48.119635
          ],
          [
            11.553853,
            48.121136
          ],
          [
            11.555448,
            48.12039
          ],
          [
            11.555797,
            48.120206
          ],
          [
            11.55632,
            48.120592
          ],
          [
            11.556716,
            48.120919
          ],
          [
            11.557326,
            48.121345
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "points_encoded": false,
      "snapped_waypoints": {
        "coordinates": [
          [
            11.539424,
            48.118352
          ],
          [
            11.558901,
            48.122364
          ]
        ],
        "type": "LineString"
      },
      "time": 370962,
      "transfers": 0,
      "weight": 307.852443
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[ResponseInfo](#schemaresponseinfo)|false|none|Additional information for your request|
|paths|[[RouteResponsePath](#schemarouteresponsepath)]|false|none|none|

<h2 id="tocS_RouteResponsePath">RouteResponsePath</h2>
<!-- backwards compatibility -->
<a id="schemarouteresponsepath"></a>
<a id="schema_RouteResponsePath"></a>
<a id="tocSrouteresponsepath"></a>
<a id="tocsrouteresponsepath"></a>

```json
{
  "ascend": 0,
  "bbox": [
    0
  ],
  "descend": 0,
  "details": {},
  "distance": 0,
  "instructions": [
    {
      "distance": 0,
      "exit_number": 0,
      "interval": [
        0
      ],
      "sign": 0,
      "street_name": "string",
      "text": "string",
      "time": 0,
      "turn_angle": 0
    }
  ],
  "points": {},
  "points_encoded": true,
  "points_order": [
    0
  ],
  "snapped_waypoints": {},
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ascend|number(double)|false|none|The total ascent, in meters.<br>|
|bbox|[number(double)]|false|none|The bounding box of the route geometry. Format: `[minLon, minLat, maxLon, maxLat]`.<br>|
|descend|number(double)|false|none|The total descent, in meters.<br>|
|details|object|false|none|Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.<br>In this example, the route uses two streets: The first, Frankfurter Straße, is<br>used between `points[0]` and `points[2]`, and the second, Zollweg, between `points[2]` and `points[6]`.<br>See [here](https://discuss.graphhopper.com/t/2539) for discussion.<br>|
|distance|number(double)|false|none|The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).<br>|
|instructions|[object]|false|none|The instructions for this route. This feature is under active development, and our instructions can sometimes be misleading,<br>so be mindful when using them for navigation.<br>|
|points|object|false|none|none|
|points_encoded|boolean|false|none|Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays<br>of coordinates. See the field description for more information on the two formats.<br>|
|points_order|[integer]|false|none|An array of indices (zero-based), specifiying the order in which the input points are visited.<br>Only present if the `optimize` parameter was used.<br>|
|snapped_waypoints|object|false|none|none|
|time|integer(int64)|false|none|The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).<br>|

<h2 id="tocS_Routing">Routing</h2>
<!-- backwards compatibility -->
<a id="schemarouting"></a>
<a id="schema_Routing"></a>
<a id="tocSrouting"></a>
<a id="tocsrouting"></a>

```json
{
  "calc_points": false,
  "consider_traffic": false,
  "curbside_strictness": "soft",
  "fail_fast": true,
  "network_data_provider": "openstreetmap",
  "return_snapped_waypoints": false,
  "snap_preventions": [
    "motorway",
    "trunk",
    "bridge",
    "tunnel",
    "ferry"
  ]
}
```

This contains all routing specific configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calc_points|boolean|false|none|It lets you specify whether the API should provide you with route geometries for vehicle routes or not. Thus, you do not need to do extra routing to get the polyline for each route.|
|consider_traffic|boolean|false|none|indicates whether historical traffic information should be considered|
|curbside_strictness|string|false|none|In some cases curbside constraints cannot be fulfilled. For example in one-way streets you cannot arrive at a building that is on the left side of the street such that the building is to the right of you (unless you drove the one-way street the wrong/illegal way). You can set the `curbside_strictness` to `soft` to ignore the curbside constraint in such cases or set it to `strict` to get an error response instead. You can also set it to `ignore` to ignore all curbside constraints (this is useful to compare the results with and without constraints without modifying every single address).|
|fail_fast|boolean|false|none|indicates whether matrix calculation should fail fast when points cannot be connected|
|network_data_provider|string|false|none|specifies the data provider, read more about it [here](#section/Map-Data-and-Routing-Profiles).|
|return_snapped_waypoints|boolean|false|none|Indicates whether a solution includes snapped waypoints. In contrary to the address coordinate a snapped waypoint is the access point to the (road) network.|
|snap_preventions|[string]|false|none|Prevents snapping locations to road links of specified road types, e.g. to motorway.|

#### Enumerated Values

|Property|Value|
|---|---|
|curbside_strictness|ignore|
|curbside_strictness|soft|
|curbside_strictness|strict|
|network_data_provider|openstreetmap|
|network_data_provider|tomtom|
|snap_preventions|motorway|
|snap_preventions|trunk|
|snap_preventions|bridge|
|snap_preventions|ford|
|snap_preventions|tunnel|
|snap_preventions|ferry|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "address": {
    "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "street_hint": "Queens Victoria Street 70"
  },
  "allowed_vehicles": [
    "technician_peter",
    "technician_stefan"
  ],
  "disallowed_vehicles": [
    "driver-A",
    "driver-B"
  ],
  "duration": 1800,
  "group": "group-A",
  "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
  "max_time_in_vehicle": 900,
  "name": "delivery pizza",
  "preparation_time": 300,
  "priority": 1,
  "required_skills": [
    "drilling_machine",
    "screw_driver"
  ],
  "size": [
    30,
    5,
    1
  ],
  "time_windows": [
    {
      "earliest": 32400,
      "latest": 36000
    },
    {
      "earliest": 50400,
      "latest": 54000
    }
  ],
  "type": "delivery"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|allowed_vehicles|[string]|false|none|Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this service can only be conducted EITHER by `technician_peter` OR `technician_stefan` specify this as follows: `["technician_peter","technician_stefan"]`.|
|disallowed_vehicles|[string]|false|none|Specifies an array of disallowed vehicles, i.e. array of vehicle ids.|
|duration|integer(int64)|false|none|Specifies the duration of the service in seconds, i.e. how long it takes at the customer site.|
|group|string|false|none|Group this service belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.|
|id|string|true|none|Specifies the id of the service. Ids need to be unique so there must not be two services/shipments with the same id.|
|max_time_in_vehicle|integer(int64)|false|none|Specifies the maximum time in seconds a delivery can stay in the vehicle. Currently, it only works with services of "type":"delivery".|
|name|string|false|none|Meaningful name for service, e.g. `"deliver pizza"`.|
|preparation_time|integer(int64)|false|none|Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.|
|priority|integer(int32)|false|none|Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.|
|required_skills|[string]|false|none|Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this service needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.|
|size|[integer(int32)]|false|none|Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.|
|time_windows|[[TimeWindow](#schematimewindow)]|false|none|Specifies an array of time window objects (see time_window object below). Specify the time either with the recommended Unix time stamp (the number of seconds since 1970-01-01) or you can also count the seconds relative to Monday morning 00:00 and define the whole week in seconds. For example, Monday 9am is then represented by 9hour * 3600sec/hour = 32400. In turn, Wednesday 1pm corresponds to 2day * 24hour/day * 3600sec/hour + 1day * 13hour/day * 3600sec/hour = 219600. See this tutorial for more information.|
|type|string|false|none|Specifies type of service. This makes a difference if items are loaded or unloaded, i.e. if one of the size dimensions > 0. If it is specified as `service` or `pickup`, items are loaded and will stay in the vehicle for the rest of the route (and thus consumes capacity for the rest of the route). If it is a `delivery`, items are implicitly loaded at the beginning of the route and will stay in the route until delivery (and thus releases capacity for the rest of the route).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|service|
|type|pickup|
|type|delivery|

<h2 id="tocS_Shipment">Shipment</h2>
<!-- backwards compatibility -->
<a id="schemashipment"></a>
<a id="schema_Shipment"></a>
<a id="tocSshipment"></a>
<a id="tocsshipment"></a>

```json
{
  "allowed_vehicles": [
    "technician_peter",
    "technician_stefan"
  ],
  "delivery": {
    "address": {
      "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
      "lat": 51.512665,
      "location_id": "550e8400-e29b-11d4-a716-446655440000",
      "lon": -0.092869,
      "name": "Queens Victoria Street 70, Second Floor, Flat 245",
      "street_hint": "Queens Victoria Street 70"
    },
    "duration": 1800,
    "group": "ASAP",
    "preparation_time": 300,
    "time_windows": [
      {
        "earliest": 32400,
        "latest": 36000
      },
      {
        "earliest": 50400,
        "latest": 54000
      }
    ]
  },
  "disallowed_vehicles": [
    "driver-A",
    "driver-B"
  ],
  "id": "7fe77504-7df8-4497-843c-02d70b6490ce",
  "max_time_in_vehicle": 1800,
  "name": "pickup and deliver pizza to Peter",
  "pickup": {
    "address": {
      "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
      "lat": 51.512665,
      "location_id": "550e8400-e29b-11d4-a716-446655440000",
      "lon": -0.092869,
      "name": "Queens Victoria Street 70, Second Floor, Flat 245",
      "street_hint": "Queens Victoria Street 70"
    },
    "duration": 1800,
    "group": "ASAP",
    "preparation_time": 300,
    "time_windows": [
      {
        "earliest": 32400,
        "latest": 36000
      },
      {
        "earliest": 50400,
        "latest": 54000
      }
    ]
  },
  "priority": 1,
  "required_skills": [
    "drilling_machine",
    "screw_driver"
  ],
  "size": [
    3
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_vehicles|[string]|false|none|Specifies an array of allowed vehicles, i.e. array of vehicle ids. For example, if this shipment can only be conducted EITHER by "technician_peter" OR "technician_stefan" specify this as follows: ["technician_peter","technician_stefan"].|
|delivery|[Stop](#schemastop)|true|none|none|
|disallowed_vehicles|[string]|false|none|Specifies an array of disallowed vehicles, i.e. array of vehicle ids.|
|id|string|true|none|Specifies the id of the shipment. Ids need to be unique so there must not be two services/shipments with the same id.|
|max_time_in_vehicle|integer(int64)|false|none|Specifies the maximum time in seconds a shipment can stay in the vehicle.|
|name|string|false|none|Meaningful name for shipment, e.g. "pickup and deliver pizza to Peter".|
|pickup|[Stop](#schemastop)|true|none|none|
|priority|integer(int32)|false|none|Specifies the priority. Can be 1 = high priority to 10 = low priority. Often there are more services/shipments than the available vehicle fleet can handle. Then you can set priorities to differentiate high priority tasks from those that could be left unassigned. I.e. the lower the priority the earlier these tasks are omitted in the solution.|
|required_skills|[string]|false|none|Specifies an array of required skills, i.e. array of string (not case sensitive). For example, if this shipment needs to be conducted by a technician having a `drilling_machine` and a `screw_driver` then specify the array as follows: `["drilling_machine","screw_driver"]`. This means that the service can only be done by a vehicle (technician) that has the skills `drilling_machine` AND `screw_driver` in its skill array. Otherwise it remains unassigned.|
|size|[integer(int32)]|false|none|Size can have multiple dimensions and should be in line with the capacity dimension array of the vehicle type. For example, if the item that needs to be delivered has two size dimension, volume and weight, then specify it as follow [ 20, 5 ] assuming a volume of 20 and a weight of 5.|

<h2 id="tocS_SnappedWaypoint">SnappedWaypoint</h2>
<!-- backwards compatibility -->
<a id="schemasnappedwaypoint"></a>
<a id="schema_SnappedWaypoint"></a>
<a id="tocSsnappedwaypoint"></a>
<a id="tocssnappedwaypoint"></a>

```json
{
  "lat": 51.512665,
  "lon": -0.092869
}
```

Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number(double)|false|none|Latitude of location.|
|lon|number(double)|false|none|Longitude of location.|

<h2 id="tocS_Solution">Solution</h2>
<!-- backwards compatibility -->
<a id="schemasolution"></a>
<a id="schema_Solution"></a>
<a id="tocSsolution"></a>
<a id="tocssolution"></a>

```json
{
  "completion_time": 12000,
  "costs": 0,
  "distance": 1200,
  "max_operation_time": 4000,
  "no_unassigned": 1,
  "no_vehicles": 10,
  "preparation_time": 0,
  "routes": [
    {
      "activities": [
        {
          "address": {
            "lat": 52.537,
            "location_id": "berlin",
            "lon": 13.406
          },
          "distance": 0,
          "driving_time": 0,
          "end_date_time": "2019-02-25T20:20+01:00",
          "end_time": 1551122400,
          "load_after": [
            0
          ],
          "location_id": "berlin",
          "preparation_time": 0,
          "type": "start",
          "waiting_time": 0
        },
        {
          "address": {
            "lat": 52.527094,
            "location_id": "13.408642_52.527094",
            "lon": 13.408642
          },
          "arr_date_time": "2019-02-25T20:25:13+01:00",
          "arr_time": 1551122713,
          "distance": 1777,
          "driving_time": 313,
          "end_date_time": "2019-02-25T20:25:13+01:00",
          "end_time": 1551122713,
          "id": "berlin-2",
          "load_after": [
            0
          ],
          "load_before": [
            0
          ],
          "location_id": "13.408642_52.527094",
          "preparation_time": 0,
          "type": "service",
          "waiting_time": 0
        },
        {
          "address": {
            "lat": 52.527303,
            "location_id": "13.398170_52.527303",
            "lon": 13.39817
          },
          "arr_date_time": "2019-02-25T20:27:44+01:00",
          "arr_time": 1551122864,
          "distance": 2562,
          "driving_time": 464,
          "end_date_time": "2019-02-25T20:27:44+01:00",
          "end_time": 1551122864,
          "id": "berlin-1",
          "load_after": [
            0
          ],
          "load_before": [
            0
          ],
          "location_id": "13.398170_52.527303",
          "preparation_time": 0,
          "type": "service",
          "waiting_time": 0
        },
        {
          "address": {
            "lat": 52.537,
            "location_id": "berlin",
            "lon": 13.406
          },
          "arr_date_time": "2019-02-25T20:33:09+01:00",
          "arr_time": 1551123189,
          "distance": 4334,
          "driving_time": 789,
          "load_before": [
            0
          ],
          "location_id": "berlin",
          "preparation_time": 0,
          "type": "end",
          "waiting_time": 0
        }
      ],
      "completion_time": 1800,
      "distance": 10000,
      "points": [
        {
          "coordinates": [
            [
              13.4061,
              52.53701
            ],
            [
              13.40643,
              52.53634
            ],
            [
              13.4067,
              52.53573
            ],
            [
              13.40722,
              52.53479
            ],
            [
              13.40729,
              52.53468
            ],
            [
              13.40735,
              52.53463
            ],
            [
              13.41205,
              52.53275
            ],
            [
              13.41245,
              52.53264
            ],
            [
              13.41218,
              52.53166
            ],
            [
              13.41205,
              52.53139
            ],
            [
              13.41177,
              52.53112
            ],
            [
              13.41072,
              52.53033
            ],
            [
              13.41049,
              52.53014
            ],
            [
              13.4098,
              52.52928
            ],
            [
              13.40937,
              52.5287
            ],
            [
              13.40994,
              52.52858
            ],
            [
              13.41032,
              52.52782
            ],
            [
              13.41054,
              52.52745
            ],
            [
              13.41097,
              52.52656
            ],
            [
              13.41107,
              52.5265
            ],
            [
              13.41119,
              52.52614
            ],
            [
              13.41119,
              52.52604
            ],
            [
              13.41109,
              52.52587
            ],
            [
              13.40971,
              52.52631
            ],
            [
              13.40981,
              52.52659
            ],
            [
              13.40891,
              52.52683
            ],
            [
              13.40852,
              52.52695
            ]
          ],
          "type": "LineString"
        },
        {
          "coordinates": [
            [
              13.40852,
              52.52695
            ],
            [
              13.4081,
              52.52706
            ],
            [
              13.40802,
              52.52696
            ],
            [
              13.40469,
              52.52758
            ],
            [
              13.4033,
              52.52781
            ],
            [
              13.40331,
              52.52767
            ],
            [
              13.40298,
              52.52763
            ],
            [
              13.40261,
              52.52807
            ],
            [
              13.39818,
              52.52726
            ]
          ],
          "type": "LineString"
        },
        {
          "coordinates": [
            [
              13.39818,
              52.52726
            ],
            [
              13.39808,
              52.52725
            ],
            [
              13.39785,
              52.52768
            ],
            [
              13.39727,
              52.52866
            ],
            [
              13.39762,
              52.52876
            ],
            [
              13.3976,
              52.52914
            ],
            [
              13.39756,
              52.52943
            ],
            [
              13.39597,
              52.53243
            ],
            [
              13.39777,
              52.5325
            ],
            [
              13.39843,
              52.53254
            ],
            [
              13.39891,
              52.53259
            ],
            [
              13.40288,
              52.53354
            ],
            [
              13.40297,
              52.53359
            ],
            [
              13.40338,
              52.534
            ],
            [
              13.40466,
              52.53419
            ],
            [
              13.40433,
              52.53503
            ],
            [
              13.40443,
              52.53511
            ],
            [
              13.40541,
              52.53611
            ],
            [
              13.40547,
              52.53615
            ],
            [
              13.40643,
              52.53634
            ],
            [
              13.4061,
              52.53701
            ]
          ],
          "type": "LineString"
        }
      ],
      "preparation_time": 0,
      "service_duration": 0,
      "transport_time": 1800,
      "vehicle_id": "driver-stefan",
      "waiting_time": 0
    }
  ],
  "service_duration": 1200,
  "time": 0,
  "transport_time": 12000,
  "unassigned": {
    "breaks": [
      "string"
    ],
    "details": [
      {
        "code": 3,
        "id": "service-1",
        "reason": "does not fit into any vehicle due to capacity"
      },
      {
        "code": 27,
        "id": "service-2",
        "reason": "could not be assigned due to max job constraint"
      },
      {
        "code": 2,
        "id": "shipment-5",
        "reason": "cannot be visited within time window"
      }
    ],
    "services": [
      "service-1",
      "service-3"
    ],
    "shipments": [
      "shipment-5"
    ]
  },
  "waiting_time": 200
}
```

Only available if status field indicates `finished`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completion_time|integer(int64)|false|none|Overall completion time in seconds, i.e. the sum of each routes/drivers operation time.|
|costs|integer(int32)|false|none|**Deprecated.**|
|distance|integer(int32)|false|none|Overall distance travelled in meter, i.e. the sum of each route's transport distance|
|max_operation_time|integer(int64)|false|none|Operation time of longest route in seconds.|
|no_unassigned|integer(int32)|false|none|Number of jobs that could not be assigned to final solution.|
|no_vehicles|integer(int32)|false|none|Number of employed vehicles.|
|preparation_time|integer(int64)|false|none|Overall preparation time in seconds.|
|routes|[[Route](#schemaroute)]|false|none|An array of routes|
|service_duration|integer(int64)|false|none|Overall service time in seconds.|
|time|integer(int64)|false|none|**Deprecated.** Use `transport_time` instead.|
|transport_time|integer(int64)|false|none|Overall time travelled in seconds, i.e. the sum of each route's transport time.|
|unassigned|object|false|none|none|
|waiting_time|integer(int64)|false|none|Overall waiting time in seconds.|

<h2 id="tocS_Stop">Stop</h2>
<!-- backwards compatibility -->
<a id="schemastop"></a>
<a id="schema_Stop"></a>
<a id="tocSstop"></a>
<a id="tocsstop"></a>

```json
{
  "address": {
    "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "street_hint": "Queens Victoria Street 70"
  },
  "duration": 1800,
  "group": "ASAP",
  "preparation_time": 300,
  "time_windows": [
    {
      "earliest": 32400,
      "latest": 36000
    },
    {
      "earliest": 50400,
      "latest": 54000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|Specifies pickup or delivery address.|
|duration|integer(int64)|false|none|Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.|
|group|string|false|none|Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.|
|preparation_time|integer(int64)|false|none|Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.|
|time_windows|[[TimeWindow](#schematimewindow)]|false|none|Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds).|

<h2 id="tocS_SymmetricalMatrixRequest">SymmetricalMatrixRequest</h2>
<!-- backwards compatibility -->
<a id="schemasymmetricalmatrixrequest"></a>
<a id="schema_SymmetricalMatrixRequest"></a>
<a id="tocSsymmetricalmatrixrequest"></a>
<a id="tocssymmetricalmatrixrequest"></a>

```json
{
  "out_arrays": [
    "weights",
    "times",
    "distances"
  ],
  "point_hints": [
    "Copenhagen Street",
    "Richmond Avenue",
    "White Lion Street"
  ],
  "points": [
    [
      -0.11379003524780275,
      51.53664617804063
    ],
    [
      -0.10866165161132814,
      51.538621486960956
    ],
    [
      -0.11059284210205078,
      51.53245503603458
    ]
  ],
  "vehicle": "car"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|curbsides|[string]|false|none|Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.|
|fail_fast|boolean|false|none|Specifies whether or not the matrix calculation should return with an error as soon as possible in case some points cannot be found or some points are not connected. If set to `false` the time/weight/distance matrix will be calculated for all valid points and contain the `null` value for all entries that could not be calculated. The `hint` field of the response will also contain additional information about what went wrong (see its documentation).|
|out_arrays|[string]|false|none|Specifies which matrices should be included in the response. Specify one or more of the following options `weights`, `times`, `distances`. The units of the entries of `distances` are meters, of `times` are seconds and of `weights` is arbitrary and it can differ for different vehicles or versions of this API.|
|point_hints|[string]|false|none|Optional parameter. Specifies a hint for each point in the `points` array to prefer a certain street for the closest location lookup. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.|
|points|[[number(double)]]|false|none|Specify multiple points for which the weight-, route-, time- or distance-matrix should be calculated as follows: `[longitude,latitude]`. In this case the origins are identical to the destinations. Thus, if there are N points, NxN entries are calculated. The order of the point parameter is important. Specify at least three points. Cannot be used together with `from_point` or `to_point.`.|
|snap_preventions|[string]|false|none|Optional parameter to avoid snapping to a certain road class or road environment. Current supported values `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`|
|turn_costs|boolean|false|none|Specifies if turn restrictions should be considered. Enabling this option increases the matrix computation time. Only supported for motor vehicles and OpenStreetMap.|
|vehicle|object|false|none|none|

<h2 id="tocS_TimeWindow">TimeWindow</h2>
<!-- backwards compatibility -->
<a id="schematimewindow"></a>
<a id="schema_TimeWindow"></a>
<a id="tocStimewindow"></a>
<a id="tocstimewindow"></a>

```json
{
  "earliest": 0,
  "latest": 9223372036854776000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|earliest|integer(int64)|false|none|Specifies the opening time of the time window in seconds, i.e. the earliest time the service can start.|
|latest|integer(int64)|false|none|Specifies the closing time of the time window in seconds, i.e. the latest time the service can start.|

<h2 id="tocS_TimeWindowBreak">TimeWindowBreak</h2>
<!-- backwards compatibility -->
<a id="schematimewindowbreak"></a>
<a id="schema_TimeWindowBreak"></a>
<a id="tocStimewindowbreak"></a>
<a id="tocstimewindowbreak"></a>

```json
{
  "duration": 2700,
  "earliest": 1550136467,
  "latest": 1550148467
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer(int64)|true|none|Specifies the duration of the break in seconds.|
|earliest|integer(int64)|true|none|Specifies the earliest start time of the break in seconds.|
|latest|integer(int64)|true|none|Specifies the latest start time of break in seconds.|

<h2 id="tocS_Vehicle">Vehicle</h2>
<!-- backwards compatibility -->
<a id="schemavehicle"></a>
<a id="schema_Vehicle"></a>
<a id="tocSvehicle"></a>
<a id="tocsvehicle"></a>

```json
{
  "break": {
    "duration": 2700,
    "earliest": 1550136467,
    "latest": 1550148467
  },
  "earliest_start": 0,
  "end_address": {
    "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "street_hint": "Queens Victoria Street 70"
  },
  "latest_end": 9223372036854776000,
  "max_activities": 24,
  "max_distance": 400000,
  "max_driving_time": 28800,
  "max_jobs": 12,
  "min_jobs": 12,
  "move_to_end_address": true,
  "return_to_depot": true,
  "skills": [
    "drilling_maschine",
    "screw_driver"
  ],
  "start_address": {
    "curbside": "If you would like to arrive at this address without having to cross the street use `curbside=right/left` for countries with right/left-hand driving. Using `curbside=any` is the same as not specifying this parameter at all.",
    "lat": 51.512665,
    "location_id": "550e8400-e29b-11d4-a716-446655440000",
    "lon": -0.092869,
    "name": "Queens Victoria Street 70, Second Floor, Flat 245",
    "street_hint": "Queens Victoria Street 70"
  },
  "type_id": "my-own-type",
  "vehicle_id": "vehicle-1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|break|[TimeWindowBreak](#schematimewindowbreak) \| [DriveTimeBreak](#schemadrivetimebreak)|false|none|none|
|earliest_start|integer(int64)|false|none|Earliest start of vehicle in seconds. It is recommended to use the unix timestamp.|
|end_address|[Address](#schemaaddress)|false|none|If this is omitted AND return_to_depot is true then the vehicle needs to return to its start_address.|
|latest_end|integer(int64)|false|none|Latest end of vehicle in seconds, i.e. the time the vehicle needs to be at its end location at latest.|
|max_activities|integer(int32)|false|none|Specifies the maximum number of activities a vehicle can conduct.|
|max_distance|integer(int64)|false|none|Specifies the maximum distance (in meters) a vehicle can go.|
|max_driving_time|integer(int64)|false|none|Specifies the maximum drive time (in seconds) a vehicle/driver can go, i.e. the maximum time on the road (service and waiting times are not included here)|
|max_jobs|integer(int32)|false|none|Specifies the maximum number of jobs a vehicle can load.|
|min_jobs|integer(int32)|false|none|Specifies the minimum number of jobs a vehicle should load. This is a soft constraint, i.e. if it is not possible to fulfill “min_jobs”, we will still try to get as close as possible to this constraint.|
|move_to_end_address|boolean|false|none|Indicates whether a vehicle should be moved even though it has not been assigned any jobs.|
|return_to_depot|boolean|false|none|If it is false, the algorithm decides where to end the vehicle route. It ends in one of your customers' locations. The end is chosen such that it contributes to the overall objective function, e.g. min transport_time. If it is true, you can either specify a specific end location (which is then regarded as end depot) or you can leave it and the driver returns to its start location.|
|skills|[string]|false|none|Array of skills, i.e. array of string (not case sensitive).|
|start_address|[Address](#schemaaddress)|true|none|none|
|type_id|string|false|none|The type ID assigns a vehicle type to this vehicle. You can specify types in the array of vehicle types. If you omit the type ID, the default type is used. The default type is a `car` with a capacity of 0.|
|vehicle_id|string|true|none|Specifies the ID of the vehicle. Ids must be unique, i.e. if there are two vehicles with the same ID, an error is returned.|

<h2 id="tocS_VehicleProfileId">VehicleProfileId</h2>
<!-- backwards compatibility -->
<a id="schemavehicleprofileid"></a>
<a id="schema_VehicleProfileId"></a>
<a id="tocSvehicleprofileid"></a>
<a id="tocsvehicleprofileid"></a>

```json
"car"
```

<h2 id="tocS_VehicleType">VehicleType</h2>
<!-- backwards compatibility -->
<a id="schemavehicletype"></a>
<a id="schema_VehicleType"></a>
<a id="tocSvehicletype"></a>
<a id="tocsvehicletype"></a>

```json
{
  "capacity": [
    100,
    500
  ],
  "consider_traffic": false,
  "cost_per_activation": 0,
  "cost_per_meter": 0,
  "cost_per_second": 0,
  "network_data_provider": "openstreetmap",
  "profile": {},
  "service_time_factor": 1,
  "speed_factor": 1,
  "type_id": "my-own-type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capacity|[integer(int32)]|false|none|Specifies an array of capacity dimension values which need to be int values. For example, if there are two dimensions such as volume and weight then it needs to be defined as [ 1000, 300 ] assuming a maximum volume of 1000 and a maximum weight of 300.|
|consider_traffic|boolean|false|none|Specifies whether traffic should be considered. if "tomtom" is used and this is false, free flow travel times from "tomtom" are calculated. If this is true, historical traffic info are used. We do not yet have traffic data for "openstreetmap", thus, setting this true has no effect at all.|
|cost_per_activation|number(double)|false|none|**_BETA feature_**! Cost parameter vehicle activation, i.e. fixed costs per vehicle|
|cost_per_meter|number(double)|false|none|**_BETA feature_**! Cost parameter per distance unit, here meter is used|
|cost_per_second|number(double)|false|none|**_BETA feature_**! Cost parameter per time unit, here second is used|
|network_data_provider|string|false|none|Specifies the network data provider. Either use [`openstreetmap`](#section/Map-Data-and-Routing-Profiles/OpenStreetMap) (default) or [`tomtom`](#section/Map-Data-and-Routing-Profiles/TomTom) (add-on required).|
|profile|object|false|none|none|
|service_time_factor|number(double)|false|none|Specifies a service time factor for this vehicle type. If the vehicle/driver that uses this type is able to conduct the service as double as fast as it is determined in the corresponding service or shipment then set it to 0.5.|
|speed_factor|number(double)|false|none|Specifies a speed factor for this vehicle type. If the vehicle that uses this type needs to be only half as fast as what is actually calculated with our routing engine then set the speed factor to 0.5.|
|type_id|string|true|none|Specifies the id of the vehicle type. If a vehicle needs to be of this type, it should refer to this with its type_id attribute.|

#### Enumerated Values

|Property|Value|
|---|---|
|network_data_provider|openstreetmap|
|network_data_provider|tomtom|
