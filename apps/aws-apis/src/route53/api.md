<h1 id="amazon-route-53">Amazon Route 53 v2013-04-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p> <p>You can use Route 53 to:</p> <ul> <li> <p>Register domain names.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html">How domain registration works</a>.</p> </li> <li> <p>Route internet traffic to the resources for your domain</p> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">How internet traffic is routed to your website or web application</a>.</p> </li> <li> <p>Check the health of your resources.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html">How Route 53 checks the health of your resources</a>.</p> </li> </ul>

Base URLs:

* <a href="https://route53.amazonaws.com">https://route53.amazonaws.com</a> - The general Route 53 multi-region endpoint

* <a href="http://route53.us-gov.amazonaws.com">http://route53.us-gov.amazonaws.com</a> - The general Route 53 endpoint for AWS GovCloud (US) and AWS GovCloud (US-East)

* <a href="https://route53.us-gov.amazonaws.com">https://route53.us-gov.amazonaws.com</a> - The general Route 53 endpoint for AWS GovCloud (US) and AWS GovCloud (US-East)

* <a href="http://route53.amazonaws.com.cn">http://route53.amazonaws.com.cn</a> - The general Route 53 endpoint for China (Beijing) and China (Ningxia)

* <a href="https://route53.amazonaws.com.cn">https://route53.amazonaws.com.cn</a> - The general Route 53 endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/route53/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-route-53-default">Default</h1>

## ActivateKeySigningKey

<a id="opIdActivateKeySigningKey"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/keysigningkey/string/string/activate \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate`

Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to <code>ACTIVE</code>.

<h3 id="activatekeysigningkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HostedZoneId|path|string|true|A unique string used to identify a hosted zone.|
|Name|path|string|true|A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="activatekeysigningkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ActivateKeySigningKeyResponse](#schemaactivatekeysigningkeyresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|NoSuchKeySigningKey|[NoSuchKeySigningKey](#schemanosuchkeysigningkey)|
|482|482|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|483|483|InvalidSigningStatus|[InvalidSigningStatus](#schemainvalidsigningstatus)|
|484|484|InvalidKMSArn|[InvalidKMSArn](#schemainvalidkmsarn)|
|485|485|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociateVPCWithHostedZone

<a id="opIdAssociateVPCWithHostedZone"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/associatevpc \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"VPC":{"VPCRegion":{},"VPCId":"string"},"Comment":"string"}'
```

`POST /2013-04-01/hostedzone/{Id}/associatevpc`

<p>Associates an Amazon VPC with a private hosted zone. </p> <important> <p>To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.</p> </important> <note> <p>If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a <code>CreateVPCAssociationAuthorization</code> request. Then the account that created the VPC must submit an <code>AssociateVPCWithHostedZone</code> request.</p> </note> <note> <p>When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

> Body parameter

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "Comment": "string"
}
```

<h3 id="associatevpcwithhostedzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The ID of the private hosted zone that you want to associate an Amazon VPC with.</p> <p>Note that you can't associate a VPC with a hosted zone that doesn't have an existing VPC association.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VPC|body|object|true|<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>|
|» » VPCRegion|body|object|false|none|
|» » VPCId|body|[VPCId](#schemavpcid)|false|(Private hosted zones only) The ID of an Amazon VPC. |
|» Comment|body|string|false| <i>Optional:</i> A comment about the association request.|

<h3 id="associatevpcwithhostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateVPCWithHostedZoneResponse](#schemaassociatevpcwithhostedzoneresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|NotAuthorizedException|[NotAuthorizedException](#schemanotauthorizedexception)|
|482|482|InvalidVPCId|[InvalidVPCId](#schemainvalidvpcid)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|
|484|484|PublicZoneVPCAssociation|[PublicZoneVPCAssociation](#schemapubliczonevpcassociation)|
|485|485|ConflictingDomainExists|[ConflictingDomainExists](#schemaconflictingdomainexists)|
|486|486|LimitsExceeded|[LimitsExceeded](#schemalimitsexceeded)|
|487|487|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCidrLocations

<a id="opIdListCidrLocations"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/cidrcollection/{CidrCollectionId}`

Returns a paginated list of CIDR locations for the given collection (metadata only, does not include CIDR blocks).

