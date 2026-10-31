<h1 id="labs64-netlicensing-restful-api-test-center">Labs64 NetLicensing RESTful API Test Center v2.x</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Labs64 <a href='https://netlicensing.io/wiki/restful-api' target='_blank'>NetLicensing RESTful API</a> gives you access to NetLicensing’s core features.<br/><br/><strong>Authentication</strong><br/>You authenticate to the NetLicensing API by providing your account credentials or simply use our demo account - <code>demo:demo</code><br/><br/>Find out more about Labs64 NetLicensing at <a href='https://netlicensing.io' target='_blank'>netlicensing.io</a>

Base URLs:

* <a href="https://go.netlicensing.io/core/v2/rest">https://go.netlicensing.io/core/v2/rest</a>

<a href="https://www.labs64.com/legal/terms-of-service/netlicensing">Terms of service</a>

# Authentication

- HTTP Authentication, scheme: basic HTTP Basic Authentication. Use either `username:password` or `apiKey:token` to authenticate.

<h1 id="labs64-netlicensing-restful-api-test-center-product">Product</h1>

Product operations

<a href="https://netlicensing.io/wiki/product-services">Product Services</a>

## List Products

<a id="opIdlistProducts"></a>

> Code samples

```bash
curl https://example.com/product \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /product`

Return a list of all configured Products for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create Product

<a id="opIdcreateProduct"></a>

> Code samples

```bash
curl https://example.com/product \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&description=string&licenseeAutoCreate=true&licensingInfo=string&name=string&number=string&vatMode=GROSS&version=string'
```

`POST /product`

Creates a new Product

> Body parameter

```yaml
active: true
description: string
licenseeAutoCreate: true
licensingInfo: string
name: string
number: string
vatMode: GROSS
version: string
```

<h3 id="create-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» active|body|boolean|true|If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.|
|» description|body|string|false|Product description.|
|» licenseeAutoCreate|body|boolean|false|If set to 'true', non-existing Licensees will be created at first validation attempt.|
|» licensingInfo|body|string|false|Licensing information.|
|» name|body|string|true|Product name. Together with the version identifies the Product for the end customer.|
|» number|body|string|false|Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one.|
|» vatMode|body|string|false|Vat mode for Product. Supported types: GROSS, NET|
|» version|body|string|true|Product version. Convenience parameter, additional to the Product name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» vatMode|GROSS|
|» vatMode|NET|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get Product

<a id="opIdproductNumber"></a>

> Code samples

```bash
curl https://example.com/product/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /product/{productNumber}`

Return a Product by 'productNumber'

<h3 id="get-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productNumber|path|string|true|Unique number that identifies the Product.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Product

<a id="opIdupdateProduct"></a>

> Code samples

```bash
curl https://example.com/product/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&description=string&licenseeAutoCreate=true&licensingInfo=string&name=string&number=string&vatMode=GROSS&version=string'
```

`POST /product/{productNumber}`

Sets the provided properties to a Product. Return an updated Product

> Body parameter

```yaml
active: true
description: string
licenseeAutoCreate: true
licensingInfo: string
name: string
number: string
vatMode: GROSS
version: string
```

<h3 id="update-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productNumber|path|string|true|Unique number that identifies the Product.|
|body|body|object|false|none|
|» active|body|boolean|false|If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.|
|» description|body|string|false|Product description.|
|» licenseeAutoCreate|body|boolean|false|If set to 'true', non-existing Licensees will be created at first validation attempt.|
|» licensingInfo|body|string|false|Licensing information.|
|» name|body|string|false|Product name. Together with the version identifies the Product for the end customer.|
|» number|body|string|false|New Product number (update)|
|» vatMode|body|string|false|Vat mode for Product. Supported types: GROSS, NET|
|» version|body|string|false|Product version. Convenience parameter, additional to the Product name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» vatMode|GROSS|
|» vatMode|NET|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete Product

<a id="opIddeleteProduct"></a>

> Code samples

```bash
curl https://example.com/product/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /product/{productNumber}`

Delete a Product by 'number'

<h3 id="delete-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productNumber|path|string|true|Unique number that identifies the Product.|
|forceCascade|query|boolean|false|Force object deletion and all descendants.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-product-module">Product Module</h1>

Product Module operations

<a href="https://netlicensing.io/wiki/product-module-services">Product Module Services</a>

## List Product Modules

<a id="opIdlistProductModules"></a>

> Code samples

```bash
curl https://example.com/productmodule \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /productmodule`

