<h1 id="arespass">Arespass v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Analyzes a password and calculates its entropy.

Base URLs:

* <a href="http://arespass.net/v1.0">http://arespass.net/v1.0</a>

<h1 id="arespass-default">Default</h1>

## Metadata about this API&amp;#58; version number, release date and available languages. Metadata requests are NOT billed.

> Code samples

```bash
curl https://example.com/about \
  -H 'Accept: application/json'
```

`GET /about`

<h3 id="metadata-about-this-api58-version-number-release-date-and-available-languages-metadata-requests-are-not-billed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|outputFormat|query|string|false|**The format of the returned metadata.**<br><br>Allowed values are *json*, *xml* and *yaml*.<br><br>The default value is *xml*.<br>|

> Example responses

> 200 Response

```json
{
  "apiReleaseDateIso8601": "string",
  "apiVersion": {
    "majorNumber": 0,
    "minorNumber": 0
  },
  "availableLanguagesIso639_1": "string"
}
```

<h3 id="metadata-about-this-api58-version-number-release-date-and-available-languages-metadata-requests-are-not-billed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|**The metadata about this API&#58; version number, release date and available languages.**<br>|[about](#schemaabout)|
|400|Bad Request|**At least one error was found in the request parameters.**<br>|None|
|405|Method Not Allowed|**HTTP method POST is not allowed.**<br>|None|
|500|Internal Server Error|**Unexpected server error.**                <br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## The entropy calculator - alias ec -, analyzes a password and calculates its entropy. Entropy calculator requests are billed.

> Code samples

```bash
curl 'https://example.com/ec?password=string' \
  -H 'Accept: application/json'
```

`GET /ec`

