<h1 id="number-insight-api">Number Insight API v1.2.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Number Insight API delivers real-time intelligence about the validity, reachability and roaming status of a phone number and tells you how to format the number correctly in your application. There are three levels of Number Insight API available: [Basic, Standard and Advanced](https://developer.nexmo.com/number-insight/overview#basic-standard-and-advanced-apis). The advanced API is available asynchronously as well as synchronously.

Base URLs:

* <a href="https://api.nexmo.com/ni">https://api.nexmo.com/ni</a>

<a href="https://www.nexmo.com/terms-of-use">Terms of service</a>
Email: <a href="mailto:devrel@vonage.com">Vonage DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Vonage DevRel</a> 
License: <a href="https://opensource.org/licenses/MIT">The MIT License (MIT)</a>

<a href="https://developer.nexmo.com/api/number-insight">External documentation</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **api_key**, in: query. You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)

* API Key (apiSecret)
    - Parameter Name: **api_secret**, in: query. You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)

<h1 id="number-insight-api-default">Default</h1>

## Advanced Number Insight (async)

<a id="opIdgetNumberInsightAsync"></a>

> Code samples

```bash
curl "https://api.nexmo.com/advanced/async/json?callback=https%3A%2F%2Fexample.com%2Fcallback&number=447700900000&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /advanced/async/{format}`

Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.

Note that this endpoint also supports `POST` requests.


<h3 id="advanced-number-insight-async-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string(uriref)|true|The callback URL|
|number|query|string|true|A single phone number that you need insight about in national or international format.|
|country|query|string|false|If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.|
|cnam|query|boolean|false|Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.|
|ip|query|string|false|**Deprecated.** This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. |
|format|path|string|true|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "error_text": "Success",
  "number": "447700900000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.01500000",
  "status": 0
}
```

<h3 id="advanced-number-insight-async-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="advanced-number-insight-async-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[niResponseAsync](#schemaniresponseasync)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Advanced Number Insight (sync)

<a id="opIdgetNumberInsightAdvanced"></a>

> Code samples

```bash
curl "https://api.nexmo.com/advanced/json?number=447700900000&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /advanced/{format}`

Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.

Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.

Note that this endpoint also supports `POST` requests.


<h3 id="advanced-number-insight-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|real_time_data|query|boolean|false|A boolean to choose whether to get real time data back in the response.|
|number|query|string|true|A single phone number that you need insight about in national or international format.|
|country|query|string|false|If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.|
|cnam|query|boolean|false|Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.|
|ip|query|string|false|**Deprecated.** This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. |
|format|path|string|true|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "international_format_number": "447700900000",
  "lookup_outcome": 0,
  "lookup_outcome_message": "Success",
  "national_format_number": "07700 900000",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "reachable": "reachable",
  "real_time_data": {
    "active_status": "true",
    "handset_status": "On"
  },
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.04000000",
  "roaming": {
    "roaming_country_code": "US",
    "roaming_network_code": "12345",
    "roaming_network_name": "Acme Inc",
    "status": "roaming"
  },
  "status": 0,
  "status_message": "Success",
  "valid_number": "valid"
}
```

<h3 id="advanced-number-insight-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="advanced-number-insight-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[niResponseJsonAdvancedSync](#schemaniresponsejsonadvancedsync)|false|none|Advanced Response (sync)|
|*oneOf*|[niResponseJsonAdvancedRoamingUnknown](#schemaniresponsejsonadvancedroamingunknown)|false|none|Unknown Roaming|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Basic Number Insight

<a id="opIdgetNumberInsightBasic"></a>

> Code samples

```bash
curl "https://api.nexmo.com/basic/json?number=447700900000&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /basic/{format}`

Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.

Note that this endpoint also supports `POST` requests.


<h3 id="basic-number-insight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|A single phone number that you need insight about in national or international format.|
|country|query|string|false|If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.|
|format|path|string|true|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "international_format_number": "447700900000",
  "national_format_number": "07700 900000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": 0,
  "status_message": "Success"
}
```

<h3 id="basic-number-insight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[niResponseJsonBasic](#schemaniresponsejsonbasic)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

## Standard Number Insight

<a id="opIdgetNumberInsightStandard"></a>

> Code samples

```bash
curl "https://api.nexmo.com/standard/json?number=447700900000&api_key=${API_KEY}&api_secret=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /standard/{format}`

Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.

