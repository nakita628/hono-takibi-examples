<h1 id="amazon-ec2-container-registry">Amazon EC2 Container Registry v2015-09-21</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Elastic Container Registry</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.</p> <p>Amazon ECR has service endpoints in each supported Region. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecr.html">Amazon ECR endpoints</a> in the <i>Amazon Web Services General Reference</i>.</p>

Base URLs:

* <a href="http://api.ecr.us-east-1.amazonaws.com">http://api.ecr.us-east-1.amazonaws.com</a> - The Amazon ECR multi-region endpoint

* <a href="https://api.ecr.us-east-1.amazonaws.com">https://api.ecr.us-east-1.amazonaws.com</a> - The Amazon ECR multi-region endpoint

* <a href="http://api.ecr.cn-north-1.amazonaws.com.cn">http://api.ecr.cn-north-1.amazonaws.com.cn</a> - The Amazon ECR endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.ecr.cn-north-1.amazonaws.com.cn">https://api.ecr.cn-north-1.amazonaws.com.cn</a> - The Amazon ECR endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ecr/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-ec2-container-registry-default">Default</h1>

## BatchCheckLayerAvailability

<a id="opIdBatchCheckLayerAvailability"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "layerDigests": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability`

<p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "layerDigests": {}
}
```

<h3 id="batchchecklayeravailability-parameters">Parameters</h3>

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
|body|body|[BatchCheckLayerAvailabilityRequest](#schemabatchchecklayeravailabilityrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» layerDigests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability|

> Example responses

> 200 Response

```json
{
  "layers": {},
  "failures": {}
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

<h3 id="batchchecklayeravailability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchCheckLayerAvailabilityResponse](#schemabatchchecklayeravailabilityresponse)|
|480|480|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteImage

<a id="opIdBatchDeleteImage"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage`

<p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {}
}
```

<h3 id="batchdeleteimage-parameters">Parameters</h3>

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
|body|body|[BatchDeleteImageRequest](#schemabatchdeleteimagerequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageIds|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "imageIds": [
    {
      "imageDigest": "sha256:examplee6d1e504117a17000003d3753086354a38375961f2e665416ef4b1b2f",
      "imageTag": "precise"
    }
  ]
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

<h3 id="batchdeleteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteImageResponse](#schemabatchdeleteimageresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetImage

<a id="opIdBatchGetImage"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.BatchGetImage' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {},
    "acceptedMediaTypes": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage`