Return a list of all Product Modules for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-product-modules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-product-modules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create Product Module

<a id="opIdcreateProductModule"></a>

> Code samples

```bash
curl https://example.com/productmodule \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&licenseTemplate=%5B%22TIMEVOLUME%22%5D&licensingModel=string&maxCheckoutValidity=0&name=string&nodeSecretMode=%5B%22PREDEFINED%22%5D&number=string&productNumber=string&redThreshold=0&yellowThreshold=0'
```

`POST /productmodule`

Creates a new Product Module

> Body parameter

```yaml
active: true
licenseTemplate:
  - TIMEVOLUME
licensingModel: string
maxCheckoutValidity: 0
name: string
nodeSecretMode:
  - PREDEFINED
number: string
productNumber: string
redThreshold: 0
yellowThreshold: 0
```

<h3 id="create-product-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» active|body|boolean|true|If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.|
|» licenseTemplate|body|[string]|false|License Template. Mandatory for 'Try &amp; Buy' licensing model.|
|» licensingModel|body|string|true|Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.|
|» maxCheckoutValidity|body|integer(int32)|false|Maximum checkout validity (days). Mandatory for 'Floating' licensing model.|
|» name|body|string|true|Product Module name that is visible to the end customers in NetLicensing Shop.|
|» nodeSecretMode|body|[string]|false|Secret Mode. Mandatory for 'Node-Locked' licensing model.|
|» number|body|string|false|Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|
|» productNumber|body|string|true|Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|
|» redThreshold|body|integer(int32)|false|Remaining time volume for red level. Mandatory for 'Rental' licensing model.|
|» yellowThreshold|body|integer(int32)|false|Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseTemplate|TIMEVOLUME|
|» licenseTemplate|FEATURE|
|» nodeSecretMode|PREDEFINED|
|» nodeSecretMode|CLIENT|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-product-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get Product Module

<a id="opIdgetProductModule"></a>

> Code samples

```bash
curl https://example.com/productmodule/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /productmodule/{productModuleNumber}`

Return a Product Module by 'productModuleNumber'

<h3 id="get-product-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productModuleNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-product-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Product Module

<a id="opIdupdateProductModule"></a>

> Code samples

```bash
curl https://example.com/productmodule/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&licenseTemplate=%5B%22TIMEVOLUME%22%5D&licensingModel=string&maxCheckoutValidity=0&name=string&nodeSecretMode=%5B%22PREDEFINED%22%5D&number=string&redThreshold=0&yellowThreshold=0'
```

`POST /productmodule/{productModuleNumber}`

Sets the provided properties to a Product Module. Return an updated Product Module

> Body parameter

```yaml
active: true
licenseTemplate:
  - TIMEVOLUME
licensingModel: string
maxCheckoutValidity: 0
name: string
nodeSecretMode:
  - PREDEFINED
number: string
redThreshold: 0
yellowThreshold: 0
```

<h3 id="update-product-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productModuleNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|
|body|body|object|false|none|
|» active|body|boolean|false|If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.|
|» licenseTemplate|body|[string]|false|License Template. Mandatory for 'Try &amp; Buy' licensing model.|
|» licensingModel|body|string|false|Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.|
|» maxCheckoutValidity|body|integer(int32)|false|Maximum checkout validity (days). Mandatory for 'Floating' licensing model.|
|» name|body|string|false|Product Module name that is visible to the end customers in NetLicensing Shop.|
|» nodeSecretMode|body|[string]|false|Secret Mode. Mandatory for 'Node-Locked' licensing model.|
|» number|body|string|false|New Product Module number (update).|
|» redThreshold|body|integer(int32)|false|Remaining time volume for red level. Mandatory for 'Rental' licensing model.|
|» yellowThreshold|body|integer(int32)|false|Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» licenseTemplate|TIMEVOLUME|
|» licenseTemplate|FEATURE|
|» nodeSecretMode|PREDEFINED|
|» nodeSecretMode|CLIENT|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-product-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete Product Module

<a id="opIddeleteProductModule"></a>

> Code samples

```bash
curl https://example.com/productmodule/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /productmodule/{productModuleNumber}`

Delete a Product Module by 'number'

<h3 id="delete-product-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productModuleNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Product Module.|
|forceCascade|query|boolean|false|Force object deletion and all descendants.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-product-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-license-template">License Template</h1>

License Template operations

<a href="https://netlicensing.io/wiki/license-template-services">License Template Services</a>

## List License Templates

<a id="opIdlistLicenseTemplates"></a>

> Code samples

```bash
curl https://example.com/licensetemplate \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /licensetemplate`

