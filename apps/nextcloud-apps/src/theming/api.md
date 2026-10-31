<h1 id="theming">theming v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Adjust the Nextcloud theme

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="theming-theming">theming</h1>

Class ThemingController handle ajax requests to update the theme

## Get the CSS stylesheet for a theme

<a id="opIdtheming-get-theme-stylesheet"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/theme/string.css
```

`GET /index.php/apps/theming/theme/{themeId}.css`

<h3 id="get-the-css-stylesheet-for-a-theme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|themeId|path|string|true|ID of the theme|
|plain|query|boolean|false|Let the browser decide the CSS priority|
|withCustomCss|query|boolean|false|Include custom CSS|

<h3 id="get-the-css-stylesheet-for-a-theme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stylesheet returned|Inline|
|404|Not Found|Theme not found|Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get an image

<a id="opIdtheming-get-image"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/image/string
```

`GET /index.php/apps/theming/image/{key}`

<h3 id="get-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|Key of the image|
|useSvg|query|boolean|false|Return image as SVG|

<h3 id="get-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image returned|Inline|
|404|Not Found|Image not found|Inline|
|500|Internal Server Error||Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the manifest for an app

<a id="opIdtheming-get-manifest"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/manifest/core \
  -H 'Accept: application/json'
```

`GET /index.php/apps/theming/manifest/{app}`

<h3 id="get-the-manifest-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "short_name": "string",
  "start_url": "string",
  "theme_color": "string",
  "background_color": "string",
  "description": "string",
  "icons": [
    {
      "src": "string",
      "type": "string",
      "sizes": "string"
    }
  ],
  "display_override": [
    "string"
  ],
  "display": "string"
}
```

> 404 Response

```json
null
```

<h3 id="get-the-manifest-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Manifest returned|Inline|
|404|Not Found|App not found|Inline|

<h3 id="get-the-manifest-for-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|short_name|string|true|none|none|
|start_url|string|true|none|none|
|theme_color|string|true|none|none|
|background_color|string|true|none|none|
|description|string|true|none|none|
|icons|[object]|true|none|none|
|» src|string|true|none|none|
|» type|string|true|none|none|
|» sizes|string|true|none|none|
|display_override|[string]|true|none|none|
|display|string|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="theming-icon">icon</h1>

## Return a 32x32 favicon as png

<a id="opIdicon-get-favicon"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/favicon/core
```

`GET /index.php/apps/theming/favicon/{app}`

<h3 id="return-a-32x32-favicon-as-png-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|

<h3 id="return-a-32x32-favicon-as-png-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Favicon returned|Inline|
|404|Not Found|Favicon not found|Inline|
|500|Internal Server Error||Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Return a 512x512 icon for touch devices

<a id="opIdicon-get-touch-icon"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/icon/core
```

`GET /index.php/apps/theming/icon/{app}`

<h3 id="return-a-512x512-icon-for-touch-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|

<h3 id="return-a-512x512-icon-for-touch-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Touch icon returned|Inline|
|404|Not Found|Touch icon not found|Inline|
|500|Internal Server Error||Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a themed icon

<a id="opIdicon-get-themed-icon"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/img/string/string
```

`GET /index.php/apps/theming/img/{app}/{image}`

<h3 id="get-a-themed-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|image|path|string|true|image file name (svg required)|

<h3 id="get-a-themed-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Themed icon returned|Inline|
|404|Not Found|Themed icon not found|Inline|
|500|Internal Server Error||Inline|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="theming-usertheme">user_theme</h1>

## Get the background image

<a id="opIduser_theme-get-background"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/background \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /index.php/apps/theming/background`

<h3 id="get-the-background-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

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

<h3 id="get-the-background-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Background image returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|Background image not found|Inline|

<h3 id="get-the-background-image-responseschema">Response Schema</h3>

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

## Set the background

<a id="opIduser_theme-set-background"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/background/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "value": "",
    "color": null
  }'
```

`POST /index.php/apps/theming/background/{type}`

> Body parameter

```json
{
  "value": "",
  "color": null
}
```

<h3 id="set-the-background-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type of background|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» value|body|string|false|Path of the background image|
|» color|body|string \| null|false|Color for the background|

> Example responses

> 200 Response

```json
{
  "backgroundImage": "string",
  "backgroundColor": "string",
  "primaryColor": "string",
  "version": 0
}
```

> 400 Response

```json
{
  "error": "string"
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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="set-the-background-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Background set successfully|[Background](#schemabackground)|
|400|Bad Request|Setting background is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="set-the-background-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete the background

<a id="opIduser_theme-delete-background"></a>

> Code samples

```bash
curl https://cloud.example.com/index.php/apps/theming/background/custom \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /index.php/apps/theming/background/custom`

<h3 id="delete-the-background-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "backgroundImage": "string",
  "backgroundColor": "string",
  "primaryColor": "string",
  "version": 0
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

<h3 id="delete-the-background-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Background deleted successfully|[Background](#schemabackground)|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="delete-the-background-responseschema">Response Schema</h3>

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

## Enable theme

<a id="opIduser_theme-enable-theme"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/theming/api/v1/theme/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`PUT /ocs/v2.php/apps/theming/api/v1/theme/{themeId}/enable`

<h3 id="enable-theme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|themeId|path|string|true|the theme ID|
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

<h3 id="enable-theme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Theme enabled successfully|Inline|
|400|Bad Request|Enabling theme is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="enable-theme-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Disable theme

<a id="opIduser_theme-disable-theme"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/theming/api/v1/theme/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/theming/api/v1/theme/{themeId}`

<h3 id="disable-theme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|themeId|path|string|true|the theme ID|
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

<h3 id="disable-theme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Theme disabled successfully|Inline|
|400|Bad Request|Disabling theme is not possible|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="disable-theme-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Background">Background</h2>
<!-- backwards compatibility -->
<a id="schemabackground"></a>
<a id="schema_Background"></a>
<a id="tocSbackground"></a>
<a id="tocsbackground"></a>

```json
{
  "backgroundImage": "string",
  "backgroundColor": "string",
  "primaryColor": "string",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundImage|string \| null|true|none|none|
|backgroundColor|string|true|none|none|
|primaryColor|string|true|none|none|
|version|integer(int64)|true|none|none|

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

<h2 id="tocS_PublicCapabilities">PublicCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemapubliccapabilities"></a>
<a id="schema_PublicCapabilities"></a>
<a id="tocSpubliccapabilities"></a>
<a id="tocspubliccapabilities"></a>

```json
{
  "theming": {
    "name": "string",
    "productName": "string",
    "url": "string",
    "imprintUrl": "string",
    "privacyUrl": "string",
    "slogan": "string",
    "color": "string",
    "color-text": "string",
    "color-element": "string",
    "color-element-bright": "string",
    "color-element-dark": "string",
    "logo": "string",
    "background": "string",
    "background-text": "string",
    "background-plain": true,
    "background-default": true,
    "logoheader": "string",
    "favicon": "string",
    "primaryColor": "string",
    "backgroundColor": "string",
    "defaultPrimaryColor": "string",
    "defaultBackgroundColor": "string",
    "inverted": true,
    "cacheBuster": "string",
    "enabledThemes": [
      "string"
    ],
    "toastTimeout": 0,
    "toastTimeoutValues": [
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|theming|object|true|none|none|
