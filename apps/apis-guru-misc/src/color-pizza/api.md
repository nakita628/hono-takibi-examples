<h1 id="color-name-api">Color Name API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API that provides names for colors based on their hex value

Base URLs:

* <a href="https://api.color.pizza/v1/">https://api.color.pizza/v1/</a>

Email: <a href="mailto:color-name-api@elastiq.click">meodai</a> 
Web: <a href="https://elastiq.ch/">meodai</a> 
License: <a href="https://github.com/meodai/color-name-api/blob/main/LICENSE">MIT</a>

<h1 id="color-name-api-default">Default</h1>

## Get all colors of the default color name list

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

<h3 id="get-all-colors-of-the-default-color-name-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list|query|[possibleLists](#schemapossiblelists)|false|The name of the color name list to use|
|values|query|string|false|The hex values of the colors to retrieve without '#'|
|noduplicates|query|boolean|false|Allow duplicate names or not|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list|default|
|list|bestOf|
|list|wikipedia|
|list|french|
|list|ridgway|
|list|risograph|
|list|basic|
|list|chineseTraditional|
|list|html|
|list|japaneseTraditional|
|list|leCorbusier|
|list|nbsIscc|
|list|ntc|
|list|osxcrayons|
|list|ral|
|list|sanzoWadaI|
|list|thesaurus|
|list|werner|
|list|windows|
|list|x11|
|list|xkcd|

> Example responses

> 200 Response

```json
{
  "colors": [
    {
      "distance": 0,
      "hex": "string",
      "hsl": {
        "h": 0,
        "l": 0,
        "s": 0
      },
      "lab": {
        "a": 0,
        "b": 0,
        "l": 0
      },
      "luminance": 0,
      "luminanceWCAG": 0,
      "name": "string",
      "requestedHex": "string",
      "rgb": {
        "b": 0,
        "g": 0,
        "r": 0
      },
      "svg": "string",
      "svgNamed": "string",
      "swatchImg": {}
    }
  ],
  "paletteTitle": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="get-all-colors-of-the-default-color-name-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|NOT FOUND|[error](#schemaerror)|

<h3 id="get-all-colors-of-the-default-color-name-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[color](#schemacolor)]|false|none|none|
|paletteTitle|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all colors of the default color name list

> Code samples

```bash
curl https://example.com/lists/ \
  -H 'Accept: application/json'
```

`GET /lists/`

> Example responses

> 200 Response

```json
{
  "listDescriptions": {
    "basic": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "bestOf": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "chineseTraditional": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "default": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "french": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "html": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "japaneseTraditional": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "leCorbusier": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "nbsIscc": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "ntc": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "osxcrayons": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "ral": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "ridgway": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "risograph": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "sanzoWadaI": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "thesaurus": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "werner": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "wikipedia": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "windows": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "x11": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    },
    "xkcd": {
      "colorCount": 0,
      "description": "string",
      "key": "string",
      "license": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    }
  },
  "localAvailableColorNameLists": [
    "string"
  ]
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="get-all-colors-of-the-default-color-name-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|NOT FOUND|[error](#schemaerror)|