Return a list of all License Templates for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-license-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-license-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create License Template

<a id="opIdcreateLicenseTemplate"></a>

> Code samples

```bash
curl https://example.com/licensetemplate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&automatic=true&currency=string&hidden=true&hideLicenses=true&licenseType=string&maxSessions=string&name=string&number=string&price=0&productModuleNumber=string&quantity=string&quota=string&timeVolume=string&timeVolumePeriod=string'
```

`POST /licensetemplate`

Creates a new License Template

> Body parameter

```yaml
active: true
automatic: true
currency: string
hidden: true
hideLicenses: true
licenseType: string
maxSessions: string
name: string
number: string
price: 0
productModuleNumber: string
quantity: string
quota: string
timeVolume: string
timeVolumePeriod: string
```

<h3 id="create-license-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» active|body|boolean|true|If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.|
|» automatic|body|boolean|false|If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.|
|» currency|body|string|false|Specifies currency for the License price. Check data types to discover which currencies are supported.|
|» hidden|body|boolean|false|If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.|
|» hideLicenses|body|boolean|false|If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.|
|» licenseType|body|string|true|Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY|
|» maxSessions|body|string|false|Mandatory for 'FLOATING' License Type.|
|» name|body|string|true|License Template name to create License Template object|
|» number|body|string|false|Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.|
|» price|body|number(double)|false|Price for the License. If >0, it must always be accompanied by the currency specification.|
|» productModuleNumber|body|string|true|Number of Product Module to create License Template object|
|» quantity|body|string|false|Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.|
|» quota|body|string|false|Mandatory for 'Quota' License Model.|
|» timeVolume|body|string|false|Mandatory for 'TIMEVOLUME' License Type.|
|» timeVolumePeriod|body|string|false|For 'TIMEVOLUME' License Type.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-license-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get License Template

<a id="opIdgetLicenseTemplate"></a>

> Code samples

```bash
curl https://example.com/licensetemplate/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /licensetemplate/{licenseTemplateNumber}`

Return a License Template by 'licenseTemplateNumber'

<h3 id="get-license-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseTemplateNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-license-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update License Template

<a id="opIdupdateLicenseTemplate"></a>

> Code samples

```bash
curl https://example.com/licensetemplate/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&automatic=true&currency=string&hidden=true&hideLicenses=true&licenseType=string&maxSessions=string&name=string&number=string&price=0&quantity=string&quota=string&timeVolume=string&timeVolumePeriod=string'
```

`POST /licensetemplate/{licenseTemplateNumber}`

Sets the provided properties to a License Template. Return an updated License Template

> Body parameter

```yaml
active: true
automatic: true
currency: string
hidden: true
hideLicenses: true
licenseType: string
maxSessions: string
name: string
number: string
price: 0
quantity: string
quota: string
timeVolume: string
timeVolumePeriod: string
```

<h3 id="update-license-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseTemplateNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.|
|body|body|object|false|none|
|» active|body|boolean|false|If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.|
|» automatic|body|boolean|false|If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.|
|» currency|body|string|false|Specifies currency for the License price. Check data types to discover which currencies are supported.|
|» hidden|body|boolean|false|If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.|
|» hideLicenses|body|boolean|false|If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.|
|» licenseType|body|string|false|Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY|
|» maxSessions|body|string|false|Mandatory for 'FLOATING' License Type.|
|» name|body|string|false|Name for the Licensed item|
|» number|body|string|false|New License Template number (update).|
|» price|body|number(double)|false|Price for the License. If >0, it must always be accompanied by the currency specification.|
|» quantity|body|string|false|Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.|
|» quota|body|string|false|Mandatory for 'Quota' License Model.|
|» timeVolume|body|string|false|Mandatory for 'TIMEVOLUME' License Type.|
|» timeVolumePeriod|body|string|false|For 'TIMEVOLUME' License Type.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-license-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete License Template

<a id="opIddeleteLicenseTemplate"></a>

> Code samples

```bash
curl https://example.com/licensetemplate/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /licensetemplate/{licenseTemplateNumber}`

Delete a License Template by 'number'.

<h3 id="delete-license-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseTemplateNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the License Template.|
|forceCascade|query|boolean|false|Force object deletion and all descendants.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-license-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-licensee">Licensee</h1>

Licensee operations

<a href="https://netlicensing.io/wiki/licensee-services">Licensee Services</a>

## List Licensees

<a id="opIdlistLicensees"></a>

> Code samples

```bash
curl https://example.com/licensee \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /licensee`

