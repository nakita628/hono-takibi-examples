<h1 id="managed-streaming-for-kafka">Managed Streaming for Kafka v2018-11-14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


               <p>The operations for managing an Amazon MSK cluster.</p>

Base URLs:

* <a href="http://kafka.us-east-1.amazonaws.com">http://kafka.us-east-1.amazonaws.com</a> - The Kafka multi-region endpoint

* <a href="https://kafka.us-east-1.amazonaws.com">https://kafka.us-east-1.amazonaws.com</a> - The Kafka multi-region endpoint

* <a href="http://kafka.cn-north-1.amazonaws.com.cn">http://kafka.cn-north-1.amazonaws.com.cn</a> - The Kafka endpoint for China (Beijing) and China (Ningxia)

* <a href="https://kafka.cn-north-1.amazonaws.com.cn">https://kafka.cn-north-1.amazonaws.com.cn</a> - The Kafka endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/kafka/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="managed-streaming-for-kafka-default">Default</h1>

## ListScramSecrets

<a id="opIdListScramSecrets"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/scram-secrets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/scram-secrets`


            <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
         

<h3 id="listscramsecrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The arn of the cluster.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maxResults of the query.</p><br>         |
|nextToken|query|string|false|<br>            <p>The nextToken of the query.</p><br>         |
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
  "SecretArnList": {}
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

<h3 id="listscramsecrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListScramSecretsResponse](#schemalistscramsecretsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchAssociateScramSecret

<a id="opIdBatchAssociateScramSecret"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/scram-secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "secretArnList": [
      "string"
    ]
  }'
```

`POST /v1/clusters/{clusterArn}/scram-secrets`


            <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
         

> Body parameter

```json
{
  "secretArnList": [
    "string"
  ]
}
```

<h3 id="batchassociatescramsecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» secretArnList|body|[[__string](#schema__string)]|true|<br>            <p>List of AWS Secrets Manager secret ARNs.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "UnprocessedScramSecrets": {}
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

<h3 id="batchassociatescramsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchAssociateScramSecretResponse](#schemabatchassociatescramsecretresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDisassociateScramSecret

<a id="opIdBatchDisassociateScramSecret"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/scram-secrets \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "secretArnList": [
      "string"
    ]
  }'
```

`PATCH /v1/clusters/{clusterArn}/scram-secrets`


            <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
         

> Body parameter

```json
{
  "secretArnList": [
    "string"
  ]
}
```

<h3 id="batchdisassociatescramsecret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» secretArnList|body|[[__string](#schema__string)]|true|<br>            <p>List of AWS Secrets Manager secret ARNs.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "UnprocessedScramSecrets": {}
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

<h3 id="batchdisassociatescramsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDisassociateScramSecretResponse](#schemabatchdisassociatescramsecretresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusters

<a id="opIdListClusters"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters`


            <p>Returns a list of all the MSK clusters in the current Region.</p>
         

<h3 id="listclusters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterNameFilter|query|string|false|<br>            <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "ClusterInfoList": {},
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

<h3 id="listclusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersResponse](#schemalistclustersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateCluster

<a id="opIdCreateCluster"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "brokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "clientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "clusterName": "string",
    "configurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "encryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "enhancedMonitoring": "DEFAULT",
    "openMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "kafkaVersion": "string",
    "loggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "numberOfBrokerNodes": 1,
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "storageMode": "LOCAL"
  }'
```

`POST /v1/clusters`


            <p>Creates a new MSK cluster.</p>
         

> Body parameter

```json
{
  "brokerNodeGroupInfo": {
    "BrokerAZDistribution": {},
    "ClientSubnets": {},
    "InstanceType": {},
    "SecurityGroups": {},
    "StorageInfo": {
      "EbsStorageInfo": {
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSize": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "ZoneIds": {}
  },
  "clientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "clusterName": "string",
  "configurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "encryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "enhancedMonitoring": "DEFAULT",
  "openMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "kafkaVersion": "string",
  "loggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "numberOfBrokerNodes": 1,
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "storageMode": "LOCAL"
}
```

<h3 id="createcluster-parameters">Parameters</h3>

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
|» brokerNodeGroupInfo|body|object|true|<br>            <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p><br>         |
|» » BrokerAZDistribution|body|object|false|none|
|» » ClientSubnets|body|object|false|none|
|» » InstanceType|body|object|false|none|
|» » SecurityGroups|body|object|false|none|
|» » StorageInfo|body|object|false|none|
|» » » EbsStorageInfo|body|object|false|none|
|» » » » ProvisionedThroughput|body|object|false|none|
|» » » » » Enabled|body|object|false|none|
|» » » » » VolumeThroughput|body|object|false|none|
|» » » » VolumeSize|body|object|false|none|
|» » ConnectivityInfo|body|object|false|none|
|» » » PublicAccess|body|object|false|none|
|» » » » Type|body|object|false|none|
|» » » VpcConnectivity|body|object|false|none|
|» » » » ClientAuthentication|body|object|false|none|
|» » » » » Sasl|body|object|false|none|
|» » » » » » Scram|body|object|false|none|
|» » » » » » » Enabled|body|object|false|none|
|» » » » » » Iam|body|object|false|none|
|» » » » » » » Enabled|body|object|false|none|
|» » » » » Tls|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » ZoneIds|body|object|false|none|
|» clientAuthentication|body|object|false|<br>            <p>Includes all client authentication information.</p><br>         |
|» » Sasl|body|object|false|none|
|» » » Scram|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » Iam|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » Tls|body|object|false|none|
|» » » CertificateAuthorityArnList|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » Unauthenticated|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» clusterName|body|string|true|<br>            <p>The name of the cluster.</p><br>         |
|» configurationInfo|body|object|false|<br>            <p>Specifies the configuration to use for the brokers.</p><br>         |
|» » Arn|body|object|false|none|
|» » Revision|body|object|false|none|
|» encryptionInfo|body|object|false|<br>            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p><br>         |
|» » EncryptionAtRest|body|object|false|none|
|» » » DataVolumeKMSKeyId|body|object|true|none|
|» » EncryptionInTransit|body|object|false|none|
|» » » ClientBroker|body|object|false|none|
|» » » InCluster|body|object|false|none|
|» enhancedMonitoring|body|string|false|<br>            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p><br>         |
|» openMonitoring|body|object|false|<br>            <p>JMX and Node monitoring for the MSK cluster.</p><br>         |
|» » Prometheus|body|object|false|none|
|» » » JmxExporter|body|object|false|none|
|» » » » EnabledInBroker|body|object|true|none|
|» » » NodeExporter|body|object|false|none|
|» » » » EnabledInBroker|body|object|true|none|
|» kafkaVersion|body|string|true|<br>            <p>The version of Apache Kafka.</p><br>         |
|» loggingInfo|body|object|false|none|
|» » BrokerLogs|body|object|false|none|
|» » » CloudWatchLogs|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » LogGroup|body|object|false|none|
|» » » Firehose|body|object|false|none|
|» » » » DeliveryStream|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » S3|body|object|false|none|
|» » » » Bucket|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Prefix|body|object|false|none|
|» numberOfBrokerNodes|body|integer|true|<br>            <p>The number of broker nodes in the cluster.</p><br>         |
|» tags|body|object|false|<br>            <p>Create tags when creating the cluster.</p><br>         |
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» storageMode|body|string|false|Controls storage mode for various supported storage tiers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enhancedMonitoring|DEFAULT|
|» enhancedMonitoring|PER_BROKER|
|» enhancedMonitoring|PER_TOPIC_PER_BROKER|
|» enhancedMonitoring|PER_TOPIC_PER_PARTITION|
|» storageMode|LOCAL|
|» storageMode|TIERED|

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterName": {},
  "State": {}
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

<h3 id="createcluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterResponse](#schemacreateclusterresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClustersV2

<a id="opIdListClustersV2"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/api/v2/clusters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v2/clusters`


            <p>Returns a list of all the MSK clusters in the current Region.</p>
         

<h3 id="listclustersv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterNameFilter|query|string|false|<br>            <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p><br>         |
|clusterTypeFilter|query|string|false|<br>            <p>Specify either PROVISIONED or SERVERLESS.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "ClusterInfoList": {},
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

<h3 id="listclustersv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClustersV2Response](#schemalistclustersv2response)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateClusterV2

<a id="opIdCreateClusterV2"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/api/v2/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clusterName": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "provisioned": {
      "BrokerNodeGroupInfo": {
        "BrokerAZDistribution": {},
        "ClientSubnets": {},
        "InstanceType": {},
        "SecurityGroups": {},
        "StorageInfo": {
          "EbsStorageInfo": {
            "ProvisionedThroughput": {
              "Enabled": {},
              "VolumeThroughput": {}
            },
            "VolumeSize": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "ZoneIds": {}
      },
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "NumberOfBrokerNodes": {},
      "StorageMode": {}
    },
    "serverless": {
      "VpcConfigs": {},
      "ClientAuthentication": {
        "Sasl": {
          "Iam": {
            "Enabled": {}
          }
        }
      }
    }
  }'
```

`POST /api/v2/clusters`


            <p>Creates a new MSK cluster.</p>
         

> Body parameter

```json
{
  "clusterName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "provisioned": {
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "StorageMode": {}
  },
  "serverless": {
    "VpcConfigs": {},
    "ClientAuthentication": {
      "Sasl": {
        "Iam": {
          "Enabled": {}
        }
      }
    }
  }
}
```

<h3 id="createclusterv2-parameters">Parameters</h3>

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
|» clusterName|body|string|true|<br>            <p>The name of the cluster.</p><br>         |
|» tags|body|object|false|<br>            <p>A map of tags that you want the cluster to have.</p><br>         |
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|
|» provisioned|body|object|false|<br>            <p>Provisioned cluster request.</p><br>         |
|» » BrokerNodeGroupInfo|body|object|false|none|
|» » » BrokerAZDistribution|body|object|false|none|
|» » » ClientSubnets|body|object|true|none|
|» » » InstanceType|body|object|true|none|
|» » » SecurityGroups|body|object|false|none|
|» » » StorageInfo|body|object|false|none|
|» » » » EbsStorageInfo|body|object|false|none|
|» » » » » ProvisionedThroughput|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » » » » » VolumeThroughput|body|object|false|none|
|» » » » » VolumeSize|body|object|false|none|
|» » » ConnectivityInfo|body|object|false|none|
|» » » » PublicAccess|body|object|false|none|
|» » » » » Type|body|object|false|none|
|» » » » VpcConnectivity|body|object|false|none|
|» » » » » ClientAuthentication|body|object|false|none|
|» » » » » » Sasl|body|object|false|none|
|» » » » » » » Scram|body|object|false|none|
|» » » » » » » » Enabled|body|object|false|none|
|» » » » » » » Iam|body|object|false|none|
|» » » » » » » » Enabled|body|object|false|none|
|» » » » » » Tls|body|object|false|none|
|» » » » » » » Enabled|body|object|false|none|
|» » » ZoneIds|body|object|false|none|
|» » ClientAuthentication|body|object|false|none|
|» » » Sasl|body|object|false|none|
|» » » » Scram|body|object|false|none|
|» » » » » Enabled|body|object|false|none|
|» » » » Iam|body|object|false|none|
|» » » » » Enabled|body|object|false|none|
|» » » Tls|body|object|false|none|
|» » » » CertificateAuthorityArnList|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » Unauthenticated|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » ConfigurationInfo|body|object|false|none|
|» » » Arn|body|object|true|none|
|» » » Revision|body|object|true|none|
|» » EncryptionInfo|body|object|false|none|
|» » » EncryptionAtRest|body|object|false|none|
|» » » » DataVolumeKMSKeyId|body|object|true|none|
|» » » EncryptionInTransit|body|object|false|none|
|» » » » ClientBroker|body|object|false|none|
|» » » » InCluster|body|object|false|none|
|» » EnhancedMonitoring|body|object|false|none|
|» » OpenMonitoring|body|object|false|none|
|» » » Prometheus|body|object|true|none|
|» » » » JmxExporter|body|object|false|none|
|» » » » » EnabledInBroker|body|object|true|none|
|» » » » NodeExporter|body|object|false|none|
|» » » » » EnabledInBroker|body|object|true|none|
|» » KafkaVersion|body|object|false|none|
|» » LoggingInfo|body|object|false|none|
|» » » BrokerLogs|body|object|true|none|
|» » » » CloudWatchLogs|body|object|false|none|
|» » » » » Enabled|body|object|true|none|
|» » » » » LogGroup|body|object|false|none|
|» » » » Firehose|body|object|false|none|
|» » » » » DeliveryStream|body|object|false|none|
|» » » » » Enabled|body|object|true|none|
|» » » » S3|body|object|false|none|
|» » » » » Bucket|body|object|false|none|
|» » » » » Enabled|body|object|true|none|
|» » » » » Prefix|body|object|false|none|
|» » NumberOfBrokerNodes|body|object|false|none|
|» » StorageMode|body|object|false|none|
|» serverless|body|object|false|<br>            <p>Serverless cluster request.</p><br>         |
|» » VpcConfigs|body|object|false|none|
|» » ClientAuthentication|body|object|false|none|
|» » » Sasl|body|object|false|none|
|» » » » Iam|body|object|false|none|
|» » » » » Enabled|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterName": {},
  "State": {},
  "ClusterType": {}
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

<h3 id="createclusterv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateClusterV2Response](#schemacreateclusterv2response)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurations

<a id="opIdListConfigurations"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations`


            <p>Returns a list of all the MSK configurations in this Region.</p>
         

<h3 id="listconfigurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "Configurations": {},
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

<h3 id="listconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationsResponse](#schemalistconfigurationsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConfiguration

<a id="opIdCreateConfiguration"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "kafkaVersions": [
      "string"
    ],
    "name": "string",
    "serverProperties": "string"
  }'
```

`POST /v1/configurations`


            <p>Creates a new MSK configuration.</p>
         

> Body parameter

```json
{
  "description": "string",
  "kafkaVersions": [
    "string"
  ],
  "name": "string",
  "serverProperties": "string"
}
```

<h3 id="createconfiguration-parameters">Parameters</h3>

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
|» description|body|string|false|<br>            <p>The description of the configuration.</p><br>         |
|» kafkaVersions|body|[[__string](#schema__string)]|false|<br>            <p>The versions of Apache Kafka with which you can use this MSK configuration.</p><br>         |
|» name|body|string|true|<br>            <p>The name of the configuration.</p><br>         |
|» serverProperties|body|string|true|<br>            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. <br>               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p><br>         |

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "CreationTime": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "State": {}
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

<h3 id="createconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConfigurationResponse](#schemacreateconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|
|486|486|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcConnection

<a id="opIdCreateVpcConnection"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/vpc-connection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "targetClusterArn": "string",
    "authentication": "string",
    "vpcId": "string",
    "clientSubnets": [
      "string"
    ],
    "securityGroups": [
      "string"
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/vpc-connection`


            <p>Creates a new MSK VPC connection.</p>
         

> Body parameter

```json
{
  "targetClusterArn": "string",
  "authentication": "string",
  "vpcId": "string",
  "clientSubnets": [
    "string"
  ],
  "securityGroups": [
    "string"
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createvpcconnection-parameters">Parameters</h3>

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
|» targetClusterArn|body|string|true|<br>            <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p><br>         |
|» authentication|body|string|true|<br>            <p>The authentication type of VPC connection.</p><br>         |
|» vpcId|body|string|true|<br>            <p>The VPC ID of VPC connection.</p><br>         |
|» clientSubnets|body|[[__string](#schema__string)]|true|<br>            <p>The list of client subnets.</p><br>         |
|» securityGroups|body|[[__string](#schema__string)]|true|<br>            <p>The list of security groups.</p><br>         |
|» tags|body|object|false|<br>            <p>A map of tags for the VPC connection.</p><br>         |
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

> Example responses

> 200 Response

```json
{
  "VpcConnectionArn": {},
  "State": {},
  "Authentication": {},
  "VpcId": {},
  "ClientSubnets": {},
  "SecurityGroups": {},
  "CreationTime": {},
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

<h3 id="createvpcconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcConnectionResponse](#schemacreatevpcconnectionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|485|485|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCluster

<a id="opIdDescribeCluster"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}`


            <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
         

<h3 id="describecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
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
  "ClusterInfo": {
    "ActiveOperationArn": {},
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentBrokerSoftwareInfo": {
      "ConfigurationArn": {},
      "ConfigurationRevision": {},
      "KafkaVersion": {}
    },
    "CurrentVersion": {},
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ZookeeperConnectString": {},
    "ZookeeperConnectStringTls": {},
    "StorageMode": {}
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

<h3 id="describecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterResponse](#schemadescribeclusterresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteCluster

<a id="opIdDeleteCluster"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/clusters/{clusterArn}`


            <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
         

<h3 id="deletecluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|currentVersion|query|string|false|<br>            <p>The current version of the MSK cluster.</p><br>         |
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
  "ClusterArn": {},
  "State": {}
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

<h3 id="deletecluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterResponse](#schemadeleteclusterresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetClusterPolicy

<a id="opIdGetClusterPolicy"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/policy \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/policy`


            <p>Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
         

<h3 id="getclusterpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster.</p><br>            |
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
  "CurrentVersion": {},
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

<h3 id="getclusterpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetClusterPolicyResponse](#schemagetclusterpolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutClusterPolicy

<a id="opIdPutClusterPolicy"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/policy \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "policy": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/policy`


            <p>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</p>
         

> Body parameter

```json
{
  "currentVersion": "string",
  "policy": "string"
}
```

<h3 id="putclusterpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|false|<br>            <p>The policy version.</p><br>         |
|» policy|body|string|true|<br>            <p>The policy.</p><br>         |

> Example responses

> 200 Response

```json
{
  "CurrentVersion": {}
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

<h3 id="putclusterpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutClusterPolicyResponse](#schemaputclusterpolicyresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteClusterPolicy

<a id="opIdDeleteClusterPolicy"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/policy \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/clusters/{clusterArn}/policy`


            <p>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
         

<h3 id="deleteclusterpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster.</p><br>         |
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

> 483 Response

```json
null
```

<h3 id="deleteclusterpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteClusterPolicyResponse](#schemadeleteclusterpolicyresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfiguration

