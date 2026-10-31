<h1 id="amazon-elasticsearch-service">Amazon Elasticsearch Service v2015-01-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p> <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>. The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

Base URLs:

* <a href="http://es.us-east-1.amazonaws.com">http://es.us-east-1.amazonaws.com</a> - The Amazon Elasticsearch Service multi-region endpoint

* <a href="https://es.us-east-1.amazonaws.com">https://es.us-east-1.amazonaws.com</a> - The Amazon Elasticsearch Service multi-region endpoint

* <a href="http://es.cn-north-1.amazonaws.com.cn">http://es.cn-north-1.amazonaws.com.cn</a> - The Amazon Elasticsearch Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://es.cn-north-1.amazonaws.com.cn">https://es.cn-north-1.amazonaws.com.cn</a> - The Amazon Elasticsearch Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/es/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elasticsearch-service-default">Default</h1>

## AcceptInboundCrossClusterSearchConnection

<a id="opIdAcceptInboundCrossClusterSearchConnection"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/string/accept \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /2015-01-01/es/ccs/inboundConnection/{ConnectionId}/accept`

Allows the destination domain owner to accept an inbound cross-cluster search connection request.

<h3 id="acceptinboundcrossclustersearchconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectionId|path|string|true|The id of the inbound connection that you want to accept.|
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
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
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

<h3 id="acceptinboundcrossclustersearchconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AcceptInboundCrossClusterSearchConnectionResponse](#schemaacceptinboundcrossclustersearchconnectionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AddTags

<a id="opIdAddTags"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ARN": "string",
    "TagList": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2015-01-01/tags`

Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a>

> Body parameter

```json
{
  "ARN": "string",
  "TagList": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="addtags-parameters">Parameters</h3>

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
|» ARN|body|string|true|The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.|
|» TagList|body|[[Tag](#schematag)]|true|A list of <code>Tag</code> |

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

> 483 Response

```json
null
```

<h3 id="addtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AssociatePackage

<a id="opIdAssociatePackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/associate/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /2015-01-01/packages/associate/{PackageID}/{DomainName}`

Associates a package with an Amazon ES domain.

<h3 id="associatepackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|path|string|true|Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.|
|DomainName|path|string|true|Name of the domain that you want to associate the package with.|
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
  "DomainPackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "LastUpdated": {},
    "DomainName": {},
    "DomainPackageStatus": {},
    "PackageVersion": "string",
    "ReferencePath": {},
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
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

<h3 id="associatepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociatePackageResponse](#schemaassociatepackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## AuthorizeVpcEndpointAccess

<a id="opIdAuthorizeVpcEndpointAccess"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/authorizeVpcEndpointAccess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Account": "string"
  }'
```

`POST /2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess`

Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.

> Body parameter

```json
{
  "Account": "string"
}
```

<h3 id="authorizevpcendpointaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the OpenSearch Service domain to provide access to.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Account|body|string|true|The account ID to grant access to.|

> Example responses

> 200 Response

```json
{
  "AuthorizedPrincipal": {
    "PrincipalType": {},
    "Principal": {}
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

<h3 id="authorizevpcendpointaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AuthorizeVpcEndpointAccessResponse](#schemaauthorizevpcendpointaccessresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|
|485|485|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelElasticsearchServiceSoftwareUpdate

<a id="opIdCancelElasticsearchServiceSoftwareUpdate"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/serviceSoftwareUpdate/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainName": "string"
  }'
```

`POST /2015-01-01/es/serviceSoftwareUpdate/cancel`

Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.

> Body parameter

```json
{
  "DomainName": "string"
}
```

<h3 id="cancelelasticsearchservicesoftwareupdate-parameters">Parameters</h3>

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
|» DomainName|body|string|true|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

> Example responses

> 200 Response

```json
{
  "ServiceSoftwareOptions": {
    "CurrentVersion": {},
    "NewVersion": {},
    "UpdateAvailable": {},
    "Cancellable": {},
    "UpdateStatus": {},
    "Description": {},
    "AutomatedUpdateDate": {},
    "OptionalDeployment": {}
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

<h3 id="cancelelasticsearchservicesoftwareupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CancelElasticsearchServiceSoftwareUpdateResponse](#schemacancelelasticsearchservicesoftwareupdateresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateElasticsearchDomain

<a id="opIdCreateElasticsearchDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainName": "string",
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": "string",
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "MasterUserOptions": {
        "MasterUserARN": {},
        "MasterUserName": {},
        "MasterUserPassword": {}
      },
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "MasterUserName": {},
        "MasterBackendRole": {},
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "DesiredState": {},
      "MaintenanceSchedules": {}
    },
    "TagList": [
      {
        "Key": {},
        "Value": {}
      }
    ]
  }'
```

`POST /2015-01-01/es/domain`

Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.

> Body parameter

```json
{
  "DomainName": "string",
  "ElasticsearchVersion": "string",
  "ElasticsearchClusterConfig": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "EBSOptions": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "AccessPolicies": "string",
  "SnapshotOptions": {
    "AutomatedSnapshotStartHour": {}
  },
  "VPCOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CognitoOptions": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "EncryptionAtRestOptions": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "NodeToNodeEncryptionOptions": {
    "Enabled": {}
  },
  "AdvancedOptions": {
    "property1": "string",
    "property2": "string"
  },
  "LogPublishingOptions": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "AdvancedSecurityOptions": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "MasterUserOptions": {
      "MasterUserARN": {},
      "MasterUserName": {},
      "MasterUserPassword": {}
    },
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "MasterUserName": {},
      "MasterBackendRole": {},
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthEnabled": {}
  },
  "AutoTuneOptions": {
    "DesiredState": {},
    "MaintenanceSchedules": {}
  },
  "TagList": [
    {
      "Key": {},
      "Value": {}
    }
  ]
}
```

<h3 id="createelasticsearchdomain-parameters">Parameters</h3>

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
|» DomainName|body|string|true|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» ElasticsearchVersion|body|string|false|String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.|
|» ElasticsearchClusterConfig|body|object|false|Specifies the configuration for the domain cluster, such as the type and number of instances.|
|» » InstanceType|body|object|false|none|
|» » InstanceCount|body|object|false|none|
|» » DedicatedMasterEnabled|body|object|false|none|
|» » ZoneAwarenessEnabled|body|object|false|none|
|» » ZoneAwarenessConfig|body|object|false|none|
|» » » AvailabilityZoneCount|body|object|false|none|
|» » DedicatedMasterType|body|object|false|none|
|» » DedicatedMasterCount|body|object|false|none|
|» » WarmEnabled|body|object|false|none|
|» » WarmType|body|object|false|none|
|» » WarmCount|body|object|false|none|
|» » ColdStorageOptions|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» EBSOptions|body|object|false|Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.|
|» » EBSEnabled|body|object|false|none|
|» » VolumeType|body|object|false|none|
|» » VolumeSize|body|object|false|none|
|» » Iops|body|object|false|none|
|» » Throughput|body|object|false|none|
|» AccessPolicies|body|string|false|Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.|
|» SnapshotOptions|body|object|false|Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.|
|» » AutomatedSnapshotStartHour|body|object|false|none|
|» VPCOptions|body|object|false|Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» CognitoOptions|body|object|false|Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.|
|» » Enabled|body|object|false|none|
|» » UserPoolId|body|object|false|none|
|» » IdentityPoolId|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» EncryptionAtRestOptions|body|object|false|Specifies the Encryption At Rest Options.|
|» » Enabled|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» NodeToNodeEncryptionOptions|body|object|false|Specifies the node-to-node encryption options.|
|» » Enabled|body|object|false|none|
|» AdvancedOptions|body|object|false|<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» LogPublishingOptions|body|object|false|Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.|
|» » **additionalProperties**|body|[LogPublishingOption](#schemalogpublishingoption)|false|Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> |
|» DomainEndpointOptions|body|object|false|Options to configure endpoint for the Elasticsearch domain.|
|» » EnforceHTTPS|body|object|false|none|
|» » TLSSecurityPolicy|body|object|false|none|
|» » CustomEndpointEnabled|body|object|false|none|
|» » CustomEndpoint|body|object|false|none|
|» » CustomEndpointCertificateArn|body|object|false|none|
|» AdvancedSecurityOptions|body|object|false|Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).|
|» » Enabled|body|object|false|none|
|» » InternalUserDatabaseEnabled|body|object|false|none|
|» » MasterUserOptions|body|object|false|none|
|» » » MasterUserARN|body|object|false|none|
|» » » MasterUserName|body|object|false|none|
|» » » MasterUserPassword|body|object|false|none|
|» » SAMLOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Idp|body|object|false|none|
|» » » » MetadataContent|body|object|true|none|
|» » » » EntityId|body|object|true|none|
|» » » MasterUserName|body|object|false|none|
|» » » MasterBackendRole|body|object|false|none|
|» » » SubjectKey|body|object|false|none|
|» » » RolesKey|body|object|false|none|
|» » » SessionTimeoutMinutes|body|object|false|none|
|» » AnonymousAuthEnabled|body|object|false|none|
|» AutoTuneOptions|body|object|false|Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.|
|» » DesiredState|body|object|false|none|
|» » MaintenanceSchedules|body|object|false|none|
|» TagList|body|[[Tag](#schematag)]|false|A list of <code>Tag</code> |

> Example responses

> 200 Response

```json
{
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
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

<h3 id="createelasticsearchdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateElasticsearchDomainResponse](#schemacreateelasticsearchdomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateOutboundCrossClusterSearchConnection

<a id="opIdCreateOutboundCrossClusterSearchConnection"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/outboundConnection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "ConnectionAlias": "string"
  }'
```

`POST /2015-01-01/es/ccs/outboundConnection`

Creates a new cross-cluster search connection from a source domain to a destination domain.

> Body parameter

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "ConnectionAlias": "string"
}
```

