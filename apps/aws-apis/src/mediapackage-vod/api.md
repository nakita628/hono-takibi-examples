<h1 id="aws-elemental-mediapackage-vod">AWS Elemental MediaPackage VOD v2018-11-07</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AWS Elemental MediaPackage VOD

Base URLs:

* <a href="http://mediapackage-vod.us-east-1.amazonaws.com">http://mediapackage-vod.us-east-1.amazonaws.com</a> - The MediaPackage Vod multi-region endpoint

* <a href="https://mediapackage-vod.us-east-1.amazonaws.com">https://mediapackage-vod.us-east-1.amazonaws.com</a> - The MediaPackage Vod multi-region endpoint

* <a href="http://mediapackage-vod.cn-north-1.amazonaws.com.cn">http://mediapackage-vod.cn-north-1.amazonaws.com.cn</a> - The MediaPackage Vod endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mediapackage-vod.cn-north-1.amazonaws.com.cn">https://mediapackage-vod.cn-north-1.amazonaws.com.cn</a> - The MediaPackage Vod endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediapackage-vod/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elemental-mediapackage-vod-default">Default</h1>

## ConfigureLogs

<a id="opIdConfigureLogs"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups/string/configure_logs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "egressAccessLogs": {
      "LogGroupName": {}
    }
  }'
```

`PUT /packaging_groups/{id}/configure_logs`

Changes the packaging group's properities to configure log subscription

> Body parameter

```json
{
  "egressAccessLogs": {
    "LogGroupName": {}
  }
}
```

<h3 id="configurelogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of a MediaPackage VOD PackagingGroup resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» egressAccessLogs|body|object|false|Configure egress access logging.|
|» » LogGroupName|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
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

<h3 id="configurelogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ConfigureLogsResponse](#schemaconfigurelogsresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAssets

<a id="opIdListAssets"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/assets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets`

Returns a collection of MediaPackage VOD Asset resources.

<h3 id="listassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Upper bound on number of records to return.|
|nextToken|query|string|false|A token used to resume pagination from the end of a previous request.|
|packagingGroupId|query|string|false|Returns Assets associated with the specified PackagingGroup.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "Assets": {},
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

<h3 id="listassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAssetsResponse](#schemalistassetsresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAsset

<a id="opIdCreateAsset"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id": "string",
    "packagingGroupId": "string",
    "resourceId": "string",
    "sourceArn": "string",
    "sourceRoleArn": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /assets`

Creates a new MediaPackage VOD Asset resource.

> Body parameter

```json
{
  "id": "string",
  "packagingGroupId": "string",
  "resourceId": "string",
  "sourceArn": "string",
  "sourceRoleArn": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createasset-parameters">Parameters</h3>

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
|» id|body|string|true|The unique identifier for the Asset.|
|» packagingGroupId|body|string|true|The ID of the PackagingGroup for the Asset.|
|» resourceId|body|string|false|The resource ID to include in SPEKE key requests.|
|» sourceArn|body|string|true|ARN of the source object in S3.|
|» sourceRoleArn|body|string|true|The IAM role ARN used to access the source S3 bucket.|
|» tags|body|object|false|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "EgressEndpoints": {},
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
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

<h3 id="createasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAssetResponse](#schemacreateassetresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackagingConfigurations

<a id="opIdListPackagingConfigurations"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /packaging_configurations`

Returns a collection of MediaPackage VOD PackagingConfiguration resources.

<h3 id="listpackagingconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Upper bound on number of records to return.|
|nextToken|query|string|false|A token used to resume pagination from the end of a previous request.|
|packagingGroupId|query|string|false|Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "PackagingConfigurations": {}
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

<h3 id="listpackagingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackagingConfigurationsResponse](#schemalistpackagingconfigurationsresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePackagingConfiguration

<a id="opIdCreatePackagingConfiguration"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "cmafPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "IncludeEncoderConfigurationInSegments": {},
      "SegmentDurationSeconds": {}
    },
    "dashPackage": {
      "DashManifests": {},
      "Encryption": {
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeEncoderConfigurationInSegments": {},
      "IncludeIframeOnlyStream": {},
      "PeriodTriggers": {},
      "SegmentDurationSeconds": {},
      "SegmentTemplateFormat": {}
    },
    "hlsPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "IncludeDvbSubtitles": {},
      "SegmentDurationSeconds": {},
      "UseAudioRenditionGroup": {}
    },
    "id": "string",
    "mssPackage": {
      "Encryption": {
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "MssManifests": {},
      "SegmentDurationSeconds": {}
    },
    "packagingGroupId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /packaging_configurations`

Creates a new MediaPackage VOD PackagingConfiguration resource.

> Body parameter

```json
{
  "cmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "dashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "hlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "id": "string",
  "mssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "packagingGroupId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createpackagingconfiguration-parameters">Parameters</h3>

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
|» cmafPackage|body|object|false|A CMAF packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » HlsManifests|body|object|false|none|
|» » IncludeEncoderConfigurationInSegments|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» dashPackage|body|object|false|A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.|
|» » DashManifests|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » IncludeEncoderConfigurationInSegments|body|object|false|none|
|» » IncludeIframeOnlyStream|body|object|false|none|
|» » PeriodTriggers|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » SegmentTemplateFormat|body|object|false|none|
|» hlsPackage|body|object|false|An HTTP Live Streaming (HLS) packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » EncryptionMethod|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » HlsManifests|body|object|false|none|
|» » IncludeDvbSubtitles|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » UseAudioRenditionGroup|body|object|false|none|
|» id|body|string|true|The ID of the PackagingConfiguration.|
|» mssPackage|body|object|false|A Microsoft Smooth Streaming (MSS) PackagingConfiguration.|
|» » Encryption|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » MssManifests|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» packagingGroupId|body|string|true|The ID of a PackagingGroup.|
|» tags|body|object|false|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "CreatedAt": {},
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
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

<h3 id="createpackagingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePackagingConfigurationResponse](#schemacreatepackagingconfigurationresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackagingGroups

<a id="opIdListPackagingGroups"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /packaging_groups`

Returns a collection of MediaPackage VOD PackagingGroup resources.

<h3 id="listpackaginggroups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|Upper bound on number of records to return.|
|nextToken|query|string|false|A token used to resume pagination from the end of a previous request.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
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
  "NextToken": {},
  "PackagingGroups": {}
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

<h3 id="listpackaginggroups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackagingGroupsResponse](#schemalistpackaginggroupsresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePackagingGroup

<a id="opIdCreatePackagingGroup"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    },
    "egressAccessLogs": {
      "LogGroupName": {}
    },
    "id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /packaging_groups`

