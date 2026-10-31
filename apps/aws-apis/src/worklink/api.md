<h1 id="amazon-worklink">Amazon WorkLink v2018-09-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.

Base URLs:

* <a href="http://worklink.us-east-1.amazonaws.com">http://worklink.us-east-1.amazonaws.com</a> - The WorkLink multi-region endpoint

* <a href="https://worklink.us-east-1.amazonaws.com">https://worklink.us-east-1.amazonaws.com</a> - The WorkLink multi-region endpoint

* <a href="http://worklink.cn-north-1.amazonaws.com.cn">http://worklink.cn-north-1.amazonaws.com.cn</a> - The WorkLink endpoint for China (Beijing) and China (Ningxia)

* <a href="https://worklink.cn-north-1.amazonaws.com.cn">https://worklink.cn-north-1.amazonaws.com.cn</a> - The WorkLink endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/worklink/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-worklink-default">Default</h1>

## AssociateDomain

<a id="opIdAssociateDomain"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/associateDomain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string",
    "DisplayName": "string",
    "AcmCertificateArn": "string"
  }'
```

`POST /associateDomain`

<aside class="warning">
This operation is deprecated
</aside>

Specifies a domain to be associated to Amazon WorkLink.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string",
  "DisplayName": "string",
  "AcmCertificateArn": "string"
}
```

<h3 id="associatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The Amazon Resource Name (ARN) of the fleet.|
|» DomainName|body|string|true|The fully qualified domain name (FQDN).|
|» DisplayName|body|string|false|The name to display.|
|» AcmCertificateArn|body|string|true|The ARN of an issued ACM certificate that is valid for the domain being associated.|

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

<h3 id="associatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDomainResponse](#schemaassociatedomainresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWebsiteAuthorizationProvider

<a id="opIdAssociateWebsiteAuthorizationProvider"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/associateWebsiteAuthorizationProvider \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "AuthorizationProviderType": "SAML",
    "DomainName": "string"
  }'
```

`POST /associateWebsiteAuthorizationProvider`

<aside class="warning">
This operation is deprecated
</aside>

Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "AuthorizationProviderType": "SAML",
  "DomainName": "string"
}
```

<h3 id="associatewebsiteauthorizationprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» AuthorizationProviderType|body|string|true|The authorization provider type.|
|» DomainName|body|string|false|The domain name of the authorization provider. This applies only to SAML-based authorization providers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» AuthorizationProviderType|SAML|

> Example responses

> 200 Response

```json
{
  "AuthorizationProviderId": {}
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

<h3 id="associatewebsiteauthorizationprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateWebsiteAuthorizationProviderResponse](#schemaassociatewebsiteauthorizationproviderresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateWebsiteCertificateAuthority

<a id="opIdAssociateWebsiteCertificateAuthority"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/associateWebsiteCertificateAuthority \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "Certificate": "string",
    "DisplayName": "string"
  }'
```

`POST /associateWebsiteCertificateAuthority`

<aside class="warning">
This operation is deprecated
</aside>

Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "Certificate": "string",
  "DisplayName": "string"
}
```

<h3 id="associatewebsitecertificateauthority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» Certificate|body|string|true|The root certificate of the CA.|
|» DisplayName|body|string|false|The certificate name to display.|

> Example responses

> 200 Response

```json
{
  "WebsiteCaId": {}
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

<h3 id="associatewebsitecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateWebsiteCertificateAuthorityResponse](#schemaassociatewebsitecertificateauthorityresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFleet

<a id="opIdCreateFleet"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/createFleet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetName": "string",
    "DisplayName": "string",
    "OptimizeForEndUserLocation": true,
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /createFleet`

<aside class="warning">
This operation is deprecated
</aside>

Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.

> Body parameter

```json
{
  "FleetName": "string",
  "DisplayName": "string",
  "OptimizeForEndUserLocation": true,
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createfleet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetName|body|string|true|A unique name for the fleet.|
|» DisplayName|body|string|false|The fleet name to display.|
|» OptimizeForEndUserLocation|body|boolean|false|The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.|
|» Tags|body|object|false| The tags to add to the resource. A tag is a key-value pair.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "FleetArn": {}
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

<h3 id="createfleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFleetResponse](#schemacreatefleetresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFleet

<a id="opIdDeleteFleet"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/deleteFleet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /deleteFleet`

<aside class="warning">
This operation is deprecated
</aside>

Deletes a fleet. Prevents users from accessing previously associated websites. 

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="deletefleet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|

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

<h3 id="deletefleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFleetResponse](#schemadeletefleetresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAuditStreamConfiguration

<a id="opIdDescribeAuditStreamConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeAuditStreamConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /describeAuditStreamConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Describes the configuration for delivering audit streams to the customer account.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="describeauditstreamconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|

> Example responses

> 200 Response

```json
{
  "AuditStreamArn": {}
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

<h3 id="describeauditstreamconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAuditStreamConfigurationResponse](#schemadescribeauditstreamconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCompanyNetworkConfiguration

<a id="opIdDescribeCompanyNetworkConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeCompanyNetworkConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /describeCompanyNetworkConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Describes the networking configuration to access the internal websites associated with the specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="describecompanynetworkconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|

> Example responses

> 200 Response

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {}
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

<h3 id="describecompanynetworkconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCompanyNetworkConfigurationResponse](#schemadescribecompanynetworkconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDevice

<a id="opIdDescribeDevice"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeDevice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DeviceId": "string"
  }'
```

`POST /describeDevice`

<aside class="warning">
This operation is deprecated
</aside>

Provides information about a user's device.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DeviceId": "string"
}
```

<h3 id="describedevice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DeviceId|body|string|true|A unique identifier for a registered user's device.|

> Example responses

> 200 Response

```json
{
  "Status": {},
  "Model": {},
  "Manufacturer": {},
  "OperatingSystem": {},
  "OperatingSystemVersion": {},
  "PatchLevel": {},
  "FirstAccessedTime": {},
  "LastAccessedTime": {},
  "Username": {}
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

<h3 id="describedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDeviceResponse](#schemadescribedeviceresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDevicePolicyConfiguration

<a id="opIdDescribeDevicePolicyConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeDevicePolicyConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /describeDevicePolicyConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Describes the device policy configuration for the specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="describedevicepolicyconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|

> Example responses

> 200 Response

```json
{
  "DeviceCaCertificate": {}
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

<h3 id="describedevicepolicyconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDevicePolicyConfigurationResponse](#schemadescribedevicepolicyconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomain

<a id="opIdDescribeDomain"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeDomain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string"
  }'
```

`POST /describeDomain`

<aside class="warning">
This operation is deprecated
</aside>

Provides information about the domain.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string"
}
```

<h3 id="describedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DomainName|body|string|true|The name of the domain.|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "DisplayName": {},
  "CreatedTime": {},
  "DomainStatus": {},
  "AcmCertificateArn": {}
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

<h3 id="describedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainResponse](#schemadescribedomainresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFleetMetadata

<a id="opIdDescribeFleetMetadata"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeFleetMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /describeFleetMetadata`

<aside class="warning">
This operation is deprecated
</aside>

Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="describefleetmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The Amazon Resource Name (ARN) of the fleet.|

> Example responses

> 200 Response

```json
{
  "CreatedTime": {},
  "LastUpdatedTime": {},
  "FleetName": {},
  "DisplayName": {},
  "OptimizeForEndUserLocation": {},
  "CompanyCode": {},
  "FleetStatus": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
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

<h3 id="describefleetmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFleetMetadataResponse](#schemadescribefleetmetadataresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeIdentityProviderConfiguration

<a id="opIdDescribeIdentityProviderConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeIdentityProviderConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst"
  }'
```

`POST /describeIdentityProviderConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Describes the identity provider configuration of the specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst"
}
```

<h3 id="describeidentityproviderconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|

> Example responses

> 200 Response

```json
{
  "IdentityProviderType": {},
  "ServiceProviderSamlMetadata": {},
  "IdentityProviderSamlMetadata": {}
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

<h3 id="describeidentityproviderconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeIdentityProviderConfigurationResponse](#schemadescribeidentityproviderconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeWebsiteCertificateAuthority

<a id="opIdDescribeWebsiteCertificateAuthority"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/describeWebsiteCertificateAuthority \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "WebsiteCaId": "string"
  }'
```

`POST /describeWebsiteCertificateAuthority`

<aside class="warning">
This operation is deprecated
</aside>

Provides information about the certificate authority.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "WebsiteCaId": "string"
}
```

<h3 id="describewebsitecertificateauthority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» WebsiteCaId|body|string|true|A unique identifier for the certificate authority.|

> Example responses

> 200 Response

```json
{
  "Certificate": {},
  "CreatedTime": {},
  "DisplayName": {}
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

<h3 id="describewebsitecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeWebsiteCertificateAuthorityResponse](#schemadescribewebsitecertificateauthorityresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDomain

<a id="opIdDisassociateDomain"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/disassociateDomain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string"
  }'
```

`POST /disassociateDomain`

<aside class="warning">
This operation is deprecated
</aside>

Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string"
}
```

<h3 id="disassociatedomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DomainName|body|string|true|The name of the domain.|

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

<h3 id="disassociatedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDomainResponse](#schemadisassociatedomainresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWebsiteAuthorizationProvider

<a id="opIdDisassociateWebsiteAuthorizationProvider"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/disassociateWebsiteAuthorizationProvider \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "AuthorizationProviderId": "string"
  }'
```

