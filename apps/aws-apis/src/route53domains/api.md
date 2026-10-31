<h1 id="amazon-route-53-domains">Amazon Route 53 Domains v2014-05-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Amazon Route 53 API actions let you register domain names and perform related operations.

Base URLs:

* <a href="http://route53domains.us-east-1.amazonaws.com">http://route53domains.us-east-1.amazonaws.com</a> - The Amazon Route 53 Domains multi-region endpoint

* <a href="https://route53domains.us-east-1.amazonaws.com">https://route53domains.us-east-1.amazonaws.com</a> - The Amazon Route 53 Domains multi-region endpoint

* <a href="http://route53domains.cn-north-1.amazonaws.com.cn">http://route53domains.cn-north-1.amazonaws.com.cn</a> - The Amazon Route 53 Domains endpoint for China (Beijing) and China (Ningxia)

* <a href="https://route53domains.cn-north-1.amazonaws.com.cn">https://route53domains.cn-north-1.amazonaws.com.cn</a> - The Amazon Route 53 Domains endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/route53domains/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-route-53-domains-default">Default</h1>

## AcceptDomainTransferFromAnotherAwsAccount

<a id="opIdAcceptDomainTransferFromAnotherAwsAccount"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount' \
  -d '{
    "DomainName": {},
    "Password": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount`

<p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

> Body parameter

```json
{
  "DomainName": {},
  "Password": {}
}
```

<h3 id="acceptdomaintransferfromanotherawsaccount-parameters">Parameters</h3>

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
|body|body|[AcceptDomainTransferFromAnotherAwsAccountRequest](#schemaacceptdomaintransferfromanotherawsaccountrequest)|true|none|
|» DomainName|body|object|true|none|
|» Password|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="acceptdomaintransferfromanotherawsaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptDomainTransferFromAnotherAwsAccountResponse](#schemaacceptdomaintransferfromanotherawsaccountresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|DomainLimitExceeded|[DomainLimitExceeded](#schemadomainlimitexceeded)|
|483|483|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateDelegationSignerToDomain

<a id="opIdAssociateDelegationSignerToDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.AssociateDelegationSignerToDomain' \
  -d '{
    "DomainName": {},
    "SigningAttributes": {
      "Algorithm": {},
      "Flags": {},
      "PublicKey": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain`

<p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>

> Body parameter

```json
{
  "DomainName": {},
  "SigningAttributes": {
    "Algorithm": {},
    "Flags": {},
    "PublicKey": {}
  }
}
```

<h3 id="associatedelegationsignertodomain-parameters">Parameters</h3>

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
|body|body|[AssociateDelegationSignerToDomainRequest](#schemaassociatedelegationsignertodomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» SigningAttributes|body|object|true|none|
|» » Algorithm|body|object|false|none|
|» » Flags|body|object|false|none|
|» » PublicKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.AssociateDelegationSignerToDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="associatedelegationsignertodomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateDelegationSignerToDomainResponse](#schemaassociatedelegationsignertodomainresponse)|
|480|480|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|483|483|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|
|485|485|DnssecLimitExceeded|[DnssecLimitExceeded](#schemadnsseclimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelDomainTransferToAnotherAwsAccount

<a id="opIdCancelDomainTransferToAnotherAwsAccount"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount`

<p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="canceldomaintransfertoanotherawsaccount-parameters">Parameters</h3>

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
|body|body|[CancelDomainTransferToAnotherAwsAccountRequest](#schemacanceldomaintransfertoanotherawsaccountrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="canceldomaintransfertoanotherawsaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelDomainTransferToAnotherAwsAccountResponse](#schemacanceldomaintransfertoanotherawsaccountresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckDomainAvailability

<a id="opIdCheckDomainAvailability"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.CheckDomainAvailability' \
  -d '{
    "DomainName": {},
    "IdnLangCode": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability`

This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.

> Body parameter

```json
{
  "DomainName": {},
  "IdnLangCode": {}
}
```

<h3 id="checkdomainavailability-parameters">Parameters</h3>

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
|body|body|[CheckDomainAvailabilityRequest](#schemacheckdomainavailabilityrequest)|true|none|
|» DomainName|body|object|true|none|
|» IdnLangCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.CheckDomainAvailability|

> Example responses

> 200 Response

```json
{
  "Availability": {}
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

<h3 id="checkdomainavailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckDomainAvailabilityResponse](#schemacheckdomainavailabilityresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CheckDomainTransferability

<a id="opIdCheckDomainTransferability"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.CheckDomainTransferability' \
  -d '{
    "DomainName": {},
    "AuthCode": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability`

Checks whether a domain name can be transferred to Amazon Route 53. 

> Body parameter

```json
{
  "DomainName": {},
  "AuthCode": {}
}
```

<h3 id="checkdomaintransferability-parameters">Parameters</h3>

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
|body|body|[CheckDomainTransferabilityRequest](#schemacheckdomaintransferabilityrequest)|true|none|
|» DomainName|body|object|true|none|
|» AuthCode|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.CheckDomainTransferability|

> Example responses

> 200 Response

```json
{
  "Transferability": {
    "Transferable": "TRANSFERABLE"
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

<h3 id="checkdomaintransferability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckDomainTransferabilityResponse](#schemacheckdomaintransferabilityresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDomain

<a id="opIdDeleteDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.DeleteDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.DeleteDomain' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.DeleteDomain`

<p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="deletedomain-parameters">Parameters</h3>

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
|body|body|[DeleteDomainRequest](#schemadeletedomainrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.DeleteDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="deletedomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDomainResponse](#schemadeletedomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTagsForDomain

<a id="opIdDeleteTagsForDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.DeleteTagsForDomain' \
  -d '{
    "DomainName": {},
    "TagsToDelete": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain`

<p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

> Body parameter

```json
{
  "DomainName": {},
  "TagsToDelete": {}
}
```

<h3 id="deletetagsfordomain-parameters">Parameters</h3>

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
|body|body|[DeleteTagsForDomainRequest](#schemadeletetagsfordomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» TagsToDelete|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.DeleteTagsForDomain|

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

<h3 id="deletetagsfordomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTagsForDomainResponse](#schemadeletetagsfordomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableDomainAutoRenew

<a id="opIdDisableDomainAutoRenew"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.DisableDomainAutoRenew' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew`

This operation disables automatic renewal of domain registration for the specified domain.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="disabledomainautorenew-parameters">Parameters</h3>

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
|body|body|[DisableDomainAutoRenewRequest](#schemadisabledomainautorenewrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.DisableDomainAutoRenew|

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

<h3 id="disabledomainautorenew-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableDomainAutoRenewResponse](#schemadisabledomainautorenewresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableDomainTransferLock

<a id="opIdDisableDomainTransferLock"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.DisableDomainTransferLock' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock`

This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="disabledomaintransferlock-parameters">Parameters</h3>

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
|body|body|[DisableDomainTransferLockRequest](#schemadisabledomaintransferlockrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.DisableDomainTransferLock|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="disabledomaintransferlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableDomainTransferLockResponse](#schemadisabledomaintransferlockresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateDelegationSignerFromDomain

<a id="opIdDisassociateDelegationSignerFromDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.DisassociateDelegationSignerFromDomain' \
  -d '{
    "DomainName": {},
    "Id": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain`

Deletes a delegation signer (DS) record in the registry zone for this domain name.

> Body parameter

```json
{
  "DomainName": {},
  "Id": {}
}
```

<h3 id="disassociatedelegationsignerfromdomain-parameters">Parameters</h3>

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
|body|body|[DisassociateDelegationSignerFromDomainRequest](#schemadisassociatedelegationsignerfromdomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» Id|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.DisassociateDelegationSignerFromDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="disassociatedelegationsignerfromdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateDelegationSignerFromDomainResponse](#schemadisassociatedelegationsignerfromdomainresponse)|
|480|480|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|483|483|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableDomainAutoRenew

<a id="opIdEnableDomainAutoRenew"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.EnableDomainAutoRenew' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew`

<p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="enabledomainautorenew-parameters">Parameters</h3>

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
|body|body|[EnableDomainAutoRenewRequest](#schemaenabledomainautorenewrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.EnableDomainAutoRenew|

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

<h3 id="enabledomainautorenew-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableDomainAutoRenewResponse](#schemaenabledomainautorenewresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableDomainTransferLock

<a id="opIdEnableDomainTransferLock"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.EnableDomainTransferLock' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock`

This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="enabledomaintransferlock-parameters">Parameters</h3>

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
|body|body|[EnableDomainTransferLockRequest](#schemaenabledomaintransferlockrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.EnableDomainTransferLock|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="enabledomaintransferlock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableDomainTransferLockResponse](#schemaenabledomaintransferlockresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContactReachabilityStatus

<a id="opIdGetContactReachabilityStatus"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.GetContactReachabilityStatus' \
  -d '{
    "domainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus`

<p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>

> Body parameter

```json
{
  "domainName": {}
}
```

<h3 id="getcontactreachabilitystatus-parameters">Parameters</h3>

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
|body|body|[GetContactReachabilityStatusRequest](#schemagetcontactreachabilitystatusrequest)|true|none|
|» domainName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.GetContactReachabilityStatus|

> Example responses

> 200 Response

```json
{
  "domainName": {},
  "status": {}
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

<h3 id="getcontactreachabilitystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContactReachabilityStatusResponse](#schemagetcontactreachabilitystatusresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainDetail

<a id="opIdGetDomainDetail"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.GetDomainDetail' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail`

This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="getdomaindetail-parameters">Parameters</h3>

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
|body|body|[GetDomainDetailRequest](#schemagetdomaindetailrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.GetDomainDetail|

> Example responses

> 200 Response

```json
{
  "DomainName": {},
  "Nameservers": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "AdminPrivacy": {},
  "RegistrantPrivacy": {},
  "TechPrivacy": {},
  "RegistrarName": {},
  "WhoIsServer": {},
  "RegistrarUrl": {},
  "AbuseContactEmail": {},
  "AbuseContactPhone": {},
  "RegistryDomainId": {},
  "CreationDate": {},
  "UpdatedDate": {},
  "ExpirationDate": {},
  "Reseller": {},
  "DnsSec": {},
  "StatusList": {},
  "DnssecKeys": {}
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

<h3 id="getdomaindetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainDetailResponse](#schemagetdomaindetailresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDomainSuggestions

<a id="opIdGetDomainSuggestions"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.GetDomainSuggestions' \
  -d '{
    "DomainName": {},
    "SuggestionCount": {},
    "OnlyAvailable": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions`

The GetDomainSuggestions operation returns a list of suggested domain names.

> Body parameter

```json
{
  "DomainName": {},
  "SuggestionCount": {},
  "OnlyAvailable": {}
}
```

<h3 id="getdomainsuggestions-parameters">Parameters</h3>

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
|body|body|[GetDomainSuggestionsRequest](#schemagetdomainsuggestionsrequest)|true|none|
|» DomainName|body|object|true|none|
|» SuggestionCount|body|object|true|none|
|» OnlyAvailable|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.GetDomainSuggestions|

> Example responses

> 200 Response

```json
{
  "SuggestionsList": {}
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

<h3 id="getdomainsuggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDomainSuggestionsResponse](#schemagetdomainsuggestionsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOperationDetail

<a id="opIdGetOperationDetail"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.GetOperationDetail' \
  -d '{
    "OperationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail`

This operation returns the current status of an operation that is not completed.

> Body parameter

```json
{
  "OperationId": {}
}
```

<h3 id="getoperationdetail-parameters">Parameters</h3>

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
|body|body|[GetOperationDetailRequest](#schemagetoperationdetailrequest)|true|none|
|» OperationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.GetOperationDetail|

> Example responses

> 200 Response

```json
{
  "OperationId": {},
  "Status": {},
  "Message": {},
  "DomainName": {},
  "Type": {},
  "SubmittedDate": {},
  "LastUpdatedDate": {},
  "StatusFlag": {}
}
```

> 480 Response

```json
null
```

<h3 id="getoperationdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOperationDetailResponse](#schemagetoperationdetailresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomains

<a id="opIdListDomains"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ListDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ListDomains' \
  -d '{
    "FilterConditions": {},
    "SortCondition": {
      "Name": {},
      "SortOrder": {}
    },
    "Marker": {},
    "MaxItems": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ListDomains`

This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.

> Body parameter

```json
{
  "FilterConditions": {},
  "SortCondition": {
    "Name": {},
    "SortOrder": {}
  },
  "Marker": {},
  "MaxItems": {}
}
```

<h3 id="listdomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListDomainsRequest](#schemalistdomainsrequest)|true|none|
|» FilterConditions|body|object|false|none|
|» SortCondition|body|object|false|none|
|» » Name|body|object|true|none|
|» » SortOrder|body|object|true|none|
|» Marker|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ListDomains|

> Example responses

> 200 Response

```json
{
  "Domains": {},
  "NextPageMarker": {}
}
```

> 480 Response

```json
null
```

<h3 id="listdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsResponse](#schemalistdomainsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOperations

<a id="opIdListOperations"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ListOperations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ListOperations' \
  -d '{
    "SubmittedSince": {},
    "Marker": {},
    "MaxItems": {},
    "Status": {},
    "Type": {},
    "SortBy": {},
    "SortOrder": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ListOperations`

<p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>

> Body parameter

```json
{
  "SubmittedSince": {},
  "Marker": {},
  "MaxItems": {},
  "Status": {},
  "Type": {},
  "SortBy": {},
  "SortOrder": {}
}
```

<h3 id="listoperations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListOperationsRequest](#schemalistoperationsrequest)|true|none|
|» SubmittedSince|body|object|false|none|
|» Marker|body|object|false|none|
|» MaxItems|body|object|false|none|
|» Status|body|object|false|none|
|» Type|body|object|false|none|
|» SortBy|body|object|false|none|
|» SortOrder|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ListOperations|

> Example responses

> 200 Response

```json
{
  "Operations": {},
  "NextPageMarker": {}
}
```

> 480 Response

```json
null
```

<h3 id="listoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOperationsResponse](#schemalistoperationsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPrices

<a id="opIdListPrices"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ListPrices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ListPrices' \
  -d '{
    "Tld": {},
    "Marker": {},
    "MaxItems": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ListPrices`

<p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>

> Body parameter

```json
{
  "Tld": {},
  "Marker": {},
  "MaxItems": {}
}
```

<h3 id="listprices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListPricesRequest](#schemalistpricesrequest)|true|none|
|» Tld|body|object|false|none|
|» Marker|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ListPrices|

> Example responses

> 200 Response

```json
{
  "Prices": {},
  "NextPageMarker": {}
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

<h3 id="listprices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPricesResponse](#schemalistpricesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForDomain

<a id="opIdListTagsForDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ListTagsForDomain' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain`

<p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="listtagsfordomain-parameters">Parameters</h3>

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
|body|body|[ListTagsForDomainRequest](#schemalisttagsfordomainrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ListTagsForDomain|

> Example responses

> 200 Response

```json
{
  "TagList": {}
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

<h3 id="listtagsfordomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForDomainResponse](#schemalisttagsfordomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PushDomain

<a id="opIdPushDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.PushDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.PushDomain' \
  -d '{
    "DomainName": {},
    "Target": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.PushDomain`

<p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>

> Body parameter

```json
{
  "DomainName": {},
  "Target": {}
}
```

<h3 id="pushdomain-parameters">Parameters</h3>

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
|body|body|[PushDomainRequest](#schemapushdomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» Target|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.PushDomain|

> Example responses

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

<h3 id="pushdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterDomain

<a id="opIdRegisterDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.RegisterDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.RegisterDomain' \
  -d '{
    "DomainName": {},
    "IdnLangCode": {},
    "DurationInYears": {},
    "AutoRenew": {},
    "AdminContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "RegistrantContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "TechContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "PrivacyProtectAdminContact": {},
    "PrivacyProtectRegistrantContact": {},
    "PrivacyProtectTechContact": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.RegisterDomain`

<p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>

> Body parameter

```json
{
  "DomainName": {},
  "IdnLangCode": {},
  "DurationInYears": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "PrivacyProtectAdminContact": {},
  "PrivacyProtectRegistrantContact": {},
  "PrivacyProtectTechContact": {}
}
```

<h3 id="registerdomain-parameters">Parameters</h3>

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
|body|body|[RegisterDomainRequest](#schemaregisterdomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» IdnLangCode|body|object|false|none|
|» DurationInYears|body|object|true|none|
|» AutoRenew|body|object|false|none|
|» AdminContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» RegistrantContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» TechContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» PrivacyProtectAdminContact|body|object|false|none|
|» PrivacyProtectRegistrantContact|body|object|false|none|
|» PrivacyProtectTechContact|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.RegisterDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="registerdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterDomainResponse](#schemaregisterdomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|
|482|482|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|483|483|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|484|484|DomainLimitExceeded|[DomainLimitExceeded](#schemadomainlimitexceeded)|
|485|485|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectDomainTransferFromAnotherAwsAccount

<a id="opIdRejectDomainTransferFromAnotherAwsAccount"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount`

<p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="rejectdomaintransferfromanotherawsaccount-parameters">Parameters</h3>

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
|body|body|[RejectDomainTransferFromAnotherAwsAccountRequest](#schemarejectdomaintransferfromanotherawsaccountrequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="rejectdomaintransferfromanotherawsaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectDomainTransferFromAnotherAwsAccountResponse](#schemarejectdomaintransferfromanotherawsaccountresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RenewDomain

<a id="opIdRenewDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.RenewDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.RenewDomain' \
  -d '{
    "DomainName": {},
    "DurationInYears": {},
    "CurrentExpiryYear": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.RenewDomain`

<p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

> Body parameter

```json
{
  "DomainName": {},
  "DurationInYears": {},
  "CurrentExpiryYear": {}
}
```

<h3 id="renewdomain-parameters">Parameters</h3>

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
|body|body|[RenewDomainRequest](#schemarenewdomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» DurationInYears|body|object|false|none|
|» CurrentExpiryYear|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.RenewDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="renewdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RenewDomainResponse](#schemarenewdomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|
|482|482|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|483|483|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|484|484|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResendContactReachabilityEmail

<a id="opIdResendContactReachabilityEmail"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ResendContactReachabilityEmail' \
  -d '{
    "domainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail`

For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.

> Body parameter

```json
{
  "domainName": {}
}
```

<h3 id="resendcontactreachabilityemail-parameters">Parameters</h3>

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
|body|body|[ResendContactReachabilityEmailRequest](#schemaresendcontactreachabilityemailrequest)|true|none|
|» domainName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ResendContactReachabilityEmail|

> Example responses

> 200 Response

```json
{
  "domainName": {},
  "emailAddress": {},
  "isAlreadyVerified": {}
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

<h3 id="resendcontactreachabilityemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResendContactReachabilityEmailResponse](#schemaresendcontactreachabilityemailresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResendOperationAuthorization

<a id="opIdResendOperationAuthorization"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ResendOperationAuthorization' \
  -d '{
    "OperationId": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization`

 Resend the form of authorization email for this operation. 

> Body parameter

```json
{
  "OperationId": {}
}
```

<h3 id="resendoperationauthorization-parameters">Parameters</h3>

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
|body|body|[ResendOperationAuthorizationRequest](#schemaresendoperationauthorizationrequest)|true|none|
|» OperationId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ResendOperationAuthorization|

> Example responses

> 480 Response

```json
null
```

<h3 id="resendoperationauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RetrieveDomainAuthCode

<a id="opIdRetrieveDomainAuthCode"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.RetrieveDomainAuthCode' \
  -d '{
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode`

This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.

> Body parameter

```json
{
  "DomainName": {}
}
```

<h3 id="retrievedomainauthcode-parameters">Parameters</h3>

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
|body|body|[RetrieveDomainAuthCodeRequest](#schemaretrievedomainauthcoderequest)|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.RetrieveDomainAuthCode|

> Example responses

> 200 Response

```json
{
  "AuthCode": {}
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

<h3 id="retrievedomainauthcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RetrieveDomainAuthCodeResponse](#schemaretrievedomainauthcoderesponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransferDomain

<a id="opIdTransferDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.TransferDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.TransferDomain' \
  -d '{
    "DomainName": {},
    "IdnLangCode": {},
    "DurationInYears": {},
    "Nameservers": {},
    "AuthCode": {},
    "AutoRenew": {},
    "AdminContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "RegistrantContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "TechContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "PrivacyProtectAdminContact": {},
    "PrivacyProtectRegistrantContact": {},
    "PrivacyProtectTechContact": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.TransferDomain`

<p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>

> Body parameter

```json
{
  "DomainName": {},
  "IdnLangCode": {},
  "DurationInYears": {},
  "Nameservers": {},
  "AuthCode": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "PrivacyProtectAdminContact": {},
  "PrivacyProtectRegistrantContact": {},
  "PrivacyProtectTechContact": {}
}
```

<h3 id="transferdomain-parameters">Parameters</h3>

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
|body|body|[TransferDomainRequest](#schematransferdomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» IdnLangCode|body|object|false|none|
|» DurationInYears|body|object|true|none|
|» Nameservers|body|object|false|none|
|» AuthCode|body|object|false|none|
|» AutoRenew|body|object|false|none|
|» AdminContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» RegistrantContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» TechContact|body|object|true|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» PrivacyProtectAdminContact|body|object|false|none|
|» PrivacyProtectRegistrantContact|body|object|false|none|
|» PrivacyProtectTechContact|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.TransferDomain|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="transferdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransferDomainResponse](#schematransferdomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|
|482|482|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|483|483|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|484|484|DomainLimitExceeded|[DomainLimitExceeded](#schemadomainlimitexceeded)|
|485|485|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TransferDomainToAnotherAwsAccount

<a id="opIdTransferDomainToAnotherAwsAccount"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.TransferDomainToAnotherAwsAccount' \
  -d '{
    "DomainName": {},
    "AccountId": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount`

<p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>

> Body parameter

```json
{
  "DomainName": {},
  "AccountId": {}
}
```

<h3 id="transferdomaintoanotherawsaccount-parameters">Parameters</h3>

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
|body|body|[TransferDomainToAnotherAwsAccountRequest](#schematransferdomaintoanotherawsaccountrequest)|true|none|
|» DomainName|body|object|true|none|
|» AccountId|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.TransferDomainToAnotherAwsAccount|

> Example responses

> 200 Response

```json
{
  "OperationId": {},
  "Password": {}
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

<h3 id="transferdomaintoanotherawsaccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransferDomainToAnotherAwsAccountResponse](#schematransferdomaintoanotherawsaccountresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|483|483|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainContact

<a id="opIdUpdateDomainContact"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.UpdateDomainContact' \
  -d '{
    "DomainName": {},
    "AdminContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "RegistrantContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "TechContact": {
      "FirstName": {},
      "LastName": {},
      "ContactType": {},
      "OrganizationName": {},
      "AddressLine1": {},
      "AddressLine2": {},
      "City": {},
      "State": {},
      "CountryCode": {},
      "ZipCode": {},
      "PhoneNumber": {},
      "Email": {},
      "Fax": {},
      "ExtraParams": {}
    },
    "Consent": {
      "MaxPrice": {},
      "Currency": {}
    }
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact`

<p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>

> Body parameter

```json
{
  "DomainName": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "Consent": {
    "MaxPrice": {},
    "Currency": {}
  }
}
```

<h3 id="updatedomaincontact-parameters">Parameters</h3>

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
|body|body|[UpdateDomainContactRequest](#schemaupdatedomaincontactrequest)|true|none|
|» DomainName|body|object|true|none|
|» AdminContact|body|object|false|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» RegistrantContact|body|object|false|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» TechContact|body|object|false|none|
|» » FirstName|body|object|false|none|
|» » LastName|body|object|false|none|
|» » ContactType|body|object|false|none|
|» » OrganizationName|body|object|false|none|
|» » AddressLine1|body|object|false|none|
|» » AddressLine2|body|object|false|none|
|» » City|body|object|false|none|
|» » State|body|object|false|none|
|» » CountryCode|body|object|false|none|
|» » ZipCode|body|object|false|none|
|» » PhoneNumber|body|object|false|none|
|» » Email|body|object|false|none|
|» » Fax|body|object|false|none|
|» » ExtraParams|body|object|false|none|
|» Consent|body|object|false|none|
|» » MaxPrice|body|object|true|none|
|» » Currency|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.UpdateDomainContact|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updatedomaincontact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainContactResponse](#schemaupdatedomaincontactresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainContactPrivacy

<a id="opIdUpdateDomainContactPrivacy"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.UpdateDomainContactPrivacy' \
  -d '{
    "DomainName": {},
    "AdminPrivacy": {},
    "RegistrantPrivacy": {},
    "TechPrivacy": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy`

<p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <note> <p>You must specify the same privacy setting for the administrative, registrant, and technical contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>

> Body parameter

```json
{
  "DomainName": {},
  "AdminPrivacy": {},
  "RegistrantPrivacy": {},
  "TechPrivacy": {}
}
```

<h3 id="updatedomaincontactprivacy-parameters">Parameters</h3>

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
|body|body|[UpdateDomainContactPrivacyRequest](#schemaupdatedomaincontactprivacyrequest)|true|none|
|» DomainName|body|object|true|none|
|» AdminPrivacy|body|object|false|none|
|» RegistrantPrivacy|body|object|false|none|
|» TechPrivacy|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.UpdateDomainContactPrivacy|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updatedomaincontactprivacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainContactPrivacyResponse](#schemaupdatedomaincontactprivacyresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDomainNameservers

<a id="opIdUpdateDomainNameservers"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.UpdateDomainNameservers' \
  -d '{
    "DomainName": {},
    "FIAuthKey": {},
    "Nameservers": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers`

<p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>

> Body parameter

```json
{
  "DomainName": {},
  "FIAuthKey": {},
  "Nameservers": {}
}
```

<h3 id="updatedomainnameservers-parameters">Parameters</h3>

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
|body|body|[UpdateDomainNameserversRequest](#schemaupdatedomainnameserversrequest)|true|none|
|» DomainName|body|object|true|none|
|» FIAuthKey|body|object|false|none|
|» Nameservers|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.UpdateDomainNameservers|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="updatedomainnameservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDomainNameserversResponse](#schemaupdatedomainnameserversresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|DuplicateRequest|[DuplicateRequest](#schemaduplicaterequest)|
|482|482|TLDRulesViolation|[TLDRulesViolation](#schematldrulesviolation)|
|483|483|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|484|484|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTagsForDomain

<a id="opIdUpdateTagsForDomain"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.UpdateTagsForDomain' \
  -d '{
    "DomainName": {},
    "TagsToUpdate": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain`

<p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>

> Body parameter

```json
{
  "DomainName": {},
  "TagsToUpdate": {}
}
```

<h3 id="updatetagsfordomain-parameters">Parameters</h3>

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
|body|body|[UpdateTagsForDomainRequest](#schemaupdatetagsfordomainrequest)|true|none|
|» DomainName|body|object|true|none|
|» TagsToUpdate|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.UpdateTagsForDomain|

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

<h3 id="updatetagsfordomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTagsForDomainResponse](#schemaupdatetagsfordomainresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|OperationLimitExceeded|[OperationLimitExceeded](#schemaoperationlimitexceeded)|
|482|482|UnsupportedTLD|[UnsupportedTLD](#schemaunsupportedtld)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ViewBilling

<a id="opIdViewBilling"></a>

> Code samples

```bash
curl 'https://route53domains.us-east-1.amazonaws.com/#X-Amz-Target=Route53Domains_v20140515.ViewBilling' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: Route53Domains_v20140515.ViewBilling' \
  -d '{
    "Start": {},
    "End": {},
    "Marker": {},
    "MaxItems": {}
  }'
```

`POST /#X-Amz-Target=Route53Domains_v20140515.ViewBilling`

Returns all the domain-related billing records for the current Amazon Web Services account for a specified period

> Body parameter

```json
{
  "Start": {},
  "End": {},
  "Marker": {},
  "MaxItems": {}
}
```

<h3 id="viewbilling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ViewBillingRequest](#schemaviewbillingrequest)|true|none|
|» Start|body|object|false|none|
|» End|body|object|false|none|
|» Marker|body|object|false|none|
|» MaxItems|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|Route53Domains_v20140515.ViewBilling|

> Example responses

> 200 Response

```json
{
  "NextPageMarker": {},
  "BillingRecords": {}
}
```

> 480 Response

```json
null
```

<h3 id="viewbilling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ViewBillingResponse](#schemaviewbillingresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptDomainTransferFromAnotherAwsAccountResponse">AcceptDomainTransferFromAnotherAwsAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdomaintransferfromanotherawsaccountresponse"></a>
<a id="schema_AcceptDomainTransferFromAnotherAwsAccountResponse"></a>
<a id="tocSacceptdomaintransferfromanotherawsaccountresponse"></a>
<a id="tocsacceptdomaintransferfromanotherawsaccountresponse"></a>

```json
{
  "OperationId": {}
}
```

The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_AcceptDomainTransferFromAnotherAwsAccountRequest">AcceptDomainTransferFromAnotherAwsAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptdomaintransferfromanotherawsaccountrequest"></a>
<a id="schema_AcceptDomainTransferFromAnotherAwsAccountRequest"></a>
<a id="tocSacceptdomaintransferfromanotherawsaccountrequest"></a>
<a id="tocsacceptdomaintransferfromanotherawsaccountrequest"></a>

```json
{
  "DomainName": {},
  "Password": {}
}
```

The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Password|object|true|none|none|

<h2 id="tocS_InvalidInput">InvalidInput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinput"></a>
<a id="schema_InvalidInput"></a>
<a id="tocSinvalidinput"></a>
<a id="tocsinvalidinput"></a>

```json
null
```

<h2 id="tocS_OperationLimitExceeded">OperationLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemaoperationlimitexceeded"></a>
<a id="schema_OperationLimitExceeded"></a>
<a id="tocSoperationlimitexceeded"></a>
<a id="tocsoperationlimitexceeded"></a>

```json
null
```

<h2 id="tocS_DomainLimitExceeded">DomainLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemadomainlimitexceeded"></a>
<a id="schema_DomainLimitExceeded"></a>
<a id="tocSdomainlimitexceeded"></a>
<a id="tocsdomainlimitexceeded"></a>

```json
null
```

<h2 id="tocS_UnsupportedTLD">UnsupportedTLD</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedtld"></a>
<a id="schema_UnsupportedTLD"></a>
<a id="tocSunsupportedtld"></a>
<a id="tocsunsupportedtld"></a>

```json
null
```

<h2 id="tocS_AssociateDelegationSignerToDomainResponse">AssociateDelegationSignerToDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedelegationsignertodomainresponse"></a>
<a id="schema_AssociateDelegationSignerToDomainResponse"></a>
<a id="tocSassociatedelegationsignertodomainresponse"></a>
<a id="tocsassociatedelegationsignertodomainresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_AssociateDelegationSignerToDomainRequest">AssociateDelegationSignerToDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedelegationsignertodomainrequest"></a>
<a id="schema_AssociateDelegationSignerToDomainRequest"></a>
<a id="tocSassociatedelegationsignertodomainrequest"></a>
<a id="tocsassociatedelegationsignertodomainrequest"></a>

```json
{
  "DomainName": {},
  "SigningAttributes": {
    "Algorithm": {},
    "Flags": {},
    "PublicKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|SigningAttributes|object|true|none|none|

<h2 id="tocS_DuplicateRequest">DuplicateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaduplicaterequest"></a>
<a id="schema_DuplicateRequest"></a>
<a id="tocSduplicaterequest"></a>
<a id="tocsduplicaterequest"></a>

```json
null
```

<h2 id="tocS_TLDRulesViolation">TLDRulesViolation</h2>
<!-- backwards compatibility -->
<a id="schematldrulesviolation"></a>
<a id="schema_TLDRulesViolation"></a>
<a id="tocStldrulesviolation"></a>
<a id="tocstldrulesviolation"></a>

```json
null
```

<h2 id="tocS_DnssecLimitExceeded">DnssecLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemadnsseclimitexceeded"></a>
<a id="schema_DnssecLimitExceeded"></a>
<a id="tocSdnsseclimitexceeded"></a>
<a id="tocsdnsseclimitexceeded"></a>

```json
null
```

<h2 id="tocS_CancelDomainTransferToAnotherAwsAccountResponse">CancelDomainTransferToAnotherAwsAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceldomaintransfertoanotherawsaccountresponse"></a>
<a id="schema_CancelDomainTransferToAnotherAwsAccountResponse"></a>
<a id="tocScanceldomaintransfertoanotherawsaccountresponse"></a>
<a id="tocscanceldomaintransfertoanotherawsaccountresponse"></a>

```json
{
  "OperationId": {}
}
```

The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_CancelDomainTransferToAnotherAwsAccountRequest">CancelDomainTransferToAnotherAwsAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceldomaintransfertoanotherawsaccountrequest"></a>
<a id="schema_CancelDomainTransferToAnotherAwsAccountRequest"></a>
<a id="tocScanceldomaintransfertoanotherawsaccountrequest"></a>
<a id="tocscanceldomaintransfertoanotherawsaccountrequest"></a>

```json
{
  "DomainName": {}
}
```

The CancelDomainTransferToAnotherAwsAccount request includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_CheckDomainAvailabilityResponse">CheckDomainAvailabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckdomainavailabilityresponse"></a>
<a id="schema_CheckDomainAvailabilityResponse"></a>
<a id="tocScheckdomainavailabilityresponse"></a>
<a id="tocscheckdomainavailabilityresponse"></a>

```json
{
  "Availability": {}
}
```

The CheckDomainAvailability response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Availability|object|false|none|none|

<h2 id="tocS_CheckDomainAvailabilityRequest">CheckDomainAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckdomainavailabilityrequest"></a>
<a id="schema_CheckDomainAvailabilityRequest"></a>
<a id="tocScheckdomainavailabilityrequest"></a>
<a id="tocscheckdomainavailabilityrequest"></a>

```json
{
  "DomainName": {},
  "IdnLangCode": {}
}
```

The CheckDomainAvailability request contains the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|IdnLangCode|object|false|none|none|

<h2 id="tocS_CheckDomainTransferabilityResponse">CheckDomainTransferabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckdomaintransferabilityresponse"></a>
<a id="schema_CheckDomainTransferabilityResponse"></a>
<a id="tocScheckdomaintransferabilityresponse"></a>
<a id="tocscheckdomaintransferabilityresponse"></a>

```json
{
  "Transferability": {
    "Transferable": "TRANSFERABLE"
  }
}
```

The CheckDomainTransferability response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transferability|object|false|none|none|

<h2 id="tocS_CheckDomainTransferabilityRequest">CheckDomainTransferabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckdomaintransferabilityrequest"></a>
<a id="schema_CheckDomainTransferabilityRequest"></a>
<a id="tocScheckdomaintransferabilityrequest"></a>
<a id="tocscheckdomaintransferabilityrequest"></a>

```json
{
  "DomainName": {},
  "AuthCode": {}
}
```

The CheckDomainTransferability request contains the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|AuthCode|object|false|none|none|

<h2 id="tocS_DeleteDomainResponse">DeleteDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainresponse"></a>
<a id="schema_DeleteDomainResponse"></a>
<a id="tocSdeletedomainresponse"></a>
<a id="tocsdeletedomainresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DeleteDomainRequest">DeleteDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedomainrequest"></a>
<a id="schema_DeleteDomainRequest"></a>
<a id="tocSdeletedomainrequest"></a>
<a id="tocsdeletedomainrequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DeleteTagsForDomainResponse">DeleteTagsForDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsfordomainresponse"></a>
<a id="schema_DeleteTagsForDomainResponse"></a>
<a id="tocSdeletetagsfordomainresponse"></a>
<a id="tocsdeletetagsfordomainresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTagsForDomainRequest">DeleteTagsForDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetagsfordomainrequest"></a>
<a id="schema_DeleteTagsForDomainRequest"></a>
<a id="tocSdeletetagsfordomainrequest"></a>
<a id="tocsdeletetagsfordomainrequest"></a>

```json
{
  "DomainName": {},
  "TagsToDelete": {}
}
```

The DeleteTagsForDomainRequest includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|TagsToDelete|object|true|none|none|

<h2 id="tocS_DisableDomainAutoRenewResponse">DisableDomainAutoRenewResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisabledomainautorenewresponse"></a>
<a id="schema_DisableDomainAutoRenewResponse"></a>
<a id="tocSdisabledomainautorenewresponse"></a>
<a id="tocsdisabledomainautorenewresponse"></a>

```json
{}
```

<h2 id="tocS_DisableDomainAutoRenewRequest">DisableDomainAutoRenewRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisabledomainautorenewrequest"></a>
<a id="schema_DisableDomainAutoRenewRequest"></a>
<a id="tocSdisabledomainautorenewrequest"></a>
<a id="tocsdisabledomainautorenewrequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DisableDomainTransferLockResponse">DisableDomainTransferLockResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisabledomaintransferlockresponse"></a>
<a id="schema_DisableDomainTransferLockResponse"></a>
<a id="tocSdisabledomaintransferlockresponse"></a>
<a id="tocsdisabledomaintransferlockresponse"></a>

```json
{
  "OperationId": {}
}
```

The DisableDomainTransferLock response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DisableDomainTransferLockRequest">DisableDomainTransferLockRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisabledomaintransferlockrequest"></a>
<a id="schema_DisableDomainTransferLockRequest"></a>
<a id="tocSdisabledomaintransferlockrequest"></a>
<a id="tocsdisabledomaintransferlockrequest"></a>

```json
{
  "DomainName": {}
}
```

The DisableDomainTransferLock request includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_DisassociateDelegationSignerFromDomainResponse">DisassociateDelegationSignerFromDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedelegationsignerfromdomainresponse"></a>
<a id="schema_DisassociateDelegationSignerFromDomainResponse"></a>
<a id="tocSdisassociatedelegationsignerfromdomainresponse"></a>
<a id="tocsdisassociatedelegationsignerfromdomainresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_DisassociateDelegationSignerFromDomainRequest">DisassociateDelegationSignerFromDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatedelegationsignerfromdomainrequest"></a>
<a id="schema_DisassociateDelegationSignerFromDomainRequest"></a>
<a id="tocSdisassociatedelegationsignerfromdomainrequest"></a>
<a id="tocsdisassociatedelegationsignerfromdomainrequest"></a>

```json
{
  "DomainName": {},
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Id|object|true|none|none|

<h2 id="tocS_EnableDomainAutoRenewResponse">EnableDomainAutoRenewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenabledomainautorenewresponse"></a>
<a id="schema_EnableDomainAutoRenewResponse"></a>
<a id="tocSenabledomainautorenewresponse"></a>
<a id="tocsenabledomainautorenewresponse"></a>

```json
{}
```

<h2 id="tocS_EnableDomainAutoRenewRequest">EnableDomainAutoRenewRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenabledomainautorenewrequest"></a>
<a id="schema_EnableDomainAutoRenewRequest"></a>
<a id="tocSenabledomainautorenewrequest"></a>
<a id="tocsenabledomainautorenewrequest"></a>

```json
{
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_EnableDomainTransferLockResponse">EnableDomainTransferLockResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenabledomaintransferlockresponse"></a>
<a id="schema_EnableDomainTransferLockResponse"></a>
<a id="tocSenabledomaintransferlockresponse"></a>
<a id="tocsenabledomaintransferlockresponse"></a>

```json
{
  "OperationId": {}
}
```

The EnableDomainTransferLock response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_EnableDomainTransferLockRequest">EnableDomainTransferLockRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenabledomaintransferlockrequest"></a>
<a id="schema_EnableDomainTransferLockRequest"></a>
<a id="tocSenabledomaintransferlockrequest"></a>
<a id="tocsenabledomaintransferlockrequest"></a>

```json
{
  "DomainName": {}
}
```

A request to set the transfer lock for the specified domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_GetContactReachabilityStatusResponse">GetContactReachabilityStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactreachabilitystatusresponse"></a>
<a id="schema_GetContactReachabilityStatusResponse"></a>
<a id="tocSgetcontactreachabilitystatusresponse"></a>
<a id="tocsgetcontactreachabilitystatusresponse"></a>

```json
{
  "domainName": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_GetContactReachabilityStatusRequest">GetContactReachabilityStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontactreachabilitystatusrequest"></a>
<a id="schema_GetContactReachabilityStatusRequest"></a>
<a id="tocSgetcontactreachabilitystatusrequest"></a>
<a id="tocsgetcontactreachabilitystatusrequest"></a>

```json
{
  "domainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|

<h2 id="tocS_GetDomainDetailResponse">GetDomainDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomaindetailresponse"></a>
<a id="schema_GetDomainDetailResponse"></a>
<a id="tocSgetdomaindetailresponse"></a>
<a id="tocsgetdomaindetailresponse"></a>

```json
{
  "DomainName": {},
  "Nameservers": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "AdminPrivacy": {},
  "RegistrantPrivacy": {},
  "TechPrivacy": {},
  "RegistrarName": {},
  "WhoIsServer": {},
  "RegistrarUrl": {},
  "AbuseContactEmail": {},
  "AbuseContactPhone": {},
  "RegistryDomainId": {},
  "CreationDate": {},
  "UpdatedDate": {},
  "ExpirationDate": {},
  "Reseller": {},
  "DnsSec": {},
  "StatusList": {},
  "DnssecKeys": {}
}
```

The GetDomainDetail response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|Nameservers|object|false|none|none|
|AutoRenew|object|false|none|none|
|AdminContact|object|false|none|none|
|RegistrantContact|object|false|none|none|
|TechContact|object|false|none|none|
|AdminPrivacy|object|false|none|none|
|RegistrantPrivacy|object|false|none|none|
|TechPrivacy|object|false|none|none|
|RegistrarName|object|false|none|none|
|WhoIsServer|object|false|none|none|
|RegistrarUrl|object|false|none|none|
|AbuseContactEmail|object|false|none|none|
|AbuseContactPhone|object|false|none|none|
|RegistryDomainId|object|false|none|none|
|CreationDate|object|false|none|none|
|UpdatedDate|object|false|none|none|
|ExpirationDate|object|false|none|none|
|Reseller|object|false|none|none|
|DnsSec|object|false|none|none|
|StatusList|object|false|none|none|
|DnssecKeys|object|false|none|none|

<h2 id="tocS_GetDomainDetailRequest">GetDomainDetailRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomaindetailrequest"></a>
<a id="schema_GetDomainDetailRequest"></a>
<a id="tocSgetdomaindetailrequest"></a>
<a id="tocsgetdomaindetailrequest"></a>

```json
{
  "DomainName": {}
}
```

The GetDomainDetail request includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_GetDomainSuggestionsResponse">GetDomainSuggestionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainsuggestionsresponse"></a>
<a id="schema_GetDomainSuggestionsResponse"></a>
<a id="tocSgetdomainsuggestionsresponse"></a>
<a id="tocsgetdomainsuggestionsresponse"></a>

```json
{
  "SuggestionsList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SuggestionsList|object|false|none|none|

<h2 id="tocS_GetDomainSuggestionsRequest">GetDomainSuggestionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdomainsuggestionsrequest"></a>
<a id="schema_GetDomainSuggestionsRequest"></a>
<a id="tocSgetdomainsuggestionsrequest"></a>
<a id="tocsgetdomainsuggestionsrequest"></a>

```json
{
  "DomainName": {},
  "SuggestionCount": {},
  "OnlyAvailable": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|SuggestionCount|object|true|none|none|
|OnlyAvailable|object|true|none|none|

<h2 id="tocS_GetOperationDetailResponse">GetOperationDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationdetailresponse"></a>
<a id="schema_GetOperationDetailResponse"></a>
<a id="tocSgetoperationdetailresponse"></a>
<a id="tocsgetoperationdetailresponse"></a>

```json
{
  "OperationId": {},
  "Status": {},
  "Message": {},
  "DomainName": {},
  "Type": {},
  "SubmittedDate": {},
  "LastUpdatedDate": {},
  "StatusFlag": {}
}
```

The GetOperationDetail response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|
|Status|object|false|none|none|
|Message|object|false|none|none|
|DomainName|object|false|none|none|
|Type|object|false|none|none|
|SubmittedDate|object|false|none|none|
|LastUpdatedDate|object|false|none|none|
|StatusFlag|object|false|none|none|

<h2 id="tocS_GetOperationDetailRequest">GetOperationDetailRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoperationdetailrequest"></a>
<a id="schema_GetOperationDetailRequest"></a>
<a id="tocSgetoperationdetailrequest"></a>
<a id="tocsgetoperationdetailrequest"></a>

```json
{
  "OperationId": {}
}
```

The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|true|none|none|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "Domains": {},
  "NextPageMarker": {}
}
```

The ListDomains response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Domains|object|false|none|none|
|NextPageMarker|object|false|none|none|

<h2 id="tocS_ListDomainsRequest">ListDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsrequest"></a>
<a id="schema_ListDomainsRequest"></a>
<a id="tocSlistdomainsrequest"></a>
<a id="tocslistdomainsrequest"></a>

```json
{
  "FilterConditions": {},
  "SortCondition": {
    "Name": {},
    "SortOrder": {}
  },
  "Marker": {},
  "MaxItems": {}
}
```

The ListDomains request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FilterConditions|object|false|none|none|
|SortCondition|object|false|none|none|
|Marker|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "Operations": {},
  "NextPageMarker": {}
}
```

The ListOperations response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Operations|object|false|none|none|
|NextPageMarker|object|false|none|none|

<h2 id="tocS_ListOperationsRequest">ListOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsrequest"></a>
<a id="schema_ListOperationsRequest"></a>
<a id="tocSlistoperationsrequest"></a>
<a id="tocslistoperationsrequest"></a>

```json
{
  "SubmittedSince": {},
  "Marker": {},
  "MaxItems": {},
  "Status": {},
  "Type": {},
  "SortBy": {},
  "SortOrder": {}
}
```

The ListOperations request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubmittedSince|object|false|none|none|
|Marker|object|false|none|none|
|MaxItems|object|false|none|none|
|Status|object|false|none|none|
|Type|object|false|none|none|
|SortBy|object|false|none|none|
|SortOrder|object|false|none|none|

<h2 id="tocS_ListPricesResponse">ListPricesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpricesresponse"></a>
<a id="schema_ListPricesResponse"></a>
<a id="tocSlistpricesresponse"></a>
<a id="tocslistpricesresponse"></a>

```json
{
  "Prices": {},
  "NextPageMarker": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prices|object|false|none|none|
|NextPageMarker|object|false|none|none|

<h2 id="tocS_ListPricesRequest">ListPricesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpricesrequest"></a>
<a id="schema_ListPricesRequest"></a>
<a id="tocSlistpricesrequest"></a>
<a id="tocslistpricesrequest"></a>

```json
{
  "Tld": {},
  "Marker": {},
  "MaxItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tld|object|false|none|none|
|Marker|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_ListTagsForDomainResponse">ListTagsForDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordomainresponse"></a>
<a id="schema_ListTagsForDomainResponse"></a>
<a id="tocSlisttagsfordomainresponse"></a>
<a id="tocslisttagsfordomainresponse"></a>

```json
{
  "TagList": {}
}
```

The ListTagsForDomain response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_ListTagsForDomainRequest">ListTagsForDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsfordomainrequest"></a>
<a id="schema_ListTagsForDomainRequest"></a>
<a id="tocSlisttagsfordomainrequest"></a>
<a id="tocslisttagsfordomainrequest"></a>

```json
{
  "DomainName": {}
}
```

The ListTagsForDomainRequest includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_PushDomainRequest">PushDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemapushdomainrequest"></a>
<a id="schema_PushDomainRequest"></a>
<a id="tocSpushdomainrequest"></a>
<a id="tocspushdomainrequest"></a>

```json
{
  "DomainName": {},
  "Target": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|Target|object|true|none|none|

<h2 id="tocS_RegisterDomainResponse">RegisterDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdomainresponse"></a>
<a id="schema_RegisterDomainResponse"></a>
<a id="tocSregisterdomainresponse"></a>
<a id="tocsregisterdomainresponse"></a>

```json
{
  "OperationId": {}
}
```

The RegisterDomain response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_RegisterDomainRequest">RegisterDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterdomainrequest"></a>
<a id="schema_RegisterDomainRequest"></a>
<a id="tocSregisterdomainrequest"></a>
<a id="tocsregisterdomainrequest"></a>

```json
{
  "DomainName": {},
  "IdnLangCode": {},
  "DurationInYears": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "PrivacyProtectAdminContact": {},
  "PrivacyProtectRegistrantContact": {},
  "PrivacyProtectTechContact": {}
}
```

The RegisterDomain request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|IdnLangCode|object|false|none|none|
|DurationInYears|object|true|none|none|
|AutoRenew|object|false|none|none|
|AdminContact|object|true|none|none|
|RegistrantContact|object|true|none|none|
|TechContact|object|true|none|none|
|PrivacyProtectAdminContact|object|false|none|none|
|PrivacyProtectRegistrantContact|object|false|none|none|
|PrivacyProtectTechContact|object|false|none|none|

<h2 id="tocS_RejectDomainTransferFromAnotherAwsAccountResponse">RejectDomainTransferFromAnotherAwsAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectdomaintransferfromanotherawsaccountresponse"></a>
<a id="schema_RejectDomainTransferFromAnotherAwsAccountResponse"></a>
<a id="tocSrejectdomaintransferfromanotherawsaccountresponse"></a>
<a id="tocsrejectdomaintransferfromanotherawsaccountresponse"></a>

```json
{
  "OperationId": {}
}
```

The RejectDomainTransferFromAnotherAwsAccount response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_RejectDomainTransferFromAnotherAwsAccountRequest">RejectDomainTransferFromAnotherAwsAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectdomaintransferfromanotherawsaccountrequest"></a>
<a id="schema_RejectDomainTransferFromAnotherAwsAccountRequest"></a>
<a id="tocSrejectdomaintransferfromanotherawsaccountrequest"></a>
<a id="tocsrejectdomaintransferfromanotherawsaccountrequest"></a>

```json
{
  "DomainName": {}
}
```

The RejectDomainTransferFromAnotherAwsAccount request includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_RenewDomainResponse">RenewDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemarenewdomainresponse"></a>
<a id="schema_RenewDomainResponse"></a>
<a id="tocSrenewdomainresponse"></a>
<a id="tocsrenewdomainresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_RenewDomainRequest">RenewDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemarenewdomainrequest"></a>
<a id="schema_RenewDomainRequest"></a>
<a id="tocSrenewdomainrequest"></a>
<a id="tocsrenewdomainrequest"></a>

```json
{
  "DomainName": {},
  "DurationInYears": {},
  "CurrentExpiryYear": {}
}
```

A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|DurationInYears|object|false|none|none|
|CurrentExpiryYear|object|true|none|none|

<h2 id="tocS_ResendContactReachabilityEmailResponse">ResendContactReachabilityEmailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresendcontactreachabilityemailresponse"></a>
<a id="schema_ResendContactReachabilityEmailResponse"></a>
<a id="tocSresendcontactreachabilityemailresponse"></a>
<a id="tocsresendcontactreachabilityemailresponse"></a>

```json
{
  "domainName": {},
  "emailAddress": {},
  "isAlreadyVerified": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|
|emailAddress|object|false|none|none|
|isAlreadyVerified|object|false|none|none|

<h2 id="tocS_ResendContactReachabilityEmailRequest">ResendContactReachabilityEmailRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendcontactreachabilityemailrequest"></a>
<a id="schema_ResendContactReachabilityEmailRequest"></a>
<a id="tocSresendcontactreachabilityemailrequest"></a>
<a id="tocsresendcontactreachabilityemailrequest"></a>

```json
{
  "domainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|false|none|none|

<h2 id="tocS_ResendOperationAuthorizationRequest">ResendOperationAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendoperationauthorizationrequest"></a>
<a id="schema_ResendOperationAuthorizationRequest"></a>
<a id="tocSresendoperationauthorizationrequest"></a>
<a id="tocsresendoperationauthorizationrequest"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|true|none|none|

<h2 id="tocS_RetrieveDomainAuthCodeResponse">RetrieveDomainAuthCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedomainauthcoderesponse"></a>
<a id="schema_RetrieveDomainAuthCodeResponse"></a>
<a id="tocSretrievedomainauthcoderesponse"></a>
<a id="tocsretrievedomainauthcoderesponse"></a>

```json
{
  "AuthCode": {}
}
```

The RetrieveDomainAuthCode response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthCode|object|false|none|none|

<h2 id="tocS_RetrieveDomainAuthCodeRequest">RetrieveDomainAuthCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedomainauthcoderequest"></a>
<a id="schema_RetrieveDomainAuthCodeRequest"></a>
<a id="tocSretrievedomainauthcoderequest"></a>
<a id="tocsretrievedomainauthcoderequest"></a>

```json
{
  "DomainName": {}
}
```

A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_TransferDomainResponse">TransferDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferdomainresponse"></a>
<a id="schema_TransferDomainResponse"></a>
<a id="tocStransferdomainresponse"></a>
<a id="tocstransferdomainresponse"></a>

```json
{
  "OperationId": {}
}
```

The TransferDomain response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_TransferDomainRequest">TransferDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferdomainrequest"></a>
<a id="schema_TransferDomainRequest"></a>
<a id="tocStransferdomainrequest"></a>
<a id="tocstransferdomainrequest"></a>

```json
{
  "DomainName": {},
  "IdnLangCode": {},
  "DurationInYears": {},
  "Nameservers": {},
  "AuthCode": {},
  "AutoRenew": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "PrivacyProtectAdminContact": {},
  "PrivacyProtectRegistrantContact": {},
  "PrivacyProtectTechContact": {}
}
```

The TransferDomain request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|IdnLangCode|object|false|none|none|
|DurationInYears|object|true|none|none|
|Nameservers|object|false|none|none|
|AuthCode|object|false|none|none|
|AutoRenew|object|false|none|none|
|AdminContact|object|true|none|none|
|RegistrantContact|object|true|none|none|
|TechContact|object|true|none|none|
|PrivacyProtectAdminContact|object|false|none|none|
|PrivacyProtectRegistrantContact|object|false|none|none|
|PrivacyProtectTechContact|object|false|none|none|

<h2 id="tocS_TransferDomainToAnotherAwsAccountResponse">TransferDomainToAnotherAwsAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferdomaintoanotherawsaccountresponse"></a>
<a id="schema_TransferDomainToAnotherAwsAccountResponse"></a>
<a id="tocStransferdomaintoanotherawsaccountresponse"></a>
<a id="tocstransferdomaintoanotherawsaccountresponse"></a>

```json
{
  "OperationId": {},
  "Password": {}
}
```

The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|
|Password|object|false|none|none|

<h2 id="tocS_TransferDomainToAnotherAwsAccountRequest">TransferDomainToAnotherAwsAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferdomaintoanotherawsaccountrequest"></a>
<a id="schema_TransferDomainToAnotherAwsAccountRequest"></a>
<a id="tocStransferdomaintoanotherawsaccountrequest"></a>
<a id="tocstransferdomaintoanotherawsaccountrequest"></a>

```json
{
  "DomainName": {},
  "AccountId": {}
}
```

The TransferDomainToAnotherAwsAccount request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|AccountId|object|true|none|none|

<h2 id="tocS_UpdateDomainContactResponse">UpdateDomainContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomaincontactresponse"></a>
<a id="schema_UpdateDomainContactResponse"></a>
<a id="tocSupdatedomaincontactresponse"></a>
<a id="tocsupdatedomaincontactresponse"></a>

```json
{
  "OperationId": {}
}
```

The UpdateDomainContact response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateDomainContactRequest">UpdateDomainContactRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomaincontactrequest"></a>
<a id="schema_UpdateDomainContactRequest"></a>
<a id="tocSupdatedomaincontactrequest"></a>
<a id="tocsupdatedomaincontactrequest"></a>

```json
{
  "DomainName": {},
  "AdminContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "RegistrantContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "TechContact": {
    "FirstName": {},
    "LastName": {},
    "ContactType": {},
    "OrganizationName": {},
    "AddressLine1": {},
    "AddressLine2": {},
    "City": {},
    "State": {},
    "CountryCode": {},
    "ZipCode": {},
    "PhoneNumber": {},
    "Email": {},
    "Fax": {},
    "ExtraParams": {}
  },
  "Consent": {
    "MaxPrice": {},
    "Currency": {}
  }
}
```

The UpdateDomainContact request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|AdminContact|object|false|none|none|
|RegistrantContact|object|false|none|none|
|TechContact|object|false|none|none|
|Consent|object|false|none|none|

<h2 id="tocS_UpdateDomainContactPrivacyResponse">UpdateDomainContactPrivacyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomaincontactprivacyresponse"></a>
<a id="schema_UpdateDomainContactPrivacyResponse"></a>
<a id="tocSupdatedomaincontactprivacyresponse"></a>
<a id="tocsupdatedomaincontactprivacyresponse"></a>

```json
{
  "OperationId": {}
}
```

The UpdateDomainContactPrivacy response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateDomainContactPrivacyRequest">UpdateDomainContactPrivacyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomaincontactprivacyrequest"></a>
<a id="schema_UpdateDomainContactPrivacyRequest"></a>
<a id="tocSupdatedomaincontactprivacyrequest"></a>
<a id="tocsupdatedomaincontactprivacyrequest"></a>

```json
{
  "DomainName": {},
  "AdminPrivacy": {},
  "RegistrantPrivacy": {},
  "TechPrivacy": {}
}
```

The UpdateDomainContactPrivacy request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|AdminPrivacy|object|false|none|none|
|RegistrantPrivacy|object|false|none|none|
|TechPrivacy|object|false|none|none|

<h2 id="tocS_UpdateDomainNameserversResponse">UpdateDomainNameserversResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnameserversresponse"></a>
<a id="schema_UpdateDomainNameserversResponse"></a>
<a id="tocSupdatedomainnameserversresponse"></a>
<a id="tocsupdatedomainnameserversresponse"></a>

```json
{
  "OperationId": {}
}
```

The UpdateDomainNameservers response includes the following element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|

<h2 id="tocS_UpdateDomainNameserversRequest">UpdateDomainNameserversRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedomainnameserversrequest"></a>
<a id="schema_UpdateDomainNameserversRequest"></a>
<a id="tocSupdatedomainnameserversrequest"></a>
<a id="tocsupdatedomainnameserversrequest"></a>

```json
{
  "DomainName": {},
  "FIAuthKey": {},
  "Nameservers": {}
}
```

<p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|FIAuthKey|object|false|none|none|
|Nameservers|object|true|none|none|

<h2 id="tocS_UpdateTagsForDomainResponse">UpdateTagsForDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagsfordomainresponse"></a>
<a id="schema_UpdateTagsForDomainResponse"></a>
<a id="tocSupdatetagsfordomainresponse"></a>
<a id="tocsupdatetagsfordomainresponse"></a>

```json
{}
```

<h2 id="tocS_UpdateTagsForDomainRequest">UpdateTagsForDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetagsfordomainrequest"></a>
<a id="schema_UpdateTagsForDomainRequest"></a>
<a id="tocSupdatetagsfordomainrequest"></a>
<a id="tocsupdatetagsfordomainrequest"></a>

```json
{
  "DomainName": {},
  "TagsToUpdate": {}
}
```

The UpdateTagsForDomainRequest includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|TagsToUpdate|object|false|none|none|

<h2 id="tocS_ViewBillingResponse">ViewBillingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaviewbillingresponse"></a>
<a id="schema_ViewBillingResponse"></a>
<a id="tocSviewbillingresponse"></a>
<a id="tocsviewbillingresponse"></a>

```json
{
  "NextPageMarker": {},
  "BillingRecords": {}
}
```

The ViewBilling response includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextPageMarker|object|false|none|none|
|BillingRecords|object|false|none|none|

<h2 id="tocS_ViewBillingRequest">ViewBillingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaviewbillingrequest"></a>
<a id="schema_ViewBillingRequest"></a>
<a id="tocSviewbillingrequest"></a>
<a id="tocsviewbillingrequest"></a>

```json
{
  "Start": {},
  "End": {},
  "Marker": {},
  "MaxItems": {}
}
```

The ViewBilling request includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Start|object|false|none|none|
|End|object|false|none|none|
|Marker|object|false|none|none|
|MaxItems|object|false|none|none|

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
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

<h2 id="tocS_OperationId">OperationId</h2>
<!-- backwards compatibility -->
<a id="schemaoperationid"></a>
<a id="schema_OperationId"></a>
<a id="tocSoperationid"></a>
<a id="tocsoperationid"></a>

```json
"string"
```

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_AddressLine">AddressLine</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline"></a>
<a id="schema_AddressLine"></a>
<a id="tocSaddressline"></a>
<a id="tocsaddressline"></a>

```json
"string"
```

<h2 id="tocS_DnssecSigningAttributes">DnssecSigningAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadnssecsigningattributes"></a>
<a id="schema_DnssecSigningAttributes"></a>
<a id="tocSdnssecsigningattributes"></a>
<a id="tocsdnssecsigningattributes"></a>

```json
{
  "Algorithm": {},
  "Flags": {},
  "PublicKey": {}
}
```

Information about a delegation signer (DS) record that was created in the registry by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Algorithm|object|false|none|none|
|Flags|object|false|none|none|
|PublicKey|object|false|none|none|

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"REGISTER_DOMAIN"
```

<h2 id="tocS_InvoiceId">InvoiceId</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceid"></a>
<a id="schema_InvoiceId"></a>
<a id="tocSinvoiceid"></a>
<a id="tocsinvoiceid"></a>

```json
"string"
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

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
0
```

<h2 id="tocS_BillingRecord">BillingRecord</h2>
<!-- backwards compatibility -->
<a id="schemabillingrecord"></a>
<a id="schema_BillingRecord"></a>
<a id="tocSbillingrecord"></a>
<a id="tocsbillingrecord"></a>

```json
{
  "DomainName": {},
  "Operation": {},
  "InvoiceId": {},
  "BillDate": {},
  "Price": {}
}
```

Information for one billing record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|Operation|object|false|none|none|
|InvoiceId|object|false|none|none|
|BillDate|object|false|none|none|
|Price|object|false|none|none|

<h2 id="tocS_BillingRecords">BillingRecords</h2>
<!-- backwards compatibility -->
<a id="schemabillingrecords"></a>
<a id="schema_BillingRecords"></a>
<a id="tocSbillingrecords"></a>
<a id="tocsbillingrecords"></a>

```json
[
  {
    "DomainName": {},
    "Operation": {},
    "InvoiceId": {},
    "BillDate": {},
    "Price": {}
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

<h2 id="tocS_LangCode">LangCode</h2>
<!-- backwards compatibility -->
<a id="schemalangcode"></a>
<a id="schema_LangCode"></a>
<a id="tocSlangcode"></a>
<a id="tocslangcode"></a>

```json
"str"
```

<h2 id="tocS_DomainAvailability">DomainAvailability</h2>
<!-- backwards compatibility -->
<a id="schemadomainavailability"></a>
<a id="schema_DomainAvailability"></a>
<a id="tocSdomainavailability"></a>
<a id="tocsdomainavailability"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_DomainAuthCode">DomainAuthCode</h2>
<!-- backwards compatibility -->
<a id="schemadomainauthcode"></a>
<a id="schema_DomainAuthCode"></a>
<a id="tocSdomainauthcode"></a>
<a id="tocsdomainauthcode"></a>

```json
"password"
```

<h2 id="tocS_DomainTransferability">DomainTransferability</h2>
<!-- backwards compatibility -->
<a id="schemadomaintransferability"></a>
<a id="schema_DomainTransferability"></a>
<a id="tocSdomaintransferability"></a>
<a id="tocsdomaintransferability"></a>

```json
{
  "Transferable": "TRANSFERABLE"
}
```

A complex type that contains information about whether the specified domain can be transferred to Route 53.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transferable|[Transferable](#schematransferable)|false|none|<p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl>|

#### Enumerated Values

|Property|Value|
|---|---|
|Transferable|TRANSFERABLE|
|Transferable|UNTRANSFERABLE|
|Transferable|DONT_KNOW|
|Transferable|DOMAIN_IN_OWN_ACCOUNT|
|Transferable|DOMAIN_IN_ANOTHER_ACCOUNT|
|Transferable|PREMIUM_DOMAIN|

<h2 id="tocS_City">City</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
"string"
```

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"str"
```

<h2 id="tocS_Consent">Consent</h2>
<!-- backwards compatibility -->
<a id="schemaconsent"></a>
<a id="schema_Consent"></a>
<a id="tocSconsent"></a>
<a id="tocsconsent"></a>

```json
{
  "MaxPrice": {},
  "Currency": {}
}
```

 Customer's consent for the owner change request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxPrice|object|true|none|none|
|Currency|object|true|none|none|

<h2 id="tocS_ContactName">ContactName</h2>
<!-- backwards compatibility -->
<a id="schemacontactname"></a>
<a id="schema_ContactName"></a>
<a id="tocScontactname"></a>
<a id="tocscontactname"></a>

```json
"string"
```

<h2 id="tocS_ContactType">ContactType</h2>
<!-- backwards compatibility -->
<a id="schemacontacttype"></a>
<a id="schema_ContactType"></a>
<a id="tocScontacttype"></a>
<a id="tocscontacttype"></a>

```json
"PERSON"
```

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
"string"
```

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"AC"
```

<h2 id="tocS_ZipCode">ZipCode</h2>
<!-- backwards compatibility -->
<a id="schemazipcode"></a>
<a id="schema_ZipCode"></a>
<a id="tocSzipcode"></a>
<a id="tocszipcode"></a>

```json
"string"
```

<h2 id="tocS_ContactNumber">ContactNumber</h2>
<!-- backwards compatibility -->
<a id="schemacontactnumber"></a>
<a id="schema_ContactNumber"></a>
<a id="tocScontactnumber"></a>
<a id="tocscontactnumber"></a>

```json
"string"
```

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

<h2 id="tocS_ExtraParamList">ExtraParamList</h2>
<!-- backwards compatibility -->
<a id="schemaextraparamlist"></a>
<a id="schema_ExtraParamList"></a>
<a id="tocSextraparamlist"></a>
<a id="tocsextraparamlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ContactDetail">ContactDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontactdetail"></a>
<a id="schema_ContactDetail"></a>
<a id="tocScontactdetail"></a>
<a id="tocscontactdetail"></a>

```json
{
  "FirstName": {},
  "LastName": {},
  "ContactType": {},
  "OrganizationName": {},
  "AddressLine1": {},
  "AddressLine2": {},
  "City": {},
  "State": {},
  "CountryCode": {},
  "ZipCode": {},
  "PhoneNumber": {},
  "Email": {},
  "Fax": {},
  "ExtraParams": {}
}
```

ContactDetail includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstName|object|false|none|none|
|LastName|object|false|none|none|
|ContactType|object|false|none|none|
|OrganizationName|object|false|none|none|
|AddressLine1|object|false|none|none|
|AddressLine2|object|false|none|none|
|City|object|false|none|none|
|State|object|false|none|none|
|CountryCode|object|false|none|none|
|ZipCode|object|false|none|none|
|PhoneNumber|object|false|none|none|
|Email|object|false|none|none|
|Fax|object|false|none|none|
|ExtraParams|object|false|none|none|

<h2 id="tocS_CurrentExpiryYear">CurrentExpiryYear</h2>
<!-- backwards compatibility -->
<a id="schemacurrentexpiryyear"></a>
<a id="schema_CurrentExpiryYear"></a>
<a id="tocScurrentexpiryyear"></a>
<a id="tocscurrentexpiryyear"></a>

```json
0
```

<h2 id="tocS_DNSSec">DNSSec</h2>
<!-- backwards compatibility -->
<a id="schemadnssec"></a>
<a id="schema_DNSSec"></a>
<a id="tocSdnssec"></a>
<a id="tocsdnssec"></a>

```json
"string"
```

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

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_DnssecPublicKey">DnssecPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemadnssecpublickey"></a>
<a id="schema_DnssecPublicKey"></a>
<a id="tocSdnssecpublickey"></a>
<a id="tocsdnssecpublickey"></a>

```json
"string"
```

<h2 id="tocS_DnssecKey">DnssecKey</h2>
<!-- backwards compatibility -->
<a id="schemadnsseckey"></a>
<a id="schema_DnssecKey"></a>
<a id="tocSdnsseckey"></a>
<a id="tocsdnsseckey"></a>

```json
{
  "Algorithm": {},
  "Flags": {},
  "PublicKey": {},
  "DigestType": {},
  "Digest": {},
  "KeyTag": {},
  "Id": {}
}
```

<p>Information about the DNSSEC key.</p> <p>You get this from your DNS provider and then give it to Route 53 (by using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish the chain of trust.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Algorithm|object|false|none|none|
|Flags|object|false|none|none|
|PublicKey|object|false|none|none|
|DigestType|object|false|none|none|
|Digest|object|false|none|none|
|KeyTag|object|false|none|none|
|Id|object|false|none|none|

<h2 id="tocS_DnssecKeyList">DnssecKeyList</h2>
<!-- backwards compatibility -->
<a id="schemadnsseckeylist"></a>
<a id="schema_DnssecKeyList"></a>
<a id="tocSdnsseckeylist"></a>
<a id="tocsdnsseckeylist"></a>

```json
[
  {
    "Algorithm": {},
    "Flags": {},
    "PublicKey": {},
    "DigestType": {},
    "Digest": {},
    "KeyTag": {},
    "Id": {}
  }
]
```

<h2 id="tocS_DomainPriceName">DomainPriceName</h2>
<!-- backwards compatibility -->
<a id="schemadomainpricename"></a>
<a id="schema_DomainPriceName"></a>
<a id="tocSdomainpricename"></a>
<a id="tocsdomainpricename"></a>

```json
"string"
```

<h2 id="tocS_PriceWithCurrency">PriceWithCurrency</h2>
<!-- backwards compatibility -->
<a id="schemapricewithcurrency"></a>
<a id="schema_PriceWithCurrency"></a>
<a id="tocSpricewithcurrency"></a>
<a id="tocspricewithcurrency"></a>

```json
{
  "Price": {},
  "Currency": {}
}
```

Currency-specific price information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Price|object|true|none|none|
|Currency|object|true|none|none|

<h2 id="tocS_DomainPrice">DomainPrice</h2>
<!-- backwards compatibility -->
<a id="schemadomainprice"></a>
<a id="schema_DomainPrice"></a>
<a id="tocSdomainprice"></a>
<a id="tocsdomainprice"></a>

```json
{
  "Name": {},
  "RegistrationPrice": {
    "Price": {},
    "Currency": {}
  },
  "TransferPrice": {
    "Price": {},
    "Currency": {}
  },
  "RenewalPrice": {
    "Price": {},
    "Currency": {}
  },
  "ChangeOwnershipPrice": {
    "Price": {},
    "Currency": {}
  },
  "RestorationPrice": {
    "Price": {},
    "Currency": {}
  }
}
```

Information about the domain price associated with a TLD.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|RegistrationPrice|object|false|none|none|
|TransferPrice|object|false|none|none|
|RenewalPrice|object|false|none|none|
|ChangeOwnershipPrice|object|false|none|none|
|RestorationPrice|object|false|none|none|

<h2 id="tocS_DomainPriceList">DomainPriceList</h2>
<!-- backwards compatibility -->
<a id="schemadomainpricelist"></a>
<a id="schema_DomainPriceList"></a>
<a id="tocSdomainpricelist"></a>
<a id="tocsdomainpricelist"></a>

```json
[
  {
    "Name": {},
    "RegistrationPrice": {
      "Price": {},
      "Currency": {}
    },
    "TransferPrice": {
      "Price": {},
      "Currency": {}
    },
    "RenewalPrice": {
      "Price": {},
      "Currency": {}
    },
    "ChangeOwnershipPrice": {
      "Price": {},
      "Currency": {}
    },
    "RestorationPrice": {
      "Price": {},
      "Currency": {}
    }
  }
]
```

<h2 id="tocS_DomainStatus">DomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatus"></a>
<a id="schema_DomainStatus"></a>
<a id="tocSdomainstatus"></a>
<a id="tocsdomainstatus"></a>

```json
"string"
```

<h2 id="tocS_DomainStatusList">DomainStatusList</h2>
<!-- backwards compatibility -->
<a id="schemadomainstatuslist"></a>
<a id="schema_DomainStatusList"></a>
<a id="tocSdomainstatuslist"></a>
<a id="tocsdomainstatuslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DomainSuggestion">DomainSuggestion</h2>
<!-- backwards compatibility -->
<a id="schemadomainsuggestion"></a>
<a id="schema_DomainSuggestion"></a>
<a id="tocSdomainsuggestion"></a>
<a id="tocsdomainsuggestion"></a>

```json
{
  "DomainName": {},
  "Availability": {}
}
```

Information about one suggested domain name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|Availability|object|false|none|none|

<h2 id="tocS_DomainSuggestionsList">DomainSuggestionsList</h2>
<!-- backwards compatibility -->
<a id="schemadomainsuggestionslist"></a>
<a id="schema_DomainSuggestionsList"></a>
<a id="tocSdomainsuggestionslist"></a>
<a id="tocsdomainsuggestionslist"></a>

```json
[
  {
    "DomainName": {},
    "Availability": {}
  }
]
```

<h2 id="tocS_DomainSummary">DomainSummary</h2>
<!-- backwards compatibility -->
<a id="schemadomainsummary"></a>
<a id="schema_DomainSummary"></a>
<a id="tocSdomainsummary"></a>
<a id="tocsdomainsummary"></a>

```json
{
  "DomainName": {},
  "AutoRenew": {},
  "TransferLock": {},
  "Expiry": {}
}
```

Summary information about one domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|AutoRenew|object|false|none|none|
|TransferLock|object|false|none|none|
|Expiry|object|false|none|none|

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
    "AutoRenew": {},
    "TransferLock": {},
    "Expiry": {}
  }
]
```

<h2 id="tocS_Transferable">Transferable</h2>
<!-- backwards compatibility -->
<a id="schematransferable"></a>
<a id="schema_Transferable"></a>
<a id="tocStransferable"></a>
<a id="tocstransferable"></a>

```json
"TRANSFERABLE"
```

<p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl>

<h2 id="tocS_DurationInYears">DurationInYears</h2>
<!-- backwards compatibility -->
<a id="schemadurationinyears"></a>
<a id="schema_DurationInYears"></a>
<a id="tocSdurationinyears"></a>
<a id="tocsdurationinyears"></a>

```json
1
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

<h2 id="tocS_ExtraParamName">ExtraParamName</h2>
<!-- backwards compatibility -->
<a id="schemaextraparamname"></a>
<a id="schema_ExtraParamName"></a>
<a id="tocSextraparamname"></a>
<a id="tocsextraparamname"></a>

```json
"DUNS_NUMBER"
```

<h2 id="tocS_ExtraParamValue">ExtraParamValue</h2>
<!-- backwards compatibility -->
<a id="schemaextraparamvalue"></a>
<a id="schema_ExtraParamValue"></a>
<a id="tocSextraparamvalue"></a>
<a id="tocsextraparamvalue"></a>

```json
"password"
```

<h2 id="tocS_ExtraParam">ExtraParam</h2>
<!-- backwards compatibility -->
<a id="schemaextraparam"></a>
<a id="schema_ExtraParam"></a>
<a id="tocSextraparam"></a>
<a id="tocsextraparam"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

ExtraParam includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_FIAuthKey">FIAuthKey</h2>
<!-- backwards compatibility -->
<a id="schemafiauthkey"></a>
<a id="schema_FIAuthKey"></a>
<a id="tocSfiauthkey"></a>
<a id="tocsfiauthkey"></a>

```json
"password"
```

<h2 id="tocS_ListDomainsAttributeName">ListDomainsAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsattributename"></a>
<a id="schema_ListDomainsAttributeName"></a>
<a id="tocSlistdomainsattributename"></a>
<a id="tocslistdomainsattributename"></a>

```json
"DomainName"
```

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
"LE"
```

<h2 id="tocS_Values">Values</h2>
<!-- backwards compatibility -->
<a id="schemavalues"></a>
<a id="schema_Values"></a>
<a id="tocSvalues"></a>
<a id="tocsvalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FilterCondition">FilterCondition</h2>
<!-- backwards compatibility -->
<a id="schemafiltercondition"></a>
<a id="schema_FilterCondition"></a>
<a id="tocSfiltercondition"></a>
<a id="tocsfiltercondition"></a>

```json
{
  "Name": {},
  "Operator": {},
  "Values": {}
}
```

Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Operator|object|true|none|none|
|Values|object|true|none|none|

<h2 id="tocS_FilterConditions">FilterConditions</h2>
<!-- backwards compatibility -->
<a id="schemafilterconditions"></a>
<a id="schema_FilterConditions"></a>
<a id="tocSfilterconditions"></a>
<a id="tocsfilterconditions"></a>

```json
[
  {
    "Name": {},
    "Operator": {},
    "Values": {}
  }
]
```

<h2 id="tocS_ReachabilityStatus">ReachabilityStatus</h2>
<!-- backwards compatibility -->
<a id="schemareachabilitystatus"></a>
<a id="schema_ReachabilityStatus"></a>
<a id="tocSreachabilitystatus"></a>
<a id="tocsreachabilitystatus"></a>

```json
"PENDING"
```

<h2 id="tocS_NameserverList">NameserverList</h2>
<!-- backwards compatibility -->
<a id="schemanameserverlist"></a>
<a id="schema_NameserverList"></a>
<a id="tocSnameserverlist"></a>
<a id="tocsnameserverlist"></a>

```json
[
  {
    "Name": {},
    "GlueIps": {}
  }
]
```

<h2 id="tocS_RegistrarName">RegistrarName</h2>
<!-- backwards compatibility -->
<a id="schemaregistrarname"></a>
<a id="schema_RegistrarName"></a>
<a id="tocSregistrarname"></a>
<a id="tocsregistrarname"></a>

```json
"string"
```

<h2 id="tocS_RegistrarWhoIsServer">RegistrarWhoIsServer</h2>
<!-- backwards compatibility -->
<a id="schemaregistrarwhoisserver"></a>
<a id="schema_RegistrarWhoIsServer"></a>
<a id="tocSregistrarwhoisserver"></a>
<a id="tocsregistrarwhoisserver"></a>

```json
"string"
```

<h2 id="tocS_RegistrarUrl">RegistrarUrl</h2>
<!-- backwards compatibility -->
<a id="schemaregistrarurl"></a>
<a id="schema_RegistrarUrl"></a>
<a id="tocSregistrarurl"></a>
<a id="tocsregistrarurl"></a>

```json
"string"
```

<h2 id="tocS_RegistryDomainId">RegistryDomainId</h2>
<!-- backwards compatibility -->
<a id="schemaregistrydomainid"></a>
<a id="schema_RegistryDomainId"></a>
<a id="tocSregistrydomainid"></a>
<a id="tocsregistrydomainid"></a>

```json
"string"
```

<h2 id="tocS_Reseller">Reseller</h2>
<!-- backwards compatibility -->
<a id="schemareseller"></a>
<a id="schema_Reseller"></a>
<a id="tocSreseller"></a>
<a id="tocsreseller"></a>

```json
"string"
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

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"SUBMITTED"
```

<h2 id="tocS_StatusFlag">StatusFlag</h2>
<!-- backwards compatibility -->
<a id="schemastatusflag"></a>
<a id="schema_StatusFlag"></a>
<a id="tocSstatusflag"></a>
<a id="tocsstatusflag"></a>

```json
"PENDING_ACCEPTANCE"
```

<h2 id="tocS_GlueIp">GlueIp</h2>
<!-- backwards compatibility -->
<a id="schemaglueip"></a>
<a id="schema_GlueIp"></a>
<a id="tocSglueip"></a>
<a id="tocsglueip"></a>

```json
"string"
```

<h2 id="tocS_GlueIpList">GlueIpList</h2>
<!-- backwards compatibility -->
<a id="schemaglueiplist"></a>
<a id="schema_GlueIpList"></a>
<a id="tocSglueiplist"></a>
<a id="tocsglueiplist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HostName">HostName</h2>
<!-- backwards compatibility -->
<a id="schemahostname"></a>
<a id="schema_HostName"></a>
<a id="tocShostname"></a>
<a id="tocshostname"></a>

```json
"string"
```

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
"string"
```

<h2 id="tocS_SortCondition">SortCondition</h2>
<!-- backwards compatibility -->
<a id="schemasortcondition"></a>
<a id="schema_SortCondition"></a>
<a id="tocSsortcondition"></a>
<a id="tocssortcondition"></a>

```json
{
  "Name": {},
  "SortOrder": {}
}
```

Information for sorting a list of domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|SortOrder|object|true|none|none|

<h2 id="tocS_PageMarker">PageMarker</h2>
<!-- backwards compatibility -->
<a id="schemapagemarker"></a>
<a id="schema_PageMarker"></a>
<a id="tocSpagemarker"></a>
<a id="tocspagemarker"></a>

```json
"string"
```

<h2 id="tocS_PageMaxItems">PageMaxItems</h2>
<!-- backwards compatibility -->
<a id="schemapagemaxitems"></a>
<a id="schema_PageMaxItems"></a>
<a id="tocSpagemaxitems"></a>
<a id="tocspagemaxitems"></a>

```json
0
```

<h2 id="tocS_OperationStatusList">OperationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatuslist"></a>
<a id="schema_OperationStatusList"></a>
<a id="tocSoperationstatuslist"></a>
<a id="tocsoperationstatuslist"></a>

```json
[
  "SUBMITTED"
]
```

<h2 id="tocS_OperationTypeList">OperationTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtypelist"></a>
<a id="schema_OperationTypeList"></a>
<a id="tocSoperationtypelist"></a>
<a id="tocsoperationtypelist"></a>

```json
[
  "REGISTER_DOMAIN"
]
```

<h2 id="tocS_ListOperationsSortAttributeName">ListOperationsSortAttributeName</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationssortattributename"></a>
<a id="schema_ListOperationsSortAttributeName"></a>
<a id="tocSlistoperationssortattributename"></a>
<a id="tocslistoperationssortattributename"></a>

```json
"SubmittedDate"
```

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"ASC"
```

<h2 id="tocS_OperationSummaryList">OperationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummarylist"></a>
<a id="schema_OperationSummaryList"></a>
<a id="tocSoperationsummarylist"></a>
<a id="tocsoperationsummarylist"></a>

```json
[
  {
    "OperationId": {},
    "Status": {},
    "Type": {},
    "SubmittedDate": {},
    "DomainName": {},
    "Message": {},
    "StatusFlag": {},
    "LastUpdatedDate": {}
  }
]
```

<h2 id="tocS_TldName">TldName</h2>
<!-- backwards compatibility -->
<a id="schematldname"></a>
<a id="schema_TldName"></a>
<a id="tocStldname"></a>
<a id="tocstldname"></a>

```json
"string"
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

<h2 id="tocS_Nameserver">Nameserver</h2>
<!-- backwards compatibility -->
<a id="schemanameserver"></a>
<a id="schema_Nameserver"></a>
<a id="tocSnameserver"></a>
<a id="tocsnameserver"></a>

```json
{
  "Name": {},
  "GlueIps": {}
}
```

Name server includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|GlueIps|object|false|none|none|

<h2 id="tocS_OperationSummary">OperationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummary"></a>
<a id="schema_OperationSummary"></a>
<a id="tocSoperationsummary"></a>
<a id="tocsoperationsummary"></a>

```json
{
  "OperationId": {},
  "Status": {},
  "Type": {},
  "SubmittedDate": {},
  "DomainName": {},
  "Message": {},
  "StatusFlag": {},
  "LastUpdatedDate": {}
}
```

OperationSummary includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|false|none|none|
|Status|object|false|none|none|
|Type|object|false|none|none|
|SubmittedDate|object|false|none|none|
|DomainName|object|false|none|none|
|Message|object|false|none|none|
|StatusFlag|object|false|none|none|
|LastUpdatedDate|object|false|none|none|

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

Each tag includes the following elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```
