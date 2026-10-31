<h1 id="events-api">Events API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

1Password Events API Specification.

Base URLs:

* <a href="https://events.1password.com">https://events.1password.com</a> - 1Password

* <a href="https://events.1password.ca">https://events.1password.ca</a> - 1Password CA

* <a href="https://events.1password.eu">https://events.1password.eu</a> - 1Password EU

* <a href="https://events.ent.1password.com">https://events.ent.1password.com</a> - 1Password Enterprise

# Authentication

- HTTP Authentication, scheme: bearer A JWT SA token issued to this service

<h1 id="events-api-auth">auth</h1>

## Performs introspection of the provided Bearer JWT token

<a id="opIdgetAuthIntrospect"></a>

> Code samples

```bash
curl https://example.com/api/auth/introspect \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/auth/introspect`

> Example responses

> 200 Response

```json
{
  "Features": [
    "itemusages",
    "signinattempts"
  ],
  "IssuedAt": "2020-06-11T16:32:50-03:00",
  "UUID": "string"
}
```

> 401 Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

> default Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

<h3 id="performs-introspection-of-the-provided-bearer-jwt-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Introspection object|[Introspection](#schemaintrospection)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Generic error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtsa
</aside>

<h1 id="events-api-api-v1">api-v1</h1>

## Retrieves item usages

<a id="opIdgetItemUsages"></a>

> Code samples

```bash
curl https://example.com/api/v1/itemusages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK"
  }'
```

`POST /api/v1/itemusages`

This endpoint requires your JSON Web Token to have the *itemusages* feature.

> Body parameter

```json
{
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK"
}
```

<h3 id="retrieves-item-usages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Cursor](#schemacursor) \| [ResetCursor](#schemaresetcursor)|false|none|
|» *oneOf*|body|[Cursor](#schemacursor)|false|Cursor|
|» *oneOf*|body|[ResetCursor](#schemaresetcursor)|false|Reset cursor|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "action": null,
      "client": {
        "app_name": "1Password Extension",
        "app_version": "20127",
        "ip_address": "13.227.95.22",
        "os_name": "MacOSX",
        "os_version": "10.15.6",
        "platform_name": "Chrome",
        "platform_version": "string"
      },
      "item_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "timestamp": "2020-06-11T16:32:50-03:00",
      "used_version": 0,
      "user": {
        "email": "user@example.com",
        "name": "Jack O'Neill",
        "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
      },
      "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "vault_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
    }
  ],
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
  "has_more": true
}
```

> 401 Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

> default Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

<h3 id="retrieves-item-usages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Item usages response object|[ItemUsageItems](#schemaitemusageitems)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Generic error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtsa
</aside>

## Retrieves sign-in attempts

<a id="opIdgetSignInAttempts"></a>

> Code samples

```bash
curl https://example.com/api/v1/signinattempts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK"
  }'
```

`POST /api/v1/signinattempts`

This endpoint requires your JSON Web Token to have the *signinattempts* feature.

> Body parameter

```json
{
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK"
}
```

<h3 id="retrieves-sign-in-attempts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Cursor](#schemacursor) \| [ResetCursor](#schemaresetcursor)|false|none|
|» *oneOf*|body|[Cursor](#schemacursor)|false|Cursor|
|» *oneOf*|body|[ResetCursor](#schemaresetcursor)|false|Reset cursor|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "category": "firewall_failed",
      "client": {
        "app_name": "1Password Extension",
        "app_version": "20127",
        "ip_address": "13.227.95.22",
        "os_name": "MacOSX",
        "os_version": "10.15.6",
        "platform_name": "Chrome",
        "platform_version": "string"
      },
      "country": "France",
      "details": {
        "value": "Europe"
      },
      "session_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "target_user": {
        "email": "user@example.com",
        "name": "Jack O'Neill",
        "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
      },
      "timestamp": "2020-06-11T16:32:50-03:00",
      "type": "continent_blocked",
      "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
    }
  ],
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
  "has_more": true
}
```

> 401 Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

> default Response

```json
{
  "Error": {
    "Message": "string"
  }
}
```

<h3 id="retrieves-sign-in-attempts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sign-in attempts response object|[SignInAttemptItems](#schemasigninattemptitems)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Generic error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtsa
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
null
```

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "app_name": "1Password Extension",
  "app_version": "20127",
  "ip_address": "13.227.95.22",
  "os_name": "MacOSX",
  "os_version": "10.15.6",
  "platform_name": "Chrome",
  "platform_version": "string"
}
```

Metadata gathered about the client

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_name|string|false|none|none|
|app_version|string|false|none|none|
|ip_address|string|false|none|none|
|os_name|string|false|none|none|
|os_version|string|false|none|none|
|platform_name|string|false|none|none|
|platform_version|string|false|none|Depending on the platform used, this can be the version of the browser that the client extension is installed, the model of computer that the native application is installed or the machine's CPU version that the CLI was installed|

