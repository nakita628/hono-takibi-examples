<h1 id="amazon-cloudfront">Amazon CloudFront v2020-05-31</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>

Base URLs:

* <a href="https://cloudfront.amazonaws.com">https://cloudfront.amazonaws.com</a> - The general CloudFront multi-region endpoint

* <a href="http://cloudfront.cn-north-1.amazonaws.com.cn">http://cloudfront.cn-north-1.amazonaws.com.cn</a> - The CloudFront endpoint for China (Beijing) and China (Ningxia)

* <a href="https://cloudfront.cn-north-1.amazonaws.com.cn">https://cloudfront.cn-north-1.amazonaws.com.cn</a> - The CloudFront endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/cloudfront/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-cloudfront-default">Default</h1>

## AssociateAlias2020_05_31

<a id="opIdAssociateAlias2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/associate-alias#Alias?Alias=string' \
  -X PUT \
  -H "Authorization: ${API_KEY}"
```

`PUT /2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias`

<p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

<h3 id="associatealias20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TargetDistributionId|path|string|true|The ID of the distribution that you're associating the alias with.|
|Alias|query|string|true|The alias (also known as a CNAME) to add to the target distribution.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="associatealias20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|483|483|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|484|484|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CopyDistribution2020_05_31

<a id="opIdCopyDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/copy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CallerReference":"string","Enabled":true}'
```

`POST /2020-05-31/distribution/{PrimaryDistributionId}/copy`

<p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html">CreateDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CopyDistribution.html">CopyDistribution</a> </p> </li> </ul>

> Body parameter

```json
{
  "CallerReference": "string",
  "Enabled": true
}
```

<h3 id="copydistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PrimaryDistributionId|path|string|true|The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.|
|Staging|header|boolean|false|The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.|
|If-Match|header|string|false|The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CallerReference|body|string|true|A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.|
|» Enabled|body|boolean|false|<p>A Boolean flag to specify the state of the staging distribution when it's created. When you set this value to <code>True</code>, the staging distribution is enabled. When you set this value to <code>False</code>, the staging distribution is disabled.</p> <p>If you omit this field, the default value is <code>True</code>.</p>|

<h3 id="copydistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CopyDistributionResult](#schemacopydistributionresult)|
|480|480|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|481|481|DistributionAlreadyExists|[DistributionAlreadyExists](#schemadistributionalreadyexists)|
|482|482|InvalidOrigin|[InvalidOrigin](#schemainvalidorigin)|
|483|483|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|484|484|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|485|485|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|486|486|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|487|487|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|488|488|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|489|489|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|490|490|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|491|491|InvalidViewerCertificate|[InvalidViewerCertificate](#schemainvalidviewercertificate)|
|492|492|InvalidMinimumProtocolVersion|[InvalidMinimumProtocolVersion](#schemainvalidminimumprotocolversion)|
|493|493|MissingBody|[MissingBody](#schemamissingbody)|
|494|494|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|495|495|TooManyDistributions|[TooManyDistributions](#schematoomanydistributions)|
|496|496|InvalidDefaultRootObject|[InvalidDefaultRootObject](#schemainvaliddefaultrootobject)|
|497|497|InvalidRelativePath|[InvalidRelativePath](#schemainvalidrelativepath)|
|498|498|InvalidErrorCode|[InvalidErrorCode](#schemainvaliderrorcode)|
|499|499|InvalidResponseCode|[InvalidResponseCode](#schemainvalidresponsecode)|
|500|Internal Server Error|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|501|Not Implemented|InvalidRequiredProtocol|[InvalidRequiredProtocol](#schemainvalidrequiredprotocol)|
|502|Bad Gateway|NoSuchOrigin|[NoSuchOrigin](#schemanosuchorigin)|
|503|Service Unavailable|TooManyOrigins|[TooManyOrigins](#schematoomanyorigins)|
|504|Gateway Timeout|TooManyOriginGroupsPerDistribution|[TooManyOriginGroupsPerDistribution](#schematoomanyorigingroupsperdistribution)|
|505|HTTP Version Not Supported|TooManyCacheBehaviors|[TooManyCacheBehaviors](#schematoomanycachebehaviors)|
|506|Variant Also Negotiates|TooManyCookieNamesInWhiteList|[TooManyCookieNamesInWhiteList](#schematoomanycookienamesinwhitelist)|
|507|Insufficient Storage|InvalidForwardCookies|[InvalidForwardCookies](#schemainvalidforwardcookies)|
|508|Loop Detected|TooManyHeadersInForwardedValues|[TooManyHeadersInForwardedValues](#schematoomanyheadersinforwardedvalues)|
|509|Bandwidth Limit Exceeded|InvalidHeadersForS3Origin|[InvalidHeadersForS3Origin](#schemainvalidheadersfors3origin)|
|510|Not Extended|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|511|Network Authentication Required|TooManyCertificates|[TooManyCertificates](#schematoomanycertificates)|
|512|512|InvalidLocationCode|[InvalidLocationCode](#schemainvalidlocationcode)|
|513|513|InvalidGeoRestrictionParameter|[InvalidGeoRestrictionParameter](#schemainvalidgeorestrictionparameter)|
|514|514|InvalidProtocolSettings|[InvalidProtocolSettings](#schemainvalidprotocolsettings)|
|515|515|InvalidTTLOrder|[InvalidTTLOrder](#schemainvalidttlorder)|
|516|516|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|
|517|517|TooManyOriginCustomHeaders|[TooManyOriginCustomHeaders](#schematoomanyorigincustomheaders)|
|518|518|TooManyQueryStringParameters|[TooManyQueryStringParameters](#schematoomanyquerystringparameters)|
|519|519|InvalidQueryStringParameters|[InvalidQueryStringParameters](#schemainvalidquerystringparameters)|
|520|520|TooManyDistributionsWithLambdaAssociations|[TooManyDistributionsWithLambdaAssociations](#schematoomanydistributionswithlambdaassociations)|
|521|521|TooManyDistributionsWithSingleFunctionARN|[TooManyDistributionsWithSingleFunctionARN](#schematoomanydistributionswithsinglefunctionarn)|
|522|522|TooManyLambdaFunctionAssociations|[TooManyLambdaFunctionAssociations](#schematoomanylambdafunctionassociations)|
|523|523|InvalidLambdaFunctionAssociation|[InvalidLambdaFunctionAssociation](#schemainvalidlambdafunctionassociation)|
|524|524|TooManyDistributionsWithFunctionAssociations|[TooManyDistributionsWithFunctionAssociations](#schematoomanydistributionswithfunctionassociations)|
|525|525|TooManyFunctionAssociations|[TooManyFunctionAssociations](#schematoomanyfunctionassociations)|
|526|526|InvalidFunctionAssociation|[InvalidFunctionAssociation](#schemainvalidfunctionassociation)|
|527|527|InvalidOriginReadTimeout|[InvalidOriginReadTimeout](#schemainvalidoriginreadtimeout)|
|528|528|InvalidOriginKeepaliveTimeout|[InvalidOriginKeepaliveTimeout](#schemainvalidoriginkeepalivetimeout)|
|529|529|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|530|530|IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior|[IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior](#schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior)|
|531|531|TooManyDistributionsAssociatedToFieldLevelEncryptionConfig|[TooManyDistributionsAssociatedToFieldLevelEncryptionConfig](#schematoomanydistributionsassociatedtofieldlevelencryptionconfig)|
|532|532|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|533|533|TooManyDistributionsAssociatedToCachePolicy|[TooManyDistributionsAssociatedToCachePolicy](#schematoomanydistributionsassociatedtocachepolicy)|
|534|534|TooManyDistributionsAssociatedToOriginAccessControl|[TooManyDistributionsAssociatedToOriginAccessControl](#schematoomanydistributionsassociatedtooriginaccesscontrol)|
|535|535|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|536|536|TooManyDistributionsAssociatedToResponseHeadersPolicy|[TooManyDistributionsAssociatedToResponseHeadersPolicy](#schematoomanydistributionsassociatedtoresponseheaderspolicy)|
|537|537|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|538|538|TooManyDistributionsAssociatedToOriginRequestPolicy|[TooManyDistributionsAssociatedToOriginRequestPolicy](#schematoomanydistributionsassociatedtooriginrequestpolicy)|
|539|539|TooManyDistributionsAssociatedToKeyGroup|[TooManyDistributionsAssociatedToKeyGroup](#schematoomanydistributionsassociatedtokeygroup)|
|540|540|TooManyKeyGroupsAssociatedToDistribution|[TooManyKeyGroupsAssociatedToDistribution](#schematoomanykeygroupsassociatedtodistribution)|
|541|541|TrustedKeyGroupDoesNotExist|[TrustedKeyGroupDoesNotExist](#schematrustedkeygroupdoesnotexist)|
|542|542|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|543|543|RealtimeLogConfigOwnerMismatch|[RealtimeLogConfigOwnerMismatch](#schemarealtimelogconfigownermismatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCachePolicies2020_05_31

<a id="opIdListCachePolicies2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/cache-policy`

<p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listcachepolicies20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of cache policies that you want in the response.|
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
|Type|managed|
|Type|custom|

<h3 id="listcachepolicies20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCachePoliciesResult](#schemalistcachepoliciesresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCachePolicy2020_05_31

<a id="opIdCreateCachePolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CachePolicyConfig":{"Comment":{},"Name":{},"DefaultTTL":{},"MaxTTL":{},"MinTTL":{},"ParametersInCacheKeyAndForwardedToOrigin":{"EnableAcceptEncodingGzip":{},"EnableAcceptEncodingBrotli":{},"HeadersConfig":{"HeaderBehavior":{},"Headers":{"Quantity":{},"Items":{}}},"CookiesConfig":{"CookieBehavior":{},"Cookies":{"Quantity":{},"Items":{}}},"QueryStringsConfig":{"QueryStringBehavior":{},"QueryStrings":{"Quantity":{},"Items":{}}}}}}'
```

`POST /2020-05-31/cache-policy`

<p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

<h3 id="createcachepolicy20200531-parameters">Parameters</h3>

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
|» CachePolicyConfig|body|object|true|<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » DefaultTTL|body|object|false|none|
|» » MaxTTL|body|object|false|none|
|» » MinTTL|body|object|false|none|
|» » ParametersInCacheKeyAndForwardedToOrigin|body|object|false|none|
|» » » EnableAcceptEncodingGzip|body|object|true|none|
|» » » EnableAcceptEncodingBrotli|body|object|false|none|
|» » » HeadersConfig|body|object|true|none|
|» » » » HeaderBehavior|body|object|true|none|
|» » » » Headers|body|[Headers](#schemaheaders)|false|Contains a list of HTTP header names.|
|» » » CookiesConfig|body|object|true|none|
|» » » » CookieBehavior|body|object|true|none|
|» » » » Cookies|body|[CookieNames](#schemacookienames)|false|Contains a list of cookie names.|
|» » » QueryStringsConfig|body|object|true|none|
|» » » » QueryStringBehavior|body|object|true|none|
|» » » » QueryStrings|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|

<h3 id="createcachepolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCachePolicyResult](#schemacreatecachepolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|CachePolicyAlreadyExists|[CachePolicyAlreadyExists](#schemacachepolicyalreadyexists)|
|484|484|TooManyCachePolicies|[TooManyCachePolicies](#schematoomanycachepolicies)|
|485|485|TooManyHeadersInCachePolicy|[TooManyHeadersInCachePolicy](#schematoomanyheadersincachepolicy)|
|486|486|TooManyCookiesInCachePolicy|[TooManyCookiesInCachePolicy](#schematoomanycookiesincachepolicy)|
|487|487|TooManyQueryStringsInCachePolicy|[TooManyQueryStringsInCachePolicy](#schematoomanyquerystringsincachepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListCloudFrontOriginAccessIdentities2020_05_31

<a id="opIdListCloudFrontOriginAccessIdentities2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-identity/cloudfront`

Lists origin access identities.

<h3 id="listcloudfrontoriginaccessidentities20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).|
|MaxItems|query|string|false|The maximum number of origin access identities you want in the response body.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listcloudfrontoriginaccessidentities20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListCloudFrontOriginAccessIdentitiesResult](#schemalistcloudfrontoriginaccessidentitiesresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCloudFrontOriginAccessIdentity2020_05_31

<a id="opIdCreateCloudFrontOriginAccessIdentity2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CloudFrontOriginAccessIdentityConfig":{"CallerReference":{},"Comment":{}}}'
```

`POST /2020-05-31/origin-access-identity/cloudfront`

Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.

> Body parameter

```json
{
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

<h3 id="createcloudfrontoriginaccessidentity20200531-parameters">Parameters</h3>

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
|» CloudFrontOriginAccessIdentityConfig|body|object|true|Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="createcloudfrontoriginaccessidentity20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateCloudFrontOriginAccessIdentityResult](#schemacreatecloudfrontoriginaccessidentityresult)|
|480|480|CloudFrontOriginAccessIdentityAlreadyExists|[CloudFrontOriginAccessIdentityAlreadyExists](#schemacloudfrontoriginaccessidentityalreadyexists)|
|481|481|MissingBody|[MissingBody](#schemamissingbody)|
|482|482|TooManyCloudFrontOriginAccessIdentities|[TooManyCloudFrontOriginAccessIdentities](#schematoomanycloudfrontoriginaccessidentities)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContinuousDeploymentPolicies2020_05_31

<a id="opIdListContinuousDeploymentPolicies2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/continuous-deployment-policy`

<p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listcontinuousdeploymentpolicies20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of continuous deployment policies that you want returned in the response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listcontinuousdeploymentpolicies20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContinuousDeploymentPoliciesResult](#schemalistcontinuousdeploymentpoliciesresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|482|482|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContinuousDeploymentPolicy2020_05_31

<a id="opIdCreateContinuousDeploymentPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ContinuousDeploymentPolicyConfig":{"StagingDistributionDnsNames":{"Quantity":{},"Items":{}},"Enabled":{},"TrafficConfig":{"SingleWeightConfig":{"Weight":{},"SessionStickinessConfig":{"IdleTTL":{},"MaximumTTL":{}}},"SingleHeaderConfig":{"Header":{},"Value":{}},"Type":{}}}}'
```

`POST /2020-05-31/continuous-deployment-policy`

<p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>

> Body parameter

```json
{
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

<h3 id="createcontinuousdeploymentpolicy20200531-parameters">Parameters</h3>

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
|» ContinuousDeploymentPolicyConfig|body|object|true|Contains the configuration for a continuous deployment policy.|
|» » StagingDistributionDnsNames|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » TrafficConfig|body|object|false|none|
|» » » SingleWeightConfig|body|object|false|none|
|» » » » Weight|body|object|true|none|
|» » » » SessionStickinessConfig|body|[SessionStickinessConfig](#schemasessionstickinessconfig)|false|Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.|
|» » » SingleHeaderConfig|body|object|false|none|
|» » » » Header|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » Type|body|object|true|none|

<h3 id="createcontinuousdeploymentpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateContinuousDeploymentPolicyResult](#schemacreatecontinuousdeploymentpolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|483|483|ContinuousDeploymentPolicyAlreadyExists|[ContinuousDeploymentPolicyAlreadyExists](#schemacontinuousdeploymentpolicyalreadyexists)|
|484|484|TooManyContinuousDeploymentPolicies|[TooManyContinuousDeploymentPolicies](#schematoomanycontinuousdeploymentpolicies)|
|485|485|StagingDistributionInUse|[StagingDistributionInUse](#schemastagingdistributioninuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributions2020_05_31

<a id="opIdListDistributions2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distribution`

List CloudFront distributions.

<h3 id="listdistributions20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).|
|MaxItems|query|string|false|The maximum number of distributions you want in the response body.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributions20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsResult](#schemalistdistributionsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDistribution2020_05_31

<a id="opIdCreateDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DistributionConfig":{"CallerReference":{},"Aliases":{"Quantity":{},"Items":{}},"DefaultRootObject":{},"Origins":{"Quantity":{},"Items":{}},"OriginGroups":{"Quantity":{},"Items":{}},"DefaultCacheBehavior":{"TargetOriginId":{},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"TrustedKeyGroups":{"Enabled":{},"Quantity":{},"Items":{}},"ViewerProtocolPolicy":{},"AllowedMethods":{"Quantity":{},"Items":{},"CachedMethods":{"Quantity":{},"Items":{}}},"SmoothStreaming":{},"Compress":{},"LambdaFunctionAssociations":{"Quantity":{},"Items":{}},"FunctionAssociations":{"Quantity":{},"Items":{}},"FieldLevelEncryptionId":{},"RealtimeLogConfigArn":{},"CachePolicyId":{},"OriginRequestPolicyId":{},"ResponseHeadersPolicyId":{},"ForwardedValues":{"QueryString":{},"Cookies":{"Forward":{},"WhitelistedNames":{"Quantity":{},"Items":{}}},"Headers":{"Quantity":{},"Items":{}},"QueryStringCacheKeys":{"Quantity":{},"Items":{}}},"MinTTL":{},"DefaultTTL":{},"MaxTTL":{}},"CacheBehaviors":{"Quantity":{},"Items":{}},"CustomErrorResponses":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"IncludeCookies":{},"Bucket":{},"Prefix":{}},"PriceClass":{},"Enabled":{},"ViewerCertificate":{"CloudFrontDefaultCertificate":{},"IAMCertificateId":{},"ACMCertificateArn":{},"SSLSupportMethod":{},"MinimumProtocolVersion":{},"Certificate":{},"CertificateSource":{}},"Restrictions":{"GeoRestriction":{"RestrictionType":{},"Quantity":{},"Items":{}}},"WebACLId":{},"HttpVersion":{},"IsIPV6Enabled":{},"ContinuousDeploymentPolicyId":{},"Staging":{}}}'
```

`POST /2020-05-31/distribution`

Creates a CloudFront distribution.

> Body parameter

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  }
}
```

<h3 id="createdistribution20200531-parameters">Parameters</h3>

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
|» DistributionConfig|body|object|true|A distribution configuration.|
|» » CallerReference|body|object|false|none|
|» » Aliases|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » DefaultRootObject|body|object|false|none|
|» » Origins|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» Id|body|object|true|none|
|» DomainName|body|object|true|none|
|» OriginPath|body|object|false|none|
|» CustomHeaders|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» HeaderName|body|object|true|none|
|» HeaderValue|body|object|true|none|
|» S3OriginConfig|body|object|false|none|
|» » OriginAccessIdentity|body|object|true|none|
|» CustomOriginConfig|body|object|false|none|
|» » HTTPPort|body|object|true|none|
|» » HTTPSPort|body|object|true|none|
|» » OriginProtocolPolicy|body|object|true|none|
|» » OriginSslProtocols|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» » OriginReadTimeout|body|object|false|none|
|» » OriginKeepaliveTimeout|body|object|false|none|
|» ConnectionAttempts|body|object|false|none|
|» ConnectionTimeout|body|object|false|none|
|» OriginShield|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » OriginShieldRegion|body|object|false|none|
|» OriginAccessControlId|body|object|false|none|
|» » OriginGroups|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Id|body|object|true|none|
|» FailoverCriteria|body|object|true|none|
|» » StatusCodes|body|object|true|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» Members|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|true|none|
|» OriginId|body|object|true|none|
|» » DefaultCacheBehavior|body|object|false|none|
|» » » TargetOriginId|body|object|true|none|
|» » » TrustedSigners|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » TrustedKeyGroups|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » ViewerProtocolPolicy|body|object|true|none|
|» » » AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» » » SmoothStreaming|body|object|false|none|
|» » » Compress|body|object|false|none|
|» » » LambdaFunctionAssociations|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» » » FunctionAssociations|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» » » FieldLevelEncryptionId|body|object|false|none|
|» » » RealtimeLogConfigArn|body|object|false|none|
|» » » CachePolicyId|body|object|false|none|
|» » » OriginRequestPolicyId|body|object|false|none|
|» » » ResponseHeadersPolicyId|body|object|false|none|
|» » » ForwardedValues|body|object|false|none|
|» » » » QueryString|body|object|true|none|
|» » » » Cookies|body|object|true|none|
|» » » » » Forward|body|object|true|none|
|» » » » » WhitelistedNames|body|object|false|none|
|» » » » » » Quantity|body|object|true|none|
|» » » » » » Items|body|object|false|none|
|» » » » Headers|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » » QueryStringCacheKeys|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » MinTTL|body|object|false|none|
|» » » DefaultTTL|body|object|false|none|
|» » » MaxTTL|body|object|false|none|
|» » CacheBehaviors|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» PathPattern|body|object|true|none|
|» TargetOriginId|body|object|true|none|
|» TrustedSigners|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» TrustedKeyGroups|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» ViewerProtocolPolicy|body|object|true|none|
|» AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» SmoothStreaming|body|object|false|none|
|» Compress|body|object|false|none|
|» LambdaFunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» FunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» FieldLevelEncryptionId|body|object|false|none|
|» RealtimeLogConfigArn|body|object|false|none|
|» CachePolicyId|body|object|false|none|
|» OriginRequestPolicyId|body|object|false|none|
|» ResponseHeadersPolicyId|body|object|false|none|
|» ForwardedValues|body|object|false|none|
|» » QueryString|body|object|true|none|
|» » Cookies|body|object|true|none|
|» » » Forward|body|object|true|none|
|» » » WhitelistedNames|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » Headers|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » QueryStringCacheKeys|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» MinTTL|body|object|false|none|
|» DefaultTTL|body|object|false|none|
|» MaxTTL|body|object|false|none|
|» » CustomErrorResponses|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» ErrorCode|body|object|true|none|
|» ResponsePagePath|body|object|false|none|
|» ResponseCode|body|object|false|none|
|» ErrorCachingMinTTL|body|object|false|none|
|» » Comment|body|object|false|none|
|» » Logging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » IncludeCookies|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|true|none|
|» » PriceClass|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » ViewerCertificate|body|object|false|none|
|» » » CloudFrontDefaultCertificate|body|object|false|none|
|» » » IAMCertificateId|body|object|false|none|
|» » » ACMCertificateArn|body|object|false|none|
|» » » SSLSupportMethod|body|object|false|none|
|» » » MinimumProtocolVersion|body|object|false|none|
|» » » Certificate|body|object|false|none|
|» » » CertificateSource|body|object|false|none|
|» » Restrictions|body|object|false|none|
|» » » GeoRestriction|body|object|true|none|
|» » » » RestrictionType|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » WebACLId|body|object|false|none|
|» » HttpVersion|body|object|false|none|
|» » IsIPV6Enabled|body|object|false|none|
|» » ContinuousDeploymentPolicyId|body|object|false|none|
|» » Staging|body|object|false|none|

<h3 id="createdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDistributionResult](#schemacreatedistributionresult)|
|480|480|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|481|481|DistributionAlreadyExists|[DistributionAlreadyExists](#schemadistributionalreadyexists)|
|482|482|InvalidOrigin|[InvalidOrigin](#schemainvalidorigin)|
|483|483|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|484|484|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|485|485|IllegalOriginAccessConfiguration|[IllegalOriginAccessConfiguration](#schemaillegaloriginaccessconfiguration)|
|486|486|TooManyDistributionsAssociatedToOriginAccessControl|[TooManyDistributionsAssociatedToOriginAccessControl](#schematoomanydistributionsassociatedtooriginaccesscontrol)|
|487|487|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|488|488|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|489|489|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|490|490|InvalidViewerCertificate|[InvalidViewerCertificate](#schemainvalidviewercertificate)|
|491|491|InvalidMinimumProtocolVersion|[InvalidMinimumProtocolVersion](#schemainvalidminimumprotocolversion)|
|492|492|MissingBody|[MissingBody](#schemamissingbody)|
|493|493|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|494|494|TooManyDistributions|[TooManyDistributions](#schematoomanydistributions)|
|495|495|InvalidDefaultRootObject|[InvalidDefaultRootObject](#schemainvaliddefaultrootobject)|
|496|496|InvalidRelativePath|[InvalidRelativePath](#schemainvalidrelativepath)|
|497|497|InvalidErrorCode|[InvalidErrorCode](#schemainvaliderrorcode)|
|498|498|InvalidResponseCode|[InvalidResponseCode](#schemainvalidresponsecode)|
|499|499|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|500|Internal Server Error|InvalidRequiredProtocol|[InvalidRequiredProtocol](#schemainvalidrequiredprotocol)|
|501|Not Implemented|NoSuchOrigin|[NoSuchOrigin](#schemanosuchorigin)|
|502|Bad Gateway|TooManyOrigins|[TooManyOrigins](#schematoomanyorigins)|
|503|Service Unavailable|TooManyOriginGroupsPerDistribution|[TooManyOriginGroupsPerDistribution](#schematoomanyorigingroupsperdistribution)|
|504|Gateway Timeout|TooManyCacheBehaviors|[TooManyCacheBehaviors](#schematoomanycachebehaviors)|
|505|HTTP Version Not Supported|TooManyCookieNamesInWhiteList|[TooManyCookieNamesInWhiteList](#schematoomanycookienamesinwhitelist)|
|506|Variant Also Negotiates|InvalidForwardCookies|[InvalidForwardCookies](#schemainvalidforwardcookies)|
|507|Insufficient Storage|TooManyHeadersInForwardedValues|[TooManyHeadersInForwardedValues](#schematoomanyheadersinforwardedvalues)|
|508|Loop Detected|InvalidHeadersForS3Origin|[InvalidHeadersForS3Origin](#schemainvalidheadersfors3origin)|
|509|Bandwidth Limit Exceeded|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|510|Not Extended|TooManyCertificates|[TooManyCertificates](#schematoomanycertificates)|
|511|Network Authentication Required|InvalidLocationCode|[InvalidLocationCode](#schemainvalidlocationcode)|
|512|512|InvalidGeoRestrictionParameter|[InvalidGeoRestrictionParameter](#schemainvalidgeorestrictionparameter)|
|513|513|InvalidProtocolSettings|[InvalidProtocolSettings](#schemainvalidprotocolsettings)|
|514|514|InvalidTTLOrder|[InvalidTTLOrder](#schemainvalidttlorder)|
|515|515|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|
|516|516|TooManyOriginCustomHeaders|[TooManyOriginCustomHeaders](#schematoomanyorigincustomheaders)|
|517|517|TooManyQueryStringParameters|[TooManyQueryStringParameters](#schematoomanyquerystringparameters)|
|518|518|InvalidQueryStringParameters|[InvalidQueryStringParameters](#schemainvalidquerystringparameters)|
|519|519|TooManyDistributionsWithLambdaAssociations|[TooManyDistributionsWithLambdaAssociations](#schematoomanydistributionswithlambdaassociations)|
|520|520|TooManyDistributionsWithSingleFunctionARN|[TooManyDistributionsWithSingleFunctionARN](#schematoomanydistributionswithsinglefunctionarn)|
|521|521|TooManyLambdaFunctionAssociations|[TooManyLambdaFunctionAssociations](#schematoomanylambdafunctionassociations)|
|522|522|InvalidLambdaFunctionAssociation|[InvalidLambdaFunctionAssociation](#schemainvalidlambdafunctionassociation)|
|523|523|TooManyDistributionsWithFunctionAssociations|[TooManyDistributionsWithFunctionAssociations](#schematoomanydistributionswithfunctionassociations)|
|524|524|TooManyFunctionAssociations|[TooManyFunctionAssociations](#schematoomanyfunctionassociations)|
|525|525|InvalidFunctionAssociation|[InvalidFunctionAssociation](#schemainvalidfunctionassociation)|
|526|526|InvalidOriginReadTimeout|[InvalidOriginReadTimeout](#schemainvalidoriginreadtimeout)|
|527|527|InvalidOriginKeepaliveTimeout|[InvalidOriginKeepaliveTimeout](#schemainvalidoriginkeepalivetimeout)|
|528|528|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|529|529|IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior|[IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior](#schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior)|
|530|530|TooManyDistributionsAssociatedToFieldLevelEncryptionConfig|[TooManyDistributionsAssociatedToFieldLevelEncryptionConfig](#schematoomanydistributionsassociatedtofieldlevelencryptionconfig)|
|531|531|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|532|532|TooManyDistributionsAssociatedToCachePolicy|[TooManyDistributionsAssociatedToCachePolicy](#schematoomanydistributionsassociatedtocachepolicy)|
|533|533|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|534|534|TooManyDistributionsAssociatedToResponseHeadersPolicy|[TooManyDistributionsAssociatedToResponseHeadersPolicy](#schematoomanydistributionsassociatedtoresponseheaderspolicy)|
|535|535|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|536|536|TooManyDistributionsAssociatedToOriginRequestPolicy|[TooManyDistributionsAssociatedToOriginRequestPolicy](#schematoomanydistributionsassociatedtooriginrequestpolicy)|
|537|537|TooManyDistributionsAssociatedToKeyGroup|[TooManyDistributionsAssociatedToKeyGroup](#schematoomanydistributionsassociatedtokeygroup)|
|538|538|TooManyKeyGroupsAssociatedToDistribution|[TooManyKeyGroupsAssociatedToDistribution](#schematoomanykeygroupsassociatedtodistribution)|
|539|539|TrustedKeyGroupDoesNotExist|[TrustedKeyGroupDoesNotExist](#schematrustedkeygroupdoesnotexist)|
|540|540|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|541|541|RealtimeLogConfigOwnerMismatch|[RealtimeLogConfigOwnerMismatch](#schemarealtimelogconfigownermismatch)|
|542|542|ContinuousDeploymentPolicyInUse|[ContinuousDeploymentPolicyInUse](#schemacontinuousdeploymentpolicyinuse)|
|543|543|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|
|544|544|InvalidDomainNameForOriginAccessControl|[InvalidDomainNameForOriginAccessControl](#schemainvaliddomainnamefororiginaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDistributionWithTags2020_05_31

<a id="opIdCreateDistributionWithTags2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution#WithTags?WithTags=true' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DistributionConfigWithTags":{"DistributionConfig":{"CallerReference":{},"Aliases":{"Quantity":{},"Items":{}},"DefaultRootObject":{},"Origins":{"Quantity":{},"Items":{}},"OriginGroups":{"Quantity":{},"Items":{}},"DefaultCacheBehavior":{"TargetOriginId":{},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"TrustedKeyGroups":{"Enabled":{},"Quantity":{},"Items":{}},"ViewerProtocolPolicy":{},"AllowedMethods":{"Quantity":{},"Items":{},"CachedMethods":{"Quantity":{},"Items":{}}},"SmoothStreaming":{},"Compress":{},"LambdaFunctionAssociations":{"Quantity":{},"Items":{}},"FunctionAssociations":{"Quantity":{},"Items":{}},"FieldLevelEncryptionId":{},"RealtimeLogConfigArn":{},"CachePolicyId":{},"OriginRequestPolicyId":{},"ResponseHeadersPolicyId":{},"ForwardedValues":{"QueryString":{},"Cookies":{"Forward":{},"WhitelistedNames":{"Quantity":{},"Items":{}}},"Headers":{"Quantity":{},"Items":{}},"QueryStringCacheKeys":{"Quantity":{},"Items":{}}},"MinTTL":{},"DefaultTTL":{},"MaxTTL":{}},"CacheBehaviors":{"Quantity":{},"Items":{}},"CustomErrorResponses":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"IncludeCookies":{},"Bucket":{},"Prefix":{}},"PriceClass":{},"Enabled":{},"ViewerCertificate":{"CloudFrontDefaultCertificate":{},"IAMCertificateId":{},"ACMCertificateArn":{},"SSLSupportMethod":{},"MinimumProtocolVersion":{},"Certificate":{},"CertificateSource":{}},"Restrictions":{"GeoRestriction":{"RestrictionType":{},"Quantity":{},"Items":{}}},"WebACLId":{},"HttpVersion":{},"IsIPV6Enabled":{},"ContinuousDeploymentPolicyId":{},"Staging":{}},"Tags":{"Items":{}}}}'
```

`POST /2020-05-31/distribution#WithTags`

<p>Create a new distribution with tags. This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html">CreateDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html">TagResource</a> </p> </li> </ul>

> Body parameter

```json
{
  "DistributionConfigWithTags": {
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "Tags": {
      "Items": {}
    }
  }
}
```

<h3 id="createdistributionwithtags20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WithTags|query|boolean|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DistributionConfigWithTags|body|object|true|A distribution Configuration and a list of tags to be associated with the distribution.|
|» » DistributionConfig|body|object|false|none|
|» » » CallerReference|body|object|true|none|
|» » » Aliases|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » DefaultRootObject|body|object|false|none|
|» » » Origins|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» Id|body|object|true|none|
|» DomainName|body|object|true|none|
|» OriginPath|body|object|false|none|
|» CustomHeaders|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» HeaderName|body|object|true|none|
|» HeaderValue|body|object|true|none|
|» S3OriginConfig|body|object|false|none|
|» » OriginAccessIdentity|body|object|true|none|
|» CustomOriginConfig|body|object|false|none|
|» » HTTPPort|body|object|true|none|
|» » HTTPSPort|body|object|true|none|
|» » OriginProtocolPolicy|body|object|true|none|
|» » OriginSslProtocols|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» » OriginReadTimeout|body|object|false|none|
|» » OriginKeepaliveTimeout|body|object|false|none|
|» ConnectionAttempts|body|object|false|none|
|» ConnectionTimeout|body|object|false|none|
|» OriginShield|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » OriginShieldRegion|body|object|false|none|
|» OriginAccessControlId|body|object|false|none|
|» » » OriginGroups|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» Id|body|object|true|none|
|» FailoverCriteria|body|object|true|none|
|» » StatusCodes|body|object|true|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» Members|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|true|none|
|» OriginId|body|object|true|none|
|» » » DefaultCacheBehavior|body|object|true|none|
|» » » » TargetOriginId|body|object|true|none|
|» » » » TrustedSigners|body|object|false|none|
|» » » » » Enabled|body|object|true|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » » TrustedKeyGroups|body|object|false|none|
|» » » » » Enabled|body|object|true|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » » ViewerProtocolPolicy|body|object|true|none|
|» » » » AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» » » » SmoothStreaming|body|object|false|none|
|» » » » Compress|body|object|false|none|
|» » » » LambdaFunctionAssociations|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» » » » FunctionAssociations|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» » » » FieldLevelEncryptionId|body|object|false|none|
|» » » » RealtimeLogConfigArn|body|object|false|none|
|» » » » CachePolicyId|body|object|false|none|
|» » » » OriginRequestPolicyId|body|object|false|none|
|» » » » ResponseHeadersPolicyId|body|object|false|none|
|» » » » ForwardedValues|body|object|false|none|
|» » » » » QueryString|body|object|true|none|
|» » » » » Cookies|body|object|true|none|
|» » » » » » Forward|body|object|true|none|
|» » » » » » WhitelistedNames|body|object|false|none|
|» » » » » » » Quantity|body|object|true|none|
|» » » » » » » Items|body|object|false|none|
|» » » » » Headers|body|object|false|none|
|» » » » » » Quantity|body|object|true|none|
|» » » » » » Items|body|object|false|none|
|» » » » » QueryStringCacheKeys|body|object|false|none|
|» » » » » » Quantity|body|object|true|none|
|» » » » » » Items|body|object|false|none|
|» » » » MinTTL|body|object|false|none|
|» » » » DefaultTTL|body|object|false|none|
|» » » » MaxTTL|body|object|false|none|
|» » » CacheBehaviors|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» PathPattern|body|object|true|none|
|» TargetOriginId|body|object|true|none|
|» TrustedSigners|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» TrustedKeyGroups|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» ViewerProtocolPolicy|body|object|true|none|
|» AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» SmoothStreaming|body|object|false|none|
|» Compress|body|object|false|none|
|» LambdaFunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» FunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» FieldLevelEncryptionId|body|object|false|none|
|» RealtimeLogConfigArn|body|object|false|none|
|» CachePolicyId|body|object|false|none|
|» OriginRequestPolicyId|body|object|false|none|
|» ResponseHeadersPolicyId|body|object|false|none|
|» ForwardedValues|body|object|false|none|
|» » QueryString|body|object|true|none|
|» » Cookies|body|object|true|none|
|» » » Forward|body|object|true|none|
|» » » WhitelistedNames|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » Headers|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » QueryStringCacheKeys|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» MinTTL|body|object|false|none|
|» DefaultTTL|body|object|false|none|
|» MaxTTL|body|object|false|none|
|» » » CustomErrorResponses|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» ErrorCode|body|object|true|none|
|» ResponsePagePath|body|object|false|none|
|» ResponseCode|body|object|false|none|
|» ErrorCachingMinTTL|body|object|false|none|
|» » » Comment|body|object|true|none|
|» » » Logging|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » IncludeCookies|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » Prefix|body|object|true|none|
|» » » PriceClass|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » ViewerCertificate|body|object|false|none|
|» » » » CloudFrontDefaultCertificate|body|object|false|none|
|» » » » IAMCertificateId|body|object|false|none|
|» » » » ACMCertificateArn|body|object|false|none|
|» » » » SSLSupportMethod|body|object|false|none|
|» » » » MinimumProtocolVersion|body|object|false|none|
|» » » » Certificate|body|object|false|none|
|» » » » CertificateSource|body|object|false|none|
|» » » Restrictions|body|object|false|none|
|» » » » GeoRestriction|body|object|true|none|
|» » » » » RestrictionType|body|object|true|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » WebACLId|body|object|false|none|
|» » » HttpVersion|body|object|false|none|
|» » » IsIPV6Enabled|body|object|false|none|
|» » » ContinuousDeploymentPolicyId|body|object|false|none|
|» » » Staging|body|object|false|none|
|» » Tags|body|object|false|none|
|» » » Items|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|WithTags|true|

<h3 id="createdistributionwithtags20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateDistributionWithTagsResult](#schemacreatedistributionwithtagsresult)|
|480|480|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|481|481|DistributionAlreadyExists|[DistributionAlreadyExists](#schemadistributionalreadyexists)|
|482|482|InvalidOrigin|[InvalidOrigin](#schemainvalidorigin)|
|483|483|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|484|484|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|485|485|IllegalOriginAccessConfiguration|[IllegalOriginAccessConfiguration](#schemaillegaloriginaccessconfiguration)|
|486|486|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|487|487|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|488|488|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|489|489|InvalidViewerCertificate|[InvalidViewerCertificate](#schemainvalidviewercertificate)|
|490|490|InvalidMinimumProtocolVersion|[InvalidMinimumProtocolVersion](#schemainvalidminimumprotocolversion)|
|491|491|MissingBody|[MissingBody](#schemamissingbody)|
|492|492|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|493|493|TooManyDistributions|[TooManyDistributions](#schematoomanydistributions)|
|494|494|InvalidDefaultRootObject|[InvalidDefaultRootObject](#schemainvaliddefaultrootobject)|
|495|495|InvalidRelativePath|[InvalidRelativePath](#schemainvalidrelativepath)|
|496|496|InvalidErrorCode|[InvalidErrorCode](#schemainvaliderrorcode)|
|497|497|InvalidResponseCode|[InvalidResponseCode](#schemainvalidresponsecode)|
|498|498|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|499|499|InvalidRequiredProtocol|[InvalidRequiredProtocol](#schemainvalidrequiredprotocol)|
|500|Internal Server Error|NoSuchOrigin|[NoSuchOrigin](#schemanosuchorigin)|
|501|Not Implemented|TooManyOrigins|[TooManyOrigins](#schematoomanyorigins)|
|502|Bad Gateway|TooManyOriginGroupsPerDistribution|[TooManyOriginGroupsPerDistribution](#schematoomanyorigingroupsperdistribution)|
|503|Service Unavailable|TooManyCacheBehaviors|[TooManyCacheBehaviors](#schematoomanycachebehaviors)|
|504|Gateway Timeout|TooManyCookieNamesInWhiteList|[TooManyCookieNamesInWhiteList](#schematoomanycookienamesinwhitelist)|
|505|HTTP Version Not Supported|InvalidForwardCookies|[InvalidForwardCookies](#schemainvalidforwardcookies)|
|506|Variant Also Negotiates|TooManyHeadersInForwardedValues|[TooManyHeadersInForwardedValues](#schematoomanyheadersinforwardedvalues)|
|507|Insufficient Storage|InvalidHeadersForS3Origin|[InvalidHeadersForS3Origin](#schemainvalidheadersfors3origin)|
|508|Loop Detected|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|509|Bandwidth Limit Exceeded|TooManyCertificates|[TooManyCertificates](#schematoomanycertificates)|
|510|Not Extended|InvalidLocationCode|[InvalidLocationCode](#schemainvalidlocationcode)|
|511|Network Authentication Required|InvalidGeoRestrictionParameter|[InvalidGeoRestrictionParameter](#schemainvalidgeorestrictionparameter)|
|512|512|InvalidProtocolSettings|[InvalidProtocolSettings](#schemainvalidprotocolsettings)|
|513|513|InvalidTTLOrder|[InvalidTTLOrder](#schemainvalidttlorder)|
|514|514|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|
|515|515|TooManyOriginCustomHeaders|[TooManyOriginCustomHeaders](#schematoomanyorigincustomheaders)|
|516|516|InvalidTagging|[InvalidTagging](#schemainvalidtagging)|
|517|517|TooManyQueryStringParameters|[TooManyQueryStringParameters](#schematoomanyquerystringparameters)|
|518|518|InvalidQueryStringParameters|[InvalidQueryStringParameters](#schemainvalidquerystringparameters)|
|519|519|TooManyDistributionsWithLambdaAssociations|[TooManyDistributionsWithLambdaAssociations](#schematoomanydistributionswithlambdaassociations)|
|520|520|TooManyDistributionsWithSingleFunctionARN|[TooManyDistributionsWithSingleFunctionARN](#schematoomanydistributionswithsinglefunctionarn)|
|521|521|TooManyLambdaFunctionAssociations|[TooManyLambdaFunctionAssociations](#schematoomanylambdafunctionassociations)|
|522|522|InvalidLambdaFunctionAssociation|[InvalidLambdaFunctionAssociation](#schemainvalidlambdafunctionassociation)|
|523|523|TooManyDistributionsWithFunctionAssociations|[TooManyDistributionsWithFunctionAssociations](#schematoomanydistributionswithfunctionassociations)|
|524|524|TooManyFunctionAssociations|[TooManyFunctionAssociations](#schematoomanyfunctionassociations)|
|525|525|InvalidFunctionAssociation|[InvalidFunctionAssociation](#schemainvalidfunctionassociation)|
|526|526|InvalidOriginReadTimeout|[InvalidOriginReadTimeout](#schemainvalidoriginreadtimeout)|
|527|527|InvalidOriginKeepaliveTimeout|[InvalidOriginKeepaliveTimeout](#schemainvalidoriginkeepalivetimeout)|
|528|528|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|529|529|IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior|[IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior](#schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior)|
|530|530|TooManyDistributionsAssociatedToFieldLevelEncryptionConfig|[TooManyDistributionsAssociatedToFieldLevelEncryptionConfig](#schematoomanydistributionsassociatedtofieldlevelencryptionconfig)|
|531|531|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|532|532|TooManyDistributionsAssociatedToCachePolicy|[TooManyDistributionsAssociatedToCachePolicy](#schematoomanydistributionsassociatedtocachepolicy)|
|533|533|TooManyDistributionsAssociatedToOriginAccessControl|[TooManyDistributionsAssociatedToOriginAccessControl](#schematoomanydistributionsassociatedtooriginaccesscontrol)|
|534|534|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|535|535|TooManyDistributionsAssociatedToResponseHeadersPolicy|[TooManyDistributionsAssociatedToResponseHeadersPolicy](#schematoomanydistributionsassociatedtoresponseheaderspolicy)|
|536|536|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|537|537|TooManyDistributionsAssociatedToOriginRequestPolicy|[TooManyDistributionsAssociatedToOriginRequestPolicy](#schematoomanydistributionsassociatedtooriginrequestpolicy)|
|538|538|TooManyDistributionsAssociatedToKeyGroup|[TooManyDistributionsAssociatedToKeyGroup](#schematoomanydistributionsassociatedtokeygroup)|
|539|539|TooManyKeyGroupsAssociatedToDistribution|[TooManyKeyGroupsAssociatedToDistribution](#schematoomanykeygroupsassociatedtodistribution)|
|540|540|TrustedKeyGroupDoesNotExist|[TrustedKeyGroupDoesNotExist](#schematrustedkeygroupdoesnotexist)|
|541|541|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|542|542|RealtimeLogConfigOwnerMismatch|[RealtimeLogConfigOwnerMismatch](#schemarealtimelogconfigownermismatch)|
|543|543|ContinuousDeploymentPolicyInUse|[ContinuousDeploymentPolicyInUse](#schemacontinuousdeploymentpolicyinuse)|
|544|544|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|
|545|545|InvalidDomainNameForOriginAccessControl|[InvalidDomainNameForOriginAccessControl](#schemainvaliddomainnamefororiginaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFieldLevelEncryptionConfigs2020_05_31

<a id="opIdListFieldLevelEncryptionConfigs2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption`

List all field-level encryption configurations that have been created in CloudFront for this account.

<h3 id="listfieldlevelencryptionconfigs20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).|
|MaxItems|query|string|false|The maximum number of field-level encryption configurations you want in the response body.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listfieldlevelencryptionconfigs20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFieldLevelEncryptionConfigsResult](#schemalistfieldlevelencryptionconfigsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFieldLevelEncryptionConfig2020_05_31

<a id="opIdCreateFieldLevelEncryptionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"FieldLevelEncryptionConfig":{"CallerReference":{},"Comment":{},"QueryArgProfileConfig":{"ForwardWhenQueryArgProfileIsUnknown":{},"QueryArgProfiles":{"Quantity":{},"Items":{}}},"ContentTypeProfileConfig":{"ForwardWhenContentTypeIsUnknown":{},"ContentTypeProfiles":{"Quantity":{},"Items":{}}}}}'
```

`POST /2020-05-31/field-level-encryption`

Create a new field-level encryption configuration.

> Body parameter

```json
{
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<h3 id="createfieldlevelencryptionconfig20200531-parameters">Parameters</h3>

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
|» FieldLevelEncryptionConfig|body|object|true|A complex data type that includes the profile configurations specified for field-level encryption.|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|
|» » QueryArgProfileConfig|body|object|false|none|
|» » » ForwardWhenQueryArgProfileIsUnknown|body|object|true|none|
|» » » QueryArgProfiles|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» QueryArg|body|object|true|none|
|» ProfileId|body|object|true|none|
|» » ContentTypeProfileConfig|body|object|false|none|
|» » » ForwardWhenContentTypeIsUnknown|body|object|true|none|
|» » » ContentTypeProfiles|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» Format|body|object|true|none|
|» ProfileId|body|object|false|none|
|» ContentType|body|object|true|none|

<h3 id="createfieldlevelencryptionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFieldLevelEncryptionConfigResult](#schemacreatefieldlevelencryptionconfigresult)|
|480|480|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|
|483|483|FieldLevelEncryptionConfigAlreadyExists|[FieldLevelEncryptionConfigAlreadyExists](#schemafieldlevelencryptionconfigalreadyexists)|
|484|484|TooManyFieldLevelEncryptionConfigs|[TooManyFieldLevelEncryptionConfigs](#schematoomanyfieldlevelencryptionconfigs)|
|485|485|TooManyFieldLevelEncryptionQueryArgProfiles|[TooManyFieldLevelEncryptionQueryArgProfiles](#schematoomanyfieldlevelencryptionqueryargprofiles)|
|486|486|TooManyFieldLevelEncryptionContentTypeProfiles|[TooManyFieldLevelEncryptionContentTypeProfiles](#schematoomanyfieldlevelencryptioncontenttypeprofiles)|
|487|487|QueryArgProfileEmpty|[QueryArgProfileEmpty](#schemaqueryargprofileempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFieldLevelEncryptionProfiles2020_05_31

<a id="opIdListFieldLevelEncryptionProfiles2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption-profile`

Request a list of field-level encryption profiles that have been created in CloudFront for this account.

<h3 id="listfieldlevelencryptionprofiles20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).|
|MaxItems|query|string|false|The maximum number of field-level encryption profiles you want in the response body. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listfieldlevelencryptionprofiles20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFieldLevelEncryptionProfilesResult](#schemalistfieldlevelencryptionprofilesresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFieldLevelEncryptionProfile2020_05_31

<a id="opIdCreateFieldLevelEncryptionProfile2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"FieldLevelEncryptionProfileConfig":{"Name":{},"CallerReference":{},"Comment":{},"EncryptionEntities":{"Quantity":{},"Items":{}}}}'
```

`POST /2020-05-31/field-level-encryption-profile`

Create a field-level encryption profile.

> Body parameter

```json
{
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<h3 id="createfieldlevelencryptionprofile20200531-parameters">Parameters</h3>

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
|» FieldLevelEncryptionProfileConfig|body|object|true|A complex data type of profiles for the field-level encryption.|
|» » Name|body|object|false|none|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|
|» » EncryptionEntities|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» PublicKeyId|body|object|true|none|
|» ProviderId|body|object|true|none|
|» FieldPatterns|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|

<h3 id="createfieldlevelencryptionprofile20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFieldLevelEncryptionProfileResult](#schemacreatefieldlevelencryptionprofileresult)|
|480|480|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|
|483|483|FieldLevelEncryptionProfileAlreadyExists|[FieldLevelEncryptionProfileAlreadyExists](#schemafieldlevelencryptionprofilealreadyexists)|
|484|484|FieldLevelEncryptionProfileSizeExceeded|[FieldLevelEncryptionProfileSizeExceeded](#schemafieldlevelencryptionprofilesizeexceeded)|
|485|485|TooManyFieldLevelEncryptionProfiles|[TooManyFieldLevelEncryptionProfiles](#schematoomanyfieldlevelencryptionprofiles)|
|486|486|TooManyFieldLevelEncryptionEncryptionEntities|[TooManyFieldLevelEncryptionEncryptionEntities](#schematoomanyfieldlevelencryptionencryptionentities)|
|487|487|TooManyFieldLevelEncryptionFieldPatterns|[TooManyFieldLevelEncryptionFieldPatterns](#schematoomanyfieldlevelencryptionfieldpatterns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFunctions2020_05_31

<a id="opIdListFunctions2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/function`

<p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listfunctions20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of functions that you want in the response.|
|Stage|query|string|false|An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.|
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
|Stage|DEVELOPMENT|
|Stage|LIVE|

<h3 id="listfunctions20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFunctionsResult](#schemalistfunctionsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFunction2020_05_31

<a id="opIdCreateFunction2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","FunctionConfig":{"Comment":{},"Runtime":{}},"FunctionCode":"password"}'
```

`POST /2020-05-31/function`

<p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>

> Body parameter

```json
{
  "Name": "string",
  "FunctionConfig": {
    "Comment": {},
    "Runtime": {}
  },
  "FunctionCode": "password"
}
```

<h3 id="createfunction20200531-parameters">Parameters</h3>

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
|» Name|body|string|true|A name to identify the function.|
|» FunctionConfig|body|object|true|Contains configuration information about a CloudFront function.|
|» » Comment|body|object|false|none|
|» » Runtime|body|object|false|none|
|» FunctionCode|body|string(password)|true|The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.|

<h3 id="createfunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateFunctionResult](#schemacreatefunctionresult)|
|480|480|TooManyFunctions|[TooManyFunctions](#schematoomanyfunctions)|
|481|481|FunctionAlreadyExists|[FunctionAlreadyExists](#schemafunctionalreadyexists)|
|482|482|FunctionSizeLimitExceeded|[FunctionSizeLimitExceeded](#schemafunctionsizelimitexceeded)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInvalidations2020_05_31

<a id="opIdListInvalidations2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/invalidation \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distribution/{DistributionId}/invalidation`

Lists invalidation batches.

<h3 id="listinvalidations20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The distribution's ID.|
|Marker|query|string|false|Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.|
|MaxItems|query|string|false|The maximum number of invalidation batches that you want in the response body.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listinvalidations20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInvalidationsResult](#schemalistinvalidationsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInvalidation2020_05_31

<a id="opIdCreateInvalidation2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/invalidation \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"InvalidationBatch":{"Paths":{"Quantity":{},"Items":{}},"CallerReference":{}}}'
```

`POST /2020-05-31/distribution/{DistributionId}/invalidation`

Create a new invalidation.

> Body parameter

```json
{
  "InvalidationBatch": {
    "Paths": {
      "Quantity": {},
      "Items": {}
    },
    "CallerReference": {}
  }
}
```

<h3 id="createinvalidation20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The distribution's id.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» InvalidationBatch|body|object|true|An invalidation batch.|
|» » Paths|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » CallerReference|body|object|false|none|

<h3 id="createinvalidation20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateInvalidationResult](#schemacreateinvalidationresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|MissingBody|[MissingBody](#schemamissingbody)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|484|484|BatchTooLarge|[BatchTooLarge](#schemabatchtoolarge)|
|485|485|TooManyInvalidationsInProgress|[TooManyInvalidationsInProgress](#schematoomanyinvalidationsinprogress)|
|486|486|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeyGroups2020_05_31

<a id="opIdListKeyGroups2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/key-group`

<p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listkeygroups20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of key groups that you want in the response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listkeygroups20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeyGroupsResult](#schemalistkeygroupsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateKeyGroup2020_05_31

<a id="opIdCreateKeyGroup2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"KeyGroupConfig":{"Name":{},"Items":{},"Comment":{}}}'
```

`POST /2020-05-31/key-group`

<p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

<h3 id="createkeygroup20200531-parameters">Parameters</h3>

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
|» KeyGroupConfig|body|object|true|<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>|
|» » Name|body|object|false|none|
|» » Items|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="createkeygroup20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateKeyGroupResult](#schemacreatekeygroupresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|KeyGroupAlreadyExists|[KeyGroupAlreadyExists](#schemakeygroupalreadyexists)|
|482|482|TooManyKeyGroups|[TooManyKeyGroups](#schematoomanykeygroups)|
|483|483|TooManyPublicKeysInKeyGroup|[TooManyPublicKeysInKeyGroup](#schematoomanypublickeysinkeygroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMonitoringSubscription2020_05_31

<a id="opIdGetMonitoringSubscription2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributions/string/monitoring-subscription/ \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributions/{DistributionId}/monitoring-subscription/`

Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.

<h3 id="getmonitoringsubscription20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The ID of the distribution that you are getting metrics information for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getmonitoringsubscription20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMonitoringSubscriptionResult](#schemagetmonitoringsubscriptionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|NoSuchMonitoringSubscription|[NoSuchMonitoringSubscription](#schemanosuchmonitoringsubscription)|
|483|483|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMonitoringSubscription2020_05_31

<a id="opIdCreateMonitoringSubscription2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributions/string/monitoring-subscription/ \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"MonitoringSubscription":{"RealtimeMetricsSubscriptionConfig":{"RealtimeMetricsSubscriptionStatus":{}}}}'
```

`POST /2020-05-31/distributions/{DistributionId}/monitoring-subscription/`

<p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "MonitoringSubscription": {
    "RealtimeMetricsSubscriptionConfig": {
      "RealtimeMetricsSubscriptionStatus": {}
    }
  }
}
```

<h3 id="createmonitoringsubscription20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The ID of the distribution that you are enabling metrics for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MonitoringSubscription|body|object|true|A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.|
|» » RealtimeMetricsSubscriptionConfig|body|object|false|none|
|» » » RealtimeMetricsSubscriptionStatus|body|object|true|none|

<h3 id="createmonitoringsubscription20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMonitoringSubscriptionResult](#schemacreatemonitoringsubscriptionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|MonitoringSubscriptionAlreadyExists|[MonitoringSubscriptionAlreadyExists](#schemamonitoringsubscriptionalreadyexists)|
|483|483|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMonitoringSubscription2020_05_31

<a id="opIdDeleteMonitoringSubscription2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributions/string/monitoring-subscription/ \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/distributions/{DistributionId}/monitoring-subscription/`

Disables additional CloudWatch metrics for the specified CloudFront distribution.

<h3 id="deletemonitoringsubscription20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The ID of the distribution that you are disabling metrics for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletemonitoringsubscription20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMonitoringSubscriptionResult](#schemadeletemonitoringsubscriptionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|NoSuchMonitoringSubscription|[NoSuchMonitoringSubscription](#schemanosuchmonitoringsubscription)|
|483|483|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOriginAccessControls2020_05_31

<a id="opIdListOriginAccessControls2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-control`

<p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>

<h3 id="listoriginaccesscontrols20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of origin access controls that you want in the response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listoriginaccesscontrols20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOriginAccessControlsResult](#schemalistoriginaccesscontrolsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOriginAccessControl2020_05_31

<a id="opIdCreateOriginAccessControl2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OriginAccessControlConfig":{"Name":{},"Description":{},"SigningProtocol":{},"SigningBehavior":{},"OriginAccessControlOriginType":{}}}'
```

`POST /2020-05-31/origin-access-control`

<p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

<h3 id="createoriginaccesscontrol20200531-parameters">Parameters</h3>

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
|» OriginAccessControlConfig|body|object|true|A CloudFront origin access control configuration.|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » SigningProtocol|body|object|false|none|
|» » SigningBehavior|body|object|false|none|
|» » OriginAccessControlOriginType|body|object|false|none|

<h3 id="createoriginaccesscontrol20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateOriginAccessControlResult](#schemacreateoriginaccesscontrolresult)|
|480|480|OriginAccessControlAlreadyExists|[OriginAccessControlAlreadyExists](#schemaoriginaccesscontrolalreadyexists)|
|481|481|TooManyOriginAccessControls|[TooManyOriginAccessControls](#schematoomanyoriginaccesscontrols)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOriginRequestPolicies2020_05_31

<a id="opIdListOriginRequestPolicies2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-request-policy`

<p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listoriginrequestpolicies20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of origin request policies that you want in the response.|
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
|Type|managed|
|Type|custom|

<h3 id="listoriginrequestpolicies20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOriginRequestPoliciesResult](#schemalistoriginrequestpoliciesresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOriginRequestPolicy2020_05_31

<a id="opIdCreateOriginRequestPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OriginRequestPolicyConfig":{"Comment":{},"Name":{},"HeadersConfig":{"HeaderBehavior":{},"Headers":{"Quantity":{},"Items":{}}},"CookiesConfig":{"CookieBehavior":{},"Cookies":{"Quantity":{},"Items":{}}},"QueryStringsConfig":{"QueryStringBehavior":{},"QueryStrings":{"Quantity":{},"Items":{}}}}}'
```

`POST /2020-05-31/origin-request-policy`

<p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<h3 id="createoriginrequestpolicy20200531-parameters">Parameters</h3>

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
|» OriginRequestPolicyConfig|body|object|true|<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » HeadersConfig|body|object|false|none|
|» » » HeaderBehavior|body|object|true|none|
|» » » Headers|body|[Headers](#schemaheaders)|false|Contains a list of HTTP header names.|
|» » CookiesConfig|body|object|false|none|
|» » » CookieBehavior|body|object|true|none|
|» » » Cookies|body|[CookieNames](#schemacookienames)|false|Contains a list of cookie names.|
|» » QueryStringsConfig|body|object|false|none|
|» » » QueryStringBehavior|body|object|true|none|
|» » » QueryStrings|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|

<h3 id="createoriginrequestpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateOriginRequestPolicyResult](#schemacreateoriginrequestpolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|OriginRequestPolicyAlreadyExists|[OriginRequestPolicyAlreadyExists](#schemaoriginrequestpolicyalreadyexists)|
|484|484|TooManyOriginRequestPolicies|[TooManyOriginRequestPolicies](#schematoomanyoriginrequestpolicies)|
|485|485|TooManyHeadersInOriginRequestPolicy|[TooManyHeadersInOriginRequestPolicy](#schematoomanyheadersinoriginrequestpolicy)|
|486|486|TooManyCookiesInOriginRequestPolicy|[TooManyCookiesInOriginRequestPolicy](#schematoomanycookiesinoriginrequestpolicy)|
|487|487|TooManyQueryStringsInOriginRequestPolicy|[TooManyQueryStringsInOriginRequestPolicy](#schematoomanyquerystringsinoriginrequestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPublicKeys2020_05_31

<a id="opIdListPublicKeys2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/public-key`

List all public keys that have been added to CloudFront for this account.

<h3 id="listpublickeys20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).|
|MaxItems|query|string|false|The maximum number of public keys you want in the response body.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listpublickeys20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPublicKeysResult](#schemalistpublickeysresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePublicKey2020_05_31

<a id="opIdCreatePublicKey2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PublicKeyConfig":{"CallerReference":{},"Name":{},"EncodedKey":{},"Comment":{}}}'
```

`POST /2020-05-31/public-key`

Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.

> Body parameter

```json
{
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

<h3 id="createpublickey20200531-parameters">Parameters</h3>

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
|» PublicKeyConfig|body|object|true|Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.|
|» » CallerReference|body|object|false|none|
|» » Name|body|object|false|none|
|» » EncodedKey|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="createpublickey20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePublicKeyResult](#schemacreatepublickeyresult)|
|480|480|PublicKeyAlreadyExists|[PublicKeyAlreadyExists](#schemapublickeyalreadyexists)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|TooManyPublicKeys|[TooManyPublicKeys](#schematoomanypublickeys)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRealtimeLogConfigs2020_05_31

<a id="opIdListRealtimeLogConfigs2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/realtime-log-config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/realtime-log-config`

<p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listrealtimelogconfigs20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxItems|query|string|false|The maximum number of real-time log configurations that you want in the response.|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listrealtimelogconfigs20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRealtimeLogConfigsResult](#schemalistrealtimelogconfigsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|482|482|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRealtimeLogConfig2020_05_31

<a id="opIdCreateRealtimeLogConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/realtime-log-config \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EndPoints":[{"StreamType":{},"KinesisStreamConfig":{"RoleARN":{},"StreamARN":{}}}],"Fields":[{}],"Name":"string","SamplingRate":0}'
```

`POST /2020-05-31/realtime-log-config`

<p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "EndPoints": [
    {
      "StreamType": {},
      "KinesisStreamConfig": {
        "RoleARN": {},
        "StreamARN": {}
      }
    }
  ],
  "Fields": [
    {}
  ],
  "Name": "string",
  "SamplingRate": 0
}
```

<h3 id="createrealtimelogconfig20200531-parameters">Parameters</h3>

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
|» EndPoints|body|[[EndPoint](#schemaendpoint)]|true|Contains information about the Amazon Kinesis data stream where you are sending real-time log data.|
|» Fields|body|[object]|true|<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>|
|» Name|body|string|true|A unique name to identify this real-time log configuration.|
|» SamplingRate|body|integer|true|The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.|

<h3 id="createrealtimelogconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateRealtimeLogConfigResult](#schemacreaterealtimelogconfigresult)|
|480|480|RealtimeLogConfigAlreadyExists|[RealtimeLogConfigAlreadyExists](#schemarealtimelogconfigalreadyexists)|
|481|481|TooManyRealtimeLogConfigs|[TooManyRealtimeLogConfigs](#schematoomanyrealtimelogconfigs)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListResponseHeadersPolicies2020_05_31

<a id="opIdListResponseHeadersPolicies2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/response-headers-policy`

<p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listresponseheaderspolicies20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Type|query|string|false|<p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of response headers policies that you want to get in the response.|
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
|Type|managed|
|Type|custom|

<h3 id="listresponseheaderspolicies20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListResponseHeadersPoliciesResult](#schemalistresponseheaderspoliciesresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateResponseHeadersPolicy2020_05_31

<a id="opIdCreateResponseHeadersPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResponseHeadersPolicyConfig":{"Comment":{},"Name":{},"CorsConfig":{"AccessControlAllowOrigins":{"Quantity":{},"Items":{}},"AccessControlAllowHeaders":{"Quantity":{},"Items":{}},"AccessControlAllowMethods":{"Quantity":{},"Items":{}},"AccessControlAllowCredentials":{},"AccessControlExposeHeaders":{"Quantity":{},"Items":{}},"AccessControlMaxAgeSec":{},"OriginOverride":{}},"SecurityHeadersConfig":{"XSSProtection":{"Override":{},"Protection":{},"ModeBlock":{},"ReportUri":{}},"FrameOptions":{"Override":{},"FrameOption":{}},"ReferrerPolicy":{"Override":{},"ReferrerPolicy":{}},"ContentSecurityPolicy":{"Override":{},"ContentSecurityPolicy":{}},"ContentTypeOptions":{"Override":{}},"StrictTransportSecurity":{"Override":{},"IncludeSubdomains":{},"Preload":{},"AccessControlMaxAgeSec":{}}},"ServerTimingHeadersConfig":{"Enabled":{},"SamplingRate":{}},"CustomHeadersConfig":{"Quantity":{},"Items":{}},"RemoveHeadersConfig":{"Quantity":{},"Items":{}}}}'
```

`POST /2020-05-31/response-headers-policy`

<p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

> Body parameter

```json
{
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<h3 id="createresponseheaderspolicy20200531-parameters">Parameters</h3>

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
|» ResponseHeadersPolicyConfig|body|object|true|<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » CorsConfig|body|object|false|none|
|» » » AccessControlAllowOrigins|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowHeaders|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowMethods|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowCredentials|body|object|true|none|
|» » » AccessControlExposeHeaders|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » AccessControlMaxAgeSec|body|object|false|none|
|» » » OriginOverride|body|object|true|none|
|» » SecurityHeadersConfig|body|object|false|none|
|» » » XSSProtection|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » Protection|body|object|true|none|
|» » » » ModeBlock|body|object|false|none|
|» » » » ReportUri|body|object|false|none|
|» » » FrameOptions|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » FrameOption|body|object|true|none|
|» » » ReferrerPolicy|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » ReferrerPolicy|body|object|true|none|
|» » » ContentSecurityPolicy|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » ContentSecurityPolicy|body|object|true|none|
|» » » ContentTypeOptions|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » StrictTransportSecurity|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » IncludeSubdomains|body|object|false|none|
|» » » » Preload|body|object|false|none|
|» » » » AccessControlMaxAgeSec|body|object|true|none|
|» » ServerTimingHeadersConfig|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » SamplingRate|body|object|false|none|
|» » CustomHeadersConfig|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Header|body|object|true|none|
|» Value|body|object|true|none|
|» Override|body|object|true|none|
|» » RemoveHeadersConfig|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Header|body|object|true|none|

<h3 id="createresponseheaderspolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateResponseHeadersPolicyResult](#schemacreateresponseheaderspolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|ResponseHeadersPolicyAlreadyExists|[ResponseHeadersPolicyAlreadyExists](#schemaresponseheaderspolicyalreadyexists)|
|484|484|TooManyResponseHeadersPolicies|[TooManyResponseHeadersPolicies](#schematoomanyresponseheaderspolicies)|
|485|485|TooManyCustomHeadersInResponseHeadersPolicy|[TooManyCustomHeadersInResponseHeadersPolicy](#schematoomanycustomheadersinresponseheaderspolicy)|
|486|486|TooLongCSPInResponseHeadersPolicy|[TooLongCSPInResponseHeadersPolicy](#schematoolongcspinresponseheaderspolicy)|
|487|487|TooManyRemoveHeadersInResponseHeadersPolicy|[TooManyRemoveHeadersInResponseHeadersPolicy](#schematoomanyremoveheadersinresponseheaderspolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStreamingDistributions2020_05_31

<a id="opIdListStreamingDistributions2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/streaming-distribution`

List streaming distributions.

<h3 id="liststreamingdistributions20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|The value that you provided for the <code>Marker</code> request parameter.|
|MaxItems|query|string|false|The value that you provided for the <code>MaxItems</code> request parameter.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="liststreamingdistributions20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStreamingDistributionsResult](#schemaliststreamingdistributionsresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingDistribution2020_05_31

<a id="opIdCreateStreamingDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StreamingDistributionConfig":{"CallerReference":{},"S3Origin":{"DomainName":{},"OriginAccessIdentity":{}},"Aliases":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"Bucket":{},"Prefix":{}},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"PriceClass":{},"Enabled":{}}}'
```

`POST /2020-05-31/streaming-distribution`

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.

> Body parameter

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

<h3 id="createstreamingdistribution20200531-parameters">Parameters</h3>

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
|» StreamingDistributionConfig|body|object|true|The RTMP distribution's configuration information.|
|» » CallerReference|body|object|false|none|
|» » S3Origin|body|object|false|none|
|» » » DomainName|body|object|true|none|
|» » » OriginAccessIdentity|body|object|true|none|
|» » Aliases|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » Comment|body|object|false|none|
|» » Logging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|true|none|
|» » TrustedSigners|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » PriceClass|body|object|false|none|
|» » Enabled|body|object|false|none|

<h3 id="createstreamingdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateStreamingDistributionResult](#schemacreatestreamingdistributionresult)|
|480|480|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|481|481|StreamingDistributionAlreadyExists|[StreamingDistributionAlreadyExists](#schemastreamingdistributionalreadyexists)|
|482|482|InvalidOrigin|[InvalidOrigin](#schemainvalidorigin)|
|483|483|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|484|484|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|485|485|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|486|486|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|487|487|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|488|488|MissingBody|[MissingBody](#schemamissingbody)|
|489|489|TooManyStreamingDistributionCNAMEs|[TooManyStreamingDistributionCNAMEs](#schematoomanystreamingdistributioncnames)|
|490|490|TooManyStreamingDistributions|[TooManyStreamingDistributions](#schematoomanystreamingdistributions)|
|491|491|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|492|492|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateStreamingDistributionWithTags2020_05_31

<a id="opIdCreateStreamingDistributionWithTags2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution#WithTags?WithTags=true' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StreamingDistributionConfigWithTags":{"StreamingDistributionConfig":{"CallerReference":{},"S3Origin":{"DomainName":{},"OriginAccessIdentity":{}},"Aliases":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"Bucket":{},"Prefix":{}},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"PriceClass":{},"Enabled":{}},"Tags":{"Items":{}}}}'
```

`POST /2020-05-31/streaming-distribution#WithTags`

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.

> Body parameter

```json
{
  "StreamingDistributionConfigWithTags": {
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    },
    "Tags": {
      "Items": {}
    }
  }
}
```

<h3 id="createstreamingdistributionwithtags20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|WithTags|query|boolean|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StreamingDistributionConfigWithTags|body|object|true|A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.|
|» » StreamingDistributionConfig|body|object|false|none|
|» » » CallerReference|body|object|true|none|
|» » » S3Origin|body|object|true|none|
|» » » » DomainName|body|object|true|none|
|» » » » OriginAccessIdentity|body|object|true|none|
|» » » Aliases|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » Comment|body|object|true|none|
|» » » Logging|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Bucket|body|object|true|none|
|» » » » Prefix|body|object|true|none|
|» » » TrustedSigners|body|object|true|none|
|» » » » Enabled|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » PriceClass|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » Tags|body|object|false|none|
|» » » Items|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|WithTags|true|

<h3 id="createstreamingdistributionwithtags20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateStreamingDistributionWithTagsResult](#schemacreatestreamingdistributionwithtagsresult)|
|480|480|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|481|481|StreamingDistributionAlreadyExists|[StreamingDistributionAlreadyExists](#schemastreamingdistributionalreadyexists)|
|482|482|InvalidOrigin|[InvalidOrigin](#schemainvalidorigin)|
|483|483|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|484|484|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|485|485|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|486|486|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|487|487|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|488|488|MissingBody|[MissingBody](#schemamissingbody)|
|489|489|TooManyStreamingDistributionCNAMEs|[TooManyStreamingDistributionCNAMEs](#schematoomanystreamingdistributioncnames)|
|490|490|TooManyStreamingDistributions|[TooManyStreamingDistributions](#schematoomanystreamingdistributions)|
|491|491|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|492|492|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|493|493|InvalidTagging|[InvalidTagging](#schemainvalidtagging)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCachePolicy2020_05_31

<a id="opIdGetCachePolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/cache-policy/{Id}`

<p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>

<h3 id="getcachepolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcachepolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCachePolicyResult](#schemagetcachepolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCachePolicy2020_05_31

<a id="opIdUpdateCachePolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CachePolicyConfig":{"Comment":{},"Name":{},"DefaultTTL":{},"MaxTTL":{},"MinTTL":{},"ParametersInCacheKeyAndForwardedToOrigin":{"EnableAcceptEncodingGzip":{},"EnableAcceptEncodingBrotli":{},"HeadersConfig":{"HeaderBehavior":{},"Headers":{"Quantity":{},"Items":{}}},"CookiesConfig":{"CookieBehavior":{},"Cookies":{"Quantity":{},"Items":{}}},"QueryStringsConfig":{"QueryStringBehavior":{},"QueryStrings":{"Quantity":{},"Items":{}}}}}}'
```

`PUT /2020-05-31/cache-policy/{Id}`

<p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

<h3 id="updatecachepolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.|
|If-Match|header|string|false|The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CachePolicyConfig|body|object|true|<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » DefaultTTL|body|object|false|none|
|» » MaxTTL|body|object|false|none|
|» » MinTTL|body|object|false|none|
|» » ParametersInCacheKeyAndForwardedToOrigin|body|object|false|none|
|» » » EnableAcceptEncodingGzip|body|object|true|none|
|» » » EnableAcceptEncodingBrotli|body|object|false|none|
|» » » HeadersConfig|body|object|true|none|
|» » » » HeaderBehavior|body|object|true|none|
|» » » » Headers|body|[Headers](#schemaheaders)|false|Contains a list of HTTP header names.|
|» » » CookiesConfig|body|object|true|none|
|» » » » CookieBehavior|body|object|true|none|
|» » » » Cookies|body|[CookieNames](#schemacookienames)|false|Contains a list of cookie names.|
|» » » QueryStringsConfig|body|object|true|none|
|» » » » QueryStringBehavior|body|object|true|none|
|» » » » QueryStrings|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|

<h3 id="updatecachepolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCachePolicyResult](#schemaupdatecachepolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|485|485|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|CachePolicyAlreadyExists|[CachePolicyAlreadyExists](#schemacachepolicyalreadyexists)|
|488|488|TooManyHeadersInCachePolicy|[TooManyHeadersInCachePolicy](#schematoomanyheadersincachepolicy)|
|489|489|TooManyCookiesInCachePolicy|[TooManyCookiesInCachePolicy](#schematoomanycookiesincachepolicy)|
|490|490|TooManyQueryStringsInCachePolicy|[TooManyQueryStringsInCachePolicy](#schematoomanyquerystringsincachepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCachePolicy2020_05_31

<a id="opIdDeleteCachePolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/cache-policy/{Id}`

<p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>

<h3 id="deletecachepolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.|
|If-Match|header|string|false|The version of the cache policy that you are deleting. The version is the cache policy's <code>ETag</code> value, which you can get using <code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or <code>GetCachePolicyConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletecachepolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|IllegalDelete|[IllegalDelete](#schemaillegaldelete)|
|485|485|CachePolicyInUse|[CachePolicyInUse](#schemacachepolicyinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCloudFrontOriginAccessIdentity2020_05_31

<a id="opIdGetCloudFrontOriginAccessIdentity2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-identity/cloudfront/{Id}`

Get the information about an origin access identity.

<h3 id="getcloudfrontoriginaccessidentity20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identity's ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcloudfrontoriginaccessidentity20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCloudFrontOriginAccessIdentityResult](#schemagetcloudfrontoriginaccessidentityresult)|
|480|480|NoSuchCloudFrontOriginAccessIdentity|[NoSuchCloudFrontOriginAccessIdentity](#schemanosuchcloudfrontoriginaccessidentity)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCloudFrontOriginAccessIdentity2020_05_31

<a id="opIdDeleteCloudFrontOriginAccessIdentity2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/origin-access-identity/cloudfront/{Id}`

Delete an origin access identity.

<h3 id="deletecloudfrontoriginaccessidentity20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The origin access identity's ID.|
|If-Match|header|string|false|The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletecloudfrontoriginaccessidentity20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchCloudFrontOriginAccessIdentity|[NoSuchCloudFrontOriginAccessIdentity](#schemanosuchcloudfrontoriginaccessidentity)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|CloudFrontOriginAccessIdentityInUse|[CloudFrontOriginAccessIdentityInUse](#schemacloudfrontoriginaccessidentityinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContinuousDeploymentPolicy2020_05_31

<a id="opIdGetContinuousDeploymentPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/continuous-deployment-policy/{Id}`

Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).

<h3 id="getcontinuousdeploymentpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the continuous deployment policy that you are getting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcontinuousdeploymentpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContinuousDeploymentPolicyResult](#schemagetcontinuousdeploymentpolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateContinuousDeploymentPolicy2020_05_31

<a id="opIdUpdateContinuousDeploymentPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ContinuousDeploymentPolicyConfig":{"StagingDistributionDnsNames":{"Quantity":{},"Items":{}},"Enabled":{},"TrafficConfig":{"SingleWeightConfig":{"Weight":{},"SessionStickinessConfig":{"IdleTTL":{},"MaximumTTL":{}}},"SingleHeaderConfig":{"Header":{},"Value":{}},"Type":{}}}}'
```

`PUT /2020-05-31/continuous-deployment-policy/{Id}`

<p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

<h3 id="updatecontinuousdeploymentpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the continuous deployment policy that you are updating.|
|If-Match|header|string|false|The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ContinuousDeploymentPolicyConfig|body|object|true|Contains the configuration for a continuous deployment policy.|
|» » StagingDistributionDnsNames|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » TrafficConfig|body|object|false|none|
|» » » SingleWeightConfig|body|object|false|none|
|» » » » Weight|body|object|true|none|
|» » » » SessionStickinessConfig|body|[SessionStickinessConfig](#schemasessionstickinessconfig)|false|Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.|
|» » » SingleHeaderConfig|body|object|false|none|
|» » » » Header|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » Type|body|object|true|none|

<h3 id="updatecontinuousdeploymentpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateContinuousDeploymentPolicyResult](#schemaupdatecontinuousdeploymentpolicyresult)|
|480|480|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|483|483|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|484|484|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|485|485|StagingDistributionInUse|[StagingDistributionInUse](#schemastagingdistributioninuse)|
|486|486|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContinuousDeploymentPolicy2020_05_31

<a id="opIdDeleteContinuousDeploymentPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/continuous-deployment-policy/{Id}`

<p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>

<h3 id="deletecontinuousdeploymentpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the continuous deployment policy that you are deleting.|
|If-Match|header|string|false|The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletecontinuousdeploymentpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|ContinuousDeploymentPolicyInUse|[ContinuousDeploymentPolicyInUse](#schemacontinuousdeploymentpolicyinuse)|
|485|485|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistribution2020_05_31

<a id="opIdGetDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distribution/{Id}`

Get the information about a distribution.

<h3 id="getdistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The distribution's ID. If the ID is empty, an empty distribution configuration is returned.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionResult](#schemagetdistributionresult)|
|480|480|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDistribution2020_05_31

<a id="opIdDeleteDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/distribution/{Id}`

Delete a distribution.

<h3 id="deletedistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The distribution ID.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when you disabled the distribution. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletedistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|DistributionNotDisabled|[DistributionNotDisabled](#schemadistributionnotdisabled)|
|482|482|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|483|483|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|484|484|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFieldLevelEncryption2020_05_31

<a id="opIdGetFieldLevelEncryption2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption/{Id}`

Get the field-level encryption configuration information.

<h3 id="getfieldlevelencryption20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Request the ID for the field-level encryption configuration information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getfieldlevelencryption20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFieldLevelEncryptionResult](#schemagetfieldlevelencryptionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFieldLevelEncryptionConfig2020_05_31

<a id="opIdDeleteFieldLevelEncryptionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/field-level-encryption/{Id}`

Remove a field-level encryption configuration.

<h3 id="deletefieldlevelencryptionconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the configuration you want to delete from CloudFront.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletefieldlevelencryptionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|FieldLevelEncryptionConfigInUse|[FieldLevelEncryptionConfigInUse](#schemafieldlevelencryptionconfiginuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFieldLevelEncryptionProfile2020_05_31

<a id="opIdGetFieldLevelEncryptionProfile2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption-profile/{Id}`

Get the field-level encryption profile information.

<h3 id="getfieldlevelencryptionprofile20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Get the ID for the field-level encryption profile information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getfieldlevelencryptionprofile20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFieldLevelEncryptionProfileResult](#schemagetfieldlevelencryptionprofileresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFieldLevelEncryptionProfile2020_05_31

<a id="opIdDeleteFieldLevelEncryptionProfile2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/field-level-encryption-profile/{Id}`

Remove a field-level encryption profile.

<h3 id="deletefieldlevelencryptionprofile20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Request the ID of the profile you want to delete from CloudFront.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletefieldlevelencryptionprofile20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|FieldLevelEncryptionProfileInUse|[FieldLevelEncryptionProfileInUse](#schemafieldlevelencryptionprofileinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFunction2020_05_31

<a id="opIdUpdateFunction2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string#If-Match' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'If-Match: string' \
  -d '{"FunctionConfig":{"Comment":{},"Runtime":{}},"FunctionCode":"password"}'
```

`PUT /2020-05-31/function/{Name}#If-Match`

<p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

> Body parameter

```json
{
  "FunctionConfig": {
    "Comment": {},
    "Runtime": {}
  },
  "FunctionCode": "password"
}
```

<h3 id="updatefunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function that you are updating.|
|If-Match|header|string|true|The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FunctionConfig|body|object|true|Contains configuration information about a CloudFront function.|
|» » Comment|body|object|false|none|
|» » Runtime|body|object|false|none|
|» FunctionCode|body|string(password)|true|The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.|

<h3 id="updatefunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFunctionResult](#schemaupdatefunctionresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|FunctionSizeLimitExceeded|[FunctionSizeLimitExceeded](#schemafunctionsizelimitexceeded)|
|485|485|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFunction2020_05_31

<a id="opIdDeleteFunction2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string#If-Match' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'If-Match: string'
```

`DELETE /2020-05-31/function/{Name}#If-Match`

<p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

<h3 id="deletefunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function that you are deleting.|
|If-Match|header|string|true|The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletefunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|481|481|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|482|482|FunctionInUse|[FunctionInUse](#schemafunctioninuse)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyGroup2020_05_31

<a id="opIdGetKeyGroup2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/key-group/{Id}`

<p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>

<h3 id="getkeygroup20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getkeygroup20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyGroupResult](#schemagetkeygroupresult)|
|480|480|NoSuchResource|[NoSuchResource](#schemanosuchresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateKeyGroup2020_05_31

<a id="opIdUpdateKeyGroup2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"KeyGroupConfig":{"Name":{},"Items":{},"Comment":{}}}'
```

`PUT /2020-05-31/key-group/{Id}`

<p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

<h3 id="updatekeygroup20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the key group that you are updating.|
|If-Match|header|string|false|The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» KeyGroupConfig|body|object|true|<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>|
|» » Name|body|object|false|none|
|» » Items|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="updatekeygroup20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateKeyGroupResult](#schemaupdatekeygroupresult)|
|480|480|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|481|481|NoSuchResource|[NoSuchResource](#schemanosuchresource)|
|482|482|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|483|483|KeyGroupAlreadyExists|[KeyGroupAlreadyExists](#schemakeygroupalreadyexists)|
|484|484|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|485|485|TooManyPublicKeysInKeyGroup|[TooManyPublicKeysInKeyGroup](#schematoomanypublickeysinkeygroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteKeyGroup2020_05_31

<a id="opIdDeleteKeyGroup2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/key-group/{Id}`

<p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>

<h3 id="deletekeygroup20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.|
|If-Match|header|string|false|The version of the key group that you are deleting. The version is the key group's <code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletekeygroup20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|481|481|NoSuchResource|[NoSuchResource](#schemanosuchresource)|
|482|482|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|483|483|ResourceInUse|[ResourceInUse](#schemaresourceinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOriginAccessControl2020_05_31

<a id="opIdGetOriginAccessControl2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-control/{Id}`

Gets a CloudFront origin access control, including its unique identifier.

<h3 id="getoriginaccesscontrol20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier of the origin access control.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getoriginaccesscontrol20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOriginAccessControlResult](#schemagetoriginaccesscontrolresult)|
|480|480|NoSuchOriginAccessControl|[NoSuchOriginAccessControl](#schemanosuchoriginaccesscontrol)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOriginAccessControl2020_05_31

<a id="opIdDeleteOriginAccessControl2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/origin-access-control/{Id}`

<p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>

<h3 id="deleteoriginaccesscontrol20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier of the origin access control that you are deleting.|
|If-Match|header|string|false|The current version (<code>ETag</code> value) of the origin access control that you are deleting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteoriginaccesscontrol20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchOriginAccessControl|[NoSuchOriginAccessControl](#schemanosuchoriginaccesscontrol)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|OriginAccessControlInUse|[OriginAccessControlInUse](#schemaoriginaccesscontrolinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOriginRequestPolicy2020_05_31

<a id="opIdGetOriginRequestPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-request-policy/{Id}`

<p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>

<h3 id="getoriginrequestpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getoriginrequestpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOriginRequestPolicyResult](#schemagetoriginrequestpolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOriginRequestPolicy2020_05_31

<a id="opIdUpdateOriginRequestPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OriginRequestPolicyConfig":{"Comment":{},"Name":{},"HeadersConfig":{"HeaderBehavior":{},"Headers":{"Quantity":{},"Items":{}}},"CookiesConfig":{"CookieBehavior":{},"Cookies":{"Quantity":{},"Items":{}}},"QueryStringsConfig":{"QueryStringBehavior":{},"QueryStrings":{"Quantity":{},"Items":{}}}}}'
```

`PUT /2020-05-31/origin-request-policy/{Id}`

<p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<h3 id="updateoriginrequestpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.|
|If-Match|header|string|false|The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OriginRequestPolicyConfig|body|object|true|<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » HeadersConfig|body|object|false|none|
|» » » HeaderBehavior|body|object|true|none|
|» » » Headers|body|[Headers](#schemaheaders)|false|Contains a list of HTTP header names.|
|» » CookiesConfig|body|object|false|none|
|» » » CookieBehavior|body|object|true|none|
|» » » Cookies|body|[CookieNames](#schemacookienames)|false|Contains a list of cookie names.|
|» » QueryStringsConfig|body|object|false|none|
|» » » QueryStringBehavior|body|object|true|none|
|» » » QueryStrings|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|

<h3 id="updateoriginrequestpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOriginRequestPolicyResult](#schemaupdateoriginrequestpolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|485|485|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|OriginRequestPolicyAlreadyExists|[OriginRequestPolicyAlreadyExists](#schemaoriginrequestpolicyalreadyexists)|
|488|488|TooManyHeadersInOriginRequestPolicy|[TooManyHeadersInOriginRequestPolicy](#schematoomanyheadersinoriginrequestpolicy)|
|489|489|TooManyCookiesInOriginRequestPolicy|[TooManyCookiesInOriginRequestPolicy](#schematoomanycookiesinoriginrequestpolicy)|
|490|490|TooManyQueryStringsInOriginRequestPolicy|[TooManyQueryStringsInOriginRequestPolicy](#schematoomanyquerystringsinoriginrequestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOriginRequestPolicy2020_05_31

<a id="opIdDeleteOriginRequestPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/origin-request-policy/{Id}`

<p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>

<h3 id="deleteoriginrequestpolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.|
|If-Match|header|string|false|The version of the origin request policy that you are deleting. The version is the origin request policy's <code>ETag</code> value, which you can get using <code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or <code>GetOriginRequestPolicyConfig</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteoriginrequestpolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|IllegalDelete|[IllegalDelete](#schemaillegaldelete)|
|485|485|OriginRequestPolicyInUse|[OriginRequestPolicyInUse](#schemaoriginrequestpolicyinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPublicKey2020_05_31

<a id="opIdGetPublicKey2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/public-key/{Id}`

Gets a public key.

<h3 id="getpublickey20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the public key you are getting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getpublickey20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPublicKeyResult](#schemagetpublickeyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePublicKey2020_05_31

<a id="opIdDeletePublicKey2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/public-key/{Id}`

Remove a public key you previously added to CloudFront.

<h3 id="deletepublickey20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the public key you want to remove from CloudFront.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletepublickey20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|PublicKeyInUse|[PublicKeyInUse](#schemapublickeyinuse)|
|482|482|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|483|483|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|
|484|484|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRealtimeLogConfig2020_05_31

<a id="opIdDeleteRealtimeLogConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/delete-realtime-log-config/ \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","ARN":"string"}'
```

`POST /2020-05-31/delete-realtime-log-config/`

<p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>

> Body parameter

```json
{
  "Name": "string",
  "ARN": "string"
}
```

<h3 id="deleterealtimelogconfig20200531-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the real-time log configuration to delete.|
|» ARN|body|string|false|The Amazon Resource Name (ARN) of the real-time log configuration to delete.|

<h3 id="deleterealtimelogconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|481|481|RealtimeLogConfigInUse|[RealtimeLogConfigInUse](#schemarealtimelogconfiginuse)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResponseHeadersPolicy2020_05_31

<a id="opIdGetResponseHeadersPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/response-headers-policy/{Id}`

<p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>

<h3 id="getresponseheaderspolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getresponseheaderspolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResponseHeadersPolicyResult](#schemagetresponseheaderspolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateResponseHeadersPolicy2020_05_31

<a id="opIdUpdateResponseHeadersPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"ResponseHeadersPolicyConfig":{"Comment":{},"Name":{},"CorsConfig":{"AccessControlAllowOrigins":{"Quantity":{},"Items":{}},"AccessControlAllowHeaders":{"Quantity":{},"Items":{}},"AccessControlAllowMethods":{"Quantity":{},"Items":{}},"AccessControlAllowCredentials":{},"AccessControlExposeHeaders":{"Quantity":{},"Items":{}},"AccessControlMaxAgeSec":{},"OriginOverride":{}},"SecurityHeadersConfig":{"XSSProtection":{"Override":{},"Protection":{},"ModeBlock":{},"ReportUri":{}},"FrameOptions":{"Override":{},"FrameOption":{}},"ReferrerPolicy":{"Override":{},"ReferrerPolicy":{}},"ContentSecurityPolicy":{"Override":{},"ContentSecurityPolicy":{}},"ContentTypeOptions":{"Override":{}},"StrictTransportSecurity":{"Override":{},"IncludeSubdomains":{},"Preload":{},"AccessControlMaxAgeSec":{}}},"ServerTimingHeadersConfig":{"Enabled":{},"SamplingRate":{}},"CustomHeadersConfig":{"Quantity":{},"Items":{}},"RemoveHeadersConfig":{"Quantity":{},"Items":{}}}}'
```

`PUT /2020-05-31/response-headers-policy/{Id}`

<p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<h3 id="updateresponseheaderspolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier for the response headers policy that you are updating.|
|If-Match|header|string|false|<p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ResponseHeadersPolicyConfig|body|object|true|<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>|
|» » Comment|body|object|false|none|
|» » Name|body|object|false|none|
|» » CorsConfig|body|object|false|none|
|» » » AccessControlAllowOrigins|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowHeaders|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowMethods|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|true|none|
|» » » AccessControlAllowCredentials|body|object|true|none|
|» » » AccessControlExposeHeaders|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » AccessControlMaxAgeSec|body|object|false|none|
|» » » OriginOverride|body|object|true|none|
|» » SecurityHeadersConfig|body|object|false|none|
|» » » XSSProtection|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » Protection|body|object|true|none|
|» » » » ModeBlock|body|object|false|none|
|» » » » ReportUri|body|object|false|none|
|» » » FrameOptions|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » FrameOption|body|object|true|none|
|» » » ReferrerPolicy|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » ReferrerPolicy|body|object|true|none|
|» » » ContentSecurityPolicy|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » ContentSecurityPolicy|body|object|true|none|
|» » » ContentTypeOptions|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » StrictTransportSecurity|body|object|false|none|
|» » » » Override|body|object|true|none|
|» » » » IncludeSubdomains|body|object|false|none|
|» » » » Preload|body|object|false|none|
|» » » » AccessControlMaxAgeSec|body|object|true|none|
|» » ServerTimingHeadersConfig|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » SamplingRate|body|object|false|none|
|» » CustomHeadersConfig|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Header|body|object|true|none|
|» Value|body|object|true|none|
|» Override|body|object|true|none|
|» » RemoveHeadersConfig|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Header|body|object|true|none|

<h3 id="updateresponseheaderspolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateResponseHeadersPolicyResult](#schemaupdateresponseheaderspolicyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|485|485|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|ResponseHeadersPolicyAlreadyExists|[ResponseHeadersPolicyAlreadyExists](#schemaresponseheaderspolicyalreadyexists)|
|488|488|TooManyCustomHeadersInResponseHeadersPolicy|[TooManyCustomHeadersInResponseHeadersPolicy](#schematoomanycustomheadersinresponseheaderspolicy)|
|489|489|TooLongCSPInResponseHeadersPolicy|[TooLongCSPInResponseHeadersPolicy](#schematoolongcspinresponseheaderspolicy)|
|490|490|TooManyRemoveHeadersInResponseHeadersPolicy|[TooManyRemoveHeadersInResponseHeadersPolicy](#schematoomanyremoveheadersinresponseheaderspolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteResponseHeadersPolicy2020_05_31

<a id="opIdDeleteResponseHeadersPolicy2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/response-headers-policy/{Id}`

<p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>

<h3 id="deleteresponseheaderspolicy20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>|
|If-Match|header|string|false|<p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteresponseheaderspolicy20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|IllegalDelete|[IllegalDelete](#schemaillegaldelete)|
|485|485|ResponseHeadersPolicyInUse|[ResponseHeadersPolicyInUse](#schemaresponseheaderspolicyinuse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingDistribution2020_05_31

<a id="opIdGetStreamingDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/streaming-distribution/{Id}`

Gets information about a specified RTMP distribution, including the distribution configuration.

<h3 id="getstreamingdistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The streaming distribution's ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getstreamingdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingDistributionResult](#schemagetstreamingdistributionresult)|
|480|480|NoSuchStreamingDistribution|[NoSuchStreamingDistribution](#schemanosuchstreamingdistribution)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStreamingDistribution2020_05_31

<a id="opIdDeleteStreamingDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2020-05-31/streaming-distribution/{Id}`

<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

<h3 id="deletestreamingdistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The distribution ID.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when you disabled the streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletestreamingdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|StreamingDistributionNotDisabled|[StreamingDistributionNotDisabled](#schemastreamingdistributionnotdisabled)|
|482|482|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|483|483|NoSuchStreamingDistribution|[NoSuchStreamingDistribution](#schemanosuchstreamingdistribution)|
|484|484|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFunction2020_05_31

<a id="opIdDescribeFunction2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string/describe \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/function/{Name}/describe`

<p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>

<h3 id="describefunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function that you are getting information about.|
|Stage|query|string|false|The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.|
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
|Stage|DEVELOPMENT|
|Stage|LIVE|

<h3 id="describefunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFunctionResult](#schemadescribefunctionresult)|
|480|480|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCachePolicyConfig2020_05_31

<a id="opIdGetCachePolicyConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/cache-policy/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/cache-policy/{Id}/config`

<p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>

<h3 id="getcachepolicyconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcachepolicyconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCachePolicyConfigResult](#schemagetcachepolicyconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCloudFrontOriginAccessIdentityConfig2020_05_31

<a id="opIdGetCloudFrontOriginAccessIdentityConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-identity/cloudfront/{Id}/config`

Get the configuration information about an origin access identity.

<h3 id="getcloudfrontoriginaccessidentityconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identity's ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcloudfrontoriginaccessidentityconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCloudFrontOriginAccessIdentityConfigResult](#schemagetcloudfrontoriginaccessidentityconfigresult)|
|480|480|NoSuchCloudFrontOriginAccessIdentity|[NoSuchCloudFrontOriginAccessIdentity](#schemanosuchcloudfrontoriginaccessidentity)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateCloudFrontOriginAccessIdentity2020_05_31

<a id="opIdUpdateCloudFrontOriginAccessIdentity2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-identity/cloudfront/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CloudFrontOriginAccessIdentityConfig":{"CallerReference":{},"Comment":{}}}'
```

`PUT /2020-05-31/origin-access-identity/cloudfront/{Id}/config`

Update an origin access identity.

> Body parameter

```json
{
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

<h3 id="updatecloudfrontoriginaccessidentity20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identity's id.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CloudFrontOriginAccessIdentityConfig|body|object|true|Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="updatecloudfrontoriginaccessidentity20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateCloudFrontOriginAccessIdentityResult](#schemaupdatecloudfrontoriginaccessidentityresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|483|483|MissingBody|[MissingBody](#schemamissingbody)|
|484|484|NoSuchCloudFrontOriginAccessIdentity|[NoSuchCloudFrontOriginAccessIdentity](#schemanosuchcloudfrontoriginaccessidentity)|
|485|485|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|486|486|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|487|487|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContinuousDeploymentPolicyConfig2020_05_31

<a id="opIdGetContinuousDeploymentPolicyConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/continuous-deployment-policy/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/continuous-deployment-policy/{Id}/config`

Gets configuration information about a continuous deployment policy.

<h3 id="getcontinuousdeploymentpolicyconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the continuous deployment policy whose configuration you are getting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getcontinuousdeploymentpolicyconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContinuousDeploymentPolicyConfigResult](#schemagetcontinuousdeploymentpolicyconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributionConfig2020_05_31

<a id="opIdGetDistributionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distribution/{Id}/config`

Get the configuration information about a distribution.

<h3 id="getdistributionconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The distribution's ID. If the ID is empty, an empty distribution configuration is returned.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getdistributionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionConfigResult](#schemagetdistributionconfigresult)|
|480|480|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDistribution2020_05_31

<a id="opIdUpdateDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"DistributionConfig":{"CallerReference":{},"Aliases":{"Quantity":{},"Items":{}},"DefaultRootObject":{},"Origins":{"Quantity":{},"Items":{}},"OriginGroups":{"Quantity":{},"Items":{}},"DefaultCacheBehavior":{"TargetOriginId":{},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"TrustedKeyGroups":{"Enabled":{},"Quantity":{},"Items":{}},"ViewerProtocolPolicy":{},"AllowedMethods":{"Quantity":{},"Items":{},"CachedMethods":{"Quantity":{},"Items":{}}},"SmoothStreaming":{},"Compress":{},"LambdaFunctionAssociations":{"Quantity":{},"Items":{}},"FunctionAssociations":{"Quantity":{},"Items":{}},"FieldLevelEncryptionId":{},"RealtimeLogConfigArn":{},"CachePolicyId":{},"OriginRequestPolicyId":{},"ResponseHeadersPolicyId":{},"ForwardedValues":{"QueryString":{},"Cookies":{"Forward":{},"WhitelistedNames":{"Quantity":{},"Items":{}}},"Headers":{"Quantity":{},"Items":{}},"QueryStringCacheKeys":{"Quantity":{},"Items":{}}},"MinTTL":{},"DefaultTTL":{},"MaxTTL":{}},"CacheBehaviors":{"Quantity":{},"Items":{}},"CustomErrorResponses":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"IncludeCookies":{},"Bucket":{},"Prefix":{}},"PriceClass":{},"Enabled":{},"ViewerCertificate":{"CloudFrontDefaultCertificate":{},"IAMCertificateId":{},"ACMCertificateArn":{},"SSLSupportMethod":{},"MinimumProtocolVersion":{},"Certificate":{},"CertificateSource":{}},"Restrictions":{"GeoRestriction":{"RestrictionType":{},"Quantity":{},"Items":{}}},"WebACLId":{},"HttpVersion":{},"IsIPV6Enabled":{},"ContinuousDeploymentPolicyId":{},"Staging":{}}}'
```

`PUT /2020-05-31/distribution/{Id}/config`

<p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>

> Body parameter

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  }
}
```

<h3 id="updatedistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The distribution's id.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DistributionConfig|body|object|true|A distribution configuration.|
|» » CallerReference|body|object|false|none|
|» » Aliases|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » DefaultRootObject|body|object|false|none|
|» » Origins|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» Id|body|object|true|none|
|» DomainName|body|object|true|none|
|» OriginPath|body|object|false|none|
|» CustomHeaders|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» HeaderName|body|object|true|none|
|» HeaderValue|body|object|true|none|
|» S3OriginConfig|body|object|false|none|
|» » OriginAccessIdentity|body|object|true|none|
|» CustomOriginConfig|body|object|false|none|
|» » HTTPPort|body|object|true|none|
|» » HTTPSPort|body|object|true|none|
|» » OriginProtocolPolicy|body|object|true|none|
|» » OriginSslProtocols|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» » OriginReadTimeout|body|object|false|none|
|» » OriginKeepaliveTimeout|body|object|false|none|
|» ConnectionAttempts|body|object|false|none|
|» ConnectionTimeout|body|object|false|none|
|» OriginShield|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » OriginShieldRegion|body|object|false|none|
|» OriginAccessControlId|body|object|false|none|
|» » OriginGroups|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» Id|body|object|true|none|
|» FailoverCriteria|body|object|true|none|
|» » StatusCodes|body|object|true|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|true|none|
|» Members|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|true|none|
|» OriginId|body|object|true|none|
|» » DefaultCacheBehavior|body|object|false|none|
|» » » TargetOriginId|body|object|true|none|
|» » » TrustedSigners|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » TrustedKeyGroups|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » » ViewerProtocolPolicy|body|object|true|none|
|» » » AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» » » SmoothStreaming|body|object|false|none|
|» » » Compress|body|object|false|none|
|» » » LambdaFunctionAssociations|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» » » FunctionAssociations|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» » » FieldLevelEncryptionId|body|object|false|none|
|» » » RealtimeLogConfigArn|body|object|false|none|
|» » » CachePolicyId|body|object|false|none|
|» » » OriginRequestPolicyId|body|object|false|none|
|» » » ResponseHeadersPolicyId|body|object|false|none|
|» » » ForwardedValues|body|object|false|none|
|» » » » QueryString|body|object|true|none|
|» » » » Cookies|body|object|true|none|
|» » » » » Forward|body|object|true|none|
|» » » » » WhitelistedNames|body|object|false|none|
|» » » » » » Quantity|body|object|true|none|
|» » » » » » Items|body|object|false|none|
|» » » » Headers|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » » QueryStringCacheKeys|body|object|false|none|
|» » » » » Quantity|body|object|true|none|
|» » » » » Items|body|object|false|none|
|» » » MinTTL|body|object|false|none|
|» » » DefaultTTL|body|object|false|none|
|» » » MaxTTL|body|object|false|none|
|» » CacheBehaviors|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» PathPattern|body|object|true|none|
|» TargetOriginId|body|object|true|none|
|» TrustedSigners|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» TrustedKeyGroups|body|object|false|none|
|» » Enabled|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» ViewerProtocolPolicy|body|object|true|none|
|» AllowedMethods|body|[AllowedMethods](#schemaallowedmethods)|false|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|» SmoothStreaming|body|object|false|none|
|» Compress|body|object|false|none|
|» LambdaFunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» LambdaFunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» IncludeBody|body|object|false|none|
|» FunctionAssociations|body|object|false|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|
|» FunctionARN|body|object|true|none|
|» EventType|body|object|true|none|
|» FieldLevelEncryptionId|body|object|false|none|
|» RealtimeLogConfigArn|body|object|false|none|
|» CachePolicyId|body|object|false|none|
|» OriginRequestPolicyId|body|object|false|none|
|» ResponseHeadersPolicyId|body|object|false|none|
|» ForwardedValues|body|object|false|none|
|» » QueryString|body|object|true|none|
|» » Cookies|body|object|true|none|
|» » » Forward|body|object|true|none|
|» » » WhitelistedNames|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » Headers|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » QueryStringCacheKeys|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» MinTTL|body|object|false|none|
|» DefaultTTL|body|object|false|none|
|» MaxTTL|body|object|false|none|
|» » CustomErrorResponses|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» ErrorCode|body|object|true|none|
|» ResponsePagePath|body|object|false|none|
|» ResponseCode|body|object|false|none|
|» ErrorCachingMinTTL|body|object|false|none|
|» » Comment|body|object|false|none|
|» » Logging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » IncludeCookies|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|true|none|
|» » PriceClass|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » ViewerCertificate|body|object|false|none|
|» » » CloudFrontDefaultCertificate|body|object|false|none|
|» » » IAMCertificateId|body|object|false|none|
|» » » ACMCertificateArn|body|object|false|none|
|» » » SSLSupportMethod|body|object|false|none|
|» » » MinimumProtocolVersion|body|object|false|none|
|» » » Certificate|body|object|false|none|
|» » » CertificateSource|body|object|false|none|
|» » Restrictions|body|object|false|none|
|» » » GeoRestriction|body|object|true|none|
|» » » » RestrictionType|body|object|true|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» » WebACLId|body|object|false|none|
|» » HttpVersion|body|object|false|none|
|» » IsIPV6Enabled|body|object|false|none|
|» » ContinuousDeploymentPolicyId|body|object|false|none|
|» » Staging|body|object|false|none|

<h3 id="updatedistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDistributionResult](#schemaupdatedistributionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|482|482|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|483|483|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|484|484|MissingBody|[MissingBody](#schemamissingbody)|
|485|485|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|488|488|InvalidDefaultRootObject|[InvalidDefaultRootObject](#schemainvaliddefaultrootobject)|
|489|489|InvalidRelativePath|[InvalidRelativePath](#schemainvalidrelativepath)|
|490|490|InvalidErrorCode|[InvalidErrorCode](#schemainvaliderrorcode)|
|491|491|InvalidResponseCode|[InvalidResponseCode](#schemainvalidresponsecode)|
|492|492|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|493|493|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|494|494|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|495|495|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|496|496|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|497|497|InvalidViewerCertificate|[InvalidViewerCertificate](#schemainvalidviewercertificate)|
|498|498|InvalidMinimumProtocolVersion|[InvalidMinimumProtocolVersion](#schemainvalidminimumprotocolversion)|
|499|499|InvalidRequiredProtocol|[InvalidRequiredProtocol](#schemainvalidrequiredprotocol)|
|500|Internal Server Error|NoSuchOrigin|[NoSuchOrigin](#schemanosuchorigin)|
|501|Not Implemented|TooManyOrigins|[TooManyOrigins](#schematoomanyorigins)|
|502|Bad Gateway|TooManyOriginGroupsPerDistribution|[TooManyOriginGroupsPerDistribution](#schematoomanyorigingroupsperdistribution)|
|503|Service Unavailable|TooManyCacheBehaviors|[TooManyCacheBehaviors](#schematoomanycachebehaviors)|
|504|Gateway Timeout|TooManyCookieNamesInWhiteList|[TooManyCookieNamesInWhiteList](#schematoomanycookienamesinwhitelist)|
|505|HTTP Version Not Supported|InvalidForwardCookies|[InvalidForwardCookies](#schemainvalidforwardcookies)|
|506|Variant Also Negotiates|TooManyHeadersInForwardedValues|[TooManyHeadersInForwardedValues](#schematoomanyheadersinforwardedvalues)|
|507|Insufficient Storage|InvalidHeadersForS3Origin|[InvalidHeadersForS3Origin](#schemainvalidheadersfors3origin)|
|508|Loop Detected|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|509|Bandwidth Limit Exceeded|TooManyCertificates|[TooManyCertificates](#schematoomanycertificates)|
|510|Not Extended|InvalidLocationCode|[InvalidLocationCode](#schemainvalidlocationcode)|
|511|Network Authentication Required|InvalidGeoRestrictionParameter|[InvalidGeoRestrictionParameter](#schemainvalidgeorestrictionparameter)|
|512|512|InvalidTTLOrder|[InvalidTTLOrder](#schemainvalidttlorder)|
|513|513|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|
|514|514|TooManyOriginCustomHeaders|[TooManyOriginCustomHeaders](#schematoomanyorigincustomheaders)|
|515|515|TooManyQueryStringParameters|[TooManyQueryStringParameters](#schematoomanyquerystringparameters)|
|516|516|InvalidQueryStringParameters|[InvalidQueryStringParameters](#schemainvalidquerystringparameters)|
|517|517|TooManyDistributionsWithLambdaAssociations|[TooManyDistributionsWithLambdaAssociations](#schematoomanydistributionswithlambdaassociations)|
|518|518|TooManyDistributionsWithSingleFunctionARN|[TooManyDistributionsWithSingleFunctionARN](#schematoomanydistributionswithsinglefunctionarn)|
|519|519|TooManyLambdaFunctionAssociations|[TooManyLambdaFunctionAssociations](#schematoomanylambdafunctionassociations)|
|520|520|InvalidLambdaFunctionAssociation|[InvalidLambdaFunctionAssociation](#schemainvalidlambdafunctionassociation)|
|521|521|TooManyDistributionsWithFunctionAssociations|[TooManyDistributionsWithFunctionAssociations](#schematoomanydistributionswithfunctionassociations)|
|522|522|TooManyFunctionAssociations|[TooManyFunctionAssociations](#schematoomanyfunctionassociations)|
|523|523|InvalidFunctionAssociation|[InvalidFunctionAssociation](#schemainvalidfunctionassociation)|
|524|524|InvalidOriginReadTimeout|[InvalidOriginReadTimeout](#schemainvalidoriginreadtimeout)|
|525|525|InvalidOriginKeepaliveTimeout|[InvalidOriginKeepaliveTimeout](#schemainvalidoriginkeepalivetimeout)|
|526|526|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|527|527|IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior|[IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior](#schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior)|
|528|528|TooManyDistributionsAssociatedToFieldLevelEncryptionConfig|[TooManyDistributionsAssociatedToFieldLevelEncryptionConfig](#schematoomanydistributionsassociatedtofieldlevelencryptionconfig)|
|529|529|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|530|530|TooManyDistributionsAssociatedToCachePolicy|[TooManyDistributionsAssociatedToCachePolicy](#schematoomanydistributionsassociatedtocachepolicy)|
|531|531|TooManyDistributionsAssociatedToOriginAccessControl|[TooManyDistributionsAssociatedToOriginAccessControl](#schematoomanydistributionsassociatedtooriginaccesscontrol)|
|532|532|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|533|533|TooManyDistributionsAssociatedToResponseHeadersPolicy|[TooManyDistributionsAssociatedToResponseHeadersPolicy](#schematoomanydistributionsassociatedtoresponseheaderspolicy)|
|534|534|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|535|535|TooManyDistributionsAssociatedToOriginRequestPolicy|[TooManyDistributionsAssociatedToOriginRequestPolicy](#schematoomanydistributionsassociatedtooriginrequestpolicy)|
|536|536|TooManyDistributionsAssociatedToKeyGroup|[TooManyDistributionsAssociatedToKeyGroup](#schematoomanydistributionsassociatedtokeygroup)|
|537|537|TooManyKeyGroupsAssociatedToDistribution|[TooManyKeyGroupsAssociatedToDistribution](#schematoomanykeygroupsassociatedtodistribution)|
|538|538|TrustedKeyGroupDoesNotExist|[TrustedKeyGroupDoesNotExist](#schematrustedkeygroupdoesnotexist)|
|539|539|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|540|540|RealtimeLogConfigOwnerMismatch|[RealtimeLogConfigOwnerMismatch](#schemarealtimelogconfigownermismatch)|
|541|541|ContinuousDeploymentPolicyInUse|[ContinuousDeploymentPolicyInUse](#schemacontinuousdeploymentpolicyinuse)|
|542|542|NoSuchContinuousDeploymentPolicy|[NoSuchContinuousDeploymentPolicy](#schemanosuchcontinuousdeploymentpolicy)|
|543|543|StagingDistributionInUse|[StagingDistributionInUse](#schemastagingdistributioninuse)|
|544|544|IllegalOriginAccessConfiguration|[IllegalOriginAccessConfiguration](#schemaillegaloriginaccessconfiguration)|
|545|545|InvalidDomainNameForOriginAccessControl|[InvalidDomainNameForOriginAccessControl](#schemainvaliddomainnamefororiginaccesscontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFieldLevelEncryptionConfig2020_05_31

<a id="opIdGetFieldLevelEncryptionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption/{Id}/config`

Get the field-level encryption configuration information.

<h3 id="getfieldlevelencryptionconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Request the ID for the field-level encryption configuration information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getfieldlevelencryptionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFieldLevelEncryptionConfigResult](#schemagetfieldlevelencryptionconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFieldLevelEncryptionConfig2020_05_31

<a id="opIdUpdateFieldLevelEncryptionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"FieldLevelEncryptionConfig":{"CallerReference":{},"Comment":{},"QueryArgProfileConfig":{"ForwardWhenQueryArgProfileIsUnknown":{},"QueryArgProfiles":{"Quantity":{},"Items":{}}},"ContentTypeProfileConfig":{"ForwardWhenContentTypeIsUnknown":{},"ContentTypeProfiles":{"Quantity":{},"Items":{}}}}}'
```

`PUT /2020-05-31/field-level-encryption/{Id}/config`

Update a field-level encryption configuration.

> Body parameter

```json
{
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<h3 id="updatefieldlevelencryptionconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the configuration you want to update.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FieldLevelEncryptionConfig|body|object|true|A complex data type that includes the profile configurations specified for field-level encryption.|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|
|» » QueryArgProfileConfig|body|object|false|none|
|» » » ForwardWhenQueryArgProfileIsUnknown|body|object|true|none|
|» » » QueryArgProfiles|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» QueryArg|body|object|true|none|
|» ProfileId|body|object|true|none|
|» » ContentTypeProfileConfig|body|object|false|none|
|» » » ForwardWhenContentTypeIsUnknown|body|object|true|none|
|» » » ContentTypeProfiles|body|object|false|none|
|» » » » Quantity|body|object|true|none|
|» » » » Items|body|object|false|none|
|» Format|body|object|true|none|
|» ProfileId|body|object|false|none|
|» ContentType|body|object|true|none|

<h3 id="updatefieldlevelencryptionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFieldLevelEncryptionConfigResult](#schemaupdatefieldlevelencryptionconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|483|483|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|484|484|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|485|485|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|
|486|486|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|487|487|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|488|488|TooManyFieldLevelEncryptionQueryArgProfiles|[TooManyFieldLevelEncryptionQueryArgProfiles](#schematoomanyfieldlevelencryptionqueryargprofiles)|
|489|489|TooManyFieldLevelEncryptionContentTypeProfiles|[TooManyFieldLevelEncryptionContentTypeProfiles](#schematoomanyfieldlevelencryptioncontenttypeprofiles)|
|490|490|QueryArgProfileEmpty|[QueryArgProfileEmpty](#schemaqueryargprofileempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFieldLevelEncryptionProfileConfig2020_05_31

<a id="opIdGetFieldLevelEncryptionProfileConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/field-level-encryption-profile/{Id}/config`

Get the field-level encryption profile configuration information.

<h3 id="getfieldlevelencryptionprofileconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|Get the ID for the field-level encryption profile configuration information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getfieldlevelencryptionprofileconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFieldLevelEncryptionProfileConfigResult](#schemagetfieldlevelencryptionprofileconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFieldLevelEncryptionProfile2020_05_31

<a id="opIdUpdateFieldLevelEncryptionProfile2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/field-level-encryption-profile/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"FieldLevelEncryptionProfileConfig":{"Name":{},"CallerReference":{},"Comment":{},"EncryptionEntities":{"Quantity":{},"Items":{}}}}'
```

`PUT /2020-05-31/field-level-encryption-profile/{Id}/config`

Update a field-level encryption profile.

> Body parameter

```json
{
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<h3 id="updatefieldlevelencryptionprofile20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the field-level encryption profile request.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» FieldLevelEncryptionProfileConfig|body|object|true|A complex data type of profiles for the field-level encryption.|
|» » Name|body|object|false|none|
|» » CallerReference|body|object|false|none|
|» » Comment|body|object|false|none|
|» » EncryptionEntities|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» PublicKeyId|body|object|true|none|
|» ProviderId|body|object|true|none|
|» FieldPatterns|body|object|true|none|
|» » Quantity|body|object|true|none|
|» » Items|body|object|false|none|

<h3 id="updatefieldlevelencryptionprofile20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFieldLevelEncryptionProfileResult](#schemaupdatefieldlevelencryptionprofileresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|FieldLevelEncryptionProfileAlreadyExists|[FieldLevelEncryptionProfileAlreadyExists](#schemafieldlevelencryptionprofilealreadyexists)|
|482|482|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|483|483|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|484|484|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|485|485|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|486|486|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|
|487|487|NoSuchFieldLevelEncryptionProfile|[NoSuchFieldLevelEncryptionProfile](#schemanosuchfieldlevelencryptionprofile)|
|488|488|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|489|489|FieldLevelEncryptionProfileSizeExceeded|[FieldLevelEncryptionProfileSizeExceeded](#schemafieldlevelencryptionprofilesizeexceeded)|
|490|490|TooManyFieldLevelEncryptionEncryptionEntities|[TooManyFieldLevelEncryptionEncryptionEntities](#schematoomanyfieldlevelencryptionencryptionentities)|
|491|491|TooManyFieldLevelEncryptionFieldPatterns|[TooManyFieldLevelEncryptionFieldPatterns](#schematoomanyfieldlevelencryptionfieldpatterns)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetFunction2020_05_31

<a id="opIdGetFunction2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/function/{Name}`

<p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>

<h3 id="getfunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function whose code you are getting.|
|Stage|query|string|false|The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.|
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
|Stage|DEVELOPMENT|
|Stage|LIVE|

<h3 id="getfunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetFunctionResult](#schemagetfunctionresult)|
|480|480|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|481|481|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInvalidation2020_05_31

<a id="opIdGetInvalidation2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/invalidation/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distribution/{DistributionId}/invalidation/{Id}`

Get the information about an invalidation.

<h3 id="getinvalidation20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|path|string|true|The distribution's ID.|
|Id|path|string|true|The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getinvalidation20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInvalidationResult](#schemagetinvalidationresult)|
|480|480|NoSuchInvalidation|[NoSuchInvalidation](#schemanosuchinvalidation)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetKeyGroupConfig2020_05_31

<a id="opIdGetKeyGroupConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/key-group/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/key-group/{Id}/config`

<p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>

<h3 id="getkeygroupconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getkeygroupconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetKeyGroupConfigResult](#schemagetkeygroupconfigresult)|
|480|480|NoSuchResource|[NoSuchResource](#schemanosuchresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOriginAccessControlConfig2020_05_31

<a id="opIdGetOriginAccessControlConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-access-control/{Id}/config`

Gets a CloudFront origin access control configuration.

<h3 id="getoriginaccesscontrolconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier of the origin access control.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getoriginaccesscontrolconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOriginAccessControlConfigResult](#schemagetoriginaccesscontrolconfigresult)|
|480|480|NoSuchOriginAccessControl|[NoSuchOriginAccessControl](#schemanosuchoriginaccesscontrol)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateOriginAccessControl2020_05_31

<a id="opIdUpdateOriginAccessControl2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-access-control/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"OriginAccessControlConfig":{"Name":{},"Description":{},"SigningProtocol":{},"SigningBehavior":{},"OriginAccessControlOriginType":{}}}'
```

`PUT /2020-05-31/origin-access-control/{Id}/config`

Updates a CloudFront origin access control.

> Body parameter

```json
{
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

<h3 id="updateoriginaccesscontrol20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier of the origin access control that you are updating.|
|If-Match|header|string|false|The current version (<code>ETag</code> value) of the origin access control that you are updating.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» OriginAccessControlConfig|body|object|true|A CloudFront origin access control configuration.|
|» » Name|body|object|false|none|
|» » Description|body|object|false|none|
|» » SigningProtocol|body|object|false|none|
|» » SigningBehavior|body|object|false|none|
|» » OriginAccessControlOriginType|body|object|false|none|

<h3 id="updateoriginaccesscontrol20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOriginAccessControlResult](#schemaupdateoriginaccesscontrolresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|482|482|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|483|483|OriginAccessControlAlreadyExists|[OriginAccessControlAlreadyExists](#schemaoriginaccesscontrolalreadyexists)|
|484|484|NoSuchOriginAccessControl|[NoSuchOriginAccessControl](#schemanosuchoriginaccesscontrol)|
|485|485|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|486|486|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetOriginRequestPolicyConfig2020_05_31

<a id="opIdGetOriginRequestPolicyConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/origin-request-policy/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/origin-request-policy/{Id}/config`

<p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>

<h3 id="getoriginrequestpolicyconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getoriginrequestpolicyconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetOriginRequestPolicyConfigResult](#schemagetoriginrequestpolicyconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPublicKeyConfig2020_05_31

<a id="opIdGetPublicKeyConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/public-key/{Id}/config`

Gets a public key configuration.

<h3 id="getpublickeyconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the public key whose configuration you are getting.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getpublickeyconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPublicKeyConfigResult](#schemagetpublickeyconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePublicKey2020_05_31

<a id="opIdUpdatePublicKey2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/public-key/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"PublicKeyConfig":{"CallerReference":{},"Name":{},"EncodedKey":{},"Comment":{}}}'
```

`PUT /2020-05-31/public-key/{Id}/config`

Update public key information. Note that the only value you can change is the comment.

> Body parameter

```json
{
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

<h3 id="updatepublickey20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the public key that you are updating.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PublicKeyConfig|body|object|true|Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.|
|» » CallerReference|body|object|false|none|
|» » Name|body|object|false|none|
|» » EncodedKey|body|object|false|none|
|» » Comment|body|object|false|none|

<h3 id="updatepublickey20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePublicKeyResult](#schemaupdatepublickeyresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|CannotChangeImmutablePublicKeyFields|[CannotChangeImmutablePublicKeyFields](#schemacannotchangeimmutablepublickeyfields)|
|482|482|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|483|483|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|484|484|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|485|485|NoSuchPublicKey|[NoSuchPublicKey](#schemanosuchpublickey)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRealtimeLogConfig2020_05_31

<a id="opIdGetRealtimeLogConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/get-realtime-log-config/ \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Name":"string","ARN":"string"}'
```

`POST /2020-05-31/get-realtime-log-config/`

<p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>

> Body parameter

```json
{
  "Name": "string",
  "ARN": "string"
}
```

<h3 id="getrealtimelogconfig20200531-parameters">Parameters</h3>

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
|» Name|body|string|false|The name of the real-time log configuration to get.|
|» ARN|body|string|false|The Amazon Resource Name (ARN) of the real-time log configuration to get.|

<h3 id="getrealtimelogconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRealtimeLogConfigResult](#schemagetrealtimelogconfigresult)|
|480|480|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetResponseHeadersPolicyConfig2020_05_31

<a id="opIdGetResponseHeadersPolicyConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/response-headers-policy/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/response-headers-policy/{Id}/config`

<p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>

<h3 id="getresponseheaderspolicyconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getresponseheaderspolicyconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetResponseHeadersPolicyConfigResult](#schemagetresponseheaderspolicyconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStreamingDistributionConfig2020_05_31

<a id="opIdGetStreamingDistributionConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution/string/config \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/streaming-distribution/{Id}/config`

Get the configuration information about a streaming distribution.

<h3 id="getstreamingdistributionconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The streaming distribution's ID.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getstreamingdistributionconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStreamingDistributionConfigResult](#schemagetstreamingdistributionconfigresult)|
|480|480|NoSuchStreamingDistribution|[NoSuchStreamingDistribution](#schemanosuchstreamingdistribution)|
|481|481|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStreamingDistribution2020_05_31

<a id="opIdUpdateStreamingDistribution2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/streaming-distribution/string/config \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"StreamingDistributionConfig":{"CallerReference":{},"S3Origin":{"DomainName":{},"OriginAccessIdentity":{}},"Aliases":{"Quantity":{},"Items":{}},"Comment":{},"Logging":{"Enabled":{},"Bucket":{},"Prefix":{}},"TrustedSigners":{"Enabled":{},"Quantity":{},"Items":{}},"PriceClass":{},"Enabled":{}}}'
```

`PUT /2020-05-31/streaming-distribution/{Id}/config`

Update a streaming distribution.

> Body parameter

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

<h3 id="updatestreamingdistribution20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The streaming distribution's id.|
|If-Match|header|string|false|The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StreamingDistributionConfig|body|object|true|The RTMP distribution's configuration information.|
|» » CallerReference|body|object|false|none|
|» » S3Origin|body|object|false|none|
|» » » DomainName|body|object|true|none|
|» » » OriginAccessIdentity|body|object|true|none|
|» » Aliases|body|object|false|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » Comment|body|object|false|none|
|» » Logging|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Bucket|body|object|true|none|
|» » » Prefix|body|object|true|none|
|» » TrustedSigners|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» » » Quantity|body|object|true|none|
|» » » Items|body|object|false|none|
|» » PriceClass|body|object|false|none|
|» » Enabled|body|object|false|none|

<h3 id="updatestreamingdistribution20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStreamingDistributionResult](#schemaupdatestreamingdistributionresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|482|482|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|483|483|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|484|484|MissingBody|[MissingBody](#schemamissingbody)|
|485|485|NoSuchStreamingDistribution|[NoSuchStreamingDistribution](#schemanosuchstreamingdistribution)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|TooManyStreamingDistributionCNAMEs|[TooManyStreamingDistributionCNAMEs](#schematoomanystreamingdistributioncnames)|
|488|488|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|489|489|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|490|490|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|491|491|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|492|492|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|493|493|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConflictingAliases2020_05_31

<a id="opIdListConflictingAliases2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/conflicting-alias#DistributionId&Alias?DistributionId=string&Alias=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/conflicting-alias#DistributionId&Alias`

<p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listconflictingaliases20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DistributionId|query|string|true|The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.|
|Alias|query|string|true|The alias (also called a CNAME) to search for conflicting aliases.|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|integer|false|The maximum number of conflicting aliases that you want in the response.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listconflictingaliases20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConflictingAliasesResult](#schemalistconflictingaliasesresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByCachePolicyId2020_05_31

<a id="opIdListDistributionsByCachePolicyId2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByCachePolicyId/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributionsByCachePolicyId/{CachePolicyId}`

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listdistributionsbycachepolicyid20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of distribution IDs that you want in the response.|
|CachePolicyId|path|string|true|The ID of the cache policy whose associated distribution IDs you want to list.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributionsbycachepolicyid20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByCachePolicyIdResult](#schemalistdistributionsbycachepolicyidresult)|
|480|480|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByKeyGroup2020_05_31

<a id="opIdListDistributionsByKeyGroup2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByKeyGroupId/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributionsByKeyGroupId/{KeyGroupId}`

<p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listdistributionsbykeygroup20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of distribution IDs that you want in the response.|
|KeyGroupId|path|string|true|The ID of the key group whose associated distribution IDs you are listing.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributionsbykeygroup20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByKeyGroupResult](#schemalistdistributionsbykeygroupresult)|
|480|480|NoSuchResource|[NoSuchResource](#schemanosuchresource)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByOriginRequestPolicyId2020_05_31

<a id="opIdListDistributionsByOriginRequestPolicyId2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByOriginRequestPolicyId/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}`

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listdistributionsbyoriginrequestpolicyid20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of distribution IDs that you want in the response.|
|OriginRequestPolicyId|path|string|true|The ID of the origin request policy whose associated distribution IDs you want to list.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributionsbyoriginrequestpolicyid20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByOriginRequestPolicyIdResult](#schemalistdistributionsbyoriginrequestpolicyidresult)|
|480|480|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByRealtimeLogConfig2020_05_31

<a id="opIdListDistributionsByRealtimeLogConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByRealtimeLogConfig/ \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Marker":"string","MaxItems":"string","RealtimeLogConfigName":"string","RealtimeLogConfigArn":"string"}'
```

`POST /2020-05-31/distributionsByRealtimeLogConfig/`

<p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

> Body parameter

```json
{
  "Marker": "string",
  "MaxItems": "string",
  "RealtimeLogConfigName": "string",
  "RealtimeLogConfigArn": "string"
}
```

<h3 id="listdistributionsbyrealtimelogconfig20200531-parameters">Parameters</h3>

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
|» Marker|body|string|false|Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|» MaxItems|body|string|false|The maximum number of distributions that you want in the response.|
|» RealtimeLogConfigName|body|string|false|The name of the real-time log configuration whose associated distributions you want to list.|
|» RealtimeLogConfigArn|body|string|false|The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.|

<h3 id="listdistributionsbyrealtimelogconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByRealtimeLogConfigResult](#schemalistdistributionsbyrealtimelogconfigresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByResponseHeadersPolicyId2020_05_31

<a id="opIdListDistributionsByResponseHeadersPolicyId2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByResponseHeadersPolicyId/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}`

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

<h3 id="listdistributionsbyresponseheaderspolicyid20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.|
|MaxItems|query|string|false|The maximum number of distribution IDs that you want to get in the response.|
|ResponseHeadersPolicyId|path|string|true|The ID of the response headers policy whose associated distribution IDs you want to list.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributionsbyresponseheaderspolicyid20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByResponseHeadersPolicyIdResult](#schemalistdistributionsbyresponseheaderspolicyidresult)|
|480|480|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionsByWebACLId2020_05_31

<a id="opIdListDistributionsByWebACLId2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distributionsByWebACLId/string \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/distributionsByWebACLId/{WebACLId}`

List the distributions that are associated with a specified WAF web ACL.

<h3 id="listdistributionsbywebaclid20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Marker|query|string|false|Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)|
|MaxItems|query|string|false|The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.|
|WebACLId|path|string|true|The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listdistributionsbywebaclid20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionsByWebACLIdResult](#schemalistdistributionsbywebaclidresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource2020_05_31

<a id="opIdListTagsForResource2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/tagging#Resource?Resource=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /2020-05-31/tagging#Resource`

List tags for a CloudFront resource.

<h3 id="listtagsforresource20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Resource|query|string|true|An ARN of a CloudFront resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listtagsforresource20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResult](#schemalisttagsforresourceresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InvalidTagging|[InvalidTagging](#schemainvalidtagging)|
|483|483|NoSuchResource|[NoSuchResource](#schemanosuchresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PublishFunction2020_05_31

<a id="opIdPublishFunction2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string/publish#If-Match' \
  -X POST \
  -H "Authorization: ${API_KEY}" \
  -H 'If-Match: string'
```

`POST /2020-05-31/function/{Name}/publish#If-Match`

<p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

<h3 id="publishfunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function that you are publishing.|
|If-Match|header|string|true|The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="publishfunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PublishFunctionResult](#schemapublishfunctionresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|483|483|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|484|484|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource2020_05_31

<a id="opIdTagResource2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/tagging#Operation=Tag&Resource?Resource=string&Operation=Tag' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"Tags":{"Items":{}}}'
```

`POST /2020-05-31/tagging#Operation=Tag&Resource`

Add tags to a CloudFront resource.

> Body parameter

```json
{
  "Tags": {
    "Items": {}
  }
}
```

<h3 id="tagresource20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Resource|query|string|true|An ARN of a CloudFront resource.|
|Operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|A complex type that contains zero or more <code>Tag</code> elements.|
|» » Items|body|object|false|none|
|» Key|body|object|true|none|
|» Value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|Tag|

<h3 id="tagresource20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InvalidTagging|[InvalidTagging](#schemainvalidtagging)|
|483|483|NoSuchResource|[NoSuchResource](#schemanosuchresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestFunction2020_05_31

<a id="opIdTestFunction2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/function/string/test#If-Match' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'If-Match: string' \
  -d '{"Stage":"DEVELOPMENT","EventObject":"password"}'
```

`POST /2020-05-31/function/{Name}/test#If-Match`

<p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

> Body parameter

```json
{
  "Stage": "DEVELOPMENT",
  "EventObject": "password"
}
```

<h3 id="testfunction20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Name|path|string|true|The name of the function that you are testing.|
|If-Match|header|string|true|The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Stage|body|string|false|The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.|
|» EventObject|body|string(password)|true|The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Stage|DEVELOPMENT|
|» Stage|LIVE|

<h3 id="testfunction20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestFunctionResult](#schematestfunctionresult)|
|480|480|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|481|481|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|482|482|NoSuchFunctionExists|[NoSuchFunctionExists](#schemanosuchfunctionexists)|
|483|483|TestFunctionFailed|[TestFunctionFailed](#schematestfunctionfailed)|
|484|484|UnsupportedOperation|[UnsupportedOperation](#schemaunsupportedoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource2020_05_31

<a id="opIdUntagResource2020_05_31"></a>

> Code samples

```bash
curl 'https://cloudfront.us-east-1.amazonaws.com/2020-05-31/tagging#Operation=Untag&Resource?Resource=string&Operation=Untag' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"TagKeys":{"Items":{}}}'
```

`POST /2020-05-31/tagging#Operation=Untag&Resource`

Remove tags from a CloudFront resource.

> Body parameter

```json
{
  "TagKeys": {
    "Items": {}
  }
}
```

<h3 id="untagresource20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Resource|query|string|true|An ARN of a CloudFront resource.|
|Operation|query|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» TagKeys|body|object|true|A complex type that contains zero or more <code>Tag</code> elements.|
|» » Items|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Operation|Untag|

<h3 id="untagresource20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|InvalidTagging|[InvalidTagging](#schemainvalidtagging)|
|483|483|NoSuchResource|[NoSuchResource](#schemanosuchresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDistributionWithStagingConfig2020_05_31

<a id="opIdUpdateDistributionWithStagingConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/distribution/string/promote-staging-config \
  -X PUT \
  -H "Authorization: ${API_KEY}"
```

`PUT /2020-05-31/distribution/{Id}/promote-staging-config`

<p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> </p> </li> </ul>

<h3 id="updatedistributionwithstagingconfig20200531-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the primary distribution to which you are copying a staging distribution's configuration.|
|StagingDistributionId|query|string|false|The identifier of the staging distribution whose configuration you are copying to the primary distribution.|
|If-Match|header|string|false|<p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="updatedistributionwithstagingconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDistributionWithStagingConfigResult](#schemaupdatedistributionwithstagingconfigresult)|
|480|480|AccessDenied|[AccessDenied](#schemaaccessdenied)|
|481|481|CNAMEAlreadyExists|[CNAMEAlreadyExists](#schemacnamealreadyexists)|
|482|482|IllegalUpdate|[IllegalUpdate](#schemaillegalupdate)|
|483|483|InvalidIfMatchVersion|[InvalidIfMatchVersion](#schemainvalidifmatchversion)|
|484|484|MissingBody|[MissingBody](#schemamissingbody)|
|485|485|NoSuchDistribution|[NoSuchDistribution](#schemanosuchdistribution)|
|486|486|PreconditionFailed|[PreconditionFailed](#schemapreconditionfailed)|
|487|487|TooManyDistributionCNAMEs|[TooManyDistributionCNAMEs](#schematoomanydistributioncnames)|
|488|488|InvalidDefaultRootObject|[InvalidDefaultRootObject](#schemainvaliddefaultrootobject)|
|489|489|InvalidRelativePath|[InvalidRelativePath](#schemainvalidrelativepath)|
|490|490|InvalidErrorCode|[InvalidErrorCode](#schemainvaliderrorcode)|
|491|491|InvalidResponseCode|[InvalidResponseCode](#schemainvalidresponsecode)|
|492|492|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|493|493|InvalidOriginAccessIdentity|[InvalidOriginAccessIdentity](#schemainvalidoriginaccessidentity)|
|494|494|InvalidOriginAccessControl|[InvalidOriginAccessControl](#schemainvalidoriginaccesscontrol)|
|495|495|TooManyTrustedSigners|[TooManyTrustedSigners](#schematoomanytrustedsigners)|
|496|496|TrustedSignerDoesNotExist|[TrustedSignerDoesNotExist](#schematrustedsignerdoesnotexist)|
|497|497|InvalidViewerCertificate|[InvalidViewerCertificate](#schemainvalidviewercertificate)|
|498|498|InvalidMinimumProtocolVersion|[InvalidMinimumProtocolVersion](#schemainvalidminimumprotocolversion)|
|499|499|InvalidRequiredProtocol|[InvalidRequiredProtocol](#schemainvalidrequiredprotocol)|
|500|Internal Server Error|NoSuchOrigin|[NoSuchOrigin](#schemanosuchorigin)|
|501|Not Implemented|TooManyOrigins|[TooManyOrigins](#schematoomanyorigins)|
|502|Bad Gateway|TooManyOriginGroupsPerDistribution|[TooManyOriginGroupsPerDistribution](#schematoomanyorigingroupsperdistribution)|
|503|Service Unavailable|TooManyCacheBehaviors|[TooManyCacheBehaviors](#schematoomanycachebehaviors)|
|504|Gateway Timeout|TooManyCookieNamesInWhiteList|[TooManyCookieNamesInWhiteList](#schematoomanycookienamesinwhitelist)|
|505|HTTP Version Not Supported|InvalidForwardCookies|[InvalidForwardCookies](#schemainvalidforwardcookies)|
|506|Variant Also Negotiates|TooManyHeadersInForwardedValues|[TooManyHeadersInForwardedValues](#schematoomanyheadersinforwardedvalues)|
|507|Insufficient Storage|InvalidHeadersForS3Origin|[InvalidHeadersForS3Origin](#schemainvalidheadersfors3origin)|
|508|Loop Detected|InconsistentQuantities|[InconsistentQuantities](#schemainconsistentquantities)|
|509|Bandwidth Limit Exceeded|TooManyCertificates|[TooManyCertificates](#schematoomanycertificates)|
|510|Not Extended|InvalidLocationCode|[InvalidLocationCode](#schemainvalidlocationcode)|
|511|Network Authentication Required|InvalidGeoRestrictionParameter|[InvalidGeoRestrictionParameter](#schemainvalidgeorestrictionparameter)|
|512|512|InvalidTTLOrder|[InvalidTTLOrder](#schemainvalidttlorder)|
|513|513|InvalidWebACLId|[InvalidWebACLId](#schemainvalidwebaclid)|
|514|514|TooManyOriginCustomHeaders|[TooManyOriginCustomHeaders](#schematoomanyorigincustomheaders)|
|515|515|TooManyQueryStringParameters|[TooManyQueryStringParameters](#schematoomanyquerystringparameters)|
|516|516|InvalidQueryStringParameters|[InvalidQueryStringParameters](#schemainvalidquerystringparameters)|
|517|517|TooManyDistributionsWithLambdaAssociations|[TooManyDistributionsWithLambdaAssociations](#schematoomanydistributionswithlambdaassociations)|
|518|518|TooManyDistributionsWithSingleFunctionARN|[TooManyDistributionsWithSingleFunctionARN](#schematoomanydistributionswithsinglefunctionarn)|
|519|519|TooManyLambdaFunctionAssociations|[TooManyLambdaFunctionAssociations](#schematoomanylambdafunctionassociations)|
|520|520|InvalidLambdaFunctionAssociation|[InvalidLambdaFunctionAssociation](#schemainvalidlambdafunctionassociation)|
|521|521|TooManyDistributionsWithFunctionAssociations|[TooManyDistributionsWithFunctionAssociations](#schematoomanydistributionswithfunctionassociations)|
|522|522|TooManyFunctionAssociations|[TooManyFunctionAssociations](#schematoomanyfunctionassociations)|
|523|523|InvalidFunctionAssociation|[InvalidFunctionAssociation](#schemainvalidfunctionassociation)|
|524|524|InvalidOriginReadTimeout|[InvalidOriginReadTimeout](#schemainvalidoriginreadtimeout)|
|525|525|InvalidOriginKeepaliveTimeout|[InvalidOriginKeepaliveTimeout](#schemainvalidoriginkeepalivetimeout)|
|526|526|NoSuchFieldLevelEncryptionConfig|[NoSuchFieldLevelEncryptionConfig](#schemanosuchfieldlevelencryptionconfig)|
|527|527|IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior|[IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior](#schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior)|
|528|528|TooManyDistributionsAssociatedToFieldLevelEncryptionConfig|[TooManyDistributionsAssociatedToFieldLevelEncryptionConfig](#schematoomanydistributionsassociatedtofieldlevelencryptionconfig)|
|529|529|NoSuchCachePolicy|[NoSuchCachePolicy](#schemanosuchcachepolicy)|
|530|530|TooManyDistributionsAssociatedToCachePolicy|[TooManyDistributionsAssociatedToCachePolicy](#schematoomanydistributionsassociatedtocachepolicy)|
|531|531|TooManyDistributionsAssociatedToOriginAccessControl|[TooManyDistributionsAssociatedToOriginAccessControl](#schematoomanydistributionsassociatedtooriginaccesscontrol)|
|532|532|NoSuchResponseHeadersPolicy|[NoSuchResponseHeadersPolicy](#schemanosuchresponseheaderspolicy)|
|533|533|TooManyDistributionsAssociatedToResponseHeadersPolicy|[TooManyDistributionsAssociatedToResponseHeadersPolicy](#schematoomanydistributionsassociatedtoresponseheaderspolicy)|
|534|534|NoSuchOriginRequestPolicy|[NoSuchOriginRequestPolicy](#schemanosuchoriginrequestpolicy)|
|535|535|TooManyDistributionsAssociatedToOriginRequestPolicy|[TooManyDistributionsAssociatedToOriginRequestPolicy](#schematoomanydistributionsassociatedtooriginrequestpolicy)|
|536|536|TooManyDistributionsAssociatedToKeyGroup|[TooManyDistributionsAssociatedToKeyGroup](#schematoomanydistributionsassociatedtokeygroup)|
|537|537|TooManyKeyGroupsAssociatedToDistribution|[TooManyKeyGroupsAssociatedToDistribution](#schematoomanykeygroupsassociatedtodistribution)|
|538|538|TrustedKeyGroupDoesNotExist|[TrustedKeyGroupDoesNotExist](#schematrustedkeygroupdoesnotexist)|
|539|539|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|540|540|RealtimeLogConfigOwnerMismatch|[RealtimeLogConfigOwnerMismatch](#schemarealtimelogconfigownermismatch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRealtimeLogConfig2020_05_31

<a id="opIdUpdateRealtimeLogConfig2020_05_31"></a>

> Code samples

```bash
curl https://cloudfront.us-east-1.amazonaws.com/2020-05-31/realtime-log-config/ \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"EndPoints":[{"StreamType":{},"KinesisStreamConfig":{"RoleARN":{},"StreamARN":{}}}],"Fields":[{}],"Name":"string","ARN":"string","SamplingRate":0}'
```

`PUT /2020-05-31/realtime-log-config/`

<p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>

> Body parameter

```json
{
  "EndPoints": [
    {
      "StreamType": {},
      "KinesisStreamConfig": {
        "RoleARN": {},
        "StreamARN": {}
      }
    }
  ],
  "Fields": [
    {}
  ],
  "Name": "string",
  "ARN": "string",
  "SamplingRate": 0
}
```

<h3 id="updaterealtimelogconfig20200531-parameters">Parameters</h3>

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
|» EndPoints|body|[[EndPoint](#schemaendpoint)]|false|Contains information about the Amazon Kinesis data stream where you are sending real-time log data.|
|» Fields|body|[object]|false|<p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>|
|» Name|body|string|false|The name for this real-time log configuration.|
|» ARN|body|string|false|The Amazon Resource Name (ARN) for this real-time log configuration.|
|» SamplingRate|body|integer|false|The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.|

<h3 id="updaterealtimelogconfig20200531-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRealtimeLogConfigResult](#schemaupdaterealtimelogconfigresult)|
|480|480|NoSuchRealtimeLogConfig|[NoSuchRealtimeLogConfig](#schemanosuchrealtimelogconfig)|
|481|481|InvalidArgument|[InvalidArgument](#schemainvalidargument)|
|482|482|AccessDenied|[AccessDenied](#schemaaccessdenied)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_InvalidArgument">InvalidArgument</h2>
<!-- backwards compatibility -->
<a id="schemainvalidargument"></a>
<a id="schema_InvalidArgument"></a>
<a id="tocSinvalidargument"></a>
<a id="tocsinvalidargument"></a>

```json
null
```

<h2 id="tocS_NoSuchDistribution">NoSuchDistribution</h2>
<!-- backwards compatibility -->
<a id="schemanosuchdistribution"></a>
<a id="schema_NoSuchDistribution"></a>
<a id="tocSnosuchdistribution"></a>
<a id="tocsnosuchdistribution"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionCNAMEs">TooManyDistributionCNAMEs</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributioncnames"></a>
<a id="schema_TooManyDistributionCNAMEs"></a>
<a id="tocStoomanydistributioncnames"></a>
<a id="tocstoomanydistributioncnames"></a>

```json
null
```

<h2 id="tocS_IllegalUpdate">IllegalUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaillegalupdate"></a>
<a id="schema_IllegalUpdate"></a>
<a id="tocSillegalupdate"></a>
<a id="tocsillegalupdate"></a>

```json
null
```

<h2 id="tocS_AccessDenied">AccessDenied</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdenied"></a>
<a id="schema_AccessDenied"></a>
<a id="tocSaccessdenied"></a>
<a id="tocsaccessdenied"></a>

```json
null
```

<h2 id="tocS_CopyDistributionResult">CopyDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemacopydistributionresult"></a>
<a id="schema_CopyDistributionResult"></a>
<a id="tocScopydistributionresult"></a>
<a id="tocscopydistributionresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|[Distribution](#schemadistribution)|false|none|A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.|

<h2 id="tocS_CNAMEAlreadyExists">CNAMEAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemacnamealreadyexists"></a>
<a id="schema_CNAMEAlreadyExists"></a>
<a id="tocScnamealreadyexists"></a>
<a id="tocscnamealreadyexists"></a>

```json
null
```

<h2 id="tocS_DistributionAlreadyExists">DistributionAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemadistributionalreadyexists"></a>
<a id="schema_DistributionAlreadyExists"></a>
<a id="tocSdistributionalreadyexists"></a>
<a id="tocsdistributionalreadyexists"></a>

```json
null
```

<h2 id="tocS_InvalidOrigin">InvalidOrigin</h2>
<!-- backwards compatibility -->
<a id="schemainvalidorigin"></a>
<a id="schema_InvalidOrigin"></a>
<a id="tocSinvalidorigin"></a>
<a id="tocsinvalidorigin"></a>

```json
null
```

<h2 id="tocS_InvalidOriginAccessIdentity">InvalidOriginAccessIdentity</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoriginaccessidentity"></a>
<a id="schema_InvalidOriginAccessIdentity"></a>
<a id="tocSinvalidoriginaccessidentity"></a>
<a id="tocsinvalidoriginaccessidentity"></a>

```json
null
```

<h2 id="tocS_InvalidOriginAccessControl">InvalidOriginAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoriginaccesscontrol"></a>
<a id="schema_InvalidOriginAccessControl"></a>
<a id="tocSinvalidoriginaccesscontrol"></a>
<a id="tocsinvalidoriginaccesscontrol"></a>

```json
null
```

<h2 id="tocS_InvalidIfMatchVersion">InvalidIfMatchVersion</h2>
<!-- backwards compatibility -->
<a id="schemainvalidifmatchversion"></a>
<a id="schema_InvalidIfMatchVersion"></a>
<a id="tocSinvalidifmatchversion"></a>
<a id="tocsinvalidifmatchversion"></a>

```json
null
```

<h2 id="tocS_PreconditionFailed">PreconditionFailed</h2>
<!-- backwards compatibility -->
<a id="schemapreconditionfailed"></a>
<a id="schema_PreconditionFailed"></a>
<a id="tocSpreconditionfailed"></a>
<a id="tocspreconditionfailed"></a>

```json
null
```

<h2 id="tocS_TooManyTrustedSigners">TooManyTrustedSigners</h2>
<!-- backwards compatibility -->
<a id="schematoomanytrustedsigners"></a>
<a id="schema_TooManyTrustedSigners"></a>
<a id="tocStoomanytrustedsigners"></a>
<a id="tocstoomanytrustedsigners"></a>

```json
null
```

<h2 id="tocS_TrustedSignerDoesNotExist">TrustedSignerDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schematrustedsignerdoesnotexist"></a>
<a id="schema_TrustedSignerDoesNotExist"></a>
<a id="tocStrustedsignerdoesnotexist"></a>
<a id="tocstrustedsignerdoesnotexist"></a>

```json
null
```

<h2 id="tocS_InvalidViewerCertificate">InvalidViewerCertificate</h2>
<!-- backwards compatibility -->
<a id="schemainvalidviewercertificate"></a>
<a id="schema_InvalidViewerCertificate"></a>
<a id="tocSinvalidviewercertificate"></a>
<a id="tocsinvalidviewercertificate"></a>

```json
null
```

<h2 id="tocS_InvalidMinimumProtocolVersion">InvalidMinimumProtocolVersion</h2>
<!-- backwards compatibility -->
<a id="schemainvalidminimumprotocolversion"></a>
<a id="schema_InvalidMinimumProtocolVersion"></a>
<a id="tocSinvalidminimumprotocolversion"></a>
<a id="tocsinvalidminimumprotocolversion"></a>

```json
null
```

<h2 id="tocS_MissingBody">MissingBody</h2>
<!-- backwards compatibility -->
<a id="schemamissingbody"></a>
<a id="schema_MissingBody"></a>
<a id="tocSmissingbody"></a>
<a id="tocsmissingbody"></a>

```json
null
```

<h2 id="tocS_TooManyDistributions">TooManyDistributions</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributions"></a>
<a id="schema_TooManyDistributions"></a>
<a id="tocStoomanydistributions"></a>
<a id="tocstoomanydistributions"></a>

```json
null
```

<h2 id="tocS_InvalidDefaultRootObject">InvalidDefaultRootObject</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddefaultrootobject"></a>
<a id="schema_InvalidDefaultRootObject"></a>
<a id="tocSinvaliddefaultrootobject"></a>
<a id="tocsinvaliddefaultrootobject"></a>

```json
null
```

<h2 id="tocS_InvalidRelativePath">InvalidRelativePath</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrelativepath"></a>
<a id="schema_InvalidRelativePath"></a>
<a id="tocSinvalidrelativepath"></a>
<a id="tocsinvalidrelativepath"></a>

```json
null
```

<h2 id="tocS_InvalidErrorCode">InvalidErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemainvaliderrorcode"></a>
<a id="schema_InvalidErrorCode"></a>
<a id="tocSinvaliderrorcode"></a>
<a id="tocsinvaliderrorcode"></a>

```json
null
```

<h2 id="tocS_InvalidResponseCode">InvalidResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemainvalidresponsecode"></a>
<a id="schema_InvalidResponseCode"></a>
<a id="tocSinvalidresponsecode"></a>
<a id="tocsinvalidresponsecode"></a>

```json
null
```

<h2 id="tocS_InvalidRequiredProtocol">InvalidRequiredProtocol</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequiredprotocol"></a>
<a id="schema_InvalidRequiredProtocol"></a>
<a id="tocSinvalidrequiredprotocol"></a>
<a id="tocsinvalidrequiredprotocol"></a>

```json
null
```

<h2 id="tocS_NoSuchOrigin">NoSuchOrigin</h2>
<!-- backwards compatibility -->
<a id="schemanosuchorigin"></a>
<a id="schema_NoSuchOrigin"></a>
<a id="tocSnosuchorigin"></a>
<a id="tocsnosuchorigin"></a>

```json
null
```

<h2 id="tocS_TooManyOrigins">TooManyOrigins</h2>
<!-- backwards compatibility -->
<a id="schematoomanyorigins"></a>
<a id="schema_TooManyOrigins"></a>
<a id="tocStoomanyorigins"></a>
<a id="tocstoomanyorigins"></a>

```json
null
```

<h2 id="tocS_TooManyOriginGroupsPerDistribution">TooManyOriginGroupsPerDistribution</h2>
<!-- backwards compatibility -->
<a id="schematoomanyorigingroupsperdistribution"></a>
<a id="schema_TooManyOriginGroupsPerDistribution"></a>
<a id="tocStoomanyorigingroupsperdistribution"></a>
<a id="tocstoomanyorigingroupsperdistribution"></a>

```json
null
```

<h2 id="tocS_TooManyCacheBehaviors">TooManyCacheBehaviors</h2>
<!-- backwards compatibility -->
<a id="schematoomanycachebehaviors"></a>
<a id="schema_TooManyCacheBehaviors"></a>
<a id="tocStoomanycachebehaviors"></a>
<a id="tocstoomanycachebehaviors"></a>

```json
null
```

<h2 id="tocS_TooManyCookieNamesInWhiteList">TooManyCookieNamesInWhiteList</h2>
<!-- backwards compatibility -->
<a id="schematoomanycookienamesinwhitelist"></a>
<a id="schema_TooManyCookieNamesInWhiteList"></a>
<a id="tocStoomanycookienamesinwhitelist"></a>
<a id="tocstoomanycookienamesinwhitelist"></a>

```json
null
```

<h2 id="tocS_InvalidForwardCookies">InvalidForwardCookies</h2>
<!-- backwards compatibility -->
<a id="schemainvalidforwardcookies"></a>
<a id="schema_InvalidForwardCookies"></a>
<a id="tocSinvalidforwardcookies"></a>
<a id="tocsinvalidforwardcookies"></a>

```json
null
```

<h2 id="tocS_TooManyHeadersInForwardedValues">TooManyHeadersInForwardedValues</h2>
<!-- backwards compatibility -->
<a id="schematoomanyheadersinforwardedvalues"></a>
<a id="schema_TooManyHeadersInForwardedValues"></a>
<a id="tocStoomanyheadersinforwardedvalues"></a>
<a id="tocstoomanyheadersinforwardedvalues"></a>

```json
null
```

<h2 id="tocS_InvalidHeadersForS3Origin">InvalidHeadersForS3Origin</h2>
<!-- backwards compatibility -->
<a id="schemainvalidheadersfors3origin"></a>
<a id="schema_InvalidHeadersForS3Origin"></a>
<a id="tocSinvalidheadersfors3origin"></a>
<a id="tocsinvalidheadersfors3origin"></a>

```json
null
```

<h2 id="tocS_InconsistentQuantities">InconsistentQuantities</h2>
<!-- backwards compatibility -->
<a id="schemainconsistentquantities"></a>
<a id="schema_InconsistentQuantities"></a>
<a id="tocSinconsistentquantities"></a>
<a id="tocsinconsistentquantities"></a>

```json
null
```

<h2 id="tocS_TooManyCertificates">TooManyCertificates</h2>
<!-- backwards compatibility -->
<a id="schematoomanycertificates"></a>
<a id="schema_TooManyCertificates"></a>
<a id="tocStoomanycertificates"></a>
<a id="tocstoomanycertificates"></a>

```json
null
```

<h2 id="tocS_InvalidLocationCode">InvalidLocationCode</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlocationcode"></a>
<a id="schema_InvalidLocationCode"></a>
<a id="tocSinvalidlocationcode"></a>
<a id="tocsinvalidlocationcode"></a>

```json
null
```

<h2 id="tocS_InvalidGeoRestrictionParameter">InvalidGeoRestrictionParameter</h2>
<!-- backwards compatibility -->
<a id="schemainvalidgeorestrictionparameter"></a>
<a id="schema_InvalidGeoRestrictionParameter"></a>
<a id="tocSinvalidgeorestrictionparameter"></a>
<a id="tocsinvalidgeorestrictionparameter"></a>

```json
null
```

<h2 id="tocS_InvalidProtocolSettings">InvalidProtocolSettings</h2>
<!-- backwards compatibility -->
<a id="schemainvalidprotocolsettings"></a>
<a id="schema_InvalidProtocolSettings"></a>
<a id="tocSinvalidprotocolsettings"></a>
<a id="tocsinvalidprotocolsettings"></a>

```json
null
```

<h2 id="tocS_InvalidTTLOrder">InvalidTTLOrder</h2>
<!-- backwards compatibility -->
<a id="schemainvalidttlorder"></a>
<a id="schema_InvalidTTLOrder"></a>
<a id="tocSinvalidttlorder"></a>
<a id="tocsinvalidttlorder"></a>

```json
null
```

<h2 id="tocS_InvalidWebACLId">InvalidWebACLId</h2>
<!-- backwards compatibility -->
<a id="schemainvalidwebaclid"></a>
<a id="schema_InvalidWebACLId"></a>
<a id="tocSinvalidwebaclid"></a>
<a id="tocsinvalidwebaclid"></a>

```json
null
```

<h2 id="tocS_TooManyOriginCustomHeaders">TooManyOriginCustomHeaders</h2>
<!-- backwards compatibility -->
<a id="schematoomanyorigincustomheaders"></a>
<a id="schema_TooManyOriginCustomHeaders"></a>
<a id="tocStoomanyorigincustomheaders"></a>
<a id="tocstoomanyorigincustomheaders"></a>

```json
null
```

<h2 id="tocS_TooManyQueryStringParameters">TooManyQueryStringParameters</h2>
<!-- backwards compatibility -->
<a id="schematoomanyquerystringparameters"></a>
<a id="schema_TooManyQueryStringParameters"></a>
<a id="tocStoomanyquerystringparameters"></a>
<a id="tocstoomanyquerystringparameters"></a>

```json
null
```

<h2 id="tocS_InvalidQueryStringParameters">InvalidQueryStringParameters</h2>
<!-- backwards compatibility -->
<a id="schemainvalidquerystringparameters"></a>
<a id="schema_InvalidQueryStringParameters"></a>
<a id="tocSinvalidquerystringparameters"></a>
<a id="tocsinvalidquerystringparameters"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsWithLambdaAssociations">TooManyDistributionsWithLambdaAssociations</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionswithlambdaassociations"></a>
<a id="schema_TooManyDistributionsWithLambdaAssociations"></a>
<a id="tocStoomanydistributionswithlambdaassociations"></a>
<a id="tocstoomanydistributionswithlambdaassociations"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsWithSingleFunctionARN">TooManyDistributionsWithSingleFunctionARN</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionswithsinglefunctionarn"></a>
<a id="schema_TooManyDistributionsWithSingleFunctionARN"></a>
<a id="tocStoomanydistributionswithsinglefunctionarn"></a>
<a id="tocstoomanydistributionswithsinglefunctionarn"></a>

```json
null
```

<h2 id="tocS_TooManyLambdaFunctionAssociations">TooManyLambdaFunctionAssociations</h2>
<!-- backwards compatibility -->
<a id="schematoomanylambdafunctionassociations"></a>
<a id="schema_TooManyLambdaFunctionAssociations"></a>
<a id="tocStoomanylambdafunctionassociations"></a>
<a id="tocstoomanylambdafunctionassociations"></a>

```json
null
```

<h2 id="tocS_InvalidLambdaFunctionAssociation">InvalidLambdaFunctionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlambdafunctionassociation"></a>
<a id="schema_InvalidLambdaFunctionAssociation"></a>
<a id="tocSinvalidlambdafunctionassociation"></a>
<a id="tocsinvalidlambdafunctionassociation"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsWithFunctionAssociations">TooManyDistributionsWithFunctionAssociations</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionswithfunctionassociations"></a>
<a id="schema_TooManyDistributionsWithFunctionAssociations"></a>
<a id="tocStoomanydistributionswithfunctionassociations"></a>
<a id="tocstoomanydistributionswithfunctionassociations"></a>

```json
null
```

<h2 id="tocS_TooManyFunctionAssociations">TooManyFunctionAssociations</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfunctionassociations"></a>
<a id="schema_TooManyFunctionAssociations"></a>
<a id="tocStoomanyfunctionassociations"></a>
<a id="tocstoomanyfunctionassociations"></a>

```json
null
```

<h2 id="tocS_InvalidFunctionAssociation">InvalidFunctionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfunctionassociation"></a>
<a id="schema_InvalidFunctionAssociation"></a>
<a id="tocSinvalidfunctionassociation"></a>
<a id="tocsinvalidfunctionassociation"></a>

```json
null
```

<h2 id="tocS_InvalidOriginReadTimeout">InvalidOriginReadTimeout</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoriginreadtimeout"></a>
<a id="schema_InvalidOriginReadTimeout"></a>
<a id="tocSinvalidoriginreadtimeout"></a>
<a id="tocsinvalidoriginreadtimeout"></a>

```json
null
```

<h2 id="tocS_InvalidOriginKeepaliveTimeout">InvalidOriginKeepaliveTimeout</h2>
<!-- backwards compatibility -->
<a id="schemainvalidoriginkeepalivetimeout"></a>
<a id="schema_InvalidOriginKeepaliveTimeout"></a>
<a id="tocSinvalidoriginkeepalivetimeout"></a>
<a id="tocsinvalidoriginkeepalivetimeout"></a>

```json
null
```

<h2 id="tocS_NoSuchFieldLevelEncryptionConfig">NoSuchFieldLevelEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemanosuchfieldlevelencryptionconfig"></a>
<a id="schema_NoSuchFieldLevelEncryptionConfig"></a>
<a id="tocSnosuchfieldlevelencryptionconfig"></a>
<a id="tocsnosuchfieldlevelencryptionconfig"></a>

```json
null
```

<h2 id="tocS_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior">IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaillegalfieldlevelencryptionconfigassociationwithcachebehavior"></a>
<a id="schema_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior"></a>
<a id="tocSillegalfieldlevelencryptionconfigassociationwithcachebehavior"></a>
<a id="tocsillegalfieldlevelencryptionconfigassociationwithcachebehavior"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToFieldLevelEncryptionConfig">TooManyDistributionsAssociatedToFieldLevelEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtofieldlevelencryptionconfig"></a>
<a id="schema_TooManyDistributionsAssociatedToFieldLevelEncryptionConfig"></a>
<a id="tocStoomanydistributionsassociatedtofieldlevelencryptionconfig"></a>
<a id="tocstoomanydistributionsassociatedtofieldlevelencryptionconfig"></a>

```json
null
```

<h2 id="tocS_NoSuchCachePolicy">NoSuchCachePolicy</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcachepolicy"></a>
<a id="schema_NoSuchCachePolicy"></a>
<a id="tocSnosuchcachepolicy"></a>
<a id="tocsnosuchcachepolicy"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToCachePolicy">TooManyDistributionsAssociatedToCachePolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtocachepolicy"></a>
<a id="schema_TooManyDistributionsAssociatedToCachePolicy"></a>
<a id="tocStoomanydistributionsassociatedtocachepolicy"></a>
<a id="tocstoomanydistributionsassociatedtocachepolicy"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToOriginAccessControl">TooManyDistributionsAssociatedToOriginAccessControl</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtooriginaccesscontrol"></a>
<a id="schema_TooManyDistributionsAssociatedToOriginAccessControl"></a>
<a id="tocStoomanydistributionsassociatedtooriginaccesscontrol"></a>
<a id="tocstoomanydistributionsassociatedtooriginaccesscontrol"></a>

```json
null
```

<h2 id="tocS_NoSuchResponseHeadersPolicy">NoSuchResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanosuchresponseheaderspolicy"></a>
<a id="schema_NoSuchResponseHeadersPolicy"></a>
<a id="tocSnosuchresponseheaderspolicy"></a>
<a id="tocsnosuchresponseheaderspolicy"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToResponseHeadersPolicy">TooManyDistributionsAssociatedToResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtoresponseheaderspolicy"></a>
<a id="schema_TooManyDistributionsAssociatedToResponseHeadersPolicy"></a>
<a id="tocStoomanydistributionsassociatedtoresponseheaderspolicy"></a>
<a id="tocstoomanydistributionsassociatedtoresponseheaderspolicy"></a>

```json
null
```

<h2 id="tocS_NoSuchOriginRequestPolicy">NoSuchOriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanosuchoriginrequestpolicy"></a>
<a id="schema_NoSuchOriginRequestPolicy"></a>
<a id="tocSnosuchoriginrequestpolicy"></a>
<a id="tocsnosuchoriginrequestpolicy"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToOriginRequestPolicy">TooManyDistributionsAssociatedToOriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtooriginrequestpolicy"></a>
<a id="schema_TooManyDistributionsAssociatedToOriginRequestPolicy"></a>
<a id="tocStoomanydistributionsassociatedtooriginrequestpolicy"></a>
<a id="tocstoomanydistributionsassociatedtooriginrequestpolicy"></a>

```json
null
```

<h2 id="tocS_TooManyDistributionsAssociatedToKeyGroup">TooManyDistributionsAssociatedToKeyGroup</h2>
<!-- backwards compatibility -->
<a id="schematoomanydistributionsassociatedtokeygroup"></a>
<a id="schema_TooManyDistributionsAssociatedToKeyGroup"></a>
<a id="tocStoomanydistributionsassociatedtokeygroup"></a>
<a id="tocstoomanydistributionsassociatedtokeygroup"></a>

```json
null
```

<h2 id="tocS_TooManyKeyGroupsAssociatedToDistribution">TooManyKeyGroupsAssociatedToDistribution</h2>
<!-- backwards compatibility -->
<a id="schematoomanykeygroupsassociatedtodistribution"></a>
<a id="schema_TooManyKeyGroupsAssociatedToDistribution"></a>
<a id="tocStoomanykeygroupsassociatedtodistribution"></a>
<a id="tocstoomanykeygroupsassociatedtodistribution"></a>

```json
null
```

<h2 id="tocS_TrustedKeyGroupDoesNotExist">TrustedKeyGroupDoesNotExist</h2>
<!-- backwards compatibility -->
<a id="schematrustedkeygroupdoesnotexist"></a>
<a id="schema_TrustedKeyGroupDoesNotExist"></a>
<a id="tocStrustedkeygroupdoesnotexist"></a>
<a id="tocstrustedkeygroupdoesnotexist"></a>

```json
null
```

<h2 id="tocS_NoSuchRealtimeLogConfig">NoSuchRealtimeLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemanosuchrealtimelogconfig"></a>
<a id="schema_NoSuchRealtimeLogConfig"></a>
<a id="tocSnosuchrealtimelogconfig"></a>
<a id="tocsnosuchrealtimelogconfig"></a>

```json
null
```

<h2 id="tocS_RealtimeLogConfigOwnerMismatch">RealtimeLogConfigOwnerMismatch</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfigownermismatch"></a>
<a id="schema_RealtimeLogConfigOwnerMismatch"></a>
<a id="tocSrealtimelogconfigownermismatch"></a>
<a id="tocsrealtimelogconfigownermismatch"></a>

```json
null
```

<h2 id="tocS_CreateCachePolicyResult">CreateCachePolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachepolicyresult"></a>
<a id="schema_CreateCachePolicyResult"></a>
<a id="tocScreatecachepolicyresult"></a>
<a id="tocscreatecachepolicyresult"></a>

```json
{
  "CachePolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "CachePolicyConfig": {
      "Comment": {},
      "Name": {},
      "DefaultTTL": {},
      "MaxTTL": {},
      "MinTTL": {},
      "ParametersInCacheKeyAndForwardedToOrigin": {
        "EnableAcceptEncodingGzip": {},
        "EnableAcceptEncodingBrotli": {},
        "HeadersConfig": {
          "HeaderBehavior": {},
          "Headers": {
            "Quantity": {},
            "Items": {}
          }
        },
        "CookiesConfig": {
          "CookieBehavior": {},
          "Cookies": {
            "Quantity": {},
            "Items": {}
          }
        },
        "QueryStringsConfig": {
          "QueryStringBehavior": {},
          "QueryStrings": {
            "Quantity": {},
            "Items": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicy|object|false|none|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_long">long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_ParametersInCacheKeyAndForwardedToOrigin">ParametersInCacheKeyAndForwardedToOrigin</h2>
<!-- backwards compatibility -->
<a id="schemaparametersincachekeyandforwardedtoorigin"></a>
<a id="schema_ParametersInCacheKeyAndForwardedToOrigin"></a>
<a id="tocSparametersincachekeyandforwardedtoorigin"></a>
<a id="tocsparametersincachekeyandforwardedtoorigin"></a>

```json
{
  "EnableAcceptEncodingGzip": {},
  "EnableAcceptEncodingBrotli": {},
  "HeadersConfig": {
    "HeaderBehavior": {},
    "Headers": {
      "Quantity": {},
      "Items": {}
    }
  },
  "CookiesConfig": {
    "CookieBehavior": {},
    "Cookies": {
      "Quantity": {},
      "Items": {}
    }
  },
  "QueryStringsConfig": {
    "QueryStringBehavior": {},
    "QueryStrings": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnableAcceptEncodingGzip|object|true|none|none|
|EnableAcceptEncodingBrotli|object|false|none|none|
|HeadersConfig|object|true|none|none|
|CookiesConfig|object|true|none|none|
|QueryStringsConfig|object|true|none|none|

<h2 id="tocS_CachePolicyAlreadyExists">CachePolicyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyalreadyexists"></a>
<a id="schema_CachePolicyAlreadyExists"></a>
<a id="tocScachepolicyalreadyexists"></a>
<a id="tocscachepolicyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyCachePolicies">TooManyCachePolicies</h2>
<!-- backwards compatibility -->
<a id="schematoomanycachepolicies"></a>
<a id="schema_TooManyCachePolicies"></a>
<a id="tocStoomanycachepolicies"></a>
<a id="tocstoomanycachepolicies"></a>

```json
null
```

<h2 id="tocS_TooManyHeadersInCachePolicy">TooManyHeadersInCachePolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanyheadersincachepolicy"></a>
<a id="schema_TooManyHeadersInCachePolicy"></a>
<a id="tocStoomanyheadersincachepolicy"></a>
<a id="tocstoomanyheadersincachepolicy"></a>

```json
null
```

<h2 id="tocS_TooManyCookiesInCachePolicy">TooManyCookiesInCachePolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanycookiesincachepolicy"></a>
<a id="schema_TooManyCookiesInCachePolicy"></a>
<a id="tocStoomanycookiesincachepolicy"></a>
<a id="tocstoomanycookiesincachepolicy"></a>

```json
null
```

<h2 id="tocS_TooManyQueryStringsInCachePolicy">TooManyQueryStringsInCachePolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanyquerystringsincachepolicy"></a>
<a id="schema_TooManyQueryStringsInCachePolicy"></a>
<a id="tocStoomanyquerystringsincachepolicy"></a>
<a id="tocstoomanyquerystringsincachepolicy"></a>

```json
null
```

<h2 id="tocS_CreateCloudFrontOriginAccessIdentityResult">CreateCloudFrontOriginAccessIdentityResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudfrontoriginaccessidentityresult"></a>
<a id="schema_CreateCloudFrontOriginAccessIdentityResult"></a>
<a id="tocScreatecloudfrontoriginaccessidentityresult"></a>
<a id="tocscreatecloudfrontoriginaccessidentityresult"></a>

```json
{
  "CloudFrontOriginAccessIdentity": {
    "Id": {},
    "S3CanonicalUserId": {},
    "CloudFrontOriginAccessIdentityConfig": {
      "CallerReference": {},
      "Comment": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentity|object|false|none|none|

<h2 id="tocS_CloudFrontOriginAccessIdentityAlreadyExists">CloudFrontOriginAccessIdentityAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentityalreadyexists"></a>
<a id="schema_CloudFrontOriginAccessIdentityAlreadyExists"></a>
<a id="tocScloudfrontoriginaccessidentityalreadyexists"></a>
<a id="tocscloudfrontoriginaccessidentityalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyCloudFrontOriginAccessIdentities">TooManyCloudFrontOriginAccessIdentities</h2>
<!-- backwards compatibility -->
<a id="schematoomanycloudfrontoriginaccessidentities"></a>
<a id="schema_TooManyCloudFrontOriginAccessIdentities"></a>
<a id="tocStoomanycloudfrontoriginaccessidentities"></a>
<a id="tocstoomanycloudfrontoriginaccessidentities"></a>

```json
null
```

<h2 id="tocS_CreateContinuousDeploymentPolicyResult">CreateContinuousDeploymentPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontinuousdeploymentpolicyresult"></a>
<a id="schema_CreateContinuousDeploymentPolicyResult"></a>
<a id="tocScreatecontinuousdeploymentpolicyresult"></a>
<a id="tocscreatecontinuousdeploymentpolicyresult"></a>

```json
{
  "ContinuousDeploymentPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ContinuousDeploymentPolicyConfig": {
      "StagingDistributionDnsNames": {
        "Quantity": {},
        "Items": {}
      },
      "Enabled": {},
      "TrafficConfig": {
        "SingleWeightConfig": {
          "Weight": {},
          "SessionStickinessConfig": {
            "IdleTTL": {},
            "MaximumTTL": {}
          }
        },
        "SingleHeaderConfig": {
          "Header": {},
          "Value": {}
        },
        "Type": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicy|object|false|none|none|

<h2 id="tocS_StagingDistributionDnsNames">StagingDistributionDnsNames</h2>
<!-- backwards compatibility -->
<a id="schemastagingdistributiondnsnames"></a>
<a id="schema_StagingDistributionDnsNames"></a>
<a id="tocSstagingdistributiondnsnames"></a>
<a id="tocsstagingdistributiondnsnames"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

The CloudFront domain name of the staging distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_TrafficConfig">TrafficConfig</h2>
<!-- backwards compatibility -->
<a id="schematrafficconfig"></a>
<a id="schema_TrafficConfig"></a>
<a id="tocStrafficconfig"></a>
<a id="tocstrafficconfig"></a>

```json
{
  "SingleWeightConfig": {
    "Weight": {},
    "SessionStickinessConfig": {
      "IdleTTL": {},
      "MaximumTTL": {}
    }
  },
  "SingleHeaderConfig": {
    "Header": {},
    "Value": {}
  },
  "Type": {}
}
```

The traffic configuration of your continuous deployment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SingleWeightConfig|object|false|none|none|
|SingleHeaderConfig|object|false|none|none|
|Type|object|true|none|none|

<h2 id="tocS_ContinuousDeploymentPolicyAlreadyExists">ContinuousDeploymentPolicyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicyalreadyexists"></a>
<a id="schema_ContinuousDeploymentPolicyAlreadyExists"></a>
<a id="tocScontinuousdeploymentpolicyalreadyexists"></a>
<a id="tocscontinuousdeploymentpolicyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyContinuousDeploymentPolicies">TooManyContinuousDeploymentPolicies</h2>
<!-- backwards compatibility -->
<a id="schematoomanycontinuousdeploymentpolicies"></a>
<a id="schema_TooManyContinuousDeploymentPolicies"></a>
<a id="tocStoomanycontinuousdeploymentpolicies"></a>
<a id="tocstoomanycontinuousdeploymentpolicies"></a>

```json
null
```

<h2 id="tocS_StagingDistributionInUse">StagingDistributionInUse</h2>
<!-- backwards compatibility -->
<a id="schemastagingdistributioninuse"></a>
<a id="schema_StagingDistributionInUse"></a>
<a id="tocSstagingdistributioninuse"></a>
<a id="tocsstagingdistributioninuse"></a>

```json
null
```

<h2 id="tocS_CreateDistributionResult">CreateDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionresult"></a>
<a id="schema_CreateDistributionResult"></a>
<a id="tocScreatedistributionresult"></a>
<a id="tocscreatedistributionresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|object|false|none|none|

<h2 id="tocS_Aliases">Aliases</h2>
<!-- backwards compatibility -->
<a id="schemaaliases"></a>
<a id="schema_Aliases"></a>
<a id="tocSaliases"></a>
<a id="tocsaliases"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_Origins">Origins</h2>
<!-- backwards compatibility -->
<a id="schemaorigins"></a>
<a id="schema_Origins"></a>
<a id="tocSorigins"></a>
<a id="tocsorigins"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Contains information about the origins for this distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_OriginGroups">OriginGroups</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroups"></a>
<a id="schema_OriginGroups"></a>
<a id="tocSorigingroups"></a>
<a id="tocsorigingroups"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex data type for the origin groups specified for a distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_DefaultCacheBehavior">DefaultCacheBehavior</h2>
<!-- backwards compatibility -->
<a id="schemadefaultcachebehavior"></a>
<a id="schema_DefaultCacheBehavior"></a>
<a id="tocSdefaultcachebehavior"></a>
<a id="tocsdefaultcachebehavior"></a>

```json
{
  "TargetOriginId": {},
  "TrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "TrustedKeyGroups": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "ViewerProtocolPolicy": {},
  "AllowedMethods": {
    "Quantity": {},
    "Items": {},
    "CachedMethods": {
      "Quantity": {},
      "Items": {}
    }
  },
  "SmoothStreaming": {},
  "Compress": {},
  "LambdaFunctionAssociations": {
    "Quantity": {},
    "Items": {}
  },
  "FunctionAssociations": {
    "Quantity": {},
    "Items": {}
  },
  "FieldLevelEncryptionId": {},
  "RealtimeLogConfigArn": {},
  "CachePolicyId": {},
  "OriginRequestPolicyId": {},
  "ResponseHeadersPolicyId": {},
  "ForwardedValues": {
    "QueryString": {},
    "Cookies": {
      "Forward": {},
      "WhitelistedNames": {
        "Quantity": {},
        "Items": {}
      }
    },
    "Headers": {
      "Quantity": {},
      "Items": {}
    },
    "QueryStringCacheKeys": {
      "Quantity": {},
      "Items": {}
    }
  },
  "MinTTL": {},
  "DefaultTTL": {},
  "MaxTTL": {}
}
```

A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetOriginId|object|true|none|none|
|TrustedSigners|object|false|none|none|
|TrustedKeyGroups|object|false|none|none|
|ViewerProtocolPolicy|object|true|none|none|
|AllowedMethods|[AllowedMethods](#schemaallowedmethods)|false|none|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|SmoothStreaming|object|false|none|none|
|Compress|object|false|none|none|
|LambdaFunctionAssociations|object|false|none|none|
|FunctionAssociations|object|false|none|none|
|FieldLevelEncryptionId|object|false|none|none|
|RealtimeLogConfigArn|object|false|none|none|
|CachePolicyId|object|false|none|none|
|OriginRequestPolicyId|object|false|none|none|
|ResponseHeadersPolicyId|object|false|none|none|
|ForwardedValues|object|false|none|none|
|MinTTL|object|false|none|none|
|DefaultTTL|object|false|none|none|
|MaxTTL|object|false|none|none|

<h2 id="tocS_CacheBehaviors">CacheBehaviors</h2>
<!-- backwards compatibility -->
<a id="schemacachebehaviors"></a>
<a id="schema_CacheBehaviors"></a>
<a id="tocScachebehaviors"></a>
<a id="tocscachebehaviors"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex type that contains zero or more <code>CacheBehavior</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CustomErrorResponses">CustomErrorResponses</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrorresponses"></a>
<a id="schema_CustomErrorResponses"></a>
<a id="tocScustomerrorresponses"></a>
<a id="tocscustomerrorresponses"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CommentType">CommentType</h2>
<!-- backwards compatibility -->
<a id="schemacommenttype"></a>
<a id="schema_CommentType"></a>
<a id="tocScommenttype"></a>
<a id="tocscommenttype"></a>

```json
"password"
```

<h2 id="tocS_LoggingConfig">LoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaloggingconfig"></a>
<a id="schema_LoggingConfig"></a>
<a id="tocSloggingconfig"></a>
<a id="tocsloggingconfig"></a>

```json
{
  "Enabled": {},
  "IncludeCookies": {},
  "Bucket": {},
  "Prefix": {}
}
```

A complex type that controls whether access logs are written for the distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|IncludeCookies|object|true|none|none|
|Bucket|object|true|none|none|
|Prefix|object|true|none|none|

<h2 id="tocS_PriceClass">PriceClass</h2>
<!-- backwards compatibility -->
<a id="schemapriceclass"></a>
<a id="schema_PriceClass"></a>
<a id="tocSpriceclass"></a>
<a id="tocspriceclass"></a>

```json
"PriceClass_100"
```

<h2 id="tocS_ViewerCertificate">ViewerCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaviewercertificate"></a>
<a id="schema_ViewerCertificate"></a>
<a id="tocSviewercertificate"></a>
<a id="tocsviewercertificate"></a>

```json
{
  "CloudFrontDefaultCertificate": {},
  "IAMCertificateId": {},
  "ACMCertificateArn": {},
  "SSLSupportMethod": {},
  "MinimumProtocolVersion": {},
  "Certificate": {},
  "CertificateSource": {}
}
```

<p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don't support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don't support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontDefaultCertificate|object|false|none|none|
|IAMCertificateId|object|false|none|none|
|ACMCertificateArn|object|false|none|none|
|SSLSupportMethod|object|false|none|none|
|MinimumProtocolVersion|object|false|none|none|
|Certificate|object|false|none|none|
|CertificateSource|object|false|none|none|

<h2 id="tocS_Restrictions">Restrictions</h2>
<!-- backwards compatibility -->
<a id="schemarestrictions"></a>
<a id="schema_Restrictions"></a>
<a id="tocSrestrictions"></a>
<a id="tocsrestrictions"></a>

```json
{
  "GeoRestriction": {
    "RestrictionType": {},
    "Quantity": {},
    "Items": {}
  }
}
```

A complex type that identifies ways in which you want to restrict distribution of your content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeoRestriction|object|true|none|none|

<h2 id="tocS_HttpVersion">HttpVersion</h2>
<!-- backwards compatibility -->
<a id="schemahttpversion"></a>
<a id="schema_HttpVersion"></a>
<a id="tocShttpversion"></a>
<a id="tocshttpversion"></a>

```json
"http1.1"
```

<h2 id="tocS_IllegalOriginAccessConfiguration">IllegalOriginAccessConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaillegaloriginaccessconfiguration"></a>
<a id="schema_IllegalOriginAccessConfiguration"></a>
<a id="tocSillegaloriginaccessconfiguration"></a>
<a id="tocsillegaloriginaccessconfiguration"></a>

```json
null
```

<h2 id="tocS_ContinuousDeploymentPolicyInUse">ContinuousDeploymentPolicyInUse</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicyinuse"></a>
<a id="schema_ContinuousDeploymentPolicyInUse"></a>
<a id="tocScontinuousdeploymentpolicyinuse"></a>
<a id="tocscontinuousdeploymentpolicyinuse"></a>

```json
null
```

<h2 id="tocS_NoSuchContinuousDeploymentPolicy">NoSuchContinuousDeploymentPolicy</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcontinuousdeploymentpolicy"></a>
<a id="schema_NoSuchContinuousDeploymentPolicy"></a>
<a id="tocSnosuchcontinuousdeploymentpolicy"></a>
<a id="tocsnosuchcontinuousdeploymentpolicy"></a>

```json
null
```

<h2 id="tocS_InvalidDomainNameForOriginAccessControl">InvalidDomainNameForOriginAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemainvaliddomainnamefororiginaccesscontrol"></a>
<a id="schema_InvalidDomainNameForOriginAccessControl"></a>
<a id="tocSinvaliddomainnamefororiginaccesscontrol"></a>
<a id="tocsinvaliddomainnamefororiginaccesscontrol"></a>

```json
null
```

<h2 id="tocS_CreateDistributionWithTagsResult">CreateDistributionWithTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionwithtagsresult"></a>
<a id="schema_CreateDistributionWithTagsResult"></a>
<a id="tocScreatedistributionwithtagsresult"></a>
<a id="tocscreatedistributionwithtagsresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|object|false|none|none|

<h2 id="tocS_DistributionConfig">DistributionConfig</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfig"></a>
<a id="schema_DistributionConfig"></a>
<a id="tocSdistributionconfig"></a>
<a id="tocsdistributionconfig"></a>

```json
{
  "CallerReference": {},
  "Aliases": {
    "Quantity": {},
    "Items": {}
  },
  "DefaultRootObject": {},
  "Origins": {
    "Quantity": {},
    "Items": {}
  },
  "OriginGroups": {
    "Quantity": {},
    "Items": {}
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": {},
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "TrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ViewerProtocolPolicy": {},
    "AllowedMethods": {
      "Quantity": {},
      "Items": {},
      "CachedMethods": {
        "Quantity": {},
        "Items": {}
      }
    },
    "SmoothStreaming": {},
    "Compress": {},
    "LambdaFunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FieldLevelEncryptionId": {},
    "RealtimeLogConfigArn": {},
    "CachePolicyId": {},
    "OriginRequestPolicyId": {},
    "ResponseHeadersPolicyId": {},
    "ForwardedValues": {
      "QueryString": {},
      "Cookies": {
        "Forward": {},
        "WhitelistedNames": {
          "Quantity": {},
          "Items": {}
        }
      },
      "Headers": {
        "Quantity": {},
        "Items": {}
      },
      "QueryStringCacheKeys": {
        "Quantity": {},
        "Items": {}
      }
    },
    "MinTTL": {},
    "DefaultTTL": {},
    "MaxTTL": {}
  },
  "CacheBehaviors": {
    "Quantity": {},
    "Items": {}
  },
  "CustomErrorResponses": {
    "Quantity": {},
    "Items": {}
  },
  "Comment": {},
  "Logging": {
    "Enabled": {},
    "IncludeCookies": {},
    "Bucket": {},
    "Prefix": {}
  },
  "PriceClass": {},
  "Enabled": {},
  "ViewerCertificate": {
    "CloudFrontDefaultCertificate": {},
    "IAMCertificateId": {},
    "ACMCertificateArn": {},
    "SSLSupportMethod": {},
    "MinimumProtocolVersion": {},
    "Certificate": {},
    "CertificateSource": {}
  },
  "Restrictions": {
    "GeoRestriction": {
      "RestrictionType": {},
      "Quantity": {},
      "Items": {}
    }
  },
  "WebACLId": {},
  "HttpVersion": {},
  "IsIPV6Enabled": {},
  "ContinuousDeploymentPolicyId": {},
  "Staging": {}
}
```

A distribution configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|Aliases|object|false|none|none|
|DefaultRootObject|object|false|none|none|
|Origins|object|true|none|none|
|OriginGroups|object|false|none|none|
|DefaultCacheBehavior|object|true|none|none|
|CacheBehaviors|object|false|none|none|
|CustomErrorResponses|object|false|none|none|
|Comment|object|true|none|none|
|Logging|object|false|none|none|
|PriceClass|object|false|none|none|
|Enabled|object|true|none|none|
|ViewerCertificate|object|false|none|none|
|Restrictions|object|false|none|none|
|WebACLId|object|false|none|none|
|HttpVersion|object|false|none|none|
|IsIPV6Enabled|object|false|none|none|
|ContinuousDeploymentPolicyId|object|false|none|none|
|Staging|object|false|none|none|

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "Items": {}
}
```

A complex type that contains zero or more <code>Tag</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|

<h2 id="tocS_InvalidTagging">InvalidTagging</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagging"></a>
<a id="schema_InvalidTagging"></a>
<a id="tocSinvalidtagging"></a>
<a id="tocsinvalidtagging"></a>

```json
null
```

<h2 id="tocS_CreateFieldLevelEncryptionConfigResult">CreateFieldLevelEncryptionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatefieldlevelencryptionconfigresult"></a>
<a id="schema_CreateFieldLevelEncryptionConfigResult"></a>
<a id="tocScreatefieldlevelencryptionconfigresult"></a>
<a id="tocscreatefieldlevelencryptionconfigresult"></a>

```json
{
  "FieldLevelEncryption": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionConfig": {
      "CallerReference": {},
      "Comment": {},
      "QueryArgProfileConfig": {
        "ForwardWhenQueryArgProfileIsUnknown": {},
        "QueryArgProfiles": {
          "Quantity": {},
          "Items": {}
        }
      },
      "ContentTypeProfileConfig": {
        "ForwardWhenContentTypeIsUnknown": {},
        "ContentTypeProfiles": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryption|object|false|none|none|

<h2 id="tocS_QueryArgProfileConfig">QueryArgProfileConfig</h2>
<!-- backwards compatibility -->
<a id="schemaqueryargprofileconfig"></a>
<a id="schema_QueryArgProfileConfig"></a>
<a id="tocSqueryargprofileconfig"></a>
<a id="tocsqueryargprofileconfig"></a>

```json
{
  "ForwardWhenQueryArgProfileIsUnknown": {},
  "QueryArgProfiles": {
    "Quantity": {},
    "Items": {}
  }
}
```

Configuration for query argument-profile mapping for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForwardWhenQueryArgProfileIsUnknown|object|true|none|none|
|QueryArgProfiles|object|false|none|none|

<h2 id="tocS_ContentTypeProfileConfig">ContentTypeProfileConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeprofileconfig"></a>
<a id="schema_ContentTypeProfileConfig"></a>
<a id="tocScontenttypeprofileconfig"></a>
<a id="tocscontenttypeprofileconfig"></a>

```json
{
  "ForwardWhenContentTypeIsUnknown": {},
  "ContentTypeProfiles": {
    "Quantity": {},
    "Items": {}
  }
}
```

The configuration for a field-level encryption content type-profile mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ForwardWhenContentTypeIsUnknown|object|true|none|none|
|ContentTypeProfiles|object|false|none|none|

<h2 id="tocS_NoSuchFieldLevelEncryptionProfile">NoSuchFieldLevelEncryptionProfile</h2>
<!-- backwards compatibility -->
<a id="schemanosuchfieldlevelencryptionprofile"></a>
<a id="schema_NoSuchFieldLevelEncryptionProfile"></a>
<a id="tocSnosuchfieldlevelencryptionprofile"></a>
<a id="tocsnosuchfieldlevelencryptionprofile"></a>

```json
null
```

<h2 id="tocS_FieldLevelEncryptionConfigAlreadyExists">FieldLevelEncryptionConfigAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionconfigalreadyexists"></a>
<a id="schema_FieldLevelEncryptionConfigAlreadyExists"></a>
<a id="tocSfieldlevelencryptionconfigalreadyexists"></a>
<a id="tocsfieldlevelencryptionconfigalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionConfigs">TooManyFieldLevelEncryptionConfigs</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptionconfigs"></a>
<a id="schema_TooManyFieldLevelEncryptionConfigs"></a>
<a id="tocStoomanyfieldlevelencryptionconfigs"></a>
<a id="tocstoomanyfieldlevelencryptionconfigs"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionQueryArgProfiles">TooManyFieldLevelEncryptionQueryArgProfiles</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptionqueryargprofiles"></a>
<a id="schema_TooManyFieldLevelEncryptionQueryArgProfiles"></a>
<a id="tocStoomanyfieldlevelencryptionqueryargprofiles"></a>
<a id="tocstoomanyfieldlevelencryptionqueryargprofiles"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionContentTypeProfiles">TooManyFieldLevelEncryptionContentTypeProfiles</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptioncontenttypeprofiles"></a>
<a id="schema_TooManyFieldLevelEncryptionContentTypeProfiles"></a>
<a id="tocStoomanyfieldlevelencryptioncontenttypeprofiles"></a>
<a id="tocstoomanyfieldlevelencryptioncontenttypeprofiles"></a>

```json
null
```

<h2 id="tocS_QueryArgProfileEmpty">QueryArgProfileEmpty</h2>
<!-- backwards compatibility -->
<a id="schemaqueryargprofileempty"></a>
<a id="schema_QueryArgProfileEmpty"></a>
<a id="tocSqueryargprofileempty"></a>
<a id="tocsqueryargprofileempty"></a>

```json
null
```

<h2 id="tocS_CreateFieldLevelEncryptionProfileResult">CreateFieldLevelEncryptionProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatefieldlevelencryptionprofileresult"></a>
<a id="schema_CreateFieldLevelEncryptionProfileResult"></a>
<a id="tocScreatefieldlevelencryptionprofileresult"></a>
<a id="tocscreatefieldlevelencryptionprofileresult"></a>

```json
{
  "FieldLevelEncryptionProfile": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionProfileConfig": {
      "Name": {},
      "CallerReference": {},
      "Comment": {},
      "EncryptionEntities": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfile|object|false|none|none|

<h2 id="tocS_EncryptionEntities">EncryptionEntities</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionentities"></a>
<a id="schema_EncryptionEntities"></a>
<a id="tocSencryptionentities"></a>
<a id="tocsencryptionentities"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Complex data type for field-level encryption profiles that includes all of the encryption entities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_NoSuchPublicKey">NoSuchPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemanosuchpublickey"></a>
<a id="schema_NoSuchPublicKey"></a>
<a id="tocSnosuchpublickey"></a>
<a id="tocsnosuchpublickey"></a>

```json
null
```

<h2 id="tocS_FieldLevelEncryptionProfileAlreadyExists">FieldLevelEncryptionProfileAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofilealreadyexists"></a>
<a id="schema_FieldLevelEncryptionProfileAlreadyExists"></a>
<a id="tocSfieldlevelencryptionprofilealreadyexists"></a>
<a id="tocsfieldlevelencryptionprofilealreadyexists"></a>

```json
null
```

<h2 id="tocS_FieldLevelEncryptionProfileSizeExceeded">FieldLevelEncryptionProfileSizeExceeded</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofilesizeexceeded"></a>
<a id="schema_FieldLevelEncryptionProfileSizeExceeded"></a>
<a id="tocSfieldlevelencryptionprofilesizeexceeded"></a>
<a id="tocsfieldlevelencryptionprofilesizeexceeded"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionProfiles">TooManyFieldLevelEncryptionProfiles</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptionprofiles"></a>
<a id="schema_TooManyFieldLevelEncryptionProfiles"></a>
<a id="tocStoomanyfieldlevelencryptionprofiles"></a>
<a id="tocstoomanyfieldlevelencryptionprofiles"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionEncryptionEntities">TooManyFieldLevelEncryptionEncryptionEntities</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptionencryptionentities"></a>
<a id="schema_TooManyFieldLevelEncryptionEncryptionEntities"></a>
<a id="tocStoomanyfieldlevelencryptionencryptionentities"></a>
<a id="tocstoomanyfieldlevelencryptionencryptionentities"></a>

```json
null
```

<h2 id="tocS_TooManyFieldLevelEncryptionFieldPatterns">TooManyFieldLevelEncryptionFieldPatterns</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfieldlevelencryptionfieldpatterns"></a>
<a id="schema_TooManyFieldLevelEncryptionFieldPatterns"></a>
<a id="tocStoomanyfieldlevelencryptionfieldpatterns"></a>
<a id="tocstoomanyfieldlevelencryptionfieldpatterns"></a>

```json
null
```

<h2 id="tocS_CreateFunctionResult">CreateFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionresult"></a>
<a id="schema_CreateFunctionResult"></a>
<a id="tocScreatefunctionresult"></a>
<a id="tocscreatefunctionresult"></a>

```json
{
  "FunctionSummary": {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionSummary|object|false|none|none|

<h2 id="tocS_FunctionRuntime">FunctionRuntime</h2>
<!-- backwards compatibility -->
<a id="schemafunctionruntime"></a>
<a id="schema_FunctionRuntime"></a>
<a id="tocSfunctionruntime"></a>
<a id="tocsfunctionruntime"></a>

```json
"cloudfront-js-1.0"
```

<h2 id="tocS_TooManyFunctions">TooManyFunctions</h2>
<!-- backwards compatibility -->
<a id="schematoomanyfunctions"></a>
<a id="schema_TooManyFunctions"></a>
<a id="tocStoomanyfunctions"></a>
<a id="tocstoomanyfunctions"></a>

```json
null
```

<h2 id="tocS_FunctionAlreadyExists">FunctionAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemafunctionalreadyexists"></a>
<a id="schema_FunctionAlreadyExists"></a>
<a id="tocSfunctionalreadyexists"></a>
<a id="tocsfunctionalreadyexists"></a>

```json
null
```

<h2 id="tocS_FunctionSizeLimitExceeded">FunctionSizeLimitExceeded</h2>
<!-- backwards compatibility -->
<a id="schemafunctionsizelimitexceeded"></a>
<a id="schema_FunctionSizeLimitExceeded"></a>
<a id="tocSfunctionsizelimitexceeded"></a>
<a id="tocsfunctionsizelimitexceeded"></a>

```json
null
```

<h2 id="tocS_UnsupportedOperation">UnsupportedOperation</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperation"></a>
<a id="schema_UnsupportedOperation"></a>
<a id="tocSunsupportedoperation"></a>
<a id="tocsunsupportedoperation"></a>

```json
null
```

<h2 id="tocS_CreateInvalidationResult">CreateInvalidationResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvalidationresult"></a>
<a id="schema_CreateInvalidationResult"></a>
<a id="tocScreateinvalidationresult"></a>
<a id="tocscreateinvalidationresult"></a>

```json
{
  "Invalidation": {
    "Id": {},
    "Status": {},
    "CreateTime": {},
    "InvalidationBatch": {
      "Paths": {
        "Quantity": {},
        "Items": {}
      },
      "CallerReference": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invalidation|object|false|none|none|

<h2 id="tocS_Paths">Paths</h2>
<!-- backwards compatibility -->
<a id="schemapaths"></a>
<a id="schema_Paths"></a>
<a id="tocSpaths"></a>
<a id="tocspaths"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_BatchTooLarge">BatchTooLarge</h2>
<!-- backwards compatibility -->
<a id="schemabatchtoolarge"></a>
<a id="schema_BatchTooLarge"></a>
<a id="tocSbatchtoolarge"></a>
<a id="tocsbatchtoolarge"></a>

```json
null
```

<h2 id="tocS_TooManyInvalidationsInProgress">TooManyInvalidationsInProgress</h2>
<!-- backwards compatibility -->
<a id="schematoomanyinvalidationsinprogress"></a>
<a id="schema_TooManyInvalidationsInProgress"></a>
<a id="tocStoomanyinvalidationsinprogress"></a>
<a id="tocstoomanyinvalidationsinprogress"></a>

```json
null
```

<h2 id="tocS_CreateKeyGroupResult">CreateKeyGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeygroupresult"></a>
<a id="schema_CreateKeyGroupResult"></a>
<a id="tocScreatekeygroupresult"></a>
<a id="tocscreatekeygroupresult"></a>

```json
{
  "KeyGroup": {
    "Id": {},
    "LastModifiedTime": {},
    "KeyGroupConfig": {
      "Name": {},
      "Items": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroup|object|false|none|none|

<h2 id="tocS_PublicKeyIdList">PublicKeyIdList</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyidlist"></a>
<a id="schema_PublicKeyIdList"></a>
<a id="tocSpublickeyidlist"></a>
<a id="tocspublickeyidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_KeyGroupAlreadyExists">KeyGroupAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemakeygroupalreadyexists"></a>
<a id="schema_KeyGroupAlreadyExists"></a>
<a id="tocSkeygroupalreadyexists"></a>
<a id="tocskeygroupalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyKeyGroups">TooManyKeyGroups</h2>
<!-- backwards compatibility -->
<a id="schematoomanykeygroups"></a>
<a id="schema_TooManyKeyGroups"></a>
<a id="tocStoomanykeygroups"></a>
<a id="tocstoomanykeygroups"></a>

```json
null
```

<h2 id="tocS_TooManyPublicKeysInKeyGroup">TooManyPublicKeysInKeyGroup</h2>
<!-- backwards compatibility -->
<a id="schematoomanypublickeysinkeygroup"></a>
<a id="schema_TooManyPublicKeysInKeyGroup"></a>
<a id="tocStoomanypublickeysinkeygroup"></a>
<a id="tocstoomanypublickeysinkeygroup"></a>

```json
null
```

<h2 id="tocS_CreateMonitoringSubscriptionResult">CreateMonitoringSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemonitoringsubscriptionresult"></a>
<a id="schema_CreateMonitoringSubscriptionResult"></a>
<a id="tocScreatemonitoringsubscriptionresult"></a>
<a id="tocscreatemonitoringsubscriptionresult"></a>

```json
{
  "MonitoringSubscription": {
    "RealtimeMetricsSubscriptionConfig": {
      "RealtimeMetricsSubscriptionStatus": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringSubscription|object|false|none|none|

<h2 id="tocS_RealtimeMetricsSubscriptionConfig">RealtimeMetricsSubscriptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemarealtimemetricssubscriptionconfig"></a>
<a id="schema_RealtimeMetricsSubscriptionConfig"></a>
<a id="tocSrealtimemetricssubscriptionconfig"></a>
<a id="tocsrealtimemetricssubscriptionconfig"></a>

```json
{
  "RealtimeMetricsSubscriptionStatus": {}
}
```

A subscription configuration for additional CloudWatch metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeMetricsSubscriptionStatus|object|true|none|none|

<h2 id="tocS_MonitoringSubscriptionAlreadyExists">MonitoringSubscriptionAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringsubscriptionalreadyexists"></a>
<a id="schema_MonitoringSubscriptionAlreadyExists"></a>
<a id="tocSmonitoringsubscriptionalreadyexists"></a>
<a id="tocsmonitoringsubscriptionalreadyexists"></a>

```json
null
```

<h2 id="tocS_CreateOriginAccessControlResult">CreateOriginAccessControlResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginaccesscontrolresult"></a>
<a id="schema_CreateOriginAccessControlResult"></a>
<a id="tocScreateoriginaccesscontrolresult"></a>
<a id="tocscreateoriginaccesscontrolresult"></a>

```json
{
  "OriginAccessControl": {
    "Id": {},
    "OriginAccessControlConfig": {
      "Name": {},
      "Description": {},
      "SigningProtocol": {},
      "SigningBehavior": {},
      "OriginAccessControlOriginType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControl|object|false|none|none|

<h2 id="tocS_OriginAccessControlSigningProtocols">OriginAccessControlSigningProtocols</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolsigningprotocols"></a>
<a id="schema_OriginAccessControlSigningProtocols"></a>
<a id="tocSoriginaccesscontrolsigningprotocols"></a>
<a id="tocsoriginaccesscontrolsigningprotocols"></a>

```json
"sigv4"
```

<h2 id="tocS_OriginAccessControlSigningBehaviors">OriginAccessControlSigningBehaviors</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolsigningbehaviors"></a>
<a id="schema_OriginAccessControlSigningBehaviors"></a>
<a id="tocSoriginaccesscontrolsigningbehaviors"></a>
<a id="tocsoriginaccesscontrolsigningbehaviors"></a>

```json
"never"
```

<h2 id="tocS_OriginAccessControlOriginTypes">OriginAccessControlOriginTypes</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolorigintypes"></a>
<a id="schema_OriginAccessControlOriginTypes"></a>
<a id="tocSoriginaccesscontrolorigintypes"></a>
<a id="tocsoriginaccesscontrolorigintypes"></a>

```json
"s3"
```

<h2 id="tocS_OriginAccessControlAlreadyExists">OriginAccessControlAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolalreadyexists"></a>
<a id="schema_OriginAccessControlAlreadyExists"></a>
<a id="tocSoriginaccesscontrolalreadyexists"></a>
<a id="tocsoriginaccesscontrolalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyOriginAccessControls">TooManyOriginAccessControls</h2>
<!-- backwards compatibility -->
<a id="schematoomanyoriginaccesscontrols"></a>
<a id="schema_TooManyOriginAccessControls"></a>
<a id="tocStoomanyoriginaccesscontrols"></a>
<a id="tocstoomanyoriginaccesscontrols"></a>

```json
null
```

<h2 id="tocS_CreateOriginRequestPolicyResult">CreateOriginRequestPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginrequestpolicyresult"></a>
<a id="schema_CreateOriginRequestPolicyResult"></a>
<a id="tocScreateoriginrequestpolicyresult"></a>
<a id="tocscreateoriginrequestpolicyresult"></a>

```json
{
  "OriginRequestPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "OriginRequestPolicyConfig": {
      "Comment": {},
      "Name": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicy|object|false|none|none|

<h2 id="tocS_OriginRequestPolicyHeadersConfig">OriginRequestPolicyHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyheadersconfig"></a>
<a id="schema_OriginRequestPolicyHeadersConfig"></a>
<a id="tocSoriginrequestpolicyheadersconfig"></a>
<a id="tocsoriginrequestpolicyheadersconfig"></a>

```json
{
  "HeaderBehavior": {},
  "Headers": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderBehavior|object|true|none|none|
|Headers|[Headers](#schemaheaders)|false|none|Contains a list of HTTP header names.|

<h2 id="tocS_OriginRequestPolicyCookiesConfig">OriginRequestPolicyCookiesConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicycookiesconfig"></a>
<a id="schema_OriginRequestPolicyCookiesConfig"></a>
<a id="tocSoriginrequestpolicycookiesconfig"></a>
<a id="tocsoriginrequestpolicycookiesconfig"></a>

```json
{
  "CookieBehavior": {},
  "Cookies": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CookieBehavior|object|true|none|none|
|Cookies|[CookieNames](#schemacookienames)|false|none|Contains a list of cookie names.|

<h2 id="tocS_OriginRequestPolicyQueryStringsConfig">OriginRequestPolicyQueryStringsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyquerystringsconfig"></a>
<a id="schema_OriginRequestPolicyQueryStringsConfig"></a>
<a id="tocSoriginrequestpolicyquerystringsconfig"></a>
<a id="tocsoriginrequestpolicyquerystringsconfig"></a>

```json
{
  "QueryStringBehavior": {},
  "QueryStrings": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryStringBehavior|object|true|none|none|
|QueryStrings|object|false|none|none|

<h2 id="tocS_OriginRequestPolicyAlreadyExists">OriginRequestPolicyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyalreadyexists"></a>
<a id="schema_OriginRequestPolicyAlreadyExists"></a>
<a id="tocSoriginrequestpolicyalreadyexists"></a>
<a id="tocsoriginrequestpolicyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyOriginRequestPolicies">TooManyOriginRequestPolicies</h2>
<!-- backwards compatibility -->
<a id="schematoomanyoriginrequestpolicies"></a>
<a id="schema_TooManyOriginRequestPolicies"></a>
<a id="tocStoomanyoriginrequestpolicies"></a>
<a id="tocstoomanyoriginrequestpolicies"></a>

```json
null
```

<h2 id="tocS_TooManyHeadersInOriginRequestPolicy">TooManyHeadersInOriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanyheadersinoriginrequestpolicy"></a>
<a id="schema_TooManyHeadersInOriginRequestPolicy"></a>
<a id="tocStoomanyheadersinoriginrequestpolicy"></a>
<a id="tocstoomanyheadersinoriginrequestpolicy"></a>

```json
null
```

<h2 id="tocS_TooManyCookiesInOriginRequestPolicy">TooManyCookiesInOriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanycookiesinoriginrequestpolicy"></a>
<a id="schema_TooManyCookiesInOriginRequestPolicy"></a>
<a id="tocStoomanycookiesinoriginrequestpolicy"></a>
<a id="tocstoomanycookiesinoriginrequestpolicy"></a>

```json
null
```

<h2 id="tocS_TooManyQueryStringsInOriginRequestPolicy">TooManyQueryStringsInOriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanyquerystringsinoriginrequestpolicy"></a>
<a id="schema_TooManyQueryStringsInOriginRequestPolicy"></a>
<a id="tocStoomanyquerystringsinoriginrequestpolicy"></a>
<a id="tocstoomanyquerystringsinoriginrequestpolicy"></a>

```json
null
```

<h2 id="tocS_CreatePublicKeyResult">CreatePublicKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublickeyresult"></a>
<a id="schema_CreatePublicKeyResult"></a>
<a id="tocScreatepublickeyresult"></a>
<a id="tocscreatepublickeyresult"></a>

```json
{
  "PublicKey": {
    "Id": {},
    "CreatedTime": {},
    "PublicKeyConfig": {
      "CallerReference": {},
      "Name": {},
      "EncodedKey": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKey|object|false|none|none|

<h2 id="tocS_PublicKeyAlreadyExists">PublicKeyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyalreadyexists"></a>
<a id="schema_PublicKeyAlreadyExists"></a>
<a id="tocSpublickeyalreadyexists"></a>
<a id="tocspublickeyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyPublicKeys">TooManyPublicKeys</h2>
<!-- backwards compatibility -->
<a id="schematoomanypublickeys"></a>
<a id="schema_TooManyPublicKeys"></a>
<a id="tocStoomanypublickeys"></a>
<a id="tocstoomanypublickeys"></a>

```json
null
```

<h2 id="tocS_CreateRealtimeLogConfigResult">CreateRealtimeLogConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemacreaterealtimelogconfigresult"></a>
<a id="schema_CreateRealtimeLogConfigResult"></a>
<a id="tocScreaterealtimelogconfigresult"></a>
<a id="tocscreaterealtimelogconfigresult"></a>

```json
{
  "RealtimeLogConfig": {
    "ARN": {},
    "Name": {},
    "SamplingRate": {},
    "EndPoints": {},
    "Fields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeLogConfig|object|false|none|none|

<h2 id="tocS_EndPoint">EndPoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_EndPoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "StreamType": {},
  "KinesisStreamConfig": {
    "RoleARN": {},
    "StreamARN": {}
  }
}
```

Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamType|object|true|none|none|
|KinesisStreamConfig|object|false|none|none|

<h2 id="tocS_RealtimeLogConfigAlreadyExists">RealtimeLogConfigAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfigalreadyexists"></a>
<a id="schema_RealtimeLogConfigAlreadyExists"></a>
<a id="tocSrealtimelogconfigalreadyexists"></a>
<a id="tocsrealtimelogconfigalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyRealtimeLogConfigs">TooManyRealtimeLogConfigs</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrealtimelogconfigs"></a>
<a id="schema_TooManyRealtimeLogConfigs"></a>
<a id="tocStoomanyrealtimelogconfigs"></a>
<a id="tocstoomanyrealtimelogconfigs"></a>

```json
null
```

<h2 id="tocS_CreateResponseHeadersPolicyResult">CreateResponseHeadersPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateresponseheaderspolicyresult"></a>
<a id="schema_CreateResponseHeadersPolicyResult"></a>
<a id="tocScreateresponseheaderspolicyresult"></a>
<a id="tocscreateresponseheaderspolicyresult"></a>

```json
{
  "ResponseHeadersPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ResponseHeadersPolicyConfig": {
      "Comment": {},
      "Name": {},
      "CorsConfig": {
        "AccessControlAllowOrigins": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowMethods": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowCredentials": {},
        "AccessControlExposeHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlMaxAgeSec": {},
        "OriginOverride": {}
      },
      "SecurityHeadersConfig": {
        "XSSProtection": {
          "Override": {},
          "Protection": {},
          "ModeBlock": {},
          "ReportUri": {}
        },
        "FrameOptions": {
          "Override": {},
          "FrameOption": {}
        },
        "ReferrerPolicy": {
          "Override": {},
          "ReferrerPolicy": {}
        },
        "ContentSecurityPolicy": {
          "Override": {},
          "ContentSecurityPolicy": {}
        },
        "ContentTypeOptions": {
          "Override": {}
        },
        "StrictTransportSecurity": {
          "Override": {},
          "IncludeSubdomains": {},
          "Preload": {},
          "AccessControlMaxAgeSec": {}
        }
      },
      "ServerTimingHeadersConfig": {
        "Enabled": {},
        "SamplingRate": {}
      },
      "CustomHeadersConfig": {
        "Quantity": {},
        "Items": {}
      },
      "RemoveHeadersConfig": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicy|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyCorsConfig">ResponseHeadersPolicyCorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycorsconfig"></a>
<a id="schema_ResponseHeadersPolicyCorsConfig"></a>
<a id="tocSresponseheaderspolicycorsconfig"></a>
<a id="tocsresponseheaderspolicycorsconfig"></a>

```json
{
  "AccessControlAllowOrigins": {
    "Quantity": {},
    "Items": {}
  },
  "AccessControlAllowHeaders": {
    "Quantity": {},
    "Items": {}
  },
  "AccessControlAllowMethods": {
    "Quantity": {},
    "Items": {}
  },
  "AccessControlAllowCredentials": {},
  "AccessControlExposeHeaders": {
    "Quantity": {},
    "Items": {}
  },
  "AccessControlMaxAgeSec": {},
  "OriginOverride": {}
}
```

<p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlAllowOrigins|object|true|none|none|
|AccessControlAllowHeaders|object|true|none|none|
|AccessControlAllowMethods|object|true|none|none|
|AccessControlAllowCredentials|object|true|none|none|
|AccessControlExposeHeaders|object|false|none|none|
|AccessControlMaxAgeSec|object|false|none|none|
|OriginOverride|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicySecurityHeadersConfig">ResponseHeadersPolicySecurityHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicysecurityheadersconfig"></a>
<a id="schema_ResponseHeadersPolicySecurityHeadersConfig"></a>
<a id="tocSresponseheaderspolicysecurityheadersconfig"></a>
<a id="tocsresponseheaderspolicysecurityheadersconfig"></a>

```json
{
  "XSSProtection": {
    "Override": {},
    "Protection": {},
    "ModeBlock": {},
    "ReportUri": {}
  },
  "FrameOptions": {
    "Override": {},
    "FrameOption": {}
  },
  "ReferrerPolicy": {
    "Override": {},
    "ReferrerPolicy": {}
  },
  "ContentSecurityPolicy": {
    "Override": {},
    "ContentSecurityPolicy": {}
  },
  "ContentTypeOptions": {
    "Override": {}
  },
  "StrictTransportSecurity": {
    "Override": {},
    "IncludeSubdomains": {},
    "Preload": {},
    "AccessControlMaxAgeSec": {}
  }
}
```

A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|XSSProtection|object|false|none|none|
|FrameOptions|object|false|none|none|
|ReferrerPolicy|object|false|none|none|
|ContentSecurityPolicy|object|false|none|none|
|ContentTypeOptions|object|false|none|none|
|StrictTransportSecurity|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyServerTimingHeadersConfig">ResponseHeadersPolicyServerTimingHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyservertimingheadersconfig"></a>
<a id="schema_ResponseHeadersPolicyServerTimingHeadersConfig"></a>
<a id="tocSresponseheaderspolicyservertimingheadersconfig"></a>
<a id="tocsresponseheaderspolicyservertimingheadersconfig"></a>

```json
{
  "Enabled": {},
  "SamplingRate": {}
}
```

<p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|SamplingRate|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyCustomHeadersConfig">ResponseHeadersPolicyCustomHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycustomheadersconfig"></a>
<a id="schema_ResponseHeadersPolicyCustomHeadersConfig"></a>
<a id="tocSresponseheaderspolicycustomheadersconfig"></a>
<a id="tocsresponseheaderspolicycustomheadersconfig"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyRemoveHeadersConfig">ResponseHeadersPolicyRemoveHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyremoveheadersconfig"></a>
<a id="schema_ResponseHeadersPolicyRemoveHeadersConfig"></a>
<a id="tocSresponseheaderspolicyremoveheadersconfig"></a>
<a id="tocsresponseheaderspolicyremoveheadersconfig"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyAlreadyExists">ResponseHeadersPolicyAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyalreadyexists"></a>
<a id="schema_ResponseHeadersPolicyAlreadyExists"></a>
<a id="tocSresponseheaderspolicyalreadyexists"></a>
<a id="tocsresponseheaderspolicyalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyResponseHeadersPolicies">TooManyResponseHeadersPolicies</h2>
<!-- backwards compatibility -->
<a id="schematoomanyresponseheaderspolicies"></a>
<a id="schema_TooManyResponseHeadersPolicies"></a>
<a id="tocStoomanyresponseheaderspolicies"></a>
<a id="tocstoomanyresponseheaderspolicies"></a>

```json
null
```

<h2 id="tocS_TooManyCustomHeadersInResponseHeadersPolicy">TooManyCustomHeadersInResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanycustomheadersinresponseheaderspolicy"></a>
<a id="schema_TooManyCustomHeadersInResponseHeadersPolicy"></a>
<a id="tocStoomanycustomheadersinresponseheaderspolicy"></a>
<a id="tocstoomanycustomheadersinresponseheaderspolicy"></a>

```json
null
```

<h2 id="tocS_TooLongCSPInResponseHeadersPolicy">TooLongCSPInResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoolongcspinresponseheaderspolicy"></a>
<a id="schema_TooLongCSPInResponseHeadersPolicy"></a>
<a id="tocStoolongcspinresponseheaderspolicy"></a>
<a id="tocstoolongcspinresponseheaderspolicy"></a>

```json
null
```

<h2 id="tocS_TooManyRemoveHeadersInResponseHeadersPolicy">TooManyRemoveHeadersInResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schematoomanyremoveheadersinresponseheaderspolicy"></a>
<a id="schema_TooManyRemoveHeadersInResponseHeadersPolicy"></a>
<a id="tocStoomanyremoveheadersinresponseheaderspolicy"></a>
<a id="tocstoomanyremoveheadersinresponseheaderspolicy"></a>

```json
null
```

<h2 id="tocS_CreateStreamingDistributionResult">CreateStreamingDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingdistributionresult"></a>
<a id="schema_CreateStreamingDistributionResult"></a>
<a id="tocScreatestreamingdistributionresult"></a>
<a id="tocscreatestreamingdistributionresult"></a>

```json
{
  "StreamingDistribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistribution|object|false|none|none|

<h2 id="tocS_S3Origin">S3Origin</h2>
<!-- backwards compatibility -->
<a id="schemas3origin"></a>
<a id="schema_S3Origin"></a>
<a id="tocSs3origin"></a>
<a id="tocss3origin"></a>

```json
{
  "DomainName": {},
  "OriginAccessIdentity": {}
}
```

A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|OriginAccessIdentity|object|true|none|none|

<h2 id="tocS_StreamingLoggingConfig">StreamingLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemastreamingloggingconfig"></a>
<a id="schema_StreamingLoggingConfig"></a>
<a id="tocSstreamingloggingconfig"></a>
<a id="tocsstreamingloggingconfig"></a>

```json
{
  "Enabled": {},
  "Bucket": {},
  "Prefix": {}
}
```

A complex type that controls whether access logs are written for this streaming distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Bucket|object|true|none|none|
|Prefix|object|true|none|none|

<h2 id="tocS_TrustedSigners">TrustedSigners</h2>
<!-- backwards compatibility -->
<a id="schematrustedsigners"></a>
<a id="schema_TrustedSigners"></a>
<a id="tocStrustedsigners"></a>
<a id="tocstrustedsigners"></a>

```json
{
  "Enabled": {},
  "Quantity": {},
  "Items": {}
}
```

A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_StreamingDistributionAlreadyExists">StreamingDistributionAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionalreadyexists"></a>
<a id="schema_StreamingDistributionAlreadyExists"></a>
<a id="tocSstreamingdistributionalreadyexists"></a>
<a id="tocsstreamingdistributionalreadyexists"></a>

```json
null
```

<h2 id="tocS_TooManyStreamingDistributionCNAMEs">TooManyStreamingDistributionCNAMEs</h2>
<!-- backwards compatibility -->
<a id="schematoomanystreamingdistributioncnames"></a>
<a id="schema_TooManyStreamingDistributionCNAMEs"></a>
<a id="tocStoomanystreamingdistributioncnames"></a>
<a id="tocstoomanystreamingdistributioncnames"></a>

```json
null
```

<h2 id="tocS_TooManyStreamingDistributions">TooManyStreamingDistributions</h2>
<!-- backwards compatibility -->
<a id="schematoomanystreamingdistributions"></a>
<a id="schema_TooManyStreamingDistributions"></a>
<a id="tocStoomanystreamingdistributions"></a>
<a id="tocstoomanystreamingdistributions"></a>

```json
null
```

<h2 id="tocS_CreateStreamingDistributionWithTagsResult">CreateStreamingDistributionWithTagsResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingdistributionwithtagsresult"></a>
<a id="schema_CreateStreamingDistributionWithTagsResult"></a>
<a id="tocScreatestreamingdistributionwithtagsresult"></a>
<a id="tocscreatestreamingdistributionwithtagsresult"></a>

```json
{
  "StreamingDistribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistribution|object|false|none|none|

<h2 id="tocS_StreamingDistributionConfig">StreamingDistributionConfig</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionconfig"></a>
<a id="schema_StreamingDistributionConfig"></a>
<a id="tocSstreamingdistributionconfig"></a>
<a id="tocsstreamingdistributionconfig"></a>

```json
{
  "CallerReference": {},
  "S3Origin": {
    "DomainName": {},
    "OriginAccessIdentity": {}
  },
  "Aliases": {
    "Quantity": {},
    "Items": {}
  },
  "Comment": {},
  "Logging": {
    "Enabled": {},
    "Bucket": {},
    "Prefix": {}
  },
  "TrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "PriceClass": {},
  "Enabled": {}
}
```

The RTMP distribution's configuration information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|S3Origin|object|true|none|none|
|Aliases|object|false|none|none|
|Comment|object|true|none|none|
|Logging|object|false|none|none|
|TrustedSigners|object|true|none|none|
|PriceClass|object|false|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_IllegalDelete">IllegalDelete</h2>
<!-- backwards compatibility -->
<a id="schemaillegaldelete"></a>
<a id="schema_IllegalDelete"></a>
<a id="tocSillegaldelete"></a>
<a id="tocsillegaldelete"></a>

```json
null
```

<h2 id="tocS_CachePolicyInUse">CachePolicyInUse</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyinuse"></a>
<a id="schema_CachePolicyInUse"></a>
<a id="tocScachepolicyinuse"></a>
<a id="tocscachepolicyinuse"></a>

```json
null
```

<h2 id="tocS_NoSuchCloudFrontOriginAccessIdentity">NoSuchCloudFrontOriginAccessIdentity</h2>
<!-- backwards compatibility -->
<a id="schemanosuchcloudfrontoriginaccessidentity"></a>
<a id="schema_NoSuchCloudFrontOriginAccessIdentity"></a>
<a id="tocSnosuchcloudfrontoriginaccessidentity"></a>
<a id="tocsnosuchcloudfrontoriginaccessidentity"></a>

```json
null
```

<h2 id="tocS_CloudFrontOriginAccessIdentityInUse">CloudFrontOriginAccessIdentityInUse</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentityinuse"></a>
<a id="schema_CloudFrontOriginAccessIdentityInUse"></a>
<a id="tocScloudfrontoriginaccessidentityinuse"></a>
<a id="tocscloudfrontoriginaccessidentityinuse"></a>

```json
null
```

<h2 id="tocS_DistributionNotDisabled">DistributionNotDisabled</h2>
<!-- backwards compatibility -->
<a id="schemadistributionnotdisabled"></a>
<a id="schema_DistributionNotDisabled"></a>
<a id="tocSdistributionnotdisabled"></a>
<a id="tocsdistributionnotdisabled"></a>

```json
null
```

<h2 id="tocS_FieldLevelEncryptionConfigInUse">FieldLevelEncryptionConfigInUse</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionconfiginuse"></a>
<a id="schema_FieldLevelEncryptionConfigInUse"></a>
<a id="tocSfieldlevelencryptionconfiginuse"></a>
<a id="tocsfieldlevelencryptionconfiginuse"></a>

```json
null
```

<h2 id="tocS_FieldLevelEncryptionProfileInUse">FieldLevelEncryptionProfileInUse</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofileinuse"></a>
<a id="schema_FieldLevelEncryptionProfileInUse"></a>
<a id="tocSfieldlevelencryptionprofileinuse"></a>
<a id="tocsfieldlevelencryptionprofileinuse"></a>

```json
null
```

<h2 id="tocS_NoSuchFunctionExists">NoSuchFunctionExists</h2>
<!-- backwards compatibility -->
<a id="schemanosuchfunctionexists"></a>
<a id="schema_NoSuchFunctionExists"></a>
<a id="tocSnosuchfunctionexists"></a>
<a id="tocsnosuchfunctionexists"></a>

```json
null
```

<h2 id="tocS_FunctionInUse">FunctionInUse</h2>
<!-- backwards compatibility -->
<a id="schemafunctioninuse"></a>
<a id="schema_FunctionInUse"></a>
<a id="tocSfunctioninuse"></a>
<a id="tocsfunctioninuse"></a>

```json
null
```

<h2 id="tocS_NoSuchResource">NoSuchResource</h2>
<!-- backwards compatibility -->
<a id="schemanosuchresource"></a>
<a id="schema_NoSuchResource"></a>
<a id="tocSnosuchresource"></a>
<a id="tocsnosuchresource"></a>

```json
null
```

<h2 id="tocS_ResourceInUse">ResourceInUse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuse"></a>
<a id="schema_ResourceInUse"></a>
<a id="tocSresourceinuse"></a>
<a id="tocsresourceinuse"></a>

```json
null
```

<h2 id="tocS_DeleteMonitoringSubscriptionResult">DeleteMonitoringSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemonitoringsubscriptionresult"></a>
<a id="schema_DeleteMonitoringSubscriptionResult"></a>
<a id="tocSdeletemonitoringsubscriptionresult"></a>
<a id="tocsdeletemonitoringsubscriptionresult"></a>

```json
{}
```

<h2 id="tocS_NoSuchMonitoringSubscription">NoSuchMonitoringSubscription</h2>
<!-- backwards compatibility -->
<a id="schemanosuchmonitoringsubscription"></a>
<a id="schema_NoSuchMonitoringSubscription"></a>
<a id="tocSnosuchmonitoringsubscription"></a>
<a id="tocsnosuchmonitoringsubscription"></a>

```json
null
```

<h2 id="tocS_NoSuchOriginAccessControl">NoSuchOriginAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemanosuchoriginaccesscontrol"></a>
<a id="schema_NoSuchOriginAccessControl"></a>
<a id="tocSnosuchoriginaccesscontrol"></a>
<a id="tocsnosuchoriginaccesscontrol"></a>

```json
null
```

<h2 id="tocS_OriginAccessControlInUse">OriginAccessControlInUse</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolinuse"></a>
<a id="schema_OriginAccessControlInUse"></a>
<a id="tocSoriginaccesscontrolinuse"></a>
<a id="tocsoriginaccesscontrolinuse"></a>

```json
null
```

<h2 id="tocS_OriginRequestPolicyInUse">OriginRequestPolicyInUse</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyinuse"></a>
<a id="schema_OriginRequestPolicyInUse"></a>
<a id="tocSoriginrequestpolicyinuse"></a>
<a id="tocsoriginrequestpolicyinuse"></a>

```json
null
```

<h2 id="tocS_PublicKeyInUse">PublicKeyInUse</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyinuse"></a>
<a id="schema_PublicKeyInUse"></a>
<a id="tocSpublickeyinuse"></a>
<a id="tocspublickeyinuse"></a>

```json
null
```

<h2 id="tocS_RealtimeLogConfigInUse">RealtimeLogConfigInUse</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfiginuse"></a>
<a id="schema_RealtimeLogConfigInUse"></a>
<a id="tocSrealtimelogconfiginuse"></a>
<a id="tocsrealtimelogconfiginuse"></a>

```json
null
```

<h2 id="tocS_ResponseHeadersPolicyInUse">ResponseHeadersPolicyInUse</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyinuse"></a>
<a id="schema_ResponseHeadersPolicyInUse"></a>
<a id="tocSresponseheaderspolicyinuse"></a>
<a id="tocsresponseheaderspolicyinuse"></a>

```json
null
```

<h2 id="tocS_StreamingDistributionNotDisabled">StreamingDistributionNotDisabled</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionnotdisabled"></a>
<a id="schema_StreamingDistributionNotDisabled"></a>
<a id="tocSstreamingdistributionnotdisabled"></a>
<a id="tocsstreamingdistributionnotdisabled"></a>

```json
null
```

<h2 id="tocS_NoSuchStreamingDistribution">NoSuchStreamingDistribution</h2>
<!-- backwards compatibility -->
<a id="schemanosuchstreamingdistribution"></a>
<a id="schema_NoSuchStreamingDistribution"></a>
<a id="tocSnosuchstreamingdistribution"></a>
<a id="tocsnosuchstreamingdistribution"></a>

```json
null
```

<h2 id="tocS_DescribeFunctionResult">DescribeFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribefunctionresult"></a>
<a id="schema_DescribeFunctionResult"></a>
<a id="tocSdescribefunctionresult"></a>
<a id="tocsdescribefunctionresult"></a>

```json
{
  "FunctionSummary": {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionSummary|object|false|none|none|

<h2 id="tocS_GetCachePolicyResult">GetCachePolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcachepolicyresult"></a>
<a id="schema_GetCachePolicyResult"></a>
<a id="tocSgetcachepolicyresult"></a>
<a id="tocsgetcachepolicyresult"></a>

```json
{
  "CachePolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "CachePolicyConfig": {
      "Comment": {},
      "Name": {},
      "DefaultTTL": {},
      "MaxTTL": {},
      "MinTTL": {},
      "ParametersInCacheKeyAndForwardedToOrigin": {
        "EnableAcceptEncodingGzip": {},
        "EnableAcceptEncodingBrotli": {},
        "HeadersConfig": {
          "HeaderBehavior": {},
          "Headers": {
            "Quantity": {},
            "Items": {}
          }
        },
        "CookiesConfig": {
          "CookieBehavior": {},
          "Cookies": {
            "Quantity": {},
            "Items": {}
          }
        },
        "QueryStringsConfig": {
          "QueryStringBehavior": {},
          "QueryStrings": {
            "Quantity": {},
            "Items": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicy|object|false|none|none|

<h2 id="tocS_GetCachePolicyConfigResult">GetCachePolicyConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcachepolicyconfigresult"></a>
<a id="schema_GetCachePolicyConfigResult"></a>
<a id="tocSgetcachepolicyconfigresult"></a>
<a id="tocsgetcachepolicyconfigresult"></a>

```json
{
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicyConfig|object|false|none|none|

<h2 id="tocS_GetCloudFrontOriginAccessIdentityResult">GetCloudFrontOriginAccessIdentityResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudfrontoriginaccessidentityresult"></a>
<a id="schema_GetCloudFrontOriginAccessIdentityResult"></a>
<a id="tocSgetcloudfrontoriginaccessidentityresult"></a>
<a id="tocsgetcloudfrontoriginaccessidentityresult"></a>

```json
{
  "CloudFrontOriginAccessIdentity": {
    "Id": {},
    "S3CanonicalUserId": {},
    "CloudFrontOriginAccessIdentityConfig": {
      "CallerReference": {},
      "Comment": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentity|object|false|none|none|

<h2 id="tocS_GetCloudFrontOriginAccessIdentityConfigResult">GetCloudFrontOriginAccessIdentityConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudfrontoriginaccessidentityconfigresult"></a>
<a id="schema_GetCloudFrontOriginAccessIdentityConfigResult"></a>
<a id="tocSgetcloudfrontoriginaccessidentityconfigresult"></a>
<a id="tocsgetcloudfrontoriginaccessidentityconfigresult"></a>

```json
{
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentityConfig|object|false|none|none|

<h2 id="tocS_GetContinuousDeploymentPolicyResult">GetContinuousDeploymentPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontinuousdeploymentpolicyresult"></a>
<a id="schema_GetContinuousDeploymentPolicyResult"></a>
<a id="tocSgetcontinuousdeploymentpolicyresult"></a>
<a id="tocsgetcontinuousdeploymentpolicyresult"></a>

```json
{
  "ContinuousDeploymentPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ContinuousDeploymentPolicyConfig": {
      "StagingDistributionDnsNames": {
        "Quantity": {},
        "Items": {}
      },
      "Enabled": {},
      "TrafficConfig": {
        "SingleWeightConfig": {
          "Weight": {},
          "SessionStickinessConfig": {
            "IdleTTL": {},
            "MaximumTTL": {}
          }
        },
        "SingleHeaderConfig": {
          "Header": {},
          "Value": {}
        },
        "Type": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicy|object|false|none|none|

<h2 id="tocS_GetContinuousDeploymentPolicyConfigResult">GetContinuousDeploymentPolicyConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetcontinuousdeploymentpolicyconfigresult"></a>
<a id="schema_GetContinuousDeploymentPolicyConfigResult"></a>
<a id="tocSgetcontinuousdeploymentpolicyconfigresult"></a>
<a id="tocsgetcontinuousdeploymentpolicyconfigresult"></a>

```json
{
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicyConfig|[ContinuousDeploymentPolicyConfig](#schemacontinuousdeploymentpolicyconfig)|false|none|Contains the configuration for a continuous deployment policy.|

<h2 id="tocS_GetDistributionResult">GetDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionresult"></a>
<a id="schema_GetDistributionResult"></a>
<a id="tocSgetdistributionresult"></a>
<a id="tocsgetdistributionresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|object|false|none|none|

<h2 id="tocS_GetDistributionConfigResult">GetDistributionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionconfigresult"></a>
<a id="schema_GetDistributionConfigResult"></a>
<a id="tocSgetdistributionconfigresult"></a>
<a id="tocsgetdistributionconfigresult"></a>

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionConfig|object|false|none|none|

<h2 id="tocS_GetFieldLevelEncryptionResult">GetFieldLevelEncryptionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionresult"></a>
<a id="schema_GetFieldLevelEncryptionResult"></a>
<a id="tocSgetfieldlevelencryptionresult"></a>
<a id="tocsgetfieldlevelencryptionresult"></a>

```json
{
  "FieldLevelEncryption": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionConfig": {
      "CallerReference": {},
      "Comment": {},
      "QueryArgProfileConfig": {
        "ForwardWhenQueryArgProfileIsUnknown": {},
        "QueryArgProfiles": {
          "Quantity": {},
          "Items": {}
        }
      },
      "ContentTypeProfileConfig": {
        "ForwardWhenContentTypeIsUnknown": {},
        "ContentTypeProfiles": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryption|object|false|none|none|

<h2 id="tocS_GetFieldLevelEncryptionConfigResult">GetFieldLevelEncryptionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionconfigresult"></a>
<a id="schema_GetFieldLevelEncryptionConfigResult"></a>
<a id="tocSgetfieldlevelencryptionconfigresult"></a>
<a id="tocsgetfieldlevelencryptionconfigresult"></a>

```json
{
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionConfig|object|false|none|none|

<h2 id="tocS_GetFieldLevelEncryptionProfileResult">GetFieldLevelEncryptionProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionprofileresult"></a>
<a id="schema_GetFieldLevelEncryptionProfileResult"></a>
<a id="tocSgetfieldlevelencryptionprofileresult"></a>
<a id="tocsgetfieldlevelencryptionprofileresult"></a>

```json
{
  "FieldLevelEncryptionProfile": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionProfileConfig": {
      "Name": {},
      "CallerReference": {},
      "Comment": {},
      "EncryptionEntities": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfile|object|false|none|none|

<h2 id="tocS_GetFieldLevelEncryptionProfileConfigResult">GetFieldLevelEncryptionProfileConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionprofileconfigresult"></a>
<a id="schema_GetFieldLevelEncryptionProfileConfigResult"></a>
<a id="tocSgetfieldlevelencryptionprofileconfigresult"></a>
<a id="tocsgetfieldlevelencryptionprofileconfigresult"></a>

```json
{
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfileConfig|object|false|none|none|

<h2 id="tocS_GetFunctionResult">GetFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionresult"></a>
<a id="schema_GetFunctionResult"></a>
<a id="tocSgetfunctionresult"></a>
<a id="tocsgetfunctionresult"></a>

```json
{
  "FunctionCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionCode|object|false|none|none|

<h2 id="tocS_GetInvalidationResult">GetInvalidationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetinvalidationresult"></a>
<a id="schema_GetInvalidationResult"></a>
<a id="tocSgetinvalidationresult"></a>
<a id="tocsgetinvalidationresult"></a>

```json
{
  "Invalidation": {
    "Id": {},
    "Status": {},
    "CreateTime": {},
    "InvalidationBatch": {
      "Paths": {
        "Quantity": {},
        "Items": {}
      },
      "CallerReference": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Invalidation|object|false|none|none|

<h2 id="tocS_NoSuchInvalidation">NoSuchInvalidation</h2>
<!-- backwards compatibility -->
<a id="schemanosuchinvalidation"></a>
<a id="schema_NoSuchInvalidation"></a>
<a id="tocSnosuchinvalidation"></a>
<a id="tocsnosuchinvalidation"></a>

```json
null
```

<h2 id="tocS_GetKeyGroupResult">GetKeyGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemagetkeygroupresult"></a>
<a id="schema_GetKeyGroupResult"></a>
<a id="tocSgetkeygroupresult"></a>
<a id="tocsgetkeygroupresult"></a>

```json
{
  "KeyGroup": {
    "Id": {},
    "LastModifiedTime": {},
    "KeyGroupConfig": {
      "Name": {},
      "Items": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroup|object|false|none|none|

<h2 id="tocS_GetKeyGroupConfigResult">GetKeyGroupConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetkeygroupconfigresult"></a>
<a id="schema_GetKeyGroupConfigResult"></a>
<a id="tocSgetkeygroupconfigresult"></a>
<a id="tocsgetkeygroupconfigresult"></a>

```json
{
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroupConfig|object|false|none|none|

<h2 id="tocS_GetMonitoringSubscriptionResult">GetMonitoringSubscriptionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmonitoringsubscriptionresult"></a>
<a id="schema_GetMonitoringSubscriptionResult"></a>
<a id="tocSgetmonitoringsubscriptionresult"></a>
<a id="tocsgetmonitoringsubscriptionresult"></a>

```json
{
  "MonitoringSubscription": {
    "RealtimeMetricsSubscriptionConfig": {
      "RealtimeMetricsSubscriptionStatus": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringSubscription|object|false|none|none|

<h2 id="tocS_GetOriginAccessControlResult">GetOriginAccessControlResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginaccesscontrolresult"></a>
<a id="schema_GetOriginAccessControlResult"></a>
<a id="tocSgetoriginaccesscontrolresult"></a>
<a id="tocsgetoriginaccesscontrolresult"></a>

```json
{
  "OriginAccessControl": {
    "Id": {},
    "OriginAccessControlConfig": {
      "Name": {},
      "Description": {},
      "SigningProtocol": {},
      "SigningBehavior": {},
      "OriginAccessControlOriginType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControl|object|false|none|none|

<h2 id="tocS_GetOriginAccessControlConfigResult">GetOriginAccessControlConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginaccesscontrolconfigresult"></a>
<a id="schema_GetOriginAccessControlConfigResult"></a>
<a id="tocSgetoriginaccesscontrolconfigresult"></a>
<a id="tocsgetoriginaccesscontrolconfigresult"></a>

```json
{
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControlConfig|object|false|none|none|

<h2 id="tocS_GetOriginRequestPolicyResult">GetOriginRequestPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginrequestpolicyresult"></a>
<a id="schema_GetOriginRequestPolicyResult"></a>
<a id="tocSgetoriginrequestpolicyresult"></a>
<a id="tocsgetoriginrequestpolicyresult"></a>

```json
{
  "OriginRequestPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "OriginRequestPolicyConfig": {
      "Comment": {},
      "Name": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicy|object|false|none|none|

<h2 id="tocS_GetOriginRequestPolicyConfigResult">GetOriginRequestPolicyConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginrequestpolicyconfigresult"></a>
<a id="schema_GetOriginRequestPolicyConfigResult"></a>
<a id="tocSgetoriginrequestpolicyconfigresult"></a>
<a id="tocsgetoriginrequestpolicyconfigresult"></a>

```json
{
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicyConfig|object|false|none|none|

<h2 id="tocS_GetPublicKeyResult">GetPublicKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyresult"></a>
<a id="schema_GetPublicKeyResult"></a>
<a id="tocSgetpublickeyresult"></a>
<a id="tocsgetpublickeyresult"></a>

```json
{
  "PublicKey": {
    "Id": {},
    "CreatedTime": {},
    "PublicKeyConfig": {
      "CallerReference": {},
      "Name": {},
      "EncodedKey": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKey|object|false|none|none|

<h2 id="tocS_GetPublicKeyConfigResult">GetPublicKeyConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyconfigresult"></a>
<a id="schema_GetPublicKeyConfigResult"></a>
<a id="tocSgetpublickeyconfigresult"></a>
<a id="tocsgetpublickeyconfigresult"></a>

```json
{
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyConfig|object|false|none|none|

<h2 id="tocS_GetRealtimeLogConfigResult">GetRealtimeLogConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetrealtimelogconfigresult"></a>
<a id="schema_GetRealtimeLogConfigResult"></a>
<a id="tocSgetrealtimelogconfigresult"></a>
<a id="tocsgetrealtimelogconfigresult"></a>

```json
{
  "RealtimeLogConfig": {
    "ARN": {},
    "Name": {},
    "SamplingRate": {},
    "EndPoints": {},
    "Fields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeLogConfig|object|false|none|none|

<h2 id="tocS_GetResponseHeadersPolicyResult">GetResponseHeadersPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseheaderspolicyresult"></a>
<a id="schema_GetResponseHeadersPolicyResult"></a>
<a id="tocSgetresponseheaderspolicyresult"></a>
<a id="tocsgetresponseheaderspolicyresult"></a>

```json
{
  "ResponseHeadersPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ResponseHeadersPolicyConfig": {
      "Comment": {},
      "Name": {},
      "CorsConfig": {
        "AccessControlAllowOrigins": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowMethods": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowCredentials": {},
        "AccessControlExposeHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlMaxAgeSec": {},
        "OriginOverride": {}
      },
      "SecurityHeadersConfig": {
        "XSSProtection": {
          "Override": {},
          "Protection": {},
          "ModeBlock": {},
          "ReportUri": {}
        },
        "FrameOptions": {
          "Override": {},
          "FrameOption": {}
        },
        "ReferrerPolicy": {
          "Override": {},
          "ReferrerPolicy": {}
        },
        "ContentSecurityPolicy": {
          "Override": {},
          "ContentSecurityPolicy": {}
        },
        "ContentTypeOptions": {
          "Override": {}
        },
        "StrictTransportSecurity": {
          "Override": {},
          "IncludeSubdomains": {},
          "Preload": {},
          "AccessControlMaxAgeSec": {}
        }
      },
      "ServerTimingHeadersConfig": {
        "Enabled": {},
        "SamplingRate": {}
      },
      "CustomHeadersConfig": {
        "Quantity": {},
        "Items": {}
      },
      "RemoveHeadersConfig": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicy|object|false|none|none|

<h2 id="tocS_GetResponseHeadersPolicyConfigResult">GetResponseHeadersPolicyConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseheaderspolicyconfigresult"></a>
<a id="schema_GetResponseHeadersPolicyConfigResult"></a>
<a id="tocSgetresponseheaderspolicyconfigresult"></a>
<a id="tocsgetresponseheaderspolicyconfigresult"></a>

```json
{
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicyConfig|object|false|none|none|

<h2 id="tocS_GetStreamingDistributionResult">GetStreamingDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingdistributionresult"></a>
<a id="schema_GetStreamingDistributionResult"></a>
<a id="tocSgetstreamingdistributionresult"></a>
<a id="tocsgetstreamingdistributionresult"></a>

```json
{
  "StreamingDistribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistribution|object|false|none|none|

<h2 id="tocS_GetStreamingDistributionConfigResult">GetStreamingDistributionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingdistributionconfigresult"></a>
<a id="schema_GetStreamingDistributionConfigResult"></a>
<a id="tocSgetstreamingdistributionconfigresult"></a>
<a id="tocsgetstreamingdistributionconfigresult"></a>

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionConfig|object|false|none|none|

<h2 id="tocS_ListCachePoliciesResult">ListCachePoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcachepoliciesresult"></a>
<a id="schema_ListCachePoliciesResult"></a>
<a id="tocSlistcachepoliciesresult"></a>
<a id="tocslistcachepoliciesresult"></a>

```json
{
  "CachePolicyList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicyList|object|false|none|none|

<h2 id="tocS_ListCloudFrontOriginAccessIdentitiesResult">ListCloudFrontOriginAccessIdentitiesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcloudfrontoriginaccessidentitiesresult"></a>
<a id="schema_ListCloudFrontOriginAccessIdentitiesResult"></a>
<a id="tocSlistcloudfrontoriginaccessidentitiesresult"></a>
<a id="tocslistcloudfrontoriginaccessidentitiesresult"></a>

```json
{
  "CloudFrontOriginAccessIdentityList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentityList|object|false|none|none|

<h2 id="tocS_ListConflictingAliasesResult">ListConflictingAliasesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistconflictingaliasesresult"></a>
<a id="schema_ListConflictingAliasesResult"></a>
<a id="tocSlistconflictingaliasesresult"></a>
<a id="tocslistconflictingaliasesresult"></a>

```json
{
  "ConflictingAliasesList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConflictingAliasesList|object|false|none|none|

<h2 id="tocS_ListContinuousDeploymentPoliciesResult">ListContinuousDeploymentPoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistcontinuousdeploymentpoliciesresult"></a>
<a id="schema_ListContinuousDeploymentPoliciesResult"></a>
<a id="tocSlistcontinuousdeploymentpoliciesresult"></a>
<a id="tocslistcontinuousdeploymentpoliciesresult"></a>

```json
{
  "ContinuousDeploymentPolicyList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicyList|object|false|none|none|

<h2 id="tocS_ListDistributionsResult">ListDistributionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsresult"></a>
<a id="schema_ListDistributionsResult"></a>
<a id="tocSlistdistributionsresult"></a>
<a id="tocslistdistributionsresult"></a>

```json
{
  "DistributionList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionList|object|false|none|none|

<h2 id="tocS_ListDistributionsByCachePolicyIdResult">ListDistributionsByCachePolicyIdResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbycachepolicyidresult"></a>
<a id="schema_ListDistributionsByCachePolicyIdResult"></a>
<a id="tocSlistdistributionsbycachepolicyidresult"></a>
<a id="tocslistdistributionsbycachepolicyidresult"></a>

```json
{
  "DistributionIdList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionIdList|object|false|none|none|

<h2 id="tocS_ListDistributionsByKeyGroupResult">ListDistributionsByKeyGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbykeygroupresult"></a>
<a id="schema_ListDistributionsByKeyGroupResult"></a>
<a id="tocSlistdistributionsbykeygroupresult"></a>
<a id="tocslistdistributionsbykeygroupresult"></a>

```json
{
  "DistributionIdList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionIdList|[DistributionIdList](#schemadistributionidlist)|false|none|A list of distribution IDs.|

<h2 id="tocS_ListDistributionsByOriginRequestPolicyIdResult">ListDistributionsByOriginRequestPolicyIdResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyoriginrequestpolicyidresult"></a>
<a id="schema_ListDistributionsByOriginRequestPolicyIdResult"></a>
<a id="tocSlistdistributionsbyoriginrequestpolicyidresult"></a>
<a id="tocslistdistributionsbyoriginrequestpolicyidresult"></a>

```json
{
  "DistributionIdList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionIdList|object|false|none|none|

<h2 id="tocS_ListDistributionsByRealtimeLogConfigResult">ListDistributionsByRealtimeLogConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyrealtimelogconfigresult"></a>
<a id="schema_ListDistributionsByRealtimeLogConfigResult"></a>
<a id="tocSlistdistributionsbyrealtimelogconfigresult"></a>
<a id="tocslistdistributionsbyrealtimelogconfigresult"></a>

```json
{
  "DistributionList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionList|[DistributionList](#schemadistributionlist)|false|none|A distribution list.|

<h2 id="tocS_ListDistributionsByResponseHeadersPolicyIdResult">ListDistributionsByResponseHeadersPolicyIdResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyresponseheaderspolicyidresult"></a>
<a id="schema_ListDistributionsByResponseHeadersPolicyIdResult"></a>
<a id="tocSlistdistributionsbyresponseheaderspolicyidresult"></a>
<a id="tocslistdistributionsbyresponseheaderspolicyidresult"></a>

```json
{
  "DistributionIdList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionIdList|[DistributionIdList](#schemadistributionidlist)|false|none|A list of distribution IDs.|

<h2 id="tocS_ListDistributionsByWebACLIdResult">ListDistributionsByWebACLIdResult</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbywebaclidresult"></a>
<a id="schema_ListDistributionsByWebACLIdResult"></a>
<a id="tocSlistdistributionsbywebaclidresult"></a>
<a id="tocslistdistributionsbywebaclidresult"></a>

```json
{
  "DistributionList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

The response to a request to list the distributions that are associated with a specified WAF web ACL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionList|object|false|none|none|

<h2 id="tocS_ListFieldLevelEncryptionConfigsResult">ListFieldLevelEncryptionConfigsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistfieldlevelencryptionconfigsresult"></a>
<a id="schema_ListFieldLevelEncryptionConfigsResult"></a>
<a id="tocSlistfieldlevelencryptionconfigsresult"></a>
<a id="tocslistfieldlevelencryptionconfigsresult"></a>

```json
{
  "FieldLevelEncryptionList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionList|object|false|none|none|

<h2 id="tocS_ListFieldLevelEncryptionProfilesResult">ListFieldLevelEncryptionProfilesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistfieldlevelencryptionprofilesresult"></a>
<a id="schema_ListFieldLevelEncryptionProfilesResult"></a>
<a id="tocSlistfieldlevelencryptionprofilesresult"></a>
<a id="tocslistfieldlevelencryptionprofilesresult"></a>

```json
{
  "FieldLevelEncryptionProfileList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfileList|object|false|none|none|

<h2 id="tocS_ListFunctionsResult">ListFunctionsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsresult"></a>
<a id="schema_ListFunctionsResult"></a>
<a id="tocSlistfunctionsresult"></a>
<a id="tocslistfunctionsresult"></a>

```json
{
  "FunctionList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionList|object|false|none|none|

<h2 id="tocS_ListInvalidationsResult">ListInvalidationsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistinvalidationsresult"></a>
<a id="schema_ListInvalidationsResult"></a>
<a id="tocSlistinvalidationsresult"></a>
<a id="tocslistinvalidationsresult"></a>

```json
{
  "InvalidationList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvalidationList|object|false|none|none|

<h2 id="tocS_ListKeyGroupsResult">ListKeyGroupsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistkeygroupsresult"></a>
<a id="schema_ListKeyGroupsResult"></a>
<a id="tocSlistkeygroupsresult"></a>
<a id="tocslistkeygroupsresult"></a>

```json
{
  "KeyGroupList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroupList|object|false|none|none|

<h2 id="tocS_ListOriginAccessControlsResult">ListOriginAccessControlsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginaccesscontrolsresult"></a>
<a id="schema_ListOriginAccessControlsResult"></a>
<a id="tocSlistoriginaccesscontrolsresult"></a>
<a id="tocslistoriginaccesscontrolsresult"></a>

```json
{
  "OriginAccessControlList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControlList|object|false|none|none|

<h2 id="tocS_ListOriginRequestPoliciesResult">ListOriginRequestPoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginrequestpoliciesresult"></a>
<a id="schema_ListOriginRequestPoliciesResult"></a>
<a id="tocSlistoriginrequestpoliciesresult"></a>
<a id="tocslistoriginrequestpoliciesresult"></a>

```json
{
  "OriginRequestPolicyList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicyList|object|false|none|none|

<h2 id="tocS_ListPublicKeysResult">ListPublicKeysResult</h2>
<!-- backwards compatibility -->
<a id="schemalistpublickeysresult"></a>
<a id="schema_ListPublicKeysResult"></a>
<a id="tocSlistpublickeysresult"></a>
<a id="tocslistpublickeysresult"></a>

```json
{
  "PublicKeyList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyList|object|false|none|none|

<h2 id="tocS_ListRealtimeLogConfigsResult">ListRealtimeLogConfigsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistrealtimelogconfigsresult"></a>
<a id="schema_ListRealtimeLogConfigsResult"></a>
<a id="tocSlistrealtimelogconfigsresult"></a>
<a id="tocslistrealtimelogconfigsresult"></a>

```json
{
  "RealtimeLogConfigs": {
    "MaxItems": {},
    "Items": {},
    "IsTruncated": {},
    "Marker": {},
    "NextMarker": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeLogConfigs|object|false|none|none|

<h2 id="tocS_ListResponseHeadersPoliciesResult">ListResponseHeadersPoliciesResult</h2>
<!-- backwards compatibility -->
<a id="schemalistresponseheaderspoliciesresult"></a>
<a id="schema_ListResponseHeadersPoliciesResult"></a>
<a id="tocSlistresponseheaderspoliciesresult"></a>
<a id="tocslistresponseheaderspoliciesresult"></a>

```json
{
  "ResponseHeadersPolicyList": {
    "NextMarker": {},
    "MaxItems": {},
    "Quantity": {},
    "Items": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicyList|object|false|none|none|

<h2 id="tocS_ListStreamingDistributionsResult">ListStreamingDistributionsResult</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingdistributionsresult"></a>
<a id="schema_ListStreamingDistributionsResult"></a>
<a id="tocSliststreamingdistributionsresult"></a>
<a id="tocsliststreamingdistributionsresult"></a>

```json
{
  "StreamingDistributionList": {
    "Marker": {},
    "NextMarker": {},
    "MaxItems": {},
    "IsTruncated": {},
    "Quantity": {},
    "Items": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionList|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResult">ListTagsForResourceResult</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresult"></a>
<a id="schema_ListTagsForResourceResult"></a>
<a id="tocSlisttagsforresourceresult"></a>
<a id="tocslisttagsforresourceresult"></a>

```json
{
  "Tags": {
    "Items": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_PublishFunctionResult">PublishFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schemapublishfunctionresult"></a>
<a id="schema_PublishFunctionResult"></a>
<a id="tocSpublishfunctionresult"></a>
<a id="tocspublishfunctionresult"></a>

```json
{
  "FunctionSummary": {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionSummary|object|false|none|none|

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

<h2 id="tocS_TestFunctionResult">TestFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schematestfunctionresult"></a>
<a id="schema_TestFunctionResult"></a>
<a id="tocStestfunctionresult"></a>
<a id="tocstestfunctionresult"></a>

```json
{
  "TestResult": {
    "FunctionSummary": {
      "Name": {},
      "Status": {},
      "FunctionConfig": {
        "Comment": {},
        "Runtime": {}
      },
      "FunctionMetadata": {
        "FunctionARN": {},
        "Stage": {},
        "CreatedTime": {},
        "LastModifiedTime": {}
      }
    },
    "ComputeUtilization": {},
    "FunctionExecutionLogs": {},
    "FunctionErrorMessage": {},
    "FunctionOutput": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TestResult|object|false|none|none|

<h2 id="tocS_TestFunctionFailed">TestFunctionFailed</h2>
<!-- backwards compatibility -->
<a id="schematestfunctionfailed"></a>
<a id="schema_TestFunctionFailed"></a>
<a id="tocStestfunctionfailed"></a>
<a id="tocstestfunctionfailed"></a>

```json
null
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

<h2 id="tocS_UpdateCachePolicyResult">UpdateCachePolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecachepolicyresult"></a>
<a id="schema_UpdateCachePolicyResult"></a>
<a id="tocSupdatecachepolicyresult"></a>
<a id="tocsupdatecachepolicyresult"></a>

```json
{
  "CachePolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "CachePolicyConfig": {
      "Comment": {},
      "Name": {},
      "DefaultTTL": {},
      "MaxTTL": {},
      "MinTTL": {},
      "ParametersInCacheKeyAndForwardedToOrigin": {
        "EnableAcceptEncodingGzip": {},
        "EnableAcceptEncodingBrotli": {},
        "HeadersConfig": {
          "HeaderBehavior": {},
          "Headers": {
            "Quantity": {},
            "Items": {}
          }
        },
        "CookiesConfig": {
          "CookieBehavior": {},
          "Cookies": {
            "Quantity": {},
            "Items": {}
          }
        },
        "QueryStringsConfig": {
          "QueryStringBehavior": {},
          "QueryStrings": {
            "Quantity": {},
            "Items": {}
          }
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicy|object|false|none|none|

<h2 id="tocS_UpdateCloudFrontOriginAccessIdentityResult">UpdateCloudFrontOriginAccessIdentityResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecloudfrontoriginaccessidentityresult"></a>
<a id="schema_UpdateCloudFrontOriginAccessIdentityResult"></a>
<a id="tocSupdatecloudfrontoriginaccessidentityresult"></a>
<a id="tocsupdatecloudfrontoriginaccessidentityresult"></a>

```json
{
  "CloudFrontOriginAccessIdentity": {
    "Id": {},
    "S3CanonicalUserId": {},
    "CloudFrontOriginAccessIdentityConfig": {
      "CallerReference": {},
      "Comment": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentity|object|false|none|none|

<h2 id="tocS_UpdateContinuousDeploymentPolicyResult">UpdateContinuousDeploymentPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontinuousdeploymentpolicyresult"></a>
<a id="schema_UpdateContinuousDeploymentPolicyResult"></a>
<a id="tocSupdatecontinuousdeploymentpolicyresult"></a>
<a id="tocsupdatecontinuousdeploymentpolicyresult"></a>

```json
{
  "ContinuousDeploymentPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ContinuousDeploymentPolicyConfig": {
      "StagingDistributionDnsNames": {
        "Quantity": {},
        "Items": {}
      },
      "Enabled": {},
      "TrafficConfig": {
        "SingleWeightConfig": {
          "Weight": {},
          "SessionStickinessConfig": {
            "IdleTTL": {},
            "MaximumTTL": {}
          }
        },
        "SingleHeaderConfig": {
          "Header": {},
          "Value": {}
        },
        "Type": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicy|object|false|none|none|

<h2 id="tocS_UpdateDistributionResult">UpdateDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionresult"></a>
<a id="schema_UpdateDistributionResult"></a>
<a id="tocSupdatedistributionresult"></a>
<a id="tocsupdatedistributionresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|object|false|none|none|

<h2 id="tocS_UpdateDistributionWithStagingConfigResult">UpdateDistributionWithStagingConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionwithstagingconfigresult"></a>
<a id="schema_UpdateDistributionWithStagingConfigResult"></a>
<a id="tocSupdatedistributionwithstagingconfigresult"></a>
<a id="tocsupdatedistributionwithstagingconfigresult"></a>

```json
{
  "Distribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "InProgressInvalidationBatches": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ActiveTrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "AliasICPRecordals": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distribution|[Distribution](#schemadistribution)|false|none|A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.|

<h2 id="tocS_UpdateFieldLevelEncryptionConfigResult">UpdateFieldLevelEncryptionConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefieldlevelencryptionconfigresult"></a>
<a id="schema_UpdateFieldLevelEncryptionConfigResult"></a>
<a id="tocSupdatefieldlevelencryptionconfigresult"></a>
<a id="tocsupdatefieldlevelencryptionconfigresult"></a>

```json
{
  "FieldLevelEncryption": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionConfig": {
      "CallerReference": {},
      "Comment": {},
      "QueryArgProfileConfig": {
        "ForwardWhenQueryArgProfileIsUnknown": {},
        "QueryArgProfiles": {
          "Quantity": {},
          "Items": {}
        }
      },
      "ContentTypeProfileConfig": {
        "ForwardWhenContentTypeIsUnknown": {},
        "ContentTypeProfiles": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryption|object|false|none|none|

<h2 id="tocS_UpdateFieldLevelEncryptionProfileResult">UpdateFieldLevelEncryptionProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefieldlevelencryptionprofileresult"></a>
<a id="schema_UpdateFieldLevelEncryptionProfileResult"></a>
<a id="tocSupdatefieldlevelencryptionprofileresult"></a>
<a id="tocsupdatefieldlevelencryptionprofileresult"></a>

```json
{
  "FieldLevelEncryptionProfile": {
    "Id": {},
    "LastModifiedTime": {},
    "FieldLevelEncryptionProfileConfig": {
      "Name": {},
      "CallerReference": {},
      "Comment": {},
      "EncryptionEntities": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfile|object|false|none|none|

<h2 id="tocS_UpdateFunctionResult">UpdateFunctionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionresult"></a>
<a id="schema_UpdateFunctionResult"></a>
<a id="tocSupdatefunctionresult"></a>
<a id="tocsupdatefunctionresult"></a>

```json
{
  "FunctionSummary": {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionSummary|object|false|none|none|

<h2 id="tocS_UpdateKeyGroupResult">UpdateKeyGroupResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeygroupresult"></a>
<a id="schema_UpdateKeyGroupResult"></a>
<a id="tocSupdatekeygroupresult"></a>
<a id="tocsupdatekeygroupresult"></a>

```json
{
  "KeyGroup": {
    "Id": {},
    "LastModifiedTime": {},
    "KeyGroupConfig": {
      "Name": {},
      "Items": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroup|object|false|none|none|

<h2 id="tocS_UpdateOriginAccessControlResult">UpdateOriginAccessControlResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginaccesscontrolresult"></a>
<a id="schema_UpdateOriginAccessControlResult"></a>
<a id="tocSupdateoriginaccesscontrolresult"></a>
<a id="tocsupdateoriginaccesscontrolresult"></a>

```json
{
  "OriginAccessControl": {
    "Id": {},
    "OriginAccessControlConfig": {
      "Name": {},
      "Description": {},
      "SigningProtocol": {},
      "SigningBehavior": {},
      "OriginAccessControlOriginType": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControl|object|false|none|none|

<h2 id="tocS_UpdateOriginRequestPolicyResult">UpdateOriginRequestPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginrequestpolicyresult"></a>
<a id="schema_UpdateOriginRequestPolicyResult"></a>
<a id="tocSupdateoriginrequestpolicyresult"></a>
<a id="tocsupdateoriginrequestpolicyresult"></a>

```json
{
  "OriginRequestPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "OriginRequestPolicyConfig": {
      "Comment": {},
      "Name": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicy|object|false|none|none|

<h2 id="tocS_UpdatePublicKeyResult">UpdatePublicKeyResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublickeyresult"></a>
<a id="schema_UpdatePublicKeyResult"></a>
<a id="tocSupdatepublickeyresult"></a>
<a id="tocsupdatepublickeyresult"></a>

```json
{
  "PublicKey": {
    "Id": {},
    "CreatedTime": {},
    "PublicKeyConfig": {
      "CallerReference": {},
      "Name": {},
      "EncodedKey": {},
      "Comment": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKey|object|false|none|none|

<h2 id="tocS_CannotChangeImmutablePublicKeyFields">CannotChangeImmutablePublicKeyFields</h2>
<!-- backwards compatibility -->
<a id="schemacannotchangeimmutablepublickeyfields"></a>
<a id="schema_CannotChangeImmutablePublicKeyFields"></a>
<a id="tocScannotchangeimmutablepublickeyfields"></a>
<a id="tocscannotchangeimmutablepublickeyfields"></a>

```json
null
```

<h2 id="tocS_UpdateRealtimeLogConfigResult">UpdateRealtimeLogConfigResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterealtimelogconfigresult"></a>
<a id="schema_UpdateRealtimeLogConfigResult"></a>
<a id="tocSupdaterealtimelogconfigresult"></a>
<a id="tocsupdaterealtimelogconfigresult"></a>

```json
{
  "RealtimeLogConfig": {
    "ARN": {},
    "Name": {},
    "SamplingRate": {},
    "EndPoints": {},
    "Fields": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeLogConfig|object|false|none|none|

<h2 id="tocS_UpdateResponseHeadersPolicyResult">UpdateResponseHeadersPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponseheaderspolicyresult"></a>
<a id="schema_UpdateResponseHeadersPolicyResult"></a>
<a id="tocSupdateresponseheaderspolicyresult"></a>
<a id="tocsupdateresponseheaderspolicyresult"></a>

```json
{
  "ResponseHeadersPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ResponseHeadersPolicyConfig": {
      "Comment": {},
      "Name": {},
      "CorsConfig": {
        "AccessControlAllowOrigins": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowMethods": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowCredentials": {},
        "AccessControlExposeHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlMaxAgeSec": {},
        "OriginOverride": {}
      },
      "SecurityHeadersConfig": {
        "XSSProtection": {
          "Override": {},
          "Protection": {},
          "ModeBlock": {},
          "ReportUri": {}
        },
        "FrameOptions": {
          "Override": {},
          "FrameOption": {}
        },
        "ReferrerPolicy": {
          "Override": {},
          "ReferrerPolicy": {}
        },
        "ContentSecurityPolicy": {
          "Override": {},
          "ContentSecurityPolicy": {}
        },
        "ContentTypeOptions": {
          "Override": {}
        },
        "StrictTransportSecurity": {
          "Override": {},
          "IncludeSubdomains": {},
          "Preload": {},
          "AccessControlMaxAgeSec": {}
        }
      },
      "ServerTimingHeadersConfig": {
        "Enabled": {},
        "SamplingRate": {}
      },
      "CustomHeadersConfig": {
        "Quantity": {},
        "Items": {}
      },
      "RemoveHeadersConfig": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicy|object|false|none|none|

<h2 id="tocS_UpdateStreamingDistributionResult">UpdateStreamingDistributionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreamingdistributionresult"></a>
<a id="schema_UpdateStreamingDistributionResult"></a>
<a id="tocSupdatestreamingdistributionresult"></a>
<a id="tocsupdatestreamingdistributionresult"></a>

```json
{
  "StreamingDistribution": {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "ActiveTrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    }
  }
}
```

The returned result of the corresponding request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistribution|object|false|none|none|

<h2 id="tocS_AccessControlAllowHeadersList">AccessControlAllowHeadersList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolallowheaderslist"></a>
<a id="schema_AccessControlAllowHeadersList"></a>
<a id="tocSaccesscontrolallowheaderslist"></a>
<a id="tocsaccesscontrolallowheaderslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ResponseHeadersPolicyAccessControlAllowMethodsValues">ResponseHeadersPolicyAccessControlAllowMethodsValues</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyaccesscontrolallowmethodsvalues"></a>
<a id="schema_ResponseHeadersPolicyAccessControlAllowMethodsValues"></a>
<a id="tocSresponseheaderspolicyaccesscontrolallowmethodsvalues"></a>
<a id="tocsresponseheaderspolicyaccesscontrolallowmethodsvalues"></a>

```json
"GET"
```

<h2 id="tocS_AccessControlAllowMethodsList">AccessControlAllowMethodsList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolallowmethodslist"></a>
<a id="schema_AccessControlAllowMethodsList"></a>
<a id="tocSaccesscontrolallowmethodslist"></a>
<a id="tocsaccesscontrolallowmethodslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_AccessControlAllowOriginsList">AccessControlAllowOriginsList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolalloworiginslist"></a>
<a id="schema_AccessControlAllowOriginsList"></a>
<a id="tocSaccesscontrolalloworiginslist"></a>
<a id="tocsaccesscontrolalloworiginslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_AccessControlExposeHeadersList">AccessControlExposeHeadersList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrolexposeheaderslist"></a>
<a id="schema_AccessControlExposeHeadersList"></a>
<a id="tocSaccesscontrolexposeheaderslist"></a>
<a id="tocsaccesscontrolexposeheaderslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_integer">integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_KGKeyPairIdsList">KGKeyPairIdsList</h2>
<!-- backwards compatibility -->
<a id="schemakgkeypairidslist"></a>
<a id="schema_KGKeyPairIdsList"></a>
<a id="tocSkgkeypairidslist"></a>
<a id="tocskgkeypairidslist"></a>

```json
[
  {
    "KeyGroupId": {},
    "KeyPairIds": {
      "Quantity": {},
      "Items": {}
    }
  }
]
```

<h2 id="tocS_ActiveTrustedKeyGroups">ActiveTrustedKeyGroups</h2>
<!-- backwards compatibility -->
<a id="schemaactivetrustedkeygroups"></a>
<a id="schema_ActiveTrustedKeyGroups"></a>
<a id="tocSactivetrustedkeygroups"></a>
<a id="tocsactivetrustedkeygroups"></a>

```json
{
  "Enabled": {},
  "Quantity": {},
  "Items": {}
}
```

A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_SignerList">SignerList</h2>
<!-- backwards compatibility -->
<a id="schemasignerlist"></a>
<a id="schema_SignerList"></a>
<a id="tocSsignerlist"></a>
<a id="tocssignerlist"></a>

```json
[
  {
    "AwsAccountNumber": {},
    "KeyPairIds": {
      "Quantity": {},
      "Items": {}
    }
  }
]
```

<h2 id="tocS_ActiveTrustedSigners">ActiveTrustedSigners</h2>
<!-- backwards compatibility -->
<a id="schemaactivetrustedsigners"></a>
<a id="schema_ActiveTrustedSigners"></a>
<a id="tocSactivetrustedsigners"></a>
<a id="tocsactivetrustedsigners"></a>

```json
{
  "Enabled": {},
  "Quantity": {},
  "Items": {}
}
```

A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ICPRecordalStatus">ICPRecordalStatus</h2>
<!-- backwards compatibility -->
<a id="schemaicprecordalstatus"></a>
<a id="schema_ICPRecordalStatus"></a>
<a id="tocSicprecordalstatus"></a>
<a id="tocsicprecordalstatus"></a>

```json
"APPROVED"
```

<h2 id="tocS_AliasICPRecordal">AliasICPRecordal</h2>
<!-- backwards compatibility -->
<a id="schemaaliasicprecordal"></a>
<a id="schema_AliasICPRecordal"></a>
<a id="tocSaliasicprecordal"></a>
<a id="tocsaliasicprecordal"></a>

```json
{
  "CNAME": {},
  "ICPRecordalStatus": {}
}
```

<p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CNAME|object|false|none|none|
|ICPRecordalStatus|object|false|none|none|

<h2 id="tocS_AliasICPRecordals">AliasICPRecordals</h2>
<!-- backwards compatibility -->
<a id="schemaaliasicprecordals"></a>
<a id="schema_AliasICPRecordals"></a>
<a id="tocSaliasicprecordals"></a>
<a id="tocsaliasicprecordals"></a>

```json
[
  {
    "CNAME": {},
    "ICPRecordalStatus": {}
  }
]
```

<h2 id="tocS_AliasList">AliasList</h2>
<!-- backwards compatibility -->
<a id="schemaaliaslist"></a>
<a id="schema_AliasList"></a>
<a id="tocSaliaslist"></a>
<a id="tocsaliaslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_MethodsList">MethodsList</h2>
<!-- backwards compatibility -->
<a id="schemamethodslist"></a>
<a id="schema_MethodsList"></a>
<a id="tocSmethodslist"></a>
<a id="tocsmethodslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CachedMethods">CachedMethods</h2>
<!-- backwards compatibility -->
<a id="schemacachedmethods"></a>
<a id="schema_CachedMethods"></a>
<a id="tocScachedmethods"></a>
<a id="tocscachedmethods"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_AllowedMethods">AllowedMethods</h2>
<!-- backwards compatibility -->
<a id="schemaallowedmethods"></a>
<a id="schema_AllowedMethods"></a>
<a id="tocSallowedmethods"></a>
<a id="tocsallowedmethods"></a>

```json
{
  "Quantity": {},
  "Items": {},
  "CachedMethods": {
    "Quantity": {},
    "Items": {}
  }
}
```

<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|
|CachedMethods|[CachedMethods](#schemacachedmethods)|false|none|<p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>|

<h2 id="tocS_AssociateAliasRequest">AssociateAliasRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatealiasrequest"></a>
<a id="schema_AssociateAliasRequest"></a>
<a id="tocSassociatealiasrequest"></a>
<a id="tocsassociatealiasrequest"></a>

```json
{}
```

<h2 id="tocS_AwsAccountNumberList">AwsAccountNumberList</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccountnumberlist"></a>
<a id="schema_AwsAccountNumberList"></a>
<a id="tocSawsaccountnumberlist"></a>
<a id="tocsawsaccountnumberlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_TrustedKeyGroups">TrustedKeyGroups</h2>
<!-- backwards compatibility -->
<a id="schematrustedkeygroups"></a>
<a id="schema_TrustedKeyGroups"></a>
<a id="tocStrustedkeygroups"></a>
<a id="tocstrustedkeygroups"></a>

```json
{
  "Enabled": {},
  "Quantity": {},
  "Items": {}
}
```

A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ViewerProtocolPolicy">ViewerProtocolPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaviewerprotocolpolicy"></a>
<a id="schema_ViewerProtocolPolicy"></a>
<a id="tocSviewerprotocolpolicy"></a>
<a id="tocsviewerprotocolpolicy"></a>

```json
"allow-all"
```

<h2 id="tocS_LambdaFunctionAssociations">LambdaFunctionAssociations</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionassociations"></a>
<a id="schema_LambdaFunctionAssociations"></a>
<a id="tocSlambdafunctionassociations"></a>
<a id="tocslambdafunctionassociations"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_FunctionAssociations">FunctionAssociations</h2>
<!-- backwards compatibility -->
<a id="schemafunctionassociations"></a>
<a id="schema_FunctionAssociations"></a>
<a id="tocSfunctionassociations"></a>
<a id="tocsfunctionassociations"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ForwardedValues">ForwardedValues</h2>
<!-- backwards compatibility -->
<a id="schemaforwardedvalues"></a>
<a id="schema_ForwardedValues"></a>
<a id="tocSforwardedvalues"></a>
<a id="tocsforwardedvalues"></a>

```json
{
  "QueryString": {},
  "Cookies": {
    "Forward": {},
    "WhitelistedNames": {
      "Quantity": {},
      "Items": {}
    }
  },
  "Headers": {
    "Quantity": {},
    "Items": {}
  },
  "QueryStringCacheKeys": {
    "Quantity": {},
    "Items": {}
  }
}
```

<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryString|object|true|none|none|
|Cookies|object|true|none|none|
|Headers|object|false|none|none|
|QueryStringCacheKeys|object|false|none|none|

<h2 id="tocS_CacheBehavior">CacheBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacachebehavior"></a>
<a id="schema_CacheBehavior"></a>
<a id="tocScachebehavior"></a>
<a id="tocscachebehavior"></a>

```json
{
  "PathPattern": {},
  "TargetOriginId": {},
  "TrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "TrustedKeyGroups": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "ViewerProtocolPolicy": {},
  "AllowedMethods": {
    "Quantity": {},
    "Items": {},
    "CachedMethods": {
      "Quantity": {},
      "Items": {}
    }
  },
  "SmoothStreaming": {},
  "Compress": {},
  "LambdaFunctionAssociations": {
    "Quantity": {},
    "Items": {}
  },
  "FunctionAssociations": {
    "Quantity": {},
    "Items": {}
  },
  "FieldLevelEncryptionId": {},
  "RealtimeLogConfigArn": {},
  "CachePolicyId": {},
  "OriginRequestPolicyId": {},
  "ResponseHeadersPolicyId": {},
  "ForwardedValues": {
    "QueryString": {},
    "Cookies": {
      "Forward": {},
      "WhitelistedNames": {
        "Quantity": {},
        "Items": {}
      }
    },
    "Headers": {
      "Quantity": {},
      "Items": {}
    },
    "QueryStringCacheKeys": {
      "Quantity": {},
      "Items": {}
    }
  },
  "MinTTL": {},
  "DefaultTTL": {},
  "MaxTTL": {}
}
```

<p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PathPattern|object|true|none|none|
|TargetOriginId|object|true|none|none|
|TrustedSigners|object|false|none|none|
|TrustedKeyGroups|object|false|none|none|
|ViewerProtocolPolicy|object|true|none|none|
|AllowedMethods|[AllowedMethods](#schemaallowedmethods)|false|none|<p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>|
|SmoothStreaming|object|false|none|none|
|Compress|object|false|none|none|
|LambdaFunctionAssociations|object|false|none|none|
|FunctionAssociations|object|false|none|none|
|FieldLevelEncryptionId|object|false|none|none|
|RealtimeLogConfigArn|object|false|none|none|
|CachePolicyId|object|false|none|none|
|OriginRequestPolicyId|object|false|none|none|
|ResponseHeadersPolicyId|object|false|none|none|
|ForwardedValues|object|false|none|none|
|MinTTL|object|false|none|none|
|DefaultTTL|object|false|none|none|
|MaxTTL|object|false|none|none|

<h2 id="tocS_CacheBehaviorList">CacheBehaviorList</h2>
<!-- backwards compatibility -->
<a id="schemacachebehaviorlist"></a>
<a id="schema_CacheBehaviorList"></a>
<a id="tocScachebehaviorlist"></a>
<a id="tocscachebehaviorlist"></a>

```json
[
  {
    "PathPattern": {},
    "TargetOriginId": {},
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "TrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ViewerProtocolPolicy": {},
    "AllowedMethods": {
      "Quantity": {},
      "Items": {},
      "CachedMethods": {
        "Quantity": {},
        "Items": {}
      }
    },
    "SmoothStreaming": {},
    "Compress": {},
    "LambdaFunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FieldLevelEncryptionId": {},
    "RealtimeLogConfigArn": {},
    "CachePolicyId": {},
    "OriginRequestPolicyId": {},
    "ResponseHeadersPolicyId": {},
    "ForwardedValues": {
      "QueryString": {},
      "Cookies": {
        "Forward": {},
        "WhitelistedNames": {
          "Quantity": {},
          "Items": {}
        }
      },
      "Headers": {
        "Quantity": {},
        "Items": {}
      },
      "QueryStringCacheKeys": {
        "Quantity": {},
        "Items": {}
      }
    },
    "MinTTL": {},
    "DefaultTTL": {},
    "MaxTTL": {}
  }
]
```

<h2 id="tocS_timestamp">timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CachePolicyConfig">CachePolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyconfig"></a>
<a id="schema_CachePolicyConfig"></a>
<a id="tocScachepolicyconfig"></a>
<a id="tocscachepolicyconfig"></a>

```json
{
  "Comment": {},
  "Name": {},
  "DefaultTTL": {},
  "MaxTTL": {},
  "MinTTL": {},
  "ParametersInCacheKeyAndForwardedToOrigin": {
    "EnableAcceptEncodingGzip": {},
    "EnableAcceptEncodingBrotli": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Name|object|true|none|none|
|DefaultTTL|object|false|none|none|
|MaxTTL|object|false|none|none|
|MinTTL|object|true|none|none|
|ParametersInCacheKeyAndForwardedToOrigin|object|false|none|none|

<h2 id="tocS_CachePolicy">CachePolicy</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicy"></a>
<a id="schema_CachePolicy"></a>
<a id="tocScachepolicy"></a>
<a id="tocscachepolicy"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

<p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|CachePolicyConfig|object|true|none|none|

<h2 id="tocS_CachePolicyCookieBehavior">CachePolicyCookieBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicycookiebehavior"></a>
<a id="schema_CachePolicyCookieBehavior"></a>
<a id="tocScachepolicycookiebehavior"></a>
<a id="tocscachepolicycookiebehavior"></a>

```json
"none"
```

<h2 id="tocS_CookieNames">CookieNames</h2>
<!-- backwards compatibility -->
<a id="schemacookienames"></a>
<a id="schema_CookieNames"></a>
<a id="tocScookienames"></a>
<a id="tocscookienames"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Contains a list of cookie names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CachePolicyCookiesConfig">CachePolicyCookiesConfig</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicycookiesconfig"></a>
<a id="schema_CachePolicyCookiesConfig"></a>
<a id="tocScachepolicycookiesconfig"></a>
<a id="tocscachepolicycookiesconfig"></a>

```json
{
  "CookieBehavior": {},
  "Cookies": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CookieBehavior|object|true|none|none|
|Cookies|[CookieNames](#schemacookienames)|false|none|Contains a list of cookie names.|

<h2 id="tocS_CachePolicyHeaderBehavior">CachePolicyHeaderBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyheaderbehavior"></a>
<a id="schema_CachePolicyHeaderBehavior"></a>
<a id="tocScachepolicyheaderbehavior"></a>
<a id="tocscachepolicyheaderbehavior"></a>

```json
"none"
```

<h2 id="tocS_Headers">Headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_Headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Contains a list of HTTP header names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CachePolicyHeadersConfig">CachePolicyHeadersConfig</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyheadersconfig"></a>
<a id="schema_CachePolicyHeadersConfig"></a>
<a id="tocScachepolicyheadersconfig"></a>
<a id="tocscachepolicyheadersconfig"></a>

```json
{
  "HeaderBehavior": {},
  "Headers": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderBehavior|object|true|none|none|
|Headers|[Headers](#schemaheaders)|false|none|Contains a list of HTTP header names.|

<h2 id="tocS_CachePolicySummaryList">CachePolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicysummarylist"></a>
<a id="schema_CachePolicySummaryList"></a>
<a id="tocScachepolicysummarylist"></a>
<a id="tocscachepolicysummarylist"></a>

```json
[
  {
    "Type": {},
    "CachePolicy": {
      "Id": {},
      "LastModifiedTime": {},
      "CachePolicyConfig": {
        "Comment": {},
        "Name": {},
        "DefaultTTL": {},
        "MaxTTL": {},
        "MinTTL": {},
        "ParametersInCacheKeyAndForwardedToOrigin": {
          "EnableAcceptEncodingGzip": {},
          "EnableAcceptEncodingBrotli": {},
          "HeadersConfig": {
            "HeaderBehavior": {},
            "Headers": {
              "Quantity": {},
              "Items": {}
            }
          },
          "CookiesConfig": {
            "CookieBehavior": {},
            "Cookies": {
              "Quantity": {},
              "Items": {}
            }
          },
          "QueryStringsConfig": {
            "QueryStringBehavior": {},
            "QueryStrings": {
              "Quantity": {},
              "Items": {}
            }
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_CachePolicyList">CachePolicyList</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicylist"></a>
<a id="schema_CachePolicyList"></a>
<a id="tocScachepolicylist"></a>
<a id="tocscachepolicylist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of cache policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CachePolicyQueryStringBehavior">CachePolicyQueryStringBehavior</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyquerystringbehavior"></a>
<a id="schema_CachePolicyQueryStringBehavior"></a>
<a id="tocScachepolicyquerystringbehavior"></a>
<a id="tocscachepolicyquerystringbehavior"></a>

```json
"none"
```

<h2 id="tocS_QueryStringNames">QueryStringNames</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringnames"></a>
<a id="schema_QueryStringNames"></a>
<a id="tocSquerystringnames"></a>
<a id="tocsquerystringnames"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Contains a list of query string names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CachePolicyQueryStringsConfig">CachePolicyQueryStringsConfig</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicyquerystringsconfig"></a>
<a id="schema_CachePolicyQueryStringsConfig"></a>
<a id="tocScachepolicyquerystringsconfig"></a>
<a id="tocscachepolicyquerystringsconfig"></a>

```json
{
  "QueryStringBehavior": {},
  "QueryStrings": {
    "Quantity": {},
    "Items": {}
  }
}
```

An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryStringBehavior|object|true|none|none|
|QueryStrings|object|false|none|none|

<h2 id="tocS_CachePolicyType">CachePolicyType</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicytype"></a>
<a id="schema_CachePolicyType"></a>
<a id="tocScachepolicytype"></a>
<a id="tocscachepolicytype"></a>

```json
"managed"
```

<h2 id="tocS_CachePolicySummary">CachePolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemacachepolicysummary"></a>
<a id="schema_CachePolicySummary"></a>
<a id="tocScachepolicysummary"></a>
<a id="tocscachepolicysummary"></a>

```json
{
  "Type": {},
  "CachePolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "CachePolicyConfig": {
      "Comment": {},
      "Name": {},
      "DefaultTTL": {},
      "MaxTTL": {},
      "MinTTL": {},
      "ParametersInCacheKeyAndForwardedToOrigin": {
        "EnableAcceptEncodingGzip": {},
        "EnableAcceptEncodingBrotli": {},
        "HeadersConfig": {
          "HeaderBehavior": {},
          "Headers": {
            "Quantity": {},
            "Items": {}
          }
        },
        "CookiesConfig": {
          "CookieBehavior": {},
          "Cookies": {
            "Quantity": {},
            "Items": {}
          }
        },
        "QueryStringsConfig": {
          "QueryStringBehavior": {},
          "QueryStrings": {
            "Quantity": {},
            "Items": {}
          }
        }
      }
    }
  }
}
```

Contains a cache policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|CachePolicy|object|true|none|none|

<h2 id="tocS_CertificateSource">CertificateSource</h2>
<!-- backwards compatibility -->
<a id="schemacertificatesource"></a>
<a id="schema_CertificateSource"></a>
<a id="tocScertificatesource"></a>
<a id="tocscertificatesource"></a>

```json
"cloudfront"
```

<h2 id="tocS_CloudFrontOriginAccessIdentityConfig">CloudFrontOriginAccessIdentityConfig</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentityconfig"></a>
<a id="schema_CloudFrontOriginAccessIdentityConfig"></a>
<a id="tocScloudfrontoriginaccessidentityconfig"></a>
<a id="tocscloudfrontoriginaccessidentityconfig"></a>

```json
{
  "CallerReference": {},
  "Comment": {}
}
```

Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|Comment|object|true|none|none|

<h2 id="tocS_CloudFrontOriginAccessIdentity">CloudFrontOriginAccessIdentity</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentity"></a>
<a id="schema_CloudFrontOriginAccessIdentity"></a>
<a id="tocScloudfrontoriginaccessidentity"></a>
<a id="tocscloudfrontoriginaccessidentity"></a>

```json
{
  "Id": {},
  "S3CanonicalUserId": {},
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

CloudFront origin access identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|S3CanonicalUserId|object|true|none|none|
|CloudFrontOriginAccessIdentityConfig|object|false|none|none|

<h2 id="tocS_CloudFrontOriginAccessIdentitySummaryList">CloudFrontOriginAccessIdentitySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentitysummarylist"></a>
<a id="schema_CloudFrontOriginAccessIdentitySummaryList"></a>
<a id="tocScloudfrontoriginaccessidentitysummarylist"></a>
<a id="tocscloudfrontoriginaccessidentitysummarylist"></a>

```json
[
  {
    "Id": {},
    "S3CanonicalUserId": {},
    "Comment": {}
  }
]
```

<h2 id="tocS_CloudFrontOriginAccessIdentityList">CloudFrontOriginAccessIdentityList</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentitylist"></a>
<a id="schema_CloudFrontOriginAccessIdentityList"></a>
<a id="tocScloudfrontoriginaccessidentitylist"></a>
<a id="tocscloudfrontoriginaccessidentitylist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_CloudFrontOriginAccessIdentitySummary">CloudFrontOriginAccessIdentitySummary</h2>
<!-- backwards compatibility -->
<a id="schemacloudfrontoriginaccessidentitysummary"></a>
<a id="schema_CloudFrontOriginAccessIdentitySummary"></a>
<a id="tocScloudfrontoriginaccessidentitysummary"></a>
<a id="tocscloudfrontoriginaccessidentitysummary"></a>

```json
{
  "Id": {},
  "S3CanonicalUserId": {},
  "Comment": {}
}
```

Summary of the information about a CloudFront origin access identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|S3CanonicalUserId|object|true|none|none|
|Comment|object|true|none|none|

<h2 id="tocS_ConflictingAlias">ConflictingAlias</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingalias"></a>
<a id="schema_ConflictingAlias"></a>
<a id="tocSconflictingalias"></a>
<a id="tocsconflictingalias"></a>

```json
{
  "Alias": {},
  "DistributionId": {},
  "AccountId": {}
}
```

An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it's associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Alias|object|false|none|none|
|DistributionId|object|false|none|none|
|AccountId|object|false|none|none|

<h2 id="tocS_ConflictingAliases">ConflictingAliases</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingaliases"></a>
<a id="schema_ConflictingAliases"></a>
<a id="tocSconflictingaliases"></a>
<a id="tocsconflictingaliases"></a>

```json
[
  {
    "Alias": {},
    "DistributionId": {},
    "AccountId": {}
  }
]
```

<h2 id="tocS_ConflictingAliasesList">ConflictingAliasesList</h2>
<!-- backwards compatibility -->
<a id="schemaconflictingaliaseslist"></a>
<a id="schema_ConflictingAliasesList"></a>
<a id="tocSconflictingaliaseslist"></a>
<a id="tocsconflictingaliaseslist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|false|none|none|
|Quantity|object|false|none|none|
|Items|object|false|none|none|

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"URLEncoded"
```

<h2 id="tocS_ContentTypeProfile">ContentTypeProfile</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeprofile"></a>
<a id="schema_ContentTypeProfile"></a>
<a id="tocScontenttypeprofile"></a>
<a id="tocscontenttypeprofile"></a>

```json
{
  "Format": {},
  "ProfileId": {},
  "ContentType": {}
}
```

A field-level encryption content type profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|true|none|none|
|ProfileId|object|false|none|none|
|ContentType|object|true|none|none|

<h2 id="tocS_ContentTypeProfiles">ContentTypeProfiles</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeprofiles"></a>
<a id="schema_ContentTypeProfiles"></a>
<a id="tocScontenttypeprofiles"></a>
<a id="tocscontenttypeprofiles"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Field-level encryption content type-profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ContentTypeProfileList">ContentTypeProfileList</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeprofilelist"></a>
<a id="schema_ContentTypeProfileList"></a>
<a id="tocScontenttypeprofilelist"></a>
<a id="tocscontenttypeprofilelist"></a>

```json
[
  {
    "Format": {},
    "ProfileId": {},
    "ContentType": {}
  }
]
```

<h2 id="tocS_ContinuousDeploymentPolicyConfig">ContinuousDeploymentPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicyconfig"></a>
<a id="schema_ContinuousDeploymentPolicyConfig"></a>
<a id="tocScontinuousdeploymentpolicyconfig"></a>
<a id="tocscontinuousdeploymentpolicyconfig"></a>

```json
{
  "StagingDistributionDnsNames": {
    "Quantity": {},
    "Items": {}
  },
  "Enabled": {},
  "TrafficConfig": {
    "SingleWeightConfig": {
      "Weight": {},
      "SessionStickinessConfig": {
        "IdleTTL": {},
        "MaximumTTL": {}
      }
    },
    "SingleHeaderConfig": {
      "Header": {},
      "Value": {}
    },
    "Type": {}
  }
}
```

Contains the configuration for a continuous deployment policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StagingDistributionDnsNames|object|true|none|none|
|Enabled|object|true|none|none|
|TrafficConfig|object|false|none|none|

<h2 id="tocS_ContinuousDeploymentPolicy">ContinuousDeploymentPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicy"></a>
<a id="schema_ContinuousDeploymentPolicy"></a>
<a id="tocScontinuousdeploymentpolicy"></a>
<a id="tocscontinuousdeploymentpolicy"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

A continuous deployment policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|ContinuousDeploymentPolicyConfig|[ContinuousDeploymentPolicyConfig](#schemacontinuousdeploymentpolicyconfig)|true|none|Contains the configuration for a continuous deployment policy.|

<h2 id="tocS_ContinuousDeploymentPolicySummaryList">ContinuousDeploymentPolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicysummarylist"></a>
<a id="schema_ContinuousDeploymentPolicySummaryList"></a>
<a id="tocScontinuousdeploymentpolicysummarylist"></a>
<a id="tocscontinuousdeploymentpolicysummarylist"></a>

```json
[
  {
    "ContinuousDeploymentPolicy": {
      "Id": {},
      "LastModifiedTime": {},
      "ContinuousDeploymentPolicyConfig": {
        "StagingDistributionDnsNames": {
          "Quantity": {},
          "Items": {}
        },
        "Enabled": {},
        "TrafficConfig": {
          "SingleWeightConfig": {
            "Weight": {},
            "SessionStickinessConfig": {
              "IdleTTL": {},
              "MaximumTTL": {}
            }
          },
          "SingleHeaderConfig": {
            "Header": {},
            "Value": {}
          },
          "Type": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ContinuousDeploymentPolicyList">ContinuousDeploymentPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicylist"></a>
<a id="schema_ContinuousDeploymentPolicyList"></a>
<a id="tocScontinuousdeploymentpolicylist"></a>
<a id="tocscontinuousdeploymentpolicylist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

Contains a list of continuous deployment policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ContinuousDeploymentPolicySummary">ContinuousDeploymentPolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicysummary"></a>
<a id="schema_ContinuousDeploymentPolicySummary"></a>
<a id="tocScontinuousdeploymentpolicysummary"></a>
<a id="tocscontinuousdeploymentpolicysummary"></a>

```json
{
  "ContinuousDeploymentPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ContinuousDeploymentPolicyConfig": {
      "StagingDistributionDnsNames": {
        "Quantity": {},
        "Items": {}
      },
      "Enabled": {},
      "TrafficConfig": {
        "SingleWeightConfig": {
          "Weight": {},
          "SessionStickinessConfig": {
            "IdleTTL": {},
            "MaximumTTL": {}
          }
        },
        "SingleHeaderConfig": {
          "Header": {},
          "Value": {}
        },
        "Type": {}
      }
    }
  }
}
```

A summary of the information about your continuous deployment policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicy|object|true|none|none|

<h2 id="tocS_ContinuousDeploymentPolicyType">ContinuousDeploymentPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentpolicytype"></a>
<a id="schema_ContinuousDeploymentPolicyType"></a>
<a id="tocScontinuousdeploymentpolicytype"></a>
<a id="tocscontinuousdeploymentpolicytype"></a>

```json
"SingleWeight"
```

<h2 id="tocS_ContinuousDeploymentSingleHeaderConfig">ContinuousDeploymentSingleHeaderConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentsingleheaderconfig"></a>
<a id="schema_ContinuousDeploymentSingleHeaderConfig"></a>
<a id="tocScontinuousdeploymentsingleheaderconfig"></a>
<a id="tocscontinuousdeploymentsingleheaderconfig"></a>

```json
{
  "Header": {},
  "Value": {}
}
```

This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Header|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_float">float</h2>
<!-- backwards compatibility -->
<a id="schemafloat"></a>
<a id="schema_float"></a>
<a id="tocSfloat"></a>
<a id="tocsfloat"></a>

```json
0
```

<h2 id="tocS_SessionStickinessConfig">SessionStickinessConfig</h2>
<!-- backwards compatibility -->
<a id="schemasessionstickinessconfig"></a>
<a id="schema_SessionStickinessConfig"></a>
<a id="tocSsessionstickinessconfig"></a>
<a id="tocssessionstickinessconfig"></a>

```json
{
  "IdleTTL": {},
  "MaximumTTL": {}
}
```

Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IdleTTL|object|true|none|none|
|MaximumTTL|object|true|none|none|

<h2 id="tocS_ContinuousDeploymentSingleWeightConfig">ContinuousDeploymentSingleWeightConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousdeploymentsingleweightconfig"></a>
<a id="schema_ContinuousDeploymentSingleWeightConfig"></a>
<a id="tocScontinuousdeploymentsingleweightconfig"></a>
<a id="tocscontinuousdeploymentsingleweightconfig"></a>

```json
{
  "Weight": {},
  "SessionStickinessConfig": {
    "IdleTTL": {},
    "MaximumTTL": {}
  }
}
```

Contains the percentage of traffic to send to a staging distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Weight|object|true|none|none|
|SessionStickinessConfig|[SessionStickinessConfig](#schemasessionstickinessconfig)|false|none|Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.|

<h2 id="tocS_CookieNameList">CookieNameList</h2>
<!-- backwards compatibility -->
<a id="schemacookienamelist"></a>
<a id="schema_CookieNameList"></a>
<a id="tocScookienamelist"></a>
<a id="tocscookienamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ItemSelection">ItemSelection</h2>
<!-- backwards compatibility -->
<a id="schemaitemselection"></a>
<a id="schema_ItemSelection"></a>
<a id="tocSitemselection"></a>
<a id="tocsitemselection"></a>

```json
"none"
```

<h2 id="tocS_CookiePreference">CookiePreference</h2>
<!-- backwards compatibility -->
<a id="schemacookiepreference"></a>
<a id="schema_CookiePreference"></a>
<a id="tocScookiepreference"></a>
<a id="tocscookiepreference"></a>

```json
{
  "Forward": {},
  "WhitelistedNames": {
    "Quantity": {},
    "Items": {}
  }
}
```

<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Forward|object|true|none|none|
|WhitelistedNames|object|false|none|none|

<h2 id="tocS_CopyDistributionRequest">CopyDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopydistributionrequest"></a>
<a id="schema_CopyDistributionRequest"></a>
<a id="tocScopydistributionrequest"></a>
<a id="tocscopydistributionrequest"></a>

```json
{
  "CallerReference": {},
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "Id": {},
  "ARN": {},
  "Status": {},
  "LastModifiedTime": {},
  "InProgressInvalidationBatches": {},
  "DomainName": {},
  "ActiveTrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "ActiveTrustedKeyGroups": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  },
  "AliasICPRecordals": {}
}
```

A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Status|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|InProgressInvalidationBatches|object|true|none|none|
|DomainName|object|true|none|none|
|ActiveTrustedSigners|object|false|none|none|
|ActiveTrustedKeyGroups|object|false|none|none|
|DistributionConfig|object|true|none|none|
|AliasICPRecordals|object|false|none|none|

<h2 id="tocS_CreateCachePolicyRequest">CreateCachePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecachepolicyrequest"></a>
<a id="schema_CreateCachePolicyRequest"></a>
<a id="tocScreatecachepolicyrequest"></a>
<a id="tocscreatecachepolicyrequest"></a>

```json
{
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicyConfig|object|true|none|none|

<h2 id="tocS_CreateCloudFrontOriginAccessIdentityRequest">CreateCloudFrontOriginAccessIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecloudfrontoriginaccessidentityrequest"></a>
<a id="schema_CreateCloudFrontOriginAccessIdentityRequest"></a>
<a id="tocScreatecloudfrontoriginaccessidentityrequest"></a>
<a id="tocscreatecloudfrontoriginaccessidentityrequest"></a>

```json
{
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentityConfig|object|true|none|none|

<h2 id="tocS_CreateContinuousDeploymentPolicyRequest">CreateContinuousDeploymentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontinuousdeploymentpolicyrequest"></a>
<a id="schema_CreateContinuousDeploymentPolicyRequest"></a>
<a id="tocScreatecontinuousdeploymentpolicyrequest"></a>
<a id="tocscreatecontinuousdeploymentpolicyrequest"></a>

```json
{
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicyConfig|object|true|none|none|

<h2 id="tocS_CreateDistributionRequest">CreateDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionrequest"></a>
<a id="schema_CreateDistributionRequest"></a>
<a id="tocScreatedistributionrequest"></a>
<a id="tocscreatedistributionrequest"></a>

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  }
}
```

The request to create a new distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionConfig|object|true|none|none|

<h2 id="tocS_DistributionConfigWithTags">DistributionConfigWithTags</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfigwithtags"></a>
<a id="schema_DistributionConfigWithTags"></a>
<a id="tocSdistributionconfigwithtags"></a>
<a id="tocsdistributionconfigwithtags"></a>

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  },
  "Tags": {
    "Items": {}
  }
}
```

A distribution Configuration and a list of tags to be associated with the distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionConfig|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_CreateDistributionWithTagsRequest">CreateDistributionWithTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionwithtagsrequest"></a>
<a id="schema_CreateDistributionWithTagsRequest"></a>
<a id="tocScreatedistributionwithtagsrequest"></a>
<a id="tocscreatedistributionwithtagsrequest"></a>

```json
{
  "DistributionConfigWithTags": {
    "DistributionConfig": {
      "CallerReference": {},
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultRootObject": {},
      "Origins": {
        "Quantity": {},
        "Items": {}
      },
      "OriginGroups": {
        "Quantity": {},
        "Items": {}
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": {},
        "TrustedSigners": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "TrustedKeyGroups": {
          "Enabled": {},
          "Quantity": {},
          "Items": {}
        },
        "ViewerProtocolPolicy": {},
        "AllowedMethods": {
          "Quantity": {},
          "Items": {},
          "CachedMethods": {
            "Quantity": {},
            "Items": {}
          }
        },
        "SmoothStreaming": {},
        "Compress": {},
        "LambdaFunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FunctionAssociations": {
          "Quantity": {},
          "Items": {}
        },
        "FieldLevelEncryptionId": {},
        "RealtimeLogConfigArn": {},
        "CachePolicyId": {},
        "OriginRequestPolicyId": {},
        "ResponseHeadersPolicyId": {},
        "ForwardedValues": {
          "QueryString": {},
          "Cookies": {
            "Forward": {},
            "WhitelistedNames": {
              "Quantity": {},
              "Items": {}
            }
          },
          "Headers": {
            "Quantity": {},
            "Items": {}
          },
          "QueryStringCacheKeys": {
            "Quantity": {},
            "Items": {}
          }
        },
        "MinTTL": {},
        "DefaultTTL": {},
        "MaxTTL": {}
      },
      "CacheBehaviors": {
        "Quantity": {},
        "Items": {}
      },
      "CustomErrorResponses": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "IncludeCookies": {},
        "Bucket": {},
        "Prefix": {}
      },
      "PriceClass": {},
      "Enabled": {},
      "ViewerCertificate": {
        "CloudFrontDefaultCertificate": {},
        "IAMCertificateId": {},
        "ACMCertificateArn": {},
        "SSLSupportMethod": {},
        "MinimumProtocolVersion": {},
        "Certificate": {},
        "CertificateSource": {}
      },
      "Restrictions": {
        "GeoRestriction": {
          "RestrictionType": {},
          "Quantity": {},
          "Items": {}
        }
      },
      "WebACLId": {},
      "HttpVersion": {},
      "IsIPV6Enabled": {},
      "ContinuousDeploymentPolicyId": {},
      "Staging": {}
    },
    "Tags": {
      "Items": {}
    }
  }
}
```

The request to create a new distribution with tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionConfigWithTags|object|true|none|none|

<h2 id="tocS_FieldLevelEncryptionConfig">FieldLevelEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionconfig"></a>
<a id="schema_FieldLevelEncryptionConfig"></a>
<a id="tocSfieldlevelencryptionconfig"></a>
<a id="tocsfieldlevelencryptionconfig"></a>

```json
{
  "CallerReference": {},
  "Comment": {},
  "QueryArgProfileConfig": {
    "ForwardWhenQueryArgProfileIsUnknown": {},
    "QueryArgProfiles": {
      "Quantity": {},
      "Items": {}
    }
  },
  "ContentTypeProfileConfig": {
    "ForwardWhenContentTypeIsUnknown": {},
    "ContentTypeProfiles": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

A complex data type that includes the profile configurations specified for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|Comment|object|false|none|none|
|QueryArgProfileConfig|object|false|none|none|
|ContentTypeProfileConfig|object|false|none|none|

<h2 id="tocS_CreateFieldLevelEncryptionConfigRequest">CreateFieldLevelEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefieldlevelencryptionconfigrequest"></a>
<a id="schema_CreateFieldLevelEncryptionConfigRequest"></a>
<a id="tocScreatefieldlevelencryptionconfigrequest"></a>
<a id="tocscreatefieldlevelencryptionconfigrequest"></a>

```json
{
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionConfig|object|true|none|none|

<h2 id="tocS_FieldLevelEncryption">FieldLevelEncryption</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryption"></a>
<a id="schema_FieldLevelEncryption"></a>
<a id="tocSfieldlevelencryption"></a>
<a id="tocsfieldlevelencryption"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

A complex data type that includes the profile configurations and other options specified for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|FieldLevelEncryptionConfig|object|true|none|none|

<h2 id="tocS_FieldLevelEncryptionProfileConfig">FieldLevelEncryptionProfileConfig</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofileconfig"></a>
<a id="schema_FieldLevelEncryptionProfileConfig"></a>
<a id="tocSfieldlevelencryptionprofileconfig"></a>
<a id="tocsfieldlevelencryptionprofileconfig"></a>

```json
{
  "Name": {},
  "CallerReference": {},
  "Comment": {},
  "EncryptionEntities": {
    "Quantity": {},
    "Items": {}
  }
}
```

A complex data type of profiles for the field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|CallerReference|object|true|none|none|
|Comment|object|false|none|none|
|EncryptionEntities|object|true|none|none|

<h2 id="tocS_CreateFieldLevelEncryptionProfileRequest">CreateFieldLevelEncryptionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefieldlevelencryptionprofilerequest"></a>
<a id="schema_CreateFieldLevelEncryptionProfileRequest"></a>
<a id="tocScreatefieldlevelencryptionprofilerequest"></a>
<a id="tocscreatefieldlevelencryptionprofilerequest"></a>

```json
{
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfileConfig|object|true|none|none|

<h2 id="tocS_FieldLevelEncryptionProfile">FieldLevelEncryptionProfile</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofile"></a>
<a id="schema_FieldLevelEncryptionProfile"></a>
<a id="tocSfieldlevelencryptionprofile"></a>
<a id="tocsfieldlevelencryptionprofile"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

A complex data type for field-level encryption profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|FieldLevelEncryptionProfileConfig|object|true|none|none|

<h2 id="tocS_FunctionName">FunctionName</h2>
<!-- backwards compatibility -->
<a id="schemafunctionname"></a>
<a id="schema_FunctionName"></a>
<a id="tocSfunctionname"></a>
<a id="tocsfunctionname"></a>

```json
"string"
```

<h2 id="tocS_FunctionConfig">FunctionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfig"></a>
<a id="schema_FunctionConfig"></a>
<a id="tocSfunctionconfig"></a>
<a id="tocsfunctionconfig"></a>

```json
{
  "Comment": {},
  "Runtime": {}
}
```

Contains configuration information about a CloudFront function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|true|none|none|
|Runtime|object|true|none|none|

<h2 id="tocS_FunctionBlob">FunctionBlob</h2>
<!-- backwards compatibility -->
<a id="schemafunctionblob"></a>
<a id="schema_FunctionBlob"></a>
<a id="tocSfunctionblob"></a>
<a id="tocsfunctionblob"></a>

```json
"password"
```

<h2 id="tocS_CreateFunctionRequest">CreateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefunctionrequest"></a>
<a id="schema_CreateFunctionRequest"></a>
<a id="tocScreatefunctionrequest"></a>
<a id="tocscreatefunctionrequest"></a>

```json
{
  "Name": {},
  "FunctionConfig": {
    "Comment": {},
    "Runtime": {}
  },
  "FunctionCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|FunctionConfig|object|true|none|none|
|FunctionCode|object|true|none|none|

<h2 id="tocS_FunctionSummary">FunctionSummary</h2>
<!-- backwards compatibility -->
<a id="schemafunctionsummary"></a>
<a id="schema_FunctionSummary"></a>
<a id="tocSfunctionsummary"></a>
<a id="tocsfunctionsummary"></a>

```json
{
  "Name": {},
  "Status": {},
  "FunctionConfig": {
    "Comment": {},
    "Runtime": {}
  },
  "FunctionMetadata": {
    "FunctionARN": {},
    "Stage": {},
    "CreatedTime": {},
    "LastModifiedTime": {}
  }
}
```

Contains configuration information and metadata about a CloudFront function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Status|object|false|none|none|
|FunctionConfig|object|true|none|none|
|FunctionMetadata|object|true|none|none|

<h2 id="tocS_InvalidationBatch">InvalidationBatch</h2>
<!-- backwards compatibility -->
<a id="schemainvalidationbatch"></a>
<a id="schema_InvalidationBatch"></a>
<a id="tocSinvalidationbatch"></a>
<a id="tocsinvalidationbatch"></a>

```json
{
  "Paths": {
    "Quantity": {},
    "Items": {}
  },
  "CallerReference": {}
}
```

An invalidation batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Paths|object|true|none|none|
|CallerReference|object|true|none|none|

<h2 id="tocS_CreateInvalidationRequest">CreateInvalidationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinvalidationrequest"></a>
<a id="schema_CreateInvalidationRequest"></a>
<a id="tocScreateinvalidationrequest"></a>
<a id="tocscreateinvalidationrequest"></a>

```json
{
  "InvalidationBatch": {
    "Paths": {
      "Quantity": {},
      "Items": {}
    },
    "CallerReference": {}
  }
}
```

The request to create an invalidation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InvalidationBatch|object|true|none|none|

<h2 id="tocS_Invalidation">Invalidation</h2>
<!-- backwards compatibility -->
<a id="schemainvalidation"></a>
<a id="schema_Invalidation"></a>
<a id="tocSinvalidation"></a>
<a id="tocsinvalidation"></a>

```json
{
  "Id": {},
  "Status": {},
  "CreateTime": {},
  "InvalidationBatch": {
    "Paths": {
      "Quantity": {},
      "Items": {}
    },
    "CallerReference": {}
  }
}
```

An invalidation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Status|object|true|none|none|
|CreateTime|object|true|none|none|
|InvalidationBatch|object|true|none|none|

<h2 id="tocS_KeyGroupConfig">KeyGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemakeygroupconfig"></a>
<a id="schema_KeyGroupConfig"></a>
<a id="tocSkeygroupconfig"></a>
<a id="tocskeygroupconfig"></a>

```json
{
  "Name": {},
  "Items": {},
  "Comment": {}
}
```

<p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Items|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_CreateKeyGroupRequest">CreateKeyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeygrouprequest"></a>
<a id="schema_CreateKeyGroupRequest"></a>
<a id="tocScreatekeygrouprequest"></a>
<a id="tocscreatekeygrouprequest"></a>

```json
{
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroupConfig|object|true|none|none|

<h2 id="tocS_KeyGroup">KeyGroup</h2>
<!-- backwards compatibility -->
<a id="schemakeygroup"></a>
<a id="schema_KeyGroup"></a>
<a id="tocSkeygroup"></a>
<a id="tocskeygroup"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

<p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|KeyGroupConfig|object|true|none|none|

<h2 id="tocS_MonitoringSubscription">MonitoringSubscription</h2>
<!-- backwards compatibility -->
<a id="schemamonitoringsubscription"></a>
<a id="schema_MonitoringSubscription"></a>
<a id="tocSmonitoringsubscription"></a>
<a id="tocsmonitoringsubscription"></a>

```json
{
  "RealtimeMetricsSubscriptionConfig": {
    "RealtimeMetricsSubscriptionStatus": {}
  }
}
```

A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RealtimeMetricsSubscriptionConfig|object|false|none|none|

<h2 id="tocS_CreateMonitoringSubscriptionRequest">CreateMonitoringSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemonitoringsubscriptionrequest"></a>
<a id="schema_CreateMonitoringSubscriptionRequest"></a>
<a id="tocScreatemonitoringsubscriptionrequest"></a>
<a id="tocscreatemonitoringsubscriptionrequest"></a>

```json
{
  "MonitoringSubscription": {
    "RealtimeMetricsSubscriptionConfig": {
      "RealtimeMetricsSubscriptionStatus": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonitoringSubscription|object|true|none|none|

<h2 id="tocS_OriginAccessControlConfig">OriginAccessControlConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolconfig"></a>
<a id="schema_OriginAccessControlConfig"></a>
<a id="tocSoriginaccesscontrolconfig"></a>
<a id="tocsoriginaccesscontrolconfig"></a>

```json
{
  "Name": {},
  "Description": {},
  "SigningProtocol": {},
  "SigningBehavior": {},
  "OriginAccessControlOriginType": {}
}
```

A CloudFront origin access control configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|SigningProtocol|object|true|none|none|
|SigningBehavior|object|true|none|none|
|OriginAccessControlOriginType|object|true|none|none|

<h2 id="tocS_CreateOriginAccessControlRequest">CreateOriginAccessControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginaccesscontrolrequest"></a>
<a id="schema_CreateOriginAccessControlRequest"></a>
<a id="tocScreateoriginaccesscontrolrequest"></a>
<a id="tocscreateoriginaccesscontrolrequest"></a>

```json
{
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControlConfig|object|true|none|none|

<h2 id="tocS_OriginAccessControl">OriginAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrol"></a>
<a id="schema_OriginAccessControl"></a>
<a id="tocSoriginaccesscontrol"></a>
<a id="tocsoriginaccesscontrol"></a>

```json
{
  "Id": {},
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

A CloudFront origin access control, including its unique identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|OriginAccessControlConfig|object|false|none|none|

<h2 id="tocS_OriginRequestPolicyConfig">OriginRequestPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyconfig"></a>
<a id="schema_OriginRequestPolicyConfig"></a>
<a id="tocSoriginrequestpolicyconfig"></a>
<a id="tocsoriginrequestpolicyconfig"></a>

```json
{
  "Comment": {},
  "Name": {},
  "HeadersConfig": {
    "HeaderBehavior": {},
    "Headers": {
      "Quantity": {},
      "Items": {}
    }
  },
  "CookiesConfig": {
    "CookieBehavior": {},
    "Cookies": {
      "Quantity": {},
      "Items": {}
    }
  },
  "QueryStringsConfig": {
    "QueryStringBehavior": {},
    "QueryStrings": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Name|object|true|none|none|
|HeadersConfig|object|true|none|none|
|CookiesConfig|object|true|none|none|
|QueryStringsConfig|object|true|none|none|

<h2 id="tocS_CreateOriginRequestPolicyRequest">CreateOriginRequestPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginrequestpolicyrequest"></a>
<a id="schema_CreateOriginRequestPolicyRequest"></a>
<a id="tocScreateoriginrequestpolicyrequest"></a>
<a id="tocscreateoriginrequestpolicyrequest"></a>

```json
{
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicyConfig|object|true|none|none|

<h2 id="tocS_OriginRequestPolicy">OriginRequestPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicy"></a>
<a id="schema_OriginRequestPolicy"></a>
<a id="tocSoriginrequestpolicy"></a>
<a id="tocsoriginrequestpolicy"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

<p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|OriginRequestPolicyConfig|object|true|none|none|

<h2 id="tocS_PublicKeyConfig">PublicKeyConfig</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyconfig"></a>
<a id="schema_PublicKeyConfig"></a>
<a id="tocSpublickeyconfig"></a>
<a id="tocspublickeyconfig"></a>

```json
{
  "CallerReference": {},
  "Name": {},
  "EncodedKey": {},
  "Comment": {}
}
```

Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CallerReference|object|true|none|none|
|Name|object|true|none|none|
|EncodedKey|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_CreatePublicKeyRequest">CreatePublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepublickeyrequest"></a>
<a id="schema_CreatePublicKeyRequest"></a>
<a id="tocScreatepublickeyrequest"></a>
<a id="tocscreatepublickeyrequest"></a>

```json
{
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyConfig|object|true|none|none|

<h2 id="tocS_PublicKey">PublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapublickey"></a>
<a id="schema_PublicKey"></a>
<a id="tocSpublickey"></a>
<a id="tocspublickey"></a>

```json
{
  "Id": {},
  "CreatedTime": {},
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|CreatedTime|object|true|none|none|
|PublicKeyConfig|object|true|none|none|

<h2 id="tocS_EndPointList">EndPointList</h2>
<!-- backwards compatibility -->
<a id="schemaendpointlist"></a>
<a id="schema_EndPointList"></a>
<a id="tocSendpointlist"></a>
<a id="tocsendpointlist"></a>

```json
[
  {
    "StreamType": {},
    "KinesisStreamConfig": {
      "RoleARN": {},
      "StreamARN": {}
    }
  }
]
```

<h2 id="tocS_FieldList">FieldList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlist"></a>
<a id="schema_FieldList"></a>
<a id="tocSfieldlist"></a>
<a id="tocsfieldlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_CreateRealtimeLogConfigRequest">CreateRealtimeLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterealtimelogconfigrequest"></a>
<a id="schema_CreateRealtimeLogConfigRequest"></a>
<a id="tocScreaterealtimelogconfigrequest"></a>
<a id="tocscreaterealtimelogconfigrequest"></a>

```json
{
  "EndPoints": {},
  "Fields": {},
  "Name": {},
  "SamplingRate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndPoints|object|true|none|none|
|Fields|object|true|none|none|
|Name|object|true|none|none|
|SamplingRate|object|true|none|none|

<h2 id="tocS_RealtimeLogConfig">RealtimeLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfig"></a>
<a id="schema_RealtimeLogConfig"></a>
<a id="tocSrealtimelogconfig"></a>
<a id="tocsrealtimelogconfig"></a>

```json
{
  "ARN": {},
  "Name": {},
  "SamplingRate": {},
  "EndPoints": {},
  "Fields": {}
}
```

A real-time log configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|Name|object|true|none|none|
|SamplingRate|object|true|none|none|
|EndPoints|object|true|none|none|
|Fields|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyConfig">ResponseHeadersPolicyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyconfig"></a>
<a id="schema_ResponseHeadersPolicyConfig"></a>
<a id="tocSresponseheaderspolicyconfig"></a>
<a id="tocsresponseheaderspolicyconfig"></a>

```json
{
  "Comment": {},
  "Name": {},
  "CorsConfig": {
    "AccessControlAllowOrigins": {
      "Quantity": {},
      "Items": {}
    },
    "AccessControlAllowHeaders": {
      "Quantity": {},
      "Items": {}
    },
    "AccessControlAllowMethods": {
      "Quantity": {},
      "Items": {}
    },
    "AccessControlAllowCredentials": {},
    "AccessControlExposeHeaders": {
      "Quantity": {},
      "Items": {}
    },
    "AccessControlMaxAgeSec": {},
    "OriginOverride": {}
  },
  "SecurityHeadersConfig": {
    "XSSProtection": {
      "Override": {},
      "Protection": {},
      "ModeBlock": {},
      "ReportUri": {}
    },
    "FrameOptions": {
      "Override": {},
      "FrameOption": {}
    },
    "ReferrerPolicy": {
      "Override": {},
      "ReferrerPolicy": {}
    },
    "ContentSecurityPolicy": {
      "Override": {},
      "ContentSecurityPolicy": {}
    },
    "ContentTypeOptions": {
      "Override": {}
    },
    "StrictTransportSecurity": {
      "Override": {},
      "IncludeSubdomains": {},
      "Preload": {},
      "AccessControlMaxAgeSec": {}
    }
  },
  "ServerTimingHeadersConfig": {
    "Enabled": {},
    "SamplingRate": {}
  },
  "CustomHeadersConfig": {
    "Quantity": {},
    "Items": {}
  },
  "RemoveHeadersConfig": {
    "Quantity": {},
    "Items": {}
  }
}
```

<p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Comment|object|false|none|none|
|Name|object|true|none|none|
|CorsConfig|object|false|none|none|
|SecurityHeadersConfig|object|false|none|none|
|ServerTimingHeadersConfig|object|false|none|none|
|CustomHeadersConfig|object|false|none|none|
|RemoveHeadersConfig|object|false|none|none|

<h2 id="tocS_CreateResponseHeadersPolicyRequest">CreateResponseHeadersPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateresponseheaderspolicyrequest"></a>
<a id="schema_CreateResponseHeadersPolicyRequest"></a>
<a id="tocScreateresponseheaderspolicyrequest"></a>
<a id="tocscreateresponseheaderspolicyrequest"></a>

```json
{
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicyConfig|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicy">ResponseHeadersPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicy"></a>
<a id="schema_ResponseHeadersPolicy"></a>
<a id="tocSresponseheaderspolicy"></a>
<a id="tocsresponseheaderspolicy"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

<p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|ResponseHeadersPolicyConfig|object|true|none|none|

<h2 id="tocS_CreateStreamingDistributionRequest">CreateStreamingDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingdistributionrequest"></a>
<a id="schema_CreateStreamingDistributionRequest"></a>
<a id="tocScreatestreamingdistributionrequest"></a>
<a id="tocscreatestreamingdistributionrequest"></a>

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

The request to create a new streaming distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionConfig|object|true|none|none|

<h2 id="tocS_StreamingDistribution">StreamingDistribution</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistribution"></a>
<a id="schema_StreamingDistribution"></a>
<a id="tocSstreamingdistribution"></a>
<a id="tocsstreamingdistribution"></a>

```json
{
  "Id": {},
  "ARN": {},
  "Status": {},
  "LastModifiedTime": {},
  "DomainName": {},
  "ActiveTrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Status|object|true|none|none|
|LastModifiedTime|object|false|none|none|
|DomainName|object|true|none|none|
|ActiveTrustedSigners|object|true|none|none|
|StreamingDistributionConfig|object|true|none|none|

<h2 id="tocS_StreamingDistributionConfigWithTags">StreamingDistributionConfigWithTags</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionconfigwithtags"></a>
<a id="schema_StreamingDistributionConfigWithTags"></a>
<a id="tocSstreamingdistributionconfigwithtags"></a>
<a id="tocsstreamingdistributionconfigwithtags"></a>

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  },
  "Tags": {
    "Items": {}
  }
}
```

A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionConfig|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_CreateStreamingDistributionWithTagsRequest">CreateStreamingDistributionWithTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatestreamingdistributionwithtagsrequest"></a>
<a id="schema_CreateStreamingDistributionWithTagsRequest"></a>
<a id="tocScreatestreamingdistributionwithtagsrequest"></a>
<a id="tocscreatestreamingdistributionwithtagsrequest"></a>

```json
{
  "StreamingDistributionConfigWithTags": {
    "StreamingDistributionConfig": {
      "CallerReference": {},
      "S3Origin": {
        "DomainName": {},
        "OriginAccessIdentity": {}
      },
      "Aliases": {
        "Quantity": {},
        "Items": {}
      },
      "Comment": {},
      "Logging": {
        "Enabled": {},
        "Bucket": {},
        "Prefix": {}
      },
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "PriceClass": {},
      "Enabled": {}
    },
    "Tags": {
      "Items": {}
    }
  }
}
```

The request to create a new streaming distribution with tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionConfigWithTags|object|true|none|none|

<h2 id="tocS_CustomErrorResponse">CustomErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrorresponse"></a>
<a id="schema_CustomErrorResponse"></a>
<a id="tocScustomerrorresponse"></a>
<a id="tocscustomerrorresponse"></a>

```json
{
  "ErrorCode": {},
  "ResponsePagePath": {},
  "ResponseCode": {},
  "ErrorCachingMinTTL": {}
}
```

<p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|true|none|none|
|ResponsePagePath|object|false|none|none|
|ResponseCode|object|false|none|none|
|ErrorCachingMinTTL|object|false|none|none|

<h2 id="tocS_CustomErrorResponseList">CustomErrorResponseList</h2>
<!-- backwards compatibility -->
<a id="schemacustomerrorresponselist"></a>
<a id="schema_CustomErrorResponseList"></a>
<a id="tocScustomerrorresponselist"></a>
<a id="tocscustomerrorresponselist"></a>

```json
[
  {
    "ErrorCode": {},
    "ResponsePagePath": {},
    "ResponseCode": {},
    "ErrorCachingMinTTL": {}
  }
]
```

<h2 id="tocS_OriginCustomHeadersList">OriginCustomHeadersList</h2>
<!-- backwards compatibility -->
<a id="schemaorigincustomheaderslist"></a>
<a id="schema_OriginCustomHeadersList"></a>
<a id="tocSorigincustomheaderslist"></a>
<a id="tocsorigincustomheaderslist"></a>

```json
[
  {
    "HeaderName": {},
    "HeaderValue": {}
  }
]
```

<h2 id="tocS_CustomHeaders">CustomHeaders</h2>
<!-- backwards compatibility -->
<a id="schemacustomheaders"></a>
<a id="schema_CustomHeaders"></a>
<a id="tocScustomheaders"></a>
<a id="tocscustomheaders"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex type that contains the list of Custom Headers for each origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_OriginProtocolPolicy">OriginProtocolPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaoriginprotocolpolicy"></a>
<a id="schema_OriginProtocolPolicy"></a>
<a id="tocSoriginprotocolpolicy"></a>
<a id="tocsoriginprotocolpolicy"></a>

```json
"http-only"
```

<h2 id="tocS_OriginSslProtocols">OriginSslProtocols</h2>
<!-- backwards compatibility -->
<a id="schemaoriginsslprotocols"></a>
<a id="schema_OriginSslProtocols"></a>
<a id="tocSoriginsslprotocols"></a>
<a id="tocsoriginsslprotocols"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_CustomOriginConfig">CustomOriginConfig</h2>
<!-- backwards compatibility -->
<a id="schemacustomoriginconfig"></a>
<a id="schema_CustomOriginConfig"></a>
<a id="tocScustomoriginconfig"></a>
<a id="tocscustomoriginconfig"></a>

```json
{
  "HTTPPort": {},
  "HTTPSPort": {},
  "OriginProtocolPolicy": {},
  "OriginSslProtocols": {
    "Quantity": {},
    "Items": {}
  },
  "OriginReadTimeout": {},
  "OriginKeepaliveTimeout": {}
}
```

A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HTTPPort|object|true|none|none|
|HTTPSPort|object|true|none|none|
|OriginProtocolPolicy|object|true|none|none|
|OriginSslProtocols|object|false|none|none|
|OriginReadTimeout|object|false|none|none|
|OriginKeepaliveTimeout|object|false|none|none|

<h2 id="tocS_DeleteCachePolicyRequest">DeleteCachePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecachepolicyrequest"></a>
<a id="schema_DeleteCachePolicyRequest"></a>
<a id="tocSdeletecachepolicyrequest"></a>
<a id="tocsdeletecachepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteCloudFrontOriginAccessIdentityRequest">DeleteCloudFrontOriginAccessIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecloudfrontoriginaccessidentityrequest"></a>
<a id="schema_DeleteCloudFrontOriginAccessIdentityRequest"></a>
<a id="tocSdeletecloudfrontoriginaccessidentityrequest"></a>
<a id="tocsdeletecloudfrontoriginaccessidentityrequest"></a>

```json
{}
```

Deletes a origin access identity.

<h2 id="tocS_DeleteContinuousDeploymentPolicyRequest">DeleteContinuousDeploymentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontinuousdeploymentpolicyrequest"></a>
<a id="schema_DeleteContinuousDeploymentPolicyRequest"></a>
<a id="tocSdeletecontinuousdeploymentpolicyrequest"></a>
<a id="tocsdeletecontinuousdeploymentpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDistributionRequest">DeleteDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedistributionrequest"></a>
<a id="schema_DeleteDistributionRequest"></a>
<a id="tocSdeletedistributionrequest"></a>
<a id="tocsdeletedistributionrequest"></a>

```json
{}
```

<p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution</p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

<h2 id="tocS_DeleteFieldLevelEncryptionConfigRequest">DeleteFieldLevelEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefieldlevelencryptionconfigrequest"></a>
<a id="schema_DeleteFieldLevelEncryptionConfigRequest"></a>
<a id="tocSdeletefieldlevelencryptionconfigrequest"></a>
<a id="tocsdeletefieldlevelencryptionconfigrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFieldLevelEncryptionProfileRequest">DeleteFieldLevelEncryptionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefieldlevelencryptionprofilerequest"></a>
<a id="schema_DeleteFieldLevelEncryptionProfileRequest"></a>
<a id="tocSdeletefieldlevelencryptionprofilerequest"></a>
<a id="tocsdeletefieldlevelencryptionprofilerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteFunctionRequest">DeleteFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletefunctionrequest"></a>
<a id="schema_DeleteFunctionRequest"></a>
<a id="tocSdeletefunctionrequest"></a>
<a id="tocsdeletefunctionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteKeyGroupRequest">DeleteKeyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeygrouprequest"></a>
<a id="schema_DeleteKeyGroupRequest"></a>
<a id="tocSdeletekeygrouprequest"></a>
<a id="tocsdeletekeygrouprequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMonitoringSubscriptionRequest">DeleteMonitoringSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemonitoringsubscriptionrequest"></a>
<a id="schema_DeleteMonitoringSubscriptionRequest"></a>
<a id="tocSdeletemonitoringsubscriptionrequest"></a>
<a id="tocsdeletemonitoringsubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteOriginAccessControlRequest">DeleteOriginAccessControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoriginaccesscontrolrequest"></a>
<a id="schema_DeleteOriginAccessControlRequest"></a>
<a id="tocSdeleteoriginaccesscontrolrequest"></a>
<a id="tocsdeleteoriginaccesscontrolrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteOriginRequestPolicyRequest">DeleteOriginRequestPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoriginrequestpolicyrequest"></a>
<a id="schema_DeleteOriginRequestPolicyRequest"></a>
<a id="tocSdeleteoriginrequestpolicyrequest"></a>
<a id="tocsdeleteoriginrequestpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePublicKeyRequest">DeletePublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepublickeyrequest"></a>
<a id="schema_DeletePublicKeyRequest"></a>
<a id="tocSdeletepublickeyrequest"></a>
<a id="tocsdeletepublickeyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRealtimeLogConfigRequest">DeleteRealtimeLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterealtimelogconfigrequest"></a>
<a id="schema_DeleteRealtimeLogConfigRequest"></a>
<a id="tocSdeleterealtimelogconfigrequest"></a>
<a id="tocsdeleterealtimelogconfigrequest"></a>

```json
{
  "Name": {},
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_DeleteResponseHeadersPolicyRequest">DeleteResponseHeadersPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteresponseheaderspolicyrequest"></a>
<a id="schema_DeleteResponseHeadersPolicyRequest"></a>
<a id="tocSdeleteresponseheaderspolicyrequest"></a>
<a id="tocsdeleteresponseheaderspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStreamingDistributionRequest">DeleteStreamingDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestreamingdistributionrequest"></a>
<a id="schema_DeleteStreamingDistributionRequest"></a>
<a id="tocSdeletestreamingdistributionrequest"></a>
<a id="tocsdeletestreamingdistributionrequest"></a>

```json
{}
```

The request to delete a streaming distribution.

<h2 id="tocS_FunctionStage">FunctionStage</h2>
<!-- backwards compatibility -->
<a id="schemafunctionstage"></a>
<a id="schema_FunctionStage"></a>
<a id="tocSfunctionstage"></a>
<a id="tocsfunctionstage"></a>

```json
"DEVELOPMENT"
```

<h2 id="tocS_DescribeFunctionRequest">DescribeFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribefunctionrequest"></a>
<a id="schema_DescribeFunctionRequest"></a>
<a id="tocSdescribefunctionrequest"></a>
<a id="tocsdescribefunctionrequest"></a>

```json
{}
```

<h2 id="tocS_DistributionIdListSummary">DistributionIdListSummary</h2>
<!-- backwards compatibility -->
<a id="schemadistributionidlistsummary"></a>
<a id="schema_DistributionIdListSummary"></a>
<a id="tocSdistributionidlistsummary"></a>
<a id="tocsdistributionidlistsummary"></a>

```json
[
  {}
]
```

<h2 id="tocS_DistributionIdList">DistributionIdList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionidlist"></a>
<a id="schema_DistributionIdList"></a>
<a id="tocSdistributionidlist"></a>
<a id="tocsdistributionidlist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

A list of distribution IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_DistributionSummaryList">DistributionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionsummarylist"></a>
<a id="schema_DistributionSummaryList"></a>
<a id="tocSdistributionsummarylist"></a>
<a id="tocsdistributionsummarylist"></a>

```json
[
  {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "AliasICPRecordals": {},
    "Staging": {}
  }
]
```

<h2 id="tocS_DistributionList">DistributionList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionlist"></a>
<a id="schema_DistributionList"></a>
<a id="tocSdistributionlist"></a>
<a id="tocsdistributionlist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

A distribution list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_DistributionSummary">DistributionSummary</h2>
<!-- backwards compatibility -->
<a id="schemadistributionsummary"></a>
<a id="schema_DistributionSummary"></a>
<a id="tocSdistributionsummary"></a>
<a id="tocsdistributionsummary"></a>

```json
{
  "Id": {},
  "ARN": {},
  "Status": {},
  "LastModifiedTime": {},
  "DomainName": {},
  "Aliases": {
    "Quantity": {},
    "Items": {}
  },
  "Origins": {
    "Quantity": {},
    "Items": {}
  },
  "OriginGroups": {
    "Quantity": {},
    "Items": {}
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": {},
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "TrustedKeyGroups": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "ViewerProtocolPolicy": {},
    "AllowedMethods": {
      "Quantity": {},
      "Items": {},
      "CachedMethods": {
        "Quantity": {},
        "Items": {}
      }
    },
    "SmoothStreaming": {},
    "Compress": {},
    "LambdaFunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FunctionAssociations": {
      "Quantity": {},
      "Items": {}
    },
    "FieldLevelEncryptionId": {},
    "RealtimeLogConfigArn": {},
    "CachePolicyId": {},
    "OriginRequestPolicyId": {},
    "ResponseHeadersPolicyId": {},
    "ForwardedValues": {
      "QueryString": {},
      "Cookies": {
        "Forward": {},
        "WhitelistedNames": {
          "Quantity": {},
          "Items": {}
        }
      },
      "Headers": {
        "Quantity": {},
        "Items": {}
      },
      "QueryStringCacheKeys": {
        "Quantity": {},
        "Items": {}
      }
    },
    "MinTTL": {},
    "DefaultTTL": {},
    "MaxTTL": {}
  },
  "CacheBehaviors": {
    "Quantity": {},
    "Items": {}
  },
  "CustomErrorResponses": {
    "Quantity": {},
    "Items": {}
  },
  "Comment": {},
  "PriceClass": {},
  "Enabled": {},
  "ViewerCertificate": {
    "CloudFrontDefaultCertificate": {},
    "IAMCertificateId": {},
    "ACMCertificateArn": {},
    "SSLSupportMethod": {},
    "MinimumProtocolVersion": {},
    "Certificate": {},
    "CertificateSource": {}
  },
  "Restrictions": {
    "GeoRestriction": {
      "RestrictionType": {},
      "Quantity": {},
      "Items": {}
    }
  },
  "WebACLId": {},
  "HttpVersion": {},
  "IsIPV6Enabled": {},
  "AliasICPRecordals": {},
  "Staging": {}
}
```

A summary of the information about a CloudFront distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Status|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|DomainName|object|true|none|none|
|Aliases|object|true|none|none|
|Origins|object|true|none|none|
|OriginGroups|object|false|none|none|
|DefaultCacheBehavior|object|true|none|none|
|CacheBehaviors|object|true|none|none|
|CustomErrorResponses|object|true|none|none|
|Comment|object|true|none|none|
|PriceClass|object|true|none|none|
|Enabled|object|true|none|none|
|ViewerCertificate|object|true|none|none|
|Restrictions|object|true|none|none|
|WebACLId|object|true|none|none|
|HttpVersion|object|true|none|none|
|IsIPV6Enabled|object|true|none|none|
|AliasICPRecordals|object|false|none|none|
|Staging|object|true|none|none|

<h2 id="tocS_EncryptionEntityList">EncryptionEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionentitylist"></a>
<a id="schema_EncryptionEntityList"></a>
<a id="tocSencryptionentitylist"></a>
<a id="tocsencryptionentitylist"></a>

```json
[
  {
    "PublicKeyId": {},
    "ProviderId": {},
    "FieldPatterns": {
      "Quantity": {},
      "Items": {}
    }
  }
]
```

<h2 id="tocS_FieldPatterns">FieldPatterns</h2>
<!-- backwards compatibility -->
<a id="schemafieldpatterns"></a>
<a id="schema_FieldPatterns"></a>
<a id="tocSfieldpatterns"></a>
<a id="tocsfieldpatterns"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex data type that includes the field patterns to match for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_EncryptionEntity">EncryptionEntity</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionentity"></a>
<a id="schema_EncryptionEntity"></a>
<a id="tocSencryptionentity"></a>
<a id="tocsencryptionentity"></a>

```json
{
  "PublicKeyId": {},
  "ProviderId": {},
  "FieldPatterns": {
    "Quantity": {},
    "Items": {}
  }
}
```

Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyId|object|true|none|none|
|ProviderId|object|true|none|none|
|FieldPatterns|object|true|none|none|

<h2 id="tocS_KinesisStreamConfig">KinesisStreamConfig</h2>
<!-- backwards compatibility -->
<a id="schemakinesisstreamconfig"></a>
<a id="schema_KinesisStreamConfig"></a>
<a id="tocSkinesisstreamconfig"></a>
<a id="tocskinesisstreamconfig"></a>

```json
{
  "RoleARN": {},
  "StreamARN": {}
}
```

Contains information about the Amazon Kinesis data stream where you are sending real-time log data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RoleARN|object|true|none|none|
|StreamARN|object|true|none|none|

<h2 id="tocS_EventType">EventType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtype"></a>
<a id="schema_EventType"></a>
<a id="tocSeventtype"></a>
<a id="tocseventtype"></a>

```json
"viewer-request"
```

<h2 id="tocS_FieldLevelEncryptionSummaryList">FieldLevelEncryptionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionsummarylist"></a>
<a id="schema_FieldLevelEncryptionSummaryList"></a>
<a id="tocSfieldlevelencryptionsummarylist"></a>
<a id="tocsfieldlevelencryptionsummarylist"></a>

```json
[
  {
    "Id": {},
    "LastModifiedTime": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
]
```

<h2 id="tocS_FieldLevelEncryptionList">FieldLevelEncryptionList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionlist"></a>
<a id="schema_FieldLevelEncryptionList"></a>
<a id="tocSfieldlevelencryptionlist"></a>
<a id="tocsfieldlevelencryptionlist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

List of field-level encrpytion configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_FieldLevelEncryptionProfileSummaryList">FieldLevelEncryptionProfileSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofilesummarylist"></a>
<a id="schema_FieldLevelEncryptionProfileSummaryList"></a>
<a id="tocSfieldlevelencryptionprofilesummarylist"></a>
<a id="tocsfieldlevelencryptionprofilesummarylist"></a>

```json
[
  {
    "Id": {},
    "LastModifiedTime": {},
    "Name": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {}
  }
]
```

<h2 id="tocS_FieldLevelEncryptionProfileList">FieldLevelEncryptionProfileList</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofilelist"></a>
<a id="schema_FieldLevelEncryptionProfileList"></a>
<a id="tocSfieldlevelencryptionprofilelist"></a>
<a id="tocsfieldlevelencryptionprofilelist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

List of field-level encryption profiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_FieldLevelEncryptionProfileSummary">FieldLevelEncryptionProfileSummary</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionprofilesummary"></a>
<a id="schema_FieldLevelEncryptionProfileSummary"></a>
<a id="tocSfieldlevelencryptionprofilesummary"></a>
<a id="tocsfieldlevelencryptionprofilesummary"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "Name": {},
  "EncryptionEntities": {
    "Quantity": {},
    "Items": {}
  },
  "Comment": {}
}
```

The field-level encryption profile summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|Name|object|true|none|none|
|EncryptionEntities|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_FieldLevelEncryptionSummary">FieldLevelEncryptionSummary</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelencryptionsummary"></a>
<a id="schema_FieldLevelEncryptionSummary"></a>
<a id="tocSfieldlevelencryptionsummary"></a>
<a id="tocsfieldlevelencryptionsummary"></a>

```json
{
  "Id": {},
  "LastModifiedTime": {},
  "Comment": {},
  "QueryArgProfileConfig": {
    "ForwardWhenQueryArgProfileIsUnknown": {},
    "QueryArgProfiles": {
      "Quantity": {},
      "Items": {}
    }
  },
  "ContentTypeProfileConfig": {
    "ForwardWhenContentTypeIsUnknown": {},
    "ContentTypeProfiles": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

A summary of a field-level encryption item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|Comment|object|false|none|none|
|QueryArgProfileConfig|object|false|none|none|
|ContentTypeProfileConfig|object|false|none|none|

<h2 id="tocS_FieldPatternList">FieldPatternList</h2>
<!-- backwards compatibility -->
<a id="schemafieldpatternlist"></a>
<a id="schema_FieldPatternList"></a>
<a id="tocSfieldpatternlist"></a>
<a id="tocsfieldpatternlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_QueryStringCacheKeys">QueryStringCacheKeys</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringcachekeys"></a>
<a id="schema_QueryStringCacheKeys"></a>
<a id="tocSquerystringcachekeys"></a>
<a id="tocsquerystringcachekeys"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_FrameOptionsList">FrameOptionsList</h2>
<!-- backwards compatibility -->
<a id="schemaframeoptionslist"></a>
<a id="schema_FrameOptionsList"></a>
<a id="tocSframeoptionslist"></a>
<a id="tocsframeoptionslist"></a>

```json
"DENY"
```

<h2 id="tocS_FunctionARN">FunctionARN</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarn"></a>
<a id="schema_FunctionARN"></a>
<a id="tocSfunctionarn"></a>
<a id="tocsfunctionarn"></a>

```json
"string"
```

<h2 id="tocS_FunctionAssociation">FunctionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemafunctionassociation"></a>
<a id="schema_FunctionAssociation"></a>
<a id="tocSfunctionassociation"></a>
<a id="tocsfunctionassociation"></a>

```json
{
  "FunctionARN": {},
  "EventType": {}
}
```

A CloudFront function that is associated with a cache behavior in a CloudFront distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionARN|object|true|none|none|
|EventType|object|true|none|none|

<h2 id="tocS_FunctionAssociationList">FunctionAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionassociationlist"></a>
<a id="schema_FunctionAssociationList"></a>
<a id="tocSfunctionassociationlist"></a>
<a id="tocsfunctionassociationlist"></a>

```json
[
  {
    "FunctionARN": {},
    "EventType": {}
  }
]
```

<h2 id="tocS_FunctionEventObject">FunctionEventObject</h2>
<!-- backwards compatibility -->
<a id="schemafunctioneventobject"></a>
<a id="schema_FunctionEventObject"></a>
<a id="tocSfunctioneventobject"></a>
<a id="tocsfunctioneventobject"></a>

```json
"password"
```

<h2 id="tocS_FunctionExecutionLogList">FunctionExecutionLogList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionexecutionloglist"></a>
<a id="schema_FunctionExecutionLogList"></a>
<a id="tocSfunctionexecutionloglist"></a>
<a id="tocsfunctionexecutionloglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_FunctionSummaryList">FunctionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionsummarylist"></a>
<a id="schema_FunctionSummaryList"></a>
<a id="tocSfunctionsummarylist"></a>
<a id="tocsfunctionsummarylist"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  }
]
```

<h2 id="tocS_FunctionList">FunctionList</h2>
<!-- backwards compatibility -->
<a id="schemafunctionlist"></a>
<a id="schema_FunctionList"></a>
<a id="tocSfunctionlist"></a>
<a id="tocsfunctionlist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of CloudFront functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_FunctionMetadata">FunctionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafunctionmetadata"></a>
<a id="schema_FunctionMetadata"></a>
<a id="tocSfunctionmetadata"></a>
<a id="tocsfunctionmetadata"></a>

```json
{
  "FunctionARN": {},
  "Stage": {},
  "CreatedTime": {},
  "LastModifiedTime": {}
}
```

Contains metadata about a CloudFront function.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionARN|object|true|none|none|
|Stage|object|false|none|none|
|CreatedTime|object|false|none|none|
|LastModifiedTime|object|true|none|none|

<h2 id="tocS_GeoRestrictionType">GeoRestrictionType</h2>
<!-- backwards compatibility -->
<a id="schemageorestrictiontype"></a>
<a id="schema_GeoRestrictionType"></a>
<a id="tocSgeorestrictiontype"></a>
<a id="tocsgeorestrictiontype"></a>

```json
"blacklist"
```

<h2 id="tocS_LocationList">LocationList</h2>
<!-- backwards compatibility -->
<a id="schemalocationlist"></a>
<a id="schema_LocationList"></a>
<a id="tocSlocationlist"></a>
<a id="tocslocationlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_GeoRestriction">GeoRestriction</h2>
<!-- backwards compatibility -->
<a id="schemageorestriction"></a>
<a id="schema_GeoRestriction"></a>
<a id="tocSgeorestriction"></a>
<a id="tocsgeorestriction"></a>

```json
{
  "RestrictionType": {},
  "Quantity": {},
  "Items": {}
}
```

A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RestrictionType|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_GetCachePolicyConfigRequest">GetCachePolicyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcachepolicyconfigrequest"></a>
<a id="schema_GetCachePolicyConfigRequest"></a>
<a id="tocSgetcachepolicyconfigrequest"></a>
<a id="tocsgetcachepolicyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetCachePolicyRequest">GetCachePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcachepolicyrequest"></a>
<a id="schema_GetCachePolicyRequest"></a>
<a id="tocSgetcachepolicyrequest"></a>
<a id="tocsgetcachepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetCloudFrontOriginAccessIdentityConfigRequest">GetCloudFrontOriginAccessIdentityConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudfrontoriginaccessidentityconfigrequest"></a>
<a id="schema_GetCloudFrontOriginAccessIdentityConfigRequest"></a>
<a id="tocSgetcloudfrontoriginaccessidentityconfigrequest"></a>
<a id="tocsgetcloudfrontoriginaccessidentityconfigrequest"></a>

```json
{}
```

The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.

<h2 id="tocS_GetCloudFrontOriginAccessIdentityRequest">GetCloudFrontOriginAccessIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcloudfrontoriginaccessidentityrequest"></a>
<a id="schema_GetCloudFrontOriginAccessIdentityRequest"></a>
<a id="tocSgetcloudfrontoriginaccessidentityrequest"></a>
<a id="tocsgetcloudfrontoriginaccessidentityrequest"></a>

```json
{}
```

The request to get an origin access identity's information.

<h2 id="tocS_GetContinuousDeploymentPolicyConfigRequest">GetContinuousDeploymentPolicyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontinuousdeploymentpolicyconfigrequest"></a>
<a id="schema_GetContinuousDeploymentPolicyConfigRequest"></a>
<a id="tocSgetcontinuousdeploymentpolicyconfigrequest"></a>
<a id="tocsgetcontinuousdeploymentpolicyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetContinuousDeploymentPolicyRequest">GetContinuousDeploymentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontinuousdeploymentpolicyrequest"></a>
<a id="schema_GetContinuousDeploymentPolicyRequest"></a>
<a id="tocSgetcontinuousdeploymentpolicyrequest"></a>
<a id="tocsgetcontinuousdeploymentpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetDistributionConfigRequest">GetDistributionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionconfigrequest"></a>
<a id="schema_GetDistributionConfigRequest"></a>
<a id="tocSgetdistributionconfigrequest"></a>
<a id="tocsgetdistributionconfigrequest"></a>

```json
{}
```

The request to get a distribution configuration.

<h2 id="tocS_GetDistributionRequest">GetDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionrequest"></a>
<a id="schema_GetDistributionRequest"></a>
<a id="tocSgetdistributionrequest"></a>
<a id="tocsgetdistributionrequest"></a>

```json
{}
```

The request to get a distribution's information.

<h2 id="tocS_GetFieldLevelEncryptionConfigRequest">GetFieldLevelEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionconfigrequest"></a>
<a id="schema_GetFieldLevelEncryptionConfigRequest"></a>
<a id="tocSgetfieldlevelencryptionconfigrequest"></a>
<a id="tocsgetfieldlevelencryptionconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetFieldLevelEncryptionProfileConfigRequest">GetFieldLevelEncryptionProfileConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionprofileconfigrequest"></a>
<a id="schema_GetFieldLevelEncryptionProfileConfigRequest"></a>
<a id="tocSgetfieldlevelencryptionprofileconfigrequest"></a>
<a id="tocsgetfieldlevelencryptionprofileconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetFieldLevelEncryptionProfileRequest">GetFieldLevelEncryptionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionprofilerequest"></a>
<a id="schema_GetFieldLevelEncryptionProfileRequest"></a>
<a id="tocSgetfieldlevelencryptionprofilerequest"></a>
<a id="tocsgetfieldlevelencryptionprofilerequest"></a>

```json
{}
```

<h2 id="tocS_GetFieldLevelEncryptionRequest">GetFieldLevelEncryptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfieldlevelencryptionrequest"></a>
<a id="schema_GetFieldLevelEncryptionRequest"></a>
<a id="tocSgetfieldlevelencryptionrequest"></a>
<a id="tocsgetfieldlevelencryptionrequest"></a>

```json
{}
```

<h2 id="tocS_GetFunctionRequest">GetFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetfunctionrequest"></a>
<a id="schema_GetFunctionRequest"></a>
<a id="tocSgetfunctionrequest"></a>
<a id="tocsgetfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_GetInvalidationRequest">GetInvalidationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinvalidationrequest"></a>
<a id="schema_GetInvalidationRequest"></a>
<a id="tocSgetinvalidationrequest"></a>
<a id="tocsgetinvalidationrequest"></a>

```json
{}
```

The request to get an invalidation's information.

<h2 id="tocS_GetKeyGroupConfigRequest">GetKeyGroupConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeygroupconfigrequest"></a>
<a id="schema_GetKeyGroupConfigRequest"></a>
<a id="tocSgetkeygroupconfigrequest"></a>
<a id="tocsgetkeygroupconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetKeyGroupRequest">GetKeyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetkeygrouprequest"></a>
<a id="schema_GetKeyGroupRequest"></a>
<a id="tocSgetkeygrouprequest"></a>
<a id="tocsgetkeygrouprequest"></a>

```json
{}
```

<h2 id="tocS_GetMonitoringSubscriptionRequest">GetMonitoringSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmonitoringsubscriptionrequest"></a>
<a id="schema_GetMonitoringSubscriptionRequest"></a>
<a id="tocSgetmonitoringsubscriptionrequest"></a>
<a id="tocsgetmonitoringsubscriptionrequest"></a>

```json
{}
```

<h2 id="tocS_GetOriginAccessControlConfigRequest">GetOriginAccessControlConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginaccesscontrolconfigrequest"></a>
<a id="schema_GetOriginAccessControlConfigRequest"></a>
<a id="tocSgetoriginaccesscontrolconfigrequest"></a>
<a id="tocsgetoriginaccesscontrolconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetOriginAccessControlRequest">GetOriginAccessControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginaccesscontrolrequest"></a>
<a id="schema_GetOriginAccessControlRequest"></a>
<a id="tocSgetoriginaccesscontrolrequest"></a>
<a id="tocsgetoriginaccesscontrolrequest"></a>

```json
{}
```

<h2 id="tocS_GetOriginRequestPolicyConfigRequest">GetOriginRequestPolicyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginrequestpolicyconfigrequest"></a>
<a id="schema_GetOriginRequestPolicyConfigRequest"></a>
<a id="tocSgetoriginrequestpolicyconfigrequest"></a>
<a id="tocsgetoriginrequestpolicyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetOriginRequestPolicyRequest">GetOriginRequestPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetoriginrequestpolicyrequest"></a>
<a id="schema_GetOriginRequestPolicyRequest"></a>
<a id="tocSgetoriginrequestpolicyrequest"></a>
<a id="tocsgetoriginrequestpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetPublicKeyConfigRequest">GetPublicKeyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyconfigrequest"></a>
<a id="schema_GetPublicKeyConfigRequest"></a>
<a id="tocSgetpublickeyconfigrequest"></a>
<a id="tocsgetpublickeyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetPublicKeyRequest">GetPublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpublickeyrequest"></a>
<a id="schema_GetPublicKeyRequest"></a>
<a id="tocSgetpublickeyrequest"></a>
<a id="tocsgetpublickeyrequest"></a>

```json
{}
```

<h2 id="tocS_GetRealtimeLogConfigRequest">GetRealtimeLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrealtimelogconfigrequest"></a>
<a id="schema_GetRealtimeLogConfigRequest"></a>
<a id="tocSgetrealtimelogconfigrequest"></a>
<a id="tocsgetrealtimelogconfigrequest"></a>

```json
{
  "Name": {},
  "ARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|ARN|object|false|none|none|

<h2 id="tocS_GetResponseHeadersPolicyConfigRequest">GetResponseHeadersPolicyConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseheaderspolicyconfigrequest"></a>
<a id="schema_GetResponseHeadersPolicyConfigRequest"></a>
<a id="tocSgetresponseheaderspolicyconfigrequest"></a>
<a id="tocsgetresponseheaderspolicyconfigrequest"></a>

```json
{}
```

<h2 id="tocS_GetResponseHeadersPolicyRequest">GetResponseHeadersPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetresponseheaderspolicyrequest"></a>
<a id="schema_GetResponseHeadersPolicyRequest"></a>
<a id="tocSgetresponseheaderspolicyrequest"></a>
<a id="tocsgetresponseheaderspolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetStreamingDistributionConfigRequest">GetStreamingDistributionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingdistributionconfigrequest"></a>
<a id="schema_GetStreamingDistributionConfigRequest"></a>
<a id="tocSgetstreamingdistributionconfigrequest"></a>
<a id="tocsgetstreamingdistributionconfigrequest"></a>

```json
{}
```

To request to get a streaming distribution configuration.

<h2 id="tocS_GetStreamingDistributionRequest">GetStreamingDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstreamingdistributionrequest"></a>
<a id="schema_GetStreamingDistributionRequest"></a>
<a id="tocSgetstreamingdistributionrequest"></a>
<a id="tocsgetstreamingdistributionrequest"></a>

```json
{}
```

The request to get a streaming distribution's information.

<h2 id="tocS_HeaderList">HeaderList</h2>
<!-- backwards compatibility -->
<a id="schemaheaderlist"></a>
<a id="schema_HeaderList"></a>
<a id="tocSheaderlist"></a>
<a id="tocsheaderlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_InvalidationSummaryList">InvalidationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainvalidationsummarylist"></a>
<a id="schema_InvalidationSummaryList"></a>
<a id="tocSinvalidationsummarylist"></a>
<a id="tocsinvalidationsummarylist"></a>

```json
[
  {
    "Id": {},
    "CreateTime": {},
    "Status": {}
  }
]
```

<h2 id="tocS_InvalidationList">InvalidationList</h2>
<!-- backwards compatibility -->
<a id="schemainvalidationlist"></a>
<a id="schema_InvalidationList"></a>
<a id="tocSinvalidationlist"></a>
<a id="tocsinvalidationlist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_InvalidationSummary">InvalidationSummary</h2>
<!-- backwards compatibility -->
<a id="schemainvalidationsummary"></a>
<a id="schema_InvalidationSummary"></a>
<a id="tocSinvalidationsummary"></a>
<a id="tocsinvalidationsummary"></a>

```json
{
  "Id": {},
  "CreateTime": {},
  "Status": {}
}
```

A summary of an invalidation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|CreateTime|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_KeyPairIds">KeyPairIds</h2>
<!-- backwards compatibility -->
<a id="schemakeypairids"></a>
<a id="schema_KeyPairIds"></a>
<a id="tocSkeypairids"></a>
<a id="tocskeypairids"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A list of CloudFront key pair identifiers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_KGKeyPairIds">KGKeyPairIds</h2>
<!-- backwards compatibility -->
<a id="schemakgkeypairids"></a>
<a id="schema_KGKeyPairIds"></a>
<a id="tocSkgkeypairids"></a>
<a id="tocskgkeypairids"></a>

```json
{
  "KeyGroupId": {},
  "KeyPairIds": {
    "Quantity": {},
    "Items": {}
  }
}
```

A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroupId|object|false|none|none|
|KeyPairIds|[KeyPairIds](#schemakeypairids)|false|none|A list of CloudFront key pair identifiers.|

<h2 id="tocS_KeyGroupSummaryList">KeyGroupSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemakeygroupsummarylist"></a>
<a id="schema_KeyGroupSummaryList"></a>
<a id="tocSkeygroupsummarylist"></a>
<a id="tocskeygroupsummarylist"></a>

```json
[
  {
    "KeyGroup": {
      "Id": {},
      "LastModifiedTime": {},
      "KeyGroupConfig": {
        "Name": {},
        "Items": {},
        "Comment": {}
      }
    }
  }
]
```

<h2 id="tocS_KeyGroupList">KeyGroupList</h2>
<!-- backwards compatibility -->
<a id="schemakeygrouplist"></a>
<a id="schema_KeyGroupList"></a>
<a id="tocSkeygrouplist"></a>
<a id="tocskeygrouplist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of key groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_KeyGroupSummary">KeyGroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemakeygroupsummary"></a>
<a id="schema_KeyGroupSummary"></a>
<a id="tocSkeygroupsummary"></a>
<a id="tocskeygroupsummary"></a>

```json
{
  "KeyGroup": {
    "Id": {},
    "LastModifiedTime": {},
    "KeyGroupConfig": {
      "Name": {},
      "Items": {},
      "Comment": {}
    }
  }
}
```

Contains information about a key group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroup|object|true|none|none|

<h2 id="tocS_KeyPairIdList">KeyPairIdList</h2>
<!-- backwards compatibility -->
<a id="schemakeypairidlist"></a>
<a id="schema_KeyPairIdList"></a>
<a id="tocSkeypairidlist"></a>
<a id="tocskeypairidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_LambdaFunctionARN">LambdaFunctionARN</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionarn"></a>
<a id="schema_LambdaFunctionARN"></a>
<a id="tocSlambdafunctionarn"></a>
<a id="tocslambdafunctionarn"></a>

```json
"string"
```

<h2 id="tocS_LambdaFunctionAssociation">LambdaFunctionAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionassociation"></a>
<a id="schema_LambdaFunctionAssociation"></a>
<a id="tocSlambdafunctionassociation"></a>
<a id="tocslambdafunctionassociation"></a>

```json
{
  "LambdaFunctionARN": {},
  "EventType": {},
  "IncludeBody": {}
}
```

A complex type that contains a Lambda@Edge function association.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaFunctionARN|object|true|none|none|
|EventType|object|true|none|none|
|IncludeBody|object|false|none|none|

<h2 id="tocS_LambdaFunctionAssociationList">LambdaFunctionAssociationList</h2>
<!-- backwards compatibility -->
<a id="schemalambdafunctionassociationlist"></a>
<a id="schema_LambdaFunctionAssociationList"></a>
<a id="tocSlambdafunctionassociationlist"></a>
<a id="tocslambdafunctionassociationlist"></a>

```json
[
  {
    "LambdaFunctionARN": {},
    "EventType": {},
    "IncludeBody": {}
  }
]
```

<h2 id="tocS_ListCachePoliciesRequest">ListCachePoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcachepoliciesrequest"></a>
<a id="schema_ListCachePoliciesRequest"></a>
<a id="tocSlistcachepoliciesrequest"></a>
<a id="tocslistcachepoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_ListCloudFrontOriginAccessIdentitiesRequest">ListCloudFrontOriginAccessIdentitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcloudfrontoriginaccessidentitiesrequest"></a>
<a id="schema_ListCloudFrontOriginAccessIdentitiesRequest"></a>
<a id="tocSlistcloudfrontoriginaccessidentitiesrequest"></a>
<a id="tocslistcloudfrontoriginaccessidentitiesrequest"></a>

```json
{}
```

The request to list origin access identities.

<h2 id="tocS_distributionIdString">distributionIdString</h2>
<!-- backwards compatibility -->
<a id="schemadistributionidstring"></a>
<a id="schema_distributionIdString"></a>
<a id="tocSdistributionidstring"></a>
<a id="tocsdistributionidstring"></a>

```json
"string"
```

<h2 id="tocS_aliasString">aliasString</h2>
<!-- backwards compatibility -->
<a id="schemaaliasstring"></a>
<a id="schema_aliasString"></a>
<a id="tocSaliasstring"></a>
<a id="tocsaliasstring"></a>

```json
"string"
```

<h2 id="tocS_listConflictingAliasesMaxItemsInteger">listConflictingAliasesMaxItemsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistconflictingaliasesmaxitemsinteger"></a>
<a id="schema_listConflictingAliasesMaxItemsInteger"></a>
<a id="tocSlistconflictingaliasesmaxitemsinteger"></a>
<a id="tocslistconflictingaliasesmaxitemsinteger"></a>

```json
0
```

<h2 id="tocS_ListConflictingAliasesRequest">ListConflictingAliasesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconflictingaliasesrequest"></a>
<a id="schema_ListConflictingAliasesRequest"></a>
<a id="tocSlistconflictingaliasesrequest"></a>
<a id="tocslistconflictingaliasesrequest"></a>

```json
{}
```

<h2 id="tocS_ListContinuousDeploymentPoliciesRequest">ListContinuousDeploymentPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontinuousdeploymentpoliciesrequest"></a>
<a id="schema_ListContinuousDeploymentPoliciesRequest"></a>
<a id="tocSlistcontinuousdeploymentpoliciesrequest"></a>
<a id="tocslistcontinuousdeploymentpoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_ListDistributionsByCachePolicyIdRequest">ListDistributionsByCachePolicyIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbycachepolicyidrequest"></a>
<a id="schema_ListDistributionsByCachePolicyIdRequest"></a>
<a id="tocSlistdistributionsbycachepolicyidrequest"></a>
<a id="tocslistdistributionsbycachepolicyidrequest"></a>

```json
{}
```

<h2 id="tocS_ListDistributionsByKeyGroupRequest">ListDistributionsByKeyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbykeygrouprequest"></a>
<a id="schema_ListDistributionsByKeyGroupRequest"></a>
<a id="tocSlistdistributionsbykeygrouprequest"></a>
<a id="tocslistdistributionsbykeygrouprequest"></a>

```json
{}
```

<h2 id="tocS_ListDistributionsByOriginRequestPolicyIdRequest">ListDistributionsByOriginRequestPolicyIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyoriginrequestpolicyidrequest"></a>
<a id="schema_ListDistributionsByOriginRequestPolicyIdRequest"></a>
<a id="tocSlistdistributionsbyoriginrequestpolicyidrequest"></a>
<a id="tocslistdistributionsbyoriginrequestpolicyidrequest"></a>

```json
{}
```

<h2 id="tocS_ListDistributionsByRealtimeLogConfigRequest">ListDistributionsByRealtimeLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyrealtimelogconfigrequest"></a>
<a id="schema_ListDistributionsByRealtimeLogConfigRequest"></a>
<a id="tocSlistdistributionsbyrealtimelogconfigrequest"></a>
<a id="tocslistdistributionsbyrealtimelogconfigrequest"></a>

```json
{
  "Marker": {},
  "MaxItems": {},
  "RealtimeLogConfigName": {},
  "RealtimeLogConfigArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|false|none|none|
|MaxItems|object|false|none|none|
|RealtimeLogConfigName|object|false|none|none|
|RealtimeLogConfigArn|object|false|none|none|

<h2 id="tocS_ListDistributionsByResponseHeadersPolicyIdRequest">ListDistributionsByResponseHeadersPolicyIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbyresponseheaderspolicyidrequest"></a>
<a id="schema_ListDistributionsByResponseHeadersPolicyIdRequest"></a>
<a id="tocSlistdistributionsbyresponseheaderspolicyidrequest"></a>
<a id="tocslistdistributionsbyresponseheaderspolicyidrequest"></a>

```json
{}
```

<h2 id="tocS_ListDistributionsByWebACLIdRequest">ListDistributionsByWebACLIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsbywebaclidrequest"></a>
<a id="schema_ListDistributionsByWebACLIdRequest"></a>
<a id="tocSlistdistributionsbywebaclidrequest"></a>
<a id="tocslistdistributionsbywebaclidrequest"></a>

```json
{}
```

The request to list distributions that are associated with a specified WAF web ACL.

<h2 id="tocS_ListDistributionsRequest">ListDistributionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionsrequest"></a>
<a id="schema_ListDistributionsRequest"></a>
<a id="tocSlistdistributionsrequest"></a>
<a id="tocslistdistributionsrequest"></a>

```json
{}
```

The request to list your distributions.

<h2 id="tocS_ListFieldLevelEncryptionConfigsRequest">ListFieldLevelEncryptionConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfieldlevelencryptionconfigsrequest"></a>
<a id="schema_ListFieldLevelEncryptionConfigsRequest"></a>
<a id="tocSlistfieldlevelencryptionconfigsrequest"></a>
<a id="tocslistfieldlevelencryptionconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_ListFieldLevelEncryptionProfilesRequest">ListFieldLevelEncryptionProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfieldlevelencryptionprofilesrequest"></a>
<a id="schema_ListFieldLevelEncryptionProfilesRequest"></a>
<a id="tocSlistfieldlevelencryptionprofilesrequest"></a>
<a id="tocslistfieldlevelencryptionprofilesrequest"></a>

```json
{}
```

<h2 id="tocS_ListFunctionsRequest">ListFunctionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfunctionsrequest"></a>
<a id="schema_ListFunctionsRequest"></a>
<a id="tocSlistfunctionsrequest"></a>
<a id="tocslistfunctionsrequest"></a>

```json
{}
```

<h2 id="tocS_ListInvalidationsRequest">ListInvalidationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinvalidationsrequest"></a>
<a id="schema_ListInvalidationsRequest"></a>
<a id="tocSlistinvalidationsrequest"></a>
<a id="tocslistinvalidationsrequest"></a>

```json
{}
```

The request to list invalidations.

<h2 id="tocS_ListKeyGroupsRequest">ListKeyGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeygroupsrequest"></a>
<a id="schema_ListKeyGroupsRequest"></a>
<a id="tocSlistkeygroupsrequest"></a>
<a id="tocslistkeygroupsrequest"></a>

```json
{}
```

<h2 id="tocS_ListOriginAccessControlsRequest">ListOriginAccessControlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginaccesscontrolsrequest"></a>
<a id="schema_ListOriginAccessControlsRequest"></a>
<a id="tocSlistoriginaccesscontrolsrequest"></a>
<a id="tocslistoriginaccesscontrolsrequest"></a>

```json
{}
```

<h2 id="tocS_OriginAccessControlList">OriginAccessControlList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrollist"></a>
<a id="schema_OriginAccessControlList"></a>
<a id="tocSoriginaccesscontrollist"></a>
<a id="tocsoriginaccesscontrollist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

A list of CloudFront origin access controls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_OriginRequestPolicyType">OriginRequestPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicytype"></a>
<a id="schema_OriginRequestPolicyType"></a>
<a id="tocSoriginrequestpolicytype"></a>
<a id="tocsoriginrequestpolicytype"></a>

```json
"managed"
```

<h2 id="tocS_ListOriginRequestPoliciesRequest">ListOriginRequestPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginrequestpoliciesrequest"></a>
<a id="schema_ListOriginRequestPoliciesRequest"></a>
<a id="tocSlistoriginrequestpoliciesrequest"></a>
<a id="tocslistoriginrequestpoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_OriginRequestPolicyList">OriginRequestPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicylist"></a>
<a id="schema_OriginRequestPolicyList"></a>
<a id="tocSoriginrequestpolicylist"></a>
<a id="tocsoriginrequestpolicylist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of origin request policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ListPublicKeysRequest">ListPublicKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpublickeysrequest"></a>
<a id="schema_ListPublicKeysRequest"></a>
<a id="tocSlistpublickeysrequest"></a>
<a id="tocslistpublickeysrequest"></a>

```json
{}
```

<h2 id="tocS_PublicKeyList">PublicKeyList</h2>
<!-- backwards compatibility -->
<a id="schemapublickeylist"></a>
<a id="schema_PublicKeyList"></a>
<a id="tocSpublickeylist"></a>
<a id="tocspublickeylist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ListRealtimeLogConfigsRequest">ListRealtimeLogConfigsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistrealtimelogconfigsrequest"></a>
<a id="schema_ListRealtimeLogConfigsRequest"></a>
<a id="tocSlistrealtimelogconfigsrequest"></a>
<a id="tocslistrealtimelogconfigsrequest"></a>

```json
{}
```

<h2 id="tocS_RealtimeLogConfigs">RealtimeLogConfigs</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfigs"></a>
<a id="schema_RealtimeLogConfigs"></a>
<a id="tocSrealtimelogconfigs"></a>
<a id="tocsrealtimelogconfigs"></a>

```json
{
  "MaxItems": {},
  "Items": {},
  "IsTruncated": {},
  "Marker": {},
  "NextMarker": {}
}
```

A list of real-time log configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxItems|object|true|none|none|
|Items|object|false|none|none|
|IsTruncated|object|true|none|none|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyType">ResponseHeadersPolicyType</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicytype"></a>
<a id="schema_ResponseHeadersPolicyType"></a>
<a id="tocSresponseheaderspolicytype"></a>
<a id="tocsresponseheaderspolicytype"></a>

```json
"managed"
```

<h2 id="tocS_ListResponseHeadersPoliciesRequest">ListResponseHeadersPoliciesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistresponseheaderspoliciesrequest"></a>
<a id="schema_ListResponseHeadersPoliciesRequest"></a>
<a id="tocSlistresponseheaderspoliciesrequest"></a>
<a id="tocslistresponseheaderspoliciesrequest"></a>

```json
{}
```

<h2 id="tocS_ResponseHeadersPolicyList">ResponseHeadersPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicylist"></a>
<a id="schema_ResponseHeadersPolicyList"></a>
<a id="tocSresponseheaderspolicylist"></a>
<a id="tocsresponseheaderspolicylist"></a>

```json
{
  "NextMarker": {},
  "MaxItems": {},
  "Quantity": {},
  "Items": {}
}
```

A list of response headers policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ListStreamingDistributionsRequest">ListStreamingDistributionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststreamingdistributionsrequest"></a>
<a id="schema_ListStreamingDistributionsRequest"></a>
<a id="tocSliststreamingdistributionsrequest"></a>
<a id="tocsliststreamingdistributionsrequest"></a>

```json
{}
```

The request to list your streaming distributions.

<h2 id="tocS_StreamingDistributionList">StreamingDistributionList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionlist"></a>
<a id="schema_StreamingDistributionList"></a>
<a id="tocSstreamingdistributionlist"></a>
<a id="tocsstreamingdistributionlist"></a>

```json
{
  "Marker": {},
  "NextMarker": {},
  "MaxItems": {},
  "IsTruncated": {},
  "Quantity": {},
  "Items": {}
}
```

A streaming distribution list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Marker|object|true|none|none|
|NextMarker|object|false|none|none|
|MaxItems|object|true|none|none|
|IsTruncated|object|true|none|none|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ResourceARN">ResourceARN</h2>
<!-- backwards compatibility -->
<a id="schemaresourcearn"></a>
<a id="schema_ResourceARN"></a>
<a id="tocSresourcearn"></a>
<a id="tocsresourcearn"></a>

```json
"string"
```

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

The request to list tags for a CloudFront resource.

<h2 id="tocS_Method">Method</h2>
<!-- backwards compatibility -->
<a id="schemamethod"></a>
<a id="schema_Method"></a>
<a id="tocSmethod"></a>
<a id="tocsmethod"></a>

```json
"GET"
```

<h2 id="tocS_MinimumProtocolVersion">MinimumProtocolVersion</h2>
<!-- backwards compatibility -->
<a id="schemaminimumprotocolversion"></a>
<a id="schema_MinimumProtocolVersion"></a>
<a id="tocSminimumprotocolversion"></a>
<a id="tocsminimumprotocolversion"></a>

```json
"SSLv3"
```

<h2 id="tocS_S3OriginConfig">S3OriginConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3originconfig"></a>
<a id="schema_S3OriginConfig"></a>
<a id="tocSs3originconfig"></a>
<a id="tocss3originconfig"></a>

```json
{
  "OriginAccessIdentity": {}
}
```

A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessIdentity|object|true|none|none|

<h2 id="tocS_OriginShield">OriginShield</h2>
<!-- backwards compatibility -->
<a id="schemaoriginshield"></a>
<a id="schema_OriginShield"></a>
<a id="tocSoriginshield"></a>
<a id="tocsoriginshield"></a>

```json
{
  "Enabled": {},
  "OriginShieldRegion": {}
}
```

<p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|OriginShieldRegion|object|false|none|none|

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
{
  "Id": {},
  "DomainName": {},
  "OriginPath": {},
  "CustomHeaders": {
    "Quantity": {},
    "Items": {}
  },
  "S3OriginConfig": {
    "OriginAccessIdentity": {}
  },
  "CustomOriginConfig": {
    "HTTPPort": {},
    "HTTPSPort": {},
    "OriginProtocolPolicy": {},
    "OriginSslProtocols": {
      "Quantity": {},
      "Items": {}
    },
    "OriginReadTimeout": {},
    "OriginKeepaliveTimeout": {}
  },
  "ConnectionAttempts": {},
  "ConnectionTimeout": {},
  "OriginShield": {
    "Enabled": {},
    "OriginShieldRegion": {}
  },
  "OriginAccessControlId": {}
}
```

<p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|DomainName|object|true|none|none|
|OriginPath|object|false|none|none|
|CustomHeaders|object|false|none|none|
|S3OriginConfig|object|false|none|none|
|CustomOriginConfig|object|false|none|none|
|ConnectionAttempts|object|false|none|none|
|ConnectionTimeout|object|false|none|none|
|OriginShield|object|false|none|none|
|OriginAccessControlId|object|false|none|none|

<h2 id="tocS_OriginAccessControlSummaryList">OriginAccessControlSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolsummarylist"></a>
<a id="schema_OriginAccessControlSummaryList"></a>
<a id="tocSoriginaccesscontrolsummarylist"></a>
<a id="tocsoriginaccesscontrolsummarylist"></a>

```json
[
  {
    "Id": {},
    "Description": {},
    "Name": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
]
```

<h2 id="tocS_OriginAccessControlSummary">OriginAccessControlSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoriginaccesscontrolsummary"></a>
<a id="schema_OriginAccessControlSummary"></a>
<a id="tocSoriginaccesscontrolsummary"></a>
<a id="tocsoriginaccesscontrolsummary"></a>

```json
{
  "Id": {},
  "Description": {},
  "Name": {},
  "SigningProtocol": {},
  "SigningBehavior": {},
  "OriginAccessControlOriginType": {}
}
```

A CloudFront origin access control.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Description|object|true|none|none|
|Name|object|true|none|none|
|SigningProtocol|object|true|none|none|
|SigningBehavior|object|true|none|none|
|OriginAccessControlOriginType|object|true|none|none|

<h2 id="tocS_sensitiveStringType">sensitiveStringType</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestringtype"></a>
<a id="schema_sensitiveStringType"></a>
<a id="tocSsensitivestringtype"></a>
<a id="tocssensitivestringtype"></a>

```json
"password"
```

<h2 id="tocS_OriginCustomHeader">OriginCustomHeader</h2>
<!-- backwards compatibility -->
<a id="schemaorigincustomheader"></a>
<a id="schema_OriginCustomHeader"></a>
<a id="tocSorigincustomheader"></a>
<a id="tocsorigincustomheader"></a>

```json
{
  "HeaderName": {},
  "HeaderValue": {}
}
```

A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HeaderName|object|true|none|none|
|HeaderValue|object|true|none|none|

<h2 id="tocS_OriginGroupFailoverCriteria">OriginGroupFailoverCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroupfailovercriteria"></a>
<a id="schema_OriginGroupFailoverCriteria"></a>
<a id="tocSorigingroupfailovercriteria"></a>
<a id="tocsorigingroupfailovercriteria"></a>

```json
{
  "StatusCodes": {
    "Quantity": {},
    "Items": {}
  }
}
```

A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCodes|object|true|none|none|

<h2 id="tocS_OriginGroupMembers">OriginGroupMembers</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroupmembers"></a>
<a id="schema_OriginGroupMembers"></a>
<a id="tocSorigingroupmembers"></a>
<a id="tocsorigingroupmembers"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex data type for the origins included in an origin group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_OriginGroup">OriginGroup</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroup"></a>
<a id="schema_OriginGroup"></a>
<a id="tocSorigingroup"></a>
<a id="tocsorigingroup"></a>

```json
{
  "Id": {},
  "FailoverCriteria": {
    "StatusCodes": {
      "Quantity": {},
      "Items": {}
    }
  },
  "Members": {
    "Quantity": {},
    "Items": {}
  }
}
```

An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|FailoverCriteria|object|true|none|none|
|Members|object|true|none|none|

<h2 id="tocS_StatusCodes">StatusCodes</h2>
<!-- backwards compatibility -->
<a id="schemastatuscodes"></a>
<a id="schema_StatusCodes"></a>
<a id="tocSstatuscodes"></a>
<a id="tocsstatuscodes"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_OriginGroupList">OriginGroupList</h2>
<!-- backwards compatibility -->
<a id="schemaorigingrouplist"></a>
<a id="schema_OriginGroupList"></a>
<a id="tocSorigingrouplist"></a>
<a id="tocsorigingrouplist"></a>

```json
[
  {
    "Id": {},
    "FailoverCriteria": {
      "StatusCodes": {
        "Quantity": {},
        "Items": {}
      }
    },
    "Members": {
      "Quantity": {},
      "Items": {}
    }
  }
]
```

List of origin groups for a distribution.

<h2 id="tocS_OriginGroupMember">OriginGroupMember</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroupmember"></a>
<a id="schema_OriginGroupMember"></a>
<a id="tocSorigingroupmember"></a>
<a id="tocsorigingroupmember"></a>

```json
{
  "OriginId": {}
}
```

An origin in an origin group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginId|object|true|none|none|

<h2 id="tocS_OriginGroupMemberList">OriginGroupMemberList</h2>
<!-- backwards compatibility -->
<a id="schemaorigingroupmemberlist"></a>
<a id="schema_OriginGroupMemberList"></a>
<a id="tocSorigingroupmemberlist"></a>
<a id="tocsorigingroupmemberlist"></a>

```json
[
  {
    "OriginId": {}
  },
  {
    "OriginId": {}
  }
]
```

List of origins in an origin group.

<h2 id="tocS_OriginList">OriginList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginlist"></a>
<a id="schema_OriginList"></a>
<a id="tocSoriginlist"></a>
<a id="tocsoriginlist"></a>

```json
[
  {
    "Id": {},
    "DomainName": {},
    "OriginPath": {},
    "CustomHeaders": {
      "Quantity": {},
      "Items": {}
    },
    "S3OriginConfig": {
      "OriginAccessIdentity": {}
    },
    "CustomOriginConfig": {
      "HTTPPort": {},
      "HTTPSPort": {},
      "OriginProtocolPolicy": {},
      "OriginSslProtocols": {
        "Quantity": {},
        "Items": {}
      },
      "OriginReadTimeout": {},
      "OriginKeepaliveTimeout": {}
    },
    "ConnectionAttempts": {},
    "ConnectionTimeout": {},
    "OriginShield": {
      "Enabled": {},
      "OriginShieldRegion": {}
    },
    "OriginAccessControlId": {}
  }
]
```

<h2 id="tocS_OriginRequestPolicyCookieBehavior">OriginRequestPolicyCookieBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicycookiebehavior"></a>
<a id="schema_OriginRequestPolicyCookieBehavior"></a>
<a id="tocSoriginrequestpolicycookiebehavior"></a>
<a id="tocsoriginrequestpolicycookiebehavior"></a>

```json
"none"
```

<h2 id="tocS_OriginRequestPolicyHeaderBehavior">OriginRequestPolicyHeaderBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyheaderbehavior"></a>
<a id="schema_OriginRequestPolicyHeaderBehavior"></a>
<a id="tocSoriginrequestpolicyheaderbehavior"></a>
<a id="tocsoriginrequestpolicyheaderbehavior"></a>

```json
"none"
```

<h2 id="tocS_OriginRequestPolicySummaryList">OriginRequestPolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicysummarylist"></a>
<a id="schema_OriginRequestPolicySummaryList"></a>
<a id="tocSoriginrequestpolicysummarylist"></a>
<a id="tocsoriginrequestpolicysummarylist"></a>

```json
[
  {
    "Type": {},
    "OriginRequestPolicy": {
      "Id": {},
      "LastModifiedTime": {},
      "OriginRequestPolicyConfig": {
        "Comment": {},
        "Name": {},
        "HeadersConfig": {
          "HeaderBehavior": {},
          "Headers": {
            "Quantity": {},
            "Items": {}
          }
        },
        "CookiesConfig": {
          "CookieBehavior": {},
          "Cookies": {
            "Quantity": {},
            "Items": {}
          }
        },
        "QueryStringsConfig": {
          "QueryStringBehavior": {},
          "QueryStrings": {
            "Quantity": {},
            "Items": {}
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_OriginRequestPolicyQueryStringBehavior">OriginRequestPolicyQueryStringBehavior</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicyquerystringbehavior"></a>
<a id="schema_OriginRequestPolicyQueryStringBehavior"></a>
<a id="tocSoriginrequestpolicyquerystringbehavior"></a>
<a id="tocsoriginrequestpolicyquerystringbehavior"></a>

```json
"none"
```

<h2 id="tocS_OriginRequestPolicySummary">OriginRequestPolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemaoriginrequestpolicysummary"></a>
<a id="schema_OriginRequestPolicySummary"></a>
<a id="tocSoriginrequestpolicysummary"></a>
<a id="tocsoriginrequestpolicysummary"></a>

```json
{
  "Type": {},
  "OriginRequestPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "OriginRequestPolicyConfig": {
      "Comment": {},
      "Name": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

Contains an origin request policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|OriginRequestPolicy|object|true|none|none|

<h2 id="tocS_OriginShieldRegion">OriginShieldRegion</h2>
<!-- backwards compatibility -->
<a id="schemaoriginshieldregion"></a>
<a id="schema_OriginShieldRegion"></a>
<a id="tocSoriginshieldregion"></a>
<a id="tocsoriginshieldregion"></a>

```json
"string"
```

<h2 id="tocS_SslProtocolsList">SslProtocolsList</h2>
<!-- backwards compatibility -->
<a id="schemasslprotocolslist"></a>
<a id="schema_SslProtocolsList"></a>
<a id="tocSsslprotocolslist"></a>
<a id="tocssslprotocolslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_PathList">PathList</h2>
<!-- backwards compatibility -->
<a id="schemapathlist"></a>
<a id="schema_PathList"></a>
<a id="tocSpathlist"></a>
<a id="tocspathlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_PublicKeySummaryList">PublicKeySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemapublickeysummarylist"></a>
<a id="schema_PublicKeySummaryList"></a>
<a id="tocSpublickeysummarylist"></a>
<a id="tocspublickeysummarylist"></a>

```json
[
  {
    "Id": {},
    "Name": {},
    "CreatedTime": {},
    "EncodedKey": {},
    "Comment": {}
  }
]
```

<h2 id="tocS_PublicKeySummary">PublicKeySummary</h2>
<!-- backwards compatibility -->
<a id="schemapublickeysummary"></a>
<a id="schema_PublicKeySummary"></a>
<a id="tocSpublickeysummary"></a>
<a id="tocspublickeysummary"></a>

```json
{
  "Id": {},
  "Name": {},
  "CreatedTime": {},
  "EncodedKey": {},
  "Comment": {}
}
```

Contains information about a public key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|Name|object|true|none|none|
|CreatedTime|object|true|none|none|
|EncodedKey|object|true|none|none|
|Comment|object|false|none|none|

<h2 id="tocS_PublishFunctionRequest">PublishFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishfunctionrequest"></a>
<a id="schema_PublishFunctionRequest"></a>
<a id="tocSpublishfunctionrequest"></a>
<a id="tocspublishfunctionrequest"></a>

```json
{}
```

<h2 id="tocS_QueryArgProfile">QueryArgProfile</h2>
<!-- backwards compatibility -->
<a id="schemaqueryargprofile"></a>
<a id="schema_QueryArgProfile"></a>
<a id="tocSqueryargprofile"></a>
<a id="tocsqueryargprofile"></a>

```json
{
  "QueryArg": {},
  "ProfileId": {}
}
```

Query argument-profile mapping for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QueryArg|object|true|none|none|
|ProfileId|object|true|none|none|

<h2 id="tocS_QueryArgProfiles">QueryArgProfiles</h2>
<!-- backwards compatibility -->
<a id="schemaqueryargprofiles"></a>
<a id="schema_QueryArgProfiles"></a>
<a id="tocSqueryargprofiles"></a>
<a id="tocsqueryargprofiles"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

Query argument-profile mapping for field-level encryption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_QueryArgProfileList">QueryArgProfileList</h2>
<!-- backwards compatibility -->
<a id="schemaqueryargprofilelist"></a>
<a id="schema_QueryArgProfileList"></a>
<a id="tocSqueryargprofilelist"></a>
<a id="tocsqueryargprofilelist"></a>

```json
[
  {
    "QueryArg": {},
    "ProfileId": {}
  }
]
```

<h2 id="tocS_QueryStringCacheKeysList">QueryStringCacheKeysList</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringcachekeyslist"></a>
<a id="schema_QueryStringCacheKeysList"></a>
<a id="tocSquerystringcachekeyslist"></a>
<a id="tocsquerystringcachekeyslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_QueryStringNamesList">QueryStringNamesList</h2>
<!-- backwards compatibility -->
<a id="schemaquerystringnameslist"></a>
<a id="schema_QueryStringNamesList"></a>
<a id="tocSquerystringnameslist"></a>
<a id="tocsquerystringnameslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_RealtimeLogConfigList">RealtimeLogConfigList</h2>
<!-- backwards compatibility -->
<a id="schemarealtimelogconfiglist"></a>
<a id="schema_RealtimeLogConfigList"></a>
<a id="tocSrealtimelogconfiglist"></a>
<a id="tocsrealtimelogconfiglist"></a>

```json
[
  {
    "ARN": {},
    "Name": {},
    "SamplingRate": {},
    "EndPoints": {},
    "Fields": {}
  }
]
```

<h2 id="tocS_RealtimeMetricsSubscriptionStatus">RealtimeMetricsSubscriptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemarealtimemetricssubscriptionstatus"></a>
<a id="schema_RealtimeMetricsSubscriptionStatus"></a>
<a id="tocSrealtimemetricssubscriptionstatus"></a>
<a id="tocsrealtimemetricssubscriptionstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ReferrerPolicyList">ReferrerPolicyList</h2>
<!-- backwards compatibility -->
<a id="schemareferrerpolicylist"></a>
<a id="schema_ReferrerPolicyList"></a>
<a id="tocSreferrerpolicylist"></a>
<a id="tocsreferrerpolicylist"></a>

```json
"no-referrer"
```

<h2 id="tocS_ResponseHeadersPolicyAccessControlAllowHeaders">ResponseHeadersPolicyAccessControlAllowHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyaccesscontrolallowheaders"></a>
<a id="schema_ResponseHeadersPolicyAccessControlAllowHeaders"></a>
<a id="tocSresponseheaderspolicyaccesscontrolallowheaders"></a>
<a id="tocsresponseheaderspolicyaccesscontrolallowheaders"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyAccessControlAllowMethods">ResponseHeadersPolicyAccessControlAllowMethods</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyaccesscontrolallowmethods"></a>
<a id="schema_ResponseHeadersPolicyAccessControlAllowMethods"></a>
<a id="tocSresponseheaderspolicyaccesscontrolallowmethods"></a>
<a id="tocsresponseheaderspolicyaccesscontrolallowmethods"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyAccessControlAllowOrigins">ResponseHeadersPolicyAccessControlAllowOrigins</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyaccesscontrolalloworigins"></a>
<a id="schema_ResponseHeadersPolicyAccessControlAllowOrigins"></a>
<a id="tocSresponseheaderspolicyaccesscontrolalloworigins"></a>
<a id="tocsresponseheaderspolicyaccesscontrolalloworigins"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyAccessControlExposeHeaders">ResponseHeadersPolicyAccessControlExposeHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyaccesscontrolexposeheaders"></a>
<a id="schema_ResponseHeadersPolicyAccessControlExposeHeaders"></a>
<a id="tocSresponseheaderspolicyaccesscontrolexposeheaders"></a>
<a id="tocsresponseheaderspolicyaccesscontrolexposeheaders"></a>

```json
{
  "Quantity": {},
  "Items": {}
}
```

<p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Quantity|object|true|none|none|
|Items|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyContentSecurityPolicy">ResponseHeadersPolicyContentSecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycontentsecuritypolicy"></a>
<a id="schema_ResponseHeadersPolicyContentSecurityPolicy"></a>
<a id="tocSresponseheaderspolicycontentsecuritypolicy"></a>
<a id="tocsresponseheaderspolicycontentsecuritypolicy"></a>

```json
{
  "Override": {},
  "ContentSecurityPolicy": {}
}
```

<p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|
|ContentSecurityPolicy|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyContentTypeOptions">ResponseHeadersPolicyContentTypeOptions</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycontenttypeoptions"></a>
<a id="schema_ResponseHeadersPolicyContentTypeOptions"></a>
<a id="tocSresponseheaderspolicycontenttypeoptions"></a>
<a id="tocsresponseheaderspolicycontenttypeoptions"></a>

```json
{
  "Override": {}
}
```

<p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyCustomHeader">ResponseHeadersPolicyCustomHeader</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycustomheader"></a>
<a id="schema_ResponseHeadersPolicyCustomHeader"></a>
<a id="tocSresponseheaderspolicycustomheader"></a>
<a id="tocsresponseheaderspolicycustomheader"></a>

```json
{
  "Header": {},
  "Value": {},
  "Override": {}
}
```

An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Header|object|true|none|none|
|Value|object|true|none|none|
|Override|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyCustomHeaderList">ResponseHeadersPolicyCustomHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicycustomheaderlist"></a>
<a id="schema_ResponseHeadersPolicyCustomHeaderList"></a>
<a id="tocSresponseheaderspolicycustomheaderlist"></a>
<a id="tocsresponseheaderspolicycustomheaderlist"></a>

```json
[
  {
    "Header": {},
    "Value": {},
    "Override": {}
  }
]
```

<h2 id="tocS_ResponseHeadersPolicyFrameOptions">ResponseHeadersPolicyFrameOptions</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyframeoptions"></a>
<a id="schema_ResponseHeadersPolicyFrameOptions"></a>
<a id="tocSresponseheaderspolicyframeoptions"></a>
<a id="tocsresponseheaderspolicyframeoptions"></a>

```json
{
  "Override": {},
  "FrameOption": {}
}
```

<p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|
|FrameOption|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicySummaryList">ResponseHeadersPolicySummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicysummarylist"></a>
<a id="schema_ResponseHeadersPolicySummaryList"></a>
<a id="tocSresponseheaderspolicysummarylist"></a>
<a id="tocsresponseheaderspolicysummarylist"></a>

```json
[
  {
    "Type": {},
    "ResponseHeadersPolicy": {
      "Id": {},
      "LastModifiedTime": {},
      "ResponseHeadersPolicyConfig": {
        "Comment": {},
        "Name": {},
        "CorsConfig": {
          "AccessControlAllowOrigins": {
            "Quantity": {},
            "Items": {}
          },
          "AccessControlAllowHeaders": {
            "Quantity": {},
            "Items": {}
          },
          "AccessControlAllowMethods": {
            "Quantity": {},
            "Items": {}
          },
          "AccessControlAllowCredentials": {},
          "AccessControlExposeHeaders": {
            "Quantity": {},
            "Items": {}
          },
          "AccessControlMaxAgeSec": {},
          "OriginOverride": {}
        },
        "SecurityHeadersConfig": {
          "XSSProtection": {
            "Override": {},
            "Protection": {},
            "ModeBlock": {},
            "ReportUri": {}
          },
          "FrameOptions": {
            "Override": {},
            "FrameOption": {}
          },
          "ReferrerPolicy": {
            "Override": {},
            "ReferrerPolicy": {}
          },
          "ContentSecurityPolicy": {
            "Override": {},
            "ContentSecurityPolicy": {}
          },
          "ContentTypeOptions": {
            "Override": {}
          },
          "StrictTransportSecurity": {
            "Override": {},
            "IncludeSubdomains": {},
            "Preload": {},
            "AccessControlMaxAgeSec": {}
          }
        },
        "ServerTimingHeadersConfig": {
          "Enabled": {},
          "SamplingRate": {}
        },
        "CustomHeadersConfig": {
          "Quantity": {},
          "Items": {}
        },
        "RemoveHeadersConfig": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
]
```

<h2 id="tocS_ResponseHeadersPolicyReferrerPolicy">ResponseHeadersPolicyReferrerPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyreferrerpolicy"></a>
<a id="schema_ResponseHeadersPolicyReferrerPolicy"></a>
<a id="tocSresponseheaderspolicyreferrerpolicy"></a>
<a id="tocsresponseheaderspolicyreferrerpolicy"></a>

```json
{
  "Override": {},
  "ReferrerPolicy": {}
}
```

<p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|
|ReferrerPolicy|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyRemoveHeader">ResponseHeadersPolicyRemoveHeader</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyremoveheader"></a>
<a id="schema_ResponseHeadersPolicyRemoveHeader"></a>
<a id="tocSresponseheaderspolicyremoveheader"></a>
<a id="tocsresponseheaderspolicyremoveheader"></a>

```json
{
  "Header": {}
}
```

The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Header|object|true|none|none|

<h2 id="tocS_ResponseHeadersPolicyRemoveHeaderList">ResponseHeadersPolicyRemoveHeaderList</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyremoveheaderlist"></a>
<a id="schema_ResponseHeadersPolicyRemoveHeaderList"></a>
<a id="tocSresponseheaderspolicyremoveheaderlist"></a>
<a id="tocsresponseheaderspolicyremoveheaderlist"></a>

```json
[
  {
    "Header": {}
  }
]
```

<h2 id="tocS_ResponseHeadersPolicyXSSProtection">ResponseHeadersPolicyXSSProtection</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicyxssprotection"></a>
<a id="schema_ResponseHeadersPolicyXSSProtection"></a>
<a id="tocSresponseheaderspolicyxssprotection"></a>
<a id="tocsresponseheaderspolicyxssprotection"></a>

```json
{
  "Override": {},
  "Protection": {},
  "ModeBlock": {},
  "ReportUri": {}
}
```

<p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|
|Protection|object|true|none|none|
|ModeBlock|object|false|none|none|
|ReportUri|object|false|none|none|

<h2 id="tocS_ResponseHeadersPolicyStrictTransportSecurity">ResponseHeadersPolicyStrictTransportSecurity</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicystricttransportsecurity"></a>
<a id="schema_ResponseHeadersPolicyStrictTransportSecurity"></a>
<a id="tocSresponseheaderspolicystricttransportsecurity"></a>
<a id="tocsresponseheaderspolicystricttransportsecurity"></a>

```json
{
  "Override": {},
  "IncludeSubdomains": {},
  "Preload": {},
  "AccessControlMaxAgeSec": {}
}
```

<p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Override|object|true|none|none|
|IncludeSubdomains|object|false|none|none|
|Preload|object|false|none|none|
|AccessControlMaxAgeSec|object|true|none|none|

<h2 id="tocS_SamplingRate">SamplingRate</h2>
<!-- backwards compatibility -->
<a id="schemasamplingrate"></a>
<a id="schema_SamplingRate"></a>
<a id="tocSsamplingrate"></a>
<a id="tocssamplingrate"></a>

```json
0
```

<h2 id="tocS_ResponseHeadersPolicySummary">ResponseHeadersPolicySummary</h2>
<!-- backwards compatibility -->
<a id="schemaresponseheaderspolicysummary"></a>
<a id="schema_ResponseHeadersPolicySummary"></a>
<a id="tocSresponseheaderspolicysummary"></a>
<a id="tocsresponseheaderspolicysummary"></a>

```json
{
  "Type": {},
  "ResponseHeadersPolicy": {
    "Id": {},
    "LastModifiedTime": {},
    "ResponseHeadersPolicyConfig": {
      "Comment": {},
      "Name": {},
      "CorsConfig": {
        "AccessControlAllowOrigins": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowMethods": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlAllowCredentials": {},
        "AccessControlExposeHeaders": {
          "Quantity": {},
          "Items": {}
        },
        "AccessControlMaxAgeSec": {},
        "OriginOverride": {}
      },
      "SecurityHeadersConfig": {
        "XSSProtection": {
          "Override": {},
          "Protection": {},
          "ModeBlock": {},
          "ReportUri": {}
        },
        "FrameOptions": {
          "Override": {},
          "FrameOption": {}
        },
        "ReferrerPolicy": {
          "Override": {},
          "ReferrerPolicy": {}
        },
        "ContentSecurityPolicy": {
          "Override": {},
          "ContentSecurityPolicy": {}
        },
        "ContentTypeOptions": {
          "Override": {}
        },
        "StrictTransportSecurity": {
          "Override": {},
          "IncludeSubdomains": {},
          "Preload": {},
          "AccessControlMaxAgeSec": {}
        }
      },
      "ServerTimingHeadersConfig": {
        "Enabled": {},
        "SamplingRate": {}
      },
      "CustomHeadersConfig": {
        "Quantity": {},
        "Items": {}
      },
      "RemoveHeadersConfig": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

Contains a response headers policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|ResponseHeadersPolicy|object|true|none|none|

<h2 id="tocS_SSLSupportMethod">SSLSupportMethod</h2>
<!-- backwards compatibility -->
<a id="schemasslsupportmethod"></a>
<a id="schema_SSLSupportMethod"></a>
<a id="tocSsslsupportmethod"></a>
<a id="tocssslsupportmethod"></a>

```json
"sni-only"
```

<h2 id="tocS_Signer">Signer</h2>
<!-- backwards compatibility -->
<a id="schemasigner"></a>
<a id="schema_Signer"></a>
<a id="tocSsigner"></a>
<a id="tocssigner"></a>

```json
{
  "AwsAccountNumber": {},
  "KeyPairIds": {
    "Quantity": {},
    "Items": {}
  }
}
```

A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsAccountNumber|object|false|none|none|
|KeyPairIds|object|false|none|none|

<h2 id="tocS_SslProtocol">SslProtocol</h2>
<!-- backwards compatibility -->
<a id="schemasslprotocol"></a>
<a id="schema_SslProtocol"></a>
<a id="tocSsslprotocol"></a>
<a id="tocssslprotocol"></a>

```json
"SSLv3"
```

<h2 id="tocS_StagingDistributionDnsNameList">StagingDistributionDnsNameList</h2>
<!-- backwards compatibility -->
<a id="schemastagingdistributiondnsnamelist"></a>
<a id="schema_StagingDistributionDnsNameList"></a>
<a id="tocSstagingdistributiondnsnamelist"></a>
<a id="tocsstagingdistributiondnsnamelist"></a>

```json
[
  {}
]
```

<h2 id="tocS_StatusCodeList">StatusCodeList</h2>
<!-- backwards compatibility -->
<a id="schemastatuscodelist"></a>
<a id="schema_StatusCodeList"></a>
<a id="tocSstatuscodelist"></a>
<a id="tocsstatuscodelist"></a>

```json
[
  {}
]
```

List of status codes for origin failover.

<h2 id="tocS_StreamingDistributionSummaryList">StreamingDistributionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionsummarylist"></a>
<a id="schema_StreamingDistributionSummaryList"></a>
<a id="tocSstreamingdistributionsummarylist"></a>
<a id="tocsstreamingdistributionsummarylist"></a>

```json
[
  {
    "Id": {},
    "ARN": {},
    "Status": {},
    "LastModifiedTime": {},
    "DomainName": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "PriceClass": {},
    "Enabled": {}
  }
]
```

<h2 id="tocS_StreamingDistributionSummary">StreamingDistributionSummary</h2>
<!-- backwards compatibility -->
<a id="schemastreamingdistributionsummary"></a>
<a id="schema_StreamingDistributionSummary"></a>
<a id="tocSstreamingdistributionsummary"></a>
<a id="tocsstreamingdistributionsummary"></a>

```json
{
  "Id": {},
  "ARN": {},
  "Status": {},
  "LastModifiedTime": {},
  "DomainName": {},
  "S3Origin": {
    "DomainName": {},
    "OriginAccessIdentity": {}
  },
  "Aliases": {
    "Quantity": {},
    "Items": {}
  },
  "TrustedSigners": {
    "Enabled": {},
    "Quantity": {},
    "Items": {}
  },
  "Comment": {},
  "PriceClass": {},
  "Enabled": {}
}
```

A summary of the information for a CloudFront streaming distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|ARN|object|true|none|none|
|Status|object|true|none|none|
|LastModifiedTime|object|true|none|none|
|DomainName|object|true|none|none|
|S3Origin|object|true|none|none|
|Aliases|object|true|none|none|
|TrustedSigners|object|true|none|none|
|Comment|object|true|none|none|
|PriceClass|object|true|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<p>A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>

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

A complex type that contains <code>Tag</code> key and <code>Tag</code> value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|false|none|none|

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
{
  "Items": {}
}
```

A complex type that contains zero or more <code>Tag</code> elements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Items|object|false|none|none|

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "Items": {}
  }
}
```

The request to add tags to a CloudFront resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TestFunctionRequest">TestFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schematestfunctionrequest"></a>
<a id="schema_TestFunctionRequest"></a>
<a id="tocStestfunctionrequest"></a>
<a id="tocstestfunctionrequest"></a>

```json
{
  "Stage": {},
  "EventObject": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Stage|object|false|none|none|
|EventObject|object|true|none|none|

<h2 id="tocS_TestResult">TestResult</h2>
<!-- backwards compatibility -->
<a id="schematestresult"></a>
<a id="schema_TestResult"></a>
<a id="tocStestresult"></a>
<a id="tocstestresult"></a>

```json
{
  "FunctionSummary": {
    "Name": {},
    "Status": {},
    "FunctionConfig": {
      "Comment": {},
      "Runtime": {}
    },
    "FunctionMetadata": {
      "FunctionARN": {},
      "Stage": {},
      "CreatedTime": {},
      "LastModifiedTime": {}
    }
  },
  "ComputeUtilization": {},
  "FunctionExecutionLogs": {},
  "FunctionErrorMessage": {},
  "FunctionOutput": {}
}
```

Contains the result of testing a CloudFront function with <code>TestFunction</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionSummary|object|false|none|none|
|ComputeUtilization|object|false|none|none|
|FunctionExecutionLogs|object|false|none|none|
|FunctionErrorMessage|object|false|none|none|
|FunctionOutput|object|false|none|none|

<h2 id="tocS_TrustedKeyGroupIdList">TrustedKeyGroupIdList</h2>
<!-- backwards compatibility -->
<a id="schematrustedkeygroupidlist"></a>
<a id="schema_TrustedKeyGroupIdList"></a>
<a id="tocStrustedkeygroupidlist"></a>
<a id="tocstrustedkeygroupidlist"></a>

```json
[
  {}
]
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{
  "TagKeys": {
    "Items": {}
  }
}
```

The request to remove tags from a CloudFront resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateCachePolicyRequest">UpdateCachePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecachepolicyrequest"></a>
<a id="schema_UpdateCachePolicyRequest"></a>
<a id="tocSupdatecachepolicyrequest"></a>
<a id="tocsupdatecachepolicyrequest"></a>

```json
{
  "CachePolicyConfig": {
    "Comment": {},
    "Name": {},
    "DefaultTTL": {},
    "MaxTTL": {},
    "MinTTL": {},
    "ParametersInCacheKeyAndForwardedToOrigin": {
      "EnableAcceptEncodingGzip": {},
      "EnableAcceptEncodingBrotli": {},
      "HeadersConfig": {
        "HeaderBehavior": {},
        "Headers": {
          "Quantity": {},
          "Items": {}
        }
      },
      "CookiesConfig": {
        "CookieBehavior": {},
        "Cookies": {
          "Quantity": {},
          "Items": {}
        }
      },
      "QueryStringsConfig": {
        "QueryStringBehavior": {},
        "QueryStrings": {
          "Quantity": {},
          "Items": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CachePolicyConfig|object|true|none|none|

<h2 id="tocS_UpdateCloudFrontOriginAccessIdentityRequest">UpdateCloudFrontOriginAccessIdentityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecloudfrontoriginaccessidentityrequest"></a>
<a id="schema_UpdateCloudFrontOriginAccessIdentityRequest"></a>
<a id="tocSupdatecloudfrontoriginaccessidentityrequest"></a>
<a id="tocsupdatecloudfrontoriginaccessidentityrequest"></a>

```json
{
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": {},
    "Comment": {}
  }
}
```

The request to update an origin access identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudFrontOriginAccessIdentityConfig|object|true|none|none|

<h2 id="tocS_UpdateContinuousDeploymentPolicyRequest">UpdateContinuousDeploymentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecontinuousdeploymentpolicyrequest"></a>
<a id="schema_UpdateContinuousDeploymentPolicyRequest"></a>
<a id="tocSupdatecontinuousdeploymentpolicyrequest"></a>
<a id="tocsupdatecontinuousdeploymentpolicyrequest"></a>

```json
{
  "ContinuousDeploymentPolicyConfig": {
    "StagingDistributionDnsNames": {
      "Quantity": {},
      "Items": {}
    },
    "Enabled": {},
    "TrafficConfig": {
      "SingleWeightConfig": {
        "Weight": {},
        "SessionStickinessConfig": {
          "IdleTTL": {},
          "MaximumTTL": {}
        }
      },
      "SingleHeaderConfig": {
        "Header": {},
        "Value": {}
      },
      "Type": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContinuousDeploymentPolicyConfig|object|true|none|none|

<h2 id="tocS_UpdateDistributionRequest">UpdateDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionrequest"></a>
<a id="schema_UpdateDistributionRequest"></a>
<a id="tocSupdatedistributionrequest"></a>
<a id="tocsupdatedistributionrequest"></a>

```json
{
  "DistributionConfig": {
    "CallerReference": {},
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultRootObject": {},
    "Origins": {
      "Quantity": {},
      "Items": {}
    },
    "OriginGroups": {
      "Quantity": {},
      "Items": {}
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": {},
      "TrustedSigners": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "TrustedKeyGroups": {
        "Enabled": {},
        "Quantity": {},
        "Items": {}
      },
      "ViewerProtocolPolicy": {},
      "AllowedMethods": {
        "Quantity": {},
        "Items": {},
        "CachedMethods": {
          "Quantity": {},
          "Items": {}
        }
      },
      "SmoothStreaming": {},
      "Compress": {},
      "LambdaFunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FunctionAssociations": {
        "Quantity": {},
        "Items": {}
      },
      "FieldLevelEncryptionId": {},
      "RealtimeLogConfigArn": {},
      "CachePolicyId": {},
      "OriginRequestPolicyId": {},
      "ResponseHeadersPolicyId": {},
      "ForwardedValues": {
        "QueryString": {},
        "Cookies": {
          "Forward": {},
          "WhitelistedNames": {
            "Quantity": {},
            "Items": {}
          }
        },
        "Headers": {
          "Quantity": {},
          "Items": {}
        },
        "QueryStringCacheKeys": {
          "Quantity": {},
          "Items": {}
        }
      },
      "MinTTL": {},
      "DefaultTTL": {},
      "MaxTTL": {}
    },
    "CacheBehaviors": {
      "Quantity": {},
      "Items": {}
    },
    "CustomErrorResponses": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "IncludeCookies": {},
      "Bucket": {},
      "Prefix": {}
    },
    "PriceClass": {},
    "Enabled": {},
    "ViewerCertificate": {
      "CloudFrontDefaultCertificate": {},
      "IAMCertificateId": {},
      "ACMCertificateArn": {},
      "SSLSupportMethod": {},
      "MinimumProtocolVersion": {},
      "Certificate": {},
      "CertificateSource": {}
    },
    "Restrictions": {
      "GeoRestriction": {
        "RestrictionType": {},
        "Quantity": {},
        "Items": {}
      }
    },
    "WebACLId": {},
    "HttpVersion": {},
    "IsIPV6Enabled": {},
    "ContinuousDeploymentPolicyId": {},
    "Staging": {}
  }
}
```

The request to update a distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DistributionConfig|object|true|none|none|

<h2 id="tocS_UpdateDistributionWithStagingConfigRequest">UpdateDistributionWithStagingConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionwithstagingconfigrequest"></a>
<a id="schema_UpdateDistributionWithStagingConfigRequest"></a>
<a id="tocSupdatedistributionwithstagingconfigrequest"></a>
<a id="tocsupdatedistributionwithstagingconfigrequest"></a>

```json
{}
```

<h2 id="tocS_UpdateFieldLevelEncryptionConfigRequest">UpdateFieldLevelEncryptionConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefieldlevelencryptionconfigrequest"></a>
<a id="schema_UpdateFieldLevelEncryptionConfigRequest"></a>
<a id="tocSupdatefieldlevelencryptionconfigrequest"></a>
<a id="tocsupdatefieldlevelencryptionconfigrequest"></a>

```json
{
  "FieldLevelEncryptionConfig": {
    "CallerReference": {},
    "Comment": {},
    "QueryArgProfileConfig": {
      "ForwardWhenQueryArgProfileIsUnknown": {},
      "QueryArgProfiles": {
        "Quantity": {},
        "Items": {}
      }
    },
    "ContentTypeProfileConfig": {
      "ForwardWhenContentTypeIsUnknown": {},
      "ContentTypeProfiles": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionConfig|object|true|none|none|

<h2 id="tocS_UpdateFieldLevelEncryptionProfileRequest">UpdateFieldLevelEncryptionProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefieldlevelencryptionprofilerequest"></a>
<a id="schema_UpdateFieldLevelEncryptionProfileRequest"></a>
<a id="tocSupdatefieldlevelencryptionprofilerequest"></a>
<a id="tocsupdatefieldlevelencryptionprofilerequest"></a>

```json
{
  "FieldLevelEncryptionProfileConfig": {
    "Name": {},
    "CallerReference": {},
    "Comment": {},
    "EncryptionEntities": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FieldLevelEncryptionProfileConfig|object|true|none|none|

<h2 id="tocS_UpdateFunctionRequest">UpdateFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefunctionrequest"></a>
<a id="schema_UpdateFunctionRequest"></a>
<a id="tocSupdatefunctionrequest"></a>
<a id="tocsupdatefunctionrequest"></a>

```json
{
  "FunctionConfig": {
    "Comment": {},
    "Runtime": {}
  },
  "FunctionCode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionConfig|object|true|none|none|
|FunctionCode|object|true|none|none|

<h2 id="tocS_UpdateKeyGroupRequest">UpdateKeyGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeygrouprequest"></a>
<a id="schema_UpdateKeyGroupRequest"></a>
<a id="tocSupdatekeygrouprequest"></a>
<a id="tocsupdatekeygrouprequest"></a>

```json
{
  "KeyGroupConfig": {
    "Name": {},
    "Items": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyGroupConfig|object|true|none|none|

<h2 id="tocS_UpdateOriginAccessControlRequest">UpdateOriginAccessControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginaccesscontrolrequest"></a>
<a id="schema_UpdateOriginAccessControlRequest"></a>
<a id="tocSupdateoriginaccesscontrolrequest"></a>
<a id="tocsupdateoriginaccesscontrolrequest"></a>

```json
{
  "OriginAccessControlConfig": {
    "Name": {},
    "Description": {},
    "SigningProtocol": {},
    "SigningBehavior": {},
    "OriginAccessControlOriginType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginAccessControlConfig|object|true|none|none|

<h2 id="tocS_UpdateOriginRequestPolicyRequest">UpdateOriginRequestPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginrequestpolicyrequest"></a>
<a id="schema_UpdateOriginRequestPolicyRequest"></a>
<a id="tocSupdateoriginrequestpolicyrequest"></a>
<a id="tocsupdateoriginrequestpolicyrequest"></a>

```json
{
  "OriginRequestPolicyConfig": {
    "Comment": {},
    "Name": {},
    "HeadersConfig": {
      "HeaderBehavior": {},
      "Headers": {
        "Quantity": {},
        "Items": {}
      }
    },
    "CookiesConfig": {
      "CookieBehavior": {},
      "Cookies": {
        "Quantity": {},
        "Items": {}
      }
    },
    "QueryStringsConfig": {
      "QueryStringBehavior": {},
      "QueryStrings": {
        "Quantity": {},
        "Items": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OriginRequestPolicyConfig|object|true|none|none|

<h2 id="tocS_UpdatePublicKeyRequest">UpdatePublicKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepublickeyrequest"></a>
<a id="schema_UpdatePublicKeyRequest"></a>
<a id="tocSupdatepublickeyrequest"></a>
<a id="tocsupdatepublickeyrequest"></a>

```json
{
  "PublicKeyConfig": {
    "CallerReference": {},
    "Name": {},
    "EncodedKey": {},
    "Comment": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicKeyConfig|object|true|none|none|

<h2 id="tocS_UpdateRealtimeLogConfigRequest">UpdateRealtimeLogConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterealtimelogconfigrequest"></a>
<a id="schema_UpdateRealtimeLogConfigRequest"></a>
<a id="tocSupdaterealtimelogconfigrequest"></a>
<a id="tocsupdaterealtimelogconfigrequest"></a>

```json
{
  "EndPoints": {},
  "Fields": {},
  "Name": {},
  "ARN": {},
  "SamplingRate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndPoints|object|false|none|none|
|Fields|object|false|none|none|
|Name|object|false|none|none|
|ARN|object|false|none|none|
|SamplingRate|object|false|none|none|

<h2 id="tocS_UpdateResponseHeadersPolicyRequest">UpdateResponseHeadersPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateresponseheaderspolicyrequest"></a>
<a id="schema_UpdateResponseHeadersPolicyRequest"></a>
<a id="tocSupdateresponseheaderspolicyrequest"></a>
<a id="tocsupdateresponseheaderspolicyrequest"></a>

```json
{
  "ResponseHeadersPolicyConfig": {
    "Comment": {},
    "Name": {},
    "CorsConfig": {
      "AccessControlAllowOrigins": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowMethods": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlAllowCredentials": {},
      "AccessControlExposeHeaders": {
        "Quantity": {},
        "Items": {}
      },
      "AccessControlMaxAgeSec": {},
      "OriginOverride": {}
    },
    "SecurityHeadersConfig": {
      "XSSProtection": {
        "Override": {},
        "Protection": {},
        "ModeBlock": {},
        "ReportUri": {}
      },
      "FrameOptions": {
        "Override": {},
        "FrameOption": {}
      },
      "ReferrerPolicy": {
        "Override": {},
        "ReferrerPolicy": {}
      },
      "ContentSecurityPolicy": {
        "Override": {},
        "ContentSecurityPolicy": {}
      },
      "ContentTypeOptions": {
        "Override": {}
      },
      "StrictTransportSecurity": {
        "Override": {},
        "IncludeSubdomains": {},
        "Preload": {},
        "AccessControlMaxAgeSec": {}
      }
    },
    "ServerTimingHeadersConfig": {
      "Enabled": {},
      "SamplingRate": {}
    },
    "CustomHeadersConfig": {
      "Quantity": {},
      "Items": {}
    },
    "RemoveHeadersConfig": {
      "Quantity": {},
      "Items": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResponseHeadersPolicyConfig|object|true|none|none|

<h2 id="tocS_UpdateStreamingDistributionRequest">UpdateStreamingDistributionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestreamingdistributionrequest"></a>
<a id="schema_UpdateStreamingDistributionRequest"></a>
<a id="tocSupdatestreamingdistributionrequest"></a>
<a id="tocsupdatestreamingdistributionrequest"></a>

```json
{
  "StreamingDistributionConfig": {
    "CallerReference": {},
    "S3Origin": {
      "DomainName": {},
      "OriginAccessIdentity": {}
    },
    "Aliases": {
      "Quantity": {},
      "Items": {}
    },
    "Comment": {},
    "Logging": {
      "Enabled": {},
      "Bucket": {},
      "Prefix": {}
    },
    "TrustedSigners": {
      "Enabled": {},
      "Quantity": {},
      "Items": {}
    },
    "PriceClass": {},
    "Enabled": {}
  }
}
```

The request to update a streaming distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StreamingDistributionConfig|object|true|none|none|
