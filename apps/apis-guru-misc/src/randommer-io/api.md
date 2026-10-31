<h1 id="randommer-api">Randommer API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="randommer-api-card">Card</h1>

## Get Card

> Code samples

```bash
curl https://example.com/api/Card
```

`GET /api/Card`

<h3 id="get-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get available card types

> Code samples

```bash
curl https://example.com/api/Card/Types
```

`GET /api/Card/Types`

<h3 id="get-available-card-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-available-card-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-finance">Finance</h1>

## Get available countries

> Code samples

```bash
curl https://example.com/api/Finance/Countries
```

`GET /api/Finance/Countries`

<h3 id="get-available-countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-available-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get crypto address

> Code samples

```bash
curl https://example.com/api/Finance/CryptoAddress
```

`GET /api/Finance/CryptoAddress`

<h3 id="get-crypto-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cryptoType|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-crypto-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get available crypto types

> Code samples

```bash
curl https://example.com/api/Finance/CryptoAddress/Types
```

`GET /api/Finance/CryptoAddress/Types`

<h3 id="get-available-crypto-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-available-crypto-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get IBAN by countryCode

> Code samples

```bash
curl https://example.com/api/Finance/Iban/st
```

`GET /api/Finance/Iban/{countryCode}`

<h3 id="get-iban-by-countrycode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryCode|path|string|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-iban-by-countrycode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/Finance/Vat/Validator

> Code samples

```bash
curl 'https://example.com/api/Finance/Vat/Validator?country=string&vat=string' \
  -X POST
```

`POST /api/Finance/Vat/Validator`

<h3 id="postapifinancevatvalidator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|true|none|
|vat|query|string|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="postapifinancevatvalidator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-misc">Misc</h1>

## get/api/Misc/Cultures

> Code samples

```bash
curl https://example.com/api/Misc/Cultures
```

`GET /api/Misc/Cultures`

<h3 id="getapimisccultures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="getapimisccultures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/api/Misc/Random-Address

> Code samples

```bash
curl 'https://example.com/api/Misc/Random-Address?number=1'
```

`GET /api/Misc/Random-Address`

<h3 id="getapimiscrandom-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(int32)|true|none|
|culture|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="getapimiscrandom-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-name">Name</h1>

## Get name

> Code samples

```bash
curl 'https://example.com/api/Name?nameType=firstname&quantity=1'
```

`GET /api/Name`

<h3 id="get-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameType|query|[NameType](#schemanametype)|true|none|
|quantity|query|integer(int32)|true|none|
|X-Api-Key|header|string|false|Enter your key|

#### Enumerated Values

|Parameter|Value|
|---|---|
|nameType|firstname|
|nameType|surname|
|nameType|fullname|

<h3 id="get-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate brand name suggestions

> Code samples

```bash
curl 'https://example.com/api/Name/BrandName?startingWords=string' \
  -X POST
```

`POST /api/Name/BrandName`

<h3 id="generate-brand-name-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startingWords|query|string|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="generate-brand-name-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get business names for a specific culture

> Code samples

```bash
curl 'https://example.com/api/Name/BusinessName?number=1' \
  -X POST
```

`POST /api/Name/BusinessName`

<h3 id="get-business-names-for-a-specific-culture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|integer(int32)|true|none|
|cultureCode|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-business-names-for-a-specific-culture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get available cultures

> Code samples

```bash
curl https://example.com/api/Name/Cultures
```

`GET /api/Name/Cultures`

<h3 id="get-available-cultures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-available-cultures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get business name suggestions

> Code samples

```bash
curl 'https://example.com/api/Name/Suggestions?startingWords=string'
```

`GET /api/Name/Suggestions`

<h3 id="get-business-name-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startingWords|query|string|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-business-name-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-phone">Phone</h1>

## Get available countries

> Code samples

```bash
curl https://example.com/api/Phone/Countries
```

`GET /api/Phone/Countries`

<h3 id="get-available-countries-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-available-countries-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get bulk telephone numbers for a country

> Code samples

```bash
curl 'https://example.com/api/Phone/Generate?CountryCode=st&Quantity=1'
```

`GET /api/Phone/Generate`

<h3 id="get-bulk-telephone-numbers-for-a-country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CountryCode|query|string|true|none|
|Quantity|query|integer(int32)|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-bulk-telephone-numbers-for-a-country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get bulk imeis

> Code samples

```bash
curl 'https://example.com/api/Phone/IMEI?Quantity=1'
```

`GET /api/Phone/IMEI`

<h3 id="get-bulk-imeis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Quantity|query|integer(int32)|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-bulk-imeis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Validate a phone number

> Code samples

```bash
curl 'https://example.com/api/Phone/Validate?telephone=string'
```

`GET /api/Phone/Validate`

<h3 id="validate-a-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|telephone|query|string|true|none|
|CountryCode|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="validate-a-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-socialnumber">SocialNumber</h1>

## Generate a social security number

> Code samples

```bash
curl https://example.com/api/SocialNumber
```

`GET /api/SocialNumber`

<h3 id="generate-a-social-security-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="generate-a-social-security-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Validate VAT/identity numbers

> Code samples

```bash
curl 'https://example.com/api/SocialNumber?idType=VAT' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "country": "st",
    "number": "string"
  }'
```

`POST /api/SocialNumber`

