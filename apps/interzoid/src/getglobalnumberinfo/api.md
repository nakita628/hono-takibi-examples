<h1 id="interzoid-get-global-phone-number-information-api">Interzoid Get Global Phone Number Information API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides geographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getglobalnumberinfo">API home page and documentation</a>

<h1 id="interzoid-get-global-phone-number-information-api-global-phone-number-information">Global Phone Number Information</h1>

## Get demographic information for a global telephone number

<a id="opIdgetglobalnumberinfo"></a>

> Code samples

```bash
curl 'https://example.com/getglobalnumberinfo?license=string&intlnumber=string' \
  -H 'Accept: application/json'
```

`GET /getglobalnumberinfo`

Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

<h3 id="get-demographic-information-for-a-global-telephone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|intlnumber|query|string|true|International number (with country code) to retrieve information for|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Country": "string",
  "Credits": "string",
  "Language2": "string",
  "Language3": "string",
  "Mobile": "string",
  "PrimaryCity": "string",
  "PrimaryLanguage": "string",
  "Region": "string",
  "Wealth": "string"
}
```

<h3 id="get-demographic-information-for-a-global-telephone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Global telephone demographic information|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|telephone number not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="get-demographic-information-for-a-global-telephone-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Country|string|false|none|none|
|Credits|string|false|none|none|
|Language2|string|false|none|none|
|Language3|string|false|none|none|
|Mobile|string|false|none|none|
|PrimaryCity|string|false|none|none|
|PrimaryLanguage|string|false|none|none|
|Region|string|false|none|none|
|Wealth|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
