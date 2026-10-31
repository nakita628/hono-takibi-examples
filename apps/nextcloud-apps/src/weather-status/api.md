<h1 id="weatherstatus">weather_status v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Weather status in your dashboard

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="weatherstatus-weatherstatus">weather_status</h1>

## Change the weather status mode. There are currently 2 modes: - ask the browser - use the user defined address

<a id="opIdweather_status-set-mode"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/mode \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "mode": 0
  }'
```

`PUT /ocs/v2.php/apps/weather_status/api/v1/mode`

> Body parameter

```json
{
  "mode": 0
}
```

<h3 id="change-the-weather-status-mode-there-are-currently-2-modes---ask-the-browser---use-the-user-defined-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» mode|body|integer(int64)|true|New mode|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "success": true
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="change-the-weather-status-mode-there-are-currently-2-modes---ask-the-browser---use-the-user-defined-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Weather status mode updated|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="change-the-weather-status-mode-there-are-currently-2-modes---ask-the-browser---use-the-user-defined-address-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Success](#schemasuccess)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Try to use the address set in user personal settings as weather location

<a id="opIdweather_status-use-personal-address"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/use-personal \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`PUT /ocs/v2.php/apps/weather_status/api/v1/use-personal`

<h3 id="try-to-use-the-address-set-in-user-personal-settings-as-weather-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "lat": "string",
      "lon": "string",
      "address": "string",
      "success": true
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="try-to-use-the-address-set-in-user-personal-settings-as-weather-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Address updated|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="try-to-use-the-address-set-in-user-personal-settings-as-weather-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[LocationWithSuccess](#schemalocationwithsuccess)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get stored user location

<a id="opIdweather_status-get-location"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/location \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/weather_status/api/v1/location`

<h3 id="get-stored-user-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "lat": "string",
      "lon": "string",
      "address": "string",
      "mode": 0
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-stored-user-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Location returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-stored-user-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[LocationWithMode](#schemalocationwithmode)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Set address and resolve it to get coordinates or directly set coordinates and get address with reverse geocoding

<a id="opIdweather_status-set-location"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/location \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "address": "string",
    "lat": 0,
    "lon": 0
  }'
```

`PUT /ocs/v2.php/apps/weather_status/api/v1/location`

> Body parameter

```json
{
  "address": "string",
  "lat": 0,
  "lon": 0
}
```

<h3 id="set-address-and-resolve-it-to-get-coordinates-or-directly-set-coordinates-and-get-address-with-reverse-geocoding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» address|body|string \| null|false|Any approximative or exact address|
|» lat|body|number(double) \| null|false|Latitude in decimal degree format|
|» lon|body|number(double) \| null|false|Longitude in decimal degree format|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "lat": "string",
      "lon": "string",
      "address": "string",
      "success": true
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="set-address-and-resolve-it-to-get-coordinates-or-directly-set-coordinates-and-get-address-with-reverse-geocoding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Location updated|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="set-address-and-resolve-it-to-get-coordinates-or-directly-set-coordinates-and-get-address-with-reverse-geocoding-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[LocationWithSuccess](#schemalocationwithsuccess)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get forecast for current location

<a id="opIdweather_status-get-forecast"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/forecast \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/weather_status/api/v1/forecast`

