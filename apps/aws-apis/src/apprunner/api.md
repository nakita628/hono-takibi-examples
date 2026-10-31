<h1 id="aws-app-runner">AWS App Runner v2020-05-15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>App Runner</fullname> <p>App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a running service in the Amazon Web Services Cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to provision and configure Amazon Web Services resources.</p> <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations, high performance, scalability, and security.</p> <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">App Runner Developer Guide</a>. For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">App Runner Release Notes</a>.</p> <p> To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>

Base URLs:

* <a href="http://apprunner.us-east-1.amazonaws.com">http://apprunner.us-east-1.amazonaws.com</a> - The AWS App Runner multi-region endpoint

* <a href="https://apprunner.us-east-1.amazonaws.com">https://apprunner.us-east-1.amazonaws.com</a> - The AWS App Runner multi-region endpoint

* <a href="http://apprunner.cn-north-1.amazonaws.com.cn">http://apprunner.cn-north-1.amazonaws.com.cn</a> - The AWS App Runner endpoint for China (Beijing) and China (Ningxia)

* <a href="https://apprunner.cn-north-1.amazonaws.com.cn">https://apprunner.cn-north-1.amazonaws.com.cn</a> - The AWS App Runner endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/apprunner/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="aws-app-runner-default">Default</h1>

## AssociateCustomDomain

