<h1 id="aws-elemental-mediapackage">AWS Elemental MediaPackage v2017-10-12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

AWS Elemental MediaPackage

Base URLs:

* <a href="http://mediapackage.us-east-1.amazonaws.com">http://mediapackage.us-east-1.amazonaws.com</a> - The MediaPackage multi-region endpoint

* <a href="https://mediapackage.us-east-1.amazonaws.com">https://mediapackage.us-east-1.amazonaws.com</a> - The MediaPackage multi-region endpoint

* <a href="http://mediapackage.cn-north-1.amazonaws.com.cn">http://mediapackage.cn-north-1.amazonaws.com.cn</a> - The MediaPackage endpoint for China (Beijing) and China (Ningxia)

* <a href="https://mediapackage.cn-north-1.amazonaws.com.cn">https://mediapackage.cn-north-1.amazonaws.com.cn</a> - The MediaPackage endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/mediapackage/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-elemental-mediapackage-default">Default</h1>

## ConfigureLogs

<a id="opIdConfigureLogs"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string/configure_logs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "egressAccessLogs": {
      "LogGroupName": {}
    },
    "ingressAccessLogs": {
      "LogGroupName": {}
    }
  }'
```

`PUT /channels/{id}/configure_logs`

Changes the Channel's properities to configure log subscription

> Body parameter

```json
{
  "egressAccessLogs": {
    "LogGroupName": {}
  },
  "ingressAccessLogs": {
    "LogGroupName": {}
  }
}
```

<h3 id="configurelogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the channel to log subscription.|
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
|» ingressAccessLogs|body|object|false|Configure ingress access logging.|
|» » LogGroupName|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

## ListChannels

<a id="opIdListChannels"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels`

Returns a collection of Channels.

<h3 id="listchannels-parameters">Parameters</h3>

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
  "Channels": {},
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

<h3 id="listchannels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListChannelsResponse](#schemalistchannelsresponse)|
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

## CreateChannel

