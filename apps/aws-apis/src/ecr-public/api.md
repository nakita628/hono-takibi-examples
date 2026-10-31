<h1 id="amazon-elastic-container-registry-public">Amazon Elastic Container Registry Public v2020-10-30</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Elastic Container Registry Public</fullname> <p>Amazon Elastic Container Registry Public (Amazon ECR Public) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the Docker CLI or your preferred client to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>

Base URLs:

* <a href="http://api.ecr-public.us-east-1.amazonaws.com">http://api.ecr-public.us-east-1.amazonaws.com</a> - The Amazon ECR Public multi-region endpoint

* <a href="https://api.ecr-public.us-east-1.amazonaws.com">https://api.ecr-public.us-east-1.amazonaws.com</a> - The Amazon ECR Public multi-region endpoint

* <a href="http://api.ecr-public.cn-north-1.amazonaws.com.cn">http://api.ecr-public.cn-north-1.amazonaws.com.cn</a> - The Amazon ECR Public endpoint for China (Beijing) and China (Ningxia)

* <a href="https://api.ecr-public.cn-north-1.amazonaws.com.cn">https://api.ecr-public.cn-north-1.amazonaws.com.cn</a> - The Amazon ECR Public endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/ecr-public/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-container-registry-public-default">Default</h1>

## BatchCheckLayerAvailability

<a id="opIdBatchCheckLayerAvailability"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.BatchCheckLayerAvailability' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "layerDigests": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability`

<p>Checks the availability of one or more image layers that are within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
|X-Amz-Target|SpencerFrontendService.BatchCheckLayerAvailability|

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

> 483 Response

```json
null
```

