<h1 id="deepl-api-documentation">DeepL API Documentation v3.14.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The DeepL API provides programmatic access to DeepL’s language AI technology.

Note: this OpenAPI spec is embedded into our API documentation and has shortened descriptions.

Base URLs:

* <a href="https://api.deepl.com">https://api.deepl.com</a> - DeepL API Pro

* <a href="https://api-free.deepl.com">https://api-free.deepl.com</a> - DeepL API Free

<a href="https://www.deepl.com/pro-license">Terms of service</a>
Web: <a href="https://www.deepl.com/contact-us">DeepL - Contact us</a> 

<a href="https://www.deepl.com/pro#developer">DeepL Pro - Plans and pricing</a>

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. Authentication with `Authorization` header and `DeepL-Auth-Key` authentication scheme. Example: `DeepL-Auth-Key <api-key>`

<h1 id="deepl-api-documentation-translatetext">TranslateText</h1>

The text-translation API currently consists of a single endpoint, `translate`, which is described below.

## Request Translation

<a id="opIdtranslateText"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/translate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": [
      "Hello, World!"
    ],
    "source_lang": "EN",
    "target_lang": "DE",
    "context": "This is context.",
    "show_billed_characters": true,
    "split_sentences": "1",
    "preserve_formatting": false,
    "formality": "prefer_more",
    "model_type": "quality_optimized",
    "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
    "glossary_ids": [
      "def3a26b-3e84-45b3-84ae-0c0aaf3525f7"
    ],
    "style_id": "7ff9bfd6-cd85-4190-8503-d6215a321519",
    "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
    "translation_memory_threshold": 75,
    "custom_instructions": [
      "Use a friendly, diplomatic tone"
    ],
    "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
    "tag_handling": "html",
    "tag_handling_version": "v2",
    "outline_detection": true,
    "enable_beta_languages": false,
    "non_splitting_tags": [
      "non_splitting_tag"
    ],
    "splitting_tags": [
      "splitting_tag"
    ],
    "ignore_tags": [
      "ignore_tag"
    ]
  }'
