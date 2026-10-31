<h1 id="dav">dav v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

WebDAV endpoint

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="dav-direct">direct</h1>

## Get a direct link to a file

<a id="opIddirect-get-url"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/direct \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "fileId": 0,
    "expirationTime": 0
  }'
```

`POST /ocs/v2.php/apps/dav/api/v1/direct`

> Body parameter

```json
{
  "fileId": 0,
  "expirationTime": 0
}
```

<h3 id="get-a-direct-link-to-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» fileId|body|integer(int64)|true|ID of the file|
|» expirationTime|body|integer(int64)|false|Duration until the link expires|

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
      "url": "string"
    }
  }
}
```

> 400 Response

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

> 403 Response

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
    "data": null
  }
}
```

<h3 id="get-a-direct-link-to-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Direct link returned|Inline|
|400|Bad Request|Getting direct link is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Missing permissions to get direct link|Inline|
|404|Not Found|File not found|Inline|

<h3 id="get-a-direct-link-to-a-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » url|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

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
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-federatedcalendar">federated_calendar</h1>

## Get the pending federated calendar invitations of the current user

<a id="opIdfederated_calendar-get-pending"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dav/api/v1/federated_calendars/pending`

<h3 id="get-the-pending-federated-calendar-invitations-of-the-current-user-parameters">Parameters</h3>

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
        "id": 0,
        "displayName": "string",
        "color": "string",
        "sharedBy": "string",
        "sharedByDisplayName": "string",
        "remoteUrl": "string",
        "permissions": 0,
        "components": "string"
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

<h3 id="get-the-pending-federated-calendar-invitations-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending federated calendar invitations|Inline|
|401|Unauthorized|When the user is not logged in|Inline|

<h3 id="get-the-pending-federated-calendar-invitations-of-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[PendingFederatedCalendar](#schemapendingfederatedcalendar)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Accept a pending federated calendar invitation

<a id="opIdfederated_calendar-accept"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/{id}`

<h3 id="accept-a-pending-federated-calendar-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the pending federated calendar|
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
    "data": null
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
    "data": null
  }
}
```

<h3 id="accept-a-pending-federated-calendar-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invitation accepted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The federated calendar was not found|Inline|

<h3 id="accept-a-pending-federated-calendar-invitation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

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
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Decline a pending federated calendar invitation

<a id="opIdfederated_calendar-decline"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/dav/api/v1/federated_calendars/pending/{id}`

<h3 id="decline-a-pending-federated-calendar-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the pending federated calendar|
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
    "data": null
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
    "data": null
  }
}
```

<h3 id="decline-a-pending-federated-calendar-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Invitation declined successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The federated calendar was not found|Inline|

<h3 id="decline-a-pending-federated-calendar-invitation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

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
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-upcomingevents">upcoming_events</h1>

## Get information about upcoming events

<a id="opIdupcoming_events-get-events"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/events/upcoming \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dav/api/v1/events/upcoming`

<h3 id="get-information-about-upcoming-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|query|string \| null|false|location/URL to filter by|
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
      "events": [
        {
          "uri": "string",
          "calendarUri": "string",
          "start": 0,
          "summary": "string",
          "location": "string"
        }
      ]
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

<h3 id="get-information-about-upcoming-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upcoming events|Inline|
|401|Unauthorized|When not authenticated|Inline|

<h3 id="get-information-about-upcoming-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » events|[[UpcomingEvent](#schemaupcomingevent)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-outofoffice">out_of_office</h1>

## Get the currently configured out-of-office data of a user

<a id="opIdout_of_office-get-current-out-of-office-data"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/outOfOffice/string/now \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}/now`