Creates a new MediaPackage VOD PackagingGroup resource.

> Body parameter

```json
{
  "authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "egressAccessLogs": {
    "LogGroupName": {}
  },
  "id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createpackaginggroup-parameters">Parameters</h3>

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
|» authorization|body|object|false|CDN Authorization credentials|
|» » CdnIdentifierSecret|body|object|false|none|
|» » SecretsRoleArn|body|object|false|none|
|» egressAccessLogs|body|object|false|Configure egress access logging.|
|» » LogGroupName|body|object|false|none|
|» id|body|string|true|The ID of the PackagingGroup.|
|» tags|body|object|false|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
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

<h3 id="createpackaginggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePackagingGroupResponse](#schemacreatepackaginggroupresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAsset

<a id="opIdDescribeAsset"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /assets/{id}`

Returns a description of a MediaPackage VOD Asset resource.

<h3 id="describeasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of an MediaPackage VOD Asset resource.|
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
  "Arn": {},
  "CreatedAt": {},
  "EgressEndpoints": {},
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
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

<h3 id="describeasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAssetResponse](#schemadescribeassetresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAsset

<a id="opIdDeleteAsset"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/assets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /assets/{id}`

Deletes an existing MediaPackage VOD Asset resource.

<h3 id="deleteasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the MediaPackage VOD Asset resource to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

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

<h3 id="deleteasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteAssetResponse](#schemadeleteassetresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePackagingConfiguration

<a id="opIdDescribePackagingConfiguration"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_configurations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /packaging_configurations/{id}`

Returns a description of a MediaPackage VOD PackagingConfiguration resource.

<h3 id="describepackagingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of a MediaPackage VOD PackagingConfiguration resource.|
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
  "Arn": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "CreatedAt": {},
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
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

<h3 id="describepackagingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePackagingConfigurationResponse](#schemadescribepackagingconfigurationresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePackagingConfiguration

<a id="opIdDeletePackagingConfiguration"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_configurations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /packaging_configurations/{id}`

Deletes a MediaPackage VOD PackagingConfiguration resource.

<h3 id="deletepackagingconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the MediaPackage VOD PackagingConfiguration resource to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

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

<h3 id="deletepackagingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeletePackagingConfigurationResponse](#schemadeletepackagingconfigurationresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePackagingGroup

<a id="opIdDescribePackagingGroup"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /packaging_groups/{id}`

Returns a description of a MediaPackage VOD PackagingGroup resource.

<h3 id="describepackaginggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of a MediaPackage VOD PackagingGroup resource.|
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
  "ApproximateAssetCount": {},
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
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

<h3 id="describepackaginggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePackagingGroupResponse](#schemadescribepackaginggroupresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePackagingGroup

<a id="opIdUpdatePackagingGroup"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    }
  }'
```

`PUT /packaging_groups/{id}`

Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.

> Body parameter

```json
{
  "authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  }
}
```

<h3 id="updatepackaginggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of a MediaPackage VOD PackagingGroup resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» authorization|body|object|false|CDN Authorization credentials|
|» » CdnIdentifierSecret|body|object|false|none|
|» » SecretsRoleArn|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ApproximateAssetCount": {},
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
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

<h3 id="updatepackaginggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePackagingGroupResponse](#schemaupdatepackaginggroupresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePackagingGroup

<a id="opIdDeletePackagingGroup"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/packaging_groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /packaging_groups/{id}`

Deletes a MediaPackage VOD PackagingGroup resource.

<h3 id="deletepackaginggroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the MediaPackage VOD PackagingGroup resource to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

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

