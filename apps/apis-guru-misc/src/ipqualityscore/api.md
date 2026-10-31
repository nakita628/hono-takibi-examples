<h1 id="ipqualityscore-api">IPQualityScore API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://ipqualityscore.com/api">https://ipqualityscore.com/api</a>

<h1 id="ipqualityscore-api-emailvalidation">email_validation</h1>

## Email Validation

<a id="opIdemailValidation"></a>

> Code samples

```bash
curl https://example.com/json/email/asd24%23sdfs322%23/example%40example.com \
  -H 'Accept: application/json'
```

`GET /json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}`

Email Validation

<h3 id="email-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|YOUR_API_KEY_HERE|path|string|true|(Required) YOUR_API_KEY_HERE|
|USER_EMAIL_HERE|path|string|true|(Required) USER_EMAIL_HERE|

> Example responses

> 200 Response

```json
{
  "associated_names": {
    "names": [
      "names",
      "names"
    ],
    "status": "Enterprise Plus or higher required."
  },
  "associated_phone_numbers": {
    "phone_numbers": [
      "phone_numbers",
      "phone_numbers"
    ],
    "status": "Enterprise Plus or higher required."
  },
  "catch_all": true,
  "common": false,
  "deliverability": "high.",
  "disposable": false,
  "dns_valid": true,
  "domain_age": {
    "human": "9 years ago",
    "iso": "2013-09-10T14:18:53-04:00",
    "timestamp": 1378837133
  },
  "domain_velocity": "none",
  "first_name": "Success.",
  "first_seen": {
    "human": "9 years ago",
    "iso": "2013-09-10T14:18:53-04:00",
    "timestamp": 1378837133
  },
  "fraud_score": 1,
  "frequent_complainer": false,
  "generic": false,
  "honeypot": false,
  "leaked": false,
  "message": "Success.",
  "overall_score": 2,
  "recent_abuse": false,
  "request_id": "8cib1Ircsadw3gB",
  "sanitized_email": "example@example.com",
  "smtp_score": 5,
  "spam_trap_score": "none.",
  "success": true,
  "suggested_domain": "N/A",
  "suspect": false,
  "timed_out": true,
  "user_activity": "Enterprise L4+ required.",
  "valid": true
}
```

> 400 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

> 500 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

<h3 id="email-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="email-validation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associated_names|object|false|none|none|
|» names|[string]|false|none|none|
|» status|string|false|none|none|
|associated_phone_numbers|object|false|none|none|
|» phone_numbers|[string]|false|none|none|
|» status|string|false|none|none|
|catch_all|boolean|false|none|none|
|common|boolean|false|none|none|
|deliverability|string|false|none|none|
|disposable|boolean|false|none|none|
|dns_valid|boolean|false|none|none|
|domain_age|object|false|none|none|
|» human|string|false|none|none|
|» iso|string|false|none|none|
|» timestamp|number|false|none|none|
|domain_velocity|string|false|none|none|
|first_name|string|false|none|none|
|first_seen|object|false|none|none|
|» human|string|false|none|none|
|» iso|string|false|none|none|
|» timestamp|number|false|none|none|
|fraud_score|number|false|none|none|
|frequent_complainer|boolean|false|none|none|
|generic|boolean|false|none|none|
|honeypot|boolean|false|none|none|
|leaked|boolean|false|none|none|
|message|string|false|none|none|
|overall_score|number|false|none|none|
|recent_abuse|boolean|false|none|none|
|request_id|string|false|none|none|
|sanitized_email|string|false|none|none|
|smtp_score|number|false|none|none|
|spam_trap_score|string|false|none|none|
|success|boolean|false|none|none|
|suggested_domain|string|false|none|none|
|suspect|boolean|false|none|none|
|timed_out|boolean|false|none|none|
|user_activity|string|false|none|none|
|valid|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ipqualityscore-api-phonevalidation">phone_validation</h1>

## Phone Validation

<a id="opIdphoneValidation"></a>

> Code samples

```bash
curl https://example.com/json/phone/asd24%23sdfs322%23/18007132618 \
  -H 'Accept: application/json'
```

`GET /json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}`

Phone Validation

<h3 id="phone-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|country|
|YOUR_API_KEY_HERE|path|string|true|(Required) YOUR_API_KEY_HERE|
|USER_PHONE_HERE|path|string|true|(Required) USER_PHONE_HERE|

> Example responses

> 200 Response

