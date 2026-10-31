<h1 id="aws-license-manager">AWS License Manager v2018-08-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers.

Base URLs:

* <a href="http://license-manager.us-east-1.amazonaws.com">http://license-manager.us-east-1.amazonaws.com</a> - The AWS License Manager multi-region endpoint

* <a href="https://license-manager.us-east-1.amazonaws.com">https://license-manager.us-east-1.amazonaws.com</a> - The AWS License Manager multi-region endpoint

* <a href="http://license-manager.cn-north-1.amazonaws.com.cn">http://license-manager.cn-north-1.amazonaws.com.cn</a> - The AWS License Manager endpoint for China (Beijing) and China (Ningxia)

* <a href="https://license-manager.cn-north-1.amazonaws.com.cn">https://license-manager.cn-north-1.amazonaws.com.cn</a> - The AWS License Manager endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/license-manager/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-license-manager-default">Default</h1>

## AcceptGrant

<a id="opIdAcceptGrant"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.AcceptGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.AcceptGrant' \
  -d '{
    "GrantArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.AcceptGrant`

Accepts the specified grant.

> Body parameter

```json
{
  "GrantArn": {}
}
```

<h3 id="acceptgrant-parameters">Parameters</h3>

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
|body|body|[AcceptGrantRequest](#schemaacceptgrantrequest)|true|none|
|» GrantArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.AcceptGrant|

> Example responses

> 200 Response

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="acceptgrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptGrantResponse](#schemaacceptgrantresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckInLicense

<a id="opIdCheckInLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CheckInLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CheckInLicense' \
  -d '{
    "LicenseConsumptionToken": {},
    "Beneficiary": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CheckInLicense`

Checks in the specified license. Check in a license when it is no longer in use.

> Body parameter

```json
{
  "LicenseConsumptionToken": {},
  "Beneficiary": {}
}
```

<h3 id="checkinlicense-parameters">Parameters</h3>

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
|body|body|[CheckInLicenseRequest](#schemacheckinlicenserequest)|true|none|
|» LicenseConsumptionToken|body|object|true|none|
|» Beneficiary|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CheckInLicense|

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

> 487 Response

```json
null
```

<h3 id="checkinlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckInLicenseResponse](#schemacheckinlicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|487|487|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckoutBorrowLicense

<a id="opIdCheckoutBorrowLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CheckoutBorrowLicense' \
  -d '{
    "LicenseArn": {},
    "Entitlements": {},
    "DigitalSignatureMethod": {},
    "NodeId": {},
    "CheckoutMetadata": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense`

Checks out the specified license for offline use.

> Body parameter

```json
{
  "LicenseArn": {},
  "Entitlements": {},
  "DigitalSignatureMethod": {},
  "NodeId": {},
  "CheckoutMetadata": {},
  "ClientToken": {}
}
```

<h3 id="checkoutborrowlicense-parameters">Parameters</h3>

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
|body|body|[CheckoutBorrowLicenseRequest](#schemacheckoutborrowlicenserequest)|true|none|
|» LicenseArn|body|object|true|none|
|» Entitlements|body|object|true|none|
|» DigitalSignatureMethod|body|object|true|none|
|» NodeId|body|object|false|none|
|» CheckoutMetadata|body|object|false|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CheckoutBorrowLicense|

> Example responses

> 200 Response

```json
{
  "LicenseArn": {},
  "LicenseConsumptionToken": {},
  "EntitlementsAllowed": {},
  "NodeId": {},
  "SignedToken": {},
  "IssuedAt": {},
  "Expiration": {},
  "CheckoutMetadata": {}
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

> 490 Response

```json
null
```

<h3 id="checkoutborrowlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckoutBorrowLicenseResponse](#schemacheckoutborrowlicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NoEntitlementsAllowedException|[NoEntitlementsAllowedException](#schemanoentitlementsallowedexception)|
|484|484|EntitlementNotAllowedException|[EntitlementNotAllowedException](#schemaentitlementnotallowedexception)|
|485|485|UnsupportedDigitalSignatureMethodException|[UnsupportedDigitalSignatureMethodException](#schemaunsupporteddigitalsignaturemethodexception)|
|486|486|RedirectException|[RedirectException](#schemaredirectexception)|
|487|487|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|488|488|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|489|489|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|490|490|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckoutLicense

<a id="opIdCheckoutLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CheckoutLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CheckoutLicense' \
  -d '{
    "ProductSKU": {},
    "CheckoutType": {},
    "KeyFingerprint": {},
    "Entitlements": {},
    "ClientToken": {},
    "Beneficiary": {},
    "NodeId": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CheckoutLicense`

<p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>

> Body parameter

```json
{
  "ProductSKU": {},
  "CheckoutType": {},
  "KeyFingerprint": {},
  "Entitlements": {},
  "ClientToken": {},
  "Beneficiary": {},
  "NodeId": {}
}
```

<h3 id="checkoutlicense-parameters">Parameters</h3>

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
|body|body|[CheckoutLicenseRequest](#schemacheckoutlicenserequest)|true|none|
|» ProductSKU|body|object|true|none|
|» CheckoutType|body|object|true|none|
|» KeyFingerprint|body|object|true|none|
|» Entitlements|body|object|true|none|
|» ClientToken|body|object|true|none|
|» Beneficiary|body|object|false|none|
|» NodeId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CheckoutLicense|

> Example responses

> 200 Response

```json
{
  "CheckoutType": {},
  "LicenseConsumptionToken": {},
  "EntitlementsAllowed": {},
  "SignedToken": {},
  "NodeId": {},
  "IssuedAt": {},
  "Expiration": {},
  "LicenseArn": {}
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

<h3 id="checkoutlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckoutLicenseResponse](#schemacheckoutlicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|NoEntitlementsAllowedException|[NoEntitlementsAllowedException](#schemanoentitlementsallowedexception)|
|484|484|UnsupportedDigitalSignatureMethodException|[UnsupportedDigitalSignatureMethodException](#schemaunsupporteddigitalsignaturemethodexception)|
|485|485|RedirectException|[RedirectException](#schemaredirectexception)|
|486|486|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|487|487|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|488|488|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|489|489|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGrant

<a id="opIdCreateGrant"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateGrant' \
  -d '{
    "ClientToken": {},
    "GrantName": {},
    "LicenseArn": {},
    "Principals": {},
    "HomeRegion": {},
    "AllowedOperations": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateGrant`

Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

> Body parameter

```json
{
  "ClientToken": {},
  "GrantName": {},
  "LicenseArn": {},
  "Principals": {},
  "HomeRegion": {},
  "AllowedOperations": {}
}
```

<h3 id="creategrant-parameters">Parameters</h3>

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
|body|body|[CreateGrantRequest](#schemacreategrantrequest)|true|none|
|» ClientToken|body|object|true|none|
|» GrantName|body|object|true|none|
|» LicenseArn|body|object|true|none|
|» Principals|body|object|true|none|
|» HomeRegion|body|object|true|none|
|» AllowedOperations|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateGrant|

> Example responses

> 200 Response

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="creategrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGrantResponse](#schemacreategrantresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGrantVersion

<a id="opIdCreateGrantVersion"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateGrantVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateGrantVersion' \
  -d '{
    "ClientToken": {},
    "GrantArn": {},
    "GrantName": {},
    "AllowedOperations": {},
    "Status": {},
    "StatusReason": {},
    "SourceVersion": {},
    "Options": {
      "ActivationOverrideBehavior": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateGrantVersion`

Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

> Body parameter

```json
{
  "ClientToken": {},
  "GrantArn": {},
  "GrantName": {},
  "AllowedOperations": {},
  "Status": {},
  "StatusReason": {},
  "SourceVersion": {},
  "Options": {
    "ActivationOverrideBehavior": {}
  }
}
```

<h3 id="creategrantversion-parameters">Parameters</h3>

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
|body|body|[CreateGrantVersionRequest](#schemacreategrantversionrequest)|true|none|
|» ClientToken|body|object|true|none|
|» GrantArn|body|object|true|none|
|» GrantName|body|object|false|none|
|» AllowedOperations|body|object|false|none|
|» Status|body|object|false|none|
|» StatusReason|body|object|false|none|
|» SourceVersion|body|object|false|none|
|» Options|body|object|false|none|
|» » ActivationOverrideBehavior|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateGrantVersion|

> Example responses

> 200 Response

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="creategrantversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGrantVersionResponse](#schemacreategrantversionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLicense

<a id="opIdCreateLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateLicense' \
  -d '{
    "LicenseName": {},
    "ProductName": {},
    "ProductSKU": {},
    "Issuer": {
      "Name": {},
      "SignKey": {}
    },
    "HomeRegion": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "Entitlements": {},
    "Beneficiary": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "LicenseMetadata": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateLicense`

Creates a license.

> Body parameter

```json
{
  "LicenseName": {},
  "ProductName": {},
  "ProductSKU": {},
  "Issuer": {
    "Name": {},
    "SignKey": {}
  },
  "HomeRegion": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "Entitlements": {},
  "Beneficiary": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "LicenseMetadata": {},
  "ClientToken": {}
}
```

<h3 id="createlicense-parameters">Parameters</h3>

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
|body|body|[CreateLicenseRequest](#schemacreatelicenserequest)|true|none|
|» LicenseName|body|object|true|none|
|» ProductName|body|object|true|none|
|» ProductSKU|body|object|true|none|
|» Issuer|body|object|true|none|
|» » Name|body|object|true|none|
|» » SignKey|body|object|false|none|
|» HomeRegion|body|object|true|none|
|» Validity|body|object|true|none|
|» » Begin|body|object|true|none|
|» » End|body|object|false|none|
|» Entitlements|body|object|true|none|
|» Beneficiary|body|object|true|none|
|» ConsumptionConfiguration|body|object|true|none|
|» » RenewType|body|object|false|none|
|» » ProvisionalConfiguration|body|object|false|none|
|» » » MaxTimeToLiveInMinutes|body|object|true|none|
|» » BorrowConfiguration|body|object|false|none|
|» » » AllowEarlyCheckIn|body|object|true|none|
|» » » MaxTimeToLiveInMinutes|body|object|true|none|
|» LicenseMetadata|body|object|false|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateLicense|

> Example responses

> 200 Response

```json
{
  "LicenseArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="createlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLicenseResponse](#schemacreatelicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|RedirectException|[RedirectException](#schemaredirectexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLicenseConfiguration

<a id="opIdCreateLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateLicenseConfiguration' \
  -d '{
    "Name": {},
    "Description": {},
    "LicenseCountingType": {},
    "LicenseCount": {},
    "LicenseCountHardLimit": {},
    "LicenseRules": {},
    "Tags": {},
    "DisassociateWhenNotFound": {},
    "ProductInformationList": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration`

<p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>

> Body parameter

```json
{
  "Name": {},
  "Description": {},
  "LicenseCountingType": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "LicenseRules": {},
  "Tags": {},
  "DisassociateWhenNotFound": {},
  "ProductInformationList": {}
}
```

<h3 id="createlicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateLicenseConfigurationRequest](#schemacreatelicenseconfigurationrequest)|true|none|
|» Name|body|object|true|none|
|» Description|body|object|false|none|
|» LicenseCountingType|body|object|true|none|
|» LicenseCount|body|object|false|none|
|» LicenseCountHardLimit|body|object|false|none|
|» LicenseRules|body|object|false|none|
|» Tags|body|object|false|none|
|» DisassociateWhenNotFound|body|object|false|none|
|» ProductInformationList|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateLicenseConfiguration|

> Example responses

> 200 Response

```json
{
  "LicenseConfigurationArn": {}
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

<h3 id="createlicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLicenseConfigurationResponse](#schemacreatelicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLicenseConversionTaskForResource

<a id="opIdCreateLicenseConversionTaskForResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateLicenseConversionTaskForResource' \
  -d '{
    "ResourceArn": {},
    "SourceLicenseContext": {
      "UsageOperation": {}
    },
    "DestinationLicenseContext": {
      "UsageOperation": {}
    }
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource`

Creates a new license conversion task.

> Body parameter

```json
{
  "ResourceArn": {},
  "SourceLicenseContext": {
    "UsageOperation": {}
  },
  "DestinationLicenseContext": {
    "UsageOperation": {}
  }
}
```

<h3 id="createlicenseconversiontaskforresource-parameters">Parameters</h3>

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
|body|body|[CreateLicenseConversionTaskForResourceRequest](#schemacreatelicenseconversiontaskforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» SourceLicenseContext|body|object|true|none|
|» » UsageOperation|body|object|false|none|
|» DestinationLicenseContext|body|object|true|none|
|» » UsageOperation|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateLicenseConversionTaskForResource|

> Example responses

> 200 Response

```json
{
  "LicenseConversionTaskId": {}
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

<h3 id="createlicenseconversiontaskforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLicenseConversionTaskForResourceResponse](#schemacreatelicenseconversiontaskforresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLicenseManagerReportGenerator

<a id="opIdCreateLicenseManagerReportGenerator"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateLicenseManagerReportGenerator' \
  -d '{
    "ReportGeneratorName": {},
    "Type": {},
    "ReportContext": {
      "licenseConfigurationArns": {}
    },
    "ReportFrequency": {
      "value": {},
      "period": {}
    },
    "ClientToken": {},
    "Description": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator`

Creates a report generator.

> Body parameter

```json
{
  "ReportGeneratorName": {},
  "Type": {},
  "ReportContext": {
    "licenseConfigurationArns": {}
  },
  "ReportFrequency": {
    "value": {},
    "period": {}
  },
  "ClientToken": {},
  "Description": {},
  "Tags": {}
}
```

<h3 id="createlicensemanagerreportgenerator-parameters">Parameters</h3>

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
|body|body|[CreateLicenseManagerReportGeneratorRequest](#schemacreatelicensemanagerreportgeneratorrequest)|true|none|
|» ReportGeneratorName|body|object|true|none|
|» Type|body|object|true|none|
|» ReportContext|body|object|true|none|
|» » licenseConfigurationArns|body|object|true|none|
|» ReportFrequency|body|object|true|none|
|» » value|body|object|false|none|
|» » period|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Description|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateLicenseManagerReportGenerator|

> Example responses

> 200 Response

```json
{
  "LicenseManagerReportGeneratorArn": {}
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

<h3 id="createlicensemanagerreportgenerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLicenseManagerReportGeneratorResponse](#schemacreatelicensemanagerreportgeneratorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateLicenseVersion

<a id="opIdCreateLicenseVersion"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateLicenseVersion' \
  -d '{
    "LicenseArn": {},
    "LicenseName": {},
    "ProductName": {},
    "Issuer": {
      "Name": {},
      "SignKey": {}
    },
    "HomeRegion": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "LicenseMetadata": {},
    "Entitlements": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "Status": {},
    "ClientToken": {},
    "SourceVersion": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion`

Creates a new version of the specified license.

> Body parameter

```json
{
  "LicenseArn": {},
  "LicenseName": {},
  "ProductName": {},
  "Issuer": {
    "Name": {},
    "SignKey": {}
  },
  "HomeRegion": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "LicenseMetadata": {},
  "Entitlements": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "Status": {},
  "ClientToken": {},
  "SourceVersion": {}
}
```

<h3 id="createlicenseversion-parameters">Parameters</h3>

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
|body|body|[CreateLicenseVersionRequest](#schemacreatelicenseversionrequest)|true|none|
|» LicenseArn|body|object|true|none|
|» LicenseName|body|object|true|none|
|» ProductName|body|object|true|none|
|» Issuer|body|object|true|none|
|» » Name|body|object|true|none|
|» » SignKey|body|object|false|none|
|» HomeRegion|body|object|true|none|
|» Validity|body|object|true|none|
|» » Begin|body|object|true|none|
|» » End|body|object|false|none|
|» LicenseMetadata|body|object|false|none|
|» Entitlements|body|object|true|none|
|» ConsumptionConfiguration|body|object|true|none|
|» » RenewType|body|object|false|none|
|» » ProvisionalConfiguration|body|object|false|none|
|» » » MaxTimeToLiveInMinutes|body|object|true|none|
|» » BorrowConfiguration|body|object|false|none|
|» » » AllowEarlyCheckIn|body|object|true|none|
|» » » MaxTimeToLiveInMinutes|body|object|true|none|
|» Status|body|object|true|none|
|» ClientToken|body|object|true|none|
|» SourceVersion|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateLicenseVersion|

> Example responses

> 200 Response

```json
{
  "LicenseArn": {},
  "Version": {},
  "Status": {}
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

<h3 id="createlicenseversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateLicenseVersionResponse](#schemacreatelicenseversionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|RedirectException|[RedirectException](#schemaredirectexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|487|487|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateToken

<a id="opIdCreateToken"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.CreateToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.CreateToken' \
  -d '{
    "LicenseArn": {},
    "RoleArns": {},
    "ExpirationInDays": {},
    "TokenProperties": {},
    "ClientToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.CreateToken`

<p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>

> Body parameter

```json
{
  "LicenseArn": {},
  "RoleArns": {},
  "ExpirationInDays": {},
  "TokenProperties": {},
  "ClientToken": {}
}
```

<h3 id="createtoken-parameters">Parameters</h3>

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
|body|body|[CreateTokenRequest](#schemacreatetokenrequest)|true|none|
|» LicenseArn|body|object|true|none|
|» RoleArns|body|object|false|none|
|» ExpirationInDays|body|object|false|none|
|» TokenProperties|body|object|false|none|
|» ClientToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.CreateToken|

> Example responses

> 200 Response

```json
{
  "TokenId": {},
  "TokenType": {},
  "Token": {}
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

<h3 id="createtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTokenResponse](#schemacreatetokenresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|484|484|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|RedirectException|[RedirectException](#schemaredirectexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGrant

<a id="opIdDeleteGrant"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.DeleteGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.DeleteGrant' \
  -d '{
    "GrantArn": {},
    "StatusReason": {},
    "Version": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.DeleteGrant`

Deletes the specified grant.

> Body parameter

```json
{
  "GrantArn": {},
  "StatusReason": {},
  "Version": {}
}
```

<h3 id="deletegrant-parameters">Parameters</h3>

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
|body|body|[DeleteGrantRequest](#schemadeletegrantrequest)|true|none|
|» GrantArn|body|object|true|none|
|» StatusReason|body|object|false|none|
|» Version|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.DeleteGrant|

> Example responses

> 200 Response

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="deletegrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGrantResponse](#schemadeletegrantresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLicense

<a id="opIdDeleteLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.DeleteLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.DeleteLicense' \
  -d '{
    "LicenseArn": {},
    "SourceVersion": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.DeleteLicense`

Deletes the specified license.

> Body parameter

```json
{
  "LicenseArn": {},
  "SourceVersion": {}
}
```

<h3 id="deletelicense-parameters">Parameters</h3>

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
|body|body|[DeleteLicenseRequest](#schemadeletelicenserequest)|true|none|
|» LicenseArn|body|object|true|none|
|» SourceVersion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.DeleteLicense|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "DeletionDate": {}
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

<h3 id="deletelicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLicenseResponse](#schemadeletelicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|RedirectException|[RedirectException](#schemaredirectexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLicenseConfiguration

<a id="opIdDeleteLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.DeleteLicenseConfiguration' \
  -d '{
    "LicenseConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration`

<p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>

> Body parameter

```json
{
  "LicenseConfigurationArn": {}
}
```

<h3 id="deletelicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteLicenseConfigurationRequest](#schemadeletelicenseconfigurationrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.DeleteLicenseConfiguration|

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

<h3 id="deletelicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLicenseConfigurationResponse](#schemadeletelicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLicenseManagerReportGenerator

<a id="opIdDeleteLicenseManagerReportGenerator"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.DeleteLicenseManagerReportGenerator' \
  -d '{
    "LicenseManagerReportGeneratorArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator`

<p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>

> Body parameter

```json
{
  "LicenseManagerReportGeneratorArn": {}
}
```

<h3 id="deletelicensemanagerreportgenerator-parameters">Parameters</h3>

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
|body|body|[DeleteLicenseManagerReportGeneratorRequest](#schemadeletelicensemanagerreportgeneratorrequest)|true|none|
|» LicenseManagerReportGeneratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.DeleteLicenseManagerReportGenerator|

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

> 487 Response

```json
null
```

<h3 id="deletelicensemanagerreportgenerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLicenseManagerReportGeneratorResponse](#schemadeletelicensemanagerreportgeneratorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteToken

<a id="opIdDeleteToken"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.DeleteToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.DeleteToken' \
  -d '{
    "TokenId": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.DeleteToken`

Deletes the specified token. Must be called in the license home Region.

> Body parameter

```json
{
  "TokenId": {}
}
```

<h3 id="deletetoken-parameters">Parameters</h3>

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
|body|body|[DeleteTokenRequest](#schemadeletetokenrequest)|true|none|
|» TokenId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.DeleteToken|

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

<h3 id="deletetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTokenResponse](#schemadeletetokenresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|RedirectException|[RedirectException](#schemaredirectexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExtendLicenseConsumption

<a id="opIdExtendLicenseConsumption"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ExtendLicenseConsumption' \
  -d '{
    "LicenseConsumptionToken": {},
    "DryRun": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption`

Extends the expiration date for license consumption.

> Body parameter

```json
{
  "LicenseConsumptionToken": {},
  "DryRun": {}
}
```

<h3 id="extendlicenseconsumption-parameters">Parameters</h3>

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
|body|body|[ExtendLicenseConsumptionRequest](#schemaextendlicenseconsumptionrequest)|true|none|
|» LicenseConsumptionToken|body|object|true|none|
|» DryRun|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ExtendLicenseConsumption|

> Example responses

> 200 Response

```json
{
  "LicenseConsumptionToken": {},
  "Expiration": {}
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

<h3 id="extendlicenseconsumption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExtendLicenseConsumptionResponse](#schemaextendlicenseconsumptionresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessToken

<a id="opIdGetAccessToken"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetAccessToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetAccessToken' \
  -d '{
    "Token": {},
    "TokenProperties": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetAccessToken`

Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.

> Body parameter

```json
{
  "Token": {},
  "TokenProperties": {}
}
```

<h3 id="getaccesstoken-parameters">Parameters</h3>

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
|body|body|[GetAccessTokenRequest](#schemagetaccesstokenrequest)|true|none|
|» Token|body|object|true|none|
|» TokenProperties|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetAccessToken|

> Example responses

> 200 Response

```json
{
  "AccessToken": {}
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

<h3 id="getaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessTokenResponse](#schemagetaccesstokenresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGrant

<a id="opIdGetGrant"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetGrant' \
  -d '{
    "GrantArn": {},
    "Version": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetGrant`

Gets detailed information about the specified grant.

> Body parameter

```json
{
  "GrantArn": {},
  "Version": {}
}
```

<h3 id="getgrant-parameters">Parameters</h3>

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
|body|body|[GetGrantRequest](#schemagetgrantrequest)|true|none|
|» GrantArn|body|object|true|none|
|» Version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetGrant|

> Example responses

> 200 Response

```json
{
  "Grant": {
    "GrantArn": {},
    "GrantName": {},
    "ParentArn": {},
    "LicenseArn": {},
    "GranteePrincipalArn": {},
    "HomeRegion": {},
    "GrantStatus": {},
    "StatusReason": {},
    "Version": {},
    "GrantedOperations": {},
    "Options": {
      "ActivationOverrideBehavior": {}
    }
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

<h3 id="getgrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGrantResponse](#schemagetgrantresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLicense

<a id="opIdGetLicense"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetLicense' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetLicense' \
  -d '{
    "LicenseArn": {},
    "Version": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetLicense`

Gets detailed information about the specified license.

> Body parameter

```json
{
  "LicenseArn": {},
  "Version": {}
}
```

<h3 id="getlicense-parameters">Parameters</h3>

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
|body|body|[GetLicenseRequest](#schemagetlicenserequest)|true|none|
|» LicenseArn|body|object|true|none|
|» Version|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetLicense|

> Example responses

> 200 Response

```json
{
  "License": {
    "LicenseArn": {},
    "LicenseName": {},
    "ProductName": {},
    "ProductSKU": {},
    "Issuer": {
      "Name": {},
      "SignKey": {},
      "KeyFingerprint": {}
    },
    "HomeRegion": {},
    "Status": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "Beneficiary": {},
    "Entitlements": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "LicenseMetadata": {},
    "CreateTime": {},
    "Version": {}
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

<h3 id="getlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseResponse](#schemagetlicenseresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLicenseConfiguration

<a id="opIdGetLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetLicenseConfiguration' \
  -d '{
    "LicenseConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration`

Gets detailed information about the specified license configuration.

> Body parameter

```json
{
  "LicenseConfigurationArn": {}
}
```

<h3 id="getlicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[GetLicenseConfigurationRequest](#schemagetlicenseconfigurationrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetLicenseConfiguration|

> Example responses

> 200 Response

```json
{
  "LicenseConfigurationId": {},
  "LicenseConfigurationArn": {},
  "Name": {},
  "Description": {},
  "LicenseCountingType": {},
  "LicenseRules": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "ConsumedLicenses": {},
  "Status": {},
  "OwnerAccountId": {},
  "ConsumedLicenseSummaryList": {},
  "ManagedResourceSummaryList": {},
  "Tags": {},
  "ProductInformationList": {},
  "AutomatedDiscoveryInformation": {
    "LastRunTime": {}
  },
  "DisassociateWhenNotFound": {}
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

<h3 id="getlicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseConfigurationResponse](#schemagetlicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLicenseConversionTask

<a id="opIdGetLicenseConversionTask"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetLicenseConversionTask' \
  -d '{
    "LicenseConversionTaskId": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask`

Gets information about the specified license type conversion task.

> Body parameter

```json
{
  "LicenseConversionTaskId": {}
}
```

<h3 id="getlicenseconversiontask-parameters">Parameters</h3>

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
|body|body|[GetLicenseConversionTaskRequest](#schemagetlicenseconversiontaskrequest)|true|none|
|» LicenseConversionTaskId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetLicenseConversionTask|

> Example responses

> 200 Response

```json
{
  "LicenseConversionTaskId": {},
  "ResourceArn": {},
  "SourceLicenseContext": {
    "UsageOperation": {}
  },
  "DestinationLicenseContext": {
    "UsageOperation": {}
  },
  "StatusMessage": {},
  "Status": {},
  "StartTime": {},
  "LicenseConversionTime": {},
  "EndTime": {}
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

<h3 id="getlicenseconversiontask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseConversionTaskResponse](#schemagetlicenseconversiontaskresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLicenseManagerReportGenerator

<a id="opIdGetLicenseManagerReportGenerator"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetLicenseManagerReportGenerator' \
  -d '{
    "LicenseManagerReportGeneratorArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator`

Gets information about the specified report generator.

> Body parameter

```json
{
  "LicenseManagerReportGeneratorArn": {}
}
```

<h3 id="getlicensemanagerreportgenerator-parameters">Parameters</h3>

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
|body|body|[GetLicenseManagerReportGeneratorRequest](#schemagetlicensemanagerreportgeneratorrequest)|true|none|
|» LicenseManagerReportGeneratorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetLicenseManagerReportGenerator|

> Example responses

> 200 Response

```json
{
  "ReportGenerator": {
    "ReportGeneratorName": {},
    "ReportType": {},
    "ReportContext": {
      "licenseConfigurationArns": {}
    },
    "ReportFrequency": {
      "value": {},
      "period": {}
    },
    "LicenseManagerReportGeneratorArn": {},
    "LastRunStatus": {},
    "LastRunFailureReason": {},
    "LastReportGenerationTime": {},
    "ReportCreatorAccount": {},
    "Description": {},
    "S3Location": {
      "bucket": {},
      "keyPrefix": {}
    },
    "CreateTime": {},
    "Tags": {}
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

<h3 id="getlicensemanagerreportgenerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseManagerReportGeneratorResponse](#schemagetlicensemanagerreportgeneratorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLicenseUsage

<a id="opIdGetLicenseUsage"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetLicenseUsage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetLicenseUsage' \
  -d '{
    "LicenseArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetLicenseUsage`

Gets detailed information about the usage of the specified license.

> Body parameter

```json
{
  "LicenseArn": {}
}
```

<h3 id="getlicenseusage-parameters">Parameters</h3>

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
|body|body|[GetLicenseUsageRequest](#schemagetlicenseusagerequest)|true|none|
|» LicenseArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetLicenseUsage|

> Example responses

> 200 Response

```json
{
  "LicenseUsage": {
    "EntitlementUsages": {}
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

<h3 id="getlicenseusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseUsageResponse](#schemagetlicenseusageresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceSettings

<a id="opIdGetServiceSettings"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.GetServiceSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.GetServiceSettings' \
  -d '{}'
```

`POST /#X-Amz-Target=AWSLicenseManager.GetServiceSettings`

Gets the License Manager settings for the current Region.

> Body parameter

```json
{}
```

<h3 id="getservicesettings-parameters">Parameters</h3>

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
|body|body|[GetServiceSettingsRequest](#schemagetservicesettingsrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.GetServiceSettings|

> Example responses

> 200 Response

```json
{
  "S3BucketArn": {},
  "SnsTopicArn": {},
  "OrganizationConfiguration": {
    "EnableIntegration": {}
  },
  "EnableCrossAccountsDiscovery": {},
  "LicenseManagerResourceShareArn": {}
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

<h3 id="getservicesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceSettingsResponse](#schemagetservicesettingsresponse)|
|480|480|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssociationsForLicenseConfiguration

<a id="opIdListAssociationsForLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListAssociationsForLicenseConfiguration' \
  -d '{
    "LicenseConfigurationArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration`

<p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>

> Body parameter

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listassociationsforlicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[ListAssociationsForLicenseConfigurationRequest](#schemalistassociationsforlicenseconfigurationrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListAssociationsForLicenseConfiguration|

> Example responses

> 200 Response

```json
{
  "LicenseConfigurationAssociations": {},
  "NextToken": {}
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

<h3 id="listassociationsforlicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssociationsForLicenseConfigurationResponse](#schemalistassociationsforlicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|FilterLimitExceededException|[FilterLimitExceededException](#schemafilterlimitexceededexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributedGrants

<a id="opIdListDistributedGrants"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListDistributedGrants' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListDistributedGrants' \
  -d '{
    "GrantArns": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListDistributedGrants`

Lists the grants distributed for the specified license.

> Body parameter

```json
{
  "GrantArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listdistributedgrants-parameters">Parameters</h3>

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
|body|body|[ListDistributedGrantsRequest](#schemalistdistributedgrantsrequest)|true|none|
|» GrantArns|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListDistributedGrants|

> Example responses

> 200 Response

```json
{
  "Grants": {},
  "NextToken": {}
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

<h3 id="listdistributedgrants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributedGrantsResponse](#schemalistdistributedgrantsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFailuresForLicenseConfigurationOperations

<a id="opIdListFailuresForLicenseConfigurationOperations"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListFailuresForLicenseConfigurationOperations' \
  -d '{
    "LicenseConfigurationArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations`

Lists the license configuration operations that failed.

> Body parameter

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listfailuresforlicenseconfigurationoperations-parameters">Parameters</h3>

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
|body|body|[ListFailuresForLicenseConfigurationOperationsRequest](#schemalistfailuresforlicenseconfigurationoperationsrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListFailuresForLicenseConfigurationOperations|

> Example responses

> 200 Response

```json
{
  "LicenseOperationFailureList": {},
  "NextToken": {}
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

<h3 id="listfailuresforlicenseconfigurationoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFailuresForLicenseConfigurationOperationsResponse](#schemalistfailuresforlicenseconfigurationoperationsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenseConfigurations

<a id="opIdListLicenseConfigurations"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenseConfigurations' \
  -d '{
    "LicenseConfigurationArns": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations`

Lists the license configurations for your account.

> Body parameter

```json
{
  "LicenseConfigurationArns": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listlicenseconfigurations-parameters">Parameters</h3>

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
|body|body|[ListLicenseConfigurationsRequest](#schemalistlicenseconfigurationsrequest)|true|none|
|» LicenseConfigurationArns|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenseConfigurations|

> Example responses

> 200 Response

```json
{
  "LicenseConfigurations": {},
  "NextToken": {}
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

<h3 id="listlicenseconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicenseConfigurationsResponse](#schemalistlicenseconfigurationsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|FilterLimitExceededException|[FilterLimitExceededException](#schemafilterlimitexceededexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenseConversionTasks

<a id="opIdListLicenseConversionTasks"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenseConversionTasks' \
  -d '{
    "NextToken": {},
    "MaxResults": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks`

Lists the license type conversion tasks for your account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

<h3 id="listlicenseconversiontasks-parameters">Parameters</h3>

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
|body|body|[ListLicenseConversionTasksRequest](#schemalistlicenseconversiontasksrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenseConversionTasks|

> Example responses

> 200 Response

```json
{
  "LicenseConversionTasks": {},
  "NextToken": {}
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

<h3 id="listlicenseconversiontasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicenseConversionTasksResponse](#schemalistlicenseconversiontasksresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenseManagerReportGenerators

<a id="opIdListLicenseManagerReportGenerators"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenseManagerReportGenerators' \
  -d '{
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators`

Lists the report generators for your account.

> Body parameter

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlicensemanagerreportgenerators-parameters">Parameters</h3>

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
|body|body|[ListLicenseManagerReportGeneratorsRequest](#schemalistlicensemanagerreportgeneratorsrequest)|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenseManagerReportGenerators|

> Example responses

> 200 Response

```json
{
  "ReportGenerators": {},
  "NextToken": {}
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

<h3 id="listlicensemanagerreportgenerators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicenseManagerReportGeneratorsResponse](#schemalistlicensemanagerreportgeneratorsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|486|486|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|487|487|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenseSpecificationsForResource

<a id="opIdListLicenseSpecificationsForResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenseSpecificationsForResource' \
  -d '{
    "ResourceArn": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource`

Describes the license configurations for the specified resource.

> Body parameter

```json
{
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listlicensespecificationsforresource-parameters">Parameters</h3>

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
|body|body|[ListLicenseSpecificationsForResourceRequest](#schemalistlicensespecificationsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenseSpecificationsForResource|

> Example responses

> 200 Response

```json
{
  "LicenseSpecifications": {},
  "NextToken": {}
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

<h3 id="listlicensespecificationsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicenseSpecificationsForResourceResponse](#schemalistlicensespecificationsforresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenseVersions

<a id="opIdListLicenseVersions"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenseVersions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenseVersions' \
  -d '{
    "LicenseArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenseVersions`

Lists all versions of the specified license.

> Body parameter

```json
{
  "LicenseArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlicenseversions-parameters">Parameters</h3>

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
|body|body|[ListLicenseVersionsRequest](#schemalistlicenseversionsrequest)|true|none|
|» LicenseArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenseVersions|

> Example responses

> 200 Response

```json
{
  "Licenses": {},
  "NextToken": {}
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

<h3 id="listlicenseversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicenseVersionsResponse](#schemalistlicenseversionsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLicenses

<a id="opIdListLicenses"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListLicenses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListLicenses' \
  -d '{
    "LicenseArns": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListLicenses`

Lists the licenses for your account.

> Body parameter

```json
{
  "LicenseArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listlicenses-parameters">Parameters</h3>

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
|body|body|[ListLicensesRequest](#schemalistlicensesrequest)|true|none|
|» LicenseArns|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListLicenses|

> Example responses

> 200 Response

```json
{
  "Licenses": {},
  "NextToken": {}
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

<h3 id="listlicenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLicensesResponse](#schemalistlicensesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReceivedGrants

<a id="opIdListReceivedGrants"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListReceivedGrants' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListReceivedGrants' \
  -d '{
    "GrantArns": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListReceivedGrants`

Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.

> Body parameter

```json
{
  "GrantArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreceivedgrants-parameters">Parameters</h3>

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
|body|body|[ListReceivedGrantsRequest](#schemalistreceivedgrantsrequest)|true|none|
|» GrantArns|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListReceivedGrants|

> Example responses

> 200 Response

```json
{
  "Grants": {},
  "NextToken": {}
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

<h3 id="listreceivedgrants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceivedGrantsResponse](#schemalistreceivedgrantsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReceivedGrantsForOrganization

<a id="opIdListReceivedGrantsForOrganization"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListReceivedGrantsForOrganization' \
  -d '{
    "LicenseArn": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization`

Lists the grants received for all accounts in the organization.

> Body parameter

```json
{
  "LicenseArn": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreceivedgrantsfororganization-parameters">Parameters</h3>

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
|body|body|[ListReceivedGrantsForOrganizationRequest](#schemalistreceivedgrantsfororganizationrequest)|true|none|
|» LicenseArn|body|object|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListReceivedGrantsForOrganization|

> Example responses

> 200 Response

```json
{
  "Grants": {},
  "NextToken": {}
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

<h3 id="listreceivedgrantsfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceivedGrantsForOrganizationResponse](#schemalistreceivedgrantsfororganizationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReceivedLicenses

<a id="opIdListReceivedLicenses"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListReceivedLicenses' \
  -d '{
    "LicenseArns": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses`

Lists received licenses.

> Body parameter

```json
{
  "LicenseArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreceivedlicenses-parameters">Parameters</h3>

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
|body|body|[ListReceivedLicensesRequest](#schemalistreceivedlicensesrequest)|true|none|
|» LicenseArns|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListReceivedLicenses|

> Example responses

> 200 Response

```json
{
  "Licenses": {},
  "NextToken": {}
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

<h3 id="listreceivedlicenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceivedLicensesResponse](#schemalistreceivedlicensesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReceivedLicensesForOrganization

<a id="opIdListReceivedLicensesForOrganization"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListReceivedLicensesForOrganization' \
  -d '{
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization`

Lists the licenses received for all accounts in the organization.

> Body parameter

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listreceivedlicensesfororganization-parameters">Parameters</h3>

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
|body|body|[ListReceivedLicensesForOrganizationRequest](#schemalistreceivedlicensesfororganizationrequest)|true|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListReceivedLicensesForOrganization|

> Example responses

> 200 Response

```json
{
  "Licenses": {},
  "NextToken": {}
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

<h3 id="listreceivedlicensesfororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReceivedLicensesForOrganizationResponse](#schemalistreceivedlicensesfororganizationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceInventory

<a id="opIdListResourceInventory"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListResourceInventory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListResourceInventory' \
  -d '{
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListResourceInventory`

Lists resources managed using Systems Manager inventory.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listresourceinventory-parameters">Parameters</h3>

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
|body|body|[ListResourceInventoryRequest](#schemalistresourceinventoryrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListResourceInventory|

> Example responses

> 200 Response

```json
{
  "ResourceInventoryList": {},
  "NextToken": {}
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

<h3 id="listresourceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceInventoryResponse](#schemalistresourceinventoryresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|FilterLimitExceededException|[FilterLimitExceededException](#schemafilterlimitexceededexception)|
|483|483|FailedDependencyException|[FailedDependencyException](#schemafaileddependencyexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListTagsForResource`

Lists the tags for the specified license configuration.

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "Tags": {}
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTokens

<a id="opIdListTokens"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListTokens' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListTokens' \
  -d '{
    "TokenIds": {},
    "Filters": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListTokens`

Lists your tokens.

> Body parameter

```json
{
  "TokenIds": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listtokens-parameters">Parameters</h3>

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
|body|body|[ListTokensRequest](#schemalisttokensrequest)|true|none|
|» TokenIds|body|object|false|none|
|» Filters|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListTokens|

> Example responses

> 200 Response

```json
{
  "Tokens": {},
  "NextToken": {}
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

<h3 id="listtokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTokensResponse](#schemalisttokensresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|484|484|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListUsageForLicenseConfiguration

<a id="opIdListUsageForLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.ListUsageForLicenseConfiguration' \
  -d '{
    "LicenseConfigurationArn": {},
    "MaxResults": {},
    "NextToken": {},
    "Filters": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration`

Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.

> Body parameter

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

<h3 id="listusageforlicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[ListUsageForLicenseConfigurationRequest](#schemalistusageforlicenseconfigurationrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|
|» Filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.ListUsageForLicenseConfiguration|

> Example responses

> 200 Response

```json
{
  "LicenseConfigurationUsageList": {},
  "NextToken": {}
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

<h3 id="listusageforlicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsageForLicenseConfigurationResponse](#schemalistusageforlicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|FilterLimitExceededException|[FilterLimitExceededException](#schemafilterlimitexceededexception)|
|482|482|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|483|483|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectGrant

<a id="opIdRejectGrant"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.RejectGrant' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.RejectGrant' \
  -d '{
    "GrantArn": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.RejectGrant`

Rejects the specified grant.

> Body parameter

```json
{
  "GrantArn": {}
}
```

<h3 id="rejectgrant-parameters">Parameters</h3>

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
|body|body|[RejectGrantRequest](#schemarejectgrantrequest)|true|none|
|» GrantArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.RejectGrant|

> Example responses

> 200 Response

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
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

<h3 id="rejectgrant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectGrantResponse](#schemarejectgrantresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|
|486|486|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.TagResource`

Adds the specified tags to the specified license configuration.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.UntagResource`

Removes the specified tags from the specified license configuration.

> Body parameter

```json
{
  "ResourceArn": {},
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
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLicenseConfiguration

<a id="opIdUpdateLicenseConfiguration"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.UpdateLicenseConfiguration' \
  -d '{
    "LicenseConfigurationArn": {},
    "LicenseConfigurationStatus": {},
    "LicenseRules": {},
    "LicenseCount": {},
    "LicenseCountHardLimit": {},
    "Name": {},
    "Description": {},
    "ProductInformationList": {},
    "DisassociateWhenNotFound": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration`

Modifies the attributes of an existing license configuration.

> Body parameter

```json
{
  "LicenseConfigurationArn": {},
  "LicenseConfigurationStatus": {},
  "LicenseRules": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "Name": {},
  "Description": {},
  "ProductInformationList": {},
  "DisassociateWhenNotFound": {}
}
```

<h3 id="updatelicenseconfiguration-parameters">Parameters</h3>

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
|body|body|[UpdateLicenseConfigurationRequest](#schemaupdatelicenseconfigurationrequest)|true|none|
|» LicenseConfigurationArn|body|object|true|none|
|» LicenseConfigurationStatus|body|object|false|none|
|» LicenseRules|body|object|false|none|
|» LicenseCount|body|object|false|none|
|» LicenseCountHardLimit|body|object|false|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» ProductInformationList|body|object|false|none|
|» DisassociateWhenNotFound|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.UpdateLicenseConfiguration|

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

<h3 id="updatelicenseconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLicenseConfigurationResponse](#schemaupdatelicenseconfigurationresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|485|485|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLicenseManagerReportGenerator

<a id="opIdUpdateLicenseManagerReportGenerator"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.UpdateLicenseManagerReportGenerator' \
  -d '{
    "LicenseManagerReportGeneratorArn": {},
    "ReportGeneratorName": {},
    "Type": {},
    "ReportContext": {
      "licenseConfigurationArns": {}
    },
    "ReportFrequency": {
      "value": {},
      "period": {}
    },
    "ClientToken": {},
    "Description": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator`

<p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>

> Body parameter

```json
{
  "LicenseManagerReportGeneratorArn": {},
  "ReportGeneratorName": {},
  "Type": {},
  "ReportContext": {
    "licenseConfigurationArns": {}
  },
  "ReportFrequency": {
    "value": {},
    "period": {}
  },
  "ClientToken": {},
  "Description": {}
}
```

<h3 id="updatelicensemanagerreportgenerator-parameters">Parameters</h3>

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
|body|body|[UpdateLicenseManagerReportGeneratorRequest](#schemaupdatelicensemanagerreportgeneratorrequest)|true|none|
|» LicenseManagerReportGeneratorArn|body|object|true|none|
|» ReportGeneratorName|body|object|true|none|
|» Type|body|object|true|none|
|» ReportContext|body|object|true|none|
|» » licenseConfigurationArns|body|object|true|none|
|» ReportFrequency|body|object|true|none|
|» » value|body|object|false|none|
|» » period|body|object|false|none|
|» ClientToken|body|object|true|none|
|» Description|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.UpdateLicenseManagerReportGenerator|

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

> 487 Response

```json
null
```

<h3 id="updatelicensemanagerreportgenerator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLicenseManagerReportGeneratorResponse](#schemaupdatelicensemanagerreportgeneratorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|482|482|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|487|487|ResourceLimitExceededException|[ResourceLimitExceededException](#schemaresourcelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateLicenseSpecificationsForResource

<a id="opIdUpdateLicenseSpecificationsForResource"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.UpdateLicenseSpecificationsForResource' \
  -d '{
    "ResourceArn": {},
    "AddLicenseSpecifications": {},
    "RemoveLicenseSpecifications": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource`

<p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>

> Body parameter

```json
{
  "ResourceArn": {},
  "AddLicenseSpecifications": {},
  "RemoveLicenseSpecifications": {}
}
```

<h3 id="updatelicensespecificationsforresource-parameters">Parameters</h3>

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
|body|body|[UpdateLicenseSpecificationsForResourceRequest](#schemaupdatelicensespecificationsforresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» AddLicenseSpecifications|body|object|false|none|
|» RemoveLicenseSpecifications|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.UpdateLicenseSpecificationsForResource|

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

<h3 id="updatelicensespecificationsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateLicenseSpecificationsForResourceResponse](#schemaupdatelicensespecificationsforresourceresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|482|482|LicenseUsageException|[LicenseUsageException](#schemalicenseusageexception)|
|483|483|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|484|484|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceSettings

<a id="opIdUpdateServiceSettings"></a>

> Code samples

```bash
curl 'https://license-manager.us-east-1.amazonaws.com/#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWSLicenseManager.UpdateServiceSettings' \
  -d '{
    "S3BucketArn": {},
    "SnsTopicArn": {},
    "OrganizationConfiguration": {
      "EnableIntegration": {}
    },
    "EnableCrossAccountsDiscovery": {}
  }'
```

`POST /#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings`

Updates License Manager settings for the current Region.

> Body parameter

```json
{
  "S3BucketArn": {},
  "SnsTopicArn": {},
  "OrganizationConfiguration": {
    "EnableIntegration": {}
  },
  "EnableCrossAccountsDiscovery": {}
}
```

<h3 id="updateservicesettings-parameters">Parameters</h3>

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
|body|body|[UpdateServiceSettingsRequest](#schemaupdateservicesettingsrequest)|true|none|
|» S3BucketArn|body|object|false|none|
|» SnsTopicArn|body|object|false|none|
|» OrganizationConfiguration|body|object|false|none|
|» » EnableIntegration|body|object|true|none|
|» EnableCrossAccountsDiscovery|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWSLicenseManager.UpdateServiceSettings|

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

<h3 id="updateservicesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceSettingsResponse](#schemaupdateservicesettingsresponse)|
|480|480|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|481|481|ServerInternalException|[ServerInternalException](#schemaserverinternalexception)|
|482|482|AuthorizationException|[AuthorizationException](#schemaauthorizationexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|RateLimitExceededException|[RateLimitExceededException](#schemaratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptGrantResponse">AcceptGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptgrantresponse"></a>
<a id="schema_AcceptGrantResponse"></a>
<a id="tocSacceptgrantresponse"></a>
<a id="tocsacceptgrantresponse"></a>

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_AcceptGrantRequest">AcceptGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptgrantrequest"></a>
<a id="schema_AcceptGrantRequest"></a>
<a id="tocSacceptgrantrequest"></a>
<a id="tocsacceptgrantrequest"></a>

```json
{
  "GrantArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_AuthorizationException">AuthorizationException</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationexception"></a>
<a id="schema_AuthorizationException"></a>
<a id="tocSauthorizationexception"></a>
<a id="tocsauthorizationexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_RateLimitExceededException">RateLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitexceededexception"></a>
<a id="schema_RateLimitExceededException"></a>
<a id="tocSratelimitexceededexception"></a>
<a id="tocsratelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceLimitExceededException">ResourceLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelimitexceededexception"></a>
<a id="schema_ResourceLimitExceededException"></a>
<a id="tocSresourcelimitexceededexception"></a>
<a id="tocsresourcelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ServerInternalException">ServerInternalException</h2>
<!-- backwards compatibility -->
<a id="schemaserverinternalexception"></a>
<a id="schema_ServerInternalException"></a>
<a id="tocSserverinternalexception"></a>
<a id="tocsserverinternalexception"></a>

```json
null
```

<h2 id="tocS_CheckInLicenseResponse">CheckInLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckinlicenseresponse"></a>
<a id="schema_CheckInLicenseResponse"></a>
<a id="tocScheckinlicenseresponse"></a>
<a id="tocscheckinlicenseresponse"></a>

```json
{}
```

<h2 id="tocS_CheckInLicenseRequest">CheckInLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckinlicenserequest"></a>
<a id="schema_CheckInLicenseRequest"></a>
<a id="tocScheckinlicenserequest"></a>
<a id="tocscheckinlicenserequest"></a>

```json
{
  "LicenseConsumptionToken": {},
  "Beneficiary": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConsumptionToken|object|true|none|none|
|Beneficiary|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CheckoutBorrowLicenseResponse">CheckoutBorrowLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutborrowlicenseresponse"></a>
<a id="schema_CheckoutBorrowLicenseResponse"></a>
<a id="tocScheckoutborrowlicenseresponse"></a>
<a id="tocscheckoutborrowlicenseresponse"></a>

```json
{
  "LicenseArn": {},
  "LicenseConsumptionToken": {},
  "EntitlementsAllowed": {},
  "NodeId": {},
  "SignedToken": {},
  "IssuedAt": {},
  "Expiration": {},
  "CheckoutMetadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|false|none|none|
|LicenseConsumptionToken|object|false|none|none|
|EntitlementsAllowed|object|false|none|none|
|NodeId|object|false|none|none|
|SignedToken|object|false|none|none|
|IssuedAt|object|false|none|none|
|Expiration|object|false|none|none|
|CheckoutMetadata|object|false|none|none|

<h2 id="tocS_CheckoutBorrowLicenseRequest">CheckoutBorrowLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutborrowlicenserequest"></a>
<a id="schema_CheckoutBorrowLicenseRequest"></a>
<a id="tocScheckoutborrowlicenserequest"></a>
<a id="tocscheckoutborrowlicenserequest"></a>

```json
{
  "LicenseArn": {},
  "Entitlements": {},
  "DigitalSignatureMethod": {},
  "NodeId": {},
  "CheckoutMetadata": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|Entitlements|object|true|none|none|
|DigitalSignatureMethod|object|true|none|none|
|NodeId|object|false|none|none|
|CheckoutMetadata|object|false|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_NoEntitlementsAllowedException">NoEntitlementsAllowedException</h2>
<!-- backwards compatibility -->
<a id="schemanoentitlementsallowedexception"></a>
<a id="schema_NoEntitlementsAllowedException"></a>
<a id="tocSnoentitlementsallowedexception"></a>
<a id="tocsnoentitlementsallowedexception"></a>

```json
null
```

<h2 id="tocS_EntitlementNotAllowedException">EntitlementNotAllowedException</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementnotallowedexception"></a>
<a id="schema_EntitlementNotAllowedException"></a>
<a id="tocSentitlementnotallowedexception"></a>
<a id="tocsentitlementnotallowedexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedDigitalSignatureMethodException">UnsupportedDigitalSignatureMethodException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupporteddigitalsignaturemethodexception"></a>
<a id="schema_UnsupportedDigitalSignatureMethodException"></a>
<a id="tocSunsupporteddigitalsignaturemethodexception"></a>
<a id="tocsunsupporteddigitalsignaturemethodexception"></a>

```json
null
```

<h2 id="tocS_RedirectException">RedirectException</h2>
<!-- backwards compatibility -->
<a id="schemaredirectexception"></a>
<a id="schema_RedirectException"></a>
<a id="tocSredirectexception"></a>
<a id="tocsredirectexception"></a>

```json
null
```

<h2 id="tocS_CheckoutLicenseResponse">CheckoutLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutlicenseresponse"></a>
<a id="schema_CheckoutLicenseResponse"></a>
<a id="tocScheckoutlicenseresponse"></a>
<a id="tocscheckoutlicenseresponse"></a>

```json
{
  "CheckoutType": {},
  "LicenseConsumptionToken": {},
  "EntitlementsAllowed": {},
  "SignedToken": {},
  "NodeId": {},
  "IssuedAt": {},
  "Expiration": {},
  "LicenseArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckoutType|object|false|none|none|
|LicenseConsumptionToken|object|false|none|none|
|EntitlementsAllowed|object|false|none|none|
|SignedToken|object|false|none|none|
|NodeId|object|false|none|none|
|IssuedAt|object|false|none|none|
|Expiration|object|false|none|none|
|LicenseArn|object|false|none|none|

<h2 id="tocS_CheckoutLicenseRequest">CheckoutLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckoutlicenserequest"></a>
<a id="schema_CheckoutLicenseRequest"></a>
<a id="tocScheckoutlicenserequest"></a>
<a id="tocscheckoutlicenserequest"></a>

```json
{
  "ProductSKU": {},
  "CheckoutType": {},
  "KeyFingerprint": {},
  "Entitlements": {},
  "ClientToken": {},
  "Beneficiary": {},
  "NodeId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductSKU|object|true|none|none|
|CheckoutType|object|true|none|none|
|KeyFingerprint|object|true|none|none|
|Entitlements|object|true|none|none|
|ClientToken|object|true|none|none|
|Beneficiary|object|false|none|none|
|NodeId|object|false|none|none|

<h2 id="tocS_CreateGrantResponse">CreateGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantresponse"></a>
<a id="schema_CreateGrantResponse"></a>
<a id="tocScreategrantresponse"></a>
<a id="tocscreategrantresponse"></a>

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CreateGrantRequest">CreateGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantrequest"></a>
<a id="schema_CreateGrantRequest"></a>
<a id="tocScreategrantrequest"></a>
<a id="tocscreategrantrequest"></a>

```json
{
  "ClientToken": {},
  "GrantName": {},
  "LicenseArn": {},
  "Principals": {},
  "HomeRegion": {},
  "AllowedOperations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|GrantName|object|true|none|none|
|LicenseArn|object|true|none|none|
|Principals|object|true|none|none|
|HomeRegion|object|true|none|none|
|AllowedOperations|object|true|none|none|

<h2 id="tocS_CreateGrantVersionResponse">CreateGrantVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantversionresponse"></a>
<a id="schema_CreateGrantVersionResponse"></a>
<a id="tocScreategrantversionresponse"></a>
<a id="tocscreategrantversionresponse"></a>

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CreateGrantVersionRequest">CreateGrantVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantversionrequest"></a>
<a id="schema_CreateGrantVersionRequest"></a>
<a id="tocScreategrantversionrequest"></a>
<a id="tocscreategrantversionrequest"></a>

```json
{
  "ClientToken": {},
  "GrantArn": {},
  "GrantName": {},
  "AllowedOperations": {},
  "Status": {},
  "StatusReason": {},
  "SourceVersion": {},
  "Options": {
    "ActivationOverrideBehavior": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|GrantArn|object|true|none|none|
|GrantName|object|false|none|none|
|AllowedOperations|object|false|none|none|
|Status|object|false|none|none|
|StatusReason|object|false|none|none|
|SourceVersion|object|false|none|none|
|Options|object|false|none|none|

<h2 id="tocS_CreateLicenseResponse">CreateLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseresponse"></a>
<a id="schema_CreateLicenseResponse"></a>
<a id="tocScreatelicenseresponse"></a>
<a id="tocscreatelicenseresponse"></a>

```json
{
  "LicenseArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CreateLicenseRequest">CreateLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenserequest"></a>
<a id="schema_CreateLicenseRequest"></a>
<a id="tocScreatelicenserequest"></a>
<a id="tocscreatelicenserequest"></a>

```json
{
  "LicenseName": {},
  "ProductName": {},
  "ProductSKU": {},
  "Issuer": {
    "Name": {},
    "SignKey": {}
  },
  "HomeRegion": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "Entitlements": {},
  "Beneficiary": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "LicenseMetadata": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseName|object|true|none|none|
|ProductName|object|true|none|none|
|ProductSKU|object|true|none|none|
|Issuer|object|true|none|none|
|HomeRegion|object|true|none|none|
|Validity|object|true|none|none|
|Entitlements|object|true|none|none|
|Beneficiary|object|true|none|none|
|ConsumptionConfiguration|object|true|none|none|
|LicenseMetadata|object|false|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_CreateLicenseConfigurationResponse">CreateLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseconfigurationresponse"></a>
<a id="schema_CreateLicenseConfigurationResponse"></a>
<a id="tocScreatelicenseconfigurationresponse"></a>
<a id="tocscreatelicenseconfigurationresponse"></a>

```json
{
  "LicenseConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|false|none|none|

<h2 id="tocS_CreateLicenseConfigurationRequest">CreateLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseconfigurationrequest"></a>
<a id="schema_CreateLicenseConfigurationRequest"></a>
<a id="tocScreatelicenseconfigurationrequest"></a>
<a id="tocscreatelicenseconfigurationrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "LicenseCountingType": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "LicenseRules": {},
  "Tags": {},
  "DisassociateWhenNotFound": {},
  "ProductInformationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|LicenseCountingType|object|true|none|none|
|LicenseCount|object|false|none|none|
|LicenseCountHardLimit|object|false|none|none|
|LicenseRules|object|false|none|none|
|Tags|object|false|none|none|
|DisassociateWhenNotFound|object|false|none|none|
|ProductInformationList|object|false|none|none|

<h2 id="tocS_CreateLicenseConversionTaskForResourceResponse">CreateLicenseConversionTaskForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseconversiontaskforresourceresponse"></a>
<a id="schema_CreateLicenseConversionTaskForResourceResponse"></a>
<a id="tocScreatelicenseconversiontaskforresourceresponse"></a>
<a id="tocscreatelicenseconversiontaskforresourceresponse"></a>

```json
{
  "LicenseConversionTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConversionTaskId|object|false|none|none|

<h2 id="tocS_CreateLicenseConversionTaskForResourceRequest">CreateLicenseConversionTaskForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseconversiontaskforresourcerequest"></a>
<a id="schema_CreateLicenseConversionTaskForResourceRequest"></a>
<a id="tocScreatelicenseconversiontaskforresourcerequest"></a>
<a id="tocscreatelicenseconversiontaskforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "SourceLicenseContext": {
    "UsageOperation": {}
  },
  "DestinationLicenseContext": {
    "UsageOperation": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|SourceLicenseContext|object|true|none|none|
|DestinationLicenseContext|object|true|none|none|

<h2 id="tocS_CreateLicenseManagerReportGeneratorResponse">CreateLicenseManagerReportGeneratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicensemanagerreportgeneratorresponse"></a>
<a id="schema_CreateLicenseManagerReportGeneratorResponse"></a>
<a id="tocScreatelicensemanagerreportgeneratorresponse"></a>
<a id="tocscreatelicensemanagerreportgeneratorresponse"></a>

```json
{
  "LicenseManagerReportGeneratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseManagerReportGeneratorArn|object|false|none|none|

<h2 id="tocS_CreateLicenseManagerReportGeneratorRequest">CreateLicenseManagerReportGeneratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicensemanagerreportgeneratorrequest"></a>
<a id="schema_CreateLicenseManagerReportGeneratorRequest"></a>
<a id="tocScreatelicensemanagerreportgeneratorrequest"></a>
<a id="tocscreatelicensemanagerreportgeneratorrequest"></a>

```json
{
  "ReportGeneratorName": {},
  "Type": {},
  "ReportContext": {
    "licenseConfigurationArns": {}
  },
  "ReportFrequency": {
    "value": {},
    "period": {}
  },
  "ClientToken": {},
  "Description": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportGeneratorName|object|true|none|none|
|Type|object|true|none|none|
|ReportContext|object|true|none|none|
|ReportFrequency|object|true|none|none|
|ClientToken|object|true|none|none|
|Description|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateLicenseVersionResponse">CreateLicenseVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseversionresponse"></a>
<a id="schema_CreateLicenseVersionResponse"></a>
<a id="tocScreatelicenseversionresponse"></a>
<a id="tocscreatelicenseversionresponse"></a>

```json
{
  "LicenseArn": {},
  "Version": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|false|none|none|
|Version|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateLicenseVersionRequest">CreateLicenseVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelicenseversionrequest"></a>
<a id="schema_CreateLicenseVersionRequest"></a>
<a id="tocScreatelicenseversionrequest"></a>
<a id="tocscreatelicenseversionrequest"></a>

```json
{
  "LicenseArn": {},
  "LicenseName": {},
  "ProductName": {},
  "Issuer": {
    "Name": {},
    "SignKey": {}
  },
  "HomeRegion": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "LicenseMetadata": {},
  "Entitlements": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "Status": {},
  "ClientToken": {},
  "SourceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|LicenseName|object|true|none|none|
|ProductName|object|true|none|none|
|Issuer|object|true|none|none|
|HomeRegion|object|true|none|none|
|Validity|object|true|none|none|
|LicenseMetadata|object|false|none|none|
|Entitlements|object|true|none|none|
|ConsumptionConfiguration|object|true|none|none|
|Status|object|true|none|none|
|ClientToken|object|true|none|none|
|SourceVersion|object|false|none|none|

<h2 id="tocS_CreateTokenResponse">CreateTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenresponse"></a>
<a id="schema_CreateTokenResponse"></a>
<a id="tocScreatetokenresponse"></a>
<a id="tocscreatetokenresponse"></a>

```json
{
  "TokenId": {},
  "TokenType": {},
  "Token": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenId|object|false|none|none|
|TokenType|object|false|none|none|
|Token|object|false|none|none|

<h2 id="tocS_CreateTokenRequest">CreateTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetokenrequest"></a>
<a id="schema_CreateTokenRequest"></a>
<a id="tocScreatetokenrequest"></a>
<a id="tocscreatetokenrequest"></a>

```json
{
  "LicenseArn": {},
  "RoleArns": {},
  "ExpirationInDays": {},
  "TokenProperties": {},
  "ClientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|RoleArns|object|false|none|none|
|ExpirationInDays|object|false|none|none|
|TokenProperties|object|false|none|none|
|ClientToken|object|true|none|none|

<h2 id="tocS_DeleteGrantResponse">DeleteGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrantresponse"></a>
<a id="schema_DeleteGrantResponse"></a>
<a id="tocSdeletegrantresponse"></a>
<a id="tocsdeletegrantresponse"></a>

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_DeleteGrantRequest">DeleteGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegrantrequest"></a>
<a id="schema_DeleteGrantRequest"></a>
<a id="tocSdeletegrantrequest"></a>
<a id="tocsdeletegrantrequest"></a>

```json
{
  "GrantArn": {},
  "StatusReason": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|true|none|none|
|StatusReason|object|false|none|none|
|Version|object|true|none|none|

<h2 id="tocS_DeleteLicenseResponse">DeleteLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicenseresponse"></a>
<a id="schema_DeleteLicenseResponse"></a>
<a id="tocSdeletelicenseresponse"></a>
<a id="tocsdeletelicenseresponse"></a>

```json
{
  "Status": {},
  "DeletionDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|DeletionDate|object|false|none|none|

<h2 id="tocS_DeleteLicenseRequest">DeleteLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicenserequest"></a>
<a id="schema_DeleteLicenseRequest"></a>
<a id="tocSdeletelicenserequest"></a>
<a id="tocsdeletelicenserequest"></a>

```json
{
  "LicenseArn": {},
  "SourceVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|SourceVersion|object|true|none|none|

<h2 id="tocS_DeleteLicenseConfigurationResponse">DeleteLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicenseconfigurationresponse"></a>
<a id="schema_DeleteLicenseConfigurationResponse"></a>
<a id="tocSdeletelicenseconfigurationresponse"></a>
<a id="tocsdeletelicenseconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLicenseConfigurationRequest">DeleteLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicenseconfigurationrequest"></a>
<a id="schema_DeleteLicenseConfigurationRequest"></a>
<a id="tocSdeletelicenseconfigurationrequest"></a>
<a id="tocsdeletelicenseconfigurationrequest"></a>

```json
{
  "LicenseConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|

<h2 id="tocS_DeleteLicenseManagerReportGeneratorResponse">DeleteLicenseManagerReportGeneratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicensemanagerreportgeneratorresponse"></a>
<a id="schema_DeleteLicenseManagerReportGeneratorResponse"></a>
<a id="tocSdeletelicensemanagerreportgeneratorresponse"></a>
<a id="tocsdeletelicensemanagerreportgeneratorresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteLicenseManagerReportGeneratorRequest">DeleteLicenseManagerReportGeneratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelicensemanagerreportgeneratorrequest"></a>
<a id="schema_DeleteLicenseManagerReportGeneratorRequest"></a>
<a id="tocSdeletelicensemanagerreportgeneratorrequest"></a>
<a id="tocsdeletelicensemanagerreportgeneratorrequest"></a>

```json
{
  "LicenseManagerReportGeneratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseManagerReportGeneratorArn|object|true|none|none|

<h2 id="tocS_DeleteTokenResponse">DeleteTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetokenresponse"></a>
<a id="schema_DeleteTokenResponse"></a>
<a id="tocSdeletetokenresponse"></a>
<a id="tocsdeletetokenresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTokenRequest">DeleteTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetokenrequest"></a>
<a id="schema_DeleteTokenRequest"></a>
<a id="tocSdeletetokenrequest"></a>
<a id="tocsdeletetokenrequest"></a>

```json
{
  "TokenId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenId|object|true|none|none|

<h2 id="tocS_ExtendLicenseConsumptionResponse">ExtendLicenseConsumptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextendlicenseconsumptionresponse"></a>
<a id="schema_ExtendLicenseConsumptionResponse"></a>
<a id="tocSextendlicenseconsumptionresponse"></a>
<a id="tocsextendlicenseconsumptionresponse"></a>

```json
{
  "LicenseConsumptionToken": {},
  "Expiration": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConsumptionToken|object|false|none|none|
|Expiration|object|false|none|none|

<h2 id="tocS_ExtendLicenseConsumptionRequest">ExtendLicenseConsumptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendlicenseconsumptionrequest"></a>
<a id="schema_ExtendLicenseConsumptionRequest"></a>
<a id="tocSextendlicenseconsumptionrequest"></a>
<a id="tocsextendlicenseconsumptionrequest"></a>

```json
{
  "LicenseConsumptionToken": {},
  "DryRun": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConsumptionToken|object|true|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_GetAccessTokenResponse">GetAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesstokenresponse"></a>
<a id="schema_GetAccessTokenResponse"></a>
<a id="tocSgetaccesstokenresponse"></a>
<a id="tocsgetaccesstokenresponse"></a>

```json
{
  "AccessToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|object|false|none|none|

<h2 id="tocS_GetAccessTokenRequest">GetAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesstokenrequest"></a>
<a id="schema_GetAccessTokenRequest"></a>
<a id="tocSgetaccesstokenrequest"></a>
<a id="tocsgetaccesstokenrequest"></a>

```json
{
  "Token": {},
  "TokenProperties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Token|object|true|none|none|
|TokenProperties|object|false|none|none|

<h2 id="tocS_GetGrantResponse">GetGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgrantresponse"></a>
<a id="schema_GetGrantResponse"></a>
<a id="tocSgetgrantresponse"></a>
<a id="tocsgetgrantresponse"></a>

```json
{
  "Grant": {
    "GrantArn": {},
    "GrantName": {},
    "ParentArn": {},
    "LicenseArn": {},
    "GranteePrincipalArn": {},
    "HomeRegion": {},
    "GrantStatus": {},
    "StatusReason": {},
    "Version": {},
    "GrantedOperations": {},
    "Options": {
      "ActivationOverrideBehavior": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grant|object|false|none|none|

<h2 id="tocS_GetGrantRequest">GetGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgrantrequest"></a>
<a id="schema_GetGrantRequest"></a>
<a id="tocSgetgrantrequest"></a>
<a id="tocsgetgrantrequest"></a>

```json
{
  "GrantArn": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|true|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetLicenseResponse">GetLicenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseresponse"></a>
<a id="schema_GetLicenseResponse"></a>
<a id="tocSgetlicenseresponse"></a>
<a id="tocsgetlicenseresponse"></a>

```json
{
  "License": {
    "LicenseArn": {},
    "LicenseName": {},
    "ProductName": {},
    "ProductSKU": {},
    "Issuer": {
      "Name": {},
      "SignKey": {},
      "KeyFingerprint": {}
    },
    "HomeRegion": {},
    "Status": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "Beneficiary": {},
    "Entitlements": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "LicenseMetadata": {},
    "CreateTime": {},
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|License|object|false|none|none|

<h2 id="tocS_GetLicenseRequest">GetLicenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenserequest"></a>
<a id="schema_GetLicenseRequest"></a>
<a id="tocSgetlicenserequest"></a>
<a id="tocsgetlicenserequest"></a>

```json
{
  "LicenseArn": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|Version|object|false|none|none|

<h2 id="tocS_GetLicenseConfigurationResponse">GetLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseconfigurationresponse"></a>
<a id="schema_GetLicenseConfigurationResponse"></a>
<a id="tocSgetlicenseconfigurationresponse"></a>
<a id="tocsgetlicenseconfigurationresponse"></a>

```json
{
  "LicenseConfigurationId": {},
  "LicenseConfigurationArn": {},
  "Name": {},
  "Description": {},
  "LicenseCountingType": {},
  "LicenseRules": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "ConsumedLicenses": {},
  "Status": {},
  "OwnerAccountId": {},
  "ConsumedLicenseSummaryList": {},
  "ManagedResourceSummaryList": {},
  "Tags": {},
  "ProductInformationList": {},
  "AutomatedDiscoveryInformation": {
    "LastRunTime": {}
  },
  "DisassociateWhenNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationId|object|false|none|none|
|LicenseConfigurationArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LicenseCountingType|object|false|none|none|
|LicenseRules|object|false|none|none|
|LicenseCount|object|false|none|none|
|LicenseCountHardLimit|object|false|none|none|
|ConsumedLicenses|object|false|none|none|
|Status|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|ConsumedLicenseSummaryList|object|false|none|none|
|ManagedResourceSummaryList|object|false|none|none|
|Tags|object|false|none|none|
|ProductInformationList|object|false|none|none|
|AutomatedDiscoveryInformation|object|false|none|none|
|DisassociateWhenNotFound|object|false|none|none|

<h2 id="tocS_GetLicenseConfigurationRequest">GetLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseconfigurationrequest"></a>
<a id="schema_GetLicenseConfigurationRequest"></a>
<a id="tocSgetlicenseconfigurationrequest"></a>
<a id="tocsgetlicenseconfigurationrequest"></a>

```json
{
  "LicenseConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|

<h2 id="tocS_GetLicenseConversionTaskResponse">GetLicenseConversionTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseconversiontaskresponse"></a>
<a id="schema_GetLicenseConversionTaskResponse"></a>
<a id="tocSgetlicenseconversiontaskresponse"></a>
<a id="tocsgetlicenseconversiontaskresponse"></a>

```json
{
  "LicenseConversionTaskId": {},
  "ResourceArn": {},
  "SourceLicenseContext": {
    "UsageOperation": {}
  },
  "DestinationLicenseContext": {
    "UsageOperation": {}
  },
  "StatusMessage": {},
  "Status": {},
  "StartTime": {},
  "LicenseConversionTime": {},
  "EndTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConversionTaskId|object|false|none|none|
|ResourceArn|object|false|none|none|
|SourceLicenseContext|object|false|none|none|
|DestinationLicenseContext|object|false|none|none|
|StatusMessage|object|false|none|none|
|Status|object|false|none|none|
|StartTime|object|false|none|none|
|LicenseConversionTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_GetLicenseConversionTaskRequest">GetLicenseConversionTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseconversiontaskrequest"></a>
<a id="schema_GetLicenseConversionTaskRequest"></a>
<a id="tocSgetlicenseconversiontaskrequest"></a>
<a id="tocsgetlicenseconversiontaskrequest"></a>

```json
{
  "LicenseConversionTaskId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConversionTaskId|object|true|none|none|

<h2 id="tocS_GetLicenseManagerReportGeneratorResponse">GetLicenseManagerReportGeneratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlicensemanagerreportgeneratorresponse"></a>
<a id="schema_GetLicenseManagerReportGeneratorResponse"></a>
<a id="tocSgetlicensemanagerreportgeneratorresponse"></a>
<a id="tocsgetlicensemanagerreportgeneratorresponse"></a>

```json
{
  "ReportGenerator": {
    "ReportGeneratorName": {},
    "ReportType": {},
    "ReportContext": {
      "licenseConfigurationArns": {}
    },
    "ReportFrequency": {
      "value": {},
      "period": {}
    },
    "LicenseManagerReportGeneratorArn": {},
    "LastRunStatus": {},
    "LastRunFailureReason": {},
    "LastReportGenerationTime": {},
    "ReportCreatorAccount": {},
    "Description": {},
    "S3Location": {
      "bucket": {},
      "keyPrefix": {}
    },
    "CreateTime": {},
    "Tags": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportGenerator|object|false|none|none|

<h2 id="tocS_GetLicenseManagerReportGeneratorRequest">GetLicenseManagerReportGeneratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlicensemanagerreportgeneratorrequest"></a>
<a id="schema_GetLicenseManagerReportGeneratorRequest"></a>
<a id="tocSgetlicensemanagerreportgeneratorrequest"></a>
<a id="tocsgetlicensemanagerreportgeneratorrequest"></a>

```json
{
  "LicenseManagerReportGeneratorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseManagerReportGeneratorArn|object|true|none|none|

<h2 id="tocS_GetLicenseUsageResponse">GetLicenseUsageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseusageresponse"></a>
<a id="schema_GetLicenseUsageResponse"></a>
<a id="tocSgetlicenseusageresponse"></a>
<a id="tocsgetlicenseusageresponse"></a>

```json
{
  "LicenseUsage": {
    "EntitlementUsages": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseUsage|object|false|none|none|

<h2 id="tocS_GetLicenseUsageRequest">GetLicenseUsageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseusagerequest"></a>
<a id="schema_GetLicenseUsageRequest"></a>
<a id="tocSgetlicenseusagerequest"></a>
<a id="tocsgetlicenseusagerequest"></a>

```json
{
  "LicenseArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|

<h2 id="tocS_GetServiceSettingsResponse">GetServiceSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesettingsresponse"></a>
<a id="schema_GetServiceSettingsResponse"></a>
<a id="tocSgetservicesettingsresponse"></a>
<a id="tocsgetservicesettingsresponse"></a>

```json
{
  "S3BucketArn": {},
  "SnsTopicArn": {},
  "OrganizationConfiguration": {
    "EnableIntegration": {}
  },
  "EnableCrossAccountsDiscovery": {},
  "LicenseManagerResourceShareArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketArn|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|OrganizationConfiguration|object|false|none|none|
|EnableCrossAccountsDiscovery|object|false|none|none|
|LicenseManagerResourceShareArn|object|false|none|none|

<h2 id="tocS_GetServiceSettingsRequest">GetServiceSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicesettingsrequest"></a>
<a id="schema_GetServiceSettingsRequest"></a>
<a id="tocSgetservicesettingsrequest"></a>
<a id="tocsgetservicesettingsrequest"></a>

```json
{}
```

<h2 id="tocS_ListAssociationsForLicenseConfigurationResponse">ListAssociationsForLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationsforlicenseconfigurationresponse"></a>
<a id="schema_ListAssociationsForLicenseConfigurationResponse"></a>
<a id="tocSlistassociationsforlicenseconfigurationresponse"></a>
<a id="tocslistassociationsforlicenseconfigurationresponse"></a>

```json
{
  "LicenseConfigurationAssociations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationAssociations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAssociationsForLicenseConfigurationRequest">ListAssociationsForLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassociationsforlicenseconfigurationrequest"></a>
<a id="schema_ListAssociationsForLicenseConfigurationRequest"></a>
<a id="tocSlistassociationsforlicenseconfigurationrequest"></a>
<a id="tocslistassociationsforlicenseconfigurationrequest"></a>

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_FilterLimitExceededException">FilterLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemafilterlimitexceededexception"></a>
<a id="schema_FilterLimitExceededException"></a>
<a id="tocSfilterlimitexceededexception"></a>
<a id="tocsfilterlimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ListDistributedGrantsResponse">ListDistributedGrantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributedgrantsresponse"></a>
<a id="schema_ListDistributedGrantsResponse"></a>
<a id="tocSlistdistributedgrantsresponse"></a>
<a id="tocslistdistributedgrantsresponse"></a>

```json
{
  "Grants": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grants|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDistributedGrantsRequest">ListDistributedGrantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributedgrantsrequest"></a>
<a id="schema_ListDistributedGrantsRequest"></a>
<a id="tocSlistdistributedgrantsrequest"></a>
<a id="tocslistdistributedgrantsrequest"></a>

```json
{
  "GrantArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArns|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFailuresForLicenseConfigurationOperationsResponse">ListFailuresForLicenseConfigurationOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfailuresforlicenseconfigurationoperationsresponse"></a>
<a id="schema_ListFailuresForLicenseConfigurationOperationsResponse"></a>
<a id="tocSlistfailuresforlicenseconfigurationoperationsresponse"></a>
<a id="tocslistfailuresforlicenseconfigurationoperationsresponse"></a>

```json
{
  "LicenseOperationFailureList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseOperationFailureList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFailuresForLicenseConfigurationOperationsRequest">ListFailuresForLicenseConfigurationOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfailuresforlicenseconfigurationoperationsrequest"></a>
<a id="schema_ListFailuresForLicenseConfigurationOperationsRequest"></a>
<a id="tocSlistfailuresforlicenseconfigurationoperationsrequest"></a>
<a id="tocslistfailuresforlicenseconfigurationoperationsrequest"></a>

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseConfigurationsResponse">ListLicenseConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseconfigurationsresponse"></a>
<a id="schema_ListLicenseConfigurationsResponse"></a>
<a id="tocSlistlicenseconfigurationsresponse"></a>
<a id="tocslistlicenseconfigurationsresponse"></a>

```json
{
  "LicenseConfigurations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseConfigurationsRequest">ListLicenseConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseconfigurationsrequest"></a>
<a id="schema_ListLicenseConfigurationsRequest"></a>
<a id="tocSlistlicenseconfigurationsrequest"></a>
<a id="tocslistlicenseconfigurationsrequest"></a>

```json
{
  "LicenseConfigurationArns": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArns|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListLicenseConversionTasksResponse">ListLicenseConversionTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseconversiontasksresponse"></a>
<a id="schema_ListLicenseConversionTasksResponse"></a>
<a id="tocSlistlicenseconversiontasksresponse"></a>
<a id="tocslistlicenseconversiontasksresponse"></a>

```json
{
  "LicenseConversionTasks": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConversionTasks|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseConversionTasksRequest">ListLicenseConversionTasksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseconversiontasksrequest"></a>
<a id="schema_ListLicenseConversionTasksRequest"></a>
<a id="tocSlistlicenseconversiontasksrequest"></a>
<a id="tocslistlicenseconversiontasksrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_ListLicenseManagerReportGeneratorsResponse">ListLicenseManagerReportGeneratorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensemanagerreportgeneratorsresponse"></a>
<a id="schema_ListLicenseManagerReportGeneratorsResponse"></a>
<a id="tocSlistlicensemanagerreportgeneratorsresponse"></a>
<a id="tocslistlicensemanagerreportgeneratorsresponse"></a>

```json
{
  "ReportGenerators": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportGenerators|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseManagerReportGeneratorsRequest">ListLicenseManagerReportGeneratorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensemanagerreportgeneratorsrequest"></a>
<a id="schema_ListLicenseManagerReportGeneratorsRequest"></a>
<a id="tocSlistlicensemanagerreportgeneratorsrequest"></a>
<a id="tocslistlicensemanagerreportgeneratorsrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListLicenseSpecificationsForResourceResponse">ListLicenseSpecificationsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensespecificationsforresourceresponse"></a>
<a id="schema_ListLicenseSpecificationsForResourceResponse"></a>
<a id="tocSlistlicensespecificationsforresourceresponse"></a>
<a id="tocslistlicensespecificationsforresourceresponse"></a>

```json
{
  "LicenseSpecifications": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseSpecifications|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseSpecificationsForResourceRequest">ListLicenseSpecificationsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensespecificationsforresourcerequest"></a>
<a id="schema_ListLicenseSpecificationsForResourceRequest"></a>
<a id="tocSlistlicensespecificationsforresourcerequest"></a>
<a id="tocslistlicensespecificationsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseVersionsResponse">ListLicenseVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseversionsresponse"></a>
<a id="schema_ListLicenseVersionsResponse"></a>
<a id="tocSlistlicenseversionsresponse"></a>
<a id="tocslistlicenseversionsresponse"></a>

```json
{
  "Licenses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Licenses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicenseVersionsRequest">ListLicenseVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicenseversionsrequest"></a>
<a id="schema_ListLicenseVersionsRequest"></a>
<a id="tocSlistlicenseversionsrequest"></a>
<a id="tocslistlicenseversionsrequest"></a>

```json
{
  "LicenseArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListLicensesResponse">ListLicensesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensesresponse"></a>
<a id="schema_ListLicensesResponse"></a>
<a id="tocSlistlicensesresponse"></a>
<a id="tocslistlicensesresponse"></a>

```json
{
  "Licenses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Licenses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListLicensesRequest">ListLicensesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlicensesrequest"></a>
<a id="schema_ListLicensesRequest"></a>
<a id="tocSlistlicensesrequest"></a>
<a id="tocslistlicensesrequest"></a>

```json
{
  "LicenseArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArns|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReceivedGrantsResponse">ListReceivedGrantsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedgrantsresponse"></a>
<a id="schema_ListReceivedGrantsResponse"></a>
<a id="tocSlistreceivedgrantsresponse"></a>
<a id="tocslistreceivedgrantsresponse"></a>

```json
{
  "Grants": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grants|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReceivedGrantsRequest">ListReceivedGrantsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedgrantsrequest"></a>
<a id="schema_ListReceivedGrantsRequest"></a>
<a id="tocSlistreceivedgrantsrequest"></a>
<a id="tocslistreceivedgrantsrequest"></a>

```json
{
  "GrantArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArns|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReceivedGrantsForOrganizationResponse">ListReceivedGrantsForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedgrantsfororganizationresponse"></a>
<a id="schema_ListReceivedGrantsForOrganizationResponse"></a>
<a id="tocSlistreceivedgrantsfororganizationresponse"></a>
<a id="tocslistreceivedgrantsfororganizationresponse"></a>

```json
{
  "Grants": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grants|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReceivedGrantsForOrganizationRequest">ListReceivedGrantsForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedgrantsfororganizationrequest"></a>
<a id="schema_ListReceivedGrantsForOrganizationRequest"></a>
<a id="tocSlistreceivedgrantsfororganizationrequest"></a>
<a id="tocslistreceivedgrantsfororganizationrequest"></a>

```json
{
  "LicenseArn": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|true|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReceivedLicensesResponse">ListReceivedLicensesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedlicensesresponse"></a>
<a id="schema_ListReceivedLicensesResponse"></a>
<a id="tocSlistreceivedlicensesresponse"></a>
<a id="tocslistreceivedlicensesresponse"></a>

```json
{
  "Licenses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Licenses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReceivedLicensesRequest">ListReceivedLicensesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedlicensesrequest"></a>
<a id="schema_ListReceivedLicensesRequest"></a>
<a id="tocSlistreceivedlicensesrequest"></a>
<a id="tocslistreceivedlicensesrequest"></a>

```json
{
  "LicenseArns": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArns|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListReceivedLicensesForOrganizationResponse">ListReceivedLicensesForOrganizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedlicensesfororganizationresponse"></a>
<a id="schema_ListReceivedLicensesForOrganizationResponse"></a>
<a id="tocSlistreceivedlicensesfororganizationresponse"></a>
<a id="tocslistreceivedlicensesfororganizationresponse"></a>

```json
{
  "Licenses": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Licenses|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListReceivedLicensesForOrganizationRequest">ListReceivedLicensesForOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreceivedlicensesfororganizationrequest"></a>
<a id="schema_ListReceivedLicensesForOrganizationRequest"></a>
<a id="tocSlistreceivedlicensesfororganizationrequest"></a>
<a id="tocslistreceivedlicensesfororganizationrequest"></a>

```json
{
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListResourceInventoryResponse">ListResourceInventoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceinventoryresponse"></a>
<a id="schema_ListResourceInventoryResponse"></a>
<a id="tocSlistresourceinventoryresponse"></a>
<a id="tocslistresourceinventoryresponse"></a>

```json
{
  "ResourceInventoryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceInventoryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceInventoryRequest">ListResourceInventoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourceinventoryrequest"></a>
<a id="schema_ListResourceInventoryRequest"></a>
<a id="tocSlistresourceinventoryrequest"></a>
<a id="tocslistresourceinventoryrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_FailedDependencyException">FailedDependencyException</h2>
<!-- backwards compatibility -->
<a id="schemafaileddependencyexception"></a>
<a id="schema_FailedDependencyException"></a>
<a id="tocSfaileddependencyexception"></a>
<a id="tocsfaileddependencyexception"></a>

```json
null
```

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListTokensResponse">ListTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttokensresponse"></a>
<a id="schema_ListTokensResponse"></a>
<a id="tocSlisttokensresponse"></a>
<a id="tocslisttokensresponse"></a>

```json
{
  "Tokens": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tokens|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTokensRequest">ListTokensRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttokensrequest"></a>
<a id="schema_ListTokensRequest"></a>
<a id="tocSlisttokensrequest"></a>
<a id="tocslisttokensrequest"></a>

```json
{
  "TokenIds": {},
  "Filters": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenIds|object|false|none|none|
|Filters|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListUsageForLicenseConfigurationResponse">ListUsageForLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusageforlicenseconfigurationresponse"></a>
<a id="schema_ListUsageForLicenseConfigurationResponse"></a>
<a id="tocSlistusageforlicenseconfigurationresponse"></a>
<a id="tocslistusageforlicenseconfigurationresponse"></a>

```json
{
  "LicenseConfigurationUsageList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationUsageList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListUsageForLicenseConfigurationRequest">ListUsageForLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistusageforlicenseconfigurationrequest"></a>
<a id="schema_ListUsageForLicenseConfigurationRequest"></a>
<a id="tocSlistusageforlicenseconfigurationrequest"></a>
<a id="tocslistusageforlicenseconfigurationrequest"></a>

```json
{
  "LicenseConfigurationArn": {},
  "MaxResults": {},
  "NextToken": {},
  "Filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|Filters|object|false|none|none|

<h2 id="tocS_RejectGrantResponse">RejectGrantResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectgrantresponse"></a>
<a id="schema_RejectGrantResponse"></a>
<a id="tocSrejectgrantresponse"></a>
<a id="tocsrejectgrantresponse"></a>

```json
{
  "GrantArn": {},
  "Status": {},
  "Version": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|false|none|none|
|Status|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_RejectGrantRequest">RejectGrantRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectgrantrequest"></a>
<a id="schema_RejectGrantRequest"></a>
<a id="tocSrejectgrantrequest"></a>
<a id="tocsrejectgrantrequest"></a>

```json
{
  "GrantArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateLicenseConfigurationResponse">UpdateLicenseConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicenseconfigurationresponse"></a>
<a id="schema_UpdateLicenseConfigurationResponse"></a>
<a id="tocSupdatelicenseconfigurationresponse"></a>
<a id="tocsupdatelicenseconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLicenseConfigurationRequest">UpdateLicenseConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicenseconfigurationrequest"></a>
<a id="schema_UpdateLicenseConfigurationRequest"></a>
<a id="tocSupdatelicenseconfigurationrequest"></a>
<a id="tocsupdatelicenseconfigurationrequest"></a>

```json
{
  "LicenseConfigurationArn": {},
  "LicenseConfigurationStatus": {},
  "LicenseRules": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "Name": {},
  "Description": {},
  "ProductInformationList": {},
  "DisassociateWhenNotFound": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|
|LicenseConfigurationStatus|object|false|none|none|
|LicenseRules|object|false|none|none|
|LicenseCount|object|false|none|none|
|LicenseCountHardLimit|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|ProductInformationList|object|false|none|none|
|DisassociateWhenNotFound|object|false|none|none|

<h2 id="tocS_UpdateLicenseManagerReportGeneratorResponse">UpdateLicenseManagerReportGeneratorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicensemanagerreportgeneratorresponse"></a>
<a id="schema_UpdateLicenseManagerReportGeneratorResponse"></a>
<a id="tocSupdatelicensemanagerreportgeneratorresponse"></a>
<a id="tocsupdatelicensemanagerreportgeneratorresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLicenseManagerReportGeneratorRequest">UpdateLicenseManagerReportGeneratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicensemanagerreportgeneratorrequest"></a>
<a id="schema_UpdateLicenseManagerReportGeneratorRequest"></a>
<a id="tocSupdatelicensemanagerreportgeneratorrequest"></a>
<a id="tocsupdatelicensemanagerreportgeneratorrequest"></a>

```json
{
  "LicenseManagerReportGeneratorArn": {},
  "ReportGeneratorName": {},
  "Type": {},
  "ReportContext": {
    "licenseConfigurationArns": {}
  },
  "ReportFrequency": {
    "value": {},
    "period": {}
  },
  "ClientToken": {},
  "Description": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseManagerReportGeneratorArn|object|true|none|none|
|ReportGeneratorName|object|true|none|none|
|Type|object|true|none|none|
|ReportContext|object|true|none|none|
|ReportFrequency|object|true|none|none|
|ClientToken|object|true|none|none|
|Description|object|false|none|none|

<h2 id="tocS_UpdateLicenseSpecificationsForResourceResponse">UpdateLicenseSpecificationsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicensespecificationsforresourceresponse"></a>
<a id="schema_UpdateLicenseSpecificationsForResourceResponse"></a>
<a id="tocSupdatelicensespecificationsforresourceresponse"></a>
<a id="tocsupdatelicensespecificationsforresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateLicenseSpecificationsForResourceRequest">UpdateLicenseSpecificationsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatelicensespecificationsforresourcerequest"></a>
<a id="schema_UpdateLicenseSpecificationsForResourceRequest"></a>
<a id="tocSupdatelicensespecificationsforresourcerequest"></a>
<a id="tocsupdatelicensespecificationsforresourcerequest"></a>

```json
{
  "ResourceArn": {},
  "AddLicenseSpecifications": {},
  "RemoveLicenseSpecifications": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|AddLicenseSpecifications|object|false|none|none|
|RemoveLicenseSpecifications|object|false|none|none|

<h2 id="tocS_InvalidResourceStateException">InvalidResourceStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcestateexception"></a>
<a id="schema_InvalidResourceStateException"></a>
<a id="tocSinvalidresourcestateexception"></a>
<a id="tocsinvalidresourcestateexception"></a>

```json
null
```

<h2 id="tocS_LicenseUsageException">LicenseUsageException</h2>
<!-- backwards compatibility -->
<a id="schemalicenseusageexception"></a>
<a id="schema_LicenseUsageException"></a>
<a id="tocSlicenseusageexception"></a>
<a id="tocslicenseusageexception"></a>

```json
null
```

<h2 id="tocS_UpdateServiceSettingsResponse">UpdateServiceSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesettingsresponse"></a>
<a id="schema_UpdateServiceSettingsResponse"></a>
<a id="tocSupdateservicesettingsresponse"></a>
<a id="tocsupdateservicesettingsresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateServiceSettingsRequest">UpdateServiceSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicesettingsrequest"></a>
<a id="schema_UpdateServiceSettingsRequest"></a>
<a id="tocSupdateservicesettingsrequest"></a>
<a id="tocsupdateservicesettingsrequest"></a>

```json
{
  "S3BucketArn": {},
  "SnsTopicArn": {},
  "OrganizationConfiguration": {
    "EnableIntegration": {}
  },
  "EnableCrossAccountsDiscovery": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketArn|object|false|none|none|
|SnsTopicArn|object|false|none|none|
|OrganizationConfiguration|object|false|none|none|
|EnableCrossAccountsDiscovery|object|false|none|none|

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_GrantStatus">GrantStatus</h2>
<!-- backwards compatibility -->
<a id="schemagrantstatus"></a>
<a id="schema_GrantStatus"></a>
<a id="tocSgrantstatus"></a>
<a id="tocsgrantstatus"></a>

```json
"PENDING_WORKFLOW"
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

<h2 id="tocS_ActivationOverrideBehavior">ActivationOverrideBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaactivationoverridebehavior"></a>
<a id="schema_ActivationOverrideBehavior"></a>
<a id="tocSactivationoverridebehavior"></a>
<a id="tocsactivationoverridebehavior"></a>

```json
"DISTRIBUTED_GRANTS_ONLY"
```

<h2 id="tocS_AllowedOperation">AllowedOperation</h2>
<!-- backwards compatibility -->
<a id="schemaallowedoperation"></a>
<a id="schema_AllowedOperation"></a>
<a id="tocSallowedoperation"></a>
<a id="tocsallowedoperation"></a>

```json
"CreateGrant"
```

<h2 id="tocS_AllowedOperationList">AllowedOperationList</h2>
<!-- backwards compatibility -->
<a id="schemaallowedoperationlist"></a>
<a id="schema_AllowedOperationList"></a>
<a id="tocSallowedoperationlist"></a>
<a id="tocsallowedoperationlist"></a>

```json
[
  "CreateGrant"
]
```

<h2 id="tocS_ArnList">ArnList</h2>
<!-- backwards compatibility -->
<a id="schemaarnlist"></a>
<a id="schema_ArnList"></a>
<a id="tocSarnlist"></a>
<a id="tocsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AutomatedDiscoveryInformation">AutomatedDiscoveryInformation</h2>
<!-- backwards compatibility -->
<a id="schemaautomateddiscoveryinformation"></a>
<a id="schema_AutomatedDiscoveryInformation"></a>
<a id="tocSautomateddiscoveryinformation"></a>
<a id="tocsautomateddiscoveryinformation"></a>

```json
{
  "LastRunTime": {}
}
```

Describes automated discovery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastRunTime|object|false|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BoxBoolean">BoxBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaboxboolean"></a>
<a id="schema_BoxBoolean"></a>
<a id="tocSboxboolean"></a>
<a id="tocsboxboolean"></a>

```json
true
```

<h2 id="tocS_BoxInteger">BoxInteger</h2>
<!-- backwards compatibility -->
<a id="schemaboxinteger"></a>
<a id="schema_BoxInteger"></a>
<a id="tocSboxinteger"></a>
<a id="tocsboxinteger"></a>

```json
0
```

<h2 id="tocS_BorrowConfiguration">BorrowConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaborrowconfiguration"></a>
<a id="schema_BorrowConfiguration"></a>
<a id="tocSborrowconfiguration"></a>
<a id="tocsborrowconfiguration"></a>

```json
{
  "AllowEarlyCheckIn": {},
  "MaxTimeToLiveInMinutes": {}
}
```

Details about a borrow configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowEarlyCheckIn|object|true|none|none|
|MaxTimeToLiveInMinutes|object|true|none|none|

<h2 id="tocS_BoxLong">BoxLong</h2>
<!-- backwards compatibility -->
<a id="schemaboxlong"></a>
<a id="schema_BoxLong"></a>
<a id="tocSboxlong"></a>
<a id="tocsboxlong"></a>

```json
0
```

<h2 id="tocS_EntitlementDataList">EntitlementDataList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementdatalist"></a>
<a id="schema_EntitlementDataList"></a>
<a id="tocSentitlementdatalist"></a>
<a id="tocsentitlementdatalist"></a>

```json
[
  {
    "Name": {},
    "Value": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_DigitalSignatureMethod">DigitalSignatureMethod</h2>
<!-- backwards compatibility -->
<a id="schemadigitalsignaturemethod"></a>
<a id="schema_DigitalSignatureMethod"></a>
<a id="tocSdigitalsignaturemethod"></a>
<a id="tocsdigitalsignaturemethod"></a>

```json
"JWT_PS384"
```

<h2 id="tocS_MetadataList">MetadataList</h2>
<!-- backwards compatibility -->
<a id="schemametadatalist"></a>
<a id="schema_MetadataList"></a>
<a id="tocSmetadatalist"></a>
<a id="tocsmetadatalist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_SignedToken">SignedToken</h2>
<!-- backwards compatibility -->
<a id="schemasignedtoken"></a>
<a id="schema_SignedToken"></a>
<a id="tocSsignedtoken"></a>
<a id="tocssignedtoken"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstri"
```

<h2 id="tocS_ISO8601DateTime">ISO8601DateTime</h2>
<!-- backwards compatibility -->
<a id="schemaiso8601datetime"></a>
<a id="schema_ISO8601DateTime"></a>
<a id="tocSiso8601datetime"></a>
<a id="tocsiso8601datetime"></a>

```json
"string"
```

<h2 id="tocS_CheckoutType">CheckoutType</h2>
<!-- backwards compatibility -->
<a id="schemacheckouttype"></a>
<a id="schema_CheckoutType"></a>
<a id="tocScheckouttype"></a>
<a id="tocscheckouttype"></a>

```json
"PROVISIONAL"
```

<h2 id="tocS_ClientRequestToken">ClientRequestToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientrequesttoken"></a>
<a id="schema_ClientRequestToken"></a>
<a id="tocSclientrequesttoken"></a>
<a id="tocsclientrequesttoken"></a>

```json
"string"
```

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
"EC2_INSTANCE"
```

<h2 id="tocS_ConsumedLicenseSummary">ConsumedLicenseSummary</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedlicensesummary"></a>
<a id="schema_ConsumedLicenseSummary"></a>
<a id="tocSconsumedlicensesummary"></a>
<a id="tocsconsumedlicensesummary"></a>

```json
{
  "ResourceType": {},
  "ConsumedLicenses": {}
}
```

Details about license consumption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ConsumedLicenses|object|false|none|none|

<h2 id="tocS_ConsumedLicenseSummaryList">ConsumedLicenseSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaconsumedlicensesummarylist"></a>
<a id="schema_ConsumedLicenseSummaryList"></a>
<a id="tocSconsumedlicensesummarylist"></a>
<a id="tocsconsumedlicensesummarylist"></a>

```json
[
  {
    "ResourceType": {},
    "ConsumedLicenses": {}
  }
]
```

<h2 id="tocS_RenewType">RenewType</h2>
<!-- backwards compatibility -->
<a id="schemarenewtype"></a>
<a id="schema_RenewType"></a>
<a id="tocSrenewtype"></a>
<a id="tocsrenewtype"></a>

```json
"None"
```

<h2 id="tocS_ProvisionalConfiguration">ProvisionalConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionalconfiguration"></a>
<a id="schema_ProvisionalConfiguration"></a>
<a id="tocSprovisionalconfiguration"></a>
<a id="tocsprovisionalconfiguration"></a>

```json
{
  "MaxTimeToLiveInMinutes": {}
}
```

Details about a provisional configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxTimeToLiveInMinutes|object|true|none|none|

<h2 id="tocS_ConsumptionConfiguration">ConsumptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionconfiguration"></a>
<a id="schema_ConsumptionConfiguration"></a>
<a id="tocSconsumptionconfiguration"></a>
<a id="tocsconsumptionconfiguration"></a>

```json
{
  "RenewType": {},
  "ProvisionalConfiguration": {
    "MaxTimeToLiveInMinutes": {}
  },
  "BorrowConfiguration": {
    "AllowEarlyCheckIn": {},
    "MaxTimeToLiveInMinutes": {}
  }
}
```

Details about a consumption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RenewType|object|false|none|none|
|ProvisionalConfiguration|object|false|none|none|
|BorrowConfiguration|object|false|none|none|

<h2 id="tocS_PrincipalArnList">PrincipalArnList</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalarnlist"></a>
<a id="schema_PrincipalArnList"></a>
<a id="tocSprincipalarnlist"></a>
<a id="tocsprincipalarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StatusReasonMessage">StatusReasonMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusreasonmessage"></a>
<a id="schema_StatusReasonMessage"></a>
<a id="tocSstatusreasonmessage"></a>
<a id="tocsstatusreasonmessage"></a>

```json
"string"
```

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "ActivationOverrideBehavior": {}
}
```

The options you can specify when you create a new version of a grant, such as activation override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivationOverrideBehavior|object|false|none|none|

<h2 id="tocS_LicenseCountingType">LicenseCountingType</h2>
<!-- backwards compatibility -->
<a id="schemalicensecountingtype"></a>
<a id="schema_LicenseCountingType"></a>
<a id="tocSlicensecountingtype"></a>
<a id="tocslicensecountingtype"></a>

```json
"vCPU"
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_ProductInformationList">ProductInformationList</h2>
<!-- backwards compatibility -->
<a id="schemaproductinformationlist"></a>
<a id="schema_ProductInformationList"></a>
<a id="tocSproductinformationlist"></a>
<a id="tocsproductinformationlist"></a>

```json
[
  {
    "ResourceType": {},
    "ProductInformationFilterList": {}
  }
]
```

<h2 id="tocS_LicenseConversionContext">LicenseConversionContext</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconversioncontext"></a>
<a id="schema_LicenseConversionContext"></a>
<a id="tocSlicenseconversioncontext"></a>
<a id="tocslicenseconversioncontext"></a>

```json
{
  "UsageOperation": {}
}
```

Information about a license type conversion task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UsageOperation|object|false|none|none|

<h2 id="tocS_LicenseConversionTaskId">LicenseConversionTaskId</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconversiontaskid"></a>
<a id="schema_LicenseConversionTaskId"></a>
<a id="tocSlicenseconversiontaskid"></a>
<a id="tocslicenseconversiontaskid"></a>

```json
"string"
```

<h2 id="tocS_ReportGeneratorName">ReportGeneratorName</h2>
<!-- backwards compatibility -->
<a id="schemareportgeneratorname"></a>
<a id="schema_ReportGeneratorName"></a>
<a id="tocSreportgeneratorname"></a>
<a id="tocsreportgeneratorname"></a>

```json
"string"
```

<h2 id="tocS_ReportTypeList">ReportTypeList</h2>
<!-- backwards compatibility -->
<a id="schemareporttypelist"></a>
<a id="schema_ReportTypeList"></a>
<a id="tocSreporttypelist"></a>
<a id="tocsreporttypelist"></a>

```json
[
  "LicenseConfigurationSummaryReport"
]
```

<h2 id="tocS_ReportContext">ReportContext</h2>
<!-- backwards compatibility -->
<a id="schemareportcontext"></a>
<a id="schema_ReportContext"></a>
<a id="tocSreportcontext"></a>
<a id="tocsreportcontext"></a>

```json
{
  "licenseConfigurationArns": {}
}
```

Details of the license configuration that this generator reports on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseConfigurationArns|object|true|none|none|

<h2 id="tocS_ReportFrequency">ReportFrequency</h2>
<!-- backwards compatibility -->
<a id="schemareportfrequency"></a>
<a id="schema_ReportFrequency"></a>
<a id="tocSreportfrequency"></a>
<a id="tocsreportfrequency"></a>

```json
{
  "value": {},
  "period": {}
}
```

Details about how frequently reports are generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
|period|object|false|none|none|

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
{
  "Name": {},
  "SignKey": {}
}
```

Details about the issuer of a license.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SignKey|object|false|none|none|

<h2 id="tocS_DatetimeRange">DatetimeRange</h2>
<!-- backwards compatibility -->
<a id="schemadatetimerange"></a>
<a id="schema_DatetimeRange"></a>
<a id="tocSdatetimerange"></a>
<a id="tocsdatetimerange"></a>

```json
{
  "Begin": {},
  "End": {}
}
```

Describes a time range, in ISO8601-UTC format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Begin|object|true|none|none|
|End|object|false|none|none|

<h2 id="tocS_EntitlementList">EntitlementList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementlist"></a>
<a id="schema_EntitlementList"></a>
<a id="tocSentitlementlist"></a>
<a id="tocsentitlementlist"></a>

```json
[
  {
    "Name": {},
    "Value": {},
    "MaxCount": {},
    "Overage": {},
    "Unit": {},
    "AllowCheckIn": {}
  }
]
```

<h2 id="tocS_LicenseStatus">LicenseStatus</h2>
<!-- backwards compatibility -->
<a id="schemalicensestatus"></a>
<a id="schema_LicenseStatus"></a>
<a id="tocSlicensestatus"></a>
<a id="tocslicensestatus"></a>

```json
"AVAILABLE"
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

<h2 id="tocS_MaxSize3StringList">MaxSize3StringList</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize3stringlist"></a>
<a id="schema_MaxSize3StringList"></a>
<a id="tocSmaxsize3stringlist"></a>
<a id="tocsmaxsize3stringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TokenType">TokenType</h2>
<!-- backwards compatibility -->
<a id="schematokentype"></a>
<a id="schema_TokenType"></a>
<a id="tocStokentype"></a>
<a id="tocstokentype"></a>

```json
"REFRESH_TOKEN"
```

<h2 id="tocS_TokenString">TokenString</h2>
<!-- backwards compatibility -->
<a id="schematokenstring"></a>
<a id="schema_TokenString"></a>
<a id="tocStokenstring"></a>
<a id="tocstokenstring"></a>

```json
"string"
```

<h2 id="tocS_LicenseDeletionStatus">LicenseDeletionStatus</h2>
<!-- backwards compatibility -->
<a id="schemalicensedeletionstatus"></a>
<a id="schema_LicenseDeletionStatus"></a>
<a id="tocSlicensedeletionstatus"></a>
<a id="tocslicensedeletionstatus"></a>

```json
"PENDING_DELETE"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_EntitlementUnit">EntitlementUnit</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementunit"></a>
<a id="schema_EntitlementUnit"></a>
<a id="tocSentitlementunit"></a>
<a id="tocsentitlementunit"></a>

```json
"Count"
```

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "Name": {},
  "Value": {},
  "MaxCount": {},
  "Overage": {},
  "Unit": {},
  "AllowCheckIn": {}
}
```

Describes a resource entitled for use with a license.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|false|none|none|
|MaxCount|object|false|none|none|
|Overage|object|false|none|none|
|Unit|object|true|none|none|
|AllowCheckIn|object|false|none|none|

<h2 id="tocS_EntitlementDataUnit">EntitlementDataUnit</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementdataunit"></a>
<a id="schema_EntitlementDataUnit"></a>
<a id="tocSentitlementdataunit"></a>
<a id="tocsentitlementdataunit"></a>

```json
"Count"
```

<h2 id="tocS_EntitlementData">EntitlementData</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementdata"></a>
<a id="schema_EntitlementData"></a>
<a id="tocSentitlementdata"></a>
<a id="tocsentitlementdata"></a>

```json
{
  "Name": {},
  "Value": {},
  "Unit": {}
}
```

Data associated with an entitlement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|false|none|none|
|Unit|object|true|none|none|

<h2 id="tocS_EntitlementUsage">EntitlementUsage</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementusage"></a>
<a id="schema_EntitlementUsage"></a>
<a id="tocSentitlementusage"></a>
<a id="tocsentitlementusage"></a>

```json
{
  "Name": {},
  "ConsumedValue": {},
  "MaxCount": {},
  "Unit": {}
}
```

Usage associated with an entitlement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ConsumedValue|object|true|none|none|
|MaxCount|object|false|none|none|
|Unit|object|true|none|none|

<h2 id="tocS_EntitlementUsageList">EntitlementUsageList</h2>
<!-- backwards compatibility -->
<a id="schemaentitlementusagelist"></a>
<a id="schema_EntitlementUsageList"></a>
<a id="tocSentitlementusagelist"></a>
<a id="tocsentitlementusagelist"></a>

```json
[
  {
    "Name": {},
    "ConsumedValue": {},
    "MaxCount": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
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

<h2 id="tocS_Filters">Filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_Filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "GrantArn": {},
  "GrantName": {},
  "ParentArn": {},
  "LicenseArn": {},
  "GranteePrincipalArn": {},
  "HomeRegion": {},
  "GrantStatus": {},
  "StatusReason": {},
  "Version": {},
  "GrantedOperations": {},
  "Options": {
    "ActivationOverrideBehavior": {}
  }
}
```

Describes a grant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GrantArn|object|true|none|none|
|GrantName|object|true|none|none|
|ParentArn|object|true|none|none|
|LicenseArn|object|true|none|none|
|GranteePrincipalArn|object|true|none|none|
|HomeRegion|object|true|none|none|
|GrantStatus|object|true|none|none|
|StatusReason|object|false|none|none|
|Version|object|true|none|none|
|GrantedOperations|object|true|none|none|
|Options|object|false|none|none|

<h2 id="tocS_ManagedResourceSummaryList">ManagedResourceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemamanagedresourcesummarylist"></a>
<a id="schema_ManagedResourceSummaryList"></a>
<a id="tocSmanagedresourcesummarylist"></a>
<a id="tocsmanagedresourcesummarylist"></a>

```json
[
  {
    "ResourceType": {},
    "AssociationCount": {}
  }
]
```

<h2 id="tocS_LicenseConversionTaskStatus">LicenseConversionTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconversiontaskstatus"></a>
<a id="schema_LicenseConversionTaskStatus"></a>
<a id="tocSlicenseconversiontaskstatus"></a>
<a id="tocslicenseconversiontaskstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ReportGenerator">ReportGenerator</h2>
<!-- backwards compatibility -->
<a id="schemareportgenerator"></a>
<a id="schema_ReportGenerator"></a>
<a id="tocSreportgenerator"></a>
<a id="tocsreportgenerator"></a>

```json
{
  "ReportGeneratorName": {},
  "ReportType": {},
  "ReportContext": {
    "licenseConfigurationArns": {}
  },
  "ReportFrequency": {
    "value": {},
    "period": {}
  },
  "LicenseManagerReportGeneratorArn": {},
  "LastRunStatus": {},
  "LastRunFailureReason": {},
  "LastReportGenerationTime": {},
  "ReportCreatorAccount": {},
  "Description": {},
  "S3Location": {
    "bucket": {},
    "keyPrefix": {}
  },
  "CreateTime": {},
  "Tags": {}
}
```

Describe the details of a report generator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReportGeneratorName|object|false|none|none|
|ReportType|object|false|none|none|
|ReportContext|object|false|none|none|
|ReportFrequency|object|false|none|none|
|LicenseManagerReportGeneratorArn|object|false|none|none|
|LastRunStatus|object|false|none|none|
|LastRunFailureReason|object|false|none|none|
|LastReportGenerationTime|object|false|none|none|
|ReportCreatorAccount|object|false|none|none|
|Description|object|false|none|none|
|S3Location|object|false|none|none|
|CreateTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "LicenseArn": {},
  "LicenseName": {},
  "ProductName": {},
  "ProductSKU": {},
  "Issuer": {
    "Name": {},
    "SignKey": {},
    "KeyFingerprint": {}
  },
  "HomeRegion": {},
  "Status": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "Beneficiary": {},
  "Entitlements": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "LicenseMetadata": {},
  "CreateTime": {},
  "Version": {}
}
```

Software license that is managed in License Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|false|none|none|
|LicenseName|object|false|none|none|
|ProductName|object|false|none|none|
|ProductSKU|object|false|none|none|
|Issuer|object|false|none|none|
|HomeRegion|object|false|none|none|
|Status|object|false|none|none|
|Validity|object|false|none|none|
|Beneficiary|object|false|none|none|
|Entitlements|object|false|none|none|
|ConsumptionConfiguration|object|false|none|none|
|LicenseMetadata|object|false|none|none|
|CreateTime|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_LicenseUsage">LicenseUsage</h2>
<!-- backwards compatibility -->
<a id="schemalicenseusage"></a>
<a id="schema_LicenseUsage"></a>
<a id="tocSlicenseusage"></a>
<a id="tocslicenseusage"></a>

```json
{
  "EntitlementUsages": {}
}
```

Describes the entitlement usage associated with a license.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EntitlementUsages|object|false|none|none|

<h2 id="tocS_OrganizationConfiguration">OrganizationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationconfiguration"></a>
<a id="schema_OrganizationConfiguration"></a>
<a id="tocSorganizationconfiguration"></a>
<a id="tocsorganizationconfiguration"></a>

```json
{
  "EnableIntegration": {}
}
```

Configuration information for Organizations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableIntegration|object|true|none|none|

<h2 id="tocS_GrantList">GrantList</h2>
<!-- backwards compatibility -->
<a id="schemagrantlist"></a>
<a id="schema_GrantList"></a>
<a id="tocSgrantlist"></a>
<a id="tocsgrantlist"></a>

```json
[
  {
    "GrantArn": {},
    "GrantName": {},
    "ParentArn": {},
    "LicenseArn": {},
    "GranteePrincipalArn": {},
    "HomeRegion": {},
    "GrantStatus": {},
    "StatusReason": {},
    "Version": {},
    "GrantedOperations": {},
    "Options": {
      "ActivationOverrideBehavior": {}
    }
  }
]
```

<h2 id="tocS_IssuerDetails">IssuerDetails</h2>
<!-- backwards compatibility -->
<a id="schemaissuerdetails"></a>
<a id="schema_IssuerDetails"></a>
<a id="tocSissuerdetails"></a>
<a id="tocsissuerdetails"></a>

```json
{
  "Name": {},
  "SignKey": {},
  "KeyFingerprint": {}
}
```

Details associated with the issuer of a license.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|SignKey|object|false|none|none|
|KeyFingerprint|object|false|none|none|

<h2 id="tocS_ReceivedMetadata">ReceivedMetadata</h2>
<!-- backwards compatibility -->
<a id="schemareceivedmetadata"></a>
<a id="schema_ReceivedMetadata"></a>
<a id="tocSreceivedmetadata"></a>
<a id="tocsreceivedmetadata"></a>

```json
{
  "ReceivedStatus": {},
  "ReceivedStatusReason": {},
  "AllowedOperations": {}
}
```

Metadata associated with received licenses and grants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReceivedStatus|object|false|none|none|
|ReceivedStatusReason|object|false|none|none|
|AllowedOperations|object|false|none|none|

<h2 id="tocS_GrantedLicense">GrantedLicense</h2>
<!-- backwards compatibility -->
<a id="schemagrantedlicense"></a>
<a id="schema_GrantedLicense"></a>
<a id="tocSgrantedlicense"></a>
<a id="tocsgrantedlicense"></a>

```json
{
  "LicenseArn": {},
  "LicenseName": {},
  "ProductName": {},
  "ProductSKU": {},
  "Issuer": {
    "Name": {},
    "SignKey": {},
    "KeyFingerprint": {}
  },
  "HomeRegion": {},
  "Status": {},
  "Validity": {
    "Begin": {},
    "End": {}
  },
  "Beneficiary": {},
  "Entitlements": {},
  "ConsumptionConfiguration": {
    "RenewType": {},
    "ProvisionalConfiguration": {
      "MaxTimeToLiveInMinutes": {}
    },
    "BorrowConfiguration": {
      "AllowEarlyCheckIn": {},
      "MaxTimeToLiveInMinutes": {}
    }
  },
  "LicenseMetadata": {},
  "CreateTime": {},
  "Version": {},
  "ReceivedMetadata": {
    "ReceivedStatus": {},
    "ReceivedStatusReason": {},
    "AllowedOperations": {}
  }
}
```

Describes a license that is granted to a grantee.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseArn|object|false|none|none|
|LicenseName|object|false|none|none|
|ProductName|object|false|none|none|
|ProductSKU|object|false|none|none|
|Issuer|object|false|none|none|
|HomeRegion|object|false|none|none|
|Status|object|false|none|none|
|Validity|object|false|none|none|
|Beneficiary|object|false|none|none|
|Entitlements|object|false|none|none|
|ConsumptionConfiguration|object|false|none|none|
|LicenseMetadata|object|false|none|none|
|CreateTime|object|false|none|none|
|Version|object|false|none|none|
|ReceivedMetadata|object|false|none|none|

<h2 id="tocS_GrantedLicenseList">GrantedLicenseList</h2>
<!-- backwards compatibility -->
<a id="schemagrantedlicenselist"></a>
<a id="schema_GrantedLicenseList"></a>
<a id="tocSgrantedlicenselist"></a>
<a id="tocsgrantedlicenselist"></a>

```json
[
  {
    "LicenseArn": {},
    "LicenseName": {},
    "ProductName": {},
    "ProductSKU": {},
    "Issuer": {
      "Name": {},
      "SignKey": {},
      "KeyFingerprint": {}
    },
    "HomeRegion": {},
    "Status": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "Beneficiary": {},
    "Entitlements": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "LicenseMetadata": {},
    "CreateTime": {},
    "Version": {},
    "ReceivedMetadata": {
      "ReceivedStatus": {},
      "ReceivedStatusReason": {},
      "AllowedOperations": {}
    }
  }
]
```

<h2 id="tocS_InventoryFilterCondition">InventoryFilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfiltercondition"></a>
<a id="schema_InventoryFilterCondition"></a>
<a id="tocSinventoryfiltercondition"></a>
<a id="tocsinventoryfiltercondition"></a>

```json
"EQUALS"
```

<h2 id="tocS_InventoryFilter">InventoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilter"></a>
<a id="schema_InventoryFilter"></a>
<a id="tocSinventoryfilter"></a>
<a id="tocsinventoryfilter"></a>

```json
{
  "Name": {},
  "Condition": {},
  "Value": {}
}
```

An inventory filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Condition|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_InventoryFilterList">InventoryFilterList</h2>
<!-- backwards compatibility -->
<a id="schemainventoryfilterlist"></a>
<a id="schema_InventoryFilterList"></a>
<a id="tocSinventoryfilterlist"></a>
<a id="tocsinventoryfilterlist"></a>

```json
[
  {
    "Name": {},
    "Condition": {},
    "Value": {}
  }
]
```

<h2 id="tocS_LicenseConfiguration">LicenseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfiguration"></a>
<a id="schema_LicenseConfiguration"></a>
<a id="tocSlicenseconfiguration"></a>
<a id="tocslicenseconfiguration"></a>

```json
{
  "LicenseConfigurationId": {},
  "LicenseConfigurationArn": {},
  "Name": {},
  "Description": {},
  "LicenseCountingType": {},
  "LicenseRules": {},
  "LicenseCount": {},
  "LicenseCountHardLimit": {},
  "DisassociateWhenNotFound": {},
  "ConsumedLicenses": {},
  "Status": {},
  "OwnerAccountId": {},
  "ConsumedLicenseSummaryList": {},
  "ManagedResourceSummaryList": {},
  "ProductInformationList": {},
  "AutomatedDiscoveryInformation": {
    "LastRunTime": {}
  }
}
```

A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationId|object|false|none|none|
|LicenseConfigurationArn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|LicenseCountingType|object|false|none|none|
|LicenseRules|object|false|none|none|
|LicenseCount|object|false|none|none|
|LicenseCountHardLimit|object|false|none|none|
|DisassociateWhenNotFound|object|false|none|none|
|ConsumedLicenses|object|false|none|none|
|Status|object|false|none|none|
|OwnerAccountId|object|false|none|none|
|ConsumedLicenseSummaryList|object|false|none|none|
|ManagedResourceSummaryList|object|false|none|none|
|ProductInformationList|object|false|none|none|
|AutomatedDiscoveryInformation|object|false|none|none|

<h2 id="tocS_LicenseConfigurationAssociation">LicenseConfigurationAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationassociation"></a>
<a id="schema_LicenseConfigurationAssociation"></a>
<a id="tocSlicenseconfigurationassociation"></a>
<a id="tocslicenseconfigurationassociation"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {},
  "ResourceOwnerId": {},
  "AssociationTime": {},
  "AmiAssociationScope": {}
}
```

Describes an association with a license configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceOwnerId|object|false|none|none|
|AssociationTime|object|false|none|none|
|AmiAssociationScope|object|false|none|none|

<h2 id="tocS_LicenseConfigurationAssociations">LicenseConfigurationAssociations</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationassociations"></a>
<a id="schema_LicenseConfigurationAssociations"></a>
<a id="tocSlicenseconfigurationassociations"></a>
<a id="tocslicenseconfigurationassociations"></a>

```json
[
  {
    "ResourceArn": {},
    "ResourceType": {},
    "ResourceOwnerId": {},
    "AssociationTime": {},
    "AmiAssociationScope": {}
  }
]
```

<h2 id="tocS_LicenseConfigurationStatus">LicenseConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationstatus"></a>
<a id="schema_LicenseConfigurationStatus"></a>
<a id="tocSlicenseconfigurationstatus"></a>
<a id="tocslicenseconfigurationstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_LicenseConfigurationUsage">LicenseConfigurationUsage</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationusage"></a>
<a id="schema_LicenseConfigurationUsage"></a>
<a id="tocSlicenseconfigurationusage"></a>
<a id="tocslicenseconfigurationusage"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {},
  "ResourceStatus": {},
  "ResourceOwnerId": {},
  "AssociationTime": {},
  "ConsumedLicenses": {}
}
```

Details about the usage of a resource associated with a license configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceStatus|object|false|none|none|
|ResourceOwnerId|object|false|none|none|
|AssociationTime|object|false|none|none|
|ConsumedLicenses|object|false|none|none|

<h2 id="tocS_LicenseConfigurationUsageList">LicenseConfigurationUsageList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationusagelist"></a>
<a id="schema_LicenseConfigurationUsageList"></a>
<a id="tocSlicenseconfigurationusagelist"></a>
<a id="tocslicenseconfigurationusagelist"></a>

```json
[
  {
    "ResourceArn": {},
    "ResourceType": {},
    "ResourceStatus": {},
    "ResourceOwnerId": {},
    "AssociationTime": {},
    "ConsumedLicenses": {}
  }
]
```

<h2 id="tocS_LicenseConfigurations">LicenseConfigurations</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurations"></a>
<a id="schema_LicenseConfigurations"></a>
<a id="tocSlicenseconfigurations"></a>
<a id="tocslicenseconfigurations"></a>

```json
[
  {
    "LicenseConfigurationId": {},
    "LicenseConfigurationArn": {},
    "Name": {},
    "Description": {},
    "LicenseCountingType": {},
    "LicenseRules": {},
    "LicenseCount": {},
    "LicenseCountHardLimit": {},
    "DisassociateWhenNotFound": {},
    "ConsumedLicenses": {},
    "Status": {},
    "OwnerAccountId": {},
    "ConsumedLicenseSummaryList": {},
    "ManagedResourceSummaryList": {},
    "ProductInformationList": {},
    "AutomatedDiscoveryInformation": {
      "LastRunTime": {}
    }
  }
]
```

<h2 id="tocS_UsageOperation">UsageOperation</h2>
<!-- backwards compatibility -->
<a id="schemausageoperation"></a>
<a id="schema_UsageOperation"></a>
<a id="tocSusageoperation"></a>
<a id="tocsusageoperation"></a>

```json
"string"
```

<h2 id="tocS_LicenseConversionTask">LicenseConversionTask</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconversiontask"></a>
<a id="schema_LicenseConversionTask"></a>
<a id="tocSlicenseconversiontask"></a>
<a id="tocslicenseconversiontask"></a>

```json
{
  "LicenseConversionTaskId": {},
  "ResourceArn": {},
  "SourceLicenseContext": {
    "UsageOperation": {}
  },
  "DestinationLicenseContext": {
    "UsageOperation": {}
  },
  "Status": {},
  "StatusMessage": {},
  "StartTime": {},
  "LicenseConversionTime": {},
  "EndTime": {}
}
```

Information about a license type conversion task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConversionTaskId|object|false|none|none|
|ResourceArn|object|false|none|none|
|SourceLicenseContext|object|false|none|none|
|DestinationLicenseContext|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|StartTime|object|false|none|none|
|LicenseConversionTime|object|false|none|none|
|EndTime|object|false|none|none|

<h2 id="tocS_LicenseConversionTasks">LicenseConversionTasks</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconversiontasks"></a>
<a id="schema_LicenseConversionTasks"></a>
<a id="tocSlicenseconversiontasks"></a>
<a id="tocslicenseconversiontasks"></a>

```json
[
  {
    "LicenseConversionTaskId": {},
    "ResourceArn": {},
    "SourceLicenseContext": {
      "UsageOperation": {}
    },
    "DestinationLicenseContext": {
      "UsageOperation": {}
    },
    "Status": {},
    "StatusMessage": {},
    "StartTime": {},
    "LicenseConversionTime": {},
    "EndTime": {}
  }
]
```

<h2 id="tocS_LicenseList">LicenseList</h2>
<!-- backwards compatibility -->
<a id="schemalicenselist"></a>
<a id="schema_LicenseList"></a>
<a id="tocSlicenselist"></a>
<a id="tocslicenselist"></a>

```json
[
  {
    "LicenseArn": {},
    "LicenseName": {},
    "ProductName": {},
    "ProductSKU": {},
    "Issuer": {
      "Name": {},
      "SignKey": {},
      "KeyFingerprint": {}
    },
    "HomeRegion": {},
    "Status": {},
    "Validity": {
      "Begin": {},
      "End": {}
    },
    "Beneficiary": {},
    "Entitlements": {},
    "ConsumptionConfiguration": {
      "RenewType": {},
      "ProvisionalConfiguration": {
        "MaxTimeToLiveInMinutes": {}
      },
      "BorrowConfiguration": {
        "AllowEarlyCheckIn": {},
        "MaxTimeToLiveInMinutes": {}
      }
    },
    "LicenseMetadata": {},
    "CreateTime": {},
    "Version": {}
  }
]
```

<h2 id="tocS_LicenseOperationFailure">LicenseOperationFailure</h2>
<!-- backwards compatibility -->
<a id="schemalicenseoperationfailure"></a>
<a id="schema_LicenseOperationFailure"></a>
<a id="tocSlicenseoperationfailure"></a>
<a id="tocslicenseoperationfailure"></a>

```json
{
  "ResourceArn": {},
  "ResourceType": {},
  "ErrorMessage": {},
  "FailureTime": {},
  "OperationName": {},
  "ResourceOwnerId": {},
  "OperationRequestedBy": {},
  "MetadataList": {}
}
```

Describes the failure of a license operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|false|none|none|
|ResourceType|object|false|none|none|
|ErrorMessage|object|false|none|none|
|FailureTime|object|false|none|none|
|OperationName|object|false|none|none|
|ResourceOwnerId|object|false|none|none|
|OperationRequestedBy|object|false|none|none|
|MetadataList|object|false|none|none|

<h2 id="tocS_LicenseOperationFailureList">LicenseOperationFailureList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseoperationfailurelist"></a>
<a id="schema_LicenseOperationFailureList"></a>
<a id="tocSlicenseoperationfailurelist"></a>
<a id="tocslicenseoperationfailurelist"></a>

```json
[
  {
    "ResourceArn": {},
    "ResourceType": {},
    "ErrorMessage": {},
    "FailureTime": {},
    "OperationName": {},
    "ResourceOwnerId": {},
    "OperationRequestedBy": {},
    "MetadataList": {}
  }
]
```

<h2 id="tocS_LicenseSpecification">LicenseSpecification</h2>
<!-- backwards compatibility -->
<a id="schemalicensespecification"></a>
<a id="schema_LicenseSpecification"></a>
<a id="tocSlicensespecification"></a>
<a id="tocslicensespecification"></a>

```json
{
  "LicenseConfigurationArn": {},
  "AmiAssociationScope": {}
}
```

Details for associating a license configuration with a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LicenseConfigurationArn|object|true|none|none|
|AmiAssociationScope|object|false|none|none|

<h2 id="tocS_LicenseSpecifications">LicenseSpecifications</h2>
<!-- backwards compatibility -->
<a id="schemalicensespecifications"></a>
<a id="schema_LicenseSpecifications"></a>
<a id="tocSlicensespecifications"></a>
<a id="tocslicensespecifications"></a>

```json
[
  {
    "LicenseConfigurationArn": {},
    "AmiAssociationScope": {}
  }
]
```

<h2 id="tocS_MaxSize100">MaxSize100</h2>
<!-- backwards compatibility -->
<a id="schemamaxsize100"></a>
<a id="schema_MaxSize100"></a>
<a id="tocSmaxsize100"></a>
<a id="tocsmaxsize100"></a>

```json
1
```

<h2 id="tocS_ReportGeneratorList">ReportGeneratorList</h2>
<!-- backwards compatibility -->
<a id="schemareportgeneratorlist"></a>
<a id="schema_ReportGeneratorList"></a>
<a id="tocSreportgeneratorlist"></a>
<a id="tocsreportgeneratorlist"></a>

```json
[
  {
    "ReportGeneratorName": {},
    "ReportType": {},
    "ReportContext": {
      "licenseConfigurationArns": {}
    },
    "ReportFrequency": {
      "value": {},
      "period": {}
    },
    "LicenseManagerReportGeneratorArn": {},
    "LastRunStatus": {},
    "LastRunFailureReason": {},
    "LastReportGenerationTime": {},
    "ReportCreatorAccount": {},
    "Description": {},
    "S3Location": {
      "bucket": {},
      "keyPrefix": {}
    },
    "CreateTime": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_ResourceInventoryList">ResourceInventoryList</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinventorylist"></a>
<a id="schema_ResourceInventoryList"></a>
<a id="tocSresourceinventorylist"></a>
<a id="tocsresourceinventorylist"></a>

```json
[
  {
    "ResourceId": {},
    "ResourceType": {},
    "ResourceArn": {},
    "Platform": {},
    "PlatformVersion": {},
    "ResourceOwningAccountId": {}
  }
]
```

<h2 id="tocS_TokenList">TokenList</h2>
<!-- backwards compatibility -->
<a id="schematokenlist"></a>
<a id="schema_TokenList"></a>
<a id="tocStokenlist"></a>
<a id="tocstokenlist"></a>

```json
[
  {
    "TokenId": {},
    "TokenType": {},
    "LicenseArn": {},
    "ExpirationTime": {},
    "TokenProperties": {},
    "RoleArns": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ManagedResourceSummary">ManagedResourceSummary</h2>
<!-- backwards compatibility -->
<a id="schemamanagedresourcesummary"></a>
<a id="schema_ManagedResourceSummary"></a>
<a id="tocSmanagedresourcesummary"></a>
<a id="tocsmanagedresourcesummary"></a>

```json
{
  "ResourceType": {},
  "AssociationCount": {}
}
```

Summary information about a managed resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|AssociationCount|object|false|none|none|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Describes key/value pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ProductInformationFilterList">ProductInformationFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaproductinformationfilterlist"></a>
<a id="schema_ProductInformationFilterList"></a>
<a id="tocSproductinformationfilterlist"></a>
<a id="tocsproductinformationfilterlist"></a>

```json
[
  {
    "ProductInformationFilterName": {},
    "ProductInformationFilterValue": {},
    "ProductInformationFilterComparator": {}
  }
]
```

<h2 id="tocS_ProductInformation">ProductInformation</h2>
<!-- backwards compatibility -->
<a id="schemaproductinformation"></a>
<a id="schema_ProductInformation"></a>
<a id="tocSproductinformation"></a>
<a id="tocsproductinformation"></a>

```json
{
  "ResourceType": {},
  "ProductInformationFilterList": {}
}
```

Describes product information for a license configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|true|none|none|
|ProductInformationFilterList|object|true|none|none|

<h2 id="tocS_ProductInformationFilter">ProductInformationFilter</h2>
<!-- backwards compatibility -->
<a id="schemaproductinformationfilter"></a>
<a id="schema_ProductInformationFilter"></a>
<a id="tocSproductinformationfilter"></a>
<a id="tocsproductinformationfilter"></a>

```json
{
  "ProductInformationFilterName": {},
  "ProductInformationFilterValue": {},
  "ProductInformationFilterComparator": {}
}
```

Describes product information filters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductInformationFilterName|object|true|none|none|
|ProductInformationFilterValue|object|false|none|none|
|ProductInformationFilterComparator|object|true|none|none|

<h2 id="tocS_ReceivedStatus">ReceivedStatus</h2>
<!-- backwards compatibility -->
<a id="schemareceivedstatus"></a>
<a id="schema_ReceivedStatus"></a>
<a id="tocSreceivedstatus"></a>
<a id="tocsreceivedstatus"></a>

```json
"PENDING_WORKFLOW"
```

<h2 id="tocS_ReportFrequencyType">ReportFrequencyType</h2>
<!-- backwards compatibility -->
<a id="schemareportfrequencytype"></a>
<a id="schema_ReportFrequencyType"></a>
<a id="tocSreportfrequencytype"></a>
<a id="tocsreportfrequencytype"></a>

```json
"DAY"
```

<h2 id="tocS_S3Location">S3Location</h2>
<!-- backwards compatibility -->
<a id="schemas3location"></a>
<a id="schema_S3Location"></a>
<a id="tocSs3location"></a>
<a id="tocss3location"></a>

```json
{
  "bucket": {},
  "keyPrefix": {}
}
```

Details of the S3 bucket that report generator reports are published to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|object|false|none|none|
|keyPrefix|object|false|none|none|

<h2 id="tocS_ReportType">ReportType</h2>
<!-- backwards compatibility -->
<a id="schemareporttype"></a>
<a id="schema_ReportType"></a>
<a id="tocSreporttype"></a>
<a id="tocsreporttype"></a>

```json
"LicenseConfigurationSummaryReport"
```

<h2 id="tocS_ResourceInventory">ResourceInventory</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinventory"></a>
<a id="schema_ResourceInventory"></a>
<a id="tocSresourceinventory"></a>
<a id="tocsresourceinventory"></a>

```json
{
  "ResourceId": {},
  "ResourceType": {},
  "ResourceArn": {},
  "Platform": {},
  "PlatformVersion": {},
  "ResourceOwningAccountId": {}
}
```

Details about a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|ResourceArn|object|false|none|none|
|Platform|object|false|none|none|
|PlatformVersion|object|false|none|none|
|ResourceOwningAccountId|object|false|none|none|

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

Details about a tag for a license configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

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

<h2 id="tocS_TokenData">TokenData</h2>
<!-- backwards compatibility -->
<a id="schematokendata"></a>
<a id="schema_TokenData"></a>
<a id="tocStokendata"></a>
<a id="tocstokendata"></a>

```json
{
  "TokenId": {},
  "TokenType": {},
  "LicenseArn": {},
  "ExpirationTime": {},
  "TokenProperties": {},
  "RoleArns": {},
  "Status": {}
}
```

Describes a token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TokenId|object|false|none|none|
|TokenType|object|false|none|none|
|LicenseArn|object|false|none|none|
|ExpirationTime|object|false|none|none|
|TokenProperties|object|false|none|none|
|RoleArns|object|false|none|none|
|Status|object|false|none|none|