<p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "acceptedMediaTypes": {}
}
```

<h3 id="batchgetimage-parameters">Parameters</h3>

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
|body|body|[BatchGetImageRequest](#schemabatchgetimagerequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageIds|body|object|true|none|
|» acceptedMediaTypes|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.BatchGetImage|

> Example responses

> 200 Response

```json
{
  "failures": [],
  "images": [
    {
      "imageId": {
        "imageDigest": "sha256:example76bdff6d83a09ba2a818f0d00000063724a9ac3ba5019c56f74ebf42a",
        "imageTag": "precise"
      },
      "imageManifest": "{\n \"schemaVersion\": 1,\n \"name\": \"ubuntu\",\n \"tag\": \"precise\",\n...",
      "registryId": "244698725403",
      "repositoryName": "ubuntu"
    }
  ]
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

<h3 id="batchgetimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetImageResponse](#schemabatchgetimageresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetRepositoryScanningConfiguration

<a id="opIdBatchGetRepositoryScanningConfiguration"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration' \
  -d '{
    "repositoryNames": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration`

Gets the scanning configuration for one or more repositories.

> Body parameter

```json
{
  "repositoryNames": {}
}
```

<h3 id="batchgetrepositoryscanningconfiguration-parameters">Parameters</h3>

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
|body|body|[BatchGetRepositoryScanningConfigurationRequest](#schemabatchgetrepositoryscanningconfigurationrequest)|true|none|
|» repositoryNames|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration|

> Example responses

> 200 Response

```json
{
  "scanningConfigurations": {},
  "failures": {}
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

<h3 id="batchgetrepositoryscanningconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetRepositoryScanningConfigurationResponse](#schemabatchgetrepositoryscanningconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CompleteLayerUpload

<a id="opIdCompleteLayerUpload"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "uploadId": {},
    "layerDigests": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload`

<p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "layerDigests": {}
}
```

<h3 id="completelayerupload-parameters">Parameters</h3>

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
|body|body|[CompleteLayerUploadRequest](#schemacompletelayeruploadrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» uploadId|body|object|true|none|
|» layerDigests|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "layerDigest": {}
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

<h3 id="completelayerupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompleteLayerUploadResponse](#schemacompletelayeruploadresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|UploadNotFoundException|[UploadNotFoundException](#schemauploadnotfoundexception)|
|484|484|InvalidLayerException|[InvalidLayerException](#schemainvalidlayerexception)|
|485|485|LayerPartTooSmallException|[LayerPartTooSmallException](#schemalayerparttoosmallexception)|
|486|486|LayerAlreadyExistsException|[LayerAlreadyExistsException](#schemalayeralreadyexistsexception)|
|487|487|EmptyUploadException|[EmptyUploadException](#schemaemptyuploadexception)|
|488|488|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePullThroughCacheRule

<a id="opIdCreatePullThroughCacheRule"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule' \
  -d '{
    "ecrRepositoryPrefix": {},
    "upstreamRegistryUrl": {},
    "registryId": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule`

Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.

> Body parameter

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "registryId": {}
}
```

<h3 id="createpullthroughcacherule-parameters">Parameters</h3>

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
|body|body|[CreatePullThroughCacheRuleRequest](#schemacreatepullthroughcacherulerequest)|true|none|
|» ecrRepositoryPrefix|body|object|true|none|
|» upstreamRegistryUrl|body|object|true|none|
|» registryId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule|

> Example responses

> 200 Response

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "createdAt": {},
  "registryId": {}
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

<h3 id="createpullthroughcacherule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePullThroughCacheRuleResponse](#schemacreatepullthroughcacheruleresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PullThroughCacheRuleAlreadyExistsException|[PullThroughCacheRuleAlreadyExistsException](#schemapullthroughcacherulealreadyexistsexception)|
|484|484|UnsupportedUpstreamRegistryException|[UnsupportedUpstreamRegistryException](#schemaunsupportedupstreamregistryexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRepository

<a id="opIdCreateRepository"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.CreateRepository' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "tags": {},
    "imageTagMutability": {},
    "imageScanningConfiguration": {
      "scanOnPush": {}
    },
    "encryptionConfiguration": {
      "encryptionType": {},
      "kmsKey": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository`

Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "tags": {},
  "imageTagMutability": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  },
  "encryptionConfiguration": {
    "encryptionType": {},
    "kmsKey": {}
  }
}
```

<h3 id="createrepository-parameters">Parameters</h3>

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
|body|body|[CreateRepositoryRequest](#schemacreaterepositoryrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» tags|body|object|false|none|
|» imageTagMutability|body|object|false|none|
|» imageScanningConfiguration|body|object|false|none|
|» » scanOnPush|body|object|false|none|
|» encryptionConfiguration|body|object|false|none|
|» » encryptionType|body|object|true|none|
|» » kmsKey|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.CreateRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "registryId": 12345678901,
    "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/project-a/nginx-web-app",
    "repositoryName": "project-a/nginx-web-app"
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

<h3 id="createrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRepositoryResponse](#schemacreaterepositoryresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|483|483|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|484|484|RepositoryAlreadyExistsException|[RepositoryAlreadyExistsException](#schemarepositoryalreadyexistsexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteLifecyclePolicy

<a id="opIdDeleteLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy`

Deletes the lifecycle policy associated with the specified repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
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
|body|body|[DeleteLifecyclePolicyRequest](#schemadeletelifecyclepolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "lastEvaluatedAt": {}
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

<h3 id="deletelifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteLifecyclePolicyResponse](#schemadeletelifecyclepolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|LifecyclePolicyNotFoundException|[LifecyclePolicyNotFoundException](#schemalifecyclepolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePullThroughCacheRule

<a id="opIdDeletePullThroughCacheRule"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule' \
  -d '{
    "ecrRepositoryPrefix": {},
    "registryId": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule`

Deletes a pull through cache rule.

> Body parameter

```json
{
  "ecrRepositoryPrefix": {},
  "registryId": {}
}
```

<h3 id="deletepullthroughcacherule-parameters">Parameters</h3>

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
|body|body|[DeletePullThroughCacheRuleRequest](#schemadeletepullthroughcacherulerequest)|true|none|
|» ecrRepositoryPrefix|body|object|true|none|
|» registryId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule|

> Example responses

> 200 Response

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "createdAt": {},
  "registryId": {}
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

<h3 id="deletepullthroughcacherule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePullThroughCacheRuleResponse](#schemadeletepullthroughcacheruleresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PullThroughCacheRuleNotFoundException|[PullThroughCacheRuleNotFoundException](#schemapullthroughcacherulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRegistryPolicy

<a id="opIdDeleteRegistryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy' \
  -d '{}'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy`

Deletes the registry permissions policy.

> Body parameter

```json
{}
```

<h3 id="deleteregistrypolicy-parameters">Parameters</h3>

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
|body|body|[DeleteRegistryPolicyRequest](#schemadeleteregistrypolicyrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "policyText": {}
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

<h3 id="deleteregistrypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRegistryPolicyResponse](#schemadeleteregistrypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RegistryPolicyNotFoundException|[RegistryPolicyNotFoundException](#schemaregistrypolicynotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepository

<a id="opIdDeleteRepository"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DeleteRepository' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository`

Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "force": {}
}
```

<h3 id="deleterepository-parameters">Parameters</h3>

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
|body|body|[DeleteRepositoryRequest](#schemadeleterepositoryrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DeleteRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "registryId": 12345678901,
    "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/ubuntu",
    "repositoryName": "ubuntu"
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

<h3 id="deleterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryResponse](#schemadeleterepositoryresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|RepositoryNotEmptyException|[RepositoryNotEmptyException](#schemarepositorynotemptyexception)|
|484|484|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepositoryPolicy

<a id="opIdDeleteRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy`

Deletes the repository policy associated with the specified repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

<h3 id="deleterepositorypolicy-parameters">Parameters</h3>

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
|body|body|[DeleteRepositoryPolicyRequest](#schemadeleterepositorypolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy|

> Example responses

> 200 Response

```json
{
  "policyText": "{ ... }",
  "registryId": 12345678901,
  "repositoryName": "ubuntu"
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

<h3 id="deleterepositorypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRepositoryPolicyResponse](#schemadeleterepositorypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|RepositoryPolicyNotFoundException|[RepositoryPolicyNotFoundException](#schemarepositorypolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImageReplicationStatus

<a id="opIdDescribeImageReplicationStatus"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus' \
  -d '{
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "registryId": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus`

Returns the replication status for a specified image.

> Body parameter

```json
{
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "registryId": {}
}
```

<h3 id="describeimagereplicationstatus-parameters">Parameters</h3>

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
|body|body|[DescribeImageReplicationStatusRequest](#schemadescribeimagereplicationstatusrequest)|true|none|
|» repositoryName|body|object|true|none|
|» imageId|body|[ImageIdentifier](#schemaimageidentifier)|true|An object with identifying information for an image in an Amazon ECR repository.|
|» registryId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus|

> Example responses

> 200 Response

```json
{
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "replicationStatuses": {}
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

<h3 id="describeimagereplicationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImageReplicationStatusResponse](#schemadescribeimagereplicationstatusresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ImageNotFoundException|[ImageNotFoundException](#schemaimagenotfoundexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImageScanFindings

<a id="opIdDescribeImageScanFindings"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings`

Returns the scan findings for the specified image.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeimagescanfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeImageScanFindingsRequest](#schemadescribeimagescanfindingsrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageId|body|[ImageIdentifier](#schemaimageidentifier)|true|An object with identifying information for an image in an Amazon ECR repository.|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "imageScanStatus": {
    "status": {},
    "description": {}
  },
  "imageScanFindings": {
    "imageScanCompletedAt": {},
    "vulnerabilitySourceUpdatedAt": {},
    "findingSeverityCounts": {
      "property1": 0,
      "property2": 0
    },
    "findings": {},
    "enhancedFindings": {}
  },
  "nextToken": {}
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

<h3 id="describeimagescanfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImageScanFindingsResponse](#schemadescribeimagescanfindingsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|ImageNotFoundException|[ImageNotFoundException](#schemaimagenotfoundexception)|
|484|484|ScanNotFoundException|[ScanNotFoundException](#schemascannotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImages

<a id="opIdDescribeImages"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribeImages' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {},
    "nextToken": {},
    "maxResults": {},
    "filter": {
      "tagStatus": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages`

<p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

<h3 id="describeimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeImagesRequest](#schemadescribeimagesrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageIds|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » tagStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribeImages|

> Example responses

> 200 Response

```json
{
  "imageDetails": {},
  "nextToken": {}
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

<h3 id="describeimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImagesResponse](#schemadescribeimagesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|ImageNotFoundException|[ImageNotFoundException](#schemaimagenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePullThroughCacheRules

<a id="opIdDescribePullThroughCacheRules"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules' \
  -d '{
    "registryId": {},
    "ecrRepositoryPrefixes": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules`

Returns the pull through cache rules for a registry.

> Body parameter

```json
{
  "registryId": {},
  "ecrRepositoryPrefixes": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describepullthroughcacherules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribePullThroughCacheRulesRequest](#schemadescribepullthroughcacherulesrequest)|true|none|
|» registryId|body|object|false|none|
|» ecrRepositoryPrefixes|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules|

> Example responses

> 200 Response

```json
{
  "pullThroughCacheRules": {},
  "nextToken": {}
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

<h3 id="describepullthroughcacherules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePullThroughCacheRulesResponse](#schemadescribepullthroughcacherulesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|PullThroughCacheRuleNotFoundException|[PullThroughCacheRuleNotFoundException](#schemapullthroughcacherulenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRegistry

<a id="opIdDescribeRegistry"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribeRegistry' \
  -d '{}'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry`

Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.

> Body parameter

```json
{}
```

<h3 id="describeregistry-parameters">Parameters</h3>

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
|body|body|[DescribeRegistryRequest](#schemadescriberegistryrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribeRegistry|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "replicationConfiguration": {
    "rules": {}
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

<h3 id="describeregistry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRegistryResponse](#schemadescriberegistryresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRepositories

<a id="opIdDescribeRepositories"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.DescribeRepositories' \
  -d '{
    "registryId": {},
    "repositoryNames": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories`

Describes image repositories in a registry.

> Body parameter

```json
{
  "registryId": {},
  "repositoryNames": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describerepositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[DescribeRepositoriesRequest](#schemadescriberepositoriesrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryNames|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.DescribeRepositories|

> Example responses

> 200 Response

```json
{
  "repositories": [
    {
      "registryId": 12345678910,
      "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/ubuntu",
      "repositoryName": "ubuntu"
    },
    {
      "registryId": 12345678910,
      "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/test",
      "repositoryName": "test"
    }
  ]
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

<h3 id="describerepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRepositoriesResponse](#schemadescriberepositoriesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizationToken

<a id="opIdGetAuthorizationToken"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken' \
  -d '{
    "registryIds": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken`

<p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

> Body parameter

```json
{
  "registryIds": {}
}
```

<h3 id="getauthorizationtoken-parameters">Parameters</h3>

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
|body|body|[GetAuthorizationTokenRequest](#schemagetauthorizationtokenrequest)|true|none|
|» registryIds|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken|

> Example responses

> 200 Response

```json
{
  "authorizationData": [
    {
      "authorizationToken": "QVdTOkN...",
      "expiresAt": "1470951892432",
      "proxyEndpoint": "https://012345678901.dkr.ecr.us-west-2.amazonaws.com"
    }
  ]
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

<h3 id="getauthorizationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAuthorizationTokenResponse](#schemagetauthorizationtokenresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDownloadUrlForLayer

<a id="opIdGetDownloadUrlForLayer"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "layerDigest": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer`

<p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "layerDigest": {}
}
```

<h3 id="getdownloadurlforlayer-parameters">Parameters</h3>

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
|body|body|[GetDownloadUrlForLayerRequest](#schemagetdownloadurlforlayerrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» layerDigest|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer|

> Example responses

> 200 Response

```json
{
  "downloadUrl": {},
  "layerDigest": {}
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

<h3 id="getdownloadurlforlayer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDownloadUrlForLayerResponse](#schemagetdownloadurlforlayerresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|LayersNotFoundException|[LayersNotFoundException](#schemalayersnotfoundexception)|
|483|483|LayerInaccessibleException|[LayerInaccessibleException](#schemalayerinaccessibleexception)|
|484|484|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLifecyclePolicy

<a id="opIdGetLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy`

Retrieves the lifecycle policy for the specified repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
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
|body|body|[GetLifecyclePolicyRequest](#schemagetlifecyclepolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "lastEvaluatedAt": {}
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
|200|OK|Success|[GetLifecyclePolicyResponse](#schemagetlifecyclepolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|LifecyclePolicyNotFoundException|[LifecyclePolicyNotFoundException](#schemalifecyclepolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetLifecyclePolicyPreview

<a id="opIdGetLifecyclePolicyPreview"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {},
    "nextToken": {},
    "maxResults": {},
    "filter": {
      "tagStatus": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview`

Retrieves the results of the lifecycle policy preview request for the specified repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

<h3 id="getlifecyclepolicypreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[GetLifecyclePolicyPreviewRequest](#schemagetlifecyclepolicypreviewrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageIds|body|object|false|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » tagStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "status": {},
  "nextToken": {},
  "previewResults": {},
  "summary": {
    "expiringImageTotalCount": {}
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

<h3 id="getlifecyclepolicypreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLifecyclePolicyPreviewResponse](#schemagetlifecyclepolicypreviewresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|LifecyclePolicyPreviewNotFoundException|[LifecyclePolicyPreviewNotFoundException](#schemalifecyclepolicypreviewnotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegistryPolicy

<a id="opIdGetRegistryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy' \
  -d '{}'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy`

Retrieves the permissions policy for a registry.

> Body parameter

```json
{}
```

<h3 id="getregistrypolicy-parameters">Parameters</h3>

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
|body|body|[GetRegistryPolicyRequest](#schemagetregistrypolicyrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "policyText": {}
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

<h3 id="getregistrypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegistryPolicyResponse](#schemagetregistrypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RegistryPolicyNotFoundException|[RegistryPolicyNotFoundException](#schemaregistrypolicynotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegistryScanningConfiguration

<a id="opIdGetRegistryScanningConfiguration"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration' \
  -d '{}'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration`

Retrieves the scanning configuration for a registry.

> Body parameter

```json
{}
```

<h3 id="getregistryscanningconfiguration-parameters">Parameters</h3>

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
|body|body|[GetRegistryScanningConfigurationRequest](#schemagetregistryscanningconfigurationrequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "scanningConfiguration": {
    "scanType": {},
    "rules": {}
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

<h3 id="getregistryscanningconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegistryScanningConfigurationResponse](#schemagetregistryscanningconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryPolicy

<a id="opIdGetRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy`

Retrieves the repository policy for the specified repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

<h3 id="getrepositorypolicy-parameters">Parameters</h3>

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
|body|body|[GetRepositoryPolicyRequest](#schemagetrepositorypolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy|

> Example responses

> 200 Response

```json
{
  "policyText": "{\n  \"Version\" : \"2008-10-17\",\n  \"Statement\" : [ {\n    \"Sid\" : \"new statement\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n     \"AWS\" : \"arn:aws:iam::012345678901:role/CodeDeployDemo\"\n    },\n\"Action\" : [ \"ecr:GetDownloadUrlForLayer\", \"ecr:BatchGetImage\", \"ecr:BatchCheckLayerAvailability\" ]\n } ]\n}",
  "registryId": 12345678901,
  "repositoryName": "ubuntu"
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

<h3 id="getrepositorypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryPolicyResponse](#schemagetrepositorypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|RepositoryPolicyNotFoundException|[RepositoryPolicyNotFoundException](#schemarepositorypolicynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateLayerUpload

<a id="opIdInitiateLayerUpload"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload`

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

<h3 id="initiatelayerupload-parameters">Parameters</h3>

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
|body|body|[InitiateLayerUploadRequest](#schemainitiatelayeruploadrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload|

> Example responses

> 200 Response

```json
{
  "uploadId": {},
  "partSize": {}
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

<h3 id="initiatelayerupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InitiateLayerUploadResponse](#schemainitiatelayeruploadresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImages

<a id="opIdListImages"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.ListImages' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "nextToken": {},
    "maxResults": {},
    "filter": {
      "tagStatus": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages`

<p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

<h3 id="listimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Target|header|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|[ListImagesRequest](#schemalistimagesrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|
|» filter|body|object|false|none|
|» » tagStatus|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.ListImages|

> Example responses

> 200 Response

```json
{
  "imageIds": [
    {
      "imageDigest": "sha256:764f63476bdff6d83a09ba2a818f0d35757063724a9ac3ba5019c56f74ebf42a",
      "imageTag": "precise"
    }
  ]
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

<h3 id="listimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImagesResponse](#schemalistimagesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource`

List the tags for an Amazon ECR resource.

> Body parameter

```json
{
  "resourceArn": {}
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
|» resourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.ListTagsForResource|

> Example responses

> 200 Response

```json
{
  "tags": {}
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
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImage

<a id="opIdPutImage"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutImage' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageManifest": {},
    "imageManifestMediaType": {},
    "imageTag": {},
    "imageDigest": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage`

<p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageManifest": {},
  "imageManifestMediaType": {},
  "imageTag": {},
  "imageDigest": {}
}
```

<h3 id="putimage-parameters">Parameters</h3>

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
|body|body|[PutImageRequest](#schemaputimagerequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageManifest|body|object|true|none|
|» imageManifestMediaType|body|object|false|none|
|» imageTag|body|object|false|none|
|» imageDigest|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutImage|

> Example responses

> 200 Response

```json
{
  "image": {
    "registryId": {},
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "imageManifest": {},
    "imageManifestMediaType": {}
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

<h3 id="putimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutImageResponse](#schemaputimageresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|ImageAlreadyExistsException|[ImageAlreadyExistsException](#schemaimagealreadyexistsexception)|
|484|484|LayersNotFoundException|[LayersNotFoundException](#schemalayersnotfoundexception)|
|485|485|ReferencedImagesNotFoundException|[ReferencedImagesNotFoundException](#schemareferencedimagesnotfoundexception)|
|486|486|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|487|487|ImageTagAlreadyExistsException|[ImageTagAlreadyExistsException](#schemaimagetagalreadyexistsexception)|
|488|488|ImageDigestDoesNotMatchException|[ImageDigestDoesNotMatchException](#schemaimagedigestdoesnotmatchexception)|
|489|489|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImageScanningConfiguration

<a id="opIdPutImageScanningConfiguration"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageScanningConfiguration": {
      "scanOnPush": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration`

<important> <p>The <code>PutImageScanningConfiguration</code> API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see <a>PutRegistryScanningConfiguration</a>.</p> </important> <p>Updates the image scanning configuration for the specified repository.</p>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  }
}
```

<h3 id="putimagescanningconfiguration-parameters">Parameters</h3>

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
|body|body|[PutImageScanningConfigurationRequest](#schemaputimagescanningconfigurationrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageScanningConfiguration|body|object|true|none|
|» » scanOnPush|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
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

<h3 id="putimagescanningconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutImageScanningConfigurationResponse](#schemaputimagescanningconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImageTagMutability

<a id="opIdPutImageTagMutability"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageTagMutability": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability`

Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageTagMutability": {}
}
```

<h3 id="putimagetagmutability-parameters">Parameters</h3>

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
|body|body|[PutImageTagMutabilityRequest](#schemaputimagetagmutabilityrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageTagMutability|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageTagMutability": {}
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

<h3 id="putimagetagmutability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutImageTagMutabilityResponse](#schemaputimagetagmutabilityresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutLifecyclePolicy

<a id="opIdPutLifecyclePolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "lifecyclePolicyText": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy`

Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
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
|body|body|[PutLifecyclePolicyRequest](#schemaputlifecyclepolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» lifecyclePolicyText|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
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

<h3 id="putlifecyclepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutLifecyclePolicyResponse](#schemaputlifecyclepolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRegistryPolicy

<a id="opIdPutRegistryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy' \
  -d '{
    "policyText": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy`

<p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

> Body parameter

```json
{
  "policyText": {}
}
```

<h3 id="putregistrypolicy-parameters">Parameters</h3>

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
|body|body|[PutRegistryPolicyRequest](#schemaputregistrypolicyrequest)|true|none|
|» policyText|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "policyText": {}
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

<h3 id="putregistrypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRegistryPolicyResponse](#schemaputregistrypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRegistryScanningConfiguration

<a id="opIdPutRegistryScanningConfiguration"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration' \
  -d '{
    "scanType": {},
    "rules": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration`

Creates or updates the scanning configuration for your private registry.

> Body parameter

```json
{
  "scanType": {},
  "rules": {}
}
```

<h3 id="putregistryscanningconfiguration-parameters">Parameters</h3>

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
|body|body|[PutRegistryScanningConfigurationRequest](#schemaputregistryscanningconfigurationrequest)|true|none|
|» scanType|body|object|false|none|
|» rules|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration|

> Example responses

> 200 Response

```json
{
  "registryScanningConfiguration": {
    "scanType": {},
    "rules": {}
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

<h3 id="putregistryscanningconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRegistryScanningConfigurationResponse](#schemaputregistryscanningconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutReplicationConfiguration

<a id="opIdPutReplicationConfiguration"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration' \
  -d '{
    "replicationConfiguration": {
      "rules": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration`

<p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>

> Body parameter

```json
{
  "replicationConfiguration": {
    "rules": {}
  }
}
```

<h3 id="putreplicationconfiguration-parameters">Parameters</h3>

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
|body|body|[PutReplicationConfigurationRequest](#schemaputreplicationconfigurationrequest)|true|none|
|» replicationConfiguration|body|object|true|none|
|» » rules|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration|

> Example responses

> 200 Response

```json
{
  "replicationConfiguration": {
    "rules": {}
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

<h3 id="putreplicationconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutReplicationConfigurationResponse](#schemaputreplicationconfigurationresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetRepositoryPolicy

<a id="opIdSetRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "policyText": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy`

Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "policyText": {},
  "force": {}
}
```

<h3 id="setrepositorypolicy-parameters">Parameters</h3>

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
|body|body|[SetRepositoryPolicyRequest](#schemasetrepositorypolicyrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» policyText|body|object|true|none|
|» force|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "policyText": {}
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

<h3 id="setrepositorypolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SetRepositoryPolicyResponse](#schemasetrepositorypolicyresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImageScan

<a id="opIdStartImageScan"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.StartImageScan' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    }
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan`

Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  }
}
```

<h3 id="startimagescan-parameters">Parameters</h3>

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
|body|body|[StartImageScanRequest](#schemastartimagescanrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» imageId|body|[ImageIdentifier](#schemaimageidentifier)|true|An object with identifying information for an image in an Amazon ECR repository.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.StartImageScan|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "imageScanStatus": {
    "status": {},
    "description": {}
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

<h3 id="startimagescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartImageScanResponse](#schemastartimagescanresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnsupportedImageTypeException|[UnsupportedImageTypeException](#schemaunsupportedimagetypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|485|485|ImageNotFoundException|[ImageNotFoundException](#schemaimagenotfoundexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartLifecyclePolicyPreview

<a id="opIdStartLifecyclePolicyPreview"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "lifecyclePolicyText": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview`

Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
}
```

<h3 id="startlifecyclepolicypreview-parameters">Parameters</h3>

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
|body|body|[StartLifecyclePolicyPreviewRequest](#schemastartlifecyclepolicypreviewrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» lifecyclePolicyText|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
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

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="startlifecyclepolicypreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartLifecyclePolicyPreviewResponse](#schemastartlifecyclepolicypreviewresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|LifecyclePolicyNotFoundException|[LifecyclePolicyNotFoundException](#schemalifecyclepolicynotfoundexception)|
|484|484|LifecyclePolicyPreviewInProgressException|[LifecyclePolicyPreviewInProgressException](#schemalifecyclepolicypreviewinprogressexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource`

Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.

> Body parameter

```json
{
  "resourceArn": {},
  "tags": {}
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
|» resourceArn|body|object|true|none|
|» tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.TagResource|

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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource`

Deletes specified tags from a resource.

> Body parameter

```json
{
  "resourceArn": {},
  "tagKeys": {}
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
|» resourceArn|body|object|true|none|
|» tagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.UntagResource|

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
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadLayerPart

<a id="opIdUploadLayerPart"></a>

> Code samples

```bash
curl 'https://ecr.us-east-1.amazonaws.com/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AmazonEC2ContainerRegistry_V20150921.UploadLayerPart' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "uploadId": {},
    "partFirstByte": {},
    "partLastByte": {},
    "layerPartBlob": {}
  }'
```

`POST /#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart`

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "partFirstByte": {},
  "partLastByte": {},
  "layerPartBlob": {}
}
```

<h3 id="uploadlayerpart-parameters">Parameters</h3>

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
|body|body|[UploadLayerPartRequest](#schemauploadlayerpartrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» uploadId|body|object|true|none|
|» partFirstByte|body|object|true|none|
|» partLastByte|body|object|true|none|
|» layerPartBlob|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AmazonEC2ContainerRegistry_V20150921.UploadLayerPart|

> Example responses

> 200 Response

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "lastByteReceived": {}
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

<h3 id="uploadlayerpart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UploadLayerPartResponse](#schemauploadlayerpartresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|InvalidLayerPartException|[InvalidLayerPartException](#schemainvalidlayerpartexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|UploadNotFoundException|[UploadNotFoundException](#schemauploadnotfoundexception)|
|485|485|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|486|486|KmsException|[KmsException](#schemakmsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchCheckLayerAvailabilityResponse">BatchCheckLayerAvailabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchchecklayeravailabilityresponse"></a>
<a id="schema_BatchCheckLayerAvailabilityResponse"></a>
<a id="tocSbatchchecklayeravailabilityresponse"></a>
<a id="tocsbatchchecklayeravailabilityresponse"></a>

```json
{
  "layers": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layers|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_BatchCheckLayerAvailabilityRequest">BatchCheckLayerAvailabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchchecklayeravailabilityrequest"></a>
<a id="schema_BatchCheckLayerAvailabilityRequest"></a>
<a id="tocSbatchchecklayeravailabilityrequest"></a>
<a id="tocsbatchchecklayeravailabilityrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "layerDigests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|layerDigests|object|true|none|none|

<h2 id="tocS_RepositoryNotFoundException">RepositoryNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynotfoundexception"></a>
<a id="schema_RepositoryNotFoundException"></a>
<a id="tocSrepositorynotfoundexception"></a>
<a id="tocsrepositorynotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_ServerException">ServerException</h2>
<!-- backwards compatibility -->
<a id="schemaserverexception"></a>
<a id="schema_ServerException"></a>
<a id="tocSserverexception"></a>
<a id="tocsserverexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteImageResponse">BatchDeleteImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimageresponse"></a>
<a id="schema_BatchDeleteImageResponse"></a>
<a id="tocSbatchdeleteimageresponse"></a>
<a id="tocsbatchdeleteimageresponse"></a>

```json
{
  "failures": [],
  "imageIds": [
    {
      "imageDigest": "sha256:examplee6d1e504117a17000003d3753086354a38375961f2e665416ef4b1b2f",
      "imageTag": "precise"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageIds|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_BatchDeleteImageRequest">BatchDeleteImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleteimagerequest"></a>
<a id="schema_BatchDeleteImageRequest"></a>
<a id="tocSbatchdeleteimagerequest"></a>
<a id="tocsbatchdeleteimagerequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {}
}
```

Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageIds|object|true|none|none|

<h2 id="tocS_BatchGetImageResponse">BatchGetImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetimageresponse"></a>
<a id="schema_BatchGetImageResponse"></a>
<a id="tocSbatchgetimageresponse"></a>
<a id="tocsbatchgetimageresponse"></a>

```json
{
  "failures": [],
  "images": [
    {
      "imageId": {
        "imageDigest": "sha256:example76bdff6d83a09ba2a818f0d00000063724a9ac3ba5019c56f74ebf42a",
        "imageTag": "precise"
      },
      "imageManifest": "{\n \"schemaVersion\": 1,\n \"name\": \"ubuntu\",\n \"tag\": \"precise\",\n...",
      "registryId": "244698725403",
      "repositoryName": "ubuntu"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_BatchGetImageRequest">BatchGetImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetimagerequest"></a>
<a id="schema_BatchGetImageRequest"></a>
<a id="tocSbatchgetimagerequest"></a>
<a id="tocsbatchgetimagerequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "acceptedMediaTypes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageIds|object|true|none|none|
|acceptedMediaTypes|object|false|none|none|

<h2 id="tocS_BatchGetRepositoryScanningConfigurationResponse">BatchGetRepositoryScanningConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrepositoryscanningconfigurationresponse"></a>
<a id="schema_BatchGetRepositoryScanningConfigurationResponse"></a>
<a id="tocSbatchgetrepositoryscanningconfigurationresponse"></a>
<a id="tocsbatchgetrepositoryscanningconfigurationresponse"></a>

```json
{
  "scanningConfigurations": {},
  "failures": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanningConfigurations|object|false|none|none|
|failures|object|false|none|none|

<h2 id="tocS_BatchGetRepositoryScanningConfigurationRequest">BatchGetRepositoryScanningConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetrepositoryscanningconfigurationrequest"></a>
<a id="schema_BatchGetRepositoryScanningConfigurationRequest"></a>
<a id="tocSbatchgetrepositoryscanningconfigurationrequest"></a>
<a id="tocsbatchgetrepositoryscanningconfigurationrequest"></a>

```json
{
  "repositoryNames": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryNames|object|true|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_CompleteLayerUploadResponse">CompleteLayerUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompletelayeruploadresponse"></a>
<a id="schema_CompleteLayerUploadResponse"></a>
<a id="tocScompletelayeruploadresponse"></a>
<a id="tocscompletelayeruploadresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "layerDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|uploadId|object|false|none|none|
|layerDigest|object|false|none|none|

<h2 id="tocS_CompleteLayerUploadRequest">CompleteLayerUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletelayeruploadrequest"></a>
<a id="schema_CompleteLayerUploadRequest"></a>
<a id="tocScompletelayeruploadrequest"></a>
<a id="tocscompletelayeruploadrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "layerDigests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|uploadId|object|true|none|none|
|layerDigests|object|true|none|none|

<h2 id="tocS_UploadNotFoundException">UploadNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemauploadnotfoundexception"></a>
<a id="schema_UploadNotFoundException"></a>
<a id="tocSuploadnotfoundexception"></a>
<a id="tocsuploadnotfoundexception"></a>

```json
null
```

<h2 id="tocS_InvalidLayerException">InvalidLayerException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlayerexception"></a>
<a id="schema_InvalidLayerException"></a>
<a id="tocSinvalidlayerexception"></a>
<a id="tocsinvalidlayerexception"></a>

```json
null
```

<h2 id="tocS_LayerPartTooSmallException">LayerPartTooSmallException</h2>
<!-- backwards compatibility -->
<a id="schemalayerparttoosmallexception"></a>
<a id="schema_LayerPartTooSmallException"></a>
<a id="tocSlayerparttoosmallexception"></a>
<a id="tocslayerparttoosmallexception"></a>

```json
null
```

<h2 id="tocS_LayerAlreadyExistsException">LayerAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemalayeralreadyexistsexception"></a>
<a id="schema_LayerAlreadyExistsException"></a>
<a id="tocSlayeralreadyexistsexception"></a>
<a id="tocslayeralreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_EmptyUploadException">EmptyUploadException</h2>
<!-- backwards compatibility -->
<a id="schemaemptyuploadexception"></a>
<a id="schema_EmptyUploadException"></a>
<a id="tocSemptyuploadexception"></a>
<a id="tocsemptyuploadexception"></a>

```json
null
```

<h2 id="tocS_KmsException">KmsException</h2>
<!-- backwards compatibility -->
<a id="schemakmsexception"></a>
<a id="schema_KmsException"></a>
<a id="tocSkmsexception"></a>
<a id="tocskmsexception"></a>

```json
null
```

<h2 id="tocS_CreatePullThroughCacheRuleResponse">CreatePullThroughCacheRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullthroughcacheruleresponse"></a>
<a id="schema_CreatePullThroughCacheRuleResponse"></a>
<a id="tocScreatepullthroughcacheruleresponse"></a>
<a id="tocscreatepullthroughcacheruleresponse"></a>

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "createdAt": {},
  "registryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrRepositoryPrefix|object|false|none|none|
|upstreamRegistryUrl|object|false|none|none|
|createdAt|object|false|none|none|
|registryId|object|false|none|none|

<h2 id="tocS_CreatePullThroughCacheRuleRequest">CreatePullThroughCacheRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepullthroughcacherulerequest"></a>
<a id="schema_CreatePullThroughCacheRuleRequest"></a>
<a id="tocScreatepullthroughcacherulerequest"></a>
<a id="tocscreatepullthroughcacherulerequest"></a>

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "registryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrRepositoryPrefix|object|true|none|none|
|upstreamRegistryUrl|object|true|none|none|
|registryId|object|false|none|none|

<h2 id="tocS_PullThroughCacheRuleAlreadyExistsException">PullThroughCacheRuleAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherulealreadyexistsexception"></a>
<a id="schema_PullThroughCacheRuleAlreadyExistsException"></a>
<a id="tocSpullthroughcacherulealreadyexistsexception"></a>
<a id="tocspullthroughcacherulealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedUpstreamRegistryException">UnsupportedUpstreamRegistryException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedupstreamregistryexception"></a>
<a id="schema_UnsupportedUpstreamRegistryException"></a>
<a id="tocSunsupportedupstreamregistryexception"></a>
<a id="tocsunsupportedupstreamregistryexception"></a>

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

<h2 id="tocS_CreateRepositoryResponse">CreateRepositoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryresponse"></a>
<a id="schema_CreateRepositoryResponse"></a>
<a id="tocScreaterepositoryresponse"></a>
<a id="tocscreaterepositoryresponse"></a>

```json
{
  "repository": {
    "registryId": 12345678901,
    "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/project-a/nginx-web-app",
    "repositoryName": "project-a/nginx-web-app"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_CreateRepositoryRequest">CreateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryrequest"></a>
<a id="schema_CreateRepositoryRequest"></a>
<a id="tocScreaterepositoryrequest"></a>
<a id="tocscreaterepositoryrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "tags": {},
  "imageTagMutability": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  },
  "encryptionConfiguration": {
    "encryptionType": {},
    "kmsKey": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|tags|object|false|none|none|
|imageTagMutability|object|false|none|none|
|imageScanningConfiguration|object|false|none|none|
|encryptionConfiguration|object|false|none|none|

<h2 id="tocS_InvalidTagParameterException">InvalidTagParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtagparameterexception"></a>
<a id="schema_InvalidTagParameterException"></a>
<a id="tocSinvalidtagparameterexception"></a>
<a id="tocsinvalidtagparameterexception"></a>

```json
null
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

<h2 id="tocS_RepositoryAlreadyExistsException">RepositoryAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryalreadyexistsexception"></a>
<a id="schema_RepositoryAlreadyExistsException"></a>
<a id="tocSrepositoryalreadyexistsexception"></a>
<a id="tocsrepositoryalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_DeleteLifecyclePolicyResponse">DeleteLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyresponse"></a>
<a id="schema_DeleteLifecyclePolicyResponse"></a>
<a id="tocSdeletelifecyclepolicyresponse"></a>
<a id="tocsdeletelifecyclepolicyresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "lastEvaluatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|lifecyclePolicyText|object|false|none|none|
|lastEvaluatedAt|object|false|none|none|

<h2 id="tocS_DeleteLifecyclePolicyRequest">DeleteLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelifecyclepolicyrequest"></a>
<a id="schema_DeleteLifecyclePolicyRequest"></a>
<a id="tocSdeletelifecyclepolicyrequest"></a>
<a id="tocsdeletelifecyclepolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_LifecyclePolicyNotFoundException">LifecyclePolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicynotfoundexception"></a>
<a id="schema_LifecyclePolicyNotFoundException"></a>
<a id="tocSlifecyclepolicynotfoundexception"></a>
<a id="tocslifecyclepolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeletePullThroughCacheRuleResponse">DeletePullThroughCacheRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepullthroughcacheruleresponse"></a>
<a id="schema_DeletePullThroughCacheRuleResponse"></a>
<a id="tocSdeletepullthroughcacheruleresponse"></a>
<a id="tocsdeletepullthroughcacheruleresponse"></a>

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "createdAt": {},
  "registryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrRepositoryPrefix|object|false|none|none|
|upstreamRegistryUrl|object|false|none|none|
|createdAt|object|false|none|none|
|registryId|object|false|none|none|

<h2 id="tocS_DeletePullThroughCacheRuleRequest">DeletePullThroughCacheRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepullthroughcacherulerequest"></a>
<a id="schema_DeletePullThroughCacheRuleRequest"></a>
<a id="tocSdeletepullthroughcacherulerequest"></a>
<a id="tocsdeletepullthroughcacherulerequest"></a>

```json
{
  "ecrRepositoryPrefix": {},
  "registryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrRepositoryPrefix|object|true|none|none|
|registryId|object|false|none|none|

<h2 id="tocS_PullThroughCacheRuleNotFoundException">PullThroughCacheRuleNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherulenotfoundexception"></a>
<a id="schema_PullThroughCacheRuleNotFoundException"></a>
<a id="tocSpullthroughcacherulenotfoundexception"></a>
<a id="tocspullthroughcacherulenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteRegistryPolicyResponse">DeleteRegistryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregistrypolicyresponse"></a>
<a id="schema_DeleteRegistryPolicyResponse"></a>
<a id="tocSdeleteregistrypolicyresponse"></a>
<a id="tocsdeleteregistrypolicyresponse"></a>

```json
{
  "registryId": {},
  "policyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_DeleteRegistryPolicyRequest">DeleteRegistryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteregistrypolicyrequest"></a>
<a id="schema_DeleteRegistryPolicyRequest"></a>
<a id="tocSdeleteregistrypolicyrequest"></a>
<a id="tocsdeleteregistrypolicyrequest"></a>

```json
{}
```

<h2 id="tocS_RegistryPolicyNotFoundException">RegistryPolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaregistrypolicynotfoundexception"></a>
<a id="schema_RegistryPolicyNotFoundException"></a>
<a id="tocSregistrypolicynotfoundexception"></a>
<a id="tocsregistrypolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteRepositoryResponse">DeleteRepositoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryresponse"></a>
<a id="schema_DeleteRepositoryResponse"></a>
<a id="tocSdeleterepositoryresponse"></a>
<a id="tocsdeleterepositoryresponse"></a>

```json
{
  "repository": {
    "registryId": 12345678901,
    "repositoryArn": "arn:aws:ecr:us-west-2:012345678901:repository/ubuntu",
    "repositoryName": "ubuntu"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|

<h2 id="tocS_DeleteRepositoryRequest">DeleteRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositoryrequest"></a>
<a id="schema_DeleteRepositoryRequest"></a>
<a id="tocSdeleterepositoryrequest"></a>
<a id="tocsdeleterepositoryrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_RepositoryNotEmptyException">RepositoryNotEmptyException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynotemptyexception"></a>
<a id="schema_RepositoryNotEmptyException"></a>
<a id="tocSrepositorynotemptyexception"></a>
<a id="tocsrepositorynotemptyexception"></a>

```json
null
```

<h2 id="tocS_DeleteRepositoryPolicyResponse">DeleteRepositoryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositorypolicyresponse"></a>
<a id="schema_DeleteRepositoryPolicyResponse"></a>
<a id="tocSdeleterepositorypolicyresponse"></a>
<a id="tocsdeleterepositorypolicyresponse"></a>

```json
{
  "policyText": "{ ... }",
  "registryId": 12345678901,
  "repositoryName": "ubuntu"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_DeleteRepositoryPolicyRequest">DeleteRepositoryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterepositorypolicyrequest"></a>
<a id="schema_DeleteRepositoryPolicyRequest"></a>
<a id="tocSdeleterepositorypolicyrequest"></a>
<a id="tocsdeleterepositorypolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_RepositoryPolicyNotFoundException">RepositoryPolicyNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorypolicynotfoundexception"></a>
<a id="schema_RepositoryPolicyNotFoundException"></a>
<a id="tocSrepositorypolicynotfoundexception"></a>
<a id="tocsrepositorypolicynotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeImageReplicationStatusResponse">DescribeImageReplicationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagereplicationstatusresponse"></a>
<a id="schema_DescribeImageReplicationStatusResponse"></a>
<a id="tocSdescribeimagereplicationstatusresponse"></a>
<a id="tocsdescribeimagereplicationstatusresponse"></a>

```json
{
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "replicationStatuses": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|false|none|An object with identifying information for an image in an Amazon ECR repository.|
|replicationStatuses|object|false|none|none|

<h2 id="tocS_DescribeImageReplicationStatusRequest">DescribeImageReplicationStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagereplicationstatusrequest"></a>
<a id="schema_DescribeImageReplicationStatusRequest"></a>
<a id="tocSdescribeimagereplicationstatusrequest"></a>
<a id="tocsdescribeimagereplicationstatusrequest"></a>

```json
{
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "registryId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|true|none|An object with identifying information for an image in an Amazon ECR repository.|
|registryId|object|false|none|none|

<h2 id="tocS_ImageNotFoundException">ImageNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaimagenotfoundexception"></a>
<a id="schema_ImageNotFoundException"></a>
<a id="tocSimagenotfoundexception"></a>
<a id="tocsimagenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeImageScanFindingsResponse">DescribeImageScanFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagescanfindingsresponse"></a>
<a id="schema_DescribeImageScanFindingsResponse"></a>
<a id="tocSdescribeimagescanfindingsresponse"></a>
<a id="tocsdescribeimagescanfindingsresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "imageScanStatus": {
    "status": {},
    "description": {}
  },
  "imageScanFindings": {
    "imageScanCompletedAt": {},
    "vulnerabilitySourceUpdatedAt": {},
    "findingSeverityCounts": {
      "property1": 0,
      "property2": 0
    },
    "findings": {},
    "enhancedFindings": {}
  },
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|false|none|An object with identifying information for an image in an Amazon ECR repository.|
|imageScanStatus|object|false|none|none|
|imageScanFindings|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeImageScanFindingsRequest">DescribeImageScanFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagescanfindingsrequest"></a>
<a id="schema_DescribeImageScanFindingsRequest"></a>
<a id="tocSdescribeimagescanfindingsrequest"></a>
<a id="tocsdescribeimagescanfindingsrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|true|none|An object with identifying information for an image in an Amazon ECR repository.|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_ScanNotFoundException">ScanNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemascannotfoundexception"></a>
<a id="schema_ScanNotFoundException"></a>
<a id="tocSscannotfoundexception"></a>
<a id="tocsscannotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeImagesResponse">DescribeImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesresponse"></a>
<a id="schema_DescribeImagesResponse"></a>
<a id="tocSdescribeimagesresponse"></a>
<a id="tocsdescribeimagesresponse"></a>

```json
{
  "imageDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeImagesRequest">DescribeImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesrequest"></a>
<a id="schema_DescribeImagesRequest"></a>
<a id="tocSdescribeimagesrequest"></a>
<a id="tocsdescribeimagesrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageIds|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_DescribePullThroughCacheRulesResponse">DescribePullThroughCacheRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepullthroughcacherulesresponse"></a>
<a id="schema_DescribePullThroughCacheRulesResponse"></a>
<a id="tocSdescribepullthroughcacherulesresponse"></a>
<a id="tocsdescribepullthroughcacherulesresponse"></a>

```json
{
  "pullThroughCacheRules": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pullThroughCacheRules|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribePullThroughCacheRulesRequest">DescribePullThroughCacheRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepullthroughcacherulesrequest"></a>
<a id="schema_DescribePullThroughCacheRulesRequest"></a>
<a id="tocSdescribepullthroughcacherulesrequest"></a>
<a id="tocsdescribepullthroughcacherulesrequest"></a>

```json
{
  "registryId": {},
  "ecrRepositoryPrefixes": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|ecrRepositoryPrefixes|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeRegistryResponse">DescribeRegistryResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistryresponse"></a>
<a id="schema_DescribeRegistryResponse"></a>
<a id="tocSdescriberegistryresponse"></a>
<a id="tocsdescriberegistryresponse"></a>

```json
{
  "registryId": {},
  "replicationConfiguration": {
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|replicationConfiguration|object|false|none|none|

<h2 id="tocS_DescribeRegistryRequest">DescribeRegistryRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistryrequest"></a>
<a id="schema_DescribeRegistryRequest"></a>
<a id="tocSdescriberegistryrequest"></a>
<a id="tocsdescriberegistryrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeRepositoriesResponse">DescribeRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoriesresponse"></a>
<a id="schema_DescribeRepositoriesResponse"></a>
<a id="tocSdescriberepositoriesresponse"></a>
<a id="tocsdescriberepositoriesresponse"></a>

```json
{
  "repositories": [
    {
      "registryId": 12345678910,
      "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/ubuntu",
      "repositoryName": "ubuntu"
    },
    {
      "registryId": 12345678910,
      "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/test",
      "repositoryName": "test"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeRepositoriesRequest">DescribeRepositoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoriesrequest"></a>
<a id="schema_DescribeRepositoriesRequest"></a>
<a id="tocSdescriberepositoriesrequest"></a>
<a id="tocsdescriberepositoriesrequest"></a>

```json
{
  "registryId": {},
  "repositoryNames": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryNames|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_GetAuthorizationTokenResponse">GetAuthorizationTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationtokenresponse"></a>
<a id="schema_GetAuthorizationTokenResponse"></a>
<a id="tocSgetauthorizationtokenresponse"></a>
<a id="tocsgetauthorizationtokenresponse"></a>

```json
{
  "authorizationData": [
    {
      "authorizationToken": "QVdTOkN...",
      "expiresAt": "1470951892432",
      "proxyEndpoint": "https://012345678901.dkr.ecr.us-west-2.amazonaws.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationData|object|false|none|none|

<h2 id="tocS_GetAuthorizationTokenRequest">GetAuthorizationTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationtokenrequest"></a>
<a id="schema_GetAuthorizationTokenRequest"></a>
<a id="tocSgetauthorizationtokenrequest"></a>
<a id="tocsgetauthorizationtokenrequest"></a>

```json
{
  "registryIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryIds|object|false|none|none|

<h2 id="tocS_GetDownloadUrlForLayerResponse">GetDownloadUrlForLayerResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdownloadurlforlayerresponse"></a>
<a id="schema_GetDownloadUrlForLayerResponse"></a>
<a id="tocSgetdownloadurlforlayerresponse"></a>
<a id="tocsgetdownloadurlforlayerresponse"></a>

```json
{
  "downloadUrl": {},
  "layerDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|object|false|none|none|
|layerDigest|object|false|none|none|

<h2 id="tocS_GetDownloadUrlForLayerRequest">GetDownloadUrlForLayerRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdownloadurlforlayerrequest"></a>
<a id="schema_GetDownloadUrlForLayerRequest"></a>
<a id="tocSgetdownloadurlforlayerrequest"></a>
<a id="tocsgetdownloadurlforlayerrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "layerDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|layerDigest|object|true|none|none|

<h2 id="tocS_LayersNotFoundException">LayersNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalayersnotfoundexception"></a>
<a id="schema_LayersNotFoundException"></a>
<a id="tocSlayersnotfoundexception"></a>
<a id="tocslayersnotfoundexception"></a>

```json
null
```

<h2 id="tocS_LayerInaccessibleException">LayerInaccessibleException</h2>
<!-- backwards compatibility -->
<a id="schemalayerinaccessibleexception"></a>
<a id="schema_LayerInaccessibleException"></a>
<a id="tocSlayerinaccessibleexception"></a>
<a id="tocslayerinaccessibleexception"></a>

```json
null
```

<h2 id="tocS_GetLifecyclePolicyResponse">GetLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyresponse"></a>
<a id="schema_GetLifecyclePolicyResponse"></a>
<a id="tocSgetlifecyclepolicyresponse"></a>
<a id="tocsgetlifecyclepolicyresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "lastEvaluatedAt": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|lifecyclePolicyText|object|false|none|none|
|lastEvaluatedAt|object|false|none|none|

<h2 id="tocS_GetLifecyclePolicyRequest">GetLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicyrequest"></a>
<a id="schema_GetLifecyclePolicyRequest"></a>
<a id="tocSgetlifecyclepolicyrequest"></a>
<a id="tocsgetlifecyclepolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_GetLifecyclePolicyPreviewResponse">GetLifecyclePolicyPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicypreviewresponse"></a>
<a id="schema_GetLifecyclePolicyPreviewResponse"></a>
<a id="tocSgetlifecyclepolicypreviewresponse"></a>
<a id="tocsgetlifecyclepolicypreviewresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "status": {},
  "nextToken": {},
  "previewResults": {},
  "summary": {
    "expiringImageTotalCount": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|lifecyclePolicyText|object|false|none|none|
|status|object|false|none|none|
|nextToken|object|false|none|none|
|previewResults|object|false|none|none|
|summary|object|false|none|none|

<h2 id="tocS_GetLifecyclePolicyPreviewRequest">GetLifecyclePolicyPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetlifecyclepolicypreviewrequest"></a>
<a id="schema_GetLifecyclePolicyPreviewRequest"></a>
<a id="tocSgetlifecyclepolicypreviewrequest"></a>
<a id="tocsgetlifecyclepolicypreviewrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageIds|object|false|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_LifecyclePolicyPreviewNotFoundException">LifecyclePolicyPreviewNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewnotfoundexception"></a>
<a id="schema_LifecyclePolicyPreviewNotFoundException"></a>
<a id="tocSlifecyclepolicypreviewnotfoundexception"></a>
<a id="tocslifecyclepolicypreviewnotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetRegistryPolicyResponse">GetRegistryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregistrypolicyresponse"></a>
<a id="schema_GetRegistryPolicyResponse"></a>
<a id="tocSgetregistrypolicyresponse"></a>
<a id="tocsgetregistrypolicyresponse"></a>

```json
{
  "registryId": {},
  "policyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_GetRegistryPolicyRequest">GetRegistryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregistrypolicyrequest"></a>
<a id="schema_GetRegistryPolicyRequest"></a>
<a id="tocSgetregistrypolicyrequest"></a>
<a id="tocsgetregistrypolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetRegistryScanningConfigurationResponse">GetRegistryScanningConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregistryscanningconfigurationresponse"></a>
<a id="schema_GetRegistryScanningConfigurationResponse"></a>
<a id="tocSgetregistryscanningconfigurationresponse"></a>
<a id="tocsgetregistryscanningconfigurationresponse"></a>

```json
{
  "registryId": {},
  "scanningConfiguration": {
    "scanType": {},
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|scanningConfiguration|object|false|none|none|

<h2 id="tocS_GetRegistryScanningConfigurationRequest">GetRegistryScanningConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregistryscanningconfigurationrequest"></a>
<a id="schema_GetRegistryScanningConfigurationRequest"></a>
<a id="tocSgetregistryscanningconfigurationrequest"></a>
<a id="tocsgetregistryscanningconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetRepositoryPolicyResponse">GetRepositoryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorypolicyresponse"></a>
<a id="schema_GetRepositoryPolicyResponse"></a>
<a id="tocSgetrepositorypolicyresponse"></a>
<a id="tocsgetrepositorypolicyresponse"></a>

```json
{
  "policyText": "{\n  \"Version\" : \"2008-10-17\",\n  \"Statement\" : [ {\n    \"Sid\" : \"new statement\",\n    \"Effect\" : \"Allow\",\n    \"Principal\" : {\n     \"AWS\" : \"arn:aws:iam::012345678901:role/CodeDeployDemo\"\n    },\n\"Action\" : [ \"ecr:GetDownloadUrlForLayer\", \"ecr:BatchGetImage\", \"ecr:BatchCheckLayerAvailability\" ]\n } ]\n}",
  "registryId": 12345678901,
  "repositoryName": "ubuntu"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_GetRepositoryPolicyRequest">GetRepositoryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorypolicyrequest"></a>
<a id="schema_GetRepositoryPolicyRequest"></a>
<a id="tocSgetrepositorypolicyrequest"></a>
<a id="tocsgetrepositorypolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_InitiateLayerUploadResponse">InitiateLayerUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemainitiatelayeruploadresponse"></a>
<a id="schema_InitiateLayerUploadResponse"></a>
<a id="tocSinitiatelayeruploadresponse"></a>
<a id="tocsinitiatelayeruploadresponse"></a>

```json
{
  "uploadId": {},
  "partSize": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadId|object|false|none|none|
|partSize|object|false|none|none|

<h2 id="tocS_InitiateLayerUploadRequest">InitiateLayerUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemainitiatelayeruploadrequest"></a>
<a id="schema_InitiateLayerUploadRequest"></a>
<a id="tocSinitiatelayeruploadrequest"></a>
<a id="tocsinitiatelayeruploadrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_ListImagesResponse">ListImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagesresponse"></a>
<a id="schema_ListImagesResponse"></a>
<a id="tocSlistimagesresponse"></a>
<a id="tocslistimagesresponse"></a>

```json
{
  "imageIds": [
    {
      "imageDigest": "sha256:764f63476bdff6d83a09ba2a818f0d35757063724a9ac3ba5019c56f74ebf42a",
      "imageTag": "precise"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageIds|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagesRequest">ListImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagesrequest"></a>
<a id="schema_ListImagesRequest"></a>
<a id="tocSlistimagesrequest"></a>
<a id="tocslistimagesrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {},
  "filter": {
    "tagStatus": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "resourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|

<h2 id="tocS_PutImageResponse">PutImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputimageresponse"></a>
<a id="schema_PutImageResponse"></a>
<a id="tocSputimageresponse"></a>
<a id="tocsputimageresponse"></a>

```json
{
  "image": {
    "registryId": {},
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "imageManifest": {},
    "imageManifestMediaType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|

<h2 id="tocS_PutImageRequest">PutImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputimagerequest"></a>
<a id="schema_PutImageRequest"></a>
<a id="tocSputimagerequest"></a>
<a id="tocsputimagerequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageManifest": {},
  "imageManifestMediaType": {},
  "imageTag": {},
  "imageDigest": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageManifest|object|true|none|none|
|imageManifestMediaType|object|false|none|none|
|imageTag|object|false|none|none|
|imageDigest|object|false|none|none|

<h2 id="tocS_ImageAlreadyExistsException">ImageAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaimagealreadyexistsexception"></a>
<a id="schema_ImageAlreadyExistsException"></a>
<a id="tocSimagealreadyexistsexception"></a>
<a id="tocsimagealreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ReferencedImagesNotFoundException">ReferencedImagesNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemareferencedimagesnotfoundexception"></a>
<a id="schema_ReferencedImagesNotFoundException"></a>
<a id="tocSreferencedimagesnotfoundexception"></a>
<a id="tocsreferencedimagesnotfoundexception"></a>

```json
null
```

<h2 id="tocS_ImageTagAlreadyExistsException">ImageTagAlreadyExistsException</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagalreadyexistsexception"></a>
<a id="schema_ImageTagAlreadyExistsException"></a>
<a id="tocSimagetagalreadyexistsexception"></a>
<a id="tocsimagetagalreadyexistsexception"></a>

```json
null
```

<h2 id="tocS_ImageDigestDoesNotMatchException">ImageDigestDoesNotMatchException</h2>
<!-- backwards compatibility -->
<a id="schemaimagedigestdoesnotmatchexception"></a>
<a id="schema_ImageDigestDoesNotMatchException"></a>
<a id="tocSimagedigestdoesnotmatchexception"></a>
<a id="tocsimagedigestdoesnotmatchexception"></a>

```json
null
```

<h2 id="tocS_PutImageScanningConfigurationResponse">PutImageScanningConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputimagescanningconfigurationresponse"></a>
<a id="schema_PutImageScanningConfigurationResponse"></a>
<a id="tocSputimagescanningconfigurationresponse"></a>
<a id="tocsputimagescanningconfigurationresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_PutImageScanningConfigurationRequest">PutImageScanningConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputimagescanningconfigurationrequest"></a>
<a id="schema_PutImageScanningConfigurationRequest"></a>
<a id="tocSputimagescanningconfigurationrequest"></a>
<a id="tocsputimagescanningconfigurationrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageScanningConfiguration|object|true|none|none|

<h2 id="tocS_PutImageTagMutabilityResponse">PutImageTagMutabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputimagetagmutabilityresponse"></a>
<a id="schema_PutImageTagMutabilityResponse"></a>
<a id="tocSputimagetagmutabilityresponse"></a>
<a id="tocsputimagetagmutabilityresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageTagMutability": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageTagMutability|object|false|none|none|

<h2 id="tocS_PutImageTagMutabilityRequest">PutImageTagMutabilityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputimagetagmutabilityrequest"></a>
<a id="schema_PutImageTagMutabilityRequest"></a>
<a id="tocSputimagetagmutabilityrequest"></a>
<a id="tocsputimagetagmutabilityrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageTagMutability": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageTagMutability|object|true|none|none|

<h2 id="tocS_PutLifecyclePolicyResponse">PutLifecyclePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclepolicyresponse"></a>
<a id="schema_PutLifecyclePolicyResponse"></a>
<a id="tocSputlifecyclepolicyresponse"></a>
<a id="tocsputlifecyclepolicyresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|lifecyclePolicyText|object|false|none|none|

<h2 id="tocS_PutLifecyclePolicyRequest">PutLifecyclePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputlifecyclepolicyrequest"></a>
<a id="schema_PutLifecyclePolicyRequest"></a>
<a id="tocSputlifecyclepolicyrequest"></a>
<a id="tocsputlifecyclepolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|lifecyclePolicyText|object|true|none|none|

<h2 id="tocS_PutRegistryPolicyResponse">PutRegistryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputregistrypolicyresponse"></a>
<a id="schema_PutRegistryPolicyResponse"></a>
<a id="tocSputregistrypolicyresponse"></a>
<a id="tocsputregistrypolicyresponse"></a>

```json
{
  "registryId": {},
  "policyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_PutRegistryPolicyRequest">PutRegistryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputregistrypolicyrequest"></a>
<a id="schema_PutRegistryPolicyRequest"></a>
<a id="tocSputregistrypolicyrequest"></a>
<a id="tocsputregistrypolicyrequest"></a>

```json
{
  "policyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyText|object|true|none|none|

<h2 id="tocS_PutRegistryScanningConfigurationResponse">PutRegistryScanningConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputregistryscanningconfigurationresponse"></a>
<a id="schema_PutRegistryScanningConfigurationResponse"></a>
<a id="tocSputregistryscanningconfigurationresponse"></a>
<a id="tocsputregistryscanningconfigurationresponse"></a>

```json
{
  "registryScanningConfiguration": {
    "scanType": {},
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryScanningConfiguration|object|false|none|none|

<h2 id="tocS_PutRegistryScanningConfigurationRequest">PutRegistryScanningConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputregistryscanningconfigurationrequest"></a>
<a id="schema_PutRegistryScanningConfigurationRequest"></a>
<a id="tocSputregistryscanningconfigurationrequest"></a>
<a id="tocsputregistryscanningconfigurationrequest"></a>

```json
{
  "scanType": {},
  "rules": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanType|object|false|none|none|
|rules|object|false|none|none|

<h2 id="tocS_PutReplicationConfigurationResponse">PutReplicationConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputreplicationconfigurationresponse"></a>
<a id="schema_PutReplicationConfigurationResponse"></a>
<a id="tocSputreplicationconfigurationresponse"></a>
<a id="tocsputreplicationconfigurationresponse"></a>

```json
{
  "replicationConfiguration": {
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationConfiguration|object|false|none|none|

<h2 id="tocS_PutReplicationConfigurationRequest">PutReplicationConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputreplicationconfigurationrequest"></a>
<a id="schema_PutReplicationConfigurationRequest"></a>
<a id="tocSputreplicationconfigurationrequest"></a>
<a id="tocsputreplicationconfigurationrequest"></a>

```json
{
  "replicationConfiguration": {
    "rules": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|replicationConfiguration|object|true|none|none|

<h2 id="tocS_SetRepositoryPolicyResponse">SetRepositoryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetrepositorypolicyresponse"></a>
<a id="schema_SetRepositoryPolicyResponse"></a>
<a id="tocSsetrepositorypolicyresponse"></a>
<a id="tocssetrepositorypolicyresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "policyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|policyText|object|false|none|none|

<h2 id="tocS_SetRepositoryPolicyRequest">SetRepositoryPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetrepositorypolicyrequest"></a>
<a id="schema_SetRepositoryPolicyRequest"></a>
<a id="tocSsetrepositorypolicyrequest"></a>
<a id="tocssetrepositorypolicyrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "policyText": {},
  "force": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|policyText|object|true|none|none|
|force|object|false|none|none|

<h2 id="tocS_StartImageScanResponse">StartImageScanResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimagescanresponse"></a>
<a id="schema_StartImageScanResponse"></a>
<a id="tocSstartimagescanresponse"></a>
<a id="tocsstartimagescanresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "imageScanStatus": {
    "status": {},
    "description": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|false|none|An object with identifying information for an image in an Amazon ECR repository.|
|imageScanStatus|object|false|none|none|

<h2 id="tocS_StartImageScanRequest">StartImageScanRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimagescanrequest"></a>
<a id="schema_StartImageScanRequest"></a>
<a id="tocSstartimagescanrequest"></a>
<a id="tocsstartimagescanrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageId|[ImageIdentifier](#schemaimageidentifier)|true|none|An object with identifying information for an image in an Amazon ECR repository.|

<h2 id="tocS_UnsupportedImageTypeException">UnsupportedImageTypeException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedimagetypeexception"></a>
<a id="schema_UnsupportedImageTypeException"></a>
<a id="tocSunsupportedimagetypeexception"></a>
<a id="tocsunsupportedimagetypeexception"></a>

```json
null
```

<h2 id="tocS_StartLifecyclePolicyPreviewResponse">StartLifecyclePolicyPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartlifecyclepolicypreviewresponse"></a>
<a id="schema_StartLifecyclePolicyPreviewResponse"></a>
<a id="tocSstartlifecyclepolicypreviewresponse"></a>
<a id="tocsstartlifecyclepolicypreviewresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {},
  "status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|lifecyclePolicyText|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_StartLifecyclePolicyPreviewRequest">StartLifecyclePolicyPreviewRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartlifecyclepolicypreviewrequest"></a>
<a id="schema_StartLifecyclePolicyPreviewRequest"></a>
<a id="tocSstartlifecyclepolicypreviewrequest"></a>
<a id="tocsstartlifecyclepolicypreviewrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "lifecyclePolicyText": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|lifecyclePolicyText|object|false|none|none|

<h2 id="tocS_LifecyclePolicyPreviewInProgressException">LifecyclePolicyPreviewInProgressException</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewinprogressexception"></a>
<a id="schema_LifecyclePolicyPreviewInProgressException"></a>
<a id="tocSlifecyclepolicypreviewinprogressexception"></a>
<a id="tocslifecyclepolicypreviewinprogressexception"></a>

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
  "resourceArn": {},
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tags|object|true|none|none|

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
  "resourceArn": {},
  "tagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceArn|object|true|none|none|
|tagKeys|object|true|none|none|

<h2 id="tocS_UploadLayerPartResponse">UploadLayerPartResponse</h2>
<!-- backwards compatibility -->
<a id="schemauploadlayerpartresponse"></a>
<a id="schema_UploadLayerPartResponse"></a>
<a id="tocSuploadlayerpartresponse"></a>
<a id="tocsuploadlayerpartresponse"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "lastByteReceived": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|uploadId|object|false|none|none|
|lastByteReceived|object|false|none|none|

<h2 id="tocS_UploadLayerPartRequest">UploadLayerPartRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadlayerpartrequest"></a>
<a id="schema_UploadLayerPartRequest"></a>
<a id="tocSuploadlayerpartrequest"></a>
<a id="tocsuploadlayerpartrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "uploadId": {},
  "partFirstByte": {},
  "partLastByte": {},
  "layerPartBlob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|uploadId|object|true|none|none|
|partFirstByte|object|true|none|none|
|partLastByte|object|true|none|none|
|layerPartBlob|object|true|none|none|

<h2 id="tocS_InvalidLayerPartException">InvalidLayerPartException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidlayerpartexception"></a>
<a id="schema_InvalidLayerPartException"></a>
<a id="tocSinvalidlayerpartexception"></a>
<a id="tocsinvalidlayerpartexception"></a>

```json
null
```

<h2 id="tocS_Arch">Arch</h2>
<!-- backwards compatibility -->
<a id="schemaarch"></a>
<a id="schema_Arch"></a>
<a id="tocSarch"></a>
<a id="tocsarch"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AttributeKey">AttributeKey</h2>
<!-- backwards compatibility -->
<a id="schemaattributekey"></a>
<a id="schema_AttributeKey"></a>
<a id="tocSattributekey"></a>
<a id="tocsattributekey"></a>

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

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "key": {},
  "value": {}
}
```

This data type is used in the <a>ImageScanFinding</a> data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|true|none|none|
|value|object|false|none|none|

<h2 id="tocS_AttributeList">AttributeList</h2>
<!-- backwards compatibility -->
<a id="schemaattributelist"></a>
<a id="schema_AttributeList"></a>
<a id="tocSattributelist"></a>
<a id="tocsattributelist"></a>

```json
[
  {
    "key": {},
    "value": {}
  }
]
```

<h2 id="tocS_Author">Author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_Author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
"string"
```

<h2 id="tocS_Base64">Base64</h2>
<!-- backwards compatibility -->
<a id="schemabase64"></a>
<a id="schema_Base64"></a>
<a id="tocSbase64"></a>
<a id="tocsbase64"></a>

```json
"string"
```

<h2 id="tocS_ExpirationTimestamp">ExpirationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaexpirationtimestamp"></a>
<a id="schema_ExpirationTimestamp"></a>
<a id="tocSexpirationtimestamp"></a>
<a id="tocsexpirationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ProxyEndpoint">ProxyEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaproxyendpoint"></a>
<a id="schema_ProxyEndpoint"></a>
<a id="tocSproxyendpoint"></a>
<a id="tocsproxyendpoint"></a>

```json
"string"
```

<h2 id="tocS_AuthorizationData">AuthorizationData</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationdata"></a>
<a id="schema_AuthorizationData"></a>
<a id="tocSauthorizationdata"></a>
<a id="tocsauthorizationdata"></a>

```json
{
  "authorizationToken": {},
  "expiresAt": {},
  "proxyEndpoint": {}
}
```

An object representing authorization data for an Amazon ECR registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationToken|object|false|none|none|
|expiresAt|object|false|none|none|
|proxyEndpoint|object|false|none|none|

<h2 id="tocS_AuthorizationDataList">AuthorizationDataList</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationdatalist"></a>
<a id="schema_AuthorizationDataList"></a>
<a id="tocSauthorizationdatalist"></a>
<a id="tocsauthorizationdatalist"></a>

```json
[
  {
    "authorizationToken": {},
    "expiresAt": {},
    "proxyEndpoint": {}
  }
]
```

<h2 id="tocS_ImageDigest">ImageDigest</h2>
<!-- backwards compatibility -->
<a id="schemaimagedigest"></a>
<a id="schema_ImageDigest"></a>
<a id="tocSimagedigest"></a>
<a id="tocsimagedigest"></a>

```json
"string"
```

<h2 id="tocS_ImageTagsList">ImageTagsList</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagslist"></a>
<a id="schema_ImageTagsList"></a>
<a id="tocSimagetagslist"></a>
<a id="tocsimagetagslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"string"
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

<h2 id="tocS_RegistryId">RegistryId</h2>
<!-- backwards compatibility -->
<a id="schemaregistryid"></a>
<a id="schema_RegistryId"></a>
<a id="tocSregistryid"></a>
<a id="tocsregistryid"></a>

```json
"string"
```

<h2 id="tocS_RepositoryName">RepositoryName</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryname"></a>
<a id="schema_RepositoryName"></a>
<a id="tocSrepositoryname"></a>
<a id="tocsrepositoryname"></a>

```json
"string"
```

<h2 id="tocS_AwsEcrContainerImageDetails">AwsEcrContainerImageDetails</h2>
<!-- backwards compatibility -->
<a id="schemaawsecrcontainerimagedetails"></a>
<a id="schema_AwsEcrContainerImageDetails"></a>
<a id="tocSawsecrcontainerimagedetails"></a>
<a id="tocsawsecrcontainerimagedetails"></a>

```json
{
  "architecture": {},
  "author": {},
  "imageHash": {},
  "imageTags": {},
  "platform": {},
  "pushedAt": {},
  "registry": {},
  "repositoryName": {}
}
```

The image details of the Amazon ECR container image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|architecture|object|false|none|none|
|author|object|false|none|none|
|imageHash|object|false|none|none|
|imageTags|object|false|none|none|
|platform|object|false|none|none|
|pushedAt|object|false|none|none|
|registry|object|false|none|none|
|repositoryName|object|false|none|none|

<h2 id="tocS_BaseScore">BaseScore</h2>
<!-- backwards compatibility -->
<a id="schemabasescore"></a>
<a id="schema_BaseScore"></a>
<a id="tocSbasescore"></a>
<a id="tocsbasescore"></a>

```json
0
```

<h2 id="tocS_BatchedOperationLayerDigestList">BatchedOperationLayerDigestList</h2>
<!-- backwards compatibility -->
<a id="schemabatchedoperationlayerdigestlist"></a>
<a id="schema_BatchedOperationLayerDigestList"></a>
<a id="tocSbatchedoperationlayerdigestlist"></a>
<a id="tocsbatchedoperationlayerdigestlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LayerList">LayerList</h2>
<!-- backwards compatibility -->
<a id="schemalayerlist"></a>
<a id="schema_LayerList"></a>
<a id="tocSlayerlist"></a>
<a id="tocslayerlist"></a>

```json
[
  {
    "layerDigest": {},
    "layerAvailability": {},
    "layerSize": {},
    "mediaType": {}
  }
]
```

<h2 id="tocS_LayerFailureList">LayerFailureList</h2>
<!-- backwards compatibility -->
<a id="schemalayerfailurelist"></a>
<a id="schema_LayerFailureList"></a>
<a id="tocSlayerfailurelist"></a>
<a id="tocslayerfailurelist"></a>

```json
[
  {
    "layerDigest": {},
    "failureCode": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_ImageIdentifierList">ImageIdentifierList</h2>
<!-- backwards compatibility -->
<a id="schemaimageidentifierlist"></a>
<a id="schema_ImageIdentifierList"></a>
<a id="tocSimageidentifierlist"></a>
<a id="tocsimageidentifierlist"></a>

```json
[
  {
    "imageDigest": {},
    "imageTag": {}
  }
]
```

<h2 id="tocS_ImageFailureList">ImageFailureList</h2>
<!-- backwards compatibility -->
<a id="schemaimagefailurelist"></a>
<a id="schema_ImageFailureList"></a>
<a id="tocSimagefailurelist"></a>
<a id="tocsimagefailurelist"></a>

```json
[
  {
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "failureCode": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_MediaTypeList">MediaTypeList</h2>
<!-- backwards compatibility -->
<a id="schemamediatypelist"></a>
<a id="schema_MediaTypeList"></a>
<a id="tocSmediatypelist"></a>
<a id="tocsmediatypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImageList">ImageList</h2>
<!-- backwards compatibility -->
<a id="schemaimagelist"></a>
<a id="schema_ImageList"></a>
<a id="tocSimagelist"></a>
<a id="tocsimagelist"></a>

```json
[
  {
    "registryId": {},
    "repositoryName": {},
    "imageId": {
      "imageDigest": {},
      "imageTag": {}
    },
    "imageManifest": {},
    "imageManifestMediaType": {}
  }
]
```

<h2 id="tocS_ScanningConfigurationRepositoryNameList">ScanningConfigurationRepositoryNameList</h2>
<!-- backwards compatibility -->
<a id="schemascanningconfigurationrepositorynamelist"></a>
<a id="schema_ScanningConfigurationRepositoryNameList"></a>
<a id="tocSscanningconfigurationrepositorynamelist"></a>
<a id="tocsscanningconfigurationrepositorynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RepositoryScanningConfigurationList">RepositoryScanningConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryscanningconfigurationlist"></a>
<a id="schema_RepositoryScanningConfigurationList"></a>
<a id="tocSrepositoryscanningconfigurationlist"></a>
<a id="tocsrepositoryscanningconfigurationlist"></a>

```json
[
  {
    "repositoryArn": {},
    "repositoryName": {},
    "scanOnPush": {},
    "scanFrequency": {},
    "appliedScanFilters": {}
  }
]
```

<h2 id="tocS_RepositoryScanningConfigurationFailureList">RepositoryScanningConfigurationFailureList</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryscanningconfigurationfailurelist"></a>
<a id="schema_RepositoryScanningConfigurationFailureList"></a>
<a id="tocSrepositoryscanningconfigurationfailurelist"></a>
<a id="tocsrepositoryscanningconfigurationfailurelist"></a>

```json
[
  {
    "repositoryName": {},
    "failureCode": {},
    "failureReason": {}
  }
]
```

<h2 id="tocS_BatchedOperationLayerDigest">BatchedOperationLayerDigest</h2>
<!-- backwards compatibility -->
<a id="schemabatchedoperationlayerdigest"></a>
<a id="schema_BatchedOperationLayerDigest"></a>
<a id="tocSbatchedoperationlayerdigest"></a>
<a id="tocsbatchedoperationlayerdigest"></a>

```json
"string"
```

<h2 id="tocS_UploadId">UploadId</h2>
<!-- backwards compatibility -->
<a id="schemauploadid"></a>
<a id="schema_UploadId"></a>
<a id="tocSuploadid"></a>
<a id="tocsuploadid"></a>

```json
"string"
```

<h2 id="tocS_LayerDigestList">LayerDigestList</h2>
<!-- backwards compatibility -->
<a id="schemalayerdigestlist"></a>
<a id="schema_LayerDigestList"></a>
<a id="tocSlayerdigestlist"></a>
<a id="tocslayerdigestlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LayerDigest">LayerDigest</h2>
<!-- backwards compatibility -->
<a id="schemalayerdigest"></a>
<a id="schema_LayerDigest"></a>
<a id="tocSlayerdigest"></a>
<a id="tocslayerdigest"></a>

```json
"string"
```

<h2 id="tocS_PullThroughCacheRuleRepositoryPrefix">PullThroughCacheRuleRepositoryPrefix</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherulerepositoryprefix"></a>
<a id="schema_PullThroughCacheRuleRepositoryPrefix"></a>
<a id="tocSpullthroughcacherulerepositoryprefix"></a>
<a id="tocspullthroughcacherulerepositoryprefix"></a>

```json
"string"
```

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"string"
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

<h2 id="tocS_ImageTagMutability">ImageTagMutability</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagmutability"></a>
<a id="schema_ImageTagMutability"></a>
<a id="tocSimagetagmutability"></a>
<a id="tocsimagetagmutability"></a>

```json
"MUTABLE"
```

<h2 id="tocS_ImageScanningConfiguration">ImageScanningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanningconfiguration"></a>
<a id="schema_ImageScanningConfiguration"></a>
<a id="tocSimagescanningconfiguration"></a>
<a id="tocsimagescanningconfiguration"></a>

```json
{
  "scanOnPush": {}
}
```

The image scanning configuration for a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanOnPush|object|false|none|none|

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "encryptionType": {},
  "kmsKey": {}
}
```

<p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with Key Management Service key stored in Key Management Service (KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|object|true|none|none|
|kmsKey|object|false|none|none|

<h2 id="tocS_Repository">Repository</h2>
<!-- backwards compatibility -->
<a id="schemarepository"></a>
<a id="schema_Repository"></a>
<a id="tocSrepository"></a>
<a id="tocsrepository"></a>

```json
{
  "repositoryArn": {},
  "registryId": {},
  "repositoryName": {},
  "repositoryUri": {},
  "createdAt": {},
  "imageTagMutability": {},
  "imageScanningConfiguration": {
    "scanOnPush": {}
  },
  "encryptionConfiguration": {
    "encryptionType": {},
    "kmsKey": {}
  }
}
```

An object representing a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryArn|object|false|none|none|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|repositoryUri|object|false|none|none|
|createdAt|object|false|none|none|
|imageTagMutability|object|false|none|none|
|imageScanningConfiguration|[ImageScanningConfiguration](#schemaimagescanningconfiguration)|false|none|The image scanning configuration for a repository.|
|encryptionConfiguration|object|false|none|none|

<h2 id="tocS_ScoringVector">ScoringVector</h2>
<!-- backwards compatibility -->
<a id="schemascoringvector"></a>
<a id="schema_ScoringVector"></a>
<a id="tocSscoringvector"></a>
<a id="tocsscoringvector"></a>

```json
"string"
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
"string"
```

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"string"
```

<h2 id="tocS_CvssScore">CvssScore</h2>
<!-- backwards compatibility -->
<a id="schemacvssscore"></a>
<a id="schema_CvssScore"></a>
<a id="tocScvssscore"></a>
<a id="tocscvssscore"></a>

```json
{
  "baseScore": {},
  "scoringVector": {},
  "source": {},
  "version": {}
}
```

The CVSS score for a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseScore|object|false|none|none|
|scoringVector|object|false|none|none|
|source|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
"string"
```

<h2 id="tocS_Reason">Reason</h2>
<!-- backwards compatibility -->
<a id="schemareason"></a>
<a id="schema_Reason"></a>
<a id="tocSreason"></a>
<a id="tocsreason"></a>

```json
"string"
```

<h2 id="tocS_CvssScoreAdjustment">CvssScoreAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemacvssscoreadjustment"></a>
<a id="schema_CvssScoreAdjustment"></a>
<a id="tocScvssscoreadjustment"></a>
<a id="tocscvssscoreadjustment"></a>

```json
{
  "metric": {},
  "reason": {}
}
```

Details on adjustments Amazon Inspector made to the CVSS score for a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_CvssScoreAdjustmentList">CvssScoreAdjustmentList</h2>
<!-- backwards compatibility -->
<a id="schemacvssscoreadjustmentlist"></a>
<a id="schema_CvssScoreAdjustmentList"></a>
<a id="tocScvssscoreadjustmentlist"></a>
<a id="tocscvssscoreadjustmentlist"></a>

```json
[
  {
    "metric": {},
    "reason": {}
  }
]
```

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
0
```

<h2 id="tocS_CvssScoreDetails">CvssScoreDetails</h2>
<!-- backwards compatibility -->
<a id="schemacvssscoredetails"></a>
<a id="schema_CvssScoreDetails"></a>
<a id="tocScvssscoredetails"></a>
<a id="tocscvssscoredetails"></a>

```json
{
  "adjustments": {},
  "score": {},
  "scoreSource": {},
  "scoringVector": {},
  "version": {}
}
```

Information about the CVSS score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustments|object|false|none|none|
|score|object|false|none|none|
|scoreSource|object|false|none|none|
|scoringVector|object|false|none|none|
|version|object|false|none|none|

<h2 id="tocS_CvssScoreList">CvssScoreList</h2>
<!-- backwards compatibility -->
<a id="schemacvssscorelist"></a>
<a id="schema_CvssScoreList"></a>
<a id="tocScvssscorelist"></a>
<a id="tocscvssscorelist"></a>

```json
[
  {
    "baseScore": {},
    "scoringVector": {},
    "source": {},
    "version": {}
  }
]
```

<h2 id="tocS_LifecyclePolicyText">LifecyclePolicyText</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicytext"></a>
<a id="schema_LifecyclePolicyText"></a>
<a id="tocSlifecyclepolicytext"></a>
<a id="tocslifecyclepolicytext"></a>

```json
"stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstri"
```

<h2 id="tocS_EvaluationTimestamp">EvaluationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationtimestamp"></a>
<a id="schema_EvaluationTimestamp"></a>
<a id="tocSevaluationtimestamp"></a>
<a id="tocsevaluationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_RegistryPolicyText">RegistryPolicyText</h2>
<!-- backwards compatibility -->
<a id="schemaregistrypolicytext"></a>
<a id="schema_RegistryPolicyText"></a>
<a id="tocSregistrypolicytext"></a>
<a id="tocsregistrypolicytext"></a>

```json
"string"
```

<h2 id="tocS_RepositoryPolicyText">RepositoryPolicyText</h2>
<!-- backwards compatibility -->
<a id="schemarepositorypolicytext"></a>
<a id="schema_RepositoryPolicyText"></a>
<a id="tocSrepositorypolicytext"></a>
<a id="tocsrepositorypolicytext"></a>

```json
"string"
```

<h2 id="tocS_ForceFlag">ForceFlag</h2>
<!-- backwards compatibility -->
<a id="schemaforceflag"></a>
<a id="schema_ForceFlag"></a>
<a id="tocSforceflag"></a>
<a id="tocsforceflag"></a>

```json
true
```

<h2 id="tocS_ImageIdentifier">ImageIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaimageidentifier"></a>
<a id="schema_ImageIdentifier"></a>
<a id="tocSimageidentifier"></a>
<a id="tocsimageidentifier"></a>

```json
{
  "imageDigest": {},
  "imageTag": {}
}
```

An object with identifying information for an image in an Amazon ECR repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDigest|object|false|none|none|
|imageTag|object|false|none|none|

<h2 id="tocS_ImageReplicationStatusList">ImageReplicationStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaimagereplicationstatuslist"></a>
<a id="schema_ImageReplicationStatusList"></a>
<a id="tocSimagereplicationstatuslist"></a>
<a id="tocsimagereplicationstatuslist"></a>

```json
[
  {
    "region": {},
    "registryId": {},
    "status": {},
    "failureCode": {}
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

<h2 id="tocS_ImageScanStatus">ImageScanStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanstatus"></a>
<a id="schema_ImageScanStatus"></a>
<a id="tocSimagescanstatus"></a>
<a id="tocsimagescanstatus"></a>

```json
{
  "status": {},
  "description": {}
}
```

The current status of an image scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_ImageScanFindings">ImageScanFindings</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindings"></a>
<a id="schema_ImageScanFindings"></a>
<a id="tocSimagescanfindings"></a>
<a id="tocsimagescanfindings"></a>

```json
{
  "imageScanCompletedAt": {},
  "vulnerabilitySourceUpdatedAt": {},
  "findingSeverityCounts": {
    "property1": 0,
    "property2": 0
  },
  "findings": {},
  "enhancedFindings": {}
}
```

The details of an image scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageScanCompletedAt|object|false|none|none|
|vulnerabilitySourceUpdatedAt|object|false|none|none|
|findingSeverityCounts|object|false|none|none|
|findings|object|false|none|none|
|enhancedFindings|object|false|none|none|

<h2 id="tocS_TagStatus">TagStatus</h2>
<!-- backwards compatibility -->
<a id="schematagstatus"></a>
<a id="schema_TagStatus"></a>
<a id="tocStagstatus"></a>
<a id="tocstagstatus"></a>

```json
"TAGGED"
```

<h2 id="tocS_DescribeImagesFilter">DescribeImagesFilter</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagesfilter"></a>
<a id="schema_DescribeImagesFilter"></a>
<a id="tocSdescribeimagesfilter"></a>
<a id="tocsdescribeimagesfilter"></a>

```json
{
  "tagStatus": {}
}
```

An object representing a filter on a <a>DescribeImages</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagStatus|object|false|none|none|

<h2 id="tocS_ImageDetailList">ImageDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaimagedetaillist"></a>
<a id="schema_ImageDetailList"></a>
<a id="tocSimagedetaillist"></a>
<a id="tocsimagedetaillist"></a>

```json
[
  {
    "registryId": {},
    "repositoryName": {},
    "imageDigest": {},
    "imageTags": {},
    "imageSizeInBytes": {},
    "imagePushedAt": {},
    "imageScanStatus": {
      "status": {},
      "description": {}
    },
    "imageScanFindingsSummary": {
      "imageScanCompletedAt": {},
      "vulnerabilitySourceUpdatedAt": {},
      "findingSeverityCounts": {
        "property1": 0,
        "property2": 0
      }
    },
    "imageManifestMediaType": {},
    "artifactMediaType": {},
    "lastRecordedPullTime": {}
  }
]
```

<h2 id="tocS_PullThroughCacheRuleRepositoryPrefixList">PullThroughCacheRuleRepositoryPrefixList</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherulerepositoryprefixlist"></a>
<a id="schema_PullThroughCacheRuleRepositoryPrefixList"></a>
<a id="tocSpullthroughcacherulerepositoryprefixlist"></a>
<a id="tocspullthroughcacherulerepositoryprefixlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PullThroughCacheRuleList">PullThroughCacheRuleList</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherulelist"></a>
<a id="schema_PullThroughCacheRuleList"></a>
<a id="tocSpullthroughcacherulelist"></a>
<a id="tocspullthroughcacherulelist"></a>

```json
[
  {
    "ecrRepositoryPrefix": {},
    "upstreamRegistryUrl": {},
    "createdAt": {},
    "registryId": {}
  }
]
```

<h2 id="tocS_ReplicationConfiguration">ReplicationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareplicationconfiguration"></a>
<a id="schema_ReplicationConfiguration"></a>
<a id="tocSreplicationconfiguration"></a>
<a id="tocsreplicationconfiguration"></a>

```json
{
  "rules": {}
}
```

The replication configuration for a registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|object|true|none|none|

<h2 id="tocS_RepositoryNameList">RepositoryNameList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorynamelist"></a>
<a id="schema_RepositoryNameList"></a>
<a id="tocSrepositorynamelist"></a>
<a id="tocsrepositorynamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RepositoryList">RepositoryList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorylist"></a>
<a id="schema_RepositoryList"></a>
<a id="tocSrepositorylist"></a>
<a id="tocsrepositorylist"></a>

```json
[
  {
    "repositoryArn": {},
    "registryId": {},
    "repositoryName": {},
    "repositoryUri": {},
    "createdAt": {},
    "imageTagMutability": {},
    "imageScanningConfiguration": {
      "scanOnPush": {}
    },
    "encryptionConfiguration": {
      "encryptionType": {},
      "kmsKey": {}
    }
  }
]
```

<h2 id="tocS_EncryptionType">EncryptionType</h2>
<!-- backwards compatibility -->
<a id="schemaencryptiontype"></a>
<a id="schema_EncryptionType"></a>
<a id="tocSencryptiontype"></a>
<a id="tocsencryptiontype"></a>

```json
"AES256"
```

<h2 id="tocS_KmsKey">KmsKey</h2>
<!-- backwards compatibility -->
<a id="schemakmskey"></a>
<a id="schema_KmsKey"></a>
<a id="tocSkmskey"></a>
<a id="tocskmskey"></a>

```json
"string"
```

<h2 id="tocS_FindingDescription">FindingDescription</h2>
<!-- backwards compatibility -->
<a id="schemafindingdescription"></a>
<a id="schema_FindingDescription"></a>
<a id="tocSfindingdescription"></a>
<a id="tocsfindingdescription"></a>

```json
"string"
```

<h2 id="tocS_FindingArn">FindingArn</h2>
<!-- backwards compatibility -->
<a id="schemafindingarn"></a>
<a id="schema_FindingArn"></a>
<a id="tocSfindingarn"></a>
<a id="tocsfindingarn"></a>

```json
"string"
```

<h2 id="tocS_PackageVulnerabilityDetails">PackageVulnerabilityDetails</h2>
<!-- backwards compatibility -->
<a id="schemapackagevulnerabilitydetails"></a>
<a id="schema_PackageVulnerabilityDetails"></a>
<a id="tocSpackagevulnerabilitydetails"></a>
<a id="tocspackagevulnerabilitydetails"></a>

```json
{
  "cvss": {},
  "referenceUrls": {},
  "relatedVulnerabilities": {},
  "source": {},
  "sourceUrl": {},
  "vendorCreatedAt": {},
  "vendorSeverity": {},
  "vendorUpdatedAt": {},
  "vulnerabilityId": {},
  "vulnerablePackages": {}
}
```

Information about a package vulnerability finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvss|object|false|none|none|
|referenceUrls|object|false|none|none|
|relatedVulnerabilities|object|false|none|none|
|source|object|false|none|none|
|sourceUrl|object|false|none|none|
|vendorCreatedAt|object|false|none|none|
|vendorSeverity|object|false|none|none|
|vendorUpdatedAt|object|false|none|none|
|vulnerabilityId|object|false|none|none|
|vulnerablePackages|object|false|none|none|

<h2 id="tocS_Remediation">Remediation</h2>
<!-- backwards compatibility -->
<a id="schemaremediation"></a>
<a id="schema_Remediation"></a>
<a id="tocSremediation"></a>
<a id="tocsremediation"></a>

```json
{
  "recommendation": {
    "url": {},
    "text": {}
  }
}
```

Information on how to remediate a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendation|object|false|none|none|

<h2 id="tocS_ResourceList">ResourceList</h2>
<!-- backwards compatibility -->
<a id="schemaresourcelist"></a>
<a id="schema_ResourceList"></a>
<a id="tocSresourcelist"></a>
<a id="tocsresourcelist"></a>

```json
[
  {
    "details": {
      "awsEcrContainerImage": {
        "architecture": {},
        "author": {},
        "imageHash": {},
        "imageTags": {},
        "platform": {},
        "pushedAt": {},
        "registry": {},
        "repositoryName": {}
      }
    },
    "id": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "type": {}
  }
]
```

<h2 id="tocS_ScoreDetails">ScoreDetails</h2>
<!-- backwards compatibility -->
<a id="schemascoredetails"></a>
<a id="schema_ScoreDetails"></a>
<a id="tocSscoredetails"></a>
<a id="tocsscoredetails"></a>

```json
{
  "cvss": {
    "adjustments": {},
    "score": {},
    "scoreSource": {},
    "scoringVector": {},
    "version": {}
  }
}
```

Information about the Amazon Inspector score given to a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvss|object|false|none|none|

<h2 id="tocS_Severity">Severity</h2>
<!-- backwards compatibility -->
<a id="schemaseverity"></a>
<a id="schema_Severity"></a>
<a id="tocSseverity"></a>
<a id="tocsseverity"></a>

```json
"string"
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

<h2 id="tocS_Title">Title</h2>
<!-- backwards compatibility -->
<a id="schematitle"></a>
<a id="schema_Title"></a>
<a id="tocStitle"></a>
<a id="tocstitle"></a>

```json
"string"
```

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"string"
```

<h2 id="tocS_EnhancedImageScanFinding">EnhancedImageScanFinding</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedimagescanfinding"></a>
<a id="schema_EnhancedImageScanFinding"></a>
<a id="tocSenhancedimagescanfinding"></a>
<a id="tocsenhancedimagescanfinding"></a>

```json
{
  "awsAccountId": {},
  "description": {},
  "findingArn": {},
  "firstObservedAt": {},
  "lastObservedAt": {},
  "packageVulnerabilityDetails": {
    "cvss": {},
    "referenceUrls": {},
    "relatedVulnerabilities": {},
    "source": {},
    "sourceUrl": {},
    "vendorCreatedAt": {},
    "vendorSeverity": {},
    "vendorUpdatedAt": {},
    "vulnerabilityId": {},
    "vulnerablePackages": {}
  },
  "remediation": {
    "recommendation": {
      "url": {},
      "text": {}
    }
  },
  "resources": {},
  "score": {},
  "scoreDetails": {
    "cvss": {
      "adjustments": {},
      "score": {},
      "scoreSource": {},
      "scoringVector": {},
      "version": {}
    }
  },
  "severity": {},
  "status": {},
  "title": {},
  "type": {},
  "updatedAt": {}
}
```

The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountId|object|false|none|none|
|description|object|false|none|none|
|findingArn|object|false|none|none|
|firstObservedAt|object|false|none|none|
|lastObservedAt|object|false|none|none|
|packageVulnerabilityDetails|object|false|none|none|
|remediation|object|false|none|none|
|resources|object|false|none|none|
|score|object|false|none|none|
|scoreDetails|object|false|none|none|
|severity|object|false|none|none|
|status|object|false|none|none|
|title|object|false|none|none|
|type|object|false|none|none|
|updatedAt|object|false|none|none|

<h2 id="tocS_EnhancedImageScanFindingList">EnhancedImageScanFindingList</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedimagescanfindinglist"></a>
<a id="schema_EnhancedImageScanFindingList"></a>
<a id="tocSenhancedimagescanfindinglist"></a>
<a id="tocsenhancedimagescanfindinglist"></a>

```json
[
  {
    "awsAccountId": {},
    "description": {},
    "findingArn": {},
    "firstObservedAt": {},
    "lastObservedAt": {},
    "packageVulnerabilityDetails": {
      "cvss": {},
      "referenceUrls": {},
      "relatedVulnerabilities": {},
      "source": {},
      "sourceUrl": {},
      "vendorCreatedAt": {},
      "vendorSeverity": {},
      "vendorUpdatedAt": {},
      "vulnerabilityId": {},
      "vulnerablePackages": {}
    },
    "remediation": {
      "recommendation": {
        "url": {},
        "text": {}
      }
    },
    "resources": {},
    "score": {},
    "scoreDetails": {
      "cvss": {
        "adjustments": {},
        "score": {},
        "scoreSource": {},
        "scoringVector": {},
        "version": {}
      }
    },
    "severity": {},
    "status": {},
    "title": {},
    "type": {},
    "updatedAt": {}
  }
]
```

<h2 id="tocS_Epoch">Epoch</h2>
<!-- backwards compatibility -->
<a id="schemaepoch"></a>
<a id="schema_Epoch"></a>
<a id="tocSepoch"></a>
<a id="tocsepoch"></a>

```json
0
```

<h2 id="tocS_FilePath">FilePath</h2>
<!-- backwards compatibility -->
<a id="schemafilepath"></a>
<a id="schema_FilePath"></a>
<a id="tocSfilepath"></a>
<a id="tocsfilepath"></a>

```json
"string"
```

<h2 id="tocS_FindingName">FindingName</h2>
<!-- backwards compatibility -->
<a id="schemafindingname"></a>
<a id="schema_FindingName"></a>
<a id="tocSfindingname"></a>
<a id="tocsfindingname"></a>

```json
"string"
```

<h2 id="tocS_FindingSeverity">FindingSeverity</h2>
<!-- backwards compatibility -->
<a id="schemafindingseverity"></a>
<a id="schema_FindingSeverity"></a>
<a id="tocSfindingseverity"></a>
<a id="tocsfindingseverity"></a>

```json
"INFORMATIONAL"
```

<h2 id="tocS_SeverityCount">SeverityCount</h2>
<!-- backwards compatibility -->
<a id="schemaseveritycount"></a>
<a id="schema_SeverityCount"></a>
<a id="tocSseveritycount"></a>
<a id="tocsseveritycount"></a>

```json
0
```

<h2 id="tocS_FindingSeverityCounts">FindingSeverityCounts</h2>
<!-- backwards compatibility -->
<a id="schemafindingseveritycounts"></a>
<a id="schema_FindingSeverityCounts"></a>
<a id="tocSfindingseveritycounts"></a>
<a id="tocsfindingseveritycounts"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SeverityCount](#schemaseveritycount)|false|none|none|

<h2 id="tocS_GetAuthorizationTokenRegistryIdList">GetAuthorizationTokenRegistryIdList</h2>
<!-- backwards compatibility -->
<a id="schemagetauthorizationtokenregistryidlist"></a>
<a id="schema_GetAuthorizationTokenRegistryIdList"></a>
<a id="tocSgetauthorizationtokenregistryidlist"></a>
<a id="tocsgetauthorizationtokenregistryidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LifecyclePreviewMaxResults">LifecyclePreviewMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepreviewmaxresults"></a>
<a id="schema_LifecyclePreviewMaxResults"></a>
<a id="tocSlifecyclepreviewmaxresults"></a>
<a id="tocslifecyclepreviewmaxresults"></a>

```json
1
```

<h2 id="tocS_LifecyclePolicyPreviewFilter">LifecyclePolicyPreviewFilter</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewfilter"></a>
<a id="schema_LifecyclePolicyPreviewFilter"></a>
<a id="tocSlifecyclepolicypreviewfilter"></a>
<a id="tocslifecyclepolicypreviewfilter"></a>

```json
{
  "tagStatus": {}
}
```

The filter for the lifecycle policy preview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagStatus|object|false|none|none|

<h2 id="tocS_LifecyclePolicyPreviewStatus">LifecyclePolicyPreviewStatus</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewstatus"></a>
<a id="schema_LifecyclePolicyPreviewStatus"></a>
<a id="tocSlifecyclepolicypreviewstatus"></a>
<a id="tocslifecyclepolicypreviewstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_LifecyclePolicyPreviewResultList">LifecyclePolicyPreviewResultList</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewresultlist"></a>
<a id="schema_LifecyclePolicyPreviewResultList"></a>
<a id="tocSlifecyclepolicypreviewresultlist"></a>
<a id="tocslifecyclepolicypreviewresultlist"></a>

```json
[
  {
    "imageTags": {},
    "imageDigest": {},
    "imagePushedAt": {},
    "action": {
      "type": {}
    },
    "appliedRulePriority": {}
  }
]
```

<h2 id="tocS_LifecyclePolicyPreviewSummary">LifecyclePolicyPreviewSummary</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewsummary"></a>
<a id="schema_LifecyclePolicyPreviewSummary"></a>
<a id="tocSlifecyclepolicypreviewsummary"></a>
<a id="tocslifecyclepolicypreviewsummary"></a>

```json
{
  "expiringImageTotalCount": {}
}
```

The summary of the lifecycle policy preview request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiringImageTotalCount|object|false|none|none|

<h2 id="tocS_RegistryScanningConfiguration">RegistryScanningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaregistryscanningconfiguration"></a>
<a id="schema_RegistryScanningConfiguration"></a>
<a id="tocSregistryscanningconfiguration"></a>
<a id="tocsregistryscanningconfiguration"></a>

```json
{
  "scanType": {},
  "rules": {}
}
```

The scanning configuration for a private registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanType|object|false|none|none|
|rules|object|false|none|none|

<h2 id="tocS_ImageManifest">ImageManifest</h2>
<!-- backwards compatibility -->
<a id="schemaimagemanifest"></a>
<a id="schema_ImageManifest"></a>
<a id="tocSimagemanifest"></a>
<a id="tocsimagemanifest"></a>

```json
"string"
```

<h2 id="tocS_MediaType">MediaType</h2>
<!-- backwards compatibility -->
<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
"string"
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "imageManifest": {},
  "imageManifestMediaType": {}
}
```

An object representing an Amazon ECR image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageId|object|false|none|none|
|imageManifest|object|false|none|none|
|imageManifestMediaType|object|false|none|none|

<h2 id="tocS_ImageActionType">ImageActionType</h2>
<!-- backwards compatibility -->
<a id="schemaimageactiontype"></a>
<a id="schema_ImageActionType"></a>
<a id="tocSimageactiontype"></a>
<a id="tocsimageactiontype"></a>

```json
"EXPIRE"
```

<h2 id="tocS_ImageCount">ImageCount</h2>
<!-- backwards compatibility -->
<a id="schemaimagecount"></a>
<a id="schema_ImageCount"></a>
<a id="tocSimagecount"></a>
<a id="tocsimagecount"></a>

```json
0
```

<h2 id="tocS_ImageTagList">ImageTagList</h2>
<!-- backwards compatibility -->
<a id="schemaimagetaglist"></a>
<a id="schema_ImageTagList"></a>
<a id="tocSimagetaglist"></a>
<a id="tocsimagetaglist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImageSizeInBytes">ImageSizeInBytes</h2>
<!-- backwards compatibility -->
<a id="schemaimagesizeinbytes"></a>
<a id="schema_ImageSizeInBytes"></a>
<a id="tocSimagesizeinbytes"></a>
<a id="tocsimagesizeinbytes"></a>

```json
0
```

<h2 id="tocS_PushTimestamp">PushTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemapushtimestamp"></a>
<a id="schema_PushTimestamp"></a>
<a id="tocSpushtimestamp"></a>
<a id="tocspushtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ImageScanFindingsSummary">ImageScanFindingsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingssummary"></a>
<a id="schema_ImageScanFindingsSummary"></a>
<a id="tocSimagescanfindingssummary"></a>
<a id="tocsimagescanfindingssummary"></a>

```json
{
  "imageScanCompletedAt": {},
  "vulnerabilitySourceUpdatedAt": {},
  "findingSeverityCounts": {
    "property1": 0,
    "property2": 0
  }
}
```

A summary of the last completed image scan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageScanCompletedAt|object|false|none|none|
|vulnerabilitySourceUpdatedAt|object|false|none|none|
|findingSeverityCounts|object|false|none|none|

<h2 id="tocS_RecordedPullTimestamp">RecordedPullTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemarecordedpulltimestamp"></a>
<a id="schema_RecordedPullTimestamp"></a>
<a id="tocSrecordedpulltimestamp"></a>
<a id="tocsrecordedpulltimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ImageDetail">ImageDetail</h2>
<!-- backwards compatibility -->
<a id="schemaimagedetail"></a>
<a id="schema_ImageDetail"></a>
<a id="tocSimagedetail"></a>
<a id="tocsimagedetail"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageDigest": {},
  "imageTags": {},
  "imageSizeInBytes": {},
  "imagePushedAt": {},
  "imageScanStatus": {
    "status": {},
    "description": {}
  },
  "imageScanFindingsSummary": {
    "imageScanCompletedAt": {},
    "vulnerabilitySourceUpdatedAt": {},
    "findingSeverityCounts": {
      "property1": 0,
      "property2": 0
    }
  },
  "imageManifestMediaType": {},
  "artifactMediaType": {},
  "lastRecordedPullTime": {}
}
```

An object that describes an image returned by a <a>DescribeImages</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageDigest|object|false|none|none|
|imageTags|object|false|none|none|
|imageSizeInBytes|object|false|none|none|
|imagePushedAt|object|false|none|none|
|imageScanStatus|object|false|none|none|
|imageScanFindingsSummary|object|false|none|none|
|imageManifestMediaType|object|false|none|none|
|artifactMediaType|object|false|none|none|
|lastRecordedPullTime|object|false|none|none|

<h2 id="tocS_ImageFailureCode">ImageFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagefailurecode"></a>
<a id="schema_ImageFailureCode"></a>
<a id="tocSimagefailurecode"></a>
<a id="tocsimagefailurecode"></a>

```json
"InvalidImageDigest"
```

<h2 id="tocS_ImageFailureReason">ImageFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemaimagefailurereason"></a>
<a id="schema_ImageFailureReason"></a>
<a id="tocSimagefailurereason"></a>
<a id="tocsimagefailurereason"></a>

```json
"string"
```

<h2 id="tocS_ImageFailure">ImageFailure</h2>
<!-- backwards compatibility -->
<a id="schemaimagefailure"></a>
<a id="schema_ImageFailure"></a>
<a id="tocSimagefailure"></a>
<a id="tocsimagefailure"></a>

```json
{
  "imageId": {
    "imageDigest": {},
    "imageTag": {}
  },
  "failureCode": {},
  "failureReason": {}
}
```

An object representing an Amazon ECR image failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageId|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_ImageTag">ImageTag</h2>
<!-- backwards compatibility -->
<a id="schemaimagetag"></a>
<a id="schema_ImageTag"></a>
<a id="tocSimagetag"></a>
<a id="tocsimagetag"></a>

```json
"string"
```

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_ReplicationStatus">ReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemareplicationstatus"></a>
<a id="schema_ReplicationStatus"></a>
<a id="tocSreplicationstatus"></a>
<a id="tocsreplicationstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ReplicationError">ReplicationError</h2>
<!-- backwards compatibility -->
<a id="schemareplicationerror"></a>
<a id="schema_ReplicationError"></a>
<a id="tocSreplicationerror"></a>
<a id="tocsreplicationerror"></a>

```json
"string"
```

<h2 id="tocS_ImageReplicationStatus">ImageReplicationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagereplicationstatus"></a>
<a id="schema_ImageReplicationStatus"></a>
<a id="tocSimagereplicationstatus"></a>
<a id="tocsimagereplicationstatus"></a>

```json
{
  "region": {},
  "registryId": {},
  "status": {},
  "failureCode": {}
}
```

The status of the replication process for an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|object|false|none|none|
|registryId|object|false|none|none|
|status|object|false|none|none|
|failureCode|object|false|none|none|

<h2 id="tocS_ImageScanFinding">ImageScanFinding</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfinding"></a>
<a id="schema_ImageScanFinding"></a>
<a id="tocSimagescanfinding"></a>
<a id="tocsimagescanfinding"></a>

```json
{
  "name": {},
  "description": {},
  "uri": {},
  "severity": {},
  "attributes": {}
}
```

Contains information about an image scan finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|uri|object|false|none|none|
|severity|object|false|none|none|
|attributes|object|false|none|none|

<h2 id="tocS_ImageScanFindingList">ImageScanFindingList</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindinglist"></a>
<a id="schema_ImageScanFindingList"></a>
<a id="tocSimagescanfindinglist"></a>
<a id="tocsimagescanfindinglist"></a>

```json
[
  {
    "name": {},
    "description": {},
    "uri": {},
    "severity": {},
    "attributes": {}
  }
]
```

<h2 id="tocS_ScanTimestamp">ScanTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemascantimestamp"></a>
<a id="schema_ScanTimestamp"></a>
<a id="tocSscantimestamp"></a>
<a id="tocsscantimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_VulnerabilitySourceUpdateTimestamp">VulnerabilitySourceUpdateTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitysourceupdatetimestamp"></a>
<a id="schema_VulnerabilitySourceUpdateTimestamp"></a>
<a id="tocSvulnerabilitysourceupdatetimestamp"></a>
<a id="tocsvulnerabilitysourceupdatetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ScanStatus">ScanStatus</h2>
<!-- backwards compatibility -->
<a id="schemascanstatus"></a>
<a id="schema_ScanStatus"></a>
<a id="tocSscanstatus"></a>
<a id="tocsscanstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_ScanStatusDescription">ScanStatusDescription</h2>
<!-- backwards compatibility -->
<a id="schemascanstatusdescription"></a>
<a id="schema_ScanStatusDescription"></a>
<a id="tocSscanstatusdescription"></a>
<a id="tocsscanstatusdescription"></a>

```json
"string"
```

<h2 id="tocS_ScanOnPushFlag">ScanOnPushFlag</h2>
<!-- backwards compatibility -->
<a id="schemascanonpushflag"></a>
<a id="schema_ScanOnPushFlag"></a>
<a id="tocSscanonpushflag"></a>
<a id="tocsscanonpushflag"></a>

```json
true
```

<h2 id="tocS_PartSize">PartSize</h2>
<!-- backwards compatibility -->
<a id="schemapartsize"></a>
<a id="schema_PartSize"></a>
<a id="tocSpartsize"></a>
<a id="tocspartsize"></a>

```json
0
```

<h2 id="tocS_LayerAvailability">LayerAvailability</h2>
<!-- backwards compatibility -->
<a id="schemalayeravailability"></a>
<a id="schema_LayerAvailability"></a>
<a id="tocSlayeravailability"></a>
<a id="tocslayeravailability"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_LayerSizeInBytes">LayerSizeInBytes</h2>
<!-- backwards compatibility -->
<a id="schemalayersizeinbytes"></a>
<a id="schema_LayerSizeInBytes"></a>
<a id="tocSlayersizeinbytes"></a>
<a id="tocslayersizeinbytes"></a>

```json
0
```

<h2 id="tocS_Layer">Layer</h2>
<!-- backwards compatibility -->
<a id="schemalayer"></a>
<a id="schema_Layer"></a>
<a id="tocSlayer"></a>
<a id="tocslayer"></a>

```json
{
  "layerDigest": {},
  "layerAvailability": {},
  "layerSize": {},
  "mediaType": {}
}
```

An object representing an Amazon ECR image layer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layerDigest|object|false|none|none|
|layerAvailability|object|false|none|none|
|layerSize|object|false|none|none|
|mediaType|object|false|none|none|

<h2 id="tocS_LayerFailureCode">LayerFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemalayerfailurecode"></a>
<a id="schema_LayerFailureCode"></a>
<a id="tocSlayerfailurecode"></a>
<a id="tocslayerfailurecode"></a>

```json
"InvalidLayerDigest"
```

<h2 id="tocS_LayerFailureReason">LayerFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemalayerfailurereason"></a>
<a id="schema_LayerFailureReason"></a>
<a id="tocSlayerfailurereason"></a>
<a id="tocslayerfailurereason"></a>

```json
"string"
```

<h2 id="tocS_LayerFailure">LayerFailure</h2>
<!-- backwards compatibility -->
<a id="schemalayerfailure"></a>
<a id="schema_LayerFailure"></a>
<a id="tocSlayerfailure"></a>
<a id="tocslayerfailure"></a>

```json
{
  "layerDigest": {},
  "failureCode": {},
  "failureReason": {}
}
```

An object representing an Amazon ECR image layer failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layerDigest|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_LayerPartBlob">LayerPartBlob</h2>
<!-- backwards compatibility -->
<a id="schemalayerpartblob"></a>
<a id="schema_LayerPartBlob"></a>
<a id="tocSlayerpartblob"></a>
<a id="tocslayerpartblob"></a>

```json
"string"
```

<h2 id="tocS_LifecyclePolicyRuleAction">LifecyclePolicyRuleAction</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicyruleaction"></a>
<a id="schema_LifecyclePolicyRuleAction"></a>
<a id="tocSlifecyclepolicyruleaction"></a>
<a id="tocslifecyclepolicyruleaction"></a>

```json
{
  "type": {}
}
```

The type of action to be taken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|object|false|none|none|

<h2 id="tocS_LifecyclePolicyRulePriority">LifecyclePolicyRulePriority</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicyrulepriority"></a>
<a id="schema_LifecyclePolicyRulePriority"></a>
<a id="tocSlifecyclepolicyrulepriority"></a>
<a id="tocslifecyclepolicyrulepriority"></a>

```json
1
```

<h2 id="tocS_LifecyclePolicyPreviewResult">LifecyclePolicyPreviewResult</h2>
<!-- backwards compatibility -->
<a id="schemalifecyclepolicypreviewresult"></a>
<a id="schema_LifecyclePolicyPreviewResult"></a>
<a id="tocSlifecyclepolicypreviewresult"></a>
<a id="tocslifecyclepolicypreviewresult"></a>

```json
{
  "imageTags": {},
  "imageDigest": {},
  "imagePushedAt": {},
  "action": {
    "type": {}
  },
  "appliedRulePriority": {}
}
```

The result of the lifecycle policy preview.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageTags|object|false|none|none|
|imageDigest|object|false|none|none|
|imagePushedAt|object|false|none|none|
|action|object|false|none|none|
|appliedRulePriority|object|false|none|none|

<h2 id="tocS_ListImagesFilter">ListImagesFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistimagesfilter"></a>
<a id="schema_ListImagesFilter"></a>
<a id="tocSlistimagesfilter"></a>
<a id="tocslistimagesfilter"></a>

```json
{
  "tagStatus": {}
}
```

An object representing a filter on a <a>ListImages</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagStatus|object|false|none|none|

<h2 id="tocS_PackageManager">PackageManager</h2>
<!-- backwards compatibility -->
<a id="schemapackagemanager"></a>
<a id="schema_PackageManager"></a>
<a id="tocSpackagemanager"></a>
<a id="tocspackagemanager"></a>

```json
"string"
```

<h2 id="tocS_ReferenceUrlsList">ReferenceUrlsList</h2>
<!-- backwards compatibility -->
<a id="schemareferenceurlslist"></a>
<a id="schema_ReferenceUrlsList"></a>
<a id="tocSreferenceurlslist"></a>
<a id="tocsreferenceurlslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_RelatedVulnerabilitiesList">RelatedVulnerabilitiesList</h2>
<!-- backwards compatibility -->
<a id="schemarelatedvulnerabilitieslist"></a>
<a id="schema_RelatedVulnerabilitiesList"></a>
<a id="tocSrelatedvulnerabilitieslist"></a>
<a id="tocsrelatedvulnerabilitieslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_VulnerabilityId">VulnerabilityId</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityid"></a>
<a id="schema_VulnerabilityId"></a>
<a id="tocSvulnerabilityid"></a>
<a id="tocsvulnerabilityid"></a>

```json
"string"
```

<h2 id="tocS_VulnerablePackagesList">VulnerablePackagesList</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackageslist"></a>
<a id="schema_VulnerablePackagesList"></a>
<a id="tocSvulnerablepackageslist"></a>
<a id="tocsvulnerablepackageslist"></a>

```json
[
  {
    "arch": {},
    "epoch": {},
    "filePath": {},
    "name": {},
    "packageManager": {},
    "release": {},
    "sourceLayerHash": {},
    "version": {}
  }
]
```

<h2 id="tocS_PullThroughCacheRule">PullThroughCacheRule</h2>
<!-- backwards compatibility -->
<a id="schemapullthroughcacherule"></a>
<a id="schema_PullThroughCacheRule"></a>
<a id="tocSpullthroughcacherule"></a>
<a id="tocspullthroughcacherule"></a>

```json
{
  "ecrRepositoryPrefix": {},
  "upstreamRegistryUrl": {},
  "createdAt": {},
  "registryId": {}
}
```

The details of a pull through cache rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ecrRepositoryPrefix|object|false|none|none|
|upstreamRegistryUrl|object|false|none|none|
|createdAt|object|false|none|none|
|registryId|object|false|none|none|

<h2 id="tocS_ScanType">ScanType</h2>
<!-- backwards compatibility -->
<a id="schemascantype"></a>
<a id="schema_ScanType"></a>
<a id="tocSscantype"></a>
<a id="tocsscantype"></a>

```json
"BASIC"
```

<h2 id="tocS_RegistryScanningRuleList">RegistryScanningRuleList</h2>
<!-- backwards compatibility -->
<a id="schemaregistryscanningrulelist"></a>
<a id="schema_RegistryScanningRuleList"></a>
<a id="tocSregistryscanningrulelist"></a>
<a id="tocsregistryscanningrulelist"></a>

```json
[
  {
    "scanFrequency": {},
    "repositoryFilters": {}
  }
]
```

<h2 id="tocS_RecommendationText">RecommendationText</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationtext"></a>
<a id="schema_RecommendationText"></a>
<a id="tocSrecommendationtext"></a>
<a id="tocsrecommendationtext"></a>

```json
"string"
```

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "url": {},
  "text": {}
}
```

Details about the recommended course of action to remediate the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|object|false|none|none|
|text|object|false|none|none|

<h2 id="tocS_ScanFrequency">ScanFrequency</h2>
<!-- backwards compatibility -->
<a id="schemascanfrequency"></a>
<a id="schema_ScanFrequency"></a>
<a id="tocSscanfrequency"></a>
<a id="tocsscanfrequency"></a>

```json
"SCAN_ON_PUSH"
```

<h2 id="tocS_ScanningRepositoryFilterList">ScanningRepositoryFilterList</h2>
<!-- backwards compatibility -->
<a id="schemascanningrepositoryfilterlist"></a>
<a id="schema_ScanningRepositoryFilterList"></a>
<a id="tocSscanningrepositoryfilterlist"></a>
<a id="tocsscanningrepositoryfilterlist"></a>

```json
[
  {
    "filter": {},
    "filterType": {}
  }
]
```

<h2 id="tocS_RegistryScanningRule">RegistryScanningRule</h2>
<!-- backwards compatibility -->
<a id="schemaregistryscanningrule"></a>
<a id="schema_RegistryScanningRule"></a>
<a id="tocSregistryscanningrule"></a>
<a id="tocsregistryscanningrule"></a>

```json
{
  "scanFrequency": {},
  "repositoryFilters": {}
}
```

The details of a scanning rule for a private registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanFrequency|object|true|none|none|
|repositoryFilters|object|true|none|none|

<h2 id="tocS_RelatedVulnerability">RelatedVulnerability</h2>
<!-- backwards compatibility -->
<a id="schemarelatedvulnerability"></a>
<a id="schema_RelatedVulnerability"></a>
<a id="tocSrelatedvulnerability"></a>
<a id="tocsrelatedvulnerability"></a>

```json
"string"
```

<h2 id="tocS_Release">Release</h2>
<!-- backwards compatibility -->
<a id="schemarelease"></a>
<a id="schema_Release"></a>
<a id="tocSrelease"></a>
<a id="tocsrelease"></a>

```json
"string"
```

<h2 id="tocS_ReplicationRuleList">ReplicationRuleList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrulelist"></a>
<a id="schema_ReplicationRuleList"></a>
<a id="tocSreplicationrulelist"></a>
<a id="tocsreplicationrulelist"></a>

```json
[
  {
    "destinations": {},
    "repositoryFilters": {}
  }
]
```

<h2 id="tocS_ReplicationDestination">ReplicationDestination</h2>
<!-- backwards compatibility -->
<a id="schemareplicationdestination"></a>
<a id="schema_ReplicationDestination"></a>
<a id="tocSreplicationdestination"></a>
<a id="tocsreplicationdestination"></a>

```json
{
  "region": {},
  "registryId": {}
}
```

An array of objects representing the destination for a replication rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|object|true|none|none|
|registryId|object|true|none|none|

<h2 id="tocS_ReplicationDestinationList">ReplicationDestinationList</h2>
<!-- backwards compatibility -->
<a id="schemareplicationdestinationlist"></a>
<a id="schema_ReplicationDestinationList"></a>
<a id="tocSreplicationdestinationlist"></a>
<a id="tocsreplicationdestinationlist"></a>

```json
[
  {
    "region": {},
    "registryId": {}
  }
]
```

<h2 id="tocS_RepositoryFilterList">RepositoryFilterList</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryfilterlist"></a>
<a id="schema_RepositoryFilterList"></a>
<a id="tocSrepositoryfilterlist"></a>
<a id="tocsrepositoryfilterlist"></a>

```json
[
  {
    "filter": {},
    "filterType": {}
  }
]
```

<h2 id="tocS_ReplicationRule">ReplicationRule</h2>
<!-- backwards compatibility -->
<a id="schemareplicationrule"></a>
<a id="schema_ReplicationRule"></a>
<a id="tocSreplicationrule"></a>
<a id="tocsreplicationrule"></a>

```json
{
  "destinations": {},
  "repositoryFilters": {}
}
```

An array of objects representing the replication destinations and repository filters for a replication configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinations|object|true|none|none|
|repositoryFilters|object|false|none|none|

<h2 id="tocS_RepositoryFilterValue">RepositoryFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryfiltervalue"></a>
<a id="schema_RepositoryFilterValue"></a>
<a id="tocSrepositoryfiltervalue"></a>
<a id="tocsrepositoryfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_RepositoryFilterType">RepositoryFilterType</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryfiltertype"></a>
<a id="schema_RepositoryFilterType"></a>
<a id="tocSrepositoryfiltertype"></a>
<a id="tocsrepositoryfiltertype"></a>

```json
"PREFIX_MATCH"
```

<h2 id="tocS_RepositoryFilter">RepositoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryfilter"></a>
<a id="schema_RepositoryFilter"></a>
<a id="tocSrepositoryfilter"></a>
<a id="tocsrepositoryfilter"></a>

```json
{
  "filter": {},
  "filterType": {}
}
```

The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no repository filter is specified, all images in the repository are replicated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|true|none|none|
|filterType|object|true|none|none|

<h2 id="tocS_RepositoryScanningConfiguration">RepositoryScanningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryscanningconfiguration"></a>
<a id="schema_RepositoryScanningConfiguration"></a>
<a id="tocSrepositoryscanningconfiguration"></a>
<a id="tocsrepositoryscanningconfiguration"></a>

```json
{
  "repositoryArn": {},
  "repositoryName": {},
  "scanOnPush": {},
  "scanFrequency": {},
  "appliedScanFilters": {}
}
```

The details of the scanning configuration for a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryArn|object|false|none|none|
|repositoryName|object|false|none|none|
|scanOnPush|object|false|none|none|
|scanFrequency|object|false|none|none|
|appliedScanFilters|object|false|none|none|

<h2 id="tocS_ScanningConfigurationFailureCode">ScanningConfigurationFailureCode</h2>
<!-- backwards compatibility -->
<a id="schemascanningconfigurationfailurecode"></a>
<a id="schema_ScanningConfigurationFailureCode"></a>
<a id="tocSscanningconfigurationfailurecode"></a>
<a id="tocsscanningconfigurationfailurecode"></a>

```json
"REPOSITORY_NOT_FOUND"
```

<h2 id="tocS_ScanningConfigurationFailureReason">ScanningConfigurationFailureReason</h2>
<!-- backwards compatibility -->
<a id="schemascanningconfigurationfailurereason"></a>
<a id="schema_ScanningConfigurationFailureReason"></a>
<a id="tocSscanningconfigurationfailurereason"></a>
<a id="tocsscanningconfigurationfailurereason"></a>

```json
"string"
```

<h2 id="tocS_RepositoryScanningConfigurationFailure">RepositoryScanningConfigurationFailure</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryscanningconfigurationfailure"></a>
<a id="schema_RepositoryScanningConfigurationFailure"></a>
<a id="tocSrepositoryscanningconfigurationfailure"></a>
<a id="tocsrepositoryscanningconfigurationfailure"></a>

```json
{
  "repositoryName": {},
  "failureCode": {},
  "failureReason": {}
}
```

The details about any failures associated with the scanning configuration of a repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|failureCode|object|false|none|none|
|failureReason|object|false|none|none|

<h2 id="tocS_ResourceDetails">ResourceDetails</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedetails"></a>
<a id="schema_ResourceDetails"></a>
<a id="tocSresourcedetails"></a>
<a id="tocsresourcedetails"></a>

```json
{
  "awsEcrContainerImage": {
    "architecture": {},
    "author": {},
    "imageHash": {},
    "imageTags": {},
    "platform": {},
    "pushedAt": {},
    "registry": {},
    "repositoryName": {}
  }
}
```

Contains details about the resource involved in the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsEcrContainerImage|object|false|none|none|

<h2 id="tocS_ResourceId">ResourceId</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceId"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"string"
```

<h2 id="tocS_Tags">Tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

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

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "details": {
    "awsEcrContainerImage": {
      "architecture": {},
      "author": {},
      "imageHash": {},
      "imageTags": {},
      "platform": {},
      "pushedAt": {},
      "registry": {},
      "repositoryName": {}
    }
  },
  "id": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "type": {}
}
```

Details about the resource involved in a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|id|object|false|none|none|
|tags|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_ScanningRepositoryFilterValue">ScanningRepositoryFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemascanningrepositoryfiltervalue"></a>
<a id="schema_ScanningRepositoryFilterValue"></a>
<a id="tocSscanningrepositoryfiltervalue"></a>
<a id="tocsscanningrepositoryfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_ScanningRepositoryFilterType">ScanningRepositoryFilterType</h2>
<!-- backwards compatibility -->
<a id="schemascanningrepositoryfiltertype"></a>
<a id="schema_ScanningRepositoryFilterType"></a>
<a id="tocSscanningrepositoryfiltertype"></a>
<a id="tocsscanningrepositoryfiltertype"></a>

```json
"WILDCARD"
```

<h2 id="tocS_ScanningRepositoryFilter">ScanningRepositoryFilter</h2>
<!-- backwards compatibility -->
<a id="schemascanningrepositoryfilter"></a>
<a id="schema_ScanningRepositoryFilter"></a>
<a id="tocSscanningrepositoryfilter"></a>
<a id="tocsscanningrepositoryfilter"></a>

```json
{
  "filter": {},
  "filterType": {}
}
```

The details of a scanning repository filter. For more information on how to use filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|true|none|none|
|filterType|object|true|none|none|

<h2 id="tocS_SourceLayerHash">SourceLayerHash</h2>
<!-- backwards compatibility -->
<a id="schemasourcelayerhash"></a>
<a id="schema_SourceLayerHash"></a>
<a id="tocSsourcelayerhash"></a>
<a id="tocssourcelayerhash"></a>

```json
"string"
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

The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

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

<h2 id="tocS_VulnerablePackageName">VulnerablePackageName</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackagename"></a>
<a id="schema_VulnerablePackageName"></a>
<a id="tocSvulnerablepackagename"></a>
<a id="tocsvulnerablepackagename"></a>

```json
"string"
```

<h2 id="tocS_VulnerablePackage">VulnerablePackage</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackage"></a>
<a id="schema_VulnerablePackage"></a>
<a id="tocSvulnerablepackage"></a>
<a id="tocsvulnerablepackage"></a>

```json
{
  "arch": {},
  "epoch": {},
  "filePath": {},
  "name": {},
  "packageManager": {},
  "release": {},
  "sourceLayerHash": {},
  "version": {}
}
```

Information on the vulnerable package identified by a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arch|object|false|none|none|
|epoch|object|false|none|none|
|filePath|object|false|none|none|
|name|object|false|none|none|
|packageManager|object|false|none|none|
|release|object|false|none|none|
|sourceLayerHash|object|false|none|none|
|version|object|false|none|none|
