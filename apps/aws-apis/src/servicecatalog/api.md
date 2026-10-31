<h1 id="aws-service-catalog">AWS Service Catalog v2015-12-10</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Service Catalog</fullname> <p> <a href="http://aws.amazon.com/servicecatalog">Service Catalog</a> enables organizations to create and manage catalogs of IT services that are approved for Amazon Web Services. To get the most out of this documentation, you should be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">Service Catalog Concepts</a>.</p>

Base URLs:

* <a href="http://servicecatalog.us-east-1.amazonaws.com">http://servicecatalog.us-east-1.amazonaws.com</a> - The AWS Service Catalog multi-region endpoint

* <a href="https://servicecatalog.us-east-1.amazonaws.com">https://servicecatalog.us-east-1.amazonaws.com</a> - The AWS Service Catalog multi-region endpoint

* <a href="http://servicecatalog.cn-north-1.amazonaws.com.cn">http://servicecatalog.cn-north-1.amazonaws.com.cn</a> - The AWS Service Catalog endpoint for China (Beijing) and China (Ningxia)

* <a href="https://servicecatalog.cn-north-1.amazonaws.com.cn">https://servicecatalog.cn-north-1.amazonaws.com.cn</a> - The AWS Service Catalog endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/servicecatalog/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-service-catalog-default">Default</h1>

## AcceptPortfolioShare

<a id="opIdAcceptPortfolioShare"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AcceptPortfolioShare' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "PortfolioShareType": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AcceptPortfolioShare`

Accepts an offer to share the specified portfolio.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PortfolioShareType": {}
}
```

<h3 id="acceptportfolioshare-parameters">Parameters</h3>

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
|body|body|[AcceptPortfolioShareInput](#schemaacceptportfolioshareinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» PortfolioShareType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AcceptPortfolioShare|

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

<h3 id="acceptportfolioshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptPortfolioShareOutput](#schemaacceptportfolioshareoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateBudgetWithResource

<a id="opIdAssociateBudgetWithResource"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AssociateBudgetWithResource' \
  -d '{
    "BudgetName": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AssociateBudgetWithResource`

Associates the specified budget with the specified resource.

> Body parameter

```json
{
  "BudgetName": {},
  "ResourceId": {}
}
```

