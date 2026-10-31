<h1 id="service-quotas">Service Quotas v2019-06-24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.

Base URLs:

* <a href="http://servicequotas.us-east-1.amazonaws.com">http://servicequotas.us-east-1.amazonaws.com</a> - The Service Quotas multi-region endpoint

* <a href="https://servicequotas.us-east-1.amazonaws.com">https://servicequotas.us-east-1.amazonaws.com</a> - The Service Quotas multi-region endpoint

* <a href="http://servicequotas.cn-north-1.amazonaws.com.cn">http://servicequotas.cn-north-1.amazonaws.com.cn</a> - The Service Quotas endpoint for China (Beijing) and China (Ningxia)

* <a href="https://servicequotas.cn-north-1.amazonaws.com.cn">https://servicequotas.cn-north-1.amazonaws.com.cn</a> - The Service Quotas endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/servicequotas/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="service-quotas-default">Default</h1>

## AssociateServiceQuotaTemplate

<a id="opIdAssociateServiceQuotaTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.AssociateServiceQuotaTemplate' \
  -d '{}'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.AssociateServiceQuotaTemplate`

Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.

> Body parameter

```json
{}
```

<h3 id="associateservicequotatemplate-parameters">Parameters</h3>

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
|body|body|[AssociateServiceQuotaTemplateRequest](#schemaassociateservicequotatemplaterequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.AssociateServiceQuotaTemplate|

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

<h3 id="associateservicequotatemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateServiceQuotaTemplateResponse](#schemaassociateservicequotatemplateresponse)|
|480|480|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|485|485|OrganizationNotInAllFeaturesModeException|[OrganizationNotInAllFeaturesModeException](#schemaorganizationnotinallfeaturesmodeexception)|
|486|486|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|487|487|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceQuotaIncreaseRequestFromTemplate

<a id="opIdDeleteServiceQuotaIncreaseRequestFromTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {},
    "AwsRegion": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate`

Deletes the quota increase request for the specified quota from your quota request template.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "AwsRegion": {}
}
```

<h3 id="deleteservicequotaincreaserequestfromtemplate-parameters">Parameters</h3>

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
|body|body|[DeleteServiceQuotaIncreaseRequestFromTemplateRequest](#schemadeleteservicequotaincreaserequestfromtemplaterequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|
|» AwsRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate|

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

> 488 Response

```json
null
```

<h3 id="deleteservicequotaincreaserequestfromtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceQuotaIncreaseRequestFromTemplateResponse](#schemadeleteservicequotaincreaserequestfromtemplateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|ServiceException|[ServiceException](#schemaserviceexception)|
|482|482|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|485|485|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|486|486|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|487|487|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|488|488|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateServiceQuotaTemplate

<a id="opIdDisassociateServiceQuotaTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.DisassociateServiceQuotaTemplate' \
  -d '{}'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.DisassociateServiceQuotaTemplate`

Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.

> Body parameter

```json
{}
```

<h3 id="disassociateservicequotatemplate-parameters">Parameters</h3>

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
|body|body|[DisassociateServiceQuotaTemplateRequest](#schemadisassociateservicequotatemplaterequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.DisassociateServiceQuotaTemplate|

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

<h3 id="disassociateservicequotatemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateServiceQuotaTemplateResponse](#schemadisassociateservicequotatemplateresponse)|
|480|480|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|481|481|ServiceQuotaTemplateNotInUseException|[ServiceQuotaTemplateNotInUseException](#schemaservicequotatemplatenotinuseexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|486|486|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|487|487|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAWSDefaultServiceQuota

<a id="opIdGetAWSDefaultServiceQuota"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.GetAWSDefaultServiceQuota' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.GetAWSDefaultServiceQuota`

Retrieves the default value for the specified quota. The default value does not reflect any quota increases.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {}
}
```

<h3 id="getawsdefaultservicequota-parameters">Parameters</h3>

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
|body|body|[GetAWSDefaultServiceQuotaRequest](#schemagetawsdefaultservicequotarequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.GetAWSDefaultServiceQuota|

> Example responses

> 200 Response

```json
{
  "Quota": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaArn": {},
    "QuotaCode": {},
    "QuotaName": {},
    "Value": {},
    "Unit": {},
    "Adjustable": {},
    "GlobalQuota": {},
    "UsageMetric": {
      "MetricNamespace": {},
      "MetricName": {},
      "MetricDimensions": {
        "property1": "string",
        "property2": "string"
      },
      "MetricStatisticRecommendation": {}
    },
    "Period": {
      "PeriodValue": {},
      "PeriodUnit": {}
    },
    "ErrorReason": {
      "ErrorCode": {},
      "ErrorMessage": {}
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

<h3 id="getawsdefaultservicequota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAWSDefaultServiceQuotaResponse](#schemagetawsdefaultservicequotaresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAssociationForServiceQuotaTemplate

<a id="opIdGetAssociationForServiceQuotaTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate' \
  -d '{}'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate`

Retrieves the status of the association for the quota request template.

> Body parameter

```json
{}
```

<h3 id="getassociationforservicequotatemplate-parameters">Parameters</h3>

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
|body|body|[GetAssociationForServiceQuotaTemplateRequest](#schemagetassociationforservicequotatemplaterequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate|

> Example responses

> 200 Response

```json
{
  "ServiceQuotaTemplateAssociationStatus": {}
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

<h3 id="getassociationforservicequotatemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAssociationForServiceQuotaTemplateResponse](#schemagetassociationforservicequotatemplateresponse)|
|480|480|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|481|481|ServiceQuotaTemplateNotInUseException|[ServiceQuotaTemplateNotInUseException](#schemaservicequotatemplatenotinuseexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|485|485|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|486|486|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|487|487|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRequestedServiceQuotaChange

<a id="opIdGetRequestedServiceQuotaChange"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.GetRequestedServiceQuotaChange' \
  -d '{
    "RequestId": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.GetRequestedServiceQuotaChange`

Retrieves information about the specified quota increase request.

> Body parameter

```json
{
  "RequestId": {}
}
```

<h3 id="getrequestedservicequotachange-parameters">Parameters</h3>

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
|body|body|[GetRequestedServiceQuotaChangeRequest](#schemagetrequestedservicequotachangerequest)|true|none|
|» RequestId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.GetRequestedServiceQuotaChange|

> Example responses

> 200 Response

```json
{
  "RequestedQuota": {
    "Id": {},
    "CaseId": {},
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "Status": {},
    "Created": {},
    "LastUpdated": {},
    "Requester": {},
    "QuotaArn": {},
    "GlobalQuota": {},
    "Unit": {}
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

<h3 id="getrequestedservicequotachange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRequestedServiceQuotaChangeResponse](#schemagetrequestedservicequotachangeresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceQuota

<a id="opIdGetServiceQuota"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.GetServiceQuota' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuota`

Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {}
}
```

<h3 id="getservicequota-parameters">Parameters</h3>

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
|body|body|[GetServiceQuotaRequest](#schemagetservicequotarequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.GetServiceQuota|

> Example responses

> 200 Response

```json
{
  "Quota": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaArn": {},
    "QuotaCode": {},
    "QuotaName": {},
    "Value": {},
    "Unit": {},
    "Adjustable": {},
    "GlobalQuota": {},
    "UsageMetric": {
      "MetricNamespace": {},
      "MetricName": {},
      "MetricDimensions": {
        "property1": "string",
        "property2": "string"
      },
      "MetricStatisticRecommendation": {}
    },
    "Period": {
      "PeriodValue": {},
      "PeriodUnit": {}
    },
    "ErrorReason": {
      "ErrorCode": {},
      "ErrorMessage": {}
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

<h3 id="getservicequota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceQuotaResponse](#schemagetservicequotaresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetServiceQuotaIncreaseRequestFromTemplate

<a id="opIdGetServiceQuotaIncreaseRequestFromTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {},
    "AwsRegion": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate`

Retrieves information about the specified quota increase request in your quota request template.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "AwsRegion": {}
}
```

<h3 id="getservicequotaincreaserequestfromtemplate-parameters">Parameters</h3>

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
|body|body|[GetServiceQuotaIncreaseRequestFromTemplateRequest](#schemagetservicequotaincreaserequestfromtemplaterequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|
|» AwsRegion|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate|

> Example responses

> 200 Response

```json
{
  "ServiceQuotaIncreaseRequestInTemplate": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "AwsRegion": {},
    "Unit": {},
    "GlobalQuota": {}
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

<h3 id="getservicequotaincreaserequestfromtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetServiceQuotaIncreaseRequestFromTemplateResponse](#schemagetservicequotaincreaserequestfromtemplateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|485|485|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|486|486|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|487|487|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|488|488|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAWSDefaultServiceQuotas

<a id="opIdListAWSDefaultServiceQuotas"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListAWSDefaultServiceQuotas' \
  -d '{
    "ServiceCode": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListAWSDefaultServiceQuotas`

Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.

> Body parameter

```json
{
  "ServiceCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listawsdefaultservicequotas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAWSDefaultServiceQuotasRequest](#schemalistawsdefaultservicequotasrequest)|true|none|
|» ServiceCode|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListAWSDefaultServiceQuotas|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Quotas": {}
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

<h3 id="listawsdefaultservicequotas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAWSDefaultServiceQuotasResponse](#schemalistawsdefaultservicequotasresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRequestedServiceQuotaChangeHistory

<a id="opIdListRequestedServiceQuotaChangeHistory"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory' \
  -d '{
    "ServiceCode": {},
    "Status": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory`

Retrieves the quota increase requests for the specified service.

> Body parameter

```json
{
  "ServiceCode": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrequestedservicequotachangehistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRequestedServiceQuotaChangeHistoryRequest](#schemalistrequestedservicequotachangehistoryrequest)|true|none|
|» ServiceCode|body|object|false|none|
|» Status|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "RequestedQuotas": {}
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

<h3 id="listrequestedservicequotachangehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRequestedServiceQuotaChangeHistoryResponse](#schemalistrequestedservicequotachangehistoryresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRequestedServiceQuotaChangeHistoryByQuota

<a id="opIdListRequestedServiceQuotaChangeHistoryByQuota"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {},
    "Status": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota`

Retrieves the quota increase requests for the specified quota.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listrequestedservicequotachangehistorybyquota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListRequestedServiceQuotaChangeHistoryByQuotaRequest](#schemalistrequestedservicequotachangehistorybyquotarequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|
|» Status|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "RequestedQuotas": {}
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

<h3 id="listrequestedservicequotachangehistorybyquota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRequestedServiceQuotaChangeHistoryByQuotaResponse](#schemalistrequestedservicequotachangehistorybyquotaresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceQuotaIncreaseRequestsInTemplate

<a id="opIdListServiceQuotaIncreaseRequestsInTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate' \
  -d '{
    "ServiceCode": {},
    "AwsRegion": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate`

Lists the quota increase requests in the specified quota request template.

> Body parameter

```json
{
  "ServiceCode": {},
  "AwsRegion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listservicequotaincreaserequestsintemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceQuotaIncreaseRequestsInTemplateRequest](#schemalistservicequotaincreaserequestsintemplaterequest)|true|none|
|» ServiceCode|body|object|false|none|
|» AwsRegion|body|object|false|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate|

> Example responses

> 200 Response

```json
{
  "ServiceQuotaIncreaseRequestInTemplateList": {},
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

<h3 id="listservicequotaincreaserequestsintemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceQuotaIncreaseRequestsInTemplateResponse](#schemalistservicequotaincreaserequestsintemplateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|485|485|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|486|486|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|487|487|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceQuotas

<a id="opIdListServiceQuotas"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListServiceQuotas' \
  -d '{
    "ServiceCode": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListServiceQuotas`

Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

> Body parameter

```json
{
  "ServiceCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listservicequotas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceQuotasRequest](#schemalistservicequotasrequest)|true|none|
|» ServiceCode|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListServiceQuotas|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Quotas": {}
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

<h3 id="listservicequotas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceQuotasResponse](#schemalistservicequotasresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServices

<a id="opIdListServices"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListServices' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListServices`

Lists the names and codes for the services integrated with Service Quotas.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listservices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServicesRequest](#schemalistservicesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListServices|

> Example responses

> 200 Response

```json
{
  "NextToken": {},
  "Services": {}
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

<h3 id="listservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesResponse](#schemalistservicesresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|482|482|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|483|483|ServiceException|[ServiceException](#schemaserviceexception)|
|484|484|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.ListTagsForResource' \
  -d '{
    "ResourceARN": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.ListTagsForResource`

Returns a list of the tags assigned to the specified applied quota.

> Body parameter

```json
{
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
|» ResourceARN|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.ListTagsForResource|

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
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutServiceQuotaIncreaseRequestIntoTemplate

<a id="opIdPutServiceQuotaIncreaseRequestIntoTemplate"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate' \
  -d '{
    "QuotaCode": {},
    "ServiceCode": {},
    "AwsRegion": {},
    "DesiredValue": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate`

Adds a quota increase request to your quota request template.

> Body parameter

```json
{
  "QuotaCode": {},
  "ServiceCode": {},
  "AwsRegion": {},
  "DesiredValue": {}
}
```

<h3 id="putservicequotaincreaserequestintotemplate-parameters">Parameters</h3>

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
|body|body|[PutServiceQuotaIncreaseRequestIntoTemplateRequest](#schemaputservicequotaincreaserequestintotemplaterequest)|true|none|
|» QuotaCode|body|object|true|none|
|» ServiceCode|body|object|true|none|
|» AwsRegion|body|object|true|none|
|» DesiredValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate|

> Example responses

> 200 Response

```json
{
  "ServiceQuotaIncreaseRequestInTemplate": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "AwsRegion": {},
    "Unit": {},
    "GlobalQuota": {}
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

> 489 Response

```json
null
```

<h3 id="putservicequotaincreaserequestintotemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutServiceQuotaIncreaseRequestIntoTemplateResponse](#schemaputservicequotaincreaserequestintotemplateresponse)|
|480|480|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|481|481|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|482|482|ServiceException|[ServiceException](#schemaserviceexception)|
|483|483|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|484|484|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|485|485|QuotaExceededException|[QuotaExceededException](#schemaquotaexceededexception)|
|486|486|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|487|487|AWSServiceAccessNotEnabledException|[AWSServiceAccessNotEnabledException](#schemaawsserviceaccessnotenabledexception)|
|488|488|TemplatesNotAvailableInRegionException|[TemplatesNotAvailableInRegionException](#schematemplatesnotavailableinregionexception)|
|489|489|NoAvailableOrganizationException|[NoAvailableOrganizationException](#schemanoavailableorganizationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RequestServiceQuotaIncrease

<a id="opIdRequestServiceQuotaIncrease"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.RequestServiceQuotaIncrease' \
  -d '{
    "ServiceCode": {},
    "QuotaCode": {},
    "DesiredValue": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.RequestServiceQuotaIncrease`

Submits a quota increase request for the specified quota.

> Body parameter

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "DesiredValue": {}
}
```

<h3 id="requestservicequotaincrease-parameters">Parameters</h3>

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
|body|body|[RequestServiceQuotaIncreaseRequest](#schemarequestservicequotaincreaserequest)|true|none|
|» ServiceCode|body|object|true|none|
|» QuotaCode|body|object|true|none|
|» DesiredValue|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|ServiceQuotasV20190624.RequestServiceQuotaIncrease|

> Example responses

> 200 Response

```json
{
  "RequestedQuota": {
    "Id": {},
    "CaseId": {},
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "Status": {},
    "Created": {},
    "LastUpdated": {},
    "Requester": {},
    "QuotaArn": {},
    "GlobalQuota": {},
    "Unit": {}
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

<h3 id="requestservicequotaincrease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RequestServiceQuotaIncreaseResponse](#schemarequestservicequotaincreaseresponse)|
|480|480|DependencyAccessDeniedException|[DependencyAccessDeniedException](#schemadependencyaccessdeniedexception)|
|481|481|QuotaExceededException|[QuotaExceededException](#schemaquotaexceededexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|485|485|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|486|486|InvalidResourceStateException|[InvalidResourceStateException](#schemainvalidresourcestateexception)|
|487|487|ServiceException|[ServiceException](#schemaserviceexception)|
|488|488|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.TagResource' \
  -d '{
    "ResourceARN": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.TagResource`

Adds tags to the specified applied quota. You can include one or more tags to add to the quota.

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
|X-Amz-Target|ServiceQuotasV20190624.TagResource|

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
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|TagPolicyViolationException|[TagPolicyViolationException](#schematagpolicyviolationexception)|
|484|484|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://service-quotas.us-east-1.amazonaws.com/#X-Amz-Target=ServiceQuotasV20190624.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: ServiceQuotasV20190624.UntagResource' \
  -d '{
    "ResourceARN": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=ServiceQuotasV20190624.UntagResource`

Removes tags from the specified applied quota. You can specify one or more tags to remove.

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
|X-Amz-Target|ServiceQuotasV20190624.UntagResource|

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
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|NoSuchResourceException|[NoSuchResourceException](#schemanosuchresourceexception)|
|482|482|IllegalArgumentException|[IllegalArgumentException](#schemaillegalargumentexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ServiceException|[ServiceException](#schemaserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateServiceQuotaTemplateResponse">AssociateServiceQuotaTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociateservicequotatemplateresponse"></a>
<a id="schema_AssociateServiceQuotaTemplateResponse"></a>
<a id="tocSassociateservicequotatemplateresponse"></a>
<a id="tocsassociateservicequotatemplateresponse"></a>

```json
{}
```

<h2 id="tocS_AssociateServiceQuotaTemplateRequest">AssociateServiceQuotaTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociateservicequotatemplaterequest"></a>
<a id="schema_AssociateServiceQuotaTemplateRequest"></a>
<a id="tocSassociateservicequotatemplaterequest"></a>
<a id="tocsassociateservicequotatemplaterequest"></a>

```json
{}
```

<h2 id="tocS_DependencyAccessDeniedException">DependencyAccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemadependencyaccessdeniedexception"></a>
<a id="schema_DependencyAccessDeniedException"></a>
<a id="tocSdependencyaccessdeniedexception"></a>
<a id="tocsdependencyaccessdeniedexception"></a>

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

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

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

<h2 id="tocS_AWSServiceAccessNotEnabledException">AWSServiceAccessNotEnabledException</h2>
<!-- backwards compatibility -->
<a id="schemaawsserviceaccessnotenabledexception"></a>
<a id="schema_AWSServiceAccessNotEnabledException"></a>
<a id="tocSawsserviceaccessnotenabledexception"></a>
<a id="tocsawsserviceaccessnotenabledexception"></a>

```json
null
```

<h2 id="tocS_OrganizationNotInAllFeaturesModeException">OrganizationNotInAllFeaturesModeException</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnotinallfeaturesmodeexception"></a>
<a id="schema_OrganizationNotInAllFeaturesModeException"></a>
<a id="tocSorganizationnotinallfeaturesmodeexception"></a>
<a id="tocsorganizationnotinallfeaturesmodeexception"></a>

```json
null
```

<h2 id="tocS_TemplatesNotAvailableInRegionException">TemplatesNotAvailableInRegionException</h2>
<!-- backwards compatibility -->
<a id="schematemplatesnotavailableinregionexception"></a>
<a id="schema_TemplatesNotAvailableInRegionException"></a>
<a id="tocStemplatesnotavailableinregionexception"></a>
<a id="tocstemplatesnotavailableinregionexception"></a>

```json
null
```

<h2 id="tocS_NoAvailableOrganizationException">NoAvailableOrganizationException</h2>
<!-- backwards compatibility -->
<a id="schemanoavailableorganizationexception"></a>
<a id="schema_NoAvailableOrganizationException"></a>
<a id="tocSnoavailableorganizationexception"></a>
<a id="tocsnoavailableorganizationexception"></a>

```json
null
```

<h2 id="tocS_DeleteServiceQuotaIncreaseRequestFromTemplateResponse">DeleteServiceQuotaIncreaseRequestFromTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicequotaincreaserequestfromtemplateresponse"></a>
<a id="schema_DeleteServiceQuotaIncreaseRequestFromTemplateResponse"></a>
<a id="tocSdeleteservicequotaincreaserequestfromtemplateresponse"></a>
<a id="tocsdeleteservicequotaincreaserequestfromtemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteServiceQuotaIncreaseRequestFromTemplateRequest">DeleteServiceQuotaIncreaseRequestFromTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicequotaincreaserequestfromtemplaterequest"></a>
<a id="schema_DeleteServiceQuotaIncreaseRequestFromTemplateRequest"></a>
<a id="tocSdeleteservicequotaincreaserequestfromtemplaterequest"></a>
<a id="tocsdeleteservicequotaincreaserequestfromtemplaterequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "AwsRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|
|AwsRegion|object|true|none|none|

<h2 id="tocS_NoSuchResourceException">NoSuchResourceException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchresourceexception"></a>
<a id="schema_NoSuchResourceException"></a>
<a id="tocSnosuchresourceexception"></a>
<a id="tocsnosuchresourceexception"></a>

```json
null
```

<h2 id="tocS_IllegalArgumentException">IllegalArgumentException</h2>
<!-- backwards compatibility -->
<a id="schemaillegalargumentexception"></a>
<a id="schema_IllegalArgumentException"></a>
<a id="tocSillegalargumentexception"></a>
<a id="tocsillegalargumentexception"></a>

```json
null
```

<h2 id="tocS_DisassociateServiceQuotaTemplateResponse">DisassociateServiceQuotaTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicequotatemplateresponse"></a>
<a id="schema_DisassociateServiceQuotaTemplateResponse"></a>
<a id="tocSdisassociateservicequotatemplateresponse"></a>
<a id="tocsdisassociateservicequotatemplateresponse"></a>

```json
{}
```

<h2 id="tocS_DisassociateServiceQuotaTemplateRequest">DisassociateServiceQuotaTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateservicequotatemplaterequest"></a>
<a id="schema_DisassociateServiceQuotaTemplateRequest"></a>
<a id="tocSdisassociateservicequotatemplaterequest"></a>
<a id="tocsdisassociateservicequotatemplaterequest"></a>

```json
{}
```

<h2 id="tocS_ServiceQuotaTemplateNotInUseException">ServiceQuotaTemplateNotInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotatemplatenotinuseexception"></a>
<a id="schema_ServiceQuotaTemplateNotInUseException"></a>
<a id="tocSservicequotatemplatenotinuseexception"></a>
<a id="tocsservicequotatemplatenotinuseexception"></a>

```json
null
```

<h2 id="tocS_GetAWSDefaultServiceQuotaResponse">GetAWSDefaultServiceQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetawsdefaultservicequotaresponse"></a>
<a id="schema_GetAWSDefaultServiceQuotaResponse"></a>
<a id="tocSgetawsdefaultservicequotaresponse"></a>
<a id="tocsgetawsdefaultservicequotaresponse"></a>

```json
{
  "Quota": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaArn": {},
    "QuotaCode": {},
    "QuotaName": {},
    "Value": {},
    "Unit": {},
    "Adjustable": {},
    "GlobalQuota": {},
    "UsageMetric": {
      "MetricNamespace": {},
      "MetricName": {},
      "MetricDimensions": {
        "property1": "string",
        "property2": "string"
      },
      "MetricStatisticRecommendation": {}
    },
    "Period": {
      "PeriodValue": {},
      "PeriodUnit": {}
    },
    "ErrorReason": {
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quota|object|false|none|none|

<h2 id="tocS_GetAWSDefaultServiceQuotaRequest">GetAWSDefaultServiceQuotaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetawsdefaultservicequotarequest"></a>
<a id="schema_GetAWSDefaultServiceQuotaRequest"></a>
<a id="tocSgetawsdefaultservicequotarequest"></a>
<a id="tocsgetawsdefaultservicequotarequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|

<h2 id="tocS_GetAssociationForServiceQuotaTemplateResponse">GetAssociationForServiceQuotaTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassociationforservicequotatemplateresponse"></a>
<a id="schema_GetAssociationForServiceQuotaTemplateResponse"></a>
<a id="tocSgetassociationforservicequotatemplateresponse"></a>
<a id="tocsgetassociationforservicequotatemplateresponse"></a>

```json
{
  "ServiceQuotaTemplateAssociationStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceQuotaTemplateAssociationStatus|object|false|none|none|

<h2 id="tocS_GetAssociationForServiceQuotaTemplateRequest">GetAssociationForServiceQuotaTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetassociationforservicequotatemplaterequest"></a>
<a id="schema_GetAssociationForServiceQuotaTemplateRequest"></a>
<a id="tocSgetassociationforservicequotatemplaterequest"></a>
<a id="tocsgetassociationforservicequotatemplaterequest"></a>

```json
{}
```

<h2 id="tocS_GetRequestedServiceQuotaChangeResponse">GetRequestedServiceQuotaChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrequestedservicequotachangeresponse"></a>
<a id="schema_GetRequestedServiceQuotaChangeResponse"></a>
<a id="tocSgetrequestedservicequotachangeresponse"></a>
<a id="tocsgetrequestedservicequotachangeresponse"></a>

```json
{
  "RequestedQuota": {
    "Id": {},
    "CaseId": {},
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "Status": {},
    "Created": {},
    "LastUpdated": {},
    "Requester": {},
    "QuotaArn": {},
    "GlobalQuota": {},
    "Unit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedQuota|object|false|none|none|

<h2 id="tocS_GetRequestedServiceQuotaChangeRequest">GetRequestedServiceQuotaChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrequestedservicequotachangerequest"></a>
<a id="schema_GetRequestedServiceQuotaChangeRequest"></a>
<a id="tocSgetrequestedservicequotachangerequest"></a>
<a id="tocsgetrequestedservicequotachangerequest"></a>

```json
{
  "RequestId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestId|object|true|none|none|

<h2 id="tocS_GetServiceQuotaResponse">GetServiceQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetservicequotaresponse"></a>
<a id="schema_GetServiceQuotaResponse"></a>
<a id="tocSgetservicequotaresponse"></a>
<a id="tocsgetservicequotaresponse"></a>

```json
{
  "Quota": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaArn": {},
    "QuotaCode": {},
    "QuotaName": {},
    "Value": {},
    "Unit": {},
    "Adjustable": {},
    "GlobalQuota": {},
    "UsageMetric": {
      "MetricNamespace": {},
      "MetricName": {},
      "MetricDimensions": {
        "property1": "string",
        "property2": "string"
      },
      "MetricStatisticRecommendation": {}
    },
    "Period": {
      "PeriodValue": {},
      "PeriodUnit": {}
    },
    "ErrorReason": {
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quota|object|false|none|none|

<h2 id="tocS_GetServiceQuotaRequest">GetServiceQuotaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicequotarequest"></a>
<a id="schema_GetServiceQuotaRequest"></a>
<a id="tocSgetservicequotarequest"></a>
<a id="tocsgetservicequotarequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|

<h2 id="tocS_GetServiceQuotaIncreaseRequestFromTemplateResponse">GetServiceQuotaIncreaseRequestFromTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetservicequotaincreaserequestfromtemplateresponse"></a>
<a id="schema_GetServiceQuotaIncreaseRequestFromTemplateResponse"></a>
<a id="tocSgetservicequotaincreaserequestfromtemplateresponse"></a>
<a id="tocsgetservicequotaincreaserequestfromtemplateresponse"></a>

```json
{
  "ServiceQuotaIncreaseRequestInTemplate": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "AwsRegion": {},
    "Unit": {},
    "GlobalQuota": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceQuotaIncreaseRequestInTemplate|object|false|none|none|

<h2 id="tocS_GetServiceQuotaIncreaseRequestFromTemplateRequest">GetServiceQuotaIncreaseRequestFromTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetservicequotaincreaserequestfromtemplaterequest"></a>
<a id="schema_GetServiceQuotaIncreaseRequestFromTemplateRequest"></a>
<a id="tocSgetservicequotaincreaserequestfromtemplaterequest"></a>
<a id="tocsgetservicequotaincreaserequestfromtemplaterequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "AwsRegion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|
|AwsRegion|object|true|none|none|

<h2 id="tocS_ListAWSDefaultServiceQuotasResponse">ListAWSDefaultServiceQuotasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistawsdefaultservicequotasresponse"></a>
<a id="schema_ListAWSDefaultServiceQuotasResponse"></a>
<a id="tocSlistawsdefaultservicequotasresponse"></a>
<a id="tocslistawsdefaultservicequotasresponse"></a>

```json
{
  "NextToken": {},
  "Quotas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Quotas|object|false|none|none|

<h2 id="tocS_ListAWSDefaultServiceQuotasRequest">ListAWSDefaultServiceQuotasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistawsdefaultservicequotasrequest"></a>
<a id="schema_ListAWSDefaultServiceQuotasRequest"></a>
<a id="tocSlistawsdefaultservicequotasrequest"></a>
<a id="tocslistawsdefaultservicequotasrequest"></a>

```json
{
  "ServiceCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_InvalidPaginationTokenException">InvalidPaginationTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtokenexception"></a>
<a id="schema_InvalidPaginationTokenException"></a>
<a id="tocSinvalidpaginationtokenexception"></a>
<a id="tocsinvalidpaginationtokenexception"></a>

```json
null
```

<h2 id="tocS_ListRequestedServiceQuotaChangeHistoryResponse">ListRequestedServiceQuotaChangeHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrequestedservicequotachangehistoryresponse"></a>
<a id="schema_ListRequestedServiceQuotaChangeHistoryResponse"></a>
<a id="tocSlistrequestedservicequotachangehistoryresponse"></a>
<a id="tocslistrequestedservicequotachangehistoryresponse"></a>

```json
{
  "NextToken": {},
  "RequestedQuotas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RequestedQuotas|object|false|none|none|

<h2 id="tocS_ListRequestedServiceQuotaChangeHistoryRequest">ListRequestedServiceQuotaChangeHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrequestedservicequotachangehistoryrequest"></a>
<a id="schema_ListRequestedServiceQuotaChangeHistoryRequest"></a>
<a id="tocSlistrequestedservicequotachangehistoryrequest"></a>
<a id="tocslistrequestedservicequotachangehistoryrequest"></a>

```json
{
  "ServiceCode": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListRequestedServiceQuotaChangeHistoryByQuotaResponse">ListRequestedServiceQuotaChangeHistoryByQuotaResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrequestedservicequotachangehistorybyquotaresponse"></a>
<a id="schema_ListRequestedServiceQuotaChangeHistoryByQuotaResponse"></a>
<a id="tocSlistrequestedservicequotachangehistorybyquotaresponse"></a>
<a id="tocslistrequestedservicequotachangehistorybyquotaresponse"></a>

```json
{
  "NextToken": {},
  "RequestedQuotas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|RequestedQuotas|object|false|none|none|

<h2 id="tocS_ListRequestedServiceQuotaChangeHistoryByQuotaRequest">ListRequestedServiceQuotaChangeHistoryByQuotaRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrequestedservicequotachangehistorybyquotarequest"></a>
<a id="schema_ListRequestedServiceQuotaChangeHistoryByQuotaRequest"></a>
<a id="tocSlistrequestedservicequotachangehistorybyquotarequest"></a>
<a id="tocslistrequestedservicequotachangehistorybyquotarequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "Status": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|
|Status|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListServiceQuotaIncreaseRequestsInTemplateResponse">ListServiceQuotaIncreaseRequestsInTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicequotaincreaserequestsintemplateresponse"></a>
<a id="schema_ListServiceQuotaIncreaseRequestsInTemplateResponse"></a>
<a id="tocSlistservicequotaincreaserequestsintemplateresponse"></a>
<a id="tocslistservicequotaincreaserequestsintemplateresponse"></a>

```json
{
  "ServiceQuotaIncreaseRequestInTemplateList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceQuotaIncreaseRequestInTemplateList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListServiceQuotaIncreaseRequestsInTemplateRequest">ListServiceQuotaIncreaseRequestsInTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicequotaincreaserequestsintemplaterequest"></a>
<a id="schema_ListServiceQuotaIncreaseRequestsInTemplateRequest"></a>
<a id="tocSlistservicequotaincreaserequestsintemplaterequest"></a>
<a id="tocslistservicequotaincreaserequestsintemplaterequest"></a>

```json
{
  "ServiceCode": {},
  "AwsRegion": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|AwsRegion|object|false|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListServiceQuotasResponse">ListServiceQuotasResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicequotasresponse"></a>
<a id="schema_ListServiceQuotasResponse"></a>
<a id="tocSlistservicequotasresponse"></a>
<a id="tocslistservicequotasresponse"></a>

```json
{
  "NextToken": {},
  "Quotas": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Quotas|object|false|none|none|

<h2 id="tocS_ListServiceQuotasRequest">ListServiceQuotasRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicequotasrequest"></a>
<a id="schema_ListServiceQuotasRequest"></a>
<a id="tocSlistservicequotasrequest"></a>
<a id="tocslistservicequotasrequest"></a>

```json
{
  "ServiceCode": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "NextToken": {},
  "Services": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Services|object|false|none|none|

<h2 id="tocS_ListServicesRequest">ListServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesrequest"></a>
<a id="schema_ListServicesRequest"></a>
<a id="tocSlistservicesrequest"></a>
<a id="tocslistservicesrequest"></a>

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
  "ResourceARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceARN|object|true|none|none|

<h2 id="tocS_PutServiceQuotaIncreaseRequestIntoTemplateResponse">PutServiceQuotaIncreaseRequestIntoTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputservicequotaincreaserequestintotemplateresponse"></a>
<a id="schema_PutServiceQuotaIncreaseRequestIntoTemplateResponse"></a>
<a id="tocSputservicequotaincreaserequestintotemplateresponse"></a>
<a id="tocsputservicequotaincreaserequestintotemplateresponse"></a>

```json
{
  "ServiceQuotaIncreaseRequestInTemplate": {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "AwsRegion": {},
    "Unit": {},
    "GlobalQuota": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceQuotaIncreaseRequestInTemplate|object|false|none|none|

<h2 id="tocS_PutServiceQuotaIncreaseRequestIntoTemplateRequest">PutServiceQuotaIncreaseRequestIntoTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputservicequotaincreaserequestintotemplaterequest"></a>
<a id="schema_PutServiceQuotaIncreaseRequestIntoTemplateRequest"></a>
<a id="tocSputservicequotaincreaserequestintotemplaterequest"></a>
<a id="tocsputservicequotaincreaserequestintotemplaterequest"></a>

```json
{
  "QuotaCode": {},
  "ServiceCode": {},
  "AwsRegion": {},
  "DesiredValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QuotaCode|object|true|none|none|
|ServiceCode|object|true|none|none|
|AwsRegion|object|true|none|none|
|DesiredValue|object|true|none|none|

<h2 id="tocS_QuotaExceededException">QuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaquotaexceededexception"></a>
<a id="schema_QuotaExceededException"></a>
<a id="tocSquotaexceededexception"></a>
<a id="tocsquotaexceededexception"></a>

```json
null
```

<h2 id="tocS_RequestServiceQuotaIncreaseResponse">RequestServiceQuotaIncreaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemarequestservicequotaincreaseresponse"></a>
<a id="schema_RequestServiceQuotaIncreaseResponse"></a>
<a id="tocSrequestservicequotaincreaseresponse"></a>
<a id="tocsrequestservicequotaincreaseresponse"></a>

```json
{
  "RequestedQuota": {
    "Id": {},
    "CaseId": {},
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "Status": {},
    "Created": {},
    "LastUpdated": {},
    "Requester": {},
    "QuotaArn": {},
    "GlobalQuota": {},
    "Unit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestedQuota|object|false|none|none|

<h2 id="tocS_RequestServiceQuotaIncreaseRequest">RequestServiceQuotaIncreaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequestservicequotaincreaserequest"></a>
<a id="schema_RequestServiceQuotaIncreaseRequest"></a>
<a id="tocSrequestservicequotaincreaserequest"></a>
<a id="tocsrequestservicequotaincreaserequest"></a>

```json
{
  "ServiceCode": {},
  "QuotaCode": {},
  "DesiredValue": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|true|none|none|
|QuotaCode|object|true|none|none|
|DesiredValue|object|true|none|none|

<h2 id="tocS_ResourceAlreadyExistsException">ResourceAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcealreadyexistsexception"></a>
<a id="schema_ResourceAlreadyExistsException"></a>
<a id="tocSresourcealreadyexistsexception"></a>
<a id="tocsresourcealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_InvalidResourceStateException">InvalidResourceStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresourcestateexception"></a>
<a id="schema_InvalidResourceStateException"></a>
<a id="tocSinvalidresourcestateexception"></a>
<a id="tocsinvalidresourcestateexception"></a>

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

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_TagPolicyViolationException">TagPolicyViolationException</h2>
<!-- backwards compatibility -->
<a id="schematagpolicyviolationexception"></a>
<a id="schema_TagPolicyViolationException"></a>
<a id="tocStagpolicyviolationexception"></a>
<a id="tocstagpolicyviolationexception"></a>

```json
null
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

<h2 id="tocS_AmazonResourceName">AmazonResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaamazonresourcename"></a>
<a id="schema_AmazonResourceName"></a>
<a id="tocSamazonresourcename"></a>
<a id="tocsamazonresourcename"></a>

```json
"string"
```

<h2 id="tocS_AwsRegion">AwsRegion</h2>
<!-- backwards compatibility -->
<a id="schemaawsregion"></a>
<a id="schema_AwsRegion"></a>
<a id="tocSawsregion"></a>
<a id="tocsawsregion"></a>

```json
"string"
```

<h2 id="tocS_CustomerServiceEngagementId">CustomerServiceEngagementId</h2>
<!-- backwards compatibility -->
<a id="schemacustomerserviceengagementid"></a>
<a id="schema_CustomerServiceEngagementId"></a>
<a id="tocScustomerserviceengagementid"></a>
<a id="tocscustomerserviceengagementid"></a>

```json
"string"
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

<h2 id="tocS_ServiceCode">ServiceCode</h2>
<!-- backwards compatibility -->
<a id="schemaservicecode"></a>
<a id="schema_ServiceCode"></a>
<a id="tocSservicecode"></a>
<a id="tocsservicecode"></a>

```json
"string"
```

<h2 id="tocS_QuotaCode">QuotaCode</h2>
<!-- backwards compatibility -->
<a id="schemaquotacode"></a>
<a id="schema_QuotaCode"></a>
<a id="tocSquotacode"></a>
<a id="tocsquotacode"></a>

```json
"string"
```

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"DEPENDENCY_ACCESS_DENIED_ERROR"
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

<h2 id="tocS_ErrorReason">ErrorReason</h2>
<!-- backwards compatibility -->
<a id="schemaerrorreason"></a>
<a id="schema_ErrorReason"></a>
<a id="tocSerrorreason"></a>
<a id="tocserrorreason"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

An error that explains why an action did not succeed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_ServiceQuota">ServiceQuota</h2>
<!-- backwards compatibility -->
<a id="schemaservicequota"></a>
<a id="schema_ServiceQuota"></a>
<a id="tocSservicequota"></a>
<a id="tocsservicequota"></a>

```json
{
  "ServiceCode": {},
  "ServiceName": {},
  "QuotaArn": {},
  "QuotaCode": {},
  "QuotaName": {},
  "Value": {},
  "Unit": {},
  "Adjustable": {},
  "GlobalQuota": {},
  "UsageMetric": {
    "MetricNamespace": {},
    "MetricName": {},
    "MetricDimensions": {
      "property1": "string",
      "property2": "string"
    },
    "MetricStatisticRecommendation": {}
  },
  "Period": {
    "PeriodValue": {},
    "PeriodUnit": {}
  },
  "ErrorReason": {
    "ErrorCode": {},
    "ErrorMessage": {}
  }
}
```

Information about a quota.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|ServiceName|object|false|none|none|
|QuotaArn|object|false|none|none|
|QuotaCode|object|false|none|none|
|QuotaName|object|false|none|none|
|Value|object|false|none|none|
|Unit|object|false|none|none|
|Adjustable|object|false|none|none|
|GlobalQuota|object|false|none|none|
|UsageMetric|object|false|none|none|
|Period|object|false|none|none|
|ErrorReason|object|false|none|none|

<h2 id="tocS_ServiceQuotaTemplateAssociationStatus">ServiceQuotaTemplateAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotatemplateassociationstatus"></a>
<a id="schema_ServiceQuotaTemplateAssociationStatus"></a>
<a id="tocSservicequotatemplateassociationstatus"></a>
<a id="tocsservicequotatemplateassociationstatus"></a>

```json
"ASSOCIATED"
```

<h2 id="tocS_RequestId">RequestId</h2>
<!-- backwards compatibility -->
<a id="schemarequestid"></a>
<a id="schema_RequestId"></a>
<a id="tocSrequestid"></a>
<a id="tocsrequestid"></a>

```json
"string"
```

<h2 id="tocS_RequestedServiceQuotaChange">RequestedServiceQuotaChange</h2>
<!-- backwards compatibility -->
<a id="schemarequestedservicequotachange"></a>
<a id="schema_RequestedServiceQuotaChange"></a>
<a id="tocSrequestedservicequotachange"></a>
<a id="tocsrequestedservicequotachange"></a>

```json
{
  "Id": {},
  "CaseId": {},
  "ServiceCode": {},
  "ServiceName": {},
  "QuotaCode": {},
  "QuotaName": {},
  "DesiredValue": {},
  "Status": {},
  "Created": {},
  "LastUpdated": {},
  "Requester": {},
  "QuotaArn": {},
  "GlobalQuota": {},
  "Unit": {}
}
```

Information about a quota increase request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|CaseId|object|false|none|none|
|ServiceCode|object|false|none|none|
|ServiceName|object|false|none|none|
|QuotaCode|object|false|none|none|
|QuotaName|object|false|none|none|
|DesiredValue|object|false|none|none|
|Status|object|false|none|none|
|Created|object|false|none|none|
|LastUpdated|object|false|none|none|
|Requester|object|false|none|none|
|QuotaArn|object|false|none|none|
|GlobalQuota|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_ServiceQuotaIncreaseRequestInTemplate">ServiceQuotaIncreaseRequestInTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaincreaserequestintemplate"></a>
<a id="schema_ServiceQuotaIncreaseRequestInTemplate"></a>
<a id="tocSservicequotaincreaserequestintemplate"></a>
<a id="tocsservicequotaincreaserequestintemplate"></a>

```json
{
  "ServiceCode": {},
  "ServiceName": {},
  "QuotaCode": {},
  "QuotaName": {},
  "DesiredValue": {},
  "AwsRegion": {},
  "Unit": {},
  "GlobalQuota": {}
}
```

Information about a quota increase request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|ServiceName|object|false|none|none|
|QuotaCode|object|false|none|none|
|QuotaName|object|false|none|none|
|DesiredValue|object|false|none|none|
|AwsRegion|object|false|none|none|
|Unit|object|false|none|none|
|GlobalQuota|object|false|none|none|

<h2 id="tocS_GlobalQuota">GlobalQuota</h2>
<!-- backwards compatibility -->
<a id="schemaglobalquota"></a>
<a id="schema_GlobalQuota"></a>
<a id="tocSglobalquota"></a>
<a id="tocsglobalquota"></a>

```json
true
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

<h2 id="tocS_InputTagKeys">InputTagKeys</h2>
<!-- backwards compatibility -->
<a id="schemainputtagkeys"></a>
<a id="schema_InputTagKeys"></a>
<a id="tocSinputtagkeys"></a>
<a id="tocsinputtagkeys"></a>

```json
[
  "string"
]
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

A complex data type that contains a tag key and tag value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_InputTags">InputTags</h2>
<!-- backwards compatibility -->
<a id="schemainputtags"></a>
<a id="schema_InputTags"></a>
<a id="tocSinputtags"></a>
<a id="tocsinputtags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
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

<h2 id="tocS_ServiceQuotaListDefinition">ServiceQuotaListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotalistdefinition"></a>
<a id="schema_ServiceQuotaListDefinition"></a>
<a id="tocSservicequotalistdefinition"></a>
<a id="tocsservicequotalistdefinition"></a>

```json
[
  {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaArn": {},
    "QuotaCode": {},
    "QuotaName": {},
    "Value": {},
    "Unit": {},
    "Adjustable": {},
    "GlobalQuota": {},
    "UsageMetric": {
      "MetricNamespace": {},
      "MetricName": {},
      "MetricDimensions": {
        "property1": "string",
        "property2": "string"
      },
      "MetricStatisticRecommendation": {}
    },
    "Period": {
      "PeriodValue": {},
      "PeriodUnit": {}
    },
    "ErrorReason": {
      "ErrorCode": {},
      "ErrorMessage": {}
    }
  }
]
```

<h2 id="tocS_RequestStatus">RequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemarequeststatus"></a>
<a id="schema_RequestStatus"></a>
<a id="tocSrequeststatus"></a>
<a id="tocsrequeststatus"></a>

```json
"PENDING"
```

<h2 id="tocS_RequestedServiceQuotaChangeHistoryListDefinition">RequestedServiceQuotaChangeHistoryListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemarequestedservicequotachangehistorylistdefinition"></a>
<a id="schema_RequestedServiceQuotaChangeHistoryListDefinition"></a>
<a id="tocSrequestedservicequotachangehistorylistdefinition"></a>
<a id="tocsrequestedservicequotachangehistorylistdefinition"></a>

```json
[
  {
    "Id": {},
    "CaseId": {},
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "Status": {},
    "Created": {},
    "LastUpdated": {},
    "Requester": {},
    "QuotaArn": {},
    "GlobalQuota": {},
    "Unit": {}
  }
]
```

<h2 id="tocS_ServiceQuotaIncreaseRequestInTemplateList">ServiceQuotaIncreaseRequestInTemplateList</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaincreaserequestintemplatelist"></a>
<a id="schema_ServiceQuotaIncreaseRequestInTemplateList"></a>
<a id="tocSservicequotaincreaserequestintemplatelist"></a>
<a id="tocsservicequotaincreaserequestintemplatelist"></a>

```json
[
  {
    "ServiceCode": {},
    "ServiceName": {},
    "QuotaCode": {},
    "QuotaName": {},
    "DesiredValue": {},
    "AwsRegion": {},
    "Unit": {},
    "GlobalQuota": {}
  }
]
```

<h2 id="tocS_ServiceInfoListDefinition">ServiceInfoListDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinfolistdefinition"></a>
<a id="schema_ServiceInfoListDefinition"></a>
<a id="tocSserviceinfolistdefinition"></a>
<a id="tocsserviceinfolistdefinition"></a>

```json
[
  {
    "ServiceCode": {},
    "ServiceName": {}
  }
]
```

<h2 id="tocS_OutputTags">OutputTags</h2>
<!-- backwards compatibility -->
<a id="schemaoutputtags"></a>
<a id="schema_OutputTags"></a>
<a id="tocSoutputtags"></a>
<a id="tocsoutputtags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MetricDimensionName">MetricDimensionName</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionname"></a>
<a id="schema_MetricDimensionName"></a>
<a id="tocSmetricdimensionname"></a>
<a id="tocsmetricdimensionname"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensionValue">MetricDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionvalue"></a>
<a id="schema_MetricDimensionValue"></a>
<a id="tocSmetricdimensionvalue"></a>
<a id="tocsmetricdimensionvalue"></a>

```json
"string"
```

<h2 id="tocS_MetricDimensionsMapDefinition">MetricDimensionsMapDefinition</h2>
<!-- backwards compatibility -->
<a id="schemametricdimensionsmapdefinition"></a>
<a id="schema_MetricDimensionsMapDefinition"></a>
<a id="tocSmetricdimensionsmapdefinition"></a>
<a id="tocsmetricdimensionsmapdefinition"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MetricDimensionValue](#schemametricdimensionvalue)|false|none|none|

<h2 id="tocS_QuotaMetricNamespace">QuotaMetricNamespace</h2>
<!-- backwards compatibility -->
<a id="schemaquotametricnamespace"></a>
<a id="schema_QuotaMetricNamespace"></a>
<a id="tocSquotametricnamespace"></a>
<a id="tocsquotametricnamespace"></a>

```json
"string"
```

<h2 id="tocS_QuotaMetricName">QuotaMetricName</h2>
<!-- backwards compatibility -->
<a id="schemaquotametricname"></a>
<a id="schema_QuotaMetricName"></a>
<a id="tocSquotametricname"></a>
<a id="tocsquotametricname"></a>

```json
"string"
```

<h2 id="tocS_Statistic">Statistic</h2>
<!-- backwards compatibility -->
<a id="schemastatistic"></a>
<a id="schema_Statistic"></a>
<a id="tocSstatistic"></a>
<a id="tocsstatistic"></a>

```json
"string"
```

<h2 id="tocS_MetricInfo">MetricInfo</h2>
<!-- backwards compatibility -->
<a id="schemametricinfo"></a>
<a id="schema_MetricInfo"></a>
<a id="tocSmetricinfo"></a>
<a id="tocsmetricinfo"></a>

```json
{
  "MetricNamespace": {},
  "MetricName": {},
  "MetricDimensions": {
    "property1": "string",
    "property2": "string"
  },
  "MetricStatisticRecommendation": {}
}
```

Information about the CloudWatch metric that reflects quota usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricNamespace|object|false|none|none|
|MetricName|object|false|none|none|
|MetricDimensions|object|false|none|none|
|MetricStatisticRecommendation|object|false|none|none|

<h2 id="tocS_PeriodUnit">PeriodUnit</h2>
<!-- backwards compatibility -->
<a id="schemaperiodunit"></a>
<a id="schema_PeriodUnit"></a>
<a id="tocSperiodunit"></a>
<a id="tocsperiodunit"></a>

```json
"MICROSECOND"
```

<h2 id="tocS_PeriodValue">PeriodValue</h2>
<!-- backwards compatibility -->
<a id="schemaperiodvalue"></a>
<a id="schema_PeriodValue"></a>
<a id="tocSperiodvalue"></a>
<a id="tocsperiodvalue"></a>

```json
0
```

<h2 id="tocS_QuotaValue">QuotaValue</h2>
<!-- backwards compatibility -->
<a id="schemaquotavalue"></a>
<a id="schema_QuotaValue"></a>
<a id="tocSquotavalue"></a>
<a id="tocsquotavalue"></a>

```json
0
```

<h2 id="tocS_QuotaAdjustable">QuotaAdjustable</h2>
<!-- backwards compatibility -->
<a id="schemaquotaadjustable"></a>
<a id="schema_QuotaAdjustable"></a>
<a id="tocSquotaadjustable"></a>
<a id="tocsquotaadjustable"></a>

```json
true
```

<h2 id="tocS_QuotaArn">QuotaArn</h2>
<!-- backwards compatibility -->
<a id="schemaquotaarn"></a>
<a id="schema_QuotaArn"></a>
<a id="tocSquotaarn"></a>
<a id="tocsquotaarn"></a>

```json
"string"
```

<h2 id="tocS_QuotaName">QuotaName</h2>
<!-- backwards compatibility -->
<a id="schemaquotaname"></a>
<a id="schema_QuotaName"></a>
<a id="tocSquotaname"></a>
<a id="tocsquotaname"></a>

```json
"string"
```

<h2 id="tocS_QuotaPeriod">QuotaPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaquotaperiod"></a>
<a id="schema_QuotaPeriod"></a>
<a id="tocSquotaperiod"></a>
<a id="tocsquotaperiod"></a>

```json
{
  "PeriodValue": {},
  "PeriodUnit": {}
}
```

Information about the quota period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PeriodValue|object|false|none|none|
|PeriodUnit|object|false|none|none|

<h2 id="tocS_QuotaUnit">QuotaUnit</h2>
<!-- backwards compatibility -->
<a id="schemaquotaunit"></a>
<a id="schema_QuotaUnit"></a>
<a id="tocSquotaunit"></a>
<a id="tocsquotaunit"></a>

```json
"string"
```

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_Requester">Requester</h2>
<!-- backwards compatibility -->
<a id="schemarequester"></a>
<a id="schema_Requester"></a>
<a id="tocSrequester"></a>
<a id="tocsrequester"></a>

```json
"string"
```

<h2 id="tocS_ServiceInfo">ServiceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinfo"></a>
<a id="schema_ServiceInfo"></a>
<a id="tocSserviceinfo"></a>
<a id="tocsserviceinfo"></a>

```json
{
  "ServiceCode": {},
  "ServiceName": {}
}
```

Information about a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceCode|object|false|none|none|
|ServiceName|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```