> 484 Response

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
|483|483|RegistryNotFoundException|[RegistryNotFoundException](#schemaregistrynotfoundexception)|
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteImage

<a id="opIdBatchDeleteImage"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.BatchDeleteImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.BatchDeleteImage' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.BatchDeleteImage`

<p>Deletes a list of specified images that are within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the digest of the image in your request.</p>

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
|X-Amz-Target|SpencerFrontendService.BatchDeleteImage|

> Example responses

> 200 Response

```json
{
  "imageIds": {},
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

<h3 id="batchdeleteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteImageResponse](#schemabatchdeleteimageresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CompleteLayerUpload

<a id="opIdCompleteLayerUpload"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.CompleteLayerUpload' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "uploadId": {},
    "layerDigests": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload`

<p>Informs Amazon ECR that the image layer upload is complete for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once for each new image layer to verify that the upload is complete.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
|X-Amz-Target|SpencerFrontendService.CompleteLayerUpload|

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

> 489 Response

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
|488|488|RegistryNotFoundException|[RegistryNotFoundException](#schemaregistrynotfoundexception)|
|489|489|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRepository

<a id="opIdCreateRepository"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.CreateRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.CreateRepository' \
  -d '{
    "repositoryName": {},
    "catalogData": {
      "description": {},
      "architectures": {},
      "operatingSystems": {},
      "logoImageBlob": {},
      "aboutText": {},
      "usageText": {}
    },
    "tags": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.CreateRepository`

Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

> Body parameter

```json
{
  "repositoryName": {},
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoImageBlob": {},
    "aboutText": {},
    "usageText": {}
  },
  "tags": {}
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
|» repositoryName|body|object|true|none|
|» catalogData|body|object|false|none|
|» » description|body|object|false|none|
|» » architectures|body|object|false|none|
|» » operatingSystems|body|object|false|none|
|» » logoImageBlob|body|object|false|none|
|» » aboutText|body|object|false|none|
|» » usageText|body|object|false|none|
|» tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.CreateRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "repositoryArn": {},
    "registryId": {},
    "repositoryName": {},
    "repositoryUri": {},
    "createdAt": {}
  },
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
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
|486|486|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepository

<a id="opIdDeleteRepository"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DeleteRepository' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DeleteRepository' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DeleteRepository`

Deletes a repository in a public registry. If the repository contains images, you must either manually delete all images in the repository or use the <code>force</code> option. This option deletes all images on your behalf before deleting the repository.

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
|X-Amz-Target|SpencerFrontendService.DeleteRepository|

> Example responses

> 200 Response

```json
{
  "repository": {
    "repositoryArn": {},
    "registryId": {},
    "repositoryName": {},
    "repositoryUri": {},
    "createdAt": {}
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
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRepositoryPolicy

<a id="opIdDeleteRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DeleteRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy`

Deletes the repository policy that's associated with the specified repository.

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
|X-Amz-Target|SpencerFrontendService.DeleteRepositoryPolicy|

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

> 483 Response

```json
null
```

> 484 Response

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
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImageTags

<a id="opIdDescribeImageTags"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DescribeImageTags' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DescribeImageTags' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DescribeImageTags`

Returns the image tag details for a repository in a public registry.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeimagetags-parameters">Parameters</h3>

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
|body|body|[DescribeImageTagsRequest](#schemadescribeimagetagsrequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.DescribeImageTags|

> Example responses

> 200 Response

```json
{
  "imageTagDetails": {},
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

<h3 id="describeimagetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeImageTagsResponse](#schemadescribeimagetagsresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeImages

<a id="opIdDescribeImages"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DescribeImages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DescribeImages' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageIds": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DescribeImages`

<p>Returns metadata that's related to the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by <a>DescribeImages</a>.</p> </note>

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "imageIds": {},
  "nextToken": {},
  "maxResults": {}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.DescribeImages|

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

> 484 Response

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
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRegistries

<a id="opIdDescribeRegistries"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DescribeRegistries' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DescribeRegistries' \
  -d '{
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DescribeRegistries`

Returns details for a public registry.

> Body parameter

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

<h3 id="describeregistries-parameters">Parameters</h3>

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
|body|body|[DescribeRegistriesRequest](#schemadescriberegistriesrequest)|true|none|
|» nextToken|body|object|false|none|
|» maxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.DescribeRegistries|

> Example responses

> 200 Response

```json
{
  "registries": {},
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

<h3 id="describeregistries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRegistriesResponse](#schemadescriberegistriesresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|
|482|482|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRepositories

<a id="opIdDescribeRepositories"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.DescribeRepositories' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.DescribeRepositories' \
  -d '{
    "registryId": {},
    "repositoryNames": {},
    "nextToken": {},
    "maxResults": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.DescribeRepositories`

Describes repositories that are in a public registry.

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
|X-Amz-Target|SpencerFrontendService.DescribeRepositories|

> Example responses

> 200 Response

```json
{
  "repositories": {},
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

<h3 id="describerepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRepositoriesResponse](#schemadescriberepositoriesresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetAuthorizationToken

<a id="opIdGetAuthorizationToken"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.GetAuthorizationToken' \
  -d '{}'
```

`POST /#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken`

Retrieves an authorization token. An authorization token represents your IAM authentication credentials. You can use it to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.

> Body parameter

```json
{}
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

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.GetAuthorizationToken|

> Example responses

> 200 Response

```json
{
  "authorizationData": {
    "authorizationToken": {},
    "expiresAt": {}
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

<h3 id="getauthorizationtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetAuthorizationTokenResponse](#schemagetauthorizationtokenresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRegistryCatalogData

<a id="opIdGetRegistryCatalogData"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.GetRegistryCatalogData' \
  -d '{}'
```

`POST /#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData`

Retrieves catalog metadata for a public registry.

> Body parameter

```json
{}
```

<h3 id="getregistrycatalogdata-parameters">Parameters</h3>

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
|body|body|[GetRegistryCatalogDataRequest](#schemagetregistrycatalogdatarequest)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.GetRegistryCatalogData|

> Example responses

> 200 Response

```json
{
  "registryCatalogData": {
    "displayName": {}
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

<h3 id="getregistrycatalogdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRegistryCatalogDataResponse](#schemagetregistrycatalogdataresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryCatalogData

<a id="opIdGetRepositoryCatalogData"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.GetRepositoryCatalogData' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData`

Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {}
}
```

<h3 id="getrepositorycatalogdata-parameters">Parameters</h3>

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
|body|body|[GetRepositoryCatalogDataRequest](#schemagetrepositorycatalogdatarequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.GetRepositoryCatalogData|

> Example responses

> 200 Response

```json
{
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
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

<h3 id="getrepositorycatalogdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetRepositoryCatalogDataResponse](#schemagetrepositorycatalogdataresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryCatalogDataNotFoundException|[RepositoryCatalogDataNotFoundException](#schemarepositorycatalogdatanotfoundexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetRepositoryPolicy

<a id="opIdGetRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.GetRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy`

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
|X-Amz-Target|SpencerFrontendService.GetRepositoryPolicy|

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

> 483 Response

```json
null
```

> 484 Response

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
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## InitiateLayerUpload

<a id="opIdInitiateLayerUpload"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.InitiateLayerUpload' \
  -d '{
    "registryId": {},
    "repositoryName": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload`

<p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once for each image layer that hasn't already been uploaded. Whether an image layer uploads is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
|X-Amz-Target|SpencerFrontendService.InitiateLayerUpload|

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

> 484 Response

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
|483|483|RegistryNotFoundException|[RegistryNotFoundException](#schemaregistrynotfoundexception)|
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.ListTagsForResource' \
  -d '{
    "resourceArn": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.ListTagsForResource`

List the tags for an Amazon ECR Public resource.

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
|X-Amz-Target|SpencerFrontendService.ListTagsForResource|

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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|482|482|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|
|483|483|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImage

<a id="opIdPutImage"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.PutImage' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.PutImage' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "imageManifest": {},
    "imageManifestMediaType": {},
    "imageTag": {},
    "imageDigest": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.PutImage`

<p>Creates or updates the image manifest and tags that are associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
|X-Amz-Target|SpencerFrontendService.PutImage|

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

> 490 Response

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
|489|489|RegistryNotFoundException|[RegistryNotFoundException](#schemaregistrynotfoundexception)|
|490|490|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRegistryCatalogData

<a id="opIdPutRegistryCatalogData"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.PutRegistryCatalogData' \
  -d '{
    "displayName": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData`

Create or update the catalog data for a public registry.

> Body parameter

```json
{
  "displayName": {}
}
```

<h3 id="putregistrycatalogdata-parameters">Parameters</h3>

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
|body|body|[PutRegistryCatalogDataRequest](#schemaputregistrycatalogdatarequest)|true|none|
|» displayName|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.PutRegistryCatalogData|

> Example responses

> 200 Response

```json
{
  "registryCatalogData": {
    "displayName": {}
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

<h3 id="putregistrycatalogdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRegistryCatalogDataResponse](#schemaputregistrycatalogdataresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutRepositoryCatalogData

<a id="opIdPutRepositoryCatalogData"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.PutRepositoryCatalogData' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "catalogData": {
      "description": {},
      "architectures": {},
      "operatingSystems": {},
      "logoImageBlob": {},
      "aboutText": {},
      "usageText": {}
    }
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData`

Creates or updates the catalog data for a repository in a public registry.

> Body parameter

```json
{
  "registryId": {},
  "repositoryName": {},
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoImageBlob": {},
    "aboutText": {},
    "usageText": {}
  }
}
```

<h3 id="putrepositorycatalogdata-parameters">Parameters</h3>

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
|body|body|[PutRepositoryCatalogDataRequest](#schemaputrepositorycatalogdatarequest)|true|none|
|» registryId|body|object|false|none|
|» repositoryName|body|object|true|none|
|» catalogData|body|object|true|none|
|» » description|body|object|false|none|
|» » architectures|body|object|false|none|
|» » operatingSystems|body|object|false|none|
|» » logoImageBlob|body|object|false|none|
|» » aboutText|body|object|false|none|
|» » usageText|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|SpencerFrontendService.PutRepositoryCatalogData|

> Example responses

> 200 Response

```json
{
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
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

<h3 id="putrepositorycatalogdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutRepositoryCatalogDataResponse](#schemaputrepositorycatalogdataresponse)|
|480|480|ServerException|[ServerException](#schemaserverexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|483|483|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SetRepositoryPolicy

<a id="opIdSetRepositoryPolicy"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.SetRepositoryPolicy' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "policyText": {},
    "force": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy`

Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

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
|X-Amz-Target|SpencerFrontendService.SetRepositoryPolicy|

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

> 483 Response

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
|483|483|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.TagResource' \
  -d '{
    "resourceArn": {},
    "tags": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.TagResource`

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.

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
|X-Amz-Target|SpencerFrontendService.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.UntagResource' \
  -d '{
    "resourceArn": {},
    "tagKeys": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.UntagResource`

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
|X-Amz-Target|SpencerFrontendService.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|481|481|InvalidTagParameterException|[InvalidTagParameterException](#schemainvalidtagparameterexception)|
|482|482|TooManyTagsException|[TooManyTagsException](#schematoomanytagsexception)|
|483|483|RepositoryNotFoundException|[RepositoryNotFoundException](#schemarepositorynotfoundexception)|
|484|484|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|
|485|485|ServerException|[ServerException](#schemaserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UploadLayerPart

<a id="opIdUploadLayerPart"></a>

> Code samples

```bash
curl 'https://ecr-public.us-east-1.amazonaws.com/#X-Amz-Target=SpencerFrontendService.UploadLayerPart' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: SpencerFrontendService.UploadLayerPart' \
  -d '{
    "registryId": {},
    "repositoryName": {},
    "uploadId": {},
    "partFirstByte": {},
    "partLastByte": {},
    "layerPartBlob": {}
  }'
```

`POST /#X-Amz-Target=SpencerFrontendService.UploadLayerPart`

<p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (about 20MB). The UploadLayerPart API is called once for each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

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
|X-Amz-Target|SpencerFrontendService.UploadLayerPart|

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

> 487 Response

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
|486|486|RegistryNotFoundException|[RegistryNotFoundException](#schemaregistrynotfoundexception)|
|487|487|UnsupportedCommandException|[UnsupportedCommandException](#schemaunsupportedcommandexception)|

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

<h2 id="tocS_RegistryNotFoundException">RegistryNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaregistrynotfoundexception"></a>
<a id="schema_RegistryNotFoundException"></a>
<a id="tocSregistrynotfoundexception"></a>
<a id="tocsregistrynotfoundexception"></a>

```json
null
```

<h2 id="tocS_UnsupportedCommandException">UnsupportedCommandException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedcommandexception"></a>
<a id="schema_UnsupportedCommandException"></a>
<a id="tocSunsupportedcommandexception"></a>
<a id="tocsunsupportedcommandexception"></a>

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
  "imageIds": {},
  "failures": {}
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|imageIds|object|true|none|none|

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

<h2 id="tocS_CreateRepositoryResponse">CreateRepositoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryresponse"></a>
<a id="schema_CreateRepositoryResponse"></a>
<a id="tocScreaterepositoryresponse"></a>
<a id="tocscreaterepositoryresponse"></a>

```json
{
  "repository": {
    "repositoryArn": {},
    "registryId": {},
    "repositoryName": {},
    "repositoryUri": {},
    "createdAt": {}
  },
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|object|false|none|none|
|catalogData|[RepositoryCatalogData](#schemarepositorycatalogdata)|false|none|The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.|

<h2 id="tocS_CreateRepositoryRequest">CreateRepositoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterepositoryrequest"></a>
<a id="schema_CreateRepositoryRequest"></a>
<a id="tocScreaterepositoryrequest"></a>
<a id="tocscreaterepositoryrequest"></a>

```json
{
  "repositoryName": {},
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoImageBlob": {},
    "aboutText": {},
    "usageText": {}
  },
  "tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|true|none|none|
|catalogData|object|false|none|none|
|tags|object|false|none|none|

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

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

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
    "repositoryArn": {},
    "registryId": {},
    "repositoryName": {},
    "repositoryUri": {},
    "createdAt": {}
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

<h2 id="tocS_DescribeImageTagsResponse">DescribeImageTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagetagsresponse"></a>
<a id="schema_DescribeImageTagsResponse"></a>
<a id="tocSdescribeimagetagsresponse"></a>
<a id="tocsdescribeimagetagsresponse"></a>

```json
{
  "imageTagDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageTagDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeImageTagsRequest">DescribeImageTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeimagetagsrequest"></a>
<a id="schema_DescribeImageTagsRequest"></a>
<a id="tocSdescribeimagetagsrequest"></a>
<a id="tocsdescribeimagetagsrequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

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
  "maxResults": {}
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

<h2 id="tocS_ImageNotFoundException">ImageNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaimagenotfoundexception"></a>
<a id="schema_ImageNotFoundException"></a>
<a id="tocSimagenotfoundexception"></a>
<a id="tocsimagenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DescribeRegistriesResponse">DescribeRegistriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistriesresponse"></a>
<a id="schema_DescribeRegistriesResponse"></a>
<a id="tocSdescriberegistriesresponse"></a>
<a id="tocsdescriberegistriesresponse"></a>

```json
{
  "registries": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registries|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeRegistriesRequest">DescribeRegistriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberegistriesrequest"></a>
<a id="schema_DescribeRegistriesRequest"></a>
<a id="tocSdescriberegistriesrequest"></a>
<a id="tocsdescriberegistriesrequest"></a>

```json
{
  "nextToken": {},
  "maxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|object|false|none|none|
|maxResults|object|false|none|none|

<h2 id="tocS_DescribeRepositoriesResponse">DescribeRepositoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberepositoriesresponse"></a>
<a id="schema_DescribeRepositoriesResponse"></a>
<a id="tocSdescriberepositoriesresponse"></a>
<a id="tocsdescriberepositoriesresponse"></a>

```json
{
  "repositories": {},
  "nextToken": {}
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
  "authorizationData": {
    "authorizationToken": {},
    "expiresAt": {}
  }
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
{}
```

<h2 id="tocS_GetRegistryCatalogDataResponse">GetRegistryCatalogDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetregistrycatalogdataresponse"></a>
<a id="schema_GetRegistryCatalogDataResponse"></a>
<a id="tocSgetregistrycatalogdataresponse"></a>
<a id="tocsgetregistrycatalogdataresponse"></a>

```json
{
  "registryCatalogData": {
    "displayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryCatalogData|object|true|none|none|

<h2 id="tocS_GetRegistryCatalogDataRequest">GetRegistryCatalogDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetregistrycatalogdatarequest"></a>
<a id="schema_GetRegistryCatalogDataRequest"></a>
<a id="tocSgetregistrycatalogdatarequest"></a>
<a id="tocsgetregistrycatalogdatarequest"></a>

```json
{}
```

<h2 id="tocS_GetRepositoryCatalogDataResponse">GetRepositoryCatalogDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorycatalogdataresponse"></a>
<a id="schema_GetRepositoryCatalogDataResponse"></a>
<a id="tocSgetrepositorycatalogdataresponse"></a>
<a id="tocsgetrepositorycatalogdataresponse"></a>

```json
{
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogData|object|false|none|none|

<h2 id="tocS_GetRepositoryCatalogDataRequest">GetRepositoryCatalogDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorycatalogdatarequest"></a>
<a id="schema_GetRepositoryCatalogDataRequest"></a>
<a id="tocSgetrepositorycatalogdatarequest"></a>
<a id="tocsgetrepositorycatalogdatarequest"></a>

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

<h2 id="tocS_RepositoryCatalogDataNotFoundException">RepositoryCatalogDataNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemarepositorycatalogdatanotfoundexception"></a>
<a id="schema_RepositoryCatalogDataNotFoundException"></a>
<a id="tocSrepositorycatalogdatanotfoundexception"></a>
<a id="tocsrepositorycatalogdatanotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetRepositoryPolicyResponse">GetRepositoryPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetrepositorypolicyresponse"></a>
<a id="schema_GetRepositoryPolicyResponse"></a>
<a id="tocSgetrepositorypolicyresponse"></a>
<a id="tocsgetrepositorypolicyresponse"></a>

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

<h2 id="tocS_LayersNotFoundException">LayersNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemalayersnotfoundexception"></a>
<a id="schema_LayersNotFoundException"></a>
<a id="tocSlayersnotfoundexception"></a>
<a id="tocslayersnotfoundexception"></a>

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

<h2 id="tocS_PutRegistryCatalogDataResponse">PutRegistryCatalogDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputregistrycatalogdataresponse"></a>
<a id="schema_PutRegistryCatalogDataResponse"></a>
<a id="tocSputregistrycatalogdataresponse"></a>
<a id="tocsputregistrycatalogdataresponse"></a>

```json
{
  "registryCatalogData": {
    "displayName": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryCatalogData|object|true|none|none|

<h2 id="tocS_PutRegistryCatalogDataRequest">PutRegistryCatalogDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputregistrycatalogdatarequest"></a>
<a id="schema_PutRegistryCatalogDataRequest"></a>
<a id="tocSputregistrycatalogdatarequest"></a>
<a id="tocsputregistrycatalogdatarequest"></a>

```json
{
  "displayName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|false|none|none|

<h2 id="tocS_PutRepositoryCatalogDataResponse">PutRepositoryCatalogDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorycatalogdataresponse"></a>
<a id="schema_PutRepositoryCatalogDataResponse"></a>
<a id="tocSputrepositorycatalogdataresponse"></a>
<a id="tocsputrepositorycatalogdataresponse"></a>

```json
{
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoUrl": {},
    "aboutText": {},
    "usageText": {},
    "marketplaceCertified": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogData|object|false|none|none|

<h2 id="tocS_PutRepositoryCatalogDataRequest">PutRepositoryCatalogDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputrepositorycatalogdatarequest"></a>
<a id="schema_PutRepositoryCatalogDataRequest"></a>
<a id="tocSputrepositorycatalogdatarequest"></a>
<a id="tocsputrepositorycatalogdatarequest"></a>

```json
{
  "registryId": {},
  "repositoryName": {},
  "catalogData": {
    "description": {},
    "architectures": {},
    "operatingSystems": {},
    "logoImageBlob": {},
    "aboutText": {},
    "usageText": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|true|none|none|
|catalogData|object|true|none|none|

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

<h2 id="tocS_AboutText">AboutText</h2>
<!-- backwards compatibility -->
<a id="schemaabouttext"></a>
<a id="schema_AboutText"></a>
<a id="tocSabouttext"></a>
<a id="tocsabouttext"></a>

```json
"string"
```

<h2 id="tocS_Architecture">Architecture</h2>
<!-- backwards compatibility -->
<a id="schemaarchitecture"></a>
<a id="schema_Architecture"></a>
<a id="tocSarchitecture"></a>
<a id="tocsarchitecture"></a>

```json
"string"
```

<h2 id="tocS_ArchitectureList">ArchitectureList</h2>
<!-- backwards compatibility -->
<a id="schemaarchitecturelist"></a>
<a id="schema_ArchitectureList"></a>
<a id="tocSarchitecturelist"></a>
<a id="tocsarchitecturelist"></a>

```json
[
  "string"
]
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

<h2 id="tocS_AuthorizationData">AuthorizationData</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationdata"></a>
<a id="schema_AuthorizationData"></a>
<a id="tocSauthorizationdata"></a>
<a id="tocsauthorizationdata"></a>

```json
{
  "authorizationToken": {},
  "expiresAt": {}
}
```

An authorization token data object that corresponds to a public registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationToken|object|false|none|none|
|expiresAt|object|false|none|none|

<h2 id="tocS_RegistryIdOrAlias">RegistryIdOrAlias</h2>
<!-- backwards compatibility -->
<a id="schemaregistryidoralias"></a>
<a id="schema_RegistryIdOrAlias"></a>
<a id="tocSregistryidoralias"></a>
<a id="tocsregistryidoralias"></a>

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

<h2 id="tocS_RegistryId">RegistryId</h2>
<!-- backwards compatibility -->
<a id="schemaregistryid"></a>
<a id="schema_RegistryId"></a>
<a id="tocSregistryid"></a>
<a id="tocsregistryid"></a>

```json
"string"
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

<h2 id="tocS_RepositoryCatalogDataInput">RepositoryCatalogDataInput</h2>
<!-- backwards compatibility -->
<a id="schemarepositorycatalogdatainput"></a>
<a id="schema_RepositoryCatalogDataInput"></a>
<a id="tocSrepositorycatalogdatainput"></a>
<a id="tocsrepositorycatalogdatainput"></a>

```json
{
  "description": {},
  "architectures": {},
  "operatingSystems": {},
  "logoImageBlob": {},
  "aboutText": {},
  "usageText": {}
}
```

An object that contains the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|architectures|object|false|none|none|
|operatingSystems|object|false|none|none|
|logoImageBlob|object|false|none|none|
|aboutText|object|false|none|none|
|usageText|object|false|none|none|

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
  "createdAt": {}
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

<h2 id="tocS_RepositoryCatalogData">RepositoryCatalogData</h2>
<!-- backwards compatibility -->
<a id="schemarepositorycatalogdata"></a>
<a id="schema_RepositoryCatalogData"></a>
<a id="tocSrepositorycatalogdata"></a>
<a id="tocsrepositorycatalogdata"></a>

```json
{
  "description": {},
  "architectures": {},
  "operatingSystems": {},
  "logoUrl": {},
  "aboutText": {},
  "usageText": {},
  "marketplaceCertified": {}
}
```

The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|architectures|object|false|none|none|
|operatingSystems|object|false|none|none|
|logoUrl|object|false|none|none|
|aboutText|object|false|none|none|
|usageText|object|false|none|none|
|marketplaceCertified|object|false|none|none|

<h2 id="tocS_CreationTimestamp">CreationTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemacreationtimestamp"></a>
<a id="schema_CreationTimestamp"></a>
<a id="tocScreationtimestamp"></a>
<a id="tocscreationtimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DefaultRegistryAliasFlag">DefaultRegistryAliasFlag</h2>
<!-- backwards compatibility -->
<a id="schemadefaultregistryaliasflag"></a>
<a id="schema_DefaultRegistryAliasFlag"></a>
<a id="tocSdefaultregistryaliasflag"></a>
<a id="tocsdefaultregistryaliasflag"></a>

```json
true
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

<h2 id="tocS_ImageTagDetailList">ImageTagDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagdetaillist"></a>
<a id="schema_ImageTagDetailList"></a>
<a id="tocSimagetagdetaillist"></a>
<a id="tocsimagetagdetaillist"></a>

```json
[
  {
    "imageTag": {},
    "createdAt": {},
    "imageDetail": {
      "imageDigest": {},
      "imageSizeInBytes": {},
      "imagePushedAt": {},
      "imageManifestMediaType": {},
      "artifactMediaType": {}
    }
  }
]
```

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
    "imageManifestMediaType": {},
    "artifactMediaType": {}
  }
]
```

<h2 id="tocS_RegistryList">RegistryList</h2>
<!-- backwards compatibility -->
<a id="schemaregistrylist"></a>
<a id="schema_RegistryList"></a>
<a id="tocSregistrylist"></a>
<a id="tocsregistrylist"></a>

```json
[
  {
    "registryId": {},
    "registryArn": {},
    "registryUri": {},
    "verified": {},
    "aliases": {}
  }
]
```

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
    "createdAt": {}
  }
]
```

<h2 id="tocS_RegistryCatalogData">RegistryCatalogData</h2>
<!-- backwards compatibility -->
<a id="schemaregistrycatalogdata"></a>
<a id="schema_RegistryCatalogData"></a>
<a id="tocSregistrycatalogdata"></a>
<a id="tocsregistrycatalogdata"></a>

```json
{
  "displayName": {}
}
```

The metadata for a public registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|object|false|none|none|

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

An object with identifying information for an Amazon ECR image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDigest|object|false|none|none|
|imageTag|object|false|none|none|

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

An object that represents an Amazon ECR image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageId|object|false|none|none|
|imageManifest|object|false|none|none|
|imageManifestMediaType|object|false|none|none|

<h2 id="tocS_ImageDigest">ImageDigest</h2>
<!-- backwards compatibility -->
<a id="schemaimagedigest"></a>
<a id="schema_ImageDigest"></a>
<a id="tocSimagedigest"></a>
<a id="tocsimagedigest"></a>

```json
"string"
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
  "imageManifestMediaType": {},
  "artifactMediaType": {}
}
```

An object that describes an image that's returned by a <a>DescribeImages</a> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|false|none|none|
|repositoryName|object|false|none|none|
|imageDigest|object|false|none|none|
|imageTags|object|false|none|none|
|imageSizeInBytes|object|false|none|none|
|imagePushedAt|object|false|none|none|
|imageManifestMediaType|object|false|none|none|
|artifactMediaType|object|false|none|none|

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

An object that represents an Amazon ECR image failure.

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

<h2 id="tocS_ReferencedImageDetail">ReferencedImageDetail</h2>
<!-- backwards compatibility -->
<a id="schemareferencedimagedetail"></a>
<a id="schema_ReferencedImageDetail"></a>
<a id="tocSreferencedimagedetail"></a>
<a id="tocsreferencedimagedetail"></a>

```json
{
  "imageDigest": {},
  "imageSizeInBytes": {},
  "imagePushedAt": {},
  "imageManifestMediaType": {},
  "artifactMediaType": {}
}
```

An object that describes the image tag details that are returned by a <a>DescribeImageTags</a> action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDigest|object|false|none|none|
|imageSizeInBytes|object|false|none|none|
|imagePushedAt|object|false|none|none|
|imageManifestMediaType|object|false|none|none|
|artifactMediaType|object|false|none|none|

<h2 id="tocS_ImageTagDetail">ImageTagDetail</h2>
<!-- backwards compatibility -->
<a id="schemaimagetagdetail"></a>
<a id="schema_ImageTagDetail"></a>
<a id="tocSimagetagdetail"></a>
<a id="tocsimagetagdetail"></a>

```json
{
  "imageTag": {},
  "createdAt": {},
  "imageDetail": {
    "imageDigest": {},
    "imageSizeInBytes": {},
    "imagePushedAt": {},
    "imageManifestMediaType": {},
    "artifactMediaType": {}
  }
}
```

An object that represents the image tag details for an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageTag|object|false|none|none|
|createdAt|object|false|none|none|
|imageDetail|object|false|none|none|

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

An object that represents an Amazon ECR image layer.

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

An object that represents an Amazon ECR image layer failure.

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

<h2 id="tocS_LogoImageBlob">LogoImageBlob</h2>
<!-- backwards compatibility -->
<a id="schemalogoimageblob"></a>
<a id="schema_LogoImageBlob"></a>
<a id="tocSlogoimageblob"></a>
<a id="tocslogoimageblob"></a>

```json
"string"
```

<h2 id="tocS_MarketplaceCertified">MarketplaceCertified</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacecertified"></a>
<a id="schema_MarketplaceCertified"></a>
<a id="tocSmarketplacecertified"></a>
<a id="tocsmarketplacecertified"></a>

```json
true
```

<h2 id="tocS_OperatingSystem">OperatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystem"></a>
<a id="schema_OperatingSystem"></a>
<a id="tocSoperatingsystem"></a>
<a id="tocsoperatingsystem"></a>

```json
"string"
```

<h2 id="tocS_OperatingSystemList">OperatingSystemList</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemlist"></a>
<a id="schema_OperatingSystemList"></a>
<a id="tocSoperatingsystemlist"></a>
<a id="tocsoperatingsystemlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PrimaryRegistryAliasFlag">PrimaryRegistryAliasFlag</h2>
<!-- backwards compatibility -->
<a id="schemaprimaryregistryaliasflag"></a>
<a id="schema_PrimaryRegistryAliasFlag"></a>
<a id="tocSprimaryregistryaliasflag"></a>
<a id="tocsprimaryregistryaliasflag"></a>

```json
true
```

<h2 id="tocS_RegistryDisplayName">RegistryDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemaregistrydisplayname"></a>
<a id="schema_RegistryDisplayName"></a>
<a id="tocSregistrydisplayname"></a>
<a id="tocsregistrydisplayname"></a>

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

<h2 id="tocS_RegistryVerified">RegistryVerified</h2>
<!-- backwards compatibility -->
<a id="schemaregistryverified"></a>
<a id="schema_RegistryVerified"></a>
<a id="tocSregistryverified"></a>
<a id="tocsregistryverified"></a>

```json
true
```

<h2 id="tocS_RegistryAliasList">RegistryAliasList</h2>
<!-- backwards compatibility -->
<a id="schemaregistryaliaslist"></a>
<a id="schema_RegistryAliasList"></a>
<a id="tocSregistryaliaslist"></a>
<a id="tocsregistryaliaslist"></a>

```json
[
  {
    "name": {},
    "status": {},
    "primaryRegistryAlias": {},
    "defaultRegistryAlias": {}
  }
]
```

<h2 id="tocS_Registry">Registry</h2>
<!-- backwards compatibility -->
<a id="schemaregistry"></a>
<a id="schema_Registry"></a>
<a id="tocSregistry"></a>
<a id="tocsregistry"></a>

```json
{
  "registryId": {},
  "registryArn": {},
  "registryUri": {},
  "verified": {},
  "aliases": {}
}
```

The details of a public registry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registryId|object|true|none|none|
|registryArn|object|true|none|none|
|registryUri|object|true|none|none|
|verified|object|true|none|none|
|aliases|object|true|none|none|

<h2 id="tocS_RegistryAliasName">RegistryAliasName</h2>
<!-- backwards compatibility -->
<a id="schemaregistryaliasname"></a>
<a id="schema_RegistryAliasName"></a>
<a id="tocSregistryaliasname"></a>
<a id="tocsregistryaliasname"></a>

```json
"string"
```

<h2 id="tocS_RegistryAliasStatus">RegistryAliasStatus</h2>
<!-- backwards compatibility -->
<a id="schemaregistryaliasstatus"></a>
<a id="schema_RegistryAliasStatus"></a>
<a id="tocSregistryaliasstatus"></a>
<a id="tocsregistryaliasstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_RegistryAlias">RegistryAlias</h2>
<!-- backwards compatibility -->
<a id="schemaregistryalias"></a>
<a id="schema_RegistryAlias"></a>
<a id="tocSregistryalias"></a>
<a id="tocsregistryalias"></a>

```json
{
  "name": {},
  "status": {},
  "primaryRegistryAlias": {},
  "defaultRegistryAlias": {}
}
```

An object representing the aliases for a public registry. A public registry is given an alias when it's created. However, a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|status|object|true|none|none|
|primaryRegistryAlias|object|true|none|none|
|defaultRegistryAlias|object|true|none|none|

<h2 id="tocS_RepositoryDescription">RepositoryDescription</h2>
<!-- backwards compatibility -->
<a id="schemarepositorydescription"></a>
<a id="schema_RepositoryDescription"></a>
<a id="tocSrepositorydescription"></a>
<a id="tocsrepositorydescription"></a>

```json
"string"
```

<h2 id="tocS_ResourceUrl">ResourceUrl</h2>
<!-- backwards compatibility -->
<a id="schemaresourceurl"></a>
<a id="schema_ResourceUrl"></a>
<a id="tocSresourceurl"></a>
<a id="tocsresourceurl"></a>

```json
"string"
```

<h2 id="tocS_UsageText">UsageText</h2>
<!-- backwards compatibility -->
<a id="schemausagetext"></a>
<a id="schema_UsageText"></a>
<a id="tocSusagetext"></a>
<a id="tocsusagetext"></a>

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

The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

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
