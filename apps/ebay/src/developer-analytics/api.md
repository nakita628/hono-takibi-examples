<h1 id="analytics-api">Analytics API v1_beta.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The <b>Analytics API</b> retrieves call-limit data and the quotas that are set for the RESTful APIs and the legacy Trading API.  <br><br>Responses from calls made to <b>getRateLimits</b> and <b>getUerRateLimits</b> include a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>The <b>getRateLimits</b> and <b>getUserRateLimits</b> methods retrieve call-limit information for either an application or user, respectively, and each method must be called with an appropriate OAuth token. That is, <b>getRateLimites</b> requires an access token generated with a client credentials grant and <b>getUserRateLimites</b> requires an access token generated with an authorization code grant. For more information, see <a href="/api-docs/static/oauth-tokens.html">OAuth tokens</a>.  <br><br>Users can analyze the response data to see whether or not a limit might be reached, and from that determine if any action needs to be taken (such as programmatically throttling their request rate). For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

Base URLs:

* <a href="https://api.ebay.com/developer/analytics/v1_beta">https://api.ebay.com/developer/analytics/v1_beta</a> - Production

License: <a href="https://go.developer.ebay.com/api-license-agreement">eBay API License Agreement</a>

# Authentication

- oAuth2 authentication. The security definitions for this API. Please check individual operations for applicable scopes.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.ebay.com/oauth2/authorize](https://auth.ebay.com/oauth2/authorize)
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly| This scope would allow signed in user to read catalog data.|
|https://api.ebay.com/oauth/api_scope/sell.inventory|View and manage your inventory and offers|
|https://api.ebay.com/oauth/api_scope/sell.inventory.readonly|View your inventory and offers|
|https://api.ebay.com/oauth/api_scope/sell.marketing|View and manage your eBay marketing activities, such as ad campaigns and listing promotions|
|https://api.ebay.com/oauth/api_scope/sell.marketing.readonly|View your eBay marketing activities, such as ad campaigns and listing promotions|
|https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly| This scope would allow signed in users read only access to marketplace insights.|

    - Flow: clientCredentials
    - Token URL = [https://api.ebay.com/identity/v1/oauth2/token](https://api.ebay.com/identity/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://api.ebay.com/oauth/api_scope|View public data from eBay|

<h1 id="analytics-api-ratelimit">rate_limit</h1>

## getRateLimits

<a id="opIdgetRateLimits"></a>

> Code samples

```bash
curl https://api.ebay.com/rate_limit/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /rate_limit/`

This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and the legacy Trading API.  <br><br>The response from <b>getRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful API and the legacy Trading API resources. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

<h3 id="getratelimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_context|query|string|false|This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li><li><code>sell</code></li> <li><code>commerce</code></li><li><code>developer</code></li><li><code>tradingapi</code></li></ul>|
|api_name|query|string|false|This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul> <li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>|

> Example responses

> 200 Response

```json
{
  "rateLimits": [
    {
      "apiContext": "string",
      "apiName": "string",
      "apiVersion": "string",
      "resources": [
        {
          "name": "string",
          "rates": [
            {
              "limit": 0,
              "remaining": 0,
              "reset": "string",
              "timeWindow": 0
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="getratelimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RateLimitsResponse](#schemaratelimitsresponse)|
|204|No Content|No Content|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope )
</aside>

<h1 id="analytics-api-userratelimit">user_rate_limit</h1>

## getUserRateLimits

<a id="opIdgetUserRateLimits"></a>

> Code samples

```bash
curl https://api.ebay.com/user_rate_limit/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user_rate_limit/`

This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

<h3 id="getuserratelimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_context|query|string|false|This optional query parameter filters the result to include only the specified API context. <br><br><b>Valid values:</b> <ul><li><code>buy</code></li> <li><code>sell</code></li> <li><code>commerce</code></li> <li><code>developer</code></li> <li><code>tradingapi</code></li></ul>|
|api_name|query|string|false|This optional query parameter filters the result to include only the APIs specified. <br><br><b>Example values:</b> <ul><li><code>browse</code> for the <a href="/../develop/apis/restful-apis/buy-apis#buy-apis" target="_blank">Buy APIs</a></li> <li><code>inventory</code> for the <a href="/../develop/apis/restful-apis/sell-apis#sell-apis" target="_blank">Sell APIs</a></li>  <li><code>taxonomy</code> for the <a href="/../develop/apis/restful-apis/commerce-apis#commerce-apis" target="_blank">Commerce APIs</a></li>  <li><code>tradingapi</code> for the <a href="/../Devzone/XML/docs/Reference/eBay/index.html" target="_blank">Trading APIs</a></li></ul>|

> Example responses

> 200 Response

```json
{
  "rateLimits": [
    {
      "apiContext": "string",
      "apiName": "string",
      "apiVersion": "string",
      "resources": [
        {
          "name": "string",
          "rates": [
            {
              "limit": 0,
              "remaining": 0,
              "reset": "string",
              "timeWindow": 0
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="getuserratelimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RateLimitsResponse](#schemaratelimitsresponse)|
|204|No Content|No Content|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_auth ( Scopes: https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/sell.inventory.readonly https://api.ebay.com/oauth/api_scope/sell.marketplace.insights.readonly https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly https://api.ebay.com/oauth/api_scope/sell.marketing https://api.ebay.com/oauth/api_scope/sell.marketing.readonly )
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "category": "string",
  "domain": "string",
  "errorId": 0,
  "inputRefIds": [
    "string"
  ],
  "longMessage": "string",
  "message": "string",
  "outputRefIds": [
    "string"
  ],
  "parameters": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "subdomain": "string"
}
```

This type defines the fields that can be returned in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Identifies the type of erro.|
|domain|string|false|none|Name for the primary system where the error occurred. This is relevant for application errors.|
|errorId|integer(int32)|false|none|A unique number to identify the error.|
|inputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|longMessage|string|false|none|A more detailed explanation of the error.|
|message|string|false|none|Information on how to correct the problem, in the end user's terms and language where applicable.|
|outputRefIds|[string]|false|none|An array of request elements most closely associated to the error.|
|parameters|[[ErrorParameter](#schemaerrorparameter)]|false|none|An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.|
|subdomain|string|false|none|Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.|

<h2 id="tocS_ErrorParameter">ErrorParameter</h2>
<!-- backwards compatibility -->
<a id="schemaerrorparameter"></a>
<a id="schema_ErrorParameter"></a>
<a id="tocSerrorparameter"></a>
<a id="tocserrorparameter"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The object of the error.|
|value|string|false|none|The value of the object.|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
{
  "limit": 0,
  "remaining": 0,
  "reset": "string",
  "timeWindow": 0
}
```

This complex type defines a "rate" as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int32)|false|none|The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated <b>timeWindow</b> value.  <br><br>This value is often referred to as the "call quota" for the resource.|
|remaining|integer(int32)|false|none|The remaining number of requests that can be made to this resource before the associated time window resets.|
|reset|string|false|none|The data and time the time window and accumulated calls for this resource reset.  <br><br>When the <b>reset</b> time is reached, the <b>remaining</b> value is reset to the value of <b>limit</b>, and this <b>reset</b> value is reset to the current time plus the number of seconds defined by the <b>timeWindow</b> value. <br><br>The time stamp is formatted as an <a href="http://www.iso.org/iso/home/standards/iso8601.htm " target="_blank">ISO 8601</a> string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code> <br><b>Example:</b> <code>2018-08-04T07:09:00.000Z</code>|
|timeWindow|integer(int32)|false|none|A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field.|

<h2 id="tocS_RateLimit">RateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaratelimit"></a>
<a id="schema_RateLimit"></a>
<a id="tocSratelimit"></a>
<a id="tocsratelimit"></a>

```json
{
  "apiContext": "string",
  "apiName": "string",
  "apiVersion": "string",
  "resources": [
    {
      "name": "string",
      "rates": [
        {
          "limit": 0,
          "remaining": 0,
          "reset": "string",
          "timeWindow": 0
        }
      ]
    }
  ]
}
```

This complex types defines the resource (such as an API method) for which the rate-limit data is returned.  <br><br>A method is included in an API, and an API is part of an API context for the API version specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiContext|string|false|none|The context of the API for which rate-limit data is returned. For example <code>buy</code>, <code>sell</code>, <code>commerce</code>, <code>developer</code> or <code>tradingapi</code>.|
|apiName|string|false|none|The name of the API for which rate-limit data is returned. For example <code>browse</code> for the Buy API, <code>inventory</code> for the Sell API, <code>taxonomy</code> for the Commerce API, or <code>tradingapi</code> for Trading API.|
|apiVersion|string|false|none|The version of the API for which rate-limit data is returned. For example <code>v1</code> or <code>v2</code>.|
|resources|[[Resource](#schemaresource)]|false|none|A list of the methods for which rate-limit data is returned. For example <code>item</code> for the Feed API, <code>getOrder</code> for the Fulfillment API, <code>getProduct</code> for the Catalog API, <code>AddItems</code> for the Trading API.|

<h2 id="tocS_RateLimitsResponse">RateLimitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitsresponse"></a>
<a id="schema_RateLimitsResponse"></a>
<a id="tocSratelimitsresponse"></a>
<a id="tocsratelimitsresponse"></a>

```json
{
  "rateLimits": [
    {
      "apiContext": "string",
      "apiName": "string",
      "apiVersion": "string",
      "resources": [
        {
          "name": "string",
          "rates": [
            {
              "limit": 0,
              "remaining": 0,
              "reset": "string",
              "timeWindow": 0
            }
          ]
        }
      ]
    }
  ]
}
```

This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rateLimits|[[RateLimit](#schemaratelimit)]|false|none|The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window.|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "name": "string",
  "rates": [
    {
      "limit": 0,
      "remaining": 0,
      "reset": "string",
      "timeWindow": 0
    }
  ]
}
```

This complex type defines the resource (API method) and the current rate-limit data for that resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the resource (an API or an API method) to which the rate-limit data applies.|
|rates|[[Rate](#schemarate)]|false|none|A list of rate-limit data, where each list element represents the rate-limit data for a specific resource.|
