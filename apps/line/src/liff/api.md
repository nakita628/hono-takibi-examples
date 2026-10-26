<h1 id="liff-server-api">LIFF server API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

LIFF Server API.

Base URLs:

* <a href="https://api.line.me/">https://api.line.me/</a>

# Authentication

- HTTP Authentication, scheme: bearer Channel access token

<h1 id="liff-server-api-liff">liff</h1>

## Get all LIFF apps

<a id="opIdgetAllLIFFApps"></a>

> Code samples

```bash
curl https://api.line.me/liff/v1/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /liff/v1/apps`

Gets information on all the LIFF apps added to the channel.

<a href="https://developers.line.biz/en/reference/liff-server/#get-all-liff-apps">External documentation</a>

> Example responses

> 200 Response

```json
{
  "apps": [
    {
      "liffId": "{liffId}",
      "view": {
        "type": "full",
        "url": "https://example.com/myservice"
      },
      "description": "Happy New York",
      "permanentLinkPattern": "concat"
    },
    {
      "liffId": "{liffId}",
      "view": {
        "type": "tall",
        "url": "https://example.com/myservice2"
      },
      "features": {
        "ble": true,
        "qrCode": true
      },
      "permanentLinkPattern": "concat",
      "scope": [
        "profile",
        "chat_message.write"
      ],
      "botPrompt": "none"
    }
  ]
}
```

<h3 id="get-all-liff-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAllLiffAppsResponse](#schemagetallliffappsresponse)|
|401|Unauthorized|Authentication failed.<br>|None|
|404|Not Found|There is no LIFF app on the channel.<br><br><br><br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create LIFF app

<a id="opIdaddLIFFApp"></a>

> Code samples

```bash
curl https://api.line.me/liff/v1/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "view": {
      "type": "compact",
      "url": "http://example.com",
      "moduleMode": true
    },
    "description": "string",
    "features": {
      "ble": true,
      "qrCode": false
    },
    "permanentLinkPattern": "string",
    "scope": [
      "openid"
    ],
    "botPrompt": "normal"
  }'
```

`POST /liff/v1/apps`

Adding the LIFF app to a channel

<a href="https://developers.line.biz/en/reference/liff-server/#add-liff-app">External documentation</a>

> Body parameter

```json
{
  "view": {
    "type": "compact",
    "url": "http://example.com",
    "moduleMode": true
  },
  "description": "string",
  "features": {
    "ble": true,
    "qrCode": false
  },
  "permanentLinkPattern": "string",
  "scope": [
    "openid"
  ],
  "botPrompt": "normal"
}
```