<h3 id="get-forecast-for-current-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      {
        "time": "string",
        "data": {
          "instant": {
            "details": {
              "air_pressure_at_sea_level": 0,
              "air_temperature": 0,
              "cloud_area_fraction": 0,
              "relative_humidity": 0,
              "wind_from_direction": 0,
              "wind_speed": 0
            }
          },
          "next_12_hours": {
            "summary": {
              "symbol_code": "string"
            },
            "details": {
              "precipitation_amount": 0
            }
          },
          "next_1_hours": {
            "summary": {
              "symbol_code": "string"
            },
            "details": {
              "precipitation_amount": 0
            }
          },
          "next_6_hours": {
            "summary": {
              "symbol_code": "string"
            },
            "details": {
              "precipitation_amount": 0
            }
          }
        }
      }
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "success": true
    }
  }
}
```

<h3 id="get-forecast-for-current-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Forecast returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Forecast not found|Inline|

<h3 id="get-forecast-for-current-location-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Forecast](#schemaforecast)] \| object|true|none|none|
|» » *oneOf*|[[Forecast](#schemaforecast)]|false|none|none|
|*anonymous*|[[Forecast](#schemaforecast)]|false|none|none|
|» » *oneOf*|object|false|none|none|
|» » error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Success](#schemasuccess)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get favorites list

<a id="opIdweather_status-get-favorites"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/favorites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/weather_status/api/v1/favorites`

<h3 id="get-favorites-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-favorites-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Favorites returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-favorites-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Set favorites list

<a id="opIdweather_status-set-favorites"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/weather_status/api/v1/favorites \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "favorites": [
      "string"
    ]
  }'
```

`PUT /ocs/v2.php/apps/weather_status/api/v1/favorites`

> Body parameter

```json
{
  "favorites": [
    "string"
  ]
}
```

<h3 id="set-favorites-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» favorites|body|[string]|true|Favorite addresses|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "success": true
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="set-favorites-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Favorites updated|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="set-favorites-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Success](#schemasuccess)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "weather_status": {
    "enabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weather_status|object|true|none|none|

<h2 id="tocS_Forecast">Forecast</h2>
<!-- backwards compatibility -->
<a id="schemaforecast"></a>
<a id="schema_Forecast"></a>
<a id="tocSforecast"></a>
<a id="tocsforecast"></a>

```json
{
  "time": "string",
  "data": {
    "instant": {
      "details": {
        "air_pressure_at_sea_level": 0,
        "air_temperature": 0,
        "cloud_area_fraction": 0,
        "relative_humidity": 0,
        "wind_from_direction": 0,
        "wind_speed": 0
      }
    },
    "next_12_hours": {
      "summary": {
        "symbol_code": "string"
      },
      "details": {
        "precipitation_amount": 0
      }
    },
    "next_1_hours": {
      "summary": {
        "symbol_code": "string"
      },
      "details": {
        "precipitation_amount": 0
      }
    },
    "next_6_hours": {
      "summary": {
        "symbol_code": "string"
      },
      "details": {
        "precipitation_amount": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "lat": "string",
  "lon": "string",
  "address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|string|false|none|none|
|lon|string|false|none|none|
|address|string \| null|false|none|none|

<h2 id="tocS_LocationWithMode">LocationWithMode</h2>
<!-- backwards compatibility -->
<a id="schemalocationwithmode"></a>
<a id="schema_LocationWithMode"></a>
<a id="tocSlocationwithmode"></a>
<a id="tocslocationwithmode"></a>

```json
{
  "lat": "string",
  "lon": "string",
  "address": "string",
  "mode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|string|false|none|none|
|lon|string|false|none|none|
|address|string \| null|false|none|none|
|mode|integer(int64)|true|none|none|

<h2 id="tocS_LocationWithSuccess">LocationWithSuccess</h2>
<!-- backwards compatibility -->
<a id="schemalocationwithsuccess"></a>
<a id="schema_LocationWithSuccess"></a>
<a id="tocSlocationwithsuccess"></a>
<a id="tocslocationwithsuccess"></a>

```json
{
  "lat": "string",
  "lon": "string",
  "address": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|string|false|none|none|
|lon|string|false|none|none|
|address|string \| null|false|none|none|
|success|boolean|true|none|none|

<h2 id="tocS_Mode">Mode</h2>
<!-- backwards compatibility -->
<a id="schemamode"></a>
<a id="schema_Mode"></a>
<a id="tocSmode"></a>
<a id="tocsmode"></a>

```json
{
  "mode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|integer(int64)|true|none|none|

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