Return a list of all Licensees for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-licensees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-licensees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create Licensee

<a id="opIdcreateLicensee"></a>

> Code samples

```bash
curl https://example.com/licensee \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&markedForTransfer=true&name=string&number=string&productNumber=string'
```

`POST /licensee`

Creates a new Licensee

> Body parameter

```yaml
active: true
markedForTransfer: true
name: string
number: string
productNumber: string
```

<h3 id="create-licensee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» active|body|boolean|true|If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled|
|» markedForTransfer|body|boolean|false|Mark Licensee for transfer.|
|» name|body|string|false|none|
|» number|body|string|false|Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee|
|» productNumber|body|string|true|'productNumber' to assign new Licensee object|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-licensee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get Licensee

<a id="opIdgetLicensee"></a>

> Code samples

```bash
curl https://example.com/licensee/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /licensee/{licenseeNumber}`

Return a Licensee by 'licenseeNumber'

<h3 id="get-licensee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseeNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-licensee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Licensee

<a id="opIdupdateLicensee"></a>

> Code samples

```bash
curl https://example.com/licensee/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&markedForTransfer=true&name=string&number=string'
```

`POST /licensee/{licenseeNumber}`

Sets the provided properties to a Licensee. Return an updated Licensee

> Body parameter

```yaml
active: true
markedForTransfer: true
name: string
number: string
```

<h3 id="update-licensee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseeNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.|
|body|body|object|false|none|
|» active|body|boolean|false|If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled|
|» markedForTransfer|body|boolean|false|Mark Licensee for transfer.|
|» name|body|string|false|none|
|» number|body|string|false|New Licensee number (update).|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-licensee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|402|Payment Required|Quota exceeded|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete Licensee

<a id="opIddeleteLicensee"></a>

> Code samples

```bash
curl https://example.com/licensee/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /licensee/{licenseeNumber}`

Delete a Licensee by 'number'

<h3 id="delete-licensee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseeNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Licensee.|
|forceCascade|query|boolean|false|Force object deletion and all descendants.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-licensee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Transfer Licenses

<a id="opIdtransferLicenses"></a>

> Code samples

```bash
curl https://example.com/licensee/string/transfer \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'sourceLicenseeNumber=string'
```

`POST /licensee/{licenseeNumber}/transfer`

Licenses transfer between Licensees

> Body parameter

```yaml
sourceLicenseeNumber: string
```

<h3 id="transfer-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseeNumber|path|string|true|Licensee number with a maximum length of 1000 characters|
|body|body|object|true|none|
|» sourceLicenseeNumber|body|string|true|Licensee number which Licenses to be transferred|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="transfer-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Validate Licensee

<a id="opIdvalidateLicensee"></a>

> Code samples

```bash
curl https://example.com/licensee/string/validate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'action=checkOut&licenseeName=string&nodeSecret=string&productModuleNumber=string&productNumber=string&sessionId=string'
```

`POST /licensee/{licenseeNumber}/validate`

Validates active Licenses of the Licensee

> Body parameter

```yaml
action: checkOut
licenseeName: string
nodeSecret: string
productModuleNumber: string
productNumber: string
sessionId: string
```

<h3 id="validate-licensee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseeNumber|path|string|true|Licensee number with a maximum length of 1000 characters|
|body|body|object|false|none|
|» action|body|string|false|'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions|
|» licenseeName|body|string|false|Human-readable name for the auto-created Licensee (will be set as custom Licensee property)|
|» nodeSecret|body|string|false|'Node-Locked' licensing model: specifies unique secret|
|» productModuleNumber|body|string|false|'Node-Locked' licensing model: product module number|
|» productNumber|body|string|false|Product number, must be provided when 'Licensee auto-create' is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added|
|» sessionId|body|string|false|'Floating' licensing model: specifies unique session identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|checkOut|
|» action|checkIn|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="validate-licensee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-license">License</h1>

License operations

<a href="https://netlicensing.io/wiki/license-services">License Services</a>

## List Licenses

<a id="opIdlistLicenses"></a>

> Code samples

```bash
curl https://example.com/license \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /license`

Return a list of all Licenses for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create License

<a id="opIdcreateLicense"></a>

> Code samples

```bash
curl https://example.com/license \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&currency=string&hidden=true&licenseTemplateNumber=string&licenseeNumber=string&name=string&number=string&parentfeature=string&price=0&quantity=string&startDate=1970-01-01T00%3A00%3A00Z&timeVolume=string&timeVolumePeriod=string&usedQuantity=string'
```