<a id="opIdAssociateCustomDomain"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.AssociateCustomDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.AssociateCustomDomain' \
  -d '{
    "ServiceArn": {},
    "DomainName": {},
    "EnableWWWSubdomain": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.AssociateCustomDomain`

<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>

> Body parameter

```json
{
  "ServiceArn": {},
  "DomainName": {},
  "EnableWWWSubdomain": {}
}
```

<h3 id="associatecustomdomain-parameters">Parameters</h3>

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
|body|body|[AssociateCustomDomainRequest](#schemaassociatecustomdomainrequest)|true|none|
|» ServiceArn|body|object|true|none|
|» DomainName|body|object|true|none|
|» EnableWWWSubdomain|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.AssociateCustomDomain|

> Example responses

> 200 Response

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomain": {
    "DomainName": {},
    "EnableWWWSubdomain": {},
    "CertificateValidationRecords": {},
    "Status": {}
  },
  "VpcDNSTargets": {}
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

<h3 id="associatecustomdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateCustomDomainResponse](#schemaassociatecustomdomainresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateAutoScalingConfiguration

<a id="opIdCreateAutoScalingConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateAutoScalingConfiguration' \
  -d '{
    "AutoScalingConfigurationName": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration`

<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>

> Body parameter

```json
{
  "AutoScalingConfigurationName": {},
  "MaxConcurrency": {},
  "MinSize": {},
  "MaxSize": {},
  "Tags": {}
}
```

<h3 id="createautoscalingconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateAutoScalingConfigurationRequest](#schemacreateautoscalingconfigurationrequest)|true|none|
|» AutoScalingConfigurationName|body|object|true|none|
|» MaxConcurrency|body|object|false|none|
|» MinSize|body|object|false|none|
|» MaxSize|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateAutoScalingConfiguration|

> Example responses

> 200 Response

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="createautoscalingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateAutoScalingConfigurationResponse](#schemacreateautoscalingconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateConnection

<a id="opIdCreateConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateConnection' \
  -d '{
    "ConnectionName": {},
    "ProviderType": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateConnection`

<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>

> Body parameter

```json
{
  "ConnectionName": {},
  "ProviderType": {},
  "Tags": {}
}
```

<h3 id="createconnection-parameters">Parameters</h3>

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
|body|body|[CreateConnectionRequest](#schemacreateconnectionrequest)|true|none|
|» ConnectionName|body|object|true|none|
|» ProviderType|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateConnection|

> Example responses

> 200 Response

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "Status": {},
    "CreatedAt": {}
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

<h3 id="createconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectionResponse](#schemacreateconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateObservabilityConfiguration

<a id="opIdCreateObservabilityConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateObservabilityConfiguration' \
  -d '{
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateObservabilityConfiguration`

<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>

> Body parameter

```json
{
  "ObservabilityConfigurationName": {},
  "TraceConfiguration": {
    "Vendor": {}
  },
  "Tags": {}
}
```

<h3 id="createobservabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[CreateObservabilityConfigurationRequest](#schemacreateobservabilityconfigurationrequest)|true|none|
|» ObservabilityConfigurationName|body|object|true|none|
|» TraceConfiguration|body|object|false|none|
|» » Vendor|body|object|true|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateObservabilityConfiguration|

> Example responses

> 200 Response

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="createobservabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateObservabilityConfigurationResponse](#schemacreateobservabilityconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateService

<a id="opIdCreateService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateService' \
  -d '{
    "ServiceName": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "Tags": {},
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationArn": {},
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateService`

<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>

> Body parameter

```json
{
  "ServiceName": {},
  "SourceConfiguration": {
    "CodeRepository": {
      "RepositoryUrl": {},
      "SourceCodeVersion": {
        "Type": {},
        "Value": {}
      },
      "CodeConfiguration": {
        "ConfigurationSource": {},
        "CodeConfigurationValues": {
          "Runtime": {},
          "BuildCommand": {},
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        }
      }
    },
    "ImageRepository": {
      "ImageIdentifier": {},
      "ImageConfiguration": {
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ImageRepositoryType": {}
    },
    "AutoDeploymentsEnabled": {},
    "AuthenticationConfiguration": {
      "ConnectionArn": {},
      "AccessRoleArn": {}
    }
  },
  "InstanceConfiguration": {
    "Cpu": {},
    "Memory": {},
    "InstanceRoleArn": {}
  },
  "Tags": {},
  "EncryptionConfiguration": {
    "KmsKey": {}
  },
  "HealthCheckConfiguration": {
    "Protocol": {},
    "Path": {},
    "Interval": {},
    "Timeout": {},
    "HealthyThreshold": {},
    "UnhealthyThreshold": {}
  },
  "AutoScalingConfigurationArn": {},
  "NetworkConfiguration": {
    "EgressConfiguration": {
      "EgressType": {},
      "VpcConnectorArn": {}
    },
    "IngressConfiguration": {
      "IsPubliclyAccessible": {}
    }
  },
  "ObservabilityConfiguration": {
    "ObservabilityEnabled": {},
    "ObservabilityConfigurationArn": {}
  }
}
```

<h3 id="createservice-parameters">Parameters</h3>

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
|body|body|[CreateServiceRequest](#schemacreateservicerequest)|true|none|
|» ServiceName|body|object|true|none|
|» SourceConfiguration|body|object|true|none|
|» » CodeRepository|body|object|false|none|
|» » » RepositoryUrl|body|object|true|none|
|» » » SourceCodeVersion|body|object|true|none|
|» » » » Type|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » CodeConfiguration|body|object|false|none|
|» » » » ConfigurationSource|body|object|true|none|
|» » » » CodeConfigurationValues|body|object|false|none|
|» » » » » Runtime|body|object|true|none|
|» » » » » BuildCommand|body|object|false|none|
|» » » » » StartCommand|body|object|false|none|
|» » » » » Port|body|object|false|none|
|» » » » » RuntimeEnvironmentVariables|body|object|false|none|
|» » » » » » **additionalProperties**|body|[RuntimeEnvironmentVariablesValue](#schemaruntimeenvironmentvariablesvalue)|false|none|
|» » » » » RuntimeEnvironmentSecrets|body|object|false|none|
|» » » » » » **additionalProperties**|body|[RuntimeEnvironmentSecretsValue](#schemaruntimeenvironmentsecretsvalue)|false|none|
|» » ImageRepository|body|object|false|none|
|» » » ImageIdentifier|body|object|true|none|
|» » » ImageConfiguration|body|object|false|none|
|» » » » RuntimeEnvironmentVariables|body|object|false|none|
|» » » » » **additionalProperties**|body|[RuntimeEnvironmentVariablesValue](#schemaruntimeenvironmentvariablesvalue)|false|none|
|» » » » StartCommand|body|object|false|none|
|» » » » Port|body|object|false|none|
|» » » » RuntimeEnvironmentSecrets|body|object|false|none|
|» » » » » **additionalProperties**|body|[RuntimeEnvironmentSecretsValue](#schemaruntimeenvironmentsecretsvalue)|false|none|
|» » » ImageRepositoryType|body|object|true|none|
|» » AutoDeploymentsEnabled|body|object|false|none|
|» » AuthenticationConfiguration|body|object|false|none|
|» » » ConnectionArn|body|object|false|none|
|» » » AccessRoleArn|body|object|false|none|
|» InstanceConfiguration|body|object|false|none|
|» » Cpu|body|object|false|none|
|» » Memory|body|object|false|none|
|» » InstanceRoleArn|body|object|false|none|
|» Tags|body|object|false|none|
|» EncryptionConfiguration|body|object|false|none|
|» » KmsKey|body|object|true|none|
|» HealthCheckConfiguration|body|object|false|none|
|» » Protocol|body|object|false|none|
|» » Path|body|object|false|none|
|» » Interval|body|object|false|none|
|» » Timeout|body|object|false|none|
|» » HealthyThreshold|body|object|false|none|
|» » UnhealthyThreshold|body|object|false|none|
|» AutoScalingConfigurationArn|body|object|false|none|
|» NetworkConfiguration|body|object|false|none|
|» » EgressConfiguration|body|object|false|none|
|» » » EgressType|body|object|false|none|
|» » » VpcConnectorArn|body|object|false|none|
|» » IngressConfiguration|body|object|false|none|
|» » » IsPubliclyAccessible|body|object|false|none|
|» ObservabilityConfiguration|body|object|false|none|
|» » ObservabilityEnabled|body|object|true|none|
|» » ObservabilityConfigurationArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
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

<h3 id="createservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateServiceResponse](#schemacreateserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcConnector

<a id="opIdCreateVpcConnector"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateVpcConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateVpcConnector' \
  -d '{
    "VpcConnectorName": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateVpcConnector`

Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).

> Body parameter

```json
{
  "VpcConnectorName": {},
  "Subnets": {},
  "SecurityGroups": {},
  "Tags": {}
}
```

<h3 id="createvpcconnector-parameters">Parameters</h3>

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
|body|body|[CreateVpcConnectorRequest](#schemacreatevpcconnectorrequest)|true|none|
|» VpcConnectorName|body|object|true|none|
|» Subnets|body|object|true|none|
|» SecurityGroups|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateVpcConnector|

> Example responses

> 200 Response

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="createvpcconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcConnectorResponse](#schemacreatevpcconnectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateVpcIngressConnection

<a id="opIdCreateVpcIngressConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.CreateVpcIngressConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.CreateVpcIngressConnection' \
  -d '{
    "ServiceArn": {},
    "VpcIngressConnectionName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.CreateVpcIngressConnection`

Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.

> Body parameter

```json
{
  "ServiceArn": {},
  "VpcIngressConnectionName": {},
  "IngressVpcConfiguration": {
    "VpcId": {},
    "VpcEndpointId": {}
  },
  "Tags": {}
}
```

<h3 id="createvpcingressconnection-parameters">Parameters</h3>

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
|body|body|[CreateVpcIngressConnectionRequest](#schemacreatevpcingressconnectionrequest)|true|none|
|» ServiceArn|body|object|true|none|
|» VpcIngressConnectionName|body|object|true|none|
|» IngressVpcConfiguration|body|object|true|none|
|» » VpcId|body|object|false|none|
|» » VpcEndpointId|body|object|false|none|
|» Tags|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.CreateVpcIngressConnection|

> Example responses

> 200 Response

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="createvpcingressconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateVpcIngressConnectionResponse](#schemacreatevpcingressconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteAutoScalingConfiguration

<a id="opIdDeleteAutoScalingConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteAutoScalingConfiguration' \
  -d '{
    "AutoScalingConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration`

Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

> Body parameter

```json
{
  "AutoScalingConfigurationArn": {}
}
```

<h3 id="deleteautoscalingconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteAutoScalingConfigurationRequest](#schemadeleteautoscalingconfigurationrequest)|true|none|
|» AutoScalingConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteAutoScalingConfiguration|

> Example responses

> 200 Response

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="deleteautoscalingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteAutoScalingConfigurationResponse](#schemadeleteautoscalingconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnection

<a id="opIdDeleteConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteConnection' \
  -d '{
    "ConnectionArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteConnection`

Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.

> Body parameter

```json
{
  "ConnectionArn": {}
}
```

<h3 id="deleteconnection-parameters">Parameters</h3>

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
|body|body|[DeleteConnectionRequest](#schemadeleteconnectionrequest)|true|none|
|» ConnectionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteConnection|

> Example responses

> 200 Response

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "Status": {},
    "CreatedAt": {}
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

<h3 id="deleteconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectionResponse](#schemadeleteconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteObservabilityConfiguration

<a id="opIdDeleteObservabilityConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteObservabilityConfiguration' \
  -d '{
    "ObservabilityConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration`

Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

> Body parameter

```json
{
  "ObservabilityConfigurationArn": {}
}
```

<h3 id="deleteobservabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[DeleteObservabilityConfigurationRequest](#schemadeleteobservabilityconfigurationrequest)|true|none|
|» ObservabilityConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteObservabilityConfiguration|

> Example responses

> 200 Response

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="deleteobservabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteObservabilityConfigurationResponse](#schemadeleteobservabilityconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteService

<a id="opIdDeleteService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteService' \
  -d '{
    "ServiceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteService`

<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>

> Body parameter

```json
{
  "ServiceArn": {}
}
```

<h3 id="deleteservice-parameters">Parameters</h3>

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
|body|body|[DeleteServiceRequest](#schemadeleteservicerequest)|true|none|
|» ServiceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
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

<h3 id="deleteservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteServiceResponse](#schemadeleteserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcConnector

<a id="opIdDeleteVpcConnector"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteVpcConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteVpcConnector' \
  -d '{
    "VpcConnectorArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteVpcConnector`

Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.

> Body parameter

```json
{
  "VpcConnectorArn": {}
}
```

<h3 id="deletevpcconnector-parameters">Parameters</h3>

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
|body|body|[DeleteVpcConnectorRequest](#schemadeletevpcconnectorrequest)|true|none|
|» VpcConnectorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteVpcConnector|

> Example responses

> 200 Response

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="deletevpcconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcConnectorResponse](#schemadeletevpcconnectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteVpcIngressConnection

<a id="opIdDeleteVpcIngressConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DeleteVpcIngressConnection' \
  -d '{
    "VpcIngressConnectionArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DeleteVpcIngressConnection`

<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>

> Body parameter

```json
{
  "VpcIngressConnectionArn": {}
}
```

<h3 id="deletevpcingressconnection-parameters">Parameters</h3>

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
|body|body|[DeleteVpcIngressConnectionRequest](#schemadeletevpcingressconnectionrequest)|true|none|
|» VpcIngressConnectionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DeleteVpcIngressConnection|

> Example responses

> 200 Response

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="deletevpcingressconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteVpcIngressConnectionResponse](#schemadeletevpcingressconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeAutoScalingConfiguration

<a id="opIdDescribeAutoScalingConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeAutoScalingConfiguration' \
  -d '{
    "AutoScalingConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration`

Return a full description of an App Runner automatic scaling configuration resource.

> Body parameter

```json
{
  "AutoScalingConfigurationArn": {}
}
```

<h3 id="describeautoscalingconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeAutoScalingConfigurationRequest](#schemadescribeautoscalingconfigurationrequest)|true|none|
|» AutoScalingConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeAutoScalingConfiguration|

> Example responses

> 200 Response

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="describeautoscalingconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeAutoScalingConfigurationResponse](#schemadescribeautoscalingconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeCustomDomains

<a id="opIdDescribeCustomDomains"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeCustomDomains' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeCustomDomains' \
  -d '{
    "ServiceArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeCustomDomains`

Return a description of custom domain names that are associated with an App Runner service.

> Body parameter

```json
{
  "ServiceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="describecustomdomains-parameters">Parameters</h3>

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
|body|body|[DescribeCustomDomainsRequest](#schemadescribecustomdomainsrequest)|true|none|
|» ServiceArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeCustomDomains|

> Example responses

> 200 Response

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomains": {},
  "VpcDNSTargets": {},
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

<h3 id="describecustomdomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeCustomDomainsResponse](#schemadescribecustomdomainsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeObservabilityConfiguration

<a id="opIdDescribeObservabilityConfiguration"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeObservabilityConfiguration' \
  -d '{
    "ObservabilityConfigurationArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration`

Return a full description of an App Runner observability configuration resource.

> Body parameter

```json
{
  "ObservabilityConfigurationArn": {}
}
```

<h3 id="describeobservabilityconfiguration-parameters">Parameters</h3>

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
|body|body|[DescribeObservabilityConfigurationRequest](#schemadescribeobservabilityconfigurationrequest)|true|none|
|» ObservabilityConfigurationArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeObservabilityConfiguration|

> Example responses

> 200 Response

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="describeobservabilityconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeObservabilityConfigurationResponse](#schemadescribeobservabilityconfigurationresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeService

<a id="opIdDescribeService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeService' \
  -d '{
    "ServiceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeService`

Return a full description of an App Runner service.

> Body parameter

```json
{
  "ServiceArn": {}
}
```

<h3 id="describeservice-parameters">Parameters</h3>

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
|body|body|[DescribeServiceRequest](#schemadescribeservicerequest)|true|none|
|» ServiceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
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

<h3 id="describeservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeServiceResponse](#schemadescribeserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcConnector

<a id="opIdDescribeVpcConnector"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeVpcConnector' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeVpcConnector' \
  -d '{
    "VpcConnectorArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeVpcConnector`

Return a description of an App Runner VPC connector resource.

> Body parameter

```json
{
  "VpcConnectorArn": {}
}
```

<h3 id="describevpcconnector-parameters">Parameters</h3>

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
|body|body|[DescribeVpcConnectorRequest](#schemadescribevpcconnectorrequest)|true|none|
|» VpcConnectorArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeVpcConnector|

> Example responses

> 200 Response

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="describevpcconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcConnectorResponse](#schemadescribevpcconnectorresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeVpcIngressConnection

<a id="opIdDescribeVpcIngressConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DescribeVpcIngressConnection' \
  -d '{
    "VpcIngressConnectionArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DescribeVpcIngressConnection`

Return a full description of an App Runner VPC Ingress Connection resource.

> Body parameter

```json
{
  "VpcIngressConnectionArn": {}
}
```

<h3 id="describevpcingressconnection-parameters">Parameters</h3>

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
|body|body|[DescribeVpcIngressConnectionRequest](#schemadescribevpcingressconnectionrequest)|true|none|
|» VpcIngressConnectionArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DescribeVpcIngressConnection|

> Example responses

> 200 Response

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="describevpcingressconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeVpcIngressConnectionResponse](#schemadescribevpcingressconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateCustomDomain

<a id="opIdDisassociateCustomDomain"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.DisassociateCustomDomain' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.DisassociateCustomDomain' \
  -d '{
    "ServiceArn": {},
    "DomainName": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.DisassociateCustomDomain`

<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>

> Body parameter

```json
{
  "ServiceArn": {},
  "DomainName": {}
}
```

<h3 id="disassociatecustomdomain-parameters">Parameters</h3>

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
|body|body|[DisassociateCustomDomainRequest](#schemadisassociatecustomdomainrequest)|true|none|
|» ServiceArn|body|object|true|none|
|» DomainName|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.DisassociateCustomDomain|

> Example responses

> 200 Response

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomain": {
    "DomainName": {},
    "EnableWWWSubdomain": {},
    "CertificateValidationRecords": {},
    "Status": {}
  },
  "VpcDNSTargets": {}
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

<h3 id="disassociatecustomdomain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateCustomDomainResponse](#schemadisassociatecustomdomainresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListAutoScalingConfigurations

<a id="opIdListAutoScalingConfigurations"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListAutoScalingConfigurations' \
  -d '{
    "AutoScalingConfigurationName": {},
    "LatestOnly": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListAutoScalingConfigurations`

<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>

> Body parameter

```json
{
  "AutoScalingConfigurationName": {},
  "LatestOnly": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listautoscalingconfigurations-parameters">Parameters</h3>

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
|body|body|[ListAutoScalingConfigurationsRequest](#schemalistautoscalingconfigurationsrequest)|true|none|
|» AutoScalingConfigurationName|body|object|false|none|
|» LatestOnly|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListAutoScalingConfigurations|

> Example responses

> 200 Response

```json
{
  "AutoScalingConfigurationSummaryList": {},
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

<h3 id="listautoscalingconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListAutoScalingConfigurationsResponse](#schemalistautoscalingconfigurationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnections

<a id="opIdListConnections"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListConnections' \
  -d '{
    "ConnectionName": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListConnections`

Returns a list of App Runner connections that are associated with your Amazon Web Services account.

> Body parameter

```json
{
  "ConnectionName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listconnections-parameters">Parameters</h3>

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
|body|body|[ListConnectionsRequest](#schemalistconnectionsrequest)|true|none|
|» ConnectionName|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListConnections|

> Example responses

> 200 Response

```json
{
  "ConnectionSummaryList": {},
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

<h3 id="listconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectionsResponse](#schemalistconnectionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListObservabilityConfigurations

<a id="opIdListObservabilityConfigurations"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListObservabilityConfigurations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListObservabilityConfigurations' \
  -d '{
    "ObservabilityConfigurationName": {},
    "LatestOnly": {},
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListObservabilityConfigurations`

<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>

> Body parameter

```json
{
  "ObservabilityConfigurationName": {},
  "LatestOnly": {},
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listobservabilityconfigurations-parameters">Parameters</h3>

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
|body|body|[ListObservabilityConfigurationsRequest](#schemalistobservabilityconfigurationsrequest)|true|none|
|» ObservabilityConfigurationName|body|object|false|none|
|» LatestOnly|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListObservabilityConfigurations|

> Example responses

> 200 Response

```json
{
  "ObservabilityConfigurationSummaryList": {},
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

<h3 id="listobservabilityconfigurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListObservabilityConfigurationsResponse](#schemalistobservabilityconfigurationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListOperations

<a id="opIdListOperations"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListOperations' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListOperations' \
  -d '{
    "ServiceArn": {},
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListOperations`

<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>

> Body parameter

```json
{
  "ServiceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listoperations-parameters">Parameters</h3>

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
|body|body|[ListOperationsRequest](#schemalistoperationsrequest)|true|none|
|» ServiceArn|body|object|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListOperations|

> Example responses

> 200 Response

```json
{
  "OperationSummaryList": {},
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

<h3 id="listoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListOperationsResponse](#schemalistoperationsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListServices

<a id="opIdListServices"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListServices' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListServices' \
  -d '{
    "NextToken": {},
    "MaxResults": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListServices`

Returns a list of running App Runner services in your Amazon Web Services account.

> Body parameter

```json
{
  "NextToken": {},
  "MaxResults": {}
}
```

<h3 id="listservices-parameters">Parameters</h3>

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
|body|body|[ListServicesRequest](#schemalistservicesrequest)|true|none|
|» NextToken|body|object|false|none|
|» MaxResults|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListServices|

> Example responses

> 200 Response

```json
{
  "ServiceSummaryList": {},
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

<h3 id="listservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListServicesResponse](#schemalistservicesresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListTagsForResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListTagsForResource' \
  -d '{
    "ResourceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListTagsForResource`

List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.

> Body parameter

```json
{
  "ResourceArn": {}
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
|» ResourceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListTagsForResource|

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

> 483 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcConnectors

<a id="opIdListVpcConnectors"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListVpcConnectors' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListVpcConnectors' \
  -d '{
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListVpcConnectors`

Returns a list of App Runner VPC connectors in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listvpcconnectors-parameters">Parameters</h3>

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
|body|body|[ListVpcConnectorsRequest](#schemalistvpcconnectorsrequest)|true|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListVpcConnectors|

> Example responses

> 200 Response

```json
{
  "VpcConnectors": {},
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

<h3 id="listvpcconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcConnectorsResponse](#schemalistvpcconnectorsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListVpcIngressConnections

<a id="opIdListVpcIngressConnections"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ListVpcIngressConnections' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ListVpcIngressConnections' \
  -d '{
    "Filter": {
      "ServiceArn": {},
      "VpcEndpointId": {}
    },
    "MaxResults": {},
    "NextToken": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ListVpcIngressConnections`

Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.

> Body parameter

```json
{
  "Filter": {
    "ServiceArn": {},
    "VpcEndpointId": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

<h3 id="listvpcingressconnections-parameters">Parameters</h3>

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
|body|body|[ListVpcIngressConnectionsRequest](#schemalistvpcingressconnectionsrequest)|true|none|
|» Filter|body|object|false|none|
|» » ServiceArn|body|object|false|none|
|» » VpcEndpointId|body|object|false|none|
|» MaxResults|body|object|false|none|
|» NextToken|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ListVpcIngressConnections|

> Example responses

> 200 Response

```json
{
  "VpcIngressConnectionSummaryList": {},
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

<h3 id="listvpcingressconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListVpcIngressConnectionsResponse](#schemalistvpcingressconnectionsresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PauseService

<a id="opIdPauseService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.PauseService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.PauseService' \
  -d '{
    "ServiceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.PauseService`

<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

> Body parameter

```json
{
  "ServiceArn": {}
}
```

<h3 id="pauseservice-parameters">Parameters</h3>

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
|body|body|[PauseServiceRequest](#schemapauseservicerequest)|true|none|
|» ServiceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.PauseService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
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

<h3 id="pauseservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PauseServiceResponse](#schemapauseserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ResumeService

<a id="opIdResumeService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.ResumeService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.ResumeService' \
  -d '{
    "ServiceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.ResumeService`

<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

> Body parameter

```json
{
  "ServiceArn": {}
}
```

<h3 id="resumeservice-parameters">Parameters</h3>

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
|body|body|[ResumeServiceRequest](#schemaresumeservicerequest)|true|none|
|» ServiceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.ResumeService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
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

<h3 id="resumeservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ResumeServiceResponse](#schemaresumeserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartDeployment

<a id="opIdStartDeployment"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.StartDeployment' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.StartDeployment' \
  -d '{
    "ServiceArn": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.StartDeployment`

<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

> Body parameter

```json
{
  "ServiceArn": {}
}
```

<h3 id="startdeployment-parameters">Parameters</h3>

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
|body|body|[StartDeploymentRequest](#schemastartdeploymentrequest)|true|none|
|» ServiceArn|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.StartDeployment|

> Example responses

> 200 Response

```json
{
  "OperationId": {}
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

<h3 id="startdeployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartDeploymentResponse](#schemastartdeploymentresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.TagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.TagResource' \
  -d '{
    "ResourceArn": {},
    "Tags": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.TagResource`

Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.

> Body parameter

```json
{
  "ResourceArn": {},
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
|body|body|[TagResourceRequest](#schematagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» Tags|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.TagResource|

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

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.UntagResource' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.UntagResource' \
  -d '{
    "ResourceArn": {},
    "TagKeys": {}
  }'
```

`POST /#X-Amz-Target=AppRunner.UntagResource`

Remove tags from an App Runner resource.

> Body parameter

```json
{
  "ResourceArn": {},
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
|body|body|[UntagResourceRequest](#schemauntagresourcerequest)|true|none|
|» ResourceArn|body|object|true|none|
|» TagKeys|body|object|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.UntagResource|

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

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|
|482|482|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|483|483|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateService

<a id="opIdUpdateService"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.UpdateService' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.UpdateService' \
  -d '{
    "ServiceArn": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "AutoScalingConfigurationArn": {},
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  }'
```

`POST /#X-Amz-Target=AppRunner.UpdateService`

<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>

> Body parameter

```json
{
  "ServiceArn": {},
  "SourceConfiguration": {
    "CodeRepository": {
      "RepositoryUrl": {},
      "SourceCodeVersion": {
        "Type": {},
        "Value": {}
      },
      "CodeConfiguration": {
        "ConfigurationSource": {},
        "CodeConfigurationValues": {
          "Runtime": {},
          "BuildCommand": {},
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        }
      }
    },
    "ImageRepository": {
      "ImageIdentifier": {},
      "ImageConfiguration": {
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ImageRepositoryType": {}
    },
    "AutoDeploymentsEnabled": {},
    "AuthenticationConfiguration": {
      "ConnectionArn": {},
      "AccessRoleArn": {}
    }
  },
  "InstanceConfiguration": {
    "Cpu": {},
    "Memory": {},
    "InstanceRoleArn": {}
  },
  "AutoScalingConfigurationArn": {},
  "HealthCheckConfiguration": {
    "Protocol": {},
    "Path": {},
    "Interval": {},
    "Timeout": {},
    "HealthyThreshold": {},
    "UnhealthyThreshold": {}
  },
  "NetworkConfiguration": {
    "EgressConfiguration": {
      "EgressType": {},
      "VpcConnectorArn": {}
    },
    "IngressConfiguration": {
      "IsPubliclyAccessible": {}
    }
  },
  "ObservabilityConfiguration": {
    "ObservabilityEnabled": {},
    "ObservabilityConfigurationArn": {}
  }
}
```

<h3 id="updateservice-parameters">Parameters</h3>

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
|body|body|[UpdateServiceRequest](#schemaupdateservicerequest)|true|none|
|» ServiceArn|body|object|true|none|
|» SourceConfiguration|body|object|false|none|
|» » CodeRepository|body|object|false|none|
|» » » RepositoryUrl|body|object|true|none|
|» » » SourceCodeVersion|body|object|true|none|
|» » » » Type|body|object|true|none|
|» » » » Value|body|object|true|none|
|» » » CodeConfiguration|body|object|false|none|
|» » » » ConfigurationSource|body|object|true|none|
|» » » » CodeConfigurationValues|body|object|false|none|
|» » » » » Runtime|body|object|true|none|
|» » » » » BuildCommand|body|object|false|none|
|» » » » » StartCommand|body|object|false|none|
|» » » » » Port|body|object|false|none|
|» » » » » RuntimeEnvironmentVariables|body|object|false|none|
|» » » » » » **additionalProperties**|body|[RuntimeEnvironmentVariablesValue](#schemaruntimeenvironmentvariablesvalue)|false|none|
|» » » » » RuntimeEnvironmentSecrets|body|object|false|none|
|» » » » » » **additionalProperties**|body|[RuntimeEnvironmentSecretsValue](#schemaruntimeenvironmentsecretsvalue)|false|none|
|» » ImageRepository|body|object|false|none|
|» » » ImageIdentifier|body|object|true|none|
|» » » ImageConfiguration|body|object|false|none|
|» » » » RuntimeEnvironmentVariables|body|object|false|none|
|» » » » » **additionalProperties**|body|[RuntimeEnvironmentVariablesValue](#schemaruntimeenvironmentvariablesvalue)|false|none|
|» » » » StartCommand|body|object|false|none|
|» » » » Port|body|object|false|none|
|» » » » RuntimeEnvironmentSecrets|body|object|false|none|
|» » » » » **additionalProperties**|body|[RuntimeEnvironmentSecretsValue](#schemaruntimeenvironmentsecretsvalue)|false|none|
|» » » ImageRepositoryType|body|object|true|none|
|» » AutoDeploymentsEnabled|body|object|false|none|
|» » AuthenticationConfiguration|body|object|false|none|
|» » » ConnectionArn|body|object|false|none|
|» » » AccessRoleArn|body|object|false|none|
|» InstanceConfiguration|body|object|false|none|
|» » Cpu|body|object|false|none|
|» » Memory|body|object|false|none|
|» » InstanceRoleArn|body|object|false|none|
|» AutoScalingConfigurationArn|body|object|false|none|
|» HealthCheckConfiguration|body|object|false|none|
|» » Protocol|body|object|false|none|
|» » Path|body|object|false|none|
|» » Interval|body|object|false|none|
|» » Timeout|body|object|false|none|
|» » HealthyThreshold|body|object|false|none|
|» » UnhealthyThreshold|body|object|false|none|
|» NetworkConfiguration|body|object|false|none|
|» » EgressConfiguration|body|object|false|none|
|» » » EgressType|body|object|false|none|
|» » » VpcConnectorArn|body|object|false|none|
|» » IngressConfiguration|body|object|false|none|
|» » » IsPubliclyAccessible|body|object|false|none|
|» ObservabilityConfiguration|body|object|false|none|
|» » ObservabilityEnabled|body|object|true|none|
|» » ObservabilityConfigurationArn|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.UpdateService|

> Example responses

> 200 Response

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
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

<h3 id="updateservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateServiceResponse](#schemaupdateserviceresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateVpcIngressConnection

<a id="opIdUpdateVpcIngressConnection"></a>

> Code samples

```bash
curl 'https://apprunner.us-east-1.amazonaws.com/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Amz-Target: AppRunner.UpdateVpcIngressConnection' \
  -d '{
    "VpcIngressConnectionArn": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    }
  }'
```

`POST /#X-Amz-Target=AppRunner.UpdateVpcIngressConnection`

<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>

> Body parameter

```json
{
  "VpcIngressConnectionArn": {},
  "IngressVpcConfiguration": {
    "VpcId": {},
    "VpcEndpointId": {}
  }
}
```

<h3 id="updatevpcingressconnection-parameters">Parameters</h3>

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
|body|body|[UpdateVpcIngressConnectionRequest](#schemaupdatevpcingressconnectionrequest)|true|none|
|» VpcIngressConnectionArn|body|object|true|none|
|» IngressVpcConfiguration|body|object|true|none|
|» » VpcId|body|object|false|none|
|» » VpcEndpointId|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|X-Amz-Target|AppRunner.UpdateVpcIngressConnection|

> Example responses

> 200 Response

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
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

<h3 id="updatevpcingressconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateVpcIngressConnectionResponse](#schemaupdatevpcingressconnectionresponse)|
|480|480|InvalidRequestException|[InvalidRequestException](#schemainvalidrequestexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InvalidStateException|[InvalidStateException](#schemainvalidstateexception)|
|483|483|InternalServiceErrorException|[InternalServiceErrorException](#schemainternalserviceerrorexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateCustomDomainResponse">AssociateCustomDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecustomdomainresponse"></a>
<a id="schema_AssociateCustomDomainResponse"></a>
<a id="tocSassociatecustomdomainresponse"></a>
<a id="tocsassociatecustomdomainresponse"></a>

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomain": {
    "DomainName": {},
    "EnableWWWSubdomain": {},
    "CertificateValidationRecords": {},
    "Status": {}
  },
  "VpcDNSTargets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSTarget|object|true|none|none|
|ServiceArn|object|true|none|none|
|CustomDomain|object|true|none|none|
|VpcDNSTargets|object|true|none|none|

<h2 id="tocS_AssociateCustomDomainRequest">AssociateCustomDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatecustomdomainrequest"></a>
<a id="schema_AssociateCustomDomainRequest"></a>
<a id="tocSassociatecustomdomainrequest"></a>
<a id="tocsassociatecustomdomainrequest"></a>

```json
{
  "ServiceArn": {},
  "DomainName": {},
  "EnableWWWSubdomain": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|DomainName|object|true|none|none|
|EnableWWWSubdomain|object|false|none|none|

<h2 id="tocS_InvalidRequestException">InvalidRequestException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestexception"></a>
<a id="schema_InvalidRequestException"></a>
<a id="tocSinvalidrequestexception"></a>
<a id="tocsinvalidrequestexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceErrorException">InternalServiceErrorException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceerrorexception"></a>
<a id="schema_InternalServiceErrorException"></a>
<a id="tocSinternalserviceerrorexception"></a>
<a id="tocsinternalserviceerrorexception"></a>

```json
null
```

<h2 id="tocS_InvalidStateException">InvalidStateException</h2>
<!-- backwards compatibility -->
<a id="schemainvalidstateexception"></a>
<a id="schema_InvalidStateException"></a>
<a id="tocSinvalidstateexception"></a>
<a id="tocsinvalidstateexception"></a>

```json
null
```

<h2 id="tocS_CreateAutoScalingConfigurationResponse">CreateAutoScalingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateautoscalingconfigurationresponse"></a>
<a id="schema_CreateAutoScalingConfigurationResponse"></a>
<a id="tocScreateautoscalingconfigurationresponse"></a>
<a id="tocscreateautoscalingconfigurationresponse"></a>

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfiguration|object|true|none|none|

<h2 id="tocS_CreateAutoScalingConfigurationRequest">CreateAutoScalingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateautoscalingconfigurationrequest"></a>
<a id="schema_CreateAutoScalingConfigurationRequest"></a>
<a id="tocScreateautoscalingconfigurationrequest"></a>
<a id="tocscreateautoscalingconfigurationrequest"></a>

```json
{
  "AutoScalingConfigurationName": {},
  "MaxConcurrency": {},
  "MinSize": {},
  "MaxSize": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationName|object|true|none|none|
|MaxConcurrency|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_CreateConnectionResponse">CreateConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionresponse"></a>
<a id="schema_CreateConnectionResponse"></a>
<a id="tocScreateconnectionresponse"></a>
<a id="tocscreateconnectionresponse"></a>

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "Status": {},
    "CreatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|true|none|none|

<h2 id="tocS_CreateConnectionRequest">CreateConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectionrequest"></a>
<a id="schema_CreateConnectionRequest"></a>
<a id="tocScreateconnectionrequest"></a>
<a id="tocscreateconnectionrequest"></a>

```json
{
  "ConnectionName": {},
  "ProviderType": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionName|object|true|none|none|
|ProviderType|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateObservabilityConfigurationResponse">CreateObservabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateobservabilityconfigurationresponse"></a>
<a id="schema_CreateObservabilityConfigurationResponse"></a>
<a id="tocScreateobservabilityconfigurationresponse"></a>
<a id="tocscreateobservabilityconfigurationresponse"></a>

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfiguration|object|true|none|none|

<h2 id="tocS_CreateObservabilityConfigurationRequest">CreateObservabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateobservabilityconfigurationrequest"></a>
<a id="schema_CreateObservabilityConfigurationRequest"></a>
<a id="tocScreateobservabilityconfigurationrequest"></a>
<a id="tocscreateobservabilityconfigurationrequest"></a>

```json
{
  "ObservabilityConfigurationName": {},
  "TraceConfiguration": {
    "Vendor": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationName|object|true|none|none|
|TraceConfiguration|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateServiceResponse">CreateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateserviceresponse"></a>
<a id="schema_CreateServiceResponse"></a>
<a id="tocScreateserviceresponse"></a>
<a id="tocscreateserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|
|OperationId|object|true|none|none|

<h2 id="tocS_CreateServiceRequest">CreateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateservicerequest"></a>
<a id="schema_CreateServiceRequest"></a>
<a id="tocScreateservicerequest"></a>
<a id="tocscreateservicerequest"></a>

```json
{
  "ServiceName": {},
  "SourceConfiguration": {
    "CodeRepository": {
      "RepositoryUrl": {},
      "SourceCodeVersion": {
        "Type": {},
        "Value": {}
      },
      "CodeConfiguration": {
        "ConfigurationSource": {},
        "CodeConfigurationValues": {
          "Runtime": {},
          "BuildCommand": {},
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        }
      }
    },
    "ImageRepository": {
      "ImageIdentifier": {},
      "ImageConfiguration": {
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ImageRepositoryType": {}
    },
    "AutoDeploymentsEnabled": {},
    "AuthenticationConfiguration": {
      "ConnectionArn": {},
      "AccessRoleArn": {}
    }
  },
  "InstanceConfiguration": {
    "Cpu": {},
    "Memory": {},
    "InstanceRoleArn": {}
  },
  "Tags": {},
  "EncryptionConfiguration": {
    "KmsKey": {}
  },
  "HealthCheckConfiguration": {
    "Protocol": {},
    "Path": {},
    "Interval": {},
    "Timeout": {},
    "HealthyThreshold": {},
    "UnhealthyThreshold": {}
  },
  "AutoScalingConfigurationArn": {},
  "NetworkConfiguration": {
    "EgressConfiguration": {
      "EgressType": {},
      "VpcConnectorArn": {}
    },
    "IngressConfiguration": {
      "IsPubliclyAccessible": {}
    }
  },
  "ObservabilityConfiguration": {
    "ObservabilityEnabled": {},
    "ObservabilityConfigurationArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|true|none|none|
|SourceConfiguration|object|true|none|none|
|InstanceConfiguration|object|false|none|none|
|Tags|object|false|none|none|
|EncryptionConfiguration|object|false|none|none|
|HealthCheckConfiguration|object|false|none|none|
|AutoScalingConfigurationArn|object|false|none|none|
|NetworkConfiguration|object|false|none|none|
|ObservabilityConfiguration|object|false|none|none|

<h2 id="tocS_CreateVpcConnectorResponse">CreateVpcConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcconnectorresponse"></a>
<a id="schema_CreateVpcConnectorResponse"></a>
<a id="tocScreatevpcconnectorresponse"></a>
<a id="tocscreatevpcconnectorresponse"></a>

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnector|object|true|none|none|

<h2 id="tocS_CreateVpcConnectorRequest">CreateVpcConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcconnectorrequest"></a>
<a id="schema_CreateVpcConnectorRequest"></a>
<a id="tocScreatevpcconnectorrequest"></a>
<a id="tocscreatevpcconnectorrequest"></a>

```json
{
  "VpcConnectorName": {},
  "Subnets": {},
  "SecurityGroups": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectorName|object|true|none|none|
|Subnets|object|true|none|none|
|SecurityGroups|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateVpcIngressConnectionResponse">CreateVpcIngressConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcingressconnectionresponse"></a>
<a id="schema_CreateVpcIngressConnectionResponse"></a>
<a id="tocScreatevpcingressconnectionresponse"></a>
<a id="tocscreatevpcingressconnectionresponse"></a>

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnection|object|true|none|none|

<h2 id="tocS_CreateVpcIngressConnectionRequest">CreateVpcIngressConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatevpcingressconnectionrequest"></a>
<a id="schema_CreateVpcIngressConnectionRequest"></a>
<a id="tocScreatevpcingressconnectionrequest"></a>
<a id="tocscreatevpcingressconnectionrequest"></a>

```json
{
  "ServiceArn": {},
  "VpcIngressConnectionName": {},
  "IngressVpcConfiguration": {
    "VpcId": {},
    "VpcEndpointId": {}
  },
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|VpcIngressConnectionName|object|true|none|none|
|IngressVpcConfiguration|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DeleteAutoScalingConfigurationResponse">DeleteAutoScalingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautoscalingconfigurationresponse"></a>
<a id="schema_DeleteAutoScalingConfigurationResponse"></a>
<a id="tocSdeleteautoscalingconfigurationresponse"></a>
<a id="tocsdeleteautoscalingconfigurationresponse"></a>

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfiguration|object|true|none|none|

<h2 id="tocS_DeleteAutoScalingConfigurationRequest">DeleteAutoScalingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteautoscalingconfigurationrequest"></a>
<a id="schema_DeleteAutoScalingConfigurationRequest"></a>
<a id="tocSdeleteautoscalingconfigurationrequest"></a>
<a id="tocsdeleteautoscalingconfigurationrequest"></a>

```json
{
  "AutoScalingConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationArn|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_DeleteConnectionResponse">DeleteConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionresponse"></a>
<a id="schema_DeleteConnectionResponse"></a>
<a id="tocSdeleteconnectionresponse"></a>
<a id="tocsdeleteconnectionresponse"></a>

```json
{
  "Connection": {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "Status": {},
    "CreatedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Connection|object|false|none|none|

<h2 id="tocS_DeleteConnectionRequest">DeleteConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectionrequest"></a>
<a id="schema_DeleteConnectionRequest"></a>
<a id="tocSdeleteconnectionrequest"></a>
<a id="tocsdeleteconnectionrequest"></a>

```json
{
  "ConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|true|none|none|

<h2 id="tocS_DeleteObservabilityConfigurationResponse">DeleteObservabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobservabilityconfigurationresponse"></a>
<a id="schema_DeleteObservabilityConfigurationResponse"></a>
<a id="tocSdeleteobservabilityconfigurationresponse"></a>
<a id="tocsdeleteobservabilityconfigurationresponse"></a>

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfiguration|object|true|none|none|

<h2 id="tocS_DeleteObservabilityConfigurationRequest">DeleteObservabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteobservabilityconfigurationrequest"></a>
<a id="schema_DeleteObservabilityConfigurationRequest"></a>
<a id="tocSdeleteobservabilityconfigurationrequest"></a>
<a id="tocsdeleteobservabilityconfigurationrequest"></a>

```json
{
  "ObservabilityConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationArn|object|true|none|none|

<h2 id="tocS_DeleteServiceResponse">DeleteServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteserviceresponse"></a>
<a id="schema_DeleteServiceResponse"></a>
<a id="tocSdeleteserviceresponse"></a>
<a id="tocsdeleteserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|
|OperationId|object|true|none|none|

<h2 id="tocS_DeleteServiceRequest">DeleteServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteservicerequest"></a>
<a id="schema_DeleteServiceRequest"></a>
<a id="tocSdeleteservicerequest"></a>
<a id="tocsdeleteservicerequest"></a>

```json
{
  "ServiceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|

<h2 id="tocS_DeleteVpcConnectorResponse">DeleteVpcConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcconnectorresponse"></a>
<a id="schema_DeleteVpcConnectorResponse"></a>
<a id="tocSdeletevpcconnectorresponse"></a>
<a id="tocsdeletevpcconnectorresponse"></a>

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnector|object|true|none|none|

<h2 id="tocS_DeleteVpcConnectorRequest">DeleteVpcConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcconnectorrequest"></a>
<a id="schema_DeleteVpcConnectorRequest"></a>
<a id="tocSdeletevpcconnectorrequest"></a>
<a id="tocsdeletevpcconnectorrequest"></a>

```json
{
  "VpcConnectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectorArn|object|true|none|none|

<h2 id="tocS_DeleteVpcIngressConnectionResponse">DeleteVpcIngressConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcingressconnectionresponse"></a>
<a id="schema_DeleteVpcIngressConnectionResponse"></a>
<a id="tocSdeletevpcingressconnectionresponse"></a>
<a id="tocsdeletevpcingressconnectionresponse"></a>

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnection|object|true|none|none|

<h2 id="tocS_DeleteVpcIngressConnectionRequest">DeleteVpcIngressConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletevpcingressconnectionrequest"></a>
<a id="schema_DeleteVpcIngressConnectionRequest"></a>
<a id="tocSdeletevpcingressconnectionrequest"></a>
<a id="tocsdeletevpcingressconnectionrequest"></a>

```json
{
  "VpcIngressConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|true|none|none|

<h2 id="tocS_DescribeAutoScalingConfigurationResponse">DescribeAutoScalingConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautoscalingconfigurationresponse"></a>
<a id="schema_DescribeAutoScalingConfigurationResponse"></a>
<a id="tocSdescribeautoscalingconfigurationresponse"></a>
<a id="tocsdescribeautoscalingconfigurationresponse"></a>

```json
{
  "AutoScalingConfiguration": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "MaxConcurrency": {},
    "MinSize": {},
    "MaxSize": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfiguration|object|true|none|none|

<h2 id="tocS_DescribeAutoScalingConfigurationRequest">DescribeAutoScalingConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeautoscalingconfigurationrequest"></a>
<a id="schema_DescribeAutoScalingConfigurationRequest"></a>
<a id="tocSdescribeautoscalingconfigurationrequest"></a>
<a id="tocsdescribeautoscalingconfigurationrequest"></a>

```json
{
  "AutoScalingConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationArn|object|true|none|none|

<h2 id="tocS_DescribeCustomDomainsResponse">DescribeCustomDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomdomainsresponse"></a>
<a id="schema_DescribeCustomDomainsResponse"></a>
<a id="tocSdescribecustomdomainsresponse"></a>
<a id="tocsdescribecustomdomainsresponse"></a>

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomains": {},
  "VpcDNSTargets": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSTarget|object|true|none|none|
|ServiceArn|object|true|none|none|
|CustomDomains|object|true|none|none|
|VpcDNSTargets|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_DescribeCustomDomainsRequest">DescribeCustomDomainsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomdomainsrequest"></a>
<a id="schema_DescribeCustomDomainsRequest"></a>
<a id="tocSdescribecustomdomainsrequest"></a>
<a id="tocsdescribecustomdomainsrequest"></a>

```json
{
  "ServiceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_DescribeObservabilityConfigurationResponse">DescribeObservabilityConfigurationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobservabilityconfigurationresponse"></a>
<a id="schema_DescribeObservabilityConfigurationResponse"></a>
<a id="tocSdescribeobservabilityconfigurationresponse"></a>
<a id="tocsdescribeobservabilityconfigurationresponse"></a>

```json
{
  "ObservabilityConfiguration": {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "TraceConfiguration": {
      "Vendor": {}
    },
    "ObservabilityConfigurationRevision": {},
    "Latest": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfiguration|object|true|none|none|

<h2 id="tocS_DescribeObservabilityConfigurationRequest">DescribeObservabilityConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeobservabilityconfigurationrequest"></a>
<a id="schema_DescribeObservabilityConfigurationRequest"></a>
<a id="tocSdescribeobservabilityconfigurationrequest"></a>
<a id="tocsdescribeobservabilityconfigurationrequest"></a>

```json
{
  "ObservabilityConfigurationArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationArn|object|true|none|none|

<h2 id="tocS_DescribeServiceResponse">DescribeServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeserviceresponse"></a>
<a id="schema_DescribeServiceResponse"></a>
<a id="tocSdescribeserviceresponse"></a>
<a id="tocsdescribeserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|

<h2 id="tocS_DescribeServiceRequest">DescribeServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeservicerequest"></a>
<a id="schema_DescribeServiceRequest"></a>
<a id="tocSdescribeservicerequest"></a>
<a id="tocsdescribeservicerequest"></a>

```json
{
  "ServiceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|

<h2 id="tocS_DescribeVpcConnectorResponse">DescribeVpcConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcconnectorresponse"></a>
<a id="schema_DescribeVpcConnectorResponse"></a>
<a id="tocSdescribevpcconnectorresponse"></a>
<a id="tocsdescribevpcconnectorresponse"></a>

```json
{
  "VpcConnector": {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnector|object|true|none|none|

<h2 id="tocS_DescribeVpcConnectorRequest">DescribeVpcConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcconnectorrequest"></a>
<a id="schema_DescribeVpcConnectorRequest"></a>
<a id="tocSdescribevpcconnectorrequest"></a>
<a id="tocsdescribevpcconnectorrequest"></a>

```json
{
  "VpcConnectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectorArn|object|true|none|none|

<h2 id="tocS_DescribeVpcIngressConnectionResponse">DescribeVpcIngressConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcingressconnectionresponse"></a>
<a id="schema_DescribeVpcIngressConnectionResponse"></a>
<a id="tocSdescribevpcingressconnectionresponse"></a>
<a id="tocsdescribevpcingressconnectionresponse"></a>

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnection|object|true|none|none|

<h2 id="tocS_DescribeVpcIngressConnectionRequest">DescribeVpcIngressConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribevpcingressconnectionrequest"></a>
<a id="schema_DescribeVpcIngressConnectionRequest"></a>
<a id="tocSdescribevpcingressconnectionrequest"></a>
<a id="tocsdescribevpcingressconnectionrequest"></a>

```json
{
  "VpcIngressConnectionArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|true|none|none|

<h2 id="tocS_DisassociateCustomDomainResponse">DisassociateCustomDomainResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecustomdomainresponse"></a>
<a id="schema_DisassociateCustomDomainResponse"></a>
<a id="tocSdisassociatecustomdomainresponse"></a>
<a id="tocsdisassociatecustomdomainresponse"></a>

```json
{
  "DNSTarget": {},
  "ServiceArn": {},
  "CustomDomain": {
    "DomainName": {},
    "EnableWWWSubdomain": {},
    "CertificateValidationRecords": {},
    "Status": {}
  },
  "VpcDNSTargets": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DNSTarget|object|true|none|none|
|ServiceArn|object|true|none|none|
|CustomDomain|object|true|none|none|
|VpcDNSTargets|object|true|none|none|

<h2 id="tocS_DisassociateCustomDomainRequest">DisassociateCustomDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatecustomdomainrequest"></a>
<a id="schema_DisassociateCustomDomainRequest"></a>
<a id="tocSdisassociatecustomdomainrequest"></a>
<a id="tocsdisassociatecustomdomainrequest"></a>

```json
{
  "ServiceArn": {},
  "DomainName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|DomainName|object|true|none|none|

<h2 id="tocS_ListAutoScalingConfigurationsResponse">ListAutoScalingConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistautoscalingconfigurationsresponse"></a>
<a id="schema_ListAutoScalingConfigurationsResponse"></a>
<a id="tocSlistautoscalingconfigurationsresponse"></a>
<a id="tocslistautoscalingconfigurationsresponse"></a>

```json
{
  "AutoScalingConfigurationSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListAutoScalingConfigurationsRequest">ListAutoScalingConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistautoscalingconfigurationsrequest"></a>
<a id="schema_ListAutoScalingConfigurationsRequest"></a>
<a id="tocSlistautoscalingconfigurationsrequest"></a>
<a id="tocslistautoscalingconfigurationsrequest"></a>

```json
{
  "AutoScalingConfigurationName": {},
  "LatestOnly": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationName|object|false|none|none|
|LatestOnly|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectionsResponse">ListConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsresponse"></a>
<a id="schema_ListConnectionsResponse"></a>
<a id="tocSlistconnectionsresponse"></a>
<a id="tocslistconnectionsresponse"></a>

```json
{
  "ConnectionSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListConnectionsRequest">ListConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectionsrequest"></a>
<a id="schema_ListConnectionsRequest"></a>
<a id="tocSlistconnectionsrequest"></a>
<a id="tocslistconnectionsrequest"></a>

```json
{
  "ConnectionName": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionName|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObservabilityConfigurationsResponse">ListObservabilityConfigurationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistobservabilityconfigurationsresponse"></a>
<a id="schema_ListObservabilityConfigurationsResponse"></a>
<a id="tocSlistobservabilityconfigurationsresponse"></a>
<a id="tocslistobservabilityconfigurationsresponse"></a>

```json
{
  "ObservabilityConfigurationSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListObservabilityConfigurationsRequest">ListObservabilityConfigurationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistobservabilityconfigurationsrequest"></a>
<a id="schema_ListObservabilityConfigurationsRequest"></a>
<a id="tocSlistobservabilityconfigurationsrequest"></a>
<a id="tocslistobservabilityconfigurationsrequest"></a>

```json
{
  "ObservabilityConfigurationName": {},
  "LatestOnly": {},
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationName|object|false|none|none|
|LatestOnly|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "OperationSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationSummaryList|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListOperationsRequest">ListOperationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsrequest"></a>
<a id="schema_ListOperationsRequest"></a>
<a id="tocSlistoperationsrequest"></a>
<a id="tocslistoperationsrequest"></a>

```json
{
  "ServiceArn": {},
  "NextToken": {},
  "MaxResults": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|NextToken|object|false|none|none|
|MaxResults|object|false|none|none|

<h2 id="tocS_ListServicesResponse">ListServicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesresponse"></a>
<a id="schema_ListServicesResponse"></a>
<a id="tocSlistservicesresponse"></a>
<a id="tocslistservicesresponse"></a>

```json
{
  "ServiceSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListServicesRequest">ListServicesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistservicesrequest"></a>
<a id="schema_ListServicesRequest"></a>
<a id="tocSlistservicesrequest"></a>
<a id="tocslistservicesrequest"></a>

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

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{
  "ResourceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|

<h2 id="tocS_ListVpcConnectorsResponse">ListVpcConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcconnectorsresponse"></a>
<a id="schema_ListVpcConnectorsResponse"></a>
<a id="tocSlistvpcconnectorsresponse"></a>
<a id="tocslistvpcconnectorsresponse"></a>

```json
{
  "VpcConnectors": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectors|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVpcConnectorsRequest">ListVpcConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcconnectorsrequest"></a>
<a id="schema_ListVpcConnectorsRequest"></a>
<a id="tocSlistvpcconnectorsrequest"></a>
<a id="tocslistvpcconnectorsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVpcIngressConnectionsResponse">ListVpcIngressConnectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcingressconnectionsresponse"></a>
<a id="schema_ListVpcIngressConnectionsResponse"></a>
<a id="tocSlistvpcingressconnectionsresponse"></a>
<a id="tocslistvpcingressconnectionsresponse"></a>

```json
{
  "VpcIngressConnectionSummaryList": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionSummaryList|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListVpcIngressConnectionsRequest">ListVpcIngressConnectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcingressconnectionsrequest"></a>
<a id="schema_ListVpcIngressConnectionsRequest"></a>
<a id="tocSlistvpcingressconnectionsrequest"></a>
<a id="tocslistvpcingressconnectionsrequest"></a>

```json
{
  "Filter": {
    "ServiceArn": {},
    "VpcEndpointId": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PauseServiceResponse">PauseServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemapauseserviceresponse"></a>
<a id="schema_PauseServiceResponse"></a>
<a id="tocSpauseserviceresponse"></a>
<a id="tocspauseserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|
|OperationId|object|false|none|none|

<h2 id="tocS_PauseServiceRequest">PauseServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapauseservicerequest"></a>
<a id="schema_PauseServiceRequest"></a>
<a id="tocSpauseservicerequest"></a>
<a id="tocspauseservicerequest"></a>

```json
{
  "ServiceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|

<h2 id="tocS_ResumeServiceResponse">ResumeServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresumeserviceresponse"></a>
<a id="schema_ResumeServiceResponse"></a>
<a id="tocSresumeserviceresponse"></a>
<a id="tocsresumeserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|
|OperationId|object|false|none|none|

<h2 id="tocS_ResumeServiceRequest">ResumeServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumeservicerequest"></a>
<a id="schema_ResumeServiceRequest"></a>
<a id="tocSresumeservicerequest"></a>
<a id="tocsresumeservicerequest"></a>

```json
{
  "ServiceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|

<h2 id="tocS_StartDeploymentResponse">StartDeploymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartdeploymentresponse"></a>
<a id="schema_StartDeploymentResponse"></a>
<a id="tocSstartdeploymentresponse"></a>
<a id="tocsstartdeploymentresponse"></a>

```json
{
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|OperationId|object|true|none|none|

<h2 id="tocS_StartDeploymentRequest">StartDeploymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartdeploymentrequest"></a>
<a id="schema_StartDeploymentRequest"></a>
<a id="tocSstartdeploymentrequest"></a>
<a id="tocsstartdeploymentrequest"></a>

```json
{
  "ServiceArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|

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
  "ResourceArn": {},
  "Tags": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|Tags|object|true|none|none|

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
  "ResourceArn": {},
  "TagKeys": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ResourceArn|object|true|none|none|
|TagKeys|object|true|none|none|

<h2 id="tocS_UpdateServiceResponse">UpdateServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateserviceresponse"></a>
<a id="schema_UpdateServiceResponse"></a>
<a id="tocSupdateserviceresponse"></a>
<a id="tocsupdateserviceresponse"></a>

```json
{
  "Service": {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "DeletedAt": {},
    "Status": {},
    "SourceConfiguration": {
      "CodeRepository": {
        "RepositoryUrl": {},
        "SourceCodeVersion": {
          "Type": {},
          "Value": {}
        },
        "CodeConfiguration": {
          "ConfigurationSource": {},
          "CodeConfigurationValues": {
            "Runtime": {},
            "BuildCommand": {},
            "StartCommand": {},
            "Port": {},
            "RuntimeEnvironmentVariables": {
              "property1": "password",
              "property2": "password"
            },
            "RuntimeEnvironmentSecrets": {
              "property1": "password",
              "property2": "password"
            }
          }
        }
      },
      "ImageRepository": {
        "ImageIdentifier": {},
        "ImageConfiguration": {
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        },
        "ImageRepositoryType": {}
      },
      "AutoDeploymentsEnabled": {},
      "AuthenticationConfiguration": {
        "ConnectionArn": {},
        "AccessRoleArn": {}
      }
    },
    "InstanceConfiguration": {
      "Cpu": {},
      "Memory": {},
      "InstanceRoleArn": {}
    },
    "EncryptionConfiguration": {
      "KmsKey": {}
    },
    "HealthCheckConfiguration": {
      "Protocol": {},
      "Path": {},
      "Interval": {},
      "Timeout": {},
      "HealthyThreshold": {},
      "UnhealthyThreshold": {}
    },
    "AutoScalingConfigurationSummary": {
      "AutoScalingConfigurationArn": {},
      "AutoScalingConfigurationName": {},
      "AutoScalingConfigurationRevision": {}
    },
    "NetworkConfiguration": {
      "EgressConfiguration": {
        "EgressType": {},
        "VpcConnectorArn": {}
      },
      "IngressConfiguration": {
        "IsPubliclyAccessible": {}
      }
    },
    "ObservabilityConfiguration": {
      "ObservabilityEnabled": {},
      "ObservabilityConfigurationArn": {}
    }
  },
  "OperationId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Service|object|true|none|none|
|OperationId|object|true|none|none|

<h2 id="tocS_UpdateServiceRequest">UpdateServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateservicerequest"></a>
<a id="schema_UpdateServiceRequest"></a>
<a id="tocSupdateservicerequest"></a>
<a id="tocsupdateservicerequest"></a>

```json
{
  "ServiceArn": {},
  "SourceConfiguration": {
    "CodeRepository": {
      "RepositoryUrl": {},
      "SourceCodeVersion": {
        "Type": {},
        "Value": {}
      },
      "CodeConfiguration": {
        "ConfigurationSource": {},
        "CodeConfigurationValues": {
          "Runtime": {},
          "BuildCommand": {},
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        }
      }
    },
    "ImageRepository": {
      "ImageIdentifier": {},
      "ImageConfiguration": {
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ImageRepositoryType": {}
    },
    "AutoDeploymentsEnabled": {},
    "AuthenticationConfiguration": {
      "ConnectionArn": {},
      "AccessRoleArn": {}
    }
  },
  "InstanceConfiguration": {
    "Cpu": {},
    "Memory": {},
    "InstanceRoleArn": {}
  },
  "AutoScalingConfigurationArn": {},
  "HealthCheckConfiguration": {
    "Protocol": {},
    "Path": {},
    "Interval": {},
    "Timeout": {},
    "HealthyThreshold": {},
    "UnhealthyThreshold": {}
  },
  "NetworkConfiguration": {
    "EgressConfiguration": {
      "EgressType": {},
      "VpcConnectorArn": {}
    },
    "IngressConfiguration": {
      "IsPubliclyAccessible": {}
    }
  },
  "ObservabilityConfiguration": {
    "ObservabilityEnabled": {},
    "ObservabilityConfigurationArn": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|true|none|none|
|SourceConfiguration|object|false|none|none|
|InstanceConfiguration|object|false|none|none|
|AutoScalingConfigurationArn|object|false|none|none|
|HealthCheckConfiguration|object|false|none|none|
|NetworkConfiguration|object|false|none|none|
|ObservabilityConfiguration|object|false|none|none|

<h2 id="tocS_UpdateVpcIngressConnectionResponse">UpdateVpcIngressConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcingressconnectionresponse"></a>
<a id="schema_UpdateVpcIngressConnectionResponse"></a>
<a id="tocSupdatevpcingressconnectionresponse"></a>
<a id="tocsupdatevpcingressconnectionresponse"></a>

```json
{
  "VpcIngressConnection": {
    "VpcIngressConnectionArn": {},
    "VpcIngressConnectionName": {},
    "ServiceArn": {},
    "Status": {},
    "AccountId": {},
    "DomainName": {},
    "IngressVpcConfiguration": {
      "VpcId": {},
      "VpcEndpointId": {}
    },
    "CreatedAt": {},
    "DeletedAt": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnection|object|true|none|none|

<h2 id="tocS_UpdateVpcIngressConnectionRequest">UpdateVpcIngressConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatevpcingressconnectionrequest"></a>
<a id="schema_UpdateVpcIngressConnectionRequest"></a>
<a id="tocSupdatevpcingressconnectionrequest"></a>
<a id="tocsupdatevpcingressconnectionrequest"></a>

```json
{
  "VpcIngressConnectionArn": {},
  "IngressVpcConfiguration": {
    "VpcId": {},
    "VpcEndpointId": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|true|none|none|
|IngressVpcConfiguration|object|true|none|none|

<h2 id="tocS_ASConfigMaxConcurrency">ASConfigMaxConcurrency</h2>
<!-- backwards compatibility -->
<a id="schemaasconfigmaxconcurrency"></a>
<a id="schema_ASConfigMaxConcurrency"></a>
<a id="tocSasconfigmaxconcurrency"></a>
<a id="tocsasconfigmaxconcurrency"></a>

```json
1
```

<h2 id="tocS_ASConfigMaxSize">ASConfigMaxSize</h2>
<!-- backwards compatibility -->
<a id="schemaasconfigmaxsize"></a>
<a id="schema_ASConfigMaxSize"></a>
<a id="tocSasconfigmaxsize"></a>
<a id="tocsasconfigmaxsize"></a>

```json
1
```

<h2 id="tocS_ASConfigMinSize">ASConfigMinSize</h2>
<!-- backwards compatibility -->
<a id="schemaasconfigminsize"></a>
<a id="schema_ASConfigMinSize"></a>
<a id="tocSasconfigminsize"></a>
<a id="tocsasconfigminsize"></a>

```json
1
```

<h2 id="tocS_AppRunnerResourceArn">AppRunnerResourceArn</h2>
<!-- backwards compatibility -->
<a id="schemaapprunnerresourcearn"></a>
<a id="schema_AppRunnerResourceArn"></a>
<a id="tocSapprunnerresourcearn"></a>
<a id="tocsapprunnerresourcearn"></a>

```json
"string"
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

<h2 id="tocS_NullableBoolean">NullableBoolean</h2>
<!-- backwards compatibility -->
<a id="schemanullableboolean"></a>
<a id="schema_NullableBoolean"></a>
<a id="tocSnullableboolean"></a>
<a id="tocsnullableboolean"></a>

```json
true
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

<h2 id="tocS_CustomDomain">CustomDomain</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomain"></a>
<a id="schema_CustomDomain"></a>
<a id="tocScustomdomain"></a>
<a id="tocscustomdomain"></a>

```json
{
  "DomainName": {},
  "EnableWWWSubdomain": {},
  "CertificateValidationRecords": {},
  "Status": {}
}
```

Describes a custom domain that's associated with an App Runner service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DomainName|object|true|none|none|
|EnableWWWSubdomain|object|true|none|none|
|CertificateValidationRecords|object|false|none|none|
|Status|object|true|none|none|

<h2 id="tocS_VpcDNSTargetList">VpcDNSTargetList</h2>
<!-- backwards compatibility -->
<a id="schemavpcdnstargetlist"></a>
<a id="schema_VpcDNSTargetList"></a>
<a id="tocSvpcdnstargetlist"></a>
<a id="tocsvpcdnstargetlist"></a>

```json
[
  {
    "VpcIngressConnectionArn": {},
    "VpcId": {},
    "DomainName": {}
  }
]
```

<h2 id="tocS_RoleArn">RoleArn</h2>
<!-- backwards compatibility -->
<a id="schemarolearn"></a>
<a id="schema_RoleArn"></a>
<a id="tocSrolearn"></a>
<a id="tocsrolearn"></a>

```json
"stringstringstringstringstrin"
```

<h2 id="tocS_AuthenticationConfiguration">AuthenticationConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationconfiguration"></a>
<a id="schema_AuthenticationConfiguration"></a>
<a id="tocSauthenticationconfiguration"></a>
<a id="tocsauthenticationconfiguration"></a>

```json
{
  "ConnectionArn": {},
  "AccessRoleArn": {}
}
```

Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionArn|object|false|none|none|
|AccessRoleArn|object|false|none|none|

<h2 id="tocS_AutoScalingConfigurationName">AutoScalingConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfigurationname"></a>
<a id="schema_AutoScalingConfigurationName"></a>
<a id="tocSautoscalingconfigurationname"></a>
<a id="tocsautoscalingconfigurationname"></a>

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

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_AutoScalingConfigurationStatus">AutoScalingConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfigurationstatus"></a>
<a id="schema_AutoScalingConfigurationStatus"></a>
<a id="tocSautoscalingconfigurationstatus"></a>
<a id="tocsautoscalingconfigurationstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_AutoScalingConfiguration">AutoScalingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfiguration"></a>
<a id="schema_AutoScalingConfiguration"></a>
<a id="tocSautoscalingconfiguration"></a>
<a id="tocsautoscalingconfiguration"></a>

```json
{
  "AutoScalingConfigurationArn": {},
  "AutoScalingConfigurationName": {},
  "AutoScalingConfigurationRevision": {},
  "Latest": {},
  "Status": {},
  "MaxConcurrency": {},
  "MinSize": {},
  "MaxSize": {},
  "CreatedAt": {},
  "DeletedAt": {}
}
```

<p>Describes an App Runner automatic scaling configuration resource.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p> <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationArn|object|false|none|none|
|AutoScalingConfigurationName|object|false|none|none|
|AutoScalingConfigurationRevision|object|false|none|none|
|Latest|object|false|none|none|
|Status|object|false|none|none|
|MaxConcurrency|object|false|none|none|
|MinSize|object|false|none|none|
|MaxSize|object|false|none|none|
|CreatedAt|object|false|none|none|
|DeletedAt|object|false|none|none|

<h2 id="tocS_AutoScalingConfigurationSummary">AutoScalingConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfigurationsummary"></a>
<a id="schema_AutoScalingConfigurationSummary"></a>
<a id="tocSautoscalingconfigurationsummary"></a>
<a id="tocsautoscalingconfigurationsummary"></a>

```json
{
  "AutoScalingConfigurationArn": {},
  "AutoScalingConfigurationName": {},
  "AutoScalingConfigurationRevision": {}
}
```

<p>Provides summary information about an App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoScalingConfigurationArn|object|false|none|none|
|AutoScalingConfigurationName|object|false|none|none|
|AutoScalingConfigurationRevision|object|false|none|none|

<h2 id="tocS_AutoScalingConfigurationSummaryList">AutoScalingConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingconfigurationsummarylist"></a>
<a id="schema_AutoScalingConfigurationSummaryList"></a>
<a id="tocSautoscalingconfigurationsummarylist"></a>
<a id="tocsautoscalingconfigurationsummarylist"></a>

```json
[
  {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {}
  }
]
```

<h2 id="tocS_BuildCommand">BuildCommand</h2>
<!-- backwards compatibility -->
<a id="schemabuildcommand"></a>
<a id="schema_BuildCommand"></a>
<a id="tocSbuildcommand"></a>
<a id="tocsbuildcommand"></a>

```json
"password"
```

<h2 id="tocS_CertificateValidationRecordStatus">CertificateValidationRecordStatus</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationrecordstatus"></a>
<a id="schema_CertificateValidationRecordStatus"></a>
<a id="tocScertificatevalidationrecordstatus"></a>
<a id="tocscertificatevalidationrecordstatus"></a>

```json
"PENDING_VALIDATION"
```

<h2 id="tocS_CertificateValidationRecord">CertificateValidationRecord</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationrecord"></a>
<a id="schema_CertificateValidationRecord"></a>
<a id="tocScertificatevalidationrecord"></a>
<a id="tocscertificatevalidationrecord"></a>

```json
{
  "Name": {},
  "Type": {},
  "Value": {},
  "Status": {}
}
```

Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Type|object|false|none|none|
|Value|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_CertificateValidationRecordList">CertificateValidationRecordList</h2>
<!-- backwards compatibility -->
<a id="schemacertificatevalidationrecordlist"></a>
<a id="schema_CertificateValidationRecordList"></a>
<a id="tocScertificatevalidationrecordlist"></a>
<a id="tocscertificatevalidationrecordlist"></a>

```json
[
  {
    "Name": {},
    "Type": {},
    "Value": {},
    "Status": {}
  }
]
```

<h2 id="tocS_ConfigurationSource">ConfigurationSource</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationsource"></a>
<a id="schema_ConfigurationSource"></a>
<a id="tocSconfigurationsource"></a>
<a id="tocsconfigurationsource"></a>

```json
"REPOSITORY"
```

<h2 id="tocS_CodeConfigurationValues">CodeConfigurationValues</h2>
<!-- backwards compatibility -->
<a id="schemacodeconfigurationvalues"></a>
<a id="schema_CodeConfigurationValues"></a>
<a id="tocScodeconfigurationvalues"></a>
<a id="tocscodeconfigurationvalues"></a>

```json
{
  "Runtime": {},
  "BuildCommand": {},
  "StartCommand": {},
  "Port": {},
  "RuntimeEnvironmentVariables": {
    "property1": "password",
    "property2": "password"
  },
  "RuntimeEnvironmentSecrets": {
    "property1": "password",
    "property2": "password"
  }
}
```

Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Runtime|object|true|none|none|
|BuildCommand|object|false|none|none|
|StartCommand|object|false|none|none|
|Port|object|false|none|none|
|RuntimeEnvironmentVariables|object|false|none|none|
|RuntimeEnvironmentSecrets|object|false|none|none|

<h2 id="tocS_CodeConfiguration">CodeConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacodeconfiguration"></a>
<a id="schema_CodeConfiguration"></a>
<a id="tocScodeconfiguration"></a>
<a id="tocscodeconfiguration"></a>

```json
{
  "ConfigurationSource": {},
  "CodeConfigurationValues": {
    "Runtime": {},
    "BuildCommand": {},
    "StartCommand": {},
    "Port": {},
    "RuntimeEnvironmentVariables": {
      "property1": "password",
      "property2": "password"
    },
    "RuntimeEnvironmentSecrets": {
      "property1": "password",
      "property2": "password"
    }
  }
}
```

Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConfigurationSource|object|true|none|none|
|CodeConfigurationValues|object|false|none|none|

<h2 id="tocS_Runtime">Runtime</h2>
<!-- backwards compatibility -->
<a id="schemaruntime"></a>
<a id="schema_Runtime"></a>
<a id="tocSruntime"></a>
<a id="tocsruntime"></a>

```json
"PYTHON_3"
```

<h2 id="tocS_StartCommand">StartCommand</h2>
<!-- backwards compatibility -->
<a id="schemastartcommand"></a>
<a id="schema_StartCommand"></a>
<a id="tocSstartcommand"></a>
<a id="tocsstartcommand"></a>

```json
"password"
```

<h2 id="tocS_RuntimeEnvironmentVariables">RuntimeEnvironmentVariables</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentvariables"></a>
<a id="schema_RuntimeEnvironmentVariables"></a>
<a id="tocSruntimeenvironmentvariables"></a>
<a id="tocsruntimeenvironmentvariables"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RuntimeEnvironmentVariablesValue](#schemaruntimeenvironmentvariablesvalue)|false|none|none|

<h2 id="tocS_RuntimeEnvironmentSecrets">RuntimeEnvironmentSecrets</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentsecrets"></a>
<a id="schema_RuntimeEnvironmentSecrets"></a>
<a id="tocSruntimeenvironmentsecrets"></a>
<a id="tocsruntimeenvironmentsecrets"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[RuntimeEnvironmentSecretsValue](#schemaruntimeenvironmentsecretsvalue)|false|none|none|

<h2 id="tocS_SourceCodeVersion">SourceCodeVersion</h2>
<!-- backwards compatibility -->
<a id="schemasourcecodeversion"></a>
<a id="schema_SourceCodeVersion"></a>
<a id="tocSsourcecodeversion"></a>
<a id="tocssourcecodeversion"></a>

```json
{
  "Type": {},
  "Value": {}
}
```

Identifies a version of code that App Runner refers to within a source code repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|object|true|none|none|
|Value|object|true|none|none|

<h2 id="tocS_CodeRepository">CodeRepository</h2>
<!-- backwards compatibility -->
<a id="schemacoderepository"></a>
<a id="schema_CodeRepository"></a>
<a id="tocScoderepository"></a>
<a id="tocscoderepository"></a>

```json
{
  "RepositoryUrl": {},
  "SourceCodeVersion": {
    "Type": {},
    "Value": {}
  },
  "CodeConfiguration": {
    "ConfigurationSource": {},
    "CodeConfigurationValues": {
      "Runtime": {},
      "BuildCommand": {},
      "StartCommand": {},
      "Port": {},
      "RuntimeEnvironmentVariables": {
        "property1": "password",
        "property2": "password"
      },
      "RuntimeEnvironmentSecrets": {
        "property1": "password",
        "property2": "password"
      }
    }
  }
}
```

Describes a source code repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RepositoryUrl|object|true|none|none|
|SourceCodeVersion|object|true|none|none|
|CodeConfiguration|object|false|none|none|

<h2 id="tocS_ConnectionName">ConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionname"></a>
<a id="schema_ConnectionName"></a>
<a id="tocSconnectionname"></a>
<a id="tocsconnectionname"></a>

```json
"string"
```

<h2 id="tocS_ProviderType">ProviderType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype"></a>
<a id="schema_ProviderType"></a>
<a id="tocSprovidertype"></a>
<a id="tocsprovidertype"></a>

```json
"GITHUB"
```

<h2 id="tocS_ConnectionStatus">ConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionstatus"></a>
<a id="schema_ConnectionStatus"></a>
<a id="tocSconnectionstatus"></a>
<a id="tocsconnectionstatus"></a>

```json
"PENDING_HANDSHAKE"
```

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "ConnectionName": {},
  "ConnectionArn": {},
  "ProviderType": {},
  "Status": {},
  "CreatedAt": {}
}
```

Describes an App Runner connection resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionName|object|false|none|none|
|ConnectionArn|object|false|none|none|
|ProviderType|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_ConnectionSummary">ConnectionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionsummary"></a>
<a id="schema_ConnectionSummary"></a>
<a id="tocSconnectionsummary"></a>
<a id="tocsconnectionsummary"></a>

```json
{
  "ConnectionName": {},
  "ConnectionArn": {},
  "ProviderType": {},
  "Status": {},
  "CreatedAt": {}
}
```

Provides summary information about an App Runner connection resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConnectionName|object|false|none|none|
|ConnectionArn|object|false|none|none|
|ProviderType|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|

<h2 id="tocS_ConnectionSummaryList">ConnectionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionsummarylist"></a>
<a id="schema_ConnectionSummaryList"></a>
<a id="tocSconnectionsummarylist"></a>
<a id="tocsconnectionsummarylist"></a>

```json
[
  {
    "ConnectionName": {},
    "ConnectionArn": {},
    "ProviderType": {},
    "Status": {},
    "CreatedAt": {}
  }
]
```

<h2 id="tocS_Cpu">Cpu</h2>
<!-- backwards compatibility -->
<a id="schemacpu"></a>
<a id="schema_Cpu"></a>
<a id="tocScpu"></a>
<a id="tocscpu"></a>

```json
"string"
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

<h2 id="tocS_ObservabilityConfigurationName">ObservabilityConfigurationName</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityconfigurationname"></a>
<a id="schema_ObservabilityConfigurationName"></a>
<a id="tocSobservabilityconfigurationname"></a>
<a id="tocsobservabilityconfigurationname"></a>

```json
"string"
```

<h2 id="tocS_TraceConfiguration">TraceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schematraceconfiguration"></a>
<a id="schema_TraceConfiguration"></a>
<a id="tocStraceconfiguration"></a>
<a id="tocstraceconfiguration"></a>

```json
{
  "Vendor": {}
}
```

Describes the configuration of the tracing feature within an App Runner observability configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Vendor|object|true|none|none|

<h2 id="tocS_ObservabilityConfiguration">ObservabilityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityconfiguration"></a>
<a id="schema_ObservabilityConfiguration"></a>
<a id="tocSobservabilityconfiguration"></a>
<a id="tocsobservabilityconfiguration"></a>

```json
{
  "ObservabilityConfigurationArn": {},
  "ObservabilityConfigurationName": {},
  "TraceConfiguration": {
    "Vendor": {}
  },
  "ObservabilityConfigurationRevision": {},
  "Latest": {},
  "Status": {},
  "CreatedAt": {},
  "DeletedAt": {}
}
```

<p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p> <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't enabled.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationArn|object|false|none|none|
|ObservabilityConfigurationName|object|false|none|none|
|TraceConfiguration|object|false|none|none|
|ObservabilityConfigurationRevision|object|false|none|none|
|Latest|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|
|DeletedAt|object|false|none|none|

<h2 id="tocS_ServiceName">ServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaservicename"></a>
<a id="schema_ServiceName"></a>
<a id="tocSservicename"></a>
<a id="tocsservicename"></a>

```json
"string"
```

<h2 id="tocS_SourceConfiguration">SourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemasourceconfiguration"></a>
<a id="schema_SourceConfiguration"></a>
<a id="tocSsourceconfiguration"></a>
<a id="tocssourceconfiguration"></a>

```json
{
  "CodeRepository": {
    "RepositoryUrl": {},
    "SourceCodeVersion": {
      "Type": {},
      "Value": {}
    },
    "CodeConfiguration": {
      "ConfigurationSource": {},
      "CodeConfigurationValues": {
        "Runtime": {},
        "BuildCommand": {},
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      }
    }
  },
  "ImageRepository": {
    "ImageIdentifier": {},
    "ImageConfiguration": {
      "RuntimeEnvironmentVariables": {
        "property1": "password",
        "property2": "password"
      },
      "StartCommand": {},
      "Port": {},
      "RuntimeEnvironmentSecrets": {
        "property1": "password",
        "property2": "password"
      }
    },
    "ImageRepositoryType": {}
  },
  "AutoDeploymentsEnabled": {},
  "AuthenticationConfiguration": {
    "ConnectionArn": {},
    "AccessRoleArn": {}
  }
}
```

Describes the source deployed to an App Runner service. It can be a code or an image repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CodeRepository|object|false|none|none|
|ImageRepository|object|false|none|none|
|AutoDeploymentsEnabled|object|false|none|none|
|AuthenticationConfiguration|object|false|none|none|

<h2 id="tocS_InstanceConfiguration">InstanceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfiguration"></a>
<a id="schema_InstanceConfiguration"></a>
<a id="tocSinstanceconfiguration"></a>
<a id="tocsinstanceconfiguration"></a>

```json
{
  "Cpu": {},
  "Memory": {},
  "InstanceRoleArn": {}
}
```

Describes the runtime configuration of an App Runner service instance (scaling unit).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cpu|object|false|none|none|
|Memory|object|false|none|none|
|InstanceRoleArn|object|false|none|none|

<h2 id="tocS_EncryptionConfiguration">EncryptionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfiguration"></a>
<a id="schema_EncryptionConfiguration"></a>
<a id="tocSencryptionconfiguration"></a>
<a id="tocsencryptionconfiguration"></a>

```json
{
  "KmsKey": {}
}
```

Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KmsKey|object|true|none|none|

<h2 id="tocS_HealthCheckConfiguration">HealthCheckConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckconfiguration"></a>
<a id="schema_HealthCheckConfiguration"></a>
<a id="tocShealthcheckconfiguration"></a>
<a id="tocshealthcheckconfiguration"></a>

```json
{
  "Protocol": {},
  "Path": {},
  "Interval": {},
  "Timeout": {},
  "HealthyThreshold": {},
  "UnhealthyThreshold": {}
}
```

Describes the settings for the health check that App Runner performs to monitor the health of a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Protocol|object|false|none|none|
|Path|object|false|none|none|
|Interval|object|false|none|none|
|Timeout|object|false|none|none|
|HealthyThreshold|object|false|none|none|
|UnhealthyThreshold|object|false|none|none|

<h2 id="tocS_NetworkConfiguration">NetworkConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemanetworkconfiguration"></a>
<a id="schema_NetworkConfiguration"></a>
<a id="tocSnetworkconfiguration"></a>
<a id="tocsnetworkconfiguration"></a>

```json
{
  "EgressConfiguration": {
    "EgressType": {},
    "VpcConnectorArn": {}
  },
  "IngressConfiguration": {
    "IsPubliclyAccessible": {}
  }
}
```

Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressConfiguration|object|false|none|none|
|IngressConfiguration|object|false|none|none|

<h2 id="tocS_ServiceObservabilityConfiguration">ServiceObservabilityConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserviceobservabilityconfiguration"></a>
<a id="schema_ServiceObservabilityConfiguration"></a>
<a id="tocSserviceobservabilityconfiguration"></a>
<a id="tocsserviceobservabilityconfiguration"></a>

```json
{
  "ObservabilityEnabled": {},
  "ObservabilityConfigurationArn": {}
}
```

Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityEnabled|object|true|none|none|
|ObservabilityConfigurationArn|object|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "ServiceName": {},
  "ServiceId": {},
  "ServiceArn": {},
  "ServiceUrl": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "DeletedAt": {},
  "Status": {},
  "SourceConfiguration": {
    "CodeRepository": {
      "RepositoryUrl": {},
      "SourceCodeVersion": {
        "Type": {},
        "Value": {}
      },
      "CodeConfiguration": {
        "ConfigurationSource": {},
        "CodeConfigurationValues": {
          "Runtime": {},
          "BuildCommand": {},
          "StartCommand": {},
          "Port": {},
          "RuntimeEnvironmentVariables": {
            "property1": "password",
            "property2": "password"
          },
          "RuntimeEnvironmentSecrets": {
            "property1": "password",
            "property2": "password"
          }
        }
      }
    },
    "ImageRepository": {
      "ImageIdentifier": {},
      "ImageConfiguration": {
        "RuntimeEnvironmentVariables": {
          "property1": "password",
          "property2": "password"
        },
        "StartCommand": {},
        "Port": {},
        "RuntimeEnvironmentSecrets": {
          "property1": "password",
          "property2": "password"
        }
      },
      "ImageRepositoryType": {}
    },
    "AutoDeploymentsEnabled": {},
    "AuthenticationConfiguration": {
      "ConnectionArn": {},
      "AccessRoleArn": {}
    }
  },
  "InstanceConfiguration": {
    "Cpu": {},
    "Memory": {},
    "InstanceRoleArn": {}
  },
  "EncryptionConfiguration": {
    "KmsKey": {}
  },
  "HealthCheckConfiguration": {
    "Protocol": {},
    "Path": {},
    "Interval": {},
    "Timeout": {},
    "HealthyThreshold": {},
    "UnhealthyThreshold": {}
  },
  "AutoScalingConfigurationSummary": {
    "AutoScalingConfigurationArn": {},
    "AutoScalingConfigurationName": {},
    "AutoScalingConfigurationRevision": {}
  },
  "NetworkConfiguration": {
    "EgressConfiguration": {
      "EgressType": {},
      "VpcConnectorArn": {}
    },
    "IngressConfiguration": {
      "IsPubliclyAccessible": {}
    }
  },
  "ObservabilityConfiguration": {
    "ObservabilityEnabled": {},
    "ObservabilityConfigurationArn": {}
  }
}
```

<p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|true|none|none|
|ServiceId|object|true|none|none|
|ServiceArn|object|true|none|none|
|ServiceUrl|object|false|none|none|
|CreatedAt|object|true|none|none|
|UpdatedAt|object|true|none|none|
|DeletedAt|object|false|none|none|
|Status|object|true|none|none|
|SourceConfiguration|object|true|none|none|
|InstanceConfiguration|object|true|none|none|
|EncryptionConfiguration|object|false|none|none|
|HealthCheckConfiguration|object|false|none|none|
|AutoScalingConfigurationSummary|object|true|none|none|
|NetworkConfiguration|object|true|none|none|
|ObservabilityConfiguration|object|false|none|none|

<h2 id="tocS_UUID">UUID</h2>
<!-- backwards compatibility -->
<a id="schemauuid"></a>
<a id="schema_UUID"></a>
<a id="tocSuuid"></a>
<a id="tocsuuid"></a>

```json
"stringstringstringstringstringstring"
```

<h2 id="tocS_VpcConnectorName">VpcConnectorName</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectorname"></a>
<a id="schema_VpcConnectorName"></a>
<a id="tocSvpcconnectorname"></a>
<a id="tocsvpcconnectorname"></a>

```json
"string"
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

<h2 id="tocS_VpcConnector">VpcConnector</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnector"></a>
<a id="schema_VpcConnector"></a>
<a id="tocSvpcconnector"></a>
<a id="tocsvpcconnector"></a>

```json
{
  "VpcConnectorName": {},
  "VpcConnectorArn": {},
  "VpcConnectorRevision": {},
  "Subnets": {},
  "SecurityGroups": {},
  "Status": {},
  "CreatedAt": {},
  "DeletedAt": {}
}
```

<p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.</p> <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcConnectorName|object|false|none|none|
|VpcConnectorArn|object|false|none|none|
|VpcConnectorRevision|object|false|none|none|
|Subnets|object|false|none|none|
|SecurityGroups|object|false|none|none|
|Status|object|false|none|none|
|CreatedAt|object|false|none|none|
|DeletedAt|object|false|none|none|

<h2 id="tocS_VpcIngressConnectionName">VpcIngressConnectionName</h2>
<!-- backwards compatibility -->
<a id="schemavpcingressconnectionname"></a>
<a id="schema_VpcIngressConnectionName"></a>
<a id="tocSvpcingressconnectionname"></a>
<a id="tocsvpcingressconnectionname"></a>

```json
"string"
```

<h2 id="tocS_IngressVpcConfiguration">IngressVpcConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaingressvpcconfiguration"></a>
<a id="schema_IngressVpcConfiguration"></a>
<a id="tocSingressvpcconfiguration"></a>
<a id="tocsingressvpcconfiguration"></a>

```json
{
  "VpcId": {},
  "VpcEndpointId": {}
}
```

The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcId|object|false|none|none|
|VpcEndpointId|object|false|none|none|

<h2 id="tocS_VpcIngressConnection">VpcIngressConnection</h2>
<!-- backwards compatibility -->
<a id="schemavpcingressconnection"></a>
<a id="schema_VpcIngressConnection"></a>
<a id="tocSvpcingressconnection"></a>
<a id="tocsvpcingressconnection"></a>

```json
{
  "VpcIngressConnectionArn": {},
  "VpcIngressConnectionName": {},
  "ServiceArn": {},
  "Status": {},
  "AccountId": {},
  "DomainName": {},
  "IngressVpcConfiguration": {
    "VpcId": {},
    "VpcEndpointId": {}
  },
  "CreatedAt": {},
  "DeletedAt": {}
}
```

The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|false|none|none|
|VpcIngressConnectionName|object|false|none|none|
|ServiceArn|object|false|none|none|
|Status|object|false|none|none|
|AccountId|object|false|none|none|
|DomainName|object|false|none|none|
|IngressVpcConfiguration|object|false|none|none|
|CreatedAt|object|false|none|none|
|DeletedAt|object|false|none|none|

<h2 id="tocS_CustomDomainAssociationStatus">CustomDomainAssociationStatus</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomainassociationstatus"></a>
<a id="schema_CustomDomainAssociationStatus"></a>
<a id="tocScustomdomainassociationstatus"></a>
<a id="tocscustomdomainassociationstatus"></a>

```json
"CREATING"
```

<h2 id="tocS_CustomDomainList">CustomDomainList</h2>
<!-- backwards compatibility -->
<a id="schemacustomdomainlist"></a>
<a id="schema_CustomDomainList"></a>
<a id="tocScustomdomainlist"></a>
<a id="tocscustomdomainlist"></a>

```json
[
  {
    "DomainName": {},
    "EnableWWWSubdomain": {},
    "CertificateValidationRecords": {},
    "Status": {}
  }
]
```

<h2 id="tocS_CustomerAccountId">CustomerAccountId</h2>
<!-- backwards compatibility -->
<a id="schemacustomeraccountid"></a>
<a id="schema_CustomerAccountId"></a>
<a id="tocScustomeraccountid"></a>
<a id="tocscustomeraccountid"></a>

```json
"stringstring"
```

<h2 id="tocS_DescribeCustomDomainsMaxResults">DescribeCustomDomainsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemadescribecustomdomainsmaxresults"></a>
<a id="schema_DescribeCustomDomainsMaxResults"></a>
<a id="tocSdescribecustomdomainsmaxresults"></a>
<a id="tocsdescribecustomdomainsmaxresults"></a>

```json
1
```

<h2 id="tocS_EgressType">EgressType</h2>
<!-- backwards compatibility -->
<a id="schemaegresstype"></a>
<a id="schema_EgressType"></a>
<a id="tocSegresstype"></a>
<a id="tocsegresstype"></a>

```json
"DEFAULT"
```

<h2 id="tocS_EgressConfiguration">EgressConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaegressconfiguration"></a>
<a id="schema_EgressConfiguration"></a>
<a id="tocSegressconfiguration"></a>
<a id="tocsegressconfiguration"></a>

```json
{
  "EgressType": {},
  "VpcConnectorArn": {}
}
```

Describes configuration settings related to outbound network traffic of an App Runner service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EgressType|object|false|none|none|
|VpcConnectorArn|object|false|none|none|

<h2 id="tocS_KmsKeyArn">KmsKeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyarn"></a>
<a id="schema_KmsKeyArn"></a>
<a id="tocSkmskeyarn"></a>
<a id="tocskmskeyarn"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckProtocol">HealthCheckProtocol</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckprotocol"></a>
<a id="schema_HealthCheckProtocol"></a>
<a id="tocShealthcheckprotocol"></a>
<a id="tocshealthcheckprotocol"></a>

```json
"TCP"
```

<h2 id="tocS_HealthCheckPath">HealthCheckPath</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckpath"></a>
<a id="schema_HealthCheckPath"></a>
<a id="tocShealthcheckpath"></a>
<a id="tocshealthcheckpath"></a>

```json
"string"
```

<h2 id="tocS_HealthCheckInterval">HealthCheckInterval</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckinterval"></a>
<a id="schema_HealthCheckInterval"></a>
<a id="tocShealthcheckinterval"></a>
<a id="tocshealthcheckinterval"></a>

```json
1
```

<h2 id="tocS_HealthCheckTimeout">HealthCheckTimeout</h2>
<!-- backwards compatibility -->
<a id="schemahealthchecktimeout"></a>
<a id="schema_HealthCheckTimeout"></a>
<a id="tocShealthchecktimeout"></a>
<a id="tocshealthchecktimeout"></a>

```json
1
```

<h2 id="tocS_HealthCheckHealthyThreshold">HealthCheckHealthyThreshold</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckhealthythreshold"></a>
<a id="schema_HealthCheckHealthyThreshold"></a>
<a id="tocShealthcheckhealthythreshold"></a>
<a id="tocshealthcheckhealthythreshold"></a>

```json
1
```

<h2 id="tocS_HealthCheckUnhealthyThreshold">HealthCheckUnhealthyThreshold</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckunhealthythreshold"></a>
<a id="schema_HealthCheckUnhealthyThreshold"></a>
<a id="tocShealthcheckunhealthythreshold"></a>
<a id="tocshealthcheckunhealthythreshold"></a>

```json
1
```

<h2 id="tocS_ImageConfiguration">ImageConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaimageconfiguration"></a>
<a id="schema_ImageConfiguration"></a>
<a id="tocSimageconfiguration"></a>
<a id="tocsimageconfiguration"></a>

```json
{
  "RuntimeEnvironmentVariables": {
    "property1": "password",
    "property2": "password"
  },
  "StartCommand": {},
  "Port": {},
  "RuntimeEnvironmentSecrets": {
    "property1": "password",
    "property2": "password"
  }
}
```

Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RuntimeEnvironmentVariables|object|false|none|none|
|StartCommand|object|false|none|none|
|Port|object|false|none|none|
|RuntimeEnvironmentSecrets|object|false|none|none|

<h2 id="tocS_ImageIdentifier">ImageIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaimageidentifier"></a>
<a id="schema_ImageIdentifier"></a>
<a id="tocSimageidentifier"></a>
<a id="tocsimageidentifier"></a>

```json
"string"
```

<h2 id="tocS_ImageRepositoryType">ImageRepositoryType</h2>
<!-- backwards compatibility -->
<a id="schemaimagerepositorytype"></a>
<a id="schema_ImageRepositoryType"></a>
<a id="tocSimagerepositorytype"></a>
<a id="tocsimagerepositorytype"></a>

```json
"ECR"
```

<h2 id="tocS_ImageRepository">ImageRepository</h2>
<!-- backwards compatibility -->
<a id="schemaimagerepository"></a>
<a id="schema_ImageRepository"></a>
<a id="tocSimagerepository"></a>
<a id="tocsimagerepository"></a>

```json
{
  "ImageIdentifier": {},
  "ImageConfiguration": {
    "RuntimeEnvironmentVariables": {
      "property1": "password",
      "property2": "password"
    },
    "StartCommand": {},
    "Port": {},
    "RuntimeEnvironmentSecrets": {
      "property1": "password",
      "property2": "password"
    }
  },
  "ImageRepositoryType": {}
}
```

Describes a source image repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ImageIdentifier|object|true|none|none|
|ImageConfiguration|object|false|none|none|
|ImageRepositoryType|object|true|none|none|

<h2 id="tocS_IngressConfiguration">IngressConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaingressconfiguration"></a>
<a id="schema_IngressConfiguration"></a>
<a id="tocSingressconfiguration"></a>
<a id="tocsingressconfiguration"></a>

```json
{
  "IsPubliclyAccessible": {}
}
```

Network configuration settings for inbound network traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsPubliclyAccessible|object|false|none|none|

<h2 id="tocS_Memory">Memory</h2>
<!-- backwards compatibility -->
<a id="schemamemory"></a>
<a id="schema_Memory"></a>
<a id="tocSmemory"></a>
<a id="tocsmemory"></a>

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

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

<h2 id="tocS_ObservabilityConfigurationSummaryList">ObservabilityConfigurationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityconfigurationsummarylist"></a>
<a id="schema_ObservabilityConfigurationSummaryList"></a>
<a id="tocSobservabilityconfigurationsummarylist"></a>
<a id="tocsobservabilityconfigurationsummarylist"></a>

```json
[
  {
    "ObservabilityConfigurationArn": {},
    "ObservabilityConfigurationName": {},
    "ObservabilityConfigurationRevision": {}
  }
]
```

<h2 id="tocS_ListOperationsMaxResults">ListOperationsMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsmaxresults"></a>
<a id="schema_ListOperationsMaxResults"></a>
<a id="tocSlistoperationsmaxresults"></a>
<a id="tocslistoperationsmaxresults"></a>

```json
1
```

<h2 id="tocS_OperationSummaryList">OperationSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummarylist"></a>
<a id="schema_OperationSummaryList"></a>
<a id="tocSoperationsummarylist"></a>
<a id="tocsoperationsummarylist"></a>

```json
[
  {
    "Id": {},
    "Type": {},
    "Status": {},
    "TargetArn": {},
    "StartedAt": {},
    "EndedAt": {},
    "UpdatedAt": {}
  }
]
```

<h2 id="tocS_ServiceMaxResults">ServiceMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemaservicemaxresults"></a>
<a id="schema_ServiceMaxResults"></a>
<a id="tocSservicemaxresults"></a>
<a id="tocsservicemaxresults"></a>

```json
1
```

<h2 id="tocS_ServiceSummaryList">ServiceSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummarylist"></a>
<a id="schema_ServiceSummaryList"></a>
<a id="tocSservicesummarylist"></a>
<a id="tocsservicesummarylist"></a>

```json
[
  {
    "ServiceName": {},
    "ServiceId": {},
    "ServiceArn": {},
    "ServiceUrl": {},
    "CreatedAt": {},
    "UpdatedAt": {},
    "Status": {}
  }
]
```

<h2 id="tocS_VpcConnectors">VpcConnectors</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectors"></a>
<a id="schema_VpcConnectors"></a>
<a id="tocSvpcconnectors"></a>
<a id="tocsvpcconnectors"></a>

```json
[
  {
    "VpcConnectorName": {},
    "VpcConnectorArn": {},
    "VpcConnectorRevision": {},
    "Subnets": {},
    "SecurityGroups": {},
    "Status": {},
    "CreatedAt": {},
    "DeletedAt": {}
  }
]
```

<h2 id="tocS_ListVpcIngressConnectionsFilter">ListVpcIngressConnectionsFilter</h2>
<!-- backwards compatibility -->
<a id="schemalistvpcingressconnectionsfilter"></a>
<a id="schema_ListVpcIngressConnectionsFilter"></a>
<a id="tocSlistvpcingressconnectionsfilter"></a>
<a id="tocslistvpcingressconnectionsfilter"></a>

```json
{
  "ServiceArn": {},
  "VpcEndpointId": {}
}
```

Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceArn|object|false|none|none|
|VpcEndpointId|object|false|none|none|

<h2 id="tocS_VpcIngressConnectionSummaryList">VpcIngressConnectionSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemavpcingressconnectionsummarylist"></a>
<a id="schema_VpcIngressConnectionSummaryList"></a>
<a id="tocSvpcingressconnectionsummarylist"></a>
<a id="tocsvpcingressconnectionsummarylist"></a>

```json
[
  {
    "VpcIngressConnectionArn": {},
    "ServiceArn": {}
  }
]
```

<h2 id="tocS_ObservabilityConfigurationStatus">ObservabilityConfigurationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityconfigurationstatus"></a>
<a id="schema_ObservabilityConfigurationStatus"></a>
<a id="tocSobservabilityconfigurationstatus"></a>
<a id="tocsobservabilityconfigurationstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ObservabilityConfigurationSummary">ObservabilityConfigurationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaobservabilityconfigurationsummary"></a>
<a id="schema_ObservabilityConfigurationSummary"></a>
<a id="tocSobservabilityconfigurationsummary"></a>
<a id="tocsobservabilityconfigurationsummary"></a>

```json
{
  "ObservabilityConfigurationArn": {},
  "ObservabilityConfigurationName": {},
  "ObservabilityConfigurationRevision": {}
}
```

<p>Provides summary information about an App Runner observability configuration resource.</p> <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a> actions using the <a>ObservabilityConfiguration</a> type.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObservabilityConfigurationArn|object|false|none|none|
|ObservabilityConfigurationName|object|false|none|none|
|ObservabilityConfigurationRevision|object|false|none|none|

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_OperationType">OperationType</h2>
<!-- backwards compatibility -->
<a id="schemaoperationtype"></a>
<a id="schema_OperationType"></a>
<a id="tocSoperationtype"></a>
<a id="tocsoperationtype"></a>

```json
"START_DEPLOYMENT"
```

<h2 id="tocS_OperationSummary">OperationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsummary"></a>
<a id="schema_OperationSummary"></a>
<a id="tocSoperationsummary"></a>
<a id="tocsoperationsummary"></a>

```json
{
  "Id": {},
  "Type": {},
  "Status": {},
  "TargetArn": {},
  "StartedAt": {},
  "EndedAt": {},
  "UpdatedAt": {}
}
```

Provides summary information for an operation that occurred on an App Runner service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Type|object|false|none|none|
|Status|object|false|none|none|
|TargetArn|object|false|none|none|
|StartedAt|object|false|none|none|
|EndedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|

<h2 id="tocS_RuntimeEnvironmentSecretsValue">RuntimeEnvironmentSecretsValue</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentsecretsvalue"></a>
<a id="schema_RuntimeEnvironmentSecretsValue"></a>
<a id="tocSruntimeenvironmentsecretsvalue"></a>
<a id="tocsruntimeenvironmentsecretsvalue"></a>

```json
"password"
```

<h2 id="tocS_RuntimeEnvironmentSecretsName">RuntimeEnvironmentSecretsName</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentsecretsname"></a>
<a id="schema_RuntimeEnvironmentSecretsName"></a>
<a id="tocSruntimeenvironmentsecretsname"></a>
<a id="tocsruntimeenvironmentsecretsname"></a>

```json
"password"
```

<h2 id="tocS_RuntimeEnvironmentVariablesValue">RuntimeEnvironmentVariablesValue</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentvariablesvalue"></a>
<a id="schema_RuntimeEnvironmentVariablesValue"></a>
<a id="tocSruntimeenvironmentvariablesvalue"></a>
<a id="tocsruntimeenvironmentvariablesvalue"></a>

```json
"password"
```

<h2 id="tocS_RuntimeEnvironmentVariablesKey">RuntimeEnvironmentVariablesKey</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironmentvariableskey"></a>
<a id="schema_RuntimeEnvironmentVariablesKey"></a>
<a id="tocSruntimeenvironmentvariableskey"></a>
<a id="tocsruntimeenvironmentvariableskey"></a>

```json
"password"
```

<h2 id="tocS_ServiceId">ServiceId</h2>
<!-- backwards compatibility -->
<a id="schemaserviceid"></a>
<a id="schema_ServiceId"></a>
<a id="tocSserviceid"></a>
<a id="tocsserviceid"></a>

```json
"stringstringstringstringstringst"
```

<h2 id="tocS_ServiceStatus">ServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatus"></a>
<a id="schema_ServiceStatus"></a>
<a id="tocSservicestatus"></a>
<a id="tocsservicestatus"></a>

```json
"CREATE_FAILED"
```

<h2 id="tocS_ServiceSummary">ServiceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummary"></a>
<a id="schema_ServiceSummary"></a>
<a id="tocSservicesummary"></a>
<a id="tocsservicesummary"></a>

```json
{
  "ServiceName": {},
  "ServiceId": {},
  "ServiceArn": {},
  "ServiceUrl": {},
  "CreatedAt": {},
  "UpdatedAt": {},
  "Status": {}
}
```

<p>Provides summary information for an App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ServiceName|object|false|none|none|
|ServiceId|object|false|none|none|
|ServiceArn|object|false|none|none|
|ServiceUrl|object|false|none|none|
|CreatedAt|object|false|none|none|
|UpdatedAt|object|false|none|none|
|Status|object|false|none|none|

<h2 id="tocS_SourceCodeVersionType">SourceCodeVersionType</h2>
<!-- backwards compatibility -->
<a id="schemasourcecodeversiontype"></a>
<a id="schema_SourceCodeVersionType"></a>
<a id="tocSsourcecodeversiontype"></a>
<a id="tocssourcecodeversiontype"></a>

```json
"BRANCH"
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

Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair.

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

<h2 id="tocS_TracingVendor">TracingVendor</h2>
<!-- backwards compatibility -->
<a id="schematracingvendor"></a>
<a id="schema_TracingVendor"></a>
<a id="tocStracingvendor"></a>
<a id="tocstracingvendor"></a>

```json
"AWSXRAY"
```

<h2 id="tocS_VpcConnectorStatus">VpcConnectorStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpcconnectorstatus"></a>
<a id="schema_VpcConnectorStatus"></a>
<a id="tocSvpcconnectorstatus"></a>
<a id="tocsvpcconnectorstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_VpcDNSTarget">VpcDNSTarget</h2>
<!-- backwards compatibility -->
<a id="schemavpcdnstarget"></a>
<a id="schema_VpcDNSTarget"></a>
<a id="tocSvpcdnstarget"></a>
<a id="tocsvpcdnstarget"></a>

```json
{
  "VpcIngressConnectionArn": {},
  "VpcId": {},
  "DomainName": {}
}
```

DNS Target record for a custom domain of this Amazon VPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|false|none|none|
|VpcId|object|false|none|none|
|DomainName|object|false|none|none|

<h2 id="tocS_VpcIngressConnectionStatus">VpcIngressConnectionStatus</h2>
<!-- backwards compatibility -->
<a id="schemavpcingressconnectionstatus"></a>
<a id="schema_VpcIngressConnectionStatus"></a>
<a id="tocSvpcingressconnectionstatus"></a>
<a id="tocsvpcingressconnectionstatus"></a>

```json
"AVAILABLE"
```

<h2 id="tocS_VpcIngressConnectionSummary">VpcIngressConnectionSummary</h2>
<!-- backwards compatibility -->
<a id="schemavpcingressconnectionsummary"></a>
<a id="schema_VpcIngressConnectionSummary"></a>
<a id="tocSvpcingressconnectionsummary"></a>
<a id="tocsvpcingressconnectionsummary"></a>

```json
{
  "VpcIngressConnectionArn": {},
  "ServiceArn": {}
}
```

Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|VpcIngressConnectionArn|object|false|none|none|
|ServiceArn|object|false|none|none|
