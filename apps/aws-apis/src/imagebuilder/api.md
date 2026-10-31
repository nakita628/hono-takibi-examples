<h1 id="ec2-image-builder">EC2 Image Builder v2019-12-02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.

Base URLs:

* <a href="http://imagebuilder.us-east-1.amazonaws.com">http://imagebuilder.us-east-1.amazonaws.com</a> - The imagebuilder multi-region endpoint

* <a href="https://imagebuilder.us-east-1.amazonaws.com">https://imagebuilder.us-east-1.amazonaws.com</a> - The imagebuilder multi-region endpoint

* <a href="http://imagebuilder.cn-north-1.amazonaws.com.cn">http://imagebuilder.cn-north-1.amazonaws.com.cn</a> - The imagebuilder endpoint for China (Beijing) and China (Ningxia)

* <a href="https://imagebuilder.cn-north-1.amazonaws.com.cn">https://imagebuilder.cn-north-1.amazonaws.com.cn</a> - The imagebuilder endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/imagebuilder/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="ec2-image-builder-default">Default</h1>

## CancelImageCreation

<a id="opIdCancelImageCreation"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CancelImageCreation \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageBuildVersionArn": "string",
    "clientToken": "string"
  }'
```

`PUT /CancelImageCreation`

CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.

> Body parameter

```json
{
  "imageBuildVersionArn": "string",
  "clientToken": "string"
}
```

<h3 id="cancelimagecreation-parameters">Parameters</h3>

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
|» imageBuildVersionArn|body|string|true|The Amazon Resource Name (ARN) of the image that you want to cancel creation for.|
|» clientToken|body|string|true|Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
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

<h3 id="cancelimagecreation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelImageCreationResponse](#schemacancelimagecreationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateComponent

<a id="opIdCreateComponent"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateComponent \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "semanticVersion": "string",
    "description": "string",
    "changeDescription": "string",
    "platform": "Windows",
    "supportedOsVersions": [
      "string"
    ],
    "data": "string",
    "uri": "string",
    "kmsKeyId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /CreateComponent`

<p>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods:</p> <ul> <li> <p>Inline, using the <code>data</code> property in the request body.</p> </li> <li> <p>A URL that points to a YAML document file stored in Amazon S3, using the <code>uri</code> property in the request body.</p> </li> </ul>

> Body parameter

```json
{
  "name": "string",
  "semanticVersion": "string",
  "description": "string",
  "changeDescription": "string",
  "platform": "Windows",
  "supportedOsVersions": [
    "string"
  ],
  "data": "string",
  "uri": "string",
  "kmsKeyId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createcomponent-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the component.|
|» semanticVersion|body|string|true|<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>|
|» description|body|string|false|Describes the contents of the component.|
|» changeDescription|body|string|false|The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.|
|» platform|body|string|true|The operating system platform of the component.|
|» supportedOsVersions|body|[[OsVersion](#schemaosversion)]|false|The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.|
|» data|body|string|false|Component <code>data</code> contains inline YAML document content for the component. Alternatively, you can specify the <code>uri</code> of a YAML document file stored in Amazon S3. However, you cannot specify both properties.|
|» uri|body|string|false|<p>The <code>uri</code> of a YAML component document file. This must be an S3 URL (<code>s3://bucket/key</code>), and the requester must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota.</p> <p>Alternatively, you can specify the YAML document inline, using the component <code>data</code> property. You cannot specify both properties.</p>|
|» kmsKeyId|body|string|false|The ID of the KMS key that is used to encrypt this component.|
|» tags|body|object|false|The tags that apply to the component.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token of the component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» platform|Windows|
|» platform|Linux|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "componentBuildVersionArn": {}
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

<h3 id="createcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateComponentResponse](#schemacreatecomponentresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|InvalidVersionNumberException|[InvalidVersionNumberException](#schemainvalidversionnumberexception)|
|488|488|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|489|489|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|490|490|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateContainerRecipe

<a id="opIdCreateContainerRecipe"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateContainerRecipe \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "containerType": "DOCKER",
    "name": "string",
    "description": "string",
    "semanticVersion": "string",
    "components": [
      {
        "componentArn": {},
        "parameters": {}
      }
    ],
    "instanceConfiguration": {
      "image": {},
      "blockDeviceMappings": {}
    },
    "dockerfileTemplateData": "string",
    "dockerfileTemplateUri": "string",
    "platformOverride": "Windows",
    "imageOsVersionOverride": "string",
    "parentImage": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": "string",
    "targetRepository": {
      "service": {},
      "repositoryName": {}
    },
    "kmsKeyId": "string",
    "clientToken": "string"
  }'
```

`PUT /CreateContainerRecipe`

Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.

> Body parameter

```json
{
  "containerType": "DOCKER",
  "name": "string",
  "description": "string",
  "semanticVersion": "string",
  "components": [
    {
      "componentArn": {},
      "parameters": {}
    }
  ],
  "instanceConfiguration": {
    "image": {},
    "blockDeviceMappings": {}
  },
  "dockerfileTemplateData": "string",
  "dockerfileTemplateUri": "string",
  "platformOverride": "Windows",
  "imageOsVersionOverride": "string",
  "parentImage": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": "string",
  "targetRepository": {
    "service": {},
    "repositoryName": {}
  },
  "kmsKeyId": "string",
  "clientToken": "string"
}
```

