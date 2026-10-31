<h1 id="va-facilities">VA Facilities v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Background

This RESTful API provides information about physical VA facilities. Information available includes
geographic location, address, phone, hours of operation, and available services.

VA operates several different types of facilities, the types represented in this API include:
- Health Facilities (vha)
- Benefits Facilities (vba)
- Cemeteries (nca)
- Vet Centers (vc)

To read an FAQ on how wait times are calculated, click the "For more information" link on [this page](https://www.accesstocare.va.gov/PWT/SearchWaitTimes).

## Getting Started

### Base URLs

The base URLs for the VA Facilities API in the various environments are:
- Sandbox: `https://sandbox-api.va.gov/services/va_facilities/v0`
- Production: `https://api.va.gov/services/va_facilities/v0`

### Authorization

API requests are authorized through a symmetric API token, provided in an HTTP header with name `apikey`.

### Response Formats

Clients may request several response formats by setting the `Accept` header.
- `application/json` - The default JSON response format complies with JSON API. This media type is *not* available for bulk requests using the `/facilities/all` endpoint. It will return `406 Not Acceptable`.
- `application/geo+json` - GeoJSON-compliant format, representing each facility as a feature with a point geometry.
- `application/vnd.geo+json` - Deprecated. Prefer application/geo+json.
- `text/csv` - Available for the bulk download operation only. Some structured fields are omitted from the CSV response.

### Response Elements

Some data elements within the response are only present for facilities of a given type:
- The patient satisfaction scores contained in the `satisfaction` element are only applicable
  to VA health facilities.
- The patient wait time values contained in the `wait_times` element are only applicable to
  VA health facilities.
- The list of available services in the `services` element is only applicable to VA health and
  benefits facilities.
- The operational hours special instructions contained in the `operational_hours_special_instructions` element is only applicable to VA health and Vet Center facilities.

### Facility ID Formats and Constraints

A facility ID has the format `prefix_stationNumber`. The prefix is one of nca, vc, vba, or vha. Cemeteries may be national (VA) or non-national; non-national cemeteries have the station number prefixed with an `s`. There are no other constraints on the format. Examples:
- Health: `vha_402GA`
- Benefits: `vba_539GB`
- National cemetery: `nca_063`
- Non-national cemetery: `nca_s1082`
- Vet center: `vc_0872MVC`


### Mobile Facilities

The mobile health facilities move regularly within a region. If a facility comes back from this API with `"mobile": "true"`, the latitude/longitude and address could be inaccurate. To get the exact current location, please call the number listed.

## Deprecations

- `active_status` field is deprecated and replaced with `operating_status`.
- `application/vnd.geo+json` media type is deprecated and replaced by `application/geo+json`


## Reference

- [Raw VA Facilities Open API Spec](https://api.va.gov/services/va_facilities/docs/v0/api)
- [GeoJSON Format](https://tools.ietf.org/html/rfc7946)
- [JSON API Format](https://jsonapi.org/format/)

Base URLs:

* <a href="https://sandbox-api.va.gov/services/va_facilities/v0">https://sandbox-api.va.gov/services/va_facilities/v0</a> - Sandbox

* <a href="https://api.va.gov/services/va_facilities/v0">https://api.va.gov/services/va_facilities/v0</a> - Production

# Authentication

* API Key (apikey)
    - Parameter Name: **apikey**, in: header.

<h1 id="va-facilities-facilities">facilities</h1>

VA Facilities API

## Query facilities by location or IDs, with optional filters

<a id="opIdgetFacilitiesByLocation"></a>

> Code samples

```bash
curl https://example.com/facilities \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /facilities`

Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)

A query by latitude and longitude returns all facilities in the system, sorted by distance from that location.

All location queries support filtering by facility type, available services, and mobile status.

One can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)

Results are paginated. JSON responses include pagination information in the standard JSON API "links" and "meta" elements. 

### Parameter combinations
You may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations: 

- `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`

- `ids`

- `lat` and `long`, with the option of any combination of `ids`, `type`, `services[]`, or `mobile`

- `state`, with the option of any combination of `type`, `services[]`, or `mobile`

- `visn`

- `zip`, with the option of any combination of `type`, `services[]`, or `mobile`

 Invalid combinations will return `400 Bad Request`.

<h3 id="query-facilities-by-location-or-ids-with-optional-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[string]|false|List of comma-separated facility IDs to retrieve in a single request. Can be combined with lat and long parameters to retrieve facilities sorted by distance from a location.|
|zip|query|string(##### or #####-####)|false|Zip code to search for facilities. More detailed zip codes can be passed in, but only the first five digits are used to determine facilities to return.|
|state|query|string(XX)|false|State in which to search for facilities. Except in rare cases, this is two characters.|
|lat|query|number(float)|false|Latitude of point to search for facilities, in WGS84 coordinate reference system.|
|long|query|number(float)|false|Longitude of point to search for facilities, in WGS84 coordinate reference system.|
|bbox[]|query|[number(float)]|false|Bounding box (longitude, latitude, longitude, latitude) within which facilities will be returned. (WGS84 coordinate reference system)|
|visn|query|number|false|VISN search of matching facilities.|
|type|query|string|false|Optional facility type search filter|
|services[]|query|[string]|false|Optional facility service search filter|
|mobile|query|boolean|false|Optional facility mobile search filter|
|page|query|integer(int64)|false|Page of results to return per paginated response.|
|per_page|query|integer(int64)|false|Number of results to return per paginated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|health|
|type|cemetery|
|type|benefits|
|type|vet_center|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "active_status": "A",
        "address": {
          "mailing": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          },
          "physical": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          }
        },
        "classification": "VA Medical Center (VAMC)",
        "detailed_services": [
          {
            "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "description_facility": "null",
            "name": "COVID-19 vaccines",
            "online_scheduling_available": "True",
            "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
            "referral_required": "False",
            "service_locations": [
              {
                "additional_hours_info": "Location hours times may vary depending on staff availability",
                "appointment_phones": [
                  {
                    "extension": "71234",
                    "label": "Main phone",
                    "number": "937-268-6511",
                    "type": "tel"
                  }
                ],
                "email_contacts": [
                  {
                    "email_address": "georgea@va.gov",
                    "email_label": "George Anderson"
                  }
                ],
                "facility_service_hours": {
                  "Friday": "9AM-5PM",
                  "Monday": "9AM-5PM",
                  "Saturday": "Closed",
                  "Sunday": "Closed",
                  "Thursday": "9AM-5PM",
                  "Tuesday": "9AM-5PM",
                  "Wednesday": "9AM-5PM"
                },
                "service_location_address": {
                  "address_line1": "50 Irving Street, Northwest",
                  "address_line2": "string",
                  "building_name_number": "Baxter Building",
                  "city": "Washington",
                  "clinic_name": "Baxter Clinic",
                  "country_code": "US",
                  "state": "DC",
                  "wing_floor_or_room_number": "Wing East",
                  "zip_code": "20422-0001"
                }
              }
            ],
            "walk_ins_accepted": "True"
          }
        ],
        "facility_type": "va_health_facility",
        "hours": {
          "friday": "9AM-5PM",
          "monday": "9AM-5PM",
          "saturday": "Closed",
          "sunday": "Closed",
          "thursday": "9AM-5PM",
          "tuesday": "9AM-5PM",
          "wednesday": "9AM-5PM"
        },
        "lat": 38.9311137,
        "long": -77.0109110499999,
        "mobile": false,
        "name": "Washington VA Medical Center",
        "operating_status": "NORMAL",
        "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
        "phone": {
          "after_hours": "202-555-1212",
          "enrollment_coordinator": "202-555-1212",
          "fax": "202-555-1212",
          "main": "202-555-1212",
          "mental_health_clinic": "202-555-1212",
          "patient_advocate": "202-555-1212",
          "pharmacy": "202-555-1212"
        },
        "satisfaction": {
          "effective_date": "2018-01-01",
          "health": {
            "primary_care_routine": 0.85,
            "primary_care_urgent": 0.85,
            "specialty_care_routine": 0.85,
            "specialty_care_urgent": 0.85
          }
        },
        "services": {
          "benefits": [
            "ApplyingForBenefits"
          ],
          "health": [
            "Audiology"
          ],
          "last_updated": "2018-01-01",
          "other": [
            "OnlineScheduling"
          ]
        },
        "time_zone": "America/New_York",
        "visn": "20",
        "wait_times": 10,
        "website": "http://www.washingtondc.va.gov"
      },
      "id": "vha_688",
      "type": "va_facilities"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "related": "string",
    "self": "string"
  },
  "meta": {
    "distances": [
      {
        "distance": 0,
        "id": "string"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 10,
      "total_entries": 2162,
      "total_pages": 217
    }
  }
}
```

> 401 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 403 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 406 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

<h3 id="query-facilities-by-location-or-ids-with-optional-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FacilitiesResponse](#schemafacilitiesresponse)|
|401|Unauthorized|Missing API token|[GenericError](#schemagenericerror)|
|403|Forbidden|Invalid API token|[GenericError](#schemagenericerror)|
|406|Not Acceptable|Requested format unacceptable|[ApiError](#schemaapierror)|
|429|Too Many Requests|API rate limit exceeded|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Bulk download information for all facilities

<a id="opIdgetAllFacilities"></a>

> Code samples

```bash
curl https://example.com/facilities/all \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /facilities/all`

Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.