<h3 id="get-the-currently-configured-out-of-office-data-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user id to get out-of-office data for.|
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
      "userId": "string",
      "message": "string",
      "replacementUserId": "string",
      "replacementUserDisplayName": "string",
      "id": "string",
      "startDate": 0,
      "endDate": 0,
      "shortMessage": "string"
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
    "data": null
  }
}
```

<h3 id="get-the-currently-configured-out-of-office-data-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Out-of-office data|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|No out-of-office data was found|Inline|

<h3 id="get-the-currently-configured-out-of-office-data-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[CurrentOutOfOfficeData](#schemacurrentoutofofficedata)|true|none|none|

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the configured out-of-office data of a user.

<a id="opIdout_of_office-get-out-of-office"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/outOfOffice/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}`

<h3 id="get-the-configured-out-of-office-data-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user id to get out-of-office data for.|
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
      "userId": "string",
      "message": "string",
      "replacementUserId": "string",
      "replacementUserDisplayName": "string",
      "id": 0,
      "firstDay": "string",
      "lastDay": "string",
      "status": "string"
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
    "data": null
  }
}
```

<h3 id="get-the-configured-out-of-office-data-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Out-of-office data|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|No out-of-office data was found|Inline|

<h3 id="get-the-configured-out-of-office-data-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[OutOfOfficeData](#schemaoutofofficedata)|true|none|none|

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
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Set out-of-office absence

<a id="opIdout_of_office-set-out-of-office"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/outOfOffice/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "firstDay": "string",
    "lastDay": "string",
    "status": "string",
    "message": "string",
    "replacementUserId": "string"
  }'
```

`POST /ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}`

> Body parameter

```json
{
  "firstDay": "string",
  "lastDay": "string",
  "status": "string",
  "message": "string",
  "replacementUserId": "string"
}
```

<h3 id="set-out-of-office-absence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» firstDay|body|string|true|First day of the absence in format `YYYY-MM-DD`|
|» lastDay|body|string|true|Last day of the absence in format `YYYY-MM-DD`|
|» status|body|string|true|Short text that is set as user status during the absence|
|» message|body|string|true|Longer multiline message that is shown to others during the absence|
|» replacementUserId|body|string \| null|false|User id of the replacement user|

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
      "userId": "string",
      "message": "string",
      "replacementUserId": "string",
      "replacementUserDisplayName": "string",
      "id": 0,
      "firstDay": "string",
      "lastDay": "string",
      "status": "string"
    }
  }
}
```

> 400 Response

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
      "error": "firstDay"
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
    "data": null
  }
}
```

<h3 id="set-out-of-office-absence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Absence data|Inline|
|400|Bad Request|When validation fails, e.g. data range error or the first day is not before the last day|Inline|
|401|Unauthorized|When the user is not logged in|Inline|
|404|Not Found|When the replacementUserId was provided but replacement user was not found|Inline|

<h3 id="set-out-of-office-absence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[OutOfOfficeData](#schemaoutofofficedata)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » error|firstDay|
|» » error|statusLength|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Clear the out-of-office

<a id="opIdout_of_office-clear-out-of-office"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dav/api/v1/outOfOffice/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/dav/api/v1/outOfOffice/{userId}`

<h3 id="clear-the-out-of-office-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
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
    "data": null
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

<h3 id="clear-the-out-of-office-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|When the absence was cleared successfully|Inline|
|401|Unauthorized|When the user is not logged in|Inline|

<h3 id="clear-the-out-of-office-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object \| null|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-calendarexport">calendar_export</h1>

## Export calendar data

<a id="opIdcalendar_export-export"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/calendar/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "target": "string",
    "type": null,
    "options": null,
    "user": null
  }'
```

`POST /ocs/v2.php/calendar/export`

> Body parameter

```json
{
  "target": "string",
  "type": null,
  "options": null,
  "user": null
}
```

<h3 id="export-calendar-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» target|body|string|true|calendar id|
|» type|body|string \| null|false|data format|
|» options|body|object|false|configuration options|
|» » rangeStart|body|string|true|none|
|» » rangeCount|body|integer(int64)|true|none|
|» user|body|string \| null|false|system user id|

