<h1 id="aws-marketplace-entitlement-service">AWS Marketplace Entitlement Service v2017-01-11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

Base URLs:

* <a href="http://entitlement.marketplace.us-east-1.amazonaws.com">http://entitlement.marketplace.us-east-1.amazonaws.com</a> - The AWS Marketplace Entitlement Service multi-region endpoint

* <a href="https://entitlement.marketplace.us-east-1.amazonaws.com">https://entitlement.marketplace.us-east-1.amazonaws.com</a> - The AWS Marketplace Entitlement Service multi-region endpoint

* <a href="http://entitlement.marketplace.cn-north-1.amazonaws.com.cn">http://entitlement.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://entitlement.marketplace.cn-north-1.amazonaws.com.cn">https://entitlement.marketplace.cn-north-1.amazonaws.com.cn</a> - The AWS Marketplace Entitlement Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/marketplace/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-marketplace-entitlement-service-default">Default</h1>

## GetEntitlements

<a id="opIdGetEntitlements"></a>

> Code samples

```bash
curl 'https://entitlement-marketplace.us-east-1.amazonaws.com/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSMPEntitlementService.GetEntitlements' \
  -d '{
    "ProductCode": {},
    "Filter": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSMPEntitlementService.GetEntitlements`

GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

> Body parameter

```json
{
  "ProductCode": {},
  "Filter": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="getentitlements-parameters">Parameters</h3>

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
|body|body|[GetEntitlementsRequest](#schemagetentitlementsrequest)|true|none|
|» ProductCode|body|object|true|none|
|» Filter|body|object|false|none|
|» » **additionalProperties**|body|[FilterValueList](#schemafiltervaluelist)|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSMPEntitlementService.GetEntitlements|

> Example responses

> 200 Response

```json
{
  "Entitlements": {},
  "NextToken": {}
}
```

> 480 Response

```json
{
  "message": "string"
}
```

> 481 Response

```json
{
  "message": "string"
}
```

> 482 Response

```json
{
  "message": "string"
}
```

<h3 id="getentitlements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetEntitlementsResult](#schemagetentitlementsresult)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_GetEntitlementsResult">GetEntitlementsResult</h2>
<!-- backwards compatibility -->
<a id="schemagetentitlementsresult"></a>
<a id="schema_GetEntitlementsResult"></a>
<a id="tocSgetentitlementsresult"></a>
<a id="tocsgetentitlementsresult"></a>

```json
{
  "Entitlements": {},
  "NextToken": {}
}
```

The GetEntitlementsRequest contains results from the GetEntitlements operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entitlements|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetEntitlementsRequest">GetEntitlementsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetentitlementsrequest"></a>
<a id="schema_GetEntitlementsRequest"></a>
<a id="tocSgetentitlementsrequest"></a>
<a id="tocsgetentitlementsrequest"></a>

```json
{
  "ProductCode": {},
  "Filter": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "NextToken": {},
  "MaxResults": {}
}
```

The GetEntitlementsRequest contains parameters for the GetEntitlements operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductCode|object|true|none|none|
|Filter|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
{
  "message": "string"
}
```

One or more parameters in your request was invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|none|

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
{
  "message": "string"
}
```

The calls to the GetEntitlements API are throttled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|none|

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
{
  "message": "string"
}
```

An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[ErrorMessage](#schemaerrormessage)|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_ProductCode">ProductCode</h2>
<!-- backwards compatibility -->
<a id="schemaproductcode"></a>
<a id="schema_ProductCode"></a>
<a id="tocSproductcode"></a>
<a id="tocsproductcode"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_EntitlementValue">EntitlementValue</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementvalue"></a>
<a id="schema_EntitlementValue"></a>
<a id="tocSentitlementvalue"></a>
<a id="tocsentitlementvalue"></a>

```json
{
  "IntegerValue": {},
  "DoubleValue": {},
  "BooleanValue": {},
  "StringValue": {}
}
```

The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntegerValue|object|false|none|none|
|DoubleValue|object|false|none|none|
|BooleanValue|object|false|none|none|
|StringValue|object|false|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "ProductCode": {},
  "Dimension": {},
  "CustomerIdentifier": {},
  "Value": {
    "IntegerValue": {},
    "DoubleValue": {},
    "BooleanValue": {},
    "StringValue": {}
  },
  "ExpirationDate": {}
}
```

An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductCode|object|false|none|none|
|Dimension|object|false|none|none|
|CustomerIdentifier|object|false|none|none|
|Value|object|false|none|none|
|ExpirationDate|object|false|none|none|

<h2 id="tocS_EntitlementList">EntitlementList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementlist"></a>
<a id="schema_EntitlementList"></a>
<a id="tocSentitlementlist"></a>
<a id="tocsentitlementlist"></a>

```json
[
  {
    "ProductCode": {},
    "Dimension": {},
    "CustomerIdentifier": {},
    "Value": {
      "IntegerValue": {},
      "DoubleValue": {},
      "BooleanValue": {},
      "StringValue": {}
    },
    "ExpirationDate": {}
  }
]
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_FilterValueList">FilterValueList</h2>
<!-- backwards compatibility -->
<a id="schemafiltervaluelist"></a>
<a id="schema_FilterValueList"></a>
<a id="tocSfiltervaluelist"></a>
<a id="tocsfiltervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetEntitlementFilterName">GetEntitlementFilterName</h2>
<!-- backwards compatibility -->
<a id="schemagetentitlementfiltername"></a>
<a id="schema_GetEntitlementFilterName"></a>
<a id="tocSgetentitlementfiltername"></a>
<a id="tocsgetentitlementfiltername"></a>

```json
"CUSTOMER_IDENTIFIER"
```

<h2 id="tocS_GetEntitlementFilters">GetEntitlementFilters</h2>
<!-- backwards compatibility -->
<a id="schemagetentitlementfilters"></a>
<a id="schema_GetEntitlementFilters"></a>
<a id="tocSgetentitlementfilters"></a>
<a id="tocsgetentitlementfilters"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[FilterValueList](#schemafiltervaluelist)|false|none|none|