<h3 id="bulk-download-information-for-all-facilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/geo+json|
|Accept|application/vnd.geo+json|
|Accept|text/csv|

> Example responses

> 200 Response

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          -77.0367761,
          38.9004181
        ],
        "type": "Point"
      },
      "properties": {
        "active_status": "A",
        "address": {
          "mailing": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          },
          "physical": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          }
        },
        "classification": "VA Medical Center (VAMC)",
        "detailed_services": [
          {
            "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "description_facility": "null",
            "name": "COVID-19 vaccines",
            "online_scheduling_available": "True",
            "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
            "referral_required": "False",
            "service_locations": [
              {
                "additional_hours_info": "Location hours times may vary depending on staff availability",
                "appointment_phones": [
                  {
                    "extension": "71234",
                    "label": "Main phone",
                    "number": "937-268-6511",
                    "type": "tel"
                  }
                ],
                "email_contacts": [
                  {
                    "email_address": "georgea@va.gov",
                    "email_label": "George Anderson"
                  }
                ],
                "facility_service_hours": {
                  "Friday": "9AM-5PM",
                  "Monday": "9AM-5PM",
                  "Saturday": "Closed",
                  "Sunday": "Closed",
                  "Thursday": "9AM-5PM",
                  "Tuesday": "9AM-5PM",
                  "Wednesday": "9AM-5PM"
                },
                "service_location_address": {
                  "address_line1": "50 Irving Street, Northwest",
                  "address_line2": "string",
                  "building_name_number": "Baxter Building",
                  "city": "Washington",
                  "clinic_name": "Baxter Clinic",
                  "country_code": "US",
                  "state": "DC",
                  "wing_floor_or_room_number": "Wing East",
                  "zip_code": "20422-0001"
                }
              }
            ],
            "walk_ins_accepted": "True"
          }
        ],
        "facility_type": "va_benefits_facility",
        "hours": {
          "friday": "9AM-5PM",
          "monday": "9AM-5PM",
          "saturday": "Closed",
          "sunday": "Closed",
          "thursday": "9AM-5PM",
          "tuesday": "9AM-5PM",
          "wednesday": "9AM-5PM"
        },
        "id": "vha_688",
        "mobile": false,
        "name": "Washington VA Medical Center",
        "operating_status": "NORMAL",
        "operational_hours_special_instructions": "Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.",
        "phone": {
          "after_hours": "202-555-1212",
          "enrollment_coordinator": "202-555-1212",
          "fax": "202-555-1212",
          "main": "202-555-1212",
          "mental_health_clinic": "202-555-1212",
          "patient_advocate": "202-555-1212",
          "pharmacy": "202-555-1212"
        },
        "satisfaction": {
          "effective_date": "2018-01-01",
          "health": {
            "primary_care_routine": 0.85,
            "primary_care_urgent": 0.85,
            "specialty_care_routine": 0.85,
            "specialty_care_urgent": 0.85
          }
        },
        "services": {
          "benefits": [
            "ApplyingForBenefits"
          ],
          "health": [
            "Audiology"
          ],
          "last_updated": "2018-01-01",
          "other": [
            "OnlineScheduling"
          ]
        },
        "time_zone": "America/New_York",
        "visn": "20",
        "wait_times": 10,
        "website": "http://www.washingtondc.va.gov"
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

> 401 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 403 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 406 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