> Example responses

> 200 Response

```json
"string"
```

> 400 Response

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
      "error": "string"
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
    "data": {
      "error": "string"
    }
  }
}
```

<h3 id="export-calendar-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|data in requested format|Inline|
|400|Bad Request|invalid parameters|Inline|
|401|Unauthorized|user not authorized|Inline|

<h3 id="export-calendar-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-calendarimport">calendar_import</h1>

## Import calendar data

<a id="opIdcalendar_import-import"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/calendar/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "transaction": "string",
    "target": "string",
    "options": {
      "format": "string",
      "validation": 0,
      "errors": 0,
      "supersede": true,
      "showCreated": true,
      "showUpdated": true,
      "showSkipped": true,
      "showErrors": true
    },
    "data": "string",
    "user": null
  }'
```

`POST /ocs/v2.php/calendar/import`

> Body parameter

```json
{
  "transaction": "string",
  "target": "string",
  "options": {
    "format": "string",
    "validation": 0,
    "errors": 0,
    "supersede": true,
    "showCreated": true,
    "showUpdated": true,
    "showSkipped": true,
    "showErrors": true
  },
  "data": "string",
  "user": null
}
```

<h3 id="import-calendar-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» transaction|body|string|true|client generated transaction id|
|» target|body|string|true|calendar id|
|» options|body|object|true|configuration options|
|» » format|body|string|false|none|
|» » validation|body|integer(int64)|false|none|
|» » errors|body|integer(int64)|false|none|
|» » supersede|body|boolean|false|none|
|» » showCreated|body|boolean|false|none|
|» » showUpdated|body|boolean|false|none|
|» » showSkipped|body|boolean|false|none|
|» » showErrors|body|boolean|false|none|
|» data|body|string|true|calendar data|
|» user|body|string \| null|false|system user id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » validation|0|
|» » validation|1|
|» » validation|2|
|» » errors|0|
|» » errors|1|

> Example responses

> 400 Response

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
      "error": "string"
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
    "data": {
      "error": "string"
    }
  }
}
```

<h3 id="import-calendar-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NDJSON stream of import event objects|Inline|
|400|Bad Request|invalid parameters|Inline|
|401|Unauthorized|user not authorized|Inline|

<h3 id="import-calendar-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="dav-contactsimport">contacts_import</h1>

## Import contacts data

<a id="opIdcontacts_import-import"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/contacts/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "transaction": "string",
    "target": "string",
    "options": {
      "format": "string",
      "validation": 0,
      "errors": 0,
      "supersede": true
    },
    "data": "string",
    "user": null
  }'
```

`POST /ocs/v2.php/contacts/import`

> Body parameter

```json
{
  "transaction": "string",
  "target": "string",
  "options": {
    "format": "string",
    "validation": 0,
    "errors": 0,
    "supersede": true
  },
  "data": "string",
  "user": null
}
```

<h3 id="import-contacts-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» transaction|body|string|true|client generated transaction id|
|» target|body|string|true|address book id|
|» options|body|object|true|configuration options|
|» » format|body|string|false|none|
|» » validation|body|integer(int64)|false|none|
|» » errors|body|integer(int64)|false|none|
|» » supersede|body|boolean|false|none|
|» data|body|string|true|contacts data|
|» user|body|string \| null|false|system user id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » validation|0|
|» » validation|1|
|» » validation|2|
|» » errors|0|
|» » errors|1|

> Example responses