<h3 id="createoutboundcrossclustersearchconnection-parameters">Parameters</h3>

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
|» SourceDomainInfo|body|object|true|Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.|
|» » OwnerId|body|[OwnerId](#schemaownerid)|false|none|
|» » DomainName|body|[DomainName](#schemadomainname)|false|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» » Region|body|[Region](#schemaregion)|false|none|
|» DestinationDomainInfo|body|object|true|Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.|
|» » OwnerId|body|[OwnerId](#schemaownerid)|false|none|
|» » DomainName|body|[DomainName](#schemadomainname)|false|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» » Region|body|[Region](#schemaregion)|false|none|
|» ConnectionAlias|body|string|true|Specifies the connection alias that will be used by the customer for this connection.|

> Example responses

> 200 Response

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "ConnectionAlias": {},
  "ConnectionStatus": {
    "StatusCode": {},
    "Message": {}
  },
  "CrossClusterSearchConnectionId": {}
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

<h3 id="createoutboundcrossclustersearchconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateOutboundCrossClusterSearchConnectionResponse](#schemacreateoutboundcrossclustersearchconnectionresponse)|
|480|480|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePackage

<a id="opIdCreatePackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PackageName": "string",
    "PackageType": "TXT-DICTIONARY",
    "PackageDescription": "string",
    "PackageSource": {
      "S3BucketName": {},
      "S3Key": {}
    }
  }'
```

`POST /2015-01-01/packages`

Create a package for use with Amazon ES domains.

> Body parameter

```json
{
  "PackageName": "string",
  "PackageType": "TXT-DICTIONARY",
  "PackageDescription": "string",
  "PackageSource": {
    "S3BucketName": {},
    "S3Key": {}
  }
}
```

<h3 id="createpackage-parameters">Parameters</h3>

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
|» PackageName|body|string|true|Unique identifier for the package.|
|» PackageType|body|string|true|Type of package. Currently supports only TXT-DICTIONARY.|
|» PackageDescription|body|string|false|Description of the package.|
|» PackageSource|body|object|true|The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>|
|» » S3BucketName|body|object|false|none|
|» » S3Key|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PackageType|TXT-DICTIONARY|

> Example responses

> 200 Response

```json
{
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
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

<h3 id="createpackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePackageResponse](#schemacreatepackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|484|484|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|485|485|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|486|486|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcEndpoints

<a id="opIdListVpcEndpoints"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/vpcEndpoints \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/vpcEndpoints`

Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current account and Region.

<h3 id="listvpcendpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Identifier to allow retrieval of paginated results.|
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
  "VpcEndpointSummaryList": {},
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

<h3 id="listvpcendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcEndpointsResponse](#schemalistvpcendpointsresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcEndpoint

<a id="opIdCreateVpcEndpoint"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/vpcEndpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainArn": "string",
    "VpcOptions": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "ClientToken": "string"
  }'
```

`POST /2015-01-01/es/vpcEndpoints`

Creates an Amazon OpenSearch Service-managed VPC endpoint.

> Body parameter

```json
{
  "DomainArn": "string",
  "VpcOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "ClientToken": "string"
}
```

<h3 id="createvpcendpoint-parameters">Parameters</h3>

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
|» DomainArn|body|string|true|The Amazon Resource Name (ARN) of the domain to grant access to.|
|» VpcOptions|body|object|true|Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» ClientToken|body|string|false|Unique, case-sensitive identifier to ensure idempotency of the request.|

> Example responses

> 200 Response

```json
{
  "VpcEndpoint": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "VpcOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {},
    "Endpoint": {}
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

<h3 id="createvpcendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcEndpointResponse](#schemacreatevpcendpointresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|485|485|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticsearchDomain

<a id="opIdDescribeElasticsearchDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/domain/{DomainName}`

Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.

<h3 id="describeelasticsearchdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the Elasticsearch domain for which you want information.|
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
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
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

<h3 id="describeelasticsearchdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticsearchDomainResponse](#schemadescribeelasticsearchdomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteElasticsearchDomain

<a id="opIdDeleteElasticsearchDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/es/domain/{DomainName}`

Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.

<h3 id="deleteelasticsearchdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the Elasticsearch domain that you want to permanently delete.|
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
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
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

<h3 id="deleteelasticsearchdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteElasticsearchDomainResponse](#schemadeleteelasticsearchdomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteElasticsearchServiceRole

<a id="opIdDeleteElasticsearchServiceRole"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/role \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/es/role`

Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.

<h3 id="deleteelasticsearchservicerole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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

<h3 id="deleteelasticsearchservicerole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteInboundCrossClusterSearchConnection

<a id="opIdDeleteInboundCrossClusterSearchConnection"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/es/ccs/inboundConnection/{ConnectionId}`

Allows the destination domain owner to delete an existing inbound cross-cluster search connection.

<h3 id="deleteinboundcrossclustersearchconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectionId|path|string|true|The id of the inbound connection that you want to permanently delete.|
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
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
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

<h3 id="deleteinboundcrossclustersearchconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteInboundCrossClusterSearchConnectionResponse](#schemadeleteinboundcrossclustersearchconnectionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteOutboundCrossClusterSearchConnection

<a id="opIdDeleteOutboundCrossClusterSearchConnection"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/outboundConnection/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/es/ccs/outboundConnection/{ConnectionId}`

Allows the source domain owner to delete an existing outbound cross-cluster search connection.

<h3 id="deleteoutboundcrossclustersearchconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectionId|path|string|true|The id of the outbound connection that you want to permanently delete.|
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
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionAlias": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
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

<h3 id="deleteoutboundcrossclustersearchconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteOutboundCrossClusterSearchConnectionResponse](#schemadeleteoutboundcrossclustersearchconnectionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePackage

<a id="opIdDeletePackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/packages/{PackageID}`

Delete the package.

<h3 id="deletepackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|path|string|true|Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.|
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
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
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

<h3 id="deletepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePackageResponse](#schemadeletepackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcEndpoint

<a id="opIdDeleteVpcEndpoint"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/vpcEndpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2015-01-01/es/vpcEndpoints/{VpcEndpointId}`

Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.

<h3 id="deletevpcendpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|VpcEndpointId|path|string|true|The unique identifier of the endpoint to be deleted.|
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
  "VpcEndpointSummary": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "Status": {}
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

<h3 id="deletevpcendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcEndpointResponse](#schemadeletevpcendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomainAutoTunes

<a id="opIdDescribeDomainAutoTunes"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/autoTunes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 0,
    "NextToken": "string"
  }'
```

`GET /2015-01-01/es/domain/{DomainName}/autoTunes`

Provides scheduled Auto-Tune action details for the Elasticsearch domain, such as Auto-Tune action type, description, severity, and scheduled date.

> Body parameter

```json
{
  "MaxResults": 0,
  "NextToken": "string"
}
```

<h3 id="describedomainautotunes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|Specifies the domain name for which you want Auto-Tune action details.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false| Set this value to limit the number of results returned. |
|» NextToken|body|string|false| Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. |

> Example responses

> 200 Response

```json
{
  "AutoTunes": {},
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

<h3 id="describedomainautotunes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainAutoTunesResponse](#schemadescribedomainautotunesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeDomainChangeProgress

<a id="opIdDescribeDomainChangeProgress"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/progress \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/domain/{DomainName}/progress`

Returns information about the current blue/green deployment happening on a domain, including a change ID, status, and progress stages.

<h3 id="describedomainchangeprogress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The domain you want to get the progress information about.|
|changeid|query|string|false|The specific change ID for which you want to get progress information. This is an optional parameter. If omitted, the service returns information about the most recent configuration change. |
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
  "ChangeProgressStatus": {
    "ChangeId": {},
    "StartTime": {},
    "Status": {},
    "PendingProperties": {},
    "CompletedProperties": {},
    "TotalNumberOfStages": {},
    "ChangeProgressStages": {}
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

<h3 id="describedomainchangeprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeDomainChangeProgressResponse](#schemadescribedomainchangeprogressresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticsearchDomainConfig

<a id="opIdDescribeElasticsearchDomainConfig"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/domain/{DomainName}/config`

Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.

<h3 id="describeelasticsearchdomainconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The Elasticsearch domain that you want to get information about.|
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
  "DomainConfig": {
    "ElasticsearchVersion": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "ElasticsearchClusterConfig": {
      "Options": {
        "InstanceType": {},
        "InstanceCount": {},
        "DedicatedMasterEnabled": {},
        "ZoneAwarenessEnabled": {},
        "ZoneAwarenessConfig": {
          "AvailabilityZoneCount": {}
        },
        "DedicatedMasterType": {},
        "DedicatedMasterCount": {},
        "WarmEnabled": {},
        "WarmType": {},
        "WarmCount": {},
        "ColdStorageOptions": {
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EBSOptions": {
      "Options": {
        "EBSEnabled": {},
        "VolumeType": {},
        "VolumeSize": {},
        "Iops": {},
        "Throughput": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AccessPolicies": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "SnapshotOptions": {
      "Options": {
        "AutomatedSnapshotStartHour": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "VPCOptions": {
      "Options": {
        "VPCId": {},
        "SubnetIds": {},
        "AvailabilityZones": {},
        "SecurityGroupIds": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "CognitoOptions": {
      "Options": {
        "Enabled": {},
        "UserPoolId": {},
        "IdentityPoolId": {},
        "RoleArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EncryptionAtRestOptions": {
      "Options": {
        "Enabled": {},
        "KmsKeyId": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "NodeToNodeEncryptionOptions": {
      "Options": {
        "Enabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedOptions": {
      "Options": {
        "property1": "string",
        "property2": "string"
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "LogPublishingOptions": {
      "Options": {
        "property1": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        },
        "property2": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "DomainEndpointOptions": {
      "Options": {
        "EnforceHTTPS": {},
        "TLSSecurityPolicy": {},
        "CustomEndpointEnabled": {},
        "CustomEndpoint": {},
        "CustomEndpointCertificateArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedSecurityOptions": {
      "Options": {
        "Enabled": {},
        "InternalUserDatabaseEnabled": {},
        "SAMLOptions": {
          "Enabled": {},
          "Idp": {
            "MetadataContent": {},
            "EntityId": {}
          },
          "SubjectKey": {},
          "RolesKey": {},
          "SessionTimeoutMinutes": {}
        },
        "AnonymousAuthDisableDate": {},
        "AnonymousAuthEnabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AutoTuneOptions": {
      "Options": {
        "DesiredState": {},
        "RollbackOnDisable": {},
        "MaintenanceSchedules": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "ErrorMessage": {},
        "PendingDeletion": {}
      }
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
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

<h3 id="describeelasticsearchdomainconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticsearchDomainConfigResponse](#schemadescribeelasticsearchdomainconfigresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateElasticsearchDomainConfig

<a id="opIdUpdateElasticsearchDomainConfig"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "AccessPolicies": "string",
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "MasterUserOptions": {
        "MasterUserARN": {},
        "MasterUserName": {},
        "MasterUserPassword": {}
      },
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "MasterUserName": {},
        "MasterBackendRole": {},
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthEnabled": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "AutoTuneOptions": {
      "DesiredState": {},
      "RollbackOnDisable": {},
      "MaintenanceSchedules": {}
    },
    "DryRun": true
  }'
```

`POST /2015-01-01/es/domain/{DomainName}/config`

Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. 

> Body parameter

```json
{
  "ElasticsearchClusterConfig": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "EBSOptions": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "SnapshotOptions": {
    "AutomatedSnapshotStartHour": {}
  },
  "VPCOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CognitoOptions": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "AdvancedOptions": {
    "property1": "string",
    "property2": "string"
  },
  "AccessPolicies": "string",
  "LogPublishingOptions": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "AdvancedSecurityOptions": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "MasterUserOptions": {
      "MasterUserARN": {},
      "MasterUserName": {},
      "MasterUserPassword": {}
    },
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "MasterUserName": {},
      "MasterBackendRole": {},
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthEnabled": {}
  },
  "NodeToNodeEncryptionOptions": {
    "Enabled": {}
  },
  "EncryptionAtRestOptions": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "AutoTuneOptions": {
    "DesiredState": {},
    "RollbackOnDisable": {},
    "MaintenanceSchedules": {}
  },
  "DryRun": true
}
```

<h3 id="updateelasticsearchdomainconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the Elasticsearch domain that you are updating. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ElasticsearchClusterConfig|body|object|false|Specifies the configuration for the domain cluster, such as the type and number of instances.|
|» » InstanceType|body|object|false|none|
|» » InstanceCount|body|object|false|none|
|» » DedicatedMasterEnabled|body|object|false|none|
|» » ZoneAwarenessEnabled|body|object|false|none|
|» » ZoneAwarenessConfig|body|object|false|none|
|» » » AvailabilityZoneCount|body|object|false|none|
|» » DedicatedMasterType|body|object|false|none|
|» » DedicatedMasterCount|body|object|false|none|
|» » WarmEnabled|body|object|false|none|
|» » WarmType|body|object|false|none|
|» » WarmCount|body|object|false|none|
|» » ColdStorageOptions|body|object|false|none|
|» » » Enabled|body|object|true|none|
|» EBSOptions|body|object|false|Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.|
|» » EBSEnabled|body|object|false|none|
|» » VolumeType|body|object|false|none|
|» » VolumeSize|body|object|false|none|
|» » Iops|body|object|false|none|
|» » Throughput|body|object|false|none|
|» SnapshotOptions|body|object|false|Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.|
|» » AutomatedSnapshotStartHour|body|object|false|none|
|» VPCOptions|body|object|false|Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|
|» CognitoOptions|body|object|false|Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.|
|» » Enabled|body|object|false|none|
|» » UserPoolId|body|object|false|none|
|» » IdentityPoolId|body|object|false|none|
|» » RoleArn|body|object|false|none|
|» AdvancedOptions|body|object|false|<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|
|» AccessPolicies|body|string|false|Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.|
|» LogPublishingOptions|body|object|false|Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.|
|» » **additionalProperties**|body|[LogPublishingOption](#schemalogpublishingoption)|false|Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> |
|» DomainEndpointOptions|body|object|false|Options to configure endpoint for the Elasticsearch domain.|
|» » EnforceHTTPS|body|object|false|none|
|» » TLSSecurityPolicy|body|object|false|none|
|» » CustomEndpointEnabled|body|object|false|none|
|» » CustomEndpoint|body|object|false|none|
|» » CustomEndpointCertificateArn|body|object|false|none|
|» AdvancedSecurityOptions|body|object|false|Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).|
|» » Enabled|body|object|false|none|
|» » InternalUserDatabaseEnabled|body|object|false|none|
|» » MasterUserOptions|body|object|false|none|
|» » » MasterUserARN|body|object|false|none|
|» » » MasterUserName|body|object|false|none|
|» » » MasterUserPassword|body|object|false|none|
|» » SAMLOptions|body|object|false|none|
|» » » Enabled|body|object|false|none|
|» » » Idp|body|object|false|none|
|» » » » MetadataContent|body|object|true|none|
|» » » » EntityId|body|object|true|none|
|» » » MasterUserName|body|object|false|none|
|» » » MasterBackendRole|body|object|false|none|
|» » » SubjectKey|body|object|false|none|
|» » » RolesKey|body|object|false|none|
|» » » SessionTimeoutMinutes|body|object|false|none|
|» » AnonymousAuthEnabled|body|object|false|none|
|» NodeToNodeEncryptionOptions|body|object|false|Specifies the node-to-node encryption options.|
|» » Enabled|body|object|false|none|
|» EncryptionAtRestOptions|body|object|false|Specifies the Encryption At Rest Options.|
|» » Enabled|body|object|false|none|
|» » KmsKeyId|body|object|false|none|
|» AutoTuneOptions|body|object|false|Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.|
|» » DesiredState|body|object|false|none|
|» » RollbackOnDisable|body|object|false|none|
|» » MaintenanceSchedules|body|object|false|none|
|» DryRun|body|boolean|false| This flag, when set to True, specifies whether the <code>UpdateElasticsearchDomain</code> request should return the results of validation checks without actually applying the change. This flag, when set to True, specifies the deployment mechanism through which the update shall be applied on the domain. This will not actually perform the Update. |

> Example responses

> 200 Response

```json
{
  "DomainConfig": {
    "ElasticsearchVersion": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "ElasticsearchClusterConfig": {
      "Options": {
        "InstanceType": {},
        "InstanceCount": {},
        "DedicatedMasterEnabled": {},
        "ZoneAwarenessEnabled": {},
        "ZoneAwarenessConfig": {
          "AvailabilityZoneCount": {}
        },
        "DedicatedMasterType": {},
        "DedicatedMasterCount": {},
        "WarmEnabled": {},
        "WarmType": {},
        "WarmCount": {},
        "ColdStorageOptions": {
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EBSOptions": {
      "Options": {
        "EBSEnabled": {},
        "VolumeType": {},
        "VolumeSize": {},
        "Iops": {},
        "Throughput": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AccessPolicies": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "SnapshotOptions": {
      "Options": {
        "AutomatedSnapshotStartHour": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "VPCOptions": {
      "Options": {
        "VPCId": {},
        "SubnetIds": {},
        "AvailabilityZones": {},
        "SecurityGroupIds": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "CognitoOptions": {
      "Options": {
        "Enabled": {},
        "UserPoolId": {},
        "IdentityPoolId": {},
        "RoleArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EncryptionAtRestOptions": {
      "Options": {
        "Enabled": {},
        "KmsKeyId": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "NodeToNodeEncryptionOptions": {
      "Options": {
        "Enabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedOptions": {
      "Options": {
        "property1": "string",
        "property2": "string"
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "LogPublishingOptions": {
      "Options": {
        "property1": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        },
        "property2": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "DomainEndpointOptions": {
      "Options": {
        "EnforceHTTPS": {},
        "TLSSecurityPolicy": {},
        "CustomEndpointEnabled": {},
        "CustomEndpoint": {},
        "CustomEndpointCertificateArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedSecurityOptions": {
      "Options": {
        "Enabled": {},
        "InternalUserDatabaseEnabled": {},
        "SAMLOptions": {
          "Enabled": {},
          "Idp": {
            "MetadataContent": {},
            "EntityId": {}
          },
          "SubjectKey": {},
          "RolesKey": {},
          "SessionTimeoutMinutes": {}
        },
        "AnonymousAuthDisableDate": {},
        "AnonymousAuthEnabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AutoTuneOptions": {
      "Options": {
        "DesiredState": {},
        "RollbackOnDisable": {},
        "MaintenanceSchedules": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "ErrorMessage": {},
        "PendingDeletion": {}
      }
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  },
  "DryRunResults": {
    "DeploymentType": {},
    "Message": {}
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

<h3 id="updateelasticsearchdomainconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateElasticsearchDomainConfigResponse](#schemaupdateelasticsearchdomainconfigresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticsearchDomains

<a id="opIdDescribeElasticsearchDomains"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain-info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainNames": [
      "string"
    ]
  }'
```

`POST /2015-01-01/es/domain-info`

Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.

> Body parameter

```json
{
  "DomainNames": [
    "string"
  ]
}
```

<h3 id="describeelasticsearchdomains-parameters">Parameters</h3>

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
|» DomainNames|body|[[DomainName](#schemadomainname)]|true|A list of Elasticsearch domain names.|

> Example responses

> 200 Response

```json
{
  "DomainStatusList": {}
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

<h3 id="describeelasticsearchdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticsearchDomainsResponse](#schemadescribeelasticsearchdomainsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeElasticsearchInstanceTypeLimits

<a id="opIdDescribeElasticsearchInstanceTypeLimits"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/instanceTypeLimits/string/m3.medium.elasticsearch \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}`

 Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. 

<h3 id="describeelasticsearchinstancetypelimits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|query|string|false| DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch <code> <a>Limits</a> </code> for existing domain. |
|InstanceType|path|string|true| The instance type for an Elasticsearch cluster for which Elasticsearch <code> <a>Limits</a> </code> are needed. |
|ElasticsearchVersion|path|string|true| Version of Elasticsearch for which <code> <a>Limits</a> </code> are needed. |
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
|InstanceType|m3.medium.elasticsearch|
|InstanceType|m3.large.elasticsearch|
|InstanceType|m3.xlarge.elasticsearch|
|InstanceType|m3.2xlarge.elasticsearch|
|InstanceType|m4.large.elasticsearch|
|InstanceType|m4.xlarge.elasticsearch|
|InstanceType|m4.2xlarge.elasticsearch|
|InstanceType|m4.4xlarge.elasticsearch|
|InstanceType|m4.10xlarge.elasticsearch|
|InstanceType|m5.large.elasticsearch|
|InstanceType|m5.xlarge.elasticsearch|
|InstanceType|m5.2xlarge.elasticsearch|
|InstanceType|m5.4xlarge.elasticsearch|
|InstanceType|m5.12xlarge.elasticsearch|
|InstanceType|r5.large.elasticsearch|
|InstanceType|r5.xlarge.elasticsearch|
|InstanceType|r5.2xlarge.elasticsearch|
|InstanceType|r5.4xlarge.elasticsearch|
|InstanceType|r5.12xlarge.elasticsearch|
|InstanceType|c5.large.elasticsearch|
|InstanceType|c5.xlarge.elasticsearch|
|InstanceType|c5.2xlarge.elasticsearch|
|InstanceType|c5.4xlarge.elasticsearch|
|InstanceType|c5.9xlarge.elasticsearch|
|InstanceType|c5.18xlarge.elasticsearch|
|InstanceType|ultrawarm1.medium.elasticsearch|
|InstanceType|ultrawarm1.large.elasticsearch|
|InstanceType|t2.micro.elasticsearch|
|InstanceType|t2.small.elasticsearch|
|InstanceType|t2.medium.elasticsearch|
|InstanceType|r3.large.elasticsearch|
|InstanceType|r3.xlarge.elasticsearch|
|InstanceType|r3.2xlarge.elasticsearch|
|InstanceType|r3.4xlarge.elasticsearch|
|InstanceType|r3.8xlarge.elasticsearch|
|InstanceType|i2.xlarge.elasticsearch|
|InstanceType|i2.2xlarge.elasticsearch|
|InstanceType|d2.xlarge.elasticsearch|
|InstanceType|d2.2xlarge.elasticsearch|
|InstanceType|d2.4xlarge.elasticsearch|
|InstanceType|d2.8xlarge.elasticsearch|
|InstanceType|c4.large.elasticsearch|
|InstanceType|c4.xlarge.elasticsearch|
|InstanceType|c4.2xlarge.elasticsearch|
|InstanceType|c4.4xlarge.elasticsearch|
|InstanceType|c4.8xlarge.elasticsearch|
|InstanceType|r4.large.elasticsearch|
|InstanceType|r4.xlarge.elasticsearch|
|InstanceType|r4.2xlarge.elasticsearch|
|InstanceType|r4.4xlarge.elasticsearch|
|InstanceType|r4.8xlarge.elasticsearch|
|InstanceType|r4.16xlarge.elasticsearch|
|InstanceType|i3.large.elasticsearch|
|InstanceType|i3.xlarge.elasticsearch|
|InstanceType|i3.2xlarge.elasticsearch|
|InstanceType|i3.4xlarge.elasticsearch|
|InstanceType|i3.8xlarge.elasticsearch|
|InstanceType|i3.16xlarge.elasticsearch|

> Example responses

> 200 Response

```json
{
  "LimitsByRole": {
    "property1": {
      "StorageTypes": {},
      "InstanceLimits": {
        "InstanceCountLimits": {
          "MinimumInstanceCount": 0,
          "MaximumInstanceCount": 0
        }
      },
      "AdditionalLimits": {}
    },
    "property2": {
      "StorageTypes": {},
      "InstanceLimits": {
        "InstanceCountLimits": {
          "MinimumInstanceCount": 0,
          "MaximumInstanceCount": 0
        }
      },
      "AdditionalLimits": {}
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

<h3 id="describeelasticsearchinstancetypelimits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeElasticsearchInstanceTypeLimitsResponse](#schemadescribeelasticsearchinstancetypelimitsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|InvalidTypeException|[InvalidTypeException](#schemainvalidtypeexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeInboundCrossClusterSearchConnections

<a id="opIdDescribeInboundCrossClusterSearchConnections"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Values": {}
      }
    ],
    "MaxResults": 0,
    "NextToken": "string"
  }'
```

`POST /2015-01-01/es/ccs/inboundConnection/search`

Lists all the inbound cross-cluster search connections for a destination domain.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ],
  "MaxResults": 0,
  "NextToken": "string"
}
```

<h3 id="describeinboundcrossclustersearchconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[Filter](#schemafilter)]|false| A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> |
|» MaxResults|body|integer|false| Set this value to limit the number of results returned. |
|» NextToken|body|string|false| Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. |

> Example responses

> 200 Response

```json
{
  "CrossClusterSearchConnections": {},
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

<h3 id="describeinboundcrossclustersearchconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeInboundCrossClusterSearchConnectionsResponse](#schemadescribeinboundcrossclustersearchconnectionsresponse)|
|480|480|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeOutboundCrossClusterSearchConnections

<a id="opIdDescribeOutboundCrossClusterSearchConnections"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/outboundConnection/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Values": {}
      }
    ],
    "MaxResults": 0,
    "NextToken": "string"
  }'
```

`POST /2015-01-01/es/ccs/outboundConnection/search`

Lists all the outbound cross-cluster search connections for a source domain.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Values": {}
    }
  ],
  "MaxResults": 0,
  "NextToken": "string"
}
```

<h3 id="describeoutboundcrossclustersearchconnections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[Filter](#schemafilter)]|false| A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> |
|» MaxResults|body|integer|false| Set this value to limit the number of results returned. |
|» NextToken|body|string|false| Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. |

> Example responses

> 200 Response

```json
{
  "CrossClusterSearchConnections": {},
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

<h3 id="describeoutboundcrossclustersearchconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeOutboundCrossClusterSearchConnectionsResponse](#schemadescribeoutboundcrossclustersearchconnectionsresponse)|
|480|480|InvalidPaginationTokenException|[InvalidPaginationTokenException](#schemainvalidpaginationtokenexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePackages

<a id="opIdDescribePackages"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/describe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filters": [
      {
        "Name": {},
        "Value": {}
      }
    ],
    "MaxResults": 0,
    "NextToken": "string"
  }'
```

`POST /2015-01-01/packages/describe`

Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.

> Body parameter

```json
{
  "Filters": [
    {
      "Name": {},
      "Value": {}
    }
  ],
  "MaxResults": 0,
  "NextToken": "string"
}
```

<h3 id="describepackages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filters|body|[[DescribePackagesFilter](#schemadescribepackagesfilter)]|false|A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.|
|» MaxResults|body|integer|false| Set this value to limit the number of results returned. |
|» NextToken|body|string|false| Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. |

> Example responses

> 200 Response

```json
{
  "PackageDetailsList": {},
  "NextToken": "string"
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

<h3 id="describepackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePackagesResponse](#schemadescribepackagesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReservedElasticsearchInstanceOfferings

<a id="opIdDescribeReservedElasticsearchInstanceOfferings"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/reservedInstanceOfferings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/reservedInstanceOfferings`

Lists available reserved Elasticsearch instance offerings.

<h3 id="describereservedelasticsearchinstanceofferings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offeringId|query|string|false|The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.|
|maxResults|query|integer|false|Set this value to limit the number of results returned. If not specified, defaults to 100.|
|nextToken|query|string|false|NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.|
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
  "ReservedElasticsearchInstanceOfferings": {}
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

<h3 id="describereservedelasticsearchinstanceofferings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReservedElasticsearchInstanceOfferingsResponse](#schemadescribereservedelasticsearchinstanceofferingsresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeReservedElasticsearchInstances

<a id="opIdDescribeReservedElasticsearchInstances"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/reservedInstances \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/reservedInstances`

Returns information about reserved Elasticsearch instances for this account.

<h3 id="describereservedelasticsearchinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reservationId|query|string|false|The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.|
|maxResults|query|integer|false|Set this value to limit the number of results returned. If not specified, defaults to 100.|
|nextToken|query|string|false|NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.|
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
  "ReservedElasticsearchInstances": {}
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

<h3 id="describereservedelasticsearchinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeReservedElasticsearchInstancesResponse](#schemadescribereservedelasticsearchinstancesresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcEndpoints

<a id="opIdDescribeVpcEndpoints"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/vpcEndpoints/describe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VpcEndpointIds": [
      "string"
    ]
  }'
```

`POST /2015-01-01/es/vpcEndpoints/describe`

Describes one or more Amazon OpenSearch Service-managed VPC endpoints.

> Body parameter

```json
{
  "VpcEndpointIds": [
    "string"
  ]
}
```

<h3 id="describevpcendpoints-parameters">Parameters</h3>

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
|» VpcEndpointIds|body|[[VpcEndpointId](#schemavpcendpointid)]|true|The unique identifiers of the endpoints to get information about.|

> Example responses

> 200 Response

```json
{
  "VpcEndpoints": {},
  "VpcEndpointErrors": {}
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

<h3 id="describevpcendpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcEndpointsResponse](#schemadescribevpcendpointsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DissociatePackage

<a id="opIdDissociatePackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/dissociate/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /2015-01-01/packages/dissociate/{PackageID}/{DomainName}`

Dissociates a package from the Amazon ES domain.

<h3 id="dissociatepackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|path|string|true|Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.|
|DomainName|path|string|true|Name of the domain that you want to associate the package with.|
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
  "DomainPackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "LastUpdated": {},
    "DomainName": {},
    "DomainPackageStatus": {},
    "PackageVersion": "string",
    "ReferencePath": {},
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
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

<h3 id="dissociatepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DissociatePackageResponse](#schemadissociatepackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetCompatibleElasticsearchVersions

<a id="opIdGetCompatibleElasticsearchVersions"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/compatibleVersions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/compatibleVersions`

 Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a <code> <a>DomainName</a> </code> to get all upgrade compatible Elasticsearch versions for that specific domain. 

<h3 id="getcompatibleelasticsearchversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainName|query|string|false|none|
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
  "CompatibleElasticsearchVersions": {}
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

<h3 id="getcompatibleelasticsearchversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetCompatibleElasticsearchVersionsResponse](#schemagetcompatibleelasticsearchversionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPackageVersionHistory

<a id="opIdGetPackageVersionHistory"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/packages/{PackageID}/history`

Returns a list of versions of the package, along with their creation time and commit message.

<h3 id="getpackageversionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|path|string|true|Returns an audit history of versions of the package.|
|maxResults|query|integer|false|Limits results to a maximum number of versions.|
|nextToken|query|string|false|Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.|
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
  "PackageID": "string",
  "PackageVersionHistoryList": {},
  "NextToken": "string"
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

<h3 id="getpackageversionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPackageVersionHistoryResponse](#schemagetpackageversionhistoryresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUpgradeHistory

<a id="opIdGetUpgradeHistory"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/upgradeDomain/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/upgradeDomain/{DomainName}/history`

Retrieves the complete history of the last 10 upgrades that were performed on the domain.

<h3 id="getupgradehistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|none|
|maxResults|query|integer|false|none|
|nextToken|query|string|false|none|
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
  "UpgradeHistories": {},
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

<h3 id="getupgradehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUpgradeHistoryResponse](#schemagetupgradehistoryresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetUpgradeStatus

<a id="opIdGetUpgradeStatus"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/upgradeDomain/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/upgradeDomain/{DomainName}/status`

Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.

<h3 id="getupgradestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|none|
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
  "UpgradeStep": {},
  "StepStatus": {},
  "UpgradeName": {}
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

<h3 id="getupgradestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetUpgradeStatusResponse](#schemagetupgradestatusresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomainNames

<a id="opIdListDomainNames"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/domain \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/domain`

Returns the name of all Elasticsearch domains owned by the current user's account. 

<h3 id="listdomainnames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|engineType|query|string|false| Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. |
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
|engineType|OpenSearch|
|engineType|Elasticsearch|

> Example responses

> 200 Response

```json
{
  "DomainNames": {}
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

<h3 id="listdomainnames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainNamesResponse](#schemalistdomainnamesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDomainsForPackage

<a id="opIdListDomainsForPackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/packages/{PackageID}/domains`

Lists all Amazon ES domains associated with the package.

<h3 id="listdomainsforpackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PackageID|path|string|true|The package for which to list domains.|
|maxResults|query|integer|false|Limits results to a maximum number of domains.|
|nextToken|query|string|false|Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.|
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
  "DomainPackageDetailsList": {},
  "NextToken": "string"
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

<h3 id="listdomainsforpackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDomainsForPackageResponse](#schemalistdomainsforpackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListElasticsearchInstanceTypes

<a id="opIdListElasticsearchInstanceTypes"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/instanceTypes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/instanceTypes/{ElasticsearchVersion}`

List all Elasticsearch instance types that are supported for given ElasticsearchVersion

<h3 id="listelasticsearchinstancetypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ElasticsearchVersion|path|string|true|Version of Elasticsearch for which list of supported elasticsearch instance types are needed. |
|domainName|query|string|false|DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain. |
|maxResults|query|integer|false| Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored. |
|nextToken|query|string|false|NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination. |
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
  "ElasticsearchInstanceTypes": {},
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

<h3 id="listelasticsearchinstancetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListElasticsearchInstanceTypesResponse](#schemalistelasticsearchinstancetypesresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListElasticsearchVersions

<a id="opIdListElasticsearchVersions"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/versions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/versions`

List all supported Elasticsearch versions

<h3 id="listelasticsearchversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|maxResults|query|integer|false| Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored. |
|nextToken|query|string|false|none|
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
  "ElasticsearchVersions": [
    "string"
  ],
  "NextToken": "string"
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

<h3 id="listelasticsearchversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListElasticsearchVersionsResponse](#schemalistelasticsearchversionsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPackagesForDomain

<a id="opIdListPackagesForDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/domain/string/packages \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/domain/{DomainName}/packages`

Lists all packages associated with the Amazon ES domain.

<h3 id="listpackagesfordomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the domain for which you want to list associated packages.|
|maxResults|query|integer|false|Limits results to a maximum number of packages.|
|nextToken|query|string|false|Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.|
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
  "DomainPackageDetailsList": {},
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

<h3 id="listpackagesfordomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPackagesForDomainResponse](#schemalistpackagesfordomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTags

<a id="opIdListTags"></a>

> Code samples

```bash
curl 'https://es.us-east-1.amazonaws.com/2015-01-01/tags/#arn?arn=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/tags/#arn`

Returns all tags for the given Elasticsearch domain.

<h3 id="listtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|arn|query|string|true| Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.|
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
  "TagList": {}
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

<h3 id="listtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsResponse](#schemalisttagsresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcEndpointAccess

<a id="opIdListVpcEndpointAccess"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/listVpcEndpointAccess \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess`

Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.

<h3 id="listvpcendpointaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the OpenSearch Service domain to retrieve access information for.|
|nextToken|query|string|false|Provides an identifier to allow retrieval of paginated results.|
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
  "AuthorizedPrincipalList": {},
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

<h3 id="listvpcendpointaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcEndpointAccessResponse](#schemalistvpcendpointaccessresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcEndpointsForDomain

<a id="opIdListVpcEndpointsForDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/vpcEndpoints \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2015-01-01/es/domain/{DomainName}/vpcEndpoints`

Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain.

<h3 id="listvpcendpointsfordomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|Name of the ElasticSearch domain whose VPC endpoints are to be listed.|
|nextToken|query|string|false|Provides an identifier to allow retrieval of paginated results.|
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
  "VpcEndpointSummaryList": {},
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

<h3 id="listvpcendpointsfordomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcEndpointsForDomainResponse](#schemalistvpcendpointsfordomainresponse)|
|480|480|InternalException|[InternalException](#schemainternalexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PurchaseReservedElasticsearchInstanceOffering

<a id="opIdPurchaseReservedElasticsearchInstanceOffering"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/purchaseReservedInstanceOffering \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ReservedElasticsearchInstanceOfferingId": "string",
    "ReservationName": "string",
    "InstanceCount": 1
  }'
```

`POST /2015-01-01/es/purchaseReservedInstanceOffering`

Allows you to purchase reserved Elasticsearch instances.

> Body parameter

```json
{
  "ReservedElasticsearchInstanceOfferingId": "string",
  "ReservationName": "string",
  "InstanceCount": 1
}
```

<h3 id="purchasereservedelasticsearchinstanceoffering-parameters">Parameters</h3>

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
|» ReservedElasticsearchInstanceOfferingId|body|string|true|The ID of the reserved Elasticsearch instance offering to purchase.|
|» ReservationName|body|string|true|A customer-specified identifier to track this reservation.|
|» InstanceCount|body|integer|false|Specifies the number of EC2 instances in the Elasticsearch domain.|

> Example responses

> 200 Response

```json
{
  "ReservedElasticsearchInstanceId": {},
  "ReservationName": {}
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

<h3 id="purchasereservedelasticsearchinstanceoffering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseReservedElasticsearchInstanceOfferingResponse](#schemapurchasereservedelasticsearchinstanceofferingresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RejectInboundCrossClusterSearchConnection

<a id="opIdRejectInboundCrossClusterSearchConnection"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/ccs/inboundConnection/string/reject \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`PUT /2015-01-01/es/ccs/inboundConnection/{ConnectionId}/reject`

Allows the destination domain owner to reject an inbound cross-cluster search connection request.

<h3 id="rejectinboundcrossclustersearchconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConnectionId|path|string|true|The id of the inbound connection that you want to reject.|
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
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
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

<h3 id="rejectinboundcrossclustersearchconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RejectInboundCrossClusterSearchConnectionResponse](#schemarejectinboundcrossclustersearchconnectionresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RemoveTags

<a id="opIdRemoveTags"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/tags-removal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ARN": "string",
    "TagKeys": [
      "string"
    ]
  }'
```

`POST /2015-01-01/tags-removal`

Removes the specified set of tags from the specified Elasticsearch domain.

> Body parameter

```json
{
  "ARN": "string",
  "TagKeys": [
    "string"
  ]
}
```

<h3 id="removetags-parameters">Parameters</h3>

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
|» ARN|body|string|true|The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.|
|» TagKeys|body|[[String](#schemastring)]|true|Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.|

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

<h3 id="removetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RevokeVpcEndpointAccess

<a id="opIdRevokeVpcEndpointAccess"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/domain/string/revokeVpcEndpointAccess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Account": "string"
  }'
```

`POST /2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess`

Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.

> Body parameter

```json
{
  "Account": "string"
}
```

<h3 id="revokevpcendpointaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DomainName|path|string|true|The name of the OpenSearch Service domain.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Account|body|string|true|The account ID to revoke access from.|

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

<h3 id="revokevpcendpointaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RevokeVpcEndpointAccessResponse](#schemarevokevpcendpointaccessresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|483|483|InternalException|[InternalException](#schemainternalexception)|
|484|484|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartElasticsearchServiceSoftwareUpdate

<a id="opIdStartElasticsearchServiceSoftwareUpdate"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/serviceSoftwareUpdate/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainName": "string"
  }'
```

`POST /2015-01-01/es/serviceSoftwareUpdate/start`

Schedules a service software update for an Amazon ES domain.

> Body parameter

```json
{
  "DomainName": "string"
}
```

<h3 id="startelasticsearchservicesoftwareupdate-parameters">Parameters</h3>

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
|» DomainName|body|string|true|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|

> Example responses

> 200 Response

```json
{
  "ServiceSoftwareOptions": {
    "CurrentVersion": {},
    "NewVersion": {},
    "UpdateAvailable": {},
    "Cancellable": {},
    "UpdateStatus": {},
    "Description": {},
    "AutomatedUpdateDate": {},
    "OptionalDeployment": {}
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

<h3 id="startelasticsearchservicesoftwareupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartElasticsearchServiceSoftwareUpdateResponse](#schemastartelasticsearchservicesoftwareupdateresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePackage

<a id="opIdUpdatePackage"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/packages/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PackageID": "string",
    "PackageSource": {
      "S3BucketName": {},
      "S3Key": {}
    },
    "PackageDescription": "string",
    "CommitMessage": "string"
  }'
```

`POST /2015-01-01/packages/update`

Updates a package for use with Amazon ES domains.

> Body parameter

```json
{
  "PackageID": "string",
  "PackageSource": {
    "S3BucketName": {},
    "S3Key": {}
  },
  "PackageDescription": "string",
  "CommitMessage": "string"
}
```

<h3 id="updatepackage-parameters">Parameters</h3>

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
|» PackageID|body|string|true|Unique identifier for the package.|
|» PackageSource|body|object|true|The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>|
|» » S3BucketName|body|object|false|none|
|» » S3Key|body|object|false|none|
|» PackageDescription|body|string|false|New description of the package.|
|» CommitMessage|body|string|false|An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.|

> Example responses

> 200 Response

```json
{
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
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

<h3 id="updatepackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePackageResponse](#schemaupdatepackageresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|InternalException|[InternalException](#schemainternalexception)|
|482|482|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|ValidationException|[ValidationException](#schemavalidationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVpcEndpoint

<a id="opIdUpdateVpcEndpoint"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/vpcEndpoints/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "VpcEndpointId": "string",
    "VpcOptions": {
      "SubnetIds": {},
      "SecurityGroupIds": {}
    }
  }'
```

`POST /2015-01-01/es/vpcEndpoints/update`

Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.

> Body parameter

```json
{
  "VpcEndpointId": "string",
  "VpcOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

<h3 id="updatevpcendpoint-parameters">Parameters</h3>

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
|» VpcEndpointId|body|string|true|Unique identifier of the VPC endpoint to be updated.|
|» VpcOptions|body|object|true|Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.|
|» » SubnetIds|body|object|false|none|
|» » SecurityGroupIds|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "VpcEndpoint": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "VpcOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {},
    "Endpoint": {}
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

<h3 id="updatevpcendpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVpcEndpointResponse](#schemaupdatevpcendpointresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|482|482|InternalException|[InternalException](#schemainternalexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|BaseException|[BaseException](#schemabaseexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpgradeElasticsearchDomain

<a id="opIdUpgradeElasticsearchDomain"></a>

> Code samples

```bash
curl https://es.us-east-1.amazonaws.com/2015-01-01/es/upgradeDomain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DomainName": "string",
    "TargetVersion": "string",
    "PerformCheckOnly": true
  }'
```

`POST /2015-01-01/es/upgradeDomain`

Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.

> Body parameter

```json
{
  "DomainName": "string",
  "TargetVersion": "string",
  "PerformCheckOnly": true
}
```

<h3 id="upgradeelasticsearchdomain-parameters">Parameters</h3>

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
|» DomainName|body|string|true|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|» TargetVersion|body|string|true|The version of Elasticsearch that you intend to upgrade the domain to.|
|» PerformCheckOnly|body|boolean|false| This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. |

> Example responses

> 200 Response

```json
{
  "DomainName": "string",
  "TargetVersion": {},
  "PerformCheckOnly": {},
  "ChangeProgressDetails": {
    "ChangeId": {},
    "Message": {}
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

<h3 id="upgradeelasticsearchdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpgradeElasticsearchDomainResponse](#schemaupgradeelasticsearchdomainresponse)|
|480|480|BaseException|[BaseException](#schemabaseexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ResourceAlreadyExistsException|[ResourceAlreadyExistsException](#schemaresourcealreadyexistsexception)|
|483|483|DisabledOperationException|[DisabledOperationException](#schemadisabledoperationexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|InternalException|[InternalException](#schemainternalexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AcceptInboundCrossClusterSearchConnectionResponse">AcceptInboundCrossClusterSearchConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinboundcrossclustersearchconnectionresponse"></a>
<a id="schema_AcceptInboundCrossClusterSearchConnectionResponse"></a>
<a id="tocSacceptinboundcrossclustersearchconnectionresponse"></a>
<a id="tocsacceptinboundcrossclustersearchconnectionresponse"></a>

```json
{
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
}
```

The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnection|object|false|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

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

<h2 id="tocS_DisabledOperationException">DisabledOperationException</h2>
<!-- backwards compatibility -->
<a id="schemadisabledoperationexception"></a>
<a id="schema_DisabledOperationException"></a>
<a id="tocSdisabledoperationexception"></a>
<a id="tocsdisabledoperationexception"></a>

```json
null
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

Specifies a key value pair for a resource tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_BaseException">BaseException</h2>
<!-- backwards compatibility -->
<a id="schemabaseexception"></a>
<a id="schema_BaseException"></a>
<a id="tocSbaseexception"></a>
<a id="tocsbaseexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_InternalException">InternalException</h2>
<!-- backwards compatibility -->
<a id="schemainternalexception"></a>
<a id="schema_InternalException"></a>
<a id="tocSinternalexception"></a>
<a id="tocsinternalexception"></a>

```json
null
```

<h2 id="tocS_AssociatePackageResponse">AssociatePackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepackageresponse"></a>
<a id="schema_AssociatePackageResponse"></a>
<a id="tocSassociatepackageresponse"></a>
<a id="tocsassociatepackageresponse"></a>

```json
{
  "DomainPackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "LastUpdated": {},
    "DomainName": {},
    "DomainPackageStatus": {},
    "PackageVersion": "string",
    "ReferencePath": {},
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
}
```

 Container for response returned by <code> <a>AssociatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPackageDetails|object|false|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_AuthorizeVpcEndpointAccessResponse">AuthorizeVpcEndpointAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizevpcendpointaccessresponse"></a>
<a id="schema_AuthorizeVpcEndpointAccessResponse"></a>
<a id="tocSauthorizevpcendpointaccessresponse"></a>
<a id="tocsauthorizevpcendpointaccessresponse"></a>

```json
{
  "AuthorizedPrincipal": {
    "PrincipalType": {},
    "Principal": {}
  }
}
```

Container for response parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Contains the account ID and the type of the account being authorized to access the VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedPrincipal|object|true|none|none|

<h2 id="tocS_CancelElasticsearchServiceSoftwareUpdateResponse">CancelElasticsearchServiceSoftwareUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacancelelasticsearchservicesoftwareupdateresponse"></a>
<a id="schema_CancelElasticsearchServiceSoftwareUpdateResponse"></a>
<a id="tocScancelelasticsearchservicesoftwareupdateresponse"></a>
<a id="tocscancelelasticsearchservicesoftwareupdateresponse"></a>

```json
{
  "ServiceSoftwareOptions": {
    "CurrentVersion": {},
    "NewVersion": {},
    "UpdateAvailable": {},
    "Cancellable": {},
    "UpdateStatus": {},
    "Description": {},
    "AutomatedUpdateDate": {},
    "OptionalDeployment": {}
  }
}
```

The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceSoftwareOptions|object|false|none|none|

<h2 id="tocS_CreateElasticsearchDomainResponse">CreateElasticsearchDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateelasticsearchdomainresponse"></a>
<a id="schema_CreateElasticsearchDomainResponse"></a>
<a id="tocScreateelasticsearchdomainresponse"></a>
<a id="tocscreateelasticsearchdomainresponse"></a>

```json
{
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  }
}
```

The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatus|object|false|none|none|

<h2 id="tocS_ESPartitionInstanceType">ESPartitionInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemaespartitioninstancetype"></a>
<a id="schema_ESPartitionInstanceType"></a>
<a id="tocSespartitioninstancetype"></a>
<a id="tocsespartitioninstancetype"></a>

```json
"m3.medium.elasticsearch"
```

<h2 id="tocS_IntegerClass">IntegerClass</h2>
<!-- backwards compatibility -->
<a id="schemaintegerclass"></a>
<a id="schema_IntegerClass"></a>
<a id="tocSintegerclass"></a>
<a id="tocsintegerclass"></a>

```json
0
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

<h2 id="tocS_ZoneAwarenessConfig">ZoneAwarenessConfig</h2>
<!-- backwards compatibility -->
<a id="schemazoneawarenessconfig"></a>
<a id="schema_ZoneAwarenessConfig"></a>
<a id="tocSzoneawarenessconfig"></a>
<a id="tocszoneawarenessconfig"></a>

```json
{
  "AvailabilityZoneCount": {}
}
```

Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvailabilityZoneCount|object|false|none|none|

<h2 id="tocS_ESWarmPartitionInstanceType">ESWarmPartitionInstanceType</h2>
<!-- backwards compatibility -->
<a id="schemaeswarmpartitioninstancetype"></a>
<a id="schema_ESWarmPartitionInstanceType"></a>
<a id="tocSeswarmpartitioninstancetype"></a>
<a id="tocseswarmpartitioninstancetype"></a>

```json
"ultrawarm1.medium.elasticsearch"
```

<h2 id="tocS_ColdStorageOptions">ColdStorageOptions</h2>
<!-- backwards compatibility -->
<a id="schemacoldstorageoptions"></a>
<a id="schema_ColdStorageOptions"></a>
<a id="tocScoldstorageoptions"></a>
<a id="tocscoldstorageoptions"></a>

```json
{
  "Enabled": {}
}
```

Specifies the configuration for cold storage options such as enabled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|true|none|none|

<h2 id="tocS_VolumeType">VolumeType</h2>
<!-- backwards compatibility -->
<a id="schemavolumetype"></a>
<a id="schema_VolumeType"></a>
<a id="tocSvolumetype"></a>
<a id="tocsvolumetype"></a>

```json
"standard"
```

 The type of EBS volume, standard, gp2, gp3 or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information.

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

<h2 id="tocS_UserPoolId">UserPoolId</h2>
<!-- backwards compatibility -->
<a id="schemauserpoolid"></a>
<a id="schema_UserPoolId"></a>
<a id="tocSuserpoolid"></a>
<a id="tocsuserpoolid"></a>

```json
"string"
```

<h2 id="tocS_IdentityPoolId">IdentityPoolId</h2>
<!-- backwards compatibility -->
<a id="schemaidentitypoolid"></a>
<a id="schema_IdentityPoolId"></a>
<a id="tocSidentitypoolid"></a>
<a id="tocsidentitypoolid"></a>

```json
"string"
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_LogPublishingOption">LogPublishingOption</h2>
<!-- backwards compatibility -->
<a id="schemalogpublishingoption"></a>
<a id="schema_LogPublishingOption"></a>
<a id="tocSlogpublishingoption"></a>
<a id="tocslogpublishingoption"></a>

```json
{
  "CloudWatchLogsLogGroupArn": "string",
  "Enabled": {}
}
```

Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CloudWatchLogsLogGroupArn|[CloudWatchLogsLogGroupArn](#schemacloudwatchlogsloggrouparn)|false|none|ARN of the Cloudwatch log group to which log needs to be published.|
|Enabled|object|false|none|none|

<h2 id="tocS_TLSSecurityPolicy">TLSSecurityPolicy</h2>
<!-- backwards compatibility -->
<a id="schematlssecuritypolicy"></a>
<a id="schema_TLSSecurityPolicy"></a>
<a id="tocStlssecuritypolicy"></a>
<a id="tocstlssecuritypolicy"></a>

```json
"Policy-Min-TLS-1-0-2019-07"
```

<h2 id="tocS_DomainNameFqdn">DomainNameFqdn</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamefqdn"></a>
<a id="schema_DomainNameFqdn"></a>
<a id="tocSdomainnamefqdn"></a>
<a id="tocsdomainnamefqdn"></a>

```json
"string"
```

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.

<h2 id="tocS_MasterUserOptions">MasterUserOptions</h2>
<!-- backwards compatibility -->
<a id="schemamasteruseroptions"></a>
<a id="schema_MasterUserOptions"></a>
<a id="tocSmasteruseroptions"></a>
<a id="tocsmasteruseroptions"></a>

```json
{
  "MasterUserARN": {},
  "MasterUserName": {},
  "MasterUserPassword": {}
}
```

Credentials for the master user: username and password, ARN, or both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MasterUserARN|object|false|none|none|
|MasterUserName|object|false|none|none|
|MasterUserPassword|object|false|none|none|

<h2 id="tocS_SAMLOptionsInput">SAMLOptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemasamloptionsinput"></a>
<a id="schema_SAMLOptionsInput"></a>
<a id="tocSsamloptionsinput"></a>
<a id="tocssamloptionsinput"></a>

```json
{
  "Enabled": {},
  "Idp": {
    "MetadataContent": {},
    "EntityId": {}
  },
  "MasterUserName": {},
  "MasterBackendRole": {},
  "SubjectKey": {},
  "RolesKey": {},
  "SessionTimeoutMinutes": {}
}
```

Specifies the SAML application configuration for the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|Idp|object|false|none|none|
|MasterUserName|object|false|none|none|
|MasterBackendRole|object|false|none|none|
|SubjectKey|object|false|none|none|
|RolesKey|object|false|none|none|
|SessionTimeoutMinutes|object|false|none|none|

<h2 id="tocS_AutoTuneDesiredState">AutoTuneDesiredState</h2>
<!-- backwards compatibility -->
<a id="schemaautotunedesiredstate"></a>
<a id="schema_AutoTuneDesiredState"></a>
<a id="tocSautotunedesiredstate"></a>
<a id="tocsautotunedesiredstate"></a>

```json
"ENABLED"
```

Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED.

<h2 id="tocS_AutoTuneMaintenanceScheduleList">AutoTuneMaintenanceScheduleList</h2>
<!-- backwards compatibility -->
<a id="schemaautotunemaintenanceschedulelist"></a>
<a id="schema_AutoTuneMaintenanceScheduleList"></a>
<a id="tocSautotunemaintenanceschedulelist"></a>
<a id="tocsautotunemaintenanceschedulelist"></a>

```json
[
  {
    "StartAt": {},
    "Duration": {
      "Value": {},
      "Unit": {}
    },
    "CronExpressionForRecurrence": {}
  }
]
```

<h2 id="tocS_InvalidTypeException">InvalidTypeException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidtypeexception"></a>
<a id="schema_InvalidTypeException"></a>
<a id="tocSinvalidtypeexception"></a>
<a id="tocsinvalidtypeexception"></a>

```json
null
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

<h2 id="tocS_CreateOutboundCrossClusterSearchConnectionResponse">CreateOutboundCrossClusterSearchConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateoutboundcrossclustersearchconnectionresponse"></a>
<a id="schema_CreateOutboundCrossClusterSearchConnectionResponse"></a>
<a id="tocScreateoutboundcrossclustersearchconnectionresponse"></a>
<a id="tocscreateoutboundcrossclustersearchconnectionresponse"></a>

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "ConnectionAlias": {},
  "ConnectionStatus": {
    "StatusCode": {},
    "Message": {}
  },
  "CrossClusterSearchConnectionId": {}
}
```

The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDomainInfo|object|false|none|none|
|DestinationDomainInfo|object|false|none|none|
|ConnectionAlias|object|false|none|none|
|ConnectionStatus|object|false|none|none|
|CrossClusterSearchConnectionId|object|false|none|none|

<h2 id="tocS_OwnerId">OwnerId</h2>
<!-- backwards compatibility -->
<a id="schemaownerid"></a>
<a id="schema_OwnerId"></a>
<a id="tocSownerid"></a>
<a id="tocsownerid"></a>

```json
"stringstring"
```

<h2 id="tocS_DomainName">DomainName</h2>
<!-- backwards compatibility -->
<a id="schemadomainname"></a>
<a id="schema_DomainName"></a>
<a id="tocSdomainname"></a>
<a id="tocsdomainname"></a>

```json
"string"
```

The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
"string"
```

<h2 id="tocS_CreatePackageResponse">CreatePackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackageresponse"></a>
<a id="schema_CreatePackageResponse"></a>
<a id="tocScreatepackageresponse"></a>
<a id="tocscreatepackageresponse"></a>

```json
{
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
}
```

 Container for response returned by <code> <a>CreatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageDetails|object|false|none|none|

<h2 id="tocS_S3BucketName">S3BucketName</h2>
<!-- backwards compatibility -->
<a id="schemas3bucketname"></a>
<a id="schema_S3BucketName"></a>
<a id="tocSs3bucketname"></a>
<a id="tocss3bucketname"></a>

```json
"string"
```

<h2 id="tocS_S3Key">S3Key</h2>
<!-- backwards compatibility -->
<a id="schemas3key"></a>
<a id="schema_S3Key"></a>
<a id="tocSs3key"></a>
<a id="tocss3key"></a>

```json
"string"
```

<h2 id="tocS_CreateVpcEndpointResponse">CreateVpcEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcendpointresponse"></a>
<a id="schema_CreateVpcEndpointResponse"></a>
<a id="tocScreatevpcendpointresponse"></a>
<a id="tocscreatevpcendpointresponse"></a>

```json
{
  "VpcEndpoint": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "VpcOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {},
    "Endpoint": {}
  }
}
```

Container for response parameters to the <code><a>CreateVpcEndpoint</a></code> operation. Contains the configuration and status of the VPC Endpoint being created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpoint|object|true|none|none|

<h2 id="tocS_DeleteElasticsearchDomainResponse">DeleteElasticsearchDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteelasticsearchdomainresponse"></a>
<a id="schema_DeleteElasticsearchDomainResponse"></a>
<a id="tocSdeleteelasticsearchdomainresponse"></a>
<a id="tocsdeleteelasticsearchdomainresponse"></a>

```json
{
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  }
}
```

The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatus|object|false|none|none|

<h2 id="tocS_DeleteInboundCrossClusterSearchConnectionResponse">DeleteInboundCrossClusterSearchConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinboundcrossclustersearchconnectionresponse"></a>
<a id="schema_DeleteInboundCrossClusterSearchConnectionResponse"></a>
<a id="tocSdeleteinboundcrossclustersearchconnectionresponse"></a>
<a id="tocsdeleteinboundcrossclustersearchconnectionresponse"></a>

```json
{
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
}
```

The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnection|object|false|none|none|

<h2 id="tocS_DeleteOutboundCrossClusterSearchConnectionResponse">DeleteOutboundCrossClusterSearchConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutboundcrossclustersearchconnectionresponse"></a>
<a id="schema_DeleteOutboundCrossClusterSearchConnectionResponse"></a>
<a id="tocSdeleteoutboundcrossclustersearchconnectionresponse"></a>
<a id="tocsdeleteoutboundcrossclustersearchconnectionresponse"></a>

```json
{
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionAlias": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
}
```

The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnection|object|false|none|none|

<h2 id="tocS_DeletePackageResponse">DeletePackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackageresponse"></a>
<a id="schema_DeletePackageResponse"></a>
<a id="tocSdeletepackageresponse"></a>
<a id="tocsdeletepackageresponse"></a>

```json
{
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
}
```

 Container for response parameters to <code> <a>DeletePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageDetails|object|false|none|none|

<h2 id="tocS_DeleteVpcEndpointResponse">DeleteVpcEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcendpointresponse"></a>
<a id="schema_DeleteVpcEndpointResponse"></a>
<a id="tocSdeletevpcendpointresponse"></a>
<a id="tocsdeletevpcendpointresponse"></a>

```json
{
  "VpcEndpointSummary": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "Status": {}
  }
}
```

Container for response parameters to the <code><a>DeleteVpcEndpoint</a></code> operation. Contains the summarized detail of the VPC Endpoint being deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointSummary|object|true|none|none|

<h2 id="tocS_DescribeDomainAutoTunesResponse">DescribeDomainAutoTunesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainautotunesresponse"></a>
<a id="schema_DescribeDomainAutoTunesResponse"></a>
<a id="tocSdescribedomainautotunesresponse"></a>
<a id="tocsdescribedomainautotunesresponse"></a>

```json
{
  "AutoTunes": {},
  "NextToken": {}
}
```

The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoTunes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDomainChangeProgressResponse">DescribeDomainChangeProgressResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainchangeprogressresponse"></a>
<a id="schema_DescribeDomainChangeProgressResponse"></a>
<a id="tocSdescribedomainchangeprogressresponse"></a>
<a id="tocsdescribedomainchangeprogressresponse"></a>

```json
{
  "ChangeProgressStatus": {
    "ChangeId": {},
    "StartTime": {},
    "Status": {},
    "PendingProperties": {},
    "CompletedProperties": {},
    "TotalNumberOfStages": {},
    "ChangeProgressStages": {}
  }
}
```

The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of the requested domain change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeProgressStatus|object|false|none|none|

<h2 id="tocS_DescribeElasticsearchDomainResponse">DescribeElasticsearchDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainresponse"></a>
<a id="schema_DescribeElasticsearchDomainResponse"></a>
<a id="tocSdescribeelasticsearchdomainresponse"></a>
<a id="tocsdescribeelasticsearchdomainresponse"></a>

```json
{
  "DomainStatus": {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  }
}
```

The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatus|object|true|none|none|

<h2 id="tocS_DescribeElasticsearchDomainConfigResponse">DescribeElasticsearchDomainConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainconfigresponse"></a>
<a id="schema_DescribeElasticsearchDomainConfigResponse"></a>
<a id="tocSdescribeelasticsearchdomainconfigresponse"></a>
<a id="tocsdescribeelasticsearchdomainconfigresponse"></a>

```json
{
  "DomainConfig": {
    "ElasticsearchVersion": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "ElasticsearchClusterConfig": {
      "Options": {
        "InstanceType": {},
        "InstanceCount": {},
        "DedicatedMasterEnabled": {},
        "ZoneAwarenessEnabled": {},
        "ZoneAwarenessConfig": {
          "AvailabilityZoneCount": {}
        },
        "DedicatedMasterType": {},
        "DedicatedMasterCount": {},
        "WarmEnabled": {},
        "WarmType": {},
        "WarmCount": {},
        "ColdStorageOptions": {
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EBSOptions": {
      "Options": {
        "EBSEnabled": {},
        "VolumeType": {},
        "VolumeSize": {},
        "Iops": {},
        "Throughput": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AccessPolicies": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "SnapshotOptions": {
      "Options": {
        "AutomatedSnapshotStartHour": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "VPCOptions": {
      "Options": {
        "VPCId": {},
        "SubnetIds": {},
        "AvailabilityZones": {},
        "SecurityGroupIds": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "CognitoOptions": {
      "Options": {
        "Enabled": {},
        "UserPoolId": {},
        "IdentityPoolId": {},
        "RoleArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EncryptionAtRestOptions": {
      "Options": {
        "Enabled": {},
        "KmsKeyId": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "NodeToNodeEncryptionOptions": {
      "Options": {
        "Enabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedOptions": {
      "Options": {
        "property1": "string",
        "property2": "string"
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "LogPublishingOptions": {
      "Options": {
        "property1": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        },
        "property2": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "DomainEndpointOptions": {
      "Options": {
        "EnforceHTTPS": {},
        "TLSSecurityPolicy": {},
        "CustomEndpointEnabled": {},
        "CustomEndpoint": {},
        "CustomEndpointCertificateArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedSecurityOptions": {
      "Options": {
        "Enabled": {},
        "InternalUserDatabaseEnabled": {},
        "SAMLOptions": {
          "Enabled": {},
          "Idp": {
            "MetadataContent": {},
            "EntityId": {}
          },
          "SubjectKey": {},
          "RolesKey": {},
          "SessionTimeoutMinutes": {}
        },
        "AnonymousAuthDisableDate": {},
        "AnonymousAuthEnabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AutoTuneOptions": {
      "Options": {
        "DesiredState": {},
        "RollbackOnDisable": {},
        "MaintenanceSchedules": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "ErrorMessage": {},
        "PendingDeletion": {}
      }
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  }
}
```

The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainConfig|object|true|none|none|

<h2 id="tocS_DescribeElasticsearchDomainsResponse">DescribeElasticsearchDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainsresponse"></a>
<a id="schema_DescribeElasticsearchDomainsResponse"></a>
<a id="tocSdescribeelasticsearchdomainsresponse"></a>
<a id="tocsdescribeelasticsearchdomainsresponse"></a>

```json
{
  "DomainStatusList": {}
}
```

The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainStatusList|object|true|none|none|

<h2 id="tocS_DescribeElasticsearchInstanceTypeLimitsResponse">DescribeElasticsearchInstanceTypeLimitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchinstancetypelimitsresponse"></a>
<a id="schema_DescribeElasticsearchInstanceTypeLimitsResponse"></a>
<a id="tocSdescribeelasticsearchinstancetypelimitsresponse"></a>
<a id="tocsdescribeelasticsearchinstancetypelimitsresponse"></a>

```json
{
  "LimitsByRole": {
    "property1": {
      "StorageTypes": {},
      "InstanceLimits": {
        "InstanceCountLimits": {
          "MinimumInstanceCount": 0,
          "MaximumInstanceCount": 0
        }
      },
      "AdditionalLimits": {}
    },
    "property2": {
      "StorageTypes": {},
      "InstanceLimits": {
        "InstanceCountLimits": {
          "MinimumInstanceCount": 0,
          "MaximumInstanceCount": 0
        }
      },
      "AdditionalLimits": {}
    }
  }
}
```

 Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LimitsByRole|[LimitsByRole](#schemalimitsbyrole)|false|none| Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> |

<h2 id="tocS_DescribeInboundCrossClusterSearchConnectionsResponse">DescribeInboundCrossClusterSearchConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinboundcrossclustersearchconnectionsresponse"></a>
<a id="schema_DescribeInboundCrossClusterSearchConnectionsResponse"></a>
<a id="tocSdescribeinboundcrossclustersearchconnectionsresponse"></a>
<a id="tocsdescribeinboundcrossclustersearchconnectionsresponse"></a>

```json
{
  "CrossClusterSearchConnections": {},
  "NextToken": {}
}
```

The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
{
  "Name": {},
  "Values": {}
}
```

 A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Values|object|false|none|none|

<h2 id="tocS_InvalidPaginationTokenException">InvalidPaginationTokenException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidpaginationtokenexception"></a>
<a id="schema_InvalidPaginationTokenException"></a>
<a id="tocSinvalidpaginationtokenexception"></a>
<a id="tocsinvalidpaginationtokenexception"></a>

```json
null
```

<h2 id="tocS_DescribeOutboundCrossClusterSearchConnectionsResponse">DescribeOutboundCrossClusterSearchConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeoutboundcrossclustersearchconnectionsresponse"></a>
<a id="schema_DescribeOutboundCrossClusterSearchConnectionsResponse"></a>
<a id="tocSdescribeoutboundcrossclustersearchconnectionsresponse"></a>
<a id="tocsdescribeoutboundcrossclustersearchconnectionsresponse"></a>

```json
{
  "CrossClusterSearchConnections": {},
  "NextToken": {}
}
```

The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnections|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribePackagesResponse">DescribePackagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesresponse"></a>
<a id="schema_DescribePackagesResponse"></a>
<a id="tocSdescribepackagesresponse"></a>
<a id="tocsdescribepackagesresponse"></a>

```json
{
  "PackageDetailsList": {},
  "NextToken": "string"
}
```

 Container for response returned by <code> <a>DescribePackages</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageDetailsList|object|false|none|none|
|NextToken|[String](#schemastring)|false|none|none|

<h2 id="tocS_DescribePackagesFilter">DescribePackagesFilter</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesfilter"></a>
<a id="schema_DescribePackagesFilter"></a>
<a id="tocSdescribepackagesfilter"></a>
<a id="tocsdescribepackagesfilter"></a>

```json
{
  "Name": {},
  "Value": {}
}
```

Filter to apply in <code>DescribePackage</code> response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Value|object|false|none|none|

<h2 id="tocS_DescribeReservedElasticsearchInstanceOfferingsResponse">DescribeReservedElasticsearchInstanceOfferingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedelasticsearchinstanceofferingsresponse"></a>
<a id="schema_DescribeReservedElasticsearchInstanceOfferingsResponse"></a>
<a id="tocSdescribereservedelasticsearchinstanceofferingsresponse"></a>
<a id="tocsdescribereservedelasticsearchinstanceofferingsresponse"></a>

```json
{
  "NextToken": {},
  "ReservedElasticsearchInstanceOfferings": {}
}
```

Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ReservedElasticsearchInstanceOfferings|object|false|none|none|

<h2 id="tocS_DescribeReservedElasticsearchInstancesResponse">DescribeReservedElasticsearchInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedelasticsearchinstancesresponse"></a>
<a id="schema_DescribeReservedElasticsearchInstancesResponse"></a>
<a id="tocSdescribereservedelasticsearchinstancesresponse"></a>
<a id="tocsdescribereservedelasticsearchinstancesresponse"></a>

```json
{
  "NextToken": {},
  "ReservedElasticsearchInstances": {}
}
```

Container for results from <code>DescribeReservedElasticsearchInstances</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|NextToken|object|false|none|none|
|ReservedElasticsearchInstances|object|false|none|none|

<h2 id="tocS_DescribeVpcEndpointsResponse">DescribeVpcEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcendpointsresponse"></a>
<a id="schema_DescribeVpcEndpointsResponse"></a>
<a id="tocSdescribevpcendpointsresponse"></a>
<a id="tocsdescribevpcendpointsresponse"></a>

```json
{
  "VpcEndpoints": {},
  "VpcEndpointErrors": {}
}
```

Container for response parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Returns a list containing configuration details and status of the VPC Endpoints as well as a list containing error responses of the endpoints that could not be described

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpoints|object|true|none|none|
|VpcEndpointErrors|object|true|none|none|

<h2 id="tocS_VpcEndpointId">VpcEndpointId</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointid"></a>
<a id="schema_VpcEndpointId"></a>
<a id="tocSvpcendpointid"></a>
<a id="tocsvpcendpointid"></a>

```json
"string"
```

<h2 id="tocS_DissociatePackageResponse">DissociatePackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadissociatepackageresponse"></a>
<a id="schema_DissociatePackageResponse"></a>
<a id="tocSdissociatepackageresponse"></a>
<a id="tocsdissociatepackageresponse"></a>

```json
{
  "DomainPackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "LastUpdated": {},
    "DomainName": {},
    "DomainPackageStatus": {},
    "PackageVersion": "string",
    "ReferencePath": {},
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
}
```

 Container for response returned by <code> <a>DissociatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPackageDetails|object|false|none|none|

<h2 id="tocS_GetCompatibleElasticsearchVersionsResponse">GetCompatibleElasticsearchVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcompatibleelasticsearchversionsresponse"></a>
<a id="schema_GetCompatibleElasticsearchVersionsResponse"></a>
<a id="tocSgetcompatibleelasticsearchversionsresponse"></a>
<a id="tocsgetcompatibleelasticsearchversionsresponse"></a>

```json
{
  "CompatibleElasticsearchVersions": {}
}
```

 Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CompatibleElasticsearchVersions|object|false|none|none|

<h2 id="tocS_GetPackageVersionHistoryResponse">GetPackageVersionHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionhistoryresponse"></a>
<a id="schema_GetPackageVersionHistoryResponse"></a>
<a id="tocSgetpackageversionhistoryresponse"></a>
<a id="tocsgetpackageversionhistoryresponse"></a>

```json
{
  "PackageID": "string",
  "PackageVersionHistoryList": {},
  "NextToken": "string"
}
```

 Container for response returned by <code> <a>GetPackageVersionHistory</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageID|[PackageID](#schemapackageid)|false|none|none|
|PackageVersionHistoryList|object|false|none|none|
|NextToken|[String](#schemastring)|false|none|none|

<h2 id="tocS_GetUpgradeHistoryResponse">GetUpgradeHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetupgradehistoryresponse"></a>
<a id="schema_GetUpgradeHistoryResponse"></a>
<a id="tocSgetupgradehistoryresponse"></a>
<a id="tocsgetupgradehistoryresponse"></a>

```json
{
  "UpgradeHistories": {},
  "NextToken": {}
}
```

 Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradeHistories|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetUpgradeStatusResponse">GetUpgradeStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetupgradestatusresponse"></a>
<a id="schema_GetUpgradeStatusResponse"></a>
<a id="tocSgetupgradestatusresponse"></a>
<a id="tocsgetupgradestatusresponse"></a>

```json
{
  "UpgradeStep": {},
  "StepStatus": {},
  "UpgradeName": {}
}
```

 Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradeStep|object|false|none|none|
|StepStatus|object|false|none|none|
|UpgradeName|object|false|none|none|

<h2 id="tocS_ListDomainNamesResponse">ListDomainNamesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainnamesresponse"></a>
<a id="schema_ListDomainNamesResponse"></a>
<a id="tocSlistdomainnamesresponse"></a>
<a id="tocslistdomainnamesresponse"></a>

```json
{
  "DomainNames": {}
}
```

The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNames|object|false|none|none|

<h2 id="tocS_ListDomainsForPackageResponse">ListDomainsForPackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsforpackageresponse"></a>
<a id="schema_ListDomainsForPackageResponse"></a>
<a id="tocSlistdomainsforpackageresponse"></a>
<a id="tocslistdomainsforpackageresponse"></a>

```json
{
  "DomainPackageDetailsList": {},
  "NextToken": "string"
}
```

 Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPackageDetailsList|object|false|none|none|
|NextToken|[String](#schemastring)|false|none|none|

<h2 id="tocS_ListElasticsearchInstanceTypesResponse">ListElasticsearchInstanceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistelasticsearchinstancetypesresponse"></a>
<a id="schema_ListElasticsearchInstanceTypesResponse"></a>
<a id="tocSlistelasticsearchinstancetypesresponse"></a>
<a id="tocslistelasticsearchinstancetypesresponse"></a>

```json
{
  "ElasticsearchInstanceTypes": {},
  "NextToken": {}
}
```

 Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticsearchInstanceTypes|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListElasticsearchVersionsResponse">ListElasticsearchVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistelasticsearchversionsresponse"></a>
<a id="schema_ListElasticsearchVersionsResponse"></a>
<a id="tocSlistelasticsearchversionsresponse"></a>
<a id="tocslistelasticsearchversionsresponse"></a>

```json
{
  "ElasticsearchVersions": [
    "string"
  ],
  "NextToken": "string"
}
```

 Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticsearchVersions|[ElasticsearchVersionList](#schemaelasticsearchversionlist)|false|none|List of supported elastic search versions. |
|NextToken|[NextToken](#schemanexttoken)|false|none| Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. |

<h2 id="tocS_ListPackagesForDomainResponse">ListPackagesForDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesfordomainresponse"></a>
<a id="schema_ListPackagesForDomainResponse"></a>
<a id="tocSlistpackagesfordomainresponse"></a>
<a id="tocslistpackagesfordomainresponse"></a>

```json
{
  "DomainPackageDetailsList": {},
  "NextToken": {}
}
```

 Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainPackageDetailsList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "TagList": {}
}
```

The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TagList|object|false|none|none|

<h2 id="tocS_ListVpcEndpointAccessResponse">ListVpcEndpointAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointaccessresponse"></a>
<a id="schema_ListVpcEndpointAccessResponse"></a>
<a id="tocSlistvpcendpointaccessresponse"></a>
<a id="tocslistvpcendpointaccessresponse"></a>

```json
{
  "AuthorizedPrincipalList": {},
  "NextToken": {}
}
```

Container for response parameters to the <code><a>ListVpcEndpointAccess</a></code> operation. Returns a list of accounts id and account type authorized to manage VPC endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorizedPrincipalList|object|true|none|none|
|NextToken|object|true|none|none|

<h2 id="tocS_ListVpcEndpointsResponse">ListVpcEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointsresponse"></a>
<a id="schema_ListVpcEndpointsResponse"></a>
<a id="tocSlistvpcendpointsresponse"></a>
<a id="tocslistvpcendpointsresponse"></a>

```json
{
  "VpcEndpointSummaryList": {},
  "NextToken": {}
}
```

Container for response parameters to the <code><a>ListVpcEndpoints</a></code> operation. Returns a list containing summarized details of the VPC endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointSummaryList|object|true|none|none|
|NextToken|object|true|none|none|

<h2 id="tocS_ListVpcEndpointsForDomainResponse">ListVpcEndpointsForDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointsfordomainresponse"></a>
<a id="schema_ListVpcEndpointsForDomainResponse"></a>
<a id="tocSlistvpcendpointsfordomainresponse"></a>
<a id="tocslistvpcendpointsfordomainresponse"></a>

```json
{
  "VpcEndpointSummaryList": {},
  "NextToken": {}
}
```

Container for response parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Returns a list containing summarized details of the VPC endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointSummaryList|object|true|none|none|
|NextToken|object|true|none|none|

<h2 id="tocS_PurchaseReservedElasticsearchInstanceOfferingResponse">PurchaseReservedElasticsearchInstanceOfferingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapurchasereservedelasticsearchinstanceofferingresponse"></a>
<a id="schema_PurchaseReservedElasticsearchInstanceOfferingResponse"></a>
<a id="tocSpurchasereservedelasticsearchinstanceofferingresponse"></a>
<a id="tocspurchasereservedelasticsearchinstanceofferingresponse"></a>

```json
{
  "ReservedElasticsearchInstanceId": {},
  "ReservationName": {}
}
```

Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedElasticsearchInstanceId|object|false|none|none|
|ReservationName|object|false|none|none|

<h2 id="tocS_RejectInboundCrossClusterSearchConnectionResponse">RejectInboundCrossClusterSearchConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemarejectinboundcrossclustersearchconnectionresponse"></a>
<a id="schema_RejectInboundCrossClusterSearchConnectionResponse"></a>
<a id="tocSrejectinboundcrossclustersearchconnectionresponse"></a>
<a id="tocsrejectinboundcrossclustersearchconnectionresponse"></a>

```json
{
  "CrossClusterSearchConnection": {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
}
```

The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CrossClusterSearchConnection|object|false|none|none|

<h2 id="tocS_RevokeVpcEndpointAccessResponse">RevokeVpcEndpointAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevokevpcendpointaccessresponse"></a>
<a id="schema_RevokeVpcEndpointAccessResponse"></a>
<a id="tocSrevokevpcendpointaccessresponse"></a>
<a id="tocsrevokevpcendpointaccessresponse"></a>

```json
{}
```

Container for response parameters to the <code><a>RevokeVpcEndpointAccess</a></code> operation. The response body for this operation is empty.

<h2 id="tocS_StartElasticsearchServiceSoftwareUpdateResponse">StartElasticsearchServiceSoftwareUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartelasticsearchservicesoftwareupdateresponse"></a>
<a id="schema_StartElasticsearchServiceSoftwareUpdateResponse"></a>
<a id="tocSstartelasticsearchservicesoftwareupdateresponse"></a>
<a id="tocsstartelasticsearchservicesoftwareupdateresponse"></a>

```json
{
  "ServiceSoftwareOptions": {
    "CurrentVersion": {},
    "NewVersion": {},
    "UpdateAvailable": {},
    "Cancellable": {},
    "UpdateStatus": {},
    "Description": {},
    "AutomatedUpdateDate": {},
    "OptionalDeployment": {}
  }
}
```

The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceSoftwareOptions|object|false|none|none|

<h2 id="tocS_UpdateElasticsearchDomainConfigResponse">UpdateElasticsearchDomainConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateelasticsearchdomainconfigresponse"></a>
<a id="schema_UpdateElasticsearchDomainConfigResponse"></a>
<a id="tocSupdateelasticsearchdomainconfigresponse"></a>
<a id="tocsupdateelasticsearchdomainconfigresponse"></a>

```json
{
  "DomainConfig": {
    "ElasticsearchVersion": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "ElasticsearchClusterConfig": {
      "Options": {
        "InstanceType": {},
        "InstanceCount": {},
        "DedicatedMasterEnabled": {},
        "ZoneAwarenessEnabled": {},
        "ZoneAwarenessConfig": {
          "AvailabilityZoneCount": {}
        },
        "DedicatedMasterType": {},
        "DedicatedMasterCount": {},
        "WarmEnabled": {},
        "WarmType": {},
        "WarmCount": {},
        "ColdStorageOptions": {
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EBSOptions": {
      "Options": {
        "EBSEnabled": {},
        "VolumeType": {},
        "VolumeSize": {},
        "Iops": {},
        "Throughput": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AccessPolicies": {
      "Options": {},
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "SnapshotOptions": {
      "Options": {
        "AutomatedSnapshotStartHour": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "VPCOptions": {
      "Options": {
        "VPCId": {},
        "SubnetIds": {},
        "AvailabilityZones": {},
        "SecurityGroupIds": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "CognitoOptions": {
      "Options": {
        "Enabled": {},
        "UserPoolId": {},
        "IdentityPoolId": {},
        "RoleArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "EncryptionAtRestOptions": {
      "Options": {
        "Enabled": {},
        "KmsKeyId": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "NodeToNodeEncryptionOptions": {
      "Options": {
        "Enabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedOptions": {
      "Options": {
        "property1": "string",
        "property2": "string"
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "LogPublishingOptions": {
      "Options": {
        "property1": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        },
        "property2": {
          "CloudWatchLogsLogGroupArn": "string",
          "Enabled": {}
        }
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "DomainEndpointOptions": {
      "Options": {
        "EnforceHTTPS": {},
        "TLSSecurityPolicy": {},
        "CustomEndpointEnabled": {},
        "CustomEndpoint": {},
        "CustomEndpointCertificateArn": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AdvancedSecurityOptions": {
      "Options": {
        "Enabled": {},
        "InternalUserDatabaseEnabled": {},
        "SAMLOptions": {
          "Enabled": {},
          "Idp": {
            "MetadataContent": {},
            "EntityId": {}
          },
          "SubjectKey": {},
          "RolesKey": {},
          "SessionTimeoutMinutes": {}
        },
        "AnonymousAuthDisableDate": {},
        "AnonymousAuthEnabled": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "PendingDeletion": {}
      }
    },
    "AutoTuneOptions": {
      "Options": {
        "DesiredState": {},
        "RollbackOnDisable": {},
        "MaintenanceSchedules": {}
      },
      "Status": {
        "CreationDate": {},
        "UpdateDate": {},
        "UpdateVersion": {},
        "State": {},
        "ErrorMessage": {},
        "PendingDeletion": {}
      }
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  },
  "DryRunResults": {
    "DeploymentType": {},
    "Message": {}
  }
}
```

The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainConfig|object|true|none|none|
|DryRunResults|object|false|none|none|

<h2 id="tocS_RollbackOnDisable">RollbackOnDisable</h2>
<!-- backwards compatibility -->
<a id="schemarollbackondisable"></a>
<a id="schema_RollbackOnDisable"></a>
<a id="tocSrollbackondisable"></a>
<a id="tocsrollbackondisable"></a>

```json
"NO_ROLLBACK"
```

Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK.

<h2 id="tocS_UpdatePackageResponse">UpdatePackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackageresponse"></a>
<a id="schema_UpdatePackageResponse"></a>
<a id="tocSupdatepackageresponse"></a>
<a id="tocsupdatepackageresponse"></a>

```json
{
  "PackageDetails": {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
}
```

 Container for response returned by <code> <a>UpdatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageDetails|object|false|none|none|

<h2 id="tocS_UpdateVpcEndpointResponse">UpdateVpcEndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcendpointresponse"></a>
<a id="schema_UpdateVpcEndpointResponse"></a>
<a id="tocSupdatevpcendpointresponse"></a>
<a id="tocsupdatevpcendpointresponse"></a>

```json
{
  "VpcEndpoint": {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "VpcOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {},
    "Endpoint": {}
  }
}
```

Contains the configuration and status of the VPC endpoint being updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpoint|object|true|none|none|

<h2 id="tocS_UpgradeElasticsearchDomainResponse">UpgradeElasticsearchDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeelasticsearchdomainresponse"></a>
<a id="schema_UpgradeElasticsearchDomainResponse"></a>
<a id="tocSupgradeelasticsearchdomainresponse"></a>
<a id="tocsupgradeelasticsearchdomainresponse"></a>

```json
{
  "DomainName": "string",
  "TargetVersion": {},
  "PerformCheckOnly": {},
  "ChangeProgressDetails": {
    "ChangeId": {},
    "Message": {}
  }
}
```

 Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|false|none|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|TargetVersion|object|false|none|none|
|PerformCheckOnly|object|false|none|none|
|ChangeProgressDetails|[ChangeProgressDetails](#schemachangeprogressdetails)|false|none|Specifies change details of the domain configuration change.|

<h2 id="tocS_AWSAccount">AWSAccount</h2>
<!-- backwards compatibility -->
<a id="schemaawsaccount"></a>
<a id="schema_AWSAccount"></a>
<a id="tocSawsaccount"></a>
<a id="tocsawsaccount"></a>

```json
"string"
```

<h2 id="tocS_CrossClusterSearchConnectionId">CrossClusterSearchConnectionId</h2>
<!-- backwards compatibility -->
<a id="schemacrossclustersearchconnectionid"></a>
<a id="schema_CrossClusterSearchConnectionId"></a>
<a id="tocScrossclustersearchconnectionid"></a>
<a id="tocscrossclustersearchconnectionid"></a>

```json
"string"
```

<h2 id="tocS_AcceptInboundCrossClusterSearchConnectionRequest">AcceptInboundCrossClusterSearchConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinboundcrossclustersearchconnectionrequest"></a>
<a id="schema_AcceptInboundCrossClusterSearchConnectionRequest"></a>
<a id="tocSacceptinboundcrossclustersearchconnectionrequest"></a>
<a id="tocsacceptinboundcrossclustersearchconnectionrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.

<h2 id="tocS_InboundCrossClusterSearchConnection">InboundCrossClusterSearchConnection</h2>
<!-- backwards compatibility -->
<a id="schemainboundcrossclustersearchconnection"></a>
<a id="schema_InboundCrossClusterSearchConnection"></a>
<a id="tocSinboundcrossclustersearchconnection"></a>
<a id="tocsinboundcrossclustersearchconnection"></a>

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "CrossClusterSearchConnectionId": {},
  "ConnectionStatus": {
    "StatusCode": {},
    "Message": {}
  }
}
```

Specifies details of an inbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDomainInfo|object|false|none|none|
|DestinationDomainInfo|object|false|none|none|
|CrossClusterSearchConnectionId|object|false|none|none|
|ConnectionStatus|object|false|none|none|

<h2 id="tocS_PolicyDocument">PolicyDocument</h2>
<!-- backwards compatibility -->
<a id="schemapolicydocument"></a>
<a id="schema_PolicyDocument"></a>
<a id="tocSpolicydocument"></a>
<a id="tocspolicydocument"></a>

```json
"string"
```

Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.

<h2 id="tocS_OptionStatus">OptionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoptionstatus"></a>
<a id="schema_OptionStatus"></a>
<a id="tocSoptionstatus"></a>
<a id="tocsoptionstatus"></a>

```json
{
  "CreationDate": {},
  "UpdateDate": {},
  "UpdateVersion": {},
  "State": {},
  "PendingDeletion": {}
}
```

Provides the current status of the entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|true|none|none|
|UpdateDate|object|true|none|none|
|UpdateVersion|object|false|none|none|
|State|object|true|none|none|
|PendingDeletion|object|false|none|none|

<h2 id="tocS_AccessPoliciesStatus">AccessPoliciesStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccesspoliciesstatus"></a>
<a id="schema_AccessPoliciesStatus"></a>
<a id="tocSaccesspoliciesstatus"></a>
<a id="tocsaccesspoliciesstatus"></a>

```json
{
  "Options": {},
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The configured access rules for the domain's document and search endpoints, and the current status of those rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

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

A list of <code>Tag</code>

<h2 id="tocS_AddTagsRequest">AddTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddtagsrequest"></a>
<a id="schema_AddTagsRequest"></a>
<a id="tocSaddtagsrequest"></a>
<a id="tocsaddtagsrequest"></a>

```json
{
  "ARN": {},
  "TagList": {}
}
```

Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|TagList|object|true|none|none|

<h2 id="tocS_LimitName">LimitName</h2>
<!-- backwards compatibility -->
<a id="schemalimitname"></a>
<a id="schema_LimitName"></a>
<a id="tocSlimitname"></a>
<a id="tocslimitname"></a>

```json
"string"
```

<h2 id="tocS_LimitValueList">LimitValueList</h2>
<!-- backwards compatibility -->
<a id="schemalimitvaluelist"></a>
<a id="schema_LimitValueList"></a>
<a id="tocSlimitvaluelist"></a>
<a id="tocslimitvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AdditionalLimit">AdditionalLimit</h2>
<!-- backwards compatibility -->
<a id="schemaadditionallimit"></a>
<a id="schema_AdditionalLimit"></a>
<a id="tocSadditionallimit"></a>
<a id="tocsadditionallimit"></a>

```json
{
  "LimitName": {},
  "LimitValues": {}
}
```

 List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> .

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LimitName|object|false|none|none|
|LimitValues|object|false|none|none|

<h2 id="tocS_AdditionalLimitList">AdditionalLimitList</h2>
<!-- backwards compatibility -->
<a id="schemaadditionallimitlist"></a>
<a id="schema_AdditionalLimitList"></a>
<a id="tocSadditionallimitlist"></a>
<a id="tocsadditionallimitlist"></a>

```json
[
  {
    "LimitName": {},
    "LimitValues": {}
  }
]
```

<h2 id="tocS_AdvancedOptions">AdvancedOptions</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedoptions"></a>
<a id="schema_AdvancedOptions"></a>
<a id="tocSadvancedoptions"></a>
<a id="tocsadvancedoptions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

<p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_AdvancedOptionsStatus">AdvancedOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedoptionsstatus"></a>
<a id="schema_AdvancedOptionsStatus"></a>
<a id="tocSadvancedoptionsstatus"></a>
<a id="tocsadvancedoptionsstatus"></a>

```json
{
  "Options": {
    "property1": "string",
    "property2": "string"
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

<p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_SAMLOptionsOutput">SAMLOptionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemasamloptionsoutput"></a>
<a id="schema_SAMLOptionsOutput"></a>
<a id="tocSsamloptionsoutput"></a>
<a id="tocssamloptionsoutput"></a>

```json
{
  "Enabled": {},
  "Idp": {
    "MetadataContent": {},
    "EntityId": {}
  },
  "SubjectKey": {},
  "RolesKey": {},
  "SessionTimeoutMinutes": {}
}
```

Describes the SAML application configured for the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|Idp|object|false|none|none|
|SubjectKey|object|false|none|none|
|RolesKey|object|false|none|none|
|SessionTimeoutMinutes|object|false|none|none|

<h2 id="tocS_DisableTimestamp">DisableTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemadisabletimestamp"></a>
<a id="schema_DisableTimestamp"></a>
<a id="tocSdisabletimestamp"></a>
<a id="tocsdisabletimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AdvancedSecurityOptions">AdvancedSecurityOptions</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsecurityoptions"></a>
<a id="schema_AdvancedSecurityOptions"></a>
<a id="tocSadvancedsecurityoptions"></a>
<a id="tocsadvancedsecurityoptions"></a>

```json
{
  "Enabled": {},
  "InternalUserDatabaseEnabled": {},
  "SAMLOptions": {
    "Enabled": {},
    "Idp": {
      "MetadataContent": {},
      "EntityId": {}
    },
    "SubjectKey": {},
    "RolesKey": {},
    "SessionTimeoutMinutes": {}
  },
  "AnonymousAuthDisableDate": {},
  "AnonymousAuthEnabled": {}
}
```

Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|InternalUserDatabaseEnabled|object|false|none|none|
|SAMLOptions|object|false|none|none|
|AnonymousAuthDisableDate|object|false|none|none|
|AnonymousAuthEnabled|object|false|none|none|

<h2 id="tocS_AdvancedSecurityOptionsInput">AdvancedSecurityOptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsecurityoptionsinput"></a>
<a id="schema_AdvancedSecurityOptionsInput"></a>
<a id="tocSadvancedsecurityoptionsinput"></a>
<a id="tocsadvancedsecurityoptionsinput"></a>

```json
{
  "Enabled": {},
  "InternalUserDatabaseEnabled": {},
  "MasterUserOptions": {
    "MasterUserARN": {},
    "MasterUserName": {},
    "MasterUserPassword": {}
  },
  "SAMLOptions": {
    "Enabled": {},
    "Idp": {
      "MetadataContent": {},
      "EntityId": {}
    },
    "MasterUserName": {},
    "MasterBackendRole": {},
    "SubjectKey": {},
    "RolesKey": {},
    "SessionTimeoutMinutes": {}
  },
  "AnonymousAuthEnabled": {}
}
```

Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|InternalUserDatabaseEnabled|object|false|none|none|
|MasterUserOptions|object|false|none|none|
|SAMLOptions|object|false|none|none|
|AnonymousAuthEnabled|object|false|none|none|

<h2 id="tocS_AdvancedSecurityOptionsStatus">AdvancedSecurityOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaadvancedsecurityoptionsstatus"></a>
<a id="schema_AdvancedSecurityOptionsStatus"></a>
<a id="tocSadvancedsecurityoptionsstatus"></a>
<a id="tocsadvancedsecurityoptionsstatus"></a>

```json
{
  "Options": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthDisableDate": {},
    "AnonymousAuthEnabled": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Specifies the status of advanced security options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_PackageID">PackageID</h2>
<!-- backwards compatibility -->
<a id="schemapackageid"></a>
<a id="schema_PackageID"></a>
<a id="tocSpackageid"></a>
<a id="tocspackageid"></a>

```json
"string"
```

<h2 id="tocS_AssociatePackageRequest">AssociatePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatepackagerequest"></a>
<a id="schema_AssociatePackageRequest"></a>
<a id="tocSassociatepackagerequest"></a>
<a id="tocsassociatepackagerequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>AssociatePackage</a> </code> operation.

<h2 id="tocS_DomainPackageDetails">DomainPackageDetails</h2>
<!-- backwards compatibility -->
<a id="schemadomainpackagedetails"></a>
<a id="schema_DomainPackageDetails"></a>
<a id="tocSdomainpackagedetails"></a>
<a id="tocsdomainpackagedetails"></a>

```json
{
  "PackageID": {},
  "PackageName": {},
  "PackageType": {},
  "LastUpdated": {},
  "DomainName": {},
  "DomainPackageStatus": {},
  "PackageVersion": "string",
  "ReferencePath": {},
  "ErrorDetails": {
    "ErrorType": "string",
    "ErrorMessage": "string"
  }
}
```

Information on a package that is associated with a domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageID|object|false|none|none|
|PackageName|object|false|none|none|
|PackageType|object|false|none|none|
|LastUpdated|object|false|none|none|
|DomainName|object|false|none|none|
|DomainPackageStatus|object|false|none|none|
|PackageVersion|[PackageVersion](#schemapackageversion)|false|none|none|
|ReferencePath|object|false|none|none|
|ErrorDetails|object|false|none|none|

<h2 id="tocS_AuthorizeVpcEndpointAccessRequest">AuthorizeVpcEndpointAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizevpcendpointaccessrequest"></a>
<a id="schema_AuthorizeVpcEndpointAccessRequest"></a>
<a id="tocSauthorizevpcendpointaccessrequest"></a>
<a id="tocsauthorizevpcendpointaccessrequest"></a>

```json
{
  "Account": {}
}
```

Container for request parameters to the <code><a>AuthorizeVpcEndpointAccess</a></code> operation. Specifies the account to be permitted to manage VPC endpoints against the domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|true|none|none|

<h2 id="tocS_AuthorizedPrincipal">AuthorizedPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedprincipal"></a>
<a id="schema_AuthorizedPrincipal"></a>
<a id="tocSauthorizedprincipal"></a>
<a id="tocsauthorizedprincipal"></a>

```json
{
  "PrincipalType": {},
  "Principal": {}
}
```

Information about an account or service that has access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PrincipalType|object|false|none|none|
|Principal|object|false|none|none|

<h2 id="tocS_PrincipalType">PrincipalType</h2>
<!-- backwards compatibility -->
<a id="schemaprincipaltype"></a>
<a id="schema_PrincipalType"></a>
<a id="tocSprincipaltype"></a>
<a id="tocsprincipaltype"></a>

```json
"AWS_ACCOUNT"
```

Specifies the type of AWS account permitted to manage VPC endpoints.: <ul> <li>AWS_ACCOUNT: Indicates that the account is owned by an AWS user.</li> <li>AWS_SERVICE: Indicates the the account is owned by an AWS service.</li> </ul>

<h2 id="tocS_AuthorizedPrincipalList">AuthorizedPrincipalList</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizedprincipallist"></a>
<a id="schema_AuthorizedPrincipalList"></a>
<a id="tocSauthorizedprincipallist"></a>
<a id="tocsauthorizedprincipallist"></a>

```json
[
  {
    "PrincipalType": {},
    "Principal": {}
  }
]
```

<h2 id="tocS_AutoTuneType">AutoTuneType</h2>
<!-- backwards compatibility -->
<a id="schemaautotunetype"></a>
<a id="schema_AutoTuneType"></a>
<a id="tocSautotunetype"></a>
<a id="tocsautotunetype"></a>

```json
"SCHEDULED_ACTION"
```

Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION.

<h2 id="tocS_AutoTuneDetails">AutoTuneDetails</h2>
<!-- backwards compatibility -->
<a id="schemaautotunedetails"></a>
<a id="schema_AutoTuneDetails"></a>
<a id="tocSautotunedetails"></a>
<a id="tocsautotunedetails"></a>

```json
{
  "ScheduledAutoTuneDetails": {
    "Date": {},
    "ActionType": {},
    "Action": {},
    "Severity": {}
  }
}
```

Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledAutoTuneDetails|[ScheduledAutoTuneDetails](#schemascheduledautotunedetails)|false|none|Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. |

<h2 id="tocS_AutoTune">AutoTune</h2>
<!-- backwards compatibility -->
<a id="schemaautotune"></a>
<a id="schema_AutoTune"></a>
<a id="tocSautotune"></a>
<a id="tocsautotune"></a>

```json
{
  "AutoTuneType": {},
  "AutoTuneDetails": {
    "ScheduledAutoTuneDetails": {
      "Date": {},
      "ActionType": {},
      "Action": {},
      "Severity": {}
    }
  }
}
```

Specifies Auto-Tune type and Auto-Tune action details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoTuneType|object|false|none|none|
|AutoTuneDetails|object|false|none|none|

<h2 id="tocS_AutoTuneDate">AutoTuneDate</h2>
<!-- backwards compatibility -->
<a id="schemaautotunedate"></a>
<a id="schema_AutoTuneDate"></a>
<a id="tocSautotunedate"></a>
<a id="tocsautotunedate"></a>

```json
"1970-01-01T00:00:00Z"
```

Specifies timestamp for the Auto-Tune action scheduled for the domain.

<h2 id="tocS_ScheduledAutoTuneDetails">ScheduledAutoTuneDetails</h2>
<!-- backwards compatibility -->
<a id="schemascheduledautotunedetails"></a>
<a id="schema_ScheduledAutoTuneDetails"></a>
<a id="tocSscheduledautotunedetails"></a>
<a id="tocsscheduledautotunedetails"></a>

```json
{
  "Date": {},
  "ActionType": {},
  "Action": {},
  "Severity": {}
}
```

Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|object|false|none|none|
|ActionType|object|false|none|none|
|Action|object|false|none|none|
|Severity|object|false|none|none|

<h2 id="tocS_AutoTuneList">AutoTuneList</h2>
<!-- backwards compatibility -->
<a id="schemaautotunelist"></a>
<a id="schema_AutoTuneList"></a>
<a id="tocSautotunelist"></a>
<a id="tocsautotunelist"></a>

```json
[
  {
    "AutoTuneType": {},
    "AutoTuneDetails": {
      "ScheduledAutoTuneDetails": {
        "Date": {},
        "ActionType": {},
        "Action": {},
        "Severity": {}
      }
    }
  }
]
```

<h2 id="tocS_StartAt">StartAt</h2>
<!-- backwards compatibility -->
<a id="schemastartat"></a>
<a id="schema_StartAt"></a>
<a id="tocSstartat"></a>
<a id="tocsstartat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
{
  "Value": {},
  "Unit": {}
}
```

Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Value|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_AutoTuneMaintenanceSchedule">AutoTuneMaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemaautotunemaintenanceschedule"></a>
<a id="schema_AutoTuneMaintenanceSchedule"></a>
<a id="tocSautotunemaintenanceschedule"></a>
<a id="tocsautotunemaintenanceschedule"></a>

```json
{
  "StartAt": {},
  "Duration": {
    "Value": {},
    "Unit": {}
  },
  "CronExpressionForRecurrence": {}
}
```

Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartAt|object|false|none|none|
|Duration|object|false|none|none|
|CronExpressionForRecurrence|object|false|none|none|

<h2 id="tocS_AutoTuneOptions">AutoTuneOptions</h2>
<!-- backwards compatibility -->
<a id="schemaautotuneoptions"></a>
<a id="schema_AutoTuneOptions"></a>
<a id="tocSautotuneoptions"></a>
<a id="tocsautotuneoptions"></a>

```json
{
  "DesiredState": {},
  "RollbackOnDisable": {},
  "MaintenanceSchedules": {}
}
```

Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredState|object|false|none|none|
|RollbackOnDisable|object|false|none|none|
|MaintenanceSchedules|object|false|none|none|

<h2 id="tocS_AutoTuneOptionsInput">AutoTuneOptionsInput</h2>
<!-- backwards compatibility -->
<a id="schemaautotuneoptionsinput"></a>
<a id="schema_AutoTuneOptionsInput"></a>
<a id="tocSautotuneoptionsinput"></a>
<a id="tocsautotuneoptionsinput"></a>

```json
{
  "DesiredState": {},
  "MaintenanceSchedules": {}
}
```

Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DesiredState|object|false|none|none|
|MaintenanceSchedules|object|false|none|none|

<h2 id="tocS_AutoTuneState">AutoTuneState</h2>
<!-- backwards compatibility -->
<a id="schemaautotunestate"></a>
<a id="schema_AutoTuneState"></a>
<a id="tocSautotunestate"></a>
<a id="tocsautotunestate"></a>

```json
"ENABLED"
```

Specifies the Auto-Tune state for the Elasticsearch domain. For valid states see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a>.

<h2 id="tocS_AutoTuneOptionsOutput">AutoTuneOptionsOutput</h2>
<!-- backwards compatibility -->
<a id="schemaautotuneoptionsoutput"></a>
<a id="schema_AutoTuneOptionsOutput"></a>
<a id="tocSautotuneoptionsoutput"></a>
<a id="tocsautotuneoptionsoutput"></a>

```json
{
  "State": {},
  "ErrorMessage": {}
}
```

Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|State|object|false|none|none|
|ErrorMessage|object|false|none|none|

<h2 id="tocS_AutoTuneStatus">AutoTuneStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautotunestatus"></a>
<a id="schema_AutoTuneStatus"></a>
<a id="tocSautotunestatus"></a>
<a id="tocsautotunestatus"></a>

```json
{
  "CreationDate": {},
  "UpdateDate": {},
  "UpdateVersion": {},
  "State": {},
  "ErrorMessage": {},
  "PendingDeletion": {}
}
```

Provides the current status of the Auto-Tune options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreationDate|object|true|none|none|
|UpdateDate|object|true|none|none|
|UpdateVersion|object|false|none|none|
|State|object|true|none|none|
|ErrorMessage|object|false|none|none|
|PendingDeletion|object|false|none|none|

<h2 id="tocS_AutoTuneOptionsStatus">AutoTuneOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautotuneoptionsstatus"></a>
<a id="schema_AutoTuneOptionsStatus"></a>
<a id="tocSautotuneoptionsstatus"></a>
<a id="tocsautotuneoptionsstatus"></a>

```json
{
  "Options": {
    "DesiredState": {},
    "RollbackOnDisable": {},
    "MaintenanceSchedules": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "ErrorMessage": {},
    "PendingDeletion": {}
  }
}
```

 Specifies the status of Auto-Tune options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_UpdateTimestamp">UpdateTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetimestamp"></a>
<a id="schema_UpdateTimestamp"></a>
<a id="tocSupdatetimestamp"></a>
<a id="tocsupdatetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_UIntValue">UIntValue</h2>
<!-- backwards compatibility -->
<a id="schemauintvalue"></a>
<a id="schema_UIntValue"></a>
<a id="tocSuintvalue"></a>
<a id="tocsuintvalue"></a>

```json
0
```

<h2 id="tocS_BackendRole">BackendRole</h2>
<!-- backwards compatibility -->
<a id="schemabackendrole"></a>
<a id="schema_BackendRole"></a>
<a id="tocSbackendrole"></a>
<a id="tocsbackendrole"></a>

```json
"string"
```

<h2 id="tocS_CancelElasticsearchServiceSoftwareUpdateRequest">CancelElasticsearchServiceSoftwareUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelelasticsearchservicesoftwareupdaterequest"></a>
<a id="schema_CancelElasticsearchServiceSoftwareUpdateRequest"></a>
<a id="tocScancelelasticsearchservicesoftwareupdaterequest"></a>
<a id="tocscancelelasticsearchservicesoftwareupdaterequest"></a>

```json
{
  "DomainName": {}
}
```

Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_ServiceSoftwareOptions">ServiceSoftwareOptions</h2>
<!-- backwards compatibility -->
<a id="schemaservicesoftwareoptions"></a>
<a id="schema_ServiceSoftwareOptions"></a>
<a id="tocSservicesoftwareoptions"></a>
<a id="tocsservicesoftwareoptions"></a>

```json
{
  "CurrentVersion": {},
  "NewVersion": {},
  "UpdateAvailable": {},
  "Cancellable": {},
  "UpdateStatus": {},
  "Description": {},
  "AutomatedUpdateDate": {},
  "OptionalDeployment": {}
}
```

The current options of an Elasticsearch domain service software options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CurrentVersion|object|false|none|none|
|NewVersion|object|false|none|none|
|UpdateAvailable|object|false|none|none|
|Cancellable|object|false|none|none|
|UpdateStatus|object|false|none|none|
|Description|object|false|none|none|
|AutomatedUpdateDate|object|false|none|none|
|OptionalDeployment|object|false|none|none|

<h2 id="tocS_GUID">GUID</h2>
<!-- backwards compatibility -->
<a id="schemaguid"></a>
<a id="schema_GUID"></a>
<a id="tocSguid"></a>
<a id="tocsguid"></a>

```json
"string"
```

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
"string"
```

<h2 id="tocS_ChangeProgressDetails">ChangeProgressDetails</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressdetails"></a>
<a id="schema_ChangeProgressDetails"></a>
<a id="tocSchangeprogressdetails"></a>
<a id="tocschangeprogressdetails"></a>

```json
{
  "ChangeId": {},
  "Message": {}
}
```

Specifies change details of the domain configuration change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeId|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_ChangeProgressStageName">ChangeProgressStageName</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressstagename"></a>
<a id="schema_ChangeProgressStageName"></a>
<a id="tocSchangeprogressstagename"></a>
<a id="tocschangeprogressstagename"></a>

```json
"string"
```

<h2 id="tocS_ChangeProgressStageStatus">ChangeProgressStageStatus</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressstagestatus"></a>
<a id="schema_ChangeProgressStageStatus"></a>
<a id="tocSchangeprogressstagestatus"></a>
<a id="tocschangeprogressstagestatus"></a>

```json
"string"
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_LastUpdated">LastUpdated</h2>
<!-- backwards compatibility -->
<a id="schemalastupdated"></a>
<a id="schema_LastUpdated"></a>
<a id="tocSlastupdated"></a>
<a id="tocslastupdated"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_ChangeProgressStage">ChangeProgressStage</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressstage"></a>
<a id="schema_ChangeProgressStage"></a>
<a id="tocSchangeprogressstage"></a>
<a id="tocschangeprogressstage"></a>

```json
{
  "Name": {},
  "Status": {},
  "Description": {},
  "LastUpdated": {}
}
```

A progress stage details of a specific domain configuration change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Status|object|false|none|none|
|Description|object|false|none|none|
|LastUpdated|object|false|none|none|

<h2 id="tocS_ChangeProgressStageList">ChangeProgressStageList</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressstagelist"></a>
<a id="schema_ChangeProgressStageList"></a>
<a id="tocSchangeprogressstagelist"></a>
<a id="tocschangeprogressstagelist"></a>

```json
[
  {
    "Name": {},
    "Status": {},
    "Description": {},
    "LastUpdated": {}
  }
]
```

The list of progress stages of a specific domain configuration change.

<h2 id="tocS_OverallChangeStatus">OverallChangeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoverallchangestatus"></a>
<a id="schema_OverallChangeStatus"></a>
<a id="tocSoverallchangestatus"></a>
<a id="tocsoverallchangestatus"></a>

```json
"PENDING"
```

The overall status value of the domain configuration change.

<h2 id="tocS_TotalNumberOfStages">TotalNumberOfStages</h2>
<!-- backwards compatibility -->
<a id="schematotalnumberofstages"></a>
<a id="schema_TotalNumberOfStages"></a>
<a id="tocStotalnumberofstages"></a>
<a id="tocstotalnumberofstages"></a>

```json
0
```

<h2 id="tocS_ChangeProgressStatusDetails">ChangeProgressStatusDetails</h2>
<!-- backwards compatibility -->
<a id="schemachangeprogressstatusdetails"></a>
<a id="schema_ChangeProgressStatusDetails"></a>
<a id="tocSchangeprogressstatusdetails"></a>
<a id="tocschangeprogressstatusdetails"></a>

```json
{
  "ChangeId": {},
  "StartTime": {},
  "Status": {},
  "PendingProperties": {},
  "CompletedProperties": {},
  "TotalNumberOfStages": {},
  "ChangeProgressStages": {}
}
```

The progress details of a specific domain configuration change.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChangeId|object|false|none|none|
|StartTime|object|false|none|none|
|Status|object|false|none|none|
|PendingProperties|object|false|none|none|
|CompletedProperties|object|false|none|none|
|TotalNumberOfStages|object|false|none|none|
|ChangeProgressStages|object|false|none|none|

<h2 id="tocS_ClientToken">ClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaclienttoken"></a>
<a id="schema_ClientToken"></a>
<a id="tocSclienttoken"></a>
<a id="tocsclienttoken"></a>

```json
"string"
```

<h2 id="tocS_CloudWatchLogsLogGroupArn">CloudWatchLogsLogGroupArn</h2>
<!-- backwards compatibility -->
<a id="schemacloudwatchlogsloggrouparn"></a>
<a id="schema_CloudWatchLogsLogGroupArn"></a>
<a id="tocScloudwatchlogsloggrouparn"></a>
<a id="tocscloudwatchlogsloggrouparn"></a>

```json
"string"
```

ARN of the Cloudwatch log group to which log needs to be published.

<h2 id="tocS_CognitoOptions">CognitoOptions</h2>
<!-- backwards compatibility -->
<a id="schemacognitooptions"></a>
<a id="schema_CognitoOptions"></a>
<a id="tocScognitooptions"></a>
<a id="tocscognitooptions"></a>

```json
{
  "Enabled": {},
  "UserPoolId": {},
  "IdentityPoolId": {},
  "RoleArn": {}
}
```

Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|UserPoolId|object|false|none|none|
|IdentityPoolId|object|false|none|none|
|RoleArn|object|false|none|none|

<h2 id="tocS_CognitoOptionsStatus">CognitoOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemacognitooptionsstatus"></a>
<a id="schema_CognitoOptionsStatus"></a>
<a id="tocScognitooptionsstatus"></a>
<a id="tocscognitooptionsstatus"></a>

```json
{
  "Options": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

Status of the Cognito options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_CommitMessage">CommitMessage</h2>
<!-- backwards compatibility -->
<a id="schemacommitmessage"></a>
<a id="schema_CommitMessage"></a>
<a id="tocScommitmessage"></a>
<a id="tocscommitmessage"></a>

```json
"string"
```

<h2 id="tocS_CompatibleVersionsMap">CompatibleVersionsMap</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleversionsmap"></a>
<a id="schema_CompatibleVersionsMap"></a>
<a id="tocScompatibleversionsmap"></a>
<a id="tocscompatibleversionsmap"></a>

```json
{
  "SourceVersion": {},
  "TargetVersions": [
    "string"
  ]
}
```

 A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceVersion|object|false|none|none|
|TargetVersions|[ElasticsearchVersionList](#schemaelasticsearchversionlist)|false|none|List of supported elastic search versions. |

<h2 id="tocS_CompatibleElasticsearchVersionsList">CompatibleElasticsearchVersionsList</h2>
<!-- backwards compatibility -->
<a id="schemacompatibleelasticsearchversionslist"></a>
<a id="schema_CompatibleElasticsearchVersionsList"></a>
<a id="tocScompatibleelasticsearchversionslist"></a>
<a id="tocscompatibleelasticsearchversionslist"></a>

```json
[
  {
    "SourceVersion": {},
    "TargetVersions": [
      "string"
    ]
  }
]
```

<h2 id="tocS_ElasticsearchVersionString">ElasticsearchVersionString</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchversionstring"></a>
<a id="schema_ElasticsearchVersionString"></a>
<a id="tocSelasticsearchversionstring"></a>
<a id="tocselasticsearchversionstring"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchVersionList">ElasticsearchVersionList</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchversionlist"></a>
<a id="schema_ElasticsearchVersionList"></a>
<a id="tocSelasticsearchversionlist"></a>
<a id="tocselasticsearchversionlist"></a>

```json
[
  "string"
]
```

List of supported elastic search versions.

<h2 id="tocS_ConnectionAlias">ConnectionAlias</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionalias"></a>
<a id="schema_ConnectionAlias"></a>
<a id="tocSconnectionalias"></a>
<a id="tocsconnectionalias"></a>

```json
"string"
```

<h2 id="tocS_ElasticsearchClusterConfig">ElasticsearchClusterConfig</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchclusterconfig"></a>
<a id="schema_ElasticsearchClusterConfig"></a>
<a id="tocSelasticsearchclusterconfig"></a>
<a id="tocselasticsearchclusterconfig"></a>

```json
{
  "InstanceType": {},
  "InstanceCount": {},
  "DedicatedMasterEnabled": {},
  "ZoneAwarenessEnabled": {},
  "ZoneAwarenessConfig": {
    "AvailabilityZoneCount": {}
  },
  "DedicatedMasterType": {},
  "DedicatedMasterCount": {},
  "WarmEnabled": {},
  "WarmType": {},
  "WarmCount": {},
  "ColdStorageOptions": {
    "Enabled": {}
  }
}
```

Specifies the configuration for the domain cluster, such as the type and number of instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceType|object|false|none|none|
|InstanceCount|object|false|none|none|
|DedicatedMasterEnabled|object|false|none|none|
|ZoneAwarenessEnabled|object|false|none|none|
|ZoneAwarenessConfig|object|false|none|none|
|DedicatedMasterType|object|false|none|none|
|DedicatedMasterCount|object|false|none|none|
|WarmEnabled|object|false|none|none|
|WarmType|object|false|none|none|
|WarmCount|object|false|none|none|
|ColdStorageOptions|object|false|none|none|

<h2 id="tocS_EBSOptions">EBSOptions</h2>
<!-- backwards compatibility -->
<a id="schemaebsoptions"></a>
<a id="schema_EBSOptions"></a>
<a id="tocSebsoptions"></a>
<a id="tocsebsoptions"></a>

```json
{
  "EBSEnabled": {},
  "VolumeType": {},
  "VolumeSize": {},
  "Iops": {},
  "Throughput": {}
}
```

Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EBSEnabled|object|false|none|none|
|VolumeType|object|false|none|none|
|VolumeSize|object|false|none|none|
|Iops|object|false|none|none|
|Throughput|object|false|none|none|

<h2 id="tocS_SnapshotOptions">SnapshotOptions</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotoptions"></a>
<a id="schema_SnapshotOptions"></a>
<a id="tocSsnapshotoptions"></a>
<a id="tocssnapshotoptions"></a>

```json
{
  "AutomatedSnapshotStartHour": {}
}
```

Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutomatedSnapshotStartHour|object|false|none|none|

<h2 id="tocS_VPCOptions">VPCOptions</h2>
<!-- backwards compatibility -->
<a id="schemavpcoptions"></a>
<a id="schema_VPCOptions"></a>
<a id="tocSvpcoptions"></a>
<a id="tocsvpcoptions"></a>

```json
{
  "SubnetIds": {},
  "SecurityGroupIds": {}
}
```

Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubnetIds|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_EncryptionAtRestOptions">EncryptionAtRestOptions</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionatrestoptions"></a>
<a id="schema_EncryptionAtRestOptions"></a>
<a id="tocSencryptionatrestoptions"></a>
<a id="tocsencryptionatrestoptions"></a>

```json
{
  "Enabled": {},
  "KmsKeyId": {}
}
```

Specifies the Encryption At Rest Options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|
|KmsKeyId|object|false|none|none|

<h2 id="tocS_NodeToNodeEncryptionOptions">NodeToNodeEncryptionOptions</h2>
<!-- backwards compatibility -->
<a id="schemanodetonodeencryptionoptions"></a>
<a id="schema_NodeToNodeEncryptionOptions"></a>
<a id="tocSnodetonodeencryptionoptions"></a>
<a id="tocsnodetonodeencryptionoptions"></a>

```json
{
  "Enabled": {}
}
```

Specifies the node-to-node encryption options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Enabled|object|false|none|none|

<h2 id="tocS_LogPublishingOptions">LogPublishingOptions</h2>
<!-- backwards compatibility -->
<a id="schemalogpublishingoptions"></a>
<a id="schema_LogPublishingOptions"></a>
<a id="tocSlogpublishingoptions"></a>
<a id="tocslogpublishingoptions"></a>

```json
{
  "property1": {
    "CloudWatchLogsLogGroupArn": "string",
    "Enabled": {}
  },
  "property2": {
    "CloudWatchLogsLogGroupArn": "string",
    "Enabled": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[LogPublishingOption](#schemalogpublishingoption)|false|none|Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> |

<h2 id="tocS_DomainEndpointOptions">DomainEndpointOptions</h2>
<!-- backwards compatibility -->
<a id="schemadomainendpointoptions"></a>
<a id="schema_DomainEndpointOptions"></a>
<a id="tocSdomainendpointoptions"></a>
<a id="tocsdomainendpointoptions"></a>

```json
{
  "EnforceHTTPS": {},
  "TLSSecurityPolicy": {},
  "CustomEndpointEnabled": {},
  "CustomEndpoint": {},
  "CustomEndpointCertificateArn": {}
}
```

Options to configure endpoint for the Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EnforceHTTPS|object|false|none|none|
|TLSSecurityPolicy|object|false|none|none|
|CustomEndpointEnabled|object|false|none|none|
|CustomEndpoint|object|false|none|none|
|CustomEndpointCertificateArn|object|false|none|none|

<h2 id="tocS_CreateElasticsearchDomainRequest">CreateElasticsearchDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateelasticsearchdomainrequest"></a>
<a id="schema_CreateElasticsearchDomainRequest"></a>
<a id="tocScreateelasticsearchdomainrequest"></a>
<a id="tocscreateelasticsearchdomainrequest"></a>

```json
{
  "DomainName": {},
  "ElasticsearchVersion": {},
  "ElasticsearchClusterConfig": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "EBSOptions": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "AccessPolicies": {},
  "SnapshotOptions": {
    "AutomatedSnapshotStartHour": {}
  },
  "VPCOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CognitoOptions": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "EncryptionAtRestOptions": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "NodeToNodeEncryptionOptions": {
    "Enabled": {}
  },
  "AdvancedOptions": {
    "property1": "string",
    "property2": "string"
  },
  "LogPublishingOptions": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "AdvancedSecurityOptions": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "MasterUserOptions": {
      "MasterUserARN": {},
      "MasterUserName": {},
      "MasterUserPassword": {}
    },
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "MasterUserName": {},
      "MasterBackendRole": {},
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthEnabled": {}
  },
  "AutoTuneOptions": {
    "DesiredState": {},
    "MaintenanceSchedules": {}
  },
  "TagList": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|ElasticsearchVersion|object|false|none|none|
|ElasticsearchClusterConfig|object|false|none|none|
|EBSOptions|object|false|none|none|
|AccessPolicies|object|false|none|none|
|SnapshotOptions|object|false|none|none|
|VPCOptions|object|false|none|none|
|CognitoOptions|object|false|none|none|
|EncryptionAtRestOptions|object|false|none|none|
|NodeToNodeEncryptionOptions|object|false|none|none|
|AdvancedOptions|object|false|none|none|
|LogPublishingOptions|object|false|none|none|
|DomainEndpointOptions|object|false|none|none|
|AdvancedSecurityOptions|object|false|none|none|
|AutoTuneOptions|object|false|none|none|
|TagList|object|false|none|none|

<h2 id="tocS_ElasticsearchDomainStatus">ElasticsearchDomainStatus</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdomainstatus"></a>
<a id="schema_ElasticsearchDomainStatus"></a>
<a id="tocSelasticsearchdomainstatus"></a>
<a id="tocselasticsearchdomainstatus"></a>

```json
{
  "DomainId": {},
  "DomainName": {},
  "ARN": {},
  "Created": {},
  "Deleted": {},
  "Endpoint": {},
  "Endpoints": {
    "property1": "string",
    "property2": "string"
  },
  "Processing": {},
  "UpgradeProcessing": {},
  "ElasticsearchVersion": "string",
  "ElasticsearchClusterConfig": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "EBSOptions": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "AccessPolicies": {},
  "SnapshotOptions": {
    "AutomatedSnapshotStartHour": {}
  },
  "VPCOptions": {
    "VPCId": {},
    "SubnetIds": {},
    "AvailabilityZones": {},
    "SecurityGroupIds": {}
  },
  "CognitoOptions": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "EncryptionAtRestOptions": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "NodeToNodeEncryptionOptions": {
    "Enabled": {}
  },
  "AdvancedOptions": {
    "property1": "string",
    "property2": "string"
  },
  "LogPublishingOptions": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "ServiceSoftwareOptions": {
    "CurrentVersion": {},
    "NewVersion": {},
    "UpdateAvailable": {},
    "Cancellable": {},
    "UpdateStatus": {},
    "Description": {},
    "AutomatedUpdateDate": {},
    "OptionalDeployment": {}
  },
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "AdvancedSecurityOptions": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthDisableDate": {},
    "AnonymousAuthEnabled": {}
  },
  "AutoTuneOptions": {
    "State": {},
    "ErrorMessage": {}
  },
  "ChangeProgressDetails": {
    "ChangeId": {},
    "Message": {}
  }
}
```

The current status of an Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainId|object|true|none|none|
|DomainName|object|true|none|none|
|ARN|object|true|none|none|
|Created|object|false|none|none|
|Deleted|object|false|none|none|
|Endpoint|object|false|none|none|
|Endpoints|object|false|none|none|
|Processing|object|false|none|none|
|UpgradeProcessing|object|false|none|none|
|ElasticsearchVersion|[ElasticsearchVersionString](#schemaelasticsearchversionstring)|false|none|none|
|ElasticsearchClusterConfig|object|true|none|none|
|EBSOptions|object|false|none|none|
|AccessPolicies|object|false|none|none|
|SnapshotOptions|object|false|none|none|
|VPCOptions|object|false|none|none|
|CognitoOptions|object|false|none|none|
|EncryptionAtRestOptions|object|false|none|none|
|NodeToNodeEncryptionOptions|object|false|none|none|
|AdvancedOptions|object|false|none|none|
|LogPublishingOptions|object|false|none|none|
|ServiceSoftwareOptions|object|false|none|none|
|DomainEndpointOptions|object|false|none|none|
|AdvancedSecurityOptions|object|false|none|none|
|AutoTuneOptions|object|false|none|none|
|ChangeProgressDetails|object|false|none|none|

<h2 id="tocS_DomainInformation">DomainInformation</h2>
<!-- backwards compatibility -->
<a id="schemadomaininformation"></a>
<a id="schema_DomainInformation"></a>
<a id="tocSdomaininformation"></a>
<a id="tocsdomaininformation"></a>

```json
{
  "OwnerId": "stringstring",
  "DomainName": "string",
  "Region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OwnerId|[OwnerId](#schemaownerid)|false|none|none|
|DomainName|[DomainName](#schemadomainname)|true|none|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|Region|[Region](#schemaregion)|false|none|none|

<h2 id="tocS_CreateOutboundCrossClusterSearchConnectionRequest">CreateOutboundCrossClusterSearchConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateoutboundcrossclustersearchconnectionrequest"></a>
<a id="schema_CreateOutboundCrossClusterSearchConnectionRequest"></a>
<a id="tocScreateoutboundcrossclustersearchconnectionrequest"></a>
<a id="tocscreateoutboundcrossclustersearchconnectionrequest"></a>

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "ConnectionAlias": {}
}
```

Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDomainInfo|object|true|none|none|
|DestinationDomainInfo|object|true|none|none|
|ConnectionAlias|object|true|none|none|

<h2 id="tocS_OutboundCrossClusterSearchConnectionStatus">OutboundCrossClusterSearchConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcrossclustersearchconnectionstatus"></a>
<a id="schema_OutboundCrossClusterSearchConnectionStatus"></a>
<a id="tocSoutboundcrossclustersearchconnectionstatus"></a>
<a id="tocsoutboundcrossclustersearchconnectionstatus"></a>

```json
{
  "StatusCode": {},
  "Message": {}
}
```

Specifies the connection status of an outbound cross-cluster search connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_PackageName">PackageName</h2>
<!-- backwards compatibility -->
<a id="schemapackagename"></a>
<a id="schema_PackageName"></a>
<a id="tocSpackagename"></a>
<a id="tocspackagename"></a>

```json
"string"
```

<h2 id="tocS_PackageType">PackageType</h2>
<!-- backwards compatibility -->
<a id="schemapackagetype"></a>
<a id="schema_PackageType"></a>
<a id="tocSpackagetype"></a>
<a id="tocspackagetype"></a>

```json
"TXT-DICTIONARY"
```

<h2 id="tocS_PackageDescription">PackageDescription</h2>
<!-- backwards compatibility -->
<a id="schemapackagedescription"></a>
<a id="schema_PackageDescription"></a>
<a id="tocSpackagedescription"></a>
<a id="tocspackagedescription"></a>

```json
"string"
```

<h2 id="tocS_PackageSource">PackageSource</h2>
<!-- backwards compatibility -->
<a id="schemapackagesource"></a>
<a id="schema_PackageSource"></a>
<a id="tocSpackagesource"></a>
<a id="tocspackagesource"></a>

```json
{
  "S3BucketName": {},
  "S3Key": {}
}
```

The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S3BucketName|object|false|none|none|
|S3Key|object|false|none|none|

<h2 id="tocS_CreatePackageRequest">CreatePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepackagerequest"></a>
<a id="schema_CreatePackageRequest"></a>
<a id="tocScreatepackagerequest"></a>
<a id="tocscreatepackagerequest"></a>

```json
{
  "PackageName": {},
  "PackageType": {},
  "PackageDescription": {},
  "PackageSource": {
    "S3BucketName": {},
    "S3Key": {}
  }
}
```

 Container for request parameters to <code> <a>CreatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageName|object|true|none|none|
|PackageType|object|true|none|none|
|PackageDescription|object|false|none|none|
|PackageSource|object|true|none|none|

<h2 id="tocS_PackageDetails">PackageDetails</h2>
<!-- backwards compatibility -->
<a id="schemapackagedetails"></a>
<a id="schema_PackageDetails"></a>
<a id="tocSpackagedetails"></a>
<a id="tocspackagedetails"></a>

```json
{
  "PackageID": {},
  "PackageName": {},
  "PackageType": {},
  "PackageDescription": {},
  "PackageStatus": {},
  "CreatedAt": {},
  "LastUpdatedAt": "1970-01-01T00:00:00Z",
  "AvailablePackageVersion": "string",
  "ErrorDetails": {
    "ErrorType": "string",
    "ErrorMessage": "string"
  }
}
```

Basic information about a package.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageID|object|false|none|none|
|PackageName|object|false|none|none|
|PackageType|object|false|none|none|
|PackageDescription|object|false|none|none|
|PackageStatus|object|false|none|none|
|CreatedAt|object|false|none|none|
|LastUpdatedAt|[LastUpdated](#schemalastupdated)|false|none|none|
|AvailablePackageVersion|[PackageVersion](#schemapackageversion)|false|none|none|
|ErrorDetails|object|false|none|none|

<h2 id="tocS_DomainArn">DomainArn</h2>
<!-- backwards compatibility -->
<a id="schemadomainarn"></a>
<a id="schema_DomainArn"></a>
<a id="tocSdomainarn"></a>
<a id="tocsdomainarn"></a>

```json
"string"
```

<h2 id="tocS_CreateVpcEndpointRequest">CreateVpcEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcendpointrequest"></a>
<a id="schema_CreateVpcEndpointRequest"></a>
<a id="tocScreatevpcendpointrequest"></a>
<a id="tocscreatevpcendpointrequest"></a>

```json
{
  "DomainArn": {},
  "VpcOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "ClientToken": {}
}
```

Container for the parameters to the <code><a>CreateVpcEndpointRequest</a></code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainArn|object|true|none|none|
|VpcOptions|object|true|none|none|
|ClientToken|object|false|none|none|

<h2 id="tocS_VpcEndpoint">VpcEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpoint"></a>
<a id="schema_VpcEndpoint"></a>
<a id="tocSvpcendpoint"></a>
<a id="tocsvpcendpoint"></a>

```json
{
  "VpcEndpointId": {},
  "VpcEndpointOwner": {},
  "DomainArn": {},
  "VpcOptions": {
    "VPCId": {},
    "SubnetIds": {},
    "AvailabilityZones": {},
    "SecurityGroupIds": {}
  },
  "Status": {},
  "Endpoint": {}
}
```

The connection endpoint for connecting to an Amazon OpenSearch Service domain through a proxy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointId|object|false|none|none|
|VpcEndpointOwner|object|false|none|none|
|DomainArn|object|false|none|none|
|VpcOptions|object|false|none|none|
|Status|object|false|none|none|
|Endpoint|object|false|none|none|

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_CrossClusterSearchConnectionStatusMessage">CrossClusterSearchConnectionStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemacrossclustersearchconnectionstatusmessage"></a>
<a id="schema_CrossClusterSearchConnectionStatusMessage"></a>
<a id="tocScrossclustersearchconnectionstatusmessage"></a>
<a id="tocscrossclustersearchconnectionstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_DeleteElasticsearchDomainRequest">DeleteElasticsearchDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteelasticsearchdomainrequest"></a>
<a id="schema_DeleteElasticsearchDomainRequest"></a>
<a id="tocSdeleteelasticsearchdomainrequest"></a>
<a id="tocsdeleteelasticsearchdomainrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.

<h2 id="tocS_DeleteInboundCrossClusterSearchConnectionRequest">DeleteInboundCrossClusterSearchConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteinboundcrossclustersearchconnectionrequest"></a>
<a id="schema_DeleteInboundCrossClusterSearchConnectionRequest"></a>
<a id="tocSdeleteinboundcrossclustersearchconnectionrequest"></a>
<a id="tocsdeleteinboundcrossclustersearchconnectionrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.

<h2 id="tocS_DeleteOutboundCrossClusterSearchConnectionRequest">DeleteOutboundCrossClusterSearchConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoutboundcrossclustersearchconnectionrequest"></a>
<a id="schema_DeleteOutboundCrossClusterSearchConnectionRequest"></a>
<a id="tocSdeleteoutboundcrossclustersearchconnectionrequest"></a>
<a id="tocsdeleteoutboundcrossclustersearchconnectionrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.

<h2 id="tocS_OutboundCrossClusterSearchConnection">OutboundCrossClusterSearchConnection</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcrossclustersearchconnection"></a>
<a id="schema_OutboundCrossClusterSearchConnection"></a>
<a id="tocSoutboundcrossclustersearchconnection"></a>
<a id="tocsoutboundcrossclustersearchconnection"></a>

```json
{
  "SourceDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "DestinationDomainInfo": {
    "OwnerId": "stringstring",
    "DomainName": "string",
    "Region": "string"
  },
  "CrossClusterSearchConnectionId": {},
  "ConnectionAlias": {},
  "ConnectionStatus": {
    "StatusCode": {},
    "Message": {}
  }
}
```

Specifies details of an outbound connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceDomainInfo|object|false|none|none|
|DestinationDomainInfo|object|false|none|none|
|CrossClusterSearchConnectionId|object|false|none|none|
|ConnectionAlias|object|false|none|none|
|ConnectionStatus|object|false|none|none|

<h2 id="tocS_DeletePackageRequest">DeletePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepackagerequest"></a>
<a id="schema_DeletePackageRequest"></a>
<a id="tocSdeletepackagerequest"></a>
<a id="tocsdeletepackagerequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>DeletePackage</a> </code> operation.

<h2 id="tocS_DeleteVpcEndpointRequest">DeleteVpcEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcendpointrequest"></a>
<a id="schema_DeleteVpcEndpointRequest"></a>
<a id="tocSdeletevpcendpointrequest"></a>
<a id="tocsdeletevpcendpointrequest"></a>

```json
{}
```

Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.

<h2 id="tocS_VpcEndpointSummary">VpcEndpointSummary</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointsummary"></a>
<a id="schema_VpcEndpointSummary"></a>
<a id="tocSvpcendpointsummary"></a>
<a id="tocsvpcendpointsummary"></a>

```json
{
  "VpcEndpointId": {},
  "VpcEndpointOwner": {},
  "DomainArn": {},
  "Status": {}
}
```

Summary information for an Amazon OpenSearch Service-managed VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointId|object|false|none|none|
|VpcEndpointOwner|object|false|none|none|
|DomainArn|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_DeploymentCloseDateTimeStamp">DeploymentCloseDateTimeStamp</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentclosedatetimestamp"></a>
<a id="schema_DeploymentCloseDateTimeStamp"></a>
<a id="tocSdeploymentclosedatetimestamp"></a>
<a id="tocsdeploymentclosedatetimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_DeploymentStatus">DeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemadeploymentstatus"></a>
<a id="schema_DeploymentStatus"></a>
<a id="tocSdeploymentstatus"></a>
<a id="tocsdeploymentstatus"></a>

```json
"PENDING_UPDATE"
```

<h2 id="tocS_DeploymentType">DeploymentType</h2>
<!-- backwards compatibility -->
<a id="schemadeploymenttype"></a>
<a id="schema_DeploymentType"></a>
<a id="tocSdeploymenttype"></a>
<a id="tocsdeploymenttype"></a>

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
0
```

 Set this value to limit the number of results returned.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

 Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.

<h2 id="tocS_DescribeDomainAutoTunesRequest">DescribeDomainAutoTunesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainautotunesrequest"></a>
<a id="schema_DescribeDomainAutoTunesRequest"></a>
<a id="tocSdescribedomainautotunesrequest"></a>
<a id="tocsdescribedomainautotunesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeDomainChangeProgressRequest">DescribeDomainChangeProgressRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribedomainchangeprogressrequest"></a>
<a id="schema_DescribeDomainChangeProgressRequest"></a>
<a id="tocSdescribedomainchangeprogressrequest"></a>
<a id="tocsdescribedomainchangeprogressrequest"></a>

```json
{}
```

Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the domain name and optional change specific identity for which you want progress information.

<h2 id="tocS_DescribeElasticsearchDomainConfigRequest">DescribeElasticsearchDomainConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainconfigrequest"></a>
<a id="schema_DescribeElasticsearchDomainConfigRequest"></a>
<a id="tocSdescribeelasticsearchdomainconfigrequest"></a>
<a id="tocsdescribeelasticsearchdomainconfigrequest"></a>

```json
{}
```

 Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.

<h2 id="tocS_ElasticsearchDomainConfig">ElasticsearchDomainConfig</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdomainconfig"></a>
<a id="schema_ElasticsearchDomainConfig"></a>
<a id="tocSelasticsearchdomainconfig"></a>
<a id="tocselasticsearchdomainconfig"></a>

```json
{
  "ElasticsearchVersion": {
    "Options": {},
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "ElasticsearchClusterConfig": {
    "Options": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "EBSOptions": {
    "Options": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "AccessPolicies": {
    "Options": {},
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "SnapshotOptions": {
    "Options": {
      "AutomatedSnapshotStartHour": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "VPCOptions": {
    "Options": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "CognitoOptions": {
    "Options": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "EncryptionAtRestOptions": {
    "Options": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "NodeToNodeEncryptionOptions": {
    "Options": {
      "Enabled": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "AdvancedOptions": {
    "Options": {
      "property1": "string",
      "property2": "string"
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "LogPublishingOptions": {
    "Options": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "DomainEndpointOptions": {
    "Options": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "AdvancedSecurityOptions": {
    "Options": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "PendingDeletion": {}
    }
  },
  "AutoTuneOptions": {
    "Options": {
      "DesiredState": {},
      "RollbackOnDisable": {},
      "MaintenanceSchedules": {}
    },
    "Status": {
      "CreationDate": {},
      "UpdateDate": {},
      "UpdateVersion": {},
      "State": {},
      "ErrorMessage": {},
      "PendingDeletion": {}
    }
  },
  "ChangeProgressDetails": {
    "ChangeId": {},
    "Message": {}
  }
}
```

The configuration of an Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticsearchVersion|object|false|none|none|
|ElasticsearchClusterConfig|object|false|none|none|
|EBSOptions|object|false|none|none|
|AccessPolicies|object|false|none|none|
|SnapshotOptions|object|false|none|none|
|VPCOptions|object|false|none|none|
|CognitoOptions|object|false|none|none|
|EncryptionAtRestOptions|object|false|none|none|
|NodeToNodeEncryptionOptions|object|false|none|none|
|AdvancedOptions|object|false|none|none|
|LogPublishingOptions|object|false|none|none|
|DomainEndpointOptions|object|false|none|none|
|AdvancedSecurityOptions|object|false|none|none|
|AutoTuneOptions|object|false|none|none|
|ChangeProgressDetails|object|false|none|none|

<h2 id="tocS_DescribeElasticsearchDomainRequest">DescribeElasticsearchDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainrequest"></a>
<a id="schema_DescribeElasticsearchDomainRequest"></a>
<a id="tocSdescribeelasticsearchdomainrequest"></a>
<a id="tocsdescribeelasticsearchdomainrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.

<h2 id="tocS_DomainNameList">DomainNameList</h2>
<!-- backwards compatibility -->
<a id="schemadomainnamelist"></a>
<a id="schema_DomainNameList"></a>
<a id="tocSdomainnamelist"></a>
<a id="tocsdomainnamelist"></a>

```json
[
  "string"
]
```

A list of Elasticsearch domain names.

<h2 id="tocS_DescribeElasticsearchDomainsRequest">DescribeElasticsearchDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchdomainsrequest"></a>
<a id="schema_DescribeElasticsearchDomainsRequest"></a>
<a id="tocSdescribeelasticsearchdomainsrequest"></a>
<a id="tocsdescribeelasticsearchdomainsrequest"></a>

```json
{
  "DomainNames": {}
}
```

Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainNames|object|true|none|none|

<h2 id="tocS_ElasticsearchDomainStatusList">ElasticsearchDomainStatusList</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchdomainstatuslist"></a>
<a id="schema_ElasticsearchDomainStatusList"></a>
<a id="tocSelasticsearchdomainstatuslist"></a>
<a id="tocselasticsearchdomainstatuslist"></a>

```json
[
  {
    "DomainId": {},
    "DomainName": {},
    "ARN": {},
    "Created": {},
    "Deleted": {},
    "Endpoint": {},
    "Endpoints": {
      "property1": "string",
      "property2": "string"
    },
    "Processing": {},
    "UpgradeProcessing": {},
    "ElasticsearchVersion": "string",
    "ElasticsearchClusterConfig": {
      "InstanceType": {},
      "InstanceCount": {},
      "DedicatedMasterEnabled": {},
      "ZoneAwarenessEnabled": {},
      "ZoneAwarenessConfig": {
        "AvailabilityZoneCount": {}
      },
      "DedicatedMasterType": {},
      "DedicatedMasterCount": {},
      "WarmEnabled": {},
      "WarmType": {},
      "WarmCount": {},
      "ColdStorageOptions": {
        "Enabled": {}
      }
    },
    "EBSOptions": {
      "EBSEnabled": {},
      "VolumeType": {},
      "VolumeSize": {},
      "Iops": {},
      "Throughput": {}
    },
    "AccessPolicies": {},
    "SnapshotOptions": {
      "AutomatedSnapshotStartHour": {}
    },
    "VPCOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "CognitoOptions": {
      "Enabled": {},
      "UserPoolId": {},
      "IdentityPoolId": {},
      "RoleArn": {}
    },
    "EncryptionAtRestOptions": {
      "Enabled": {},
      "KmsKeyId": {}
    },
    "NodeToNodeEncryptionOptions": {
      "Enabled": {}
    },
    "AdvancedOptions": {
      "property1": "string",
      "property2": "string"
    },
    "LogPublishingOptions": {
      "property1": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      },
      "property2": {
        "CloudWatchLogsLogGroupArn": "string",
        "Enabled": {}
      }
    },
    "ServiceSoftwareOptions": {
      "CurrentVersion": {},
      "NewVersion": {},
      "UpdateAvailable": {},
      "Cancellable": {},
      "UpdateStatus": {},
      "Description": {},
      "AutomatedUpdateDate": {},
      "OptionalDeployment": {}
    },
    "DomainEndpointOptions": {
      "EnforceHTTPS": {},
      "TLSSecurityPolicy": {},
      "CustomEndpointEnabled": {},
      "CustomEndpoint": {},
      "CustomEndpointCertificateArn": {}
    },
    "AdvancedSecurityOptions": {
      "Enabled": {},
      "InternalUserDatabaseEnabled": {},
      "SAMLOptions": {
        "Enabled": {},
        "Idp": {
          "MetadataContent": {},
          "EntityId": {}
        },
        "SubjectKey": {},
        "RolesKey": {},
        "SessionTimeoutMinutes": {}
      },
      "AnonymousAuthDisableDate": {},
      "AnonymousAuthEnabled": {}
    },
    "AutoTuneOptions": {
      "State": {},
      "ErrorMessage": {}
    },
    "ChangeProgressDetails": {
      "ChangeId": {},
      "Message": {}
    }
  }
]
```

A list that contains the status of each requested Elasticsearch domain.

<h2 id="tocS_DescribeElasticsearchInstanceTypeLimitsRequest">DescribeElasticsearchInstanceTypeLimitsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeelasticsearchinstancetypelimitsrequest"></a>
<a id="schema_DescribeElasticsearchInstanceTypeLimitsRequest"></a>
<a id="tocSdescribeelasticsearchinstancetypelimitsrequest"></a>
<a id="tocsdescribeelasticsearchinstancetypelimitsrequest"></a>

```json
{}
```

 Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation.

<h2 id="tocS_LimitsByRole">LimitsByRole</h2>
<!-- backwards compatibility -->
<a id="schemalimitsbyrole"></a>
<a id="schema_LimitsByRole"></a>
<a id="tocSlimitsbyrole"></a>
<a id="tocslimitsbyrole"></a>

```json
{
  "property1": {
    "StorageTypes": {},
    "InstanceLimits": {
      "InstanceCountLimits": {
        "MinimumInstanceCount": 0,
        "MaximumInstanceCount": 0
      }
    },
    "AdditionalLimits": {}
  },
  "property2": {
    "StorageTypes": {},
    "InstanceLimits": {
      "InstanceCountLimits": {
        "MinimumInstanceCount": 0,
        "MaximumInstanceCount": 0
      }
    },
    "AdditionalLimits": {}
  }
}
```

 Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Limits](#schemalimits)|false|none| Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> |

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
[
  {
    "Name": {},
    "Values": {}
  }
]
```

<h2 id="tocS_DescribeInboundCrossClusterSearchConnectionsRequest">DescribeInboundCrossClusterSearchConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeinboundcrossclustersearchconnectionsrequest"></a>
<a id="schema_DescribeInboundCrossClusterSearchConnectionsRequest"></a>
<a id="tocSdescribeinboundcrossclustersearchconnectionsrequest"></a>
<a id="tocsdescribeinboundcrossclustersearchconnectionsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_InboundCrossClusterSearchConnections">InboundCrossClusterSearchConnections</h2>
<!-- backwards compatibility -->
<a id="schemainboundcrossclustersearchconnections"></a>
<a id="schema_InboundCrossClusterSearchConnections"></a>
<a id="tocSinboundcrossclustersearchconnections"></a>
<a id="tocsinboundcrossclustersearchconnections"></a>

```json
[
  {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_DescribeOutboundCrossClusterSearchConnectionsRequest">DescribeOutboundCrossClusterSearchConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeoutboundcrossclustersearchconnectionsrequest"></a>
<a id="schema_DescribeOutboundCrossClusterSearchConnectionsRequest"></a>
<a id="tocSdescribeoutboundcrossclustersearchconnectionsrequest"></a>
<a id="tocsdescribeoutboundcrossclustersearchconnectionsrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_OutboundCrossClusterSearchConnections">OutboundCrossClusterSearchConnections</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcrossclustersearchconnections"></a>
<a id="schema_OutboundCrossClusterSearchConnections"></a>
<a id="tocSoutboundcrossclustersearchconnections"></a>
<a id="tocsoutboundcrossclustersearchconnections"></a>

```json
[
  {
    "SourceDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "DestinationDomainInfo": {
      "OwnerId": "stringstring",
      "DomainName": "string",
      "Region": "string"
    },
    "CrossClusterSearchConnectionId": {},
    "ConnectionAlias": {},
    "ConnectionStatus": {
      "StatusCode": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_DescribePackagesFilterName">DescribePackagesFilterName</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesfiltername"></a>
<a id="schema_DescribePackagesFilterName"></a>
<a id="tocSdescribepackagesfiltername"></a>
<a id="tocsdescribepackagesfiltername"></a>

```json
"PackageID"
```

<h2 id="tocS_DescribePackagesFilterValues">DescribePackagesFilterValues</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesfiltervalues"></a>
<a id="schema_DescribePackagesFilterValues"></a>
<a id="tocSdescribepackagesfiltervalues"></a>
<a id="tocsdescribepackagesfiltervalues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribePackagesFilterList">DescribePackagesFilterList</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesfilterlist"></a>
<a id="schema_DescribePackagesFilterList"></a>
<a id="tocSdescribepackagesfilterlist"></a>
<a id="tocsdescribepackagesfilterlist"></a>

```json
[
  {
    "Name": {},
    "Value": {}
  }
]
```

A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.

<h2 id="tocS_DescribePackagesFilterValue">DescribePackagesFilterValue</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesfiltervalue"></a>
<a id="schema_DescribePackagesFilterValue"></a>
<a id="tocSdescribepackagesfiltervalue"></a>
<a id="tocsdescribepackagesfiltervalue"></a>

```json
"string"
```

<h2 id="tocS_DescribePackagesRequest">DescribePackagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribepackagesrequest"></a>
<a id="schema_DescribePackagesRequest"></a>
<a id="tocSdescribepackagesrequest"></a>
<a id="tocsdescribepackagesrequest"></a>

```json
{
  "Filters": {},
  "MaxResults": {},
  "NextToken": {}
}
```

 Container for request parameters to <code> <a>DescribePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filters|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PackageDetailsList">PackageDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemapackagedetailslist"></a>
<a id="schema_PackageDetailsList"></a>
<a id="tocSpackagedetailslist"></a>
<a id="tocspackagedetailslist"></a>

```json
[
  {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "PackageDescription": {},
    "PackageStatus": {},
    "CreatedAt": {},
    "LastUpdatedAt": "1970-01-01T00:00:00Z",
    "AvailablePackageVersion": "string",
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
]
```

<h2 id="tocS_DescribeReservedElasticsearchInstanceOfferingsRequest">DescribeReservedElasticsearchInstanceOfferingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedelasticsearchinstanceofferingsrequest"></a>
<a id="schema_DescribeReservedElasticsearchInstanceOfferingsRequest"></a>
<a id="tocSdescribereservedelasticsearchinstanceofferingsrequest"></a>
<a id="tocsdescribereservedelasticsearchinstanceofferingsrequest"></a>

```json
{}
```

Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code>

<h2 id="tocS_ReservedElasticsearchInstanceOfferingList">ReservedElasticsearchInstanceOfferingList</h2>
<!-- backwards compatibility -->
<a id="schemareservedelasticsearchinstanceofferinglist"></a>
<a id="schema_ReservedElasticsearchInstanceOfferingList"></a>
<a id="tocSreservedelasticsearchinstanceofferinglist"></a>
<a id="tocsreservedelasticsearchinstanceofferinglist"></a>

```json
[
  {
    "ReservedElasticsearchInstanceOfferingId": {},
    "ElasticsearchInstanceType": {},
    "Duration": {},
    "FixedPrice": {},
    "UsagePrice": {},
    "CurrencyCode": {},
    "PaymentOption": {},
    "RecurringCharges": {}
  }
]
```

<h2 id="tocS_DescribeReservedElasticsearchInstancesRequest">DescribeReservedElasticsearchInstancesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribereservedelasticsearchinstancesrequest"></a>
<a id="schema_DescribeReservedElasticsearchInstancesRequest"></a>
<a id="tocSdescribereservedelasticsearchinstancesrequest"></a>
<a id="tocsdescribereservedelasticsearchinstancesrequest"></a>

```json
{}
```

Container for parameters to <code>DescribeReservedElasticsearchInstances</code>

<h2 id="tocS_ReservedElasticsearchInstanceList">ReservedElasticsearchInstanceList</h2>
<!-- backwards compatibility -->
<a id="schemareservedelasticsearchinstancelist"></a>
<a id="schema_ReservedElasticsearchInstanceList"></a>
<a id="tocSreservedelasticsearchinstancelist"></a>
<a id="tocsreservedelasticsearchinstancelist"></a>

```json
[
  {
    "ReservationName": {},
    "ReservedElasticsearchInstanceId": {},
    "ReservedElasticsearchInstanceOfferingId": {},
    "ElasticsearchInstanceType": {},
    "StartTime": {},
    "Duration": {},
    "FixedPrice": {},
    "UsagePrice": {},
    "CurrencyCode": {},
    "ElasticsearchInstanceCount": {},
    "State": {},
    "PaymentOption": {},
    "RecurringCharges": {}
  }
]
```

<h2 id="tocS_VpcEndpointIdList">VpcEndpointIdList</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointidlist"></a>
<a id="schema_VpcEndpointIdList"></a>
<a id="tocSvpcendpointidlist"></a>
<a id="tocsvpcendpointidlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DescribeVpcEndpointsRequest">DescribeVpcEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcendpointsrequest"></a>
<a id="schema_DescribeVpcEndpointsRequest"></a>
<a id="tocSdescribevpcendpointsrequest"></a>
<a id="tocsdescribevpcendpointsrequest"></a>

```json
{
  "VpcEndpointIds": {}
}
```

Container for request parameters to the <code><a>DescribeVpcEndpoints</a></code> operation. Specifies the list of VPC endpoints to be described.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointIds|object|true|none|none|

<h2 id="tocS_VpcEndpoints">VpcEndpoints</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpoints"></a>
<a id="schema_VpcEndpoints"></a>
<a id="tocSvpcendpoints"></a>
<a id="tocsvpcendpoints"></a>

```json
[
  {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "VpcOptions": {
      "VPCId": {},
      "SubnetIds": {},
      "AvailabilityZones": {},
      "SecurityGroupIds": {}
    },
    "Status": {},
    "Endpoint": {}
  }
]
```

<h2 id="tocS_VpcEndpointErrorList">VpcEndpointErrorList</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointerrorlist"></a>
<a id="schema_VpcEndpointErrorList"></a>
<a id="tocSvpcendpointerrorlist"></a>
<a id="tocsvpcendpointerrorlist"></a>

```json
[
  {
    "VpcEndpointId": {},
    "ErrorCode": {},
    "ErrorMessage": {}
  }
]
```

<h2 id="tocS_DissociatePackageRequest">DissociatePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemadissociatepackagerequest"></a>
<a id="schema_DissociatePackageRequest"></a>
<a id="tocSdissociatepackagerequest"></a>
<a id="tocsdissociatepackagerequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>DissociatePackage</a> </code> operation.

<h2 id="tocS_DomainEndpointOptionsStatus">DomainEndpointOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainendpointoptionsstatus"></a>
<a id="schema_DomainEndpointOptionsStatus"></a>
<a id="tocSdomainendpointoptionsstatus"></a>
<a id="tocsdomainendpointoptionsstatus"></a>

```json
{
  "Options": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The configured endpoint options for the domain and their current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_DomainId">DomainId</h2>
<!-- backwards compatibility -->
<a id="schemadomainid"></a>
<a id="schema_DomainId"></a>
<a id="tocSdomainid"></a>
<a id="tocsdomainid"></a>

```json
"string"
```

Unique identifier for an Elasticsearch domain.

<h2 id="tocS_EngineType">EngineType</h2>
<!-- backwards compatibility -->
<a id="schemaenginetype"></a>
<a id="schema_EngineType"></a>
<a id="tocSenginetype"></a>
<a id="tocsenginetype"></a>

```json
"OpenSearch"
```

<h2 id="tocS_DomainInfo">DomainInfo</h2>
<!-- backwards compatibility -->
<a id="schemadomaininfo"></a>
<a id="schema_DomainInfo"></a>
<a id="tocSdomaininfo"></a>
<a id="tocsdomaininfo"></a>

```json
{
  "DomainName": {},
  "EngineType": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|false|none|none|
|EngineType|object|false|none|none|

<h2 id="tocS_DomainInfoList">DomainInfoList</h2>
<!-- backwards compatibility -->
<a id="schemadomaininfolist"></a>
<a id="schema_DomainInfoList"></a>
<a id="tocSdomaininfolist"></a>
<a id="tocsdomaininfolist"></a>

```json
[
  {
    "DomainName": {},
    "EngineType": {}
  }
]
```

 Contains the list of Elasticsearch domain information.

<h2 id="tocS_DomainPackageStatus">DomainPackageStatus</h2>
<!-- backwards compatibility -->
<a id="schemadomainpackagestatus"></a>
<a id="schema_DomainPackageStatus"></a>
<a id="tocSdomainpackagestatus"></a>
<a id="tocsdomainpackagestatus"></a>

```json
"ASSOCIATING"
```

<h2 id="tocS_PackageVersion">PackageVersion</h2>
<!-- backwards compatibility -->
<a id="schemapackageversion"></a>
<a id="schema_PackageVersion"></a>
<a id="tocSpackageversion"></a>
<a id="tocspackageversion"></a>

```json
"string"
```

<h2 id="tocS_ReferencePath">ReferencePath</h2>
<!-- backwards compatibility -->
<a id="schemareferencepath"></a>
<a id="schema_ReferencePath"></a>
<a id="tocSreferencepath"></a>
<a id="tocsreferencepath"></a>

```json
"string"
```

<h2 id="tocS_ErrorDetails">ErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetails"></a>
<a id="schema_ErrorDetails"></a>
<a id="tocSerrordetails"></a>
<a id="tocserrordetails"></a>

```json
{
  "ErrorType": "string",
  "ErrorMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorType|[ErrorType](#schemaerrortype)|false|none|none|
|ErrorMessage|[ErrorMessage](#schemaerrormessage)|false|none|none|

<h2 id="tocS_DomainPackageDetailsList">DomainPackageDetailsList</h2>
<!-- backwards compatibility -->
<a id="schemadomainpackagedetailslist"></a>
<a id="schema_DomainPackageDetailsList"></a>
<a id="tocSdomainpackagedetailslist"></a>
<a id="tocsdomainpackagedetailslist"></a>

```json
[
  {
    "PackageID": {},
    "PackageName": {},
    "PackageType": {},
    "LastUpdated": {},
    "DomainName": {},
    "DomainPackageStatus": {},
    "PackageVersion": "string",
    "ReferencePath": {},
    "ErrorDetails": {
      "ErrorType": "string",
      "ErrorMessage": "string"
    }
  }
]
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_DryRun">DryRun</h2>
<!-- backwards compatibility -->
<a id="schemadryrun"></a>
<a id="schema_DryRun"></a>
<a id="tocSdryrun"></a>
<a id="tocsdryrun"></a>

```json
true
```

<h2 id="tocS_DryRunResults">DryRunResults</h2>
<!-- backwards compatibility -->
<a id="schemadryrunresults"></a>
<a id="schema_DryRunResults"></a>
<a id="tocSdryrunresults"></a>
<a id="tocsdryrunresults"></a>

```json
{
  "DeploymentType": {},
  "Message": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeploymentType|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_DurationValue">DurationValue</h2>
<!-- backwards compatibility -->
<a id="schemadurationvalue"></a>
<a id="schema_DurationValue"></a>
<a id="tocSdurationvalue"></a>
<a id="tocsdurationvalue"></a>

```json
1
```

 Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

<h2 id="tocS_TimeUnit">TimeUnit</h2>
<!-- backwards compatibility -->
<a id="schematimeunit"></a>
<a id="schema_TimeUnit"></a>
<a id="tocStimeunit"></a>
<a id="tocstimeunit"></a>

```json
"HOURS"
```

Specifies the unit of a maintenance schedule duration. Valid value is HOUR. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.

<h2 id="tocS_EBSOptionsStatus">EBSOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaebsoptionsstatus"></a>
<a id="schema_EBSOptionsStatus"></a>
<a id="tocSebsoptionsstatus"></a>
<a id="tocsebsoptionsstatus"></a>

```json
{
  "Options": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Status of the EBS options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_ElasticsearchClusterConfigStatus">ElasticsearchClusterConfigStatus</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchclusterconfigstatus"></a>
<a id="schema_ElasticsearchClusterConfigStatus"></a>
<a id="tocSelasticsearchclusterconfigstatus"></a>
<a id="tocselasticsearchclusterconfigstatus"></a>

```json
{
  "Options": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Specifies the configuration status for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_ElasticsearchVersionStatus">ElasticsearchVersionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchversionstatus"></a>
<a id="schema_ElasticsearchVersionStatus"></a>
<a id="tocSelasticsearchversionstatus"></a>
<a id="tocselasticsearchversionstatus"></a>

```json
{
  "Options": {},
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Status of the Elasticsearch version options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_SnapshotOptionsStatus">SnapshotOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotoptionsstatus"></a>
<a id="schema_SnapshotOptionsStatus"></a>
<a id="tocSsnapshotoptionsstatus"></a>
<a id="tocssnapshotoptionsstatus"></a>

```json
{
  "Options": {
    "AutomatedSnapshotStartHour": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

Status of a daily automated snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_VPCDerivedInfoStatus">VPCDerivedInfoStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpcderivedinfostatus"></a>
<a id="schema_VPCDerivedInfoStatus"></a>
<a id="tocSvpcderivedinfostatus"></a>
<a id="tocsvpcderivedinfostatus"></a>

```json
{
  "Options": {
    "VPCId": {},
    "SubnetIds": {},
    "AvailabilityZones": {},
    "SecurityGroupIds": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Status of the VPC options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_EncryptionAtRestOptionsStatus">EncryptionAtRestOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionatrestoptionsstatus"></a>
<a id="schema_EncryptionAtRestOptionsStatus"></a>
<a id="tocSencryptionatrestoptionsstatus"></a>
<a id="tocsencryptionatrestoptionsstatus"></a>

```json
{
  "Options": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

 Status of the Encryption At Rest options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_NodeToNodeEncryptionOptionsStatus">NodeToNodeEncryptionOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodetonodeencryptionoptionsstatus"></a>
<a id="schema_NodeToNodeEncryptionOptionsStatus"></a>
<a id="tocSnodetonodeencryptionoptionsstatus"></a>
<a id="tocsnodetonodeencryptionoptionsstatus"></a>

```json
{
  "Options": {
    "Enabled": {}
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

Status of the node-to-node encryption options for the specified Elasticsearch domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|true|none|none|
|Status|object|true|none|none|

<h2 id="tocS_LogPublishingOptionsStatus">LogPublishingOptionsStatus</h2>
<!-- backwards compatibility -->
<a id="schemalogpublishingoptionsstatus"></a>
<a id="schema_LogPublishingOptionsStatus"></a>
<a id="tocSlogpublishingoptionsstatus"></a>
<a id="tocslogpublishingoptionsstatus"></a>

```json
{
  "Options": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "Status": {
    "CreationDate": {},
    "UpdateDate": {},
    "UpdateVersion": {},
    "State": {},
    "PendingDeletion": {}
  }
}
```

The configured log publishing options for the domain and their current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Options|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_ServiceUrl">ServiceUrl</h2>
<!-- backwards compatibility -->
<a id="schemaserviceurl"></a>
<a id="schema_ServiceUrl"></a>
<a id="tocSserviceurl"></a>
<a id="tocsserviceurl"></a>

```json
"string"
```

The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.

<h2 id="tocS_EndpointsMap">EndpointsMap</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsmap"></a>
<a id="schema_EndpointsMap"></a>
<a id="tocSendpointsmap"></a>
<a id="tocsendpointsmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ServiceUrl](#schemaserviceurl)|false|none|The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.|

<h2 id="tocS_VPCDerivedInfo">VPCDerivedInfo</h2>
<!-- backwards compatibility -->
<a id="schemavpcderivedinfo"></a>
<a id="schema_VPCDerivedInfo"></a>
<a id="tocSvpcderivedinfo"></a>
<a id="tocsvpcderivedinfo"></a>

```json
{
  "VPCId": {},
  "SubnetIds": {},
  "AvailabilityZones": {},
  "SecurityGroupIds": {}
}
```

Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VPCId|object|false|none|none|
|SubnetIds|object|false|none|none|
|AvailabilityZones|object|false|none|none|
|SecurityGroupIds|object|false|none|none|

<h2 id="tocS_ElasticsearchInstanceTypeList">ElasticsearchInstanceTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaelasticsearchinstancetypelist"></a>
<a id="schema_ElasticsearchInstanceTypeList"></a>
<a id="tocSelasticsearchinstancetypelist"></a>
<a id="tocselasticsearchinstancetypelist"></a>

```json
[
  "m3.medium.elasticsearch"
]
```

 List of instance types supported by Amazon Elasticsearch service.

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
"string"
```

<h2 id="tocS_ErrorType">ErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaerrortype"></a>
<a id="schema_ErrorType"></a>
<a id="tocSerrortype"></a>
<a id="tocserrortype"></a>

```json
"string"
```

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
"string"
```

<h2 id="tocS_NonEmptyString">NonEmptyString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptystring"></a>
<a id="schema_NonEmptyString"></a>
<a id="tocSnonemptystring"></a>
<a id="tocsnonemptystring"></a>

```json
"string"
```

<h2 id="tocS_ValueStringList">ValueStringList</h2>
<!-- backwards compatibility -->
<a id="schemavaluestringlist"></a>
<a id="schema_ValueStringList"></a>
<a id="tocSvaluestringlist"></a>
<a id="tocsvaluestringlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GetCompatibleElasticsearchVersionsRequest">GetCompatibleElasticsearchVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetcompatibleelasticsearchversionsrequest"></a>
<a id="schema_GetCompatibleElasticsearchVersionsRequest"></a>
<a id="tocSgetcompatibleelasticsearchversionsrequest"></a>
<a id="tocsgetcompatibleelasticsearchversionsrequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation.

<h2 id="tocS_GetPackageVersionHistoryRequest">GetPackageVersionHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpackageversionhistoryrequest"></a>
<a id="schema_GetPackageVersionHistoryRequest"></a>
<a id="tocSgetpackageversionhistoryrequest"></a>
<a id="tocsgetpackageversionhistoryrequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>GetPackageVersionHistory</a> </code> operation.

<h2 id="tocS_PackageVersionHistoryList">PackageVersionHistoryList</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionhistorylist"></a>
<a id="schema_PackageVersionHistoryList"></a>
<a id="tocSpackageversionhistorylist"></a>
<a id="tocspackageversionhistorylist"></a>

```json
[
  {
    "PackageVersion": {},
    "CommitMessage": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_GetUpgradeHistoryRequest">GetUpgradeHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetupgradehistoryrequest"></a>
<a id="schema_GetUpgradeHistoryRequest"></a>
<a id="tocSgetupgradehistoryrequest"></a>
<a id="tocsgetupgradehistoryrequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation.

<h2 id="tocS_UpgradeHistoryList">UpgradeHistoryList</h2>
<!-- backwards compatibility -->
<a id="schemaupgradehistorylist"></a>
<a id="schema_UpgradeHistoryList"></a>
<a id="tocSupgradehistorylist"></a>
<a id="tocsupgradehistorylist"></a>

```json
[
  {
    "UpgradeName": {},
    "StartTimestamp": {},
    "UpgradeStatus": {},
    "StepsList": {}
  }
]
```

<h2 id="tocS_GetUpgradeStatusRequest">GetUpgradeStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetupgradestatusrequest"></a>
<a id="schema_GetUpgradeStatusRequest"></a>
<a id="tocSgetupgradestatusrequest"></a>
<a id="tocsgetupgradestatusrequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation.

<h2 id="tocS_UpgradeStep">UpgradeStep</h2>
<!-- backwards compatibility -->
<a id="schemaupgradestep"></a>
<a id="schema_UpgradeStep"></a>
<a id="tocSupgradestep"></a>
<a id="tocsupgradestep"></a>

```json
"PRE_UPGRADE_CHECK"
```

<h2 id="tocS_UpgradeStatus">UpgradeStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupgradestatus"></a>
<a id="schema_UpgradeStatus"></a>
<a id="tocSupgradestatus"></a>
<a id="tocsupgradestatus"></a>

```json
"IN_PROGRESS"
```

<h2 id="tocS_UpgradeName">UpgradeName</h2>
<!-- backwards compatibility -->
<a id="schemaupgradename"></a>
<a id="schema_UpgradeName"></a>
<a id="tocSupgradename"></a>
<a id="tocsupgradename"></a>

```json
"string"
```

<h2 id="tocS_InboundCrossClusterSearchConnectionStatus">InboundCrossClusterSearchConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemainboundcrossclustersearchconnectionstatus"></a>
<a id="schema_InboundCrossClusterSearchConnectionStatus"></a>
<a id="tocSinboundcrossclustersearchconnectionstatus"></a>
<a id="tocsinboundcrossclustersearchconnectionstatus"></a>

```json
{
  "StatusCode": {},
  "Message": {}
}
```

Specifies the coonection status of an inbound cross-cluster search connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusCode|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_InboundCrossClusterSearchConnectionStatusCode">InboundCrossClusterSearchConnectionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemainboundcrossclustersearchconnectionstatuscode"></a>
<a id="schema_InboundCrossClusterSearchConnectionStatusCode"></a>
<a id="tocSinboundcrossclustersearchconnectionstatuscode"></a>
<a id="tocsinboundcrossclustersearchconnectionstatuscode"></a>

```json
"PENDING_ACCEPTANCE"
```

<h2 id="tocS_InstanceCount">InstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemainstancecount"></a>
<a id="schema_InstanceCount"></a>
<a id="tocSinstancecount"></a>
<a id="tocsinstancecount"></a>

```json
1
```

Specifies the number of EC2 instances in the Elasticsearch domain.

<h2 id="tocS_MinimumInstanceCount">MinimumInstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemaminimuminstancecount"></a>
<a id="schema_MinimumInstanceCount"></a>
<a id="tocSminimuminstancecount"></a>
<a id="tocsminimuminstancecount"></a>

```json
0
```

 Minimum number of Instances that can be instantiated for given InstanceType.

<h2 id="tocS_MaximumInstanceCount">MaximumInstanceCount</h2>
<!-- backwards compatibility -->
<a id="schemamaximuminstancecount"></a>
<a id="schema_MaximumInstanceCount"></a>
<a id="tocSmaximuminstancecount"></a>
<a id="tocsmaximuminstancecount"></a>

```json
0
```

 Maximum number of Instances that can be instantiated for given InstanceType.

<h2 id="tocS_InstanceCountLimits">InstanceCountLimits</h2>
<!-- backwards compatibility -->
<a id="schemainstancecountlimits"></a>
<a id="schema_InstanceCountLimits"></a>
<a id="tocSinstancecountlimits"></a>
<a id="tocsinstancecountlimits"></a>

```json
{
  "MinimumInstanceCount": 0,
  "MaximumInstanceCount": 0
}
```

 InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MinimumInstanceCount|[MinimumInstanceCount](#schemaminimuminstancecount)|false|none| Minimum number of Instances that can be instantiated for given InstanceType. |
|MaximumInstanceCount|[MaximumInstanceCount](#schemamaximuminstancecount)|false|none| Maximum number of Instances that can be instantiated for given InstanceType. |

<h2 id="tocS_InstanceLimits">InstanceLimits</h2>
<!-- backwards compatibility -->
<a id="schemainstancelimits"></a>
<a id="schema_InstanceLimits"></a>
<a id="tocSinstancelimits"></a>
<a id="tocsinstancelimits"></a>

```json
{
  "InstanceCountLimits": {
    "MinimumInstanceCount": 0,
    "MaximumInstanceCount": 0
  }
}
```

InstanceLimits represents the list of instance related attributes that are available for given InstanceType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InstanceCountLimits|[InstanceCountLimits](#schemainstancecountlimits)|false|none| InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. |

<h2 id="tocS_InstanceRole">InstanceRole</h2>
<!-- backwards compatibility -->
<a id="schemainstancerole"></a>
<a id="schema_InstanceRole"></a>
<a id="tocSinstancerole"></a>
<a id="tocsinstancerole"></a>

```json
"string"
```

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
"string"
```

<h2 id="tocS_Issues">Issues</h2>
<!-- backwards compatibility -->
<a id="schemaissues"></a>
<a id="schema_Issues"></a>
<a id="tocSissues"></a>
<a id="tocsissues"></a>

```json
[
  "string"
]
```

<h2 id="tocS_LimitValue">LimitValue</h2>
<!-- backwards compatibility -->
<a id="schemalimitvalue"></a>
<a id="schema_LimitValue"></a>
<a id="tocSlimitvalue"></a>
<a id="tocslimitvalue"></a>

```json
"string"
```

<h2 id="tocS_StorageTypeList">StorageTypeList</h2>
<!-- backwards compatibility -->
<a id="schemastoragetypelist"></a>
<a id="schema_StorageTypeList"></a>
<a id="tocSstoragetypelist"></a>
<a id="tocsstoragetypelist"></a>

```json
[
  {
    "StorageTypeName": "string",
    "StorageSubTypeName": "string",
    "StorageTypeLimits": {}
  }
]
```

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
{
  "StorageTypes": {},
  "InstanceLimits": {
    "InstanceCountLimits": {
      "MinimumInstanceCount": 0,
      "MaximumInstanceCount": 0
    }
  },
  "AdditionalLimits": {}
}
```

 Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageTypes|object|false|none|none|
|InstanceLimits|[InstanceLimits](#schemainstancelimits)|false|none|InstanceLimits represents the list of instance related attributes that are available for given InstanceType. |
|AdditionalLimits|object|false|none|none|

<h2 id="tocS_ListDomainNamesRequest">ListDomainNamesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainnamesrequest"></a>
<a id="schema_ListDomainNamesRequest"></a>
<a id="tocSlistdomainnamesrequest"></a>
<a id="tocslistdomainnamesrequest"></a>

```json
{}
```

 Container for the parameters to the <code><a>ListDomainNames</a></code> operation.

<h2 id="tocS_ListDomainsForPackageRequest">ListDomainsForPackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsforpackagerequest"></a>
<a id="schema_ListDomainsForPackageRequest"></a>
<a id="tocSlistdomainsforpackagerequest"></a>
<a id="tocslistdomainsforpackagerequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation.

<h2 id="tocS_ListElasticsearchInstanceTypesRequest">ListElasticsearchInstanceTypesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistelasticsearchinstancetypesrequest"></a>
<a id="schema_ListElasticsearchInstanceTypesRequest"></a>
<a id="tocSlistelasticsearchinstancetypesrequest"></a>
<a id="tocslistelasticsearchinstancetypesrequest"></a>

```json
{}
```

 Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation.

<h2 id="tocS_ListElasticsearchVersionsRequest">ListElasticsearchVersionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistelasticsearchversionsrequest"></a>
<a id="schema_ListElasticsearchVersionsRequest"></a>
<a id="tocSlistelasticsearchversionsrequest"></a>
<a id="tocslistelasticsearchversionsrequest"></a>

```json
{}
```

<p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>

<h2 id="tocS_ListPackagesForDomainRequest">ListPackagesForDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpackagesfordomainrequest"></a>
<a id="schema_ListPackagesForDomainRequest"></a>
<a id="tocSlistpackagesfordomainrequest"></a>
<a id="tocslistpackagesfordomainrequest"></a>

```json
{}
```

 Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation.

<h2 id="tocS_ListTagsRequest">ListTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsrequest"></a>
<a id="schema_ListTagsRequest"></a>
<a id="tocSlisttagsrequest"></a>
<a id="tocslisttagsrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.

<h2 id="tocS_ListVpcEndpointAccessRequest">ListVpcEndpointAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointaccessrequest"></a>
<a id="schema_ListVpcEndpointAccessRequest"></a>
<a id="tocSlistvpcendpointaccessrequest"></a>
<a id="tocslistvpcendpointaccessrequest"></a>

```json
{}
```

Retrieves information about each principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint

<h2 id="tocS_ListVpcEndpointsForDomainRequest">ListVpcEndpointsForDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointsfordomainrequest"></a>
<a id="schema_ListVpcEndpointsForDomainRequest"></a>
<a id="tocSlistvpcendpointsfordomainrequest"></a>
<a id="tocslistvpcendpointsfordomainrequest"></a>

```json
{}
```

Container for request parameters to the <code><a>ListVpcEndpointsForDomain</a></code> operation. Specifies the domain whose VPC endpoints will be listed.

<h2 id="tocS_VpcEndpointSummaryList">VpcEndpointSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointsummarylist"></a>
<a id="schema_VpcEndpointSummaryList"></a>
<a id="tocSvpcendpointsummarylist"></a>
<a id="tocsvpcendpointsummarylist"></a>

```json
[
  {
    "VpcEndpointId": {},
    "VpcEndpointOwner": {},
    "DomainArn": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ListVpcEndpointsRequest">ListVpcEndpointsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcendpointsrequest"></a>
<a id="schema_ListVpcEndpointsRequest"></a>
<a id="tocSlistvpcendpointsrequest"></a>
<a id="tocslistvpcendpointsrequest"></a>

```json
{}
```

Container for request parameters to the <code><a>ListVpcEndpoints</a></code> operation.

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"INDEX_SLOW_LOGS"
```

Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> <li>AUDIT_LOGS: Audit logs contain records of user requests for access from the domain.</li> </ul>

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"password"
```

<h2 id="tocS_Password">Password</h2>
<!-- backwards compatibility -->
<a id="schemapassword"></a>
<a id="schema_Password"></a>
<a id="tocSpassword"></a>
<a id="tocspassword"></a>

```json
"password"
```

<h2 id="tocS_OptionState">OptionState</h2>
<!-- backwards compatibility -->
<a id="schemaoptionstate"></a>
<a id="schema_OptionState"></a>
<a id="tocSoptionstate"></a>
<a id="tocsoptionstate"></a>

```json
"RequiresIndexDocuments"
```

<p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>

<h2 id="tocS_OutboundCrossClusterSearchConnectionStatusCode">OutboundCrossClusterSearchConnectionStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaoutboundcrossclustersearchconnectionstatuscode"></a>
<a id="schema_OutboundCrossClusterSearchConnectionStatusCode"></a>
<a id="tocSoutboundcrossclustersearchconnectionstatuscode"></a>
<a id="tocsoutboundcrossclustersearchconnectionstatuscode"></a>

```json
"PENDING_ACCEPTANCE"
```

<h2 id="tocS_PackageStatus">PackageStatus</h2>
<!-- backwards compatibility -->
<a id="schemapackagestatus"></a>
<a id="schema_PackageStatus"></a>
<a id="tocSpackagestatus"></a>
<a id="tocspackagestatus"></a>

```json
"COPYING"
```

<h2 id="tocS_PackageVersionHistory">PackageVersionHistory</h2>
<!-- backwards compatibility -->
<a id="schemapackageversionhistory"></a>
<a id="schema_PackageVersionHistory"></a>
<a id="tocSpackageversionhistory"></a>
<a id="tocspackageversionhistory"></a>

```json
{
  "PackageVersion": {},
  "CommitMessage": {},
  "CreatedAt": {}
}
```

Details of a package version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageVersion|object|false|none|none|
|CommitMessage|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_ReservationToken">ReservationToken</h2>
<!-- backwards compatibility -->
<a id="schemareservationtoken"></a>
<a id="schema_ReservationToken"></a>
<a id="tocSreservationtoken"></a>
<a id="tocsreservationtoken"></a>

```json
"string"
```

<h2 id="tocS_PurchaseReservedElasticsearchInstanceOfferingRequest">PurchaseReservedElasticsearchInstanceOfferingRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurchasereservedelasticsearchinstanceofferingrequest"></a>
<a id="schema_PurchaseReservedElasticsearchInstanceOfferingRequest"></a>
<a id="tocSpurchasereservedelasticsearchinstanceofferingrequest"></a>
<a id="tocspurchasereservedelasticsearchinstanceofferingrequest"></a>

```json
{
  "ReservedElasticsearchInstanceOfferingId": {},
  "ReservationName": {},
  "InstanceCount": {}
}
```

Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedElasticsearchInstanceOfferingId|object|true|none|none|
|ReservationName|object|true|none|none|
|InstanceCount|object|false|none|none|

<h2 id="tocS_RecurringCharge">RecurringCharge</h2>
<!-- backwards compatibility -->
<a id="schemarecurringcharge"></a>
<a id="schema_RecurringCharge"></a>
<a id="tocSrecurringcharge"></a>
<a id="tocsrecurringcharge"></a>

```json
{
  "RecurringChargeAmount": {},
  "RecurringChargeFrequency": {}
}
```

Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RecurringChargeAmount|object|false|none|none|
|RecurringChargeFrequency|object|false|none|none|

<h2 id="tocS_RecurringChargeList">RecurringChargeList</h2>
<!-- backwards compatibility -->
<a id="schemarecurringchargelist"></a>
<a id="schema_RecurringChargeList"></a>
<a id="tocSrecurringchargelist"></a>
<a id="tocsrecurringchargelist"></a>

```json
[
  {
    "RecurringChargeAmount": {},
    "RecurringChargeFrequency": {}
  }
]
```

<h2 id="tocS_RejectInboundCrossClusterSearchConnectionRequest">RejectInboundCrossClusterSearchConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectinboundcrossclustersearchconnectionrequest"></a>
<a id="schema_RejectInboundCrossClusterSearchConnectionRequest"></a>
<a id="tocSrejectinboundcrossclustersearchconnectionrequest"></a>
<a id="tocsrejectinboundcrossclustersearchconnectionrequest"></a>

```json
{}
```

Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.

<h2 id="tocS_RemoveTagsRequest">RemoveTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovetagsrequest"></a>
<a id="schema_RemoveTagsRequest"></a>
<a id="tocSremovetagsrequest"></a>
<a id="tocsremovetagsrequest"></a>

```json
{
  "ARN": {},
  "TagKeys": {}
}
```

Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ARN|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_ReservedElasticsearchInstancePaymentOption">ReservedElasticsearchInstancePaymentOption</h2>
<!-- backwards compatibility -->
<a id="schemareservedelasticsearchinstancepaymentoption"></a>
<a id="schema_ReservedElasticsearchInstancePaymentOption"></a>
<a id="tocSreservedelasticsearchinstancepaymentoption"></a>
<a id="tocsreservedelasticsearchinstancepaymentoption"></a>

```json
"ALL_UPFRONT"
```

<h2 id="tocS_ReservedElasticsearchInstance">ReservedElasticsearchInstance</h2>
<!-- backwards compatibility -->
<a id="schemareservedelasticsearchinstance"></a>
<a id="schema_ReservedElasticsearchInstance"></a>
<a id="tocSreservedelasticsearchinstance"></a>
<a id="tocsreservedelasticsearchinstance"></a>

```json
{
  "ReservationName": {},
  "ReservedElasticsearchInstanceId": {},
  "ReservedElasticsearchInstanceOfferingId": {},
  "ElasticsearchInstanceType": {},
  "StartTime": {},
  "Duration": {},
  "FixedPrice": {},
  "UsagePrice": {},
  "CurrencyCode": {},
  "ElasticsearchInstanceCount": {},
  "State": {},
  "PaymentOption": {},
  "RecurringCharges": {}
}
```

Details of a reserved Elasticsearch instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservationName|object|false|none|none|
|ReservedElasticsearchInstanceId|object|false|none|none|
|ReservedElasticsearchInstanceOfferingId|object|false|none|none|
|ElasticsearchInstanceType|object|false|none|none|
|StartTime|object|false|none|none|
|Duration|object|false|none|none|
|FixedPrice|object|false|none|none|
|UsagePrice|object|false|none|none|
|CurrencyCode|object|false|none|none|
|ElasticsearchInstanceCount|object|false|none|none|
|State|object|false|none|none|
|PaymentOption|object|false|none|none|
|RecurringCharges|object|false|none|none|

<h2 id="tocS_ReservedElasticsearchInstanceOffering">ReservedElasticsearchInstanceOffering</h2>
<!-- backwards compatibility -->
<a id="schemareservedelasticsearchinstanceoffering"></a>
<a id="schema_ReservedElasticsearchInstanceOffering"></a>
<a id="tocSreservedelasticsearchinstanceoffering"></a>
<a id="tocsreservedelasticsearchinstanceoffering"></a>

```json
{
  "ReservedElasticsearchInstanceOfferingId": {},
  "ElasticsearchInstanceType": {},
  "Duration": {},
  "FixedPrice": {},
  "UsagePrice": {},
  "CurrencyCode": {},
  "PaymentOption": {},
  "RecurringCharges": {}
}
```

Details of a reserved Elasticsearch instance offering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReservedElasticsearchInstanceOfferingId|object|false|none|none|
|ElasticsearchInstanceType|object|false|none|none|
|Duration|object|false|none|none|
|FixedPrice|object|false|none|none|
|UsagePrice|object|false|none|none|
|CurrencyCode|object|false|none|none|
|PaymentOption|object|false|none|none|
|RecurringCharges|object|false|none|none|

<h2 id="tocS_RevokeVpcEndpointAccessRequest">RevokeVpcEndpointAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokevpcendpointaccessrequest"></a>
<a id="schema_RevokeVpcEndpointAccessRequest"></a>
<a id="tocSrevokevpcendpointaccessrequest"></a>
<a id="tocsrevokevpcendpointaccessrequest"></a>

```json
{
  "Account": {}
}
```

Revokes access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|true|none|none|

<h2 id="tocS_SAMLEntityId">SAMLEntityId</h2>
<!-- backwards compatibility -->
<a id="schemasamlentityid"></a>
<a id="schema_SAMLEntityId"></a>
<a id="tocSsamlentityid"></a>
<a id="tocssamlentityid"></a>

```json
"stringst"
```

<h2 id="tocS_SAMLMetadata">SAMLMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasamlmetadata"></a>
<a id="schema_SAMLMetadata"></a>
<a id="tocSsamlmetadata"></a>
<a id="tocssamlmetadata"></a>

```json
"string"
```

<h2 id="tocS_SAMLIdp">SAMLIdp</h2>
<!-- backwards compatibility -->
<a id="schemasamlidp"></a>
<a id="schema_SAMLIdp"></a>
<a id="tocSsamlidp"></a>
<a id="tocssamlidp"></a>

```json
{
  "MetadataContent": {},
  "EntityId": {}
}
```

Specifies the SAML Identity Provider's information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MetadataContent|object|true|none|none|
|EntityId|object|true|none|none|

<h2 id="tocS_ScheduledAutoTuneActionType">ScheduledAutoTuneActionType</h2>
<!-- backwards compatibility -->
<a id="schemascheduledautotuneactiontype"></a>
<a id="schema_ScheduledAutoTuneActionType"></a>
<a id="tocSscheduledautotuneactiontype"></a>
<a id="tocsscheduledautotuneactiontype"></a>

```json
"JVM_HEAP_SIZE_TUNING"
```

Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING.

<h2 id="tocS_ScheduledAutoTuneDescription">ScheduledAutoTuneDescription</h2>
<!-- backwards compatibility -->
<a id="schemascheduledautotunedescription"></a>
<a id="schema_ScheduledAutoTuneDescription"></a>
<a id="tocSscheduledautotunedescription"></a>
<a id="tocsscheduledautotunedescription"></a>

```json
"string"
```

Specifies Auto-Tune action description.

<h2 id="tocS_ScheduledAutoTuneSeverityType">ScheduledAutoTuneSeverityType</h2>
<!-- backwards compatibility -->
<a id="schemascheduledautotuneseveritytype"></a>
<a id="schema_ScheduledAutoTuneSeverityType"></a>
<a id="tocSscheduledautotuneseveritytype"></a>
<a id="tocsscheduledautotuneseveritytype"></a>

```json
"LOW"
```

Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH.

<h2 id="tocS_StartElasticsearchServiceSoftwareUpdateRequest">StartElasticsearchServiceSoftwareUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartelasticsearchservicesoftwareupdaterequest"></a>
<a id="schema_StartElasticsearchServiceSoftwareUpdateRequest"></a>
<a id="tocSstartelasticsearchservicesoftwareupdaterequest"></a>
<a id="tocsstartelasticsearchservicesoftwareupdaterequest"></a>

```json
{
  "DomainName": {}
}
```

Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|

<h2 id="tocS_StartTimestamp">StartTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemastarttimestamp"></a>
<a id="schema_StartTimestamp"></a>
<a id="tocSstarttimestamp"></a>
<a id="tocsstarttimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_StorageSubTypeName">StorageSubTypeName</h2>
<!-- backwards compatibility -->
<a id="schemastoragesubtypename"></a>
<a id="schema_StorageSubTypeName"></a>
<a id="tocSstoragesubtypename"></a>
<a id="tocsstoragesubtypename"></a>

```json
"string"
```

 SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>gp3</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.

<h2 id="tocS_StorageTypeName">StorageTypeName</h2>
<!-- backwards compatibility -->
<a id="schemastoragetypename"></a>
<a id="schema_StorageTypeName"></a>
<a id="tocSstoragetypename"></a>
<a id="tocsstoragetypename"></a>

```json
"string"
```

 Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol>

<h2 id="tocS_StorageTypeLimitList">StorageTypeLimitList</h2>
<!-- backwards compatibility -->
<a id="schemastoragetypelimitlist"></a>
<a id="schema_StorageTypeLimitList"></a>
<a id="tocSstoragetypelimitlist"></a>
<a id="tocsstoragetypelimitlist"></a>

```json
[
  {
    "LimitName": {},
    "LimitValues": {}
  }
]
```

<h2 id="tocS_StorageType">StorageType</h2>
<!-- backwards compatibility -->
<a id="schemastoragetype"></a>
<a id="schema_StorageType"></a>
<a id="tocSstoragetype"></a>
<a id="tocsstoragetype"></a>

```json
{
  "StorageTypeName": "string",
  "StorageSubTypeName": "string",
  "StorageTypeLimits": {}
}
```

StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StorageTypeName|[StorageTypeName](#schemastoragetypename)|false|none| Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> |
|StorageSubTypeName|[StorageSubTypeName](#schemastoragesubtypename)|false|none| SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>gp3</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. |
|StorageTypeLimits|object|false|none|none|

<h2 id="tocS_StorageTypeLimit">StorageTypeLimit</h2>
<!-- backwards compatibility -->
<a id="schemastoragetypelimit"></a>
<a id="schema_StorageTypeLimit"></a>
<a id="tocSstoragetypelimit"></a>
<a id="tocsstoragetypelimit"></a>

```json
{
  "LimitName": {},
  "LimitValues": {}
}
```

Limits that are applicable for given storage type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LimitName|object|false|none|none|
|LimitValues|object|false|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.

<h2 id="tocS_UpdateElasticsearchDomainConfigRequest">UpdateElasticsearchDomainConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateelasticsearchdomainconfigrequest"></a>
<a id="schema_UpdateElasticsearchDomainConfigRequest"></a>
<a id="tocSupdateelasticsearchdomainconfigrequest"></a>
<a id="tocsupdateelasticsearchdomainconfigrequest"></a>

```json
{
  "ElasticsearchClusterConfig": {
    "InstanceType": {},
    "InstanceCount": {},
    "DedicatedMasterEnabled": {},
    "ZoneAwarenessEnabled": {},
    "ZoneAwarenessConfig": {
      "AvailabilityZoneCount": {}
    },
    "DedicatedMasterType": {},
    "DedicatedMasterCount": {},
    "WarmEnabled": {},
    "WarmType": {},
    "WarmCount": {},
    "ColdStorageOptions": {
      "Enabled": {}
    }
  },
  "EBSOptions": {
    "EBSEnabled": {},
    "VolumeType": {},
    "VolumeSize": {},
    "Iops": {},
    "Throughput": {}
  },
  "SnapshotOptions": {
    "AutomatedSnapshotStartHour": {}
  },
  "VPCOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  },
  "CognitoOptions": {
    "Enabled": {},
    "UserPoolId": {},
    "IdentityPoolId": {},
    "RoleArn": {}
  },
  "AdvancedOptions": {
    "property1": "string",
    "property2": "string"
  },
  "AccessPolicies": {},
  "LogPublishingOptions": {
    "property1": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    },
    "property2": {
      "CloudWatchLogsLogGroupArn": "string",
      "Enabled": {}
    }
  },
  "DomainEndpointOptions": {
    "EnforceHTTPS": {},
    "TLSSecurityPolicy": {},
    "CustomEndpointEnabled": {},
    "CustomEndpoint": {},
    "CustomEndpointCertificateArn": {}
  },
  "AdvancedSecurityOptions": {
    "Enabled": {},
    "InternalUserDatabaseEnabled": {},
    "MasterUserOptions": {
      "MasterUserARN": {},
      "MasterUserName": {},
      "MasterUserPassword": {}
    },
    "SAMLOptions": {
      "Enabled": {},
      "Idp": {
        "MetadataContent": {},
        "EntityId": {}
      },
      "MasterUserName": {},
      "MasterBackendRole": {},
      "SubjectKey": {},
      "RolesKey": {},
      "SessionTimeoutMinutes": {}
    },
    "AnonymousAuthEnabled": {}
  },
  "NodeToNodeEncryptionOptions": {
    "Enabled": {}
  },
  "EncryptionAtRestOptions": {
    "Enabled": {},
    "KmsKeyId": {}
  },
  "AutoTuneOptions": {
    "DesiredState": {},
    "RollbackOnDisable": {},
    "MaintenanceSchedules": {}
  },
  "DryRun": {}
}
```

Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElasticsearchClusterConfig|object|false|none|none|
|EBSOptions|object|false|none|none|
|SnapshotOptions|object|false|none|none|
|VPCOptions|object|false|none|none|
|CognitoOptions|object|false|none|none|
|AdvancedOptions|object|false|none|none|
|AccessPolicies|object|false|none|none|
|LogPublishingOptions|object|false|none|none|
|DomainEndpointOptions|object|false|none|none|
|AdvancedSecurityOptions|object|false|none|none|
|NodeToNodeEncryptionOptions|object|false|none|none|
|EncryptionAtRestOptions|object|false|none|none|
|AutoTuneOptions|object|false|none|none|
|DryRun|object|false|none|none|

<h2 id="tocS_UpdatePackageRequest">UpdatePackageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepackagerequest"></a>
<a id="schema_UpdatePackageRequest"></a>
<a id="tocSupdatepackagerequest"></a>
<a id="tocsupdatepackagerequest"></a>

```json
{
  "PackageID": {},
  "PackageSource": {
    "S3BucketName": {},
    "S3Key": {}
  },
  "PackageDescription": {},
  "CommitMessage": {}
}
```

 Container for request parameters to <code> <a>UpdatePackage</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PackageID|object|true|none|none|
|PackageSource|[PackageSource](#schemapackagesource)|true|none|The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>|
|PackageDescription|object|false|none|none|
|CommitMessage|object|false|none|none|

<h2 id="tocS_UpdateVpcEndpointRequest">UpdateVpcEndpointRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcendpointrequest"></a>
<a id="schema_UpdateVpcEndpointRequest"></a>
<a id="tocSupdatevpcendpointrequest"></a>
<a id="tocsupdatevpcendpointrequest"></a>

```json
{
  "VpcEndpointId": {},
  "VpcOptions": {
    "SubnetIds": {},
    "SecurityGroupIds": {}
  }
}
```

Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointId|object|true|none|none|
|VpcOptions|object|true|none|none|

<h2 id="tocS_UpgradeElasticsearchDomainRequest">UpgradeElasticsearchDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupgradeelasticsearchdomainrequest"></a>
<a id="schema_UpgradeElasticsearchDomainRequest"></a>
<a id="tocSupgradeelasticsearchdomainrequest"></a>
<a id="tocsupgradeelasticsearchdomainrequest"></a>

```json
{
  "DomainName": "string",
  "TargetVersion": {},
  "PerformCheckOnly": {}
}
```

 Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|[DomainName](#schemadomainname)|true|none|The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).|
|TargetVersion|object|true|none|none|
|PerformCheckOnly|object|false|none|none|

<h2 id="tocS_UpgradeStepsList">UpgradeStepsList</h2>
<!-- backwards compatibility -->
<a id="schemaupgradestepslist"></a>
<a id="schema_UpgradeStepsList"></a>
<a id="tocSupgradestepslist"></a>
<a id="tocsupgradestepslist"></a>

```json
[
  {
    "UpgradeStep": {},
    "UpgradeStepStatus": {},
    "Issues": {},
    "ProgressPercent": {}
  }
]
```

<h2 id="tocS_UpgradeHistory">UpgradeHistory</h2>
<!-- backwards compatibility -->
<a id="schemaupgradehistory"></a>
<a id="schema_UpgradeHistory"></a>
<a id="tocSupgradehistory"></a>
<a id="tocsupgradehistory"></a>

```json
{
  "UpgradeName": {},
  "StartTimestamp": {},
  "UpgradeStatus": {},
  "StepsList": {}
}
```

History of the last 10 Upgrades and Upgrade Eligibility Checks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradeName|object|false|none|none|
|StartTimestamp|object|false|none|none|
|UpgradeStatus|object|false|none|none|
|StepsList|object|false|none|none|

<h2 id="tocS_UpgradeStepItem">UpgradeStepItem</h2>
<!-- backwards compatibility -->
<a id="schemaupgradestepitem"></a>
<a id="schema_UpgradeStepItem"></a>
<a id="tocSupgradestepitem"></a>
<a id="tocsupgradestepitem"></a>

```json
{
  "UpgradeStep": {},
  "UpgradeStepStatus": {},
  "Issues": {},
  "ProgressPercent": {}
}
```

Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|UpgradeStep|object|false|none|none|
|UpgradeStepStatus|object|false|none|none|
|Issues|object|false|none|none|
|ProgressPercent|object|false|none|none|

<h2 id="tocS_VpcEndpointStatus">VpcEndpointStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointstatus"></a>
<a id="schema_VpcEndpointStatus"></a>
<a id="tocSvpcendpointstatus"></a>
<a id="tocsvpcendpointstatus"></a>

```json
"CREATING"
```

Specifies the current status of the VPC endpoint: <ul> <li>CREATING: Indicates that the VPC endpoint is currently being created.</li> <li>CREATE_FAILED: Indicates that the VPC endpoint creation failed.</li> <li>ACTIVE: Indicates that the VPC endpoint is currently active.</li> <li>UPDATING: Indicates that the VPC endpoint is currently being updated.</li> <li>UPDATE_FAILED: Indicates that the VPC endpoint update failed.</li> <li>DELETING: Indicates that the VPC endpoint is currently being deleted.</li> <li>DELETE_FAILED: Indicates that the VPC endpoint deletion failed.</li> </ul>

<h2 id="tocS_VpcEndpointErrorCode">VpcEndpointErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointerrorcode"></a>
<a id="schema_VpcEndpointErrorCode"></a>
<a id="tocSvpcendpointerrorcode"></a>
<a id="tocsvpcendpointerrorcode"></a>

```json
"ENDPOINT_NOT_FOUND"
```

Specifies the error code of the failure encountered while describing the VPC endpoint: <ul> <li>ENDPOINT_NOT_FOUND: Indicates that the requested VPC endpoint does not exist.</li> <li>SERVER_ERROR: Indicates the describe endpoint operation failed due to an internal server error.</li> </ul>

<h2 id="tocS_VpcEndpointError">VpcEndpointError</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointerror"></a>
<a id="schema_VpcEndpointError"></a>
<a id="tocSvpcendpointerror"></a>
<a id="tocsvpcendpointerror"></a>

```json
{
  "VpcEndpointId": {},
  "ErrorCode": {},
  "ErrorMessage": {}
}
```

Error information when attempting to describe an Amazon OpenSearch Service-managed VPC endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcEndpointId|object|false|none|none|
|ErrorCode|object|false|none|none|
|ErrorMessage|object|false|none|none|
