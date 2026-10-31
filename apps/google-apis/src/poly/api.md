<h1 id="poly-api">Poly API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Poly API provides read access to assets hosted on poly.google.com to all, and upload access to poly.google.com for whitelisted accounts.

Base URLs:

* <a href="https://poly.googleapis.com/">https://poly.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/poly/">External documentation</a>

<h1 id="poly-api-assets">assets</h1>

## poly.assets.list

<a id="opIdpoly.assets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/assets \
  -H 'Accept: application/json'
```

`GET /v1/assets`

Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

<h3 id="polyassetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string|false|Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.|
|curated|query|boolean|false|Return only assets that have been curated by the Poly team.|
|format|query|string|false|Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.|
|keywords|query|string|false|One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.|
|maxComplexity|query|string|false|Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.|
|orderBy|query|string|false|Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.|
|pageSize|query|integer|false|The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.|
|pageToken|query|string|false|Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.|
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
|maxComplexity|COMPLEXITY_UNSPECIFIED|
|maxComplexity|COMPLEX|
|maxComplexity|MEDIUM|
|maxComplexity|SIMPLE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "authorName": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "formats": [
        {
          "formatComplexity": {
            "lodHint": 0,
            "triangleCount": "string"
          },
          "formatType": "string",
          "resources": [
            {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          ],
          "root": {
            "contentType": "string",
            "relativePath": "string",
            "url": "string"
          }
        }
      ],
      "isCurated": true,
      "license": "UNKNOWN",
      "metadata": "string",
      "name": "string",
      "presentationParams": {
        "backgroundColor": "string",
        "colorSpace": "UNKNOWN",
        "orientingRotation": {
          "w": 0,
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      "remixInfo": {
        "sourceAsset": [
          "string"
        ]
      },
      "thumbnail": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="polyassetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAssetsResponse](#schemalistassetsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## poly.assets.get

<a id="opIdpoly.assets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.

<h3 id="polyassetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. An asset's name in the form `assets/{ASSET_ID}`.|
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
  "authorName": "string",
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "formats": [
    {
      "formatComplexity": {
        "lodHint": 0,
        "triangleCount": "string"
      },
      "formatType": "string",
      "resources": [
        {
          "contentType": "string",
          "relativePath": "string",
          "url": "string"
        }
      ],
      "root": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      }
    }
  ],
  "isCurated": true,
  "license": "UNKNOWN",
  "metadata": "string",
  "name": "string",
  "presentationParams": {
    "backgroundColor": "string",
    "colorSpace": "UNKNOWN",
    "orientingRotation": {
      "w": 0,
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
  "remixInfo": {
    "sourceAsset": [
      "string"
    ]
  },
  "thumbnail": {
    "contentType": "string",
    "relativePath": "string",
    "url": "string"
  },
  "updateTime": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="polyassetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Asset](#schemaasset)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="poly-api-users">users</h1>

## poly.users.assets.list

<a id="opIdpoly.users.assets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/assets \
  -H 'Accept: application/json'
```

`GET /v1/{name}/assets`

Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.

