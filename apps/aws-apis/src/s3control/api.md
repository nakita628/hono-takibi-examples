<h1 id="aws-s3-control">AWS S3 Control v2018-08-20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

 Amazon Web Services S3 Control provides access to Amazon S3 control plane actions.

Base URLs:

* <a href="http://s3-control.us-east-1.amazonaws.com">http://s3-control.us-east-1.amazonaws.com</a> - The AWS S3 Control multi-region endpoint

* <a href="https://s3-control.us-east-1.amazonaws.com">https://s3-control.us-east-1.amazonaws.com</a> - The AWS S3 Control multi-region endpoint

* <a href="http://s3-control.cn-north-1.amazonaws.com.cn">http://s3-control.cn-north-1.amazonaws.com.cn</a> - The AWS S3 Control endpoint for China (Beijing) and China (Ningxia)

* <a href="https://s3-control.cn-north-1.amazonaws.com.cn">https://s3-control.cn-north-1.amazonaws.com.cn</a> - The AWS S3 Control endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/s3-control/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-s3-control-default">Default</h1>

## GetAccessPoint

<a id="opIdGetAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspoint/{name}#x-amz-account-id`

<p>Returns configuration information about the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>

<h3 id="getaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the account that owns the specified access point.|
|name|path|string|true|<p>The name of the access point whose configuration information you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointResult](#schemagetaccesspointresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessPoint

<a id="opIdCreateAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Bucket":"string","VpcConfiguration":{"VpcId":{}},"PublicAccessBlockConfiguration":{"BlockPublicAcls":{},"IgnorePublicAcls":{},"BlockPublicPolicy":{},"RestrictPublicBuckets":{}},"BucketAccountId":"string"}'
```

`PUT /v20180820/accesspoint/{name}#x-amz-account-id`

<p>Creates an access point and associates it with the specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <note> <p>S3 on Outposts only supports VPC-style access points. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points</a> in the <i>Amazon S3 User Guide</i>.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p> <p/> <p>The following actions are related to <code>CreateAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>

> Body parameter

```json
{
  "Bucket": "string",
  "VpcConfiguration": {
    "VpcId": {}
  },
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "BucketAccountId": "string"
}
```

<h3 id="createaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the account that owns the specified access point.|
|name|path|string|true|The name you want to assign to this access point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Bucket|body|string|true|<p>The name of the bucket that you want to associate this access point with.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|» VpcConfiguration|body|object|false|The virtual private cloud (VPC) configuration for an access point.|
|» » VpcId|body|object|false|none|
|» PublicAccessBlockConfiguration|body|object|false|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|» » BlockPublicAcls|body|object|false|none|
|» » IgnorePublicAcls|body|object|false|none|
|» » BlockPublicPolicy|body|object|false|none|
|» » RestrictPublicBuckets|body|object|false|none|
|» BucketAccountId|body|string|false|The Amazon Web Services account ID associated with the S3 bucket associated with this access point.|

<h3 id="createaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessPointResult](#schemacreateaccesspointresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPoint

<a id="opIdDeleteAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/accesspoint/{name}#x-amz-account-id`

<p>Deletes the specified access point.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html#API_control_DeleteAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a> </p> </li> </ul>

<h3 id="deleteaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the account that owns the specified access point.|
|name|path|string|true|<p>The name of the access point you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointForObjectLambda

<a id="opIdGetAccessPointForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspointforobjectlambda/{name}#x-amz-account-id`

<p>Returns configuration information about the specified Object Lambda Access Point</p> <p>The following actions are related to <code>GetAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>

<h3 id="getaccesspointforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointForObjectLambdaResult](#schemagetaccesspointforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAccessPointForObjectLambda

<a id="opIdCreateAccessPointForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Configuration":{"SupportingAccessPoint":{},"CloudWatchMetricsEnabled":{},"AllowedFeatures":{},"TransformationConfigurations":{}}}'
```

`PUT /v20180820/accesspointforobjectlambda/{name}#x-amz-account-id`

<p>Creates an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>CreateAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>

> Body parameter

```json
{
  "Configuration": {
    "SupportingAccessPoint": {},
    "CloudWatchMetricsEnabled": {},
    "AllowedFeatures": {},
    "TransformationConfigurations": {}
  }
}
```

<h3 id="createaccesspointforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for owner of the specified Object Lambda Access Point.|
|name|path|string|true|The name you want to assign to this Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Configuration|body|object|true|A configuration used when creating an Object Lambda Access Point.|
|» » SupportingAccessPoint|body|object|false|none|
|» » CloudWatchMetricsEnabled|body|object|false|none|
|» » AllowedFeatures|body|object|false|none|
|» » TransformationConfigurations|body|object|false|none|
|» Actions|body|object|true|none|
|» ContentTransformation|body|object|true|none|
|» » AwsLambda|body|object|false|none|
|» » » FunctionArn|body|object|true|none|
|» » » FunctionPayload|body|object|false|none|

<h3 id="createaccesspointforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAccessPointForObjectLambdaResult](#schemacreateaccesspointforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPointForObjectLambda

<a id="opIdDeleteAccessPointForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/accesspointforobjectlambda/{name}#x-amz-account-id`

<p>Deletes the specified Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a> </p> </li> </ul>

<h3 id="deleteaccesspointforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the access point you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteaccesspointforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateBucket

<a id="opIdCreateBucket"></a>

> Code samples

```bash
curl https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -d '{"CreateBucketConfiguration":{"LocationConstraint":{}}}'
```

`PUT /v20180820/bucket/{name}`

<note> <p>This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">Create Bucket</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>Not every string is an acceptable bucket name. For information on bucket naming restrictions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules">Working with Amazon S3 Buckets</a>.</p> <p>S3 on Outposts buckets support:</p> <ul> <li> <p>Tags</p> </li> <li> <p>LifecycleConfigurations for deleting expired objects</p> </li> </ul> <p>For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html"> Amazon S3 on Outposts Restrictions and Limitations</a>.</p> <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and <code>x-amz-outpost-id</code> in your API request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html#API_control_CreateBucket_Examples">Examples</a> section.</p> <p>The following actions are related to <code>CreateBucket</code> for Amazon S3 on Outposts:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> </ul>

> Body parameter

```json
{
  "CreateBucketConfiguration": {
    "LocationConstraint": {}
  }
}
```

<h3 id="createbucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-acl|header|string|false|<p>The canned ACL to apply to the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|name|path|string|true|The name of the bucket.|
|x-amz-grant-full-control|header|string|false|<p>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-grant-read|header|string|false|<p>Allows grantee to list the objects in the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-grant-read-acp|header|string|false|<p>Allows grantee to read the bucket ACL.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-grant-write|header|string|false|<p>Allows grantee to create, overwrite, and delete any object in the bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-grant-write-acp|header|string|false|<p>Allows grantee to write the ACL for the applicable bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-bucket-object-lock-enabled|header|boolean|false|<p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|x-amz-outpost-id|header|string|false|<p>The ID of the Outposts where the bucket is being created.</p> <note> <p>This ID is required by Amazon S3 on Outposts buckets.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CreateBucketConfiguration|body|object|false|<p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|» » LocationConstraint|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|x-amz-acl|private|
|x-amz-acl|public-read|
|x-amz-acl|public-read-write|
|x-amz-acl|authenticated-read|

