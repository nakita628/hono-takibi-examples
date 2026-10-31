<h1 id="lambdatest-screenshots-api-documentation">LambdaTest Screenshots API Documentation v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.lambdatest.com/screenshots/v1">https://api.lambdatest.com/screenshots/v1</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="lambdatest-screenshots-api-documentation-start-screenshot-test">Start Screenshot Test</h1>

## Start Screenshot Test

<a id="opIdStart Screenshot Test"></a>

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "configs": {
      "android 9.0": {
        "devices": [
          "galaxy s9 plus"
        ]
      },
      "ios 12.0": {
        "devices": [
          "iphone xr",
          "iphone xs",
          "iphone xs max"
        ]
      },
      "macos mojave": {
        "chrome": [
          "76",
          "75"
        ],
        "firefox": [
          "67",
          "66"
        ],
        "opera": [
          "58",
          "57"
        ],
        "safari": [
          "12"
        ]
      },
      "windows 10": {
        "chrome": [
          "76",
          "75"
        ],
        "firefox": [
          "67",
          "66"
        ],
        "ie": [
          "11"
        ],
        "opera": [
          "58",
          "57"
        ]
      }
    },
    "defer_time": 5,
    "email": true,
    "layout": "portrait",
    "mac_res": "1024x768",
    "smart_scroll": true,
    "url": "https://www.lambdatest.com",
    "win_res": "1366X768"
  }'
```

`POST /`

Start Screenshot Test

> Body parameter

```json
{
  "configs": {
    "android 9.0": {
      "devices": [
        "galaxy s9 plus"
      ]
    },
    "ios 12.0": {
      "devices": [
        "iphone xr",
        "iphone xs",
        "iphone xs max"
      ]
    },
    "macos mojave": {
      "chrome": [
        "76",
        "75"
      ],
      "firefox": [
        "67",
        "66"
      ],
      "opera": [
        "58",
        "57"
      ],
      "safari": [
        "12"
      ]
    },
    "windows 10": {
      "chrome": [
        "76",
        "75"
      ],
      "firefox": [
        "67",
        "66"
      ],
      "ie": [
        "11"
      ],
      "opera": [
        "58",
        "57"
      ]
    }
  },
  "defer_time": 5,
  "email": true,
  "layout": "portrait",
  "mac_res": "1024x768",
  "smart_scroll": true,
  "url": "https://www.lambdatest.com",
  "win_res": "1366X768"
}
```

<h3 id="start-screenshot-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[screenshot-payload](#schemascreenshot-payload)|true|start screenshot test payload.|
|» callback_url|body|string|false|none|
|» configs|body|object|false|none|
|» » macos mojave|body|[browsers](#schemabrowsers)|false|none|
|» » windows 10|body|[browsers](#schemabrowsers)|false|none|
|» defer_time|body|number|false|none|
|» email|body|boolean|false|none|
|» mac_res|body|string|false|none|
|» password|body|string|false|none|
|» tunnel|body|boolean|false|none|
|» tunnel_identifier|body|string|false|none|
|» url|body|string|false|none|
|» username|body|string|false|none|
|» win_res|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "test_id": "TES100968331562243938913767"
}
```

> 400 Response

```json
{
  "message": "The os, browser, browser_version combination is either unsupported or doesn't exist. Please try again with a different combination."
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Screenshot API is supported only in our premium plans. Please upgrade."
}
```

