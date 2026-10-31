<h1 id="prime-reportstream">Prime ReportStream v0.2.0-oas3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A router of public health data from multiple senders and receivers

Base URLs:

* <a href="http://cdcgov.local">http://cdcgov.local</a>

Email: <a href="mailto:reportstream@cdc.gov">USDS at Centers for Disease Control and Prevention</a> 
Web: <a href="https://reportstream.cdc.gov">USDS at Centers for Disease Control and Prevention</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **x-functions-key**, in: header.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://hhs-prime.okta.com/oauth/authorize](https://hhs-prime.okta.com/oauth/authorize)
    - Token URL = [https://hhs-prime.okta.com/oauth/token](https://hhs-prime.okta.com/oauth/token)

|Scope|Scope Description|
|---|---|
|org_admin|Grants write access to single org|
|system_admin|Grants access to admin operations|
|user|Grants read access|

<h1 id="prime-reportstream-default">Default</h1>

## Post a report to the data hub

> Code samples

```bash
curl 'https://example.com/reports?client=simple_report' \
  -X POST \
  -H 'Content-Type: text/csv' \
  -H 'Accept: application/json' \
  -H "x-functions-key: ${API_KEY}" \
  -d 'header1, header2
value1, value2'
```

`POST /reports`

> Body parameter

```text
header1, header2
value1, value2
```

<h3 id="post-a-report-to-the-data-hub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client|query|string|true|The client's name that matches the client name in metadata|
|option|query|string|false|Optional ways to process the request|
|default|query|[string]|false|Dynamic default values for an element. ':' or %3A is used to seperate element name and value|
|routeTo|query|[string]|false|A comma speparated list of receiver names. Limit the list of possible receivers to these receivers.|
|body|body|string|true|The public health information being routed|

#### Enumerated Values

|Parameter|Value|
|---|---|
|option|ValidatePayload|
|option|CheckConnections|
|option|SendImmediately|
|option|SkipSend|
|option|SkipInvalidItems|

> Example responses

> 200 Response

```json
{
  "destinationCount": 0,
  "destinations": [
    {
      "itemCount": 0,
      "organization": "string",
      "organization_id": "string",
      "sending_at": "1970-01-01T00:00:00Z",
      "service": "string"
    }
  ],
  "errorCount": 0,
  "errors": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ],
  "id": "string",
  "reportItemCount": 0,
  "routing": [
    {
      "destinations": [
        "string"
      ],
      "reportIndex": 0,
      "trackingId": "string"
    }
  ],
  "timestamp": "string",
  "topic": "string",
  "warningCount": 0,
  "warnings": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ]
}
```

> 201 Response

```json
{
  "destinationCount": 0,
  "destinations": [
    {
      "itemCount": 0,
      "organization": "string",
      "organization_id": "string",
      "sending_at": "1970-01-01T00:00:00Z",
      "service": "string"
    }
  ],
  "errorCount": 0,
  "errors": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ],
  "id": "string",
  "reportItemCount": 0,
  "routing": [
    {
      "destinations": [
        "string"
      ],
      "reportIndex": 0,
      "trackingId": "string"
    }
  ],
  "timestamp": "string",
  "topic": "string",
  "warningCount": 0,
  "warnings": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ]
}
```

> 400 Response

```json
{
  "destinationCount": 0,
  "destinations": [
    {
      "itemCount": 0,
      "organization": "string",
      "organization_id": "string",
      "sending_at": "1970-01-01T00:00:00Z",
      "service": "string"
    }
  ],
  "errorCount": 0,
  "errors": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ],
  "id": "string",
  "reportItemCount": 0,
  "routing": [
    {
      "destinations": [
        "string"
      ],
      "reportIndex": 0,
      "trackingId": "string"
    }
  ],
  "timestamp": "string",
  "topic": "string",
  "warningCount": 0,
  "warnings": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ]
}
```

<h3 id="post-a-report-to-the-data-hub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|
|201|Created|Created. A report was created, but items may have been rejected.|[Report](#schemareport)|
|400|Bad Request|Invalid request. No report created.|[Report](#schemareport)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## get/settings/organizations

> Code samples

```bash
curl https://example.com/settings/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations`

The settings for all organizations of the system. Must have admin access.

> Example responses

> 200 Response

```json
[
  {
    "countyName": "Pima",
    "description": "Arizona PHD",
    "jurisdiction": "National",
    "meta": {
      "createdAt": "string",
      "createdBy": "jj@phd.gov",
      "version": 11
    },
    "name": "az-phd",
    "stateCode": "AZ"
  }
]
```

<h3 id="getsettingsorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="getsettingsorganizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Last-Modified|string||The date and time any setting was modified in GMT.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: system_admin )
</aside>

## head/settings/organizations

> Code samples

```bash
curl https://example.com/settings/organizations \
  -X HEAD \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`HEAD /settings/organizations`

Retrived the last modified for all settings of the system. Must have admin access.

<h3 id="headsettingsorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Last-Modified|string||The Last-Modified response HTTP header contains the date and time any setting was modified.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: system_admin )
</aside>

## get/settings/organizations/{organizationName}

> Code samples

```bash
curl https://example.com/settings/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations/{organizationName}`

A single organization settings

<h3 id="getsettingsorganizationsorganizationname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|The name of the organization|

> Example responses

> 200 Response

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd",
  "stateCode": "AZ"
}
```

<h3 id="getsettingsorganizationsorganizationname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## put/settings/organizations/{organizationName}

> Code samples

```bash
curl https://example.com/settings/organizations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "countyName": "Pima",
    "description": "Arizona PHD",
    "jurisdiction": "National",
    "meta": {},
    "name": "az-phd",
    "stateCode": "AZ"
  }'