<h3 id="createbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBucketResult](#schemacreatebucketresult)|
|480|480|BucketAlreadyExists|[BucketAlreadyExists](#schemabucketalreadyexists)|
|481|481|BucketAlreadyOwnedByYou|[BucketAlreadyOwnedByYou](#schemabucketalreadyownedbyyou)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobs

<a id="opIdListJobs"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/jobs#x-amz-account-id`

<p>Lists current S3 Batch Operations jobs and jobs that have ended within the last 30 days for the Amazon Web Services account making the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Related actions include:</p> <p/> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>

<h3 id="listjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|jobStatuses|query|[[JobStatus](#schemajobstatus)]|false|The <code>List Jobs</code> request returns jobs that match the statuses listed in this element.|
|nextToken|query|string|false|A pagination token to request the next page of results. Use the token that Amazon S3 returned in the <code>NextToken</code> element of the <code>ListJobsResult</code> from the previous <code>List Jobs</code> request.|
|maxResults|query|integer|false|The maximum number of jobs that Amazon S3 will include in the <code>List Jobs</code> response. If there are more jobs than this number, the response will include a pagination token in the <code>NextToken</code> field to enable you to retrieve the next page of results.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
|jobStatuses|Active|
|jobStatuses|Cancelled|
|jobStatuses|Cancelling|
|jobStatuses|Complete|
|jobStatuses|Completing|
|jobStatuses|Failed|
|jobStatuses|Failing|
|jobStatuses|New|
|jobStatuses|Paused|
|jobStatuses|Pausing|
|jobStatuses|Preparing|
|jobStatuses|Ready|
|jobStatuses|Suspended|

<h3 id="listjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsResult](#schemalistjobsresult)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|482|482|InvalidNextTokenException|[InvalidNextTokenException](#schemainvalidnexttokenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJob

<a id="opIdCreateJob"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs#x-amz-account-id' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"ConfirmationRequired":true,"Operation":{"LambdaInvoke":{"FunctionArn":{}},"S3PutObjectCopy":{"TargetResource":{},"CannedAccessControlList":{},"AccessControlGrants":{},"MetadataDirective":{},"ModifiedSinceConstraint":{},"NewObjectMetadata":{"CacheControl":{},"ContentDisposition":{},"ContentEncoding":{},"ContentLanguage":{},"UserMetadata":{"property1":"string","property2":"string"},"ContentLength":{},"ContentMD5":{},"ContentType":{},"HttpExpiresDate":{},"RequesterCharged":{},"SSEAlgorithm":{}},"NewObjectTagging":{},"RedirectLocation":{},"RequesterPays":{},"StorageClass":{},"UnModifiedSinceConstraint":{},"SSEAwsKmsKeyId":{},"TargetKeyPrefix":{},"ObjectLockLegalHoldStatus":{},"ObjectLockMode":{},"ObjectLockRetainUntilDate":{},"BucketKeyEnabled":{},"ChecksumAlgorithm":{}},"S3PutObjectAcl":{"AccessControlPolicy":{"AccessControlList":{"Owner":{"ID":{},"DisplayName":{}},"Grants":{}},"CannedAccessControlList":{}}},"S3PutObjectTagging":{"TagSet":{}},"S3DeleteObjectTagging":{},"S3InitiateRestoreObject":{"ExpirationInDays":{},"GlacierJobTier":{}},"S3PutObjectLegalHold":{"LegalHold":{"Status":{}}},"S3PutObjectRetention":{"BypassGovernanceRetention":{},"Retention":{"RetainUntilDate":{},"Mode":{}}},"S3ReplicateObject":{}},"Report":{"Bucket":{},"Format":{},"Enabled":{},"Prefix":{},"ReportScope":{}},"ClientRequestToken":"string","Manifest":{"Spec":{"Format":{},"Fields":{}},"Location":{"ObjectArn":{},"ObjectVersionId":{},"ETag":{}}},"Description":"string","Priority":0,"RoleArn":"string","Tags":[{"Key":{},"Value":{}}],"ManifestGenerator":{"S3JobManifestGenerator":{"ExpectedBucketOwner":{},"SourceBucket":{},"ManifestOutputLocation":{"ExpectedManifestBucketOwner":{},"Bucket":{},"ManifestPrefix":{},"ManifestEncryption":{"SSES3":{},"SSEKMS":{"KeyId":{}}},"ManifestFormat":{}},"Filter":{"EligibleForReplication":{},"CreatedAfter":{},"CreatedBefore":{},"ObjectReplicationStatuses":{}},"EnableManifestOutput":{}}}}'
```

`POST /v20180820/jobs#x-amz-account-id`

<p>You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action creates a S3 Batch Operations job.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_JobOperation.html">JobOperation</a> </p> </li> </ul>

> Body parameter

```json
{
  "ConfirmationRequired": true,
  "Operation": {
    "LambdaInvoke": {
      "FunctionArn": {}
    },
    "S3PutObjectCopy": {
      "TargetResource": {},
      "CannedAccessControlList": {},
      "AccessControlGrants": {},
      "MetadataDirective": {},
      "ModifiedSinceConstraint": {},
      "NewObjectMetadata": {
        "CacheControl": {},
        "ContentDisposition": {},
        "ContentEncoding": {},
        "ContentLanguage": {},
        "UserMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "ContentLength": {},
        "ContentMD5": {},
        "ContentType": {},
        "HttpExpiresDate": {},
        "RequesterCharged": {},
        "SSEAlgorithm": {}
      },
      "NewObjectTagging": {},
      "RedirectLocation": {},
      "RequesterPays": {},
      "StorageClass": {},
      "UnModifiedSinceConstraint": {},
      "SSEAwsKmsKeyId": {},
      "TargetKeyPrefix": {},
      "ObjectLockLegalHoldStatus": {},
      "ObjectLockMode": {},
      "ObjectLockRetainUntilDate": {},
      "BucketKeyEnabled": {},
      "ChecksumAlgorithm": {}
    },
    "S3PutObjectAcl": {
      "AccessControlPolicy": {
        "AccessControlList": {
          "Owner": {
            "ID": {},
            "DisplayName": {}
          },
          "Grants": {}
        },
        "CannedAccessControlList": {}
      }
    },
    "S3PutObjectTagging": {
      "TagSet": {}
    },
    "S3DeleteObjectTagging": {},
    "S3InitiateRestoreObject": {
      "ExpirationInDays": {},
      "GlacierJobTier": {}
    },
    "S3PutObjectLegalHold": {
      "LegalHold": {
        "Status": {}
      }
    },
    "S3PutObjectRetention": {
      "BypassGovernanceRetention": {},
      "Retention": {
        "RetainUntilDate": {},
        "Mode": {}
      }
    },
    "S3ReplicateObject": {}
  },
  "Report": {
    "Bucket": {},
    "Format": {},
    "Enabled": {},
    "Prefix": {},
    "ReportScope": {}
  },
  "ClientRequestToken": "string",
  "Manifest": {
    "Spec": {
      "Format": {},
      "Fields": {}
    },
    "Location": {
      "ObjectArn": {},
      "ObjectVersionId": {},
      "ETag": {}
    }
  },
  "Description": "string",
  "Priority": 0,
  "RoleArn": "string",
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ],
  "ManifestGenerator": {
    "S3JobManifestGenerator": {
      "ExpectedBucketOwner": {},
      "SourceBucket": {},
      "ManifestOutputLocation": {
        "ExpectedManifestBucketOwner": {},
        "Bucket": {},
        "ManifestPrefix": {},
        "ManifestEncryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        },
        "ManifestFormat": {}
      },
      "Filter": {
        "EligibleForReplication": {},
        "CreatedAfter": {},
        "CreatedBefore": {},
        "ObjectReplicationStatuses": {}
      },
      "EnableManifestOutput": {}
    }
  }
}
```

<h3 id="createjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID that creates the job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConfirmationRequired|body|boolean|false|Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.|
|» Operation|body|object|true|The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>.|
|» » LambdaInvoke|body|object|false|none|
|» » » FunctionArn|body|object|false|none|
|» » S3PutObjectCopy|body|object|false|none|
|» » » TargetResource|body|object|false|none|
|» » » CannedAccessControlList|body|object|false|none|
|» » » AccessControlGrants|body|object|false|none|
|» » » MetadataDirective|body|object|false|none|
|» » » ModifiedSinceConstraint|body|object|false|none|
|» » » NewObjectMetadata|body|object|false|none|
|» » » » CacheControl|body|object|false|none|
|» » » » ContentDisposition|body|object|false|none|
|» » » » ContentEncoding|body|object|false|none|
|» » » » ContentLanguage|body|object|false|none|
|» » » » UserMetadata|body|object|false|none|
|» » » » » **additionalProperties**|body|[MaxLength1024String](#schemamaxlength1024string)|false|none|
|» » » » ContentLength|body|object|false|none|
|» » » » ContentMD5|body|object|false|none|
|» » » » ContentType|body|object|false|none|
|» » » » HttpExpiresDate|body|object|false|none|
|» » » » RequesterCharged|body|object|false|none|
|» » » » SSEAlgorithm|body|object|false|none|
|» » » NewObjectTagging|body|object|false|none|
|» » » RedirectLocation|body|object|false|none|
|» » » RequesterPays|body|object|false|none|
|» » » StorageClass|body|object|false|none|
|» » » UnModifiedSinceConstraint|body|object|false|none|
|» » » SSEAwsKmsKeyId|body|object|false|none|
|» » » TargetKeyPrefix|body|object|false|none|
|» » » ObjectLockLegalHoldStatus|body|object|false|none|
|» » » ObjectLockMode|body|object|false|none|
|» » » ObjectLockRetainUntilDate|body|object|false|none|
|» » » BucketKeyEnabled|body|object|false|none|
|» » » ChecksumAlgorithm|body|object|false|none|
|» » S3PutObjectAcl|body|object|false|none|
|» » » AccessControlPolicy|body|object|false|none|
|» » » » AccessControlList|body|object|false|none|
|» » » » » Owner|body|object|true|none|
|» » » » » » ID|body|object|false|none|
|» » » » » » DisplayName|body|object|false|none|
|» » » » » Grants|body|object|false|none|
|» » » » CannedAccessControlList|body|object|false|none|
|» » S3PutObjectTagging|body|object|false|none|
|» » » TagSet|body|object|false|none|
|» » S3DeleteObjectTagging|body|object|false|none|
|» » S3InitiateRestoreObject|body|object|false|none|
|» » » ExpirationInDays|body|object|false|none|
|» » » GlacierJobTier|body|object|false|none|
|» » S3PutObjectLegalHold|body|[S3SetObjectLegalHoldOperation](#schemas3setobjectlegalholdoperation)|false|Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.|
|» » S3PutObjectRetention|body|[S3SetObjectRetentionOperation](#schemas3setobjectretentionoperation)|false|Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.|
|» » S3ReplicateObject|body|object|false|none|
|» Report|body|object|true|Contains the configuration parameters for a job-completion report.|
|» » Bucket|body|object|false|none|
|» » Format|body|object|false|none|
|» » Enabled|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » ReportScope|body|object|false|none|
|» ClientRequestToken|body|string|true|An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.|
|» Manifest|body|object|false|Contains the configuration information for a job's manifest.|
|» » Spec|body|object|false|none|
|» » » Format|body|object|true|none|
|» » » Fields|body|object|false|none|
|» » Location|body|object|false|none|
|» » » ObjectArn|body|object|true|none|
|» » » ObjectVersionId|body|object|false|none|
|» » » ETag|body|object|true|none|
|» Description|body|string|false|A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.|
|» Priority|body|integer|true|The numerical priority for this job. Higher numbers indicate higher priority.|
|» RoleArn|body|string|true|The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role that Batch Operations will use to run this job's action on every object in the manifest.|
|» Tags|body|[[S3Tag](#schemas3tag)]|false|A set of tags to associate with the S3 Batch Operations job. This is an optional parameter. |
|» ManifestGenerator|body|object|false|Configures the type of the job's ManifestGenerator.|
|» » S3JobManifestGenerator|body|object|false|none|
|» » » ExpectedBucketOwner|body|object|false|none|
|» » » SourceBucket|body|object|true|none|
|» » » ManifestOutputLocation|body|object|false|none|
|» » » » ExpectedManifestBucketOwner|body|object|false|none|
|» » » » Bucket|body|object|true|none|
|» » » » ManifestPrefix|body|object|false|none|
|» » » » ManifestEncryption|body|object|false|none|
|» » » » » SSES3|body|object|false|none|
|» » » » » SSEKMS|body|object|false|none|
|» » » » » » KeyId|body|object|true|none|
|» » » » ManifestFormat|body|object|true|none|
|» » » Filter|body|object|false|none|
|» » » » EligibleForReplication|body|object|false|none|
|» » » » CreatedAfter|body|object|false|none|
|» » » » CreatedBefore|body|object|false|none|
|» » » » ObjectReplicationStatuses|body|object|false|none|
|» » » EnableManifestOutput|body|object|true|none|

<h3 id="createjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateJobResult](#schemacreatejobresult)|
|480|480|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|IdempotencyException|[IdempotencyException](#schemaidempotencyexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMultiRegionAccessPoint

<a id="opIdCreateMultiRegionAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/async-requests/mrap/create#x-amz-account-id' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"ClientToken":"string","Details":{"Name":{},"PublicAccessBlock":{"BlockPublicAcls":{},"IgnorePublicAcls":{},"BlockPublicPolicy":{},"RestrictPublicBuckets":{}},"Regions":{}}}'
```

`POST /v20180820/async-requests/mrap/create#x-amz-account-id`

<p>Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html">Creating Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with <code>DescribeMultiRegionAccessPointOperation</code>.</p> <p>The following actions are related to <code>CreateMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>

> Body parameter

```json
{
  "ClientToken": "string",
  "Details": {
    "Name": {},
    "PublicAccessBlock": {
      "BlockPublicAcls": {},
      "IgnorePublicAcls": {},
      "BlockPublicPolicy": {},
      "RestrictPublicBuckets": {}
    },
    "Regions": {}
  }
}
```

<h3 id="createmultiregionaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point. The owner of the Multi-Region Access Point also must own the underlying buckets.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientToken|body|string|true|An idempotency token used to identify the request and guarantee that requests are unique.|
|» Details|body|object|true|A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request. |
|» » Name|body|object|false|none|
|» » PublicAccessBlock|body|[PublicAccessBlockConfiguration](#schemapublicaccessblockconfiguration)|false|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|» » Regions|body|object|false|none|
|» Bucket|body|object|true|none|
|» BucketAccountId|body|object|false|none|

<h3 id="createmultiregionaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMultiRegionAccessPointResult](#schemacreatemultiregionaccesspointresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointPolicy

<a id="opIdGetAccessPointPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string/policy#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspoint/{name}/policy#x-amz-account-id`

<p>Returns the access point policy associated with the specified access point.</p> <p>The following actions are related to <code>GetAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a> </p> </li> </ul>

<h3 id="getaccesspointpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified access point.|
|name|path|string|true|<p>The name of the access point whose policy you want to retrieve.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointPolicyResult](#schemagetaccesspointpolicyresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccessPointPolicy

<a id="opIdPutAccessPointPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string/policy#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Policy":"string"}'
```

`PUT /v20180820/accesspoint/{name}/policy#x-amz-account-id`

<p>Associates an access policy with the specified access point. Each access point can have only one policy, so a request made to this API replaces any existing policy associated with the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html#API_control_PutAccessPointPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html">DeleteAccessPointPolicy</a> </p> </li> </ul>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putaccesspointpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for owner of the bucket associated with the specified access point.|
|name|path|string|true|<p>The name of the access point that you want to associate with the specified policy.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|The policy that you want to apply to the specified access point. For more information about access point policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing data access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.|

<h3 id="putaccesspointpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPointPolicy

<a id="opIdDeleteAccessPointPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string/policy#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/accesspoint/{name}/policy#x-amz-account-id`

<p>Deletes the access point policy for the specified access point.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html#API_control_DeleteAccessPointPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html">PutAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html">GetAccessPointPolicy</a> </p> </li> </ul>

<h3 id="deleteaccesspointpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified access point.|
|name|path|string|true|<p>The name of the access point whose policy you want to delete.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/accesspoint/&lt;my-accesspoint-name&gt;</code>. For example, to access the access point <code>reports-ap</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteaccesspointpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointPolicyForObjectLambda

<a id="opIdGetAccessPointPolicyForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/policy#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id`

<p>Returns the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>

<h3 id="getaccesspointpolicyforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointpolicyforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointPolicyForObjectLambdaResult](#schemagetaccesspointpolicyforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccessPointPolicyForObjectLambda

<a id="opIdPutAccessPointPolicyForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/policy#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Policy":"string"}'
```

`PUT /v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id`

<p>Creates or replaces resource policy for an Object Lambda Access Point. For an example policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html#olap-create-cli">Creating Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>PutAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html">DeleteAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a> </p> </li> </ul>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putaccesspointpolicyforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|Object Lambda Access Point resource policy document.|

<h3 id="putaccesspointpolicyforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAccessPointPolicyForObjectLambda

<a id="opIdDeleteAccessPointPolicyForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/policy#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/accesspointforobjectlambda/{name}/policy#x-amz-account-id`

<p>Removes the resource policy for an Object Lambda Access Point.</p> <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a> </p> </li> </ul>

<h3 id="deleteaccesspointpolicyforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point you want to delete the policy for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deleteaccesspointpolicyforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucket

<a id="opIdGetBucket"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}#x-amz-account-id`

<p>Gets an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html"> Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the <code>s3-outposts:GetBucket</code> permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. </p> <p> If you don't have <code>s3-outposts:GetBucket</code> permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <p>The following actions are related to <code>GetBucket</code> for Amazon S3 on Outposts:</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html#API_control_GetBucket_Examples">Examples</a> section.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html">DeleteBucket</a> </p> </li> </ul>

<h3 id="getbucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketResult](#schemagetbucketresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucket

<a id="opIdDeleteBucket"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/bucket/{name}#x-amz-account-id`

<note> <p>This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html#API_control_DeleteBucket_Examples">Examples</a> section.</p> <p class="title"> <b>Related Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html">CreateBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html">GetBucket</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a> </p> </li> </ul>

<h3 id="deletebucket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID that owns the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket being deleted.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletebucket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketLifecycleConfiguration

<a id="opIdGetBucketLifecycleConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/lifecycleconfiguration#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id`

<note> <p>This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the lifecycle configuration information set on the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> and for information about lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html"> Object Lifecycle Management</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:GetLifecycleConfiguration</code> action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3 Resources</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html#API_control_GetBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p> <code>GetBucketLifecycleConfiguration</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchLifecycleConfiguration</code> </p> <ul> <li> <p>Description: The lifecycle configuration does not exist.</p> </li> <li> <p>HTTP Status Code: 404 Not Found</p> </li> <li> <p>SOAP Fault Code Prefix: Client</p> </li> </ul> </li> </ul> <p>The following actions are related to <code>GetBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a> </p> </li> </ul>

<h3 id="getbucketlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbucketlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketLifecycleConfigurationResult](#schemagetbucketlifecycleconfigurationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketLifecycleConfiguration

<a id="opIdPutBucketLifecycleConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/lifecycleconfiguration#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"LifecycleConfiguration":{"Rules":{}}}'
```

`PUT /v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id`

<note> <p>This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html#API_control_PutBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketLifecycleConfiguration</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html">DeleteBucketLifecycleConfiguration</a> </p> </li> </ul>

> Body parameter

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

<h3 id="putbucketlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|The name of the bucket for which to set the configuration.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» LifecycleConfiguration|body|object|false|The container for the Outposts bucket lifecycle configuration.|
|» » Rules|body|object|false|none|
|» Expiration|body|object|false|none|
|» » Date|body|object|false|none|
|» » Days|body|object|false|none|
|» » ExpiredObjectDeleteMarker|body|object|false|none|
|» ID|body|object|false|none|
|» Filter|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » Tag|body|[S3Tag](#schemas3tag)|false|A container for a key-value name pair.|
|» » And|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » Tags|body|object|false|none|
|» » » ObjectSizeGreaterThan|body|object|false|none|
|» » » ObjectSizeLessThan|body|object|false|none|
|» » ObjectSizeGreaterThan|body|object|false|none|
|» » ObjectSizeLessThan|body|object|false|none|
|» Status|body|object|true|none|
|» Transitions|body|object|false|none|
|» Date|body|object|false|none|
|» Days|body|object|false|none|
|» StorageClass|body|object|false|none|
|» NoncurrentVersionTransitions|body|object|false|none|
|» NoncurrentDays|body|object|false|none|
|» StorageClass|body|object|false|none|
|» NoncurrentVersionExpiration|body|object|false|none|
|» » NoncurrentDays|body|object|false|none|
|» » NewerNoncurrentVersions|body|object|false|none|
|» AbortIncompleteMultipartUpload|body|object|false|none|
|» » DaysAfterInitiation|body|object|false|none|

<h3 id="putbucketlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketLifecycleConfiguration

<a id="opIdDeleteBucketLifecycleConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/lifecycleconfiguration#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/bucket/{name}/lifecycleconfiguration#x-amz-account-id`

<note> <p>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketLifecycle.html">DeleteBucketLifecycle</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>s3-outposts:DeleteLifecycleConfiguration</code> action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketLifecycleConfiguration.html#API_control_DeleteBucketLifecycleConfiguration_Examples">Examples</a> section.</p> <p>For more information about object expiration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#intro-lifecycle-rules-actions">Elements to Describe Lifecycle Actions</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>

<h3 id="deletebucketlifecycleconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID of the lifecycle configuration to delete.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletebucketlifecycleconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketPolicy

<a id="opIdGetBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/policy#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}/policy#x-amz-account-id`

<note> <p>This action gets a bucket policy for an Amazon S3 on Outposts bucket. To get a policy for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html">GetBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the policy of a specified Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>GetBucketPolicy</code> permissions on the specified bucket and belong to the bucket owner's account in order to use this action.</p> <p>Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have <code>s3-outposts:GetBucketPolicy</code> permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>403 Access Denied</code> error.</p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html#API_control_GetBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a> </p> </li> </ul>

<h3 id="getbucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketPolicyResult](#schemagetbucketpolicyresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketPolicy

<a id="opIdPutBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/policy#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Policy":"string"}'
```

`PUT /v20180820/bucket/{name}/policy#x-amz-account-id`

<note> <p>This action puts a bucket policy to an Amazon S3 on Outposts bucket. To put a policy on an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html">PutBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Applies an Amazon S3 bucket policy to an Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the <code>PutBucketPolicy</code> permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this action.</p> <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error.</p> <important> <p> As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action. </p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html#API_control_PutBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html">DeleteBucketPolicy</a> </p> </li> </ul>

> Body parameter

```json
{
  "Policy": "string"
}
```

<h3 id="putbucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|x-amz-confirm-remove-self-bucket-access|header|boolean|false|<p>Set this parameter to true to confirm that you want to remove your permissions to change this bucket policy in the future.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Policy|body|string|true|The bucket policy as a JSON document.|

<h3 id="putbucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketPolicy

<a id="opIdDeleteBucketPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/policy#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/bucket/{name}/policy#x-amz-account-id`

<note> <p>This action deletes an Amazon S3 on Outposts bucket policy. To delete an S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>This implementation of the DELETE action uses the policy subresource to delete the policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the root user of the Amazon Web Services account that owns the bucket, the calling identity must have the <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket and belong to the bucket owner's account to use this action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403 Access Denied</code> error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not Allowed</code> error. </p> <important> <p>As a security precaution, the root user of the Amazon Web Services account that owns a bucket can always use this action, even if the policy explicitly denies the root user the ability to perform this action.</p> </important> <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a> </p> </li> </ul>

<h3 id="deletebucketpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletebucketpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketReplication

<a id="opIdGetBucketReplication"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/replication#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}/replication#x-amz-account-id`

<note> <p>This operation gets an Amazon S3 on Outposts bucket's replication configuration. To get an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html">GetBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the replication configuration of an S3 on Outposts bucket. For more information about S3 on Outposts, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>This action requires permissions for the <code>s3-outposts:GetReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html#API_control_GetBucketReplication_Examples">Examples</a> section.</p> <p>If you include the <code>Filter</code> element in a replication configuration, you must also include the <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code> elements. The response also returns those elements.</p> <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>GetBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>

<h3 id="getbucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket to get the replication information for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketReplicationResult](#schemagetbucketreplicationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketReplication

<a id="opIdPutBucketReplication"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/replication#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"ReplicationConfiguration":{"Role":{},"Rules":{}}}'
```

`PUT /v20180820/bucket/{name}/replication#x-amz-account-id`

<note> <p>This action creates an Amazon S3 on Outposts bucket's replication configuration. To create an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Creates a replication configuration or replaces an existing one. For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>Specify the replication configuration in the request body. In the replication configuration, you provide the following information:</p> <ul> <li> <p>The name of the destination bucket or buckets where you want S3 on Outposts to replicate objects</p> </li> <li> <p>The Identity and Access Management (IAM) role that S3 on Outposts can assume to replicate objects on your behalf</p> </li> <li> <p>Other relevant information, such as replication rules</p> </li> </ul> <p>A replication configuration must include at least one rule and can contain a maximum of 100. Each rule identifies a subset of objects to replicate by filtering the objects in the source Outposts bucket. To choose additional subsets of objects to replicate, add a rule for each subset.</p> <p>To specify a subset of the objects in the source Outposts bucket to apply a replication rule to, add the <code>Filter</code> element as a child of the <code>Rule</code> element. You can filter objects based on an object key prefix, one or more object tags, or both. When you add the <code>Filter</code> element in the configuration, you must also add the following elements: <code>DeleteMarkerReplication</code>, <code>Status</code>, and <code>Priority</code>.</p> <p>Using <code>PutBucketReplication</code> on Outposts requires that both the source and destination buckets must have versioning enabled. For information about enabling versioning on a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsManagingVersioning.html">Managing S3 Versioning for your S3 on Outposts bucket</a>.</p> <p>For information about S3 on Outposts replication failure reasons, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/outposts-replication-eventbridge.html#outposts-replication-failure-codes">Replication failure reasons</a> in the <i>Amazon S3 User Guide</i>.</p> <p> <b>Handling Replication of Encrypted Objects</b> </p> <p>Outposts buckets are encrypted at all times. All the objects in the source Outposts bucket are encrypted and can be replicated. Also, all the replicas in the destination Outposts bucket are encrypted with the same encryption key as the objects in the source Outposts bucket.</p> <p> <b>Permissions</b> </p> <p>To create a <code>PutBucketReplication</code> request, you must have <code>s3-outposts:PutReplicationConfiguration</code> permissions for the bucket. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts buckets</a>. </p> <note> <p>To perform this operation, the user or role must also have the <code>iam:CreateRole</code> and <code>iam:PassRole</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html#API_control_PutBucketReplication_Examples">Examples</a> section.</p> <p>The following operations are related to <code>PutBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html">DeleteBucketReplication</a> </p> </li> </ul>

> Body parameter

```json
{
  "ReplicationConfiguration": {
    "Role": {},
    "Rules": {}
  }
}
```

<h3 id="putbucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the S3 on Outposts bucket to set the configuration for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ReplicationConfiguration|body|object|true|A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.|
|» » Role|body|object|false|none|
|» » Rules|body|object|false|none|
|» ID|body|object|false|none|
|» Priority|body|object|false|none|
|» Prefix|body|object|false|none|
|» Filter|body|object|false|none|
|» » Prefix|body|object|false|none|
|» » Tag|body|[S3Tag](#schemas3tag)|false|A container for a key-value name pair.|
|» » And|body|object|false|none|
|» » » Prefix|body|object|false|none|
|» » » Tags|body|object|false|none|
|» Status|body|object|true|none|
|» SourceSelectionCriteria|body|object|false|none|
|» » SseKmsEncryptedObjects|body|object|false|none|
|» » » Status|body|object|true|none|
|» » ReplicaModifications|body|object|false|none|
|» » » Status|body|object|true|none|
|» ExistingObjectReplication|body|object|false|none|
|» » Status|body|object|true|none|
|» Destination|body|object|true|none|
|» » Account|body|object|false|none|
|» » Bucket|body|object|true|none|
|» » ReplicationTime|body|object|false|none|
|» » » Status|body|object|true|none|
|» » » Time|body|object|true|none|
|» » » » Minutes|body|object|false|none|
|» » AccessControlTranslation|body|object|false|none|
|» » » Owner|body|object|true|none|
|» » EncryptionConfiguration|body|object|false|none|
|» » » ReplicaKmsKeyID|body|object|false|none|
|» » Metrics|body|object|false|none|
|» » » Status|body|object|true|none|
|» » » EventThreshold|body|object|false|none|
|» » » » Minutes|body|object|false|none|
|» » StorageClass|body|object|false|none|
|» DeleteMarkerReplication|body|object|false|none|
|» » Status|body|object|true|none|
|» Bucket|body|object|true|none|

<h3 id="putbucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketReplication

<a id="opIdDeleteBucketReplication"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/replication#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/bucket/{name}/replication#x-amz-account-id`

<note> <p>This operation deletes an Amazon S3 on Outposts bucket's replication configuration. To delete an S3 bucket's replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the replication configuration from the specified S3 on Outposts bucket.</p> <p>To use this operation, you must have permissions to perform the <code>s3-outposts:PutReplicationConfiguration</code> action. The Outposts bucket owner has this permission by default and can grant it to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsIAM.html">Setting up IAM with S3 on Outposts</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsBucketPolicy.html">Managing access to S3 on Outposts buckets</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>It can take a while to propagate <code>PUT</code> or <code>DELETE</code> requests for a replication configuration to all S3 on Outposts systems. Therefore, the replication configuration that's returned by a <code>GET</code> request soon after a <code>PUT</code> or <code>DELETE</code> request might return a more recent result than what's on the Outpost. If an Outpost is offline, the delay in updating the replication configuration on that Outpost can be significant.</p> </note> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketReplication.html#API_control_DeleteBucketReplication_Examples">Examples</a> section.</p> <p>For information about S3 replication on Outposts configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html">Replicating objects for S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following operations are related to <code>DeleteBucketReplication</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketReplication.html">PutBucketReplication</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketReplication.html">GetBucketReplication</a> </p> </li> </ul>

<h3 id="deletebucketreplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket to delete the replication configuration for.|
|name|path|string|true|<p>Specifies the S3 on Outposts bucket to delete the replication configuration for.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletebucketreplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketTagging

<a id="opIdGetBucketTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/tagging#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}/tagging#x-amz-account-id`

<note> <p>This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the tag set associated with the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>GetBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others.</p> <p> <code>GetBucketTagging</code> has the following special error:</p> <ul> <li> <p>Error code: <code>NoSuchTagSetError</code> </p> <ul> <li> <p>Description: There is no tag set associated with the bucket.</p> </li> </ul> </li> </ul> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>GetBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>

<h3 id="getbuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>Specifies the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketTaggingResult](#schemagetbuckettaggingresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketTagging

<a id="opIdPutBucketTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/tagging#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Tagging":{"TagSet":{}}}'
```

`PUT /v20180820/bucket/{name}/tagging#x-amz-account-id`

<note> <p>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Sets the tags for an S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Cost allocation and tagging</a>.</p> <note> <p>Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html"> Using cost allocation in Amazon S3 bucket tags</a>.</p> </note> <p>To use this action, you must have permissions to perform the <code>s3-outposts:PutBucketTagging</code> action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing access permissions to your Amazon S3 resources</a>.</p> <p> <code>PutBucketTagging</code> has the following special errors:</p> <ul> <li> <p>Error code: <code>InvalidTagError</code> </p> <ul> <li> <p>Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html"> User-Defined Tag Restrictions</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/aws-tag-restrictions.html"> Amazon Web Services-Generated Cost Allocation Tag Restrictions</a>.</p> </li> </ul> </li> <li> <p>Error code: <code>MalformedXMLError</code> </p> <ul> <li> <p>Description: The XML provided does not match the schema.</p> </li> </ul> </li> <li> <p>Error code: <code>OperationAbortedError </code> </p> <ul> <li> <p>Description: A conflicting conditional action is currently in progress against this resource. Try again.</p> </li> </ul> </li> <li> <p>Error code: <code>InternalError</code> </p> <ul> <li> <p>Description: The service was unable to apply the provided tag to the bucket.</p> </li> </ul> </li> </ul> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html#API_control_PutBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>PutBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a> </p> </li> </ul>

> Body parameter

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

<h3 id="putbuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|name|path|string|true|<p>The Amazon Resource Name (ARN) of the bucket.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tagging|body|object|true|<p/>|
|» » TagSet|body|object|false|none|

<h3 id="putbuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteBucketTagging

<a id="opIdDeleteBucketTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/tagging#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/bucket/{name}/tagging#x-amz-account-id`

<note> <p>This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Deletes the tags from the Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in <i>Amazon S3 User Guide</i>.</p> <p>To use this action, you must have permission to perform the <code>PutBucketTagging</code> action. By default, the bucket owner has this permission and can grant this permission to others. </p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html#API_control_DeleteBucketTagging_Examples">Examples</a> section.</p> <p>The following actions are related to <code>DeleteBucketTagging</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html">GetBucketTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a> </p> </li> </ul>

<h3 id="deletebuckettagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket tag set to be removed.|
|name|path|string|true|<p>The bucket ARN that has the tag set to be removed.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletebuckettagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetJobTagging

<a id="opIdGetJobTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string/tagging#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/jobs/{id}/tagging#x-amz-account-id`

<p>Returns the tags on an S3 Batch Operations job. To use the <code>GetJobTagging</code> operation, you must have permission to perform the <code>s3:GetJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> </p> </li> </ul>

<h3 id="getjobtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID for the S3 Batch Operations job whose tags you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getjobtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetJobTaggingResult](#schemagetjobtaggingresult)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutJobTagging

<a id="opIdPutJobTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string/tagging#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Tags":[{"Key":{},"Value":{}}]}'
```

`PUT /v20180820/jobs/{id}/tagging#x-amz-account-id`

<p>Sets the supplied tag-set on an S3 Batch Operations job.</p> <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this action to replace the tag set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>. </p> <p/> <note> <ul> <li> <p>If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3 pricing</a>.</p> </li> <li> <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> request is preferred because it achieves the same result without incurring charges.</p> </li> <li> <p>A few things to consider about using tags:</p> <ul> <li> <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p> </li> <li> <p>You can associate up to 50 tags with a job as long as they have unique tag keys.</p> </li> <li> <p>A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.</p> </li> <li> <p>The key and values are case sensitive.</p> </li> <li> <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p> </li> </ul> </li> </ul> </note> <p/> <p>To use the <code>PutJobTagging</code> operation, you must have permission to perform the <code>s3:PutJobTagging</code> action.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a> </p> </li> </ul>

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="putjobtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID for the S3 Batch Operations job whose tags you want to replace.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[[S3Tag](#schemas3tag)]|true|The set of tags to associate with the S3 Batch Operations job.|

<h3 id="putjobtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutJobTaggingResult](#schemaputjobtaggingresult)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteJobTagging

<a id="opIdDeleteJobTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string/tagging#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/jobs/{id}/tagging#x-amz-account-id`

<p>Removes the entire tag set from the specified S3 Batch Operations job. To use the <code>DeleteJobTagging</code> operation, you must have permission to perform the <code>s3:DeleteJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a> </p> </li> </ul>

<h3 id="deletejobtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID for the S3 Batch Operations job whose tags you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletejobtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteJobTaggingResult](#schemadeletejobtaggingresult)|
|480|480|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMultiRegionAccessPoint

<a id="opIdDeleteMultiRegionAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/async-requests/mrap/delete#x-amz-account-id' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"ClientToken":"string","Details":{"Name":{}}}'
```

`POST /v20180820/async-requests/mrap/delete#x-amz-account-id`

<p>Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with <code>DescribeMultiRegionAccessPointOperation</code>.</p> <p>The following actions are related to <code>DeleteMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>

> Body parameter

```json
{
  "ClientToken": "string",
  "Details": {
    "Name": {}
  }
}
```

<h3 id="deletemultiregionaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientToken|body|string|true|An idempotency token used to identify the request and guarantee that requests are unique.|
|» Details|body|object|true|A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.|
|» » Name|body|object|false|none|

<h3 id="deletemultiregionaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMultiRegionAccessPointResult](#schemadeletemultiregionaccesspointresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPublicAccessBlock

<a id="opIdGetPublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/configuration/publicAccessBlock#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/configuration/publicAccessBlock#x-amz-account-id`

<p>Retrieves the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>

<h3 id="getpublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getpublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPublicAccessBlockOutput](#schemagetpublicaccessblockoutput)|
|480|480|NoSuchPublicAccessBlockConfiguration|[NoSuchPublicAccessBlockConfiguration](#schemanosuchpublicaccessblockconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutPublicAccessBlock

<a id="opIdPutPublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/configuration/publicAccessBlock#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"PublicAccessBlockConfiguration":{"BlockPublicAcls":{},"IgnorePublicAcls":{},"BlockPublicPolicy":{},"RestrictPublicBuckets":{}}}'
```

`PUT /v20180820/configuration/publicAccessBlock#x-amz-account-id`

<p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For this operation, users must have the <code>s3:PutAccountPublicAccessBlock</code> permission. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a> </p> </li> </ul>

> Body parameter

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

<h3 id="putpublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to set.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PublicAccessBlockConfiguration|body|object|true|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|» » BlockPublicAcls|body|object|false|none|
|» » IgnorePublicAcls|body|object|false|none|
|» » BlockPublicPolicy|body|object|false|none|
|» » RestrictPublicBuckets|body|object|false|none|

<h3 id="putpublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePublicAccessBlock

<a id="opIdDeletePublicAccessBlock"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/configuration/publicAccessBlock#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/configuration/publicAccessBlock#x-amz-account-id`

<p>Removes the <code>PublicAccessBlock</code> configuration for an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block public access</a>.</p> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html">PutPublicAccessBlock</a> </p> </li> </ul>

<h3 id="deletepublicaccessblock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the Amazon Web Services account whose <code>PublicAccessBlock</code> configuration you want to remove.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletepublicaccessblock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStorageLensConfiguration

<a id="opIdGetStorageLensConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/storagelens/{storagelensid}#x-amz-account-id`

<p>Gets the Amazon S3 Storage Lens configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

<h3 id="getstoragelensconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the Amazon S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getstoragelensconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStorageLensConfigurationResult](#schemagetstoragelensconfigurationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutStorageLensConfiguration

<a id="opIdPutStorageLensConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"StorageLensConfiguration":{"Id":{},"AccountLevel":{"ActivityMetrics":{"IsEnabled":{}},"BucketLevel":{"ActivityMetrics":{"IsEnabled":{}},"PrefixLevel":{"StorageMetrics":{"IsEnabled":{},"SelectionCriteria":{"Delimiter":{},"MaxDepth":{},"MinStorageBytesPercentage":{}}}},"AdvancedCostOptimizationMetrics":{"IsEnabled":{}},"AdvancedDataProtectionMetrics":{"IsEnabled":{}},"DetailedStatusCodesMetrics":{"IsEnabled":{}}},"AdvancedCostOptimizationMetrics":{"IsEnabled":{}},"AdvancedDataProtectionMetrics":{"IsEnabled":{}},"DetailedStatusCodesMetrics":{"IsEnabled":{}}},"Include":{"Buckets":{},"Regions":{}},"Exclude":{"Buckets":{},"Regions":{}},"DataExport":{"S3BucketDestination":{"Format":{},"OutputSchemaVersion":{},"AccountId":{},"Arn":{},"Prefix":{},"Encryption":{"SSES3":{},"SSEKMS":{"KeyId":{}}}},"CloudWatchMetrics":{"IsEnabled":{}}},"IsEnabled":{},"AwsOrg":{"Arn":{}},"StorageLensArn":{}},"Tags":[{"Key":{},"Value":{}}]}'
```

`PUT /v20180820/storagelens/{storagelensid}#x-amz-account-id`

<p>Puts an Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Working with Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:PutStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

> Body parameter

```json
{
  "StorageLensConfiguration": {
    "Id": {},
    "AccountLevel": {
      "ActivityMetrics": {
        "IsEnabled": {}
      },
      "BucketLevel": {
        "ActivityMetrics": {
          "IsEnabled": {}
        },
        "PrefixLevel": {
          "StorageMetrics": {
            "IsEnabled": {},
            "SelectionCriteria": {
              "Delimiter": {},
              "MaxDepth": {},
              "MinStorageBytesPercentage": {}
            }
          }
        },
        "AdvancedCostOptimizationMetrics": {
          "IsEnabled": {}
        },
        "AdvancedDataProtectionMetrics": {
          "IsEnabled": {}
        },
        "DetailedStatusCodesMetrics": {
          "IsEnabled": {}
        }
      },
      "AdvancedCostOptimizationMetrics": {
        "IsEnabled": {}
      },
      "AdvancedDataProtectionMetrics": {
        "IsEnabled": {}
      },
      "DetailedStatusCodesMetrics": {
        "IsEnabled": {}
      }
    },
    "Include": {
      "Buckets": {},
      "Regions": {}
    },
    "Exclude": {
      "Buckets": {},
      "Regions": {}
    },
    "DataExport": {
      "S3BucketDestination": {
        "Format": {},
        "OutputSchemaVersion": {},
        "AccountId": {},
        "Arn": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      },
      "CloudWatchMetrics": {
        "IsEnabled": {}
      }
    },
    "IsEnabled": {},
    "AwsOrg": {
      "Arn": {}
    },
    "StorageLensArn": {}
  },
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="putstoragelensconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» StorageLensConfiguration|body|object|true|A container for the Amazon S3 Storage Lens configuration.|
|» » Id|body|object|false|none|
|» » AccountLevel|body|object|false|none|
|» » » ActivityMetrics|body|object|false|none|
|» » » » IsEnabled|body|object|false|none|
|» » » BucketLevel|body|object|true|none|
|» » » » ActivityMetrics|body|object|false|none|
|» » » » » IsEnabled|body|object|false|none|
|» » » » PrefixLevel|body|object|false|none|
|» » » » » StorageMetrics|body|object|true|none|
|» » » » » » IsEnabled|body|object|false|none|
|» » » » » » SelectionCriteria|body|[SelectionCriteria](#schemaselectioncriteria)|false|<p/>|
|» » » » AdvancedCostOptimizationMetrics|body|object|false|none|
|» » » » » IsEnabled|body|object|false|none|
|» » » » AdvancedDataProtectionMetrics|body|object|false|none|
|» » » » » IsEnabled|body|object|false|none|
|» » » » DetailedStatusCodesMetrics|body|object|false|none|
|» » » » » IsEnabled|body|object|false|none|
|» » » AdvancedCostOptimizationMetrics|body|object|false|none|
|» » » » IsEnabled|body|object|false|none|
|» » » AdvancedDataProtectionMetrics|body|object|false|none|
|» » » » IsEnabled|body|object|false|none|
|» » » DetailedStatusCodesMetrics|body|object|false|none|
|» » » » IsEnabled|body|object|false|none|
|» » Include|body|object|false|none|
|» » » Buckets|body|object|false|none|
|» » » Regions|body|object|false|none|
|» » Exclude|body|object|false|none|
|» » » Buckets|body|object|false|none|
|» » » Regions|body|object|false|none|
|» » DataExport|body|object|false|none|
|» » » S3BucketDestination|body|object|false|none|
|» » » » Format|body|object|true|none|
|» » » » OutputSchemaVersion|body|object|true|none|
|» » » » AccountId|body|object|true|none|
|» » » » Arn|body|object|true|none|
|» » » » Prefix|body|object|false|none|
|» » » » Encryption|body|object|false|none|
|» » » » » SSES3|body|object|false|none|
|» » » » » SSEKMS|body|object|false|none|
|» » » » » » KeyId|body|object|true|none|
|» » » CloudWatchMetrics|body|object|false|none|
|» » » » IsEnabled|body|object|true|none|
|» » IsEnabled|body|object|false|none|
|» » AwsOrg|body|object|false|none|
|» » » Arn|body|object|true|none|
|» » StorageLensArn|body|object|false|none|
|» Tags|body|[object]|false|<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>|
|» » Key|body|object|true|none|
|» » Value|body|object|true|none|

<h3 id="putstoragelensconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStorageLensConfiguration

<a id="opIdDeleteStorageLensConfiguration"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/storagelens/{storagelensid}#x-amz-account-id`

<p>Deletes the Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfiguration</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

<h3 id="deletestoragelensconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletestoragelensconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetStorageLensConfigurationTagging

<a id="opIdGetStorageLensConfigurationTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string/tagging#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id`

<p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:GetStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

<h3 id="getstoragelensconfigurationtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the Amazon S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getstoragelensconfigurationtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetStorageLensConfigurationTaggingResult](#schemagetstoragelensconfigurationtaggingresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutStorageLensConfigurationTagging

<a id="opIdPutStorageLensConfigurationTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string/tagging#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Tags":[{"Key":{},"Value":{}}]}'
```

`PUT /v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id`

<p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:PutStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

> Body parameter

```json
{
  "Tags": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="putstoragelensconfigurationtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|[object]|true|<p>The tag set of the S3 Storage Lens configuration.</p> <note> <p>You can set up to a maximum of 50 tags.</p> </note>|
|» » Key|body|object|true|none|
|» » Value|body|object|true|none|

<h3 id="putstoragelensconfigurationtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutStorageLensConfigurationTaggingResult](#schemaputstoragelensconfigurationtaggingresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteStorageLensConfigurationTagging

<a id="opIdDeleteStorageLensConfigurationTagging"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens/string/tagging#x-amz-account-id' \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`DELETE /v20180820/storagelens/{storagelensid}/tagging#x-amz-account-id`

<p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

<h3 id="deletestoragelensconfigurationtagging-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|storagelensid|path|string|true|The ID of the S3 Storage Lens configuration.|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="deletestoragelensconfigurationtagging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteStorageLensConfigurationTaggingResult](#schemadeletestoragelensconfigurationtaggingresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeJob

<a id="opIdDescribeJob"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/jobs/{id}#x-amz-account-id`

<p>Retrieves the configuration parameters and status for a Batch Operations job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html">UpdateJobPriority</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>

<h3 id="describejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID for the job whose information you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="describejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeJobResult](#schemadescribejobresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMultiRegionAccessPointOperation

<a id="opIdDescribeMultiRegionAccessPointOperation"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/async-requests/mrap/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/async-requests/mrap/{request_token}#x-amz-account-id`

<p>Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>

<h3 id="describemultiregionaccesspointoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|request_token|path|string|true|The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="describemultiregionaccesspointoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMultiRegionAccessPointOperationResult](#schemadescribemultiregionaccesspointoperationresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointConfigurationForObjectLambda

<a id="opIdGetAccessPointConfigurationForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/configuration#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspointforobjectlambda/{name}/configuration#x-amz-account-id`

<p>Returns configuration for an Object Lambda Access Point.</p> <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a> </p> </li> </ul>

<h3 id="getaccesspointconfigurationforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point you want to return the configuration for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointconfigurationforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointConfigurationForObjectLambdaResult](#schemagetaccesspointconfigurationforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutAccessPointConfigurationForObjectLambda

<a id="opIdPutAccessPointConfigurationForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/configuration#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"Configuration":{"SupportingAccessPoint":{},"CloudWatchMetricsEnabled":{},"AllowedFeatures":{},"TransformationConfigurations":{}}}'
```

`PUT /v20180820/accesspointforobjectlambda/{name}/configuration#x-amz-account-id`

<p>Replaces configuration for an Object Lambda Access Point.</p> <p>The following actions are related to <code>PutAccessPointConfigurationForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a> </p> </li> </ul>

> Body parameter

```json
{
  "Configuration": {
    "SupportingAccessPoint": {},
    "CloudWatchMetricsEnabled": {},
    "AllowedFeatures": {},
    "TransformationConfigurations": {}
  }
}
```

<h3 id="putaccesspointconfigurationforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Configuration|body|object|true|A configuration used when creating an Object Lambda Access Point.|
|» » SupportingAccessPoint|body|object|false|none|
|» » CloudWatchMetricsEnabled|body|object|false|none|
|» » AllowedFeatures|body|object|false|none|
|» » TransformationConfigurations|body|object|false|none|
|» Actions|body|object|true|none|
|» ContentTransformation|body|object|true|none|
|» » AwsLambda|body|object|false|none|
|» » » FunctionArn|body|object|true|none|
|» » » FunctionPayload|body|object|false|none|

<h3 id="putaccesspointconfigurationforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointPolicyStatus

<a id="opIdGetAccessPointPolicyStatus"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint/string/policyStatus#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspoint/{name}/policyStatus#x-amz-account-id`

Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.

<h3 id="getaccesspointpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified access point.|
|name|path|string|true|The name of the access point whose policy status you want to retrieve.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointPolicyStatusResult](#schemagetaccesspointpolicystatusresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAccessPointPolicyStatusForObjectLambda

<a id="opIdGetAccessPointPolicyStatusForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda/string/policyStatus#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspointforobjectlambda/{name}/policyStatus#x-amz-account-id`

Returns the status of the resource policy associated with an Object Lambda Access Point.

<h3 id="getaccesspointpolicystatusforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|name|path|string|true|The name of the Object Lambda Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getaccesspointpolicystatusforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAccessPointPolicyStatusForObjectLambdaResult](#schemagetaccesspointpolicystatusforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBucketVersioning

<a id="opIdGetBucketVersioning"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/versioning#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket/{name}/versioning#x-amz-account-id`

<note> <p>This operation returns the versioning state for S3 on Outposts buckets only. To return the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Returns the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.</p> <p>If you've never set versioning on your bucket, it has no versioning state. In that case, the <code>GetBucketVersioning</code> request does not return a versioning state value.</p> <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html#API_control_GetBucketVersioning_Examples">Examples</a> section.</p> <p>The following operations are related to <code>GetBucketVersioning</code> for S3 on Outposts.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>

<h3 id="getbucketversioning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the S3 on Outposts bucket.|
|name|path|string|true|The S3 on Outposts bucket to return the versioning state for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getbucketversioning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBucketVersioningResult](#schemagetbucketversioningresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutBucketVersioning

<a id="opIdPutBucketVersioning"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket/string/versioning#x-amz-account-id' \
  -X PUT \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"VersioningConfiguration":{"MFADelete":{},"Status":{}}}'
```

`PUT /v20180820/bucket/{name}/versioning#x-amz-account-id`

<note> <p>This operation sets the versioning state for S3 on Outposts buckets only. To set the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p> </note> <p>Sets the versioning state for an S3 on Outposts bucket. With S3 Versioning, you can save multiple distinct copies of your objects and recover from unintended user actions and application failures.</p> <p>You can set the versioning state to one of the following:</p> <ul> <li> <p> <b>Enabled</b> - Enables versioning for the objects in the bucket. All objects added to the bucket receive a unique version ID.</p> </li> <li> <p> <b>Suspended</b> - Suspends versioning for the objects in the bucket. All objects added to the bucket receive the version ID <code>null</code>.</p> </li> </ul> <p>If you've never set versioning on your bucket, it has no versioning state. In that case, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html"> GetBucketVersioning</a> request does not return a versioning state value.</p> <p>When you enable S3 Versioning, for each object in your bucket, you have a current version and zero or more noncurrent versions. You can configure your bucket S3 Lifecycle rules to expire noncurrent versions after a specified time period. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsLifecycleManaging.html"> Creating and managing a lifecycle configuration for your S3 on Outposts bucket</a> in the <i>Amazon S3 User Guide</i>.</p> <p>If you have an object expiration lifecycle configuration in your non-versioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle configuration will manage the deletes of the noncurrent object versions in the version-enabled bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3 User Guide</i>.</p> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html#API_control_PutBucketVersioning_Examples">Examples</a> section.</p> <p>The following operations are related to <code>PutBucketVersioning</code> for S3 on Outposts.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html">GetBucketVersioning</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a> </p> </li> </ul>

> Body parameter

```json
{
  "VersioningConfiguration": {
    "MFADelete": {},
    "Status": {}
  }
}
```

<h3 id="putbucketversioning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the S3 on Outposts bucket.|
|name|path|string|true|The S3 on Outposts bucket to set the versioning state for.|
|x-amz-mfa|header|string|false|The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» VersioningConfiguration|body|object|true|Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.|
|» » MFADelete|body|object|false|none|
|» » Status|body|object|false|none|

<h3 id="putbucketversioning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMultiRegionAccessPoint

<a id="opIdGetMultiRegionAccessPoint"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances/string#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/mrap/instances/{name}#x-amz-account-id`

<p>Returns configuration information about the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html">ListMultiRegionAccessPoints</a> </p> </li> </ul>

<h3 id="getmultiregionaccesspoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|name|path|string|true|The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getmultiregionaccesspoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMultiRegionAccessPointResult](#schemagetmultiregionaccesspointresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMultiRegionAccessPointPolicy

<a id="opIdGetMultiRegionAccessPointPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances/string/policy#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/mrap/instances/{name}/policy#x-amz-account-id`

<p>Returns the access control policy of the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>

<h3 id="getmultiregionaccesspointpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|name|path|string|true|Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getmultiregionaccesspointpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMultiRegionAccessPointPolicyResult](#schemagetmultiregionaccesspointpolicyresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMultiRegionAccessPointPolicyStatus

<a id="opIdGetMultiRegionAccessPointPolicyStatus"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances/string/policystatus#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/mrap/instances/{name}/policystatus#x-amz-account-id`

<p>Indicates whether the specified Multi-Region Access Point has an access control policy that allows public access.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>GetMultiRegionAccessPointPolicyStatus</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a> </p> </li> </ul>

<h3 id="getmultiregionaccesspointpolicystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|name|path|string|true|Specifies the Multi-Region Access Point. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getmultiregionaccesspointpolicystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMultiRegionAccessPointPolicyStatusResult](#schemagetmultiregionaccesspointpolicystatusresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMultiRegionAccessPointRoutes

<a id="opIdGetMultiRegionAccessPointRoutes"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances/string/routes#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/mrap/instances/{mrap}/routes#x-amz-account-id`

<p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or passive.</p> <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:</p> <ul> <li> <p> <code>us-east-1</code> </p> </li> <li> <p> <code>us-west-2</code> </p> </li> <li> <p> <code>ap-southeast-2</code> </p> </li> <li> <p> <code>ap-northeast-1</code> </p> </li> <li> <p> <code>eu-west-1</code> </p> </li> </ul> <note> <p>Your Amazon S3 bucket does not need to be in these five Regions.</p> </note>

<h3 id="getmultiregionaccesspointroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|mrap|path|string|true|The Multi-Region Access Point ARN.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="getmultiregionaccesspointroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMultiRegionAccessPointRoutesResult](#schemagetmultiregionaccesspointroutesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SubmitMultiRegionAccessPointRoutes

<a id="opIdSubmitMultiRegionAccessPointRoutes"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances/string/routes#x-amz-account-id' \
  -X PATCH \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"RouteUpdates":[{"Bucket":{},"Region":{},"TrafficDialPercentage":{}}]}'
```

`PATCH /v20180820/mrap/instances/{mrap}/routes#x-amz-account-id`

<p>Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of <code>0</code> indicates a passive status, which means that traffic won't be routed to the specified Region. A value of <code>100</code> indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times.</p> <p>When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged.</p> <note> <p>Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.</p> </note> <p>To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:</p> <ul> <li> <p> <code>us-east-1</code> </p> </li> <li> <p> <code>us-west-2</code> </p> </li> <li> <p> <code>ap-southeast-2</code> </p> </li> <li> <p> <code>ap-northeast-1</code> </p> </li> <li> <p> <code>eu-west-1</code> </p> </li> </ul> <note> <p>Your Amazon S3 bucket does not need to be in these five Regions.</p> </note>

> Body parameter

```json
{
  "RouteUpdates": [
    {
      "Bucket": {},
      "Region": {},
      "TrafficDialPercentage": {}
    }
  ]
}
```

<h3 id="submitmultiregionaccesspointroutes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|mrap|path|string|true|The Multi-Region Access Point ARN.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» RouteUpdates|body|[object]|true|The different routes that make up the new route configuration. Active routes return a value of <code>100</code>, and passive routes return a value of <code>0</code>.|
|» » Bucket|body|object|false|none|
|» » Region|body|object|false|none|
|» » TrafficDialPercentage|body|object|true|none|

<h3 id="submitmultiregionaccesspointroutes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SubmitMultiRegionAccessPointRoutesResult](#schemasubmitmultiregionaccesspointroutesresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessPoints

<a id="opIdListAccessPoints"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspoint#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspoint#x-amz-account-id`

<p>Returns a list of the access points that are owned by the current account that's associated with the specified bucket. You can retrieve up to 1000 access points per call. If the specified bucket has more than 1,000 access points (or the number specified in <code>maxResults</code>, whichever is less), the response will include a continuation token that you can use to list the additional access points.</p> <p/> <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html#API_control_GetAccessPoint_Examples">Examples</a> section.</p> <p>The following actions are related to <code>ListAccessPoints</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html">CreateAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a> </p> </li> </ul>

<h3 id="listaccesspoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the account that owns the specified access points.|
|bucket|query|string|false|<p>The name of the bucket whose associated access points you want to list.</p> <p>For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well.</p> <p>For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format <code>arn:aws:s3-outposts:&lt;Region&gt;:&lt;account-id&gt;:outpost/&lt;outpost-id&gt;/bucket/&lt;my-bucket-name&gt;</code>. For example, to access the bucket <code>reports</code> through Outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports</code>. The value must be URL encoded. </p>|
|nextToken|query|string|false|A continuation token. If a previous call to <code>ListAccessPoints</code> returned a continuation token in the <code>NextToken</code> field, then providing that value here causes Amazon S3 to retrieve the next page of results.|
|maxResults|query|integer|false|The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listaccesspoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessPointsResult](#schemalistaccesspointsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAccessPointsForObjectLambda

<a id="opIdListAccessPointsForObjectLambda"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/accesspointforobjectlambda#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/accesspointforobjectlambda#x-amz-account-id`

<p>Returns some or all (up to 1,000) access points associated with the Object Lambda Access Point per call. If there are more access points than what can be returned in one call, the response will include a continuation token that you can use to list the additional access points.</p> <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a> </p> </li> </ul>

<h3 id="listaccesspointsforobjectlambda-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID for the account that owns the specified Object Lambda Access Point.|
|nextToken|query|string|false|If the list has more access points than can be returned in one call to this API, this field contains a continuation token that you can provide in subsequent calls to this API to retrieve additional access points.|
|maxResults|query|integer|false|The maximum number of access points that you want to include in the list. The response may contain fewer access points but will never contain more. If there are more than this number of access points, then the response will include a continuation token in the <code>NextToken</code> field that you can use to retrieve the next page of access points.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listaccesspointsforobjectlambda-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAccessPointsForObjectLambdaResult](#schemalistaccesspointsforobjectlambdaresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMultiRegionAccessPoints

<a id="opIdListMultiRegionAccessPoints"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/mrap/instances#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/mrap/instances#x-amz-account-id`

<p>Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>ListMultiRegionAccessPoint</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a> </p> </li> </ul>

<h3 id="listmultiregionaccesspoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|nextToken|query|string|false|Not currently used. Do not use this parameter.|
|maxResults|query|integer|false|Not currently used. Do not use this parameter.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listmultiregionaccesspoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMultiRegionAccessPointsResult](#schemalistmultiregionaccesspointsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRegionalBuckets

<a id="opIdListRegionalBuckets"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/bucket#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/bucket#x-amz-account-id`

<p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p> <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>

<h3 id="listregionalbuckets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID of the Outposts bucket.|
|nextToken|query|string|false|<p/>|
|maxResults|query|integer|false|<p/>|
|x-amz-outpost-id|header|string|false|<p>The ID of the Outposts resource.</p> <note> <p>This ID is required by Amazon S3 on Outposts buckets.</p> </note>|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="listregionalbuckets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRegionalBucketsResult](#schemalistregionalbucketsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListStorageLensConfigurations

<a id="opIdListStorageLensConfigurations"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/storagelens#x-amz-account-id' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`GET /v20180820/storagelens#x-amz-account-id`

<p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the <i>Amazon S3 User Guide</i>.</p> <note> <p>To use this action, you must have permission to perform the <code>s3:ListStorageLensConfigurations</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p> </note>

<h3 id="liststoragelensconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The account ID of the requester.|
|nextToken|query|string|false|A pagination token to request the next page of results.|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="liststoragelensconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListStorageLensConfigurationsResult](#schemaliststoragelensconfigurationsresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMultiRegionAccessPointPolicy

<a id="opIdPutMultiRegionAccessPointPolicy"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/async-requests/mrap/put-policy#x-amz-account-id' \
  -X POST \
  -H 'Content-Type: text/xml' \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string' \
  -d '{"ClientToken":"string","Details":{"Name":{},"Policy":{}}}'
```

`POST /v20180820/async-requests/mrap/put-policy#x-amz-account-id`

<p>Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only one policy, so a request made to this action replaces any existing policy that is associated with the specified Multi-Region Access Point.</p> <p>This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p> <p>The following actions are related to <code>PutMultiRegionAccessPointPolicy</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a> </p> </li> </ul>

> Body parameter

```json
{
  "ClientToken": "string",
  "Details": {
    "Name": {},
    "Policy": {}
  }
}
```

<h3 id="putmultiregionaccesspointpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID for the owner of the Multi-Region Access Point.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ClientToken|body|string|true|An idempotency token used to identify the request and guarantee that requests are unique.|
|» Details|body|object|true|A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.|
|» » Name|body|object|false|none|
|» » Policy|body|object|false|none|

<h3 id="putmultiregionaccesspointpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMultiRegionAccessPointPolicyResult](#schemaputmultiregionaccesspointpolicyresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJobPriority

<a id="opIdUpdateJobPriority"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string/priority#x-amz-account-id&priority?priority=0' \
  -X POST \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`POST /v20180820/jobs/{id}/priority#x-amz-account-id&priority`

<p>Updates an existing S3 Batch Operations job's priority. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>

<h3 id="updatejobpriority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID for the job whose priority you want to update.|
|priority|query|integer|true|The priority you want to assign to this job.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="updatejobpriority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobPriorityResult](#schemaupdatejobpriorityresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateJobStatus

<a id="opIdUpdateJobStatus"></a>

> Code samples

```bash
curl 'https://s3control.us-east-1.amazonaws.com/v20180820/jobs/string/status#x-amz-account-id&requestedJobStatus?requestedJobStatus=Cancelled' \
  -X POST \
  -H "Authorization: ${API_KEY}" \
  -H 'x-amz-account-id: string'
```

`POST /v20180820/jobs/{id}/status#x-amz-account-id&requestedJobStatus`

<p>Updates the status for the specified job. Use this action to confirm that you want to run a job or to cancel an existing job. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops.html">S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.</p> <p/> <p>Related actions include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html">ListJobs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html">DescribeJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html">UpdateJobStatus</a> </p> </li> </ul>

<h3 id="updatejobstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-amz-account-id|header|string|true|The Amazon Web Services account ID associated with the S3 Batch Operations job.|
|id|path|string|true|The ID of the job whose status you want to update.|
|requestedJobStatus|query|string|true|The status that you want to move the specified job to.|
|statusUpdateReason|query|string|false|A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.|
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
|requestedJobStatus|Cancelled|
|requestedJobStatus|Ready|

<h3 id="updatejobstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateJobStatusResult](#schemaupdatejobstatusresult)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|482|482|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|483|483|JobStatusException|[JobStatusException](#schemajobstatusexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateAccessPointResult">CreateAccessPointResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointresult"></a>
<a id="schema_CreateAccessPointResult"></a>
<a id="tocScreateaccesspointresult"></a>
<a id="tocscreateaccesspointresult"></a>

```json
{
  "AccessPointArn": {},
  "Alias": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPointArn|object|false|none|none|
|Alias|object|false|none|none|

<h2 id="tocS_VpcId">VpcId</h2>
<!-- backwards compatibility -->
<a id="schemavpcid"></a>
<a id="schema_VpcId"></a>
<a id="tocSvpcid"></a>
<a id="tocsvpcid"></a>

```json
"string"
```

<h2 id="tocS_Setting">Setting</h2>
<!-- backwards compatibility -->
<a id="schemasetting"></a>
<a id="schema_Setting"></a>
<a id="tocSsetting"></a>
<a id="tocssetting"></a>

```json
true
```

<h2 id="tocS_CreateAccessPointForObjectLambdaResult">CreateAccessPointForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointforobjectlambdaresult"></a>
<a id="schema_CreateAccessPointForObjectLambdaResult"></a>
<a id="tocScreateaccesspointforobjectlambdaresult"></a>
<a id="tocscreateaccesspointforobjectlambdaresult"></a>

```json
{
  "ObjectLambdaAccessPointArn": {},
  "Alias": {
    "Value": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectLambdaAccessPointArn|object|false|none|none|
|Alias|object|false|none|none|

<h2 id="tocS_ObjectLambdaSupportingAccessPointArn">ObjectLambdaSupportingAccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdasupportingaccesspointarn"></a>
<a id="schema_ObjectLambdaSupportingAccessPointArn"></a>
<a id="tocSobjectlambdasupportingaccesspointarn"></a>
<a id="tocsobjectlambdasupportingaccesspointarn"></a>

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

<h2 id="tocS_ObjectLambdaAllowedFeaturesList">ObjectLambdaAllowedFeaturesList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaallowedfeatureslist"></a>
<a id="schema_ObjectLambdaAllowedFeaturesList"></a>
<a id="tocSobjectlambdaallowedfeatureslist"></a>
<a id="tocsobjectlambdaallowedfeatureslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ObjectLambdaTransformationConfigurationsList">ObjectLambdaTransformationConfigurationsList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdatransformationconfigurationslist"></a>
<a id="schema_ObjectLambdaTransformationConfigurationsList"></a>
<a id="tocSobjectlambdatransformationconfigurationslist"></a>
<a id="tocsobjectlambdatransformationconfigurationslist"></a>

```json
[
  {
    "Actions": {},
    "ContentTransformation": {
      "AwsLambda": {
        "FunctionArn": {},
        "FunctionPayload": {}
      }
    }
  }
]
```

<h2 id="tocS_CreateBucketResult">CreateBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketresult"></a>
<a id="schema_CreateBucketResult"></a>
<a id="tocScreatebucketresult"></a>
<a id="tocscreatebucketresult"></a>

```json
{
  "BucketArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketArn|object|false|none|none|

<h2 id="tocS_BucketLocationConstraint">BucketLocationConstraint</h2>
<!-- backwards compatibility -->
<a id="schemabucketlocationconstraint"></a>
<a id="schema_BucketLocationConstraint"></a>
<a id="tocSbucketlocationconstraint"></a>
<a id="tocsbucketlocationconstraint"></a>

```json
"EU"
```

<h2 id="tocS_BucketAlreadyExists">BucketAlreadyExists</h2>
<!-- backwards compatibility -->
<a id="schemabucketalreadyexists"></a>
<a id="schema_BucketAlreadyExists"></a>
<a id="tocSbucketalreadyexists"></a>
<a id="tocsbucketalreadyexists"></a>

```json
null
```

<h2 id="tocS_BucketAlreadyOwnedByYou">BucketAlreadyOwnedByYou</h2>
<!-- backwards compatibility -->
<a id="schemabucketalreadyownedbyyou"></a>
<a id="schema_BucketAlreadyOwnedByYou"></a>
<a id="tocSbucketalreadyownedbyyou"></a>
<a id="tocsbucketalreadyownedbyyou"></a>

```json
null
```

<h2 id="tocS_CreateJobResult">CreateJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresult"></a>
<a id="schema_CreateJobResult"></a>
<a id="tocScreatejobresult"></a>
<a id="tocscreatejobresult"></a>

```json
{
  "JobId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|

<h2 id="tocS_LambdaInvokeOperation">LambdaInvokeOperation</h2>
<!-- backwards compatibility -->
<a id="schemalambdainvokeoperation"></a>
<a id="schema_LambdaInvokeOperation"></a>
<a id="tocSlambdainvokeoperation"></a>
<a id="tocslambdainvokeoperation"></a>

```json
{
  "FunctionArn": {}
}
```

Contains the configuration parameters for a <code>Lambda Invoke</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|false|none|none|

<h2 id="tocS_S3CopyObjectOperation">S3CopyObjectOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3copyobjectoperation"></a>
<a id="schema_S3CopyObjectOperation"></a>
<a id="tocSs3copyobjectoperation"></a>
<a id="tocss3copyobjectoperation"></a>

```json
{
  "TargetResource": {},
  "CannedAccessControlList": {},
  "AccessControlGrants": {},
  "MetadataDirective": {},
  "ModifiedSinceConstraint": {},
  "NewObjectMetadata": {
    "CacheControl": {},
    "ContentDisposition": {},
    "ContentEncoding": {},
    "ContentLanguage": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "ContentLength": {},
    "ContentMD5": {},
    "ContentType": {},
    "HttpExpiresDate": {},
    "RequesterCharged": {},
    "SSEAlgorithm": {}
  },
  "NewObjectTagging": {},
  "RedirectLocation": {},
  "RequesterPays": {},
  "StorageClass": {},
  "UnModifiedSinceConstraint": {},
  "SSEAwsKmsKeyId": {},
  "TargetKeyPrefix": {},
  "ObjectLockLegalHoldStatus": {},
  "ObjectLockMode": {},
  "ObjectLockRetainUntilDate": {},
  "BucketKeyEnabled": {},
  "ChecksumAlgorithm": {}
}
```

Contains the configuration parameters for a PUT Copy object operation. S3 Batch Operations passes every object to the underlying <code>CopyObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">CopyObject</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetResource|object|false|none|none|
|CannedAccessControlList|object|false|none|none|
|AccessControlGrants|object|false|none|none|
|MetadataDirective|object|false|none|none|
|ModifiedSinceConstraint|object|false|none|none|
|NewObjectMetadata|object|false|none|none|
|NewObjectTagging|object|false|none|none|
|RedirectLocation|object|false|none|none|
|RequesterPays|object|false|none|none|
|StorageClass|object|false|none|none|
|UnModifiedSinceConstraint|object|false|none|none|
|SSEAwsKmsKeyId|object|false|none|none|
|TargetKeyPrefix|object|false|none|none|
|ObjectLockLegalHoldStatus|object|false|none|none|
|ObjectLockMode|object|false|none|none|
|ObjectLockRetainUntilDate|object|false|none|none|
|BucketKeyEnabled|object|false|none|none|
|ChecksumAlgorithm|object|false|none|none|

<h2 id="tocS_S3SetObjectAclOperation">S3SetObjectAclOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3setobjectacloperation"></a>
<a id="schema_S3SetObjectAclOperation"></a>
<a id="tocSs3setobjectacloperation"></a>
<a id="tocss3setobjectacloperation"></a>

```json
{
  "AccessControlPolicy": {
    "AccessControlList": {
      "Owner": {
        "ID": {},
        "DisplayName": {}
      },
      "Grants": {}
    },
    "CannedAccessControlList": {}
  }
}
```

Contains the configuration parameters for a PUT Object ACL operation. S3 Batch Operations passes every object to the underlying <code>PutObjectAcl</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PutObjectAcl</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlPolicy|object|false|none|none|

<h2 id="tocS_S3SetObjectTaggingOperation">S3SetObjectTaggingOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3setobjecttaggingoperation"></a>
<a id="schema_S3SetObjectTaggingOperation"></a>
<a id="tocSs3setobjecttaggingoperation"></a>
<a id="tocss3setobjecttaggingoperation"></a>

```json
{
  "TagSet": {}
}
```

Contains the configuration parameters for a PUT Object Tagging operation. S3 Batch Operations passes every object to the underlying <code>PutObjectTagging</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PutObjectTagging</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|false|none|none|

<h2 id="tocS_S3DeleteObjectTaggingOperation">S3DeleteObjectTaggingOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3deleteobjecttaggingoperation"></a>
<a id="schema_S3DeleteObjectTaggingOperation"></a>
<a id="tocSs3deleteobjecttaggingoperation"></a>
<a id="tocss3deleteobjecttaggingoperation"></a>

```json
{}
```

Contains no configuration parameters because the DELETE Object tagging (<code>DeleteObjectTagging</code>) API operation accepts only the bucket name and key name as parameters, which are defined in the job's manifest.

<h2 id="tocS_S3InitiateRestoreObjectOperation">S3InitiateRestoreObjectOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3initiaterestoreobjectoperation"></a>
<a id="schema_S3InitiateRestoreObjectOperation"></a>
<a id="tocSs3initiaterestoreobjectoperation"></a>
<a id="tocss3initiaterestoreobjectoperation"></a>

```json
{
  "ExpirationInDays": {},
  "GlacierJobTier": {}
}
```

Contains the configuration parameters for a POST Object restore job. S3 Batch Operations passes every object to the underlying <code>RestoreObject</code> API operation. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">RestoreObject</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpirationInDays|object|false|none|none|
|GlacierJobTier|object|false|none|none|

<h2 id="tocS_S3SetObjectLegalHoldOperation">S3SetObjectLegalHoldOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3setobjectlegalholdoperation"></a>
<a id="schema_S3SetObjectLegalHoldOperation"></a>
<a id="tocSs3setobjectlegalholdoperation"></a>
<a id="tocss3setobjectlegalholdoperation"></a>

```json
{
  "LegalHold": {
    "Status": {}
  }
}
```

Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LegalHold|object|true|none|none|

<h2 id="tocS_S3SetObjectRetentionOperation">S3SetObjectRetentionOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3setobjectretentionoperation"></a>
<a id="schema_S3SetObjectRetentionOperation"></a>
<a id="tocSs3setobjectretentionoperation"></a>
<a id="tocss3setobjectretentionoperation"></a>

```json
{
  "BypassGovernanceRetention": {},
  "Retention": {
    "RetainUntilDate": {},
    "Mode": {}
  }
}
```

Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BypassGovernanceRetention|object|false|none|none|
|Retention|object|true|none|none|

<h2 id="tocS_S3ReplicateObjectOperation">S3ReplicateObjectOperation</h2>
<!-- backwards compatibility -->
<a id="schemas3replicateobjectoperation"></a>
<a id="schema_S3ReplicateObjectOperation"></a>
<a id="tocSs3replicateobjectoperation"></a>
<a id="tocss3replicateobjectoperation"></a>

```json
{}
```

Directs the specified job to invoke <code>ReplicateObject</code> on every object in the job's manifest.

<h2 id="tocS_S3BucketArnString">S3BucketArnString</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketarnstring"></a>
<a id="schema_S3BucketArnString"></a>
<a id="tocSs3bucketarnstring"></a>
<a id="tocss3bucketarnstring"></a>

```json
"string"
```

<h2 id="tocS_JobReportFormat">JobReportFormat</h2>
<!-- backwards compatibility -->
<a id="schemajobreportformat"></a>
<a id="schema_JobReportFormat"></a>
<a id="tocSjobreportformat"></a>
<a id="tocsjobreportformat"></a>

```json
"Report_CSV_20180820"
```

<h2 id="tocS_ReportPrefixString">ReportPrefixString</h2>
<!-- backwards compatibility -->
<a id="schemareportprefixstring"></a>
<a id="schema_ReportPrefixString"></a>
<a id="tocSreportprefixstring"></a>
<a id="tocsreportprefixstring"></a>

```json
"string"
```

<h2 id="tocS_JobReportScope">JobReportScope</h2>
<!-- backwards compatibility -->
<a id="schemajobreportscope"></a>
<a id="schema_JobReportScope"></a>
<a id="tocSjobreportscope"></a>
<a id="tocsjobreportscope"></a>

```json
"AllTasks"
```

<h2 id="tocS_JobManifestSpec">JobManifestSpec</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestspec"></a>
<a id="schema_JobManifestSpec"></a>
<a id="tocSjobmanifestspec"></a>
<a id="tocsjobmanifestspec"></a>

```json
{
  "Format": {},
  "Fields": {}
}
```

Describes the format of a manifest. If the manifest is in CSV format, also describes the columns contained within the manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|true|none|none|
|Fields|object|false|none|none|

<h2 id="tocS_JobManifestLocation">JobManifestLocation</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestlocation"></a>
<a id="schema_JobManifestLocation"></a>
<a id="tocSjobmanifestlocation"></a>
<a id="tocsjobmanifestlocation"></a>

```json
{
  "ObjectArn": {},
  "ObjectVersionId": {},
  "ETag": {}
}
```

Contains the information required to locate a manifest object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectArn|object|true|none|none|
|ObjectVersionId|object|false|none|none|
|ETag|object|true|none|none|

<h2 id="tocS_S3Tag">S3Tag</h2>
<!-- backwards compatibility -->
<a id="schemas3tag"></a>
<a id="schema_S3Tag"></a>
<a id="tocSs3tag"></a>
<a id="tocss3tag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

A container for a key-value name pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_S3JobManifestGenerator">S3JobManifestGenerator</h2>
<!-- backwards compatibility -->
<a id="schemas3jobmanifestgenerator"></a>
<a id="schema_S3JobManifestGenerator"></a>
<a id="tocSs3jobmanifestgenerator"></a>
<a id="tocss3jobmanifestgenerator"></a>

```json
{
  "ExpectedBucketOwner": {},
  "SourceBucket": {},
  "ManifestOutputLocation": {
    "ExpectedManifestBucketOwner": {},
    "Bucket": {},
    "ManifestPrefix": {},
    "ManifestEncryption": {
      "SSES3": {},
      "SSEKMS": {
        "KeyId": {}
      }
    },
    "ManifestFormat": {}
  },
  "Filter": {
    "EligibleForReplication": {},
    "CreatedAfter": {},
    "CreatedBefore": {},
    "ObjectReplicationStatuses": {}
  },
  "EnableManifestOutput": {}
}
```

The container for the service that will create the S3 manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpectedBucketOwner|object|false|none|none|
|SourceBucket|object|true|none|none|
|ManifestOutputLocation|object|false|none|none|
|Filter|object|false|none|none|
|EnableManifestOutput|object|true|none|none|

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_BadRequestException">BadRequestException</h2>
<!-- backwards compatibility -->
<a id="schemabadrequestexception"></a>
<a id="schema_BadRequestException"></a>
<a id="tocSbadrequestexception"></a>
<a id="tocsbadrequestexception"></a>

```json
null
```

<h2 id="tocS_IdempotencyException">IdempotencyException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotencyexception"></a>
<a id="schema_IdempotencyException"></a>
<a id="tocSidempotencyexception"></a>
<a id="tocsidempotencyexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_CreateMultiRegionAccessPointResult">CreateMultiRegionAccessPointResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiregionaccesspointresult"></a>
<a id="schema_CreateMultiRegionAccessPointResult"></a>
<a id="tocScreatemultiregionaccesspointresult"></a>
<a id="tocscreatemultiregionaccesspointresult"></a>

```json
{
  "RequestTokenARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestTokenARN|object|false|none|none|

<h2 id="tocS_MultiRegionAccessPointName">MultiRegionAccessPointName</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointname"></a>
<a id="schema_MultiRegionAccessPointName"></a>
<a id="tocSmultiregionaccesspointname"></a>
<a id="tocsmultiregionaccesspointname"></a>

```json
"string"
```

<h2 id="tocS_PublicAccessBlockConfiguration">PublicAccessBlockConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccessblockconfiguration"></a>
<a id="schema_PublicAccessBlockConfiguration"></a>
<a id="tocSpublicaccessblockconfiguration"></a>
<a id="tocspublicaccessblockconfiguration"></a>

```json
{
  "BlockPublicAcls": {},
  "IgnorePublicAcls": {},
  "BlockPublicPolicy": {},
  "RestrictPublicBuckets": {}
}
```

<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BlockPublicAcls|object|false|none|none|
|IgnorePublicAcls|object|false|none|none|
|BlockPublicPolicy|object|false|none|none|
|RestrictPublicBuckets|object|false|none|none|

<h2 id="tocS_RegionCreationList">RegionCreationList</h2>
<!-- backwards compatibility -->
<a id="schemaregioncreationlist"></a>
<a id="schema_RegionCreationList"></a>
<a id="tocSregioncreationlist"></a>
<a id="tocsregioncreationlist"></a>

```json
[
  {
    "Bucket": {},
    "BucketAccountId": {}
  }
]
```

<h2 id="tocS_DeleteJobTaggingResult">DeleteJobTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobtaggingresult"></a>
<a id="schema_DeleteJobTaggingResult"></a>
<a id="tocSdeletejobtaggingresult"></a>
<a id="tocsdeletejobtaggingresult"></a>

```json
{}
```

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteMultiRegionAccessPointResult">DeleteMultiRegionAccessPointResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiregionaccesspointresult"></a>
<a id="schema_DeleteMultiRegionAccessPointResult"></a>
<a id="tocSdeletemultiregionaccesspointresult"></a>
<a id="tocsdeletemultiregionaccesspointresult"></a>

```json
{
  "RequestTokenARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestTokenARN|object|false|none|none|

<h2 id="tocS_DeleteStorageLensConfigurationTaggingResult">DeleteStorageLensConfigurationTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoragelensconfigurationtaggingresult"></a>
<a id="schema_DeleteStorageLensConfigurationTaggingResult"></a>
<a id="tocSdeletestoragelensconfigurationtaggingresult"></a>
<a id="tocsdeletestoragelensconfigurationtaggingresult"></a>

```json
{}
```

<h2 id="tocS_DescribeJobResult">DescribeJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobresult"></a>
<a id="schema_DescribeJobResult"></a>
<a id="tocSdescribejobresult"></a>
<a id="tocsdescribejobresult"></a>

```json
{
  "Job": {
    "JobId": {},
    "ConfirmationRequired": {},
    "Description": {},
    "JobArn": {},
    "Status": {},
    "Manifest": {
      "Spec": {
        "Format": {},
        "Fields": {}
      },
      "Location": {
        "ObjectArn": {},
        "ObjectVersionId": {},
        "ETag": {}
      }
    },
    "Operation": {
      "LambdaInvoke": {
        "FunctionArn": {}
      },
      "S3PutObjectCopy": {
        "TargetResource": {},
        "CannedAccessControlList": {},
        "AccessControlGrants": {},
        "MetadataDirective": {},
        "ModifiedSinceConstraint": {},
        "NewObjectMetadata": {
          "CacheControl": {},
          "ContentDisposition": {},
          "ContentEncoding": {},
          "ContentLanguage": {},
          "UserMetadata": {
            "property1": "string",
            "property2": "string"
          },
          "ContentLength": {},
          "ContentMD5": {},
          "ContentType": {},
          "HttpExpiresDate": {},
          "RequesterCharged": {},
          "SSEAlgorithm": {}
        },
        "NewObjectTagging": {},
        "RedirectLocation": {},
        "RequesterPays": {},
        "StorageClass": {},
        "UnModifiedSinceConstraint": {},
        "SSEAwsKmsKeyId": {},
        "TargetKeyPrefix": {},
        "ObjectLockLegalHoldStatus": {},
        "ObjectLockMode": {},
        "ObjectLockRetainUntilDate": {},
        "BucketKeyEnabled": {},
        "ChecksumAlgorithm": {}
      },
      "S3PutObjectAcl": {
        "AccessControlPolicy": {
          "AccessControlList": {
            "Owner": {
              "ID": {},
              "DisplayName": {}
            },
            "Grants": {}
          },
          "CannedAccessControlList": {}
        }
      },
      "S3PutObjectTagging": {
        "TagSet": {}
      },
      "S3DeleteObjectTagging": {},
      "S3InitiateRestoreObject": {
        "ExpirationInDays": {},
        "GlacierJobTier": {}
      },
      "S3PutObjectLegalHold": {
        "LegalHold": {
          "Status": {}
        }
      },
      "S3PutObjectRetention": {
        "BypassGovernanceRetention": {},
        "Retention": {
          "RetainUntilDate": {},
          "Mode": {}
        }
      },
      "S3ReplicateObject": {}
    },
    "Priority": {},
    "ProgressSummary": {
      "TotalNumberOfTasks": {},
      "NumberOfTasksSucceeded": {},
      "NumberOfTasksFailed": {},
      "Timers": {
        "ElapsedTimeInActiveSeconds": {}
      }
    },
    "StatusUpdateReason": {},
    "FailureReasons": {},
    "Report": {
      "Bucket": {},
      "Format": {},
      "Enabled": {},
      "Prefix": {},
      "ReportScope": {}
    },
    "CreationTime": {},
    "TerminationDate": {},
    "RoleArn": {},
    "SuspendedDate": {},
    "SuspendedCause": {},
    "ManifestGenerator": {
      "S3JobManifestGenerator": {
        "ExpectedBucketOwner": {},
        "SourceBucket": {},
        "ManifestOutputLocation": {
          "ExpectedManifestBucketOwner": {},
          "Bucket": {},
          "ManifestPrefix": {},
          "ManifestEncryption": {
            "SSES3": {},
            "SSEKMS": {
              "KeyId": {}
            }
          },
          "ManifestFormat": {}
        },
        "Filter": {
          "EligibleForReplication": {},
          "CreatedAfter": {},
          "CreatedBefore": {},
          "ObjectReplicationStatuses": {}
        },
        "EnableManifestOutput": {}
      }
    },
    "GeneratedManifestDescriptor": {
      "Format": {},
      "Location": {
        "ObjectArn": {},
        "ObjectVersionId": {},
        "ETag": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Job|object|false|none|none|

<h2 id="tocS_DescribeMultiRegionAccessPointOperationResult">DescribeMultiRegionAccessPointOperationResult</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiregionaccesspointoperationresult"></a>
<a id="schema_DescribeMultiRegionAccessPointOperationResult"></a>
<a id="tocSdescribemultiregionaccesspointoperationresult"></a>
<a id="tocsdescribemultiregionaccesspointoperationresult"></a>

```json
{
  "AsyncOperation": {
    "CreationTime": {},
    "Operation": {},
    "RequestTokenARN": {},
    "RequestParameters": {
      "CreateMultiRegionAccessPointRequest": {
        "Name": {},
        "PublicAccessBlock": {
          "BlockPublicAcls": {},
          "IgnorePublicAcls": {},
          "BlockPublicPolicy": {},
          "RestrictPublicBuckets": {}
        },
        "Regions": {}
      },
      "DeleteMultiRegionAccessPointRequest": {
        "Name": {}
      },
      "PutMultiRegionAccessPointPolicyRequest": {
        "Name": {},
        "Policy": {}
      }
    },
    "RequestStatus": {},
    "ResponseDetails": {
      "MultiRegionAccessPointDetails": {
        "Regions": {}
      },
      "ErrorDetails": {
        "Code": {},
        "Message": {},
        "Resource": {},
        "RequestId": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AsyncOperation|object|false|none|none|

<h2 id="tocS_GetAccessPointResult">GetAccessPointResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointresult"></a>
<a id="schema_GetAccessPointResult"></a>
<a id="tocSgetaccesspointresult"></a>
<a id="tocsgetaccesspointresult"></a>

```json
{
  "Name": {},
  "Bucket": {},
  "NetworkOrigin": {},
  "VpcConfiguration": {
    "VpcId": {}
  },
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "CreationDate": {},
  "Alias": {},
  "AccessPointArn": {},
  "Endpoints": {
    "property1": "string",
    "property2": "string"
  },
  "BucketAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Bucket|object|false|none|none|
|NetworkOrigin|object|false|none|none|
|VpcConfiguration|object|false|none|none|
|PublicAccessBlockConfiguration|[PublicAccessBlockConfiguration](#schemapublicaccessblockconfiguration)|false|none|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|CreationDate|object|false|none|none|
|Alias|object|false|none|none|
|AccessPointArn|object|false|none|none|
|Endpoints|object|false|none|none|
|BucketAccountId|object|false|none|none|

<h2 id="tocS_GetAccessPointConfigurationForObjectLambdaResult">GetAccessPointConfigurationForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointconfigurationforobjectlambdaresult"></a>
<a id="schema_GetAccessPointConfigurationForObjectLambdaResult"></a>
<a id="tocSgetaccesspointconfigurationforobjectlambdaresult"></a>
<a id="tocsgetaccesspointconfigurationforobjectlambdaresult"></a>

```json
{
  "Configuration": {
    "SupportingAccessPoint": {},
    "CloudWatchMetricsEnabled": {},
    "AllowedFeatures": {},
    "TransformationConfigurations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|false|none|none|

<h2 id="tocS_GetAccessPointForObjectLambdaResult">GetAccessPointForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointforobjectlambdaresult"></a>
<a id="schema_GetAccessPointForObjectLambdaResult"></a>
<a id="tocSgetaccesspointforobjectlambdaresult"></a>
<a id="tocsgetaccesspointforobjectlambdaresult"></a>

```json
{
  "Name": {},
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "CreationDate": {},
  "Alias": {
    "Value": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|PublicAccessBlockConfiguration|object|false|none|none|
|CreationDate|object|false|none|none|
|Alias|object|false|none|none|

<h2 id="tocS_GetAccessPointPolicyResult">GetAccessPointPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicyresult"></a>
<a id="schema_GetAccessPointPolicyResult"></a>
<a id="tocSgetaccesspointpolicyresult"></a>
<a id="tocsgetaccesspointpolicyresult"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetAccessPointPolicyForObjectLambdaResult">GetAccessPointPolicyForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicyforobjectlambdaresult"></a>
<a id="schema_GetAccessPointPolicyForObjectLambdaResult"></a>
<a id="tocSgetaccesspointpolicyforobjectlambdaresult"></a>
<a id="tocsgetaccesspointpolicyforobjectlambdaresult"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetAccessPointPolicyStatusResult">GetAccessPointPolicyStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicystatusresult"></a>
<a id="schema_GetAccessPointPolicyStatusResult"></a>
<a id="tocSgetaccesspointpolicystatusresult"></a>
<a id="tocsgetaccesspointpolicystatusresult"></a>

```json
{
  "PolicyStatus": {
    "IsPublic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyStatus|object|false|none|none|

<h2 id="tocS_GetAccessPointPolicyStatusForObjectLambdaResult">GetAccessPointPolicyStatusForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicystatusforobjectlambdaresult"></a>
<a id="schema_GetAccessPointPolicyStatusForObjectLambdaResult"></a>
<a id="tocSgetaccesspointpolicystatusforobjectlambdaresult"></a>
<a id="tocsgetaccesspointpolicystatusforobjectlambdaresult"></a>

```json
{
  "PolicyStatus": {
    "IsPublic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PolicyStatus|[PolicyStatus](#schemapolicystatus)|false|none|Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. |

<h2 id="tocS_GetBucketResult">GetBucketResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketresult"></a>
<a id="schema_GetBucketResult"></a>
<a id="tocSgetbucketresult"></a>
<a id="tocsgetbucketresult"></a>

```json
{
  "Bucket": {},
  "PublicAccessBlockEnabled": {},
  "CreationDate": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|PublicAccessBlockEnabled|object|false|none|none|
|CreationDate|object|false|none|none|

<h2 id="tocS_GetBucketLifecycleConfigurationResult">GetBucketLifecycleConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecycleconfigurationresult"></a>
<a id="schema_GetBucketLifecycleConfigurationResult"></a>
<a id="tocSgetbucketlifecycleconfigurationresult"></a>
<a id="tocsgetbucketlifecycleconfigurationresult"></a>

```json
{
  "Rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_GetBucketPolicyResult">GetBucketPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicyresult"></a>
<a id="schema_GetBucketPolicyResult"></a>
<a id="tocSgetbucketpolicyresult"></a>
<a id="tocsgetbucketpolicyresult"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetBucketReplicationResult">GetBucketReplicationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketreplicationresult"></a>
<a id="schema_GetBucketReplicationResult"></a>
<a id="tocSgetbucketreplicationresult"></a>
<a id="tocsgetbucketreplicationresult"></a>

```json
{
  "ReplicationConfiguration": {
    "Role": {},
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationConfiguration|object|false|none|none|

<h2 id="tocS_GetBucketTaggingResult">GetBucketTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbuckettaggingresult"></a>
<a id="schema_GetBucketTaggingResult"></a>
<a id="tocSgetbuckettaggingresult"></a>
<a id="tocsgetbuckettaggingresult"></a>

```json
{
  "TagSet": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|true|none|none|

<h2 id="tocS_GetBucketVersioningResult">GetBucketVersioningResult</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketversioningresult"></a>
<a id="schema_GetBucketVersioningResult"></a>
<a id="tocSgetbucketversioningresult"></a>
<a id="tocsgetbucketversioningresult"></a>

```json
{
  "Status": {},
  "MFADelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|false|none|none|
|MFADelete|object|false|none|none|

<h2 id="tocS_GetJobTaggingResult">GetJobTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemagetjobtaggingresult"></a>
<a id="schema_GetJobTaggingResult"></a>
<a id="tocSgetjobtaggingresult"></a>
<a id="tocsgetjobtaggingresult"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_GetMultiRegionAccessPointResult">GetMultiRegionAccessPointResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointresult"></a>
<a id="schema_GetMultiRegionAccessPointResult"></a>
<a id="tocSgetmultiregionaccesspointresult"></a>
<a id="tocsgetmultiregionaccesspointresult"></a>

```json
{
  "AccessPoint": {
    "Name": {},
    "Alias": {},
    "CreatedAt": {},
    "PublicAccessBlock": {
      "BlockPublicAcls": {},
      "IgnorePublicAcls": {},
      "BlockPublicPolicy": {},
      "RestrictPublicBuckets": {}
    },
    "Status": {},
    "Regions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPoint|object|false|none|none|

<h2 id="tocS_GetMultiRegionAccessPointPolicyResult">GetMultiRegionAccessPointPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointpolicyresult"></a>
<a id="schema_GetMultiRegionAccessPointPolicyResult"></a>
<a id="tocSgetmultiregionaccesspointpolicyresult"></a>
<a id="tocsgetmultiregionaccesspointpolicyresult"></a>

```json
{
  "Policy": {
    "Established": {
      "Policy": {}
    },
    "Proposed": {
      "Policy": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_GetMultiRegionAccessPointPolicyStatusResult">GetMultiRegionAccessPointPolicyStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointpolicystatusresult"></a>
<a id="schema_GetMultiRegionAccessPointPolicyStatusResult"></a>
<a id="tocSgetmultiregionaccesspointpolicystatusresult"></a>
<a id="tocsgetmultiregionaccesspointpolicystatusresult"></a>

```json
{
  "Established": {
    "IsPublic": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Established|[PolicyStatus](#schemapolicystatus)|false|none|Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>. |

<h2 id="tocS_GetMultiRegionAccessPointRoutesResult">GetMultiRegionAccessPointRoutesResult</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointroutesresult"></a>
<a id="schema_GetMultiRegionAccessPointRoutesResult"></a>
<a id="tocSgetmultiregionaccesspointroutesresult"></a>
<a id="tocsgetmultiregionaccesspointroutesresult"></a>

```json
{
  "Mrap": {},
  "Routes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mrap|object|false|none|none|
|Routes|object|false|none|none|

<h2 id="tocS_GetPublicAccessBlockOutput">GetPublicAccessBlockOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetpublicaccessblockoutput"></a>
<a id="schema_GetPublicAccessBlockOutput"></a>
<a id="tocSgetpublicaccessblockoutput"></a>
<a id="tocsgetpublicaccessblockoutput"></a>

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAccessBlockConfiguration|object|false|none|none|

<h2 id="tocS_NoSuchPublicAccessBlockConfiguration">NoSuchPublicAccessBlockConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanosuchpublicaccessblockconfiguration"></a>
<a id="schema_NoSuchPublicAccessBlockConfiguration"></a>
<a id="tocSnosuchpublicaccessblockconfiguration"></a>
<a id="tocsnosuchpublicaccessblockconfiguration"></a>

```json
null
```

<h2 id="tocS_GetStorageLensConfigurationResult">GetStorageLensConfigurationResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstoragelensconfigurationresult"></a>
<a id="schema_GetStorageLensConfigurationResult"></a>
<a id="tocSgetstoragelensconfigurationresult"></a>
<a id="tocsgetstoragelensconfigurationresult"></a>

```json
{
  "StorageLensConfiguration": {
    "Id": {},
    "AccountLevel": {
      "ActivityMetrics": {
        "IsEnabled": {}
      },
      "BucketLevel": {
        "ActivityMetrics": {
          "IsEnabled": {}
        },
        "PrefixLevel": {
          "StorageMetrics": {
            "IsEnabled": {},
            "SelectionCriteria": {
              "Delimiter": {},
              "MaxDepth": {},
              "MinStorageBytesPercentage": {}
            }
          }
        },
        "AdvancedCostOptimizationMetrics": {
          "IsEnabled": {}
        },
        "AdvancedDataProtectionMetrics": {
          "IsEnabled": {}
        },
        "DetailedStatusCodesMetrics": {
          "IsEnabled": {}
        }
      },
      "AdvancedCostOptimizationMetrics": {
        "IsEnabled": {}
      },
      "AdvancedDataProtectionMetrics": {
        "IsEnabled": {}
      },
      "DetailedStatusCodesMetrics": {
        "IsEnabled": {}
      }
    },
    "Include": {
      "Buckets": {},
      "Regions": {}
    },
    "Exclude": {
      "Buckets": {},
      "Regions": {}
    },
    "DataExport": {
      "S3BucketDestination": {
        "Format": {},
        "OutputSchemaVersion": {},
        "AccountId": {},
        "Arn": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      },
      "CloudWatchMetrics": {
        "IsEnabled": {}
      }
    },
    "IsEnabled": {},
    "AwsOrg": {
      "Arn": {}
    },
    "StorageLensArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageLensConfiguration|object|false|none|none|

<h2 id="tocS_GetStorageLensConfigurationTaggingResult">GetStorageLensConfigurationTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemagetstoragelensconfigurationtaggingresult"></a>
<a id="schema_GetStorageLensConfigurationTaggingResult"></a>
<a id="tocSgetstoragelensconfigurationtaggingresult"></a>
<a id="tocsgetstoragelensconfigurationtaggingresult"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListAccessPointsResult">ListAccessPointsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspointsresult"></a>
<a id="schema_ListAccessPointsResult"></a>
<a id="tocSlistaccesspointsresult"></a>
<a id="tocslistaccesspointsresult"></a>

```json
{
  "AccessPointList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPointList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAccessPointsForObjectLambdaResult">ListAccessPointsForObjectLambdaResult</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspointsforobjectlambdaresult"></a>
<a id="schema_ListAccessPointsForObjectLambdaResult"></a>
<a id="tocSlistaccesspointsforobjectlambdaresult"></a>
<a id="tocslistaccesspointsforobjectlambdaresult"></a>

```json
{
  "ObjectLambdaAccessPointList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectLambdaAccessPointList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListJobsResult">ListJobsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresult"></a>
<a id="schema_ListJobsResult"></a>
<a id="tocSlistjobsresult"></a>
<a id="tocslistjobsresult"></a>

```json
{
  "NextToken": {},
  "Jobs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Jobs|object|false|none|none|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"Active"
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

<h2 id="tocS_InvalidNextTokenException">InvalidNextTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidnexttokenexception"></a>
<a id="schema_InvalidNextTokenException"></a>
<a id="tocSinvalidnexttokenexception"></a>
<a id="tocsinvalidnexttokenexception"></a>

```json
null
```

<h2 id="tocS_ListMultiRegionAccessPointsResult">ListMultiRegionAccessPointsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiregionaccesspointsresult"></a>
<a id="schema_ListMultiRegionAccessPointsResult"></a>
<a id="tocSlistmultiregionaccesspointsresult"></a>
<a id="tocslistmultiregionaccesspointsresult"></a>

```json
{
  "AccessPoints": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessPoints|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRegionalBucketsResult">ListRegionalBucketsResult</h2>
<!-- backwards compatibility -->
<a id="schemalistregionalbucketsresult"></a>
<a id="schema_ListRegionalBucketsResult"></a>
<a id="tocSlistregionalbucketsresult"></a>
<a id="tocslistregionalbucketsresult"></a>

```json
{
  "RegionalBucketList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RegionalBucketList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListStorageLensConfigurationsResult">ListStorageLensConfigurationsResult</h2>
<!-- backwards compatibility -->
<a id="schemaliststoragelensconfigurationsresult"></a>
<a id="schema_ListStorageLensConfigurationsResult"></a>
<a id="tocSliststoragelensconfigurationsresult"></a>
<a id="tocsliststoragelensconfigurationsresult"></a>

```json
{
  "NextToken": {},
  "StorageLensConfigurationList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|StorageLensConfigurationList|object|false|none|none|

<h2 id="tocS_LifecycleRules">LifecycleRules</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerules"></a>
<a id="schema_LifecycleRules"></a>
<a id="tocSlifecyclerules"></a>
<a id="tocslifecyclerules"></a>

```json
[
  {
    "Expiration": {
      "Date": {},
      "Days": {},
      "ExpiredObjectDeleteMarker": {}
    },
    "ID": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {},
        "ObjectSizeGreaterThan": {},
        "ObjectSizeLessThan": {}
      },
      "ObjectSizeGreaterThan": {},
      "ObjectSizeLessThan": {}
    },
    "Status": {},
    "Transitions": {},
    "NoncurrentVersionTransitions": {},
    "NoncurrentVersionExpiration": {
      "NoncurrentDays": {},
      "NewerNoncurrentVersions": {}
    },
    "AbortIncompleteMultipartUpload": {
      "DaysAfterInitiation": {}
    }
  }
]
```

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRules">ReplicationRules</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrules"></a>
<a id="schema_ReplicationRules"></a>
<a id="tocSreplicationrules"></a>
<a id="tocsreplicationrules"></a>

```json
[
  {
    "ID": {},
    "Priority": {},
    "Prefix": {},
    "Filter": {
      "Prefix": {},
      "Tag": {
        "Key": {},
        "Value": {}
      },
      "And": {
        "Prefix": {},
        "Tags": {}
      }
    },
    "Status": {},
    "SourceSelectionCriteria": {
      "SseKmsEncryptedObjects": {
        "Status": {}
      },
      "ReplicaModifications": {
        "Status": {}
      }
    },
    "ExistingObjectReplication": {
      "Status": {}
    },
    "Destination": {
      "Account": {},
      "Bucket": {},
      "ReplicationTime": {
        "Status": {},
        "Time": {
          "Minutes": {}
        }
      },
      "AccessControlTranslation": {
        "Owner": {}
      },
      "EncryptionConfiguration": {
        "ReplicaKmsKeyID": {}
      },
      "Metrics": {
        "Status": {},
        "EventThreshold": {
          "Minutes": {}
        }
      },
      "StorageClass": {}
    },
    "DeleteMarkerReplication": {
      "Status": {}
    },
    "Bucket": {}
  }
]
```

<h2 id="tocS_S3TagSet">S3TagSet</h2>
<!-- backwards compatibility -->
<a id="schemas3tagset"></a>
<a id="schema_S3TagSet"></a>
<a id="tocSs3tagset"></a>
<a id="tocss3tagset"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_MFADelete">MFADelete</h2>
<!-- backwards compatibility -->
<a id="schemamfadelete"></a>
<a id="schema_MFADelete"></a>
<a id="tocSmfadelete"></a>
<a id="tocsmfadelete"></a>

```json
"Enabled"
```

<h2 id="tocS_BucketVersioningStatus">BucketVersioningStatus</h2>
<!-- backwards compatibility -->
<a id="schemabucketversioningstatus"></a>
<a id="schema_BucketVersioningStatus"></a>
<a id="tocSbucketversioningstatus"></a>
<a id="tocsbucketversioningstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_PutJobTaggingResult">PutJobTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemaputjobtaggingresult"></a>
<a id="schema_PutJobTaggingResult"></a>
<a id="tocSputjobtaggingresult"></a>
<a id="tocsputjobtaggingresult"></a>

```json
{}
```

<h2 id="tocS_TooManyTagsException">TooManyTagsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanytagsexception"></a>
<a id="schema_TooManyTagsException"></a>
<a id="tocStoomanytagsexception"></a>
<a id="tocstoomanytagsexception"></a>

```json
null
```

<h2 id="tocS_PutMultiRegionAccessPointPolicyResult">PutMultiRegionAccessPointPolicyResult</h2>
<!-- backwards compatibility -->
<a id="schemaputmultiregionaccesspointpolicyresult"></a>
<a id="schema_PutMultiRegionAccessPointPolicyResult"></a>
<a id="tocSputmultiregionaccesspointpolicyresult"></a>
<a id="tocsputmultiregionaccesspointpolicyresult"></a>

```json
{
  "RequestTokenARN": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RequestTokenARN|object|false|none|none|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
"string"
```

<h2 id="tocS_ConfigId">ConfigId</h2>
<!-- backwards compatibility -->
<a id="schemaconfigid"></a>
<a id="schema_ConfigId"></a>
<a id="tocSconfigid"></a>
<a id="tocsconfigid"></a>

```json
"string"
```

<h2 id="tocS_AccountLevel">AccountLevel</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlevel"></a>
<a id="schema_AccountLevel"></a>
<a id="tocSaccountlevel"></a>
<a id="tocsaccountlevel"></a>

```json
{
  "ActivityMetrics": {
    "IsEnabled": {}
  },
  "BucketLevel": {
    "ActivityMetrics": {
      "IsEnabled": {}
    },
    "PrefixLevel": {
      "StorageMetrics": {
        "IsEnabled": {},
        "SelectionCriteria": {
          "Delimiter": {},
          "MaxDepth": {},
          "MinStorageBytesPercentage": {}
        }
      }
    },
    "AdvancedCostOptimizationMetrics": {
      "IsEnabled": {}
    },
    "AdvancedDataProtectionMetrics": {
      "IsEnabled": {}
    },
    "DetailedStatusCodesMetrics": {
      "IsEnabled": {}
    }
  },
  "AdvancedCostOptimizationMetrics": {
    "IsEnabled": {}
  },
  "AdvancedDataProtectionMetrics": {
    "IsEnabled": {}
  },
  "DetailedStatusCodesMetrics": {
    "IsEnabled": {}
  }
}
```

<p>A container for the account-level Amazon S3 Storage Lens configuration.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityMetrics|object|false|none|none|
|BucketLevel|object|true|none|none|
|AdvancedCostOptimizationMetrics|object|false|none|none|
|AdvancedDataProtectionMetrics|object|false|none|none|
|DetailedStatusCodesMetrics|object|false|none|none|

<h2 id="tocS_Include">Include</h2>
<!-- backwards compatibility -->
<a id="schemainclude"></a>
<a id="schema_Include"></a>
<a id="tocSinclude"></a>
<a id="tocsinclude"></a>

```json
{
  "Buckets": {},
  "Regions": {}
}
```

A container for what Amazon S3 Storage Lens configuration includes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Buckets|object|false|none|none|
|Regions|object|false|none|none|

<h2 id="tocS_Exclude">Exclude</h2>
<!-- backwards compatibility -->
<a id="schemaexclude"></a>
<a id="schema_Exclude"></a>
<a id="tocSexclude"></a>
<a id="tocsexclude"></a>

```json
{
  "Buckets": {},
  "Regions": {}
}
```

A container for what Amazon S3 Storage Lens will exclude.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Buckets|object|false|none|none|
|Regions|object|false|none|none|

<h2 id="tocS_StorageLensDataExport">StorageLensDataExport</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensdataexport"></a>
<a id="schema_StorageLensDataExport"></a>
<a id="tocSstoragelensdataexport"></a>
<a id="tocsstoragelensdataexport"></a>

```json
{
  "S3BucketDestination": {
    "Format": {},
    "OutputSchemaVersion": {},
    "AccountId": {},
    "Arn": {},
    "Prefix": {},
    "Encryption": {
      "SSES3": {},
      "SSEKMS": {
        "KeyId": {}
      }
    }
  },
  "CloudWatchMetrics": {
    "IsEnabled": {}
  }
}
```

A container to specify the properties of your S3 Storage Lens metrics export, including the destination, schema, and format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketDestination|object|false|none|none|
|CloudWatchMetrics|object|false|none|none|

<h2 id="tocS_IsEnabled">IsEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaisenabled"></a>
<a id="schema_IsEnabled"></a>
<a id="tocSisenabled"></a>
<a id="tocsisenabled"></a>

```json
true
```

<h2 id="tocS_StorageLensAwsOrg">StorageLensAwsOrg</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensawsorg"></a>
<a id="schema_StorageLensAwsOrg"></a>
<a id="tocSstoragelensawsorg"></a>
<a id="tocsstoragelensawsorg"></a>

```json
{
  "Arn": {}
}
```

The Amazon Web Services organization for your S3 Storage Lens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|

<h2 id="tocS_StorageLensArn">StorageLensArn</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensarn"></a>
<a id="schema_StorageLensArn"></a>
<a id="tocSstoragelensarn"></a>
<a id="tocsstoragelensarn"></a>

```json
"string"
```

<h2 id="tocS_StorageLensTag">StorageLensTag</h2>
<!-- backwards compatibility -->
<a id="schemastoragelenstag"></a>
<a id="schema_StorageLensTag"></a>
<a id="tocSstoragelenstag"></a>
<a id="tocsstoragelenstag"></a>

```json
{
  "Key": {},
  "Value": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_PutStorageLensConfigurationTaggingResult">PutStorageLensConfigurationTaggingResult</h2>
<!-- backwards compatibility -->
<a id="schemaputstoragelensconfigurationtaggingresult"></a>
<a id="schema_PutStorageLensConfigurationTaggingResult"></a>
<a id="tocSputstoragelensconfigurationtaggingresult"></a>
<a id="tocsputstoragelensconfigurationtaggingresult"></a>

```json
{}
```

<h2 id="tocS_SubmitMultiRegionAccessPointRoutesResult">SubmitMultiRegionAccessPointRoutesResult</h2>
<!-- backwards compatibility -->
<a id="schemasubmitmultiregionaccesspointroutesresult"></a>
<a id="schema_SubmitMultiRegionAccessPointRoutesResult"></a>
<a id="tocSsubmitmultiregionaccesspointroutesresult"></a>
<a id="tocssubmitmultiregionaccesspointroutesresult"></a>

```json
{}
```

<h2 id="tocS_MultiRegionAccessPointRoute">MultiRegionAccessPointRoute</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointroute"></a>
<a id="schema_MultiRegionAccessPointRoute"></a>
<a id="tocSmultiregionaccesspointroute"></a>
<a id="tocsmultiregionaccesspointroute"></a>

```json
{
  "Bucket": {},
  "Region": {},
  "TrafficDialPercentage": {}
}
```

<p>A structure for a Multi-Region Access Point that indicates where Amazon S3 traffic can be routed. Routes can be either active or passive. Active routes can process Amazon S3 requests through the Multi-Region Access Point, but passive routes are not eligible to process Amazon S3 requests. </p> <p>Each route contains the Amazon S3 bucket name and the Amazon Web Services Region that the bucket is located in. The route also includes the <code>TrafficDialPercentage</code> value, which shows whether the bucket and Region are active (indicated by a value of <code>100</code>) or passive (indicated by a value of <code>0</code>).</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Region|object|false|none|none|
|TrafficDialPercentage|object|true|none|none|

<h2 id="tocS_UpdateJobPriorityResult">UpdateJobPriorityResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobpriorityresult"></a>
<a id="schema_UpdateJobPriorityResult"></a>
<a id="tocSupdatejobpriorityresult"></a>
<a id="tocsupdatejobpriorityresult"></a>

```json
{
  "JobId": {},
  "Priority": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|true|none|none|
|Priority|object|true|none|none|

<h2 id="tocS_UpdateJobStatusResult">UpdateJobStatusResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobstatusresult"></a>
<a id="schema_UpdateJobStatusResult"></a>
<a id="tocSupdatejobstatusresult"></a>
<a id="tocsupdatejobstatusresult"></a>

```json
{
  "JobId": {},
  "Status": {},
  "StatusUpdateReason": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|Status|object|false|none|none|
|StatusUpdateReason|object|false|none|none|

<h2 id="tocS_JobStatusException">JobStatusException</h2>
<!-- backwards compatibility -->
<a id="schemajobstatusexception"></a>
<a id="schema_JobStatusException"></a>
<a id="tocSjobstatusexception"></a>
<a id="tocsjobstatusexception"></a>

```json
null
```

<h2 id="tocS_DaysAfterInitiation">DaysAfterInitiation</h2>
<!-- backwards compatibility -->
<a id="schemadaysafterinitiation"></a>
<a id="schema_DaysAfterInitiation"></a>
<a id="tocSdaysafterinitiation"></a>
<a id="tocsdaysafterinitiation"></a>

```json
0
```

<h2 id="tocS_AbortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</h2>
<!-- backwards compatibility -->
<a id="schemaabortincompletemultipartupload"></a>
<a id="schema_AbortIncompleteMultipartUpload"></a>
<a id="tocSabortincompletemultipartupload"></a>
<a id="tocsabortincompletemultipartupload"></a>

```json
{
  "DaysAfterInitiation": {}
}
```

The container for abort incomplete multipart upload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DaysAfterInitiation|object|false|none|none|

<h2 id="tocS_OwnerOverride">OwnerOverride</h2>
<!-- backwards compatibility -->
<a id="schemaowneroverride"></a>
<a id="schema_OwnerOverride"></a>
<a id="tocSowneroverride"></a>
<a id="tocsowneroverride"></a>

```json
"Destination"
```

<h2 id="tocS_AccessControlTranslation">AccessControlTranslation</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontroltranslation"></a>
<a id="schema_AccessControlTranslation"></a>
<a id="tocSaccesscontroltranslation"></a>
<a id="tocsaccesscontroltranslation"></a>

```json
{
  "Owner": {}
}
```

<p>A container for information about access control for replicas.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|true|none|none|

<h2 id="tocS_AccessPointName">AccessPointName</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointname"></a>
<a id="schema_AccessPointName"></a>
<a id="tocSaccesspointname"></a>
<a id="tocsaccesspointname"></a>

```json
"string"
```

<h2 id="tocS_NetworkOrigin">NetworkOrigin</h2>
<!-- backwards compatibility -->
<a id="schemanetworkorigin"></a>
<a id="schema_NetworkOrigin"></a>
<a id="tocSnetworkorigin"></a>
<a id="tocsnetworkorigin"></a>

```json
"Internet"
```

<h2 id="tocS_VpcConfiguration">VpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfiguration"></a>
<a id="schema_VpcConfiguration"></a>
<a id="tocSvpcconfiguration"></a>
<a id="tocsvpcconfiguration"></a>

```json
{
  "VpcId": {}
}
```

The virtual private cloud (VPC) configuration for an access point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|true|none|none|

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_S3AccessPointArn">S3AccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemas3accesspointarn"></a>
<a id="schema_S3AccessPointArn"></a>
<a id="tocSs3accesspointarn"></a>
<a id="tocss3accesspointarn"></a>

```json
"string"
```

<h2 id="tocS_Alias">Alias</h2>
<!-- backwards compatibility -->
<a id="schemaalias"></a>
<a id="schema_Alias"></a>
<a id="tocSalias"></a>
<a id="tocsalias"></a>

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
"string"
```

<h2 id="tocS_AccessPoint">AccessPoint</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspoint"></a>
<a id="schema_AccessPoint"></a>
<a id="tocSaccesspoint"></a>
<a id="tocsaccesspoint"></a>

```json
{
  "Name": {},
  "NetworkOrigin": {},
  "VpcConfiguration": {
    "VpcId": {}
  },
  "Bucket": {},
  "AccessPointArn": {},
  "Alias": {},
  "BucketAccountId": {}
}
```

An access point used to access a bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|NetworkOrigin|object|true|none|none|
|VpcConfiguration|object|false|none|none|
|Bucket|object|true|none|none|
|AccessPointArn|object|false|none|none|
|Alias|object|false|none|none|
|BucketAccountId|object|false|none|none|

<h2 id="tocS_AccessPointList">AccessPointList</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspointlist"></a>
<a id="schema_AccessPointList"></a>
<a id="tocSaccesspointlist"></a>
<a id="tocsaccesspointlist"></a>

```json
[
  {
    "Name": {},
    "NetworkOrigin": {},
    "VpcConfiguration": {
      "VpcId": {}
    },
    "Bucket": {},
    "AccessPointArn": {},
    "Alias": {},
    "BucketAccountId": {}
  }
]
```

<h2 id="tocS_ActivityMetrics">ActivityMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaactivitymetrics"></a>
<a id="schema_ActivityMetrics"></a>
<a id="tocSactivitymetrics"></a>
<a id="tocsactivitymetrics"></a>

```json
{
  "IsEnabled": {}
}
```

<p>The container element for Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|false|none|none|

<h2 id="tocS_BucketLevel">BucketLevel</h2>
<!-- backwards compatibility -->
<a id="schemabucketlevel"></a>
<a id="schema_BucketLevel"></a>
<a id="tocSbucketlevel"></a>
<a id="tocsbucketlevel"></a>

```json
{
  "ActivityMetrics": {
    "IsEnabled": {}
  },
  "PrefixLevel": {
    "StorageMetrics": {
      "IsEnabled": {},
      "SelectionCriteria": {
        "Delimiter": {},
        "MaxDepth": {},
        "MinStorageBytesPercentage": {}
      }
    }
  },
  "AdvancedCostOptimizationMetrics": {
    "IsEnabled": {}
  },
  "AdvancedDataProtectionMetrics": {
    "IsEnabled": {}
  },
  "DetailedStatusCodesMetrics": {
    "IsEnabled": {}
  }
}
```

<p>A container for the bucket-level configuration for Amazon S3 Storage Lens.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivityMetrics|object|false|none|none|
|PrefixLevel|object|false|none|none|
|AdvancedCostOptimizationMetrics|object|false|none|none|
|AdvancedDataProtectionMetrics|object|false|none|none|
|DetailedStatusCodesMetrics|object|false|none|none|

<h2 id="tocS_AdvancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedcostoptimizationmetrics"></a>
<a id="schema_AdvancedCostOptimizationMetrics"></a>
<a id="tocSadvancedcostoptimizationmetrics"></a>
<a id="tocsadvancedcostoptimizationmetrics"></a>

```json
{
  "IsEnabled": {}
}
```

<p>The container element for Amazon S3 Storage Lens advanced cost-optimization metrics. Advanced cost-optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|false|none|none|

<h2 id="tocS_AdvancedDataProtectionMetrics">AdvancedDataProtectionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaadvanceddataprotectionmetrics"></a>
<a id="schema_AdvancedDataProtectionMetrics"></a>
<a id="tocSadvanceddataprotectionmetrics"></a>
<a id="tocsadvanceddataprotectionmetrics"></a>

```json
{
  "IsEnabled": {}
}
```

<p>The container element for Amazon S3 Storage Lens advanced data-protection metrics. Advanced data-protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.</p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|false|none|none|

<h2 id="tocS_DetailedStatusCodesMetrics">DetailedStatusCodesMetrics</h2>
<!-- backwards compatibility -->
<a id="schemadetailedstatuscodesmetrics"></a>
<a id="schema_DetailedStatusCodesMetrics"></a>
<a id="tocSdetailedstatuscodesmetrics"></a>
<a id="tocsdetailedstatuscodesmetrics"></a>

```json
{
  "IsEnabled": {}
}
```

<p>The container element for Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as <code>200 OK</code>, <code>403 Forbidden</code>, <code>503 Service Unavailable</code> and others. </p> <p>For more information about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html">Assessing your storage activity and usage with S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>. For a complete list of S3 Storage Lens metrics, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html">S3 Storage Lens metrics glossary</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|false|none|none|

<h2 id="tocS_AsyncCreationTimestamp">AsyncCreationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaasynccreationtimestamp"></a>
<a id="schema_AsyncCreationTimestamp"></a>
<a id="tocSasynccreationtimestamp"></a>
<a id="tocsasynccreationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_MaxLength1024String">MaxLength1024String</h2>
<!-- backwards compatibility -->
<a id="schemamaxlength1024string"></a>
<a id="schema_MaxLength1024String"></a>
<a id="tocSmaxlength1024string"></a>
<a id="tocsmaxlength1024string"></a>

```json
"string"
```

<h2 id="tocS_AsyncErrorDetails">AsyncErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaasyncerrordetails"></a>
<a id="schema_AsyncErrorDetails"></a>
<a id="tocSasyncerrordetails"></a>
<a id="tocsasyncerrordetails"></a>

```json
{
  "Code": {},
  "Message": {},
  "Resource": {},
  "RequestId": {}
}
```

Error details for the failed asynchronous operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|
|Resource|object|false|none|none|
|RequestId|object|false|none|none|

<h2 id="tocS_AsyncOperationName">AsyncOperationName</h2>
<!-- backwards compatibility -->
<a id="schemaasyncoperationname"></a>
<a id="schema_AsyncOperationName"></a>
<a id="tocSasyncoperationname"></a>
<a id="tocsasyncoperationname"></a>

```json
"CreateMultiRegionAccessPoint"
```

<h2 id="tocS_AsyncRequestTokenARN">AsyncRequestTokenARN</h2>
<!-- backwards compatibility -->
<a id="schemaasyncrequesttokenarn"></a>
<a id="schema_AsyncRequestTokenARN"></a>
<a id="tocSasyncrequesttokenarn"></a>
<a id="tocsasyncrequesttokenarn"></a>

```json
"string"
```

<h2 id="tocS_AsyncRequestParameters">AsyncRequestParameters</h2>
<!-- backwards compatibility -->
<a id="schemaasyncrequestparameters"></a>
<a id="schema_AsyncRequestParameters"></a>
<a id="tocSasyncrequestparameters"></a>
<a id="tocsasyncrequestparameters"></a>

```json
{
  "CreateMultiRegionAccessPointRequest": {
    "Name": {},
    "PublicAccessBlock": {
      "BlockPublicAcls": {},
      "IgnorePublicAcls": {},
      "BlockPublicPolicy": {},
      "RestrictPublicBuckets": {}
    },
    "Regions": {}
  },
  "DeleteMultiRegionAccessPointRequest": {
    "Name": {}
  },
  "PutMultiRegionAccessPointPolicyRequest": {
    "Name": {},
    "Policy": {}
  }
}
```

A container for the request parameters associated with an asynchronous request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateMultiRegionAccessPointRequest|object|false|none|none|
|DeleteMultiRegionAccessPointRequest|object|false|none|none|
|PutMultiRegionAccessPointPolicyRequest|object|false|none|none|

<h2 id="tocS_AsyncRequestStatus">AsyncRequestStatus</h2>
<!-- backwards compatibility -->
<a id="schemaasyncrequeststatus"></a>
<a id="schema_AsyncRequestStatus"></a>
<a id="tocSasyncrequeststatus"></a>
<a id="tocsasyncrequeststatus"></a>

```json
"string"
```

<h2 id="tocS_AsyncResponseDetails">AsyncResponseDetails</h2>
<!-- backwards compatibility -->
<a id="schemaasyncresponsedetails"></a>
<a id="schema_AsyncResponseDetails"></a>
<a id="tocSasyncresponsedetails"></a>
<a id="tocsasyncresponsedetails"></a>

```json
{
  "MultiRegionAccessPointDetails": {
    "Regions": {}
  },
  "ErrorDetails": {
    "Code": {},
    "Message": {},
    "Resource": {},
    "RequestId": {}
  }
}
```

A container for the response details that are returned when querying about an asynchronous request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MultiRegionAccessPointDetails|object|false|none|none|
|ErrorDetails|object|false|none|none|

<h2 id="tocS_AsyncOperation">AsyncOperation</h2>
<!-- backwards compatibility -->
<a id="schemaasyncoperation"></a>
<a id="schema_AsyncOperation"></a>
<a id="tocSasyncoperation"></a>
<a id="tocsasyncoperation"></a>

```json
{
  "CreationTime": {},
  "Operation": {},
  "RequestTokenARN": {},
  "RequestParameters": {
    "CreateMultiRegionAccessPointRequest": {
      "Name": {},
      "PublicAccessBlock": {
        "BlockPublicAcls": {},
        "IgnorePublicAcls": {},
        "BlockPublicPolicy": {},
        "RestrictPublicBuckets": {}
      },
      "Regions": {}
    },
    "DeleteMultiRegionAccessPointRequest": {
      "Name": {}
    },
    "PutMultiRegionAccessPointPolicyRequest": {
      "Name": {},
      "Policy": {}
    }
  },
  "RequestStatus": {},
  "ResponseDetails": {
    "MultiRegionAccessPointDetails": {
      "Regions": {}
    },
    "ErrorDetails": {
      "Code": {},
      "Message": {},
      "Resource": {},
      "RequestId": {}
    }
  }
}
```

A container for the information about an asynchronous operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|object|false|none|none|
|Operation|object|false|none|none|
|RequestTokenARN|object|false|none|none|
|RequestParameters|object|false|none|none|
|RequestStatus|object|false|none|none|
|ResponseDetails|object|false|none|none|

<h2 id="tocS_CreateMultiRegionAccessPointInput">CreateMultiRegionAccessPointInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiregionaccesspointinput"></a>
<a id="schema_CreateMultiRegionAccessPointInput"></a>
<a id="tocScreatemultiregionaccesspointinput"></a>
<a id="tocscreatemultiregionaccesspointinput"></a>

```json
{
  "Name": {},
  "PublicAccessBlock": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "Regions": {}
}
```

A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|PublicAccessBlock|[PublicAccessBlockConfiguration](#schemapublicaccessblockconfiguration)|false|none|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|Regions|object|true|none|none|

<h2 id="tocS_DeleteMultiRegionAccessPointInput">DeleteMultiRegionAccessPointInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiregionaccesspointinput"></a>
<a id="schema_DeleteMultiRegionAccessPointInput"></a>
<a id="tocSdeletemultiregionaccesspointinput"></a>
<a id="tocsdeletemultiregionaccesspointinput"></a>

```json
{
  "Name": {}
}
```

A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|

<h2 id="tocS_PutMultiRegionAccessPointPolicyInput">PutMultiRegionAccessPointPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmultiregionaccesspointpolicyinput"></a>
<a id="schema_PutMultiRegionAccessPointPolicyInput"></a>
<a id="tocSputmultiregionaccesspointpolicyinput"></a>
<a id="tocsputmultiregionaccesspointpolicyinput"></a>

```json
{
  "Name": {},
  "Policy": {}
}
```

A container for the information associated with a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPoint.html">PutMultiRegionAccessPoint</a> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_MultiRegionAccessPointsAsyncResponse">MultiRegionAccessPointsAsyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointsasyncresponse"></a>
<a id="schema_MultiRegionAccessPointsAsyncResponse"></a>
<a id="tocSmultiregionaccesspointsasyncresponse"></a>
<a id="tocsmultiregionaccesspointsasyncresponse"></a>

```json
{
  "Regions": {}
}
```

The Multi-Region Access Point details that are returned when querying about an asynchronous request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Regions|object|false|none|none|

<h2 id="tocS_FunctionArnString">FunctionArnString</h2>
<!-- backwards compatibility -->
<a id="schemafunctionarnstring"></a>
<a id="schema_FunctionArnString"></a>
<a id="tocSfunctionarnstring"></a>
<a id="tocsfunctionarnstring"></a>

```json
"string"
```

<h2 id="tocS_AwsLambdaTransformationPayload">AwsLambdaTransformationPayload</h2>
<!-- backwards compatibility -->
<a id="schemaawslambdatransformationpayload"></a>
<a id="schema_AwsLambdaTransformationPayload"></a>
<a id="tocSawslambdatransformationpayload"></a>
<a id="tocsawslambdatransformationpayload"></a>

```json
"string"
```

<h2 id="tocS_AwsLambdaTransformation">AwsLambdaTransformation</h2>
<!-- backwards compatibility -->
<a id="schemaawslambdatransformation"></a>
<a id="schema_AwsLambdaTransformation"></a>
<a id="tocSawslambdatransformation"></a>
<a id="tocsawslambdatransformation"></a>

```json
{
  "FunctionArn": {},
  "FunctionPayload": {}
}
```

Lambda function used to transform objects through an Object Lambda Access Point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FunctionArn|object|true|none|none|
|FunctionPayload|object|false|none|none|

<h2 id="tocS_AwsOrgArn">AwsOrgArn</h2>
<!-- backwards compatibility -->
<a id="schemaawsorgarn"></a>
<a id="schema_AwsOrgArn"></a>
<a id="tocSawsorgarn"></a>
<a id="tocsawsorgarn"></a>

```json
"string"
```

<h2 id="tocS_BucketCannedACL">BucketCannedACL</h2>
<!-- backwards compatibility -->
<a id="schemabucketcannedacl"></a>
<a id="schema_BucketCannedACL"></a>
<a id="tocSbucketcannedacl"></a>
<a id="tocsbucketcannedacl"></a>

```json
"private"
```

<h2 id="tocS_BucketIdentifierString">BucketIdentifierString</h2>
<!-- backwards compatibility -->
<a id="schemabucketidentifierstring"></a>
<a id="schema_BucketIdentifierString"></a>
<a id="tocSbucketidentifierstring"></a>
<a id="tocsbucketidentifierstring"></a>

```json
"string"
```

<h2 id="tocS_PrefixLevel">PrefixLevel</h2>
<!-- backwards compatibility -->
<a id="schemaprefixlevel"></a>
<a id="schema_PrefixLevel"></a>
<a id="tocSprefixlevel"></a>
<a id="tocsprefixlevel"></a>

```json
{
  "StorageMetrics": {
    "IsEnabled": {},
    "SelectionCriteria": {
      "Delimiter": {},
      "MaxDepth": {},
      "MinStorageBytesPercentage": {}
    }
  }
}
```

A container for the prefix-level configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageMetrics|object|true|none|none|

<h2 id="tocS_Buckets">Buckets</h2>
<!-- backwards compatibility -->
<a id="schemabuckets"></a>
<a id="schema_Buckets"></a>
<a id="tocSbuckets"></a>
<a id="tocsbuckets"></a>

```json
[
  {}
]
```

<h2 id="tocS_CloudWatchMetrics">CloudWatchMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchmetrics"></a>
<a id="schema_CloudWatchMetrics"></a>
<a id="tocScloudwatchmetrics"></a>
<a id="tocscloudwatchmetrics"></a>

```json
{
  "IsEnabled": {}
}
```

<p>A container for enabling Amazon CloudWatch publishing for S3 Storage Lens metrics.</p> <p>For more information about publishing S3 Storage Lens metrics to CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html">Monitor S3 Storage Lens metrics in CloudWatch</a> in the <i>Amazon S3 User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|true|none|none|

<h2 id="tocS_ConfirmRemoveSelfBucketAccess">ConfirmRemoveSelfBucketAccess</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmremoveselfbucketaccess"></a>
<a id="schema_ConfirmRemoveSelfBucketAccess"></a>
<a id="tocSconfirmremoveselfbucketaccess"></a>
<a id="tocsconfirmremoveselfbucketaccess"></a>

```json
true
```

<h2 id="tocS_ConfirmationRequired">ConfirmationRequired</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationrequired"></a>
<a id="schema_ConfirmationRequired"></a>
<a id="tocSconfirmationrequired"></a>
<a id="tocsconfirmationrequired"></a>

```json
true
```

<h2 id="tocS_ContinuationToken">ContinuationToken</h2>
<!-- backwards compatibility -->
<a id="schemacontinuationtoken"></a>
<a id="schema_ContinuationToken"></a>
<a id="tocScontinuationtoken"></a>
<a id="tocscontinuationtoken"></a>

```json
"string"
```

<h2 id="tocS_ObjectLambdaAccessPointName">ObjectLambdaAccessPointName</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointname"></a>
<a id="schema_ObjectLambdaAccessPointName"></a>
<a id="tocSobjectlambdaaccesspointname"></a>
<a id="tocsobjectlambdaaccesspointname"></a>

```json
"string"
```

<h2 id="tocS_ObjectLambdaConfiguration">ObjectLambdaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaconfiguration"></a>
<a id="schema_ObjectLambdaConfiguration"></a>
<a id="tocSobjectlambdaconfiguration"></a>
<a id="tocsobjectlambdaconfiguration"></a>

```json
{
  "SupportingAccessPoint": {},
  "CloudWatchMetricsEnabled": {},
  "AllowedFeatures": {},
  "TransformationConfigurations": {}
}
```

A configuration used when creating an Object Lambda Access Point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SupportingAccessPoint|object|true|none|none|
|CloudWatchMetricsEnabled|object|false|none|none|
|AllowedFeatures|object|false|none|none|
|TransformationConfigurations|object|true|none|none|

<h2 id="tocS_CreateAccessPointForObjectLambdaRequest">CreateAccessPointForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointforobjectlambdarequest"></a>
<a id="schema_CreateAccessPointForObjectLambdaRequest"></a>
<a id="tocScreateaccesspointforobjectlambdarequest"></a>
<a id="tocscreateaccesspointforobjectlambdarequest"></a>

```json
{
  "Configuration": {
    "SupportingAccessPoint": {},
    "CloudWatchMetricsEnabled": {},
    "AllowedFeatures": {},
    "TransformationConfigurations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|true|none|none|

<h2 id="tocS_ObjectLambdaAccessPointArn">ObjectLambdaAccessPointArn</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointarn"></a>
<a id="schema_ObjectLambdaAccessPointArn"></a>
<a id="tocSobjectlambdaaccesspointarn"></a>
<a id="tocsobjectlambdaaccesspointarn"></a>

```json
"string"
```

<h2 id="tocS_ObjectLambdaAccessPointAlias">ObjectLambdaAccessPointAlias</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointalias"></a>
<a id="schema_ObjectLambdaAccessPointAlias"></a>
<a id="tocSobjectlambdaaccesspointalias"></a>
<a id="tocsobjectlambdaaccesspointalias"></a>

```json
{
  "Value": {},
  "Status": {}
}
```

The alias of an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias">How to use a bucket-style alias for your S3 bucket Object Lambda Access Point</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateAccessPointRequest">CreateAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccesspointrequest"></a>
<a id="schema_CreateAccessPointRequest"></a>
<a id="tocScreateaccesspointrequest"></a>
<a id="tocscreateaccesspointrequest"></a>

```json
{
  "Bucket": {},
  "VpcConfiguration": {
    "VpcId": {}
  },
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "BucketAccountId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|VpcConfiguration|object|false|none|none|
|PublicAccessBlockConfiguration|object|false|none|none|
|BucketAccountId|object|false|none|none|

<h2 id="tocS_CreateBucketConfiguration">CreateBucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketconfiguration"></a>
<a id="schema_CreateBucketConfiguration"></a>
<a id="tocScreatebucketconfiguration"></a>
<a id="tocscreatebucketconfiguration"></a>

```json
{
  "LocationConstraint": {}
}
```

<p>The container for the bucket configuration.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LocationConstraint|object|false|none|none|

<h2 id="tocS_GrantFullControl">GrantFullControl</h2>
<!-- backwards compatibility -->
<a id="schemagrantfullcontrol"></a>
<a id="schema_GrantFullControl"></a>
<a id="tocSgrantfullcontrol"></a>
<a id="tocsgrantfullcontrol"></a>

```json
"string"
```

<h2 id="tocS_GrantRead">GrantRead</h2>
<!-- backwards compatibility -->
<a id="schemagrantread"></a>
<a id="schema_GrantRead"></a>
<a id="tocSgrantread"></a>
<a id="tocsgrantread"></a>

```json
"string"
```

<h2 id="tocS_GrantReadACP">GrantReadACP</h2>
<!-- backwards compatibility -->
<a id="schemagrantreadacp"></a>
<a id="schema_GrantReadACP"></a>
<a id="tocSgrantreadacp"></a>
<a id="tocsgrantreadacp"></a>

```json
"string"
```

<h2 id="tocS_GrantWrite">GrantWrite</h2>
<!-- backwards compatibility -->
<a id="schemagrantwrite"></a>
<a id="schema_GrantWrite"></a>
<a id="tocSgrantwrite"></a>
<a id="tocsgrantwrite"></a>

```json
"string"
```

<h2 id="tocS_GrantWriteACP">GrantWriteACP</h2>
<!-- backwards compatibility -->
<a id="schemagrantwriteacp"></a>
<a id="schema_GrantWriteACP"></a>
<a id="tocSgrantwriteacp"></a>
<a id="tocsgrantwriteacp"></a>

```json
"string"
```

<h2 id="tocS_ObjectLockEnabledForBucket">ObjectLockEnabledForBucket</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlockenabledforbucket"></a>
<a id="schema_ObjectLockEnabledForBucket"></a>
<a id="tocSobjectlockenabledforbucket"></a>
<a id="tocsobjectlockenabledforbucket"></a>

```json
true
```

<h2 id="tocS_NonEmptyMaxLength64String">NonEmptyMaxLength64String</h2>
<!-- backwards compatibility -->
<a id="schemanonemptymaxlength64string"></a>
<a id="schema_NonEmptyMaxLength64String"></a>
<a id="tocSnonemptymaxlength64string"></a>
<a id="tocsnonemptymaxlength64string"></a>

```json
"string"
```

<h2 id="tocS_CreateBucketRequest">CreateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketrequest"></a>
<a id="schema_CreateBucketRequest"></a>
<a id="tocScreatebucketrequest"></a>
<a id="tocscreatebucketrequest"></a>

```json
{
  "CreateBucketConfiguration": {
    "LocationConstraint": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateBucketConfiguration|object|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
"string"
```

<h2 id="tocS_S3RegionalBucketArn">S3RegionalBucketArn</h2>
<!-- backwards compatibility -->
<a id="schemas3regionalbucketarn"></a>
<a id="schema_S3RegionalBucketArn"></a>
<a id="tocSs3regionalbucketarn"></a>
<a id="tocss3regionalbucketarn"></a>

```json
"string"
```

<h2 id="tocS_JobOperation">JobOperation</h2>
<!-- backwards compatibility -->
<a id="schemajoboperation"></a>
<a id="schema_JobOperation"></a>
<a id="tocSjoboperation"></a>
<a id="tocsjoboperation"></a>

```json
{
  "LambdaInvoke": {
    "FunctionArn": {}
  },
  "S3PutObjectCopy": {
    "TargetResource": {},
    "CannedAccessControlList": {},
    "AccessControlGrants": {},
    "MetadataDirective": {},
    "ModifiedSinceConstraint": {},
    "NewObjectMetadata": {
      "CacheControl": {},
      "ContentDisposition": {},
      "ContentEncoding": {},
      "ContentLanguage": {},
      "UserMetadata": {
        "property1": "string",
        "property2": "string"
      },
      "ContentLength": {},
      "ContentMD5": {},
      "ContentType": {},
      "HttpExpiresDate": {},
      "RequesterCharged": {},
      "SSEAlgorithm": {}
    },
    "NewObjectTagging": {},
    "RedirectLocation": {},
    "RequesterPays": {},
    "StorageClass": {},
    "UnModifiedSinceConstraint": {},
    "SSEAwsKmsKeyId": {},
    "TargetKeyPrefix": {},
    "ObjectLockLegalHoldStatus": {},
    "ObjectLockMode": {},
    "ObjectLockRetainUntilDate": {},
    "BucketKeyEnabled": {},
    "ChecksumAlgorithm": {}
  },
  "S3PutObjectAcl": {
    "AccessControlPolicy": {
      "AccessControlList": {
        "Owner": {
          "ID": {},
          "DisplayName": {}
        },
        "Grants": {}
      },
      "CannedAccessControlList": {}
    }
  },
  "S3PutObjectTagging": {
    "TagSet": {}
  },
  "S3DeleteObjectTagging": {},
  "S3InitiateRestoreObject": {
    "ExpirationInDays": {},
    "GlacierJobTier": {}
  },
  "S3PutObjectLegalHold": {
    "LegalHold": {
      "Status": {}
    }
  },
  "S3PutObjectRetention": {
    "BypassGovernanceRetention": {},
    "Retention": {
      "RetainUntilDate": {},
      "Mode": {}
    }
  },
  "S3ReplicateObject": {}
}
```

The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Operations</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LambdaInvoke|object|false|none|none|
|S3PutObjectCopy|object|false|none|none|
|S3PutObjectAcl|object|false|none|none|
|S3PutObjectTagging|object|false|none|none|
|S3DeleteObjectTagging|object|false|none|none|
|S3InitiateRestoreObject|object|false|none|none|
|S3PutObjectLegalHold|[S3SetObjectLegalHoldOperation](#schemas3setobjectlegalholdoperation)|false|none|Contains the configuration for an S3 Object Lock legal hold operation that an S3 Batch Operations job passes to every object to the underlying <code>PutObjectLegalHold</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-legal-hold.html">Using S3 Object Lock legal hold with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.|
|S3PutObjectRetention|[S3SetObjectRetentionOperation](#schemas3setobjectretentionoperation)|false|none|Contains the configuration parameters for the Object Lock retention action for an S3 Batch Operations job. Batch Operations passes every object to the underlying <code>PutObjectRetention</code> API operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.|
|S3ReplicateObject|object|false|none|none|

<h2 id="tocS_JobReport">JobReport</h2>
<!-- backwards compatibility -->
<a id="schemajobreport"></a>
<a id="schema_JobReport"></a>
<a id="tocSjobreport"></a>
<a id="tocsjobreport"></a>

```json
{
  "Bucket": {},
  "Format": {},
  "Enabled": {},
  "Prefix": {},
  "ReportScope": {}
}
```

Contains the configuration parameters for a job-completion report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Format|object|false|none|none|
|Enabled|object|true|none|none|
|Prefix|object|false|none|none|
|ReportScope|object|false|none|none|

<h2 id="tocS_JobManifest">JobManifest</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifest"></a>
<a id="schema_JobManifest"></a>
<a id="tocSjobmanifest"></a>
<a id="tocsjobmanifest"></a>

```json
{
  "Spec": {
    "Format": {},
    "Fields": {}
  },
  "Location": {
    "ObjectArn": {},
    "ObjectVersionId": {},
    "ETag": {}
  }
}
```

Contains the configuration information for a job's manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Spec|object|true|none|none|
|Location|object|true|none|none|

<h2 id="tocS_NonEmptyMaxLength256String">NonEmptyMaxLength256String</h2>
<!-- backwards compatibility -->
<a id="schemanonemptymaxlength256string"></a>
<a id="schema_NonEmptyMaxLength256String"></a>
<a id="tocSnonemptymaxlength256string"></a>
<a id="tocsnonemptymaxlength256string"></a>

```json
"string"
```

<h2 id="tocS_JobPriority">JobPriority</h2>
<!-- backwards compatibility -->
<a id="schemajobpriority"></a>
<a id="schema_JobPriority"></a>
<a id="tocSjobpriority"></a>
<a id="tocsjobpriority"></a>

```json
0
```

<h2 id="tocS_IAMRoleArn">IAMRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemaiamrolearn"></a>
<a id="schema_IAMRoleArn"></a>
<a id="tocSiamrolearn"></a>
<a id="tocsiamrolearn"></a>

```json
"string"
```

<h2 id="tocS_JobManifestGenerator">JobManifestGenerator</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestgenerator"></a>
<a id="schema_JobManifestGenerator"></a>
<a id="tocSjobmanifestgenerator"></a>
<a id="tocsjobmanifestgenerator"></a>

```json
{
  "S3JobManifestGenerator": {
    "ExpectedBucketOwner": {},
    "SourceBucket": {},
    "ManifestOutputLocation": {
      "ExpectedManifestBucketOwner": {},
      "Bucket": {},
      "ManifestPrefix": {},
      "ManifestEncryption": {
        "SSES3": {},
        "SSEKMS": {
          "KeyId": {}
        }
      },
      "ManifestFormat": {}
    },
    "Filter": {
      "EligibleForReplication": {},
      "CreatedAfter": {},
      "CreatedBefore": {},
      "ObjectReplicationStatuses": {}
    },
    "EnableManifestOutput": {}
  }
}
```

Configures the type of the job's ManifestGenerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3JobManifestGenerator|object|false|none|none|

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "ConfirmationRequired": {},
  "Operation": {
    "LambdaInvoke": {
      "FunctionArn": {}
    },
    "S3PutObjectCopy": {
      "TargetResource": {},
      "CannedAccessControlList": {},
      "AccessControlGrants": {},
      "MetadataDirective": {},
      "ModifiedSinceConstraint": {},
      "NewObjectMetadata": {
        "CacheControl": {},
        "ContentDisposition": {},
        "ContentEncoding": {},
        "ContentLanguage": {},
        "UserMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "ContentLength": {},
        "ContentMD5": {},
        "ContentType": {},
        "HttpExpiresDate": {},
        "RequesterCharged": {},
        "SSEAlgorithm": {}
      },
      "NewObjectTagging": {},
      "RedirectLocation": {},
      "RequesterPays": {},
      "StorageClass": {},
      "UnModifiedSinceConstraint": {},
      "SSEAwsKmsKeyId": {},
      "TargetKeyPrefix": {},
      "ObjectLockLegalHoldStatus": {},
      "ObjectLockMode": {},
      "ObjectLockRetainUntilDate": {},
      "BucketKeyEnabled": {},
      "ChecksumAlgorithm": {}
    },
    "S3PutObjectAcl": {
      "AccessControlPolicy": {
        "AccessControlList": {
          "Owner": {
            "ID": {},
            "DisplayName": {}
          },
          "Grants": {}
        },
        "CannedAccessControlList": {}
      }
    },
    "S3PutObjectTagging": {
      "TagSet": {}
    },
    "S3DeleteObjectTagging": {},
    "S3InitiateRestoreObject": {
      "ExpirationInDays": {},
      "GlacierJobTier": {}
    },
    "S3PutObjectLegalHold": {
      "LegalHold": {
        "Status": {}
      }
    },
    "S3PutObjectRetention": {
      "BypassGovernanceRetention": {},
      "Retention": {
        "RetainUntilDate": {},
        "Mode": {}
      }
    },
    "S3ReplicateObject": {}
  },
  "Report": {
    "Bucket": {},
    "Format": {},
    "Enabled": {},
    "Prefix": {},
    "ReportScope": {}
  },
  "ClientRequestToken": {},
  "Manifest": {
    "Spec": {
      "Format": {},
      "Fields": {}
    },
    "Location": {
      "ObjectArn": {},
      "ObjectVersionId": {},
      "ETag": {}
    }
  },
  "Description": {},
  "Priority": {},
  "RoleArn": {},
  "Tags": {},
  "ManifestGenerator": {
    "S3JobManifestGenerator": {
      "ExpectedBucketOwner": {},
      "SourceBucket": {},
      "ManifestOutputLocation": {
        "ExpectedManifestBucketOwner": {},
        "Bucket": {},
        "ManifestPrefix": {},
        "ManifestEncryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        },
        "ManifestFormat": {}
      },
      "Filter": {
        "EligibleForReplication": {},
        "CreatedAfter": {},
        "CreatedBefore": {},
        "ObjectReplicationStatuses": {}
      },
      "EnableManifestOutput": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfirmationRequired|object|false|none|none|
|Operation|object|true|none|none|
|Report|object|true|none|none|
|ClientRequestToken|object|true|none|none|
|Manifest|object|false|none|none|
|Description|object|false|none|none|
|Priority|object|true|none|none|
|RoleArn|object|true|none|none|
|Tags|object|false|none|none|
|ManifestGenerator|object|false|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"string"
```

<h2 id="tocS_MultiRegionAccessPointClientToken">MultiRegionAccessPointClientToken</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointclienttoken"></a>
<a id="schema_MultiRegionAccessPointClientToken"></a>
<a id="tocSmultiregionaccesspointclienttoken"></a>
<a id="tocsmultiregionaccesspointclienttoken"></a>

```json
"string"
```

<h2 id="tocS_CreateMultiRegionAccessPointRequest">CreateMultiRegionAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemultiregionaccesspointrequest"></a>
<a id="schema_CreateMultiRegionAccessPointRequest"></a>
<a id="tocScreatemultiregionaccesspointrequest"></a>
<a id="tocscreatemultiregionaccesspointrequest"></a>

```json
{
  "ClientToken": {},
  "Details": {
    "Name": {},
    "PublicAccessBlock": {
      "BlockPublicAcls": {},
      "IgnorePublicAcls": {},
      "BlockPublicPolicy": {},
      "RestrictPublicBuckets": {}
    },
    "Regions": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|Details|object|true|none|none|

<h2 id="tocS_CreationDate">CreationDate</h2>
<!-- backwards compatibility -->
<a id="schemacreationdate"></a>
<a id="schema_CreationDate"></a>
<a id="tocScreationdate"></a>
<a id="tocscreationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CreationTimestamp">CreationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreationtimestamp"></a>
<a id="schema_CreationTimestamp"></a>
<a id="tocScreationtimestamp"></a>
<a id="tocscreationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Days">Days</h2>
<!-- backwards compatibility -->
<a id="schemadays"></a>
<a id="schema_Days"></a>
<a id="tocSdays"></a>
<a id="tocsdays"></a>

```json
0
```

<h2 id="tocS_DeleteAccessPointForObjectLambdaRequest">DeleteAccessPointForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointforobjectlambdarequest"></a>
<a id="schema_DeleteAccessPointForObjectLambdaRequest"></a>
<a id="tocSdeleteaccesspointforobjectlambdarequest"></a>
<a id="tocsdeleteaccesspointforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAccessPointPolicyForObjectLambdaRequest">DeleteAccessPointPolicyForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointpolicyforobjectlambdarequest"></a>
<a id="schema_DeleteAccessPointPolicyForObjectLambdaRequest"></a>
<a id="tocSdeleteaccesspointpolicyforobjectlambdarequest"></a>
<a id="tocsdeleteaccesspointpolicyforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAccessPointPolicyRequest">DeleteAccessPointPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointpolicyrequest"></a>
<a id="schema_DeleteAccessPointPolicyRequest"></a>
<a id="tocSdeleteaccesspointpolicyrequest"></a>
<a id="tocsdeleteaccesspointpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteAccessPointRequest">DeleteAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteaccesspointrequest"></a>
<a id="schema_DeleteAccessPointRequest"></a>
<a id="tocSdeleteaccesspointrequest"></a>
<a id="tocsdeleteaccesspointrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketLifecycleConfigurationRequest">DeleteBucketLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketlifecycleconfigurationrequest"></a>
<a id="schema_DeleteBucketLifecycleConfigurationRequest"></a>
<a id="tocSdeletebucketlifecycleconfigurationrequest"></a>
<a id="tocsdeletebucketlifecycleconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketPolicyRequest">DeleteBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketpolicyrequest"></a>
<a id="schema_DeleteBucketPolicyRequest"></a>
<a id="tocSdeletebucketpolicyrequest"></a>
<a id="tocsdeletebucketpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketReplicationRequest">DeleteBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketreplicationrequest"></a>
<a id="schema_DeleteBucketReplicationRequest"></a>
<a id="tocSdeletebucketreplicationrequest"></a>
<a id="tocsdeletebucketreplicationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketRequest">DeleteBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebucketrequest"></a>
<a id="schema_DeleteBucketRequest"></a>
<a id="tocSdeletebucketrequest"></a>
<a id="tocsdeletebucketrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteBucketTaggingRequest">DeleteBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebuckettaggingrequest"></a>
<a id="schema_DeleteBucketTaggingRequest"></a>
<a id="tocSdeletebuckettaggingrequest"></a>
<a id="tocsdeletebuckettaggingrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteJobTaggingRequest">DeleteJobTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletejobtaggingrequest"></a>
<a id="schema_DeleteJobTaggingRequest"></a>
<a id="tocSdeletejobtaggingrequest"></a>
<a id="tocsdeletejobtaggingrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMarkerReplicationStatus">DeleteMarkerReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerreplicationstatus"></a>
<a id="schema_DeleteMarkerReplicationStatus"></a>
<a id="tocSdeletemarkerreplicationstatus"></a>
<a id="tocsdeletemarkerreplicationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_DeleteMarkerReplication">DeleteMarkerReplication</h2>
<!-- backwards compatibility -->
<a id="schemadeletemarkerreplication"></a>
<a id="schema_DeleteMarkerReplication"></a>
<a id="tocSdeletemarkerreplication"></a>
<a id="tocsdeletemarkerreplication"></a>

```json
{
  "Status": {}
}
```

<p>Specifies whether S3 on Outposts replicates delete markers. If you specify a <code>Filter</code> element in your replication configuration, you must also include a <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a <code>Tag</code> element, the <code>DeleteMarkerReplication</code> element's <code>Status</code> child element must be set to <code>Disabled</code>, because S3 on Outposts does not support replicating delete markers for tag-based rules.</p> <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OutpostsReplication.html#outposts-replication-what-is-replicated">How delete operations affect replication</a> in the <i>Amazon S3 User Guide</i>. </p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_DeleteMultiRegionAccessPointRequest">DeleteMultiRegionAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemultiregionaccesspointrequest"></a>
<a id="schema_DeleteMultiRegionAccessPointRequest"></a>
<a id="tocSdeletemultiregionaccesspointrequest"></a>
<a id="tocsdeletemultiregionaccesspointrequest"></a>

```json
{
  "ClientToken": {},
  "Details": {
    "Name": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|Details|object|true|none|none|

<h2 id="tocS_DeletePublicAccessBlockRequest">DeletePublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepublicaccessblockrequest"></a>
<a id="schema_DeletePublicAccessBlockRequest"></a>
<a id="tocSdeletepublicaccessblockrequest"></a>
<a id="tocsdeletepublicaccessblockrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStorageLensConfigurationRequest">DeleteStorageLensConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoragelensconfigurationrequest"></a>
<a id="schema_DeleteStorageLensConfigurationRequest"></a>
<a id="tocSdeletestoragelensconfigurationrequest"></a>
<a id="tocsdeletestoragelensconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteStorageLensConfigurationTaggingRequest">DeleteStorageLensConfigurationTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletestoragelensconfigurationtaggingrequest"></a>
<a id="schema_DeleteStorageLensConfigurationTaggingRequest"></a>
<a id="tocSdeletestoragelensconfigurationtaggingrequest"></a>
<a id="tocsdeletestoragelensconfigurationtaggingrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeJobRequest">DescribeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribejobrequest"></a>
<a id="schema_DescribeJobRequest"></a>
<a id="tocSdescribejobrequest"></a>
<a id="tocsdescribejobrequest"></a>

```json
{}
```

<h2 id="tocS_JobDescriptor">JobDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemajobdescriptor"></a>
<a id="schema_JobDescriptor"></a>
<a id="tocSjobdescriptor"></a>
<a id="tocsjobdescriptor"></a>

```json
{
  "JobId": {},
  "ConfirmationRequired": {},
  "Description": {},
  "JobArn": {},
  "Status": {},
  "Manifest": {
    "Spec": {
      "Format": {},
      "Fields": {}
    },
    "Location": {
      "ObjectArn": {},
      "ObjectVersionId": {},
      "ETag": {}
    }
  },
  "Operation": {
    "LambdaInvoke": {
      "FunctionArn": {}
    },
    "S3PutObjectCopy": {
      "TargetResource": {},
      "CannedAccessControlList": {},
      "AccessControlGrants": {},
      "MetadataDirective": {},
      "ModifiedSinceConstraint": {},
      "NewObjectMetadata": {
        "CacheControl": {},
        "ContentDisposition": {},
        "ContentEncoding": {},
        "ContentLanguage": {},
        "UserMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "ContentLength": {},
        "ContentMD5": {},
        "ContentType": {},
        "HttpExpiresDate": {},
        "RequesterCharged": {},
        "SSEAlgorithm": {}
      },
      "NewObjectTagging": {},
      "RedirectLocation": {},
      "RequesterPays": {},
      "StorageClass": {},
      "UnModifiedSinceConstraint": {},
      "SSEAwsKmsKeyId": {},
      "TargetKeyPrefix": {},
      "ObjectLockLegalHoldStatus": {},
      "ObjectLockMode": {},
      "ObjectLockRetainUntilDate": {},
      "BucketKeyEnabled": {},
      "ChecksumAlgorithm": {}
    },
    "S3PutObjectAcl": {
      "AccessControlPolicy": {
        "AccessControlList": {
          "Owner": {
            "ID": {},
            "DisplayName": {}
          },
          "Grants": {}
        },
        "CannedAccessControlList": {}
      }
    },
    "S3PutObjectTagging": {
      "TagSet": {}
    },
    "S3DeleteObjectTagging": {},
    "S3InitiateRestoreObject": {
      "ExpirationInDays": {},
      "GlacierJobTier": {}
    },
    "S3PutObjectLegalHold": {
      "LegalHold": {
        "Status": {}
      }
    },
    "S3PutObjectRetention": {
      "BypassGovernanceRetention": {},
      "Retention": {
        "RetainUntilDate": {},
        "Mode": {}
      }
    },
    "S3ReplicateObject": {}
  },
  "Priority": {},
  "ProgressSummary": {
    "TotalNumberOfTasks": {},
    "NumberOfTasksSucceeded": {},
    "NumberOfTasksFailed": {},
    "Timers": {
      "ElapsedTimeInActiveSeconds": {}
    }
  },
  "StatusUpdateReason": {},
  "FailureReasons": {},
  "Report": {
    "Bucket": {},
    "Format": {},
    "Enabled": {},
    "Prefix": {},
    "ReportScope": {}
  },
  "CreationTime": {},
  "TerminationDate": {},
  "RoleArn": {},
  "SuspendedDate": {},
  "SuspendedCause": {},
  "ManifestGenerator": {
    "S3JobManifestGenerator": {
      "ExpectedBucketOwner": {},
      "SourceBucket": {},
      "ManifestOutputLocation": {
        "ExpectedManifestBucketOwner": {},
        "Bucket": {},
        "ManifestPrefix": {},
        "ManifestEncryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        },
        "ManifestFormat": {}
      },
      "Filter": {
        "EligibleForReplication": {},
        "CreatedAfter": {},
        "CreatedBefore": {},
        "ObjectReplicationStatuses": {}
      },
      "EnableManifestOutput": {}
    }
  },
  "GeneratedManifestDescriptor": {
    "Format": {},
    "Location": {
      "ObjectArn": {},
      "ObjectVersionId": {},
      "ETag": {}
    }
  }
}
```

A container element for the job configuration and status information returned by a <code>Describe Job</code> request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|ConfirmationRequired|object|false|none|none|
|Description|object|false|none|none|
|JobArn|object|false|none|none|
|Status|object|false|none|none|
|Manifest|object|false|none|none|
|Operation|object|false|none|none|
|Priority|object|false|none|none|
|ProgressSummary|object|false|none|none|
|StatusUpdateReason|object|false|none|none|
|FailureReasons|object|false|none|none|
|Report|object|false|none|none|
|CreationTime|object|false|none|none|
|TerminationDate|object|false|none|none|
|RoleArn|object|false|none|none|
|SuspendedDate|object|false|none|none|
|SuspendedCause|object|false|none|none|
|ManifestGenerator|object|false|none|none|
|GeneratedManifestDescriptor|object|false|none|none|

<h2 id="tocS_DescribeMultiRegionAccessPointOperationRequest">DescribeMultiRegionAccessPointOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemultiregionaccesspointoperationrequest"></a>
<a id="schema_DescribeMultiRegionAccessPointOperationRequest"></a>
<a id="tocSdescribemultiregionaccesspointoperationrequest"></a>
<a id="tocsdescribemultiregionaccesspointoperationrequest"></a>

```json
{}
```

<h2 id="tocS_ReplicationTime">ReplicationTime</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtime"></a>
<a id="schema_ReplicationTime"></a>
<a id="tocSreplicationtime"></a>
<a id="tocsreplicationtime"></a>

```json
{
  "Status": {},
  "Time": {
    "Minutes": {}
  }
}
```

<p>A container that specifies S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|Time|object|true|none|none|

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "ReplicaKmsKeyID": {}
}
```

<p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicaKmsKeyID|object|false|none|none|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "Status": {},
  "EventThreshold": {
    "Minutes": {}
  }
}
```

A container that specifies replication metrics-related settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|
|EventThreshold|object|false|none|none|

<h2 id="tocS_ReplicationStorageClass">ReplicationStorageClass</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstorageclass"></a>
<a id="schema_ReplicationStorageClass"></a>
<a id="tocSreplicationstorageclass"></a>
<a id="tocsreplicationstorageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "Account": {},
  "Bucket": {},
  "ReplicationTime": {
    "Status": {},
    "Time": {
      "Minutes": {}
    }
  },
  "AccessControlTranslation": {
    "Owner": {}
  },
  "EncryptionConfiguration": {
    "ReplicaKmsKeyID": {}
  },
  "Metrics": {
    "Status": {},
    "EventThreshold": {
      "Minutes": {}
    }
  },
  "StorageClass": {}
}
```

Specifies information about the replication destination bucket and its settings for an S3 on Outposts replication configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|none|
|Bucket|object|true|none|none|
|ReplicationTime|object|false|none|none|
|AccessControlTranslation|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|Metrics|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_ReplicaKmsKeyID">ReplicaKmsKeyID</h2>
<!-- backwards compatibility -->
<a id="schemareplicakmskeyid"></a>
<a id="schema_ReplicaKmsKeyID"></a>
<a id="tocSreplicakmskeyid"></a>
<a id="tocsreplicakmskeyid"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyMaxLength1024String">NonEmptyMaxLength1024String</h2>
<!-- backwards compatibility -->
<a id="schemanonemptymaxlength1024string"></a>
<a id="schema_NonEmptyMaxLength1024String"></a>
<a id="tocSnonemptymaxlength1024string"></a>
<a id="tocsnonemptymaxlength1024string"></a>

```json
"string"
```

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NonEmptyMaxLength1024String](#schemanonemptymaxlength1024string)|false|none|none|

<h2 id="tocS_EstablishedMultiRegionAccessPointPolicy">EstablishedMultiRegionAccessPointPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaestablishedmultiregionaccesspointpolicy"></a>
<a id="schema_EstablishedMultiRegionAccessPointPolicy"></a>
<a id="tocSestablishedmultiregionaccesspointpolicy"></a>
<a id="tocsestablishedmultiregionaccesspointpolicy"></a>

```json
{
  "Policy": {}
}
```

<p>The last established access control policy for a Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_Regions">Regions</h2>
<!-- backwards compatibility -->
<a id="schemaregions"></a>
<a id="schema_Regions"></a>
<a id="tocSregions"></a>
<a id="tocsregions"></a>

```json
[
  {}
]
```

<h2 id="tocS_ExistingObjectReplicationStatus">ExistingObjectReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexistingobjectreplicationstatus"></a>
<a id="schema_ExistingObjectReplicationStatus"></a>
<a id="tocSexistingobjectreplicationstatus"></a>
<a id="tocsexistingobjectreplicationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ExistingObjectReplication">ExistingObjectReplication</h2>
<!-- backwards compatibility -->
<a id="schemaexistingobjectreplication"></a>
<a id="schema_ExistingObjectReplication"></a>
<a id="tocSexistingobjectreplication"></a>
<a id="tocsexistingobjectreplication"></a>

```json
{
  "Status": {}
}
```

<p>An optional configuration to replicate existing source bucket objects. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_ExpirationStatus">ExpirationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationstatus"></a>
<a id="schema_ExpirationStatus"></a>
<a id="tocSexpirationstatus"></a>
<a id="tocsexpirationstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ExpiredObjectDeleteMarker">ExpiredObjectDeleteMarker</h2>
<!-- backwards compatibility -->
<a id="schemaexpiredobjectdeletemarker"></a>
<a id="schema_ExpiredObjectDeleteMarker"></a>
<a id="tocSexpiredobjectdeletemarker"></a>
<a id="tocsexpiredobjectdeletemarker"></a>

```json
true
```

<h2 id="tocS_Format">Format</h2>
<!-- backwards compatibility -->
<a id="schemaformat"></a>
<a id="schema_Format"></a>
<a id="tocSformat"></a>
<a id="tocsformat"></a>

```json
"CSV"
```

<h2 id="tocS_SSES3Encryption">SSES3Encryption</h2>
<!-- backwards compatibility -->
<a id="schemasses3encryption"></a>
<a id="schema_SSES3Encryption"></a>
<a id="tocSsses3encryption"></a>
<a id="tocssses3encryption"></a>

```json
{}
```

Configuration for the use of SSE-S3 to encrypt generated manifest objects.

<h2 id="tocS_SSEKMSEncryption">SSEKMSEncryption</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryption"></a>
<a id="schema_SSEKMSEncryption"></a>
<a id="tocSssekmsencryption"></a>
<a id="tocsssekmsencryption"></a>

```json
{
  "KeyId": {}
}
```

Configuration for the use of SSE-KMS to encrypt generated manifest objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_GeneratedManifestEncryption">GeneratedManifestEncryption</h2>
<!-- backwards compatibility -->
<a id="schemageneratedmanifestencryption"></a>
<a id="schema_GeneratedManifestEncryption"></a>
<a id="tocSgeneratedmanifestencryption"></a>
<a id="tocsgeneratedmanifestencryption"></a>

```json
{
  "SSES3": {},
  "SSEKMS": {
    "KeyId": {}
  }
}
```

The encryption configuration to use when storing the generated manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SSES3|object|false|none|none|
|SSEKMS|object|false|none|none|

<h2 id="tocS_GeneratedManifestFormat">GeneratedManifestFormat</h2>
<!-- backwards compatibility -->
<a id="schemageneratedmanifestformat"></a>
<a id="schema_GeneratedManifestFormat"></a>
<a id="tocSgeneratedmanifestformat"></a>
<a id="tocsgeneratedmanifestformat"></a>

```json
"S3InventoryReport_CSV_20211130"
```

<h2 id="tocS_GetAccessPointConfigurationForObjectLambdaRequest">GetAccessPointConfigurationForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointconfigurationforobjectlambdarequest"></a>
<a id="schema_GetAccessPointConfigurationForObjectLambdaRequest"></a>
<a id="tocSgetaccesspointconfigurationforobjectlambdarequest"></a>
<a id="tocsgetaccesspointconfigurationforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_GetAccessPointForObjectLambdaRequest">GetAccessPointForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointforobjectlambdarequest"></a>
<a id="schema_GetAccessPointForObjectLambdaRequest"></a>
<a id="tocSgetaccesspointforobjectlambdarequest"></a>
<a id="tocsgetaccesspointforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_GetAccessPointPolicyForObjectLambdaRequest">GetAccessPointPolicyForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicyforobjectlambdarequest"></a>
<a id="schema_GetAccessPointPolicyForObjectLambdaRequest"></a>
<a id="tocSgetaccesspointpolicyforobjectlambdarequest"></a>
<a id="tocsgetaccesspointpolicyforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_ObjectLambdaPolicy">ObjectLambdaPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdapolicy"></a>
<a id="schema_ObjectLambdaPolicy"></a>
<a id="tocSobjectlambdapolicy"></a>
<a id="tocsobjectlambdapolicy"></a>

```json
"string"
```

<h2 id="tocS_GetAccessPointPolicyRequest">GetAccessPointPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicyrequest"></a>
<a id="schema_GetAccessPointPolicyRequest"></a>
<a id="tocSgetaccesspointpolicyrequest"></a>
<a id="tocsgetaccesspointpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetAccessPointPolicyStatusForObjectLambdaRequest">GetAccessPointPolicyStatusForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicystatusforobjectlambdarequest"></a>
<a id="schema_GetAccessPointPolicyStatusForObjectLambdaRequest"></a>
<a id="tocSgetaccesspointpolicystatusforobjectlambdarequest"></a>
<a id="tocsgetaccesspointpolicystatusforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_PolicyStatus">PolicyStatus</h2>
<!-- backwards compatibility -->
<a id="schemapolicystatus"></a>
<a id="schema_PolicyStatus"></a>
<a id="tocSpolicystatus"></a>
<a id="tocspolicystatus"></a>

```json
{
  "IsPublic": {}
}
```

Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsPublic|object|false|none|none|

<h2 id="tocS_GetAccessPointPolicyStatusRequest">GetAccessPointPolicyStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointpolicystatusrequest"></a>
<a id="schema_GetAccessPointPolicyStatusRequest"></a>
<a id="tocSgetaccesspointpolicystatusrequest"></a>
<a id="tocsgetaccesspointpolicystatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetAccessPointRequest">GetAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccesspointrequest"></a>
<a id="schema_GetAccessPointRequest"></a>
<a id="tocSgetaccesspointrequest"></a>
<a id="tocsgetaccesspointrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketLifecycleConfigurationRequest">GetBucketLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketlifecycleconfigurationrequest"></a>
<a id="schema_GetBucketLifecycleConfigurationRequest"></a>
<a id="tocSgetbucketlifecycleconfigurationrequest"></a>
<a id="tocsgetbucketlifecycleconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketPolicyRequest">GetBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketpolicyrequest"></a>
<a id="schema_GetBucketPolicyRequest"></a>
<a id="tocSgetbucketpolicyrequest"></a>
<a id="tocsgetbucketpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketReplicationRequest">GetBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketreplicationrequest"></a>
<a id="schema_GetBucketReplicationRequest"></a>
<a id="tocSgetbucketreplicationrequest"></a>
<a id="tocsgetbucketreplicationrequest"></a>

```json
{}
```

<h2 id="tocS_ReplicationConfiguration">ReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfiguration"></a>
<a id="schema_ReplicationConfiguration"></a>
<a id="tocSreplicationconfiguration"></a>
<a id="tocsreplicationconfiguration"></a>

```json
{
  "Role": {},
  "Rules": {}
}
```

A container for one or more replication rules. A replication configuration must have at least one rule and you can add up to 100 rules. The maximum size of a replication configuration is 128 KB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|true|none|none|
|Rules|object|true|none|none|

<h2 id="tocS_GetBucketRequest">GetBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketrequest"></a>
<a id="schema_GetBucketRequest"></a>
<a id="tocSgetbucketrequest"></a>
<a id="tocsgetbucketrequest"></a>

```json
{}
```

<h2 id="tocS_PublicAccessBlockEnabled">PublicAccessBlockEnabled</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccessblockenabled"></a>
<a id="schema_PublicAccessBlockEnabled"></a>
<a id="tocSpublicaccessblockenabled"></a>
<a id="tocspublicaccessblockenabled"></a>

```json
true
```

<h2 id="tocS_GetBucketTaggingRequest">GetBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbuckettaggingrequest"></a>
<a id="schema_GetBucketTaggingRequest"></a>
<a id="tocSgetbuckettaggingrequest"></a>
<a id="tocsgetbuckettaggingrequest"></a>

```json
{}
```

<h2 id="tocS_GetBucketVersioningRequest">GetBucketVersioningRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbucketversioningrequest"></a>
<a id="schema_GetBucketVersioningRequest"></a>
<a id="tocSgetbucketversioningrequest"></a>
<a id="tocsgetbucketversioningrequest"></a>

```json
{}
```

<h2 id="tocS_MFADeleteStatus">MFADeleteStatus</h2>
<!-- backwards compatibility -->
<a id="schemamfadeletestatus"></a>
<a id="schema_MFADeleteStatus"></a>
<a id="tocSmfadeletestatus"></a>
<a id="tocsmfadeletestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_GetJobTaggingRequest">GetJobTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetjobtaggingrequest"></a>
<a id="schema_GetJobTaggingRequest"></a>
<a id="tocSgetjobtaggingrequest"></a>
<a id="tocsgetjobtaggingrequest"></a>

```json
{}
```

<h2 id="tocS_GetMultiRegionAccessPointPolicyRequest">GetMultiRegionAccessPointPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointpolicyrequest"></a>
<a id="schema_GetMultiRegionAccessPointPolicyRequest"></a>
<a id="tocSgetmultiregionaccesspointpolicyrequest"></a>
<a id="tocsgetmultiregionaccesspointpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_MultiRegionAccessPointPolicyDocument">MultiRegionAccessPointPolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointpolicydocument"></a>
<a id="schema_MultiRegionAccessPointPolicyDocument"></a>
<a id="tocSmultiregionaccesspointpolicydocument"></a>
<a id="tocsmultiregionaccesspointpolicydocument"></a>

```json
{
  "Established": {
    "Policy": {}
  },
  "Proposed": {
    "Policy": {}
  }
}
```

<p>The Multi-Region Access Point access control policy.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Established|object|false|none|none|
|Proposed|object|false|none|none|

<h2 id="tocS_GetMultiRegionAccessPointPolicyStatusRequest">GetMultiRegionAccessPointPolicyStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointpolicystatusrequest"></a>
<a id="schema_GetMultiRegionAccessPointPolicyStatusRequest"></a>
<a id="tocSgetmultiregionaccesspointpolicystatusrequest"></a>
<a id="tocsgetmultiregionaccesspointpolicystatusrequest"></a>

```json
{}
```

<h2 id="tocS_GetMultiRegionAccessPointRequest">GetMultiRegionAccessPointRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointrequest"></a>
<a id="schema_GetMultiRegionAccessPointRequest"></a>
<a id="tocSgetmultiregionaccesspointrequest"></a>
<a id="tocsgetmultiregionaccesspointrequest"></a>

```json
{}
```

<h2 id="tocS_MultiRegionAccessPointReport">MultiRegionAccessPointReport</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointreport"></a>
<a id="schema_MultiRegionAccessPointReport"></a>
<a id="tocSmultiregionaccesspointreport"></a>
<a id="tocsmultiregionaccesspointreport"></a>

```json
{
  "Name": {},
  "Alias": {},
  "CreatedAt": {},
  "PublicAccessBlock": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  },
  "Status": {},
  "Regions": {}
}
```

A collection of statuses for a Multi-Region Access Point in the various Regions it supports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Alias|object|false|none|none|
|CreatedAt|object|false|none|none|
|PublicAccessBlock|[PublicAccessBlockConfiguration](#schemapublicaccessblockconfiguration)|false|none|<p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon S3 User Guide</i>.</p> <p>This data type is not supported for Amazon S3 on Outposts.</p>|
|Status|object|false|none|none|
|Regions|object|false|none|none|

<h2 id="tocS_MultiRegionAccessPointId">MultiRegionAccessPointId</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointid"></a>
<a id="schema_MultiRegionAccessPointId"></a>
<a id="tocSmultiregionaccesspointid"></a>
<a id="tocsmultiregionaccesspointid"></a>

```json
"string"
```

<h2 id="tocS_GetMultiRegionAccessPointRoutesRequest">GetMultiRegionAccessPointRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmultiregionaccesspointroutesrequest"></a>
<a id="schema_GetMultiRegionAccessPointRoutesRequest"></a>
<a id="tocSgetmultiregionaccesspointroutesrequest"></a>
<a id="tocsgetmultiregionaccesspointroutesrequest"></a>

```json
{}
```

<h2 id="tocS_RouteList">RouteList</h2>
<!-- backwards compatibility -->
<a id="schemaroutelist"></a>
<a id="schema_RouteList"></a>
<a id="tocSroutelist"></a>
<a id="tocsroutelist"></a>

```json
[
  {
    "Bucket": {},
    "Region": {},
    "TrafficDialPercentage": {}
  }
]
```

<h2 id="tocS_GetPublicAccessBlockRequest">GetPublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpublicaccessblockrequest"></a>
<a id="schema_GetPublicAccessBlockRequest"></a>
<a id="tocSgetpublicaccessblockrequest"></a>
<a id="tocsgetpublicaccessblockrequest"></a>

```json
{}
```

<h2 id="tocS_GetStorageLensConfigurationRequest">GetStorageLensConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstoragelensconfigurationrequest"></a>
<a id="schema_GetStorageLensConfigurationRequest"></a>
<a id="tocSgetstoragelensconfigurationrequest"></a>
<a id="tocsgetstoragelensconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_StorageLensConfiguration">StorageLensConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensconfiguration"></a>
<a id="schema_StorageLensConfiguration"></a>
<a id="tocSstoragelensconfiguration"></a>
<a id="tocsstoragelensconfiguration"></a>

```json
{
  "Id": {},
  "AccountLevel": {
    "ActivityMetrics": {
      "IsEnabled": {}
    },
    "BucketLevel": {
      "ActivityMetrics": {
        "IsEnabled": {}
      },
      "PrefixLevel": {
        "StorageMetrics": {
          "IsEnabled": {},
          "SelectionCriteria": {
            "Delimiter": {},
            "MaxDepth": {},
            "MinStorageBytesPercentage": {}
          }
        }
      },
      "AdvancedCostOptimizationMetrics": {
        "IsEnabled": {}
      },
      "AdvancedDataProtectionMetrics": {
        "IsEnabled": {}
      },
      "DetailedStatusCodesMetrics": {
        "IsEnabled": {}
      }
    },
    "AdvancedCostOptimizationMetrics": {
      "IsEnabled": {}
    },
    "AdvancedDataProtectionMetrics": {
      "IsEnabled": {}
    },
    "DetailedStatusCodesMetrics": {
      "IsEnabled": {}
    }
  },
  "Include": {
    "Buckets": {},
    "Regions": {}
  },
  "Exclude": {
    "Buckets": {},
    "Regions": {}
  },
  "DataExport": {
    "S3BucketDestination": {
      "Format": {},
      "OutputSchemaVersion": {},
      "AccountId": {},
      "Arn": {},
      "Prefix": {},
      "Encryption": {
        "SSES3": {},
        "SSEKMS": {
          "KeyId": {}
        }
      }
    },
    "CloudWatchMetrics": {
      "IsEnabled": {}
    }
  },
  "IsEnabled": {},
  "AwsOrg": {
    "Arn": {}
  },
  "StorageLensArn": {}
}
```

A container for the Amazon S3 Storage Lens configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|AccountLevel|object|true|none|none|
|Include|object|false|none|none|
|Exclude|object|false|none|none|
|DataExport|object|false|none|none|
|IsEnabled|object|true|none|none|
|AwsOrg|object|false|none|none|
|StorageLensArn|object|false|none|none|

<h2 id="tocS_GetStorageLensConfigurationTaggingRequest">GetStorageLensConfigurationTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetstoragelensconfigurationtaggingrequest"></a>
<a id="schema_GetStorageLensConfigurationTaggingRequest"></a>
<a id="tocSgetstoragelensconfigurationtaggingrequest"></a>
<a id="tocsgetstoragelensconfigurationtaggingrequest"></a>

```json
{}
```

<h2 id="tocS_StorageLensTags">StorageLensTags</h2>
<!-- backwards compatibility -->
<a id="schemastoragelenstags"></a>
<a id="schema_StorageLensTags"></a>
<a id="tocSstoragelenstags"></a>
<a id="tocsstoragelenstags"></a>

```json
[
  {
    "Key": {},
    "Value": {}
  }
]
```

<h2 id="tocS_ID">ID</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_ID"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_IsPublic">IsPublic</h2>
<!-- backwards compatibility -->
<a id="schemaispublic"></a>
<a id="schema_IsPublic"></a>
<a id="tocSispublic"></a>
<a id="tocsispublic"></a>

```json
true
```

<h2 id="tocS_JobArn">JobArn</h2>
<!-- backwards compatibility -->
<a id="schemajobarn"></a>
<a id="schema_JobArn"></a>
<a id="tocSjobarn"></a>
<a id="tocsjobarn"></a>

```json
"string"
```

<h2 id="tocS_JobCreationTime">JobCreationTime</h2>
<!-- backwards compatibility -->
<a id="schemajobcreationtime"></a>
<a id="schema_JobCreationTime"></a>
<a id="tocSjobcreationtime"></a>
<a id="tocsjobcreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_JobProgressSummary">JobProgressSummary</h2>
<!-- backwards compatibility -->
<a id="schemajobprogresssummary"></a>
<a id="schema_JobProgressSummary"></a>
<a id="tocSjobprogresssummary"></a>
<a id="tocsjobprogresssummary"></a>

```json
{
  "TotalNumberOfTasks": {},
  "NumberOfTasksSucceeded": {},
  "NumberOfTasksFailed": {},
  "Timers": {
    "ElapsedTimeInActiveSeconds": {}
  }
}
```

Describes the total number of tasks that the specified job has started, the number of tasks that succeeded, and the number of tasks that failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalNumberOfTasks|object|false|none|none|
|NumberOfTasksSucceeded|object|false|none|none|
|NumberOfTasksFailed|object|false|none|none|
|Timers|object|false|none|none|

<h2 id="tocS_JobStatusUpdateReason">JobStatusUpdateReason</h2>
<!-- backwards compatibility -->
<a id="schemajobstatusupdatereason"></a>
<a id="schema_JobStatusUpdateReason"></a>
<a id="tocSjobstatusupdatereason"></a>
<a id="tocsjobstatusupdatereason"></a>

```json
"string"
```

<h2 id="tocS_JobFailureList">JobFailureList</h2>
<!-- backwards compatibility -->
<a id="schemajobfailurelist"></a>
<a id="schema_JobFailureList"></a>
<a id="tocSjobfailurelist"></a>
<a id="tocsjobfailurelist"></a>

```json
[
  {
    "FailureCode": {},
    "FailureReason": {}
  }
]
```

<h2 id="tocS_JobTerminationDate">JobTerminationDate</h2>
<!-- backwards compatibility -->
<a id="schemajobterminationdate"></a>
<a id="schema_JobTerminationDate"></a>
<a id="tocSjobterminationdate"></a>
<a id="tocsjobterminationdate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SuspendedDate">SuspendedDate</h2>
<!-- backwards compatibility -->
<a id="schemasuspendeddate"></a>
<a id="schema_SuspendedDate"></a>
<a id="tocSsuspendeddate"></a>
<a id="tocssuspendeddate"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_SuspendedCause">SuspendedCause</h2>
<!-- backwards compatibility -->
<a id="schemasuspendedcause"></a>
<a id="schema_SuspendedCause"></a>
<a id="tocSsuspendedcause"></a>
<a id="tocssuspendedcause"></a>

```json
"string"
```

<h2 id="tocS_S3GeneratedManifestDescriptor">S3GeneratedManifestDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemas3generatedmanifestdescriptor"></a>
<a id="schema_S3GeneratedManifestDescriptor"></a>
<a id="tocSs3generatedmanifestdescriptor"></a>
<a id="tocss3generatedmanifestdescriptor"></a>

```json
{
  "Format": {},
  "Location": {
    "ObjectArn": {},
    "ObjectVersionId": {},
    "ETag": {}
  }
}
```

Describes the specified job's generated manifest. Batch Operations jobs created with a ManifestGenerator populate details of this descriptor after execution of the ManifestGenerator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|Location|[JobManifestLocation](#schemajobmanifestlocation)|false|none|Contains the information required to locate a manifest object.|

<h2 id="tocS_JobFailureCode">JobFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemajobfailurecode"></a>
<a id="schema_JobFailureCode"></a>
<a id="tocSjobfailurecode"></a>
<a id="tocsjobfailurecode"></a>

```json
"string"
```

<h2 id="tocS_JobFailureReason">JobFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemajobfailurereason"></a>
<a id="schema_JobFailureReason"></a>
<a id="tocSjobfailurereason"></a>
<a id="tocsjobfailurereason"></a>

```json
"string"
```

<h2 id="tocS_JobFailure">JobFailure</h2>
<!-- backwards compatibility -->
<a id="schemajobfailure"></a>
<a id="schema_JobFailure"></a>
<a id="tocSjobfailure"></a>
<a id="tocsjobfailure"></a>

```json
{
  "FailureCode": {},
  "FailureReason": {}
}
```

If this job failed, this element indicates why the job failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FailureCode|object|false|none|none|
|FailureReason|object|false|none|none|

<h2 id="tocS_OperationName">OperationName</h2>
<!-- backwards compatibility -->
<a id="schemaoperationname"></a>
<a id="schema_OperationName"></a>
<a id="tocSoperationname"></a>
<a id="tocsoperationname"></a>

```json
"LambdaInvoke"
```

<h2 id="tocS_JobListDescriptor">JobListDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemajoblistdescriptor"></a>
<a id="schema_JobListDescriptor"></a>
<a id="tocSjoblistdescriptor"></a>
<a id="tocsjoblistdescriptor"></a>

```json
{
  "JobId": {},
  "Description": {},
  "Operation": {},
  "Priority": {},
  "Status": {},
  "CreationTime": {},
  "TerminationDate": {},
  "ProgressSummary": {
    "TotalNumberOfTasks": {},
    "NumberOfTasksSucceeded": {},
    "NumberOfTasksFailed": {},
    "Timers": {
      "ElapsedTimeInActiveSeconds": {}
    }
  }
}
```

Contains the configuration and status information for a single job retrieved as part of a job list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JobId|object|false|none|none|
|Description|object|false|none|none|
|Operation|object|false|none|none|
|Priority|object|false|none|none|
|Status|object|false|none|none|
|CreationTime|object|false|none|none|
|TerminationDate|object|false|none|none|
|ProgressSummary|object|false|none|none|

<h2 id="tocS_JobListDescriptorList">JobListDescriptorList</h2>
<!-- backwards compatibility -->
<a id="schemajoblistdescriptorlist"></a>
<a id="schema_JobListDescriptorList"></a>
<a id="tocSjoblistdescriptorlist"></a>
<a id="tocsjoblistdescriptorlist"></a>

```json
[
  {
    "JobId": {},
    "Description": {},
    "Operation": {},
    "Priority": {},
    "Status": {},
    "CreationTime": {},
    "TerminationDate": {},
    "ProgressSummary": {
      "TotalNumberOfTasks": {},
      "NumberOfTasksSucceeded": {},
      "NumberOfTasksFailed": {},
      "Timers": {
        "ElapsedTimeInActiveSeconds": {}
      }
    }
  }
]
```

<h2 id="tocS_JobManifestFieldName">JobManifestFieldName</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestfieldname"></a>
<a id="schema_JobManifestFieldName"></a>
<a id="tocSjobmanifestfieldname"></a>
<a id="tocsjobmanifestfieldname"></a>

```json
"Ignore"
```

<h2 id="tocS_JobManifestFieldList">JobManifestFieldList</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestfieldlist"></a>
<a id="schema_JobManifestFieldList"></a>
<a id="tocSjobmanifestfieldlist"></a>
<a id="tocsjobmanifestfieldlist"></a>

```json
[
  "Ignore"
]
```

<h2 id="tocS_JobManifestFormat">JobManifestFormat</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestformat"></a>
<a id="schema_JobManifestFormat"></a>
<a id="tocSjobmanifestformat"></a>
<a id="tocsjobmanifestformat"></a>

```json
"S3BatchOperations_CSV_20180820"
```

<h2 id="tocS_ObjectCreationTime">ObjectCreationTime</h2>
<!-- backwards compatibility -->
<a id="schemaobjectcreationtime"></a>
<a id="schema_ObjectCreationTime"></a>
<a id="tocSobjectcreationtime"></a>
<a id="tocsobjectcreationtime"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ReplicationStatusFilterList">ReplicationStatusFilterList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatusfilterlist"></a>
<a id="schema_ReplicationStatusFilterList"></a>
<a id="tocSreplicationstatusfilterlist"></a>
<a id="tocsreplicationstatusfilterlist"></a>

```json
[
  "COMPLETED"
]
```

<h2 id="tocS_JobManifestGeneratorFilter">JobManifestGeneratorFilter</h2>
<!-- backwards compatibility -->
<a id="schemajobmanifestgeneratorfilter"></a>
<a id="schema_JobManifestGeneratorFilter"></a>
<a id="tocSjobmanifestgeneratorfilter"></a>
<a id="tocsjobmanifestgeneratorfilter"></a>

```json
{
  "EligibleForReplication": {},
  "CreatedAfter": {},
  "CreatedBefore": {},
  "ObjectReplicationStatuses": {}
}
```

The filter used to describe a set of objects for the job's manifest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EligibleForReplication|object|false|none|none|
|CreatedAfter|object|false|none|none|
|CreatedBefore|object|false|none|none|
|ObjectReplicationStatuses|object|false|none|none|

<h2 id="tocS_S3KeyArnString">S3KeyArnString</h2>
<!-- backwards compatibility -->
<a id="schemas3keyarnstring"></a>
<a id="schema_S3KeyArnString"></a>
<a id="tocSs3keyarnstring"></a>
<a id="tocss3keyarnstring"></a>

```json
"string"
```

<h2 id="tocS_S3ObjectVersionId">S3ObjectVersionId</h2>
<!-- backwards compatibility -->
<a id="schemas3objectversionid"></a>
<a id="schema_S3ObjectVersionId"></a>
<a id="tocSs3objectversionid"></a>
<a id="tocss3objectversionid"></a>

```json
"string"
```

<h2 id="tocS_JobNumberOfTasksFailed">JobNumberOfTasksFailed</h2>
<!-- backwards compatibility -->
<a id="schemajobnumberoftasksfailed"></a>
<a id="schema_JobNumberOfTasksFailed"></a>
<a id="tocSjobnumberoftasksfailed"></a>
<a id="tocsjobnumberoftasksfailed"></a>

```json
0
```

<h2 id="tocS_JobNumberOfTasksSucceeded">JobNumberOfTasksSucceeded</h2>
<!-- backwards compatibility -->
<a id="schemajobnumberoftaskssucceeded"></a>
<a id="schema_JobNumberOfTasksSucceeded"></a>
<a id="tocSjobnumberoftaskssucceeded"></a>
<a id="tocsjobnumberoftaskssucceeded"></a>

```json
0
```

<h2 id="tocS_JobTotalNumberOfTasks">JobTotalNumberOfTasks</h2>
<!-- backwards compatibility -->
<a id="schemajobtotalnumberoftasks"></a>
<a id="schema_JobTotalNumberOfTasks"></a>
<a id="tocSjobtotalnumberoftasks"></a>
<a id="tocsjobtotalnumberoftasks"></a>

```json
0
```

<h2 id="tocS_JobTimers">JobTimers</h2>
<!-- backwards compatibility -->
<a id="schemajobtimers"></a>
<a id="schema_JobTimers"></a>
<a id="tocSjobtimers"></a>
<a id="tocsjobtimers"></a>

```json
{
  "ElapsedTimeInActiveSeconds": {}
}
```

Provides timing details for the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElapsedTimeInActiveSeconds|object|false|none|none|

<h2 id="tocS_JobStatusList">JobStatusList</h2>
<!-- backwards compatibility -->
<a id="schemajobstatuslist"></a>
<a id="schema_JobStatusList"></a>
<a id="tocSjobstatuslist"></a>
<a id="tocsjobstatuslist"></a>

```json
[
  "Active"
]
```

<h2 id="tocS_JobTimeInStateSeconds">JobTimeInStateSeconds</h2>
<!-- backwards compatibility -->
<a id="schemajobtimeinstateseconds"></a>
<a id="schema_JobTimeInStateSeconds"></a>
<a id="tocSjobtimeinstateseconds"></a>
<a id="tocsjobtimeinstateseconds"></a>

```json
0
```

<h2 id="tocS_KmsKeyArnString">KmsKeyArnString</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarnstring"></a>
<a id="schema_KmsKeyArnString"></a>
<a id="tocSkmskeyarnstring"></a>
<a id="tocskmskeyarnstring"></a>

```json
"string"
```

<h2 id="tocS_LifecycleConfiguration">LifecycleConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleconfiguration"></a>
<a id="schema_LifecycleConfiguration"></a>
<a id="tocSlifecycleconfiguration"></a>
<a id="tocslifecycleconfiguration"></a>

```json
{
  "Rules": {}
}
```

The container for the Outposts bucket lifecycle configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rules|object|false|none|none|

<h2 id="tocS_LifecycleExpiration">LifecycleExpiration</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleexpiration"></a>
<a id="schema_LifecycleExpiration"></a>
<a id="tocSlifecycleexpiration"></a>
<a id="tocslifecycleexpiration"></a>

```json
{
  "Date": {},
  "Days": {},
  "ExpiredObjectDeleteMarker": {}
}
```

The container of the Outposts bucket lifecycle expiration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|false|none|none|
|Days|object|false|none|none|
|ExpiredObjectDeleteMarker|object|false|none|none|

<h2 id="tocS_LifecycleRuleFilter">LifecycleRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerulefilter"></a>
<a id="schema_LifecycleRuleFilter"></a>
<a id="tocSlifecyclerulefilter"></a>
<a id="tocslifecyclerulefilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "And": {
    "Prefix": {},
    "Tags": {},
    "ObjectSizeGreaterThan": {},
    "ObjectSizeLessThan": {}
  },
  "ObjectSizeGreaterThan": {},
  "ObjectSizeLessThan": {}
}
```

The container for the filter of the lifecycle rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|[S3Tag](#schemas3tag)|false|none|A container for a key-value name pair.|
|And|object|false|none|none|
|ObjectSizeGreaterThan|object|false|none|none|
|ObjectSizeLessThan|object|false|none|none|

<h2 id="tocS_TransitionList">TransitionList</h2>
<!-- backwards compatibility -->
<a id="schematransitionlist"></a>
<a id="schema_TransitionList"></a>
<a id="tocStransitionlist"></a>
<a id="tocstransitionlist"></a>

```json
[
  {
    "Date": {},
    "Days": {},
    "StorageClass": {}
  }
]
```

<h2 id="tocS_NoncurrentVersionTransitionList">NoncurrentVersionTransitionList</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversiontransitionlist"></a>
<a id="schema_NoncurrentVersionTransitionList"></a>
<a id="tocSnoncurrentversiontransitionlist"></a>
<a id="tocsnoncurrentversiontransitionlist"></a>

```json
[
  {
    "NoncurrentDays": {},
    "StorageClass": {}
  }
]
```

<h2 id="tocS_NoncurrentVersionExpiration">NoncurrentVersionExpiration</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversionexpiration"></a>
<a id="schema_NoncurrentVersionExpiration"></a>
<a id="tocSnoncurrentversionexpiration"></a>
<a id="tocsnoncurrentversionexpiration"></a>

```json
{
  "NoncurrentDays": {},
  "NewerNoncurrentVersions": {}
}
```

The container of the noncurrent version expiration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoncurrentDays|object|false|none|none|
|NewerNoncurrentVersions|object|false|none|none|

<h2 id="tocS_LifecycleRule">LifecycleRule</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclerule"></a>
<a id="schema_LifecycleRule"></a>
<a id="tocSlifecyclerule"></a>
<a id="tocslifecyclerule"></a>

```json
{
  "Expiration": {
    "Date": {},
    "Days": {},
    "ExpiredObjectDeleteMarker": {}
  },
  "ID": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "And": {
      "Prefix": {},
      "Tags": {},
      "ObjectSizeGreaterThan": {},
      "ObjectSizeLessThan": {}
    },
    "ObjectSizeGreaterThan": {},
    "ObjectSizeLessThan": {}
  },
  "Status": {},
  "Transitions": {},
  "NoncurrentVersionTransitions": {},
  "NoncurrentVersionExpiration": {
    "NoncurrentDays": {},
    "NewerNoncurrentVersions": {}
  },
  "AbortIncompleteMultipartUpload": {
    "DaysAfterInitiation": {}
  }
}
```

The container for the Outposts bucket lifecycle rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expiration|object|false|none|none|
|ID|object|false|none|none|
|Filter|object|false|none|none|
|Status|object|true|none|none|
|Transitions|object|false|none|none|
|NoncurrentVersionTransitions|object|false|none|none|
|NoncurrentVersionExpiration|object|false|none|none|
|AbortIncompleteMultipartUpload|object|false|none|none|

<h2 id="tocS_Prefix">Prefix</h2>
<!-- backwards compatibility -->
<a id="schemaprefix"></a>
<a id="schema_Prefix"></a>
<a id="tocSprefix"></a>
<a id="tocsprefix"></a>

```json
"string"
```

<h2 id="tocS_ObjectSizeGreaterThanBytes">ObjectSizeGreaterThanBytes</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsizegreaterthanbytes"></a>
<a id="schema_ObjectSizeGreaterThanBytes"></a>
<a id="tocSobjectsizegreaterthanbytes"></a>
<a id="tocsobjectsizegreaterthanbytes"></a>

```json
0
```

<h2 id="tocS_ObjectSizeLessThanBytes">ObjectSizeLessThanBytes</h2>
<!-- backwards compatibility -->
<a id="schemaobjectsizelessthanbytes"></a>
<a id="schema_ObjectSizeLessThanBytes"></a>
<a id="tocSobjectsizelessthanbytes"></a>
<a id="tocsobjectsizelessthanbytes"></a>

```json
0
```

<h2 id="tocS_LifecycleRuleAndOperator">LifecycleRuleAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemalifecycleruleandoperator"></a>
<a id="schema_LifecycleRuleAndOperator"></a>
<a id="tocSlifecycleruleandoperator"></a>
<a id="tocslifecycleruleandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {},
  "ObjectSizeGreaterThan": {},
  "ObjectSizeLessThan": {}
}
```

The container for the Outposts bucket lifecycle rule and operator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|
|ObjectSizeGreaterThan|object|false|none|none|
|ObjectSizeLessThan|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
0
```

<h2 id="tocS_ListAccessPointsForObjectLambdaRequest">ListAccessPointsForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspointsforobjectlambdarequest"></a>
<a id="schema_ListAccessPointsForObjectLambdaRequest"></a>
<a id="tocSlistaccesspointsforobjectlambdarequest"></a>
<a id="tocslistaccesspointsforobjectlambdarequest"></a>

```json
{}
```

<h2 id="tocS_ObjectLambdaAccessPointList">ObjectLambdaAccessPointList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointlist"></a>
<a id="schema_ObjectLambdaAccessPointList"></a>
<a id="tocSobjectlambdaaccesspointlist"></a>
<a id="tocsobjectlambdaaccesspointlist"></a>

```json
[
  {
    "Name": {},
    "ObjectLambdaAccessPointArn": {},
    "Alias": {
      "Value": {},
      "Status": {}
    }
  }
]
```

<h2 id="tocS_ListAccessPointsRequest">ListAccessPointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistaccesspointsrequest"></a>
<a id="schema_ListAccessPointsRequest"></a>
<a id="tocSlistaccesspointsrequest"></a>
<a id="tocslistaccesspointsrequest"></a>

```json
{}
```

<h2 id="tocS_StringForNextToken">StringForNextToken</h2>
<!-- backwards compatibility -->
<a id="schemastringfornexttoken"></a>
<a id="schema_StringForNextToken"></a>
<a id="tocSstringfornexttoken"></a>
<a id="tocsstringfornexttoken"></a>

```json
"string"
```

<h2 id="tocS_ListJobsRequest">ListJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsrequest"></a>
<a id="schema_ListJobsRequest"></a>
<a id="tocSlistjobsrequest"></a>
<a id="tocslistjobsrequest"></a>

```json
{}
```

<h2 id="tocS_ListMultiRegionAccessPointsRequest">ListMultiRegionAccessPointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmultiregionaccesspointsrequest"></a>
<a id="schema_ListMultiRegionAccessPointsRequest"></a>
<a id="tocSlistmultiregionaccesspointsrequest"></a>
<a id="tocslistmultiregionaccesspointsrequest"></a>

```json
{}
```

<h2 id="tocS_MultiRegionAccessPointReportList">MultiRegionAccessPointReportList</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointreportlist"></a>
<a id="schema_MultiRegionAccessPointReportList"></a>
<a id="tocSmultiregionaccesspointreportlist"></a>
<a id="tocsmultiregionaccesspointreportlist"></a>

```json
[
  {
    "Name": {},
    "Alias": {},
    "CreatedAt": {},
    "PublicAccessBlock": {
      "BlockPublicAcls": {},
      "IgnorePublicAcls": {},
      "BlockPublicPolicy": {},
      "RestrictPublicBuckets": {}
    },
    "Status": {},
    "Regions": {}
  }
]
```

<h2 id="tocS_ListRegionalBucketsRequest">ListRegionalBucketsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistregionalbucketsrequest"></a>
<a id="schema_ListRegionalBucketsRequest"></a>
<a id="tocSlistregionalbucketsrequest"></a>
<a id="tocslistregionalbucketsrequest"></a>

```json
{}
```

<h2 id="tocS_RegionalBucketList">RegionalBucketList</h2>
<!-- backwards compatibility -->
<a id="schemaregionalbucketlist"></a>
<a id="schema_RegionalBucketList"></a>
<a id="tocSregionalbucketlist"></a>
<a id="tocsregionalbucketlist"></a>

```json
[
  {
    "Bucket": {},
    "BucketArn": {},
    "PublicAccessBlockEnabled": {},
    "CreationDate": {},
    "OutpostId": {}
  }
]
```

<h2 id="tocS_S3AWSRegion">S3AWSRegion</h2>
<!-- backwards compatibility -->
<a id="schemas3awsregion"></a>
<a id="schema_S3AWSRegion"></a>
<a id="tocSs3awsregion"></a>
<a id="tocss3awsregion"></a>

```json
"string"
```

<h2 id="tocS_ListStorageLensConfigurationEntry">ListStorageLensConfigurationEntry</h2>
<!-- backwards compatibility -->
<a id="schemaliststoragelensconfigurationentry"></a>
<a id="schema_ListStorageLensConfigurationEntry"></a>
<a id="tocSliststoragelensconfigurationentry"></a>
<a id="tocsliststoragelensconfigurationentry"></a>

```json
{
  "Id": {},
  "StorageLensArn": {},
  "HomeRegion": {},
  "IsEnabled": {}
}
```

Part of <code>ListStorageLensConfigurationResult</code>. Each entry includes the description of the S3 Storage Lens configuration, its home Region, whether it is enabled, its Amazon Resource Name (ARN), and config ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|StorageLensArn|object|true|none|none|
|HomeRegion|object|true|none|none|
|IsEnabled|object|false|none|none|

<h2 id="tocS_ListStorageLensConfigurationsRequest">ListStorageLensConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaliststoragelensconfigurationsrequest"></a>
<a id="schema_ListStorageLensConfigurationsRequest"></a>
<a id="tocSliststoragelensconfigurationsrequest"></a>
<a id="tocsliststoragelensconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS_StorageLensConfigurationList">StorageLensConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensconfigurationlist"></a>
<a id="schema_StorageLensConfigurationList"></a>
<a id="tocSstoragelensconfigurationlist"></a>
<a id="tocsstoragelensconfigurationlist"></a>

```json
[
  {
    "Id": {},
    "StorageLensArn": {},
    "HomeRegion": {},
    "IsEnabled": {}
  }
]
```

<h2 id="tocS_MFA">MFA</h2>
<!-- backwards compatibility -->
<a id="schemamfa"></a>
<a id="schema_MFA"></a>
<a id="tocSmfa"></a>
<a id="tocsmfa"></a>

```json
"string"
```

<h2 id="tocS_ManifestPrefixString">ManifestPrefixString</h2>
<!-- backwards compatibility -->
<a id="schemamanifestprefixstring"></a>
<a id="schema_ManifestPrefixString"></a>
<a id="tocSmanifestprefixstring"></a>
<a id="tocsmanifestprefixstring"></a>

```json
"string"
```

<h2 id="tocS_MetricsStatus">MetricsStatus</h2>
<!-- backwards compatibility -->
<a id="schemametricsstatus"></a>
<a id="schema_MetricsStatus"></a>
<a id="tocSmetricsstatus"></a>
<a id="tocsmetricsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ReplicationTimeValue">ReplicationTimeValue</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtimevalue"></a>
<a id="schema_ReplicationTimeValue"></a>
<a id="tocSreplicationtimevalue"></a>
<a id="tocsreplicationtimevalue"></a>

```json
{
  "Minutes": {}
}
```

<p>A container that specifies the time value for S3 Replication Time Control (S3 RTC). This value is also used for the replication metrics <code>EventThreshold</code> element. </p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Minutes|object|false|none|none|

<h2 id="tocS_MinStorageBytesPercentage">MinStorageBytesPercentage</h2>
<!-- backwards compatibility -->
<a id="schemaminstoragebytespercentage"></a>
<a id="schema_MinStorageBytesPercentage"></a>
<a id="tocSminstoragebytespercentage"></a>
<a id="tocsminstoragebytespercentage"></a>

```json
0.1
```

<h2 id="tocS_Minutes">Minutes</h2>
<!-- backwards compatibility -->
<a id="schemaminutes"></a>
<a id="schema_Minutes"></a>
<a id="tocSminutes"></a>
<a id="tocsminutes"></a>

```json
0
```

<h2 id="tocS_MultiRegionAccessPointAlias">MultiRegionAccessPointAlias</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointalias"></a>
<a id="schema_MultiRegionAccessPointAlias"></a>
<a id="tocSmultiregionaccesspointalias"></a>
<a id="tocsmultiregionaccesspointalias"></a>

```json
"string"
```

<h2 id="tocS_ProposedMultiRegionAccessPointPolicy">ProposedMultiRegionAccessPointPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaproposedmultiregionaccesspointpolicy"></a>
<a id="schema_ProposedMultiRegionAccessPointPolicy"></a>
<a id="tocSproposedmultiregionaccesspointpolicy"></a>
<a id="tocsproposedmultiregionaccesspointpolicy"></a>

```json
{
  "Policy": {}
}
```

<p>The proposed access control policy for the Multi-Region Access Point.</p> <p>When you update the policy, the update is first listed as the proposed policy. After the update is finished and all Regions have been updated, the proposed policy is listed as the established policy. If both policies have the same version number, the proposed policy is the established policy.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|false|none|none|

<h2 id="tocS_RegionName">RegionName</h2>
<!-- backwards compatibility -->
<a id="schemaregionname"></a>
<a id="schema_RegionName"></a>
<a id="tocSregionname"></a>
<a id="tocsregionname"></a>

```json
"string"
```

<h2 id="tocS_MultiRegionAccessPointRegionalResponse">MultiRegionAccessPointRegionalResponse</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointregionalresponse"></a>
<a id="schema_MultiRegionAccessPointRegionalResponse"></a>
<a id="tocSmultiregionaccesspointregionalresponse"></a>
<a id="tocsmultiregionaccesspointregionalresponse"></a>

```json
{
  "Name": {},
  "RequestStatus": {}
}
```

Status information for a single Multi-Region Access Point Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|RequestStatus|object|false|none|none|

<h2 id="tocS_MultiRegionAccessPointRegionalResponseList">MultiRegionAccessPointRegionalResponseList</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointregionalresponselist"></a>
<a id="schema_MultiRegionAccessPointRegionalResponseList"></a>
<a id="tocSmultiregionaccesspointregionalresponselist"></a>
<a id="tocsmultiregionaccesspointregionalresponselist"></a>

```json
[
  {
    "Name": {},
    "RequestStatus": {}
  }
]
```

<h2 id="tocS_MultiRegionAccessPointStatus">MultiRegionAccessPointStatus</h2>
<!-- backwards compatibility -->
<a id="schemamultiregionaccesspointstatus"></a>
<a id="schema_MultiRegionAccessPointStatus"></a>
<a id="tocSmultiregionaccesspointstatus"></a>
<a id="tocsmultiregionaccesspointstatus"></a>

```json
"READY"
```

<h2 id="tocS_RegionReportList">RegionReportList</h2>
<!-- backwards compatibility -->
<a id="schemaregionreportlist"></a>
<a id="schema_RegionReportList"></a>
<a id="tocSregionreportlist"></a>
<a id="tocsregionreportlist"></a>

```json
[
  {
    "Bucket": {},
    "Region": {},
    "BucketAccountId": {}
  }
]
```

<h2 id="tocS_TrafficDialPercentage">TrafficDialPercentage</h2>
<!-- backwards compatibility -->
<a id="schematrafficdialpercentage"></a>
<a id="schema_TrafficDialPercentage"></a>
<a id="tocStrafficdialpercentage"></a>
<a id="tocstrafficdialpercentage"></a>

```json
0
```

<h2 id="tocS_NonEmptyMaxLength2048String">NonEmptyMaxLength2048String</h2>
<!-- backwards compatibility -->
<a id="schemanonemptymaxlength2048string"></a>
<a id="schema_NonEmptyMaxLength2048String"></a>
<a id="tocSnonemptymaxlength2048string"></a>
<a id="tocsnonemptymaxlength2048string"></a>

```json
"string"
```

<h2 id="tocS_NoncurrentVersionCount">NoncurrentVersionCount</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversioncount"></a>
<a id="schema_NoncurrentVersionCount"></a>
<a id="tocSnoncurrentversioncount"></a>
<a id="tocsnoncurrentversioncount"></a>

```json
0
```

<h2 id="tocS_TransitionStorageClass">TransitionStorageClass</h2>
<!-- backwards compatibility -->
<a id="schematransitionstorageclass"></a>
<a id="schema_TransitionStorageClass"></a>
<a id="tocStransitionstorageclass"></a>
<a id="tocstransitionstorageclass"></a>

```json
"GLACIER"
```

<h2 id="tocS_NoncurrentVersionTransition">NoncurrentVersionTransition</h2>
<!-- backwards compatibility -->
<a id="schemanoncurrentversiontransition"></a>
<a id="schema_NoncurrentVersionTransition"></a>
<a id="tocSnoncurrentversiontransition"></a>
<a id="tocsnoncurrentversiontransition"></a>

```json
{
  "NoncurrentDays": {},
  "StorageClass": {}
}
```

The container for the noncurrent version transition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NoncurrentDays|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_ObjectLambdaAccessPoint">ObjectLambdaAccessPoint</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspoint"></a>
<a id="schema_ObjectLambdaAccessPoint"></a>
<a id="tocSobjectlambdaaccesspoint"></a>
<a id="tocsobjectlambdaaccesspoint"></a>

```json
{
  "Name": {},
  "ObjectLambdaAccessPointArn": {},
  "Alias": {
    "Value": {},
    "Status": {}
  }
}
```

An access point with an attached Lambda function used to access transformed data from an Amazon S3 bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|ObjectLambdaAccessPointArn|object|false|none|none|
|Alias|object|false|none|none|

<h2 id="tocS_ObjectLambdaAccessPointAliasValue">ObjectLambdaAccessPointAliasValue</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointaliasvalue"></a>
<a id="schema_ObjectLambdaAccessPointAliasValue"></a>
<a id="tocSobjectlambdaaccesspointaliasvalue"></a>
<a id="tocsobjectlambdaaccesspointaliasvalue"></a>

```json
"string"
```

<h2 id="tocS_ObjectLambdaAccessPointAliasStatus">ObjectLambdaAccessPointAliasStatus</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaaccesspointaliasstatus"></a>
<a id="schema_ObjectLambdaAccessPointAliasStatus"></a>
<a id="tocSobjectlambdaaccesspointaliasstatus"></a>
<a id="tocsobjectlambdaaccesspointaliasstatus"></a>

```json
"PROVISIONING"
```

<h2 id="tocS_ObjectLambdaAllowedFeature">ObjectLambdaAllowedFeature</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdaallowedfeature"></a>
<a id="schema_ObjectLambdaAllowedFeature"></a>
<a id="tocSobjectlambdaallowedfeature"></a>
<a id="tocsobjectlambdaallowedfeature"></a>

```json
"GetObject-Range"
```

<h2 id="tocS_ObjectLambdaContentTransformation">ObjectLambdaContentTransformation</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdacontenttransformation"></a>
<a id="schema_ObjectLambdaContentTransformation"></a>
<a id="tocSobjectlambdacontenttransformation"></a>
<a id="tocsobjectlambdacontenttransformation"></a>

```json
{
  "AwsLambda": {
    "FunctionArn": {},
    "FunctionPayload": {}
  }
}
```

A container for AwsLambdaTransformation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AwsLambda|object|false|none|none|

<h2 id="tocS_ObjectLambdaTransformationConfigurationActionsList">ObjectLambdaTransformationConfigurationActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdatransformationconfigurationactionslist"></a>
<a id="schema_ObjectLambdaTransformationConfigurationActionsList"></a>
<a id="tocSobjectlambdatransformationconfigurationactionslist"></a>
<a id="tocsobjectlambdatransformationconfigurationactionslist"></a>

```json
[
  {}
]
```

<h2 id="tocS_ObjectLambdaTransformationConfiguration">ObjectLambdaTransformationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdatransformationconfiguration"></a>
<a id="schema_ObjectLambdaTransformationConfiguration"></a>
<a id="tocSobjectlambdatransformationconfiguration"></a>
<a id="tocsobjectlambdatransformationconfiguration"></a>

```json
{
  "Actions": {},
  "ContentTransformation": {
    "AwsLambda": {
      "FunctionArn": {},
      "FunctionPayload": {}
    }
  }
}
```

A configuration used when creating an Object Lambda Access Point transformation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Actions|object|true|none|none|
|ContentTransformation|object|true|none|none|

<h2 id="tocS_ObjectLambdaTransformationConfigurationAction">ObjectLambdaTransformationConfigurationAction</h2>
<!-- backwards compatibility -->
<a id="schemaobjectlambdatransformationconfigurationaction"></a>
<a id="schema_ObjectLambdaTransformationConfigurationAction"></a>
<a id="tocSobjectlambdatransformationconfigurationaction"></a>
<a id="tocsobjectlambdatransformationconfigurationaction"></a>

```json
"GetObject"
```

<h2 id="tocS_OutputSchemaVersion">OutputSchemaVersion</h2>
<!-- backwards compatibility -->
<a id="schemaoutputschemaversion"></a>
<a id="schema_OutputSchemaVersion"></a>
<a id="tocSoutputschemaversion"></a>
<a id="tocsoutputschemaversion"></a>

```json
"V_1"
```

<h2 id="tocS_PrefixLevelStorageMetrics">PrefixLevelStorageMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaprefixlevelstoragemetrics"></a>
<a id="schema_PrefixLevelStorageMetrics"></a>
<a id="tocSprefixlevelstoragemetrics"></a>
<a id="tocsprefixlevelstoragemetrics"></a>

```json
{
  "IsEnabled": {},
  "SelectionCriteria": {
    "Delimiter": {},
    "MaxDepth": {},
    "MinStorageBytesPercentage": {}
  }
}
```

A container for the prefix-level storage metrics for S3 Storage Lens.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsEnabled|object|false|none|none|
|SelectionCriteria|[SelectionCriteria](#schemaselectioncriteria)|false|none|<p/>|

<h2 id="tocS_SelectionCriteria">SelectionCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaselectioncriteria"></a>
<a id="schema_SelectionCriteria"></a>
<a id="tocSselectioncriteria"></a>
<a id="tocsselectioncriteria"></a>

```json
{
  "Delimiter": {},
  "MaxDepth": {},
  "MinStorageBytesPercentage": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Delimiter|object|false|none|none|
|MaxDepth|object|false|none|none|
|MinStorageBytesPercentage|object|false|none|none|

<h2 id="tocS_Priority">Priority</h2>
<!-- backwards compatibility -->
<a id="schemapriority"></a>
<a id="schema_Priority"></a>
<a id="tocSpriority"></a>
<a id="tocspriority"></a>

```json
0
```

<h2 id="tocS_PutAccessPointConfigurationForObjectLambdaRequest">PutAccessPointConfigurationForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccesspointconfigurationforobjectlambdarequest"></a>
<a id="schema_PutAccessPointConfigurationForObjectLambdaRequest"></a>
<a id="tocSputaccesspointconfigurationforobjectlambdarequest"></a>
<a id="tocsputaccesspointconfigurationforobjectlambdarequest"></a>

```json
{
  "Configuration": {
    "SupportingAccessPoint": {},
    "CloudWatchMetricsEnabled": {},
    "AllowedFeatures": {},
    "TransformationConfigurations": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|true|none|none|

<h2 id="tocS_PutAccessPointPolicyForObjectLambdaRequest">PutAccessPointPolicyForObjectLambdaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccesspointpolicyforobjectlambdarequest"></a>
<a id="schema_PutAccessPointPolicyForObjectLambdaRequest"></a>
<a id="tocSputaccesspointpolicyforobjectlambdarequest"></a>
<a id="tocsputaccesspointpolicyforobjectlambdarequest"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_PutAccessPointPolicyRequest">PutAccessPointPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputaccesspointpolicyrequest"></a>
<a id="schema_PutAccessPointPolicyRequest"></a>
<a id="tocSputaccesspointpolicyrequest"></a>
<a id="tocsputaccesspointpolicyrequest"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_PutBucketLifecycleConfigurationRequest">PutBucketLifecycleConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketlifecycleconfigurationrequest"></a>
<a id="schema_PutBucketLifecycleConfigurationRequest"></a>
<a id="tocSputbucketlifecycleconfigurationrequest"></a>
<a id="tocsputbucketlifecycleconfigurationrequest"></a>

```json
{
  "LifecycleConfiguration": {
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecycleConfiguration|object|false|none|none|

<h2 id="tocS_PutBucketPolicyRequest">PutBucketPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketpolicyrequest"></a>
<a id="schema_PutBucketPolicyRequest"></a>
<a id="tocSputbucketpolicyrequest"></a>
<a id="tocsputbucketpolicyrequest"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_PutBucketReplicationRequest">PutBucketReplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketreplicationrequest"></a>
<a id="schema_PutBucketReplicationRequest"></a>
<a id="tocSputbucketreplicationrequest"></a>
<a id="tocsputbucketreplicationrequest"></a>

```json
{
  "ReplicationConfiguration": {
    "Role": {},
    "Rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReplicationConfiguration|object|true|none|none|

<h2 id="tocS_Tagging">Tagging</h2>
<!-- backwards compatibility -->
<a id="schematagging"></a>
<a id="schema_Tagging"></a>
<a id="tocStagging"></a>
<a id="tocstagging"></a>

```json
{
  "TagSet": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagSet|object|true|none|none|

<h2 id="tocS_PutBucketTaggingRequest">PutBucketTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbuckettaggingrequest"></a>
<a id="schema_PutBucketTaggingRequest"></a>
<a id="tocSputbuckettaggingrequest"></a>
<a id="tocsputbuckettaggingrequest"></a>

```json
{
  "Tagging": {
    "TagSet": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tagging|object|true|none|none|

<h2 id="tocS_VersioningConfiguration">VersioningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaversioningconfiguration"></a>
<a id="schema_VersioningConfiguration"></a>
<a id="tocSversioningconfiguration"></a>
<a id="tocsversioningconfiguration"></a>

```json
{
  "MFADelete": {},
  "Status": {}
}
```

Describes the versioning state of an Amazon S3 on Outposts bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MFADelete|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_PutBucketVersioningRequest">PutBucketVersioningRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputbucketversioningrequest"></a>
<a id="schema_PutBucketVersioningRequest"></a>
<a id="tocSputbucketversioningrequest"></a>
<a id="tocsputbucketversioningrequest"></a>

```json
{
  "VersioningConfiguration": {
    "MFADelete": {},
    "Status": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VersioningConfiguration|object|true|none|none|

<h2 id="tocS_PutJobTaggingRequest">PutJobTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputjobtaggingrequest"></a>
<a id="schema_PutJobTaggingRequest"></a>
<a id="tocSputjobtaggingrequest"></a>
<a id="tocsputjobtaggingrequest"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_PutMultiRegionAccessPointPolicyRequest">PutMultiRegionAccessPointPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputmultiregionaccesspointpolicyrequest"></a>
<a id="schema_PutMultiRegionAccessPointPolicyRequest"></a>
<a id="tocSputmultiregionaccesspointpolicyrequest"></a>
<a id="tocsputmultiregionaccesspointpolicyrequest"></a>

```json
{
  "ClientToken": {},
  "Details": {
    "Name": {},
    "Policy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientToken|object|true|none|none|
|Details|object|true|none|none|

<h2 id="tocS_PutPublicAccessBlockRequest">PutPublicAccessBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputpublicaccessblockrequest"></a>
<a id="schema_PutPublicAccessBlockRequest"></a>
<a id="tocSputpublicaccessblockrequest"></a>
<a id="tocsputpublicaccessblockrequest"></a>

```json
{
  "PublicAccessBlockConfiguration": {
    "BlockPublicAcls": {},
    "IgnorePublicAcls": {},
    "BlockPublicPolicy": {},
    "RestrictPublicBuckets": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAccessBlockConfiguration|object|true|none|none|

<h2 id="tocS_PutStorageLensConfigurationRequest">PutStorageLensConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputstoragelensconfigurationrequest"></a>
<a id="schema_PutStorageLensConfigurationRequest"></a>
<a id="tocSputstoragelensconfigurationrequest"></a>
<a id="tocsputstoragelensconfigurationrequest"></a>

```json
{
  "StorageLensConfiguration": {
    "Id": {},
    "AccountLevel": {
      "ActivityMetrics": {
        "IsEnabled": {}
      },
      "BucketLevel": {
        "ActivityMetrics": {
          "IsEnabled": {}
        },
        "PrefixLevel": {
          "StorageMetrics": {
            "IsEnabled": {},
            "SelectionCriteria": {
              "Delimiter": {},
              "MaxDepth": {},
              "MinStorageBytesPercentage": {}
            }
          }
        },
        "AdvancedCostOptimizationMetrics": {
          "IsEnabled": {}
        },
        "AdvancedDataProtectionMetrics": {
          "IsEnabled": {}
        },
        "DetailedStatusCodesMetrics": {
          "IsEnabled": {}
        }
      },
      "AdvancedCostOptimizationMetrics": {
        "IsEnabled": {}
      },
      "AdvancedDataProtectionMetrics": {
        "IsEnabled": {}
      },
      "DetailedStatusCodesMetrics": {
        "IsEnabled": {}
      }
    },
    "Include": {
      "Buckets": {},
      "Regions": {}
    },
    "Exclude": {
      "Buckets": {},
      "Regions": {}
    },
    "DataExport": {
      "S3BucketDestination": {
        "Format": {},
        "OutputSchemaVersion": {},
        "AccountId": {},
        "Arn": {},
        "Prefix": {},
        "Encryption": {
          "SSES3": {},
          "SSEKMS": {
            "KeyId": {}
          }
        }
      },
      "CloudWatchMetrics": {
        "IsEnabled": {}
      }
    },
    "IsEnabled": {},
    "AwsOrg": {
      "Arn": {}
    },
    "StorageLensArn": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageLensConfiguration|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PutStorageLensConfigurationTaggingRequest">PutStorageLensConfigurationTaggingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputstoragelensconfigurationtaggingrequest"></a>
<a id="schema_PutStorageLensConfigurationTaggingRequest"></a>
<a id="tocSputstoragelensconfigurationtaggingrequest"></a>
<a id="tocsputstoragelensconfigurationtaggingrequest"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "Bucket": {},
  "BucketAccountId": {}
}
```

A Region that supports a Multi-Region Access Point as well as the associated bucket for the Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|BucketAccountId|object|false|none|none|

<h2 id="tocS_RegionReport">RegionReport</h2>
<!-- backwards compatibility -->
<a id="schemaregionreport"></a>
<a id="schema_RegionReport"></a>
<a id="tocSregionreport"></a>
<a id="tocsregionreport"></a>

```json
{
  "Bucket": {},
  "Region": {},
  "BucketAccountId": {}
}
```

A combination of a bucket and Region that's part of a Multi-Region Access Point.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Region|object|false|none|none|
|BucketAccountId|object|false|none|none|

<h2 id="tocS_RegionalBucket">RegionalBucket</h2>
<!-- backwards compatibility -->
<a id="schemaregionalbucket"></a>
<a id="schema_RegionalBucket"></a>
<a id="tocSregionalbucket"></a>
<a id="tocsregionalbucket"></a>

```json
{
  "Bucket": {},
  "BucketArn": {},
  "PublicAccessBlockEnabled": {},
  "CreationDate": {},
  "OutpostId": {}
}
```

The container for the regional bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|true|none|none|
|BucketArn|object|false|none|none|
|PublicAccessBlockEnabled|object|true|none|none|
|CreationDate|object|true|none|none|
|OutpostId|object|false|none|none|

<h2 id="tocS_ReplicaModificationsStatus">ReplicaModificationsStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicamodificationsstatus"></a>
<a id="schema_ReplicaModificationsStatus"></a>
<a id="tocSreplicamodificationsstatus"></a>
<a id="tocsreplicamodificationsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_ReplicaModifications">ReplicaModifications</h2>
<!-- backwards compatibility -->
<a id="schemareplicamodifications"></a>
<a id="schema_ReplicaModifications"></a>
<a id="tocSreplicamodifications"></a>
<a id="tocsreplicamodifications"></a>

```json
{
  "Status": {}
}
```

<p>A filter that you can use to specify whether replica modification sync is enabled. S3 on Outposts replica modification sync can help you keep object metadata synchronized between replicas and source objects. By default, S3 on Outposts replicates metadata from the source objects to the replicas only. When replica modification sync is enabled, S3 on Outposts replicates metadata changes made to the replica copies back to the source object, making the replication bidirectional.</p> <p>To replicate object metadata modifications on replicas, you can specify this element and set the <code>Status</code> of this element to <code>Enabled</code>.</p> <note> <p>You must enable replica modification sync on the source and destination buckets to replicate replica metadata changes between the source and the replicas.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_ReplicationRuleFilter">ReplicationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrulefilter"></a>
<a id="schema_ReplicationRuleFilter"></a>
<a id="tocSreplicationrulefilter"></a>
<a id="tocsreplicationrulefilter"></a>

```json
{
  "Prefix": {},
  "Tag": {
    "Key": {},
    "Value": {}
  },
  "And": {
    "Prefix": {},
    "Tags": {}
  }
}
```

A filter that identifies the subset of objects to which the replication rule applies. A <code>Filter</code> element must specify exactly one <code>Prefix</code>, <code>Tag</code>, or <code>And</code> child element.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tag|[S3Tag](#schemas3tag)|false|none|A container for a key-value name pair.|
|And|object|false|none|none|

<h2 id="tocS_ReplicationRuleStatus">ReplicationRuleStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrulestatus"></a>
<a id="schema_ReplicationRuleStatus"></a>
<a id="tocSreplicationrulestatus"></a>
<a id="tocsreplicationrulestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_SourceSelectionCriteria">SourceSelectionCriteria</h2>
<!-- backwards compatibility -->
<a id="schemasourceselectioncriteria"></a>
<a id="schema_SourceSelectionCriteria"></a>
<a id="tocSsourceselectioncriteria"></a>
<a id="tocssourceselectioncriteria"></a>

```json
{
  "SseKmsEncryptedObjects": {
    "Status": {}
  },
  "ReplicaModifications": {
    "Status": {}
  }
}
```

A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SseKmsEncryptedObjects|object|false|none|none|
|ReplicaModifications|object|false|none|none|

<h2 id="tocS_ReplicationRule">ReplicationRule</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrule"></a>
<a id="schema_ReplicationRule"></a>
<a id="tocSreplicationrule"></a>
<a id="tocsreplicationrule"></a>

```json
{
  "ID": {},
  "Priority": {},
  "Prefix": {},
  "Filter": {
    "Prefix": {},
    "Tag": {
      "Key": {},
      "Value": {}
    },
    "And": {
      "Prefix": {},
      "Tags": {}
    }
  },
  "Status": {},
  "SourceSelectionCriteria": {
    "SseKmsEncryptedObjects": {
      "Status": {}
    },
    "ReplicaModifications": {
      "Status": {}
    }
  },
  "ExistingObjectReplication": {
    "Status": {}
  },
  "Destination": {
    "Account": {},
    "Bucket": {},
    "ReplicationTime": {
      "Status": {},
      "Time": {
        "Minutes": {}
      }
    },
    "AccessControlTranslation": {
      "Owner": {}
    },
    "EncryptionConfiguration": {
      "ReplicaKmsKeyID": {}
    },
    "Metrics": {
      "Status": {},
      "EventThreshold": {
        "Minutes": {}
      }
    },
    "StorageClass": {}
  },
  "DeleteMarkerReplication": {
    "Status": {}
  },
  "Bucket": {}
}
```

Specifies which S3 on Outposts objects to replicate and where to store the replicas.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|none|
|Priority|object|false|none|none|
|Prefix|object|false|none|none|
|Filter|object|false|none|none|
|Status|object|true|none|none|
|SourceSelectionCriteria|object|false|none|none|
|ExistingObjectReplication|object|false|none|none|
|Destination|object|true|none|none|
|DeleteMarkerReplication|object|false|none|none|
|Bucket|object|true|none|none|

<h2 id="tocS_ReplicationRuleAndOperator">ReplicationRuleAndOperator</h2>
<!-- backwards compatibility -->
<a id="schemareplicationruleandoperator"></a>
<a id="schema_ReplicationRuleAndOperator"></a>
<a id="tocSreplicationruleandoperator"></a>
<a id="tocsreplicationruleandoperator"></a>

```json
{
  "Prefix": {},
  "Tags": {}
}
```

<p>A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. </p> <p>For example:</p> <ul> <li> <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap these filters in an <code>And</code> element. </p> </li> <li> <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements in an <code>And</code> element.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prefix|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ReplicationStatus">ReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatus"></a>
<a id="schema_ReplicationStatus"></a>
<a id="tocSreplicationstatus"></a>
<a id="tocsreplicationstatus"></a>

```json
"COMPLETED"
```

<h2 id="tocS_ReplicationTimeStatus">ReplicationTimeStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationtimestatus"></a>
<a id="schema_ReplicationTimeStatus"></a>
<a id="tocSreplicationtimestatus"></a>
<a id="tocsreplicationtimestatus"></a>

```json
"Enabled"
```

<h2 id="tocS_RequestedJobStatus">RequestedJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemarequestedjobstatus"></a>
<a id="schema_RequestedJobStatus"></a>
<a id="tocSrequestedjobstatus"></a>
<a id="tocsrequestedjobstatus"></a>

```json
"Cancelled"
```

<h2 id="tocS_S3ObjectOwner">S3ObjectOwner</h2>
<!-- backwards compatibility -->
<a id="schemas3objectowner"></a>
<a id="schema_S3ObjectOwner"></a>
<a id="tocSs3objectowner"></a>
<a id="tocss3objectowner"></a>

```json
{
  "ID": {},
  "DisplayName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|object|false|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_S3GrantList">S3GrantList</h2>
<!-- backwards compatibility -->
<a id="schemas3grantlist"></a>
<a id="schema_S3GrantList"></a>
<a id="tocSs3grantlist"></a>
<a id="tocss3grantlist"></a>

```json
[
  {
    "Grantee": {
      "TypeIdentifier": {},
      "Identifier": {},
      "DisplayName": {}
    },
    "Permission": {}
  }
]
```

<h2 id="tocS_S3AccessControlList">S3AccessControlList</h2>
<!-- backwards compatibility -->
<a id="schemas3accesscontrollist"></a>
<a id="schema_S3AccessControlList"></a>
<a id="tocSs3accesscontrollist"></a>
<a id="tocss3accesscontrollist"></a>

```json
{
  "Owner": {
    "ID": {},
    "DisplayName": {}
  },
  "Grants": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Owner|object|true|none|none|
|Grants|object|false|none|none|

<h2 id="tocS_S3CannedAccessControlList">S3CannedAccessControlList</h2>
<!-- backwards compatibility -->
<a id="schemas3cannedaccesscontrollist"></a>
<a id="schema_S3CannedAccessControlList"></a>
<a id="tocSs3cannedaccesscontrollist"></a>
<a id="tocss3cannedaccesscontrollist"></a>

```json
"private"
```

<h2 id="tocS_S3AccessControlPolicy">S3AccessControlPolicy</h2>
<!-- backwards compatibility -->
<a id="schemas3accesscontrolpolicy"></a>
<a id="schema_S3AccessControlPolicy"></a>
<a id="tocSs3accesscontrolpolicy"></a>
<a id="tocss3accesscontrolpolicy"></a>

```json
{
  "AccessControlList": {
    "Owner": {
      "ID": {},
      "DisplayName": {}
    },
    "Grants": {}
  },
  "CannedAccessControlList": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessControlList|object|false|none|none|
|CannedAccessControlList|object|false|none|none|

<h2 id="tocS_StorageLensDataExportEncryption">StorageLensDataExportEncryption</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensdataexportencryption"></a>
<a id="schema_StorageLensDataExportEncryption"></a>
<a id="tocSstoragelensdataexportencryption"></a>
<a id="tocsstoragelensdataexportencryption"></a>

```json
{
  "SSES3": {},
  "SSEKMS": {
    "KeyId": {}
  }
}
```

A container for the encryption of the S3 Storage Lens metrics exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SSES3|object|false|none|none|
|SSEKMS|object|false|none|none|

<h2 id="tocS_S3BucketDestination">S3BucketDestination</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketdestination"></a>
<a id="schema_S3BucketDestination"></a>
<a id="tocSs3bucketdestination"></a>
<a id="tocss3bucketdestination"></a>

```json
{
  "Format": {},
  "OutputSchemaVersion": {},
  "AccountId": {},
  "Arn": {},
  "Prefix": {},
  "Encryption": {
    "SSES3": {},
    "SSEKMS": {
      "KeyId": {}
    }
  }
}
```

A container for the bucket where the Amazon S3 Storage Lens metrics export files are located.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|true|none|none|
|OutputSchemaVersion|object|true|none|none|
|AccountId|object|true|none|none|
|Arn|object|true|none|none|
|Prefix|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_S3ChecksumAlgorithm">S3ChecksumAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemas3checksumalgorithm"></a>
<a id="schema_S3ChecksumAlgorithm"></a>
<a id="tocSs3checksumalgorithm"></a>
<a id="tocss3checksumalgorithm"></a>

```json
"CRC32"
```

<h2 id="tocS_S3ContentLength">S3ContentLength</h2>
<!-- backwards compatibility -->
<a id="schemas3contentlength"></a>
<a id="schema_S3ContentLength"></a>
<a id="tocSs3contentlength"></a>
<a id="tocss3contentlength"></a>

```json
0
```

<h2 id="tocS_S3MetadataDirective">S3MetadataDirective</h2>
<!-- backwards compatibility -->
<a id="schemas3metadatadirective"></a>
<a id="schema_S3MetadataDirective"></a>
<a id="tocSs3metadatadirective"></a>
<a id="tocss3metadatadirective"></a>

```json
"COPY"
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

<h2 id="tocS_S3ObjectMetadata">S3ObjectMetadata</h2>
<!-- backwards compatibility -->
<a id="schemas3objectmetadata"></a>
<a id="schema_S3ObjectMetadata"></a>
<a id="tocSs3objectmetadata"></a>
<a id="tocss3objectmetadata"></a>

```json
{
  "CacheControl": {},
  "ContentDisposition": {},
  "ContentEncoding": {},
  "ContentLanguage": {},
  "UserMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "ContentLength": {},
  "ContentMD5": {},
  "ContentType": {},
  "HttpExpiresDate": {},
  "RequesterCharged": {},
  "SSEAlgorithm": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CacheControl|object|false|none|none|
|ContentDisposition|object|false|none|none|
|ContentEncoding|object|false|none|none|
|ContentLanguage|object|false|none|none|
|UserMetadata|object|false|none|none|
|ContentLength|object|false|none|none|
|ContentMD5|object|false|none|none|
|ContentType|object|false|none|none|
|HttpExpiresDate|object|false|none|none|
|RequesterCharged|object|false|none|none|
|SSEAlgorithm|object|false|none|none|

<h2 id="tocS_S3StorageClass">S3StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemas3storageclass"></a>
<a id="schema_S3StorageClass"></a>
<a id="tocSs3storageclass"></a>
<a id="tocss3storageclass"></a>

```json
"STANDARD"
```

<h2 id="tocS_S3ObjectLockLegalHoldStatus">S3ObjectLockLegalHoldStatus</h2>
<!-- backwards compatibility -->
<a id="schemas3objectlocklegalholdstatus"></a>
<a id="schema_S3ObjectLockLegalHoldStatus"></a>
<a id="tocSs3objectlocklegalholdstatus"></a>
<a id="tocss3objectlocklegalholdstatus"></a>

```json
"OFF"
```

<h2 id="tocS_S3ObjectLockMode">S3ObjectLockMode</h2>
<!-- backwards compatibility -->
<a id="schemas3objectlockmode"></a>
<a id="schema_S3ObjectLockMode"></a>
<a id="tocSs3objectlockmode"></a>
<a id="tocss3objectlockmode"></a>

```json
"COMPLIANCE"
```

<h2 id="tocS_S3ExpirationInDays">S3ExpirationInDays</h2>
<!-- backwards compatibility -->
<a id="schemas3expirationindays"></a>
<a id="schema_S3ExpirationInDays"></a>
<a id="tocSs3expirationindays"></a>
<a id="tocss3expirationindays"></a>

```json
0
```

<h2 id="tocS_S3GlacierJobTier">S3GlacierJobTier</h2>
<!-- backwards compatibility -->
<a id="schemas3glacierjobtier"></a>
<a id="schema_S3GlacierJobTier"></a>
<a id="tocSs3glacierjobtier"></a>
<a id="tocss3glacierjobtier"></a>

```json
"BULK"
```

<h2 id="tocS_S3Grantee">S3Grantee</h2>
<!-- backwards compatibility -->
<a id="schemas3grantee"></a>
<a id="schema_S3Grantee"></a>
<a id="tocSs3grantee"></a>
<a id="tocss3grantee"></a>

```json
{
  "TypeIdentifier": {},
  "Identifier": {},
  "DisplayName": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeIdentifier|object|false|none|none|
|Identifier|object|false|none|none|
|DisplayName|object|false|none|none|

<h2 id="tocS_S3Permission">S3Permission</h2>
<!-- backwards compatibility -->
<a id="schemas3permission"></a>
<a id="schema_S3Permission"></a>
<a id="tocSs3permission"></a>
<a id="tocss3permission"></a>

```json
"FULL_CONTROL"
```

<h2 id="tocS_S3Grant">S3Grant</h2>
<!-- backwards compatibility -->
<a id="schemas3grant"></a>
<a id="schema_S3Grant"></a>
<a id="tocSs3grant"></a>
<a id="tocss3grant"></a>

```json
{
  "Grantee": {
    "TypeIdentifier": {},
    "Identifier": {},
    "DisplayName": {}
  },
  "Permission": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Grantee|object|false|none|none|
|Permission|object|false|none|none|

<h2 id="tocS_S3GranteeTypeIdentifier">S3GranteeTypeIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemas3granteetypeidentifier"></a>
<a id="schema_S3GranteeTypeIdentifier"></a>
<a id="tocSs3granteetypeidentifier"></a>
<a id="tocss3granteetypeidentifier"></a>

```json
"id"
```

<h2 id="tocS_S3ManifestOutputLocation">S3ManifestOutputLocation</h2>
<!-- backwards compatibility -->
<a id="schemas3manifestoutputlocation"></a>
<a id="schema_S3ManifestOutputLocation"></a>
<a id="tocSs3manifestoutputlocation"></a>
<a id="tocss3manifestoutputlocation"></a>

```json
{
  "ExpectedManifestBucketOwner": {},
  "Bucket": {},
  "ManifestPrefix": {},
  "ManifestEncryption": {
    "SSES3": {},
    "SSEKMS": {
      "KeyId": {}
    }
  },
  "ManifestFormat": {}
}
```

Location details for where the generated manifest should be written.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpectedManifestBucketOwner|object|false|none|none|
|Bucket|object|true|none|none|
|ManifestPrefix|object|false|none|none|
|ManifestEncryption|object|false|none|none|
|ManifestFormat|object|true|none|none|

<h2 id="tocS_S3ObjectLockLegalHold">S3ObjectLockLegalHold</h2>
<!-- backwards compatibility -->
<a id="schemas3objectlocklegalhold"></a>
<a id="schema_S3ObjectLockLegalHold"></a>
<a id="tocSs3objectlocklegalhold"></a>
<a id="tocss3objectlocklegalhold"></a>

```json
{
  "Status": {}
}
```

Whether S3 Object Lock legal hold will be applied to objects in an S3 Batch Operations job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_S3ObjectLockRetentionMode">S3ObjectLockRetentionMode</h2>
<!-- backwards compatibility -->
<a id="schemas3objectlockretentionmode"></a>
<a id="schema_S3ObjectLockRetentionMode"></a>
<a id="tocSs3objectlockretentionmode"></a>
<a id="tocss3objectlockretentionmode"></a>

```json
"COMPLIANCE"
```

<h2 id="tocS_S3UserMetadata">S3UserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemas3usermetadata"></a>
<a id="schema_S3UserMetadata"></a>
<a id="tocSs3usermetadata"></a>
<a id="tocss3usermetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[MaxLength1024String](#schemamaxlength1024string)|false|none|none|

<h2 id="tocS_S3SSEAlgorithm">S3SSEAlgorithm</h2>
<!-- backwards compatibility -->
<a id="schemas3ssealgorithm"></a>
<a id="schema_S3SSEAlgorithm"></a>
<a id="tocSs3ssealgorithm"></a>
<a id="tocss3ssealgorithm"></a>

```json
"AES256"
```

<h2 id="tocS_S3Retention">S3Retention</h2>
<!-- backwards compatibility -->
<a id="schemas3retention"></a>
<a id="schema_S3Retention"></a>
<a id="tocSs3retention"></a>
<a id="tocss3retention"></a>

```json
{
  "RetainUntilDate": {},
  "Mode": {}
}
```

Contains the S3 Object Lock retention mode to be applied to all objects in the S3 Batch Operations job. If you don't provide <code>Mode</code> and <code>RetainUntilDate</code> data types in your operation, you will remove the retention from your objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-retention-date.html">Using S3 Object Lock retention with S3 Batch Operations</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RetainUntilDate|object|false|none|none|
|Mode|object|false|none|none|

<h2 id="tocS_TagKeyString">TagKeyString</h2>
<!-- backwards compatibility -->
<a id="schematagkeystring"></a>
<a id="schema_TagKeyString"></a>
<a id="tocStagkeystring"></a>
<a id="tocstagkeystring"></a>

```json
"string"
```

<h2 id="tocS_TagValueString">TagValueString</h2>
<!-- backwards compatibility -->
<a id="schematagvaluestring"></a>
<a id="schema_TagValueString"></a>
<a id="tocStagvaluestring"></a>
<a id="tocstagvaluestring"></a>

```json
"string"
```

<h2 id="tocS_SSEKMSKeyId">SSEKMSKeyId</h2>
<!-- backwards compatibility -->
<a id="schemassekmskeyid"></a>
<a id="schema_SSEKMSKeyId"></a>
<a id="tocSssekmskeyid"></a>
<a id="tocsssekmskeyid"></a>

```json
"string"
```

<h2 id="tocS_SSEKMS">SSEKMS</h2>
<!-- backwards compatibility -->
<a id="schemassekms"></a>
<a id="schema_SSEKMS"></a>
<a id="tocSssekms"></a>
<a id="tocsssekms"></a>

```json
{
  "KeyId": {}
}
```

<p/>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyId|object|true|none|none|

<h2 id="tocS_SSES3">SSES3</h2>
<!-- backwards compatibility -->
<a id="schemasses3"></a>
<a id="schema_SSES3"></a>
<a id="tocSsses3"></a>
<a id="tocssses3"></a>

```json
{}
```

<p/>

<h2 id="tocS_StorageLensPrefixLevelDelimiter">StorageLensPrefixLevelDelimiter</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensprefixleveldelimiter"></a>
<a id="schema_StorageLensPrefixLevelDelimiter"></a>
<a id="tocSstoragelensprefixleveldelimiter"></a>
<a id="tocsstoragelensprefixleveldelimiter"></a>

```json
"s"
```

<h2 id="tocS_StorageLensPrefixLevelMaxDepth">StorageLensPrefixLevelMaxDepth</h2>
<!-- backwards compatibility -->
<a id="schemastoragelensprefixlevelmaxdepth"></a>
<a id="schema_StorageLensPrefixLevelMaxDepth"></a>
<a id="tocSstoragelensprefixlevelmaxdepth"></a>
<a id="tocsstoragelensprefixlevelmaxdepth"></a>

```json
1
```

<h2 id="tocS_SseKmsEncryptedObjects">SseKmsEncryptedObjects</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryptedobjects"></a>
<a id="schema_SseKmsEncryptedObjects"></a>
<a id="tocSssekmsencryptedobjects"></a>
<a id="tocsssekmsencryptedobjects"></a>

```json
{
  "Status": {}
}
```

<p>A container for filter information that you can use to select S3 objects that are encrypted with Key Management Service (KMS).</p> <note> <p>This is not supported by Amazon S3 on Outposts buckets.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_SseKmsEncryptedObjectsStatus">SseKmsEncryptedObjectsStatus</h2>
<!-- backwards compatibility -->
<a id="schemassekmsencryptedobjectsstatus"></a>
<a id="schema_SseKmsEncryptedObjectsStatus"></a>
<a id="tocSssekmsencryptedobjectsstatus"></a>
<a id="tocsssekmsencryptedobjectsstatus"></a>

```json
"Enabled"
```

<h2 id="tocS_SubmitMultiRegionAccessPointRoutesRequest">SubmitMultiRegionAccessPointRoutesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitmultiregionaccesspointroutesrequest"></a>
<a id="schema_SubmitMultiRegionAccessPointRoutesRequest"></a>
<a id="tocSsubmitmultiregionaccesspointroutesrequest"></a>
<a id="tocssubmitmultiregionaccesspointroutesrequest"></a>

```json
{
  "RouteUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteUpdates|object|true|none|none|

<h2 id="tocS_Transition">Transition</h2>
<!-- backwards compatibility -->
<a id="schematransition"></a>
<a id="schema_Transition"></a>
<a id="tocStransition"></a>
<a id="tocstransition"></a>

```json
{
  "Date": {},
  "Days": {},
  "StorageClass": {}
}
```

Specifies when an object transitions to a specified storage class. For more information about Amazon S3 Lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"> Transitioning objects using Amazon S3 Lifecycle</a> in the <i>Amazon S3 User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|false|none|none|
|Days|object|false|none|none|
|StorageClass|object|false|none|none|

<h2 id="tocS_UpdateJobPriorityRequest">UpdateJobPriorityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobpriorityrequest"></a>
<a id="schema_UpdateJobPriorityRequest"></a>
<a id="tocSupdatejobpriorityrequest"></a>
<a id="tocsupdatejobpriorityrequest"></a>

```json
{}
```

<h2 id="tocS_UpdateJobStatusRequest">UpdateJobStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobstatusrequest"></a>
<a id="schema_UpdateJobStatusRequest"></a>
<a id="tocSupdatejobstatusrequest"></a>
<a id="tocsupdatejobstatusrequest"></a>

```json
{}
```