```json
{
  "VOIP": true,
  "active": true,
  "active_status": "N/A",
  "associated_email_addresses": {
    "emails": [
      "names",
      "names"
    ],
    "status": "No associated emails found."
  },
  "carrier": "ONVOY, LLC",
  "city": "SEATTLE",
  "country": "US",
  "dialing_code": 1,
  "do_not_call": false,
  "formatted": "+3234232342",
  "fraud_score": 100,
  "leaked": false,
  "line_type": "VOIP",
  "local_format": "(206) 456-3059",
  "mcc": "N/A",
  "message": "Success.",
  "mnc": "N/A",
  "name": "N/A",
  "prepaid": "tempor ea proident quis",
  "recent_abuse": true,
  "region": "WA",
  "request_id": "8ctDi1gwuP",
  "risky": true,
  "sms_domain": "N/A",
  "sms_email": "N/A",
  "spammer": false,
  "success": true,
  "timezone": "America/Los_Angeles",
  "user_activity": "Enterprise L4+ required.",
  "valid": true,
  "zip_code": "98104"
}
```

> 400 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

> 500 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

<h3 id="phone-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="phone-validation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VOIP|boolean|false|none|none|
|active|boolean|false|none|none|
|active_status|string|false|none|none|
|associated_email_addresses|object|false|none|none|
|» emails|[string]|false|none|none|
|» status|string|false|none|none|
|carrier|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|dialing_code|number|false|none|none|
|do_not_call|boolean|false|none|none|
|formatted|string|false|none|none|
|fraud_score|number|false|none|none|
|leaked|boolean|false|none|none|
|line_type|string|false|none|none|
|local_format|string|false|none|none|
|mcc|string|false|none|none|
|message|string|false|none|none|
|mnc|string|false|none|none|
|name|string|false|none|none|
|prepaid|string|false|none|none|
|recent_abuse|boolean|false|none|none|
|region|string|false|none|none|
|request_id|string|false|none|none|
|risky|boolean|false|none|none|
|sms_domain|string|false|none|none|
|sms_email|string|false|none|none|
|spammer|boolean|false|none|none|
|success|boolean|false|none|none|
|timezone|string|false|none|none|
|user_activity|string|false|none|none|
|valid|boolean|false|none|none|
|zip_code|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ipqualityscore-api-maliciousurlscanner">malicious_url_scanner</h1>

## Malicious URL Scanner

<a id="opIdmaliciousUrlScanner"></a>

> Code samples

```bash
curl https://example.com/json/url/asd24%23sdfs322%23/https%253A%252F%252Fgoogle.com \
  -H 'Accept: application/json'
```

`GET /json/url/{YOUR_API_KEY_HERE}/{URL_HERE}`

Malicious URL Scanner

<h3 id="malicious-url-scanner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|YOUR_API_KEY_HERE|path|string|true|(Required) YOUR_API_KEY_HERE|
|URL_HERE|path|string|true|(Required) URL_HERE|

> Example responses

> 200 Response

```json
{
  "adult": false,
  "category": "Search Engine",
  "content_type": "text/html; charset=UTF-8",
  "dns_valid": true,
  "domain": "google.com",
  "domain_age": {
    "human": "3 months ago",
    "iso": "2019-09-09T16:40:34-04:00",
    "timestamp": 1568061634
  },
  "domain_rank": 1,
  "ip_address": "172.217.7.206",
  "malware": false,
  "message": "Success.",
  "page_size": 68553,
  "parking": false,
  "phishing": false,
  "request_id": "4ZGSfWu9RDf3oH",
  "risk_score": 0,
  "server": "nginx",
  "spamming": false,
  "status_code": 200,
  "success": true,
  "suspicious": false,
  "unsafe": true
}
```

> 400 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

> 500 Response

```json
{
  "message": "You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.",
  "request_id": "4OTORR352FU0p",
  "success": false
}
```

<h3 id="malicious-url-scanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|400|Bad Request|Bad Request|Inline|
|500|Internal Server Error|Unexpected error|Inline|

<h3 id="malicious-url-scanner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|boolean|false|none|none|
|category|string|false|none|none|
|content_type|string|false|none|none|
|dns_valid|boolean|false|none|none|
|domain|string|false|none|none|
|domain_age|object|false|none|none|
|» human|string|false|none|none|
|» iso|string|false|none|none|
|» timestamp|number|false|none|none|
|domain_rank|number|false|none|none|
|ip_address|string|false|none|none|
|malware|boolean|false|none|none|
|message|string|false|none|none|
|page_size|number|false|none|none|
|parking|boolean|false|none|none|
|phishing|boolean|false|none|none|
|request_id|string|false|none|none|
|risk_score|number|false|none|none|
|server|string|false|none|none|
|spamming|boolean|false|none|none|
|status_code|number|false|none|none|
|success|boolean|false|none|none|
|suspicious|boolean|false|none|none|
|unsafe|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|request_id|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