<h3 id="deletepackaginggroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeletePackagingGroupResponse](#schemadeletepackaginggroupresponse)|
|480|480|UnprocessableEntityException|[UnprocessableEntityException](#schemaunprocessableentityexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|483|483|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource-arn}`

Returns a list of the tags assigned to the specified resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.|
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
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://mediapackage-vod.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{resource-arn}`

Adds tags to the specified resource. You can specify one or more tags to add.

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
|resource-arn|path|string|true|The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mediapackage-vod.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource-arn}#tagKeys`

Removes tags from the specified resource. You can specify one or more tags to remove.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.|
|tagKeys|query|[[__string](#schema__string)]|true|A comma-separated list of the tag keys to remove from the resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_ConfigureLogsResponse">ConfigureLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsresponse"></a>
<a id="schema_ConfigureLogsResponse"></a>
<a id="tocSconfigurelogsresponse"></a>
<a id="tocsconfigurelogsresponse"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|CreatedAt|object|false|none|none|
|DomainName|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
```

<h2 id="tocS_UnprocessableEntityException">UnprocessableEntityException</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessableentityexception"></a>
<a id="schema_UnprocessableEntityException"></a>
<a id="tocSunprocessableentityexception"></a>
<a id="tocsunprocessableentityexception"></a>

```json
null
```

<h2 id="tocS_InternalServerErrorException">InternalServerErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalservererrorexception"></a>
<a id="schema_InternalServerErrorException"></a>
<a id="tocSinternalservererrorexception"></a>
<a id="tocsinternalservererrorexception"></a>

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

<h2 id="tocS_NotFoundException">NotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemanotfoundexception"></a>
<a id="schema_NotFoundException"></a>
<a id="tocSnotfoundexception"></a>
<a id="tocsnotfoundexception"></a>

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

<h2 id="tocS_TooManyRequestsException">TooManyRequestsException</h2>
<!-- backwards compatibility -->
<a id="schematoomanyrequestsexception"></a>
<a id="schema_TooManyRequestsException"></a>
<a id="tocStoomanyrequestsexception"></a>
<a id="tocstoomanyrequestsexception"></a>

```json
null
```

<h2 id="tocS_CreateAssetResponse">CreateAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetresponse"></a>
<a id="schema_CreateAssetResponse"></a>
<a id="tocScreateassetresponse"></a>
<a id="tocscreateassetresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "EgressEndpoints": {},
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|Id|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|ResourceId|object|false|none|none|
|SourceArn|object|false|none|none|
|SourceRoleArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePackagingConfigurationResponse">CreatePackagingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackagingconfigurationresponse"></a>
<a id="schema_CreatePackagingConfigurationResponse"></a>
<a id="tocScreatepackagingconfigurationresponse"></a>
<a id="tocscreatepackagingconfigurationresponse"></a>

```json
{
  "Arn": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "CreatedAt": {},
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|MssPackage|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CmafEncryption">CmafEncryption</h2>
<!-- backwards compatibility -->
<a id="schemacmafencryption"></a>
<a id="schema_CmafEncryption"></a>
<a id="tocScmafencryption"></a>
<a id="tocscmafencryption"></a>

```json
{
  "ConstantInitializationVector": {},
  "SpekeKeyProvider": {
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "RoleArn": {},
    "SystemIds": {},
    "Url": {}
  }
}
```

A CMAF encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstantInitializationVector|object|false|none|none|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS___listOfHlsManifest">__listOfHlsManifest</h2>
<!-- backwards compatibility -->
<a id="schema__listofhlsmanifest"></a>
<a id="schema___listOfHlsManifest"></a>
<a id="tocS__listofhlsmanifest"></a>
<a id="tocs__listofhlsmanifest"></a>

```json
[
  {
    "AdMarkers": {},
    "IncludeIframeOnlyStream": {},
    "ManifestName": {},
    "ProgramDateTimeIntervalSeconds": {},
    "RepeatExtXKey": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  }
]
```

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS___integer">__integer</h2>
<!-- backwards compatibility -->
<a id="schema__integer"></a>
<a id="schema___integer"></a>
<a id="tocS__integer"></a>
<a id="tocs__integer"></a>

```json
0
```

<h2 id="tocS___listOfDashManifest">__listOfDashManifest</h2>
<!-- backwards compatibility -->
<a id="schema__listofdashmanifest"></a>
<a id="schema___listOfDashManifest"></a>
<a id="tocS__listofdashmanifest"></a>
<a id="tocs__listofdashmanifest"></a>

```json
[
  {
    "ManifestLayout": {},
    "ManifestName": {},
    "MinBufferTimeSeconds": {},
    "Profile": {},
    "ScteMarkersSource": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  }
]
```

<h2 id="tocS_DashEncryption">DashEncryption</h2>
<!-- backwards compatibility -->
<a id="schemadashencryption"></a>
<a id="schema_DashEncryption"></a>
<a id="tocSdashencryption"></a>
<a id="tocsdashencryption"></a>

```json
{
  "SpekeKeyProvider": {
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "RoleArn": {},
    "SystemIds": {},
    "Url": {}
  }
}
```

A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS___listOf__PeriodTriggersElement">__listOf__PeriodTriggersElement</h2>
<!-- backwards compatibility -->
<a id="schema__listof__periodtriggerselement"></a>
<a id="schema___listOf__PeriodTriggersElement"></a>
<a id="tocS__listof__periodtriggerselement"></a>
<a id="tocs__listof__periodtriggerselement"></a>

```json
[
  "ADS"
]
```

<h2 id="tocS_SegmentTemplateFormat">SegmentTemplateFormat</h2>
<!-- backwards compatibility -->
<a id="schemasegmenttemplateformat"></a>
<a id="schema_SegmentTemplateFormat"></a>
<a id="tocSsegmenttemplateformat"></a>
<a id="tocssegmenttemplateformat"></a>

```json
"NUMBER_WITH_TIMELINE"
```

<h2 id="tocS_HlsEncryption">HlsEncryption</h2>
<!-- backwards compatibility -->
<a id="schemahlsencryption"></a>
<a id="schema_HlsEncryption"></a>
<a id="tocShlsencryption"></a>
<a id="tocshlsencryption"></a>

```json
{
  "ConstantInitializationVector": {},
  "EncryptionMethod": {},
  "SpekeKeyProvider": {
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "RoleArn": {},
    "SystemIds": {},
    "Url": {}
  }
}
```

An HTTP Live Streaming (HLS) encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstantInitializationVector|object|false|none|none|
|EncryptionMethod|object|false|none|none|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS_MssEncryption">MssEncryption</h2>
<!-- backwards compatibility -->
<a id="schemamssencryption"></a>
<a id="schema_MssEncryption"></a>
<a id="tocSmssencryption"></a>
<a id="tocsmssencryption"></a>

```json
{
  "SpekeKeyProvider": {
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "RoleArn": {},
    "SystemIds": {},
    "Url": {}
  }
}
```

A Microsoft Smooth Streaming (MSS) encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS___listOfMssManifest">__listOfMssManifest</h2>
<!-- backwards compatibility -->
<a id="schema__listofmssmanifest"></a>
<a id="schema___listOfMssManifest"></a>
<a id="tocS__listofmssmanifest"></a>
<a id="tocs__listofmssmanifest"></a>

```json
[
  {
    "ManifestName": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  }
]
```

<h2 id="tocS_CreatePackagingGroupResponse">CreatePackagingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackaginggroupresponse"></a>
<a id="schema_CreatePackagingGroupResponse"></a>
<a id="tocScreatepackaginggroupresponse"></a>
<a id="tocscreatepackaginggroupresponse"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|CreatedAt|object|false|none|none|
|DomainName|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAssetResponse">DeleteAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetresponse"></a>
<a id="schema_DeleteAssetResponse"></a>
<a id="tocSdeleteassetresponse"></a>
<a id="tocsdeleteassetresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePackagingConfigurationResponse">DeletePackagingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackagingconfigurationresponse"></a>
<a id="schema_DeletePackagingConfigurationResponse"></a>
<a id="tocSdeletepackagingconfigurationresponse"></a>
<a id="tocsdeletepackagingconfigurationresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePackagingGroupResponse">DeletePackagingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackaginggroupresponse"></a>
<a id="schema_DeletePackagingGroupResponse"></a>
<a id="tocSdeletepackaginggroupresponse"></a>
<a id="tocsdeletepackaginggroupresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeAssetResponse">DescribeAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetresponse"></a>
<a id="schema_DescribeAssetResponse"></a>
<a id="tocSdescribeassetresponse"></a>
<a id="tocsdescribeassetresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "EgressEndpoints": {},
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|EgressEndpoints|object|false|none|none|
|Id|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|ResourceId|object|false|none|none|
|SourceArn|object|false|none|none|
|SourceRoleArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribePackagingConfigurationResponse">DescribePackagingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagingconfigurationresponse"></a>
<a id="schema_DescribePackagingConfigurationResponse"></a>
<a id="tocSdescribepackagingconfigurationresponse"></a>
<a id="tocsdescribepackagingconfigurationresponse"></a>

```json
{
  "Arn": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "CreatedAt": {},
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|MssPackage|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribePackagingGroupResponse">DescribePackagingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackaginggroupresponse"></a>
<a id="schema_DescribePackagingGroupResponse"></a>
<a id="tocSdescribepackaginggroupresponse"></a>
<a id="tocsdescribepackaginggroupresponse"></a>

```json
{
  "ApproximateAssetCount": {},
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateAssetCount|object|false|none|none|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|CreatedAt|object|false|none|none|
|DomainName|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ListAssetsResponse">ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsresponse"></a>
<a id="schema_ListAssetsResponse"></a>
<a id="tocSlistassetsresponse"></a>
<a id="tocslistassetsresponse"></a>

```json
{
  "Assets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Assets|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPackagingConfigurationsResponse">ListPackagingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagingconfigurationsresponse"></a>
<a id="schema_ListPackagingConfigurationsResponse"></a>
<a id="tocSlistpackagingconfigurationsresponse"></a>
<a id="tocslistpackagingconfigurationsresponse"></a>

```json
{
  "NextToken": {},
  "PackagingConfigurations": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PackagingConfigurations|object|false|none|none|

<h2 id="tocS_ListPackagingGroupsResponse">ListPackagingGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpackaginggroupsresponse"></a>
<a id="schema_ListPackagingGroupsResponse"></a>
<a id="tocSlistpackaginggroupsresponse"></a>
<a id="tocslistpackaginggroupsresponse"></a>

```json
{
  "NextToken": {},
  "PackagingGroups": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|PackagingGroups|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_UpdatePackagingGroupResponse">UpdatePackagingGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackaginggroupresponse"></a>
<a id="schema_UpdatePackagingGroupResponse"></a>
<a id="tocSupdatepackaginggroupresponse"></a>
<a id="tocsupdatepackaginggroupresponse"></a>

```json
{
  "ApproximateAssetCount": {},
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateAssetCount|object|false|none|none|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|CreatedAt|object|false|none|none|
|DomainName|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_AdMarkers">AdMarkers</h2>
<!-- backwards compatibility -->
<a id="schemaadmarkers"></a>
<a id="schema_AdMarkers"></a>
<a id="tocSadmarkers"></a>
<a id="tocsadmarkers"></a>

```json
"NONE"
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

A collection of tags associated with a resource

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_AssetShallow">AssetShallow</h2>
<!-- backwards compatibility -->
<a id="schemaassetshallow"></a>
<a id="schema_AssetShallow"></a>
<a id="tocSassetshallow"></a>
<a id="tocsassetshallow"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A MediaPackage VOD Asset resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Id|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|ResourceId|object|false|none|none|
|SourceArn|object|false|none|none|
|SourceRoleArn|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_Authorization">Authorization</h2>
<!-- backwards compatibility -->
<a id="schemaauthorization"></a>
<a id="schema_Authorization"></a>
<a id="tocSauthorization"></a>
<a id="tocsauthorization"></a>

```json
{
  "CdnIdentifierSecret": {},
  "SecretsRoleArn": {}
}
```

CDN Authorization credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CdnIdentifierSecret|object|true|none|none|
|SecretsRoleArn|object|true|none|none|

<h2 id="tocS_SpekeKeyProvider">SpekeKeyProvider</h2>
<!-- backwards compatibility -->
<a id="schemaspekekeyprovider"></a>
<a id="schema_SpekeKeyProvider"></a>
<a id="tocSspekekeyprovider"></a>
<a id="tocsspekekeyprovider"></a>

```json
{
  "EncryptionContractConfiguration": {
    "PresetSpeke20Audio": {},
    "PresetSpeke20Video": {}
  },
  "RoleArn": {},
  "SystemIds": {},
  "Url": {}
}
```

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionContractConfiguration|object|false|none|none|
|RoleArn|object|true|none|none|
|SystemIds|object|true|none|none|
|Url|object|true|none|none|

<h2 id="tocS_CmafPackage">CmafPackage</h2>
<!-- backwards compatibility -->
<a id="schemacmafpackage"></a>
<a id="schema_CmafPackage"></a>
<a id="tocScmafpackage"></a>
<a id="tocscmafpackage"></a>

```json
{
  "Encryption": {
    "ConstantInitializationVector": {},
    "SpekeKeyProvider": {
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "HlsManifests": {},
  "IncludeEncoderConfigurationInSegments": {},
  "SegmentDurationSeconds": {}
}
```

A CMAF packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|HlsManifests|object|true|none|none|
|IncludeEncoderConfigurationInSegments|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|

<h2 id="tocS_EgressAccessLogs">EgressAccessLogs</h2>
<!-- backwards compatibility -->
<a id="schemaegressaccesslogs"></a>
<a id="schema_EgressAccessLogs"></a>
<a id="tocSegressaccesslogs"></a>
<a id="tocsegressaccesslogs"></a>

```json
{
  "LogGroupName": {}
}
```

Configure egress access logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroupName|object|false|none|none|

<h2 id="tocS_ConfigureLogsRequest">ConfigureLogsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurelogsrequest"></a>
<a id="schema_ConfigureLogsRequest"></a>
<a id="tocSconfigurelogsrequest"></a>
<a id="tocsconfigurelogsrequest"></a>

```json
{
  "EgressAccessLogs": {
    "LogGroupName": {}
  }
}
```

The option to configure log subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressAccessLogs|object|false|none|none|

<h2 id="tocS_CreateAssetRequest">CreateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetrequest"></a>
<a id="schema_CreateAssetRequest"></a>
<a id="tocScreateassetrequest"></a>
<a id="tocscreateassetrequest"></a>

```json
{
  "Id": {},
  "PackagingGroupId": {},
  "ResourceId": {},
  "SourceArn": {},
  "SourceRoleArn": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A new MediaPackage VOD Asset configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|true|none|none|
|PackagingGroupId|object|true|none|none|
|ResourceId|object|false|none|none|
|SourceArn|object|true|none|none|
|SourceRoleArn|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___listOfEgressEndpoint">__listOfEgressEndpoint</h2>
<!-- backwards compatibility -->
<a id="schema__listofegressendpoint"></a>
<a id="schema___listOfEgressEndpoint"></a>
<a id="tocS__listofegressendpoint"></a>
<a id="tocs__listofegressendpoint"></a>

```json
[
  {
    "PackagingConfigurationId": {},
    "Status": {},
    "Url": {}
  }
]
```

<h2 id="tocS_DashPackage">DashPackage</h2>
<!-- backwards compatibility -->
<a id="schemadashpackage"></a>
<a id="schema_DashPackage"></a>
<a id="tocSdashpackage"></a>
<a id="tocsdashpackage"></a>

```json
{
  "DashManifests": {},
  "Encryption": {
    "SpekeKeyProvider": {
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "IncludeEncoderConfigurationInSegments": {},
  "IncludeIframeOnlyStream": {},
  "PeriodTriggers": {},
  "SegmentDurationSeconds": {},
  "SegmentTemplateFormat": {}
}
```

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DashManifests|object|true|none|none|
|Encryption|object|false|none|none|
|IncludeEncoderConfigurationInSegments|object|false|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|PeriodTriggers|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|SegmentTemplateFormat|object|false|none|none|

<h2 id="tocS_HlsPackage">HlsPackage</h2>
<!-- backwards compatibility -->
<a id="schemahlspackage"></a>
<a id="schema_HlsPackage"></a>
<a id="tocShlspackage"></a>
<a id="tocshlspackage"></a>

```json
{
  "Encryption": {
    "ConstantInitializationVector": {},
    "EncryptionMethod": {},
    "SpekeKeyProvider": {
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "HlsManifests": {},
  "IncludeDvbSubtitles": {},
  "SegmentDurationSeconds": {},
  "UseAudioRenditionGroup": {}
}
```

An HTTP Live Streaming (HLS) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|HlsManifests|object|true|none|none|
|IncludeDvbSubtitles|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|UseAudioRenditionGroup|object|false|none|none|

<h2 id="tocS_MssPackage">MssPackage</h2>
<!-- backwards compatibility -->
<a id="schemamsspackage"></a>
<a id="schema_MssPackage"></a>
<a id="tocSmsspackage"></a>
<a id="tocsmsspackage"></a>

```json
{
  "Encryption": {
    "SpekeKeyProvider": {
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "MssManifests": {},
  "SegmentDurationSeconds": {}
}
```

A Microsoft Smooth Streaming (MSS) PackagingConfiguration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|MssManifests|object|true|none|none|
|SegmentDurationSeconds|object|false|none|none|

<h2 id="tocS_CreatePackagingConfigurationRequest">CreatePackagingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackagingconfigurationrequest"></a>
<a id="schema_CreatePackagingConfigurationRequest"></a>
<a id="tocScreatepackagingconfigurationrequest"></a>
<a id="tocscreatepackagingconfigurationrequest"></a>

```json
{
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A new MediaPackage VOD PackagingConfiguration resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CmafPackage|object|false|none|none|
|DashPackage|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|true|none|none|
|MssPackage|object|false|none|none|
|PackagingGroupId|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreatePackagingGroupRequest">CreatePackagingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackaginggrouprequest"></a>
<a id="schema_CreatePackagingGroupRequest"></a>
<a id="tocScreatepackaginggrouprequest"></a>
<a id="tocscreatepackaginggrouprequest"></a>

```json
{
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A new MediaPackage VOD PackagingGroup resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authorization|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ManifestLayout">ManifestLayout</h2>
<!-- backwards compatibility -->
<a id="schemamanifestlayout"></a>
<a id="schema_ManifestLayout"></a>
<a id="tocSmanifestlayout"></a>
<a id="tocsmanifestlayout"></a>

```json
"FULL"
```

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
"NONE"
```

<h2 id="tocS_ScteMarkersSource">ScteMarkersSource</h2>
<!-- backwards compatibility -->
<a id="schemasctemarkerssource"></a>
<a id="schema_ScteMarkersSource"></a>
<a id="tocSsctemarkerssource"></a>
<a id="tocssctemarkerssource"></a>

```json
"SEGMENTS"
```

<h2 id="tocS_StreamSelection">StreamSelection</h2>
<!-- backwards compatibility -->
<a id="schemastreamselection"></a>
<a id="schema_StreamSelection"></a>
<a id="tocSstreamselection"></a>
<a id="tocsstreamselection"></a>

```json
{
  "MaxVideoBitsPerSecond": {},
  "MinVideoBitsPerSecond": {},
  "StreamOrder": {}
}
```

A StreamSelection configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxVideoBitsPerSecond|object|false|none|none|
|MinVideoBitsPerSecond|object|false|none|none|
|StreamOrder|object|false|none|none|

<h2 id="tocS_DashManifest">DashManifest</h2>
<!-- backwards compatibility -->
<a id="schemadashmanifest"></a>
<a id="schema_DashManifest"></a>
<a id="tocSdashmanifest"></a>
<a id="tocsdashmanifest"></a>

```json
{
  "ManifestLayout": {},
  "ManifestName": {},
  "MinBufferTimeSeconds": {},
  "Profile": {},
  "ScteMarkersSource": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

A DASH manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestLayout|object|false|none|none|
|ManifestName|object|false|none|none|
|MinBufferTimeSeconds|object|false|none|none|
|Profile|object|false|none|none|
|ScteMarkersSource|object|false|none|none|
|StreamSelection|object|false|none|none|

<h2 id="tocS_DeleteAssetRequest">DeleteAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteassetrequest"></a>
<a id="schema_DeleteAssetRequest"></a>
<a id="tocSdeleteassetrequest"></a>
<a id="tocsdeleteassetrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePackagingConfigurationRequest">DeletePackagingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackagingconfigurationrequest"></a>
<a id="schema_DeletePackagingConfigurationRequest"></a>
<a id="tocSdeletepackagingconfigurationrequest"></a>
<a id="tocsdeletepackagingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeletePackagingGroupRequest">DeletePackagingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackaginggrouprequest"></a>
<a id="schema_DeletePackagingGroupRequest"></a>
<a id="tocSdeletepackaginggrouprequest"></a>
<a id="tocsdeletepackaginggrouprequest"></a>

```json
{}
```

<h2 id="tocS_DescribeAssetRequest">DescribeAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeassetrequest"></a>
<a id="schema_DescribeAssetRequest"></a>
<a id="tocSdescribeassetrequest"></a>
<a id="tocsdescribeassetrequest"></a>

```json
{}
```

<h2 id="tocS_DescribePackagingConfigurationRequest">DescribePackagingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagingconfigurationrequest"></a>
<a id="schema_DescribePackagingConfigurationRequest"></a>
<a id="tocSdescribepackagingconfigurationrequest"></a>
<a id="tocsdescribepackagingconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribePackagingGroupRequest">DescribePackagingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackaginggrouprequest"></a>
<a id="schema_DescribePackagingGroupRequest"></a>
<a id="tocSdescribepackaginggrouprequest"></a>
<a id="tocsdescribepackaginggrouprequest"></a>

```json
{}
```

<h2 id="tocS_EgressEndpoint">EgressEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaegressendpoint"></a>
<a id="schema_EgressEndpoint"></a>
<a id="tocSegressendpoint"></a>
<a id="tocsegressendpoint"></a>

```json
{
  "PackagingConfigurationId": {},
  "Status": {},
  "Url": {}
}
```

The endpoint URL used to access an Asset using one PackagingConfiguration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackagingConfigurationId|object|false|none|none|
|Status|object|false|none|none|
|Url|object|false|none|none|

<h2 id="tocS_PresetSpeke20Audio">PresetSpeke20Audio</h2>
<!-- backwards compatibility -->
<a id="schemapresetspeke20audio"></a>
<a id="schema_PresetSpeke20Audio"></a>
<a id="tocSpresetspeke20audio"></a>
<a id="tocspresetspeke20audio"></a>

```json
"PRESET-AUDIO-1"
```

<h2 id="tocS_PresetSpeke20Video">PresetSpeke20Video</h2>
<!-- backwards compatibility -->
<a id="schemapresetspeke20video"></a>
<a id="schema_PresetSpeke20Video"></a>
<a id="tocSpresetspeke20video"></a>
<a id="tocspresetspeke20video"></a>

```json
"PRESET-VIDEO-1"
```

<h2 id="tocS_EncryptionContractConfiguration">EncryptionContractConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioncontractconfiguration"></a>
<a id="schema_EncryptionContractConfiguration"></a>
<a id="tocSencryptioncontractconfiguration"></a>
<a id="tocsencryptioncontractconfiguration"></a>

```json
{
  "PresetSpeke20Audio": {},
  "PresetSpeke20Video": {}
}
```

Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0. 
The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. 
To configure the encryption contract, specify which audio and video encryption presets to use.
Note the following considerations when using encryptionContractConfiguration:
encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PresetSpeke20Audio|object|true|none|none|
|PresetSpeke20Video|object|true|none|none|

<h2 id="tocS_EncryptionMethod">EncryptionMethod</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmethod"></a>
<a id="schema_EncryptionMethod"></a>
<a id="tocSencryptionmethod"></a>
<a id="tocsencryptionmethod"></a>

```json
"AES_128"
```

<h2 id="tocS_HlsManifest">HlsManifest</h2>
<!-- backwards compatibility -->
<a id="schemahlsmanifest"></a>
<a id="schema_HlsManifest"></a>
<a id="tocShlsmanifest"></a>
<a id="tocshlsmanifest"></a>

```json
{
  "AdMarkers": {},
  "IncludeIframeOnlyStream": {},
  "ManifestName": {},
  "ProgramDateTimeIntervalSeconds": {},
  "RepeatExtXKey": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

An HTTP Live Streaming (HLS) manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|ManifestName|object|false|none|none|
|ProgramDateTimeIntervalSeconds|object|false|none|none|
|RepeatExtXKey|object|false|none|none|
|StreamSelection|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListAssetsRequest">ListAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsrequest"></a>
<a id="schema_ListAssetsRequest"></a>
<a id="tocSlistassetsrequest"></a>
<a id="tocslistassetsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfAssetShallow">__listOfAssetShallow</h2>
<!-- backwards compatibility -->
<a id="schema__listofassetshallow"></a>
<a id="schema___listOfAssetShallow"></a>
<a id="tocS__listofassetshallow"></a>
<a id="tocs__listofassetshallow"></a>

```json
[
  {
    "Arn": {},
    "CreatedAt": {},
    "Id": {},
    "PackagingGroupId": {},
    "ResourceId": {},
    "SourceArn": {},
    "SourceRoleArn": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListPackagingConfigurationsRequest">ListPackagingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagingconfigurationsrequest"></a>
<a id="schema_ListPackagingConfigurationsRequest"></a>
<a id="tocSlistpackagingconfigurationsrequest"></a>
<a id="tocslistpackagingconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfPackagingConfiguration">__listOfPackagingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofpackagingconfiguration"></a>
<a id="schema___listOfPackagingConfiguration"></a>
<a id="tocS__listofpackagingconfiguration"></a>
<a id="tocs__listofpackagingconfiguration"></a>

```json
[
  {
    "Arn": {},
    "CmafPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "IncludeEncoderConfigurationInSegments": {},
      "SegmentDurationSeconds": {}
    },
    "CreatedAt": {},
    "DashPackage": {
      "DashManifests": {},
      "Encryption": {
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeEncoderConfigurationInSegments": {},
      "IncludeIframeOnlyStream": {},
      "PeriodTriggers": {},
      "SegmentDurationSeconds": {},
      "SegmentTemplateFormat": {}
    },
    "HlsPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "IncludeDvbSubtitles": {},
      "SegmentDurationSeconds": {},
      "UseAudioRenditionGroup": {}
    },
    "Id": {},
    "MssPackage": {
      "Encryption": {
        "SpekeKeyProvider": {
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "MssManifests": {},
      "SegmentDurationSeconds": {}
    },
    "PackagingGroupId": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListPackagingGroupsRequest">ListPackagingGroupsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackaginggroupsrequest"></a>
<a id="schema_ListPackagingGroupsRequest"></a>
<a id="tocSlistpackaginggroupsrequest"></a>
<a id="tocslistpackaginggroupsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfPackagingGroup">__listOfPackagingGroup</h2>
<!-- backwards compatibility -->
<a id="schema__listofpackaginggroup"></a>
<a id="schema___listOfPackagingGroup"></a>
<a id="tocS__listofpackaginggroup"></a>
<a id="tocs__listofpackaginggroup"></a>

```json
[
  {
    "ApproximateAssetCount": {},
    "Arn": {},
    "Authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    },
    "CreatedAt": {},
    "DomainName": {},
    "EgressAccessLogs": {
      "LogGroupName": {}
    },
    "Id": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
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

<h2 id="tocS___mapOf__string">__mapOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__mapof__string"></a>
<a id="schema___mapOf__string"></a>
<a id="tocS__mapof__string"></a>
<a id="tocs__mapof__string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[__string](#schema__string)|false|none|none|

<h2 id="tocS_MssManifest">MssManifest</h2>
<!-- backwards compatibility -->
<a id="schemamssmanifest"></a>
<a id="schema_MssManifest"></a>
<a id="tocSmssmanifest"></a>
<a id="tocsmssmanifest"></a>

```json
{
  "ManifestName": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

A Microsoft Smooth Streaming (MSS) manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ManifestName|object|false|none|none|
|StreamSelection|object|false|none|none|

<h2 id="tocS_PackagingConfiguration">PackagingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemapackagingconfiguration"></a>
<a id="schema_PackagingConfiguration"></a>
<a id="tocSpackagingconfiguration"></a>
<a id="tocspackagingconfiguration"></a>

```json
{
  "Arn": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeEncoderConfigurationInSegments": {},
    "SegmentDurationSeconds": {}
  },
  "CreatedAt": {},
  "DashPackage": {
    "DashManifests": {},
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeEncoderConfigurationInSegments": {},
    "IncludeIframeOnlyStream": {},
    "PeriodTriggers": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {}
  },
  "HlsPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "IncludeDvbSubtitles": {},
    "SegmentDurationSeconds": {},
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "MssManifests": {},
    "SegmentDurationSeconds": {}
  },
  "PackagingGroupId": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A MediaPackage VOD PackagingConfiguration resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|MssPackage|object|false|none|none|
|PackagingGroupId|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PackagingGroup">PackagingGroup</h2>
<!-- backwards compatibility -->
<a id="schemapackaginggroup"></a>
<a id="schema_PackagingGroup"></a>
<a id="tocSpackaginggroup"></a>
<a id="tocspackaginggroup"></a>

```json
{
  "ApproximateAssetCount": {},
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CreatedAt": {},
  "DomainName": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A MediaPackage VOD PackagingGroup resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApproximateAssetCount|object|false|none|none|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|CreatedAt|object|false|none|none|
|DomainName|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|Id|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS___listOf__string">__listOf__string</h2>
<!-- backwards compatibility -->
<a id="schema__listof__string"></a>
<a id="schema___listOf__string"></a>
<a id="tocS__listof__string"></a>
<a id="tocs__listof__string"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StreamOrder">StreamOrder</h2>
<!-- backwards compatibility -->
<a id="schemastreamorder"></a>
<a id="schema_StreamOrder"></a>
<a id="tocSstreamorder"></a>
<a id="tocsstreamorder"></a>

```json
"ORIGINAL"
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdatePackagingGroupRequest">UpdatePackagingGroupRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackaginggrouprequest"></a>
<a id="schema_UpdatePackagingGroupRequest"></a>
<a id="tocSupdatepackaginggrouprequest"></a>
<a id="tocsupdatepackaginggrouprequest"></a>

```json
{
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  }
}
```

A MediaPackage VOD PackagingGroup resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authorization|object|false|none|none|

<h2 id="tocS___PeriodTriggersElement">__PeriodTriggersElement</h2>
<!-- backwards compatibility -->
<a id="schema__periodtriggerselement"></a>
<a id="schema___PeriodTriggersElement"></a>
<a id="tocS__periodtriggerselement"></a>
<a id="tocs__periodtriggerselement"></a>

```json
"ADS"
```
