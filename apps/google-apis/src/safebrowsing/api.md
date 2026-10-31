<h1 id="safe-browsing-api">Safe Browsing API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.

Base URLs:

* <a href="https://safebrowsing.googleapis.com/">https://safebrowsing.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/safe-browsing/">External documentation</a>

<h1 id="safe-browsing-api-encodedfullhashes">encodedFullHashes</h1>

## safebrowsing.encodedFullHashes.get

<a id="opIdsafebrowsing.encodedFullHashes.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/encodedFullHashes/string \
  -H 'Accept: application/json'
```

`GET /v4/encodedFullHashes/{encodedRequest}`

<h3 id="safebrowsingencodedfullhashesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encodedRequest|path|string|true|A serialized FindFullHashesRequest proto.|
|clientId|query|string|false|A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.|
|clientVersion|query|string|false|The version of the client implementation.|
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
  "matches": [
    {
      "cacheDuration": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threat": {
        "digest": "string",
        "hash": "string",
        "url": "string"
      },
      "threatEntryMetadata": {
        "entries": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string",
  "negativeCacheDuration": "string"
}
```

<h3 id="safebrowsingencodedfullhashesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4FindFullHashesResponse](#schemagooglesecuritysafebrowsingv4findfullhashesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-encodedupdates">encodedUpdates</h1>

## safebrowsing.encodedUpdates.get

<a id="opIdsafebrowsing.encodedUpdates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/encodedUpdates/string \
  -H 'Accept: application/json'
```

`GET /v4/encodedUpdates/{encodedRequest}`

<h3 id="safebrowsingencodedupdatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|encodedRequest|path|string|true|A serialized FetchThreatListUpdatesRequest proto.|
|clientId|query|string|false|A client ID that uniquely identifies the client implementation of the Safe Browsing API.|
|clientVersion|query|string|false|The version of the client implementation.|
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
  "listUpdateResponses": [
    {
      "additions": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "checksum": {
        "sha256": "string"
      },
      "newClientState": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "removals": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "responseType": "RESPONSE_TYPE_UNSPECIFIED",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string"
}
```

<h3 id="safebrowsingencodedupdatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-fullhashes">fullHashes</h1>

## safebrowsing.fullHashes.find

<a id="opIdsafebrowsing.fullHashes.find"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/fullHashes:find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apiClient": {
      "clientId": "string",
      "clientVersion": "string"
    },
    "client": {
      "clientId": "string",
      "clientVersion": "string"
    },
    "clientStates": [
      "string"
    ],
    "threatInfo": {
      "platformTypes": [
        "PLATFORM_TYPE_UNSPECIFIED"
      ],
      "threatEntries": [
        {
          "digest": "string",
          "hash": "string",
          "url": "string"
        }
      ],
      "threatEntryTypes": [
        "THREAT_ENTRY_TYPE_UNSPECIFIED"
      ],
      "threatTypes": [
        "THREAT_TYPE_UNSPECIFIED"
      ]
    }
  }'