> Body parameter

```json
{
  "country": "st",
  "number": "string"
}
```

<h3 id="validate-vatidentity-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idType|query|[IdType](#schemaidtype)|true|none|
|X-Api-Key|header|string|false|Enter your key|
|body|body|[NumberValidation](#schemanumbervalidation)|true|none|
|» country|body|string|true|none|
|» number|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|idType|VAT|
|idType|SSN|

<h3 id="validate-vatidentity-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="randommer-api-text">Text</h1>

## Humanize text

> Code samples

```bash
curl https://example.com/api/Text/Humanize \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "string"
  }'
```

`POST /api/Text/Humanize`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="humanize-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Api-Key|header|string|false|Enter your key|
|body|body|[TextDto](#schematextdto)|true|none|
|» text|body|string \| null|false|none|

<h3 id="humanize-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate lorem ipsum

> Code samples

```bash
curl 'https://example.com/api/Text/LoremIpsum?loremType=normal&type=paragraphs&number=1'
```

`GET /api/Text/LoremIpsum`

<h3 id="generate-lorem-ipsum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|loremType|query|[LoremType](#schemaloremtype)|true|none|
|type|query|[TextType](#schematexttype)|true|none|
|number|query|integer(int32)|true|none|
|X-Api-Key|header|string|false|Enter your key|

#### Enumerated Values

|Parameter|Value|
|---|---|
|loremType|normal|
|loremType|business|
|type|paragraphs|
|type|words|

<h3 id="generate-lorem-ipsum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate password

> Code samples

```bash
curl 'https://example.com/api/Text/Password?length=3&hasDigits=true&hasUppercase=true&hasSpecial=true'
```

`GET /api/Text/Password`

<h3 id="generate-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|integer(int32)|true|none|
|hasDigits|query|boolean|true|none|
|hasUppercase|query|boolean|true|none|
|hasSpecial|query|boolean|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="generate-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get reviews (max quantity=500)

> Code samples

```bash
curl 'https://example.com/api/Text/Review?product=string&quantity=1' \
  -X POST
```

`POST /api/Text/Review`

<h3 id="get-reviews-max-quantity500-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|query|string|true|none|
|quantity|query|integer(int32)|true|none|
|X-Api-Key|header|string|false|Enter your key|

<h3 id="get-reviews-max-quantity500-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Transform text

> Code samples

```bash
curl 'https://example.com/api/Text/Transform?textActionType=Transform' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "string"
  }'
```

`POST /api/Text/Transform`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="transform-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|textActionType|query|[TextActionType](#schematextactiontype)|true|none|
|caseType|query|[CaseType](#schemacasetype)|false|none|
|find|query|string|false|none|
|replace|query|string|false|none|
|X-Api-Key|header|string|false|Enter your key|
|body|body|[TextDto](#schematextdto)|true|none|
|» text|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|textActionType|Transform|
|textActionType|Replace|
|caseType|LowerCase|
|caseType|UpperCase|
|caseType|SentenceCase|
|caseType|TitleCase|

<h3 id="transform-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CaseType">CaseType</h2>
<!-- backwards compatibility -->
<a id="schemacasetype"></a>
<a id="schema_CaseType"></a>
<a id="tocScasetype"></a>
<a id="tocscasetype"></a>

```json
"LowerCase"
```

<h2 id="tocS_IdType">IdType</h2>
<!-- backwards compatibility -->
<a id="schemaidtype"></a>
<a id="schema_IdType"></a>
<a id="tocSidtype"></a>
<a id="tocsidtype"></a>

```json
"VAT"
```

<h2 id="tocS_LoremType">LoremType</h2>
<!-- backwards compatibility -->
<a id="schemaloremtype"></a>
<a id="schema_LoremType"></a>
<a id="tocSloremtype"></a>
<a id="tocsloremtype"></a>

```json
"normal"
```

<h2 id="tocS_NameType">NameType</h2>
<!-- backwards compatibility -->
<a id="schemanametype"></a>
<a id="schema_NameType"></a>
<a id="tocSnametype"></a>
<a id="tocsnametype"></a>

```json
"firstname"
```

<h2 id="tocS_NumberValidation">NumberValidation</h2>
<!-- backwards compatibility -->
<a id="schemanumbervalidation"></a>
<a id="schema_NumberValidation"></a>
<a id="tocSnumbervalidation"></a>
<a id="tocsnumbervalidation"></a>

```json
{
  "country": "st",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|none|
|number|string|true|none|none|

<h2 id="tocS_TextActionType">TextActionType</h2>
<!-- backwards compatibility -->
<a id="schematextactiontype"></a>
<a id="schema_TextActionType"></a>
<a id="tocStextactiontype"></a>
<a id="tocstextactiontype"></a>

```json
"Transform"
```

<h2 id="tocS_TextDto">TextDto</h2>
<!-- backwards compatibility -->
<a id="schematextdto"></a>
<a id="schema_TextDto"></a>
<a id="tocStextdto"></a>
<a id="tocstextdto"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string \| null|false|none|none|

<h2 id="tocS_TextType">TextType</h2>
<!-- backwards compatibility -->
<a id="schematexttype"></a>
<a id="schema_TextType"></a>
<a id="tocStexttype"></a>
<a id="tocstexttype"></a>

```json
"paragraphs"
```