> 400 Response

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
      "error": "string"
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
    "data": {
      "error": "string"
    }
  }
}
```

<h3 id="import-contacts-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|NDJSON stream of import event objects|Inline|
|400|Bad Request|invalid parameters|Inline|
|401|Unauthorized|user not authorized|Inline|

<h3 id="import-contacts-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » error|string|false|none|none|
|*anyOf*|object|false|none|none|
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
  "dav": {
    "chunking": "string",
    "public_shares_chunking": true,
    "search_supports_creation_time": true,
    "search_supports_upload_time": true,
    "search_supports_last_activity": true,
    "bulkupload": "string",
    "absence-supported": true,
    "absence-replacement": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dav|object|true|none|none|

<h2 id="tocS_CurrentOutOfOfficeData">CurrentOutOfOfficeData</h2>
<!-- backwards compatibility -->
<a id="schemacurrentoutofofficedata"></a>
<a id="schema_CurrentOutOfOfficeData"></a>
<a id="tocScurrentoutofofficedata"></a>
<a id="tocscurrentoutofofficedata"></a>

```json
{
  "userId": "string",
  "message": "string",
  "replacementUserId": "string",
  "replacementUserDisplayName": "string",
  "id": "string",
  "startDate": 0,
  "endDate": 0,
  "shortMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|message|string|true|none|none|
|replacementUserId|string \| null|true|none|none|
|replacementUserDisplayName|string \| null|true|none|none|
|id|string|true|none|none|
|startDate|integer(int64)|true|none|none|
|endDate|integer(int64)|true|none|none|
|shortMessage|string|true|none|none|

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

<h2 id="tocS_OutOfOfficeData">OutOfOfficeData</h2>
<!-- backwards compatibility -->
<a id="schemaoutofofficedata"></a>
<a id="schema_OutOfOfficeData"></a>
<a id="tocSoutofofficedata"></a>
<a id="tocsoutofofficedata"></a>

```json
{
  "userId": "string",
  "message": "string",
  "replacementUserId": "string",
  "replacementUserDisplayName": "string",
  "id": 0,
  "firstDay": "string",
  "lastDay": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|message|string|true|none|none|
|replacementUserId|string \| null|true|none|none|
|replacementUserDisplayName|string \| null|true|none|none|
|id|integer(int64)|true|none|none|
|firstDay|string|true|none|none|
|lastDay|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_OutOfOfficeDataCommon">OutOfOfficeDataCommon</h2>
<!-- backwards compatibility -->
<a id="schemaoutofofficedatacommon"></a>
<a id="schema_OutOfOfficeDataCommon"></a>
<a id="tocSoutofofficedatacommon"></a>
<a id="tocsoutofofficedatacommon"></a>

```json
{
  "userId": "string",
  "message": "string",
  "replacementUserId": "string",
  "replacementUserDisplayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|message|string|true|none|none|
|replacementUserId|string \| null|true|none|none|
|replacementUserDisplayName|string \| null|true|none|none|

<h2 id="tocS_PendingFederatedCalendar">PendingFederatedCalendar</h2>
<!-- backwards compatibility -->
<a id="schemapendingfederatedcalendar"></a>
<a id="schema_PendingFederatedCalendar"></a>
<a id="tocSpendingfederatedcalendar"></a>
<a id="tocspendingfederatedcalendar"></a>

```json
{
  "id": 0,
  "displayName": "string",
  "color": "string",
  "sharedBy": "string",
  "sharedByDisplayName": "string",
  "remoteUrl": "string",
  "permissions": 0,
  "components": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|displayName|string|true|none|none|
|color|string \| null|true|none|none|
|sharedBy|string|true|none|none|
|sharedByDisplayName|string|true|none|none|
|remoteUrl|string|true|none|none|
|permissions|integer(int64)|true|none|none|
|components|string|true|none|none|

<h2 id="tocS_UpcomingEvent">UpcomingEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupcomingevent"></a>
<a id="schema_UpcomingEvent"></a>
<a id="tocSupcomingevent"></a>
<a id="tocsupcomingevent"></a>

```json
{
  "uri": "string",
  "calendarUri": "string",
  "start": 0,
  "summary": "string",
  "location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|true|none|none|
|calendarUri|string|true|none|none|
|start|integer(int64) \| null|true|none|none|
|summary|string \| null|true|none|none|
|location|string \| null|true|none|none|