`POST /disassociateWebsiteAuthorizationProvider`

<aside class="warning">
This operation is deprecated
</aside>

Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "AuthorizationProviderId": "string"
}
```

<h3 id="disassociatewebsiteauthorizationprovider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» AuthorizationProviderId|body|string|true|A unique identifier for the authorization provider.|

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

<h3 id="disassociatewebsiteauthorizationprovider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateWebsiteAuthorizationProviderResponse](#schemadisassociatewebsiteauthorizationproviderresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateWebsiteCertificateAuthority

<a id="opIdDisassociateWebsiteCertificateAuthority"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/disassociateWebsiteCertificateAuthority \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "WebsiteCaId": "string"
  }'
```

`POST /disassociateWebsiteCertificateAuthority`

<aside class="warning">
This operation is deprecated
</aside>

Removes a certificate authority (CA).

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "WebsiteCaId": "string"
}
```

<h3 id="disassociatewebsitecertificateauthority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» WebsiteCaId|body|string|true|A unique identifier for the CA.|

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

<h3 id="disassociatewebsitecertificateauthority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateWebsiteCertificateAuthorityResponse](#schemadisassociatewebsitecertificateauthorityresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevices

<a id="opIdListDevices"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/listDevices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listDevices`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of devices registered with the specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listdevices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» NextToken|body|string|false|The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» MaxResults|body|integer|false|The maximum number of results to be included in the next page.|

> Example responses

> 200 Response

```json
{
  "Devices": {},
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

<h3 id="listdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicesResponse](#schemalistdevicesresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomains

<a id="opIdListDomains"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/listDomains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listDomains`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of domains associated to a specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» NextToken|body|string|false|The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» MaxResults|body|integer|false|The maximum number of results to be included in the next page.|

> Example responses

> 200 Response

```json
{
  "Domains": {},
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

<h3 id="listdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResponse](#schemalistdomainsresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFleets

<a id="opIdListFleets"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/listFleets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listFleets`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of fleets for the current account and Region.

> Body parameter

```json
{
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listfleets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» NextToken|body|string|false|The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» MaxResults|body|integer|false|The maximum number of results to be included in the next page.|

> Example responses

> 200 Response

```json
{
  "FleetSummaryList": {},
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

<h3 id="listfleets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFleetsResponse](#schemalistfleetsresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/tags/stringstringstringst \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of tags for the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the fleet.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/tags/stringstringstringst \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

<aside class="warning">
This operation is deprecated
</aside>

Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the fleet.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|The tags to add to the resource. A tag is a key-value pair.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebsiteAuthorizationProviders

<a id="opIdListWebsiteAuthorizationProviders"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/listWebsiteAuthorizationProviders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "NextToken": "string",
    "MaxResults": 1
  }'
```

`POST /listWebsiteAuthorizationProviders`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of website authorization providers associated with a specified fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "NextToken": "string",
  "MaxResults": 1
}
```

<h3 id="listwebsiteauthorizationproviders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» NextToken|body|string|false|The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|
|» MaxResults|body|integer|false|The maximum number of results to be included in the next page.|

> Example responses

> 200 Response

```json
{
  "WebsiteAuthorizationProviders": {},
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

<h3 id="listwebsiteauthorizationproviders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebsiteAuthorizationProvidersResponse](#schemalistwebsiteauthorizationprovidersresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWebsiteCertificateAuthorities

<a id="opIdListWebsiteCertificateAuthorities"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/listWebsiteCertificateAuthorities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /listWebsiteCertificateAuthorities`

<aside class="warning">
This operation is deprecated
</aside>

Retrieves a list of certificate authorities added for the current account and Region.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listwebsitecertificateauthorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» MaxResults|body|integer|false|The maximum number of results to be included in the next page.|
|» NextToken|body|string|false|The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.|

> Example responses

> 200 Response

```json
{
  "WebsiteCertificateAuthorities": {},
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

<h3 id="listwebsitecertificateauthorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWebsiteCertificateAuthoritiesResponse](#schemalistwebsitecertificateauthoritiesresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RestoreDomainAccess

<a id="opIdRestoreDomainAccess"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/restoreDomainAccess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string"
  }'
```