<h3 id="the-entropy-calculator---alias-ec---analyzes-a-password-and-calculates-its-entropy-entropy-calculator-requests-are-billed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|password|query|string|true|**The password to be analyzed.**<br><br>Minimum length is 4 characters; maximum length is 128 characters.<br><br>Beware that certain characters like '&#35;', '&#61;' or '&#63;' must be properly encoded.<br><br>For more information about this issue, please refer to RFC 3986 ("*Uniform Resource Identifier (URI): Generic Syntax*"), sections 2.1, 2.2 and 2.4.<br>|
|outputFormat|query|string|false|**The format of the returned analysis.**<br><br>Allowed values are *json*, *xml* and *yaml*.<br><br>The default value is *xml*.<br>|
|penalty|query|number|false|**The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br><br>The character used as decimal separator is always '&#46;'. Hence, a parameter value like *0,33* would be illegal.<br><br>The default value is *0.25*.<br>|
|reqId|query|string|false|**An identifier for this request.**<br><br>The request identifier is a string that must match the regular expression */(?i)^[a-z0-9]{8,16}$/*.<br><br>This identifier is echoed in the returned response. Its value has no effect on the password analysis.<br><br>If this parameter is unset, a randomly generated identifier will be automatically assigned to this request.<br>|

> Example responses

> 200 Response

```json
{
  "alphabetSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "apiVersion": "string",
  "detectedKeyboard": "string",
  "efficiency": 0,
  "entropy": 0,
  "entropyDistribution": [
    {
      "char": "string",
      "l33tchar": "string",
      "percentage": 0
    }
  ],
  "idealEntropy": 0,
  "keyboardSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "l33tPassword": "string",
  "nonUniformEntropyDistributionPenalty": 0,
  "numberSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "password": "string",
  "passwordLength": 0,
  "penalty": 0,
  "repeatedChars": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "requestId": "string",
  "requestTimestamp": 0,
  "summary": [
    "string"
  ],
  "total": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "words": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ]
}
```

<h3 id="the-entropy-calculator---alias-ec---analyzes-a-password-and-calculates-its-entropy-entropy-calculator-requests-are-billed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The password analysis, including the calculated entropy.|[ec](#schemaec)|
|400|Bad Request|**At least one error was found in the request parameters.**<br>|None|
|405|Method Not Allowed|**HTTP method POST is not allowed.**<br>|None|
|500|Internal Server Error|**Unexpected server error.**<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_about">about</h2>
<!-- backwards compatibility -->
<a id="schemaabout"></a>
<a id="schema_about"></a>
<a id="tocSabout"></a>
<a id="tocsabout"></a>

```json
{
  "apiReleaseDateIso8601": "string",
  "apiVersion": {
    "majorNumber": 0,
    "minorNumber": 0
  },
  "availableLanguagesIso639_1": "string"
}
```

**This API version number**.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiReleaseDateIso8601|string|false|none|**The release date of this API, ISO 8601 format.**<br>|
|apiVersion|object|false|none|none|
|availableLanguagesIso639_1|string|false|none|**The list of available languages.**<br><br>Each language is identified by its ISO 639-1, two-letter code.<br><br>The list elements are comma-separated and sorted in ascending order.<br>|

<h2 id="tocS_ec">ec</h2>
<!-- backwards compatibility -->
<a id="schemaec"></a>
<a id="schema_ec"></a>
<a id="tocSec"></a>
<a id="tocsec"></a>

```json
{
  "alphabetSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "apiVersion": "string",
  "detectedKeyboard": "string",
  "efficiency": 0,
  "entropy": 0,
  "entropyDistribution": [
    {
      "char": "string",
      "l33tchar": "string",
      "percentage": 0
    }
  ],
  "idealEntropy": 0,
  "keyboardSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "l33tPassword": "string",
  "nonUniformEntropyDistributionPenalty": 0,
  "numberSequence": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "password": "string",
  "passwordLength": 0,
  "penalty": 0,
  "repeatedChars": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "requestId": "string",
  "requestTimestamp": 0,
  "summary": [
    "string"
  ],
  "total": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ],
  "words": [
    {
      "char": "string",
      "l33tchar": "string",
      "penalty": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alphabetSequence|[object]|false|none|**The penalty applied to each character that has been found to be part of an alphabet sequence.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
|apiVersion|string|false|none|**This API version number.**<br>|
|detectedKeyboard|string|false|none|**The detected keyboard, QWERTY or Dvorak.**<br>|
|efficiency|number|false|none|**The ratio entropy / idealEntropy.**<br><br>It is a float number in the range [0, 1].<br>|
|entropy|number|false|none|**The entropy calculated for the input password.**<br><br>It is measured in bits.<br>|
|entropyDistribution|[object]|false|none|**The distribution of the calculated entropy among the password characters.**<br>|
|idealEntropy|number|false|none|**The Shannon entropy.**<br><br>The Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.<br><br>It is measured in bits.<br>|
|keyboardSequence|[object]|false|none|**The penalty applied to each character that has been found to be part of a keyboard sequence.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
|l33tPassword|string|false|none|The analyzed password after the l33t substitution.|
|nonUniformEntropyDistributionPenalty|number|false|none|**The penalty applied to the whole password because of irregular entropy distribution.**<br><br>This penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
|numberSequence|[object]|false|none|**The penalty applied to each character that has been found to be part of a number sequence.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
|password|string|false|none|The analyzed password.|
|passwordLength|integer|false|none|The number of characters the password has.|
|penalty|number|false|none|**The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br><br>Its value is equal to the value of the input parameter *penalty*.<br>|
|repeatedChars|[object]|false|none|**The penalty applied to each character that are repeated**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.          <br>|
|requestId|string|false|none|**The identifier of the request that corresponds to this response.**<br>|
|requestTimestamp|number|false|none|**The timestamp for this response.**<br><br>Milliseconds from the epoch of 1970-01-01T00:00:00Z.<br>|
|summary|[string]|false|none|none|
|total|[object]|false|none|**The total penalty applied to each character.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
|words|[object]|false|none|**The penalty applied to each character that has been found to be part of a word.**<br><br>The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.<br>|