<h3 id="start-screenshot-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[start-screenshot-success](#schemastart-screenshot-success)|
|400|Bad Request|Bad Request|[start-screenshot-bad-request](#schemastart-screenshot-bad-request)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|
|403|Forbidden|Access denied. Auth error.|[Forbidden](#schemaforbidden)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-devices">Get Devices</h1>

## Fetch all available device combinations.

<a id="opIddevices"></a>

> Code samples

```bash
curl https://example.com/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /devices`

Fetch all os devices combinations available on lambdatest platform.

<h3 id="fetch-all-available-device-combinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|os|query|string|false|Fetch details for a particular OS|

> Example responses

> 200 Response

```json
{
  "android 7.0": {
    "devices": [
      "galaxy j7 max",
      "galaxy s8",
      "galaxy s8+",
      "galaxy tab s3 9.3",
      "huawei honor 6x",
      "nexus 5x",
      "nexus 6p",
      "oppo r9"
    ]
  },
  "ios 12.0": {
    "devices": [
      "iphone xr",
      "iphone xs",
      "iphone xs max"
    ]
  }
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

<h3 id="fetch-all-available-device-combinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[os-devices](#schemaos-devices)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-locations">Get Locations</h1>

## Fetch Locations

<a id="opIdLocations"></a>

> Code samples

```bash
curl https://example.com/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /locations`

Fetch list of available Geolocations

> Example responses

> 200 Response

```json
{
  "locations": [
    {
      "code": "US",
      "name": "United States"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

<h3 id="fetch-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[locations](#schemalocations)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-os-browsers">Get OS-Browsers</h1>

## Fetch all available os-browser combinations.

<a id="opIdos-browsers"></a>

> Code samples

```bash
curl https://example.com/os-browsers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /os-browsers`

Fetch all os browsers combinations available on lambdatest platform.

<h3 id="fetch-all-available-os-browser-combinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|os|query|string|false|Fetch details for a particular OS|

> Example responses

> 200 Response

```json
{
  "macos mojave": {
    "chrome": [
      "76",
      "75"
    ],
    "firefox": [
      "67",
      "66"
    ],
    "opera": [
      "55",
      "54"
    ]
  },
  "windows 10": {
    "chrome": [
      "76",
      "75"
    ],
    "firefox": [
      "67",
      "66"
    ],
    "opera": [
      "55",
      "54"
    ]
  }
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

<h3 id="fetch-all-available-os-browser-combinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[os-browsers](#schemaos-browsers)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-profiles">Get Profiles</h1>

## Fetch login profiles

<a id="opIdProfiles"></a>

> Code samples

```bash
curl https://example.com/profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /profiles`

Fetch login profiles

> Example responses

> 200 Response

```json
{
  "profiles": [
    {
      "name": "lambda-login",
      "profile_config": {
        "credentials": {
          "password": "password",
          "username": "name"
        },
        "locators": {
          "password": {
            "type": "name",
            "value": "password"
          },
          "submit": {
            "type": "css",
            "value": "button.btn-lg"
          },
          "username": {
            "type": "name",
            "value": "email"
          }
        },
        "login_url": "https://accounts.lambdatest.com/login",
        "profile_name": "lambda-login"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

<h3 id="fetch-login-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[profiles](#schemaprofiles)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-resolutions">Get Resolutions</h1>

## Fetch all available resolution on different OS

<a id="opIdResolutions"></a>

> Code samples

```bash
curl https://example.com/resolutions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /resolutions`

Fetch all available resolution on different OS

> Example responses

> 200 Response

```json
{
  "mac_res": [
    "1024x768",
    "1280x1024"
  ],
  "win_res": [
    "1024x768",
    "1280x1024"
  ]
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

<h3 id="fetch-all-available-resolution-on-different-os-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[resolutions](#schemaresolutions)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-stop-screenshot-test">Stop Screenshot Test</h1>

## Stop specified screenshot test

<a id="opIdstop screenshots test"></a>

> Code samples

```bash
curl https://example.com/stop/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /stop/{test_id}`

Stop specified screenshot test

<h3 id="stop-specified-screenshot-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test_id|path|string|true|Test ID that details you want to stop|

> Example responses

> 200 Response

```json
{
  "message": "Test stopped successfully"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Screenshot API is supported only in our premium plans. Please upgrade."
}
```

> 404 Response

```json
{
  "message": "No active Screenshot test found for this test_id"
}
```

<h3 id="stop-specified-screenshot-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[stop-screenshot-success](#schemastop-screenshot-success)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|
|403|Forbidden|Access denied. Auth error.|[Forbidden](#schemaforbidden)|
|404|Not Found|Resource not found|[stop-screenshot-not-found](#schemastop-screenshot-not-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-screenshots">Get Screenshots</h1>

## Fetch specified screenshot details

<a id="opIdscreenshots"></a>

> Code samples

```bash
curl https://example.com/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{test_id}`

To fetch specified screenshot details

<h3 id="fetch-specified-screenshot-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test_id|path|string|true|Test ID that details you want to fetch|

> Example responses

> 200 Response

```json
{
  "callback_url": "https://www.example.com",
  "defer_time": 5,
  "screenshots": [
    {
      "activity_id": "ACT100968331562237283340194",
      "browser": "chrome",
      "browser_version": "76",
      "os": "windows 10",
      "resolution": "1024x768",
      "screenshot_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png",
      "status": "completed",
      "thumbnail_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
    }
  ],
  "test_id": "TES100968331562237283314836",
  "test_status": "completed",
  "url": "https://www.lambdatest.com"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Screenshot API is supported only in our premium plans. Please upgrade."
}
```

> 404 Response

```json
{
  "message": "No data found",
  "reason": "test_id is invalid"
}
```

<h3 id="fetch-specified-screenshot-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[screenshot-test-response](#schemascreenshot-test-response)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|
|403|Forbidden|Access denied. Auth error.|[Forbidden](#schemaforbidden)|
|404|Not Found|Resource not found|[screenshot-not-found](#schemascreenshot-not-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="lambdatest-screenshots-api-documentation-get-zipped-screenshots">Get Zipped Screenshots</h1>

## Fetch Zipped Screenshots

<a id="opIdZippedScreenshots"></a>

> Code samples

```bash
curl https://example.com/string/zip \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /{test_id}/zip`

Fetch Zipped Screenshots

<h3 id="fetch-zipped-screenshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|test_id|path|string|true|Test ID that Zipped Screenshots you want to fetch|

> Example responses

> 200 Response

```json
{
  "url": "https://s3-screenshots.s3.amazonaws.com/screenshots/TES1009632231568637527345629.zip"
}
```

> 401 Response

```json
{
  "message": "Unauthorized"
}
```

> 403 Response

```json
{
  "message": "Screenshot API is supported only in our premium plans. Please upgrade."
}
```

> 404 Response

```json
{
  "message": "No data found",
  "reason": "test_id is invalid"
}
```

<h3 id="fetch-zipped-screenshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[zipped-screenshots-success](#schemazipped-screenshots-success)|
|401|Unauthorized|Access denied. Auth error.|[AccessDenied](#schemaaccessdenied)|
|403|Forbidden|Access denied. Auth error.|[Forbidden](#schemaforbidden)|
|404|Not Found|Resource not found|[screenshot-not-found](#schemascreenshot-not-found)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_AccessDenied">AccessDenied</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdenied"></a>
<a id="schema_AccessDenied"></a>
<a id="tocSaccessdenied"></a>
<a id="tocsaccessdenied"></a>

```json
{
  "message": "Unauthorized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_Forbidden">Forbidden</h2>
<!-- backwards compatibility -->
<a id="schemaforbidden"></a>
<a id="schema_Forbidden"></a>
<a id="tocSforbidden"></a>
<a id="tocsforbidden"></a>

```json
{
  "message": "Screenshot API is supported only in our premium plans. Please upgrade."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_android-7.0">android-7.0</h2>
<!-- backwards compatibility -->
<a id="schemaandroid-7.0"></a>
<a id="schema_android-7.0"></a>
<a id="tocSandroid-7.0"></a>
<a id="tocsandroid-7.0"></a>

```json
{
  "devices": [
    "galaxy j7 max",
    "galaxy s8",
    "galaxy s8+",
    "galaxy tab s3 9.3",
    "huawei honor 6x",
    "nexus 5x",
    "nexus 6p",
    "oppo r9"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[string]|false|none|none|

<h2 id="tocS_android-9.0">android-9.0</h2>
<!-- backwards compatibility -->
<a id="schemaandroid-9.0"></a>
<a id="schema_android-9.0"></a>
<a id="tocSandroid-9.0"></a>
<a id="tocsandroid-9.0"></a>

```json
{
  "devices": [
    "galaxy s9 plus"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[string]|false|none|none|

<h2 id="tocS_browsers">browsers</h2>
<!-- backwards compatibility -->
<a id="schemabrowsers"></a>
<a id="schema_browsers"></a>
<a id="tocSbrowsers"></a>
<a id="tocsbrowsers"></a>

```json
{
  "chrome": [
    "76",
    "75"
  ],
  "firefox": [
    "67",
    "66"
  ],
  "opera": [
    "55",
    "54"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chrome|[string]|false|none|none|
|firefox|[string]|false|none|none|
|opera|[string]|false|none|none|

<h2 id="tocS_ios-12.0">ios-12.0</h2>
<!-- backwards compatibility -->
<a id="schemaios-12.0"></a>
<a id="schema_ios-12.0"></a>
<a id="tocSios-12.0"></a>
<a id="tocsios-12.0"></a>

```json
{
  "devices": [
    "iphone xr",
    "iphone xs",
    "iphone xs max"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[string]|false|none|none|

<h2 id="tocS_locations">locations</h2>
<!-- backwards compatibility -->
<a id="schemalocations"></a>
<a id="schema_locations"></a>
<a id="tocSlocations"></a>
<a id="tocslocations"></a>

```json
{
  "locations": [
    {
      "code": "US",
      "name": "United States"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[object]|false|none|none|

<h2 id="tocS_os-browsers">os-browsers</h2>
<!-- backwards compatibility -->
<a id="schemaos-browsers"></a>
<a id="schema_os-browsers"></a>
<a id="tocSos-browsers"></a>
<a id="tocsos-browsers"></a>

```json
{
  "macos mojave": {
    "chrome": [
      "76",
      "75"
    ],
    "firefox": [
      "67",
      "66"
    ],
    "opera": [
      "55",
      "54"
    ]
  },
  "windows 10": {
    "chrome": [
      "76",
      "75"
    ],
    "firefox": [
      "67",
      "66"
    ],
    "opera": [
      "55",
      "54"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|macos mojave|[browsers](#schemabrowsers)|false|none|none|
|windows 10|[browsers](#schemabrowsers)|false|none|none|

<h2 id="tocS_os-devices">os-devices</h2>
<!-- backwards compatibility -->
<a id="schemaos-devices"></a>
<a id="schema_os-devices"></a>
<a id="tocSos-devices"></a>
<a id="tocsos-devices"></a>

```json
{
  "android 7.0": {
    "devices": [
      "galaxy j7 max",
      "galaxy s8",
      "galaxy s8+",
      "galaxy tab s3 9.3",
      "huawei honor 6x",
      "nexus 5x",
      "nexus 6p",
      "oppo r9"
    ]
  },
  "ios 12.0": {
    "devices": [
      "iphone xr",
      "iphone xs",
      "iphone xs max"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|android 7.0|[android-7.0](#schemaandroid-7.0)|false|none|none|
|ios 12.0|[ios-12.0](#schemaios-12.0)|false|none|none|

<h2 id="tocS_profiles">profiles</h2>
<!-- backwards compatibility -->
<a id="schemaprofiles"></a>
<a id="schema_profiles"></a>
<a id="tocSprofiles"></a>
<a id="tocsprofiles"></a>

```json
{
  "profiles": [
    {
      "name": "lambda-login",
      "profile_config": {
        "credentials": {
          "password": "password",
          "username": "name"
        },
        "locators": {
          "password": {
            "type": "name",
            "value": "password"
          },
          "submit": {
            "type": "css",
            "value": "button.btn-lg"
          },
          "username": {
            "type": "name",
            "value": "email"
          }
        },
        "login_url": "https://accounts.lambdatest.com/login",
        "profile_name": "lambda-login"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|[object]|false|none|none|

<h2 id="tocS_res_list">res_list</h2>
<!-- backwards compatibility -->
<a id="schemares_list"></a>
<a id="schema_res_list"></a>
<a id="tocSres_list"></a>
<a id="tocsres_list"></a>

```json
[
  "1024x768",
  "1280x1024"
]
```

<h2 id="tocS_resolutions">resolutions</h2>
<!-- backwards compatibility -->
<a id="schemaresolutions"></a>
<a id="schema_resolutions"></a>
<a id="tocSresolutions"></a>
<a id="tocsresolutions"></a>

```json
{
  "mac_res": [
    "1024x768",
    "1280x1024"
  ],
  "win_res": [
    "1024x768",
    "1280x1024"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mac_res|[res_list](#schemares_list)|false|none|none|
|win_res|[res_list](#schemares_list)|false|none|none|

<h2 id="tocS_screenshot-details">screenshot-details</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot-details"></a>
<a id="schema_screenshot-details"></a>
<a id="tocSscreenshot-details"></a>
<a id="tocsscreenshot-details"></a>

```json
{
  "callback_url": "https://www.example.com",
  "defer_time": 5,
  "screenshots": [
    {
      "activity_id": "ACT100968331562237283340194",
      "browser": "chrome",
      "browser_version": "76",
      "os": "windows 10",
      "resolution": "1024x768",
      "screenshot_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png",
      "status": "completed",
      "thumbnail_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
    }
  ],
  "test_id": "TES100968331562237283314836",
  "test_status": "completed",
  "url": "https://www.lambdatest.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|none|
|defer_time|number|false|none|none|
|screenshots|[[screenshot-type](#schemascreenshot-type)]|false|none|none|
|test_id|string|false|none|none|
|test_status|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_screenshot-not-found">screenshot-not-found</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot-not-found"></a>
<a id="schema_screenshot-not-found"></a>
<a id="tocSscreenshot-not-found"></a>
<a id="tocsscreenshot-not-found"></a>

```json
{
  "message": "No data found",
  "reason": "test_id is invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_screenshot-payload">screenshot-payload</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot-payload"></a>
<a id="schema_screenshot-payload"></a>
<a id="tocSscreenshot-payload"></a>
<a id="tocsscreenshot-payload"></a>

```json
{
  "callback_url": "https://www.example.com",
  "configs": {
    "macos mojave": {
      "chrome": [
        "76",
        "75"
      ],
      "firefox": [
        "67",
        "66"
      ],
      "opera": [
        "55",
        "54"
      ]
    },
    "windows 10": {
      "chrome": [
        "76",
        "75"
      ],
      "firefox": [
        "67",
        "66"
      ],
      "opera": [
        "55",
        "54"
      ]
    }
  },
  "defer_time": 5,
  "email": true,
  "mac_res": "1024x768",
  "password": "password",
  "tunnel": true,
  "tunnel_identifier": "tunnel",
  "url": "https://www.lambdatest.com",
  "username": "admin",
  "win_res": "1366X768"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|none|
|configs|object|false|none|none|
|defer_time|number|false|none|none|
|email|boolean|false|none|none|
|mac_res|string|false|none|none|
|password|string|false|none|none|
|tunnel|boolean|false|none|none|
|tunnel_identifier|string|false|none|none|
|url|string|false|none|none|
|username|string|false|none|none|
|win_res|string|false|none|none|

<h2 id="tocS_screenshot-test-response">screenshot-test-response</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot-test-response"></a>
<a id="schema_screenshot-test-response"></a>
<a id="tocSscreenshot-test-response"></a>
<a id="tocsscreenshot-test-response"></a>

```json
{
  "callback_url": "https://www.example.com",
  "defer_time": 5,
  "screenshots": [
    {
      "activity_id": "ACT100968331562237283340194",
      "browser": "chrome",
      "browser_version": "76",
      "os": "windows 10",
      "resolution": "1024x768",
      "screenshot_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png",
      "status": "completed",
      "thumbnail_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
    }
  ],
  "test_id": "TES100968331562237283314836",
  "test_status": "completed",
  "url": "https://www.lambdatest.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|string|false|none|none|
|defer_time|number|false|none|none|
|screenshots|[[screenshot-type](#schemascreenshot-type)]|false|none|none|
|test_id|string|false|none|none|
|test_status|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_screenshot-type">screenshot-type</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot-type"></a>
<a id="schema_screenshot-type"></a>
<a id="tocSscreenshot-type"></a>
<a id="tocsscreenshot-type"></a>

```json
{
  "activity_id": "ACT100968331562237283340194",
  "browser": "chrome",
  "browser_version": "76",
  "os": "windows 10",
  "resolution": "1024x768",
  "screenshot_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png",
  "status": "completed",
  "thumbnail_url": "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_id|string|false|none|none|
|browser|string|false|none|none|
|browser_version|string|false|none|none|
|os|string|false|none|none|
|resolution|string|false|none|none|
|screenshot_url|string|false|none|none|
|status|string|false|none|none|
|thumbnail_url|string|false|none|none|

<h2 id="tocS_start-screenshot-bad-request">start-screenshot-bad-request</h2>
<!-- backwards compatibility -->
<a id="schemastart-screenshot-bad-request"></a>
<a id="schema_start-screenshot-bad-request"></a>
<a id="tocSstart-screenshot-bad-request"></a>
<a id="tocsstart-screenshot-bad-request"></a>

```json
{
  "message": "The os, browser, browser_version combination is either unsupported or doesn't exist. Please try again with a different combination."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_start-screenshot-success">start-screenshot-success</h2>
<!-- backwards compatibility -->
<a id="schemastart-screenshot-success"></a>
<a id="schema_start-screenshot-success"></a>
<a id="tocSstart-screenshot-success"></a>
<a id="tocsstart-screenshot-success"></a>

```json
{
  "test_id": "TES100968331562243938913767"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test_id|string|false|none|none|

<h2 id="tocS_stop-screenshot-not-found">stop-screenshot-not-found</h2>
<!-- backwards compatibility -->
<a id="schemastop-screenshot-not-found"></a>
<a id="schema_stop-screenshot-not-found"></a>
<a id="tocSstop-screenshot-not-found"></a>
<a id="tocsstop-screenshot-not-found"></a>

```json
{
  "message": "No active Screenshot test found for this test_id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_stop-screenshot-success">stop-screenshot-success</h2>
<!-- backwards compatibility -->
<a id="schemastop-screenshot-success"></a>
<a id="schema_stop-screenshot-success"></a>
<a id="tocSstop-screenshot-success"></a>
<a id="tocsstop-screenshot-success"></a>

```json
{
  "message": "Test stopped successfully"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_zipped-screenshots-success">zipped-screenshots-success</h2>
<!-- backwards compatibility -->
<a id="schemazipped-screenshots-success"></a>
<a id="schema_zipped-screenshots-success"></a>
<a id="tocSzipped-screenshots-success"></a>
<a id="tocszipped-screenshots-success"></a>

```json
{
  "url": "https://s3-screenshots.s3.amazonaws.com/screenshots/TES1009632231568637527345629.zip"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|