<h3 id="bulk-download-information-for-all-facilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GeoFacilitiesResponse](#schemageofacilitiesresponse)|
|401|Unauthorized|Missing API token|[GenericError](#schemagenericerror)|
|403|Forbidden|Invalid API token|[GenericError](#schemagenericerror)|
|406|Not Acceptable|Requested format unacceptable|[ApiError](#schemaapierror)|
|429|Too Many Requests|API rate limit exceeded|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Retrieve a specific facility by ID

<a id="opIdgetFacilityById"></a>

> Code samples

```bash
curl https://example.com/facilities/vha_688 \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /facilities/{id}`

<h3 id="retrieve-a-specific-facility-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Facility ID, in the form `<prefix>_<station>`, where prefix is one of "vha", "vba", "nca", or "vc", for health facility, benefits, cemetery, or vet center, respectively.|

> Example responses

> 200 Response

```json
{
  "data": {
    "attributes": {
      "active_status": "A",
      "address": {
        "mailing": {
          "address_1": "50 Irving Street, Northwest",
          "address_2": "Bldg 2",
          "address_3": "Suite 7",
          "city": "Washington",
          "state": "DC",
          "zip": "20422-0001"
        },
        "physical": {
          "address_1": "50 Irving Street, Northwest",
          "address_2": "Bldg 2",
          "address_3": "Suite 7",
          "city": "Washington",
          "state": "DC",
          "zip": "20422-0001"
        }
      },
      "classification": "VA Medical Center (VAMC)",
      "detailed_services": [
        {
          "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
          "appointment_phones": [
            {
              "extension": "71234",
              "label": "Main phone",
              "number": "937-268-6511",
              "type": "tel"
            }
          ],
          "description_facility": "null",
          "name": "COVID-19 vaccines",
          "online_scheduling_available": "True",
          "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
          "referral_required": "False",
          "service_locations": [
            {
              "additional_hours_info": "Location hours times may vary depending on staff availability",
              "appointment_phones": [
                {
                  "extension": "71234",
                  "label": "Main phone",
                  "number": "937-268-6511",
                  "type": "tel"
                }
              ],
              "email_contacts": [
                {
                  "email_address": "georgea@va.gov",
                  "email_label": "George Anderson"
                }
              ],
              "facility_service_hours": {
                "Friday": "9AM-5PM",
                "Monday": "9AM-5PM",
                "Saturday": "Closed",
                "Sunday": "Closed",
                "Thursday": "9AM-5PM",
                "Tuesday": "9AM-5PM",
                "Wednesday": "9AM-5PM"
              },
              "service_location_address": {
                "address_line1": "50 Irving Street, Northwest",
                "address_line2": "string",
                "building_name_number": "Baxter Building",
                "city": "Washington",
                "clinic_name": "Baxter Clinic",
                "country_code": "US",
                "state": "DC",
                "wing_floor_or_room_number": "Wing East",
                "zip_code": "20422-0001"
              }
            }
          ],
          "walk_ins_accepted": "True"
        }
      ],
      "facility_type": "va_health_facility",
      "hours": {
        "friday": "9AM-5PM",
        "monday": "9AM-5PM",
        "saturday": "Closed",
        "sunday": "Closed",
        "thursday": "9AM-5PM",
        "tuesday": "9AM-5PM",
        "wednesday": "9AM-5PM"
      },
      "lat": 38.9311137,
      "long": -77.0109110499999,
      "mobile": false,
      "name": "Washington VA Medical Center",
      "operating_status": "NORMAL",
      "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
      "phone": {
        "after_hours": "202-555-1212",
        "enrollment_coordinator": "202-555-1212",
        "fax": "202-555-1212",
        "main": "202-555-1212",
        "mental_health_clinic": "202-555-1212",
        "patient_advocate": "202-555-1212",
        "pharmacy": "202-555-1212"
      },
      "satisfaction": {
        "effective_date": "2018-01-01",
        "health": {
          "primary_care_routine": 0.85,
          "primary_care_urgent": 0.85,
          "specialty_care_routine": 0.85,
          "specialty_care_urgent": 0.85
        }
      },
      "services": {
        "benefits": [
          "ApplyingForBenefits"
        ],
        "health": [
          "Audiology"
        ],
        "last_updated": "2018-01-01",
        "other": [
          "OnlineScheduling"
        ]
      },
      "time_zone": "America/New_York",
      "visn": "20",
      "wait_times": 10,
      "website": "http://www.washingtondc.va.gov"
    },
    "id": "vha_688",
    "type": "va_facilities"
  }
}
```

> 400 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 403 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 404 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 406 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

<h3 id="retrieve-a-specific-facility-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FacilityReadResponse](#schemafacilityreadresponse)|
|400|Bad Request|Bad request - invalid or missing query parameters|[ApiError](#schemaapierror)|
|401|Unauthorized|Missing API token|[GenericError](#schemagenericerror)|
|403|Forbidden|Invalid API token|[GenericError](#schemagenericerror)|
|404|Not Found|Facility not found|[ApiError](#schemaapierror)|
|406|Not Acceptable|Requested format unacceptable|[ApiError](#schemaapierror)|
|429|Too Many Requests|API rate limit exceeded|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Bulk download of all facility IDs

<a id="opIdgetFacilityIds"></a>

> Code samples

```bash
curl https://example.com/ids \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /ids`

Retrieves all available facility IDs only

<h3 id="bulk-download-of-all-facility-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Optional facility type search filter|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|health|
|type|cemetery|
|type|benefits|
|type|vet_center|

> Example responses

> 200 Response

```json
{
  "data": [
    "vha_688"
  ]
}
```

> 401 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 403 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 406 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

<h3 id="bulk-download-of-all-facility-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FacilitiesIdsResponse](#schemafacilitiesidsresponse)|
|401|Unauthorized|Missing API token|[GenericError](#schemagenericerror)|
|403|Forbidden|Invalid API token|[GenericError](#schemagenericerror)|
|406|Not Acceptable|Requested format unacceptable|[ApiError](#schemaapierror)|
|429|Too Many Requests|API rate limit exceeded|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## Retrieve all VA health facilities reachable by driving within the specified time period

<a id="opIdgetNearbyFacilities"></a>

> Code samples

```bash
curl https://example.com/nearby \
  -H 'Accept: application/json' \
  -H "apikey: ${API_KEY}"
```

`GET /nearby`

Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`. 

Results of this operation are paginated. Responses include pagination information in the standard JSON API "links" and "meta" elements. 

The "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.

To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.

<h3 id="retrieve-all-va-health-facilities-reachable-by-driving-within-the-specified-time-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|street_address|query|string|false|Street address of the location from which drive time will be calculated.|
|city|query|string|false|City of the location from which drive time will be calculated.|
|state|query|string|false|Two character state code of the location from which drive time will be calculated.|
|zip|query|string|false|Zip code of the location from which drive time will be calculated.|
|lat|query|number(float)|false|Latitude of the location from which drive time will be calculated.|
|lng|query|number(float)|false|Longitude of the location from which drive time will be calculated.|
|drive_time|query|integer(int32)|false|Filter to only include facilities that are within the specified number of drive time minutes from the requested location.|
|services[]|query|[string]|false|Optional facility service search filter|
|page|query|integer(int32)|false|Page of results to return per paginated response.|
|per_page|query|integer(int32)|false|Number of results to return per paginated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|drive_time|10|
|drive_time|20|
|drive_time|30|
|drive_time|40|
|drive_time|50|
|drive_time|60|
|drive_time|70|
|drive_time|80|
|drive_time|90|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "max_time": 20,
        "min_time": 10
      },
      "id": "vha_688",
      "type": "va_health_facility"
    }
  ],
  "meta": {
    "band_version": "APR2021"
  }
}
```

> 400 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 401 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 403 Response

```json
{
  "message": "Detailed Error Message"
}
```

> 406 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

> 429 Response

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

<h3 id="retrieve-all-va-health-facilities-reachable-by-driving-within-the-specified-time-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NearbyResponse](#schemanearbyresponse)|
|400|Bad Request|Missing Required Or Ambiguous Parameters|[GenericError](#schemagenericerror)|
|401|Unauthorized|Missing API token|[GenericError](#schemagenericerror)|
|403|Forbidden|Invalid API token|[GenericError](#schemagenericerror)|
|406|Not Acceptable|Requested format unacceptable|[ApiError](#schemaapierror)|
|429|Too Many Requests|API rate limit exceeded|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "address_1": "50 Irving Street, Northwest",
  "address_2": "Bldg 2",
  "address_3": "Suite 7",
  "city": "Washington",
  "state": "DC",
  "zip": "20422-0001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_1|string \| null|false|none|none|
|address_2|string \| null|false|none|none|
|address_3|string \| null|false|none|none|
|city|string \| null|false|none|none|
|state|string \| null|false|none|none|
|zip|string \| null|false|none|none|

<h2 id="tocS_Addresses">Addresses</h2>
<!-- backwards compatibility -->
<a id="schemaaddresses"></a>
<a id="schema_Addresses"></a>
<a id="tocSaddresses"></a>
<a id="tocsaddresses"></a>

```json
{
  "mailing": {
    "address_1": "50 Irving Street, Northwest",
    "address_2": "Bldg 2",
    "address_3": "Suite 7",
    "city": "Washington",
    "state": "DC",
    "zip": "20422-0001"
  },
  "physical": {
    "address_1": "50 Irving Street, Northwest",
    "address_2": "Bldg 2",
    "address_3": "Suite 7",
    "city": "Washington",
    "state": "DC",
    "zip": "20422-0001"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mailing|[Address](#schemaaddress)|false|none|none|
|physical|[Address](#schemaaddress)|false|none|none|

<h2 id="tocS_ApiError">ApiError</h2>
<!-- backwards compatibility -->
<a id="schemaapierror"></a>
<a id="schema_ApiError"></a>
<a id="tocSapierror"></a>
<a id="tocsapierror"></a>

```json
{
  "errors": [
    {
      "code": "103",
      "detail": "Detailed error message",
      "status": "400",
      "title": "Error title"
    }
  ]
}
```

API invocation or processing error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ErrorMessage](#schemaerrormessage)]|true|none|none|

<h2 id="tocS_AppointmentPhoneNumber">AppointmentPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaappointmentphonenumber"></a>
<a id="schema_AppointmentPhoneNumber"></a>
<a id="tocSappointmentphonenumber"></a>
<a id="tocsappointmentphonenumber"></a>

```json
{
  "extension": "71234",
  "label": "Main phone",
  "number": "937-268-6511",
  "type": "tel"
}
```

Phone number information for scheduling an appointment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extension|string \| null|false|none|none|
|label|string \| null|false|none|none|
|number|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_DetailedService">DetailedService</h2>
<!-- backwards compatibility -->
<a id="schemadetailedservice"></a>
<a id="schema_DetailedService"></a>
<a id="tocSdetailedservice"></a>
<a id="tocsdetailedservice"></a>

```json
{
  "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
  "appointment_phones": [
    {
      "extension": "71234",
      "label": "Main phone",
      "number": "937-268-6511",
      "type": "tel"
    }
  ],
  "description_facility": "null",
  "name": "COVID-19 vaccines",
  "online_scheduling_available": "True",
  "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
  "referral_required": "False",
  "service_locations": [
    {
      "additional_hours_info": "Location hours times may vary depending on staff availability",
      "appointment_phones": [
        {
          "extension": "71234",
          "label": "Main phone",
          "number": "937-268-6511",
          "type": "tel"
        }
      ],
      "email_contacts": [
        {
          "email_address": "georgea@va.gov",
          "email_label": "George Anderson"
        }
      ],
      "facility_service_hours": {
        "Friday": "9AM-5PM",
        "Monday": "9AM-5PM",
        "Saturday": "Closed",
        "Sunday": "Closed",
        "Thursday": "9AM-5PM",
        "Tuesday": "9AM-5PM",
        "Wednesday": "9AM-5PM"
      },
      "service_location_address": {
        "address_line1": "50 Irving Street, Northwest",
        "address_line2": "string",
        "building_name_number": "Baxter Building",
        "city": "Washington",
        "clinic_name": "Baxter Clinic",
        "country_code": "US",
        "state": "DC",
        "wing_floor_or_room_number": "Wing East",
        "zip_code": "20422-0001"
      }
    }
  ],
  "walk_ins_accepted": "True"
}
```

Detailed information of a facility service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appointment_leadin|string \| null|false|none|Additional appointment information. May contain html / string formatting characters.|
|appointment_phones|[[AppointmentPhoneNumber](#schemaappointmentphonenumber)]|false|none|List of phone numbers related to scheduling appointments for this service.|
|description_facility|string \| null|false|none|Deprecated until further notice.|
|name|string \| null|false|none|Service name.|
|online_scheduling_available|string \| null|false|none|String detailing online scheduling availability.|
|path|string \| null|false|none|URL to a page with additional details for this service within the associated facility's health care system.|
|referral_required|string \| null|false|none|String detailing if referrals are required for the service.|
|service_locations|[[DetailedServiceLocation](#schemadetailedservicelocation)]|false|none|List of service locations.|
|walk_ins_accepted|string \| null|false|none|String detailing if walk-ins are accepted for the service.|

<h2 id="tocS_DetailedServiceAddress">DetailedServiceAddress</h2>
<!-- backwards compatibility -->
<a id="schemadetailedserviceaddress"></a>
<a id="schema_DetailedServiceAddress"></a>
<a id="tocSdetailedserviceaddress"></a>
<a id="tocsdetailedserviceaddress"></a>

```json
{
  "address_line1": "50 Irving Street, Northwest",
  "address_line2": "string",
  "building_name_number": "Baxter Building",
  "city": "Washington",
  "clinic_name": "Baxter Clinic",
  "country_code": "US",
  "state": "DC",
  "wing_floor_or_room_number": "Wing East",
  "zip_code": "20422-0001"
}
```

Service location address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line1|string \| null|false|none|none|
|address_line2|string \| null|false|none|none|
|building_name_number|string \| null|false|none|Building name and/or number of service.|
|city|string \| null|false|none|none|
|clinic_name|string \| null|false|none|Clinic name for service.|
|country_code|string \| null|false|none|none|
|state|string \| null|false|none|none|
|wing_floor_or_room_number|string \| null|false|none|Wing, floor, or room number of service.|
|zip_code|string \| null|false|none|none|

<h2 id="tocS_DetailedServiceEmailContact">DetailedServiceEmailContact</h2>
<!-- backwards compatibility -->
<a id="schemadetailedserviceemailcontact"></a>
<a id="schema_DetailedServiceEmailContact"></a>
<a id="tocSdetailedserviceemailcontact"></a>
<a id="tocsdetailedserviceemailcontact"></a>

```json
{
  "email_address": "georgea@va.gov",
  "email_label": "George Anderson"
}
```

Email contact information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|string \| null|false|none|none|
|email_label|string \| null|false|none|none|

<h2 id="tocS_DetailedServiceHours">DetailedServiceHours</h2>
<!-- backwards compatibility -->
<a id="schemadetailedservicehours"></a>
<a id="schema_DetailedServiceHours"></a>
<a id="tocSdetailedservicehours"></a>
<a id="tocsdetailedservicehours"></a>

```json
{
  "Friday": "9AM-5PM",
  "Monday": "9AM-5PM",
  "Saturday": "Closed",
  "Sunday": "Closed",
  "Thursday": "9AM-5PM",
  "Tuesday": "9AM-5PM",
  "Wednesday": "9AM-5PM"
}
```

Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Friday|string \| null|false|none|none|
|Monday|string \| null|false|none|none|
|Saturday|string \| null|false|none|none|
|Sunday|string \| null|false|none|none|
|Thursday|string \| null|false|none|none|
|Tuesday|string \| null|false|none|none|
|Wednesday|string \| null|false|none|none|

<h2 id="tocS_DetailedServiceLocation">DetailedServiceLocation</h2>
<!-- backwards compatibility -->
<a id="schemadetailedservicelocation"></a>
<a id="schema_DetailedServiceLocation"></a>
<a id="tocSdetailedservicelocation"></a>
<a id="tocsdetailedservicelocation"></a>

```json
{
  "additional_hours_info": "Location hours times may vary depending on staff availability",
  "appointment_phones": [
    {
      "extension": "71234",
      "label": "Main phone",
      "number": "937-268-6511",
      "type": "tel"
    }
  ],
  "email_contacts": [
    {
      "email_address": "georgea@va.gov",
      "email_label": "George Anderson"
    }
  ],
  "facility_service_hours": {
    "Friday": "9AM-5PM",
    "Monday": "9AM-5PM",
    "Saturday": "Closed",
    "Sunday": "Closed",
    "Thursday": "9AM-5PM",
    "Tuesday": "9AM-5PM",
    "Wednesday": "9AM-5PM"
  },
  "service_location_address": {
    "address_line1": "50 Irving Street, Northwest",
    "address_line2": "string",
    "building_name_number": "Baxter Building",
    "city": "Washington",
    "clinic_name": "Baxter Clinic",
    "country_code": "US",
    "state": "DC",
    "wing_floor_or_room_number": "Wing East",
    "zip_code": "20422-0001"
  }
}
```

Details for a location offering a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_hours_info|string \| null|false|none|Additional information related to service location hours.|
|appointment_phones|[[AppointmentPhoneNumber](#schemaappointmentphonenumber)]|false|none|List of appointment phone information.|
|email_contacts|[[DetailedServiceEmailContact](#schemadetailedserviceemailcontact)]|false|none|List of email contact information.|
|facility_service_hours|[DetailedServiceHours](#schemadetailedservicehours)|false|none|Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.|
|service_location_address|[DetailedServiceAddress](#schemadetailedserviceaddress)|false|none|Service location address.|

<h2 id="tocS_Distance">Distance</h2>
<!-- backwards compatibility -->
<a id="schemadistance"></a>
<a id="schema_Distance"></a>
<a id="tocSdistance"></a>
<a id="tocsdistance"></a>

```json
{
  "distance": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|number|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "code": "103",
  "detail": "Detailed error message",
  "status": "400",
  "title": "Error title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|detail|string|false|none|none|
|status|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_FacilitiesIdsResponse">FacilitiesIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacilitiesidsresponse"></a>
<a id="schema_FacilitiesIdsResponse"></a>
<a id="tocSfacilitiesidsresponse"></a>
<a id="tocsfacilitiesidsresponse"></a>

```json
{
  "data": [
    "vha_688"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<h2 id="tocS_FacilitiesMetadata">FacilitiesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafacilitiesmetadata"></a>
<a id="schema_FacilitiesMetadata"></a>
<a id="tocSfacilitiesmetadata"></a>
<a id="tocsfacilitiesmetadata"></a>

```json
{
  "distances": [
    {
      "distance": 0,
      "id": "string"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total_entries": 2162,
    "total_pages": 217
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distances|[[Distance](#schemadistance)]|true|none|none|
|pagination|[Pagination](#schemapagination)|true|none|none|

<h2 id="tocS_FacilitiesResponse">FacilitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacilitiesresponse"></a>
<a id="schema_FacilitiesResponse"></a>
<a id="tocSfacilitiesresponse"></a>
<a id="tocsfacilitiesresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "active_status": "A",
        "address": {
          "mailing": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          },
          "physical": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          }
        },
        "classification": "VA Medical Center (VAMC)",
        "detailed_services": [
          {
            "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "description_facility": "null",
            "name": "COVID-19 vaccines",
            "online_scheduling_available": "True",
            "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
            "referral_required": "False",
            "service_locations": [
              {
                "additional_hours_info": "Location hours times may vary depending on staff availability",
                "appointment_phones": [
                  {
                    "extension": "71234",
                    "label": "Main phone",
                    "number": "937-268-6511",
                    "type": "tel"
                  }
                ],
                "email_contacts": [
                  {
                    "email_address": "georgea@va.gov",
                    "email_label": "George Anderson"
                  }
                ],
                "facility_service_hours": {
                  "Friday": "9AM-5PM",
                  "Monday": "9AM-5PM",
                  "Saturday": "Closed",
                  "Sunday": "Closed",
                  "Thursday": "9AM-5PM",
                  "Tuesday": "9AM-5PM",
                  "Wednesday": "9AM-5PM"
                },
                "service_location_address": {
                  "address_line1": "50 Irving Street, Northwest",
                  "address_line2": "string",
                  "building_name_number": "Baxter Building",
                  "city": "Washington",
                  "clinic_name": "Baxter Clinic",
                  "country_code": "US",
                  "state": "DC",
                  "wing_floor_or_room_number": "Wing East",
                  "zip_code": "20422-0001"
                }
              }
            ],
            "walk_ins_accepted": "True"
          }
        ],
        "facility_type": "va_health_facility",
        "hours": {
          "friday": "9AM-5PM",
          "monday": "9AM-5PM",
          "saturday": "Closed",
          "sunday": "Closed",
          "thursday": "9AM-5PM",
          "tuesday": "9AM-5PM",
          "wednesday": "9AM-5PM"
        },
        "lat": 38.9311137,
        "long": -77.0109110499999,
        "mobile": false,
        "name": "Washington VA Medical Center",
        "operating_status": "NORMAL",
        "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
        "phone": {
          "after_hours": "202-555-1212",
          "enrollment_coordinator": "202-555-1212",
          "fax": "202-555-1212",
          "main": "202-555-1212",
          "mental_health_clinic": "202-555-1212",
          "patient_advocate": "202-555-1212",
          "pharmacy": "202-555-1212"
        },
        "satisfaction": {
          "effective_date": "2018-01-01",
          "health": {
            "primary_care_routine": 0.85,
            "primary_care_urgent": 0.85,
            "specialty_care_routine": 0.85,
            "specialty_care_urgent": 0.85
          }
        },
        "services": {
          "benefits": [
            "ApplyingForBenefits"
          ],
          "health": [
            "Audiology"
          ],
          "last_updated": "2018-01-01",
          "other": [
            "OnlineScheduling"
          ]
        },
        "time_zone": "America/New_York",
        "visn": "20",
        "wait_times": 10,
        "website": "http://www.washingtondc.va.gov"
      },
      "id": "vha_688",
      "type": "va_facilities"
    }
  ],
  "links": {
    "first": "string",
    "last": "string",
    "next": "string",
    "prev": "string",
    "related": "string",
    "self": "string"
  },
  "meta": {
    "distances": [
      {
        "distance": 0,
        "id": "string"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 10,
      "total_entries": 2162,
      "total_pages": 217
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Facility](#schemafacility)]|false|none|none|
|links|[PageLinks](#schemapagelinks)|true|none|none|
|meta|[FacilitiesMetadata](#schemafacilitiesmetadata)|true|none|none|

<h2 id="tocS_Facility">Facility</h2>
<!-- backwards compatibility -->
<a id="schemafacility"></a>
<a id="schema_Facility"></a>
<a id="tocSfacility"></a>
<a id="tocsfacility"></a>

```json
{
  "attributes": {
    "active_status": "A",
    "address": {
      "mailing": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      },
      "physical": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      }
    },
    "classification": "VA Medical Center (VAMC)",
    "detailed_services": [
      {
        "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
        "appointment_phones": [
          {
            "extension": "71234",
            "label": "Main phone",
            "number": "937-268-6511",
            "type": "tel"
          }
        ],
        "description_facility": "null",
        "name": "COVID-19 vaccines",
        "online_scheduling_available": "True",
        "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
        "referral_required": "False",
        "service_locations": [
          {
            "additional_hours_info": "Location hours times may vary depending on staff availability",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "email_contacts": [
              {
                "email_address": "georgea@va.gov",
                "email_label": "George Anderson"
              }
            ],
            "facility_service_hours": {
              "Friday": "9AM-5PM",
              "Monday": "9AM-5PM",
              "Saturday": "Closed",
              "Sunday": "Closed",
              "Thursday": "9AM-5PM",
              "Tuesday": "9AM-5PM",
              "Wednesday": "9AM-5PM"
            },
            "service_location_address": {
              "address_line1": "50 Irving Street, Northwest",
              "address_line2": "string",
              "building_name_number": "Baxter Building",
              "city": "Washington",
              "clinic_name": "Baxter Clinic",
              "country_code": "US",
              "state": "DC",
              "wing_floor_or_room_number": "Wing East",
              "zip_code": "20422-0001"
            }
          }
        ],
        "walk_ins_accepted": "True"
      }
    ],
    "facility_type": "va_health_facility",
    "hours": {
      "friday": "9AM-5PM",
      "monday": "9AM-5PM",
      "saturday": "Closed",
      "sunday": "Closed",
      "thursday": "9AM-5PM",
      "tuesday": "9AM-5PM",
      "wednesday": "9AM-5PM"
    },
    "lat": 38.9311137,
    "long": -77.0109110499999,
    "mobile": false,
    "name": "Washington VA Medical Center",
    "operating_status": "NORMAL",
    "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
    "phone": {
      "after_hours": "202-555-1212",
      "enrollment_coordinator": "202-555-1212",
      "fax": "202-555-1212",
      "main": "202-555-1212",
      "mental_health_clinic": "202-555-1212",
      "patient_advocate": "202-555-1212",
      "pharmacy": "202-555-1212"
    },
    "satisfaction": {
      "effective_date": "2018-01-01",
      "health": {
        "primary_care_routine": 0.85,
        "primary_care_urgent": 0.85,
        "specialty_care_routine": 0.85,
        "specialty_care_urgent": 0.85
      }
    },
    "services": {
      "benefits": [
        "ApplyingForBenefits"
      ],
      "health": [
        "Audiology"
      ],
      "last_updated": "2018-01-01",
      "other": [
        "OnlineScheduling"
      ]
    },
    "time_zone": "America/New_York",
    "visn": "20",
    "wait_times": 10,
    "website": "http://www.washingtondc.va.gov"
  },
  "id": "vha_688",
  "type": "va_facilities"
}
```

JSON API-compliant object describing a VA facility

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[FacilityAttributes](#schemafacilityattributes)|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|va_facilities|

<h2 id="tocS_FacilityAttributes">FacilityAttributes</h2>
<!-- backwards compatibility -->
<a id="schemafacilityattributes"></a>
<a id="schema_FacilityAttributes"></a>
<a id="tocSfacilityattributes"></a>
<a id="tocsfacilityattributes"></a>

```json
{
  "active_status": "A",
  "address": {
    "mailing": {
      "address_1": "50 Irving Street, Northwest",
      "address_2": "Bldg 2",
      "address_3": "Suite 7",
      "city": "Washington",
      "state": "DC",
      "zip": "20422-0001"
    },
    "physical": {
      "address_1": "50 Irving Street, Northwest",
      "address_2": "Bldg 2",
      "address_3": "Suite 7",
      "city": "Washington",
      "state": "DC",
      "zip": "20422-0001"
    }
  },
  "classification": "VA Medical Center (VAMC)",
  "detailed_services": [
    {
      "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
      "appointment_phones": [
        {
          "extension": "71234",
          "label": "Main phone",
          "number": "937-268-6511",
          "type": "tel"
        }
      ],
      "description_facility": "null",
      "name": "COVID-19 vaccines",
      "online_scheduling_available": "True",
      "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
      "referral_required": "False",
      "service_locations": [
        {
          "additional_hours_info": "Location hours times may vary depending on staff availability",
          "appointment_phones": [
            {
              "extension": "71234",
              "label": "Main phone",
              "number": "937-268-6511",
              "type": "tel"
            }
          ],
          "email_contacts": [
            {
              "email_address": "georgea@va.gov",
              "email_label": "George Anderson"
            }
          ],
          "facility_service_hours": {
            "Friday": "9AM-5PM",
            "Monday": "9AM-5PM",
            "Saturday": "Closed",
            "Sunday": "Closed",
            "Thursday": "9AM-5PM",
            "Tuesday": "9AM-5PM",
            "Wednesday": "9AM-5PM"
          },
          "service_location_address": {
            "address_line1": "50 Irving Street, Northwest",
            "address_line2": "string",
            "building_name_number": "Baxter Building",
            "city": "Washington",
            "clinic_name": "Baxter Clinic",
            "country_code": "US",
            "state": "DC",
            "wing_floor_or_room_number": "Wing East",
            "zip_code": "20422-0001"
          }
        }
      ],
      "walk_ins_accepted": "True"
    }
  ],
  "facility_type": "va_health_facility",
  "hours": {
    "friday": "9AM-5PM",
    "monday": "9AM-5PM",
    "saturday": "Closed",
    "sunday": "Closed",
    "thursday": "9AM-5PM",
    "tuesday": "9AM-5PM",
    "wednesday": "9AM-5PM"
  },
  "lat": 38.9311137,
  "long": -77.0109110499999,
  "mobile": false,
  "name": "Washington VA Medical Center",
  "operating_status": "NORMAL",
  "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
  "phone": {
    "after_hours": "202-555-1212",
    "enrollment_coordinator": "202-555-1212",
    "fax": "202-555-1212",
    "main": "202-555-1212",
    "mental_health_clinic": "202-555-1212",
    "patient_advocate": "202-555-1212",
    "pharmacy": "202-555-1212"
  },
  "satisfaction": {
    "effective_date": "2018-01-01",
    "health": {
      "primary_care_routine": 0.85,
      "primary_care_urgent": 0.85,
      "specialty_care_routine": 0.85,
      "specialty_care_urgent": 0.85
    }
  },
  "services": {
    "benefits": [
      "ApplyingForBenefits"
    ],
    "health": [
      "Audiology"
    ],
    "last_updated": "2018-01-01",
    "other": [
      "OnlineScheduling"
    ]
  },
  "time_zone": "America/New_York",
  "visn": "20",
  "wait_times": 10,
  "website": "http://www.washingtondc.va.gov"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_status|string \| null|false|none|This field is deprecated and replaced with "operating_status".|
|address|[Addresses](#schemaaddresses)|false|none|none|
|classification|string \| null|false|none|none|
|detailed_services|[[DetailedService](#schemadetailedservice)]|false|none|none|
|facility_type|string|true|none|none|
|hours|[Hours](#schemahours)|false|none|Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.|
|lat|number(float)|true|none|Facility latitude|
|long|number(float)|true|none|Facility longitude|
|mobile|boolean \| null|false|none|none|
|name|string|true|none|none|
|operating_status|[OperatingStatus](#schemaoperatingstatus)|true|none|Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.|
|operational_hours_special_instructions|string \| null|false|none|none|
|phone|[Phone](#schemaphone)|false|none|none|
|satisfaction|[Satisfaction](#schemasatisfaction)|false|none|none|
|services|[Services](#schemaservices)|false|none|none|
|time_zone|string(String)|false|none|Facility time zone|
|visn|string \| null|false|none|none|
|wait_times|[WaitTimes](#schemawaittimes)|false|none|none|
|website|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|active_status|A|
|active_status|T|
|facility_type|va_benefits_facility|
|facility_type|va_cemetery|
|facility_type|va_health_facility|
|facility_type|vet_center|

<h2 id="tocS_FacilityReadResponse">FacilityReadResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacilityreadresponse"></a>
<a id="schema_FacilityReadResponse"></a>
<a id="tocSfacilityreadresponse"></a>
<a id="tocsfacilityreadresponse"></a>

```json
{
  "data": {
    "attributes": {
      "active_status": "A",
      "address": {
        "mailing": {
          "address_1": "50 Irving Street, Northwest",
          "address_2": "Bldg 2",
          "address_3": "Suite 7",
          "city": "Washington",
          "state": "DC",
          "zip": "20422-0001"
        },
        "physical": {
          "address_1": "50 Irving Street, Northwest",
          "address_2": "Bldg 2",
          "address_3": "Suite 7",
          "city": "Washington",
          "state": "DC",
          "zip": "20422-0001"
        }
      },
      "classification": "VA Medical Center (VAMC)",
      "detailed_services": [
        {
          "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
          "appointment_phones": [
            {
              "extension": "71234",
              "label": "Main phone",
              "number": "937-268-6511",
              "type": "tel"
            }
          ],
          "description_facility": "null",
          "name": "COVID-19 vaccines",
          "online_scheduling_available": "True",
          "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
          "referral_required": "False",
          "service_locations": [
            {
              "additional_hours_info": "Location hours times may vary depending on staff availability",
              "appointment_phones": [
                {
                  "extension": "71234",
                  "label": "Main phone",
                  "number": "937-268-6511",
                  "type": "tel"
                }
              ],
              "email_contacts": [
                {
                  "email_address": "georgea@va.gov",
                  "email_label": "George Anderson"
                }
              ],
              "facility_service_hours": {
                "Friday": "9AM-5PM",
                "Monday": "9AM-5PM",
                "Saturday": "Closed",
                "Sunday": "Closed",
                "Thursday": "9AM-5PM",
                "Tuesday": "9AM-5PM",
                "Wednesday": "9AM-5PM"
              },
              "service_location_address": {
                "address_line1": "50 Irving Street, Northwest",
                "address_line2": "string",
                "building_name_number": "Baxter Building",
                "city": "Washington",
                "clinic_name": "Baxter Clinic",
                "country_code": "US",
                "state": "DC",
                "wing_floor_or_room_number": "Wing East",
                "zip_code": "20422-0001"
              }
            }
          ],
          "walk_ins_accepted": "True"
        }
      ],
      "facility_type": "va_health_facility",
      "hours": {
        "friday": "9AM-5PM",
        "monday": "9AM-5PM",
        "saturday": "Closed",
        "sunday": "Closed",
        "thursday": "9AM-5PM",
        "tuesday": "9AM-5PM",
        "wednesday": "9AM-5PM"
      },
      "lat": 38.9311137,
      "long": -77.0109110499999,
      "mobile": false,
      "name": "Washington VA Medical Center",
      "operating_status": "NORMAL",
      "operational_hours_special_instructions": "Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.",
      "phone": {
        "after_hours": "202-555-1212",
        "enrollment_coordinator": "202-555-1212",
        "fax": "202-555-1212",
        "main": "202-555-1212",
        "mental_health_clinic": "202-555-1212",
        "patient_advocate": "202-555-1212",
        "pharmacy": "202-555-1212"
      },
      "satisfaction": {
        "effective_date": "2018-01-01",
        "health": {
          "primary_care_routine": 0.85,
          "primary_care_urgent": 0.85,
          "specialty_care_routine": 0.85,
          "specialty_care_urgent": 0.85
        }
      },
      "services": {
        "benefits": [
          "ApplyingForBenefits"
        ],
        "health": [
          "Audiology"
        ],
        "last_updated": "2018-01-01",
        "other": [
          "OnlineScheduling"
        ]
      },
      "time_zone": "America/New_York",
      "visn": "20",
      "wait_times": 10,
      "website": "http://www.washingtondc.va.gov"
    },
    "id": "vha_688",
    "type": "va_facilities"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Facility](#schemafacility)|true|none|JSON API-compliant object describing a VA facility|

<h2 id="tocS_GenericError">GenericError</h2>
<!-- backwards compatibility -->
<a id="schemagenericerror"></a>
<a id="schema_GenericError"></a>
<a id="tocSgenericerror"></a>
<a id="tocsgenericerror"></a>

```json
{
  "message": "Detailed Error Message"
}
```

A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_GeoFacilitiesResponse">GeoFacilitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemageofacilitiesresponse"></a>
<a id="schema_GeoFacilitiesResponse"></a>
<a id="tocSgeofacilitiesresponse"></a>
<a id="tocsgeofacilitiesresponse"></a>

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          -77.0367761,
          38.9004181
        ],
        "type": "Point"
      },
      "properties": {
        "active_status": "A",
        "address": {
          "mailing": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          },
          "physical": {
            "address_1": "50 Irving Street, Northwest",
            "address_2": "Bldg 2",
            "address_3": "Suite 7",
            "city": "Washington",
            "state": "DC",
            "zip": "20422-0001"
          }
        },
        "classification": "VA Medical Center (VAMC)",
        "detailed_services": [
          {
            "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "description_facility": "null",
            "name": "COVID-19 vaccines",
            "online_scheduling_available": "True",
            "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
            "referral_required": "False",
            "service_locations": [
              {
                "additional_hours_info": "Location hours times may vary depending on staff availability",
                "appointment_phones": [
                  {
                    "extension": "71234",
                    "label": "Main phone",
                    "number": "937-268-6511",
                    "type": "tel"
                  }
                ],
                "email_contacts": [
                  {
                    "email_address": "georgea@va.gov",
                    "email_label": "George Anderson"
                  }
                ],
                "facility_service_hours": {
                  "Friday": "9AM-5PM",
                  "Monday": "9AM-5PM",
                  "Saturday": "Closed",
                  "Sunday": "Closed",
                  "Thursday": "9AM-5PM",
                  "Tuesday": "9AM-5PM",
                  "Wednesday": "9AM-5PM"
                },
                "service_location_address": {
                  "address_line1": "50 Irving Street, Northwest",
                  "address_line2": "string",
                  "building_name_number": "Baxter Building",
                  "city": "Washington",
                  "clinic_name": "Baxter Clinic",
                  "country_code": "US",
                  "state": "DC",
                  "wing_floor_or_room_number": "Wing East",
                  "zip_code": "20422-0001"
                }
              }
            ],
            "walk_ins_accepted": "True"
          }
        ],
        "facility_type": "va_benefits_facility",
        "hours": {
          "friday": "9AM-5PM",
          "monday": "9AM-5PM",
          "saturday": "Closed",
          "sunday": "Closed",
          "thursday": "9AM-5PM",
          "tuesday": "9AM-5PM",
          "wednesday": "9AM-5PM"
        },
        "id": "vha_688",
        "mobile": false,
        "name": "Washington VA Medical Center",
        "operating_status": "NORMAL",
        "operational_hours_special_instructions": "Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.",
        "phone": {
          "after_hours": "202-555-1212",
          "enrollment_coordinator": "202-555-1212",
          "fax": "202-555-1212",
          "main": "202-555-1212",
          "mental_health_clinic": "202-555-1212",
          "patient_advocate": "202-555-1212",
          "pharmacy": "202-555-1212"
        },
        "satisfaction": {
          "effective_date": "2018-01-01",
          "health": {
            "primary_care_routine": 0.85,
            "primary_care_urgent": 0.85,
            "specialty_care_routine": 0.85,
            "specialty_care_urgent": 0.85
          }
        },
        "services": {
          "benefits": [
            "ApplyingForBenefits"
          ],
          "health": [
            "Audiology"
          ],
          "last_updated": "2018-01-01",
          "other": [
            "OnlineScheduling"
          ]
        },
        "time_zone": "America/New_York",
        "visn": "20",
        "wait_times": 10,
        "website": "http://www.washingtondc.va.gov"
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[GeoFacility](#schemageofacility)]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_GeoFacility">GeoFacility</h2>
<!-- backwards compatibility -->
<a id="schemageofacility"></a>
<a id="schema_GeoFacility"></a>
<a id="tocSgeofacility"></a>
<a id="tocsgeofacility"></a>

```json
{
  "geometry": {
    "coordinates": [
      -77.0367761,
      38.9004181
    ],
    "type": "Point"
  },
  "properties": {
    "active_status": "A",
    "address": {
      "mailing": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      },
      "physical": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      }
    },
    "classification": "VA Medical Center (VAMC)",
    "detailed_services": [
      {
        "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
        "appointment_phones": [
          {
            "extension": "71234",
            "label": "Main phone",
            "number": "937-268-6511",
            "type": "tel"
          }
        ],
        "description_facility": "null",
        "name": "COVID-19 vaccines",
        "online_scheduling_available": "True",
        "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
        "referral_required": "False",
        "service_locations": [
          {
            "additional_hours_info": "Location hours times may vary depending on staff availability",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "email_contacts": [
              {
                "email_address": "georgea@va.gov",
                "email_label": "George Anderson"
              }
            ],
            "facility_service_hours": {
              "Friday": "9AM-5PM",
              "Monday": "9AM-5PM",
              "Saturday": "Closed",
              "Sunday": "Closed",
              "Thursday": "9AM-5PM",
              "Tuesday": "9AM-5PM",
              "Wednesday": "9AM-5PM"
            },
            "service_location_address": {
              "address_line1": "50 Irving Street, Northwest",
              "address_line2": "string",
              "building_name_number": "Baxter Building",
              "city": "Washington",
              "clinic_name": "Baxter Clinic",
              "country_code": "US",
              "state": "DC",
              "wing_floor_or_room_number": "Wing East",
              "zip_code": "20422-0001"
            }
          }
        ],
        "walk_ins_accepted": "True"
      }
    ],
    "facility_type": "va_benefits_facility",
    "hours": {
      "friday": "9AM-5PM",
      "monday": "9AM-5PM",
      "saturday": "Closed",
      "sunday": "Closed",
      "thursday": "9AM-5PM",
      "tuesday": "9AM-5PM",
      "wednesday": "9AM-5PM"
    },
    "id": "vha_688",
    "mobile": false,
    "name": "Washington VA Medical Center",
    "operating_status": "NORMAL",
    "operational_hours_special_instructions": "Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.",
    "phone": {
      "after_hours": "202-555-1212",
      "enrollment_coordinator": "202-555-1212",
      "fax": "202-555-1212",
      "main": "202-555-1212",
      "mental_health_clinic": "202-555-1212",
      "patient_advocate": "202-555-1212",
      "pharmacy": "202-555-1212"
    },
    "satisfaction": {
      "effective_date": "2018-01-01",
      "health": {
        "primary_care_routine": 0.85,
        "primary_care_urgent": 0.85,
        "specialty_care_routine": 0.85,
        "specialty_care_urgent": 0.85
      }
    },
    "services": {
      "benefits": [
        "ApplyingForBenefits"
      ],
      "health": [
        "Audiology"
      ],
      "last_updated": "2018-01-01",
      "other": [
        "OnlineScheduling"
      ]
    },
    "time_zone": "America/New_York",
    "visn": "20",
    "wait_times": 10,
    "website": "http://www.washingtondc.va.gov"
  },
  "type": "Feature"
}
```

GeoJSON-complaint Feature object describing a VA Facility

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|none|
|properties|[Properties](#schemaproperties)|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_GeoFacilityReadResponse">GeoFacilityReadResponse</h2>
<!-- backwards compatibility -->
<a id="schemageofacilityreadresponse"></a>
<a id="schema_GeoFacilityReadResponse"></a>
<a id="tocSgeofacilityreadresponse"></a>
<a id="tocsgeofacilityreadresponse"></a>

```json
{
  "geometry": {
    "coordinates": [
      -77.0367761,
      38.9004181
    ],
    "type": "Point"
  },
  "properties": {
    "active_status": "A",
    "address": {
      "mailing": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      },
      "physical": {
        "address_1": "50 Irving Street, Northwest",
        "address_2": "Bldg 2",
        "address_3": "Suite 7",
        "city": "Washington",
        "state": "DC",
        "zip": "20422-0001"
      }
    },
    "classification": "VA Medical Center (VAMC)",
    "detailed_services": [
      {
        "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
        "appointment_phones": [
          {
            "extension": "71234",
            "label": "Main phone",
            "number": "937-268-6511",
            "type": "tel"
          }
        ],
        "description_facility": "null",
        "name": "COVID-19 vaccines",
        "online_scheduling_available": "True",
        "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
        "referral_required": "False",
        "service_locations": [
          {
            "additional_hours_info": "Location hours times may vary depending on staff availability",
            "appointment_phones": [
              {
                "extension": "71234",
                "label": "Main phone",
                "number": "937-268-6511",
                "type": "tel"
              }
            ],
            "email_contacts": [
              {
                "email_address": "georgea@va.gov",
                "email_label": "George Anderson"
              }
            ],
            "facility_service_hours": {
              "Friday": "9AM-5PM",
              "Monday": "9AM-5PM",
              "Saturday": "Closed",
              "Sunday": "Closed",
              "Thursday": "9AM-5PM",
              "Tuesday": "9AM-5PM",
              "Wednesday": "9AM-5PM"
            },
            "service_location_address": {
              "address_line1": "50 Irving Street, Northwest",
              "address_line2": "string",
              "building_name_number": "Baxter Building",
              "city": "Washington",
              "clinic_name": "Baxter Clinic",
              "country_code": "US",
              "state": "DC",
              "wing_floor_or_room_number": "Wing East",
              "zip_code": "20422-0001"
            }
          }
        ],
        "walk_ins_accepted": "True"
      }
    ],
    "facility_type": "va_benefits_facility",
    "hours": {
      "friday": "9AM-5PM",
      "monday": "9AM-5PM",
      "saturday": "Closed",
      "sunday": "Closed",
      "thursday": "9AM-5PM",
      "tuesday": "9AM-5PM",
      "wednesday": "9AM-5PM"
    },
    "id": "vha_688",
    "mobile": false,
    "name": "Washington VA Medical Center",
    "operating_status": "NORMAL",
    "operational_hours_special_instructions": "Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.",
    "phone": {
      "after_hours": "202-555-1212",
      "enrollment_coordinator": "202-555-1212",
      "fax": "202-555-1212",
      "main": "202-555-1212",
      "mental_health_clinic": "202-555-1212",
      "patient_advocate": "202-555-1212",
      "pharmacy": "202-555-1212"
    },
    "satisfaction": {
      "effective_date": "2018-01-01",
      "health": {
        "primary_care_routine": 0.85,
        "primary_care_urgent": 0.85,
        "specialty_care_routine": 0.85,
        "specialty_care_urgent": 0.85
      }
    },
    "services": {
      "benefits": [
        "ApplyingForBenefits"
      ],
      "health": [
        "Audiology"
      ],
      "last_updated": "2018-01-01",
      "other": [
        "OnlineScheduling"
      ]
    },
    "time_zone": "America/New_York",
    "visn": "20",
    "wait_times": 10,
    "website": "http://www.washingtondc.va.gov"
  },
  "type": "Feature"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|none|
|properties|[Properties](#schemaproperties)|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "coordinates": [
    -77.0367761,
    38.9004181
  ],
  "type": "Point"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[number \| null]|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|

<h2 id="tocS_Hours">Hours</h2>
<!-- backwards compatibility -->
<a id="schemahours"></a>
<a id="schema_Hours"></a>
<a id="tocShours"></a>
<a id="tocshours"></a>

```json
{
  "friday": "9AM-5PM",
  "monday": "9AM-5PM",
  "saturday": "Closed",
  "sunday": "Closed",
  "thursday": "9AM-5PM",
  "tuesday": "9AM-5PM",
  "wednesday": "9AM-5PM"
}
```

Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|friday|string \| null|false|none|none|
|monday|string \| null|false|none|none|
|saturday|string \| null|false|none|none|
|sunday|string \| null|false|none|none|
|thursday|string \| null|false|none|none|
|tuesday|string \| null|false|none|none|
|wednesday|string \| null|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "band_version": "APR2021"
}
```

JSON API-compliant object containing metadata about this response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|band_version|string \| null|false|none|none|

<h2 id="tocS_Nearby">Nearby</h2>
<!-- backwards compatibility -->
<a id="schemanearby"></a>
<a id="schema_Nearby"></a>
<a id="tocSnearby"></a>
<a id="tocsnearby"></a>

```json
{
  "attributes": {
    "max_time": 20,
    "min_time": 10
  },
  "id": "vha_688",
  "type": "va_health_facility"
}
```

JSON API-compliant object describing a nearby VA facility

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[NearbyAttributes](#schemanearbyattributes)|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NearbyFacility|

<h2 id="tocS_NearbyAttributes">NearbyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanearbyattributes"></a>
<a id="schema_NearbyAttributes"></a>
<a id="tocSnearbyattributes"></a>
<a id="tocsnearbyattributes"></a>

```json
{
  "max_time": 20,
  "min_time": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_time|integer(int32)|true|none|none|
|min_time|integer(int32)|true|none|none|

<h2 id="tocS_NearbyResponse">NearbyResponse</h2>
<!-- backwards compatibility -->
<a id="schemanearbyresponse"></a>
<a id="schema_NearbyResponse"></a>
<a id="tocSnearbyresponse"></a>
<a id="tocsnearbyresponse"></a>

```json
{
  "data": [
    {
      "attributes": {
        "max_time": 20,
        "min_time": 10
      },
      "id": "vha_688",
      "type": "va_health_facility"
    }
  ],
  "meta": {
    "band_version": "APR2021"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Nearby](#schemanearby)]|true|none|none|
|meta|[Meta](#schemameta)|false|none|JSON API-compliant object containing metadata about this response|

<h2 id="tocS_OperatingStatus">OperatingStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingstatus"></a>
<a id="schema_OperatingStatus"></a>
<a id="tocSoperatingstatus"></a>
<a id="tocsoperatingstatus"></a>

```json
"NORMAL"
```

Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_info|string \| null|false|none|Details of facility notices for visitors, such as messages about parking lot closures or floor visitation information.|
|code|string \| null|true|none|Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|NORMAL|
|code|NOTICE|
|code|LIMITED|
|code|CLOSED|

<h2 id="tocS_PageLinks">PageLinks</h2>
<!-- backwards compatibility -->
<a id="schemapagelinks"></a>
<a id="schema_PageLinks"></a>
<a id="tocSpagelinks"></a>
<a id="tocspagelinks"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "prev": "string",
  "related": "string",
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string \| null|false|none|none|
|last|string \| null|false|none|none|
|next|string \| null|false|none|none|
|prev|string \| null|false|none|none|
|related|string \| null|false|none|/services/va_facilities/v0/facilities?id=vha_688|
|self|string|true|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "current_page": 1,
  "per_page": 10,
  "total_entries": 2162,
  "total_pages": 217
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer(int32)|true|none|none|
|per_page|integer(int32)|true|none|none|
|total_entries|integer(int32)|true|none|none|
|total_pages|integer(int32)|true|none|none|

<h2 id="tocS_PatientSatisfaction">PatientSatisfaction</h2>
<!-- backwards compatibility -->
<a id="schemapatientsatisfaction"></a>
<a id="schema_PatientSatisfaction"></a>
<a id="tocSpatientsatisfaction"></a>
<a id="tocspatientsatisfaction"></a>

```json
{
  "primary_care_routine": 0.85,
  "primary_care_urgent": 0.85,
  "specialty_care_routine": 0.85,
  "specialty_care_urgent": 0.85
}
```

Veteran-reported satisfaction scores for health care services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary_care_routine|number(float) \| null|false|none|% of Veterans who say they usually or always get an appointment when they need it at a primary care location.|
|primary_care_urgent|number(float) \| null|false|none|% of Veterans who say they usually or always get an appointment when they need care right away at a primary care location.|
|specialty_care_routine|number(float) \| null|false|none|% of Veterans who say they usually or always get an appointment when they need it at a specialty location.|
|specialty_care_urgent|number(float) \| null|false|none|% of Veterans who say they usually or always get an appointment when they need care right away at a specialty location.|

<h2 id="tocS_PatientWaitTime">PatientWaitTime</h2>
<!-- backwards compatibility -->
<a id="schemapatientwaittime"></a>
<a id="schema_PatientWaitTime"></a>
<a id="tocSpatientwaittime"></a>
<a id="tocspatientwaittime"></a>

```json
{
  "established": 5,
  "new": 10,
  "service": "Audiology"
}
```

Expected wait times for new and established patients for a given health care service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|established|number \| null|false|none|Average number of days a patient who has already been to this location has to wait for a non-urgent appointment.|
|new|number \| null|false|none|Average number of days a Veteran who hasn't been to this location has to wait for a non-urgent appointment.|
|service|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|service|Audiology|
|service|Cardiology|
|service|CaregiverSupport|
|service|Covid19Vaccine|
|service|DentalServices|
|service|Dermatology|
|service|EmergencyCare|
|service|Gastroenterology|
|service|Gynecology|
|service|MentalHealthCare|
|service|Ophthalmology|
|service|Optometry|
|service|Orthopedics|
|service|Nutrition|
|service|Podiatry|
|service|PrimaryCare|
|service|SpecialtyCare|
|service|UrgentCare|
|service|Urology|
|service|WomensHealth|

<h2 id="tocS_Phone">Phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_Phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "after_hours": "202-555-1212",
  "enrollment_coordinator": "202-555-1212",
  "fax": "202-555-1212",
  "main": "202-555-1212",
  "mental_health_clinic": "202-555-1212",
  "patient_advocate": "202-555-1212",
  "pharmacy": "202-555-1212"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after_hours|string \| null|false|none|none|
|enrollment_coordinator|string \| null|false|none|none|
|fax|string \| null|false|none|none|
|main|string \| null|false|none|none|
|mental_health_clinic|string \| null|false|none|none|
|patient_advocate|string \| null|false|none|none|
|pharmacy|string \| null|false|none|none|

<h2 id="tocS_Properties">Properties</h2>
<!-- backwards compatibility -->
<a id="schemaproperties"></a>
<a id="schema_Properties"></a>
<a id="tocSproperties"></a>
<a id="tocsproperties"></a>

```json
{
  "active_status": "A",
  "address": {
    "mailing": {
      "address_1": "50 Irving Street, Northwest",
      "address_2": "Bldg 2",
      "address_3": "Suite 7",
      "city": "Washington",
      "state": "DC",
      "zip": "20422-0001"
    },
    "physical": {
      "address_1": "50 Irving Street, Northwest",
      "address_2": "Bldg 2",
      "address_3": "Suite 7",
      "city": "Washington",
      "state": "DC",
      "zip": "20422-0001"
    }
  },
  "classification": "VA Medical Center (VAMC)",
  "detailed_services": [
    {
      "appointment_leadin": "Your VA health care team will contact you if you???re eligible to get a vaccine during this time. As the supply of vaccine increases, we'll work with our care teams to let Veterans know their options.",
      "appointment_phones": [
        {
          "extension": "71234",
          "label": "Main phone",
          "number": "937-268-6511",
          "type": "tel"
        }
      ],
      "description_facility": "null",
      "name": "COVID-19 vaccines",
      "online_scheduling_available": "True",
      "path": "https://www.boston.va.gov/services/covid-19-vaccines.asp",
      "referral_required": "False",
      "service_locations": [
        {
          "additional_hours_info": "Location hours times may vary depending on staff availability",
          "appointment_phones": [
            {
              "extension": "71234",
              "label": "Main phone",
              "number": "937-268-6511",
              "type": "tel"
            }
          ],
          "email_contacts": [
            {
              "email_address": "georgea@va.gov",
              "email_label": "George Anderson"
            }
          ],
          "facility_service_hours": {
            "Friday": "9AM-5PM",
            "Monday": "9AM-5PM",
            "Saturday": "Closed",
            "Sunday": "Closed",
            "Thursday": "9AM-5PM",
            "Tuesday": "9AM-5PM",
            "Wednesday": "9AM-5PM"
          },
          "service_location_address": {
            "address_line1": "50 Irving Street, Northwest",
            "address_line2": "string",
            "building_name_number": "Baxter Building",
            "city": "Washington",
            "clinic_name": "Baxter Clinic",
            "country_code": "US",
            "state": "DC",
            "wing_floor_or_room_number": "Wing East",
            "zip_code": "20422-0001"
          }
        }
      ],
      "walk_ins_accepted": "True"
    }
  ],
  "facility_type": "va_benefits_facility",
  "hours": {
    "friday": "9AM-5PM",
    "monday": "9AM-5PM",
    "saturday": "Closed",
    "sunday": "Closed",
    "thursday": "9AM-5PM",
    "tuesday": "9AM-5PM",
    "wednesday": "9AM-5PM"
  },
  "id": "vha_688",
  "mobile": false,
  "name": "Washington VA Medical Center",
  "operating_status": "NORMAL",
  "operational_hours_special_instructions": "Administrative hours are Monday-Friday 8:00 a.m. to 4:30 p.m.",
  "phone": {
    "after_hours": "202-555-1212",
    "enrollment_coordinator": "202-555-1212",
    "fax": "202-555-1212",
    "main": "202-555-1212",
    "mental_health_clinic": "202-555-1212",
    "patient_advocate": "202-555-1212",
    "pharmacy": "202-555-1212"
  },
  "satisfaction": {
    "effective_date": "2018-01-01",
    "health": {
      "primary_care_routine": 0.85,
      "primary_care_urgent": 0.85,
      "specialty_care_routine": 0.85,
      "specialty_care_urgent": 0.85
    }
  },
  "services": {
    "benefits": [
      "ApplyingForBenefits"
    ],
    "health": [
      "Audiology"
    ],
    "last_updated": "2018-01-01",
    "other": [
      "OnlineScheduling"
    ]
  },
  "time_zone": "America/New_York",
  "visn": "20",
  "wait_times": 10,
  "website": "http://www.washingtondc.va.gov"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_status|string \| null|false|none|none|
|address|[Addresses](#schemaaddresses)|false|none|none|
|classification|string \| null|false|none|none|
|detailed_services|[[DetailedService](#schemadetailedservice)]|false|none|none|
|facility_type|string|true|none|none|
|hours|[Hours](#schemahours)|false|none|Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events.|
|id|string|true|none|none|
|mobile|boolean \| null|false|none|none|
|name|string \| null|false|none|none|
|operating_status|[OperatingStatus](#schemaoperatingstatus)|true|none|Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.|
|operational_hours_special_instructions|string \| null|false|none|none|
|phone|[Phone](#schemaphone)|false|none|none|
|satisfaction|[Satisfaction](#schemasatisfaction)|false|none|none|
|services|[Services](#schemaservices)|false|none|none|
|time_zone|string(String)|false|none|Facility time zone|
|visn|string \| null|false|none|none|
|wait_times|[WaitTimes](#schemawaittimes)|false|none|none|
|website|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|active_status|A|
|active_status|T|
|facility_type|va_benefits_facility|
|facility_type|va_cemetery|
|facility_type|va_health_facility|
|facility_type|vet_center|

<h2 id="tocS_Satisfaction">Satisfaction</h2>
<!-- backwards compatibility -->
<a id="schemasatisfaction"></a>
<a id="schema_Satisfaction"></a>
<a id="tocSsatisfaction"></a>
<a id="tocssatisfaction"></a>

```json
{
  "effective_date": "2018-01-01",
  "health": {
    "primary_care_routine": 0.85,
    "primary_care_urgent": 0.85,
    "specialty_care_routine": 0.85,
    "specialty_care_urgent": 0.85
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effective_date|string(date) \| null|false|none|none|
|health|[PatientSatisfaction](#schemapatientsatisfaction)|false|none|Veteran-reported satisfaction scores for health care services|

<h2 id="tocS_Services">Services</h2>
<!-- backwards compatibility -->
<a id="schemaservices"></a>
<a id="schema_Services"></a>
<a id="tocSservices"></a>
<a id="tocsservices"></a>

```json
{
  "benefits": [
    "ApplyingForBenefits"
  ],
  "health": [
    "Audiology"
  ],
  "last_updated": "2018-01-01",
  "other": [
    "OnlineScheduling"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefits|[string \| null]|false|none|none|
|health|[string \| null]|false|none|none|
|last_updated|string(date) \| null|false|none|none|
|other|[string \| null]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|benefits|ApplyingForBenefits|
|benefits|BurialClaimAssistance|
|benefits|DisabilityClaimAssistance|
|benefits|eBenefitsRegistrationAssistance|
|benefits|EducationAndCareerCounseling|
|benefits|EducationClaimAssistance|
|benefits|FamilyMemberClaimAssistance|
|benefits|HomelessAssistance|
|benefits|InsuranceClaimAssistanceAndFinancialCounseling|
|benefits|IntegratedDisabilityEvaluationSystemAssistance|
|benefits|Pensions|
|benefits|PreDischargeClaimAssistance|
|benefits|TransitionAssistance|
|benefits|UpdatingDirectDepositInformation|
|benefits|VAHomeLoanAssistance|
|benefits|VocationalRehabilitationAndEmploymentAssistance|
|health|Audiology|
|health|Cardiology|
|health|CaregiverSupport|
|health|Covid19Vaccine|
|health|DentalServices|
|health|Dermatology|
|health|EmergencyCare|
|health|Gastroenterology|
|health|Gynecology|
|health|MentalHealthCare|
|health|Ophthalmology|
|health|Optometry|
|health|Orthopedics|
|health|Nutrition|
|health|Podiatry|
|health|PrimaryCare|
|health|SpecialtyCare|
|health|UrgentCare|
|health|Urology|
|health|WomensHealth|
|other|OnlineScheduling|

<h2 id="tocS_WaitTimes">WaitTimes</h2>
<!-- backwards compatibility -->
<a id="schemawaittimes"></a>
<a id="schema_WaitTimes"></a>
<a id="tocSwaittimes"></a>
<a id="tocswaittimes"></a>

```json
10
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effective_date|string(date) \| null|false|none|none|
|health|[[PatientWaitTime](#schemapatientwaittime)]|false|none|none|