<h3 id="create-liff-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddLiffAppRequest](#schemaaddliffapprequest)|true|none|
|» view|body|[LiffView](#schemaliffview)|true|none|
|» description|body|string|false|Name of the LIFF app.<br><br>The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.<br>|
|» features|body|[LiffFeatures](#schemalifffeatures)|false|none|
|» permanentLinkPattern|body|string|false|How additional information in LIFF URLs is handled. Specify `concat`.<br>|
|» scope|body|[[LiffScope](#schemaliffscope)]|false|none|
|» botPrompt|body|[LiffBotPrompt](#schemaliffbotprompt)|false|Specify the setting for bot link feature with one of the following values:<br><br>`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.<br>`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.<br>`none`: Don't display the option to add the LINE Official Account as a friend.<br>  The default value is none.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|openid|
|» scope|email|
|» scope|profile|
|» scope|chat_message.write|
|» botPrompt|normal|
|» botPrompt|aggressive|
|» botPrompt|none|

> Example responses

> 200 Response

```json
{
  "liffId": "{liffId}"
}
```

<h3 id="create-liff-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AddLiffAppResponse](#schemaaddliffappresponse)|
|400|Bad Request|This status code means one of the following:<br>- The request contains an invalid value.<br>- The maximum number of LIFF apps that can be added to the channel has been reached.<br>|None|
|401|Unauthorized|Authentication failed.<br><br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update LIFF app from a channel

<a id="opIdupdateLIFFApp"></a>

> Code samples

```bash
curl https://api.line.me/liff/v1/apps/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "view": {
      "type": "compact",
      "url": "http://example.com",
      "moduleMode": true
    },
    "description": "string",
    "features": {
      "ble": true,
      "qrCode": false
    },
    "permanentLinkPattern": "string",
    "scope": [
      "openid"
    ],
    "botPrompt": "normal"
  }'
```

`PUT /liff/v1/apps/{liffId}`

Update LIFF app settings

<a href="https://developers.line.biz/en/reference/liff-server/#update-liff-app">External documentation</a>

> Body parameter

```json
{
  "view": {
    "type": "compact",
    "url": "http://example.com",
    "moduleMode": true
  },
  "description": "string",
  "features": {
    "ble": true,
    "qrCode": false
  },
  "permanentLinkPattern": "string",
  "scope": [
    "openid"
  ],
  "botPrompt": "normal"
}
```

<h3 id="update-liff-app-from-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liffId|path|string|true|ID of the LIFF app to be updated|
|body|body|[UpdateLiffAppRequest](#schemaupdateliffapprequest)|true|none|
|» view|body|[UpdateLiffView](#schemaupdateliffview)|false|none|
|» description|body|string|false|Name of the LIFF app.<br><br>The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.<br>|
|» features|body|[LiffFeatures](#schemalifffeatures)|false|none|
|» permanentLinkPattern|body|string|false|How additional information in LIFF URLs is handled. Specify `concat`.<br>|
|» scope|body|[[LiffScope](#schemaliffscope)]|false|none|
|» botPrompt|body|[LiffBotPrompt](#schemaliffbotprompt)|false|Specify the setting for bot link feature with one of the following values:<br><br>`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.<br>`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.<br>`none`: Don't display the option to add the LINE Official Account as a friend.<br>  The default value is none.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scope|openid|
|» scope|email|
|» scope|profile|
|» scope|chat_message.write|
|» botPrompt|normal|
|» botPrompt|aggressive|
|» botPrompt|none|

<h3 id="update-liff-app-from-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|The request contains an invalid value.<br>|None|
|401|Unauthorized|Authentication failed.<br>|None|
|404|Not Found|This status code means one of the following:<br>- The specified LIFF app does not exist.<br>- The specified LIFF app has been added to another channel.<br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete LIFF app from a channel

<a id="opIddeleteLIFFApp"></a>

> Code samples

```bash
curl https://api.line.me/liff/v1/apps/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /liff/v1/apps/{liffId}`

Deletes a LIFF app from a channel.


<a href="https://developers.line.biz/en/reference/liff-server/#delete-liff-app">External documentation</a>

<h3 id="delete-liff-app-from-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|liffId|path|string|true|ID of the LIFF app to be updated|

<h3 id="delete-liff-app-from-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Authentication failed.<br>|None|
|404|Not Found|This status code means one of the following:<br>- The specified LIFF app does not exist.<br>- The specified LIFF app has been added to another channel.<br><br>|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_AddLiffAppRequest">AddLiffAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddliffapprequest"></a>
<a id="schema_AddLiffAppRequest"></a>
<a id="tocSaddliffapprequest"></a>
<a id="tocsaddliffapprequest"></a>

```json
{
  "view": {
    "type": "compact",
    "url": "http://example.com",
    "moduleMode": true
  },
  "description": "string",
  "features": {
    "ble": true,
    "qrCode": false
  },
  "permanentLinkPattern": "string",
  "scope": [
    "openid"
  ],
  "botPrompt": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|view|[LiffView](#schemaliffview)|true|none|none|
|description|string|false|none|Name of the LIFF app.<br><br>The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.<br>|
|features|[LiffFeatures](#schemalifffeatures)|false|none|none|
|permanentLinkPattern|string|false|none|How additional information in LIFF URLs is handled. Specify `concat`.<br>|
|scope|[[LiffScope](#schemaliffscope)]|false|none|none|
|botPrompt|[LiffBotPrompt](#schemaliffbotprompt)|false|none|Specify the setting for bot link feature with one of the following values:<br><br>`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.<br>`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.<br>`none`: Don't display the option to add the LINE Official Account as a friend.<br>  The default value is none.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|openid|
|scope|email|
|scope|profile|
|scope|chat_message.write|
|botPrompt|normal|
|botPrompt|aggressive|
|botPrompt|none|

<h2 id="tocS_LiffBotPrompt">LiffBotPrompt</h2>
<!-- backwards compatibility -->
<a id="schemaliffbotprompt"></a>
<a id="schema_LiffBotPrompt"></a>
<a id="tocSliffbotprompt"></a>
<a id="tocsliffbotprompt"></a>

```json
"normal"
```

Specify the setting for bot link feature with one of the following values:

`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
`none`: Don't display the option to add the LINE Official Account as a friend.
  The default value is none.

<h2 id="tocS_LiffView">LiffView</h2>
<!-- backwards compatibility -->
<a id="schemaliffview"></a>
<a id="schema_LiffView"></a>
<a id="tocSliffview"></a>
<a id="tocsliffview"></a>

```json
{
  "type": "compact",
  "url": "http://example.com",
  "moduleMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Size of the LIFF app view. Specify one of these values:<br>- compact<br>- tall<br>- full<br>|
|url|string(uri)|true|none|Endpoint URL. This is the URL of the web app that implements the LIFF app<br>(e.g. https://example.com).<br>Used when the LIFF app is launched using the LIFF URL.<br>The URL scheme must be https. URL fragments (#URL-fragment) can't be specified.<br>|
|moduleMode|boolean|false|none|`true` to use the LIFF app in modular mode.<br>When in modular mode, the action button in the header is not displayed.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|compact|
|type|tall|
|type|full|

<h2 id="tocS_UpdateLiffView">UpdateLiffView</h2>
<!-- backwards compatibility -->
<a id="schemaupdateliffview"></a>
<a id="schema_UpdateLiffView"></a>
<a id="tocSupdateliffview"></a>
<a id="tocsupdateliffview"></a>

```json
{
  "type": "compact",
  "url": "http://example.com",
  "moduleMode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Size of the LIFF app view. Specify one of these values:<br>- compact<br>- tall<br>- full<br>|
|url|string(uri)|false|none|Endpoint URL. This is the URL of the web app that implements the LIFF app<br>(e.g. https://example.com).<br>Used when the LIFF app is launched using the LIFF URL.<br>The URL scheme must be https. URL fragments (#URL-fragment) can't be specified.<br>|
|moduleMode|boolean|false|none|`true` to use the LIFF app in modular mode.<br>When in modular mode, the action button in the header is not displayed.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|compact|
|type|tall|
|type|full|

<h2 id="tocS_LiffFeatures">LiffFeatures</h2>
<!-- backwards compatibility -->
<a id="schemalifffeatures"></a>
<a id="schema_LiffFeatures"></a>
<a id="tocSlifffeatures"></a>
<a id="tocslifffeatures"></a>

```json
{
  "ble": true,
  "qrCode": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ble|boolean|false|none|`true` if the LIFF app supports Bluetooth® Low Energy for LINE Things. `false` otherwise.<br>|
|qrCode|boolean|false|none|`true` to use the 2D code reader in the LIFF app. false otherwise. The default value is `false`.<br>|

<h2 id="tocS_AddLiffAppResponse">AddLiffAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddliffappresponse"></a>
<a id="schema_AddLiffAppResponse"></a>
<a id="tocSaddliffappresponse"></a>
<a id="tocsaddliffappresponse"></a>

```json
{
  "liffId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liffId|string|true|none|none|

<h2 id="tocS_UpdateLiffAppRequest">UpdateLiffAppRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateliffapprequest"></a>
<a id="schema_UpdateLiffAppRequest"></a>
<a id="tocSupdateliffapprequest"></a>
<a id="tocsupdateliffapprequest"></a>

```json
{
  "view": {
    "type": "compact",
    "url": "http://example.com",
    "moduleMode": true
  },
  "description": "string",
  "features": {
    "ble": true,
    "qrCode": false
  },
  "permanentLinkPattern": "string",
  "scope": [
    "openid"
  ],
  "botPrompt": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|view|[UpdateLiffView](#schemaupdateliffview)|false|none|none|
|description|string|false|none|Name of the LIFF app.<br><br>The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.<br>|
|features|[LiffFeatures](#schemalifffeatures)|false|none|none|
|permanentLinkPattern|string|false|none|How additional information in LIFF URLs is handled. Specify `concat`.<br>|
|scope|[[LiffScope](#schemaliffscope)]|false|none|none|
|botPrompt|[LiffBotPrompt](#schemaliffbotprompt)|false|none|Specify the setting for bot link feature with one of the following values:<br><br>`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.<br>`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.<br>`none`: Don't display the option to add the LINE Official Account as a friend.<br>  The default value is none.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|openid|
|scope|email|
|scope|profile|
|scope|chat_message.write|
|botPrompt|normal|
|botPrompt|aggressive|
|botPrompt|none|

<h2 id="tocS_LiffScope">LiffScope</h2>
<!-- backwards compatibility -->
<a id="schemaliffscope"></a>
<a id="schema_LiffScope"></a>
<a id="tocSliffscope"></a>
<a id="tocsliffscope"></a>

```json
"openid"
```

Array of scopes required for some LIFF SDK methods to function.
The default value is `["profile", "chat_message.write"]`.

<h2 id="tocS_GetAllLiffAppsResponse">GetAllLiffAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetallliffappsresponse"></a>
<a id="schema_GetAllLiffAppsResponse"></a>
<a id="tocSgetallliffappsresponse"></a>
<a id="tocsgetallliffappsresponse"></a>

```json
{
  "apps": [
    {
      "liffId": "string",
      "view": {
        "type": "compact",
        "url": "http://example.com",
        "moduleMode": true
      },
      "description": "string",
      "features": {
        "ble": true,
        "qrCode": false
      },
      "permanentLinkPattern": "string",
      "scope": [
        "openid"
      ],
      "botPrompt": "normal"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[[LiffApp](#schemaliffapp)]|false|none|none|

<h2 id="tocS_LiffApp">LiffApp</h2>
<!-- backwards compatibility -->
<a id="schemaliffapp"></a>
<a id="schema_LiffApp"></a>
<a id="tocSliffapp"></a>
<a id="tocsliffapp"></a>

```json
{
  "liffId": "string",
  "view": {
    "type": "compact",
    "url": "http://example.com",
    "moduleMode": true
  },
  "description": "string",
  "features": {
    "ble": true,
    "qrCode": false
  },
  "permanentLinkPattern": "string",
  "scope": [
    "openid"
  ],
  "botPrompt": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liffId|string|false|none|LIFF app ID|
|view|[LiffView](#schemaliffview)|false|none|none|
|description|string|false|none|Name of the LIFF app|
|features|[LiffFeatures](#schemalifffeatures)|false|none|none|
|permanentLinkPattern|string|false|none|How additional information in LIFF URLs is handled. concat is returned.<br>|
|scope|[[LiffScope](#schemaliffscope)]|false|none|none|
|botPrompt|[LiffBotPrompt](#schemaliffbotprompt)|false|none|Specify the setting for bot link feature with one of the following values:<br><br>`normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.<br>`aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.<br>`none`: Don't display the option to add the LINE Official Account as a friend.<br>  The default value is none.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|openid|
|scope|email|
|scope|profile|
|scope|chat_message.write|
|botPrompt|normal|
|botPrompt|aggressive|
|botPrompt|none|