`POST /license`

Creates a new License

> Body parameter

```yaml
active: true
currency: string
hidden: true
licenseTemplateNumber: string
licenseeNumber: string
name: string
number: string
parentfeature: string
price: 0
quantity: string
startDate: "1970-01-01T00:00:00Z"
timeVolume: string
timeVolumePeriod: string
usedQuantity: string
```

<h3 id="create-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» active|body|boolean|true|none|
|» currency|body|string|false|Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation|
|» hidden|body|boolean|false|If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly|
|» licenseTemplateNumber|body|string|true|none|
|» licenseeNumber|body|string|true|none|
|» name|body|string|false|Name for the Licensed item. Set from License Template on creation, if not specified explicitly.|
|» number|body|string|false|none|
|» parentfeature|body|string|false|Mandatory for 'TIMEVOLUME' License Type and 'RENTAL' licensing model|
|» price|body|number(double)|false|Price for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation|
|» quantity|body|string|false|Mandatory for 'Pay-per-Use' License Model.|
|» startDate|body|string(date-time)|false|Mandatory for 'TIMEVOLUME' License Type.|
|» timeVolume|body|string|false|Mandatory for 'TIMEVOLUME' License Type.|
|» timeVolumePeriod|body|string|false|For 'TIMEVOLUME' License Type.|
|» usedQuantity|body|string|false|Mandatory for 'Pay-per-Use' License Model.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get License

<a id="opIdgetLicense"></a>

> Code samples

```bash
curl https://example.com/license/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /license/{licenseNumber}`

Get License by a 'licenseNumber'

<h3 id="get-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseNumber|path|string|true|Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update License

<a id="opIdupdateLicense"></a>

> Code samples

```bash
curl https://example.com/license/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&currency=string&hidden=true&name=string&number=string&parentfeature=string&price=0&quantity=string&startDate=1970-01-01T00%3A00%3A00Z&timeVolume=string&timeVolumePeriod=string&usedQuantity=string'
```

`POST /license/{licenseNumber}`

Update License by a 'licenseNumber'

> Body parameter

```yaml
active: true
currency: string
hidden: true
name: string
number: string
parentfeature: string
price: 0
quantity: string
startDate: "1970-01-01T00:00:00Z"
timeVolume: string
timeVolumePeriod: string
usedQuantity: string
```

<h3 id="update-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseNumber|path|string|true|Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.|
|body|body|object|false|none|
|» active|body|boolean|false|none|
|» currency|body|string|false|Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation|
|» hidden|body|boolean|false|If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly|
|» name|body|string|false|Name for the Licensed item. Set from License Template on creation, if not specified explicitly.|
|» number|body|string|false|Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.|
|» parentfeature|body|string|false|none|
|» price|body|number(double)|false|Price for the License. If > 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation|
|» quantity|body|string|false|Mandatory for 'Pay-per-Use' License Model.|
|» startDate|body|string(date-time)|false|For 'TIMEVOLUME' License type|
|» timeVolume|body|string|false|Mandatory for 'TIMEVOLUME' License Type.|
|» timeVolumePeriod|body|string|false|For 'TIMEVOLUME' License Type.|
|» usedQuantity|body|string|false|Mandatory for 'Pay-per-Use' License Model.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete License

<a id="opIddeleteLicense"></a>

> Code samples

```bash
curl https://example.com/license/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /license/{licenseNumber}`

Delete License by a 'licenseNumber'

<h3 id="delete-license-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|licenseNumber|path|string|true|Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-license-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-transaction">Transaction</h1>

Transaction operations

<a href="https://netlicensing.io/wiki/transaction-services">Transaction Services</a>

## List Transactions

<a id="opIdlistTransactions"></a>

> Code samples

```bash
curl https://example.com/transaction \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /transaction`

Return a list of all Transactions for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create Transaction

<a id="opIdcreateTransaction"></a>

> Code samples

```bash
curl https://example.com/transaction \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&dateClosed=1970-01-01T00%3A00%3A00Z&dateCreated=1970-01-01T00%3A00%3A00Z&licenseeNumber=string&number=string&paymentMethod=string&source=SHOP&status=CANCELLED'
```

`POST /transaction`

Creates a new Transaction

> Body parameter

```yaml
active: true
dateClosed: "1970-01-01T00:00:00Z"
dateCreated: "1970-01-01T00:00:00Z"
licenseeNumber: string
number: string
paymentMethod: string
source: SHOP
status: CANCELLED
```