<a id="opIdDescribeConfiguration"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{arn}`


            <p>Returns a description of this MSK configuration.</p>
         

<h3 id="describeconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p><br>         |
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
  "CreationTime": {},
  "Description": {},
  "KafkaVersions": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "State": {}
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

<h3 id="describeconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationResponse](#schemadescribeconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConfiguration

<a id="opIdUpdateConfiguration"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "description": "string",
    "serverProperties": "string"
  }'
```

`PUT /v1/configurations/{arn}`


            <p>Updates an MSK configuration.</p>
         

> Body parameter

```json
{
  "description": "string",
  "serverProperties": "string"
}
```

<h3 id="updateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the configuration.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» description|body|string|false|<br>            <p>The description of the configuration revision.</p><br>         |
|» serverProperties|body|string|true|<br>            <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. <br>               When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p><br>         |

> Example responses

> 200 Response

```json
{
  "Arn": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
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

<h3 id="updateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConfigurationResponse](#schemaupdateconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConfiguration

<a id="opIdDeleteConfiguration"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/configurations/{arn}`


            <p>Deletes an MSK Configuration.</p>
         

<h3 id="deleteconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p><br>         |
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
  "State": {}
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

<h3 id="deleteconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConfigurationResponse](#schemadeleteconfigurationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcConnection

<a id="opIdDescribeVpcConnection"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/vpc-connection/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/vpc-connection/{arn}`


            <p>Returns a description of this MSK VPC connection.</p>
         

<h3 id="describevpcconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p><br>   |
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
  "VpcConnectionArn": {},
  "TargetClusterArn": {},
  "State": {},
  "Authentication": {},
  "VpcId": {},
  "Subnets": {},
  "SecurityGroups": {},
  "CreationTime": {},
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

<h3 id="describevpcconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcConnectionResponse](#schemadescribevpcconnectionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcConnection

<a id="opIdDeleteVpcConnection"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/vpc-connection/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/vpc-connection/{arn}`


            <p>Deletes a MSK VPC connection.</p>
         

<h3 id="deletevpcconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p><br>         |
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
  "VpcConnectionArn": {},
  "State": {}
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

<h3 id="deletevpcconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcConnectionResponse](#schemadeletevpcconnectionresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusterV2

<a id="opIdDescribeClusterV2"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/api/v2/clusters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v2/clusters/{clusterArn}`


            <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
         

<h3 id="describeclusterv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
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
  "ClusterInfo": {
    "ActiveOperationArn": {},
    "ClusterType": {},
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentVersion": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Provisioned": {
      "BrokerNodeGroupInfo": {
        "BrokerAZDistribution": {},
        "ClientSubnets": {},
        "InstanceType": {},
        "SecurityGroups": {},
        "StorageInfo": {
          "EbsStorageInfo": {
            "ProvisionedThroughput": {
              "Enabled": {},
              "VolumeThroughput": {}
            },
            "VolumeSize": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "ZoneIds": {}
      },
      "CurrentBrokerSoftwareInfo": {
        "ConfigurationArn": {},
        "ConfigurationRevision": {},
        "KafkaVersion": {}
      },
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "NumberOfBrokerNodes": {},
      "ZookeeperConnectString": {},
      "ZookeeperConnectStringTls": {},
      "StorageMode": {}
    },
    "Serverless": {
      "VpcConfigs": {},
      "ClientAuthentication": {
        "Sasl": {
          "Iam": {
            "Enabled": {}
          }
        }
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

<h3 id="describeclusterv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterV2Response](#schemadescribeclusterv2response)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusterOperation

<a id="opIdDescribeClusterOperation"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/operations/{clusterOperationArn}`


            <p>Returns a description of the cluster operation specified by the ARN.</p>
         

<h3 id="describeclusteroperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterOperationArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p><br>         |
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
  "ClusterOperationInfo": {
    "ClientRequestId": {},
    "ClusterArn": {},
    "CreationTime": {},
    "EndTime": {},
    "ErrorInfo": {
      "ErrorCode": {},
      "ErrorString": {}
    },
    "OperationArn": {},
    "OperationState": {},
    "OperationSteps": {},
    "OperationType": {},
    "SourceClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "TargetClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "VpcConnectionInfo": {
      "VpcConnectionArn": {},
      "Owner": {},
      "UserIdentity": {
        "Type": {},
        "PrincipalId": {}
      },
      "CreationTime": {}
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

<h3 id="describeclusteroperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterOperationResponse](#schemadescribeclusteroperationresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeClusterOperationV2

<a id="opIdDescribeClusterOperationV2"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/api/v2/operations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v2/operations/{clusterOperationArn}`


            <p>Returns a description of the cluster operation specified by the ARN.</p>


<h3 id="describeclusteroperationv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterOperationArn|path|string|true|ARN of the cluster operation to describe.|
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
  "ClusterOperationInfo": {
    "ClusterArn": {},
    "ClusterType": {},
    "StartTime": {},
    "EndTime": {},
    "ErrorInfo": {
      "ErrorCode": {},
      "ErrorString": {}
    },
    "OperationArn": {},
    "OperationState": {},
    "OperationType": {},
    "Provisioned": {
      "OperationSteps": {},
      "SourceClusterInfo": {
        "BrokerEBSVolumeInfo": {},
        "ConfigurationInfo": {
          "Arn": {},
          "Revision": {}
        },
        "NumberOfBrokerNodes": {},
        "EnhancedMonitoring": {},
        "OpenMonitoring": {
          "Prometheus": {
            "JmxExporter": {
              "EnabledInBroker": {}
            },
            "NodeExporter": {
              "EnabledInBroker": {}
            }
          }
        },
        "KafkaVersion": {},
        "LoggingInfo": {
          "BrokerLogs": {
            "CloudWatchLogs": {
              "Enabled": {},
              "LogGroup": {}
            },
            "Firehose": {
              "DeliveryStream": {},
              "Enabled": {}
            },
            "S3": {
              "Bucket": {},
              "Enabled": {},
              "Prefix": {}
            }
          }
        },
        "InstanceType": {},
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "CertificateAuthorityArnList": {},
            "Enabled": {}
          },
          "Unauthenticated": {
            "Enabled": {}
          }
        },
        "EncryptionInfo": {
          "EncryptionAtRest": {
            "DataVolumeKMSKeyId": {}
          },
          "EncryptionInTransit": {
            "ClientBroker": {},
            "InCluster": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "StorageMode": {}
      },
      "TargetClusterInfo": {
        "BrokerEBSVolumeInfo": {},
        "ConfigurationInfo": {
          "Arn": {},
          "Revision": {}
        },
        "NumberOfBrokerNodes": {},
        "EnhancedMonitoring": {},
        "OpenMonitoring": {
          "Prometheus": {
            "JmxExporter": {
              "EnabledInBroker": {}
            },
            "NodeExporter": {
              "EnabledInBroker": {}
            }
          }
        },
        "KafkaVersion": {},
        "LoggingInfo": {
          "BrokerLogs": {
            "CloudWatchLogs": {
              "Enabled": {},
              "LogGroup": {}
            },
            "Firehose": {
              "DeliveryStream": {},
              "Enabled": {}
            },
            "S3": {
              "Bucket": {},
              "Enabled": {},
              "Prefix": {}
            }
          }
        },
        "InstanceType": {},
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "CertificateAuthorityArnList": {},
            "Enabled": {}
          },
          "Unauthenticated": {
            "Enabled": {}
          }
        },
        "EncryptionInfo": {
          "EncryptionAtRest": {
            "DataVolumeKMSKeyId": {}
          },
          "EncryptionInTransit": {
            "ClientBroker": {},
            "InCluster": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "StorageMode": {}
      },
      "VpcConnectionInfo": {
        "VpcConnectionArn": {},
        "Owner": {},
        "UserIdentity": {
          "Type": {},
          "PrincipalId": {}
        },
        "CreationTime": {}
      }
    },
    "Serverless": {
      "VpcConnectionInfo": {
        "CreationTime": {},
        "Owner": {},
        "UserIdentity": {
          "Type": {},
          "PrincipalId": {}
        },
        "VpcConnectionArn": {}
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

> 486 Response

```json
null
```

<h3 id="describeclusteroperationv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeClusterOperationV2Response](#schemadescribeclusteroperationv2response)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConfigurationRevision

<a id="opIdDescribeConfigurationRevision"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations/string/revisions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{arn}/revisions/{revision}`


            <p>Returns a description of this revision of the configuration.</p>
         

<h3 id="describeconfigurationrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p><br>         |
|revision|path|integer|true|<br>            <p>A string that uniquely identifies a revision of an MSK configuration.</p><br>         |
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
  "CreationTime": {},
  "Description": {},
  "Revision": {},
  "ServerProperties": {}
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

<h3 id="describeconfigurationrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConfigurationRevisionResponse](#schemadescribeconfigurationrevisionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetBootstrapBrokers

<a id="opIdGetBootstrapBrokers"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/bootstrap-brokers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/bootstrap-brokers`


            <p>A list of brokers that a client application can use to bootstrap.</p>
         

<h3 id="getbootstrapbrokers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
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
  "BootstrapBrokerString": {},
  "BootstrapBrokerStringTls": {},
  "BootstrapBrokerStringSaslScram": {},
  "BootstrapBrokerStringSaslIam": {},
  "BootstrapBrokerStringPublicTls": {},
  "BootstrapBrokerStringPublicSaslScram": {},
  "BootstrapBrokerStringPublicSaslIam": {},
  "BootstrapBrokerStringVpcConnectivityTls": {},
  "BootstrapBrokerStringVpcConnectivitySaslScram": {},
  "BootstrapBrokerStringVpcConnectivitySaslIam": {}
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

<h3 id="getbootstrapbrokers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetBootstrapBrokersResponse](#schemagetbootstrapbrokersresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCompatibleKafkaVersions

<a id="opIdGetCompatibleKafkaVersions"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/compatible-kafka-versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/compatible-kafka-versions`


            <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
         

<h3 id="getcompatiblekafkaversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|query|string|false|<br>            <p>The Amazon Resource Name (ARN) of the cluster check.</p><br>            |
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
  "CompatibleKafkaVersions": {}
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

<h3 id="getcompatiblekafkaversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCompatibleKafkaVersionsResponse](#schemagetcompatiblekafkaversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusterOperations

<a id="opIdListClusterOperations"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/operations`


            <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
         

<h3 id="listclusteroperations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "ClusterOperationInfoList": {},
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

<h3 id="listclusteroperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClusterOperationsResponse](#schemalistclusteroperationsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClusterOperationsV2

<a id="opIdListClusterOperationsV2"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/api/v2/clusters/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v2/clusters/{clusterArn}/operations`


            <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
         

<h3 id="listclusteroperationsv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|The arn of the cluster whose operations are being requested.|
|maxResults|query|integer|false|The maxResults of the query.|
|nextToken|query|string|false|The nextToken of the query.|
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
  "ClusterOperationInfoList": {},
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

> 486 Response

```json
null
```

<h3 id="listclusteroperationsv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClusterOperationsV2Response](#schemalistclusteroperationsv2response)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConfigurationRevisions

<a id="opIdListConfigurationRevisions"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/configurations/string/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/configurations/{arn}/revisions`


            <p>Returns a list of all the MSK configurations in this Region.</p>
         

<h3 id="listconfigurationrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "Revisions": {}
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

<h3 id="listconfigurationrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConfigurationRevisionsResponse](#schemalistconfigurationrevisionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKafkaVersions

<a id="opIdListKafkaVersions"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/kafka-versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/kafka-versions`


            <p>Returns a list of Apache Kafka versions.</p>
         

<h3 id="listkafkaversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>|
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>|
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
  "KafkaVersions": {},
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

<h3 id="listkafkaversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKafkaVersionsResponse](#schemalistkafkaversionsresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListNodes

<a id="opIdListNodes"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/nodes \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/nodes`


            <p>Returns a list of the broker nodes in the cluster.</p>
         

<h3 id="listnodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "NodeInfoList": {}
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

<h3 id="listnodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListNodesResponse](#schemalistnodesresponse)|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/tags/{resourceArn}`


            <p>Returns a list of the tags associated with the specified resource.</p>
         

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p><br>         |
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
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/tags/string \
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

`POST /v1/tags/{resourceArn}`


            <p>Adds tags to the specified MSK resource.</p>
         

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
|resourceArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true|<br>            <p>The key-value pair for the resource tag.</p><br>         |
|» » **additionalProperties**|body|[__string](#schema__string)|false|none|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListClientVpcConnections

<a id="opIdListClientVpcConnections"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/client-vpc-connections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/clusters/{clusterArn}/client-vpc-connections`


            <p>Returns a list of all the VPC connections in this Region.</p>
         

<h3 id="listclientvpcconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster.</p><br>         |
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "ClientVpcConnections": {},
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

<h3 id="listclientvpcconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListClientVpcConnectionsResponse](#schemalistclientvpcconnectionsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcConnections

<a id="opIdListVpcConnections"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/vpc-connections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/vpc-connections`


            <p>Returns a list of all the VPC connections in this Region.</p>
         

<h3 id="listvpcconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false|<br>            <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p><br>         |
|nextToken|query|string|false|<br>            <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. <br>            To get the next batch, provide this token in your next request.</p><br>         |
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
  "VpcConnections": {},
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

<h3 id="listvpcconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcConnectionsResponse](#schemalistvpcconnectionsresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectClientVpcConnection

<a id="opIdRejectClientVpcConnection"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/client-vpc-connection \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "vpcConnectionArn": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/client-vpc-connection`


            <p>Returns empty response.</p>
         

> Body parameter

```json
{
  "vpcConnectionArn": "string"
}
```

<h3 id="rejectclientvpcconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» vpcConnectionArn|body|string|true|<br>            <p>The VPC connection ARN.</p><br>         |

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

<h3 id="rejectclientvpcconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectClientVpcConnectionResponse](#schemarejectclientvpcconnectionresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RebootBroker

<a id="opIdRebootBroker"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/reboot-broker \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "brokerIds": [
      "string"
    ]
  }'
```

`PUT /v1/clusters/{clusterArn}/reboot-broker`

Reboots brokers.

> Body parameter

```json
{
  "brokerIds": [
    "string"
  ]
}
```

<h3 id="rebootbroker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» brokerIds|body|[[__string](#schema__string)]|true|<br>            <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="rebootbroker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RebootBrokerResponse](#schemarebootbrokerresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://kafka.us-east-1.amazonaws.com/v1/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /v1/tags/{resourceArn}#tagKeys`


            <p>Removes the tags associated with the keys that are provided in the query.</p>
         

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p><br>         |
|tagKeys|query|[[__string](#schema__string)]|true|<br>            <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p><br>            <ul><br>               <li><br>                  <p>Each tag key must be unique. If you add a tag with a key that's already in<br>                  use, your new tag overwrites the existing key-value pair. </p><br>               </li><br>               <li><br>                  <p>You can't start a tag key with aws: because this prefix is reserved for use<br>                  by  AWS.  AWS creates tags that begin with this prefix on your behalf, but<br>                  you can't edit or delete them.</p><br>               </li><br>               <li><br>                  <p>Tag keys must be between 1 and 128 Unicode characters in length.</p><br>               </li><br>               <li><br>                  <p>Tag keys must consist of the following characters: Unicode letters, digits,<br>                  white space, and the following special characters: _ . / = + -<br>                     @.</p><br>               </li><br>            </ul><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|480|480|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBrokerCount

<a id="opIdUpdateBrokerCount"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/nodes/count \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "targetNumberOfBrokerNodes": 1
  }'
```

`PUT /v1/clusters/{clusterArn}/nodes/count`


            <p>Updates the number of broker nodes in the cluster.</p>
         

> Body parameter

```json
{
  "currentVersion": "string",
  "targetNumberOfBrokerNodes": 1
}
```

<h3 id="updatebrokercount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|true|<br>            <p>The version of cluster to update from. A successful operation will then generate a new version.</p><br>         |
|» targetNumberOfBrokerNodes|body|integer|true|<br>            <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatebrokercount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBrokerCountResponse](#schemaupdatebrokercountresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBrokerType

<a id="opIdUpdateBrokerType"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/nodes/type \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "targetInstanceType": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/nodes/type`


            <p>Updates EC2 instance type.</p>
         

> Body parameter

```json
{
  "currentVersion": "string",
  "targetInstanceType": "string"
}
```

<h3 id="updatebrokertype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|true|<br>            <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p><br>         |
|» targetInstanceType|body|string|true|<br>            <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatebrokertype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBrokerTypeResponse](#schemaupdatebrokertyperesponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateBrokerStorage

<a id="opIdUpdateBrokerStorage"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/nodes/storage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "targetBrokerEBSVolumeInfo": [
      {
        "KafkaBrokerNodeId": {},
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSizeGB": {}
      }
    ]
  }'
```

`PUT /v1/clusters/{clusterArn}/nodes/storage`


            <p>Updates the EBS storage associated with MSK brokers.</p>
         

> Body parameter

```json
{
  "currentVersion": "string",
  "targetBrokerEBSVolumeInfo": [
    {
      "KafkaBrokerNodeId": {},
      "ProvisionedThroughput": {
        "Enabled": {},
        "VolumeThroughput": {}
      },
      "VolumeSizeGB": {}
    }
  ]
}
```

<h3 id="updatebrokerstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|true|<br>            <p>The version of cluster to update from. A successful operation will then generate a new version.</p><br>         |
|» targetBrokerEBSVolumeInfo|body|[[BrokerEBSVolumeInfo](#schemabrokerebsvolumeinfo)]|true|<br>            <p>Describes the target volume size and the ID of the broker to apply the update to.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatebrokerstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateBrokerStorageResponse](#schemaupdatebrokerstorageresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectivity

<a id="opIdUpdateConnectivity"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/connectivity \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "currentVersion": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/connectivity`


            <p>Updates the cluster's connectivity configuration.</p>
         

> Body parameter

```json
{
  "connectivityInfo": {
    "PublicAccess": {
      "Type": {}
    },
    "VpcConnectivity": {
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "Enabled": {}
        }
      }
    }
  },
  "currentVersion": "string"
}
```

<h3 id="updateconnectivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the configuration.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» connectivityInfo|body|object|true|<br>            <p>Information about the broker access configuration.</p><br>         |
|» » PublicAccess|body|object|false|none|
|» » » Type|body|object|false|none|
|» » VpcConnectivity|body|object|false|none|
|» » » ClientAuthentication|body|object|false|none|
|» » » » Sasl|body|object|false|none|
|» » » » » Scram|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » » » » Iam|body|object|false|none|
|» » » » » » Enabled|body|object|false|none|
|» » » » Tls|body|object|false|none|
|» » » » » Enabled|body|object|false|none|
|» currentVersion|body|string|true|<br>            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updateconnectivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectivityResponse](#schemaupdateconnectivityresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClusterConfiguration

<a id="opIdUpdateClusterConfiguration"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/configuration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "currentVersion": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/configuration`


            <p>Updates the cluster with the configuration that is specified in the request body.</p>
         

> Body parameter

```json
{
  "configurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "currentVersion": "string"
}
```

<h3 id="updateclusterconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configurationInfo|body|object|true|<br>            <p>Specifies the configuration to use for the brokers.</p><br>         |
|» » Arn|body|object|false|none|
|» » Revision|body|object|false|none|
|» currentVersion|body|string|true|<br>            <p>The version of the cluster that needs to be updated.</p><br>         |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updateclusterconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterConfigurationResponse](#schemaupdateclusterconfigurationresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateClusterKafkaVersion

<a id="opIdUpdateClusterKafkaVersion"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/version \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "configurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "currentVersion": "string",
    "targetKafkaVersion": "string"
  }'
```

`PUT /v1/clusters/{clusterArn}/version`


            <p>Updates the Apache Kafka version for the cluster.</p>
         

> Body parameter

```json
{
  "configurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "currentVersion": "string",
  "targetKafkaVersion": "string"
}
```

<h3 id="updateclusterkafkaversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p><br>            |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» configurationInfo|body|object|false|<br>            <p>Specifies the configuration to use for the brokers.</p><br>         |
|» » Arn|body|object|false|none|
|» » Revision|body|object|false|none|
|» currentVersion|body|string|true|<br>            <p>Current cluster version.</p><br>            |
|» targetKafkaVersion|body|string|true|<br>            <p>Target Kafka version.</p><br>            |

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updateclusterkafkaversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateClusterKafkaVersionResponse](#schemaupdateclusterkafkaversionresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMonitoring

<a id="opIdUpdateMonitoring"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/monitoring \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "enhancedMonitoring": "DEFAULT",
    "openMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "loggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    }
  }'
```

`PUT /v1/clusters/{clusterArn}/monitoring`


            <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
         

> Body parameter

```json
{
  "currentVersion": "string",
  "enhancedMonitoring": "DEFAULT",
  "openMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "loggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  }
}
```

<h3 id="updatemonitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|true|<br>            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p><br>         |
|» enhancedMonitoring|body|string|false|<br>            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p><br>         |
|» openMonitoring|body|object|false|<br>            <p>JMX and Node monitoring for the MSK cluster.</p><br>         |
|» » Prometheus|body|object|false|none|
|» » » JmxExporter|body|object|false|none|
|» » » » EnabledInBroker|body|object|true|none|
|» » » NodeExporter|body|object|false|none|
|» » » » EnabledInBroker|body|object|true|none|
|» loggingInfo|body|object|false|none|
|» » BrokerLogs|body|object|false|none|
|» » » CloudWatchLogs|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » LogGroup|body|object|false|none|
|» » » Firehose|body|object|false|none|
|» » » » DeliveryStream|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » S3|body|object|false|none|
|» » » » Bucket|body|object|false|none|
|» » » » Enabled|body|object|true|none|
|» » » » Prefix|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» enhancedMonitoring|DEFAULT|
|» enhancedMonitoring|PER_BROKER|
|» enhancedMonitoring|PER_TOPIC_PER_BROKER|
|» enhancedMonitoring|PER_TOPIC_PER_PARTITION|

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatemonitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMonitoringResponse](#schemaupdatemonitoringresponse)|
|480|480|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|481|481|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|482|482|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|483|483|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|484|484|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateSecurity

<a id="opIdUpdateSecurity"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/security \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "clientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "currentVersion": "string",
    "encryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    }
  }'
```