<h3 id="get-all-colors-of-the-default-color-name-list-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listDescriptions|object|false|none|none|
|» basic|[listDescription](#schemalistdescription)|false|none|none|
|» bestOf|[listDescription](#schemalistdescription)|false|none|none|
|» chineseTraditional|[listDescription](#schemalistdescription)|false|none|none|
|» default|[listDescription](#schemalistdescription)|false|none|none|
|» french|[listDescription](#schemalistdescription)|false|none|none|
|» html|[listDescription](#schemalistdescription)|false|none|none|
|» japaneseTraditional|[listDescription](#schemalistdescription)|false|none|none|
|» leCorbusier|[listDescription](#schemalistdescription)|false|none|none|
|» nbsIscc|[listDescription](#schemalistdescription)|false|none|none|
|» ntc|[listDescription](#schemalistdescription)|false|none|none|
|» osxcrayons|[listDescription](#schemalistdescription)|false|none|none|
|» ral|[listDescription](#schemalistdescription)|false|none|none|
|» ridgway|[listDescription](#schemalistdescription)|false|none|none|
|» risograph|[listDescription](#schemalistdescription)|false|none|none|
|» sanzoWadaI|[listDescription](#schemalistdescription)|false|none|none|
|» thesaurus|[listDescription](#schemalistdescription)|false|none|none|
|» werner|[listDescription](#schemalistdescription)|false|none|none|
|» wikipedia|[listDescription](#schemalistdescription)|false|none|none|
|» windows|[listDescription](#schemalistdescription)|false|none|none|
|» x11|[listDescription](#schemalistdescription)|false|none|none|
|» xkcd|[listDescription](#schemalistdescription)|false|none|none|
|localAvailableColorNameLists|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all colors of the default color name list

> Code samples

```bash
curl 'https://example.com/names/?name=string' \
  -H 'Accept: application/json'
```

`GET /names/`

<h3 id="get-all-colors-of-the-default-color-name-list-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the color to retrieve (min 3 characters)|
|list|query|[possibleLists](#schemapossiblelists)|false|The name of the color name list to use|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list|default|
|list|bestOf|
|list|wikipedia|
|list|french|
|list|ridgway|
|list|risograph|
|list|basic|
|list|chineseTraditional|
|list|html|
|list|japaneseTraditional|
|list|leCorbusier|
|list|nbsIscc|
|list|ntc|
|list|osxcrayons|
|list|ral|
|list|sanzoWadaI|
|list|thesaurus|
|list|werner|
|list|windows|
|list|x11|
|list|xkcd|

> Example responses

> 200 Response

```json
{
  "colors": [
    {
      "distance": 0,
      "hex": "string",
      "hsl": {
        "h": 0,
        "l": 0,
        "s": 0
      },
      "lab": {
        "a": 0,
        "b": 0,
        "l": 0
      },
      "luminance": 0,
      "luminanceWCAG": 0,
      "name": "string",
      "requestedHex": "string",
      "rgb": {
        "b": 0,
        "g": 0,
        "r": 0
      },
      "svg": "string",
      "svgNamed": "string",
      "swatchImg": {}
    }
  ],
  "paletteTitle": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="get-all-colors-of-the-default-color-name-list-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|NOT FOUND|[error](#schemaerror)|

<h3 id="get-all-colors-of-the-default-color-name-list-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[color](#schemacolor)]|false|none|none|
|paletteTitle|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a color swatch for any color

> Code samples

```bash
curl 'https://example.com/swatch/?color=string' \
  -H 'Accept: application/json'
```

`GET /swatch/`

<h3 id="generate-a-color-swatch-for-any-color-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|color|query|string|true|The hex value of the color to retrieve without '#'|
|name|query|string|false|The name of the color|

> Example responses

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="generate-a-color-swatch-for-any-color-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|NOT FOUND|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_color">color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "distance": 0,
  "hex": "string",
  "hsl": {
    "h": 0,
    "l": 0,
    "s": 0
  },
  "lab": {
    "a": 0,
    "b": 0,
    "l": 0
  },
  "luminance": 0,
  "luminanceWCAG": 0,
  "name": "string",
  "requestedHex": "string",
  "rgb": {
    "b": 0,
    "g": 0,
    "r": 0
  },
  "svg": "string",
  "svgNamed": "string",
  "swatchImg": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distance|number|false|none|none|
|hex|string|false|none|none|
|hsl|object|false|none|none|
|lab|object|false|none|none|
|luminance|number|false|none|none|
|luminanceWCAG|number|false|none|none|
|name|string|false|none|none|
|requestedHex|string|false|none|none|
|rgb|object|false|none|none|
|svg|string|false|none|none|
|svgNamed|string|false|none|none|
|swatchImg|object|false|none|none|

<h2 id="tocS_colorBase">colorBase</h2>
<!-- backwards compatibility -->
<a id="schemacolorbase"></a>
<a id="schema_colorBase"></a>
<a id="tocScolorbase"></a>
<a id="tocscolorbase"></a>

```json
{
  "hex": "string",
  "hsl": {
    "h": 0,
    "l": 0,
    "s": 0
  },
  "lab": {
    "a": 0,
    "b": 0,
    "l": 0
  },
  "luminance": 0,
  "luminanceWCAG": 0,
  "name": "string",
  "rgb": {
    "b": 0,
    "g": 0,
    "r": 0
  },
  "swatchImg": {
    "svg": "string",
    "svgNamed": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hex|string|false|none|none|
|hsl|object|false|none|none|
|lab|object|false|none|none|
|luminance|number|false|none|none|
|luminanceWCAG|number|false|none|none|
|name|string|false|none|none|
|rgb|object|false|none|none|
|swatchImg|object|false|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_listDescription">listDescription</h2>
<!-- backwards compatibility -->
<a id="schemalistdescription"></a>
<a id="schema_listDescription"></a>
<a id="tocSlistdescription"></a>
<a id="tocslistdescription"></a>

```json
{
  "colorCount": 0,
  "description": "string",
  "key": "string",
  "license": "string",
  "source": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorCount|integer|false|none|none|
|description|string|false|none|none|
|key|string|false|none|none|
|license|string|false|none|none|
|source|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_possibleLists">possibleLists</h2>
<!-- backwards compatibility -->
<a id="schemapossiblelists"></a>
<a id="schema_possibleLists"></a>
<a id="tocSpossiblelists"></a>
<a id="tocspossiblelists"></a>

```json
"default"
```
