<h1 id="restful4up">RESTful4Up v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

RESTful API 4 Unipacker

Base URLs:

* <a href="http://restful4up.local">http://restful4up.local</a>

* <a href="https://api.apis.guru/v1">https://api.apis.guru/v1</a>

<h1 id="restful4up-default">Default</h1>

## applyYaraRules

<a id="opIdapplyYaraRules"></a>

> Code samples

```bash
curl https://example.com/apply-yara-rules \
  -X POST \
  -F 'file=@/path/to/file' \
  -F 'is_unpacking_required=true' \
  -F 'rules=["string"]'
```

`POST /apply-yara-rules`

apply given YARA rules to the given executable. (upto 10 rules)

> Body parameter

```yaml
file: string
is_unpacking_required: "true"
rules:
  - string
```

<h3 id="applyyararules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|file|
|» is_unpacking_required|body|string|false|none|
|» rules|body|[string]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» is_unpacking_required|true|
|» is_unpacking_required|false|

<h3 id="applyyararules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Yara rules|Inline|
|400|Bad Request|request error|[error](#schemaerror)|
|500|Internal Server Error|server error|[error](#schemaerror)|

<h3 id="applyyararules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[apply_yara_rule](#schemaapply_yara_rule)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## clean

<a id="opIdclean"></a>

> Code samples

```bash
curl https://example.com/clean \
  -X HEAD
```

`HEAD /clean`

clean up the uploaded files

<h3 id="clean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Ok|None|
|500|Internal Server Error|server error|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## emulationOutput

<a id="opIdemulationOutput"></a>

> Code samples

```bash
curl https://example.com/emulation-output \
  -X POST \
  -F 'file=@/path/to/file'
```

`POST /emulation-output`

try to get the emulation output after unpacking the file

> Body parameter

```yaml
file: string
```

<h3 id="emulationoutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|file|

<h3 id="emulationoutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|emulation output after unpacking the file|Inline|
|400|Bad Request|request error|[error](#schemaerror)|
|500|Internal Server Error|server error|[error](#schemaerror)|

<h3 id="emulationoutput-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|output|[string]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## generatePartialYaraRule

<a id="opIdgeneratePartialYaraRule"></a>

> Code samples

```bash
curl https://example.com/generate-partial-yara-rules \
  -X POST \
  -F 'file=@/path/to/file' \
  -F 'is_unpacking_required=true' \
  -F 'minimum_string_length=string' \
  -F 'strings_to_ignore=["string"]'
```

`POST /generate-partial-yara-rules`

generate partial YARA rules for give executable. (Rule without the condition section)

> Body parameter

```yaml
file: string
is_unpacking_required: "true"
minimum_string_length: string
strings_to_ignore:
  - string
```

<h3 id="generatepartialyararule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|file|
|» is_unpacking_required|body|string|false|none|
|» minimum_string_length|body|string|false|none|
|» strings_to_ignore|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» is_unpacking_required|true|
|» is_unpacking_required|false|

<h3 id="generatepartialyararule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Yara rules|Inline|
|400|Bad Request|request error|[error](#schemaerror)|
|500|Internal Server Error|server error|[error](#schemaerror)|

<h3 id="generatepartialyararule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[yara](#schemayara)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## unpack

<a id="opIdunpack"></a>

> Code samples

```bash
curl https://example.com/unpack \
  -X POST \
  -F 'file=@/path/to/file'
```

`POST /unpack`

try to unpack the given file

> Body parameter

```yaml
file: string
```

<h3 id="unpack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|file|

<h3 id="unpack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|400|Bad Request|request error|[error](#schemaerror)|
|500|Internal Server Error|server error|[error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_apply_yara_rule">apply_yara_rule</h2>
<!-- backwards compatibility -->
<a id="schemaapply_yara_rule"></a>
<a id="schema_apply_yara_rule"></a>
<a id="tocSapply_yara_rule"></a>
<a id="tocsapply_yara_rule"></a>

```json
{
  "error_message": "string",
  "is_success": true,
  "matched_yara_rules": [
    [
      {
        "rule": "string",
        "string_information": [
          "string"
        ]
      }
    ]
  ],
  "yara_command": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_message|string|false|none|error message, if YARA failed|
|is_success|boolean|true|none|is operation success|
|matched_yara_rules|[[object]]|false|none|matched YARA rules|
|yara_command|string|true|none|Yara command executed|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|status|integer|true|none|none|

<h2 id="tocS_yara">yara</h2>
<!-- backwards compatibility -->
<a id="schemayara"></a>
<a id="schema_yara"></a>
<a id="tocSyara"></a>
<a id="tocsyara"></a>

```json
{
  "meta": {
    "date": "string",
    "md5sum": "string",
    "sha256sum": "string",
    "sha512sum": "string"
  },
  "name": "string",
  "strings": [
    [
      "string",
      "string"
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|Yara rule meta data section|
|name|string|true|none|Yara rule name|
|strings|[[string]]|true|none|Yara rule string section|