<h3 id="createcontainerrecipe-parameters">Parameters</h3>

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
|» containerType|body|string|true|The type of container to create.|
|» name|body|string|true|The name of the container recipe.|
|» description|body|string|false|The description of the container recipe.|
|» semanticVersion|body|string|true|<p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>|
|» components|body|[[ComponentConfiguration](#schemacomponentconfiguration)]|true|Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.|
|» instanceConfiguration|body|object|false|Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.|
|» » image|body|object|false|none|
|» » blockDeviceMappings|body|object|false|none|
|» dockerfileTemplateData|body|string|false|The Dockerfile template used to build your image as an inline data blob.|
|» dockerfileTemplateUri|body|string|false|The Amazon S3 URI for the Dockerfile that will be used to build your container image.|
|» platformOverride|body|string|false|Specifies the operating system platform when you use a custom base image.|
|» imageOsVersionOverride|body|string|false|Specifies the operating system version for the base image.|
|» parentImage|body|string|true|The base image for the container recipe.|
|» tags|body|object|false|Tags that are attached to the container recipe.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» workingDirectory|body|string|false|The working directory for use during build and test workflows.|
|» targetRepository|body|object|true|The container repository where the output container image is stored.|
|» » service|body|object|false|none|
|» » repositoryName|body|object|false|none|
|» kmsKeyId|body|string|false|Identifies which KMS key is used to encrypt the container image.|
|» clientToken|body|string|true|The client token used to make this request idempotent.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» containerType|DOCKER|
|» platformOverride|Windows|
|» platformOverride|Linux|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "containerRecipeArn": {}
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

<h3 id="createcontainerrecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateContainerRecipeResponse](#schemacreatecontainerreciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|InvalidVersionNumberException|[InvalidVersionNumberException](#schemainvalidversionnumberexception)|
|488|488|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|489|489|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|490|490|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateDistributionConfiguration

<a id="opIdCreateDistributionConfiguration"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateDistributionConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "distributions": [
      {
        "region": {},
        "amiDistributionConfiguration": {
          "name": {},
          "description": {},
          "targetAccountIds": {},
          "amiTags": {
            "property1": "string",
            "property2": "string"
          },
          "kmsKeyId": {},
          "launchPermission": {
            "userIds": {},
            "userGroups": {},
            "organizationArns": {},
            "organizationalUnitArns": {}
          }
        },
        "containerDistributionConfiguration": {
          "description": {},
          "containerTags": {},
          "targetRepository": {
            "service": {},
            "repositoryName": {}
          }
        },
        "licenseConfigurationArns": {},
        "launchTemplateConfigurations": {},
        "s3ExportConfiguration": {
          "roleName": {},
          "diskImageFormat": {},
          "s3Bucket": {},
          "s3Prefix": {}
        },
        "fastLaunchConfigurations": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /CreateDistributionConfiguration`

Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "distributions": [
    {
      "region": {},
      "amiDistributionConfiguration": {
        "name": {},
        "description": {},
        "targetAccountIds": {},
        "amiTags": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKeyId": {},
        "launchPermission": {
          "userIds": {},
          "userGroups": {},
          "organizationArns": {},
          "organizationalUnitArns": {}
        }
      },
      "containerDistributionConfiguration": {
        "description": {},
        "containerTags": {},
        "targetRepository": {
          "service": {},
          "repositoryName": {}
        }
      },
      "licenseConfigurationArns": {},
      "launchTemplateConfigurations": {},
      "s3ExportConfiguration": {
        "roleName": {},
        "diskImageFormat": {},
        "s3Bucket": {},
        "s3Prefix": {}
      },
      "fastLaunchConfigurations": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createdistributionconfiguration-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the distribution configuration.|
|» description|body|string|false|The description of the distribution configuration.|
|» distributions|body|[[Distribution](#schemadistribution)]|true|The distributions of the distribution configuration.|
|» tags|body|object|false|The tags of the distribution configuration.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token of the distribution configuration.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "distributionConfigurationArn": {}
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

<h3 id="createdistributionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateDistributionConfigurationResponse](#schemacreatedistributionconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|488|488|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|489|489|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|
|490|490|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImage

<a id="opIdCreateImage"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateImage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageRecipeArn": "string",
    "containerRecipeArn": "string",
    "distributionConfigurationArn": "string",
    "infrastructureConfigurationArn": "string",
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "enhancedImageMetadataEnabled": true,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string",
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }'
```

`PUT /CreateImage`

Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.

> Body parameter

```json
{
  "imageRecipeArn": "string",
  "containerRecipeArn": "string",
  "distributionConfigurationArn": "string",
  "infrastructureConfigurationArn": "string",
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": true,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string",
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

<h3 id="createimage-parameters">Parameters</h3>

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
|» imageRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.|
|» containerRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.|
|» distributionConfigurationArn|body|string|false|The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.|
|» infrastructureConfigurationArn|body|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.|
|» imageTestsConfiguration|body|object|false|Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.|
|» » imageTestsEnabled|body|object|false|none|
|» » timeoutMinutes|body|object|false|none|
|» enhancedImageMetadataEnabled|body|boolean|false|Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.|
|» tags|body|object|false|The tags of the image.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|
|» imageScanningConfiguration|body|object|false|Contains settings for Image Builder image resource and container image scans.|
|» » imageScanningEnabled|body|object|false|none|
|» » ecrConfiguration|body|object|false|none|
|» » » repositoryName|body|object|false|none|
|» » » containerTags|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
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

<h3 id="createimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImageResponse](#schemacreateimageresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|488|488|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImagePipeline

<a id="opIdCreateImagePipeline"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateImagePipeline \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "imageRecipeArn": "string",
    "containerRecipeArn": "string",
    "infrastructureConfigurationArn": "string",
    "distributionConfigurationArn": "string",
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "enhancedImageMetadataEnabled": true,
    "schedule": {
      "scheduleExpression": {},
      "timezone": {},
      "pipelineExecutionStartCondition": {}
    },
    "status": "DISABLED",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string",
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }'
```

`PUT /CreateImagePipeline`

Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "imageRecipeArn": "string",
  "containerRecipeArn": "string",
  "infrastructureConfigurationArn": "string",
  "distributionConfigurationArn": "string",
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": true,
  "schedule": {
    "scheduleExpression": {},
    "timezone": {},
    "pipelineExecutionStartCondition": {}
  },
  "status": "DISABLED",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string",
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

<h3 id="createimagepipeline-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the image pipeline.|
|» description|body|string|false|The description of the image pipeline.|
|» imageRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.|
|» containerRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.|
|» infrastructureConfigurationArn|body|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.|
|» distributionConfigurationArn|body|string|false|The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.|
|» imageTestsConfiguration|body|object|false|Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.|
|» » imageTestsEnabled|body|object|false|none|
|» » timeoutMinutes|body|object|false|none|
|» enhancedImageMetadataEnabled|body|boolean|false|Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.|
|» schedule|body|object|false|A schedule configures how often and when a pipeline will automatically create a new image.|
|» » scheduleExpression|body|object|false|none|
|» » timezone|body|object|false|none|
|» » pipelineExecutionStartCondition|body|object|false|none|
|» status|body|string|false|The status of the image pipeline.|
|» tags|body|object|false|The tags of the image pipeline.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|
|» imageScanningConfiguration|body|object|false|Contains settings for Image Builder image resource and container image scans.|
|» » imageScanningEnabled|body|object|false|none|
|» » ecrConfiguration|body|object|false|none|
|» » » repositoryName|body|object|false|none|
|» » » containerTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|DISABLED|
|» status|ENABLED|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imagePipelineArn": {}
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

<h3 id="createimagepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImagePipelineResponse](#schemacreateimagepipelineresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|488|488|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|489|489|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateImageRecipe

<a id="opIdCreateImageRecipe"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateImageRecipe \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "semanticVersion": "string",
    "components": [
      {
        "componentArn": {},
        "parameters": {}
      }
    ],
    "parentImage": "string",
    "blockDeviceMappings": [
      {
        "deviceName": {},
        "ebs": {
          "encrypted": {},
          "deleteOnTermination": {},
          "iops": {},
          "kmsKeyId": {},
          "snapshotId": {},
          "volumeSize": {},
          "volumeType": {},
          "throughput": {}
        },
        "virtualName": {},
        "noDevice": {}
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": "string",
    "additionalInstanceConfiguration": {
      "systemsManagerAgent": {
        "uninstallAfterBuild": {}
      },
      "userDataOverride": {}
    },
    "clientToken": "string"
  }'
```

`PUT /CreateImageRecipe`

Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "semanticVersion": "string",
  "components": [
    {
      "componentArn": {},
      "parameters": {}
    }
  ],
  "parentImage": "string",
  "blockDeviceMappings": [
    {
      "deviceName": {},
      "ebs": {
        "encrypted": {},
        "deleteOnTermination": {},
        "iops": {},
        "kmsKeyId": {},
        "snapshotId": {},
        "volumeSize": {},
        "volumeType": {},
        "throughput": {}
      },
      "virtualName": {},
      "noDevice": {}
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": "string",
  "additionalInstanceConfiguration": {
    "systemsManagerAgent": {
      "uninstallAfterBuild": {}
    },
    "userDataOverride": {}
  },
  "clientToken": "string"
}
```

<h3 id="createimagerecipe-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the image recipe.|
|» description|body|string|false|The description of the image recipe.|
|» semanticVersion|body|string|true|<p>The semantic version of the image recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>|
|» components|body|[[ComponentConfiguration](#schemacomponentconfiguration)]|true|The components included in the image recipe.|
|» parentImage|body|string|true|The base image of the image recipe. The value of the string can be the ARN of the base image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder.|
|» blockDeviceMappings|body|[[InstanceBlockDeviceMapping](#schemainstanceblockdevicemapping)]|false|The block device mappings of the image recipe.|
|» tags|body|object|false|The tags of the image recipe.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» workingDirectory|body|string|false|The working directory used during build and test workflows.|
|» additionalInstanceConfiguration|body|object|false|<p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p>|
|» » systemsManagerAgent|body|object|false|none|
|» » » uninstallAfterBuild|body|object|false|none|
|» » userDataOverride|body|object|false|none|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imageRecipeArn": {}
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

<h3 id="createimagerecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateImageRecipeResponse](#schemacreateimagereciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|InvalidVersionNumberException|[InvalidVersionNumberException](#schemainvalidversionnumberexception)|
|488|488|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|489|489|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|490|490|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateInfrastructureConfiguration

<a id="opIdCreateInfrastructureConfiguration"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/CreateInfrastructureConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string",
    "instanceTypes": [
      "string"
    ],
    "instanceProfileName": "string",
    "securityGroupIds": [
      "string"
    ],
    "subnetId": "string",
    "logging": {
      "s3Logs": {
        "s3BucketName": {},
        "s3KeyPrefix": {}
      }
    },
    "keyPair": "string",
    "terminateInstanceOnFailure": true,
    "snsTopicArn": "string",
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceMetadataOptions": {
      "httpTokens": {},
      "httpPutResponseHopLimit": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /CreateInfrastructureConfiguration`

Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "instanceTypes": [
    "string"
  ],
  "instanceProfileName": "string",
  "securityGroupIds": [
    "string"
  ],
  "subnetId": "string",
  "logging": {
    "s3Logs": {
      "s3BucketName": {},
      "s3KeyPrefix": {}
    }
  },
  "keyPair": "string",
  "terminateInstanceOnFailure": true,
  "snsTopicArn": "string",
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceMetadataOptions": {
    "httpTokens": {},
    "httpPutResponseHopLimit": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="createinfrastructureconfiguration-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the infrastructure configuration.|
|» description|body|string|false|The description of the infrastructure configuration.|
|» instanceTypes|body|[[InstanceType](#schemainstancetype)]|false|The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.|
|» instanceProfileName|body|string|true|The instance profile to associate with the instance used to customize your Amazon EC2 AMI.|
|» securityGroupIds|body|[[NonEmptyString](#schemanonemptystring)]|false|The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.|
|» subnetId|body|string|false|The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.|
|» logging|body|object|false|Logging configuration defines where Image Builder uploads your logs.|
|» » s3Logs|body|object|false|none|
|» » » s3BucketName|body|object|false|none|
|» » » s3KeyPrefix|body|object|false|none|
|» keyPair|body|string|false|The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.|
|» terminateInstanceOnFailure|body|boolean|false|The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.|
|» snsTopicArn|body|string|false|<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>|
|» resourceTags|body|object|false|The tags attached to the resource created by Image Builder.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» instanceMetadataOptions|body|object|false|The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.|
|» » httpTokens|body|object|false|none|
|» » httpPutResponseHopLimit|body|object|false|none|
|» tags|body|object|false|The tags of the infrastructure configuration.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "infrastructureConfigurationArn": {}
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

<h3 id="createinfrastructureconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateInfrastructureConfigurationResponse](#schemacreateinfrastructureconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|488|488|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|489|489|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteComponent

<a id="opIdDeleteComponent"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteComponent#componentBuildVersionArn?componentBuildVersionArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteComponent#componentBuildVersionArn`

Deletes a component build version.

<h3 id="deletecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|componentBuildVersionArn|query|string|true|The Amazon Resource Name (ARN) of the component build version to delete.|
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
  "requestId": {},
  "componentBuildVersionArn": {}
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

<h3 id="deletecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteComponentResponse](#schemadeletecomponentresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteContainerRecipe

<a id="opIdDeleteContainerRecipe"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteContainerRecipe#containerRecipeArn?containerRecipeArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteContainerRecipe#containerRecipeArn`

Deletes a container recipe.

<h3 id="deletecontainerrecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|containerRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the container recipe to delete.|
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
  "requestId": {},
  "containerRecipeArn": {}
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

<h3 id="deletecontainerrecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteContainerRecipeResponse](#schemadeletecontainerreciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteDistributionConfiguration

<a id="opIdDeleteDistributionConfiguration"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteDistributionConfiguration#distributionConfigurationArn`

Deletes a distribution configuration.

<h3 id="deletedistributionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|distributionConfigurationArn|query|string|true|The Amazon Resource Name (ARN) of the distribution configuration to delete.|
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
  "requestId": {},
  "distributionConfigurationArn": {}
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

<h3 id="deletedistributionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteDistributionConfigurationResponse](#schemadeletedistributionconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImage

<a id="opIdDeleteImage"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteImage#imageBuildVersionArn?imageBuildVersionArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteImage#imageBuildVersionArn`

<p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p> <ul> <li> <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister your Linux AMI</a> in the <i> <i>Amazon EC2 User Guide</i> </i>.</p> </li> <li> <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister your Windows AMI</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i>.</p> </li> <li> <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting an image</a> in the <i>Amazon ECR User Guide</i>.</p> </li> </ul>

<h3 id="deleteimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageBuildVersionArn|query|string|true|The Amazon Resource Name (ARN) of the Image Builder image resource to delete.|
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
  "requestId": {},
  "imageBuildVersionArn": {}
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

<h3 id="deleteimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImageResponse](#schemadeleteimageresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImagePipeline

<a id="opIdDeleteImagePipeline"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteImagePipeline#imagePipelineArn?imagePipelineArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteImagePipeline#imagePipelineArn`

Deletes an image pipeline.

<h3 id="deleteimagepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imagePipelineArn|query|string|true|The Amazon Resource Name (ARN) of the image pipeline to delete.|
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
  "requestId": {},
  "imagePipelineArn": {}
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

<h3 id="deleteimagepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImagePipelineResponse](#schemadeleteimagepipelineresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteImageRecipe

<a id="opIdDeleteImageRecipe"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteImageRecipe#imageRecipeArn?imageRecipeArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteImageRecipe#imageRecipeArn`

Deletes an image recipe.

<h3 id="deleteimagerecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the image recipe to delete.|
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
  "requestId": {},
  "imageRecipeArn": {}
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

<h3 id="deleteimagerecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteImageRecipeResponse](#schemadeleteimagereciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInfrastructureConfiguration

<a id="opIdDeleteInfrastructureConfiguration"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/DeleteInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /DeleteInfrastructureConfiguration#infrastructureConfigurationArn`

Deletes an infrastructure configuration.

<h3 id="deleteinfrastructureconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|infrastructureConfigurationArn|query|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration to delete.|
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
  "requestId": {},
  "infrastructureConfigurationArn": {}
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

<h3 id="deleteinfrastructureconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInfrastructureConfigurationResponse](#schemadeleteinfrastructureconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|486|486|ResourceDependencyException|[ResourceDependencyException](#schemaresourcedependencyexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComponent

<a id="opIdGetComponent"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetComponent#componentBuildVersionArn?componentBuildVersionArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetComponent#componentBuildVersionArn`

Gets a component object.

<h3 id="getcomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|componentBuildVersionArn|query|string|true|The Amazon Resource Name (ARN) of the component that you want to get. Regex requires the suffix <code>/\d+$</code>.|
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
  "requestId": {},
  "component": {
    "arn": {},
    "name": {},
    "version": {},
    "description": {},
    "changeDescription": {},
    "type": {},
    "platform": {},
    "supportedOsVersions": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "parameters": {},
    "owner": {},
    "data": {},
    "kmsKeyId": {},
    "encrypted": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "obfuscate": {}
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

<h3 id="getcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComponentResponse](#schemagetcomponentresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetComponentPolicy

<a id="opIdGetComponentPolicy"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetComponentPolicy#componentArn?componentArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetComponentPolicy#componentArn`

Gets a component policy.

<h3 id="getcomponentpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|componentArn|query|string|true|The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.|
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
  "requestId": {},
  "policy": {}
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

<h3 id="getcomponentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetComponentPolicyResponse](#schemagetcomponentpolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerRecipe

<a id="opIdGetContainerRecipe"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetContainerRecipe#containerRecipeArn?containerRecipeArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetContainerRecipe#containerRecipeArn`

Retrieves a container recipe.

<h3 id="getcontainerrecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|containerRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the container recipe to retrieve.|
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
  "requestId": {},
  "containerRecipe": {
    "arn": {},
    "containerType": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "instanceConfiguration": {
      "image": {},
      "blockDeviceMappings": {}
    },
    "dockerfileTemplateData": {},
    "kmsKeyId": {},
    "encrypted": {},
    "parentImage": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "targetRepository": {
      "service": {},
      "repositoryName": {}
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

> 485 Response

```json
null
```

<h3 id="getcontainerrecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerRecipeResponse](#schemagetcontainerreciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetContainerRecipePolicy

<a id="opIdGetContainerRecipePolicy"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetContainerRecipePolicy#containerRecipeArn?containerRecipeArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetContainerRecipePolicy#containerRecipeArn`

Retrieves the policy for a container recipe.

<h3 id="getcontainerrecipepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|containerRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the container recipe for the policy being requested.|
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
  "requestId": {},
  "policy": {}
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

<h3 id="getcontainerrecipepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetContainerRecipePolicyResponse](#schemagetcontainerrecipepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDistributionConfiguration

<a id="opIdGetDistributionConfiguration"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetDistributionConfiguration#distributionConfigurationArn?distributionConfigurationArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetDistributionConfiguration#distributionConfigurationArn`

Gets a distribution configuration.

<h3 id="getdistributionconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|distributionConfigurationArn|query|string|true|The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.|
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
  "requestId": {},
  "distributionConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "distributions": {},
    "timeoutMinutes": {},
    "dateCreated": {},
    "dateUpdated": {},
    "tags": {
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

<h3 id="getdistributionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDistributionConfigurationResponse](#schemagetdistributionconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImage

<a id="opIdGetImage"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetImage#imageBuildVersionArn?imageBuildVersionArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetImage#imageBuildVersionArn`

Gets an image.

<h3 id="getimage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageBuildVersionArn|query|string|true|The Amazon Resource Name (ARN) of the image that you want to get.|
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
  "requestId": {},
  "image": {
    "arn": {},
    "type": {},
    "name": {},
    "version": {},
    "platform": {},
    "enhancedImageMetadataEnabled": {},
    "osVersion": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "imageRecipe": {
      "arn": {},
      "type": {},
      "name": {},
      "description": {},
      "platform": {},
      "owner": {},
      "version": {},
      "components": {},
      "parentImage": {},
      "blockDeviceMappings": {},
      "dateCreated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "workingDirectory": {},
      "additionalInstanceConfiguration": {
        "systemsManagerAgent": {
          "uninstallAfterBuild": {}
        },
        "userDataOverride": {}
      }
    },
    "containerRecipe": {
      "arn": {},
      "containerType": {},
      "name": {},
      "description": {},
      "platform": {},
      "owner": {},
      "version": {},
      "components": {},
      "instanceConfiguration": {
        "image": {},
        "blockDeviceMappings": {}
      },
      "dockerfileTemplateData": {},
      "kmsKeyId": {},
      "encrypted": {},
      "parentImage": {},
      "dateCreated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "workingDirectory": {},
      "targetRepository": {
        "service": {},
        "repositoryName": {}
      }
    },
    "sourcePipelineName": {},
    "sourcePipelineArn": {},
    "infrastructureConfiguration": {
      "arn": {},
      "name": {},
      "description": {},
      "instanceTypes": {},
      "instanceProfileName": {},
      "securityGroupIds": {},
      "subnetId": {},
      "logging": {
        "s3Logs": {
          "s3BucketName": {},
          "s3KeyPrefix": {}
        }
      },
      "keyPair": {},
      "terminateInstanceOnFailure": {},
      "snsTopicArn": {},
      "dateCreated": {},
      "dateUpdated": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "instanceMetadataOptions": {
        "httpTokens": {},
        "httpPutResponseHopLimit": {}
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "distributionConfiguration": {
      "arn": {},
      "name": {},
      "description": {},
      "distributions": {},
      "timeoutMinutes": {},
      "dateCreated": {},
      "dateUpdated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "dateCreated": {},
    "outputResources": {
      "amis": {},
      "containers": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "buildType": {},
    "imageSource": {},
    "scanState": {
      "status": {},
      "reason": {}
    },
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
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

> 485 Response

```json
null
```

<h3 id="getimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImageResponse](#schemagetimageresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImagePipeline

<a id="opIdGetImagePipeline"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetImagePipeline#imagePipelineArn?imagePipelineArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetImagePipeline#imagePipelineArn`

Gets an image pipeline.

<h3 id="getimagepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imagePipelineArn|query|string|true|The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.|
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
  "requestId": {},
  "imagePipeline": {
    "arn": {},
    "name": {},
    "description": {},
    "platform": {},
    "enhancedImageMetadataEnabled": {},
    "imageRecipeArn": {},
    "containerRecipeArn": {},
    "infrastructureConfigurationArn": {},
    "distributionConfigurationArn": {},
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "schedule": {
      "scheduleExpression": {},
      "timezone": {},
      "pipelineExecutionStartCondition": {}
    },
    "status": {},
    "dateCreated": {},
    "dateUpdated": {},
    "dateLastRun": {},
    "dateNextRun": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
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

> 485 Response

```json
null
```

<h3 id="getimagepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImagePipelineResponse](#schemagetimagepipelineresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImagePolicy

<a id="opIdGetImagePolicy"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetImagePolicy#imageArn?imageArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetImagePolicy#imageArn`

Gets an image policy.

<h3 id="getimagepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageArn|query|string|true|The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.|
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
  "requestId": {},
  "policy": {}
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

<h3 id="getimagepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImagePolicyResponse](#schemagetimagepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImageRecipe

<a id="opIdGetImageRecipe"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetImageRecipe#imageRecipeArn?imageRecipeArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetImageRecipe#imageRecipeArn`

Gets an image recipe.

<h3 id="getimagerecipe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.|
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
  "requestId": {},
  "imageRecipe": {
    "arn": {},
    "type": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "parentImage": {},
    "blockDeviceMappings": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "additionalInstanceConfiguration": {
      "systemsManagerAgent": {
        "uninstallAfterBuild": {}
      },
      "userDataOverride": {}
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

> 485 Response

```json
null
```

<h3 id="getimagerecipe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImageRecipeResponse](#schemagetimagereciperesponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetImageRecipePolicy

<a id="opIdGetImageRecipePolicy"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetImageRecipePolicy#imageRecipeArn?imageRecipeArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetImageRecipePolicy#imageRecipeArn`

Gets an image recipe policy.

<h3 id="getimagerecipepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageRecipeArn|query|string|true|The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.|
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
  "requestId": {},
  "policy": {}
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

<h3 id="getimagerecipepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetImageRecipePolicyResponse](#schemagetimagerecipepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetInfrastructureConfiguration

<a id="opIdGetInfrastructureConfiguration"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetInfrastructureConfiguration#infrastructureConfigurationArn?infrastructureConfigurationArn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetInfrastructureConfiguration#infrastructureConfigurationArn`

Gets an infrastructure configuration.

<h3 id="getinfrastructureconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|infrastructureConfigurationArn|query|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.|
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
  "requestId": {},
  "infrastructureConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "instanceTypes": {},
    "instanceProfileName": {},
    "securityGroupIds": {},
    "subnetId": {},
    "logging": {
      "s3Logs": {
        "s3BucketName": {},
        "s3KeyPrefix": {}
      }
    },
    "keyPair": {},
    "terminateInstanceOnFailure": {},
    "snsTopicArn": {},
    "dateCreated": {},
    "dateUpdated": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceMetadataOptions": {
      "httpTokens": {},
      "httpPutResponseHopLimit": {}
    },
    "tags": {
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

<h3 id="getinfrastructureconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetInfrastructureConfigurationResponse](#schemagetinfrastructureconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkflowExecution

<a id="opIdGetWorkflowExecution"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetWorkflowExecution#workflowExecutionId?workflowExecutionId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetWorkflowExecution#workflowExecutionId`

Get the runtime information that was logged for a specific runtime instance of the workflow.

<h3 id="getworkflowexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowExecutionId|query|string|true|Use the unique identifier for a runtime instance of the workflow to get runtime details.|
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
  "requestId": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "type": {},
  "status": {},
  "message": {},
  "totalStepCount": {},
  "totalStepsSucceeded": {},
  "totalStepsFailed": {},
  "totalStepsSkipped": {},
  "startTime": {},
  "endTime": {}
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

<h3 id="getworkflowexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkflowExecutionResponse](#schemagetworkflowexecutionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetWorkflowStepExecution

<a id="opIdGetWorkflowStepExecution"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/GetWorkflowStepExecution#stepExecutionId?stepExecutionId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /GetWorkflowStepExecution#stepExecutionId`

Get the runtime information that was logged for a specific runtime instance of the workflow step.

<h3 id="getworkflowstepexecution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stepExecutionId|query|string|true|Use the unique identifier for a specific runtime instance of the workflow step to get runtime details for that step.|
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
  "requestId": {},
  "stepExecutionId": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "name": {},
  "description": {},
  "action": {},
  "status": {},
  "rollbackStatus": {},
  "message": {},
  "inputs": {},
  "outputs": {},
  "startTime": {},
  "endTime": {},
  "onFailure": {},
  "timeoutSeconds": {}
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

<h3 id="getworkflowstepexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetWorkflowStepExecutionResponse](#schemagetworkflowstepexecutionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|485|485|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportComponent

<a id="opIdImportComponent"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ImportComponent \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "semanticVersion": "string",
    "description": "string",
    "changeDescription": "string",
    "type": "BUILD",
    "format": "SHELL",
    "platform": "Windows",
    "data": "string",
    "uri": "string",
    "kmsKeyId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /ImportComponent`

Imports a component and transforms its data into a component document.

> Body parameter

```json
{
  "name": "string",
  "semanticVersion": "string",
  "description": "string",
  "changeDescription": "string",
  "type": "BUILD",
  "format": "SHELL",
  "platform": "Windows",
  "data": "string",
  "uri": "string",
  "kmsKeyId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="importcomponent-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the component.|
|» semanticVersion|body|string|true|<p>The semantic version of the component. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>|
|» description|body|string|false|The description of the component. Describes the contents of the component.|
|» changeDescription|body|string|false|The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of this component.|
|» type|body|string|true|The type of the component denotes whether the component is used to build the image, or only to test it.|
|» format|body|string|true|The format of the resource that you want to import as a component.|
|» platform|body|string|true|The platform of the component.|
|» data|body|string|false|The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.|
|» uri|body|string|false|The uri of the component. Must be an Amazon S3 URL and the requester must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.|
|» kmsKeyId|body|string|false|The ID of the KMS key that should be used to encrypt this component.|
|» tags|body|object|false|The tags of the component.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|The idempotency token of the component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|BUILD|
|» type|TEST|
|» format|SHELL|
|» platform|Windows|
|» platform|Linux|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "componentBuildVersionArn": {}
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

<h3 id="importcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportComponentResponse](#schemaimportcomponentresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|InvalidVersionNumberException|[InvalidVersionNumberException](#schemainvalidversionnumberexception)|
|488|488|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|489|489|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ImportVmImage

<a id="opIdImportVmImage"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ImportVmImage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "string",
    "semanticVersion": "string",
    "description": "string",
    "platform": "Windows",
    "osVersion": "string",
    "vmImportTaskId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "clientToken": "string"
  }'
```

`PUT /ImportVmImage`

<p>When you export your virtual machine (VM) from its virtualization environment, that process creates a set of one or more disk container files that act as snapshots of your VM’s environment, settings, and data. The Amazon EC2 API <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a> action uses those files to import your VM and create an AMI. To import using the CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a> </p> <p>You can reference the task ID from the VM import to pull in the AMI that the import created as the base image for your Image Builder recipe.</p>

> Body parameter

```json
{
  "name": "string",
  "semanticVersion": "string",
  "description": "string",
  "platform": "Windows",
  "osVersion": "string",
  "vmImportTaskId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": "string"
}
```

<h3 id="importvmimage-parameters">Parameters</h3>

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
|» name|body|string|true|The name of the base image that is created by the import process.|
|» semanticVersion|body|string|true|<p>The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>|
|» description|body|string|false|The description for the base image that is created by the import process.|
|» platform|body|string|true|The operating system platform for the imported VM.|
|» osVersion|body|string|false|The operating system version for the imported VM.|
|» vmImportTaskId|body|string|true|The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull in the AMI that is created from the VM source as the base image for your recipe.|
|» tags|body|object|false|Tags that are attached to the import resources.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» clientToken|body|string|true|Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» platform|Windows|
|» platform|Linux|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageArn": {},
  "clientToken": {}
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

<h3 id="importvmimage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ImportVmImageResponse](#schemaimportvmimageresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponentBuildVersions

<a id="opIdListComponentBuildVersions"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListComponentBuildVersions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "componentVersionArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListComponentBuildVersions`

<p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

> Body parameter

```json
{
  "componentVersionArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listcomponentbuildversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» componentVersionArn|body|string|true|The component version Amazon Resource Name (ARN) whose versions you want to list.|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "componentSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listcomponentbuildversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentBuildVersionsResponse](#schemalistcomponentbuildversionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListComponents

<a id="opIdListComponents"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListComponents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "owner": "Self",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "byName": true,
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListComponents`

<p>Returns the list of components that can be filtered by name, or by using the listed <code>filters</code> to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</p> </note>

> Body parameter

```json
{
  "owner": "Self",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "byName": true,
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» owner|body|string|false|Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, third party components, or components that other accounts have shared with you.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>supportedOsVersion</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>|
|» byName|body|boolean|false|Returns the list of components for the specified name.|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» owner|Self|
|» owner|Shared|
|» owner|Amazon|
|» owner|ThirdParty|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "componentVersionList": {},
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

> 486 Response

```json
null
```

<h3 id="listcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListComponentsResponse](#schemalistcomponentsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListContainerRecipes

<a id="opIdListContainerRecipes"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListContainerRecipes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "owner": "Self",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListContainerRecipes`

Returns a list of container recipes.

> Body parameter

```json
{
  "owner": "Self",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listcontainerrecipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» owner|body|string|false|Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>containerType</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» owner|Self|
|» owner|Shared|
|» owner|Amazon|
|» owner|ThirdParty|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "containerRecipeSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listcontainerrecipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListContainerRecipesResponse](#schemalistcontainerrecipesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDistributionConfigurations

<a id="opIdListDistributionConfigurations"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListDistributionConfigurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListDistributionConfigurations`

Returns a list of distribution configurations.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listdistributionconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filters|body|[[Filter](#schemafilter)]|false|You can filter on <code>name</code> to streamline results.|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "distributionConfigurationSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listdistributionconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDistributionConfigurationsResponse](#schemalistdistributionconfigurationsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImageBuildVersions

<a id="opIdListImageBuildVersions"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImageBuildVersions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageVersionArn": "string",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImageBuildVersions`

Returns a list of image build versions.

> Body parameter

```json
{
  "imageVersionArn": "string",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagebuildversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» imageVersionArn|body|string|true|The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listimagebuildversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImageBuildVersionsResponse](#schemalistimagebuildversionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImagePackages

<a id="opIdListImagePackages"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImagePackages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageBuildVersionArn": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImagePackages`

List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.

> Body parameter

```json
{
  "imageBuildVersionArn": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagepackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» imageBuildVersionArn|body|string|true|Filter results for the ListImagePackages request by the Image Build Version ARN|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imagePackageList": {},
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="listimagepackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImagePackagesResponse](#schemalistimagepackagesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImagePipelineImages

<a id="opIdListImagePipelineImages"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImagePipelineImages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imagePipelineArn": "string",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImagePipelineImages`

Returns a list of images created by the specified pipeline.

> Body parameter

```json
{
  "imagePipelineArn": "string",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagepipelineimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» imagePipelineArn|body|string|true|The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageSummaryList": {},
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

> 486 Response

```json
null
```

> 487 Response

```json
null
```

<h3 id="listimagepipelineimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImagePipelineImagesResponse](#schemalistimagepipelineimagesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImagePipelines

<a id="opIdListImagePipelines"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImagePipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImagePipelines`

Returns a list of image pipelines.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagepipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>description</code> </p> </li> <li> <p> <code>distributionConfigurationArn</code> </p> </li> <li> <p> <code>imageRecipeArn</code> </p> </li> <li> <p> <code>infrastructureConfigurationArn</code> </p> </li> <li> <p> <code>name</code> </p> </li> <li> <p> <code>status</code> </p> </li> </ul>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imagePipelineList": {},
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

> 486 Response

```json
null
```

<h3 id="listimagepipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImagePipelinesResponse](#schemalistimagepipelinesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImageRecipes

<a id="opIdListImageRecipes"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImageRecipes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "owner": "Self",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImageRecipes`

Returns a list of image recipes.

> Body parameter

```json
{
  "owner": "Self",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagerecipes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» owner|body|string|false|The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>parentImage</code> </p> </li> <li> <p> <code>platform</code> </p> </li> </ul>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» owner|Self|
|» owner|Shared|
|» owner|Amazon|
|» owner|ThirdParty|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageRecipeSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listimagerecipes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImageRecipesResponse](#schemalistimagerecipesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImageScanFindingAggregations

<a id="opIdListImageScanFindingAggregations"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImageScanFindingAggregations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filter": {
      "name": {},
      "values": {}
    },
    "nextToken": "string"
  }'
```

`POST /ListImageScanFindingAggregations`

<p>Returns a list of image scan aggregations for your account. You can filter by the type of key that Image Builder uses to group results. For example, if you want to get a list of findings by severity level for one of your pipelines, you might specify your pipeline with the <code>imagePipelineArn</code> filter. If you don't specify a filter, Image Builder returns an aggregation for your account.</p> <p>To streamline results, you can use the following filters in your request:</p> <ul> <li> <p> <code>accountId</code> </p> </li> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> </ul>

> Body parameter

```json
{
  "filter": {
    "name": {},
    "values": {}
  },
  "nextToken": "string"
}
```

<h3 id="listimagescanfindingaggregations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filter|body|object|false|A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.|
|» » name|body|object|false|none|
|» » values|body|object|false|none|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "aggregationType": {},
  "responses": {},
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

> 486 Response

```json
null
```

<h3 id="listimagescanfindingaggregations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImageScanFindingAggregationsResponse](#schemalistimagescanfindingaggregationsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImageScanFindings

<a id="opIdListImageScanFindings"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImageScanFindings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListImageScanFindings`

Returns a list of image scan findings for your account.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listimagescanfindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filters|body|[[ImageScanFindingsFilter](#schemaimagescanfindingsfilter)]|false|<p>An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:</p> <ul> <li> <p> <code>imageBuildVersionArn</code> </p> </li> <li> <p> <code>imagePipelineArn</code> </p> </li> <li> <p> <code>vulnerabilityId</code> </p> </li> <li> <p> <code>severity</code> </p> </li> </ul> <p>If you don't request a filter, then all findings in your account are listed.</p>|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "findings": {},
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

> 486 Response

```json
null
```

<h3 id="listimagescanfindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImageScanFindingsResponse](#schemalistimagescanfindingsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListImages

<a id="opIdListImages"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListImages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "owner": "Self",
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "byName": true,
    "maxResults": 1,
    "nextToken": "string",
    "includeDeprecated": true
  }'
```

`POST /ListImages`

Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.

> Body parameter

```json
{
  "owner": "Self",
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "byName": true,
  "maxResults": 1,
  "nextToken": "string",
  "includeDeprecated": true
}
```

<h3 id="listimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» owner|body|string|false|The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers.|
|» filters|body|[[Filter](#schemafilter)]|false|<p>Use the following filters to streamline results:</p> <ul> <li> <p> <code>name</code> </p> </li> <li> <p> <code>osVersion</code> </p> </li> <li> <p> <code>platform</code> </p> </li> <li> <p> <code>type</code> </p> </li> <li> <p> <code>version</code> </p> </li> </ul>|
|» byName|body|boolean|false|Requests a list of images with a specific recipe name.|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|
|» includeDeprecated|body|boolean|false|Includes deprecated images in the response list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» owner|Self|
|» owner|Shared|
|» owner|Amazon|
|» owner|ThirdParty|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageVersionList": {},
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

> 486 Response

```json
null
```

<h3 id="listimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListImagesResponse](#schemalistimagesresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListInfrastructureConfigurations

<a id="opIdListInfrastructureConfigurations"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListInfrastructureConfigurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filters": [
      {
        "name": {},
        "values": {}
      }
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /ListInfrastructureConfigurations`

Returns a list of infrastructure configurations.

> Body parameter

```json
{
  "filters": [
    {
      "name": {},
      "values": {}
    }
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listinfrastructureconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» filters|body|[[Filter](#schemafilter)]|false|You can filter on <code>name</code> to streamline results.|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "infrastructureConfigurationSummaryList": {},
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

> 486 Response

```json
null
```

<h3 id="listinfrastructureconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListInfrastructureConfigurationsResponse](#schemalistinfrastructureconfigurationsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

Returns the list of tags for the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.|
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
  "tags": {
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

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resourceArn}`

Adds a tag to a resource.

> Body parameter

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource that you want to tag.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|The tags to apply to the resource.|
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
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkflowExecutions

<a id="opIdListWorkflowExecutions"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListWorkflowExecutions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string",
    "imageBuildVersionArn": "string"
  }'
```

`POST /ListWorkflowExecutions`

Returns a list of workflow runtime instance metadata objects for a specific image build version.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string",
  "imageBuildVersionArn": "string"
}
```

<h3 id="listworkflowexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|
|» imageBuildVersionArn|body|string|true|List all workflow runtime instances for the specified image build version resource ARN.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "workflowExecutions": {},
  "imageBuildVersionArn": {},
  "message": {},
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

> 486 Response

```json
null
```

<h3 id="listworkflowexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkflowExecutionsResponse](#schemalistworkflowexecutionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListWorkflowStepExecutions

<a id="opIdListWorkflowStepExecutions"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/ListWorkflowStepExecutions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string",
    "workflowExecutionId": "string"
  }'
```

`POST /ListWorkflowStepExecutions`

Shows runtime data for each step in a runtime instance of the workflow that you specify in the request.

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string",
  "workflowExecutionId": "string"
}
```

<h3 id="listworkflowstepexecutions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|string|false|Pagination limit|
|nextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» maxResults|body|integer|false|The maximum items to return in a request.|
|» nextToken|body|string|false|A token to specify where to start paginating. This is the NextToken from a previously truncated response.|
|» workflowExecutionId|body|string|true|The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "steps": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "message": {},
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

> 486 Response

```json
null
```

<h3 id="listworkflowstepexecutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListWorkflowStepExecutionsResponse](#schemalistworkflowstepexecutionsresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutComponentPolicy

<a id="opIdPutComponentPolicy"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/PutComponentPolicy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "componentArn": "string",
    "policy": "string"
  }'
```

`PUT /PutComponentPolicy`

Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

> Body parameter

```json
{
  "componentArn": "string",
  "policy": "string"
}
```

<h3 id="putcomponentpolicy-parameters">Parameters</h3>

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
|» componentArn|body|string|true|The Amazon Resource Name (ARN) of the component that this policy should be applied to.|
|» policy|body|string|true|The policy to apply.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "componentArn": {}
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

<h3 id="putcomponentpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutComponentPolicyResponse](#schemaputcomponentpolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutContainerRecipePolicy

<a id="opIdPutContainerRecipePolicy"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/PutContainerRecipePolicy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "containerRecipeArn": "string",
    "policy": "string"
  }'
```

`PUT /PutContainerRecipePolicy`

Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com//ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com//ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.

> Body parameter

```json
{
  "containerRecipeArn": "string",
  "policy": "string"
}
```

<h3 id="putcontainerrecipepolicy-parameters">Parameters</h3>

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
|» containerRecipeArn|body|string|true|The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.|
|» policy|body|string|true|The policy to apply to the container recipe.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "containerRecipeArn": {}
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

<h3 id="putcontainerrecipepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutContainerRecipePolicyResponse](#schemaputcontainerrecipepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImagePolicy

<a id="opIdPutImagePolicy"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/PutImagePolicy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageArn": "string",
    "policy": "string"
  }'
```

`PUT /PutImagePolicy`

Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

> Body parameter

```json
{
  "imageArn": "string",
  "policy": "string"
}
```

<h3 id="putimagepolicy-parameters">Parameters</h3>

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
|» imageArn|body|string|true|The Amazon Resource Name (ARN) of the image that this policy should be applied to.|
|» policy|body|string|true|The policy to apply.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageArn": {}
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

<h3 id="putimagepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutImagePolicyResponse](#schemaputimagepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutImageRecipePolicy

<a id="opIdPutImageRecipePolicy"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/PutImageRecipePolicy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imageRecipeArn": "string",
    "policy": "string"
  }'
```

`PUT /PutImageRecipePolicy`

Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.

> Body parameter

```json
{
  "imageRecipeArn": "string",
  "policy": "string"
}
```

<h3 id="putimagerecipepolicy-parameters">Parameters</h3>

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
|» imageRecipeArn|body|string|true|The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.|
|» policy|body|string|true|The policy to apply.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "imageRecipeArn": {}
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

<h3 id="putimagerecipepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutImageRecipePolicyResponse](#schemaputimagerecipepolicyresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|InvalidParameterValueException|[InvalidParameterValueException](#schemainvalidparametervalueexception)|
|485|485|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartImagePipelineExecution

<a id="opIdStartImagePipelineExecution"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/StartImagePipelineExecution \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imagePipelineArn": "string",
    "clientToken": "string"
  }'
```

`PUT /StartImagePipelineExecution`

Manually triggers a pipeline to create an image.

> Body parameter

```json
{
  "imagePipelineArn": "string",
  "clientToken": "string"
}
```

<h3 id="startimagepipelineexecution-parameters">Parameters</h3>

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
|» imagePipelineArn|body|string|true|The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
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

<h3 id="startimagepipelineexecution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartImagePipelineExecutionResponse](#schemastartimagepipelineexecutionresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|486|486|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|487|487|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|488|488|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://imagebuilder.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

Removes a tag from a resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|The Amazon Resource Name (ARN) of the resource that you want to untag.|
|tagKeys|query|[[TagKey](#schematagkey)]|true|The tag keys to remove from the resource.|
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
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|InvalidParameterException|[InvalidParameterException](#schemainvalidparameterexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateDistributionConfiguration

<a id="opIdUpdateDistributionConfiguration"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/UpdateDistributionConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "distributionConfigurationArn": "string",
    "description": "string",
    "distributions": [
      {
        "region": {},
        "amiDistributionConfiguration": {
          "name": {},
          "description": {},
          "targetAccountIds": {},
          "amiTags": {
            "property1": "string",
            "property2": "string"
          },
          "kmsKeyId": {},
          "launchPermission": {
            "userIds": {},
            "userGroups": {},
            "organizationArns": {},
            "organizationalUnitArns": {}
          }
        },
        "containerDistributionConfiguration": {
          "description": {},
          "containerTags": {},
          "targetRepository": {
            "service": {},
            "repositoryName": {}
          }
        },
        "licenseConfigurationArns": {},
        "launchTemplateConfigurations": {},
        "s3ExportConfiguration": {
          "roleName": {},
          "diskImageFormat": {},
          "s3Bucket": {},
          "s3Prefix": {}
        },
        "fastLaunchConfigurations": {}
      }
    ],
    "clientToken": "string"
  }'
```

`PUT /UpdateDistributionConfiguration`

Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.

> Body parameter

```json
{
  "distributionConfigurationArn": "string",
  "description": "string",
  "distributions": [
    {
      "region": {},
      "amiDistributionConfiguration": {
        "name": {},
        "description": {},
        "targetAccountIds": {},
        "amiTags": {
          "property1": "string",
          "property2": "string"
        },
        "kmsKeyId": {},
        "launchPermission": {
          "userIds": {},
          "userGroups": {},
          "organizationArns": {},
          "organizationalUnitArns": {}
        }
      },
      "containerDistributionConfiguration": {
        "description": {},
        "containerTags": {},
        "targetRepository": {
          "service": {},
          "repositoryName": {}
        }
      },
      "licenseConfigurationArns": {},
      "launchTemplateConfigurations": {},
      "s3ExportConfiguration": {
        "roleName": {},
        "diskImageFormat": {},
        "s3Bucket": {},
        "s3Prefix": {}
      },
      "fastLaunchConfigurations": {}
    }
  ],
  "clientToken": "string"
}
```

<h3 id="updatedistributionconfiguration-parameters">Parameters</h3>

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
|» distributionConfigurationArn|body|string|true|The Amazon Resource Name (ARN) of the distribution configuration that you want to update.|
|» description|body|string|false|The description of the distribution configuration.|
|» distributions|body|[[Distribution](#schemadistribution)]|true|The distributions of the distribution configuration.|
|» clientToken|body|string|true|The idempotency token of the distribution configuration.|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "distributionConfigurationArn": {}
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

<h3 id="updatedistributionconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateDistributionConfigurationResponse](#schemaupdatedistributionconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|488|488|InvalidParameterCombinationException|[InvalidParameterCombinationException](#schemainvalidparametercombinationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateImagePipeline

<a id="opIdUpdateImagePipeline"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/UpdateImagePipeline \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "imagePipelineArn": "string",
    "description": "string",
    "imageRecipeArn": "string",
    "containerRecipeArn": "string",
    "infrastructureConfigurationArn": "string",
    "distributionConfigurationArn": "string",
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "enhancedImageMetadataEnabled": true,
    "schedule": {
      "scheduleExpression": {},
      "timezone": {},
      "pipelineExecutionStartCondition": {}
    },
    "status": "DISABLED",
    "clientToken": "string",
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }'
```

`PUT /UpdateImagePipeline`

<p>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>

> Body parameter

```json
{
  "imagePipelineArn": "string",
  "description": "string",
  "imageRecipeArn": "string",
  "containerRecipeArn": "string",
  "infrastructureConfigurationArn": "string",
  "distributionConfigurationArn": "string",
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": true,
  "schedule": {
    "scheduleExpression": {},
    "timezone": {},
    "pipelineExecutionStartCondition": {}
  },
  "status": "DISABLED",
  "clientToken": "string",
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

<h3 id="updateimagepipeline-parameters">Parameters</h3>

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
|» imagePipelineArn|body|string|true|The Amazon Resource Name (ARN) of the image pipeline that you want to update.|
|» description|body|string|false|The description of the image pipeline.|
|» imageRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.|
|» containerRecipeArn|body|string|false|The Amazon Resource Name (ARN) of the container pipeline to update.|
|» infrastructureConfigurationArn|body|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images that this image pipeline has updated.|
|» distributionConfigurationArn|body|string|false|The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images that this image pipeline has updated.|
|» imageTestsConfiguration|body|object|false|Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.|
|» » imageTestsEnabled|body|object|false|none|
|» » timeoutMinutes|body|object|false|none|
|» enhancedImageMetadataEnabled|body|boolean|false|Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.|
|» schedule|body|object|false|A schedule configures how often and when a pipeline will automatically create a new image.|
|» » scheduleExpression|body|object|false|none|
|» » timezone|body|object|false|none|
|» » pipelineExecutionStartCondition|body|object|false|none|
|» status|body|string|false|The status of the image pipeline.|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|
|» imageScanningConfiguration|body|object|false|Contains settings for Image Builder image resource and container image scans.|
|» » imageScanningEnabled|body|object|false|none|
|» » ecrConfiguration|body|object|false|none|
|» » » repositoryName|body|object|false|none|
|» » » containerTags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|DISABLED|
|» status|ENABLED|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "imagePipelineArn": {}
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

<h3 id="updateimagepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateImagePipelineResponse](#schemaupdateimagepipelineresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateInfrastructureConfiguration

<a id="opIdUpdateInfrastructureConfiguration"></a>

> Code samples

```bash
curl https://imagebuilder.us-east-1.amazonaws.com/UpdateInfrastructureConfiguration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "infrastructureConfigurationArn": "string",
    "description": "string",
    "instanceTypes": [
      "string"
    ],
    "instanceProfileName": "string",
    "securityGroupIds": [
      "string"
    ],
    "subnetId": "string",
    "logging": {
      "s3Logs": {
        "s3BucketName": {},
        "s3KeyPrefix": {}
      }
    },
    "keyPair": "string",
    "terminateInstanceOnFailure": true,
    "snsTopicArn": "string",
    "clientToken": "string",
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceMetadataOptions": {
      "httpTokens": {},
      "httpPutResponseHopLimit": {}
    }
  }'
```

`PUT /UpdateInfrastructureConfiguration`

Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

> Body parameter

```json
{
  "infrastructureConfigurationArn": "string",
  "description": "string",
  "instanceTypes": [
    "string"
  ],
  "instanceProfileName": "string",
  "securityGroupIds": [
    "string"
  ],
  "subnetId": "string",
  "logging": {
    "s3Logs": {
      "s3BucketName": {},
      "s3KeyPrefix": {}
    }
  },
  "keyPair": "string",
  "terminateInstanceOnFailure": true,
  "snsTopicArn": "string",
  "clientToken": "string",
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceMetadataOptions": {
    "httpTokens": {},
    "httpPutResponseHopLimit": {}
  }
}
```

<h3 id="updateinfrastructureconfiguration-parameters">Parameters</h3>

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
|» infrastructureConfigurationArn|body|string|true|The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.|
|» description|body|string|false|The description of the infrastructure configuration.|
|» instanceTypes|body|[[InstanceType](#schemainstancetype)]|false|The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability.|
|» instanceProfileName|body|string|true|The instance profile to associate with the instance used to customize your Amazon EC2 AMI.|
|» securityGroupIds|body|[[NonEmptyString](#schemanonemptystring)]|false|The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.|
|» subnetId|body|string|false|The subnet ID to place the instance used to customize your Amazon EC2 AMI in.|
|» logging|body|object|false|Logging configuration defines where Image Builder uploads your logs.|
|» » s3Logs|body|object|false|none|
|» » » s3BucketName|body|object|false|none|
|» » » s3KeyPrefix|body|object|false|none|
|» keyPair|body|string|false|The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.|
|» terminateInstanceOnFailure|body|boolean|false|The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails.|
|» snsTopicArn|body|string|false|<p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p> <note> <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys from other accounts. The key that is used to encrypt the SNS topic must reside in the account that the Image Builder service runs under.</p> </note>|
|» clientToken|body|string|true|The idempotency token used to make this request idempotent.|
|» resourceTags|body|object|false|The tags attached to the resource created by Image Builder.|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» instanceMetadataOptions|body|object|false|The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.|
|» » httpTokens|body|object|false|none|
|» » httpPutResponseHopLimit|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "requestId": {},
  "clientToken": {},
  "infrastructureConfigurationArn": {}
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

<h3 id="updateinfrastructureconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateInfrastructureConfigurationResponse](#schemaupdateinfrastructureconfigurationresponse)|
|480|480|ServiceException|[ServiceException](#schemaserviceexception)|
|481|481|ClientException|[ClientException](#schemaclientexception)|
|482|482|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|483|483|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|484|484|IdempotentParameterMismatchException|[IdempotentParameterMismatchException](#schemaidempotentparametermismatchexception)|
|485|485|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|486|486|CallRateLimitExceededException|[CallRateLimitExceededException](#schemacallratelimitexceededexception)|
|487|487|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelImageCreationResponse">CancelImageCreationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelimagecreationresponse"></a>
<a id="schema_CancelImageCreationResponse"></a>
<a id="tocScancelimagecreationresponse"></a>
<a id="tocscancelimagecreationresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|

<h2 id="tocS_ServiceException">ServiceException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceexception"></a>
<a id="schema_ServiceException"></a>
<a id="tocSserviceexception"></a>
<a id="tocsserviceexception"></a>

```json
null
```

<h2 id="tocS_ClientException">ClientException</h2>
<!-- backwards compatibility -->
<a id="schemaclientexception"></a>
<a id="schema_ClientException"></a>
<a id="tocSclientexception"></a>
<a id="tocsclientexception"></a>

```json
null
```

<h2 id="tocS_ServiceUnavailableException">ServiceUnavailableException</h2>
<!-- backwards compatibility -->
<a id="schemaserviceunavailableexception"></a>
<a id="schema_ServiceUnavailableException"></a>
<a id="tocSserviceunavailableexception"></a>
<a id="tocsserviceunavailableexception"></a>

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

<h2 id="tocS_IdempotentParameterMismatchException">IdempotentParameterMismatchException</h2>
<!-- backwards compatibility -->
<a id="schemaidempotentparametermismatchexception"></a>
<a id="schema_IdempotentParameterMismatchException"></a>
<a id="tocSidempotentparametermismatchexception"></a>
<a id="tocsidempotentparametermismatchexception"></a>

```json
null
```

<h2 id="tocS_ForbiddenException">ForbiddenException</h2>
<!-- backwards compatibility -->
<a id="schemaforbiddenexception"></a>
<a id="schema_ForbiddenException"></a>
<a id="tocSforbiddenexception"></a>
<a id="tocsforbiddenexception"></a>

```json
null
```

<h2 id="tocS_CallRateLimitExceededException">CallRateLimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemacallratelimitexceededexception"></a>
<a id="schema_CallRateLimitExceededException"></a>
<a id="tocScallratelimitexceededexception"></a>
<a id="tocscallratelimitexceededexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_CreateComponentResponse">CreateComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentresponse"></a>
<a id="schema_CreateComponentResponse"></a>
<a id="tocScreatecomponentresponse"></a>
<a id="tocscreatecomponentresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "componentBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|componentBuildVersionArn|object|false|none|none|

<h2 id="tocS_OsVersion">OsVersion</h2>
<!-- backwards compatibility -->
<a id="schemaosversion"></a>
<a id="schema_OsVersion"></a>
<a id="tocSosversion"></a>
<a id="tocsosversion"></a>

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

<h2 id="tocS_InvalidVersionNumberException">InvalidVersionNumberException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidversionnumberexception"></a>
<a id="schema_InvalidVersionNumberException"></a>
<a id="tocSinvalidversionnumberexception"></a>
<a id="tocsinvalidversionnumberexception"></a>

```json
null
```

<h2 id="tocS_InvalidParameterCombinationException">InvalidParameterCombinationException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametercombinationexception"></a>
<a id="schema_InvalidParameterCombinationException"></a>
<a id="tocSinvalidparametercombinationexception"></a>
<a id="tocsinvalidparametercombinationexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateContainerRecipeResponse">CreateContainerRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerreciperesponse"></a>
<a id="schema_CreateContainerRecipeResponse"></a>
<a id="tocScreatecontainerreciperesponse"></a>
<a id="tocscreatecontainerreciperesponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "containerRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|containerRecipeArn|object|false|none|none|

<h2 id="tocS_ComponentConfiguration">ComponentConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfiguration"></a>
<a id="schema_ComponentConfiguration"></a>
<a id="tocScomponentconfiguration"></a>
<a id="tocscomponentconfiguration"></a>

```json
{
  "componentArn": {},
  "parameters": {}
}
```

Configuration details of the component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentArn|object|true|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_InstanceBlockDeviceMappings">InstanceBlockDeviceMappings</h2>
<!-- backwards compatibility -->
<a id="schemainstanceblockdevicemappings"></a>
<a id="schema_InstanceBlockDeviceMappings"></a>
<a id="tocSinstanceblockdevicemappings"></a>
<a id="tocsinstanceblockdevicemappings"></a>

```json
[
  {
    "deviceName": {},
    "ebs": {
      "encrypted": {},
      "deleteOnTermination": {},
      "iops": {},
      "kmsKeyId": {},
      "snapshotId": {},
      "volumeSize": {},
      "volumeType": {},
      "throughput": {}
    },
    "virtualName": {},
    "noDevice": {}
  }
]
```

<h2 id="tocS_ContainerRepositoryService">ContainerRepositoryService</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrepositoryservice"></a>
<a id="schema_ContainerRepositoryService"></a>
<a id="tocScontainerrepositoryservice"></a>
<a id="tocscontainerrepositoryservice"></a>

```json
"ECR"
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

<h2 id="tocS_CreateDistributionConfigurationResponse">CreateDistributionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionconfigurationresponse"></a>
<a id="schema_CreateDistributionConfigurationResponse"></a>
<a id="tocScreatedistributionconfigurationresponse"></a>
<a id="tocscreatedistributionconfigurationresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "distributionConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|distributionConfigurationArn|object|false|none|none|

<h2 id="tocS_Distribution">Distribution</h2>
<!-- backwards compatibility -->
<a id="schemadistribution"></a>
<a id="schema_Distribution"></a>
<a id="tocSdistribution"></a>
<a id="tocsdistribution"></a>

```json
{
  "region": {},
  "amiDistributionConfiguration": {
    "name": {},
    "description": {},
    "targetAccountIds": {},
    "amiTags": {
      "property1": "string",
      "property2": "string"
    },
    "kmsKeyId": {},
    "launchPermission": {
      "userIds": {},
      "userGroups": {},
      "organizationArns": {},
      "organizationalUnitArns": {}
    }
  },
  "containerDistributionConfiguration": {
    "description": {},
    "containerTags": {},
    "targetRepository": {
      "service": {},
      "repositoryName": {}
    }
  },
  "licenseConfigurationArns": {},
  "launchTemplateConfigurations": {},
  "s3ExportConfiguration": {
    "roleName": {},
    "diskImageFormat": {},
    "s3Bucket": {},
    "s3Prefix": {}
  },
  "fastLaunchConfigurations": {}
}
```

Defines the settings for a specific Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|object|true|none|none|
|amiDistributionConfiguration|object|false|none|none|
|containerDistributionConfiguration|object|false|none|none|
|licenseConfigurationArns|object|false|none|none|
|launchTemplateConfigurations|object|false|none|none|
|s3ExportConfiguration|object|false|none|none|
|fastLaunchConfigurations|object|false|none|none|

<h2 id="tocS_CreateImageResponse">CreateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimageresponse"></a>
<a id="schema_CreateImageResponse"></a>
<a id="tocScreateimageresponse"></a>
<a id="tocscreateimageresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
```

<h2 id="tocS_ImageTestsTimeoutMinutes">ImageTestsTimeoutMinutes</h2>
<!-- backwards compatibility -->
<a id="schemaimageteststimeoutminutes"></a>
<a id="schema_ImageTestsTimeoutMinutes"></a>
<a id="tocSimageteststimeoutminutes"></a>
<a id="tocsimageteststimeoutminutes"></a>

```json
60
```

<h2 id="tocS_EcrConfiguration">EcrConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaecrconfiguration"></a>
<a id="schema_EcrConfiguration"></a>
<a id="tocSecrconfiguration"></a>
<a id="tocsecrconfiguration"></a>

```json
{
  "repositoryName": {},
  "containerTags": {}
}
```

Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryName|object|false|none|none|
|containerTags|object|false|none|none|

<h2 id="tocS_CreateImagePipelineResponse">CreateImagePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagepipelineresponse"></a>
<a id="schema_CreateImagePipelineResponse"></a>
<a id="tocScreateimagepipelineresponse"></a>
<a id="tocscreateimagepipelineresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imagePipelineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imagePipelineArn|object|false|none|none|

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_PipelineExecutionStartCondition">PipelineExecutionStartCondition</h2>
<!-- backwards compatibility -->
<a id="schemapipelineexecutionstartcondition"></a>
<a id="schema_PipelineExecutionStartCondition"></a>
<a id="tocSpipelineexecutionstartcondition"></a>
<a id="tocspipelineexecutionstartcondition"></a>

```json
"EXPRESSION_MATCH_ONLY"
```

<h2 id="tocS_CreateImageRecipeResponse">CreateImageRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagereciperesponse"></a>
<a id="schema_CreateImageRecipeResponse"></a>
<a id="tocScreateimagereciperesponse"></a>
<a id="tocscreateimagereciperesponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imageRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imageRecipeArn|object|false|none|none|

<h2 id="tocS_InstanceBlockDeviceMapping">InstanceBlockDeviceMapping</h2>
<!-- backwards compatibility -->
<a id="schemainstanceblockdevicemapping"></a>
<a id="schema_InstanceBlockDeviceMapping"></a>
<a id="tocSinstanceblockdevicemapping"></a>
<a id="tocsinstanceblockdevicemapping"></a>

```json
{
  "deviceName": {},
  "ebs": {
    "encrypted": {},
    "deleteOnTermination": {},
    "iops": {},
    "kmsKeyId": {},
    "snapshotId": {},
    "volumeSize": {},
    "volumeType": {},
    "throughput": {}
  },
  "virtualName": {},
  "noDevice": {}
}
```

Defines block device mappings for the instance used to configure your image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceName|object|false|none|none|
|ebs|object|false|none|none|
|virtualName|object|false|none|none|
|noDevice|object|false|none|none|

<h2 id="tocS_SystemsManagerAgent">SystemsManagerAgent</h2>
<!-- backwards compatibility -->
<a id="schemasystemsmanageragent"></a>
<a id="schema_SystemsManagerAgent"></a>
<a id="tocSsystemsmanageragent"></a>
<a id="tocssystemsmanageragent"></a>

```json
{
  "uninstallAfterBuild": {}
}
```

Contains settings for the Systems Manager agent on your build instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uninstallAfterBuild|object|false|none|none|

<h2 id="tocS_UserDataOverride">UserDataOverride</h2>
<!-- backwards compatibility -->
<a id="schemauserdataoverride"></a>
<a id="schema_UserDataOverride"></a>
<a id="tocSuserdataoverride"></a>
<a id="tocsuserdataoverride"></a>

```json
"string"
```

<h2 id="tocS_CreateInfrastructureConfigurationResponse">CreateInfrastructureConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateinfrastructureconfigurationresponse"></a>
<a id="schema_CreateInfrastructureConfigurationResponse"></a>
<a id="tocScreateinfrastructureconfigurationresponse"></a>
<a id="tocscreateinfrastructureconfigurationresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "infrastructureConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|infrastructureConfigurationArn|object|false|none|none|

<h2 id="tocS_InstanceType">InstanceType</h2>
<!-- backwards compatibility -->
<a id="schemainstancetype"></a>
<a id="schema_InstanceType"></a>
<a id="tocSinstancetype"></a>
<a id="tocsinstancetype"></a>

```json
"string"
```

<h2 id="tocS_S3Logs">S3Logs</h2>
<!-- backwards compatibility -->
<a id="schemas3logs"></a>
<a id="schema_S3Logs"></a>
<a id="tocSs3logs"></a>
<a id="tocss3logs"></a>

```json
{
  "s3BucketName": {},
  "s3KeyPrefix": {}
}
```

Amazon S3 logging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3BucketName|object|false|none|none|
|s3KeyPrefix|object|false|none|none|

<h2 id="tocS_HttpTokens">HttpTokens</h2>
<!-- backwards compatibility -->
<a id="schemahttptokens"></a>
<a id="schema_HttpTokens"></a>
<a id="tocShttptokens"></a>
<a id="tocshttptokens"></a>

```json
"string"
```

<h2 id="tocS_HttpPutResponseHopLimit">HttpPutResponseHopLimit</h2>
<!-- backwards compatibility -->
<a id="schemahttpputresponsehoplimit"></a>
<a id="schema_HttpPutResponseHopLimit"></a>
<a id="tocShttpputresponsehoplimit"></a>
<a id="tocshttpputresponsehoplimit"></a>

```json
1
```

<h2 id="tocS_DeleteComponentResponse">DeleteComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentresponse"></a>
<a id="schema_DeleteComponentResponse"></a>
<a id="tocSdeletecomponentresponse"></a>
<a id="tocsdeletecomponentresponse"></a>

```json
{
  "requestId": {},
  "componentBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|componentBuildVersionArn|object|false|none|none|

<h2 id="tocS_ResourceDependencyException">ResourceDependencyException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedependencyexception"></a>
<a id="schema_ResourceDependencyException"></a>
<a id="tocSresourcedependencyexception"></a>
<a id="tocsresourcedependencyexception"></a>

```json
null
```

<h2 id="tocS_DeleteContainerRecipeResponse">DeleteContainerRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerreciperesponse"></a>
<a id="schema_DeleteContainerRecipeResponse"></a>
<a id="tocSdeletecontainerreciperesponse"></a>
<a id="tocsdeletecontainerreciperesponse"></a>

```json
{
  "requestId": {},
  "containerRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|containerRecipeArn|object|false|none|none|

<h2 id="tocS_DeleteDistributionConfigurationResponse">DeleteDistributionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedistributionconfigurationresponse"></a>
<a id="schema_DeleteDistributionConfigurationResponse"></a>
<a id="tocSdeletedistributionconfigurationresponse"></a>
<a id="tocsdeletedistributionconfigurationresponse"></a>

```json
{
  "requestId": {},
  "distributionConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|distributionConfigurationArn|object|false|none|none|

<h2 id="tocS_DeleteImageResponse">DeleteImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimageresponse"></a>
<a id="schema_DeleteImageResponse"></a>
<a id="tocSdeleteimageresponse"></a>
<a id="tocsdeleteimageresponse"></a>

```json
{
  "requestId": {},
  "imageBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|

<h2 id="tocS_DeleteImagePipelineResponse">DeleteImagePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagepipelineresponse"></a>
<a id="schema_DeleteImagePipelineResponse"></a>
<a id="tocSdeleteimagepipelineresponse"></a>
<a id="tocsdeleteimagepipelineresponse"></a>

```json
{
  "requestId": {},
  "imagePipelineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imagePipelineArn|object|false|none|none|

<h2 id="tocS_DeleteImageRecipeResponse">DeleteImageRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagereciperesponse"></a>
<a id="schema_DeleteImageRecipeResponse"></a>
<a id="tocSdeleteimagereciperesponse"></a>
<a id="tocsdeleteimagereciperesponse"></a>

```json
{
  "requestId": {},
  "imageRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageRecipeArn|object|false|none|none|

<h2 id="tocS_DeleteInfrastructureConfigurationResponse">DeleteInfrastructureConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinfrastructureconfigurationresponse"></a>
<a id="schema_DeleteInfrastructureConfigurationResponse"></a>
<a id="tocSdeleteinfrastructureconfigurationresponse"></a>
<a id="tocsdeleteinfrastructureconfigurationresponse"></a>

```json
{
  "requestId": {},
  "infrastructureConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|infrastructureConfigurationArn|object|false|none|none|

<h2 id="tocS_GetComponentResponse">GetComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentresponse"></a>
<a id="schema_GetComponentResponse"></a>
<a id="tocSgetcomponentresponse"></a>
<a id="tocsgetcomponentresponse"></a>

```json
{
  "requestId": {},
  "component": {
    "arn": {},
    "name": {},
    "version": {},
    "description": {},
    "changeDescription": {},
    "type": {},
    "platform": {},
    "supportedOsVersions": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "parameters": {},
    "owner": {},
    "data": {},
    "kmsKeyId": {},
    "encrypted": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "obfuscate": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|component|object|false|none|none|

<h2 id="tocS_GetComponentPolicyResponse">GetComponentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentpolicyresponse"></a>
<a id="schema_GetComponentPolicyResponse"></a>
<a id="tocSgetcomponentpolicyresponse"></a>
<a id="tocsgetcomponentpolicyresponse"></a>

```json
{
  "requestId": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|policy|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_GetContainerRecipeResponse">GetContainerRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerreciperesponse"></a>
<a id="schema_GetContainerRecipeResponse"></a>
<a id="tocSgetcontainerreciperesponse"></a>
<a id="tocsgetcontainerreciperesponse"></a>

```json
{
  "requestId": {},
  "containerRecipe": {
    "arn": {},
    "containerType": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "instanceConfiguration": {
      "image": {},
      "blockDeviceMappings": {}
    },
    "dockerfileTemplateData": {},
    "kmsKeyId": {},
    "encrypted": {},
    "parentImage": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "targetRepository": {
      "service": {},
      "repositoryName": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|containerRecipe|object|false|none|none|

<h2 id="tocS_GetContainerRecipePolicyResponse">GetContainerRecipePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerrecipepolicyresponse"></a>
<a id="schema_GetContainerRecipePolicyResponse"></a>
<a id="tocSgetcontainerrecipepolicyresponse"></a>
<a id="tocsgetcontainerrecipepolicyresponse"></a>

```json
{
  "requestId": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|policy|object|false|none|none|

<h2 id="tocS_GetDistributionConfigurationResponse">GetDistributionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionconfigurationresponse"></a>
<a id="schema_GetDistributionConfigurationResponse"></a>
<a id="tocSgetdistributionconfigurationresponse"></a>
<a id="tocsgetdistributionconfigurationresponse"></a>

```json
{
  "requestId": {},
  "distributionConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "distributions": {},
    "timeoutMinutes": {},
    "dateCreated": {},
    "dateUpdated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|distributionConfiguration|object|false|none|none|

<h2 id="tocS_GetImageResponse">GetImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimageresponse"></a>
<a id="schema_GetImageResponse"></a>
<a id="tocSgetimageresponse"></a>
<a id="tocsgetimageresponse"></a>

```json
{
  "requestId": {},
  "image": {
    "arn": {},
    "type": {},
    "name": {},
    "version": {},
    "platform": {},
    "enhancedImageMetadataEnabled": {},
    "osVersion": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "imageRecipe": {
      "arn": {},
      "type": {},
      "name": {},
      "description": {},
      "platform": {},
      "owner": {},
      "version": {},
      "components": {},
      "parentImage": {},
      "blockDeviceMappings": {},
      "dateCreated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "workingDirectory": {},
      "additionalInstanceConfiguration": {
        "systemsManagerAgent": {
          "uninstallAfterBuild": {}
        },
        "userDataOverride": {}
      }
    },
    "containerRecipe": {
      "arn": {},
      "containerType": {},
      "name": {},
      "description": {},
      "platform": {},
      "owner": {},
      "version": {},
      "components": {},
      "instanceConfiguration": {
        "image": {},
        "blockDeviceMappings": {}
      },
      "dockerfileTemplateData": {},
      "kmsKeyId": {},
      "encrypted": {},
      "parentImage": {},
      "dateCreated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      },
      "workingDirectory": {},
      "targetRepository": {
        "service": {},
        "repositoryName": {}
      }
    },
    "sourcePipelineName": {},
    "sourcePipelineArn": {},
    "infrastructureConfiguration": {
      "arn": {},
      "name": {},
      "description": {},
      "instanceTypes": {},
      "instanceProfileName": {},
      "securityGroupIds": {},
      "subnetId": {},
      "logging": {
        "s3Logs": {
          "s3BucketName": {},
          "s3KeyPrefix": {}
        }
      },
      "keyPair": {},
      "terminateInstanceOnFailure": {},
      "snsTopicArn": {},
      "dateCreated": {},
      "dateUpdated": {},
      "resourceTags": {
        "property1": "string",
        "property2": "string"
      },
      "instanceMetadataOptions": {
        "httpTokens": {},
        "httpPutResponseHopLimit": {}
      },
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "distributionConfiguration": {
      "arn": {},
      "name": {},
      "description": {},
      "distributions": {},
      "timeoutMinutes": {},
      "dateCreated": {},
      "dateUpdated": {},
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    },
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "dateCreated": {},
    "outputResources": {
      "amis": {},
      "containers": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "buildType": {},
    "imageSource": {},
    "scanState": {
      "status": {},
      "reason": {}
    },
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|image|object|false|none|none|

<h2 id="tocS_GetImagePipelineResponse">GetImagePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagepipelineresponse"></a>
<a id="schema_GetImagePipelineResponse"></a>
<a id="tocSgetimagepipelineresponse"></a>
<a id="tocsgetimagepipelineresponse"></a>

```json
{
  "requestId": {},
  "imagePipeline": {
    "arn": {},
    "name": {},
    "description": {},
    "platform": {},
    "enhancedImageMetadataEnabled": {},
    "imageRecipeArn": {},
    "containerRecipeArn": {},
    "infrastructureConfigurationArn": {},
    "distributionConfigurationArn": {},
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "schedule": {
      "scheduleExpression": {},
      "timezone": {},
      "pipelineExecutionStartCondition": {}
    },
    "status": {},
    "dateCreated": {},
    "dateUpdated": {},
    "dateLastRun": {},
    "dateNextRun": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imagePipeline|object|false|none|none|

<h2 id="tocS_GetImagePolicyResponse">GetImagePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagepolicyresponse"></a>
<a id="schema_GetImagePolicyResponse"></a>
<a id="tocSgetimagepolicyresponse"></a>
<a id="tocsgetimagepolicyresponse"></a>

```json
{
  "requestId": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|policy|object|false|none|none|

<h2 id="tocS_GetImageRecipeResponse">GetImageRecipeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagereciperesponse"></a>
<a id="schema_GetImageRecipeResponse"></a>
<a id="tocSgetimagereciperesponse"></a>
<a id="tocsgetimagereciperesponse"></a>

```json
{
  "requestId": {},
  "imageRecipe": {
    "arn": {},
    "type": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "parentImage": {},
    "blockDeviceMappings": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "additionalInstanceConfiguration": {
      "systemsManagerAgent": {
        "uninstallAfterBuild": {}
      },
      "userDataOverride": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageRecipe|object|false|none|none|

<h2 id="tocS_GetImageRecipePolicyResponse">GetImageRecipePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagerecipepolicyresponse"></a>
<a id="schema_GetImageRecipePolicyResponse"></a>
<a id="tocSgetimagerecipepolicyresponse"></a>
<a id="tocsgetimagerecipepolicyresponse"></a>

```json
{
  "requestId": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|policy|object|false|none|none|

<h2 id="tocS_GetInfrastructureConfigurationResponse">GetInfrastructureConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinfrastructureconfigurationresponse"></a>
<a id="schema_GetInfrastructureConfigurationResponse"></a>
<a id="tocSgetinfrastructureconfigurationresponse"></a>
<a id="tocsgetinfrastructureconfigurationresponse"></a>

```json
{
  "requestId": {},
  "infrastructureConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "instanceTypes": {},
    "instanceProfileName": {},
    "securityGroupIds": {},
    "subnetId": {},
    "logging": {
      "s3Logs": {
        "s3BucketName": {},
        "s3KeyPrefix": {}
      }
    },
    "keyPair": {},
    "terminateInstanceOnFailure": {},
    "snsTopicArn": {},
    "dateCreated": {},
    "dateUpdated": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceMetadataOptions": {
      "httpTokens": {},
      "httpPutResponseHopLimit": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

GetInfrastructureConfiguration response object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|infrastructureConfiguration|object|false|none|none|

<h2 id="tocS_GetWorkflowExecutionResponse">GetWorkflowExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowexecutionresponse"></a>
<a id="schema_GetWorkflowExecutionResponse"></a>
<a id="tocSgetworkflowexecutionresponse"></a>
<a id="tocsgetworkflowexecutionresponse"></a>

```json
{
  "requestId": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "type": {},
  "status": {},
  "message": {},
  "totalStepCount": {},
  "totalStepsSucceeded": {},
  "totalStepsFailed": {},
  "totalStepsSkipped": {},
  "startTime": {},
  "endTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|workflowBuildVersionArn|object|false|none|none|
|workflowExecutionId|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|
|type|object|false|none|none|
|status|object|false|none|none|
|message|object|false|none|none|
|totalStepCount|object|false|none|none|
|totalStepsSucceeded|object|false|none|none|
|totalStepsFailed|object|false|none|none|
|totalStepsSkipped|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_GetWorkflowStepExecutionResponse">GetWorkflowStepExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowstepexecutionresponse"></a>
<a id="schema_GetWorkflowStepExecutionResponse"></a>
<a id="tocSgetworkflowstepexecutionresponse"></a>
<a id="tocsgetworkflowstepexecutionresponse"></a>

```json
{
  "requestId": {},
  "stepExecutionId": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "name": {},
  "description": {},
  "action": {},
  "status": {},
  "rollbackStatus": {},
  "message": {},
  "inputs": {},
  "outputs": {},
  "startTime": {},
  "endTime": {},
  "onFailure": {},
  "timeoutSeconds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|stepExecutionId|object|false|none|none|
|workflowBuildVersionArn|object|false|none|none|
|workflowExecutionId|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|action|object|false|none|none|
|status|object|false|none|none|
|rollbackStatus|object|false|none|none|
|message|object|false|none|none|
|inputs|object|false|none|none|
|outputs|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
|onFailure|object|false|none|none|
|timeoutSeconds|object|false|none|none|

<h2 id="tocS_ImportComponentResponse">ImportComponentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportcomponentresponse"></a>
<a id="schema_ImportComponentResponse"></a>
<a id="tocSimportcomponentresponse"></a>
<a id="tocsimportcomponentresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "componentBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|componentBuildVersionArn|object|false|none|none|

<h2 id="tocS_ImportVmImageResponse">ImportVmImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportvmimageresponse"></a>
<a id="schema_ImportVmImageResponse"></a>
<a id="tocSimportvmimageresponse"></a>
<a id="tocsimportvmimageresponse"></a>

```json
{
  "requestId": {},
  "imageArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageArn|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_ListComponentBuildVersionsResponse">ListComponentBuildVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentbuildversionsresponse"></a>
<a id="schema_ListComponentBuildVersionsResponse"></a>
<a id="tocSlistcomponentbuildversionsresponse"></a>
<a id="tocslistcomponentbuildversionsresponse"></a>

```json
{
  "requestId": {},
  "componentSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|componentSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_InvalidPaginationTokenException">InvalidPaginationTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtokenexception"></a>
<a id="schema_InvalidPaginationTokenException"></a>
<a id="tocSinvalidpaginationtokenexception"></a>
<a id="tocsinvalidpaginationtokenexception"></a>

```json
null
```

<h2 id="tocS_ListComponentsResponse">ListComponentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsresponse"></a>
<a id="schema_ListComponentsResponse"></a>
<a id="tocSlistcomponentsresponse"></a>
<a id="tocslistcomponentsresponse"></a>

```json
{
  "requestId": {},
  "componentVersionList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|componentVersionList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListContainerRecipesResponse">ListContainerRecipesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainerrecipesresponse"></a>
<a id="schema_ListContainerRecipesResponse"></a>
<a id="tocSlistcontainerrecipesresponse"></a>
<a id="tocslistcontainerrecipesresponse"></a>

```json
{
  "requestId": {},
  "containerRecipeSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|containerRecipeSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDistributionConfigurationsResponse">ListDistributionConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionconfigurationsresponse"></a>
<a id="schema_ListDistributionConfigurationsResponse"></a>
<a id="tocSlistdistributionconfigurationsresponse"></a>
<a id="tocslistdistributionconfigurationsresponse"></a>

```json
{
  "requestId": {},
  "distributionConfigurationSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|distributionConfigurationSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageBuildVersionsResponse">ListImageBuildVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagebuildversionsresponse"></a>
<a id="schema_ListImageBuildVersionsResponse"></a>
<a id="tocSlistimagebuildversionsresponse"></a>
<a id="tocslistimagebuildversionsresponse"></a>

```json
{
  "requestId": {},
  "imageSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePackagesResponse">ListImagePackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepackagesresponse"></a>
<a id="schema_ListImagePackagesResponse"></a>
<a id="tocSlistimagepackagesresponse"></a>
<a id="tocslistimagepackagesresponse"></a>

```json
{
  "requestId": {},
  "imagePackageList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imagePackageList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePipelineImagesResponse">ListImagePipelineImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepipelineimagesresponse"></a>
<a id="schema_ListImagePipelineImagesResponse"></a>
<a id="tocSlistimagepipelineimagesresponse"></a>
<a id="tocslistimagepipelineimagesresponse"></a>

```json
{
  "requestId": {},
  "imageSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePipelinesResponse">ListImagePipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepipelinesresponse"></a>
<a id="schema_ListImagePipelinesResponse"></a>
<a id="tocSlistimagepipelinesresponse"></a>
<a id="tocslistimagepipelinesresponse"></a>

```json
{
  "requestId": {},
  "imagePipelineList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imagePipelineList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageRecipesResponse">ListImageRecipesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagerecipesresponse"></a>
<a id="schema_ListImageRecipesResponse"></a>
<a id="tocSlistimagerecipesresponse"></a>
<a id="tocslistimagerecipesresponse"></a>

```json
{
  "requestId": {},
  "imageRecipeSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageRecipeSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageScanFindingAggregationsResponse">ListImageScanFindingAggregationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagescanfindingaggregationsresponse"></a>
<a id="schema_ListImageScanFindingAggregationsResponse"></a>
<a id="tocSlistimagescanfindingaggregationsresponse"></a>
<a id="tocslistimagescanfindingaggregationsresponse"></a>

```json
{
  "requestId": {},
  "aggregationType": {},
  "responses": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|aggregationType|object|false|none|none|
|responses|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_FilterName">FilterName</h2>
<!-- backwards compatibility -->
<a id="schemafiltername"></a>
<a id="schema_FilterName"></a>
<a id="tocSfiltername"></a>
<a id="tocsfiltername"></a>

```json
"string"
```

<h2 id="tocS_FilterValues">FilterValues</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalues"></a>
<a id="schema_FilterValues"></a>
<a id="tocSfiltervalues"></a>
<a id="tocsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ListImageScanFindingsResponse">ListImageScanFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagescanfindingsresponse"></a>
<a id="schema_ListImageScanFindingsResponse"></a>
<a id="tocSlistimagescanfindingsresponse"></a>
<a id="tocslistimagescanfindingsresponse"></a>

```json
{
  "requestId": {},
  "findings": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|findings|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ImageScanFindingsFilter">ImageScanFindingsFilter</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingsfilter"></a>
<a id="schema_ImageScanFindingsFilter"></a>
<a id="tocSimagescanfindingsfilter"></a>
<a id="tocsimagescanfindingsfilter"></a>

```json
{
  "name": {},
  "values": {}
}
```

A name value pair that Image Builder applies to streamline results from the vulnerability scan findings list action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|values|object|false|none|none|

<h2 id="tocS_ListImagesResponse">ListImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimagesresponse"></a>
<a id="schema_ListImagesResponse"></a>
<a id="tocSlistimagesresponse"></a>
<a id="tocslistimagesresponse"></a>

```json
{
  "requestId": {},
  "imageVersionList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageVersionList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListInfrastructureConfigurationsResponse">ListInfrastructureConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinfrastructureconfigurationsresponse"></a>
<a id="schema_ListInfrastructureConfigurationsResponse"></a>
<a id="tocSlistinfrastructureconfigurationsresponse"></a>
<a id="tocslistinfrastructureconfigurationsresponse"></a>

```json
{
  "requestId": {},
  "infrastructureConfigurationSummaryList": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|infrastructureConfigurationSummaryList|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|false|none|none|

<h2 id="tocS_InvalidParameterException">InvalidParameterException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparameterexception"></a>
<a id="schema_InvalidParameterException"></a>
<a id="tocSinvalidparameterexception"></a>
<a id="tocsinvalidparameterexception"></a>

```json
null
```

<h2 id="tocS_ListWorkflowExecutionsResponse">ListWorkflowExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowexecutionsresponse"></a>
<a id="schema_ListWorkflowExecutionsResponse"></a>
<a id="tocSlistworkflowexecutionsresponse"></a>
<a id="tocslistworkflowexecutionsresponse"></a>

```json
{
  "requestId": {},
  "workflowExecutions": {},
  "imageBuildVersionArn": {},
  "message": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|workflowExecutions|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|
|message|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListWorkflowStepExecutionsResponse">ListWorkflowStepExecutionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowstepexecutionsresponse"></a>
<a id="schema_ListWorkflowStepExecutionsResponse"></a>
<a id="tocSlistworkflowstepexecutionsresponse"></a>
<a id="tocslistworkflowstepexecutionsresponse"></a>

```json
{
  "requestId": {},
  "steps": {},
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "imageBuildVersionArn": {},
  "message": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|steps|object|false|none|none|
|workflowBuildVersionArn|object|false|none|none|
|workflowExecutionId|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|
|message|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_PutComponentPolicyResponse">PutComponentPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputcomponentpolicyresponse"></a>
<a id="schema_PutComponentPolicyResponse"></a>
<a id="tocSputcomponentpolicyresponse"></a>
<a id="tocsputcomponentpolicyresponse"></a>

```json
{
  "requestId": {},
  "componentArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|componentArn|object|false|none|none|

<h2 id="tocS_InvalidParameterValueException">InvalidParameterValueException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidparametervalueexception"></a>
<a id="schema_InvalidParameterValueException"></a>
<a id="tocSinvalidparametervalueexception"></a>
<a id="tocsinvalidparametervalueexception"></a>

```json
null
```

<h2 id="tocS_PutContainerRecipePolicyResponse">PutContainerRecipePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputcontainerrecipepolicyresponse"></a>
<a id="schema_PutContainerRecipePolicyResponse"></a>
<a id="tocSputcontainerrecipepolicyresponse"></a>
<a id="tocsputcontainerrecipepolicyresponse"></a>

```json
{
  "requestId": {},
  "containerRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|containerRecipeArn|object|false|none|none|

<h2 id="tocS_PutImagePolicyResponse">PutImagePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputimagepolicyresponse"></a>
<a id="schema_PutImagePolicyResponse"></a>
<a id="tocSputimagepolicyresponse"></a>
<a id="tocsputimagepolicyresponse"></a>

```json
{
  "requestId": {},
  "imageArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageArn|object|false|none|none|

<h2 id="tocS_PutImageRecipePolicyResponse">PutImageRecipePolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputimagerecipepolicyresponse"></a>
<a id="schema_PutImageRecipePolicyResponse"></a>
<a id="tocSputimagerecipepolicyresponse"></a>
<a id="tocsputimagerecipepolicyresponse"></a>

```json
{
  "requestId": {},
  "imageRecipeArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|imageRecipeArn|object|false|none|none|

<h2 id="tocS_StartImagePipelineExecutionResponse">StartImagePipelineExecutionResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartimagepipelineexecutionresponse"></a>
<a id="schema_StartImagePipelineExecutionResponse"></a>
<a id="tocSstartimagepipelineexecutionresponse"></a>
<a id="tocsstartimagepipelineexecutionresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imageBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|

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

<h2 id="tocS_UpdateDistributionConfigurationResponse">UpdateDistributionConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionconfigurationresponse"></a>
<a id="schema_UpdateDistributionConfigurationResponse"></a>
<a id="tocSupdatedistributionconfigurationresponse"></a>
<a id="tocsupdatedistributionconfigurationresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "distributionConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|distributionConfigurationArn|object|false|none|none|

<h2 id="tocS_UpdateImagePipelineResponse">UpdateImagePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagepipelineresponse"></a>
<a id="schema_UpdateImagePipelineResponse"></a>
<a id="tocSupdateimagepipelineresponse"></a>
<a id="tocsupdateimagepipelineresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "imagePipelineArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|imagePipelineArn|object|false|none|none|

<h2 id="tocS_UpdateInfrastructureConfigurationResponse">UpdateInfrastructureConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinfrastructureconfigurationresponse"></a>
<a id="schema_UpdateInfrastructureConfigurationResponse"></a>
<a id="tocSupdateinfrastructureconfigurationresponse"></a>
<a id="tocsupdateinfrastructureconfigurationresponse"></a>

```json
{
  "requestId": {},
  "clientToken": {},
  "infrastructureConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|object|false|none|none|
|clientToken|object|false|none|none|
|infrastructureConfigurationArn|object|false|none|none|

<h2 id="tocS_SeverityCounts">SeverityCounts</h2>
<!-- backwards compatibility -->
<a id="schemaseveritycounts"></a>
<a id="schema_SeverityCounts"></a>
<a id="tocSseveritycounts"></a>
<a id="tocsseveritycounts"></a>

```json
{
  "all": {},
  "critical": {},
  "high": {},
  "medium": {}
}
```

Includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|object|false|none|none|
|critical|object|false|none|none|
|high|object|false|none|none|
|medium|object|false|none|none|

<h2 id="tocS_AccountAggregation">AccountAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaggregation"></a>
<a id="schema_AccountAggregation"></a>
<a id="tocSaccountaggregation"></a>
<a id="tocsaccountaggregation"></a>

```json
{
  "accountId": {},
  "severityCounts": {
    "all": {},
    "critical": {},
    "high": {},
    "medium": {}
  }
}
```

Contains counts of vulnerability findings from image scans that run when you create new Image Builder images, or build new versions of existing images. The vulnerability counts are grouped by severity level. The counts are aggregated across resources to create the final tally for the account that owns them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|object|false|none|none|
|severityCounts|object|false|none|none|

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
```

<h2 id="tocS_AccountList">AccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlist"></a>
<a id="schema_AccountList"></a>
<a id="tocSaccountlist"></a>
<a id="tocsaccountlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AdditionalInstanceConfiguration">AdditionalInstanceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalinstanceconfiguration"></a>
<a id="schema_AdditionalInstanceConfiguration"></a>
<a id="tocSadditionalinstanceconfiguration"></a>
<a id="tocsadditionalinstanceconfiguration"></a>

```json
{
  "systemsManagerAgent": {
    "uninstallAfterBuild": {}
  },
  "userDataOverride": {}
}
```

<p>In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.</p> <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemsManagerAgent|object|false|none|none|
|userDataOverride|object|false|none|none|

<h2 id="tocS_ImageState">ImageState</h2>
<!-- backwards compatibility -->
<a id="schemaimagestate"></a>
<a id="schema_ImageState"></a>
<a id="tocSimagestate"></a>
<a id="tocsimagestate"></a>

```json
{
  "status": {},
  "reason": {}
}
```

Image status and the reason for that status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_Ami">Ami</h2>
<!-- backwards compatibility -->
<a id="schemaami"></a>
<a id="schema_Ami"></a>
<a id="tocSami"></a>
<a id="tocsami"></a>

```json
{
  "region": {},
  "image": {},
  "name": {},
  "description": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "accountId": {}
}
```

Details of an Amazon EC2 AMI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|object|false|none|none|
|image|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|state|[ImageState](#schemaimagestate)|false|none|Image status and the reason for that status.|
|accountId|object|false|none|none|

<h2 id="tocS_AmiNameString">AmiNameString</h2>
<!-- backwards compatibility -->
<a id="schemaaminamestring"></a>
<a id="schema_AmiNameString"></a>
<a id="tocSaminamestring"></a>
<a id="tocsaminamestring"></a>

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

<h2 id="tocS_LaunchPermissionConfiguration">LaunchPermissionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalaunchpermissionconfiguration"></a>
<a id="schema_LaunchPermissionConfiguration"></a>
<a id="tocSlaunchpermissionconfiguration"></a>
<a id="tocslaunchpermissionconfiguration"></a>

```json
{
  "userIds": {},
  "userGroups": {},
  "organizationArns": {},
  "organizationalUnitArns": {}
}
```

Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userIds|object|false|none|none|
|userGroups|object|false|none|none|
|organizationArns|object|false|none|none|
|organizationalUnitArns|object|false|none|none|

<h2 id="tocS_AmiDistributionConfiguration">AmiDistributionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaamidistributionconfiguration"></a>
<a id="schema_AmiDistributionConfiguration"></a>
<a id="tocSamidistributionconfiguration"></a>
<a id="tocsamidistributionconfiguration"></a>

```json
{
  "name": {},
  "description": {},
  "targetAccountIds": {},
  "amiTags": {
    "property1": "string",
    "property2": "string"
  },
  "kmsKeyId": {},
  "launchPermission": {
    "userIds": {},
    "userGroups": {},
    "organizationArns": {},
    "organizationalUnitArns": {}
  }
}
```

Define and configure the output AMIs of the pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|description|object|false|none|none|
|targetAccountIds|object|false|none|none|
|amiTags|object|false|none|none|
|kmsKeyId|object|false|none|none|
|launchPermission|object|false|none|none|

<h2 id="tocS_AmiList">AmiList</h2>
<!-- backwards compatibility -->
<a id="schemaamilist"></a>
<a id="schema_AmiList"></a>
<a id="tocSamilist"></a>
<a id="tocsamilist"></a>

```json
[
  {
    "region": {},
    "image": {},
    "name": {},
    "description": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "accountId": {}
  }
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

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_BuildType">BuildType</h2>
<!-- backwards compatibility -->
<a id="schemabuildtype"></a>
<a id="schema_BuildType"></a>
<a id="tocSbuildtype"></a>
<a id="tocsbuildtype"></a>

```json
"USER_INITIATED"
```

<h2 id="tocS_ImageBuildVersionArn">ImageBuildVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuildversionarn"></a>
<a id="schema_ImageBuildVersionArn"></a>
<a id="tocSimagebuildversionarn"></a>
<a id="tocsimagebuildversionarn"></a>

```json
"string"
```

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_CancelImageCreationRequest">CancelImageCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelimagecreationrequest"></a>
<a id="schema_CancelImageCreationRequest"></a>
<a id="tocScancelimagecreationrequest"></a>
<a id="tocscancelimagecreationrequest"></a>

```json
{
  "imageBuildVersionArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBuildVersionArn|object|true|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_ImageBuilderArn">ImageBuilderArn</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuilderarn"></a>
<a id="schema_ImageBuilderArn"></a>
<a id="tocSimagebuilderarn"></a>
<a id="tocsimagebuilderarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_VersionNumber">VersionNumber</h2>
<!-- backwards compatibility -->
<a id="schemaversionnumber"></a>
<a id="schema_VersionNumber"></a>
<a id="tocSversionnumber"></a>
<a id="tocsversionnumber"></a>

```json
"string"
```

<h2 id="tocS_ComponentType">ComponentType</h2>
<!-- backwards compatibility -->
<a id="schemacomponenttype"></a>
<a id="schema_ComponentType"></a>
<a id="tocScomponenttype"></a>
<a id="tocscomponenttype"></a>

```json
"BUILD"
```

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
"Windows"
```

<h2 id="tocS_OsVersionList">OsVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaosversionlist"></a>
<a id="schema_OsVersionList"></a>
<a id="tocSosversionlist"></a>
<a id="tocsosversionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComponentState">ComponentState</h2>
<!-- backwards compatibility -->
<a id="schemacomponentstate"></a>
<a id="schema_ComponentState"></a>
<a id="tocScomponentstate"></a>
<a id="tocscomponentstate"></a>

```json
{
  "status": {},
  "reason": {}
}
```

A group of fields that describe the current status of components that are no longer active.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ComponentParameterDetailList">ComponentParameterDetailList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparameterdetaillist"></a>
<a id="schema_ComponentParameterDetailList"></a>
<a id="tocScomponentparameterdetaillist"></a>
<a id="tocscomponentparameterdetaillist"></a>

```json
[
  {
    "name": {},
    "type": {},
    "defaultValue": {},
    "description": {}
  }
]
```

<h2 id="tocS_ComponentData">ComponentData</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdata"></a>
<a id="schema_ComponentData"></a>
<a id="tocScomponentdata"></a>
<a id="tocscomponentdata"></a>

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
"string"
```

<h2 id="tocS_Component">Component</h2>
<!-- backwards compatibility -->
<a id="schemacomponent"></a>
<a id="schema_Component"></a>
<a id="tocScomponent"></a>
<a id="tocscomponent"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "description": {},
  "changeDescription": {},
  "type": {},
  "platform": {},
  "supportedOsVersions": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "parameters": {},
  "owner": {},
  "data": {},
  "kmsKeyId": {},
  "encrypted": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "publisher": {},
  "obfuscate": {}
}
```

A detailed view of a component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|description|object|false|none|none|
|changeDescription|object|false|none|none|
|type|object|false|none|none|
|platform|object|false|none|none|
|supportedOsVersions|object|false|none|none|
|state|object|false|none|none|
|parameters|object|false|none|none|
|owner|object|false|none|none|
|data|object|false|none|none|
|kmsKeyId|object|false|none|none|
|encrypted|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|
|publisher|object|false|none|none|
|obfuscate|object|false|none|none|

<h2 id="tocS_ComponentBuildVersionArn">ComponentBuildVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemacomponentbuildversionarn"></a>
<a id="schema_ComponentBuildVersionArn"></a>
<a id="tocScomponentbuildversionarn"></a>
<a id="tocscomponentbuildversionarn"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersionArnOrBuildVersionArn">ComponentVersionArnOrBuildVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionarnorbuildversionarn"></a>
<a id="schema_ComponentVersionArnOrBuildVersionArn"></a>
<a id="tocScomponentversionarnorbuildversionarn"></a>
<a id="tocscomponentversionarnorbuildversionarn"></a>

```json
"string"
```

<h2 id="tocS_ComponentParameterList">ComponentParameterList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparameterlist"></a>
<a id="schema_ComponentParameterList"></a>
<a id="tocScomponentparameterlist"></a>
<a id="tocscomponentparameterlist"></a>

```json
[
  {
    "name": {},
    "value": {}
  }
]
```

<h2 id="tocS_ComponentConfigurationList">ComponentConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentconfigurationlist"></a>
<a id="schema_ComponentConfigurationList"></a>
<a id="tocScomponentconfigurationlist"></a>
<a id="tocscomponentconfigurationlist"></a>

```json
[
  {
    "componentArn": {},
    "parameters": {}
  }
]
```

<h2 id="tocS_ComponentFormat">ComponentFormat</h2>
<!-- backwards compatibility -->
<a id="schemacomponentformat"></a>
<a id="schema_ComponentFormat"></a>
<a id="tocScomponentformat"></a>
<a id="tocscomponentformat"></a>

```json
"SHELL"
```

<h2 id="tocS_ComponentParameterName">ComponentParameterName</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparametername"></a>
<a id="schema_ComponentParameterName"></a>
<a id="tocScomponentparametername"></a>
<a id="tocscomponentparametername"></a>

```json
"string"
```

<h2 id="tocS_ComponentParameterValueList">ComponentParameterValueList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparametervaluelist"></a>
<a id="schema_ComponentParameterValueList"></a>
<a id="tocScomponentparametervaluelist"></a>
<a id="tocscomponentparametervaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ComponentParameter">ComponentParameter</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparameter"></a>
<a id="schema_ComponentParameter"></a>
<a id="tocScomponentparameter"></a>
<a id="tocscomponentparameter"></a>

```json
{
  "name": {},
  "value": {}
}
```

Contains a key/value pair that sets the named component parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|value|object|true|none|none|

<h2 id="tocS_ComponentParameterDescription">ComponentParameterDescription</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparameterdescription"></a>
<a id="schema_ComponentParameterDescription"></a>
<a id="tocScomponentparameterdescription"></a>
<a id="tocscomponentparameterdescription"></a>

```json
"string"
```

<h2 id="tocS_ComponentParameterType">ComponentParameterType</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparametertype"></a>
<a id="schema_ComponentParameterType"></a>
<a id="tocScomponentparametertype"></a>
<a id="tocscomponentparametertype"></a>

```json
"string"
```

<h2 id="tocS_ComponentParameterDetail">ComponentParameterDetail</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparameterdetail"></a>
<a id="schema_ComponentParameterDetail"></a>
<a id="tocScomponentparameterdetail"></a>
<a id="tocscomponentparameterdetail"></a>

```json
{
  "name": {},
  "type": {},
  "defaultValue": {},
  "description": {}
}
```

Defines a parameter that is used to provide configuration details for the component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|type|object|true|none|none|
|defaultValue|object|false|none|none|
|description|object|false|none|none|

<h2 id="tocS_ComponentParameterValue">ComponentParameterValue</h2>
<!-- backwards compatibility -->
<a id="schemacomponentparametervalue"></a>
<a id="schema_ComponentParameterValue"></a>
<a id="tocScomponentparametervalue"></a>
<a id="tocscomponentparametervalue"></a>

```json
"string"
```

<h2 id="tocS_ComponentStatus">ComponentStatus</h2>
<!-- backwards compatibility -->
<a id="schemacomponentstatus"></a>
<a id="schema_ComponentStatus"></a>
<a id="tocScomponentstatus"></a>
<a id="tocscomponentstatus"></a>

```json
"DEPRECATED"
```

<h2 id="tocS_ComponentSummary">ComponentSummary</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsummary"></a>
<a id="schema_ComponentSummary"></a>
<a id="tocScomponentsummary"></a>
<a id="tocscomponentsummary"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "platform": {},
  "supportedOsVersions": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "type": {},
  "owner": {},
  "description": {},
  "changeDescription": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "publisher": {},
  "obfuscate": {}
}
```

A high-level summary of a component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|platform|object|false|none|none|
|supportedOsVersions|object|false|none|none|
|state|object|false|none|none|
|type|object|false|none|none|
|owner|object|false|none|none|
|description|object|false|none|none|
|changeDescription|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|
|publisher|object|false|none|none|
|obfuscate|object|false|none|none|

<h2 id="tocS_ComponentSummaryList">ComponentSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsummarylist"></a>
<a id="schema_ComponentSummaryList"></a>
<a id="tocScomponentsummarylist"></a>
<a id="tocscomponentsummarylist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "version": {},
    "platform": {},
    "supportedOsVersions": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "type": {},
    "owner": {},
    "description": {},
    "changeDescription": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "publisher": {},
    "obfuscate": {}
  }
]
```

<h2 id="tocS_ComponentVersion">ComponentVersion</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversion"></a>
<a id="schema_ComponentVersion"></a>
<a id="tocScomponentversion"></a>
<a id="tocscomponentversion"></a>

```json
{
  "arn": {},
  "name": {},
  "version": {},
  "description": {},
  "platform": {},
  "supportedOsVersions": {},
  "type": {},
  "owner": {},
  "dateCreated": {}
}
```

The defining characteristics of a specific version of an Amazon Web Services TOE component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|description|object|false|none|none|
|platform|object|false|none|none|
|supportedOsVersions|object|false|none|none|
|type|object|false|none|none|
|owner|object|false|none|none|
|dateCreated|object|false|none|none|

<h2 id="tocS_ComponentVersionArn">ComponentVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionarn"></a>
<a id="schema_ComponentVersionArn"></a>
<a id="tocScomponentversionarn"></a>
<a id="tocscomponentversionarn"></a>

```json
"string"
```

<h2 id="tocS_ComponentVersionList">ComponentVersionList</h2>
<!-- backwards compatibility -->
<a id="schemacomponentversionlist"></a>
<a id="schema_ComponentVersionList"></a>
<a id="tocScomponentversionlist"></a>
<a id="tocscomponentversionlist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "version": {},
    "description": {},
    "platform": {},
    "supportedOsVersions": {},
    "type": {},
    "owner": {},
    "dateCreated": {}
  }
]
```

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "region": {},
  "imageUris": {}
}
```

A container encapsulates the runtime environment for an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|object|false|none|none|
|imageUris|object|false|none|none|

<h2 id="tocS_TargetContainerRepository">TargetContainerRepository</h2>
<!-- backwards compatibility -->
<a id="schematargetcontainerrepository"></a>
<a id="schema_TargetContainerRepository"></a>
<a id="tocStargetcontainerrepository"></a>
<a id="tocstargetcontainerrepository"></a>

```json
{
  "service": {},
  "repositoryName": {}
}
```

The container repository where the output container image is stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|object|true|none|none|
|repositoryName|object|true|none|none|

<h2 id="tocS_ContainerDistributionConfiguration">ContainerDistributionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacontainerdistributionconfiguration"></a>
<a id="schema_ContainerDistributionConfiguration"></a>
<a id="tocScontainerdistributionconfiguration"></a>
<a id="tocscontainerdistributionconfiguration"></a>

```json
{
  "description": {},
  "containerTags": {},
  "targetRepository": {
    "service": {},
    "repositoryName": {}
  }
}
```

Container distribution settings for encryption, licensing, and sharing in a specific Region.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|object|false|none|none|
|containerTags|object|false|none|none|
|targetRepository|object|true|none|none|

<h2 id="tocS_ContainerList">ContainerList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerlist"></a>
<a id="schema_ContainerList"></a>
<a id="tocScontainerlist"></a>
<a id="tocscontainerlist"></a>

```json
[
  {
    "region": {},
    "imageUris": {}
  }
]
```

<h2 id="tocS_ContainerType">ContainerType</h2>
<!-- backwards compatibility -->
<a id="schemacontainertype"></a>
<a id="schema_ContainerType"></a>
<a id="tocScontainertype"></a>
<a id="tocscontainertype"></a>

```json
"DOCKER"
```

<h2 id="tocS_InstanceConfiguration">InstanceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfiguration"></a>
<a id="schema_InstanceConfiguration"></a>
<a id="tocSinstanceconfiguration"></a>
<a id="tocsinstanceconfiguration"></a>

```json
{
  "image": {},
  "blockDeviceMappings": {}
}
```

Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|object|false|none|none|
|blockDeviceMappings|object|false|none|none|

<h2 id="tocS_DockerFileTemplate">DockerFileTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadockerfiletemplate"></a>
<a id="schema_DockerFileTemplate"></a>
<a id="tocSdockerfiletemplate"></a>
<a id="tocsdockerfiletemplate"></a>

```json
"string"
```

<h2 id="tocS_ContainerRecipe">ContainerRecipe</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecipe"></a>
<a id="schema_ContainerRecipe"></a>
<a id="tocScontainerrecipe"></a>
<a id="tocscontainerrecipe"></a>

```json
{
  "arn": {},
  "containerType": {},
  "name": {},
  "description": {},
  "platform": {},
  "owner": {},
  "version": {},
  "components": {},
  "instanceConfiguration": {
    "image": {},
    "blockDeviceMappings": {}
  },
  "dockerfileTemplateData": {},
  "kmsKeyId": {},
  "encrypted": {},
  "parentImage": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": {},
  "targetRepository": {
    "service": {},
    "repositoryName": {}
  }
}
```

A container recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|containerType|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|platform|object|false|none|none|
|owner|object|false|none|none|
|version|object|false|none|none|
|components|object|false|none|none|
|instanceConfiguration|object|false|none|none|
|dockerfileTemplateData|object|false|none|none|
|kmsKeyId|object|false|none|none|
|encrypted|object|false|none|none|
|parentImage|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|
|workingDirectory|object|false|none|none|
|targetRepository|object|false|none|none|

<h2 id="tocS_ContainerRecipeArn">ContainerRecipeArn</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecipearn"></a>
<a id="schema_ContainerRecipeArn"></a>
<a id="tocScontainerrecipearn"></a>
<a id="tocscontainerrecipearn"></a>

```json
"string"
```

<h2 id="tocS_ContainerRecipeSummary">ContainerRecipeSummary</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecipesummary"></a>
<a id="schema_ContainerRecipeSummary"></a>
<a id="tocScontainerrecipesummary"></a>
<a id="tocscontainerrecipesummary"></a>

```json
{
  "arn": {},
  "containerType": {},
  "name": {},
  "platform": {},
  "owner": {},
  "parentImage": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A summary of a container recipe

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|containerType|object|false|none|none|
|name|object|false|none|none|
|platform|object|false|none|none|
|owner|object|false|none|none|
|parentImage|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ContainerRecipeSummaryList">ContainerRecipeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemacontainerrecipesummarylist"></a>
<a id="schema_ContainerRecipeSummaryList"></a>
<a id="tocScontainerrecipesummarylist"></a>
<a id="tocscontainerrecipesummarylist"></a>

```json
[
  {
    "arn": {},
    "containerType": {},
    "name": {},
    "platform": {},
    "owner": {},
    "parentImage": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_InlineComponentData">InlineComponentData</h2>
<!-- backwards compatibility -->
<a id="schemainlinecomponentdata"></a>
<a id="schema_InlineComponentData"></a>
<a id="tocSinlinecomponentdata"></a>
<a id="tocsinlinecomponentdata"></a>

```json
"string"
```

<h2 id="tocS_Uri">Uri</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_Uri"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_CreateComponentRequest">CreateComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecomponentrequest"></a>
<a id="schema_CreateComponentRequest"></a>
<a id="tocScreatecomponentrequest"></a>
<a id="tocscreatecomponentrequest"></a>

```json
{
  "name": {},
  "semanticVersion": {},
  "description": {},
  "changeDescription": {},
  "platform": {},
  "supportedOsVersions": {},
  "data": {},
  "uri": {},
  "kmsKeyId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|semanticVersion|object|true|none|none|
|description|object|false|none|none|
|changeDescription|object|false|none|none|
|platform|object|true|none|none|
|supportedOsVersions|object|false|none|none|
|data|object|false|none|none|
|uri|object|false|none|none|
|kmsKeyId|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_InlineDockerFileTemplate">InlineDockerFileTemplate</h2>
<!-- backwards compatibility -->
<a id="schemainlinedockerfiletemplate"></a>
<a id="schema_InlineDockerFileTemplate"></a>
<a id="tocSinlinedockerfiletemplate"></a>
<a id="tocsinlinedockerfiletemplate"></a>

```json
"string"
```

<h2 id="tocS_CreateContainerRecipeRequest">CreateContainerRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerreciperequest"></a>
<a id="schema_CreateContainerRecipeRequest"></a>
<a id="tocScreatecontainerreciperequest"></a>
<a id="tocscreatecontainerreciperequest"></a>

```json
{
  "containerType": {},
  "name": {},
  "description": {},
  "semanticVersion": {},
  "components": {},
  "instanceConfiguration": {
    "image": {},
    "blockDeviceMappings": {}
  },
  "dockerfileTemplateData": {},
  "dockerfileTemplateUri": {},
  "platformOverride": {},
  "imageOsVersionOverride": {},
  "parentImage": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": {},
  "targetRepository": {
    "service": {},
    "repositoryName": {}
  },
  "kmsKeyId": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerType|object|true|none|none|
|name|object|true|none|none|
|description|object|false|none|none|
|semanticVersion|object|true|none|none|
|components|object|true|none|none|
|instanceConfiguration|object|false|none|none|
|dockerfileTemplateData|object|false|none|none|
|dockerfileTemplateUri|object|false|none|none|
|platformOverride|object|false|none|none|
|imageOsVersionOverride|object|false|none|none|
|parentImage|object|true|none|none|
|tags|object|false|none|none|
|workingDirectory|object|false|none|none|
|targetRepository|object|true|none|none|
|kmsKeyId|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_DistributionList">DistributionList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionlist"></a>
<a id="schema_DistributionList"></a>
<a id="tocSdistributionlist"></a>
<a id="tocsdistributionlist"></a>

```json
[
  {
    "region": {},
    "amiDistributionConfiguration": {
      "name": {},
      "description": {},
      "targetAccountIds": {},
      "amiTags": {
        "property1": "string",
        "property2": "string"
      },
      "kmsKeyId": {},
      "launchPermission": {
        "userIds": {},
        "userGroups": {},
        "organizationArns": {},
        "organizationalUnitArns": {}
      }
    },
    "containerDistributionConfiguration": {
      "description": {},
      "containerTags": {},
      "targetRepository": {
        "service": {},
        "repositoryName": {}
      }
    },
    "licenseConfigurationArns": {},
    "launchTemplateConfigurations": {},
    "s3ExportConfiguration": {
      "roleName": {},
      "diskImageFormat": {},
      "s3Bucket": {},
      "s3Prefix": {}
    },
    "fastLaunchConfigurations": {}
  }
]
```

<h2 id="tocS_CreateDistributionConfigurationRequest">CreateDistributionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedistributionconfigurationrequest"></a>
<a id="schema_CreateDistributionConfigurationRequest"></a>
<a id="tocScreatedistributionconfigurationrequest"></a>
<a id="tocscreatedistributionconfigurationrequest"></a>

```json
{
  "name": {},
  "description": {},
  "distributions": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|distributions|object|true|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_DistributionConfigurationArn">DistributionConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfigurationarn"></a>
<a id="schema_DistributionConfigurationArn"></a>
<a id="tocSdistributionconfigurationarn"></a>
<a id="tocsdistributionconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_ImageRecipeArn">ImageRecipeArn</h2>
<!-- backwards compatibility -->
<a id="schemaimagerecipearn"></a>
<a id="schema_ImageRecipeArn"></a>
<a id="tocSimagerecipearn"></a>
<a id="tocsimagerecipearn"></a>

```json
"string"
```

<h2 id="tocS_InfrastructureConfigurationArn">InfrastructureConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemainfrastructureconfigurationarn"></a>
<a id="schema_InfrastructureConfigurationArn"></a>
<a id="tocSinfrastructureconfigurationarn"></a>
<a id="tocsinfrastructureconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_ImageTestsConfiguration">ImageTestsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaimagetestsconfiguration"></a>
<a id="schema_ImageTestsConfiguration"></a>
<a id="tocSimagetestsconfiguration"></a>
<a id="tocsimagetestsconfiguration"></a>

```json
{
  "imageTestsEnabled": {},
  "timeoutMinutes": {}
}
```

Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageTestsEnabled|object|false|none|none|
|timeoutMinutes|object|false|none|none|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "scheduleExpression": {},
  "timezone": {},
  "pipelineExecutionStartCondition": {}
}
```

A schedule configures how often and when a pipeline will automatically create a new image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduleExpression|object|false|none|none|
|timezone|object|false|none|none|
|pipelineExecutionStartCondition|object|false|none|none|

<h2 id="tocS_PipelineStatus">PipelineStatus</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestatus"></a>
<a id="schema_PipelineStatus"></a>
<a id="tocSpipelinestatus"></a>
<a id="tocspipelinestatus"></a>

```json
"DISABLED"
```

<h2 id="tocS_ImageScanningConfiguration">ImageScanningConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanningconfiguration"></a>
<a id="schema_ImageScanningConfiguration"></a>
<a id="tocSimagescanningconfiguration"></a>
<a id="tocsimagescanningconfiguration"></a>

```json
{
  "imageScanningEnabled": {},
  "ecrConfiguration": {
    "repositoryName": {},
    "containerTags": {}
  }
}
```

Contains settings for Image Builder image resource and container image scans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageScanningEnabled|object|false|none|none|
|ecrConfiguration|object|false|none|none|

<h2 id="tocS_CreateImagePipelineRequest">CreateImagePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagepipelinerequest"></a>
<a id="schema_CreateImagePipelineRequest"></a>
<a id="tocScreateimagepipelinerequest"></a>
<a id="tocscreateimagepipelinerequest"></a>

```json
{
  "name": {},
  "description": {},
  "imageRecipeArn": {},
  "containerRecipeArn": {},
  "infrastructureConfigurationArn": {},
  "distributionConfigurationArn": {},
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": {},
  "schedule": {
    "scheduleExpression": {},
    "timezone": {},
    "pipelineExecutionStartCondition": {}
  },
  "status": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {},
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|imageRecipeArn|object|false|none|none|
|containerRecipeArn|object|false|none|none|
|infrastructureConfigurationArn|object|true|none|none|
|distributionConfigurationArn|object|false|none|none|
|imageTestsConfiguration|object|false|none|none|
|enhancedImageMetadataEnabled|object|false|none|none|
|schedule|object|false|none|none|
|status|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_ImagePipelineArn">ImagePipelineArn</h2>
<!-- backwards compatibility -->
<a id="schemaimagepipelinearn"></a>
<a id="schema_ImagePipelineArn"></a>
<a id="tocSimagepipelinearn"></a>
<a id="tocsimagepipelinearn"></a>

```json
"string"
```

<h2 id="tocS_CreateImageRecipeRequest">CreateImageRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagereciperequest"></a>
<a id="schema_CreateImageRecipeRequest"></a>
<a id="tocScreateimagereciperequest"></a>
<a id="tocscreateimagereciperequest"></a>

```json
{
  "name": {},
  "description": {},
  "semanticVersion": {},
  "components": {},
  "parentImage": {},
  "blockDeviceMappings": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": {},
  "additionalInstanceConfiguration": {
    "systemsManagerAgent": {
      "uninstallAfterBuild": {}
    },
    "userDataOverride": {}
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|semanticVersion|object|true|none|none|
|components|object|true|none|none|
|parentImage|object|true|none|none|
|blockDeviceMappings|object|false|none|none|
|tags|object|false|none|none|
|workingDirectory|object|false|none|none|
|additionalInstanceConfiguration|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_CreateImageRequest">CreateImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagerequest"></a>
<a id="schema_CreateImageRequest"></a>
<a id="tocScreateimagerequest"></a>
<a id="tocscreateimagerequest"></a>

```json
{
  "imageRecipeArn": {},
  "containerRecipeArn": {},
  "distributionConfigurationArn": {},
  "infrastructureConfigurationArn": {},
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {},
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageRecipeArn|object|false|none|none|
|containerRecipeArn|object|false|none|none|
|distributionConfigurationArn|object|false|none|none|
|infrastructureConfigurationArn|object|true|none|none|
|imageTestsConfiguration|object|false|none|none|
|enhancedImageMetadataEnabled|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_InstanceTypeList">InstanceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemainstancetypelist"></a>
<a id="schema_InstanceTypeList"></a>
<a id="tocSinstancetypelist"></a>
<a id="tocsinstancetypelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_InstanceProfileNameType">InstanceProfileNameType</h2>
<!-- backwards compatibility -->
<a id="schemainstanceprofilenametype"></a>
<a id="schema_InstanceProfileNameType"></a>
<a id="tocSinstanceprofilenametype"></a>
<a id="tocsinstanceprofilenametype"></a>

```json
"string"
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

<h2 id="tocS_Logging">Logging</h2>
<!-- backwards compatibility -->
<a id="schemalogging"></a>
<a id="schema_Logging"></a>
<a id="tocSlogging"></a>
<a id="tocslogging"></a>

```json
{
  "s3Logs": {
    "s3BucketName": {},
    "s3KeyPrefix": {}
  }
}
```

Logging configuration defines where Image Builder uploads your logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3Logs|object|false|none|none|

<h2 id="tocS_SnsTopicArn">SnsTopicArn</h2>
<!-- backwards compatibility -->
<a id="schemasnstopicarn"></a>
<a id="schema_SnsTopicArn"></a>
<a id="tocSsnstopicarn"></a>
<a id="tocssnstopicarn"></a>

```json
"string"
```

<h2 id="tocS_ResourceTagMap">ResourceTagMap</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetagmap"></a>
<a id="schema_ResourceTagMap"></a>
<a id="tocSresourcetagmap"></a>
<a id="tocsresourcetagmap"></a>

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

<h2 id="tocS_InstanceMetadataOptions">InstanceMetadataOptions</h2>
<!-- backwards compatibility -->
<a id="schemainstancemetadataoptions"></a>
<a id="schema_InstanceMetadataOptions"></a>
<a id="tocSinstancemetadataoptions"></a>
<a id="tocsinstancemetadataoptions"></a>

```json
{
  "httpTokens": {},
  "httpPutResponseHopLimit": {}
}
```

The instance metadata options that apply to the HTTP requests that pipeline builds use to launch EC2 build and test instances. For more information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 User Guide</i> </i> for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the <i> <i>Amazon EC2 Windows Guide</i> </i> for Windows instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpTokens|object|false|none|none|
|httpPutResponseHopLimit|object|false|none|none|

<h2 id="tocS_CreateInfrastructureConfigurationRequest">CreateInfrastructureConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinfrastructureconfigurationrequest"></a>
<a id="schema_CreateInfrastructureConfigurationRequest"></a>
<a id="tocScreateinfrastructureconfigurationrequest"></a>
<a id="tocscreateinfrastructureconfigurationrequest"></a>

```json
{
  "name": {},
  "description": {},
  "instanceTypes": {},
  "instanceProfileName": {},
  "securityGroupIds": {},
  "subnetId": {},
  "logging": {
    "s3Logs": {
      "s3BucketName": {},
      "s3KeyPrefix": {}
    }
  },
  "keyPair": {},
  "terminateInstanceOnFailure": {},
  "snsTopicArn": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceMetadataOptions": {
    "httpTokens": {},
    "httpPutResponseHopLimit": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|description|object|false|none|none|
|instanceTypes|object|false|none|none|
|instanceProfileName|object|true|none|none|
|securityGroupIds|object|false|none|none|
|subnetId|object|false|none|none|
|logging|object|false|none|none|
|keyPair|object|false|none|none|
|terminateInstanceOnFailure|object|false|none|none|
|snsTopicArn|object|false|none|none|
|resourceTags|object|false|none|none|
|instanceMetadataOptions|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_NonNegativeDouble">NonNegativeDouble</h2>
<!-- backwards compatibility -->
<a id="schemanonnegativedouble"></a>
<a id="schema_NonNegativeDouble"></a>
<a id="tocSnonnegativedouble"></a>
<a id="tocsnonnegativedouble"></a>

```json
0
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
  "version": {},
  "source": {}
}
```

Amazon Inspector generates a risk score for each finding. This score helps you to prioritize findings, to focus on the most critical findings and the most vulnerable resources. The score uses the Common Vulnerability Scoring System (CVSS) format. This format is a modification of the base CVSS score that the National Vulnerability Database (NVD) provides. For more information about severity levels, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the <i>Amazon Inspector User Guide</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseScore|object|false|none|none|
|scoringVector|object|false|none|none|
|version|object|false|none|none|
|source|object|false|none|none|

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

Details about an adjustment that Amazon Inspector made to the CVSS score for a finding.

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

<h2 id="tocS_CvssScoreDetails">CvssScoreDetails</h2>
<!-- backwards compatibility -->
<a id="schemacvssscoredetails"></a>
<a id="schema_CvssScoreDetails"></a>
<a id="tocScvssscoredetails"></a>
<a id="tocscvssscoredetails"></a>

```json
{
  "scoreSource": {},
  "cvssSource": {},
  "version": {},
  "score": {},
  "scoringVector": {},
  "adjustments": {}
}
```

Details about the source of the score, and the factors that determined the adjustments to create the final score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreSource|object|false|none|none|
|cvssSource|object|false|none|none|
|version|object|false|none|none|
|score|object|false|none|none|
|scoringVector|object|false|none|none|
|adjustments|object|false|none|none|

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
    "version": {},
    "source": {}
  }
]
```

<h2 id="tocS_DateTimeTimestamp">DateTimeTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemadatetimetimestamp"></a>
<a id="schema_DateTimeTimestamp"></a>
<a id="tocSdatetimetimestamp"></a>
<a id="tocsdatetimetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeleteComponentRequest">DeleteComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecomponentrequest"></a>
<a id="schema_DeleteComponentRequest"></a>
<a id="tocSdeletecomponentrequest"></a>
<a id="tocsdeletecomponentrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteContainerRecipeRequest">DeleteContainerRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletecontainerreciperequest"></a>
<a id="schema_DeleteContainerRecipeRequest"></a>
<a id="tocSdeletecontainerreciperequest"></a>
<a id="tocsdeletecontainerreciperequest"></a>

```json
{}
```

<h2 id="tocS_DeleteDistributionConfigurationRequest">DeleteDistributionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletedistributionconfigurationrequest"></a>
<a id="schema_DeleteDistributionConfigurationRequest"></a>
<a id="tocSdeletedistributionconfigurationrequest"></a>
<a id="tocsdeletedistributionconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteImagePipelineRequest">DeleteImagePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagepipelinerequest"></a>
<a id="schema_DeleteImagePipelineRequest"></a>
<a id="tocSdeleteimagepipelinerequest"></a>
<a id="tocsdeleteimagepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteImageRecipeRequest">DeleteImageRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagereciperequest"></a>
<a id="schema_DeleteImageRecipeRequest"></a>
<a id="tocSdeleteimagereciperequest"></a>
<a id="tocsdeleteimagereciperequest"></a>

```json
{}
```

<h2 id="tocS_DeleteImageRequest">DeleteImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimagerequest"></a>
<a id="schema_DeleteImageRequest"></a>
<a id="tocSdeleteimagerequest"></a>
<a id="tocsdeleteimagerequest"></a>

```json
{}
```

<h2 id="tocS_DeleteInfrastructureConfigurationRequest">DeleteInfrastructureConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinfrastructureconfigurationrequest"></a>
<a id="schema_DeleteInfrastructureConfigurationRequest"></a>
<a id="tocSdeleteinfrastructureconfigurationrequest"></a>
<a id="tocsdeleteinfrastructureconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DiskImageFormat">DiskImageFormat</h2>
<!-- backwards compatibility -->
<a id="schemadiskimageformat"></a>
<a id="schema_DiskImageFormat"></a>
<a id="tocSdiskimageformat"></a>
<a id="tocsdiskimageformat"></a>

```json
"VMDK"
```

<h2 id="tocS_LicenseConfigurationArnList">LicenseConfigurationArnList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationarnlist"></a>
<a id="schema_LicenseConfigurationArnList"></a>
<a id="tocSlicenseconfigurationarnlist"></a>
<a id="tocslicenseconfigurationarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchTemplateConfigurationList">LaunchTemplateConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateconfigurationlist"></a>
<a id="schema_LaunchTemplateConfigurationList"></a>
<a id="tocSlaunchtemplateconfigurationlist"></a>
<a id="tocslaunchtemplateconfigurationlist"></a>

```json
[
  {
    "launchTemplateId": {},
    "accountId": {},
    "setDefaultVersion": {}
  }
]
```

<h2 id="tocS_S3ExportConfiguration">S3ExportConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3exportconfiguration"></a>
<a id="schema_S3ExportConfiguration"></a>
<a id="tocSs3exportconfiguration"></a>
<a id="tocss3exportconfiguration"></a>

```json
{
  "roleName": {},
  "diskImageFormat": {},
  "s3Bucket": {},
  "s3Prefix": {}
}
```

Properties that configure export from your build instance to a compatible file format for your VM.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleName|object|true|none|none|
|diskImageFormat|object|true|none|none|
|s3Bucket|object|true|none|none|
|s3Prefix|object|false|none|none|

<h2 id="tocS_FastLaunchConfigurationList">FastLaunchConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemafastlaunchconfigurationlist"></a>
<a id="schema_FastLaunchConfigurationList"></a>
<a id="tocSfastlaunchconfigurationlist"></a>
<a id="tocsfastlaunchconfigurationlist"></a>

```json
[
  {
    "enabled": {},
    "snapshotConfiguration": {
      "targetResourceCount": {}
    },
    "maxParallelLaunches": {},
    "launchTemplate": {
      "launchTemplateId": {},
      "launchTemplateName": {},
      "launchTemplateVersion": {}
    },
    "accountId": {}
  }
]
```

<h2 id="tocS_DistributionTimeoutMinutes">DistributionTimeoutMinutes</h2>
<!-- backwards compatibility -->
<a id="schemadistributiontimeoutminutes"></a>
<a id="schema_DistributionTimeoutMinutes"></a>
<a id="tocSdistributiontimeoutminutes"></a>
<a id="tocsdistributiontimeoutminutes"></a>

```json
30
```

<h2 id="tocS_DistributionConfiguration">DistributionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfiguration"></a>
<a id="schema_DistributionConfiguration"></a>
<a id="tocSdistributionconfiguration"></a>
<a id="tocsdistributionconfiguration"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "distributions": {},
  "timeoutMinutes": {},
  "dateCreated": {},
  "dateUpdated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A distribution configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|distributions|object|false|none|none|
|timeoutMinutes|object|true|none|none|
|dateCreated|object|false|none|none|
|dateUpdated|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_RegionList">RegionList</h2>
<!-- backwards compatibility -->
<a id="schemaregionlist"></a>
<a id="schema_RegionList"></a>
<a id="tocSregionlist"></a>
<a id="tocsregionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DistributionConfigurationSummary">DistributionConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfigurationsummary"></a>
<a id="schema_DistributionConfigurationSummary"></a>
<a id="tocSdistributionconfigurationsummary"></a>
<a id="tocsdistributionconfigurationsummary"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "dateCreated": {},
  "dateUpdated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "regions": {}
}
```

A high-level overview of a distribution configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|dateCreated|object|false|none|none|
|dateUpdated|object|false|none|none|
|tags|object|false|none|none|
|regions|object|false|none|none|

<h2 id="tocS_DistributionConfigurationSummaryList">DistributionConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemadistributionconfigurationsummarylist"></a>
<a id="schema_DistributionConfigurationSummaryList"></a>
<a id="tocSdistributionconfigurationsummarylist"></a>
<a id="tocsdistributionconfigurationsummarylist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "dateCreated": {},
    "dateUpdated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "regions": {}
  }
]
```

<h2 id="tocS_EbsIopsInteger">EbsIopsInteger</h2>
<!-- backwards compatibility -->
<a id="schemaebsiopsinteger"></a>
<a id="schema_EbsIopsInteger"></a>
<a id="tocSebsiopsinteger"></a>
<a id="tocsebsiopsinteger"></a>

```json
100
```

<h2 id="tocS_EbsVolumeSizeInteger">EbsVolumeSizeInteger</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumesizeinteger"></a>
<a id="schema_EbsVolumeSizeInteger"></a>
<a id="tocSebsvolumesizeinteger"></a>
<a id="tocsebsvolumesizeinteger"></a>

```json
1
```

<h2 id="tocS_EbsVolumeType">EbsVolumeType</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumetype"></a>
<a id="schema_EbsVolumeType"></a>
<a id="tocSebsvolumetype"></a>
<a id="tocsebsvolumetype"></a>

```json
"standard"
```

<h2 id="tocS_EbsVolumeThroughput">EbsVolumeThroughput</h2>
<!-- backwards compatibility -->
<a id="schemaebsvolumethroughput"></a>
<a id="schema_EbsVolumeThroughput"></a>
<a id="tocSebsvolumethroughput"></a>
<a id="tocsebsvolumethroughput"></a>

```json
125
```

<h2 id="tocS_EbsInstanceBlockDeviceSpecification">EbsInstanceBlockDeviceSpecification</h2>
<!-- backwards compatibility -->
<a id="schemaebsinstanceblockdevicespecification"></a>
<a id="schema_EbsInstanceBlockDeviceSpecification"></a>
<a id="tocSebsinstanceblockdevicespecification"></a>
<a id="tocsebsinstanceblockdevicespecification"></a>

```json
{
  "encrypted": {},
  "deleteOnTermination": {},
  "iops": {},
  "kmsKeyId": {},
  "snapshotId": {},
  "volumeSize": {},
  "volumeType": {},
  "throughput": {}
}
```

Amazon EBS-specific block device mapping specifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encrypted|object|false|none|none|
|deleteOnTermination|object|false|none|none|
|iops|object|false|none|none|
|kmsKeyId|object|false|none|none|
|snapshotId|object|false|none|none|
|volumeSize|object|false|none|none|
|volumeType|object|false|none|none|
|throughput|object|false|none|none|

<h2 id="tocS_EmptyString">EmptyString</h2>
<!-- backwards compatibility -->
<a id="schemaemptystring"></a>
<a id="schema_EmptyString"></a>
<a id="tocSemptystring"></a>
<a id="tocsemptystring"></a>

```json
""
```

<h2 id="tocS_FastLaunchSnapshotConfiguration">FastLaunchSnapshotConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafastlaunchsnapshotconfiguration"></a>
<a id="schema_FastLaunchSnapshotConfiguration"></a>
<a id="tocSfastlaunchsnapshotconfiguration"></a>
<a id="tocsfastlaunchsnapshotconfiguration"></a>

```json
{
  "targetResourceCount": {}
}
```

Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetResourceCount|object|false|none|none|

<h2 id="tocS_MaxParallelLaunches">MaxParallelLaunches</h2>
<!-- backwards compatibility -->
<a id="schemamaxparallellaunches"></a>
<a id="schema_MaxParallelLaunches"></a>
<a id="tocSmaxparallellaunches"></a>
<a id="tocsmaxparallellaunches"></a>

```json
1
```

<h2 id="tocS_FastLaunchLaunchTemplateSpecification">FastLaunchLaunchTemplateSpecification</h2>
<!-- backwards compatibility -->
<a id="schemafastlaunchlaunchtemplatespecification"></a>
<a id="schema_FastLaunchLaunchTemplateSpecification"></a>
<a id="tocSfastlaunchlaunchtemplatespecification"></a>
<a id="tocsfastlaunchlaunchtemplatespecification"></a>

```json
{
  "launchTemplateId": {},
  "launchTemplateName": {},
  "launchTemplateVersion": {}
}
```

<p>Identifies the launch template that the associated Windows AMI uses for launching an instance when faster launching is enabled.</p> <note> <p>You can specify either the <code>launchTemplateName</code> or the <code>launchTemplateId</code>, but not both.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchTemplateId|object|false|none|none|
|launchTemplateName|object|false|none|none|
|launchTemplateVersion|object|false|none|none|

<h2 id="tocS_FastLaunchConfiguration">FastLaunchConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafastlaunchconfiguration"></a>
<a id="schema_FastLaunchConfiguration"></a>
<a id="tocSfastlaunchconfiguration"></a>
<a id="tocsfastlaunchconfiguration"></a>

```json
{
  "enabled": {},
  "snapshotConfiguration": {
    "targetResourceCount": {}
  },
  "maxParallelLaunches": {},
  "launchTemplate": {
    "launchTemplateId": {},
    "launchTemplateName": {},
    "launchTemplateVersion": {}
  },
  "accountId": {}
}
```

Define and configure faster launching for output Windows AMIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|object|true|none|none|
|snapshotConfiguration|object|false|none|none|
|maxParallelLaunches|object|false|none|none|
|launchTemplate|object|false|none|none|
|accountId|object|false|none|none|

<h2 id="tocS_LaunchTemplateId">LaunchTemplateId</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateid"></a>
<a id="schema_LaunchTemplateId"></a>
<a id="tocSlaunchtemplateid"></a>
<a id="tocslaunchtemplateid"></a>

```json
"string"
```

<h2 id="tocS_TargetResourceCount">TargetResourceCount</h2>
<!-- backwards compatibility -->
<a id="schematargetresourcecount"></a>
<a id="schema_TargetResourceCount"></a>
<a id="tocStargetresourcecount"></a>
<a id="tocstargetresourcecount"></a>

```json
1
```

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_FilterValue">FilterValue</h2>
<!-- backwards compatibility -->
<a id="schemafiltervalue"></a>
<a id="schema_FilterValue"></a>
<a id="tocSfiltervalue"></a>
<a id="tocsfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_GetComponentPolicyRequest">GetComponentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentpolicyrequest"></a>
<a id="schema_GetComponentPolicyRequest"></a>
<a id="tocSgetcomponentpolicyrequest"></a>
<a id="tocsgetcomponentpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_ResourcePolicyDocument">ResourcePolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemaresourcepolicydocument"></a>
<a id="schema_ResourcePolicyDocument"></a>
<a id="tocSresourcepolicydocument"></a>
<a id="tocsresourcepolicydocument"></a>

```json
"string"
```

<h2 id="tocS_GetComponentRequest">GetComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcomponentrequest"></a>
<a id="schema_GetComponentRequest"></a>
<a id="tocSgetcomponentrequest"></a>
<a id="tocsgetcomponentrequest"></a>

```json
{}
```

<h2 id="tocS_GetContainerRecipePolicyRequest">GetContainerRecipePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerrecipepolicyrequest"></a>
<a id="schema_GetContainerRecipePolicyRequest"></a>
<a id="tocSgetcontainerrecipepolicyrequest"></a>
<a id="tocsgetcontainerrecipepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetContainerRecipeRequest">GetContainerRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainerreciperequest"></a>
<a id="schema_GetContainerRecipeRequest"></a>
<a id="tocSgetcontainerreciperequest"></a>
<a id="tocsgetcontainerreciperequest"></a>

```json
{}
```

<h2 id="tocS_GetDistributionConfigurationRequest">GetDistributionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdistributionconfigurationrequest"></a>
<a id="schema_GetDistributionConfigurationRequest"></a>
<a id="tocSgetdistributionconfigurationrequest"></a>
<a id="tocsgetdistributionconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_GetImagePipelineRequest">GetImagePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimagepipelinerequest"></a>
<a id="schema_GetImagePipelineRequest"></a>
<a id="tocSgetimagepipelinerequest"></a>
<a id="tocsgetimagepipelinerequest"></a>

```json
{}
```

<h2 id="tocS_ImagePipeline">ImagePipeline</h2>
<!-- backwards compatibility -->
<a id="schemaimagepipeline"></a>
<a id="schema_ImagePipeline"></a>
<a id="tocSimagepipeline"></a>
<a id="tocsimagepipeline"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "platform": {},
  "enhancedImageMetadataEnabled": {},
  "imageRecipeArn": {},
  "containerRecipeArn": {},
  "infrastructureConfigurationArn": {},
  "distributionConfigurationArn": {},
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "schedule": {
    "scheduleExpression": {},
    "timezone": {},
    "pipelineExecutionStartCondition": {}
  },
  "status": {},
  "dateCreated": {},
  "dateUpdated": {},
  "dateLastRun": {},
  "dateNextRun": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

Details of an image pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|platform|object|false|none|none|
|enhancedImageMetadataEnabled|object|false|none|none|
|imageRecipeArn|object|false|none|none|
|containerRecipeArn|object|false|none|none|
|infrastructureConfigurationArn|object|false|none|none|
|distributionConfigurationArn|object|false|none|none|
|imageTestsConfiguration|object|false|none|none|
|schedule|object|false|none|none|
|status|object|false|none|none|
|dateCreated|object|false|none|none|
|dateUpdated|object|false|none|none|
|dateLastRun|object|false|none|none|
|dateNextRun|object|false|none|none|
|tags|object|false|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_GetImagePolicyRequest">GetImagePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimagepolicyrequest"></a>
<a id="schema_GetImagePolicyRequest"></a>
<a id="tocSgetimagepolicyrequest"></a>
<a id="tocsgetimagepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetImageRecipePolicyRequest">GetImageRecipePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimagerecipepolicyrequest"></a>
<a id="schema_GetImageRecipePolicyRequest"></a>
<a id="tocSgetimagerecipepolicyrequest"></a>
<a id="tocsgetimagerecipepolicyrequest"></a>

```json
{}
```

<h2 id="tocS_GetImageRecipeRequest">GetImageRecipeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimagereciperequest"></a>
<a id="schema_GetImageRecipeRequest"></a>
<a id="tocSgetimagereciperequest"></a>
<a id="tocsgetimagereciperequest"></a>

```json
{}
```

<h2 id="tocS_ImageRecipe">ImageRecipe</h2>
<!-- backwards compatibility -->
<a id="schemaimagerecipe"></a>
<a id="schema_ImageRecipe"></a>
<a id="tocSimagerecipe"></a>
<a id="tocsimagerecipe"></a>

```json
{
  "arn": {},
  "type": {},
  "name": {},
  "description": {},
  "platform": {},
  "owner": {},
  "version": {},
  "components": {},
  "parentImage": {},
  "blockDeviceMappings": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "workingDirectory": {},
  "additionalInstanceConfiguration": {
    "systemsManagerAgent": {
      "uninstallAfterBuild": {}
    },
    "userDataOverride": {}
  }
}
```

An image recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|type|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|platform|object|false|none|none|
|owner|object|false|none|none|
|version|object|false|none|none|
|components|object|false|none|none|
|parentImage|object|false|none|none|
|blockDeviceMappings|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|
|workingDirectory|object|false|none|none|
|additionalInstanceConfiguration|object|false|none|none|

<h2 id="tocS_ImageVersionArnOrBuildVersionArn">ImageVersionArnOrBuildVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaimageversionarnorbuildversionarn"></a>
<a id="schema_ImageVersionArnOrBuildVersionArn"></a>
<a id="tocSimageversionarnorbuildversionarn"></a>
<a id="tocsimageversionarnorbuildversionarn"></a>

```json
"string"
```

<h2 id="tocS_GetImageRequest">GetImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetimagerequest"></a>
<a id="schema_GetImageRequest"></a>
<a id="tocSgetimagerequest"></a>
<a id="tocsgetimagerequest"></a>

```json
{}
```

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "arn": {},
  "type": {},
  "name": {},
  "version": {},
  "platform": {},
  "enhancedImageMetadataEnabled": {},
  "osVersion": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "imageRecipe": {
    "arn": {},
    "type": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "parentImage": {},
    "blockDeviceMappings": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "additionalInstanceConfiguration": {
      "systemsManagerAgent": {
        "uninstallAfterBuild": {}
      },
      "userDataOverride": {}
    }
  },
  "containerRecipe": {
    "arn": {},
    "containerType": {},
    "name": {},
    "description": {},
    "platform": {},
    "owner": {},
    "version": {},
    "components": {},
    "instanceConfiguration": {
      "image": {},
      "blockDeviceMappings": {}
    },
    "dockerfileTemplateData": {},
    "kmsKeyId": {},
    "encrypted": {},
    "parentImage": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "workingDirectory": {},
    "targetRepository": {
      "service": {},
      "repositoryName": {}
    }
  },
  "sourcePipelineName": {},
  "sourcePipelineArn": {},
  "infrastructureConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "instanceTypes": {},
    "instanceProfileName": {},
    "securityGroupIds": {},
    "subnetId": {},
    "logging": {
      "s3Logs": {
        "s3BucketName": {},
        "s3KeyPrefix": {}
      }
    },
    "keyPair": {},
    "terminateInstanceOnFailure": {},
    "snsTopicArn": {},
    "dateCreated": {},
    "dateUpdated": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceMetadataOptions": {
      "httpTokens": {},
      "httpPutResponseHopLimit": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "distributionConfiguration": {
    "arn": {},
    "name": {},
    "description": {},
    "distributions": {},
    "timeoutMinutes": {},
    "dateCreated": {},
    "dateUpdated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "dateCreated": {},
  "outputResources": {
    "amis": {},
    "containers": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildType": {},
  "imageSource": {},
  "scanState": {
    "status": {},
    "reason": {}
  },
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

An Image Builder image. You must specify exactly one recipe for the image – either a container recipe (<code>containerRecipe</code>), which creates a container image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|type|object|false|none|none|
|name|object|false|none|none|
|version|object|false|none|none|
|platform|object|false|none|none|
|enhancedImageMetadataEnabled|object|false|none|none|
|osVersion|object|false|none|none|
|state|object|false|none|none|
|imageRecipe|object|false|none|none|
|containerRecipe|object|false|none|none|
|sourcePipelineName|object|false|none|none|
|sourcePipelineArn|object|false|none|none|
|infrastructureConfiguration|object|false|none|none|
|distributionConfiguration|object|false|none|none|
|imageTestsConfiguration|object|false|none|none|
|dateCreated|object|false|none|none|
|outputResources|object|false|none|none|
|tags|object|false|none|none|
|buildType|object|false|none|none|
|imageSource|object|false|none|none|
|scanState|object|false|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_GetInfrastructureConfigurationRequest">GetInfrastructureConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinfrastructureconfigurationrequest"></a>
<a id="schema_GetInfrastructureConfigurationRequest"></a>
<a id="tocSgetinfrastructureconfigurationrequest"></a>
<a id="tocsgetinfrastructureconfigurationrequest"></a>

```json
{}
```

GetInfrastructureConfiguration request object.

<h2 id="tocS_InfrastructureConfiguration">InfrastructureConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainfrastructureconfiguration"></a>
<a id="schema_InfrastructureConfiguration"></a>
<a id="tocSinfrastructureconfiguration"></a>
<a id="tocsinfrastructureconfiguration"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "instanceTypes": {},
  "instanceProfileName": {},
  "securityGroupIds": {},
  "subnetId": {},
  "logging": {
    "s3Logs": {
      "s3BucketName": {},
      "s3KeyPrefix": {}
    }
  },
  "keyPair": {},
  "terminateInstanceOnFailure": {},
  "snsTopicArn": {},
  "dateCreated": {},
  "dateUpdated": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceMetadataOptions": {
    "httpTokens": {},
    "httpPutResponseHopLimit": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

Details of the infrastructure configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|instanceTypes|object|false|none|none|
|instanceProfileName|object|false|none|none|
|securityGroupIds|object|false|none|none|
|subnetId|object|false|none|none|
|logging|object|false|none|none|
|keyPair|object|false|none|none|
|terminateInstanceOnFailure|object|false|none|none|
|snsTopicArn|object|false|none|none|
|dateCreated|object|false|none|none|
|dateUpdated|object|false|none|none|
|resourceTags|object|false|none|none|
|instanceMetadataOptions|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_WorkflowExecutionId">WorkflowExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionid"></a>
<a id="schema_WorkflowExecutionId"></a>
<a id="tocSworkflowexecutionid"></a>
<a id="tocsworkflowexecutionid"></a>

```json
"string"
```

<h2 id="tocS_GetWorkflowExecutionRequest">GetWorkflowExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowexecutionrequest"></a>
<a id="schema_GetWorkflowExecutionRequest"></a>
<a id="tocSgetworkflowexecutionrequest"></a>
<a id="tocsgetworkflowexecutionrequest"></a>

```json
{}
```

<h2 id="tocS_WorkflowBuildVersionArn">WorkflowBuildVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowbuildversionarn"></a>
<a id="schema_WorkflowBuildVersionArn"></a>
<a id="tocSworkflowbuildversionarn"></a>
<a id="tocsworkflowbuildversionarn"></a>

```json
"string"
```

<h2 id="tocS_WorkflowType">WorkflowType</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowtype"></a>
<a id="schema_WorkflowType"></a>
<a id="tocSworkflowtype"></a>
<a id="tocsworkflowtype"></a>

```json
"BUILD"
```

<h2 id="tocS_WorkflowExecutionStatus">WorkflowExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionstatus"></a>
<a id="schema_WorkflowExecutionStatus"></a>
<a id="tocSworkflowexecutionstatus"></a>
<a id="tocsworkflowexecutionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_WorkflowExecutionMessage">WorkflowExecutionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionmessage"></a>
<a id="schema_WorkflowExecutionMessage"></a>
<a id="tocSworkflowexecutionmessage"></a>
<a id="tocsworkflowexecutionmessage"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepCount">WorkflowStepCount</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepcount"></a>
<a id="schema_WorkflowStepCount"></a>
<a id="tocSworkflowstepcount"></a>
<a id="tocsworkflowstepcount"></a>

```json
0
```

<h2 id="tocS_WorkflowStepExecutionId">WorkflowStepExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepexecutionid"></a>
<a id="schema_WorkflowStepExecutionId"></a>
<a id="tocSworkflowstepexecutionid"></a>
<a id="tocsworkflowstepexecutionid"></a>

```json
"string"
```

<h2 id="tocS_GetWorkflowStepExecutionRequest">GetWorkflowStepExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetworkflowstepexecutionrequest"></a>
<a id="schema_GetWorkflowStepExecutionRequest"></a>
<a id="tocSgetworkflowstepexecutionrequest"></a>
<a id="tocsgetworkflowstepexecutionrequest"></a>

```json
{}
```

<h2 id="tocS_WorkflowStepName">WorkflowStepName</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepname"></a>
<a id="schema_WorkflowStepName"></a>
<a id="tocSworkflowstepname"></a>
<a id="tocsworkflowstepname"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepDescription">WorkflowStepDescription</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepdescription"></a>
<a id="schema_WorkflowStepDescription"></a>
<a id="tocSworkflowstepdescription"></a>
<a id="tocsworkflowstepdescription"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepAction">WorkflowStepAction</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepaction"></a>
<a id="schema_WorkflowStepAction"></a>
<a id="tocSworkflowstepaction"></a>
<a id="tocsworkflowstepaction"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepExecutionStatus">WorkflowStepExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepexecutionstatus"></a>
<a id="schema_WorkflowStepExecutionStatus"></a>
<a id="tocSworkflowstepexecutionstatus"></a>
<a id="tocsworkflowstepexecutionstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_WorkflowStepExecutionRollbackStatus">WorkflowStepExecutionRollbackStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepexecutionrollbackstatus"></a>
<a id="schema_WorkflowStepExecutionRollbackStatus"></a>
<a id="tocSworkflowstepexecutionrollbackstatus"></a>
<a id="tocsworkflowstepexecutionrollbackstatus"></a>

```json
"RUNNING"
```

<h2 id="tocS_WorkflowStepMessage">WorkflowStepMessage</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepmessage"></a>
<a id="schema_WorkflowStepMessage"></a>
<a id="tocSworkflowstepmessage"></a>
<a id="tocsworkflowstepmessage"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepInputs">WorkflowStepInputs</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepinputs"></a>
<a id="schema_WorkflowStepInputs"></a>
<a id="tocSworkflowstepinputs"></a>
<a id="tocsworkflowstepinputs"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepOutputs">WorkflowStepOutputs</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepoutputs"></a>
<a id="schema_WorkflowStepOutputs"></a>
<a id="tocSworkflowstepoutputs"></a>
<a id="tocsworkflowstepoutputs"></a>

```json
"string"
```

<h2 id="tocS_WorkflowStepTimeoutSecondsInteger">WorkflowStepTimeoutSecondsInteger</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowsteptimeoutsecondsinteger"></a>
<a id="schema_WorkflowStepTimeoutSecondsInteger"></a>
<a id="tocSworkflowsteptimeoutsecondsinteger"></a>
<a id="tocsworkflowsteptimeoutsecondsinteger"></a>

```json
0
```

<h2 id="tocS_ImageType">ImageType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetype"></a>
<a id="schema_ImageType"></a>
<a id="tocSimagetype"></a>
<a id="tocsimagetype"></a>

```json
"AMI"
```

<h2 id="tocS_OutputResources">OutputResources</h2>
<!-- backwards compatibility -->
<a id="schemaoutputresources"></a>
<a id="schema_OutputResources"></a>
<a id="tocSoutputresources"></a>
<a id="tocsoutputresources"></a>

```json
{
  "amis": {},
  "containers": {}
}
```

The resources produced by this image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amis|object|false|none|none|
|containers|object|false|none|none|

<h2 id="tocS_ImageSource">ImageSource</h2>
<!-- backwards compatibility -->
<a id="schemaimagesource"></a>
<a id="schema_ImageSource"></a>
<a id="tocSimagesource"></a>
<a id="tocsimagesource"></a>

```json
"AMAZON_MANAGED"
```

<h2 id="tocS_ImageScanState">ImageScanState</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanstate"></a>
<a id="schema_ImageScanState"></a>
<a id="tocSimagescanstate"></a>
<a id="tocsimagescanstate"></a>

```json
{
  "status": {},
  "reason": {}
}
```

Shows the vulnerability scan status for a specific image, and the reason for that status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|reason|object|false|none|none|

<h2 id="tocS_ImageAggregation">ImageAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaimageaggregation"></a>
<a id="schema_ImageAggregation"></a>
<a id="tocSimageaggregation"></a>
<a id="tocsimageaggregation"></a>

```json
{
  "imageBuildVersionArn": {},
  "severityCounts": {
    "all": {},
    "critical": {},
    "high": {},
    "medium": {}
  }
}
```

Contains vulnerability counts for a specific image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBuildVersionArn|object|false|none|none|
|severityCounts|object|false|none|none|

<h2 id="tocS_ImageBuildMessage">ImageBuildMessage</h2>
<!-- backwards compatibility -->
<a id="schemaimagebuildmessage"></a>
<a id="schema_ImageBuildMessage"></a>
<a id="tocSimagebuildmessage"></a>
<a id="tocsimagebuildmessage"></a>

```json
"string"
```

<h2 id="tocS_ImagePackage">ImagePackage</h2>
<!-- backwards compatibility -->
<a id="schemaimagepackage"></a>
<a id="schema_ImagePackage"></a>
<a id="tocSimagepackage"></a>
<a id="tocsimagepackage"></a>

```json
{
  "packageName": {},
  "packageVersion": {}
}
```

Represents a package installed on an Image Builder image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageName|object|false|none|none|
|packageVersion|object|false|none|none|

<h2 id="tocS_ImagePackageList">ImagePackageList</h2>
<!-- backwards compatibility -->
<a id="schemaimagepackagelist"></a>
<a id="schema_ImagePackageList"></a>
<a id="tocSimagepackagelist"></a>
<a id="tocsimagepackagelist"></a>

```json
[
  {
    "packageName": {},
    "packageVersion": {}
  }
]
```

<h2 id="tocS_ImagePipelineAggregation">ImagePipelineAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaimagepipelineaggregation"></a>
<a id="schema_ImagePipelineAggregation"></a>
<a id="tocSimagepipelineaggregation"></a>
<a id="tocsimagepipelineaggregation"></a>

```json
{
  "imagePipelineArn": {},
  "severityCounts": {
    "all": {},
    "critical": {},
    "high": {},
    "medium": {}
  }
}
```

Contains vulnerability counts for a specific image pipeline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imagePipelineArn|object|false|none|none|
|severityCounts|object|false|none|none|

<h2 id="tocS_ImagePipelineList">ImagePipelineList</h2>
<!-- backwards compatibility -->
<a id="schemaimagepipelinelist"></a>
<a id="schema_ImagePipelineList"></a>
<a id="tocSimagepipelinelist"></a>
<a id="tocsimagepipelinelist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "platform": {},
    "enhancedImageMetadataEnabled": {},
    "imageRecipeArn": {},
    "containerRecipeArn": {},
    "infrastructureConfigurationArn": {},
    "distributionConfigurationArn": {},
    "imageTestsConfiguration": {
      "imageTestsEnabled": {},
      "timeoutMinutes": {}
    },
    "schedule": {
      "scheduleExpression": {},
      "timezone": {},
      "pipelineExecutionStartCondition": {}
    },
    "status": {},
    "dateCreated": {},
    "dateUpdated": {},
    "dateLastRun": {},
    "dateNextRun": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "imageScanningConfiguration": {
      "imageScanningEnabled": {},
      "ecrConfiguration": {
        "repositoryName": {},
        "containerTags": {}
      }
    }
  }
]
```

<h2 id="tocS_ImageRecipeSummary">ImageRecipeSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagerecipesummary"></a>
<a id="schema_ImageRecipeSummary"></a>
<a id="tocSimagerecipesummary"></a>
<a id="tocsimagerecipesummary"></a>

```json
{
  "arn": {},
  "name": {},
  "platform": {},
  "owner": {},
  "parentImage": {},
  "dateCreated": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A summary of an image recipe.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|platform|object|false|none|none|
|owner|object|false|none|none|
|parentImage|object|false|none|none|
|dateCreated|object|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_ImageRecipeSummaryList">ImageRecipeSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaimagerecipesummarylist"></a>
<a id="schema_ImageRecipeSummaryList"></a>
<a id="tocSimagerecipesummarylist"></a>
<a id="tocsimagerecipesummarylist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "platform": {},
    "owner": {},
    "parentImage": {},
    "dateCreated": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_Remediation">Remediation</h2>
<!-- backwards compatibility -->
<a id="schemaremediation"></a>
<a id="schema_Remediation"></a>
<a id="tocSremediation"></a>
<a id="tocsremediation"></a>

```json
{
  "recommendation": {
    "text": {},
    "url": {}
  }
}
```

Information about how to remediate a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendation|object|false|none|none|

<h2 id="tocS_InspectorScoreDetails">InspectorScoreDetails</h2>
<!-- backwards compatibility -->
<a id="schemainspectorscoredetails"></a>
<a id="schema_InspectorScoreDetails"></a>
<a id="tocSinspectorscoredetails"></a>
<a id="tocsinspectorscoredetails"></a>

```json
{
  "adjustedCvss": {
    "scoreSource": {},
    "cvssSource": {},
    "version": {},
    "score": {},
    "scoringVector": {},
    "adjustments": {}
  }
}
```

Information about the factors that influenced the score that Amazon Inspector assigned for a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustedCvss|object|false|none|none|

<h2 id="tocS_PackageVulnerabilityDetails">PackageVulnerabilityDetails</h2>
<!-- backwards compatibility -->
<a id="schemapackagevulnerabilitydetails"></a>
<a id="schema_PackageVulnerabilityDetails"></a>
<a id="tocSpackagevulnerabilitydetails"></a>
<a id="tocspackagevulnerabilitydetails"></a>

```json
{
  "vulnerabilityId": {},
  "vulnerablePackages": {},
  "source": {},
  "cvss": {},
  "relatedVulnerabilities": {},
  "sourceUrl": {},
  "vendorSeverity": {},
  "vendorCreatedAt": {},
  "vendorUpdatedAt": {},
  "referenceUrls": {}
}
```

Information about package vulnerability findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vulnerabilityId|object|true|none|none|
|vulnerablePackages|object|false|none|none|
|source|object|false|none|none|
|cvss|object|false|none|none|
|relatedVulnerabilities|object|false|none|none|
|sourceUrl|object|false|none|none|
|vendorSeverity|object|false|none|none|
|vendorCreatedAt|object|false|none|none|
|vendorUpdatedAt|object|false|none|none|
|referenceUrls|object|false|none|none|

<h2 id="tocS_ImageScanFinding">ImageScanFinding</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfinding"></a>
<a id="schema_ImageScanFinding"></a>
<a id="tocSimagescanfinding"></a>
<a id="tocsimagescanfinding"></a>

```json
{
  "awsAccountId": {},
  "imageBuildVersionArn": {},
  "imagePipelineArn": {},
  "type": {},
  "description": {},
  "title": {},
  "remediation": {
    "recommendation": {
      "text": {},
      "url": {}
    }
  },
  "severity": {},
  "firstObservedAt": {},
  "updatedAt": {},
  "inspectorScore": {},
  "inspectorScoreDetails": {
    "adjustedCvss": {
      "scoreSource": {},
      "cvssSource": {},
      "version": {},
      "score": {},
      "scoringVector": {},
      "adjustments": {}
    }
  },
  "packageVulnerabilityDetails": {
    "vulnerabilityId": {},
    "vulnerablePackages": {},
    "source": {},
    "cvss": {},
    "relatedVulnerabilities": {},
    "sourceUrl": {},
    "vendorSeverity": {},
    "vendorCreatedAt": {},
    "vendorUpdatedAt": {},
    "referenceUrls": {}
  },
  "fixAvailable": {}
}
```

Contains details about a vulnerability scan finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|awsAccountId|object|false|none|none|
|imageBuildVersionArn|object|false|none|none|
|imagePipelineArn|object|false|none|none|
|type|object|false|none|none|
|description|object|false|none|none|
|title|object|false|none|none|
|remediation|object|false|none|none|
|severity|object|false|none|none|
|firstObservedAt|object|false|none|none|
|updatedAt|object|false|none|none|
|inspectorScore|object|false|none|none|
|inspectorScoreDetails|object|false|none|none|
|packageVulnerabilityDetails|object|false|none|none|
|fixAvailable|object|false|none|none|

<h2 id="tocS_VulnerabilityIdAggregation">VulnerabilityIdAggregation</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityidaggregation"></a>
<a id="schema_VulnerabilityIdAggregation"></a>
<a id="tocSvulnerabilityidaggregation"></a>
<a id="tocsvulnerabilityidaggregation"></a>

```json
{
  "vulnerabilityId": {},
  "severityCounts": {
    "all": {},
    "critical": {},
    "high": {},
    "medium": {}
  }
}
```

Includes counts of image and pipeline resource findings by vulnerability.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vulnerabilityId|object|false|none|none|
|severityCounts|object|false|none|none|

<h2 id="tocS_ImageScanFindingAggregation">ImageScanFindingAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingaggregation"></a>
<a id="schema_ImageScanFindingAggregation"></a>
<a id="tocSimagescanfindingaggregation"></a>
<a id="tocsimagescanfindingaggregation"></a>

```json
{
  "accountAggregation": {
    "accountId": {},
    "severityCounts": {
      "all": {},
      "critical": {},
      "high": {},
      "medium": {}
    }
  },
  "imageAggregation": {
    "imageBuildVersionArn": {},
    "severityCounts": {
      "all": {},
      "critical": {},
      "high": {},
      "medium": {}
    }
  },
  "imagePipelineAggregation": {
    "imagePipelineArn": {},
    "severityCounts": {
      "all": {},
      "critical": {},
      "high": {},
      "medium": {}
    }
  },
  "vulnerabilityIdAggregation": {
    "vulnerabilityId": {},
    "severityCounts": {
      "all": {},
      "critical": {},
      "high": {},
      "medium": {}
    }
  }
}
```

This returns exactly one type of aggregation, based on the filter that Image Builder applies in its API action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountAggregation|object|false|none|none|
|imageAggregation|object|false|none|none|
|imagePipelineAggregation|object|false|none|none|
|vulnerabilityIdAggregation|object|false|none|none|

<h2 id="tocS_ImageScanFindingAggregationsList">ImageScanFindingAggregationsList</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingaggregationslist"></a>
<a id="schema_ImageScanFindingAggregationsList"></a>
<a id="tocSimagescanfindingaggregationslist"></a>
<a id="tocsimagescanfindingaggregationslist"></a>

```json
[
  {
    "accountAggregation": {
      "accountId": {},
      "severityCounts": {
        "all": {},
        "critical": {},
        "high": {},
        "medium": {}
      }
    },
    "imageAggregation": {
      "imageBuildVersionArn": {},
      "severityCounts": {
        "all": {},
        "critical": {},
        "high": {},
        "medium": {}
      }
    },
    "imagePipelineAggregation": {
      "imagePipelineArn": {},
      "severityCounts": {
        "all": {},
        "critical": {},
        "high": {},
        "medium": {}
      }
    },
    "vulnerabilityIdAggregation": {
      "vulnerabilityId": {},
      "severityCounts": {
        "all": {},
        "critical": {},
        "high": {},
        "medium": {}
      }
    }
  }
]
```

<h2 id="tocS_ImageScanFindingsFilterValues">ImageScanFindingsFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingsfiltervalues"></a>
<a id="schema_ImageScanFindingsFilterValues"></a>
<a id="tocSimagescanfindingsfiltervalues"></a>
<a id="tocsimagescanfindingsfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImageScanFindingsFilterList">ImageScanFindingsFilterList</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingsfilterlist"></a>
<a id="schema_ImageScanFindingsFilterList"></a>
<a id="tocSimagescanfindingsfilterlist"></a>
<a id="tocsimagescanfindingsfilterlist"></a>

```json
[
  {
    "name": {},
    "values": {}
  }
]
```

<h2 id="tocS_ImageScanFindingsList">ImageScanFindingsList</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanfindingslist"></a>
<a id="schema_ImageScanFindingsList"></a>
<a id="tocSimagescanfindingslist"></a>
<a id="tocsimagescanfindingslist"></a>

```json
[
  {
    "awsAccountId": {},
    "imageBuildVersionArn": {},
    "imagePipelineArn": {},
    "type": {},
    "description": {},
    "title": {},
    "remediation": {
      "recommendation": {
        "text": {},
        "url": {}
      }
    },
    "severity": {},
    "firstObservedAt": {},
    "updatedAt": {},
    "inspectorScore": {},
    "inspectorScoreDetails": {
      "adjustedCvss": {
        "scoreSource": {},
        "cvssSource": {},
        "version": {},
        "score": {},
        "scoringVector": {},
        "adjustments": {}
      }
    },
    "packageVulnerabilityDetails": {
      "vulnerabilityId": {},
      "vulnerablePackages": {},
      "source": {},
      "cvss": {},
      "relatedVulnerabilities": {},
      "sourceUrl": {},
      "vendorSeverity": {},
      "vendorCreatedAt": {},
      "vendorUpdatedAt": {},
      "referenceUrls": {}
    },
    "fixAvailable": {}
  }
]
```

<h2 id="tocS_ImageScanStatus">ImageScanStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagescanstatus"></a>
<a id="schema_ImageScanStatus"></a>
<a id="tocSimagescanstatus"></a>
<a id="tocsimagescanstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ImageStatus">ImageStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagestatus"></a>
<a id="schema_ImageStatus"></a>
<a id="tocSimagestatus"></a>
<a id="tocsimagestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_ImageSummary">ImageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaimagesummary"></a>
<a id="schema_ImageSummary"></a>
<a id="tocSimagesummary"></a>
<a id="tocsimagesummary"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "version": {},
  "platform": {},
  "osVersion": {},
  "state": {
    "status": {},
    "reason": {}
  },
  "owner": {},
  "dateCreated": {},
  "outputResources": {
    "amis": {},
    "containers": {}
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "buildType": {},
  "imageSource": {}
}
```

An image summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|version|object|false|none|none|
|platform|object|false|none|none|
|osVersion|object|false|none|none|
|state|object|false|none|none|
|owner|object|false|none|none|
|dateCreated|object|false|none|none|
|outputResources|object|false|none|none|
|tags|object|false|none|none|
|buildType|object|false|none|none|
|imageSource|object|false|none|none|

<h2 id="tocS_ImageSummaryList">ImageSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaimagesummarylist"></a>
<a id="schema_ImageSummaryList"></a>
<a id="tocSimagesummarylist"></a>
<a id="tocsimagesummarylist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "version": {},
    "platform": {},
    "osVersion": {},
    "state": {
      "status": {},
      "reason": {}
    },
    "owner": {},
    "dateCreated": {},
    "outputResources": {
      "amis": {},
      "containers": {}
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "buildType": {},
    "imageSource": {}
  }
]
```

<h2 id="tocS_ImageVersion">ImageVersion</h2>
<!-- backwards compatibility -->
<a id="schemaimageversion"></a>
<a id="schema_ImageVersion"></a>
<a id="tocSimageversion"></a>
<a id="tocsimageversion"></a>

```json
{
  "arn": {},
  "name": {},
  "type": {},
  "version": {},
  "platform": {},
  "osVersion": {},
  "owner": {},
  "dateCreated": {},
  "buildType": {},
  "imageSource": {}
}
```

The defining characteristics of a specific version of an Image Builder image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|type|object|false|none|none|
|version|object|false|none|none|
|platform|object|false|none|none|
|osVersion|object|false|none|none|
|owner|object|false|none|none|
|dateCreated|object|false|none|none|
|buildType|object|false|none|none|
|imageSource|object|false|none|none|

<h2 id="tocS_ImageVersionArn">ImageVersionArn</h2>
<!-- backwards compatibility -->
<a id="schemaimageversionarn"></a>
<a id="schema_ImageVersionArn"></a>
<a id="tocSimageversionarn"></a>
<a id="tocsimageversionarn"></a>

```json
"string"
```

<h2 id="tocS_ImageVersionList">ImageVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaimageversionlist"></a>
<a id="schema_ImageVersionList"></a>
<a id="tocSimageversionlist"></a>
<a id="tocsimageversionlist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "type": {},
    "version": {},
    "platform": {},
    "osVersion": {},
    "owner": {},
    "dateCreated": {},
    "buildType": {},
    "imageSource": {}
  }
]
```

<h2 id="tocS_ImportComponentRequest">ImportComponentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportcomponentrequest"></a>
<a id="schema_ImportComponentRequest"></a>
<a id="tocSimportcomponentrequest"></a>
<a id="tocsimportcomponentrequest"></a>

```json
{
  "name": {},
  "semanticVersion": {},
  "description": {},
  "changeDescription": {},
  "type": {},
  "format": {},
  "platform": {},
  "data": {},
  "uri": {},
  "kmsKeyId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|semanticVersion|object|true|none|none|
|description|object|false|none|none|
|changeDescription|object|false|none|none|
|type|object|true|none|none|
|format|object|true|none|none|
|platform|object|true|none|none|
|data|object|false|none|none|
|uri|object|false|none|none|
|kmsKeyId|object|false|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_ImportVmImageRequest">ImportVmImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportvmimagerequest"></a>
<a id="schema_ImportVmImageRequest"></a>
<a id="tocSimportvmimagerequest"></a>
<a id="tocsimportvmimagerequest"></a>

```json
{
  "name": {},
  "semanticVersion": {},
  "description": {},
  "platform": {},
  "osVersion": {},
  "vmImportTaskId": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|semanticVersion|object|true|none|none|
|description|object|false|none|none|
|platform|object|true|none|none|
|osVersion|object|false|none|none|
|vmImportTaskId|object|true|none|none|
|tags|object|false|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_InfrastructureConfigurationSummary">InfrastructureConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemainfrastructureconfigurationsummary"></a>
<a id="schema_InfrastructureConfigurationSummary"></a>
<a id="tocSinfrastructureconfigurationsummary"></a>
<a id="tocsinfrastructureconfigurationsummary"></a>

```json
{
  "arn": {},
  "name": {},
  "description": {},
  "dateCreated": {},
  "dateUpdated": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceTypes": {},
  "instanceProfileName": {}
}
```

The infrastructure used when building Amazon EC2 AMIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|dateCreated|object|false|none|none|
|dateUpdated|object|false|none|none|
|resourceTags|object|false|none|none|
|tags|object|false|none|none|
|instanceTypes|object|false|none|none|
|instanceProfileName|object|false|none|none|

<h2 id="tocS_InfrastructureConfigurationSummaryList">InfrastructureConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemainfrastructureconfigurationsummarylist"></a>
<a id="schema_InfrastructureConfigurationSummaryList"></a>
<a id="tocSinfrastructureconfigurationsummarylist"></a>
<a id="tocsinfrastructureconfigurationsummarylist"></a>

```json
[
  {
    "arn": {},
    "name": {},
    "description": {},
    "dateCreated": {},
    "dateUpdated": {},
    "resourceTags": {
      "property1": "string",
      "property2": "string"
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "instanceTypes": {},
    "instanceProfileName": {}
  }
]
```

<h2 id="tocS_OrganizationArnList">OrganizationArnList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationarnlist"></a>
<a id="schema_OrganizationArnList"></a>
<a id="tocSorganizationarnlist"></a>
<a id="tocsorganizationarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationalUnitArnList">OrganizationalUnitArnList</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitarnlist"></a>
<a id="schema_OrganizationalUnitArnList"></a>
<a id="tocSorganizationalunitarnlist"></a>
<a id="tocsorganizationalunitarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LaunchTemplateConfiguration">LaunchTemplateConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateconfiguration"></a>
<a id="schema_LaunchTemplateConfiguration"></a>
<a id="tocSlaunchtemplateconfiguration"></a>
<a id="tocslaunchtemplateconfiguration"></a>

```json
{
  "launchTemplateId": {},
  "accountId": {},
  "setDefaultVersion": {}
}
```

Identifies an Amazon EC2 launch template to use for a specific account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchTemplateId|object|true|none|none|
|accountId|object|false|none|none|
|setDefaultVersion|object|false|none|none|

<h2 id="tocS_LicenseConfigurationArn">LicenseConfigurationArn</h2>
<!-- backwards compatibility -->
<a id="schemalicenseconfigurationarn"></a>
<a id="schema_LicenseConfigurationArn"></a>
<a id="tocSlicenseconfigurationarn"></a>
<a id="tocslicenseconfigurationarn"></a>

```json
"string"
```

<h2 id="tocS_RestrictedInteger">RestrictedInteger</h2>
<!-- backwards compatibility -->
<a id="schemarestrictedinteger"></a>
<a id="schema_RestrictedInteger"></a>
<a id="tocSrestrictedinteger"></a>
<a id="tocsrestrictedinteger"></a>

```json
1
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

<h2 id="tocS_ListComponentBuildVersionsRequest">ListComponentBuildVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentbuildversionsrequest"></a>
<a id="schema_ListComponentBuildVersionsRequest"></a>
<a id="tocSlistcomponentbuildversionsrequest"></a>
<a id="tocslistcomponentbuildversionsrequest"></a>

```json
{
  "componentVersionArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentVersionArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_Ownership">Ownership</h2>
<!-- backwards compatibility -->
<a id="schemaownership"></a>
<a id="schema_Ownership"></a>
<a id="tocSownership"></a>
<a id="tocsownership"></a>

```json
"Self"
```

<h2 id="tocS_ListComponentsRequest">ListComponentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcomponentsrequest"></a>
<a id="schema_ListComponentsRequest"></a>
<a id="tocSlistcomponentsrequest"></a>
<a id="tocslistcomponentsrequest"></a>

```json
{
  "owner": {},
  "filters": {},
  "byName": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|object|false|none|none|
|filters|object|false|none|none|
|byName|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListContainerRecipesRequest">ListContainerRecipesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainerrecipesrequest"></a>
<a id="schema_ListContainerRecipesRequest"></a>
<a id="tocSlistcontainerrecipesrequest"></a>
<a id="tocslistcontainerrecipesrequest"></a>

```json
{
  "owner": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|object|false|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListDistributionConfigurationsRequest">ListDistributionConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdistributionconfigurationsrequest"></a>
<a id="schema_ListDistributionConfigurationsRequest"></a>
<a id="tocSlistdistributionconfigurationsrequest"></a>
<a id="tocslistdistributionconfigurationsrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageBuildVersionsRequest">ListImageBuildVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagebuildversionsrequest"></a>
<a id="schema_ListImageBuildVersionsRequest"></a>
<a id="tocSlistimagebuildversionsrequest"></a>
<a id="tocslistimagebuildversionsrequest"></a>

```json
{
  "imageVersionArn": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageVersionArn|object|true|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePackagesRequest">ListImagePackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepackagesrequest"></a>
<a id="schema_ListImagePackagesRequest"></a>
<a id="tocSlistimagepackagesrequest"></a>
<a id="tocslistimagepackagesrequest"></a>

```json
{
  "imageBuildVersionArn": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBuildVersionArn|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePipelineImagesRequest">ListImagePipelineImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepipelineimagesrequest"></a>
<a id="schema_ListImagePipelineImagesRequest"></a>
<a id="tocSlistimagepipelineimagesrequest"></a>
<a id="tocslistimagepipelineimagesrequest"></a>

```json
{
  "imagePipelineArn": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imagePipelineArn|object|true|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagePipelinesRequest">ListImagePipelinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagepipelinesrequest"></a>
<a id="schema_ListImagePipelinesRequest"></a>
<a id="tocSlistimagepipelinesrequest"></a>
<a id="tocslistimagepipelinesrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageRecipesRequest">ListImageRecipesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagerecipesrequest"></a>
<a id="schema_ListImageRecipesRequest"></a>
<a id="tocSlistimagerecipesrequest"></a>
<a id="tocslistimagerecipesrequest"></a>

```json
{
  "owner": {},
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|object|false|none|none|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageScanFindingAggregationsRequest">ListImageScanFindingAggregationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagescanfindingaggregationsrequest"></a>
<a id="schema_ListImageScanFindingAggregationsRequest"></a>
<a id="tocSlistimagescanfindingaggregationsrequest"></a>
<a id="tocslistimagescanfindingaggregationsrequest"></a>

```json
{
  "filter": {
    "name": {},
    "values": {}
  },
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[Filter](#schemafilter)|false|none|A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImageScanFindingsRequest">ListImageScanFindingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagescanfindingsrequest"></a>
<a id="schema_ListImageScanFindingsRequest"></a>
<a id="tocSlistimagescanfindingsrequest"></a>
<a id="tocslistimagescanfindingsrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListImagesRequest">ListImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistimagesrequest"></a>
<a id="schema_ListImagesRequest"></a>
<a id="tocSlistimagesrequest"></a>
<a id="tocslistimagesrequest"></a>

```json
{
  "owner": {},
  "filters": {},
  "byName": {},
  "maxResults": {},
  "nextToken": {},
  "includeDeprecated": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|owner|object|false|none|none|
|filters|object|false|none|none|
|byName|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|includeDeprecated|object|false|none|none|

<h2 id="tocS_ListInfrastructureConfigurationsRequest">ListInfrastructureConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistinfrastructureconfigurationsrequest"></a>
<a id="schema_ListInfrastructureConfigurationsRequest"></a>
<a id="tocSlistinfrastructureconfigurationsrequest"></a>
<a id="tocslistinfrastructureconfigurationsrequest"></a>

```json
{
  "filters": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListWorkflowExecutionsRequest">ListWorkflowExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowexecutionsrequest"></a>
<a id="schema_ListWorkflowExecutionsRequest"></a>
<a id="tocSlistworkflowexecutionsrequest"></a>
<a id="tocslistworkflowexecutionsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {},
  "imageBuildVersionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|imageBuildVersionArn|object|true|none|none|

<h2 id="tocS_WorkflowExecutionsList">WorkflowExecutionsList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionslist"></a>
<a id="schema_WorkflowExecutionsList"></a>
<a id="tocSworkflowexecutionslist"></a>
<a id="tocsworkflowexecutionslist"></a>

```json
[
  {
    "workflowBuildVersionArn": {},
    "workflowExecutionId": {},
    "type": {},
    "status": {},
    "message": {},
    "totalStepCount": {},
    "totalStepsSucceeded": {},
    "totalStepsFailed": {},
    "totalStepsSkipped": {},
    "startTime": {},
    "endTime": {}
  }
]
```

<h2 id="tocS_ListWorkflowStepExecutionsRequest">ListWorkflowStepExecutionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistworkflowstepexecutionsrequest"></a>
<a id="schema_ListWorkflowStepExecutionsRequest"></a>
<a id="tocSlistworkflowstepexecutionsrequest"></a>
<a id="tocslistworkflowstepexecutionsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {},
  "workflowExecutionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|
|workflowExecutionId|object|true|none|none|

<h2 id="tocS_WorkflowStepExecutionsList">WorkflowStepExecutionsList</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepexecutionslist"></a>
<a id="schema_WorkflowStepExecutionsList"></a>
<a id="tocSworkflowstepexecutionslist"></a>
<a id="tocsworkflowstepexecutionslist"></a>

```json
[
  {
    "stepExecutionId": {},
    "name": {},
    "description": {},
    "action": {},
    "status": {},
    "rollbackStatus": {},
    "message": {},
    "inputs": {},
    "outputs": {},
    "startTime": {},
    "endTime": {}
  }
]
```

<h2 id="tocS_NonEmptyStringList">NonEmptyStringList</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystringlist"></a>
<a id="schema_NonEmptyStringList"></a>
<a id="tocSnonemptystringlist"></a>
<a id="tocsnonemptystringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OrganizationArn">OrganizationArn</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationarn"></a>
<a id="schema_OrganizationArn"></a>
<a id="tocSorganizationarn"></a>
<a id="tocsorganizationarn"></a>

```json
"string"
```

<h2 id="tocS_OrganizationalUnitArn">OrganizationalUnitArn</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationalunitarn"></a>
<a id="schema_OrganizationalUnitArn"></a>
<a id="tocSorganizationalunitarn"></a>
<a id="tocsorganizationalunitarn"></a>

```json
"string"
```

<h2 id="tocS_PackageArchitecture">PackageArchitecture</h2>
<!-- backwards compatibility -->
<a id="schemapackagearchitecture"></a>
<a id="schema_PackageArchitecture"></a>
<a id="tocSpackagearchitecture"></a>
<a id="tocspackagearchitecture"></a>

```json
"string"
```

<h2 id="tocS_PackageEpoch">PackageEpoch</h2>
<!-- backwards compatibility -->
<a id="schemapackageepoch"></a>
<a id="schema_PackageEpoch"></a>
<a id="tocSpackageepoch"></a>
<a id="tocspackageepoch"></a>

```json
0
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

<h2 id="tocS_VulnerablePackageList">VulnerablePackageList</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackagelist"></a>
<a id="schema_VulnerablePackageList"></a>
<a id="tocSvulnerablepackagelist"></a>
<a id="tocsvulnerablepackagelist"></a>

```json
[
  {
    "name": {},
    "version": {},
    "sourceLayerHash": {},
    "epoch": {},
    "release": {},
    "arch": {},
    "packageManager": {},
    "filePath": {},
    "fixedInVersion": {},
    "remediation": {}
  }
]
```

<h2 id="tocS_VulnerabilityIdList">VulnerabilityIdList</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityidlist"></a>
<a id="schema_VulnerabilityIdList"></a>
<a id="tocSvulnerabilityidlist"></a>
<a id="tocsvulnerabilityidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_PutComponentPolicyRequest">PutComponentPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcomponentpolicyrequest"></a>
<a id="schema_PutComponentPolicyRequest"></a>
<a id="tocSputcomponentpolicyrequest"></a>
<a id="tocsputcomponentpolicyrequest"></a>

```json
{
  "componentArn": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentArn|object|true|none|none|
|policy|object|true|none|none|

<h2 id="tocS_PutContainerRecipePolicyRequest">PutContainerRecipePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputcontainerrecipepolicyrequest"></a>
<a id="schema_PutContainerRecipePolicyRequest"></a>
<a id="tocSputcontainerrecipepolicyrequest"></a>
<a id="tocsputcontainerrecipepolicyrequest"></a>

```json
{
  "containerRecipeArn": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerRecipeArn|object|true|none|none|
|policy|object|true|none|none|

<h2 id="tocS_PutImagePolicyRequest">PutImagePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputimagepolicyrequest"></a>
<a id="schema_PutImagePolicyRequest"></a>
<a id="tocSputimagepolicyrequest"></a>
<a id="tocsputimagepolicyrequest"></a>

```json
{
  "imageArn": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageArn|object|true|none|none|
|policy|object|true|none|none|

<h2 id="tocS_PutImageRecipePolicyRequest">PutImageRecipePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputimagerecipepolicyrequest"></a>
<a id="schema_PutImageRecipePolicyRequest"></a>
<a id="tocSputimagerecipepolicyrequest"></a>
<a id="tocsputimagerecipepolicyrequest"></a>

```json
{
  "imageRecipeArn": {},
  "policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageRecipeArn|object|true|none|none|
|policy|object|true|none|none|

<h2 id="tocS_RemediationRecommendation">RemediationRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemaremediationrecommendation"></a>
<a id="schema_RemediationRecommendation"></a>
<a id="tocSremediationrecommendation"></a>
<a id="tocsremediationrecommendation"></a>

```json
{
  "text": {},
  "url": {}
}
```

Details about the recommended course of action to remediate the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|object|false|none|none|
|url|object|false|none|none|

<h2 id="tocS_SeverityCountNumber">SeverityCountNumber</h2>
<!-- backwards compatibility -->
<a id="schemaseveritycountnumber"></a>
<a id="schema_SeverityCountNumber"></a>
<a id="tocSseveritycountnumber"></a>
<a id="tocsseveritycountnumber"></a>

```json
0
```

<h2 id="tocS_SourceLayerHash">SourceLayerHash</h2>
<!-- backwards compatibility -->
<a id="schemasourcelayerhash"></a>
<a id="schema_SourceLayerHash"></a>
<a id="tocSsourcelayerhash"></a>
<a id="tocssourcelayerhash"></a>

```json
"string"
```

<h2 id="tocS_StartImagePipelineExecutionRequest">StartImagePipelineExecutionRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartimagepipelineexecutionrequest"></a>
<a id="schema_StartImagePipelineExecutionRequest"></a>
<a id="tocSstartimagepipelineexecutionrequest"></a>
<a id="tocsstartimagepipelineexecutionrequest"></a>

```json
{
  "imagePipelineArn": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imagePipelineArn|object|true|none|none|
|clientToken|object|true|none|none|

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
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateDistributionConfigurationRequest">UpdateDistributionConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedistributionconfigurationrequest"></a>
<a id="schema_UpdateDistributionConfigurationRequest"></a>
<a id="tocSupdatedistributionconfigurationrequest"></a>
<a id="tocsupdatedistributionconfigurationrequest"></a>

```json
{
  "distributionConfigurationArn": {},
  "description": {},
  "distributions": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distributionConfigurationArn|object|true|none|none|
|description|object|false|none|none|
|distributions|object|true|none|none|
|clientToken|object|true|none|none|

<h2 id="tocS_UpdateImagePipelineRequest">UpdateImagePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateimagepipelinerequest"></a>
<a id="schema_UpdateImagePipelineRequest"></a>
<a id="tocSupdateimagepipelinerequest"></a>
<a id="tocsupdateimagepipelinerequest"></a>

```json
{
  "imagePipelineArn": {},
  "description": {},
  "imageRecipeArn": {},
  "containerRecipeArn": {},
  "infrastructureConfigurationArn": {},
  "distributionConfigurationArn": {},
  "imageTestsConfiguration": {
    "imageTestsEnabled": {},
    "timeoutMinutes": {}
  },
  "enhancedImageMetadataEnabled": {},
  "schedule": {
    "scheduleExpression": {},
    "timezone": {},
    "pipelineExecutionStartCondition": {}
  },
  "status": {},
  "clientToken": {},
  "imageScanningConfiguration": {
    "imageScanningEnabled": {},
    "ecrConfiguration": {
      "repositoryName": {},
      "containerTags": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imagePipelineArn|object|true|none|none|
|description|object|false|none|none|
|imageRecipeArn|object|false|none|none|
|containerRecipeArn|object|false|none|none|
|infrastructureConfigurationArn|object|true|none|none|
|distributionConfigurationArn|object|false|none|none|
|imageTestsConfiguration|object|false|none|none|
|enhancedImageMetadataEnabled|object|false|none|none|
|schedule|object|false|none|none|
|status|object|false|none|none|
|clientToken|object|true|none|none|
|imageScanningConfiguration|object|false|none|none|

<h2 id="tocS_UpdateInfrastructureConfigurationRequest">UpdateInfrastructureConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinfrastructureconfigurationrequest"></a>
<a id="schema_UpdateInfrastructureConfigurationRequest"></a>
<a id="tocSupdateinfrastructureconfigurationrequest"></a>
<a id="tocsupdateinfrastructureconfigurationrequest"></a>

```json
{
  "infrastructureConfigurationArn": {},
  "description": {},
  "instanceTypes": {},
  "instanceProfileName": {},
  "securityGroupIds": {},
  "subnetId": {},
  "logging": {
    "s3Logs": {
      "s3BucketName": {},
      "s3KeyPrefix": {}
    }
  },
  "keyPair": {},
  "terminateInstanceOnFailure": {},
  "snsTopicArn": {},
  "clientToken": {},
  "resourceTags": {
    "property1": "string",
    "property2": "string"
  },
  "instanceMetadataOptions": {
    "httpTokens": {},
    "httpPutResponseHopLimit": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|infrastructureConfigurationArn|object|true|none|none|
|description|object|false|none|none|
|instanceTypes|object|false|none|none|
|instanceProfileName|object|true|none|none|
|securityGroupIds|object|false|none|none|
|subnetId|object|false|none|none|
|logging|object|false|none|none|
|keyPair|object|false|none|none|
|terminateInstanceOnFailure|object|false|none|none|
|snsTopicArn|object|false|none|none|
|clientToken|object|true|none|none|
|resourceTags|object|false|none|none|
|instanceMetadataOptions|object|false|none|none|

<h2 id="tocS_VulnerablePackage">VulnerablePackage</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackage"></a>
<a id="schema_VulnerablePackage"></a>
<a id="tocSvulnerablepackage"></a>
<a id="tocsvulnerablepackage"></a>

```json
{
  "name": {},
  "version": {},
  "sourceLayerHash": {},
  "epoch": {},
  "release": {},
  "arch": {},
  "packageManager": {},
  "filePath": {},
  "fixedInVersion": {},
  "remediation": {}
}
```

Information about a vulnerable package that Amazon Inspector identifies in a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|none|
|version|object|false|none|none|
|sourceLayerHash|object|false|none|none|
|epoch|object|false|none|none|
|release|object|false|none|none|
|arch|object|false|none|none|
|packageManager|object|false|none|none|
|filePath|object|false|none|none|
|fixedInVersion|object|false|none|none|
|remediation|object|false|none|none|

<h2 id="tocS_WorkflowExecutionMetadata">WorkflowExecutionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutionmetadata"></a>
<a id="schema_WorkflowExecutionMetadata"></a>
<a id="tocSworkflowexecutionmetadata"></a>
<a id="tocsworkflowexecutionmetadata"></a>

```json
{
  "workflowBuildVersionArn": {},
  "workflowExecutionId": {},
  "type": {},
  "status": {},
  "message": {},
  "totalStepCount": {},
  "totalStepsSucceeded": {},
  "totalStepsFailed": {},
  "totalStepsSkipped": {},
  "startTime": {},
  "endTime": {}
}
```

Metadata that includes details and status from this runtime instance of the workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowBuildVersionArn|object|false|none|none|
|workflowExecutionId|object|false|none|none|
|type|object|false|none|none|
|status|object|false|none|none|
|message|object|false|none|none|
|totalStepCount|object|false|none|none|
|totalStepsSucceeded|object|false|none|none|
|totalStepsFailed|object|false|none|none|
|totalStepsSkipped|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|

<h2 id="tocS_WorkflowStepMetadata">WorkflowStepMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowstepmetadata"></a>
<a id="schema_WorkflowStepMetadata"></a>
<a id="tocSworkflowstepmetadata"></a>
<a id="tocsworkflowstepmetadata"></a>

```json
{
  "stepExecutionId": {},
  "name": {},
  "description": {},
  "action": {},
  "status": {},
  "rollbackStatus": {},
  "message": {},
  "inputs": {},
  "outputs": {},
  "startTime": {},
  "endTime": {}
}
```

Runtime details and status for the workflow step.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stepExecutionId|object|false|none|none|
|name|object|false|none|none|
|description|object|false|none|none|
|action|object|false|none|none|
|status|object|false|none|none|
|rollbackStatus|object|false|none|none|
|message|object|false|none|none|
|inputs|object|false|none|none|
|outputs|object|false|none|none|
|startTime|object|false|none|none|
|endTime|object|false|none|none|
