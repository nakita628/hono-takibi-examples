<h1 id="session-manager-api">Session Manager API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This documentation goes in detail how to interact with Session Manager's API. For a more top-level approach, check the [design documentation](https://help.vtex.com/tutorial/using-session-manager-to-track-browsing-sessions-in-vtex-stores--1pA0tqsD4BFnJYhQ7ORQBd).

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api">https://{accountName}.{environment}.com.br/api</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="session-manager-api-sessions">Sessions</h1>

## Get Session

<a id="opIdGetSession"></a>

> Code samples

```bash
curl 'https://example.com/sessions?items=namespace1.key1%2Cnamespace2.key2'
```

`GET /sessions`

Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

> If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).

<h3 id="get-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|items|query|string|true|Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`|

<h3 id="get-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Create new session

<a id="opIdCreatenewsession"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "public": {
      "country": {
        "value": "BR"
      },
      "postalCode": {
        "value": "12345"
      }
    }
  }'
```

`POST /sessions`

The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

> Body parameter

```json
{
  "public": {
    "country": {
      "value": "BR"
    },
    "postalCode": {
      "value": "12345"
    }
  }
}
```

<h3 id="create-new-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatenewsessionRequest](#schemacreatenewsessionrequest)|true|none|
|» public|body|[Public](#schemapublic)|true|none|

<h3 id="create-new-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Edit session

<a id="opIdEditsession"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -d '{
    "public": {
      "newValue": {
        "value": "patched"
      }
    }
  }'
```

`PATCH /sessions`

This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.

As with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

> Body parameter

```json
{
  "public": {
    "newValue": {
      "value": "patched"
    }
  }
}
```

<h3 id="edit-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EditsessionRequest](#schemaeditsessionrequest)|true|none|
|» public|body|[Public1](#schemapublic1)|true|none|

<h3 id="edit-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="session-manager-api-segment">Segment</h1>

## Get Segment

<a id="opIdGetSegment"></a>

> Code samples

```bash
curl https://example.com/segments
```

`GET /segments`

You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.

If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.

<h3 id="get-segment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "value": "BR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_CreatenewsessionRequest">CreatenewsessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenewsessionrequest"></a>
<a id="schema_CreatenewsessionRequest"></a>
<a id="tocScreatenewsessionrequest"></a>
<a id="tocscreatenewsessionrequest"></a>

```json
{
  "public": {
    "country": {
      "value": "BR"
    },
    "postalCode": {
      "value": "12345"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|[Public](#schemapublic)|true|none|none|

<h2 id="tocS_EditsessionRequest">EditsessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeditsessionrequest"></a>
<a id="schema_EditsessionRequest"></a>
<a id="tocSeditsessionrequest"></a>
<a id="tocseditsessionrequest"></a>

```json
{
  "public": {
    "newValue": {
      "value": "patched"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|[Public1](#schemapublic1)|true|none|none|

<h2 id="tocS_ModifysessiongettingspecificparametersRequest">ModifysessiongettingspecificparametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifysessiongettingspecificparametersrequest"></a>
<a id="schema_ModifysessiongettingspecificparametersRequest"></a>
<a id="tocSmodifysessiongettingspecificparametersrequest"></a>
<a id="tocsmodifysessiongettingspecificparametersrequest"></a>

```json
{
  "public": {
    "country": {
      "value": "BR"
    },
    "postalCode": {
      "value": "12345"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|[Public](#schemapublic)|true|none|none|

<h2 id="tocS_NewValue">NewValue</h2>
<!-- backwards compatibility -->
<a id="schemanewvalue"></a>
<a id="schema_NewValue"></a>
<a id="tocSnewvalue"></a>
<a id="tocsnewvalue"></a>

```json
{
  "value": "patched"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_PostalCode">PostalCode</h2>
<!-- backwards compatibility -->
<a id="schemapostalcode"></a>
<a id="schema_PostalCode"></a>
<a id="tocSpostalcode"></a>
<a id="tocspostalcode"></a>

```json
{
  "value": "12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_Public">Public</h2>
<!-- backwards compatibility -->
<a id="schemapublic"></a>
<a id="schema_Public"></a>
<a id="tocSpublic"></a>
<a id="tocspublic"></a>

```json
{
  "country": {
    "value": "BR"
  },
  "postalCode": {
    "value": "12345"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[Country](#schemacountry)|true|none|none|
|postalCode|[PostalCode](#schemapostalcode)|true|none|none|

<h2 id="tocS_Public1">Public1</h2>
<!-- backwards compatibility -->
<a id="schemapublic1"></a>
<a id="schema_Public1"></a>
<a id="tocSpublic1"></a>
<a id="tocspublic1"></a>

```json
{
  "newValue": {
    "value": "patched"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newValue|[NewValue](#schemanewvalue)|true|none|none|