```

`PUT /settings/organizations/{organizationName}`

Create or update the direct settings associated with an organization

> Body parameter

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {},
  "name": "az-phd",
  "stateCode": "AZ"
}
```

<h3 id="putsettingsorganizationsorganizationname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|The name of the organization|
|body|body|[Organization](#schemaorganization)|false|none|
|» countyName|body|string|false|the county name (must match FIPS name)|
|» description|body|string|true|the displayable description of the organization|
|» jurisdiction|body|string|true|none|
|» meta|body|[SettingMetadata](#schemasettingmetadata)|false|The metadata associated with an setting|
|» name|body|string|true|the unique id for the organization|
|» stateCode|body|string|false|the two letter code for the organization|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» jurisdiction|National|
|» jurisdiction|State|
|» jurisdiction|County|

> Example responses

> 200 Response

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd",
  "stateCode": "AZ"
}
```

> 201 Response

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd",
  "stateCode": "AZ"
}
```

<h3 id="putsettingsorganizationsorganizationname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK, the organization setting was updated|[Organization](#schemaorganization)|
|201|Created|Created|[Organization](#schemaorganization)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: system_admin )
</aside>

## delete/settings/organizations/{organizationName}

> Code samples

```bash
curl https://example.com/settings/organizations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/organizations/{organizationName}`

Delete an organization (and the associated receivers and senders)

<h3 id="deletesettingsorganizationsorganizationname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|The name of the organization|

> Example responses

> 200 Response

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd",
  "stateCode": "AZ"
}
```

<h3 id="deletesettingsorganizationsorganizationname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK, the organization setting was deleted|[Organization](#schemaorganization)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: system_admin )
</aside>

## get/settings/organizations/{organizationName}/receivers

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/receivers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations/{organizationName}/receivers`

A list of receivers and their current settings

<h3 id="getsettingsorganizationsorganizationnamereceivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Fetch receivers with this organization name|

> Example responses

> 200 Response

```json
[
  {
    "description": "Arizona PHD ELR feed",
    "jurisdictionalFilters": [
      {
        "doesNotMatch": false,
        "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
        "matchValues": [
          "string"
        ]
      }
    ],
    "meta": {
      "createdAt": "string",
      "createdBy": "jj@phd.gov",
      "version": 11
    },
    "name": "az-phd.elr",
    "organizationName": "az-phd",
    "timing": {
      "dailyAt": 0,
      "frequency": "REAL_TIME"
    },
    "topic": "covid-19",
    "translations": [
      {
        "format": "CSV",
        "nameFormat": "standard",
        "receivingOrganization": null,
        "schemaName": "string",
        "transport": {
          "filePath": "/in/test",
          "host": "sftp.phd.gov",
          "port": 22,
          "type": "SFTP"
        },
        "type": "CUSTOM"
      }
    ]
  }
]
```

<h3 id="getsettingsorganizationsorganizationnamereceivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="getsettingsorganizationsorganizationnamereceivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Receiver](#schemareceiver)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## get/settings/organizations/{organizationName}/receivers/{receiverName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/receivers/elr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations/{organizationName}/receivers/{receiverName}`

The settings of a single of receiver

<h3 id="getsettingsorganizationsorganizationnamereceiversreceivername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Create receivers under this organization name|
|receiverName|path|string|true|The name of the receiver|

> Example responses

> 200 Response

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd.elr",
  "organizationName": "az-phd",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

<h3 id="getsettingsorganizationsorganizationnamereceiversreceivername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Receiver](#schemareceiver)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## put/settings/organizations/{organizationName}/receivers/{receiverName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/receivers/elr \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Arizona PHD ELR feed",
    "jurisdictionalFilters": [
      {
        "doesNotMatch": false,
        "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
        "matchValues": [
          "string"
        ]
      }
    ],
    "meta": {},
    "name": "az-phd.elr",
    "timing": {
      "dailyAt": 0,
      "frequency": "REAL_TIME"
    },
    "topic": "covid-19",
    "translations": [
      {
        "format": "CSV",
        "nameFormat": "standard",
        "receivingOrganization": null,
        "schemaName": "string",
        "transport": {
          "filePath": "/in/test",
          "host": "sftp.phd.gov",
          "port": 22,
          "type": "SFTP"
        },
        "type": "CUSTOM"
      }
    ]
  }'
