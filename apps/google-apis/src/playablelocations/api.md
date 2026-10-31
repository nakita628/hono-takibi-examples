<h1 id="playable-locations-api">Playable Locations API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://playablelocations.googleapis.com/">https://playablelocations.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/maps/contact-sales/">External documentation</a>

<h1 id="playable-locations-api-v3">v3</h1>

## playablelocations.logImpressions

<a id="opIdplayablelocations.logImpressions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3:logImpressions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientInfo": {
      "apiClient": "string",
      "applicationId": "string",
      "applicationVersion": "string",
      "deviceModel": "string",
      "languageCode": "string",
      "operatingSystem": "string",
      "operatingSystemBuild": "string",
      "platform": "PLATFORM_UNSPECIFIED"
    },
    "impressions": [
      {
        "gameObjectType": 0,
        "impressionType": "IMPRESSION_TYPE_UNSPECIFIED",
        "locationName": "string"
      }
    ],
    "requestId": "string"
  }'
```

`POST /v3:logImpressions`

Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.

> Body parameter

```json
{
  "clientInfo": {
    "apiClient": "string",
    "applicationId": "string",
    "applicationVersion": "string",
    "deviceModel": "string",
    "languageCode": "string",
    "operatingSystem": "string",
    "operatingSystemBuild": "string",
    "platform": "PLATFORM_UNSPECIFIED"
  },
  "impressions": [
    {
      "gameObjectType": 0,
      "impressionType": "IMPRESSION_TYPE_UNSPECIFIED",
      "locationName": "string"
    }
  ],
  "requestId": "string"
}
```

<h3 id="playablelocationslogimpressions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleMapsPlayablelocationsV3LogImpressionsRequest](#schemagooglemapsplayablelocationsv3logimpressionsrequest)|false|none|
|» clientInfo|body|[GoogleMapsUnityClientInfo](#schemagooglemapsunityclientinfo)|false|Required. Information about the client device. For example, device model and operating system.|
|» impressions|body|[[GoogleMapsPlayablelocationsV3Impression](#schemagooglemapsplayablelocationsv3impression)]|false|Required. Impression event details. The maximum number of impression reports that you can log at once is 50.|
|» requestId|body|string|false|Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="playablelocationslogimpressions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleMapsPlayablelocationsV3LogImpressionsResponse](#schemagooglemapsplayablelocationsv3logimpressionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## playablelocations.logPlayerReports

<a id="opIdplayablelocations.logPlayerReports"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3:logPlayerReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientInfo": {
      "apiClient": "string",
      "applicationId": "string",
      "applicationVersion": "string",
      "deviceModel": "string",
      "languageCode": "string",
      "operatingSystem": "string",
      "operatingSystemBuild": "string",
      "platform": "PLATFORM_UNSPECIFIED"
    },
    "playerReports": [
      {
        "languageCode": "string",
        "locationName": "string",
        "reasonDetails": "string",
        "reasons": [
          "BAD_LOCATION_REASON_UNSPECIFIED"
        ]
      }
    ],
    "requestId": "string"
  }'
```

`POST /v3:logPlayerReports`

Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.

> Body parameter

```json
{
  "clientInfo": {
    "apiClient": "string",
    "applicationId": "string",
    "applicationVersion": "string",
    "deviceModel": "string",
    "languageCode": "string",
    "operatingSystem": "string",
    "operatingSystemBuild": "string",
    "platform": "PLATFORM_UNSPECIFIED"
  },
  "playerReports": [
    {
      "languageCode": "string",
      "locationName": "string",
      "reasonDetails": "string",
      "reasons": [
        "BAD_LOCATION_REASON_UNSPECIFIED"
      ]
    }
  ],
  "requestId": "string"
}
```