`POST /restoreDomainAccess`

<aside class="warning">
This operation is deprecated
</aside>

Moves a domain to ACTIVE status if it was in the INACTIVE status.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string"
}
```

<h3 id="restoredomainaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DomainName|body|string|true|The name of the domain.|

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

<h3 id="restoredomainaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RestoreDomainAccessResponse](#schemarestoredomainaccessresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeDomainAccess

<a id="opIdRevokeDomainAccess"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/revokeDomainAccess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string"
  }'
```

`POST /revokeDomainAccess`

<aside class="warning">
This operation is deprecated
</aside>

Moves a domain to INACTIVE status if it was in the ACTIVE status.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string"
}
```

<h3 id="revokedomainaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DomainName|body|string|true|The name of the domain.|

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

<h3 id="revokedomainaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeDomainAccessResponse](#schemarevokedomainaccessresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SignOutUser

<a id="opIdSignOutUser"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/signOutUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "Username": "string"
  }'
```

`POST /signOutUser`

<aside class="warning">
This operation is deprecated
</aside>

Signs the user out from all of their devices. The user can sign in again if they have valid credentials.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "Username": "string"
}
```

<h3 id="signoutuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» Username|body|string|true|The name of the user.|

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

<h3 id="signoutuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SignOutUserResponse](#schemasignoutuserresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://worklink.us-east-1.amazonaws.com/tags/stringstringstringst#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

<aside class="warning">
This operation is deprecated
</aside>

Removes one or more tags from the specified resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|The Amazon Resource Name (ARN) of the fleet.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The list of tag keys to remove from the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateAuditStreamConfiguration

<a id="opIdUpdateAuditStreamConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/updateAuditStreamConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "AuditStreamArn": "string"
  }'
```

`POST /updateAuditStreamConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Updates the audit stream configuration for the fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "AuditStreamArn": "string"
}
```

<h3 id="updateauditstreamconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» AuditStreamArn|body|string|false|The ARN of the Amazon Kinesis data stream that receives the audit events.|

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

<h3 id="updateauditstreamconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateAuditStreamConfigurationResponse](#schemaupdateauditstreamconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCompanyNetworkConfiguration

<a id="opIdUpdateCompanyNetworkConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/updateCompanyNetworkConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "VpcId": "string",
    "SubnetIds": [
      "string"
    ],
    "SecurityGroupIds": [
      "string"
    ]
  }'
```

`POST /updateCompanyNetworkConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Updates the company network configuration for the fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "VpcId": "string",
  "SubnetIds": [
    "string"
  ],
  "SecurityGroupIds": [
    "string"
  ]
}
```

<h3 id="updatecompanynetworkconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» VpcId|body|string|true|The VPC with connectivity to associated websites.|
|» SubnetIds|body|[[SubnetId](#schemasubnetid)]|true|The subnets used for X-ENI connections from Amazon WorkLink rendering containers.|
|» SecurityGroupIds|body|[[SecurityGroupId](#schemasecuritygroupid)]|true|The security groups associated with access to the provided subnets.|

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

<h3 id="updatecompanynetworkconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCompanyNetworkConfigurationResponse](#schemaupdatecompanynetworkconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDevicePolicyConfiguration

<a id="opIdUpdateDevicePolicyConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/updateDevicePolicyConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DeviceCaCertificate": "string"
  }'
```

`POST /updateDevicePolicyConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Updates the device policy configuration for the fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DeviceCaCertificate": "string"
}
```

<h3 id="updatedevicepolicyconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DeviceCaCertificate|body|string|false|The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.|

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

<h3 id="updatedevicepolicyconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDevicePolicyConfigurationResponse](#schemaupdatedevicepolicyconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainMetadata

<a id="opIdUpdateDomainMetadata"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/updateDomainMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DomainName": "string",
    "DisplayName": "string"
  }'
```

`POST /updateDomainMetadata`

<aside class="warning">
This operation is deprecated
</aside>

Updates domain metadata, such as DisplayName.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DomainName": "string",
  "DisplayName": "string"
}
```

<h3 id="updatedomainmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DomainName|body|string|true|The name of the domain.|
|» DisplayName|body|string|false|The name to display.|

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

<h3 id="updatedomainmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainMetadataResponse](#schemaupdatedomainmetadataresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFleetMetadata

<a id="opIdUpdateFleetMetadata"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/UpdateFleetMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "DisplayName": "string",
    "OptimizeForEndUserLocation": true
  }'
```

`POST /UpdateFleetMetadata`

<aside class="warning">
This operation is deprecated
</aside>

Updates fleet metadata, such as DisplayName.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "DisplayName": "string",
  "OptimizeForEndUserLocation": true
}
```

<h3 id="updatefleetmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» DisplayName|body|string|false|The fleet name to display. The existing DisplayName is unset if null is passed.|
|» OptimizeForEndUserLocation|body|boolean|false|The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.|

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

<h3 id="updatefleetmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFleetMetadataResponse](#schemaupdatefleetmetadataresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateIdentityProviderConfiguration

<a id="opIdUpdateIdentityProviderConfiguration"></a>

> Code samples

```bash
curl https://worklink.us-east-1.amazonaws.com/updateIdentityProviderConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "FleetArn": "stringstringstringst",
    "IdentityProviderType": "SAML",
    "IdentityProviderSamlMetadata": "string"
  }'
```

`POST /updateIdentityProviderConfiguration`

<aside class="warning">
This operation is deprecated
</aside>

Updates the identity provider configuration for the fleet.

> Body parameter

```json
{
  "FleetArn": "stringstringstringst",
  "IdentityProviderType": "SAML",
  "IdentityProviderSamlMetadata": "string"
}
```

<h3 id="updateidentityproviderconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FleetArn|body|string|true|The ARN of the fleet.|
|» IdentityProviderType|body|string|true|The type of identity provider.|
|» IdentityProviderSamlMetadata|body|string|false|The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» IdentityProviderType|SAML|

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

<h3 id="updateidentityproviderconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateIdentityProviderConfigurationResponse](#schemaupdateidentityproviderconfigurationresponse)|
|480|480|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateDomainResponse">AssociateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedomainresponse"></a>
<a id="schema_AssociateDomainResponse"></a>
<a id="tocSassociatedomainresponse"></a>
<a id="tocsassociatedomainresponse"></a>

```json
{}
```

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

```json
null
```

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_AssociateWebsiteAuthorizationProviderResponse">AssociateWebsiteAuthorizationProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebsiteauthorizationproviderresponse"></a>
<a id="schema_AssociateWebsiteAuthorizationProviderResponse"></a>
<a id="tocSassociatewebsiteauthorizationproviderresponse"></a>
<a id="tocsassociatewebsiteauthorizationproviderresponse"></a>

