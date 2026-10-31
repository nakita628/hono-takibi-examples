<h1 id="web-fonts-developer-api">Web Fonts Developer API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Web Fonts Developer API lets you retrieve information about web fonts served by Google.

Base URLs:

* <a href="https://webfonts.googleapis.com/">https://webfonts.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/fonts/docs/developer_api">External documentation</a>

<h1 id="web-fonts-developer-api-webfonts">webfonts</h1>

## webfonts.webfonts.list

<a id="opIdwebfonts.webfonts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/webfonts \
  -H 'Accept: application/json'
```

`GET /v1/webfonts`

Retrieves the list of fonts currently served by the Google Fonts Developer API.

<h3 id="webfontswebfontslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|capability|query|[string]|false|Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent.|
|family|query|[string]|false|Filters by Webfont.family, using literal match. If not set, returns all families|
|sort|query|string|false|Enables sorting of the list.|
|subset|query|string|false|Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families.|
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
|capability|CAPABILITY_UNSPECIFIED|
|capability|WOFF2|
|capability|VF|
|sort|SORT_UNDEFINED|
|sort|ALPHA|
|sort|DATE|
|sort|POPULARITY|
|sort|STYLE|
|sort|TRENDING|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "axes": [
        {
          "end": 0,
          "start": 0,
          "tag": "string"
        }
      ],
      "category": "string",
      "family": "string",
      "files": {
        "property1": "string",
        "property2": "string"
      },
      "kind": "string",
      "lastModified": "string",
      "menu": "string",
      "subsets": [
        "string"
      ],
      "variants": [
        "string"
      ],
      "version": "string"
    }
  ],
  "kind": "string"
}
```

<h3 id="webfontswebfontslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebfontList](#schemawebfontlist)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Axis">Axis</h2>
<!-- backwards compatibility -->
<a id="schemaaxis"></a>
<a id="schema_Axis"></a>
<a id="tocSaxis"></a>
<a id="tocsaxis"></a>

```json
{
  "end": 0,
  "start": 0,
  "tag": "string"
}
```

Metadata for a variable font axis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|number(float)|false|none|maximum value|
|start|number(float)|false|none|minimum value|
|tag|string|false|none|tag name.|

<h2 id="tocS_Webfont">Webfont</h2>
<!-- backwards compatibility -->
<a id="schemawebfont"></a>
<a id="schema_Webfont"></a>
<a id="tocSwebfont"></a>
<a id="tocswebfont"></a>

```json
{
  "axes": [
    {
      "end": 0,
      "start": 0,
      "tag": "string"
    }
  ],
  "category": "string",
  "family": "string",
  "files": {
    "property1": "string",
    "property2": "string"
  },
  "kind": "string",
  "lastModified": "string",
  "menu": "string",
  "subsets": [
    "string"
  ],
  "variants": [
    "string"
  ],
  "version": "string"
}
```

Metadata describing a family of fonts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|axes|[[Axis](#schemaaxis)]|false|none|Axis for variable fonts.|
|category|string|false|none|The category of the font.|
|family|string|false|none|The name of the font.|
|files|object|false|none|The font files (with all supported scripts) for each one of the available variants, as a key : value map.|
|kind|string|false|none|This kind represents a webfont object in the webfonts service.|
|lastModified|string|false|none|The date (format "yyyy-MM-dd") the font was modified for the last time.|
|menu|string|false|none|Font URL for menu subset, a subset of the font that is enough to display the font name|
|subsets|[string]|false|none|The scripts supported by the font.|
|variants|[string]|false|none|The available variants for the font.|
|version|string|false|none|The font version.|

<h2 id="tocS_WebfontList">WebfontList</h2>
<!-- backwards compatibility -->
<a id="schemawebfontlist"></a>
<a id="schema_WebfontList"></a>
<a id="tocSwebfontlist"></a>
<a id="tocswebfontlist"></a>

```json
{
  "items": [
    {
      "axes": [
        {
          "end": 0,
          "start": 0,
          "tag": "string"
        }
      ],
      "category": "string",
      "family": "string",
      "files": {
        "property1": "string",
        "property2": "string"
      },
      "kind": "string",
      "lastModified": "string",
      "menu": "string",
      "subsets": [
        "string"
      ],
      "variants": [
        "string"
      ],
      "version": "string"
    }
  ],
  "kind": "string"
}
```

Response containing the list of fonts currently served by the Google Fonts API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Webfont](#schemawebfont)]|false|none|The list of fonts currently served by the Google Fonts API.|
|kind|string|false|none|This kind represents a list of webfont objects in the webfonts service.|