<h3 id="playablelocationslogplayerreports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleMapsPlayablelocationsV3LogPlayerReportsRequest](#schemagooglemapsplayablelocationsv3logplayerreportsrequest)|false|none|
|» clientInfo|body|[GoogleMapsUnityClientInfo](#schemagooglemapsunityclientinfo)|false|Required. Information about the client device (for example, device model and operating system).|
|» playerReports|body|[[GoogleMapsPlayablelocationsV3PlayerReport](#schemagooglemapsplayablelocationsv3playerreport)]|false|Required. Player reports. The maximum number of player reports that you can log at once is 50.|
|» requestId|body|string|false|Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="playablelocationslogplayerreports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleMapsPlayablelocationsV3LogPlayerReportsResponse](#schemagooglemapsplayablelocationsv3logplayerreportsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## playablelocations.samplePlayableLocations

<a id="opIdplayablelocations.samplePlayableLocations"></a>

> Code samples

```bash
curl https://www.googleapis.com/v3:samplePlayableLocations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "areaFilter": {
      "s2CellId": "string"
    },
    "criteria": [
      {
        "fieldsToReturn": "string",
        "filter": {
          "includedTypes": [
            "string"
          ],
          "maxLocationCount": 0,
          "spacing": {
            "minSpacingMeters": 0,
            "pointType": "POINT_TYPE_UNSPECIFIED"
          }
        },
        "gameObjectType": 0
      }
    ]
  }'
```

`POST /v3:samplePlayableLocations`

Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.

> Body parameter

```json
{
  "areaFilter": {
    "s2CellId": "string"
  },
  "criteria": [
    {
      "fieldsToReturn": "string",
      "filter": {
        "includedTypes": [
          "string"
        ],
        "maxLocationCount": 0,
        "spacing": {
          "minSpacingMeters": 0,
          "pointType": "POINT_TYPE_UNSPECIFIED"
        }
      },
      "gameObjectType": 0
    }
  ]
}
```

<h3 id="playablelocationssampleplayablelocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest](#schemagooglemapsplayablelocationsv3sampleplayablelocationsrequest)|false|none|
|» areaFilter|body|[GoogleMapsPlayablelocationsV3SampleAreaFilter](#schemagooglemapsplayablelocationsv3sampleareafilter)|false|Required. Specifies the area to search within for playable locations.|
|» criteria|body|[[GoogleMapsPlayablelocationsV3SampleCriterion](#schemagooglemapsplayablelocationsv3samplecriterion)]|false|Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "locationsPerGameObjectType": {
    "property1": {
      "locations": [
        {
          "centerPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "name": "string",
          "placeId": "string",
          "plusCode": "string",
          "snappedPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "types": [
            "string"
          ]
        }
      ]
    },
    "property2": {
      "locations": [
        {
          "centerPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "name": "string",
          "placeId": "string",
          "plusCode": "string",
          "snappedPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "types": [
            "string"
          ]
        }
      ]
    }
  },
  "ttl": "string"
}
```

<h3 id="playablelocationssampleplayablelocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse](#schemagooglemapsplayablelocationsv3sampleplayablelocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GoogleMapsPlayablelocationsV3Impression">GoogleMapsPlayablelocationsV3Impression</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3impression"></a>
<a id="schema_GoogleMapsPlayablelocationsV3Impression"></a>
<a id="tocSgooglemapsplayablelocationsv3impression"></a>
<a id="tocsgooglemapsplayablelocationsv3impression"></a>

```json
{
  "gameObjectType": 0,
  "impressionType": "IMPRESSION_TYPE_UNSPECIFIED",
  "locationName": "string"
}
```

Encapsulates impression event details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gameObjectType|integer(int32)|false|none|An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location.|
|impressionType|string|false|none|Required. The type of impression event.|
|locationName|string|false|none|Required. The name of the playable location.|

#### Enumerated Values

|Property|Value|
|---|---|
|impressionType|IMPRESSION_TYPE_UNSPECIFIED|
|impressionType|PRESENTED|
|impressionType|INTERACTED|

<h2 id="tocS_GoogleMapsPlayablelocationsV3LogImpressionsRequest">GoogleMapsPlayablelocationsV3LogImpressionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3logimpressionsrequest"></a>
<a id="schema_GoogleMapsPlayablelocationsV3LogImpressionsRequest"></a>
<a id="tocSgooglemapsplayablelocationsv3logimpressionsrequest"></a>
<a id="tocsgooglemapsplayablelocationsv3logimpressionsrequest"></a>

```json
{
  "clientInfo": {
    "apiClient": "string",
    "applicationId": "string",
    "applicationVersion": "string",
    "deviceModel": "string",
    "languageCode": "string",
    "operatingSystem": "string",
    "operatingSystemBuild": "string",
    "platform": "PLATFORM_UNSPECIFIED"
  },
  "impressions": [
    {
      "gameObjectType": 0,
      "impressionType": "IMPRESSION_TYPE_UNSPECIFIED",
      "locationName": "string"
    }
  ],
  "requestId": "string"
}
```

A request for logging impressions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientInfo|[GoogleMapsUnityClientInfo](#schemagooglemapsunityclientinfo)|false|none|Required. Information about the client device. For example, device model and operating system.|
|impressions|[[GoogleMapsPlayablelocationsV3Impression](#schemagooglemapsplayablelocationsv3impression)]|false|none|Required. Impression event details. The maximum number of impression reports that you can log at once is 50.|
|requestId|string|false|none|Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3LogImpressionsResponse">GoogleMapsPlayablelocationsV3LogImpressionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3logimpressionsresponse"></a>
<a id="schema_GoogleMapsPlayablelocationsV3LogImpressionsResponse"></a>
<a id="tocSgooglemapsplayablelocationsv3logimpressionsresponse"></a>
<a id="tocsgooglemapsplayablelocationsv3logimpressionsresponse"></a>

```json
{}
```

A response for the LogImpressions method. This method returns no data upon success.

<h2 id="tocS_GoogleMapsPlayablelocationsV3LogPlayerReportsRequest">GoogleMapsPlayablelocationsV3LogPlayerReportsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3logplayerreportsrequest"></a>
<a id="schema_GoogleMapsPlayablelocationsV3LogPlayerReportsRequest"></a>
<a id="tocSgooglemapsplayablelocationsv3logplayerreportsrequest"></a>
<a id="tocsgooglemapsplayablelocationsv3logplayerreportsrequest"></a>

```json
{
  "clientInfo": {
    "apiClient": "string",
    "applicationId": "string",
    "applicationVersion": "string",
    "deviceModel": "string",
    "languageCode": "string",
    "operatingSystem": "string",
    "operatingSystemBuild": "string",
    "platform": "PLATFORM_UNSPECIFIED"
  },
  "playerReports": [
    {
      "languageCode": "string",
      "locationName": "string",
      "reasonDetails": "string",
      "reasons": [
        "BAD_LOCATION_REASON_UNSPECIFIED"
      ]
    }
  ],
  "requestId": "string"
}
```

A request for logging your player's bad location reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientInfo|[GoogleMapsUnityClientInfo](#schemagooglemapsunityclientinfo)|false|none|Required. Information about the client device (for example, device model and operating system).|
|playerReports|[[GoogleMapsPlayablelocationsV3PlayerReport](#schemagooglemapsplayablelocationsv3playerreport)]|false|none|Required. Player reports. The maximum number of player reports that you can log at once is 50.|
|requestId|string|false|none|Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3LogPlayerReportsResponse">GoogleMapsPlayablelocationsV3LogPlayerReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3logplayerreportsresponse"></a>
<a id="schema_GoogleMapsPlayablelocationsV3LogPlayerReportsResponse"></a>
<a id="tocSgooglemapsplayablelocationsv3logplayerreportsresponse"></a>
<a id="tocsgooglemapsplayablelocationsv3logplayerreportsresponse"></a>

```json
{}
```

A response for the LogPlayerReports method. This method returns no data upon success.

<h2 id="tocS_GoogleMapsPlayablelocationsV3PlayerReport">GoogleMapsPlayablelocationsV3PlayerReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3playerreport"></a>
<a id="schema_GoogleMapsPlayablelocationsV3PlayerReport"></a>
<a id="tocSgooglemapsplayablelocationsv3playerreport"></a>
<a id="tocsgooglemapsplayablelocationsv3playerreport"></a>

```json
{
  "languageCode": "string",
  "locationName": "string",
  "reasonDetails": "string",
  "reasons": [
    "BAD_LOCATION_REASON_UNSPECIFIED"
  ]
}
```

A report submitted by a player about a playable location that is considered inappropriate for use in the game.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|locationName|string|false|none|Required. The name of the playable location.|
|reasonDetails|string|false|none|Required. A free-form description detailing why the playable location is considered bad.|
|reasons|[string]|false|none|Required. One or more reasons why this playable location is considered bad.|

#### Enumerated Values

|Property|Value|
|---|---|
|reasons|BAD_LOCATION_REASON_UNSPECIFIED|
|reasons|OTHER|
|reasons|NOT_PEDESTRIAN_ACCESSIBLE|
|reasons|NOT_OPEN_TO_PUBLIC|
|reasons|PERMANENTLY_CLOSED|
|reasons|TEMPORARILY_INACCESSIBLE|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SampleAreaFilter">GoogleMapsPlayablelocationsV3SampleAreaFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3sampleareafilter"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SampleAreaFilter"></a>
<a id="tocSgooglemapsplayablelocationsv3sampleareafilter"></a>
<a id="tocsgooglemapsplayablelocationsv3sampleareafilter"></a>

```json
{
  "s2CellId": "string"
}
```

Specifies the area to search for playable locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s2CellId|string(uint64)|false|none|Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python)|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SampleCriterion">GoogleMapsPlayablelocationsV3SampleCriterion</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3samplecriterion"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SampleCriterion"></a>
<a id="tocSgooglemapsplayablelocationsv3samplecriterion"></a>
<a id="tocsgooglemapsplayablelocationsv3samplecriterion"></a>

```json
{
  "fieldsToReturn": "string",
  "filter": {
    "includedTypes": [
      "string"
    ],
    "maxLocationCount": 0,
    "spacing": {
      "minSpacingMeters": 0,
      "pointType": "POINT_TYPE_UNSPECIFIED"
    }
  },
  "gameObjectType": 0
}
```

Encapsulates a filter criterion for searching for a set of playable locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldsToReturn|string(google-fieldmask)|false|none|Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your query will be.|
|filter|[GoogleMapsPlayablelocationsV3SampleFilter](#schemagooglemapsplayablelocationsv3samplefilter)|false|none|Specifies filtering options, and specifies what will be included in the result set.|
|gameObjectType|integer(int32)|false|none|Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example, 1=monster location, 2=powerup location. The response contains a map.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SampleFilter">GoogleMapsPlayablelocationsV3SampleFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3samplefilter"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SampleFilter"></a>
<a id="tocSgooglemapsplayablelocationsv3samplefilter"></a>
<a id="tocsgooglemapsplayablelocationsv3samplefilter"></a>

```json
{
  "includedTypes": [
    "string"
  ],
  "maxLocationCount": 0,
  "spacing": {
    "minSpacingMeters": 0,
    "pointType": "POINT_TYPE_UNSPECIFIED"
  }
}
```

Specifies the filters to use when searching for playable locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includedTypes|[string]|false|none|Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want.|
|maxLocationCount|integer(int32)|false|none|Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are returned.|
|spacing|[GoogleMapsPlayablelocationsV3SampleSpacingOptions](#schemagooglemapsplayablelocationsv3samplespacingoptions)|false|none|A set of options that control the spacing between playable locations. By default the minimum distance between locations is 200m.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SamplePlayableLocation">GoogleMapsPlayablelocationsV3SamplePlayableLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3sampleplayablelocation"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SamplePlayableLocation"></a>
<a id="tocSgooglemapsplayablelocationsv3sampleplayablelocation"></a>
<a id="tocsgooglemapsplayablelocationsv3sampleplayablelocation"></a>

```json
{
  "centerPoint": {
    "latitude": 0,
    "longitude": 0
  },
  "name": "string",
  "placeId": "string",
  "plusCode": "string",
  "snappedPoint": {
    "latitude": 0,
    "longitude": 0
  },
  "types": [
    "string"
  ]
}
```

A geographical point suitable for placing game objects in location-based games.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centerPoint|[GoogleTypeLatLng](#schemagoogletypelatlng)|false|none|Required. The latitude and longitude associated with the center of the playable location. By default, the set of playable locations returned from SamplePlayableLocations use center-point coordinates.|
|name|string|false|none|Required. The name of this playable location.|
|placeId|string|false|none|A [place ID] (https://developers.google.com/places/place-id)|
|plusCode|string|false|none|A [plus code] (http://openlocationcode.com)|
|snappedPoint|[GoogleTypeLatLng](#schemagoogletypelatlng)|false|none|The playable location's coordinates, snapped to the sidewalk of the nearest road, if a nearby road exists.|
|types|[string]|false|none|A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SamplePlayableLocationList">GoogleMapsPlayablelocationsV3SamplePlayableLocationList</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3sampleplayablelocationlist"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SamplePlayableLocationList"></a>
<a id="tocSgooglemapsplayablelocationsv3sampleplayablelocationlist"></a>
<a id="tocsgooglemapsplayablelocationsv3sampleplayablelocationlist"></a>

```json
{
  "locations": [
    {
      "centerPoint": {
        "latitude": 0,
        "longitude": 0
      },
      "name": "string",
      "placeId": "string",
      "plusCode": "string",
      "snappedPoint": {
        "latitude": 0,
        "longitude": 0
      },
      "types": [
        "string"
      ]
    }
  ]
}
```

A list of PlayableLocation objects that satisfies a single Criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[GoogleMapsPlayablelocationsV3SamplePlayableLocation](#schemagooglemapsplayablelocationsv3sampleplayablelocation)]|false|none|A list of playable locations for this game object type.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest">GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3sampleplayablelocationsrequest"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest"></a>
<a id="tocSgooglemapsplayablelocationsv3sampleplayablelocationsrequest"></a>
<a id="tocsgooglemapsplayablelocationsv3sampleplayablelocationsrequest"></a>

```json
{
  "areaFilter": {
    "s2CellId": "string"
  },
  "criteria": [
    {
      "fieldsToReturn": "string",
      "filter": {
        "includedTypes": [
          "string"
        ],
        "maxLocationCount": 0,
        "spacing": {
          "minSpacingMeters": 0,
          "pointType": "POINT_TYPE_UNSPECIFIED"
        }
      },
      "gameObjectType": 0
    }
  ]
}
```

 Life of a query: - When a game starts in a new location, your game server issues a SamplePlayableLocations request. The request specifies the S2 cell, and contains one or more "criteria" for filtering: - Criterion 0: i locations for long-lived bases, or level 0 monsters, or... - Criterion 1: j locations for short-lived bases, or level 1 monsters, ... - Criterion 2: k locations for random objects. - etc (up to 5 criterion may be specified). `PlayableLocationList` will then contain mutually exclusive lists of `PlayableLocation` objects that satisfy each of the criteria. Think of it as a collection of real-world locations that you can then associate with your game state. Note: These points are impermanent in nature. E.g, parks can close, and places can be removed. The response specifies how long you can expect the playable locations to last. Once they expire, you should query the `samplePlayableLocations` API again to get a fresh view of the real world.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areaFilter|[GoogleMapsPlayablelocationsV3SampleAreaFilter](#schemagooglemapsplayablelocationsv3sampleareafilter)|false|none|Required. Specifies the area to search within for playable locations.|
|criteria|[[GoogleMapsPlayablelocationsV3SampleCriterion](#schemagooglemapsplayablelocationsv3samplecriterion)]|false|none|Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations.|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse">GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3sampleplayablelocationsresponse"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse"></a>
<a id="tocSgooglemapsplayablelocationsv3sampleplayablelocationsresponse"></a>
<a id="tocsgooglemapsplayablelocationsv3sampleplayablelocationsresponse"></a>

```json
{
  "locationsPerGameObjectType": {
    "property1": {
      "locations": [
        {
          "centerPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "name": "string",
          "placeId": "string",
          "plusCode": "string",
          "snappedPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "types": [
            "string"
          ]
        }
      ]
    },
    "property2": {
      "locations": [
        {
          "centerPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "name": "string",
          "placeId": "string",
          "plusCode": "string",
          "snappedPoint": {
            "latitude": 0,
            "longitude": 0
          },
          "types": [
            "string"
          ]
        }
      ]
    }
  },
  "ttl": "string"
}
```

 Response for the SamplePlayableLocations method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locationsPerGameObjectType|object|false|none|Each PlayableLocation object corresponds to a game_object_type specified in the request.|
|ttl|string(google-duration)|false|none|Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently).|

<h2 id="tocS_GoogleMapsPlayablelocationsV3SampleSpacingOptions">GoogleMapsPlayablelocationsV3SampleSpacingOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsplayablelocationsv3samplespacingoptions"></a>
<a id="schema_GoogleMapsPlayablelocationsV3SampleSpacingOptions"></a>
<a id="tocSgooglemapsplayablelocationsv3samplespacingoptions"></a>
<a id="tocsgooglemapsplayablelocationsv3samplespacingoptions"></a>

```json
{
  "minSpacingMeters": 0,
  "pointType": "POINT_TYPE_UNSPECIFIED"
}
```

A set of options that specifies the separation between playable locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minSpacingMeters|number(double)|false|none|Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10 meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3. Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. * Z->X, Z->Y, Z->Z: 200m.|
|pointType|string|false|none|Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point is not available for a playable location, its center-point is used instead. Set this to the point type used in your game.|

#### Enumerated Values

|Property|Value|
|---|---|
|pointType|POINT_TYPE_UNSPECIFIED|
|pointType|CENTER_POINT|
|pointType|SNAPPED_POINT|

<h2 id="tocS_GoogleMapsUnityClientInfo">GoogleMapsUnityClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglemapsunityclientinfo"></a>
<a id="schema_GoogleMapsUnityClientInfo"></a>
<a id="tocSgooglemapsunityclientinfo"></a>
<a id="tocsgooglemapsunityclientinfo"></a>

```json
{
  "apiClient": "string",
  "applicationId": "string",
  "applicationVersion": "string",
  "deviceModel": "string",
  "languageCode": "string",
  "operatingSystem": "string",
  "operatingSystemBuild": "string",
  "platform": "PLATFORM_UNSPECIFIED"
}
```

Client information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiClient|string|false|none|API client name and version. For example, the SDK calling the API. The exact format is up to the client.|
|applicationId|string|false|none|Application ID, such as the package name on Android and the bundle identifier on iOS platforms.|
|applicationVersion|string|false|none|Application version number, such as "1.2.3". The exact format is application-dependent.|
|deviceModel|string|false|none|Device model as reported by the device. The exact format is platform-dependent.|
|languageCode|string|false|none|Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|operatingSystem|string|false|none|Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.|
|operatingSystemBuild|string|false|none|Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS.|
|platform|string|false|none|Platform where the application is running.|

#### Enumerated Values

|Property|Value|
|---|---|
|platform|PLATFORM_UNSPECIFIED|
|platform|EDITOR|
|platform|MAC_OS|
|platform|WINDOWS|
|platform|LINUX|
|platform|ANDROID|
|platform|IOS|
|platform|WEB_GL|

<h2 id="tocS_GoogleTypeLatLng">GoogleTypeLatLng</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypelatlng"></a>
<a id="schema_GoogleTypeLatLng"></a>
<a id="tocSgoogletypelatlng"></a>
<a id="tocsgoogletypelatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|