```json
{
  "AuthorizationProviderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationProviderId|object|false|none|none|

<h2 id="tocS_AssociateWebsiteCertificateAuthorityResponse">AssociateWebsiteCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebsitecertificateauthorityresponse"></a>
<a id="schema_AssociateWebsiteCertificateAuthorityResponse"></a>
<a id="tocSassociatewebsitecertificateauthorityresponse"></a>
<a id="tocsassociatewebsitecertificateauthorityresponse"></a>

```json
{
  "WebsiteCaId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebsiteCaId|object|false|none|none|

<h2 id="tocS_CreateFleetResponse">CreateFleetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetresponse"></a>
<a id="schema_CreateFleetResponse"></a>
<a id="tocScreatefleetresponse"></a>
<a id="tocscreatefleetresponse"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_DeleteFleetResponse">DeleteFleetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetresponse"></a>
<a id="schema_DeleteFleetResponse"></a>
<a id="tocSdeletefleetresponse"></a>
<a id="tocsdeletefleetresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAuditStreamConfigurationResponse">DescribeAuditStreamConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeauditstreamconfigurationresponse"></a>
<a id="schema_DescribeAuditStreamConfigurationResponse"></a>
<a id="tocSdescribeauditstreamconfigurationresponse"></a>
<a id="tocsdescribeauditstreamconfigurationresponse"></a>

```json
{
  "AuditStreamArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuditStreamArn|object|false|none|none|

<h2 id="tocS_DescribeCompanyNetworkConfigurationResponse">DescribeCompanyNetworkConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompanynetworkconfigurationresponse"></a>
<a id="schema_DescribeCompanyNetworkConfigurationResponse"></a>
<a id="tocSdescribecompanynetworkconfigurationresponse"></a>
<a id="tocsdescribecompanynetworkconfigurationresponse"></a>

```json
{
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|false|none|none|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_DescribeDeviceResponse">DescribeDeviceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedeviceresponse"></a>
<a id="schema_DescribeDeviceResponse"></a>
<a id="tocSdescribedeviceresponse"></a>
<a id="tocsdescribedeviceresponse"></a>

```json
{
  "Status": {},
  "Model": {},
  "Manufacturer": {},
  "OperatingSystem": {},
  "OperatingSystemVersion": {},
  "PatchLevel": {},
  "FirstAccessedTime": {},
  "LastAccessedTime": {},
  "Username": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|Model|object|false|none|none|
|Manufacturer|object|false|none|none|
|OperatingSystem|object|false|none|none|
|OperatingSystemVersion|object|false|none|none|
|PatchLevel|object|false|none|none|
|FirstAccessedTime|object|false|none|none|
|LastAccessedTime|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_DescribeDevicePolicyConfigurationResponse">DescribeDevicePolicyConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedevicepolicyconfigurationresponse"></a>
<a id="schema_DescribeDevicePolicyConfigurationResponse"></a>
<a id="tocSdescribedevicepolicyconfigurationresponse"></a>
<a id="tocsdescribedevicepolicyconfigurationresponse"></a>

```json
{
  "DeviceCaCertificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceCaCertificate|object|false|none|none|

<h2 id="tocS_DescribeDomainResponse">DescribeDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainresponse"></a>
<a id="schema_DescribeDomainResponse"></a>
<a id="tocSdescribedomainresponse"></a>
<a id="tocsdescribedomainresponse"></a>

```json
{
  "DomainName": {},
  "DisplayName": {},
  "CreatedTime": {},
  "DomainStatus": {},
  "AcmCertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|DisplayName|object|false|none|none|
|CreatedTime|object|false|none|none|
|DomainStatus|object|false|none|none|
|AcmCertificateArn|object|false|none|none|

<h2 id="tocS_DescribeFleetMetadataResponse">DescribeFleetMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetmetadataresponse"></a>
<a id="schema_DescribeFleetMetadataResponse"></a>
<a id="tocSdescribefleetmetadataresponse"></a>
<a id="tocsdescribefleetmetadataresponse"></a>

```json
{
  "CreatedTime": {},
  "LastUpdatedTime": {},
  "FleetName": {},
  "DisplayName": {},
  "OptimizeForEndUserLocation": {},
  "CompanyCode": {},
  "FleetStatus": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|FleetName|object|false|none|none|
|DisplayName|object|false|none|none|
|OptimizeForEndUserLocation|object|false|none|none|
|CompanyCode|object|false|none|none|
|FleetStatus|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeIdentityProviderConfigurationResponse">DescribeIdentityProviderConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderconfigurationresponse"></a>
<a id="schema_DescribeIdentityProviderConfigurationResponse"></a>
<a id="tocSdescribeidentityproviderconfigurationresponse"></a>
<a id="tocsdescribeidentityproviderconfigurationresponse"></a>

```json
{
  "IdentityProviderType": {},
  "ServiceProviderSamlMetadata": {},
  "IdentityProviderSamlMetadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdentityProviderType|object|false|none|none|
|ServiceProviderSamlMetadata|object|false|none|none|
|IdentityProviderSamlMetadata|object|false|none|none|

<h2 id="tocS_DescribeWebsiteCertificateAuthorityResponse">DescribeWebsiteCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribewebsitecertificateauthorityresponse"></a>
<a id="schema_DescribeWebsiteCertificateAuthorityResponse"></a>
<a id="tocSdescribewebsitecertificateauthorityresponse"></a>
<a id="tocsdescribewebsitecertificateauthorityresponse"></a>

```json
{
  "Certificate": {},
  "CreatedTime": {},
  "DisplayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Certificate|object|false|none|none|
|CreatedTime|object|false|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_DisassociateDomainResponse">DisassociateDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedomainresponse"></a>
<a id="schema_DisassociateDomainResponse"></a>
<a id="tocSdisassociatedomainresponse"></a>
<a id="tocsdisassociatedomainresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWebsiteAuthorizationProviderResponse">DisassociateWebsiteAuthorizationProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebsiteauthorizationproviderresponse"></a>
<a id="schema_DisassociateWebsiteAuthorizationProviderResponse"></a>
<a id="tocSdisassociatewebsiteauthorizationproviderresponse"></a>
<a id="tocsdisassociatewebsiteauthorizationproviderresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateWebsiteCertificateAuthorityResponse">DisassociateWebsiteCertificateAuthorityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebsitecertificateauthorityresponse"></a>
<a id="schema_DisassociateWebsiteCertificateAuthorityResponse"></a>
<a id="tocSdisassociatewebsitecertificateauthorityresponse"></a>
<a id="tocsdisassociatewebsitecertificateauthorityresponse"></a>

```json
{}
```

<h2 id="tocS_ListDevicesResponse">ListDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesresponse"></a>
<a id="schema_ListDevicesResponse"></a>
<a id="tocSlistdevicesresponse"></a>
<a id="tocslistdevicesresponse"></a>

```json
{
  "Devices": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Devices|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "Domains": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domains|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListFleetsResponse">ListFleetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsresponse"></a>
<a id="schema_ListFleetsResponse"></a>
<a id="tocSlistfleetsresponse"></a>
<a id="tocslistfleetsresponse"></a>

```json
{
  "FleetSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListWebsiteAuthorizationProvidersResponse">ListWebsiteAuthorizationProvidersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsiteauthorizationprovidersresponse"></a>
<a id="schema_ListWebsiteAuthorizationProvidersResponse"></a>
<a id="tocSlistwebsiteauthorizationprovidersresponse"></a>
<a id="tocslistwebsiteauthorizationprovidersresponse"></a>

```json
{
  "WebsiteAuthorizationProviders": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebsiteAuthorizationProviders|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListWebsiteCertificateAuthoritiesResponse">ListWebsiteCertificateAuthoritiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsitecertificateauthoritiesresponse"></a>
<a id="schema_ListWebsiteCertificateAuthoritiesResponse"></a>
<a id="tocSlistwebsitecertificateauthoritiesresponse"></a>
<a id="tocslistwebsitecertificateauthoritiesresponse"></a>

```json
{
  "WebsiteCertificateAuthorities": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebsiteCertificateAuthorities|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RestoreDomainAccessResponse">RestoreDomainAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemarestoredomainaccessresponse"></a>
<a id="schema_RestoreDomainAccessResponse"></a>
<a id="tocSrestoredomainaccessresponse"></a>
<a id="tocsrestoredomainaccessresponse"></a>

```json
{}
```

<h2 id="tocS_RevokeDomainAccessResponse">RevokeDomainAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokedomainaccessresponse"></a>
<a id="schema_RevokeDomainAccessResponse"></a>
<a id="tocSrevokedomainaccessresponse"></a>
<a id="tocsrevokedomainaccessresponse"></a>

```json
{}
```

<h2 id="tocS_SignOutUserResponse">SignOutUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemasignoutuserresponse"></a>
<a id="schema_SignOutUserResponse"></a>
<a id="tocSsignoutuserresponse"></a>
<a id="tocssignoutuserresponse"></a>

```json
{}
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

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_UpdateAuditStreamConfigurationResponse">UpdateAuditStreamConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauditstreamconfigurationresponse"></a>
<a id="schema_UpdateAuditStreamConfigurationResponse"></a>
<a id="tocSupdateauditstreamconfigurationresponse"></a>
<a id="tocsupdateauditstreamconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateCompanyNetworkConfigurationResponse">UpdateCompanyNetworkConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecompanynetworkconfigurationresponse"></a>
<a id="schema_UpdateCompanyNetworkConfigurationResponse"></a>
<a id="tocSupdatecompanynetworkconfigurationresponse"></a>
<a id="tocsupdatecompanynetworkconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_SubnetId">SubnetId</h2>
<!-- backwards compatibility -->
<a id="schemasubnetid"></a>
<a id="schema_SubnetId"></a>
<a id="tocSsubnetid"></a>
<a id="tocssubnetid"></a>

```json
"string"
```

<h2 id="tocS_SecurityGroupId">SecurityGroupId</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupid"></a>
<a id="schema_SecurityGroupId"></a>
<a id="tocSsecuritygroupid"></a>
<a id="tocssecuritygroupid"></a>

```json
"string"
```

<h2 id="tocS_UpdateDevicePolicyConfigurationResponse">UpdateDevicePolicyConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicepolicyconfigurationresponse"></a>
<a id="schema_UpdateDevicePolicyConfigurationResponse"></a>
<a id="tocSupdatedevicepolicyconfigurationresponse"></a>
<a id="tocsupdatedevicepolicyconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateDomainMetadataResponse">UpdateDomainMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainmetadataresponse"></a>
<a id="schema_UpdateDomainMetadataResponse"></a>
<a id="tocSupdatedomainmetadataresponse"></a>
<a id="tocsupdatedomainmetadataresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateFleetMetadataResponse">UpdateFleetMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetmetadataresponse"></a>
<a id="schema_UpdateFleetMetadataResponse"></a>
<a id="tocSupdatefleetmetadataresponse"></a>
<a id="tocsupdatefleetmetadataresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateIdentityProviderConfigurationResponse">UpdateIdentityProviderConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateidentityproviderconfigurationresponse"></a>
<a id="schema_UpdateIdentityProviderConfigurationResponse"></a>
<a id="tocSupdateidentityproviderconfigurationresponse"></a>
<a id="tocsupdateidentityproviderconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_AcmCertificateArn">AcmCertificateArn</h2>
<!-- backwards compatibility -->
<a id="schemaacmcertificatearn"></a>
<a id="schema_AcmCertificateArn"></a>
<a id="tocSacmcertificatearn"></a>
<a id="tocsacmcertificatearn"></a>

```json
"string"
```

<h2 id="tocS_FleetArn">FleetArn</h2>
<!-- backwards compatibility -->
<a id="schemafleetarn"></a>
<a id="schema_FleetArn"></a>
<a id="tocSfleetarn"></a>
<a id="tocsfleetarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

<h2 id="tocS_DisplayName">DisplayName</h2>
<!-- backwards compatibility -->
<a id="schemadisplayname"></a>
<a id="schema_DisplayName"></a>
<a id="tocSdisplayname"></a>
<a id="tocsdisplayname"></a>

```json
"string"
```

<h2 id="tocS_AssociateDomainRequest">AssociateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedomainrequest"></a>
<a id="schema_AssociateDomainRequest"></a>
<a id="tocSassociatedomainrequest"></a>
<a id="tocsassociatedomainrequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {},
  "DisplayName": {},
  "AcmCertificateArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|
|DisplayName|object|false|none|none|
|AcmCertificateArn|object|true|none|none|

<h2 id="tocS_AuthorizationProviderType">AuthorizationProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationprovidertype"></a>
<a id="schema_AuthorizationProviderType"></a>
<a id="tocSauthorizationprovidertype"></a>
<a id="tocsauthorizationprovidertype"></a>

```json
"SAML"
```

<h2 id="tocS_AssociateWebsiteAuthorizationProviderRequest">AssociateWebsiteAuthorizationProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebsiteauthorizationproviderrequest"></a>
<a id="schema_AssociateWebsiteAuthorizationProviderRequest"></a>
<a id="tocSassociatewebsiteauthorizationproviderrequest"></a>
<a id="tocsassociatewebsiteauthorizationproviderrequest"></a>

```json
{
  "FleetArn": {},
  "AuthorizationProviderType": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|AuthorizationProviderType|object|true|none|none|
|DomainName|object|false|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
"string"
```

<h2 id="tocS_AssociateWebsiteCertificateAuthorityRequest">AssociateWebsiteCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatewebsitecertificateauthorityrequest"></a>
<a id="schema_AssociateWebsiteCertificateAuthorityRequest"></a>
<a id="tocSassociatewebsitecertificateauthorityrequest"></a>
<a id="tocsassociatewebsitecertificateauthorityrequest"></a>

```json
{
  "FleetArn": {},
  "Certificate": {},
  "DisplayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|Certificate|object|true|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_AuditStreamArn">AuditStreamArn</h2>
<!-- backwards compatibility -->
<a id="schemaauditstreamarn"></a>
<a id="schema_AuditStreamArn"></a>
<a id="tocSauditstreamarn"></a>
<a id="tocsauditstreamarn"></a>

```json
"string"
```

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_CertificateChain">CertificateChain</h2>
<!-- backwards compatibility -->
<a id="schemacertificatechain"></a>
<a id="schema_CertificateChain"></a>
<a id="tocScertificatechain"></a>
<a id="tocscertificatechain"></a>

```json
"string"
```

<h2 id="tocS_CompanyCode">CompanyCode</h2>
<!-- backwards compatibility -->
<a id="schemacompanycode"></a>
<a id="schema_CompanyCode"></a>
<a id="tocScompanycode"></a>
<a id="tocscompanycode"></a>

```json
"string"
```

<h2 id="tocS_FleetName">FleetName</h2>
<!-- backwards compatibility -->
<a id="schemafleetname"></a>
<a id="schema_FleetName"></a>
<a id="tocSfleetname"></a>
<a id="tocsfleetname"></a>

```json
"string"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateFleetRequest">CreateFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefleetrequest"></a>
<a id="schema_CreateFleetRequest"></a>
<a id="tocScreatefleetrequest"></a>
<a id="tocscreatefleetrequest"></a>

```json
{
  "FleetName": {},
  "DisplayName": {},
  "OptimizeForEndUserLocation": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetName|object|true|none|none|
|DisplayName|object|false|none|none|
|OptimizeForEndUserLocation|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteFleetRequest">DeleteFleetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefleetrequest"></a>
<a id="schema_DeleteFleetRequest"></a>
<a id="tocSdeletefleetrequest"></a>
<a id="tocsdeletefleetrequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_DescribeAuditStreamConfigurationRequest">DescribeAuditStreamConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeauditstreamconfigurationrequest"></a>
<a id="schema_DescribeAuditStreamConfigurationRequest"></a>
<a id="tocSdescribeauditstreamconfigurationrequest"></a>
<a id="tocsdescribeauditstreamconfigurationrequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_DescribeCompanyNetworkConfigurationRequest">DescribeCompanyNetworkConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecompanynetworkconfigurationrequest"></a>
<a id="schema_DescribeCompanyNetworkConfigurationRequest"></a>
<a id="tocSdescribecompanynetworkconfigurationrequest"></a>
<a id="tocsdescribecompanynetworkconfigurationrequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_SubnetIds">SubnetIds</h2>
<!-- backwards compatibility -->
<a id="schemasubnetids"></a>
<a id="schema_SubnetIds"></a>
<a id="tocSsubnetids"></a>
<a id="tocssubnetids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SecurityGroupIds">SecurityGroupIds</h2>
<!-- backwards compatibility -->
<a id="schemasecuritygroupids"></a>
<a id="schema_SecurityGroupIds"></a>
<a id="tocSsecuritygroupids"></a>
<a id="tocssecuritygroupids"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeDevicePolicyConfigurationRequest">DescribeDevicePolicyConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedevicepolicyconfigurationrequest"></a>
<a id="schema_DescribeDevicePolicyConfigurationRequest"></a>
<a id="tocSdescribedevicepolicyconfigurationrequest"></a>
<a id="tocsdescribedevicepolicyconfigurationrequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_DescribeDeviceRequest">DescribeDeviceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedevicerequest"></a>
<a id="schema_DescribeDeviceRequest"></a>
<a id="tocSdescribedevicerequest"></a>
<a id="tocsdescribedevicerequest"></a>

```json
{
  "FleetArn": {},
  "DeviceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DeviceId|object|true|none|none|

<h2 id="tocS_DeviceStatus">DeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatus"></a>
<a id="schema_DeviceStatus"></a>
<a id="tocSdevicestatus"></a>
<a id="tocsdevicestatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_DeviceModel">DeviceModel</h2>
<!-- backwards compatibility -->
<a id="schemadevicemodel"></a>
<a id="schema_DeviceModel"></a>
<a id="tocSdevicemodel"></a>
<a id="tocsdevicemodel"></a>

```json
"string"
```

<h2 id="tocS_DeviceManufacturer">DeviceManufacturer</h2>
<!-- backwards compatibility -->
<a id="schemadevicemanufacturer"></a>
<a id="schema_DeviceManufacturer"></a>
<a id="tocSdevicemanufacturer"></a>
<a id="tocsdevicemanufacturer"></a>

```json
"string"
```

<h2 id="tocS_DeviceOperatingSystemName">DeviceOperatingSystemName</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoperatingsystemname"></a>
<a id="schema_DeviceOperatingSystemName"></a>
<a id="tocSdeviceoperatingsystemname"></a>
<a id="tocsdeviceoperatingsystemname"></a>

```json
"string"
```

<h2 id="tocS_DeviceOperatingSystemVersion">DeviceOperatingSystemVersion</h2>
<!-- backwards compatibility -->
<a id="schemadeviceoperatingsystemversion"></a>
<a id="schema_DeviceOperatingSystemVersion"></a>
<a id="tocSdeviceoperatingsystemversion"></a>
<a id="tocsdeviceoperatingsystemversion"></a>

```json
"string"
```

<h2 id="tocS_DevicePatchLevel">DevicePatchLevel</h2>
<!-- backwards compatibility -->
<a id="schemadevicepatchlevel"></a>
<a id="schema_DevicePatchLevel"></a>
<a id="tocSdevicepatchlevel"></a>
<a id="tocsdevicepatchlevel"></a>

```json
"string"
```

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

<h2 id="tocS_DescribeDomainRequest">DescribeDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainrequest"></a>
<a id="schema_DescribeDomainRequest"></a>
<a id="tocSdescribedomainrequest"></a>
<a id="tocsdescribedomainrequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_DescribeFleetMetadataRequest">DescribeFleetMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefleetmetadatarequest"></a>
<a id="schema_DescribeFleetMetadataRequest"></a>
<a id="tocSdescribefleetmetadatarequest"></a>
<a id="tocsdescribefleetmetadatarequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_FleetStatus">FleetStatus</h2>
<!-- backwards compatibility -->
<a id="schemafleetstatus"></a>
<a id="schema_FleetStatus"></a>
<a id="tocSfleetstatus"></a>
<a id="tocsfleetstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_DescribeIdentityProviderConfigurationRequest">DescribeIdentityProviderConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeidentityproviderconfigurationrequest"></a>
<a id="schema_DescribeIdentityProviderConfigurationRequest"></a>
<a id="tocSdescribeidentityproviderconfigurationrequest"></a>
<a id="tocsdescribeidentityproviderconfigurationrequest"></a>

```json
{
  "FleetArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|

<h2 id="tocS_IdentityProviderType">IdentityProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaidentityprovidertype"></a>
<a id="schema_IdentityProviderType"></a>
<a id="tocSidentityprovidertype"></a>
<a id="tocsidentityprovidertype"></a>

```json
"SAML"
```

<h2 id="tocS_SamlMetadata">SamlMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasamlmetadata"></a>
<a id="schema_SamlMetadata"></a>
<a id="tocSsamlmetadata"></a>
<a id="tocssamlmetadata"></a>

```json
"string"
```

<h2 id="tocS_DescribeWebsiteCertificateAuthorityRequest">DescribeWebsiteCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribewebsitecertificateauthorityrequest"></a>
<a id="schema_DescribeWebsiteCertificateAuthorityRequest"></a>
<a id="tocSdescribewebsitecertificateauthorityrequest"></a>
<a id="tocsdescribewebsitecertificateauthorityrequest"></a>

```json
{
  "FleetArn": {},
  "WebsiteCaId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|WebsiteCaId|object|true|none|none|

<h2 id="tocS_DeviceSummary">DeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schemadevicesummary"></a>
<a id="schema_DeviceSummary"></a>
<a id="tocSdevicesummary"></a>
<a id="tocsdevicesummary"></a>

```json
{
  "DeviceId": {},
  "DeviceStatus": {}
}
```

The summary of devices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|false|none|none|
|DeviceStatus|object|false|none|none|

<h2 id="tocS_DeviceSummaryList">DeviceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadevicesummarylist"></a>
<a id="schema_DeviceSummaryList"></a>
<a id="tocSdevicesummarylist"></a>
<a id="tocsdevicesummarylist"></a>

```json
[
  {
    "DeviceId": {},
    "DeviceStatus": {}
  }
]
```

<h2 id="tocS_DisassociateDomainRequest">DisassociateDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedomainrequest"></a>
<a id="schema_DisassociateDomainRequest"></a>
<a id="tocSdisassociatedomainrequest"></a>
<a id="tocsdisassociatedomainrequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_DisassociateWebsiteAuthorizationProviderRequest">DisassociateWebsiteAuthorizationProviderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebsiteauthorizationproviderrequest"></a>
<a id="schema_DisassociateWebsiteAuthorizationProviderRequest"></a>
<a id="tocSdisassociatewebsiteauthorizationproviderrequest"></a>
<a id="tocsdisassociatewebsiteauthorizationproviderrequest"></a>

```json
{
  "FleetArn": {},
  "AuthorizationProviderId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|AuthorizationProviderId|object|true|none|none|

<h2 id="tocS_DisassociateWebsiteCertificateAuthorityRequest">DisassociateWebsiteCertificateAuthorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatewebsitecertificateauthorityrequest"></a>
<a id="schema_DisassociateWebsiteCertificateAuthorityRequest"></a>
<a id="tocSdisassociatewebsitecertificateauthorityrequest"></a>
<a id="tocsdisassociatewebsitecertificateauthorityrequest"></a>

```json
{
  "FleetArn": {},
  "WebsiteCaId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|WebsiteCaId|object|true|none|none|

<h2 id="tocS_DomainSummary">DomainSummary</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummary"></a>
<a id="schema_DomainSummary"></a>
<a id="tocSdomainsummary"></a>
<a id="tocsdomainsummary"></a>

```json
{
  "DomainName": {},
  "DisplayName": {},
  "CreatedTime": {},
  "DomainStatus": {}
}
```

The summary of the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DisplayName|object|false|none|none|
|CreatedTime|object|true|none|none|
|DomainStatus|object|true|none|none|

<h2 id="tocS_DomainSummaryList">DomainSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummarylist"></a>
<a id="schema_DomainSummaryList"></a>
<a id="tocSdomainsummarylist"></a>
<a id="tocsdomainsummarylist"></a>

```json
[
  {
    "DomainName": {},
    "DisplayName": {},
    "CreatedTime": {},
    "DomainStatus": {}
  }
]
```

<h2 id="tocS_FleetSummary">FleetSummary</h2>
<!-- backwards compatibility -->
<a id="schemafleetsummary"></a>
<a id="schema_FleetSummary"></a>
<a id="tocSfleetsummary"></a>
<a id="tocsfleetsummary"></a>

```json
{
  "FleetArn": {},
  "CreatedTime": {},
  "LastUpdatedTime": {},
  "FleetName": {},
  "DisplayName": {},
  "CompanyCode": {},
  "FleetStatus": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

The summary of the fleet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastUpdatedTime|object|false|none|none|
|FleetName|object|false|none|none|
|DisplayName|object|false|none|none|
|CompanyCode|object|false|none|none|
|FleetStatus|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_FleetSummaryList">FleetSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemafleetsummarylist"></a>
<a id="schema_FleetSummaryList"></a>
<a id="tocSfleetsummarylist"></a>
<a id="tocsfleetsummarylist"></a>

```json
[
  {
    "FleetArn": {},
    "CreatedTime": {},
    "LastUpdatedTime": {},
    "FleetName": {},
    "DisplayName": {},
    "CompanyCode": {},
    "FleetStatus": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListDevicesRequest">ListDevicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicesrequest"></a>
<a id="schema_ListDevicesRequest"></a>
<a id="tocSlistdevicesrequest"></a>
<a id="tocslistdevicesrequest"></a>

```json
{
  "FleetArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListDomainsRequest">ListDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsrequest"></a>
<a id="schema_ListDomainsRequest"></a>
<a id="tocSlistdomainsrequest"></a>
<a id="tocslistdomainsrequest"></a>

```json
{
  "FleetArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListFleetsRequest">ListFleetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfleetsrequest"></a>
<a id="schema_ListFleetsRequest"></a>
<a id="tocSlistfleetsrequest"></a>
<a id="tocslistfleetsrequest"></a>

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListWebsiteAuthorizationProvidersRequest">ListWebsiteAuthorizationProvidersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsiteauthorizationprovidersrequest"></a>
<a id="schema_ListWebsiteAuthorizationProvidersRequest"></a>
<a id="tocSlistwebsiteauthorizationprovidersrequest"></a>
<a id="tocslistwebsiteauthorizationprovidersrequest"></a>

```json
{
  "FleetArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_WebsiteAuthorizationProvidersSummaryList">WebsiteAuthorizationProvidersSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemawebsiteauthorizationproviderssummarylist"></a>
<a id="schema_WebsiteAuthorizationProvidersSummaryList"></a>
<a id="tocSwebsiteauthorizationproviderssummarylist"></a>
<a id="tocswebsiteauthorizationproviderssummarylist"></a>

```json
[
  {
    "AuthorizationProviderId": {},
    "AuthorizationProviderType": {},
    "DomainName": {},
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_ListWebsiteCertificateAuthoritiesRequest">ListWebsiteCertificateAuthoritiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistwebsitecertificateauthoritiesrequest"></a>
<a id="schema_ListWebsiteCertificateAuthoritiesRequest"></a>
<a id="tocSlistwebsitecertificateauthoritiesrequest"></a>
<a id="tocslistwebsitecertificateauthoritiesrequest"></a>

```json
{
  "FleetArn": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_WebsiteCaSummaryList">WebsiteCaSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemawebsitecasummarylist"></a>
<a id="schema_WebsiteCaSummaryList"></a>
<a id="tocSwebsitecasummarylist"></a>
<a id="tocswebsitecasummarylist"></a>

```json
[
  {
    "WebsiteCaId": {},
    "CreatedTime": {},
    "DisplayName": {}
  }
]
```

<h2 id="tocS_RestoreDomainAccessRequest">RestoreDomainAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoredomainaccessrequest"></a>
<a id="schema_RestoreDomainAccessRequest"></a>
<a id="tocSrestoredomainaccessrequest"></a>
<a id="tocsrestoredomainaccessrequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_RevokeDomainAccessRequest">RevokeDomainAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokedomainaccessrequest"></a>
<a id="schema_RevokeDomainAccessRequest"></a>
<a id="tocSrevokedomainaccessrequest"></a>
<a id="tocsrevokedomainaccessrequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_SignOutUserRequest">SignOutUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemasignoutuserrequest"></a>
<a id="schema_SignOutUserRequest"></a>
<a id="tocSsignoutuserrequest"></a>
<a id="tocssignoutuserrequest"></a>

```json
{
  "FleetArn": {},
  "Username": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|Username|object|true|none|none|

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

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateAuditStreamConfigurationRequest">UpdateAuditStreamConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateauditstreamconfigurationrequest"></a>
<a id="schema_UpdateAuditStreamConfigurationRequest"></a>
<a id="tocSupdateauditstreamconfigurationrequest"></a>
<a id="tocsupdateauditstreamconfigurationrequest"></a>

```json
{
  "FleetArn": {},
  "AuditStreamArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|AuditStreamArn|object|false|none|none|

<h2 id="tocS_UpdateCompanyNetworkConfigurationRequest">UpdateCompanyNetworkConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecompanynetworkconfigurationrequest"></a>
<a id="schema_UpdateCompanyNetworkConfigurationRequest"></a>
<a id="tocSupdatecompanynetworkconfigurationrequest"></a>
<a id="tocsupdatecompanynetworkconfigurationrequest"></a>

```json
{
  "FleetArn": {},
  "VpcId": {},
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|VpcId|object|true|none|none|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|true|none|none|

<h2 id="tocS_UpdateDevicePolicyConfigurationRequest">UpdateDevicePolicyConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedevicepolicyconfigurationrequest"></a>
<a id="schema_UpdateDevicePolicyConfigurationRequest"></a>
<a id="tocSupdatedevicepolicyconfigurationrequest"></a>
<a id="tocsupdatedevicepolicyconfigurationrequest"></a>

```json
{
  "FleetArn": {},
  "DeviceCaCertificate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DeviceCaCertificate|object|false|none|none|

<h2 id="tocS_UpdateDomainMetadataRequest">UpdateDomainMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainmetadatarequest"></a>
<a id="schema_UpdateDomainMetadataRequest"></a>
<a id="tocSupdatedomainmetadatarequest"></a>
<a id="tocsupdatedomainmetadatarequest"></a>

```json
{
  "FleetArn": {},
  "DomainName": {},
  "DisplayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DomainName|object|true|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_UpdateFleetMetadataRequest">UpdateFleetMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefleetmetadatarequest"></a>
<a id="schema_UpdateFleetMetadataRequest"></a>
<a id="tocSupdatefleetmetadatarequest"></a>
<a id="tocsupdatefleetmetadatarequest"></a>

```json
{
  "FleetArn": {},
  "DisplayName": {},
  "OptimizeForEndUserLocation": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|DisplayName|object|false|none|none|
|OptimizeForEndUserLocation|object|false|none|none|

<h2 id="tocS_UpdateIdentityProviderConfigurationRequest">UpdateIdentityProviderConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateidentityproviderconfigurationrequest"></a>
<a id="schema_UpdateIdentityProviderConfigurationRequest"></a>
<a id="tocSupdateidentityproviderconfigurationrequest"></a>
<a id="tocsupdateidentityproviderconfigurationrequest"></a>

```json
{
  "FleetArn": {},
  "IdentityProviderType": {},
  "IdentityProviderSamlMetadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FleetArn|object|true|none|none|
|IdentityProviderType|object|true|none|none|
|IdentityProviderSamlMetadata|object|false|none|none|

<h2 id="tocS_WebsiteAuthorizationProviderSummary">WebsiteAuthorizationProviderSummary</h2>
<!-- backwards compatibility -->
<a id="schemawebsiteauthorizationprovidersummary"></a>
<a id="schema_WebsiteAuthorizationProviderSummary"></a>
<a id="tocSwebsiteauthorizationprovidersummary"></a>
<a id="tocswebsiteauthorizationprovidersummary"></a>

```json
{
  "AuthorizationProviderId": {},
  "AuthorizationProviderType": {},
  "DomainName": {},
  "CreatedTime": {}
}
```

The summary of the website authorization provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizationProviderId|object|false|none|none|
|AuthorizationProviderType|object|true|none|none|
|DomainName|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_WebsiteCaSummary">WebsiteCaSummary</h2>
<!-- backwards compatibility -->
<a id="schemawebsitecasummary"></a>
<a id="schema_WebsiteCaSummary"></a>
<a id="tocSwebsitecasummary"></a>
<a id="tocswebsitecasummary"></a>

```json
{
  "WebsiteCaId": {},
  "CreatedTime": {},
  "DisplayName": {}
}
```

The summary of the certificate authority (CA).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WebsiteCaId|object|false|none|none|
|CreatedTime|object|false|none|none|
|DisplayName|object|false|none|none|