<h3 id="associatebudgetwithresource-parameters">Parameters</h3>

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
|body|body|[AssociateBudgetWithResourceInput](#schemaassociatebudgetwithresourceinput)|true|none|
|» BudgetName|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AssociateBudgetWithResource|

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

<h3 id="associatebudgetwithresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateBudgetWithResourceOutput](#schemaassociatebudgetwithresourceoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePrincipalWithPortfolio

<a id="opIdAssociatePrincipalWithPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "PrincipalARN": {},
    "PrincipalType": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio`

<p>Associates the specified principal ARN with the specified portfolio.</p> <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is included in the share. </p> <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are required. </p> <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code> </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PrincipalARN": {},
  "PrincipalType": {}
}
```

<h3 id="associateprincipalwithportfolio-parameters">Parameters</h3>

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
|body|body|[AssociatePrincipalWithPortfolioInput](#schemaassociateprincipalwithportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» PrincipalARN|body|object|true|none|
|» PrincipalType|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AssociatePrincipalWithPortfolio|

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

<h3 id="associateprincipalwithportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePrincipalWithPortfolioOutput](#schemaassociateprincipalwithportfoliooutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateProductWithPortfolio

<a id="opIdAssociateProductWithPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AssociateProductWithPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "PortfolioId": {},
    "SourcePortfolioId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AssociateProductWithPortfolio`

<p>Associates the specified product with the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PortfolioId": {},
  "SourcePortfolioId": {}
}
```

<h3 id="associateproductwithportfolio-parameters">Parameters</h3>

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
|body|body|[AssociateProductWithPortfolioInput](#schemaassociateproductwithportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» PortfolioId|body|object|true|none|
|» SourcePortfolioId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AssociateProductWithPortfolio|

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

<h3 id="associateproductwithportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateProductWithPortfolioOutput](#schemaassociateproductwithportfoliooutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateServiceActionWithProvisioningArtifact

<a id="opIdAssociateServiceActionWithProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact' \
  -d '{
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "ServiceActionId": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact`

Associates a self-service action with a provisioning artifact.

> Body parameter

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

<h3 id="associateserviceactionwithprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[AssociateServiceActionWithProvisioningArtifactInput](#schemaassociateserviceactionwithprovisioningartifactinput)|true|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» ServiceActionId|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact|

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

<h3 id="associateserviceactionwithprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateServiceActionWithProvisioningArtifactOutput](#schemaassociateserviceactionwithprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateTagOptionWithResource

<a id="opIdAssociateTagOptionWithResource"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.AssociateTagOptionWithResource' \
  -d '{
    "ResourceId": {},
    "TagOptionId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.AssociateTagOptionWithResource`

Associate the specified TagOption with the specified portfolio or product.

> Body parameter

```json
{
  "ResourceId": {},
  "TagOptionId": {}
}
```

<h3 id="associatetagoptionwithresource-parameters">Parameters</h3>

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
|body|body|[AssociateTagOptionWithResourceInput](#schemaassociatetagoptionwithresourceinput)|true|none|
|» ResourceId|body|object|true|none|
|» TagOptionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.AssociateTagOptionWithResource|

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

<h3 id="associatetagoptionwithresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateTagOptionWithResourceOutput](#schemaassociatetagoptionwithresourceoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|485|485|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateServiceActionWithProvisioningArtifact

<a id="opIdBatchAssociateServiceActionWithProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact' \
  -d '{
    "ServiceActionAssociations": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact`

Associates multiple self-service actions with provisioning artifacts.

> Body parameter

```json
{
  "ServiceActionAssociations": {},
  "AcceptLanguage": {}
}
```

<h3 id="batchassociateserviceactionwithprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[BatchAssociateServiceActionWithProvisioningArtifactInput](#schemabatchassociateserviceactionwithprovisioningartifactinput)|true|none|
|» ServiceActionAssociations|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "FailedServiceActionAssociations": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchassociateserviceactionwithprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateServiceActionWithProvisioningArtifactOutput](#schemabatchassociateserviceactionwithprovisioningartifactoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateServiceActionFromProvisioningArtifact

<a id="opIdBatchDisassociateServiceActionFromProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact' \
  -d '{
    "ServiceActionAssociations": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact`

Disassociates a batch of self-service actions from the specified provisioning artifact.

> Body parameter

```json
{
  "ServiceActionAssociations": {},
  "AcceptLanguage": {}
}
```

<h3 id="batchdisassociateserviceactionfromprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[BatchDisassociateServiceActionFromProvisioningArtifactInput](#schemabatchdisassociateserviceactionfromprovisioningartifactinput)|true|none|
|» ServiceActionAssociations|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "FailedServiceActionAssociations": {}
}
```

> 480 Response

```json
null
```

<h3 id="batchdisassociateserviceactionfromprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateServiceActionFromProvisioningArtifactOutput](#schemabatchdisassociateserviceactionfromprovisioningartifactoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyProduct

<a id="opIdCopyProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CopyProduct' \
  -d '{
    "AcceptLanguage": {},
    "SourceProductArn": {},
    "TargetProductId": {},
    "TargetProductName": {},
    "SourceProvisioningArtifactIdentifiers": {},
    "CopyOptions": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CopyProduct`

<p>Copies the specified source product to the specified target product or a new product.</p> <p>You can copy a product to the same account or another account. You can copy a product to the same Region or another Region. If you copy a product to another account, you must first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p> <p>This operation is performed asynchronously. To track the progress of the operation, use <a>DescribeCopyProductStatus</a>.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "SourceProductArn": {},
  "TargetProductId": {},
  "TargetProductName": {},
  "SourceProvisioningArtifactIdentifiers": {},
  "CopyOptions": {},
  "IdempotencyToken": {}
}
```

<h3 id="copyproduct-parameters">Parameters</h3>

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
|body|body|[CopyProductInput](#schemacopyproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» SourceProductArn|body|object|true|none|
|» TargetProductId|body|object|false|none|
|» TargetProductName|body|object|false|none|
|» SourceProvisioningArtifactIdentifiers|body|object|false|none|
|» CopyOptions|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CopyProduct|

> Example responses

> 200 Response

```json
{
  "CopyProductToken": {}
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

<h3 id="copyproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CopyProductOutput](#schemacopyproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConstraint

<a id="opIdCreateConstraint"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateConstraint' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "ProductId": {},
    "Parameters": {},
    "Type": {},
    "Description": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateConstraint`

<p>Creates a constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "ProductId": {},
  "Parameters": {},
  "Type": {},
  "Description": {},
  "IdempotencyToken": {}
}
```

<h3 id="createconstraint-parameters">Parameters</h3>

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
|body|body|[CreateConstraintInput](#schemacreateconstraintinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» ProductId|body|object|true|none|
|» Parameters|body|object|true|none|
|» Type|body|object|true|none|
|» Description|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateConstraint|

> Example responses

> 200 Response

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
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

<h3 id="createconstraint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConstraintOutput](#schemacreateconstraintoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePortfolio

<a id="opIdCreatePortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreatePortfolio' \
  -d '{
    "AcceptLanguage": {},
    "DisplayName": {},
    "Description": {},
    "ProviderName": {},
    "Tags": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolio`

<p>Creates a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "DisplayName": {},
  "Description": {},
  "ProviderName": {},
  "Tags": {},
  "IdempotencyToken": {}
}
```

<h3 id="createportfolio-parameters">Parameters</h3>

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
|body|body|[CreatePortfolioInput](#schemacreateportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» DisplayName|body|object|true|none|
|» Description|body|object|false|none|
|» ProviderName|body|object|true|none|
|» Tags|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreatePortfolio|

> Example responses

> 200 Response

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
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

<h3 id="createportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePortfolioOutput](#schemacreateportfoliooutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePortfolioShare

<a id="opIdCreatePortfolioShare"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreatePortfolioShare' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "AccountId": {},
    "OrganizationNode": {
      "Type": {},
      "Value": {}
    },
    "ShareTagOptions": {},
    "SharePrincipals": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreatePortfolioShare`

<p>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.</p> <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p> <p> <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p> <p>You can't share a shared resource, including portfolios that contain a shared product.</p> <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  },
  "ShareTagOptions": {},
  "SharePrincipals": {}
}
```

<h3 id="createportfolioshare-parameters">Parameters</h3>

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
|body|body|[CreatePortfolioShareInput](#schemacreateportfolioshareinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» AccountId|body|object|false|none|
|» OrganizationNode|body|object|false|none|
|» » Type|body|object|false|none|
|» » Value|body|object|false|none|
|» ShareTagOptions|body|object|false|none|
|» SharePrincipals|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreatePortfolioShare|

> Example responses

> 200 Response

```json
{
  "PortfolioShareToken": {}
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

<h3 id="createportfolioshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePortfolioShareOutput](#schemacreateportfolioshareoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|483|483|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|484|484|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProduct

<a id="opIdCreateProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateProduct' \
  -d '{
    "AcceptLanguage": {},
    "Name": {},
    "Owner": {},
    "Description": {},
    "Distributor": {},
    "SupportDescription": {},
    "SupportEmail": {},
    "SupportUrl": {},
    "ProductType": {},
    "Tags": {},
    "ProvisioningArtifactParameters": {
      "Name": {},
      "Description": {},
      "Info": {
        "property1": "string",
        "property2": "string"
      },
      "Type": {},
      "DisableTemplateValidation": {}
    },
    "IdempotencyToken": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateProduct`

<p>Creates a product.</p> <p>A delegated admin is authorized to invoke this command.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Name": {},
  "Owner": {},
  "Description": {},
  "Distributor": {},
  "SupportDescription": {},
  "SupportEmail": {},
  "SupportUrl": {},
  "ProductType": {},
  "Tags": {},
  "ProvisioningArtifactParameters": {
    "Name": {},
    "Description": {},
    "Info": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {},
    "DisableTemplateValidation": {}
  },
  "IdempotencyToken": {},
  "SourceConnection": {
    "Type": {},
    "ConnectionParameters": {
      "CodeStar": {
        "ConnectionArn": {},
        "Repository": {},
        "Branch": {},
        "ArtifactPath": {}
      }
    }
  }
}
```

<h3 id="createproduct-parameters">Parameters</h3>

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
|body|body|[CreateProductInput](#schemacreateproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Name|body|object|true|none|
|» Owner|body|object|true|none|
|» Description|body|object|false|none|
|» Distributor|body|object|false|none|
|» SupportDescription|body|object|false|none|
|» SupportEmail|body|object|false|none|
|» SupportUrl|body|object|false|none|
|» ProductType|body|object|true|none|
|» Tags|body|object|false|none|
|» ProvisioningArtifactParameters|body|object|false|none|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » Info|body|object|false|none|
|» » » **additionalProperties**|body|[ProvisioningArtifactInfoValue](#schemaprovisioningartifactinfovalue)|false|none|
|» » Type|body|object|false|none|
|» » DisableTemplateValidation|body|object|false|none|
|» IdempotencyToken|body|object|true|none|
|» SourceConnection|body|object|false|none|
|» » Type|body|object|false|none|
|» » ConnectionParameters|body|object|true|none|
|» » » CodeStar|body|object|false|none|
|» » » » ConnectionArn|body|object|true|none|
|» » » » Repository|body|object|true|none|
|» » » » Branch|body|object|true|none|
|» » » » ArtifactPath|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateProduct|

> Example responses

> 200 Response

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
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

<h3 id="createproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProductOutput](#schemacreateproductoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProvisionedProductPlan

<a id="opIdCreateProvisionedProductPlan"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateProvisionedProductPlan' \
  -d '{
    "AcceptLanguage": {},
    "PlanName": {},
    "PlanType": {},
    "NotificationArns": {},
    "PathId": {},
    "ProductId": {},
    "ProvisionedProductName": {},
    "ProvisioningArtifactId": {},
    "ProvisioningParameters": {},
    "IdempotencyToken": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisionedProductPlan`

<p>Creates a plan.</p> <p>A plan includes the list of resources to be created (when provisioning a new product) or modified (when updating a provisioned product) when the plan is executed.</p> <p>You can create one plan for each provisioned product. To create a plan for an existing provisioned product, the product status must be AVAILABLE or TAINTED.</p> <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>. To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PlanName": {},
  "PlanType": {},
  "NotificationArns": {},
  "PathId": {},
  "ProductId": {},
  "ProvisionedProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningParameters": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

<h3 id="createprovisionedproductplan-parameters">Parameters</h3>

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
|body|body|[CreateProvisionedProductPlanInput](#schemacreateprovisionedproductplaninput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PlanName|body|object|true|none|
|» PlanType|body|object|true|none|
|» NotificationArns|body|object|false|none|
|» PathId|body|object|false|none|
|» ProductId|body|object|true|none|
|» ProvisionedProductName|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» ProvisioningParameters|body|object|false|none|
|» IdempotencyToken|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateProvisionedProductPlan|

> Example responses

> 200 Response

```json
{
  "PlanName": {},
  "PlanId": {},
  "ProvisionProductId": {},
  "ProvisionedProductName": {},
  "ProvisioningArtifactId": {}
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

<h3 id="createprovisionedproductplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProvisionedProductPlanOutput](#schemacreateprovisionedproductplanoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateProvisioningArtifact

<a id="opIdCreateProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateProvisioningArtifact' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "Parameters": {
      "Name": {},
      "Description": {},
      "Info": {
        "property1": "string",
        "property2": "string"
      },
      "Type": {},
      "DisableTemplateValidation": {}
    },
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateProvisioningArtifact`

<p>Creates a provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot create a provisioning artifact for a product that was shared with you.</p> <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is required when using the <code>ImportFromPhysicalId</code> template source in the information data section.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "Parameters": {
    "Name": {},
    "Description": {},
    "Info": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {},
    "DisableTemplateValidation": {}
  },
  "IdempotencyToken": {}
}
```

<h3 id="createprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[CreateProvisioningArtifactInput](#schemacreateprovisioningartifactinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» Parameters|body|object|true|none|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » Info|body|object|false|none|
|» » » **additionalProperties**|body|[ProvisioningArtifactInfoValue](#schemaprovisioningartifactinfovalue)|false|none|
|» » Type|body|object|false|none|
|» » DisableTemplateValidation|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
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

<h3 id="createprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateProvisioningArtifactOutput](#schemacreateprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateServiceAction

<a id="opIdCreateServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateServiceAction' \
  -d '{
    "Name": {},
    "DefinitionType": {},
    "Definition": {
      "property1": "string",
      "property2": "string"
    },
    "Description": {},
    "AcceptLanguage": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateServiceAction`

Creates a self-service action.

> Body parameter

```json
{
  "Name": {},
  "DefinitionType": {},
  "Definition": {
    "property1": "string",
    "property2": "string"
  },
  "Description": {},
  "AcceptLanguage": {},
  "IdempotencyToken": {}
}
```

<h3 id="createserviceaction-parameters">Parameters</h3>

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
|body|body|[CreateServiceActionInput](#schemacreateserviceactioninput)|true|none|
|» Name|body|object|true|none|
|» DefinitionType|body|object|true|none|
|» Definition|body|object|true|none|
|» » **additionalProperties**|body|[ServiceActionDefinitionValue](#schemaserviceactiondefinitionvalue)|false|none|
|» Description|body|object|false|none|
|» AcceptLanguage|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateServiceAction|

> Example responses

> 200 Response

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
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

<h3 id="createserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceActionOutput](#schemacreateserviceactionoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTagOption

<a id="opIdCreateTagOption"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.CreateTagOption' \
  -d '{
    "Key": {},
    "Value": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.CreateTagOption`

Creates a TagOption.

> Body parameter

```json
{
  "Key": {},
  "Value": {}
}
```

<h3 id="createtagoption-parameters">Parameters</h3>

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
|body|body|[CreateTagOptionInput](#schemacreatetagoptioninput)|true|none|
|» Key|body|object|true|none|
|» Value|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.CreateTagOption|

> Example responses

> 200 Response

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
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

<h3 id="createtagoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTagOptionOutput](#schemacreatetagoptionoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConstraint

<a id="opIdDeleteConstraint"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteConstraint' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteConstraint`

<p>Deletes the specified constraint.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="deleteconstraint-parameters">Parameters</h3>

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
|body|body|[DeleteConstraintInput](#schemadeleteconstraintinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteConstraint|

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

<h3 id="deleteconstraint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConstraintOutput](#schemadeleteconstraintoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePortfolio

<a id="opIdDeletePortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeletePortfolio' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolio`

<p>Deletes the specified portfolio.</p> <p>You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="deleteportfolio-parameters">Parameters</h3>

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
|body|body|[DeletePortfolioInput](#schemadeleteportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeletePortfolio|

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

<h3 id="deleteportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePortfolioOutput](#schemadeleteportfoliooutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|483|483|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePortfolioShare

<a id="opIdDeletePortfolioShare"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeletePortfolioShare' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "AccountId": {},
    "OrganizationNode": {
      "Type": {},
      "Value": {}
    }
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeletePortfolioShare`

<p>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator.</p> <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  }
}
```

<h3 id="deleteportfolioshare-parameters">Parameters</h3>

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
|body|body|[DeletePortfolioShareInput](#schemadeleteportfolioshareinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» AccountId|body|object|false|none|
|» OrganizationNode|body|object|false|none|
|» » Type|body|object|false|none|
|» » Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeletePortfolioShare|

> Example responses

> 200 Response

```json
{
  "PortfolioShareToken": {}
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

<h3 id="deleteportfolioshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePortfolioShareOutput](#schemadeleteportfolioshareoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProduct

<a id="opIdDeleteProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteProduct' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProduct`

<p>Deletes the specified product.</p> <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="deleteproduct-parameters">Parameters</h3>

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
|body|body|[DeleteProductInput](#schemadeleteproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteProduct|

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

<h3 id="deleteproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProductOutput](#schemadeleteproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|483|483|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProvisionedProductPlan

<a id="opIdDeleteProvisionedProductPlan"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteProvisionedProductPlan' \
  -d '{
    "AcceptLanguage": {},
    "PlanId": {},
    "IgnoreErrors": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisionedProductPlan`

Deletes the specified plan.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "IgnoreErrors": {}
}
```

<h3 id="deleteprovisionedproductplan-parameters">Parameters</h3>

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
|body|body|[DeleteProvisionedProductPlanInput](#schemadeleteprovisionedproductplaninput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PlanId|body|object|true|none|
|» IgnoreErrors|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteProvisionedProductPlan|

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

<h3 id="deleteprovisionedproductplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProvisionedProductPlanOutput](#schemadeleteprovisionedproductplanoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteProvisioningArtifact

<a id="opIdDeleteProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteProvisioningArtifact' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "ProvisioningArtifactId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteProvisioningArtifact`

<p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {}
}
```

<h3 id="deleteprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[DeleteProvisioningArtifactInput](#schemadeleteprovisioningartifactinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteProvisioningArtifact|

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

<h3 id="deleteprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteProvisioningArtifactOutput](#schemadeleteprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteServiceAction

<a id="opIdDeleteServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteServiceAction' \
  -d '{
    "Id": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteServiceAction`

Deletes a self-service action.

> Body parameter

```json
{
  "Id": {},
  "AcceptLanguage": {}
}
```

<h3 id="deleteserviceaction-parameters">Parameters</h3>

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
|body|body|[DeleteServiceActionInput](#schemadeleteserviceactioninput)|true|none|
|» Id|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteServiceAction|

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

<h3 id="deleteserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceActionOutput](#schemadeleteserviceactionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTagOption

<a id="opIdDeleteTagOption"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DeleteTagOption' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DeleteTagOption`

<p>Deletes the specified TagOption.</p> <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="deletetagoption-parameters">Parameters</h3>

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
|body|body|[DeleteTagOptionInput](#schemadeletetagoptioninput)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DeleteTagOption|

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

<h3 id="deletetagoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTagOptionOutput](#schemadeletetagoptionoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConstraint

<a id="opIdDescribeConstraint"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeConstraint' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeConstraint`

Gets information about the specified constraint.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="describeconstraint-parameters">Parameters</h3>

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
|body|body|[DescribeConstraintInput](#schemadescribeconstraintinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeConstraint|

> Example responses

> 200 Response

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
  "Status": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeconstraint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConstraintOutput](#schemadescribeconstraintoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCopyProductStatus

<a id="opIdDescribeCopyProductStatus"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeCopyProductStatus' \
  -d '{
    "AcceptLanguage": {},
    "CopyProductToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeCopyProductStatus`

Gets the status of the specified copy product operation.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "CopyProductToken": {}
}
```

<h3 id="describecopyproductstatus-parameters">Parameters</h3>

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
|body|body|[DescribeCopyProductStatusInput](#schemadescribecopyproductstatusinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» CopyProductToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeCopyProductStatus|

> Example responses

> 200 Response

```json
{
  "CopyProductStatus": {},
  "TargetProductId": {},
  "StatusDetail": {}
}
```

> 480 Response

```json
null
```

<h3 id="describecopyproductstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCopyProductStatusOutput](#schemadescribecopyproductstatusoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePortfolio

<a id="opIdDescribePortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribePortfolio' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolio`

<p>Gets information about the specified portfolio.</p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="describeportfolio-parameters">Parameters</h3>

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
|body|body|[DescribePortfolioInput](#schemadescribeportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribePortfolio|

> Example responses

> 200 Response

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
  "Tags": {},
  "TagOptions": {},
  "Budgets": {}
}
```

> 480 Response

```json
null
```

<h3 id="describeportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePortfolioOutput](#schemadescribeportfoliooutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePortfolioShareStatus

<a id="opIdDescribePortfolioShareStatus"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribePortfolioShareStatus' \
  -d '{
    "PortfolioShareToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShareStatus`

Gets the status of the specified portfolio share operation. This API can only be called by the management account in the organization or by a delegated admin.

> Body parameter

```json
{
  "PortfolioShareToken": {}
}
```

<h3 id="describeportfoliosharestatus-parameters">Parameters</h3>

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
|body|body|[DescribePortfolioShareStatusInput](#schemadescribeportfoliosharestatusinput)|true|none|
|» PortfolioShareToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribePortfolioShareStatus|

> Example responses

> 200 Response

```json
{
  "PortfolioShareToken": {},
  "PortfolioId": {},
  "OrganizationNodeValue": {},
  "Status": {},
  "ShareDetails": {
    "SuccessfulShares": {},
    "ShareErrors": {}
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

<h3 id="describeportfoliosharestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePortfolioShareStatusOutput](#schemadescribeportfoliosharestatusoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePortfolioShares

<a id="opIdDescribePortfolioShares"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribePortfolioShares' \
  -d '{
    "PortfolioId": {},
    "Type": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribePortfolioShares`

<p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p> <p>You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share.</p> <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>

> Body parameter

```json
{
  "PortfolioId": {},
  "Type": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="describeportfolioshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePortfolioSharesInput](#schemadescribeportfoliosharesinput)|true|none|
|» PortfolioId|body|object|true|none|
|» Type|body|object|true|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribePortfolioShares|

> Example responses

> 200 Response

```json
{
  "NextPageToken": {},
  "PortfolioShareDetails": {}
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

<h3 id="describeportfolioshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePortfolioSharesOutput](#schemadescribeportfoliosharesoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProduct

<a id="opIdDescribeProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProduct' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProduct`

<p>Gets information about the specified product.</p> <note> <p> Running this operation with administrator access results in a failure. <a>DescribeProductAsAdmin</a> should be used instead. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {}
}
```

<h3 id="describeproduct-parameters">Parameters</h3>

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
|body|body|[DescribeProductInput](#schemadescribeproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|false|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProduct|

> Example responses

> 200 Response

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "ProvisioningArtifacts": {},
  "Budgets": {},
  "LaunchPaths": {}
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

<h3 id="describeproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProductOutput](#schemadescribeproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProductAsAdmin

<a id="opIdDescribeProductAsAdmin"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProductAsAdmin' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "Name": {},
    "SourcePortfolioId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductAsAdmin`

Gets information about the specified product. This operation is run with administrator access.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {},
  "SourcePortfolioId": {}
}
```

<h3 id="describeproductasadmin-parameters">Parameters</h3>

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
|body|body|[DescribeProductAsAdminInput](#schemadescribeproductasadmininput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|false|none|
|» Name|body|object|false|none|
|» SourcePortfolioId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProductAsAdmin|

> Example responses

> 200 Response

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
  "ProvisioningArtifactSummaries": {},
  "Tags": {},
  "TagOptions": {},
  "Budgets": {}
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

<h3 id="describeproductasadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProductAsAdminOutput](#schemadescribeproductasadminoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProductView

<a id="opIdDescribeProductView"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProductView' \
  -d '{
    "AcceptLanguage": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProductView`

Gets information about the specified product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

<h3 id="describeproductview-parameters">Parameters</h3>

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
|body|body|[DescribeProductViewInput](#schemadescribeproductviewinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProductView|

> Example responses

> 200 Response

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "ProvisioningArtifacts": {}
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

<h3 id="describeproductview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProductViewOutput](#schemadescribeproductviewoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProvisionedProduct

<a id="opIdDescribeProvisionedProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProvisionedProduct' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "Name": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProduct`

Gets information about the specified provisioned product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {}
}
```

<h3 id="describeprovisionedproduct-parameters">Parameters</h3>

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
|body|body|[DescribeProvisionedProductInput](#schemadescribeprovisionedproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|false|none|
|» Name|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProvisionedProduct|

> Example responses

> 200 Response

```json
{
  "ProvisionedProductDetail": {
    "Name": {},
    "Arn": {},
    "Type": {},
    "Id": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedTime": {},
    "IdempotencyToken": {},
    "LastRecordId": {},
    "LastProvisioningRecordId": {},
    "LastSuccessfulProvisioningRecordId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "LaunchRoleArn": {}
  },
  "CloudWatchDashboards": {}
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

<h3 id="describeprovisionedproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProvisionedProductOutput](#schemadescribeprovisionedproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProvisionedProductPlan

<a id="opIdDescribeProvisionedProductPlan"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProvisionedProductPlan' \
  -d '{
    "AcceptLanguage": {},
    "PlanId": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisionedProductPlan`

Gets information about the resource changes for the specified plan.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="describeprovisionedproductplan-parameters">Parameters</h3>

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
|body|body|[DescribeProvisionedProductPlanInput](#schemadescribeprovisionedproductplaninput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PlanId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProvisionedProductPlan|

> Example responses

> 200 Response

```json
{
  "ProvisionedProductPlanDetails": {
    "CreatedTime": {},
    "PathId": {},
    "ProductId": {},
    "PlanName": {},
    "PlanId": {},
    "ProvisionProductId": {},
    "ProvisionProductName": {},
    "PlanType": {},
    "ProvisioningArtifactId": {},
    "Status": {},
    "UpdatedTime": {},
    "NotificationArns": {},
    "ProvisioningParameters": {},
    "Tags": {},
    "StatusMessage": {}
  },
  "ResourceChanges": {},
  "NextPageToken": {}
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

<h3 id="describeprovisionedproductplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProvisionedProductPlanOutput](#schemadescribeprovisionedproductplanoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProvisioningArtifact

<a id="opIdDescribeProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProvisioningArtifact' \
  -d '{
    "AcceptLanguage": {},
    "ProvisioningArtifactId": {},
    "ProductId": {},
    "ProvisioningArtifactName": {},
    "ProductName": {},
    "Verbose": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningArtifact`

Gets information about the specified provisioning artifact (also known as a version) for the specified product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisioningArtifactId": {},
  "ProductId": {},
  "ProvisioningArtifactName": {},
  "ProductName": {},
  "Verbose": {}
}
```

<h3 id="describeprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[DescribeProvisioningArtifactInput](#schemadescribeprovisioningartifactinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisioningArtifactId|body|object|false|none|
|» ProductId|body|object|false|none|
|» ProvisioningArtifactName|body|object|false|none|
|» ProductName|body|object|false|none|
|» Verbose|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
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

<h3 id="describeprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProvisioningArtifactOutput](#schemadescribeprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeProvisioningParameters

<a id="opIdDescribeProvisioningParameters"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeProvisioningParameters' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "ProductName": {},
    "ProvisioningArtifactId": {},
    "ProvisioningArtifactName": {},
    "PathId": {},
    "PathName": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeProvisioningParameters`

<p>Gets information about the configuration required to provision the specified product using the specified provisioning artifact.</p> <p>If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {}
}
```

<h3 id="describeprovisioningparameters-parameters">Parameters</h3>

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
|body|body|[DescribeProvisioningParametersInput](#schemadescribeprovisioningparametersinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|false|none|
|» ProductName|body|object|false|none|
|» ProvisioningArtifactId|body|object|false|none|
|» ProvisioningArtifactName|body|object|false|none|
|» PathId|body|object|false|none|
|» PathName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeProvisioningParameters|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactParameters": {},
  "ConstraintSummaries": {},
  "UsageInstructions": {},
  "TagOptions": {},
  "ProvisioningArtifactPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {}
  },
  "ProvisioningArtifactOutputs": {},
  "ProvisioningArtifactOutputKeys": {}
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

<h3 id="describeprovisioningparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeProvisioningParametersOutput](#schemadescribeprovisioningparametersoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRecord

<a id="opIdDescribeRecord"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeRecord' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeRecord`

<p>Gets information about the specified request operation.</p> <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). </p> <note> <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="describerecord-parameters">Parameters</h3>

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
|body|body|[DescribeRecordInput](#schemadescriberecordinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeRecord|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  },
  "RecordOutputs": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="describerecord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRecordOutput](#schemadescriberecordoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServiceAction

<a id="opIdDescribeServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeServiceAction' \
  -d '{
    "Id": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceAction`

Describes a self-service action.

> Body parameter

```json
{
  "Id": {},
  "AcceptLanguage": {}
}
```

<h3 id="describeserviceaction-parameters">Parameters</h3>

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
|body|body|[DescribeServiceActionInput](#schemadescribeserviceactioninput)|true|none|
|» Id|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeServiceAction|

> Example responses

> 200 Response

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

> 480 Response

```json
null
```

<h3 id="describeserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceActionOutput](#schemadescribeserviceactionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeServiceActionExecutionParameters

<a id="opIdDescribeServiceActionExecutionParameters"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters' \
  -d '{
    "ProvisionedProductId": {},
    "ServiceActionId": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters`

Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.

> Body parameter

```json
{
  "ProvisionedProductId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

<h3 id="describeserviceactionexecutionparameters-parameters">Parameters</h3>

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
|body|body|[DescribeServiceActionExecutionParametersInput](#schemadescribeserviceactionexecutionparametersinput)|true|none|
|» ProvisionedProductId|body|object|true|none|
|» ServiceActionId|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeServiceActionExecutionParameters|

> Example responses

> 200 Response

```json
{
  "ServiceActionParameters": {}
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

<h3 id="describeserviceactionexecutionparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceActionExecutionParametersOutput](#schemadescribeserviceactionexecutionparametersoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTagOption

<a id="opIdDescribeTagOption"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DescribeTagOption' \
  -d '{
    "Id": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DescribeTagOption`

Gets information about the specified TagOption.

> Body parameter

```json
{
  "Id": {}
}
```

<h3 id="describetagoption-parameters">Parameters</h3>

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
|body|body|[DescribeTagOptionInput](#schemadescribetagoptioninput)|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DescribeTagOption|

> Example responses

> 200 Response

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
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

<h3 id="describetagoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTagOptionOutput](#schemadescribetagoptionoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableAWSOrganizationsAccess

<a id="opIdDisableAWSOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisableAWSOrganizationsAccess' \
  -d '{}'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisableAWSOrganizationsAccess`

<p>Disable portfolio sharing through the Organizations service. This command will not delete your current shares, but prevents you from creating new shares throughout your organization. Current shares are not kept in sync with your organization structure if the structure changes after calling this API. Only the management account in the organization can call this API.</p> <p>You cannot call this API if there are active delegated administrators in the organization.</p> <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p> <important> <p>If you share an Service Catalog portfolio in an organization within Organizations, and then disable Organizations access for Service Catalog, the portfolio access permissions will not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access will retain access to the previously shared portfolio.</p> </important>

> Body parameter

```json
{}
```

<h3 id="disableawsorganizationsaccess-parameters">Parameters</h3>

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
|body|body|[DisableAWSOrganizationsAccessInput](#schemadisableawsorganizationsaccessinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisableAWSOrganizationsAccess|

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

<h3 id="disableawsorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableAWSOrganizationsAccessOutput](#schemadisableawsorganizationsaccessoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateBudgetFromResource

<a id="opIdDisassociateBudgetFromResource"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisassociateBudgetFromResource' \
  -d '{
    "BudgetName": {},
    "ResourceId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateBudgetFromResource`

Disassociates the specified budget from the specified resource.

> Body parameter

```json
{
  "BudgetName": {},
  "ResourceId": {}
}
```

<h3 id="disassociatebudgetfromresource-parameters">Parameters</h3>

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
|body|body|[DisassociateBudgetFromResourceInput](#schemadisassociatebudgetfromresourceinput)|true|none|
|» BudgetName|body|object|true|none|
|» ResourceId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisassociateBudgetFromResource|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="disassociatebudgetfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateBudgetFromResourceOutput](#schemadisassociatebudgetfromresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociatePrincipalFromPortfolio

<a id="opIdDisassociatePrincipalFromPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "PrincipalARN": {},
    "PrincipalType": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio`

<p>Disassociates a previously associated principal ARN from a specified portfolio.</p> <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the <code>AssociatePrincipalWithPortfolio</code> call request details. For example, to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code> IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p> <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. </p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PrincipalARN": {},
  "PrincipalType": {}
}
```

<h3 id="disassociateprincipalfromportfolio-parameters">Parameters</h3>

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
|body|body|[DisassociatePrincipalFromPortfolioInput](#schemadisassociateprincipalfromportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» PrincipalARN|body|object|true|none|
|» PrincipalType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisassociatePrincipalFromPortfolio|

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

<h3 id="disassociateprincipalfromportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociatePrincipalFromPortfolioOutput](#schemadisassociateprincipalfromportfoliooutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateProductFromPortfolio

<a id="opIdDisassociateProductFromPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisassociateProductFromPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "PortfolioId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateProductFromPortfolio`

<p>Disassociates the specified product from the specified portfolio. </p> <p>A delegated admin is authorized to invoke this command.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PortfolioId": {}
}
```

<h3 id="disassociateproductfromportfolio-parameters">Parameters</h3>

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
|body|body|[DisassociateProductFromPortfolioInput](#schemadisassociateproductfromportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» PortfolioId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisassociateProductFromPortfolio|

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

<h3 id="disassociateproductfromportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateProductFromPortfolioOutput](#schemadisassociateproductfromportfoliooutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateServiceActionFromProvisioningArtifact

<a id="opIdDisassociateServiceActionFromProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact' \
  -d '{
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "ServiceActionId": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact`

Disassociates the specified self-service action association from the specified provisioning artifact.

> Body parameter

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

<h3 id="disassociateserviceactionfromprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[DisassociateServiceActionFromProvisioningArtifactInput](#schemadisassociateserviceactionfromprovisioningartifactinput)|true|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» ServiceActionId|body|object|true|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="disassociateserviceactionfromprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateServiceActionFromProvisioningArtifactOutput](#schemadisassociateserviceactionfromprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateTagOptionFromResource

<a id="opIdDisassociateTagOptionFromResource"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.DisassociateTagOptionFromResource' \
  -d '{
    "ResourceId": {},
    "TagOptionId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.DisassociateTagOptionFromResource`

Disassociates the specified TagOption from the specified resource.

> Body parameter

```json
{
  "ResourceId": {},
  "TagOptionId": {}
}
```

<h3 id="disassociatetagoptionfromresource-parameters">Parameters</h3>

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
|body|body|[DisassociateTagOptionFromResourceInput](#schemadisassociatetagoptionfromresourceinput)|true|none|
|» ResourceId|body|object|true|none|
|» TagOptionId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.DisassociateTagOptionFromResource|

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

<h3 id="disassociatetagoptionfromresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateTagOptionFromResourceOutput](#schemadisassociatetagoptionfromresourceoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableAWSOrganizationsAccess

<a id="opIdEnableAWSOrganizationsAccess"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.EnableAWSOrganizationsAccess' \
  -d '{}'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.EnableAWSOrganizationsAccess`

<p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.</p> <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p> <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p> <important> <p>If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.</p> </important>

> Body parameter

```json
{}
```

<h3 id="enableawsorganizationsaccess-parameters">Parameters</h3>

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
|body|body|[EnableAWSOrganizationsAccessInput](#schemaenableawsorganizationsaccessinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.EnableAWSOrganizationsAccess|

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

<h3 id="enableawsorganizationsaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableAWSOrganizationsAccessOutput](#schemaenableawsorganizationsaccessoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteProvisionedProductPlan

<a id="opIdExecuteProvisionedProductPlan"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ExecuteProvisionedProductPlan' \
  -d '{
    "AcceptLanguage": {},
    "PlanId": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductPlan`

Provisions or modifies a product based on the resource changes for the specified plan.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "IdempotencyToken": {}
}
```

<h3 id="executeprovisionedproductplan-parameters">Parameters</h3>

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
|body|body|[ExecuteProvisionedProductPlanInput](#schemaexecuteprovisionedproductplaninput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PlanId|body|object|true|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ExecuteProvisionedProductPlan|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
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

<h3 id="executeprovisionedproductplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteProvisionedProductPlanOutput](#schemaexecuteprovisionedproductplanoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ExecuteProvisionedProductServiceAction

<a id="opIdExecuteProvisionedProductServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction' \
  -d '{
    "ProvisionedProductId": {},
    "ServiceActionId": {},
    "ExecuteToken": {},
    "AcceptLanguage": {},
    "Parameters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction`

Executes a self-service action against a provisioned product.

> Body parameter

```json
{
  "ProvisionedProductId": {},
  "ServiceActionId": {},
  "ExecuteToken": {},
  "AcceptLanguage": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="executeprovisionedproductserviceaction-parameters">Parameters</h3>

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
|body|body|[ExecuteProvisionedProductServiceActionInput](#schemaexecuteprovisionedproductserviceactioninput)|true|none|
|» ProvisionedProductId|body|object|true|none|
|» ServiceActionId|body|object|true|none|
|» ExecuteToken|body|object|true|none|
|» AcceptLanguage|body|object|false|none|
|» Parameters|body|object|false|none|
|» » **additionalProperties**|body|[ExecutionParameterValueList](#schemaexecutionparametervaluelist)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
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

<h3 id="executeprovisionedproductserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ExecuteProvisionedProductServiceActionOutput](#schemaexecuteprovisionedproductserviceactionoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAWSOrganizationsAccessStatus

<a id="opIdGetAWSOrganizationsAccessStatus"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus' \
  -d '{}'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus`

Get the Access Status for Organizations portfolio share feature. This API can only be called by the management account in the organization or by a delegated admin.

> Body parameter

```json
{}
```

<h3 id="getawsorganizationsaccessstatus-parameters">Parameters</h3>

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
|body|body|[GetAWSOrganizationsAccessStatusInput](#schemagetawsorganizationsaccessstatusinput)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus|

> Example responses

> 200 Response

```json
{
  "AccessStatus": {}
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

<h3 id="getawsorganizationsaccessstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAWSOrganizationsAccessStatusOutput](#schemagetawsorganizationsaccessstatusoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetProvisionedProductOutputs

<a id="opIdGetProvisionedProductOutputs"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.GetProvisionedProductOutputs' \
  -d '{
    "AcceptLanguage": {},
    "ProvisionedProductId": {},
    "ProvisionedProductName": {},
    "OutputKeys": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.GetProvisionedProductOutputs`

This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "ProvisionedProductName": {},
  "OutputKeys": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="getprovisionedproductoutputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetProvisionedProductOutputsInput](#schemagetprovisionedproductoutputsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisionedProductId|body|object|false|none|
|» ProvisionedProductName|body|object|false|none|
|» OutputKeys|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.GetProvisionedProductOutputs|

> Example responses

> 200 Response

```json
{
  "Outputs": {},
  "NextPageToken": {}
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

<h3 id="getprovisionedproductoutputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetProvisionedProductOutputsOutput](#schemagetprovisionedproductoutputsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportAsProvisionedProduct

<a id="opIdImportAsProvisionedProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ImportAsProvisionedProduct' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "ProvisionedProductName": {},
    "PhysicalId": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ImportAsProvisionedProduct`

<p> Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. </p> <p> Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks are not supported. </p> <p> The CloudFormation stack must have one of the following statuses to be imported: <code>CREATE_COMPLETE</code>, <code>UPDATE_COMPLETE</code>, <code>UPDATE_ROLLBACK_COMPLETE</code>, <code>IMPORT_COMPLETE</code>, and <code>IMPORT_ROLLBACK_COMPLETE</code>. </p> <p> Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. </p> <note> <p> When you import an existing CloudFormation stack into a portfolio, constraints that are associated with the product aren't applied during the import process. The constraints are applied after you call <code>UpdateProvisionedProduct</code> for the provisioned product. </p> </note> <p> The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code> and <code>cloudformation:DescribeStacks</code> IAM policy permissions. </p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ProvisionedProductName": {},
  "PhysicalId": {},
  "IdempotencyToken": {}
}
```

<h3 id="importasprovisionedproduct-parameters">Parameters</h3>

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
|body|body|[ImportAsProvisionedProductInput](#schemaimportasprovisionedproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» ProvisionedProductName|body|object|true|none|
|» PhysicalId|body|object|true|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ImportAsProvisionedProduct|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
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

<h3 id="importasprovisionedproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportAsProvisionedProductOutput](#schemaimportasprovisionedproductoutput)|
|480|480|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAcceptedPortfolioShares

<a id="opIdListAcceptedPortfolioShares"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListAcceptedPortfolioShares' \
  -d '{
    "AcceptLanguage": {},
    "PageToken": {},
    "PageSize": {},
    "PortfolioShareType": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListAcceptedPortfolioShares`

Lists all imported portfolios for which account-to-account shares were accepted by this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which organizational shares were accepted by this account.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PageToken": {},
  "PageSize": {},
  "PortfolioShareType": {}
}
```

<h3 id="listacceptedportfolioshares-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListAcceptedPortfolioSharesInput](#schemalistacceptedportfoliosharesinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|
|» PortfolioShareType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListAcceptedPortfolioShares|

> Example responses

> 200 Response

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
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

<h3 id="listacceptedportfolioshares-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAcceptedPortfolioSharesOutput](#schemalistacceptedportfoliosharesoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListBudgetsForResource

<a id="opIdListBudgetsForResource"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListBudgetsForResource' \
  -d '{
    "AcceptLanguage": {},
    "ResourceId": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListBudgetsForResource`

Lists all the budgets associated to the specified resource.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ResourceId": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listbudgetsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListBudgetsForResourceInput](#schemalistbudgetsforresourceinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ResourceId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListBudgetsForResource|

> Example responses

> 200 Response

```json
{
  "Budgets": {},
  "NextPageToken": {}
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

<h3 id="listbudgetsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListBudgetsForResourceOutput](#schemalistbudgetsforresourceoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConstraintsForPortfolio

<a id="opIdListConstraintsForPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListConstraintsForPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "ProductId": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListConstraintsForPortfolio`

Lists the constraints for the specified portfolio and product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "ProductId": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listconstraintsforportfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListConstraintsForPortfolioInput](#schemalistconstraintsforportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» ProductId|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListConstraintsForPortfolio|

> Example responses

> 200 Response

```json
{
  "ConstraintDetails": {},
  "NextPageToken": {}
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

<h3 id="listconstraintsforportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConstraintsForPortfolioOutput](#schemalistconstraintsforportfoliooutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListLaunchPaths

<a id="opIdListLaunchPaths"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListLaunchPaths' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListLaunchPaths`

<p> Lists the paths to the specified product. A path describes how the user gets access to a specified product and is necessary when provisioning a product. A path also determines the constraints that are put on a product. A path is dependent on a specific product, porfolio, and principal. </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listlaunchpaths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListLaunchPathsInput](#schemalistlaunchpathsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListLaunchPaths|

> Example responses

> 200 Response

```json
{
  "LaunchPathSummaries": {},
  "NextPageToken": {}
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

<h3 id="listlaunchpaths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListLaunchPathsOutput](#schemalistlaunchpathsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOrganizationPortfolioAccess

<a id="opIdListOrganizationPortfolioAccess"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListOrganizationPortfolioAccess' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "OrganizationNodeType": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListOrganizationPortfolioAccess`

<p>Lists the organization nodes that have access to the specified portfolio. This API can only be called by the management account in the organization or by a delegated admin.</p> <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "OrganizationNodeType": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="listorganizationportfolioaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOrganizationPortfolioAccessInput](#schemalistorganizationportfolioaccessinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» OrganizationNodeType|body|object|true|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListOrganizationPortfolioAccess|

> Example responses

> 200 Response

```json
{
  "OrganizationNodes": {},
  "NextPageToken": {}
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

<h3 id="listorganizationportfolioaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOrganizationPortfolioAccessOutput](#schemalistorganizationportfolioaccessoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPortfolioAccess

<a id="opIdListPortfolioAccess"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListPortfolioAccess' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "OrganizationParentId": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolioAccess`

<p>Lists the account IDs that have access to the specified portfolio.</p> <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "OrganizationParentId": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="listportfolioaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPortfolioAccessInput](#schemalistportfolioaccessinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» OrganizationParentId|body|object|false|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListPortfolioAccess|

> Example responses

> 200 Response

```json
{
  "AccountIds": {},
  "NextPageToken": {}
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

<h3 id="listportfolioaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPortfolioAccessOutput](#schemalistportfolioaccessoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPortfolios

<a id="opIdListPortfolios"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListPortfolios' \
  -d '{
    "AcceptLanguage": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfolios`

Lists all portfolios in the catalog.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="listportfolios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPortfoliosInput](#schemalistportfoliosinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListPortfolios|

> Example responses

> 200 Response

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listportfolios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPortfoliosOutput](#schemalistportfoliosoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPortfoliosForProduct

<a id="opIdListPortfoliosForProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListPortfoliosForProduct' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListPortfoliosForProduct`

Lists all portfolios that the specified product is associated with.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="listportfoliosforproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPortfoliosForProductInput](#schemalistportfoliosforproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListPortfoliosForProduct|

> Example responses

> 200 Response

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
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

<h3 id="listportfoliosforproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPortfoliosForProductOutput](#schemalistportfoliosforproductoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPrincipalsForPortfolio

<a id="opIdListPrincipalsForPortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListPrincipalsForPortfolio' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListPrincipalsForPortfolio`

Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listprincipalsforportfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPrincipalsForPortfolioInput](#schemalistprincipalsforportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListPrincipalsForPortfolio|

> Example responses

> 200 Response

```json
{
  "Principals": {},
  "NextPageToken": {}
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

<h3 id="listprincipalsforportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPrincipalsForPortfolioOutput](#schemalistprincipalsforportfoliooutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProvisionedProductPlans

<a id="opIdListProvisionedProductPlans"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListProvisionedProductPlans' \
  -d '{
    "AcceptLanguage": {},
    "ProvisionProductId": {},
    "PageSize": {},
    "PageToken": {},
    "AccessLevelFilter": {
      "Key": {},
      "Value": {}
    }
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisionedProductPlans`

Lists the plans for the specified provisioned product or all plans to which the user has access.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisionProductId": {},
  "PageSize": {},
  "PageToken": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  }
}
```

<h3 id="listprovisionedproductplans-parameters">Parameters</h3>

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
|body|body|[ListProvisionedProductPlansInput](#schemalistprovisionedproductplansinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisionProductId|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|
|» AccessLevelFilter|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListProvisionedProductPlans|

> Example responses

> 200 Response

```json
{
  "ProvisionedProductPlans": {},
  "NextPageToken": {}
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

<h3 id="listprovisionedproductplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProvisionedProductPlansOutput](#schemalistprovisionedproductplansoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProvisioningArtifacts

<a id="opIdListProvisioningArtifacts"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListProvisioningArtifacts' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifacts`

Lists all provisioning artifacts (also known as versions) for the specified product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {}
}
```

<h3 id="listprovisioningartifacts-parameters">Parameters</h3>

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
|body|body|[ListProvisioningArtifactsInput](#schemalistprovisioningartifactsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListProvisioningArtifacts|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactDetails": {},
  "NextPageToken": {}
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

<h3 id="listprovisioningartifacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProvisioningArtifactsOutput](#schemalistprovisioningartifactsoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListProvisioningArtifactsForServiceAction

<a id="opIdListProvisioningArtifactsForServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction' \
  -d '{
    "ServiceActionId": {},
    "PageSize": {},
    "PageToken": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction`

Lists all provisioning artifacts (also known as versions) for the specified self-service action.

> Body parameter

```json
{
  "ServiceActionId": {},
  "PageSize": {},
  "PageToken": {},
  "AcceptLanguage": {}
}
```

<h3 id="listprovisioningartifactsforserviceaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListProvisioningArtifactsForServiceActionInput](#schemalistprovisioningartifactsforserviceactioninput)|true|none|
|» ServiceActionId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactViews": {},
  "NextPageToken": {}
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

<h3 id="listprovisioningartifactsforserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListProvisioningArtifactsForServiceActionOutput](#schemalistprovisioningartifactsforserviceactionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRecordHistory

<a id="opIdListRecordHistory"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListRecordHistory' \
  -d '{
    "AcceptLanguage": {},
    "AccessLevelFilter": {
      "Key": {},
      "Value": {}
    },
    "SearchFilter": {
      "Key": {},
      "Value": {}
    },
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListRecordHistory`

Lists the specified requests or all performed requests.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "SearchFilter": {
    "Key": {},
    "Value": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listrecordhistory-parameters">Parameters</h3>

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
|body|body|[ListRecordHistoryInput](#schemalistrecordhistoryinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» AccessLevelFilter|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» SearchFilter|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListRecordHistory|

> Example responses

> 200 Response

```json
{
  "RecordDetails": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listrecordhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRecordHistoryOutput](#schemalistrecordhistoryoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourcesForTagOption

<a id="opIdListResourcesForTagOption"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListResourcesForTagOption' \
  -d '{
    "TagOptionId": {},
    "ResourceType": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListResourcesForTagOption`

Lists the resources associated with the specified TagOption.

> Body parameter

```json
{
  "TagOptionId": {},
  "ResourceType": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listresourcesfortagoption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListResourcesForTagOptionInput](#schemalistresourcesfortagoptioninput)|true|none|
|» TagOptionId|body|object|true|none|
|» ResourceType|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListResourcesForTagOption|

> Example responses

> 200 Response

```json
{
  "ResourceDetails": {},
  "PageToken": {}
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

<h3 id="listresourcesfortagoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourcesForTagOptionOutput](#schemalistresourcesfortagoptionoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceActions

<a id="opIdListServiceActions"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListServiceActions' \
  -d '{
    "AcceptLanguage": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActions`

Lists all self-service actions.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listserviceactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceActionsInput](#schemalistserviceactionsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListServiceActions|

> Example responses

> 200 Response

```json
{
  "ServiceActionSummaries": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listserviceactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceActionsOutput](#schemalistserviceactionsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServiceActionsForProvisioningArtifact

<a id="opIdListServiceActionsForProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact' \
  -d '{
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PageSize": {},
    "PageToken": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact`

Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.

> Body parameter

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "PageSize": {},
  "PageToken": {},
  "AcceptLanguage": {}
}
```

<h3 id="listserviceactionsforprovisioningartifact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListServiceActionsForProvisioningArtifactInput](#schemalistserviceactionsforprovisioningartifactinput)|true|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "ServiceActionSummaries": {},
  "NextPageToken": {}
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

<h3 id="listserviceactionsforprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServiceActionsForProvisioningArtifactOutput](#schemalistserviceactionsforprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStackInstancesForProvisionedProduct

<a id="opIdListStackInstancesForProvisionedProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct' \
  -d '{
    "AcceptLanguage": {},
    "ProvisionedProductId": {},
    "PageToken": {},
    "PageSize": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct`

Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. 

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "PageToken": {},
  "PageSize": {}
}
```

<h3 id="liststackinstancesforprovisionedproduct-parameters">Parameters</h3>

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
|body|body|[ListStackInstancesForProvisionedProductInput](#schemaliststackinstancesforprovisionedproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisionedProductId|body|object|true|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListStackInstancesForProvisionedProduct|

> Example responses

> 200 Response

```json
{
  "StackInstances": {},
  "NextPageToken": {}
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

<h3 id="liststackinstancesforprovisionedproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStackInstancesForProvisionedProductOutput](#schemaliststackinstancesforprovisionedproductoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagOptions

<a id="opIdListTagOptions"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ListTagOptions' \
  -d '{
    "Filters": {
      "Key": {},
      "Value": {},
      "Active": {}
    },
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ListTagOptions`

Lists the specified TagOptions or all TagOptions.

> Body parameter

```json
{
  "Filters": {
    "Key": {},
    "Value": {},
    "Active": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="listtagoptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListTagOptionsInput](#schemalisttagoptionsinput)|true|none|
|» Filters|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» » Active|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ListTagOptions|

> Example responses

> 200 Response

```json
{
  "TagOptionDetails": {},
  "PageToken": {}
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

<h3 id="listtagoptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagOptionsOutput](#schemalisttagoptionsoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyProvisionProductEngineWorkflowResult

<a id="opIdNotifyProvisionProductEngineWorkflowResult"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult' \
  -d '{
    "WorkflowToken": {},
    "RecordId": {},
    "Status": {},
    "FailureReason": {},
    "ResourceIdentifier": {
      "UniqueTag": {
        "Key": {},
        "Value": {}
      }
    },
    "Outputs": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult`

 Notifies the result of the provisioning engine execution. 

> Body parameter

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "ResourceIdentifier": {
    "UniqueTag": {
      "Key": {},
      "Value": {}
    }
  },
  "Outputs": {},
  "IdempotencyToken": {}
}
```

<h3 id="notifyprovisionproductengineworkflowresult-parameters">Parameters</h3>

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
|body|body|[NotifyProvisionProductEngineWorkflowResultInput](#schemanotifyprovisionproductengineworkflowresultinput)|true|none|
|» WorkflowToken|body|object|true|none|
|» RecordId|body|object|true|none|
|» Status|body|object|true|none|
|» FailureReason|body|object|false|none|
|» ResourceIdentifier|body|object|false|none|
|» » UniqueTag|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » Value|body|object|false|none|
|» Outputs|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.NotifyProvisionProductEngineWorkflowResult|

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

<h3 id="notifyprovisionproductengineworkflowresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyProvisionProductEngineWorkflowResultOutput](#schemanotifyprovisionproductengineworkflowresultoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyTerminateProvisionedProductEngineWorkflowResult

<a id="opIdNotifyTerminateProvisionedProductEngineWorkflowResult"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult' \
  -d '{
    "WorkflowToken": {},
    "RecordId": {},
    "Status": {},
    "FailureReason": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult`

 Notifies the result of the terminate engine execution. 

> Body parameter

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "IdempotencyToken": {}
}
```

<h3 id="notifyterminateprovisionedproductengineworkflowresult-parameters">Parameters</h3>

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
|body|body|[NotifyTerminateProvisionedProductEngineWorkflowResultInput](#schemanotifyterminateprovisionedproductengineworkflowresultinput)|true|none|
|» WorkflowToken|body|object|true|none|
|» RecordId|body|object|true|none|
|» Status|body|object|true|none|
|» FailureReason|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.NotifyTerminateProvisionedProductEngineWorkflowResult|

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

<h3 id="notifyterminateprovisionedproductengineworkflowresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyTerminateProvisionedProductEngineWorkflowResultOutput](#schemanotifyterminateprovisionedproductengineworkflowresultoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## NotifyUpdateProvisionedProductEngineWorkflowResult

<a id="opIdNotifyUpdateProvisionedProductEngineWorkflowResult"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult' \
  -d '{
    "WorkflowToken": {},
    "RecordId": {},
    "Status": {},
    "FailureReason": {},
    "Outputs": {},
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult`

 Notifies the result of the update engine execution. 

> Body parameter

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "Outputs": {},
  "IdempotencyToken": {}
}
```

<h3 id="notifyupdateprovisionedproductengineworkflowresult-parameters">Parameters</h3>

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
|body|body|[NotifyUpdateProvisionedProductEngineWorkflowResultInput](#schemanotifyupdateprovisionedproductengineworkflowresultinput)|true|none|
|» WorkflowToken|body|object|true|none|
|» RecordId|body|object|true|none|
|» Status|body|object|true|none|
|» FailureReason|body|object|false|none|
|» Outputs|body|object|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.NotifyUpdateProvisionedProductEngineWorkflowResult|

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

<h3 id="notifyupdateprovisionedproductengineworkflowresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotifyUpdateProvisionedProductEngineWorkflowResultOutput](#schemanotifyupdateprovisionedproductengineworkflowresultoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ProvisionProduct

<a id="opIdProvisionProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ProvisionProduct' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "ProductName": {},
    "ProvisioningArtifactId": {},
    "ProvisioningArtifactName": {},
    "PathId": {},
    "PathName": {},
    "ProvisionedProductName": {},
    "ProvisioningParameters": {},
    "ProvisioningPreferences": {
      "StackSetAccounts": {},
      "StackSetRegions": {},
      "StackSetFailureToleranceCount": {},
      "StackSetFailureTolerancePercentage": {},
      "StackSetMaxConcurrencyCount": {},
      "StackSetMaxConcurrencyPercentage": {}
    },
    "Tags": {},
    "NotificationArns": {},
    "ProvisionToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ProvisionProduct`

<p> Provisions the specified product. </p> <p> A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using <a>DescribeRecord</a>. </p> <p> If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>". </p> <note> <p> When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a> in the <i>Service Catalog User Guide</i>. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {},
  "ProvisionedProductName": {},
  "ProvisioningParameters": {},
  "ProvisioningPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {},
    "StackSetFailureToleranceCount": {},
    "StackSetFailureTolerancePercentage": {},
    "StackSetMaxConcurrencyCount": {},
    "StackSetMaxConcurrencyPercentage": {}
  },
  "Tags": {},
  "NotificationArns": {},
  "ProvisionToken": {}
}
```

<h3 id="provisionproduct-parameters">Parameters</h3>

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
|body|body|[ProvisionProductInput](#schemaprovisionproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|false|none|
|» ProductName|body|object|false|none|
|» ProvisioningArtifactId|body|object|false|none|
|» ProvisioningArtifactName|body|object|false|none|
|» PathId|body|object|false|none|
|» PathName|body|object|false|none|
|» ProvisionedProductName|body|object|true|none|
|» ProvisioningParameters|body|object|false|none|
|» ProvisioningPreferences|body|object|false|none|
|» » StackSetAccounts|body|object|false|none|
|» » StackSetRegions|body|object|false|none|
|» » StackSetFailureToleranceCount|body|object|false|none|
|» » StackSetFailureTolerancePercentage|body|object|false|none|
|» » StackSetMaxConcurrencyCount|body|object|false|none|
|» » StackSetMaxConcurrencyPercentage|body|object|false|none|
|» Tags|body|object|false|none|
|» NotificationArns|body|object|false|none|
|» ProvisionToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ProvisionProduct|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
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

<h3 id="provisionproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProvisionProductOutput](#schemaprovisionproductoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectPortfolioShare

<a id="opIdRejectPortfolioShare"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.RejectPortfolioShare' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "PortfolioShareType": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.RejectPortfolioShare`

Rejects an offer to share the specified portfolio.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PortfolioShareType": {}
}
```

<h3 id="rejectportfolioshare-parameters">Parameters</h3>

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
|body|body|[RejectPortfolioShareInput](#schemarejectportfolioshareinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» PortfolioShareType|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.RejectPortfolioShare|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

<h3 id="rejectportfolioshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectPortfolioShareOutput](#schemarejectportfolioshareoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ScanProvisionedProducts

<a id="opIdScanProvisionedProducts"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.ScanProvisionedProducts' \
  -d '{
    "AcceptLanguage": {},
    "AccessLevelFilter": {
      "Key": {},
      "Value": {}
    },
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.ScanProvisionedProducts`

<p>Lists the provisioned products that are available (not terminated).</p> <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="scanprovisionedproducts-parameters">Parameters</h3>

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
|body|body|[ScanProvisionedProductsInput](#schemascanprovisionedproductsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» AccessLevelFilter|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.ScanProvisionedProducts|

> Example responses

> 200 Response

```json
{
  "ProvisionedProducts": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="scanprovisionedproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ScanProvisionedProductsOutput](#schemascanprovisionedproductsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchProducts

<a id="opIdSearchProducts"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.SearchProducts' \
  -d '{
    "AcceptLanguage": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "PageSize": {},
    "SortBy": {},
    "SortOrder": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.SearchProducts`

Gets information about the products to which the caller has access.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "PageSize": {},
  "SortBy": {},
  "SortOrder": {},
  "PageToken": {}
}
```

<h3 id="searchproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SearchProductsInput](#schemasearchproductsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Filters|body|object|false|none|
|» » **additionalProperties**|body|[ProductViewFilterValues](#schemaproductviewfiltervalues)|false|none|
|» PageSize|body|object|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.SearchProducts|

> Example responses

> 200 Response

```json
{
  "ProductViewSummaries": {},
  "ProductViewAggregations": {
    "property1": [
      {
        "Value": {},
        "ApproximateCount": {}
      }
    ],
    "property2": [
      {
        "Value": {},
        "ApproximateCount": {}
      }
    ]
  },
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="searchproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchProductsOutput](#schemasearchproductsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchProductsAsAdmin

<a id="opIdSearchProductsAsAdmin"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.SearchProductsAsAdmin' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "SortBy": {},
    "SortOrder": {},
    "PageToken": {},
    "PageSize": {},
    "ProductSource": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.SearchProductsAsAdmin`

Gets information about the products for the specified portfolio or all products.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortBy": {},
  "SortOrder": {},
  "PageToken": {},
  "PageSize": {},
  "ProductSource": {}
}
```

<h3 id="searchproductsasadmin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SearchProductsAsAdminInput](#schemasearchproductsasadmininput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|false|none|
|» Filters|body|object|false|none|
|» » **additionalProperties**|body|[ProductViewFilterValues](#schemaproductviewfiltervalues)|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|
|» PageToken|body|object|false|none|
|» PageSize|body|object|false|none|
|» ProductSource|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.SearchProductsAsAdmin|

> Example responses

> 200 Response

```json
{
  "ProductViewDetails": {},
  "NextPageToken": {}
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

<h3 id="searchproductsasadmin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchProductsAsAdminOutput](#schemasearchproductsasadminoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchProvisionedProducts

<a id="opIdSearchProvisionedProducts"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.SearchProvisionedProducts' \
  -d '{
    "AcceptLanguage": {},
    "AccessLevelFilter": {
      "Key": {},
      "Value": {}
    },
    "Filters": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "SortBy": {},
    "SortOrder": {},
    "PageSize": {},
    "PageToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.SearchProvisionedProducts`

Gets information about the provisioned products that meet the specified criteria.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortBy": {},
  "SortOrder": {},
  "PageSize": {},
  "PageToken": {}
}
```

<h3 id="searchprovisionedproducts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageSize|query|string|false|Pagination limit|
|PageToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[SearchProvisionedProductsInput](#schemasearchprovisionedproductsinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» AccessLevelFilter|body|object|false|none|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» Filters|body|object|false|none|
|» » **additionalProperties**|body|[ProvisionedProductViewFilterValues](#schemaprovisionedproductviewfiltervalues)|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|
|» PageSize|body|object|false|none|
|» PageToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.SearchProvisionedProducts|

> Example responses

> 200 Response

```json
{
  "ProvisionedProducts": {},
  "TotalResultsCount": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="searchprovisionedproducts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchProvisionedProductsOutput](#schemasearchprovisionedproductsoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TerminateProvisionedProduct

<a id="opIdTerminateProvisionedProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.TerminateProvisionedProduct' \
  -d '{
    "ProvisionedProductName": {},
    "ProvisionedProductId": {},
    "TerminateToken": {},
    "IgnoreErrors": {},
    "AcceptLanguage": {},
    "RetainPhysicalResources": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.TerminateProvisionedProduct`

<p>Terminates the specified provisioned product.</p> <p>This operation does not delete any records associated with the provisioned product.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

> Body parameter

```json
{
  "ProvisionedProductName": {},
  "ProvisionedProductId": {},
  "TerminateToken": {},
  "IgnoreErrors": {},
  "AcceptLanguage": {},
  "RetainPhysicalResources": {}
}
```

<h3 id="terminateprovisionedproduct-parameters">Parameters</h3>

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
|body|body|[TerminateProvisionedProductInput](#schematerminateprovisionedproductinput)|true|none|
|» ProvisionedProductName|body|object|false|none|
|» ProvisionedProductId|body|object|false|none|
|» TerminateToken|body|object|true|none|
|» IgnoreErrors|body|object|false|none|
|» AcceptLanguage|body|object|false|none|
|» RetainPhysicalResources|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.TerminateProvisionedProduct|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

> 480 Response

```json
null
```

<h3 id="terminateprovisionedproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TerminateProvisionedProductOutput](#schematerminateprovisionedproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConstraint

<a id="opIdUpdateConstraint"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateConstraint' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "Description": {},
    "Parameters": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateConstraint`

Updates the specified constraint.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Description": {},
  "Parameters": {}
}
```

<h3 id="updateconstraint-parameters">Parameters</h3>

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
|body|body|[UpdateConstraintInput](#schemaupdateconstraintinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|
|» Description|body|object|false|none|
|» Parameters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateConstraint|

> Example responses

> 200 Response

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
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

<h3 id="updateconstraint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConstraintOutput](#schemaupdateconstraintoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePortfolio

<a id="opIdUpdatePortfolio"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdatePortfolio' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "DisplayName": {},
    "Description": {},
    "ProviderName": {},
    "AddTags": {},
    "RemoveTags": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolio`

<p>Updates the specified portfolio.</p> <p>You cannot update a product that was shared with you.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "DisplayName": {},
  "Description": {},
  "ProviderName": {},
  "AddTags": {},
  "RemoveTags": {}
}
```

<h3 id="updateportfolio-parameters">Parameters</h3>

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
|body|body|[UpdatePortfolioInput](#schemaupdateportfolioinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|
|» DisplayName|body|object|false|none|
|» Description|body|object|false|none|
|» ProviderName|body|object|false|none|
|» AddTags|body|object|false|none|
|» RemoveTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdatePortfolio|

> Example responses

> 200 Response

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
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

<h3 id="updateportfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePortfolioOutput](#schemaupdateportfoliooutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePortfolioShare

<a id="opIdUpdatePortfolioShare"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdatePortfolioShare' \
  -d '{
    "AcceptLanguage": {},
    "PortfolioId": {},
    "AccountId": {},
    "OrganizationNode": {
      "Type": {},
      "Value": {}
    },
    "ShareTagOptions": {},
    "SharePrincipals": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdatePortfolioShare`

<p>Updates the specified portfolio share. You can use this API to enable or disable <code>TagOptions</code> sharing or Principal sharing for an existing portfolio share. </p> <p>The portfolio share cannot be updated if the <code>CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p> <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p> <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p> <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p> <note> <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration, the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p> </note>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  },
  "ShareTagOptions": {},
  "SharePrincipals": {}
}
```

<h3 id="updateportfolioshare-parameters">Parameters</h3>

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
|body|body|[UpdatePortfolioShareInput](#schemaupdateportfolioshareinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» PortfolioId|body|object|true|none|
|» AccountId|body|object|false|none|
|» OrganizationNode|body|[OrganizationNode](#schemaorganizationnode)|false|Information about the organization node.|
|» ShareTagOptions|body|object|false|none|
|» SharePrincipals|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdatePortfolioShare|

> Example responses

> 200 Response

```json
{
  "PortfolioShareToken": {},
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

<h3 id="updateportfolioshare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePortfolioShareOutput](#schemaupdateportfolioshareoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|OperationNotSupportedException|[OperationNotSupportedException](#schemaoperationnotsupportedexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProduct

<a id="opIdUpdateProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateProduct' \
  -d '{
    "AcceptLanguage": {},
    "Id": {},
    "Name": {},
    "Owner": {},
    "Description": {},
    "Distributor": {},
    "SupportDescription": {},
    "SupportEmail": {},
    "SupportUrl": {},
    "AddTags": {},
    "RemoveTags": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      }
    }
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProduct`

Updates the specified product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {},
  "Owner": {},
  "Description": {},
  "Distributor": {},
  "SupportDescription": {},
  "SupportEmail": {},
  "SupportUrl": {},
  "AddTags": {},
  "RemoveTags": {},
  "SourceConnection": {
    "Type": {},
    "ConnectionParameters": {
      "CodeStar": {
        "ConnectionArn": {},
        "Repository": {},
        "Branch": {},
        "ArtifactPath": {}
      }
    }
  }
}
```

<h3 id="updateproduct-parameters">Parameters</h3>

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
|body|body|[UpdateProductInput](#schemaupdateproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» Owner|body|object|false|none|
|» Description|body|object|false|none|
|» Distributor|body|object|false|none|
|» SupportDescription|body|object|false|none|
|» SupportEmail|body|object|false|none|
|» SupportUrl|body|object|false|none|
|» AddTags|body|object|false|none|
|» RemoveTags|body|object|false|none|
|» SourceConnection|body|object|false|none|
|» » Type|body|object|false|none|
|» » ConnectionParameters|body|object|true|none|
|» » » CodeStar|body|object|false|none|
|» » » » ConnectionArn|body|object|true|none|
|» » » » Repository|body|object|true|none|
|» » » » Branch|body|object|true|none|
|» » » » ArtifactPath|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateProduct|

> Example responses

> 200 Response

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
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

<h3 id="updateproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProductOutput](#schemaupdateproductoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|482|482|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProvisionedProduct

<a id="opIdUpdateProvisionedProduct"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateProvisionedProduct' \
  -d '{
    "AcceptLanguage": {},
    "ProvisionedProductName": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProductName": {},
    "ProvisioningArtifactId": {},
    "ProvisioningArtifactName": {},
    "PathId": {},
    "PathName": {},
    "ProvisioningParameters": {},
    "ProvisioningPreferences": {
      "StackSetAccounts": {},
      "StackSetRegions": {},
      "StackSetFailureToleranceCount": {},
      "StackSetFailureTolerancePercentage": {},
      "StackSetMaxConcurrencyCount": {},
      "StackSetMaxConcurrencyPercentage": {},
      "StackSetOperationType": {}
    },
    "Tags": {},
    "UpdateToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProduct`

<p>Requests updates to the configuration of the specified provisioned product.</p> <p>If there are tags associated with the object, they cannot be updated or added. Depending on the specific updates requested, this operation can update with no interruption, with some interruption, or replace the provisioned product entirely.</p> <p>You can check the status of this request using <a>DescribeRecord</a>.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductName": {},
  "ProvisionedProductId": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {},
  "ProvisioningParameters": {},
  "ProvisioningPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {},
    "StackSetFailureToleranceCount": {},
    "StackSetFailureTolerancePercentage": {},
    "StackSetMaxConcurrencyCount": {},
    "StackSetMaxConcurrencyPercentage": {},
    "StackSetOperationType": {}
  },
  "Tags": {},
  "UpdateToken": {}
}
```

<h3 id="updateprovisionedproduct-parameters">Parameters</h3>

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
|body|body|[UpdateProvisionedProductInput](#schemaupdateprovisionedproductinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisionedProductName|body|object|false|none|
|» ProvisionedProductId|body|object|false|none|
|» ProductId|body|object|false|none|
|» ProductName|body|object|false|none|
|» ProvisioningArtifactId|body|object|false|none|
|» ProvisioningArtifactName|body|object|false|none|
|» PathId|body|object|false|none|
|» PathName|body|object|false|none|
|» ProvisioningParameters|body|object|false|none|
|» ProvisioningPreferences|body|object|false|none|
|» » StackSetAccounts|body|object|false|none|
|» » StackSetRegions|body|object|false|none|
|» » StackSetFailureToleranceCount|body|object|false|none|
|» » StackSetFailureTolerancePercentage|body|object|false|none|
|» » StackSetMaxConcurrencyCount|body|object|false|none|
|» » StackSetMaxConcurrencyPercentage|body|object|false|none|
|» » StackSetOperationType|body|object|false|none|
|» Tags|body|object|false|none|
|» UpdateToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateProvisionedProduct|

> Example responses

> 200 Response

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
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

<h3 id="updateprovisionedproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProvisionedProductOutput](#schemaupdateprovisionedproductoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProvisionedProductProperties

<a id="opIdUpdateProvisionedProductProperties"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateProvisionedProductProperties' \
  -d '{
    "AcceptLanguage": {},
    "ProvisionedProductId": {},
    "ProvisionedProductProperties": {
      "property1": "string",
      "property2": "string"
    },
    "IdempotencyToken": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisionedProductProperties`

Requests updates to the properties of the specified provisioned product.

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "ProvisionedProductProperties": {
    "property1": "string",
    "property2": "string"
  },
  "IdempotencyToken": {}
}
```

<h3 id="updateprovisionedproductproperties-parameters">Parameters</h3>

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
|body|body|[UpdateProvisionedProductPropertiesInput](#schemaupdateprovisionedproductpropertiesinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProvisionedProductId|body|object|true|none|
|» ProvisionedProductProperties|body|object|true|none|
|» » **additionalProperties**|body|[PropertyValue](#schemapropertyvalue)|false|none|
|» IdempotencyToken|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateProvisionedProductProperties|

> Example responses

> 200 Response

```json
{
  "ProvisionedProductId": {},
  "ProvisionedProductProperties": {
    "property1": "string",
    "property2": "string"
  },
  "RecordId": {},
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

<h3 id="updateprovisionedproductproperties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProvisionedProductPropertiesOutput](#schemaupdateprovisionedproductpropertiesoutput)|
|480|480|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateProvisioningArtifact

<a id="opIdUpdateProvisioningArtifact"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateProvisioningArtifact' \
  -d '{
    "AcceptLanguage": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "Name": {},
    "Description": {},
    "Active": {},
    "Guidance": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateProvisioningArtifact`

<p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p> <p>You cannot update a provisioning artifact for a product that was shared with you.</p>

> Body parameter

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "Name": {},
  "Description": {},
  "Active": {},
  "Guidance": {}
}
```

<h3 id="updateprovisioningartifact-parameters">Parameters</h3>

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
|body|body|[UpdateProvisioningArtifactInput](#schemaupdateprovisioningartifactinput)|true|none|
|» AcceptLanguage|body|object|false|none|
|» ProductId|body|object|true|none|
|» ProvisioningArtifactId|body|object|true|none|
|» Name|body|object|false|none|
|» Description|body|object|false|none|
|» Active|body|object|false|none|
|» Guidance|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateProvisioningArtifact|

> Example responses

> 200 Response

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
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

<h3 id="updateprovisioningartifact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateProvisioningArtifactOutput](#schemaupdateprovisioningartifactoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateServiceAction

<a id="opIdUpdateServiceAction"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateServiceAction' \
  -d '{
    "Id": {},
    "Name": {},
    "Definition": {
      "property1": "string",
      "property2": "string"
    },
    "Description": {},
    "AcceptLanguage": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateServiceAction`

Updates a self-service action.

> Body parameter

```json
{
  "Id": {},
  "Name": {},
  "Definition": {
    "property1": "string",
    "property2": "string"
  },
  "Description": {},
  "AcceptLanguage": {}
}
```

<h3 id="updateserviceaction-parameters">Parameters</h3>

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
|body|body|[UpdateServiceActionInput](#schemaupdateserviceactioninput)|true|none|
|» Id|body|object|true|none|
|» Name|body|object|false|none|
|» Definition|body|object|false|none|
|» » **additionalProperties**|body|[ServiceActionDefinitionValue](#schemaserviceactiondefinitionvalue)|false|none|
|» Description|body|object|false|none|
|» AcceptLanguage|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateServiceAction|

> Example responses

> 200 Response

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
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

<h3 id="updateserviceaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceActionOutput](#schemaupdateserviceactionoutput)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTagOption

<a id="opIdUpdateTagOption"></a>

> Code samples

```bash
curl 'https://servicecatalog.us-east-1.amazonaws.com/#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AWS242ServiceCatalogService.UpdateTagOption' \
  -d '{
    "Id": {},
    "Value": {},
    "Active": {}
  }'
```

`POST /#X-Amz-Target=AWS242ServiceCatalogService.UpdateTagOption`

Updates the specified TagOption.

> Body parameter

```json
{
  "Id": {},
  "Value": {},
  "Active": {}
}
```

<h3 id="updatetagoption-parameters">Parameters</h3>

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
|body|body|[UpdateTagOptionInput](#schemaupdatetagoptioninput)|true|none|
|» Id|body|object|true|none|
|» Value|body|object|false|none|
|» Active|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AWS242ServiceCatalogService.UpdateTagOption|

> Example responses

> 200 Response

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
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

<h3 id="updatetagoption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTagOptionOutput](#schemaupdatetagoptionoutput)|
|480|480|TagOptionNotMigratedException|[TagOptionNotMigratedException](#schematagoptionnotmigratedexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|DuplicateResourceException|[DuplicateResourceException](#schemaduplicateresourceexception)|
|483|483|InvalidParametersException|[InvalidParametersException](#schemainvalidparametersexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptPortfolioShareOutput">AcceptPortfolioShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptportfolioshareoutput"></a>
<a id="schema_AcceptPortfolioShareOutput"></a>
<a id="tocSacceptportfolioshareoutput"></a>
<a id="tocsacceptportfolioshareoutput"></a>

```json
{}
```

<h2 id="tocS_AcceptPortfolioShareInput">AcceptPortfolioShareInput</h2>
<!-- backwards compatibility -->
<a id="schemaacceptportfolioshareinput"></a>
<a id="schema_AcceptPortfolioShareInput"></a>
<a id="tocSacceptportfolioshareinput"></a>
<a id="tocsacceptportfolioshareinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PortfolioShareType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|PortfolioShareType|object|false|none|none|

<h2 id="tocS_InvalidParametersException">InvalidParametersException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametersexception"></a>
<a id="schema_InvalidParametersException"></a>
<a id="tocSinvalidparametersexception"></a>
<a id="tocsinvalidparametersexception"></a>

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_AssociateBudgetWithResourceOutput">AssociateBudgetWithResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatebudgetwithresourceoutput"></a>
<a id="schema_AssociateBudgetWithResourceOutput"></a>
<a id="tocSassociatebudgetwithresourceoutput"></a>
<a id="tocsassociatebudgetwithresourceoutput"></a>

```json
{}
```

<h2 id="tocS_AssociateBudgetWithResourceInput">AssociateBudgetWithResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatebudgetwithresourceinput"></a>
<a id="schema_AssociateBudgetWithResourceInput"></a>
<a id="tocSassociatebudgetwithresourceinput"></a>
<a id="tocsassociatebudgetwithresourceinput"></a>

```json
{
  "BudgetName": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetName|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DuplicateResourceException">DuplicateResourceException</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateresourceexception"></a>
<a id="schema_DuplicateResourceException"></a>
<a id="tocSduplicateresourceexception"></a>
<a id="tocsduplicateresourceexception"></a>

```json
null
```

<h2 id="tocS_AssociatePrincipalWithPortfolioOutput">AssociatePrincipalWithPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateprincipalwithportfoliooutput"></a>
<a id="schema_AssociatePrincipalWithPortfolioOutput"></a>
<a id="tocSassociateprincipalwithportfoliooutput"></a>
<a id="tocsassociateprincipalwithportfoliooutput"></a>

```json
{}
```

<h2 id="tocS_AssociatePrincipalWithPortfolioInput">AssociatePrincipalWithPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateprincipalwithportfolioinput"></a>
<a id="schema_AssociatePrincipalWithPortfolioInput"></a>
<a id="tocSassociateprincipalwithportfolioinput"></a>
<a id="tocsassociateprincipalwithportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PrincipalARN": {},
  "PrincipalType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|PrincipalARN|object|true|none|none|
|PrincipalType|object|true|none|none|

<h2 id="tocS_AssociateProductWithPortfolioOutput">AssociateProductWithPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateproductwithportfoliooutput"></a>
<a id="schema_AssociateProductWithPortfolioOutput"></a>
<a id="tocSassociateproductwithportfoliooutput"></a>
<a id="tocsassociateproductwithportfoliooutput"></a>

```json
{}
```

<h2 id="tocS_AssociateProductWithPortfolioInput">AssociateProductWithPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateproductwithportfolioinput"></a>
<a id="schema_AssociateProductWithPortfolioInput"></a>
<a id="tocSassociateproductwithportfolioinput"></a>
<a id="tocsassociateproductwithportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PortfolioId": {},
  "SourcePortfolioId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|PortfolioId|object|true|none|none|
|SourcePortfolioId|object|false|none|none|

<h2 id="tocS_AssociateServiceActionWithProvisioningArtifactOutput">AssociateServiceActionWithProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceactionwithprovisioningartifactoutput"></a>
<a id="schema_AssociateServiceActionWithProvisioningArtifactOutput"></a>
<a id="tocSassociateserviceactionwithprovisioningartifactoutput"></a>
<a id="tocsassociateserviceactionwithprovisioningartifactoutput"></a>

```json
{}
```

<h2 id="tocS_AssociateServiceActionWithProvisioningArtifactInput">AssociateServiceActionWithProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociateserviceactionwithprovisioningartifactinput"></a>
<a id="schema_AssociateServiceActionWithProvisioningArtifactInput"></a>
<a id="tocSassociateserviceactionwithprovisioningartifactinput"></a>
<a id="tocsassociateserviceactionwithprovisioningartifactinput"></a>

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|ServiceActionId|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_AssociateTagOptionWithResourceOutput">AssociateTagOptionWithResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetagoptionwithresourceoutput"></a>
<a id="schema_AssociateTagOptionWithResourceOutput"></a>
<a id="tocSassociatetagoptionwithresourceoutput"></a>
<a id="tocsassociatetagoptionwithresourceoutput"></a>

```json
{}
```

<h2 id="tocS_AssociateTagOptionWithResourceInput">AssociateTagOptionWithResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetagoptionwithresourceinput"></a>
<a id="schema_AssociateTagOptionWithResourceInput"></a>
<a id="tocSassociatetagoptionwithresourceinput"></a>
<a id="tocsassociatetagoptionwithresourceinput"></a>

```json
{
  "ResourceId": {},
  "TagOptionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagOptionId|object|true|none|none|

<h2 id="tocS_TagOptionNotMigratedException">TagOptionNotMigratedException</h2>
<!-- backwards compatibility -->
<a id="schematagoptionnotmigratedexception"></a>
<a id="schema_TagOptionNotMigratedException"></a>
<a id="tocStagoptionnotmigratedexception"></a>
<a id="tocstagoptionnotmigratedexception"></a>

```json
null
```

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_BatchAssociateServiceActionWithProvisioningArtifactOutput">BatchAssociateServiceActionWithProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateserviceactionwithprovisioningartifactoutput"></a>
<a id="schema_BatchAssociateServiceActionWithProvisioningArtifactOutput"></a>
<a id="tocSbatchassociateserviceactionwithprovisioningartifactoutput"></a>
<a id="tocsbatchassociateserviceactionwithprovisioningartifactoutput"></a>

```json
{
  "FailedServiceActionAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedServiceActionAssociations|object|false|none|none|

<h2 id="tocS_BatchAssociateServiceActionWithProvisioningArtifactInput">BatchAssociateServiceActionWithProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociateserviceactionwithprovisioningartifactinput"></a>
<a id="schema_BatchAssociateServiceActionWithProvisioningArtifactInput"></a>
<a id="tocSbatchassociateserviceactionwithprovisioningartifactinput"></a>
<a id="tocsbatchassociateserviceactionwithprovisioningartifactinput"></a>

```json
{
  "ServiceActionAssociations": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionAssociations|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_BatchDisassociateServiceActionFromProvisioningArtifactOutput">BatchDisassociateServiceActionFromProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateserviceactionfromprovisioningartifactoutput"></a>
<a id="schema_BatchDisassociateServiceActionFromProvisioningArtifactOutput"></a>
<a id="tocSbatchdisassociateserviceactionfromprovisioningartifactoutput"></a>
<a id="tocsbatchdisassociateserviceactionfromprovisioningartifactoutput"></a>

```json
{
  "FailedServiceActionAssociations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailedServiceActionAssociations|object|false|none|none|

<h2 id="tocS_BatchDisassociateServiceActionFromProvisioningArtifactInput">BatchDisassociateServiceActionFromProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociateserviceactionfromprovisioningartifactinput"></a>
<a id="schema_BatchDisassociateServiceActionFromProvisioningArtifactInput"></a>
<a id="tocSbatchdisassociateserviceactionfromprovisioningartifactinput"></a>
<a id="tocsbatchdisassociateserviceactionfromprovisioningartifactinput"></a>

```json
{
  "ServiceActionAssociations": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionAssociations|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_CopyProductOutput">CopyProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemacopyproductoutput"></a>
<a id="schema_CopyProductOutput"></a>
<a id="tocScopyproductoutput"></a>
<a id="tocscopyproductoutput"></a>

```json
{
  "CopyProductToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyProductToken|object|false|none|none|

<h2 id="tocS_CopyProductInput">CopyProductInput</h2>
<!-- backwards compatibility -->
<a id="schemacopyproductinput"></a>
<a id="schema_CopyProductInput"></a>
<a id="tocScopyproductinput"></a>
<a id="tocscopyproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "SourceProductArn": {},
  "TargetProductId": {},
  "TargetProductName": {},
  "SourceProvisioningArtifactIdentifiers": {},
  "CopyOptions": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|SourceProductArn|object|true|none|none|
|TargetProductId|object|false|none|none|
|TargetProductName|object|false|none|none|
|SourceProvisioningArtifactIdentifiers|object|false|none|none|
|CopyOptions|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreateConstraintOutput">CreateConstraintOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateconstraintoutput"></a>
<a id="schema_CreateConstraintOutput"></a>
<a id="tocScreateconstraintoutput"></a>
<a id="tocscreateconstraintoutput"></a>

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstraintDetail|object|false|none|none|
|ConstraintParameters|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateConstraintInput">CreateConstraintInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateconstraintinput"></a>
<a id="schema_CreateConstraintInput"></a>
<a id="tocScreateconstraintinput"></a>
<a id="tocscreateconstraintinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "ProductId": {},
  "Parameters": {},
  "Type": {},
  "Description": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|ProductId|object|true|none|none|
|Parameters|object|true|none|none|
|Type|object|true|none|none|
|Description|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreatePortfolioOutput">CreatePortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateportfoliooutput"></a>
<a id="schema_CreatePortfolioOutput"></a>
<a id="tocScreateportfoliooutput"></a>
<a id="tocscreateportfoliooutput"></a>

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetail|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePortfolioInput">CreatePortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateportfolioinput"></a>
<a id="schema_CreatePortfolioInput"></a>
<a id="tocScreateportfolioinput"></a>
<a id="tocscreateportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "DisplayName": {},
  "Description": {},
  "ProviderName": {},
  "Tags": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|DisplayName|object|true|none|none|
|Description|object|false|none|none|
|ProviderName|object|true|none|none|
|Tags|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreatePortfolioShareOutput">CreatePortfolioShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateportfolioshareoutput"></a>
<a id="schema_CreatePortfolioShareOutput"></a>
<a id="tocScreateportfolioshareoutput"></a>
<a id="tocscreateportfolioshareoutput"></a>

```json
{
  "PortfolioShareToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioShareToken|object|false|none|none|

<h2 id="tocS_CreatePortfolioShareInput">CreatePortfolioShareInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateportfolioshareinput"></a>
<a id="schema_CreatePortfolioShareInput"></a>
<a id="tocScreateportfolioshareinput"></a>
<a id="tocscreateportfolioshareinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  },
  "ShareTagOptions": {},
  "SharePrincipals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|AccountId|object|false|none|none|
|OrganizationNode|object|false|none|none|
|ShareTagOptions|object|false|none|none|
|SharePrincipals|object|false|none|none|

<h2 id="tocS_OperationNotSupportedException">OperationNotSupportedException</h2>
<!-- backwards compatibility -->
<a id="schemaoperationnotsupportedexception"></a>
<a id="schema_OperationNotSupportedException"></a>
<a id="tocSoperationnotsupportedexception"></a>
<a id="tocsoperationnotsupportedexception"></a>

```json
null
```

<h2 id="tocS_CreateProductOutput">CreateProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateproductoutput"></a>
<a id="schema_CreateProductOutput"></a>
<a id="tocScreateproductoutput"></a>
<a id="tocscreateproductoutput"></a>

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewDetail|object|false|none|none|
|ProvisioningArtifactDetail|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateProductInput">CreateProductInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateproductinput"></a>
<a id="schema_CreateProductInput"></a>
<a id="tocScreateproductinput"></a>
<a id="tocscreateproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "Name": {},
  "Owner": {},
  "Description": {},
  "Distributor": {},
  "SupportDescription": {},
  "SupportEmail": {},
  "SupportUrl": {},
  "ProductType": {},
  "Tags": {},
  "ProvisioningArtifactParameters": {
    "Name": {},
    "Description": {},
    "Info": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {},
    "DisableTemplateValidation": {}
  },
  "IdempotencyToken": {},
  "SourceConnection": {
    "Type": {},
    "ConnectionParameters": {
      "CodeStar": {
        "ConnectionArn": {},
        "Repository": {},
        "Branch": {},
        "ArtifactPath": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Name|object|true|none|none|
|Owner|object|true|none|none|
|Description|object|false|none|none|
|Distributor|object|false|none|none|
|SupportDescription|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportUrl|object|false|none|none|
|ProductType|object|true|none|none|
|Tags|object|false|none|none|
|ProvisioningArtifactParameters|object|false|none|none|
|IdempotencyToken|object|true|none|none|
|SourceConnection|object|false|none|none|

<h2 id="tocS_CreateProvisionedProductPlanOutput">CreateProvisionedProductPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprovisionedproductplanoutput"></a>
<a id="schema_CreateProvisionedProductPlanOutput"></a>
<a id="tocScreateprovisionedproductplanoutput"></a>
<a id="tocscreateprovisionedproductplanoutput"></a>

```json
{
  "PlanName": {},
  "PlanId": {},
  "ProvisionProductId": {},
  "ProvisionedProductName": {},
  "ProvisioningArtifactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlanName|object|false|none|none|
|PlanId|object|false|none|none|
|ProvisionProductId|object|false|none|none|
|ProvisionedProductName|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|

<h2 id="tocS_CreateProvisionedProductPlanInput">CreateProvisionedProductPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprovisionedproductplaninput"></a>
<a id="schema_CreateProvisionedProductPlanInput"></a>
<a id="tocScreateprovisionedproductplaninput"></a>
<a id="tocscreateprovisionedproductplaninput"></a>

```json
{
  "AcceptLanguage": {},
  "PlanName": {},
  "PlanType": {},
  "NotificationArns": {},
  "PathId": {},
  "ProductId": {},
  "ProvisionedProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningParameters": {},
  "IdempotencyToken": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PlanName|object|true|none|none|
|PlanType|object|true|none|none|
|NotificationArns|object|false|none|none|
|PathId|object|false|none|none|
|ProductId|object|true|none|none|
|ProvisionedProductName|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|ProvisioningParameters|object|false|none|none|
|IdempotencyToken|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateProvisioningArtifactOutput">CreateProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprovisioningartifactoutput"></a>
<a id="schema_CreateProvisioningArtifactOutput"></a>
<a id="tocScreateprovisioningartifactoutput"></a>
<a id="tocscreateprovisioningartifactoutput"></a>

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactDetail|object|false|none|none|
|Info|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateProvisioningArtifactInput">CreateProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateprovisioningartifactinput"></a>
<a id="schema_CreateProvisioningArtifactInput"></a>
<a id="tocScreateprovisioningartifactinput"></a>
<a id="tocscreateprovisioningartifactinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "Parameters": {
    "Name": {},
    "Description": {},
    "Info": {
      "property1": "string",
      "property2": "string"
    },
    "Type": {},
    "DisableTemplateValidation": {}
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|Parameters|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreateServiceActionOutput">CreateServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceactionoutput"></a>
<a id="schema_CreateServiceActionOutput"></a>
<a id="tocScreateserviceactionoutput"></a>
<a id="tocscreateserviceactionoutput"></a>

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionDetail|object|false|none|none|

<h2 id="tocS_CreateServiceActionInput">CreateServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceactioninput"></a>
<a id="schema_CreateServiceActionInput"></a>
<a id="tocScreateserviceactioninput"></a>
<a id="tocscreateserviceactioninput"></a>

```json
{
  "Name": {},
  "DefinitionType": {},
  "Definition": {
    "property1": "string",
    "property2": "string"
  },
  "Description": {},
  "AcceptLanguage": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|DefinitionType|object|true|none|none|
|Definition|object|true|none|none|
|Description|object|false|none|none|
|AcceptLanguage|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_CreateTagOptionOutput">CreateTagOptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagoptionoutput"></a>
<a id="schema_CreateTagOptionOutput"></a>
<a id="tocScreatetagoptionoutput"></a>
<a id="tocscreatetagoptionoutput"></a>

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagOptionDetail|object|false|none|none|

<h2 id="tocS_CreateTagOptionInput">CreateTagOptionInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatetagoptioninput"></a>
<a id="schema_CreateTagOptionInput"></a>
<a id="tocScreatetagoptioninput"></a>
<a id="tocscreatetagoptioninput"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_DeleteConstraintOutput">DeleteConstraintOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconstraintoutput"></a>
<a id="schema_DeleteConstraintOutput"></a>
<a id="tocSdeleteconstraintoutput"></a>
<a id="tocsdeleteconstraintoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteConstraintInput">DeleteConstraintInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconstraintinput"></a>
<a id="schema_DeleteConstraintInput"></a>
<a id="tocSdeleteconstraintinput"></a>
<a id="tocsdeleteconstraintinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DeletePortfolioOutput">DeletePortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportfoliooutput"></a>
<a id="schema_DeletePortfolioOutput"></a>
<a id="tocSdeleteportfoliooutput"></a>
<a id="tocsdeleteportfoliooutput"></a>

```json
{}
```

<h2 id="tocS_DeletePortfolioInput">DeletePortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportfolioinput"></a>
<a id="schema_DeletePortfolioInput"></a>
<a id="tocSdeleteportfolioinput"></a>
<a id="tocsdeleteportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_DeletePortfolioShareOutput">DeletePortfolioShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportfolioshareoutput"></a>
<a id="schema_DeletePortfolioShareOutput"></a>
<a id="tocSdeleteportfolioshareoutput"></a>
<a id="tocsdeleteportfolioshareoutput"></a>

```json
{
  "PortfolioShareToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioShareToken|object|false|none|none|

<h2 id="tocS_DeletePortfolioShareInput">DeletePortfolioShareInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteportfolioshareinput"></a>
<a id="schema_DeletePortfolioShareInput"></a>
<a id="tocSdeleteportfolioshareinput"></a>
<a id="tocsdeleteportfolioshareinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|AccountId|object|false|none|none|
|OrganizationNode|object|false|none|none|

<h2 id="tocS_DeleteProductOutput">DeleteProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteproductoutput"></a>
<a id="schema_DeleteProductOutput"></a>
<a id="tocSdeleteproductoutput"></a>
<a id="tocsdeleteproductoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteProductInput">DeleteProductInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteproductinput"></a>
<a id="schema_DeleteProductInput"></a>
<a id="tocSdeleteproductinput"></a>
<a id="tocsdeleteproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DeleteProvisionedProductPlanOutput">DeleteProvisionedProductPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprovisionedproductplanoutput"></a>
<a id="schema_DeleteProvisionedProductPlanOutput"></a>
<a id="tocSdeleteprovisionedproductplanoutput"></a>
<a id="tocsdeleteprovisionedproductplanoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteProvisionedProductPlanInput">DeleteProvisionedProductPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprovisionedproductplaninput"></a>
<a id="schema_DeleteProvisionedProductPlanInput"></a>
<a id="tocSdeleteprovisionedproductplaninput"></a>
<a id="tocsdeleteprovisionedproductplaninput"></a>

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "IgnoreErrors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PlanId|object|true|none|none|
|IgnoreErrors|object|false|none|none|

<h2 id="tocS_DeleteProvisioningArtifactOutput">DeleteProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprovisioningartifactoutput"></a>
<a id="schema_DeleteProvisioningArtifactOutput"></a>
<a id="tocSdeleteprovisioningartifactoutput"></a>
<a id="tocsdeleteprovisioningartifactoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteProvisioningArtifactInput">DeleteProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteprovisioningartifactinput"></a>
<a id="schema_DeleteProvisioningArtifactInput"></a>
<a id="tocSdeleteprovisioningartifactinput"></a>
<a id="tocsdeleteprovisioningartifactinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|

<h2 id="tocS_DeleteServiceActionOutput">DeleteServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceactionoutput"></a>
<a id="schema_DeleteServiceActionOutput"></a>
<a id="tocSdeleteserviceactionoutput"></a>
<a id="tocsdeleteserviceactionoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteServiceActionInput">DeleteServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceactioninput"></a>
<a id="schema_DeleteServiceActionInput"></a>
<a id="tocSdeleteserviceactioninput"></a>
<a id="tocsdeleteserviceactioninput"></a>

```json
{
  "Id": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_DeleteTagOptionOutput">DeleteTagOptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagoptionoutput"></a>
<a id="schema_DeleteTagOptionOutput"></a>
<a id="tocSdeletetagoptionoutput"></a>
<a id="tocsdeletetagoptionoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteTagOptionInput">DeleteTagOptionInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagoptioninput"></a>
<a id="schema_DeleteTagOptionInput"></a>
<a id="tocSdeletetagoptioninput"></a>
<a id="tocsdeletetagoptioninput"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DescribeConstraintOutput">DescribeConstraintOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconstraintoutput"></a>
<a id="schema_DescribeConstraintOutput"></a>
<a id="tocSdescribeconstraintoutput"></a>
<a id="tocsdescribeconstraintoutput"></a>

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstraintDetail|object|false|none|none|
|ConstraintParameters|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DescribeConstraintInput">DescribeConstraintInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconstraintinput"></a>
<a id="schema_DescribeConstraintInput"></a>
<a id="tocSdescribeconstraintinput"></a>
<a id="tocsdescribeconstraintinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DescribeCopyProductStatusOutput">DescribeCopyProductStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecopyproductstatusoutput"></a>
<a id="schema_DescribeCopyProductStatusOutput"></a>
<a id="tocSdescribecopyproductstatusoutput"></a>
<a id="tocsdescribecopyproductstatusoutput"></a>

```json
{
  "CopyProductStatus": {},
  "TargetProductId": {},
  "StatusDetail": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CopyProductStatus|object|false|none|none|
|TargetProductId|object|false|none|none|
|StatusDetail|object|false|none|none|

<h2 id="tocS_DescribeCopyProductStatusInput">DescribeCopyProductStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecopyproductstatusinput"></a>
<a id="schema_DescribeCopyProductStatusInput"></a>
<a id="tocSdescribecopyproductstatusinput"></a>
<a id="tocsdescribecopyproductstatusinput"></a>

```json
{
  "AcceptLanguage": {},
  "CopyProductToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|CopyProductToken|object|true|none|none|

<h2 id="tocS_DescribePortfolioOutput">DescribePortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliooutput"></a>
<a id="schema_DescribePortfolioOutput"></a>
<a id="tocSdescribeportfoliooutput"></a>
<a id="tocsdescribeportfoliooutput"></a>

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
  "Tags": {},
  "TagOptions": {},
  "Budgets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetail|object|false|none|none|
|Tags|object|false|none|none|
|TagOptions|object|false|none|none|
|Budgets|object|false|none|none|

<h2 id="tocS_DescribePortfolioInput">DescribePortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfolioinput"></a>
<a id="schema_DescribePortfolioInput"></a>
<a id="tocSdescribeportfolioinput"></a>
<a id="tocsdescribeportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DescribePortfolioShareStatusOutput">DescribePortfolioShareStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliosharestatusoutput"></a>
<a id="schema_DescribePortfolioShareStatusOutput"></a>
<a id="tocSdescribeportfoliosharestatusoutput"></a>
<a id="tocsdescribeportfoliosharestatusoutput"></a>

```json
{
  "PortfolioShareToken": {},
  "PortfolioId": {},
  "OrganizationNodeValue": {},
  "Status": {},
  "ShareDetails": {
    "SuccessfulShares": {},
    "ShareErrors": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioShareToken|object|false|none|none|
|PortfolioId|object|false|none|none|
|OrganizationNodeValue|object|false|none|none|
|Status|object|false|none|none|
|ShareDetails|object|false|none|none|

<h2 id="tocS_DescribePortfolioShareStatusInput">DescribePortfolioShareStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliosharestatusinput"></a>
<a id="schema_DescribePortfolioShareStatusInput"></a>
<a id="tocSdescribeportfoliosharestatusinput"></a>
<a id="tocsdescribeportfoliosharestatusinput"></a>

```json
{
  "PortfolioShareToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioShareToken|object|true|none|none|

<h2 id="tocS_DescribePortfolioSharesOutput">DescribePortfolioSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliosharesoutput"></a>
<a id="schema_DescribePortfolioSharesOutput"></a>
<a id="tocSdescribeportfoliosharesoutput"></a>
<a id="tocsdescribeportfoliosharesoutput"></a>

```json
{
  "NextPageToken": {},
  "PortfolioShareDetails": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageToken|object|false|none|none|
|PortfolioShareDetails|object|false|none|none|

<h2 id="tocS_DescribePortfolioSharesInput">DescribePortfolioSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliosharesinput"></a>
<a id="schema_DescribePortfolioSharesInput"></a>
<a id="tocSdescribeportfoliosharesinput"></a>
<a id="tocsdescribeportfoliosharesinput"></a>

```json
{
  "PortfolioId": {},
  "Type": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioId|object|true|none|none|
|Type|object|true|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_DescribeProductOutput">DescribeProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductoutput"></a>
<a id="schema_DescribeProductOutput"></a>
<a id="tocSdescribeproductoutput"></a>
<a id="tocsdescribeproductoutput"></a>

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "ProvisioningArtifacts": {},
  "Budgets": {},
  "LaunchPaths": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewSummary|object|false|none|none|
|ProvisioningArtifacts|object|false|none|none|
|Budgets|object|false|none|none|
|LaunchPaths|object|false|none|none|

<h2 id="tocS_DescribeProductInput">DescribeProductInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductinput"></a>
<a id="schema_DescribeProductInput"></a>
<a id="tocSdescribeproductinput"></a>
<a id="tocsdescribeproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DescribeProductAsAdminOutput">DescribeProductAsAdminOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductasadminoutput"></a>
<a id="schema_DescribeProductAsAdminOutput"></a>
<a id="tocSdescribeproductasadminoutput"></a>
<a id="tocsdescribeproductasadminoutput"></a>

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
  "ProvisioningArtifactSummaries": {},
  "Tags": {},
  "TagOptions": {},
  "Budgets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewDetail|object|false|none|none|
|ProvisioningArtifactSummaries|object|false|none|none|
|Tags|object|false|none|none|
|TagOptions|object|false|none|none|
|Budgets|object|false|none|none|

<h2 id="tocS_DescribeProductAsAdminInput">DescribeProductAsAdminInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductasadmininput"></a>
<a id="schema_DescribeProductAsAdminInput"></a>
<a id="tocSdescribeproductasadmininput"></a>
<a id="tocsdescribeproductasadmininput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {},
  "SourcePortfolioId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|SourcePortfolioId|object|false|none|none|

<h2 id="tocS_DescribeProductViewOutput">DescribeProductViewOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductviewoutput"></a>
<a id="schema_DescribeProductViewOutput"></a>
<a id="tocSdescribeproductviewoutput"></a>
<a id="tocsdescribeproductviewoutput"></a>

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "ProvisioningArtifacts": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewSummary|object|false|none|none|
|ProvisioningArtifacts|object|false|none|none|

<h2 id="tocS_DescribeProductViewInput">DescribeProductViewInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeproductviewinput"></a>
<a id="schema_DescribeProductViewInput"></a>
<a id="tocSdescribeproductviewinput"></a>
<a id="tocsdescribeproductviewinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|

<h2 id="tocS_DescribeProvisionedProductOutput">DescribeProvisionedProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisionedproductoutput"></a>
<a id="schema_DescribeProvisionedProductOutput"></a>
<a id="tocSdescribeprovisionedproductoutput"></a>
<a id="tocsdescribeprovisionedproductoutput"></a>

```json
{
  "ProvisionedProductDetail": {
    "Name": {},
    "Arn": {},
    "Type": {},
    "Id": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedTime": {},
    "IdempotencyToken": {},
    "LastRecordId": {},
    "LastProvisioningRecordId": {},
    "LastSuccessfulProvisioningRecordId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "LaunchRoleArn": {}
  },
  "CloudWatchDashboards": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductDetail|object|false|none|none|
|CloudWatchDashboards|object|false|none|none|

<h2 id="tocS_DescribeProvisionedProductInput">DescribeProvisionedProductInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisionedproductinput"></a>
<a id="schema_DescribeProvisionedProductInput"></a>
<a id="tocSdescribeprovisionedproductinput"></a>
<a id="tocsdescribeprovisionedproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {}
}
```

DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_DescribeProvisionedProductPlanOutput">DescribeProvisionedProductPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisionedproductplanoutput"></a>
<a id="schema_DescribeProvisionedProductPlanOutput"></a>
<a id="tocSdescribeprovisionedproductplanoutput"></a>
<a id="tocsdescribeprovisionedproductplanoutput"></a>

```json
{
  "ProvisionedProductPlanDetails": {
    "CreatedTime": {},
    "PathId": {},
    "ProductId": {},
    "PlanName": {},
    "PlanId": {},
    "ProvisionProductId": {},
    "ProvisionProductName": {},
    "PlanType": {},
    "ProvisioningArtifactId": {},
    "Status": {},
    "UpdatedTime": {},
    "NotificationArns": {},
    "ProvisioningParameters": {},
    "Tags": {},
    "StatusMessage": {}
  },
  "ResourceChanges": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductPlanDetails|object|false|none|none|
|ResourceChanges|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_DescribeProvisionedProductPlanInput">DescribeProvisionedProductPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisionedproductplaninput"></a>
<a id="schema_DescribeProvisionedProductPlanInput"></a>
<a id="tocSdescribeprovisionedproductplaninput"></a>
<a id="tocsdescribeprovisionedproductplaninput"></a>

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PlanId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_DescribeProvisioningArtifactOutput">DescribeProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisioningartifactoutput"></a>
<a id="schema_DescribeProvisioningArtifactOutput"></a>
<a id="tocSdescribeprovisioningartifactoutput"></a>
<a id="tocsdescribeprovisioningartifactoutput"></a>

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactDetail|object|false|none|none|
|Info|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DescribeProvisioningArtifactInput">DescribeProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisioningartifactinput"></a>
<a id="schema_DescribeProvisioningArtifactInput"></a>
<a id="tocSdescribeprovisioningartifactinput"></a>
<a id="tocsdescribeprovisioningartifactinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisioningArtifactId": {},
  "ProductId": {},
  "ProvisioningArtifactName": {},
  "ProductName": {},
  "Verbose": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ProductId|object|false|none|none|
|ProvisioningArtifactName|object|false|none|none|
|ProductName|object|false|none|none|
|Verbose|object|false|none|none|

<h2 id="tocS_DescribeProvisioningParametersOutput">DescribeProvisioningParametersOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisioningparametersoutput"></a>
<a id="schema_DescribeProvisioningParametersOutput"></a>
<a id="tocSdescribeprovisioningparametersoutput"></a>
<a id="tocsdescribeprovisioningparametersoutput"></a>

```json
{
  "ProvisioningArtifactParameters": {},
  "ConstraintSummaries": {},
  "UsageInstructions": {},
  "TagOptions": {},
  "ProvisioningArtifactPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {}
  },
  "ProvisioningArtifactOutputs": {},
  "ProvisioningArtifactOutputKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactParameters|object|false|none|none|
|ConstraintSummaries|object|false|none|none|
|UsageInstructions|object|false|none|none|
|TagOptions|object|false|none|none|
|ProvisioningArtifactPreferences|object|false|none|none|
|ProvisioningArtifactOutputs|object|false|none|none|
|ProvisioningArtifactOutputKeys|object|false|none|none|

<h2 id="tocS_DescribeProvisioningParametersInput">DescribeProvisioningParametersInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeprovisioningparametersinput"></a>
<a id="schema_DescribeProvisioningParametersInput"></a>
<a id="tocSdescribeprovisioningparametersinput"></a>
<a id="tocsdescribeprovisioningparametersinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|false|none|none|
|ProductName|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ProvisioningArtifactName|object|false|none|none|
|PathId|object|false|none|none|
|PathName|object|false|none|none|

<h2 id="tocS_DescribeRecordOutput">DescribeRecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecordoutput"></a>
<a id="schema_DescribeRecordOutput"></a>
<a id="tocSdescriberecordoutput"></a>
<a id="tocsdescriberecordoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  },
  "RecordOutputs": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|
|RecordOutputs|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_DescribeRecordInput">DescribeRecordInput</h2>
<!-- backwards compatibility -->
<a id="schemadescriberecordinput"></a>
<a id="schema_DescribeRecordInput"></a>
<a id="tocSdescriberecordinput"></a>
<a id="tocsdescriberecordinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_DescribeServiceActionOutput">DescribeServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceactionoutput"></a>
<a id="schema_DescribeServiceActionOutput"></a>
<a id="tocSdescribeserviceactionoutput"></a>
<a id="tocsdescribeserviceactionoutput"></a>

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionDetail|object|false|none|none|

<h2 id="tocS_DescribeServiceActionInput">DescribeServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceactioninput"></a>
<a id="schema_DescribeServiceActionInput"></a>
<a id="tocSdescribeserviceactioninput"></a>
<a id="tocsdescribeserviceactioninput"></a>

```json
{
  "Id": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_DescribeServiceActionExecutionParametersOutput">DescribeServiceActionExecutionParametersOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceactionexecutionparametersoutput"></a>
<a id="schema_DescribeServiceActionExecutionParametersOutput"></a>
<a id="tocSdescribeserviceactionexecutionparametersoutput"></a>
<a id="tocsdescribeserviceactionexecutionparametersoutput"></a>

```json
{
  "ServiceActionParameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionParameters|object|false|none|none|

<h2 id="tocS_DescribeServiceActionExecutionParametersInput">DescribeServiceActionExecutionParametersInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceactionexecutionparametersinput"></a>
<a id="schema_DescribeServiceActionExecutionParametersInput"></a>
<a id="tocSdescribeserviceactionexecutionparametersinput"></a>
<a id="tocsdescribeserviceactionexecutionparametersinput"></a>

```json
{
  "ProvisionedProductId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductId|object|true|none|none|
|ServiceActionId|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_DescribeTagOptionOutput">DescribeTagOptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagoptionoutput"></a>
<a id="schema_DescribeTagOptionOutput"></a>
<a id="tocSdescribetagoptionoutput"></a>
<a id="tocsdescribetagoptionoutput"></a>

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagOptionDetail|object|false|none|none|

<h2 id="tocS_DescribeTagOptionInput">DescribeTagOptionInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribetagoptioninput"></a>
<a id="schema_DescribeTagOptionInput"></a>
<a id="tocSdescribetagoptioninput"></a>
<a id="tocsdescribetagoptioninput"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_DisableAWSOrganizationsAccessOutput">DisableAWSOrganizationsAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisableawsorganizationsaccessoutput"></a>
<a id="schema_DisableAWSOrganizationsAccessOutput"></a>
<a id="tocSdisableawsorganizationsaccessoutput"></a>
<a id="tocsdisableawsorganizationsaccessoutput"></a>

```json
{}
```

<h2 id="tocS_DisableAWSOrganizationsAccessInput">DisableAWSOrganizationsAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemadisableawsorganizationsaccessinput"></a>
<a id="schema_DisableAWSOrganizationsAccessInput"></a>
<a id="tocSdisableawsorganizationsaccessinput"></a>
<a id="tocsdisableawsorganizationsaccessinput"></a>

```json
{}
```

<h2 id="tocS_DisassociateBudgetFromResourceOutput">DisassociateBudgetFromResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatebudgetfromresourceoutput"></a>
<a id="schema_DisassociateBudgetFromResourceOutput"></a>
<a id="tocSdisassociatebudgetfromresourceoutput"></a>
<a id="tocsdisassociatebudgetfromresourceoutput"></a>

```json
{}
```

<h2 id="tocS_DisassociateBudgetFromResourceInput">DisassociateBudgetFromResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatebudgetfromresourceinput"></a>
<a id="schema_DisassociateBudgetFromResourceInput"></a>
<a id="tocSdisassociatebudgetfromresourceinput"></a>
<a id="tocsdisassociatebudgetfromresourceinput"></a>

```json
{
  "BudgetName": {},
  "ResourceId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetName|object|true|none|none|
|ResourceId|object|true|none|none|

<h2 id="tocS_DisassociatePrincipalFromPortfolioOutput">DisassociatePrincipalFromPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateprincipalfromportfoliooutput"></a>
<a id="schema_DisassociatePrincipalFromPortfolioOutput"></a>
<a id="tocSdisassociateprincipalfromportfoliooutput"></a>
<a id="tocsdisassociateprincipalfromportfoliooutput"></a>

```json
{}
```

<h2 id="tocS_DisassociatePrincipalFromPortfolioInput">DisassociatePrincipalFromPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateprincipalfromportfolioinput"></a>
<a id="schema_DisassociatePrincipalFromPortfolioInput"></a>
<a id="tocSdisassociateprincipalfromportfolioinput"></a>
<a id="tocsdisassociateprincipalfromportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PrincipalARN": {},
  "PrincipalType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|PrincipalARN|object|true|none|none|
|PrincipalType|object|false|none|none|

<h2 id="tocS_DisassociateProductFromPortfolioOutput">DisassociateProductFromPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateproductfromportfoliooutput"></a>
<a id="schema_DisassociateProductFromPortfolioOutput"></a>
<a id="tocSdisassociateproductfromportfoliooutput"></a>
<a id="tocsdisassociateproductfromportfoliooutput"></a>

```json
{}
```

<h2 id="tocS_DisassociateProductFromPortfolioInput">DisassociateProductFromPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateproductfromportfolioinput"></a>
<a id="schema_DisassociateProductFromPortfolioInput"></a>
<a id="tocSdisassociateproductfromportfolioinput"></a>
<a id="tocsdisassociateproductfromportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PortfolioId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|PortfolioId|object|true|none|none|

<h2 id="tocS_DisassociateServiceActionFromProvisioningArtifactOutput">DisassociateServiceActionFromProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateserviceactionfromprovisioningartifactoutput"></a>
<a id="schema_DisassociateServiceActionFromProvisioningArtifactOutput"></a>
<a id="tocSdisassociateserviceactionfromprovisioningartifactoutput"></a>
<a id="tocsdisassociateserviceactionfromprovisioningartifactoutput"></a>

```json
{}
```

<h2 id="tocS_DisassociateServiceActionFromProvisioningArtifactInput">DisassociateServiceActionFromProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociateserviceactionfromprovisioningartifactinput"></a>
<a id="schema_DisassociateServiceActionFromProvisioningArtifactInput"></a>
<a id="tocSdisassociateserviceactionfromprovisioningartifactinput"></a>
<a id="tocsdisassociateserviceactionfromprovisioningartifactinput"></a>

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ServiceActionId": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|ServiceActionId|object|true|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_DisassociateTagOptionFromResourceOutput">DisassociateTagOptionFromResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetagoptionfromresourceoutput"></a>
<a id="schema_DisassociateTagOptionFromResourceOutput"></a>
<a id="tocSdisassociatetagoptionfromresourceoutput"></a>
<a id="tocsdisassociatetagoptionfromresourceoutput"></a>

```json
{}
```

<h2 id="tocS_DisassociateTagOptionFromResourceInput">DisassociateTagOptionFromResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetagoptionfromresourceinput"></a>
<a id="schema_DisassociateTagOptionFromResourceInput"></a>
<a id="tocSdisassociatetagoptionfromresourceinput"></a>
<a id="tocsdisassociatetagoptionfromresourceinput"></a>

```json
{
  "ResourceId": {},
  "TagOptionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceId|object|true|none|none|
|TagOptionId|object|true|none|none|

<h2 id="tocS_EnableAWSOrganizationsAccessOutput">EnableAWSOrganizationsAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemaenableawsorganizationsaccessoutput"></a>
<a id="schema_EnableAWSOrganizationsAccessOutput"></a>
<a id="tocSenableawsorganizationsaccessoutput"></a>
<a id="tocsenableawsorganizationsaccessoutput"></a>

```json
{}
```

<h2 id="tocS_EnableAWSOrganizationsAccessInput">EnableAWSOrganizationsAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemaenableawsorganizationsaccessinput"></a>
<a id="schema_EnableAWSOrganizationsAccessInput"></a>
<a id="tocSenableawsorganizationsaccessinput"></a>
<a id="tocsenableawsorganizationsaccessinput"></a>

```json
{}
```

<h2 id="tocS_ExecuteProvisionedProductPlanOutput">ExecuteProvisionedProductPlanOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteprovisionedproductplanoutput"></a>
<a id="schema_ExecuteProvisionedProductPlanOutput"></a>
<a id="tocSexecuteprovisionedproductplanoutput"></a>
<a id="tocsexecuteprovisionedproductplanoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|

<h2 id="tocS_ExecuteProvisionedProductPlanInput">ExecuteProvisionedProductPlanInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteprovisionedproductplaninput"></a>
<a id="schema_ExecuteProvisionedProductPlanInput"></a>
<a id="tocSexecuteprovisionedproductplaninput"></a>
<a id="tocsexecuteprovisionedproductplaninput"></a>

```json
{
  "AcceptLanguage": {},
  "PlanId": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PlanId|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_ExecuteProvisionedProductServiceActionOutput">ExecuteProvisionedProductServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteprovisionedproductserviceactionoutput"></a>
<a id="schema_ExecuteProvisionedProductServiceActionOutput"></a>
<a id="tocSexecuteprovisionedproductserviceactionoutput"></a>
<a id="tocsexecuteprovisionedproductserviceactionoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|

<h2 id="tocS_ExecuteProvisionedProductServiceActionInput">ExecuteProvisionedProductServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteprovisionedproductserviceactioninput"></a>
<a id="schema_ExecuteProvisionedProductServiceActionInput"></a>
<a id="tocSexecuteprovisionedproductserviceactioninput"></a>
<a id="tocsexecuteprovisionedproductserviceactioninput"></a>

```json
{
  "ProvisionedProductId": {},
  "ServiceActionId": {},
  "ExecuteToken": {},
  "AcceptLanguage": {},
  "Parameters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductId|object|true|none|none|
|ServiceActionId|object|true|none|none|
|ExecuteToken|object|true|none|none|
|AcceptLanguage|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_GetAWSOrganizationsAccessStatusOutput">GetAWSOrganizationsAccessStatusOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetawsorganizationsaccessstatusoutput"></a>
<a id="schema_GetAWSOrganizationsAccessStatusOutput"></a>
<a id="tocSgetawsorganizationsaccessstatusoutput"></a>
<a id="tocsgetawsorganizationsaccessstatusoutput"></a>

```json
{
  "AccessStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessStatus|object|false|none|none|

<h2 id="tocS_GetAWSOrganizationsAccessStatusInput">GetAWSOrganizationsAccessStatusInput</h2>
<!-- backwards compatibility -->
<a id="schemagetawsorganizationsaccessstatusinput"></a>
<a id="schema_GetAWSOrganizationsAccessStatusInput"></a>
<a id="tocSgetawsorganizationsaccessstatusinput"></a>
<a id="tocsgetawsorganizationsaccessstatusinput"></a>

```json
{}
```

<h2 id="tocS_GetProvisionedProductOutputsOutput">GetProvisionedProductOutputsOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetprovisionedproductoutputsoutput"></a>
<a id="schema_GetProvisionedProductOutputsOutput"></a>
<a id="tocSgetprovisionedproductoutputsoutput"></a>
<a id="tocsgetprovisionedproductoutputsoutput"></a>

```json
{
  "Outputs": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Outputs|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_GetProvisionedProductOutputsInput">GetProvisionedProductOutputsInput</h2>
<!-- backwards compatibility -->
<a id="schemagetprovisionedproductoutputsinput"></a>
<a id="schema_GetProvisionedProductOutputsInput"></a>
<a id="tocSgetprovisionedproductoutputsinput"></a>
<a id="tocsgetprovisionedproductoutputsinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "ProvisionedProductName": {},
  "OutputKeys": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisionedProductId|object|false|none|none|
|ProvisionedProductName|object|false|none|none|
|OutputKeys|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ImportAsProvisionedProductOutput">ImportAsProvisionedProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemaimportasprovisionedproductoutput"></a>
<a id="schema_ImportAsProvisionedProductOutput"></a>
<a id="tocSimportasprovisionedproductoutput"></a>
<a id="tocsimportasprovisionedproductoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|[RecordDetail](#schemarecorddetail)|false|none|Information about a request operation.|

<h2 id="tocS_ImportAsProvisionedProductInput">ImportAsProvisionedProductInput</h2>
<!-- backwards compatibility -->
<a id="schemaimportasprovisionedproductinput"></a>
<a id="schema_ImportAsProvisionedProductInput"></a>
<a id="tocSimportasprovisionedproductinput"></a>
<a id="tocsimportasprovisionedproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ProvisionedProductName": {},
  "PhysicalId": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|ProvisionedProductName|object|true|none|none|
|PhysicalId|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_ListAcceptedPortfolioSharesOutput">ListAcceptedPortfolioSharesOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistacceptedportfoliosharesoutput"></a>
<a id="schema_ListAcceptedPortfolioSharesOutput"></a>
<a id="tocSlistacceptedportfoliosharesoutput"></a>
<a id="tocslistacceptedportfoliosharesoutput"></a>

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListAcceptedPortfolioSharesInput">ListAcceptedPortfolioSharesInput</h2>
<!-- backwards compatibility -->
<a id="schemalistacceptedportfoliosharesinput"></a>
<a id="schema_ListAcceptedPortfolioSharesInput"></a>
<a id="tocSlistacceptedportfoliosharesinput"></a>
<a id="tocslistacceptedportfoliosharesinput"></a>

```json
{
  "AcceptLanguage": {},
  "PageToken": {},
  "PageSize": {},
  "PortfolioShareType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|
|PortfolioShareType|object|false|none|none|

<h2 id="tocS_ListBudgetsForResourceOutput">ListBudgetsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistbudgetsforresourceoutput"></a>
<a id="schema_ListBudgetsForResourceOutput"></a>
<a id="tocSlistbudgetsforresourceoutput"></a>
<a id="tocslistbudgetsforresourceoutput"></a>

```json
{
  "Budgets": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Budgets|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListBudgetsForResourceInput">ListBudgetsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalistbudgetsforresourceinput"></a>
<a id="schema_ListBudgetsForResourceInput"></a>
<a id="tocSlistbudgetsforresourceinput"></a>
<a id="tocslistbudgetsforresourceinput"></a>

```json
{
  "AcceptLanguage": {},
  "ResourceId": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ResourceId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListConstraintsForPortfolioOutput">ListConstraintsForPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistconstraintsforportfoliooutput"></a>
<a id="schema_ListConstraintsForPortfolioOutput"></a>
<a id="tocSlistconstraintsforportfoliooutput"></a>
<a id="tocslistconstraintsforportfoliooutput"></a>

```json
{
  "ConstraintDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstraintDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListConstraintsForPortfolioInput">ListConstraintsForPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemalistconstraintsforportfolioinput"></a>
<a id="schema_ListConstraintsForPortfolioInput"></a>
<a id="tocSlistconstraintsforportfolioinput"></a>
<a id="tocslistconstraintsforportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "ProductId": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|ProductId|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListLaunchPathsOutput">ListLaunchPathsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchpathsoutput"></a>
<a id="schema_ListLaunchPathsOutput"></a>
<a id="tocSlistlaunchpathsoutput"></a>
<a id="tocslistlaunchpathsoutput"></a>

```json
{
  "LaunchPathSummaries": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LaunchPathSummaries|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListLaunchPathsInput">ListLaunchPathsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistlaunchpathsinput"></a>
<a id="schema_ListLaunchPathsInput"></a>
<a id="tocSlistlaunchpathsinput"></a>
<a id="tocslistlaunchpathsinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListOrganizationPortfolioAccessOutput">ListOrganizationPortfolioAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationportfolioaccessoutput"></a>
<a id="schema_ListOrganizationPortfolioAccessOutput"></a>
<a id="tocSlistorganizationportfolioaccessoutput"></a>
<a id="tocslistorganizationportfolioaccessoutput"></a>

```json
{
  "OrganizationNodes": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OrganizationNodes|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListOrganizationPortfolioAccessInput">ListOrganizationPortfolioAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationportfolioaccessinput"></a>
<a id="schema_ListOrganizationPortfolioAccessInput"></a>
<a id="tocSlistorganizationportfolioaccessinput"></a>
<a id="tocslistorganizationportfolioaccessinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "OrganizationNodeType": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|OrganizationNodeType|object|true|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListPortfolioAccessOutput">ListPortfolioAccessOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfolioaccessoutput"></a>
<a id="schema_ListPortfolioAccessOutput"></a>
<a id="tocSlistportfolioaccessoutput"></a>
<a id="tocslistportfolioaccessoutput"></a>

```json
{
  "AccountIds": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountIds|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPortfolioAccessInput">ListPortfolioAccessInput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfolioaccessinput"></a>
<a id="schema_ListPortfolioAccessInput"></a>
<a id="tocSlistportfolioaccessinput"></a>
<a id="tocslistportfolioaccessinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "OrganizationParentId": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|OrganizationParentId|object|false|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListPortfoliosOutput">ListPortfoliosOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfoliosoutput"></a>
<a id="schema_ListPortfoliosOutput"></a>
<a id="tocSlistportfoliosoutput"></a>
<a id="tocslistportfoliosoutput"></a>

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPortfoliosInput">ListPortfoliosInput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfoliosinput"></a>
<a id="schema_ListPortfoliosInput"></a>
<a id="tocSlistportfoliosinput"></a>
<a id="tocslistportfoliosinput"></a>

```json
{
  "AcceptLanguage": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListPortfoliosForProductOutput">ListPortfoliosForProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfoliosforproductoutput"></a>
<a id="schema_ListPortfoliosForProductOutput"></a>
<a id="tocSlistportfoliosforproductoutput"></a>
<a id="tocslistportfoliosforproductoutput"></a>

```json
{
  "PortfolioDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPortfoliosForProductInput">ListPortfoliosForProductInput</h2>
<!-- backwards compatibility -->
<a id="schemalistportfoliosforproductinput"></a>
<a id="schema_ListPortfoliosForProductInput"></a>
<a id="tocSlistportfoliosforproductinput"></a>
<a id="tocslistportfoliosforproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListPrincipalsForPortfolioOutput">ListPrincipalsForPortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprincipalsforportfoliooutput"></a>
<a id="schema_ListPrincipalsForPortfolioOutput"></a>
<a id="tocSlistprincipalsforportfoliooutput"></a>
<a id="tocslistprincipalsforportfoliooutput"></a>

```json
{
  "Principals": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Principals|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPrincipalsForPortfolioInput">ListPrincipalsForPortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprincipalsforportfolioinput"></a>
<a id="schema_ListPrincipalsForPortfolioInput"></a>
<a id="tocSlistprincipalsforportfolioinput"></a>
<a id="tocslistprincipalsforportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListProvisionedProductPlansOutput">ListProvisionedProductPlansOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedproductplansoutput"></a>
<a id="schema_ListProvisionedProductPlansOutput"></a>
<a id="tocSlistprovisionedproductplansoutput"></a>
<a id="tocslistprovisionedproductplansoutput"></a>

```json
{
  "ProvisionedProductPlans": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductPlans|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListProvisionedProductPlansInput">ListProvisionedProductPlansInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisionedproductplansinput"></a>
<a id="schema_ListProvisionedProductPlansInput"></a>
<a id="tocSlistprovisionedproductplansinput"></a>
<a id="tocslistprovisionedproductplansinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisionProductId": {},
  "PageSize": {},
  "PageToken": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisionProductId|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|
|AccessLevelFilter|object|false|none|none|

<h2 id="tocS_ListProvisioningArtifactsOutput">ListProvisioningArtifactsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisioningartifactsoutput"></a>
<a id="schema_ListProvisioningArtifactsOutput"></a>
<a id="tocSlistprovisioningartifactsoutput"></a>
<a id="tocslistprovisioningartifactsoutput"></a>

```json
{
  "ProvisioningArtifactDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListProvisioningArtifactsInput">ListProvisioningArtifactsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisioningartifactsinput"></a>
<a id="schema_ListProvisioningArtifactsInput"></a>
<a id="tocSlistprovisioningartifactsinput"></a>
<a id="tocslistprovisioningartifactsinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|

<h2 id="tocS_ListProvisioningArtifactsForServiceActionOutput">ListProvisioningArtifactsForServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisioningartifactsforserviceactionoutput"></a>
<a id="schema_ListProvisioningArtifactsForServiceActionOutput"></a>
<a id="tocSlistprovisioningartifactsforserviceactionoutput"></a>
<a id="tocslistprovisioningartifactsforserviceactionoutput"></a>

```json
{
  "ProvisioningArtifactViews": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactViews|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListProvisioningArtifactsForServiceActionInput">ListProvisioningArtifactsForServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemalistprovisioningartifactsforserviceactioninput"></a>
<a id="schema_ListProvisioningArtifactsForServiceActionInput"></a>
<a id="tocSlistprovisioningartifactsforserviceactioninput"></a>
<a id="tocslistprovisioningartifactsforserviceactioninput"></a>

```json
{
  "ServiceActionId": {},
  "PageSize": {},
  "PageToken": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_ListRecordHistoryOutput">ListRecordHistoryOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordhistoryoutput"></a>
<a id="schema_ListRecordHistoryOutput"></a>
<a id="tocSlistrecordhistoryoutput"></a>
<a id="tocslistrecordhistoryoutput"></a>

```json
{
  "RecordDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListRecordHistoryInput">ListRecordHistoryInput</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordhistoryinput"></a>
<a id="schema_ListRecordHistoryInput"></a>
<a id="tocSlistrecordhistoryinput"></a>
<a id="tocslistrecordhistoryinput"></a>

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "SearchFilter": {
    "Key": {},
    "Value": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|AccessLevelFilter|object|false|none|none|
|SearchFilter|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListResourcesForTagOptionOutput">ListResourcesForTagOptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesfortagoptionoutput"></a>
<a id="schema_ListResourcesForTagOptionOutput"></a>
<a id="tocSlistresourcesfortagoptionoutput"></a>
<a id="tocslistresourcesfortagoptionoutput"></a>

```json
{
  "ResourceDetails": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceDetails|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListResourcesForTagOptionInput">ListResourcesForTagOptionInput</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcesfortagoptioninput"></a>
<a id="schema_ListResourcesForTagOptionInput"></a>
<a id="tocSlistresourcesfortagoptioninput"></a>
<a id="tocslistresourcesfortagoptioninput"></a>

```json
{
  "TagOptionId": {},
  "ResourceType": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagOptionId|object|true|none|none|
|ResourceType|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListServiceActionsOutput">ListServiceActionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceactionsoutput"></a>
<a id="schema_ListServiceActionsOutput"></a>
<a id="tocSlistserviceactionsoutput"></a>
<a id="tocslistserviceactionsoutput"></a>

```json
{
  "ServiceActionSummaries": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionSummaries|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListServiceActionsInput">ListServiceActionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceactionsinput"></a>
<a id="schema_ListServiceActionsInput"></a>
<a id="tocSlistserviceactionsinput"></a>
<a id="tocslistserviceactionsinput"></a>

```json
{
  "AcceptLanguage": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListServiceActionsForProvisioningArtifactOutput">ListServiceActionsForProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceactionsforprovisioningartifactoutput"></a>
<a id="schema_ListServiceActionsForProvisioningArtifactOutput"></a>
<a id="tocSlistserviceactionsforprovisioningartifactoutput"></a>
<a id="tocslistserviceactionsforprovisioningartifactoutput"></a>

```json
{
  "ServiceActionSummaries": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionSummaries|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListServiceActionsForProvisioningArtifactInput">ListServiceActionsForProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemalistserviceactionsforprovisioningartifactinput"></a>
<a id="schema_ListServiceActionsForProvisioningArtifactInput"></a>
<a id="tocSlistserviceactionsforprovisioningartifactinput"></a>
<a id="tocslistserviceactionsforprovisioningartifactinput"></a>

```json
{
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "PageSize": {},
  "PageToken": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_ListStackInstancesForProvisionedProductOutput">ListStackInstancesForProvisionedProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstancesforprovisionedproductoutput"></a>
<a id="schema_ListStackInstancesForProvisionedProductOutput"></a>
<a id="tocSliststackinstancesforprovisionedproductoutput"></a>
<a id="tocsliststackinstancesforprovisionedproductoutput"></a>

```json
{
  "StackInstances": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackInstances|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListStackInstancesForProvisionedProductInput">ListStackInstancesForProvisionedProductInput</h2>
<!-- backwards compatibility -->
<a id="schemaliststackinstancesforprovisionedproductinput"></a>
<a id="schema_ListStackInstancesForProvisionedProductInput"></a>
<a id="tocSliststackinstancesforprovisionedproductinput"></a>
<a id="tocsliststackinstancesforprovisionedproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "PageToken": {},
  "PageSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisionedProductId|object|true|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|

<h2 id="tocS_ListTagOptionsOutput">ListTagOptionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagoptionsoutput"></a>
<a id="schema_ListTagOptionsOutput"></a>
<a id="tocSlisttagoptionsoutput"></a>
<a id="tocslisttagoptionsoutput"></a>

```json
{
  "TagOptionDetails": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagOptionDetails|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_ListTagOptionsInput">ListTagOptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagoptionsinput"></a>
<a id="schema_ListTagOptionsInput"></a>
<a id="tocSlisttagoptionsinput"></a>
<a id="tocslisttagoptionsinput"></a>

```json
{
  "Filters": {
    "Key": {},
    "Value": {},
    "Active": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_NotifyProvisionProductEngineWorkflowResultOutput">NotifyProvisionProductEngineWorkflowResultOutput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyprovisionproductengineworkflowresultoutput"></a>
<a id="schema_NotifyProvisionProductEngineWorkflowResultOutput"></a>
<a id="tocSnotifyprovisionproductengineworkflowresultoutput"></a>
<a id="tocsnotifyprovisionproductengineworkflowresultoutput"></a>

```json
{}
```

<h2 id="tocS_NotifyProvisionProductEngineWorkflowResultInput">NotifyProvisionProductEngineWorkflowResultInput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyprovisionproductengineworkflowresultinput"></a>
<a id="schema_NotifyProvisionProductEngineWorkflowResultInput"></a>
<a id="tocSnotifyprovisionproductengineworkflowresultinput"></a>
<a id="tocsnotifyprovisionproductengineworkflowresultinput"></a>

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "ResourceIdentifier": {
    "UniqueTag": {
      "Key": {},
      "Value": {}
    }
  },
  "Outputs": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowToken|object|true|none|none|
|RecordId|object|true|none|none|
|Status|object|true|none|none|
|FailureReason|object|false|none|none|
|ResourceIdentifier|object|false|none|none|
|Outputs|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_NotifyTerminateProvisionedProductEngineWorkflowResultOutput">NotifyTerminateProvisionedProductEngineWorkflowResultOutput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyterminateprovisionedproductengineworkflowresultoutput"></a>
<a id="schema_NotifyTerminateProvisionedProductEngineWorkflowResultOutput"></a>
<a id="tocSnotifyterminateprovisionedproductengineworkflowresultoutput"></a>
<a id="tocsnotifyterminateprovisionedproductengineworkflowresultoutput"></a>

```json
{}
```

<h2 id="tocS_NotifyTerminateProvisionedProductEngineWorkflowResultInput">NotifyTerminateProvisionedProductEngineWorkflowResultInput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyterminateprovisionedproductengineworkflowresultinput"></a>
<a id="schema_NotifyTerminateProvisionedProductEngineWorkflowResultInput"></a>
<a id="tocSnotifyterminateprovisionedproductengineworkflowresultinput"></a>
<a id="tocsnotifyterminateprovisionedproductengineworkflowresultinput"></a>

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowToken|object|true|none|none|
|RecordId|object|true|none|none|
|Status|object|true|none|none|
|FailureReason|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_NotifyUpdateProvisionedProductEngineWorkflowResultOutput">NotifyUpdateProvisionedProductEngineWorkflowResultOutput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyupdateprovisionedproductengineworkflowresultoutput"></a>
<a id="schema_NotifyUpdateProvisionedProductEngineWorkflowResultOutput"></a>
<a id="tocSnotifyupdateprovisionedproductengineworkflowresultoutput"></a>
<a id="tocsnotifyupdateprovisionedproductengineworkflowresultoutput"></a>

```json
{}
```

<h2 id="tocS_NotifyUpdateProvisionedProductEngineWorkflowResultInput">NotifyUpdateProvisionedProductEngineWorkflowResultInput</h2>
<!-- backwards compatibility -->
<a id="schemanotifyupdateprovisionedproductengineworkflowresultinput"></a>
<a id="schema_NotifyUpdateProvisionedProductEngineWorkflowResultInput"></a>
<a id="tocSnotifyupdateprovisionedproductengineworkflowresultinput"></a>
<a id="tocsnotifyupdateprovisionedproductengineworkflowresultinput"></a>

```json
{
  "WorkflowToken": {},
  "RecordId": {},
  "Status": {},
  "FailureReason": {},
  "Outputs": {},
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|WorkflowToken|object|true|none|none|
|RecordId|object|true|none|none|
|Status|object|true|none|none|
|FailureReason|object|false|none|none|
|Outputs|object|false|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_ProvisionProductOutput">ProvisionProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionproductoutput"></a>
<a id="schema_ProvisionProductOutput"></a>
<a id="tocSprovisionproductoutput"></a>
<a id="tocsprovisionproductoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|

<h2 id="tocS_ProvisionProductInput">ProvisionProductInput</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionproductinput"></a>
<a id="schema_ProvisionProductInput"></a>
<a id="tocSprovisionproductinput"></a>
<a id="tocsprovisionproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {},
  "ProvisionedProductName": {},
  "ProvisioningParameters": {},
  "ProvisioningPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {},
    "StackSetFailureToleranceCount": {},
    "StackSetFailureTolerancePercentage": {},
    "StackSetMaxConcurrencyCount": {},
    "StackSetMaxConcurrencyPercentage": {}
  },
  "Tags": {},
  "NotificationArns": {},
  "ProvisionToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|false|none|none|
|ProductName|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ProvisioningArtifactName|object|false|none|none|
|PathId|object|false|none|none|
|PathName|object|false|none|none|
|ProvisionedProductName|object|true|none|none|
|ProvisioningParameters|object|false|none|none|
|ProvisioningPreferences|object|false|none|none|
|Tags|object|false|none|none|
|NotificationArns|object|false|none|none|
|ProvisionToken|object|true|none|none|

<h2 id="tocS_RejectPortfolioShareOutput">RejectPortfolioShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemarejectportfolioshareoutput"></a>
<a id="schema_RejectPortfolioShareOutput"></a>
<a id="tocSrejectportfolioshareoutput"></a>
<a id="tocsrejectportfolioshareoutput"></a>

```json
{}
```

<h2 id="tocS_RejectPortfolioShareInput">RejectPortfolioShareInput</h2>
<!-- backwards compatibility -->
<a id="schemarejectportfolioshareinput"></a>
<a id="schema_RejectPortfolioShareInput"></a>
<a id="tocSrejectportfolioshareinput"></a>
<a id="tocsrejectportfolioshareinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "PortfolioShareType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|PortfolioShareType|object|false|none|none|

<h2 id="tocS_ScanProvisionedProductsOutput">ScanProvisionedProductsOutput</h2>
<!-- backwards compatibility -->
<a id="schemascanprovisionedproductsoutput"></a>
<a id="schema_ScanProvisionedProductsOutput"></a>
<a id="tocSscanprovisionedproductsoutput"></a>
<a id="tocsscanprovisionedproductsoutput"></a>

```json
{
  "ProvisionedProducts": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProducts|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ScanProvisionedProductsInput">ScanProvisionedProductsInput</h2>
<!-- backwards compatibility -->
<a id="schemascanprovisionedproductsinput"></a>
<a id="schema_ScanProvisionedProductsInput"></a>
<a id="tocSscanprovisionedproductsinput"></a>
<a id="tocsscanprovisionedproductsinput"></a>

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|AccessLevelFilter|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_SearchProductsOutput">SearchProductsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchproductsoutput"></a>
<a id="schema_SearchProductsOutput"></a>
<a id="tocSsearchproductsoutput"></a>
<a id="tocssearchproductsoutput"></a>

```json
{
  "ProductViewSummaries": {},
  "ProductViewAggregations": {
    "property1": [
      {
        "Value": {},
        "ApproximateCount": {}
      }
    ],
    "property2": [
      {
        "Value": {},
        "ApproximateCount": {}
      }
    ]
  },
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewSummaries|object|false|none|none|
|ProductViewAggregations|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_SearchProductsInput">SearchProductsInput</h2>
<!-- backwards compatibility -->
<a id="schemasearchproductsinput"></a>
<a id="schema_SearchProductsInput"></a>
<a id="tocSsearchproductsinput"></a>
<a id="tocssearchproductsinput"></a>

```json
{
  "AcceptLanguage": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "PageSize": {},
  "SortBy": {},
  "SortOrder": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Filters|object|false|none|none|
|PageSize|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_SearchProductsAsAdminOutput">SearchProductsAsAdminOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchproductsasadminoutput"></a>
<a id="schema_SearchProductsAsAdminOutput"></a>
<a id="tocSsearchproductsasadminoutput"></a>
<a id="tocssearchproductsasadminoutput"></a>

```json
{
  "ProductViewDetails": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewDetails|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_SearchProductsAsAdminInput">SearchProductsAsAdminInput</h2>
<!-- backwards compatibility -->
<a id="schemasearchproductsasadmininput"></a>
<a id="schema_SearchProductsAsAdminInput"></a>
<a id="tocSsearchproductsasadmininput"></a>
<a id="tocssearchproductsasadmininput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortBy": {},
  "SortOrder": {},
  "PageToken": {},
  "PageSize": {},
  "ProductSource": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|false|none|none|
|Filters|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|
|PageToken|object|false|none|none|
|PageSize|object|false|none|none|
|ProductSource|object|false|none|none|

<h2 id="tocS_SearchProvisionedProductsOutput">SearchProvisionedProductsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasearchprovisionedproductsoutput"></a>
<a id="schema_SearchProvisionedProductsOutput"></a>
<a id="tocSsearchprovisionedproductsoutput"></a>
<a id="tocssearchprovisionedproductsoutput"></a>

```json
{
  "ProvisionedProducts": {},
  "TotalResultsCount": {},
  "NextPageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProducts|object|false|none|none|
|TotalResultsCount|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_SearchProvisionedProductsInput">SearchProvisionedProductsInput</h2>
<!-- backwards compatibility -->
<a id="schemasearchprovisionedproductsinput"></a>
<a id="schema_SearchProvisionedProductsInput"></a>
<a id="tocSsearchprovisionedproductsinput"></a>
<a id="tocssearchprovisionedproductsinput"></a>

```json
{
  "AcceptLanguage": {},
  "AccessLevelFilter": {
    "Key": {},
    "Value": {}
  },
  "Filters": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "SortBy": {},
  "SortOrder": {},
  "PageSize": {},
  "PageToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|AccessLevelFilter|object|false|none|none|
|Filters|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|
|PageSize|object|false|none|none|
|PageToken|object|false|none|none|

<h2 id="tocS_TerminateProvisionedProductOutput">TerminateProvisionedProductOutput</h2>
<!-- backwards compatibility -->
<a id="schematerminateprovisionedproductoutput"></a>
<a id="schema_TerminateProvisionedProductOutput"></a>
<a id="tocSterminateprovisionedproductoutput"></a>
<a id="tocsterminateprovisionedproductoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|

<h2 id="tocS_TerminateProvisionedProductInput">TerminateProvisionedProductInput</h2>
<!-- backwards compatibility -->
<a id="schematerminateprovisionedproductinput"></a>
<a id="schema_TerminateProvisionedProductInput"></a>
<a id="tocSterminateprovisionedproductinput"></a>
<a id="tocsterminateprovisionedproductinput"></a>

```json
{
  "ProvisionedProductName": {},
  "ProvisionedProductId": {},
  "TerminateToken": {},
  "IgnoreErrors": {},
  "AcceptLanguage": {},
  "RetainPhysicalResources": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductName|object|false|none|none|
|ProvisionedProductId|object|false|none|none|
|TerminateToken|object|true|none|none|
|IgnoreErrors|object|false|none|none|
|AcceptLanguage|object|false|none|none|
|RetainPhysicalResources|object|false|none|none|

<h2 id="tocS_UpdateConstraintOutput">UpdateConstraintOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconstraintoutput"></a>
<a id="schema_UpdateConstraintOutput"></a>
<a id="tocSupdateconstraintoutput"></a>
<a id="tocsupdateconstraintoutput"></a>

```json
{
  "ConstraintDetail": {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  },
  "ConstraintParameters": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstraintDetail|object|false|none|none|
|ConstraintParameters|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateConstraintInput">UpdateConstraintInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconstraintinput"></a>
<a id="schema_UpdateConstraintInput"></a>
<a id="tocSupdateconstraintinput"></a>
<a id="tocsupdateconstraintinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Description": {},
  "Parameters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|
|Description|object|false|none|none|
|Parameters|object|false|none|none|

<h2 id="tocS_UpdatePortfolioOutput">UpdatePortfolioOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportfoliooutput"></a>
<a id="schema_UpdatePortfolioOutput"></a>
<a id="tocSupdateportfoliooutput"></a>
<a id="tocsupdateportfoliooutput"></a>

```json
{
  "PortfolioDetail": {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioDetail|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdatePortfolioInput">UpdatePortfolioInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportfolioinput"></a>
<a id="schema_UpdatePortfolioInput"></a>
<a id="tocSupdateportfolioinput"></a>
<a id="tocsupdateportfolioinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "DisplayName": {},
  "Description": {},
  "ProviderName": {},
  "AddTags": {},
  "RemoveTags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|ProviderName|object|false|none|none|
|AddTags|object|false|none|none|
|RemoveTags|object|false|none|none|

<h2 id="tocS_UpdatePortfolioShareOutput">UpdatePortfolioShareOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportfolioshareoutput"></a>
<a id="schema_UpdatePortfolioShareOutput"></a>
<a id="tocSupdateportfolioshareoutput"></a>
<a id="tocsupdateportfolioshareoutput"></a>

```json
{
  "PortfolioShareToken": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PortfolioShareToken|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdatePortfolioShareInput">UpdatePortfolioShareInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateportfolioshareinput"></a>
<a id="schema_UpdatePortfolioShareInput"></a>
<a id="tocSupdateportfolioshareinput"></a>
<a id="tocsupdateportfolioshareinput"></a>

```json
{
  "AcceptLanguage": {},
  "PortfolioId": {},
  "AccountId": {},
  "OrganizationNode": {
    "Type": {},
    "Value": {}
  },
  "ShareTagOptions": {},
  "SharePrincipals": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|PortfolioId|object|true|none|none|
|AccountId|object|false|none|none|
|OrganizationNode|[OrganizationNode](#schemaorganizationnode)|false|none|Information about the organization node.|
|ShareTagOptions|object|false|none|none|
|SharePrincipals|object|false|none|none|

<h2 id="tocS_UpdateProductOutput">UpdateProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproductoutput"></a>
<a id="schema_UpdateProductOutput"></a>
<a id="tocSupdateproductoutput"></a>
<a id="tocsupdateproductoutput"></a>

```json
{
  "ProductViewDetail": {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewDetail|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateProductInput">UpdateProductInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateproductinput"></a>
<a id="schema_UpdateProductInput"></a>
<a id="tocSupdateproductinput"></a>
<a id="tocsupdateproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "Id": {},
  "Name": {},
  "Owner": {},
  "Description": {},
  "Distributor": {},
  "SupportDescription": {},
  "SupportEmail": {},
  "SupportUrl": {},
  "AddTags": {},
  "RemoveTags": {},
  "SourceConnection": {
    "Type": {},
    "ConnectionParameters": {
      "CodeStar": {
        "ConnectionArn": {},
        "Repository": {},
        "Branch": {},
        "ArtifactPath": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|Id|object|true|none|none|
|Name|object|false|none|none|
|Owner|object|false|none|none|
|Description|object|false|none|none|
|Distributor|object|false|none|none|
|SupportDescription|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportUrl|object|false|none|none|
|AddTags|object|false|none|none|
|RemoveTags|object|false|none|none|
|SourceConnection|object|false|none|none|

<h2 id="tocS_UpdateProvisionedProductOutput">UpdateProvisionedProductOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisionedproductoutput"></a>
<a id="schema_UpdateProvisionedProductOutput"></a>
<a id="tocSupdateprovisionedproductoutput"></a>
<a id="tocsupdateprovisionedproductoutput"></a>

```json
{
  "RecordDetail": {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordDetail|object|false|none|none|

<h2 id="tocS_UpdateProvisionedProductInput">UpdateProvisionedProductInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisionedproductinput"></a>
<a id="schema_UpdateProvisionedProductInput"></a>
<a id="tocSupdateprovisionedproductinput"></a>
<a id="tocsupdateprovisionedproductinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductName": {},
  "ProvisionedProductId": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "PathId": {},
  "PathName": {},
  "ProvisioningParameters": {},
  "ProvisioningPreferences": {
    "StackSetAccounts": {},
    "StackSetRegions": {},
    "StackSetFailureToleranceCount": {},
    "StackSetFailureTolerancePercentage": {},
    "StackSetMaxConcurrencyCount": {},
    "StackSetMaxConcurrencyPercentage": {},
    "StackSetOperationType": {}
  },
  "Tags": {},
  "UpdateToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisionedProductName|object|false|none|none|
|ProvisionedProductId|object|false|none|none|
|ProductId|object|false|none|none|
|ProductName|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ProvisioningArtifactName|object|false|none|none|
|PathId|object|false|none|none|
|PathName|object|false|none|none|
|ProvisioningParameters|object|false|none|none|
|ProvisioningPreferences|object|false|none|none|
|Tags|object|false|none|none|
|UpdateToken|object|true|none|none|

<h2 id="tocS_UpdateProvisionedProductPropertiesOutput">UpdateProvisionedProductPropertiesOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisionedproductpropertiesoutput"></a>
<a id="schema_UpdateProvisionedProductPropertiesOutput"></a>
<a id="tocSupdateprovisionedproductpropertiesoutput"></a>
<a id="tocsupdateprovisionedproductpropertiesoutput"></a>

```json
{
  "ProvisionedProductId": {},
  "ProvisionedProductProperties": {
    "property1": "string",
    "property2": "string"
  },
  "RecordId": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedProductId|object|false|none|none|
|ProvisionedProductProperties|object|false|none|none|
|RecordId|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateProvisionedProductPropertiesInput">UpdateProvisionedProductPropertiesInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisionedproductpropertiesinput"></a>
<a id="schema_UpdateProvisionedProductPropertiesInput"></a>
<a id="tocSupdateprovisionedproductpropertiesinput"></a>
<a id="tocsupdateprovisionedproductpropertiesinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProvisionedProductId": {},
  "ProvisionedProductProperties": {
    "property1": "string",
    "property2": "string"
  },
  "IdempotencyToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProvisionedProductId|object|true|none|none|
|ProvisionedProductProperties|object|true|none|none|
|IdempotencyToken|object|true|none|none|

<h2 id="tocS_UpdateProvisioningArtifactOutput">UpdateProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisioningartifactoutput"></a>
<a id="schema_UpdateProvisioningArtifactOutput"></a>
<a id="tocSupdateprovisioningartifactoutput"></a>
<a id="tocsupdateprovisioningartifactoutput"></a>

```json
{
  "ProvisioningArtifactDetail": {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  },
  "Info": {
    "property1": "string",
    "property2": "string"
  },
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisioningArtifactDetail|object|false|none|none|
|Info|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateProvisioningArtifactInput">UpdateProvisioningArtifactInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisioningartifactinput"></a>
<a id="schema_UpdateProvisioningArtifactInput"></a>
<a id="tocSupdateprovisioningartifactinput"></a>
<a id="tocsupdateprovisioningartifactinput"></a>

```json
{
  "AcceptLanguage": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "Name": {},
  "Description": {},
  "Active": {},
  "Guidance": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AcceptLanguage|object|false|none|none|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Active|object|false|none|none|
|Guidance|object|false|none|none|

<h2 id="tocS_UpdateServiceActionOutput">UpdateServiceActionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceactionoutput"></a>
<a id="schema_UpdateServiceActionOutput"></a>
<a id="tocSupdateserviceactionoutput"></a>
<a id="tocsupdateserviceactionoutput"></a>

```json
{
  "ServiceActionDetail": {
    "ServiceActionSummary": {
      "Id": {},
      "Name": {},
      "Description": {},
      "DefinitionType": {}
    },
    "Definition": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionDetail|object|false|none|none|

<h2 id="tocS_UpdateServiceActionInput">UpdateServiceActionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceactioninput"></a>
<a id="schema_UpdateServiceActionInput"></a>
<a id="tocSupdateserviceactioninput"></a>
<a id="tocsupdateserviceactioninput"></a>

```json
{
  "Id": {},
  "Name": {},
  "Definition": {
    "property1": "string",
    "property2": "string"
  },
  "Description": {},
  "AcceptLanguage": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|false|none|none|
|Definition|object|false|none|none|
|Description|object|false|none|none|
|AcceptLanguage|object|false|none|none|

<h2 id="tocS_UpdateTagOptionOutput">UpdateTagOptionOutput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagoptionoutput"></a>
<a id="schema_UpdateTagOptionOutput"></a>
<a id="tocSupdatetagoptionoutput"></a>
<a id="tocsupdatetagoptionoutput"></a>

```json
{
  "TagOptionDetail": {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagOptionDetail|object|false|none|none|

<h2 id="tocS_UpdateTagOptionInput">UpdateTagOptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagoptioninput"></a>
<a id="schema_UpdateTagOptionInput"></a>
<a id="tocSupdatetagoptioninput"></a>
<a id="tocsupdatetagoptioninput"></a>

```json
{
  "Id": {},
  "Value": {},
  "Active": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Value|object|false|none|none|
|Active|object|false|none|none|

<h2 id="tocS_AcceptLanguage">AcceptLanguage</h2>
<!-- backwards compatibility -->
<a id="schemaacceptlanguage"></a>
<a id="schema_AcceptLanguage"></a>
<a id="tocSacceptlanguage"></a>
<a id="tocsacceptlanguage"></a>

```json
"string"
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_PortfolioShareType">PortfolioShareType</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliosharetype"></a>
<a id="schema_PortfolioShareType"></a>
<a id="tocSportfoliosharetype"></a>
<a id="tocsportfoliosharetype"></a>

```json
"IMPORTED"
```

<h2 id="tocS_AccessLevelFilterKey">AccessLevelFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslevelfilterkey"></a>
<a id="schema_AccessLevelFilterKey"></a>
<a id="tocSaccesslevelfilterkey"></a>
<a id="tocsaccesslevelfilterkey"></a>

```json
"Account"
```

<h2 id="tocS_AccessLevelFilterValue">AccessLevelFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslevelfiltervalue"></a>
<a id="schema_AccessLevelFilterValue"></a>
<a id="tocSaccesslevelfiltervalue"></a>
<a id="tocsaccesslevelfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_AccessLevelFilter">AccessLevelFilter</h2>
<!-- backwards compatibility -->
<a id="schemaaccesslevelfilter"></a>
<a id="schema_AccessLevelFilter"></a>
<a id="tocSaccesslevelfilter"></a>
<a id="tocsaccesslevelfilter"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

The access level to use to filter results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_AccessStatus">AccessStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccessstatus"></a>
<a id="schema_AccessStatus"></a>
<a id="tocSaccessstatus"></a>
<a id="tocsaccessstatus"></a>

```json
"ENABLED"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountIds">AccountIds</h2>
<!-- backwards compatibility -->
<a id="schemaaccountids"></a>
<a id="schema_AccountIds"></a>
<a id="tocSaccountids"></a>
<a id="tocsaccountids"></a>

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

Information about a tag. A tag is a key-value pair. Tags are propagated to the resources created when provisioning a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_AddTags">AddTags</h2>
<!-- backwards compatibility -->
<a id="schemaaddtags"></a>
<a id="schema_AddTags"></a>
<a id="tocSaddtags"></a>
<a id="tocsaddtags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
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

<h2 id="tocS_AllowedValues">AllowedValues</h2>
<!-- backwards compatibility -->
<a id="schemaallowedvalues"></a>
<a id="schema_AllowedValues"></a>
<a id="tocSallowedvalues"></a>
<a id="tocsallowedvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApproximateCount">ApproximateCount</h2>
<!-- backwards compatibility -->
<a id="schemaapproximatecount"></a>
<a id="schema_ApproximateCount"></a>
<a id="tocSapproximatecount"></a>
<a id="tocsapproximatecount"></a>

```json
0
```

<h2 id="tocS_BudgetName">BudgetName</h2>
<!-- backwards compatibility -->
<a id="schemabudgetname"></a>
<a id="schema_BudgetName"></a>
<a id="tocSbudgetname"></a>
<a id="tocsbudgetname"></a>

```json
"string"
```

<h2 id="tocS_PrincipalARN">PrincipalARN</h2>
<!-- backwards compatibility -->
<a id="schemaprincipalarn"></a>
<a id="schema_PrincipalARN"></a>
<a id="tocSprincipalarn"></a>
<a id="tocsprincipalarn"></a>

```json
"string"
```

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"IAM"
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

<h2 id="tocS_TagOptionId">TagOptionId</h2>
<!-- backwards compatibility -->
<a id="schematagoptionid"></a>
<a id="schema_TagOptionId"></a>
<a id="tocStagoptionid"></a>
<a id="tocstagoptionid"></a>

```json
"string"
```

<h2 id="tocS_AttributeValue">AttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaattributevalue"></a>
<a id="schema_AttributeValue"></a>
<a id="tocSattributevalue"></a>
<a id="tocsattributevalue"></a>

```json
"string"
```

<h2 id="tocS_ServiceActionAssociations">ServiceActionAssociations</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionassociations"></a>
<a id="schema_ServiceActionAssociations"></a>
<a id="tocSserviceactionassociations"></a>
<a id="tocsserviceactionassociations"></a>

```json
[
  {
    "ServiceActionId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {}
  }
]
```

<h2 id="tocS_FailedServiceActionAssociations">FailedServiceActionAssociations</h2>
<!-- backwards compatibility -->
<a id="schemafailedserviceactionassociations"></a>
<a id="schema_FailedServiceActionAssociations"></a>
<a id="tocSfailedserviceactionassociations"></a>
<a id="tocsfailedserviceactionassociations"></a>

```json
[
  {
    "ServiceActionId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
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

<h2 id="tocS_BudgetDetail">BudgetDetail</h2>
<!-- backwards compatibility -->
<a id="schemabudgetdetail"></a>
<a id="schema_BudgetDetail"></a>
<a id="tocSbudgetdetail"></a>
<a id="tocsbudgetdetail"></a>

```json
{
  "BudgetName": {}
}
```

Information about a budget.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BudgetName|object|false|none|none|

<h2 id="tocS_Budgets">Budgets</h2>
<!-- backwards compatibility -->
<a id="schemabudgets"></a>
<a id="schema_Budgets"></a>
<a id="tocSbudgets"></a>
<a id="tocsbudgets"></a>

```json
[
  {
    "BudgetName": {}
  }
]
```

<h2 id="tocS_CausingEntity">CausingEntity</h2>
<!-- backwards compatibility -->
<a id="schemacausingentity"></a>
<a id="schema_CausingEntity"></a>
<a id="tocScausingentity"></a>
<a id="tocscausingentity"></a>

```json
"string"
```

<h2 id="tocS_ChangeAction">ChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemachangeaction"></a>
<a id="schema_ChangeAction"></a>
<a id="tocSchangeaction"></a>
<a id="tocschangeaction"></a>

```json
"ADD"
```

<h2 id="tocS_CloudWatchDashboardName">CloudWatchDashboardName</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdashboardname"></a>
<a id="schema_CloudWatchDashboardName"></a>
<a id="tocScloudwatchdashboardname"></a>
<a id="tocscloudwatchdashboardname"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchDashboard">CloudWatchDashboard</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdashboard"></a>
<a id="schema_CloudWatchDashboard"></a>
<a id="tocScloudwatchdashboard"></a>
<a id="tocscloudwatchdashboard"></a>

```json
{
  "Name": {}
}
```

Information about a CloudWatch dashboard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|

<h2 id="tocS_CloudWatchDashboards">CloudWatchDashboards</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchdashboards"></a>
<a id="schema_CloudWatchDashboards"></a>
<a id="tocScloudwatchdashboards"></a>
<a id="tocscloudwatchdashboards"></a>

```json
[
  {
    "Name": {}
  }
]
```

<h2 id="tocS_CodeStarConnectionArn">CodeStarConnectionArn</h2>
<!-- backwards compatibility -->
<a id="schemacodestarconnectionarn"></a>
<a id="schema_CodeStarConnectionArn"></a>
<a id="tocScodestarconnectionarn"></a>
<a id="tocscodestarconnectionarn"></a>

```json
"string"
```

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
"string"
```

<h2 id="tocS_RepositoryBranch">RepositoryBranch</h2>
<!-- backwards compatibility -->
<a id="schemarepositorybranch"></a>
<a id="schema_RepositoryBranch"></a>
<a id="tocSrepositorybranch"></a>
<a id="tocsrepositorybranch"></a>

```json
"string"
```

<h2 id="tocS_RepositoryArtifactPath">RepositoryArtifactPath</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryartifactpath"></a>
<a id="schema_RepositoryArtifactPath"></a>
<a id="tocSrepositoryartifactpath"></a>
<a id="tocsrepositoryartifactpath"></a>

```json
"string"
```

<h2 id="tocS_CodeStarParameters">CodeStarParameters</h2>
<!-- backwards compatibility -->
<a id="schemacodestarparameters"></a>
<a id="schema_CodeStarParameters"></a>
<a id="tocScodestarparameters"></a>
<a id="tocscodestarparameters"></a>

```json
{
  "ConnectionArn": {},
  "Repository": {},
  "Branch": {},
  "ArtifactPath": {}
}
```

The subtype containing details about the Codestar connection <code>Type</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|true|none|none|
|Repository|object|true|none|none|
|Branch|object|true|none|none|
|ArtifactPath|object|true|none|none|

<h2 id="tocS_ConstraintDescription">ConstraintDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintdescription"></a>
<a id="schema_ConstraintDescription"></a>
<a id="tocSconstraintdescription"></a>
<a id="tocsconstraintdescription"></a>

```json
"string"
```

<h2 id="tocS_ConstraintType">ConstraintType</h2>
<!-- backwards compatibility -->
<a id="schemaconstrainttype"></a>
<a id="schema_ConstraintType"></a>
<a id="tocSconstrainttype"></a>
<a id="tocsconstrainttype"></a>

```json
"string"
```

<h2 id="tocS_ConstraintDetail">ConstraintDetail</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintdetail"></a>
<a id="schema_ConstraintDetail"></a>
<a id="tocSconstraintdetail"></a>
<a id="tocsconstraintdetail"></a>

```json
{
  "ConstraintId": {},
  "Type": {},
  "Description": {},
  "Owner": {},
  "ProductId": {},
  "PortfolioId": {}
}
```

Information about a constraint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstraintId|object|false|none|none|
|Type|object|false|none|none|
|Description|object|false|none|none|
|Owner|object|false|none|none|
|ProductId|object|false|none|none|
|PortfolioId|object|false|none|none|

<h2 id="tocS_ConstraintDetails">ConstraintDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintdetails"></a>
<a id="schema_ConstraintDetails"></a>
<a id="tocSconstraintdetails"></a>
<a id="tocsconstraintdetails"></a>

```json
[
  {
    "ConstraintId": {},
    "Type": {},
    "Description": {},
    "Owner": {},
    "ProductId": {},
    "PortfolioId": {}
  }
]
```

<h2 id="tocS_ConstraintParameters">ConstraintParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintparameters"></a>
<a id="schema_ConstraintParameters"></a>
<a id="tocSconstraintparameters"></a>
<a id="tocsconstraintparameters"></a>

```json
"string"
```

<h2 id="tocS_ConstraintSummary">ConstraintSummary</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintsummary"></a>
<a id="schema_ConstraintSummary"></a>
<a id="tocSconstraintsummary"></a>
<a id="tocsconstraintsummary"></a>

```json
{
  "Type": {},
  "Description": {}
}
```

Summary information about a constraint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ConstraintSummaries">ConstraintSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintsummaries"></a>
<a id="schema_ConstraintSummaries"></a>
<a id="tocSconstraintsummaries"></a>
<a id="tocsconstraintsummaries"></a>

```json
[
  {
    "Type": {},
    "Description": {}
  }
]
```

<h2 id="tocS_CopyOption">CopyOption</h2>
<!-- backwards compatibility -->
<a id="schemacopyoption"></a>
<a id="schema_CopyOption"></a>
<a id="tocScopyoption"></a>
<a id="tocscopyoption"></a>

```json
"CopyTags"
```

<h2 id="tocS_CopyOptions">CopyOptions</h2>
<!-- backwards compatibility -->
<a id="schemacopyoptions"></a>
<a id="schema_CopyOptions"></a>
<a id="tocScopyoptions"></a>
<a id="tocscopyoptions"></a>

```json
[
  "CopyTags"
]
```

<h2 id="tocS_ProductArn">ProductArn</h2>
<!-- backwards compatibility -->
<a id="schemaproductarn"></a>
<a id="schema_ProductArn"></a>
<a id="tocSproductarn"></a>
<a id="tocsproductarn"></a>

```json
"string"
```

<h2 id="tocS_ProductViewName">ProductViewName</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewname"></a>
<a id="schema_ProductViewName"></a>
<a id="tocSproductviewname"></a>
<a id="tocsproductviewname"></a>

```json
"string"
```

<h2 id="tocS_SourceProvisioningArtifactProperties">SourceProvisioningArtifactProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourceprovisioningartifactproperties"></a>
<a id="schema_SourceProvisioningArtifactProperties"></a>
<a id="tocSsourceprovisioningartifactproperties"></a>
<a id="tocssourceprovisioningartifactproperties"></a>

```json
[
  {
    "property1": "string",
    "property2": "string"
  }
]
```

<h2 id="tocS_IdempotencyToken">IdempotencyToken</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencytoken"></a>
<a id="schema_IdempotencyToken"></a>
<a id="tocSidempotencytoken"></a>
<a id="tocsidempotencytoken"></a>

```json
"string"
```

<h2 id="tocS_CopyProductStatus">CopyProductStatus</h2>
<!-- backwards compatibility -->
<a id="schemacopyproductstatus"></a>
<a id="schema_CopyProductStatus"></a>
<a id="tocScopyproductstatus"></a>
<a id="tocscopyproductstatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_PortfolioDisplayName">PortfolioDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliodisplayname"></a>
<a id="schema_PortfolioDisplayName"></a>
<a id="tocSportfoliodisplayname"></a>
<a id="tocsportfoliodisplayname"></a>

```json
"string"
```

<h2 id="tocS_PortfolioDescription">PortfolioDescription</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliodescription"></a>
<a id="schema_PortfolioDescription"></a>
<a id="tocSportfoliodescription"></a>
<a id="tocsportfoliodescription"></a>

```json
"string"
```

<h2 id="tocS_ProviderName">ProviderName</h2>
<!-- backwards compatibility -->
<a id="schemaprovidername"></a>
<a id="schema_ProviderName"></a>
<a id="tocSprovidername"></a>
<a id="tocsprovidername"></a>

```json
"string"
```

<h2 id="tocS_PortfolioDetail">PortfolioDetail</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliodetail"></a>
<a id="schema_PortfolioDetail"></a>
<a id="tocSportfoliodetail"></a>
<a id="tocsportfoliodetail"></a>

```json
{
  "Id": {},
  "ARN": {},
  "DisplayName": {},
  "Description": {},
  "CreatedTime": {},
  "ProviderName": {}
}
```

Information about a portfolio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ARN|object|false|none|none|
|DisplayName|object|false|none|none|
|Description|object|false|none|none|
|CreatedTime|object|false|none|none|
|ProviderName|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_OrganizationNode">OrganizationNode</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnode"></a>
<a id="schema_OrganizationNode"></a>
<a id="tocSorganizationnode"></a>
<a id="tocsorganizationnode"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

Information about the organization node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_ProductViewOwner">ProductViewOwner</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewowner"></a>
<a id="schema_ProductViewOwner"></a>
<a id="tocSproductviewowner"></a>
<a id="tocsproductviewowner"></a>

```json
"string"
```

<h2 id="tocS_ProductViewShortDescription">ProductViewShortDescription</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewshortdescription"></a>
<a id="schema_ProductViewShortDescription"></a>
<a id="tocSproductviewshortdescription"></a>
<a id="tocsproductviewshortdescription"></a>

```json
"string"
```

<h2 id="tocS_SupportDescription">SupportDescription</h2>
<!-- backwards compatibility -->
<a id="schemasupportdescription"></a>
<a id="schema_SupportDescription"></a>
<a id="tocSsupportdescription"></a>
<a id="tocssupportdescription"></a>

```json
"string"
```

<h2 id="tocS_SupportEmail">SupportEmail</h2>
<!-- backwards compatibility -->
<a id="schemasupportemail"></a>
<a id="schema_SupportEmail"></a>
<a id="tocSsupportemail"></a>
<a id="tocssupportemail"></a>

```json
"string"
```

<h2 id="tocS_SupportUrl">SupportUrl</h2>
<!-- backwards compatibility -->
<a id="schemasupporturl"></a>
<a id="schema_SupportUrl"></a>
<a id="tocSsupporturl"></a>
<a id="tocssupporturl"></a>

```json
"string"
```

<h2 id="tocS_ProductType">ProductType</h2>
<!-- backwards compatibility -->
<a id="schemaproducttype"></a>
<a id="schema_ProductType"></a>
<a id="tocSproducttype"></a>
<a id="tocsproducttype"></a>

```json
"CLOUD_FORMATION_TEMPLATE"
```

<h2 id="tocS_ProvisioningArtifactProperties">ProvisioningArtifactProperties</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactproperties"></a>
<a id="schema_ProvisioningArtifactProperties"></a>
<a id="tocSprovisioningartifactproperties"></a>
<a id="tocsprovisioningartifactproperties"></a>

```json
{
  "Name": {},
  "Description": {},
  "Info": {
    "property1": "string",
    "property2": "string"
  },
  "Type": {},
  "DisableTemplateValidation": {}
}
```

Information about a provisioning artifact (also known as a version) for a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Info|object|false|none|none|
|Type|object|false|none|none|
|DisableTemplateValidation|object|false|none|none|

<h2 id="tocS_SourceConnection">SourceConnection</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnection"></a>
<a id="schema_SourceConnection"></a>
<a id="tocSsourceconnection"></a>
<a id="tocssourceconnection"></a>

```json
{
  "Type": {},
  "ConnectionParameters": {
    "CodeStar": {
      "ConnectionArn": {},
      "Repository": {},
      "Branch": {},
      "ArtifactPath": {}
    }
  }
}
```

A top level <code>ProductViewDetail</code> response containing details about the product’s connection. Service Catalog returns this field for the <code>CreateProduct</code>, <code>UpdateProduct</code>, <code>DescribeProductAsAdmin</code>, and <code>SearchProductAsAdmin</code> APIs. This response contains the same fields as the <code>ConnectionParameters</code> request, with the addition of the <code>LastSync</code> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|ConnectionParameters|object|true|none|none|

<h2 id="tocS_ProductViewDetail">ProductViewDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewdetail"></a>
<a id="schema_ProductViewDetail"></a>
<a id="tocSproductviewdetail"></a>
<a id="tocsproductviewdetail"></a>

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "Status": {},
  "ProductARN": {},
  "CreatedTime": {},
  "SourceConnection": {
    "Type": {},
    "ConnectionParameters": {
      "CodeStar": {
        "ConnectionArn": {},
        "Repository": {},
        "Branch": {},
        "ArtifactPath": {}
      }
    },
    "LastSync": {
      "LastSyncTime": {},
      "LastSyncStatus": {},
      "LastSyncStatusMessage": {},
      "LastSuccessfulSyncTime": {},
      "LastSuccessfulSyncProvisioningArtifactId": {}
    }
  }
}
```

Information about a product view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewSummary|object|false|none|none|
|Status|object|false|none|none|
|ProductARN|object|false|none|none|
|CreatedTime|object|false|none|none|
|SourceConnection|object|false|none|none|

<h2 id="tocS_ProvisioningArtifactDetail">ProvisioningArtifactDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactdetail"></a>
<a id="schema_ProvisioningArtifactDetail"></a>
<a id="tocSprovisioningartifactdetail"></a>
<a id="tocsprovisioningartifactdetail"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "Type": {},
  "CreatedTime": {},
  "Active": {},
  "Guidance": {},
  "SourceRevision": {}
}
```

Information about a provisioning artifact (also known as a version) for a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Type|object|false|none|none|
|CreatedTime|object|false|none|none|
|Active|object|false|none|none|
|Guidance|object|false|none|none|
|SourceRevision|object|false|none|none|

<h2 id="tocS_ProvisionedProductPlanName">ProvisionedProductPlanName</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplanname"></a>
<a id="schema_ProvisionedProductPlanName"></a>
<a id="tocSprovisionedproductplanname"></a>
<a id="tocsprovisionedproductplanname"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductPlanType">ProvisionedProductPlanType</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplantype"></a>
<a id="schema_ProvisionedProductPlanType"></a>
<a id="tocSprovisionedproductplantype"></a>
<a id="tocsprovisionedproductplantype"></a>

```json
"CLOUDFORMATION"
```

<h2 id="tocS_NotificationArns">NotificationArns</h2>
<!-- backwards compatibility -->
<a id="schemanotificationarns"></a>
<a id="schema_NotificationArns"></a>
<a id="tocSnotificationarns"></a>
<a id="tocsnotificationarns"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProvisionedProductName">ProvisionedProductName</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductname"></a>
<a id="schema_ProvisionedProductName"></a>
<a id="tocSprovisionedproductname"></a>
<a id="tocsprovisionedproductname"></a>

```json
"string"
```

<h2 id="tocS_UpdateProvisioningParameters">UpdateProvisioningParameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisioningparameters"></a>
<a id="schema_UpdateProvisioningParameters"></a>
<a id="tocSupdateprovisioningparameters"></a>
<a id="tocsupdateprovisioningparameters"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "UsePreviousValue": {}
  }
]
```

<h2 id="tocS_ProvisioningArtifactInfo">ProvisioningArtifactInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactinfo"></a>
<a id="schema_ProvisioningArtifactInfo"></a>
<a id="tocSprovisioningartifactinfo"></a>
<a id="tocsprovisioningartifactinfo"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ProvisioningArtifactInfoValue](#schemaprovisioningartifactinfovalue)|false|none|none|

<h2 id="tocS_ServiceActionName">ServiceActionName</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionname"></a>
<a id="schema_ServiceActionName"></a>
<a id="tocSserviceactionname"></a>
<a id="tocsserviceactionname"></a>

```json
"string"
```

<h2 id="tocS_ServiceActionDefinitionType">ServiceActionDefinitionType</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondefinitiontype"></a>
<a id="schema_ServiceActionDefinitionType"></a>
<a id="tocSserviceactiondefinitiontype"></a>
<a id="tocsserviceactiondefinitiontype"></a>

```json
"SSM_AUTOMATION"
```

<h2 id="tocS_ServiceActionDefinitionMap">ServiceActionDefinitionMap</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondefinitionmap"></a>
<a id="schema_ServiceActionDefinitionMap"></a>
<a id="tocSserviceactiondefinitionmap"></a>
<a id="tocsserviceactiondefinitionmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ServiceActionDefinitionValue](#schemaserviceactiondefinitionvalue)|false|none|none|

<h2 id="tocS_ServiceActionDescription">ServiceActionDescription</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondescription"></a>
<a id="schema_ServiceActionDescription"></a>
<a id="tocSserviceactiondescription"></a>
<a id="tocsserviceactiondescription"></a>

```json
"string"
```

<h2 id="tocS_ServiceActionDetail">ServiceActionDetail</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondetail"></a>
<a id="schema_ServiceActionDetail"></a>
<a id="tocSserviceactiondetail"></a>
<a id="tocsserviceactiondetail"></a>

```json
{
  "ServiceActionSummary": {
    "Id": {},
    "Name": {},
    "Description": {},
    "DefinitionType": {}
  },
  "Definition": {
    "property1": "string",
    "property2": "string"
  }
}
```

An object containing detailed information about the self-service action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionSummary|object|false|none|none|
|Definition|object|false|none|none|

<h2 id="tocS_TagOptionKey">TagOptionKey</h2>
<!-- backwards compatibility -->
<a id="schematagoptionkey"></a>
<a id="schema_TagOptionKey"></a>
<a id="tocStagoptionkey"></a>
<a id="tocstagoptionkey"></a>

```json
"string"
```

<h2 id="tocS_TagOptionValue">TagOptionValue</h2>
<!-- backwards compatibility -->
<a id="schematagoptionvalue"></a>
<a id="schema_TagOptionValue"></a>
<a id="tocStagoptionvalue"></a>
<a id="tocstagoptionvalue"></a>

```json
"string"
```

<h2 id="tocS_TagOptionDetail">TagOptionDetail</h2>
<!-- backwards compatibility -->
<a id="schematagoptiondetail"></a>
<a id="schema_TagOptionDetail"></a>
<a id="tocStagoptiondetail"></a>
<a id="tocstagoptiondetail"></a>

```json
{
  "Key": {},
  "Value": {},
  "Active": {},
  "Id": {},
  "Owner": {}
}
```

Information about a TagOption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|Active|object|false|none|none|
|Id|object|false|none|none|
|Owner|object|false|none|none|

<h2 id="tocS_CreatedTime">CreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemacreatedtime"></a>
<a id="schema_CreatedTime"></a>
<a id="tocScreatedtime"></a>
<a id="tocscreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CreationTime">CreationTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationtime"></a>
<a id="schema_CreationTime"></a>
<a id="tocScreationtime"></a>
<a id="tocscreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DefaultValue">DefaultValue</h2>
<!-- backwards compatibility -->
<a id="schemadefaultvalue"></a>
<a id="schema_DefaultValue"></a>
<a id="tocSdefaultvalue"></a>
<a id="tocsdefaultvalue"></a>

```json
"string"
```

<h2 id="tocS_IgnoreErrors">IgnoreErrors</h2>
<!-- backwards compatibility -->
<a id="schemaignoreerrors"></a>
<a id="schema_IgnoreErrors"></a>
<a id="tocSignoreerrors"></a>
<a id="tocsignoreerrors"></a>

```json
true
```

<h2 id="tocS_StatusDetail">StatusDetail</h2>
<!-- backwards compatibility -->
<a id="schemastatusdetail"></a>
<a id="schema_StatusDetail"></a>
<a id="tocSstatusdetail"></a>
<a id="tocsstatusdetail"></a>

```json
"string"
```

<h2 id="tocS_TagOptionDetails">TagOptionDetails</h2>
<!-- backwards compatibility -->
<a id="schematagoptiondetails"></a>
<a id="schema_TagOptionDetails"></a>
<a id="tocStagoptiondetails"></a>
<a id="tocstagoptiondetails"></a>

```json
[
  {
    "Key": {},
    "Value": {},
    "Active": {},
    "Id": {},
    "Owner": {}
  }
]
```

<h2 id="tocS_OrganizationNodeValue">OrganizationNodeValue</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnodevalue"></a>
<a id="schema_OrganizationNodeValue"></a>
<a id="tocSorganizationnodevalue"></a>
<a id="tocsorganizationnodevalue"></a>

```json
"string"
```

<h2 id="tocS_ShareStatus">ShareStatus</h2>
<!-- backwards compatibility -->
<a id="schemasharestatus"></a>
<a id="schema_ShareStatus"></a>
<a id="tocSsharestatus"></a>
<a id="tocssharestatus"></a>

```json
"NOT_STARTED"
```

<h2 id="tocS_ShareDetails">ShareDetails</h2>
<!-- backwards compatibility -->
<a id="schemasharedetails"></a>
<a id="schema_ShareDetails"></a>
<a id="tocSsharedetails"></a>
<a id="tocssharedetails"></a>

```json
{
  "SuccessfulShares": {},
  "ShareErrors": {}
}
```

Information about the portfolio share operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuccessfulShares|object|false|none|none|
|ShareErrors|object|false|none|none|

<h2 id="tocS_DescribePortfolioShareType">DescribePortfolioShareType</h2>
<!-- backwards compatibility -->
<a id="schemadescribeportfoliosharetype"></a>
<a id="schema_DescribePortfolioShareType"></a>
<a id="tocSdescribeportfoliosharetype"></a>
<a id="tocsdescribeportfoliosharetype"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_PageToken">PageToken</h2>
<!-- backwards compatibility -->
<a id="schemapagetoken"></a>
<a id="schema_PageToken"></a>
<a id="tocSpagetoken"></a>
<a id="tocspagetoken"></a>

```json
"string"
```

<h2 id="tocS_PageSizeMax100">PageSizeMax100</h2>
<!-- backwards compatibility -->
<a id="schemapagesizemax100"></a>
<a id="schema_PageSizeMax100"></a>
<a id="tocSpagesizemax100"></a>
<a id="tocspagesizemax100"></a>

```json
0
```

<h2 id="tocS_PortfolioShareDetails">PortfolioShareDetails</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliosharedetails"></a>
<a id="schema_PortfolioShareDetails"></a>
<a id="tocSportfoliosharedetails"></a>
<a id="tocsportfoliosharedetails"></a>

```json
[
  {
    "PrincipalId": {},
    "Type": {},
    "Accepted": {},
    "ShareTagOptions": {},
    "SharePrincipals": {}
  }
]
```

<h2 id="tocS_ProvisioningArtifactSummaries">ProvisioningArtifactSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactsummaries"></a>
<a id="schema_ProvisioningArtifactSummaries"></a>
<a id="tocSprovisioningartifactsummaries"></a>
<a id="tocsprovisioningartifactsummaries"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "CreatedTime": {},
    "ProvisioningArtifactMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ProductViewSummary">ProductViewSummary</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewsummary"></a>
<a id="schema_ProductViewSummary"></a>
<a id="tocSproductviewsummary"></a>
<a id="tocsproductviewsummary"></a>

```json
{
  "Id": {},
  "ProductId": {},
  "Name": {},
  "Owner": {},
  "ShortDescription": {},
  "Type": {},
  "Distributor": {},
  "HasDefaultPath": {},
  "SupportEmail": {},
  "SupportDescription": {},
  "SupportUrl": {}
}
```

Summary information about a product view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ProductId|object|false|none|none|
|Name|object|false|none|none|
|Owner|object|false|none|none|
|ShortDescription|object|false|none|none|
|Type|object|false|none|none|
|Distributor|object|false|none|none|
|HasDefaultPath|object|false|none|none|
|SupportEmail|object|false|none|none|
|SupportDescription|object|false|none|none|
|SupportUrl|object|false|none|none|

<h2 id="tocS_ProvisioningArtifacts">ProvisioningArtifacts</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifacts"></a>
<a id="schema_ProvisioningArtifacts"></a>
<a id="tocSprovisioningartifacts"></a>
<a id="tocsprovisioningartifacts"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "CreatedTime": {},
    "Guidance": {}
  }
]
```

<h2 id="tocS_LaunchPaths">LaunchPaths</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpaths"></a>
<a id="schema_LaunchPaths"></a>
<a id="tocSlaunchpaths"></a>
<a id="tocslaunchpaths"></a>

```json
[
  {
    "Id": {},
    "Name": {}
  }
]
```

<h2 id="tocS_ProvisionedProductDetail">ProvisionedProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductdetail"></a>
<a id="schema_ProvisionedProductDetail"></a>
<a id="tocSprovisionedproductdetail"></a>
<a id="tocsprovisionedproductdetail"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Type": {},
  "Id": {},
  "Status": {},
  "StatusMessage": {},
  "CreatedTime": {},
  "IdempotencyToken": {},
  "LastRecordId": {},
  "LastProvisioningRecordId": {},
  "LastSuccessfulProvisioningRecordId": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "LaunchRoleArn": {}
}
```

Information about a provisioned product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|Id|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreatedTime|object|false|none|none|
|IdempotencyToken|object|false|none|none|
|LastRecordId|object|false|none|none|
|LastProvisioningRecordId|object|false|none|none|
|LastSuccessfulProvisioningRecordId|object|false|none|none|
|ProductId|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|LaunchRoleArn|object|false|none|none|

<h2 id="tocS_PageSize">PageSize</h2>
<!-- backwards compatibility -->
<a id="schemapagesize"></a>
<a id="schema_PageSize"></a>
<a id="tocSpagesize"></a>
<a id="tocspagesize"></a>

```json
0
```

<h2 id="tocS_ProvisionedProductPlanDetails">ProvisionedProductPlanDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplandetails"></a>
<a id="schema_ProvisionedProductPlanDetails"></a>
<a id="tocSprovisionedproductplandetails"></a>
<a id="tocsprovisionedproductplandetails"></a>

```json
{
  "CreatedTime": {},
  "PathId": {},
  "ProductId": {},
  "PlanName": {},
  "PlanId": {},
  "ProvisionProductId": {},
  "ProvisionProductName": {},
  "PlanType": {},
  "ProvisioningArtifactId": {},
  "Status": {},
  "UpdatedTime": {},
  "NotificationArns": {},
  "ProvisioningParameters": {},
  "Tags": {},
  "StatusMessage": {}
}
```

Information about a plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedTime|object|false|none|none|
|PathId|object|false|none|none|
|ProductId|object|false|none|none|
|PlanName|object|false|none|none|
|PlanId|object|false|none|none|
|ProvisionProductId|object|false|none|none|
|ProvisionProductName|object|false|none|none|
|PlanType|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|Status|object|false|none|none|
|UpdatedTime|object|false|none|none|
|NotificationArns|object|false|none|none|
|ProvisioningParameters|object|false|none|none|
|Tags|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_ResourceChanges">ResourceChanges</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechanges"></a>
<a id="schema_ResourceChanges"></a>
<a id="tocSresourcechanges"></a>
<a id="tocsresourcechanges"></a>

```json
[
  {
    "Action": {},
    "LogicalResourceId": {},
    "PhysicalResourceId": {},
    "ResourceType": {},
    "Replacement": {},
    "Scope": {},
    "Details": {}
  }
]
```

<h2 id="tocS_ProvisioningArtifactName">ProvisioningArtifactName</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactname"></a>
<a id="schema_ProvisioningArtifactName"></a>
<a id="tocSprovisioningartifactname"></a>
<a id="tocsprovisioningartifactname"></a>

```json
"string"
```

<h2 id="tocS_Verbose">Verbose</h2>
<!-- backwards compatibility -->
<a id="schemaverbose"></a>
<a id="schema_Verbose"></a>
<a id="tocSverbose"></a>
<a id="tocsverbose"></a>

```json
true
```

<h2 id="tocS_ProvisioningArtifactParameters">ProvisioningArtifactParameters</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactparameters"></a>
<a id="schema_ProvisioningArtifactParameters"></a>
<a id="tocSprovisioningartifactparameters"></a>
<a id="tocsprovisioningartifactparameters"></a>

```json
[
  {
    "ParameterKey": {},
    "DefaultValue": {},
    "ParameterType": {},
    "IsNoEcho": {},
    "Description": {},
    "ParameterConstraints": {
      "AllowedValues": {},
      "AllowedPattern": {},
      "ConstraintDescription": {},
      "MaxLength": {},
      "MinLength": {},
      "MaxValue": {},
      "MinValue": {}
    }
  }
]
```

<h2 id="tocS_UsageInstructions">UsageInstructions</h2>
<!-- backwards compatibility -->
<a id="schemausageinstructions"></a>
<a id="schema_UsageInstructions"></a>
<a id="tocSusageinstructions"></a>
<a id="tocsusageinstructions"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_TagOptionSummaries">TagOptionSummaries</h2>
<!-- backwards compatibility -->
<a id="schematagoptionsummaries"></a>
<a id="schema_TagOptionSummaries"></a>
<a id="tocStagoptionsummaries"></a>
<a id="tocstagoptionsummaries"></a>

```json
[
  {
    "Key": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ProvisioningArtifactPreferences">ProvisioningArtifactPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactpreferences"></a>
<a id="schema_ProvisioningArtifactPreferences"></a>
<a id="tocSprovisioningartifactpreferences"></a>
<a id="tocsprovisioningartifactpreferences"></a>

```json
{
  "StackSetAccounts": {},
  "StackSetRegions": {}
}
```

<p>The user-defined preferences that will be applied during product provisioning, unless overridden by <code>ProvisioningPreferences</code> or <code>UpdateProvisioningPreferences</code>.</p> <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a> in the <i>CloudFormation User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetAccounts|object|false|none|none|
|StackSetRegions|object|false|none|none|

<h2 id="tocS_ProvisioningArtifactOutputs">ProvisioningArtifactOutputs</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactoutputs"></a>
<a id="schema_ProvisioningArtifactOutputs"></a>
<a id="tocSprovisioningartifactoutputs"></a>
<a id="tocsprovisioningartifactoutputs"></a>

```json
[
  {
    "Key": {},
    "Description": {}
  }
]
```

<h2 id="tocS_RecordDetail">RecordDetail</h2>
<!-- backwards compatibility -->
<a id="schemarecorddetail"></a>
<a id="schema_RecordDetail"></a>
<a id="tocSrecorddetail"></a>
<a id="tocsrecorddetail"></a>

```json
{
  "RecordId": {},
  "ProvisionedProductName": {},
  "Status": {},
  "CreatedTime": {},
  "UpdatedTime": {},
  "ProvisionedProductType": {},
  "RecordType": {},
  "ProvisionedProductId": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "PathId": {},
  "RecordErrors": {},
  "RecordTags": {},
  "LaunchRoleArn": {}
}
```

Information about a request operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecordId|object|false|none|none|
|ProvisionedProductName|object|false|none|none|
|Status|object|false|none|none|
|CreatedTime|object|false|none|none|
|UpdatedTime|object|false|none|none|
|ProvisionedProductType|object|false|none|none|
|RecordType|object|false|none|none|
|ProvisionedProductId|object|false|none|none|
|ProductId|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|PathId|object|false|none|none|
|RecordErrors|object|false|none|none|
|RecordTags|object|false|none|none|
|LaunchRoleArn|object|false|none|none|

<h2 id="tocS_RecordOutputs">RecordOutputs</h2>
<!-- backwards compatibility -->
<a id="schemarecordoutputs"></a>
<a id="schema_RecordOutputs"></a>
<a id="tocSrecordoutputs"></a>
<a id="tocsrecordoutputs"></a>

```json
[
  {
    "OutputKey": {},
    "OutputValue": {},
    "Description": {}
  }
]
```

<h2 id="tocS_ExecutionParameters">ExecutionParameters</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparameters"></a>
<a id="schema_ExecutionParameters"></a>
<a id="tocSexecutionparameters"></a>
<a id="tocsexecutionparameters"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "DefaultValues": {}
  }
]
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_DisableTemplateValidation">DisableTemplateValidation</h2>
<!-- backwards compatibility -->
<a id="schemadisabletemplatevalidation"></a>
<a id="schema_DisableTemplateValidation"></a>
<a id="tocSdisabletemplatevalidation"></a>
<a id="tocsdisabletemplatevalidation"></a>

```json
true
```

<h2 id="tocS_EngineWorkflowFailureReason">EngineWorkflowFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemaengineworkflowfailurereason"></a>
<a id="schema_EngineWorkflowFailureReason"></a>
<a id="tocSengineworkflowfailurereason"></a>
<a id="tocsengineworkflowfailurereason"></a>

```json
"string"
```

<h2 id="tocS_UniqueTagResourceIdentifier">UniqueTagResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemauniquetagresourceidentifier"></a>
<a id="schema_UniqueTagResourceIdentifier"></a>
<a id="tocSuniquetagresourceidentifier"></a>
<a id="tocsuniquetagresourceidentifier"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

 The unique key-value pair for a tag that identifies provisioned product resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_EngineWorkflowResourceIdentifier">EngineWorkflowResourceIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaengineworkflowresourceidentifier"></a>
<a id="schema_EngineWorkflowResourceIdentifier"></a>
<a id="tocSengineworkflowresourceidentifier"></a>
<a id="tocsengineworkflowresourceidentifier"></a>

```json
{
  "UniqueTag": {
    "Key": {},
    "Value": {}
  }
}
```

 The ID for the provisioned product resources that are part of a resource group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UniqueTag|object|false|none|none|

<h2 id="tocS_EngineWorkflowStatus">EngineWorkflowStatus</h2>
<!-- backwards compatibility -->
<a id="schemaengineworkflowstatus"></a>
<a id="schema_EngineWorkflowStatus"></a>
<a id="tocSengineworkflowstatus"></a>
<a id="tocsengineworkflowstatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_EngineWorkflowToken">EngineWorkflowToken</h2>
<!-- backwards compatibility -->
<a id="schemaengineworkflowtoken"></a>
<a id="schema_EngineWorkflowToken"></a>
<a id="tocSengineworkflowtoken"></a>
<a id="tocsengineworkflowtoken"></a>

```json
"string"
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

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
"string"
```

<h2 id="tocS_ErrorDescription">ErrorDescription</h2>
<!-- backwards compatibility -->
<a id="schemaerrordescription"></a>
<a id="schema_ErrorDescription"></a>
<a id="tocSerrordescription"></a>
<a id="tocserrordescription"></a>

```json
"string"
```

<h2 id="tocS_EvaluationType">EvaluationType</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationtype"></a>
<a id="schema_EvaluationType"></a>
<a id="tocSevaluationtype"></a>
<a id="tocsevaluationtype"></a>

```json
"STATIC"
```

<h2 id="tocS_ExecutionParameterMap">ExecutionParameterMap</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparametermap"></a>
<a id="schema_ExecutionParameterMap"></a>
<a id="tocSexecutionparametermap"></a>
<a id="tocsexecutionparametermap"></a>

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
|**additionalProperties**|[ExecutionParameterValueList](#schemaexecutionparametervaluelist)|false|none|none|

<h2 id="tocS_ExecutionParameterKey">ExecutionParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparameterkey"></a>
<a id="schema_ExecutionParameterKey"></a>
<a id="tocSexecutionparameterkey"></a>
<a id="tocsexecutionparameterkey"></a>

```json
"string"
```

<h2 id="tocS_ExecutionParameterType">ExecutionParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparametertype"></a>
<a id="schema_ExecutionParameterType"></a>
<a id="tocSexecutionparametertype"></a>
<a id="tocsexecutionparametertype"></a>

```json
"string"
```

<h2 id="tocS_ExecutionParameterValueList">ExecutionParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparametervaluelist"></a>
<a id="schema_ExecutionParameterValueList"></a>
<a id="tocSexecutionparametervaluelist"></a>
<a id="tocsexecutionparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ExecutionParameter">ExecutionParameter</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparameter"></a>
<a id="schema_ExecutionParameter"></a>
<a id="tocSexecutionparameter"></a>
<a id="tocsexecutionparameter"></a>

```json
{
  "Name": {},
  "Type": {},
  "DefaultValues": {}
}
```

Details of an execution parameter value that is passed to a self-service action when executed on a provisioned product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|DefaultValues|object|false|none|none|

<h2 id="tocS_ExecutionParameterValue">ExecutionParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionparametervalue"></a>
<a id="schema_ExecutionParameterValue"></a>
<a id="tocSexecutionparametervalue"></a>
<a id="tocsexecutionparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ServiceActionAssociationErrorCode">ServiceActionAssociationErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionassociationerrorcode"></a>
<a id="schema_ServiceActionAssociationErrorCode"></a>
<a id="tocSserviceactionassociationerrorcode"></a>
<a id="tocsserviceactionassociationerrorcode"></a>

```json
"DUPLICATE_RESOURCE"
```

<h2 id="tocS_ServiceActionAssociationErrorMessage">ServiceActionAssociationErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionassociationerrormessage"></a>
<a id="schema_ServiceActionAssociationErrorMessage"></a>
<a id="tocSserviceactionassociationerrormessage"></a>
<a id="tocsserviceactionassociationerrormessage"></a>

```json
"string"
```

<h2 id="tocS_FailedServiceActionAssociation">FailedServiceActionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemafailedserviceactionassociation"></a>
<a id="schema_FailedServiceActionAssociation"></a>
<a id="tocSfailedserviceactionassociation"></a>
<a id="tocsfailedserviceactionassociation"></a>

```json
{
  "ServiceActionId": {},
  "ProductId": {},
  "ProvisioningArtifactId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

An object containing information about the error, along with identifying information about the self-service action and its associations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionId|object|false|none|none|
|ProductId|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_OutputKeys">OutputKeys</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkeys"></a>
<a id="schema_OutputKeys"></a>
<a id="tocSoutputkeys"></a>
<a id="tocsoutputkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HasDefaultPath">HasDefaultPath</h2>
<!-- backwards compatibility -->
<a id="schemahasdefaultpath"></a>
<a id="schema_HasDefaultPath"></a>
<a id="tocShasdefaultpath"></a>
<a id="tocshasdefaultpath"></a>

```json
true
```

<h2 id="tocS_PhysicalId">PhysicalId</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalid"></a>
<a id="schema_PhysicalId"></a>
<a id="tocSphysicalid"></a>
<a id="tocsphysicalid"></a>

```json
"string"
```

<h2 id="tocS_InstructionType">InstructionType</h2>
<!-- backwards compatibility -->
<a id="schemainstructiontype"></a>
<a id="schema_InstructionType"></a>
<a id="tocSinstructiontype"></a>
<a id="tocsinstructiontype"></a>

```json
"string"
```

<h2 id="tocS_InstructionValue">InstructionValue</h2>
<!-- backwards compatibility -->
<a id="schemainstructionvalue"></a>
<a id="schema_InstructionValue"></a>
<a id="tocSinstructionvalue"></a>
<a id="tocsinstructionvalue"></a>

```json
"string"
```

<h2 id="tocS_LastRequestId">LastRequestId</h2>
<!-- backwards compatibility -->
<a id="schemalastrequestid"></a>
<a id="schema_LastRequestId"></a>
<a id="tocSlastrequestid"></a>
<a id="tocslastrequestid"></a>

```json
"string"
```

<h2 id="tocS_LastSuccessfulSyncTime">LastSuccessfulSyncTime</h2>
<!-- backwards compatibility -->
<a id="schemalastsuccessfulsynctime"></a>
<a id="schema_LastSuccessfulSyncTime"></a>
<a id="tocSlastsuccessfulsynctime"></a>
<a id="tocslastsuccessfulsynctime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastSyncTime">LastSyncTime</h2>
<!-- backwards compatibility -->
<a id="schemalastsynctime"></a>
<a id="schema_LastSyncTime"></a>
<a id="tocSlastsynctime"></a>
<a id="tocslastsynctime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_LastSyncStatus">LastSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemalastsyncstatus"></a>
<a id="schema_LastSyncStatus"></a>
<a id="tocSlastsyncstatus"></a>
<a id="tocslastsyncstatus"></a>

```json
"SUCCEEDED"
```

<h2 id="tocS_LastSyncStatusMessage">LastSyncStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemalastsyncstatusmessage"></a>
<a id="schema_LastSyncStatusMessage"></a>
<a id="tocSlastsyncstatusmessage"></a>
<a id="tocslastsyncstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_LastSync">LastSync</h2>
<!-- backwards compatibility -->
<a id="schemalastsync"></a>
<a id="schema_LastSync"></a>
<a id="tocSlastsync"></a>
<a id="tocslastsync"></a>

```json
{
  "LastSyncTime": {},
  "LastSyncStatus": {},
  "LastSyncStatusMessage": {},
  "LastSuccessfulSyncTime": {},
  "LastSuccessfulSyncProvisioningArtifactId": {}
}
```

<p>Provides details about the product's connection sync and contains the following sub-fields. </p> <ul> <li> <p> <code>LastSyncTime</code> </p> </li> <li> <p> <code>LastSyncStatus</code> </p> </li> <li> <p> <code>LastSyncStatusMessage</code> </p> </li> <li> <p> <code>LastSuccessfulSyncTime</code> </p> </li> <li> <p> <code>LastSuccessfulSyncProvisioningArtifactID</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LastSyncTime|object|false|none|none|
|LastSyncStatus|object|false|none|none|
|LastSyncStatusMessage|object|false|none|none|
|LastSuccessfulSyncTime|object|false|none|none|
|LastSuccessfulSyncProvisioningArtifactId|object|false|none|none|

<h2 id="tocS_PortfolioName">PortfolioName</h2>
<!-- backwards compatibility -->
<a id="schemaportfolioname"></a>
<a id="schema_PortfolioName"></a>
<a id="tocSportfolioname"></a>
<a id="tocsportfolioname"></a>

```json
"string"
```

<h2 id="tocS_LaunchPath">LaunchPath</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpath"></a>
<a id="schema_LaunchPath"></a>
<a id="tocSlaunchpath"></a>
<a id="tocslaunchpath"></a>

```json
{
  "Id": {},
  "Name": {}
}
```

A launch path object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_LaunchPathSummary">LaunchPathSummary</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpathsummary"></a>
<a id="schema_LaunchPathSummary"></a>
<a id="tocSlaunchpathsummary"></a>
<a id="tocslaunchpathsummary"></a>

```json
{
  "Id": {},
  "ConstraintSummaries": {},
  "Tags": {},
  "Name": {}
}
```

Summary information about a product path for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ConstraintSummaries|object|false|none|none|
|Tags|object|false|none|none|
|Name|object|false|none|none|

<h2 id="tocS_LaunchPathSummaries">LaunchPathSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpathsummaries"></a>
<a id="schema_LaunchPathSummaries"></a>
<a id="tocSlaunchpathsummaries"></a>
<a id="tocslaunchpathsummaries"></a>

```json
[
  {
    "Id": {},
    "ConstraintSummaries": {},
    "Tags": {},
    "Name": {}
  }
]
```

<h2 id="tocS_PortfolioDetails">PortfolioDetails</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliodetails"></a>
<a id="schema_PortfolioDetails"></a>
<a id="tocSportfoliodetails"></a>
<a id="tocsportfoliodetails"></a>

```json
[
  {
    "Id": {},
    "ARN": {},
    "DisplayName": {},
    "Description": {},
    "CreatedTime": {},
    "ProviderName": {}
  }
]
```

<h2 id="tocS_OrganizationNodeType">OrganizationNodeType</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnodetype"></a>
<a id="schema_OrganizationNodeType"></a>
<a id="tocSorganizationnodetype"></a>
<a id="tocsorganizationnodetype"></a>

```json
"ORGANIZATION"
```

<h2 id="tocS_OrganizationNodes">OrganizationNodes</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationnodes"></a>
<a id="schema_OrganizationNodes"></a>
<a id="tocSorganizationnodes"></a>
<a id="tocsorganizationnodes"></a>

```json
[
  {
    "Type": {},
    "Value": {}
  }
]
```

<h2 id="tocS_Principals">Principals</h2>
<!-- backwards compatibility -->
<a id="schemaprincipals"></a>
<a id="schema_Principals"></a>
<a id="tocSprincipals"></a>
<a id="tocsprincipals"></a>

```json
[
  {
    "PrincipalARN": {},
    "PrincipalType": {}
  }
]
```

<h2 id="tocS_ProvisionedProductPlans">ProvisionedProductPlans</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplans"></a>
<a id="schema_ProvisionedProductPlans"></a>
<a id="tocSprovisionedproductplans"></a>
<a id="tocsprovisionedproductplans"></a>

```json
[
  {
    "PlanName": {},
    "PlanId": {},
    "ProvisionProductId": {},
    "ProvisionProductName": {},
    "PlanType": {},
    "ProvisioningArtifactId": {}
  }
]
```

<h2 id="tocS_ProvisioningArtifactViews">ProvisioningArtifactViews</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactviews"></a>
<a id="schema_ProvisioningArtifactViews"></a>
<a id="tocSprovisioningartifactviews"></a>
<a id="tocsprovisioningartifactviews"></a>

```json
[
  {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "ProvisioningArtifact": {
      "Id": {},
      "Name": {},
      "Description": {},
      "CreatedTime": {},
      "Guidance": {}
    }
  }
]
```

<h2 id="tocS_ProvisioningArtifactDetails">ProvisioningArtifactDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactdetails"></a>
<a id="schema_ProvisioningArtifactDetails"></a>
<a id="tocSprovisioningartifactdetails"></a>
<a id="tocsprovisioningartifactdetails"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "Type": {},
    "CreatedTime": {},
    "Active": {},
    "Guidance": {},
    "SourceRevision": {}
  }
]
```

<h2 id="tocS_ListRecordHistorySearchFilter">ListRecordHistorySearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistrecordhistorysearchfilter"></a>
<a id="schema_ListRecordHistorySearchFilter"></a>
<a id="tocSlistrecordhistorysearchfilter"></a>
<a id="tocslistrecordhistorysearchfilter"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

The search filter to use when listing history records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_RecordDetails">RecordDetails</h2>
<!-- backwards compatibility -->
<a id="schemarecorddetails"></a>
<a id="schema_RecordDetails"></a>
<a id="tocSrecorddetails"></a>
<a id="tocsrecorddetails"></a>

```json
[
  {
    "RecordId": {},
    "ProvisionedProductName": {},
    "Status": {},
    "CreatedTime": {},
    "UpdatedTime": {},
    "ProvisionedProductType": {},
    "RecordType": {},
    "ProvisionedProductId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "PathId": {},
    "RecordErrors": {},
    "RecordTags": {},
    "LaunchRoleArn": {}
  }
]
```

<h2 id="tocS_SearchFilterKey">SearchFilterKey</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilterkey"></a>
<a id="schema_SearchFilterKey"></a>
<a id="tocSsearchfilterkey"></a>
<a id="tocssearchfilterkey"></a>

```json
"string"
```

<h2 id="tocS_SearchFilterValue">SearchFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemasearchfiltervalue"></a>
<a id="schema_SearchFilterValue"></a>
<a id="tocSsearchfiltervalue"></a>
<a id="tocssearchfiltervalue"></a>

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
"string"
```

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
[
  {
    "Id": {},
    "ARN": {},
    "Name": {},
    "Description": {},
    "CreatedTime": {}
  }
]
```

<h2 id="tocS_ServiceActionSummaries">ServiceActionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionsummaries"></a>
<a id="schema_ServiceActionSummaries"></a>
<a id="tocSserviceactionsummaries"></a>
<a id="tocsserviceactionsummaries"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Description": {},
    "DefinitionType": {}
  }
]
```

<h2 id="tocS_StackInstances">StackInstances</h2>
<!-- backwards compatibility -->
<a id="schemastackinstances"></a>
<a id="schema_StackInstances"></a>
<a id="tocSstackinstances"></a>
<a id="tocsstackinstances"></a>

```json
[
  {
    "Account": {},
    "Region": {},
    "StackInstanceStatus": {}
  }
]
```

<h2 id="tocS_TagOptionActive">TagOptionActive</h2>
<!-- backwards compatibility -->
<a id="schematagoptionactive"></a>
<a id="schema_TagOptionActive"></a>
<a id="tocStagoptionactive"></a>
<a id="tocstagoptionactive"></a>

```json
true
```

<h2 id="tocS_ListTagOptionsFilters">ListTagOptionsFilters</h2>
<!-- backwards compatibility -->
<a id="schemalisttagoptionsfilters"></a>
<a id="schema_ListTagOptionsFilters"></a>
<a id="tocSlisttagoptionsfilters"></a>
<a id="tocslisttagoptionsfilters"></a>

```json
{
  "Key": {},
  "Value": {},
  "Active": {}
}
```

Filters to use when listing TagOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|Active|object|false|none|none|

<h2 id="tocS_LogicalResourceId">LogicalResourceId</h2>
<!-- backwards compatibility -->
<a id="schemalogicalresourceid"></a>
<a id="schema_LogicalResourceId"></a>
<a id="tocSlogicalresourceid"></a>
<a id="tocslogicalresourceid"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_Namespaces">Namespaces</h2>
<!-- backwards compatibility -->
<a id="schemanamespaces"></a>
<a id="schema_Namespaces"></a>
<a id="tocSnamespaces"></a>
<a id="tocsnamespaces"></a>

```json
[
  "string"
]
```

<h2 id="tocS_NoEcho">NoEcho</h2>
<!-- backwards compatibility -->
<a id="schemanoecho"></a>
<a id="schema_NoEcho"></a>
<a id="tocSnoecho"></a>
<a id="tocsnoecho"></a>

```json
true
```

<h2 id="tocS_NotificationArn">NotificationArn</h2>
<!-- backwards compatibility -->
<a id="schemanotificationarn"></a>
<a id="schema_NotificationArn"></a>
<a id="tocSnotificationarn"></a>
<a id="tocsnotificationarn"></a>

```json
"string"
```

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_OutputDescription">OutputDescription</h2>
<!-- backwards compatibility -->
<a id="schemaoutputdescription"></a>
<a id="schema_OutputDescription"></a>
<a id="tocSoutputdescription"></a>
<a id="tocsoutputdescription"></a>

```json
"string"
```

<h2 id="tocS_OutputKey">OutputKey</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkey"></a>
<a id="schema_OutputKey"></a>
<a id="tocSoutputkey"></a>
<a id="tocsoutputkey"></a>

```json
"string"
```

<h2 id="tocS_OutputValue">OutputValue</h2>
<!-- backwards compatibility -->
<a id="schemaoutputvalue"></a>
<a id="schema_OutputValue"></a>
<a id="tocSoutputvalue"></a>
<a id="tocsoutputvalue"></a>

```json
"string"
```

<h2 id="tocS_Owner">Owner</h2>
<!-- backwards compatibility -->
<a id="schemaowner"></a>
<a id="schema_Owner"></a>
<a id="tocSowner"></a>
<a id="tocsowner"></a>

```json
"string"
```

<h2 id="tocS_ParameterConstraints">ParameterConstraints</h2>
<!-- backwards compatibility -->
<a id="schemaparameterconstraints"></a>
<a id="schema_ParameterConstraints"></a>
<a id="tocSparameterconstraints"></a>
<a id="tocsparameterconstraints"></a>

```json
{
  "AllowedValues": {},
  "AllowedPattern": {},
  "ConstraintDescription": {},
  "MaxLength": {},
  "MinLength": {},
  "MaxValue": {},
  "MinValue": {}
}
```

The constraints that the administrator has put on the parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedValues|object|false|none|none|
|AllowedPattern|object|false|none|none|
|ConstraintDescription|object|false|none|none|
|MaxLength|object|false|none|none|
|MinLength|object|false|none|none|
|MaxValue|object|false|none|none|
|MinValue|object|false|none|none|

<h2 id="tocS_ParameterKey">ParameterKey</h2>
<!-- backwards compatibility -->
<a id="schemaparameterkey"></a>
<a id="schema_ParameterKey"></a>
<a id="tocSparameterkey"></a>
<a id="tocsparameterkey"></a>

```json
"string"
```

<h2 id="tocS_ParameterType">ParameterType</h2>
<!-- backwards compatibility -->
<a id="schemaparametertype"></a>
<a id="schema_ParameterType"></a>
<a id="tocSparametertype"></a>
<a id="tocsparametertype"></a>

```json
"string"
```

<h2 id="tocS_ParameterValue">ParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemaparametervalue"></a>
<a id="schema_ParameterValue"></a>
<a id="tocSparametervalue"></a>
<a id="tocsparametervalue"></a>

```json
"string"
```

<h2 id="tocS_PhysicalResourceId">PhysicalResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaphysicalresourceid"></a>
<a id="schema_PhysicalResourceId"></a>
<a id="tocSphysicalresourceid"></a>
<a id="tocsphysicalresourceid"></a>

```json
"string"
```

<h2 id="tocS_PlanResourceType">PlanResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaplanresourcetype"></a>
<a id="schema_PlanResourceType"></a>
<a id="tocSplanresourcetype"></a>
<a id="tocsplanresourcetype"></a>

```json
"string"
```

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_PortfolioShareDetail">PortfolioShareDetail</h2>
<!-- backwards compatibility -->
<a id="schemaportfoliosharedetail"></a>
<a id="schema_PortfolioShareDetail"></a>
<a id="tocSportfoliosharedetail"></a>
<a id="tocsportfoliosharedetail"></a>

```json
{
  "PrincipalId": {},
  "Type": {},
  "Accepted": {},
  "ShareTagOptions": {},
  "SharePrincipals": {}
}
```

Information about the portfolio share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalId|object|false|none|none|
|Type|object|false|none|none|
|Accepted|object|false|none|none|
|ShareTagOptions|object|false|none|none|
|SharePrincipals|object|false|none|none|

<h2 id="tocS_Principal">Principal</h2>
<!-- backwards compatibility -->
<a id="schemaprincipal"></a>
<a id="schema_Principal"></a>
<a id="tocSprincipal"></a>
<a id="tocsprincipal"></a>

```json
{
  "PrincipalARN": {},
  "PrincipalType": {}
}
```

Information about a principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalARN|object|false|none|none|
|PrincipalType|object|false|none|none|

<h2 id="tocS_ProductSource">ProductSource</h2>
<!-- backwards compatibility -->
<a id="schemaproductsource"></a>
<a id="schema_ProductSource"></a>
<a id="tocSproductsource"></a>
<a id="tocsproductsource"></a>

```json
"ACCOUNT"
```

<h2 id="tocS_ProductViewAggregationType">ProductViewAggregationType</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewaggregationtype"></a>
<a id="schema_ProductViewAggregationType"></a>
<a id="tocSproductviewaggregationtype"></a>
<a id="tocsproductviewaggregationtype"></a>

```json
"string"
```

<h2 id="tocS_ProductViewAggregationValue">ProductViewAggregationValue</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewaggregationvalue"></a>
<a id="schema_ProductViewAggregationValue"></a>
<a id="tocSproductviewaggregationvalue"></a>
<a id="tocsproductviewaggregationvalue"></a>

```json
{
  "Value": {},
  "ApproximateCount": {}
}
```

A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|ApproximateCount|object|false|none|none|

<h2 id="tocS_ProductViewAggregationValues">ProductViewAggregationValues</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewaggregationvalues"></a>
<a id="schema_ProductViewAggregationValues"></a>
<a id="tocSproductviewaggregationvalues"></a>
<a id="tocsproductviewaggregationvalues"></a>

```json
[
  {
    "Value": {},
    "ApproximateCount": {}
  }
]
```

<h2 id="tocS_ProductViewAggregations">ProductViewAggregations</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewaggregations"></a>
<a id="schema_ProductViewAggregations"></a>
<a id="tocSproductviewaggregations"></a>
<a id="tocsproductviewaggregations"></a>

```json
{
  "property1": [
    {
      "Value": {},
      "ApproximateCount": {}
    }
  ],
  "property2": [
    {
      "Value": {},
      "ApproximateCount": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ProductViewAggregationValues](#schemaproductviewaggregationvalues)|false|none|none|

<h2 id="tocS_SourceConnectionDetail">SourceConnectionDetail</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnectiondetail"></a>
<a id="schema_SourceConnectionDetail"></a>
<a id="tocSsourceconnectiondetail"></a>
<a id="tocssourceconnectiondetail"></a>

```json
{
  "Type": {},
  "ConnectionParameters": {
    "CodeStar": {
      "ConnectionArn": {},
      "Repository": {},
      "Branch": {},
      "ArtifactPath": {}
    }
  },
  "LastSync": {
    "LastSyncTime": {},
    "LastSyncStatus": {},
    "LastSyncStatusMessage": {},
    "LastSuccessfulSyncTime": {},
    "LastSuccessfulSyncProvisioningArtifactId": {}
  }
}
```

Provides details about the configured <code>SourceConnection</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|ConnectionParameters|object|false|none|none|
|LastSync|object|false|none|none|

<h2 id="tocS_ProductViewDetails">ProductViewDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewdetails"></a>
<a id="schema_ProductViewDetails"></a>
<a id="tocSproductviewdetails"></a>
<a id="tocsproductviewdetails"></a>

```json
[
  {
    "ProductViewSummary": {
      "Id": {},
      "ProductId": {},
      "Name": {},
      "Owner": {},
      "ShortDescription": {},
      "Type": {},
      "Distributor": {},
      "HasDefaultPath": {},
      "SupportEmail": {},
      "SupportDescription": {},
      "SupportUrl": {}
    },
    "Status": {},
    "ProductARN": {},
    "CreatedTime": {},
    "SourceConnection": {
      "Type": {},
      "ConnectionParameters": {
        "CodeStar": {
          "ConnectionArn": {},
          "Repository": {},
          "Branch": {},
          "ArtifactPath": {}
        }
      },
      "LastSync": {
        "LastSyncTime": {},
        "LastSyncStatus": {},
        "LastSyncStatusMessage": {},
        "LastSuccessfulSyncTime": {},
        "LastSuccessfulSyncProvisioningArtifactId": {}
      }
    }
  }
]
```

<h2 id="tocS_ProductViewDistributor">ProductViewDistributor</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewdistributor"></a>
<a id="schema_ProductViewDistributor"></a>
<a id="tocSproductviewdistributor"></a>
<a id="tocsproductviewdistributor"></a>

```json
"string"
```

<h2 id="tocS_ProductViewFilterBy">ProductViewFilterBy</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewfilterby"></a>
<a id="schema_ProductViewFilterBy"></a>
<a id="tocSproductviewfilterby"></a>
<a id="tocsproductviewfilterby"></a>

```json
"FullTextSearch"
```

<h2 id="tocS_ProductViewFilterValue">ProductViewFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewfiltervalue"></a>
<a id="schema_ProductViewFilterValue"></a>
<a id="tocSproductviewfiltervalue"></a>
<a id="tocsproductviewfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ProductViewFilterValues">ProductViewFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewfiltervalues"></a>
<a id="schema_ProductViewFilterValues"></a>
<a id="tocSproductviewfiltervalues"></a>
<a id="tocsproductviewfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProductViewFilters">ProductViewFilters</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewfilters"></a>
<a id="schema_ProductViewFilters"></a>
<a id="tocSproductviewfilters"></a>
<a id="tocsproductviewfilters"></a>

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
|**additionalProperties**|[ProductViewFilterValues](#schemaproductviewfiltervalues)|false|none|none|

<h2 id="tocS_ProductViewSortBy">ProductViewSortBy</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewsortby"></a>
<a id="schema_ProductViewSortBy"></a>
<a id="tocSproductviewsortby"></a>
<a id="tocsproductviewsortby"></a>

```json
"Title"
```

<h2 id="tocS_ProductViewSummaries">ProductViewSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaproductviewsummaries"></a>
<a id="schema_ProductViewSummaries"></a>
<a id="tocSproductviewsummaries"></a>
<a id="tocsproductviewsummaries"></a>

```json
[
  {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  }
]
```

<h2 id="tocS_PropertyKey">PropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemapropertykey"></a>
<a id="schema_PropertyKey"></a>
<a id="tocSpropertykey"></a>
<a id="tocspropertykey"></a>

```json
"OWNER"
```

<h2 id="tocS_PropertyName">PropertyName</h2>
<!-- backwards compatibility -->
<a id="schemapropertyname"></a>
<a id="schema_PropertyName"></a>
<a id="tocSpropertyname"></a>
<a id="tocspropertyname"></a>

```json
"string"
```

<h2 id="tocS_PropertyValue">PropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemapropertyvalue"></a>
<a id="schema_PropertyValue"></a>
<a id="tocSpropertyvalue"></a>
<a id="tocspropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningParameters">ProvisioningParameters</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningparameters"></a>
<a id="schema_ProvisioningParameters"></a>
<a id="tocSprovisioningparameters"></a>
<a id="tocsprovisioningparameters"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ProvisioningPreferences">ProvisioningPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningpreferences"></a>
<a id="schema_ProvisioningPreferences"></a>
<a id="tocSprovisioningpreferences"></a>
<a id="tocsprovisioningpreferences"></a>

```json
{
  "StackSetAccounts": {},
  "StackSetRegions": {},
  "StackSetFailureToleranceCount": {},
  "StackSetFailureTolerancePercentage": {},
  "StackSetMaxConcurrencyCount": {},
  "StackSetMaxConcurrencyPercentage": {}
}
```

<p>The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product type</p> <p>One or more Amazon Web Services accounts that will have access to the provisioned product.</p> <p>Applicable only to a <code>CFN_STACKSET</code> provisioned product type.</p> <p>The Amazon Web Services accounts specified should be within the list of accounts in the <code>STACKSET</code> constraint. To get the list of accounts in the <code>STACKSET</code> constraint, use the <code>DescribeProvisioningParameters</code> operation.</p> <p>If no values are specified, the default value is all accounts from the <code>STACKSET</code> constraint.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetAccounts|object|false|none|none|
|StackSetRegions|object|false|none|none|
|StackSetFailureToleranceCount|object|false|none|none|
|StackSetFailureTolerancePercentage|object|false|none|none|
|StackSetMaxConcurrencyCount|object|false|none|none|
|StackSetMaxConcurrencyPercentage|object|false|none|none|

<h2 id="tocS_ProvisionedProductNameOrArn">ProvisionedProductNameOrArn</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductnameorarn"></a>
<a id="schema_ProvisionedProductNameOrArn"></a>
<a id="tocSprovisionedproductnameorarn"></a>
<a id="tocsprovisionedproductnameorarn"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductType">ProvisionedProductType</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproducttype"></a>
<a id="schema_ProvisionedProductType"></a>
<a id="tocSprovisionedproducttype"></a>
<a id="tocsprovisionedproducttype"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductStatus">ProvisionedProductStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductstatus"></a>
<a id="schema_ProvisionedProductStatus"></a>
<a id="tocSprovisionedproductstatus"></a>
<a id="tocsprovisionedproductstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_ProvisionedProductStatusMessage">ProvisionedProductStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductstatusmessage"></a>
<a id="schema_ProvisionedProductStatusMessage"></a>
<a id="tocSprovisionedproductstatusmessage"></a>
<a id="tocsprovisionedproductstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_UserArn">UserArn</h2>
<!-- backwards compatibility -->
<a id="schemauserarn"></a>
<a id="schema_UserArn"></a>
<a id="tocSuserarn"></a>
<a id="tocsuserarn"></a>

```json
"string"
```

<h2 id="tocS_UserArnSession">UserArnSession</h2>
<!-- backwards compatibility -->
<a id="schemauserarnsession"></a>
<a id="schema_UserArnSession"></a>
<a id="tocSuserarnsession"></a>
<a id="tocsuserarnsession"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductAttribute">ProvisionedProductAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductattribute"></a>
<a id="schema_ProvisionedProductAttribute"></a>
<a id="tocSprovisionedproductattribute"></a>
<a id="tocsprovisionedproductattribute"></a>

```json
{
  "Name": {},
  "Arn": {},
  "Type": {},
  "Id": {},
  "Status": {},
  "StatusMessage": {},
  "CreatedTime": {},
  "IdempotencyToken": {},
  "LastRecordId": {},
  "LastProvisioningRecordId": {},
  "LastSuccessfulProvisioningRecordId": {},
  "Tags": {},
  "PhysicalId": {},
  "ProductId": {},
  "ProductName": {},
  "ProvisioningArtifactId": {},
  "ProvisioningArtifactName": {},
  "UserArn": {},
  "UserArnSession": {}
}
```

Information about a provisioned product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Arn|object|false|none|none|
|Type|object|false|none|none|
|Id|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreatedTime|object|false|none|none|
|IdempotencyToken|object|false|none|none|
|LastRecordId|object|false|none|none|
|LastProvisioningRecordId|object|false|none|none|
|LastSuccessfulProvisioningRecordId|object|false|none|none|
|Tags|object|false|none|none|
|PhysicalId|object|false|none|none|
|ProductId|object|false|none|none|
|ProductName|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|
|ProvisioningArtifactName|object|false|none|none|
|UserArn|object|false|none|none|
|UserArnSession|object|false|none|none|

<h2 id="tocS_ProvisionedProductAttributes">ProvisionedProductAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductattributes"></a>
<a id="schema_ProvisionedProductAttributes"></a>
<a id="tocSprovisionedproductattributes"></a>
<a id="tocsprovisionedproductattributes"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "Type": {},
    "Id": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedTime": {},
    "IdempotencyToken": {},
    "LastRecordId": {},
    "LastProvisioningRecordId": {},
    "LastSuccessfulProvisioningRecordId": {},
    "Tags": {},
    "PhysicalId": {},
    "ProductId": {},
    "ProductName": {},
    "ProvisioningArtifactId": {},
    "ProvisioningArtifactName": {},
    "UserArn": {},
    "UserArnSession": {}
  }
]
```

<h2 id="tocS_ProvisionedProductId">ProvisionedProductId</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductid"></a>
<a id="schema_ProvisionedProductId"></a>
<a id="tocSprovisionedproductid"></a>
<a id="tocsprovisionedproductid"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductDetails">ProvisionedProductDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductdetails"></a>
<a id="schema_ProvisionedProductDetails"></a>
<a id="tocSprovisionedproductdetails"></a>
<a id="tocsprovisionedproductdetails"></a>

```json
[
  {
    "Name": {},
    "Arn": {},
    "Type": {},
    "Id": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedTime": {},
    "IdempotencyToken": {},
    "LastRecordId": {},
    "LastProvisioningRecordId": {},
    "LastSuccessfulProvisioningRecordId": {},
    "ProductId": {},
    "ProvisioningArtifactId": {},
    "LaunchRoleArn": {}
  }
]
```

<h2 id="tocS_ProvisionedProductViewFilterValues">ProvisionedProductViewFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductviewfiltervalues"></a>
<a id="schema_ProvisionedProductViewFilterValues"></a>
<a id="tocSprovisionedproductviewfiltervalues"></a>
<a id="tocsprovisionedproductviewfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProvisionedProductFilters">ProvisionedProductFilters</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductfilters"></a>
<a id="schema_ProvisionedProductFilters"></a>
<a id="tocSprovisionedproductfilters"></a>
<a id="tocsprovisionedproductfilters"></a>

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
|**additionalProperties**|[ProvisionedProductViewFilterValues](#schemaprovisionedproductviewfiltervalues)|false|none|none|

<h2 id="tocS_ProvisionedProductPlanStatus">ProvisionedProductPlanStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplanstatus"></a>
<a id="schema_ProvisionedProductPlanStatus"></a>
<a id="tocSprovisionedproductplanstatus"></a>
<a id="tocsprovisionedproductplanstatus"></a>

```json
"CREATE_IN_PROGRESS"
```

<h2 id="tocS_UpdatedTime">UpdatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedtime"></a>
<a id="schema_UpdatedTime"></a>
<a id="tocSupdatedtime"></a>
<a id="tocsupdatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ProvisionedProductPlanSummary">ProvisionedProductPlanSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductplansummary"></a>
<a id="schema_ProvisionedProductPlanSummary"></a>
<a id="tocSprovisionedproductplansummary"></a>
<a id="tocsprovisionedproductplansummary"></a>

```json
{
  "PlanName": {},
  "PlanId": {},
  "ProvisionProductId": {},
  "ProvisionProductName": {},
  "PlanType": {},
  "ProvisioningArtifactId": {}
}
```

Summary information about a plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlanName|object|false|none|none|
|PlanId|object|false|none|none|
|ProvisionProductId|object|false|none|none|
|ProvisionProductName|object|false|none|none|
|PlanType|object|false|none|none|
|ProvisioningArtifactId|object|false|none|none|

<h2 id="tocS_ProvisionedProductProperties">ProvisionedProductProperties</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductproperties"></a>
<a id="schema_ProvisionedProductProperties"></a>
<a id="tocSprovisionedproductproperties"></a>
<a id="tocsprovisionedproductproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PropertyValue](#schemapropertyvalue)|false|none|none|

<h2 id="tocS_ProvisionedProductViewFilterBy">ProvisionedProductViewFilterBy</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductviewfilterby"></a>
<a id="schema_ProvisionedProductViewFilterBy"></a>
<a id="tocSprovisionedproductviewfilterby"></a>
<a id="tocsprovisionedproductviewfilterby"></a>

```json
"SearchQuery"
```

<h2 id="tocS_ProvisionedProductViewFilterValue">ProvisionedProductViewFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedproductviewfiltervalue"></a>
<a id="schema_ProvisionedProductViewFilterValue"></a>
<a id="tocSprovisionedproductviewfiltervalue"></a>
<a id="tocsprovisionedproductviewfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactDescription">ProvisioningArtifactDescription</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactdescription"></a>
<a id="schema_ProvisioningArtifactDescription"></a>
<a id="tocSprovisioningartifactdescription"></a>
<a id="tocsprovisioningartifactdescription"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactCreatedTime">ProvisioningArtifactCreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactcreatedtime"></a>
<a id="schema_ProvisioningArtifactCreatedTime"></a>
<a id="tocSprovisioningartifactcreatedtime"></a>
<a id="tocsprovisioningartifactcreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ProvisioningArtifactGuidance">ProvisioningArtifactGuidance</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactguidance"></a>
<a id="schema_ProvisioningArtifactGuidance"></a>
<a id="tocSprovisioningartifactguidance"></a>
<a id="tocsprovisioningartifactguidance"></a>

```json
"DEFAULT"
```

<h2 id="tocS_ProvisioningArtifact">ProvisioningArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifact"></a>
<a id="schema_ProvisioningArtifact"></a>
<a id="tocSprovisioningartifact"></a>
<a id="tocsprovisioningartifact"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "CreatedTime": {},
  "Guidance": {}
}
```

Information about a provisioning artifact. A provisioning artifact is also known as a product version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CreatedTime|object|false|none|none|
|Guidance|object|false|none|none|

<h2 id="tocS_ProvisioningArtifactActive">ProvisioningArtifactActive</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactactive"></a>
<a id="schema_ProvisioningArtifactActive"></a>
<a id="tocSprovisioningartifactactive"></a>
<a id="tocsprovisioningartifactactive"></a>

```json
true
```

<h2 id="tocS_ProvisioningArtifactType">ProvisioningArtifactType</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifacttype"></a>
<a id="schema_ProvisioningArtifactType"></a>
<a id="tocSprovisioningartifacttype"></a>
<a id="tocsprovisioningartifacttype"></a>

```json
"CLOUD_FORMATION_TEMPLATE"
```

<h2 id="tocS_SourceRevision">SourceRevision</h2>
<!-- backwards compatibility -->
<a id="schemasourcerevision"></a>
<a id="schema_SourceRevision"></a>
<a id="tocSsourcerevision"></a>
<a id="tocssourcerevision"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactInfoValue">ProvisioningArtifactInfoValue</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactinfovalue"></a>
<a id="schema_ProvisioningArtifactInfoValue"></a>
<a id="tocSprovisioningartifactinfovalue"></a>
<a id="tocsprovisioningartifactinfovalue"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactInfoKey">ProvisioningArtifactInfoKey</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactinfokey"></a>
<a id="schema_ProvisioningArtifactInfoKey"></a>
<a id="tocSprovisioningartifactinfokey"></a>
<a id="tocsprovisioningartifactinfokey"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactOutputKey">ProvisioningArtifactOutputKey</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactoutputkey"></a>
<a id="schema_ProvisioningArtifactOutputKey"></a>
<a id="tocSprovisioningartifactoutputkey"></a>
<a id="tocsprovisioningartifactoutputkey"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactOutput">ProvisioningArtifactOutput</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactoutput"></a>
<a id="schema_ProvisioningArtifactOutput"></a>
<a id="tocSprovisioningartifactoutput"></a>
<a id="tocsprovisioningartifactoutput"></a>

```json
{
  "Key": {},
  "Description": {}
}
```

Provisioning artifact output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_ProvisioningArtifactParameter">ProvisioningArtifactParameter</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactparameter"></a>
<a id="schema_ProvisioningArtifactParameter"></a>
<a id="tocSprovisioningartifactparameter"></a>
<a id="tocsprovisioningartifactparameter"></a>

```json
{
  "ParameterKey": {},
  "DefaultValue": {},
  "ParameterType": {},
  "IsNoEcho": {},
  "Description": {},
  "ParameterConstraints": {
    "AllowedValues": {},
    "AllowedPattern": {},
    "ConstraintDescription": {},
    "MaxLength": {},
    "MinLength": {},
    "MaxValue": {},
    "MinValue": {}
  }
}
```

Information about a parameter used to provision a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ParameterKey|object|false|none|none|
|DefaultValue|object|false|none|none|
|ParameterType|object|false|none|none|
|IsNoEcho|object|false|none|none|
|Description|object|false|none|none|
|ParameterConstraints|object|false|none|none|

<h2 id="tocS_StackSetAccounts">StackSetAccounts</h2>
<!-- backwards compatibility -->
<a id="schemastacksetaccounts"></a>
<a id="schema_StackSetAccounts"></a>
<a id="tocSstacksetaccounts"></a>
<a id="tocsstacksetaccounts"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StackSetRegions">StackSetRegions</h2>
<!-- backwards compatibility -->
<a id="schemastacksetregions"></a>
<a id="schema_StackSetRegions"></a>
<a id="tocSstacksetregions"></a>
<a id="tocsstacksetregions"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ProvisioningArtifactPropertyName">ProvisioningArtifactPropertyName</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactpropertyname"></a>
<a id="schema_ProvisioningArtifactPropertyName"></a>
<a id="tocSprovisioningartifactpropertyname"></a>
<a id="tocsprovisioningartifactpropertyname"></a>

```json
"Id"
```

<h2 id="tocS_ProvisioningArtifactPropertyValue">ProvisioningArtifactPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactpropertyvalue"></a>
<a id="schema_ProvisioningArtifactPropertyValue"></a>
<a id="tocSprovisioningartifactpropertyvalue"></a>
<a id="tocsprovisioningartifactpropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_ProvisioningArtifactSummary">ProvisioningArtifactSummary</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactsummary"></a>
<a id="schema_ProvisioningArtifactSummary"></a>
<a id="tocSprovisioningartifactsummary"></a>
<a id="tocsprovisioningartifactsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "CreatedTime": {},
  "ProvisioningArtifactMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Summary information about a provisioning artifact (also known as a version) for a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CreatedTime|object|false|none|none|
|ProvisioningArtifactMetadata|object|false|none|none|

<h2 id="tocS_ProvisioningArtifactView">ProvisioningArtifactView</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningartifactview"></a>
<a id="schema_ProvisioningArtifactView"></a>
<a id="tocSprovisioningartifactview"></a>
<a id="tocsprovisioningartifactview"></a>

```json
{
  "ProductViewSummary": {
    "Id": {},
    "ProductId": {},
    "Name": {},
    "Owner": {},
    "ShortDescription": {},
    "Type": {},
    "Distributor": {},
    "HasDefaultPath": {},
    "SupportEmail": {},
    "SupportDescription": {},
    "SupportUrl": {}
  },
  "ProvisioningArtifact": {
    "Id": {},
    "Name": {},
    "Description": {},
    "CreatedTime": {},
    "Guidance": {}
  }
}
```

An object that contains summary information about a product view and a provisioning artifact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductViewSummary|object|false|none|none|
|ProvisioningArtifact|object|false|none|none|

<h2 id="tocS_ProvisioningParameter">ProvisioningParameter</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningparameter"></a>
<a id="schema_ProvisioningParameter"></a>
<a id="tocSprovisioningparameter"></a>
<a id="tocsprovisioningparameter"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a parameter used to provision a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_StackSetFailureToleranceCount">StackSetFailureToleranceCount</h2>
<!-- backwards compatibility -->
<a id="schemastacksetfailuretolerancecount"></a>
<a id="schema_StackSetFailureToleranceCount"></a>
<a id="tocSstacksetfailuretolerancecount"></a>
<a id="tocsstacksetfailuretolerancecount"></a>

```json
0
```

<h2 id="tocS_StackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</h2>
<!-- backwards compatibility -->
<a id="schemastacksetfailuretolerancepercentage"></a>
<a id="schema_StackSetFailureTolerancePercentage"></a>
<a id="tocSstacksetfailuretolerancepercentage"></a>
<a id="tocsstacksetfailuretolerancepercentage"></a>

```json
0
```

<h2 id="tocS_StackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</h2>
<!-- backwards compatibility -->
<a id="schemastacksetmaxconcurrencycount"></a>
<a id="schema_StackSetMaxConcurrencyCount"></a>
<a id="tocSstacksetmaxconcurrencycount"></a>
<a id="tocsstacksetmaxconcurrencycount"></a>

```json
1
```

<h2 id="tocS_StackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</h2>
<!-- backwards compatibility -->
<a id="schemastacksetmaxconcurrencypercentage"></a>
<a id="schema_StackSetMaxConcurrencyPercentage"></a>
<a id="tocSstacksetmaxconcurrencypercentage"></a>
<a id="tocsstacksetmaxconcurrencypercentage"></a>

```json
1
```

<h2 id="tocS_RecordStatus">RecordStatus</h2>
<!-- backwards compatibility -->
<a id="schemarecordstatus"></a>
<a id="schema_RecordStatus"></a>
<a id="tocSrecordstatus"></a>
<a id="tocsrecordstatus"></a>

```json
"CREATED"
```

<h2 id="tocS_RecordType">RecordType</h2>
<!-- backwards compatibility -->
<a id="schemarecordtype"></a>
<a id="schema_RecordType"></a>
<a id="tocSrecordtype"></a>
<a id="tocsrecordtype"></a>

```json
"string"
```

<h2 id="tocS_RecordErrors">RecordErrors</h2>
<!-- backwards compatibility -->
<a id="schemarecorderrors"></a>
<a id="schema_RecordErrors"></a>
<a id="tocSrecorderrors"></a>
<a id="tocsrecorderrors"></a>

```json
[
  {
    "Code": {},
    "Description": {}
  }
]
```

<h2 id="tocS_RecordTags">RecordTags</h2>
<!-- backwards compatibility -->
<a id="schemarecordtags"></a>
<a id="schema_RecordTags"></a>
<a id="tocSrecordtags"></a>
<a id="tocsrecordtags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_RecordError">RecordError</h2>
<!-- backwards compatibility -->
<a id="schemarecorderror"></a>
<a id="schema_RecordError"></a>
<a id="tocSrecorderror"></a>
<a id="tocsrecorderror"></a>

```json
{
  "Code": {},
  "Description": {}
}
```

The error code and description resulting from an operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_RecordOutput">RecordOutput</h2>
<!-- backwards compatibility -->
<a id="schemarecordoutput"></a>
<a id="schema_RecordOutput"></a>
<a id="tocSrecordoutput"></a>
<a id="tocsrecordoutput"></a>

```json
{
  "OutputKey": {},
  "OutputValue": {},
  "Description": {}
}
```

The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OutputKey|object|false|none|none|
|OutputValue|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_RecordTagKey">RecordTagKey</h2>
<!-- backwards compatibility -->
<a id="schemarecordtagkey"></a>
<a id="schema_RecordTagKey"></a>
<a id="tocSrecordtagkey"></a>
<a id="tocsrecordtagkey"></a>

```json
"string"
```

<h2 id="tocS_RecordTagValue">RecordTagValue</h2>
<!-- backwards compatibility -->
<a id="schemarecordtagvalue"></a>
<a id="schema_RecordTagValue"></a>
<a id="tocSrecordtagvalue"></a>
<a id="tocsrecordtagvalue"></a>

```json
"string"
```

<h2 id="tocS_RecordTag">RecordTag</h2>
<!-- backwards compatibility -->
<a id="schemarecordtag"></a>
<a id="schema_RecordTag"></a>
<a id="tocSrecordtag"></a>
<a id="tocsrecordtag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

Information about a tag, which is a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_Replacement">Replacement</h2>
<!-- backwards compatibility -->
<a id="schemareplacement"></a>
<a id="schema_Replacement"></a>
<a id="tocSreplacement"></a>
<a id="tocsreplacement"></a>

```json
"TRUE"
```

<h2 id="tocS_RequiresRecreation">RequiresRecreation</h2>
<!-- backwards compatibility -->
<a id="schemarequiresrecreation"></a>
<a id="schema_RequiresRecreation"></a>
<a id="tocSrequiresrecreation"></a>
<a id="tocsrequiresrecreation"></a>

```json
"NEVER"
```

<h2 id="tocS_ResourceAttribute">ResourceAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaresourceattribute"></a>
<a id="schema_ResourceAttribute"></a>
<a id="tocSresourceattribute"></a>
<a id="tocsresourceattribute"></a>

```json
"PROPERTIES"
```

<h2 id="tocS_Scope">Scope</h2>
<!-- backwards compatibility -->
<a id="schemascope"></a>
<a id="schema_Scope"></a>
<a id="tocSscope"></a>
<a id="tocsscope"></a>

```json
[
  "PROPERTIES"
]
```

<h2 id="tocS_ResourceChangeDetails">ResourceChangeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechangedetails"></a>
<a id="schema_ResourceChangeDetails"></a>
<a id="tocSresourcechangedetails"></a>
<a id="tocsresourcechangedetails"></a>

```json
[
  {
    "Target": {
      "Attribute": {},
      "Name": {},
      "RequiresRecreation": {}
    },
    "Evaluation": {},
    "CausingEntity": {}
  }
]
```

<h2 id="tocS_ResourceChange">ResourceChange</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechange"></a>
<a id="schema_ResourceChange"></a>
<a id="tocSresourcechange"></a>
<a id="tocsresourcechange"></a>

```json
{
  "Action": {},
  "LogicalResourceId": {},
  "PhysicalResourceId": {},
  "ResourceType": {},
  "Replacement": {},
  "Scope": {},
  "Details": {}
}
```

Information about a resource change that will occur when a plan is executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|false|none|none|
|LogicalResourceId|object|false|none|none|
|PhysicalResourceId|object|false|none|none|
|ResourceType|object|false|none|none|
|Replacement|object|false|none|none|
|Scope|object|false|none|none|
|Details|object|false|none|none|

<h2 id="tocS_ResourceTargetDefinition">ResourceTargetDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetargetdefinition"></a>
<a id="schema_ResourceTargetDefinition"></a>
<a id="tocSresourcetargetdefinition"></a>
<a id="tocsresourcetargetdefinition"></a>

```json
{
  "Attribute": {},
  "Name": {},
  "RequiresRecreation": {}
}
```

Information about a change to a resource attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attribute|object|false|none|none|
|Name|object|false|none|none|
|RequiresRecreation|object|false|none|none|

<h2 id="tocS_ResourceChangeDetail">ResourceChangeDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourcechangedetail"></a>
<a id="schema_ResourceChangeDetail"></a>
<a id="tocSresourcechangedetail"></a>
<a id="tocsresourcechangedetail"></a>

```json
{
  "Target": {
    "Attribute": {},
    "Name": {},
    "RequiresRecreation": {}
  },
  "Evaluation": {},
  "CausingEntity": {}
}
```

Information about a change to a resource attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Target|object|false|none|none|
|Evaluation|object|false|none|none|
|CausingEntity|object|false|none|none|

<h2 id="tocS_ResourceDetailId">ResourceDetailId</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetailid"></a>
<a id="schema_ResourceDetailId"></a>
<a id="tocSresourcedetailid"></a>
<a id="tocsresourcedetailid"></a>

```json
"string"
```

<h2 id="tocS_ResourceDetailARN">ResourceDetailARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetailarn"></a>
<a id="schema_ResourceDetailARN"></a>
<a id="tocSresourcedetailarn"></a>
<a id="tocsresourcedetailarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceDetailName">ResourceDetailName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetailname"></a>
<a id="schema_ResourceDetailName"></a>
<a id="tocSresourcedetailname"></a>
<a id="tocsresourcedetailname"></a>

```json
"string"
```

<h2 id="tocS_ResourceDetailDescription">ResourceDetailDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetaildescription"></a>
<a id="schema_ResourceDetailDescription"></a>
<a id="tocSresourcedetaildescription"></a>
<a id="tocsresourcedetaildescription"></a>

```json
"string"
```

<h2 id="tocS_ResourceDetailCreatedTime">ResourceDetailCreatedTime</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetailcreatedtime"></a>
<a id="schema_ResourceDetailCreatedTime"></a>
<a id="tocSresourcedetailcreatedtime"></a>
<a id="tocsresourcedetailcreatedtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ResourceDetail">ResourceDetail</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetail"></a>
<a id="schema_ResourceDetail"></a>
<a id="tocSresourcedetail"></a>
<a id="tocsresourcedetail"></a>

```json
{
  "Id": {},
  "ARN": {},
  "Name": {},
  "Description": {},
  "CreatedTime": {}
}
```

Information about a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|CreatedTime|object|false|none|none|

<h2 id="tocS_RetainPhysicalResources">RetainPhysicalResources</h2>
<!-- backwards compatibility -->
<a id="schemaretainphysicalresources"></a>
<a id="schema_RetainPhysicalResources"></a>
<a id="tocSretainphysicalresources"></a>
<a id="tocsretainphysicalresources"></a>

```json
true
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASCENDING"
```

<h2 id="tocS_SortField">SortField</h2>
<!-- backwards compatibility -->
<a id="schemasortfield"></a>
<a id="schema_SortField"></a>
<a id="tocSsortfield"></a>
<a id="tocssortfield"></a>

```json
"string"
```

<h2 id="tocS_SearchProvisionedProductsPageSize">SearchProvisionedProductsPageSize</h2>
<!-- backwards compatibility -->
<a id="schemasearchprovisionedproductspagesize"></a>
<a id="schema_SearchProvisionedProductsPageSize"></a>
<a id="tocSsearchprovisionedproductspagesize"></a>
<a id="tocssearchprovisionedproductspagesize"></a>

```json
0
```

<h2 id="tocS_TotalResultsCount">TotalResultsCount</h2>
<!-- backwards compatibility -->
<a id="schematotalresultscount"></a>
<a id="schema_TotalResultsCount"></a>
<a id="tocStotalresultscount"></a>
<a id="tocstotalresultscount"></a>

```json
0
```

<h2 id="tocS_ServiceActionAssociation">ServiceActionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionassociation"></a>
<a id="schema_ServiceActionAssociation"></a>
<a id="tocSserviceactionassociation"></a>
<a id="tocsserviceactionassociation"></a>

```json
{
  "ServiceActionId": {},
  "ProductId": {},
  "ProvisioningArtifactId": {}
}
```

A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceActionId|object|true|none|none|
|ProductId|object|true|none|none|
|ProvisioningArtifactId|object|true|none|none|

<h2 id="tocS_ServiceActionDefinitionKey">ServiceActionDefinitionKey</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondefinitionkey"></a>
<a id="schema_ServiceActionDefinitionKey"></a>
<a id="tocSserviceactiondefinitionkey"></a>
<a id="tocsserviceactiondefinitionkey"></a>

```json
"Name"
```

<h2 id="tocS_ServiceActionDefinitionValue">ServiceActionDefinitionValue</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactiondefinitionvalue"></a>
<a id="schema_ServiceActionDefinitionValue"></a>
<a id="tocSserviceactiondefinitionvalue"></a>
<a id="tocsserviceactiondefinitionvalue"></a>

```json
"string"
```

<h2 id="tocS_ServiceActionSummary">ServiceActionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaserviceactionsummary"></a>
<a id="schema_ServiceActionSummary"></a>
<a id="tocSserviceactionsummary"></a>
<a id="tocsserviceactionsummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Description": {},
  "DefinitionType": {}
}
```

Detailed information about the self-service action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|DefinitionType|object|false|none|none|

<h2 id="tocS_SuccessfulShares">SuccessfulShares</h2>
<!-- backwards compatibility -->
<a id="schemasuccessfulshares"></a>
<a id="schema_SuccessfulShares"></a>
<a id="tocSsuccessfulshares"></a>
<a id="tocssuccessfulshares"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ShareErrors">ShareErrors</h2>
<!-- backwards compatibility -->
<a id="schemashareerrors"></a>
<a id="schema_ShareErrors"></a>
<a id="tocSshareerrors"></a>
<a id="tocsshareerrors"></a>

```json
[
  {
    "Accounts": {},
    "Message": {},
    "Error": {}
  }
]
```

<h2 id="tocS_ShareError">ShareError</h2>
<!-- backwards compatibility -->
<a id="schemashareerror"></a>
<a id="schema_ShareError"></a>
<a id="tocSshareerror"></a>
<a id="tocsshareerror"></a>

```json
{
  "Accounts": {},
  "Message": {},
  "Error": {}
}
```

Errors that occurred during the portfolio share operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accounts|object|false|none|none|
|Message|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_SourceType">SourceType</h2>
<!-- backwards compatibility -->
<a id="schemasourcetype"></a>
<a id="schema_SourceType"></a>
<a id="tocSsourcetype"></a>
<a id="tocssourcetype"></a>

```json
"CODESTAR"
```

<h2 id="tocS_SourceConnectionParameters">SourceConnectionParameters</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnectionparameters"></a>
<a id="schema_SourceConnectionParameters"></a>
<a id="tocSsourceconnectionparameters"></a>
<a id="tocssourceconnectionparameters"></a>

```json
{
  "CodeStar": {
    "ConnectionArn": {},
    "Repository": {},
    "Branch": {},
    "ArtifactPath": {}
  }
}
```

Provides connection details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeStar|object|false|none|none|

<h2 id="tocS_SourceProvisioningArtifactPropertiesMap">SourceProvisioningArtifactPropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemasourceprovisioningartifactpropertiesmap"></a>
<a id="schema_SourceProvisioningArtifactPropertiesMap"></a>
<a id="tocSsourceprovisioningartifactpropertiesmap"></a>
<a id="tocssourceprovisioningartifactpropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ProvisioningArtifactPropertyValue](#schemaprovisioningartifactpropertyvalue)|false|none|none|

<h2 id="tocS_StackInstanceStatus">StackInstanceStatus</h2>
<!-- backwards compatibility -->
<a id="schemastackinstancestatus"></a>
<a id="schema_StackInstanceStatus"></a>
<a id="tocSstackinstancestatus"></a>
<a id="tocsstackinstancestatus"></a>

```json
"CURRENT"
```

<h2 id="tocS_StackInstance">StackInstance</h2>
<!-- backwards compatibility -->
<a id="schemastackinstance"></a>
<a id="schema_StackInstance"></a>
<a id="tocSstackinstance"></a>
<a id="tocsstackinstance"></a>

```json
{
  "Account": {},
  "Region": {},
  "StackInstanceStatus": {}
}
```

An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one stack set. Each stack instance contains the ID of its associated stack set, as well as the ID of the actual stack and the stack status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|
|Region|object|false|none|none|
|StackInstanceStatus|object|false|none|none|

<h2 id="tocS_StackSetOperationType">StackSetOperationType</h2>
<!-- backwards compatibility -->
<a id="schemastacksetoperationtype"></a>
<a id="schema_StackSetOperationType"></a>
<a id="tocSstacksetoperationtype"></a>
<a id="tocsstacksetoperationtype"></a>

```json
"CREATE"
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

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagOptionSummary">TagOptionSummary</h2>
<!-- backwards compatibility -->
<a id="schematagoptionsummary"></a>
<a id="schema_TagOptionSummary"></a>
<a id="tocStagoptionsummary"></a>
<a id="tocstagoptionsummary"></a>

```json
{
  "Key": {},
  "Values": {}
}
```

Summary information about a TagOption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_TagOptionValues">TagOptionValues</h2>
<!-- backwards compatibility -->
<a id="schematagoptionvalues"></a>
<a id="schema_TagOptionValues"></a>
<a id="tocStagoptionvalues"></a>
<a id="tocstagoptionvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_UniqueTagKey">UniqueTagKey</h2>
<!-- backwards compatibility -->
<a id="schemauniquetagkey"></a>
<a id="schema_UniqueTagKey"></a>
<a id="tocSuniquetagkey"></a>
<a id="tocsuniquetagkey"></a>

```json
"string"
```

<h2 id="tocS_UniqueTagValue">UniqueTagValue</h2>
<!-- backwards compatibility -->
<a id="schemauniquetagvalue"></a>
<a id="schema_UniqueTagValue"></a>
<a id="tocSuniquetagvalue"></a>
<a id="tocsuniquetagvalue"></a>

```json
"string"
```

<h2 id="tocS_UpdateProvisioningPreferences">UpdateProvisioningPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisioningpreferences"></a>
<a id="schema_UpdateProvisioningPreferences"></a>
<a id="tocSupdateprovisioningpreferences"></a>
<a id="tocsupdateprovisioningpreferences"></a>

```json
{
  "StackSetAccounts": {},
  "StackSetRegions": {},
  "StackSetFailureToleranceCount": {},
  "StackSetFailureTolerancePercentage": {},
  "StackSetMaxConcurrencyCount": {},
  "StackSetMaxConcurrencyPercentage": {},
  "StackSetOperationType": {}
}
```

The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StackSetAccounts|object|false|none|none|
|StackSetRegions|object|false|none|none|
|StackSetFailureToleranceCount|object|false|none|none|
|StackSetFailureTolerancePercentage|object|false|none|none|
|StackSetMaxConcurrencyCount|object|false|none|none|
|StackSetMaxConcurrencyPercentage|object|false|none|none|
|StackSetOperationType|object|false|none|none|

<h2 id="tocS_UsePreviousValue">UsePreviousValue</h2>
<!-- backwards compatibility -->
<a id="schemausepreviousvalue"></a>
<a id="schema_UsePreviousValue"></a>
<a id="tocSusepreviousvalue"></a>
<a id="tocsusepreviousvalue"></a>

```json
true
```

<h2 id="tocS_UpdateProvisioningParameter">UpdateProvisioningParameter</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprovisioningparameter"></a>
<a id="schema_UpdateProvisioningParameter"></a>
<a id="tocSupdateprovisioningparameter"></a>
<a id="tocsupdateprovisioningparameter"></a>

```json
{
  "Key": {},
  "Value": {},
  "UsePreviousValue": {}
}
```

The parameter key-value pair used to update a provisioned product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|
|UsePreviousValue|object|false|none|none|

<h2 id="tocS_UsageInstruction">UsageInstruction</h2>
<!-- backwards compatibility -->
<a id="schemausageinstruction"></a>
<a id="schema_UsageInstruction"></a>
<a id="tocSusageinstruction"></a>
<a id="tocsusageinstruction"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

Additional information provided by the administrator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|Value|object|false|none|none|