Note that this endpoint also supports `POST` requests.


<h3 id="standard-number-insight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|query|string|true|A single phone number that you need insight about in national or international format.|
|country|query|string|false|If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.|
|cnam|query|boolean|false|Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.|
|format|path|string|true|The format of the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "international_format_number": "447700900000",
  "national_format_number": "07700 900000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": 0,
  "status_message": "Success",
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "caller_name": "John Smith",
  "caller_type": "consumer",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "first_name": "John",
  "last_name": "Smith",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_price": "0.04000000"
}
```

<h3 id="standard-number-insight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="standard-number-insight-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[niResponseJsonStandard](#schemaniresponsejsonstandard)|false|none|Standard Response|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey & apiSecret
</aside>

# Schemas

<h2 id="tocS_niAsyncResponse">niAsyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemaniasyncresponse"></a>
<a id="schema_niAsyncResponse"></a>
<a id="tocSniasyncresponse"></a>
<a id="tocsniasyncresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|tag|string|false|none|none|

<h2 id="tocS_niBasicStatus">niBasicStatus</h2>
<!-- backwards compatibility -->
<a id="schemanibasicstatus"></a>
<a id="schema_niBasicStatus"></a>
<a id="tocSnibasicstatus"></a>
<a id="tocsnibasicstatus"></a>

```json
0
```

Code | Text
-- | --
0 | Success - request accepted for delivery by .
1 | Busy - you have made more requests in the last second than are permitted by your account. Please retry.
3 | Invalid - your request is incomplete and missing some mandatory parameters.
4 | Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.
5 | Internal Error - the format of the recipient address is not valid.
9 | Partner quota exceeded - your account does not have sufficient credit to process this request.

<h2 id="tocS_niCallerIdentity">niCallerIdentity</h2>
<!-- backwards compatibility -->
<a id="schemanicalleridentity"></a>
<a id="schema_niCallerIdentity"></a>
<a id="tocSnicalleridentity"></a>
<a id="tocsnicalleridentity"></a>

```json
{
  "caller_name": "John Smith",
  "caller_type": "consumer",
  "first_name": "John",
  "last_name": "Smith"
}
```

Information about the network `number` is currently connected to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_name|string|false|none|Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|caller_type|string|false|none|The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|first_name|string|false|none|First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|last_name|string|false|none|Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|caller_type|business|
|caller_type|consumer|
|caller_type|unknown|

<h2 id="tocS_niCurrentCarrierProperties">niCurrentCarrierProperties</h2>
<!-- backwards compatibility -->
<a id="schemanicurrentcarrierproperties"></a>
<a id="schema_niCurrentCarrierProperties"></a>
<a id="tocSnicurrentcarrierproperties"></a>
<a id="tocsnicurrentcarrierproperties"></a>

```json
{
  "country": "GB",
  "name": "Acme Inc",
  "network_code": "12345",
  "network_type": "mobile"
}
```

Information about the network `number` is currently connected to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string \| null|false|none|The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.|
|name|string \| null|false|none|The full name of the carrier that `number` is associated with.|
|network_code|string \| null|false|none|The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`null` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.|
|network_type|string \| null|false|none|The type of network that `number` is associated with.|

#### Enumerated Values

|Property|Value|
|---|---|
|network_type|mobile|
|network_type|landline|
|network_type|landline_premium|
|network_type|landline_tollfree|
|network_type|virtual|
|network_type|unknown|
|network_type|pager|
|network_type|null|

<h2 id="tocS_niInitialCarrierProperties">niInitialCarrierProperties</h2>
<!-- backwards compatibility -->
<a id="schemaniinitialcarrierproperties"></a>
<a id="schema_niInitialCarrierProperties"></a>
<a id="tocSniinitialcarrierproperties"></a>
<a id="tocsniinitialcarrierproperties"></a>

```json
{
  "country": "GB",
  "name": "Acme Inc",
  "network_code": "12345",
  "network_type": "mobile"
}
```

Information about the network `number` was initially connected to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string \| null|false|none|The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.|
|name|string \| null|false|none|The full name of the carrier that `number` is associated with.|
|network_code|string \| null|false|none|The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`null` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.|
|network_type|string \| null|false|none|The type of network that `number` is associated with.|

#### Enumerated Values

|Property|Value|
|---|---|
|network_type|mobile|
|network_type|landline|
|network_type|landline_premium|
|network_type|landline_tollfree|
|network_type|virtual|
|network_type|unknown|
|network_type|pager|
|network_type|null|

<h2 id="tocS_niRealtimeData">niRealtimeData</h2>
<!-- backwards compatibility -->
<a id="schemanirealtimedata"></a>
<a id="schema_niRealtimeData"></a>
<a id="tocSnirealtimedata"></a>
<a id="tocsnirealtimedata"></a>

```json
{
  "active_status": "true",
  "handset_status": "On"
}
```

Real time data about the `number`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_status|string|false|none|Whether the end-user's phone number is active within an operator's `network`. Can be `active`, `inactive` or null.|
|handset_status|string|false|none|Whether the end-user's handset is turned on or off.|

<h2 id="tocS_niResponseAsync">niResponseAsync</h2>
<!-- backwards compatibility -->
<a id="schemaniresponseasync"></a>
<a id="schema_niResponseAsync"></a>
<a id="tocSniresponseasync"></a>
<a id="tocsniresponseasync"></a>

```json
{
  "error_text": "Success",
  "number": "447700900000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.01500000",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_text|string|false|none|The status description of your request. Note: This field is equivalent to `status_message` field in the other endpoints|
|number|string|false|none|The `number` in your request|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|status|[niStandardAdvancedStatus](#schemanistandardadvancedstatus)|false|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>19 \| Facility Not Allowed - your request makes use of a facility that is not enabled on your account.<br>43, 44, 45 \| Live mobile lookup not returned. Not all return parameters are available.<br>999 \| Request unparseable.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|status|19|
|status|43|
|status|44|
|status|45|
|status|999|

<h2 id="tocS_niResponseJsonAdvancedAsync">niResponseJsonAdvancedAsync</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonadvancedasync"></a>
<a id="schema_niResponseJsonAdvancedAsync"></a>
<a id="tocSniresponsejsonadvancedasync"></a>
<a id="tocsniresponsejsonadvancedasync"></a>

```json
{
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "international_format_number": "447700900000",
  "lookup_outcome": 0,
  "lookup_outcome_message": "Success",
  "national_format_number": "07700 900000",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "reachable": "reachable",
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.04000000",
  "roaming": {
    "roaming_country_code": "US",
    "roaming_network_code": "12345",
    "roaming_network_name": "Acme Inc",
    "status": "roaming"
  },
  "status": 0,
  "status_message": "Success",
  "valid_number": "valid"
}
```

Advanced Response (Async)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_identity|[niCallerIdentity](#schemanicalleridentity)|false|none|Information about the network `number` is currently connected to.|
|country_code|string|true|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|true|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|true|none|The full name of the country that `number` is registered in.|
|country_prefix|string|true|none|The numeric prefix for the country that `number` is registered in.|
|current_carrier|[niCurrentCarrierProperties](#schemanicurrentcarrierproperties)|false|none|Information about the network `number` is currently connected to.|
|international_format_number|string|true|none|The `number` in your request in international format.|
|lookup_outcome|integer|false|none|Shows if all information about a phone number has been returned. Possible values:<br><br>Code \| Text<br>--- \| ---<br>0 \| Success<br>1 \| Partial success - some fields populated<br>2 \| Failed<br>|
|lookup_outcome_message|string|false|none|Shows if all information about a phone number has been returned.|
|national_format_number|string|true|none|The `number` in your request in the format used by the country the number belongs to.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|string \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|reachable|string \| null|false|none|Can you call `number` now. This is applicable to mobile numbers only.|
|refund_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|true|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|The amount in EUR charged to your account.|
|roaming|[niRoaming](#schemaniroaming)|false|none|Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.|
|status|[niStandardAdvancedStatus](#schemanistandardadvancedstatus)|true|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>19 \| Facility Not Allowed - your request makes use of a facility that is not enabled on your account.<br>43, 44, 45 \| Live mobile lookup not returned. Not all return parameters are available.<br>999 \| Request unparseable.<br>|
|status_message|string|true|none|The status description of your request.|
|valid_number|string|false|none|Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.|

#### Enumerated Values

|Property|Value|
|---|---|
|lookup_outcome|0|
|lookup_outcome|1|
|lookup_outcome|2|
|ported|unknown|
|ported|ported|
|ported|not_ported|
|ported|assumed_not_ported|
|ported|assumed_ported|
|ported|null|
|reachable|unknown|
|reachable|reachable|
|reachable|undeliverable|
|reachable|absent|
|reachable|bad_number|
|reachable|blacklisted|
|reachable|null|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|status|19|
|status|43|
|status|44|
|status|45|
|status|999|
|valid_number|unknown|
|valid_number|valid|
|valid_number|not_valid|
|valid_number|inferred|
|valid_number|inferred_not_valid|

<h2 id="tocS_niResponseJsonAdvancedRoamingUnknown">niResponseJsonAdvancedRoamingUnknown</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonadvancedroamingunknown"></a>
<a id="schema_niResponseJsonAdvancedRoamingUnknown"></a>
<a id="tocSniresponsejsonadvancedroamingunknown"></a>
<a id="tocsniresponsejsonadvancedroamingunknown"></a>

```json
{
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "international_format_number": "447700900000",
  "lookup_outcome": 0,
  "lookup_outcome_message": "Success",
  "national_format_number": "07700 900000",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "reachable": "reachable",
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.04000000",
  "roaming": "unknown",
  "status": 0,
  "status_message": "Success",
  "valid_number": "valid"
}
```

Unknown Roaming

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_identity|[niCallerIdentity](#schemanicalleridentity)|false|none|Information about the network `number` is currently connected to.|
|country_code|string|true|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|true|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|true|none|The full name of the country that `number` is registered in.|
|country_prefix|string|true|none|The numeric prefix for the country that `number` is registered in.|
|current_carrier|[niCurrentCarrierProperties](#schemanicurrentcarrierproperties)|false|none|Information about the network `number` is currently connected to.|
|international_format_number|string|true|none|The `number` in your request in international format.|
|lookup_outcome|integer|false|none|Shows if all information about a phone number has been returned. Possible values:<br><br>Code \| Text<br>--- \| ---<br>0 \| Success<br>1 \| Partial success - some fields populated<br>2 \| Failed<br>|
|lookup_outcome_message|string|false|none|Shows if all information about a phone number has been returned.|
|national_format_number|string|true|none|The `number` in your request in the format used by the country the number belongs to.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|string \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|reachable|string \| null|false|none|Can you call `number` now. This is applicable to mobile numbers only.|
|refund_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|true|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|The amount in EUR charged to your account.|
|roaming|string|false|none|none|
|status|[niStandardAdvancedStatus](#schemanistandardadvancedstatus)|true|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>19 \| Facility Not Allowed - your request makes use of a facility that is not enabled on your account.<br>43, 44, 45 \| Live mobile lookup not returned. Not all return parameters are available.<br>999 \| Request unparseable.<br>|
|status_message|string|true|none|The status description of your request.|
|valid_number|string|false|none|Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.|

#### Enumerated Values

|Property|Value|
|---|---|
|lookup_outcome|0|
|lookup_outcome|1|
|lookup_outcome|2|
|ported|unknown|
|ported|ported|
|ported|not_ported|
|ported|assumed_not_ported|
|ported|assumed_ported|
|ported|null|
|reachable|unknown|
|reachable|reachable|
|reachable|undeliverable|
|reachable|absent|
|reachable|bad_number|
|reachable|blacklisted|
|reachable|null|
|roaming|unknown|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|status|19|
|status|43|
|status|44|
|status|45|
|status|999|
|valid_number|unknown|
|valid_number|valid|
|valid_number|not_valid|
|valid_number|inferred|
|valid_number|inferred_not_valid|

<h2 id="tocS_niResponseJsonAdvancedSync">niResponseJsonAdvancedSync</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonadvancedsync"></a>
<a id="schema_niResponseJsonAdvancedSync"></a>
<a id="tocSniresponsejsonadvancedsync"></a>
<a id="tocsniresponsejsonadvancedsync"></a>

```json
{
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "international_format_number": "447700900000",
  "lookup_outcome": 0,
  "lookup_outcome_message": "Success",
  "national_format_number": "07700 900000",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "reachable": "reachable",
  "real_time_data": {
    "active_status": "true",
    "handset_status": "On"
  },
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.04000000",
  "roaming": {
    "roaming_country_code": "US",
    "roaming_network_code": "12345",
    "roaming_network_name": "Acme Inc",
    "status": "roaming"
  },
  "status": 0,
  "status_message": "Success",
  "valid_number": "valid"
}
```

Advanced Response (sync)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_identity|[niCallerIdentity](#schemanicalleridentity)|false|none|Information about the network `number` is currently connected to.|
|country_code|string|true|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|true|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|true|none|The full name of the country that `number` is registered in.|
|country_prefix|string|true|none|The numeric prefix for the country that `number` is registered in.|
|current_carrier|[niCurrentCarrierProperties](#schemanicurrentcarrierproperties)|false|none|Information about the network `number` is currently connected to.|
|international_format_number|string|true|none|The `number` in your request in international format.|
|lookup_outcome|integer|false|none|Shows if all information about a phone number has been returned. Possible values:<br><br>Code \| Text<br>--- \| ---<br>0 \| Success<br>1 \| Partial success - some fields populated<br>2 \| Failed<br>|
|lookup_outcome_message|string|false|none|Shows if all information about a phone number has been returned.|
|national_format_number|string|true|none|The `number` in your request in the format used by the country the number belongs to.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|string \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|reachable|string \| null|false|none|Can you call `number` now. This is applicable to mobile numbers only.|
|real_time_data|[niRealtimeData](#schemanirealtimedata)|false|none|Real time data about the `number`|
|refund_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|true|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|The amount in EUR charged to your account.|
|roaming|[niRoaming](#schemaniroaming)|false|none|Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.|
|status|[niStandardAdvancedStatus](#schemanistandardadvancedstatus)|true|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>19 \| Facility Not Allowed - your request makes use of a facility that is not enabled on your account.<br>43, 44, 45 \| Live mobile lookup not returned. Not all return parameters are available.<br>999 \| Request unparseable.<br>|
|status_message|string|true|none|The status description of your request.|
|valid_number|string|false|none|Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.|

#### Enumerated Values

|Property|Value|
|---|---|
|lookup_outcome|0|
|lookup_outcome|1|
|lookup_outcome|2|
|ported|unknown|
|ported|ported|
|ported|not_ported|
|ported|assumed_not_ported|
|ported|assumed_ported|
|ported|null|
|reachable|unknown|
|reachable|reachable|
|reachable|undeliverable|
|reachable|absent|
|reachable|bad_number|
|reachable|blacklisted|
|reachable|null|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|status|19|
|status|43|
|status|44|
|status|45|
|status|999|
|valid_number|unknown|
|valid_number|valid|
|valid_number|not_valid|
|valid_number|inferred|
|valid_number|inferred_not_valid|

<h2 id="tocS_niResponseJsonBasic">niResponseJsonBasic</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonbasic"></a>
<a id="schema_niResponseJsonBasic"></a>
<a id="tocSniresponsejsonbasic"></a>
<a id="tocsniresponsejsonbasic"></a>

```json
{
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "international_format_number": "447700900000",
  "national_format_number": "07700 900000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": 0,
  "status_message": "Success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|false|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|false|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|false|none|The full name of the country that `number` is registered in.|
|country_prefix|string|false|none|The numeric prefix for the country that `number` is registered in.|
|international_format_number|string|false|none|The `number` in your request in international format.|
|national_format_number|string|false|none|The `number` in your request in the format used by the country the number belongs to.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|status|[niBasicStatus](#schemanibasicstatus)|false|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>|
|status_message|string|false|none|The status description of your request.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|

<h2 id="tocS_niResponseJsonStandard">niResponseJsonStandard</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonstandard"></a>
<a id="schema_niResponseJsonStandard"></a>
<a id="tocSniresponsejsonstandard"></a>
<a id="tocsniresponsejsonstandard"></a>

```json
{
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "international_format_number": "447700900000",
  "national_format_number": "07700 900000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": 0,
  "status_message": "Success",
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "caller_name": "John Smith",
  "caller_type": "consumer",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "first_name": "John",
  "last_name": "Smith",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_price": "0.04000000"
}
```

Standard Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|false|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|false|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|false|none|The full name of the country that `number` is registered in.|
|country_prefix|string|false|none|The numeric prefix for the country that `number` is registered in.|
|international_format_number|string|false|none|The `number` in your request in international format.|
|national_format_number|string|false|none|The `number` in your request in the format used by the country the number belongs to.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|status|[niBasicStatus](#schemanibasicstatus)|false|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>|
|status_message|string|false|none|The status description of your request.|
|caller_identity|[niCallerIdentity](#schemanicalleridentity)|false|none|Information about the network `number` is currently connected to.|
|caller_name|string|false|none|Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|caller_type|string|false|none|The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|current_carrier|object \| null|false|none|none|
|first_name|string|false|none|First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|last_name|string|false|none|Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|string \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|refund_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_price|string|false|none|The amount in EUR charged to your account.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|caller_type|business|
|caller_type|consumer|
|caller_type|unknown|
|ported|unknown|
|ported|ported|
|ported|not_ported|
|ported|assumed_not_ported|
|ported|assumed_ported|
|ported|null|

<h2 id="tocS_niResponseJsonStandardRoamingUnknown">niResponseJsonStandardRoamingUnknown</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsejsonstandardroamingunknown"></a>
<a id="schema_niResponseJsonStandardRoamingUnknown"></a>
<a id="tocSniresponsejsonstandardroamingunknown"></a>
<a id="tocsniresponsejsonstandardroamingunknown"></a>

```json
{
  "country_code": "GB",
  "country_code_iso3": "GBR",
  "country_name": "United Kingdom",
  "country_prefix": "44",
  "international_format_number": "447700900000",
  "national_format_number": "07700 900000",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "status": 0,
  "status_message": "Success",
  "caller_identity": {
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "first_name": "John",
    "last_name": "Smith"
  },
  "caller_name": "John Smith",
  "caller_type": "consumer",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "first_name": "John",
  "last_name": "Smith",
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": "not_ported",
  "refund_price": "0.01500000",
  "remaining_balance": "1.23456789",
  "request_price": "0.04000000"
}
```

Unknown Roaming

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|false|none|Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|country_code_iso3|string|false|none|Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|country_name|string|false|none|The full name of the country that `number` is registered in.|
|country_prefix|string|false|none|The numeric prefix for the country that `number` is registered in.|
|international_format_number|string|false|none|The `number` in your request in international format.|
|national_format_number|string|false|none|The `number` in your request in the format used by the country the number belongs to.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|status|[niBasicStatus](#schemanibasicstatus)|false|none|Code \| Text<br>-- \| --<br>0 \| Success - request accepted for delivery by .<br>1 \| Busy - you have made more requests in the last second than are permitted by your account. Please retry.<br>3 \| Invalid - your request is incomplete and missing some mandatory parameters.<br>4 \| Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.<br>5 \| Internal Error - the format of the recipient address is not valid.<br>9 \| Partner quota exceeded - your account does not have sufficient credit to process this request.<br>|
|status_message|string|false|none|The status description of your request.|
|caller_identity|[niCallerIdentity](#schemanicalleridentity)|false|none|Information about the network `number` is currently connected to.|
|caller_name|string|false|none|Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|caller_type|string|false|none|The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|current_carrier|object \| null|false|none|none|
|first_name|string|false|none|First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|last_name|string|false|none|Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|string \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|refund_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_price|string|false|none|The amount in EUR charged to your account.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|3|
|status|4|
|status|5|
|status|9|
|caller_type|business|
|caller_type|consumer|
|caller_type|unknown|
|ported|unknown|
|ported|ported|
|ported|not_ported|
|ported|assumed_not_ported|
|ported|assumed_ported|
|ported|null|

<h2 id="tocS_niResponseXmlAdvanced">niResponseXmlAdvanced</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsexmladvanced"></a>
<a id="schema_niResponseXmlAdvanced"></a>
<a id="tocSniresponsexmladvanced"></a>
<a id="tocsniresponsexmladvanced"></a>

```json
{
  "caller_identity": {
    "caller-name": "John Smith",
    "caller-type": "consumer",
    "first-name": "John",
    "last-name": "Smith"
  },
  "caller_name": "John Smith",
  "caller_type": "consumer",
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "error": {
    "code": 0,
    "status_text": "Success"
  },
  "firs_name": "John",
  "international_format_number": "447700900000",
  "ip_warnings": "unknown",
  "last_name": "Smith",
  "local_number": {
    "country_code": "GB",
    "country_code_iso3": "GBR",
    "country_name": "United Kingdom",
    "country_prefix": "44",
    "number": "07700 900000"
  },
  "lookup_outcome": {
    "code": "0",
    "lookup_outcome_message": "Success"
  },
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": {
    "ported_message": "not_ported"
  },
  "reachable": "reachable",
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.01500000",
  "roaming": {
    "roaming_country_code": "US",
    "roaming_network_code": "12345",
    "roaming_network_name": "Acme Inc",
    "status": "roaming"
  },
  "valid_number": "valid"
}
```

Advanced

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_identity|object|false|none|Contains details of the number owner, if `cnam` was set to `true` in the request.|
|caller_name|string|false|none|Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|caller_type|string|false|none|The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.|
|current_carrier|[niCurrentCarrierProperties](#schemanicurrentcarrierproperties)|false|none|Information about the network `number` is currently connected to.|
|error|object|false|none|The error code and status of your request|
|firs_name|string|false|none|First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|international_format_number|string|false|none|The `number` in your request in international format.|
|ip_warnings|string \| null|false|none|This property is deprecated and can safely be ignored.|
|last_name|string|false|none|Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.|
|local_number|object|false|none|An object containing the `number` in your request in the format used by the country the number belongs to.|
|lookup_outcome|object|false|none|An object indicating whether all information about a phone number has been returned.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|object \| null|false|none|If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.|
|reachable|string \| null|false|none|Can you call `number` now. This is applicable to mobile numbers only.|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|
|roaming|[niRoaming](#schemaniroaming)|false|none|Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.|
|valid_number|string|false|none|Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.|

#### Enumerated Values

|Property|Value|
|---|---|
|caller_type|business|
|caller_type|consumer|
|caller_type|unknown|
|reachable|unknown|
|reachable|reachable|
|reachable|undeliverable|
|reachable|absent|
|reachable|bad_number|
|reachable|blacklisted|
|reachable|null|
|valid_number|unknown|
|valid_number|valid|
|valid_number|not_valid|
|valid_number|inferred_not_valid|

<h2 id="tocS_niResponseXmlBasic">niResponseXmlBasic</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsexmlbasic"></a>
<a id="schema_niResponseXmlBasic"></a>
<a id="tocSniresponsexmlbasic"></a>
<a id="tocsniresponsexmlbasic"></a>

```json
{
  "error": {
    "code": 0,
    "status_text": "Success"
  },
  "international_format_number": "447700900000",
  "local_number": {
    "country_code": "GB",
    "country_code_iso3": "GBR",
    "country_name": "United Kingdom",
    "country_prefix": "44",
    "number": "07700 900000"
  },
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab"
}
```

Basic

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|The error code and status of your request|
|international_format_number|string|false|none|The `number` in your request in international format.|
|local_number|object|false|none|An object containing the `number` in your request in the format used by the country the number belongs to.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|

<h2 id="tocS_niResponseXmlStandard">niResponseXmlStandard</h2>
<!-- backwards compatibility -->
<a id="schemaniresponsexmlstandard"></a>
<a id="schema_niResponseXmlStandard"></a>
<a id="tocSniresponsexmlstandard"></a>
<a id="tocsniresponsexmlstandard"></a>

```json
{
  "caller_identity": {
    "caller-name": "John Smith",
    "caller-type": "consumer",
    "caller_name": "John Smith",
    "caller_type": "consumer",
    "firs_name": "John",
    "first-name": "John",
    "last-name": "Smith",
    "last_name": "Smith"
  },
  "current_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "error": {
    "code": 0,
    "status_text": "Success"
  },
  "international_format_number": "447700900000",
  "local_number": {
    "country_code": "GB",
    "country_code_iso3": "GBR",
    "country_name": "United Kingdom",
    "country_prefix": "44",
    "number": "07700 900000"
  },
  "original_carrier": {
    "country": "GB",
    "name": "Acme Inc",
    "network_code": "12345",
    "network_type": "mobile"
  },
  "ported": {
    "ported_message": "not_ported"
  },
  "remaining_balance": "1.23456789",
  "request_id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "request_price": "0.01500000"
}
```

Standard

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caller_identity|object|false|none|Contains details of the number owner, if `cnam` was set to `true` in the request.|
|current_carrier|object \| null|false|none|none|
|error|object|false|none|The error code and status of your request|
|international_format_number|string|false|none|The `number` in your request in international format.|
|local_number|object|false|none|An object containing the `number` in your request in the format used by the country the number belongs to.|
|original_carrier|[niInitialCarrierProperties](#schemaniinitialcarrierproperties)|false|none|Information about the network `number` was initially connected to.|
|ported|object \| null|false|none|If the user has changed carrier for number. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported|
|remaining_balance|string|false|none|Your account balance in EUR after this request.|
|request_id|string|false|none|The unique identifier for your request. This is a alphanumeric string up to 40 characters.|
|request_price|string|false|none|If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.|

<h2 id="tocS_niRoaming">niRoaming</h2>
<!-- backwards compatibility -->
<a id="schemaniroaming"></a>
<a id="schema_niRoaming"></a>
<a id="tocSniroaming"></a>
<a id="tocsniroaming"></a>

```json
{
  "roaming_country_code": "US",
  "roaming_network_code": "12345",
  "roaming_network_name": "Acme Inc",
  "status": "roaming"
}
```

Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roaming_country_code|string|false|none|If `number` is `roaming`, this is the [code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country `number` is roaming in.|
|roaming_network_code|string|false|none|If `number` is `roaming`, this is the id of the carrier network `number` is roaming in.|
|roaming_network_name|string|false|none|If `number` is `roaming`, this is the name of the carrier network `number` is roaming in.|
|status|string|false|none|Is `number` outside its home carrier network.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|roaming|
|status|not_roaming|

<h2 id="tocS_niStandardAdvancedStatus">niStandardAdvancedStatus</h2>
<!-- backwards compatibility -->
<a id="schemanistandardadvancedstatus"></a>
<a id="schema_niStandardAdvancedStatus"></a>
<a id="tocSnistandardadvancedstatus"></a>
<a id="tocsnistandardadvancedstatus"></a>

```json
0
```

Code | Text
-- | --
0 | Success - request accepted for delivery by .
1 | Busy - you have made more requests in the last second than are permitted by your account. Please retry.
3 | Invalid - your request is incomplete and missing some mandatory parameters.
4 | Invalid credentials - the _api_key_ or _api_secret_ you supplied is either not valid or has been disabled.
5 | Internal Error - the format of the recipient address is not valid.
9 | Partner quota exceeded - your account does not have sufficient credit to process this request.
19 | Facility Not Allowed - your request makes use of a facility that is not enabled on your account.
43, 44, 45 | Live mobile lookup not returned. Not all return parameters are available.
999 | Request unparseable.