<a id="opIdCreateChannel"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "id": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /channels`

Creates a new Channel.

> Body parameter

```json
{
  "description": "string",
  "id": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createchannel-parameters">Parameters</h3>

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
|» description|body|string|false|A short text description of the Channel.|
|» id|body|string|true|The ID of the Channel. The ID must be unique within the region and it<br>cannot be changed after a Channel is created.<br>|
|» tags|body|object|false|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

<h3 id="createchannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateChannelResponse](#schemacreatechannelresponse)|
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

## ListHarvestJobs

<a id="opIdListHarvestJobs"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/harvest_jobs \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /harvest_jobs`

Returns a collection of HarvestJob records.

<h3 id="listharvestjobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeChannelId|query|string|false|When specified, the request will return only HarvestJobs associated with the given Channel ID.|
|includeStatus|query|string|false|When specified, the request will return only HarvestJobs in the given status.|
|maxResults|query|integer|false|The upper bound on the number of records to return.|
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
  "HarvestJobs": {},
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

<h3 id="listharvestjobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListHarvestJobsResponse](#schemalistharvestjobsresponse)|
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

## CreateHarvestJob

<a id="opIdCreateHarvestJob"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/harvest_jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "endTime": "string",
    "id": "string",
    "originEndpointId": "string",
    "s3Destination": {
      "BucketName": {},
      "ManifestKey": {},
      "RoleArn": {}
    },
    "startTime": "string"
  }'
```

`POST /harvest_jobs`

Creates a new HarvestJob record.

> Body parameter

```json
{
  "endTime": "string",
  "id": "string",
  "originEndpointId": "string",
  "s3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "startTime": "string"
}
```

<h3 id="createharvestjob-parameters">Parameters</h3>

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
|» endTime|body|string|true|The end of the time-window which will be harvested<br>|
|» id|body|string|true|The ID of the HarvestJob. The ID must be unique within the region<br>and it cannot be changed after the HarvestJob is submitted<br>|
|» originEndpointId|body|string|true|The ID of the OriginEndpoint that the HarvestJob will harvest from.<br>This cannot be changed after the HarvestJob is submitted.<br>|
|» s3Destination|body|object|true|Configuration parameters for where in an S3 bucket to place the harvested content<br>|
|» » BucketName|body|object|false|none|
|» » ManifestKey|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» startTime|body|string|true|The start of the time-window which will be harvested<br>|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "ChannelId": {},
  "CreatedAt": {},
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createharvestjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateHarvestJobResponse](#schemacreateharvestjobresponse)|
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

## ListOriginEndpoints

<a id="opIdListOriginEndpoints"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/origin_endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /origin_endpoints`

Returns a collection of OriginEndpoint records.

<h3 id="listoriginendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channelId|query|string|false|When specified, the request will return only OriginEndpoints associated with the given Channel ID.|
|maxResults|query|integer|false|The upper bound on the number of records to return.|
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
  "OriginEndpoints": {}
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

<h3 id="listoriginendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOriginEndpointsResponse](#schemalistoriginendpointsresponse)|
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

## CreateOriginEndpoint

<a id="opIdCreateOriginEndpoint"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/origin_endpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    },
    "channelId": "string",
    "cmafPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "SegmentDurationSeconds": {},
      "SegmentPrefix": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "dashPackage": {
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeIframeOnlyStream": {},
      "ManifestLayout": {},
      "ManifestWindowSeconds": {},
      "MinBufferTimeSeconds": {},
      "MinUpdatePeriodSeconds": {},
      "PeriodTriggers": {},
      "Profile": {},
      "SegmentDurationSeconds": {},
      "SegmentTemplateFormat": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "SuggestedPresentationDelaySeconds": {},
      "UtcTiming": {},
      "UtcTimingUri": {}
    },
    "description": "string",
    "hlsPackage": {
      "AdMarkers": {},
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "RepeatExtXKey": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeDvbSubtitles": {},
      "IncludeIframeOnlyStream": {},
      "PlaylistType": {},
      "PlaylistWindowSeconds": {},
      "ProgramDateTimeIntervalSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "UseAudioRenditionGroup": {}
    },
    "id": "string",
    "manifestName": "string",
    "mssPackage": {
      "Encryption": {
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "ManifestWindowSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "origination": "ALLOW",
    "startoverWindowSeconds": 0,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "timeDelaySeconds": 0,
    "whitelist": [
      "string"
    ]
  }'
```

`POST /origin_endpoints`

Creates a new OriginEndpoint record.

> Body parameter

```json
{
  "authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "channelId": "string",
  "cmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "dashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "description": "string",
  "hlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "id": "string",
  "manifestName": "string",
  "mssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "origination": "ALLOW",
  "startoverWindowSeconds": 0,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "timeDelaySeconds": 0,
  "whitelist": [
    "string"
  ]
}
```

<h3 id="createoriginendpoint-parameters">Parameters</h3>

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
|» channelId|body|string|true|The ID of the Channel that the OriginEndpoint will be associated with.<br>This cannot be changed after the OriginEndpoint is created.<br>|
|» cmafPackage|body|object|false|A Common Media Application Format (CMAF) packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » EncryptionMethod|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » HlsManifests|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » SegmentPrefix|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» dashPackage|body|object|false|A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.|
|» » AdTriggers|body|object|false|none|
|» » AdsOnDeliveryRestrictions|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » IncludeIframeOnlyStream|body|object|false|none|
|» » ManifestLayout|body|object|false|none|
|» » ManifestWindowSeconds|body|object|false|none|
|» » MinBufferTimeSeconds|body|object|false|none|
|» » MinUpdatePeriodSeconds|body|object|false|none|
|» » PeriodTriggers|body|object|false|none|
|» » Profile|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » SegmentTemplateFormat|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» » SuggestedPresentationDelaySeconds|body|object|false|none|
|» » UtcTiming|body|object|false|none|
|» » UtcTimingUri|body|object|false|none|
|» description|body|string|false|A short text description of the OriginEndpoint.|
|» hlsPackage|body|object|false|An HTTP Live Streaming (HLS) packaging configuration.|
|» » AdMarkers|body|object|false|none|
|» » AdTriggers|body|object|false|none|
|» » AdsOnDeliveryRestrictions|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » EncryptionMethod|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » RepeatExtXKey|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » IncludeDvbSubtitles|body|object|false|none|
|» » IncludeIframeOnlyStream|body|object|false|none|
|» » PlaylistType|body|object|false|none|
|» » PlaylistWindowSeconds|body|object|false|none|
|» » ProgramDateTimeIntervalSeconds|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» » UseAudioRenditionGroup|body|object|false|none|
|» id|body|string|true|The ID of the OriginEndpoint.  The ID must be unique within the region<br>and it cannot be changed after the OriginEndpoint is created.<br>|
|» manifestName|body|string|false|A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").|
|» mssPackage|body|object|false|A Microsoft Smooth Streaming (MSS) packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » ManifestWindowSeconds|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» origination|body|string|false|Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint<br>may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be<br>requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination<br>|
|» startoverWindowSeconds|body|integer|false|Maximum duration (seconds) of content to retain for startover playback.<br>If not specified, startover playback will be disabled for the OriginEndpoint.<br>|
|» tags|body|object|false|A collection of tags associated with a resource|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» timeDelaySeconds|body|integer|false|Amount of delay (seconds) to enforce on the playback of live content.<br>If not specified, there will be no time delay in effect for the OriginEndpoint.<br>|
|» whitelist|body|[[__string](#schema__string)]|false|A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» origination|ALLOW|
|» origination|DENY|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
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

<h3 id="createoriginendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOriginEndpointResponse](#schemacreateoriginendpointresponse)|
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

## DescribeChannel

<a id="opIdDescribeChannel"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /channels/{id}`

Gets details about a Channel.

<h3 id="describechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of a Channel.|
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
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

<h3 id="describechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeChannelResponse](#schemadescribechannelresponse)|
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

## UpdateChannel

<a id="opIdUpdateChannel"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`PUT /channels/{id}`

Updates an existing Channel.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="updatechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Channel to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|A short text description of the Channel.|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

<h3 id="updatechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateChannelResponse](#schemaupdatechannelresponse)|
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

## DeleteChannel

<a id="opIdDeleteChannel"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /channels/{id}`

Deletes an existing Channel.

<h3 id="deletechannel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Channel to delete.|
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

<h3 id="deletechannel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteChannelResponse](#schemadeletechannelresponse)|
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

## DescribeOriginEndpoint

<a id="opIdDescribeOriginEndpoint"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/origin_endpoints/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /origin_endpoints/{id}`

Gets details about an existing OriginEndpoint.

<h3 id="describeoriginendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the OriginEndpoint.|
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
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
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

<h3 id="describeoriginendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOriginEndpointResponse](#schemadescribeoriginendpointresponse)|
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

## UpdateOriginEndpoint

<a id="opIdUpdateOriginEndpoint"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/origin_endpoints/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    },
    "cmafPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "SegmentDurationSeconds": {},
      "SegmentPrefix": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "dashPackage": {
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeIframeOnlyStream": {},
      "ManifestLayout": {},
      "ManifestWindowSeconds": {},
      "MinBufferTimeSeconds": {},
      "MinUpdatePeriodSeconds": {},
      "PeriodTriggers": {},
      "Profile": {},
      "SegmentDurationSeconds": {},
      "SegmentTemplateFormat": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "SuggestedPresentationDelaySeconds": {},
      "UtcTiming": {},
      "UtcTimingUri": {}
    },
    "description": "string",
    "hlsPackage": {
      "AdMarkers": {},
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "RepeatExtXKey": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeDvbSubtitles": {},
      "IncludeIframeOnlyStream": {},
      "PlaylistType": {},
      "PlaylistWindowSeconds": {},
      "ProgramDateTimeIntervalSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "UseAudioRenditionGroup": {}
    },
    "manifestName": "string",
    "mssPackage": {
      "Encryption": {
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "ManifestWindowSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "origination": "ALLOW",
    "startoverWindowSeconds": 0,
    "timeDelaySeconds": 0,
    "whitelist": [
      "string"
    ]
  }'
```

`PUT /origin_endpoints/{id}`

Updates an existing OriginEndpoint.

> Body parameter

```json
{
  "authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "cmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "dashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "description": "string",
  "hlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "manifestName": "string",
  "mssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "origination": "ALLOW",
  "startoverWindowSeconds": 0,
  "timeDelaySeconds": 0,
  "whitelist": [
    "string"
  ]
}
```

<h3 id="updateoriginendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the OriginEndpoint to update.|
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
|» cmafPackage|body|object|false|A Common Media Application Format (CMAF) packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » EncryptionMethod|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » HlsManifests|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » SegmentPrefix|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» dashPackage|body|object|false|A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.|
|» » AdTriggers|body|object|false|none|
|» » AdsOnDeliveryRestrictions|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » IncludeIframeOnlyStream|body|object|false|none|
|» » ManifestLayout|body|object|false|none|
|» » ManifestWindowSeconds|body|object|false|none|
|» » MinBufferTimeSeconds|body|object|false|none|
|» » MinUpdatePeriodSeconds|body|object|false|none|
|» » PeriodTriggers|body|object|false|none|
|» » Profile|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » SegmentTemplateFormat|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» » SuggestedPresentationDelaySeconds|body|object|false|none|
|» » UtcTiming|body|object|false|none|
|» » UtcTimingUri|body|object|false|none|
|» description|body|string|false|A short text description of the OriginEndpoint.|
|» hlsPackage|body|object|false|An HTTP Live Streaming (HLS) packaging configuration.|
|» » AdMarkers|body|object|false|none|
|» » AdTriggers|body|object|false|none|
|» » AdsOnDeliveryRestrictions|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » ConstantInitializationVector|body|object|false|none|
|» » » EncryptionMethod|body|object|false|none|
|» » » KeyRotationIntervalSeconds|body|object|false|none|
|» » » RepeatExtXKey|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » IncludeDvbSubtitles|body|object|false|none|
|» » IncludeIframeOnlyStream|body|object|false|none|
|» » PlaylistType|body|object|false|none|
|» » PlaylistWindowSeconds|body|object|false|none|
|» » ProgramDateTimeIntervalSeconds|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» » UseAudioRenditionGroup|body|object|false|none|
|» manifestName|body|string|false|A short string that will be appended to the end of the Endpoint URL.|
|» mssPackage|body|object|false|A Microsoft Smooth Streaming (MSS) packaging configuration.|
|» » Encryption|body|object|false|none|
|» » » SpekeKeyProvider|body|object|true|none|
|» » » » CertificateArn|body|object|false|none|
|» » » » EncryptionContractConfiguration|body|object|false|none|
|» » » » » PresetSpeke20Audio|body|object|true|none|
|» » » » » PresetSpeke20Video|body|object|true|none|
|» » » » ResourceId|body|object|true|none|
|» » » » RoleArn|body|object|true|none|
|» » » » SystemIds|body|object|true|none|
|» » » » Url|body|object|true|none|
|» » ManifestWindowSeconds|body|object|false|none|
|» » SegmentDurationSeconds|body|object|false|none|
|» » StreamSelection|body|object|false|none|
|» » » MaxVideoBitsPerSecond|body|object|false|none|
|» » » MinVideoBitsPerSecond|body|object|false|none|
|» » » StreamOrder|body|object|false|none|
|» origination|body|string|false|Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint<br>may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be<br>requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination<br>|
|» startoverWindowSeconds|body|integer|false|Maximum duration (in seconds) of content to retain for startover playback.<br>If not specified, startover playback will be disabled for the OriginEndpoint.<br>|
|» timeDelaySeconds|body|integer|false|Amount of delay (in seconds) to enforce on the playback of live content.<br>If not specified, there will be no time delay in effect for the OriginEndpoint.<br>|
|» whitelist|body|[[__string](#schema__string)]|false|A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» origination|ALLOW|
|» origination|DENY|

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
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

<h3 id="updateoriginendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateOriginEndpointResponse](#schemaupdateoriginendpointresponse)|
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

## DeleteOriginEndpoint

<a id="opIdDeleteOriginEndpoint"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/origin_endpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /origin_endpoints/{id}`

Deletes an existing OriginEndpoint.

<h3 id="deleteoriginendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the OriginEndpoint to delete.|
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

<h3 id="deleteoriginendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeleteOriginEndpointResponse](#schemadeleteoriginendpointresponse)|
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

## DescribeHarvestJob

<a id="opIdDescribeHarvestJob"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/harvest_jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /harvest_jobs/{id}`

Gets details about an existing HarvestJob.

<h3 id="describeharvestjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the HarvestJob.|
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
  "ChannelId": {},
  "CreatedAt": {},
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {},
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

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="describeharvestjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeHarvestJobResponse](#schemadescribeharvestjobresponse)|
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
curl https://mediapackage.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resource-arn}`

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|none|
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
curl https://mediapackage.us-east-1.amazonaws.com/tags/string \
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
|resource-arn|path|string|true|none|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|none|
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RotateChannelCredentials

<a id="opIdRotateChannelCredentials"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string/credentials \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /channels/{id}/credentials`

<aside class="warning">
This operation is deprecated
</aside>

Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead

<h3 id="rotatechannelcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the channel to update.|
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
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

<h3 id="rotatechannelcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RotateChannelCredentialsResponse](#schemarotatechannelcredentialsresponse)|
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

## RotateIngestEndpointCredentials

<a id="opIdRotateIngestEndpointCredentials"></a>

> Code samples

```bash
curl https://mediapackage.us-east-1.amazonaws.com/channels/string/ingest_endpoints/string/credentials \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /channels/{id}/ingest_endpoints/{ingest_endpoint_id}/credentials`

Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.

<h3 id="rotateingestendpointcredentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the channel the IngestEndpoint is on.|
|ingest_endpoint_id|path|string|true|The id of the IngestEndpoint whose credentials should be rotated|
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
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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

<h3 id="rotateingestendpointcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RotateIngestEndpointCredentialsResponse](#schemarotateingestendpointcredentialsresponse)|
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

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://mediapackage.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resource-arn}#tagKeys`

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-arn|path|string|true|none|
|tagKeys|query|[[__string](#schema__string)]|true|The key(s) of tag to be deleted|
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
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
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

<h2 id="tocS_CreateChannelResponse">CreateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelresponse"></a>
<a id="schema_CreateChannelResponse"></a>
<a id="tocScreatechannelresponse"></a>
<a id="tocscreatechannelresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateHarvestJobResponse">CreateHarvestJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateharvestjobresponse"></a>
<a id="schema_CreateHarvestJobResponse"></a>
<a id="tocScreateharvestjobresponse"></a>
<a id="tocscreateharvestjobresponse"></a>

```json
{
  "Arn": {},
  "ChannelId": {},
  "CreatedAt": {},
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelId|object|false|none|none|
|CreatedAt|object|false|none|none|
|EndTime|object|false|none|none|
|Id|object|false|none|none|
|OriginEndpointId|object|false|none|none|
|S3Destination|object|false|none|none|
|StartTime|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CreateOriginEndpointResponse">CreateOriginEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginendpointresponse"></a>
<a id="schema_CreateOriginEndpointResponse"></a>
<a id="tocScreateoriginendpointresponse"></a>
<a id="tocscreateoriginendpointresponse"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|ChannelId|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Url|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS_CmafEncryption">CmafEncryption</h2>
<!-- backwards compatibility -->
<a id="schemacmafencryption"></a>
<a id="schema_CmafEncryption"></a>
<a id="tocScmafencryption"></a>
<a id="tocscmafencryption"></a>

```json
{
  "ConstantInitializationVector": {},
  "EncryptionMethod": {},
  "KeyRotationIntervalSeconds": {},
  "SpekeKeyProvider": {
    "CertificateArn": {},
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "ResourceId": {},
    "RoleArn": {},
    "SystemIds": {},
    "Url": {}
  }
}
```

A Common Media Application Format (CMAF) encryption configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConstantInitializationVector|object|false|none|none|
|EncryptionMethod|object|false|none|none|
|KeyRotationIntervalSeconds|object|false|none|none|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS___listOfHlsManifestCreateOrUpdateParameters">__listOfHlsManifestCreateOrUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schema__listofhlsmanifestcreateorupdateparameters"></a>
<a id="schema___listOfHlsManifestCreateOrUpdateParameters"></a>
<a id="tocS__listofhlsmanifestcreateorupdateparameters"></a>
<a id="tocs__listofhlsmanifestcreateorupdateparameters"></a>

```json
[
  {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Id": {},
    "IncludeIframeOnlyStream": {},
    "ManifestName": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {}
  }
]
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

<h2 id="tocS_AdTriggers">AdTriggers</h2>
<!-- backwards compatibility -->
<a id="schemaadtriggers"></a>
<a id="schema_AdTriggers"></a>
<a id="tocSadtriggers"></a>
<a id="tocsadtriggers"></a>

```json
[
  "SPLICE_INSERT"
]
```

A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
ad markers are output.  Specify multiple items to create ad markers for all of the included
message types.

<h2 id="tocS_AdsOnDeliveryRestrictions">AdsOnDeliveryRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemaadsondeliveryrestrictions"></a>
<a id="schema_AdsOnDeliveryRestrictions"></a>
<a id="tocSadsondeliveryrestrictions"></a>
<a id="tocsadsondeliveryrestrictions"></a>

```json
"NONE"
```

This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
messages of the types specified in AdTriggers that do not contain delivery restrictions will
be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
and are always treated as ads if specified in AdTriggers.

<h2 id="tocS_DashEncryption">DashEncryption</h2>
<!-- backwards compatibility -->
<a id="schemadashencryption"></a>
<a id="schema_DashEncryption"></a>
<a id="tocSdashencryption"></a>
<a id="tocsdashencryption"></a>

```json
{
  "KeyRotationIntervalSeconds": {},
  "SpekeKeyProvider": {
    "CertificateArn": {},
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "ResourceId": {},
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
|KeyRotationIntervalSeconds|object|false|none|none|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS___boolean">__boolean</h2>
<!-- backwards compatibility -->
<a id="schema__boolean"></a>
<a id="schema___boolean"></a>
<a id="tocS__boolean"></a>
<a id="tocs__boolean"></a>

```json
true
```

<h2 id="tocS_ManifestLayout">ManifestLayout</h2>
<!-- backwards compatibility -->
<a id="schemamanifestlayout"></a>
<a id="schema_ManifestLayout"></a>
<a id="tocSmanifestlayout"></a>
<a id="tocsmanifestlayout"></a>

```json
"FULL"
```

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

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
"NONE"
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

<h2 id="tocS_UtcTiming">UtcTiming</h2>
<!-- backwards compatibility -->
<a id="schemautctiming"></a>
<a id="schema_UtcTiming"></a>
<a id="tocSutctiming"></a>
<a id="tocsutctiming"></a>

```json
"NONE"
```

<h2 id="tocS_AdMarkers">AdMarkers</h2>
<!-- backwards compatibility -->
<a id="schemaadmarkers"></a>
<a id="schema_AdMarkers"></a>
<a id="tocSadmarkers"></a>
<a id="tocsadmarkers"></a>

```json
"NONE"
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
  "KeyRotationIntervalSeconds": {},
  "RepeatExtXKey": {},
  "SpekeKeyProvider": {
    "CertificateArn": {},
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "ResourceId": {},
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
|KeyRotationIntervalSeconds|object|false|none|none|
|RepeatExtXKey|object|false|none|none|
|SpekeKeyProvider|object|true|none|none|

<h2 id="tocS_PlaylistType">PlaylistType</h2>
<!-- backwards compatibility -->
<a id="schemaplaylisttype"></a>
<a id="schema_PlaylistType"></a>
<a id="tocSplaylisttype"></a>
<a id="tocsplaylisttype"></a>

```json
"NONE"
```

<h2 id="tocS_MssEncryption">MssEncryption</h2>
<!-- backwards compatibility -->
<a id="schemamssencryption"></a>
<a id="schema_MssEncryption"></a>
<a id="tocSmssencryption"></a>
<a id="tocsmssencryption"></a>

```json
{
  "SpekeKeyProvider": {
    "CertificateArn": {},
    "EncryptionContractConfiguration": {
      "PresetSpeke20Audio": {},
      "PresetSpeke20Video": {}
    },
    "ResourceId": {},
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

<h2 id="tocS_DeleteChannelResponse">DeleteChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelresponse"></a>
<a id="schema_DeleteChannelResponse"></a>
<a id="tocSdeletechannelresponse"></a>
<a id="tocsdeletechannelresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteOriginEndpointResponse">DeleteOriginEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoriginendpointresponse"></a>
<a id="schema_DeleteOriginEndpointResponse"></a>
<a id="tocSdeleteoriginendpointresponse"></a>
<a id="tocsdeleteoriginendpointresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelResponse">DescribeChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelresponse"></a>
<a id="schema_DescribeChannelResponse"></a>
<a id="tocSdescribechannelresponse"></a>
<a id="tocsdescribechannelresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DescribeHarvestJobResponse">DescribeHarvestJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeharvestjobresponse"></a>
<a id="schema_DescribeHarvestJobResponse"></a>
<a id="tocSdescribeharvestjobresponse"></a>
<a id="tocsdescribeharvestjobresponse"></a>

```json
{
  "Arn": {},
  "ChannelId": {},
  "CreatedAt": {},
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelId|object|false|none|none|
|CreatedAt|object|false|none|none|
|EndTime|object|false|none|none|
|Id|object|false|none|none|
|OriginEndpointId|object|false|none|none|
|S3Destination|object|false|none|none|
|StartTime|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DescribeOriginEndpointResponse">DescribeOriginEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeoriginendpointresponse"></a>
<a id="schema_DescribeOriginEndpointResponse"></a>
<a id="tocSdescribeoriginendpointresponse"></a>
<a id="tocsdescribeoriginendpointresponse"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|ChannelId|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Url|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "Channels": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Channels|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListHarvestJobsResponse">ListHarvestJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistharvestjobsresponse"></a>
<a id="schema_ListHarvestJobsResponse"></a>
<a id="tocSlistharvestjobsresponse"></a>
<a id="tocslistharvestjobsresponse"></a>

```json
{
  "HarvestJobs": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HarvestJobs|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOriginEndpointsResponse">ListOriginEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginendpointsresponse"></a>
<a id="schema_ListOriginEndpointsResponse"></a>
<a id="tocSlistoriginendpointsresponse"></a>
<a id="tocslistoriginendpointsresponse"></a>

```json
{
  "NextToken": {},
  "OriginEndpoints": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|OriginEndpoints|object|false|none|none|

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

<h2 id="tocS_RotateChannelCredentialsResponse">RotateChannelCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarotatechannelcredentialsresponse"></a>
<a id="schema_RotateChannelCredentialsResponse"></a>
<a id="tocSrotatechannelcredentialsresponse"></a>
<a id="tocsrotatechannelcredentialsresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_RotateIngestEndpointCredentialsResponse">RotateIngestEndpointCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemarotateingestendpointcredentialsresponse"></a>
<a id="schema_RotateIngestEndpointCredentialsResponse"></a>
<a id="tocSrotateingestendpointcredentialsresponse"></a>
<a id="tocsrotateingestendpointcredentialsresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateChannelResponse">UpdateChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelresponse"></a>
<a id="schema_UpdateChannelResponse"></a>
<a id="tocSupdatechannelresponse"></a>
<a id="tocsupdatechannelresponse"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
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
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_UpdateOriginEndpointResponse">UpdateOriginEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginendpointresponse"></a>
<a id="schema_UpdateOriginEndpointResponse"></a>
<a id="tocSupdateoriginendpointresponse"></a>
<a id="tocsupdateoriginendpointresponse"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|ChannelId|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Url|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS___AdTriggersElement">__AdTriggersElement</h2>
<!-- backwards compatibility -->
<a id="schema__adtriggerselement"></a>
<a id="schema___AdTriggersElement"></a>
<a id="tocS__adtriggerselement"></a>
<a id="tocs__adtriggerselement"></a>

```json
"SPLICE_INSERT"
```

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

<h2 id="tocS_HlsIngest">HlsIngest</h2>
<!-- backwards compatibility -->
<a id="schemahlsingest"></a>
<a id="schema_HlsIngest"></a>
<a id="tocShlsingest"></a>
<a id="tocshlsingest"></a>

```json
{
  "IngestEndpoints": {}
}
```

An HTTP Live Streaming (HLS) ingest resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IngestEndpoints|object|false|none|none|

<h2 id="tocS_IngressAccessLogs">IngressAccessLogs</h2>
<!-- backwards compatibility -->
<a id="schemaingressaccesslogs"></a>
<a id="schema_IngressAccessLogs"></a>
<a id="tocSingressaccesslogs"></a>
<a id="tocsingressaccesslogs"></a>

```json
{
  "LogGroupName": {}
}
```

Configure ingress access logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LogGroupName|object|false|none|none|

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

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "Arn": {},
  "CreatedAt": {},
  "Description": {},
  "EgressAccessLogs": {
    "LogGroupName": {}
  },
  "HlsIngest": {
    "IngestEndpoints": {}
  },
  "Id": {},
  "IngressAccessLogs": {
    "LogGroupName": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A Channel resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreatedAt|object|false|none|none|
|Description|object|false|none|none|
|EgressAccessLogs|object|false|none|none|
|HlsIngest|object|false|none|none|
|Id|object|false|none|none|
|IngressAccessLogs|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CmafEncryptionMethod">CmafEncryptionMethod</h2>
<!-- backwards compatibility -->
<a id="schemacmafencryptionmethod"></a>
<a id="schema_CmafEncryptionMethod"></a>
<a id="tocScmafencryptionmethod"></a>
<a id="tocscmafencryptionmethod"></a>

```json
"SAMPLE_AES"
```

The encryption method to use.

<h2 id="tocS_SpekeKeyProvider">SpekeKeyProvider</h2>
<!-- backwards compatibility -->
<a id="schemaspekekeyprovider"></a>
<a id="schema_SpekeKeyProvider"></a>
<a id="tocSspekekeyprovider"></a>
<a id="tocsspekekeyprovider"></a>

```json
{
  "CertificateArn": {},
  "EncryptionContractConfiguration": {
    "PresetSpeke20Audio": {},
    "PresetSpeke20Video": {}
  },
  "ResourceId": {},
  "RoleArn": {},
  "SystemIds": {},
  "Url": {}
}
```

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateArn|object|false|none|none|
|EncryptionContractConfiguration|object|false|none|none|
|ResourceId|object|true|none|none|
|RoleArn|object|true|none|none|
|SystemIds|object|true|none|none|
|Url|object|true|none|none|

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
    "Id": {},
    "IncludeIframeOnlyStream": {},
    "ManifestName": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "Url": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {}
  }
]
```

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
    "EncryptionMethod": {},
    "KeyRotationIntervalSeconds": {},
    "SpekeKeyProvider": {
      "CertificateArn": {},
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "ResourceId": {},
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "HlsManifests": {},
  "SegmentDurationSeconds": {},
  "SegmentPrefix": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

A Common Media Application Format (CMAF) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|HlsManifests|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|SegmentPrefix|object|false|none|none|
|StreamSelection|object|false|none|none|

<h2 id="tocS_CmafPackageCreateOrUpdateParameters">CmafPackageCreateOrUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemacmafpackagecreateorupdateparameters"></a>
<a id="schema_CmafPackageCreateOrUpdateParameters"></a>
<a id="tocScmafpackagecreateorupdateparameters"></a>
<a id="tocscmafpackagecreateorupdateparameters"></a>

```json
{
  "Encryption": {
    "ConstantInitializationVector": {},
    "EncryptionMethod": {},
    "KeyRotationIntervalSeconds": {},
    "SpekeKeyProvider": {
      "CertificateArn": {},
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "ResourceId": {},
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "HlsManifests": {},
  "SegmentDurationSeconds": {},
  "SegmentPrefix": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

A Common Media Application Format (CMAF) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|HlsManifests|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|SegmentPrefix|object|false|none|none|
|StreamSelection|object|false|none|none|

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
  },
  "IngressAccessLogs": {
    "LogGroupName": {}
  }
}
```

the option to configure log subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressAccessLogs|object|false|none|none|
|IngressAccessLogs|object|false|none|none|

<h2 id="tocS_CreateChannelRequest">CreateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechannelrequest"></a>
<a id="schema_CreateChannelRequest"></a>
<a id="tocScreatechannelrequest"></a>
<a id="tocscreatechannelrequest"></a>

```json
{
  "Description": {},
  "Id": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

A new Channel configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|Id|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_S3Destination">S3Destination</h2>
<!-- backwards compatibility -->
<a id="schemas3destination"></a>
<a id="schema_S3Destination"></a>
<a id="tocSs3destination"></a>
<a id="tocss3destination"></a>

```json
{
  "BucketName": {},
  "ManifestKey": {},
  "RoleArn": {}
}
```

Configuration parameters for where in an S3 bucket to place the harvested content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BucketName|object|true|none|none|
|ManifestKey|object|true|none|none|
|RoleArn|object|true|none|none|

<h2 id="tocS_CreateHarvestJobRequest">CreateHarvestJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateharvestjobrequest"></a>
<a id="schema_CreateHarvestJobRequest"></a>
<a id="tocScreateharvestjobrequest"></a>
<a id="tocscreateharvestjobrequest"></a>

```json
{
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {}
}
```

Configuration parameters used to create a new HarvestJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndTime|object|true|none|none|
|Id|object|true|none|none|
|OriginEndpointId|object|true|none|none|
|S3Destination|object|true|none|none|
|StartTime|object|true|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_DashPackage">DashPackage</h2>
<!-- backwards compatibility -->
<a id="schemadashpackage"></a>
<a id="schema_DashPackage"></a>
<a id="tocSdashpackage"></a>
<a id="tocsdashpackage"></a>

```json
{
  "AdTriggers": {},
  "AdsOnDeliveryRestrictions": {},
  "Encryption": {
    "KeyRotationIntervalSeconds": {},
    "SpekeKeyProvider": {
      "CertificateArn": {},
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "ResourceId": {},
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "IncludeIframeOnlyStream": {},
  "ManifestLayout": {},
  "ManifestWindowSeconds": {},
  "MinBufferTimeSeconds": {},
  "MinUpdatePeriodSeconds": {},
  "PeriodTriggers": {},
  "Profile": {},
  "SegmentDurationSeconds": {},
  "SegmentTemplateFormat": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  },
  "SuggestedPresentationDelaySeconds": {},
  "UtcTiming": {},
  "UtcTimingUri": {}
}
```

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdTriggers|object|false|none|none|
|AdsOnDeliveryRestrictions|object|false|none|none|
|Encryption|object|false|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|ManifestLayout|object|false|none|none|
|ManifestWindowSeconds|object|false|none|none|
|MinBufferTimeSeconds|object|false|none|none|
|MinUpdatePeriodSeconds|object|false|none|none|
|PeriodTriggers|object|false|none|none|
|Profile|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|SegmentTemplateFormat|object|false|none|none|
|StreamSelection|object|false|none|none|
|SuggestedPresentationDelaySeconds|object|false|none|none|
|UtcTiming|object|false|none|none|
|UtcTimingUri|object|false|none|none|

<h2 id="tocS_HlsPackage">HlsPackage</h2>
<!-- backwards compatibility -->
<a id="schemahlspackage"></a>
<a id="schema_HlsPackage"></a>
<a id="tocShlspackage"></a>
<a id="tocshlspackage"></a>

```json
{
  "AdMarkers": {},
  "AdTriggers": {},
  "AdsOnDeliveryRestrictions": {},
  "Encryption": {
    "ConstantInitializationVector": {},
    "EncryptionMethod": {},
    "KeyRotationIntervalSeconds": {},
    "RepeatExtXKey": {},
    "SpekeKeyProvider": {
      "CertificateArn": {},
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "ResourceId": {},
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "IncludeDvbSubtitles": {},
  "IncludeIframeOnlyStream": {},
  "PlaylistType": {},
  "PlaylistWindowSeconds": {},
  "ProgramDateTimeIntervalSeconds": {},
  "SegmentDurationSeconds": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  },
  "UseAudioRenditionGroup": {}
}
```

An HTTP Live Streaming (HLS) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|AdTriggers|object|false|none|none|
|AdsOnDeliveryRestrictions|object|false|none|none|
|Encryption|object|false|none|none|
|IncludeDvbSubtitles|object|false|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|PlaylistType|object|false|none|none|
|PlaylistWindowSeconds|object|false|none|none|
|ProgramDateTimeIntervalSeconds|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|StreamSelection|object|false|none|none|
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
      "CertificateArn": {},
      "EncryptionContractConfiguration": {
        "PresetSpeke20Audio": {},
        "PresetSpeke20Video": {}
      },
      "ResourceId": {},
      "RoleArn": {},
      "SystemIds": {},
      "Url": {}
    }
  },
  "ManifestWindowSeconds": {},
  "SegmentDurationSeconds": {},
  "StreamSelection": {
    "MaxVideoBitsPerSecond": {},
    "MinVideoBitsPerSecond": {},
    "StreamOrder": {}
  }
}
```

A Microsoft Smooth Streaming (MSS) packaging configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Encryption|object|false|none|none|
|ManifestWindowSeconds|object|false|none|none|
|SegmentDurationSeconds|object|false|none|none|
|StreamSelection|object|false|none|none|

<h2 id="tocS_Origination">Origination</h2>
<!-- backwards compatibility -->
<a id="schemaorigination"></a>
<a id="schema_Origination"></a>
<a id="tocSorigination"></a>
<a id="tocsorigination"></a>

```json
"ALLOW"
```

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

<h2 id="tocS_CreateOriginEndpointRequest">CreateOriginEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateoriginendpointrequest"></a>
<a id="schema_CreateOriginEndpointRequest"></a>
<a id="tocScreateoriginendpointrequest"></a>
<a id="tocscreateoriginendpointrequest"></a>

```json
{
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Whitelist": {}
}
```

Configuration parameters used to create a new OriginEndpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authorization|object|false|none|none|
|ChannelId|object|true|none|none|
|CmafPackage|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|true|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS_DeleteChannelRequest">DeleteChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletechannelrequest"></a>
<a id="schema_DeleteChannelRequest"></a>
<a id="tocSdeletechannelrequest"></a>
<a id="tocsdeletechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteOriginEndpointRequest">DeleteOriginEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoriginendpointrequest"></a>
<a id="schema_DeleteOriginEndpointRequest"></a>
<a id="tocSdeleteoriginendpointrequest"></a>
<a id="tocsdeleteoriginendpointrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeChannelRequest">DescribeChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribechannelrequest"></a>
<a id="schema_DescribeChannelRequest"></a>
<a id="tocSdescribechannelrequest"></a>
<a id="tocsdescribechannelrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeHarvestJobRequest">DescribeHarvestJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeharvestjobrequest"></a>
<a id="schema_DescribeHarvestJobRequest"></a>
<a id="tocSdescribeharvestjobrequest"></a>
<a id="tocsdescribeharvestjobrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeOriginEndpointRequest">DescribeOriginEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeoriginendpointrequest"></a>
<a id="schema_DescribeOriginEndpointRequest"></a>
<a id="tocSdescribeoriginendpointrequest"></a>
<a id="tocsdescribeoriginendpointrequest"></a>

```json
{}
```

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
encryptionContractConfiguration can be used for DASH or CMAF endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
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

<h2 id="tocS_HarvestJob">HarvestJob</h2>
<!-- backwards compatibility -->
<a id="schemaharvestjob"></a>
<a id="schema_HarvestJob"></a>
<a id="tocSharvestjob"></a>
<a id="tocsharvestjob"></a>

```json
{
  "Arn": {},
  "ChannelId": {},
  "CreatedAt": {},
  "EndTime": {},
  "Id": {},
  "OriginEndpointId": {},
  "S3Destination": {
    "BucketName": {},
    "ManifestKey": {},
    "RoleArn": {}
  },
  "StartTime": {},
  "Status": {}
}
```

A HarvestJob resource configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|ChannelId|object|false|none|none|
|CreatedAt|object|false|none|none|
|EndTime|object|false|none|none|
|Id|object|false|none|none|
|OriginEndpointId|object|false|none|none|
|S3Destination|object|false|none|none|
|StartTime|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS___listOfIngestEndpoint">__listOfIngestEndpoint</h2>
<!-- backwards compatibility -->
<a id="schema__listofingestendpoint"></a>
<a id="schema___listOfIngestEndpoint"></a>
<a id="tocS__listofingestendpoint"></a>
<a id="tocs__listofingestendpoint"></a>

```json
[
  {
    "Id": {},
    "Password": {},
    "Url": {},
    "Username": {}
  }
]
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
  "Id": {},
  "IncludeIframeOnlyStream": {},
  "ManifestName": {},
  "PlaylistType": {},
  "PlaylistWindowSeconds": {},
  "ProgramDateTimeIntervalSeconds": {},
  "Url": {},
  "AdTriggers": {},
  "AdsOnDeliveryRestrictions": {}
}
```

A HTTP Live Streaming (HLS) manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|Id|object|true|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|ManifestName|object|false|none|none|
|PlaylistType|object|false|none|none|
|PlaylistWindowSeconds|object|false|none|none|
|ProgramDateTimeIntervalSeconds|object|false|none|none|
|Url|object|false|none|none|
|AdTriggers|object|false|none|none|
|AdsOnDeliveryRestrictions|object|false|none|none|

<h2 id="tocS_HlsManifestCreateOrUpdateParameters">HlsManifestCreateOrUpdateParameters</h2>
<!-- backwards compatibility -->
<a id="schemahlsmanifestcreateorupdateparameters"></a>
<a id="schema_HlsManifestCreateOrUpdateParameters"></a>
<a id="tocShlsmanifestcreateorupdateparameters"></a>
<a id="tocshlsmanifestcreateorupdateparameters"></a>

```json
{
  "AdMarkers": {},
  "AdTriggers": {},
  "AdsOnDeliveryRestrictions": {},
  "Id": {},
  "IncludeIframeOnlyStream": {},
  "ManifestName": {},
  "PlaylistType": {},
  "PlaylistWindowSeconds": {},
  "ProgramDateTimeIntervalSeconds": {}
}
```

A HTTP Live Streaming (HLS) manifest configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdMarkers|object|false|none|none|
|AdTriggers|object|false|none|none|
|AdsOnDeliveryRestrictions|object|false|none|none|
|Id|object|true|none|none|
|IncludeIframeOnlyStream|object|false|none|none|
|ManifestName|object|false|none|none|
|PlaylistType|object|false|none|none|
|PlaylistWindowSeconds|object|false|none|none|
|ProgramDateTimeIntervalSeconds|object|false|none|none|

<h2 id="tocS_IngestEndpoint">IngestEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaingestendpoint"></a>
<a id="schema_IngestEndpoint"></a>
<a id="tocSingestendpoint"></a>
<a id="tocsingestendpoint"></a>

```json
{
  "Id": {},
  "Password": {},
  "Url": {},
  "Username": {}
}
```

An endpoint for ingesting source content for a Channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Password|object|false|none|none|
|Url|object|false|none|none|
|Username|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListChannelsRequest">ListChannelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsrequest"></a>
<a id="schema_ListChannelsRequest"></a>
<a id="tocSlistchannelsrequest"></a>
<a id="tocslistchannelsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfChannel">__listOfChannel</h2>
<!-- backwards compatibility -->
<a id="schema__listofchannel"></a>
<a id="schema___listOfChannel"></a>
<a id="tocS__listofchannel"></a>
<a id="tocs__listofchannel"></a>

```json
[
  {
    "Arn": {},
    "CreatedAt": {},
    "Description": {},
    "EgressAccessLogs": {
      "LogGroupName": {}
    },
    "HlsIngest": {
      "IngestEndpoints": {}
    },
    "Id": {},
    "IngressAccessLogs": {
      "LogGroupName": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ListHarvestJobsRequest">ListHarvestJobsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistharvestjobsrequest"></a>
<a id="schema_ListHarvestJobsRequest"></a>
<a id="tocSlistharvestjobsrequest"></a>
<a id="tocslistharvestjobsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfHarvestJob">__listOfHarvestJob</h2>
<!-- backwards compatibility -->
<a id="schema__listofharvestjob"></a>
<a id="schema___listOfHarvestJob"></a>
<a id="tocS__listofharvestjob"></a>
<a id="tocs__listofharvestjob"></a>

```json
[
  {
    "Arn": {},
    "ChannelId": {},
    "CreatedAt": {},
    "EndTime": {},
    "Id": {},
    "OriginEndpointId": {},
    "S3Destination": {
      "BucketName": {},
      "ManifestKey": {},
      "RoleArn": {}
    },
    "StartTime": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ListOriginEndpointsRequest">ListOriginEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoriginendpointsrequest"></a>
<a id="schema_ListOriginEndpointsRequest"></a>
<a id="tocSlistoriginendpointsrequest"></a>
<a id="tocslistoriginendpointsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfOriginEndpoint">__listOfOriginEndpoint</h2>
<!-- backwards compatibility -->
<a id="schema__listoforiginendpoint"></a>
<a id="schema___listOfOriginEndpoint"></a>
<a id="tocS__listoforiginendpoint"></a>
<a id="tocs__listoforiginendpoint"></a>

```json
[
  {
    "Arn": {},
    "Authorization": {
      "CdnIdentifierSecret": {},
      "SecretsRoleArn": {}
    },
    "ChannelId": {},
    "CmafPackage": {
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "HlsManifests": {},
      "SegmentDurationSeconds": {},
      "SegmentPrefix": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "CreatedAt": {},
    "DashPackage": {
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "KeyRotationIntervalSeconds": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeIframeOnlyStream": {},
      "ManifestLayout": {},
      "ManifestWindowSeconds": {},
      "MinBufferTimeSeconds": {},
      "MinUpdatePeriodSeconds": {},
      "PeriodTriggers": {},
      "Profile": {},
      "SegmentDurationSeconds": {},
      "SegmentTemplateFormat": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "SuggestedPresentationDelaySeconds": {},
      "UtcTiming": {},
      "UtcTimingUri": {}
    },
    "Description": {},
    "HlsPackage": {
      "AdMarkers": {},
      "AdTriggers": {},
      "AdsOnDeliveryRestrictions": {},
      "Encryption": {
        "ConstantInitializationVector": {},
        "EncryptionMethod": {},
        "KeyRotationIntervalSeconds": {},
        "RepeatExtXKey": {},
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "IncludeDvbSubtitles": {},
      "IncludeIframeOnlyStream": {},
      "PlaylistType": {},
      "PlaylistWindowSeconds": {},
      "ProgramDateTimeIntervalSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      },
      "UseAudioRenditionGroup": {}
    },
    "Id": {},
    "ManifestName": {},
    "MssPackage": {
      "Encryption": {
        "SpekeKeyProvider": {
          "CertificateArn": {},
          "EncryptionContractConfiguration": {
            "PresetSpeke20Audio": {},
            "PresetSpeke20Video": {}
          },
          "ResourceId": {},
          "RoleArn": {},
          "SystemIds": {},
          "Url": {}
        }
      },
      "ManifestWindowSeconds": {},
      "SegmentDurationSeconds": {},
      "StreamSelection": {
        "MaxVideoBitsPerSecond": {},
        "MinVideoBitsPerSecond": {},
        "StreamOrder": {}
      }
    },
    "Origination": {},
    "StartoverWindowSeconds": {},
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "TimeDelaySeconds": {},
    "Url": {},
    "Whitelist": {}
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

<h2 id="tocS_OriginEndpoint">OriginEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaoriginendpoint"></a>
<a id="schema_OriginEndpoint"></a>
<a id="tocSoriginendpoint"></a>
<a id="tocsoriginendpoint"></a>

```json
{
  "Arn": {},
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "ChannelId": {},
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "CreatedAt": {},
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "Id": {},
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TimeDelaySeconds": {},
  "Url": {},
  "Whitelist": {}
}
```

An OriginEndpoint resource configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|Authorization|object|false|none|none|
|ChannelId|object|false|none|none|
|CmafPackage|object|false|none|none|
|CreatedAt|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|Id|object|false|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|Tags|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Url|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS_RotateChannelCredentialsRequest">RotateChannelCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarotatechannelcredentialsrequest"></a>
<a id="schema_RotateChannelCredentialsRequest"></a>
<a id="tocSrotatechannelcredentialsrequest"></a>
<a id="tocsrotatechannelcredentialsrequest"></a>

```json
{}
```

<h2 id="tocS_RotateIngestEndpointCredentialsRequest">RotateIngestEndpointCredentialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarotateingestendpointcredentialsrequest"></a>
<a id="schema_RotateIngestEndpointCredentialsRequest"></a>
<a id="tocSrotateingestendpointcredentialsrequest"></a>
<a id="tocsrotateingestendpointcredentialsrequest"></a>

```json
{}
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

<h2 id="tocS_UpdateChannelRequest">UpdateChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatechannelrequest"></a>
<a id="schema_UpdateChannelRequest"></a>
<a id="tocSupdatechannelrequest"></a>
<a id="tocsupdatechannelrequest"></a>

```json
{
  "Description": {}
}
```

Configuration parameters used to update the Channel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|

<h2 id="tocS_UpdateOriginEndpointRequest">UpdateOriginEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoriginendpointrequest"></a>
<a id="schema_UpdateOriginEndpointRequest"></a>
<a id="tocSupdateoriginendpointrequest"></a>
<a id="tocsupdateoriginendpointrequest"></a>

```json
{
  "Authorization": {
    "CdnIdentifierSecret": {},
    "SecretsRoleArn": {}
  },
  "CmafPackage": {
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "HlsManifests": {},
    "SegmentDurationSeconds": {},
    "SegmentPrefix": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "DashPackage": {
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "KeyRotationIntervalSeconds": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeIframeOnlyStream": {},
    "ManifestLayout": {},
    "ManifestWindowSeconds": {},
    "MinBufferTimeSeconds": {},
    "MinUpdatePeriodSeconds": {},
    "PeriodTriggers": {},
    "Profile": {},
    "SegmentDurationSeconds": {},
    "SegmentTemplateFormat": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "SuggestedPresentationDelaySeconds": {},
    "UtcTiming": {},
    "UtcTimingUri": {}
  },
  "Description": {},
  "HlsPackage": {
    "AdMarkers": {},
    "AdTriggers": {},
    "AdsOnDeliveryRestrictions": {},
    "Encryption": {
      "ConstantInitializationVector": {},
      "EncryptionMethod": {},
      "KeyRotationIntervalSeconds": {},
      "RepeatExtXKey": {},
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "IncludeDvbSubtitles": {},
    "IncludeIframeOnlyStream": {},
    "PlaylistType": {},
    "PlaylistWindowSeconds": {},
    "ProgramDateTimeIntervalSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    },
    "UseAudioRenditionGroup": {}
  },
  "ManifestName": {},
  "MssPackage": {
    "Encryption": {
      "SpekeKeyProvider": {
        "CertificateArn": {},
        "EncryptionContractConfiguration": {
          "PresetSpeke20Audio": {},
          "PresetSpeke20Video": {}
        },
        "ResourceId": {},
        "RoleArn": {},
        "SystemIds": {},
        "Url": {}
      }
    },
    "ManifestWindowSeconds": {},
    "SegmentDurationSeconds": {},
    "StreamSelection": {
      "MaxVideoBitsPerSecond": {},
      "MinVideoBitsPerSecond": {},
      "StreamOrder": {}
    }
  },
  "Origination": {},
  "StartoverWindowSeconds": {},
  "TimeDelaySeconds": {},
  "Whitelist": {}
}
```

Configuration parameters used to update an existing OriginEndpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authorization|object|false|none|none|
|CmafPackage|object|false|none|none|
|DashPackage|object|false|none|none|
|Description|object|false|none|none|
|HlsPackage|object|false|none|none|
|ManifestName|object|false|none|none|
|MssPackage|object|false|none|none|
|Origination|object|false|none|none|
|StartoverWindowSeconds|object|false|none|none|
|TimeDelaySeconds|object|false|none|none|
|Whitelist|object|false|none|none|

<h2 id="tocS___PeriodTriggersElement">__PeriodTriggersElement</h2>
<!-- backwards compatibility -->
<a id="schema__periodtriggerselement"></a>
<a id="schema___PeriodTriggersElement"></a>
<a id="tocS__periodtriggerselement"></a>
<a id="tocs__periodtriggerselement"></a>

```json
"ADS"
```