<h3 id="create-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» active|body|boolean|true|Always 'true' for Transactions|
|» dateClosed|body|string(date-time)|false|none|
|» dateCreated|body|string(date-time)|false|none|
|» licenseeNumber|body|string|false|none|
|» number|body|string|false|Unique number (across all Products of a Vendor) that identifies the Transaction|
|» paymentMethod|body|string|false|none|
|» source|body|string|true|AUTO Transaction for internal use only|
|» status|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|SHOP|
|» status|CANCELLED|
|» status|CLOSED|
|» status|PENDING|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get Transaction

<a id="opIdgetTransaction"></a>

> Code samples

```bash
curl https://example.com/transaction/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /transaction/{transactionNumber}`

Return a Transaction by 'transactionNumber'

<h3 id="get-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Transaction|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Transaction

<a id="opIdupdateTransaction"></a>

> Code samples

```bash
curl https://example.com/transaction/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&dateClosed=1970-01-01T00%3A00%3A00Z&dateCreated=1970-01-01T00%3A00%3A00Z&number=string&paymentMethod=string&source=SHOP&status=CANCELLED'
```

`POST /transaction/{transactionNumber}`

Sets the provided properties to a Transaction. Return an updated Transaction

> Body parameter

```yaml
active: true
dateClosed: "1970-01-01T00:00:00Z"
dateCreated: "1970-01-01T00:00:00Z"
number: string
paymentMethod: string
source: SHOP
status: CANCELLED
```

<h3 id="update-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionNumber|path|string|true|Unique number (across all Products of a Vendor) that identifies the Transaction|
|body|body|object|false|none|
|» active|body|boolean|false|Always 'true' for Transactions|
|» dateClosed|body|string(date-time)|false|none|
|» dateCreated|body|string(date-time)|false|none|
|» number|body|string|false|Unique number (across all Products of a Vendor) that identifies the Transaction|
|» paymentMethod|body|string|false|none|
|» source|body|string|false|AUTO Transaction for internal use only|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|SHOP|
|» status|CANCELLED|
|» status|CLOSED|
|» status|PENDING|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-token">Token</h1>

Token operations

<a href="https://netlicensing.io/wiki/token-services">Token Services</a>

## List Tokens

<a id="opIdlistTokens"></a>

> Code samples

```bash
curl https://example.com/token \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /token`

Return a list of all tokens for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Create token

<a id="opIdcreateToken"></a>

> Code samples

```bash
curl https://example.com/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'action=licenseeLogin&apiKeyRole=ROLE_APIKEY_LICENSEE&cancelURL=string&cancelURLTitle=string&licenseTemplateNumber=string&licenseeNumber=string&predefinedShoppingItem=string&privateKey=string&productNumber=string&successURL=string&successURLTitle=string&tokenType=DEFAULT&type=ACTION'
```

`POST /token`

Create token by 'tokenType' and additional token parameters

> Body parameter

```yaml
action: licenseeLogin
apiKeyRole: ROLE_APIKEY_LICENSEE
cancelURL: string
cancelURLTitle: string
licenseTemplateNumber: string
licenseeNumber: string
predefinedShoppingItem: string
privateKey: string
productNumber: string
successURL: string
successURLTitle: string
tokenType: DEFAULT
type: ACTION
```

<h3 id="create-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» action|body|string|false|For <i>type=ACTION</i> only; defines token action to be perfromed|
|» apiKeyRole|body|string|false|For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID|
|» cancelURL|body|string|false|For <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout|
|» cancelURLTitle|body|string|false|For <i>tokenType=SHOP</i> only; shop link title for cancel checkout process|
|» licenseTemplateNumber|body|string|false|For <i>tokenType=SHOP</i> only; identifies LicenseTemplate that will be assigned to the shop token|
|» licenseeNumber|body|string|false|For <i>tokenType=SHOP</i> or <i>type=ACTION</i> only (mandatory); identifies Licensee that will be assigned to the shop token|
|» predefinedShoppingItem|body|string|false|For <i>tokenType=SHOP</i> only; identifies Shopping Item name that will be shown to the customer|
|» privateKey|body|string|false|For <i>tokenType=APIKEY</i> only (optional); defines PrivateKey to be used with the validate method<br/><strong>Please Note:</strong> PrivateKey need to be provided as one line without spaces|
|» productNumber|body|string|false|For <i>tokenType=SHOP</i> only (mandatory); identifies Product that will be assigned to the shop token|
|» successURL|body|string|false|For <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout|
|» successURLTitle|body|string|false|For <i>tokenType=SHOP</i> only; shop link title for successful checkout process|
|» tokenType|body|string|true|Token type to be generated|
|» type|body|string|false|For <i>tokenType=DEFAULT</i> only; action type to be set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|licenseeLogin|
|» apiKeyRole|ROLE_APIKEY_LICENSEE|
|» apiKeyRole|ROLE_APIKEY_ANALYTICS|
|» apiKeyRole|ROLE_APIKEY_OPERATION|
|» apiKeyRole|ROLE_APIKEY_MAINTENANCE|
|» apiKeyRole|ROLE_APIKEY_ADMIN|
|» tokenType|DEFAULT|
|» tokenType|SHOP|
|» tokenType|APIKEY|
|» type|ACTION|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="create-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get token