<h2 id="tocS_Cursor">Cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_Cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
{
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK"
}
```

Cursor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Cursor to fetch more data if available or continue the polling process if required|

<h2 id="tocS_CursorCollection">CursorCollection</h2>
<!-- backwards compatibility -->
<a id="schemacursorcollection"></a>
<a id="schema_CursorCollection"></a>
<a id="tocScursorcollection"></a>
<a id="tocscursorcollection"></a>

```json
{
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
  "has_more": true
}
```

Common cursor properties for collection responses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Cursor to fetch more data if available or continue the polling process if required|
|has_more|boolean|false|none|Whether there may still be more data to fetch using the returned cursor. If true, the subsequent request could still be empty.|

<h2 id="tocS_DateTimeRFC3339">DateTimeRFC3339</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerfc3339"></a>
<a id="schema_DateTimeRFC3339"></a>
<a id="tocSdatetimerfc3339"></a>
<a id="tocsdatetimerfc3339"></a>

```json
"2020-06-11T16:32:50-03:00"
```

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "value": "Europe"
}
```

Additional information about the sign-in attempt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|For firewall prevented sign-ins, the value is the chosen continent, country, etc. that blocked the sign-in attempt|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "Error": {
    "Message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|false|none|none|

<h2 id="tocS_Introspection">Introspection</h2>
<!-- backwards compatibility -->
<a id="schemaintrospection"></a>
<a id="schema_Introspection"></a>
<a id="tocSintrospection"></a>
<a id="tocsintrospection"></a>

```json
{
  "Features": [
    "itemusages",
    "signinattempts"
  ],
  "IssuedAt": "2020-06-11T16:32:50-03:00",
  "UUID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Features|[string]|false|none|none|
|IssuedAt|[DateTimeRFC3339](#schemadatetimerfc3339)|false|none|none|
|UUID|string|false|none|none|

<h2 id="tocS_ItemUsage">ItemUsage</h2>
<!-- backwards compatibility -->
<a id="schemaitemusage"></a>
<a id="schema_ItemUsage"></a>
<a id="tocSitemusage"></a>
<a id="tocsitemusage"></a>

```json
{
  "action": null,
  "client": {
    "app_name": "1Password Extension",
    "app_version": "20127",
    "ip_address": "13.227.95.22",
    "os_name": "MacOSX",
    "os_version": "10.15.6",
    "platform_name": "Chrome",
    "platform_version": "string"
  },
  "item_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
  "timestamp": "2020-06-11T16:32:50-03:00",
  "used_version": 0,
  "user": {
    "email": "user@example.com",
    "name": "Jack O'Neill",
    "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
  },
  "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
  "vault_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
}
```

A single item usage object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[Action](#schemaaction)|false|none|none|
|client|[Client](#schemaclient)|false|none|Metadata gathered about the client|
|item_uuid|[UUID](#schemauuid)|false|none|none|
|timestamp|[DateTimeRFC3339](#schemadatetimerfc3339)|false|none|none|
|used_version|integer|false|none|none|
|user|[User](#schemauser)|false|none|User object|
|uuid|[UUID](#schemauuid)|false|none|none|
|vault_uuid|[UUID](#schemauuid)|false|none|none|

<h2 id="tocS_ItemUsageItems">ItemUsageItems</h2>
<!-- backwards compatibility -->
<a id="schemaitemusageitems"></a>
<a id="schema_ItemUsageItems"></a>
<a id="tocSitemusageitems"></a>
<a id="tocsitemusageitems"></a>

```json
{
  "items": [
    {
      "action": null,
      "client": {
        "app_name": "1Password Extension",
        "app_version": "20127",
        "ip_address": "13.227.95.22",
        "os_name": "MacOSX",
        "os_version": "10.15.6",
        "platform_name": "Chrome",
        "platform_version": "string"
      },
      "item_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "timestamp": "2020-06-11T16:32:50-03:00",
      "used_version": 0,
      "user": {
        "email": "user@example.com",
        "name": "Jack O'Neill",
        "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
      },
      "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "vault_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
    }
  ],
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
  "has_more": true
}
```

An object wrapping cursor properties and a list of items usages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ItemUsage](#schemaitemusage)]|false|none|none|
|cursor|string|false|none|Cursor to fetch more data if available or continue the polling process if required|
|has_more|boolean|false|none|Whether there may still be more data to fetch using the returned cursor. If true, the subsequent request could still be empty.|

<h2 id="tocS_ResetCursor">ResetCursor</h2>
<!-- backwards compatibility -->
<a id="schemaresetcursor"></a>
<a id="schema_ResetCursor"></a>
<a id="tocSresetcursor"></a>
<a id="tocsresetcursor"></a>

```json
{
  "end_time": "2020-06-11T16:32:50-03:00",
  "limit": 1,
  "start_time": "2020-06-11T16:32:50-03:00"
}
```

Reset cursor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_time|[DateTimeRFC3339](#schemadatetimerfc3339)|false|none|none|
|limit|number|false|none|none|
|start_time|[DateTimeRFC3339](#schemadatetimerfc3339)|false|none|none|

<h2 id="tocS_SignInAttempt">SignInAttempt</h2>
<!-- backwards compatibility -->
<a id="schemasigninattempt"></a>
<a id="schema_SignInAttempt"></a>
<a id="tocSsigninattempt"></a>
<a id="tocssigninattempt"></a>

```json
{
  "category": "firewall_failed",
  "client": {
    "app_name": "1Password Extension",
    "app_version": "20127",
    "ip_address": "13.227.95.22",
    "os_name": "MacOSX",
    "os_version": "10.15.6",
    "platform_name": "Chrome",
    "platform_version": "string"
  },
  "country": "France",
  "details": {
    "value": "Europe"
  },
  "session_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
  "target_user": {
    "email": "user@example.com",
    "name": "Jack O'Neill",
    "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
  },
  "timestamp": "2020-06-11T16:32:50-03:00",
  "type": "continent_blocked",
  "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
}
```

A single sign-in attempt object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|client|[Client](#schemaclient)|false|none|Metadata gathered about the client|
|country|string|false|none|Country ISO Code|
|details|[Details](#schemadetails)|false|none|Additional information about the sign-in attempt|
|session_uuid|[UUID](#schemauuid)|false|none|none|
|target_user|[User](#schemauser)|false|none|User object|
|timestamp|[DateTimeRFC3339](#schemadatetimerfc3339)|false|none|none|
|type|string|false|none|none|
|uuid|[UUID](#schemauuid)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|success|
|category|credentials_failed|
|category|mfa_failed|
|category|modern_version_failed|
|category|firewall_failed|
|category|firewall_reported_success|
|type|credentials_ok|
|type|mfa_ok|
|type|password_secret_bad|
|type|mfa_missing|
|type|totp_disabled|
|type|totp_bad|
|type|totp_timeout|
|type|u2f_disabled|
|type|u2f_bad|
|type|u2f_timout|
|type|duo_disabled|
|type|duo_bad|
|type|duo_timeout|
|type|duo_native_bad|
|type|platform_secret_disabled|
|type|platform_secret_bad|
|type|platform_secret_proxy|
|type|code_disabled|
|type|code_bad|
|type|code_timeout|
|type|ip_blocked|
|type|continent_blocked|
|type|country_blocked|
|type|anonymous_blocked|
|type|all_blocked|
|type|modern_version_missing|
|type|modern_version_old|

<h2 id="tocS_SignInAttemptItems">SignInAttemptItems</h2>
<!-- backwards compatibility -->
<a id="schemasigninattemptitems"></a>
<a id="schema_SignInAttemptItems"></a>
<a id="tocSsigninattemptitems"></a>
<a id="tocssigninattemptitems"></a>

```json
{
  "items": [
    {
      "category": "firewall_failed",
      "client": {
        "app_name": "1Password Extension",
        "app_version": "20127",
        "ip_address": "13.227.95.22",
        "os_name": "MacOSX",
        "os_version": "10.15.6",
        "platform_name": "Chrome",
        "platform_version": "string"
      },
      "country": "France",
      "details": {
        "value": "Europe"
      },
      "session_uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E",
      "target_user": {
        "email": "user@example.com",
        "name": "Jack O'Neill",
        "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
      },
      "timestamp": "2020-06-11T16:32:50-03:00",
      "type": "continent_blocked",
      "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
    }
  ],
  "cursor": "aGVsbG8hIGlzIGl0IG1lIHlvdSBhcmUgbG9va2luZyBmb3IK",
  "has_more": true
}
```

An object wrapping cursor properties and a list of sign-in attempts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SignInAttempt](#schemasigninattempt)]|false|none|none|
|cursor|string|false|none|Cursor to fetch more data if available or continue the polling process if required|
|has_more|boolean|false|none|Whether there may still be more data to fetch using the returned cursor. If true, the subsequent request could still be empty.|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"56YE2TYN2VFYRLNSHKPW5NVT5E"
```

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "user@example.com",
  "name": "Jack O'Neill",
  "uuid": "56YE2TYN2VFYRLNSHKPW5NVT5E"
}
```

User object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|none|
|name|string|false|none|Full name|
|uuid|[UUID](#schemauuid)|false|none|none|
