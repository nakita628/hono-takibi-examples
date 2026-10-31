<h1 id="interzoid-get-area-code-from-number-api">Interzoid Get Area Code From Number API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides area code information for a given telephone number.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getareacodefromnumber">API home page and documentation</a>

<h1 id="interzoid-get-area-code-from-number-api-area-code-information">Area Code Information</h1>

## Gets area code information from a telephone number

<a id="opIdgetareacodefromnumber"></a>

> Code samples

```bash
curl 'https://example.com/getareacodefromnumber?license=string&number=string' \
  -H 'Accept: application/json'
```

`GET /getareacodefromnumber`

The area code will be parsed out of a telephone number and used to retrieve information about the area code.

<h3 id="gets-area-code-information-from-a-telephone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|number|query|string|true|Telephone number to retrieve area code information|

> Example responses

> 200 Response

```json
{
  "Abbreviation": "string",
  "AreaCode": "string",
  "Code": "string",
  "Credits": "string",
  "Locale": "string",
  "PrimaryCity": "string"
}
```

<h3 id="gets-area-code-information-from-a-telephone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Telephone number area code information|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|area code not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-area-code-information-from-a-telephone-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Abbreviation|string|false|none|none|
|AreaCode|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|Locale|string|false|none|none|
|PrimaryCity|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