```

`POST /v4/fullHashes:find`

Finds the full hashes that match the requested hash prefixes.

> Body parameter

```json
{
  "apiClient": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "clientStates": [
    "string"
  ],
  "threatInfo": {
    "platformTypes": [
      "PLATFORM_TYPE_UNSPECIFIED"
    ],
    "threatEntries": [
      {
        "digest": "string",
        "hash": "string",
        "url": "string"
      }
    ],
    "threatEntryTypes": [
      "THREAT_ENTRY_TYPE_UNSPECIFIED"
    ],
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

<h3 id="safebrowsingfullhashesfind-parameters">Parameters</h3>

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
|body|body|[GoogleSecuritySafebrowsingV4FindFullHashesRequest](#schemagooglesecuritysafebrowsingv4findfullhashesrequest)|false|none|
|» apiClient|body|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|Client metadata associated with callers of higher-level APIs built on top of the client's implementation.|
|» client|body|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|The client metadata.|
|» clientStates|body|[string(byte)]|false|The current client states for each of the client's local threat lists.|
|» threatInfo|body|[GoogleSecuritySafebrowsingV4ThreatInfo](#schemagooglesecuritysafebrowsingv4threatinfo)|false|The lists and hashes to be checked.|

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
  "matches": [
    {
      "cacheDuration": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threat": {
        "digest": "string",
        "hash": "string",
        "url": "string"
      },
      "threatEntryMetadata": {
        "entries": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string",
  "negativeCacheDuration": "string"
}
```

<h3 id="safebrowsingfullhashesfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4FindFullHashesResponse](#schemagooglesecuritysafebrowsingv4findfullhashesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-threathits">threatHits</h1>

## safebrowsing.threatHits.create

<a id="opIdsafebrowsing.threatHits.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/threatHits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientInfo": {
      "clientId": "string",
      "clientVersion": "string"
    },
    "entry": {
      "digest": "string",
      "hash": "string",
      "url": "string"
    },
    "platformType": "PLATFORM_TYPE_UNSPECIFIED",
    "resources": [
      {
        "referrer": "string",
        "remoteIp": "string",
        "type": "THREAT_SOURCE_TYPE_UNSPECIFIED",
        "url": "string"
      }
    ],
    "threatType": "THREAT_TYPE_UNSPECIFIED",
    "userInfo": {
      "regionCode": "string",
      "userId": "string"
    }
  }'
```

`POST /v4/threatHits`

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

> Body parameter

```json
{
  "clientInfo": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "entry": {
    "digest": "string",
    "hash": "string",
    "url": "string"
  },
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "resources": [
    {
      "referrer": "string",
      "remoteIp": "string",
      "type": "THREAT_SOURCE_TYPE_UNSPECIFIED",
      "url": "string"
    }
  ],
  "threatType": "THREAT_TYPE_UNSPECIFIED",
  "userInfo": {
    "regionCode": "string",
    "userId": "string"
  }
}
```

<h3 id="safebrowsingthreathitscreate-parameters">Parameters</h3>

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
|body|body|[GoogleSecuritySafebrowsingV4ThreatHit](#schemagooglesecuritysafebrowsingv4threathit)|false|none|
|» clientInfo|body|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|Client-reported identification.|
|» entry|body|[GoogleSecuritySafebrowsingV4ThreatEntry](#schemagooglesecuritysafebrowsingv4threatentry)|false|The threat entry responsible for the hit. Full hash should be reported for hash-based hits.|
|» platformType|body|string|false|The platform type reported.|
|» resources|body|[[GoogleSecuritySafebrowsingV4ThreatHitThreatSource](#schemagooglesecuritysafebrowsingv4threathitthreatsource)]|false|The resources related to the threat hit.|
|» threatType|body|string|false|The threat type reported.|
|» userInfo|body|[GoogleSecuritySafebrowsingV4ThreatHitUserInfo](#schemagooglesecuritysafebrowsingv4threathituserinfo)|false|Details about the user that encountered the threat.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» platformType|PLATFORM_TYPE_UNSPECIFIED|
|» platformType|WINDOWS|
|» platformType|LINUX|
|» platformType|ANDROID|
|» platformType|OSX|
|» platformType|IOS|
|» platformType|ANY_PLATFORM|
|» platformType|ALL_PLATFORMS|
|» platformType|CHROME|
|» threatType|THREAT_TYPE_UNSPECIFIED|
|» threatType|MALWARE|
|» threatType|SOCIAL_ENGINEERING|
|» threatType|UNWANTED_SOFTWARE|
|» threatType|POTENTIALLY_HARMFUL_APPLICATION|
|» threatType|SOCIAL_ENGINEERING_INTERNAL|
|» threatType|API_ABUSE|
|» threatType|MALICIOUS_BINARY|
|» threatType|CSD_WHITELIST|
|» threatType|CSD_DOWNLOAD_WHITELIST|
|» threatType|CLIENT_INCIDENT|
|» threatType|CLIENT_INCIDENT_WHITELIST|
|» threatType|APK_MALWARE_OFFLINE|
|» threatType|SUBRESOURCE_FILTER|
|» threatType|SUSPICIOUS|
|» threatType|TRICK_TO_BILL|
|» threatType|HIGH_CONFIDENCE_ALLOWLIST|
|» threatType|ACCURACY_TIPS|

> Example responses

> 200 Response

```json
{}
```

<h3 id="safebrowsingthreathitscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-threatlists">threatLists</h1>

## safebrowsing.threatLists.list

<a id="opIdsafebrowsing.threatLists.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/threatLists \
  -H 'Accept: application/json'
```

`GET /v4/threatLists`

Lists the Safe Browsing threat lists available for download.

<h3 id="safebrowsingthreatlistslist-parameters">Parameters</h3>

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
  "threatLists": [
    {
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="safebrowsingthreatlistslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4ListThreatListsResponse](#schemagooglesecuritysafebrowsingv4listthreatlistsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-threatlistupdates">threatListUpdates</h1>

## safebrowsing.threatListUpdates.fetch

<a id="opIdsafebrowsing.threatListUpdates.fetch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/threatListUpdates:fetch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client": {
      "clientId": "string",
      "clientVersion": "string"
    },
    "listUpdateRequests": [
      {
        "constraints": {
          "deviceLocation": "string",
          "language": "string",
          "maxDatabaseEntries": 0,
          "maxUpdateEntries": 0,
          "region": "string",
          "supportedCompressions": [
            "COMPRESSION_TYPE_UNSPECIFIED"
          ]
        },
        "platformType": "PLATFORM_TYPE_UNSPECIFIED",
        "state": "string",
        "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
        "threatType": "THREAT_TYPE_UNSPECIFIED"
      }
    ]
  }'
```

`POST /v4/threatListUpdates:fetch`

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

> Body parameter

```json
{
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "listUpdateRequests": [
    {
      "constraints": {
        "deviceLocation": "string",
        "language": "string",
        "maxDatabaseEntries": 0,
        "maxUpdateEntries": 0,
        "region": "string",
        "supportedCompressions": [
          "COMPRESSION_TYPE_UNSPECIFIED"
        ]
      },
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "state": "string",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="safebrowsingthreatlistupdatesfetch-parameters">Parameters</h3>

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
|body|body|[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequest)|false|none|
|» client|body|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|The client metadata.|
|» listUpdateRequests|body|[[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest)]|false|The requested threat list updates.|

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
  "listUpdateResponses": [
    {
      "additions": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "checksum": {
        "sha256": "string"
      },
      "newClientState": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "removals": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "responseType": "RESPONSE_TYPE_UNSPECIFIED",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string"
}
```

<h3 id="safebrowsingthreatlistupdatesfetch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="safe-browsing-api-threatmatches">threatMatches</h1>

## safebrowsing.threatMatches.find

<a id="opIdsafebrowsing.threatMatches.find"></a>

> Code samples

```bash
curl https://www.googleapis.com/v4/threatMatches:find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client": {
      "clientId": "string",
      "clientVersion": "string"
    },
    "threatInfo": {
      "platformTypes": [
        "PLATFORM_TYPE_UNSPECIFIED"
      ],
      "threatEntries": [
        {
          "digest": "string",
          "hash": "string",
          "url": "string"
        }
      ],
      "threatEntryTypes": [
        "THREAT_ENTRY_TYPE_UNSPECIFIED"
      ],
      "threatTypes": [
        "THREAT_TYPE_UNSPECIFIED"
      ]
    }
  }'
```

`POST /v4/threatMatches:find`

Finds the threat entries that match the Safe Browsing lists.

> Body parameter

```json
{
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "threatInfo": {
    "platformTypes": [
      "PLATFORM_TYPE_UNSPECIFIED"
    ],
    "threatEntries": [
      {
        "digest": "string",
        "hash": "string",
        "url": "string"
      }
    ],
    "threatEntryTypes": [
      "THREAT_ENTRY_TYPE_UNSPECIFIED"
    ],
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

<h3 id="safebrowsingthreatmatchesfind-parameters">Parameters</h3>

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
|body|body|[GoogleSecuritySafebrowsingV4FindThreatMatchesRequest](#schemagooglesecuritysafebrowsingv4findthreatmatchesrequest)|false|none|
|» client|body|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|The client metadata.|
|» threatInfo|body|[GoogleSecuritySafebrowsingV4ThreatInfo](#schemagooglesecuritysafebrowsingv4threatinfo)|false|The lists and entries to be checked for matches.|

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
  "matches": [
    {
      "cacheDuration": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threat": {
        "digest": "string",
        "hash": "string",
        "url": "string"
      },
      "threatEntryMetadata": {
        "entries": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="safebrowsingthreatmatchesfind-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSecuritySafebrowsingV4FindThreatMatchesResponse](#schemagooglesecuritysafebrowsingv4findthreatmatchesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleSecuritySafebrowsingV4Checksum">GoogleSecuritySafebrowsingV4Checksum</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4checksum"></a>
<a id="schema_GoogleSecuritySafebrowsingV4Checksum"></a>
<a id="tocSgooglesecuritysafebrowsingv4checksum"></a>
<a id="tocsgooglesecuritysafebrowsingv4checksum"></a>

```json
{
  "sha256": "string"
}
```

The expected state of a client's local database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256|string(byte)|false|none|The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ClientInfo">GoogleSecuritySafebrowsingV4ClientInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4clientinfo"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ClientInfo"></a>
<a id="tocSgooglesecuritysafebrowsingv4clientinfo"></a>
<a id="tocsgooglesecuritysafebrowsingv4clientinfo"></a>

```json
{
  "clientId": "string",
  "clientVersion": "string"
}
```

The client metadata associated with Safe Browsing API requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.|
|clientVersion|string|false|none|The version of the client implementation.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest">GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequest"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest"></a>
<a id="tocSgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequest"></a>
<a id="tocsgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequest"></a>

```json
{
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "listUpdateRequests": [
    {
      "constraints": {
        "deviceLocation": "string",
        "language": "string",
        "maxDatabaseEntries": 0,
        "maxUpdateEntries": 0,
        "region": "string",
        "supportedCompressions": [
          "COMPRESSION_TYPE_UNSPECIFIED"
        ]
      },
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "state": "string",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|none|The client metadata.|
|listUpdateRequests|[[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest)]|false|none|The requested threat list updates.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest">GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest"></a>
<a id="tocSgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest"></a>
<a id="tocsgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequest"></a>

```json
{
  "constraints": {
    "deviceLocation": "string",
    "language": "string",
    "maxDatabaseEntries": 0,
    "maxUpdateEntries": 0,
    "region": "string",
    "supportedCompressions": [
      "COMPRESSION_TYPE_UNSPECIFIED"
    ]
  },
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "state": "string",
  "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
  "threatType": "THREAT_TYPE_UNSPECIFIED"
}
```

A single list update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequestconstraints)|false|none|The constraints associated with this request.|
|platformType|string|false|none|The type of platform at risk by entries present in the list.|
|state|string(byte)|false|none|The current state of the client for the requested list (the encrypted client state that was received from the last successful list update).|
|threatEntryType|string|false|none|The types of entries present in the list.|
|threatType|string|false|none|The type of threat posed by entries present in the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WINDOWS|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|OSX|
|platformType|IOS|
|platformType|ANY_PLATFORM|
|platformType|ALL_PLATFORMS|
|platformType|CHROME|
|threatEntryType|THREAT_ENTRY_TYPE_UNSPECIFIED|
|threatEntryType|URL|
|threatEntryType|EXECUTABLE|
|threatEntryType|IP_RANGE|
|threatEntryType|CHROME_EXTENSION|
|threatEntryType|FILENAME|
|threatEntryType|CERT|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|POTENTIALLY_HARMFUL_APPLICATION|
|threatType|SOCIAL_ENGINEERING_INTERNAL|
|threatType|API_ABUSE|
|threatType|MALICIOUS_BINARY|
|threatType|CSD_WHITELIST|
|threatType|CSD_DOWNLOAD_WHITELIST|
|threatType|CLIENT_INCIDENT|
|threatType|CLIENT_INCIDENT_WHITELIST|
|threatType|APK_MALWARE_OFFLINE|
|threatType|SUBRESOURCE_FILTER|
|threatType|SUSPICIOUS|
|threatType|TRICK_TO_BILL|
|threatType|HIGH_CONFIDENCE_ALLOWLIST|
|threatType|ACCURACY_TIPS|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints">GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequestconstraints"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints"></a>
<a id="tocSgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequestconstraints"></a>
<a id="tocsgooglesecuritysafebrowsingv4fetchthreatlistupdatesrequestlistupdaterequestconstraints"></a>

```json
{
  "deviceLocation": "string",
  "language": "string",
  "maxDatabaseEntries": 0,
  "maxUpdateEntries": 0,
  "region": "string",
  "supportedCompressions": [
    "COMPRESSION_TYPE_UNSPECIFIED"
  ]
}
```

The constraints for this update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceLocation|string|false|none|A client's physical location, expressed as a ISO 31166-1 alpha-2 region code.|
|language|string|false|none|Requests the lists for a specific language. Expects ISO 639 alpha-2 format.|
|maxDatabaseEntries|integer(int32)|false|none|Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.|
|maxUpdateEntries|integer(int32)|false|none|The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set.|
|region|string|false|none|Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format.|
|supportedCompressions|[string]|false|none|The compression types supported by the client.|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedCompressions|COMPRESSION_TYPE_UNSPECIFIED|
|supportedCompressions|RAW|
|supportedCompressions|RICE|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse">GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesresponse"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse"></a>
<a id="tocSgooglesecuritysafebrowsingv4fetchthreatlistupdatesresponse"></a>
<a id="tocsgooglesecuritysafebrowsingv4fetchthreatlistupdatesresponse"></a>

```json
{
  "listUpdateResponses": [
    {
      "additions": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "checksum": {
        "sha256": "string"
      },
      "newClientState": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "removals": [
        {
          "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
          "rawHashes": {
            "prefixSize": 0,
            "rawHashes": "string"
          },
          "rawIndices": {
            "indices": [
              0
            ]
          },
          "riceHashes": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          },
          "riceIndices": {
            "encodedData": "string",
            "firstValue": "string",
            "numEntries": 0,
            "riceParameter": 0
          }
        }
      ],
      "responseType": "RESPONSE_TYPE_UNSPECIFIED",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listUpdateResponses|[[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse](#schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse)]|false|none|The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list.|
|minimumWaitDuration|string(google-duration)|false|none|The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse">GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse"></a>
<a id="tocSgooglesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse"></a>
<a id="tocsgooglesecuritysafebrowsingv4fetchthreatlistupdatesresponselistupdateresponse"></a>

```json
{
  "additions": [
    {
      "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
      "rawHashes": {
        "prefixSize": 0,
        "rawHashes": "string"
      },
      "rawIndices": {
        "indices": [
          0
        ]
      },
      "riceHashes": {
        "encodedData": "string",
        "firstValue": "string",
        "numEntries": 0,
        "riceParameter": 0
      },
      "riceIndices": {
        "encodedData": "string",
        "firstValue": "string",
        "numEntries": 0,
        "riceParameter": 0
      }
    }
  ],
  "checksum": {
    "sha256": "string"
  },
  "newClientState": "string",
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "removals": [
    {
      "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
      "rawHashes": {
        "prefixSize": 0,
        "rawHashes": "string"
      },
      "rawIndices": {
        "indices": [
          0
        ]
      },
      "riceHashes": {
        "encodedData": "string",
        "firstValue": "string",
        "numEntries": 0,
        "riceParameter": 0
      },
      "riceIndices": {
        "encodedData": "string",
        "firstValue": "string",
        "numEntries": 0,
        "riceParameter": 0
      }
    }
  ],
  "responseType": "RESPONSE_TYPE_UNSPECIFIED",
  "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
  "threatType": "THREAT_TYPE_UNSPECIFIED"
}
```

An update to an individual list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additions|[[GoogleSecuritySafebrowsingV4ThreatEntrySet](#schemagooglesecuritysafebrowsingv4threatentryset)]|false|none|A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response.|
|checksum|[GoogleSecuritySafebrowsingV4Checksum](#schemagooglesecuritysafebrowsingv4checksum)|false|none|The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided update. If the client state doesn't match the expected state, the client must disregard this update and retry later.|
|newClientState|string(byte)|false|none|The new client state, in encrypted format. Opaque to clients.|
|platformType|string|false|none|The platform type for which data is returned.|
|removals|[[GoogleSecuritySafebrowsingV4ThreatEntrySet](#schemagooglesecuritysafebrowsingv4threatentryset)]|false|none|A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet.|
|responseType|string|false|none|The type of response. This may indicate that an action is required by the client when the response is received.|
|threatEntryType|string|false|none|The format of the threats.|
|threatType|string|false|none|The threat type for which data is returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WINDOWS|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|OSX|
|platformType|IOS|
|platformType|ANY_PLATFORM|
|platformType|ALL_PLATFORMS|
|platformType|CHROME|
|responseType|RESPONSE_TYPE_UNSPECIFIED|
|responseType|PARTIAL_UPDATE|
|responseType|FULL_UPDATE|
|threatEntryType|THREAT_ENTRY_TYPE_UNSPECIFIED|
|threatEntryType|URL|
|threatEntryType|EXECUTABLE|
|threatEntryType|IP_RANGE|
|threatEntryType|CHROME_EXTENSION|
|threatEntryType|FILENAME|
|threatEntryType|CERT|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|POTENTIALLY_HARMFUL_APPLICATION|
|threatType|SOCIAL_ENGINEERING_INTERNAL|
|threatType|API_ABUSE|
|threatType|MALICIOUS_BINARY|
|threatType|CSD_WHITELIST|
|threatType|CSD_DOWNLOAD_WHITELIST|
|threatType|CLIENT_INCIDENT|
|threatType|CLIENT_INCIDENT_WHITELIST|
|threatType|APK_MALWARE_OFFLINE|
|threatType|SUBRESOURCE_FILTER|
|threatType|SUSPICIOUS|
|threatType|TRICK_TO_BILL|
|threatType|HIGH_CONFIDENCE_ALLOWLIST|
|threatType|ACCURACY_TIPS|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FindFullHashesRequest">GoogleSecuritySafebrowsingV4FindFullHashesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4findfullhashesrequest"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FindFullHashesRequest"></a>
<a id="tocSgooglesecuritysafebrowsingv4findfullhashesrequest"></a>
<a id="tocsgooglesecuritysafebrowsingv4findfullhashesrequest"></a>

```json
{
  "apiClient": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "clientStates": [
    "string"
  ],
  "threatInfo": {
    "platformTypes": [
      "PLATFORM_TYPE_UNSPECIFIED"
    ],
    "threatEntries": [
      {
        "digest": "string",
        "hash": "string",
        "url": "string"
      }
    ],
    "threatEntryTypes": [
      "THREAT_ENTRY_TYPE_UNSPECIFIED"
    ],
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

Request to return full hashes matched by the provided hash prefixes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiClient|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|none|Client metadata associated with callers of higher-level APIs built on top of the client's implementation.|
|client|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|none|The client metadata.|
|clientStates|[string(byte)]|false|none|The current client states for each of the client's local threat lists.|
|threatInfo|[GoogleSecuritySafebrowsingV4ThreatInfo](#schemagooglesecuritysafebrowsingv4threatinfo)|false|none|The lists and hashes to be checked.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FindFullHashesResponse">GoogleSecuritySafebrowsingV4FindFullHashesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4findfullhashesresponse"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FindFullHashesResponse"></a>
<a id="tocSgooglesecuritysafebrowsingv4findfullhashesresponse"></a>
<a id="tocsgooglesecuritysafebrowsingv4findfullhashesresponse"></a>

```json
{
  "matches": [
    {
      "cacheDuration": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threat": {
        "digest": "string",
        "hash": "string",
        "url": "string"
      },
      "threatEntryMetadata": {
        "entries": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ],
  "minimumWaitDuration": "string",
  "negativeCacheDuration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[GoogleSecuritySafebrowsingV4ThreatMatch](#schemagooglesecuritysafebrowsingv4threatmatch)]|false|none|The full hashes that matched the requested prefixes.|
|minimumWaitDuration|string(google-duration)|false|none|The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want.|
|negativeCacheDuration|string(google-duration)|false|none|For requested entities that did not match the threat list, how long to cache the response.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FindThreatMatchesRequest">GoogleSecuritySafebrowsingV4FindThreatMatchesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4findthreatmatchesrequest"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FindThreatMatchesRequest"></a>
<a id="tocSgooglesecuritysafebrowsingv4findthreatmatchesrequest"></a>
<a id="tocsgooglesecuritysafebrowsingv4findthreatmatchesrequest"></a>

```json
{
  "client": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "threatInfo": {
    "platformTypes": [
      "PLATFORM_TYPE_UNSPECIFIED"
    ],
    "threatEntries": [
      {
        "digest": "string",
        "hash": "string",
        "url": "string"
      }
    ],
    "threatEntryTypes": [
      "THREAT_ENTRY_TYPE_UNSPECIFIED"
    ],
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

Request to check entries against lists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|none|The client metadata.|
|threatInfo|[GoogleSecuritySafebrowsingV4ThreatInfo](#schemagooglesecuritysafebrowsingv4threatinfo)|false|none|The lists and entries to be checked for matches.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4FindThreatMatchesResponse">GoogleSecuritySafebrowsingV4FindThreatMatchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4findthreatmatchesresponse"></a>
<a id="schema_GoogleSecuritySafebrowsingV4FindThreatMatchesResponse"></a>
<a id="tocSgooglesecuritysafebrowsingv4findthreatmatchesresponse"></a>
<a id="tocsgooglesecuritysafebrowsingv4findthreatmatchesresponse"></a>

```json
{
  "matches": [
    {
      "cacheDuration": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threat": {
        "digest": "string",
        "hash": "string",
        "url": "string"
      },
      "threatEntryMetadata": {
        "entries": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[GoogleSecuritySafebrowsingV4ThreatMatch](#schemagooglesecuritysafebrowsingv4threatmatch)]|false|none|The threat list matches.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ListThreatListsResponse">GoogleSecuritySafebrowsingV4ListThreatListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4listthreatlistsresponse"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ListThreatListsResponse"></a>
<a id="tocSgooglesecuritysafebrowsingv4listthreatlistsresponse"></a>
<a id="tocsgooglesecuritysafebrowsingv4listthreatlistsresponse"></a>

```json
{
  "threatLists": [
    {
      "platformType": "PLATFORM_TYPE_UNSPECIFIED",
      "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
      "threatType": "THREAT_TYPE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threatLists|[[GoogleSecuritySafebrowsingV4ThreatListDescriptor](#schemagooglesecuritysafebrowsingv4threatlistdescriptor)]|false|none|The lists available for download by the client.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4RawHashes">GoogleSecuritySafebrowsingV4RawHashes</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4rawhashes"></a>
<a id="schema_GoogleSecuritySafebrowsingV4RawHashes"></a>
<a id="tocSgooglesecuritysafebrowsingv4rawhashes"></a>
<a id="tocsgooglesecuritysafebrowsingv4rawhashes"></a>

```json
{
  "prefixSize": 0,
  "rawHashes": "string"
}
```

The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefixSize|integer(int32)|false|none|The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).|
|rawHashes|string(byte)|false|none|The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4RawIndices">GoogleSecuritySafebrowsingV4RawIndices</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4rawindices"></a>
<a id="schema_GoogleSecuritySafebrowsingV4RawIndices"></a>
<a id="tocSgooglesecuritysafebrowsingv4rawindices"></a>
<a id="tocsgooglesecuritysafebrowsingv4rawindices"></a>

```json
{
  "indices": [
    0
  ]
}
```

A set of raw indices to remove from a local list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indices|[integer(int32)]|false|none|The indices to remove from a lexicographically-sorted local list.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4RiceDeltaEncoding">GoogleSecuritySafebrowsingV4RiceDeltaEncoding</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4ricedeltaencoding"></a>
<a id="schema_GoogleSecuritySafebrowsingV4RiceDeltaEncoding"></a>
<a id="tocSgooglesecuritysafebrowsingv4ricedeltaencoding"></a>
<a id="tocsgooglesecuritysafebrowsingv4ricedeltaencoding"></a>

```json
{
  "encodedData": "string",
  "firstValue": "string",
  "numEntries": 0,
  "riceParameter": 0
}
```

The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encodedData|string(byte)|false|none|The encoded deltas that are encoded using the Golomb-Rice coder.|
|firstValue|string(int64)|false|none|The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.|
|numEntries|integer(int32)|false|none|The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.|
|riceParameter|integer(int32)|false|none|The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatEntry">GoogleSecuritySafebrowsingV4ThreatEntry</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatentry"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatEntry"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatentry"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatentry"></a>

```json
{
  "digest": "string",
  "hash": "string",
  "url": "string"
}
```

An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string(byte)|false|none|The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded.|
|hash|string(byte)|false|none|A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.|
|url|string|false|none|A URL.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatEntryMetadata">GoogleSecuritySafebrowsingV4ThreatEntryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatentrymetadata"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatEntryMetadata"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatentrymetadata"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatentrymetadata"></a>

```json
{
  "entries": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry](#schemagooglesecuritysafebrowsingv4threatentrymetadatametadataentry)]|false|none|The metadata entries.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry">GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatentrymetadatametadataentry"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatentrymetadatametadataentry"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatentrymetadatametadataentry"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A single metadata entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string(byte)|false|none|The metadata entry key. For JSON requests, the key is base64-encoded.|
|value|string(byte)|false|none|The metadata entry value. For JSON requests, the value is base64-encoded.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatEntrySet">GoogleSecuritySafebrowsingV4ThreatEntrySet</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatentryset"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatEntrySet"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatentryset"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatentryset"></a>

```json
{
  "compressionType": "COMPRESSION_TYPE_UNSPECIFIED",
  "rawHashes": {
    "prefixSize": 0,
    "rawHashes": "string"
  },
  "rawIndices": {
    "indices": [
      0
    ]
  },
  "riceHashes": {
    "encodedData": "string",
    "firstValue": "string",
    "numEntries": 0,
    "riceParameter": 0
  },
  "riceIndices": {
    "encodedData": "string",
    "firstValue": "string",
    "numEntries": 0,
    "riceParameter": 0
  }
}
```

A set of threats that should be added or removed from a client's local database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compressionType|string|false|none|The compression type for the entries in this set.|
|rawHashes|[GoogleSecuritySafebrowsingV4RawHashes](#schemagooglesecuritysafebrowsingv4rawhashes)|false|none|The raw SHA256-formatted entries.|
|rawIndices|[GoogleSecuritySafebrowsingV4RawIndices](#schemagooglesecuritysafebrowsingv4rawindices)|false|none|The raw removal indices for a local list.|
|riceHashes|[GoogleSecuritySafebrowsingV4RiceDeltaEncoding](#schemagooglesecuritysafebrowsingv4ricedeltaencoding)|false|none|The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data.|
|riceIndices|[GoogleSecuritySafebrowsingV4RiceDeltaEncoding](#schemagooglesecuritysafebrowsingv4ricedeltaencoding)|false|none|The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data.|

#### Enumerated Values

|Property|Value|
|---|---|
|compressionType|COMPRESSION_TYPE_UNSPECIFIED|
|compressionType|RAW|
|compressionType|RICE|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatHit">GoogleSecuritySafebrowsingV4ThreatHit</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threathit"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatHit"></a>
<a id="tocSgooglesecuritysafebrowsingv4threathit"></a>
<a id="tocsgooglesecuritysafebrowsingv4threathit"></a>

```json
{
  "clientInfo": {
    "clientId": "string",
    "clientVersion": "string"
  },
  "entry": {
    "digest": "string",
    "hash": "string",
    "url": "string"
  },
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "resources": [
    {
      "referrer": "string",
      "remoteIp": "string",
      "type": "THREAT_SOURCE_TYPE_UNSPECIFIED",
      "url": "string"
    }
  ],
  "threatType": "THREAT_TYPE_UNSPECIFIED",
  "userInfo": {
    "regionCode": "string",
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientInfo|[GoogleSecuritySafebrowsingV4ClientInfo](#schemagooglesecuritysafebrowsingv4clientinfo)|false|none|Client-reported identification.|
|entry|[GoogleSecuritySafebrowsingV4ThreatEntry](#schemagooglesecuritysafebrowsingv4threatentry)|false|none|The threat entry responsible for the hit. Full hash should be reported for hash-based hits.|
|platformType|string|false|none|The platform type reported.|
|resources|[[GoogleSecuritySafebrowsingV4ThreatHitThreatSource](#schemagooglesecuritysafebrowsingv4threathitthreatsource)]|false|none|The resources related to the threat hit.|
|threatType|string|false|none|The threat type reported.|
|userInfo|[GoogleSecuritySafebrowsingV4ThreatHitUserInfo](#schemagooglesecuritysafebrowsingv4threathituserinfo)|false|none|Details about the user that encountered the threat.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WINDOWS|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|OSX|
|platformType|IOS|
|platformType|ANY_PLATFORM|
|platformType|ALL_PLATFORMS|
|platformType|CHROME|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|POTENTIALLY_HARMFUL_APPLICATION|
|threatType|SOCIAL_ENGINEERING_INTERNAL|
|threatType|API_ABUSE|
|threatType|MALICIOUS_BINARY|
|threatType|CSD_WHITELIST|
|threatType|CSD_DOWNLOAD_WHITELIST|
|threatType|CLIENT_INCIDENT|
|threatType|CLIENT_INCIDENT_WHITELIST|
|threatType|APK_MALWARE_OFFLINE|
|threatType|SUBRESOURCE_FILTER|
|threatType|SUSPICIOUS|
|threatType|TRICK_TO_BILL|
|threatType|HIGH_CONFIDENCE_ALLOWLIST|
|threatType|ACCURACY_TIPS|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatHitThreatSource">GoogleSecuritySafebrowsingV4ThreatHitThreatSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threathitthreatsource"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatHitThreatSource"></a>
<a id="tocSgooglesecuritysafebrowsingv4threathitthreatsource"></a>
<a id="tocsgooglesecuritysafebrowsingv4threathitthreatsource"></a>

```json
{
  "referrer": "string",
  "remoteIp": "string",
  "type": "THREAT_SOURCE_TYPE_UNSPECIFIED",
  "url": "string"
}
```

A single resource related to a threat hit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referrer|string|false|none|Referrer of the resource. Only set if the referrer is available.|
|remoteIp|string|false|none|The remote IP of the resource in ASCII format. Either IPv4 or IPv6.|
|type|string|false|none|The type of source reported.|
|url|string|false|none|The URL of the resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|THREAT_SOURCE_TYPE_UNSPECIFIED|
|type|MATCHING_URL|
|type|TAB_URL|
|type|TAB_REDIRECT|
|type|TAB_RESOURCE|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatHitUserInfo">GoogleSecuritySafebrowsingV4ThreatHitUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threathituserinfo"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatHitUserInfo"></a>
<a id="tocSgooglesecuritysafebrowsingv4threathituserinfo"></a>
<a id="tocsgooglesecuritysafebrowsingv4threathituserinfo"></a>

```json
{
  "regionCode": "string",
  "userId": "string"
}
```

Details about the user that encountered the threat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionCode|string|false|none|The UN M.49 region code associated with the user's location.|
|userId|string(byte)|false|none|Unique user identifier defined by the client.|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatInfo">GoogleSecuritySafebrowsingV4ThreatInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatinfo"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatInfo"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatinfo"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatinfo"></a>

```json
{
  "platformTypes": [
    "PLATFORM_TYPE_UNSPECIFIED"
  ],
  "threatEntries": [
    {
      "digest": "string",
      "hash": "string",
      "url": "string"
    }
  ],
  "threatEntryTypes": [
    "THREAT_ENTRY_TYPE_UNSPECIFIED"
  ],
  "threatTypes": [
    "THREAT_TYPE_UNSPECIFIED"
  ]
}
```

The information regarding one or more threats that a client submits when checking for matches in threat lists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platformTypes|[string]|false|none|The platform types to be checked.|
|threatEntries|[[GoogleSecuritySafebrowsingV4ThreatEntry](#schemagooglesecuritysafebrowsingv4threatentry)]|false|none|The threat entries to be checked.|
|threatEntryTypes|[string]|false|none|The entry types to be checked.|
|threatTypes|[string]|false|none|The threat types to be checked.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformTypes|PLATFORM_TYPE_UNSPECIFIED|
|platformTypes|WINDOWS|
|platformTypes|LINUX|
|platformTypes|ANDROID|
|platformTypes|OSX|
|platformTypes|IOS|
|platformTypes|ANY_PLATFORM|
|platformTypes|ALL_PLATFORMS|
|platformTypes|CHROME|
|threatEntryTypes|THREAT_ENTRY_TYPE_UNSPECIFIED|
|threatEntryTypes|URL|
|threatEntryTypes|EXECUTABLE|
|threatEntryTypes|IP_RANGE|
|threatEntryTypes|CHROME_EXTENSION|
|threatEntryTypes|FILENAME|
|threatEntryTypes|CERT|
|threatTypes|THREAT_TYPE_UNSPECIFIED|
|threatTypes|MALWARE|
|threatTypes|SOCIAL_ENGINEERING|
|threatTypes|UNWANTED_SOFTWARE|
|threatTypes|POTENTIALLY_HARMFUL_APPLICATION|
|threatTypes|SOCIAL_ENGINEERING_INTERNAL|
|threatTypes|API_ABUSE|
|threatTypes|MALICIOUS_BINARY|
|threatTypes|CSD_WHITELIST|
|threatTypes|CSD_DOWNLOAD_WHITELIST|
|threatTypes|CLIENT_INCIDENT|
|threatTypes|CLIENT_INCIDENT_WHITELIST|
|threatTypes|APK_MALWARE_OFFLINE|
|threatTypes|SUBRESOURCE_FILTER|
|threatTypes|SUSPICIOUS|
|threatTypes|TRICK_TO_BILL|
|threatTypes|HIGH_CONFIDENCE_ALLOWLIST|
|threatTypes|ACCURACY_TIPS|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatListDescriptor">GoogleSecuritySafebrowsingV4ThreatListDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatlistdescriptor"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatListDescriptor"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatlistdescriptor"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatlistdescriptor"></a>

```json
{
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
  "threatType": "THREAT_TYPE_UNSPECIFIED"
}
```

Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platformType|string|false|none|The platform type targeted by the list's entries.|
|threatEntryType|string|false|none|The entry types contained in the list.|
|threatType|string|false|none|The threat type posed by the list's entries.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WINDOWS|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|OSX|
|platformType|IOS|
|platformType|ANY_PLATFORM|
|platformType|ALL_PLATFORMS|
|platformType|CHROME|
|threatEntryType|THREAT_ENTRY_TYPE_UNSPECIFIED|
|threatEntryType|URL|
|threatEntryType|EXECUTABLE|
|threatEntryType|IP_RANGE|
|threatEntryType|CHROME_EXTENSION|
|threatEntryType|FILENAME|
|threatEntryType|CERT|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|POTENTIALLY_HARMFUL_APPLICATION|
|threatType|SOCIAL_ENGINEERING_INTERNAL|
|threatType|API_ABUSE|
|threatType|MALICIOUS_BINARY|
|threatType|CSD_WHITELIST|
|threatType|CSD_DOWNLOAD_WHITELIST|
|threatType|CLIENT_INCIDENT|
|threatType|CLIENT_INCIDENT_WHITELIST|
|threatType|APK_MALWARE_OFFLINE|
|threatType|SUBRESOURCE_FILTER|
|threatType|SUSPICIOUS|
|threatType|TRICK_TO_BILL|
|threatType|HIGH_CONFIDENCE_ALLOWLIST|
|threatType|ACCURACY_TIPS|

<h2 id="tocS_GoogleSecuritySafebrowsingV4ThreatMatch">GoogleSecuritySafebrowsingV4ThreatMatch</h2>
<!-- backwards compatibility -->
<a id="schemagooglesecuritysafebrowsingv4threatmatch"></a>
<a id="schema_GoogleSecuritySafebrowsingV4ThreatMatch"></a>
<a id="tocSgooglesecuritysafebrowsingv4threatmatch"></a>
<a id="tocsgooglesecuritysafebrowsingv4threatmatch"></a>

```json
{
  "cacheDuration": "string",
  "platformType": "PLATFORM_TYPE_UNSPECIFIED",
  "threat": {
    "digest": "string",
    "hash": "string",
    "url": "string"
  },
  "threatEntryMetadata": {
    "entries": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "threatEntryType": "THREAT_ENTRY_TYPE_UNSPECIFIED",
  "threatType": "THREAT_TYPE_UNSPECIFIED"
}
```

A match when checking a threat entry in the Safe Browsing threat lists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheDuration|string(google-duration)|false|none|The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives.|
|platformType|string|false|none|The platform type matching this threat.|
|threat|[GoogleSecuritySafebrowsingV4ThreatEntry](#schemagooglesecuritysafebrowsingv4threatentry)|false|none|The threat matching this threat.|
|threatEntryMetadata|[GoogleSecuritySafebrowsingV4ThreatEntryMetadata](#schemagooglesecuritysafebrowsingv4threatentrymetadata)|false|none|Optional metadata associated with this threat.|
|threatEntryType|string|false|none|The threat entry type matching this threat.|
|threatType|string|false|none|The threat type matching this threat.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WINDOWS|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|OSX|
|platformType|IOS|
|platformType|ANY_PLATFORM|
|platformType|ALL_PLATFORMS|
|platformType|CHROME|
|threatEntryType|THREAT_ENTRY_TYPE_UNSPECIFIED|
|threatEntryType|URL|
|threatEntryType|EXECUTABLE|
|threatEntryType|IP_RANGE|
|threatEntryType|CHROME_EXTENSION|
|threatEntryType|FILENAME|
|threatEntryType|CERT|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|POTENTIALLY_HARMFUL_APPLICATION|
|threatType|SOCIAL_ENGINEERING_INTERNAL|
|threatType|API_ABUSE|
|threatType|MALICIOUS_BINARY|
|threatType|CSD_WHITELIST|
|threatType|CSD_DOWNLOAD_WHITELIST|
|threatType|CLIENT_INCIDENT|
|threatType|CLIENT_INCIDENT_WHITELIST|
|threatType|APK_MALWARE_OFFLINE|
|threatType|SUBRESOURCE_FILTER|
|threatType|SUSPICIOUS|
|threatType|TRICK_TO_BILL|
|threatType|HIGH_CONFIDENCE_ALLOWLIST|
|threatType|ACCURACY_TIPS|