```

`PUT /settings/organizations/{organizationName}/receivers/{receiverName}`

Update a single reciever

> Body parameter

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {},
  "name": "az-phd.elr",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

<h3 id="putsettingsorganizationsorganizationnamereceiversreceivername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Create receivers under this organization name|
|receiverName|path|string|true|The name of the receiver|
|body|body|[Receiver](#schemareceiver)|false|none|
|» description|body|string|true|Display ready description of the receiver|
|» jurisdictionalFilters|body|[object]|false|What items to include in the report.|
|» » doesNotMatch|body|boolean|false|Ensure that the result does not match|
|» » matchFields|body|string|false|What fields to match in the filter|
|» » matchValues|body|[string]|false|What is the value to match against|
|» meta|body|[SettingMetadata](#schemasettingmetadata)|false|The metadata associated with an setting|
|» name|body|string|true|The unique name for the receiver. Should include the organization name as a prefix.|
|» timing|body|object|true|When the report is sent if not immediately|
|» » dailyAt|body|number|false|The UTC hour to send a daily batch|
|» » frequency|body|string|true|How often send a report|
|» topic|body|string|true|The topic of for this receiver. Must match the supported topics.|
|» translations|body|[[CustomConfiguration](#schemacustomconfiguration) \| [StandardHL7Configuration](#schemastandardhl7configuration) \| [RedoxConfiguration](#schemaredoxconfiguration)]|false|How the report is translated from the sender. A report can be sent in multiple ways.|
|» » *anyOf*|body|[CustomConfiguration](#schemacustomconfiguration)|false|A custom configuration for a custom schema|
|» » *anyOf*|body|[StandardHL7Configuration](#schemastandardhl7configuration)|false|A standard HL7 configuration|
|» » *anyOf*|body|[RedoxConfiguration](#schemaredoxconfiguration)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » matchFields|FACILITY_OR_PATIENT_ADDRESS|
|» » matchFields|FACILITY_ADDRESS|
|» » matchFields|FACILITY_NAME|
|» » matchFields|ABNORMAL_VALUE|
|» » frequency|REAL_TIME|
|» » frequency|HOURLY|
|» » frequency|DAILY|

> Example responses

> 200 Response

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd.elr",
  "organizationName": "az-phd",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

> 201 Response

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd.elr",
  "organizationName": "az-phd",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

<h3 id="putsettingsorganizationsorganizationnamereceiversreceivername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK, the receiver setting was updated|[Receiver](#schemareceiver)|
|201|Created|Created|[Receiver](#schemareceiver)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: org_admin )
</aside>

## delete/settings/organizations/{organizationName}/receivers/{receiverName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/receivers/elr \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/organizations/{organizationName}/receivers/{receiverName}`

