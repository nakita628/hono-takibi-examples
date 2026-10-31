<h1 id="redeal-analytics-api">Redeal Analytics API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access analytics for Redeal

Base URLs:

* <a href="https://analytics.redeal.io/api/1.0.0">https://analytics.redeal.io/api/1.0.0</a> - Redeal Analytics API

Email: <a href="mailto:hello@redeal.io">hello@redeal.io</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="redeal-analytics-api-developers">developers</h1>

Operations available to regular developers

## get events for analytics

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json'
```

`GET /events`

By passing in the company, site or deal Id a set of user interaction event records is returned. For pagination of a large result set use queryexecutionid and nexttoken instead.


<h3 id="get-events-for-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company|query|string|false|pass an optional company Id|
|site|query|string|false|pass an optional site Id|
|deal|query|string|false|pass an optional deal Id|
|type|query|string|false|type of records to return|
|nexttoken|query|string|false|next token to start returning records from|
|queryexecutionid|query|string|false|id of execution to get more records based on next token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|clicks|
|type|contacts|

> Example responses

> 200 Response

```json
[
  {
    "agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
    "browsertype": "Chrome",
    "channel": "Whatsapp",
    "click": "Minimize",
    "clicks": 1,
    "code": null,
    "company": "a89d82faf093c43c9c28659d",
    "contact": "MailChimp",
    "cost": 1.1,
    "costcurrency": "EUR",
    "currency": "EUR",
    "deal": "afe76fe60defa9000288e4ff",
    "deal name": "My deal",
    "delay": 473,
    "denyreason": "Deal is expired",
    "device": "a75984d7a1d1a4379",
    "devicetype": "Mobile",
    "email": "a89d82faf093c43c9c28659d",
    "emailaddrsha256": "cc63f389e0957aeacc9db39b8a0c2e7792aae3eb76af8909d30d9eab1f7309ac",
    "flow": "afe76fe60defa9000288e4ff",
    "flowstep": "FriendImpression",
    "flowtype": "Start",
    "impression": "Widget",
    "ip": "0.0.0.0",
    "latitude": 51.4353,
    "longitude": -0.3096,
    "optin": "Redeal",
    "os": "iOS",
    "resolution": "360x760",
    "revenue": 10.5,
    "role": "Ambassador",
    "session": "a909d7aff093c4423ccee7cc",
    "site": "a909d7aff093c4423ccee7cc",
    "site name": "My site",
    "timestamp": "2016-08-29T09:12:33.001Z",
    "total": 12.6,
    "user": "a909d7aff093c4423ccee7cc",
    "userlanguage": "de-DE"
  }
]
```

<h3 id="get-events-for-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|analytics results matching criteria|Inline|
|400|Bad Request|bad input parameter|None|

<h3 id="get-events-for-analytics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventRecord](#schemaeventrecord)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_EventRecord">EventRecord</h2>
<!-- backwards compatibility -->
<a id="schemaeventrecord"></a>
<a id="schema_EventRecord"></a>
<a id="tocSeventrecord"></a>
<a id="tocseventrecord"></a>

```json
{
  "agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
  "browsertype": "Chrome",
  "channel": "Whatsapp",
  "click": "Minimize",
  "clicks": 1,
  "code": null,
  "company": "a89d82faf093c43c9c28659d",
  "contact": "MailChimp",
  "cost": 1.1,
  "costcurrency": "EUR",
  "currency": "EUR",
  "deal": "afe76fe60defa9000288e4ff",
  "deal name": "My deal",
  "delay": 473,
  "denyreason": "Deal is expired",
  "device": "a75984d7a1d1a4379",
  "devicetype": "Mobile",
  "email": "a89d82faf093c43c9c28659d",
  "emailaddrsha256": "cc63f389e0957aeacc9db39b8a0c2e7792aae3eb76af8909d30d9eab1f7309ac",
  "flow": "afe76fe60defa9000288e4ff",
  "flowstep": "FriendImpression",
  "flowtype": "Start",
  "impression": "Widget",
  "ip": "0.0.0.0",
  "latitude": 51.4353,
  "longitude": -0.3096,
  "optin": "Redeal",
  "os": "iOS",
  "resolution": "360x760",
  "revenue": 10.5,
  "role": "Ambassador",
  "session": "a909d7aff093c4423ccee7cc",
  "site": "a909d7aff093c4423ccee7cc",
  "site name": "My site",
  "timestamp": "2016-08-29T09:12:33.001Z",
  "total": 12.6,
  "user": "a909d7aff093c4423ccee7cc",
  "userlanguage": "de-DE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|true|none|none|
|browsertype|string|true|none|none|
|channel|string|true|none|none|
|click|string|true|none|none|
|clicks|integer|true|none|none|
|code|string|true|none|none|
|company|string|true|none|none|
|contact|string|true|none|none|
|cost|number|true|none|none|
|costcurrency|string|true|none|none|
|currency|string|true|none|none|
|deal|string|true|none|none|
|deal name|string|true|none|none|
|delay|integer|true|none|none|
|denyreason|string|true|none|none|
|device|string|true|none|none|
|devicetype|string|true|none|none|
|email|string|true|none|none|
|emailaddrsha256|string|true|none|none|
|flow|string|true|none|none|
|flowstep|string|true|none|none|
|flowtype|string|true|none|none|
|impression|string|true|none|none|
|ip|string|true|none|none|
|latitude|string|true|none|none|
|longitude|string|true|none|none|
|optin|string|true|none|none|
|os|string|true|none|none|
|resolution|string|true|none|none|
|revenue|number|true|none|none|
|role|string|true|none|none|
|session|string|true|none|none|
|site|string|true|none|none|
|site name|string|true|none|none|
|timestamp|string(date-time)|true|none|none|
|total|number|true|none|none|
|user|string|true|none|none|
|userlanguage|string|true|none|none|