```

`POST /v2/translate`

Translate one or more text strings into a target language. Send multiple strings in a
single request, within the request size limit, and specify formatting, tag handling,
and customization options such as glossaries, style rules, and translation memories.

> Body parameter

```json
{
  "text": [
    "Hello, World!"
  ],
  "source_lang": "EN",
  "target_lang": "DE",
  "context": "This is context.",
  "show_billed_characters": true,
  "split_sentences": "1",
  "preserve_formatting": false,
  "formality": "prefer_more",
  "model_type": "quality_optimized",
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "glossary_ids": [
    "def3a26b-3e84-45b3-84ae-0c0aaf3525f7"
  ],
  "style_id": "7ff9bfd6-cd85-4190-8503-d6215a321519",
  "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "translation_memory_threshold": 75,
  "custom_instructions": [
    "Use a friendly, diplomatic tone"
  ],
  "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
  "tag_handling": "html",
  "tag_handling_version": "v2",
  "outline_detection": true,
  "enable_beta_languages": false,
  "non_splitting_tags": [
    "non_splitting_tag"
  ],
  "splitting_tags": [
    "splitting_tag"
  ],
  "ignore_tags": [
    "ignore_tag"
  ]
}
```

<h3 id="request-translation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-DeepL-Reporting-Tag|header|string|false|An optional custom reporting tag used to attribute this request's usage to a team, project, customer, or other category of your choosing. Values are limited to 100 characters. See [How to use custom reporting tags](/docs/learning-how-tos/examples-and-guides/how-to-use-custom-reporting-tags) for validation rules, naming guidance, and how to retrieve usage by tag.<br>|
|body|body|object|true|none|
|» text|body|[string]|true|Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified<br>many times in a single request, within the request size limit (128KiB). Translations are returned<br>in the same order as they are requested. Each text in the array is translated independently — texts<br>do not share context with each other.|
|» source_lang|body|[SourceLanguage](#schemasourcelanguage)|false|Language of the text to be translated. If this parameter is omitted, the API will attempt to<br>detect the language of the text and translate it.<br><br>For the full list of supported source languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|» target_lang|body|[TargetLanguage](#schematargetlanguage)|true|The language into which the text should be translated.<br><br>For the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|» context|body|[Context](#schemacontext)|false|Additional context that can influence a translation but is not translated itself.<br><br>Characters included in the `context` parameter will not be counted toward billing.|
|» show_billed_characters|body|[ShowBilledCharacters](#schemashowbilledcharacters)|false|When true, the response will include the billed_characters parameter, giving the<br>number of characters from the request that will be counted by DeepL for billing purposes.|
|» split_sentences|body|[SplitSentencesOption](#schemasplitsentencesoption)|false|Sets whether the translation engine should first split the input into sentences.<br><br>Possible values are:<br>  * 0 - no splitting at all, whole input is treated as one sentence<br>  * 1 (default when tag_handling is not set to html) - splits on punctuation and on newlines<br>  * nonewlines (default when tag_handling=html) - splits on punctuation only, ignoring newlines|
|» preserve_formatting|body|[PreserveFormattingOption](#schemapreserveformattingoption)|false|Sets whether the translation engine should respect the original formatting, even if it would usually<br>correct some aspects.|
|» formality|body|[Formality](#schemaformality)|false|Sets whether the translated text should lean towards formal or informal language.<br>This feature is only available for certain target languages. Setting this parameter<br>with a target language that does not support formality will fail, unless one of the<br>`prefer_...` options are used.<br>Possible options are:<br>  * `default` (default)<br>  * `more` - for a more formal language<br>  * `less` - for a more informal language<br>  * `prefer_more` - for a more formal language if available, otherwise fallback to default formality<br>  * `prefer_less` - for a more informal language if available, otherwise fallback to default formality|
|» model_type|body|[ModelType](#schemamodeltype)|false|Specifies which DeepL model should be used for translation.|
|» glossary_id|body|string|false|Specify the glossary to use for the translation. The glossary needs a dictionary for the<br>language pair of the request.<br><br>If `source_lang` is omitted, DeepL detects the source language and uses the dictionary for<br>the detected language pair. The request returns a `400` if the glossary has no dictionary<br>for that pair.<br><br>Cannot be used together with `glossary_ids`.|
|» glossary_ids|body|[string]|false|Specify up to 5 glossaries to use for the translation, as an array of glossary IDs. Each glossary's matching terms are applied to the translation.<br><br>Every listed glossary must contain a dictionary for the requested language pair.<br><br>If `source_lang` is omitted, DeepL detects the source language and every listed glossary must<br>contain a dictionary for the detected language pair. A single glossary without a matching<br>dictionary returns a `400` for the whole request.<br><br>Cannot be used together with `glossary_id`.|
|» style_id|body|string|false|Specify the [style rule list](/docs/customize/using-style-rules) to use for the translation.<br><br>**Important:** The target language has to match the language of the style rule list. A list<br>created for a root language (for example `en`) applies to that language and all of its variants<br>(`EN-GB`, `EN-US`). A list created for a variant (for example `en-GB`) applies only when<br>`target_lang` is that variant.<br><br>All `model_type` values are supported.|
|» translation_memory_id|body|[TranslationMemoryId](#schematranslationmemoryid)|false|A unique ID assigned to a translation memory.|
|» translation_memory_threshold|body|[TranslationMemoryThreshold](#schematranslationmemorythreshold)|false|The minimum matching percentage required for a translation memory segment to be applied (recommended to be 75% or higher). A value below 50 is treated as 50.|
|» custom_instructions|body|[string]|false|Specify a list of instructions to customize the translation behavior. Up to 10 custom instructions can be specified, each with a maximum of 300 characters.|
|» style_profile_id|body|string(uuid)|false|Translate with a [style profile](/api-reference/style-profiles/list-all-style-profiles): its glossaries,<br>style rule lists and translation memories through one ID. The profile is applied per text once the<br>source language is known: the glossaries with a dictionary for the text's language pair, the style<br>rule list for the target language, and the translation memories whose source language matches the<br>text. A component that does not fit a text's language pair is left out for that text; this is not an<br>error.<br><br>Cannot be combined with `glossary_id`, `glossary_ids`, `style_id`, `translation_memory_id`,<br>`translation_memory_threshold` or `custom_instructions`. A request that combines them is rejected<br>with `400 Bad Request`. A style profile that does not exist or that your account cannot access is<br>rejected with `404 Not Found`.|
|» tag_handling|body|[TagHandlingOption](#schemataghandlingoption)|false|Sets which kind of tags should be handled. Options currently available:<br> * `xml`<br> * `html`|
|» tag_handling_version|body|[TagHandlingVersionOption](#schemataghandlingversionoption)|false|Sets which version of the tag handling algorithm should be used. Options currently available:<br>* `v1`: Traditional algorithm (currently the default, will become deprecated in the future).<br>* `v2`: Improved algorithm released in October 2025 (will become the default in the future).|
|» outline_detection|body|[OutlineDetectionOption](#schemaoutlinedetectionoption)|false|Disable the automatic detection of XML structure by setting the `outline_detection` parameter<br>to `false` and selecting the tags that should be considered structure tags. This will split sentences<br>using the `splitting_tags` parameter.|
|» enable_beta_languages|body|boolean|false|**Deprecated.** This parameter is maintained for backward compatibility and has no effect.|
|» non_splitting_tags|body|[string]|false|Comma-separated list of XML tags which never split sentences.|
|» splitting_tags|body|[string]|false|Comma-separated list of XML tags which always cause splits.|
|» ignore_tags|body|[string]|false|Comma-separated list of XML tags that indicate text not to be translated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» split_sentences|0|
|» split_sentences|1|
|» split_sentences|nonewlines|
|» formality|default|
|» formality|more|
|» formality|less|
|» formality|prefer_more|
|» formality|prefer_less|
|» model_type|quality_optimized|
|» model_type|prefer_quality_optimized|
|» model_type|latency_optimized|
|» tag_handling|xml|
|» tag_handling|html|
|» tag_handling_version|v2|
|» tag_handling_version|v1|

> Example responses

> 200 Response

```json
{
  "translations": [
    {
      "detected_source_language": "EN",
      "text": "Hallo, Welt!",
      "billed_characters": 42,
      "model_type_used": "quality_optimized",
      "tag_handling_version": "v2"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 414 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="request-translation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The translate function returns a JSON representation of the translations in the order the text parameters have been specified.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|414|URI Too Long|The request URL is too long. You can avoid this error by using a POST request instead of a GET request, and sending the parameters in the HTTP body.|Inline|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="request-translation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translations|[object]|false|none|none|
|» detected_source_language|string|false|none|The language detected in the source text. It reflects the value of the `source_lang` parameter, when specified.|
|» text|string|false|none|The translated text.|
|» billed_characters|integer|false|none|Number of characters counted by DeepL for billing purposes. Only present if the show_billed_characters parameter is set to true.|
|» model_type_used|string|false|none|Indicates the translation model used. Only present if model_type parameter is included in the request.|
|» tag_handling_version|string|false|none|The version of the tag handling algorithm used for the translation. Only present when the `tag_handling` parameter (`xml` or `html`) is set. If you don't specify `tag_handling_version`, this shows the default that was applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|» tag_handling_version|v2|
|» tag_handling_version|v1|

Status Code **414**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-translatedocuments">TranslateDocuments</h1>

The document translation API allows you to translate whole documents and supports the following file types and extensions:
  * `docx` - Microsoft Word Document
  * `pptx` - Microsoft PowerPoint Document
  * `xlsx` - Microsoft Excel Document
  * `xlsm` - Microsoft Excel Macro-Enabled Workbook
  * `pdf` - Portable Document Format
  * `htm / html` - HTML Document
  * `txt` - Plain Text Document
  * `xlf / xliff` - XLIFF Document (versions 1.2, 2.0, and 2.1)
  * `srt` - SRT Document
  * `vtt` - WebVTT Subtitle Document
  * `idml` - Adobe InDesign Markup Language
  * `xml` - XML Document
  * `json` - JSON Document
  * `yaml / yml` - YAML Document
  * `properties` - Java Properties Document
  * `strings` - iOS/macOS Strings Document
  * `md / markdown` - Markdown Document
  * `dita` - DITA topic (Darwin Information Typing Architecture)
  * `mif` - Adobe FrameMaker Interchange Format
  * `zip` - SCORM Package (e-learning content)
  * `odt` - OpenDocument Text Document
  * `rtf` - Rich Text Format Document
  * `resx` - .NET Resource Document
  * `jpeg` / `jpg` / `png` - Image

## Upload and Translate a Document

<a id="opIdtranslateDocument"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/document \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'target_lang=DE' \
  -F 'file=@/path/to/file'
```

`POST /v2/document`

Upload a document for translation and receive a `document_id` and `document_key`. Use
them to poll the document status and download the translated file. Translation is
asynchronous: the upload response confirms the request, not a finished translation.

> Body parameter

```yaml
target_lang: DE
file: "@document.docx"
```

<h3 id="upload-and-translate-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» source_lang|body|[SourceLanguage](#schemasourcelanguage)|false|Language of the text to be translated. If this parameter is omitted, the API will attempt to<br>detect the language of the text and translate it.<br><br>For the full list of supported source languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|» target_lang|body|[TargetLanguage](#schematargetlanguage)|true|The language into which the text should be translated.<br><br>For the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|» file|body|string(binary)|true|The document file to be translated. The file name should be included in this part's content disposition. As an alternative, the filename parameter can be used. The following file types and extensions are supported:<br>  * `docx` - Microsoft Word Document<br>  * `pptx` - Microsoft PowerPoint Document<br>  * `xlsx` - Microsoft Excel Document<br>  * `xlsm` - Microsoft Excel Macro-Enabled Workbook<br>  * `pdf` - Portable Document Format<br>  * `htm / html` - HTML Document<br>  * `txt` - Plain Text Document<br>  * `xlf / xliff` - XLIFF Document (versions 1.2, 2.0, and 2.1)<br>  * `srt` - SRT Document<br>  * `vtt` - WebVTT Subtitle Document<br>  * `idml` - Adobe InDesign Markup Language<br>  * `xml` - XML Document<br>  * `json` - JSON Document<br>  * `yaml / yml` - YAML Document<br>  * `properties` - Java Properties Document<br>  * `strings` - iOS/macOS Strings Document<br>  * `md / markdown` - Markdown Document<br>  * `dita` - DITA topic (Darwin Information Typing Architecture)<br>  * `mif` - Adobe FrameMaker Interchange Format<br>  * `zip` - SCORM Package (e-learning content)<br>  * `odt` - OpenDocument Text Document<br>  * `rtf` - Rich Text Format Document<br>  * `resx` - .NET Resource Document<br>  * `jpeg` / `jpg` / `png` - Image|
|» filename|body|string|false|The name of the uploaded file. Can be used as an alternative to including the file name in the file part's content disposition.|
|» output_format|body|string|false|File extension of desired format of translated file, for example: `docx`. If unspecified, by default the translated file will be in the same format as the input file.<br>|
|» input_conversion_options|body|string|false|Comma-separated list of `key:value` conversion options, prefixed with a version, that control how the input document is converted before translation. For example: `version:1,suppress-image-types:all`.<br><br>Supported keys:<br><br>  * `suppress-image-types` - Leaves the specified types of images embedded in the document untranslated. The value is a hyphen-separated list of image content types (for example `logo-photo` suppresses logos and photos), or `all` to suppress every embedded image. Recognized image content types: `logo`, `icon`, `decorative`, `barcode`, `formula`, `signature`, `handwriting`, `stamp`, `screenshot`, `diagram`, `chart`, `photo`, `illustration`, `comic`, `music`, `infographic`, `table`, `text`, `other`, `unknown`. Only `pptx` documents support this key.<br>  * `json-placeholders` - Controls how brace-delimited placeholders in `json` string values are handled. `protect` (the default) keeps identifier-shaped placeholders such as `{stars}` or `{{userName}}` verbatim so they are not translated; `translate` translates them along with the surrounding text. ICU MessageFormat skeletons such as `{count, plural, one {# item} other {# items}}` are always protected, with only the branch text translated, in both modes. Multi-word groups such as `{see note}` are treated as translatable text in both modes.<br><br>For other file types this parameter is ignored. Unrecognized keys are ignored.|
|» formality|body|[Formality](#schemaformality)|false|Sets whether the translated text should lean towards formal or informal language.<br>This feature is only available for certain target languages. Setting this parameter<br>with a target language that does not support formality will fail, unless one of the<br>`prefer_...` options are used.<br>Possible options are:<br>  * `default` (default)<br>  * `more` - for a more formal language<br>  * `less` - for a more informal language<br>  * `prefer_more` - for a more formal language if available, otherwise fallback to default formality<br>  * `prefer_less` - for a more informal language if available, otherwise fallback to default formality|
|» glossary_id|body|string|false|A unique ID assigned to a glossary. To check glossary support for a language pair, call `GET /v3/languages?resource=translate_document` and verify the `glossary` feature key is present on both the source and target language.<br><br>Requires the `source_lang` parameter. The request returns a `400` if `source_lang` is omitted.<br><br>Cannot be used together with `glossary_ids`.|
|» glossary_ids|body|[string]|false|Comma-separated list of up to 5 glossary IDs to use for the translation. Each glossary's matching terms are applied to the translated document. May also be sent as a repeated parameter.<br><br>Every listed glossary must contain a dictionary for the requested language pair.<br><br>Requires the `source_lang` parameter. The request returns a `400` if `source_lang` is omitted.<br><br>Cannot be used together with `glossary_id`.|
|» style_id|body|string|false|Specify the [style rule list](/docs/customize/using-style-rules) to use for the translation.<br><br>**Important:** The target language has to match the language of the style rule list. A list<br>created for a root language (for example `en`) applies to that language and all of its variants<br>(`EN-GB`, `EN-US`). A list created for a variant (for example `en-GB`) applies only when<br>`target_lang` is that variant.|
|» translation_memory_id|body|[TranslationMemoryId](#schematranslationmemoryid)|false|A unique ID assigned to a translation memory.|
|» translation_memory_threshold|body|[TranslationMemoryThreshold](#schematranslationmemorythreshold)|false|The minimum matching percentage required for a translation memory segment to be applied (recommended to be 75% or higher). A value below 50 is treated as 50.|
|» custom_instructions|body|string|false|Specify a list of instructions to customize the translation behavior, as a JSON array of strings, for example `["Use a friendly, diplomatic tone"]`. Up to 10 custom instructions can be specified, each with a maximum of 300 characters.<br><br>Rejected with `400` before the upload is accepted if the value is not a JSON array of strings or exceeds these limits.|
|» style_profile_id|body|string(uuid)|false|Translate with a [style profile](/api-reference/style-profiles/list-all-style-profiles): its glossaries,<br>style rule lists and translation memories through one ID. The profile is applied once the<br>document's source language is known: the glossaries with a dictionary for the language pair, the<br>style rule list for the target language, and the translation memories whose source language matches<br>the document. A component that does not fit the language pair is left out; this is not an error.<br><br>Cannot be combined with `glossary_id`, `glossary_ids`, `style_id`, `translation_memory_id`,<br>`translation_memory_threshold` or `custom_instructions`. A request that combines them is rejected<br>with `400 Bad Request`.<br>A style profile that does not exist or that your account cannot access is not rejected at upload:<br>the document status reports an error with the message `Style profile not found.`.|
|» enable_watermark|body|boolean|false|When `true`, adds a "Translated by DeepL" watermark to the translated document.<br><br>Only supported for `docx` and `pdf` output. For all other output formats the parameter is ignored and the document is returned without a watermark.|
|» enable_quality_evaluation|body|boolean|false|(beta) When `true`, DeepL also evaluates the finished translation and returns a `quality_evaluation_job_id`. Poll [`GET /v1/quality-evaluations/{job_id}`](/api-reference/quality-evaluations/poll) with it for a per-segment report of translation issues. The translation itself is unaffected.<br><br>**Important:** Available to select customers; contact your customer success manager to enable it. Supported for `docx`, `pptx`, `pdf`, `srt`, `idml`, `xml`, `dita`, `mif`, and XLIFF 2.1 uploads, and for the [supported language pairs](/api-reference/quality-evaluations/poll#supported-language-pairs) only.<br><br>Rejected before the upload is accepted: `403` if quality evaluation is not enabled for the account, `400` for an ineligible file type, an unsupported language pair, or a value other than `true` or `false`.|
|» enable_beta_languages|body|boolean|false|**Deprecated.** This parameter is maintained for backward compatibility and has no effect.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» formality|default|
|» formality|more|
|» formality|less|
|» formality|prefer_more|
|» formality|prefer_less|

> Example responses

> 200 Response

```json
{
  "document_id": "04DE5AD98A02647D83285A36021911C6",
  "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="upload-and-translate-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document function returns a JSON object containing the ID and encryption key assigned to the uploaded document. Once received by the server, uploaded documents are immediately encrypted using a uniquely generated encryption key. This key is not persistently stored on the server. Therefore, it must be stored by the client and sent back to the server with every subsequent request that refers to this particular document.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="upload-and-translate-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_id|string|false|none|A unique ID assigned to the uploaded document and the translation process. Must be used when referring to this particular document in subsequent API requests.|
|document_key|string|false|none|A unique key that is used to encrypt the uploaded document as well as the resulting translation on the server side. Must be provided with every subsequent API request regarding this particular document.|
|quality_evaluation_job_id|string|false|none|(beta) A unique ID assigned to the quality evaluation. Returned only when the request set `enable_quality_evaluation=true`. Use it to retrieve the report from [`GET /v1/quality-evaluations/{job_id}`](/api-reference/quality-evaluations/poll).|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Check Document Status

<a id="opIdgetDocumentStatus"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/document/04DE5AD98A02647D83285A36021911C6 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
  }'
```

`POST /v2/document/{document_id}`

Retrieve the translation status of an uploaded document. Poll this endpoint until the
status is `done`, then download the result. The response includes an estimated
remaining time while the document is still translating.

> Body parameter

```json
{
  "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
}
```

<h3 id="check-document-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|The document ID that was sent to the client when the document was uploaded to the API.|
|body|body|[DocumentKey](#schemadocumentkey)|true|none|
|» document_key|body|string|true|The document encryption key that was sent to the client when the document was uploaded to the API.|

> Example responses

> 200 Response

```json
{
  "document_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "translating",
  "seconds_remaining": 20
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="check-document-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document status request returns a JSON object containing the document ID that was used in the request as well as string indicating the current status of the translation process. While the translation is running, the estimated number of seconds remaining until the process is done is also included in the response.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="check-document-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_id|string|true|none|A unique ID assigned to the uploaded document and the requested translation process. The same ID that was used when requesting the translation status.|
|status|string|true|none|A short description of the state the document translation process is currently in. Possible values are:<br> * `queued` - the translation job is waiting in line to be processed<br> * `translating` - the translation is currently ongoing<br> * `done` - the translation is done and the translated document is ready for download<br> * `error` - an irrecoverable error occurred while translating the document|
|seconds_remaining|integer|false|none|Estimated number of seconds until the translation is done.<br>This parameter is only included while `status` is `"translating"`.|
|billed_characters|integer|false|none|The number of characters billed to your account. The characters will only be billed after a successful download request.|
|error_message|string|false|none|A short description of the error, if available.<br>Note that the content is subject to change.<br>This parameter may be included if an error occurred during translation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|translating|
|status|done|
|status|error|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Download Translated Document

<a id="opIddownloadDocument"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/document/04DE5AD98A02647D83285A36021911C6/result \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
  }'
```

`POST /v2/document/{document_id}/result`

Download a translated document. The document must have a status of `done`. Each
document can be downloaded only once: after a successful download DeepL deletes the
file and invalidates the `document_id`.

> Body parameter

```json
{
  "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
}
```

<h3 id="download-translated-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|The document ID that was sent to the client when the document was uploaded to the API.|
|body|body|[DocumentKey](#schemadocumentkey)|true|none|
|» document_key|body|string|true|The document encryption key that was sent to the client when the document was uploaded to the API.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "Document not found"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "Document already downloaded"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="download-translated-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document is provided as a download. There is no other data included in the response besides the document data. The content type used in the response corresponds to the document type.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Trying to download a document using a non-existing document ID or the wrong document key will result in a 404 error. As stated above, documents can only be downloaded once before they are deleted from the server and their document ID is invalidated.|[DocumentTranslationError](#schemadocumenttranslationerror)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|A 503 result will be returned if the user tries to download a translated document that is currently being processed and is not yet ready for download.<br>Please make sure to check that the document status is 'done' before trying to send a download request.|[DocumentTranslationError](#schemadocumenttranslationerror)|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="download-translated-document-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-rephrasetext">RephraseText</h1>

The `rephrase` endpoint  is used to make corrections and adjustments to texts based on style or tone.

## Improve text

<a id="opIdrephraseText"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/write/rephrase \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": [
      "this is a example sentence to imprve"
    ],
    "target_lang": "de",
    "writing_style": "academic",
    "tone": "confident"
  }'
```

`POST /v2/write/rephrase`

Rewrite one or more texts to improve fluency and readability, optionally targeting a
specific writing style or tone. Use the `correct` endpoint instead when you want a
minimal spelling and grammar pass rather than broader rewriting.

> Body parameter

```json
{
  "text": [
    "this is a example sentence to imprve"
  ],
  "target_lang": "de",
  "writing_style": "academic",
  "tone": "confident"
}
```

<h3 id="improve-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» text|body|[string]|true|Text to be improved. Only UTF-8-encoded plain text is supported. Improvements are returned in the same order as they are requested.|
|» target_lang|body|[TargetLanguageWrite](#schematargetlanguagewrite)|false|The language for the text improvement.|
|» writing_style|body|[WritingStyle](#schemawritingstyle)|false|Specify a style to rephrase your text in a way that fits your audience and goals.<br>The `prefer_` prefix allows falling back to the default style if the language does not yet support styles.|
|» tone|body|[WritingTone](#schemawritingtone)|false|Specify the desired tone for your text.<br>The `prefer_` prefix allows falling back to the default tone if the language does not yet support tones.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target_lang|de|
|» target_lang|en|
|» target_lang|en-GB|
|» target_lang|en-US|
|» target_lang|es|
|» target_lang|fr|
|» target_lang|it|
|» target_lang|ja|
|» target_lang|ko|
|» target_lang|pt|
|» target_lang|pt-BR|
|» target_lang|pt-PT|
|» target_lang|zh|
|» target_lang|zh-Hans|
|» writing_style|academic|
|» writing_style|business|
|» writing_style|casual|
|» writing_style|default|
|» writing_style|simple|
|» writing_style|prefer_academic|
|» writing_style|prefer_business|
|» writing_style|prefer_casual|
|» writing_style|prefer_simple|
|» tone|confident|
|» tone|default|
|» tone|diplomatic|
|» tone|enthusiastic|
|» tone|friendly|
|» tone|prefer_confident|
|» tone|prefer_diplomatic|
|» tone|prefer_enthusiastic|
|» tone|prefer_friendly|

> Example responses

> 200 Response

```json
{
  "improvements": [
    {
      "detected_source_language": "en",
      "target_language": "en-US",
      "text": "This is a sample sentence to improve."
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "Unsupported Content-Type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="improve-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful text improvement.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|

<h3 id="improve-text-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|improvements|[object]|false|none|none|
|» detected_source_language|string|false|none|The language detected in the source text.|
|» target_language|string|false|none|The target language specified by the request.|
|» text|string|false|none|The improved text.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-correcttext">CorrectText</h1>

The `correct` endpoint fixes spelling and grammar errors without broader rephrasing. Use it when you want
a minimal-change correction pass rather than the broader rewriting performed by `rephrase`.

## Correct text

<a id="opIdcorrectText"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/write/correct \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "text": [
      "this is a example sentence to imprve"
    ],
    "target_lang": "de"
  }'
```

`POST /v2/write/correct`

Fix spelling and grammar errors in one or more texts. Unlike `/v2/write/rephrase`, this endpoint applies
a minimal-change correction pass and does not rewrite the text for style or tone.

> Body parameter

```json
{
  "text": [
    "this is a example sentence to imprve"
  ],
  "target_lang": "de"
}
```

<h3 id="correct-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» text|body|[string]|true|Text to be corrected. Only UTF-8-encoded plain text is supported. Corrections are returned in the same order as they are requested.|
|» target_lang|body|[TargetLanguageWrite](#schematargetlanguagewrite)|false|The language for the text improvement.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target_lang|de|
|» target_lang|en|
|» target_lang|en-GB|
|» target_lang|en-US|
|» target_lang|es|
|» target_lang|fr|
|» target_lang|it|
|» target_lang|ja|
|» target_lang|ko|
|» target_lang|pt|
|» target_lang|pt-BR|
|» target_lang|pt-PT|
|» target_lang|zh|
|» target_lang|zh-Hans|

> Example responses

> 200 Response

```json
{
  "improvements": [
    {
      "detected_source_language": "en",
      "target_language": "en-US",
      "text": "This is a sample sentence to improve."
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "Unsupported Content-Type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="correct-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful text correction.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|

<h3 id="correct-text-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|improvements|[object]|false|none|none|
|» detected_source_language|string|false|none|The language detected in the source text.|
|» target_language|string|false|none|The target language specified by the request.|
|» text|string|false|none|The corrected text.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-managespokenterms">ManageSpokenTerms</h1>

The *Spoken Terms* functions allow you to create, inspect, edit and delete Spoken Terms collections.
Spoken Terms improve speech recognition in the Voice API: they ensure specific words and phrases,
such as company names, acronyms, and product names, are transcribed correctly. A collection contains
one or more term lists, each holding terms for a single language, and is applied to a voice session
via the `spoken_terms_id` parameter.

## List all Spoken Terms collections

<a id="opIdlistSpokenTerms"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/spoken-terms`

List all Spoken Terms collections and their metadata, but not the actual terms.

> Example responses

> 200 Response

```json
{
  "spoken_terms": [
    {
      "spoken_terms_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
      "name": "Technical Terms",
      "term_lists": [
        {
          "lang": "en",
          "entry_count": 3
        }
      ],
      "creation_time": "2025-08-03T14:16:18.329Z"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-all-spoken-terms-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing all Spoken Terms collections.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-all-spoken-terms-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spoken_terms|[[SpokenTerms](#schemaspokenterms)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create Spoken Terms collection

<a id="opIdcreateSpokenTerms"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "Technical Terms",
    "term_lists": [
      {
        "lang": "en",
        "entries": "DeepL\nAPI\nwebhook"
      }
    ]
  }'
```

`POST /v3/spoken-terms`

Create a new Spoken Terms collection with one or more term lists. Each term list contains terms for a single language. The number of collections per account is limited by your plan.

> Body parameter

```json
{
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entries": "DeepL\nAPI\nwebhook"
    }
  ]
}
```

<h3 id="create-spoken-terms-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSpokenTermsParameters](#schemacreatespokentermsparameters)|true|none|
|» name|body|string|true|Name for the Spoken Terms collection.|
|» term_lists|body|[[SpokenTermsListInput](#schemaspokentermslistinput)]|true|Array of term lists, one per language.|

> Example responses

> 201 Response

```json
{
  "spoken_terms_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entry_count": 3
    }
  ],
  "creation_time": "2025-08-03T14:16:18.329Z"
}
```

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "Unsupported Content-Type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "Spoken Terms quota exhausted"
}
```

<h3 id="create-spoken-terms-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created Spoken Terms collection.|[SpokenTerms](#schemaspokenterms)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Spoken Terms collection limit reached for your plan.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Spoken Terms collection details

<a id="opIdgetSpokenTerms"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/spoken-terms/{spoken_terms_id}`

Retrieve metadata for a Spoken Terms collection, including term list information but not the actual terms.

<h3 id="retrieve-spoken-terms-collection-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|

> Example responses

> 200 Response

```json
{
  "spoken_terms_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entry_count": 3
    }
  ],
  "creation_time": "2025-08-03T14:16:18.329Z"
}
```

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-spoken-terms-collection-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the Spoken Terms metadata.|[SpokenTerms](#schemaspokenterms)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete Spoken Terms collection

<a id="opIddeleteSpokenTerms"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/spoken-terms/{spoken_terms_id}`

Delete the entire Spoken Terms collection.

<h3 id="delete-spoken-terms-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|

> Example responses

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-spoken-terms-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted Spoken Terms collection.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Edit Spoken Terms collection details

<a id="opIdpatchSpokenTerms"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "Updated Technical Terms"
  }'
```

`PATCH /v3/spoken-terms/{spoken_terms_id}`

Update the name of a Spoken Terms collection or merge new entries into an existing term list.

> Body parameter

```json
{
  "name": "Updated Technical Terms"
}
```

<h3 id="edit-spoken-terms-collection-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|
|body|body|[PatchSpokenTermsParameters](#schemapatchspokentermsparameters)|true|none|
|» name|body|string|false|New name for the Spoken Terms collection.|
|» term_lists|body|[[SpokenTermsListInput](#schemaspokentermslistinput)]|false|Term lists to merge with existing lists.|

> Example responses

> 200 Response

```json
{
  "spoken_terms_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entry_count": 3
    }
  ],
  "creation_time": "2025-08-03T14:16:18.329Z"
}
```

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "Unsupported Content-Type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="edit-spoken-terms-collection-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated Spoken Terms collection.|[SpokenTerms](#schemaspokenterms)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Spoken Terms entries

<a id="opIdgetSpokenTermsEntries"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/spoken-terms/string/entries?lang=en' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/spoken-terms/{spoken_terms_id}/entries`

Retrieve the actual terms for a specific language from a Spoken Terms collection.

<h3 id="retrieve-spoken-terms-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|
|lang|query|string|true|The language code (ISO 639-1) for the term list to retrieve.|

> Example responses

> 200 Response

```json
{
  "lang": "en",
  "entries": "DeepL\nAPI\nwebhook"
}
```

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-spoken-terms-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the term list entries.|[SpokenTermsEntries](#schemaspokentermsentries)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Replace or create a term list

<a id="opIdputSpokenTermsList"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/spoken-terms/string/term-lists \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "lang": "en",
    "entries": "DeepL\nAPI\nwebhook\nintegration"
  }'
```

`PUT /v3/spoken-terms/{spoken_terms_id}/term-lists`

Replace an existing term list for a language, or create a new one if it doesn't exist.

> Body parameter

```json
{
  "lang": "en",
  "entries": "DeepL\nAPI\nwebhook\nintegration"
}
```

<h3 id="replace-or-create-a-term-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|
|body|body|[PutSpokenTermsListParameters](#schemaputspokentermslistparameters)|true|none|
|» lang|body|string|true|Language code (ISO 639-1) for this term list.|
|» entries|body|string|true|Newline-separated list of terms, one term per line. Maximum 300 characters total.<br><br>Terms are case-sensitive. Each term must be non-empty, must not contain C0 or C1 control characters (such as tabs or newlines within a term), and must not have leading or trailing whitespace. Duplicate terms within a list are not allowed (comparison is case-sensitive).<br>|

> Example responses

> 200 Response

```json
{
  "lang": "en",
  "entry_count": 3
}
```

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "Unsupported Content-Type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="replace-or-create-a-term-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully replaced or created term list.|[SpokenTermsList](#schemaspokentermslist)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported Media Type. Must be application/json or application/x-www-form-urlencoded.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a term list

<a id="opIddeleteSpokenTermsList"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/spoken-terms/string/term-lists?lang=en' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/spoken-terms/{spoken_terms_id}/term-lists`

Delete a term list for a specific language from the Spoken Terms collection.

<h3 id="delete-a-term-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spoken_terms_id|path|string|true|A unique ID assigned to the Spoken Terms collection.|
|lang|query|string|true|The language code (ISO 639-1) for the term list to delete.|

> Example responses

> 400 Response

```json
{
  "message": "Bad request"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "Forbidden. Authorization failed or feature not available for your plan."
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-term-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted term list.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. Authorization failed or feature not available for your plan.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-managemultilingualglossaries">ManageMultilingualGlossaries</h1>

The *glossary* functions allow you to create, inspect, edit and delete glossaries.
Glossaries created with the glossary function can be used in translate requests by specifying the
`glossary_id` parameter. A glossary contains (several) dictionaries.
A dictionary is a mapping of source phrases to target phrases for a single language pair.
If you encounter issues, please let us know at support@DeepL.com.

Currently you can create glossaries with any of the languages DeepL supports (with the exception of Thai).

The maximum size limit for a glossary is 10 MiB = 10485760 bytes and each source/target text,
as well as the name of the glossary, is limited to 1024 UTF-8 bytes.
A total of 1000 glossaries are allowed per account.

When creating a dictionary with target language `EN`, `PT`, or `ZH`, it's not necessary to specify a variant
(e.g. `EN-US`, `EN-GB`, `PT-PT`, `PT-BR`, or `ZH-HANS`).
Dictionaries with target language `EN` can be used in translations with either English variant.
Similarly `PT`, and `ZH` dictionaries can be used in translations with their corresponding variants.
(When you provide the ID of a glossary to a translation, the appropriate dictionary is automatically applied.)

For text translation, if you omit `source_lang`, DeepL detects the source language and applies the dictionary for the detected language pair. Document translation with a glossary requires `source_lang`.

Glossaries created via the DeepL API are now unified with glossaries created via the DeepL website and DeepL apps.
Please only use the v3 glossary API in conjunction with multilingual or edited glossaries from the website.

## List all Glossaries

<a id="opIdlistMultilingualGlossaries"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/glossaries`

List all glossaries and their meta-information, but not the glossary entries.

> Example responses

> 200 Response

```json
{
  "glossaries": [
    {
      "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
      "name": "My Glossary",
      "dictionaries": [
        {
          "source_lang": "EN",
          "target_lang": "DE",
          "entry_count": 1
        },
        {
          "source_lang": "DE",
          "target_lang": "EN",
          "entry_count": 2
        }
      ],
      "creation_time": "2021-08-03T14:16:18.329Z"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-all-glossaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing a the glossaries.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-all-glossaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|[[MultilingualGlossary](#schemamultilingualglossary)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a Glossary

<a id="opIdcreateMultilingualGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "My Glossary",
    "dictionaries": [
      {
        "source_lang": "en",
        "target_lang": "de",
        "entries": "Hello\tGuten Tag",
        "entries_format": "tsv"
      },
      {
        "source_lang": "de",
        "target_lang": "en",
        "entries": "Guten Tag\tHello",
        "entries_format": "tsv"
      }
    ]
  }'
```

`POST /v3/glossaries`

Create a glossary containing one or more dictionaries, each holding entries for a
single source and target language pair. Use the returned `glossary_id` with the
translation endpoints to apply your own preferred translations.

> Body parameter

```json
{
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entries": "Hello\tGuten Tag",
      "entries_format": "tsv"
    },
    {
      "source_lang": "de",
      "target_lang": "en",
      "entries": "Guten Tag\tHello",
      "entries_format": "tsv"
    }
  ]
}
```

<h3 id="create-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateMultilingualGlossaryParameters](#schemacreatemultilingualglossaryparameters)|true|none|
|» name|body|string|true|Name to be associated with the glossary.|
|» dictionaries|body|[[GlossaryDictionary](#schemaglossarydictionary)]|true|Dictionaries to populate the glossary with.|

> Example responses

> 201 Response

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entry_count": 1
    }
  ],
  "creation_time": "2021-08-03T14:16:18.329Z"
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The function for creating a glossary returns a JSON object containing the ID of the newly created glossary and a boolean flag that indicates if the created glossary can already be used in translate requests.|[MultilingualGlossary](#schemamultilingualglossary)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-a-glossary-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Glossary Details

<a id="opIdgetMultilingualGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/glossaries/{glossary_id}`

Retrieve meta information for a single glossary, omitting the glossary entries.

<h3 id="retrieve-glossary-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|

> Example responses

> 200 Response

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "EN",
      "target_lang": "DE",
      "entry_count": 1
    },
    {
      "source_lang": "DE",
      "target_lang": "EN",
      "entry_count": 2
    }
  ],
  "creation_time": "2021-08-03T14:16:18.429Z"
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-glossary-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the glossary meta-information.|[MultilingualGlossary](#schemamultilingualglossary)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-glossary-details-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a Glossary

<a id="opIddeleteMultilingualGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/glossaries/{glossary_id}`

Deletes the specified glossary.

<h3 id="delete-a-glossary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-glossary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns no content upon success.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-a-glossary-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Edit glossary details

<a id="opIdpatchMultilingualGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "My Glossary",
    "dictionaries": [
      {
        "source_lang": "en",
        "target_lang": "de",
        "entries": "Hello\tGuten Tag",
        "entries_format": "tsv"
      }
    ]
  }'
```

`PATCH /v3/glossaries/{glossary_id}`

Edit glossary details, such as name or a dictionary for a source and target language.

> Body parameter

```json
{
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entries": "Hello\tGuten Tag",
      "entries_format": "tsv"
    }
  ]
}
```

<h3 id="edit-glossary-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|
|body|body|[PatchMultilingualGlossaryParameters](#schemapatchmultilingualglossaryparameters)|true|none|
|» name|body|[GlossaryId](#schemaglossaryid)|false|A unique ID assigned to a glossary.|
|» dictionaries|body|[[GlossaryDictionary](#schemaglossarydictionary)]|false|Dictionaries to edit the glossary with. Currently only supports 0 or 1 dictionaries in the array.|

> Example responses

> 200 Response

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "EN",
      "target_lang": "DE",
      "creation_time": "2021-08-03T14:16:18.329Z",
      "entry_count": 1
    },
    {
      "source_lang": "DE",
      "target_lang": "EN",
      "creation_time": "2021-08-03T14:16:18.429Z",
      "entry_count": 2
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="edit-glossary-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the glossary meta-information.|[MultilingualGlossary](#schemamultilingualglossary)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="edit-glossary-details-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Glossary Entries

<a id="opIdgetMultilingualGlossaryEntries"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/glossaries/string/entries?source_lang=en&target_lang=de' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/glossaries/{glossary_id}/entries`

List the entries of a single glossary in tsv format.

<h3 id="retrieve-glossary-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|
|source_lang|query|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|true|none|
|target_lang|query|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|

> Example responses

> 200 Response

```json
{
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entries": "Hello\tGuten Tag",
      "entries_format": "tsv"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-glossary-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The entries in tsv, wrapped in a JSON object.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-glossary-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dictionaries|[[MultilingualGlossaryEntries](#schemamultilingualglossaryentries)]|false|none|The dictionaries of the glossary, each with its entries in the requested format.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Replaces or creates a dictionary in the glossary with the specified entries.

<a id="opIdreplaceDictionary"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/glossaries/string/dictionaries \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "source_lang": "en",
    "target_lang": "de",
    "entries": "Hello\tGuten Tag",
    "entries_format": "tsv"
  }'
```

`PUT /v3/glossaries/{glossary_id}/dictionaries`

Replace all entries in the dictionary for a source and target language pair, or create
the dictionary if it does not exist yet. Entries not included in the request are removed.

> Body parameter

```json
{
  "source_lang": "en",
  "target_lang": "de",
  "entries": "Hello\tGuten Tag",
  "entries_format": "tsv"
}
```

<h3 id="replaces-or-creates-a-dictionary-in-the-glossary-with-the-specified-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|
|body|body|[MultilingualGlossaryEntries](#schemamultilingualglossaryentries)|false|The dictionary to insert into (or overwrite in) the multilingual glossary.|
|» source_lang|body|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|false|The language in which the source texts in the glossary are specified.|
|» target_lang|body|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|false|The language in which the target texts in the glossary are specified.|
|» entries|body|[GlossaryEntries](#schemaglossaryentries)|false|The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.|
|» entries_format|body|[GlossaryEntriesFormat](#schemaglossaryentriesformat)|false|The format in which the glossary entries are provided. Formats currently available:<br>- `tsv` (default) - tab-separated values<br>- `csv` - comma-separated values<br><br>See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source_lang|ar|
|» source_lang|bg|
|» source_lang|cs|
|» source_lang|da|
|» source_lang|de|
|» source_lang|el|
|» source_lang|en|
|» source_lang|es|
|» source_lang|et|
|» source_lang|fi|
|» source_lang|fr|
|» source_lang|he|
|» source_lang|hu|
|» source_lang|id|
|» source_lang|it|
|» source_lang|ja|
|» source_lang|ko|
|» source_lang|lt|
|» source_lang|lv|
|» source_lang|nb|
|» source_lang|nl|
|» source_lang|pl|
|» source_lang|pt|
|» source_lang|ro|
|» source_lang|ru|
|» source_lang|sk|
|» source_lang|sl|
|» source_lang|sv|
|» source_lang|tr|
|» source_lang|uk|
|» source_lang|vi|
|» source_lang|zh|
|» target_lang|ar|
|» target_lang|bg|
|» target_lang|cs|
|» target_lang|da|
|» target_lang|de|
|» target_lang|el|
|» target_lang|en|
|» target_lang|es|
|» target_lang|et|
|» target_lang|fi|
|» target_lang|fr|
|» target_lang|he|
|» target_lang|hu|
|» target_lang|id|
|» target_lang|it|
|» target_lang|ja|
|» target_lang|ko|
|» target_lang|lt|
|» target_lang|lv|
|» target_lang|nb|
|» target_lang|nl|
|» target_lang|pl|
|» target_lang|pt|
|» target_lang|ro|
|» target_lang|ru|
|» target_lang|sk|
|» target_lang|sl|
|» target_lang|sv|
|» target_lang|tr|
|» target_lang|uk|
|» target_lang|vi|
|» target_lang|zh|
|» entries_format|tsv|
|» entries_format|csv|

> Example responses

> 200 Response

```json
{
  "source_lang": "EN",
  "target_lang": "DE",
  "entry_count": 1
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="replaces-or-creates-a-dictionary-in-the-glossary-with-the-specified-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the dictionary meta-information.|[MultilingualGlossaryEntriesInformation](#schemamultilingualglossaryentriesinformation)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="replaces-or-creates-a-dictionary-in-the-glossary-with-the-specified-entries-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Deletes the dictionary associated with the given language pair with the given glossary ID.

<a id="opIddeleteDictionary"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/glossaries/string/dictionaries?source_lang=en&target_lang=de' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/glossaries/{glossary_id}/dictionaries`

Delete the dictionary for a single source and target language pair from a glossary,
leaving the glossary and its other dictionaries in place.

<h3 id="deletes-the-dictionary-associated-with-the-given-language-pair-with-the-given-glossary-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|
|source_lang|query|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|true|none|
|target_lang|query|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|

> Example responses

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="deletes-the-dictionary-associated-with-the-given-language-pair-with-the-given-glossary-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns no content upon success.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="deletes-the-dictionary-associated-with-the-given-language-pair-with-the-given-glossary-id-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-manageglossaries">ManageGlossaries</h1>

Please note that this is the spec for the (old) v2 glossary endpoint.
We recommend users switch to the newer v3 glossary endpoints, which support editability and multilinguality.

The *glossary* functions allow you to create, inspect, and delete glossaries.
Glossaries created with the glossary function can be used in translate requests by specifying the
`glossary_id` parameter.
If you encounter issues, please let us know at support@DeepL.com.

Currently you can create glossaries with any of the languages DeepL supports (with the exception of Thai).

## List Language Pairs Supported by Glossaries

<a id="opIdlistGlossaryLanguages"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossary-language-pairs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/glossary-language-pairs`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Use `GET /v3/languages?resource=glossary` instead, which returns per-language
availability including source and target roles.

Retrieve the list of language pairs supported by the glossary feature.

> Example responses

> 200 Response

```json
{
  "supported_languages": [
    {
      "source_lang": "de",
      "target_lang": "en"
    },
    {
      "source_lang": "en",
      "target_lang": "de"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-language-pairs-supported-by-glossaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the language pairs in its `supported_languages` property.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. Too many requests were made to the glossary endpoints recently.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-language-pairs-supported-by-glossaries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supported_languages|[object]|false|none|The list of supported languages|
|» source_lang|string|true|none|The language in which the source texts in the glossary are specified.|
|» target_lang|string|true|none|The language in which the target texts in the glossary are specified.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List all Glossaries

<a id="opIdlistGlossaries"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossaries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/glossaries`

List all glossaries and their meta-information, but not the glossary entries.

> Example responses

> 200 Response

```json
{
  "glossaries": [
    {
      "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
      "name": "My Glossary",
      "ready": true,
      "source_lang": "EN",
      "target_lang": "DE",
      "creation_time": "2021-08-03T14:16:18.329Z",
      "entry_count": 1
    }
  ]
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-all-glossaries-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing a the glossaries.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="list-all-glossaries-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossaries|[[MonolingualGlossary](#schemamonolingualglossary)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a Glossary

<a id="opIdcreateGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "My Glossary",
    "source_lang": "en",
    "target_lang": "de",
    "entries": "Hello\tGuten Tag",
    "entries_format": "tsv"
  }'
```

`POST /v2/glossaries`

**For new integrations we recommend `POST /v3/glossaries`**, which supports multiple
language pairs in a single glossary.

Create a glossary for one source and target language pair and return its `glossary_id`.

> Body parameter

```json
{
  "name": "My Glossary",
  "source_lang": "en",
  "target_lang": "de",
  "entries": "Hello\tGuten Tag",
  "entries_format": "tsv"
}
```

<h3 id="create-a-glossary-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateGlossaryParameters](#schemacreateglossaryparameters)|true|none|
|» name|body|string|true|Name to be associated with the glossary.|
|» source_lang|body|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|true|The language in which the source texts in the glossary are specified.|
|» target_lang|body|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|true|The language in which the target texts in the glossary are specified.|
|» entries|body|string|true|The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.|
|» entries_format|body|string|true|The format in which the glossary entries are provided. Formats currently available:<br>- `tsv` (default) - tab-separated values<br>- `csv` - comma-separated values<br><br>See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source_lang|ar|
|» source_lang|bg|
|» source_lang|cs|
|» source_lang|da|
|» source_lang|de|
|» source_lang|el|
|» source_lang|en|
|» source_lang|es|
|» source_lang|et|
|» source_lang|fi|
|» source_lang|fr|
|» source_lang|he|
|» source_lang|hu|
|» source_lang|id|
|» source_lang|it|
|» source_lang|ja|
|» source_lang|ko|
|» source_lang|lt|
|» source_lang|lv|
|» source_lang|nb|
|» source_lang|nl|
|» source_lang|pl|
|» source_lang|pt|
|» source_lang|ro|
|» source_lang|ru|
|» source_lang|sk|
|» source_lang|sl|
|» source_lang|sv|
|» source_lang|tr|
|» source_lang|uk|
|» source_lang|vi|
|» source_lang|zh|
|» target_lang|ar|
|» target_lang|bg|
|» target_lang|cs|
|» target_lang|da|
|» target_lang|de|
|» target_lang|el|
|» target_lang|en|
|» target_lang|es|
|» target_lang|et|
|» target_lang|fi|
|» target_lang|fr|
|» target_lang|he|
|» target_lang|hu|
|» target_lang|id|
|» target_lang|it|
|» target_lang|ja|
|» target_lang|ko|
|» target_lang|lt|
|» target_lang|lv|
|» target_lang|nb|
|» target_lang|nl|
|» target_lang|pl|
|» target_lang|pt|
|» target_lang|ro|
|» target_lang|ru|
|» target_lang|sk|
|» target_lang|sl|
|» target_lang|sv|
|» target_lang|tr|
|» target_lang|uk|
|» target_lang|vi|
|» target_lang|zh|
|» entries_format|tsv|
|» entries_format|csv|

> Example responses

> 201 Response

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "ready": true,
  "name": "My Glossary",
  "source_lang": "en",
  "target_lang": "de",
  "creation_time": "2021-08-03T14:16:18.329Z",
  "entry_count": 1
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-glossary-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The function for creating a glossary returns a JSON object containing the ID of the newly created glossary and a boolean flag that indicates if the created glossary can already be used in translate requests.|[MonolingualGlossary](#schemamonolingualglossary)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="create-a-glossary-1-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Glossary Details

<a id="opIdgetGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossaries/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/glossaries/{glossary_id}`

Retrieve meta information for a single glossary, omitting the glossary entries.

<h3 id="retrieve-glossary-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|

> Example responses

> 200 Response

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "My Glossary",
  "ready": true,
  "source_lang": "EN",
  "target_lang": "DE",
  "creation_time": "2021-08-03T14:16:18.329Z",
  "entry_count": 1
}
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-glossary-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the glossary meta-information.|[MonolingualGlossary](#schemamonolingualglossary)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-glossary-details-1-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a Glossary

<a id="opIddeleteGlossary"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossaries/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v2/glossaries/{glossary_id}`

Deletes the specified glossary.

<h3 id="delete-a-glossary-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|

> Example responses

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-glossary-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns no content upon success.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="delete-a-glossary-1-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Glossary Entries

<a id="opIdgetGlossaryEntries"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/glossaries/string/entries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/glossaries/{glossary_id}/entries`

List the entries of a single glossary in the format specified by the `Accept` header.

<h3 id="retrieve-glossary-entries-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|glossary_id|path|string|true|A unique ID assigned to the glossary.|
|Accept|header|string|false|The requested format of the returned glossary entries. Currently, supports only `text/tab-separated-values`.|

> Example responses

> 200 Response

```text
Hello!	Guten Tag!
```

> 400 Response

```json
{
  "message": "Invalid glossary entries provided",
  "detail": "Key with the index 1 (starting at position 13) duplicates key with the index 0 (starting at position 0)"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 415 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-glossary-entries-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The entries in the requested format.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden. The access to the requested resource is denied, because of insufficient access rights. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|The requested entries format specified in the `Accept` header is not supported.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-glossary-entries-1-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Generic description of the error.|
|detail|string|false|none|More specific description of the error.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-managestyleprofiles">ManageStyleProfiles</h1>

The style profile endpoints allow you to create, inspect, edit and delete style profiles. A style
profile bundles glossaries, style rule lists and translation memories under one ID. Pass its
`style_profile_id` in a translation request instead of the individual customization parameters.

Every component list is optional, and you can link components later with an update. A style
profile can reference at most one style rule list per target language and at most one translation
memory per source language. With `glossary_priority_order_enabled`, the order of the glossary IDs
decides which glossary wins when two of them define the same source term.

Deleting a style profile does not delete the glossaries, style rule lists and translation memories it
links. Deleting one of those components removes it from every style profile that links it.

## List style profiles

<a id="opIdlistStyleProfiles"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_profiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/style_profiles`

Retrieve a list of style profiles available to the authenticated account, newest first.

The list includes style profiles that have been shared with the account.

Requires an API key with the `style_profiles:read` scope.

<h3 id="list-style-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The index of the first page to return. Use with `page_size` to get the next page of style profiles.|
|page_size|query|integer|false|The maximum number of style profiles to return. Values above 100 are reduced to 100.|

> Example responses

> 200 Response

```json
{
  "style_profiles": [
    {
      "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
      "name": "Legal, German",
      "description": "Contract wording for the German market.",
      "industry": "Legal",
      "glossary_ids": [
        "4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81"
      ],
      "style_rule_ids": [
        "bd0a38f3-1831-440b-a8dd-2c702e2325ab"
      ],
      "translation_memory_ids": [
        "a74d88fb-ed2a-4943-a664-a4512398b994"
      ],
      "glossary_priority_order_enabled": true,
      "creation_time": "2026-04-01T16:34:25.223Z",
      "updated_time": "2026-08-06T09:12:44.108Z"
    },
    {
      "style_profile_id": "c58e2a71-90b4-4d6f-a2e3-71d5c8b4f902",
      "name": "Marketing, Japanese",
      "glossary_ids": [],
      "style_rule_ids": [],
      "translation_memory_ids": [],
      "glossary_priority_order_enabled": false,
      "creation_time": "2026-07-14T11:02:09.640Z",
      "updated_time": "2026-07-14T11:02:09.640Z"
    }
  ],
  "total_count": 2
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-style-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of style profiles.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="list-style-profiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|style_profiles|[[StyleProfile](#schemastyleprofile)]|false|none|none|
|total_count|integer|false|none|The total number of style profiles available to the account.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a style profile

<a id="opIdcreateStyleProfile"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "Marketing, Japanese"
  }'
```

`POST /v3/style_profiles`

Create a style profile. Only `name` is required.

If any of the component IDs cannot be used, the request fails and no style profile is created.

Requires an API key with the `style_profiles:write` scope.

> Body parameter

```json
{
  "name": "Marketing, Japanese"
}
```

<h3 id="create-a-style-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Name for the style profile. At most 255 characters. An empty name is rejected with<br>`400 Bad Request`.|
|» description|body|string|false|Free-text description of the style profile. At most 1000 characters. Omit it to create<br>the style profile without a description.|
|» industry|body|string|false|The industry the style profile is written for. At most 255 characters. Omit it to create<br>the style profile without an industry.|
|» glossary_ids|body|[string(uuid)]|false|The IDs of the glossaries to link, highest priority first. The order only takes effect<br>with `glossary_priority_order_enabled`. Defaults to an empty list.|
|» style_rule_ids|body|[string(uuid)]|false|The IDs of the style rule lists to link. At most one style rule list per target<br>language. Defaults to an empty list.|
|» translation_memory_ids|body|[string(uuid)]|false|The IDs of the translation memories to link. At most one translation memory per source<br>language. Defaults to an empty list.|
|» glossary_priority_order_enabled|body|boolean|false|Whether the order of `glossary_ids` sets priority: when two linked glossaries define the<br>same source term, the one listed first wins. When `false`, the order has no effect.<br>Defaults to `false`.|

> Example responses

> 201 Response

```json
{
  "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
  "name": "Legal, German",
  "description": "Contract wording for the German market.",
  "industry": "Legal",
  "glossary_ids": [
    "4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81"
  ],
  "style_rule_ids": [
    "bd0a38f3-1831-440b-a8dd-2c702e2325ab"
  ],
  "translation_memory_ids": [
    "a74d88fb-ed2a-4943-a664-a4512398b994"
  ],
  "glossary_priority_order_enabled": true,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-04-01T16:34:25.223Z"
}
```

> 400 Response

```json
{
  "message": "Bad request. Reason: One or more glossary ids do not exist or are not accessible. Check 'glossary_ids'."
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "Quota exceeded"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-style-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the created style profile.|[StyleProfile](#schemastyleprofile)|
|400|Bad Request|The request was rejected and no style profile was created. This is returned for a malformed<br>request body, for a missing or empty `name`, for a value that is longer than the field allows,<br>and for a component ID that is not a valid UUID or that names a component your account cannot<br>access. The message names the list that contains the bad ID.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.<br>This error is also returned when the API key is scoped but does not include the<br>`style_profiles:write` scope, and when your plan does not include creating style profiles.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|You have reached the maximum number of style profiles for your account. Delete a style profile<br>before creating another one.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="create-a-style-profile-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve a style profile

<a id="opIdgetStyleProfile"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_profiles/3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/style_profiles/{style_profile_id}`

Retrieve a single style profile by its ID, including the components it links and its timestamps.

Requires an API key with the `style_profiles:read` scope.

<h3 id="retrieve-a-style-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_profile_id|path|[StyleProfileId](#schemastyleprofileid)|true|The ID of the style profile to retrieve.|

> Example responses

> 200 Response

```json
{
  "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
  "name": "Legal, German",
  "description": "Contract wording for the German market.",
  "industry": "Legal",
  "glossary_ids": [
    "4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81"
  ],
  "style_rule_ids": [
    "bd0a38f3-1831-440b-a8dd-2c702e2325ab"
  ],
  "translation_memory_ids": [
    "a74d88fb-ed2a-4943-a664-a4512398b994"
  ],
  "glossary_priority_order_enabled": true,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-08-06T09:12:44.108Z"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-a-style-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the style profile.|[StyleProfile](#schemastyleprofile)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The style profile could not be found. This is also returned for a style profile your account<br>cannot access.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-a-style-profile-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a style profile

<a id="opIddeleteStyleProfile"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_profiles/3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/style_profiles/{style_profile_id}`

Delete a style profile. Only the account that owns a style profile can delete it. A style profile
that was shared with your account returns `404 Not Found`.

The glossaries, style rule lists and translation memories the style profile links are not deleted.
Translation requests that pass the deleted `style_profile_id` fail after this call, so update your
integration before deleting.

Requires an API key with the `style_profiles:write` scope.

<h3 id="delete-a-style-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_profile_id|path|[StyleProfileId](#schemastyleprofileid)|true|The ID of the style profile to delete.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-style-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The style profile was deleted. The response has no body.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The style profile could not be found. This is also returned for a style profile that was<br>shared with your account, because only the owner can delete it.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="delete-a-style-profile-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update a style profile

<a id="opIdupdateStyleProfile"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_profiles/3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "Legal, German (2026)"
  }'
```

`PATCH /v3/style_profiles/{style_profile_id}`

Update a style profile you own or that was shared with you for editing. Fields you leave out of the
request body are not changed.

A component list you send replaces the linked list in full. To add a glossary to a style profile
that already links two, send all three IDs. To unlink all components in a list, send an empty
list.

Requires an API key with the `style_profiles:write` scope.

> Body parameter

```json
{
  "name": "Legal, German (2026)"
}
```

<h3 id="update-a-style-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_profile_id|path|[StyleProfileId](#schemastyleprofileid)|true|The ID of the style profile to update.|
|body|body|object|true|none|
|» name|body|string|false|A new name for the style profile. At most 255 characters. An empty string is rejected<br>with `400 Bad Request`.|
|» description|body|string|false|A new description for the style profile. At most 1000 characters. Send an empty string<br>to clear it.|
|» industry|body|string|false|A new industry for the style profile. At most 255 characters. Send an empty string to<br>clear it.|
|» glossary_ids|body|[string(uuid)]|false|The IDs of the glossaries to link, highest priority first. The order only takes effect<br>with `glossary_priority_order_enabled`. Replaces the linked glossaries in full. Send an<br>empty list to unlink all of them.|
|» style_rule_ids|body|[string(uuid)]|false|The IDs of the style rule lists to link. At most one style rule list per target<br>language. Replaces the linked style rule lists in full. Send an empty list to unlink<br>all of them.|
|» translation_memory_ids|body|[string(uuid)]|false|The IDs of the translation memories to link. At most one translation memory per source<br>language. Replaces the linked translation memories in full. Send an empty list to<br>unlink all of them.|
|» glossary_priority_order_enabled|body|boolean|false|Whether the order of `glossary_ids` sets priority: when two linked glossaries define the<br>same source term, the one listed first wins. When `false`, the order has no effect.|

> Example responses

> 200 Response

```json
{
  "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
  "name": "Legal, German (2026)",
  "description": "Contract wording for the German market.",
  "industry": "Legal",
  "glossary_ids": [
    "4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81",
    "7b2f6d84-3c15-4e90-8a72-d5e1490bc637"
  ],
  "style_rule_ids": [
    "bd0a38f3-1831-440b-a8dd-2c702e2325ab"
  ],
  "translation_memory_ids": [
    "a74d88fb-ed2a-4943-a664-a4512398b994"
  ],
  "glossary_priority_order_enabled": true,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-08-20T13:47:51.902Z"
}
```

> 400 Response

```json
{
  "message": "Bad request. Reason: One or more translation memory ids do not exist or are not accessible. Check 'translation_memory_ids'."
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="update-a-style-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated style profile.|[StyleProfile](#schemastyleprofile)|
|400|Bad Request|The request was rejected and the style profile was not changed. This is returned for a<br>malformed request body, for an empty `name`, for a value that is longer than the field allows,<br>and for a component ID that is not a valid UUID or that names a component your account cannot<br>access. The message names the list that contains the bad ID.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The style profile could not be found. This is also returned for a style profile your account<br>can view but not edit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="update-a-style-profile-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-metainformation">MetaInformation</h1>

Information about API usage and value ranges

## Check Usage and Limits

<a id="opIdgetUsage"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/usage \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/usage`

Retrieve character and minute usage for the current billing period together with the
corresponding account limits. Poll this endpoint to track consumption and detect when
an account is approaching its quota.

> Example responses

> 200 Response

```json
{
  "character_count": 180118,
  "character_limit": 1250000
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="check-usage-and-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The account's usage and limits.|[UsageResponse](#schemausageresponse)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="check-usage-and-limits-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Supported Languages

<a id="opIdgetLanguagesV2"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/languages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/languages`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Use `GET /v3/languages?resource=translate_text` (or the appropriate resource)
instead. See the [migration guide](https://developers.deepl.com/docs/languages/migrating-from-v2-languages)
for details.

<h3 id="retrieve-supported-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Supported values are "source" or "target". If type parameter is not included, defaults to "source".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|source|
|type|target|

> Example responses

> 200 Response

```json
[
  {
    "language": "AR",
    "name": "Arabic"
  },
  {
    "language": "BG",
    "name": "Bulgarian"
  },
  {
    "language": "CS",
    "name": "Czech"
  },
  {
    "language": "DA",
    "name": "Danish"
  },
  {
    "language": "DE",
    "name": "German"
  },
  {
    "language": "EL",
    "name": "Greek"
  },
  {
    "language": "EN",
    "name": "English"
  },
  {
    "language": "ES",
    "name": "Spanish"
  },
  {
    "language": "ET",
    "name": "Estonian"
  },
  {
    "language": "FI",
    "name": "Finnish"
  },
  {
    "language": "FR",
    "name": "French"
  },
  {
    "language": "HE",
    "name": "Hebrew"
  },
  {
    "language": "HU",
    "name": "Hungarian"
  },
  {
    "language": "ID",
    "name": "Indonesian"
  },
  {
    "language": "IT",
    "name": "Italian"
  },
  {
    "language": "JA",
    "name": "Japanese"
  },
  {
    "language": "KO",
    "name": "Korean"
  },
  {
    "language": "LT",
    "name": "Lithuanian"
  },
  {
    "language": "LV",
    "name": "Latvian"
  },
  {
    "language": "NB",
    "name": "Norwegian"
  },
  {
    "language": "NL",
    "name": "Dutch"
  },
  {
    "language": "PL",
    "name": "Polish"
  },
  {
    "language": "PT",
    "name": "Portuguese"
  },
  {
    "language": "RO",
    "name": "Romanian"
  },
  {
    "language": "RU",
    "name": "Russian"
  },
  {
    "language": "SK",
    "name": "Slovak"
  },
  {
    "language": "SL",
    "name": "Slovenian"
  },
  {
    "language": "SV",
    "name": "Swedish"
  },
  {
    "language": "TH",
    "name": "Thai"
  },
  {
    "language": "TR",
    "name": "Turkish"
  },
  {
    "language": "UK",
    "name": "Ukrainian"
  },
  {
    "language": "VI",
    "name": "Vietnamese"
  },
  {
    "language": "ZH",
    "name": "Chinese"
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 413 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 504 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 529 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-supported-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON array where each item represents a supported language.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|The request size exceeds the limit.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|504|Gateway Timeout|Resource currently unavailable. Try again later.|Inline|
|529|529|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="retrieve-supported-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» language|string|true|none|The language code of the given language.|
|» name|string|true|none|Name of the language in English.|
|» supports_formality|boolean|false|none|Denotes formality support in case of a target language listing.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **504**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Language Resources

<a id="opIdgetLanguageResources"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/languages/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/languages/resources`

Returns all DeepL API resources and the features they support.

For each feature, the response indicates which languages must support it for the feature to be
available — source only (`needs_source_support`), target only (`needs_target_support`), or both.
This allows clients to determine feature availability for a language pair by checking the
appropriate language's `features` object returned by `GET /v3/languages`.

> Example responses

> 200 Response

```json
[
  {
    "name": "translate_text",
    "features": [
      {
        "name": "formality",
        "needs_target_support": true
      },
      {
        "name": "style_rules",
        "needs_target_support": true
      },
      {
        "name": "tag_handling",
        "needs_source_support": true,
        "needs_target_support": true
      },
      {
        "name": "glossary",
        "needs_source_support": true,
        "needs_target_support": true
      },
      {
        "name": "auto_detection",
        "needs_source_support": true
      }
    ]
  },
  {
    "name": "voice",
    "features": [
      {
        "name": "glossary",
        "needs_source_support": true,
        "needs_target_support": true
      }
    ]
  },
  {
    "name": "style_rules",
    "features": []
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-language-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON array where each item represents a DeepL API product.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-language-resources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» name|string|true|none|The resource identifier.|
|» features|[object]|true|none|Features supported by this resource. Each feature indicates which languages<br>must support it for the feature to be available — source, target, or both.|
|» » name|string|true|none|The feature identifier, corresponding to keys in the `features` object returned by `GET /v3/languages`.|
|» » needs_source_support|boolean|false|none|If `true`, the source language must support this feature for it to be available. Defaults to `false` if absent.|
|» » needs_target_support|boolean|false|none|If `true`, the target language must support this feature for it to be available. Defaults to `false` if absent.|

#### Enumerated Values

|Property|Value|
|---|---|
|» name|translate_text|
|» name|translate_document|
|» name|glossary|
|» name|voice|
|» name|write|
|» name|style_rules|
|» name|translation_memory|
|» » name|formality|
|» » name|style_rules|
|» » name|tag_handling|
|» » name|glossary|
|» » name|writing_style|
|» » name|tone|
|» » name|auto_detection|
|» » name|transcription|
|» » name|translated_speech|
|» » name|spoken_terms|
|» » name|translation_memory|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve Languages

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/languages?resource=translate_text' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/languages`

Returns languages supported by the specified DeepL API resource. Each language indicates whether it can
be used as a source language, a target language, or both, along with the features it supports for that
resource.

<h3 id="retrieve-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|query|string|true|The resource to retrieve languages for. Supported values: `translate_text`, `translate_document`,<br>`glossary`, `voice`, `write`, `style_rules`, `translation_memory`.|
|include|query|[string]|false|Controls which languages and features are included in the response. By default, only stable<br>languages and features are returned. Values can be combined with repeated parameters<br>(e.g. `?include=beta&include=external`).<br><br>- `beta`: Include languages and features in beta, in addition to stable<br>- `external`: Include features that rely on third-party service providers|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource|translate_text|
|resource|translate_document|
|resource|glossary|
|resource|voice|
|resource|write|
|resource|style_rules|
|resource|translation_memory|
|include|beta|
|include|external|

> Example responses

> 200 Response

```json
[
  {
    "lang": "de",
    "name": "German",
    "usable_as_source": true,
    "usable_as_target": true,
    "status": "stable",
    "features": {
      "formality": {
        "status": "stable"
      },
      "tag_handling": {
        "status": "stable"
      },
      "glossary": {
        "status": "stable"
      }
    }
  },
  {
    "lang": "en",
    "name": "English",
    "usable_as_source": true,
    "usable_as_target": false,
    "status": "stable",
    "features": {
      "tag_handling": {
        "status": "stable"
      },
      "glossary": {
        "status": "stable"
      }
    }
  },
  {
    "lang": "en-US",
    "name": "English (American)",
    "usable_as_source": false,
    "usable_as_target": true,
    "status": "stable",
    "features": {
      "tag_handling": {
        "status": "stable"
      },
      "glossary": {
        "status": "stable"
      }
    }
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON array where each item represents a supported language.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» lang|string|true|none|The language code (BCP 47).|
|» name|string|true|none|Name of the language in English.|
|» usable_as_source|boolean|true|none|Whether this language can be used as a source language with the specified resource.|
|» usable_as_target|boolean|true|none|Whether this language can be used as a target language with the specified resource.|
|» status|string|true|none|Availability status of this language.|
|» features|object|true|none|Features supported for this language with the specified resource. Always present;<br>empty object if no optional features are supported. Each key is a feature name;<br>the value is an object with at least a `status` field. Consult `GET /v3/languages/resources`<br>to determine whether a feature must be present on the source language, target language,<br>or both for a given resource.|
|» » **additionalProperties**|object|false|none|none|
|» » » status|string|true|none|Availability status of this feature for this language.|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|stable|
|» status|beta|
|» status|early_access|
|» » » status|stable|
|» » » status|beta|
|» » » status|early_access|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-translationmemories">TranslationMemories</h1>

The translation memory endpoints allow you to manage your account's translation memories, used to store
and reuse previously created translations. You can list and retrieve translation memories, page through
their stored segments, create one by importing a TMX file, export one back to TMX, and delete one.
Editing the contents of an existing translation memory is not supported; import a new one instead.

Importing and exporting run as background jobs. Create the job, then poll
`GET /v3/translation_memories/jobs/{job_id}` until it reports `completed`.

Translation memories can be used in text translation requests by
specifying the `translation_memory_id` parameter to denote a specific translation memory and the
`translation_memory_threshold` which defines the minimum matching percentage required for a translation memory
segment to be applied (recommended to be 75% or higher). A translation request fails with `404` if the
translation memory does not exist or does not cover the requested language pair.

## List translation memories

<a id="opIdlistTranslationMemories"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/translation_memories`

Retrieve a list of translation memories associated with the authenticated account.

<h3 id="list-translation-memories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The index of the first page to return. Use with `page_size` to get the next page of translation memories.|
|page_size|query|integer|false|The maximum number of translation memories to return. Values above 100 are reduced to 100.|

> Example responses

> 200 Response

```json
{
  "translation_memories": [
    {
      "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
      "name": "Legal",
      "source_language": "en",
      "target_languages": [
        "es",
        "de"
      ],
      "segment_count": 3542
    },
    {
      "translation_memory_id": "855d36ab-6112-4ef5-8868-0d69bc4d826a",
      "name": "Medical terms",
      "source_language": "de",
      "target_languages": [
        "fr",
        "ja",
        "zh"
      ],
      "segment_count": 23
    }
  ],
  "total_count": 2
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-translation-memories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of translation memories.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="list-translation-memories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation_memories|[[TranslationMemory](#schematranslationmemory)]|false|none|none|
|total_count|integer|false|none|The total number of translation memories available.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Import a translation memory

<a id="opIdcreateTranslationMemoryImport"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "source_file": {
      "file_name": "legal.tmx",
      "content_type": "application/xml",
      "content_length": 1024
    },
    "parameters": {
      "display_name": "Legal"
    }
  }'
```

`POST /v3/translation_memories/import`

Create a translation memory by importing a TMX file.

This endpoint does not accept the file itself. It returns a short-lived `upload_url`, and you
upload the TMX file to that URL with a separate `PUT` request. Processing starts automatically
once the upload completes, so there is no third call to confirm it.

1. `POST /v3/translation_memories/import` with the file's name and size. The response returns a
   `job_id`, an `upload_url`, and the `expires_at` time after which the URL stops working.
2. `PUT` the TMX file to `upload_url`. Do not send your `Authorization` header on this request,
   because the URL is already signed.
3. Poll [Retrieve an import or export job](/api-reference/translation-memory/retrieve-a-translation-memory-job)
   until the status is `completed`. The new `translation_memory_id` is on the job result.

Requires an API key with the `translation_memories:write` scope.

> Body parameter

```json
{
  "source_file": {
    "file_name": "legal.tmx",
    "content_type": "application/xml",
    "content_length": 1024
  },
  "parameters": {
    "display_name": "Legal"
  }
}
```

<h3 id="import-a-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» source_file|body|object|true|none|
|» » file_name|body|string|true|The name of the TMX file you intend to upload, including its extension. At most 100<br>characters.|
|» » content_type|body|string|false|The MIME type of the file. Defaults to `application/xml`, which is correct for TMX.<br>TMX is currently the only supported import format. At most 127 characters.|
|» » content_length|body|integer(int64)|true|The size of the file in bytes. Must be greater than 0 and at most 1 GB. An oversize<br>value is rejected with `400 Bad Request`.|
|» parameters|body|object|false|none|
|» » display_name|body|string|false|The name to give the new translation memory. If you omit this, the translation memory<br>is created without a name.|

> Example responses

> 202 Response

```json
{
  "job_id": "0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40",
  "upload_url": "https://assets.deepl.com/upload/0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40",
  "expires_at": "2026-08-06T15:34:25.223Z"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="import-a-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The import job was created. Upload the file to `upload_url` before `expires_at`.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|You have reached the maximum number of translation memories for your account. Delete a<br>translation memory before creating another one.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="import-a-translation-memory-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|true|none|The identifier of the import job. Use it to poll the job's status.|
|upload_url|string(uri)|true|none|A signed URL to `PUT` the TMX file to. Do not send your `Authorization` header with the<br>upload request.|
|expires_at|string(date-time)|true|none|The time the `upload_url` stops accepting uploads, in the ISO 8601-1:2019 format. After<br>this time, create a new import job.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve an import or export job

<a id="opIdgetTranslationMemoryJob"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/jobs/0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/translation_memories/jobs/{job_id}`

Retrieve the status of a translation memory import or export job.

Poll this endpoint after creating a job. The `operation` field tells you which kind of job it is,
and the single entry in `results` carries the status and, once the job finishes, its output: the
new `translation_memory_id` for an import, or a `download_url` for an export.

Requires an API key with the `translation_memories:read` scope.

<h3 id="retrieve-an-import-or-export-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|The identifier of the job, returned when you created the import or export.|

> Example responses

> 200 Response

```json
{
  "job_id": "0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40",
  "product": "translation_memory",
  "operation": "import",
  "creation_time": "2026-08-06T15:04:25.223Z",
  "updated_time": "2026-08-06T15:04:25.223Z",
  "source_file": {
    "content_type": "application/xml",
    "content_length": 1024
  },
  "parameters": {
    "display_name": "Legal"
  },
  "results": [
    {
      "status": "awaiting_input",
      "status_metadata": {
        "required_action": "Waiting for upload"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-an-import-or-export-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the current state of the job.|[TranslationMemoryJob](#schematranslationmemoryjob)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The job could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-an-import-or-export-job-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Retrieve a translation memory

<a id="opIdgetTranslationMemory"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/a74d88fb-ed2a-4943-a664-a4512398b994 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/translation_memories/{translation_memory_id}`

Retrieve a single translation memory by its ID, including its languages and segment count.

To read the stored segments themselves, use
[List translation memory segments](/api-reference/translation-memory/list-translation-memory-segments).

Requires an API key with the `translation_memories:read` scope.

<h3 id="retrieve-a-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|translation_memory_id|path|[TranslationMemoryId](#schematranslationmemoryid)|true|The ID of the translation memory to retrieve.|

> Example responses

> 200 Response

```json
{
  "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "name": "Legal",
  "source_language": "en",
  "target_languages": [
    "es",
    "de"
  ],
  "segment_count": 3542,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-08-06T09:12:44.108Z"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-a-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the translation memory.|[TranslationMemory](#schematranslationmemory)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The translation memory could not be found. This is also returned for a translation memory that<br>belongs to another account.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-a-translation-memory-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a translation memory

<a id="opIddeleteTranslationMemory"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/a74d88fb-ed2a-4943-a664-a4512398b994 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/translation_memories/{translation_memory_id}`

Delete a translation memory and all of its segments.

Deletion is permanent and cannot be undone. Export the translation memory first if you need a
copy of its contents. Translation requests that pass the deleted `translation_memory_id` fail
after this call, so update your integration before deleting.

Requires an API key with the `translation_memories:write` scope.

<h3 id="delete-a-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|translation_memory_id|path|[TranslationMemoryId](#schematranslationmemoryid)|true|The ID of the translation memory to delete.|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The translation memory was deleted. The response has no body.|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The translation memory could not be found. This is also returned for a translation memory that<br>belongs to another account.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="delete-a-translation-memory-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List translation memory segments

<a id="opIdgetTranslationMemorySegments"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/a74d88fb-ed2a-4943-a664-a4512398b994/segments \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/translation_memories/{translation_memory_id}/segments`

List the segments stored in a translation memory, one page at a time. Each entry is a source
segment with its translations in every target language.

This endpoint uses cursor-based pagination rather than the numbered pages used by
[List translation memories](/api-reference/translation-memory/list-translation-memories). Omit
`page_cursor` on your first call, then pass the `next_page_cursor` from each response to get the
following page. When a response has no `next_page_cursor`, you have reached the last page.

Requires an API key with the `translation_memories:read` scope.

<h3 id="list-translation-memory-segments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|translation_memory_id|path|[TranslationMemoryId](#schematranslationmemoryid)|true|The ID of the translation memory whose segments you want to list.|
|page_size|query|integer|false|The maximum number of segments to return per page. Values above 100 are reduced to 100.|
|page_cursor|query|string|false|The `next_page_cursor` from a previous response. Omit this on your first call. Treat the value<br>as opaque: do not build or modify it yourself.|
|filter_text|query|string|false|Return only segments where this text appears in the source or in any target translation. Must be<br>at least 2 characters.|
|filter_case_sensitive|query|boolean|false|Whether `filter_text` is matched case-sensitively.|

> Example responses

> 200 Response

```json
{
  "segments": [
    {
      "source_segment_id": "4f1c2d3e-8a9b-4c5d-9e6f-7a8b9c0d1e2f",
      "source_text": "This agreement is governed by the laws of Germany.",
      "creation_time": "2026-04-01T16:34:25.223Z",
      "updated_time": "2026-04-01T16:34:25.223Z",
      "last_used_time": "2026-08-05T11:02:18.771Z",
      "targets": [
        {
          "target_segment_id": "9b8a7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d",
          "target_language": "de",
          "target_text": "Dieser Vertrag unterliegt dem Recht der Bundesrepublik Deutschland.",
          "creation_time": "2026-04-01T16:34:25.223Z",
          "updated_time": "2026-04-01T16:34:25.223Z",
          "last_used_time": "2026-08-05T11:02:18.771Z"
        },
        {
          "target_segment_id": "2c3d4e5f-6a7b-4c8d-9e0f-1a2b3c4d5e6f",
          "target_language": "es",
          "target_text": "Este contrato se rige por las leyes de Alemania.",
          "creation_time": "2026-04-01T16:34:25.223Z",
          "updated_time": "2026-04-01T16:34:25.223Z",
          "last_used_time": "2026-07-22T08:41:05.330Z"
        }
      ]
    }
  ],
  "segment_count": 3542,
  "next_page_cursor": "eyJvZmZzZXQiOjUwfQ"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="list-translation-memory-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a page of segments.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The translation memory could not be found. This is also returned for a translation memory that<br>belongs to another account.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="list-translation-memory-segments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[TranslationMemorySegment](#schematranslationmemorysegment)]|true|none|The segments on this page.|
|segment_count|integer|true|none|The total number of segments in the translation memory. This is not reduced by<br>`filter_text`, so a filtered request still reports the full count. Do not use it to<br>predict how many results a filtered query returns.|
|next_page_cursor|string|false|none|The cursor to pass as `page_cursor` to retrieve the next page. Absent on the last page.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Export a translation memory

<a id="opIdcreateTranslationMemoryExport"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/translation_memories/a74d88fb-ed2a-4943-a664-a4512398b994/export \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /v3/translation_memories/{translation_memory_id}/export`

Export a translation memory as a TMX file.

The export runs as a background job. Poll
[Retrieve an import or export job](/api-reference/translation-memory/retrieve-a-translation-memory-job)
until the status is `completed`, then download the file from the `download_url` on the job result.
That URL is short-lived, so download the file rather than storing the link.

If a recent export of the same translation memory is still available, DeepL reuses it and returns
`200 OK` with that job instead of starting a new one. Handle both `200` and `202` as success. If a
different export of the same translation memory is still running, the request returns
`409 Conflict`.

Requires an API key with the `translation_memories:read` scope.

<h3 id="export-a-translation-memory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|translation_memory_id|path|[TranslationMemoryId](#schematranslationmemoryid)|true|The ID of the translation memory to export.|

> Example responses

> 200 Response

```json
{
  "job_id": "7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13",
  "parameters": {
    "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994"
  }
}
```

> 202 Response

```json
{
  "job_id": "7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13",
  "parameters": {
    "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994"
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 409 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="export-a-translation-memory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An existing export was reused. Poll the returned `job_id` for the download URL.|[CreateTranslationMemoryExport](#schemacreatetranslationmemoryexport)|
|202|Accepted|The export job was created. Poll the returned `job_id` for the download URL.|[CreateTranslationMemoryExport](#schemacreatetranslationmemoryexport)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The translation memory could not be found. This is also returned for a translation memory that<br>belongs to another account.|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|An export of this translation memory is already in progress. Poll that job instead of starting<br>another export.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="export-a-translation-memory-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|
|202|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-voiceapi">VoiceAPI</h1>

The Voice API provides real-time voice transcription and translation services.
Use a two-step flow: first request a streaming URL via REST, then establish a WebSocket connection for streaming audio and receiving transcriptions.

## Request Reconnection

<a id="opIdrequestReconnection"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v3/voice/realtime?token=VGhpcyBpcyBhIGZha2UgdG9rZW4K' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/voice/realtime`

Exchange a session token for a fresh WebSocket URL and token so a client can rejoin a
voice session after the connection drops. Session options are carried over from the
original session.

<h3 id="request-reconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The latest ephemeral token obtained for the stream.|

> Example responses

> 200 Response

```json
{
  "streaming_url": "wss://api.deepl.com/v3/voice/realtime/connect",
  "token": "VGhpcyBpcyBhIGZha2UgdG9rZW4K",
  "session_id": "4f911080-cfe2-41d4-8269-0e6ec15a0354"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="request-reconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully obtained streaming URL and reconnection token.|[VoiceStreamingResponse](#schemavoicestreamingresponse)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="request-reconnection-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get Streaming URL

<a id="opIdgetVoiceStreamingUrl"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/voice/realtime \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "source_media_content_type": "audio/ogg; codecs=opus",
    "source_language": "en",
    "source_language_mode": "auto",
    "target_languages": [
      "de",
      "fr",
      "es"
    ],
    "message_format": "json"
  }'
```

`POST /v3/voice/realtime`

Create a real-time voice session and return the WebSocket URL and ephemeral token used
to stream audio. Session options such as languages, message format, and media types are
fixed at creation time. Invalid options are rejected with HTTP 400 before a session is
created.

> Body parameter

```json
{
  "source_media_content_type": "audio/ogg; codecs=opus",
  "source_language": "en",
  "source_language_mode": "auto",
  "target_languages": [
    "de",
    "fr",
    "es"
  ],
  "message_format": "json"
}
```

<h3 id="get-streaming-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-DeepL-Reporting-Tag|header|string|false|An optional custom reporting tag used to attribute this request's usage to a team, project, customer, or other category of your choosing. Values are limited to 100 characters. See [How to use custom reporting tags](/docs/learning-how-tos/examples-and-guides/how-to-use-custom-reporting-tags) for validation rules, naming guidance, and how to retrieve usage by tag.<br>|
|body|body|object|true|none|
|» message_format|body|[VoiceMessageFormat](#schemavoicemessageformat)|false|Message encoding format for WebSocket communication. Determines how messages are serialized and transmitted.<br>Using `json`,  messages are JSON-encoded and sent as TEXT WebSocket frames. All binary fields (such as audio data) are base64-encoded strings.<br>Using `msgpack`, messages are MessagePack-encoded and sent as BINARY WebSocket frames. All binary fields (such as audio data) contain raw binary data.<br><br>For more details, see [Message Encoding](/docs/voice/message-encoding).|
|» source_media_content_type|body|[VoiceSourceMediaContentType](#schemavoicesourcemediacontenttype)|true| The audio format for streaming, which specifies container, codec, and encoding parameters. See the table below for supported formats. If `audio/auto` is specified, the server will auto-detect the container and codec for all supported combinations, except PCM. That requires explicit encoding parameters. All formats need to be single channel audio.<br> <br> \| Content Type                          \| Container                                         \| Codec                                     \|<br> \| :------------------------------------ \| :------------------------------------------------ \| :---------------------------------------- \|<br> \| `audio/auto`                          \| Auto-detect: FLAC / Matroska / MPEG / Ogg / WebM  \| Auto-detect AAC / FLAC / MP3 / OPUS       \|<br> \| `audio/flac`                          \| FLAC (flac)                                       \| FLAC                                      \|<br> \| `audio/mpeg`                          \| MPEG (mp3/m4a)                                    \| MP3                                       \|<br> \| `audio/ogg`                           \| Ogg (ogg/oga)                                     \| Auto-detect FLAC / OPUS                   \|<br> \| `audio/webm`                          \| WebM (webm)                                       \| OPUS                                      \|<br> \| `audio/x-matroska`                    \| Matroska (mkv/mka)                                \| Auto-detect: AAC / FLAC / MP3 / OPUS      \|<br> \| `audio/ogg;codecs=flac`               \| Ogg (ogg/oga)                                     \| FLAC                                      \|<br> \| `audio/ogg;codecs=opus`               \| Ogg (ogg/oga)                                     \| OPUS                                      \|<br> \| `audio/pcm;encoding=alaw;rate=8000`   \| -                                                 \| PCM A-Law 8000 Hz (G.711)                 \|<br> \| `audio/pcm;encoding=ulaw;rate=8000`   \| -                                                 \| PCM µ-Law 8000 Hz (G.711)                 \|<br> \| `audio/pcm;encoding=s16le;rate=8000`  \| -                                                 \| PCM signed 16-bit little-endian 8000 Hz   \|<br> \| `audio/pcm;encoding=s16le;rate=16000` \| -                                                 \| PCM signed 16-bit little-endian 16000 Hz  \|<br> \| `audio/pcm;encoding=s16le;rate=44100` \| -                                                 \| PCM signed 16-bit little-endian 44100 Hz  \|<br> \| `audio/pcm;encoding=s16le;rate=48000` \| -                                                 \| PCM signed 16-bit little-endian 48000 Hz  \|<br> \| `audio/webm;codecs=opus`              \| WebM (webm)                                       \| OPUS                                      \|<br> \| `audio/x-matroska;codecs=aac`         \| Matroska (mkv/mka)                                \| AAC                                       \|<br> \| `audio/x-matroska;codecs=flac`        \| Matroska (mkv/mka)                                \| FLAC                                      \|<br> \| `audio/x-matroska;codecs=mp3`         \| Matroska (mkv/mka)                                \| MP3                                       \|<br> \| `audio/x-matroska;codecs=opus`        \| Matroska (mkv/mka)                                \| OPUS                                      \|<br> <br><br>We recommend the following bitrates as good tradeoff between quality and bandwidth:<br> - AAC: 96 kbps<br> - FLAC: 256 kbps  (16000 Hz)<br> - MP3: 128 kbps<br> - OPUS: 32 kbps (recommendation for low bandwidth scenarios)<br> - PCM: 256 kbps (16000 Hz, default recommendation)<br> |
|» source_language|body|[VoiceSourceLanguage](#schemavoicesourcelanguage)|false|The source language of the audio stream. It can be left empty or must be one of the supported Voice API source languages and comply with IETF BCP 47 language tags.<br>Note: Some source transcription languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.<br>|
|» source_language_mode|body|[VoiceSourceLanguageMode](#schemavoicesourcelanguagemode)|false|Controls how the source_language value is used.<br>- `auto`: Treats source language as a hint; server can override<br>- `fixed`: Treats source language as mandatory; server must use this language|
|» target_languages|body|[VoiceTargetLanguages](#schemavoicetargetlanguages)|false|List of target languages for translation. The stream will emit translations for each language. Language identifiers must comply with IETF BCP 47. See the [supported languages table](/docs/voice/supported-voice-languages) for details.<br>|
|» target_media_languages|body|[VoiceTargetMediaLanguages](#schemavoicetargetmedialanguages)|false|List of target languages for which to generate synthesized audio. Languages specified here will automatically be added to target_languages if not already present, ensuring you receive both text translation and audio synthesis for these languages. If omitted, only text transcription and translation will be provided (no audio synthesis). Language identifiers must comply with IETF BCP 47.<br>Note: Some translated audio languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.<br>|
|» target_media_content_type|body|[VoiceTargetMediaContentType](#schemavoicetargetmediacontenttype)|false| The audio format for synthesized target media streaming.<br> Specifies container, codec, and encoding parameters for the audio returned in target_media_chunk messages.<br> If not specified, defaults to audio/webm;codecs=opus.<br> Only applies when target_media_languages is specified.<br> <br> \| Content Type \| Container \| Codec \|<br> \| :--- \| :--- \| :--- \|<br> \| `audio/flac` \| FLAC (flac) \| FLAC 24000 Hz \|<br> \| `video/mp2t;codecs=aac` \| MPEG Transport Stream (Audio only) \| AAC 70 kbit/s \|<br> \| `video/mp2t;codecs=opus` \| MPEG Transport Stream (Audio only) \| OPUS 32 kbit/s \|<br> \| `audio/ogg` \| Ogg (ogg/oga) \| OPUS 32 kbit/s \|<br> \| `audio/ogg;codecs=flac` \| Ogg (ogg/oga) \| FLAC 24000 Hz \|<br> \| `audio/ogg;codecs=opus` \| Ogg (ogg/oga) \| OPUS 32 kbit/s \|<br> \| `audio/opus` \| - \| OPUS 32 kbit/s \|<br> \| `audio/pcm;encoding=alaw;rate=8000` \| - \| PCM A-Law 8000 Hz (G.711) \|<br> \| `audio/pcm;encoding=ulaw;rate=8000` \| - \| PCM µ-Law 8000 Hz (G.711) \|<br> \| `audio/pcm;encoding=s16le;rate=16000` \| - \| PCM signed 16-bit little-endian 16000 Hz \|<br> \| `audio/pcm;encoding=s16le;rate=24000` \| - \| PCM signed 16-bit little-endian 24000 Hz \|<br> \| `audio/webm` \| WebM (webm) \| OPUS 32 kbit/s  \|<br> \| `audio/webm;codecs=opus` \| WebM (webm) \| OPUS 32 kbit/s \|<br> \| `audio/x-matroska;codecs=aac` \| Matroska (mkv/mka) \| AAC 70 kbit/s \|<br> \| `audio/x-matroska;codecs=flac` \| Matroska (mkv/mka) \| FLAC 24000 Hz \|<br> \| `audio/x-matroska;codecs=opus` \| Matroska (mkv/mka) \| OPUS 32 kbit/s \|<br> <br> We recommend the following formats as good tradeoffs between quality and bandwidth:<br> - OPUS (WebM): 32 kbps, recommended for low bandwidth scenarios (default)<br> - PCM 24kHz: 384 kbps, high quality|
|» target_media_voice|body|[VoiceTargetMediaVoice](#schemavoicetargetmediavoice)|false|Target audio voice selection for synthesized speech. The default voice is language dependent.<br>Use `match` for speaker match, which produces translated speech with a voice close to the speaker's voice. Speaker match is only available for target languages whose translated speech is provided by DeepL, not for languages provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.<br>Requesting `match` for a target language that does not support it is not an error: the session is created and that language's translated speech uses a preset voice instead.<br>|
|» spoken_terms_id|body|[SpokenTermsId](#schemaspokentermsid)|false|(beta) The ID of a Spoken Terms collection used to inform transcription.|
|» glossary_id|body|string|false|Specify the glossary to use for the target transcripts (translations). For new integrations we<br>recommend the more general `glossary_ids`.<br><br>Cannot be used together with `glossary_ids`.|
|» glossary_ids|body|[string]|false|Specify the glossaries to use for the target transcripts (translations), as an array of<br>glossary IDs ordered by priority (highest first). Each glossary's matching terms are applied to<br>the translation; where entries conflict, the higher-priority glossary wins. Unknown glossary IDs<br>are ignored.<br><br>In realtime Voice, glossary terms are matched against the streaming source transcription,<br>which affects how and when terms are applied. See<br>[Glossaries in realtime Voice](/docs/voice/overview#glossaries-in-realtime-voice).<br><br>Cannot be used together with `glossary_id`. Requests that exceed the<br>[session limit](/docs/voice/voice-api-requirements#session-limits), contain duplicates, or<br>combine `glossary_ids` with `glossary_id` are rejected with a `400 Bad Request` before a<br>session is created.|
|» formality|body|[VoiceFormality](#schemavoiceformality)|false|Sets whether the translated text should lean towards formal or informal language.<br>Possible options are:<br>  * `default` - use the default formality for the target language<br>  * `formal`/`more` - for a more formal language<br>  * `informal`/`less` - for a more informal language|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» message_format|json|
|» message_format|msgpack|
|» source_media_content_type|audio/auto|
|» source_media_content_type|audio/flac|
|» source_media_content_type|audio/mpeg|
|» source_media_content_type|audio/ogg|
|» source_media_content_type|audio/webm|
|» source_media_content_type|audio/x-matroska|
|» source_media_content_type|audio/ogg;codecs=flac|
|» source_media_content_type|audio/ogg;codecs=opus|
|» source_media_content_type|audio/pcm;encoding=alaw;rate=8000|
|» source_media_content_type|audio/pcm;encoding=ulaw;rate=8000|
|» source_media_content_type|audio/pcm;encoding=s16le;rate=8000|
|» source_media_content_type|audio/pcm;encoding=s16le;rate=16000|
|» source_media_content_type|audio/pcm;encoding=s16le;rate=44100|
|» source_media_content_type|audio/pcm;encoding=s16le;rate=48000|
|» source_media_content_type|audio/webm;codecs=opus|
|» source_media_content_type|audio/x-matroska;codecs=aac|
|» source_media_content_type|audio/x-matroska;codecs=flac|
|» source_media_content_type|audio/x-matroska;codecs=mp3|
|» source_media_content_type|audio/x-matroska;codecs=opus|
|» source_language|ar|
|» source_language|bg|
|» source_language|bn|
|» source_language|ca|
|» source_language|cs|
|» source_language|da|
|» source_language|de|
|» source_language|el|
|» source_language|en|
|» source_language|es|
|» source_language|et|
|» source_language|fi|
|» source_language|fr|
|» source_language|ga|
|» source_language|gl|
|» source_language|he|
|» source_language|hi|
|» source_language|hr|
|» source_language|hu|
|» source_language|id|
|» source_language|it|
|» source_language|ja|
|» source_language|ko|
|» source_language|lt|
|» source_language|lv|
|» source_language|ms|
|» source_language|mt|
|» source_language|nb|
|» source_language|nl|
|» source_language|pl|
|» source_language|pt|
|» source_language|ro|
|» source_language|ru|
|» source_language|sk|
|» source_language|sl|
|» source_language|sv|
|» source_language|ta|
|» source_language|th|
|» source_language|tl|
|» source_language|tr|
|» source_language|uk|
|» source_language|vi|
|» source_language|zh|
|» source_language_mode|auto|
|» source_language_mode|fixed|
|» target_languages|ar|
|» target_languages|bg|
|» target_languages|bn|
|» target_languages|ca|
|» target_languages|cs|
|» target_languages|da|
|» target_languages|de|
|» target_languages|el|
|» target_languages|en|
|» target_languages|en-GB|
|» target_languages|en-US|
|» target_languages|es|
|» target_languages|es-419|
|» target_languages|et|
|» target_languages|fi|
|» target_languages|fr|
|» target_languages|fr-CA|
|» target_languages|fr-FR|
|» target_languages|ga|
|» target_languages|gl|
|» target_languages|he|
|» target_languages|hi|
|» target_languages|hr|
|» target_languages|hu|
|» target_languages|id|
|» target_languages|it|
|» target_languages|ja|
|» target_languages|ko|
|» target_languages|lt|
|» target_languages|lv|
|» target_languages|ms|
|» target_languages|mt|
|» target_languages|nb|
|» target_languages|nl|
|» target_languages|pl|
|» target_languages|pt|
|» target_languages|pt-BR|
|» target_languages|pt-PT|
|» target_languages|ro|
|» target_languages|ru|
|» target_languages|sk|
|» target_languages|sl|
|» target_languages|sv|
|» target_languages|ta|
|» target_languages|th|
|» target_languages|tl|
|» target_languages|tr|
|» target_languages|uk|
|» target_languages|vi|
|» target_languages|zh|
|» target_languages|zh-HANS|
|» target_languages|zh-HANT|
|» target_media_languages|ar|
|» target_media_languages|bg|
|» target_media_languages|ca|
|» target_media_languages|cs|
|» target_media_languages|da|
|» target_media_languages|de|
|» target_media_languages|el|
|» target_media_languages|en|
|» target_media_languages|en-GB|
|» target_media_languages|en-US|
|» target_media_languages|es|
|» target_media_languages|es-419|
|» target_media_languages|fi|
|» target_media_languages|fr|
|» target_media_languages|fr-CA|
|» target_media_languages|fr-FR|
|» target_media_languages|gl|
|» target_media_languages|he|
|» target_media_languages|hi|
|» target_media_languages|hr|
|» target_media_languages|hu|
|» target_media_languages|id|
|» target_media_languages|it|
|» target_media_languages|ja|
|» target_media_languages|ko|
|» target_media_languages|ms|
|» target_media_languages|nb|
|» target_media_languages|nl|
|» target_media_languages|pl|
|» target_media_languages|pt|
|» target_media_languages|pt-BR|
|» target_media_languages|pt-PT|
|» target_media_languages|ro|
|» target_media_languages|ru|
|» target_media_languages|sk|
|» target_media_languages|sl|
|» target_media_languages|sv|
|» target_media_languages|ta|
|» target_media_languages|th|
|» target_media_languages|tl|
|» target_media_languages|tr|
|» target_media_languages|uk|
|» target_media_languages|vi|
|» target_media_languages|zh|
|» target_media_languages|zh-HANS|
|» target_media_languages|zh-HANT|
|» target_media_content_type|audio/flac|
|» target_media_content_type|video/mp2t;codecs=aac|
|» target_media_content_type|video/mp2t;codecs=opus|
|» target_media_content_type|audio/ogg|
|» target_media_content_type|audio/ogg;codecs=flac|
|» target_media_content_type|audio/ogg;codecs=opus|
|» target_media_content_type|audio/opus|
|» target_media_content_type|audio/pcm;encoding=alaw;rate=8000|
|» target_media_content_type|audio/pcm;encoding=ulaw;rate=8000|
|» target_media_content_type|audio/pcm;encoding=s16le;rate=16000|
|» target_media_content_type|audio/pcm;encoding=s16le;rate=24000|
|» target_media_content_type|audio/webm|
|» target_media_content_type|audio/webm;codecs=opus|
|» target_media_content_type|audio/x-matroska;codecs=aac|
|» target_media_content_type|audio/x-matroska;codecs=flac|
|» target_media_content_type|audio/x-matroska;codecs=opus|
|» target_media_voice|male|
|» target_media_voice|female|
|» target_media_voice|match|
|» formality|default|
|» formality|formal|
|» formality|more|
|» formality|informal|
|» formality|less|

> Example responses

> 200 Response

```json
{
  "streaming_url": "wss://api.deepl.com/v3/voice/realtime/connect",
  "token": "VGhpcyBpcyBhIGZha2UgdG9rZW4K",
  "session_id": "4f911080-cfe2-41d4-8269-0e6ec15a0354"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-streaming-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully obtained streaming URL and token.|[VoiceStreamingResponse](#schemavoicestreamingresponse)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="get-streaming-url-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-voicetranslatejob">VoiceTranslateJob</h1>

**Alpha.** Async voice translation jobs. This API may change without notice.

## Create a voice translation job

<a id="opIdcreateVoiceTranslateJob"></a>

> Code samples

```bash
curl https://api.deepl.com/v1/jobs/voice/translate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "source_file": {
      "name": "podcast-episode-42.mp3",
      "content_type": "audio/mpeg",
      "content_length": 15728640
    },
    "parameters": {
      "source_language": "en"
    },
    "targets": [
      {
        "language": "de",
        "type": "text/plain"
      },
      {
        "language": "es",
        "type": "audio/pcm;encoding=s16le;rate=16000"
      }
    ]
  }'
```

`POST /v1/jobs/voice/translate`

Creates an async voice translation job. The response includes an upload URL for the source audio file.

> Body parameter

```json
{
  "source_file": {
    "name": "podcast-episode-42.mp3",
    "content_type": "audio/mpeg",
    "content_length": 15728640
  },
  "parameters": {
    "source_language": "en"
  },
  "targets": [
    {
      "language": "de",
      "type": "text/plain"
    },
    {
      "language": "es",
      "type": "audio/pcm;encoding=s16le;rate=16000"
    }
  ]
}
```

<h3 id="create-a-voice-translation-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|[string]|false|Additional fields to include in the response.<br>- `signed_url`: Include pre-signed URLs (`signed_upload_url` on create, `signed_download_url` on status) that can be used without an authorization header.|
|body|body|[VoiceTranslateCreateJobRequest](#schemavoicetranslatecreatejobrequest)|true|none|
|» source_file|body|[JobSourceFileRequest](#schemajobsourcefilerequest)|true|Metadata about the source audio file to be uploaded.|
|» parameters|body|[VoiceTranslateJobParametersRequest](#schemavoicetranslatejobparametersrequest)|false|Processing parameters for the voice translation job.|
|» targets|body|[[VoiceTranslateJobTargetRequest](#schemavoicetranslatejobtargetrequest)]|true|One or more translation targets. Each target produces a separate result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|signed_url|

> Example responses

> 201 Response

```json
{
  "job_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "upload_url": "https://assets.deepl.com/collections/a74d88fb-ed2a-4943-a664-a4512398b994/assets/b1c2d3e4-f5a6-7890-abcd-ef1234567890",
  "signature": "eyJhbGciOiJIUzI1NiIs..."
}
```

> 400 Response

```json
{
  "message": "/targets/0/type: Value is not valid"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-voice-translation-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Job created successfully.|[VoiceTranslateCreateJobResponse](#schemavoicetranslatecreatejobresponse)|
|400|Bad Request|Bad request. Check the error message and request parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get voice translation job status

<a id="opIdgetVoiceTranslateJobStatus"></a>

> Code samples

```bash
curl https://api.deepl.com/v1/jobs/voice/translate/a74d88fb-ed2a-4943-a664-a4512398b994 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/jobs/voice/translate/{job_id}`

Returns the current status of a voice translation job, including per-target result statuses.

When a target's status is `complete`, the response includes a `download_url` and `signature` for that target. Results are returned in the same order as the targets in the create request.

<h3 id="get-voice-translation-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|The unique identifier of the job, returned by the create job endpoint.|
|include|query|[string]|false|Additional fields to include in the response.<br>- `signed_url`: Include pre-signed URLs (`signed_upload_url` on create, `signed_download_url` on status) that can be used without an authorization header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|signed_url|

> Example responses

> 200 Response

```json
{
  "job_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "product": "voice",
  "operation": "translate",
  "created_at": "2026-10-01T01:03:03.444Z",
  "updated_at": "2026-10-01T04:03:03.333Z",
  "usage": {
    "storage_used": 31457280
  },
  "source_file": {
    "name": "podcast-episode-42.mp3",
    "content_type": "audio/mpeg",
    "content_length": 15728640
  },
  "parameters": {
    "source_language": "en"
  },
  "targets": [
    {
      "language": "de",
      "type": "text/plain"
    },
    {
      "language": "es",
      "type": "audio/pcm;encoding=s16le;rate=16000"
    }
  ],
  "results": [
    {
      "status": "processing"
    },
    {
      "status": "processing"
    }
  ]
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-voice-translation-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job status retrieved successfully.|[VoiceTranslateJobStatusResponse](#schemavoicetranslatejobstatusresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-adminapi">AdminApi</h1>

Endpoints for organization administrators to manage API keys and retrieve usage analytics.

## Get usage statistics as an admin

<a id="opIdadminGetAnalytics"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v2/admin/analytics?start_date=2025-09-29&end_date=2025-10-01' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/admin/analytics`

Retrieve usage statistics for the organization within a specified date range.
Optionally group the results by API key or by API key and day.

<h3 id="get-usage-statistics-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|true|Start date for the usage report (ISO 8601 date format).|
|end_date|query|string(date)|true|End date for the usage report (ISO 8601 date format).|
|group_by|query|string|false|Optional parameter to group usage statistics. Possible values:<br> * `key` - Group by API key<br> * `key_and_day` - Group by API key and usage date|

#### Enumerated Values

|Parameter|Value|
|---|---|
|group_by|key|
|group_by|key_and_day|

> Example responses

> 200 Response

```json
{
  "usage_report": {
    "total_usage": {
      "total_characters": 9619,
      "text_translation_characters": 4892,
      "document_translation_characters": 0,
      "text_improvement_characters": 4727,
      "speech_to_text_minutes": 107.46
    },
    "group_by": "key_and_day",
    "start_date": "2025-09-29T00:00:00",
    "end_date": "2025-10-01T00:00:00",
    "key_and_day_usages": [
      {
        "api_key": "dc88****3a2c",
        "api_key_label": "Staging API Key",
        "usage_date": "2025-09-29T00:00:00Z",
        "usage": {
          "total_characters": 315,
          "text_translation_characters": 159,
          "document_translation_characters": 0,
          "text_improvement_characters": 156,
          "speech_to_text_minutes": 11.94
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Bad request. Reason: Date range cannot exceed 366 days"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-usage-statistics-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The usage statistics for the specified date range.|[AdminUsageReport](#schemaadminusagereport)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="get-usage-statistics-as-an-admin-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error message describing the issue.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|
|400|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get custom tag usage statistics as an admin

<a id="opIdadminGetCustomTagAnalytics"></a>

> Code samples

```bash
curl 'https://api.deepl.com/v2/admin/analytics/custom-tags?start_date=2026-05-17&end_date=2026-05-18' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/admin/analytics/custom-tags`

Retrieve usage statistics broken down by custom tags within a specified date range.
Optionally aggregate results by day or over the entire period.
Results are paginated; use the `page` parameter with the `next_page` value from
a previous response to retrieve subsequent pages.

<h3 id="get-custom-tag-usage-statistics-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|true|Start date for the usage report (ISO 8601 date format).|
|end_date|query|string(date)|true|End date for the usage report (ISO 8601 date format).|
|aggregate_by|query|string|false|Optional parameter to control aggregation of usage statistics. Possible values:<br> * `period` - Aggregate usage over the entire date range (default)<br> * `day` - Group usage by individual day|
|page|query|integer|false|Page number for pagination. Use the integer value returned in `next_page` from<br>a previous response to retrieve the next page of results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aggregate_by|period|
|aggregate_by|day|

> Example responses

> 200 Response

```json
{
  "custom_tag_usage_report": {
    "aggregate_by": "period",
    "start_date": "2026-05-03T00:00:00",
    "end_date": "2026-05-05T00:00:00",
    "next_page": null,
    "usage": [
      {
        "custom_tag": "example-custom-tag",
        "breakdown": {
          "total_characters": 380,
          "text_translation_characters": 380,
          "text_improvement_characters": 0,
          "speech_to_text_minutes": 12.5,
          "speech_to_speech_minutes": 4.2
        }
      },
      {
        "custom_tag": "example-custom-tag-2",
        "breakdown": {
          "total_characters": 475,
          "text_translation_characters": 475,
          "text_improvement_characters": 0,
          "speech_to_text_minutes": 0,
          "speech_to_speech_minutes": 0
        }
      }
    ]
  }
}
```

> 400 Response

```json
{
  "message": "Bad request. Reason: Date range cannot exceed 366 days"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-custom-tag-usage-statistics-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The custom tag usage statistics for the specified date range.|[CustomTagUsageReport](#schemacustomtagusagereport)|
|400|Bad Request|Bad request. Please check error message and your parameters.|Inline|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="get-custom-tag-usage-statistics-as-an-admin-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Error message describing the issue.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|
|400|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get all developer keys as an admin

<a id="opIdadminGetDeveloperKeys"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/admin/developer-keys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v2/admin/developer-keys`

List every developer key in your organization, including labels, creation and
deactivation timestamps, and any configured usage limits. Requires an Admin API key.

> Example responses

> 200 Response

```json
[
  {
    "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
    "label": "developer key prod",
    "creation_time": "2025-07-08T08:15:29.362Z",
    "deactivated_time": "2025-07-09T08:15:29.362Z",
    "is_deactivated": true,
    "usage_limits": {
      "characters": 5000,
      "speech_to_text_milliseconds": 3600000,
      "speech_to_speech_milliseconds": 3600000
    }
  }
]
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-all-developer-keys-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The get function returns a JSON representation of all developer API keys in the organization.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="get-all-developer-keys-as-an-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKey](#schemaapikey)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a developer key as an admin

<a id="opIdadminCreateDeveloperKey"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/admin/developer-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "label": "developer key prod"
  }'
```

`POST /v2/admin/developer-keys`

Create a developer key in your organization with the given label and return its
metadata, including the `key_id`. Requires an Admin API key.

> Body parameter

```json
{
  "label": "developer key prod"
}
```

<h3 id="create-a-developer-key-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» label|body|[ApiKeyLabel](#schemaapikeylabel)|false|API key label. The default value is `DeepL API Key`.|

> Example responses

> 200 Response

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod",
  "creation_time": "2025-07-08T08:15:29.362Z",
  "deactivated_time": "2025-07-09T08:15:29.362Z",
  "is_deactivated": true,
  "usage_limits": {
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-developer-key-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The create function returns a JSON representation of the created API key.|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="create-a-developer-key-as-an-admin-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Deactivate a developer key as an admin

<a id="opIdadminDeactivateDeveloperKey"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/admin/developer-keys/deactivate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38"
  }'
```

`PUT /v2/admin/developer-keys/deactivate`

Deactivate a developer key so it can no longer authenticate API requests.
Deactivation is permanent: create a new key to restore access. Requires an Admin API key.

> Body parameter

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38"
}
```

<h3 id="deactivate-a-developer-key-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» key_id|body|[ApiKeyId](#schemaapikeyid)|true|API key ID. Consists of two valid GUIDs separated by a colon.|

> Example responses

> 200 Response

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod",
  "creation_time": "2025-07-08T08:15:29.362Z",
  "deactivated_time": "2025-07-09T08:15:29.362Z",
  "is_deactivated": true,
  "usage_limits": {
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="deactivate-a-developer-key-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The deactivate function returns a JSON representation of the deactivated API key.|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="deactivate-a-developer-key-as-an-admin-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Rename a developer key as an admin

<a id="opIdadminRenameDeveloperKey"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/admin/developer-keys/label \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
    "label": "developer key prod"
  }'
```

`PUT /v2/admin/developer-keys/label`

Change the label of a developer key. Labels are for your own bookkeeping and do not
affect the key's permissions. Requires an Admin API key.

> Body parameter

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod"
}
```

<h3 id="rename-a-developer-key-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» key_id|body|[ApiKeyId](#schemaapikeyid)|true|API key ID. Consists of two valid GUIDs separated by a colon.|
|» label|body|string|true|API key label.|

> Example responses

> 200 Response

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod",
  "creation_time": "2025-07-08T08:15:29.362Z",
  "deactivated_time": "2025-07-09T08:15:29.362Z",
  "is_deactivated": true,
  "usage_limits": {
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="rename-a-developer-key-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The set label function returns a JSON representation of the renamed API key.|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="rename-a-developer-key-as-an-admin-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Set developer key usage limits as an admin

<a id="opIdadminSetDeveloperKeyUsageLimits"></a>

> Code samples

```bash
curl https://api.deepl.com/v2/admin/developer-keys/limits \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }'
```

`PUT /v2/admin/developer-keys/limits`

Set per-key usage limits for characters, speech-to-text milliseconds, and
speech-to-speech milliseconds. Requests made with the key fail with HTTP 456
once a limit is reached. Requires an Admin API key.

> Body parameter

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "characters": 5000,
  "speech_to_text_milliseconds": 3600000,
  "speech_to_speech_milliseconds": 3600000
}
```

<h3 id="set-developer-key-usage-limits-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» key_id|body|[ApiKeyId](#schemaapikeyid)|true|API key ID. Consists of two valid GUIDs separated by a colon.|
|» characters|body|[ApiKeyUsageCharacters](#schemaapikeyusagecharacters)|false|Restricts the number of total characters (across text translation, document translation, and text improvement) that can be consumed by an API key in a one-month usage period.<br><br>Setting the limit to `0` means the API key will not be able to consume characters.<br>Setting the limit to `null` disables the limit, effectively allowing unlimited usage.<br>|
|» speech_to_text_milliseconds|body|[ApiKeyUsageSpeechToTextMilliseconds](#schemaapikeyusagespeechtotextmilliseconds)|false|Restricts the number of milliseconds of speech-to-text that can be consumed by an API key in a one-month usage period.<br>Setting the limit to `0` means the API key will not be able to consume speech-to-text milliseconds.<br>Setting the limit to `null` disables the limit, effectively allowing unlimited usage.<br>|
|» speech_to_speech_milliseconds|body|[ApiKeyUsageSpeechToSpeechMilliseconds](#schemaapikeyusagespeechtospeechmilliseconds)|false|Restricts the number of milliseconds of speech-to-speech that can be consumed by an API key in a one-month usage period.<br>Setting the limit to `0` means the API key will not be able to consume speech-to-speech milliseconds.<br>Setting the limit to `null` disables the limit, effectively allowing unlimited usage.<br>|

> Example responses

> 200 Response

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod",
  "creation_time": "2025-07-08T08:15:29.362Z",
  "deactivated_time": "2025-07-09T08:15:29.362Z",
  "is_deactivated": true,
  "usage_limits": {
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="set-developer-key-usage-limits-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The set usage limits function returns a JSON representation of the modified API key.|[ApiKey](#schemaapikey)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|

<h3 id="set-developer-key-usage-limits-as-an-admin-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-qualityevaluation">QualityEvaluation</h1>

**Beta.** Retrieve a quality evaluation report for a document DeepL has translated. Reports are requested with `enable_quality_evaluation` on `POST /v2/document` and polled here. A report lists per-segment quality issues categorized by error type and severity, with character spans pointing to where each issue occurs.

## Poll for the evaluation result

<a id="opIdpollQualityEvaluation"></a>

> Code samples

```bash
curl https://api.deepl.com/v1/quality-evaluations/04DE5AD98A02647D83285A36021911C6 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/quality-evaluations/{job_id}`

Returns the current state of a quality evaluation. While the evaluation is in progress the response carries only status information; once it completes, the response carries the full report.

Evaluations are requested with `enable_quality_evaluation` on [`POST /v2/document`](/api-reference/document/upload-and-translate-a-document). There is no public endpoint for starting one.

<h3 id="poll-for-the-evaluation-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string|true|The unique ID of the quality evaluation, returned as `quality_evaluation_job_id` when the document was [uploaded for translation](/api-reference/document/upload-and-translate-a-document).|

> Example responses

> 200 Response

```json
{
  "job_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "done",
  "segments": [
    {
      "segment_index": 0,
      "segment_score": 38.5,
      "source": "Our Q3 revenue came in 5% above forecast.",
      "target": "Unser Q3-Umsatz lag 5 % unter der Prognose.",
      "applied_glossary_term_pairs": [
        {
          "source_term": "forecast",
          "target_term": "Prognose",
          "ranges": [
            {
              "start": 34,
              "end": 42
            }
          ]
        }
      ],
      "errors": [
        {
          "type": "Accuracy",
          "sub_type": "Mistranslation",
          "severity": "Critical",
          "explanation": "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
          "source_spans": [
            {
              "start": 23,
              "end": 31
            }
          ],
          "target_spans": [
            {
              "start": 20,
              "end": 29
            }
          ]
        }
      ]
    },
    {
      "segment_index": 1,
      "segment_score": 62,
      "source": "Please share these results with your teams by Friday.",
      "target": "Bitte teilen Sie diese Ergebnisse mit Ihrem Team.",
      "errors": [
        {
          "type": "Accuracy",
          "sub_type": "Omission",
          "severity": "Major",
          "explanation": "The source specifies the deadline 'by Friday' but the translation omits this temporal information entirely.",
          "source_spans": [
            {
              "start": 43,
              "end": 52
            }
          ],
          "target_spans": []
        },
        {
          "type": "Accuracy",
          "sub_type": "Mistranslation",
          "severity": "Minor",
          "explanation": "The source says 'your teams' (plural) but the translation says 'Ihrem Team' (singular). This changes the scope of the instruction.",
          "source_spans": [
            {
              "start": 32,
              "end": 42
            }
          ],
          "target_spans": [
            {
              "start": 38,
              "end": 48
            }
          ]
        }
      ]
    }
  ]
}
```

> 202 Response

```json
{
  "job_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "processing"
}
```

> 400 Response

```json
{
  "message": "job_id must be a valid UUID."
}
```

> 404 Response

```json
{
  "message": "Quality estimation job not found."
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="poll-for-the-evaluation-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Polling result. The response shape depends on the `status` field. `done` carries the full report; `error` carries error details.|Inline|
|202|Accepted|The evaluation is still running. Continue polling after the time suggested by the `Retry-After` header.|[QualityEvaluationProcessing](#schemaqualityevaluationprocessing)|
|400|Bad Request|The `job_id` is not a well-formed identifier.|[QualityEvaluationApiError](#schemaqualityevaluationapierror)|
|404|Not Found|No evaluation exists for this `job_id`, it belongs to another account, or it has expired. See [Report retention](/api-reference/quality-evaluations/poll#report-retention).|[QualityEvaluationApiError](#schemaqualityevaluationapierror)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="poll-for-the-evaluation-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[QualityEvaluationDone](#schemaqualityevaluationdone)|false|none|none|
|*oneOf*|[QualityEvaluationFailed](#schemaqualityevaluationfailed)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Retry-After|integer||Suggested number of seconds to wait before polling again.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="deepl-api-documentation-default">Default</h1>

## Retrieve style rule lists

<a id="opIdgetStyleRuleLists"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/style_rules`

List the style rule lists in your account. Results are paginated. Set `detailed` to
include each list's configured rules and custom instructions.

<h3 id="retrieve-style-rule-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The index of the first page to return. Use with `page_size` to get the next page of rule lists|
|page_size|query|integer|false|The maximum number of style rule lists to return.|
|detailed|query|boolean|false|Determines if the rule list's `configured_rules` and `custom_instructions` should be included in the response body.|

> Example responses

> 200 Response

```json
{
  "style_rules": [
    {
      "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
      "name": "string",
      "creation_time": "1970-01-01T00:00:00Z",
      "updated_time": "1970-01-01T00:00:00Z",
      "language": "ar",
      "version": 13,
      "configured_rules": {
        "style_and_tone": {
          "abbreviations": "use_abbreviations_and_symbols",
          "short_vs_long_words": "use_short_words"
        },
        "punctuation": {
          "apostrophe": "use_curly_apostrophes"
        }
      },
      "custom_instructions": [
        {
          "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
          "label": "Currency custom instruction",
          "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
          "source_language": "en"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="retrieve-style-rule-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON object containing the style rule lists.|Inline|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="retrieve-style-rule-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|style_rules|[[StyleRuleList](#schemastylerulelist)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a style rule list

<a id="opIdcreateStyleRuleList"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "My style rules",
    "language": "de",
    "configured_rules": {
      "style_and_tone": {
        "abbreviations": "use_abbreviations_and_symbols",
        "short_vs_long_words": "use_short_words"
      },
      "punctuation": {
        "apostrophe": "use_curly_apostrophes"
      }
    },
    "custom_instructions": [
      {
        "label": "Currency custom instruction",
        "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
        "source_language": "en"
      }
    ]
  }'
```

`POST /v3/style_rules`

Create a style rule list for a single language, optionally with its configured rules
and custom instructions. The `language` can be a root code such as `de` or a variant
code such as `de-CH`. Use the returned `style_id` with the translation endpoints
to apply the list.

> Body parameter

```json
{
  "name": "My style rules",
  "language": "de",
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

<h3 id="create-a-style-rule-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|[StyleRuleName](#schemastylerulename)|true|Name associated with the style rule list.|
|» language|body|[StyleRuleLanguage](#schemastylerulelanguage)|true|The target language the style rule list applies to. Codes are matched case-insensitively;<br>the response returns the canonical form (for example `de-CH`).<br><br>A root code (for example `en`) applies to that language and all of its variants. A variant<br>code (for example `en-GB`) applies only when `target_lang` is that variant.<br><br>Variant lists for `de-CH`, `fr-CA`, `pt-BR`, and `pt-PT` are generally available. Variant<br>lists for `de-DE`, `en-GB`, `en-US`, `es-419`, `es-ES`, `fr-FR`, `zh-Hans`, and `zh-Hant`<br>are in beta. The current list and the status of each language are returned by<br>[`GET /v3/languages?resource=style_rules&include=beta`](/docs/languages/using-the-languages-api).|
|» configured_rules|body|[ConfiguredRules](#schemaconfiguredrules)|false|The enabled rules for the style rule list including what option was selected for each rule. This schema combines rules from all supported languages.|
|» custom_instructions|body|[object]|false|Array of custom instruction objects|
|» » label|body|string|true|Label for the custom instruction|
|» » prompt|body|string|true|Instruction text|
|» » source_language|body|string|false|Optional source language code|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|ar|
|» language|bg|
|» language|cs|
|» language|da|
|» language|de|
|» language|de-CH|
|» language|de-DE|
|» language|el|
|» language|en|
|» language|en-GB|
|» language|en-US|
|» language|es|
|» language|es-419|
|» language|es-ES|
|» language|et|
|» language|fi|
|» language|fr|
|» language|fr-CA|
|» language|fr-FR|
|» language|he|
|» language|hu|
|» language|id|
|» language|it|
|» language|ja|
|» language|ko|
|» language|lt|
|» language|lv|
|» language|nb|
|» language|nl|
|» language|pl|
|» language|pt|
|» language|pt-BR|
|» language|pt-PT|
|» language|ro|
|» language|ru|
|» language|sk|
|» language|sl|
|» language|sv|
|» language|th|
|» language|tr|
|» language|uk|
|» language|vi|
|» language|zh|
|» language|zh-Hans|
|» language|zh-Hant|

> Example responses

> 201 Response

```json
{
  "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
  "name": "string",
  "creation_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "language": "ar",
  "version": 13,
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-style-rule-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Style rule list created successfully|[StyleRuleList](#schemastylerulelist)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="create-a-style-rule-list-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get a style rule list

<a id="opIdgetStyleRuleList"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/style_rules/{style_id}`

Retrieve a single style rule list, including its configured rules and custom instructions.

<h3 id="get-a-style-rule-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|

> Example responses

> 200 Response

```json
{
  "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
  "name": "string",
  "creation_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "language": "ar",
  "version": 13,
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-a-style-rule-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style rule list details|[StyleRuleList](#schemastylerulelist)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="get-a-style-rule-list-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a style rule list

<a id="opIddeleteStyleRuleList"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/style_rules/{style_id}`

Delete a style rule list and its custom instructions. Requests that reference the
deleted `style_id` fail afterwards.

<h3 id="delete-a-style-rule-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-style-rule-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Style rule list deleted successfully|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="delete-a-style-rule-list-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update a style rule list's name

<a id="opIdupdateStyleRuleList"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /v3/style_rules/{style_id}`

Rename a style rule list. This does not change its configured rules or custom instructions.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-a-style-rule-lists-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|body|body|object|true|none|
|» name|body|[StyleRuleName](#schemastylerulename)|false|Name associated with the style rule list.|

> Example responses

> 200 Response

```json
{
  "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
  "name": "string",
  "creation_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "language": "ar",
  "version": 13,
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="update-a-style-rule-lists-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Style rule list updated successfully|[StyleRuleList](#schemastylerulelist)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="update-a-style-rule-lists-name-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Replace configured rules for a style rule list

<a id="opIdupdateStyleRuleConfiguredRules"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string/configured_rules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dates_and_times": {
      "calendar_era": "use_bc_and_ad"
    },
    "punctuation": {
      "periods_in_academic_degrees": "do_not_use"
    }
  }'
```

`PUT /v3/style_rules/{style_id}/configured_rules`

Replace the full set of configured rules on a style rule list. Rules not included in
the request are removed, so send the complete set you want to keep.

> Body parameter

```json
{
  "dates_and_times": {
    "calendar_era": "use_bc_and_ad"
  },
  "punctuation": {
    "periods_in_academic_degrees": "do_not_use"
  }
}
```

<h3 id="replace-configured-rules-for-a-style-rule-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|body|body|[ConfiguredRules](#schemaconfiguredrules)|true|none|
|» dates_and_times|body|object|false|none|
|» » calendar_era|body|string|false|Formatting options for Calendar Era|
|» » centuries|body|string|false|Formatting options for Centuries|
|» » date_format|body|string|false|Formatting options for Date Format|
|» » dates_in_numerical_form|body|string|false|Formatting options for Dates In Numerical Form|
|» » decades|body|string|false|Formatting options for Decades|
|» » hours_minutes_seconds_separator|body|string|false|Formatting options for Hours Minutes Seconds Separator|
|» » hours_minutes_separator|body|string|false|Formatting options for Hours Minutes Separator|
|» » midnight_in_numerals|body|string|false|Formatting options for Midnight In Numerals|
|» » single_digit_days_and_months|body|string|false|Formatting options for Single Digit Days And Months|
|» » single_digit_hours|body|string|false|Formatting options for Single Digit Hours|
|» » time_format|body|string|false|Formatting options for Time Format|
|» » writing_dates|body|string|false|Formatting options for Writing Dates|
|» » years|body|string|false|Formatting options for Years|
|» formatting|body|object|false|none|
|» » email_address_format|body|string|false|Formatting options for Email Address Format|
|» » phone_number_country_code_format|body|string|false|Formatting options for Phone Number Country Code Format|
|» » phone_number_format|body|string|false|Formatting options for Phone Number Format|
|» » space_between_arabic_numerals_and_unit|body|string|false|Formatting options for Space Between Arabic Numerals And Unit|
|» » space_between_chinese_and_english|body|string|false|Formatting options for Space Between Chinese And English|
|» » space_between_chinese_characters_and_arabic_numerals|body|string|false|Formatting options for Space Between Chinese Characters And Arabic Numerals|
|» numbers|body|object|false|none|
|» » approximate_numbers|body|string|false|Formatting options for Approximate Numbers|
|» » currency_format|body|string|false|Formatting options for Currency Format|
|» » decimal_numbers_less_than_one|body|string|false|Formatting options for Decimal Numbers Less Than One|
|» » decimal_separator|body|string|false|Formatting options for Decimal Separator|
|» » dimensions_separator|body|string|false|Formatting options for Dimensions Separator|
|» » equation_formula_reference|body|string|false|Formatting options for Equation Formula Reference|
|» » kanji_numbers|body|string|false|Formatting options for Kanji Numbers|
|» » large_number_format|body|string|false|Formatting options for Large Number Format|
|» » large_sums_of_money|body|string|false|Formatting options for Large Sums Of Money|
|» » large_sums_of_money_format|body|string|false|Formatting options for Large Sums Of Money Format|
|» » list_of_measurements_with_units|body|string|false|Formatting options for List Of Measurements With Units|
|» » mathematical_expression_spacing|body|string|false|Formatting options for Mathematical Expression Spacing|
|» » number_format|body|string|false|Formatting options for Number Format|
|» » number_separator|body|string|false|Formatting options for Number Separator|
|» » numbers_of_5_digits_or_more|body|string|false|Formatting options for Numbers Of 5 Digits Or More|
|» » numbers_up_to_4_digits|body|string|false|Formatting options for Numbers Up To 4 Digits|
|» » percentage_format|body|string|false|Formatting options for Percentage Format|
|» » reference_to_symbol|body|string|false|Formatting options for Reference To Symbol|
|» » spelling_out_units|body|string|false|Formatting options for Spelling Out Units|
|» » temperature_format|body|string|false|Formatting options for Temperature Format|
|» » thousands_separator|body|string|false|Formatting options for Thousands Separator|
|» » units_of_measure_spacing|body|string|false|Formatting options for Units Of Measure Spacing|
|» » use_of_hiragana_and_kanji|body|string|false|Formatting options for Use Of Hiragana And Kanji|
|» » writing_numbers|body|string|false|Formatting options for Writing Numbers|
|» » zero_format|body|string|false|Formatting options for Zero Format|
|» punctuation|body|object|false|none|
|» » abbreviations|body|string|false|Formatting options for Abbreviations|
|» » acronyms|body|string|false|Formatting options for Acronyms|
|» » ampersand_abbreviation_spacing|body|string|false|Formatting options for Ampersand Abbreviation Spacing|
|» » ampersand_usage|body|string|false|Formatting options for Ampersand Usage|
|» » apostrophe|body|string|false|Formatting options for Apostrophe|
|» » bracket|body|string|false|Formatting options for Bracket|
|» » chinese_mixed_with_english|body|string|false|Formatting options for Chinese Mixed With English|
|» » colon|body|string|false|Formatting options for Colon|
|» » colon_between_hours_and_minutes_or_chapters_and_verses|body|string|false|Formatting options for Colon Between Hours And Minutes Or Chapters And Verses|
|» » colon_in_heading|body|string|false|Formatting options for Colon In Heading|
|» » colon_to_replace_versus_or_to|body|string|false|Formatting options for Colon To Replace Versus Or To|
|» » comma_after_conjunctive_adverbs|body|string|false|Formatting options for Comma After Conjunctive Adverbs|
|» » comma_after_i_e_and_e_g|body|string|false|Formatting options for Comma After I E And E G|
|» » comma_after_short_introductory_phrase|body|string|false|Formatting options for Comma After Short Introductory Phrase|
|» » comma_and_semicolon|body|string|false|Formatting options for Comma And Semicolon|
|» » corner_bracket_and_periods|body|string|false|Formatting options for Corner Bracket And Periods|
|» » corner_brackets_and_periods|body|string|false|Formatting options for Corner Brackets And Periods|
|» » dash|body|string|false|Formatting options for Dash|
|» » ellipsis|body|string|false|Formatting options for Ellipsis|
|» » em_dash|body|string|false|Formatting options for Em Dash|
|» » emphasis|body|string|false|Formatting options for Emphasis|
|» » exclamation_marks|body|string|false|Formatting options for Exclamation Marks|
|» » explanatory_note_indicator|body|string|false|Formatting options for Explanatory Note Indicator|
|» » full_sentence_in_round_brackets|body|string|false|Formatting options for Full Sentence In Round Brackets|
|» » highlighting_specific_expressions|body|string|false|Formatting options for Highlighting Specific Expressions|
|» » japanese_reference_materials|body|string|false|Formatting options for Japanese Reference Materials|
|» » parentheses_for_supplementary_information|body|string|false|Formatting options for Parentheses For Supplementary Information|
|» » passage_of_time_and_movement_between_locations|body|string|false|Formatting options for Passage Of Time And Movement Between Locations|
|» » periods_and_commas|body|string|false|Formatting options for Periods And Commas|
|» » periods_in_academic_degrees|body|string|false|Formatting options for Periods In Academic Degrees|
|» » periods_in_direct_quotes|body|string|false|Formatting options for Periods In Direct Quotes|
|» » periods_in_uppercase_initialisms_and_acronyms|body|string|false|Formatting options for Periods In Uppercase Initialisms And Acronyms|
|» » plus_sign_usage|body|string|false|Formatting options for Plus Sign Usage|
|» » possessives_of_proper_names_ending_in_s_style|body|string|false|Formatting options for Possessives Of Proper Names Ending In S Style|
|» » quotation_mark|body|string|false|Formatting options for Quotation Mark|
|» » quotation_mark_and_apostrophe|body|string|false|Formatting options for Quotation Mark And Apostrophe|
|» » quotation_style|body|string|false|Formatting options for Quotation Style|
|» » range_indicator|body|string|false|Formatting options for Range Indicator|
|» » related_phrases_indicator|body|string|false|Formatting options for Related Phrases Indicator|
|» » round_brackets|body|string|false|Formatting options for Round Brackets|
|» » salutation|body|string|false|Formatting options for Salutation|
|» » sentence_break_indicator|body|string|false|Formatting options for Sentence Break Indicator|
|» » serial_comma|body|string|false|Formatting options for Serial Comma|
|» » setting_off_non_quoted_phrases|body|string|false|Formatting options for Setting Off Non Quoted Phrases|
|» » slash|body|string|false|Formatting options for Slash|
|» » slash_usage|body|string|false|Formatting options for Slash Usage|
|» » spacing_and_punctuation|body|string|false|Formatting options for Spacing And Punctuation|
|» » text_in_round_brackets_referring_to_previous_sentence|body|string|false|Formatting options for Text In Round Brackets Referring To Previous Sentence|
|» » text_in_round_brackets_supplementing_preceding_text|body|string|false|Formatting options for Text In Round Brackets Supplementing Preceding Text|
|» » titles_of_books_and_newspapers|body|string|false|Formatting options for Titles Of Books And Newspapers|
|» » titles_of_creative_works_trade_names_laws_and_regulations|body|string|false|Formatting options for Titles Of Creative Works Trade Names Laws And Regulations|
|» » uppercase_acronyms|body|string|false|Formatting options for Uppercase Acronyms|
|» spelling_and_grammar|body|object|false|none|
|» » abbreviating_french_word_numero|body|string|false|Formatting options for Abbreviating French Word Numero|
|» » abbreviation_usage|body|string|false|Formatting options for Abbreviation Usage|
|» » accents_and_cedillas|body|string|false|Formatting options for Accents And Cedillas|
|» » accents_in_verbs_conjugated_like_french_word_céder|body|string|false|Formatting options for Accents In Verbs Conjugated Like French Word Céder|
|» » accents_with_subject_verb_inversion|body|string|false|Formatting options for Accents With Subject Verb Inversion|
|» » active_passive_voice|body|string|false|Formatting options for Active Passive Voice|
|» » all_caps|body|string|false|Formatting options for All Caps|
|» » complete_sentences|body|string|false|Formatting options for Complete Sentences|
|» » compound_nouns|body|string|false|Formatting options for Compound Nouns|
|» » conjunctions|body|string|false|Formatting options for Conjunctions|
|» » contractions|body|string|false|Formatting options for Contractions|
|» » established_loanwords|body|string|false|Formatting options for Established Loanwords|
|» » eszett|body|string|false|Formatting options for Eszett|
|» » foreign_word_translation|body|string|false|Formatting options for Foreign Word Translation|
|» » french_verbs_ending_in_eler_and_eter|body|string|false|Formatting options for French Verbs Ending In Eler And Eter|
|» » i_and_u_with_circumflex_accents|body|string|false|Formatting options for I And U With Circumflex Accents|
|» » informal_address_pronouns|body|string|false|Formatting options for Informal Address Pronouns|
|» » latin_abbreviations|body|string|false|Formatting options for Latin Abbreviations|
|» » passive_voice|body|string|false|Formatting options for Passive Voice|
|» » past_participle_of_french_word_laisser_followed_by_infinitive|body|string|false|Formatting options for Past Participle Of French Word Laisser Followed By Infinitive|
|» » personal_titles|body|string|false|Formatting options for Personal Titles|
|» » pluralizing_foreign_words|body|string|false|Formatting options for Pluralizing Foreign Words|
|» » quotation_modification|body|string|false|Formatting options for Quotation Modification|
|» » spanish_word_solo|body|string|false|Formatting options for Spanish Word Solo|
|» » special_characters|body|string|false|Formatting options for Special Characters|
|» » spelled_out_numbers|body|string|false|Formatting options for Spelled Out Numbers|
|» » umlauts|body|string|false|Formatting options for Umlauts|
|» » unestablished_loanwords|body|string|false|Formatting options for Unestablished Loanwords|
|» style_and_tone|body|object|false|none|
|» » abbreviations|body|string|false|Formatting options for Abbreviations|
|» » addressing_non_binary_people|body|string|false|Formatting options for Addressing Non Binary People|
|» » addressing_the_reader|body|string|false|Formatting options for Addressing The Reader|
|» » anglicisms|body|string|false|Formatting options for Anglicisms|
|» » binary_representation_of_gender|body|string|false|Formatting options for Binary Representation Of Gender|
|» » complex_sentences|body|string|false|Formatting options for Complex Sentences|
|» » country_names|body|string|false|Formatting options for Country Names|
|» » declarative_endings|body|string|false|Formatting options for Declarative Endings|
|» » default_first_person_pronoun|body|string|false|Formatting options for Default First Person Pronoun|
|» » default_second_person_pronoun|body|string|false|Formatting options for Default Second Person Pronoun|
|» » directional_language|body|string|false|Formatting options for Directional Language|
|» » double_negatives|body|string|false|Formatting options for Double Negatives|
|» » formality|body|string|false|Formatting options for Formality|
|» » gender_neutral_language_readability|body|string|false|Formatting options for Gender Neutral Language Readability|
|» » gender_unspecified|body|string|false|Formatting options for Gender Unspecified|
|» » gender_unspecified_or_mixed|body|string|false|Formatting options for Gender Unspecified Or Mixed|
|» » idioms_colloquialisms_and_culture_specific_references|body|string|false|Formatting options for Idioms Colloquialisms And Culture Specific References|
|» » inflected_words_masculine_noun_agreement|body|string|false|Formatting options for Inflected Words Masculine Noun Agreement|
|» » instructions_style|body|string|false|Formatting options for Instructions Style|
|» » mixing_styles|body|string|false|Formatting options for Mixing Styles|
|» » modal_verbs|body|string|false|Formatting options for Modal Verbs|
|» » personal_vs_impersonal_style|body|string|false|Formatting options for Personal Vs Impersonal Style|
|» » positive_vs_negative_language|body|string|false|Formatting options for Positive Vs Negative Language|
|» » proximity_agreement|body|string|false|Formatting options for Proximity Agreement|
|» » reader_action_required|body|string|false|Formatting options for Reader Action Required|
|» » redundant_introductory_phrases|body|string|false|Formatting options for Redundant Introductory Phrases|
|» » redundant_phrases|body|string|false|Formatting options for Redundant Phrases|
|» » referring_to_non_binary_people|body|string|false|Formatting options for Referring To Non Binary People|
|» » short_vs_long_words|body|string|false|Formatting options for Short Vs Long Words|
|» » simple_words_and_sentences|body|string|false|Formatting options for Simple Words And Sentences|
|» » text_position_references|body|string|false|Formatting options for Text Position References|
|» » tone|body|string|false|Formatting options for Tone|
|» » verbal_vs_nominal_style|body|string|false|Formatting options for Verbal Vs Nominal Style|
|» vocabulary|body|object|false|none|
|» » abbreviations|body|string|false|Formatting options for Abbreviations|
|» » loanwords|body|string|false|Formatting options for Loanwords|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » calendar_era|use_bc_and_ad|
|» » calendar_era|use_bce_and_ce|
|» » centuries|spell_out|
|» » centuries|use_arabic_numerals|
|» » centuries|use_numerals|
|» » centuries|use_roman_numerals|
|» » date_format|use_dd_period_mm_period_yy_with_leading_zeros_for_single_digit_days_and_months|
|» » date_format|use_dd_period_mm_period_yyyy|
|» » date_format|use_dd_period_mm_period_yyyy_with_leading_zeros_for_single_digit_days_and_months|
|» » date_format|use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_feb_period_mrz_period_apr_period_mai_jun_period_jul_period_aug_period_sep_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days|
|» » date_format|use_dd_period_space_abbreviated_month_yyyy_with_abbreviations_jan_period_febr_period_maerz_apr_period_mai_juni_juli_aug_period_sept_period_okt_period_nov_period_dez_period_without_leading_zeros_for_single_digit_days|
|» » date_format|use_dd_period_space_month_yyyy_without_leading_zeros_for_single_digit_days|
|» » date_format|use_dd_slash_mm_slash_yyyy|
|» » date_format|use_dd_slash_mm_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months|
|» » date_format|use_dd_space_spelled_out_month_space_yyyy|
|» » date_format|use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month|
|» » date_format|use_dd_space_spelled_out_month_space_yyyy_and_use_spanish_word_setiembre_for_ninth_month|
|» » date_format|use_dd_space_spelled_out_month_space_yyyy_without_leading_zeros_for_single_digit_days|
|» » date_format|use_historical_eras_and_write_numbers_in_chinese_followed_by_chinese_word_公元前_or_公元后_with_arabic_numerals_in_parentheses|
|» » date_format|use_mm_slash_dd_slash_yyyy_with_leading_zeros_for_single_digit_days_and_months|
|» » date_format|use_numerals_only_with_leading_zero_for_single_digits|
|» » date_format|use_numerals_only_without_leading_zero_for_single_digits|
|» » date_format|use_spelled_out_month_space_dd_comma_space_yyyy_and_use_spanish_word_septiembre_for_ninth_month|
|» » date_format|use_spelled_out_month_space_dd_comma_space_yyyy_without_leading_zeros_for_single_digit_days|
|» » date_format|use_traditional_calendar_system_with_chinese_numbers|
|» » date_format|use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_with_chinese_numbers|
|» » date_format|use_yyyy_chinese_word_年_mm_chinese_word_月_dd_chinese_word_日_without_leading_zero_for_single_digit_months_and_days|
|» » date_format|use_yyyy_hyphen_mm_hyphen_dd_with_leading_zero_for_single_digit_days_and_months|
|» » date_format|use_yyyy_hyphen_mm_hyphen_dd_with_leading_zeros_for_single_digit_days_and_months|
|» » date_format|use_yyyy_korean word_년_space_mm_korean word_월_space_dd_korean word_일_without_leading_zero_for_single_digit_days_and_months|
|» » date_format|use_yyyy_period_mm_period_dd|
|» » date_format|use_yyyy_period_space_mm_period_space_dd_period_space_without_leading_zero_for_single_digit_days_and_months|
|» » date_format|use_yyyy_slash_mm_slash_dd|
|» » date_format|use_yyyy_slash_mm_slash_dd_with_leading_zero_for_single_digit_days_and_months|
|» » dates_in_numerical_form|use_dd_hyphen_mm_hyphen_yyyy|
|» » dates_in_numerical_form|use_dd_period_mm_period_yyyy|
|» » dates_in_numerical_form|use_dd_slash_mm_slash_yyyy|
|» » decades|spell_out|
|» » decades|use_apostrophe_yy|
|» » decades|use_yy_for_20th_century_but_yyyy_for_other_centuries|
|» » decades|use_yy_without_apostrophe|
|» » decades|use_yyyy|
|» » hours_minutes_seconds_separator|use_colon|
|» » hours_minutes_seconds_separator|use_period|
|» » hours_minutes_separator|use_colon_without_spaces|
|» » hours_minutes_separator|use_letter_h_with_regular_space_on_either_side|
|» » hours_minutes_separator|use_letter_h_without_spaces|
|» » midnight_in_numerals|use_00_00|
|» » midnight_in_numerals|use_24_00|
|» » single_digit_days_and_months|do_not_use_leading_zero|
|» » single_digit_days_and_months|use_leading_zero|
|» » single_digit_hours|do_not_use_leading_zero|
|» » single_digit_hours|use_leading_zero|
|» » time_format|spell_out_time_in_words|
|» » time_format|use_12_hour_clock_and_do_not_specify_morning_or_evening|
|» » time_format|use_12_hour_clock_and_lowercase_am_or_pm_with_periods|
|» » time_format|use_12_hour_clock_and_lowercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm|
|» » time_format|use_12_hour_clock_and_lowercase_am_or_pm_without_periods|
|» » time_format|use_12_hour_clock_and_lowercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm|
|» » time_format|use_12_hour_clock_and_specify_morning_or_evening|
|» » time_format|use_12_hour_clock_and_uppercase_am_or_pm_with_periods|
|» » time_format|use_12_hour_clock_and_uppercase_am_or_pm_with_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm|
|» » time_format|use_12_hour_clock_and_uppercase_am_or_pm_without_periods|
|» » time_format|use_12_hour_clock_and_uppercase_am_or_pm_without_periods_except_use_noon_and_midnight_instead_of_12_am_and_12_pm|
|» » time_format|use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals|
|» » time_format|use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_word_点_for_hours|
|» » time_format|use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_arabic_numerals_with_chinese_words_时_and_分_for_hours_and_minutes|
|» » time_format|use_12_hour_clock_and_write_chinese_word_上午_or_下午_or_chinese_word_早上_or_晚上_followed_by_chinese_numbers_with_chinese_words_时_and_分_for_hours_and_minutes|
|» » time_format|use_12_hour_clock_with_arabic_numerals_and_colon|
|» » time_format|use_12_hour_clock_with_korean_words_시_and_분|
|» » time_format|use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_lowercase_am_or_pm_without_periods|
|» » time_format|use_12_hour_clock_without_leading_zero_or_minutes_for_full_hours_use_colon_as_separator_and_uppercase_am_or_pm_without_periods|
|» » time_format|use_12_hour_clock_without_leading_zero_use_period_as_separator_and_lowercase_am_or_pm_with_periods_and_spaces|
|» » time_format|use_24_hour_clock|
|» » time_format|use_24_hour_clock_with_arabic_numerals_and_colon|
|» » time_format|use_24_hour_clock_with_colon_as_separator|
|» » time_format|use_24_hour_clock_with_korean_words_시_and_분|
|» » time_format|use_24_hour_clock_with_period_as_separator|
|» » time_format|use_hh_colon_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours|
|» » time_format|use_hh_colon_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours|
|» » time_format|use_hh_period_mm_german_word_uhr_with_leading_zeros_for_single_digit_hours|
|» » time_format|use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours|
|» » time_format|use_hh_period_mm_german_word_uhr_without_leading_zeros_for_single_digit_hours_and_for_full_hours_state_hour_only|
|» » writing_dates|use_dd_space_spelled_out_month_space_yyyy|
|» » writing_dates|use_numerals|
|» » years|use_apostrophe_yy|
|» » years|use_common_era|
|» » years|use_japanese_imperial_era|
|» » years|use_yyyy|
|» » email_address_format|place_domain_in_parentheses|
|» » email_address_format|replace_at_symbol_with_english_word_at_in_brackets_and_replace_periods_with_english_word_dot_in_brackets|
|» » email_address_format|replace_at_symbol_with_english_word_at_in_brackets_with_space_on_either_side|
|» » email_address_format|replace_at_symbol_with_english_word_at_in_parentheses_with_space_on_either_side|
|» » email_address_format|replace_at_symbol_with_english_word_at_with_space_on_either_side|
|» » email_address_format|use_standard_format|
|» » phone_number_country_code_format|use_00_before_country_code|
|» » phone_number_country_code_format|use_plus_sign_before_country_code|
|» » phone_number_format|do_not_use_spaces|
|» » phone_number_format|do_not_use_spaces_or_special_characters_between_digits_of_phone_number|
|» » phone_number_format|keep_original_format|
|» » phone_number_format|place_area_code_in_parentheses_followed_by_space|
|» » phone_number_format|separate_area_code_and_phone_number_with_slash|
|» » phone_number_format|separate_area_code_and_phone_number_with_space|
|» » phone_number_format|separate_country_code_area_code_local_prefix_and_last_four_digits_with_hyphens|
|» » phone_number_format|separate_country_code_area_code_local_prefix_and_last_four_digits_with_periods|
|» » phone_number_format|separate_country_code_area_code_local_prefix_and_last_four_digits_with_spaces|
|» » phone_number_format|use_north_american_numbering_plan_format|
|» » phone_number_format|use_space_after_country_code|
|» » space_between_arabic_numerals_and_unit|do_not_use|
|» » space_between_chinese_and_english|do_not_use|
|» » space_between_chinese_characters_and_arabic_numerals|do_not_use|
|» » approximate_numbers|use_kanji_numbers|
|» » currency_format|spell_out|
|» » currency_format|spell_out_currency_name_followed_by_amount_in_arabic_numerals_without_space|
|» » currency_format|spell_out_currency_name_followed_by_amount_in_chinese|
|» » currency_format|use_amount_followed_by_currency_symbol_without_space|
|» » currency_format|use_amount_followed_by_space_then_currency_symbol|
|» » currency_format|use_amount_followed_by_space_then_iso_code|
|» » currency_format|use_amount_followed_by_space_then_spell_out_currency_name|
|» » currency_format|use_amount_followed_by_space_then_spell_out_currency_name_in_lowercase|
|» » currency_format|use_amount_followed_by_spelled_out_currency_name_in_japanese_without_space|
|» » currency_format|use_amount_followed_by_spelled_out_currency_name_without_space|
|» » currency_format|use_currency_symbol_but_spell_out_if_no_symbol_exists|
|» » currency_format|use_currency_symbol_but_use_iso_code_if_no_symbol_exists|
|» » currency_format|use_currency_symbol_followed_by_amount_in_arabic_numerals_without_space|
|» » currency_format|use_currency_symbol_followed_by_amount_without_space|
|» » currency_format|use_currency_symbol_followed_by_space_then_amount|
|» » currency_format|use_currency_symbol_followed_by_space_then_amount_in_arabic_numerals|
|» » currency_format|use_full_width_currency_symbol_followed_by_amount_without_space|
|» » currency_format|use_half_width_currency_symbol_followed_by_amount_without_space|
|» » currency_format|use_half_width_currency_symbol_followed_by_space_then_amount|
|» » currency_format|use_iso_code|
|» » currency_format|use_iso_code_followed_by_space_then_amount|
|» » currency_format|use_iso_code_followed_by_space_then_amount_in_arabic_numerals|
|» » decimal_numbers_less_than_one|always_use_0_before_decimal_separator|
|» » decimal_separator|use_comma_and_do_not_use_thousands_separator|
|» » decimal_separator|use_comma_as_decimal_separator|
|» » decimal_separator|use_comma_do_not_use_thousands_separator_and_use_period_only_for_radio_stations|
|» » decimal_separator|use_period_and_do_not_use_thousands_separator|
|» » decimal_separator|use_period_as_decimal_separator|
|» » dimensions_separator|use_multiplication_sign_between_dimensions_with_space_on_either_side|
|» » dimensions_separator|use_multiplication_sign_between_dimensions_without_space_on_either_side|
|» » dimensions_separator|use_x_between_dimensions_with_space_on_either_side|
|» » dimensions_separator|use_x_between_dimensions_without_space_on_either_side|
|» » equation_formula_reference|always_use_arabic_numerals_to_number_equations_or_formulas_referenced_in_text|
|» » kanji_numbers|use_kanji_numbers_for_numbers_in_phrases_and_counting_method_based_on_native_japanese_readings|
|» » large_number_format|always_use_arabic_numerals|
|» » large_number_format|spell_out_large_numbers|
|» » large_number_format|use_abbreviations_for_large_numbers|
|» » large_number_format|use_chinese_characters_for_ten_thousands_and_hundred_millions|
|» » large_number_format|use_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years|
|» » large_number_format|use_kanji_for_trillions_hundred_millions_and_ten_thousands|
|» » large_number_format|use_korean_words_만_억_조_with_space|
|» » large_number_format|use_korean_words_만_억_조_without_space|
|» » large_sums_of_money|spell_out_italian_words_milione_and_miliardo|
|» » large_sums_of_money|use_italian_words_mio_and_mrd_instead_of_italian_words_milione_and_miliardo|
|» » large_sums_of_money_format|use_amount_followed_by_abbreviation_for_million_or_billion_without_space|
|» » large_sums_of_money_format|use_amount_followed_by_space_then_abbreviation_for_million_or_billion|
|» » large_sums_of_money_format|use_amount_followed_by_space_then_english_word_million_or_billion|
|» » list_of_measurements_with_units|repeat_unit_for_each_measurement_in_list|
|» » mathematical_expression_spacing|use_space_between_elements_of_mathematical_expression_or_equation|
|» » number_format|use_half_width_comma_to_separate_large_numbers_into_units_of_three_except_for_calendar_years_and_use_half_width_period_as_decimal_separator|
|» » number_separator|do_not_use_chinese_comma_to_separate_numbers_indicating_approximate_value|
|» » number_separator|use_chinese_comma_to_separate_numbers_in_abbreviations|
|» » numbers_of_5_digits_or_more|use_comma_as_decimal_separator_and_period_as_thousands_separator|
|» » numbers_of_5_digits_or_more|use_comma_as_decimal_separator_and_space_as_thousands_separator|
|» » numbers_of_5_digits_or_more|use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations|
|» » numbers_of_5_digits_or_more|use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations|
|» » numbers_of_5_digits_or_more|use_period_as_decimal_separator_and_comma_as_thousands_separator|
|» » numbers_of_5_digits_or_more|use_period_as_decimal_separator_and_space_as_thousands_separator|
|» » numbers_up_to_4_digits|use_comma_as_decimal_separator_and_period_as_thousands_separator|
|» » numbers_up_to_4_digits|use_comma_as_decimal_separator_and_space_as_thousands_separator|
|» » numbers_up_to_4_digits|use_comma_as_decimal_separator_period_as_thousands_separator_and_period_for_radio_stations|
|» » numbers_up_to_4_digits|use_comma_as_decimal_separator_space_as_thousands_separator_and_period_for_radio_stations|
|» » numbers_up_to_4_digits|use_period_as_decimal_separator_and_comma_as_thousands_separator|
|» » numbers_up_to_4_digits|use_period_as_decimal_separator_and_space_as_thousands_separator|
|» » percentage_format|use_arabic_numerals_followed_by_percent_symbol_without_space|
|» » percentage_format|use_chinese_numbers_followed_by_chinese_word_百分之|
|» » percentage_format|use_numerals_followed_by_full_width_percent_symbol_without_space|
|» » percentage_format|use_numerals_followed_by_japanese_word_パーセント_without_space|
|» » percentage_format|use_numerals_followed_by_korean_word_퍼센트|
|» » percentage_format|use_numerals_followed_by_percent_symbol|
|» » percentage_format|use_numerals_followed_by_space_then_german_word_prozent|
|» » percentage_format|use_numerals_followed_by_space_then_half_width_percent_symbol|
|» » percentage_format|use_numerals_followed_by_space_then_italian_word_per_cento|
|» » percentage_format|use_numerals_followed_by_space_then_italian_word_percento|
|» » percentage_format|use_numerals_followed_by_space_then_korean_word_퍼센트|
|» » percentage_format|use_numerals_followed_by_space_then_percent_symbol|
|» » percentage_format|use_numerals_followed_by_space_then_spell_out_per_cent|
|» » percentage_format|use_numerals_followed_by_space_then_spell_out_percent|
|» » percentage_format|use_spanish_word_por_cien|
|» » percentage_format|use_spanish_word_por_ciento|
|» » reference_to_symbol|spell_out_symbol_name_followed_by_symbol_in_parentheses|
|» » spelling_out_units|abbreviate_units_of_measure_when_used_with_numeral_but_spell_out_when_used_without_numeral|
|» » spelling_out_units|always_abbreviate_units_of_measure|
|» » spelling_out_units|always_spell_out_units_of_measure|
|» » spelling_out_units|spell_out_units_in_korean|
|» » spelling_out_units|spell_out_units_of_measure_when_used_with_spelled_out_numbers_but_abbreviate_when_used_with_numeral|
|» » spelling_out_units|spell_out_units_of_measure_with_katakana_or_katakana_and_kanji|
|» » spelling_out_units|use_si_symbols|
|» » spelling_out_units|use_unit_symbols|
|» » temperature_format|spell_out_unit|
|» » temperature_format|spell_out_unit_followed_by_numerals_then_korean_word_도|
|» » temperature_format|use_arabic_numerals_followed_by_space_then_spell_out_unit|
|» » temperature_format|use_arabic_numerals_followed_by_unit_symbol_without_space|
|» » temperature_format|use_arabic_numerals_then_spell_out_unit|
|» » temperature_format|use_chinese_numbers_then_spell_out_unit|
|» » temperature_format|use_italian_word_grado_and_do_not_specify_temperature_scale|
|» » temperature_format|use_numerals_followed_by_japanese_word_度_without_space|
|» » temperature_format|use_numerals_followed_by_korean_word_도|
|» » temperature_format|use_numerals_followed_by_space_then_spell_out_unit|
|» » temperature_format|use_numerals_followed_by_space_then_unit_symbol|
|» » temperature_format|use_numerals_followed_by_unit_symbol_without_space|
|» » temperature_format|use_spanish_word_grado_and_do_not_specify_temperature_scale|
|» » thousands_separator|do_not_use|
|» » thousands_separator|do_not_use_thousands_separator|
|» » thousands_separator|use_comma|
|» » thousands_separator|use_comma_to_separate_large_numbers_into_units_of_three|
|» » thousands_separator|use_period|
|» » thousands_separator|use_period_as_thousands_separator|
|» » thousands_separator|use_space|
|» » thousands_separator|use_space_as_thousands_separator|
|» » thousands_separator|use_space_to_separate_large_numbers_into_units_of_three|
|» » thousands_separator|use_straight_apostrophe_as_thousands_separator|
|» » units_of_measure_spacing|do_not_use_space_between_numeral_and_unit_of_measure|
|» » units_of_measure_spacing|use_space_between_numeral_and_unit_of_measure|
|» » use_of_hiragana_and_kanji|use_hiragana_japanese_word_か所_or_か月_when_using_arabic_numerals_in_horizontal_writing_but_use_kanji_japanese_word_箇所_or_箇月_when_using_kanji_numbers|
|» » writing_numbers|always_use_kanji_numbers|
|» » writing_numbers|use_arabic_numerals|
|» » writing_numbers|use_full_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural|
|» » writing_numbers|use_half_width_arabic_numerals_and_only_use_kanji_numbers_where_it_would_otherwise_sound_unnatural|
|» » zero_format|use_chinese_word_〇_for_numbering|
|» » zero_format|use_chinese_word_零_for_measurement|
|» » abbreviations|do_not_separate_abbreviated_words|
|» » abbreviations|separate_each_abbreviated_word_with_period_and_space|
|» » abbreviations|separate_each_abbreviated_word_with_period_without_space|
|» » abbreviations|separate_each_abbreviated_word_with_space_without_period|
|» » acronyms|do_not_use_periods|
|» » ampersand_abbreviation_spacing|do_not_use_spaces_before_and_after_ampersand_as_part_of_abbreviation|
|» » ampersand_abbreviation_spacing|use_spaces_before_and_after_ampersand_as_part_of_abbreviation|
|» » ampersand_usage|use_english_word_and_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations|
|» » ampersand_usage|use_full_width_ampersand|
|» » ampersand_usage|use_german_word_und_except_in_company_names_common_abbreviations_titles_software_code_and_mathematical_equations|
|» » ampersand_usage|use_half_width_ampersand|
|» » apostrophe|use_curly_apostrophes|
|» » apostrophe|use_straight_apostrophes|
|» » bracket|use_hexagonal_brackets|
|» » bracket|use_lenticular_brackets|
|» » bracket|use_parentheses|
|» » bracket|use_square_brackets_for_nationality_and_hexagonal_brackets_for_historical_period|
|» » chinese_mixed_with_english|do_not_place_english_in_quotation_marks|
|» » chinese_mixed_with_english|place_english_in_quotation_marks|
|» » colon|use_full_width_colon|
|» » colon|use_half_width_colon|
|» » colon_between_hours_and_minutes_or_chapters_and_verses|do_not_use_space_before_or_after_colon|
|» » colon_in_heading|use_space_after_colon_not_before|
|» » colon_to_replace_versus_or_to|do_not_use_space_before_or_after_colon|
|» » comma_after_conjunctive_adverbs|do_not_use|
|» » comma_after_conjunctive_adverbs|use|
|» » comma_after_i_e_and_e_g|do_not_use|
|» » comma_after_i_e_and_e_g|use|
|» » comma_after_short_introductory_phrase|do_not_use|
|» » comma_after_short_introductory_phrase|use|
|» » comma_and_semicolon|use_comma_between_clauses|
|» » comma_and_semicolon|use_semicolon_between_clauses|
|» » corner_bracket_and_periods|add_period_after_closing_corner_bracket_at_end_of_sentence|
|» » corner_brackets_and_periods|do_not_add_period_before_closing_corner_bracket_when_sentence_continues|
|» » dash|use_em_dash|
|» » dash|use_hyphen|
|» » dash|use_tilde|
|» » ellipsis|use_ellipsis_character|
|» » ellipsis|use_one_ellipsis_character|
|» » ellipsis|use_six_dots_at_the_bottom|
|» » ellipsis|use_six_dots_in_the_center|
|» » ellipsis|use_three_dots_at_the_bottom|
|» » ellipsis|use_three_dots_in_the_center|
|» » ellipsis|use_three_ellipsis_characters|
|» » ellipsis|use_three_periods|
|» » ellipsis|use_three_periods_without_spaces|
|» » ellipsis|use_three_spaced_periods|
|» » ellipsis|use_two_ellipsis_characters|
|» » em_dash|use_double_em_dash|
|» » emphasis|use_double_corner_brackets|
|» » exclamation_marks|do_not_use|
|» » explanatory_note_indicator|use_double_em_dash|
|» » explanatory_note_indicator|use_parentheses|
|» » full_sentence_in_round_brackets|add_period_before_closing_round_bracket|
|» » highlighting_specific_expressions|use_single_curly_quotation_marks|
|» » highlighting_specific_expressions|use_single_straight_quotation_marks|
|» » japanese_reference_materials|use_double_corner_brackets|
|» » parentheses_for_supplementary_information|use_parentheses_without_space_on_either_side|
|» » passage_of_time_and_movement_between_locations|use_double_em_dash|
|» » periods_and_commas|use_full_width_japanese_periods_and_full_width_japanese_commas|
|» » periods_and_commas|use_full_width_japanese_periods_and_full_width_non_japanese_commas|
|» » periods_and_commas|use_full_width_non_japanese_periods_and_full_width_japanese_commas|
|» » periods_and_commas|use_full_width_non_japanese_periods_and_full_width_non_japanese_commas|
|» » periods_in_academic_degrees|do_not_use|
|» » periods_in_academic_degrees|use|
|» » periods_in_direct_quotes|do_not_use|
|» » periods_in_direct_quotes|use|
|» » periods_in_uppercase_initialisms_and_acronyms|do_not_use|
|» » plus_sign_usage|do_not_use_plus_sign_to_symbolize_english_word_and_unless_it_is_part_of_a_proper_noun|
|» » possessives_of_proper_names_ending_in_s_style|add_apostrophe_only|
|» » possessives_of_proper_names_ending_in_s_style|add_apostrophe_s|
|» » quotation_mark|use_curly_quotation_marks|
|» » quotation_mark|use_double_curly_quotation_marks|
|» » quotation_mark|use_double_straight_quotation_marks|
|» » quotation_mark|use_guillemets|
|» » quotation_mark|use_straight_quotation_marks|
|» » quotation_mark_and_apostrophe|use_curly_quotation_marks_and_apostrophes|
|» » quotation_mark_and_apostrophe|use_double_and_single_curly_quotation_marks_and_curly_apostrophes|
|» » quotation_mark_and_apostrophe|use_double_and_single_straight_quotation_marks_and_straight_apostrophes|
|» » quotation_mark_and_apostrophe|use_guillemets_and_curly_apostrophes|
|» » quotation_mark_and_apostrophe|use_guillemets_and_straight_apostrophes|
|» » quotation_mark_and_apostrophe|use_straight_quotation_marks_and_apostrophes|
|» » quotation_style|use_corner_brackets_for_primary_quotations_and_double_corner_brackets_for_secondary_quotations|
|» » quotation_style|use_double_curly_quotation_marks_for_primary_quotations_and_single_curly_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_double_curly_quotation_marks_for_primary_quotations_then_alternate_with_single_curly_quotation_marks_for_nested_quotations|
|» » quotation_style|use_double_german_quotation_marks_for_primary_quotations_and_single_german_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_double_quotation_marks_for_primary_quotations_and_single_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_double_straight_quotation_marks_for_primary_quotations_and_single_straight_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_double_straight_quotation_marks_for_primary_quotations_then_alternate_with_single_straight_quotation_marks_for_nested_quotations|
|» » quotation_style|use_guillemets_for_primary_quotations_and_double_curly_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_guillemets_for_primary_quotations_and_double_straight_quotation_marks_for_secondary_quotations|
|» » quotation_style|use_guillemets_for_primary_quotations_and_single_guillemets_for_secondary_quotations|
|» » quotation_style|use_guillemets_for_primary_quotations_double_curly_quotation_marks_for_secondary_quotations_and_single_curly_quotation_marks_for_further_nested_quotations|
|» » quotation_style|use_reversed_guillemets_for_primary_quotations_and_single_reversed_guillemets_for_secondary_quotations|
|» » quotation_style|use_single_quotation_marks_for_primary_quotations_and_double_quotation_marks_for_secondary_quotations|
|» » range_indicator|use_en_dash_with_spaces|
|» » range_indicator|use_en_dash_without_space_on_either_side|
|» » range_indicator|use_en_dash_without_spaces|
|» » range_indicator|use_english_word_to|
|» » range_indicator|use_full_width_dash|
|» » range_indicator|use_full_width_wave_dash|
|» » range_indicator|use_german_word_bis|
|» » range_indicator|use_half_width_dash|
|» » range_indicator|use_hyphen|
|» » range_indicator|use_hyphen_with_space_on_either_side|
|» » range_indicator|use_hyphen_with_spaces|
|» » range_indicator|use_hyphen_without_space_on_either_side|
|» » range_indicator|use_hyphen_without_spaces|
|» » range_indicator|use_italian_words_da_a|
|» » range_indicator|use_japanese_word_から|
|» » range_indicator|use_korean_words_부터_까지|
|» » range_indicator|use_spanish_words_de_a|
|» » range_indicator|use_tilde|
|» » related_phrases_indicator|use_comma|
|» » related_phrases_indicator|use_hyphen|
|» » related_phrases_indicator|use_middle_dot|
|» » round_brackets|use_full_width_round_brackets|
|» » round_brackets|use_half_width_round_brackets|
|» » salutation|do_not_use_comma_after_salutation_capitalize_following_word|
|» » salutation|use_colon_after_salutation|
|» » salutation|use_comma_after_salutation|
|» » salutation|use_exclamation_mark_after_salutation|
|» » sentence_break_indicator|use_em_dash_with_space_on_either_side|
|» » sentence_break_indicator|use_em_dash_without_space_on_either_side|
|» » sentence_break_indicator|use_en_dash_with_space_on_either_side|
|» » serial_comma|do_not_use|
|» » serial_comma|do_not_use_serial_comma_when_using_chinese_comma|
|» » serial_comma|use|
|» » serial_comma|use_serial_comma_when_using_comma|
|» » setting_off_non_quoted_phrases|use_full_width_quotation_marks|
|» » setting_off_non_quoted_phrases|use_half_width_quotation_marks|
|» » slash|do_not_use_spaces_before_and_after_slashes|
|» » slash|use_spaces_before_and_after_slashes|
|» » slash|use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_and_after_slash|
|» » slash|use_spaces_before_and_after_slashes_if_there_are_multiple_words_before_or_after_slash|
|» » slash_usage|do_not_use_slash_to_symbolize_english_word_or|
|» » spacing_and_punctuation|do_not_use_space|
|» » spacing_and_punctuation|use_regular_space|
|» » text_in_round_brackets_referring_to_previous_sentence|add_period_after_closing_round_bracket|
|» » text_in_round_brackets_referring_to_previous_sentence|add_period_before_closing_round_bracket|
|» » text_in_round_brackets_supplementing_preceding_text|add_period_after_closing_round_bracket|
|» » titles_of_books_and_newspapers|use_double_angle_brackets|
|» » titles_of_books_and_newspapers|use_double_corner_brackets|
|» » titles_of_books_and_newspapers|use_double_straight_quotation_marks|
|» » titles_of_creative_works_trade_names_laws_and_regulations|use_single_angle_brackets|
|» » titles_of_creative_works_trade_names_laws_and_regulations|use_single_corner_brackets|
|» » titles_of_creative_works_trade_names_laws_and_regulations|use_single_straight_quotation_marks|
|» » uppercase_acronyms|do_not_use_spaces|
|» » uppercase_acronyms|use_spaces|
|» » abbreviating_french_word_numero|abbreviate_as_n_then_degree_symbol|
|» » abbreviating_french_word_numero|abbreviate_as_n_then_o_in_superscript|
|» » abbreviating_french_word_numero|abbreviate_as_no|
|» » abbreviation_usage|do_not_use_abbreviations|
|» » abbreviation_usage|do_not_use_abbreviations_unless_necessary|
|» » abbreviation_usage|use_abbreviations|
|» » abbreviation_usage|use_abbreviations_as_needed|
|» » accents_and_cedillas|do_not_use_on_capital_letters|
|» » accents_and_cedillas|never_use|
|» » accents_and_cedillas|use_even_on_capital_letters|
|» » accents_in_verbs_conjugated_like_french_word_céder|use_acute_accent|
|» » accents_in_verbs_conjugated_like_french_word_céder|use_grave_accent|
|» » accents_with_subject_verb_inversion|use_acute_accent|
|» » accents_with_subject_verb_inversion|use_grave_accent|
|» » active_passive_voice|use_active_voice_if_subject_is_prominent_and_agent_is_clear|
|» » active_passive_voice|use_active_voice_to_describe_operations_with_user_as_subject|
|» » active_passive_voice|use_active_voice_unless_agent_is_unknown_or_irrelevant|
|» » active_passive_voice|use_passive_voice_as_needed|
|» » active_passive_voice|use_passive_voice_for_automatic_operations_from_user_perspective|
|» » active_passive_voice|use_passive_voice_if_agent_is_unknown_or_irrelevant|
|» » all_caps|do_not_use_all_caps_except_for_acronyms_initialisms_or_proper_nouns|
|» » all_caps|do_not_use_all_caps_except_for_acronyms_or_brand_names|
|» » complete_sentences|always_write_complete_sentences|
|» » compound_nouns|write_as_one_word|
|» » compound_nouns|write_with_hyphen|
|» » conjunctions|never_start_sentence_with_coordinating_conjunction|
|» » contractions|do_not_use_contractions|
|» » contractions|use_contractions|
|» » contractions|use_contractions_but_avoid_negative_contractions|
|» » established_loanwords|use_as_is|
|» » established_loanwords|use_native_or_sino_korean_equivalents|
|» » eszett|replace_eszett_with_ss|
|» » foreign_word_translation|use_equivalent_expressions_in_chinese|
|» » foreign_word_translation|use_foreign_forms_or_abbreviations_for_technical_terms_or_brand_names|
|» » foreign_word_translation|use_literal_translation|
|» » foreign_word_translation|use_localized_names_for_brands_with_official_chinese_translations|
|» » foreign_word_translation|use_mixture_of_transliteration_and_translation|
|» » foreign_word_translation|use_transliteration|
|» » french_verbs_ending_in_eler_and_eter|transcribe_open_e_sound_by_doubling_next_consonant|
|» » french_verbs_ending_in_eler_and_eter|transcribe_open_e_sound_with_grave_accent|
|» » i_and_u_with_circumflex_accents|do_not_use_circumflex_accents_except_in_verbs_and_to_distinguish_homophones|
|» » i_and_u_with_circumflex_accents|use_circumflex_accents|
|» » informal_address_pronouns|capitalize_informal_address_pronouns|
|» » informal_address_pronouns|do_not_capitalize_informal_address_pronouns|
|» » latin_abbreviations|do_not_use_latin_abbreviations|
|» » passive_voice|avoid_passive_voice_when_agent_is_known|
|» » past_participle_of_french_word_laisser_followed_by_infinitive|make_french_word_laisser_agree_with_direct_object_complement_if_it_appears_before_verb|
|» » past_participle_of_french_word_laisser_followed_by_infinitive|use_invariable_form_french_word_laissé|
|» » personal_titles|abbreviate|
|» » personal_titles|do_not_abbreviate|
|» » pluralizing_foreign_words|use_french_spelling_rules|
|» » pluralizing_foreign_words|use_original_language_spelling|
|» » quotation_modification|do_not_modify_text_in_quotation_marks|
|» » quotation_modification|modify_text_in_quotation_marks_according_to_custom_rules|
|» » spanish_word_solo|never_use_acute_accent|
|» » spanish_word_solo|use_acute_accent_when_used_as_adverb|
|» » special_characters|never_use_symbols|
|» » spelled_out_numbers|use_hyphens|
|» » spelled_out_numbers|use_hyphens_between_elements_under_100_and_not_separated_by_french_word_et|
|» » umlauts|replace_umlauts_with_ae_oe_ue|
|» » unestablished_loanwords|paraphrase_in_korean|
|» » unestablished_loanwords|use_as_is|
|» » unestablished_loanwords|use_as_is_with_explanation_in_parentheses|
|» » abbreviations|avoid_abbreviations_and_symbols_that_can_be_spelled_out_easily|
|» » abbreviations|use_abbreviations_and_symbols|
|» » addressing_non_binary_people|use_spanish_word_elle|
|» » addressing_non_binary_people|use_spanish_word_ellx|
|» » addressing_the_reader|use_formal_french_word_vous|
|» » addressing_the_reader|use_formal_italian_word_lei|
|» » addressing_the_reader|use_informal_french_word_tu|
|» » addressing_the_reader|use_informal_italian_word_tu|
|» » anglicisms|avoid_anglicisms_when_there_is_a_french_equivalent|
|» » binary_representation_of_gender|avoid_binary_representation_of_gender_when_gender_neutral_language_can_be_used|
|» » binary_representation_of_gender|replace_binary_representations_of_gender_with_gender_neutral_language|
|» » binary_representation_of_gender|use_neutral_pronouns|
|» » complex_sentences|avoid_unnecessarily_complex_sentences|
|» » country_names|use_long_form|
|» » country_names|use_short_form|
|» » declarative_endings|mix_hapsho_and_haeyo_styles|
|» » declarative_endings|use_hae_style|
|» » declarative_endings|use_haeyo_style|
|» » declarative_endings|use_hapsho_style|
|» » declarative_endings|use_hara_style|
|» » default_first_person_pronoun|do_not_use_first_person_pronouns|
|» » default_first_person_pronoun|omit_first_person_subject_when_clear_from_context|
|» » default_first_person_pronoun|use_first_person_pronouns|
|» » default_second_person_pronoun|do_not_use_second_person_pronouns|
|» » default_second_person_pronoun|use_second_person_pronouns|
|» » directional_language|do_not_use_directional_language|
|» » double_negatives|do_not_use_double_negatives|
|» » double_negatives|use_double_negatives|
|» » formality|use_casual_tone|
|» » formality|use_formal_tone|
|» » gender_neutral_language_readability|use_generic_masculine_for_common_compound_nouns_if_it_increases_readability|
|» » gender_unspecified|use_both_masculine_and_feminine_forms|
|» » gender_unspecified|use_gender_neutral_terms|
|» » gender_unspecified|use_masculine_form_only|
|» » gender_unspecified|use_middle_dots|
|» » gender_unspecified|use_parentheses|
|» » gender_unspecified|use_periods|
|» » gender_unspecified_or_mixed|use_both_feminine_and_masculine_forms|
|» » gender_unspecified_or_mixed|use_feminine_form_only|
|» » gender_unspecified_or_mixed|use_inclusive_nouns_and_adjectives|
|» » gender_unspecified_or_mixed|use_masculine_form_only|
|» » gender_unspecified_or_mixed|use_neutral_nouns_and_adjectives|
|» » idioms_colloquialisms_and_culture_specific_references|do_not_use|
|» » inflected_words_masculine_noun_agreement|place_masculine_nouns_closest_to_inflected_words|
|» » instructions_style|use_imperative|
|» » instructions_style|use_indicative|
|» » instructions_style|use_infinitive|
|» » instructions_style|use_modal_verbs|
|» » instructions_style|use_passive_voice|
|» » mixing_styles|do_not_mix_desu_masu_style_and_dearu_style|
|» » modal_verbs|avoid_modal_verbs|
|» » personal_vs_impersonal_style|use_impersonal_style|
|» » personal_vs_impersonal_style|use_personal_style|
|» » positive_vs_negative_language|use_positive_language|
|» » proximity_agreement|use|
|» » reader_action_required|use_you_must_when_action_is_required_from_reader|
|» » redundant_introductory_phrases|avoid_redundant_introductory_phrases|
|» » redundant_introductory_phrases|do_not_use_redundant_phrases_that_refer_to_current_text|
|» » redundant_phrases|avoid_relativizing_and_redundant_phrases|
|» » redundant_phrases|do_not_use_redundant_phrases|
|» » referring_to_non_binary_people|use_the_singular_and_plural_schwa|
|» » short_vs_long_words|use_short_words|
|» » simple_words_and_sentences|use_simple_words_and_sentences_avoid_hard_to_translate_words_and_figures_of_speech|
|» » text_position_references|avoid_directional_terms_as_only_reference_to_position_in_text_specify_exact_position_instead|
|» » tone|use_dearu_style_to_give_impression_content_is_accurate_and_rigorous_or_to_convey_sense_of_confidence_and_reliability|
|» » tone|use_desu_masu_style_to_give_impression_content_is_plain_and_straightforward_or_to_give_reader_reassuring_or_soft_impression|
|» » verbal_vs_nominal_style|use_nominal_style|
|» » verbal_vs_nominal_style|use_verbal_style|
|» » abbreviations|write_original_term_then_abbreviation_and_explanation|
|» » loanwords|add_explanation_to_loanword_if_difficult_to_rephrase|
|» » loanwords|rephrase_loanword_in_daily_use_chinese_or_japanese_words_if_possible|
|» » loanwords|rephrase_loanword_with_another_expression_if_not_established|
|» » loanwords|use_loanword_as_is_if_well_established|

> Example responses

> 200 Response

```json
{
  "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
  "name": "string",
  "creation_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "language": "ar",
  "version": 13,
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="replace-configured-rules-for-a-style-rule-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configured rules updated successfully|[StyleRuleList](#schemastylerulelist)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="replace-configured-rules-for-a-style-rule-list-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create a custom instruction

<a id="opIdcreateCustomInstruction"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string/custom_instructions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "label": "Currency custom instruction",
    "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)"
  }'
```

`POST /v3/style_rules/{style_id}/custom_instructions`

Add a custom instruction to a style rule list to express a style preference that the
predefined rules do not cover. Instructions apply to text in the given source language.

> Body parameter

```json
{
  "label": "Currency custom instruction",
  "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)"
}
```

<h3 id="create-a-custom-instruction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|body|body|object|true|none|
|» label|body|string|true|Label for the custom instruction|
|» prompt|body|string|true|Instruction text|
|» source_language|body|string|false|Optional source language code|

> Example responses

> 201 Response

```json
{
  "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
  "label": "Currency custom instruction",
  "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
  "source_language": "en"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 456 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="create-a-custom-instruction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Custom instruction created successfully|[CustomInstruction](#schemacustominstruction)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|456|456|Quota exceeded. The character limit has been reached.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="create-a-custom-instruction-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get a custom instruction

<a id="opIdgetCustomInstruction"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string/custom_instructions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v3/style_rules/{style_id}/custom_instructions/{instruction_id}`

Retrieve a single custom instruction from a style rule list.

<h3 id="get-a-custom-instruction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|instruction_id|path|string|true|The ID of the custom instruction|

> Example responses

> 200 Response

```json
{
  "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
  "label": "Currency custom instruction",
  "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
  "source_language": "en"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="get-a-custom-instruction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom instruction details|[CustomInstruction](#schemacustominstruction)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="get-a-custom-instruction-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Replace a custom instruction

<a id="opIdupdateCustomInstruction"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string/custom_instructions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "label": "string",
    "prompt": "string",
    "source_language": "string"
  }'
```

`PUT /v3/style_rules/{style_id}/custom_instructions/{instruction_id}`

Replace a custom instruction. Send every field you want to keep, because omitted
fields are overwritten.

> Body parameter

```json
{
  "label": "string",
  "prompt": "string",
  "source_language": "string"
}
```

<h3 id="replace-a-custom-instruction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|instruction_id|path|string|true|The ID of the custom instruction|
|body|body|object|true|none|
|» label|body|string|true|Updated label for the custom instruction|
|» prompt|body|string|true|Updated instruction text|
|» source_language|body|string|false|Optional source language code|

> Example responses

> 200 Response

```json
{
  "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
  "label": "Currency custom instruction",
  "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
  "source_language": "en"
}
```

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="replace-a-custom-instruction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom instruction updated successfully|[CustomInstruction](#schemacustominstruction)|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="replace-a-custom-instruction-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Delete a custom instruction

<a id="opIddeleteCustomInstruction"></a>

> Code samples

```bash
curl https://api.deepl.com/v3/style_rules/string/custom_instructions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v3/style_rules/{style_id}/custom_instructions/{instruction_id}`

Delete a custom instruction from a style rule list. The rest of the list is unchanged.

<h3 id="delete-a-custom-instruction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|style_id|path|string|true|The ID of the style rule list|
|instruction_id|path|string|true|The ID of the custom instruction|

> Example responses

> 400 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 401 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 403 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 404 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

> 503 Response

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

<h3 id="delete-a-custom-instruction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Custom instruction deleted successfully|None|
|400|Bad Request|Bad request. Please check error message and your parameters.|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header.|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Authorization failed. Please supply a valid `DeepL-Auth-Key` via the `Authorization` header. This error is also returned when the API key is scoped but does not include the scope required for this endpoint.|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|The requested resource could not be found.|[ErrorResponse](#schemaerrorresponse)|
|429|Too Many Requests|Too many requests. Please wait and resend your request.|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal error.|Inline|
|503|Service Unavailable|Resource currently unavailable. Try again later.|Inline|

<h3 id="delete-a-custom-instruction-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ErrorResponse](#schemaerrorresponse)|false|none|none|
|*oneOf*|[InfrastructureErrorResponse](#schemainfrastructureerrorresponse)|false|none|Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.<br>|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Trace-ID|string||A unique identifier for the request that can be included in bug reports to DeepL support.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_ApiKeyId">ApiKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyid"></a>
<a id="schema_ApiKeyId"></a>
<a id="tocSapikeyid"></a>
<a id="tocsapikeyid"></a>

```json
"ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38"
```

API key ID. Consists of two valid GUIDs separated by a colon.

<h2 id="tocS_ApiKeyLabel">ApiKeyLabel</h2>
<!-- backwards compatibility -->
<a id="schemaapikeylabel"></a>
<a id="schema_ApiKeyLabel"></a>
<a id="tocSapikeylabel"></a>
<a id="tocsapikeylabel"></a>

```json
"developer key prod"
```

API key label. The default value is `DeepL API Key`.

<h2 id="tocS_ApiKeyUsageCharacters">ApiKeyUsageCharacters</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyusagecharacters"></a>
<a id="schema_ApiKeyUsageCharacters"></a>
<a id="tocSapikeyusagecharacters"></a>
<a id="tocsapikeyusagecharacters"></a>

```json
5000
```

Restricts the number of total characters (across text translation, document translation, and text improvement) that can be consumed by an API key in a one-month usage period.

Setting the limit to `0` means the API key will not be able to consume characters.
Setting the limit to `null` disables the limit, effectively allowing unlimited usage.

<h2 id="tocS_ApiKeyUsageSpeechToTextMilliseconds">ApiKeyUsageSpeechToTextMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyusagespeechtotextmilliseconds"></a>
<a id="schema_ApiKeyUsageSpeechToTextMilliseconds"></a>
<a id="tocSapikeyusagespeechtotextmilliseconds"></a>
<a id="tocsapikeyusagespeechtotextmilliseconds"></a>

```json
3600000
```

Restricts the number of milliseconds of speech-to-text that can be consumed by an API key in a one-month usage period.
Setting the limit to `0` means the API key will not be able to consume speech-to-text milliseconds.
Setting the limit to `null` disables the limit, effectively allowing unlimited usage.

<h2 id="tocS_ApiKeyUsageSpeechToSpeechMilliseconds">ApiKeyUsageSpeechToSpeechMilliseconds</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyusagespeechtospeechmilliseconds"></a>
<a id="schema_ApiKeyUsageSpeechToSpeechMilliseconds"></a>
<a id="tocSapikeyusagespeechtospeechmilliseconds"></a>
<a id="tocsapikeyusagespeechtospeechmilliseconds"></a>

```json
3600000
```

Restricts the number of milliseconds of speech-to-speech that can be consumed by an API key in a one-month usage period.
Setting the limit to `0` means the API key will not be able to consume speech-to-speech milliseconds.
Setting the limit to `null` disables the limit, effectively allowing unlimited usage.

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "key_id": "ca7d5694-96eb-4263-a9a4-7f7e4211529e:20c2abcf-4c3c-4cd6-8ae8-8bd2a7d4da38",
  "label": "developer key prod",
  "creation_time": "2025-07-08T08:15:29.362Z",
  "deactivated_time": "2025-07-09T08:15:29.362Z",
  "is_deactivated": true,
  "usage_limits": {
    "characters": 5000,
    "speech_to_text_milliseconds": 3600000,
    "speech_to_speech_milliseconds": 3600000
  }
}
```

The API key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key_id|[ApiKeyId](#schemaapikeyid)|false|none|API key ID. Consists of two valid GUIDs separated by a colon.|
|label|[ApiKeyLabel](#schemaapikeylabel)|false|none|API key label. The default value is `DeepL API Key`.|
|creation_time|string|false|none|Timestamp when the key was created (ISO 8601 format)|
|deactivated_time|string|false|none|Timestamp when the key was deactivated (ISO 8601 format). The default value is `null`.|
|is_deactivated|boolean|false|none|Flag indicating whether the API key is deactivated. The default value is `false`.|
|usage_limits|object|false|none|Usage limits for the API key.|

<h2 id="tocS_ConfiguredRules">ConfiguredRules</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguredrules"></a>
<a id="schema_ConfiguredRules"></a>
<a id="tocSconfiguredrules"></a>
<a id="tocsconfiguredrules"></a>

```json
{
  "style_and_tone": {
    "abbreviations": "use_abbreviations_and_symbols",
    "short_vs_long_words": "use_short_words"
  },
  "punctuation": {
    "apostrophe": "use_curly_apostrophes"
  }
}
```

The enabled rules for the style rule list including what option was selected for each rule. This schema combines rules from all supported languages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dates_and_times|object|false|none|none|
|formatting|object|false|none|none|
|numbers|object|false|none|none|
|punctuation|object|false|none|none|
|spelling_and_grammar|object|false|none|none|
|style_and_tone|object|false|none|none|
|vocabulary|object|false|none|none|

<h2 id="tocS_Context">Context</h2>
<!-- backwards compatibility -->
<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
"This is context."
```

Additional context that can influence a translation but is not translated itself.

Characters included in the `context` parameter will not be counted toward billing.

<h2 id="tocS_CreateGlossaryParameters">CreateGlossaryParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreateglossaryparameters"></a>
<a id="schema_CreateGlossaryParameters"></a>
<a id="tocScreateglossaryparameters"></a>
<a id="tocscreateglossaryparameters"></a>

```json
{
  "name": "My Glossary",
  "source_lang": "en",
  "target_lang": "de",
  "entries": "Hello\tGuten Tag",
  "entries_format": "tsv"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name to be associated with the glossary.|
|source_lang|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|true|none|The language in which the source texts in the glossary are specified.|
|target_lang|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|true|none|The language in which the target texts in the glossary are specified.|
|entries|string|true|none|The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.|
|entries_format|string|true|none|The format in which the glossary entries are provided. Formats currently available:<br>- `tsv` (default) - tab-separated values<br>- `csv` - comma-separated values<br><br>See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.|

#### Enumerated Values

|Property|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|
|entries_format|tsv|
|entries_format|csv|

<h2 id="tocS_CreateMultilingualGlossaryParameters">CreateMultilingualGlossaryParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultilingualglossaryparameters"></a>
<a id="schema_CreateMultilingualGlossaryParameters"></a>
<a id="tocScreatemultilingualglossaryparameters"></a>
<a id="tocscreatemultilingualglossaryparameters"></a>

```json
{
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entries": "Hello\tGuten Tag",
      "entries_format": "tsv",
      "entry_count": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name to be associated with the glossary.|
|dictionaries|[[GlossaryDictionary](#schemaglossarydictionary)]|true|none|Dictionaries to populate the glossary with.|

<h2 id="tocS_CustomInstruction">CustomInstruction</h2>
<!-- backwards compatibility -->
<a id="schemacustominstruction"></a>
<a id="schema_CustomInstruction"></a>
<a id="tocScustominstruction"></a>
<a id="tocscustominstruction"></a>

```json
{
  "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
  "label": "Currency custom instruction",
  "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
  "source_language": "en"
}
```

All enabled custom instructions for the style rule list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the custom instruction|
|label|string|true|none|Name associated with the custom instruction|
|prompt|string|true|none|Prompt of the custom instruction|
|source_language|string|false|none|Optional source language of the custom instruction|

<h2 id="tocS_StyleProfile">StyleProfile</h2>
<!-- backwards compatibility -->
<a id="schemastyleprofile"></a>
<a id="schema_StyleProfile"></a>
<a id="tocSstyleprofile"></a>
<a id="tocsstyleprofile"></a>

```json
{
  "style_profile_id": "3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47",
  "name": "Legal, German",
  "description": "Contract wording for the German market.",
  "industry": "Legal",
  "glossary_ids": [
    "4d0a2e1c-6b93-4f7a-8d15-2c6e9a3b7f81"
  ],
  "style_rule_ids": [
    "bd0a38f3-1831-440b-a8dd-2c702e2325ab"
  ],
  "translation_memory_ids": [
    "a74d88fb-ed2a-4943-a664-a4512398b994"
  ],
  "glossary_priority_order_enabled": true,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-08-06T09:12:44.108Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|style_profile_id|[StyleProfileId](#schemastyleprofileid)|true|none|A unique ID assigned to a style profile.|
|name|string|true|none|Name associated with the style profile. At most 255 characters.|
|description|string|false|none|Free-text description of the style profile. At most 1000 characters. Omitted from the response<br>when the style profile has no description.|
|industry|string|false|none|The industry the style profile is written for. At most 255 characters. Omitted from the response<br>when the style profile has no industry.|
|glossary_ids|[string(uuid)]|true|none|The IDs of the glossaries linked to the style profile, highest priority first. The order only<br>takes effect with `glossary_priority_order_enabled`.|
|style_rule_ids|[string(uuid)]|true|none|The IDs of the style rule lists linked to the style profile. A style profile links at most one<br>style rule list per target language.|
|translation_memory_ids|[string(uuid)]|true|none|The IDs of the translation memories linked to the style profile. A style profile links at most<br>one translation memory per source language.|
|glossary_priority_order_enabled|boolean|true|none|Whether the order of `glossary_ids` sets priority: when two linked glossaries define the same<br>source term, the one listed first wins. When `false`, the order has no effect.|
|creation_time|string(date-time)|true|none|The creation time of the style profile in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|
|updated_time|string(date-time)|true|none|The time of the last update to the style profile in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|

<h2 id="tocS_StyleProfileId">StyleProfileId</h2>
<!-- backwards compatibility -->
<a id="schemastyleprofileid"></a>
<a id="schema_StyleProfileId"></a>
<a id="tocSstyleprofileid"></a>
<a id="tocsstyleprofileid"></a>

```json
"3f1c9d0e-7a24-4b58-9c31-8f0e5d2a1b47"
```

A unique ID assigned to a style profile.

<h2 id="tocS_StyleRuleList">StyleRuleList</h2>
<!-- backwards compatibility -->
<a id="schemastylerulelist"></a>
<a id="schema_StyleRuleList"></a>
<a id="tocSstylerulelist"></a>
<a id="tocsstylerulelist"></a>

```json
{
  "style_id": "bd0a38f3-1831-440b-a8dd-2c702e2325ab",
  "name": "string",
  "creation_time": "1970-01-01T00:00:00Z",
  "updated_time": "1970-01-01T00:00:00Z",
  "language": "ar",
  "version": 13,
  "configured_rules": {
    "style_and_tone": {
      "abbreviations": "use_abbreviations_and_symbols",
      "short_vs_long_words": "use_short_words"
    },
    "punctuation": {
      "apostrophe": "use_curly_apostrophes"
    }
  },
  "custom_instructions": [
    {
      "id": "68fdb803-c013-4e67-b62e-1aad0ab519cd",
      "label": "Currency custom instruction",
      "prompt": "Have currency symbols before the numerical value (e.g. $100, €100)",
      "source_language": "en"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|style_id|[StyleId](#schemastyleid)|true|none|A unique ID assigned to a style rule list.|
|name|[StyleRuleName](#schemastylerulename)|true|none|Name associated with the style rule list.|
|creation_time|string(date-time)|true|none|The creation time of the style rule list in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|
|updated_time|string(date-time)|true|none|The time of the style rule list when it was last updated in the ISO 8601-1:2019 format (e.g.: `2022-08-03T14:16:18.329Z`).|
|language|[StyleRuleLanguage](#schemastylerulelanguage)|true|none|The target language the style rule list applies to. Codes are matched case-insensitively;<br>the response returns the canonical form (for example `de-CH`).<br><br>A root code (for example `en`) applies to that language and all of its variants. A variant<br>code (for example `en-GB`) applies only when `target_lang` is that variant.<br><br>Variant lists for `de-CH`, `fr-CA`, `pt-BR`, and `pt-PT` are generally available. Variant<br>lists for `de-DE`, `en-GB`, `en-US`, `es-419`, `es-ES`, `fr-FR`, `zh-Hans`, and `zh-Hant`<br>are in beta. The current list and the status of each language are returned by<br>[`GET /v3/languages?resource=style_rules&include=beta`](/docs/languages/using-the-languages-api).|
|version|integer|true|none|The version of the style rule list. Incremented when the style rule list is updated.|
|configured_rules|[ConfiguredRules](#schemaconfiguredrules)|false|none|The enabled rules for the style rule list including what option was selected for each rule. This schema combines rules from all supported languages.|
|custom_instructions|[[CustomInstruction](#schemacustominstruction)]|false|none|List of custom instructions enabled for the style rule list.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ar|
|language|bg|
|language|cs|
|language|da|
|language|de|
|language|de-CH|
|language|de-DE|
|language|el|
|language|en|
|language|en-GB|
|language|en-US|
|language|es|
|language|es-419|
|language|es-ES|
|language|et|
|language|fi|
|language|fr|
|language|fr-CA|
|language|fr-FR|
|language|he|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|ko|
|language|lt|
|language|lv|
|language|nb|
|language|nl|
|language|pl|
|language|pt|
|language|pt-BR|
|language|pt-PT|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|th|
|language|tr|
|language|uk|
|language|vi|
|language|zh|
|language|zh-Hans|
|language|zh-Hant|

<h2 id="tocS_StyleId">StyleId</h2>
<!-- backwards compatibility -->
<a id="schemastyleid"></a>
<a id="schema_StyleId"></a>
<a id="tocSstyleid"></a>
<a id="tocsstyleid"></a>

```json
"bd0a38f3-1831-440b-a8dd-2c702e2325ab"
```

A unique ID assigned to a style rule list.

<h2 id="tocS_StyleRuleLanguage">StyleRuleLanguage</h2>
<!-- backwards compatibility -->
<a id="schemastylerulelanguage"></a>
<a id="schema_StyleRuleLanguage"></a>
<a id="tocSstylerulelanguage"></a>
<a id="tocsstylerulelanguage"></a>

```json
"ar"
```

The target language the style rule list applies to. Codes are matched case-insensitively;
the response returns the canonical form (for example `de-CH`).

A root code (for example `en`) applies to that language and all of its variants. A variant
code (for example `en-GB`) applies only when `target_lang` is that variant.

Variant lists for `de-CH`, `fr-CA`, `pt-BR`, and `pt-PT` are generally available. Variant
lists for `de-DE`, `en-GB`, `en-US`, `es-419`, `es-ES`, `fr-FR`, `zh-Hans`, and `zh-Hant`
are in beta. The current list and the status of each language are returned by
[`GET /v3/languages?resource=style_rules&include=beta`](/docs/languages/using-the-languages-api).

<h2 id="tocS_StyleRuleName">StyleRuleName</h2>
<!-- backwards compatibility -->
<a id="schemastylerulename"></a>
<a id="schema_StyleRuleName"></a>
<a id="tocSstylerulename"></a>
<a id="tocsstylerulename"></a>

```json
"string"
```

Name associated with the style rule list.

<h2 id="tocS_DocumentTranslationError">DocumentTranslationError</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttranslationerror"></a>
<a id="schema_DocumentTranslationError"></a>
<a id="tocSdocumenttranslationerror"></a>
<a id="tocsdocumenttranslationerror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|detailed error message|

<h2 id="tocS_DocumentKey">DocumentKey</h2>
<!-- backwards compatibility -->
<a id="schemadocumentkey"></a>
<a id="schema_DocumentKey"></a>
<a id="tocSdocumentkey"></a>
<a id="tocsdocumentkey"></a>

```json
{
  "document_key": "0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document_key|string|true|none|The document encryption key that was sent to the client when the document was uploaded to the API.|

<h2 id="tocS_Formality">Formality</h2>
<!-- backwards compatibility -->
<a id="schemaformality"></a>
<a id="schema_Formality"></a>
<a id="tocSformality"></a>
<a id="tocsformality"></a>

```json
"prefer_more"
```

Sets whether the translated text should lean towards formal or informal language.
This feature is only available for certain target languages. Setting this parameter
with a target language that does not support formality will fail, unless one of the
`prefer_...` options are used.
Possible options are:
  * `default` (default)
  * `more` - for a more formal language
  * `less` - for a more informal language
  * `prefer_more` - for a more formal language if available, otherwise fallback to default formality
  * `prefer_less` - for a more informal language if available, otherwise fallback to default formality

<h2 id="tocS_GlossaryDictionary">GlossaryDictionary</h2>
<!-- backwards compatibility -->
<a id="schemaglossarydictionary"></a>
<a id="schema_GlossaryDictionary"></a>
<a id="tocSglossarydictionary"></a>
<a id="tocsglossarydictionary"></a>

```json
{
  "source_lang": "en",
  "target_lang": "de",
  "entries": "Hello\tGuten Tag",
  "entries_format": "tsv",
  "entry_count": {}
}
```

A dictionary contained in a multilingual glossary. Each dictionary contains the mapping of source terms to target language terms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_lang|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|false|none|The language in which the source texts in the glossary are specified.|
|target_lang|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|false|none|The language in which the target texts in the glossary are specified.|
|entries|[GlossaryEntries](#schemaglossaryentries)|false|none|The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.|
|entries_format|[GlossaryEntriesFormat](#schemaglossaryentriesformat)|false|none|The format in which the glossary entries are provided. Formats currently available:<br>- `tsv` (default) - tab-separated values<br>- `csv` - comma-separated values<br><br>See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.|
|entry_count|object|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|
|entries_format|tsv|
|entries_format|csv|

<h2 id="tocS_GlossaryEntries">GlossaryEntries</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryentries"></a>
<a id="schema_GlossaryEntries"></a>
<a id="tocSglossaryentries"></a>
<a id="tocsglossaryentries"></a>

```json
"Hello\tGuten Tag"
```

The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.

<h2 id="tocS_GlossaryEntriesFormat">GlossaryEntriesFormat</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryentriesformat"></a>
<a id="schema_GlossaryEntriesFormat"></a>
<a id="tocSglossaryentriesformat"></a>
<a id="tocsglossaryentriesformat"></a>

```json
"tsv"
```

The format in which the glossary entries are provided. Formats currently available:
- `tsv` (default) - tab-separated values
- `csv` - comma-separated values

See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.

<h2 id="tocS_GlossaryEntryCount">GlossaryEntryCount</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryentrycount"></a>
<a id="schema_GlossaryEntryCount"></a>
<a id="tocSglossaryentrycount"></a>
<a id="tocsglossaryentrycount"></a>

```json
0
```

The number of entries in the glossary.

<h2 id="tocS_GlossaryId">GlossaryId</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryid"></a>
<a id="schema_GlossaryId"></a>
<a id="tocSglossaryid"></a>
<a id="tocsglossaryid"></a>

```json
"def3a26b-3e84-45b3-84ae-0c0aaf3525f7"
```

A unique ID assigned to a glossary.

<h2 id="tocS_GlossaryName">GlossaryName</h2>
<!-- backwards compatibility -->
<a id="schemaglossaryname"></a>
<a id="schema_GlossaryName"></a>
<a id="tocSglossaryname"></a>
<a id="tocsglossaryname"></a>

```json
"string"
```

Name associated with the glossary.

<h2 id="tocS_GlossarySourceLanguage">GlossarySourceLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaglossarysourcelanguage"></a>
<a id="schema_GlossarySourceLanguage"></a>
<a id="tocSglossarysourcelanguage"></a>
<a id="tocsglossarysourcelanguage"></a>

```json
"en"
```

The language in which the source texts in the glossary are specified.

<h2 id="tocS_GlossaryTargetLanguage">GlossaryTargetLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaglossarytargetlanguage"></a>
<a id="schema_GlossaryTargetLanguage"></a>
<a id="tocSglossarytargetlanguage"></a>
<a id="tocsglossarytargetlanguage"></a>

```json
"de"
```

The language in which the target texts in the glossary are specified.

<h2 id="tocS_SpokenTermsId">SpokenTermsId</h2>
<!-- backwards compatibility -->
<a id="schemaspokentermsid"></a>
<a id="schema_SpokenTermsId"></a>
<a id="tocSspokentermsid"></a>
<a id="tocsspokentermsid"></a>

```json
"7c4f1080-cfe2-41d4-8269-0e6ec15a0354"
```

(beta) The ID of a Spoken Terms collection used to inform transcription.

<h2 id="tocS_ModelType">ModelType</h2>
<!-- backwards compatibility -->
<a id="schemamodeltype"></a>
<a id="schema_ModelType"></a>
<a id="tocSmodeltype"></a>
<a id="tocsmodeltype"></a>

```json
"quality_optimized"
```

Specifies which DeepL model should be used for translation.

<h2 id="tocS_MonolingualGlossary">MonolingualGlossary</h2>
<!-- backwards compatibility -->
<a id="schemamonolingualglossary"></a>
<a id="schema_MonolingualGlossary"></a>
<a id="tocSmonolingualglossary"></a>
<a id="tocsmonolingualglossary"></a>

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "ready": true,
  "name": "My Glossary",
  "source_lang": "en",
  "target_lang": "de",
  "creation_time": "2021-08-03T14:16:18.329Z",
  "entry_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossary_id|[GlossaryId](#schemaglossaryid)|false|none|A unique ID assigned to a glossary.|
|name|string|false|none|Name associated with the glossary.|
|ready|boolean|false|none|Indicates if the newly created glossary can already be used in `translate` requests.<br>If the created glossary is not yet ready, you have to wait and check the `ready` status<br>of the glossary before using it in a `translate` request.|
|source_lang|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|false|none|The language in which the source texts in the glossary are specified.|
|target_lang|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|false|none|The language in which the target texts in the glossary are specified.|
|creation_time|string(date-time)|false|none|The creation time of the glossary in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|
|entry_count|integer|false|none|The number of entries in the glossary.|

#### Enumerated Values

|Property|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|

<h2 id="tocS_MultilingualGlossary">MultilingualGlossary</h2>
<!-- backwards compatibility -->
<a id="schemamultilingualglossary"></a>
<a id="schema_MultilingualGlossary"></a>
<a id="tocSmultilingualglossary"></a>
<a id="tocsmultilingualglossary"></a>

```json
{
  "glossary_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "My Glossary",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entry_count": 1
    }
  ],
  "creation_time": "2021-08-03T14:16:18.329Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glossary_id|[GlossaryId](#schemaglossaryid)|false|none|A unique ID assigned to a glossary.|
|name|[GlossaryName](#schemaglossaryname)|false|none|Name associated with the glossary.|
|dictionaries|[[GlossaryDictionary](#schemaglossarydictionary)]|false|none|List of dictionaries contained in this glossary.<br>Each dictionary contains a source and target language, as well as pairs of source and target entries.|
|creation_time|string(date-time)|false|none|The creation time of the glossary in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|

<h2 id="tocS_MultilingualGlossaryEntries">MultilingualGlossaryEntries</h2>
<!-- backwards compatibility -->
<a id="schemamultilingualglossaryentries"></a>
<a id="schema_MultilingualGlossaryEntries"></a>
<a id="tocSmultilingualglossaryentries"></a>
<a id="tocsmultilingualglossaryentries"></a>

```json
{
  "source_lang": "en",
  "target_lang": "de",
  "entries": "Hello\tGuten Tag",
  "entries_format": "tsv"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_lang|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|false|none|The language in which the source texts in the glossary are specified.|
|target_lang|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|false|none|The language in which the target texts in the glossary are specified.|
|entries|[GlossaryEntries](#schemaglossaryentries)|false|none|The entries of the glossary. The entries have to be specified in the format provided by the `entries_format` parameter.|
|entries_format|[GlossaryEntriesFormat](#schemaglossaryentriesformat)|false|none|The format in which the glossary entries are provided. Formats currently available:<br>- `tsv` (default) - tab-separated values<br>- `csv` - comma-separated values<br><br>See [Supported Glossary Formats](/docs/customize/managing-glossaries#entry-formats) for details about each format.|

#### Enumerated Values

|Property|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|
|entries_format|tsv|
|entries_format|csv|

<h2 id="tocS_MultilingualGlossaryEntriesResponse">MultilingualGlossaryEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamultilingualglossaryentriesresponse"></a>
<a id="schema_MultilingualGlossaryEntriesResponse"></a>
<a id="tocSmultilingualglossaryentriesresponse"></a>
<a id="tocsmultilingualglossaryentriesresponse"></a>

```json
{
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entry_count": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dictionaries|[[MultilingualGlossaryEntriesInformation](#schemamultilingualglossaryentriesinformation)]|false|none|none|

<h2 id="tocS_MultilingualGlossaryEntriesInformation">MultilingualGlossaryEntriesInformation</h2>
<!-- backwards compatibility -->
<a id="schemamultilingualglossaryentriesinformation"></a>
<a id="schema_MultilingualGlossaryEntriesInformation"></a>
<a id="tocSmultilingualglossaryentriesinformation"></a>
<a id="tocsmultilingualglossaryentriesinformation"></a>

```json
{
  "source_lang": "en",
  "target_lang": "de",
  "entry_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_lang|[GlossarySourceLanguage](#schemaglossarysourcelanguage)|false|none|The language in which the source texts in the glossary are specified.|
|target_lang|[GlossaryTargetLanguage](#schemaglossarytargetlanguage)|false|none|The language in which the target texts in the glossary are specified.|
|entry_count|[GlossaryEntryCount](#schemaglossaryentrycount)|false|none|The number of entries in the glossary.|

#### Enumerated Values

|Property|Value|
|---|---|
|source_lang|ar|
|source_lang|bg|
|source_lang|cs|
|source_lang|da|
|source_lang|de|
|source_lang|el|
|source_lang|en|
|source_lang|es|
|source_lang|et|
|source_lang|fi|
|source_lang|fr|
|source_lang|he|
|source_lang|hu|
|source_lang|id|
|source_lang|it|
|source_lang|ja|
|source_lang|ko|
|source_lang|lt|
|source_lang|lv|
|source_lang|nb|
|source_lang|nl|
|source_lang|pl|
|source_lang|pt|
|source_lang|ro|
|source_lang|ru|
|source_lang|sk|
|source_lang|sl|
|source_lang|sv|
|source_lang|tr|
|source_lang|uk|
|source_lang|vi|
|source_lang|zh|
|target_lang|ar|
|target_lang|bg|
|target_lang|cs|
|target_lang|da|
|target_lang|de|
|target_lang|el|
|target_lang|en|
|target_lang|es|
|target_lang|et|
|target_lang|fi|
|target_lang|fr|
|target_lang|he|
|target_lang|hu|
|target_lang|id|
|target_lang|it|
|target_lang|ja|
|target_lang|ko|
|target_lang|lt|
|target_lang|lv|
|target_lang|nb|
|target_lang|nl|
|target_lang|pl|
|target_lang|pt|
|target_lang|ro|
|target_lang|ru|
|target_lang|sk|
|target_lang|sl|
|target_lang|sv|
|target_lang|tr|
|target_lang|uk|
|target_lang|vi|
|target_lang|zh|

<h2 id="tocS_OutlineDetectionOption">OutlineDetectionOption</h2>
<!-- backwards compatibility -->
<a id="schemaoutlinedetectionoption"></a>
<a id="schema_OutlineDetectionOption"></a>
<a id="tocSoutlinedetectionoption"></a>
<a id="tocsoutlinedetectionoption"></a>

```json
true
```

Disable the automatic detection of XML structure by setting the `outline_detection` parameter
to `false` and selecting the tags that should be considered structure tags. This will split sentences
using the `splitting_tags` parameter.

<h2 id="tocS_OutlineDetectionOptionStr">OutlineDetectionOptionStr</h2>
<!-- backwards compatibility -->
<a id="schemaoutlinedetectionoptionstr"></a>
<a id="schema_OutlineDetectionOptionStr"></a>
<a id="tocSoutlinedetectionoptionstr"></a>
<a id="tocsoutlinedetectionoptionstr"></a>

```json
"1"
```

Disable the automatic detection of XML structure by setting the `outline_detection` parameter
to `false` and selecting the tags that should be considered structure tags. This will split sentences
using the `splitting_tags` parameter.

<h2 id="tocS_PatchMultilingualGlossaryParameters">PatchMultilingualGlossaryParameters</h2>
<!-- backwards compatibility -->
<a id="schemapatchmultilingualglossaryparameters"></a>
<a id="schema_PatchMultilingualGlossaryParameters"></a>
<a id="tocSpatchmultilingualglossaryparameters"></a>
<a id="tocspatchmultilingualglossaryparameters"></a>

```json
{
  "name": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "dictionaries": [
    {
      "source_lang": "en",
      "target_lang": "de",
      "entries": "Hello\tGuten Tag",
      "entries_format": "tsv",
      "entry_count": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[GlossaryId](#schemaglossaryid)|false|none|A unique ID assigned to a glossary.|
|dictionaries|[[GlossaryDictionary](#schemaglossarydictionary)]|false|none|Dictionaries to edit the glossary with. Currently only supports 0 or 1 dictionaries in the array.|

<h2 id="tocS_CreateSpokenTermsParameters">CreateSpokenTermsParameters</h2>
<!-- backwards compatibility -->
<a id="schemacreatespokentermsparameters"></a>
<a id="schema_CreateSpokenTermsParameters"></a>
<a id="tocScreatespokentermsparameters"></a>
<a id="tocscreatespokentermsparameters"></a>

```json
{
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entries": "DeepL\nAPI\nwebhook"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name for the Spoken Terms collection.|
|term_lists|[[SpokenTermsListInput](#schemaspokentermslistinput)]|true|none|Array of term lists, one per language.|

<h2 id="tocS_SpokenTermsListInput">SpokenTermsListInput</h2>
<!-- backwards compatibility -->
<a id="schemaspokentermslistinput"></a>
<a id="schema_SpokenTermsListInput"></a>
<a id="tocSspokentermslistinput"></a>
<a id="tocsspokentermslistinput"></a>

```json
{
  "lang": "en",
  "entries": "DeepL\nAPI\nwebhook"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lang|string|true|none|Language code (ISO 639-1) for this term list.|
|entries|string|true|none|Newline-separated list of terms, one term per line. Maximum 300 characters total.<br><br>Terms are case-sensitive. Each term must be non-empty, must not contain C0 or C1 control characters (such as tabs or newlines within a term), and must not have leading or trailing whitespace. Duplicate terms within a list are not allowed (comparison is case-sensitive).<br>|

<h2 id="tocS_PatchSpokenTermsParameters">PatchSpokenTermsParameters</h2>
<!-- backwards compatibility -->
<a id="schemapatchspokentermsparameters"></a>
<a id="schema_PatchSpokenTermsParameters"></a>
<a id="tocSpatchspokentermsparameters"></a>
<a id="tocspatchspokentermsparameters"></a>

```json
{
  "name": "Updated Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entries": "DeepL\nAPI\nwebhook"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|New name for the Spoken Terms collection.|
|term_lists|[[SpokenTermsListInput](#schemaspokentermslistinput)]|false|none|Term lists to merge with existing lists.|

<h2 id="tocS_PutSpokenTermsListParameters">PutSpokenTermsListParameters</h2>
<!-- backwards compatibility -->
<a id="schemaputspokentermslistparameters"></a>
<a id="schema_PutSpokenTermsListParameters"></a>
<a id="tocSputspokentermslistparameters"></a>
<a id="tocsputspokentermslistparameters"></a>

```json
{
  "lang": "en",
  "entries": "DeepL\nAPI\nwebhook\nintegration"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lang|string|true|none|Language code (ISO 639-1) for this term list.|
|entries|string|true|none|Newline-separated list of terms, one term per line. Maximum 300 characters total.<br><br>Terms are case-sensitive. Each term must be non-empty, must not contain C0 or C1 control characters (such as tabs or newlines within a term), and must not have leading or trailing whitespace. Duplicate terms within a list are not allowed (comparison is case-sensitive).<br>|

<h2 id="tocS_SpokenTerms">SpokenTerms</h2>
<!-- backwards compatibility -->
<a id="schemaspokenterms"></a>
<a id="schema_SpokenTerms"></a>
<a id="tocSspokenterms"></a>
<a id="tocsspokenterms"></a>

```json
{
  "spoken_terms_id": "def3a26b-3e84-45b3-84ae-0c0aaf3525f7",
  "name": "Technical Terms",
  "term_lists": [
    {
      "lang": "en",
      "entry_count": 3
    }
  ],
  "creation_time": "2025-08-03T14:16:18.329Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spoken_terms_id|string|false|none|A unique ID assigned to the Spoken Terms collection.|
|name|string|false|none|Name of the Spoken Terms collection.|
|term_lists|[[SpokenTermsList](#schemaspokentermslist)]|false|none|List of term lists contained in this collection.|
|creation_time|string(date-time)|false|none|The creation time of the Spoken Terms collection in ISO 8601-1:2019 format (e.g.: `2025-08-03T14:16:18.329Z`).|

<h2 id="tocS_SpokenTermsList">SpokenTermsList</h2>
<!-- backwards compatibility -->
<a id="schemaspokentermslist"></a>
<a id="schema_SpokenTermsList"></a>
<a id="tocSspokentermslist"></a>
<a id="tocsspokentermslist"></a>

```json
{
  "lang": "en",
  "entry_count": 3
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lang|string|false|none|Language code (ISO 639-1).|
|entry_count|integer|false|none|Number of terms in this list.|

<h2 id="tocS_SpokenTermsEntries">SpokenTermsEntries</h2>
<!-- backwards compatibility -->
<a id="schemaspokentermsentries"></a>
<a id="schema_SpokenTermsEntries"></a>
<a id="tocSspokentermsentries"></a>
<a id="tocsspokentermsentries"></a>

```json
{
  "lang": "en",
  "entries": "DeepL\nAPI\nwebhook"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lang|string|false|none|Language code (ISO 639-1).|
|entries|string|false|none|Newline-separated list of terms.|

<h2 id="tocS_PreserveFormattingOption">PreserveFormattingOption</h2>
<!-- backwards compatibility -->
<a id="schemapreserveformattingoption"></a>
<a id="schema_PreserveFormattingOption"></a>
<a id="tocSpreserveformattingoption"></a>
<a id="tocspreserveformattingoption"></a>

```json
false
```

Sets whether the translation engine should respect the original formatting, even if it would usually
correct some aspects.

<h2 id="tocS_PreserveFormattingOptionStr">PreserveFormattingOptionStr</h2>
<!-- backwards compatibility -->
<a id="schemapreserveformattingoptionstr"></a>
<a id="schema_PreserveFormattingOptionStr"></a>
<a id="tocSpreserveformattingoptionstr"></a>
<a id="tocspreserveformattingoptionstr"></a>

```json
"0"
```

Sets whether the translation engine should respect the original formatting, even if it would usually
correct some aspects.

<h2 id="tocS_ShowBilledCharacters">ShowBilledCharacters</h2>
<!-- backwards compatibility -->
<a id="schemashowbilledcharacters"></a>
<a id="schema_ShowBilledCharacters"></a>
<a id="tocSshowbilledcharacters"></a>
<a id="tocsshowbilledcharacters"></a>

```json
true
```

When true, the response will include the billed_characters parameter, giving the
number of characters from the request that will be counted by DeepL for billing purposes.

<h2 id="tocS_SplitSentencesOption">SplitSentencesOption</h2>
<!-- backwards compatibility -->
<a id="schemasplitsentencesoption"></a>
<a id="schema_SplitSentencesOption"></a>
<a id="tocSsplitsentencesoption"></a>
<a id="tocssplitsentencesoption"></a>

```json
"1"
```

Sets whether the translation engine should first split the input into sentences.

Possible values are:
  * 0 - no splitting at all, whole input is treated as one sentence
  * 1 (default when tag_handling is not set to html) - splits on punctuation and on newlines
  * nonewlines (default when tag_handling=html) - splits on punctuation only, ignoring newlines

<h2 id="tocS_SourceLanguage">SourceLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasourcelanguage"></a>
<a id="schema_SourceLanguage"></a>
<a id="tocSsourcelanguage"></a>
<a id="tocssourcelanguage"></a>

```json
"EN"
```

Language of the text to be translated. If this parameter is omitted, the API will attempt to
detect the language of the text and translate it.

For the full list of supported source languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).

<h2 id="tocS_TranslationMemory">TranslationMemory</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemory"></a>
<a id="schema_TranslationMemory"></a>
<a id="tocStranslationmemory"></a>
<a id="tocstranslationmemory"></a>

```json
{
  "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "name": "Legal",
  "source_language": "en",
  "target_languages": [
    "es",
    "de"
  ],
  "segment_count": 34,
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-04-01T16:34:25.264Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translation_memory_id|[TranslationMemoryId](#schematranslationmemoryid)|true|none|A unique ID assigned to a translation memory.|
|name|string|true|none|Name associated with the translation memory.|
|source_language|[TranslationMemorySourceLanguage](#schematranslationmemorysourcelanguage)|true|none|The source language of the translation memory.|
|target_languages|[[TranslationMemoryTargetLanguage](#schematranslationmemorytargetlanguage)]|true|none|The list of target languages available in the translation memory.|
|segment_count|integer|true|none|The number of segments stored in the translation memory.|
|creation_time|string(date-time)|false|none|The creation time of the translation memory in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|
|updated_time|string(date-time)|false|none|The time of the last update to the translation memory in the ISO 8601-1:2019 format (e.g.: `2021-08-03T14:16:18.329Z`).|

#### Enumerated Values

|Property|Value|
|---|---|
|source_language|ar|
|source_language|bg|
|source_language|cs|
|source_language|da|
|source_language|de|
|source_language|el|
|source_language|en|
|source_language|es|
|source_language|et|
|source_language|fi|
|source_language|fr|
|source_language|he|
|source_language|hu|
|source_language|id|
|source_language|it|
|source_language|ja|
|source_language|ko|
|source_language|lt|
|source_language|lv|
|source_language|nb|
|source_language|nl|
|source_language|pl|
|source_language|pt|
|source_language|ro|
|source_language|ru|
|source_language|sk|
|source_language|sl|
|source_language|sv|
|source_language|th|
|source_language|tr|
|source_language|uk|
|source_language|vi|
|source_language|zh|
|target_languages|ar|
|target_languages|bg|
|target_languages|cs|
|target_languages|da|
|target_languages|de|
|target_languages|de-ch|
|target_languages|de-de|
|target_languages|el|
|target_languages|en|
|target_languages|en-gb|
|target_languages|en-us|
|target_languages|es|
|target_languages|es-419|
|target_languages|es-es|
|target_languages|et|
|target_languages|fi|
|target_languages|fr|
|target_languages|fr-ca|
|target_languages|fr-fr|
|target_languages|he|
|target_languages|hu|
|target_languages|id|
|target_languages|it|
|target_languages|ja|
|target_languages|ko|
|target_languages|lt|
|target_languages|lv|
|target_languages|nb|
|target_languages|nl|
|target_languages|pl|
|target_languages|pt-br|
|target_languages|pt-pt|
|target_languages|ro|
|target_languages|ru|
|target_languages|sk|
|target_languages|sl|
|target_languages|sv|
|target_languages|th|
|target_languages|tr|
|target_languages|uk|
|target_languages|vi|
|target_languages|zh|
|target_languages|zh-hans|
|target_languages|zh-hant|

<h2 id="tocS_TranslationMemoryId">TranslationMemoryId</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemoryid"></a>
<a id="schema_TranslationMemoryId"></a>
<a id="tocStranslationmemoryid"></a>
<a id="tocstranslationmemoryid"></a>

```json
"a74d88fb-ed2a-4943-a664-a4512398b994"
```

A unique ID assigned to a translation memory.

<h2 id="tocS_TranslationMemorySourceLanguage">TranslationMemorySourceLanguage</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemorysourcelanguage"></a>
<a id="schema_TranslationMemorySourceLanguage"></a>
<a id="tocStranslationmemorysourcelanguage"></a>
<a id="tocstranslationmemorysourcelanguage"></a>

```json
"en"
```

The source language of the translation memory.

<h2 id="tocS_TranslationMemoryTargetLanguage">TranslationMemoryTargetLanguage</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemorytargetlanguage"></a>
<a id="schema_TranslationMemoryTargetLanguage"></a>
<a id="tocStranslationmemorytargetlanguage"></a>
<a id="tocstranslationmemorytargetlanguage"></a>

```json
"es"
```

The list of target languages available in the translation memory. A translation memory's target language must be compatible with the `target_lang` specified in a translation request.

<h2 id="tocS_TranslationMemorySegment">TranslationMemorySegment</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemorysegment"></a>
<a id="schema_TranslationMemorySegment"></a>
<a id="tocStranslationmemorysegment"></a>
<a id="tocstranslationmemorysegment"></a>

```json
{
  "source_segment_id": "4f1c2d3e-8a9b-4c5d-9e6f-7a8b9c0d1e2f",
  "source_text": "This agreement is governed by the laws of Germany.",
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-04-01T16:34:25.223Z",
  "last_used_time": "2026-08-05T11:02:18.771Z",
  "targets": [
    {
      "target_segment_id": "9b8a7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d",
      "target_language": "es",
      "target_text": "Dieser Vertrag unterliegt dem Recht der Bundesrepublik Deutschland.",
      "creation_time": "2026-04-01T16:34:25.223Z",
      "updated_time": "2026-04-01T16:34:25.223Z",
      "last_used_time": "2026-08-05T11:02:18.771Z"
    }
  ]
}
```

A source segment stored in a translation memory, with its translations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_segment_id|string|true|none|A unique ID assigned to the source segment.|
|source_text|string|true|none|The source text of the segment.|
|creation_time|string(date-time)|false|none|The time the segment was added, in the ISO 8601-1:2019 format.|
|updated_time|string(date-time)|false|none|The time the segment was last changed, in the ISO 8601-1:2019 format.|
|last_used_time|string(date-time)|false|none|The time the segment was last applied to a translation, in the ISO 8601-1:2019 format. Absent<br>if the segment has never been used.|
|targets|[[TranslationMemoryTargetSegment](#schematranslationmemorytargetsegment)]|true|none|The translations of this source segment, one per target language.|

<h2 id="tocS_TranslationMemoryTargetSegment">TranslationMemoryTargetSegment</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemorytargetsegment"></a>
<a id="schema_TranslationMemoryTargetSegment"></a>
<a id="tocStranslationmemorytargetsegment"></a>
<a id="tocstranslationmemorytargetsegment"></a>

```json
{
  "target_segment_id": "9b8a7c6d-5e4f-4a3b-8c2d-1e0f9a8b7c6d",
  "target_language": "es",
  "target_text": "Dieser Vertrag unterliegt dem Recht der Bundesrepublik Deutschland.",
  "creation_time": "2026-04-01T16:34:25.223Z",
  "updated_time": "2026-04-01T16:34:25.223Z",
  "last_used_time": "2026-08-05T11:02:18.771Z"
}
```

A translation of a source segment in one target language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_segment_id|string|true|none|A unique ID assigned to the target segment.|
|target_language|[TranslationMemoryTargetLanguage](#schematranslationmemorytargetlanguage)|true|none|The list of target languages available in the translation memory. A translation memory's target language must be compatible with the `target_lang` specified in a translation request.|
|target_text|string|true|none|The translated text.|
|creation_time|string(date-time)|false|none|The time the translation was added, in the ISO 8601-1:2019 format.|
|updated_time|string(date-time)|false|none|The time the translation was last changed, in the ISO 8601-1:2019 format.|
|last_used_time|string(date-time)|false|none|The time the translation was last applied to a translation request, in the ISO 8601-1:2019<br>format. Absent if it has never been used.|

#### Enumerated Values

|Property|Value|
|---|---|
|target_language|ar|
|target_language|bg|
|target_language|cs|
|target_language|da|
|target_language|de|
|target_language|de-ch|
|target_language|de-de|
|target_language|el|
|target_language|en|
|target_language|en-gb|
|target_language|en-us|
|target_language|es|
|target_language|es-419|
|target_language|es-es|
|target_language|et|
|target_language|fi|
|target_language|fr|
|target_language|fr-ca|
|target_language|fr-fr|
|target_language|he|
|target_language|hu|
|target_language|id|
|target_language|it|
|target_language|ja|
|target_language|ko|
|target_language|lt|
|target_language|lv|
|target_language|nb|
|target_language|nl|
|target_language|pl|
|target_language|pt-br|
|target_language|pt-pt|
|target_language|ro|
|target_language|ru|
|target_language|sk|
|target_language|sl|
|target_language|sv|
|target_language|th|
|target_language|tr|
|target_language|uk|
|target_language|vi|
|target_language|zh|
|target_language|zh-hans|
|target_language|zh-hant|

<h2 id="tocS_CreateTranslationMemoryExport">CreateTranslationMemoryExport</h2>
<!-- backwards compatibility -->
<a id="schemacreatetranslationmemoryexport"></a>
<a id="schema_CreateTranslationMemoryExport"></a>
<a id="tocScreatetranslationmemoryexport"></a>
<a id="tocscreatetranslationmemoryexport"></a>

```json
{
  "job_id": "7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13",
  "parameters": {
    "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994"
  }
}
```

A reference to a translation memory export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|true|none|The identifier of the export job. Use it to poll the job's status.|
|parameters|object|true|none|none|

<h2 id="tocS_TranslationMemoryJob">TranslationMemoryJob</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemoryjob"></a>
<a id="schema_TranslationMemoryJob"></a>
<a id="tocStranslationmemoryjob"></a>
<a id="tocstranslationmemoryjob"></a>

```json
{
  "job_id": "0f8b6c1e-4d2a-4c77-9a3e-1b5d8c9e2f40",
  "product": "translation_memory",
  "operation": "import",
  "creation_time": "2026-08-06T15:04:25.223Z",
  "updated_time": "2026-08-06T15:06:11.418Z",
  "source_file": {
    "content_type": "application/xml",
    "content_length": 1024
  },
  "parameters": {
    "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
    "display_name": "Legal"
  },
  "results": [
    {
      "status": "completed",
      "status_metadata": {
        "required_action": "Waiting for upload"
      },
      "download_url": "https://assets.deepl.com/download/7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13",
      "expires_at": "2026-08-06T16:05:02.771Z",
      "error": {
        "message": "The uploaded file is not valid TMX."
      },
      "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
      "skipped_segment_count": 12
    }
  ]
}
```

The state of a translation memory import or export job. Fields that do not apply to the job's
`operation` are omitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|true|none|The identifier of the job.|
|product|string|true|none|The DeepL product the job belongs to. Always `translation_memory`.|
|operation|string|true|none|Which kind of job this is.|
|creation_time|string(date-time)|true|none|The time the job was created, in the ISO 8601-1:2019 format.|
|updated_time|string(date-time)|true|none|The time the job last changed state, in the ISO 8601-1:2019 format.|
|source_file|object|false|none|The file declared when the import job was created. Omitted for export jobs.|
|parameters|object|true|none|The parameters the job was created with. Import jobs report `display_name`; export jobs report<br>`translation_memory_id`.|
|results|[[TranslationMemoryJobResult](#schematranslationmemoryjobresult)]|true|none|The job's outcome. This array always holds exactly one entry. It is an array so that jobs<br>producing multiple outputs can be represented without a breaking change.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|import|
|operation|export|

<h2 id="tocS_TranslationMemoryJobResult">TranslationMemoryJobResult</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemoryjobresult"></a>
<a id="schema_TranslationMemoryJobResult"></a>
<a id="tocStranslationmemoryjobresult"></a>
<a id="tocstranslationmemoryjobresult"></a>

```json
{
  "status": "completed",
  "status_metadata": {
    "required_action": "Waiting for upload"
  },
  "download_url": "https://assets.deepl.com/download/7c2e5a91-3b8d-4f16-8e0a-6d4c2b7f9a13",
  "expires_at": "2026-08-06T16:05:02.771Z",
  "error": {
    "message": "The uploaded file is not valid TMX."
  },
  "translation_memory_id": "a74d88fb-ed2a-4943-a664-a4512398b994",
  "skipped_segment_count": 12
}
```

The status of a translation memory job and, once it finishes, its output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The job's current state:<br> * `awaiting_input` - the job exists but the file has not been uploaded yet (import only)<br> * `processing` - the file was received and is being processed<br> * `completed` - the job finished successfully<br> * `failed` - the job did not finish; see `error`<br> * `expired` - the job is too old to act on; create a new one|
|status_metadata|object|false|none|Extra context for states that need you to act. Present only when there is something to do.|
|download_url|string(uri)|false|none|A short-lived URL to download the exported TMX file from. Present on completed export jobs<br>only. Download the file rather than storing this URL.|
|expires_at|string(date-time)|false|none|The time `download_url` stops working, in the ISO 8601-1:2019 format. Present on completed<br>export jobs only.|
|error|object|false|none|Why the job failed. Present only when `status` is `failed`.|
|translation_memory_id|[TranslationMemoryId](#schematranslationmemoryid)|false|none|A unique ID assigned to a translation memory.|
|skipped_segment_count|integer(int64)|false|none|How many segments in the uploaded file were not imported, for example because they were<br>malformed or duplicated an existing segment. Present on completed import jobs only. A non-zero<br>value does not mean the import failed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|awaiting_input|
|status|processing|
|status|completed|
|status|failed|
|status|expired|

<h2 id="tocS_TranslationMemoryThreshold">TranslationMemoryThreshold</h2>
<!-- backwards compatibility -->
<a id="schematranslationmemorythreshold"></a>
<a id="schema_TranslationMemoryThreshold"></a>
<a id="tocStranslationmemorythreshold"></a>
<a id="tocstranslationmemorythreshold"></a>

```json
75
```

The minimum matching percentage required for a translation memory segment to be applied (recommended to be 75% or higher). A value below 50 is treated as 50.

<h2 id="tocS_TagHandlingOption">TagHandlingOption</h2>
<!-- backwards compatibility -->
<a id="schemataghandlingoption"></a>
<a id="schema_TagHandlingOption"></a>
<a id="tocStaghandlingoption"></a>
<a id="tocstaghandlingoption"></a>

```json
"html"
```

Sets which kind of tags should be handled. Options currently available:
 * `xml`
 * `html`

<h2 id="tocS_TagHandlingVersionOption">TagHandlingVersionOption</h2>
<!-- backwards compatibility -->
<a id="schemataghandlingversionoption"></a>
<a id="schema_TagHandlingVersionOption"></a>
<a id="tocStaghandlingversionoption"></a>
<a id="tocstaghandlingversionoption"></a>

```json
"v2"
```

Sets which version of the tag handling algorithm should be used. Options currently available:
* `v1`: Traditional algorithm (currently the default, will become deprecated in the future).
* `v2`: Improved algorithm released in October 2025 (will become the default in the future).

<h2 id="tocS_NonSplittingTagCommaSeparatedList">NonSplittingTagCommaSeparatedList</h2>
<!-- backwards compatibility -->
<a id="schemanonsplittingtagcommaseparatedlist"></a>
<a id="schema_NonSplittingTagCommaSeparatedList"></a>
<a id="tocSnonsplittingtagcommaseparatedlist"></a>
<a id="tocsnonsplittingtagcommaseparatedlist"></a>

```json
{}
```

Comma-separated list of XML tags which never split sentences.

<h2 id="tocS_NonSplittingTagList">NonSplittingTagList</h2>
<!-- backwards compatibility -->
<a id="schemanonsplittingtaglist"></a>
<a id="schema_NonSplittingTagList"></a>
<a id="tocSnonsplittingtaglist"></a>
<a id="tocsnonsplittingtaglist"></a>

```json
{}
```

List of XML tags which never split sentences.


For some XML files, finding tags with textual content and splitting sentences using those tags won't yield the best results. The following example shows the engine splitting sentences on `par` tags and proceeding to translate the parts separately, resulting in an incorrect translation:
 * Example request:
```
<par>The firm said it had been </par><par> conducting an internal investigation.</par>
```
 * Example response:
```
<par>Die Firma sagte, es sei eine gute Idee gewesen.</par><par> Durchführung einer internen Untersuchung.</par>
```


As this can lead to bad translations, this type of structure should either be avoided, or the `non_splitting_tags` parameter should be set. The following example shows the same call, with the parameter set to `par`:
 * Example request:
```
<par>The firm said it had been </par><par> conducting an internal investigation.</par>
```
 * Example response:
```
<par>Die Firma sagte, dass sie</par><par> eine interne Untersuchung durchgeführt</par><par> habe</par><par>.</par>
```


This time, the sentence is translated as a whole. The XML tags are now considered markup and copied into the translated sentence. As the translation of the words "had been" has moved to another position in the German sentence, the two par tags are duplicated (which is expected here).

<h2 id="tocS_SplittingTagCommaSeparatedList">SplittingTagCommaSeparatedList</h2>
<!-- backwards compatibility -->
<a id="schemasplittingtagcommaseparatedlist"></a>
<a id="schema_SplittingTagCommaSeparatedList"></a>
<a id="tocSsplittingtagcommaseparatedlist"></a>
<a id="tocssplittingtagcommaseparatedlist"></a>

```json
{}
```

Comma-separated list of XML tags which always cause splits.


See the example in the `outline_detection` parameter's description.

<h2 id="tocS_SplittingTagList">SplittingTagList</h2>
<!-- backwards compatibility -->
<a id="schemasplittingtaglist"></a>
<a id="schema_SplittingTagList"></a>
<a id="tocSsplittingtaglist"></a>
<a id="tocssplittingtaglist"></a>

```json
{}
```

List of XML tags which always cause splits.


See the example in the `outline_detection` parameter's description.

<h2 id="tocS_IgnoreTagCommaSeparatedList">IgnoreTagCommaSeparatedList</h2>
<!-- backwards compatibility -->
<a id="schemaignoretagcommaseparatedlist"></a>
<a id="schema_IgnoreTagCommaSeparatedList"></a>
<a id="tocSignoretagcommaseparatedlist"></a>
<a id="tocsignoretagcommaseparatedlist"></a>

```json
{}
```

Comma-separated list of XML tags that indicate text not to be translated.

<h2 id="tocS_IgnoreTagList">IgnoreTagList</h2>
<!-- backwards compatibility -->
<a id="schemaignoretaglist"></a>
<a id="schema_IgnoreTagList"></a>
<a id="tocSignoretaglist"></a>
<a id="tocsignoretaglist"></a>

```json
{}
```

List of XML tags that indicate text not to be translated.

<h2 id="tocS_TagCommaSeparatedList">TagCommaSeparatedList</h2>
<!-- backwards compatibility -->
<a id="schematagcommaseparatedlist"></a>
<a id="schema_TagCommaSeparatedList"></a>
<a id="tocStagcommaseparatedlist"></a>
<a id="tocstagcommaseparatedlist"></a>

```json
"a,p,span"
```

Comma-separated list of XML tags.

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  "a",
  "p",
  "span"
]
```

List of XML tags.

<h2 id="tocS_TargetLanguage">TargetLanguage</h2>
<!-- backwards compatibility -->
<a id="schematargetlanguage"></a>
<a id="schema_TargetLanguage"></a>
<a id="tocStargetlanguage"></a>
<a id="tocstargetlanguage"></a>

```json
"DE"
```

The language into which the text should be translated.

For the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).

<h2 id="tocS_TargetLanguageWrite">TargetLanguageWrite</h2>
<!-- backwards compatibility -->
<a id="schematargetlanguagewrite"></a>
<a id="schema_TargetLanguageWrite"></a>
<a id="tocStargetlanguagewrite"></a>
<a id="tocstargetlanguagewrite"></a>

```json
"de"
```

The language for the text improvement.

<h2 id="tocS_UsageResponse">UsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemausageresponse"></a>
<a id="schema_UsageResponse"></a>
<a id="tocSusageresponse"></a>
<a id="tocsusageresponse"></a>

```json
{
  "character_count": 180118,
  "character_limit": 1250000,
  "document_count": 0,
  "document_limit": 0,
  "team_document_count": 0,
  "team_document_limit": 0,
  "products": [
    {
      "product_type": "write",
      "billing_unit": "characters",
      "api_key_unit_count": 0,
      "account_unit_count": 5643,
      "api_key_character_count": 0,
      "character_count": 5643
    }
  ],
  "api_key_character_count": 636,
  "api_key_character_limit": 1000000000000,
  "speech_to_text_milliseconds_count": 0,
  "speech_to_text_milliseconds_limit": 0,
  "speech_to_text_minutes_count": 30,
  "speech_to_text_minutes_limit": 600,
  "speech_to_speech_minutes_count": 12,
  "speech_to_speech_minutes_limit": 600,
  "start_time": "2025-05-13T09:18:42Z",
  "end_time": "2025-06-13T09:18:42Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|character_count|integer(int64)|false|none|Characters translated so far in the current billing period.|
|character_limit|integer(int64)|false|none|Current maximum number of characters that can be translated per billing period. If cost control is set, the cost control limit will be returned in this field.|
|document_count|integer(int64)|false|none|Documents translated so far in the current billing period. Only present for accounts with a document limit.|
|document_limit|integer(int64)|false|none|Current maximum number of documents that can be translated per billing period. Only present for accounts with a document limit.|
|team_document_count|integer(int64)|false|none|Documents translated by all users in the team so far in the current billing period. Only present for accounts with a team document limit.|
|team_document_limit|integer(int64)|false|none|Current maximum number of documents that can be translated by the team per billing period. Only present for accounts with a team document limit.|
|products|[object]|false|none|Only present for API Pro users. Per-product usage details.|
|api_key_character_count|integer|false|none|Only present for API Pro users. Total characters used by this API key in the current period.|
|api_key_character_limit|integer|false|none|Only present for API Pro users. Character limit for this API key in the current period.|
|speech_to_text_milliseconds_count|integer|false|none|**Deprecated.** Deprecated. Always returns 0. Use speech_to_text_minutes_count instead.|
|speech_to_text_milliseconds_limit|integer|false|none|**Deprecated.** Deprecated. Always returns 0. Use speech_to_text_minutes_limit instead.|
|speech_to_text_minutes_count|integer|false|none|Only present for API Pro users. Minutes of speech-to-text used in the current period. Milliseconds are rounded up to the nearest minute.|
|speech_to_text_minutes_limit|integer|false|none|Only present for API Pro users. Maximum minutes of speech-to-text that can be used in the current billing period.|
|speech_to_speech_minutes_count|integer|false|none|Only present for API Pro users. Minutes of speech-to-speech used in the current period. Milliseconds are rounded up to the nearest minute.|
|speech_to_speech_minutes_limit|integer|false|none|Only present for API Pro users. Maximum minutes of speech-to-speech that can be used in the current billing period.|
|start_time|string(date-time)|false|none|Only present for API Pro users. Start time of the current billing period (ISO 8601).|
|end_time|string(date-time)|false|none|Only present for API Pro users. End time of the current billing period (ISO 8601).|

<h2 id="tocS_VoiceFormality">VoiceFormality</h2>
<!-- backwards compatibility -->
<a id="schemavoiceformality"></a>
<a id="schema_VoiceFormality"></a>
<a id="tocSvoiceformality"></a>
<a id="tocsvoiceformality"></a>

```json
"formal"
```

Sets whether the translated text should lean towards formal or informal language.
Possible options are:
  * `default` - use the default formality for the target language
  * `formal`/`more` - for a more formal language
  * `informal`/`less` - for a more informal language

<h2 id="tocS_VoiceMessageFormat">VoiceMessageFormat</h2>
<!-- backwards compatibility -->
<a id="schemavoicemessageformat"></a>
<a id="schema_VoiceMessageFormat"></a>
<a id="tocSvoicemessageformat"></a>
<a id="tocsvoicemessageformat"></a>

```json
"json"
```

Message encoding format for WebSocket communication. Determines how messages are serialized and transmitted.
Using `json`,  messages are JSON-encoded and sent as TEXT WebSocket frames. All binary fields (such as audio data) are base64-encoded strings.
Using `msgpack`, messages are MessagePack-encoded and sent as BINARY WebSocket frames. All binary fields (such as audio data) contain raw binary data.

For more details, see [Message Encoding](/docs/voice/message-encoding).

<h2 id="tocS_VoiceTargetMediaVoice">VoiceTargetMediaVoice</h2>
<!-- backwards compatibility -->
<a id="schemavoicetargetmediavoice"></a>
<a id="schema_VoiceTargetMediaVoice"></a>
<a id="tocSvoicetargetmediavoice"></a>
<a id="tocsvoicetargetmediavoice"></a>

```json
"female"
```

Target audio voice selection for synthesized speech. The default voice is language dependent.
Use `match` for speaker match, which produces translated speech with a voice close to the speaker's voice. Speaker match is only available for target languages whose translated speech is provided by DeepL, not for languages provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.
Requesting `match` for a target language that does not support it is not an error: the session is created and that language's translated speech uses a preset voice instead.

<h2 id="tocS_VoiceSourceMediaContentType">VoiceSourceMediaContentType</h2>
<!-- backwards compatibility -->
<a id="schemavoicesourcemediacontenttype"></a>
<a id="schema_VoiceSourceMediaContentType"></a>
<a id="tocSvoicesourcemediacontenttype"></a>
<a id="tocsvoicesourcemediacontenttype"></a>

```json
"audio/ogg;codecs=opus"
```

 The audio format for streaming, which specifies container, codec, and encoding parameters. See the table below for supported formats. If `audio/auto` is specified, the server will auto-detect the container and codec for all supported combinations, except PCM. That requires explicit encoding parameters. All formats need to be single channel audio.
 
 | Content Type                          | Container                                         | Codec                                     |
 | :------------------------------------ | :------------------------------------------------ | :---------------------------------------- |
 | `audio/auto`                          | Auto-detect: FLAC / Matroska / MPEG / Ogg / WebM  | Auto-detect AAC / FLAC / MP3 / OPUS       |
 | `audio/flac`                          | FLAC (flac)                                       | FLAC                                      |
 | `audio/mpeg`                          | MPEG (mp3/m4a)                                    | MP3                                       |
 | `audio/ogg`                           | Ogg (ogg/oga)                                     | Auto-detect FLAC / OPUS                   |
 | `audio/webm`                          | WebM (webm)                                       | OPUS                                      |
 | `audio/x-matroska`                    | Matroska (mkv/mka)                                | Auto-detect: AAC / FLAC / MP3 / OPUS      |
 | `audio/ogg;codecs=flac`               | Ogg (ogg/oga)                                     | FLAC                                      |
 | `audio/ogg;codecs=opus`               | Ogg (ogg/oga)                                     | OPUS                                      |
 | `audio/pcm;encoding=alaw;rate=8000`   | -                                                 | PCM A-Law 8000 Hz (G.711)                 |
 | `audio/pcm;encoding=ulaw;rate=8000`   | -                                                 | PCM µ-Law 8000 Hz (G.711)                 |
 | `audio/pcm;encoding=s16le;rate=8000`  | -                                                 | PCM signed 16-bit little-endian 8000 Hz   |
 | `audio/pcm;encoding=s16le;rate=16000` | -                                                 | PCM signed 16-bit little-endian 16000 Hz  |
 | `audio/pcm;encoding=s16le;rate=44100` | -                                                 | PCM signed 16-bit little-endian 44100 Hz  |
 | `audio/pcm;encoding=s16le;rate=48000` | -                                                 | PCM signed 16-bit little-endian 48000 Hz  |
 | `audio/webm;codecs=opus`              | WebM (webm)                                       | OPUS                                      |
 | `audio/x-matroska;codecs=aac`         | Matroska (mkv/mka)                                | AAC                                       |
 | `audio/x-matroska;codecs=flac`        | Matroska (mkv/mka)                                | FLAC                                      |
 | `audio/x-matroska;codecs=mp3`         | Matroska (mkv/mka)                                | MP3                                       |
 | `audio/x-matroska;codecs=opus`        | Matroska (mkv/mka)                                | OPUS                                      |
 

We recommend the following bitrates as good tradeoff between quality and bandwidth:
 - AAC: 96 kbps
 - FLAC: 256 kbps  (16000 Hz)
 - MP3: 128 kbps
 - OPUS: 32 kbps (recommendation for low bandwidth scenarios)
 - PCM: 256 kbps (16000 Hz, default recommendation)

<h2 id="tocS_VoiceSourceLanguage">VoiceSourceLanguage</h2>
<!-- backwards compatibility -->
<a id="schemavoicesourcelanguage"></a>
<a id="schema_VoiceSourceLanguage"></a>
<a id="tocSvoicesourcelanguage"></a>
<a id="tocsvoicesourcelanguage"></a>

```json
"en"
```

The source language of the audio stream. It can be left empty or must be one of the supported Voice API source languages and comply with IETF BCP 47 language tags.
Note: Some source transcription languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.

<h2 id="tocS_VoiceSourceLanguageMode">VoiceSourceLanguageMode</h2>
<!-- backwards compatibility -->
<a id="schemavoicesourcelanguagemode"></a>
<a id="schema_VoiceSourceLanguageMode"></a>
<a id="tocSvoicesourcelanguagemode"></a>
<a id="tocsvoicesourcelanguagemode"></a>

```json
"fixed"
```

Controls how the source_language value is used.
- `auto`: Treats source language as a hint; server can override
- `fixed`: Treats source language as mandatory; server must use this language

<h2 id="tocS_VoiceTargetLanguages">VoiceTargetLanguages</h2>
<!-- backwards compatibility -->
<a id="schemavoicetargetlanguages"></a>
<a id="schema_VoiceTargetLanguages"></a>
<a id="tocSvoicetargetlanguages"></a>
<a id="tocsvoicetargetlanguages"></a>

```json
[
  "de",
  "fr",
  "es"
]
```

List of target languages for translation. The stream will emit translations for each language. Language identifiers must comply with IETF BCP 47. See the [supported languages table](/docs/voice/supported-voice-languages) for details.

<h2 id="tocS_VoiceTargetMediaLanguages">VoiceTargetMediaLanguages</h2>
<!-- backwards compatibility -->
<a id="schemavoicetargetmedialanguages"></a>
<a id="schema_VoiceTargetMediaLanguages"></a>
<a id="tocSvoicetargetmedialanguages"></a>
<a id="tocsvoicetargetmedialanguages"></a>

```json
[
  "de"
]
```

List of target languages for which to generate synthesized audio. Languages specified here will automatically be added to target_languages if not already present, ensuring you receive both text translation and audio synthesis for these languages. If omitted, only text transcription and translation will be provided (no audio synthesis). Language identifiers must comply with IETF BCP 47.
Note: Some translated audio languages are provided through external service partners. See the [supported languages table](/docs/voice/supported-voice-languages) for details.

<h2 id="tocS_VoiceTargetMediaContentType">VoiceTargetMediaContentType</h2>
<!-- backwards compatibility -->
<a id="schemavoicetargetmediacontenttype"></a>
<a id="schema_VoiceTargetMediaContentType"></a>
<a id="tocSvoicetargetmediacontenttype"></a>
<a id="tocsvoicetargetmediacontenttype"></a>

```json
"audio/webm;codecs=opus"
```

 The audio format for synthesized target media streaming.
 Specifies container, codec, and encoding parameters for the audio returned in target_media_chunk messages.
 If not specified, defaults to audio/webm;codecs=opus.
 Only applies when target_media_languages is specified.
 
 | Content Type | Container | Codec |
 | :--- | :--- | :--- |
 | `audio/flac` | FLAC (flac) | FLAC 24000 Hz |
 | `video/mp2t;codecs=aac` | MPEG Transport Stream (Audio only) | AAC 70 kbit/s |
 | `video/mp2t;codecs=opus` | MPEG Transport Stream (Audio only) | OPUS 32 kbit/s |
 | `audio/ogg` | Ogg (ogg/oga) | OPUS 32 kbit/s |
 | `audio/ogg;codecs=flac` | Ogg (ogg/oga) | FLAC 24000 Hz |
 | `audio/ogg;codecs=opus` | Ogg (ogg/oga) | OPUS 32 kbit/s |
 | `audio/opus` | - | OPUS 32 kbit/s |
 | `audio/pcm;encoding=alaw;rate=8000` | - | PCM A-Law 8000 Hz (G.711) |
 | `audio/pcm;encoding=ulaw;rate=8000` | - | PCM µ-Law 8000 Hz (G.711) |
 | `audio/pcm;encoding=s16le;rate=16000` | - | PCM signed 16-bit little-endian 16000 Hz |
 | `audio/pcm;encoding=s16le;rate=24000` | - | PCM signed 16-bit little-endian 24000 Hz |
 | `audio/webm` | WebM (webm) | OPUS 32 kbit/s  |
 | `audio/webm;codecs=opus` | WebM (webm) | OPUS 32 kbit/s |
 | `audio/x-matroska;codecs=aac` | Matroska (mkv/mka) | AAC 70 kbit/s |
 | `audio/x-matroska;codecs=flac` | Matroska (mkv/mka) | FLAC 24000 Hz |
 | `audio/x-matroska;codecs=opus` | Matroska (mkv/mka) | OPUS 32 kbit/s |
 
 We recommend the following formats as good tradeoffs between quality and bandwidth:
 - OPUS (WebM): 32 kbps, recommended for low bandwidth scenarios (default)
 - PCM 24kHz: 384 kbps, high quality

<h2 id="tocS_VoiceStreamingResponse">VoiceStreamingResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicestreamingresponse"></a>
<a id="schema_VoiceStreamingResponse"></a>
<a id="tocSvoicestreamingresponse"></a>
<a id="tocsvoicestreamingresponse"></a>

```json
{
  "streaming_url": "wss://api.deepl.com/v3/voice/realtime/connect",
  "token": "VGhpcyBpcyBhIGZha2UgdG9rZW4K",
  "session_id": "4f911080-cfe2-41d4-8269-0e6ec15a0354"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streaming_url|string|true|none|The WebSocket URL to use for establishing [the stream connection](/api-reference/voice/websocket-streaming).<br>|
|token|string|true|none|A unique ephemeral token for authentication with the streaming endpoint. Pass this as a query parameter when connecting to [the streaming URL](/api-reference/voice/websocket-streaming). This token is ephemeral and valid for a short time and one-time use only.<br>|
|session_id|string|false|none|Internal use only. A unique identifier for the requested stream.<br>|

<h2 id="tocS_WritingStyle">WritingStyle</h2>
<!-- backwards compatibility -->
<a id="schemawritingstyle"></a>
<a id="schema_WritingStyle"></a>
<a id="tocSwritingstyle"></a>
<a id="tocswritingstyle"></a>

```json
"academic"
```

Specify a style to rephrase your text in a way that fits your audience and goals.
The `prefer_` prefix allows falling back to the default style if the language does not yet support styles.

<h2 id="tocS_WritingTone">WritingTone</h2>
<!-- backwards compatibility -->
<a id="schemawritingtone"></a>
<a id="schema_WritingTone"></a>
<a id="tocSwritingtone"></a>
<a id="tocswritingtone"></a>

```json
"confident"
```

Specify the desired tone for your text.
The `prefer_` prefix allows falling back to the default tone if the language does not yet support tones.

<h2 id="tocS_AdminUsageReport">AdminUsageReport</h2>
<!-- backwards compatibility -->
<a id="schemaadminusagereport"></a>
<a id="schema_AdminUsageReport"></a>
<a id="tocSadminusagereport"></a>
<a id="tocsadminusagereport"></a>

```json
{
  "usage_report": {
    "total_usage": {
      "total_characters": 9619,
      "text_translation_characters": 4892,
      "document_translation_characters": 0,
      "text_improvement_characters": 4727,
      "speech_to_text_minutes": 107.46
    },
    "start_date": "2025-09-29T00:00:00",
    "end_date": "2025-10-01T00:00:00",
    "group_by": "key_and_day",
    "key_usages": [
      {
        "api_key": "db96****cb2c",
        "api_key_label": "DeepL API Key Prod",
        "usage": {
          "total_characters": 9619,
          "text_translation_characters": 4892,
          "document_translation_characters": 0,
          "text_improvement_characters": 4727,
          "speech_to_text_minutes": 107.46
        }
      }
    ],
    "key_and_day_usages": [
      {
        "api_key": "db96****cb2c",
        "api_key_label": "DeepL API Key Prod",
        "usage_date": "2025-09-29T00:00:00Z",
        "usage": {
          "total_characters": 9619,
          "text_translation_characters": 4892,
          "document_translation_characters": 0,
          "text_improvement_characters": 4727,
          "speech_to_text_minutes": 107.46
        }
      }
    ]
  }
}
```

The response for admin usage statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usage_report|[AdminUsageReportData](#schemaadminusagereportdata)|false|none|Contains the detailed usage statistics for the specified date range.|

<h2 id="tocS_AdminUsageReportData">AdminUsageReportData</h2>
<!-- backwards compatibility -->
<a id="schemaadminusagereportdata"></a>
<a id="schema_AdminUsageReportData"></a>
<a id="tocSadminusagereportdata"></a>
<a id="tocsadminusagereportdata"></a>

```json
{
  "total_usage": {
    "total_characters": 9619,
    "text_translation_characters": 4892,
    "document_translation_characters": 0,
    "text_improvement_characters": 4727,
    "speech_to_text_minutes": 107.46
  },
  "start_date": "2025-09-29T00:00:00",
  "end_date": "2025-10-01T00:00:00",
  "group_by": "key_and_day",
  "key_usages": [
    {
      "api_key": "db96****cb2c",
      "api_key_label": "DeepL API Key Prod",
      "usage": {
        "total_characters": 9619,
        "text_translation_characters": 4892,
        "document_translation_characters": 0,
        "text_improvement_characters": 4727,
        "speech_to_text_minutes": 107.46
      }
    }
  ],
  "key_and_day_usages": [
    {
      "api_key": "db96****cb2c",
      "api_key_label": "DeepL API Key Prod",
      "usage_date": "2025-09-29T00:00:00Z",
      "usage": {
        "total_characters": 9619,
        "text_translation_characters": 4892,
        "document_translation_characters": 0,
        "text_improvement_characters": 4727,
        "speech_to_text_minutes": 107.46
      }
    }
  ]
}
```

Contains the detailed usage statistics for the specified date range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_usage|[UsageBreakdown](#schemausagebreakdown)|false|none|Breakdown of character usage by category.|
|start_date|string(date-time)|false|none|Start date of the usage report period.|
|end_date|string(date-time)|false|none|End date of the usage report period.|
|group_by|string|false|none|The grouping method used, if any.|
|key_usages|[[KeyUsageItem](#schemakeyusageitem)]|false|none|Usage statistics grouped by key. Present when group_by='key'.|
|key_and_day_usages|[[KeyAndDayUsageItem](#schemakeyanddayusageitem)]|false|none|Usage statistics grouped by key and day. Present when group_by='key_and_day'.|

#### Enumerated Values

|Property|Value|
|---|---|
|group_by|key|
|group_by|key_and_day|

<h2 id="tocS_UsageBreakdown">UsageBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemausagebreakdown"></a>
<a id="schema_UsageBreakdown"></a>
<a id="tocSusagebreakdown"></a>
<a id="tocsusagebreakdown"></a>

```json
{
  "total_characters": 9619,
  "text_translation_characters": 4892,
  "document_translation_characters": 0,
  "text_improvement_characters": 4727,
  "speech_to_text_minutes": 107.46
}
```

Breakdown of character usage by category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_characters|integer|false|none|Total number of characters used.|
|text_translation_characters|integer|false|none|Number of characters used for text translation.|
|document_translation_characters|integer|false|none|Number of characters used for document translation.|
|text_improvement_characters|integer|false|none|Number of characters used for text improvement.|
|speech_to_text_minutes|number|false|none|Duration of speech-to-text usage in minutes.|

<h2 id="tocS_KeyAndDayUsageItem">KeyAndDayUsageItem</h2>
<!-- backwards compatibility -->
<a id="schemakeyanddayusageitem"></a>
<a id="schema_KeyAndDayUsageItem"></a>
<a id="tocSkeyanddayusageitem"></a>
<a id="tocskeyanddayusageitem"></a>

```json
{
  "api_key": "db96****cb2c",
  "api_key_label": "DeepL API Key Prod",
  "usage_date": "2025-09-29T00:00:00Z",
  "usage": {
    "total_characters": 9619,
    "text_translation_characters": 4892,
    "document_translation_characters": 0,
    "text_improvement_characters": 4727,
    "speech_to_text_minutes": 107.46
  }
}
```

Usage statistics for a specific API key and optionally a specific date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|false|none|Masked API key identifier.|
|api_key_label|string|false|none|Label associated with the API key.|
|usage_date|string(date-time)|false|none|The usage date. Only present when group_by is "key_and_day".|
|usage|[UsageBreakdown](#schemausagebreakdown)|false|none|Breakdown of character usage by category.|

<h2 id="tocS_KeyUsageItem">KeyUsageItem</h2>
<!-- backwards compatibility -->
<a id="schemakeyusageitem"></a>
<a id="schema_KeyUsageItem"></a>
<a id="tocSkeyusageitem"></a>
<a id="tocskeyusageitem"></a>

```json
{
  "api_key": "db96****cb2c",
  "api_key_label": "DeepL API Key Prod",
  "usage": {
    "total_characters": 9619,
    "text_translation_characters": 4892,
    "document_translation_characters": 0,
    "text_improvement_characters": 4727,
    "speech_to_text_minutes": 107.46
  }
}
```

Usage statistics for a specific API key and optionally a specific date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|false|none|Masked API key identifier.|
|api_key_label|string|false|none|Label associated with the API key.|
|usage|[UsageBreakdown](#schemausagebreakdown)|false|none|Breakdown of character usage by category.|

<h2 id="tocS_CustomTagUsageReport">CustomTagUsageReport</h2>
<!-- backwards compatibility -->
<a id="schemacustomtagusagereport"></a>
<a id="schema_CustomTagUsageReport"></a>
<a id="tocScustomtagusagereport"></a>
<a id="tocscustomtagusagereport"></a>

```json
{
  "custom_tag_usage_report": {
    "aggregate_by": "period",
    "start_date": "2026-05-03T00:00:00",
    "end_date": "2026-05-05T00:00:00",
    "next_page": 2,
    "usage": [
      {
        "custom_tag": "example-custom-tag",
        "usage_date": "2026-05-04T00:00:00Z",
        "breakdown": {
          "total_characters": 380,
          "text_translation_characters": 380,
          "text_improvement_characters": 0,
          "speech_to_text_minutes": 12.5,
          "speech_to_speech_minutes": 4.2
        }
      }
    ]
  }
}
```

The response for admin custom tag usage statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_tag_usage_report|[CustomTagUsageReportData](#schemacustomtagusagereportdata)|false|none|Contains the detailed custom tag usage statistics for the specified date range.|

<h2 id="tocS_CustomTagUsageReportData">CustomTagUsageReportData</h2>
<!-- backwards compatibility -->
<a id="schemacustomtagusagereportdata"></a>
<a id="schema_CustomTagUsageReportData"></a>
<a id="tocScustomtagusagereportdata"></a>
<a id="tocscustomtagusagereportdata"></a>

```json
{
  "aggregate_by": "period",
  "start_date": "2026-05-03T00:00:00",
  "end_date": "2026-05-05T00:00:00",
  "next_page": 2,
  "usage": [
    {
      "custom_tag": "example-custom-tag",
      "usage_date": "2026-05-04T00:00:00Z",
      "breakdown": {
        "total_characters": 380,
        "text_translation_characters": 380,
        "text_improvement_characters": 0,
        "speech_to_text_minutes": 12.5,
        "speech_to_speech_minutes": 4.2
      }
    }
  ]
}
```

Contains the detailed custom tag usage statistics for the specified date range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregate_by|string|false|none|The aggregation method used.|
|start_date|string(date-time)|false|none|Start date of the usage report period.|
|end_date|string(date-time)|false|none|End date of the usage report period.|
|next_page|integer \| null|false|none|Cursor for the next page of results. Null if there are no further pages.|
|usage|[[CustomTagUsageItem](#schemacustomtagusageitem)]|false|none|List of custom tag usage entries.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregate_by|period|
|aggregate_by|day|

<h2 id="tocS_CustomTagUsageItem">CustomTagUsageItem</h2>
<!-- backwards compatibility -->
<a id="schemacustomtagusageitem"></a>
<a id="schema_CustomTagUsageItem"></a>
<a id="tocScustomtagusageitem"></a>
<a id="tocscustomtagusageitem"></a>

```json
{
  "custom_tag": "example-custom-tag",
  "usage_date": "2026-05-04T00:00:00Z",
  "breakdown": {
    "total_characters": 380,
    "text_translation_characters": 380,
    "text_improvement_characters": 0,
    "speech_to_text_minutes": 12.5,
    "speech_to_speech_minutes": 4.2
  }
}
```

Usage statistics for a specific custom tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_tag|string|false|none|The custom tag identifier.|
|usage_date|string(date-time)|false|none|The day the usage was recorded. Only returned when `aggregate_by` is `day`.|
|breakdown|[CustomTagBreakdown](#schemacustomtagbreakdown)|false|none|Breakdown of usage by category for a custom tag.|

<h2 id="tocS_CustomTagBreakdown">CustomTagBreakdown</h2>
<!-- backwards compatibility -->
<a id="schemacustomtagbreakdown"></a>
<a id="schema_CustomTagBreakdown"></a>
<a id="tocScustomtagbreakdown"></a>
<a id="tocscustomtagbreakdown"></a>

```json
{
  "total_characters": 380,
  "text_translation_characters": 380,
  "text_improvement_characters": 0,
  "speech_to_text_minutes": 12.5,
  "speech_to_speech_minutes": 4.2
}
```

Breakdown of usage by category for a custom tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_characters|integer|false|none|Total number of characters used across character-based services. Voice usage is reported in minutes and is not included in this total.<br>|
|text_translation_characters|integer|false|none|Number of characters used for text translation.|
|text_improvement_characters|integer|false|none|Number of characters used for text improvement.|
|speech_to_text_minutes|number|false|none|Duration of speech-to-text usage in minutes.|
|speech_to_speech_minutes|number|false|none|Duration of speech-to-speech usage in minutes.|

<h2 id="tocS_InfrastructureErrorResponse">InfrastructureErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemainfrastructureerrorresponse"></a>
<a id="schema_InfrastructureErrorResponse"></a>
<a id="tocSinfrastructureerrorresponse"></a>
<a id="tocsinfrastructureerrorresponse"></a>

```json
{
  "error": {
    "message": "Bad Gateway."
  }
}
```

Error body returned by DeepL's edge infrastructure for failures that occur before a request reaches the API itself. The message is nested under `error`, unlike the application-level `ErrorResponse`. Clients that parse error bodies should handle both shapes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "message": "string",
  "code": "invalid_content_type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A human-readable description of the error.|
|code|string|false|none|A machine-readable identifier for the error, when available. Clients should match on this value rather than on `message` when branching on error types.|

<h2 id="tocS_VoiceTranslateJobSourceContentType">VoiceTranslateJobSourceContentType</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobsourcecontenttype"></a>
<a id="schema_VoiceTranslateJobSourceContentType"></a>
<a id="tocSvoicetranslatejobsourcecontenttype"></a>
<a id="tocsvoicetranslatejobsourcecontenttype"></a>

```json
"audio/mpeg"
```

The MIME type of the source audio file.

<h2 id="tocS_JobSourceFileRequest">JobSourceFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemajobsourcefilerequest"></a>
<a id="schema_JobSourceFileRequest"></a>
<a id="tocSjobsourcefilerequest"></a>
<a id="tocsjobsourcefilerequest"></a>

```json
{
  "name": "podcast-episode-42.mp3",
  "content_type": "audio/mpeg",
  "content_length": 15728640
}
```

Metadata about the source audio file to be uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The file name of the source audio file.|
|content_type|[VoiceTranslateJobSourceContentType](#schemavoicetranslatejobsourcecontenttype)|true|none|The MIME type of the source audio file.|
|content_length|integer(int64)|true|none|The size of the source audio file in bytes. Maximum 1 GB (1,073,741,824 bytes).|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|audio/mpeg|
|content_type|audio/wav|
|content_type|audio/ogg|
|content_type|audio/flac|
|content_type|audio/mp4|
|content_type|audio/webm|

<h2 id="tocS_JobSourceFileResponse">JobSourceFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobsourcefileresponse"></a>
<a id="schema_JobSourceFileResponse"></a>
<a id="tocSjobsourcefileresponse"></a>
<a id="tocsjobsourcefileresponse"></a>

```json
{
  "name": "string",
  "content_type": "string",
  "content_length": 0
}
```

Metadata about the uploaded source audio file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The file name of the source audio file.|
|content_type|string|true|none|The MIME type of the source audio file.|
|content_length|integer(int64)|true|none|The size of the source audio file in bytes.|

<h2 id="tocS_VoiceTranslateJobTargetOutputType">VoiceTranslateJobTargetOutputType</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobtargetoutputtype"></a>
<a id="schema_VoiceTranslateJobTargetOutputType"></a>
<a id="tocSvoicetranslatejobtargetoutputtype"></a>
<a id="tocsvoicetranslatejobtargetoutputtype"></a>

```json
"text/plain"
```

The desired output format for the translation target.

<h2 id="tocS_VoiceTranslateJobParametersRequest">VoiceTranslateJobParametersRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobparametersrequest"></a>
<a id="schema_VoiceTranslateJobParametersRequest"></a>
<a id="tocSvoicetranslatejobparametersrequest"></a>
<a id="tocsvoicetranslatejobparametersrequest"></a>

```json
{
  "source_language": {}
}
```

Processing parameters for the voice translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_language|object|false|none|none|

<h2 id="tocS_VoiceTranslateJobParametersResponse">VoiceTranslateJobParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobparametersresponse"></a>
<a id="schema_VoiceTranslateJobParametersResponse"></a>
<a id="tocSvoicetranslatejobparametersresponse"></a>
<a id="tocsvoicetranslatejobparametersresponse"></a>

```json
{
  "source_language": {}
}
```

Processing parameters as applied to the voice translation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_language|object|false|none|none|

<h2 id="tocS_VoiceTranslateJobTargetRequest">VoiceTranslateJobTargetRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobtargetrequest"></a>
<a id="schema_VoiceTranslateJobTargetRequest"></a>
<a id="tocSvoicetranslatejobtargetrequest"></a>
<a id="tocsvoicetranslatejobtargetrequest"></a>

```json
{
  "language": "DE",
  "type": "text/plain"
}
```

A translation target specifying the desired output language and format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[TargetLanguage](#schematargetlanguage)|true|none|The language into which the text should be translated.<br><br>For the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|type|[VoiceTranslateJobTargetOutputType](#schemavoicetranslatejobtargetoutputtype)|true|none|The desired output format for the translation target.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text/plain|
|type|application/x-subrip|
|type|audio/opus|
|type|audio/flac|
|type|audio/pcm;encoding=s16le;rate=16000|
|type|audio/pcm;encoding=s16le;rate=24000|
|type|audio/pcm;encoding=ulaw;rate=8000|
|type|audio/pcm;encoding=alaw;rate=8000|
|type|audio/x-matroska;codecs=aac|
|type|audio/x-matroska;codecs=flac|
|type|audio/x-matroska;codecs=opus|
|type|audio/x-matroska;codecs=pcm_s16le;rate=16000|
|type|audio/x-matroska;codecs=pcm_s16le;rate=24000|
|type|video/mp2t;codecs=aac|
|type|video/mp2t;codecs=opus|
|type|audio/ogg;codecs=flac|
|type|audio/ogg;codecs=opus|
|type|audio/webm;codecs=opus|

<h2 id="tocS_VoiceTranslateJobTargetResponse">VoiceTranslateJobTargetResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobtargetresponse"></a>
<a id="schema_VoiceTranslateJobTargetResponse"></a>
<a id="tocSvoicetranslatejobtargetresponse"></a>
<a id="tocsvoicetranslatejobtargetresponse"></a>

```json
{
  "language": "DE",
  "type": "text/plain"
}
```

A translation target as recorded on the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[TargetLanguage](#schematargetlanguage)|true|none|The language into which the text should be translated.<br><br>For the full list of supported target languages, see [supported languages](https://developers.deepl.com/docs/getting-started/supported-languages) or query the [`GET /v3/languages` endpoint](https://developers.deepl.com/docs/languages/using-the-languages-api).|
|type|[VoiceTranslateJobTargetOutputType](#schemavoicetranslatejobtargetoutputtype)|true|none|The desired output format for the translation target.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text/plain|
|type|application/x-subrip|
|type|audio/opus|
|type|audio/flac|
|type|audio/pcm;encoding=s16le;rate=16000|
|type|audio/pcm;encoding=s16le;rate=24000|
|type|audio/pcm;encoding=ulaw;rate=8000|
|type|audio/pcm;encoding=alaw;rate=8000|
|type|audio/x-matroska;codecs=aac|
|type|audio/x-matroska;codecs=flac|
|type|audio/x-matroska;codecs=opus|
|type|audio/x-matroska;codecs=pcm_s16le;rate=16000|
|type|audio/x-matroska;codecs=pcm_s16le;rate=24000|
|type|video/mp2t;codecs=aac|
|type|video/mp2t;codecs=opus|
|type|audio/ogg;codecs=flac|
|type|audio/ogg;codecs=opus|
|type|audio/webm;codecs=opus|

<h2 id="tocS_VoiceTranslateCreateJobRequest">VoiceTranslateCreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatecreatejobrequest"></a>
<a id="schema_VoiceTranslateCreateJobRequest"></a>
<a id="tocSvoicetranslatecreatejobrequest"></a>
<a id="tocsvoicetranslatecreatejobrequest"></a>

```json
{
  "source_file": {
    "name": "podcast-episode-42.mp3",
    "content_type": "audio/mpeg",
    "content_length": 15728640
  },
  "parameters": {
    "source_language": {}
  },
  "targets": [
    {
      "language": "DE",
      "type": "text/plain"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_file|[JobSourceFileRequest](#schemajobsourcefilerequest)|true|none|Metadata about the source audio file to be uploaded.|
|parameters|[VoiceTranslateJobParametersRequest](#schemavoicetranslatejobparametersrequest)|false|none|Processing parameters for the voice translation job.|
|targets|[[VoiceTranslateJobTargetRequest](#schemavoicetranslatejobtargetrequest)]|true|none|One or more translation targets. Each target produces a separate result.|

<h2 id="tocS_VoiceTranslateCreateJobResponse">VoiceTranslateCreateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatecreatejobresponse"></a>
<a id="schema_VoiceTranslateCreateJobResponse"></a>
<a id="tocSvoicetranslatecreatejobresponse"></a>
<a id="tocsvoicetranslatecreatejobresponse"></a>

```json
{
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "upload_url": "http://example.com",
  "signature": "string",
  "signed_upload_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|true|none|The unique identifier of the created job.|
|upload_url|string(uri)|true|none|The URL to upload the source audio file to via `PUT` with `Content-Type: application/octet-stream`.<br>Requires the `Authorization: DeepL-Signature {signature}` header.<br>See [Upload File](/api-reference/jobs-voice-translate#upload-file) for details.|
|signature|string|true|none|A short-lived token used to authorize the file upload. Pass it via the `Authorization` header as `DeepL-Signature {signature}` when uploading to the `upload_url`.|
|signed_upload_url|string(uri)|false|none|A pre-signed upload URL that does not require an authorization header. Only present when `?include=signed_url` is specified.|

<h2 id="tocS_JobUsage">JobUsage</h2>
<!-- backwards compatibility -->
<a id="schemajobusage"></a>
<a id="schema_JobUsage"></a>
<a id="tocSjobusage"></a>
<a id="tocsjobusage"></a>

```json
{
  "storage_used": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|storage_used|integer(int64)|false|none|Total storage used by this job in bytes, including source and output files.|

<h2 id="tocS_ResultStatus">ResultStatus</h2>
<!-- backwards compatibility -->
<a id="schemaresultstatus"></a>
<a id="schema_ResultStatus"></a>
<a id="tocSresultstatus"></a>
<a id="tocsresultstatus"></a>

```json
"pending"
```

The processing status of a target result.
- `pending`: Job created, awaiting file upload.
- `uploaded`: File uploaded, awaiting processing.
- `processing`: Translation in progress.
- `complete`: Translation complete, result available for download.
- `downloaded`: Result has been downloaded. Assets are marked for deletion.
- `failed`: Processing failed. See the `error` field for details.

<h2 id="tocS_VoiceTranslateJobTargetResult">VoiceTranslateJobTargetResult</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobtargetresult"></a>
<a id="schema_VoiceTranslateJobTargetResult"></a>
<a id="tocSvoicetranslatejobtargetresult"></a>
<a id="tocsvoicetranslatejobtargetresult"></a>

```json
{
  "status": "pending",
  "download_url": "http://example.com",
  "signature": "string",
  "signed_download_url": "http://example.com",
  "error": {
    "message": "string",
    "code": "invalid_content_type"
  }
}
```

The processing result for a single translation target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[ResultStatus](#schemaresultstatus)|true|none|The processing status of a target result.<br>- `pending`: Job created, awaiting file upload.<br>- `uploaded`: File uploaded, awaiting processing.<br>- `processing`: Translation in progress.<br>- `complete`: Translation complete, result available for download.<br>- `downloaded`: Result has been downloaded. Assets are marked for deletion.<br>- `failed`: Processing failed. See the `error` field for details.|
|download_url|string(uri)|false|none|The URL to download the translated result via `GET`.<br>Requires the `Authorization: DeepL-Signature {signature}` header.<br>Only present when `status` is `complete`.<br>See [Download Result](/api-reference/jobs-voice-translate#download-result) for details.|
|signature|string|false|none|A short-lived token used to authorize the result download. Only present when `status` is `complete`.|
|signed_download_url|string(uri)|false|none|A pre-signed download URL that does not require an authorization header. Only present when `status` is `complete` and `?include=signed_url` is specified.|
|error|object|false|none|Details about the processing failure. Only present when `status` is `failed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|uploaded|
|status|processing|
|status|complete|
|status|downloaded|
|status|failed|

<h2 id="tocS_VoiceTranslateJobStatusResponse">VoiceTranslateJobStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemavoicetranslatejobstatusresponse"></a>
<a id="schema_VoiceTranslateJobStatusResponse"></a>
<a id="tocSvoicetranslatejobstatusresponse"></a>
<a id="tocsvoicetranslatejobstatusresponse"></a>

```json
{
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "product": "voice",
  "operation": "translate",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "usage": {
    "storage_used": 0
  },
  "source_file": {
    "name": "string",
    "content_type": "string",
    "content_length": 0
  },
  "parameters": {
    "source_language": {}
  },
  "targets": [
    {
      "language": "DE",
      "type": "text/plain"
    }
  ],
  "results": [
    {
      "status": "pending",
      "download_url": "http://example.com",
      "signature": "string",
      "signed_download_url": "http://example.com",
      "error": {
        "message": "string",
        "code": "invalid_content_type"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string(uuid)|true|none|The unique identifier of the job.|
|product|string|true|none|The product identifier.|
|operation|string|true|none|The operation identifier.|
|created_at|string(date-time)|true|none|When the job was created (ISO 8601).|
|updated_at|string(date-time)|true|none|When the job was last updated (ISO 8601).|
|usage|[JobUsage](#schemajobusage)|true|none|none|
|source_file|[JobSourceFileResponse](#schemajobsourcefileresponse)|true|none|Metadata about the uploaded source audio file.|
|parameters|[VoiceTranslateJobParametersResponse](#schemavoicetranslatejobparametersresponse)|true|none|Processing parameters as applied to the voice translation job.|
|targets|[[VoiceTranslateJobTargetResponse](#schemavoicetranslatejobtargetresponse)]|true|none|The translation targets as specified in the create request.|
|results|[[VoiceTranslateJobTargetResult](#schemavoicetranslatejobtargetresult)]|true|none|Per-target processing results, in the same order as the `targets` array.|

<h2 id="tocS_QualityEvaluationProcessing">QualityEvaluationProcessing</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationprocessing"></a>
<a id="schema_QualityEvaluationProcessing"></a>
<a id="tocSqualityevaluationprocessing"></a>
<a id="tocsqualityevaluationprocessing"></a>

```json
{
  "job_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "processing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|processing|

<h2 id="tocS_QualityEvaluationDone">QualityEvaluationDone</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationdone"></a>
<a id="schema_QualityEvaluationDone"></a>
<a id="tocSqualityevaluationdone"></a>
<a id="tocsqualityevaluationdone"></a>

```json
{
  "job_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "done",
  "segments": [
    {
      "segment_index": 0,
      "segment_score": 38.5,
      "source": "Our Q3 revenue came in 5% above forecast.",
      "target": "Unser Q3-Umsatz lag 5 % unter der Prognose.",
      "applied_glossary_term_pairs": [
        {
          "source_term": "forecast",
          "target_term": "Prognose",
          "ranges": [
            {
              "start": 23,
              "end": 31
            }
          ]
        }
      ],
      "errors": [
        {
          "type": "Accuracy",
          "sub_type": "Mistranslation",
          "severity": "Critical",
          "explanation": "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
          "source_spans": [
            {
              "start": 23,
              "end": 31
            }
          ],
          "target_spans": [
            {
              "start": 23,
              "end": 31
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|
|status|string|true|none|none|
|segments|[[QualityEvaluationSegment](#schemaqualityevaluationsegment)]|true|none|One entry per evaluated segment of the document, in reading order.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|done|

<h2 id="tocS_QualityEvaluationFailed">QualityEvaluationFailed</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationfailed"></a>
<a id="schema_QualityEvaluationFailed"></a>
<a id="tocSqualityevaluationfailed"></a>
<a id="tocsqualityevaluationfailed"></a>

```json
{
  "job_id": "04DE5AD98A02647D83285A36021911C6",
  "status": "error",
  "error": {
    "code": "evaluation_failed",
    "message": "The evaluation pipeline encountered an unexpected error."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|none|
|status|string|true|none|none|
|error|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|error|

<h2 id="tocS_QualityEvaluationSegment">QualityEvaluationSegment</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationsegment"></a>
<a id="schema_QualityEvaluationSegment"></a>
<a id="tocSqualityevaluationsegment"></a>
<a id="tocsqualityevaluationsegment"></a>

```json
{
  "segment_index": 0,
  "segment_score": 38.5,
  "source": "Our Q3 revenue came in 5% above forecast.",
  "target": "Unser Q3-Umsatz lag 5 % unter der Prognose.",
  "applied_glossary_term_pairs": [
    {
      "source_term": "forecast",
      "target_term": "Prognose",
      "ranges": [
        {
          "start": 23,
          "end": 31
        }
      ]
    }
  ],
  "errors": [
    {
      "type": "Accuracy",
      "sub_type": "Mistranslation",
      "severity": "Critical",
      "explanation": "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
      "source_spans": [
        {
          "start": 23,
          "end": 31
        }
      ],
      "target_spans": [
        {
          "start": 23,
          "end": 31
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment_index|integer|true|none|Zero-based index of this segment within the document, in reading order.|
|segment_score|number(float)|true|none|Quality score for this segment, where 0 is lowest and 100 is highest.|
|source|string|false|none|The segment's source text as the evaluation read it. `source_spans` are offsets into this text. Omitted when the text is unavailable. See [Segment text](/api-reference/quality-evaluations/poll#segment-text).|
|target|string|false|none|The segment's translated text as the evaluation read it. `target_spans` are offsets into this text. Omitted when the text is unavailable. See [Segment text](/api-reference/quality-evaluations/poll#segment-text).|
|applied_glossary_term_pairs|[[QualityEvaluationAppliedGlossaryTermPair](#schemaqualityevaluationappliedglossarytermpair)]|false|none|Glossary term pairs applied to this segment when the document was translated, so you can tell which customizations were in play where an issue was reported. Omitted when no term pair was applied.|
|errors|[[QualityEvaluationIssue](#schemaqualityevaluationissue)]|true|none|Quality issues identified in this segment. Empty if no issues were found.|

<h2 id="tocS_QualityEvaluationAppliedGlossaryTermPair">QualityEvaluationAppliedGlossaryTermPair</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationappliedglossarytermpair"></a>
<a id="schema_QualityEvaluationAppliedGlossaryTermPair"></a>
<a id="tocSqualityevaluationappliedglossarytermpair"></a>
<a id="tocsqualityevaluationappliedglossarytermpair"></a>

```json
{
  "source_term": "forecast",
  "target_term": "Prognose",
  "ranges": [
    {
      "start": 23,
      "end": 31
    }
  ]
}
```

A glossary term pair that was applied to the segment's translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_term|string|true|none|The source term, as defined in the glossary.|
|target_term|string|true|none|The target term, as applied to the translation.|
|ranges|[[QualityEvaluationSpan](#schemaqualityevaluationspan)]|true|none|Spans in `target` where the target term was applied, using the same convention as `source_spans` and `target_spans`. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).|

<h2 id="tocS_QualityEvaluationIssue">QualityEvaluationIssue</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationissue"></a>
<a id="schema_QualityEvaluationIssue"></a>
<a id="tocSqualityevaluationissue"></a>
<a id="tocsqualityevaluationissue"></a>

```json
{
  "type": "Accuracy",
  "sub_type": "Mistranslation",
  "severity": "Critical",
  "explanation": "The source says revenue was '5% above forecast' but the translation says '5 % unter der Prognose' (5% below forecast). This completely reverses the meaning and has financial implications.",
  "source_spans": [
    {
      "start": 23,
      "end": 31
    }
  ],
  "target_spans": [
    {
      "start": 23,
      "end": 31
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Top-level category of the issue. See [Type and sub-type values](/api-reference/quality-evaluations/poll#type-and-sub-type-values).|
|sub_type|string|true|none|Finer-grained category within `type`. See [Type and sub-type values](/api-reference/quality-evaluations/poll#type-and-sub-type-values).|
|severity|string|true|none|How serious the issue is. See [Severity values](/api-reference/quality-evaluations/poll#severity-values).|
|explanation|string|true|none|Description of the issue. May span multiple sentences.|
|source_spans|[[QualityEvaluationSpan](#schemaqualityevaluationspan)]|true|none|Spans on the segment's source text where this issue applies. Empty if no source-side highlight. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).|
|target_spans|[[QualityEvaluationSpan](#schemaqualityevaluationspan)]|true|none|Spans on the segment's target text where this issue applies. Empty if no target-side highlight. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Accuracy|
|type|Fluency|
|type|Style|
|type|Miscellaneous|
|type|InternalTQEError|
|sub_type|Addition|
|sub_type|Omission|
|sub_type|Mistranslation|
|sub_type|Over-translation|
|sub_type|Under-translation|
|sub_type|Untranslated text|
|sub_type|Punctuation|
|sub_type|Spelling|
|sub_type|Grammar|
|sub_type|Grammatical register|
|sub_type|Inconsistency|
|sub_type|Character encoding|
|sub_type|Awkward|
|sub_type|Inconsistent style|
|sub_type|SegmentTooLarge|
|severity|Critical|
|severity|Major|
|severity|Minor|

<h2 id="tocS_QualityEvaluationSpan">QualityEvaluationSpan</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationspan"></a>
<a id="schema_QualityEvaluationSpan"></a>
<a id="tocSqualityevaluationspan"></a>
<a id="tocsqualityevaluationspan"></a>

```json
{
  "start": 23,
  "end": 31
}
```

A half-open `[start, end)` range of Unicode code points within a segment's source or target text. See [Span ranges](/api-reference/quality-evaluations/poll#span-ranges).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer|true|none|Inclusive start index. A 0-based Unicode code-point offset.|
|end|integer|true|none|Exclusive end index. A 0-based Unicode code-point offset.|

<h2 id="tocS_QualityEvaluationApiError">QualityEvaluationApiError</h2>
<!-- backwards compatibility -->
<a id="schemaqualityevaluationapierror"></a>
<a id="schema_QualityEvaluationApiError"></a>
<a id="tocSqualityevaluationapierror"></a>
<a id="tocsqualityevaluationapierror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Error message.|
