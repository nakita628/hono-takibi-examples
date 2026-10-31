<h1 id="aws-elemental-mediastore">AWS Elemental MediaStore v2017-09-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects.

Base URLs:

* <a href="http://mediastore.us-east-1.amazonaws.com">http://mediastore.us-east-1.amazonaws.com</a> - The MediaStore multi-region endpoint

* <a href="https://mediastore.us-east-1.amazonaws.com">https://mediastore.us-east-1.amazonaws.com</a> - The MediaStore multi-region endpoint

* <a href="http://mediastore.cn-north-1.amazonaws.com.cn">http://mediastore.cn-north-1.amazonaws.com.cn</a> - The MediaStore endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mediastore.cn-north-1.amazonaws.com.cn">https://mediastore.cn-north-1.amazonaws.com.cn</a> - The MediaStore endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediastore/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elemental-mediastore-default">Default</h1>

## CreateContainer

<a id="opIdCreateContainer"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.CreateContainer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.CreateContainer' \
  -d '{
    "ContainerName": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.CreateContainer`

Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.

> Body parameter

```json
{
  "ContainerName": {},
  "Tags": {}
}
```

<h3 id="createcontainer-parameters">Parameters</h3>

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
|body|body|[CreateContainerInput](#schemacreatecontainerinput)|true|none|
|» ContainerName|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.CreateContainer|

> Example responses

> 200 Response

```json
{
  "Container": {
    "Endpoint": {},
    "CreationTime": {},
    "ARN": {},
    "Name": {},
    "Status": {},
    "AccessLoggingEnabled": {}
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

<h3 id="createcontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContainerOutput](#schemacreatecontaineroutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContainer

<a id="opIdDeleteContainer"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DeleteContainer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DeleteContainer' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DeleteContainer`

Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers. 

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="deletecontainer-parameters">Parameters</h3>

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
|body|body|[DeleteContainerInput](#schemadeletecontainerinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DeleteContainer|

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

<h3 id="deletecontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContainerOutput](#schemadeletecontaineroutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContainerPolicy

<a id="opIdDeleteContainerPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DeleteContainerPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy`

Deletes the access policy that is associated with the specified container.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="deletecontainerpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteContainerPolicyInput](#schemadeletecontainerpolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DeleteContainerPolicy|

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

<h3 id="deletecontainerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContainerPolicyOutput](#schemadeletecontainerpolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCorsPolicy

<a id="opIdDeleteCorsPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DeleteCorsPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy`

<p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="deletecorspolicy-parameters">Parameters</h3>

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
|body|body|[DeleteCorsPolicyInput](#schemadeletecorspolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DeleteCorsPolicy|

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

<h3 id="deletecorspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteCorsPolicyOutput](#schemadeletecorspolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|CorsPolicyNotFoundException|[CorsPolicyNotFoundException](#schemacorspolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLifecyclePolicy

<a id="opIdDeleteLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DeleteLifecyclePolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy`

Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="deletelifecyclepolicy-parameters">Parameters</h3>

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
|body|body|[DeleteLifecyclePolicyInput](#schemadeletelifecyclepolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DeleteLifecyclePolicy|

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

<h3 id="deletelifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLifecyclePolicyOutput](#schemadeletelifecyclepolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMetricPolicy

<a id="opIdDeleteMetricPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DeleteMetricPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy`

Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="deletemetricpolicy-parameters">Parameters</h3>

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
|body|body|[DeleteMetricPolicyInput](#schemadeletemetricpolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DeleteMetricPolicy|

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

<h3 id="deletemetricpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMetricPolicyOutput](#schemadeletemetricpolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeContainer

<a id="opIdDescribeContainer"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.DescribeContainer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.DescribeContainer' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.DescribeContainer`

Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="describecontainer-parameters">Parameters</h3>

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
|body|body|[DescribeContainerInput](#schemadescribecontainerinput)|true|none|
|» ContainerName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.DescribeContainer|

> Example responses

> 200 Response

```json
{
  "Container": {
    "Endpoint": {},
    "CreationTime": {},
    "ARN": {},
    "Name": {},
    "Status": {},
    "AccessLoggingEnabled": {}
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

<h3 id="describecontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeContainerOutput](#schemadescribecontaineroutput)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerPolicy

<a id="opIdGetContainerPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.GetContainerPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.GetContainerPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.GetContainerPolicy`

Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="getcontainerpolicy-parameters">Parameters</h3>

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
|body|body|[GetContainerPolicyInput](#schemagetcontainerpolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.GetContainerPolicy|

> Example responses

> 200 Response

```json
{
  "Policy": {}
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

<h3 id="getcontainerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerPolicyOutput](#schemagetcontainerpolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCorsPolicy

<a id="opIdGetCorsPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.GetCorsPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.GetCorsPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.GetCorsPolicy`

<p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="getcorspolicy-parameters">Parameters</h3>

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
|body|body|[GetCorsPolicyInput](#schemagetcorspolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.GetCorsPolicy|

> Example responses

> 200 Response

```json
{
  "CorsPolicy": {}
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

<h3 id="getcorspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCorsPolicyOutput](#schemagetcorspolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|CorsPolicyNotFoundException|[CorsPolicyNotFoundException](#schemacorspolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLifecyclePolicy

<a id="opIdGetLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.GetLifecyclePolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy`

Retrieves the object lifecycle policy that is assigned to a container.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="getlifecyclepolicy-parameters">Parameters</h3>

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
|body|body|[GetLifecyclePolicyInput](#schemagetlifecyclepolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.GetLifecyclePolicy|

> Example responses

> 200 Response

```json
{
  "LifecyclePolicy": {}
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

<h3 id="getlifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLifecyclePolicyOutput](#schemagetlifecyclepolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMetricPolicy

<a id="opIdGetMetricPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.GetMetricPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.GetMetricPolicy' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.GetMetricPolicy`

Returns the metric policy for the specified container. 

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="getmetricpolicy-parameters">Parameters</h3>

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
|body|body|[GetMetricPolicyInput](#schemagetmetricpolicyinput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.GetMetricPolicy|

> Example responses

> 200 Response

```json
{
  "MetricPolicy": {
    "ContainerLevelMetrics": {},
    "MetricPolicyRules": {}
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

<h3 id="getmetricpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMetricPolicyOutput](#schemagetmetricpolicyoutput)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|PolicyNotFoundException|[PolicyNotFoundException](#schemapolicynotfoundexception)|
|482|482|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|483|483|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContainers

<a id="opIdListContainers"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.ListContainers' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.ListContainers' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.ListContainers`

<p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listcontainers-parameters">Parameters</h3>

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
|body|body|[ListContainersInput](#schemalistcontainersinput)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.ListContainers|

> Example responses

> 200 Response

```json
{
  "Containers": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

<h3 id="listcontainers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContainersOutput](#schemalistcontainersoutput)|
|480|480|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.ListTagsForResource' \
  -d '{
    "Resource": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.ListTagsForResource`

Returns a list of the tags assigned to the specified container. 

> Body parameter

```json
{
  "Resource": {}
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
|body|body|[ListTagsForResourceInput](#schemalisttagsforresourceinput)|true|none|
|» Resource|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.ListTagsForResource|

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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceOutput](#schemalisttagsforresourceoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutContainerPolicy

<a id="opIdPutContainerPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.PutContainerPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.PutContainerPolicy' \
  -d '{
    "ContainerName": {},
    "Policy": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.PutContainerPolicy`

<p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>

> Body parameter

```json
{
  "ContainerName": {},
  "Policy": {}
}
```

<h3 id="putcontainerpolicy-parameters">Parameters</h3>

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
|body|body|[PutContainerPolicyInput](#schemaputcontainerpolicyinput)|true|none|
|» ContainerName|body|object|true|none|
|» Policy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.PutContainerPolicy|

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

<h3 id="putcontainerpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutContainerPolicyOutput](#schemaputcontainerpolicyoutput)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutCorsPolicy

<a id="opIdPutCorsPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.PutCorsPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.PutCorsPolicy' \
  -d '{
    "ContainerName": {},
    "CorsPolicy": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.PutCorsPolicy`

<p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>

> Body parameter

```json
{
  "ContainerName": {},
  "CorsPolicy": {}
}
```

<h3 id="putcorspolicy-parameters">Parameters</h3>

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
|body|body|[PutCorsPolicyInput](#schemaputcorspolicyinput)|true|none|
|» ContainerName|body|object|true|none|
|» CorsPolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.PutCorsPolicy|

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

<h3 id="putcorspolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutCorsPolicyOutput](#schemaputcorspolicyoutput)|
|480|480|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|481|481|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLifecyclePolicy

<a id="opIdPutLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.PutLifecyclePolicy' \
  -d '{
    "ContainerName": {},
    "LifecyclePolicy": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy`

<p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>

> Body parameter

```json
{
  "ContainerName": {},
  "LifecyclePolicy": {}
}
```

<h3 id="putlifecyclepolicy-parameters">Parameters</h3>

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
|body|body|[PutLifecyclePolicyInput](#schemaputlifecyclepolicyinput)|true|none|
|» ContainerName|body|object|true|none|
|» LifecyclePolicy|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.PutLifecyclePolicy|

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

<h3 id="putlifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLifecyclePolicyOutput](#schemaputlifecyclepolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutMetricPolicy

<a id="opIdPutMetricPolicy"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.PutMetricPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.PutMetricPolicy' \
  -d '{
    "ContainerName": {},
    "MetricPolicy": {
      "ContainerLevelMetrics": {},
      "MetricPolicyRules": {}
    }
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.PutMetricPolicy`

The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.

> Body parameter

```json
{
  "ContainerName": {},
  "MetricPolicy": {
    "ContainerLevelMetrics": {},
    "MetricPolicyRules": {}
  }
}
```

<h3 id="putmetricpolicy-parameters">Parameters</h3>

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
|body|body|[PutMetricPolicyInput](#schemaputmetricpolicyinput)|true|none|
|» ContainerName|body|object|true|none|
|» MetricPolicy|body|object|true|none|
|» » ContainerLevelMetrics|body|object|true|none|
|» » MetricPolicyRules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.PutMetricPolicy|

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

<h3 id="putmetricpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutMetricPolicyOutput](#schemaputmetricpolicyoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartAccessLogging

<a id="opIdStartAccessLogging"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.StartAccessLogging' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.StartAccessLogging' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.StartAccessLogging`

Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="startaccesslogging-parameters">Parameters</h3>

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
|body|body|[StartAccessLoggingInput](#schemastartaccesslogginginput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.StartAccessLogging|

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

<h3 id="startaccesslogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartAccessLoggingOutput](#schemastartaccessloggingoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopAccessLogging

<a id="opIdStopAccessLogging"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.StopAccessLogging' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.StopAccessLogging' \
  -d '{
    "ContainerName": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.StopAccessLogging`

Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.

> Body parameter

```json
{
  "ContainerName": {}
}
```

<h3 id="stopaccesslogging-parameters">Parameters</h3>

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
|body|body|[StopAccessLoggingInput](#schemastopaccesslogginginput)|true|none|
|» ContainerName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.StopAccessLogging|

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

<h3 id="stopaccesslogging-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopAccessLoggingOutput](#schemastopaccessloggingoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.TagResource' \
  -d '{
    "Resource": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.TagResource`

Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.

> Body parameter

```json
{
  "Resource": {},
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
|body|body|[TagResourceInput](#schematagresourceinput)|true|none|
|» Resource|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceOutput](#schematagresourceoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mediastore.us-east-1.amazonaws.com/#X-Amz-Target=MediaStore_20170901.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: MediaStore_20170901.UntagResource' \
  -d '{
    "Resource": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=MediaStore_20170901.UntagResource`

Removes tags from the specified container. You can specify one or more tags to remove. 

> Body parameter

```json
{
  "Resource": {},
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
|body|body|[UntagResourceInput](#schemauntagresourceinput)|true|none|
|» Resource|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|MediaStore_20170901.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceOutput](#schemauntagresourceoutput)|
|480|480|ContainerInUseException|[ContainerInUseException](#schemacontainerinuseexception)|
|481|481|ContainerNotFoundException|[ContainerNotFoundException](#schemacontainernotfoundexception)|
|482|482|InternalServerError|[InternalServerError](#schemainternalservererror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateContainerOutput">CreateContainerOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontaineroutput"></a>
<a id="schema_CreateContainerOutput"></a>
<a id="tocScreatecontaineroutput"></a>
<a id="tocscreatecontaineroutput"></a>

```json
{
  "Container": {
    "Endpoint": {},
    "CreationTime": {},
    "ARN": {},
    "Name": {},
    "Status": {},
    "AccessLoggingEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Container|object|true|none|none|

<h2 id="tocS_CreateContainerInput">CreateContainerInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerinput"></a>
<a id="schema_CreateContainerInput"></a>
<a id="tocScreatecontainerinput"></a>
<a id="tocscreatecontainerinput"></a>

```json
{
  "ContainerName": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ContainerInUseException">ContainerInUseException</h2>
<!-- backwards compatibility -->
<a id="schemacontainerinuseexception"></a>
<a id="schema_ContainerInUseException"></a>
<a id="tocScontainerinuseexception"></a>
<a id="tocscontainerinuseexception"></a>

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

<h2 id="tocS_InternalServerError">InternalServerError</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererror"></a>
<a id="schema_InternalServerError"></a>
<a id="tocSinternalservererror"></a>
<a id="tocsinternalservererror"></a>

```json
null
```

<h2 id="tocS_DeleteContainerOutput">DeleteContainerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontaineroutput"></a>
<a id="schema_DeleteContainerOutput"></a>
<a id="tocSdeletecontaineroutput"></a>
<a id="tocsdeletecontaineroutput"></a>

```json
{}
```

<h2 id="tocS_DeleteContainerInput">DeleteContainerInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerinput"></a>
<a id="schema_DeleteContainerInput"></a>
<a id="tocSdeletecontainerinput"></a>
<a id="tocsdeletecontainerinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_ContainerNotFoundException">ContainerNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacontainernotfoundexception"></a>
<a id="schema_ContainerNotFoundException"></a>
<a id="tocScontainernotfoundexception"></a>
<a id="tocscontainernotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteContainerPolicyOutput">DeleteContainerPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerpolicyoutput"></a>
<a id="schema_DeleteContainerPolicyOutput"></a>
<a id="tocSdeletecontainerpolicyoutput"></a>
<a id="tocsdeletecontainerpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteContainerPolicyInput">DeleteContainerPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerpolicyinput"></a>
<a id="schema_DeleteContainerPolicyInput"></a>
<a id="tocSdeletecontainerpolicyinput"></a>
<a id="tocsdeletecontainerpolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_PolicyNotFoundException">PolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapolicynotfoundexception"></a>
<a id="schema_PolicyNotFoundException"></a>
<a id="tocSpolicynotfoundexception"></a>
<a id="tocspolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteCorsPolicyOutput">DeleteCorsPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorspolicyoutput"></a>
<a id="schema_DeleteCorsPolicyOutput"></a>
<a id="tocSdeletecorspolicyoutput"></a>
<a id="tocsdeletecorspolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteCorsPolicyInput">DeleteCorsPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletecorspolicyinput"></a>
<a id="schema_DeleteCorsPolicyInput"></a>
<a id="tocSdeletecorspolicyinput"></a>
<a id="tocsdeletecorspolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_CorsPolicyNotFoundException">CorsPolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemacorspolicynotfoundexception"></a>
<a id="schema_CorsPolicyNotFoundException"></a>
<a id="tocScorspolicynotfoundexception"></a>
<a id="tocscorspolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteLifecyclePolicyOutput">DeleteLifecyclePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyoutput"></a>
<a id="schema_DeleteLifecyclePolicyOutput"></a>
<a id="tocSdeletelifecyclepolicyoutput"></a>
<a id="tocsdeletelifecyclepolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteLifecyclePolicyInput">DeleteLifecyclePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyinput"></a>
<a id="schema_DeleteLifecyclePolicyInput"></a>
<a id="tocSdeletelifecyclepolicyinput"></a>
<a id="tocsdeletelifecyclepolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_DeleteMetricPolicyOutput">DeleteMetricPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricpolicyoutput"></a>
<a id="schema_DeleteMetricPolicyOutput"></a>
<a id="tocSdeletemetricpolicyoutput"></a>
<a id="tocsdeletemetricpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_DeleteMetricPolicyInput">DeleteMetricPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemadeletemetricpolicyinput"></a>
<a id="schema_DeleteMetricPolicyInput"></a>
<a id="tocSdeletemetricpolicyinput"></a>
<a id="tocsdeletemetricpolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_DescribeContainerOutput">DescribeContainerOutput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontaineroutput"></a>
<a id="schema_DescribeContainerOutput"></a>
<a id="tocSdescribecontaineroutput"></a>
<a id="tocsdescribecontaineroutput"></a>

```json
{
  "Container": {
    "Endpoint": {},
    "CreationTime": {},
    "ARN": {},
    "Name": {},
    "Status": {},
    "AccessLoggingEnabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Container|object|false|none|none|

<h2 id="tocS_DescribeContainerInput">DescribeContainerInput</h2>
<!-- backwards compatibility -->
<a id="schemadescribecontainerinput"></a>
<a id="schema_DescribeContainerInput"></a>
<a id="tocSdescribecontainerinput"></a>
<a id="tocsdescribecontainerinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|false|none|none|

<h2 id="tocS_GetContainerPolicyOutput">GetContainerPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerpolicyoutput"></a>
<a id="schema_GetContainerPolicyOutput"></a>
<a id="tocSgetcontainerpolicyoutput"></a>
<a id="tocsgetcontainerpolicyoutput"></a>

```json
{
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Policy|object|true|none|none|

<h2 id="tocS_GetContainerPolicyInput">GetContainerPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerpolicyinput"></a>
<a id="schema_GetContainerPolicyInput"></a>
<a id="tocSgetcontainerpolicyinput"></a>
<a id="tocsgetcontainerpolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_GetCorsPolicyOutput">GetCorsPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetcorspolicyoutput"></a>
<a id="schema_GetCorsPolicyOutput"></a>
<a id="tocSgetcorspolicyoutput"></a>
<a id="tocsgetcorspolicyoutput"></a>

```json
{
  "CorsPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CorsPolicy|object|true|none|none|

<h2 id="tocS_GetCorsPolicyInput">GetCorsPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetcorspolicyinput"></a>
<a id="schema_GetCorsPolicyInput"></a>
<a id="tocSgetcorspolicyinput"></a>
<a id="tocsgetcorspolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_GetLifecyclePolicyOutput">GetLifecyclePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyoutput"></a>
<a id="schema_GetLifecyclePolicyOutput"></a>
<a id="tocSgetlifecyclepolicyoutput"></a>
<a id="tocsgetlifecyclepolicyoutput"></a>

```json
{
  "LifecyclePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LifecyclePolicy|object|true|none|none|

<h2 id="tocS_GetLifecyclePolicyInput">GetLifecyclePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyinput"></a>
<a id="schema_GetLifecyclePolicyInput"></a>
<a id="tocSgetlifecyclepolicyinput"></a>
<a id="tocsgetlifecyclepolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_GetMetricPolicyOutput">GetMetricPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricpolicyoutput"></a>
<a id="schema_GetMetricPolicyOutput"></a>
<a id="tocSgetmetricpolicyoutput"></a>
<a id="tocsgetmetricpolicyoutput"></a>

```json
{
  "MetricPolicy": {
    "ContainerLevelMetrics": {},
    "MetricPolicyRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetricPolicy|object|true|none|none|

<h2 id="tocS_GetMetricPolicyInput">GetMetricPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemagetmetricpolicyinput"></a>
<a id="schema_GetMetricPolicyInput"></a>
<a id="tocSgetmetricpolicyinput"></a>
<a id="tocsgetmetricpolicyinput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_ListContainersOutput">ListContainersOutput</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainersoutput"></a>
<a id="schema_ListContainersOutput"></a>
<a id="tocSlistcontainersoutput"></a>
<a id="tocslistcontainersoutput"></a>

```json
{
  "Containers": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Containers|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListContainersInput">ListContainersInput</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainersinput"></a>
<a id="schema_ListContainersInput"></a>
<a id="tocSlistcontainersinput"></a>
<a id="tocslistcontainersinput"></a>

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

<h2 id="tocS_ListTagsForResourceOutput">ListTagsForResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceoutput"></a>
<a id="schema_ListTagsForResourceOutput"></a>
<a id="tocSlisttagsforresourceoutput"></a>
<a id="tocslisttagsforresourceoutput"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceInput">ListTagsForResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceinput"></a>
<a id="schema_ListTagsForResourceInput"></a>
<a id="tocSlisttagsforresourceinput"></a>
<a id="tocslisttagsforresourceinput"></a>

```json
{
  "Resource": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resource|object|true|none|none|

<h2 id="tocS_PutContainerPolicyOutput">PutContainerPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputcontainerpolicyoutput"></a>
<a id="schema_PutContainerPolicyOutput"></a>
<a id="tocSputcontainerpolicyoutput"></a>
<a id="tocsputcontainerpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutContainerPolicyInput">PutContainerPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputcontainerpolicyinput"></a>
<a id="schema_PutContainerPolicyInput"></a>
<a id="tocSputcontainerpolicyinput"></a>
<a id="tocsputcontainerpolicyinput"></a>

```json
{
  "ContainerName": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_PutCorsPolicyOutput">PutCorsPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputcorspolicyoutput"></a>
<a id="schema_PutCorsPolicyOutput"></a>
<a id="tocSputcorspolicyoutput"></a>
<a id="tocsputcorspolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutCorsPolicyInput">PutCorsPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputcorspolicyinput"></a>
<a id="schema_PutCorsPolicyInput"></a>
<a id="tocSputcorspolicyinput"></a>
<a id="tocsputcorspolicyinput"></a>

```json
{
  "ContainerName": {},
  "CorsPolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|
|CorsPolicy|object|true|none|none|

<h2 id="tocS_PutLifecyclePolicyOutput">PutLifecyclePolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclepolicyoutput"></a>
<a id="schema_PutLifecyclePolicyOutput"></a>
<a id="tocSputlifecyclepolicyoutput"></a>
<a id="tocsputlifecyclepolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutLifecyclePolicyInput">PutLifecyclePolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclepolicyinput"></a>
<a id="schema_PutLifecyclePolicyInput"></a>
<a id="tocSputlifecyclepolicyinput"></a>
<a id="tocsputlifecyclepolicyinput"></a>

```json
{
  "ContainerName": {},
  "LifecyclePolicy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|
|LifecyclePolicy|object|true|none|none|

<h2 id="tocS_PutMetricPolicyOutput">PutMetricPolicyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricpolicyoutput"></a>
<a id="schema_PutMetricPolicyOutput"></a>
<a id="tocSputmetricpolicyoutput"></a>
<a id="tocsputmetricpolicyoutput"></a>

```json
{}
```

<h2 id="tocS_PutMetricPolicyInput">PutMetricPolicyInput</h2>
<!-- backwards compatibility -->
<a id="schemaputmetricpolicyinput"></a>
<a id="schema_PutMetricPolicyInput"></a>
<a id="tocSputmetricpolicyinput"></a>
<a id="tocsputmetricpolicyinput"></a>

```json
{
  "ContainerName": {},
  "MetricPolicy": {
    "ContainerLevelMetrics": {},
    "MetricPolicyRules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|
|MetricPolicy|object|true|none|none|

<h2 id="tocS_StartAccessLoggingOutput">StartAccessLoggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemastartaccessloggingoutput"></a>
<a id="schema_StartAccessLoggingOutput"></a>
<a id="tocSstartaccessloggingoutput"></a>
<a id="tocsstartaccessloggingoutput"></a>

```json
{}
```

<h2 id="tocS_StartAccessLoggingInput">StartAccessLoggingInput</h2>
<!-- backwards compatibility -->
<a id="schemastartaccesslogginginput"></a>
<a id="schema_StartAccessLoggingInput"></a>
<a id="tocSstartaccesslogginginput"></a>
<a id="tocsstartaccesslogginginput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_StopAccessLoggingOutput">StopAccessLoggingOutput</h2>
<!-- backwards compatibility -->
<a id="schemastopaccessloggingoutput"></a>
<a id="schema_StopAccessLoggingOutput"></a>
<a id="tocSstopaccessloggingoutput"></a>
<a id="tocsstopaccessloggingoutput"></a>

```json
{}
```

<h2 id="tocS_StopAccessLoggingInput">StopAccessLoggingInput</h2>
<!-- backwards compatibility -->
<a id="schemastopaccesslogginginput"></a>
<a id="schema_StopAccessLoggingInput"></a>
<a id="tocSstopaccesslogginginput"></a>
<a id="tocsstopaccesslogginginput"></a>

```json
{
  "ContainerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerName|object|true|none|none|

<h2 id="tocS_TagResourceOutput">TagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceoutput"></a>
<a id="schema_TagResourceOutput"></a>
<a id="tocStagresourceoutput"></a>
<a id="tocstagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_TagResourceInput">TagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schematagresourceinput"></a>
<a id="schema_TagResourceInput"></a>
<a id="tocStagresourceinput"></a>
<a id="tocstagresourceinput"></a>

```json
{
  "Resource": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resource|object|true|none|none|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceOutput">UntagResourceOutput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceoutput"></a>
<a id="schema_UntagResourceOutput"></a>
<a id="tocSuntagresourceoutput"></a>
<a id="tocsuntagresourceoutput"></a>

```json
{}
```

<h2 id="tocS_UntagResourceInput">UntagResourceInput</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceinput"></a>
<a id="schema_UntagResourceInput"></a>
<a id="tocSuntagresourceinput"></a>
<a id="tocsuntagresourceinput"></a>

```json
{
  "Resource": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Resource|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
"string"
```

<h2 id="tocS_AllowedHeaders">AllowedHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaallowedheaders"></a>
<a id="schema_AllowedHeaders"></a>
<a id="tocSallowedheaders"></a>
<a id="tocsallowedheaders"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MethodName">MethodName</h2>
<!-- backwards compatibility -->
<a id="schemamethodname"></a>
<a id="schema_MethodName"></a>
<a id="tocSmethodname"></a>
<a id="tocsmethodname"></a>

```json
"PUT"
```

<h2 id="tocS_AllowedMethods">AllowedMethods</h2>
<!-- backwards compatibility -->
<a id="schemaallowedmethods"></a>
<a id="schema_AllowedMethods"></a>
<a id="tocSallowedmethods"></a>
<a id="tocsallowedmethods"></a>

```json
[
  "PUT"
]
```

<h2 id="tocS_Origin">Origin</h2>
<!-- backwards compatibility -->
<a id="schemaorigin"></a>
<a id="schema_Origin"></a>
<a id="tocSorigin"></a>
<a id="tocsorigin"></a>

```json
"string"
```

<h2 id="tocS_AllowedOrigins">AllowedOrigins</h2>
<!-- backwards compatibility -->
<a id="schemaallowedorigins"></a>
<a id="schema_AllowedOrigins"></a>
<a id="tocSallowedorigins"></a>
<a id="tocsallowedorigins"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
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

<h2 id="tocS_ContainerARN">ContainerARN</h2>
<!-- backwards compatibility -->
<a id="schemacontainerarn"></a>
<a id="schema_ContainerARN"></a>
<a id="tocScontainerarn"></a>
<a id="tocscontainerarn"></a>

```json
"string"
```

<h2 id="tocS_ContainerName">ContainerName</h2>
<!-- backwards compatibility -->
<a id="schemacontainername"></a>
<a id="schema_ContainerName"></a>
<a id="tocScontainername"></a>
<a id="tocscontainername"></a>

```json
"string"
```

<h2 id="tocS_ContainerStatus">ContainerStatus</h2>
<!-- backwards compatibility -->
<a id="schemacontainerstatus"></a>
<a id="schema_ContainerStatus"></a>
<a id="tocScontainerstatus"></a>
<a id="tocscontainerstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ContainerAccessLoggingEnabled">ContainerAccessLoggingEnabled</h2>
<!-- backwards compatibility -->
<a id="schemacontaineraccessloggingenabled"></a>
<a id="schema_ContainerAccessLoggingEnabled"></a>
<a id="tocScontaineraccessloggingenabled"></a>
<a id="tocscontaineraccessloggingenabled"></a>

```json
true
```

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "Endpoint": {},
  "CreationTime": {},
  "ARN": {},
  "Name": {},
  "Status": {},
  "AccessLoggingEnabled": {}
}
```

This section describes operations that you can perform on an AWS Elemental MediaStore container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Endpoint|object|false|none|none|
|CreationTime|object|false|none|none|
|ARN|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|AccessLoggingEnabled|object|false|none|none|

<h2 id="tocS_ContainerLevelMetrics">ContainerLevelMetrics</h2>
<!-- backwards compatibility -->
<a id="schemacontainerlevelmetrics"></a>
<a id="schema_ContainerLevelMetrics"></a>
<a id="tocScontainerlevelmetrics"></a>
<a id="tocscontainerlevelmetrics"></a>

```json
"ENABLED"
```

<h2 id="tocS_ContainerList">ContainerList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerlist"></a>
<a id="schema_ContainerList"></a>
<a id="tocScontainerlist"></a>
<a id="tocscontainerlist"></a>

```json
[
  {
    "Endpoint": {},
    "CreationTime": {},
    "ARN": {},
    "Name": {},
    "Status": {},
    "AccessLoggingEnabled": {}
  }
]
```

<h2 id="tocS_ContainerListLimit">ContainerListLimit</h2>
<!-- backwards compatibility -->
<a id="schemacontainerlistlimit"></a>
<a id="schema_ContainerListLimit"></a>
<a id="tocScontainerlistlimit"></a>
<a id="tocscontainerlistlimit"></a>

```json
1
```

<h2 id="tocS_ContainerPolicy">ContainerPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacontainerpolicy"></a>
<a id="schema_ContainerPolicy"></a>
<a id="tocScontainerpolicy"></a>
<a id="tocscontainerpolicy"></a>

```json
"string"
```

<h2 id="tocS_CorsRule">CorsRule</h2>
<!-- backwards compatibility -->
<a id="schemacorsrule"></a>
<a id="schema_CorsRule"></a>
<a id="tocScorsrule"></a>
<a id="tocscorsrule"></a>

```json
{
  "AllowedOrigins": {},
  "AllowedMethods": {},
  "AllowedHeaders": {},
  "MaxAgeSeconds": {},
  "ExposeHeaders": {}
}
```

A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowedOrigins|object|true|none|none|
|AllowedMethods|object|false|none|none|
|AllowedHeaders|object|true|none|none|
|MaxAgeSeconds|object|false|none|none|
|ExposeHeaders|object|false|none|none|

<h2 id="tocS_CorsPolicy">CorsPolicy</h2>
<!-- backwards compatibility -->
<a id="schemacorspolicy"></a>
<a id="schema_CorsPolicy"></a>
<a id="tocScorspolicy"></a>
<a id="tocscorspolicy"></a>

```json
[
  {
    "AllowedOrigins": {},
    "AllowedMethods": {},
    "AllowedHeaders": {},
    "MaxAgeSeconds": {},
    "ExposeHeaders": {}
  }
]
```

The CORS policy of the container.

<h2 id="tocS_MaxAgeSeconds">MaxAgeSeconds</h2>
<!-- backwards compatibility -->
<a id="schemamaxageseconds"></a>
<a id="schema_MaxAgeSeconds"></a>
<a id="tocSmaxageseconds"></a>
<a id="tocsmaxageseconds"></a>

```json
0
```

<h2 id="tocS_ExposeHeaders">ExposeHeaders</h2>
<!-- backwards compatibility -->
<a id="schemaexposeheaders"></a>
<a id="schema_ExposeHeaders"></a>
<a id="tocSexposeheaders"></a>
<a id="tocsexposeheaders"></a>

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

<h2 id="tocS_LifecyclePolicy">LifecyclePolicy</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicy"></a>
<a id="schema_LifecyclePolicy"></a>
<a id="tocSlifecyclepolicy"></a>
<a id="tocslifecyclepolicy"></a>

```json
"string"
```

<h2 id="tocS_MetricPolicy">MetricPolicy</h2>
<!-- backwards compatibility -->
<a id="schemametricpolicy"></a>
<a id="schema_MetricPolicy"></a>
<a id="tocSmetricpolicy"></a>
<a id="tocsmetricpolicy"></a>

```json
{
  "ContainerLevelMetrics": {},
  "MetricPolicyRules": {}
}
```

<p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContainerLevelMetrics|object|true|none|none|
|MetricPolicyRules|object|false|none|none|

<h2 id="tocS_PaginationToken">PaginationToken</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken"></a>
<a id="schema_PaginationToken"></a>
<a id="tocSpaginationtoken"></a>
<a id="tocspaginationtoken"></a>

```json
"string"
```

<h2 id="tocS_MetricPolicyRules">MetricPolicyRules</h2>
<!-- backwards compatibility -->
<a id="schemametricpolicyrules"></a>
<a id="schema_MetricPolicyRules"></a>
<a id="tocSmetricpolicyrules"></a>
<a id="tocsmetricpolicyrules"></a>

```json
[
  {
    "ObjectGroup": {},
    "ObjectGroupName": {}
  }
]
```

<h2 id="tocS_ObjectGroup">ObjectGroup</h2>
<!-- backwards compatibility -->
<a id="schemaobjectgroup"></a>
<a id="schema_ObjectGroup"></a>
<a id="tocSobjectgroup"></a>
<a id="tocsobjectgroup"></a>

```json
"string"
```

<h2 id="tocS_ObjectGroupName">ObjectGroupName</h2>
<!-- backwards compatibility -->
<a id="schemaobjectgroupname"></a>
<a id="schema_ObjectGroupName"></a>
<a id="tocSobjectgroupname"></a>
<a id="tocsobjectgroupname"></a>

```json
"string"
```

<h2 id="tocS_MetricPolicyRule">MetricPolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemametricpolicyrule"></a>
<a id="schema_MetricPolicyRule"></a>
<a id="tocSmetricpolicyrule"></a>
<a id="tocsmetricpolicyrule"></a>

```json
{
  "ObjectGroup": {},
  "ObjectGroupName": {}
}
```

A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObjectGroup|object|true|none|none|
|ObjectGroupName|object|true|none|none|

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

A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
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
