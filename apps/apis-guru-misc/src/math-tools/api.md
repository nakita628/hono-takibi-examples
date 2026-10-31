<h1 id="numbers-api">Numbers API v1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

All about Numbers. REST access with json/xml/jsonp result support. Below is the documentation for the Numbers API. You can try them out right here. Find more information and subscribe at [math.tools](https://math.tools/api/numbers/)

Base URLs:

* <a href="https://api.math.tools">https://api.math.tools</a>

* <a href="http://api.math.tools">http://api.math.tools</a>

# Authentication

* API Key (X-Mathtools-Api-Secret)
    - Parameter Name: **X-Mathtools-Api-Secret**, in: header.

<h1 id="numbers-api-number-of-the-day">Number of the day</h1>

Number of the day. This API is free (rate limited).

## get/numbers/nod

> Code samples

```bash
curl https://example.com/numbers/nod \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/nod`

Get the number of the day for current day

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"nod\": {\n      \"category\": {\n        \"name\": \"nod\",\n        \"description\": \"Number of the day.\",\n        \"background\": \"\"\n      },\n      \"numbers\": {\n        \"number\": \"56006\",\n        \"uuid\": \"56006\",\n        \"id\": \"56006\",\n        \"names\": {\n          \"nominal\": {\n            \"name\": \"nominal\",\n            \"description\": \"Nominal\",\n            \"value\": \"56006\",\n            \"display\": \"56006\"\n          },\n          \"cardinal\": {\n            \"name\": \"cardinal\",\n            \"description\": \"Cardinal\",\n            \"value\": \"fifty-six thousand six\",\n            \"display\": \"fifty-six thousand six\"\n          },\n          \"ordinal\": {\n            \"name\": \"ordinal\",\n            \"description\": \"Ordinal\",\n            \"value\": \"56,006th\",\n            \"display\": \"56,006th\"\n          },\n          \"us_currency\": {\n            \"name\": \"us_currency\",\n            \"description\": \"This number as US currency\",\n            \"value\": \"fifty-six thousand six dollars\",\n            \"display\": \"fifty-six thousand six dollars\"\n          }\n        },\n        \"bases\": {\n          \"binary\": {\n            \"name\": \"binary\",\n            \"description\": \"Base 2 (Binary)\",\n            \"value\": \"1101101011000110\",\n            \"display\": \"1101101011000110<sub>2</sub>\"\n          },\n          \"ternary\": {\n            \"name\": \"ternary\",\n            \"description\": \"Base 3 (Ternary)\",\n            \"value\": \"2211211022\",\n            \"display\": \"2211211022<sub>3</sub>\"\n          },\n          \"quaternary\": {\n            \"name\": \"quaternary\",\n            \"description\": \"Base 4 (Quaternary)\",\n            \"value\": \"31223012\",\n            \"display\": \"31223012<sub>4</sub>\"\n          },\n          \"quinary\": {\n            \"name\": \"quinary\",\n            \"description\": \"Base 5 (Quinary)\",\n            \"value\": \"3243011\",\n            \"display\": \"3243011<sub>5</sub>\"\n          },\n          \"senary\": {\n            \"name\": \"senary\",\n            \"description\": \"Base 6 (Senary)\",\n            \"value\": \"1111142\",\n            \"display\": \"1111142<sub>6</sub>\"\n          },\n          \"octal\": {\n            \"name\": \"octal\",\n            \"description\": \"Base 8 (Octal)\",\n            \"value\": \"155306\",\n            \"display\": \"155306<sub>8</sub>\"\n          },\n          \"duodecimal\": {\n            \"name\": \"duodecimal\",\n            \"description\": \"Base 12 (Duodecimal)\",\n            \"value\": \"284B2\",\n            \"display\": \"284B2<sub>12</sub>\"\n          },\n          \"hexadecimal\": {\n            \"name\": \"vexadecimal\",\n            \"description\": \"Base 16 (Hexadecimal)\",\n            \"value\": \"DAC6\",\n            \"display\": \"DAC6<sub>16</sub>\"\n          },\n          \"vigesimal\": {\n            \"name\": \"vigesimal\",\n            \"description\": \"Base 20 (Vigesimal)\",\n            \"value\": \"7006\",\n            \"display\": \"7006<sub>20</sub>\"\n          }\n        },\n        \"numerals\": {\n          \"roman\": {\n            \"name\": \"roman\",\n            \"description\": \"56006 in <a href=\\\"/numbers/to-roman/\\\">Roman Numeral</a>\",\n            \"value\": \"<span class='u'>L</span><span class='u'>V</span>MVI\",\n            \"display\": \"<span class='u'>L</span><span class='u'>V</span>MVI\"\n          },\n          \"chinese\": {\n            \"name\": \"chinese\",\n            \"description\": \"56006 in <a href=\\\"/numbers/to-chinese/\\\">Chinese Numeral</a>\",\n            \"value\": \"&#20237;&#33836;&#38520;&#20191;&#38520;\",\n            \"display\": \"&#20237;&#33836;&#38520;&#20191;&#38520;\"\n          },\n          \"egyptian\": {\n            \"name\": \"egyptian\",\n            \"description\": \"56006 in <a href=\\\"/numbers/to-egyptian/\\\">Egyptian Numeral</a>\",\n            \"value\": \"&#x130b1;&#x131c1;&#x133ff;\",\n            \"display\": \"&#x130b1;&#x131c1;&#x133ff;\"\n          },\n          \"babylonian\": {\n            \"name\": \"babylonian\",\n            \"description\": \"56006 in <a href=\\\"/numbers/to-babylonian/\\\">Babylonian Numeral</a>\",\n            \"value\": \"<img src=\\\"https://math.tools/img/babnumbers/bab_15.gif\\\" alt=\\\"15\\\"> &nbsp; <img src=\\\"https://math.tools/img/babnumbers/bab_33.gif\\\" alt=\\\"33\\\"> &nbsp; <img src=\\\"https://math.tools/img/babnumbers/bab_26.gif\\\" alt=\\\"26\\\"> &nbsp; \",\n            \"display\": \"<img src=\\\"https://math.tools/img/babnumbers/bab_15.gif\\\" alt=\\\"15\\\"> &nbsp; <img src=\\\"https://math.tools/img/babnumbers/bab_33.gif\\\" alt=\\\"33\\\"> &nbsp; <img src=\\\"https://math.tools/img/babnumbers/bab_26.gif\\\" alt=\\\"26\\\"> &nbsp; \"\n          }\n        },\n        \"general-facts\": {\n          \"odd\": {\n            \"name\": \"odd\",\n            \"description\": \"Is 56006 an odd number?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT an odd number\"\n          },\n          \"even\": {\n            \"name\": \"even\",\n            \"description\": \"Is 56006 an even number?\",\n            \"value\": true,\n            \"display\": \"56006 is  an even number\"\n          },\n          \"palindrome\": {\n            \"name\": \"palindrome\",\n            \"description\": \"Is 56006 a palindrome?\",\n            \"value\": false,\n            \"display\": \"56006 is  NOT a palindrome number\"\n          },\n          \"triangle\": {\n            \"name\": \"triangle\",\n            \"description\": \"Is 56006 a triangle number?\",\n            \"value\": false,\n            \"display\": \"56006 is  NOT a triangle number\"\n          }\n        },\n        \"prime-facts\": {\n          \"prime\": {\n            \"name\": \"prime\",\n            \"description\": \"Is 56006 a Prime Number?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a  prime\"\n          },\n          \"perfect\": {\n            \"name\": \"perfect\",\n            \"description\": \"Is 56006 a perfect number?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a perfect number\"\n          },\n          \"mersenne\": {\n            \"name\": \"mersenne\",\n            \"description\": \"Is 56006 a Mersenne Prime?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a Mersenne prime\"\n          },\n          \"fermat\": {\n            \"name\": \"fermat\",\n            \"description\": \"Is 56006 a Fermat Prime?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a Fermat prime\"\n          },\n          \"fibonacci\": {\n            \"name\": \"fibonacci\",\n            \"description\": \"Is 56006 a Fibonacci Prime?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a Fibonacci prime\"\n          },\n          \"partition\": {\n            \"name\": \"partition\",\n            \"description\": \"Is 56006 a Partition Prime?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a Partition prime\"\n          },\n          \"pell\": {\n            \"name\": \"pell\",\n            \"description\": \"Is 56006 a Pell Prime?\",\n            \"value\": false,\n            \"display\": \"56006 is NOT a Pell prime\"\n          }\n        },\n        \"recreational\": {\n          \"reverse\": {\n            \"name\": \"reverse\",\n            \"description\": \"Number 56006 reversed\",\n            \"value\": \"60065\",\n            \"display\": \"60065\"\n          },\n          \"digitssum\": {\n            \"name\": \"digitssum\",\n            \"description\": \"Sum of the digits\",\n            \"value\": 17,\n            \"display\": 17\n          },\n          \"noofdigits\": {\n            \"name\": \"noofdigits\",\n            \"description\": \"No of digits\",\n            \"value\": 5,\n            \"display\": 5\n          }\n        },\n        \"category\": \"nod\"\n      }\n    }\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersnod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-number-facts">Number Facts</h1>

Get random interesting fact about a given number.

## get/numbers/fact

> Code samples

```bash
curl 'https://example.com/numbers/fact?number=0' \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/fact`

Get a random fact about a number

<h3 id="getnumbersfact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number value|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 11,\n    \"fact\": \"11 is the largest known multiplicative persistence.\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumbersfact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-number-generation">Number Generation</h1>

Generate Random and interesting numbers.

## get/numbers/random

> Code samples

```bash
curl https://example.com/numbers/random \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/random`

Generate random number(s)

<h3 id="getnumbersrandom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|min|query|integer(integer)|false|Minimum Number value in the range|
|max|query|integer(integer)|false|Maximum Number value|
|total|query|integer(integer)|false|Total number of random numbers to generate. Defaults to 1|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"numbers\": [\n      1942400822,\n      828097719,\n      1581110549,\n      1957713319,\n      1920104909\n    ],\n    \"min\": 1,\n    \"max\": 2147483647,\n    \"requested\": 5,\n    \"returned\": 5\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumbersrandom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-spell">Spell</h1>

Spell out a number ordinal, cardinal or currency. This API is free (rate limited).

## get/numbers/cardinal

> Code samples

```bash
curl https://example.com/numbers/cardinal \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/cardinal`

Get the cardinal of the given number

<h3 id="getnumberscardinal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number value|
|language|query|string(string)|false|Language to use|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 2342,\n    \"language\": \"en_US\",\n    \"result\": \"two thousand three hundred forty-two\",\n    \"cardinal\": \"two thousand three hundred forty-two\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumberscardinal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/currency

> Code samples

```bash
curl https://example.com/numbers/currency \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/currency`

Spells out the number as a currency

<h3 id="getnumberscurrency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to spell|
|language|query|string(string)|false|Language to use|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 1345456654,\n    \"language\": \"en_US\",\n    \"result\": \"one billion three hundred forty-five million four hundred fifty-six thousand six hundred fifty-four dollars\",\n    \"currency\": \"one billion three hundred forty-five million four hundred fifty-six thousand six hundred fifty-four dollars\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumberscurrency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/ordinal

> Code samples

```bash
curl https://example.com/numbers/ordinal \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/ordinal`

Get the ordinal of the given number

<h3 id="getnumbersordinal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number value|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 2342,\n    \"result\": \"2342nd\",\n    \"ordinal\": \"2342nd\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersordinal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-base-conversion">Base Conversion</h1>

Convert from one base to another. This API is free (rate limited).

## get/numbers/base

> Code samples

```bash
curl 'https://example.com/numbers/base?number=0&to=0' \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/base`

Convert a given number from one base to another base

<h3 id="getnumbersbase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number to convert to the target base|
|from|query|integer(integer)|false|Base of the supplied number (Optional base 10 assumed by default)|
|to|query|integer(integer)|true|Target base to convert to|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 32,\n    \"base\": {\n      \"from\": 10,\n      \"to\": 2\n    },\n    \"answer\": \"100000\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersbase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/base/binary

> Code samples

```bash
curl 'https://example.com/numbers/base/binary?number=0' \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/base/binary`

Convert a given number to binary

<h3 id="getnumbersbasebinary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number to convert to binary|
|from|query|integer(integer)|false|Base of the supplied number (Optional base 10 assumed by default)|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 32,\n    \"base\": {\n      \"from\": 10,\n      \"to\": 2\n    },\n    \"answer\": \"100000\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumbersbasebinary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/base/hex

> Code samples

```bash
curl 'https://example.com/numbers/base/hex?number=0' \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/base/hex`

Convert a given number to hexadecimal

<h3 id="getnumbersbasehex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number to convert to hex|
|from|query|integer(integer)|false|Base of the supplied number (Optional base 10 assumed by default)|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 78,\n    \"base\": {\n      \"from\": 10,\n      \"to\": 16\n    },\n    \"answer\": \"4e\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                          "
```

<h3 id="getnumbersbasehex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/base/octal

> Code samples

```bash
curl 'https://example.com/numbers/base/octal?number=0' \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/base/octal`

Convert a given number to octal

<h3 id="getnumbersbaseoctal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|true|Number to convert to octal|
|from|query|integer(integer)|false|Base of the supplied number (Optional base 10 assumed by default)|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 78,\n    \"base\": {\n      \"from\": 10,\n      \"to\": 8\n    },\n    \"answer\": \"116\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}  "
```

<h3 id="getnumbersbaseoctal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-number-systems-conversion">Number Systems Conversion</h1>

Convert from one number system to another.

## get/numbers/numeral/chinese

> Code samples

```bash
curl https://example.com/numbers/numeral/chinese \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/numeral/chinese`

Convert base 10 representation of a given number to chinese numeral.

<h3 id="getnumbersnumeralchinese-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to convert|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 4568367,\n    \"system\": \"chinese\",\n    \"result\": \"\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersnumeralchinese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/numeral/egyptian

> Code samples

```bash
curl https://example.com/numbers/numeral/egyptian \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/numeral/egyptian`

Convert base 10 representation of a given number to egyptian numeral.

<h3 id="getnumbersnumeralegyptian-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to convert|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 4568367,\n    \"system\": \"egyptian\",\n    \"result\": \"\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersnumeralegyptian-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/numeral/roman

> Code samples

```bash
curl https://example.com/numbers/numeral/roman \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/numeral/roman`

Convert base 10 representation of a given number to roman numeral.

<h3 id="getnumbersnumeralroman-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to convert|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 4568367,\n    \"system\": \"roman\",\n    \"result\": \"DLXVMMMCCCLXVII\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersnumeralroman-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-prime">Prime</h1>

Things to do with Prime numbers

## get/numbers/prime/factors

> Code samples

```bash
curl https://example.com/numbers/prime/factors \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/factors`

Get the prime factors of a given number.

<h3 id="getnumbersprimefactors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to get the factors|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 228,\n    \"answer\": [\n      {\n        \"factor\": 2,\n        \"times\": 2\n      },\n      {\n        \"factor\": 3,\n        \"times\": 1\n      },\n      {\n        \"factor\": 19,\n        \"times\": 1\n      }\n    ],\n    \"prime-factors\": [\n      {\n        \"factor\": 2,\n        \"times\": 2\n      },\n      {\n        \"factor\": 3,\n        \"times\": 1\n      },\n      {\n        \"factor\": 19,\n        \"times\": 1\n      }\n    ]\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                      "
```

<h3 id="getnumbersprimefactors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-fermat-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-fermat-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-fermat-prime`

Checks whether a given number is a known fermat prime number or not.

<h3 id="getnumbersprimeis-fermat-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 257,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumbersprimeis-fermat-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-fibonacci-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-fibonacci-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-fibonacci-prime`

Checks whether a given number is a known fibonacci prime number or not.

<h3 id="getnumbersprimeis-fibonacci-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 1597,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                    "
```

<h3 id="getnumbersprimeis-fibonacci-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-mersenne-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-mersenne-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-mersenne-prime`

Checks whether a given number is a known mersenne prime number or not.

<h3 id="getnumbersprimeis-mersenne-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 8191,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersprimeis-mersenne-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-partition-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-partition-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-partition-prime`

Checks whether a given number is a known partition prime number or not.

<h3 id="getnumbersprimeis-partition-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 33461,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}"
```

<h3 id="getnumbersprimeis-partition-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-pell-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-pell-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-pell-prime`

Checks whether a given number is a known pell prime number or not.

<h3 id="getnumbersprimeis-pell-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 33461,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getnumbersprimeis-pell-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-perfect

> Code samples

```bash
curl https://example.com/numbers/prime/is-perfect \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-perfect`

Checks whether a given number is a perfect number or not.

<h3 id="getnumbersprimeis-perfect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 8128,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getnumbersprimeis-perfect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/prime/is-prime

> Code samples

```bash
curl https://example.com/numbers/prime/is-prime \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/prime/is-prime`

Checks whether a given number is a known prime number or not.

<h3 id="getnumbersprimeis-prime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 227,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getnumbersprimeis-prime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-pi">PI</h1>

Digits of PI and more.This API is free (rate limited).

## get/numbers/pi

> Code samples

```bash
curl https://example.com/numbers/pi \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/pi`

Get digits of pi (Ï€)

<h3 id="getnumberspi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer(integer)|false|Optional start position|
|to|query|integer(integer)|false|Optional start position|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"cotents\": {\n    \"from\": 0,\n    \"to\": 100,\n    \"result\": \"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679\",\n    \"number\": \"pi\"\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n} "
```

<h3 id="getnumberspi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

<h1 id="numbers-api-number-checks">Number Checks</h1>

Check Property of a given number.

## get/numbers/is-cube

> Code samples

```bash
curl https://example.com/numbers/is-cube \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/is-cube`

Checks whether a given number is a cube number or not.

<h3 id="getnumbersis-cube-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 27,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}       "
```

<h3 id="getnumbersis-cube-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/is-palindrome

> Code samples

```bash
curl https://example.com/numbers/is-palindrome \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/is-palindrome`

Checks whether a given number is a palindrome number or not.

<h3 id="getnumbersis-palindrome-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 456654,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}               "
```

<h3 id="getnumbersis-palindrome-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/is-square

> Code samples

```bash
curl https://example.com/numbers/is-square \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/is-square`

Checks whether a given number is a square number or not.

<h3 id="getnumbersis-square-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 16,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}                                          "
```

<h3 id="getnumbersis-square-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>

## get/numbers/is-triangle

> Code samples

```bash
curl https://example.com/numbers/is-triangle \
  -H 'Accept: application/json' \
  -H "X-Mathtools-Api-Secret: ${API_KEY}"
```

`GET /numbers/is-triangle`

Checks whether a given number is a triangle number or not.

<h3 id="getnumbersis-triangle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(integer)|false|Number to check|

> Example responses

> 200 Response

```json
"{\n  \"success\": {\n    \"total\": 1\n  },\n  \"copyright\": {\n    \"copyright\": \"2019-21 https://math.tools\"\n  },\n  \"contents\": {\n    \"number\": 45,\n    \"answer\": true\n  }\n}"
```

> 401 Response

```json
"{\n    \"error\": {\n        \"code\": 401,\n        \"message\": \"Unauthorized\"\n    }\n}  "
```

<h3 id="getnumbersis-triangle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 Success response|None|
|401|Unauthorized|401 Unauthorized response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-Mathtools-Api-Secret
</aside>