Delete a receiver

<h3 id="deletesettingsorganizationsorganizationnamereceiversreceivername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|the organization name|
|receiverName|path|string|true|The name of the receiver|

> Example responses

> 200 Response

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd.elr",
  "organizationName": "az-phd",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

<h3 id="deletesettingsorganizationsorganizationnamereceiversreceivername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK, the receiver was deleted|[Receiver](#schemareceiver)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: org_admin )
</aside>

## get/settings/organizations/{organizationName}/senders

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/senders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations/{organizationName}/senders`

A list of senders

<h3 id="getsettingsorganizationsorganizationnamesenders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Fetch senders with this organization name|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "format": "CSV",
    "meta": {
      "createdAt": "string",
      "createdBy": "jj@phd.gov",
      "version": 11
    },
    "name": "simple_report.default",
    "organizationName": "az-phd",
    "schema": "az-phd-covid-19",
    "topic": "covid-19"
  }
]
```

<h3 id="getsettingsorganizationsorganizationnamesenders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="getsettingsorganizationsorganizationnamesenders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sender](#schemasender)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## get/settings/organizations/{organizationName}/senders/{senderName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/senders/default \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/organizations/{organizationName}/senders/{senderName}`

The settings of a single of sender

<h3 id="getsettingsorganizationsorganizationnamesenderssendername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Fetch senders with this organization name|
|senderName|path|string|true|The name of a sender to the data hub|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "format": "CSV",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "simple_report.default",
  "organizationName": "az-phd",
  "schema": "az-phd-covid-19",
  "topic": "covid-19"
}
```

<h3 id="getsettingsorganizationsorganizationnamesenderssendername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Sender](#schemasender)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: user )
</aside>

## put/settings/organizations/{organizationName}/senders/{senderName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/senders/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "format": "CSV",
    "meta": {},
    "name": "simple_report.default",
    "schema": "az-phd-covid-19",
    "topic": "covid-19"
  }'
```

`PUT /settings/organizations/{organizationName}/senders/{senderName}`

Update a single sender

> Body parameter

```json
{
  "description": "string",
  "format": "CSV",
  "meta": {},
  "name": "simple_report.default",
  "schema": "az-phd-covid-19",
  "topic": "covid-19"
}
```

<h3 id="putsettingsorganizationsorganizationnamesenderssendername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|Fetch senders with this organization name|
|senderName|path|string|true|The name of a sender to the data hub|
|body|body|[Sender](#schemasender)|false|none|
|» description|body|string|true|Display ready description of the sender|
|» format|body|string|true|the payload format|
|» meta|body|[SettingMetadata](#schemasettingmetadata)|false|The metadata associated with an setting|
|» name|body|string|true|Unique name for the senders, includes the orgninzation name|
|» schema|body|string|true|the schema name for this sender|
|» topic|body|string|true|Topic of for this sender. Must match the supported topics.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|CSV|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "format": "CSV",
    "meta": {
      "createdAt": "string",
      "createdBy": "jj@phd.gov",
      "version": 11
    },
    "name": "simple_report.default",
    "organizationName": "az-phd",
    "schema": "az-phd-covid-19",
    "topic": "covid-19"
  }
]
```

> 201 Response

```json
[
  {
    "description": "string",
    "format": "CSV",
    "meta": {
      "createdAt": "string",
      "createdBy": "jj@phd.gov",
      "version": 11
    },
    "name": "simple_report.default",
    "organizationName": "az-phd",
    "schema": "az-phd-covid-19",
    "topic": "covid-19"
  }
]
```

<h3 id="putsettingsorganizationsorganizationnamesenderssendername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|OK|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="putsettingsorganizationsorganizationnamesenderssendername-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sender](#schemasender)]|false|none|none|

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sender](#schemasender)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: org_admin )
</aside>

## delete/settings/organizations/{organizationName}/senders/{senderName}

> Code samples

```bash
curl https://example.com/settings/organizations/az-phd/senders/default \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /settings/organizations/{organizationName}/senders/{senderName}`

