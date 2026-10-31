<h1 id="interzoid-get-email-information-api">Interzoid Get Email Information API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides validation information for email addresses to aid in deliverability. Syntax, existence of mail servers, and other tests are run to ensure delivery. Additional demographics are provided for the email address as well, including identifying generic, vulgar, education, government, or other entity type email addresses.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getemailinfo">API home page and documentation</a>

<h1 id="interzoid-get-email-information-api-email-address-information">Email Address Information</h1>

## Gets email validation information for an email address

<a id="opIdgetemailinfo"></a>

> Code samples

```bash
curl 'https://example.com/getemailinfo?license=string&email=string' \
  -H 'Accept: application/json'
```

`GET /getemailinfo`

Get email validation information and other demographics for an email address.

<h3 id="gets-email-validation-information-for-an-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|email|query|string|true|Email address to retrieve validation information|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Credits": "string",
  "Email": "string",
  "Geolocation": "string",
  "Info": "string",
  "IsDisposable": "string",
  "IsEducational": "string",
  "IsGeneric": "string",
  "IsGovernment": "string",
  "IsOrganizational": "string",
  "IsVulgar": "string",
  "Response": "string"
}
```

<h3 id="gets-email-validation-information-for-an-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Email validation and demographic information|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|email address not valid|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-email-validation-information-for-an-email-address-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|Email|string|false|none|none|
|Geolocation|string|false|none|none|
|Info|string|false|none|none|
|IsDisposable|string|false|none|none|
|IsEducational|string|false|none|none|
|IsGeneric|string|false|none|none|
|IsGovernment|string|false|none|none|
|IsOrganizational|string|false|none|none|
|IsVulgar|string|false|none|none|
|Response|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
