<h1 id="aws-waf">AWS WAF v2015-08-24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions, data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>

Base URLs:

* <a href="https://waf.amazonaws.com">https://waf.amazonaws.com</a> - The general WAF multi-region endpoint

* <a href="http://waf.cn-north-1.amazonaws.com.cn">http://waf.cn-north-1.amazonaws.com.cn</a> - The WAF endpoint for China (Beijing) and China (Ningxia)

* <a href="https://waf.cn-north-1.amazonaws.com.cn">https://waf.cn-north-1.amazonaws.com.cn</a> - The WAF endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/waf/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-waf-default">Default</h1>

## CreateByteMatchSet

<a id="opIdCreateByteMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateByteMatchSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateByteMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateByteMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createbytematchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateByteMatchSetRequest](#schemacreatebytematchsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateByteMatchSet|

> Example responses

> 200 Response

```json
{
  "ByteMatchSet": {
    "ByteMatchSetId": {},
    "Name": {},
    "ByteMatchTuples": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createbytematchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateByteMatchSetResponse](#schemacreatebytematchsetresponse)|
|480|480|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGeoMatchSet

<a id="opIdCreateGeoMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateGeoMatchSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateGeoMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateGeoMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="creategeomatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateGeoMatchSetRequest](#schemacreategeomatchsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateGeoMatchSet|

> Example responses

> 200 Response

```json
{
  "GeoMatchSet": {
    "GeoMatchSetId": {},
    "Name": {},
    "GeoMatchConstraints": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="creategeomatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGeoMatchSetResponse](#schemacreategeomatchsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateIPSet

<a id="opIdCreateIPSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateIPSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateIPSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>IPSet</a>, which you use to specify which web requests that you want to allow or block based on the IP addresses that the requests originate from. For example, if you're receiving a lot of requests from one or more individual IP addresses or one or more ranges of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that contains those IP addresses and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateIPSet</code> request.</p> </li> <li> <p>Submit a <code>CreateIPSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateIPSetRequest](#schemacreateipsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateIPSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "IPSet": {
    "IPSetDescriptors": [
      {
        "Type": "IPV4",
        "Value": "192.0.2.44/32"
      }
    ],
    "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "Name": "MyIPSetFriendlyName"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateIPSetResponse](#schemacreateipsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRateBasedRule

<a id="opIdCreateRateBasedRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateRateBasedRule' \
  -d '{
    "Name": {},
    "MetricName": {},
    "RateKey": {},
    "RateLimit": {},
    "ChangeToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateRateBasedRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows from a specified IP address in a five-minute period. The <code>RateBasedRule</code> also contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to count or block if these requests exceed the <code>RateLimit</code>.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not only must exceed the <code>RateLimit</code>, but it also must match all the conditions to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that meet the conditions in the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions must be received at a rate of more than 1,000 requests every five minutes. If both conditions are met and the rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a five-minute period, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p> <p>To create and configure a <code>RateBasedRule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the rule. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRateBasedRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates that you want to include in the rule.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "MetricName": {},
  "RateKey": {},
  "RateLimit": {},
  "ChangeToken": {},
  "Tags": {}
}
```

<h3 id="createratebasedrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRateBasedRuleRequest](#schemacreateratebasedrulerequest)|true|none|
|» Name|body|object|true|none|
|» MetricName|body|object|true|none|
|» RateKey|body|object|true|none|
|» RateLimit|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateRateBasedRule|

> Example responses

> 200 Response

```json
{
  "Rule": {
    "RuleId": {},
    "Name": {},
    "MetricName": {},
    "MatchPredicates": {},
    "RateKey": {},
    "RateLimit": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createratebasedrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRateBasedRuleResponse](#schemacreateratebasedruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRegexMatchSet

<a id="opIdCreateRegexMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateRegexMatchSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateRegexMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string. For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createregexmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRegexMatchSetRequest](#schemacreateregexmatchsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateRegexMatchSet|

> Example responses

> 200 Response

```json
{
  "RegexMatchSet": {
    "RegexMatchSetId": {},
    "Name": {},
    "RegexMatchTuples": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createregexmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRegexMatchSetResponse](#schemacreateregexmatchsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRegexPatternSet

<a id="opIdCreateRegexPatternSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateRegexPatternSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateRegexPatternSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Submit a <code>CreateRegexPatternSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createregexpatternset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRegexPatternSetRequest](#schemacreateregexpatternsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "RegexPatternSet": {
    "RegexPatternSetId": {},
    "Name": {},
    "RegexPatternStrings": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="createregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRegexPatternSetResponse](#schemacreateregexpatternsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRule

<a id="opIdCreateRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateRule' \
  -d '{
    "Name": {},
    "MetricName": {},
    "ChangeToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other predicates that identify the requests that you want to block. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed or blocked. For example, suppose that you add the following to a <code>Rule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateRule</code> request.</p> </li> <li> <p>Submit a <code>CreateRule</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "MetricName": {},
  "ChangeToken": {},
  "Tags": {}
}
```

<h3 id="createrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRuleRequest](#schemacreaterulerequest)|true|none|
|» Name|body|object|true|none|
|» MetricName|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateRule|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "Rule": {
    "MetricName": "WAFByteHeaderRule",
    "Name": "WAFByteHeaderRule",
    "Predicates": [
      {
        "DataId": "MyByteMatchSetID",
        "Negated": false,
        "Type": "ByteMatch"
      }
    ],
    "RuleId": "WAFRule-1-Example"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="createrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleResponse](#schemacreateruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|487|487|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRuleGroup

<a id="opIdCreateRuleGroup"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateRuleGroup' \
  -d '{
    "Name": {},
    "MetricName": {},
    "ChangeToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateRuleGroup`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>RuleGroup</code>. A rule group is a collection of predefined rules that you add to a web ACL. You use <a>UpdateRuleGroup</a> to add rules to the rule group.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "MetricName": {},
  "ChangeToken": {},
  "Tags": {}
}
```

<h3 id="createrulegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateRuleGroupRequest](#schemacreaterulegrouprequest)|true|none|
|» Name|body|object|true|none|
|» MetricName|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateRuleGroup|

> Example responses

> 200 Response

```json
{
  "RuleGroup": {
    "RuleGroupId": {},
    "Name": {},
    "MetricName": {}
  },
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="createrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRuleGroupResponse](#schemacreaterulegroupresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|484|484|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|485|485|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|486|486|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSizeConstraintSet

<a id="opIdCreateSizeConstraintSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateSizeConstraintSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateSizeConstraintSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>SizeConstraintSet</code>. You then use <a>UpdateSizeConstraintSet</a> to identify the part of a web request that you want AWS WAF to check for length, such as the length of the <code>User-Agent</code> header or the length of the query string. For example, you can create a <code>SizeConstraintSet</code> that matches any requests that have a query string that is longer than 100 bytes. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSizeConstraintSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <a>UpdateSizeConstraintSet</a> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createsizeconstraintset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateSizeConstraintSetRequest](#schemacreatesizeconstraintsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateSizeConstraintSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "SizeConstraintSet": {
    "Name": "MySampleSizeConstraintSet",
    "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SizeConstraints": [
      {
        "ComparisonOperator": "GT",
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "Size": 0,
        "TextTransformation": "NONE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createsizeconstraintset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSizeConstraintSetResponse](#schemacreatesizeconstraintsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateSqlInjectionMatchSet

<a id="opIdCreateSqlInjectionMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateSqlInjectionMatchSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateSqlInjectionMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <a>SqlInjectionMatchSet</a>, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateSqlInjectionMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count malicious SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createsqlinjectionmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateSqlInjectionMatchSetRequest](#schemacreatesqlinjectionmatchsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateSqlInjectionMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "SqlInjectionMatchSet": {
    "Name": "MySQLInjectionMatchSet",
    "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SqlInjectionMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createsqlinjectionmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateSqlInjectionMatchSetResponse](#schemacreatesqlinjectionmatchsetresponse)|
|480|480|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebACL

<a id="opIdCreateWebACL"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateWebACL' \
  -d '{
    "Name": {},
    "MetricName": {},
    "DefaultAction": {
      "Type": {}
    },
    "ChangeToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateWebACL`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p> <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateWebACL</code> request.</p> </li> <li> <p>Submit a <code>CreateWebACL</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p> </li> </ol> <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "MetricName": {},
  "DefaultAction": {
    "Type": {}
  },
  "ChangeToken": {},
  "Tags": {}
}
```

<h3 id="createwebacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWebACLRequest](#schemacreatewebaclrequest)|true|none|
|» Name|body|object|true|none|
|» MetricName|body|object|true|none|
|» DefaultAction|body|object|true|none|
|» » Type|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateWebACL|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "WebACL": {
    "DefaultAction": {
      "Type": "ALLOW"
    },
    "MetricName": "CreateExample",
    "Name": "CreateExample",
    "Rules": [
      {
        "Action": {
          "Type": "ALLOW"
        },
        "Priority": 1,
        "RuleId": "WAFRule-1-Example"
      }
    ],
    "WebACLId": "example-46da-4444-5555-example"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="createwebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebACLResponse](#schemacreatewebaclresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|
|488|488|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateWebACLMigrationStack

<a id="opIdCreateWebACLMigrationStack"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateWebACLMigrationStack' \
  -d '{
    "WebACLId": {},
    "S3BucketName": {},
    "IgnoreUnsupportedType": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateWebACLMigrationStack`

<p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p> <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p>

> Body parameter

```json
{
  "WebACLId": {},
  "S3BucketName": {},
  "IgnoreUnsupportedType": {}
}
```

<h3 id="createwebaclmigrationstack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateWebACLMigrationStackRequest](#schemacreatewebaclmigrationstackrequest)|true|none|
|» WebACLId|body|object|true|none|
|» S3BucketName|body|object|true|none|
|» IgnoreUnsupportedType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateWebACLMigrationStack|

> Example responses

> 200 Response

```json
{
  "S3ObjectUrl": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createwebaclmigrationstack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateWebACLMigrationStackResponse](#schemacreatewebaclmigrationstackresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFEntityMigrationException|[WAFEntityMigrationException](#schemawafentitymigrationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateXssMatchSet

<a id="opIdCreateXssMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.CreateXssMatchSet' \
  -d '{
    "Name": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.CreateXssMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>CreateXssMatchSet</code> request.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateXssMatchSet</a> request.</p> </li> <li> <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to allow, block, or count cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

<h3 id="createxssmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[CreateXssMatchSetRequest](#schemacreatexssmatchsetrequest)|true|none|
|» Name|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.CreateXssMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "XssMatchSet": {
    "Name": "MySampleXssMatchSet",
    "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "XssMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createxssmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateXssMatchSetResponse](#schemacreatexssmatchsetresponse)|
|480|480|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteByteMatchSet

<a id="opIdDeleteByteMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteByteMatchSet' \
  -d '{
    "ByteMatchSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteByteMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p> <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteByteMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteByteMatchSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "ByteMatchSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deletebytematchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteByteMatchSetRequest](#schemadeletebytematchsetrequest)|true|none|
|» ByteMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteByteMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletebytematchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteByteMatchSetResponse](#schemadeletebytematchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGeoMatchSet

<a id="opIdDeleteGeoMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteGeoMatchSet' \
  -d '{
    "GeoMatchSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteGeoMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any countries.</p> <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteGeoMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteGeoMatchSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "GeoMatchSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deletegeomatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteGeoMatchSetRequest](#schemadeletegeomatchsetrequest)|true|none|
|» GeoMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteGeoMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletegeomatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGeoMatchSetResponse](#schemadeletegeomatchsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteIPSet

<a id="opIdDeleteIPSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteIPSet' \
  -d '{
    "IPSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteIPSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or if it still includes any IP addresses.</p> <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteIPSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteIPSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "IPSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deleteipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteIPSetRequest](#schemadeleteipsetrequest)|true|none|
|» IPSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteIPSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteIPSetResponse](#schemadeleteipsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLoggingConfiguration

<a id="opIdDeleteLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteLoggingConfiguration' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteLoggingConfiguration`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deleteloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteLoggingConfigurationRequest](#schemadeleteloggingconfigurationrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteLoggingConfiguration|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deleteloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLoggingConfigurationResponse](#schemadeleteloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePermissionPolicy

<a id="opIdDeletePermissionPolicy"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeletePermissionPolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeletePermissionPolicy`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an IAM policy from the specified RuleGroup.</p> <p>The user making the request must be the owner of the RuleGroup.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="deletepermissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeletePermissionPolicyRequest](#schemadeletepermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeletePermissionPolicy|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="deletepermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePermissionPolicyResponse](#schemadeletepermissionpolicyresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRateBasedRule

<a id="opIdDeleteRateBasedRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteRateBasedRule' \
  -d '{
    "RuleId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteRateBasedRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more information, see <a>UpdateRateBasedRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRateBasedRule</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "RuleId": {},
  "ChangeToken": {}
}
```

<h3 id="deleteratebasedrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRateBasedRuleRequest](#schemadeleteratebasedrulerequest)|true|none|
|» RuleId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteRateBasedRule|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deleteratebasedrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRateBasedRuleResponse](#schemadeleteratebasedruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRegexMatchSet

<a id="opIdDeleteRegexMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteRegexMatchSet' \
  -d '{
    "RegexMatchSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteRegexMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexMatchSet</a>. You can't delete a <code>RegexMatchSet</code> if it's still used in any <code>Rules</code> or if it still includes any <code>RegexMatchTuples</code> objects (any filters).</p> <p>If you just want to remove a <code>RegexMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>RegexMatchSet</code> to remove filters, if any. For more information, see <a>UpdateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRegexMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteRegexMatchSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "RegexMatchSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deleteregexmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRegexMatchSetRequest](#schemadeleteregexmatchsetrequest)|true|none|
|» RegexMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteRegexMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteregexmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRegexMatchSetResponse](#schemadeleteregexmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRegexPatternSet

<a id="opIdDeleteRegexPatternSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteRegexPatternSet' \
  -d '{
    "RegexPatternSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteRegexPatternSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RegexPatternSet</a>. You can't delete a <code>RegexPatternSet</code> if it's still used in any <code>RegexMatchSet</code> or if the <code>RegexPatternSet</code> is not empty. </p>

> Body parameter

```json
{
  "RegexPatternSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deleteregexpatternset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRegexPatternSetRequest](#schemadeleteregexpatternsetrequest)|true|none|
|» RegexPatternSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deleteregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRegexPatternSetResponse](#schemadeleteregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRule

<a id="opIdDeleteRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteRule' \
  -d '{
    "RuleId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code> objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p> <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRule</code> request.</p> </li> <li> <p>Submit a <code>DeleteRule</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "RuleId": {},
  "ChangeToken": {}
}
```

<h3 id="deleterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRuleRequest](#schemadeleterulerequest)|true|none|
|» RuleId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteRule|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deleterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleResponse](#schemadeleteruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRuleGroup

<a id="opIdDeleteRuleGroup"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteRuleGroup' \
  -d '{
    "RuleGroupId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteRuleGroup`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code> objects or if it still includes any rules.</p> <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p> <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteRuleGroup</code> request.</p> </li> <li> <p>Submit a <code>DeleteRuleGroup</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "RuleGroupId": {},
  "ChangeToken": {}
}
```

<h3 id="deleterulegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteRuleGroupRequest](#schemadeleterulegrouprequest)|true|none|
|» RuleGroupId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteRuleGroup|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deleterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRuleGroupResponse](#schemadeleterulegroupresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|
|485|485|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSizeConstraintSet

<a id="opIdDeleteSizeConstraintSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteSizeConstraintSet' \
  -d '{
    "SizeConstraintSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteSizeConstraintSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SizeConstraintSet</a>. You can't delete a <code>SizeConstraintSet</code> if it's still used in any <code>Rules</code> or if it still includes any <a>SizeConstraint</a> objects (any filters).</p> <p>If you just want to remove a <code>SizeConstraintSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>SizeConstraintSet</code> to remove filters, if any. For more information, see <a>UpdateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSizeConstraintSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSizeConstraintSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "SizeConstraintSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deletesizeconstraintset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSizeConstraintSetRequest](#schemadeletesizeconstraintsetrequest)|true|none|
|» SizeConstraintSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteSizeConstraintSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletesizeconstraintset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSizeConstraintSetResponse](#schemadeletesizeconstraintsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteSqlInjectionMatchSet

<a id="opIdDeleteSqlInjectionMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteSqlInjectionMatchSet' \
  -d '{
    "SqlInjectionMatchSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteSqlInjectionMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p> <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "SqlInjectionMatchSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deletesqlinjectionmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteSqlInjectionMatchSetRequest](#schemadeletesqlinjectionmatchsetrequest)|true|none|
|» SqlInjectionMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteSqlInjectionMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletesqlinjectionmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteSqlInjectionMatchSetResponse](#schemadeletesqlinjectionmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteWebACL

<a id="opIdDeleteWebACL"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteWebACL' \
  -d '{
    "WebACLId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteWebACL`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes a <a>WebACL</a>. You can't delete a <code>WebACL</code> if it still contains any <code>Rules</code>.</p> <p>To delete a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Update the <code>WebACL</code> to remove <code>Rules</code>, if any. For more information, see <a>UpdateWebACL</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteWebACL</code> request.</p> </li> <li> <p>Submit a <code>DeleteWebACL</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "WebACLId": {},
  "ChangeToken": {}
}
```

<h3 id="deletewebacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteWebACLRequest](#schemadeletewebaclrequest)|true|none|
|» WebACLId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteWebACL|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="deletewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteWebACLResponse](#schemadeletewebaclresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|
|486|486|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|487|487|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteXssMatchSet

<a id="opIdDeleteXssMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.DeleteXssMatchSet' \
  -d '{
    "XssMatchSetId": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.DeleteXssMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p> <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p> <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p> <ol> <li> <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see <a>UpdateXssMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a <code>DeleteXssMatchSet</code> request.</p> </li> <li> <p>Submit a <code>DeleteXssMatchSet</code> request.</p> </li> </ol>

> Body parameter

```json
{
  "XssMatchSetId": {},
  "ChangeToken": {}
}
```

<h3 id="deletexssmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DeleteXssMatchSetRequest](#schemadeletexssmatchsetrequest)|true|none|
|» XssMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.DeleteXssMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletexssmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteXssMatchSetResponse](#schemadeletexssmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|484|484|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|485|485|WAFNonEmptyEntityException|[WAFNonEmptyEntityException](#schemawafnonemptyentityexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetByteMatchSet

<a id="opIdGetByteMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetByteMatchSet' \
  -d '{
    "ByteMatchSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetByteMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>ByteMatchSet</a> specified by <code>ByteMatchSetId</code>.</p>

> Body parameter

```json
{
  "ByteMatchSetId": {}
}
```

<h3 id="getbytematchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetByteMatchSetRequest](#schemagetbytematchsetrequest)|true|none|
|» ByteMatchSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetByteMatchSet|

> Example responses

> 200 Response

```json
{
  "ByteMatchSet": {
    "ByteMatchSetId": "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5",
    "ByteMatchTuples": [
      {
        "FieldToMatch": {
          "Data": "referer",
          "Type": "HEADER"
        },
        "PositionalConstraint": "CONTAINS",
        "TargetString": "badrefer1",
        "TextTransformation": "NONE"
      }
    ],
    "Name": "ByteMatchNameExample"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getbytematchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetByteMatchSetResponse](#schemagetbytematchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChangeToken

<a id="opIdGetChangeToken"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetChangeToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetChangeToken' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetChangeToken`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p> <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second <code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p> <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>, which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the status of your change token.</p>

> Body parameter

```json
{}
```

<h3 id="getchangetoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetChangeTokenRequest](#schemagetchangetokenrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetChangeToken|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

<h3 id="getchangetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChangeTokenResponse](#schemagetchangetokenresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChangeTokenStatus

<a id="opIdGetChangeTokenStatus"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetChangeTokenStatus' \
  -d '{
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetChangeTokenStatus`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is one of the following values:</p> <ul> <li> <p> <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet in a call to create, update, or delete an AWS WAF object.</p> </li> <li> <p> <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p> </li> <li> <p> <code>INSYNC</code>: Propagation is complete.</p> </li> </ul>

> Body parameter

```json
{
  "ChangeToken": {}
}
```

<h3 id="getchangetokenstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetChangeTokenStatusRequest](#schemagetchangetokenstatusrequest)|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetChangeTokenStatus|

> Example responses

> 200 Response

```json
{
  "ChangeTokenStatus": "PENDING"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getchangetokenstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChangeTokenStatusResponse](#schemagetchangetokenstatusresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGeoMatchSet

<a id="opIdGetGeoMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetGeoMatchSet' \
  -d '{
    "GeoMatchSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetGeoMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>

> Body parameter

```json
{
  "GeoMatchSetId": {}
}
```

<h3 id="getgeomatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetGeoMatchSetRequest](#schemagetgeomatchsetrequest)|true|none|
|» GeoMatchSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetGeoMatchSet|

> Example responses

> 200 Response

```json
{
  "GeoMatchSet": {
    "GeoMatchSetId": {},
    "Name": {},
    "GeoMatchConstraints": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getgeomatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGeoMatchSetResponse](#schemagetgeomatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetIPSet

<a id="opIdGetIPSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetIPSet' \
  -d '{
    "IPSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetIPSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>IPSet</a> that is specified by <code>IPSetId</code>.</p>

> Body parameter

```json
{
  "IPSetId": {}
}
```

<h3 id="getipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetIPSetRequest](#schemagetipsetrequest)|true|none|
|» IPSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetIPSet|

> Example responses

> 200 Response

```json
{
  "IPSet": {
    "IPSetDescriptors": [
      {
        "Type": "IPV4",
        "Value": "192.0.2.44/32"
      }
    ],
    "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "Name": "MyIPSetFriendlyName"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetIPSetResponse](#schemagetipsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLoggingConfiguration

<a id="opIdGetLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetLoggingConfiguration' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetLoggingConfiguration`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLoggingConfigurationRequest](#schemagetloggingconfigurationrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLoggingConfigurationResponse](#schemagetloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPermissionPolicy

<a id="opIdGetPermissionPolicy"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetPermissionPolicy' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetPermissionPolicy`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the IAM policy attached to the RuleGroup.</p>

> Body parameter

```json
{
  "ResourceArn": {}
}
```

<h3 id="getpermissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetPermissionPolicyRequest](#schemagetpermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetPermissionPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getpermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPermissionPolicyResponse](#schemagetpermissionpolicyresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRateBasedRule

<a id="opIdGetRateBasedRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRateBasedRule' \
  -d '{
    "RuleId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRateBasedRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RateBasedRule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRateBasedRule</code> request.</p>

> Body parameter

```json
{
  "RuleId": {}
}
```

<h3 id="getratebasedrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRateBasedRuleRequest](#schemagetratebasedrulerequest)|true|none|
|» RuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRateBasedRule|

> Example responses

> 200 Response

```json
{
  "Rule": {
    "RuleId": {},
    "Name": {},
    "MetricName": {},
    "MatchPredicates": {},
    "RateKey": {},
    "RateLimit": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getratebasedrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRateBasedRuleResponse](#schemagetratebasedruleresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRateBasedRuleManagedKeys

<a id="opIdGetRateBasedRuleManagedKeys"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRateBasedRuleManagedKeys' \
  -d '{
    "RuleId": {},
    "NextMarker": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRateBasedRuleManagedKeys`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>

> Body parameter

```json
{
  "RuleId": {},
  "NextMarker": {}
}
```

<h3 id="getratebasedrulemanagedkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRateBasedRuleManagedKeysRequest](#schemagetratebasedrulemanagedkeysrequest)|true|none|
|» RuleId|body|object|true|none|
|» NextMarker|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRateBasedRuleManagedKeys|

> Example responses

> 200 Response

```json
{
  "ManagedKeys": {},
  "NextMarker": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="getratebasedrulemanagedkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRateBasedRuleManagedKeysResponse](#schemagetratebasedrulemanagedkeysresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegexMatchSet

<a id="opIdGetRegexMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRegexMatchSet' \
  -d '{
    "RegexMatchSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRegexMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexMatchSet</a> specified by <code>RegexMatchSetId</code>.</p>

> Body parameter

```json
{
  "RegexMatchSetId": {}
}
```

<h3 id="getregexmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRegexMatchSetRequest](#schemagetregexmatchsetrequest)|true|none|
|» RegexMatchSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRegexMatchSet|

> Example responses

> 200 Response

```json
{
  "RegexMatchSet": {
    "RegexMatchSetId": {},
    "Name": {},
    "RegexMatchTuples": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getregexmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegexMatchSetResponse](#schemagetregexmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegexPatternSet

<a id="opIdGetRegexPatternSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRegexPatternSet' \
  -d '{
    "RegexPatternSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRegexPatternSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RegexPatternSet</a> specified by <code>RegexPatternSetId</code>.</p>

> Body parameter

```json
{
  "RegexPatternSetId": {}
}
```

<h3 id="getregexpatternset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRegexPatternSetRequest](#schemagetregexpatternsetrequest)|true|none|
|» RegexPatternSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "RegexPatternSet": {
    "RegexPatternSetId": {},
    "Name": {},
    "RegexPatternStrings": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegexPatternSetResponse](#schemagetregexpatternsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRule

<a id="opIdGetRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRule' \
  -d '{
    "RuleId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>Rule</a> that is specified by the <code>RuleId</code> that you included in the <code>GetRule</code> request.</p>

> Body parameter

```json
{
  "RuleId": {}
}
```

<h3 id="getrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRuleRequest](#schemagetrulerequest)|true|none|
|» RuleId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRule|

> Example responses

> 200 Response

```json
{
  "Rule": {
    "MetricName": "WAFByteHeaderRule",
    "Name": "WAFByteHeaderRule",
    "Predicates": [
      {
        "DataId": "MyByteMatchSetID",
        "Negated": false,
        "Type": "ByteMatch"
      }
    ],
    "RuleId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRuleResponse](#schemagetruleresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRuleGroup

<a id="opIdGetRuleGroup"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetRuleGroup' \
  -d '{
    "RuleGroupId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetRuleGroup`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>RuleGroup</a> that is specified by the <code>RuleGroupId</code> that you included in the <code>GetRuleGroup</code> request.</p> <p>To view the rules in a rule group, use <a>ListActivatedRulesInRuleGroup</a>.</p>

> Body parameter

```json
{
  "RuleGroupId": {}
}
```

<h3 id="getrulegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetRuleGroupRequest](#schemagetrulegrouprequest)|true|none|
|» RuleGroupId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetRuleGroup|

> Example responses

> 200 Response

```json
{
  "RuleGroup": {
    "RuleGroupId": {},
    "Name": {},
    "MetricName": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRuleGroupResponse](#schemagetrulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSampledRequests

<a id="opIdGetSampledRequests"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetSampledRequests' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetSampledRequests' \
  -d '{
    "WebAclId": {},
    "RuleId": {},
    "TimeWindow": {
      "StartTime": {},
      "EndTime": {}
    },
    "MaxItems": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetSampledRequests`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>

> Body parameter

```json
{
  "WebAclId": {},
  "RuleId": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  },
  "MaxItems": {}
}
```

<h3 id="getsampledrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSampledRequestsRequest](#schemagetsampledrequestsrequest)|true|none|
|» WebAclId|body|object|true|none|
|» RuleId|body|object|true|none|
|» TimeWindow|body|object|true|none|
|» » StartTime|body|object|true|none|
|» » EndTime|body|object|true|none|
|» MaxItems|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetSampledRequests|

> Example responses

> 200 Response

```json
{
  "PopulationSize": 50,
  "SampledRequests": [
    {
      "Action": "BLOCK",
      "Request": {
        "ClientIP": "192.0.2.44",
        "Country": "US",
        "HTTPVersion": "HTTP/1.1",
        "Headers": [
          {
            "Name": "User-Agent",
            "Value": "BadBot "
          }
        ],
        "Method": "HEAD"
      },
      "Timestamp": "2016-09-27T14:55Z",
      "Weight": 1
    }
  ],
  "TimeWindow": {
    "EndTime": "2016-09-27T15:50Z",
    "StartTime": "2016-09-27T14:50Z"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="getsampledrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSampledRequestsResponse](#schemagetsampledrequestsresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSizeConstraintSet

<a id="opIdGetSizeConstraintSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetSizeConstraintSet' \
  -d '{
    "SizeConstraintSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetSizeConstraintSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>

> Body parameter

```json
{
  "SizeConstraintSetId": {}
}
```

<h3 id="getsizeconstraintset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSizeConstraintSetRequest](#schemagetsizeconstraintsetrequest)|true|none|
|» SizeConstraintSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetSizeConstraintSet|

> Example responses

> 200 Response

```json
{
  "SizeConstraintSet": {
    "Name": "MySampleSizeConstraintSet",
    "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SizeConstraints": [
      {
        "ComparisonOperator": "GT",
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "Size": 0,
        "TextTransformation": "NONE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getsizeconstraintset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSizeConstraintSetResponse](#schemagetsizeconstraintsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetSqlInjectionMatchSet

<a id="opIdGetSqlInjectionMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetSqlInjectionMatchSet' \
  -d '{
    "SqlInjectionMatchSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetSqlInjectionMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>

> Body parameter

```json
{
  "SqlInjectionMatchSetId": {}
}
```

<h3 id="getsqlinjectionmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetSqlInjectionMatchSetRequest](#schemagetsqlinjectionmatchsetrequest)|true|none|
|» SqlInjectionMatchSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetSqlInjectionMatchSet|

> Example responses

> 200 Response

```json
{
  "SqlInjectionMatchSet": {
    "Name": "MySQLInjectionMatchSet",
    "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SqlInjectionMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getsqlinjectionmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSqlInjectionMatchSetResponse](#schemagetsqlinjectionmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWebACL

<a id="opIdGetWebACL"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetWebACL' \
  -d '{
    "WebACLId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetWebACL`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>WebACL</a> that is specified by <code>WebACLId</code>.</p>

> Body parameter

```json
{
  "WebACLId": {}
}
```

<h3 id="getwebacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetWebACLRequest](#schemagetwebaclrequest)|true|none|
|» WebACLId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetWebACL|

> Example responses

> 200 Response

```json
{
  "WebACL": {
    "DefaultAction": {
      "Type": "ALLOW"
    },
    "MetricName": "CreateExample",
    "Name": "CreateExample",
    "Rules": [
      {
        "Action": {
          "Type": "ALLOW"
        },
        "Priority": 1,
        "RuleId": "WAFRule-1-Example"
      }
    ],
    "WebACLId": "createwebacl-1472061481310"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getwebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWebACLResponse](#schemagetwebaclresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetXssMatchSet

<a id="opIdGetXssMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.GetXssMatchSet' \
  -d '{
    "XssMatchSetId": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.GetXssMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns the <a>XssMatchSet</a> that is specified by <code>XssMatchSetId</code>.</p>

> Body parameter

```json
{
  "XssMatchSetId": {}
}
```

<h3 id="getxssmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetXssMatchSetRequest](#schemagetxssmatchsetrequest)|true|none|
|» XssMatchSetId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.GetXssMatchSet|

> Example responses

> 200 Response

```json
{
  "XssMatchSet": {
    "Name": "MySampleXssMatchSet",
    "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "XssMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="getxssmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetXssMatchSetResponse](#schemagetxssmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListActivatedRulesInRuleGroup

<a id="opIdListActivatedRulesInRuleGroup"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListActivatedRulesInRuleGroup' \
  -d '{
    "RuleGroupId": {},
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListActivatedRulesInRuleGroup`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ActivatedRule</a> objects.</p>

> Body parameter

```json
{
  "RuleGroupId": {},
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listactivatedrulesinrulegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListActivatedRulesInRuleGroupRequest](#schemalistactivatedrulesinrulegrouprequest)|true|none|
|» RuleGroupId|body|object|false|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListActivatedRulesInRuleGroup|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "ActivatedRules": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listactivatedrulesinrulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListActivatedRulesInRuleGroupResponse](#schemalistactivatedrulesinrulegroupresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListByteMatchSets

<a id="opIdListByteMatchSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListByteMatchSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListByteMatchSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listbytematchsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListByteMatchSetsRequest](#schemalistbytematchsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListByteMatchSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "ByteMatchSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listbytematchsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListByteMatchSetsResponse](#schemalistbytematchsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGeoMatchSets

<a id="opIdListGeoMatchSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListGeoMatchSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListGeoMatchSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>GeoMatchSetSummary</a> objects in the response.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listgeomatchsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListGeoMatchSetsRequest](#schemalistgeomatchsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListGeoMatchSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "GeoMatchSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listgeomatchsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGeoMatchSetsResponse](#schemalistgeomatchsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListIPSets

<a id="opIdListIPSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListIPSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListIPSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListIPSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>IPSetSummary</a> objects in the response.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listipsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListIPSetsRequest](#schemalistipsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListIPSets|

> Example responses

> 200 Response

```json
{
  "IPSets": [
    {
      "IPSetId": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
      "Name": "MyIPSetFriendlyName"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listipsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListIPSetsResponse](#schemalistipsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLoggingConfigurations

<a id="opIdListLoggingConfigurations"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListLoggingConfigurations' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListLoggingConfigurations`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>LoggingConfiguration</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listloggingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLoggingConfigurationsRequest](#schemalistloggingconfigurationsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListLoggingConfigurations|

> Example responses

> 200 Response

```json
{
  "LoggingConfigurations": {},
  "NextMarker": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

<h3 id="listloggingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLoggingConfigurationsResponse](#schemalistloggingconfigurationsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRateBasedRules

<a id="opIdListRateBasedRules"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListRateBasedRules' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListRateBasedRules`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listratebasedrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRateBasedRulesRequest](#schemalistratebasedrulesrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListRateBasedRules|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "Rules": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listratebasedrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRateBasedRulesResponse](#schemalistratebasedrulesresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRegexMatchSets

<a id="opIdListRegexMatchSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListRegexMatchSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListRegexMatchSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexMatchSetSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listregexmatchsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRegexMatchSetsRequest](#schemalistregexmatchsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListRegexMatchSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "RegexMatchSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listregexmatchsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRegexMatchSetsResponse](#schemalistregexmatchsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRegexPatternSets

<a id="opIdListRegexPatternSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListRegexPatternSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListRegexPatternSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RegexPatternSetSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listregexpatternsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRegexPatternSetsRequest](#schemalistregexpatternsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListRegexPatternSets|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "RegexPatternSets": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listregexpatternsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRegexPatternSetsResponse](#schemalistregexpatternsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRuleGroups

<a id="opIdListRuleGroups"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListRuleGroups' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListRuleGroups`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listrulegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRuleGroupsRequest](#schemalistrulegroupsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "RuleGroups": {}
}
```

> 480 Response

```json
null
```

<h3 id="listrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRuleGroupsResponse](#schemalistrulegroupsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRules

<a id="opIdListRules"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListRules' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListRules`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRulesRequest](#schemalistrulesrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListRules|

> Example responses

> 200 Response

```json
{
  "Rules": [
    {
      "Name": "WAFByteHeaderRule",
      "RuleId": "WAFRule-1-Example"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRulesResponse](#schemalistrulesresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSizeConstraintSets

<a id="opIdListSizeConstraintSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListSizeConstraintSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListSizeConstraintSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listsizeconstraintsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSizeConstraintSetsRequest](#schemalistsizeconstraintsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListSizeConstraintSets|

> Example responses

> 200 Response

```json
{
  "SizeConstraintSets": [
    {
      "Name": "MySampleSizeConstraintSet",
      "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listsizeconstraintsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSizeConstraintSetsResponse](#schemalistsizeconstraintsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSqlInjectionMatchSets

<a id="opIdListSqlInjectionMatchSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListSqlInjectionMatchSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListSqlInjectionMatchSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listsqlinjectionmatchsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSqlInjectionMatchSetsRequest](#schemalistsqlinjectionmatchsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListSqlInjectionMatchSets|

> Example responses

> 200 Response

```json
{
  "SqlInjectionMatchSets": [
    {
      "Name": "MySQLInjectionMatchSet",
      "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listsqlinjectionmatchsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSqlInjectionMatchSetsResponse](#schemalistsqlinjectionmatchsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListSubscribedRuleGroups

<a id="opIdListSubscribedRuleGroups"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListSubscribedRuleGroups' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListSubscribedRuleGroups`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>RuleGroup</a> objects that you are subscribed to.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listsubscribedrulegroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListSubscribedRuleGroupsRequest](#schemalistsubscribedrulegroupsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListSubscribedRuleGroups|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "RuleGroups": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listsubscribedrulegroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListSubscribedRuleGroupsResponse](#schemalistsubscribedrulegroupsresponse)|
|480|480|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListTagsForResource' \
  -d '{
    "NextMarker": {},
    "Limit": {},
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListTagsForResource`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Retrieves the tags associated with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {},
  "ResourceARN": {}
}
```

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagsForResourceRequest](#schemalisttagsforresourcerequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "NextMarker": {},
  "TagInfoForResource": {
    "ResourceARN": {},
    "TagList": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|
|484|484|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|485|485|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebACLs

<a id="opIdListWebACLs"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListWebACLs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListWebACLs' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListWebACLs`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>WebACLSummary</a> objects in the response.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listwebacls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListWebACLsRequest](#schemalistwebaclsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListWebACLs|

> Example responses

> 200 Response

```json
{
  "WebACLs": [
    {
      "Name": "WebACLexample",
      "WebACLId": "webacl-1472061481310"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listwebacls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebACLsResponse](#schemalistwebaclsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListXssMatchSets

<a id="opIdListXssMatchSets"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.ListXssMatchSets' \
  -d '{
    "NextMarker": {},
    "Limit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.ListXssMatchSets`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returns an array of <a>XssMatchSet</a> objects.</p>

> Body parameter

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

<h3 id="listxssmatchsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListXssMatchSetsRequest](#schemalistxssmatchsetsrequest)|true|none|
|» NextMarker|body|object|false|none|
|» Limit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.ListXssMatchSets|

> Example responses

> 200 Response

```json
{
  "XssMatchSets": [
    {
      "Name": "MySampleXssMatchSet",
      "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="listxssmatchsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListXssMatchSetsResponse](#schemalistxssmatchsetsresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLoggingConfiguration

<a id="opIdPutLoggingConfiguration"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.PutLoggingConfiguration' \
  -d '{
    "LoggingConfiguration": {
      "ResourceArn": {},
      "LogDestinationConfigs": {},
      "RedactedFields": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.PutLoggingConfiguration`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>

> Body parameter

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

<h3 id="putloggingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutLoggingConfigurationRequest](#schemaputloggingconfigurationrequest)|true|none|
|» LoggingConfiguration|body|object|true|none|
|» » ResourceArn|body|object|true|none|
|» » LogDestinationConfigs|body|object|true|none|
|» » RedactedFields|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.PutLoggingConfiguration|

> Example responses

> 200 Response

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putloggingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLoggingConfigurationResponse](#schemaputloggingconfigurationresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|482|482|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|483|483|WAFServiceLinkedRoleErrorException|[WAFServiceLinkedRoleErrorException](#schemawafservicelinkedroleerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPermissionPolicy

<a id="opIdPutPermissionPolicy"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.PutPermissionPolicy' \
  -d '{
    "ResourceArn": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.PutPermissionPolicy`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p> <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p> </li> <li> <p> <code>Effect</code> must specify <code>Allow</code>.</p> </li> <li> <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p> </li> <li> <p>The policy cannot include a <code>Resource</code> parameter.</p> </li> <li> <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the RuleGroup.</p> </li> <li> <p>Your policy must be composed using IAM Policy version 2012-10-17.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>. </p> <p>An example of a valid policy parameter is shown in the Examples section below.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

<h3 id="putpermissionpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[PutPermissionPolicyRequest](#schemaputpermissionpolicyrequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.PutPermissionPolicy|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="putpermissionpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutPermissionPolicyResponse](#schemaputpermissionpolicyresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFInvalidPermissionPolicyException|[WAFInvalidPermissionPolicyException](#schemawafinvalidpermissionpolicyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.TagResource`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can use this action to tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

> Body parameter

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.TagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|
|485|485|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|486|486|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UntagResource`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p/>

> Body parameter

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceARN|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UntagResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|482|482|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|483|483|WAFBadRequestException|[WAFBadRequestException](#schemawafbadrequestexception)|
|484|484|WAFTagOperationException|[WAFTagOperationException](#schemawaftagoperationexception)|
|485|485|WAFTagOperationInternalErrorException|[WAFTagOperationInternalErrorException](#schemawaftagoperationinternalerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateByteMatchSet

<a id="opIdUpdateByteMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateByteMatchSet' \
  -d '{
    "ByteMatchSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateByteMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p> </li> <li> <p>Where to look, such as at the beginning or the end of a query string.</p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateByteMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "ByteMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updatebytematchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateByteMatchSetRequest](#schemaupdatebytematchsetrequest)|true|none|
|» ByteMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateByteMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatebytematchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateByteMatchSetResponse](#schemaupdatebytematchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|485|485|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|486|486|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|487|487|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGeoMatchSet

<a id="opIdUpdateGeoMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateGeoMatchSet' \
  -d '{
    "GeoMatchSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateGeoMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p> </li> <li> <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p> </li> </ul> <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateGeoMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateGeoMatchSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete. If you want to change a country, you delete the existing country and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "GeoMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updategeomatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateGeoMatchSetRequest](#schemaupdategeomatchsetrequest)|true|none|
|» GeoMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateGeoMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updategeomatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGeoMatchSetResponse](#schemaupdategeomatchsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIPSet

<a id="opIdUpdateIPSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateIPSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateIPSet' \
  -d '{
    "IPSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateIPSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change an <code>IPSetDescriptor</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p> </li> <li> <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or <code>192.0.2.44/32</code> (for the individual IP address <code>192.0.2.44</code>). </p> </li> </ul> <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>.</p> <p>IPv6 addresses can be represented using any of the following formats:</p> <ul> <li> <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p> </li> <li> <p>1111:0:0:0:0:0:0:0111/128</p> </li> <li> <p>1111::0111/128</p> </li> <li> <p>1111::111/128</p> </li> </ul> <p>You use an <code>IPSet</code> to specify which web requests you want to allow or block based on the IP addresses that the requests originated from. For example, if you're receiving a lot of requests from one or a small number of IP addresses and you want to block the requests, you can create an <code>IPSet</code> that specifies those IP addresses, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>IPSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateIPSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you want AWS WAF to watch for.</p> </li> </ol> <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to add and/or the IP addresses that you want to delete. If you want to change an IP address, you delete the existing IP address and add the new one.</p> <p>You can insert a maximum of 1000 addresses in a single request.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "IPSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updateipset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateIPSetRequest](#schemaupdateipsetrequest)|true|none|
|» IPSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateIPSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updateipset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIPSetResponse](#schemaupdateipsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRateBasedRule

<a id="opIdUpdateRateBasedRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateRateBasedRule' \
  -d '{
    "RuleId": {},
    "ChangeToken": {},
    "Updates": {},
    "RateLimit": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateRateBasedRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the <code>RateLimit</code> in the rule. </p> <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to block or count. The <code>RateLimit</code> specifies the number of requests every five minutes that triggers the rule.</p> <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked. For example, suppose you add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the rule. For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>. Further, requests that match these two conditions much be received at a rate of more than 1,000 every five minutes. If the rate drops below this limit, AWS WAF no longer blocks the requests.</p> <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a <code>RateBasedRule</code>:</p> <ul> <li> <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code> </p> </li> <li> <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code> </p> </li> <li> <p>A <code>TargetString</code> of <code>login</code> </p> </li> </ul> <p>Further, you specify a <code>RateLimit</code> of 1,000.</p> <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>

> Body parameter

```json
{
  "RuleId": {},
  "ChangeToken": {},
  "Updates": {},
  "RateLimit": {}
}
```

<h3 id="updateratebasedrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRateBasedRuleRequest](#schemaupdateratebasedrulerequest)|true|none|
|» RuleId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|
|» RateLimit|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateRateBasedRule|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updateratebasedrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRateBasedRuleResponse](#schemaupdateratebasedruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRegexMatchSet

<a id="opIdUpdateRegexMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateRegexMatchSet' \
  -d '{
    "RegexMatchSetId": {},
    "Updates": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateRegexMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul> <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p> <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexMatchSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "RegexMatchSetId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

<h3 id="updateregexmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRegexMatchSetRequest](#schemaupdateregexmatchsetrequest)|true|none|
|» RegexMatchSetId|body|object|true|none|
|» Updates|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateRegexMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updateregexmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRegexMatchSetResponse](#schemaupdateregexmatchsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFDisallowedNameException|[WAFDisallowedNameException](#schemawafdisallowednameexception)|
|483|483|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|484|484|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|487|487|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRegexPatternSet

<a id="opIdUpdateRegexPatternSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateRegexPatternSet' \
  -d '{
    "RegexPatternSetId": {},
    "Updates": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateRegexPatternSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the <code>RegexPatternString</code>.</p> </li> <li> <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p> </li> </ul> <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p> <ul> <li> <p>BadBot</p> </li> <li> <p>BadB0t</p> </li> <li> <p>B@dBot</p> </li> <li> <p>B@dB0t</p> </li> </ul> <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateRegexPatternSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "RegexPatternSetId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

<h3 id="updateregexpatternset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRegexPatternSetRequest](#schemaupdateregexpatternsetrequest)|true|none|
|» RegexPatternSetId|body|object|true|none|
|» Updates|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateRegexPatternSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updateregexpatternset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRegexPatternSetResponse](#schemaupdateregexpatternsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|485|485|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|486|486|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|487|487|WAFInvalidRegexPatternException|[WAFInvalidRegexPatternException](#schemawafinvalidregexpatternexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRule

<a id="opIdUpdateRule"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateRule' \
  -d '{
    "RuleId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateRule`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests that you want to allow, block, or count. If you add more than one predicate to a <code>Rule</code>, a request must match all of the specifications to be allowed, blocked, or counted. For example, suppose that you add the following to a <code>Rule</code>: </p> <ul> <li> <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p> </li> <li> <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code> </p> </li> </ul> <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>. For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code> <i>and</i> the request must originate from the IP address 192.0.2.44.</p> <p>To create and configure a <code>Rule</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p> </li> <li> <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRule</a> request.</p> </li> <li> <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "RuleId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updaterule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRuleRequest](#schemaupdaterulerequest)|true|none|
|» RuleId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateRule|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updaterule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleResponse](#schemaupdateruleresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRuleGroup

<a id="opIdUpdateRuleGroup"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateRuleGroup' \
  -d '{
    "RuleGroupId": {},
    "Updates": {},
    "ChangeToken": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateRuleGroup`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p> <p>You can only insert <code>REGULAR</code> rules into a rule group.</p> <p>You can have a maximum of ten rules per rule group.</p> <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p> <ol> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateRuleGroup</a> request.</p> </li> <li> <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p> </li> <li> <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p> </li> </ol> <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and add the new one.</p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "RuleGroupId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

<h3 id="updaterulegroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateRuleGroupRequest](#schemaupdaterulegrouprequest)|true|none|
|» RuleGroupId|body|object|true|none|
|» Updates|body|object|true|none|
|» ChangeToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateRuleGroup|

> Example responses

> 200 Response

```json
{
  "ChangeToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="updaterulegroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRuleGroupResponse](#schemaupdaterulegroupresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|483|483|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|484|484|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|485|485|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|486|486|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSizeConstraintSet

<a id="opIdUpdateSizeConstraintSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateSizeConstraintSet' \
  -d '{
    "SizeConstraintSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateSizeConstraintSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object, you specify the following values: </p> <ul> <li> <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object, you delete the existing object and add a new one.</p> </li> <li> <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the <code>User-Agent</code> header.</p> </li> <li> <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length. Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes of your request to AWS WAF.</p> <p>You can only specify a single type of TextTransformation.</p> </li> <li> <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as equals, greater than, less than, and so on.</p> </li> <li> <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p> </li> </ul> <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the <code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p> <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p> <ol> <li> <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <code>UpdateSizeConstraintSet</code> request.</p> </li> <li> <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect (for example, the header or the URI) and the value that you want AWS WAF to watch for.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "SizeConstraintSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updatesizeconstraintset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateSizeConstraintSetRequest](#schemaupdatesizeconstraintsetrequest)|true|none|
|» SizeConstraintSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateSizeConstraintSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

<h3 id="updatesizeconstraintset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSizeConstraintSetResponse](#schemaupdatesizeconstraintsetresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSqlInjectionMatchSet

<a id="opIdUpdateSqlInjectionMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateSqlInjectionMatchSet' \
  -d '{
    "SqlInjectionMatchSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateSqlInjectionMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>SqlInjectionMatchTuple</a> objects (filters) in a <a>SqlInjectionMatchSet</a>. For each <code>SqlInjectionMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change a <code>SqlInjectionMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for snippets of malicious SQL code.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>SqlInjectionMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain snippets of SQL code in the query string and you want to block the requests, you can create a <code>SqlInjectionMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure a <code>SqlInjectionMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateSqlInjectionMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateSqlInjectionMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for snippets of SQL code.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "SqlInjectionMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updatesqlinjectionmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateSqlInjectionMatchSetRequest](#schemaupdatesqlinjectionmatchsetrequest)|true|none|
|» SqlInjectionMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateSqlInjectionMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatesqlinjectionmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSqlInjectionMatchSetResponse](#schemaupdatesqlinjectionmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|485|485|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|486|486|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|487|487|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateWebACL

<a id="opIdUpdateWebACL"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateWebACL' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateWebACL' \
  -d '{
    "WebACLId": {},
    "ChangeToken": {},
    "Updates": {},
    "DefaultAction": {
      "Type": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateWebACL`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p> <ul> <li> <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>. AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p> </li> <li> <p>The <code>Rules</code> that you want to add or delete. If you want to replace one <code>Rule</code> with another, you delete the existing <code>Rule</code> and add the new one.</p> </li> <li> <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the <code>Rule</code>.</p> </li> <li> <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a <code>WebACL</code>. If you add more than one <code>Rule</code> to a <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code> in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has the lowest value for <code>Priority</code> is evaluated first.) When a web request matches all the predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining <code>Rules</code> in the <code>WebACL</code>, if any. </p> </li> </ul> <p>To create and configure a <code>WebACL</code>, perform the following steps:</p> <ol> <li> <p>Create and update the predicates that you want to include in <code>Rules</code>. For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>, <a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p> </li> <li> <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see <a>CreateRule</a> and <a>UpdateRule</a>.</p> </li> <li> <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p> </li> <li> <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateWebACL</a> request.</p> </li> <li> <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>, to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution. </p> <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group as your <code>ActivatedRule</code> , you can exclude specific rules from that rule group.</p> <p>If you already have a rule group associated with a web ACL and want to submit an <code>UpdateWebACL</code> request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see <a>ActivatedRule$ExcludedRules</a> . </p> </li> </ol> <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. </p> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "WebACLId": {},
  "ChangeToken": {},
  "Updates": {},
  "DefaultAction": {
    "Type": {}
  }
}
```

<h3 id="updatewebacl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateWebACLRequest](#schemaupdatewebaclrequest)|true|none|
|» WebACLId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|false|none|
|» DefaultAction|body|object|false|none|
|» » Type|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateWebACL|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

> 488 Response

```json
null
```

> 489 Response

```json
null
```

<h3 id="updatewebacl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateWebACLResponse](#schemaupdatewebaclresponse)|
|480|480|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|481|481|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|482|482|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|483|483|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|484|484|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|485|485|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|486|486|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|487|487|WAFReferencedItemException|[WAFReferencedItemException](#schemawafreferenceditemexception)|
|488|488|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|
|489|489|WAFSubscriptionNotFoundException|[WAFSubscriptionNotFoundException](#schemawafsubscriptionnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateXssMatchSet

<a id="opIdUpdateXssMatchSet"></a>

> Code samples

```bash
curl 'https://waf.us-east-1.amazonaws.com/#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSWAF_20150824.UpdateXssMatchSet' \
  -d '{
    "XssMatchSetId": {},
    "ChangeToken": {},
    "Updates": {}
  }'
```

`POST /#X-Amz-Target=AWSWAF_20150824.UpdateXssMatchSet`

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>. For each <code>XssMatchTuple</code> object, you specify the following values:</p> <ul> <li> <p> <code>Action</code>: Whether to insert the object into or delete the object from the array. To change an <code>XssMatchTuple</code>, you delete the existing object and add a new one.</p> </li> <li> <p> <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter, the name of the header or parameter.</p> </li> <li> <p> <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before inspecting the request for cross-site scripting attacks.</p> <p>You can only specify a single type of TextTransformation.</p> </li> </ul> <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests that you want to allow, block, or count. For example, if you're receiving requests that contain cross-site scripting attacks in the request body and you want to block the requests, you can create an <code>XssMatchSet</code> with the applicable settings, and then configure AWS WAF to block the requests. </p> <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p> <ol> <li> <p>Submit a <a>CreateXssMatchSet</a> request.</p> </li> <li> <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a> request.</p> </li> <li> <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks.</p> </li> </ol> <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>

> Body parameter

```json
{
  "XssMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

<h3 id="updatexssmatchset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[UpdateXssMatchSetRequest](#schemaupdatexssmatchsetrequest)|true|none|
|» XssMatchSetId|body|object|true|none|
|» ChangeToken|body|object|true|none|
|» Updates|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSWAF_20150824.UpdateXssMatchSet|

> Example responses

> 200 Response

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="updatexssmatchset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateXssMatchSetResponse](#schemaupdatexssmatchsetresponse)|
|480|480|WAFInternalErrorException|[WAFInternalErrorException](#schemawafinternalerrorexception)|
|481|481|WAFInvalidAccountException|[WAFInvalidAccountException](#schemawafinvalidaccountexception)|
|482|482|WAFInvalidOperationException|[WAFInvalidOperationException](#schemawafinvalidoperationexception)|
|483|483|WAFInvalidParameterException|[WAFInvalidParameterException](#schemawafinvalidparameterexception)|
|484|484|WAFNonexistentContainerException|[WAFNonexistentContainerException](#schemawafnonexistentcontainerexception)|
|485|485|WAFNonexistentItemException|[WAFNonexistentItemException](#schemawafnonexistentitemexception)|
|486|486|WAFStaleDataException|[WAFStaleDataException](#schemawafstaledataexception)|
|487|487|WAFLimitsExceededException|[WAFLimitsExceededException](#schemawaflimitsexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateByteMatchSetResponse">CreateByteMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebytematchsetresponse"></a>
<a id="schema_CreateByteMatchSetResponse"></a>
<a id="tocScreatebytematchsetresponse"></a>
<a id="tocscreatebytematchsetresponse"></a>

```json
{
  "ByteMatchSet": {
    "ByteMatchSetId": {},
    "Name": {},
    "ByteMatchTuples": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateByteMatchSetRequest">CreateByteMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebytematchsetrequest"></a>
<a id="schema_CreateByteMatchSetRequest"></a>
<a id="tocScreatebytematchsetrequest"></a>
<a id="tocscreatebytematchsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_WAFDisallowedNameException">WAFDisallowedNameException</h2>
<!-- backwards compatibility -->
<a id="schemawafdisallowednameexception"></a>
<a id="schema_WAFDisallowedNameException"></a>
<a id="tocSwafdisallowednameexception"></a>
<a id="tocswafdisallowednameexception"></a>

```json
null
```

<h2 id="tocS_WAFInternalErrorException">WAFInternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawafinternalerrorexception"></a>
<a id="schema_WAFInternalErrorException"></a>
<a id="tocSwafinternalerrorexception"></a>
<a id="tocswafinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_WAFInvalidAccountException">WAFInvalidAccountException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidaccountexception"></a>
<a id="schema_WAFInvalidAccountException"></a>
<a id="tocSwafinvalidaccountexception"></a>
<a id="tocswafinvalidaccountexception"></a>

```json
null
```

<h2 id="tocS_WAFInvalidParameterException">WAFInvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidparameterexception"></a>
<a id="schema_WAFInvalidParameterException"></a>
<a id="tocSwafinvalidparameterexception"></a>
<a id="tocswafinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_WAFStaleDataException">WAFStaleDataException</h2>
<!-- backwards compatibility -->
<a id="schemawafstaledataexception"></a>
<a id="schema_WAFStaleDataException"></a>
<a id="tocSwafstaledataexception"></a>
<a id="tocswafstaledataexception"></a>

```json
null
```

<h2 id="tocS_WAFLimitsExceededException">WAFLimitsExceededException</h2>
<!-- backwards compatibility -->
<a id="schemawaflimitsexceededexception"></a>
<a id="schema_WAFLimitsExceededException"></a>
<a id="tocSwaflimitsexceededexception"></a>
<a id="tocswaflimitsexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateGeoMatchSetResponse">CreateGeoMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategeomatchsetresponse"></a>
<a id="schema_CreateGeoMatchSetResponse"></a>
<a id="tocScreategeomatchsetresponse"></a>
<a id="tocscreategeomatchsetresponse"></a>

```json
{
  "GeoMatchSet": {
    "GeoMatchSetId": {},
    "Name": {},
    "GeoMatchConstraints": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateGeoMatchSetRequest">CreateGeoMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategeomatchsetrequest"></a>
<a id="schema_CreateGeoMatchSetRequest"></a>
<a id="tocScreategeomatchsetrequest"></a>
<a id="tocscreategeomatchsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateIPSetResponse">CreateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetresponse"></a>
<a id="schema_CreateIPSetResponse"></a>
<a id="tocScreateipsetresponse"></a>
<a id="tocscreateipsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "IPSet": {
    "IPSetDescriptors": [
      {
        "Type": "IPV4",
        "Value": "192.0.2.44/32"
      }
    ],
    "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "Name": "MyIPSetFriendlyName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateIPSetRequest">CreateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateipsetrequest"></a>
<a id="schema_CreateIPSetRequest"></a>
<a id="tocScreateipsetrequest"></a>
<a id="tocscreateipsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateRateBasedRuleResponse">CreateRateBasedRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateratebasedruleresponse"></a>
<a id="schema_CreateRateBasedRuleResponse"></a>
<a id="tocScreateratebasedruleresponse"></a>
<a id="tocscreateratebasedruleresponse"></a>

```json
{
  "Rule": {
    "RuleId": {},
    "Name": {},
    "MetricName": {},
    "MatchPredicates": {},
    "RateKey": {},
    "RateLimit": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateRateBasedRuleRequest">CreateRateBasedRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateratebasedrulerequest"></a>
<a id="schema_CreateRateBasedRuleRequest"></a>
<a id="tocScreateratebasedrulerequest"></a>
<a id="tocscreateratebasedrulerequest"></a>

```json
{
  "Name": {},
  "MetricName": {},
  "RateKey": {},
  "RateLimit": {},
  "ChangeToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MetricName|object|true|none|none|
|RateKey|object|true|none|none|
|RateLimit|object|true|none|none|
|ChangeToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_WAFTagOperationException">WAFTagOperationException</h2>
<!-- backwards compatibility -->
<a id="schemawaftagoperationexception"></a>
<a id="schema_WAFTagOperationException"></a>
<a id="tocSwaftagoperationexception"></a>
<a id="tocswaftagoperationexception"></a>

```json
null
```

<h2 id="tocS_WAFTagOperationInternalErrorException">WAFTagOperationInternalErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawaftagoperationinternalerrorexception"></a>
<a id="schema_WAFTagOperationInternalErrorException"></a>
<a id="tocSwaftagoperationinternalerrorexception"></a>
<a id="tocswaftagoperationinternalerrorexception"></a>

```json
null
```

<h2 id="tocS_WAFBadRequestException">WAFBadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemawafbadrequestexception"></a>
<a id="schema_WAFBadRequestException"></a>
<a id="tocSwafbadrequestexception"></a>
<a id="tocswafbadrequestexception"></a>

```json
null
```

<h2 id="tocS_CreateRegexMatchSetResponse">CreateRegexMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexmatchsetresponse"></a>
<a id="schema_CreateRegexMatchSetResponse"></a>
<a id="tocScreateregexmatchsetresponse"></a>
<a id="tocscreateregexmatchsetresponse"></a>

```json
{
  "RegexMatchSet": {
    "RegexMatchSetId": {},
    "Name": {},
    "RegexMatchTuples": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateRegexMatchSetRequest">CreateRegexMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexmatchsetrequest"></a>
<a id="schema_CreateRegexMatchSetRequest"></a>
<a id="tocScreateregexmatchsetrequest"></a>
<a id="tocscreateregexmatchsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateRegexPatternSetResponse">CreateRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexpatternsetresponse"></a>
<a id="schema_CreateRegexPatternSetResponse"></a>
<a id="tocScreateregexpatternsetresponse"></a>
<a id="tocscreateregexpatternsetresponse"></a>

```json
{
  "RegexPatternSet": {
    "RegexPatternSetId": {},
    "Name": {},
    "RegexPatternStrings": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateRegexPatternSetRequest">CreateRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateregexpatternsetrequest"></a>
<a id="schema_CreateRegexPatternSetRequest"></a>
<a id="tocScreateregexpatternsetrequest"></a>
<a id="tocscreateregexpatternsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateRuleResponse">CreateRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateruleresponse"></a>
<a id="schema_CreateRuleResponse"></a>
<a id="tocScreateruleresponse"></a>
<a id="tocscreateruleresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "Rule": {
    "MetricName": "WAFByteHeaderRule",
    "Name": "WAFByteHeaderRule",
    "Predicates": [
      {
        "DataId": "MyByteMatchSetID",
        "Negated": false,
        "Type": "ByteMatch"
      }
    ],
    "RuleId": "WAFRule-1-Example"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateRuleRequest">CreateRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulerequest"></a>
<a id="schema_CreateRuleRequest"></a>
<a id="tocScreaterulerequest"></a>
<a id="tocscreaterulerequest"></a>

```json
{
  "Name": {},
  "MetricName": {},
  "ChangeToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MetricName|object|true|none|none|
|ChangeToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateRuleGroupResponse">CreateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegroupresponse"></a>
<a id="schema_CreateRuleGroupResponse"></a>
<a id="tocScreaterulegroupresponse"></a>
<a id="tocscreaterulegroupresponse"></a>

```json
{
  "RuleGroup": {
    "RuleGroupId": {},
    "Name": {},
    "MetricName": {}
  },
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroup|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateRuleGroupRequest">CreateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterulegrouprequest"></a>
<a id="schema_CreateRuleGroupRequest"></a>
<a id="tocScreaterulegrouprequest"></a>
<a id="tocscreaterulegrouprequest"></a>

```json
{
  "Name": {},
  "MetricName": {},
  "ChangeToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MetricName|object|true|none|none|
|ChangeToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateSizeConstraintSetResponse">CreateSizeConstraintSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesizeconstraintsetresponse"></a>
<a id="schema_CreateSizeConstraintSetResponse"></a>
<a id="tocScreatesizeconstraintsetresponse"></a>
<a id="tocscreatesizeconstraintsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "SizeConstraintSet": {
    "Name": "MySampleSizeConstraintSet",
    "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SizeConstraints": [
      {
        "ComparisonOperator": "GT",
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "Size": 0,
        "TextTransformation": "NONE"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateSizeConstraintSetRequest">CreateSizeConstraintSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesizeconstraintsetrequest"></a>
<a id="schema_CreateSizeConstraintSetRequest"></a>
<a id="tocScreatesizeconstraintsetrequest"></a>
<a id="tocscreatesizeconstraintsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateSqlInjectionMatchSetResponse">CreateSqlInjectionMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatesqlinjectionmatchsetresponse"></a>
<a id="schema_CreateSqlInjectionMatchSetResponse"></a>
<a id="tocScreatesqlinjectionmatchsetresponse"></a>
<a id="tocscreatesqlinjectionmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "SqlInjectionMatchSet": {
    "Name": "MySQLInjectionMatchSet",
    "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SqlInjectionMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

The response to a <code>CreateSqlInjectionMatchSet</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateSqlInjectionMatchSetRequest">CreateSqlInjectionMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesqlinjectionmatchsetrequest"></a>
<a id="schema_CreateSqlInjectionMatchSetRequest"></a>
<a id="tocScreatesqlinjectionmatchsetrequest"></a>
<a id="tocscreatesqlinjectionmatchsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

A request to create a <a>SqlInjectionMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_CreateWebACLResponse">CreateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclresponse"></a>
<a id="schema_CreateWebACLResponse"></a>
<a id="tocScreatewebaclresponse"></a>
<a id="tocscreatewebaclresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "WebACL": {
    "DefaultAction": {
      "Type": "ALLOW"
    },
    "MetricName": "CreateExample",
    "Name": "CreateExample",
    "Rules": [
      {
        "Action": {
          "Type": "ALLOW"
        },
        "Priority": 1,
        "RuleId": "WAFRule-1-Example"
      }
    ],
    "WebACLId": "example-46da-4444-5555-example"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACL|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateWebACLRequest">CreateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclrequest"></a>
<a id="schema_CreateWebACLRequest"></a>
<a id="tocScreatewebaclrequest"></a>
<a id="tocscreatewebaclrequest"></a>

```json
{
  "Name": {},
  "MetricName": {},
  "DefaultAction": {
    "Type": {}
  },
  "ChangeToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|MetricName|object|true|none|none|
|DefaultAction|object|true|none|none|
|ChangeToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateWebACLMigrationStackResponse">CreateWebACLMigrationStackResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclmigrationstackresponse"></a>
<a id="schema_CreateWebACLMigrationStackResponse"></a>
<a id="tocScreatewebaclmigrationstackresponse"></a>
<a id="tocscreatewebaclmigrationstackresponse"></a>

```json
{
  "S3ObjectUrl": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3ObjectUrl|object|true|none|none|

<h2 id="tocS_CreateWebACLMigrationStackRequest">CreateWebACLMigrationStackRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebaclmigrationstackrequest"></a>
<a id="schema_CreateWebACLMigrationStackRequest"></a>
<a id="tocScreatewebaclmigrationstackrequest"></a>
<a id="tocscreatewebaclmigrationstackrequest"></a>

```json
{
  "WebACLId": {},
  "S3BucketName": {},
  "IgnoreUnsupportedType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|
|S3BucketName|object|true|none|none|
|IgnoreUnsupportedType|object|true|none|none|

<h2 id="tocS_WAFInvalidOperationException">WAFInvalidOperationException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidoperationexception"></a>
<a id="schema_WAFInvalidOperationException"></a>
<a id="tocSwafinvalidoperationexception"></a>
<a id="tocswafinvalidoperationexception"></a>

```json
null
```

<h2 id="tocS_WAFNonexistentItemException">WAFNonexistentItemException</h2>
<!-- backwards compatibility -->
<a id="schemawafnonexistentitemexception"></a>
<a id="schema_WAFNonexistentItemException"></a>
<a id="tocSwafnonexistentitemexception"></a>
<a id="tocswafnonexistentitemexception"></a>

```json
null
```

<h2 id="tocS_WAFEntityMigrationException">WAFEntityMigrationException</h2>
<!-- backwards compatibility -->
<a id="schemawafentitymigrationexception"></a>
<a id="schema_WAFEntityMigrationException"></a>
<a id="tocSwafentitymigrationexception"></a>
<a id="tocswafentitymigrationexception"></a>

```json
null
```

<h2 id="tocS_CreateXssMatchSetResponse">CreateXssMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatexssmatchsetresponse"></a>
<a id="schema_CreateXssMatchSetResponse"></a>
<a id="tocScreatexssmatchsetresponse"></a>
<a id="tocscreatexssmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
  "XssMatchSet": {
    "Name": "MySampleXssMatchSet",
    "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "XssMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

The response to a <code>CreateXssMatchSet</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSet|object|false|none|none|
|ChangeToken|object|false|none|none|

<h2 id="tocS_CreateXssMatchSetRequest">CreateXssMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatexssmatchsetrequest"></a>
<a id="schema_CreateXssMatchSetRequest"></a>
<a id="tocScreatexssmatchsetrequest"></a>
<a id="tocscreatexssmatchsetrequest"></a>

```json
{
  "Name": {},
  "ChangeToken": {}
}
```

A request to create an <a>XssMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteByteMatchSetResponse">DeleteByteMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletebytematchsetresponse"></a>
<a id="schema_DeleteByteMatchSetResponse"></a>
<a id="tocSdeletebytematchsetresponse"></a>
<a id="tocsdeletebytematchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteByteMatchSetRequest">DeleteByteMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebytematchsetrequest"></a>
<a id="schema_DeleteByteMatchSetRequest"></a>
<a id="tocSdeletebytematchsetrequest"></a>
<a id="tocsdeletebytematchsetrequest"></a>

```json
{
  "ByteMatchSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_WAFReferencedItemException">WAFReferencedItemException</h2>
<!-- backwards compatibility -->
<a id="schemawafreferenceditemexception"></a>
<a id="schema_WAFReferencedItemException"></a>
<a id="tocSwafreferenceditemexception"></a>
<a id="tocswafreferenceditemexception"></a>

```json
null
```

<h2 id="tocS_WAFNonEmptyEntityException">WAFNonEmptyEntityException</h2>
<!-- backwards compatibility -->
<a id="schemawafnonemptyentityexception"></a>
<a id="schema_WAFNonEmptyEntityException"></a>
<a id="tocSwafnonemptyentityexception"></a>
<a id="tocswafnonemptyentityexception"></a>

```json
null
```

<h2 id="tocS_DeleteGeoMatchSetResponse">DeleteGeoMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegeomatchsetresponse"></a>
<a id="schema_DeleteGeoMatchSetResponse"></a>
<a id="tocSdeletegeomatchsetresponse"></a>
<a id="tocsdeletegeomatchsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteGeoMatchSetRequest">DeleteGeoMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegeomatchsetrequest"></a>
<a id="schema_DeleteGeoMatchSetRequest"></a>
<a id="tocSdeletegeomatchsetrequest"></a>
<a id="tocsdeletegeomatchsetrequest"></a>

```json
{
  "GeoMatchSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteIPSetResponse">DeleteIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetresponse"></a>
<a id="schema_DeleteIPSetResponse"></a>
<a id="tocSdeleteipsetresponse"></a>
<a id="tocsdeleteipsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteIPSetRequest">DeleteIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteipsetrequest"></a>
<a id="schema_DeleteIPSetRequest"></a>
<a id="tocSdeleteipsetrequest"></a>
<a id="tocsdeleteipsetrequest"></a>

```json
{
  "IPSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteLoggingConfigurationResponse">DeleteLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggingconfigurationresponse"></a>
<a id="schema_DeleteLoggingConfigurationResponse"></a>
<a id="tocSdeleteloggingconfigurationresponse"></a>
<a id="tocsdeleteloggingconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLoggingConfigurationRequest">DeleteLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteloggingconfigurationrequest"></a>
<a id="schema_DeleteLoggingConfigurationRequest"></a>
<a id="tocSdeleteloggingconfigurationrequest"></a>
<a id="tocsdeleteloggingconfigurationrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DeletePermissionPolicyResponse">DeletePermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionpolicyresponse"></a>
<a id="schema_DeletePermissionPolicyResponse"></a>
<a id="tocSdeletepermissionpolicyresponse"></a>
<a id="tocsdeletepermissionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePermissionPolicyRequest">DeletePermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepermissionpolicyrequest"></a>
<a id="schema_DeletePermissionPolicyRequest"></a>
<a id="tocSdeletepermissionpolicyrequest"></a>
<a id="tocsdeletepermissionpolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_DeleteRateBasedRuleResponse">DeleteRateBasedRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteratebasedruleresponse"></a>
<a id="schema_DeleteRateBasedRuleResponse"></a>
<a id="tocSdeleteratebasedruleresponse"></a>
<a id="tocsdeleteratebasedruleresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteRateBasedRuleRequest">DeleteRateBasedRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteratebasedrulerequest"></a>
<a id="schema_DeleteRateBasedRuleRequest"></a>
<a id="tocSdeleteratebasedrulerequest"></a>
<a id="tocsdeleteratebasedrulerequest"></a>

```json
{
  "RuleId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteRegexMatchSetResponse">DeleteRegexMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexmatchsetresponse"></a>
<a id="schema_DeleteRegexMatchSetResponse"></a>
<a id="tocSdeleteregexmatchsetresponse"></a>
<a id="tocsdeleteregexmatchsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteRegexMatchSetRequest">DeleteRegexMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexmatchsetrequest"></a>
<a id="schema_DeleteRegexMatchSetRequest"></a>
<a id="tocSdeleteregexmatchsetrequest"></a>
<a id="tocsdeleteregexmatchsetrequest"></a>

```json
{
  "RegexMatchSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteRegexPatternSetResponse">DeleteRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexpatternsetresponse"></a>
<a id="schema_DeleteRegexPatternSetResponse"></a>
<a id="tocSdeleteregexpatternsetresponse"></a>
<a id="tocsdeleteregexpatternsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteRegexPatternSetRequest">DeleteRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregexpatternsetrequest"></a>
<a id="schema_DeleteRegexPatternSetRequest"></a>
<a id="tocSdeleteregexpatternsetrequest"></a>
<a id="tocsdeleteregexpatternsetrequest"></a>

```json
{
  "RegexPatternSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteRuleResponse">DeleteRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteruleresponse"></a>
<a id="schema_DeleteRuleResponse"></a>
<a id="tocSdeleteruleresponse"></a>
<a id="tocsdeleteruleresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteRuleRequest">DeleteRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulerequest"></a>
<a id="schema_DeleteRuleRequest"></a>
<a id="tocSdeleterulerequest"></a>
<a id="tocsdeleterulerequest"></a>

```json
{
  "RuleId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteRuleGroupResponse">DeleteRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegroupresponse"></a>
<a id="schema_DeleteRuleGroupResponse"></a>
<a id="tocSdeleterulegroupresponse"></a>
<a id="tocsdeleterulegroupresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteRuleGroupRequest">DeleteRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulegrouprequest"></a>
<a id="schema_DeleteRuleGroupRequest"></a>
<a id="tocSdeleterulegrouprequest"></a>
<a id="tocsdeleterulegrouprequest"></a>

```json
{
  "RuleGroupId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteSizeConstraintSetResponse">DeleteSizeConstraintSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesizeconstraintsetresponse"></a>
<a id="schema_DeleteSizeConstraintSetResponse"></a>
<a id="tocSdeletesizeconstraintsetresponse"></a>
<a id="tocsdeletesizeconstraintsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteSizeConstraintSetRequest">DeleteSizeConstraintSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesizeconstraintsetrequest"></a>
<a id="schema_DeleteSizeConstraintSetRequest"></a>
<a id="tocSdeletesizeconstraintsetrequest"></a>
<a id="tocsdeletesizeconstraintsetrequest"></a>

```json
{
  "SizeConstraintSetId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteSqlInjectionMatchSetResponse">DeleteSqlInjectionMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesqlinjectionmatchsetresponse"></a>
<a id="schema_DeleteSqlInjectionMatchSetResponse"></a>
<a id="tocSdeletesqlinjectionmatchsetresponse"></a>
<a id="tocsdeletesqlinjectionmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteSqlInjectionMatchSetRequest">DeleteSqlInjectionMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesqlinjectionmatchsetrequest"></a>
<a id="schema_DeleteSqlInjectionMatchSetRequest"></a>
<a id="tocSdeletesqlinjectionmatchsetrequest"></a>
<a id="tocsdeletesqlinjectionmatchsetrequest"></a>

```json
{
  "SqlInjectionMatchSetId": {},
  "ChangeToken": {}
}
```

A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteWebACLResponse">DeleteWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebaclresponse"></a>
<a id="schema_DeleteWebACLResponse"></a>
<a id="tocSdeletewebaclresponse"></a>
<a id="tocsdeletewebaclresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteWebACLRequest">DeleteWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletewebaclrequest"></a>
<a id="schema_DeleteWebACLRequest"></a>
<a id="tocSdeletewebaclrequest"></a>
<a id="tocsdeletewebaclrequest"></a>

```json
{
  "WebACLId": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_DeleteXssMatchSetResponse">DeleteXssMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletexssmatchsetresponse"></a>
<a id="schema_DeleteXssMatchSetResponse"></a>
<a id="tocSdeletexssmatchsetresponse"></a>
<a id="tocsdeletexssmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_DeleteXssMatchSetRequest">DeleteXssMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletexssmatchsetrequest"></a>
<a id="schema_DeleteXssMatchSetRequest"></a>
<a id="tocSdeletexssmatchsetrequest"></a>
<a id="tocsdeletexssmatchsetrequest"></a>

```json
{
  "XssMatchSetId": {},
  "ChangeToken": {}
}
```

A request to delete an <a>XssMatchSet</a> from AWS WAF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_GetByteMatchSetResponse">GetByteMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbytematchsetresponse"></a>
<a id="schema_GetByteMatchSetResponse"></a>
<a id="tocSgetbytematchsetresponse"></a>
<a id="tocsgetbytematchsetresponse"></a>

```json
{
  "ByteMatchSet": {
    "ByteMatchSetId": "exampleIDs3t-46da-4fdb-b8d5-abc321j569j5",
    "ByteMatchTuples": [
      {
        "FieldToMatch": {
          "Data": "referer",
          "Type": "HEADER"
        },
        "PositionalConstraint": "CONTAINS",
        "TargetString": "badrefer1",
        "TextTransformation": "NONE"
      }
    ],
    "Name": "ByteMatchNameExample"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSet|object|false|none|none|

<h2 id="tocS_GetByteMatchSetRequest">GetByteMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbytematchsetrequest"></a>
<a id="schema_GetByteMatchSetRequest"></a>
<a id="tocSgetbytematchsetrequest"></a>
<a id="tocsgetbytematchsetrequest"></a>

```json
{
  "ByteMatchSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSetId|object|true|none|none|

<h2 id="tocS_GetChangeTokenResponse">GetChangeTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchangetokenresponse"></a>
<a id="schema_GetChangeTokenResponse"></a>
<a id="tocSgetchangetokenresponse"></a>
<a id="tocsgetchangetokenresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_GetChangeTokenRequest">GetChangeTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchangetokenrequest"></a>
<a id="schema_GetChangeTokenRequest"></a>
<a id="tocSgetchangetokenrequest"></a>
<a id="tocsgetchangetokenrequest"></a>

```json
{}
```

<h2 id="tocS_GetChangeTokenStatusResponse">GetChangeTokenStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchangetokenstatusresponse"></a>
<a id="schema_GetChangeTokenStatusResponse"></a>
<a id="tocSgetchangetokenstatusresponse"></a>
<a id="tocsgetchangetokenstatusresponse"></a>

```json
{
  "ChangeTokenStatus": "PENDING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeTokenStatus|object|false|none|none|

<h2 id="tocS_GetChangeTokenStatusRequest">GetChangeTokenStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchangetokenstatusrequest"></a>
<a id="schema_GetChangeTokenStatusRequest"></a>
<a id="tocSgetchangetokenstatusrequest"></a>
<a id="tocsgetchangetokenstatusrequest"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|true|none|none|

<h2 id="tocS_GetGeoMatchSetResponse">GetGeoMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgeomatchsetresponse"></a>
<a id="schema_GetGeoMatchSetResponse"></a>
<a id="tocSgetgeomatchsetresponse"></a>
<a id="tocsgetgeomatchsetresponse"></a>

```json
{
  "GeoMatchSet": {
    "GeoMatchSetId": {},
    "Name": {},
    "GeoMatchConstraints": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSet|object|false|none|none|

<h2 id="tocS_GetGeoMatchSetRequest">GetGeoMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgeomatchsetrequest"></a>
<a id="schema_GetGeoMatchSetRequest"></a>
<a id="tocSgetgeomatchsetrequest"></a>
<a id="tocsgetgeomatchsetrequest"></a>

```json
{
  "GeoMatchSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSetId|object|true|none|none|

<h2 id="tocS_GetIPSetResponse">GetIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetresponse"></a>
<a id="schema_GetIPSetResponse"></a>
<a id="tocSgetipsetresponse"></a>
<a id="tocsgetipsetresponse"></a>

```json
{
  "IPSet": {
    "IPSetDescriptors": [
      {
        "Type": "IPV4",
        "Value": "192.0.2.44/32"
      }
    ],
    "IPSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "Name": "MyIPSetFriendlyName"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSet|object|false|none|none|

<h2 id="tocS_GetIPSetRequest">GetIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetipsetrequest"></a>
<a id="schema_GetIPSetRequest"></a>
<a id="tocSgetipsetrequest"></a>
<a id="tocsgetipsetrequest"></a>

```json
{
  "IPSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetId|object|true|none|none|

<h2 id="tocS_GetLoggingConfigurationResponse">GetLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetloggingconfigurationresponse"></a>
<a id="schema_GetLoggingConfigurationResponse"></a>
<a id="tocSgetloggingconfigurationresponse"></a>
<a id="tocsgetloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_GetLoggingConfigurationRequest">GetLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetloggingconfigurationrequest"></a>
<a id="schema_GetLoggingConfigurationRequest"></a>
<a id="tocSgetloggingconfigurationrequest"></a>
<a id="tocsgetloggingconfigurationrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetPermissionPolicyResponse">GetPermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionpolicyresponse"></a>
<a id="schema_GetPermissionPolicyResponse"></a>
<a id="tocSgetpermissionpolicyresponse"></a>
<a id="tocsgetpermissionpolicyresponse"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetPermissionPolicyRequest">GetPermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpermissionpolicyrequest"></a>
<a id="schema_GetPermissionPolicyRequest"></a>
<a id="tocSgetpermissionpolicyrequest"></a>
<a id="tocsgetpermissionpolicyrequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_GetRateBasedRuleResponse">GetRateBasedRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedruleresponse"></a>
<a id="schema_GetRateBasedRuleResponse"></a>
<a id="tocSgetratebasedruleresponse"></a>
<a id="tocsgetratebasedruleresponse"></a>

```json
{
  "Rule": {
    "RuleId": {},
    "Name": {},
    "MetricName": {},
    "MatchPredicates": {},
    "RateKey": {},
    "RateLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|false|none|none|

<h2 id="tocS_GetRateBasedRuleRequest">GetRateBasedRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedrulerequest"></a>
<a id="schema_GetRateBasedRuleRequest"></a>
<a id="tocSgetratebasedrulerequest"></a>
<a id="tocsgetratebasedrulerequest"></a>

```json
{
  "RuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|

<h2 id="tocS_GetRateBasedRuleManagedKeysResponse">GetRateBasedRuleManagedKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedrulemanagedkeysresponse"></a>
<a id="schema_GetRateBasedRuleManagedKeysResponse"></a>
<a id="tocSgetratebasedrulemanagedkeysresponse"></a>
<a id="tocsgetratebasedrulemanagedkeysresponse"></a>

```json
{
  "ManagedKeys": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManagedKeys|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_GetRateBasedRuleManagedKeysRequest">GetRateBasedRuleManagedKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetratebasedrulemanagedkeysrequest"></a>
<a id="schema_GetRateBasedRuleManagedKeysRequest"></a>
<a id="tocSgetratebasedrulemanagedkeysrequest"></a>
<a id="tocsgetratebasedrulemanagedkeysrequest"></a>

```json
{
  "RuleId": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_GetRegexMatchSetResponse">GetRegexMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregexmatchsetresponse"></a>
<a id="schema_GetRegexMatchSetResponse"></a>
<a id="tocSgetregexmatchsetresponse"></a>
<a id="tocsgetregexmatchsetresponse"></a>

```json
{
  "RegexMatchSet": {
    "RegexMatchSetId": {},
    "Name": {},
    "RegexMatchTuples": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSet|object|false|none|none|

<h2 id="tocS_GetRegexMatchSetRequest">GetRegexMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregexmatchsetrequest"></a>
<a id="schema_GetRegexMatchSetRequest"></a>
<a id="tocSgetregexmatchsetrequest"></a>
<a id="tocsgetregexmatchsetrequest"></a>

```json
{
  "RegexMatchSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSetId|object|true|none|none|

<h2 id="tocS_GetRegexPatternSetResponse">GetRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregexpatternsetresponse"></a>
<a id="schema_GetRegexPatternSetResponse"></a>
<a id="tocSgetregexpatternsetresponse"></a>
<a id="tocsgetregexpatternsetresponse"></a>

```json
{
  "RegexPatternSet": {
    "RegexPatternSetId": {},
    "Name": {},
    "RegexPatternStrings": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSet|object|false|none|none|

<h2 id="tocS_GetRegexPatternSetRequest">GetRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregexpatternsetrequest"></a>
<a id="schema_GetRegexPatternSetRequest"></a>
<a id="tocSgetregexpatternsetrequest"></a>
<a id="tocsgetregexpatternsetrequest"></a>

```json
{
  "RegexPatternSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSetId|object|true|none|none|

<h2 id="tocS_GetRuleResponse">GetRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetruleresponse"></a>
<a id="schema_GetRuleResponse"></a>
<a id="tocSgetruleresponse"></a>
<a id="tocsgetruleresponse"></a>

```json
{
  "Rule": {
    "MetricName": "WAFByteHeaderRule",
    "Name": "WAFByteHeaderRule",
    "Predicates": [
      {
        "DataId": "MyByteMatchSetID",
        "Negated": false,
        "Type": "ByteMatch"
      }
    ],
    "RuleId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rule|object|false|none|none|

<h2 id="tocS_GetRuleRequest">GetRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrulerequest"></a>
<a id="schema_GetRuleRequest"></a>
<a id="tocSgetrulerequest"></a>
<a id="tocsgetrulerequest"></a>

```json
{
  "RuleId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|

<h2 id="tocS_GetRuleGroupResponse">GetRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrulegroupresponse"></a>
<a id="schema_GetRuleGroupResponse"></a>
<a id="tocSgetrulegroupresponse"></a>
<a id="tocsgetrulegroupresponse"></a>

```json
{
  "RuleGroup": {
    "RuleGroupId": {},
    "Name": {},
    "MetricName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroup|object|false|none|none|

<h2 id="tocS_GetRuleGroupRequest">GetRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrulegrouprequest"></a>
<a id="schema_GetRuleGroupRequest"></a>
<a id="tocSgetrulegrouprequest"></a>
<a id="tocsgetrulegrouprequest"></a>

```json
{
  "RuleGroupId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|

<h2 id="tocS_GetSampledRequestsResponse">GetSampledRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledrequestsresponse"></a>
<a id="schema_GetSampledRequestsResponse"></a>
<a id="tocSgetsampledrequestsresponse"></a>
<a id="tocsgetsampledrequestsresponse"></a>

```json
{
  "PopulationSize": 50,
  "SampledRequests": [
    {
      "Action": "BLOCK",
      "Request": {
        "ClientIP": "192.0.2.44",
        "Country": "US",
        "HTTPVersion": "HTTP/1.1",
        "Headers": [
          {
            "Name": "User-Agent",
            "Value": "BadBot "
          }
        ],
        "Method": "HEAD"
      },
      "Timestamp": "2016-09-27T14:55Z",
      "Weight": 1
    }
  ],
  "TimeWindow": {
    "EndTime": "2016-09-27T15:50Z",
    "StartTime": "2016-09-27T14:50Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SampledRequests|object|false|none|none|
|PopulationSize|object|false|none|none|
|TimeWindow|object|false|none|none|

<h2 id="tocS_GetSampledRequestsRequest">GetSampledRequestsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledrequestsrequest"></a>
<a id="schema_GetSampledRequestsRequest"></a>
<a id="tocSgetsampledrequestsrequest"></a>
<a id="tocsgetsampledrequestsrequest"></a>

```json
{
  "WebAclId": {},
  "RuleId": {},
  "TimeWindow": {
    "StartTime": {},
    "EndTime": {}
  },
  "MaxItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebAclId|object|true|none|none|
|RuleId|object|true|none|none|
|TimeWindow|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_GetSizeConstraintSetResponse">GetSizeConstraintSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsizeconstraintsetresponse"></a>
<a id="schema_GetSizeConstraintSetResponse"></a>
<a id="tocSgetsizeconstraintsetresponse"></a>
<a id="tocsgetsizeconstraintsetresponse"></a>

```json
{
  "SizeConstraintSet": {
    "Name": "MySampleSizeConstraintSet",
    "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SizeConstraints": [
      {
        "ComparisonOperator": "GT",
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "Size": 0,
        "TextTransformation": "NONE"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSet|object|false|none|none|

<h2 id="tocS_GetSizeConstraintSetRequest">GetSizeConstraintSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsizeconstraintsetrequest"></a>
<a id="schema_GetSizeConstraintSetRequest"></a>
<a id="tocSgetsizeconstraintsetrequest"></a>
<a id="tocsgetsizeconstraintsetrequest"></a>

```json
{
  "SizeConstraintSetId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSetId|object|true|none|none|

<h2 id="tocS_GetSqlInjectionMatchSetResponse">GetSqlInjectionMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsqlinjectionmatchsetresponse"></a>
<a id="schema_GetSqlInjectionMatchSetResponse"></a>
<a id="tocSgetsqlinjectionmatchsetresponse"></a>
<a id="tocsgetsqlinjectionmatchsetresponse"></a>

```json
{
  "SqlInjectionMatchSet": {
    "Name": "MySQLInjectionMatchSet",
    "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "SqlInjectionMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

The response to a <a>GetSqlInjectionMatchSet</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSet|object|false|none|none|

<h2 id="tocS_GetSqlInjectionMatchSetRequest">GetSqlInjectionMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetsqlinjectionmatchsetrequest"></a>
<a id="schema_GetSqlInjectionMatchSetRequest"></a>
<a id="tocSgetsqlinjectionmatchsetrequest"></a>
<a id="tocsgetsqlinjectionmatchsetrequest"></a>

```json
{
  "SqlInjectionMatchSetId": {}
}
```

A request to get a <a>SqlInjectionMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSetId|object|true|none|none|

<h2 id="tocS_GetWebACLResponse">GetWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclresponse"></a>
<a id="schema_GetWebACLResponse"></a>
<a id="tocSgetwebaclresponse"></a>
<a id="tocsgetwebaclresponse"></a>

```json
{
  "WebACL": {
    "DefaultAction": {
      "Type": "ALLOW"
    },
    "MetricName": "CreateExample",
    "Name": "CreateExample",
    "Rules": [
      {
        "Action": {
          "Type": "ALLOW"
        },
        "Priority": 1,
        "RuleId": "WAFRule-1-Example"
      }
    ],
    "WebACLId": "createwebacl-1472061481310"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACL|object|false|none|none|

<h2 id="tocS_GetWebACLRequest">GetWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetwebaclrequest"></a>
<a id="schema_GetWebACLRequest"></a>
<a id="tocSgetwebaclrequest"></a>
<a id="tocsgetwebaclrequest"></a>

```json
{
  "WebACLId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|

<h2 id="tocS_GetXssMatchSetResponse">GetXssMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetxssmatchsetresponse"></a>
<a id="schema_GetXssMatchSetResponse"></a>
<a id="tocSgetxssmatchsetresponse"></a>
<a id="tocsgetxssmatchsetresponse"></a>

```json
{
  "XssMatchSet": {
    "Name": "MySampleXssMatchSet",
    "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5",
    "XssMatchTuples": [
      {
        "FieldToMatch": {
          "Type": "QUERY_STRING"
        },
        "TextTransformation": "URL_DECODE"
      }
    ]
  }
}
```

The response to a <a>GetXssMatchSet</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSet|object|false|none|none|

<h2 id="tocS_GetXssMatchSetRequest">GetXssMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetxssmatchsetrequest"></a>
<a id="schema_GetXssMatchSetRequest"></a>
<a id="tocSgetxssmatchsetrequest"></a>
<a id="tocsgetxssmatchsetrequest"></a>

```json
{
  "XssMatchSetId": {}
}
```

A request to get an <a>XssMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSetId|object|true|none|none|

<h2 id="tocS_ListActivatedRulesInRuleGroupResponse">ListActivatedRulesInRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactivatedrulesinrulegroupresponse"></a>
<a id="schema_ListActivatedRulesInRuleGroupResponse"></a>
<a id="tocSlistactivatedrulesinrulegroupresponse"></a>
<a id="tocslistactivatedrulesinrulegroupresponse"></a>

```json
{
  "NextMarker": {},
  "ActivatedRules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|ActivatedRules|object|false|none|none|

<h2 id="tocS_ListActivatedRulesInRuleGroupRequest">ListActivatedRulesInRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistactivatedrulesinrulegrouprequest"></a>
<a id="schema_ListActivatedRulesInRuleGroupRequest"></a>
<a id="tocSlistactivatedrulesinrulegrouprequest"></a>
<a id="tocslistactivatedrulesinrulegrouprequest"></a>

```json
{
  "RuleGroupId": {},
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|false|none|none|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListByteMatchSetsResponse">ListByteMatchSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbytematchsetsresponse"></a>
<a id="schema_ListByteMatchSetsResponse"></a>
<a id="tocSlistbytematchsetsresponse"></a>
<a id="tocslistbytematchsetsresponse"></a>

```json
{
  "NextMarker": {},
  "ByteMatchSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|ByteMatchSets|object|false|none|none|

<h2 id="tocS_ListByteMatchSetsRequest">ListByteMatchSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistbytematchsetsrequest"></a>
<a id="schema_ListByteMatchSetsRequest"></a>
<a id="tocSlistbytematchsetsrequest"></a>
<a id="tocslistbytematchsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListGeoMatchSetsResponse">ListGeoMatchSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgeomatchsetsresponse"></a>
<a id="schema_ListGeoMatchSetsResponse"></a>
<a id="tocSlistgeomatchsetsresponse"></a>
<a id="tocslistgeomatchsetsresponse"></a>

```json
{
  "NextMarker": {},
  "GeoMatchSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|GeoMatchSets|object|false|none|none|

<h2 id="tocS_ListGeoMatchSetsRequest">ListGeoMatchSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgeomatchsetsrequest"></a>
<a id="schema_ListGeoMatchSetsRequest"></a>
<a id="tocSlistgeomatchsetsrequest"></a>
<a id="tocslistgeomatchsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListIPSetsResponse">ListIPSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsresponse"></a>
<a id="schema_ListIPSetsResponse"></a>
<a id="tocSlistipsetsresponse"></a>
<a id="tocslistipsetsresponse"></a>

```json
{
  "IPSets": [
    {
      "IPSetId": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f",
      "Name": "MyIPSetFriendlyName"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|IPSets|object|false|none|none|

<h2 id="tocS_ListIPSetsRequest">ListIPSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistipsetsrequest"></a>
<a id="schema_ListIPSetsRequest"></a>
<a id="tocSlistipsetsrequest"></a>
<a id="tocslistipsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListLoggingConfigurationsResponse">ListLoggingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistloggingconfigurationsresponse"></a>
<a id="schema_ListLoggingConfigurationsResponse"></a>
<a id="tocSlistloggingconfigurationsresponse"></a>
<a id="tocslistloggingconfigurationsresponse"></a>

```json
{
  "LoggingConfigurations": {},
  "NextMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfigurations|object|false|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ListLoggingConfigurationsRequest">ListLoggingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistloggingconfigurationsrequest"></a>
<a id="schema_ListLoggingConfigurationsRequest"></a>
<a id="tocSlistloggingconfigurationsrequest"></a>
<a id="tocslistloggingconfigurationsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRateBasedRulesResponse">ListRateBasedRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistratebasedrulesresponse"></a>
<a id="schema_ListRateBasedRulesResponse"></a>
<a id="tocSlistratebasedrulesresponse"></a>
<a id="tocslistratebasedrulesresponse"></a>

```json
{
  "NextMarker": {},
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_ListRateBasedRulesRequest">ListRateBasedRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistratebasedrulesrequest"></a>
<a id="schema_ListRateBasedRulesRequest"></a>
<a id="tocSlistratebasedrulesrequest"></a>
<a id="tocslistratebasedrulesrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRegexMatchSetsResponse">ListRegexMatchSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregexmatchsetsresponse"></a>
<a id="schema_ListRegexMatchSetsResponse"></a>
<a id="tocSlistregexmatchsetsresponse"></a>
<a id="tocslistregexmatchsetsresponse"></a>

```json
{
  "NextMarker": {},
  "RegexMatchSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RegexMatchSets|object|false|none|none|

<h2 id="tocS_ListRegexMatchSetsRequest">ListRegexMatchSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistregexmatchsetsrequest"></a>
<a id="schema_ListRegexMatchSetsRequest"></a>
<a id="tocSlistregexmatchsetsrequest"></a>
<a id="tocslistregexmatchsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRegexPatternSetsResponse">ListRegexPatternSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistregexpatternsetsresponse"></a>
<a id="schema_ListRegexPatternSetsResponse"></a>
<a id="tocSlistregexpatternsetsresponse"></a>
<a id="tocslistregexpatternsetsresponse"></a>

```json
{
  "NextMarker": {},
  "RegexPatternSets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RegexPatternSets|object|false|none|none|

<h2 id="tocS_ListRegexPatternSetsRequest">ListRegexPatternSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistregexpatternsetsrequest"></a>
<a id="schema_ListRegexPatternSetsRequest"></a>
<a id="tocSlistregexpatternsetsrequest"></a>
<a id="tocslistregexpatternsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRuleGroupsResponse">ListRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsresponse"></a>
<a id="schema_ListRuleGroupsResponse"></a>
<a id="tocSlistrulegroupsresponse"></a>
<a id="tocslistrulegroupsresponse"></a>

```json
{
  "NextMarker": {},
  "RuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RuleGroups|object|false|none|none|

<h2 id="tocS_ListRuleGroupsRequest">ListRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulegroupsrequest"></a>
<a id="schema_ListRuleGroupsRequest"></a>
<a id="tocSlistrulegroupsrequest"></a>
<a id="tocslistrulegroupsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListRulesResponse">ListRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesresponse"></a>
<a id="schema_ListRulesResponse"></a>
<a id="tocSlistrulesresponse"></a>
<a id="tocslistrulesresponse"></a>

```json
{
  "Rules": [
    {
      "Name": "WAFByteHeaderRule",
      "RuleId": "WAFRule-1-Example"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Rules|object|false|none|none|

<h2 id="tocS_ListRulesRequest">ListRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrulesrequest"></a>
<a id="schema_ListRulesRequest"></a>
<a id="tocSlistrulesrequest"></a>
<a id="tocslistrulesrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListSizeConstraintSetsResponse">ListSizeConstraintSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsizeconstraintsetsresponse"></a>
<a id="schema_ListSizeConstraintSetsResponse"></a>
<a id="tocSlistsizeconstraintsetsresponse"></a>
<a id="tocslistsizeconstraintsetsresponse"></a>

```json
{
  "SizeConstraintSets": [
    {
      "Name": "MySampleSizeConstraintSet",
      "SizeConstraintSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|SizeConstraintSets|object|false|none|none|

<h2 id="tocS_ListSizeConstraintSetsRequest">ListSizeConstraintSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsizeconstraintsetsrequest"></a>
<a id="schema_ListSizeConstraintSetsRequest"></a>
<a id="tocSlistsizeconstraintsetsrequest"></a>
<a id="tocslistsizeconstraintsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListSqlInjectionMatchSetsResponse">ListSqlInjectionMatchSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsqlinjectionmatchsetsresponse"></a>
<a id="schema_ListSqlInjectionMatchSetsResponse"></a>
<a id="tocSlistsqlinjectionmatchsetsresponse"></a>
<a id="tocslistsqlinjectionmatchsetsresponse"></a>

```json
{
  "SqlInjectionMatchSets": [
    {
      "Name": "MySQLInjectionMatchSet",
      "SqlInjectionMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

The response to a <a>ListSqlInjectionMatchSets</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|SqlInjectionMatchSets|object|false|none|none|

<h2 id="tocS_ListSqlInjectionMatchSetsRequest">ListSqlInjectionMatchSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsqlinjectionmatchsetsrequest"></a>
<a id="schema_ListSqlInjectionMatchSetsRequest"></a>
<a id="tocSlistsqlinjectionmatchsetsrequest"></a>
<a id="tocslistsqlinjectionmatchsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListSubscribedRuleGroupsResponse">ListSubscribedRuleGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscribedrulegroupsresponse"></a>
<a id="schema_ListSubscribedRuleGroupsResponse"></a>
<a id="tocSlistsubscribedrulegroupsresponse"></a>
<a id="tocslistsubscribedrulegroupsresponse"></a>

```json
{
  "NextMarker": {},
  "RuleGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|RuleGroups|object|false|none|none|

<h2 id="tocS_ListSubscribedRuleGroupsRequest">ListSubscribedRuleGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsubscribedrulegroupsrequest"></a>
<a id="schema_ListSubscribedRuleGroupsRequest"></a>
<a id="tocSlistsubscribedrulegroupsrequest"></a>
<a id="tocslistsubscribedrulegroupsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "NextMarker": {},
  "TagInfoForResource": {
    "ResourceARN": {},
    "TagList": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|TagInfoForResource|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {},
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|
|ResourceARN|object|true|none|none|

<h2 id="tocS_ListWebACLsResponse">ListWebACLsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebaclsresponse"></a>
<a id="schema_ListWebACLsResponse"></a>
<a id="tocSlistwebaclsresponse"></a>
<a id="tocslistwebaclsresponse"></a>

```json
{
  "WebACLs": [
    {
      "Name": "WebACLexample",
      "WebACLId": "webacl-1472061481310"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|WebACLs|object|false|none|none|

<h2 id="tocS_ListWebACLsRequest">ListWebACLsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwebaclsrequest"></a>
<a id="schema_ListWebACLsRequest"></a>
<a id="tocSlistwebaclsrequest"></a>
<a id="tocslistwebaclsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_ListXssMatchSetsResponse">ListXssMatchSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistxssmatchsetsresponse"></a>
<a id="schema_ListXssMatchSetsResponse"></a>
<a id="tocSlistxssmatchsetsresponse"></a>
<a id="tocslistxssmatchsetsresponse"></a>

```json
{
  "XssMatchSets": [
    {
      "Name": "MySampleXssMatchSet",
      "XssMatchSetId": "example1ds3t-46da-4fdb-b8d5-abc321j569j5"
    }
  ]
}
```

The response to a <a>ListXssMatchSets</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|XssMatchSets|object|false|none|none|

<h2 id="tocS_ListXssMatchSetsRequest">ListXssMatchSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistxssmatchsetsrequest"></a>
<a id="schema_ListXssMatchSetsRequest"></a>
<a id="tocSlistxssmatchsetsrequest"></a>
<a id="tocslistxssmatchsetsrequest"></a>

```json
{
  "NextMarker": {},
  "Limit": {}
}
```

A request to list the <a>XssMatchSet</a> objects created by the current AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|Limit|object|false|none|none|

<h2 id="tocS_PutLoggingConfigurationResponse">PutLoggingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingconfigurationresponse"></a>
<a id="schema_PutLoggingConfigurationResponse"></a>
<a id="tocSputloggingconfigurationresponse"></a>
<a id="tocsputloggingconfigurationresponse"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|false|none|none|

<h2 id="tocS_PutLoggingConfigurationRequest">PutLoggingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputloggingconfigurationrequest"></a>
<a id="schema_PutLoggingConfigurationRequest"></a>
<a id="tocSputloggingconfigurationrequest"></a>
<a id="tocsputloggingconfigurationrequest"></a>

```json
{
  "LoggingConfiguration": {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LoggingConfiguration|object|true|none|none|

<h2 id="tocS_WAFServiceLinkedRoleErrorException">WAFServiceLinkedRoleErrorException</h2>
<!-- backwards compatibility -->
<a id="schemawafservicelinkedroleerrorexception"></a>
<a id="schema_WAFServiceLinkedRoleErrorException"></a>
<a id="tocSwafservicelinkedroleerrorexception"></a>
<a id="tocswafservicelinkedroleerrorexception"></a>

```json
null
```

<h2 id="tocS_PutPermissionPolicyResponse">PutPermissionPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionpolicyresponse"></a>
<a id="schema_PutPermissionPolicyResponse"></a>
<a id="tocSputpermissionpolicyresponse"></a>
<a id="tocsputpermissionpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_PutPermissionPolicyRequest">PutPermissionPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpermissionpolicyrequest"></a>
<a id="schema_PutPermissionPolicyRequest"></a>
<a id="tocSputpermissionpolicyrequest"></a>
<a id="tocsputpermissionpolicyrequest"></a>

```json
{
  "ResourceArn": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_WAFInvalidPermissionPolicyException">WAFInvalidPermissionPolicyException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidpermissionpolicyexception"></a>
<a id="schema_WAFInvalidPermissionPolicyException"></a>
<a id="tocSwafinvalidpermissionpolicyexception"></a>
<a id="tocswafinvalidpermissionpolicyexception"></a>

```json
null
```

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "ResourceARN": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateByteMatchSetResponse">UpdateByteMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebytematchsetresponse"></a>
<a id="schema_UpdateByteMatchSetResponse"></a>
<a id="tocSupdatebytematchsetresponse"></a>
<a id="tocsupdatebytematchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateByteMatchSetRequest">UpdateByteMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebytematchsetrequest"></a>
<a id="schema_UpdateByteMatchSetRequest"></a>
<a id="tocSupdatebytematchsetrequest"></a>
<a id="tocsupdatebytematchsetrequest"></a>

```json
{
  "ByteMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_WAFNonexistentContainerException">WAFNonexistentContainerException</h2>
<!-- backwards compatibility -->
<a id="schemawafnonexistentcontainerexception"></a>
<a id="schema_WAFNonexistentContainerException"></a>
<a id="tocSwafnonexistentcontainerexception"></a>
<a id="tocswafnonexistentcontainerexception"></a>

```json
null
```

<h2 id="tocS_UpdateGeoMatchSetResponse">UpdateGeoMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategeomatchsetresponse"></a>
<a id="schema_UpdateGeoMatchSetResponse"></a>
<a id="tocSupdategeomatchsetresponse"></a>
<a id="tocsupdategeomatchsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateGeoMatchSetRequest">UpdateGeoMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategeomatchsetrequest"></a>
<a id="schema_UpdateGeoMatchSetRequest"></a>
<a id="tocSupdategeomatchsetrequest"></a>
<a id="tocsupdategeomatchsetrequest"></a>

```json
{
  "GeoMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_UpdateIPSetResponse">UpdateIPSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetresponse"></a>
<a id="schema_UpdateIPSetResponse"></a>
<a id="tocSupdateipsetresponse"></a>
<a id="tocsupdateipsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateIPSetRequest">UpdateIPSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateipsetrequest"></a>
<a id="schema_UpdateIPSetRequest"></a>
<a id="tocSupdateipsetrequest"></a>
<a id="tocsupdateipsetrequest"></a>

```json
{
  "IPSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_UpdateRateBasedRuleResponse">UpdateRateBasedRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateratebasedruleresponse"></a>
<a id="schema_UpdateRateBasedRuleResponse"></a>
<a id="tocSupdateratebasedruleresponse"></a>
<a id="tocsupdateratebasedruleresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateRateBasedRuleRequest">UpdateRateBasedRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateratebasedrulerequest"></a>
<a id="schema_UpdateRateBasedRuleRequest"></a>
<a id="tocSupdateratebasedrulerequest"></a>
<a id="tocsupdateratebasedrulerequest"></a>

```json
{
  "RuleId": {},
  "ChangeToken": {},
  "Updates": {},
  "RateLimit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|
|RateLimit|object|true|none|none|

<h2 id="tocS_UpdateRegexMatchSetResponse">UpdateRegexMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexmatchsetresponse"></a>
<a id="schema_UpdateRegexMatchSetResponse"></a>
<a id="tocSupdateregexmatchsetresponse"></a>
<a id="tocsupdateregexmatchsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateRegexMatchSetRequest">UpdateRegexMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexmatchsetrequest"></a>
<a id="schema_UpdateRegexMatchSetRequest"></a>
<a id="tocSupdateregexmatchsetrequest"></a>
<a id="tocsupdateregexmatchsetrequest"></a>

```json
{
  "RegexMatchSetId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSetId|object|true|none|none|
|Updates|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_UpdateRegexPatternSetResponse">UpdateRegexPatternSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexpatternsetresponse"></a>
<a id="schema_UpdateRegexPatternSetResponse"></a>
<a id="tocSupdateregexpatternsetresponse"></a>
<a id="tocsupdateregexpatternsetresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateRegexPatternSetRequest">UpdateRegexPatternSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregexpatternsetrequest"></a>
<a id="schema_UpdateRegexPatternSetRequest"></a>
<a id="tocSupdateregexpatternsetrequest"></a>
<a id="tocsupdateregexpatternsetrequest"></a>

```json
{
  "RegexPatternSetId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSetId|object|true|none|none|
|Updates|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_WAFInvalidRegexPatternException">WAFInvalidRegexPatternException</h2>
<!-- backwards compatibility -->
<a id="schemawafinvalidregexpatternexception"></a>
<a id="schema_WAFInvalidRegexPatternException"></a>
<a id="tocSwafinvalidregexpatternexception"></a>
<a id="tocswafinvalidregexpatternexception"></a>

```json
null
```

<h2 id="tocS_UpdateRuleResponse">UpdateRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateruleresponse"></a>
<a id="schema_UpdateRuleResponse"></a>
<a id="tocSupdateruleresponse"></a>
<a id="tocsupdateruleresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateRuleRequest">UpdateRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulerequest"></a>
<a id="schema_UpdateRuleRequest"></a>
<a id="tocSupdaterulerequest"></a>
<a id="tocsupdaterulerequest"></a>

```json
{
  "RuleId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_UpdateRuleGroupResponse">UpdateRuleGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegroupresponse"></a>
<a id="schema_UpdateRuleGroupResponse"></a>
<a id="tocSupdaterulegroupresponse"></a>
<a id="tocsupdaterulegroupresponse"></a>

```json
{
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateRuleGroupRequest">UpdateRuleGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterulegrouprequest"></a>
<a id="schema_UpdateRuleGroupRequest"></a>
<a id="tocSupdaterulegrouprequest"></a>
<a id="tocsupdaterulegrouprequest"></a>

```json
{
  "RuleGroupId": {},
  "Updates": {},
  "ChangeToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|
|Updates|object|true|none|none|
|ChangeToken|object|true|none|none|

<h2 id="tocS_UpdateSizeConstraintSetResponse">UpdateSizeConstraintSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesizeconstraintsetresponse"></a>
<a id="schema_UpdateSizeConstraintSetResponse"></a>
<a id="tocSupdatesizeconstraintsetresponse"></a>
<a id="tocsupdatesizeconstraintsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateSizeConstraintSetRequest">UpdateSizeConstraintSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesizeconstraintsetrequest"></a>
<a id="schema_UpdateSizeConstraintSetRequest"></a>
<a id="tocSupdatesizeconstraintsetrequest"></a>
<a id="tocsupdatesizeconstraintsetrequest"></a>

```json
{
  "SizeConstraintSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_UpdateSqlInjectionMatchSetResponse">UpdateSqlInjectionMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesqlinjectionmatchsetresponse"></a>
<a id="schema_UpdateSqlInjectionMatchSetResponse"></a>
<a id="tocSupdatesqlinjectionmatchsetresponse"></a>
<a id="tocsupdatesqlinjectionmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

The response to an <a>UpdateSqlInjectionMatchSets</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateSqlInjectionMatchSetRequest">UpdateSqlInjectionMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesqlinjectionmatchsetrequest"></a>
<a id="schema_UpdateSqlInjectionMatchSetRequest"></a>
<a id="tocSupdatesqlinjectionmatchsetrequest"></a>
<a id="tocsupdatesqlinjectionmatchsetrequest"></a>

```json
{
  "SqlInjectionMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

A request to update a <a>SqlInjectionMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_UpdateWebACLResponse">UpdateWebACLResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebaclresponse"></a>
<a id="schema_UpdateWebACLResponse"></a>
<a id="tocSupdatewebaclresponse"></a>
<a id="tocsupdatewebaclresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateWebACLRequest">UpdateWebACLRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebaclrequest"></a>
<a id="schema_UpdateWebACLRequest"></a>
<a id="tocSupdatewebaclrequest"></a>
<a id="tocsupdatewebaclrequest"></a>

```json
{
  "WebACLId": {},
  "ChangeToken": {},
  "Updates": {},
  "DefaultAction": {
    "Type": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|false|none|none|
|DefaultAction|object|false|none|none|

<h2 id="tocS_WAFSubscriptionNotFoundException">WAFSubscriptionNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemawafsubscriptionnotfoundexception"></a>
<a id="schema_WAFSubscriptionNotFoundException"></a>
<a id="tocSwafsubscriptionnotfoundexception"></a>
<a id="tocswafsubscriptionnotfoundexception"></a>

```json
null
```

<h2 id="tocS_UpdateXssMatchSetResponse">UpdateXssMatchSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatexssmatchsetresponse"></a>
<a id="schema_UpdateXssMatchSetResponse"></a>
<a id="tocSupdatexssmatchsetresponse"></a>
<a id="tocsupdatexssmatchsetresponse"></a>

```json
{
  "ChangeToken": "abcd12f2-46da-4fdb-b8d5-fbd4c466928f"
}
```

The response to an <a>UpdateXssMatchSets</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeToken|object|false|none|none|

<h2 id="tocS_UpdateXssMatchSetRequest">UpdateXssMatchSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatexssmatchsetrequest"></a>
<a id="schema_UpdateXssMatchSetRequest"></a>
<a id="tocSupdatexssmatchsetrequest"></a>
<a id="tocsupdatexssmatchsetrequest"></a>

```json
{
  "XssMatchSetId": {},
  "ChangeToken": {},
  "Updates": {}
}
```

A request to update an <a>XssMatchSet</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSetId|object|true|none|none|
|ChangeToken|object|true|none|none|
|Updates|object|true|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"string"
```

<h2 id="tocS_RulePriority">RulePriority</h2>
<!-- backwards compatibility -->
<a id="schemarulepriority"></a>
<a id="schema_RulePriority"></a>
<a id="tocSrulepriority"></a>
<a id="tocsrulepriority"></a>

```json
0
```

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_WafAction">WafAction</h2>
<!-- backwards compatibility -->
<a id="schemawafaction"></a>
<a id="schema_WafAction"></a>
<a id="tocSwafaction"></a>
<a id="tocswafaction"></a>

```json
{
  "Type": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>For the action that is associated with a rule in a <code>WebACL</code>, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a <code>WebACL</code>, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a <code>WebACL</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|

<h2 id="tocS_WafOverrideAction">WafOverrideAction</h2>
<!-- backwards compatibility -->
<a id="schemawafoverrideaction"></a>
<a id="schema_WafOverrideAction"></a>
<a id="tocSwafoverrideaction"></a>
<a id="tocswafoverrideaction"></a>

```json
{
  "Type": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|

<h2 id="tocS_WafRuleType">WafRuleType</h2>
<!-- backwards compatibility -->
<a id="schemawafruletype"></a>
<a id="schema_WafRuleType"></a>
<a id="tocSwafruletype"></a>
<a id="tocswafruletype"></a>

```json
"REGULAR"
```

<h2 id="tocS_ExcludedRules">ExcludedRules</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedrules"></a>
<a id="schema_ExcludedRules"></a>
<a id="tocSexcludedrules"></a>
<a id="tocsexcludedrules"></a>

```json
[
  {
    "RuleId": {}
  }
]
```

<h2 id="tocS_ActivatedRule">ActivatedRule</h2>
<!-- backwards compatibility -->
<a id="schemaactivatedrule"></a>
<a id="schema_ActivatedRule"></a>
<a id="tocSactivatedrule"></a>
<a id="tocsactivatedrule"></a>

```json
{
  "Priority": {},
  "RuleId": {},
  "Action": {
    "Type": {}
  },
  "OverrideAction": {
    "Type": {}
  },
  "Type": {},
  "ExcludedRules": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Priority|object|true|none|none|
|RuleId|object|true|none|none|
|Action|object|false|none|none|
|OverrideAction|object|false|none|none|
|Type|object|false|none|none|
|ExcludedRules|object|false|none|none|

<h2 id="tocS_ActivatedRules">ActivatedRules</h2>
<!-- backwards compatibility -->
<a id="schemaactivatedrules"></a>
<a id="schema_ActivatedRules"></a>
<a id="tocSactivatedrules"></a>
<a id="tocsactivatedrules"></a>

```json
[
  {
    "Priority": {},
    "RuleId": {},
    "Action": {
      "Type": {}
    },
    "OverrideAction": {
      "Type": {}
    },
    "Type": {},
    "ExcludedRules": {}
  }
]
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_ByteMatchTuples">ByteMatchTuples</h2>
<!-- backwards compatibility -->
<a id="schemabytematchtuples"></a>
<a id="schema_ByteMatchTuples"></a>
<a id="tocSbytematchtuples"></a>
<a id="tocsbytematchtuples"></a>

```json
[
  {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TargetString": {},
    "TextTransformation": {},
    "PositionalConstraint": {}
  }
]
```

<h2 id="tocS_ByteMatchSet">ByteMatchSet</h2>
<!-- backwards compatibility -->
<a id="schemabytematchset"></a>
<a id="schema_ByteMatchSet"></a>
<a id="tocSbytematchset"></a>
<a id="tocsbytematchset"></a>

```json
{
  "ByteMatchSetId": {},
  "Name": {},
  "ByteMatchTuples": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSetId|object|true|none|none|
|Name|object|false|none|none|
|ByteMatchTuples|object|true|none|none|

<h2 id="tocS_ByteMatchSetSummary">ByteMatchSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemabytematchsetsummary"></a>
<a id="schema_ByteMatchSetSummary"></a>
<a id="tocSbytematchsetsummary"></a>
<a id="tocsbytematchsetsummary"></a>

```json
{
  "ByteMatchSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListByteMatchSets</a>. Each <code>ByteMatchSetSummary</code> object includes the <code>Name</code> and <code>ByteMatchSetId</code> for one <a>ByteMatchSet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ByteMatchSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_ByteMatchSetSummaries">ByteMatchSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemabytematchsetsummaries"></a>
<a id="schema_ByteMatchSetSummaries"></a>
<a id="tocSbytematchsetsummaries"></a>
<a id="tocsbytematchsetsummaries"></a>

```json
[
  {
    "ByteMatchSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ChangeAction">ChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemachangeaction"></a>
<a id="schema_ChangeAction"></a>
<a id="tocSchangeaction"></a>
<a id="tocschangeaction"></a>

```json
"INSERT"
```

<h2 id="tocS_ByteMatchTuple">ByteMatchTuple</h2>
<!-- backwards compatibility -->
<a id="schemabytematchtuple"></a>
<a id="schema_ByteMatchTuple"></a>
<a id="tocSbytematchtuple"></a>
<a id="tocsbytematchtuple"></a>

```json
{
  "FieldToMatch": {
    "Type": {},
    "Data": {}
  },
  "TargetString": {},
  "TextTransformation": {},
  "PositionalConstraint": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TargetString|object|true|none|none|
|TextTransformation|object|true|none|none|
|PositionalConstraint|object|true|none|none|

<h2 id="tocS_ByteMatchSetUpdate">ByteMatchSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabytematchsetupdate"></a>
<a id="schema_ByteMatchSetUpdate"></a>
<a id="tocSbytematchsetupdate"></a>
<a id="tocsbytematchsetupdate"></a>

```json
{
  "Action": {},
  "ByteMatchTuple": {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TargetString": {},
    "TextTransformation": {},
    "PositionalConstraint": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateByteMatchSet</a> request, <code>ByteMatchSetUpdate</code> specifies whether to insert or delete a <a>ByteMatchTuple</a> and includes the settings for the <code>ByteMatchTuple</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ByteMatchTuple|object|true|none|none|

<h2 id="tocS_ByteMatchSetUpdates">ByteMatchSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemabytematchsetupdates"></a>
<a id="schema_ByteMatchSetUpdates"></a>
<a id="tocSbytematchsetupdates"></a>
<a id="tocsbytematchsetupdates"></a>

```json
[
  {
    "Action": {},
    "ByteMatchTuple": {
      "FieldToMatch": {
        "Type": {},
        "Data": {}
      },
      "TargetString": {},
      "TextTransformation": {},
      "PositionalConstraint": {}
    }
  }
]
```

<h2 id="tocS_ByteMatchTargetString">ByteMatchTargetString</h2>
<!-- backwards compatibility -->
<a id="schemabytematchtargetstring"></a>
<a id="schema_ByteMatchTargetString"></a>
<a id="tocSbytematchtargetstring"></a>
<a id="tocsbytematchtargetstring"></a>

```json
"string"
```

<h2 id="tocS_FieldToMatch">FieldToMatch</h2>
<!-- backwards compatibility -->
<a id="schemafieldtomatch"></a>
<a id="schema_FieldToMatch"></a>
<a id="tocSfieldtomatch"></a>
<a id="tocsfieldtomatch"></a>

```json
{
  "Type": {},
  "Data": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies where in a web request to look for <code>TargetString</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Data|object|false|none|none|

<h2 id="tocS_TextTransformation">TextTransformation</h2>
<!-- backwards compatibility -->
<a id="schematexttransformation"></a>
<a id="schema_TextTransformation"></a>
<a id="tocStexttransformation"></a>
<a id="tocstexttransformation"></a>

```json
"NONE"
```

<h2 id="tocS_PositionalConstraint">PositionalConstraint</h2>
<!-- backwards compatibility -->
<a id="schemapositionalconstraint"></a>
<a id="schema_PositionalConstraint"></a>
<a id="tocSpositionalconstraint"></a>
<a id="tocspositionalconstraint"></a>

```json
"EXACTLY"
```

<h2 id="tocS_ChangeToken">ChangeToken</h2>
<!-- backwards compatibility -->
<a id="schemachangetoken"></a>
<a id="schema_ChangeToken"></a>
<a id="tocSchangetoken"></a>
<a id="tocschangetoken"></a>

```json
"string"
```

<h2 id="tocS_ChangeTokenStatus">ChangeTokenStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangetokenstatus"></a>
<a id="schema_ChangeTokenStatus"></a>
<a id="tocSchangetokenstatus"></a>
<a id="tocschangetokenstatus"></a>

```json
"PROVISIONED"
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"EQ"
```

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"string"
```

<h2 id="tocS_GeoMatchSet">GeoMatchSet</h2>
<!-- backwards compatibility -->
<a id="schemageomatchset"></a>
<a id="schema_GeoMatchSet"></a>
<a id="tocSgeomatchset"></a>
<a id="tocsgeomatchset"></a>

```json
{
  "GeoMatchSetId": {},
  "Name": {},
  "GeoMatchConstraints": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSetId|object|true|none|none|
|Name|object|false|none|none|
|GeoMatchConstraints|object|true|none|none|

<h2 id="tocS_IPSet">IPSet</h2>
<!-- backwards compatibility -->
<a id="schemaipset"></a>
<a id="schema_IPSet"></a>
<a id="tocSipset"></a>
<a id="tocsipset"></a>

```json
{
  "IPSetId": {},
  "Name": {},
  "IPSetDescriptors": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.</p> <p>To specify an individual IP address, you specify the four-part IP address followed by a <code>/32</code>, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetId|object|true|none|none|
|Name|object|false|none|none|
|IPSetDescriptors|object|true|none|none|

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_RateKey">RateKey</h2>
<!-- backwards compatibility -->
<a id="schemaratekey"></a>
<a id="schema_RateKey"></a>
<a id="tocSratekey"></a>
<a id="tocsratekey"></a>

```json
"IP"
```

<h2 id="tocS_RateLimit">RateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaratelimit"></a>
<a id="schema_RateLimit"></a>
<a id="tocSratelimit"></a>
<a id="tocsratelimit"></a>

```json
100
```

<h2 id="tocS_TagList">TagList</h2>
<!-- backwards compatibility -->
<a id="schemataglist"></a>
<a id="schema_TagList"></a>
<a id="tocStaglist"></a>
<a id="tocstaglist"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_RateBasedRule">RateBasedRule</h2>
<!-- backwards compatibility -->
<a id="schemaratebasedrule"></a>
<a id="schema_RateBasedRule"></a>
<a id="tocSratebasedrule"></a>
<a id="tocsratebasedrule"></a>

```json
{
  "RuleId": {},
  "Name": {},
  "MetricName": {},
  "MatchPredicates": {},
  "RateKey": {},
  "RateLimit": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A <code>RateBasedRule</code> is identical to a regular <a>Rule</a>, with one addition: a <code>RateBasedRule</code> counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a <code>RateBasedRule</code> that includes the following conditions: </p> <ul> <li> <p>The requests come from 192.0.2.44.</p> </li> <li> <p>They contain the value <code>BadBot</code> in the <code>User-Agent</code> header.</p> </li> </ul> <p>In the rule, you also define the rate limit as 1,000.</p> <p>Requests that meet both of these conditions and exceed 1,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|Name|object|false|none|none|
|MetricName|object|false|none|none|
|MatchPredicates|object|true|none|none|
|RateKey|object|true|none|none|
|RateLimit|object|true|none|none|

<h2 id="tocS_RegexMatchSet">RegexMatchSet</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchset"></a>
<a id="schema_RegexMatchSet"></a>
<a id="tocSregexmatchset"></a>
<a id="tocsregexmatchset"></a>

```json
{
  "RegexMatchSetId": {},
  "Name": {},
  "RegexMatchTuples": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetRegexMatchSet</a> request, <code>RegexMatchSet</code> is a complex type that contains the <code>RegexMatchSetId</code> and <code>Name</code> of a <code>RegexMatchSet</code>, and the values that you specified when you updated the <code>RegexMatchSet</code>.</p> <p> The values are contained in a <code>RegexMatchTuple</code> object, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>RegexMatchSet</code> contains more than one <code>RegexMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSetId|object|false|none|none|
|Name|object|false|none|none|
|RegexMatchTuples|object|false|none|none|

<h2 id="tocS_RegexPatternSet">RegexPatternSet</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternset"></a>
<a id="schema_RegexPatternSet"></a>
<a id="tocSregexpatternset"></a>
<a id="tocsregexpatternset"></a>

```json
{
  "RegexPatternSetId": {},
  "Name": {},
  "RegexPatternStrings": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>RegexPatternSet</code> specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSetId|object|true|none|none|
|Name|object|false|none|none|
|RegexPatternStrings|object|true|none|none|

<h2 id="tocS_RuleGroup">RuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemarulegroup"></a>
<a id="schema_RuleGroup"></a>
<a id="tocSrulegroup"></a>
<a id="tocsrulegroup"></a>

```json
{
  "RuleGroupId": {},
  "Name": {},
  "MetricName": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A collection of predefined rules that you can add to a web ACL.</p> <p>Rule groups are subject to the following limits:</p> <ul> <li> <p>Three rule groups per account. You can request an increase to this limit by contacting customer support.</p> </li> <li> <p>One rule group per web ACL.</p> </li> <li> <p>Ten rules per rule group.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|
|Name|object|false|none|none|
|MetricName|object|false|none|none|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "RuleId": {},
  "Name": {},
  "MetricName": {},
  "Predicates": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A combination of <a>ByteMatchSet</a>, <a>IPSet</a>, and/or <a>SqlInjectionMatchSet</a> objects that identify the web requests that you want to allow, block, or count. For example, you might create a <code>Rule</code> that includes the following predicates:</p> <ul> <li> <p>An <code>IPSet</code> that causes AWS WAF to search for web requests that originate from the IP address <code>192.0.2.44</code> </p> </li> <li> <p>A <code>ByteMatchSet</code> that causes AWS WAF to search for web requests for which the value of the <code>User-Agent</code> header is <code>BadBot</code>.</p> </li> </ul> <p>To match the settings in this <code>Rule</code>, a request must originate from <code>192.0.2.44</code> AND include a <code>User-Agent</code> header for which the value is <code>BadBot</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|Name|object|false|none|none|
|MetricName|object|false|none|none|
|Predicates|object|true|none|none|

<h2 id="tocS_SizeConstraintSet">SizeConstraintSet</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintset"></a>
<a id="schema_SizeConstraintSet"></a>
<a id="tocSsizeconstraintset"></a>
<a id="tocssizeconstraintset"></a>

```json
{
  "SizeConstraintSetId": {},
  "Name": {},
  "SizeConstraints": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SizeConstraint</code> objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a <code>SizeConstraintSet</code> contains more than one <code>SizeConstraint</code> object, a request only needs to match one constraint to be considered a match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSetId|object|true|none|none|
|Name|object|false|none|none|
|SizeConstraints|object|true|none|none|

<h2 id="tocS_SqlInjectionMatchSet">SqlInjectionMatchSet</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchset"></a>
<a id="schema_SqlInjectionMatchSet"></a>
<a id="tocSsqlinjectionmatchset"></a>
<a id="tocssqlinjectionmatchset"></a>

```json
{
  "SqlInjectionMatchSetId": {},
  "Name": {},
  "SqlInjectionMatchTuples": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>SqlInjectionMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. If a <code>SqlInjectionMatchSet</code> contains more than one <code>SqlInjectionMatchTuple</code> object, a request needs to include snippets of SQL code in only one of the specified parts of the request to be considered a match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSetId|object|true|none|none|
|Name|object|false|none|none|
|SqlInjectionMatchTuples|object|true|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_IgnoreUnsupportedType">IgnoreUnsupportedType</h2>
<!-- backwards compatibility -->
<a id="schemaignoreunsupportedtype"></a>
<a id="schema_IgnoreUnsupportedType"></a>
<a id="tocSignoreunsupportedtype"></a>
<a id="tocsignoreunsupportedtype"></a>

```json
true
```

<h2 id="tocS_S3ObjectUrl">S3ObjectUrl</h2>
<!-- backwards compatibility -->
<a id="schemas3objecturl"></a>
<a id="schema_S3ObjectUrl"></a>
<a id="tocSs3objecturl"></a>
<a id="tocss3objecturl"></a>

```json
"string"
```

<h2 id="tocS_WebACL">WebACL</h2>
<!-- backwards compatibility -->
<a id="schemawebacl"></a>
<a id="schema_WebACL"></a>
<a id="tocSwebacl"></a>
<a id="tocswebacl"></a>

```json
{
  "WebACLId": {},
  "Name": {},
  "MetricName": {},
  "DefaultAction": {
    "Type": {}
  },
  "Rules": {},
  "WebACLArn": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the <code>Rules</code> that identify the requests that you want to allow, block, or count. In a <code>WebACL</code>, you also specify a default action (<code>ALLOW</code> or <code>BLOCK</code>), and the action for each <code>Rule</code> that you add to a <code>WebACL</code>, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the <code>WebACL</code> with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one <code>Rule</code> to a <code>WebACL</code>, a request needs to match only one of the specifications to be allowed, blocked, or counted. For more information, see <a>UpdateWebACL</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|
|Name|object|false|none|none|
|MetricName|object|false|none|none|
|DefaultAction|object|true|none|none|
|Rules|object|true|none|none|
|WebACLArn|object|false|none|none|

<h2 id="tocS_XssMatchSet">XssMatchSet</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchset"></a>
<a id="schema_XssMatchSet"></a>
<a id="tocSxssmatchset"></a>
<a id="tocsxssmatchset"></a>

```json
{
  "XssMatchSetId": {},
  "Name": {},
  "XssMatchTuples": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A complex type that contains <code>XssMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header. If a <code>XssMatchSet</code> contains more than one <code>XssMatchTuple</code> object, a request needs to include cross-site scripting attacks in only one of the specified parts of the request to be considered a match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSetId|object|true|none|none|
|Name|object|false|none|none|
|XssMatchTuples|object|true|none|none|

<h2 id="tocS_ResourceArn">ResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceArn"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ExcludedRule">ExcludedRule</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedrule"></a>
<a id="schema_ExcludedRule"></a>
<a id="tocSexcludedrule"></a>
<a id="tocsexcludedrule"></a>

```json
{
  "RuleId": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The rule to exclude from a rule group. This is applicable only when the <code>ActivatedRule</code> refers to a <code>RuleGroup</code>. The rule must belong to the <code>RuleGroup</code> that is specified by the <code>ActivatedRule</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|

<h2 id="tocS_MatchFieldType">MatchFieldType</h2>
<!-- backwards compatibility -->
<a id="schemamatchfieldtype"></a>
<a id="schema_MatchFieldType"></a>
<a id="tocSmatchfieldtype"></a>
<a id="tocsmatchfieldtype"></a>

```json
"URI"
```

<h2 id="tocS_MatchFieldData">MatchFieldData</h2>
<!-- backwards compatibility -->
<a id="schemamatchfielddata"></a>
<a id="schema_MatchFieldData"></a>
<a id="tocSmatchfielddata"></a>
<a id="tocsmatchfielddata"></a>

```json
"string"
```

<h2 id="tocS_GeoMatchConstraintType">GeoMatchConstraintType</h2>
<!-- backwards compatibility -->
<a id="schemageomatchconstrainttype"></a>
<a id="schema_GeoMatchConstraintType"></a>
<a id="tocSgeomatchconstrainttype"></a>
<a id="tocsgeomatchconstrainttype"></a>

```json
"Country"
```

<h2 id="tocS_GeoMatchConstraintValue">GeoMatchConstraintValue</h2>
<!-- backwards compatibility -->
<a id="schemageomatchconstraintvalue"></a>
<a id="schema_GeoMatchConstraintValue"></a>
<a id="tocSgeomatchconstraintvalue"></a>
<a id="tocsgeomatchconstraintvalue"></a>

```json
"AF"
```

<h2 id="tocS_GeoMatchConstraint">GeoMatchConstraint</h2>
<!-- backwards compatibility -->
<a id="schemageomatchconstraint"></a>
<a id="schema_GeoMatchConstraint"></a>
<a id="tocSgeomatchconstraint"></a>
<a id="tocsgeomatchconstraint"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The country from which web requests originate that you want AWS WAF to search for.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_GeoMatchConstraints">GeoMatchConstraints</h2>
<!-- backwards compatibility -->
<a id="schemageomatchconstraints"></a>
<a id="schema_GeoMatchConstraints"></a>
<a id="tocSgeomatchconstraints"></a>
<a id="tocsgeomatchconstraints"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_GeoMatchSetSummary">GeoMatchSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemageomatchsetsummary"></a>
<a id="schema_GeoMatchSetSummary"></a>
<a id="tocSgeomatchsetsummary"></a>
<a id="tocsgeomatchsetsummary"></a>

```json
{
  "GeoMatchSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>GeoMatchSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoMatchSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_GeoMatchSetSummaries">GeoMatchSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemageomatchsetsummaries"></a>
<a id="schema_GeoMatchSetSummaries"></a>
<a id="tocSgeomatchsetsummaries"></a>
<a id="tocsgeomatchsetsummaries"></a>

```json
[
  {
    "GeoMatchSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_GeoMatchSetUpdate">GeoMatchSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemageomatchsetupdate"></a>
<a id="schema_GeoMatchSetUpdate"></a>
<a id="tocSgeomatchsetupdate"></a>
<a id="tocsgeomatchsetupdate"></a>

```json
{
  "Action": {},
  "GeoMatchConstraint": {
    "Type": {},
    "Value": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>GeoMatchSet</a> with <a>UpdateGeoMatchSet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|GeoMatchConstraint|object|true|none|none|

<h2 id="tocS_GeoMatchSetUpdates">GeoMatchSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemageomatchsetupdates"></a>
<a id="schema_GeoMatchSetUpdates"></a>
<a id="tocSgeomatchsetupdates"></a>
<a id="tocsgeomatchsetupdates"></a>

```json
[
  {
    "Action": {},
    "GeoMatchConstraint": {
      "Type": {},
      "Value": {}
    }
  }
]
```

<h2 id="tocS_LoggingConfiguration">LoggingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfiguration"></a>
<a id="schema_LoggingConfiguration"></a>
<a id="tocSloggingconfiguration"></a>
<a id="tocsloggingconfiguration"></a>

```json
{
  "ResourceArn": {},
  "LogDestinationConfigs": {},
  "RedactedFields": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|LogDestinationConfigs|object|true|none|none|
|RedactedFields|object|false|none|none|

<h2 id="tocS_PolicyString">PolicyString</h2>
<!-- backwards compatibility -->
<a id="schemapolicystring"></a>
<a id="schema_PolicyString"></a>
<a id="tocSpolicystring"></a>
<a id="tocspolicystring"></a>

```json
"string"
```

<h2 id="tocS_NextMarker">NextMarker</h2>
<!-- backwards compatibility -->
<a id="schemanextmarker"></a>
<a id="schema_NextMarker"></a>
<a id="tocSnextmarker"></a>
<a id="tocsnextmarker"></a>

```json
"string"
```

<h2 id="tocS_ManagedKeys">ManagedKeys</h2>
<!-- backwards compatibility -->
<a id="schemamanagedkeys"></a>
<a id="schema_ManagedKeys"></a>
<a id="tocSmanagedkeys"></a>
<a id="tocsmanagedkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetSampledRequestsMaxItems">GetSampledRequestsMaxItems</h2>
<!-- backwards compatibility -->
<a id="schemagetsampledrequestsmaxitems"></a>
<a id="schema_GetSampledRequestsMaxItems"></a>
<a id="tocSgetsampledrequestsmaxitems"></a>
<a id="tocsgetsampledrequestsmaxitems"></a>

```json
1
```

<h2 id="tocS_TimeWindow">TimeWindow</h2>
<!-- backwards compatibility -->
<a id="schematimewindow"></a>
<a id="schema_TimeWindow"></a>
<a id="tocStimewindow"></a>
<a id="tocstimewindow"></a>

```json
{
  "StartTime": {},
  "EndTime": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. </p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|true|none|none|
|EndTime|object|true|none|none|

<h2 id="tocS_SampledHTTPRequests">SampledHTTPRequests</h2>
<!-- backwards compatibility -->
<a id="schemasampledhttprequests"></a>
<a id="schema_SampledHTTPRequests"></a>
<a id="tocSsampledhttprequests"></a>
<a id="tocssampledhttprequests"></a>

```json
[
  {
    "Request": {
      "ClientIP": {},
      "Country": {},
      "URI": {},
      "Method": {},
      "HTTPVersion": {},
      "Headers": {}
    },
    "Weight": {},
    "Timestamp": {},
    "Action": {},
    "RuleWithinRuleGroup": {}
  }
]
```

<h2 id="tocS_PopulationSize">PopulationSize</h2>
<!-- backwards compatibility -->
<a id="schemapopulationsize"></a>
<a id="schema_PopulationSize"></a>
<a id="tocSpopulationsize"></a>
<a id="tocspopulationsize"></a>

```json
0
```

<h2 id="tocS_HeaderName">HeaderName</h2>
<!-- backwards compatibility -->
<a id="schemaheadername"></a>
<a id="schema_HeaderName"></a>
<a id="tocSheadername"></a>
<a id="tocsheadername"></a>

```json
"string"
```

<h2 id="tocS_HeaderValue">HeaderValue</h2>
<!-- backwards compatibility -->
<a id="schemaheadervalue"></a>
<a id="schema_HeaderValue"></a>
<a id="tocSheadervalue"></a>
<a id="tocsheadervalue"></a>

```json
"string"
```

<h2 id="tocS_HTTPHeader">HTTPHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpheader"></a>
<a id="schema_HTTPHeader"></a>
<a id="tocShttpheader"></a>
<a id="tocshttpheader"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPHeader</code> complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests that were returned by <code>GetSampledRequests</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_HTTPHeaders">HTTPHeaders</h2>
<!-- backwards compatibility -->
<a id="schemahttpheaders"></a>
<a id="schema_HTTPHeaders"></a>
<a id="tocShttpheaders"></a>
<a id="tocshttpheaders"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_HTTPMethod">HTTPMethod</h2>
<!-- backwards compatibility -->
<a id="schemahttpmethod"></a>
<a id="schema_HTTPMethod"></a>
<a id="tocShttpmethod"></a>
<a id="tocshttpmethod"></a>

```json
"string"
```

<h2 id="tocS_IPString">IPString</h2>
<!-- backwards compatibility -->
<a id="schemaipstring"></a>
<a id="schema_IPString"></a>
<a id="tocSipstring"></a>
<a id="tocsipstring"></a>

```json
"string"
```

<h2 id="tocS_URIString">URIString</h2>
<!-- backwards compatibility -->
<a id="schemauristring"></a>
<a id="schema_URIString"></a>
<a id="tocSuristring"></a>
<a id="tocsuristring"></a>

```json
"string"
```

<h2 id="tocS_HTTPVersion">HTTPVersion</h2>
<!-- backwards compatibility -->
<a id="schemahttpversion"></a>
<a id="schema_HTTPVersion"></a>
<a id="tocShttpversion"></a>
<a id="tocshttpversion"></a>

```json
"string"
```

<h2 id="tocS_HTTPRequest">HTTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemahttprequest"></a>
<a id="schema_HTTPRequest"></a>
<a id="tocShttprequest"></a>
<a id="tocshttprequest"></a>

```json
{
  "ClientIP": {},
  "Country": {},
  "URI": {},
  "Method": {},
  "HTTPVersion": {},
  "Headers": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientIP|object|false|none|none|
|Country|object|false|none|none|
|URI|object|false|none|none|
|Method|object|false|none|none|
|HTTPVersion|object|false|none|none|
|Headers|object|false|none|none|

<h2 id="tocS_IPSetDescriptors">IPSetDescriptors</h2>
<!-- backwards compatibility -->
<a id="schemaipsetdescriptors"></a>
<a id="schema_IPSetDescriptors"></a>
<a id="tocSipsetdescriptors"></a>
<a id="tocsipsetdescriptors"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_IPSetDescriptorType">IPSetDescriptorType</h2>
<!-- backwards compatibility -->
<a id="schemaipsetdescriptortype"></a>
<a id="schema_IPSetDescriptorType"></a>
<a id="tocSipsetdescriptortype"></a>
<a id="tocsipsetdescriptortype"></a>

```json
"IPV4"
```

<h2 id="tocS_IPSetDescriptorValue">IPSetDescriptorValue</h2>
<!-- backwards compatibility -->
<a id="schemaipsetdescriptorvalue"></a>
<a id="schema_IPSetDescriptorValue"></a>
<a id="tocSipsetdescriptorvalue"></a>
<a id="tocsipsetdescriptorvalue"></a>

```json
"string"
```

<h2 id="tocS_IPSetDescriptor">IPSetDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemaipsetdescriptor"></a>
<a id="schema_IPSetDescriptor"></a>
<a id="tocSipsetdescriptor"></a>
<a id="tocsipsetdescriptor"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_IPSetSummary">IPSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaipsetsummary"></a>
<a id="schema_IPSetSummary"></a>
<a id="tocSipsetsummary"></a>
<a id="tocsipsetsummary"></a>

```json
{
  "IPSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name of the <code>IPSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_IPSetSummaries">IPSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaipsetsummaries"></a>
<a id="schema_IPSetSummaries"></a>
<a id="tocSipsetsummaries"></a>
<a id="tocsipsetsummaries"></a>

```json
[
  {
    "IPSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_IPSetUpdate">IPSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaipsetupdate"></a>
<a id="schema_IPSetUpdate"></a>
<a id="tocSipsetupdate"></a>
<a id="tocsipsetupdate"></a>

```json
{
  "Action": {},
  "IPSetDescriptor": {
    "Type": {},
    "Value": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|IPSetDescriptor|object|true|none|none|

<h2 id="tocS_IPSetUpdates">IPSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaipsetupdates"></a>
<a id="schema_IPSetUpdates"></a>
<a id="tocSipsetupdates"></a>
<a id="tocsipsetupdates"></a>

```json
[
  {
    "Action": {},
    "IPSetDescriptor": {
      "Type": {},
      "Value": {}
    }
  }
]
```

<h2 id="tocS_PaginationLimit">PaginationLimit</h2>
<!-- backwards compatibility -->
<a id="schemapaginationlimit"></a>
<a id="schema_PaginationLimit"></a>
<a id="tocSpaginationlimit"></a>
<a id="tocspaginationlimit"></a>

```json
0
```

<h2 id="tocS_LoggingConfigurations">LoggingConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfigurations"></a>
<a id="schema_LoggingConfigurations"></a>
<a id="tocSloggingconfigurations"></a>
<a id="tocsloggingconfigurations"></a>

```json
[
  {
    "ResourceArn": {},
    "LogDestinationConfigs": {},
    "RedactedFields": {}
  }
]
```

<h2 id="tocS_RuleSummaries">RuleSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarulesummaries"></a>
<a id="schema_RuleSummaries"></a>
<a id="tocSrulesummaries"></a>
<a id="tocsrulesummaries"></a>

```json
[
  {
    "RuleId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_RegexMatchSetSummaries">RegexMatchSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchsetsummaries"></a>
<a id="schema_RegexMatchSetSummaries"></a>
<a id="tocSregexmatchsetsummaries"></a>
<a id="tocsregexmatchsetsummaries"></a>

```json
[
  {
    "RegexMatchSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_RegexPatternSetSummaries">RegexPatternSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetsummaries"></a>
<a id="schema_RegexPatternSetSummaries"></a>
<a id="tocSregexpatternsetsummaries"></a>
<a id="tocsregexpatternsetsummaries"></a>

```json
[
  {
    "RegexPatternSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_RuleGroupSummaries">RuleGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsummaries"></a>
<a id="schema_RuleGroupSummaries"></a>
<a id="tocSrulegroupsummaries"></a>
<a id="tocsrulegroupsummaries"></a>

```json
[
  {
    "RuleGroupId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_SizeConstraintSetSummaries">SizeConstraintSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintsetsummaries"></a>
<a id="schema_SizeConstraintSetSummaries"></a>
<a id="tocSsizeconstraintsetsummaries"></a>
<a id="tocssizeconstraintsetsummaries"></a>

```json
[
  {
    "SizeConstraintSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_SqlInjectionMatchSetSummaries">SqlInjectionMatchSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchsetsummaries"></a>
<a id="schema_SqlInjectionMatchSetSummaries"></a>
<a id="tocSsqlinjectionmatchsetsummaries"></a>
<a id="tocssqlinjectionmatchsetsummaries"></a>

```json
[
  {
    "SqlInjectionMatchSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_SubscribedRuleGroupSummaries">SubscribedRuleGroupSummaries</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedrulegroupsummaries"></a>
<a id="schema_SubscribedRuleGroupSummaries"></a>
<a id="tocSsubscribedrulegroupsummaries"></a>
<a id="tocssubscribedrulegroupsummaries"></a>

```json
[
  {
    "RuleGroupId": {},
    "Name": {},
    "MetricName": {}
  }
]
```

<h2 id="tocS_TagInfoForResource">TagInfoForResource</h2>
<!-- backwards compatibility -->
<a id="schemataginfoforresource"></a>
<a id="schema_TagInfoForResource"></a>
<a id="tocStaginfoforresource"></a>
<a id="tocstaginfoforresource"></a>

```json
{
  "ResourceARN": {},
  "TagList": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Information for a tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|false|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_WebACLSummaries">WebACLSummaries</h2>
<!-- backwards compatibility -->
<a id="schemawebaclsummaries"></a>
<a id="schema_WebACLSummaries"></a>
<a id="tocSwebaclsummaries"></a>
<a id="tocswebaclsummaries"></a>

```json
[
  {
    "WebACLId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_XssMatchSetSummaries">XssMatchSetSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchsetsummaries"></a>
<a id="schema_XssMatchSetSummaries"></a>
<a id="tocSxssmatchsetsummaries"></a>
<a id="tocsxssmatchsetsummaries"></a>

```json
[
  {
    "XssMatchSetId": {},
    "Name": {}
  }
]
```

<h2 id="tocS_LogDestinationConfigs">LogDestinationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemalogdestinationconfigs"></a>
<a id="schema_LogDestinationConfigs"></a>
<a id="tocSlogdestinationconfigs"></a>
<a id="tocslogdestinationconfigs"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RedactedFields">RedactedFields</h2>
<!-- backwards compatibility -->
<a id="schemaredactedfields"></a>
<a id="schema_RedactedFields"></a>
<a id="tocSredactedfields"></a>
<a id="tocsredactedfields"></a>

```json
[
  {
    "Type": {},
    "Data": {}
  }
]
```

<h2 id="tocS_ManagedKey">ManagedKey</h2>
<!-- backwards compatibility -->
<a id="schemamanagedkey"></a>
<a id="schema_ManagedKey"></a>
<a id="tocSmanagedkey"></a>
<a id="tocsmanagedkey"></a>

```json
"string"
```

<h2 id="tocS_Negated">Negated</h2>
<!-- backwards compatibility -->
<a id="schemanegated"></a>
<a id="schema_Negated"></a>
<a id="tocSnegated"></a>
<a id="tocsnegated"></a>

```json
true
```

<h2 id="tocS_PredicateType">PredicateType</h2>
<!-- backwards compatibility -->
<a id="schemapredicatetype"></a>
<a id="schema_PredicateType"></a>
<a id="tocSpredicatetype"></a>
<a id="tocspredicatetype"></a>

```json
"IPMatch"
```

<h2 id="tocS_Predicate">Predicate</h2>
<!-- backwards compatibility -->
<a id="schemapredicate"></a>
<a id="schema_Predicate"></a>
<a id="tocSpredicate"></a>
<a id="tocspredicate"></a>

```json
{
  "Negated": {},
  "Type": {},
  "DataId": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the <a>ByteMatchSet</a>, <a>IPSet</a>, <a>SqlInjectionMatchSet</a>, <a>XssMatchSet</a>, <a>RegexMatchSet</a>, <a>GeoMatchSet</a>, and <a>SizeConstraintSet</a> objects that you want to add to a <code>Rule</code> and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Negated|object|true|none|none|
|Type|object|true|none|none|
|DataId|object|true|none|none|

<h2 id="tocS_Predicates">Predicates</h2>
<!-- backwards compatibility -->
<a id="schemapredicates"></a>
<a id="schema_Predicates"></a>
<a id="tocSpredicates"></a>
<a id="tocspredicates"></a>

```json
[
  {
    "Negated": {},
    "Type": {},
    "DataId": {}
  }
]
```

<h2 id="tocS_RegexMatchTuples">RegexMatchTuples</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchtuples"></a>
<a id="schema_RegexMatchTuples"></a>
<a id="tocSregexmatchtuples"></a>
<a id="tocsregexmatchtuples"></a>

```json
[
  {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {},
    "RegexPatternSetId": {}
  }
]
```

<h2 id="tocS_RegexMatchSetSummary">RegexMatchSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchsetsummary"></a>
<a id="schema_RegexMatchSetSummary"></a>
<a id="tocSregexmatchsetsummary"></a>
<a id="tocsregexmatchsetsummary"></a>

```json
{
  "RegexMatchSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexMatchSets</a>. Each <code>RegexMatchSetSummary</code> object includes the <code>Name</code> and <code>RegexMatchSetId</code> for one <a>RegexMatchSet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexMatchSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_RegexMatchTuple">RegexMatchTuple</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchtuple"></a>
<a id="schema_RegexMatchTuple"></a>
<a id="tocSregexmatchtuple"></a>
<a id="tocsregexmatchtuple"></a>

```json
{
  "FieldToMatch": {
    "Type": {},
    "Data": {}
  },
  "TextTransformation": {},
  "RegexPatternSetId": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The regular expression pattern that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings. Each <code>RegexMatchTuple</code> object contains: </p> <ul> <li> <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p> </li> <li> <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p> </li> <li> <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformation|object|true|none|none|
|RegexPatternSetId|object|true|none|none|

<h2 id="tocS_RegexMatchSetUpdate">RegexMatchSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchsetupdate"></a>
<a id="schema_RegexMatchSetUpdate"></a>
<a id="tocSregexmatchsetupdate"></a>
<a id="tocsregexmatchsetupdate"></a>

```json
{
  "Action": {},
  "RegexMatchTuple": {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {},
    "RegexPatternSetId": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexMatchSet</a> request, <code>RegexMatchSetUpdate</code> specifies whether to insert or delete a <a>RegexMatchTuple</a> and includes the settings for the <code>RegexMatchTuple</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|RegexMatchTuple|object|true|none|none|

<h2 id="tocS_RegexMatchSetUpdates">RegexMatchSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatchsetupdates"></a>
<a id="schema_RegexMatchSetUpdates"></a>
<a id="tocSregexmatchsetupdates"></a>
<a id="tocsregexmatchsetupdates"></a>

```json
[
  {
    "Action": {},
    "RegexMatchTuple": {
      "FieldToMatch": {
        "Type": {},
        "Data": {}
      },
      "TextTransformation": {},
      "RegexPatternSetId": {}
    }
  }
]
```

<h2 id="tocS_RegexPatternStrings">RegexPatternStrings</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternstrings"></a>
<a id="schema_RegexPatternStrings"></a>
<a id="tocSregexpatternstrings"></a>
<a id="tocsregexpatternstrings"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RegexPatternSetSummary">RegexPatternSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetsummary"></a>
<a id="schema_RegexPatternSetSummary"></a>
<a id="tocSregexpatternsetsummary"></a>
<a id="tocsregexpatternsetsummary"></a>

```json
{
  "RegexPatternSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Returned by <a>ListRegexPatternSets</a>. Each <code>RegexPatternSetSummary</code> object includes the <code>Name</code> and <code>RegexPatternSetId</code> for one <a>RegexPatternSet</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegexPatternSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_RegexPatternString">RegexPatternString</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternstring"></a>
<a id="schema_RegexPatternString"></a>
<a id="tocSregexpatternstring"></a>
<a id="tocsregexpatternstring"></a>

```json
"string"
```

<h2 id="tocS_RegexPatternSetUpdate">RegexPatternSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetupdate"></a>
<a id="schema_RegexPatternSetUpdate"></a>
<a id="tocSregexpatternsetupdate"></a>
<a id="tocsregexpatternsetupdate"></a>

```json
{
  "Action": {},
  "RegexPatternString": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In an <a>UpdateRegexPatternSet</a> request, <code>RegexPatternSetUpdate</code> specifies whether to insert or delete a <code>RegexPatternString</code> and includes the settings for the <code>RegexPatternString</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|RegexPatternString|object|true|none|none|

<h2 id="tocS_RegexPatternSetUpdates">RegexPatternSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaregexpatternsetupdates"></a>
<a id="schema_RegexPatternSetUpdates"></a>
<a id="tocSregexpatternsetupdates"></a>
<a id="tocsregexpatternsetupdates"></a>

```json
[
  {
    "Action": {},
    "RegexPatternString": {}
  }
]
```

<h2 id="tocS_RuleGroupSummary">RuleGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupsummary"></a>
<a id="schema_RuleGroupSummary"></a>
<a id="tocSrulegroupsummary"></a>
<a id="tocsrulegroupsummary"></a>

```json
{
  "RuleGroupId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>RuleGroup</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_RuleGroupUpdate">RuleGroupUpdate</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupupdate"></a>
<a id="schema_RuleGroupUpdate"></a>
<a id="tocSrulegroupupdate"></a>
<a id="tocsrulegroupupdate"></a>

```json
{
  "Action": {},
  "ActivatedRule": {
    "Priority": {},
    "RuleId": {},
    "Action": {
      "Type": {}
    },
    "OverrideAction": {
      "Type": {}
    },
    "Type": {},
    "ExcludedRules": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies an <code>ActivatedRule</code> and indicates whether you want to add it to a <code>RuleGroup</code> or delete it from a <code>RuleGroup</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ActivatedRule|object|true|none|none|

<h2 id="tocS_RuleGroupUpdates">RuleGroupUpdates</h2>
<!-- backwards compatibility -->
<a id="schemarulegroupupdates"></a>
<a id="schema_RuleGroupUpdates"></a>
<a id="tocSrulegroupupdates"></a>
<a id="tocsrulegroupupdates"></a>

```json
[
  {
    "Action": {},
    "ActivatedRule": {
      "Priority": {},
      "RuleId": {},
      "Action": {
        "Type": {}
      },
      "OverrideAction": {
        "Type": {}
      },
      "Type": {},
      "ExcludedRules": {}
    }
  }
]
```

<h2 id="tocS_RuleSummary">RuleSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulesummary"></a>
<a id="schema_RuleSummary"></a>
<a id="tocSrulesummary"></a>
<a id="tocsrulesummary"></a>

```json
{
  "RuleId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the friendly name or description of the <code>Rule</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_RuleUpdate">RuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaruleupdate"></a>
<a id="schema_RuleUpdate"></a>
<a id="tocSruleupdate"></a>
<a id="tocsruleupdate"></a>

```json
{
  "Action": {},
  "Predicate": {
    "Negated": {},
    "Type": {},
    "DataId": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|Predicate|object|true|none|none|

<h2 id="tocS_RuleUpdates">RuleUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaruleupdates"></a>
<a id="schema_RuleUpdates"></a>
<a id="tocSruleupdates"></a>
<a id="tocsruleupdates"></a>

```json
[
  {
    "Action": {},
    "Predicate": {
      "Negated": {},
      "Type": {},
      "DataId": {}
    }
  }
]
```

<h2 id="tocS_SampleWeight">SampleWeight</h2>
<!-- backwards compatibility -->
<a id="schemasampleweight"></a>
<a id="schema_SampleWeight"></a>
<a id="tocSsampleweight"></a>
<a id="tocssampleweight"></a>

```json
0
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SampledHTTPRequest">SampledHTTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemasampledhttprequest"></a>
<a id="schema_SampledHTTPRequest"></a>
<a id="tocSsampledhttprequest"></a>
<a id="tocssampledhttprequest"></a>

```json
{
  "Request": {
    "ClientIP": {},
    "Country": {},
    "URI": {},
    "Method": {},
    "HTTPVersion": {},
    "Headers": {}
  },
  "Weight": {},
  "Timestamp": {},
  "Action": {},
  "RuleWithinRuleGroup": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Request|object|true|none|none|
|Weight|object|true|none|none|
|Timestamp|object|false|none|none|
|Action|object|false|none|none|
|RuleWithinRuleGroup|object|false|none|none|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
0
```

<h2 id="tocS_SizeConstraint">SizeConstraint</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraint"></a>
<a id="schema_SizeConstraint"></a>
<a id="tocSsizeconstraint"></a>
<a id="tocssizeconstraint"></a>

```json
{
  "FieldToMatch": {
    "Type": {},
    "Data": {}
  },
  "TextTransformation": {},
  "ComparisonOperator": {},
  "Size": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a constraint on the size of a part of the web request. AWS WAF uses the <code>Size</code>, <code>ComparisonOperator</code>, and <code>FieldToMatch</code> to build an expression in the form of "<code>Size</code> <code>ComparisonOperator</code> size in bytes of <code>FieldToMatch</code>". If that expression is true, the <code>SizeConstraint</code> is considered to match.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformation|object|true|none|none|
|ComparisonOperator|object|true|none|none|
|Size|object|true|none|none|

<h2 id="tocS_SizeConstraints">SizeConstraints</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraints"></a>
<a id="schema_SizeConstraints"></a>
<a id="tocSsizeconstraints"></a>
<a id="tocssizeconstraints"></a>

```json
[
  {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {},
    "ComparisonOperator": {},
    "Size": {}
  }
]
```

<h2 id="tocS_SizeConstraintSetSummary">SizeConstraintSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintsetsummary"></a>
<a id="schema_SizeConstraintSetSummary"></a>
<a id="tocSsizeconstraintsetsummary"></a>
<a id="tocssizeconstraintsetsummary"></a>

```json
{
  "SizeConstraintSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SizeConstraintSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SizeConstraintSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_SizeConstraintSetUpdate">SizeConstraintSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintsetupdate"></a>
<a id="schema_SizeConstraintSetUpdate"></a>
<a id="tocSsizeconstraintsetupdate"></a>
<a id="tocssizeconstraintsetupdate"></a>

```json
{
  "Action": {},
  "SizeConstraint": {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {},
    "ComparisonOperator": {},
    "Size": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect the size of and indicates whether you want to add the specification to a <a>SizeConstraintSet</a> or delete it from a <code>SizeConstraintSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|SizeConstraint|object|true|none|none|

<h2 id="tocS_SizeConstraintSetUpdates">SizeConstraintSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemasizeconstraintsetupdates"></a>
<a id="schema_SizeConstraintSetUpdates"></a>
<a id="tocSsizeconstraintsetupdates"></a>
<a id="tocssizeconstraintsetupdates"></a>

```json
[
  {
    "Action": {},
    "SizeConstraint": {
      "FieldToMatch": {
        "Type": {},
        "Data": {}
      },
      "TextTransformation": {},
      "ComparisonOperator": {},
      "Size": {}
    }
  }
]
```

<h2 id="tocS_SqlInjectionMatchTuples">SqlInjectionMatchTuples</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchtuples"></a>
<a id="schema_SqlInjectionMatchTuples"></a>
<a id="tocSsqlinjectionmatchtuples"></a>
<a id="tocssqlinjectionmatchtuples"></a>

```json
[
  {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {}
  }
]
```

<h2 id="tocS_SqlInjectionMatchSetSummary">SqlInjectionMatchSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchsetsummary"></a>
<a id="schema_SqlInjectionMatchSetSummary"></a>
<a id="tocSsqlinjectionmatchsetsummary"></a>
<a id="tocssqlinjectionmatchsetsummary"></a>

```json
{
  "SqlInjectionMatchSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of a <code>SqlInjectionMatchSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SqlInjectionMatchSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_SqlInjectionMatchTuple">SqlInjectionMatchTuple</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchtuple"></a>
<a id="schema_SqlInjectionMatchTuple"></a>
<a id="tocSsqlinjectionmatchtuple"></a>
<a id="tocssqlinjectionmatchtuple"></a>

```json
{
  "FieldToMatch": {
    "Type": {},
    "Data": {}
  },
  "TextTransformation": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for snippets of malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformation|object|true|none|none|

<h2 id="tocS_SqlInjectionMatchSetUpdate">SqlInjectionMatchSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchsetupdate"></a>
<a id="schema_SqlInjectionMatchSetUpdate"></a>
<a id="tocSsqlinjectionmatchsetupdate"></a>
<a id="tocssqlinjectionmatchsetupdate"></a>

```json
{
  "Action": {},
  "SqlInjectionMatchTuple": {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for snippets of malicious SQL code and indicates whether you want to add the specification to a <a>SqlInjectionMatchSet</a> or delete it from a <code>SqlInjectionMatchSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|SqlInjectionMatchTuple|object|true|none|none|

<h2 id="tocS_SqlInjectionMatchSetUpdates">SqlInjectionMatchSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemasqlinjectionmatchsetupdates"></a>
<a id="schema_SqlInjectionMatchSetUpdates"></a>
<a id="tocSsqlinjectionmatchsetupdates"></a>
<a id="tocssqlinjectionmatchsetupdates"></a>

```json
[
  {
    "Action": {},
    "SqlInjectionMatchTuple": {
      "FieldToMatch": {
        "Type": {},
        "Data": {}
      },
      "TextTransformation": {}
    }
  }
]
```

<h2 id="tocS_SubscribedRuleGroupSummary">SubscribedRuleGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemasubscribedrulegroupsummary"></a>
<a id="schema_SubscribedRuleGroupSummary"></a>
<a id="tocSsubscribedrulegroupsummary"></a>
<a id="tocssubscribedrulegroupsummary"></a>

```json
{
  "RuleGroupId": {},
  "Name": {},
  "MetricName": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A summary of the rule groups you are subscribed to.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuleGroupId|object|true|none|none|
|Name|object|true|none|none|
|MetricName|object|true|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p> <p>Tagging is only available through the API, SDKs, and CLI. You can't manage or view tags through the AWS WAF Classic console. You can tag the AWS resources that you manage through AWS WAF Classic: web ACLs, rule groups, and rules. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WebACLUpdates">WebACLUpdates</h2>
<!-- backwards compatibility -->
<a id="schemawebaclupdates"></a>
<a id="schema_WebACLUpdates"></a>
<a id="tocSwebaclupdates"></a>
<a id="tocswebaclupdates"></a>

```json
[
  {
    "Action": {},
    "ActivatedRule": {
      "Priority": {},
      "RuleId": {},
      "Action": {
        "Type": {}
      },
      "OverrideAction": {
        "Type": {}
      },
      "Type": {},
      "ExcludedRules": {}
    }
  }
]
```

<h2 id="tocS_XssMatchSetUpdates">XssMatchSetUpdates</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchsetupdates"></a>
<a id="schema_XssMatchSetUpdates"></a>
<a id="tocSxssmatchsetupdates"></a>
<a id="tocsxssmatchsetupdates"></a>

```json
[
  {
    "Action": {},
    "XssMatchTuple": {
      "FieldToMatch": {
        "Type": {},
        "Data": {}
      },
      "TextTransformation": {}
    }
  }
]
```

<h2 id="tocS_WafActionType">WafActionType</h2>
<!-- backwards compatibility -->
<a id="schemawafactiontype"></a>
<a id="schema_WafActionType"></a>
<a id="tocSwafactiontype"></a>
<a id="tocswafactiontype"></a>

```json
"BLOCK"
```

<h2 id="tocS_WafOverrideActionType">WafOverrideActionType</h2>
<!-- backwards compatibility -->
<a id="schemawafoverrideactiontype"></a>
<a id="schema_WafOverrideActionType"></a>
<a id="tocSwafoverrideactiontype"></a>
<a id="tocswafoverrideactiontype"></a>

```json
"NONE"
```

<h2 id="tocS_WebACLSummary">WebACLSummary</h2>
<!-- backwards compatibility -->
<a id="schemawebaclsummary"></a>
<a id="schema_WebACLSummary"></a>
<a id="tocSwebaclsummary"></a>
<a id="tocswebaclsummary"></a>

```json
{
  "WebACLId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains the identifier and the name or description of the <a>WebACL</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebACLId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_WebACLUpdate">WebACLUpdate</h2>
<!-- backwards compatibility -->
<a id="schemawebaclupdate"></a>
<a id="schema_WebACLUpdate"></a>
<a id="tocSwebaclupdate"></a>
<a id="tocswebaclupdate"></a>

```json
{
  "Action": {},
  "ActivatedRule": {
    "Priority": {},
    "RuleId": {},
    "Action": {
      "Type": {}
    },
    "OverrideAction": {
      "Type": {}
    },
    "Type": {},
    "ExcludedRules": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies whether to insert a <code>Rule</code> into or delete a <code>Rule</code> from a <code>WebACL</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ActivatedRule|object|true|none|none|

<h2 id="tocS_XssMatchTuples">XssMatchTuples</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchtuples"></a>
<a id="schema_XssMatchTuples"></a>
<a id="tocSxssmatchtuples"></a>
<a id="tocsxssmatchtuples"></a>

```json
[
  {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {}
  }
]
```

<h2 id="tocS_XssMatchSetSummary">XssMatchSetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchsetsummary"></a>
<a id="schema_XssMatchSetSummary"></a>
<a id="tocSxssmatchsetsummary"></a>
<a id="tocsxssmatchsetsummary"></a>

```json
{
  "XssMatchSetId": {},
  "Name": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>Id</code> and <code>Name</code> of an <code>XssMatchSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XssMatchSetId|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_XssMatchTuple">XssMatchTuple</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchtuple"></a>
<a id="schema_XssMatchTuple"></a>
<a id="tocSxssmatchtuple"></a>
<a id="tocsxssmatchtuple"></a>

```json
{
  "FieldToMatch": {
    "Type": {},
    "Data": {}
  },
  "TextTransformation": {}
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks and, if you want AWS WAF to inspect a header, the name of the header.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldToMatch|object|true|none|none|
|TextTransformation|object|true|none|none|

<h2 id="tocS_XssMatchSetUpdate">XssMatchSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaxssmatchsetupdate"></a>
<a id="schema_XssMatchSetUpdate"></a>
<a id="tocSxssmatchsetupdate"></a>
<a id="tocsxssmatchsetupdate"></a>

```json
{
  "Action": {},
  "XssMatchTuple": {
    "FieldToMatch": {
      "Type": {},
      "Data": {}
    },
    "TextTransformation": {}
  }
}
```

<note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|XssMatchTuple|object|true|none|none|