`PATCH /v1/clusters/{clusterArn}/security`


            <p>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</p>
         

> Body parameter

```json
{
  "clientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "currentVersion": "string",
  "encryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  }
}
```

<h3 id="updatesecurity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» clientAuthentication|body|object|false|<br>            <p>Includes all client authentication information.</p><br>         |
|» » Sasl|body|object|false|none|
|» » » Scram|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » » Iam|body|object|false|none|
|» » » » Enabled|body|object|false|none|
|» » Tls|body|object|false|none|
|» » » CertificateAuthorityArnList|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » Unauthenticated|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» currentVersion|body|string|true|<br>            <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p><br>         |
|» encryptionInfo|body|object|false|<br>            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p><br>         |
|» » EncryptionAtRest|body|object|false|none|
|» » » DataVolumeKMSKeyId|body|object|true|none|
|» » EncryptionInTransit|body|object|false|none|
|» » » ClientBroker|body|object|false|none|
|» » » InCluster|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatesecurity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateSecurityResponse](#schemaupdatesecurityresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateStorage

<a id="opIdUpdateStorage"></a>

> Code samples

```bash
curl https://kafka.us-east-1.amazonaws.com/v1/clusters/string/storage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "currentVersion": "string",
    "provisionedThroughput": {
      "Enabled": {},
      "VolumeThroughput": {}
    },
    "storageMode": "LOCAL",
    "volumeSizeGB": 0
  }'
```

`PUT /v1/clusters/{clusterArn}/storage`

Updates cluster broker volume size (or) sets cluster storage mode to TIERED.

> Body parameter

```json
{
  "currentVersion": "string",
  "provisionedThroughput": {
    "Enabled": {},
    "VolumeThroughput": {}
  },
  "storageMode": "LOCAL",
  "volumeSizeGB": 0
}
```

<h3 id="updatestorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterArn|path|string|true|<br>            <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p><br>         |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» currentVersion|body|string|true|<br>            <p>The version of cluster to update from. A successful operation will then generate a new version.</p><br>         |
|» provisionedThroughput|body|object|false|<br>            <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p><br>         |
|» » Enabled|body|object|false|none|
|» » VolumeThroughput|body|object|false|none|
|» storageMode|body|string|false|Controls storage mode for various supported storage tiers.|
|» volumeSizeGB|body|integer|false|<br>            <p>size of the EBS volume to update.</p><br>         |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» storageMode|LOCAL|
|» storageMode|TIERED|

> Example responses

> 200 Response

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
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

<h3 id="updatestorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateStorageResponse](#schemaupdatestorageresponse)|
|480|480|BadRequestException|[BadRequestException](#schemabadrequestexception)|
|481|481|UnauthorizedException|[UnauthorizedException](#schemaunauthorizedexception)|
|482|482|InternalServerErrorException|[InternalServerErrorException](#schemainternalservererrorexception)|
|483|483|ForbiddenException|[ForbiddenException](#schemaforbiddenexception)|
|484|484|NotFoundException|[NotFoundException](#schemanotfoundexception)|
|485|485|ServiceUnavailableException|[ServiceUnavailableException](#schemaserviceunavailableexception)|
|486|486|TooManyRequestsException|[TooManyRequestsException](#schematoomanyrequestsexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_BatchAssociateScramSecretResponse">BatchAssociateScramSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociatescramsecretresponse"></a>
<a id="schema_BatchAssociateScramSecretResponse"></a>
<a id="tocSbatchassociatescramsecretresponse"></a>
<a id="tocsbatchassociatescramsecretresponse"></a>

```json
{
  "ClusterArn": {},
  "UnprocessedScramSecrets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|UnprocessedScramSecrets|object|false|none|none|

<h2 id="tocS___string">__string</h2>
<!-- backwards compatibility -->
<a id="schema__string"></a>
<a id="schema___string"></a>
<a id="tocS__string"></a>
<a id="tocs__string"></a>

```json
"string"
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

<h2 id="tocS_UnauthorizedException">UnauthorizedException</h2>
<!-- backwards compatibility -->
<a id="schemaunauthorizedexception"></a>
<a id="schema_UnauthorizedException"></a>
<a id="tocSunauthorizedexception"></a>
<a id="tocsunauthorizedexception"></a>

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

<h2 id="tocS_CreateClusterResponse">CreateClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterresponse"></a>
<a id="schema_CreateClusterResponse"></a>
<a id="tocScreateclusterresponse"></a>
<a id="tocscreateclusterresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterName": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterName|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_BrokerAZDistribution">BrokerAZDistribution</h2>
<!-- backwards compatibility -->
<a id="schemabrokerazdistribution"></a>
<a id="schema_BrokerAZDistribution"></a>
<a id="tocSbrokerazdistribution"></a>
<a id="tocsbrokerazdistribution"></a>

```json
"DEFAULT"
```


            <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
         <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>

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

<h2 id="tocS___stringMin5Max32">__stringMin5Max32</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin5max32"></a>
<a id="schema___stringMin5Max32"></a>
<a id="tocS__stringmin5max32"></a>
<a id="tocs__stringmin5max32"></a>

```json
"string"
```

<h2 id="tocS_StorageInfo">StorageInfo</h2>
<!-- backwards compatibility -->
<a id="schemastorageinfo"></a>
<a id="schema_StorageInfo"></a>
<a id="tocSstorageinfo"></a>
<a id="tocsstorageinfo"></a>

```json
{
  "EbsStorageInfo": {
    "ProvisionedThroughput": {
      "Enabled": {},
      "VolumeThroughput": {}
    },
    "VolumeSize": {}
  }
}
```


            <p>Contains information about storage volumes attached to MSK broker nodes.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EbsStorageInfo|object|false|none|none|

<h2 id="tocS_ConnectivityInfo">ConnectivityInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectivityinfo"></a>
<a id="schema_ConnectivityInfo"></a>
<a id="tocSconnectivityinfo"></a>
<a id="tocsconnectivityinfo"></a>

```json
{
  "PublicAccess": {
    "Type": {}
  },
  "VpcConnectivity": {
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "Enabled": {}
      }
    }
  }
}
```


            <p>Information about the broker access configuration.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PublicAccess|object|false|none|none|
|VpcConnectivity|object|false|none|none|

<h2 id="tocS_Sasl">Sasl</h2>
<!-- backwards compatibility -->
<a id="schemasasl"></a>
<a id="schema_Sasl"></a>
<a id="tocSsasl"></a>
<a id="tocssasl"></a>

```json
{
  "Scram": {
    "Enabled": {}
  },
  "Iam": {
    "Enabled": {}
  }
}
```


            <p>Details for client authentication using SASL.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scram|object|false|none|none|
|Iam|object|false|none|none|

<h2 id="tocS_Tls">Tls</h2>
<!-- backwards compatibility -->
<a id="schematls"></a>
<a id="schema_Tls"></a>
<a id="tocStls"></a>
<a id="tocstls"></a>

```json
{
  "CertificateAuthorityArnList": {},
  "Enabled": {}
}
```


            <p>Details for client authentication using TLS.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateAuthorityArnList|object|false|none|none|
|Enabled|object|false|none|none|

<h2 id="tocS_Unauthenticated">Unauthenticated</h2>
<!-- backwards compatibility -->
<a id="schemaunauthenticated"></a>
<a id="schema_Unauthenticated"></a>
<a id="tocSunauthenticated"></a>
<a id="tocsunauthenticated"></a>

```json
{
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS___long">__long</h2>
<!-- backwards compatibility -->
<a id="schema__long"></a>
<a id="schema___long"></a>
<a id="tocS__long"></a>
<a id="tocs__long"></a>

```json
0
```

<h2 id="tocS_EncryptionAtRest">EncryptionAtRest</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionatrest"></a>
<a id="schema_EncryptionAtRest"></a>
<a id="tocSencryptionatrest"></a>
<a id="tocsencryptionatrest"></a>

```json
{
  "DataVolumeKMSKeyId": {}
}
```


            <p>The data-volume encryption details.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataVolumeKMSKeyId|object|true|none|none|

<h2 id="tocS_EncryptionInTransit">EncryptionInTransit</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionintransit"></a>
<a id="schema_EncryptionInTransit"></a>
<a id="tocSencryptionintransit"></a>
<a id="tocsencryptionintransit"></a>

```json
{
  "ClientBroker": {},
  "InCluster": {}
}
```


            <p>The settings for encrypting data in transit.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientBroker|object|false|none|none|
|InCluster|object|false|none|none|

<h2 id="tocS_PrometheusInfo">PrometheusInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusinfo"></a>
<a id="schema_PrometheusInfo"></a>
<a id="tocSprometheusinfo"></a>
<a id="tocsprometheusinfo"></a>

```json
{
  "JmxExporter": {
    "EnabledInBroker": {}
  },
  "NodeExporter": {
    "EnabledInBroker": {}
  }
}
```


            <p>Prometheus settings.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JmxExporter|object|false|none|none|
|NodeExporter|object|false|none|none|

<h2 id="tocS_BrokerLogs">BrokerLogs</h2>
<!-- backwards compatibility -->
<a id="schemabrokerlogs"></a>
<a id="schema_BrokerLogs"></a>
<a id="tocSbrokerlogs"></a>
<a id="tocsbrokerlogs"></a>

```json
{
  "CloudWatchLogs": {
    "Enabled": {},
    "LogGroup": {}
  },
  "Firehose": {
    "DeliveryStream": {},
    "Enabled": {}
  },
  "S3": {
    "Bucket": {},
    "Enabled": {},
    "Prefix": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogs|object|false|none|none|
|Firehose|object|false|none|none|
|S3|object|false|none|none|

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_CreateClusterV2Response">CreateClusterV2Response</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterv2response"></a>
<a id="schema_CreateClusterV2Response"></a>
<a id="tocScreateclusterv2response"></a>
<a id="tocscreateclusterv2response"></a>

```json
{
  "ClusterArn": {},
  "ClusterName": {},
  "State": {},
  "ClusterType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterName|object|false|none|none|
|State|object|false|none|none|
|ClusterType|object|false|none|none|

<h2 id="tocS_BrokerNodeGroupInfo">BrokerNodeGroupInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrokernodegroupinfo"></a>
<a id="schema_BrokerNodeGroupInfo"></a>
<a id="tocSbrokernodegroupinfo"></a>
<a id="tocsbrokernodegroupinfo"></a>

```json
{
  "BrokerAZDistribution": {},
  "ClientSubnets": {},
  "InstanceType": {},
  "SecurityGroups": {},
  "StorageInfo": {
    "EbsStorageInfo": {
      "ProvisionedThroughput": {
        "Enabled": {},
        "VolumeThroughput": {}
      },
      "VolumeSize": {}
    }
  },
  "ConnectivityInfo": {
    "PublicAccess": {
      "Type": {}
    },
    "VpcConnectivity": {
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "Enabled": {}
        }
      }
    }
  },
  "ZoneIds": {}
}
```


            <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerAZDistribution|object|false|none|none|
|ClientSubnets|object|true|none|none|
|InstanceType|object|true|none|none|
|SecurityGroups|object|false|none|none|
|StorageInfo|object|false|none|none|
|ConnectivityInfo|object|false|none|none|
|ZoneIds|object|false|none|none|

<h2 id="tocS_ClientAuthentication">ClientAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemaclientauthentication"></a>
<a id="schema_ClientAuthentication"></a>
<a id="tocSclientauthentication"></a>
<a id="tocsclientauthentication"></a>

```json
{
  "Sasl": {
    "Scram": {
      "Enabled": {}
    },
    "Iam": {
      "Enabled": {}
    }
  },
  "Tls": {
    "CertificateAuthorityArnList": {},
    "Enabled": {}
  },
  "Unauthenticated": {
    "Enabled": {}
  }
}
```


            <p>Includes all client authentication information.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sasl|object|false|none|none|
|Tls|object|false|none|none|
|Unauthenticated|object|false|none|none|

<h2 id="tocS_ConfigurationInfo">ConfigurationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationinfo"></a>
<a id="schema_ConfigurationInfo"></a>
<a id="tocSconfigurationinfo"></a>
<a id="tocsconfigurationinfo"></a>

```json
{
  "Arn": {},
  "Revision": {}
}
```


            <p>Specifies the configuration to use for the brokers.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|Revision|object|true|none|none|

<h2 id="tocS_EncryptionInfo">EncryptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioninfo"></a>
<a id="schema_EncryptionInfo"></a>
<a id="tocSencryptioninfo"></a>
<a id="tocsencryptioninfo"></a>

```json
{
  "EncryptionAtRest": {
    "DataVolumeKMSKeyId": {}
  },
  "EncryptionInTransit": {
    "ClientBroker": {},
    "InCluster": {}
  }
}
```


            <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EncryptionAtRest|object|false|none|none|
|EncryptionInTransit|object|false|none|none|

<h2 id="tocS_EnhancedMonitoring">EnhancedMonitoring</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedmonitoring"></a>
<a id="schema_EnhancedMonitoring"></a>
<a id="tocSenhancedmonitoring"></a>
<a id="tocsenhancedmonitoring"></a>

```json
"DEFAULT"
```


            <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>

<h2 id="tocS_OpenMonitoringInfo">OpenMonitoringInfo</h2>
<!-- backwards compatibility -->
<a id="schemaopenmonitoringinfo"></a>
<a id="schema_OpenMonitoringInfo"></a>
<a id="tocSopenmonitoringinfo"></a>
<a id="tocsopenmonitoringinfo"></a>

```json
{
  "Prometheus": {
    "JmxExporter": {
      "EnabledInBroker": {}
    },
    "NodeExporter": {
      "EnabledInBroker": {}
    }
  }
}
```


            <p>JMX and Node monitoring for the MSK cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prometheus|object|true|none|none|

<h2 id="tocS___stringMin1Max128">__stringMin1Max128</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max128"></a>
<a id="schema___stringMin1Max128"></a>
<a id="tocS__stringmin1max128"></a>
<a id="tocs__stringmin1max128"></a>

```json
"string"
```

<h2 id="tocS_LoggingInfo">LoggingInfo</h2>
<!-- backwards compatibility -->
<a id="schemalogginginfo"></a>
<a id="schema_LoggingInfo"></a>
<a id="tocSlogginginfo"></a>
<a id="tocslogginginfo"></a>

```json
{
  "BrokerLogs": {
    "CloudWatchLogs": {
      "Enabled": {},
      "LogGroup": {}
    },
    "Firehose": {
      "DeliveryStream": {},
      "Enabled": {}
    },
    "S3": {
      "Bucket": {},
      "Enabled": {},
      "Prefix": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerLogs|object|true|none|none|

<h2 id="tocS___integerMin1Max15">__integerMin1Max15</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max15"></a>
<a id="schema___integerMin1Max15"></a>
<a id="tocS__integermin1max15"></a>
<a id="tocs__integermin1max15"></a>

```json
1
```

<h2 id="tocS_StorageMode">StorageMode</h2>
<!-- backwards compatibility -->
<a id="schemastoragemode"></a>
<a id="schema_StorageMode"></a>
<a id="tocSstoragemode"></a>
<a id="tocsstoragemode"></a>

```json
"LOCAL"
```

Controls storage mode for various supported storage tiers.

<h2 id="tocS___listOfVpcConfig">__listOfVpcConfig</h2>
<!-- backwards compatibility -->
<a id="schema__listofvpcconfig"></a>
<a id="schema___listOfVpcConfig"></a>
<a id="tocS__listofvpcconfig"></a>
<a id="tocs__listofvpcconfig"></a>

```json
[
  {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
]
```

<h2 id="tocS_ServerlessClientAuthentication">ServerlessClientAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemaserverlessclientauthentication"></a>
<a id="schema_ServerlessClientAuthentication"></a>
<a id="tocSserverlessclientauthentication"></a>
<a id="tocsserverlessclientauthentication"></a>

```json
{
  "Sasl": {
    "Iam": {
      "Enabled": {}
    }
  }
}
```


            <p>Includes all client authentication information.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sasl|object|false|none|none|

<h2 id="tocS_CreateConfigurationResponse">CreateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationresponse"></a>
<a id="schema_CreateConfigurationResponse"></a>
<a id="tocScreateconfigurationresponse"></a>
<a id="tocscreateconfigurationresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|LatestRevision|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_CreateVpcConnectionResponse">CreateVpcConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcconnectionresponse"></a>
<a id="schema_CreateVpcConnectionResponse"></a>
<a id="tocScreatevpcconnectionresponse"></a>
<a id="tocscreatevpcconnectionresponse"></a>

```json
{
  "VpcConnectionArn": {},
  "State": {},
  "Authentication": {},
  "VpcId": {},
  "ClientSubnets": {},
  "SecurityGroups": {},
  "CreationTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|false|none|none|
|State|object|false|none|none|
|Authentication|object|false|none|none|
|VpcId|object|false|none|none|
|ClientSubnets|object|false|none|none|
|SecurityGroups|object|false|none|none|
|CreationTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteClusterResponse">DeleteClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterresponse"></a>
<a id="schema_DeleteClusterResponse"></a>
<a id="tocSdeleteclusterresponse"></a>
<a id="tocsdeleteclusterresponse"></a>

```json
{
  "ClusterArn": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DeleteClusterPolicyResponse">DeleteClusterPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterpolicyresponse"></a>
<a id="schema_DeleteClusterPolicyResponse"></a>
<a id="tocSdeleteclusterpolicyresponse"></a>
<a id="tocsdeleteclusterpolicyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteConfigurationResponse">DeleteConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationresponse"></a>
<a id="schema_DeleteConfigurationResponse"></a>
<a id="tocSdeleteconfigurationresponse"></a>
<a id="tocsdeleteconfigurationresponse"></a>

```json
{
  "Arn": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DeleteVpcConnectionResponse">DeleteVpcConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcconnectionresponse"></a>
<a id="schema_DeleteVpcConnectionResponse"></a>
<a id="tocSdeletevpcconnectionresponse"></a>
<a id="tocsdeletevpcconnectionresponse"></a>

```json
{
  "VpcConnectionArn": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DescribeClusterResponse">DescribeClusterResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterresponse"></a>
<a id="schema_DescribeClusterResponse"></a>
<a id="tocSdescribeclusterresponse"></a>
<a id="tocsdescribeclusterresponse"></a>

```json
{
  "ClusterInfo": {
    "ActiveOperationArn": {},
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentBrokerSoftwareInfo": {
      "ConfigurationArn": {},
      "ConfigurationRevision": {},
      "KafkaVersion": {}
    },
    "CurrentVersion": {},
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ZookeeperConnectString": {},
    "ZookeeperConnectStringTls": {},
    "StorageMode": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterInfo|object|false|none|none|

<h2 id="tocS_DescribeClusterV2Response">DescribeClusterV2Response</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterv2response"></a>
<a id="schema_DescribeClusterV2Response"></a>
<a id="tocSdescribeclusterv2response"></a>
<a id="tocsdescribeclusterv2response"></a>

```json
{
  "ClusterInfo": {
    "ActiveOperationArn": {},
    "ClusterType": {},
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentVersion": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Provisioned": {
      "BrokerNodeGroupInfo": {
        "BrokerAZDistribution": {},
        "ClientSubnets": {},
        "InstanceType": {},
        "SecurityGroups": {},
        "StorageInfo": {
          "EbsStorageInfo": {
            "ProvisionedThroughput": {
              "Enabled": {},
              "VolumeThroughput": {}
            },
            "VolumeSize": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "ZoneIds": {}
      },
      "CurrentBrokerSoftwareInfo": {
        "ConfigurationArn": {},
        "ConfigurationRevision": {},
        "KafkaVersion": {}
      },
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "NumberOfBrokerNodes": {},
      "ZookeeperConnectString": {},
      "ZookeeperConnectStringTls": {},
      "StorageMode": {}
    },
    "Serverless": {
      "VpcConfigs": {},
      "ClientAuthentication": {
        "Sasl": {
          "Iam": {
            "Enabled": {}
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
|ClusterInfo|object|false|none|none|

<h2 id="tocS_DescribeClusterOperationResponse">DescribeClusterOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusteroperationresponse"></a>
<a id="schema_DescribeClusterOperationResponse"></a>
<a id="tocSdescribeclusteroperationresponse"></a>
<a id="tocsdescribeclusteroperationresponse"></a>

```json
{
  "ClusterOperationInfo": {
    "ClientRequestId": {},
    "ClusterArn": {},
    "CreationTime": {},
    "EndTime": {},
    "ErrorInfo": {
      "ErrorCode": {},
      "ErrorString": {}
    },
    "OperationArn": {},
    "OperationState": {},
    "OperationSteps": {},
    "OperationType": {},
    "SourceClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "TargetClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "VpcConnectionInfo": {
      "VpcConnectionArn": {},
      "Owner": {},
      "UserIdentity": {
        "Type": {},
        "PrincipalId": {}
      },
      "CreationTime": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterOperationInfo|object|false|none|none|

<h2 id="tocS_DescribeClusterOperationV2Response">DescribeClusterOperationV2Response</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusteroperationv2response"></a>
<a id="schema_DescribeClusterOperationV2Response"></a>
<a id="tocSdescribeclusteroperationv2response"></a>
<a id="tocsdescribeclusteroperationv2response"></a>

```json
{
  "ClusterOperationInfo": {
    "ClusterArn": {},
    "ClusterType": {},
    "StartTime": {},
    "EndTime": {},
    "ErrorInfo": {
      "ErrorCode": {},
      "ErrorString": {}
    },
    "OperationArn": {},
    "OperationState": {},
    "OperationType": {},
    "Provisioned": {
      "OperationSteps": {},
      "SourceClusterInfo": {
        "BrokerEBSVolumeInfo": {},
        "ConfigurationInfo": {
          "Arn": {},
          "Revision": {}
        },
        "NumberOfBrokerNodes": {},
        "EnhancedMonitoring": {},
        "OpenMonitoring": {
          "Prometheus": {
            "JmxExporter": {
              "EnabledInBroker": {}
            },
            "NodeExporter": {
              "EnabledInBroker": {}
            }
          }
        },
        "KafkaVersion": {},
        "LoggingInfo": {
          "BrokerLogs": {
            "CloudWatchLogs": {
              "Enabled": {},
              "LogGroup": {}
            },
            "Firehose": {
              "DeliveryStream": {},
              "Enabled": {}
            },
            "S3": {
              "Bucket": {},
              "Enabled": {},
              "Prefix": {}
            }
          }
        },
        "InstanceType": {},
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "CertificateAuthorityArnList": {},
            "Enabled": {}
          },
          "Unauthenticated": {
            "Enabled": {}
          }
        },
        "EncryptionInfo": {
          "EncryptionAtRest": {
            "DataVolumeKMSKeyId": {}
          },
          "EncryptionInTransit": {
            "ClientBroker": {},
            "InCluster": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "StorageMode": {}
      },
      "TargetClusterInfo": {
        "BrokerEBSVolumeInfo": {},
        "ConfigurationInfo": {
          "Arn": {},
          "Revision": {}
        },
        "NumberOfBrokerNodes": {},
        "EnhancedMonitoring": {},
        "OpenMonitoring": {
          "Prometheus": {
            "JmxExporter": {
              "EnabledInBroker": {}
            },
            "NodeExporter": {
              "EnabledInBroker": {}
            }
          }
        },
        "KafkaVersion": {},
        "LoggingInfo": {
          "BrokerLogs": {
            "CloudWatchLogs": {
              "Enabled": {},
              "LogGroup": {}
            },
            "Firehose": {
              "DeliveryStream": {},
              "Enabled": {}
            },
            "S3": {
              "Bucket": {},
              "Enabled": {},
              "Prefix": {}
            }
          }
        },
        "InstanceType": {},
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "CertificateAuthorityArnList": {},
            "Enabled": {}
          },
          "Unauthenticated": {
            "Enabled": {}
          }
        },
        "EncryptionInfo": {
          "EncryptionAtRest": {
            "DataVolumeKMSKeyId": {}
          },
          "EncryptionInTransit": {
            "ClientBroker": {},
            "InCluster": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "StorageMode": {}
      },
      "VpcConnectionInfo": {
        "VpcConnectionArn": {},
        "Owner": {},
        "UserIdentity": {
          "Type": {},
          "PrincipalId": {}
        },
        "CreationTime": {}
      }
    },
    "Serverless": {
      "VpcConnectionInfo": {
        "CreationTime": {},
        "Owner": {},
        "UserIdentity": {
          "Type": {},
          "PrincipalId": {}
        },
        "VpcConnectionArn": {}
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterOperationInfo|object|false|none|none|

<h2 id="tocS_DescribeConfigurationResponse">DescribeConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationresponse"></a>
<a id="schema_DescribeConfigurationResponse"></a>
<a id="tocSdescribeconfigurationresponse"></a>
<a id="tocsdescribeconfigurationresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "Description": {},
  "KafkaVersions": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "State": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|KafkaVersions|object|false|none|none|
|LatestRevision|object|false|none|none|
|Name|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_DescribeConfigurationRevisionResponse">DescribeConfigurationRevisionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrevisionresponse"></a>
<a id="schema_DescribeConfigurationRevisionResponse"></a>
<a id="tocSdescribeconfigurationrevisionresponse"></a>
<a id="tocsdescribeconfigurationrevisionresponse"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "Description": {},
  "Revision": {},
  "ServerProperties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|CreationTime|object|false|none|none|
|Description|object|false|none|none|
|Revision|object|false|none|none|
|ServerProperties|object|false|none|none|

<h2 id="tocS_DescribeVpcConnectionResponse">DescribeVpcConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcconnectionresponse"></a>
<a id="schema_DescribeVpcConnectionResponse"></a>
<a id="tocSdescribevpcconnectionresponse"></a>
<a id="tocsdescribevpcconnectionresponse"></a>

```json
{
  "VpcConnectionArn": {},
  "TargetClusterArn": {},
  "State": {},
  "Authentication": {},
  "VpcId": {},
  "Subnets": {},
  "SecurityGroups": {},
  "CreationTime": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|false|none|none|
|TargetClusterArn|object|false|none|none|
|State|object|false|none|none|
|Authentication|object|false|none|none|
|VpcId|object|false|none|none|
|Subnets|object|false|none|none|
|SecurityGroups|object|false|none|none|
|CreationTime|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_BatchDisassociateScramSecretResponse">BatchDisassociateScramSecretResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociatescramsecretresponse"></a>
<a id="schema_BatchDisassociateScramSecretResponse"></a>
<a id="tocSbatchdisassociatescramsecretresponse"></a>
<a id="tocsbatchdisassociatescramsecretresponse"></a>

```json
{
  "ClusterArn": {},
  "UnprocessedScramSecrets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|UnprocessedScramSecrets|object|false|none|none|

<h2 id="tocS_GetBootstrapBrokersResponse">GetBootstrapBrokersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbootstrapbrokersresponse"></a>
<a id="schema_GetBootstrapBrokersResponse"></a>
<a id="tocSgetbootstrapbrokersresponse"></a>
<a id="tocsgetbootstrapbrokersresponse"></a>

```json
{
  "BootstrapBrokerString": {},
  "BootstrapBrokerStringTls": {},
  "BootstrapBrokerStringSaslScram": {},
  "BootstrapBrokerStringSaslIam": {},
  "BootstrapBrokerStringPublicTls": {},
  "BootstrapBrokerStringPublicSaslScram": {},
  "BootstrapBrokerStringPublicSaslIam": {},
  "BootstrapBrokerStringVpcConnectivityTls": {},
  "BootstrapBrokerStringVpcConnectivitySaslScram": {},
  "BootstrapBrokerStringVpcConnectivitySaslIam": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BootstrapBrokerString|object|false|none|none|
|BootstrapBrokerStringTls|object|false|none|none|
|BootstrapBrokerStringSaslScram|object|false|none|none|
|BootstrapBrokerStringSaslIam|object|false|none|none|
|BootstrapBrokerStringPublicTls|object|false|none|none|
|BootstrapBrokerStringPublicSaslScram|object|false|none|none|
|BootstrapBrokerStringPublicSaslIam|object|false|none|none|
|BootstrapBrokerStringVpcConnectivityTls|object|false|none|none|
|BootstrapBrokerStringVpcConnectivitySaslScram|object|false|none|none|
|BootstrapBrokerStringVpcConnectivitySaslIam|object|false|none|none|

<h2 id="tocS_GetCompatibleKafkaVersionsResponse">GetCompatibleKafkaVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompatiblekafkaversionsresponse"></a>
<a id="schema_GetCompatibleKafkaVersionsResponse"></a>
<a id="tocSgetcompatiblekafkaversionsresponse"></a>
<a id="tocsgetcompatiblekafkaversionsresponse"></a>

```json
{
  "CompatibleKafkaVersions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompatibleKafkaVersions|object|false|none|none|

<h2 id="tocS_GetClusterPolicyResponse">GetClusterPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetclusterpolicyresponse"></a>
<a id="schema_GetClusterPolicyResponse"></a>
<a id="tocSgetclusterpolicyresponse"></a>
<a id="tocsgetclusterpolicyresponse"></a>

```json
{
  "CurrentVersion": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|
|Policy|object|false|none|none|

<h2 id="tocS_ListClusterOperationsResponse">ListClusterOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclusteroperationsresponse"></a>
<a id="schema_ListClusterOperationsResponse"></a>
<a id="tocSlistclusteroperationsresponse"></a>
<a id="tocslistclusteroperationsresponse"></a>

```json
{
  "ClusterOperationInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterOperationInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClusterOperationsV2Response">ListClusterOperationsV2Response</h2>
<!-- backwards compatibility -->
<a id="schemalistclusteroperationsv2response"></a>
<a id="schema_ListClusterOperationsV2Response"></a>
<a id="tocSlistclusteroperationsv2response"></a>
<a id="tocslistclusteroperationsv2response"></a>

```json
{
  "ClusterOperationInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterOperationInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClustersResponse">ListClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersresponse"></a>
<a id="schema_ListClustersResponse"></a>
<a id="tocSlistclustersresponse"></a>
<a id="tocslistclustersresponse"></a>

```json
{
  "ClusterInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListClustersV2Response">ListClustersV2Response</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersv2response"></a>
<a id="schema_ListClustersV2Response"></a>
<a id="tocSlistclustersv2response"></a>
<a id="tocslistclustersv2response"></a>

```json
{
  "ClusterInfoList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterInfoList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConfigurationRevisionsResponse">ListConfigurationRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationrevisionsresponse"></a>
<a id="schema_ListConfigurationRevisionsResponse"></a>
<a id="tocSlistconfigurationrevisionsresponse"></a>
<a id="tocslistconfigurationrevisionsresponse"></a>

```json
{
  "NextToken": {},
  "Revisions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|Revisions|object|false|none|none|

<h2 id="tocS_ListConfigurationsResponse">ListConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsresponse"></a>
<a id="schema_ListConfigurationsResponse"></a>
<a id="tocSlistconfigurationsresponse"></a>
<a id="tocslistconfigurationsresponse"></a>

```json
{
  "Configurations": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configurations|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListKafkaVersionsResponse">ListKafkaVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkafkaversionsresponse"></a>
<a id="schema_ListKafkaVersionsResponse"></a>
<a id="tocSlistkafkaversionsresponse"></a>
<a id="tocslistkafkaversionsresponse"></a>

```json
{
  "KafkaVersions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KafkaVersions|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListNodesResponse">ListNodesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnodesresponse"></a>
<a id="schema_ListNodesResponse"></a>
<a id="tocSlistnodesresponse"></a>
<a id="tocslistnodesresponse"></a>

```json
{
  "NextToken": {},
  "NodeInfoList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|NodeInfoList|object|false|none|none|

<h2 id="tocS_ListScramSecretsResponse">ListScramSecretsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscramsecretsresponse"></a>
<a id="schema_ListScramSecretsResponse"></a>
<a id="tocSlistscramsecretsresponse"></a>
<a id="tocslistscramsecretsresponse"></a>

```json
{
  "NextToken": {},
  "SecretArnList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|SecretArnList|object|false|none|none|

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

<h2 id="tocS_ListClientVpcConnectionsResponse">ListClientVpcConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientvpcconnectionsresponse"></a>
<a id="schema_ListClientVpcConnectionsResponse"></a>
<a id="tocSlistclientvpcconnectionsresponse"></a>
<a id="tocslistclientvpcconnectionsresponse"></a>

```json
{
  "ClientVpcConnections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientVpcConnections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVpcConnectionsResponse">ListVpcConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcconnectionsresponse"></a>
<a id="schema_ListVpcConnectionsResponse"></a>
<a id="tocSlistvpcconnectionsresponse"></a>
<a id="tocslistvpcconnectionsresponse"></a>

```json
{
  "VpcConnections": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_RejectClientVpcConnectionResponse">RejectClientVpcConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectclientvpcconnectionresponse"></a>
<a id="schema_RejectClientVpcConnectionResponse"></a>
<a id="tocSrejectclientvpcconnectionresponse"></a>
<a id="tocsrejectclientvpcconnectionresponse"></a>

```json
{}
```

<h2 id="tocS_PutClusterPolicyResponse">PutClusterPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputclusterpolicyresponse"></a>
<a id="schema_PutClusterPolicyResponse"></a>
<a id="tocSputclusterpolicyresponse"></a>
<a id="tocsputclusterpolicyresponse"></a>

```json
{
  "CurrentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|

<h2 id="tocS_RebootBrokerResponse">RebootBrokerResponse</h2>
<!-- backwards compatibility -->
<a id="schemarebootbrokerresponse"></a>
<a id="schema_RebootBrokerResponse"></a>
<a id="tocSrebootbrokerresponse"></a>
<a id="tocsrebootbrokerresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateBrokerCountResponse">UpdateBrokerCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokercountresponse"></a>
<a id="schema_UpdateBrokerCountResponse"></a>
<a id="tocSupdatebrokercountresponse"></a>
<a id="tocsupdatebrokercountresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateBrokerTypeResponse">UpdateBrokerTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokertyperesponse"></a>
<a id="schema_UpdateBrokerTypeResponse"></a>
<a id="tocSupdatebrokertyperesponse"></a>
<a id="tocsupdatebrokertyperesponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateBrokerStorageResponse">UpdateBrokerStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokerstorageresponse"></a>
<a id="schema_UpdateBrokerStorageResponse"></a>
<a id="tocSupdatebrokerstorageresponse"></a>
<a id="tocsupdatebrokerstorageresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_BrokerEBSVolumeInfo">BrokerEBSVolumeInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrokerebsvolumeinfo"></a>
<a id="schema_BrokerEBSVolumeInfo"></a>
<a id="tocSbrokerebsvolumeinfo"></a>
<a id="tocsbrokerebsvolumeinfo"></a>

```json
{
  "KafkaBrokerNodeId": {},
  "ProvisionedThroughput": {
    "Enabled": {},
    "VolumeThroughput": {}
  },
  "VolumeSizeGB": {}
}
```


            <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KafkaBrokerNodeId|object|true|none|none|
|ProvisionedThroughput|object|false|none|none|
|VolumeSizeGB|object|false|none|none|

<h2 id="tocS_UpdateConfigurationResponse">UpdateConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationresponse"></a>
<a id="schema_UpdateConfigurationResponse"></a>
<a id="tocSupdateconfigurationresponse"></a>
<a id="tocsupdateconfigurationresponse"></a>

```json
{
  "Arn": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|false|none|none|
|LatestRevision|object|false|none|none|

<h2 id="tocS_UpdateConnectivityResponse">UpdateConnectivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityresponse"></a>
<a id="schema_UpdateConnectivityResponse"></a>
<a id="tocSupdateconnectivityresponse"></a>
<a id="tocsupdateconnectivityresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_PublicAccess">PublicAccess</h2>
<!-- backwards compatibility -->
<a id="schemapublicaccess"></a>
<a id="schema_PublicAccess"></a>
<a id="tocSpublicaccess"></a>
<a id="tocspublicaccess"></a>

```json
{
  "Type": {}
}
```

Public access control for brokers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|

<h2 id="tocS_VpcConnectivity">VpcConnectivity</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivity"></a>
<a id="schema_VpcConnectivity"></a>
<a id="tocSvpcconnectivity"></a>
<a id="tocsvpcconnectivity"></a>

```json
{
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "Enabled": {}
    }
  }
}
```

VPC connectivity access control for brokers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientAuthentication|object|false|none|none|

<h2 id="tocS_UpdateClusterConfigurationResponse">UpdateClusterConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterconfigurationresponse"></a>
<a id="schema_UpdateClusterConfigurationResponse"></a>
<a id="tocSupdateclusterconfigurationresponse"></a>
<a id="tocsupdateclusterconfigurationresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateClusterKafkaVersionResponse">UpdateClusterKafkaVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterkafkaversionresponse"></a>
<a id="schema_UpdateClusterKafkaVersionResponse"></a>
<a id="tocSupdateclusterkafkaversionresponse"></a>
<a id="tocsupdateclusterkafkaversionresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateMonitoringResponse">UpdateMonitoringResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemonitoringresponse"></a>
<a id="schema_UpdateMonitoringResponse"></a>
<a id="tocSupdatemonitoringresponse"></a>
<a id="tocsupdatemonitoringresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateSecurityResponse">UpdateSecurityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecurityresponse"></a>
<a id="schema_UpdateSecurityResponse"></a>
<a id="tocSupdatesecurityresponse"></a>
<a id="tocsupdatesecurityresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

<h2 id="tocS_UpdateStorageResponse">UpdateStorageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestorageresponse"></a>
<a id="schema_UpdateStorageResponse"></a>
<a id="tocSupdatestorageresponse"></a>
<a id="tocsupdatestorageresponse"></a>

```json
{
  "ClusterArn": {},
  "ClusterOperationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterOperationArn|object|false|none|none|

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

<h2 id="tocS_BatchAssociateScramSecretRequest">BatchAssociateScramSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchassociatescramsecretrequest"></a>
<a id="schema_BatchAssociateScramSecretRequest"></a>
<a id="tocSbatchassociatescramsecretrequest"></a>
<a id="tocsbatchassociatescramsecretrequest"></a>

```json
{
  "SecretArnList": {}
}
```


            <p>Associates sasl scram secrets to cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretArnList|object|true|none|none|

<h2 id="tocS___listOfUnprocessedScramSecret">__listOfUnprocessedScramSecret</h2>
<!-- backwards compatibility -->
<a id="schema__listofunprocessedscramsecret"></a>
<a id="schema___listOfUnprocessedScramSecret"></a>
<a id="tocS__listofunprocessedscramsecret"></a>
<a id="tocs__listofunprocessedscramsecret"></a>

```json
[
  {
    "ErrorCode": {},
    "ErrorMessage": {},
    "SecretArn": {}
  }
]
```

<h2 id="tocS_ProvisionedThroughput">ProvisionedThroughput</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedthroughput"></a>
<a id="schema_ProvisionedThroughput"></a>
<a id="tocSprovisionedthroughput"></a>
<a id="tocsprovisionedthroughput"></a>

```json
{
  "Enabled": {},
  "VolumeThroughput": {}
}
```


            <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|VolumeThroughput|object|false|none|none|

<h2 id="tocS_CloudWatchLogs">CloudWatchLogs</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogs"></a>
<a id="schema_CloudWatchLogs"></a>
<a id="tocScloudwatchlogs"></a>
<a id="tocscloudwatchlogs"></a>

```json
{
  "Enabled": {},
  "LogGroup": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|
|LogGroup|object|false|none|none|

<h2 id="tocS_Firehose">Firehose</h2>
<!-- backwards compatibility -->
<a id="schemafirehose"></a>
<a id="schema_Firehose"></a>
<a id="tocSfirehose"></a>
<a id="tocsfirehose"></a>

```json
{
  "DeliveryStream": {},
  "Enabled": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeliveryStream|object|false|none|none|
|Enabled|object|true|none|none|

<h2 id="tocS_S3">S3</h2>
<!-- backwards compatibility -->
<a id="schemas3"></a>
<a id="schema_S3"></a>
<a id="tocSs3"></a>
<a id="tocss3"></a>

```json
{
  "Bucket": {},
  "Enabled": {},
  "Prefix": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|Enabled|object|true|none|none|
|Prefix|object|false|none|none|

<h2 id="tocS___double">__double</h2>
<!-- backwards compatibility -->
<a id="schema__double"></a>
<a id="schema___double"></a>
<a id="tocS__double"></a>
<a id="tocs__double"></a>

```json
0
```

<h2 id="tocS_BrokerSoftwareInfo">BrokerSoftwareInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrokersoftwareinfo"></a>
<a id="schema_BrokerSoftwareInfo"></a>
<a id="tocSbrokersoftwareinfo"></a>
<a id="tocsbrokersoftwareinfo"></a>

```json
{
  "ConfigurationArn": {},
  "ConfigurationRevision": {},
  "KafkaVersion": {}
}
```


            <p>Information about the current software installed on the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationArn|object|false|none|none|
|ConfigurationRevision|object|false|none|none|
|KafkaVersion|object|false|none|none|

<h2 id="tocS_BrokerNodeInfo">BrokerNodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemabrokernodeinfo"></a>
<a id="schema_BrokerNodeInfo"></a>
<a id="tocSbrokernodeinfo"></a>
<a id="tocsbrokernodeinfo"></a>

```json
{
  "AttachedENIId": {},
  "BrokerId": {},
  "ClientSubnet": {},
  "ClientVpcIpAddress": {},
  "CurrentBrokerSoftwareInfo": {
    "ConfigurationArn": {},
    "ConfigurationRevision": {},
    "KafkaVersion": {}
  },
  "Endpoints": {}
}
```


            <p>BrokerNodeInfo</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedENIId|object|false|none|none|
|BrokerId|object|false|none|none|
|ClientSubnet|object|false|none|none|
|ClientVpcIpAddress|object|false|none|none|
|CurrentBrokerSoftwareInfo|object|false|none|none|
|Endpoints|object|false|none|none|

<h2 id="tocS_VpcConnectivitySasl">VpcConnectivitySasl</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivitysasl"></a>
<a id="schema_VpcConnectivitySasl"></a>
<a id="tocSvpcconnectivitysasl"></a>
<a id="tocsvpcconnectivitysasl"></a>

```json
{
  "Scram": {
    "Enabled": {}
  },
  "Iam": {
    "Enabled": {}
  }
}
```


            <p>Details for SASL client authentication for VPC connectivity.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scram|object|false|none|none|
|Iam|object|false|none|none|

<h2 id="tocS_VpcConnectivityTls">VpcConnectivityTls</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivitytls"></a>
<a id="schema_VpcConnectivityTls"></a>
<a id="tocSvpcconnectivitytls"></a>
<a id="tocsvpcconnectivitytls"></a>

```json
{
  "Enabled": {}
}
```


            <p>Details for TLS client authentication for VPC connectivity.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_VpcConnectivityClientAuthentication">VpcConnectivityClientAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivityclientauthentication"></a>
<a id="schema_VpcConnectivityClientAuthentication"></a>
<a id="tocSvpcconnectivityclientauthentication"></a>
<a id="tocsvpcconnectivityclientauthentication"></a>

```json
{
  "Sasl": {
    "Scram": {
      "Enabled": {}
    },
    "Iam": {
      "Enabled": {}
    }
  },
  "Tls": {
    "Enabled": {}
  }
}
```


            <p>Includes all client authentication information for VPC connectivity.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sasl|object|false|none|none|
|Tls|object|false|none|none|

<h2 id="tocS_ServerlessSasl">ServerlessSasl</h2>
<!-- backwards compatibility -->
<a id="schemaserverlesssasl"></a>
<a id="schema_ServerlessSasl"></a>
<a id="tocSserverlesssasl"></a>
<a id="tocsserverlesssasl"></a>

```json
{
  "Iam": {
    "Enabled": {}
  }
}
```


            <p>Details for client authentication using SASL.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Iam|object|false|none|none|

<h2 id="tocS_ClientBroker">ClientBroker</h2>
<!-- backwards compatibility -->
<a id="schemaclientbroker"></a>
<a id="schema_ClientBroker"></a>
<a id="tocSclientbroker"></a>
<a id="tocsclientbroker"></a>

```json
"TLS"
```


            <p>Client-broker encryption in transit setting.</p>

<h2 id="tocS___timestampIso8601">__timestampIso8601</h2>
<!-- backwards compatibility -->
<a id="schema__timestampiso8601"></a>
<a id="schema___timestampIso8601"></a>
<a id="tocS__timestampiso8601"></a>
<a id="tocs__timestampiso8601"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_OpenMonitoring">OpenMonitoring</h2>
<!-- backwards compatibility -->
<a id="schemaopenmonitoring"></a>
<a id="schema_OpenMonitoring"></a>
<a id="tocSopenmonitoring"></a>
<a id="tocsopenmonitoring"></a>

```json
{
  "Prometheus": {
    "JmxExporter": {
      "EnabledInBroker": {}
    },
    "NodeExporter": {
      "EnabledInBroker": {}
    }
  }
}
```


            <p>JMX and Node monitoring for the MSK cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Prometheus|object|true|none|none|

<h2 id="tocS_ClusterState">ClusterState</h2>
<!-- backwards compatibility -->
<a id="schemaclusterstate"></a>
<a id="schema_ClusterState"></a>
<a id="tocSclusterstate"></a>
<a id="tocsclusterstate"></a>

```json
"ACTIVE"
```


            <p>The state of the Apache Kafka cluster.</p>

<h2 id="tocS_StateInfo">StateInfo</h2>
<!-- backwards compatibility -->
<a id="schemastateinfo"></a>
<a id="schema_StateInfo"></a>
<a id="tocSstateinfo"></a>
<a id="tocsstateinfo"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

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

<h2 id="tocS_ClusterInfo">ClusterInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclusterinfo"></a>
<a id="schema_ClusterInfo"></a>
<a id="tocSclusterinfo"></a>
<a id="tocsclusterinfo"></a>

```json
{
  "ActiveOperationArn": {},
  "BrokerNodeGroupInfo": {
    "BrokerAZDistribution": {},
    "ClientSubnets": {},
    "InstanceType": {},
    "SecurityGroups": {},
    "StorageInfo": {
      "EbsStorageInfo": {
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSize": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "ZoneIds": {}
  },
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "ClusterArn": {},
  "ClusterName": {},
  "CreationTime": {},
  "CurrentBrokerSoftwareInfo": {
    "ConfigurationArn": {},
    "ConfigurationRevision": {},
    "KafkaVersion": {}
  },
  "CurrentVersion": {},
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "NumberOfBrokerNodes": {},
  "State": {},
  "StateInfo": {
    "Code": {},
    "Message": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "ZookeeperConnectString": {},
  "ZookeeperConnectStringTls": {},
  "StorageMode": {}
}
```


            <p>Returns information about a cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveOperationArn|object|false|none|none|
|BrokerNodeGroupInfo|object|false|none|none|
|ClientAuthentication|object|false|none|none|
|ClusterArn|object|false|none|none|
|ClusterName|object|false|none|none|
|CreationTime|object|false|none|none|
|CurrentBrokerSoftwareInfo|object|false|none|none|
|CurrentVersion|object|false|none|none|
|EncryptionInfo|object|false|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|LoggingInfo|object|false|none|none|
|NumberOfBrokerNodes|object|false|none|none|
|State|object|false|none|none|
|StateInfo|object|false|none|none|
|Tags|object|false|none|none|
|ZookeeperConnectString|object|false|none|none|
|ZookeeperConnectStringTls|object|false|none|none|
|StorageMode|object|false|none|none|

<h2 id="tocS_ClusterType">ClusterType</h2>
<!-- backwards compatibility -->
<a id="schemaclustertype"></a>
<a id="schema_ClusterType"></a>
<a id="tocSclustertype"></a>
<a id="tocsclustertype"></a>

```json
"PROVISIONED"
```


            <p>The type of cluster.</p>

<h2 id="tocS_Provisioned">Provisioned</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioned"></a>
<a id="schema_Provisioned"></a>
<a id="tocSprovisioned"></a>
<a id="tocsprovisioned"></a>

```json
{
  "BrokerNodeGroupInfo": {
    "BrokerAZDistribution": {},
    "ClientSubnets": {},
    "InstanceType": {},
    "SecurityGroups": {},
    "StorageInfo": {
      "EbsStorageInfo": {
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSize": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "ZoneIds": {}
  },
  "CurrentBrokerSoftwareInfo": {
    "ConfigurationArn": {},
    "ConfigurationRevision": {},
    "KafkaVersion": {}
  },
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "NumberOfBrokerNodes": {},
  "ZookeeperConnectString": {},
  "ZookeeperConnectStringTls": {},
  "StorageMode": {}
}
```


            <p>Provisioned cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerNodeGroupInfo|object|true|none|none|
|CurrentBrokerSoftwareInfo|object|false|none|none|
|ClientAuthentication|object|false|none|none|
|EncryptionInfo|object|false|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|LoggingInfo|object|false|none|none|
|NumberOfBrokerNodes|object|true|none|none|
|ZookeeperConnectString|object|false|none|none|
|ZookeeperConnectStringTls|object|false|none|none|
|StorageMode|object|false|none|none|

<h2 id="tocS_Serverless">Serverless</h2>
<!-- backwards compatibility -->
<a id="schemaserverless"></a>
<a id="schema_Serverless"></a>
<a id="tocSserverless"></a>
<a id="tocsserverless"></a>

```json
{
  "VpcConfigs": {},
  "ClientAuthentication": {
    "Sasl": {
      "Iam": {
        "Enabled": {}
      }
    }
  }
}
```


            <p>Serverless cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConfigs|object|true|none|none|
|ClientAuthentication|object|false|none|none|

<h2 id="tocS_Cluster">Cluster</h2>
<!-- backwards compatibility -->
<a id="schemacluster"></a>
<a id="schema_Cluster"></a>
<a id="tocScluster"></a>
<a id="tocscluster"></a>

```json
{
  "ActiveOperationArn": {},
  "ClusterType": {},
  "ClusterArn": {},
  "ClusterName": {},
  "CreationTime": {},
  "CurrentVersion": {},
  "State": {},
  "StateInfo": {
    "Code": {},
    "Message": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Provisioned": {
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "CurrentBrokerSoftwareInfo": {
      "ConfigurationArn": {},
      "ConfigurationRevision": {},
      "KafkaVersion": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "ZookeeperConnectString": {},
    "ZookeeperConnectStringTls": {},
    "StorageMode": {}
  },
  "Serverless": {
    "VpcConfigs": {},
    "ClientAuthentication": {
      "Sasl": {
        "Iam": {
          "Enabled": {}
        }
      }
    }
  }
}
```


            <p>Returns information about a cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveOperationArn|object|false|none|none|
|ClusterType|object|false|none|none|
|ClusterArn|object|false|none|none|
|ClusterName|object|false|none|none|
|CreationTime|object|false|none|none|
|CurrentVersion|object|false|none|none|
|State|object|false|none|none|
|StateInfo|object|false|none|none|
|Tags|object|false|none|none|
|Provisioned|object|false|none|none|
|Serverless|object|false|none|none|

<h2 id="tocS_ErrorInfo">ErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinfo"></a>
<a id="schema_ErrorInfo"></a>
<a id="tocSerrorinfo"></a>
<a id="tocserrorinfo"></a>

```json
{
  "ErrorCode": {},
  "ErrorString": {}
}
```


            <p>Returns information about an error state of the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorString|object|false|none|none|

<h2 id="tocS___listOfClusterOperationStep">__listOfClusterOperationStep</h2>
<!-- backwards compatibility -->
<a id="schema__listofclusteroperationstep"></a>
<a id="schema___listOfClusterOperationStep"></a>
<a id="tocS__listofclusteroperationstep"></a>
<a id="tocs__listofclusteroperationstep"></a>

```json
[
  {
    "StepInfo": {
      "StepStatus": {}
    },
    "StepName": {}
  }
]
```

<h2 id="tocS_MutableClusterInfo">MutableClusterInfo</h2>
<!-- backwards compatibility -->
<a id="schemamutableclusterinfo"></a>
<a id="schema_MutableClusterInfo"></a>
<a id="tocSmutableclusterinfo"></a>
<a id="tocsmutableclusterinfo"></a>

```json
{
  "BrokerEBSVolumeInfo": {},
  "ConfigurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "NumberOfBrokerNodes": {},
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "KafkaVersion": {},
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "InstanceType": {},
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "ConnectivityInfo": {
    "PublicAccess": {
      "Type": {}
    },
    "VpcConnectivity": {
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "Enabled": {}
        }
      }
    }
  },
  "StorageMode": {}
}
```


            <p>Information about cluster attributes that can be updated via update APIs.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerEBSVolumeInfo|object|false|none|none|
|ConfigurationInfo|object|false|none|none|
|NumberOfBrokerNodes|object|false|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|KafkaVersion|object|false|none|none|
|LoggingInfo|object|false|none|none|
|InstanceType|object|false|none|none|
|ClientAuthentication|object|false|none|none|
|EncryptionInfo|object|false|none|none|
|ConnectivityInfo|object|false|none|none|
|StorageMode|object|false|none|none|

<h2 id="tocS_VpcConnectionInfo">VpcConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectioninfo"></a>
<a id="schema_VpcConnectionInfo"></a>
<a id="tocSvpcconnectioninfo"></a>
<a id="tocsvpcconnectioninfo"></a>

```json
{
  "VpcConnectionArn": {},
  "Owner": {},
  "UserIdentity": {
    "Type": {},
    "PrincipalId": {}
  },
  "CreationTime": {}
}
```


            <p>Description of the VPC connection.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|false|none|none|
|Owner|object|false|none|none|
|UserIdentity|object|false|none|none|
|CreationTime|object|false|none|none|

<h2 id="tocS_ClusterOperationInfo">ClusterOperationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationinfo"></a>
<a id="schema_ClusterOperationInfo"></a>
<a id="tocSclusteroperationinfo"></a>
<a id="tocsclusteroperationinfo"></a>

```json
{
  "ClientRequestId": {},
  "ClusterArn": {},
  "CreationTime": {},
  "EndTime": {},
  "ErrorInfo": {
    "ErrorCode": {},
    "ErrorString": {}
  },
  "OperationArn": {},
  "OperationState": {},
  "OperationSteps": {},
  "OperationType": {},
  "SourceClusterInfo": {
    "BrokerEBSVolumeInfo": {},
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "NumberOfBrokerNodes": {},
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "InstanceType": {},
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "StorageMode": {}
  },
  "TargetClusterInfo": {
    "BrokerEBSVolumeInfo": {},
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "NumberOfBrokerNodes": {},
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "InstanceType": {},
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "StorageMode": {}
  },
  "VpcConnectionInfo": {
    "VpcConnectionArn": {},
    "Owner": {},
    "UserIdentity": {
      "Type": {},
      "PrincipalId": {}
    },
    "CreationTime": {}
  }
}
```


            <p>Returns information about a cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientRequestId|object|false|none|none|
|ClusterArn|object|false|none|none|
|CreationTime|object|false|none|none|
|EndTime|object|false|none|none|
|ErrorInfo|object|false|none|none|
|OperationArn|object|false|none|none|
|OperationState|object|false|none|none|
|OperationSteps|object|false|none|none|
|OperationType|object|false|none|none|
|SourceClusterInfo|object|false|none|none|
|TargetClusterInfo|object|false|none|none|
|VpcConnectionInfo|object|false|none|none|

<h2 id="tocS_ClusterOperationStepInfo">ClusterOperationStepInfo</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationstepinfo"></a>
<a id="schema_ClusterOperationStepInfo"></a>
<a id="tocSclusteroperationstepinfo"></a>
<a id="tocsclusteroperationstepinfo"></a>

```json
{
  "StepStatus": {}
}
```


            <p>State information about the operation step.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepStatus|object|false|none|none|

<h2 id="tocS_ClusterOperationStep">ClusterOperationStep</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationstep"></a>
<a id="schema_ClusterOperationStep"></a>
<a id="tocSclusteroperationstep"></a>
<a id="tocsclusteroperationstep"></a>

```json
{
  "StepInfo": {
    "StepStatus": {}
  },
  "StepName": {}
}
```


            <p>Step taken during a cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StepInfo|object|false|none|none|
|StepName|object|false|none|none|

<h2 id="tocS_ProvisionedRequest">ProvisionedRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovisionedrequest"></a>
<a id="schema_ProvisionedRequest"></a>
<a id="tocSprovisionedrequest"></a>
<a id="tocsprovisionedrequest"></a>

```json
{
  "BrokerNodeGroupInfo": {
    "BrokerAZDistribution": {},
    "ClientSubnets": {},
    "InstanceType": {},
    "SecurityGroups": {},
    "StorageInfo": {
      "EbsStorageInfo": {
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSize": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "ZoneIds": {}
  },
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "ConfigurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "KafkaVersion": {},
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "NumberOfBrokerNodes": {},
  "StorageMode": {}
}
```


            <p>Provisioned cluster request.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerNodeGroupInfo|object|true|none|none|
|ClientAuthentication|object|false|none|none|
|ConfigurationInfo|object|false|none|none|
|EncryptionInfo|object|false|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|KafkaVersion|object|true|none|none|
|LoggingInfo|object|false|none|none|
|NumberOfBrokerNodes|object|true|none|none|
|StorageMode|object|false|none|none|

<h2 id="tocS_VpcConfig">VpcConfig</h2>
<!-- backwards compatibility -->
<a id="schemavpcconfig"></a>
<a id="schema_VpcConfig"></a>
<a id="tocSvpcconfig"></a>
<a id="tocsvpcconfig"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```


            <p>The configuration of the Amazon VPCs for the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|true|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_ServerlessRequest">ServerlessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaserverlessrequest"></a>
<a id="schema_ServerlessRequest"></a>
<a id="tocSserverlessrequest"></a>
<a id="tocsserverlessrequest"></a>

```json
{
  "VpcConfigs": {},
  "ClientAuthentication": {
    "Sasl": {
      "Iam": {
        "Enabled": {}
      }
    }
  }
}
```


            <p>Serverless cluster request.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConfigs|object|true|none|none|
|ClientAuthentication|object|false|none|none|

<h2 id="tocS_VpcConnectionState">VpcConnectionState</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectionstate"></a>
<a id="schema_VpcConnectionState"></a>
<a id="tocSvpcconnectionstate"></a>
<a id="tocsvpcconnectionstate"></a>

```json
"CREATING"
```


            <p>The state of a VPC connection.</p>

<h2 id="tocS_ClientVpcConnection">ClientVpcConnection</h2>
<!-- backwards compatibility -->
<a id="schemaclientvpcconnection"></a>
<a id="schema_ClientVpcConnection"></a>
<a id="tocSclientvpcconnection"></a>
<a id="tocsclientvpcconnection"></a>

```json
{
  "Authentication": {},
  "CreationTime": {},
  "State": {},
  "VpcConnectionArn": {},
  "Owner": {}
}
```


            <p>The client VPC connection object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Authentication|object|false|none|none|
|CreationTime|object|false|none|none|
|State|object|false|none|none|
|VpcConnectionArn|object|true|none|none|
|Owner|object|false|none|none|

<h2 id="tocS_VpcConnection">VpcConnection</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnection"></a>
<a id="schema_VpcConnection"></a>
<a id="tocSvpcconnection"></a>
<a id="tocsvpcconnection"></a>

```json
{
  "VpcConnectionArn": {},
  "TargetClusterArn": {},
  "CreationTime": {},
  "Authentication": {},
  "VpcId": {},
  "State": {}
}
```


            <p>The VPC connection object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|true|none|none|
|TargetClusterArn|object|true|none|none|
|CreationTime|object|false|none|none|
|Authentication|object|false|none|none|
|VpcId|object|false|none|none|
|State|object|false|none|none|

<h2 id="tocS_CompatibleKafkaVersion">CompatibleKafkaVersion</h2>
<!-- backwards compatibility -->
<a id="schemacompatiblekafkaversion"></a>
<a id="schema_CompatibleKafkaVersion"></a>
<a id="tocScompatiblekafkaversion"></a>
<a id="tocscompatiblekafkaversion"></a>

```json
{
  "SourceVersion": {},
  "TargetVersions": {}
}
```


            <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceVersion|object|false|none|none|
|TargetVersions|object|false|none|none|

<h2 id="tocS_ConfigurationRevision">ConfigurationRevision</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationrevision"></a>
<a id="schema_ConfigurationRevision"></a>
<a id="tocSconfigurationrevision"></a>
<a id="tocsconfigurationrevision"></a>

```json
{
  "CreationTime": {},
  "Description": {},
  "Revision": {}
}
```


            <p>Describes a configuration revision.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|object|true|none|none|
|Description|object|false|none|none|
|Revision|object|true|none|none|

<h2 id="tocS_ConfigurationState">ConfigurationState</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationstate"></a>
<a id="schema_ConfigurationState"></a>
<a id="tocSconfigurationstate"></a>
<a id="tocsconfigurationstate"></a>

```json
"ACTIVE"
```


            <p>The state of a configuration.</p>

<h2 id="tocS_Configuration">Configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_Configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "Arn": {},
  "CreationTime": {},
  "Description": {},
  "KafkaVersions": {},
  "LatestRevision": {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  },
  "Name": {},
  "State": {}
}
```


            <p>Represents an MSK Configuration.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arn|object|true|none|none|
|CreationTime|object|true|none|none|
|Description|object|true|none|none|
|KafkaVersions|object|true|none|none|
|LatestRevision|object|true|none|none|
|Name|object|true|none|none|
|State|object|true|none|none|

<h2 id="tocS___stringMin1Max64">__stringMin1Max64</h2>
<!-- backwards compatibility -->
<a id="schema__stringmin1max64"></a>
<a id="schema___stringMin1Max64"></a>
<a id="tocS__stringmin1max64"></a>
<a id="tocs__stringmin1max64"></a>

```json
"string"
```

<h2 id="tocS_CreateClusterV2Request">CreateClusterV2Request</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterv2request"></a>
<a id="schema_CreateClusterV2Request"></a>
<a id="tocScreateclusterv2request"></a>
<a id="tocscreateclusterv2request"></a>

```json
{
  "ClusterName": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "Provisioned": {
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "StorageMode": {}
  },
  "Serverless": {
    "VpcConfigs": {},
    "ClientAuthentication": {
      "Sasl": {
        "Iam": {
          "Enabled": {}
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterName|object|true|none|none|
|Tags|object|false|none|none|
|Provisioned|object|false|none|none|
|Serverless|object|false|none|none|

<h2 id="tocS_CreateClusterRequest">CreateClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateclusterrequest"></a>
<a id="schema_CreateClusterRequest"></a>
<a id="tocScreateclusterrequest"></a>
<a id="tocscreateclusterrequest"></a>

```json
{
  "BrokerNodeGroupInfo": {
    "BrokerAZDistribution": {},
    "ClientSubnets": {},
    "InstanceType": {},
    "SecurityGroups": {},
    "StorageInfo": {
      "EbsStorageInfo": {
        "ProvisionedThroughput": {
          "Enabled": {},
          "VolumeThroughput": {}
        },
        "VolumeSize": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "ZoneIds": {}
  },
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "ClusterName": {},
  "ConfigurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  },
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "KafkaVersion": {},
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  },
  "NumberOfBrokerNodes": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "StorageMode": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerNodeGroupInfo|object|true|none|none|
|ClientAuthentication|object|false|none|none|
|ClusterName|object|true|none|none|
|ConfigurationInfo|object|false|none|none|
|EncryptionInfo|object|false|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|KafkaVersion|object|true|none|none|
|LoggingInfo|object|false|none|none|
|NumberOfBrokerNodes|object|true|none|none|
|Tags|object|false|none|none|
|StorageMode|object|false|none|none|

<h2 id="tocS___blob">__blob</h2>
<!-- backwards compatibility -->
<a id="schema__blob"></a>
<a id="schema___blob"></a>
<a id="tocS__blob"></a>
<a id="tocs__blob"></a>

```json
"string"
```

<h2 id="tocS_CreateConfigurationRequest">CreateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigurationrequest"></a>
<a id="schema_CreateConfigurationRequest"></a>
<a id="tocScreateconfigurationrequest"></a>
<a id="tocscreateconfigurationrequest"></a>

```json
{
  "Description": {},
  "KafkaVersions": {},
  "Name": {},
  "ServerProperties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|KafkaVersions|object|false|none|none|
|Name|object|true|none|none|
|ServerProperties|object|true|none|none|

<h2 id="tocS_CreateVpcConnectionRequest">CreateVpcConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcconnectionrequest"></a>
<a id="schema_CreateVpcConnectionRequest"></a>
<a id="tocScreatevpcconnectionrequest"></a>
<a id="tocscreatevpcconnectionrequest"></a>

```json
{
  "TargetClusterArn": {},
  "Authentication": {},
  "VpcId": {},
  "ClientSubnets": {},
  "SecurityGroups": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TargetClusterArn|object|true|none|none|
|Authentication|object|true|none|none|
|VpcId|object|true|none|none|
|ClientSubnets|object|true|none|none|
|SecurityGroups|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ClusterOperationV2Provisioned">ClusterOperationV2Provisioned</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationv2provisioned"></a>
<a id="schema_ClusterOperationV2Provisioned"></a>
<a id="tocSclusteroperationv2provisioned"></a>
<a id="tocsclusteroperationv2provisioned"></a>

```json
{
  "OperationSteps": {},
  "SourceClusterInfo": {
    "BrokerEBSVolumeInfo": {},
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "NumberOfBrokerNodes": {},
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "InstanceType": {},
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "StorageMode": {}
  },
  "TargetClusterInfo": {
    "BrokerEBSVolumeInfo": {},
    "ConfigurationInfo": {
      "Arn": {},
      "Revision": {}
    },
    "NumberOfBrokerNodes": {},
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "KafkaVersion": {},
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "InstanceType": {},
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "ConnectivityInfo": {
      "PublicAccess": {
        "Type": {}
      },
      "VpcConnectivity": {
        "ClientAuthentication": {
          "Sasl": {
            "Scram": {
              "Enabled": {}
            },
            "Iam": {
              "Enabled": {}
            }
          },
          "Tls": {
            "Enabled": {}
          }
        }
      }
    },
    "StorageMode": {}
  },
  "VpcConnectionInfo": {
    "VpcConnectionArn": {},
    "Owner": {},
    "UserIdentity": {
      "Type": {},
      "PrincipalId": {}
    },
    "CreationTime": {}
  }
}
```


            <p>Returns information about a provisioned cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationSteps|object|false|none|none|
|SourceClusterInfo|object|false|none|none|
|TargetClusterInfo|object|false|none|none|
|VpcConnectionInfo|object|false|none|none|

<h2 id="tocS_ClusterOperationV2Serverless">ClusterOperationV2Serverless</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationv2serverless"></a>
<a id="schema_ClusterOperationV2Serverless"></a>
<a id="tocSclusteroperationv2serverless"></a>
<a id="tocsclusteroperationv2serverless"></a>

```json
{
  "VpcConnectionInfo": {
    "CreationTime": {},
    "Owner": {},
    "UserIdentity": {
      "Type": {},
      "PrincipalId": {}
    },
    "VpcConnectionArn": {}
  }
}
```


            <p>Returns information about a serverless cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionInfo|object|false|none|none|

<h2 id="tocS_ClusterOperationV2">ClusterOperationV2</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationv2"></a>
<a id="schema_ClusterOperationV2"></a>
<a id="tocSclusteroperationv2"></a>
<a id="tocsclusteroperationv2"></a>

```json
{
  "ClusterArn": {},
  "ClusterType": {},
  "StartTime": {},
  "EndTime": {},
  "ErrorInfo": {
    "ErrorCode": {},
    "ErrorString": {}
  },
  "OperationArn": {},
  "OperationState": {},
  "OperationType": {},
  "Provisioned": {
    "OperationSteps": {},
    "SourceClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "TargetClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "VpcConnectionInfo": {
      "VpcConnectionArn": {},
      "Owner": {},
      "UserIdentity": {
        "Type": {},
        "PrincipalId": {}
      },
      "CreationTime": {}
    }
  },
  "Serverless": {
    "VpcConnectionInfo": {
      "CreationTime": {},
      "Owner": {},
      "UserIdentity": {
        "Type": {},
        "PrincipalId": {}
      },
      "VpcConnectionArn": {}
    }
  }
}
```


            <p>Returns information about a cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|ErrorInfo|object|false|none|none|
|OperationArn|object|false|none|none|
|OperationState|object|false|none|none|
|OperationType|object|false|none|none|
|Provisioned|object|false|none|none|
|Serverless|object|false|none|none|

<h2 id="tocS_VpcConnectionInfoServerless">VpcConnectionInfoServerless</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectioninfoserverless"></a>
<a id="schema_VpcConnectionInfoServerless"></a>
<a id="tocSvpcconnectioninfoserverless"></a>
<a id="tocsvpcconnectioninfoserverless"></a>

```json
{
  "CreationTime": {},
  "Owner": {},
  "UserIdentity": {
    "Type": {},
    "PrincipalId": {}
  },
  "VpcConnectionArn": {}
}
```

Description of the VPC connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationTime|object|false|none|none|
|Owner|object|false|none|none|
|UserIdentity|object|false|none|none|
|VpcConnectionArn|object|false|none|none|

<h2 id="tocS_ClusterOperationV2Summary">ClusterOperationV2Summary</h2>
<!-- backwards compatibility -->
<a id="schemaclusteroperationv2summary"></a>
<a id="schema_ClusterOperationV2Summary"></a>
<a id="tocSclusteroperationv2summary"></a>
<a id="tocsclusteroperationv2summary"></a>

```json
{
  "ClusterArn": {},
  "ClusterType": {},
  "StartTime": {},
  "EndTime": {},
  "OperationArn": {},
  "OperationState": {},
  "OperationType": {}
}
```


            <p>Returns information about a cluster operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClusterArn|object|false|none|none|
|ClusterType|object|false|none|none|
|StartTime|object|false|none|none|
|EndTime|object|false|none|none|
|OperationArn|object|false|none|none|
|OperationState|object|false|none|none|
|OperationType|object|false|none|none|

<h2 id="tocS_DeleteClusterRequest">DeleteClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterrequest"></a>
<a id="schema_DeleteClusterRequest"></a>
<a id="tocSdeleteclusterrequest"></a>
<a id="tocsdeleteclusterrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteClusterPolicyRequest">DeleteClusterPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteclusterpolicyrequest"></a>
<a id="schema_DeleteClusterPolicyRequest"></a>
<a id="tocSdeleteclusterpolicyrequest"></a>
<a id="tocsdeleteclusterpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteConfigurationRequest">DeleteConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconfigurationrequest"></a>
<a id="schema_DeleteConfigurationRequest"></a>
<a id="tocSdeleteconfigurationrequest"></a>
<a id="tocsdeleteconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteVpcConnectionRequest">DeleteVpcConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcconnectionrequest"></a>
<a id="schema_DeleteVpcConnectionRequest"></a>
<a id="tocSdeletevpcconnectionrequest"></a>
<a id="tocsdeletevpcconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeClusterOperationRequest">DescribeClusterOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusteroperationrequest"></a>
<a id="schema_DescribeClusterOperationRequest"></a>
<a id="tocSdescribeclusteroperationrequest"></a>
<a id="tocsdescribeclusteroperationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeClusterOperationV2Request">DescribeClusterOperationV2Request</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusteroperationv2request"></a>
<a id="schema_DescribeClusterOperationV2Request"></a>
<a id="tocSdescribeclusteroperationv2request"></a>
<a id="tocsdescribeclusteroperationv2request"></a>

```json
{}
```

<h2 id="tocS_DescribeClusterRequest">DescribeClusterRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterrequest"></a>
<a id="schema_DescribeClusterRequest"></a>
<a id="tocSdescribeclusterrequest"></a>
<a id="tocsdescribeclusterrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeClusterV2Request">DescribeClusterV2Request</h2>
<!-- backwards compatibility -->
<a id="schemadescribeclusterv2request"></a>
<a id="schema_DescribeClusterV2Request"></a>
<a id="tocSdescribeclusterv2request"></a>
<a id="tocsdescribeclusterv2request"></a>

```json
{}
```

<h2 id="tocS_DescribeConfigurationRequest">DescribeConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrequest"></a>
<a id="schema_DescribeConfigurationRequest"></a>
<a id="tocSdescribeconfigurationrequest"></a>
<a id="tocsdescribeconfigurationrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeConfigurationRevisionRequest">DescribeConfigurationRevisionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconfigurationrevisionrequest"></a>
<a id="schema_DescribeConfigurationRevisionRequest"></a>
<a id="tocSdescribeconfigurationrevisionrequest"></a>
<a id="tocsdescribeconfigurationrevisionrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeVpcConnectionRequest">DescribeVpcConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcconnectionrequest"></a>
<a id="schema_DescribeVpcConnectionRequest"></a>
<a id="tocSdescribevpcconnectionrequest"></a>
<a id="tocsdescribevpcconnectionrequest"></a>

```json
{}
```

<h2 id="tocS_BatchDisassociateScramSecretRequest">BatchDisassociateScramSecretRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdisassociatescramsecretrequest"></a>
<a id="schema_BatchDisassociateScramSecretRequest"></a>
<a id="tocSbatchdisassociatescramsecretrequest"></a>
<a id="tocsbatchdisassociatescramsecretrequest"></a>

```json
{
  "SecretArnList": {}
}
```


            <p>Disassociates sasl scram secrets to cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SecretArnList|object|true|none|none|

<h2 id="tocS___integerMin1Max16384">__integerMin1Max16384</h2>
<!-- backwards compatibility -->
<a id="schema__integermin1max16384"></a>
<a id="schema___integerMin1Max16384"></a>
<a id="tocS__integermin1max16384"></a>
<a id="tocs__integermin1max16384"></a>

```json
1
```

<h2 id="tocS_EBSStorageInfo">EBSStorageInfo</h2>
<!-- backwards compatibility -->
<a id="schemaebsstorageinfo"></a>
<a id="schema_EBSStorageInfo"></a>
<a id="tocSebsstorageinfo"></a>
<a id="tocsebsstorageinfo"></a>

```json
{
  "ProvisionedThroughput": {
    "Enabled": {},
    "VolumeThroughput": {}
  },
  "VolumeSize": {}
}
```


            <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProvisionedThroughput|object|false|none|none|
|VolumeSize|object|false|none|none|

<h2 id="tocS_GetBootstrapBrokersRequest">GetBootstrapBrokersRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetbootstrapbrokersrequest"></a>
<a id="schema_GetBootstrapBrokersRequest"></a>
<a id="tocSgetbootstrapbrokersrequest"></a>
<a id="tocsgetbootstrapbrokersrequest"></a>

```json
{}
```

<h2 id="tocS_GetCompatibleKafkaVersionsRequest">GetCompatibleKafkaVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompatiblekafkaversionsrequest"></a>
<a id="schema_GetCompatibleKafkaVersionsRequest"></a>
<a id="tocSgetcompatiblekafkaversionsrequest"></a>
<a id="tocsgetcompatiblekafkaversionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfCompatibleKafkaVersion">__listOfCompatibleKafkaVersion</h2>
<!-- backwards compatibility -->
<a id="schema__listofcompatiblekafkaversion"></a>
<a id="schema___listOfCompatibleKafkaVersion"></a>
<a id="tocS__listofcompatiblekafkaversion"></a>
<a id="tocs__listofcompatiblekafkaversion"></a>

```json
[
  {
    "SourceVersion": {},
    "TargetVersions": {}
  }
]
```

<h2 id="tocS_GetClusterPolicyRequest">GetClusterPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetclusterpolicyrequest"></a>
<a id="schema_GetClusterPolicyRequest"></a>
<a id="tocSgetclusterpolicyrequest"></a>
<a id="tocsgetclusterpolicyrequest"></a>

```json
{}
```

<h2 id="tocS_KafkaVersionStatus">KafkaVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemakafkaversionstatus"></a>
<a id="schema_KafkaVersionStatus"></a>
<a id="tocSkafkaversionstatus"></a>
<a id="tocskafkaversionstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_KafkaVersion">KafkaVersion</h2>
<!-- backwards compatibility -->
<a id="schemakafkaversion"></a>
<a id="schema_KafkaVersion"></a>
<a id="tocSkafkaversion"></a>
<a id="tocskafkaversion"></a>

```json
{
  "Version": {},
  "Status": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Version|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_MaxResults">MaxResults</h2>
<!-- backwards compatibility -->
<a id="schemamaxresults"></a>
<a id="schema_MaxResults"></a>
<a id="tocSmaxresults"></a>
<a id="tocsmaxresults"></a>

```json
1
```

<h2 id="tocS_ListClusterOperationsRequest">ListClusterOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclusteroperationsrequest"></a>
<a id="schema_ListClusterOperationsRequest"></a>
<a id="tocSlistclusteroperationsrequest"></a>
<a id="tocslistclusteroperationsrequest"></a>

```json
{}
```

<h2 id="tocS_ListClusterOperationsV2Request">ListClusterOperationsV2Request</h2>
<!-- backwards compatibility -->
<a id="schemalistclusteroperationsv2request"></a>
<a id="schema_ListClusterOperationsV2Request"></a>
<a id="tocSlistclusteroperationsv2request"></a>
<a id="tocslistclusteroperationsv2request"></a>

```json
{}
```

<h2 id="tocS___listOfClusterOperationInfo">__listOfClusterOperationInfo</h2>
<!-- backwards compatibility -->
<a id="schema__listofclusteroperationinfo"></a>
<a id="schema___listOfClusterOperationInfo"></a>
<a id="tocS__listofclusteroperationinfo"></a>
<a id="tocs__listofclusteroperationinfo"></a>

```json
[
  {
    "ClientRequestId": {},
    "ClusterArn": {},
    "CreationTime": {},
    "EndTime": {},
    "ErrorInfo": {
      "ErrorCode": {},
      "ErrorString": {}
    },
    "OperationArn": {},
    "OperationState": {},
    "OperationSteps": {},
    "OperationType": {},
    "SourceClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "TargetClusterInfo": {
      "BrokerEBSVolumeInfo": {},
      "ConfigurationInfo": {
        "Arn": {},
        "Revision": {}
      },
      "NumberOfBrokerNodes": {},
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "KafkaVersion": {},
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "InstanceType": {},
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "StorageMode": {}
    },
    "VpcConnectionInfo": {
      "VpcConnectionArn": {},
      "Owner": {},
      "UserIdentity": {
        "Type": {},
        "PrincipalId": {}
      },
      "CreationTime": {}
    }
  }
]
```

<h2 id="tocS___listOfClusterOperationV2Summary">__listOfClusterOperationV2Summary</h2>
<!-- backwards compatibility -->
<a id="schema__listofclusteroperationv2summary"></a>
<a id="schema___listOfClusterOperationV2Summary"></a>
<a id="tocS__listofclusteroperationv2summary"></a>
<a id="tocs__listofclusteroperationv2summary"></a>

```json
[
  {
    "ClusterArn": {},
    "ClusterType": {},
    "StartTime": {},
    "EndTime": {},
    "OperationArn": {},
    "OperationState": {},
    "OperationType": {}
  }
]
```

<h2 id="tocS_ListClustersRequest">ListClustersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersrequest"></a>
<a id="schema_ListClustersRequest"></a>
<a id="tocSlistclustersrequest"></a>
<a id="tocslistclustersrequest"></a>

```json
{}
```

<h2 id="tocS_ListClustersV2Request">ListClustersV2Request</h2>
<!-- backwards compatibility -->
<a id="schemalistclustersv2request"></a>
<a id="schema_ListClustersV2Request"></a>
<a id="tocSlistclustersv2request"></a>
<a id="tocslistclustersv2request"></a>

```json
{}
```

<h2 id="tocS___listOfClusterInfo">__listOfClusterInfo</h2>
<!-- backwards compatibility -->
<a id="schema__listofclusterinfo"></a>
<a id="schema___listOfClusterInfo"></a>
<a id="tocS__listofclusterinfo"></a>
<a id="tocs__listofclusterinfo"></a>

```json
[
  {
    "ActiveOperationArn": {},
    "BrokerNodeGroupInfo": {
      "BrokerAZDistribution": {},
      "ClientSubnets": {},
      "InstanceType": {},
      "SecurityGroups": {},
      "StorageInfo": {
        "EbsStorageInfo": {
          "ProvisionedThroughput": {
            "Enabled": {},
            "VolumeThroughput": {}
          },
          "VolumeSize": {}
        }
      },
      "ConnectivityInfo": {
        "PublicAccess": {
          "Type": {}
        },
        "VpcConnectivity": {
          "ClientAuthentication": {
            "Sasl": {
              "Scram": {
                "Enabled": {}
              },
              "Iam": {
                "Enabled": {}
              }
            },
            "Tls": {
              "Enabled": {}
            }
          }
        }
      },
      "ZoneIds": {}
    },
    "ClientAuthentication": {
      "Sasl": {
        "Scram": {
          "Enabled": {}
        },
        "Iam": {
          "Enabled": {}
        }
      },
      "Tls": {
        "CertificateAuthorityArnList": {},
        "Enabled": {}
      },
      "Unauthenticated": {
        "Enabled": {}
      }
    },
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentBrokerSoftwareInfo": {
      "ConfigurationArn": {},
      "ConfigurationRevision": {},
      "KafkaVersion": {}
    },
    "CurrentVersion": {},
    "EncryptionInfo": {
      "EncryptionAtRest": {
        "DataVolumeKMSKeyId": {}
      },
      "EncryptionInTransit": {
        "ClientBroker": {},
        "InCluster": {}
      }
    },
    "EnhancedMonitoring": {},
    "OpenMonitoring": {
      "Prometheus": {
        "JmxExporter": {
          "EnabledInBroker": {}
        },
        "NodeExporter": {
          "EnabledInBroker": {}
        }
      }
    },
    "LoggingInfo": {
      "BrokerLogs": {
        "CloudWatchLogs": {
          "Enabled": {},
          "LogGroup": {}
        },
        "Firehose": {
          "DeliveryStream": {},
          "Enabled": {}
        },
        "S3": {
          "Bucket": {},
          "Enabled": {},
          "Prefix": {}
        }
      }
    },
    "NumberOfBrokerNodes": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "ZookeeperConnectString": {},
    "ZookeeperConnectStringTls": {},
    "StorageMode": {}
  }
]
```

<h2 id="tocS___listOfCluster">__listOfCluster</h2>
<!-- backwards compatibility -->
<a id="schema__listofcluster"></a>
<a id="schema___listOfCluster"></a>
<a id="tocS__listofcluster"></a>
<a id="tocs__listofcluster"></a>

```json
[
  {
    "ActiveOperationArn": {},
    "ClusterType": {},
    "ClusterArn": {},
    "ClusterName": {},
    "CreationTime": {},
    "CurrentVersion": {},
    "State": {},
    "StateInfo": {
      "Code": {},
      "Message": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "Provisioned": {
      "BrokerNodeGroupInfo": {
        "BrokerAZDistribution": {},
        "ClientSubnets": {},
        "InstanceType": {},
        "SecurityGroups": {},
        "StorageInfo": {
          "EbsStorageInfo": {
            "ProvisionedThroughput": {
              "Enabled": {},
              "VolumeThroughput": {}
            },
            "VolumeSize": {}
          }
        },
        "ConnectivityInfo": {
          "PublicAccess": {
            "Type": {}
          },
          "VpcConnectivity": {
            "ClientAuthentication": {
              "Sasl": {
                "Scram": {
                  "Enabled": {}
                },
                "Iam": {
                  "Enabled": {}
                }
              },
              "Tls": {
                "Enabled": {}
              }
            }
          }
        },
        "ZoneIds": {}
      },
      "CurrentBrokerSoftwareInfo": {
        "ConfigurationArn": {},
        "ConfigurationRevision": {},
        "KafkaVersion": {}
      },
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "CertificateAuthorityArnList": {},
          "Enabled": {}
        },
        "Unauthenticated": {
          "Enabled": {}
        }
      },
      "EncryptionInfo": {
        "EncryptionAtRest": {
          "DataVolumeKMSKeyId": {}
        },
        "EncryptionInTransit": {
          "ClientBroker": {},
          "InCluster": {}
        }
      },
      "EnhancedMonitoring": {},
      "OpenMonitoring": {
        "Prometheus": {
          "JmxExporter": {
            "EnabledInBroker": {}
          },
          "NodeExporter": {
            "EnabledInBroker": {}
          }
        }
      },
      "LoggingInfo": {
        "BrokerLogs": {
          "CloudWatchLogs": {
            "Enabled": {},
            "LogGroup": {}
          },
          "Firehose": {
            "DeliveryStream": {},
            "Enabled": {}
          },
          "S3": {
            "Bucket": {},
            "Enabled": {},
            "Prefix": {}
          }
        }
      },
      "NumberOfBrokerNodes": {},
      "ZookeeperConnectString": {},
      "ZookeeperConnectStringTls": {},
      "StorageMode": {}
    },
    "Serverless": {
      "VpcConfigs": {},
      "ClientAuthentication": {
        "Sasl": {
          "Iam": {
            "Enabled": {}
          }
        }
      }
    }
  }
]
```

<h2 id="tocS_ListConfigurationRevisionsRequest">ListConfigurationRevisionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationrevisionsrequest"></a>
<a id="schema_ListConfigurationRevisionsRequest"></a>
<a id="tocSlistconfigurationrevisionsrequest"></a>
<a id="tocslistconfigurationrevisionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfConfigurationRevision">__listOfConfigurationRevision</h2>
<!-- backwards compatibility -->
<a id="schema__listofconfigurationrevision"></a>
<a id="schema___listOfConfigurationRevision"></a>
<a id="tocS__listofconfigurationrevision"></a>
<a id="tocs__listofconfigurationrevision"></a>

```json
[
  {
    "CreationTime": {},
    "Description": {},
    "Revision": {}
  }
]
```

<h2 id="tocS_ListConfigurationsRequest">ListConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconfigurationsrequest"></a>
<a id="schema_ListConfigurationsRequest"></a>
<a id="tocSlistconfigurationsrequest"></a>
<a id="tocslistconfigurationsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfConfiguration">__listOfConfiguration</h2>
<!-- backwards compatibility -->
<a id="schema__listofconfiguration"></a>
<a id="schema___listOfConfiguration"></a>
<a id="tocS__listofconfiguration"></a>
<a id="tocs__listofconfiguration"></a>

```json
[
  {
    "Arn": {},
    "CreationTime": {},
    "Description": {},
    "KafkaVersions": {},
    "LatestRevision": {
      "CreationTime": {},
      "Description": {},
      "Revision": {}
    },
    "Name": {},
    "State": {}
  }
]
```

<h2 id="tocS_ListKafkaVersionsRequest">ListKafkaVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkafkaversionsrequest"></a>
<a id="schema_ListKafkaVersionsRequest"></a>
<a id="tocSlistkafkaversionsrequest"></a>
<a id="tocslistkafkaversionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfKafkaVersion">__listOfKafkaVersion</h2>
<!-- backwards compatibility -->
<a id="schema__listofkafkaversion"></a>
<a id="schema___listOfKafkaVersion"></a>
<a id="tocS__listofkafkaversion"></a>
<a id="tocs__listofkafkaversion"></a>

```json
[
  {
    "Version": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ListNodesRequest">ListNodesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistnodesrequest"></a>
<a id="schema_ListNodesRequest"></a>
<a id="tocSlistnodesrequest"></a>
<a id="tocslistnodesrequest"></a>

```json
{}
```

<h2 id="tocS___listOfNodeInfo">__listOfNodeInfo</h2>
<!-- backwards compatibility -->
<a id="schema__listofnodeinfo"></a>
<a id="schema___listOfNodeInfo"></a>
<a id="tocS__listofnodeinfo"></a>
<a id="tocs__listofnodeinfo"></a>

```json
[
  {
    "AddedToClusterTime": {},
    "BrokerNodeInfo": {
      "AttachedENIId": {},
      "BrokerId": {},
      "ClientSubnet": {},
      "ClientVpcIpAddress": {},
      "CurrentBrokerSoftwareInfo": {
        "ConfigurationArn": {},
        "ConfigurationRevision": {},
        "KafkaVersion": {}
      },
      "Endpoints": {}
    },
    "InstanceType": {},
    "NodeARN": {},
    "NodeType": {},
    "ZookeeperNodeInfo": {
      "AttachedENIId": {},
      "ClientVpcIpAddress": {},
      "Endpoints": {},
      "ZookeeperId": {},
      "ZookeeperVersion": {}
    }
  }
]
```

<h2 id="tocS_ListScramSecretsRequest">ListScramSecretsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistscramsecretsrequest"></a>
<a id="schema_ListScramSecretsRequest"></a>
<a id="tocSlistscramsecretsrequest"></a>
<a id="tocslistscramsecretsrequest"></a>

```json
{}
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

<h2 id="tocS_ListClientVpcConnectionsRequest">ListClientVpcConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistclientvpcconnectionsrequest"></a>
<a id="schema_ListClientVpcConnectionsRequest"></a>
<a id="tocSlistclientvpcconnectionsrequest"></a>
<a id="tocslistclientvpcconnectionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfClientVpcConnection">__listOfClientVpcConnection</h2>
<!-- backwards compatibility -->
<a id="schema__listofclientvpcconnection"></a>
<a id="schema___listOfClientVpcConnection"></a>
<a id="tocS__listofclientvpcconnection"></a>
<a id="tocs__listofclientvpcconnection"></a>

```json
[
  {
    "Authentication": {},
    "CreationTime": {},
    "State": {},
    "VpcConnectionArn": {},
    "Owner": {}
  }
]
```

<h2 id="tocS_ListVpcConnectionsRequest">ListVpcConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcconnectionsrequest"></a>
<a id="schema_ListVpcConnectionsRequest"></a>
<a id="tocSlistvpcconnectionsrequest"></a>
<a id="tocslistvpcconnectionsrequest"></a>

```json
{}
```

<h2 id="tocS___listOfVpcConnection">__listOfVpcConnection</h2>
<!-- backwards compatibility -->
<a id="schema__listofvpcconnection"></a>
<a id="schema___listOfVpcConnection"></a>
<a id="tocS__listofvpcconnection"></a>
<a id="tocs__listofvpcconnection"></a>

```json
[
  {
    "VpcConnectionArn": {},
    "TargetClusterArn": {},
    "CreationTime": {},
    "Authentication": {},
    "VpcId": {},
    "State": {}
  }
]
```

<h2 id="tocS_RejectClientVpcConnectionRequest">RejectClientVpcConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectclientvpcconnectionrequest"></a>
<a id="schema_RejectClientVpcConnectionRequest"></a>
<a id="tocSrejectclientvpcconnectionrequest"></a>
<a id="tocsrejectclientvpcconnectionrequest"></a>

```json
{
  "VpcConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectionArn|object|true|none|none|

<h2 id="tocS___listOfBrokerEBSVolumeInfo">__listOfBrokerEBSVolumeInfo</h2>
<!-- backwards compatibility -->
<a id="schema__listofbrokerebsvolumeinfo"></a>
<a id="schema___listOfBrokerEBSVolumeInfo"></a>
<a id="tocS__listofbrokerebsvolumeinfo"></a>
<a id="tocs__listofbrokerebsvolumeinfo"></a>

```json
[
  {
    "KafkaBrokerNodeId": {},
    "ProvisionedThroughput": {
      "Enabled": {},
      "VolumeThroughput": {}
    },
    "VolumeSizeGB": {}
  }
]
```

<h2 id="tocS_NodeExporter">NodeExporter</h2>
<!-- backwards compatibility -->
<a id="schemanodeexporter"></a>
<a id="schema_NodeExporter"></a>
<a id="tocSnodeexporter"></a>
<a id="tocsnodeexporter"></a>

```json
{
  "EnabledInBroker": {}
}
```


            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnabledInBroker|object|true|none|none|

<h2 id="tocS_NodeExporterInfo">NodeExporterInfo</h2>
<!-- backwards compatibility -->
<a id="schemanodeexporterinfo"></a>
<a id="schema_NodeExporterInfo"></a>
<a id="tocSnodeexporterinfo"></a>
<a id="tocsnodeexporterinfo"></a>

```json
{
  "EnabledInBroker": {}
}
```


            <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnabledInBroker|object|true|none|none|

<h2 id="tocS_JmxExporter">JmxExporter</h2>
<!-- backwards compatibility -->
<a id="schemajmxexporter"></a>
<a id="schema_JmxExporter"></a>
<a id="tocSjmxexporter"></a>
<a id="tocsjmxexporter"></a>

```json
{
  "EnabledInBroker": {}
}
```


            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnabledInBroker|object|true|none|none|

<h2 id="tocS_JmxExporterInfo">JmxExporterInfo</h2>
<!-- backwards compatibility -->
<a id="schemajmxexporterinfo"></a>
<a id="schema_JmxExporterInfo"></a>
<a id="tocSjmxexporterinfo"></a>
<a id="tocsjmxexporterinfo"></a>

```json
{
  "EnabledInBroker": {}
}
```


            <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnabledInBroker|object|true|none|none|

<h2 id="tocS_Prometheus">Prometheus</h2>
<!-- backwards compatibility -->
<a id="schemaprometheus"></a>
<a id="schema_Prometheus"></a>
<a id="tocSprometheus"></a>
<a id="tocsprometheus"></a>

```json
{
  "JmxExporter": {
    "EnabledInBroker": {}
  },
  "NodeExporter": {
    "EnabledInBroker": {}
  }
}
```


            <p>Prometheus settings.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|JmxExporter|object|false|none|none|
|NodeExporter|object|false|none|none|

<h2 id="tocS_PutClusterPolicyRequest">PutClusterPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputclusterpolicyrequest"></a>
<a id="schema_PutClusterPolicyRequest"></a>
<a id="tocSputclusterpolicyrequest"></a>
<a id="tocsputclusterpolicyrequest"></a>

```json
{
  "CurrentVersion": {},
  "Policy": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|
|Policy|object|true|none|none|

<h2 id="tocS_RebootBrokerRequest">RebootBrokerRequest</h2>
<!-- backwards compatibility -->
<a id="schemarebootbrokerrequest"></a>
<a id="schema_RebootBrokerRequest"></a>
<a id="tocSrebootbrokerrequest"></a>
<a id="tocsrebootbrokerrequest"></a>

```json
{
  "BrokerIds": {}
}
```

Reboots a node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrokerIds|object|true|none|none|

<h2 id="tocS_Iam">Iam</h2>
<!-- backwards compatibility -->
<a id="schemaiam"></a>
<a id="schema_Iam"></a>
<a id="tocSiam"></a>
<a id="tocsiam"></a>

```json
{
  "Enabled": {}
}
```


            <p>Details for IAM access control.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_Scram">Scram</h2>
<!-- backwards compatibility -->
<a id="schemascram"></a>
<a id="schema_Scram"></a>
<a id="tocSscram"></a>
<a id="tocsscram"></a>

```json
{
  "Enabled": {}
}
```


            <p>Details for SASL/SCRAM client authentication.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_VpcConnectivityScram">VpcConnectivityScram</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivityscram"></a>
<a id="schema_VpcConnectivityScram"></a>
<a id="tocSvpcconnectivityscram"></a>
<a id="tocsvpcconnectivityscram"></a>

```json
{
  "Enabled": {}
}
```


            <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_VpcConnectivityIam">VpcConnectivityIam</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectivityiam"></a>
<a id="schema_VpcConnectivityIam"></a>
<a id="tocSvpcconnectivityiam"></a>
<a id="tocsvpcconnectivityiam"></a>

```json
{
  "Enabled": {}
}
```


            <p>Details for IAM access control for VPC connectivity.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_NodeType">NodeType</h2>
<!-- backwards compatibility -->
<a id="schemanodetype"></a>
<a id="schema_NodeType"></a>
<a id="tocSnodetype"></a>
<a id="tocsnodetype"></a>

```json
"BROKER"
```


            <p>The broker or Zookeeper node.</p>

<h2 id="tocS_ZookeeperNodeInfo">ZookeeperNodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemazookeepernodeinfo"></a>
<a id="schema_ZookeeperNodeInfo"></a>
<a id="tocSzookeepernodeinfo"></a>
<a id="tocszookeepernodeinfo"></a>

```json
{
  "AttachedENIId": {},
  "ClientVpcIpAddress": {},
  "Endpoints": {},
  "ZookeeperId": {},
  "ZookeeperVersion": {}
}
```


            <p>Zookeeper node information.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachedENIId|object|false|none|none|
|ClientVpcIpAddress|object|false|none|none|
|Endpoints|object|false|none|none|
|ZookeeperId|object|false|none|none|
|ZookeeperVersion|object|false|none|none|

<h2 id="tocS_NodeInfo">NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemanodeinfo"></a>
<a id="schema_NodeInfo"></a>
<a id="tocSnodeinfo"></a>
<a id="tocsnodeinfo"></a>

```json
{
  "AddedToClusterTime": {},
  "BrokerNodeInfo": {
    "AttachedENIId": {},
    "BrokerId": {},
    "ClientSubnet": {},
    "ClientVpcIpAddress": {},
    "CurrentBrokerSoftwareInfo": {
      "ConfigurationArn": {},
      "ConfigurationRevision": {},
      "KafkaVersion": {}
    },
    "Endpoints": {}
  },
  "InstanceType": {},
  "NodeARN": {},
  "NodeType": {},
  "ZookeeperNodeInfo": {
    "AttachedENIId": {},
    "ClientVpcIpAddress": {},
    "Endpoints": {},
    "ZookeeperId": {},
    "ZookeeperVersion": {}
  }
}
```


            <p>The node information object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddedToClusterTime|object|false|none|none|
|BrokerNodeInfo|object|false|none|none|
|InstanceType|object|false|none|none|
|NodeARN|object|false|none|none|
|NodeType|object|false|none|none|
|ZookeeperNodeInfo|object|false|none|none|

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

<h2 id="tocS_UnprocessedScramSecret">UnprocessedScramSecret</h2>
<!-- backwards compatibility -->
<a id="schemaunprocessedscramsecret"></a>
<a id="schema_UnprocessedScramSecret"></a>
<a id="tocSunprocessedscramsecret"></a>
<a id="tocsunprocessedscramsecret"></a>

```json
{
  "ErrorCode": {},
  "ErrorMessage": {},
  "SecretArn": {}
}
```


            <p>Error info for scram secret associate/disassociate failure.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
|SecretArn|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateBrokerCountRequest">UpdateBrokerCountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokercountrequest"></a>
<a id="schema_UpdateBrokerCountRequest"></a>
<a id="tocSupdatebrokercountrequest"></a>
<a id="tocsupdatebrokercountrequest"></a>

```json
{
  "CurrentVersion": {},
  "TargetNumberOfBrokerNodes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|true|none|none|
|TargetNumberOfBrokerNodes|object|true|none|none|

<h2 id="tocS_UpdateBrokerTypeRequest">UpdateBrokerTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokertyperequest"></a>
<a id="schema_UpdateBrokerTypeRequest"></a>
<a id="tocSupdatebrokertyperequest"></a>
<a id="tocsupdatebrokertyperequest"></a>

```json
{
  "CurrentVersion": {},
  "TargetInstanceType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|true|none|none|
|TargetInstanceType|object|true|none|none|

<h2 id="tocS_UpdateBrokerStorageRequest">UpdateBrokerStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebrokerstoragerequest"></a>
<a id="schema_UpdateBrokerStorageRequest"></a>
<a id="tocSupdatebrokerstoragerequest"></a>
<a id="tocsupdatebrokerstoragerequest"></a>

```json
{
  "CurrentVersion": {},
  "TargetBrokerEBSVolumeInfo": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|true|none|none|
|TargetBrokerEBSVolumeInfo|object|true|none|none|

<h2 id="tocS_UpdateClusterConfigurationRequest">UpdateClusterConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterconfigurationrequest"></a>
<a id="schema_UpdateClusterConfigurationRequest"></a>
<a id="tocSupdateclusterconfigurationrequest"></a>
<a id="tocsupdateclusterconfigurationrequest"></a>

```json
{
  "ConfigurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "CurrentVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationInfo|object|true|none|none|
|CurrentVersion|object|true|none|none|

<h2 id="tocS_UpdateClusterKafkaVersionRequest">UpdateClusterKafkaVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclusterkafkaversionrequest"></a>
<a id="schema_UpdateClusterKafkaVersionRequest"></a>
<a id="tocSupdateclusterkafkaversionrequest"></a>
<a id="tocsupdateclusterkafkaversionrequest"></a>

```json
{
  "ConfigurationInfo": {
    "Arn": {},
    "Revision": {}
  },
  "CurrentVersion": {},
  "TargetKafkaVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationInfo|object|false|none|none|
|CurrentVersion|object|true|none|none|
|TargetKafkaVersion|object|true|none|none|

<h2 id="tocS_UpdateMonitoringRequest">UpdateMonitoringRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemonitoringrequest"></a>
<a id="schema_UpdateMonitoringRequest"></a>
<a id="tocSupdatemonitoringrequest"></a>
<a id="tocsupdatemonitoringrequest"></a>

```json
{
  "CurrentVersion": {},
  "EnhancedMonitoring": {},
  "OpenMonitoring": {
    "Prometheus": {
      "JmxExporter": {
        "EnabledInBroker": {}
      },
      "NodeExporter": {
        "EnabledInBroker": {}
      }
    }
  },
  "LoggingInfo": {
    "BrokerLogs": {
      "CloudWatchLogs": {
        "Enabled": {},
        "LogGroup": {}
      },
      "Firehose": {
        "DeliveryStream": {},
        "Enabled": {}
      },
      "S3": {
        "Bucket": {},
        "Enabled": {},
        "Prefix": {}
      }
    }
  }
}
```

Request body for UpdateMonitoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|true|none|none|
|EnhancedMonitoring|object|false|none|none|
|OpenMonitoring|object|false|none|none|
|LoggingInfo|object|false|none|none|

<h2 id="tocS_UpdateSecurityRequest">UpdateSecurityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesecurityrequest"></a>
<a id="schema_UpdateSecurityRequest"></a>
<a id="tocSupdatesecurityrequest"></a>
<a id="tocsupdatesecurityrequest"></a>

```json
{
  "ClientAuthentication": {
    "Sasl": {
      "Scram": {
        "Enabled": {}
      },
      "Iam": {
        "Enabled": {}
      }
    },
    "Tls": {
      "CertificateAuthorityArnList": {},
      "Enabled": {}
    },
    "Unauthenticated": {
      "Enabled": {}
    }
  },
  "CurrentVersion": {},
  "EncryptionInfo": {
    "EncryptionAtRest": {
      "DataVolumeKMSKeyId": {}
    },
    "EncryptionInTransit": {
      "ClientBroker": {},
      "InCluster": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClientAuthentication|object|false|none|none|
|CurrentVersion|object|true|none|none|
|EncryptionInfo|object|false|none|none|

<h2 id="tocS_UpdateStorageRequest">UpdateStorageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestoragerequest"></a>
<a id="schema_UpdateStorageRequest"></a>
<a id="tocSupdatestoragerequest"></a>
<a id="tocsupdatestoragerequest"></a>

```json
{
  "CurrentVersion": {},
  "ProvisionedThroughput": {
    "Enabled": {},
    "VolumeThroughput": {}
  },
  "StorageMode": {},
  "VolumeSizeGB": {}
}
```


            <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|true|none|none|
|ProvisionedThroughput|object|false|none|none|
|StorageMode|object|false|none|none|
|VolumeSizeGB|object|false|none|none|

<h2 id="tocS_UpdateConfigurationRequest">UpdateConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigurationrequest"></a>
<a id="schema_UpdateConfigurationRequest"></a>
<a id="tocSupdateconfigurationrequest"></a>
<a id="tocsupdateconfigurationrequest"></a>

```json
{
  "Description": {},
  "ServerProperties": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|ServerProperties|object|true|none|none|

<h2 id="tocS_UpdateConnectivityRequest">UpdateConnectivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectivityrequest"></a>
<a id="schema_UpdateConnectivityRequest"></a>
<a id="tocSupdateconnectivityrequest"></a>
<a id="tocsupdateconnectivityrequest"></a>

```json
{
  "ConnectivityInfo": {
    "PublicAccess": {
      "Type": {}
    },
    "VpcConnectivity": {
      "ClientAuthentication": {
        "Sasl": {
          "Scram": {
            "Enabled": {}
          },
          "Iam": {
            "Enabled": {}
          }
        },
        "Tls": {
          "Enabled": {}
        }
      }
    }
  },
  "CurrentVersion": {}
}
```

Request body for UpdateConnectivity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectivityInfo|object|true|none|none|
|CurrentVersion|object|true|none|none|

<h2 id="tocS_UserIdentityType">UserIdentityType</h2>
<!-- backwards compatibility -->
<a id="schemauseridentitytype"></a>
<a id="schema_UserIdentityType"></a>
<a id="tocSuseridentitytype"></a>
<a id="tocsuseridentitytype"></a>

```json
"AWSACCOUNT"
```


            <p>The identity type of the requester that calls the API operation.</p>

<h2 id="tocS_UserIdentity">UserIdentity</h2>
<!-- backwards compatibility -->
<a id="schemauseridentity"></a>
<a id="schema_UserIdentity"></a>
<a id="tocSuseridentity"></a>
<a id="tocsuseridentity"></a>

```json
{
  "Type": {},
  "PrincipalId": {}
}
```


            <p>Description of the requester that calls the API operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|false|none|none|
|PrincipalId|object|false|none|none|
