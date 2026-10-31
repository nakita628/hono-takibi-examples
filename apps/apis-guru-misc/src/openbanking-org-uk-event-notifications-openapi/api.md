<h1 id="event-notification-api-specification---tpp-endpoints">Event Notification API Specification - TPP Endpoints v3.1.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Event Notification API Specification - TPP Endpoints

Base URLs:

* <a href="https://openbanking.org.uk">https://openbanking.org.uk</a>

* <a href="https://api.apis.guru/open-banking/v3.1">https://api.apis.guru/open-banking/v3.1</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|
|fundsconfirmations|Ability to confirm funds|
|payments|Generic payment scope|

<h1 id="event-notification-api-specification---tpp-endpoints-event-notification">Event Notification</h1>

## Send an event notification

<a id="opIdCreateEventNotification"></a>

> Code samples

```bash
curl https://example.com/event-notifications \
  -X POST \
  -H 'Content-Type: application/jwt' \
  -H 'x-fapi-financial-id: string' \
  -d 'string'
```

`POST /event-notifications`

> Body parameter

```text
string
```

<h3 id="send-an-event-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-financial-id|header|string|true|The unique id of the ASPSP to which the request is issued. The unique id will be issued by OB.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|body|body|string(base64)|true|Create an Callback URI|

<h3 id="send-an-event-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_OBEvent1">OBEvent1</h2>
<!-- backwards compatibility -->
<a id="schemaobevent1"></a>
<a id="schema_OBEvent1"></a>
<a id="tocSobevent1"></a>
<a id="tocsobevent1"></a>

```json
{
  "urn:uk:org:openbanking:events:resource-update": {
    "subject": {
      "http://openbanking.org.uk/rid": "string",
      "http://openbanking.org.uk/rlk": [
        {
          "link": "string",
          "version": "string"
        }
      ],
      "http://openbanking.org.uk/rty": "string",
      "subject_type": "string"
    }
  }
}
```

Events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urn:uk:org:openbanking:events:resource-update|[OBEventResourceUpdate1](#schemaobeventresourceupdate1)|true|none|Resource-Update Event.|

<h2 id="tocS_OBEventLink1">OBEventLink1</h2>
<!-- backwards compatibility -->
<a id="schemaobeventlink1"></a>
<a id="schema_OBEventLink1"></a>
<a id="tocSobeventlink1"></a>
<a id="tocsobeventlink1"></a>

```json
{
  "link": "string",
  "version": "string"
}
```

Resource links to other available versions of the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|true|none|Resource link.|
|version|string|true|none|Resource version.|

<h2 id="tocS_OBEventNotification1">OBEventNotification1</h2>
<!-- backwards compatibility -->
<a id="schemaobeventnotification1"></a>
<a id="schema_OBEventNotification1"></a>
<a id="tocSobeventnotification1"></a>
<a id="tocsobeventnotification1"></a>

```json
{
  "aud": "string",
  "events": {
    "urn:uk:org:openbanking:events:resource-update": {
      "subject": {
        "http://openbanking.org.uk/rid": "string",
        "http://openbanking.org.uk/rlk": [
          {
            "link": "string",
            "version": "string"
          }
        ],
        "http://openbanking.org.uk/rty": "string",
        "subject_type": "string"
      }
    }
  },
  "iat": 0,
  "iss": "string",
  "jti": "string",
  "sub": "http://example.com",
  "toe": 0,
  "txn": "string"
}
```

The resource-update event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aud|string|true|none|Audience.|
|events|[OBEvent1](#schemaobevent1)|true|none|Events.|
|iat|integer(int32)|true|none|Issued At. |
|iss|string|true|none|Issuer.|
|jti|string|true|none|JWT ID.|
|sub|string(uri)|true|none|Subject|
|toe|integer(int32)|true|none|Time of Event.|
|txn|string|true|none|Transaction Identifier.|

<h2 id="tocS_OBEventResourceUpdate1">OBEventResourceUpdate1</h2>
<!-- backwards compatibility -->
<a id="schemaobeventresourceupdate1"></a>
<a id="schema_OBEventResourceUpdate1"></a>
<a id="tocSobeventresourceupdate1"></a>
<a id="tocsobeventresourceupdate1"></a>

```json
{
  "subject": {
    "http://openbanking.org.uk/rid": "string",
    "http://openbanking.org.uk/rlk": [
      {
        "link": "string",
        "version": "string"
      }
    ],
    "http://openbanking.org.uk/rty": "string",
    "subject_type": "string"
  }
}
```

Resource-Update Event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|[OBEventSubject1](#schemaobeventsubject1)|true|none|The resource-update event.|

<h2 id="tocS_OBEventSubject1">OBEventSubject1</h2>
<!-- backwards compatibility -->
<a id="schemaobeventsubject1"></a>
<a id="schema_OBEventSubject1"></a>
<a id="tocSobeventsubject1"></a>
<a id="tocsobeventsubject1"></a>

```json
{
  "http://openbanking.org.uk/rid": "string",
  "http://openbanking.org.uk/rlk": [
    {
      "link": "string",
      "version": "string"
    }
  ],
  "http://openbanking.org.uk/rty": "string",
  "subject_type": "string"
}
```

The resource-update event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|http://openbanking.org.uk/rid|string|true|none|Resource Id for the updated resource.|
|http://openbanking.org.uk/rlk|[[OBEventLink1](#schemaobeventlink1)]|true|none|Resource links to other available versions of the resource.|
|http://openbanking.org.uk/rty|string|true|none|Resource Type for the updated resource.|
|subject_type|string|true|none|Subject type for the updated resource. |