<a id="opIdgetToken"></a>

> Code samples

```bash
curl https://example.com/token/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /token/{tokenNumber}`

Return a token by 'tokenNumber'

<h3 id="get-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenNumber|path|string|true|Token number|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Delete token

<a id="opIddeleteToken"></a>

> Code samples

```bash
curl https://example.com/token/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /token/{tokenNumber}`

Delete a token by 'number'

<h3 id="delete-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokenNumber|path|string|true|Token number|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="delete-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-payment-method">Payment Method</h1>

Payment Method operations

<a href="https://netlicensing.io/wiki/payment-method-services">Payment Method Services</a>

## List Payment Methods

<a id="opIdlistPaymentMethods"></a>

> Code samples

```bash
curl https://example.com/paymentmethod \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /paymentmethod`

Return a list of all Payment Methods for the current Vendor

> Example responses

> 200 Response

```json
[
  {
    "infos": {},
    "items": {}
  }
]
```

<h3 id="list-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|Inline|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<h3 id="list-payment-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[netlicensing](#schemanetlicensing)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get Payment Method

<a id="opIdgetPaymentMethod"></a>

> Code samples

```bash
curl https://example.com/paymentmethod/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /paymentmethod/{paymentMethodNumber}`

Return a Payment Method info by 'paymentMethodNumber'

<h3 id="get-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethodNumber|path|string|true|Payment method number|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="get-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update Payment Method

<a id="opIdupdatePaymentMethod"></a>

> Code samples

```bash
curl https://example.com/paymentmethod/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'active=true&paypal.subject=string'
```

`POST /paymentmethod/{paymentMethodNumber}`

Sets the provided properties to a Payment Method. Return an updated Payment Method

> Body parameter

```yaml
active: true
paypal.subject: string
```

<h3 id="update-payment-method-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentMethodNumber|path|string|true|Payment method number|
|body|body|object|false|none|
|» active|body|boolean|false|If set to 'false', the Payment Method is disabled.|
|» paypal.subject|body|string|false|The e-mail address of the PayPal account for which you are making the API calls.|

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="update-payment-method-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="labs64-netlicensing-restful-api-test-center-utility">Utility</h1>

Utility operations

<a href="https://netlicensing.io/wiki/utility-services">Utility Services</a>

## List License Types

<a id="opIdlicenseTypes"></a>

> Code samples

```bash
curl https://example.com/utility/licenseTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /utility/licenseTypes`

Return a list of all License Types supported by the service

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="list-license-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## List Licensing Models

<a id="opIdlicensingModels"></a>

> Code samples

```bash
curl https://example.com/utility/licensingModels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /utility/licensingModels`

Return a list of all licensing models supported by the service

> Example responses

> 200 Response

```json
{
  "infos": {},
  "items": {}
}
```

<h3 id="list-licensing-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful request|[netlicensing](#schemanetlicensing)|
|400|Bad Request|Malformed or illegal request|None|
|403|Forbidden|Access is denied|None|
|404|Not Found|Resource not found|None|
|500|Internal Server Error|Internal service error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "active": true,
  "currency": "string",
  "hidden": true,
  "name": "string",
  "number": "string",
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If set to 'false', the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process.|
|currency|string|false|none|Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation.|
|hidden|boolean|false|none|If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly.|
|name|string|false|none|Name for the Licensed item. Set from License Template on creation, if not specified explicitly.|
|number|string|false|none|Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.|
|price|number(double)|false|none|'price' for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation.|

<h2 id="tocS_LicenseTemplate">LicenseTemplate</h2>
<!-- backwards compatibility -->
<a id="schemalicensetemplate"></a>
<a id="schema_LicenseTemplate"></a>
<a id="tocSlicensetemplate"></a>
<a id="tocslicensetemplate"></a>

```json
{
  "active": true,
  "automatic": true,
  "currency": "string",
  "hidden": true,
  "hiddenLicenses": true,
  "licenseType": "FEATURE",
  "name": "string",
  "number": "string",
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.|
|automatic|boolean|false|none|If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.|
|currency|string|false|none|Specifies currency for the License price. Check data types to discover which currencies are supported.|
|hidden|boolean|false|none|If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.|
|hiddenLicenses|boolean|false|none|If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.|
|licenseType|string|false|none|Type of Licenses created from this License Template|
|name|string|false|none|Name for the Licensed item.|
|number|string|false|none|Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.|
|price|number(double)|false|none|'price' for the License. If >0, it must always be accompanied by the currency specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|licenseType|FEATURE|
|licenseType|TIMEVOLUME|

<h2 id="tocS_Licensee">Licensee</h2>
<!-- backwards compatibility -->
<a id="schemalicensee"></a>
<a id="schema_Licensee"></a>
<a id="tocSlicensee"></a>
<a id="tocslicensee"></a>

```json
{
  "active": true,
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled.|
|number|string|false|none|Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "active": true,
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|number|string|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "active": true,
  "licenseeAutoCreate": true,
  "name": "string",
  "number": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses|
|licenseeAutoCreate|boolean|false|none|If set to 'true', non-existing Licensees will be created at first validation attempt.|
|name|string|false|none|Product name. Together with the version identifies the Product for the end customer|
|number|string|false|none|Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|
|version|string|false|none|Product version. Convenience parameter, additional to the Product name.|

<h2 id="tocS_ProductModule">ProductModule</h2>
<!-- backwards compatibility -->
<a id="schemaproductmodule"></a>
<a id="schema_ProductModule"></a>
<a id="tocSproductmodule"></a>
<a id="tocsproductmodule"></a>

```json
{
  "active": true,
  "licensingInfo": "string",
  "name": "string",
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.|
|licensingInfo|string|false|none|Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.|
|name|string|false|none|Product Module name that is visible to the end customers in NetLicensing Shop.|
|number|string|false|none|Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.|

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "active": true,
  "expirationTime": "1970-01-01T00:00:00Z",
  "licenseNumber": "string",
  "number": "string",
  "shopURL": "string",
  "tokenType": "string",
  "vendorNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|expirationTime|string(date-time)|false|none|none|
|licenseNumber|string|false|none|none|
|number|string|false|none|none|
|shopURL|string|false|none|none|
|tokenType|string|false|none|none|
|vendorNumber|string|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "active": "string",
  "number": "string",
  "source": "SHOP",
  "status": "CANCELLED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none|Always true for the Transactions|
|number|string|false|none|Unique number (across all Products of a Vendor) that identifies the Transaction. This number is always generated by NetLicensing.|
|source|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SHOP|
|status|CANCELLED|
|status|CLOSED|
|status|PENDING|

<h2 id="tocS_discount">discount</h2>
<!-- backwards compatibility -->
<a id="schemadiscount"></a>
<a id="schema_discount"></a>
<a id="tocSdiscount"></a>
<a id="tocsdiscount"></a>

```json
{
  "amountPercent": "string",
  "currency": "string",
  "totalPrice": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountPercent|string|false|none|none|
|currency|string|false|none|none|
|totalPrice|number(double)|false|none|none|

<h2 id="tocS_infos">infos</h2>
<!-- backwards compatibility -->
<a id="schemainfos"></a>
<a id="schema_infos"></a>
<a id="tocSinfos"></a>
<a id="tocsinfos"></a>

```json
{}
```

<h2 id="tocS_items">items</h2>
<!-- backwards compatibility -->
<a id="schemaitems"></a>
<a id="schema_items"></a>
<a id="tocSitems"></a>
<a id="tocsitems"></a>

```json
{}
```

<h2 id="tocS_licensingModel">licensingModel</h2>
<!-- backwards compatibility -->
<a id="schemalicensingmodel"></a>
<a id="schema_licensingModel"></a>
<a id="tocSlicensingmodel"></a>
<a id="tocslicensingmodel"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_netlicensing">netlicensing</h2>
<!-- backwards compatibility -->
<a id="schemanetlicensing"></a>
<a id="schema_netlicensing"></a>
<a id="tocSnetlicensing"></a>
<a id="tocsnetlicensing"></a>

```json
{
  "infos": {},
  "items": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|infos|[infos](#schemainfos)|false|none|none|
|items|[items](#schemaitems)|false|none|none|