<h3 id="polyusersassetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.|
|format|query|string|false|Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.|
|orderBy|query|string|false|Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.|
|pageSize|query|integer|false|The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.|
|pageToken|query|string|false|Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.|
|visibility|query|string|false|The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.|
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
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|PUBLISHED|
|visibility|PRIVATE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "totalSize": 0,
  "userAssets": [
    {
      "asset": {
        "authorName": "string",
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "formats": [
          {
            "formatComplexity": {
              "lodHint": 0,
              "triangleCount": "string"
            },
            "formatType": "string",
            "resources": [
              {
                "contentType": "string",
                "relativePath": "string",
                "url": "string"
              }
            ],
            "root": {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          }
        ],
        "isCurated": true,
        "license": "UNKNOWN",
        "metadata": "string",
        "name": "string",
        "presentationParams": {
          "backgroundColor": "string",
          "colorSpace": "UNKNOWN",
          "orientingRotation": {
            "w": 0,
            "x": 0,
            "y": 0,
            "z": 0
          }
        },
        "remixInfo": {
          "sourceAsset": [
            "string"
          ]
        },
        "thumbnail": {
          "contentType": "string",
          "relativePath": "string",
          "url": "string"
        },
        "updateTime": "string",
        "visibility": "VISIBILITY_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="polyusersassetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUserAssetsResponse](#schemalistuserassetsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## poly.users.likedassets.list

<a id="opIdpoly.users.likedassets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/likedassets \
  -H 'Accept: application/json'
```

`GET /v1/{name}/likedassets`

Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.

<h3 id="polyuserslikedassetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.|
|format|query|string|false|Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.|
|orderBy|query|string|false|Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.|
|pageSize|query|integer|false|The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.|
|pageToken|query|string|false|Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.|
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
  "assets": [
    {
      "authorName": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "formats": [
        {
          "formatComplexity": {
            "lodHint": 0,
            "triangleCount": "string"
          },
          "formatType": "string",
          "resources": [
            {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          ],
          "root": {
            "contentType": "string",
            "relativePath": "string",
            "url": "string"
          }
        }
      ],
      "isCurated": true,
      "license": "UNKNOWN",
      "metadata": "string",
      "name": "string",
      "presentationParams": {
        "backgroundColor": "string",
        "colorSpace": "UNKNOWN",
        "orientingRotation": {
          "w": 0,
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      "remixInfo": {
        "sourceAsset": [
          "string"
        ]
      },
      "thumbnail": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="polyuserslikedassetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLikedAssetsResponse](#schemalistlikedassetsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "authorName": "string",
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "formats": [
    {
      "formatComplexity": {
        "lodHint": 0,
        "triangleCount": "string"
      },
      "formatType": "string",
      "resources": [
        {
          "contentType": "string",
          "relativePath": "string",
          "url": "string"
        }
      ],
      "root": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      }
    }
  ],
  "isCurated": true,
  "license": "UNKNOWN",
  "metadata": "string",
  "name": "string",
  "presentationParams": {
    "backgroundColor": "string",
    "colorSpace": "UNKNOWN",
    "orientingRotation": {
      "w": 0,
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
  "remixInfo": {
    "sourceAsset": [
      "string"
    ]
  },
  "thumbnail": {
    "contentType": "string",
    "relativePath": "string",
    "url": "string"
  },
  "updateTime": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorName|string|false|none|The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing).|
|createTime|string(google-datetime)|false|none|For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created.|
|description|string|false|none|The human-readable description, set by the asset's author.|
|displayName|string|false|none|The human-readable name, set by the asset's author.|
|formats|[[Format](#schemaformat)]|false|none|A list of Formats where each format describes one representation of the asset.|
|isCurated|boolean|false|none|Whether this asset has been curated by the Poly team.|
|license|string|false|none|The license under which the author has made the asset available for use, if any.|
|metadata|string|false|none|Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON).|
|name|string|false|none|The unique identifier for the asset in the form: `assets/{ASSET_ID}`.|
|presentationParams|[PresentationParams](#schemapresentationparams)|false|none|Hints for displaying the asset. Note that these parameters are not immutable; the author of an asset may change them post-publication.|
|remixInfo|[RemixInfo](#schemaremixinfo)|false|none|The remix info for the asset.|
|thumbnail|[File](#schemafile)|false|none|The thumbnail image for the asset.|
|updateTime|string(google-datetime)|false|none|The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated.|
|visibility|string|false|none|The visibility of the asset and who can access it.|

#### Enumerated Values

|Property|Value|
|---|---|
|license|UNKNOWN|
|license|CREATIVE_COMMONS_BY|
|license|ALL_RIGHTS_RESERVED|
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|PRIVATE|
|visibility|UNLISTED|
|visibility|PUBLIC|

<h2 id="tocS_AssetImportMessage">AssetImportMessage</h2>
<!-- backwards compatibility -->
<a id="schemaassetimportmessage"></a>
<a id="schema_AssetImportMessage"></a>
<a id="tocSassetimportmessage"></a>
<a id="tocsassetimportmessage"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "filePath": "string",
  "imageError": {
    "code": "CODE_UNSPECIFIED",
    "filePath": "string"
  },
  "objParseError": {
    "code": "CODE_UNSPECIFIED",
    "endIndex": 0,
    "filePath": "string",
    "line": "string",
    "lineNumber": 0,
    "startIndex": 0
  }
}
```

A message generated by the asset import process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code associated with this message.|
|filePath|string|false|none|An optional file path. Only present for those error codes that specify it.|
|imageError|[ImageError](#schemaimageerror)|false|none|An optional image error. Only present for INVALID_IMAGE_FILE.|
|objParseError|[ObjParseError](#schemaobjparseerror)|false|none|An optional OBJ parse error. Only present for OBJ_PARSE_ERROR.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|NO_IMPORTABLE_FILE|
|code|EMPTY_MODEL|
|code|OBJ_PARSE_ERROR|
|code|EXPIRED|
|code|IMAGE_ERROR|
|code|EXTRA_FILES_WITH_ARCHIVE|
|code|DEFAULT_MATERIALS|
|code|FATAL_ERROR|
|code|INVALID_ELEMENT_TYPE|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "contentType": "string",
  "relativePath": "string",
  "url": "string"
}
```

Represents a file in Poly, which can be a root, resource, or thumbnail file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).|
|relativePath|string|false|none|The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename.|
|url|string|false|none|The URL where the file data can be retrieved.|

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
{
  "formatComplexity": {
    "lodHint": 0,
    "triangleCount": "string"
  },
  "formatType": "string",
  "resources": [
    {
      "contentType": "string",
      "relativePath": "string",
      "url": "string"
    }
  ],
  "root": {
    "contentType": "string",
    "relativePath": "string",
    "url": "string"
  }
}
```

The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatComplexity|[FormatComplexity](#schemaformatcomplexity)|false|none|Complexity stats about this representation of the asset.|
|formatType|string|false|none|A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.|
|resources|[[File](#schemafile)]|false|none|A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs.|
|root|[File](#schemafile)|false|none|The root of the file hierarchy. This will always be populated. For some format_types - such as `TILT`, which are self-contained - this is all of the data. Other types - such as `OBJ` - often reference other data elements. These are contained in the resources field.|

<h2 id="tocS_FormatComplexity">FormatComplexity</h2>
<!-- backwards compatibility -->
<a id="schemaformatcomplexity"></a>
<a id="schema_FormatComplexity"></a>
<a id="tocSformatcomplexity"></a>
<a id="tocsformatcomplexity"></a>

```json
{
  "lodHint": 0,
  "triangleCount": "string"
}
```

Information on the complexity of this Format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lodHint|integer(int32)|false|none|A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0).|
|triangleCount|string(int64)|false|none|The estimated number of triangles.|

<h2 id="tocS_ImageError">ImageError</h2>
<!-- backwards compatibility -->
<a id="schemaimageerror"></a>
<a id="schema_ImageError"></a>
<a id="tocSimageerror"></a>
<a id="tocsimageerror"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "filePath": "string"
}
```

A message resulting from reading an image file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The type of image error encountered. Optional for older image errors.|
|filePath|string|false|none|The file path in the import of the image that was rejected.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|INVALID_IMAGE|
|code|IMAGE_TOO_BIG|
|code|WRONG_IMAGE_TYPE|

<h2 id="tocS_ListAssetsResponse">ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsresponse"></a>
<a id="schema_ListAssetsResponse"></a>
<a id="tocSlistassetsresponse"></a>
<a id="tocslistassetsresponse"></a>

```json
{
  "assets": [
    {
      "authorName": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "formats": [
        {
          "formatComplexity": {
            "lodHint": 0,
            "triangleCount": "string"
          },
          "formatType": "string",
          "resources": [
            {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          ],
          "root": {
            "contentType": "string",
            "relativePath": "string",
            "url": "string"
          }
        }
      ],
      "isCurated": true,
      "license": "UNKNOWN",
      "metadata": "string",
      "name": "string",
      "presentationParams": {
        "backgroundColor": "string",
        "colorSpace": "UNKNOWN",
        "orientingRotation": {
          "w": 0,
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      "remixInfo": {
        "sourceAsset": [
          "string"
        ]
      },
      "thumbnail": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

A response message from a request to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|false|none|A list of assets that match the criteria specified in the request.|
|nextPageToken|string|false|none|The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.|
|totalSize|integer(int32)|false|none|The total number of assets in the list, without pagination.|

<h2 id="tocS_ListLikedAssetsResponse">ListLikedAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlikedassetsresponse"></a>
<a id="schema_ListLikedAssetsResponse"></a>
<a id="tocSlistlikedassetsresponse"></a>
<a id="tocslistlikedassetsresponse"></a>

```json
{
  "assets": [
    {
      "authorName": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "formats": [
        {
          "formatComplexity": {
            "lodHint": 0,
            "triangleCount": "string"
          },
          "formatType": "string",
          "resources": [
            {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          ],
          "root": {
            "contentType": "string",
            "relativePath": "string",
            "url": "string"
          }
        }
      ],
      "isCurated": true,
      "license": "UNKNOWN",
      "metadata": "string",
      "name": "string",
      "presentationParams": {
        "backgroundColor": "string",
        "colorSpace": "UNKNOWN",
        "orientingRotation": {
          "w": 0,
          "x": 0,
          "y": 0,
          "z": 0
        }
      },
      "remixInfo": {
        "sourceAsset": [
          "string"
        ]
      },
      "thumbnail": {
        "contentType": "string",
        "relativePath": "string",
        "url": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

A response message from a request to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|false|none|A list of assets that match the criteria specified in the request.|
|nextPageToken|string|false|none|The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.|
|totalSize|integer(int32)|false|none|The total number of assets in the list, without pagination.|

<h2 id="tocS_ListUserAssetsResponse">ListUserAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserassetsresponse"></a>
<a id="schema_ListUserAssetsResponse"></a>
<a id="tocSlistuserassetsresponse"></a>
<a id="tocslistuserassetsresponse"></a>

```json
{
  "nextPageToken": "string",
  "totalSize": 0,
  "userAssets": [
    {
      "asset": {
        "authorName": "string",
        "createTime": "string",
        "description": "string",
        "displayName": "string",
        "formats": [
          {
            "formatComplexity": {
              "lodHint": 0,
              "triangleCount": "string"
            },
            "formatType": "string",
            "resources": [
              {
                "contentType": "string",
                "relativePath": "string",
                "url": "string"
              }
            ],
            "root": {
              "contentType": "string",
              "relativePath": "string",
              "url": "string"
            }
          }
        ],
        "isCurated": true,
        "license": "UNKNOWN",
        "metadata": "string",
        "name": "string",
        "presentationParams": {
          "backgroundColor": "string",
          "colorSpace": "UNKNOWN",
          "orientingRotation": {
            "w": 0,
            "x": 0,
            "y": 0,
            "z": 0
          }
        },
        "remixInfo": {
          "sourceAsset": [
            "string"
          ]
        },
        "thumbnail": {
          "contentType": "string",
          "relativePath": "string",
          "url": "string"
        },
        "updateTime": "string",
        "visibility": "VISIBILITY_UNSPECIFIED"
      }
    }
  ]
}
```

A response message from a request to list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.|
|totalSize|integer(int32)|false|none|The total number of assets in the list, without pagination.|
|userAssets|[[UserAsset](#schemauserasset)]|false|none|A list of UserAssets matching the request.|

<h2 id="tocS_ObjParseError">ObjParseError</h2>
<!-- backwards compatibility -->
<a id="schemaobjparseerror"></a>
<a id="schema_ObjParseError"></a>
<a id="tocSobjparseerror"></a>
<a id="tocsobjparseerror"></a>

```json
{
  "code": "CODE_UNSPECIFIED",
  "endIndex": 0,
  "filePath": "string",
  "line": "string",
  "lineNumber": 0,
  "startIndex": 0
}
```

Details of an error resulting from parsing an OBJ file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The type of problem found (required).|
|endIndex|integer(int32)|false|none|The ending character index at which the problem was found.|
|filePath|string|false|none|The file path in which the problem was found.|
|line|string|false|none|The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation.|
|lineNumber|integer(int32)|false|none|Line number at which the problem was found.|
|startIndex|integer(int32)|false|none|The starting character index at which the problem was found.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|CODE_UNSPECIFIED|
|code|INCONSISTENT_VERTEX_REFS|
|code|INVALID_COMMAND|
|code|INVALID_NUMBER|
|code|INVALID_VERTEX_REF|
|code|MISSING_GEOMETRIC_VERTEX|
|code|MISSING_TOKEN|
|code|TOO_FEW_DIMENSIONS|
|code|TOO_FEW_VERTICES|
|code|TOO_MANY_DIMENSIONS|
|code|UNSUPPORTED_COMMAND|
|code|UNUSED_TOKENS|
|code|VERTEX_NOT_FOUND|
|code|NUMBER_OUT_OF_RANGE|
|code|INVALID_VALUE|
|code|INVALID_TEXTURE_OPTION|
|code|TOO_MANY_PROBLEMS|
|code|MISSING_FILE_NAME|
|code|FILE_NOT_FOUND|
|code|UNKNOWN_MATERIAL|
|code|NO_MATERIAL_DEFINED|
|code|INVALID_SMOOTHING_GROUP|
|code|MISSING_VERTEX_COLORS|
|code|FILE_SUBSTITUTION|
|code|LINE_TOO_LONG|
|code|INVALID_FILE_PATH|

<h2 id="tocS_PresentationParams">PresentationParams</h2>
<!-- backwards compatibility -->
<a id="schemapresentationparams"></a>
<a id="schema_PresentationParams"></a>
<a id="tocSpresentationparams"></a>
<a id="tocspresentationparams"></a>

```json
{
  "backgroundColor": "string",
  "colorSpace": "UNKNOWN",
  "orientingRotation": {
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0
  }
}
```

Hints for displaying the asset, based on information available when the asset was uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColor|string|false|none|A background color which could be used for displaying the 3D asset in a 'thumbnail' or 'palette' style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red.|
|colorSpace|string|false|none|The materials' diffuse/albedo color. This does not apply to vertex colors or texture maps.|
|orientingRotation|[Quaternion](#schemaquaternion)|false|none|A rotation that should be applied to the object root to make it upright. More precisely, this quaternion transforms from "object space" (the space in which the object is defined) to "presentation space", a coordinate system where +Y is up, +X is right, -Z is forward. For example, if the object is the Eiffel Tower, in its local coordinate system the object might be laid out such that the base of the tower is on the YZ plane and the tip of the tower is towards positive X. In this case this quaternion would specify a rotation (of 90 degrees about the Z axis) such that in the presentation space the base of the tower is aligned with the XZ plane, and the tip of the tower lies towards +Y. This rotation is unrelated to the object's pose in the web preview, which is just a camera position setting and is *not* reflected in this rotation. Please note: this is applicable only to the gLTF.|

#### Enumerated Values

|Property|Value|
|---|---|
|colorSpace|UNKNOWN|
|colorSpace|LINEAR|
|colorSpace|GAMMA|

<h2 id="tocS_Quaternion">Quaternion</h2>
<!-- backwards compatibility -->
<a id="schemaquaternion"></a>
<a id="schema_Quaternion"></a>
<a id="tocSquaternion"></a>
<a id="tocsquaternion"></a>

```json
{
  "w": 0,
  "x": 0,
  "y": 0,
  "z": 0
}
```

A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|w|number(double)|false|none|The scalar component.|
|x|number(double)|false|none|The x component.|
|y|number(double)|false|none|The y component.|
|z|number(double)|false|none|The z component.|

<h2 id="tocS_RemixInfo">RemixInfo</h2>
<!-- backwards compatibility -->
<a id="schemaremixinfo"></a>
<a id="schema_RemixInfo"></a>
<a id="tocSremixinfo"></a>
<a id="tocsremixinfo"></a>

```json
{
  "sourceAsset": [
    "string"
  ]
}
```

Info about the sources of this asset (i.e. assets that were remixed to create this asset).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceAsset|[string]|false|none|Resource ids for the sources of this remix, of the form: `assets/{ASSET_ID}`|

<h2 id="tocS_StartAssetImportResponse">StartAssetImportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartassetimportresponse"></a>
<a id="schema_StartAssetImportResponse"></a>
<a id="tocSstartassetimportresponse"></a>
<a id="tocsstartassetimportresponse"></a>

```json
{
  "assetId": "string",
  "assetImportId": "string",
  "assetImportMessages": [
    {
      "code": "CODE_UNSPECIFIED",
      "filePath": "string",
      "imageError": {
        "code": "CODE_UNSPECIFIED",
        "filePath": "string"
      },
      "objParseError": {
        "code": "CODE_UNSPECIFIED",
        "endIndex": 0,
        "filePath": "string",
        "line": "string",
        "lineNumber": 0,
        "startIndex": 0
      }
    }
  ],
  "publishUrl": "string"
}
```

A response message from a request to startImport. This is returned in the response field of the Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string|false|none|The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong.|
|assetImportId|string|false|none|The id of the asset import.|
|assetImportMessages|[[AssetImportMessage](#schemaassetimportmessage)]|false|none|The message from the asset import. This will contain any warnings (or - in the case of failure - errors) that occurred during import.|
|publishUrl|string|false|none|The publish URL for the asset.|

<h2 id="tocS_UserAsset">UserAsset</h2>
<!-- backwards compatibility -->
<a id="schemauserasset"></a>
<a id="schema_UserAsset"></a>
<a id="tocSuserasset"></a>
<a id="tocsuserasset"></a>

```json
{
  "asset": {
    "authorName": "string",
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "formats": [
      {
        "formatComplexity": {
          "lodHint": 0,
          "triangleCount": "string"
        },
        "formatType": "string",
        "resources": [
          {
            "contentType": "string",
            "relativePath": "string",
            "url": "string"
          }
        ],
        "root": {
          "contentType": "string",
          "relativePath": "string",
          "url": "string"
        }
      }
    ],
    "isCurated": true,
    "license": "UNKNOWN",
    "metadata": "string",
    "name": "string",
    "presentationParams": {
      "backgroundColor": "string",
      "colorSpace": "UNKNOWN",
      "orientingRotation": {
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
      }
    },
    "remixInfo": {
      "sourceAsset": [
        "string"
      ]
    },
    "thumbnail": {
      "contentType": "string",
      "relativePath": "string",
      "url": "string"
    },
    "updateTime": "string",
    "visibility": "VISIBILITY_UNSPECIFIED"
  }
}
```

Data about the user's asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Asset](#schemaasset)|false|none|An Asset.|