<h3 id="listcidrlocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CidrCollectionId|path|string|true|The CIDR collection ID.|
|nexttoken|query|string|false|<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>|
|maxresults|query|string|false|The maximum number of CIDR collection locations to return in the response.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listcidrlocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCidrLocationsResponse](#schemalistcidrlocationsresponse)|
|480|480|NoSuchCidrCollectionException|[NoSuchCidrCollectionException](#schemanosuchcidrcollectionexception)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ChangeCidrCollection

<a id="opIdChangeCidrCollection"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CollectionVersion":1,"Changes":[{"LocationName":{},"Action":{},"CidrList":{}}]}'
```

`POST /2013-04-01/cidrcollection/{CidrCollectionId}`

<p>Creates, changes, or deletes CIDR blocks within a collection. Contains authoritative IP information mapping blocks to one or multiple locations.</p> <p>A change request can update multiple locations in a collection at a time, which is helpful if you want to move one or more CIDR blocks from one location to another in one transaction, without downtime. </p> <p> <b>Limits</b> </p> <p>The max number of CIDR blocks included in the request is 1000. As a result, big updates require multiple API calls.</p> <p> <b> PUT and DELETE_IF_EXISTS</b> </p> <p>Use <code>ChangeCidrCollection</code> to perform the following actions:</p> <ul> <li> <p> <code>PUT</code>: Create a CIDR block within the specified collection.</p> </li> <li> <p> <code> DELETE_IF_EXISTS</code>: Delete an existing CIDR block from the collection.</p> </li> </ul>

> Body parameter

```json
{
  "CollectionVersion": 1,
  "Changes": [
    {
      "LocationName": {},
      "Action": {},
      "CidrList": {}
    }
  ]
}
```

<h3 id="changecidrcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CidrCollectionId|path|string|true|The UUID of the CIDR collection to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CollectionVersion|body|integer|false|<p>A sequential counter that Amazon Route 53 sets to 1 when you create a collection and increments it by 1 each time you update the collection.</p> <p>We recommend that you use <code>ListCidrCollection</code> to get the current value of <code>CollectionVersion</code> for the collection that you want to update, and then include that value with the change request. This prevents Route 53 from overwriting an intervening update: </p> <ul> <li> <p>If the value in the request matches the value of <code>CollectionVersion</code> in the collection, Route 53 updates the collection.</p> </li> <li> <p>If the value of <code>CollectionVersion</code> in the collection is greater than the value in the request, the collection was changed after you got the version number. Route 53 does not update the collection, and it returns a <code>CidrCollectionVersionMismatch</code> error. </p> </li> </ul>|
|» Changes|body|[[CidrCollectionChange](#schemacidrcollectionchange)]|true| Information about changes to a CIDR collection.|

<h3 id="changecidrcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangeCidrCollectionResponse](#schemachangecidrcollectionresponse)|
|480|480|NoSuchCidrCollectionException|[NoSuchCidrCollectionException](#schemanosuchcidrcollectionexception)|
|481|481|CidrCollectionVersionMismatchException|[CidrCollectionVersionMismatchException](#schemacidrcollectionversionmismatchexception)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|
|483|483|CidrBlockInUseException|[CidrBlockInUseException](#schemacidrblockinuseexception)|
|484|484|LimitsExceeded|[LimitsExceeded](#schemalimitsexceeded)|
|485|485|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCidrCollection

<a id="opIdDeleteCidrCollection"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/cidrcollection/{CidrCollectionId}`

Deletes a CIDR collection in the current Amazon Web Services account. The collection must be empty before it can be deleted.

<h3 id="deletecidrcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CidrCollectionId|path|string|true|The UUID of the collection to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletecidrcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCidrCollectionResponse](#schemadeletecidrcollectionresponse)|
|480|480|NoSuchCidrCollectionException|[NoSuchCidrCollectionException](#schemanosuchcidrcollectionexception)|
|481|481|CidrCollectionInUseException|[CidrCollectionInUseException](#schemacidrcollectioninuseexception)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|
|483|483|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ChangeResourceRecordSets

<a id="opIdChangeResourceRecordSets"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/rrset/ \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ChangeBatch":{"Comment":{},"Changes":{}}}'
```

`POST /2013-04-01/hostedzone/{Id}/rrset/`

<p>Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use <code>ChangeResourceRecordSets</code> to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44.</p> <p> <b>Deleting Resource Record Sets</b> </p> <p>To delete a resource record set, you must specify all the same values that you specified when you created it.</p> <p> <b>Change Batches and Transactional Changes</b> </p> <p>The request body must include a document with a <code>ChangeResourceRecordSetsRequest</code> element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request. This ensures that DNS routing isn't adversely affected by partial changes to the resource record sets in a hosted zone. </p> <p>For example, suppose a change batch request contains two changes: it deletes the <code>CNAME</code> resource record set for www.example.com and creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If validation for either the <code>DELETE</code> or the <code>CREATE</code> action fails, then the request is canceled, and the original <code>CNAME</code> record continues to exist.</p> <note> <p>If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an <code>InvalidChangeBatch</code> error.</p> </note> <p> <b>Traffic Flow</b> </p> <p>To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html">Using Traffic Flow to Route DNS Traffic</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Create, Delete, and Upsert</b> </p> <p>Use <code>ChangeResourceRecordsSetsRequest</code> to perform the following actions:</p> <ul> <li> <p> <code>CREATE</code>: Creates a resource record set that has the specified values.</p> </li> <li> <p> <code>DELETE</code>: Deletes an existing resource record set that has the specified values.</p> </li> <li> <p> <code>UPSERT</code>: If a resource set exists Route 53 updates it with the values in the request. </p> </li> </ul> <p> <b>Syntaxes for Creating, Updating, and Deleting Resource Record Sets</b> </p> <p>The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. </p> <p>For an example for each type of resource record set, see "Examples."</p> <p>Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using <code>ChangeResourceRecordSets</code>. </p> <p> <b>Change Propagation to Route 53 DNS Servers</b> </p> <p>When you submit a <code>ChangeResourceRecordSets</code> request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While your changes are propagating, <code>GetChange</code> returns a status of <code>PENDING</code>. When propagation is complete, <code>GetChange</code> returns a status of <code>INSYNC</code>. Changes generally propagate to all Route 53 name servers managing the hosted zone within 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a>.</p> <p> <b>Limits on ChangeResourceRecordSets Requests</b> </p> <p>For information about the limits on a <code>ChangeResourceRecordSets</code> request, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

> Body parameter

```json
{
  "ChangeBatch": {
    "Comment": {},
    "Changes": {}
  }
}
```

<h3 id="changeresourcerecordsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the hosted zone that contains the resource record sets that you want to change.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ChangeBatch|body|object|true|The information for a change request.|
|» » Comment|body|object|false|none|
|» » Changes|body|object|false|none|
|» Action|body|object|true|none|
|» ResourceRecordSet|body|object|true|none|
|» » Name|body|object|true|none|
|» » Type|body|object|true|none|
|» » SetIdentifier|body|object|false|none|
|» » Weight|body|object|false|none|
|» » Region|body|object|false|none|
|» » GeoLocation|body|object|false|none|
|» » » ContinentCode|body|object|false|none|
|» » » CountryCode|body|object|false|none|
|» » » SubdivisionCode|body|object|false|none|
|» » Failover|body|object|false|none|
|» » MultiValueAnswer|body|object|false|none|
|» » TTL|body|object|false|none|
|» » ResourceRecords|body|object|false|none|
|» Value|body|object|true|none|
|» » AliasTarget|body|object|false|none|
|» » » HostedZoneId|body|object|true|none|
|» » » DNSName|body|object|true|none|
|» » » EvaluateTargetHealth|body|object|true|none|
|» » HealthCheckId|body|object|false|none|
|» » TrafficPolicyInstanceId|body|object|false|none|
|» » CidrRoutingConfig|body|[CidrRoutingConfig](#schemacidrroutingconfig)|false|<p>The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.</p> <p>A <code>LocationName</code> with an asterisk “*” can be used to create a default CIDR record. <code>CollectionId</code> is still required for default record.</p>|

<h3 id="changeresourcerecordsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangeResourceRecordSetsResponse](#schemachangeresourcerecordsetsresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|482|482|InvalidChangeBatch|[InvalidChangeBatch](#schemainvalidchangebatch)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|
|484|484|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/tags/healthcheck/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/tags/{ResourceType}/{ResourceId}`

<p>Lists tags for one health check or hosted zone. </p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceType|path|string|true|<p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>|
|ResourceId|path|string|true|The ID of the resource for which you want to retrieve tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ResourceType|healthcheck|
|ResourceType|hostedzone|

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|483|483|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ChangeTagsForResource

<a id="opIdChangeTagsForResource"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/tags/healthcheck/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"AddTags":[{"Key":{},"Value":{}}],"RemoveTagKeys":[{}]}'
```

`POST /2013-04-01/tags/{ResourceType}/{ResourceId}`

<p>Adds, edits, or deletes tags for a health check or a hosted zone.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>

> Body parameter

```json
{
  "AddTags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "RemoveTagKeys": [
    {}
  ]
}
```

<h3 id="changetagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceType|path|string|true|<p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>|
|ResourceId|path|string|true|The ID of the resource for which you want to add, change, or delete tags.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» AddTags|body|[object]|false|<p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit <code>Value</code> for.</p> <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>|
|» » Key|body|object|false|none|
|» » Value|body|object|false|none|
|» RemoveTagKeys|body|[object]|false|A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ResourceType|healthcheck|
|ResourceType|hostedzone|

<h3 id="changetagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChangeTagsForResourceResponse](#schemachangetagsforresourceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|483|483|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCidrCollections

<a id="opIdListCidrCollections"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/cidrcollection`

Returns a paginated list of CIDR collections in the Amazon Web Services account (metadata only).

<h3 id="listcidrcollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nexttoken|query|string|false|<p>An opaque pagination token to indicate where the service is to begin enumerating results.</p> <p>If no value is provided, the listing of results starts from the beginning.</p>|
|maxresults|query|string|false|The maximum number of CIDR collections to return in the response.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listcidrcollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCidrCollectionsResponse](#schemalistcidrcollectionsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCidrCollection

<a id="opIdCreateCidrCollection"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","CallerReference":"string"}'
```

`POST /2013-04-01/cidrcollection`

Creates a CIDR collection in the current Amazon Web Services account.

> Body parameter

```json
{
  "Name": "string",
  "CallerReference": "string"
}
```

<h3 id="createcidrcollection-parameters">Parameters</h3>

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
|» Name|body|string|true|A unique identifier for the account that can be used to reference the collection from other API calls.|
|» CallerReference|body|string|true|A client-specific token that allows requests to be securely retried so that the intended outcome will only occur once, retries receive a similar response, and there are no additional edge cases to handle.|

<h3 id="createcidrcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCidrCollectionResponse](#schemacreatecidrcollectionresponse)|
|480|480|LimitsExceeded|[LimitsExceeded](#schemalimitsexceeded)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|CidrCollectionAlreadyExistsException|[CidrCollectionAlreadyExistsException](#schemacidrcollectionalreadyexistsexception)|
|483|483|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHealthChecks

<a id="opIdListHealthChecks"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/healthcheck`

Retrieve a list of the health checks that are associated with the current Amazon Web Services account. 

<h3 id="listhealthchecks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more health checks. To get another group, submit another <code>ListHealthChecks</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more health checks to get.</p>|
|maxitems|query|string|false|The maximum number of health checks that you want <code>ListHealthChecks</code> to return in response to the current request. Amazon Route 53 returns a maximum of 100 items. If you set <code>MaxItems</code> to a value greater than 100, Route 53 returns only the first 100 health checks. |
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listhealthchecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHealthChecksResponse](#schemalisthealthchecksresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|IncompatibleVersion|[IncompatibleVersion](#schemaincompatibleversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHealthCheck

<a id="opIdCreateHealthCheck"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CallerReference":"string","HealthCheckConfig":{"IPAddress":{},"Port":{},"Type":{},"ResourcePath":{},"FullyQualifiedDomainName":{},"SearchString":{},"RequestInterval":{},"FailureThreshold":{},"MeasureLatency":{},"Inverted":{},"Disabled":{},"HealthThreshold":{},"ChildHealthChecks":{},"EnableSNI":{},"Regions":{},"AlarmIdentifier":{"Region":{},"Name":{}},"InsufficientDataHealthStatus":{},"RoutingControlArn":{}}}'
```

`POST /2013-04-01/healthcheck`

<p>Creates a new health check.</p> <p>For information about adding health checks to resource record sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a> in <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p> <p> <b>ELB Load Balancers</b> </p> <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.</p> <p> <b>Private Hosted Zones</b> </p> <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p> <ul> <li> <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.</p> </li> <li> <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.</p> </li> <li> <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p> </li> </ul>

> Body parameter

```json
{
  "CallerReference": "string",
  "HealthCheckConfig": {
    "IPAddress": {},
    "Port": {},
    "Type": {},
    "ResourcePath": {},
    "FullyQualifiedDomainName": {},
    "SearchString": {},
    "RequestInterval": {},
    "FailureThreshold": {},
    "MeasureLatency": {},
    "Inverted": {},
    "Disabled": {},
    "HealthThreshold": {},
    "ChildHealthChecks": {},
    "EnableSNI": {},
    "Regions": {},
    "AlarmIdentifier": {
      "Region": {},
      "Name": {}
    },
    "InsufficientDataHealthStatus": {},
    "RoutingControlArn": {}
  }
}
```

<h3 id="createhealthcheck-parameters">Parameters</h3>

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
|» CallerReference|body|string|true|<p>A unique string that identifies the request and that allows you to retry a failed <code>CreateHealthCheck</code> request without the risk of creating two identical health checks:</p> <ul> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> and settings as a previous request, and if the health check doesn't exist, Amazon Route 53 creates the health check. If the health check does exist, Route 53 returns the settings for the existing health check.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as a deleted health check, regardless of the settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with the same <code>CallerReference</code> as an existing health check but with different settings, Route 53 returns a <code>HealthCheckAlreadyExists</code> error.</p> </li> <li> <p>If you send a <code>CreateHealthCheck</code> request with a unique <code>CallerReference</code> but settings identical to an existing health check, Route 53 creates the health check.</p> </li> </ul>|
|» HealthCheckConfig|body|object|true|A complex type that contains information about the health check.|
|» » IPAddress|body|object|false|none|
|» » Port|body|object|false|none|
|» » Type|body|object|false|none|
|» » ResourcePath|body|object|false|none|
|» » FullyQualifiedDomainName|body|object|false|none|
|» » SearchString|body|object|false|none|
|» » RequestInterval|body|object|false|none|
|» » FailureThreshold|body|object|false|none|
|» » MeasureLatency|body|object|false|none|
|» » Inverted|body|object|false|none|
|» » Disabled|body|object|false|none|
|» » HealthThreshold|body|object|false|none|
|» » ChildHealthChecks|body|object|false|none|
|» » EnableSNI|body|object|false|none|
|» » Regions|body|object|false|none|
|» » AlarmIdentifier|body|object|false|none|
|» » » Region|body|object|true|none|
|» » » Name|body|object|true|none|
|» » InsufficientDataHealthStatus|body|object|false|none|
|» » RoutingControlArn|body|object|false|none|

<h3 id="createhealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateHealthCheckResponse](#schemacreatehealthcheckresponse)|
|480|480|TooManyHealthChecks|[TooManyHealthChecks](#schematoomanyhealthchecks)|
|481|481|HealthCheckAlreadyExists|[HealthCheckAlreadyExists](#schemahealthcheckalreadyexists)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHostedZones

<a id="opIdListHostedZones"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzone`

<p>Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response includes a <code>HostedZones</code> child element for each hosted zone.</p> <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of up to 100.</p>

<h3 id="listhostedzones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more hosted zones. To get more hosted zones, submit another <code>ListHostedZones</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more hosted zones to get.</p>|
|maxitems|query|string|false|(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than <code>maxitems</code> hosted zones, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>NextMarker</code> is the hosted zone ID of the first hosted zone that Route 53 will return if you submit another request.|
|delegationsetid|query|string|false|If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set. |
|MaxItems|query|string|false|Pagination limit|
|Marker|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listhostedzones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHostedZonesResponse](#schemalisthostedzonesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchDelegationSet|[NoSuchDelegationSet](#schemanosuchdelegationset)|
|482|482|DelegationSetNotReusable|[DelegationSetNotReusable](#schemadelegationsetnotreusable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateHostedZone

<a id="opIdCreateHostedZone"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","VPC":{"VPCRegion":{},"VPCId":"string"},"CallerReference":"string","HostedZoneConfig":{"Comment":{},"PrivateZone":{}},"DelegationSetId":"string"}'
```

`POST /2013-04-01/hostedzone`

<p>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). </p> <important> <p>You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.</p> </important> <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following:</p> <ul> <li> <p>You can't create a hosted zone for a top-level domain (TLD) such as .com.</p> </li> <li> <p>For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records that Route 53 Creates for a Hosted Zone</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the <code>DelegationSetId</code> element.</p> </li> <li> <p>If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service for an Existing Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. </p> </li> </ul> <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the hosted zone is <code>PENDING</code>. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p> <p>The <code>CreateHostedZone</code> request requires the caller to have an <code>ec2:DescribeVpcs</code> permission.</p> <note> <p>When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

> Body parameter

```json
{
  "Name": "string",
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "CallerReference": "string",
  "HostedZoneConfig": {
    "Comment": {},
    "PrivateZone": {}
  },
  "DelegationSetId": "string"
}
```

<h3 id="createhostedzone-parameters">Parameters</h3>

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
|» Name|body|string|true|<p>The name of the domain. Specify a fully qualified domain name, for example, <i>www.example.com</i>. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats <i>www.example.com</i> (without a trailing dot) and <i>www.example.com.</i> (with a trailing dot) as identical.</p> <p>If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of <code>NameServers</code> that <code>CreateHostedZone</code> returns in <code>DelegationSet</code>.</p>|
|» VPC|body|object|false|<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>|
|» » VPCRegion|body|object|false|none|
|» » VPCId|body|[VPCId](#schemavpcid)|false|(Private hosted zones only) The ID of an Amazon VPC. |
|» CallerReference|body|string|true|A unique string that identifies the request and that allows failed <code>CreateHostedZone</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateHostedZone</code> request. <code>CallerReference</code> can be any unique string, for example, a date/time stamp.|
|» HostedZoneConfig|body|object|false|A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.|
|» » Comment|body|object|false|none|
|» » PrivateZone|body|object|false|none|
|» DelegationSetId|body|string|false|<p>If you want to associate a reusable delegation set with this hosted zone, the ID that Amazon Route 53 assigned to the reusable delegation set when you created it. For more information about reusable delegation sets, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p> <p>If you are using a reusable delegation set to create a public hosted zone for a subdomain, make sure that the parent hosted zone doesn't use one or more of the same name servers. If you have overlapping nameservers, the operation will cause a <code>ConflictingDomainsExist</code> error.</p>|

<h3 id="createhostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateHostedZoneResponse](#schemacreatehostedzoneresponse)|
|480|480|InvalidDomainName|[InvalidDomainName](#schemainvaliddomainname)|
|481|481|HostedZoneAlreadyExists|[HostedZoneAlreadyExists](#schemahostedzonealreadyexists)|
|482|482|TooManyHostedZones|[TooManyHostedZones](#schematoomanyhostedzones)|
|483|483|InvalidVPCId|[InvalidVPCId](#schemainvalidvpcid)|
|484|484|InvalidInput|[InvalidInput](#schemainvalidinput)|
|485|485|DelegationSetNotAvailable|[DelegationSetNotAvailable](#schemadelegationsetnotavailable)|
|486|486|ConflictingDomainExists|[ConflictingDomainExists](#schemaconflictingdomainexists)|
|487|487|NoSuchDelegationSet|[NoSuchDelegationSet](#schemanosuchdelegationset)|
|488|488|DelegationSetNotReusable|[DelegationSetNotReusable](#schemadelegationsetnotreusable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateKeySigningKey

<a id="opIdCreateKeySigningKey"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/keysigningkey \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CallerReference":"string","HostedZoneId":"string","KeyManagementServiceArn":"string","Name":"string","Status":"string"}'
```

`POST /2013-04-01/keysigningkey`

Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.

> Body parameter

```json
{
  "CallerReference": "string",
  "HostedZoneId": "string",
  "KeyManagementServiceArn": "string",
  "Name": "string",
  "Status": "string"
}
```

<h3 id="createkeysigningkey-parameters">Parameters</h3>

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
|» CallerReference|body|string|true|A unique string that identifies the request.|
|» HostedZoneId|body|string|true|The unique string (ID) used to identify a hosted zone.|
|» KeyManagementServiceArn|body|string|true|<p>The Amazon resource name (ARN) for a customer managed key in Key Management Service (KMS). The <code>KeyManagementServiceArn</code> must be unique for each key-signing key (KSK) in a single hosted zone. To see an example of <code>KeyManagementServiceArn</code> that grants the correct permissions for DNSSEC, scroll down to <b>Example</b>. </p> <p>You must configure the customer managed customer managed key as follows:</p> <dl> <dt>Status</dt> <dd> <p>Enabled</p> </dd> <dt>Key spec</dt> <dd> <p>ECC_NIST_P256</p> </dd> <dt>Key usage</dt> <dd> <p>Sign and verify</p> </dd> <dt>Key policy</dt> <dd> <p>The key policy must give permission for the following actions:</p> <ul> <li> <p>DescribeKey</p> </li> <li> <p>GetPublicKey</p> </li> <li> <p>Sign</p> </li> </ul> <p>The key policy must also include the Amazon Route 53 service in the principal for your account. Specify the following:</p> <ul> <li> <p> <code>"Service": "dnssec-route53.amazonaws.com"</code> </p> </li> </ul> </dd> </dl> <p>For more information about working with a customer managed key in KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">Key Management Service concepts</a>.</p>|
|» Name|body|string|true|A string used to identify a key-signing key (KSK). <code>Name</code> can include numbers, letters, and underscores (_). <code>Name</code> must be unique for each key-signing key in the same hosted zone.|
|» Status|body|string|true|A string specifying the initial status of the key-signing key (KSK). You can set the value to <code>ACTIVE</code> or <code>INACTIVE</code>.|

<h3 id="createkeysigningkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateKeySigningKeyResponse](#schemacreatekeysigningkeyresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|
|483|483|InvalidKMSArn|[InvalidKMSArn](#schemainvalidkmsarn)|
|484|484|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|485|485|InvalidSigningStatus|[InvalidSigningStatus](#schemainvalidsigningstatus)|
|486|486|InvalidKeySigningKeyName|[InvalidKeySigningKeyName](#schemainvalidkeysigningkeyname)|
|487|487|KeySigningKeyAlreadyExists|[KeySigningKeyAlreadyExists](#schemakeysigningkeyalreadyexists)|
|488|488|TooManyKeySigningKeys|[TooManyKeySigningKeys](#schematoomanykeysigningkeys)|
|489|489|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListQueryLoggingConfigs

<a id="opIdListQueryLoggingConfigs"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/queryloggingconfig \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/queryloggingconfig`

<p>Lists the configurations for DNS query logging that are associated with the current Amazon Web Services account or the configuration that is associated with a specified hosted zone.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>. Additional information, including the format of DNS query logs, appears in <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

<h3 id="listqueryloggingconfigs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hostedzoneid|query|string|false|<p>(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in <code>HostedZoneId</code>. </p> <p>If you don't specify a hosted zone ID, <code>ListQueryLoggingConfigs</code> returns all of the configurations that are associated with the current Amazon Web Services account.</p>|
|nexttoken|query|string|false|<p>(Optional) If the current Amazon Web Services account has more than <code>MaxResults</code> query logging configurations, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>ListQueryLoggingConfigs</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>|
|maxresults|query|string|false|<p>(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request. If the current Amazon Web Services account has more than <code>MaxResults</code> configurations, use the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html#API_ListQueryLoggingConfigs_RequestSyntax">NextToken</a> in the response to get the next page of results.</p> <p>If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configurations.</p>|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listqueryloggingconfigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListQueryLoggingConfigsResponse](#schemalistqueryloggingconfigsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateQueryLoggingConfig

<a id="opIdCreateQueryLoggingConfig"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/queryloggingconfig \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"HostedZoneId":"string","CloudWatchLogsLogGroupArn":"string"}'
```

`POST /2013-04-01/queryloggingconfig`

<p>Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.</p> <p>DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:</p> <ul> <li> <p>Route 53 edge location that responded to the DNS query</p> </li> <li> <p>Domain or subdomain that was requested</p> </li> <li> <p>DNS record type, such as A or AAAA</p> </li> <li> <p>DNS response code, such as <code>NoError</code> or <code>ServFail</code> </p> </li> </ul> <dl> <dt>Log Group and Resource Policy</dt> <dd> <p>Before you create a query logging configuration, perform the following operations.</p> <note> <p>If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.</p> </note> <ol> <li> <p>Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:</p> <ul> <li> <p>You must create the log group in the us-east-1 region.</p> </li> <li> <p>You must use the same Amazon Web Services account to create the log group and the hosted zone that you want to configure query logging for.</p> </li> <li> <p>When you create log groups for query logging, we recommend that you use a consistent prefix, for example:</p> <p> <code>/aws/route53/<i>hosted zone name</i> </code> </p> <p>In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated Amazon Web Services resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.</p> </li> </ul> </li> <li> <p>Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. For the value of <code>Resource</code>, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with <code>*</code>, for example:</p> <p> <code>arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*</code> </p> <p>To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values:</p> <ul> <li> <p>For <code>aws:SourceArn</code>, supply the hosted zone ARN used in creating the query logging configuration. For example, <code>aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID</code>.</p> </li> <li> <p>For <code>aws:SourceAccount</code>, supply the account ID for the account that creates the query logging configuration. For example, <code>aws:SourceAccount:111111111111</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html">The confused deputy problem</a> in the <i>Amazon Web Services IAM User Guide</i>.</p> <note> <p>You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the Amazon Web Services SDKs, or the CLI.</p> </note> </li> </ol> </dd> <dt>Log Streams and Edge Locations</dt> <dd> <p>When Route 53 finishes creating the configuration for DNS query logging, it does the following:</p> <ul> <li> <p>Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.</p> </li> <li> <p>Begins to send query logs to the applicable log stream.</p> </li> </ul> <p>The name of each log stream is in the following format:</p> <p> <code> <i>hosted zone ID</i>/<i>edge location code</i> </code> </p> <p>The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the <a href="http://aws.amazon.com/route53/details/">Route 53 Product Details</a> page.</p> </dd> <dt>Queries That Are Logged</dt> <dd> <p>Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">Routing Internet Traffic to Your Website or Web Application</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Log File Format</dt> <dd> <p>For a list of the values in each query log and the format of each value, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </dd> <dt>Pricing</dt> <dd> <p>For information about charges for query logs, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </dd> <dt>How to Stop Logging</dt> <dd> <p>If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html">DeleteQueryLoggingConfig</a>.</p> </dd> </dl>

> Body parameter

```json
{
  "HostedZoneId": "string",
  "CloudWatchLogsLogGroupArn": "string"
}
```

<h3 id="createqueryloggingconfig-parameters">Parameters</h3>

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
|» HostedZoneId|body|string|true|The ID of the hosted zone that you want to log queries for. You can log queries only for public hosted zones.|
|» CloudWatchLogsLogGroupArn|body|string|true|<p>The Amazon Resource Name (ARN) for the log group that you want to Amazon Route 53 to send query logs to. This is the format of the ARN:</p> <p>arn:aws:logs:<i>region</i>:<i>account-id</i>:log-group:<i>log_group_name</i> </p> <p>To get the ARN for a log group, you can use the CloudWatch console, the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html">DescribeLogGroups</a> API action, the <a href="https://docs.aws.amazon.com/cli/latest/reference/logs/describe-log-groups.html">describe-log-groups</a> command, or the applicable command in one of the Amazon Web Services SDKs.</p>|

<h3 id="createqueryloggingconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateQueryLoggingConfigResponse](#schemacreatequeryloggingconfigresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|482|482|NoSuchCloudWatchLogsLogGroup|[NoSuchCloudWatchLogsLogGroup](#schemanosuchcloudwatchlogsloggroup)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|
|484|484|QueryLoggingConfigAlreadyExists|[QueryLoggingConfigAlreadyExists](#schemaqueryloggingconfigalreadyexists)|
|485|485|InsufficientCloudWatchLogsResourcePolicy|[InsufficientCloudWatchLogsResourcePolicy](#schemainsufficientcloudwatchlogsresourcepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListReusableDelegationSets

<a id="opIdListReusableDelegationSets"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/delegationset \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/delegationset`

Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account.

<h3 id="listreusabledelegationsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more reusable delegation sets. To get another group, submit another <code>ListReusableDelegationSets</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more reusable delegation sets to get.</p>|
|maxitems|query|string|false|The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Route 53 returns only the first 100 reusable delegation sets.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listreusabledelegationsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListReusableDelegationSetsResponse](#schemalistreusabledelegationsetsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateReusableDelegationSet

<a id="opIdCreateReusableDelegationSet"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/delegationset \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CallerReference":"string","HostedZoneId":"string"}'
```

`POST /2013-04-01/delegationset`

<p>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account. </p> <p>You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the <code>CreateReusableDelegationSet</code> request.</p> <note> <p>You can't associate a reusable delegation set with a private hosted zone.</p> </note> <p>For information about using a reusable delegation set to configure white label name servers, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/white-label-name-servers.html">Configuring White Label Name Servers</a>.</p> <p>The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps:</p> <ol> <li> <p>Create a reusable delegation set.</p> </li> <li> <p>Recreate hosted zones, and reduce the TTL to 60 seconds or less.</p> </li> <li> <p>Recreate resource record sets in the new hosted zones.</p> </li> <li> <p>Change the registrar's name servers to use the name servers for the new hosted zones.</p> </li> <li> <p>Monitor traffic for the website or application.</p> </li> <li> <p>Change TTLs back to their original values.</p> </li> </ol> <p>If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following:</p> <ul> <li> <p>For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones.</p> </li> <li> <p>For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set.</p> </li> <li> <p>For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.</p> </li> </ul>

> Body parameter

```json
{
  "CallerReference": "string",
  "HostedZoneId": "string"
}
```

<h3 id="createreusabledelegationset-parameters">Parameters</h3>

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
|» CallerReference|body|string|true|A unique string that identifies the request, and that allows you to retry failed <code>CreateReusableDelegationSet</code> requests without the risk of executing the operation twice. You must use a unique <code>CallerReference</code> string every time you submit a <code>CreateReusableDelegationSet</code> request. <code>CallerReference</code> can be any unique string, for example a date/time stamp.|
|» HostedZoneId|body|string|false|If you want to mark the delegation set for an existing hosted zone as reusable, the ID for that hosted zone.|

<h3 id="createreusabledelegationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateReusableDelegationSetResponse](#schemacreatereusabledelegationsetresponse)|
|480|480|DelegationSetAlreadyCreated|[DelegationSetAlreadyCreated](#schemadelegationsetalreadycreated)|
|481|481|LimitsExceeded|[LimitsExceeded](#schemalimitsexceeded)|
|482|482|HostedZoneNotFound|[HostedZoneNotFound](#schemahostedzonenotfound)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InvalidInput|[InvalidInput](#schemainvalidinput)|
|485|485|DelegationSetNotAvailable|[DelegationSetNotAvailable](#schemadelegationsetnotavailable)|
|486|486|DelegationSetAlreadyReusable|[DelegationSetAlreadyReusable](#schemadelegationsetalreadyreusable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrafficPolicy

<a id="opIdCreateTrafficPolicy"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","Document":"string","Comment":"string"}'
```

`POST /2013-04-01/trafficpolicy`

Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).

> Body parameter

```json
{
  "Name": "string",
  "Document": "string",
  "Comment": "string"
}
```

<h3 id="createtrafficpolicy-parameters">Parameters</h3>

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
|» Name|body|string|true|The name of the traffic policy.|
|» Document|body|string|true|The definition of this traffic policy in JSON format. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html">Traffic Policy Document Format</a>.|
|» Comment|body|string|false|(Optional) Any comments that you want to include about the traffic policy.|

<h3 id="createtrafficpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateTrafficPolicyResponse](#schemacreatetrafficpolicyresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|TooManyTrafficPolicies|[TooManyTrafficPolicies](#schematoomanytrafficpolicies)|
|482|482|TrafficPolicyAlreadyExists|[TrafficPolicyAlreadyExists](#schematrafficpolicyalreadyexists)|
|483|483|InvalidTrafficPolicyDocument|[InvalidTrafficPolicyDocument](#schemainvalidtrafficpolicydocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrafficPolicyInstance

<a id="opIdCreateTrafficPolicyInstance"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstance \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"HostedZoneId":"string","Name":"string","TTL":0,"TrafficPolicyId":"string","TrafficPolicyVersion":1}'
```

`POST /2013-04-01/trafficpolicyinstance`

Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, <code>CreateTrafficPolicyInstance</code> associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that <code>CreateTrafficPolicyInstance</code> created.

> Body parameter

```json
{
  "HostedZoneId": "string",
  "Name": "string",
  "TTL": 0,
  "TrafficPolicyId": "string",
  "TrafficPolicyVersion": 1
}
```

<h3 id="createtrafficpolicyinstance-parameters">Parameters</h3>

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
|» HostedZoneId|body|string|true|The ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy.|
|» Name|body|string|true|The domain name (such as example.com) or subdomain name (such as www.example.com) for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance.|
|» TTL|body|integer|true|(Optional) The TTL that you want Amazon Route 53 to assign to all of the resource record sets that it creates in the specified hosted zone.|
|» TrafficPolicyId|body|string|true|The ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone.|
|» TrafficPolicyVersion|body|integer|true|The version of the traffic policy that you want to use to create resource record sets in the specified hosted zone.|

<h3 id="createtrafficpolicyinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateTrafficPolicyInstanceResponse](#schemacreatetrafficpolicyinstanceresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|TooManyTrafficPolicyInstances|[TooManyTrafficPolicyInstances](#schematoomanytrafficpolicyinstances)|
|483|483|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|484|484|TrafficPolicyInstanceAlreadyExists|[TrafficPolicyInstanceAlreadyExists](#schematrafficpolicyinstancealreadyexists)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTrafficPolicyVersion

<a id="opIdCreateTrafficPolicyVersion"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicy/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Document":"string","Comment":"string"}'
```

`POST /2013-04-01/trafficpolicy/{Id}`

Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.

> Body parameter

```json
{
  "Document": "string",
  "Comment": "string"
}
```

<h3 id="createtrafficpolicyversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the traffic policy for which you want to create a new version.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Document|body|string|true|The definition of this version of the traffic policy, in JSON format. You specified the JSON in the <code>CreateTrafficPolicyVersion</code> request. For more information about the JSON format, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html">CreateTrafficPolicy</a>.|
|» Comment|body|string|false|The comment that you specified in the <code>CreateTrafficPolicyVersion</code> request, if any.|

<h3 id="createtrafficpolicyversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateTrafficPolicyVersionResponse](#schemacreatetrafficpolicyversionresponse)|
|480|480|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|TooManyTrafficPolicyVersionsForCurrentPolicy|[TooManyTrafficPolicyVersionsForCurrentPolicy](#schematoomanytrafficpolicyversionsforcurrentpolicy)|
|483|483|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|484|484|InvalidTrafficPolicyDocument|[InvalidTrafficPolicyDocument](#schemainvalidtrafficpolicydocument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVPCAssociationAuthorizations

<a id="opIdListVPCAssociationAuthorizations"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/authorizevpcassociation \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzone/{Id}/authorizevpcassociation`

<p>Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p> <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC that can be associated with the hosted zone.</p>

<h3 id="listvpcassociationauthorizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.|
|nexttoken|query|string|false| <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter in another <code>ListVPCAssociationAuthorizations</code> request.|
|maxresults|query|string|false| <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listvpcassociationauthorizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVPCAssociationAuthorizationsResponse](#schemalistvpcassociationauthorizationsresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVPCAssociationAuthorization

<a id="opIdCreateVPCAssociationAuthorization"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/authorizevpcassociation \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"VPC":{"VPCRegion":{},"VPCId":"string"}}'
```

`POST /2013-04-01/hostedzone/{Id}/authorizevpcassociation`

<p>Authorizes the Amazon Web Services account that created a specified VPC to submit an <code>AssociateVPCWithHostedZone</code> request to associate the VPC with a specified hosted zone that was created by a different account. To submit a <code>CreateVPCAssociationAuthorization</code> request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an <code>AssociateVPCWithHostedZone</code> request.</p> <note> <p>If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC.</p> </note>

> Body parameter

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

<h3 id="createvpcassociationauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the private hosted zone that you want to authorize associating a VPC with.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VPC|body|object|true|<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>|
|» » VPCRegion|body|object|false|none|
|» » VPCId|body|[VPCId](#schemavpcid)|false|(Private hosted zones only) The ID of an Amazon VPC. |

<h3 id="createvpcassociationauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVPCAssociationAuthorizationResponse](#schemacreatevpcassociationauthorizationresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|TooManyVPCAssociationAuthorizations|[TooManyVPCAssociationAuthorizations](#schematoomanyvpcassociationauthorizations)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|483|483|InvalidVPCId|[InvalidVPCId](#schemainvalidvpcid)|
|484|484|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeactivateKeySigningKey

<a id="opIdDeactivateKeySigningKey"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/keysigningkey/string/string/deactivate \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate`

Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the KSK status to <code>INACTIVE</code>.

<h3 id="deactivatekeysigningkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HostedZoneId|path|string|true|A unique string used to identify a hosted zone.|
|Name|path|string|true|A string used to identify a key-signing key (KSK).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deactivatekeysigningkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeactivateKeySigningKeyResponse](#schemadeactivatekeysigningkeyresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|NoSuchKeySigningKey|[NoSuchKeySigningKey](#schemanosuchkeysigningkey)|
|482|482|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|483|483|InvalidSigningStatus|[InvalidSigningStatus](#schemainvalidsigningstatus)|
|484|484|KeySigningKeyInUse|[KeySigningKeyInUse](#schemakeysigningkeyinuse)|
|485|485|KeySigningKeyInParentDSRecord|[KeySigningKeyInParentDSRecord](#schemakeysigningkeyinparentdsrecord)|
|486|486|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHealthCheck

<a id="opIdGetHealthCheck"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/healthcheck/{HealthCheckId}`

Gets information about a specified health check.

<h3 id="gethealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HealthCheckId|path|string|true|The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHealthCheckResponse](#schemagethealthcheckresponse)|
|480|480|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|IncompatibleVersion|[IncompatibleVersion](#schemaincompatibleversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHealthCheck

<a id="opIdUpdateHealthCheck"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"HealthCheckVersion":1,"IPAddress":"string","Port":1,"ResourcePath":"string","FullyQualifiedDomainName":"string","SearchString":"string","FailureThreshold":1,"Inverted":true,"Disabled":true,"HealthThreshold":0,"ChildHealthChecks":[{}],"EnableSNI":true,"Regions":[{},{},{}],"AlarmIdentifier":{"Region":{},"Name":{}},"InsufficientDataHealthStatus":"Healthy","ResetElements":[{}]}'
```

`POST /2013-04-01/healthcheck/{HealthCheckId}`

<p>Updates an existing health check. Note that some values can't be updated. </p> <p>For more information about updating health checks, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating, Updating, and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>

> Body parameter

```json
{
  "HealthCheckVersion": 1,
  "IPAddress": "string",
  "Port": 1,
  "ResourcePath": "string",
  "FullyQualifiedDomainName": "string",
  "SearchString": "string",
  "FailureThreshold": 1,
  "Inverted": true,
  "Disabled": true,
  "HealthThreshold": 0,
  "ChildHealthChecks": [
    {}
  ],
  "EnableSNI": true,
  "Regions": [
    {},
    {},
    {}
  ],
  "AlarmIdentifier": {
    "Region": {},
    "Name": {}
  },
  "InsufficientDataHealthStatus": "Healthy",
  "ResetElements": [
    {}
  ]
}
```

<h3 id="updatehealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HealthCheckId|path|string|true|The ID for the health check for which you want detailed information. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» HealthCheckVersion|body|integer|false|<p>A sequential counter that Amazon Route 53 sets to <code>1</code> when you create a health check and increments by 1 each time you update settings for the health check.</p> <p>We recommend that you use <code>GetHealthCheck</code> or <code>ListHealthChecks</code> to get the current value of <code>HealthCheckVersion</code> for the health check that you want to update, and that you include that value in your <code>UpdateHealthCheck</code> request. This prevents Route 53 from overwriting an intervening update:</p> <ul> <li> <p>If the value in the <code>UpdateHealthCheck</code> request matches the value of <code>HealthCheckVersion</code> in the health check, Route 53 updates the health check with the new settings.</p> </li> <li> <p>If the value of <code>HealthCheckVersion</code> in the health check is greater, the health check was changed after you got the version number. Route 53 does not update the health check, and it returns a <code>HealthCheckVersionMismatch</code> error.</p> </li> </ul>|
|» IPAddress|body|string|false|<p>The IPv4 or IPv6 IP address for the endpoint that you want Amazon Route 53 to perform health checks on. If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to resolve the domain name that you specify in <code>FullyQualifiedDomainName</code> at the interval that you specify in <code>RequestInterval</code>. Using an IP address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <p>Use one of the following formats for the value of <code>IPAddress</code>: </p> <ul> <li> <p> <b>IPv4 address</b>: four values between 0 and 255, separated by periods (.), for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <b>IPv6 address</b>: eight groups of four hexadecimal values, separated by colons (:), for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>. You can also shorten IPv6 addresses as described in RFC 5952, for example, <code>2001:db8:85a3::abcd:1:2345</code>.</p> </li> </ul> <p>If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for <code>IPAddress</code>. This ensures that the IP address of your instance never changes. For more information, see the applicable documentation:</p> <ul> <li> <p>Linux: <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> </p> </li> <li> <p>Windows: <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses (EIP)</a> in the <i>Amazon EC2 User Guide for Windows Instances</i> </p> </li> </ul> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. </p> <p>Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:</p> <ul> <li> <p> <a href="https://tools.ietf.org/html/rfc5735">RFC 5735, Special Use IPv4 Addresses</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc6598">RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space</a> </p> </li> <li> <p> <a href="https://tools.ietf.org/html/rfc5156">RFC 5156, Special-Use IPv6 Addresses</a> </p> </li> </ul>|
|» Port|body|integer|false|<p>The port on the endpoint that you want Amazon Route 53 to perform health checks on.</p> <note> <p>Don't specify a value for <code>Port</code> when you specify a value for <code>Type</code> of <code>CLOUDWATCH_METRIC</code> or <code>CALCULATED</code>.</p> </note>|
|» ResourcePath|body|string|false|<p>The path that you want Amazon Route 53 to request when performing health checks. The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example the file /docs/route53-health-check.html. You can also include query string parameters, for example, <code>/welcome.html?language=jp&amp;login=y</code>. </p> <p>Specify this value only if you want to change it.</p>|
|» FullyQualifiedDomainName|body|string|false|<p>Amazon Route 53 behavior depends on whether you specify a value for <code>IPAddress</code>.</p> <note> <p>If a health check already has a value for <code>IPAddress</code>, you can change the value. However, you can't update an existing health check to add or remove the value of <code>IPAddress</code>. </p> </note> <p> <b>If you specify a value for</b> <code>IPAddress</code>:</p> <p>Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.</p> <p>When Route 53 checks the health of an endpoint, here is how it constructs the <code>Host</code> header:</p> <ul> <li> <p>If you specify a value of <code>80</code> for <code>Port</code> and <code>HTTP</code> or <code>HTTP_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify a value of <code>443</code> for <code>Port</code> and <code>HTTPS</code> or <code>HTTPS_STR_MATCH</code> for <code>Type</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>Host</code> header.</p> </li> <li> <p>If you specify another value for <code>Port</code> and any value except <code>TCP</code> for <code>Type</code>, Route 53 passes <i> <code>FullyQualifiedDomainName</code>:<code>Port</code> </i> to the endpoint in the <code>Host</code> header.</p> </li> </ul> <p>If you don't specify a value for <code>FullyQualifiedDomainName</code>, Route 53 substitutes the value of <code>IPAddress</code> in the <code>Host</code> header in each of the above cases.</p> <p> <b>If you don't specify a value for</b> <code>IPAddress</code>:</p> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 sends a DNS request to the domain that you specify in <code>FullyQualifiedDomainName</code> at the interval you specify in <code>RequestInterval</code>. Using an IPv4 address that is returned by DNS, Route 53 then checks the health of the endpoint.</p> <note> <p>If you don't specify a value for <code>IPAddress</code>, Route 53 uses only IPv4 to send health checks to the endpoint. If there's no resource record set with a type of A for the name that you specify for <code>FullyQualifiedDomainName</code>, the health check fails with a "DNS resolution failed" error.</p> </note> <p>If you want to check the health of weighted, latency, or failover resource record sets and you choose to specify the endpoint only by <code>FullyQualifiedDomainName</code>, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of <code>FullyQualifiedDomainName</code>, specify the domain name of the server (such as <code>us-east-2-www.example.com</code>), not the name of the resource record sets (www.example.com).</p> <important> <p>In this configuration, if the value of <code>FullyQualifiedDomainName</code> matches the name of the resource record sets and you then associate the health check with those resource record sets, health check results will be unpredictable.</p> </important> <p>In addition, if the value of <code>Type</code> is <code>HTTP</code>, <code>HTTPS</code>, <code>HTTP_STR_MATCH</code>, or <code>HTTPS_STR_MATCH</code>, Route 53 passes the value of <code>FullyQualifiedDomainName</code> in the <code>Host</code> header, as it does when you specify a value for <code>IPAddress</code>. If the value of <code>Type</code> is <code>TCP</code>, Route 53 doesn't pass a <code>Host</code> header.</p>|
|» SearchString|body|string|false|If the value of <code>Type</code> is <code>HTTP_STR_MATCH</code> or <code>HTTPS_STR_MATCH</code>, the string that you want Amazon Route 53 to search for in the response body from the specified resource. If the string appears in the response body, Route 53 considers the resource healthy. (You can't change the value of <code>Type</code> when you update a health check.)|
|» FailureThreshold|body|integer|false|<p>The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html">How Amazon Route 53 Determines Whether an Endpoint Is Healthy</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>If you don't specify a value for <code>FailureThreshold</code>, the default value is three health checks.</p>|
|» Inverted|body|boolean|false|Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.|
|» Disabled|body|boolean|false|<p>Stops Route 53 from performing health checks. When you disable a health check, here's what happens:</p> <ul> <li> <p> <b>Health checks that check the health of endpoints:</b> Route 53 stops submitting requests to your application, server, or other resource.</p> </li> <li> <p> <b>Calculated health checks:</b> Route 53 stops aggregating the status of the referenced health checks.</p> </li> <li> <p> <b>Health checks that monitor CloudWatch alarms:</b> Route 53 stops monitoring the corresponding CloudWatch metrics.</p> </li> </ul> <p>After you disable a health check, Route 53 considers the status of the health check to always be healthy. If you configured DNS failover, Route 53 continues to route traffic to the corresponding resources. If you want to stop routing traffic to a resource, change the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-Inverted">Inverted</a>. </p> <p>Charges for a health check still apply when the health check is disabled. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>|
|» HealthThreshold|body|integer|false|<p>The number of child health checks that are associated with a <code>CALCULATED</code> health that Amazon Route 53 must consider healthy for the <code>CALCULATED</code> health check to be considered healthy. To specify the child health checks that you want to associate with a <code>CALCULATED</code> health check, use the <code>ChildHealthChecks</code> and <code>ChildHealthCheck</code> elements.</p> <p>Note the following:</p> <ul> <li> <p>If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.</p> </li> <li> <p>If you specify <code>0</code>, Route 53 always considers this health check to be healthy.</p> </li> </ul>|
|» ChildHealthChecks|body|[object]|false|A complex type that contains one <code>ChildHealthCheck</code> element for each health check that you want to associate with a <code>CALCULATED</code> health check.|
|» EnableSNI|body|boolean|false|<p>Specify whether you want Amazon Route 53 to send the value of <code>FullyQualifiedDomainName</code> to the endpoint in the <code>client_hello</code> message during <code>TLS</code> negotiation. This allows the endpoint to respond to <code>HTTPS</code> health check requests with the applicable SSL/TLS certificate.</p> <p>Some endpoints require that HTTPS requests include the host name in the <code>client_hello</code> message. If you don't enable SNI, the status of the health check will be SSL alert <code>handshake_failure</code>. A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.</p> <p>The SSL/TLS certificate on your endpoint includes a domain name in the <code>Common Name</code> field and possibly several more in the <code>Subject Alternative Names</code> field. One of the domain names in the certificate should match the value that you specify for <code>FullyQualifiedDomainName</code>. If the endpoint responds to the <code>client_hello</code> message with a certificate that does not include the domain name that you specified in <code>FullyQualifiedDomainName</code>, a health checker will retry the handshake. In the second attempt, the health checker will omit <code>FullyQualifiedDomainName</code> from the <code>client_hello</code> message.</p>|
|» Regions|body|[object]|false|A complex type that contains one <code>Region</code> element for each region that you want Amazon Route 53 health checkers to check the specified endpoint from.|
|» AlarmIdentifier|body|object|false|A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.|
|» » Region|body|object|false|none|
|» » Name|body|object|false|none|
|» InsufficientDataHealthStatus|body|string|false|<p>When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:</p> <ul> <li> <p> <code>Healthy</code>: Route 53 considers the health check to be healthy.</p> </li> <li> <p> <code>Unhealthy</code>: Route 53 considers the health check to be unhealthy.</p> </li> <li> <p> <code>LastKnownStatus</code>: By default, Route 53 uses the status of the health check from the last time CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the status for the health check is healthy.</p> </li> </ul>|
|» ResetElements|body|[object]|false|<p>A complex type that contains one <code>ResettableElementName</code> element for each element that you want to reset to the default value. Valid values for <code>ResettableElementName</code> include the following:</p> <ul> <li> <p> <code>ChildHealthChecks</code>: Amazon Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ChildHealthChecks">ChildHealthChecks</a> to null.</p> </li> <li> <p> <code>FullyQualifiedDomainName</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName">FullyQualifiedDomainName</a>. to null.</p> </li> <li> <p> <code>Regions</code>: Route 53 resets the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a> list to the default set of regions. </p> </li> <li> <p> <code>ResourcePath</code>: Route 53 resets <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-ResourcePath">ResourcePath</a> to null.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» InsufficientDataHealthStatus|Healthy|
|» InsufficientDataHealthStatus|Unhealthy|
|» InsufficientDataHealthStatus|LastKnownStatus|

<h3 id="updatehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHealthCheckResponse](#schemaupdatehealthcheckresponse)|
|480|480|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|HealthCheckVersionMismatch|[HealthCheckVersionMismatch](#schemahealthcheckversionmismatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHealthCheck

<a id="opIdDeleteHealthCheck"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/healthcheck/{HealthCheckId}`

<p>Deletes a health check.</p> <important> <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>If you're using Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53. </p>

<h3 id="deletehealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HealthCheckId|path|string|true|The ID of the health check that you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletehealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHealthCheckResponse](#schemadeletehealthcheckresponse)|
|480|480|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|481|481|HealthCheckInUse|[HealthCheckInUse](#schemahealthcheckinuse)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHostedZone

<a id="opIdGetHostedZone"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzone/{Id}`

Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.

<h3 id="gethostedzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the hosted zone that you want to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHostedZoneResponse](#schemagethostedzoneresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateHostedZoneComment

<a id="opIdUpdateHostedZoneComment"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Comment":"string"}'
```

`POST /2013-04-01/hostedzone/{Id}`

Updates the comment for a specified hosted zone.

> Body parameter

```json
{
  "Comment": "string"
}
```

<h3 id="updatehostedzonecomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID for the hosted zone that you want to update the comment for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Comment|body|string|false|The new comment for the hosted zone. If you don't specify a value for <code>Comment</code>, Amazon Route 53 deletes the existing value of the <code>Comment</code> element, if any.|

<h3 id="updatehostedzonecomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateHostedZoneCommentResponse](#schemaupdatehostedzonecommentresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteHostedZone

<a id="opIdDeleteHostedZone"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/hostedzone/{Id}`

<p>Deletes a hosted zone.</p> <p>If the hosted zone was created by another service, such as Cloud Map, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.)</p> <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p> <important> <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.</p> </important> <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a> for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service."</p> <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a <code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p> <p>To verify that the hosted zone has been deleted, do one of the following:</p> <ul> <li> <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p> </li> <li> <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current Amazon Web Services account.</p> </li> </ul>

<h3 id="deletehostedzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the hosted zone you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletehostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteHostedZoneResponse](#schemadeletehostedzoneresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|HostedZoneNotEmpty|[HostedZoneNotEmpty](#schemahostedzonenotempty)|
|482|482|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|
|484|484|InvalidDomainName|[InvalidDomainName](#schemainvaliddomainname)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteKeySigningKey

<a id="opIdDeleteKeySigningKey"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/keysigningkey/string/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/keysigningkey/{HostedZoneId}/{Name}`

<p>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing.</p> <p>You can use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html">DeactivateKeySigningKey</a> to deactivate the key before you delete it.</p> <p>Use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html">GetDNSSEC</a> to verify that the KSK is in an <code>INACTIVE</code> status.</p>

<h3 id="deletekeysigningkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HostedZoneId|path|string|true|A unique string used to identify a hosted zone.|
|Name|path|string|true|A string used to identify a key-signing key (KSK).|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletekeysigningkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteKeySigningKeyResponse](#schemadeletekeysigningkeyresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|NoSuchKeySigningKey|[NoSuchKeySigningKey](#schemanosuchkeysigningkey)|
|482|482|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|483|483|InvalidSigningStatus|[InvalidSigningStatus](#schemainvalidsigningstatus)|
|484|484|InvalidKMSArn|[InvalidKMSArn](#schemainvalidkmsarn)|
|485|485|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetQueryLoggingConfig

<a id="opIdGetQueryLoggingConfig"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/queryloggingconfig/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/queryloggingconfig/{Id}`

<p>Gets information about a specified configuration for DNS query logging.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>

<h3 id="getqueryloggingconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the configuration for DNS query logging that you want to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getqueryloggingconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetQueryLoggingConfigResponse](#schemagetqueryloggingconfigresponse)|
|480|480|NoSuchQueryLoggingConfig|[NoSuchQueryLoggingConfig](#schemanosuchqueryloggingconfig)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteQueryLoggingConfig

<a id="opIdDeleteQueryLoggingConfig"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/queryloggingconfig/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/queryloggingconfig/{Id}`

<p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>

<h3 id="deletequeryloggingconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the configuration that you want to delete. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletequeryloggingconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteQueryLoggingConfigResponse](#schemadeletequeryloggingconfigresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|NoSuchQueryLoggingConfig|[NoSuchQueryLoggingConfig](#schemanosuchqueryloggingconfig)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReusableDelegationSet

<a id="opIdGetReusableDelegationSet"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/delegationset/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/delegationset/{Id}`

Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.

<h3 id="getreusabledelegationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the reusable delegation set that you want to get a list of name servers for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getreusabledelegationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReusableDelegationSetResponse](#schemagetreusabledelegationsetresponse)|
|480|480|NoSuchDelegationSet|[NoSuchDelegationSet](#schemanosuchdelegationset)|
|481|481|DelegationSetNotReusable|[DelegationSetNotReusable](#schemadelegationsetnotreusable)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteReusableDelegationSet

<a id="opIdDeleteReusableDelegationSet"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/delegationset/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/delegationset/{Id}`

<p>Deletes a reusable delegation set.</p> <important> <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p> </important> <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable delegation set that you want to delete.</p>

<h3 id="deletereusabledelegationset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the reusable delegation set that you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletereusabledelegationset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteReusableDelegationSetResponse](#schemadeletereusabledelegationsetresponse)|
|480|480|NoSuchDelegationSet|[NoSuchDelegationSet](#schemanosuchdelegationset)|
|481|481|DelegationSetInUse|[DelegationSetInUse](#schemadelegationsetinuse)|
|482|482|DelegationSetNotReusable|[DelegationSetNotReusable](#schemadelegationsetnotreusable)|
|483|483|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrafficPolicy

<a id="opIdGetTrafficPolicy"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicy/string/1 \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicy/{Id}/{Version}`

<p>Gets information about a specific traffic policy version.</p> <p>For information about how of deleting a traffic policy affects the response from <code>GetTrafficPolicy</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>

<h3 id="gettrafficpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the traffic policy that you want to get information about.|
|Version|path|integer|true|The version number of the traffic policy that you want to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gettrafficpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrafficPolicyResponse](#schemagettrafficpolicyresponse)|
|480|480|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTrafficPolicyComment

<a id="opIdUpdateTrafficPolicyComment"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicy/string/1 \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Comment":"string"}'
```

`POST /2013-04-01/trafficpolicy/{Id}/{Version}`

Updates the comment for a specified traffic policy version.

> Body parameter

```json
{
  "Comment": "string"
}
```

<h3 id="updatetrafficpolicycomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The value of <code>Id</code> for the traffic policy that you want to update the comment for.|
|Version|path|integer|true|The value of <code>Version</code> for the traffic policy that you want to update the comment for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Comment|body|string|true|The new comment for the specified traffic policy and version.|

<h3 id="updatetrafficpolicycomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrafficPolicyCommentResponse](#schemaupdatetrafficpolicycommentresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|482|482|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTrafficPolicy

<a id="opIdDeleteTrafficPolicy"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicy/string/1 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/trafficpolicy/{Id}/{Version}`

<p>Deletes a traffic policy.</p> <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the following:</p> <ul> <li> <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p> </li> <li> <p> There's no way to get a list of deleted policies.</p> </li> <li> <p>If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p> </li> </ul>

<h3 id="deletetrafficpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the traffic policy that you want to delete.|
|Version|path|integer|true|The version number of the traffic policy that you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletetrafficpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrafficPolicyResponse](#schemadeletetrafficpolicyresponse)|
|480|480|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|TrafficPolicyInUse|[TrafficPolicyInUse](#schematrafficpolicyinuse)|
|483|483|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrafficPolicyInstance

<a id="opIdGetTrafficPolicyInstance"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstance/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicyinstance/{Id}`

<p>Gets information about a specified traffic policy instance.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>

<h3 id="gettrafficpolicyinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the traffic policy instance that you want to get information about.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gettrafficpolicyinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrafficPolicyInstanceResponse](#schemagettrafficpolicyinstanceresponse)|
|480|480|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTrafficPolicyInstance

<a id="opIdUpdateTrafficPolicyInstance"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstance/string \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TTL":0,"TrafficPolicyId":"string","TrafficPolicyVersion":1}'
```

`POST /2013-04-01/trafficpolicyinstance/{Id}`

<p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p> <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p> <ol> <li> <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets. </p> </li> <li> <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets.</p> </li> <li> <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p> </li> </ol>

> Body parameter

```json
{
  "TTL": 0,
  "TrafficPolicyId": "string",
  "TrafficPolicyVersion": 1
}
```

<h3 id="updatetrafficpolicyinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the traffic policy instance that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TTL|body|integer|true|The TTL that you want Amazon Route 53 to assign to all of the updated resource record sets.|
|» TrafficPolicyId|body|string|true|The ID of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.|
|» TrafficPolicyVersion|body|integer|true|The version of the traffic policy that you want Amazon Route 53 to use to update resource record sets for the specified traffic policy instance.|

<h3 id="updatetrafficpolicyinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrafficPolicyInstanceResponse](#schemaupdatetrafficpolicyinstanceresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|
|482|482|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|
|483|483|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|
|484|484|ConflictingTypes|[ConflictingTypes](#schemaconflictingtypes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTrafficPolicyInstance

<a id="opIdDeleteTrafficPolicyInstance"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstance/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2013-04-01/trafficpolicyinstance/{Id}`

<p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>

<h3 id="deletetrafficpolicyinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The ID of the traffic policy instance that you want to delete. </p> <important> <p>When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance.</p> </important>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletetrafficpolicyinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrafficPolicyInstanceResponse](#schemadeletetrafficpolicyinstanceresponse)|
|480|480|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVPCAssociationAuthorization

<a id="opIdDeleteVPCAssociationAuthorization"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/deauthorizevpcassociation \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"VPC":{"VPCRegion":{},"VPCId":"string"}}'
```

`POST /2013-04-01/hostedzone/{Id}/deauthorizevpcassociation`

<p>Removes authorization to submit an <code>AssociateVPCWithHostedZone</code> request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a <code>DeleteVPCAssociationAuthorization</code> request.</p> <important> <p>Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, <code>DeleteVPCAssociationAuthorization</code> won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use <code>DisassociateVPCFromHostedZone</code>.</p> </important>

> Body parameter

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

<h3 id="deletevpcassociationauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, the ID of the hosted zone.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VPC|body|object|true|<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>|
|» » VPCRegion|body|object|false|none|
|» » VPCId|body|[VPCId](#schemavpcid)|false|(Private hosted zones only) The ID of an Amazon VPC. |

<h3 id="deletevpcassociationauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVPCAssociationAuthorizationResponse](#schemadeletevpcassociationauthorizationresponse)|
|480|480|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|481|481|VPCAssociationAuthorizationNotFound|[VPCAssociationAuthorizationNotFound](#schemavpcassociationauthorizationnotfound)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|483|483|InvalidVPCId|[InvalidVPCId](#schemainvalidvpcid)|
|484|484|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisableHostedZoneDNSSEC

<a id="opIdDisableHostedZoneDNSSEC"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/disable-dnssec \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /2013-04-01/hostedzone/{Id}/disable-dnssec`

Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone.

<h3 id="disablehostedzonednssec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|A unique string used to identify a hosted zone.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="disablehostedzonednssec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisableHostedZoneDNSSECResponse](#schemadisablehostedzonednssecresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|483|483|KeySigningKeyInParentDSRecord|[KeySigningKeyInParentDSRecord](#schemakeysigningkeyinparentdsrecord)|
|484|484|DNSSECNotFound|[DNSSECNotFound](#schemadnssecnotfound)|
|485|485|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|486|486|InvalidKMSArn|[InvalidKMSArn](#schemainvalidkmsarn)|
|487|487|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateVPCFromHostedZone

<a id="opIdDisassociateVPCFromHostedZone"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/disassociatevpc \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"VPC":{"VPCRegion":{},"VPCId":"string"},"Comment":"string"}'
```

`POST /2013-04-01/hostedzone/{Id}/disassociatevpc`

<p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:</p> <ul> <li> <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p> </li> <li> <p>You can't convert a private hosted zone into a public hosted zone.</p> </li> <li> <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using either the account that created the hosted zone or the account that created the Amazon VPC.</p> </li> <li> <p>Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.</p> <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>, if the hosted zone has a value for <code>OwningAccount</code>, you can use <code>DisassociateVPCFromHostedZone</code>. If the hosted zone has a value for <code>OwningService</code>, you can't use <code>DisassociateVPCFromHostedZone</code>.</p> </li> </ul> <note> <p>When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

> Body parameter

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "Comment": "string"
}
```

<h3 id="disassociatevpcfromhostedzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the private hosted zone that you want to disassociate a VPC from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VPC|body|object|true|<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>|
|» » VPCRegion|body|object|false|none|
|» » VPCId|body|[VPCId](#schemavpcid)|false|(Private hosted zones only) The ID of an Amazon VPC. |
|» Comment|body|string|false| <i>Optional:</i> A comment about the disassociation request.|

<h3 id="disassociatevpcfromhostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateVPCFromHostedZoneResponse](#schemadisassociatevpcfromhostedzoneresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidVPCId|[InvalidVPCId](#schemainvalidvpcid)|
|482|482|VPCAssociationNotFound|[VPCAssociationNotFound](#schemavpcassociationnotfound)|
|483|483|LastVPCAssociation|[LastVPCAssociation](#schemalastvpcassociation)|
|484|484|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## EnableHostedZoneDNSSEC

<a id="opIdEnableHostedZoneDNSSEC"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/enable-dnssec \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /2013-04-01/hostedzone/{Id}/enable-dnssec`

Enables DNSSEC signing in a specific hosted zone.

<h3 id="enablehostedzonednssec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|A unique string used to identify a hosted zone.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="enablehostedzonednssec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnableHostedZoneDNSSECResponse](#schemaenablehostedzonednssecresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|ConcurrentModification|[ConcurrentModification](#schemaconcurrentmodification)|
|483|483|KeySigningKeyWithActiveStatusNotFound|[KeySigningKeyWithActiveStatusNotFound](#schemakeysigningkeywithactivestatusnotfound)|
|484|484|InvalidKMSArn|[InvalidKMSArn](#schemainvalidkmsarn)|
|485|485|HostedZonePartiallyDelegated|[HostedZonePartiallyDelegated](#schemahostedzonepartiallydelegated)|
|486|486|DNSSECNotFound|[DNSSECNotFound](#schemadnssecnotfound)|
|487|487|InvalidKeySigningKeyStatus|[InvalidKeySigningKeyStatus](#schemainvalidkeysigningkeystatus)|
|488|488|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccountLimit

<a id="opIdGetAccountLimit"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/accountlimit/MAX_HEALTH_CHECKS_BY_OWNER \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/accountlimit/{Type}`

<p>Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p> <note> <p>You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to the Amazon Web Services Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p> </note>

<h3 id="getaccountlimit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|path|string|true|<p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create using the current account.</p> </li> <li> <p> <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create using the current account.</p> </li> <li> <p> <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|MAX_HEALTH_CHECKS_BY_OWNER|
|Type|MAX_HOSTED_ZONES_BY_OWNER|
|Type|MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER|
|Type|MAX_REUSABLE_DELEGATION_SETS_BY_OWNER|
|Type|MAX_TRAFFIC_POLICIES_BY_OWNER|

<h3 id="getaccountlimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccountLimitResponse](#schemagetaccountlimitresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetChange

<a id="opIdGetChange"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/change/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/change/{Id}`

<p>Returns the current status of a change batch request. The status is one of the following values:</p> <ul> <li> <p> <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers managing the hosted zone. This is the initial status of all change batch requests.</p> </li> <li> <p> <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers managing the hosted zone. </p> </li> </ul>

<h3 id="getchange-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the change batch request. The value that you specify here is the value that <code>ChangeResourceRecordSets</code> returned in the <code>Id</code> element when you submitted the request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getchange-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetChangeResponse](#schemagetchangeresponse)|
|480|480|NoSuchChange|[NoSuchChange](#schemanosuchchange)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCheckerIpRanges

<a id="opIdGetCheckerIpRanges"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/checkeripranges \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/checkeripranges`

<p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <important> <p> <code>GetCheckerIpRanges</code> still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important>

<h3 id="getcheckeripranges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcheckeripranges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCheckerIpRangesResponse](#schemagetcheckeriprangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDNSSEC

<a id="opIdGetDNSSEC"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/dnssec \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzone/{Id}/dnssec`

Returns information about DNSSEC for a specific hosted zone, including the key-signing keys (KSKs) in the hosted zone.

<h3 id="getdnssec-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|A unique string used to identify a hosted zone.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getdnssec-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDNSSECResponse](#schemagetdnssecresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGeoLocation

<a id="opIdGetGeoLocation"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/geolocation \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/geolocation`

<p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p> <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <p>Use the following syntax to determine whether a continent is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i> </code> </p> <p>Use the following syntax to determine whether a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i> </code> </p> <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&amp;subdivisioncode=<i>subdivision code</i> </code> </p>

<h3 id="getgeolocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continentcode|query|string|false|<p>For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes:</p> <ul> <li> <p> <b>AF</b>: Africa</p> </li> <li> <p> <b>AN</b>: Antarctica</p> </li> <li> <p> <b>AS</b>: Asia</p> </li> <li> <p> <b>EU</b>: Europe</p> </li> <li> <p> <b>OC</b>: Oceania</p> </li> <li> <p> <b>NA</b>: North America</p> </li> <li> <p> <b>SA</b>: South America</p> </li> </ul>|
|countrycode|query|string|false|Amazon Route 53 uses the two-letter country codes that are specified in <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.|
|subdivisioncode|query|string|false|The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a> on the United States Postal Service website. For a list of all supported subdivision codes, use the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html">ListGeoLocations</a> API.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getgeolocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGeoLocationResponse](#schemagetgeolocationresponse)|
|480|480|NoSuchGeoLocation|[NoSuchGeoLocation](#schemanosuchgeolocation)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHealthCheckCount

<a id="opIdGetHealthCheckCount"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheckcount \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/healthcheckcount`

Retrieves the number of health checks that are associated with the current Amazon Web Services account.

<h3 id="gethealthcheckcount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethealthcheckcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHealthCheckCountResponse](#schemagethealthcheckcountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHealthCheckLastFailureReason

<a id="opIdGetHealthCheckLastFailureReason"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck/string/lastfailurereason \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason`

Gets the reason that a specified health check failed most recently.

<h3 id="gethealthchecklastfailurereason-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HealthCheckId|path|string|true|<p>The ID for the health check for which you want the last failure reason. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckLastFailureReason</code> for a calculated health check.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethealthchecklastfailurereason-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHealthCheckLastFailureReasonResponse](#schemagethealthchecklastfailurereasonresponse)|
|480|480|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHealthCheckStatus

<a id="opIdGetHealthCheckStatus"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/healthcheck/string/status \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/healthcheck/{HealthCheckId}/status`

<p>Gets status of a specified health check. </p> <important> <p>This API is intended for use during development to diagnose behavior. It doesn’t support production use-cases with high query rates that require immediate and actionable responses.</p> </important>

<h3 id="gethealthcheckstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|HealthCheckId|path|string|true|<p>The ID for the health check that you want the current status for. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckStatus</code> to get the status of a calculated health check.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethealthcheckstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHealthCheckStatusResponse](#schemagethealthcheckstatusresponse)|
|480|480|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHostedZoneCount

<a id="opIdGetHostedZoneCount"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzonecount \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzonecount`

Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.

<h3 id="gethostedzonecount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gethostedzonecount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHostedZoneCountResponse](#schemagethostedzonecountresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetHostedZoneLimit

<a id="opIdGetHostedZoneLimit"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzonelimit/string/MAX_RRSETS_BY_ZONE \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzonelimit/{Id}/{Type}`

<p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. </p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>

<h3 id="gethostedzonelimit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|path|string|true|<p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create in the specified hosted zone.</p> </li> <li> <p> <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</p> </li> </ul>|
|Id|path|string|true|The ID of the hosted zone that you want to get a limit for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|MAX_RRSETS_BY_ZONE|
|Type|MAX_VPCS_ASSOCIATED_BY_ZONE|

<h3 id="gethostedzonelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetHostedZoneLimitResponse](#schemagethostedzonelimitresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|
|482|482|HostedZoneNotPrivate|[HostedZoneNotPrivate](#schemahostedzonenotprivate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetReusableDelegationSetLimit

<a id="opIdGetReusableDelegationSetLimit"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/reusabledelegationsetlimit/string/MAX_ZONES_BY_REUSABLE_DELEGATION_SET \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/reusabledelegationsetlimit/{Id}/{Type}`

<p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>

<h3 id="getreusabledelegationsetlimit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|path|string|true|Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate with the specified reusable delegation set.|
|Id|path|string|true|The ID of the delegation set that you want to get the limit for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Type|MAX_ZONES_BY_REUSABLE_DELEGATION_SET|

<h3 id="getreusabledelegationsetlimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetReusableDelegationSetLimitResponse](#schemagetreusabledelegationsetlimitresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchDelegationSet|[NoSuchDelegationSet](#schemanosuchdelegationset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetTrafficPolicyInstanceCount

<a id="opIdGetTrafficPolicyInstanceCount"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstancecount \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicyinstancecount`

Gets the number of traffic policy instances that are associated with the current Amazon Web Services account.

<h3 id="gettrafficpolicyinstancecount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="gettrafficpolicyinstancecount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetTrafficPolicyInstanceCountResponse](#schemagettrafficpolicyinstancecountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCidrBlocks

<a id="opIdListCidrBlocks"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/cidrcollection/string/cidrblocks \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/cidrcollection/{CidrCollectionId}/cidrblocks`

Returns a paginated list of location objects and their CIDR blocks.

<h3 id="listcidrblocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CidrCollectionId|path|string|true|The UUID of the CIDR collection.|
|location|query|string|false|The name of the CIDR collection location.|
|nexttoken|query|string|false|An opaque pagination token to indicate where the service is to begin enumerating results.|
|maxresults|query|string|false|Maximum number of results you want returned.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listcidrblocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCidrBlocksResponse](#schemalistcidrblocksresponse)|
|480|480|NoSuchCidrCollectionException|[NoSuchCidrCollectionException](#schemanosuchcidrcollectionexception)|
|481|481|NoSuchCidrLocationException|[NoSuchCidrLocationException](#schemanosuchcidrlocationexception)|
|482|482|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGeoLocations

<a id="opIdListGeoLocations"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/geolocations \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/geolocations`

<p>Retrieves a list of supported geographic locations.</p> <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p> <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p> <p>For a list of supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>

<h3 id="listgeolocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startcontinentcode|query|string|false|<p>The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is true, and if <code>NextContinentCode</code> from the previous response has a value, enter that value in <code>startcontinentcode</code> to return the next page of results.</p> <p>Include <code>startcontinentcode</code> only if you want to list continents. Don't include <code>startcontinentcode</code> when you're listing countries or countries with their subdivisions.</p>|
|startcountrycode|query|string|false|The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextCountryCode</code> from the previous response has a value, enter that value in <code>startcountrycode</code> to return the next page of results.|
|startsubdivisioncode|query|string|false|<p>The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextSubdivisionCode</code> from the previous response has a value, enter that value in <code>startsubdivisioncode</code> to return the next page of results.</p> <p>To list subdivisions (U.S. states), you must include both <code>startcountrycode</code> and <code>startsubdivisioncode</code>.</p>|
|maxitems|query|string|false|(Optional) The maximum number of geolocations to be included in the response body for this request. If more than <code>maxitems</code> geolocations remain to be listed, then the value of the <code>IsTruncated</code> element in the response is <code>true</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listgeolocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGeoLocationsResponse](#schemalistgeolocationsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHostedZonesByName

<a id="opIdListHostedZonesByName"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzonesbyname \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzonesbyname`

<p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element for each hosted zone created by the current Amazon Web Services account. </p> <p> <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order in some circumstances.</p> <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p> <p> <code>com.ex\344mple.</code> </p> <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p> <ul> <li> <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the <code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p> </li> <li> <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code> parameter in the request that produced the current response.</p> </li> <li> <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the current Amazon Web Services account. </p> <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account. The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p> </li> <li> <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> </li> </ul>

<h3 id="listhostedzonesbyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dnsname|query|string|false|(Optional) For your first request to <code>ListHostedZonesByName</code>, include the <code>dnsname</code> parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the <code>dnsname</code> parameter, Amazon Route 53 returns all of the hosted zones that were created by the current Amazon Web Services account, in ASCII order. For subsequent requests, include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For <code>dnsname</code>, specify the value of <code>NextDNSName</code> from the previous response.|
|hostedzoneid|query|string|false|<p>(Optional) For your first request to <code>ListHostedZonesByName</code>, do not include the <code>hostedzoneid</code> parameter.</p> <p>If you have more hosted zones than the value of <code>maxitems</code>, <code>ListHostedZonesByName</code> returns only the first <code>maxitems</code> hosted zones. To get the next group of <code>maxitems</code> hosted zones, submit another request to <code>ListHostedZonesByName</code> and include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For the value of <code>hostedzoneid</code>, specify the value of the <code>NextHostedZoneId</code> element from the previous response.</p>|
|maxitems|query|string|false|The maximum number of hosted zones to be included in the response body for this request. If you have more than <code>maxitems</code> hosted zones, then the value of the <code>IsTruncated</code> element in the response is true, and the values of <code>NextDNSName</code> and <code>NextHostedZoneId</code> specify the first hosted zone in the next group of <code>maxitems</code> hosted zones. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listhostedzonesbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHostedZonesByNameResponse](#schemalisthostedzonesbynameresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|InvalidDomainName|[InvalidDomainName](#schemainvaliddomainname)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListHostedZonesByVPC

<a id="opIdListHostedZonesByVPC"></a>

> Code samples

```bash
curl 'https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzonesbyvpc#vpcid&vpcregion?vpcid=string&vpcregion=us-east-1' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzonesbyvpc#vpcid&vpcregion`

<p>Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account or Amazon Web Services service owns the hosted zones. The <code>HostedZoneOwner</code> structure in the response contains one of the following values:</p> <ul> <li> <p>An <code>OwningAccount</code> element, which contains the account number of either the current Amazon Web Services account or another Amazon Web Services account. Some services, such as Cloud Map, create hosted zones using the current account. </p> </li> <li> <p>An <code>OwningService</code> element, which identifies the Amazon Web Services service that created and owns the hosted zone. For example, if a hosted zone was created by Amazon Elastic File System (Amazon EFS), the value of <code>Owner</code> is <code>efs.amazonaws.com</code>. </p> </li> </ul> <note> <p>When listing private hosted zones, the hosted zone and the Amazon VPC must belong to the same partition where the hosted zones were created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.</p> <p>The following are the supported partitions:</p> <ul> <li> <p> <code>aws</code> - Amazon Web Services Regions</p> </li> <li> <p> <code>aws-cn</code> - China Regions</p> </li> <li> <p> <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a> in the <i>Amazon Web Services General Reference</i>.</p> </note>

<h3 id="listhostedzonesbyvpc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vpcid|query|string|true|The ID of the Amazon VPC that you want to list hosted zones for.|
|vpcregion|query|string|true|For the Amazon VPC that you specified for <code>VPCId</code>, the Amazon Web Services Region that you created the VPC in. |
|maxitems|query|string|false|(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If the specified VPC is associated with more than <code>MaxItems</code> hosted zones, the response includes a <code>NextToken</code> element. <code>NextToken</code> contains an encrypted token that identifies the first hosted zone that Route 53 will return if you submit another request.|
|nexttoken|query|string|false|<p>If the previous response included a <code>NextToken</code> element, the specified VPC is associated with more hosted zones. To get more hosted zones, submit another <code>ListHostedZonesByVPC</code> request. </p> <p>For the value of <code>NextToken</code>, specify the value of <code>NextToken</code> from the previous response.</p> <p>If the previous response didn't include a <code>NextToken</code> element, there are no more hosted zones to get.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vpcregion|us-east-1|
|vpcregion|us-east-2|
|vpcregion|us-west-1|
|vpcregion|us-west-2|
|vpcregion|eu-west-1|
|vpcregion|eu-west-2|
|vpcregion|eu-west-3|
|vpcregion|eu-central-1|
|vpcregion|eu-central-2|
|vpcregion|ap-east-1|
|vpcregion|me-south-1|
|vpcregion|us-gov-west-1|
|vpcregion|us-gov-east-1|
|vpcregion|us-iso-east-1|
|vpcregion|us-iso-west-1|
|vpcregion|us-isob-east-1|
|vpcregion|me-central-1|
|vpcregion|ap-southeast-1|
|vpcregion|ap-southeast-2|
|vpcregion|ap-southeast-3|
|vpcregion|ap-south-1|
|vpcregion|ap-south-2|
|vpcregion|ap-northeast-1|
|vpcregion|ap-northeast-2|
|vpcregion|ap-northeast-3|
|vpcregion|eu-north-1|
|vpcregion|sa-east-1|
|vpcregion|ca-central-1|
|vpcregion|cn-north-1|
|vpcregion|af-south-1|
|vpcregion|eu-south-1|
|vpcregion|eu-south-2|
|vpcregion|ap-southeast-4|
|vpcregion|il-central-1|

<h3 id="listhostedzonesbyvpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHostedZonesByVPCResponse](#schemalisthostedzonesbyvpcresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|InvalidPaginationToken|[InvalidPaginationToken](#schemainvalidpaginationtoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResourceRecordSets

<a id="opIdListResourceRecordSets"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/hostedzone/string/rrset \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/hostedzone/{Id}/rrset`

<p>Lists the resource record sets in a specified hosted zone.</p> <p> <code>ListResourceRecordSets</code> returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p> <p> <b>Sort order</b> </p> <p> <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before <code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! " # $ % &amp; ' ( ) * + , -</code> </p> <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p> <p> <b>Specifying where to start listing records</b> </p> <p>You can use the name and type elements to specify the resource record set that the list begins with:</p> <dl> <dt>If you do not specify Name or Type</dt> <dd> <p>The results begin with the first resource record set that the hosted zone contains.</p> </dd> <dt>If you specify Name but not Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>.</p> </dd> <dt>If you specify Type but not Name</dt> <dd> <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p> </dd> <dt>If you specify both Name and Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p> </dd> </dl> <p> <b>Resource record sets that are PENDING</b> </p> <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>, and that are not yet available on all Route 53 DNS servers.</p> <p> <b>Changing resource record sets</b> </p> <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a <code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.</p> <p> <b>Displaying the next page of results</b> </p> <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code> is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>, and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>

<h3 id="listresourcerecordsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the hosted zone that contains the resource record sets that you want to list.|
|name|query|string|false|The first name in the lexicographic ordering of resource record sets that you want to list. If the specified record name doesn't exist, the results begin with the first resource record set that has a name greater than the value of <code>name</code>.|
|type|query|string|false|<p>The type of resource record set to begin the record listing from.</p> <p>Valid values for basic resource record sets: <code>A</code> \| <code>AAAA</code> \| <code>CAA</code> \| <code>CNAME</code> \| <code>MX</code> \| <code>NAPTR</code> \| <code>NS</code> \| <code>PTR</code> \| <code>SOA</code> \| <code>SPF</code> \| <code>SRV</code> \| <code>TXT</code> </p> <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> \| <code>AAAA</code> \| <code>CAA</code> \| <code>CNAME</code> \| <code>MX</code> \| <code>NAPTR</code> \| <code>PTR</code> \| <code>SPF</code> \| <code>SRV</code> \| <code>TXT</code> </p> <p>Values for alias resource record sets: </p> <ul> <li> <p> <b>API Gateway custom regional API or edge-optimized API</b>: A</p> </li> <li> <p> <b>CloudFront distribution</b>: A or AAAA</p> </li> <li> <p> <b>Elastic Beanstalk environment that has a regionalized subdomain</b>: A</p> </li> <li> <p> <b>Elastic Load Balancing load balancer</b>: A \| AAAA</p> </li> <li> <p> <b>S3 bucket</b>: A</p> </li> <li> <p> <b>VPC interface VPC endpoint</b>: A</p> </li> <li> <p> <b>Another resource record set in this hosted zone:</b> The type of the resource record set that the alias references.</p> </li> </ul> <p>Constraint: Specifying <code>type</code> without specifying <code>name</code> returns an <code>InvalidInput</code> error.</p>|
|identifier|query|string|false| <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type, specify the value of <code>NextRecordIdentifier</code> from the previous response to get the next resource record set that has the current DNS name and type.|
|maxitems|query|string|false|(Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than <code>maxitems</code> resource record sets, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of the <code>NextRecordName</code> and <code>NextRecordType</code> elements in the response identify the first resource record set in the next group of <code>maxitems</code> resource record sets.|
|MaxItems|query|string|false|Pagination limit|
|StartRecordName|query|string|false|Pagination token|
|StartRecordType|query|string|false|Pagination token|
|StartRecordIdentifier|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|SOA|
|type|A|
|type|TXT|
|type|NS|
|type|CNAME|
|type|MX|
|type|NAPTR|
|type|PTR|
|type|SRV|
|type|SPF|
|type|AAAA|
|type|CAA|
|type|DS|

<h3 id="listresourcerecordsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResourceRecordSetsResponse](#schemalistresourcerecordsetsresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResources

<a id="opIdListTagsForResources"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/tags/healthcheck \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResourceIds":[{}]}'
```

`POST /2013-04-01/tags/{ResourceType}`

<p>Lists tags for up to 10 health checks or hosted zones.</p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management User Guide</i>.</p>

> Body parameter

```json
{
  "ResourceIds": [
    {}
  ]
}
```

<h3 id="listtagsforresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceType|path|string|true|<p>The type of the resources.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResourceIds|body|[object]|true|A complex type that contains the ResourceId element for each resource for which you want to get a list of tags.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ResourceType|healthcheck|
|ResourceType|hostedzone|

<h3 id="listtagsforresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourcesResponse](#schemalisttagsforresourcesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchHealthCheck|[NoSuchHealthCheck](#schemanosuchhealthcheck)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|483|483|PriorRequestNotComplete|[PriorRequestNotComplete](#schemapriorrequestnotcomplete)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficPolicies

<a id="opIdListTrafficPolicies"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicies \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicies`

<p>Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account. Policies are listed in the order that they were created in. </p> <p>For information about how of deleting a traffic policy affects the response from <code>ListTrafficPolicies</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>

<h3 id="listtrafficpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trafficpolicyid|query|string|false|<p>(Conditional) For your first request to <code>ListTrafficPolicies</code>, don't include the <code>TrafficPolicyIdMarker</code> parameter.</p> <p>If you have more traffic policies than the value of <code>MaxItems</code>, <code>ListTrafficPolicies</code> returns only the first <code>MaxItems</code> traffic policies. To get the next group of policies, submit another request to <code>ListTrafficPolicies</code>. For the value of <code>TrafficPolicyIdMarker</code>, specify the value of <code>TrafficPolicyIdMarker</code> that was returned in the previous response.</p>|
|maxitems|query|string|false|(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than <code>MaxItems</code> traffic policies, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy that Route 53 will return if you submit another request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listtrafficpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficPoliciesResponse](#schemalisttrafficpoliciesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficPolicyInstances

<a id="opIdListTrafficPolicyInstances"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstances \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicyinstances`

<p>Gets information about the traffic policy instances that you created by using the current Amazon Web Services account.</p> <note> <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>

<h3 id="listtrafficpolicyinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hostedzoneid|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>HostedZoneId</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|trafficpolicyinstancename|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|trafficpolicyinstancetype|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|maxitems|query|string|false|The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a <code>ListTrafficPolicyInstances</code> request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|trafficpolicyinstancetype|SOA|
|trafficpolicyinstancetype|A|
|trafficpolicyinstancetype|TXT|
|trafficpolicyinstancetype|NS|
|trafficpolicyinstancetype|CNAME|
|trafficpolicyinstancetype|MX|
|trafficpolicyinstancetype|NAPTR|
|trafficpolicyinstancetype|PTR|
|trafficpolicyinstancetype|SRV|
|trafficpolicyinstancetype|SPF|
|trafficpolicyinstancetype|AAAA|
|trafficpolicyinstancetype|CAA|
|trafficpolicyinstancetype|DS|

<h3 id="listtrafficpolicyinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficPolicyInstancesResponse](#schemalisttrafficpolicyinstancesresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficPolicyInstancesByHostedZone

<a id="opIdListTrafficPolicyInstancesByHostedZone"></a>

> Code samples

```bash
curl 'https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstances/hostedzone#id?id=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicyinstances/hostedzone#id`

<p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>

<h3 id="listtrafficpolicyinstancesbyhostedzone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The ID of the hosted zone that you want to list traffic policy instances for.|
|trafficpolicyinstancename|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|trafficpolicyinstancetype|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|maxitems|query|string|false|The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|trafficpolicyinstancetype|SOA|
|trafficpolicyinstancetype|A|
|trafficpolicyinstancetype|TXT|
|trafficpolicyinstancetype|NS|
|trafficpolicyinstancetype|CNAME|
|trafficpolicyinstancetype|MX|
|trafficpolicyinstancetype|NAPTR|
|trafficpolicyinstancetype|PTR|
|trafficpolicyinstancetype|SRV|
|trafficpolicyinstancetype|SPF|
|trafficpolicyinstancetype|AAAA|
|trafficpolicyinstancetype|CAA|
|trafficpolicyinstancetype|DS|

<h3 id="listtrafficpolicyinstancesbyhostedzone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficPolicyInstancesByHostedZoneResponse](#schemalisttrafficpolicyinstancesbyhostedzoneresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|
|482|482|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficPolicyInstancesByPolicy

<a id="opIdListTrafficPolicyInstancesByPolicy"></a>

> Code samples

```bash
curl 'https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicyinstances/trafficpolicy#id&version?id=string&version=1' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicyinstances/trafficpolicy#id&version`

<p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>

<h3 id="listtrafficpolicyinstancesbypolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|The ID of the traffic policy for which you want to list traffic policy instances.|
|version|query|integer|true|The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by <code>TrafficPolicyId</code>.|
|hostedzoneid|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request. </p> <p>For the value of <code>hostedzoneid</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|trafficpolicyinstancename|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|trafficpolicyinstancetype|query|string|false|<p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>|
|maxitems|query|string|false|The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|trafficpolicyinstancetype|SOA|
|trafficpolicyinstancetype|A|
|trafficpolicyinstancetype|TXT|
|trafficpolicyinstancetype|NS|
|trafficpolicyinstancetype|CNAME|
|trafficpolicyinstancetype|MX|
|trafficpolicyinstancetype|NAPTR|
|trafficpolicyinstancetype|PTR|
|trafficpolicyinstancetype|SRV|
|trafficpolicyinstancetype|SPF|
|trafficpolicyinstancetype|AAAA|
|trafficpolicyinstancetype|CAA|
|trafficpolicyinstancetype|DS|

<h3 id="listtrafficpolicyinstancesbypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficPolicyInstancesByPolicyResponse](#schemalisttrafficpolicyinstancesbypolicyresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicyInstance|[NoSuchTrafficPolicyInstance](#schemanosuchtrafficpolicyinstance)|
|482|482|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrafficPolicyVersions

<a id="opIdListTrafficPolicyVersions"></a>

> Code samples

```bash
curl https://route53.us-east-1.amazonaws.com/2013-04-01/trafficpolicies/string/versions \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/trafficpolicies/{Id}/versions`

<p>Gets information about all of the versions for a specified traffic policy.</p> <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>

<h3 id="listtrafficpolicyversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Specify the value of <code>Id</code> of the traffic policy for which you want to list all versions.|
|trafficpolicyversion|query|string|false|<p>For your first request to <code>ListTrafficPolicyVersions</code>, don't include the <code>TrafficPolicyVersionMarker</code> parameter.</p> <p>If you have more traffic policy versions than the value of <code>MaxItems</code>, <code>ListTrafficPolicyVersions</code> returns only the first group of <code>MaxItems</code> versions. To get more traffic policy versions, submit another <code>ListTrafficPolicyVersions</code> request. For the value of <code>TrafficPolicyVersionMarker</code>, specify the value of <code>TrafficPolicyVersionMarker</code> in the previous response.</p>|
|maxitems|query|string|false|The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than <code>MaxItems</code> versions, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of the <code>TrafficPolicyVersionMarker</code> element is the ID of the first version that Route 53 will return if you submit another request.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listtrafficpolicyversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrafficPolicyVersionsResponse](#schemalisttrafficpolicyversionsresponse)|
|480|480|InvalidInput|[InvalidInput](#schemainvalidinput)|
|481|481|NoSuchTrafficPolicy|[NoSuchTrafficPolicy](#schemanosuchtrafficpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestDNSAnswer

<a id="opIdTestDNSAnswer"></a>

> Code samples

```bash
curl 'https://route53.us-east-1.amazonaws.com/2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype?hostedzoneid=string&recordname=string&recordtype=SOA' \
  -H "Authorization: ${API_KEY}"
```

`GET /2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype`

<p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p> <p>This call only supports querying public hosted zones.</p> <note> <p>The <code>TestDnsAnswer </code> returns information similar to what you would expect from the answer section of the <code>dig</code> command. Therefore, if you query for the name servers of a subdomain that point to the parent name servers, those will not be returned.</p> </note>

<h3 id="testdnsanswer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hostedzoneid|query|string|true|The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.|
|recordname|query|string|true|The name of the resource record set that you want Amazon Route 53 to simulate a query for.|
|recordtype|query|string|true|The type of the resource record set.|
|resolverip|query|string|false|If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, <code>TestDnsAnswer</code> uses the IP address of a DNS resolver in the Amazon Web Services US East (N. Virginia) Region (<code>us-east-1</code>).|
|edns0clientsubnetip|query|string|false|If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, <code>192.0.2.44</code> or <code>2001:db8:85a3::8a2e:370:7334</code>.|
|edns0clientsubnetmask|query|string|false|<p>If you specify an IP address for <code>edns0clientsubnetip</code>, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify <code>192.0.2.44</code> for <code>edns0clientsubnetip</code> and <code>24</code> for <code>edns0clientsubnetmask</code>, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses.</p> <p>The range of valid values depends on whether <code>edns0clientsubnetip</code> is an IPv4 or an IPv6 address:</p> <ul> <li> <p> <b>IPv4</b>: Specify a value between 0 and 32</p> </li> <li> <p> <b>IPv6</b>: Specify a value between 0 and 128</p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|recordtype|SOA|
|recordtype|A|
|recordtype|TXT|
|recordtype|NS|
|recordtype|CNAME|
|recordtype|MX|
|recordtype|NAPTR|
|recordtype|PTR|
|recordtype|SRV|
|recordtype|SPF|
|recordtype|AAAA|
|recordtype|CAA|
|recordtype|DS|

<h3 id="testdnsanswer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestDNSAnswerResponse](#schematestdnsanswerresponse)|
|480|480|NoSuchHostedZone|[NoSuchHostedZone](#schemanosuchhostedzone)|
|481|481|InvalidInput|[InvalidInput](#schemainvalidinput)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ActivateKeySigningKeyResponse">ActivateKeySigningKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactivatekeysigningkeyresponse"></a>
<a id="schema_ActivateKeySigningKeyResponse"></a>
<a id="tocSactivatekeysigningkeyresponse"></a>
<a id="tocsactivatekeysigningkeyresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|

<h2 id="tocS_ConcurrentModification">ConcurrentModification</h2>
<!-- backwards compatibility -->
<a id="schemaconcurrentmodification"></a>
<a id="schema_ConcurrentModification"></a>
<a id="tocSconcurrentmodification"></a>
<a id="tocsconcurrentmodification"></a>

```json
null
```

<h2 id="tocS_NoSuchKeySigningKey">NoSuchKeySigningKey</h2>
<!-- backwards compatibility -->
<a id="schemanosuchkeysigningkey"></a>
<a id="schema_NoSuchKeySigningKey"></a>
<a id="tocSnosuchkeysigningkey"></a>
<a id="tocsnosuchkeysigningkey"></a>

```json
null
```

<h2 id="tocS_InvalidKeySigningKeyStatus">InvalidKeySigningKeyStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeysigningkeystatus"></a>
<a id="schema_InvalidKeySigningKeyStatus"></a>
<a id="tocSinvalidkeysigningkeystatus"></a>
<a id="tocsinvalidkeysigningkeystatus"></a>

```json
null
```

<h2 id="tocS_InvalidSigningStatus">InvalidSigningStatus</h2>
<!-- backwards compatibility -->
<a id="schemainvalidsigningstatus"></a>
<a id="schema_InvalidSigningStatus"></a>
<a id="tocSinvalidsigningstatus"></a>
<a id="tocsinvalidsigningstatus"></a>

```json
null
```

<h2 id="tocS_InvalidKMSArn">InvalidKMSArn</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkmsarn"></a>
<a id="schema_InvalidKMSArn"></a>
<a id="tocSinvalidkmsarn"></a>
<a id="tocsinvalidkmsarn"></a>

```json
null
```

<h2 id="tocS_InvalidInput">InvalidInput</h2>
<!-- backwards compatibility -->
<a id="schemainvalidinput"></a>
<a id="schema_InvalidInput"></a>
<a id="tocSinvalidinput"></a>
<a id="tocsinvalidinput"></a>

```json
null
```

<h2 id="tocS_AssociateVPCWithHostedZoneResponse">AssociateVPCWithHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatevpcwithhostedzoneresponse"></a>
<a id="schema_AssociateVPCWithHostedZoneResponse"></a>
<a id="tocSassociatevpcwithhostedzoneresponse"></a>
<a id="tocsassociatevpcwithhostedzoneresponse"></a>

```json
{
  "ChangeInfo": {
    "Comment": "",
    "Id": "/change/C3HC6WDB2UANE2",
    "Status": "INSYNC",
    "SubmittedAt": "2017-01-31T01:36:41.958Z"
  }
}
```

A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|object|true|none|none|

<h2 id="tocS_VPCRegion">VPCRegion</h2>
<!-- backwards compatibility -->
<a id="schemavpcregion"></a>
<a id="schema_VPCRegion"></a>
<a id="tocSvpcregion"></a>
<a id="tocsvpcregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_VPCId">VPCId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VPCId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

(Private hosted zones only) The ID of an Amazon VPC.

<h2 id="tocS_NoSuchHostedZone">NoSuchHostedZone</h2>
<!-- backwards compatibility -->
<a id="schemanosuchhostedzone"></a>
<a id="schema_NoSuchHostedZone"></a>
<a id="tocSnosuchhostedzone"></a>
<a id="tocsnosuchhostedzone"></a>

```json
null
```

<h2 id="tocS_NotAuthorizedException">NotAuthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemanotauthorizedexception"></a>
<a id="schema_NotAuthorizedException"></a>
<a id="tocSnotauthorizedexception"></a>
<a id="tocsnotauthorizedexception"></a>

```json
null
```

<h2 id="tocS_InvalidVPCId">InvalidVPCId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidvpcid"></a>
<a id="schema_InvalidVPCId"></a>
<a id="tocSinvalidvpcid"></a>
<a id="tocsinvalidvpcid"></a>

```json
null
```

<h2 id="tocS_PublicZoneVPCAssociation">PublicZoneVPCAssociation</h2>
<!-- backwards compatibility -->
<a id="schemapubliczonevpcassociation"></a>
<a id="schema_PublicZoneVPCAssociation"></a>
<a id="tocSpubliczonevpcassociation"></a>
<a id="tocspubliczonevpcassociation"></a>

```json
null
```

<h2 id="tocS_ConflictingDomainExists">ConflictingDomainExists</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingdomainexists"></a>
<a id="schema_ConflictingDomainExists"></a>
<a id="tocSconflictingdomainexists"></a>
<a id="tocsconflictingdomainexists"></a>

```json
null
```

<h2 id="tocS_LimitsExceeded">LimitsExceeded</h2>
<!-- backwards compatibility -->
<a id="schemalimitsexceeded"></a>
<a id="schema_LimitsExceeded"></a>
<a id="tocSlimitsexceeded"></a>
<a id="tocslimitsexceeded"></a>

```json
null
```

<h2 id="tocS_PriorRequestNotComplete">PriorRequestNotComplete</h2>
<!-- backwards compatibility -->
<a id="schemapriorrequestnotcomplete"></a>
<a id="schema_PriorRequestNotComplete"></a>
<a id="tocSpriorrequestnotcomplete"></a>
<a id="tocspriorrequestnotcomplete"></a>

```json
null
```

<h2 id="tocS_ChangeCidrCollectionResponse">ChangeCidrCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemachangecidrcollectionresponse"></a>
<a id="schema_ChangeCidrCollectionResponse"></a>
<a id="tocSchangecidrcollectionresponse"></a>
<a id="tocschangecidrcollectionresponse"></a>

```json
{
  "Id": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|

<h2 id="tocS_CidrCollectionChange">CidrCollectionChange</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectionchange"></a>
<a id="schema_CidrCollectionChange"></a>
<a id="tocScidrcollectionchange"></a>
<a id="tocscidrcollectionchange"></a>

```json
{
  "LocationName": {},
  "Action": {},
  "CidrList": {}
}
```

A complex type that contains information about the CIDR collection change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationName|object|true|none|none|
|Action|object|true|none|none|
|CidrList|object|true|none|none|

<h2 id="tocS_NoSuchCidrCollectionException">NoSuchCidrCollectionException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcidrcollectionexception"></a>
<a id="schema_NoSuchCidrCollectionException"></a>
<a id="tocSnosuchcidrcollectionexception"></a>
<a id="tocsnosuchcidrcollectionexception"></a>

```json
null
```

<h2 id="tocS_CidrCollectionVersionMismatchException">CidrCollectionVersionMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectionversionmismatchexception"></a>
<a id="schema_CidrCollectionVersionMismatchException"></a>
<a id="tocScidrcollectionversionmismatchexception"></a>
<a id="tocscidrcollectionversionmismatchexception"></a>

```json
null
```

<h2 id="tocS_CidrBlockInUseException">CidrBlockInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacidrblockinuseexception"></a>
<a id="schema_CidrBlockInUseException"></a>
<a id="tocScidrblockinuseexception"></a>
<a id="tocscidrblockinuseexception"></a>

```json
null
```

<h2 id="tocS_ChangeResourceRecordSetsResponse">ChangeResourceRecordSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemachangeresourcerecordsetsresponse"></a>
<a id="schema_ChangeResourceRecordSetsResponse"></a>
<a id="tocSchangeresourcerecordsetsresponse"></a>
<a id="tocschangeresourcerecordsetsresponse"></a>

```json
{
  "ChangeInfo": {
    "Comment": "Geolocation alias configuration for example.com",
    "Id": "/change/C2682N5HXP0BZ4",
    "Status": "PENDING",
    "SubmittedAt": "2017-02-10T01:36:41.958Z"
  }
}
```

A complex type containing the response for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|object|true|none|none|

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

```json
"string"
```

<h2 id="tocS_Changes">Changes</h2>
<!-- backwards compatibility -->
<a id="schemachanges"></a>
<a id="schema_Changes"></a>
<a id="tocSchanges"></a>
<a id="tocschanges"></a>

```json
[
  {
    "Action": {},
    "ResourceRecordSet": {
      "Name": {},
      "Type": {},
      "SetIdentifier": {},
      "Weight": {},
      "Region": {},
      "GeoLocation": {
        "ContinentCode": {},
        "CountryCode": {},
        "SubdivisionCode": {}
      },
      "Failover": {},
      "MultiValueAnswer": {},
      "TTL": {},
      "ResourceRecords": {},
      "AliasTarget": {
        "HostedZoneId": {},
        "DNSName": {},
        "EvaluateTargetHealth": {}
      },
      "HealthCheckId": {},
      "TrafficPolicyInstanceId": {},
      "CidrRoutingConfig": {
        "CollectionId": {},
        "LocationName": {}
      }
    }
  }
]
```

<h2 id="tocS_NoSuchHealthCheck">NoSuchHealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemanosuchhealthcheck"></a>
<a id="schema_NoSuchHealthCheck"></a>
<a id="tocSnosuchhealthcheck"></a>
<a id="tocsnosuchhealthcheck"></a>

```json
null
```

<h2 id="tocS_InvalidChangeBatch">InvalidChangeBatch</h2>
<!-- backwards compatibility -->
<a id="schemainvalidchangebatch"></a>
<a id="schema_InvalidChangeBatch"></a>
<a id="tocSinvalidchangebatch"></a>
<a id="tocsinvalidchangebatch"></a>

```json
null
```

<h2 id="tocS_ChangeTagsForResourceResponse">ChangeTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemachangetagsforresourceresponse"></a>
<a id="schema_ChangeTagsForResourceResponse"></a>
<a id="tocSchangetagsforresourceresponse"></a>
<a id="tocschangetagsforresourceresponse"></a>

```json
{}
```

Empty response for the request.

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

A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_CreateCidrCollectionResponse">CreateCidrCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecidrcollectionresponse"></a>
<a id="schema_CreateCidrCollectionResponse"></a>
<a id="tocScreatecidrcollectionresponse"></a>
<a id="tocscreatecidrcollectionresponse"></a>

```json
{
  "Collection": {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Version": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Collection|object|false|none|none|

<h2 id="tocS_CidrCollectionAlreadyExistsException">CidrCollectionAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectionalreadyexistsexception"></a>
<a id="schema_CidrCollectionAlreadyExistsException"></a>
<a id="tocScidrcollectionalreadyexistsexception"></a>
<a id="tocscidrcollectionalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_CreateHealthCheckResponse">CreateHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehealthcheckresponse"></a>
<a id="schema_CreateHealthCheckResponse"></a>
<a id="tocScreatehealthcheckresponse"></a>
<a id="tocscreatehealthcheckresponse"></a>

```json
{
  "HealthCheck": {
    "Id": {},
    "CallerReference": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    },
    "HealthCheckConfig": {
      "IPAddress": {},
      "Port": {},
      "Type": {},
      "ResourcePath": {},
      "FullyQualifiedDomainName": {},
      "SearchString": {},
      "RequestInterval": {},
      "FailureThreshold": {},
      "MeasureLatency": {},
      "Inverted": {},
      "Disabled": {},
      "HealthThreshold": {},
      "ChildHealthChecks": {},
      "EnableSNI": {},
      "Regions": {},
      "AlarmIdentifier": {
        "Region": {},
        "Name": {}
      },
      "InsufficientDataHealthStatus": {},
      "RoutingControlArn": {}
    },
    "HealthCheckVersion": {},
    "CloudWatchAlarmConfiguration": {
      "EvaluationPeriods": {},
      "Threshold": {},
      "ComparisonOperator": {},
      "Period": {},
      "MetricName": {},
      "Namespace": {},
      "Statistic": {},
      "Dimensions": {}
    }
  }
}
```

A complex type containing the response information for the new health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheck|object|true|none|none|

<h2 id="tocS_IPAddress">IPAddress</h2>
<!-- backwards compatibility -->
<a id="schemaipaddress"></a>
<a id="schema_IPAddress"></a>
<a id="tocSipaddress"></a>
<a id="tocsipaddress"></a>

```json
"string"
```

<h2 id="tocS_Port">Port</h2>
<!-- backwards compatibility -->
<a id="schemaport"></a>
<a id="schema_Port"></a>
<a id="tocSport"></a>
<a id="tocsport"></a>

```json
1
```

<h2 id="tocS_HealthCheckType">HealthCheckType</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktype"></a>
<a id="schema_HealthCheckType"></a>
<a id="tocShealthchecktype"></a>
<a id="tocshealthchecktype"></a>

```json
"HTTP"
```

<h2 id="tocS_ResourcePath">ResourcePath</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepath"></a>
<a id="schema_ResourcePath"></a>
<a id="tocSresourcepath"></a>
<a id="tocsresourcepath"></a>

```json
"string"
```

<h2 id="tocS_FullyQualifiedDomainName">FullyQualifiedDomainName</h2>
<!-- backwards compatibility -->
<a id="schemafullyqualifieddomainname"></a>
<a id="schema_FullyQualifiedDomainName"></a>
<a id="tocSfullyqualifieddomainname"></a>
<a id="tocsfullyqualifieddomainname"></a>

```json
"string"
```

<h2 id="tocS_SearchString">SearchString</h2>
<!-- backwards compatibility -->
<a id="schemasearchstring"></a>
<a id="schema_SearchString"></a>
<a id="tocSsearchstring"></a>
<a id="tocssearchstring"></a>

```json
"string"
```

<h2 id="tocS_RequestInterval">RequestInterval</h2>
<!-- backwards compatibility -->
<a id="schemarequestinterval"></a>
<a id="schema_RequestInterval"></a>
<a id="tocSrequestinterval"></a>
<a id="tocsrequestinterval"></a>

```json
10
```

<h2 id="tocS_FailureThreshold">FailureThreshold</h2>
<!-- backwards compatibility -->
<a id="schemafailurethreshold"></a>
<a id="schema_FailureThreshold"></a>
<a id="tocSfailurethreshold"></a>
<a id="tocsfailurethreshold"></a>

```json
1
```

<h2 id="tocS_MeasureLatency">MeasureLatency</h2>
<!-- backwards compatibility -->
<a id="schemameasurelatency"></a>
<a id="schema_MeasureLatency"></a>
<a id="tocSmeasurelatency"></a>
<a id="tocsmeasurelatency"></a>

```json
true
```

<h2 id="tocS_Inverted">Inverted</h2>
<!-- backwards compatibility -->
<a id="schemainverted"></a>
<a id="schema_Inverted"></a>
<a id="tocSinverted"></a>
<a id="tocsinverted"></a>

```json
true
```

<h2 id="tocS_Disabled">Disabled</h2>
<!-- backwards compatibility -->
<a id="schemadisabled"></a>
<a id="schema_Disabled"></a>
<a id="tocSdisabled"></a>
<a id="tocsdisabled"></a>

```json
true
```

<h2 id="tocS_HealthThreshold">HealthThreshold</h2>
<!-- backwards compatibility -->
<a id="schemahealththreshold"></a>
<a id="schema_HealthThreshold"></a>
<a id="tocShealththreshold"></a>
<a id="tocshealththreshold"></a>

```json
0
```

<h2 id="tocS_ChildHealthCheckList">ChildHealthCheckList</h2>
<!-- backwards compatibility -->
<a id="schemachildhealthchecklist"></a>
<a id="schema_ChildHealthCheckList"></a>
<a id="tocSchildhealthchecklist"></a>
<a id="tocschildhealthchecklist"></a>

```json
[
  {}
]
```

<h2 id="tocS_EnableSNI">EnableSNI</h2>
<!-- backwards compatibility -->
<a id="schemaenablesni"></a>
<a id="schema_EnableSNI"></a>
<a id="tocSenablesni"></a>
<a id="tocsenablesni"></a>

```json
true
```

<h2 id="tocS_HealthCheckRegionList">HealthCheckRegionList</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckregionlist"></a>
<a id="schema_HealthCheckRegionList"></a>
<a id="tocShealthcheckregionlist"></a>
<a id="tocshealthcheckregionlist"></a>

```json
[
  {},
  {},
  {}
]
```

<h2 id="tocS_AlarmIdentifier">AlarmIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaalarmidentifier"></a>
<a id="schema_AlarmIdentifier"></a>
<a id="tocSalarmidentifier"></a>
<a id="tocsalarmidentifier"></a>

```json
{
  "Region": {},
  "Name": {}
}
```

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|true|none|none|
|Name|object|true|none|none|

<h2 id="tocS_InsufficientDataHealthStatus">InsufficientDataHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientdatahealthstatus"></a>
<a id="schema_InsufficientDataHealthStatus"></a>
<a id="tocSinsufficientdatahealthstatus"></a>
<a id="tocsinsufficientdatahealthstatus"></a>

```json
"Healthy"
```

<h2 id="tocS_RoutingControlArn">RoutingControlArn</h2>
<!-- backwards compatibility -->
<a id="schemaroutingcontrolarn"></a>
<a id="schema_RoutingControlArn"></a>
<a id="tocSroutingcontrolarn"></a>
<a id="tocsroutingcontrolarn"></a>

```json
"string"
```

<h2 id="tocS_TooManyHealthChecks">TooManyHealthChecks</h2>
<!-- backwards compatibility -->
<a id="schematoomanyhealthchecks"></a>
<a id="schema_TooManyHealthChecks"></a>
<a id="tocStoomanyhealthchecks"></a>
<a id="tocstoomanyhealthchecks"></a>

```json
null
```

<h2 id="tocS_HealthCheckAlreadyExists">HealthCheckAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckalreadyexists"></a>
<a id="schema_HealthCheckAlreadyExists"></a>
<a id="tocShealthcheckalreadyexists"></a>
<a id="tocshealthcheckalreadyexists"></a>

```json
null
```

<h2 id="tocS_CreateHostedZoneResponse">CreateHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatehostedzoneresponse"></a>
<a id="schema_CreateHostedZoneResponse"></a>
<a id="tocScreatehostedzoneresponse"></a>
<a id="tocscreatehostedzoneresponse"></a>

```json
{
  "HostedZone": {
    "Id": {},
    "Name": {},
    "CallerReference": {},
    "Config": {
      "Comment": {},
      "PrivateZone": {}
    },
    "ResourceRecordSetCount": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    }
  },
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  },
  "DelegationSet": {
    "Id": {},
    "CallerReference": {},
    "NameServers": {}
  },
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

A complex type containing the response information for the hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZone|object|true|none|none|
|ChangeInfo|object|true|none|none|
|DelegationSet|object|true|none|none|
|VPC|object|false|none|none|

<h2 id="tocS_IsPrivateZone">IsPrivateZone</h2>
<!-- backwards compatibility -->
<a id="schemaisprivatezone"></a>
<a id="schema_IsPrivateZone"></a>
<a id="tocSisprivatezone"></a>
<a id="tocsisprivatezone"></a>

```json
true
```

<h2 id="tocS_InvalidDomainName">InvalidDomainName</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddomainname"></a>
<a id="schema_InvalidDomainName"></a>
<a id="tocSinvaliddomainname"></a>
<a id="tocsinvaliddomainname"></a>

```json
null
```

<h2 id="tocS_HostedZoneAlreadyExists">HostedZoneAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonealreadyexists"></a>
<a id="schema_HostedZoneAlreadyExists"></a>
<a id="tocShostedzonealreadyexists"></a>
<a id="tocshostedzonealreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyHostedZones">TooManyHostedZones</h2>
<!-- backwards compatibility -->
<a id="schematoomanyhostedzones"></a>
<a id="schema_TooManyHostedZones"></a>
<a id="tocStoomanyhostedzones"></a>
<a id="tocstoomanyhostedzones"></a>

```json
null
```

<h2 id="tocS_DelegationSetNotAvailable">DelegationSetNotAvailable</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetnotavailable"></a>
<a id="schema_DelegationSetNotAvailable"></a>
<a id="tocSdelegationsetnotavailable"></a>
<a id="tocsdelegationsetnotavailable"></a>

```json
null
```

<h2 id="tocS_NoSuchDelegationSet">NoSuchDelegationSet</h2>
<!-- backwards compatibility -->
<a id="schemanosuchdelegationset"></a>
<a id="schema_NoSuchDelegationSet"></a>
<a id="tocSnosuchdelegationset"></a>
<a id="tocsnosuchdelegationset"></a>

```json
null
```

<h2 id="tocS_DelegationSetNotReusable">DelegationSetNotReusable</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetnotreusable"></a>
<a id="schema_DelegationSetNotReusable"></a>
<a id="tocSdelegationsetnotreusable"></a>
<a id="tocsdelegationsetnotreusable"></a>

```json
null
```

<h2 id="tocS_CreateKeySigningKeyResponse">CreateKeySigningKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeysigningkeyresponse"></a>
<a id="schema_CreateKeySigningKeyResponse"></a>
<a id="tocScreatekeysigningkeyresponse"></a>
<a id="tocscreatekeysigningkeyresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  },
  "KeySigningKey": {
    "Name": {},
    "KmsArn": {},
    "Flag": {},
    "SigningAlgorithmMnemonic": {},
    "SigningAlgorithmType": {},
    "DigestAlgorithmMnemonic": {},
    "DigestAlgorithmType": {},
    "KeyTag": {},
    "DigestValue": {},
    "PublicKey": {},
    "DSRecord": {},
    "DNSKEYRecord": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedDate": {},
    "LastModifiedDate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|
|KeySigningKey|object|true|none|none|

<h2 id="tocS_InvalidArgument">InvalidArgument</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargument"></a>
<a id="schema_InvalidArgument"></a>
<a id="tocSinvalidargument"></a>
<a id="tocsinvalidargument"></a>

```json
null
```

<h2 id="tocS_InvalidKeySigningKeyName">InvalidKeySigningKeyName</h2>
<!-- backwards compatibility -->
<a id="schemainvalidkeysigningkeyname"></a>
<a id="schema_InvalidKeySigningKeyName"></a>
<a id="tocSinvalidkeysigningkeyname"></a>
<a id="tocsinvalidkeysigningkeyname"></a>

```json
null
```

<h2 id="tocS_KeySigningKeyAlreadyExists">KeySigningKeyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkeyalreadyexists"></a>
<a id="schema_KeySigningKeyAlreadyExists"></a>
<a id="tocSkeysigningkeyalreadyexists"></a>
<a id="tocskeysigningkeyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyKeySigningKeys">TooManyKeySigningKeys</h2>
<!-- backwards compatibility -->
<a id="schematoomanykeysigningkeys"></a>
<a id="schema_TooManyKeySigningKeys"></a>
<a id="tocStoomanykeysigningkeys"></a>
<a id="tocstoomanykeysigningkeys"></a>

```json
null
```

<h2 id="tocS_CreateQueryLoggingConfigResponse">CreateQueryLoggingConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeryloggingconfigresponse"></a>
<a id="schema_CreateQueryLoggingConfigResponse"></a>
<a id="tocScreatequeryloggingconfigresponse"></a>
<a id="tocscreatequeryloggingconfigresponse"></a>

```json
{
  "QueryLoggingConfig": {
    "Id": {},
    "HostedZoneId": {},
    "CloudWatchLogsLogGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryLoggingConfig|object|true|none|none|

<h2 id="tocS_NoSuchCloudWatchLogsLogGroup">NoSuchCloudWatchLogsLogGroup</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcloudwatchlogsloggroup"></a>
<a id="schema_NoSuchCloudWatchLogsLogGroup"></a>
<a id="tocSnosuchcloudwatchlogsloggroup"></a>
<a id="tocsnosuchcloudwatchlogsloggroup"></a>

```json
null
```

<h2 id="tocS_QueryLoggingConfigAlreadyExists">QueryLoggingConfigAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaqueryloggingconfigalreadyexists"></a>
<a id="schema_QueryLoggingConfigAlreadyExists"></a>
<a id="tocSqueryloggingconfigalreadyexists"></a>
<a id="tocsqueryloggingconfigalreadyexists"></a>

```json
null
```

<h2 id="tocS_InsufficientCloudWatchLogsResourcePolicy">InsufficientCloudWatchLogsResourcePolicy</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientcloudwatchlogsresourcepolicy"></a>
<a id="schema_InsufficientCloudWatchLogsResourcePolicy"></a>
<a id="tocSinsufficientcloudwatchlogsresourcepolicy"></a>
<a id="tocsinsufficientcloudwatchlogsresourcepolicy"></a>

```json
null
```

<h2 id="tocS_CreateReusableDelegationSetResponse">CreateReusableDelegationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatereusabledelegationsetresponse"></a>
<a id="schema_CreateReusableDelegationSetResponse"></a>
<a id="tocScreatereusabledelegationsetresponse"></a>
<a id="tocscreatereusabledelegationsetresponse"></a>

```json
{
  "DelegationSet": {
    "Id": {},
    "CallerReference": {},
    "NameServers": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegationSet|object|true|none|none|

<h2 id="tocS_DelegationSetAlreadyCreated">DelegationSetAlreadyCreated</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetalreadycreated"></a>
<a id="schema_DelegationSetAlreadyCreated"></a>
<a id="tocSdelegationsetalreadycreated"></a>
<a id="tocsdelegationsetalreadycreated"></a>

```json
null
```

<h2 id="tocS_HostedZoneNotFound">HostedZoneNotFound</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonenotfound"></a>
<a id="schema_HostedZoneNotFound"></a>
<a id="tocShostedzonenotfound"></a>
<a id="tocshostedzonenotfound"></a>

```json
null
```

<h2 id="tocS_DelegationSetAlreadyReusable">DelegationSetAlreadyReusable</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetalreadyreusable"></a>
<a id="schema_DelegationSetAlreadyReusable"></a>
<a id="tocSdelegationsetalreadyreusable"></a>
<a id="tocsdelegationsetalreadyreusable"></a>

```json
null
```

<h2 id="tocS_CreateTrafficPolicyResponse">CreateTrafficPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyresponse"></a>
<a id="schema_CreateTrafficPolicyResponse"></a>
<a id="tocScreatetrafficpolicyresponse"></a>
<a id="tocscreatetrafficpolicyresponse"></a>

```json
{
  "TrafficPolicy": {
    "Id": {},
    "Version": {},
    "Name": {},
    "Type": {},
    "Document": {},
    "Comment": {}
  }
}
```

A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicy|object|true|none|none|

<h2 id="tocS_TooManyTrafficPolicies">TooManyTrafficPolicies</h2>
<!-- backwards compatibility -->
<a id="schematoomanytrafficpolicies"></a>
<a id="schema_TooManyTrafficPolicies"></a>
<a id="tocStoomanytrafficpolicies"></a>
<a id="tocstoomanytrafficpolicies"></a>

```json
null
```

<h2 id="tocS_TrafficPolicyAlreadyExists">TrafficPolicyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyalreadyexists"></a>
<a id="schema_TrafficPolicyAlreadyExists"></a>
<a id="tocStrafficpolicyalreadyexists"></a>
<a id="tocstrafficpolicyalreadyexists"></a>

```json
null
```

<h2 id="tocS_InvalidTrafficPolicyDocument">InvalidTrafficPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtrafficpolicydocument"></a>
<a id="schema_InvalidTrafficPolicyDocument"></a>
<a id="tocSinvalidtrafficpolicydocument"></a>
<a id="tocsinvalidtrafficpolicydocument"></a>

```json
null
```

<h2 id="tocS_CreateTrafficPolicyInstanceResponse">CreateTrafficPolicyInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyinstanceresponse"></a>
<a id="schema_CreateTrafficPolicyInstanceResponse"></a>
<a id="tocScreatetrafficpolicyinstanceresponse"></a>
<a id="tocscreatetrafficpolicyinstanceresponse"></a>

```json
{
  "TrafficPolicyInstance": {
    "Id": {},
    "HostedZoneId": {},
    "Name": {},
    "TTL": {},
    "State": {},
    "Message": {},
    "TrafficPolicyId": {},
    "TrafficPolicyVersion": {},
    "TrafficPolicyType": {}
  }
}
```

A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstance|object|true|none|none|

<h2 id="tocS_TooManyTrafficPolicyInstances">TooManyTrafficPolicyInstances</h2>
<!-- backwards compatibility -->
<a id="schematoomanytrafficpolicyinstances"></a>
<a id="schema_TooManyTrafficPolicyInstances"></a>
<a id="tocStoomanytrafficpolicyinstances"></a>
<a id="tocstoomanytrafficpolicyinstances"></a>

```json
null
```

<h2 id="tocS_NoSuchTrafficPolicy">NoSuchTrafficPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanosuchtrafficpolicy"></a>
<a id="schema_NoSuchTrafficPolicy"></a>
<a id="tocSnosuchtrafficpolicy"></a>
<a id="tocsnosuchtrafficpolicy"></a>

```json
null
```

<h2 id="tocS_TrafficPolicyInstanceAlreadyExists">TrafficPolicyInstanceAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstancealreadyexists"></a>
<a id="schema_TrafficPolicyInstanceAlreadyExists"></a>
<a id="tocStrafficpolicyinstancealreadyexists"></a>
<a id="tocstrafficpolicyinstancealreadyexists"></a>

```json
null
```

<h2 id="tocS_CreateTrafficPolicyVersionResponse">CreateTrafficPolicyVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyversionresponse"></a>
<a id="schema_CreateTrafficPolicyVersionResponse"></a>
<a id="tocScreatetrafficpolicyversionresponse"></a>
<a id="tocscreatetrafficpolicyversionresponse"></a>

```json
{
  "TrafficPolicy": {
    "Id": {},
    "Version": {},
    "Name": {},
    "Type": {},
    "Document": {},
    "Comment": {}
  }
}
```

A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicy|object|true|none|none|

<h2 id="tocS_TooManyTrafficPolicyVersionsForCurrentPolicy">TooManyTrafficPolicyVersionsForCurrentPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanytrafficpolicyversionsforcurrentpolicy"></a>
<a id="schema_TooManyTrafficPolicyVersionsForCurrentPolicy"></a>
<a id="tocStoomanytrafficpolicyversionsforcurrentpolicy"></a>
<a id="tocstoomanytrafficpolicyversionsforcurrentpolicy"></a>

```json
null
```

<h2 id="tocS_CreateVPCAssociationAuthorizationResponse">CreateVPCAssociationAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcassociationauthorizationresponse"></a>
<a id="schema_CreateVPCAssociationAuthorizationResponse"></a>
<a id="tocScreatevpcassociationauthorizationresponse"></a>
<a id="tocscreatevpcassociationauthorizationresponse"></a>

```json
{
  "HostedZoneId": {},
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|VPC|object|true|none|none|

<h2 id="tocS_TooManyVPCAssociationAuthorizations">TooManyVPCAssociationAuthorizations</h2>
<!-- backwards compatibility -->
<a id="schematoomanyvpcassociationauthorizations"></a>
<a id="schema_TooManyVPCAssociationAuthorizations"></a>
<a id="tocStoomanyvpcassociationauthorizations"></a>
<a id="tocstoomanyvpcassociationauthorizations"></a>

```json
null
```

<h2 id="tocS_DeactivateKeySigningKeyResponse">DeactivateKeySigningKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatekeysigningkeyresponse"></a>
<a id="schema_DeactivateKeySigningKeyResponse"></a>
<a id="tocSdeactivatekeysigningkeyresponse"></a>
<a id="tocsdeactivatekeysigningkeyresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|

<h2 id="tocS_KeySigningKeyInUse">KeySigningKeyInUse</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkeyinuse"></a>
<a id="schema_KeySigningKeyInUse"></a>
<a id="tocSkeysigningkeyinuse"></a>
<a id="tocskeysigningkeyinuse"></a>

```json
null
```

<h2 id="tocS_KeySigningKeyInParentDSRecord">KeySigningKeyInParentDSRecord</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkeyinparentdsrecord"></a>
<a id="schema_KeySigningKeyInParentDSRecord"></a>
<a id="tocSkeysigningkeyinparentdsrecord"></a>
<a id="tocskeysigningkeyinparentdsrecord"></a>

```json
null
```

<h2 id="tocS_DeleteCidrCollectionResponse">DeleteCidrCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecidrcollectionresponse"></a>
<a id="schema_DeleteCidrCollectionResponse"></a>
<a id="tocSdeletecidrcollectionresponse"></a>
<a id="tocsdeletecidrcollectionresponse"></a>

```json
{}
```

<h2 id="tocS_CidrCollectionInUseException">CidrCollectionInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectioninuseexception"></a>
<a id="schema_CidrCollectionInUseException"></a>
<a id="tocScidrcollectioninuseexception"></a>
<a id="tocscidrcollectioninuseexception"></a>

```json
null
```

<h2 id="tocS_DeleteHealthCheckResponse">DeleteHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehealthcheckresponse"></a>
<a id="schema_DeleteHealthCheckResponse"></a>
<a id="tocSdeletehealthcheckresponse"></a>
<a id="tocsdeletehealthcheckresponse"></a>

```json
{}
```

An empty element.

<h2 id="tocS_HealthCheckInUse">HealthCheckInUse</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckinuse"></a>
<a id="schema_HealthCheckInUse"></a>
<a id="tocShealthcheckinuse"></a>
<a id="tocshealthcheckinuse"></a>

```json
null
```

<h2 id="tocS_DeleteHostedZoneResponse">DeleteHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletehostedzoneresponse"></a>
<a id="schema_DeleteHostedZoneResponse"></a>
<a id="tocSdeletehostedzoneresponse"></a>
<a id="tocsdeletehostedzoneresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

A complex type that contains the response to a <code>DeleteHostedZone</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|object|true|none|none|

<h2 id="tocS_HostedZoneNotEmpty">HostedZoneNotEmpty</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonenotempty"></a>
<a id="schema_HostedZoneNotEmpty"></a>
<a id="tocShostedzonenotempty"></a>
<a id="tocshostedzonenotempty"></a>

```json
null
```

<h2 id="tocS_DeleteKeySigningKeyResponse">DeleteKeySigningKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeysigningkeyresponse"></a>
<a id="schema_DeleteKeySigningKeyResponse"></a>
<a id="tocSdeletekeysigningkeyresponse"></a>
<a id="tocsdeletekeysigningkeyresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|

<h2 id="tocS_DeleteQueryLoggingConfigResponse">DeleteQueryLoggingConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeryloggingconfigresponse"></a>
<a id="schema_DeleteQueryLoggingConfigResponse"></a>
<a id="tocSdeletequeryloggingconfigresponse"></a>
<a id="tocsdeletequeryloggingconfigresponse"></a>

```json
{}
```

<h2 id="tocS_NoSuchQueryLoggingConfig">NoSuchQueryLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemanosuchqueryloggingconfig"></a>
<a id="schema_NoSuchQueryLoggingConfig"></a>
<a id="tocSnosuchqueryloggingconfig"></a>
<a id="tocsnosuchqueryloggingconfig"></a>

```json
null
```

<h2 id="tocS_DeleteReusableDelegationSetResponse">DeleteReusableDelegationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletereusabledelegationsetresponse"></a>
<a id="schema_DeleteReusableDelegationSetResponse"></a>
<a id="tocSdeletereusabledelegationsetresponse"></a>
<a id="tocsdeletereusabledelegationsetresponse"></a>

```json
{}
```

An empty element.

<h2 id="tocS_DelegationSetInUse">DelegationSetInUse</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetinuse"></a>
<a id="schema_DelegationSetInUse"></a>
<a id="tocSdelegationsetinuse"></a>
<a id="tocsdelegationsetinuse"></a>

```json
null
```

<h2 id="tocS_DeleteTrafficPolicyResponse">DeleteTrafficPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficpolicyresponse"></a>
<a id="schema_DeleteTrafficPolicyResponse"></a>
<a id="tocSdeletetrafficpolicyresponse"></a>
<a id="tocsdeletetrafficpolicyresponse"></a>

```json
{}
```

An empty element.

<h2 id="tocS_TrafficPolicyInUse">TrafficPolicyInUse</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinuse"></a>
<a id="schema_TrafficPolicyInUse"></a>
<a id="tocStrafficpolicyinuse"></a>
<a id="tocstrafficpolicyinuse"></a>

```json
null
```

<h2 id="tocS_DeleteTrafficPolicyInstanceResponse">DeleteTrafficPolicyInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficpolicyinstanceresponse"></a>
<a id="schema_DeleteTrafficPolicyInstanceResponse"></a>
<a id="tocSdeletetrafficpolicyinstanceresponse"></a>
<a id="tocsdeletetrafficpolicyinstanceresponse"></a>

```json
{}
```

An empty element.

<h2 id="tocS_NoSuchTrafficPolicyInstance">NoSuchTrafficPolicyInstance</h2>
<!-- backwards compatibility -->
<a id="schemanosuchtrafficpolicyinstance"></a>
<a id="schema_NoSuchTrafficPolicyInstance"></a>
<a id="tocSnosuchtrafficpolicyinstance"></a>
<a id="tocsnosuchtrafficpolicyinstance"></a>

```json
null
```

<h2 id="tocS_DeleteVPCAssociationAuthorizationResponse">DeleteVPCAssociationAuthorizationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcassociationauthorizationresponse"></a>
<a id="schema_DeleteVPCAssociationAuthorizationResponse"></a>
<a id="tocSdeletevpcassociationauthorizationresponse"></a>
<a id="tocsdeletevpcassociationauthorizationresponse"></a>

```json
{}
```

Empty response for the request.

<h2 id="tocS_VPCAssociationAuthorizationNotFound">VPCAssociationAuthorizationNotFound</h2>
<!-- backwards compatibility -->
<a id="schemavpcassociationauthorizationnotfound"></a>
<a id="schema_VPCAssociationAuthorizationNotFound"></a>
<a id="tocSvpcassociationauthorizationnotfound"></a>
<a id="tocsvpcassociationauthorizationnotfound"></a>

```json
null
```

<h2 id="tocS_DisableHostedZoneDNSSECResponse">DisableHostedZoneDNSSECResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisablehostedzonednssecresponse"></a>
<a id="schema_DisableHostedZoneDNSSECResponse"></a>
<a id="tocSdisablehostedzonednssecresponse"></a>
<a id="tocsdisablehostedzonednssecresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|

<h2 id="tocS_DNSSECNotFound">DNSSECNotFound</h2>
<!-- backwards compatibility -->
<a id="schemadnssecnotfound"></a>
<a id="schema_DNSSECNotFound"></a>
<a id="tocSdnssecnotfound"></a>
<a id="tocsdnssecnotfound"></a>

```json
null
```

<h2 id="tocS_DisassociateVPCFromHostedZoneResponse">DisassociateVPCFromHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatevpcfromhostedzoneresponse"></a>
<a id="schema_DisassociateVPCFromHostedZoneResponse"></a>
<a id="tocSdisassociatevpcfromhostedzoneresponse"></a>
<a id="tocsdisassociatevpcfromhostedzoneresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

A complex type that contains the response information for the disassociate request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|object|true|none|none|

<h2 id="tocS_VPCAssociationNotFound">VPCAssociationNotFound</h2>
<!-- backwards compatibility -->
<a id="schemavpcassociationnotfound"></a>
<a id="schema_VPCAssociationNotFound"></a>
<a id="tocSvpcassociationnotfound"></a>
<a id="tocsvpcassociationnotfound"></a>

```json
null
```

<h2 id="tocS_LastVPCAssociation">LastVPCAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalastvpcassociation"></a>
<a id="schema_LastVPCAssociation"></a>
<a id="tocSlastvpcassociation"></a>
<a id="tocslastvpcassociation"></a>

```json
null
```

<h2 id="tocS_EnableHostedZoneDNSSECResponse">EnableHostedZoneDNSSECResponse</h2>
<!-- backwards compatibility -->
<a id="schemaenablehostedzonednssecresponse"></a>
<a id="schema_EnableHostedZoneDNSSECResponse"></a>
<a id="tocSenablehostedzonednssecresponse"></a>
<a id="tocsenablehostedzonednssecresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|[ChangeInfo](#schemachangeinfo)|true|none|A complex type that describes change information about changes made to your hosted zone.|

<h2 id="tocS_KeySigningKeyWithActiveStatusNotFound">KeySigningKeyWithActiveStatusNotFound</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkeywithactivestatusnotfound"></a>
<a id="schema_KeySigningKeyWithActiveStatusNotFound"></a>
<a id="tocSkeysigningkeywithactivestatusnotfound"></a>
<a id="tocskeysigningkeywithactivestatusnotfound"></a>

```json
null
```

<h2 id="tocS_HostedZonePartiallyDelegated">HostedZonePartiallyDelegated</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonepartiallydelegated"></a>
<a id="schema_HostedZonePartiallyDelegated"></a>
<a id="tocShostedzonepartiallydelegated"></a>
<a id="tocshostedzonepartiallydelegated"></a>

```json
null
```

<h2 id="tocS_GetAccountLimitResponse">GetAccountLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountlimitresponse"></a>
<a id="schema_GetAccountLimitResponse"></a>
<a id="tocSgetaccountlimitresponse"></a>
<a id="tocsgetaccountlimitresponse"></a>

```json
{
  "Limit": {
    "Type": {},
    "Value": {}
  },
  "Count": {}
}
```

A complex type that contains the requested limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|true|none|none|
|Count|object|true|none|none|

<h2 id="tocS_GetChangeResponse">GetChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetchangeresponse"></a>
<a id="schema_GetChangeResponse"></a>
<a id="tocSgetchangeresponse"></a>
<a id="tocsgetchangeresponse"></a>

```json
{
  "ChangeInfo": {
    "Id": {},
    "Status": {},
    "SubmittedAt": {},
    "Comment": {}
  }
}
```

A complex type that contains the <code>ChangeInfo</code> element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeInfo|object|true|none|none|

<h2 id="tocS_NoSuchChange">NoSuchChange</h2>
<!-- backwards compatibility -->
<a id="schemanosuchchange"></a>
<a id="schema_NoSuchChange"></a>
<a id="tocSnosuchchange"></a>
<a id="tocsnosuchchange"></a>

```json
null
```

<h2 id="tocS_GetCheckerIpRangesResponse">GetCheckerIpRangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcheckeriprangesresponse"></a>
<a id="schema_GetCheckerIpRangesResponse"></a>
<a id="tocSgetcheckeriprangesresponse"></a>
<a id="tocsgetcheckeriprangesresponse"></a>

```json
{
  "CheckerIpRanges": {}
}
```

A complex type that contains the <code>CheckerIpRanges</code> element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CheckerIpRanges|object|true|none|none|

<h2 id="tocS_GetDNSSECResponse">GetDNSSECResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdnssecresponse"></a>
<a id="schema_GetDNSSECResponse"></a>
<a id="tocSgetdnssecresponse"></a>
<a id="tocsgetdnssecresponse"></a>

```json
{
  "Status": {
    "ServeSignature": {},
    "StatusMessage": {}
  },
  "KeySigningKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|KeySigningKeys|object|true|none|none|

<h2 id="tocS_GetGeoLocationResponse">GetGeoLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgeolocationresponse"></a>
<a id="schema_GetGeoLocationResponse"></a>
<a id="tocSgetgeolocationresponse"></a>
<a id="tocsgetgeolocationresponse"></a>

```json
{
  "GeoLocationDetails": {
    "ContinentCode": {},
    "ContinentName": {},
    "CountryCode": {},
    "CountryName": {},
    "SubdivisionCode": {},
    "SubdivisionName": {}
  }
}
```

A complex type that contains the response information for the specified geolocation code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoLocationDetails|object|true|none|none|

<h2 id="tocS_NoSuchGeoLocation">NoSuchGeoLocation</h2>
<!-- backwards compatibility -->
<a id="schemanosuchgeolocation"></a>
<a id="schema_NoSuchGeoLocation"></a>
<a id="tocSnosuchgeolocation"></a>
<a id="tocsnosuchgeolocation"></a>

```json
null
```

<h2 id="tocS_GetHealthCheckResponse">GetHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckresponse"></a>
<a id="schema_GetHealthCheckResponse"></a>
<a id="tocSgethealthcheckresponse"></a>
<a id="tocsgethealthcheckresponse"></a>

```json
{
  "HealthCheck": {
    "Id": {},
    "CallerReference": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    },
    "HealthCheckConfig": {
      "IPAddress": {},
      "Port": {},
      "Type": {},
      "ResourcePath": {},
      "FullyQualifiedDomainName": {},
      "SearchString": {},
      "RequestInterval": {},
      "FailureThreshold": {},
      "MeasureLatency": {},
      "Inverted": {},
      "Disabled": {},
      "HealthThreshold": {},
      "ChildHealthChecks": {},
      "EnableSNI": {},
      "Regions": {},
      "AlarmIdentifier": {
        "Region": {},
        "Name": {}
      },
      "InsufficientDataHealthStatus": {},
      "RoutingControlArn": {}
    },
    "HealthCheckVersion": {},
    "CloudWatchAlarmConfiguration": {
      "EvaluationPeriods": {},
      "Threshold": {},
      "ComparisonOperator": {},
      "Period": {},
      "MetricName": {},
      "Namespace": {},
      "Statistic": {},
      "Dimensions": {}
    }
  }
}
```

A complex type that contains the response to a <code>GetHealthCheck</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheck|object|true|none|none|

<h2 id="tocS_IncompatibleVersion">IncompatibleVersion</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleversion"></a>
<a id="schema_IncompatibleVersion"></a>
<a id="tocSincompatibleversion"></a>
<a id="tocsincompatibleversion"></a>

```json
null
```

<h2 id="tocS_GetHealthCheckCountResponse">GetHealthCheckCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckcountresponse"></a>
<a id="schema_GetHealthCheckCountResponse"></a>
<a id="tocSgethealthcheckcountresponse"></a>
<a id="tocsgethealthcheckcountresponse"></a>

```json
{
  "HealthCheckCount": {}
}
```

A complex type that contains the response to a <code>GetHealthCheckCount</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheckCount|object|true|none|none|

<h2 id="tocS_GetHealthCheckLastFailureReasonResponse">GetHealthCheckLastFailureReasonResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethealthchecklastfailurereasonresponse"></a>
<a id="schema_GetHealthCheckLastFailureReasonResponse"></a>
<a id="tocSgethealthchecklastfailurereasonresponse"></a>
<a id="tocsgethealthchecklastfailurereasonresponse"></a>

```json
{
  "HealthCheckObservations": {}
}
```

A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheckObservations|object|true|none|none|

<h2 id="tocS_GetHealthCheckStatusResponse">GetHealthCheckStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckstatusresponse"></a>
<a id="schema_GetHealthCheckStatusResponse"></a>
<a id="tocSgethealthcheckstatusresponse"></a>
<a id="tocsgethealthcheckstatusresponse"></a>

```json
{
  "HealthCheckObservations": {}
}
```

A complex type that contains the response to a <code>GetHealthCheck</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheckObservations|object|true|none|none|

<h2 id="tocS_GetHostedZoneResponse">GetHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzoneresponse"></a>
<a id="schema_GetHostedZoneResponse"></a>
<a id="tocSgethostedzoneresponse"></a>
<a id="tocsgethostedzoneresponse"></a>

```json
{
  "DelegationSet": {
    "NameServers": [
      "ns-2048.awsdns-64.com",
      "ns-2049.awsdns-65.net",
      "ns-2050.awsdns-66.org",
      "ns-2051.awsdns-67.co.uk"
    ]
  },
  "HostedZone": {
    "CallerReference": "C741617D-04E4-F8DE-B9D7-0D150FC61C2E",
    "Config": {
      "PrivateZone": false
    },
    "Id": "/hostedzone/Z3M3LMPEXAMPLE",
    "Name": "myawsbucket.com.",
    "ResourceRecordSetCount": 8
  }
}
```

A complex type that contain the response to a <code>GetHostedZone</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZone|object|true|none|none|
|DelegationSet|object|false|none|none|
|VPCs|object|false|none|none|

<h2 id="tocS_GetHostedZoneCountResponse">GetHostedZoneCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzonecountresponse"></a>
<a id="schema_GetHostedZoneCountResponse"></a>
<a id="tocSgethostedzonecountresponse"></a>
<a id="tocsgethostedzonecountresponse"></a>

```json
{
  "HostedZoneCount": {}
}
```

A complex type that contains the response to a <code>GetHostedZoneCount</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneCount|object|true|none|none|

<h2 id="tocS_GetHostedZoneLimitResponse">GetHostedZoneLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzonelimitresponse"></a>
<a id="schema_GetHostedZoneLimitResponse"></a>
<a id="tocSgethostedzonelimitresponse"></a>
<a id="tocsgethostedzonelimitresponse"></a>

```json
{
  "Limit": {
    "Type": {},
    "Value": {}
  },
  "Count": {}
}
```

A complex type that contains the requested limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|true|none|none|
|Count|object|true|none|none|

<h2 id="tocS_HostedZoneNotPrivate">HostedZoneNotPrivate</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonenotprivate"></a>
<a id="schema_HostedZoneNotPrivate"></a>
<a id="tocShostedzonenotprivate"></a>
<a id="tocshostedzonenotprivate"></a>

```json
null
```

<h2 id="tocS_GetQueryLoggingConfigResponse">GetQueryLoggingConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryloggingconfigresponse"></a>
<a id="schema_GetQueryLoggingConfigResponse"></a>
<a id="tocSgetqueryloggingconfigresponse"></a>
<a id="tocsgetqueryloggingconfigresponse"></a>

```json
{
  "QueryLoggingConfig": {
    "Id": {},
    "HostedZoneId": {},
    "CloudWatchLogsLogGroupArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryLoggingConfig|object|true|none|none|

<h2 id="tocS_GetReusableDelegationSetResponse">GetReusableDelegationSetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreusabledelegationsetresponse"></a>
<a id="schema_GetReusableDelegationSetResponse"></a>
<a id="tocSgetreusabledelegationsetresponse"></a>
<a id="tocsgetreusabledelegationsetresponse"></a>

```json
{
  "DelegationSet": {
    "Id": {},
    "CallerReference": {},
    "NameServers": {}
  }
}
```

A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegationSet|object|true|none|none|

<h2 id="tocS_GetReusableDelegationSetLimitResponse">GetReusableDelegationSetLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreusabledelegationsetlimitresponse"></a>
<a id="schema_GetReusableDelegationSetLimitResponse"></a>
<a id="tocSgetreusabledelegationsetlimitresponse"></a>
<a id="tocsgetreusabledelegationsetlimitresponse"></a>

```json
{
  "Limit": {
    "Type": {},
    "Value": {}
  },
  "Count": {}
}
```

A complex type that contains the requested limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Limit|object|true|none|none|
|Count|object|true|none|none|

<h2 id="tocS_GetTrafficPolicyResponse">GetTrafficPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyresponse"></a>
<a id="schema_GetTrafficPolicyResponse"></a>
<a id="tocSgettrafficpolicyresponse"></a>
<a id="tocsgettrafficpolicyresponse"></a>

```json
{
  "TrafficPolicy": {
    "Id": {},
    "Version": {},
    "Name": {},
    "Type": {},
    "Document": {},
    "Comment": {}
  }
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicy|object|true|none|none|

<h2 id="tocS_GetTrafficPolicyInstanceResponse">GetTrafficPolicyInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyinstanceresponse"></a>
<a id="schema_GetTrafficPolicyInstanceResponse"></a>
<a id="tocSgettrafficpolicyinstanceresponse"></a>
<a id="tocsgettrafficpolicyinstanceresponse"></a>

```json
{
  "TrafficPolicyInstance": {
    "Id": {},
    "HostedZoneId": {},
    "Name": {},
    "TTL": {},
    "State": {},
    "Message": {},
    "TrafficPolicyId": {},
    "TrafficPolicyVersion": {},
    "TrafficPolicyType": {}
  }
}
```

A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstance|object|true|none|none|

<h2 id="tocS_GetTrafficPolicyInstanceCountResponse">GetTrafficPolicyInstanceCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyinstancecountresponse"></a>
<a id="schema_GetTrafficPolicyInstanceCountResponse"></a>
<a id="tocSgettrafficpolicyinstancecountresponse"></a>
<a id="tocsgettrafficpolicyinstancecountresponse"></a>

```json
{
  "TrafficPolicyInstanceCount": {}
}
```

A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstanceCount|object|true|none|none|

<h2 id="tocS_ListCidrBlocksResponse">ListCidrBlocksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrblocksresponse"></a>
<a id="schema_ListCidrBlocksResponse"></a>
<a id="tocSlistcidrblocksresponse"></a>
<a id="tocslistcidrblocksresponse"></a>

```json
{
  "NextToken": {},
  "CidrBlocks": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CidrBlocks|object|false|none|none|

<h2 id="tocS_NoSuchCidrLocationException">NoSuchCidrLocationException</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcidrlocationexception"></a>
<a id="schema_NoSuchCidrLocationException"></a>
<a id="tocSnosuchcidrlocationexception"></a>
<a id="tocsnosuchcidrlocationexception"></a>

```json
null
```

<h2 id="tocS_ListCidrCollectionsResponse">ListCidrCollectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrcollectionsresponse"></a>
<a id="schema_ListCidrCollectionsResponse"></a>
<a id="tocSlistcidrcollectionsresponse"></a>
<a id="tocslistcidrcollectionsresponse"></a>

```json
{
  "NextToken": {},
  "CidrCollections": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CidrCollections|object|false|none|none|

<h2 id="tocS_ListCidrLocationsResponse">ListCidrLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrlocationsresponse"></a>
<a id="schema_ListCidrLocationsResponse"></a>
<a id="tocSlistcidrlocationsresponse"></a>
<a id="tocslistcidrlocationsresponse"></a>

```json
{
  "NextToken": {},
  "CidrLocations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|CidrLocations|object|false|none|none|

<h2 id="tocS_ListGeoLocationsResponse">ListGeoLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgeolocationsresponse"></a>
<a id="schema_ListGeoLocationsResponse"></a>
<a id="tocSlistgeolocationsresponse"></a>
<a id="tocslistgeolocationsresponse"></a>

```json
{
  "GeoLocationDetailsList": {},
  "IsTruncated": {},
  "NextContinentCode": {},
  "NextCountryCode": {},
  "NextSubdivisionCode": {},
  "MaxItems": {}
}
```

A complex type containing the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoLocationDetailsList|object|true|none|none|
|IsTruncated|object|true|none|none|
|NextContinentCode|object|false|none|none|
|NextCountryCode|object|false|none|none|
|NextSubdivisionCode|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListHealthChecksResponse">ListHealthChecksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthealthchecksresponse"></a>
<a id="schema_ListHealthChecksResponse"></a>
<a id="tocSlisthealthchecksresponse"></a>
<a id="tocslisthealthchecksresponse"></a>

```json
{
  "HealthChecks": {},
  "Marker": {},
  "IsTruncated": {},
  "NextMarker": {},
  "MaxItems": {}
}
```

A complex type that contains the response to a <code>ListHealthChecks</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthChecks|object|true|none|none|
|Marker|object|true|none|none|
|IsTruncated|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListHostedZonesResponse">ListHostedZonesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesresponse"></a>
<a id="schema_ListHostedZonesResponse"></a>
<a id="tocSlisthostedzonesresponse"></a>
<a id="tocslisthostedzonesresponse"></a>

```json
{
  "HostedZones": {},
  "Marker": {},
  "IsTruncated": {},
  "NextMarker": {},
  "MaxItems": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZones|object|true|none|none|
|Marker|object|true|none|none|
|IsTruncated|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListHostedZonesByNameResponse">ListHostedZonesByNameResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesbynameresponse"></a>
<a id="schema_ListHostedZonesByNameResponse"></a>
<a id="tocSlisthostedzonesbynameresponse"></a>
<a id="tocslisthostedzonesbynameresponse"></a>

```json
{
  "HostedZones": {},
  "DNSName": {},
  "HostedZoneId": {},
  "IsTruncated": {},
  "NextDNSName": {},
  "NextHostedZoneId": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZones|object|true|none|none|
|DNSName|object|false|none|none|
|HostedZoneId|object|false|none|none|
|IsTruncated|object|true|none|none|
|NextDNSName|object|false|none|none|
|NextHostedZoneId|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListHostedZonesByVPCResponse">ListHostedZonesByVPCResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesbyvpcresponse"></a>
<a id="schema_ListHostedZonesByVPCResponse"></a>
<a id="tocSlisthostedzonesbyvpcresponse"></a>
<a id="tocslisthostedzonesbyvpcresponse"></a>

```json
{
  "HostedZoneSummaries": {},
  "MaxItems": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneSummaries|object|true|none|none|
|MaxItems|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InvalidPaginationToken">InvalidPaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtoken"></a>
<a id="schema_InvalidPaginationToken"></a>
<a id="tocSinvalidpaginationtoken"></a>
<a id="tocsinvalidpaginationtoken"></a>

```json
null
```

<h2 id="tocS_ListQueryLoggingConfigsResponse">ListQueryLoggingConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueryloggingconfigsresponse"></a>
<a id="schema_ListQueryLoggingConfigsResponse"></a>
<a id="tocSlistqueryloggingconfigsresponse"></a>
<a id="tocslistqueryloggingconfigsresponse"></a>

```json
{
  "QueryLoggingConfigs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryLoggingConfigs|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListResourceRecordSetsResponse">ListResourceRecordSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcerecordsetsresponse"></a>
<a id="schema_ListResourceRecordSetsResponse"></a>
<a id="tocSlistresourcerecordsetsresponse"></a>
<a id="tocslistresourcerecordsetsresponse"></a>

```json
{
  "ResourceRecordSets": {},
  "IsTruncated": {},
  "NextRecordName": {},
  "NextRecordType": {},
  "NextRecordIdentifier": {},
  "MaxItems": {}
}
```

A complex type that contains list information for the resource record set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceRecordSets|object|true|none|none|
|IsTruncated|object|true|none|none|
|NextRecordName|object|false|none|none|
|NextRecordType|object|false|none|none|
|NextRecordIdentifier|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListReusableDelegationSetsResponse">ListReusableDelegationSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreusabledelegationsetsresponse"></a>
<a id="schema_ListReusableDelegationSetsResponse"></a>
<a id="tocSlistreusabledelegationsetsresponse"></a>
<a id="tocslistreusabledelegationsetsresponse"></a>

```json
{
  "DelegationSets": {},
  "Marker": {},
  "IsTruncated": {},
  "NextMarker": {},
  "MaxItems": {}
}
```

A complex type that contains information about the reusable delegation sets that are associated with the current Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DelegationSets|object|true|none|none|
|Marker|object|true|none|none|
|IsTruncated|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "ResourceTagSet": {
    "ResourceType": {},
    "ResourceId": {},
    "Tags": {}
  }
}
```

A complex type that contains information about the health checks or hosted zones for which you want to list tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTagSet|object|true|none|none|

<h2 id="tocS_ListTagsForResourcesResponse">ListTagsForResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcesresponse"></a>
<a id="schema_ListTagsForResourcesResponse"></a>
<a id="tocSlisttagsforresourcesresponse"></a>
<a id="tocslisttagsforresourcesresponse"></a>

```json
{
  "ResourceTagSets": {}
}
```

A complex type containing tags for the specified resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceTagSets|object|true|none|none|

<h2 id="tocS_TagResourceId">TagResourceId</h2>
<!-- backwards compatibility -->
<a id="schematagresourceid"></a>
<a id="schema_TagResourceId"></a>
<a id="tocStagresourceid"></a>
<a id="tocstagresourceid"></a>

```json
"string"
```

<h2 id="tocS_ListTrafficPoliciesResponse">ListTrafficPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpoliciesresponse"></a>
<a id="schema_ListTrafficPoliciesResponse"></a>
<a id="tocSlisttrafficpoliciesresponse"></a>
<a id="tocslisttrafficpoliciesresponse"></a>

```json
{
  "TrafficPolicySummaries": {},
  "IsTruncated": {},
  "TrafficPolicyIdMarker": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicySummaries|object|true|none|none|
|IsTruncated|object|true|none|none|
|TrafficPolicyIdMarker|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListTrafficPolicyInstancesResponse">ListTrafficPolicyInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesresponse"></a>
<a id="schema_ListTrafficPolicyInstancesResponse"></a>
<a id="tocSlisttrafficpolicyinstancesresponse"></a>
<a id="tocslisttrafficpolicyinstancesresponse"></a>

```json
{
  "TrafficPolicyInstances": {},
  "HostedZoneIdMarker": {},
  "TrafficPolicyInstanceNameMarker": {},
  "TrafficPolicyInstanceTypeMarker": {},
  "IsTruncated": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstances|object|true|none|none|
|HostedZoneIdMarker|object|false|none|none|
|TrafficPolicyInstanceNameMarker|object|false|none|none|
|TrafficPolicyInstanceTypeMarker|object|false|none|none|
|IsTruncated|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListTrafficPolicyInstancesByHostedZoneResponse">ListTrafficPolicyInstancesByHostedZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesbyhostedzoneresponse"></a>
<a id="schema_ListTrafficPolicyInstancesByHostedZoneResponse"></a>
<a id="tocSlisttrafficpolicyinstancesbyhostedzoneresponse"></a>
<a id="tocslisttrafficpolicyinstancesbyhostedzoneresponse"></a>

```json
{
  "TrafficPolicyInstances": {},
  "TrafficPolicyInstanceNameMarker": {},
  "TrafficPolicyInstanceTypeMarker": {},
  "IsTruncated": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstances|object|true|none|none|
|TrafficPolicyInstanceNameMarker|object|false|none|none|
|TrafficPolicyInstanceTypeMarker|object|false|none|none|
|IsTruncated|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListTrafficPolicyInstancesByPolicyResponse">ListTrafficPolicyInstancesByPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesbypolicyresponse"></a>
<a id="schema_ListTrafficPolicyInstancesByPolicyResponse"></a>
<a id="tocSlisttrafficpolicyinstancesbypolicyresponse"></a>
<a id="tocslisttrafficpolicyinstancesbypolicyresponse"></a>

```json
{
  "TrafficPolicyInstances": {},
  "HostedZoneIdMarker": {},
  "TrafficPolicyInstanceNameMarker": {},
  "TrafficPolicyInstanceTypeMarker": {},
  "IsTruncated": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstances|object|true|none|none|
|HostedZoneIdMarker|object|false|none|none|
|TrafficPolicyInstanceNameMarker|object|false|none|none|
|TrafficPolicyInstanceTypeMarker|object|false|none|none|
|IsTruncated|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListTrafficPolicyVersionsResponse">ListTrafficPolicyVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyversionsresponse"></a>
<a id="schema_ListTrafficPolicyVersionsResponse"></a>
<a id="tocSlisttrafficpolicyversionsresponse"></a>
<a id="tocslisttrafficpolicyversionsresponse"></a>

```json
{
  "TrafficPolicies": {},
  "IsTruncated": {},
  "TrafficPolicyVersionMarker": {},
  "MaxItems": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicies|object|true|none|none|
|IsTruncated|object|true|none|none|
|TrafficPolicyVersionMarker|object|true|none|none|
|MaxItems|object|true|none|none|

<h2 id="tocS_ListVPCAssociationAuthorizationsResponse">ListVPCAssociationAuthorizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcassociationauthorizationsresponse"></a>
<a id="schema_ListVPCAssociationAuthorizationsResponse"></a>
<a id="tocSlistvpcassociationauthorizationsresponse"></a>
<a id="tocslistvpcassociationauthorizationsresponse"></a>

```json
{
  "HostedZoneId": {},
  "NextToken": {},
  "VPCs": {}
}
```

A complex type that contains the response information for the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|NextToken|object|false|none|none|
|VPCs|object|true|none|none|

<h2 id="tocS_TestDNSAnswerResponse">TestDNSAnswerResponse</h2>
<!-- backwards compatibility -->
<a id="schematestdnsanswerresponse"></a>
<a id="schema_TestDNSAnswerResponse"></a>
<a id="tocStestdnsanswerresponse"></a>
<a id="tocstestdnsanswerresponse"></a>

```json
{
  "Nameserver": {},
  "RecordName": {},
  "RecordType": {},
  "RecordData": {},
  "ResponseCode": {},
  "Protocol": {}
}
```

A complex type that contains the response to a <code>TestDNSAnswer</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Nameserver|object|true|none|none|
|RecordName|object|true|none|none|
|RecordType|object|true|none|none|
|RecordData|object|true|none|none|
|ResponseCode|object|true|none|none|
|Protocol|object|true|none|none|

<h2 id="tocS_UpdateHealthCheckResponse">UpdateHealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehealthcheckresponse"></a>
<a id="schema_UpdateHealthCheckResponse"></a>
<a id="tocSupdatehealthcheckresponse"></a>
<a id="tocsupdatehealthcheckresponse"></a>

```json
{
  "HealthCheck": {
    "Id": {},
    "CallerReference": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    },
    "HealthCheckConfig": {
      "IPAddress": {},
      "Port": {},
      "Type": {},
      "ResourcePath": {},
      "FullyQualifiedDomainName": {},
      "SearchString": {},
      "RequestInterval": {},
      "FailureThreshold": {},
      "MeasureLatency": {},
      "Inverted": {},
      "Disabled": {},
      "HealthThreshold": {},
      "ChildHealthChecks": {},
      "EnableSNI": {},
      "Regions": {},
      "AlarmIdentifier": {
        "Region": {},
        "Name": {}
      },
      "InsufficientDataHealthStatus": {},
      "RoutingControlArn": {}
    },
    "HealthCheckVersion": {},
    "CloudWatchAlarmConfiguration": {
      "EvaluationPeriods": {},
      "Threshold": {},
      "ComparisonOperator": {},
      "Period": {},
      "MetricName": {},
      "Namespace": {},
      "Statistic": {},
      "Dimensions": {}
    }
  }
}
```

A complex type that contains the response to the <code>UpdateHealthCheck</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheck|object|true|none|none|

<h2 id="tocS_HealthCheckId">HealthCheckId</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckid"></a>
<a id="schema_HealthCheckId"></a>
<a id="tocShealthcheckid"></a>
<a id="tocshealthcheckid"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckRegion">HealthCheckRegion</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckregion"></a>
<a id="schema_HealthCheckRegion"></a>
<a id="tocShealthcheckregion"></a>
<a id="tocshealthcheckregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_CloudWatchRegion">CloudWatchRegion</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchregion"></a>
<a id="schema_CloudWatchRegion"></a>
<a id="tocScloudwatchregion"></a>
<a id="tocscloudwatchregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_AlarmName">AlarmName</h2>
<!-- backwards compatibility -->
<a id="schemaalarmname"></a>
<a id="schema_AlarmName"></a>
<a id="tocSalarmname"></a>
<a id="tocsalarmname"></a>

```json
"string"
```

<h2 id="tocS_ResettableElementName">ResettableElementName</h2>
<!-- backwards compatibility -->
<a id="schemaresettableelementname"></a>
<a id="schema_ResettableElementName"></a>
<a id="tocSresettableelementname"></a>
<a id="tocsresettableelementname"></a>

```json
"FullyQualifiedDomainName"
```

<h2 id="tocS_HealthCheckVersionMismatch">HealthCheckVersionMismatch</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckversionmismatch"></a>
<a id="schema_HealthCheckVersionMismatch"></a>
<a id="tocShealthcheckversionmismatch"></a>
<a id="tocshealthcheckversionmismatch"></a>

```json
null
```

<h2 id="tocS_UpdateHostedZoneCommentResponse">UpdateHostedZoneCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostedzonecommentresponse"></a>
<a id="schema_UpdateHostedZoneCommentResponse"></a>
<a id="tocSupdatehostedzonecommentresponse"></a>
<a id="tocsupdatehostedzonecommentresponse"></a>

```json
{
  "HostedZone": {
    "Id": {},
    "Name": {},
    "CallerReference": {},
    "Config": {
      "Comment": {},
      "PrivateZone": {}
    },
    "ResourceRecordSetCount": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    }
  }
}
```

A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZone|object|true|none|none|

<h2 id="tocS_UpdateTrafficPolicyCommentResponse">UpdateTrafficPolicyCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficpolicycommentresponse"></a>
<a id="schema_UpdateTrafficPolicyCommentResponse"></a>
<a id="tocSupdatetrafficpolicycommentresponse"></a>
<a id="tocsupdatetrafficpolicycommentresponse"></a>

```json
{
  "TrafficPolicy": {
    "Id": {},
    "Version": {},
    "Name": {},
    "Type": {},
    "Document": {},
    "Comment": {}
  }
}
```

A complex type that contains the response information for the traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicy|object|true|none|none|

<h2 id="tocS_UpdateTrafficPolicyInstanceResponse">UpdateTrafficPolicyInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficpolicyinstanceresponse"></a>
<a id="schema_UpdateTrafficPolicyInstanceResponse"></a>
<a id="tocSupdatetrafficpolicyinstanceresponse"></a>
<a id="tocsupdatetrafficpolicyinstanceresponse"></a>

```json
{
  "TrafficPolicyInstance": {
    "Id": {},
    "HostedZoneId": {},
    "Name": {},
    "TTL": {},
    "State": {},
    "Message": {},
    "TrafficPolicyId": {},
    "TrafficPolicyVersion": {},
    "TrafficPolicyType": {}
  }
}
```

A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrafficPolicyInstance|object|true|none|none|

<h2 id="tocS_ConflictingTypes">ConflictingTypes</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingtypes"></a>
<a id="schema_ConflictingTypes"></a>
<a id="tocSconflictingtypes"></a>
<a id="tocsconflictingtypes"></a>

```json
null
```

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_AWSAccountID">AWSAccountID</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountid"></a>
<a id="schema_AWSAccountID"></a>
<a id="tocSawsaccountid"></a>
<a id="tocsawsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountLimitType">AccountLimitType</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimittype"></a>
<a id="schema_AccountLimitType"></a>
<a id="tocSaccountlimittype"></a>
<a id="tocsaccountlimittype"></a>

```json
"MAX_HEALTH_CHECKS_BY_OWNER"
```

<h2 id="tocS_LimitValue">LimitValue</h2>
<!-- backwards compatibility -->
<a id="schemalimitvalue"></a>
<a id="schema_LimitValue"></a>
<a id="tocSlimitvalue"></a>
<a id="tocslimitvalue"></a>

```json
1
```

<h2 id="tocS_AccountLimit">AccountLimit</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlimit"></a>
<a id="schema_AccountLimit"></a>
<a id="tocSaccountlimit"></a>
<a id="tocsaccountlimit"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

A complex type that contains the type of limit that you specified in the request and the current value for that limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_SigningKeyName">SigningKeyName</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeyname"></a>
<a id="schema_SigningKeyName"></a>
<a id="tocSsigningkeyname"></a>
<a id="tocssigningkeyname"></a>

```json
"string"
```

<h2 id="tocS_ActivateKeySigningKeyRequest">ActivateKeySigningKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivatekeysigningkeyrequest"></a>
<a id="schema_ActivateKeySigningKeyRequest"></a>
<a id="tocSactivatekeysigningkeyrequest"></a>
<a id="tocsactivatekeysigningkeyrequest"></a>

```json
{}
```

<h2 id="tocS_ChangeInfo">ChangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemachangeinfo"></a>
<a id="schema_ChangeInfo"></a>
<a id="tocSchangeinfo"></a>
<a id="tocschangeinfo"></a>

```json
{
  "Id": {},
  "Status": {},
  "SubmittedAt": {},
  "Comment": {}
}
```

A complex type that describes change information about changes made to your hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Status|object|true|none|none|
|SubmittedAt|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_AliasHealthEnabled">AliasHealthEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaaliashealthenabled"></a>
<a id="schema_AliasHealthEnabled"></a>
<a id="tocSaliashealthenabled"></a>
<a id="tocsaliashealthenabled"></a>

```json
true
```

<h2 id="tocS_DNSName">DNSName</h2>
<!-- backwards compatibility -->
<a id="schemadnsname"></a>
<a id="schema_DNSName"></a>
<a id="tocSdnsname"></a>
<a id="tocsdnsname"></a>

```json
"string"
```

<h2 id="tocS_AliasTarget">AliasTarget</h2>
<!-- backwards compatibility -->
<a id="schemaaliastarget"></a>
<a id="schema_AliasTarget"></a>
<a id="tocSaliastarget"></a>
<a id="tocsaliastarget"></a>

```json
{
  "HostedZoneId": {},
  "DNSName": {},
  "EvaluateTargetHealth": {}
}
```

<p> <i>Alias resource record sets only:</i> Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|DNSName|object|true|none|none|
|EvaluateTargetHealth|object|true|none|none|

<h2 id="tocS_AssociateVPCComment">AssociateVPCComment</h2>
<!-- backwards compatibility -->
<a id="schemaassociatevpccomment"></a>
<a id="schema_AssociateVPCComment"></a>
<a id="tocSassociatevpccomment"></a>
<a id="tocsassociatevpccomment"></a>

```json
"string"
```

<h2 id="tocS_VPC">VPC</h2>
<!-- backwards compatibility -->
<a id="schemavpc"></a>
<a id="schema_VPC"></a>
<a id="tocSvpc"></a>
<a id="tocsvpc"></a>

```json
{
  "VPCRegion": {},
  "VPCId": "string"
}
```

<p>(Private hosted zones only) A complex type that contains information about an Amazon VPC.</p> <p>If you associate a private hosted zone with an Amazon VPC when you make a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html">CreateHostedZone</a> request, the following parameters are also required.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPCRegion|object|false|none|none|
|VPCId|[VPCId](#schemavpcid)|false|none|(Private hosted zones only) The ID of an Amazon VPC. |

<h2 id="tocS_AssociateVPCWithHostedZoneRequest">AssociateVPCWithHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatevpcwithhostedzonerequest"></a>
<a id="schema_AssociateVPCWithHostedZoneRequest"></a>
<a id="tocSassociatevpcwithhostedzonerequest"></a>
<a id="tocsassociatevpcwithhostedzonerequest"></a>

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "Comment": {}
}
```

A complex type that contains information about the request to associate a VPC with a private hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPC|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_ChangeAction">ChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemachangeaction"></a>
<a id="schema_ChangeAction"></a>
<a id="tocSchangeaction"></a>
<a id="tocschangeaction"></a>

```json
"CREATE"
```

<h2 id="tocS_ResourceRecordSet">ResourceRecordSet</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordset"></a>
<a id="schema_ResourceRecordSet"></a>
<a id="tocSresourcerecordset"></a>
<a id="tocsresourcerecordset"></a>

```json
{
  "Name": {},
  "Type": {},
  "SetIdentifier": {},
  "Weight": {},
  "Region": {},
  "GeoLocation": {
    "ContinentCode": {},
    "CountryCode": {},
    "SubdivisionCode": {}
  },
  "Failover": {},
  "MultiValueAnswer": {},
  "TTL": {},
  "ResourceRecords": {},
  "AliasTarget": {
    "HostedZoneId": {},
    "DNSName": {},
    "EvaluateTargetHealth": {}
  },
  "HealthCheckId": {},
  "TrafficPolicyInstanceId": {},
  "CidrRoutingConfig": {
    "CollectionId": {},
    "LocationName": {}
  }
}
```

Information about the resource record set to create or delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Type|object|true|none|none|
|SetIdentifier|object|false|none|none|
|Weight|object|false|none|none|
|Region|object|false|none|none|
|GeoLocation|object|false|none|none|
|Failover|object|false|none|none|
|MultiValueAnswer|object|false|none|none|
|TTL|object|false|none|none|
|ResourceRecords|object|false|none|none|
|AliasTarget|object|false|none|none|
|HealthCheckId|object|false|none|none|
|TrafficPolicyInstanceId|object|false|none|none|
|CidrRoutingConfig|[CidrRoutingConfig](#schemacidrroutingconfig)|false|none|<p>The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.</p> <p>A <code>LocationName</code> with an asterisk “*” can be used to create a default CIDR record. <code>CollectionId</code> is still required for default record.</p>|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "Action": {},
  "ResourceRecordSet": {
    "Name": {},
    "Type": {},
    "SetIdentifier": {},
    "Weight": {},
    "Region": {},
    "GeoLocation": {
      "ContinentCode": {},
      "CountryCode": {},
      "SubdivisionCode": {}
    },
    "Failover": {},
    "MultiValueAnswer": {},
    "TTL": {},
    "ResourceRecords": {},
    "AliasTarget": {
      "HostedZoneId": {},
      "DNSName": {},
      "EvaluateTargetHealth": {}
    },
    "HealthCheckId": {},
    "TrafficPolicyInstanceId": {},
    "CidrRoutingConfig": {
      "CollectionId": {},
      "LocationName": {}
    }
  }
}
```

The information for each resource record set that you want to change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Action|object|true|none|none|
|ResourceRecordSet|object|true|none|none|

<h2 id="tocS_ChangeBatch">ChangeBatch</h2>
<!-- backwards compatibility -->
<a id="schemachangebatch"></a>
<a id="schema_ChangeBatch"></a>
<a id="tocSchangebatch"></a>
<a id="tocschangebatch"></a>

```json
{
  "Comment": {},
  "Changes": {}
}
```

The information for a change request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Changes|object|true|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"string"
```

<h2 id="tocS_CollectionVersion">CollectionVersion</h2>
<!-- backwards compatibility -->
<a id="schemacollectionversion"></a>
<a id="schema_CollectionVersion"></a>
<a id="tocScollectionversion"></a>
<a id="tocscollectionversion"></a>

```json
1
```

<h2 id="tocS_CidrCollectionChanges">CidrCollectionChanges</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectionchanges"></a>
<a id="schema_CidrCollectionChanges"></a>
<a id="tocScidrcollectionchanges"></a>
<a id="tocscidrcollectionchanges"></a>

```json
[
  {
    "LocationName": {},
    "Action": {},
    "CidrList": {}
  }
]
```

<h2 id="tocS_ChangeCidrCollectionRequest">ChangeCidrCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangecidrcollectionrequest"></a>
<a id="schema_ChangeCidrCollectionRequest"></a>
<a id="tocSchangecidrcollectionrequest"></a>
<a id="tocschangecidrcollectionrequest"></a>

```json
{
  "CollectionVersion": {},
  "Changes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionVersion|object|false|none|none|
|Changes|object|true|none|none|

<h2 id="tocS_ChangeId">ChangeId</h2>
<!-- backwards compatibility -->
<a id="schemachangeid"></a>
<a id="schema_ChangeId"></a>
<a id="tocSchangeid"></a>
<a id="tocschangeid"></a>

```json
"string"
```

<h2 id="tocS_ChangeStatus">ChangeStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangestatus"></a>
<a id="schema_ChangeStatus"></a>
<a id="tocSchangestatus"></a>
<a id="tocschangestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ChangeResourceRecordSetsRequest">ChangeResourceRecordSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangeresourcerecordsetsrequest"></a>
<a id="schema_ChangeResourceRecordSetsRequest"></a>
<a id="tocSchangeresourcerecordsetsrequest"></a>
<a id="tocschangeresourcerecordsetsrequest"></a>

```json
{
  "ChangeBatch": {
    "Comment": {},
    "Changes": {}
  }
}
```

A complex type that contains change information for the resource record set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeBatch|object|true|none|none|

<h2 id="tocS_TagResourceType">TagResourceType</h2>
<!-- backwards compatibility -->
<a id="schematagresourcetype"></a>
<a id="schema_TagResourceType"></a>
<a id="tocStagresourcetype"></a>
<a id="tocstagresourcetype"></a>

```json
"healthcheck"
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

<h2 id="tocS_TagKeyList">TagKeyList</h2>
<!-- backwards compatibility -->
<a id="schematagkeylist"></a>
<a id="schema_TagKeyList"></a>
<a id="tocStagkeylist"></a>
<a id="tocstagkeylist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ChangeTagsForResourceRequest">ChangeTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangetagsforresourcerequest"></a>
<a id="schema_ChangeTagsForResourceRequest"></a>
<a id="tocSchangetagsforresourcerequest"></a>
<a id="tocschangetagsforresourcerequest"></a>

```json
{
  "AddTags": {},
  "RemoveTagKeys": {}
}
```

A complex type that contains information about the tags that you want to add, edit, or delete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddTags|object|false|none|none|
|RemoveTagKeys|object|false|none|none|

<h2 id="tocS_IPAddressCidr">IPAddressCidr</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresscidr"></a>
<a id="schema_IPAddressCidr"></a>
<a id="tocSipaddresscidr"></a>
<a id="tocsipaddresscidr"></a>

```json
"string"
```

<h2 id="tocS_CheckerIpRanges">CheckerIpRanges</h2>
<!-- backwards compatibility -->
<a id="schemacheckeripranges"></a>
<a id="schema_CheckerIpRanges"></a>
<a id="tocScheckeripranges"></a>
<a id="tocscheckeripranges"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Cidr">Cidr</h2>
<!-- backwards compatibility -->
<a id="schemacidr"></a>
<a id="schema_Cidr"></a>
<a id="tocScidr"></a>
<a id="tocscidr"></a>

```json
"string"
```

<h2 id="tocS_CidrBlockSummary">CidrBlockSummary</h2>
<!-- backwards compatibility -->
<a id="schemacidrblocksummary"></a>
<a id="schema_CidrBlockSummary"></a>
<a id="tocScidrblocksummary"></a>
<a id="tocscidrblocksummary"></a>

```json
{
  "CidrBlock": {},
  "LocationName": {}
}
```

A complex type that lists the CIDR blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CidrBlock|object|false|none|none|
|LocationName|object|false|none|none|

<h2 id="tocS_CidrBlockSummaries">CidrBlockSummaries</h2>
<!-- backwards compatibility -->
<a id="schemacidrblocksummaries"></a>
<a id="schema_CidrBlockSummaries"></a>
<a id="tocScidrblocksummaries"></a>
<a id="tocscidrblocksummaries"></a>

```json
[
  {
    "CidrBlock": {},
    "LocationName": {}
  }
]
```

<h2 id="tocS_CidrLocationNameDefaultNotAllowed">CidrLocationNameDefaultNotAllowed</h2>
<!-- backwards compatibility -->
<a id="schemacidrlocationnamedefaultnotallowed"></a>
<a id="schema_CidrLocationNameDefaultNotAllowed"></a>
<a id="tocScidrlocationnamedefaultnotallowed"></a>
<a id="tocscidrlocationnamedefaultnotallowed"></a>

```json
"string"
```

<h2 id="tocS_CollectionName">CollectionName</h2>
<!-- backwards compatibility -->
<a id="schemacollectionname"></a>
<a id="schema_CollectionName"></a>
<a id="tocScollectionname"></a>
<a id="tocscollectionname"></a>

```json
"string"
```

<h2 id="tocS_CidrCollection">CidrCollection</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollection"></a>
<a id="schema_CidrCollection"></a>
<a id="tocScidrcollection"></a>
<a id="tocscidrcollection"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Version": {}
}
```

A complex type that identifies a CIDR collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CidrCollectionChangeAction">CidrCollectionChangeAction</h2>
<!-- backwards compatibility -->
<a id="schemacidrcollectionchangeaction"></a>
<a id="schema_CidrCollectionChangeAction"></a>
<a id="tocScidrcollectionchangeaction"></a>
<a id="tocscidrcollectionchangeaction"></a>

```json
"PUT"
```

<h2 id="tocS_CidrList">CidrList</h2>
<!-- backwards compatibility -->
<a id="schemacidrlist"></a>
<a id="schema_CidrList"></a>
<a id="tocScidrlist"></a>
<a id="tocscidrlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CidrLocationNameDefaultAllowed">CidrLocationNameDefaultAllowed</h2>
<!-- backwards compatibility -->
<a id="schemacidrlocationnamedefaultallowed"></a>
<a id="schema_CidrLocationNameDefaultAllowed"></a>
<a id="tocScidrlocationnamedefaultallowed"></a>
<a id="tocscidrlocationnamedefaultallowed"></a>

```json
"string"
```

<h2 id="tocS_CidrNonce">CidrNonce</h2>
<!-- backwards compatibility -->
<a id="schemacidrnonce"></a>
<a id="schema_CidrNonce"></a>
<a id="tocScidrnonce"></a>
<a id="tocscidrnonce"></a>

```json
"string"
```

<h2 id="tocS_CidrRoutingConfig">CidrRoutingConfig</h2>
<!-- backwards compatibility -->
<a id="schemacidrroutingconfig"></a>
<a id="schema_CidrRoutingConfig"></a>
<a id="tocScidrroutingconfig"></a>
<a id="tocscidrroutingconfig"></a>

```json
{
  "CollectionId": {},
  "LocationName": {}
}
```

<p>The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.</p> <p>A <code>LocationName</code> with an asterisk “*” can be used to create a default CIDR record. <code>CollectionId</code> is still required for default record.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionId|object|true|none|none|
|LocationName|object|true|none|none|

<h2 id="tocS_EvaluationPeriods">EvaluationPeriods</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationperiods"></a>
<a id="schema_EvaluationPeriods"></a>
<a id="tocSevaluationperiods"></a>
<a id="tocsevaluationperiods"></a>

```json
1
```

<h2 id="tocS_Threshold">Threshold</h2>
<!-- backwards compatibility -->
<a id="schemathreshold"></a>
<a id="schema_Threshold"></a>
<a id="tocSthreshold"></a>
<a id="tocsthreshold"></a>

```json
0
```

<h2 id="tocS_ComparisonOperator">ComparisonOperator</h2>
<!-- backwards compatibility -->
<a id="schemacomparisonoperator"></a>
<a id="schema_ComparisonOperator"></a>
<a id="tocScomparisonoperator"></a>
<a id="tocscomparisonoperator"></a>

```json
"GreaterThanOrEqualToThreshold"
```

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
60
```

<h2 id="tocS_MetricName">MetricName</h2>
<!-- backwards compatibility -->
<a id="schemametricname"></a>
<a id="schema_MetricName"></a>
<a id="tocSmetricname"></a>
<a id="tocsmetricname"></a>

```json
"string"
```

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

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
"Average"
```

<h2 id="tocS_DimensionList">DimensionList</h2>
<!-- backwards compatibility -->
<a id="schemadimensionlist"></a>
<a id="schema_DimensionList"></a>
<a id="tocSdimensionlist"></a>
<a id="tocsdimensionlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

<h2 id="tocS_CloudWatchAlarmConfiguration">CloudWatchAlarmConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchalarmconfiguration"></a>
<a id="schema_CloudWatchAlarmConfiguration"></a>
<a id="tocScloudwatchalarmconfiguration"></a>
<a id="tocscloudwatchalarmconfiguration"></a>

```json
{
  "EvaluationPeriods": {},
  "Threshold": {},
  "ComparisonOperator": {},
  "Period": {},
  "MetricName": {},
  "Namespace": {},
  "Statistic": {},
  "Dimensions": {}
}
```

A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EvaluationPeriods|object|true|none|none|
|Threshold|object|true|none|none|
|ComparisonOperator|object|true|none|none|
|Period|object|true|none|none|
|MetricName|object|true|none|none|
|Namespace|object|true|none|none|
|Statistic|object|true|none|none|
|Dimensions|object|false|none|none|

<h2 id="tocS_CloudWatchLogsLogGroupArn">CloudWatchLogsLogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsloggrouparn"></a>
<a id="schema_CloudWatchLogsLogGroupArn"></a>
<a id="tocScloudwatchlogsloggrouparn"></a>
<a id="tocscloudwatchlogsloggrouparn"></a>

```json
"string"
```

<h2 id="tocS_CollectionSummary">CollectionSummary</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsummary"></a>
<a id="schema_CollectionSummary"></a>
<a id="tocScollectionsummary"></a>
<a id="tocscollectionsummary"></a>

```json
{
  "Arn": {},
  "Id": {},
  "Name": {},
  "Version": {}
}
```

A complex type that is an entry in an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CidrCollection.html">CidrCollection</a> array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Id|object|false|none|none|
|Name|object|false|none|none|
|Version|object|false|none|none|

<h2 id="tocS_CollectionSummaries">CollectionSummaries</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsummaries"></a>
<a id="schema_CollectionSummaries"></a>
<a id="tocScollectionsummaries"></a>
<a id="tocscollectionsummaries"></a>

```json
[
  {
    "Arn": {},
    "Id": {},
    "Name": {},
    "Version": {}
  }
]
```

<h2 id="tocS_CreateCidrCollectionRequest">CreateCidrCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecidrcollectionrequest"></a>
<a id="schema_CreateCidrCollectionRequest"></a>
<a id="tocScreatecidrcollectionrequest"></a>
<a id="tocscreatecidrcollectionrequest"></a>

```json
{
  "Name": {},
  "CallerReference": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CallerReference|object|true|none|none|

<h2 id="tocS_ResourceURI">ResourceURI</h2>
<!-- backwards compatibility -->
<a id="schemaresourceuri"></a>
<a id="schema_ResourceURI"></a>
<a id="tocSresourceuri"></a>
<a id="tocsresourceuri"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckNonce">HealthCheckNonce</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecknonce"></a>
<a id="schema_HealthCheckNonce"></a>
<a id="tocShealthchecknonce"></a>
<a id="tocshealthchecknonce"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckConfig">HealthCheckConfig</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckconfig"></a>
<a id="schema_HealthCheckConfig"></a>
<a id="tocShealthcheckconfig"></a>
<a id="tocshealthcheckconfig"></a>

```json
{
  "IPAddress": {},
  "Port": {},
  "Type": {},
  "ResourcePath": {},
  "FullyQualifiedDomainName": {},
  "SearchString": {},
  "RequestInterval": {},
  "FailureThreshold": {},
  "MeasureLatency": {},
  "Inverted": {},
  "Disabled": {},
  "HealthThreshold": {},
  "ChildHealthChecks": {},
  "EnableSNI": {},
  "Regions": {},
  "AlarmIdentifier": {
    "Region": {},
    "Name": {}
  },
  "InsufficientDataHealthStatus": {},
  "RoutingControlArn": {}
}
```

A complex type that contains information about the health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IPAddress|object|false|none|none|
|Port|object|false|none|none|
|Type|object|true|none|none|
|ResourcePath|object|false|none|none|
|FullyQualifiedDomainName|object|false|none|none|
|SearchString|object|false|none|none|
|RequestInterval|object|false|none|none|
|FailureThreshold|object|false|none|none|
|MeasureLatency|object|false|none|none|
|Inverted|object|false|none|none|
|Disabled|object|false|none|none|
|HealthThreshold|object|false|none|none|
|ChildHealthChecks|object|false|none|none|
|EnableSNI|object|false|none|none|
|Regions|object|false|none|none|
|AlarmIdentifier|object|false|none|none|
|InsufficientDataHealthStatus|object|false|none|none|
|RoutingControlArn|object|false|none|none|

<h2 id="tocS_CreateHealthCheckRequest">CreateHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehealthcheckrequest"></a>
<a id="schema_CreateHealthCheckRequest"></a>
<a id="tocScreatehealthcheckrequest"></a>
<a id="tocscreatehealthcheckrequest"></a>

```json
{
  "CallerReference": {},
  "HealthCheckConfig": {
    "IPAddress": {},
    "Port": {},
    "Type": {},
    "ResourcePath": {},
    "FullyQualifiedDomainName": {},
    "SearchString": {},
    "RequestInterval": {},
    "FailureThreshold": {},
    "MeasureLatency": {},
    "Inverted": {},
    "Disabled": {},
    "HealthThreshold": {},
    "ChildHealthChecks": {},
    "EnableSNI": {},
    "Regions": {},
    "AlarmIdentifier": {
      "Region": {},
      "Name": {}
    },
    "InsufficientDataHealthStatus": {},
    "RoutingControlArn": {}
  }
}
```

A complex type that contains the health check request information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|HealthCheckConfig|object|true|none|none|

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "Id": {},
  "CallerReference": {},
  "LinkedService": {
    "ServicePrincipal": {},
    "Description": {}
  },
  "HealthCheckConfig": {
    "IPAddress": {},
    "Port": {},
    "Type": {},
    "ResourcePath": {},
    "FullyQualifiedDomainName": {},
    "SearchString": {},
    "RequestInterval": {},
    "FailureThreshold": {},
    "MeasureLatency": {},
    "Inverted": {},
    "Disabled": {},
    "HealthThreshold": {},
    "ChildHealthChecks": {},
    "EnableSNI": {},
    "Regions": {},
    "AlarmIdentifier": {
      "Region": {},
      "Name": {}
    },
    "InsufficientDataHealthStatus": {},
    "RoutingControlArn": {}
  },
  "HealthCheckVersion": {},
  "CloudWatchAlarmConfiguration": {
    "EvaluationPeriods": {},
    "Threshold": {},
    "ComparisonOperator": {},
    "Period": {},
    "MetricName": {},
    "Namespace": {},
    "Statistic": {},
    "Dimensions": {}
  }
}
```

A complex type that contains information about one health check that is associated with the current Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|CallerReference|object|true|none|none|
|LinkedService|object|false|none|none|
|HealthCheckConfig|object|true|none|none|
|HealthCheckVersion|object|true|none|none|
|CloudWatchAlarmConfiguration|object|false|none|none|

<h2 id="tocS_Nonce">Nonce</h2>
<!-- backwards compatibility -->
<a id="schemanonce"></a>
<a id="schema_Nonce"></a>
<a id="tocSnonce"></a>
<a id="tocsnonce"></a>

```json
"string"
```

<h2 id="tocS_HostedZoneConfig">HostedZoneConfig</h2>
<!-- backwards compatibility -->
<a id="schemahostedzoneconfig"></a>
<a id="schema_HostedZoneConfig"></a>
<a id="tocShostedzoneconfig"></a>
<a id="tocshostedzoneconfig"></a>

```json
{
  "Comment": {},
  "PrivateZone": {}
}
```

A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|PrivateZone|object|false|none|none|

<h2 id="tocS_CreateHostedZoneRequest">CreateHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehostedzonerequest"></a>
<a id="schema_CreateHostedZoneRequest"></a>
<a id="tocScreatehostedzonerequest"></a>
<a id="tocscreatehostedzonerequest"></a>

```json
{
  "Name": {},
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "CallerReference": {},
  "HostedZoneConfig": {
    "Comment": {},
    "PrivateZone": {}
  },
  "DelegationSetId": {}
}
```

A complex type that contains information about the request to create a public or private hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|VPC|object|false|none|none|
|CallerReference|object|true|none|none|
|HostedZoneConfig|object|false|none|none|
|DelegationSetId|object|false|none|none|

<h2 id="tocS_HostedZone">HostedZone</h2>
<!-- backwards compatibility -->
<a id="schemahostedzone"></a>
<a id="schema_HostedZone"></a>
<a id="tocShostedzone"></a>
<a id="tocshostedzone"></a>

```json
{
  "Id": {},
  "Name": {},
  "CallerReference": {},
  "Config": {
    "Comment": {},
    "PrivateZone": {}
  },
  "ResourceRecordSetCount": {},
  "LinkedService": {
    "ServicePrincipal": {},
    "Description": {}
  }
}
```

A complex type that contains general information about the hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|true|none|none|
|CallerReference|object|true|none|none|
|Config|object|false|none|none|
|ResourceRecordSetCount|object|false|none|none|
|LinkedService|object|false|none|none|

<h2 id="tocS_DelegationSet">DelegationSet</h2>
<!-- backwards compatibility -->
<a id="schemadelegationset"></a>
<a id="schema_DelegationSet"></a>
<a id="tocSdelegationset"></a>
<a id="tocsdelegationset"></a>

```json
{
  "Id": {},
  "CallerReference": {},
  "NameServers": {}
}
```

A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|CallerReference|object|false|none|none|
|NameServers|object|true|none|none|

<h2 id="tocS_SigningKeyString">SigningKeyString</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeystring"></a>
<a id="schema_SigningKeyString"></a>
<a id="tocSsigningkeystring"></a>
<a id="tocssigningkeystring"></a>

```json
"string"
```

<h2 id="tocS_SigningKeyStatus">SigningKeyStatus</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeystatus"></a>
<a id="schema_SigningKeyStatus"></a>
<a id="tocSsigningkeystatus"></a>
<a id="tocssigningkeystatus"></a>

```json
"string"
```

<h2 id="tocS_CreateKeySigningKeyRequest">CreateKeySigningKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeysigningkeyrequest"></a>
<a id="schema_CreateKeySigningKeyRequest"></a>
<a id="tocScreatekeysigningkeyrequest"></a>
<a id="tocscreatekeysigningkeyrequest"></a>

```json
{
  "CallerReference": {},
  "HostedZoneId": {},
  "KeyManagementServiceArn": {},
  "Name": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|HostedZoneId|object|true|none|none|
|KeyManagementServiceArn|object|true|none|none|
|Name|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_KeySigningKey">KeySigningKey</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkey"></a>
<a id="schema_KeySigningKey"></a>
<a id="tocSkeysigningkey"></a>
<a id="tocskeysigningkey"></a>

```json
{
  "Name": {},
  "KmsArn": {},
  "Flag": {},
  "SigningAlgorithmMnemonic": {},
  "SigningAlgorithmType": {},
  "DigestAlgorithmMnemonic": {},
  "DigestAlgorithmType": {},
  "KeyTag": {},
  "DigestValue": {},
  "PublicKey": {},
  "DSRecord": {},
  "DNSKEYRecord": {},
  "Status": {},
  "StatusMessage": {},
  "CreatedDate": {},
  "LastModifiedDate": {}
}
```

A key-signing key (KSK) is a complex type that represents a public/private key pair. The private key is used to generate a digital signature for the zone signing key (ZSK). The public key is stored in the DNS and is used to authenticate the ZSK. A KSK is always associated with a hosted zone; it cannot exist by itself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|KmsArn|object|false|none|none|
|Flag|object|false|none|none|
|SigningAlgorithmMnemonic|object|false|none|none|
|SigningAlgorithmType|object|false|none|none|
|DigestAlgorithmMnemonic|object|false|none|none|
|DigestAlgorithmType|object|false|none|none|
|KeyTag|object|false|none|none|
|DigestValue|object|false|none|none|
|PublicKey|object|false|none|none|
|DSRecord|object|false|none|none|
|DNSKEYRecord|object|false|none|none|
|Status|object|false|none|none|
|StatusMessage|object|false|none|none|
|CreatedDate|object|false|none|none|
|LastModifiedDate|object|false|none|none|

<h2 id="tocS_CreateQueryLoggingConfigRequest">CreateQueryLoggingConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatequeryloggingconfigrequest"></a>
<a id="schema_CreateQueryLoggingConfigRequest"></a>
<a id="tocScreatequeryloggingconfigrequest"></a>
<a id="tocscreatequeryloggingconfigrequest"></a>

```json
{
  "HostedZoneId": {},
  "CloudWatchLogsLogGroupArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|CloudWatchLogsLogGroupArn|object|true|none|none|

<h2 id="tocS_QueryLoggingConfig">QueryLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaqueryloggingconfig"></a>
<a id="schema_QueryLoggingConfig"></a>
<a id="tocSqueryloggingconfig"></a>
<a id="tocsqueryloggingconfig"></a>

```json
{
  "Id": {},
  "HostedZoneId": {},
  "CloudWatchLogsLogGroupArn": {}
}
```

A complex type that contains information about a configuration for DNS query logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|HostedZoneId|object|true|none|none|
|CloudWatchLogsLogGroupArn|object|true|none|none|

<h2 id="tocS_CreateReusableDelegationSetRequest">CreateReusableDelegationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatereusabledelegationsetrequest"></a>
<a id="schema_CreateReusableDelegationSetRequest"></a>
<a id="tocScreatereusabledelegationsetrequest"></a>
<a id="tocscreatereusabledelegationsetrequest"></a>

```json
{
  "CallerReference": {},
  "HostedZoneId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|HostedZoneId|object|false|none|none|

<h2 id="tocS_TTL">TTL</h2>
<!-- backwards compatibility -->
<a id="schemattl"></a>
<a id="schema_TTL"></a>
<a id="tocSttl"></a>
<a id="tocsttl"></a>

```json
0
```

<h2 id="tocS_TrafficPolicyId">TrafficPolicyId</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyid"></a>
<a id="schema_TrafficPolicyId"></a>
<a id="tocStrafficpolicyid"></a>
<a id="tocstrafficpolicyid"></a>

```json
"string"
```

<h2 id="tocS_TrafficPolicyVersion">TrafficPolicyVersion</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyversion"></a>
<a id="schema_TrafficPolicyVersion"></a>
<a id="tocStrafficpolicyversion"></a>
<a id="tocstrafficpolicyversion"></a>

```json
1
```

<h2 id="tocS_CreateTrafficPolicyInstanceRequest">CreateTrafficPolicyInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyinstancerequest"></a>
<a id="schema_CreateTrafficPolicyInstanceRequest"></a>
<a id="tocScreatetrafficpolicyinstancerequest"></a>
<a id="tocscreatetrafficpolicyinstancerequest"></a>

```json
{
  "HostedZoneId": {},
  "Name": {},
  "TTL": {},
  "TrafficPolicyId": {},
  "TrafficPolicyVersion": {}
}
```

A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|Name|object|true|none|none|
|TTL|object|true|none|none|
|TrafficPolicyId|object|true|none|none|
|TrafficPolicyVersion|object|true|none|none|

<h2 id="tocS_TrafficPolicyInstance">TrafficPolicyInstance</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstance"></a>
<a id="schema_TrafficPolicyInstance"></a>
<a id="tocStrafficpolicyinstance"></a>
<a id="tocstrafficpolicyinstance"></a>

```json
{
  "Id": {},
  "HostedZoneId": {},
  "Name": {},
  "TTL": {},
  "State": {},
  "Message": {},
  "TrafficPolicyId": {},
  "TrafficPolicyVersion": {},
  "TrafficPolicyType": {}
}
```

A complex type that contains settings for the new traffic policy instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|HostedZoneId|object|true|none|none|
|Name|object|true|none|none|
|TTL|object|true|none|none|
|State|object|true|none|none|
|Message|object|true|none|none|
|TrafficPolicyId|object|true|none|none|
|TrafficPolicyVersion|object|true|none|none|
|TrafficPolicyType|object|true|none|none|

<h2 id="tocS_TrafficPolicyName">TrafficPolicyName</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyname"></a>
<a id="schema_TrafficPolicyName"></a>
<a id="tocStrafficpolicyname"></a>
<a id="tocstrafficpolicyname"></a>

```json
"string"
```

<h2 id="tocS_TrafficPolicyDocument">TrafficPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicydocument"></a>
<a id="schema_TrafficPolicyDocument"></a>
<a id="tocStrafficpolicydocument"></a>
<a id="tocstrafficpolicydocument"></a>

```json
"string"
```

<h2 id="tocS_TrafficPolicyComment">TrafficPolicyComment</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicycomment"></a>
<a id="schema_TrafficPolicyComment"></a>
<a id="tocStrafficpolicycomment"></a>
<a id="tocstrafficpolicycomment"></a>

```json
"string"
```

<h2 id="tocS_CreateTrafficPolicyRequest">CreateTrafficPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyrequest"></a>
<a id="schema_CreateTrafficPolicyRequest"></a>
<a id="tocScreatetrafficpolicyrequest"></a>
<a id="tocscreatetrafficpolicyrequest"></a>

```json
{
  "Name": {},
  "Document": {},
  "Comment": {}
}
```

A complex type that contains information about the traffic policy that you want to create.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Document|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_TrafficPolicy">TrafficPolicy</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicy"></a>
<a id="schema_TrafficPolicy"></a>
<a id="tocStrafficpolicy"></a>
<a id="tocstrafficpolicy"></a>

```json
{
  "Id": {},
  "Version": {},
  "Name": {},
  "Type": {},
  "Document": {},
  "Comment": {}
}
```

A complex type that contains settings for a traffic policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Version|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|Document|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_CreateTrafficPolicyVersionRequest">CreateTrafficPolicyVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrafficpolicyversionrequest"></a>
<a id="schema_CreateTrafficPolicyVersionRequest"></a>
<a id="tocScreatetrafficpolicyversionrequest"></a>
<a id="tocscreatetrafficpolicyversionrequest"></a>

```json
{
  "Document": {},
  "Comment": {}
}
```

A complex type that contains information about the traffic policy that you want to create a new version for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Document|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_CreateVPCAssociationAuthorizationRequest">CreateVPCAssociationAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcassociationauthorizationrequest"></a>
<a id="schema_CreateVPCAssociationAuthorizationRequest"></a>
<a id="tocScreatevpcassociationauthorizationrequest"></a>
<a id="tocscreatevpcassociationauthorizationrequest"></a>

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPC|object|true|none|none|

<h2 id="tocS_DNSRCode">DNSRCode</h2>
<!-- backwards compatibility -->
<a id="schemadnsrcode"></a>
<a id="schema_DNSRCode"></a>
<a id="tocSdnsrcode"></a>
<a id="tocsdnsrcode"></a>

```json
"string"
```

<h2 id="tocS_ServeSignature">ServeSignature</h2>
<!-- backwards compatibility -->
<a id="schemaservesignature"></a>
<a id="schema_ServeSignature"></a>
<a id="tocSservesignature"></a>
<a id="tocsservesignature"></a>

```json
"string"
```

<h2 id="tocS_SigningKeyStatusMessage">SigningKeyStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeystatusmessage"></a>
<a id="schema_SigningKeyStatusMessage"></a>
<a id="tocSsigningkeystatusmessage"></a>
<a id="tocssigningkeystatusmessage"></a>

```json
"string"
```

<h2 id="tocS_DNSSECStatus">DNSSECStatus</h2>
<!-- backwards compatibility -->
<a id="schemadnssecstatus"></a>
<a id="schema_DNSSECStatus"></a>
<a id="tocSdnssecstatus"></a>
<a id="tocsdnssecstatus"></a>

```json
{
  "ServeSignature": {},
  "StatusMessage": {}
}
```

A string repesenting the status of DNSSEC signing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServeSignature|object|false|none|none|
|StatusMessage|object|false|none|none|

<h2 id="tocS_DeactivateKeySigningKeyRequest">DeactivateKeySigningKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeactivatekeysigningkeyrequest"></a>
<a id="schema_DeactivateKeySigningKeyRequest"></a>
<a id="tocSdeactivatekeysigningkeyrequest"></a>
<a id="tocsdeactivatekeysigningkeyrequest"></a>

```json
{}
```

<h2 id="tocS_DelegationSetNameServers">DelegationSetNameServers</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsetnameservers"></a>
<a id="schema_DelegationSetNameServers"></a>
<a id="tocSdelegationsetnameservers"></a>
<a id="tocsdelegationsetnameservers"></a>

```json
[
  {}
]
```

<h2 id="tocS_DelegationSets">DelegationSets</h2>
<!-- backwards compatibility -->
<a id="schemadelegationsets"></a>
<a id="schema_DelegationSets"></a>
<a id="tocSdelegationsets"></a>
<a id="tocsdelegationsets"></a>

```json
[
  {
    "Id": {},
    "CallerReference": {},
    "NameServers": {}
  }
]
```

<h2 id="tocS_DeleteCidrCollectionRequest">DeleteCidrCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecidrcollectionrequest"></a>
<a id="schema_DeleteCidrCollectionRequest"></a>
<a id="tocSdeletecidrcollectionrequest"></a>
<a id="tocsdeletecidrcollectionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteHealthCheckRequest">DeleteHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehealthcheckrequest"></a>
<a id="schema_DeleteHealthCheckRequest"></a>
<a id="tocSdeletehealthcheckrequest"></a>
<a id="tocsdeletehealthcheckrequest"></a>

```json
{}
```

This action deletes a health check.

<h2 id="tocS_DeleteHostedZoneRequest">DeleteHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletehostedzonerequest"></a>
<a id="schema_DeleteHostedZoneRequest"></a>
<a id="tocSdeletehostedzonerequest"></a>
<a id="tocsdeletehostedzonerequest"></a>

```json
{}
```

A request to delete a hosted zone.

<h2 id="tocS_DeleteKeySigningKeyRequest">DeleteKeySigningKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeysigningkeyrequest"></a>
<a id="schema_DeleteKeySigningKeyRequest"></a>
<a id="tocSdeletekeysigningkeyrequest"></a>
<a id="tocsdeletekeysigningkeyrequest"></a>

```json
{}
```

<h2 id="tocS_QueryLoggingConfigId">QueryLoggingConfigId</h2>
<!-- backwards compatibility -->
<a id="schemaqueryloggingconfigid"></a>
<a id="schema_QueryLoggingConfigId"></a>
<a id="tocSqueryloggingconfigid"></a>
<a id="tocsqueryloggingconfigid"></a>

```json
"string"
```

<h2 id="tocS_DeleteQueryLoggingConfigRequest">DeleteQueryLoggingConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletequeryloggingconfigrequest"></a>
<a id="schema_DeleteQueryLoggingConfigRequest"></a>
<a id="tocSdeletequeryloggingconfigrequest"></a>
<a id="tocsdeletequeryloggingconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteReusableDelegationSetRequest">DeleteReusableDelegationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletereusabledelegationsetrequest"></a>
<a id="schema_DeleteReusableDelegationSetRequest"></a>
<a id="tocSdeletereusabledelegationsetrequest"></a>
<a id="tocsdeletereusabledelegationsetrequest"></a>

```json
{}
```

A request to delete a reusable delegation set.

<h2 id="tocS_TrafficPolicyInstanceId">TrafficPolicyInstanceId</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstanceid"></a>
<a id="schema_TrafficPolicyInstanceId"></a>
<a id="tocStrafficpolicyinstanceid"></a>
<a id="tocstrafficpolicyinstanceid"></a>

```json
"string"
```

<h2 id="tocS_DeleteTrafficPolicyInstanceRequest">DeleteTrafficPolicyInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficpolicyinstancerequest"></a>
<a id="schema_DeleteTrafficPolicyInstanceRequest"></a>
<a id="tocSdeletetrafficpolicyinstancerequest"></a>
<a id="tocsdeletetrafficpolicyinstancerequest"></a>

```json
{}
```

A request to delete a specified traffic policy instance.

<h2 id="tocS_DeleteTrafficPolicyRequest">DeleteTrafficPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrafficpolicyrequest"></a>
<a id="schema_DeleteTrafficPolicyRequest"></a>
<a id="tocSdeletetrafficpolicyrequest"></a>
<a id="tocsdeletetrafficpolicyrequest"></a>

```json
{}
```

A request to delete a specified traffic policy version.

<h2 id="tocS_DeleteVPCAssociationAuthorizationRequest">DeleteVPCAssociationAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcassociationauthorizationrequest"></a>
<a id="schema_DeleteVPCAssociationAuthorizationRequest"></a>
<a id="tocSdeletevpcassociationauthorizationrequest"></a>
<a id="tocsdeletevpcassociationauthorizationrequest"></a>

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  }
}
```

A complex type that contains information about the request to remove authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPC|object|true|none|none|

<h2 id="tocS_DimensionField">DimensionField</h2>
<!-- backwards compatibility -->
<a id="schemadimensionfield"></a>
<a id="schema_DimensionField"></a>
<a id="tocSdimensionfield"></a>
<a id="tocsdimensionfield"></a>

```json
"string"
```

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_DisableHostedZoneDNSSECRequest">DisableHostedZoneDNSSECRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablehostedzonednssecrequest"></a>
<a id="schema_DisableHostedZoneDNSSECRequest"></a>
<a id="tocSdisablehostedzonednssecrequest"></a>
<a id="tocsdisablehostedzonednssecrequest"></a>

```json
{}
```

<h2 id="tocS_DisassociateVPCComment">DisassociateVPCComment</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatevpccomment"></a>
<a id="schema_DisassociateVPCComment"></a>
<a id="tocSdisassociatevpccomment"></a>
<a id="tocsdisassociatevpccomment"></a>

```json
"string"
```

<h2 id="tocS_DisassociateVPCFromHostedZoneRequest">DisassociateVPCFromHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatevpcfromhostedzonerequest"></a>
<a id="schema_DisassociateVPCFromHostedZoneRequest"></a>
<a id="tocSdisassociatevpcfromhostedzonerequest"></a>
<a id="tocsdisassociatevpcfromhostedzonerequest"></a>

```json
{
  "VPC": {
    "VPCRegion": {},
    "VPCId": "string"
  },
  "Comment": {}
}
```

A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPC|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_EnableHostedZoneDNSSECRequest">EnableHostedZoneDNSSECRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablehostedzonednssecrequest"></a>
<a id="schema_EnableHostedZoneDNSSECRequest"></a>
<a id="tocSenablehostedzonednssecrequest"></a>
<a id="tocsenablehostedzonednssecrequest"></a>

```json
{}
```

<h2 id="tocS_GeoLocationContinentCode">GeoLocationContinentCode</h2>
<!-- backwards compatibility -->
<a id="schemageolocationcontinentcode"></a>
<a id="schema_GeoLocationContinentCode"></a>
<a id="tocSgeolocationcontinentcode"></a>
<a id="tocsgeolocationcontinentcode"></a>

```json
"st"
```

<h2 id="tocS_GeoLocationCountryCode">GeoLocationCountryCode</h2>
<!-- backwards compatibility -->
<a id="schemageolocationcountrycode"></a>
<a id="schema_GeoLocationCountryCode"></a>
<a id="tocSgeolocationcountrycode"></a>
<a id="tocsgeolocationcountrycode"></a>

```json
"st"
```

<h2 id="tocS_GeoLocationSubdivisionCode">GeoLocationSubdivisionCode</h2>
<!-- backwards compatibility -->
<a id="schemageolocationsubdivisioncode"></a>
<a id="schema_GeoLocationSubdivisionCode"></a>
<a id="tocSgeolocationsubdivisioncode"></a>
<a id="tocsgeolocationsubdivisioncode"></a>

```json
"str"
```

<h2 id="tocS_GeoLocation">GeoLocation</h2>
<!-- backwards compatibility -->
<a id="schemageolocation"></a>
<a id="schema_GeoLocation"></a>
<a id="tocSgeolocation"></a>
<a id="tocsgeolocation"></a>

```json
{
  "ContinentCode": {},
  "CountryCode": {},
  "SubdivisionCode": {}
}
```

A complex type that contains information about a geographic location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinentCode|object|false|none|none|
|CountryCode|object|false|none|none|
|SubdivisionCode|object|false|none|none|

<h2 id="tocS_GeoLocationContinentName">GeoLocationContinentName</h2>
<!-- backwards compatibility -->
<a id="schemageolocationcontinentname"></a>
<a id="schema_GeoLocationContinentName"></a>
<a id="tocSgeolocationcontinentname"></a>
<a id="tocsgeolocationcontinentname"></a>

```json
"string"
```

<h2 id="tocS_GeoLocationCountryName">GeoLocationCountryName</h2>
<!-- backwards compatibility -->
<a id="schemageolocationcountryname"></a>
<a id="schema_GeoLocationCountryName"></a>
<a id="tocSgeolocationcountryname"></a>
<a id="tocsgeolocationcountryname"></a>

```json
"string"
```

<h2 id="tocS_GeoLocationSubdivisionName">GeoLocationSubdivisionName</h2>
<!-- backwards compatibility -->
<a id="schemageolocationsubdivisionname"></a>
<a id="schema_GeoLocationSubdivisionName"></a>
<a id="tocSgeolocationsubdivisionname"></a>
<a id="tocsgeolocationsubdivisionname"></a>

```json
"string"
```

<h2 id="tocS_GeoLocationDetails">GeoLocationDetails</h2>
<!-- backwards compatibility -->
<a id="schemageolocationdetails"></a>
<a id="schema_GeoLocationDetails"></a>
<a id="tocSgeolocationdetails"></a>
<a id="tocsgeolocationdetails"></a>

```json
{
  "ContinentCode": {},
  "ContinentName": {},
  "CountryCode": {},
  "CountryName": {},
  "SubdivisionCode": {},
  "SubdivisionName": {}
}
```

A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinentCode|object|false|none|none|
|ContinentName|object|false|none|none|
|CountryCode|object|false|none|none|
|CountryName|object|false|none|none|
|SubdivisionCode|object|false|none|none|
|SubdivisionName|object|false|none|none|

<h2 id="tocS_GeoLocationDetailsList">GeoLocationDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemageolocationdetailslist"></a>
<a id="schema_GeoLocationDetailsList"></a>
<a id="tocSgeolocationdetailslist"></a>
<a id="tocsgeolocationdetailslist"></a>

```json
[
  {
    "ContinentCode": {},
    "ContinentName": {},
    "CountryCode": {},
    "CountryName": {},
    "SubdivisionCode": {},
    "SubdivisionName": {}
  }
]
```

<h2 id="tocS_GetAccountLimitRequest">GetAccountLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountlimitrequest"></a>
<a id="schema_GetAccountLimitRequest"></a>
<a id="tocSgetaccountlimitrequest"></a>
<a id="tocsgetaccountlimitrequest"></a>

```json
{}
```

A complex type that contains information about the request to create a hosted zone.

<h2 id="tocS_UsageCount">UsageCount</h2>
<!-- backwards compatibility -->
<a id="schemausagecount"></a>
<a id="schema_UsageCount"></a>
<a id="tocSusagecount"></a>
<a id="tocsusagecount"></a>

```json
0
```

<h2 id="tocS_GetChangeRequest">GetChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetchangerequest"></a>
<a id="schema_GetChangeRequest"></a>
<a id="tocSgetchangerequest"></a>
<a id="tocsgetchangerequest"></a>

```json
{}
```

The input for a GetChange request.

<h2 id="tocS_GetCheckerIpRangesRequest">GetCheckerIpRangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcheckeriprangesrequest"></a>
<a id="schema_GetCheckerIpRangesRequest"></a>
<a id="tocSgetcheckeriprangesrequest"></a>
<a id="tocsgetcheckeriprangesrequest"></a>

```json
{}
```

Empty request.

<h2 id="tocS_GetDNSSECRequest">GetDNSSECRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdnssecrequest"></a>
<a id="schema_GetDNSSECRequest"></a>
<a id="tocSgetdnssecrequest"></a>
<a id="tocsgetdnssecrequest"></a>

```json
{}
```

<h2 id="tocS_KeySigningKeys">KeySigningKeys</h2>
<!-- backwards compatibility -->
<a id="schemakeysigningkeys"></a>
<a id="schema_KeySigningKeys"></a>
<a id="tocSkeysigningkeys"></a>
<a id="tocskeysigningkeys"></a>

```json
[
  {
    "Name": {},
    "KmsArn": {},
    "Flag": {},
    "SigningAlgorithmMnemonic": {},
    "SigningAlgorithmType": {},
    "DigestAlgorithmMnemonic": {},
    "DigestAlgorithmType": {},
    "KeyTag": {},
    "DigestValue": {},
    "PublicKey": {},
    "DSRecord": {},
    "DNSKEYRecord": {},
    "Status": {},
    "StatusMessage": {},
    "CreatedDate": {},
    "LastModifiedDate": {}
  }
]
```

<h2 id="tocS_GetGeoLocationRequest">GetGeoLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgeolocationrequest"></a>
<a id="schema_GetGeoLocationRequest"></a>
<a id="tocSgetgeolocationrequest"></a>
<a id="tocsgetgeolocationrequest"></a>

```json
{}
```

A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.

<h2 id="tocS_GetHealthCheckCountRequest">GetHealthCheckCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckcountrequest"></a>
<a id="schema_GetHealthCheckCountRequest"></a>
<a id="tocSgethealthcheckcountrequest"></a>
<a id="tocsgethealthcheckcountrequest"></a>

```json
{}
```

A request for the number of health checks that are associated with the current Amazon Web Services account.

<h2 id="tocS_HealthCheckCount">HealthCheckCount</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckcount"></a>
<a id="schema_HealthCheckCount"></a>
<a id="tocShealthcheckcount"></a>
<a id="tocshealthcheckcount"></a>

```json
0
```

<h2 id="tocS_GetHealthCheckLastFailureReasonRequest">GetHealthCheckLastFailureReasonRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethealthchecklastfailurereasonrequest"></a>
<a id="schema_GetHealthCheckLastFailureReasonRequest"></a>
<a id="tocSgethealthchecklastfailurereasonrequest"></a>
<a id="tocsgethealthchecklastfailurereasonrequest"></a>

```json
{}
```

A request for the reason that a health check failed most recently.

<h2 id="tocS_HealthCheckObservations">HealthCheckObservations</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckobservations"></a>
<a id="schema_HealthCheckObservations"></a>
<a id="tocShealthcheckobservations"></a>
<a id="tocshealthcheckobservations"></a>

```json
[
  {
    "Region": {},
    "IPAddress": {},
    "StatusReport": {
      "Status": {},
      "CheckedTime": {}
    }
  }
]
```

<h2 id="tocS_GetHealthCheckRequest">GetHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckrequest"></a>
<a id="schema_GetHealthCheckRequest"></a>
<a id="tocSgethealthcheckrequest"></a>
<a id="tocsgethealthcheckrequest"></a>

```json
{}
```

A request to get information about a specified health check.

<h2 id="tocS_GetHealthCheckStatusRequest">GetHealthCheckStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethealthcheckstatusrequest"></a>
<a id="schema_GetHealthCheckStatusRequest"></a>
<a id="tocSgethealthcheckstatusrequest"></a>
<a id="tocsgethealthcheckstatusrequest"></a>

```json
{}
```

A request to get the status for a health check.

<h2 id="tocS_GetHostedZoneCountRequest">GetHostedZoneCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzonecountrequest"></a>
<a id="schema_GetHostedZoneCountRequest"></a>
<a id="tocSgethostedzonecountrequest"></a>
<a id="tocsgethostedzonecountrequest"></a>

```json
{}
```

A request to retrieve a count of all the hosted zones that are associated with the current Amazon Web Services account.

<h2 id="tocS_HostedZoneCount">HostedZoneCount</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonecount"></a>
<a id="schema_HostedZoneCount"></a>
<a id="tocShostedzonecount"></a>
<a id="tocshostedzonecount"></a>

```json
0
```

<h2 id="tocS_HostedZoneLimitType">HostedZoneLimitType</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonelimittype"></a>
<a id="schema_HostedZoneLimitType"></a>
<a id="tocShostedzonelimittype"></a>
<a id="tocshostedzonelimittype"></a>

```json
"MAX_RRSETS_BY_ZONE"
```

<h2 id="tocS_GetHostedZoneLimitRequest">GetHostedZoneLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzonelimitrequest"></a>
<a id="schema_GetHostedZoneLimitRequest"></a>
<a id="tocSgethostedzonelimitrequest"></a>
<a id="tocsgethostedzonelimitrequest"></a>

```json
{}
```

A complex type that contains information about the request to create a hosted zone.

<h2 id="tocS_HostedZoneLimit">HostedZoneLimit</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonelimit"></a>
<a id="schema_HostedZoneLimit"></a>
<a id="tocShostedzonelimit"></a>
<a id="tocshostedzonelimit"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

A complex type that contains the type of limit that you specified in the request and the current value for that limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_GetHostedZoneRequest">GetHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemagethostedzonerequest"></a>
<a id="schema_GetHostedZoneRequest"></a>
<a id="tocSgethostedzonerequest"></a>
<a id="tocsgethostedzonerequest"></a>

```json
{}
```

A request to get information about a specified hosted zone.

<h2 id="tocS_VPCs">VPCs</h2>
<!-- backwards compatibility -->
<a id="schemavpcs"></a>
<a id="schema_VPCs"></a>
<a id="tocSvpcs"></a>
<a id="tocsvpcs"></a>

```json
[
  {
    "VPCRegion": {},
    "VPCId": "string"
  }
]
```

(Private hosted zones only) A list of <code>VPC</code> elements.

<h2 id="tocS_GetQueryLoggingConfigRequest">GetQueryLoggingConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetqueryloggingconfigrequest"></a>
<a id="schema_GetQueryLoggingConfigRequest"></a>
<a id="tocSgetqueryloggingconfigrequest"></a>
<a id="tocsgetqueryloggingconfigrequest"></a>

```json
{}
```

<h2 id="tocS_ReusableDelegationSetLimitType">ReusableDelegationSetLimitType</h2>
<!-- backwards compatibility -->
<a id="schemareusabledelegationsetlimittype"></a>
<a id="schema_ReusableDelegationSetLimitType"></a>
<a id="tocSreusabledelegationsetlimittype"></a>
<a id="tocsreusabledelegationsetlimittype"></a>

```json
"MAX_ZONES_BY_REUSABLE_DELEGATION_SET"
```

<h2 id="tocS_GetReusableDelegationSetLimitRequest">GetReusableDelegationSetLimitRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreusabledelegationsetlimitrequest"></a>
<a id="schema_GetReusableDelegationSetLimitRequest"></a>
<a id="tocSgetreusabledelegationsetlimitrequest"></a>
<a id="tocsgetreusabledelegationsetlimitrequest"></a>

```json
{}
```

A complex type that contains information about the request to create a hosted zone.

<h2 id="tocS_ReusableDelegationSetLimit">ReusableDelegationSetLimit</h2>
<!-- backwards compatibility -->
<a id="schemareusabledelegationsetlimit"></a>
<a id="schema_ReusableDelegationSetLimit"></a>
<a id="tocSreusabledelegationsetlimit"></a>
<a id="tocsreusabledelegationsetlimit"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

A complex type that contains the type of limit that you specified in the request and the current value for that limit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_GetReusableDelegationSetRequest">GetReusableDelegationSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetreusabledelegationsetrequest"></a>
<a id="schema_GetReusableDelegationSetRequest"></a>
<a id="tocSgetreusabledelegationsetrequest"></a>
<a id="tocsgetreusabledelegationsetrequest"></a>

```json
{}
```

A request to get information about a specified reusable delegation set.

<h2 id="tocS_GetTrafficPolicyInstanceCountRequest">GetTrafficPolicyInstanceCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyinstancecountrequest"></a>
<a id="schema_GetTrafficPolicyInstanceCountRequest"></a>
<a id="tocSgettrafficpolicyinstancecountrequest"></a>
<a id="tocsgettrafficpolicyinstancecountrequest"></a>

```json
{}
```

Request to get the number of traffic policy instances that are associated with the current Amazon Web Services account.

<h2 id="tocS_TrafficPolicyInstanceCount">TrafficPolicyInstanceCount</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstancecount"></a>
<a id="schema_TrafficPolicyInstanceCount"></a>
<a id="tocStrafficpolicyinstancecount"></a>
<a id="tocstrafficpolicyinstancecount"></a>

```json
0
```

<h2 id="tocS_GetTrafficPolicyInstanceRequest">GetTrafficPolicyInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyinstancerequest"></a>
<a id="schema_GetTrafficPolicyInstanceRequest"></a>
<a id="tocSgettrafficpolicyinstancerequest"></a>
<a id="tocsgettrafficpolicyinstancerequest"></a>

```json
{}
```

Gets information about a specified traffic policy instance.

<h2 id="tocS_GetTrafficPolicyRequest">GetTrafficPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettrafficpolicyrequest"></a>
<a id="schema_GetTrafficPolicyRequest"></a>
<a id="tocSgettrafficpolicyrequest"></a>
<a id="tocsgettrafficpolicyrequest"></a>

```json
{}
```

Gets information about a specific traffic policy version.

<h2 id="tocS_LinkedService">LinkedService</h2>
<!-- backwards compatibility -->
<a id="schemalinkedservice"></a>
<a id="schema_LinkedService"></a>
<a id="tocSlinkedservice"></a>
<a id="tocslinkedservice"></a>

```json
{
  "ServicePrincipal": {},
  "Description": {}
}
```

If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServicePrincipal|object|false|none|none|
|Description|object|false|none|none|

<h2 id="tocS_HealthCheckVersion">HealthCheckVersion</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckversion"></a>
<a id="schema_HealthCheckVersion"></a>
<a id="tocShealthcheckversion"></a>
<a id="tocshealthcheckversion"></a>

```json
1
```

<h2 id="tocS_StatusReport">StatusReport</h2>
<!-- backwards compatibility -->
<a id="schemastatusreport"></a>
<a id="schema_StatusReport"></a>
<a id="tocSstatusreport"></a>
<a id="tocsstatusreport"></a>

```json
{
  "Status": {},
  "CheckedTime": {}
}
```

A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|CheckedTime|object|false|none|none|

<h2 id="tocS_HealthCheckObservation">HealthCheckObservation</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckobservation"></a>
<a id="schema_HealthCheckObservation"></a>
<a id="tocShealthcheckobservation"></a>
<a id="tocshealthcheckobservation"></a>

```json
{
  "Region": {},
  "IPAddress": {},
  "StatusReport": {
    "Status": {},
    "CheckedTime": {}
  }
}
```

A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Region|object|false|none|none|
|IPAddress|object|false|none|none|
|StatusReport|object|false|none|none|

<h2 id="tocS_HealthChecks">HealthChecks</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecks"></a>
<a id="schema_HealthChecks"></a>
<a id="tocShealthchecks"></a>
<a id="tocshealthchecks"></a>

```json
[
  {
    "Id": {},
    "CallerReference": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    },
    "HealthCheckConfig": {
      "IPAddress": {},
      "Port": {},
      "Type": {},
      "ResourcePath": {},
      "FullyQualifiedDomainName": {},
      "SearchString": {},
      "RequestInterval": {},
      "FailureThreshold": {},
      "MeasureLatency": {},
      "Inverted": {},
      "Disabled": {},
      "HealthThreshold": {},
      "ChildHealthChecks": {},
      "EnableSNI": {},
      "Regions": {},
      "AlarmIdentifier": {
        "Region": {},
        "Name": {}
      },
      "InsufficientDataHealthStatus": {},
      "RoutingControlArn": {}
    },
    "HealthCheckVersion": {},
    "CloudWatchAlarmConfiguration": {
      "EvaluationPeriods": {},
      "Threshold": {},
      "ComparisonOperator": {},
      "Period": {},
      "MetricName": {},
      "Namespace": {},
      "Statistic": {},
      "Dimensions": {}
    }
  }
]
```

<h2 id="tocS_HostedZoneRRSetCount">HostedZoneRRSetCount</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonerrsetcount"></a>
<a id="schema_HostedZoneRRSetCount"></a>
<a id="tocShostedzonerrsetcount"></a>
<a id="tocshostedzonerrsetcount"></a>

```json
0
```

<h2 id="tocS_HostedZoneOwningService">HostedZoneOwningService</h2>
<!-- backwards compatibility -->
<a id="schemahostedzoneowningservice"></a>
<a id="schema_HostedZoneOwningService"></a>
<a id="tocShostedzoneowningservice"></a>
<a id="tocshostedzoneowningservice"></a>

```json
"string"
```

<h2 id="tocS_HostedZoneOwner">HostedZoneOwner</h2>
<!-- backwards compatibility -->
<a id="schemahostedzoneowner"></a>
<a id="schema_HostedZoneOwner"></a>
<a id="tocShostedzoneowner"></a>
<a id="tocshostedzoneowner"></a>

```json
{
  "OwningAccount": {},
  "OwningService": {}
}
```

A complex type that identifies a hosted zone that a specified Amazon VPC is associated with and the owner of the hosted zone. If there is a value for <code>OwningAccount</code>, there is no value for <code>OwningService</code>, and vice versa.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwningAccount|object|false|none|none|
|OwningService|object|false|none|none|

<h2 id="tocS_HostedZoneSummary">HostedZoneSummary</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonesummary"></a>
<a id="schema_HostedZoneSummary"></a>
<a id="tocShostedzonesummary"></a>
<a id="tocshostedzonesummary"></a>

```json
{
  "HostedZoneId": {},
  "Name": {},
  "Owner": {
    "OwningAccount": {},
    "OwningService": {}
  }
}
```

In the response to a <code>ListHostedZonesByVPC</code> request, the <code>HostedZoneSummaries</code> element contains one <code>HostedZoneSummary</code> element for each hosted zone that the specified Amazon VPC is associated with. Each <code>HostedZoneSummary</code> element contains the hosted zone name and ID, and information about who owns the hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HostedZoneId|object|true|none|none|
|Name|object|true|none|none|
|Owner|object|true|none|none|

<h2 id="tocS_HostedZoneSummaries">HostedZoneSummaries</h2>
<!-- backwards compatibility -->
<a id="schemahostedzonesummaries"></a>
<a id="schema_HostedZoneSummaries"></a>
<a id="tocShostedzonesummaries"></a>
<a id="tocshostedzonesummaries"></a>

```json
[
  {
    "HostedZoneId": {},
    "Name": {},
    "Owner": {
      "OwningAccount": {},
      "OwningService": {}
    }
  }
]
```

<h2 id="tocS_HostedZones">HostedZones</h2>
<!-- backwards compatibility -->
<a id="schemahostedzones"></a>
<a id="schema_HostedZones"></a>
<a id="tocShostedzones"></a>
<a id="tocshostedzones"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "CallerReference": {},
    "Config": {
      "Comment": {},
      "PrivateZone": {}
    },
    "ResourceRecordSetCount": {},
    "LinkedService": {
      "ServicePrincipal": {},
      "Description": {}
    }
  }
]
```

<h2 id="tocS_SigningKeyInteger">SigningKeyInteger</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeyinteger"></a>
<a id="schema_SigningKeyInteger"></a>
<a id="tocSsigningkeyinteger"></a>
<a id="tocssigningkeyinteger"></a>

```json
0
```

<h2 id="tocS_SigningKeyTag">SigningKeyTag</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeytag"></a>
<a id="schema_SigningKeyTag"></a>
<a id="tocSsigningkeytag"></a>
<a id="tocssigningkeytag"></a>

```json
0
```

<h2 id="tocS_ServicePrincipal">ServicePrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaserviceprincipal"></a>
<a id="schema_ServicePrincipal"></a>
<a id="tocSserviceprincipal"></a>
<a id="tocsserviceprincipal"></a>

```json
"string"
```

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

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
"string"
```

<h2 id="tocS_ListCidrBlocksRequest">ListCidrBlocksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrblocksrequest"></a>
<a id="schema_ListCidrBlocksRequest"></a>
<a id="tocSlistcidrblocksrequest"></a>
<a id="tocslistcidrblocksrequest"></a>

```json
{}
```

<h2 id="tocS_ListCidrCollectionsRequest">ListCidrCollectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrcollectionsrequest"></a>
<a id="schema_ListCidrCollectionsRequest"></a>
<a id="tocSlistcidrcollectionsrequest"></a>
<a id="tocslistcidrcollectionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListCidrLocationsRequest">ListCidrLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcidrlocationsrequest"></a>
<a id="schema_ListCidrLocationsRequest"></a>
<a id="tocSlistcidrlocationsrequest"></a>
<a id="tocslistcidrlocationsrequest"></a>

```json
{}
```

<h2 id="tocS_LocationSummaries">LocationSummaries</h2>
<!-- backwards compatibility -->
<a id="schemalocationsummaries"></a>
<a id="schema_LocationSummaries"></a>
<a id="tocSlocationsummaries"></a>
<a id="tocslocationsummaries"></a>

```json
[
  {
    "LocationName": {}
  }
]
```

<h2 id="tocS_PageMaxItems">PageMaxItems</h2>
<!-- backwards compatibility -->
<a id="schemapagemaxitems"></a>
<a id="schema_PageMaxItems"></a>
<a id="tocSpagemaxitems"></a>
<a id="tocspagemaxitems"></a>

```json
"string"
```

<h2 id="tocS_ListGeoLocationsRequest">ListGeoLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgeolocationsrequest"></a>
<a id="schema_ListGeoLocationsRequest"></a>
<a id="tocSlistgeolocationsrequest"></a>
<a id="tocslistgeolocationsrequest"></a>

```json
{}
```

A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets.

<h2 id="tocS_PageTruncated">PageTruncated</h2>
<!-- backwards compatibility -->
<a id="schemapagetruncated"></a>
<a id="schema_PageTruncated"></a>
<a id="tocSpagetruncated"></a>
<a id="tocspagetruncated"></a>

```json
true
```

<h2 id="tocS_PageMarker">PageMarker</h2>
<!-- backwards compatibility -->
<a id="schemapagemarker"></a>
<a id="schema_PageMarker"></a>
<a id="tocSpagemarker"></a>
<a id="tocspagemarker"></a>

```json
"string"
```

<h2 id="tocS_ListHealthChecksRequest">ListHealthChecksRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthealthchecksrequest"></a>
<a id="schema_ListHealthChecksRequest"></a>
<a id="tocSlisthealthchecksrequest"></a>
<a id="tocslisthealthchecksrequest"></a>

```json
{}
```

A request to retrieve a list of the health checks that are associated with the current Amazon Web Services account.

<h2 id="tocS_ListHostedZonesByNameRequest">ListHostedZonesByNameRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesbynamerequest"></a>
<a id="schema_ListHostedZonesByNameRequest"></a>
<a id="tocSlisthostedzonesbynamerequest"></a>
<a id="tocslisthostedzonesbynamerequest"></a>

```json
{}
```

Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account in ASCII order by domain name.

<h2 id="tocS_ListHostedZonesByVPCRequest">ListHostedZonesByVPCRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesbyvpcrequest"></a>
<a id="schema_ListHostedZonesByVPCRequest"></a>
<a id="tocSlisthostedzonesbyvpcrequest"></a>
<a id="tocslisthostedzonesbyvpcrequest"></a>

```json
{}
```

Lists all the private hosted zones that a specified VPC is associated with, regardless of which Amazon Web Services account created the hosted zones.

<h2 id="tocS_ListHostedZonesRequest">ListHostedZonesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisthostedzonesrequest"></a>
<a id="schema_ListHostedZonesRequest"></a>
<a id="tocSlisthostedzonesrequest"></a>
<a id="tocslisthostedzonesrequest"></a>

```json
{}
```

A request to retrieve a list of the public and private hosted zones that are associated with the current Amazon Web Services account.

<h2 id="tocS_ListQueryLoggingConfigsRequest">ListQueryLoggingConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistqueryloggingconfigsrequest"></a>
<a id="schema_ListQueryLoggingConfigsRequest"></a>
<a id="tocSlistqueryloggingconfigsrequest"></a>
<a id="tocslistqueryloggingconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_QueryLoggingConfigs">QueryLoggingConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaqueryloggingconfigs"></a>
<a id="schema_QueryLoggingConfigs"></a>
<a id="tocSqueryloggingconfigs"></a>
<a id="tocsqueryloggingconfigs"></a>

```json
[
  {
    "Id": {},
    "HostedZoneId": {},
    "CloudWatchLogsLogGroupArn": {}
  }
]
```

<h2 id="tocS_RRType">RRType</h2>
<!-- backwards compatibility -->
<a id="schemarrtype"></a>
<a id="schema_RRType"></a>
<a id="tocSrrtype"></a>
<a id="tocsrrtype"></a>

```json
"SOA"
```

<h2 id="tocS_ResourceRecordSetIdentifier">ResourceRecordSetIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetidentifier"></a>
<a id="schema_ResourceRecordSetIdentifier"></a>
<a id="tocSresourcerecordsetidentifier"></a>
<a id="tocsresourcerecordsetidentifier"></a>

```json
"string"
```

<h2 id="tocS_ListResourceRecordSetsRequest">ListResourceRecordSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresourcerecordsetsrequest"></a>
<a id="schema_ListResourceRecordSetsRequest"></a>
<a id="tocSlistresourcerecordsetsrequest"></a>
<a id="tocslistresourcerecordsetsrequest"></a>

```json
{}
```

A request for the resource record sets that are associated with a specified hosted zone.

<h2 id="tocS_ResourceRecordSets">ResourceRecordSets</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsets"></a>
<a id="schema_ResourceRecordSets"></a>
<a id="tocSresourcerecordsets"></a>
<a id="tocsresourcerecordsets"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "SetIdentifier": {},
    "Weight": {},
    "Region": {},
    "GeoLocation": {
      "ContinentCode": {},
      "CountryCode": {},
      "SubdivisionCode": {}
    },
    "Failover": {},
    "MultiValueAnswer": {},
    "TTL": {},
    "ResourceRecords": {},
    "AliasTarget": {
      "HostedZoneId": {},
      "DNSName": {},
      "EvaluateTargetHealth": {}
    },
    "HealthCheckId": {},
    "TrafficPolicyInstanceId": {},
    "CidrRoutingConfig": {
      "CollectionId": {},
      "LocationName": {}
    }
  }
]
```

<h2 id="tocS_ListReusableDelegationSetsRequest">ListReusableDelegationSetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistreusabledelegationsetsrequest"></a>
<a id="schema_ListReusableDelegationSetsRequest"></a>
<a id="tocSlistreusabledelegationsetsrequest"></a>
<a id="tocslistreusabledelegationsetsrequest"></a>

```json
{}
```

A request to get a list of the reusable delegation sets that are associated with the current Amazon Web Services account.

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

A complex type containing information about a request for a list of the tags that are associated with an individual resource.

<h2 id="tocS_ResourceTagSet">ResourceTagSet</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagset"></a>
<a id="schema_ResourceTagSet"></a>
<a id="tocSresourcetagset"></a>
<a id="tocsresourcetagset"></a>

```json
{
  "ResourceType": {},
  "ResourceId": {},
  "Tags": {}
}
```

A complex type containing a resource and its associated tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceType|object|false|none|none|
|ResourceId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_TagResourceIdList">TagResourceIdList</h2>
<!-- backwards compatibility -->
<a id="schematagresourceidlist"></a>
<a id="schema_TagResourceIdList"></a>
<a id="tocStagresourceidlist"></a>
<a id="tocstagresourceidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ListTagsForResourcesRequest">ListTagsForResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcesrequest"></a>
<a id="schema_ListTagsForResourcesRequest"></a>
<a id="tocSlisttagsforresourcesrequest"></a>
<a id="tocslisttagsforresourcesrequest"></a>

```json
{
  "ResourceIds": {}
}
```

A complex type that contains information about the health checks or hosted zones for which you want to list tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceIds|object|true|none|none|

<h2 id="tocS_ResourceTagSetList">ResourceTagSetList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagsetlist"></a>
<a id="schema_ResourceTagSetList"></a>
<a id="tocSresourcetagsetlist"></a>
<a id="tocsresourcetagsetlist"></a>

```json
[
  {
    "ResourceType": {},
    "ResourceId": {},
    "Tags": {}
  }
]
```

<h2 id="tocS_ListTrafficPoliciesRequest">ListTrafficPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpoliciesrequest"></a>
<a id="schema_ListTrafficPoliciesRequest"></a>
<a id="tocSlisttrafficpoliciesrequest"></a>
<a id="tocslisttrafficpoliciesrequest"></a>

```json
{}
```

A complex type that contains the information about the request to list the traffic policies that are associated with the current Amazon Web Services account.

<h2 id="tocS_TrafficPolicySummaries">TrafficPolicySummaries</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicysummaries"></a>
<a id="schema_TrafficPolicySummaries"></a>
<a id="tocStrafficpolicysummaries"></a>
<a id="tocstrafficpolicysummaries"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "Type": {},
    "LatestVersion": {},
    "TrafficPolicyCount": {}
  }
]
```

<h2 id="tocS_ListTrafficPolicyInstancesByHostedZoneRequest">ListTrafficPolicyInstancesByHostedZoneRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesbyhostedzonerequest"></a>
<a id="schema_ListTrafficPolicyInstancesByHostedZoneRequest"></a>
<a id="tocSlisttrafficpolicyinstancesbyhostedzonerequest"></a>
<a id="tocslisttrafficpolicyinstancesbyhostedzonerequest"></a>

```json
{}
```

A request for the traffic policy instances that you created in a specified hosted zone.

<h2 id="tocS_TrafficPolicyInstances">TrafficPolicyInstances</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstances"></a>
<a id="schema_TrafficPolicyInstances"></a>
<a id="tocStrafficpolicyinstances"></a>
<a id="tocstrafficpolicyinstances"></a>

```json
[
  {
    "Id": {},
    "HostedZoneId": {},
    "Name": {},
    "TTL": {},
    "State": {},
    "Message": {},
    "TrafficPolicyId": {},
    "TrafficPolicyVersion": {},
    "TrafficPolicyType": {}
  }
]
```

<h2 id="tocS_ListTrafficPolicyInstancesByPolicyRequest">ListTrafficPolicyInstancesByPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesbypolicyrequest"></a>
<a id="schema_ListTrafficPolicyInstancesByPolicyRequest"></a>
<a id="tocSlisttrafficpolicyinstancesbypolicyrequest"></a>
<a id="tocslisttrafficpolicyinstancesbypolicyrequest"></a>

```json
{}
```

A complex type that contains the information about the request to list your traffic policy instances.

<h2 id="tocS_ListTrafficPolicyInstancesRequest">ListTrafficPolicyInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyinstancesrequest"></a>
<a id="schema_ListTrafficPolicyInstancesRequest"></a>
<a id="tocSlisttrafficpolicyinstancesrequest"></a>
<a id="tocslisttrafficpolicyinstancesrequest"></a>

```json
{}
```

A request to get information about the traffic policy instances that you created by using the current Amazon Web Services account.

<h2 id="tocS_TrafficPolicyVersionMarker">TrafficPolicyVersionMarker</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyversionmarker"></a>
<a id="schema_TrafficPolicyVersionMarker"></a>
<a id="tocStrafficpolicyversionmarker"></a>
<a id="tocstrafficpolicyversionmarker"></a>

```json
"stri"
```

<h2 id="tocS_ListTrafficPolicyVersionsRequest">ListTrafficPolicyVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrafficpolicyversionsrequest"></a>
<a id="schema_ListTrafficPolicyVersionsRequest"></a>
<a id="tocSlisttrafficpolicyversionsrequest"></a>
<a id="tocslisttrafficpolicyversionsrequest"></a>

```json
{}
```

A complex type that contains the information about the request to list your traffic policies.

<h2 id="tocS_TrafficPolicies">TrafficPolicies</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicies"></a>
<a id="schema_TrafficPolicies"></a>
<a id="tocStrafficpolicies"></a>
<a id="tocstrafficpolicies"></a>

```json
[
  {
    "Id": {},
    "Version": {},
    "Name": {},
    "Type": {},
    "Document": {},
    "Comment": {}
  }
]
```

<h2 id="tocS_ListVPCAssociationAuthorizationsRequest">ListVPCAssociationAuthorizationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcassociationauthorizationsrequest"></a>
<a id="schema_ListVPCAssociationAuthorizationsRequest"></a>
<a id="tocSlistvpcassociationauthorizationsrequest"></a>
<a id="tocslistvpcassociationauthorizationsrequest"></a>

```json
{}
```

A complex type that contains information about that can be associated with your hosted zone.

<h2 id="tocS_LocationSummary">LocationSummary</h2>
<!-- backwards compatibility -->
<a id="schemalocationsummary"></a>
<a id="schema_LocationSummary"></a>
<a id="tocSlocationsummary"></a>
<a id="tocslocationsummary"></a>

```json
{
  "LocationName": {}
}
```

A complex type that contains information about the CIDR location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationName|object|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_Nameserver">Nameserver</h2>
<!-- backwards compatibility -->
<a id="schemanameserver"></a>
<a id="schema_Nameserver"></a>
<a id="tocSnameserver"></a>
<a id="tocsnameserver"></a>

```json
"string"
```

<h2 id="tocS_RData">RData</h2>
<!-- backwards compatibility -->
<a id="schemardata"></a>
<a id="schema_RData"></a>
<a id="tocSrdata"></a>
<a id="tocsrdata"></a>

```json
"string"
```

<h2 id="tocS_RecordDataEntry">RecordDataEntry</h2>
<!-- backwards compatibility -->
<a id="schemarecorddataentry"></a>
<a id="schema_RecordDataEntry"></a>
<a id="tocSrecorddataentry"></a>
<a id="tocsrecorddataentry"></a>

```json
"string"
```

<p>A value that Amazon Route 53 returned for this resource record set. A <code>RecordDataEntry</code> element is one of the following:</p> <ul> <li> <p>For non-alias resource record sets, a <code>RecordDataEntry</code> element contains one value in the resource record set. If the resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> <li> <p>For multiple resource record sets that have the same name and type, which includes weighted, latency, geolocation, and failover, a <code>RecordDataEntry</code> element contains the value from the appropriate resource record set based on the request.</p> </li> <li> <p>For alias resource record sets that refer to Amazon Web Services resources other than another resource record set, the <code>RecordDataEntry</code> element contains an IP address or a domain name for the Amazon Web Services resource, depending on the type of resource.</p> </li> <li> <p>For alias resource record sets that refer to other resource record sets, a <code>RecordDataEntry</code> element contains one value from the referenced resource record set. If the referenced resource record set contains multiple values, the response includes one <code>RecordDataEntry</code> element for each value.</p> </li> </ul>

<h2 id="tocS_RecordData">RecordData</h2>
<!-- backwards compatibility -->
<a id="schemarecorddata"></a>
<a id="schema_RecordData"></a>
<a id="tocSrecorddata"></a>
<a id="tocsrecorddata"></a>

```json
[
  {}
]
```

<h2 id="tocS_ResettableElementNameList">ResettableElementNameList</h2>
<!-- backwards compatibility -->
<a id="schemaresettableelementnamelist"></a>
<a id="schema_ResettableElementNameList"></a>
<a id="tocSresettableelementnamelist"></a>
<a id="tocsresettableelementnamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ResourceRecord">ResourceRecord</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecord"></a>
<a id="schema_ResourceRecord"></a>
<a id="tocSresourcerecord"></a>
<a id="tocsresourcerecord"></a>

```json
{
  "Value": {}
}
```

<p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|true|none|none|

<h2 id="tocS_ResourceRecordSetWeight">ResourceRecordSetWeight</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetweight"></a>
<a id="schema_ResourceRecordSetWeight"></a>
<a id="tocSresourcerecordsetweight"></a>
<a id="tocsresourcerecordsetweight"></a>

```json
0
```

<h2 id="tocS_ResourceRecordSetRegion">ResourceRecordSetRegion</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetregion"></a>
<a id="schema_ResourceRecordSetRegion"></a>
<a id="tocSresourcerecordsetregion"></a>
<a id="tocsresourcerecordsetregion"></a>

```json
"us-east-1"
```

<h2 id="tocS_ResourceRecordSetFailover">ResourceRecordSetFailover</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetfailover"></a>
<a id="schema_ResourceRecordSetFailover"></a>
<a id="tocSresourcerecordsetfailover"></a>
<a id="tocsresourcerecordsetfailover"></a>

```json
"PRIMARY"
```

<h2 id="tocS_ResourceRecordSetMultiValueAnswer">ResourceRecordSetMultiValueAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecordsetmultivalueanswer"></a>
<a id="schema_ResourceRecordSetMultiValueAnswer"></a>
<a id="tocSresourcerecordsetmultivalueanswer"></a>
<a id="tocsresourcerecordsetmultivalueanswer"></a>

```json
true
```

<h2 id="tocS_ResourceRecords">ResourceRecords</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerecords"></a>
<a id="schema_ResourceRecords"></a>
<a id="tocSresourcerecords"></a>
<a id="tocsresourcerecords"></a>

```json
[
  {
    "Value": {}
  }
]
```

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"string"
```

<h2 id="tocS_SubnetMask">SubnetMask</h2>
<!-- backwards compatibility -->
<a id="schemasubnetmask"></a>
<a id="schema_SubnetMask"></a>
<a id="tocSsubnetmask"></a>
<a id="tocssubnetmask"></a>

```json
"str"
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

<h2 id="tocS_TestDNSAnswerRequest">TestDNSAnswerRequest</h2>
<!-- backwards compatibility -->
<a id="schematestdnsanswerrequest"></a>
<a id="schema_TestDNSAnswerRequest"></a>
<a id="tocStestdnsanswerrequest"></a>
<a id="tocstestdnsanswerrequest"></a>

```json
{}
```

Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask.

<h2 id="tocS_TransportProtocol">TransportProtocol</h2>
<!-- backwards compatibility -->
<a id="schematransportprotocol"></a>
<a id="schema_TransportProtocol"></a>
<a id="tocStransportprotocol"></a>
<a id="tocstransportprotocol"></a>

```json
"string"
```

<h2 id="tocS_TrafficPolicyInstanceState">TrafficPolicyInstanceState</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicyinstancestate"></a>
<a id="schema_TrafficPolicyInstanceState"></a>
<a id="tocStrafficpolicyinstancestate"></a>
<a id="tocstrafficpolicyinstancestate"></a>

```json
"string"
```

<h2 id="tocS_TrafficPolicySummary">TrafficPolicySummary</h2>
<!-- backwards compatibility -->
<a id="schematrafficpolicysummary"></a>
<a id="schema_TrafficPolicySummary"></a>
<a id="tocStrafficpolicysummary"></a>
<a id="tocstrafficpolicysummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "Type": {},
  "LatestVersion": {},
  "TrafficPolicyCount": {}
}
```

A complex type that contains information about the latest version of one traffic policy that is associated with the current Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|true|none|none|
|Type|object|true|none|none|
|LatestVersion|object|true|none|none|
|TrafficPolicyCount|object|true|none|none|

<h2 id="tocS_UpdateHealthCheckRequest">UpdateHealthCheckRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehealthcheckrequest"></a>
<a id="schema_UpdateHealthCheckRequest"></a>
<a id="tocSupdatehealthcheckrequest"></a>
<a id="tocsupdatehealthcheckrequest"></a>

```json
{
  "HealthCheckVersion": {},
  "IPAddress": {},
  "Port": {},
  "ResourcePath": {},
  "FullyQualifiedDomainName": {},
  "SearchString": {},
  "FailureThreshold": {},
  "Inverted": {},
  "Disabled": {},
  "HealthThreshold": {},
  "ChildHealthChecks": {},
  "EnableSNI": {},
  "Regions": {},
  "AlarmIdentifier": {
    "Region": {},
    "Name": {}
  },
  "InsufficientDataHealthStatus": {},
  "ResetElements": {}
}
```

A complex type that contains information about a request to update a health check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HealthCheckVersion|object|false|none|none|
|IPAddress|object|false|none|none|
|Port|object|false|none|none|
|ResourcePath|object|false|none|none|
|FullyQualifiedDomainName|object|false|none|none|
|SearchString|object|false|none|none|
|FailureThreshold|object|false|none|none|
|Inverted|object|false|none|none|
|Disabled|object|false|none|none|
|HealthThreshold|object|false|none|none|
|ChildHealthChecks|object|false|none|none|
|EnableSNI|object|false|none|none|
|Regions|object|false|none|none|
|AlarmIdentifier|object|false|none|none|
|InsufficientDataHealthStatus|object|false|none|none|
|ResetElements|object|false|none|none|

<h2 id="tocS_UpdateHostedZoneCommentRequest">UpdateHostedZoneCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehostedzonecommentrequest"></a>
<a id="schema_UpdateHostedZoneCommentRequest"></a>
<a id="tocSupdatehostedzonecommentrequest"></a>
<a id="tocsupdatehostedzonecommentrequest"></a>

```json
{
  "Comment": {}
}
```

A request to update the comment for a hosted zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|

<h2 id="tocS_UpdateTrafficPolicyCommentRequest">UpdateTrafficPolicyCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficpolicycommentrequest"></a>
<a id="schema_UpdateTrafficPolicyCommentRequest"></a>
<a id="tocSupdatetrafficpolicycommentrequest"></a>
<a id="tocsupdatetrafficpolicycommentrequest"></a>

```json
{
  "Comment": {}
}
```

A complex type that contains information about the traffic policy that you want to update the comment for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|true|none|none|

<h2 id="tocS_UpdateTrafficPolicyInstanceRequest">UpdateTrafficPolicyInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrafficpolicyinstancerequest"></a>
<a id="schema_UpdateTrafficPolicyInstanceRequest"></a>
<a id="tocSupdatetrafficpolicyinstancerequest"></a>
<a id="tocsupdatetrafficpolicyinstancerequest"></a>

```json
{
  "TTL": {},
  "TrafficPolicyId": {},
  "TrafficPolicyVersion": {}
}
```

A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TTL|object|true|none|none|
|TrafficPolicyId|object|true|none|none|
|TrafficPolicyVersion|object|true|none|none|