Delete a sender

<h3 id="deletesettingsorganizationsorganizationnamesenderssendername-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|path|string|true|the organization name|
|senderName|path|string|true|The name of a sender to the data hub|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "format": "CSV",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "simple_report.default",
  "organizationName": "az-phd",
  "schema": "az-phd-covid-19",
  "topic": "covid-19"
}
```

<h3 id="deletesettingsorganizationsorganizationnamesenderssendername-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK, the sender was deleted|[Sender](#schemasender)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: org_admin )
</aside>

# Schemas

<h2 id="tocS_AS2Transport">AS2Transport</h2>
<!-- backwards compatibility -->
<a id="schemaas2transport"></a>
<a id="schema_AS2Transport"></a>
<a id="tocSas2transport"></a>
<a id="tocsas2transport"></a>

```json
{
  "contentDescription": "SARS-CoV-2 Electronic Lab Results",
  "mimeType": "application/hl7-v2",
  "receiverId": "exampleAS2Id",
  "receiverUrl": "https://as2.example.com/receiver.aspx",
  "senderEmail": "reportstream@cdc.gov",
  "senderId": "primeAS2Id",
  "type": "AS2"
}
```

Describes a single AS2 connection in all of it variations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDescription|string|false|none|A description of the content of the message. Usually, the same for all messages.|
|mimeType|string|false|none|The MIME type of the message|
|receiverId|string|true|none|The AS2 id of the receiver. Usually, the same for all senders.|
|receiverUrl|string|true|none|The URL to the AS2 end-point|
|senderEmail|string|false|none|The email address to contact someone about the message|
|senderId|string|true|none|The AS2 id of the sender. Usually, assigned by receiver to PRIME.|
|type|string|true|none|The discriminator|

<h2 id="tocS_BlobStoreTransport">BlobStoreTransport</h2>
<!-- backwards compatibility -->
<a id="schemablobstoretransport"></a>
<a id="schema_BlobStoreTransport"></a>
<a id="tocSblobstoretransport"></a>
<a id="tocsblobstoretransport"></a>

```json
{
  "containerName": "hhsprotect",
  "storageName": "string",
  "type": "BLOBSTORE"
}
```

Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerName|string|true|none|This name of the Azure container|
|storageName|string|true|none|This looks for an env var with this name. env var value is the connection string|
|type|string|true|none|The discriminator|

<h2 id="tocS_CustomConfiguration">CustomConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacustomconfiguration"></a>
<a id="schema_CustomConfiguration"></a>
<a id="tocScustomconfiguration"></a>
<a id="tocscustomconfiguration"></a>

```json
{
  "format": "CSV",
  "nameFormat": "standard",
  "receivingOrganization": null,
  "schemaName": "string",
  "transport": {
    "filePath": "/in/test",
    "host": "sftp.phd.gov",
    "port": 22,
    "type": "SFTP"
  },
  "type": "CUSTOM"
}
```

A custom configuration for a custom schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|true|none|The format of the serializer|
|nameFormat|string|false|none|The format to use for the file name generated by the translation|
|receivingOrganization|string|false|none|The name of the receiving organization in the message|
|schemaName|string|true|none|The name of the custom schema|
|transport|[SFTPTransport](#schemasftptransport) \| [AS2Transport](#schemaas2transport) \| [BlobStoreTransport](#schemablobstoretransport) \| [NullTransport](#schemanulltransport)|true|none|The transport to use|
|type|string|true|none|The discrimenator|

#### Enumerated Values

|Property|Value|
|---|---|
|format|CSV|
|format|HL7|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "itemCount": 0,
  "organization": "string",
  "organization_id": "string",
  "sending_at": "1970-01-01T00:00:00Z",
  "service": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemCount|integer|false|none|The number of reports being sent to this destination|
|organization|string|false|none|The name of the organization reciving the report|
|organization_id|string|false|none|The organization id (i.e. {state abbreviation}-phd)|
|sending_at|string(date-time)|false|none|The time at which the report will be sent|
|service|string|false|none|The service used for delivering the report|

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "detail": "string",
  "id": "string",
  "scope": "Parameter"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|The details of the error|
|id|string|false|none|Depends on scope, either the item's id (message_id) or the report's id|
|scope|string|false|none|Does the error apply to one item|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|Parameter|
|scope|Report|
|scope|Item|

<h2 id="tocS_ItemRouting">ItemRouting</h2>
<!-- backwards compatibility -->
<a id="schemaitemrouting"></a>
<a id="schema_ItemRouting"></a>
<a id="tocSitemrouting"></a>
<a id="tocsitemrouting"></a>

```json
{
  "destinations": [
    "string"
  ],
  "reportIndex": 0,
  "trackingId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|[string]|false|none|The organization and service destinations|
|reportIndex|integer|false|none|the index of the item in the submitted report (0 based)|
|trackingId|string|false|none|The tracking id provided by the sender defined in the schema, null otherwise|

<h2 id="tocS_NullTransport">NullTransport</h2>
<!-- backwards compatibility -->
<a id="schemanulltransport"></a>
<a id="schema_NullTransport"></a>
<a id="tocSnulltransport"></a>
<a id="tocsnulltransport"></a>

```json
{
  "dummy": "string",
  "type": null
}
```

A transport type that does not do anything

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dummy|string|false|none|A dummy value|
|type|string|true|none|The discriminator|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "countyName": "Pima",
  "description": "Arizona PHD",
  "jurisdiction": "National",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd",
  "stateCode": "AZ"
}
```

An organization connected to data hub

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countyName|string|false|none|the county name (must match FIPS name)|
|description|string|true|none|the displayable description of the organization|
|jurisdiction|string|true|none|none|
|meta|[SettingMetadata](#schemasettingmetadata)|false|none|The metadata associated with an setting|
|name|string|true|none|the unique id for the organization|
|stateCode|string|false|none|the two letter code for the organization|

#### Enumerated Values

|Property|Value|
|---|---|
|jurisdiction|National|
|jurisdiction|State|
|jurisdiction|County|

<h2 id="tocS_Receiver">Receiver</h2>
<!-- backwards compatibility -->
<a id="schemareceiver"></a>
<a id="schema_Receiver"></a>
<a id="tocSreceiver"></a>
<a id="tocsreceiver"></a>

```json
{
  "description": "Arizona PHD ELR feed",
  "jurisdictionalFilters": [
    {
      "doesNotMatch": false,
      "matchFields": "FACILITY_OR_PATIENT_ADDRESS",
      "matchValues": [
        "string"
      ]
    }
  ],
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "az-phd.elr",
  "organizationName": "az-phd",
  "timing": {
    "dailyAt": 0,
    "frequency": "REAL_TIME"
  },
  "topic": "covid-19",
  "translations": [
    {
      "format": "CSV",
      "nameFormat": "standard",
      "receivingOrganization": null,
      "schemaName": "string",
      "transport": {
        "filePath": "/in/test",
        "host": "sftp.phd.gov",
        "port": 22,
        "type": "SFTP"
      },
      "type": "CUSTOM"
    }
  ]
}
```

A receiver of reports from the data hub

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Display ready description of the receiver|
|jurisdictionalFilters|[object]|false|none|What items to include in the report.|
|meta|[SettingMetadata](#schemasettingmetadata)|false|none|The metadata associated with an setting|
|name|string|true|none|The unique name for the receiver. Should include the organization name as a prefix.|
|organizationName|string|false|read-only|The name of the organization that this receiver belongs to|
|timing|object|true|none|When the report is sent if not immediately|
|topic|string|true|none|The topic of for this receiver. Must match the supported topics.|
|translations|[[CustomConfiguration](#schemacustomconfiguration) \| [StandardHL7Configuration](#schemastandardhl7configuration) \| [RedoxConfiguration](#schemaredoxconfiguration)]|false|none|How the report is translated from the sender. A report can be sent in multiple ways.|

<h2 id="tocS_RedoxConfiguration">RedoxConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaredoxconfiguration"></a>
<a id="schema_RedoxConfiguration"></a>
<a id="tocSredoxconfiguration"></a>
<a id="tocsredoxconfiguration"></a>

```json
null
```

<h2 id="tocS_RedoxTransport">RedoxTransport</h2>
<!-- backwards compatibility -->
<a id="schemaredoxtransport"></a>
<a id="schema_RedoxTransport"></a>
<a id="tocSredoxtransport"></a>
<a id="tocsredoxtransport"></a>

```json
{
  "baseUrl": null,
  "type": "REDOX"
}
```

Describe the Redox transport

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|string|false|none|the base URL to send the Redox message. If missing, production Redox URL is used|
|type|string|true|none|The discriminator|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "destinationCount": 0,
  "destinations": [
    {
      "itemCount": 0,
      "organization": "string",
      "organization_id": "string",
      "sending_at": "1970-01-01T00:00:00Z",
      "service": "string"
    }
  ],
  "errorCount": 0,
  "errors": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ],
  "id": "string",
  "reportItemCount": 0,
  "routing": [
    {
      "destinations": [
        "string"
      ],
      "reportIndex": 0,
      "trackingId": "string"
    }
  ],
  "timestamp": "string",
  "topic": "string",
  "warningCount": 0,
  "warnings": [
    {
      "detail": "string",
      "id": "string",
      "scope": "Parameter"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationCount|integer|false|none|total destinations recieving the report(s)|
|destinations|[[Destination](#schemadestination)]|false|none|where the report is being sent to|
|errorCount|integer|false|none|total errors found during initial validation.  There may be multiple errors per item.|
|errors|[[Detail](#schemadetail)]|false|none|a list of errors in the report|
|id|string|true|none|the id for the report assigned by the Hub|
|reportItemCount|integer|false|none|total number of individual reports sent to the Hub (in a csv, the number of data lines sent)|
|routing|[[ItemRouting](#schemaitemrouting)]|false|none|The receiver destination names for each item in the report. This is displayed when verbose=true is present on the query string.|
|timestamp|string(time-date)|false|none|the timestamp for this report submission|
|topic|string|false|none|the topic configured for the client organization sender|
|warningCount|integer|false|none|total warnings found during initial validation.  There may be multiple warnings per item.|
|warnings|[[Detail](#schemadetail)]|false|none|a list of warnings in the report|

<h2 id="tocS_SFTPTransport">SFTPTransport</h2>
<!-- backwards compatibility -->
<a id="schemasftptransport"></a>
<a id="schema_SFTPTransport"></a>
<a id="tocSsftptransport"></a>
<a id="tocssftptransport"></a>

```json
{
  "filePath": "/in/test",
  "host": "sftp.phd.gov",
  "port": 22,
  "type": "SFTP"
}
```

Describes a single SFTP connection in all of it variations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|true|none|The file path to place the report|
|host|string|true|none|Host name and domain|
|port|number|true|none|The port to use|
|type|string|true|none|The discriminator|

<h2 id="tocS_Sender">Sender</h2>
<!-- backwards compatibility -->
<a id="schemasender"></a>
<a id="schema_Sender"></a>
<a id="tocSsender"></a>
<a id="tocssender"></a>

```json
{
  "description": "string",
  "format": "CSV",
  "meta": {
    "createdAt": "string",
    "createdBy": "jj@phd.gov",
    "version": 11
  },
  "name": "simple_report.default",
  "organizationName": "az-phd",
  "schema": "az-phd-covid-19",
  "topic": "covid-19"
}
```

An sender of reports to the data hub

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Display ready description of the sender|
|format|string|true|none|the payload format|
|meta|[SettingMetadata](#schemasettingmetadata)|false|none|The metadata associated with an setting|
|name|string|true|none|Unique name for the senders, includes the orgninzation name|
|organizationName|string|false|read-only|Name of the organization that this sender belongs to|
|schema|string|true|none|the schema name for this sender|
|topic|string|true|none|Topic of for this sender. Must match the supported topics.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|CSV|

<h2 id="tocS_SettingMetadata">SettingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasettingmetadata"></a>
<a id="schema_SettingMetadata"></a>
<a id="tocSsettingmetadata"></a>
<a id="tocssettingmetadata"></a>

```json
{
  "createdAt": "string",
  "createdBy": "jj@phd.gov",
  "version": 11
}
```

The metadata associated with an setting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(time-date)|false|read-only|the time that the particular revision was created|
|createdBy|string|false|read-only|the user who created the particular revision|
|version|number|false|read-only|the version number of the object|

<h2 id="tocS_StandardHL7Configuration">StandardHL7Configuration</h2>
<!-- backwards compatibility -->
<a id="schemastandardhl7configuration"></a>
<a id="schema_StandardHL7Configuration"></a>
<a id="tocSstandardhl7configuration"></a>
<a id="tocsstandardhl7configuration"></a>

```json
{
  "convertTimestampToDateTime": null,
  "defaultAoeToUnknown": false,
  "includeAOE": true,
  "nameFormat": "standard",
  "phoneNumberFormatting": "STANDARD",
  "receivingApplicationName": null,
  "receivingApplicationOID": null,
  "receivingFacilityName": null,
  "receivingFacilityOID": null,
  "receivingOrganization": null,
  "reportingFacilityId": null,
  "reportingFacilityIdType": null,
  "reportingFacilityName": null,
  "suppressAoe": false,
  "suppressHl7Fields": null,
  "suppressQstForAoe": false,
  "transport": {
    "filePath": "/in/test",
    "host": "sftp.phd.gov",
    "port": 22,
    "type": "SFTP"
  },
  "truncateHDNamespaceIds": false,
  "type": "STANDARD_HL7",
  "useBatchHeaders": true,
  "useBlankInsteadOfUnknown": null,
  "usePid14ForPatientEmail": false,
  "useTestProcessingMode": false
}
```

A standard HL7 configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertTimestampToDateTime|string|false|none|A comma delimited list of HL7 fields to convert to the yyyMMddHHmmss format|
|defaultAoeToUnknown|boolean|false|none|Default the AOE result to UNK|
|includeAOE|boolean|true|none|Include the AOE|
|nameFormat|string|false|none|The format to use for the file name generated by the translation|
|phoneNumberFormatting|string|false|none|How to format phone numbers (XTN fields)|
|receivingApplicationName|string|false|none|The receiving application name (needed for HL7 formats)|
|receivingApplicationOID|string|false|none|The receiving application OID|
|receivingFacilityName|string|false|none|The receiving facility name|
|receivingFacilityOID|string|false|none|The receiving facility name|
|receivingOrganization|string|false|none|The name of the receiving organization in the message|
|reportingFacilityId|string|false|none|The reporting facility id (if different from CDC PRIME's OID)|
|reportingFacilityIdType|string|false|none|The reporting facility id type (if different from OID)|
|reportingFacilityName|string|false|none|The reporting facility name (if different from CDC PRIME)|
|suppressAoe|boolean|false|none|Suppress the AOE OBX results|
|suppressHl7Fields|string|false|none|A comma delimited list of HL7 fields to suppress|
|suppressQstForAoe|boolean|false|none|Suppress QST component is AOE OBX segments|
|transport|[SFTPTransport](#schemasftptransport) \| [AS2Transport](#schemaas2transport) \| [BlobStoreTransport](#schemablobstoretransport) \| [NullTransport](#schemanulltransport)|true|none|none|
|truncateHDNamespaceIds|boolean|false|none|Truncate the HD fields to HD_TRUNCATION_LIMIT|
|type|string|true|none|The discrimenator|
|useBatchHeaders|boolean|true|none|Use BHS and FHS header|
|useBlankInsteadOfUnknown|string|false|none|A comma delimited list of element names that should use blank instead of unknown|
|usePid14ForPatientEmail|boolean|false|none|Use the PID-14 field for patient email instead of the standard PID-13 field|
|useTestProcessingMode|boolean|false|none|Set a test process mode flag|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneNumberFormatting|STANDARD|
|phoneNumberFormatting|ONLY_DIGITS_IN_COMPONENT_ONE|
|phoneNumberFormatting|AREA_LOCAL_IN_COMPONENT_ONE|
