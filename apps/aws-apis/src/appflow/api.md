<h1 id="amazon-appflow">Amazon Appflow v2020-08-23</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>

Base URLs:

* <a href="http://appflow.us-east-1.amazonaws.com">http://appflow.us-east-1.amazonaws.com</a> - The Amazon Appflow multi-region endpoint

* <a href="https://appflow.us-east-1.amazonaws.com">https://appflow.us-east-1.amazonaws.com</a> - The Amazon Appflow multi-region endpoint

* <a href="http://appflow.cn-north-1.amazonaws.com.cn">http://appflow.cn-north-1.amazonaws.com.cn</a> - The Amazon Appflow endpoint for China (Beijing) and China (Ningxia)

* <a href="https://appflow.cn-north-1.amazonaws.com.cn">https://appflow.cn-north-1.amazonaws.com.cn</a> - The Amazon Appflow endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/appflow/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-appflow-default">Default</h1>

## CreateConnectorProfile

<a id="opIdCreateConnectorProfile"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/create-connector-profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorProfileName": "string",
    "kmsArn": "stringstringstringst",
    "connectorType": "Salesforce",
    "connectorLabel": "string",
    "connectionMode": "Public",
    "connectorProfileConfig": {
      "connectorProfileProperties": {
        "Amplitude": {},
        "Datadog": {
          "instanceUrl": {}
        },
        "Dynatrace": {
          "instanceUrl": {}
        },
        "GoogleAnalytics": {},
        "Honeycode": {},
        "InforNexus": {
          "instanceUrl": {}
        },
        "Marketo": {
          "instanceUrl": {}
        },
        "Redshift": {
          "databaseUrl": {},
          "bucketName": {},
          "bucketPrefix": {},
          "roleArn": {},
          "dataApiRoleArn": {},
          "isRedshiftServerless": {},
          "clusterIdentifier": {},
          "workgroupName": {},
          "databaseName": {}
        },
        "Salesforce": {
          "instanceUrl": {},
          "isSandboxEnvironment": {},
          "usePrivateLinkForMetadataAndAuthorization": {}
        },
        "ServiceNow": {
          "instanceUrl": {}
        },
        "Singular": {},
        "Slack": {
          "instanceUrl": {}
        },
        "Snowflake": {
          "warehouse": {},
          "stage": {},
          "bucketName": {},
          "bucketPrefix": {},
          "privateLinkServiceName": {},
          "accountName": {},
          "region": {}
        },
        "Trendmicro": {},
        "Veeva": {
          "instanceUrl": {}
        },
        "Zendesk": {
          "instanceUrl": {}
        },
        "SAPOData": {
          "applicationHostUrl": {},
          "applicationServicePath": {},
          "portNumber": {},
          "clientNumber": {},
          "logonLanguage": {},
          "privateLinkServiceName": {},
          "oAuthProperties": {
            "tokenUrl": {},
            "authCodeUrl": {},
            "oAuthScopes": {}
          }
        },
        "CustomConnector": {
          "profileProperties": {
            "property1": "string",
            "property2": "string"
          },
          "oAuth2Properties": {
            "tokenUrl": {},
            "oAuth2GrantType": {},
            "tokenUrlCustomProperties": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "Pardot": {
          "instanceUrl": {},
          "isSandboxEnvironment": {},
          "businessUnitId": {}
        }
      },
      "connectorProfileCredentials": {
        "Amplitude": {
          "apiKey": {},
          "secretKey": {}
        },
        "Datadog": {
          "apiKey": {},
          "applicationKey": {}
        },
        "Dynatrace": {
          "apiToken": {}
        },
        "GoogleAnalytics": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Honeycode": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "InforNexus": {
          "accessKeyId": {},
          "userId": {},
          "secretAccessKey": {},
          "datakey": {}
        },
        "Marketo": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Redshift": {
          "username": {},
          "password": {}
        },
        "Salesforce": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          },
          "clientCredentialsArn": {}
        },
        "ServiceNow": {
          "username": {},
          "password": {}
        },
        "Singular": {
          "apiKey": {}
        },
        "Slack": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Snowflake": {
          "username": {},
          "password": {}
        },
        "Trendmicro": {
          "apiSecretKey": {}
        },
        "Veeva": {
          "username": {},
          "password": {}
        },
        "Zendesk": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "SAPOData": {
          "basicAuthCredentials": {
            "username": {},
            "password": {}
          },
          "oAuthCredentials": {
            "clientId": {},
            "clientSecret": {},
            "accessToken": {},
            "refreshToken": {},
            "oAuthRequest": {
              "authCode": {},
              "redirectUri": {}
            }
          }
        },
        "CustomConnector": {
          "authenticationType": {},
          "basic": {
            "username": {},
            "password": {}
          },
          "oauth2": {
            "clientId": {},
            "clientSecret": {},
            "accessToken": {},
            "refreshToken": {},
            "oAuthRequest": {
              "authCode": {},
              "redirectUri": {}
            }
          },
          "apiKey": {
            "apiKey": {},
            "apiSecretKey": {}
          },
          "custom": {
            "customAuthenticationType": {},
            "credentialsMap": {
              "property1": "password",
              "property2": "password"
            }
          }
        },
        "Pardot": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          },
          "clientCredentialsArn": {}
        }
      }
    },
    "clientToken": "string"
  }'
```

`POST /create-connector-profile`

 Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.

> Body parameter

```json
{
  "connectorProfileName": "string",
  "kmsArn": "stringstringstringst",
  "connectorType": "Salesforce",
  "connectorLabel": "string",
  "connectionMode": "Public",
  "connectorProfileConfig": {
    "connectorProfileProperties": {
      "Amplitude": {},
      "Datadog": {
        "instanceUrl": {}
      },
      "Dynatrace": {
        "instanceUrl": {}
      },
      "GoogleAnalytics": {},
      "Honeycode": {},
      "InforNexus": {
        "instanceUrl": {}
      },
      "Marketo": {
        "instanceUrl": {}
      },
      "Redshift": {
        "databaseUrl": {},
        "bucketName": {},
        "bucketPrefix": {},
        "roleArn": {},
        "dataApiRoleArn": {},
        "isRedshiftServerless": {},
        "clusterIdentifier": {},
        "workgroupName": {},
        "databaseName": {}
      },
      "Salesforce": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "usePrivateLinkForMetadataAndAuthorization": {}
      },
      "ServiceNow": {
        "instanceUrl": {}
      },
      "Singular": {},
      "Slack": {
        "instanceUrl": {}
      },
      "Snowflake": {
        "warehouse": {},
        "stage": {},
        "bucketName": {},
        "bucketPrefix": {},
        "privateLinkServiceName": {},
        "accountName": {},
        "region": {}
      },
      "Trendmicro": {},
      "Veeva": {
        "instanceUrl": {}
      },
      "Zendesk": {
        "instanceUrl": {}
      },
      "SAPOData": {
        "applicationHostUrl": {},
        "applicationServicePath": {},
        "portNumber": {},
        "clientNumber": {},
        "logonLanguage": {},
        "privateLinkServiceName": {},
        "oAuthProperties": {
          "tokenUrl": {},
          "authCodeUrl": {},
          "oAuthScopes": {}
        }
      },
      "CustomConnector": {
        "profileProperties": {
          "property1": "string",
          "property2": "string"
        },
        "oAuth2Properties": {
          "tokenUrl": {},
          "oAuth2GrantType": {},
          "tokenUrlCustomProperties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "Pardot": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "businessUnitId": {}
      }
    },
    "connectorProfileCredentials": {
      "Amplitude": {
        "apiKey": {},
        "secretKey": {}
      },
      "Datadog": {
        "apiKey": {},
        "applicationKey": {}
      },
      "Dynatrace": {
        "apiToken": {}
      },
      "GoogleAnalytics": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Honeycode": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "InforNexus": {
        "accessKeyId": {},
        "userId": {},
        "secretAccessKey": {},
        "datakey": {}
      },
      "Marketo": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Redshift": {
        "username": {},
        "password": {}
      },
      "Salesforce": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      },
      "ServiceNow": {
        "username": {},
        "password": {}
      },
      "Singular": {
        "apiKey": {}
      },
      "Slack": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Snowflake": {
        "username": {},
        "password": {}
      },
      "Trendmicro": {
        "apiSecretKey": {}
      },
      "Veeva": {
        "username": {},
        "password": {}
      },
      "Zendesk": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "SAPOData": {
        "basicAuthCredentials": {
          "username": {},
          "password": {}
        },
        "oAuthCredentials": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        }
      },
      "CustomConnector": {
        "authenticationType": {},
        "basic": {
          "username": {},
          "password": {}
        },
        "oauth2": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "apiKey": {
          "apiKey": {},
          "apiSecretKey": {}
        },
        "custom": {
          "customAuthenticationType": {},
          "credentialsMap": {
            "property1": "password",
            "property2": "password"
          }
        }
      },
      "Pardot": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      }
    }
  },
  "clientToken": "string"
}
```

<h3 id="createconnectorprofile-parameters">Parameters</h3>

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
|» connectorProfileName|body|string|true| The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account. |
|» kmsArn|body|string|false| The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. |
|» connectorType|body|string|true| The type of connector, such as Salesforce, Amplitude, and so on. |
|» connectorLabel|body|string|false|The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.|
|» connectionMode|body|string|true| Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet. |
|» connectorProfileConfig|body|object|true| Defines the connector-specific configuration and credentials for the connector profile. |
|» » connectorProfileProperties|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » Datadog|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » Honeycode|body|object|false|none|
|» » » InforNexus|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Redshift|body|object|false|none|
|» » » » databaseUrl|body|object|false|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » roleArn|body|object|true|none|
|» » » » dataApiRoleArn|body|object|false|none|
|» » » » isRedshiftServerless|body|object|false|none|
|» » » » clusterIdentifier|body|object|false|none|
|» » » » workgroupName|body|object|false|none|
|» » » » databaseName|body|object|false|none|
|» » » Salesforce|body|object|false|none|
|» » » » instanceUrl|body|object|false|none|
|» » » » isSandboxEnvironment|body|object|false|none|
|» » » » usePrivateLinkForMetadataAndAuthorization|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » Slack|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Snowflake|body|object|false|none|
|» » » » warehouse|body|object|true|none|
|» » » » stage|body|object|true|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » privateLinkServiceName|body|object|false|none|
|» » » » accountName|body|object|false|none|
|» » » » region|body|object|false|none|
|» » » Trendmicro|body|object|false|none|
|» » » Veeva|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Zendesk|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » SAPOData|body|[SAPODataConnectorProfileProperties](#schemasapodataconnectorprofileproperties)|false| The connector-specific profile properties required when using SAPOData. |
|» » » CustomConnector|body|object|false|none|
|» » » » profileProperties|body|object|false|none|
|» » » » » **additionalProperties**|body|[ProfilePropertyValue](#schemaprofilepropertyvalue)|false|none|
|» » » » oAuth2Properties|body|[OAuth2Properties](#schemaoauth2properties)|false|The OAuth 2.0 properties required for OAuth 2.0 authentication.|
|» » » Pardot|body|object|false|none|
|» » » » instanceUrl|body|object|false|none|
|» » » » isSandboxEnvironment|body|object|false|none|
|» » » » businessUnitId|body|object|false|none|
|» » connectorProfileCredentials|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » » secretKey|body|object|true|none|
|» » » Datadog|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » » applicationKey|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » apiToken|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Honeycode|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |
|» » » InforNexus|body|object|false|none|
|» » » » accessKeyId|body|object|true|none|
|» » » » userId|body|object|true|none|
|» » » » secretAccessKey|body|object|true|none|
|» » » » datakey|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Redshift|body|object|false|none|
|» » » » username|body|object|false|none|
|» » » » password|body|object|false|none|
|» » » Salesforce|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » » clientCredentialsArn|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » Slack|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Snowflake|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Trendmicro|body|object|false|none|
|» » » » apiSecretKey|body|object|true|none|
|» » » Veeva|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Zendesk|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » SAPOData|body|[SAPODataConnectorProfileCredentials](#schemasapodataconnectorprofilecredentials)|false| The connector-specific profile credentials required when using SAPOData. |
|» » » CustomConnector|body|[CustomConnectorProfileCredentials](#schemacustomconnectorprofilecredentials)|false|The connector-specific profile credentials that are required when using the custom connector.|
|» » » Pardot|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |
|» » » » clientCredentialsArn|body|object|false|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorType|Salesforce|
|» connectorType|Singular|
|» connectorType|Slack|
|» connectorType|Redshift|
|» connectorType|S3|
|» connectorType|Marketo|
|» connectorType|Googleanalytics|
|» connectorType|Zendesk|
|» connectorType|Servicenow|
|» connectorType|Datadog|
|» connectorType|Trendmicro|
|» connectorType|Snowflake|
|» connectorType|Dynatrace|
|» connectorType|Infornexus|
|» connectorType|Amplitude|
|» connectorType|Veeva|
|» connectorType|EventBridge|
|» connectorType|LookoutMetrics|
|» connectorType|Upsolver|
|» connectorType|Honeycode|
|» connectorType|CustomerProfiles|
|» connectorType|SAPOData|
|» connectorType|CustomConnector|
|» connectorType|Pardot|
|» connectionMode|Public|
|» connectionMode|Private|

> Example responses

> 200 Response

```json
{
  "connectorProfileArn": {}
}
```

> 480 Response

```json
null
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

<h3 id="createconnectorprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateConnectorProfileResponse](#schemacreateconnectorprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateFlow

<a id="opIdCreateFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/create-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string",
    "description": "string",
    "kmsArn": "stringstringstringst",
    "triggerConfig": {
      "triggerType": {},
      "triggerProperties": {
        "Scheduled": {
          "scheduleExpression": {},
          "dataPullMode": {},
          "scheduleStartTime": {},
          "scheduleEndTime": {},
          "timezone": {},
          "scheduleOffset": {},
          "firstExecutionFrom": {},
          "flowErrorDeactivationThreshold": {}
        }
      }
    },
    "sourceFlowConfig": {
      "connectorType": {},
      "apiVersion": {},
      "connectorProfileName": {},
      "sourceConnectorProperties": {
        "Amplitude": {
          "object": {}
        },
        "Datadog": {
          "object": {}
        },
        "Dynatrace": {
          "object": {}
        },
        "GoogleAnalytics": {
          "object": {}
        },
        "InforNexus": {
          "object": {}
        },
        "Marketo": {
          "object": {}
        },
        "S3": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3InputFormatConfig": {
            "s3InputFileType": {}
          }
        },
        "Salesforce": {
          "object": {},
          "enableDynamicFieldUpdate": {},
          "includeDeletedRecords": {},
          "dataTransferApi": {}
        },
        "ServiceNow": {
          "object": {}
        },
        "Singular": {
          "object": {}
        },
        "Slack": {
          "object": {}
        },
        "Trendmicro": {
          "object": {}
        },
        "Veeva": {
          "object": {},
          "documentType": {},
          "includeSourceFiles": {},
          "includeRenditions": {},
          "includeAllVersions": {}
        },
        "Zendesk": {
          "object": {}
        },
        "SAPOData": {
          "objectPath": {}
        },
        "CustomConnector": {
          "entityName": {},
          "customProperties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "Pardot": {
          "object": {}
        }
      },
      "incrementalPullConfig": {
        "datetimeTypeFieldName": {}
      }
    },
    "destinationFlowConfigList": [
      {
        "connectorType": {},
        "apiVersion": {},
        "connectorProfileName": {},
        "destinationConnectorProperties": {
          "Redshift": {
            "object": {},
            "intermediateBucketName": {},
            "bucketPrefix": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "S3": {
            "bucketName": {},
            "bucketPrefix": {},
            "s3OutputFormatConfig": {
              "fileType": {},
              "prefixConfig": {
                "prefixType": {},
                "prefixFormat": {},
                "pathPrefixHierarchy": {}
              },
              "aggregationConfig": {
                "aggregationType": {},
                "targetFileSize": {}
              },
              "preserveSourceDataTyping": {}
            }
          },
          "Salesforce": {
            "object": {},
            "idFieldNames": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": {},
            "dataTransferApi": {}
          },
          "Snowflake": {
            "object": {},
            "intermediateBucketName": {},
            "bucketPrefix": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "EventBridge": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "LookoutMetrics": {},
          "Upsolver": {
            "bucketName": {},
            "bucketPrefix": {},
            "s3OutputFormatConfig": {
              "fileType": {},
              "prefixConfig": {
                "prefixType": {},
                "prefixFormat": {},
                "pathPrefixHierarchy": {}
              },
              "aggregationConfig": {
                "aggregationType": {},
                "targetFileSize": {}
              }
            }
          },
          "Honeycode": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "CustomerProfiles": {
            "domainName": {},
            "objectTypeName": {}
          },
          "Zendesk": {
            "object": {},
            "idFieldNames": [
              "string"
            ],
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": "INSERT"
          },
          "Marketo": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "CustomConnector": {
            "entityName": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": {},
            "idFieldNames": {},
            "customProperties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "SAPOData": {
            "objectPath": {},
            "successResponseHandlingConfig": {
              "bucketPrefix": {},
              "bucketName": {}
            },
            "idFieldNames": [
              "string"
            ],
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": "INSERT"
          }
        }
      }
    ],
    "tasks": [
      {
        "sourceFields": {},
        "connectorOperator": {
          "Amplitude": {},
          "Datadog": {},
          "Dynatrace": {},
          "GoogleAnalytics": {},
          "InforNexus": {},
          "Marketo": {},
          "S3": {},
          "Salesforce": {},
          "ServiceNow": {},
          "Singular": {},
          "Slack": {},
          "Trendmicro": {},
          "Veeva": {},
          "Zendesk": {},
          "SAPOData": {},
          "CustomConnector": {},
          "Pardot": {}
        },
        "destinationField": {},
        "taskType": {},
        "taskProperties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "metadataCatalogConfig": {
      "glueDataCatalog": {
        "roleArn": {},
        "databaseName": {},
        "tablePrefix": {}
      }
    },
    "clientToken": "string"
  }'
```

`POST /create-flow`

 Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. 

> Body parameter

```json
{
  "flowName": "string",
  "description": "string",
  "kmsArn": "stringstringstringst",
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": [
    {
      "connectorType": {},
      "apiVersion": {},
      "connectorProfileName": {},
      "destinationConnectorProperties": {
        "Redshift": {
          "object": {},
          "intermediateBucketName": {},
          "bucketPrefix": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "S3": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3OutputFormatConfig": {
            "fileType": {},
            "prefixConfig": {
              "prefixType": {},
              "prefixFormat": {},
              "pathPrefixHierarchy": {}
            },
            "aggregationConfig": {
              "aggregationType": {},
              "targetFileSize": {}
            },
            "preserveSourceDataTyping": {}
          }
        },
        "Salesforce": {
          "object": {},
          "idFieldNames": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": {},
          "dataTransferApi": {}
        },
        "Snowflake": {
          "object": {},
          "intermediateBucketName": {},
          "bucketPrefix": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "EventBridge": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "LookoutMetrics": {},
        "Upsolver": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3OutputFormatConfig": {
            "fileType": {},
            "prefixConfig": {
              "prefixType": {},
              "prefixFormat": {},
              "pathPrefixHierarchy": {}
            },
            "aggregationConfig": {
              "aggregationType": {},
              "targetFileSize": {}
            }
          }
        },
        "Honeycode": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "CustomerProfiles": {
          "domainName": {},
          "objectTypeName": {}
        },
        "Zendesk": {
          "object": {},
          "idFieldNames": [
            "string"
          ],
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": "INSERT"
        },
        "Marketo": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "CustomConnector": {
          "entityName": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": {},
          "idFieldNames": {},
          "customProperties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "SAPOData": {
          "objectPath": {},
          "successResponseHandlingConfig": {
            "bucketPrefix": {},
            "bucketName": {}
          },
          "idFieldNames": [
            "string"
          ],
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": "INSERT"
        }
      }
    }
  ],
  "tasks": [
    {
      "sourceFields": {},
      "connectorOperator": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {},
        "InforNexus": {},
        "Marketo": {},
        "S3": {},
        "Salesforce": {},
        "ServiceNow": {},
        "Singular": {},
        "Slack": {},
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {},
        "SAPOData": {},
        "CustomConnector": {},
        "Pardot": {}
      },
      "destinationField": {},
      "taskType": {},
      "taskProperties": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="createflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |
|» description|body|string|false| A description of the flow you want to create. |
|» kmsArn|body|string|false| The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. |
|» triggerConfig|body|object|true| The trigger settings that determine how and when Amazon AppFlow runs the specified flow. |
|» » triggerType|body|object|false|none|
|» » triggerProperties|body|object|false|none|
|» » » Scheduled|body|object|false|none|
|» » » » scheduleExpression|body|object|true|none|
|» » » » dataPullMode|body|object|false|none|
|» » » » scheduleStartTime|body|object|false|none|
|» » » » scheduleEndTime|body|object|false|none|
|» » » » timezone|body|object|false|none|
|» » » » scheduleOffset|body|object|false|none|
|» » » » firstExecutionFrom|body|object|false|none|
|» » » » flowErrorDeactivationThreshold|body|object|false|none|
|» sourceFlowConfig|body|object|true| Contains information about the configuration of the source connector used in the flow. |
|» » connectorType|body|object|false|none|
|» » apiVersion|body|object|false|none|
|» » connectorProfileName|body|object|false|none|
|» » sourceConnectorProperties|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Datadog|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » InforNexus|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » S3|body|object|false|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » s3InputFormatConfig|body|[S3InputFormatConfig](#schemas3inputformatconfig)|false| When you use Amazon S3 as the source, the configuration format that you provide the flow input data. |
|» » » Salesforce|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » » enableDynamicFieldUpdate|body|object|false|none|
|» » » » includeDeletedRecords|body|object|false|none|
|» » » » dataTransferApi|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Slack|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Trendmicro|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Veeva|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » » documentType|body|object|false|none|
|» » » » includeSourceFiles|body|object|false|none|
|» » » » includeRenditions|body|object|false|none|
|» » » » includeAllVersions|body|object|false|none|
|» » » Zendesk|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » SAPOData|body|[SAPODataSourceProperties](#schemasapodatasourceproperties)|false| The properties that are applied when using SAPOData as a flow source. |
|» » » CustomConnector|body|[CustomConnectorSourceProperties](#schemacustomconnectorsourceproperties)|false|The properties that are applied when the custom connector is being used as a source.|
|» » » Pardot|body|object|false|none|
|» » » » object|body|object|true|none|
|» » incrementalPullConfig|body|object|false|none|
|» » » datetimeTypeFieldName|body|object|false|none|
|» destinationFlowConfigList|body|[[DestinationFlowConfig](#schemadestinationflowconfig)]|true| The configuration that controls how Amazon AppFlow places data in the destination connector. |
|» tasks|body|[[Task](#schematask)]|true| A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. |
|» tags|body|object|false| The tags used to organize, track, or control access for your flow. |
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» metadataCatalogConfig|body|object|false|Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.|
|» » glueDataCatalog|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » » databaseName|body|object|true|none|
|» » » tablePrefix|body|object|true|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>|

> Example responses

> 200 Response

```json
{
  "flowArn": {},
  "flowStatus": {}
}
```

> 480 Response

```json
null
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

<h3 id="createflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateFlowResponse](#schemacreateflowresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|484|484|ConflictException|[ConflictException](#schemaconflictexception)|
|485|485|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|486|486|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteConnectorProfile

<a id="opIdDeleteConnectorProfile"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/delete-connector-profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorProfileName": "string",
    "forceDelete": true
  }'
```

`POST /delete-connector-profile`

 Enables you to delete an existing connector profile. 

> Body parameter

```json
{
  "connectorProfileName": "string",
  "forceDelete": true
}
```

<h3 id="deleteconnectorprofile-parameters">Parameters</h3>

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
|» connectorProfileName|body|string|true| The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account. |
|» forceDelete|body|boolean|false| Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. |

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

<h3 id="deleteconnectorprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteConnectorProfileResponse](#schemadeleteconnectorprofileresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteFlow

<a id="opIdDeleteFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/delete-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string",
    "forceDelete": true
  }'
```

`POST /delete-flow`

 Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. 

> Body parameter

```json
{
  "flowName": "string",
  "forceDelete": true
}
```

<h3 id="deleteflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |
|» forceDelete|body|boolean|false| Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. |

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

<h3 id="deleteflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteFlowResponse](#schemadeleteflowresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnector

<a id="opIdDescribeConnector"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-connector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorType": "Salesforce",
    "connectorLabel": "string"
  }'
```

`POST /describe-connector`

Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.

> Body parameter

```json
{
  "connectorType": "Salesforce",
  "connectorLabel": "string"
}
```

<h3 id="describeconnector-parameters">Parameters</h3>

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
|» connectorType|body|string|true|The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.|
|» connectorLabel|body|string|false|The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorType|Salesforce|
|» connectorType|Singular|
|» connectorType|Slack|
|» connectorType|Redshift|
|» connectorType|S3|
|» connectorType|Marketo|
|» connectorType|Googleanalytics|
|» connectorType|Zendesk|
|» connectorType|Servicenow|
|» connectorType|Datadog|
|» connectorType|Trendmicro|
|» connectorType|Snowflake|
|» connectorType|Dynatrace|
|» connectorType|Infornexus|
|» connectorType|Amplitude|
|» connectorType|Veeva|
|» connectorType|EventBridge|
|» connectorType|LookoutMetrics|
|» connectorType|Upsolver|
|» connectorType|Honeycode|
|» connectorType|CustomerProfiles|
|» connectorType|SAPOData|
|» connectorType|CustomConnector|
|» connectorType|Pardot|

> Example responses

> 200 Response

```json
{
  "connectorConfiguration": {
    "canUseAsSource": {},
    "canUseAsDestination": {},
    "supportedDestinationConnectors": {},
    "supportedSchedulingFrequencies": {},
    "isPrivateLinkEnabled": {},
    "isPrivateLinkEndpointUrlRequired": {},
    "supportedTriggerTypes": {},
    "connectorMetadata": {
      "Amplitude": {},
      "Datadog": {},
      "Dynatrace": {},
      "GoogleAnalytics": {
        "oAuthScopes": {}
      },
      "InforNexus": {},
      "Marketo": {},
      "Redshift": {},
      "S3": {},
      "Salesforce": {
        "oAuthScopes": {},
        "dataTransferApis": {}
      },
      "ServiceNow": {},
      "Singular": {},
      "Slack": {
        "oAuthScopes": {}
      },
      "Snowflake": {
        "supportedRegions": {}
      },
      "Trendmicro": {},
      "Veeva": {},
      "Zendesk": {
        "oAuthScopes": {}
      },
      "EventBridge": {},
      "Upsolver": {},
      "CustomerProfiles": {},
      "Honeycode": {
        "oAuthScopes": {}
      },
      "SAPOData": {},
      "Pardot": {}
    },
    "connectorType": {},
    "connectorLabel": {},
    "connectorDescription": {},
    "connectorOwner": {},
    "connectorName": {},
    "connectorVersion": {},
    "connectorArn": {},
    "connectorModes": {},
    "authenticationConfig": {
      "isBasicAuthSupported": {},
      "isApiKeyAuthSupported": {},
      "isOAuth2Supported": {},
      "isCustomAuthSupported": {},
      "oAuth2Defaults": {
        "oauthScopes": {},
        "tokenUrls": {},
        "authCodeUrls": {},
        "oauth2GrantTypesSupported": {},
        "oauth2CustomProperties": {}
      },
      "customAuthConfigs": {}
    },
    "connectorRuntimeSettings": {},
    "supportedApiVersions": {},
    "supportedOperators": {},
    "supportedWriteOperations": {},
    "connectorProvisioningType": {},
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "logoURL": {},
    "registeredAt": {},
    "registeredBy": {}
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

<h3 id="describeconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectorResponse](#schemadescribeconnectorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectorEntity

<a id="opIdDescribeConnectorEntity"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-connector-entity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorEntityName": "string",
    "connectorType": "Salesforce",
    "connectorProfileName": "string",
    "apiVersion": "string"
  }'
```

`POST /describe-connector-entity`

 Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. 

> Body parameter

```json
{
  "connectorEntityName": "string",
  "connectorType": "Salesforce",
  "connectorProfileName": "string",
  "apiVersion": "string"
}
```

<h3 id="describeconnectorentity-parameters">Parameters</h3>

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
|» connectorEntityName|body|string|true| The entity name for that connector. |
|» connectorType|body|string|false| The type of connector application, such as Salesforce, Amplitude, and so on. |
|» connectorProfileName|body|string|false| The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. |
|» apiVersion|body|string|false|The version of the API that's used by the connector.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorType|Salesforce|
|» connectorType|Singular|
|» connectorType|Slack|
|» connectorType|Redshift|
|» connectorType|S3|
|» connectorType|Marketo|
|» connectorType|Googleanalytics|
|» connectorType|Zendesk|
|» connectorType|Servicenow|
|» connectorType|Datadog|
|» connectorType|Trendmicro|
|» connectorType|Snowflake|
|» connectorType|Dynatrace|
|» connectorType|Infornexus|
|» connectorType|Amplitude|
|» connectorType|Veeva|
|» connectorType|EventBridge|
|» connectorType|LookoutMetrics|
|» connectorType|Upsolver|
|» connectorType|Honeycode|
|» connectorType|CustomerProfiles|
|» connectorType|SAPOData|
|» connectorType|CustomConnector|
|» connectorType|Pardot|

> Example responses

> 200 Response

```json
{
  "connectorEntityFields": {}
}
```

> 480 Response

```json
null
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

<h3 id="describeconnectorentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectorEntityResponse](#schemadescribeconnectorentityresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|483|483|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectorProfiles

<a id="opIdDescribeConnectorProfiles"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-connector-profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorProfileNames": [
      "string"
    ],
    "connectorType": "Salesforce",
    "connectorLabel": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /describe-connector-profiles`

<p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>

> Body parameter

```json
{
  "connectorProfileNames": [
    "string"
  ],
  "connectorType": "Salesforce",
  "connectorLabel": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describeconnectorprofiles-parameters">Parameters</h3>

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
|» connectorProfileNames|body|[[ConnectorProfileName](#schemaconnectorprofilename)]|false| The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. |
|» connectorType|body|string|false| The type of connector, such as Salesforce, Amplitude, and so on. |
|» connectorLabel|body|string|false|The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.|
|» maxResults|body|integer|false| Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). |
|» nextToken|body|string|false| The pagination token for the next page of data. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorType|Salesforce|
|» connectorType|Singular|
|» connectorType|Slack|
|» connectorType|Redshift|
|» connectorType|S3|
|» connectorType|Marketo|
|» connectorType|Googleanalytics|
|» connectorType|Zendesk|
|» connectorType|Servicenow|
|» connectorType|Datadog|
|» connectorType|Trendmicro|
|» connectorType|Snowflake|
|» connectorType|Dynatrace|
|» connectorType|Infornexus|
|» connectorType|Amplitude|
|» connectorType|Veeva|
|» connectorType|EventBridge|
|» connectorType|LookoutMetrics|
|» connectorType|Upsolver|
|» connectorType|Honeycode|
|» connectorType|CustomerProfiles|
|» connectorType|SAPOData|
|» connectorType|CustomConnector|
|» connectorType|Pardot|

> Example responses

> 200 Response

```json
{
  "connectorProfileDetails": {},
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

<h3 id="describeconnectorprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectorProfilesResponse](#schemadescribeconnectorprofilesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeConnectors

<a id="opIdDescribeConnectors"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorTypes": [
      "Salesforce"
    ],
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /describe-connectors`

 Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. 

> Body parameter

```json
{
  "connectorTypes": [
    "Salesforce"
  ],
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describeconnectors-parameters">Parameters</h3>

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
|» connectorTypes|body|[[ConnectorType](#schemaconnectortype)]|false| The type of connector, such as Salesforce, Amplitude, and so on. |
|» maxResults|body|integer|false|The maximum number of items that should be returned in the result set. The default is 20.|
|» nextToken|body|string|false| The pagination token for the next page of data. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorTypes|Salesforce|
|» connectorTypes|Singular|
|» connectorTypes|Slack|
|» connectorTypes|Redshift|
|» connectorTypes|S3|
|» connectorTypes|Marketo|
|» connectorTypes|Googleanalytics|
|» connectorTypes|Zendesk|
|» connectorTypes|Servicenow|
|» connectorTypes|Datadog|
|» connectorTypes|Trendmicro|
|» connectorTypes|Snowflake|
|» connectorTypes|Dynatrace|
|» connectorTypes|Infornexus|
|» connectorTypes|Amplitude|
|» connectorTypes|Veeva|
|» connectorTypes|EventBridge|
|» connectorTypes|LookoutMetrics|
|» connectorTypes|Upsolver|
|» connectorTypes|Honeycode|
|» connectorTypes|CustomerProfiles|
|» connectorTypes|SAPOData|
|» connectorTypes|CustomConnector|
|» connectorTypes|Pardot|

> Example responses

> 200 Response

```json
{
  "connectorConfigurations": {
    "property1": {
      "canUseAsSource": {},
      "canUseAsDestination": {},
      "supportedDestinationConnectors": {},
      "supportedSchedulingFrequencies": {},
      "isPrivateLinkEnabled": {},
      "isPrivateLinkEndpointUrlRequired": {},
      "supportedTriggerTypes": {},
      "connectorMetadata": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {
          "oAuthScopes": {}
        },
        "InforNexus": {},
        "Marketo": {},
        "Redshift": {},
        "S3": {},
        "Salesforce": {
          "oAuthScopes": {},
          "dataTransferApis": {}
        },
        "ServiceNow": {},
        "Singular": {},
        "Slack": {
          "oAuthScopes": {}
        },
        "Snowflake": {
          "supportedRegions": {}
        },
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {
          "oAuthScopes": {}
        },
        "EventBridge": {},
        "Upsolver": {},
        "CustomerProfiles": {},
        "Honeycode": {
          "oAuthScopes": {}
        },
        "SAPOData": {},
        "Pardot": {}
      },
      "connectorType": {},
      "connectorLabel": {},
      "connectorDescription": {},
      "connectorOwner": {},
      "connectorName": {},
      "connectorVersion": {},
      "connectorArn": {},
      "connectorModes": {},
      "authenticationConfig": {
        "isBasicAuthSupported": {},
        "isApiKeyAuthSupported": {},
        "isOAuth2Supported": {},
        "isCustomAuthSupported": {},
        "oAuth2Defaults": {
          "oauthScopes": {},
          "tokenUrls": {},
          "authCodeUrls": {},
          "oauth2GrantTypesSupported": {},
          "oauth2CustomProperties": {}
        },
        "customAuthConfigs": {}
      },
      "connectorRuntimeSettings": {},
      "supportedApiVersions": {},
      "supportedOperators": {},
      "supportedWriteOperations": {},
      "connectorProvisioningType": {},
      "connectorProvisioningConfig": {
        "lambda": {
          "lambdaArn": {}
        }
      },
      "logoURL": {},
      "registeredAt": {},
      "registeredBy": {}
    },
    "property2": {
      "canUseAsSource": {},
      "canUseAsDestination": {},
      "supportedDestinationConnectors": {},
      "supportedSchedulingFrequencies": {},
      "isPrivateLinkEnabled": {},
      "isPrivateLinkEndpointUrlRequired": {},
      "supportedTriggerTypes": {},
      "connectorMetadata": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {
          "oAuthScopes": {}
        },
        "InforNexus": {},
        "Marketo": {},
        "Redshift": {},
        "S3": {},
        "Salesforce": {
          "oAuthScopes": {},
          "dataTransferApis": {}
        },
        "ServiceNow": {},
        "Singular": {},
        "Slack": {
          "oAuthScopes": {}
        },
        "Snowflake": {
          "supportedRegions": {}
        },
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {
          "oAuthScopes": {}
        },
        "EventBridge": {},
        "Upsolver": {},
        "CustomerProfiles": {},
        "Honeycode": {
          "oAuthScopes": {}
        },
        "SAPOData": {},
        "Pardot": {}
      },
      "connectorType": {},
      "connectorLabel": {},
      "connectorDescription": {},
      "connectorOwner": {},
      "connectorName": {},
      "connectorVersion": {},
      "connectorArn": {},
      "connectorModes": {},
      "authenticationConfig": {
        "isBasicAuthSupported": {},
        "isApiKeyAuthSupported": {},
        "isOAuth2Supported": {},
        "isCustomAuthSupported": {},
        "oAuth2Defaults": {
          "oauthScopes": {},
          "tokenUrls": {},
          "authCodeUrls": {},
          "oauth2GrantTypesSupported": {},
          "oauth2CustomProperties": {}
        },
        "customAuthConfigs": {}
      },
      "connectorRuntimeSettings": {},
      "supportedApiVersions": {},
      "supportedOperators": {},
      "supportedWriteOperations": {},
      "connectorProvisioningType": {},
      "connectorProvisioningConfig": {
        "lambda": {
          "lambdaArn": {}
        }
      },
      "logoURL": {},
      "registeredAt": {},
      "registeredBy": {}
    }
  },
  "connectors": {},
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

<h3 id="describeconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeConnectorsResponse](#schemadescribeconnectorsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFlow

<a id="opIdDescribeFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string"
  }'
```

`POST /describe-flow`

 Provides a description of the specified flow. 

> Body parameter

```json
{
  "flowName": "string"
}
```

<h3 id="describeflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |

> Example responses

> 200 Response

```json
{
  "flowArn": {},
  "description": {},
  "flowName": {},
  "kmsArn": {},
  "flowStatus": {},
  "flowStatusMessage": {},
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": {},
  "lastRunExecutionDetails": {
    "mostRecentExecutionMessage": {},
    "mostRecentExecutionTime": {},
    "mostRecentExecutionStatus": {}
  },
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "tasks": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "createdBy": {},
  "lastUpdatedBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "lastRunMetadataCatalogDetails": {},
  "schemaVersion": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

<h3 id="describeflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFlowResponse](#schemadescribeflowresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeFlowExecutionRecords

<a id="opIdDescribeFlowExecutionRecords"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/describe-flow-execution-records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /describe-flow-execution-records`

 Fetches the execution history of the flow. 

> Body parameter

```json
{
  "flowName": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="describeflowexecutionrecords-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |
|» maxResults|body|integer|false| Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). |
|» nextToken|body|string|false| The pagination token for the next page of data. |

> Example responses

> 200 Response

```json
{
  "flowExecutions": {},
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

<h3 id="describeflowexecutionrecords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeFlowExecutionRecordsResponse](#schemadescribeflowexecutionrecordsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectorEntities

<a id="opIdListConnectorEntities"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/list-connector-entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorProfileName": "string",
    "connectorType": "Salesforce",
    "entitiesPath": "string",
    "apiVersion": "string",
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /list-connector-entities`

 Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. 

> Body parameter

```json
{
  "connectorProfileName": "string",
  "connectorType": "Salesforce",
  "entitiesPath": "string",
  "apiVersion": "string",
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listconnectorentities-parameters">Parameters</h3>

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
|» connectorProfileName|body|string|false| The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector. |
|» connectorType|body|string|false| The type of connector, such as Salesforce, Amplitude, and so on. |
|» entitiesPath|body|string|false| This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider. |
|» apiVersion|body|string|false|The version of the API that's used by the connector.|
|» maxResults|body|integer|false|The maximum number of items that the operation returns in the response.|
|» nextToken|body|string|false|A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorType|Salesforce|
|» connectorType|Singular|
|» connectorType|Slack|
|» connectorType|Redshift|
|» connectorType|S3|
|» connectorType|Marketo|
|» connectorType|Googleanalytics|
|» connectorType|Zendesk|
|» connectorType|Servicenow|
|» connectorType|Datadog|
|» connectorType|Trendmicro|
|» connectorType|Snowflake|
|» connectorType|Dynatrace|
|» connectorType|Infornexus|
|» connectorType|Amplitude|
|» connectorType|Veeva|
|» connectorType|EventBridge|
|» connectorType|LookoutMetrics|
|» connectorType|Upsolver|
|» connectorType|Honeycode|
|» connectorType|CustomerProfiles|
|» connectorType|SAPOData|
|» connectorType|CustomConnector|
|» connectorType|Pardot|

> Example responses

> 200 Response

```json
{
  "connectorEntityMap": {
    "property1": [
      {
        "name": {},
        "label": {},
        "hasNestedEntities": {}
      }
    ],
    "property2": [
      {
        "name": {},
        "label": {},
        "hasNestedEntities": {}
      }
    ]
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

<h3 id="listconnectorentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectorEntitiesResponse](#schemalistconnectorentitiesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|483|483|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListConnectors

<a id="opIdListConnectors"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/list-connectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /list-connectors`

Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. 

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listconnectors-parameters">Parameters</h3>

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
|» maxResults|body|integer|false|Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).|
|» nextToken|body|string|false|The pagination token for the next page of data.|

> Example responses

> 200 Response

```json
{
  "connectors": {},
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

<h3 id="listconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListConnectorsResponse](#schemalistconnectorsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListFlows

<a id="opIdListFlows"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/list-flows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "maxResults": 1,
    "nextToken": "string"
  }'
```

`POST /list-flows`

 Lists all of the flows associated with your account. 

> Body parameter

```json
{
  "maxResults": 1,
  "nextToken": "string"
}
```

<h3 id="listflows-parameters">Parameters</h3>

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
|» maxResults|body|integer|false| Specifies the maximum number of items that should be returned in the result set. |
|» nextToken|body|string|false| The pagination token for next page of data. |

> Example responses

> 200 Response

```json
{
  "flows": {},
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

<h3 id="listflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListFlowsResponse](#schemalistflowsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{resourceArn}`

 Retrieves the tags that are associated with a specified flow. 

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the specified flow. |
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/tags/string \
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

 Applies a tag to the specified flow. 

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
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the flow that you want to tag. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» tags|body|object|true| The tags used to organize, track, or control access for your flow. |
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## RegisterConnector

<a id="opIdRegisterConnector"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/register-connector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorLabel": "string",
    "description": "string",
    "connectorProvisioningType": "LAMBDA",
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "clientToken": "string"
  }'
```

`POST /register-connector`

Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.

> Body parameter

```json
{
  "connectorLabel": "string",
  "description": "string",
  "connectorProvisioningType": "LAMBDA",
  "connectorProvisioningConfig": {
    "lambda": {
      "lambdaArn": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="registerconnector-parameters">Parameters</h3>

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
|» connectorLabel|body|string|false| The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.|
|» description|body|string|false|A description about the connector that's being registered.|
|» connectorProvisioningType|body|string|false|The type of provisioning that the connector supports, such as Lambda.|
|» connectorProvisioningConfig|body|object|false|Contains information about the configuration of the connector being registered.|
|» » lambda|body|object|false|none|
|» » » lambdaArn|body|object|true|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectorProvisioningType|LAMBDA|

> Example responses

> 200 Response

```json
{
  "connectorArn": {}
}
```

> 480 Response

```json
null
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

<h3 id="registerconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[RegisterConnectorResponse](#schemaregisterconnectorresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|487|487|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|
|488|488|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StartFlow

<a id="opIdStartFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/start-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string",
    "clientToken": "string"
  }'
```

`POST /start-flow`

 Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. 

> Body parameter

```json
{
  "flowName": "string",
  "clientToken": "string"
}
```

<h3 id="startflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>|

> Example responses

> 200 Response

```json
{
  "flowArn": {},
  "flowStatus": {},
  "executionId": {}
}
```

> 480 Response

```json
null
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

<h3 id="startflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StartFlowResponse](#schemastartflowresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## StopFlow

<a id="opIdStopFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/stop-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string"
  }'
```

`POST /stop-flow`

 Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. 

> Body parameter

```json
{
  "flowName": "string"
}
```

<h3 id="stopflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |

> Example responses

> 200 Response

```json
{
  "flowArn": {},
  "flowStatus": {}
}
```

> 480 Response

```json
null
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

<h3 id="stopflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StopFlowResponse](#schemastopflowresponse)|
|480|480|ConflictException|[ConflictException](#schemaconflictexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|UnsupportedOperationException|[UnsupportedOperationException](#schemaunsupportedoperationexception)|
|483|483|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UnregisterConnector

<a id="opIdUnregisterConnector"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/unregister-connector \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorLabel": "string",
    "forceDelete": true
  }'
```

`POST /unregister-connector`

Unregisters the custom connector registered in your account that matches the connector label provided in the request.

> Body parameter

```json
{
  "connectorLabel": "string",
  "forceDelete": true
}
```

<h3 id="unregisterconnector-parameters">Parameters</h3>

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
|» connectorLabel|body|string|true|The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.|
|» forceDelete|body|boolean|false|Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.|

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

<h3 id="unregisterconnector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UnregisterConnectorResponse](#schemaunregisterconnectorresponse)|
|480|480|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://appflow.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{resourceArn}#tagKeys`

 Removes a tag from the specified flow. 

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceArn|path|string|true| The Amazon Resource Name (ARN) of the flow that you want to untag. |
|tagKeys|query|[[TagKey](#schematagkey)]|true| The tag keys associated with the tag that you want to remove from your flow. |
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
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ValidationException|[ValidationException](#schemavalidationexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectorProfile

<a id="opIdUpdateConnectorProfile"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/update-connector-profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorProfileName": "string",
    "connectionMode": "Public",
    "connectorProfileConfig": {
      "connectorProfileProperties": {
        "Amplitude": {},
        "Datadog": {
          "instanceUrl": {}
        },
        "Dynatrace": {
          "instanceUrl": {}
        },
        "GoogleAnalytics": {},
        "Honeycode": {},
        "InforNexus": {
          "instanceUrl": {}
        },
        "Marketo": {
          "instanceUrl": {}
        },
        "Redshift": {
          "databaseUrl": {},
          "bucketName": {},
          "bucketPrefix": {},
          "roleArn": {},
          "dataApiRoleArn": {},
          "isRedshiftServerless": {},
          "clusterIdentifier": {},
          "workgroupName": {},
          "databaseName": {}
        },
        "Salesforce": {
          "instanceUrl": {},
          "isSandboxEnvironment": {},
          "usePrivateLinkForMetadataAndAuthorization": {}
        },
        "ServiceNow": {
          "instanceUrl": {}
        },
        "Singular": {},
        "Slack": {
          "instanceUrl": {}
        },
        "Snowflake": {
          "warehouse": {},
          "stage": {},
          "bucketName": {},
          "bucketPrefix": {},
          "privateLinkServiceName": {},
          "accountName": {},
          "region": {}
        },
        "Trendmicro": {},
        "Veeva": {
          "instanceUrl": {}
        },
        "Zendesk": {
          "instanceUrl": {}
        },
        "SAPOData": {
          "applicationHostUrl": {},
          "applicationServicePath": {},
          "portNumber": {},
          "clientNumber": {},
          "logonLanguage": {},
          "privateLinkServiceName": {},
          "oAuthProperties": {
            "tokenUrl": {},
            "authCodeUrl": {},
            "oAuthScopes": {}
          }
        },
        "CustomConnector": {
          "profileProperties": {
            "property1": "string",
            "property2": "string"
          },
          "oAuth2Properties": {
            "tokenUrl": {},
            "oAuth2GrantType": {},
            "tokenUrlCustomProperties": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "Pardot": {
          "instanceUrl": {},
          "isSandboxEnvironment": {},
          "businessUnitId": {}
        }
      },
      "connectorProfileCredentials": {
        "Amplitude": {
          "apiKey": {},
          "secretKey": {}
        },
        "Datadog": {
          "apiKey": {},
          "applicationKey": {}
        },
        "Dynatrace": {
          "apiToken": {}
        },
        "GoogleAnalytics": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Honeycode": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "InforNexus": {
          "accessKeyId": {},
          "userId": {},
          "secretAccessKey": {},
          "datakey": {}
        },
        "Marketo": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Redshift": {
          "username": {},
          "password": {}
        },
        "Salesforce": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          },
          "clientCredentialsArn": {}
        },
        "ServiceNow": {
          "username": {},
          "password": {}
        },
        "Singular": {
          "apiKey": {}
        },
        "Slack": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "Snowflake": {
          "username": {},
          "password": {}
        },
        "Trendmicro": {
          "apiSecretKey": {}
        },
        "Veeva": {
          "username": {},
          "password": {}
        },
        "Zendesk": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "SAPOData": {
          "basicAuthCredentials": {
            "username": {},
            "password": {}
          },
          "oAuthCredentials": {
            "clientId": {},
            "clientSecret": {},
            "accessToken": {},
            "refreshToken": {},
            "oAuthRequest": {
              "authCode": {},
              "redirectUri": {}
            }
          }
        },
        "CustomConnector": {
          "authenticationType": {},
          "basic": {
            "username": {},
            "password": {}
          },
          "oauth2": {
            "clientId": {},
            "clientSecret": {},
            "accessToken": {},
            "refreshToken": {},
            "oAuthRequest": {
              "authCode": {},
              "redirectUri": {}
            }
          },
          "apiKey": {
            "apiKey": {},
            "apiSecretKey": {}
          },
          "custom": {
            "customAuthenticationType": {},
            "credentialsMap": {
              "property1": "password",
              "property2": "password"
            }
          }
        },
        "Pardot": {
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          },
          "clientCredentialsArn": {}
        }
      }
    },
    "clientToken": "string"
  }'
```

`POST /update-connector-profile`

 Updates a given connector profile associated with your account. 

> Body parameter

```json
{
  "connectorProfileName": "string",
  "connectionMode": "Public",
  "connectorProfileConfig": {
    "connectorProfileProperties": {
      "Amplitude": {},
      "Datadog": {
        "instanceUrl": {}
      },
      "Dynatrace": {
        "instanceUrl": {}
      },
      "GoogleAnalytics": {},
      "Honeycode": {},
      "InforNexus": {
        "instanceUrl": {}
      },
      "Marketo": {
        "instanceUrl": {}
      },
      "Redshift": {
        "databaseUrl": {},
        "bucketName": {},
        "bucketPrefix": {},
        "roleArn": {},
        "dataApiRoleArn": {},
        "isRedshiftServerless": {},
        "clusterIdentifier": {},
        "workgroupName": {},
        "databaseName": {}
      },
      "Salesforce": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "usePrivateLinkForMetadataAndAuthorization": {}
      },
      "ServiceNow": {
        "instanceUrl": {}
      },
      "Singular": {},
      "Slack": {
        "instanceUrl": {}
      },
      "Snowflake": {
        "warehouse": {},
        "stage": {},
        "bucketName": {},
        "bucketPrefix": {},
        "privateLinkServiceName": {},
        "accountName": {},
        "region": {}
      },
      "Trendmicro": {},
      "Veeva": {
        "instanceUrl": {}
      },
      "Zendesk": {
        "instanceUrl": {}
      },
      "SAPOData": {
        "applicationHostUrl": {},
        "applicationServicePath": {},
        "portNumber": {},
        "clientNumber": {},
        "logonLanguage": {},
        "privateLinkServiceName": {},
        "oAuthProperties": {
          "tokenUrl": {},
          "authCodeUrl": {},
          "oAuthScopes": {}
        }
      },
      "CustomConnector": {
        "profileProperties": {
          "property1": "string",
          "property2": "string"
        },
        "oAuth2Properties": {
          "tokenUrl": {},
          "oAuth2GrantType": {},
          "tokenUrlCustomProperties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "Pardot": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "businessUnitId": {}
      }
    },
    "connectorProfileCredentials": {
      "Amplitude": {
        "apiKey": {},
        "secretKey": {}
      },
      "Datadog": {
        "apiKey": {},
        "applicationKey": {}
      },
      "Dynatrace": {
        "apiToken": {}
      },
      "GoogleAnalytics": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Honeycode": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "InforNexus": {
        "accessKeyId": {},
        "userId": {},
        "secretAccessKey": {},
        "datakey": {}
      },
      "Marketo": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Redshift": {
        "username": {},
        "password": {}
      },
      "Salesforce": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      },
      "ServiceNow": {
        "username": {},
        "password": {}
      },
      "Singular": {
        "apiKey": {}
      },
      "Slack": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Snowflake": {
        "username": {},
        "password": {}
      },
      "Trendmicro": {
        "apiSecretKey": {}
      },
      "Veeva": {
        "username": {},
        "password": {}
      },
      "Zendesk": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "SAPOData": {
        "basicAuthCredentials": {
          "username": {},
          "password": {}
        },
        "oAuthCredentials": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        }
      },
      "CustomConnector": {
        "authenticationType": {},
        "basic": {
          "username": {},
          "password": {}
        },
        "oauth2": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "apiKey": {
          "apiKey": {},
          "apiSecretKey": {}
        },
        "custom": {
          "customAuthenticationType": {},
          "credentialsMap": {
            "property1": "password",
            "property2": "password"
          }
        }
      },
      "Pardot": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      }
    }
  },
  "clientToken": "string"
}
```

<h3 id="updateconnectorprofile-parameters">Parameters</h3>

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
|» connectorProfileName|body|string|true| The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. |
|» connectionMode|body|string|true| Indicates the connection mode and if it is public or private. |
|» connectorProfileConfig|body|object|true| Defines the connector-specific configuration and credentials for the connector profile. |
|» » connectorProfileProperties|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » Datadog|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » Honeycode|body|object|false|none|
|» » » InforNexus|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Redshift|body|object|false|none|
|» » » » databaseUrl|body|object|false|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » roleArn|body|object|true|none|
|» » » » dataApiRoleArn|body|object|false|none|
|» » » » isRedshiftServerless|body|object|false|none|
|» » » » clusterIdentifier|body|object|false|none|
|» » » » workgroupName|body|object|false|none|
|» » » » databaseName|body|object|false|none|
|» » » Salesforce|body|object|false|none|
|» » » » instanceUrl|body|object|false|none|
|» » » » isSandboxEnvironment|body|object|false|none|
|» » » » usePrivateLinkForMetadataAndAuthorization|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » Slack|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Snowflake|body|object|false|none|
|» » » » warehouse|body|object|true|none|
|» » » » stage|body|object|true|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » privateLinkServiceName|body|object|false|none|
|» » » » accountName|body|object|false|none|
|» » » » region|body|object|false|none|
|» » » Trendmicro|body|object|false|none|
|» » » Veeva|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » Zendesk|body|object|false|none|
|» » » » instanceUrl|body|object|true|none|
|» » » SAPOData|body|[SAPODataConnectorProfileProperties](#schemasapodataconnectorprofileproperties)|false| The connector-specific profile properties required when using SAPOData. |
|» » » CustomConnector|body|object|false|none|
|» » » » profileProperties|body|object|false|none|
|» » » » » **additionalProperties**|body|[ProfilePropertyValue](#schemaprofilepropertyvalue)|false|none|
|» » » » oAuth2Properties|body|[OAuth2Properties](#schemaoauth2properties)|false|The OAuth 2.0 properties required for OAuth 2.0 authentication.|
|» » » Pardot|body|object|false|none|
|» » » » instanceUrl|body|object|false|none|
|» » » » isSandboxEnvironment|body|object|false|none|
|» » » » businessUnitId|body|object|false|none|
|» » connectorProfileCredentials|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » » secretKey|body|object|true|none|
|» » » Datadog|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » » applicationKey|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » apiToken|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Honeycode|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |
|» » » InforNexus|body|object|false|none|
|» » » » accessKeyId|body|object|true|none|
|» » » » userId|body|object|true|none|
|» » » » secretAccessKey|body|object|true|none|
|» » » » datakey|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Redshift|body|object|false|none|
|» » » » username|body|object|false|none|
|» » » » password|body|object|false|none|
|» » » Salesforce|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » » clientCredentialsArn|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » » apiKey|body|object|true|none|
|» » » Slack|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » Snowflake|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Trendmicro|body|object|false|none|
|» » » » apiSecretKey|body|object|true|none|
|» » » Veeva|body|object|false|none|
|» » » » username|body|object|true|none|
|» » » » password|body|object|true|none|
|» » » Zendesk|body|object|false|none|
|» » » » clientId|body|object|true|none|
|» » » » clientSecret|body|object|true|none|
|» » » » accessToken|body|object|false|none|
|» » » » oAuthRequest|body|object|false|none|
|» » » » » authCode|body|object|false|none|
|» » » » » redirectUri|body|object|false|none|
|» » » SAPOData|body|[SAPODataConnectorProfileCredentials](#schemasapodataconnectorprofilecredentials)|false| The connector-specific profile credentials required when using SAPOData. |
|» » » CustomConnector|body|[CustomConnectorProfileCredentials](#schemacustomconnectorprofilecredentials)|false|The connector-specific profile credentials that are required when using the custom connector.|
|» » » Pardot|body|object|false|none|
|» » » » accessToken|body|object|false|none|
|» » » » refreshToken|body|object|false|none|
|» » » » oAuthRequest|body|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |
|» » » » clientCredentialsArn|body|object|false|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» connectionMode|Public|
|» connectionMode|Private|

> Example responses

> 200 Response

```json
{
  "connectorProfileArn": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateconnectorprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectorProfileResponse](#schemaupdateconnectorprofileresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|484|484|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateConnectorRegistration

<a id="opIdUpdateConnectorRegistration"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/update-connector-registration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "connectorLabel": "string",
    "description": "string",
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "clientToken": "string"
  }'
```

`POST /update-connector-registration`

<p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>

> Body parameter

```json
{
  "connectorLabel": "string",
  "description": "string",
  "connectorProvisioningConfig": {
    "lambda": {
      "lambdaArn": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="updateconnectorregistration-parameters">Parameters</h3>

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
|» connectorLabel|body|string|true|The name of the connector. The name is unique for each connector registration in your AWS account.|
|» description|body|string|false|A description about the update that you're applying to the connector.|
|» connectorProvisioningConfig|body|object|false|Contains information about the configuration of the connector being registered.|
|» » lambda|body|object|false|none|
|» » » lambdaArn|body|object|true|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>|

> Example responses

> 200 Response

```json
{
  "connectorArn": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateconnectorregistration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateConnectorRegistrationResponse](#schemaupdateconnectorregistrationresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|487|487|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|
|488|488|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateFlow

<a id="opIdUpdateFlow"></a>

> Code samples

```bash
curl https://appflow.us-east-1.amazonaws.com/update-flow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "flowName": "string",
    "description": "string",
    "triggerConfig": {
      "triggerType": {},
      "triggerProperties": {
        "Scheduled": {
          "scheduleExpression": {},
          "dataPullMode": {},
          "scheduleStartTime": {},
          "scheduleEndTime": {},
          "timezone": {},
          "scheduleOffset": {},
          "firstExecutionFrom": {},
          "flowErrorDeactivationThreshold": {}
        }
      }
    },
    "sourceFlowConfig": {
      "connectorType": {},
      "apiVersion": {},
      "connectorProfileName": {},
      "sourceConnectorProperties": {
        "Amplitude": {
          "object": {}
        },
        "Datadog": {
          "object": {}
        },
        "Dynatrace": {
          "object": {}
        },
        "GoogleAnalytics": {
          "object": {}
        },
        "InforNexus": {
          "object": {}
        },
        "Marketo": {
          "object": {}
        },
        "S3": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3InputFormatConfig": {
            "s3InputFileType": {}
          }
        },
        "Salesforce": {
          "object": {},
          "enableDynamicFieldUpdate": {},
          "includeDeletedRecords": {},
          "dataTransferApi": {}
        },
        "ServiceNow": {
          "object": {}
        },
        "Singular": {
          "object": {}
        },
        "Slack": {
          "object": {}
        },
        "Trendmicro": {
          "object": {}
        },
        "Veeva": {
          "object": {},
          "documentType": {},
          "includeSourceFiles": {},
          "includeRenditions": {},
          "includeAllVersions": {}
        },
        "Zendesk": {
          "object": {}
        },
        "SAPOData": {
          "objectPath": {}
        },
        "CustomConnector": {
          "entityName": {},
          "customProperties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "Pardot": {
          "object": {}
        }
      },
      "incrementalPullConfig": {
        "datetimeTypeFieldName": {}
      }
    },
    "destinationFlowConfigList": [
      {
        "connectorType": {},
        "apiVersion": {},
        "connectorProfileName": {},
        "destinationConnectorProperties": {
          "Redshift": {
            "object": {},
            "intermediateBucketName": {},
            "bucketPrefix": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "S3": {
            "bucketName": {},
            "bucketPrefix": {},
            "s3OutputFormatConfig": {
              "fileType": {},
              "prefixConfig": {
                "prefixType": {},
                "prefixFormat": {},
                "pathPrefixHierarchy": {}
              },
              "aggregationConfig": {
                "aggregationType": {},
                "targetFileSize": {}
              },
              "preserveSourceDataTyping": {}
            }
          },
          "Salesforce": {
            "object": {},
            "idFieldNames": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": {},
            "dataTransferApi": {}
          },
          "Snowflake": {
            "object": {},
            "intermediateBucketName": {},
            "bucketPrefix": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "EventBridge": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "LookoutMetrics": {},
          "Upsolver": {
            "bucketName": {},
            "bucketPrefix": {},
            "s3OutputFormatConfig": {
              "fileType": {},
              "prefixConfig": {
                "prefixType": {},
                "prefixFormat": {},
                "pathPrefixHierarchy": {}
              },
              "aggregationConfig": {
                "aggregationType": {},
                "targetFileSize": {}
              }
            }
          },
          "Honeycode": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "CustomerProfiles": {
            "domainName": {},
            "objectTypeName": {}
          },
          "Zendesk": {
            "object": {},
            "idFieldNames": [
              "string"
            ],
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": "INSERT"
          },
          "Marketo": {
            "object": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            }
          },
          "CustomConnector": {
            "entityName": {},
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": {},
            "idFieldNames": {},
            "customProperties": {
              "property1": "string",
              "property2": "string"
            }
          },
          "SAPOData": {
            "objectPath": {},
            "successResponseHandlingConfig": {
              "bucketPrefix": {},
              "bucketName": {}
            },
            "idFieldNames": [
              "string"
            ],
            "errorHandlingConfig": {
              "failOnFirstDestinationError": {},
              "bucketPrefix": {},
              "bucketName": {}
            },
            "writeOperationType": "INSERT"
          }
        }
      }
    ],
    "tasks": [
      {
        "sourceFields": {},
        "connectorOperator": {
          "Amplitude": {},
          "Datadog": {},
          "Dynatrace": {},
          "GoogleAnalytics": {},
          "InforNexus": {},
          "Marketo": {},
          "S3": {},
          "Salesforce": {},
          "ServiceNow": {},
          "Singular": {},
          "Slack": {},
          "Trendmicro": {},
          "Veeva": {},
          "Zendesk": {},
          "SAPOData": {},
          "CustomConnector": {},
          "Pardot": {}
        },
        "destinationField": {},
        "taskType": {},
        "taskProperties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "metadataCatalogConfig": {
      "glueDataCatalog": {
        "roleArn": {},
        "databaseName": {},
        "tablePrefix": {}
      }
    },
    "clientToken": "string"
  }'
```

`POST /update-flow`

 Updates an existing flow. 

> Body parameter

```json
{
  "flowName": "string",
  "description": "string",
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": [
    {
      "connectorType": {},
      "apiVersion": {},
      "connectorProfileName": {},
      "destinationConnectorProperties": {
        "Redshift": {
          "object": {},
          "intermediateBucketName": {},
          "bucketPrefix": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "S3": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3OutputFormatConfig": {
            "fileType": {},
            "prefixConfig": {
              "prefixType": {},
              "prefixFormat": {},
              "pathPrefixHierarchy": {}
            },
            "aggregationConfig": {
              "aggregationType": {},
              "targetFileSize": {}
            },
            "preserveSourceDataTyping": {}
          }
        },
        "Salesforce": {
          "object": {},
          "idFieldNames": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": {},
          "dataTransferApi": {}
        },
        "Snowflake": {
          "object": {},
          "intermediateBucketName": {},
          "bucketPrefix": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "EventBridge": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "LookoutMetrics": {},
        "Upsolver": {
          "bucketName": {},
          "bucketPrefix": {},
          "s3OutputFormatConfig": {
            "fileType": {},
            "prefixConfig": {
              "prefixType": {},
              "prefixFormat": {},
              "pathPrefixHierarchy": {}
            },
            "aggregationConfig": {
              "aggregationType": {},
              "targetFileSize": {}
            }
          }
        },
        "Honeycode": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "CustomerProfiles": {
          "domainName": {},
          "objectTypeName": {}
        },
        "Zendesk": {
          "object": {},
          "idFieldNames": [
            "string"
          ],
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": "INSERT"
        },
        "Marketo": {
          "object": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          }
        },
        "CustomConnector": {
          "entityName": {},
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": {},
          "idFieldNames": {},
          "customProperties": {
            "property1": "string",
            "property2": "string"
          }
        },
        "SAPOData": {
          "objectPath": {},
          "successResponseHandlingConfig": {
            "bucketPrefix": {},
            "bucketName": {}
          },
          "idFieldNames": [
            "string"
          ],
          "errorHandlingConfig": {
            "failOnFirstDestinationError": {},
            "bucketPrefix": {},
            "bucketName": {}
          },
          "writeOperationType": "INSERT"
        }
      }
    }
  ],
  "tasks": [
    {
      "sourceFields": {},
      "connectorOperator": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {},
        "InforNexus": {},
        "Marketo": {},
        "S3": {},
        "Salesforce": {},
        "ServiceNow": {},
        "Singular": {},
        "Slack": {},
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {},
        "SAPOData": {},
        "CustomConnector": {},
        "Pardot": {}
      },
      "destinationField": {},
      "taskType": {},
      "taskProperties": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "clientToken": "string"
}
```

<h3 id="updateflow-parameters">Parameters</h3>

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
|» flowName|body|string|true| The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. |
|» description|body|string|false| A description of the flow. |
|» triggerConfig|body|object|true| The trigger settings that determine how and when Amazon AppFlow runs the specified flow. |
|» » triggerType|body|object|false|none|
|» » triggerProperties|body|object|false|none|
|» » » Scheduled|body|object|false|none|
|» » » » scheduleExpression|body|object|true|none|
|» » » » dataPullMode|body|object|false|none|
|» » » » scheduleStartTime|body|object|false|none|
|» » » » scheduleEndTime|body|object|false|none|
|» » » » timezone|body|object|false|none|
|» » » » scheduleOffset|body|object|false|none|
|» » » » firstExecutionFrom|body|object|false|none|
|» » » » flowErrorDeactivationThreshold|body|object|false|none|
|» sourceFlowConfig|body|object|true| Contains information about the configuration of the source connector used in the flow. |
|» » connectorType|body|object|false|none|
|» » apiVersion|body|object|false|none|
|» » connectorProfileName|body|object|false|none|
|» » sourceConnectorProperties|body|object|false|none|
|» » » Amplitude|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Datadog|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Dynatrace|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » GoogleAnalytics|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » InforNexus|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Marketo|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » S3|body|object|false|none|
|» » » » bucketName|body|object|true|none|
|» » » » bucketPrefix|body|object|false|none|
|» » » » s3InputFormatConfig|body|[S3InputFormatConfig](#schemas3inputformatconfig)|false| When you use Amazon S3 as the source, the configuration format that you provide the flow input data. |
|» » » Salesforce|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » » enableDynamicFieldUpdate|body|object|false|none|
|» » » » includeDeletedRecords|body|object|false|none|
|» » » » dataTransferApi|body|object|false|none|
|» » » ServiceNow|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Singular|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Slack|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Trendmicro|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » Veeva|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » » documentType|body|object|false|none|
|» » » » includeSourceFiles|body|object|false|none|
|» » » » includeRenditions|body|object|false|none|
|» » » » includeAllVersions|body|object|false|none|
|» » » Zendesk|body|object|false|none|
|» » » » object|body|object|true|none|
|» » » SAPOData|body|[SAPODataSourceProperties](#schemasapodatasourceproperties)|false| The properties that are applied when using SAPOData as a flow source. |
|» » » CustomConnector|body|[CustomConnectorSourceProperties](#schemacustomconnectorsourceproperties)|false|The properties that are applied when the custom connector is being used as a source.|
|» » » Pardot|body|object|false|none|
|» » » » object|body|object|true|none|
|» » incrementalPullConfig|body|object|false|none|
|» » » datetimeTypeFieldName|body|object|false|none|
|» destinationFlowConfigList|body|[[DestinationFlowConfig](#schemadestinationflowconfig)]|true| The configuration that controls how Amazon AppFlow transfers data to the destination connector. |
|» tasks|body|[[Task](#schematask)]|true| A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. |
|» metadataCatalogConfig|body|object|false|Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.|
|» » glueDataCatalog|body|object|false|none|
|» » » roleArn|body|object|true|none|
|» » » databaseName|body|object|true|none|
|» » » tablePrefix|body|object|true|none|
|» clientToken|body|string|false|<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>|

> Example responses

> 200 Response

```json
{
  "flowStatus": {}
}
```

> 480 Response

```json
null
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

<h3 id="updateflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateFlowResponse](#schemaupdateflowresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|483|483|ConflictException|[ConflictException](#schemaconflictexception)|
|484|484|ConnectorAuthenticationException|[ConnectorAuthenticationException](#schemaconnectorauthenticationexception)|
|485|485|ConnectorServerException|[ConnectorServerException](#schemaconnectorserverexception)|
|486|486|InternalServerException|[InternalServerException](#schemainternalserverexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CreateConnectorProfileResponse">CreateConnectorProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorprofileresponse"></a>
<a id="schema_CreateConnectorProfileResponse"></a>
<a id="tocScreateconnectorprofileresponse"></a>
<a id="tocscreateconnectorprofileresponse"></a>

```json
{
  "connectorProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileArn|object|false|none|none|

<h2 id="tocS_ConnectorProfileProperties">ConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofileproperties"></a>
<a id="schema_ConnectorProfileProperties"></a>
<a id="tocSconnectorprofileproperties"></a>
<a id="tocsconnectorprofileproperties"></a>

```json
{
  "Amplitude": {},
  "Datadog": {
    "instanceUrl": {}
  },
  "Dynatrace": {
    "instanceUrl": {}
  },
  "GoogleAnalytics": {},
  "Honeycode": {},
  "InforNexus": {
    "instanceUrl": {}
  },
  "Marketo": {
    "instanceUrl": {}
  },
  "Redshift": {
    "databaseUrl": {},
    "bucketName": {},
    "bucketPrefix": {},
    "roleArn": {},
    "dataApiRoleArn": {},
    "isRedshiftServerless": {},
    "clusterIdentifier": {},
    "workgroupName": {},
    "databaseName": {}
  },
  "Salesforce": {
    "instanceUrl": {},
    "isSandboxEnvironment": {},
    "usePrivateLinkForMetadataAndAuthorization": {}
  },
  "ServiceNow": {
    "instanceUrl": {}
  },
  "Singular": {},
  "Slack": {
    "instanceUrl": {}
  },
  "Snowflake": {
    "warehouse": {},
    "stage": {},
    "bucketName": {},
    "bucketPrefix": {},
    "privateLinkServiceName": {},
    "accountName": {},
    "region": {}
  },
  "Trendmicro": {},
  "Veeva": {
    "instanceUrl": {}
  },
  "Zendesk": {
    "instanceUrl": {}
  },
  "SAPOData": {
    "applicationHostUrl": {},
    "applicationServicePath": {},
    "portNumber": {},
    "clientNumber": {},
    "logonLanguage": {},
    "privateLinkServiceName": {},
    "oAuthProperties": {
      "tokenUrl": {},
      "authCodeUrl": {},
      "oAuthScopes": {}
    }
  },
  "CustomConnector": {
    "profileProperties": {
      "property1": "string",
      "property2": "string"
    },
    "oAuth2Properties": {
      "tokenUrl": {},
      "oAuth2GrantType": {},
      "tokenUrlCustomProperties": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "Pardot": {
    "instanceUrl": {},
    "isSandboxEnvironment": {},
    "businessUnitId": {}
  }
}
```

 The connector-specific profile properties required by each connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amplitude|object|false|none|none|
|Datadog|object|false|none|none|
|Dynatrace|object|false|none|none|
|GoogleAnalytics|object|false|none|none|
|Honeycode|object|false|none|none|
|InforNexus|object|false|none|none|
|Marketo|object|false|none|none|
|Redshift|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Singular|object|false|none|none|
|Slack|object|false|none|none|
|Snowflake|object|false|none|none|
|Trendmicro|object|false|none|none|
|Veeva|object|false|none|none|
|Zendesk|object|false|none|none|
|SAPOData|[SAPODataConnectorProfileProperties](#schemasapodataconnectorprofileproperties)|false|none| The connector-specific profile properties required when using SAPOData. |
|CustomConnector|object|false|none|none|
|Pardot|object|false|none|none|

<h2 id="tocS_ConnectorProfileCredentials">ConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofilecredentials"></a>
<a id="schema_ConnectorProfileCredentials"></a>
<a id="tocSconnectorprofilecredentials"></a>
<a id="tocsconnectorprofilecredentials"></a>

```json
{
  "Amplitude": {
    "apiKey": {},
    "secretKey": {}
  },
  "Datadog": {
    "apiKey": {},
    "applicationKey": {}
  },
  "Dynatrace": {
    "apiToken": {}
  },
  "GoogleAnalytics": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "Honeycode": {
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "InforNexus": {
    "accessKeyId": {},
    "userId": {},
    "secretAccessKey": {},
    "datakey": {}
  },
  "Marketo": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "Redshift": {
    "username": {},
    "password": {}
  },
  "Salesforce": {
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    },
    "clientCredentialsArn": {}
  },
  "ServiceNow": {
    "username": {},
    "password": {}
  },
  "Singular": {
    "apiKey": {}
  },
  "Slack": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "Snowflake": {
    "username": {},
    "password": {}
  },
  "Trendmicro": {
    "apiSecretKey": {}
  },
  "Veeva": {
    "username": {},
    "password": {}
  },
  "Zendesk": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "SAPOData": {
    "basicAuthCredentials": {
      "username": {},
      "password": {}
    },
    "oAuthCredentials": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    }
  },
  "CustomConnector": {
    "authenticationType": {},
    "basic": {
      "username": {},
      "password": {}
    },
    "oauth2": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "apiKey": {
      "apiKey": {},
      "apiSecretKey": {}
    },
    "custom": {
      "customAuthenticationType": {},
      "credentialsMap": {
        "property1": "password",
        "property2": "password"
      }
    }
  },
  "Pardot": {
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    },
    "clientCredentialsArn": {}
  }
}
```

 The connector-specific credentials required by a connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amplitude|object|false|none|none|
|Datadog|object|false|none|none|
|Dynatrace|object|false|none|none|
|GoogleAnalytics|object|false|none|none|
|Honeycode|object|false|none|none|
|InforNexus|object|false|none|none|
|Marketo|object|false|none|none|
|Redshift|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Singular|object|false|none|none|
|Slack|object|false|none|none|
|Snowflake|object|false|none|none|
|Trendmicro|object|false|none|none|
|Veeva|object|false|none|none|
|Zendesk|object|false|none|none|
|SAPOData|[SAPODataConnectorProfileCredentials](#schemasapodataconnectorprofilecredentials)|false|none| The connector-specific profile credentials required when using SAPOData. |
|CustomConnector|[CustomConnectorProfileCredentials](#schemacustomconnectorprofilecredentials)|false|none|The connector-specific profile credentials that are required when using the custom connector.|
|Pardot|object|false|none|none|

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

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

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_ConnectorAuthenticationException">ConnectorAuthenticationException</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorauthenticationexception"></a>
<a id="schema_ConnectorAuthenticationException"></a>
<a id="tocSconnectorauthenticationexception"></a>
<a id="tocsconnectorauthenticationexception"></a>

```json
null
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_CreateFlowResponse">CreateFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowresponse"></a>
<a id="schema_CreateFlowResponse"></a>
<a id="tocScreateflowresponse"></a>
<a id="tocscreateflowresponse"></a>

```json
{
  "flowArn": {},
  "flowStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowArn|object|false|none|none|
|flowStatus|object|false|none|none|

<h2 id="tocS_TriggerType">TriggerType</h2>
<!-- backwards compatibility -->
<a id="schematriggertype"></a>
<a id="schema_TriggerType"></a>
<a id="tocStriggertype"></a>
<a id="tocstriggertype"></a>

```json
"Scheduled"
```

<h2 id="tocS_TriggerProperties">TriggerProperties</h2>
<!-- backwards compatibility -->
<a id="schematriggerproperties"></a>
<a id="schema_TriggerProperties"></a>
<a id="tocStriggerproperties"></a>
<a id="tocstriggerproperties"></a>

```json
{
  "Scheduled": {
    "scheduleExpression": {},
    "dataPullMode": {},
    "scheduleStartTime": {},
    "scheduleEndTime": {},
    "timezone": {},
    "scheduleOffset": {},
    "firstExecutionFrom": {},
    "flowErrorDeactivationThreshold": {}
  }
}
```

 Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Scheduled|object|false|none|none|

<h2 id="tocS_ConnectorType">ConnectorType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectortype"></a>
<a id="schema_ConnectorType"></a>
<a id="tocSconnectortype"></a>
<a id="tocsconnectortype"></a>

```json
"Salesforce"
```

<h2 id="tocS_ApiVersion">ApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_ApiVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
"string"
```

<h2 id="tocS_ConnectorProfileName">ConnectorProfileName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofilename"></a>
<a id="schema_ConnectorProfileName"></a>
<a id="tocSconnectorprofilename"></a>
<a id="tocsconnectorprofilename"></a>

```json
"string"
```

<h2 id="tocS_SourceConnectorProperties">SourceConnectorProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourceconnectorproperties"></a>
<a id="schema_SourceConnectorProperties"></a>
<a id="tocSsourceconnectorproperties"></a>
<a id="tocssourceconnectorproperties"></a>

```json
{
  "Amplitude": {
    "object": {}
  },
  "Datadog": {
    "object": {}
  },
  "Dynatrace": {
    "object": {}
  },
  "GoogleAnalytics": {
    "object": {}
  },
  "InforNexus": {
    "object": {}
  },
  "Marketo": {
    "object": {}
  },
  "S3": {
    "bucketName": {},
    "bucketPrefix": {},
    "s3InputFormatConfig": {
      "s3InputFileType": {}
    }
  },
  "Salesforce": {
    "object": {},
    "enableDynamicFieldUpdate": {},
    "includeDeletedRecords": {},
    "dataTransferApi": {}
  },
  "ServiceNow": {
    "object": {}
  },
  "Singular": {
    "object": {}
  },
  "Slack": {
    "object": {}
  },
  "Trendmicro": {
    "object": {}
  },
  "Veeva": {
    "object": {},
    "documentType": {},
    "includeSourceFiles": {},
    "includeRenditions": {},
    "includeAllVersions": {}
  },
  "Zendesk": {
    "object": {}
  },
  "SAPOData": {
    "objectPath": {}
  },
  "CustomConnector": {
    "entityName": {},
    "customProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "Pardot": {
    "object": {}
  }
}
```

 Specifies the information that is required to query a particular connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amplitude|object|false|none|none|
|Datadog|object|false|none|none|
|Dynatrace|object|false|none|none|
|GoogleAnalytics|object|false|none|none|
|InforNexus|object|false|none|none|
|Marketo|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Singular|object|false|none|none|
|Slack|object|false|none|none|
|Trendmicro|object|false|none|none|
|Veeva|object|false|none|none|
|Zendesk|object|false|none|none|
|SAPOData|[SAPODataSourceProperties](#schemasapodatasourceproperties)|false|none| The properties that are applied when using SAPOData as a flow source. |
|CustomConnector|[CustomConnectorSourceProperties](#schemacustomconnectorsourceproperties)|false|none|The properties that are applied when the custom connector is being used as a source.|
|Pardot|object|false|none|none|

<h2 id="tocS_IncrementalPullConfig">IncrementalPullConfig</h2>
<!-- backwards compatibility -->
<a id="schemaincrementalpullconfig"></a>
<a id="schema_IncrementalPullConfig"></a>
<a id="tocSincrementalpullconfig"></a>
<a id="tocsincrementalpullconfig"></a>

```json
{
  "datetimeTypeFieldName": {}
}
```

 Specifies the configuration used when importing incremental records from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datetimeTypeFieldName|object|false|none|none|

<h2 id="tocS_DestinationFlowConfig">DestinationFlowConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationflowconfig"></a>
<a id="schema_DestinationFlowConfig"></a>
<a id="tocSdestinationflowconfig"></a>
<a id="tocsdestinationflowconfig"></a>

```json
{
  "connectorType": {},
  "apiVersion": {},
  "connectorProfileName": {},
  "destinationConnectorProperties": {
    "Redshift": {
      "object": {},
      "intermediateBucketName": {},
      "bucketPrefix": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      }
    },
    "S3": {
      "bucketName": {},
      "bucketPrefix": {},
      "s3OutputFormatConfig": {
        "fileType": {},
        "prefixConfig": {
          "prefixType": {},
          "prefixFormat": {},
          "pathPrefixHierarchy": {}
        },
        "aggregationConfig": {
          "aggregationType": {},
          "targetFileSize": {}
        },
        "preserveSourceDataTyping": {}
      }
    },
    "Salesforce": {
      "object": {},
      "idFieldNames": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      },
      "writeOperationType": {},
      "dataTransferApi": {}
    },
    "Snowflake": {
      "object": {},
      "intermediateBucketName": {},
      "bucketPrefix": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      }
    },
    "EventBridge": {
      "object": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      }
    },
    "LookoutMetrics": {},
    "Upsolver": {
      "bucketName": {},
      "bucketPrefix": {},
      "s3OutputFormatConfig": {
        "fileType": {},
        "prefixConfig": {
          "prefixType": {},
          "prefixFormat": {},
          "pathPrefixHierarchy": {}
        },
        "aggregationConfig": {
          "aggregationType": {},
          "targetFileSize": {}
        }
      }
    },
    "Honeycode": {
      "object": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      }
    },
    "CustomerProfiles": {
      "domainName": {},
      "objectTypeName": {}
    },
    "Zendesk": {
      "object": {},
      "idFieldNames": [
        "string"
      ],
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      },
      "writeOperationType": "INSERT"
    },
    "Marketo": {
      "object": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      }
    },
    "CustomConnector": {
      "entityName": {},
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      },
      "writeOperationType": {},
      "idFieldNames": {},
      "customProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "SAPOData": {
      "objectPath": {},
      "successResponseHandlingConfig": {
        "bucketPrefix": {},
        "bucketName": {}
      },
      "idFieldNames": [
        "string"
      ],
      "errorHandlingConfig": {
        "failOnFirstDestinationError": {},
        "bucketPrefix": {},
        "bucketName": {}
      },
      "writeOperationType": "INSERT"
    }
  }
}
```

 Contains information about the configuration of destination connectors present in the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorType|object|true|none|none|
|apiVersion|object|false|none|none|
|connectorProfileName|object|false|none|none|
|destinationConnectorProperties|object|true|none|none|

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "sourceFields": {},
  "connectorOperator": {
    "Amplitude": {},
    "Datadog": {},
    "Dynatrace": {},
    "GoogleAnalytics": {},
    "InforNexus": {},
    "Marketo": {},
    "S3": {},
    "Salesforce": {},
    "ServiceNow": {},
    "Singular": {},
    "Slack": {},
    "Trendmicro": {},
    "Veeva": {},
    "Zendesk": {},
    "SAPOData": {},
    "CustomConnector": {},
    "Pardot": {}
  },
  "destinationField": {},
  "taskType": {},
  "taskProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

 A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceFields|object|true|none|none|
|connectorOperator|object|false|none|none|
|destinationField|object|false|none|none|
|taskType|object|true|none|none|
|taskProperties|object|false|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_GlueDataCatalogConfig">GlueDataCatalogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogconfig"></a>
<a id="schema_GlueDataCatalogConfig"></a>
<a id="tocSgluedatacatalogconfig"></a>
<a id="tocsgluedatacatalogconfig"></a>

```json
{
  "roleArn": {},
  "databaseName": {},
  "tablePrefix": {}
}
```

<p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.</p> <note> <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleArn|object|true|none|none|
|databaseName|object|true|none|none|
|tablePrefix|object|true|none|none|

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConnectorServerException">ConnectorServerException</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorserverexception"></a>
<a id="schema_ConnectorServerException"></a>
<a id="tocSconnectorserverexception"></a>
<a id="tocsconnectorserverexception"></a>

```json
null
```

<h2 id="tocS_DeleteConnectorProfileResponse">DeleteConnectorProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectorprofileresponse"></a>
<a id="schema_DeleteConnectorProfileResponse"></a>
<a id="tocSdeleteconnectorprofileresponse"></a>
<a id="tocsdeleteconnectorprofileresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteFlowResponse">DeleteFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowresponse"></a>
<a id="schema_DeleteFlowResponse"></a>
<a id="tocSdeleteflowresponse"></a>
<a id="tocsdeleteflowresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeConnectorResponse">DescribeConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorresponse"></a>
<a id="schema_DescribeConnectorResponse"></a>
<a id="tocSdescribeconnectorresponse"></a>
<a id="tocsdescribeconnectorresponse"></a>

```json
{
  "connectorConfiguration": {
    "canUseAsSource": {},
    "canUseAsDestination": {},
    "supportedDestinationConnectors": {},
    "supportedSchedulingFrequencies": {},
    "isPrivateLinkEnabled": {},
    "isPrivateLinkEndpointUrlRequired": {},
    "supportedTriggerTypes": {},
    "connectorMetadata": {
      "Amplitude": {},
      "Datadog": {},
      "Dynatrace": {},
      "GoogleAnalytics": {
        "oAuthScopes": {}
      },
      "InforNexus": {},
      "Marketo": {},
      "Redshift": {},
      "S3": {},
      "Salesforce": {
        "oAuthScopes": {},
        "dataTransferApis": {}
      },
      "ServiceNow": {},
      "Singular": {},
      "Slack": {
        "oAuthScopes": {}
      },
      "Snowflake": {
        "supportedRegions": {}
      },
      "Trendmicro": {},
      "Veeva": {},
      "Zendesk": {
        "oAuthScopes": {}
      },
      "EventBridge": {},
      "Upsolver": {},
      "CustomerProfiles": {},
      "Honeycode": {
        "oAuthScopes": {}
      },
      "SAPOData": {},
      "Pardot": {}
    },
    "connectorType": {},
    "connectorLabel": {},
    "connectorDescription": {},
    "connectorOwner": {},
    "connectorName": {},
    "connectorVersion": {},
    "connectorArn": {},
    "connectorModes": {},
    "authenticationConfig": {
      "isBasicAuthSupported": {},
      "isApiKeyAuthSupported": {},
      "isOAuth2Supported": {},
      "isCustomAuthSupported": {},
      "oAuth2Defaults": {
        "oauthScopes": {},
        "tokenUrls": {},
        "authCodeUrls": {},
        "oauth2GrantTypesSupported": {},
        "oauth2CustomProperties": {}
      },
      "customAuthConfigs": {}
    },
    "connectorRuntimeSettings": {},
    "supportedApiVersions": {},
    "supportedOperators": {},
    "supportedWriteOperations": {},
    "connectorProvisioningType": {},
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "logoURL": {},
    "registeredAt": {},
    "registeredBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorConfiguration|object|false|none|none|

<h2 id="tocS_DescribeConnectorEntityResponse">DescribeConnectorEntityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorentityresponse"></a>
<a id="schema_DescribeConnectorEntityResponse"></a>
<a id="tocSdescribeconnectorentityresponse"></a>
<a id="tocsdescribeconnectorentityresponse"></a>

```json
{
  "connectorEntityFields": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorEntityFields|object|true|none|none|

<h2 id="tocS_DescribeConnectorProfilesResponse">DescribeConnectorProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorprofilesresponse"></a>
<a id="schema_DescribeConnectorProfilesResponse"></a>
<a id="tocSdescribeconnectorprofilesresponse"></a>
<a id="tocsdescribeconnectorprofilesresponse"></a>

```json
{
  "connectorProfileDetails": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileDetails|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeConnectorsResponse">DescribeConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorsresponse"></a>
<a id="schema_DescribeConnectorsResponse"></a>
<a id="tocSdescribeconnectorsresponse"></a>
<a id="tocsdescribeconnectorsresponse"></a>

```json
{
  "connectorConfigurations": {
    "property1": {
      "canUseAsSource": {},
      "canUseAsDestination": {},
      "supportedDestinationConnectors": {},
      "supportedSchedulingFrequencies": {},
      "isPrivateLinkEnabled": {},
      "isPrivateLinkEndpointUrlRequired": {},
      "supportedTriggerTypes": {},
      "connectorMetadata": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {
          "oAuthScopes": {}
        },
        "InforNexus": {},
        "Marketo": {},
        "Redshift": {},
        "S3": {},
        "Salesforce": {
          "oAuthScopes": {},
          "dataTransferApis": {}
        },
        "ServiceNow": {},
        "Singular": {},
        "Slack": {
          "oAuthScopes": {}
        },
        "Snowflake": {
          "supportedRegions": {}
        },
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {
          "oAuthScopes": {}
        },
        "EventBridge": {},
        "Upsolver": {},
        "CustomerProfiles": {},
        "Honeycode": {
          "oAuthScopes": {}
        },
        "SAPOData": {},
        "Pardot": {}
      },
      "connectorType": {},
      "connectorLabel": {},
      "connectorDescription": {},
      "connectorOwner": {},
      "connectorName": {},
      "connectorVersion": {},
      "connectorArn": {},
      "connectorModes": {},
      "authenticationConfig": {
        "isBasicAuthSupported": {},
        "isApiKeyAuthSupported": {},
        "isOAuth2Supported": {},
        "isCustomAuthSupported": {},
        "oAuth2Defaults": {
          "oauthScopes": {},
          "tokenUrls": {},
          "authCodeUrls": {},
          "oauth2GrantTypesSupported": {},
          "oauth2CustomProperties": {}
        },
        "customAuthConfigs": {}
      },
      "connectorRuntimeSettings": {},
      "supportedApiVersions": {},
      "supportedOperators": {},
      "supportedWriteOperations": {},
      "connectorProvisioningType": {},
      "connectorProvisioningConfig": {
        "lambda": {
          "lambdaArn": {}
        }
      },
      "logoURL": {},
      "registeredAt": {},
      "registeredBy": {}
    },
    "property2": {
      "canUseAsSource": {},
      "canUseAsDestination": {},
      "supportedDestinationConnectors": {},
      "supportedSchedulingFrequencies": {},
      "isPrivateLinkEnabled": {},
      "isPrivateLinkEndpointUrlRequired": {},
      "supportedTriggerTypes": {},
      "connectorMetadata": {
        "Amplitude": {},
        "Datadog": {},
        "Dynatrace": {},
        "GoogleAnalytics": {
          "oAuthScopes": {}
        },
        "InforNexus": {},
        "Marketo": {},
        "Redshift": {},
        "S3": {},
        "Salesforce": {
          "oAuthScopes": {},
          "dataTransferApis": {}
        },
        "ServiceNow": {},
        "Singular": {},
        "Slack": {
          "oAuthScopes": {}
        },
        "Snowflake": {
          "supportedRegions": {}
        },
        "Trendmicro": {},
        "Veeva": {},
        "Zendesk": {
          "oAuthScopes": {}
        },
        "EventBridge": {},
        "Upsolver": {},
        "CustomerProfiles": {},
        "Honeycode": {
          "oAuthScopes": {}
        },
        "SAPOData": {},
        "Pardot": {}
      },
      "connectorType": {},
      "connectorLabel": {},
      "connectorDescription": {},
      "connectorOwner": {},
      "connectorName": {},
      "connectorVersion": {},
      "connectorArn": {},
      "connectorModes": {},
      "authenticationConfig": {
        "isBasicAuthSupported": {},
        "isApiKeyAuthSupported": {},
        "isOAuth2Supported": {},
        "isCustomAuthSupported": {},
        "oAuth2Defaults": {
          "oauthScopes": {},
          "tokenUrls": {},
          "authCodeUrls": {},
          "oauth2GrantTypesSupported": {},
          "oauth2CustomProperties": {}
        },
        "customAuthConfigs": {}
      },
      "connectorRuntimeSettings": {},
      "supportedApiVersions": {},
      "supportedOperators": {},
      "supportedWriteOperations": {},
      "connectorProvisioningType": {},
      "connectorProvisioningConfig": {
        "lambda": {
          "lambdaArn": {}
        }
      },
      "logoURL": {},
      "registeredAt": {},
      "registeredBy": {}
    }
  },
  "connectors": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorConfigurations|object|false|none|none|
|connectors|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeFlowResponse">DescribeFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowresponse"></a>
<a id="schema_DescribeFlowResponse"></a>
<a id="tocSdescribeflowresponse"></a>
<a id="tocsdescribeflowresponse"></a>

```json
{
  "flowArn": {},
  "description": {},
  "flowName": {},
  "kmsArn": {},
  "flowStatus": {},
  "flowStatusMessage": {},
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": {},
  "lastRunExecutionDetails": {
    "mostRecentExecutionMessage": {},
    "mostRecentExecutionTime": {},
    "mostRecentExecutionStatus": {}
  },
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "tasks": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "createdBy": {},
  "lastUpdatedBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "lastRunMetadataCatalogDetails": {},
  "schemaVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowArn|object|false|none|none|
|description|object|false|none|none|
|flowName|object|false|none|none|
|kmsArn|object|false|none|none|
|flowStatus|object|false|none|none|
|flowStatusMessage|object|false|none|none|
|sourceFlowConfig|object|false|none|none|
|destinationFlowConfigList|object|false|none|none|
|lastRunExecutionDetails|object|false|none|none|
|triggerConfig|object|false|none|none|
|tasks|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdBy|object|false|none|none|
|lastUpdatedBy|object|false|none|none|
|tags|object|false|none|none|
|metadataCatalogConfig|object|false|none|none|
|lastRunMetadataCatalogDetails|object|false|none|none|
|schemaVersion|object|false|none|none|

<h2 id="tocS_DescribeFlowExecutionRecordsResponse">DescribeFlowExecutionRecordsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowexecutionrecordsresponse"></a>
<a id="schema_DescribeFlowExecutionRecordsResponse"></a>
<a id="tocSdescribeflowexecutionrecordsresponse"></a>
<a id="tocsdescribeflowexecutionrecordsresponse"></a>

```json
{
  "flowExecutions": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowExecutions|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListConnectorEntitiesResponse">ListConnectorEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorentitiesresponse"></a>
<a id="schema_ListConnectorEntitiesResponse"></a>
<a id="tocSlistconnectorentitiesresponse"></a>
<a id="tocslistconnectorentitiesresponse"></a>

```json
{
  "connectorEntityMap": {
    "property1": [
      {
        "name": {},
        "label": {},
        "hasNestedEntities": {}
      }
    ],
    "property2": [
      {
        "name": {},
        "label": {},
        "hasNestedEntities": {}
      }
    ]
  },
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorEntityMap|object|true|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListConnectorsResponse">ListConnectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsresponse"></a>
<a id="schema_ListConnectorsResponse"></a>
<a id="tocSlistconnectorsresponse"></a>
<a id="tocslistconnectorsresponse"></a>

```json
{
  "connectors": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectors|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFlowsResponse">ListFlowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistflowsresponse"></a>
<a id="schema_ListFlowsResponse"></a>
<a id="tocSlistflowsresponse"></a>
<a id="tocslistflowsresponse"></a>

```json
{
  "flows": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flows|object|false|none|none|
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

<h2 id="tocS_RegisterConnectorResponse">RegisterConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregisterconnectorresponse"></a>
<a id="schema_RegisterConnectorResponse"></a>
<a id="tocSregisterconnectorresponse"></a>
<a id="tocsregisterconnectorresponse"></a>

```json
{
  "connectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorArn|object|false|none|none|

<h2 id="tocS_LambdaConnectorProvisioningConfig">LambdaConnectorProvisioningConfig</h2>
<!-- backwards compatibility -->
<a id="schemalambdaconnectorprovisioningconfig"></a>
<a id="schema_LambdaConnectorProvisioningConfig"></a>
<a id="tocSlambdaconnectorprovisioningconfig"></a>
<a id="tocslambdaconnectorprovisioningconfig"></a>

```json
{
  "lambdaArn": {}
}
```

Contains information about the configuration of the lambda which is being registered as the connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambdaArn|object|true|none|none|

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_StartFlowResponse">StartFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartflowresponse"></a>
<a id="schema_StartFlowResponse"></a>
<a id="tocSstartflowresponse"></a>
<a id="tocsstartflowresponse"></a>

```json
{
  "flowArn": {},
  "flowStatus": {},
  "executionId": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowArn|object|false|none|none|
|flowStatus|object|false|none|none|
|executionId|object|false|none|none|

<h2 id="tocS_StopFlowResponse">StopFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemastopflowresponse"></a>
<a id="schema_StopFlowResponse"></a>
<a id="tocSstopflowresponse"></a>
<a id="tocsstopflowresponse"></a>

```json
{
  "flowArn": {},
  "flowStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowArn|object|false|none|none|
|flowStatus|object|false|none|none|

<h2 id="tocS_UnsupportedOperationException">UnsupportedOperationException</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedoperationexception"></a>
<a id="schema_UnsupportedOperationException"></a>
<a id="tocSunsupportedoperationexception"></a>
<a id="tocsunsupportedoperationexception"></a>

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

<h2 id="tocS_UnregisterConnectorResponse">UnregisterConnectorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunregisterconnectorresponse"></a>
<a id="schema_UnregisterConnectorResponse"></a>
<a id="tocSunregisterconnectorresponse"></a>
<a id="tocsunregisterconnectorresponse"></a>

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

<h2 id="tocS_UpdateConnectorProfileResponse">UpdateConnectorProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorprofileresponse"></a>
<a id="schema_UpdateConnectorProfileResponse"></a>
<a id="tocSupdateconnectorprofileresponse"></a>
<a id="tocsupdateconnectorprofileresponse"></a>

```json
{
  "connectorProfileArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileArn|object|false|none|none|

<h2 id="tocS_UpdateConnectorRegistrationResponse">UpdateConnectorRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorregistrationresponse"></a>
<a id="schema_UpdateConnectorRegistrationResponse"></a>
<a id="tocSupdateconnectorregistrationresponse"></a>
<a id="tocsupdateconnectorregistrationresponse"></a>

```json
{
  "connectorArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorArn|object|false|none|none|

<h2 id="tocS_UpdateFlowResponse">UpdateFlowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowresponse"></a>
<a id="schema_UpdateFlowResponse"></a>
<a id="tocSupdateflowresponse"></a>
<a id="tocsupdateflowresponse"></a>

```json
{
  "flowStatus": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowStatus|object|false|none|none|

<h2 id="tocS_ARN">ARN</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_ARN"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_AccessKeyId">AccessKeyId</h2>
<!-- backwards compatibility -->
<a id="schemaaccesskeyid"></a>
<a id="schema_AccessKeyId"></a>
<a id="tocSaccesskeyid"></a>
<a id="tocsaccesskeyid"></a>

```json
"password"
```

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
"password"
```

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"string"
```

<h2 id="tocS_AggregationType">AggregationType</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationtype"></a>
<a id="schema_AggregationType"></a>
<a id="tocSaggregationtype"></a>
<a id="tocsaggregationtype"></a>

```json
"None"
```

<h2 id="tocS_Long">Long</h2>
<!-- backwards compatibility -->
<a id="schemalong"></a>
<a id="schema_Long"></a>
<a id="tocSlong"></a>
<a id="tocslong"></a>

```json
0
```

<h2 id="tocS_AggregationConfig">AggregationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaaggregationconfig"></a>
<a id="schema_AggregationConfig"></a>
<a id="tocSaggregationconfig"></a>
<a id="tocsaggregationconfig"></a>

```json
{
  "aggregationType": {},
  "targetFileSize": {}
}
```

 The aggregation settings that you can use to customize the output format of your flow data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationType|object|false|none|none|
|targetFileSize|object|false|none|none|

<h2 id="tocS_AmplitudeConnectorOperator">AmplitudeConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaamplitudeconnectoroperator"></a>
<a id="schema_AmplitudeConnectorOperator"></a>
<a id="tocSamplitudeconnectoroperator"></a>
<a id="tocsamplitudeconnectoroperator"></a>

```json
"BETWEEN"
```

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
"password"
```

<h2 id="tocS_SecretKey">SecretKey</h2>
<!-- backwards compatibility -->
<a id="schemasecretkey"></a>
<a id="schema_SecretKey"></a>
<a id="tocSsecretkey"></a>
<a id="tocssecretkey"></a>

```json
"password"
```

<h2 id="tocS_AmplitudeConnectorProfileCredentials">AmplitudeConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaamplitudeconnectorprofilecredentials"></a>
<a id="schema_AmplitudeConnectorProfileCredentials"></a>
<a id="tocSamplitudeconnectorprofilecredentials"></a>
<a id="tocsamplitudeconnectorprofilecredentials"></a>

```json
{
  "apiKey": {},
  "secretKey": {}
}
```

 The connector-specific credentials required when using Amplitude.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|true|none|none|
|secretKey|object|true|none|none|

<h2 id="tocS_AmplitudeConnectorProfileProperties">AmplitudeConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaamplitudeconnectorprofileproperties"></a>
<a id="schema_AmplitudeConnectorProfileProperties"></a>
<a id="tocSamplitudeconnectorprofileproperties"></a>
<a id="tocsamplitudeconnectorprofileproperties"></a>

```json
{}
```

 The connector-specific profile properties required when using Amplitude.

<h2 id="tocS_AmplitudeMetadata">AmplitudeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaamplitudemetadata"></a>
<a id="schema_AmplitudeMetadata"></a>
<a id="tocSamplitudemetadata"></a>
<a id="tocsamplitudemetadata"></a>

```json
{}
```

 The connector metadata specific to Amplitude.

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
"string"
```

<h2 id="tocS_AmplitudeSourceProperties">AmplitudeSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaamplitudesourceproperties"></a>
<a id="schema_AmplitudeSourceProperties"></a>
<a id="tocSamplitudesourceproperties"></a>
<a id="tocsamplitudesourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Amplitude is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_ApiSecretKey">ApiSecretKey</h2>
<!-- backwards compatibility -->
<a id="schemaapisecretkey"></a>
<a id="schema_ApiSecretKey"></a>
<a id="tocSapisecretkey"></a>
<a id="tocsapisecretkey"></a>

```json
"password"
```

<h2 id="tocS_ApiKeyCredentials">ApiKeyCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycredentials"></a>
<a id="schema_ApiKeyCredentials"></a>
<a id="tocSapikeycredentials"></a>
<a id="tocsapikeycredentials"></a>

```json
{
  "apiKey": {},
  "apiSecretKey": {}
}
```

The API key credentials required for API key authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|true|none|none|
|apiSecretKey|object|false|none|none|

<h2 id="tocS_ApiToken">ApiToken</h2>
<!-- backwards compatibility -->
<a id="schemaapitoken"></a>
<a id="schema_ApiToken"></a>
<a id="tocSapitoken"></a>
<a id="tocsapitoken"></a>

```json
"string"
```

<h2 id="tocS_ApplicationHostUrl">ApplicationHostUrl</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationhosturl"></a>
<a id="schema_ApplicationHostUrl"></a>
<a id="tocSapplicationhosturl"></a>
<a id="tocsapplicationhosturl"></a>

```json
"string"
```

<h2 id="tocS_ApplicationKey">ApplicationKey</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationkey"></a>
<a id="schema_ApplicationKey"></a>
<a id="tocSapplicationkey"></a>
<a id="tocsapplicationkey"></a>

```json
"string"
```

<h2 id="tocS_ApplicationServicePath">ApplicationServicePath</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationservicepath"></a>
<a id="schema_ApplicationServicePath"></a>
<a id="tocSapplicationservicepath"></a>
<a id="tocsapplicationservicepath"></a>

```json
"string"
```

<h2 id="tocS_ApplicationType">ApplicationType</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationtype"></a>
<a id="schema_ApplicationType"></a>
<a id="tocSapplicationtype"></a>
<a id="tocsapplicationtype"></a>

```json
"string"
```

<h2 id="tocS_AuthCode">AuthCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthcode"></a>
<a id="schema_AuthCode"></a>
<a id="tocSauthcode"></a>
<a id="tocsauthcode"></a>

```json
"string"
```

<h2 id="tocS_AuthCodeUrl">AuthCodeUrl</h2>
<!-- backwards compatibility -->
<a id="schemaauthcodeurl"></a>
<a id="schema_AuthCodeUrl"></a>
<a id="tocSauthcodeurl"></a>
<a id="tocsauthcodeurl"></a>

```json
"string"
```

<h2 id="tocS_AuthCodeUrlList">AuthCodeUrlList</h2>
<!-- backwards compatibility -->
<a id="schemaauthcodeurllist"></a>
<a id="schema_AuthCodeUrlList"></a>
<a id="tocSauthcodeurllist"></a>
<a id="tocsauthcodeurllist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

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

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

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

<h2 id="tocS_ConnectorSuppliedValueList">ConnectorSuppliedValueList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsuppliedvaluelist"></a>
<a id="schema_ConnectorSuppliedValueList"></a>
<a id="tocSconnectorsuppliedvaluelist"></a>
<a id="tocsconnectorsuppliedvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_AuthParameter">AuthParameter</h2>
<!-- backwards compatibility -->
<a id="schemaauthparameter"></a>
<a id="schema_AuthParameter"></a>
<a id="tocSauthparameter"></a>
<a id="tocsauthparameter"></a>

```json
{
  "key": {},
  "isRequired": {},
  "label": {},
  "description": {},
  "isSensitiveField": {},
  "connectorSuppliedValues": {}
}
```

Information about required authentication parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|isRequired|object|false|none|none|
|label|object|false|none|none|
|description|object|false|none|none|
|isSensitiveField|object|false|none|none|
|connectorSuppliedValues|object|false|none|none|

<h2 id="tocS_AuthParameterList">AuthParameterList</h2>
<!-- backwards compatibility -->
<a id="schemaauthparameterlist"></a>
<a id="schema_AuthParameterList"></a>
<a id="tocSauthparameterlist"></a>
<a id="tocsauthparameterlist"></a>

```json
[
  {
    "key": {},
    "isRequired": {},
    "label": {},
    "description": {},
    "isSensitiveField": {},
    "connectorSuppliedValues": {}
  }
]
```

<h2 id="tocS_OAuth2Defaults">OAuth2Defaults</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2defaults"></a>
<a id="schema_OAuth2Defaults"></a>
<a id="tocSoauth2defaults"></a>
<a id="tocsoauth2defaults"></a>

```json
{
  "oauthScopes": {},
  "tokenUrls": {},
  "authCodeUrls": {},
  "oauth2GrantTypesSupported": {},
  "oauth2CustomProperties": {}
}
```

Contains the default values required for OAuth 2.0 authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauthScopes|object|false|none|none|
|tokenUrls|object|false|none|none|
|authCodeUrls|object|false|none|none|
|oauth2GrantTypesSupported|object|false|none|none|
|oauth2CustomProperties|object|false|none|none|

<h2 id="tocS_CustomAuthConfigList">CustomAuthConfigList</h2>
<!-- backwards compatibility -->
<a id="schemacustomauthconfiglist"></a>
<a id="schema_CustomAuthConfigList"></a>
<a id="tocScustomauthconfiglist"></a>
<a id="tocscustomauthconfiglist"></a>

```json
[
  {
    "customAuthenticationType": {},
    "authParameters": {}
  }
]
```

<h2 id="tocS_AuthenticationConfig">AuthenticationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationconfig"></a>
<a id="schema_AuthenticationConfig"></a>
<a id="tocSauthenticationconfig"></a>
<a id="tocsauthenticationconfig"></a>

```json
{
  "isBasicAuthSupported": {},
  "isApiKeyAuthSupported": {},
  "isOAuth2Supported": {},
  "isCustomAuthSupported": {},
  "oAuth2Defaults": {
    "oauthScopes": {},
    "tokenUrls": {},
    "authCodeUrls": {},
    "oauth2GrantTypesSupported": {},
    "oauth2CustomProperties": {}
  },
  "customAuthConfigs": {}
}
```

Contains information about the authentication config that the connector supports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isBasicAuthSupported|object|false|none|none|
|isApiKeyAuthSupported|object|false|none|none|
|isOAuth2Supported|object|false|none|none|
|isCustomAuthSupported|object|false|none|none|
|oAuth2Defaults|object|false|none|none|
|customAuthConfigs|object|false|none|none|

<h2 id="tocS_AuthenticationType">AuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationtype"></a>
<a id="schema_AuthenticationType"></a>
<a id="tocSauthenticationtype"></a>
<a id="tocsauthenticationtype"></a>

```json
"OAUTH2"
```

<h2 id="tocS_Username">Username</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_Username"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
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

<h2 id="tocS_BasicAuthCredentials">BasicAuthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthcredentials"></a>
<a id="schema_BasicAuthCredentials"></a>
<a id="tocSbasicauthcredentials"></a>
<a id="tocsbasicauthcredentials"></a>

```json
{
  "username": {},
  "password": {}
}
```

 The basic auth credentials required for basic authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|none|
|password|object|true|none|none|

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_BucketPrefix">BucketPrefix</h2>
<!-- backwards compatibility -->
<a id="schemabucketprefix"></a>
<a id="schema_BucketPrefix"></a>
<a id="tocSbucketprefix"></a>
<a id="tocsbucketprefix"></a>

```json
"string"
```

<h2 id="tocS_BusinessUnitId">BusinessUnitId</h2>
<!-- backwards compatibility -->
<a id="schemabusinessunitid"></a>
<a id="schema_BusinessUnitId"></a>
<a id="tocSbusinessunitid"></a>
<a id="tocsbusinessunitid"></a>

```json
"string"
```

<h2 id="tocS_CatalogType">CatalogType</h2>
<!-- backwards compatibility -->
<a id="schemacatalogtype"></a>
<a id="schema_CatalogType"></a>
<a id="tocScatalogtype"></a>
<a id="tocscatalogtype"></a>

```json
"GLUE"
```

<h2 id="tocS_ClientCredentialsArn">ClientCredentialsArn</h2>
<!-- backwards compatibility -->
<a id="schemaclientcredentialsarn"></a>
<a id="schema_ClientCredentialsArn"></a>
<a id="tocSclientcredentialsarn"></a>
<a id="tocsclientcredentialsarn"></a>

```json
"password"
```

<h2 id="tocS_ClientId">ClientId</h2>
<!-- backwards compatibility -->
<a id="schemaclientid"></a>
<a id="schema_ClientId"></a>
<a id="tocSclientid"></a>
<a id="tocsclientid"></a>

```json
"string"
```

<h2 id="tocS_ClientNumber">ClientNumber</h2>
<!-- backwards compatibility -->
<a id="schemaclientnumber"></a>
<a id="schema_ClientNumber"></a>
<a id="tocSclientnumber"></a>
<a id="tocsclientnumber"></a>

```json
"str"
```

<h2 id="tocS_ClientSecret">ClientSecret</h2>
<!-- backwards compatibility -->
<a id="schemaclientsecret"></a>
<a id="schema_ClientSecret"></a>
<a id="tocSclientsecret"></a>
<a id="tocsclientsecret"></a>

```json
"password"
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

<h2 id="tocS_ClusterIdentifier">ClusterIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaclusteridentifier"></a>
<a id="schema_ClusterIdentifier"></a>
<a id="tocSclusteridentifier"></a>
<a id="tocsclusteridentifier"></a>

```json
"string"
```

<h2 id="tocS_ConnectionMode">ConnectionMode</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmode"></a>
<a id="schema_ConnectionMode"></a>
<a id="tocSconnectionmode"></a>
<a id="tocsconnectionmode"></a>

```json
"Public"
```

<h2 id="tocS_ConnectorTypeList">ConnectorTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectortypelist"></a>
<a id="schema_ConnectorTypeList"></a>
<a id="tocSconnectortypelist"></a>
<a id="tocsconnectortypelist"></a>

```json
[
  "Salesforce"
]
```

<h2 id="tocS_SchedulingFrequencyTypeList">SchedulingFrequencyTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaschedulingfrequencytypelist"></a>
<a id="schema_SchedulingFrequencyTypeList"></a>
<a id="tocSschedulingfrequencytypelist"></a>
<a id="tocsschedulingfrequencytypelist"></a>

```json
[
  "BYMINUTE"
]
```

<h2 id="tocS_TriggerTypeList">TriggerTypeList</h2>
<!-- backwards compatibility -->
<a id="schematriggertypelist"></a>
<a id="schema_TriggerTypeList"></a>
<a id="tocStriggertypelist"></a>
<a id="tocstriggertypelist"></a>

```json
[
  "Scheduled"
]
```

<h2 id="tocS_ConnectorMetadata">ConnectorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaconnectormetadata"></a>
<a id="schema_ConnectorMetadata"></a>
<a id="tocSconnectormetadata"></a>
<a id="tocsconnectormetadata"></a>

```json
{
  "Amplitude": {},
  "Datadog": {},
  "Dynatrace": {},
  "GoogleAnalytics": {
    "oAuthScopes": {}
  },
  "InforNexus": {},
  "Marketo": {},
  "Redshift": {},
  "S3": {},
  "Salesforce": {
    "oAuthScopes": {},
    "dataTransferApis": {}
  },
  "ServiceNow": {},
  "Singular": {},
  "Slack": {
    "oAuthScopes": {}
  },
  "Snowflake": {
    "supportedRegions": {}
  },
  "Trendmicro": {},
  "Veeva": {},
  "Zendesk": {
    "oAuthScopes": {}
  },
  "EventBridge": {},
  "Upsolver": {},
  "CustomerProfiles": {},
  "Honeycode": {
    "oAuthScopes": {}
  },
  "SAPOData": {},
  "Pardot": {}
}
```

 A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amplitude|object|false|none|none|
|Datadog|object|false|none|none|
|Dynatrace|object|false|none|none|
|GoogleAnalytics|object|false|none|none|
|InforNexus|object|false|none|none|
|Marketo|object|false|none|none|
|Redshift|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Singular|object|false|none|none|
|Slack|object|false|none|none|
|Snowflake|object|false|none|none|
|Trendmicro|object|false|none|none|
|Veeva|object|false|none|none|
|Zendesk|object|false|none|none|
|EventBridge|object|false|none|none|
|Upsolver|object|false|none|none|
|CustomerProfiles|object|false|none|none|
|Honeycode|object|false|none|none|
|SAPOData|[SAPODataMetadata](#schemasapodatametadata)|false|none| The connector metadata specific to SAPOData. |
|Pardot|object|false|none|none|

<h2 id="tocS_ConnectorLabel">ConnectorLabel</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorlabel"></a>
<a id="schema_ConnectorLabel"></a>
<a id="tocSconnectorlabel"></a>
<a id="tocsconnectorlabel"></a>

```json
"string"
```

<h2 id="tocS_ConnectorDescription">ConnectorDescription</h2>
<!-- backwards compatibility -->
<a id="schemaconnectordescription"></a>
<a id="schema_ConnectorDescription"></a>
<a id="tocSconnectordescription"></a>
<a id="tocsconnectordescription"></a>

```json
"string"
```

<h2 id="tocS_ConnectorOwner">ConnectorOwner</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorowner"></a>
<a id="schema_ConnectorOwner"></a>
<a id="tocSconnectorowner"></a>
<a id="tocsconnectorowner"></a>

```json
"string"
```

<h2 id="tocS_ConnectorName">ConnectorName</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorname"></a>
<a id="schema_ConnectorName"></a>
<a id="tocSconnectorname"></a>
<a id="tocsconnectorname"></a>

```json
"string"
```

<h2 id="tocS_ConnectorVersion">ConnectorVersion</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorversion"></a>
<a id="schema_ConnectorVersion"></a>
<a id="tocSconnectorversion"></a>
<a id="tocsconnectorversion"></a>

```json
"string"
```

<h2 id="tocS_ConnectorModeList">ConnectorModeList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectormodelist"></a>
<a id="schema_ConnectorModeList"></a>
<a id="tocSconnectormodelist"></a>
<a id="tocsconnectormodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConnectorRuntimeSettingList">ConnectorRuntimeSettingList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorruntimesettinglist"></a>
<a id="schema_ConnectorRuntimeSettingList"></a>
<a id="tocSconnectorruntimesettinglist"></a>
<a id="tocsconnectorruntimesettinglist"></a>

```json
[
  {
    "key": {},
    "dataType": {},
    "isRequired": {},
    "label": {},
    "description": {},
    "scope": {},
    "connectorSuppliedValueOptions": {}
  }
]
```

<h2 id="tocS_SupportedApiVersionList">SupportedApiVersionList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedapiversionlist"></a>
<a id="schema_SupportedApiVersionList"></a>
<a id="tocSsupportedapiversionlist"></a>
<a id="tocssupportedapiversionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_SupportedOperatorList">SupportedOperatorList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedoperatorlist"></a>
<a id="schema_SupportedOperatorList"></a>
<a id="tocSsupportedoperatorlist"></a>
<a id="tocssupportedoperatorlist"></a>

```json
[
  "PROJECTION"
]
```

<h2 id="tocS_SupportedWriteOperationList">SupportedWriteOperationList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedwriteoperationlist"></a>
<a id="schema_SupportedWriteOperationList"></a>
<a id="tocSsupportedwriteoperationlist"></a>
<a id="tocssupportedwriteoperationlist"></a>

```json
[
  "INSERT"
]
```

<h2 id="tocS_ConnectorProvisioningType">ConnectorProvisioningType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprovisioningtype"></a>
<a id="schema_ConnectorProvisioningType"></a>
<a id="tocSconnectorprovisioningtype"></a>
<a id="tocsconnectorprovisioningtype"></a>

```json
"LAMBDA"
```

The type of provisioning that the connector supports, such as Lambda.

<h2 id="tocS_ConnectorProvisioningConfig">ConnectorProvisioningConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprovisioningconfig"></a>
<a id="schema_ConnectorProvisioningConfig"></a>
<a id="tocSconnectorprovisioningconfig"></a>
<a id="tocsconnectorprovisioningconfig"></a>

```json
{
  "lambda": {
    "lambdaArn": {}
  }
}
```

Contains information about the configuration of the connector being registered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lambda|object|false|none|none|

<h2 id="tocS_LogoURL">LogoURL</h2>
<!-- backwards compatibility -->
<a id="schemalogourl"></a>
<a id="schema_LogoURL"></a>
<a id="tocSlogourl"></a>
<a id="tocslogourl"></a>

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

<h2 id="tocS_RegisteredBy">RegisteredBy</h2>
<!-- backwards compatibility -->
<a id="schemaregisteredby"></a>
<a id="schema_RegisteredBy"></a>
<a id="tocSregisteredby"></a>
<a id="tocsregisteredby"></a>

```json
"string"
```

<h2 id="tocS_ConnectorConfiguration">ConnectorConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorconfiguration"></a>
<a id="schema_ConnectorConfiguration"></a>
<a id="tocSconnectorconfiguration"></a>
<a id="tocsconnectorconfiguration"></a>

```json
{
  "canUseAsSource": {},
  "canUseAsDestination": {},
  "supportedDestinationConnectors": {},
  "supportedSchedulingFrequencies": {},
  "isPrivateLinkEnabled": {},
  "isPrivateLinkEndpointUrlRequired": {},
  "supportedTriggerTypes": {},
  "connectorMetadata": {
    "Amplitude": {},
    "Datadog": {},
    "Dynatrace": {},
    "GoogleAnalytics": {
      "oAuthScopes": {}
    },
    "InforNexus": {},
    "Marketo": {},
    "Redshift": {},
    "S3": {},
    "Salesforce": {
      "oAuthScopes": {},
      "dataTransferApis": {}
    },
    "ServiceNow": {},
    "Singular": {},
    "Slack": {
      "oAuthScopes": {}
    },
    "Snowflake": {
      "supportedRegions": {}
    },
    "Trendmicro": {},
    "Veeva": {},
    "Zendesk": {
      "oAuthScopes": {}
    },
    "EventBridge": {},
    "Upsolver": {},
    "CustomerProfiles": {},
    "Honeycode": {
      "oAuthScopes": {}
    },
    "SAPOData": {},
    "Pardot": {}
  },
  "connectorType": {},
  "connectorLabel": {},
  "connectorDescription": {},
  "connectorOwner": {},
  "connectorName": {},
  "connectorVersion": {},
  "connectorArn": {},
  "connectorModes": {},
  "authenticationConfig": {
    "isBasicAuthSupported": {},
    "isApiKeyAuthSupported": {},
    "isOAuth2Supported": {},
    "isCustomAuthSupported": {},
    "oAuth2Defaults": {
      "oauthScopes": {},
      "tokenUrls": {},
      "authCodeUrls": {},
      "oauth2GrantTypesSupported": {},
      "oauth2CustomProperties": {}
    },
    "customAuthConfigs": {}
  },
  "connectorRuntimeSettings": {},
  "supportedApiVersions": {},
  "supportedOperators": {},
  "supportedWriteOperations": {},
  "connectorProvisioningType": {},
  "connectorProvisioningConfig": {
    "lambda": {
      "lambdaArn": {}
    }
  },
  "logoURL": {},
  "registeredAt": {},
  "registeredBy": {}
}
```

 The configuration settings related to a given connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canUseAsSource|object|false|none|none|
|canUseAsDestination|object|false|none|none|
|supportedDestinationConnectors|object|false|none|none|
|supportedSchedulingFrequencies|object|false|none|none|
|isPrivateLinkEnabled|object|false|none|none|
|isPrivateLinkEndpointUrlRequired|object|false|none|none|
|supportedTriggerTypes|object|false|none|none|
|connectorMetadata|object|false|none|none|
|connectorType|object|false|none|none|
|connectorLabel|object|false|none|none|
|connectorDescription|object|false|none|none|
|connectorOwner|object|false|none|none|
|connectorName|object|false|none|none|
|connectorVersion|object|false|none|none|
|connectorArn|object|false|none|none|
|connectorModes|object|false|none|none|
|authenticationConfig|object|false|none|none|
|connectorRuntimeSettings|object|false|none|none|
|supportedApiVersions|object|false|none|none|
|supportedOperators|object|false|none|none|
|supportedWriteOperations|object|false|none|none|
|connectorProvisioningType|object|false|none|none|
|connectorProvisioningConfig|object|false|none|none|
|logoURL|object|false|none|none|
|registeredAt|object|false|none|none|
|registeredBy|object|false|none|none|

<h2 id="tocS_ConnectorConfigurationsMap">ConnectorConfigurationsMap</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorconfigurationsmap"></a>
<a id="schema_ConnectorConfigurationsMap"></a>
<a id="tocSconnectorconfigurationsmap"></a>
<a id="tocsconnectorconfigurationsmap"></a>

```json
{
  "property1": {
    "canUseAsSource": {},
    "canUseAsDestination": {},
    "supportedDestinationConnectors": {},
    "supportedSchedulingFrequencies": {},
    "isPrivateLinkEnabled": {},
    "isPrivateLinkEndpointUrlRequired": {},
    "supportedTriggerTypes": {},
    "connectorMetadata": {
      "Amplitude": {},
      "Datadog": {},
      "Dynatrace": {},
      "GoogleAnalytics": {
        "oAuthScopes": {}
      },
      "InforNexus": {},
      "Marketo": {},
      "Redshift": {},
      "S3": {},
      "Salesforce": {
        "oAuthScopes": {},
        "dataTransferApis": {}
      },
      "ServiceNow": {},
      "Singular": {},
      "Slack": {
        "oAuthScopes": {}
      },
      "Snowflake": {
        "supportedRegions": {}
      },
      "Trendmicro": {},
      "Veeva": {},
      "Zendesk": {
        "oAuthScopes": {}
      },
      "EventBridge": {},
      "Upsolver": {},
      "CustomerProfiles": {},
      "Honeycode": {
        "oAuthScopes": {}
      },
      "SAPOData": {},
      "Pardot": {}
    },
    "connectorType": {},
    "connectorLabel": {},
    "connectorDescription": {},
    "connectorOwner": {},
    "connectorName": {},
    "connectorVersion": {},
    "connectorArn": {},
    "connectorModes": {},
    "authenticationConfig": {
      "isBasicAuthSupported": {},
      "isApiKeyAuthSupported": {},
      "isOAuth2Supported": {},
      "isCustomAuthSupported": {},
      "oAuth2Defaults": {
        "oauthScopes": {},
        "tokenUrls": {},
        "authCodeUrls": {},
        "oauth2GrantTypesSupported": {},
        "oauth2CustomProperties": {}
      },
      "customAuthConfigs": {}
    },
    "connectorRuntimeSettings": {},
    "supportedApiVersions": {},
    "supportedOperators": {},
    "supportedWriteOperations": {},
    "connectorProvisioningType": {},
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "logoURL": {},
    "registeredAt": {},
    "registeredBy": {}
  },
  "property2": {
    "canUseAsSource": {},
    "canUseAsDestination": {},
    "supportedDestinationConnectors": {},
    "supportedSchedulingFrequencies": {},
    "isPrivateLinkEnabled": {},
    "isPrivateLinkEndpointUrlRequired": {},
    "supportedTriggerTypes": {},
    "connectorMetadata": {
      "Amplitude": {},
      "Datadog": {},
      "Dynatrace": {},
      "GoogleAnalytics": {
        "oAuthScopes": {}
      },
      "InforNexus": {},
      "Marketo": {},
      "Redshift": {},
      "S3": {},
      "Salesforce": {
        "oAuthScopes": {},
        "dataTransferApis": {}
      },
      "ServiceNow": {},
      "Singular": {},
      "Slack": {
        "oAuthScopes": {}
      },
      "Snowflake": {
        "supportedRegions": {}
      },
      "Trendmicro": {},
      "Veeva": {},
      "Zendesk": {
        "oAuthScopes": {}
      },
      "EventBridge": {},
      "Upsolver": {},
      "CustomerProfiles": {},
      "Honeycode": {
        "oAuthScopes": {}
      },
      "SAPOData": {},
      "Pardot": {}
    },
    "connectorType": {},
    "connectorLabel": {},
    "connectorDescription": {},
    "connectorOwner": {},
    "connectorName": {},
    "connectorVersion": {},
    "connectorArn": {},
    "connectorModes": {},
    "authenticationConfig": {
      "isBasicAuthSupported": {},
      "isApiKeyAuthSupported": {},
      "isOAuth2Supported": {},
      "isCustomAuthSupported": {},
      "oAuth2Defaults": {
        "oauthScopes": {},
        "tokenUrls": {},
        "authCodeUrls": {},
        "oauth2GrantTypesSupported": {},
        "oauth2CustomProperties": {}
      },
      "customAuthConfigs": {}
    },
    "connectorRuntimeSettings": {},
    "supportedApiVersions": {},
    "supportedOperators": {},
    "supportedWriteOperations": {},
    "connectorProvisioningType": {},
    "connectorProvisioningConfig": {
      "lambda": {
        "lambdaArn": {}
      }
    },
    "logoURL": {},
    "registeredAt": {},
    "registeredBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConnectorConfiguration](#schemaconnectorconfiguration)|false|none| The configuration settings related to a given connector. |

<h2 id="tocS_ConnectorDetail">ConnectorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaconnectordetail"></a>
<a id="schema_ConnectorDetail"></a>
<a id="tocSconnectordetail"></a>
<a id="tocsconnectordetail"></a>

```json
{
  "connectorDescription": {},
  "connectorName": {},
  "connectorOwner": {},
  "connectorVersion": {},
  "applicationType": {},
  "connectorType": {},
  "connectorLabel": {},
  "registeredAt": {},
  "registeredBy": {},
  "connectorProvisioningType": {},
  "connectorModes": {}
}
```

Information about the registered connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorDescription|object|false|none|none|
|connectorName|object|false|none|none|
|connectorOwner|object|false|none|none|
|connectorVersion|object|false|none|none|
|applicationType|object|false|none|none|
|connectorType|object|false|none|none|
|connectorLabel|object|false|none|none|
|registeredAt|object|false|none|none|
|registeredBy|object|false|none|none|
|connectorProvisioningType|object|false|none|none|
|connectorModes|object|false|none|none|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_ConnectorEntity">ConnectorEntity</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorentity"></a>
<a id="schema_ConnectorEntity"></a>
<a id="tocSconnectorentity"></a>
<a id="tocsconnectorentity"></a>

```json
{
  "name": {},
  "label": {},
  "hasNestedEntities": {}
}
```

 The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|true|none|none|
|label|object|false|none|none|
|hasNestedEntities|object|false|none|none|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

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

<h2 id="tocS_SupportedFieldTypeDetails">SupportedFieldTypeDetails</h2>
<!-- backwards compatibility -->
<a id="schemasupportedfieldtypedetails"></a>
<a id="schema_SupportedFieldTypeDetails"></a>
<a id="tocSsupportedfieldtypedetails"></a>
<a id="tocssupportedfieldtypedetails"></a>

```json
{
  "v1": {
    "fieldType": {},
    "filterOperators": {},
    "supportedValues": {},
    "valueRegexPattern": {},
    "supportedDateFormat": {},
    "fieldValueRange": {
      "maximum": {},
      "minimum": {}
    },
    "fieldLengthRange": {
      "maximum": {},
      "minimum": {}
    }
  }
}
```

 Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1|object|true|none|none|

<h2 id="tocS_SourceFieldProperties">SourceFieldProperties</h2>
<!-- backwards compatibility -->
<a id="schemasourcefieldproperties"></a>
<a id="schema_SourceFieldProperties"></a>
<a id="tocSsourcefieldproperties"></a>
<a id="tocssourcefieldproperties"></a>

```json
{
  "isRetrievable": {},
  "isQueryable": {},
  "isTimestampFieldForIncrementalQueries": {}
}
```

 The properties that can be applied to a field when the connector is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRetrievable|object|false|none|none|
|isQueryable|object|false|none|none|
|isTimestampFieldForIncrementalQueries|object|false|none|none|

<h2 id="tocS_DestinationFieldProperties">DestinationFieldProperties</h2>
<!-- backwards compatibility -->
<a id="schemadestinationfieldproperties"></a>
<a id="schema_DestinationFieldProperties"></a>
<a id="tocSdestinationfieldproperties"></a>
<a id="tocsdestinationfieldproperties"></a>

```json
{
  "isCreatable": {},
  "isNullable": {},
  "isUpsertable": {},
  "isUpdatable": {},
  "isDefaultedOnCreate": {},
  "supportedWriteOperations": {}
}
```

 The properties that can be applied to a field when connector is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isCreatable|object|false|none|none|
|isNullable|object|false|none|none|
|isUpsertable|object|false|none|none|
|isUpdatable|object|false|none|none|
|isDefaultedOnCreate|object|false|none|none|
|supportedWriteOperations|object|false|none|none|

<h2 id="tocS_CustomProperties">CustomProperties</h2>
<!-- backwards compatibility -->
<a id="schemacustomproperties"></a>
<a id="schema_CustomProperties"></a>
<a id="tocScustomproperties"></a>
<a id="tocscustomproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CustomPropertyValue](#schemacustompropertyvalue)|false|none|none|

<h2 id="tocS_ConnectorEntityField">ConnectorEntityField</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorentityfield"></a>
<a id="schema_ConnectorEntityField"></a>
<a id="tocSconnectorentityfield"></a>
<a id="tocsconnectorentityfield"></a>

```json
{
  "identifier": {},
  "parentIdentifier": {},
  "label": {},
  "isPrimaryKey": {},
  "defaultValue": {},
  "isDeprecated": {},
  "supportedFieldTypeDetails": {
    "v1": {
      "fieldType": {},
      "filterOperators": {},
      "supportedValues": {},
      "valueRegexPattern": {},
      "supportedDateFormat": {},
      "fieldValueRange": {
        "maximum": {},
        "minimum": {}
      },
      "fieldLengthRange": {
        "maximum": {},
        "minimum": {}
      }
    }
  },
  "description": {},
  "sourceProperties": {
    "isRetrievable": {},
    "isQueryable": {},
    "isTimestampFieldForIncrementalQueries": {}
  },
  "destinationProperties": {
    "isCreatable": {},
    "isNullable": {},
    "isUpsertable": {},
    "isUpdatable": {},
    "isDefaultedOnCreate": {},
    "supportedWriteOperations": {}
  },
  "customProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

 Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|object|true|none|none|
|parentIdentifier|object|false|none|none|
|label|object|false|none|none|
|isPrimaryKey|object|false|none|none|
|defaultValue|object|false|none|none|
|isDeprecated|object|false|none|none|
|supportedFieldTypeDetails|object|false|none|none|
|description|object|false|none|none|
|sourceProperties|object|false|none|none|
|destinationProperties|object|false|none|none|
|customProperties|object|false|none|none|

<h2 id="tocS_ConnectorEntityFieldList">ConnectorEntityFieldList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorentityfieldlist"></a>
<a id="schema_ConnectorEntityFieldList"></a>
<a id="tocSconnectorentityfieldlist"></a>
<a id="tocsconnectorentityfieldlist"></a>

```json
[
  {
    "identifier": {},
    "parentIdentifier": {},
    "label": {},
    "isPrimaryKey": {},
    "defaultValue": {},
    "isDeprecated": {},
    "supportedFieldTypeDetails": {
      "v1": {
        "fieldType": {},
        "filterOperators": {},
        "supportedValues": {},
        "valueRegexPattern": {},
        "supportedDateFormat": {},
        "fieldValueRange": {
          "maximum": {},
          "minimum": {}
        },
        "fieldLengthRange": {
          "maximum": {},
          "minimum": {}
        }
      }
    },
    "description": {},
    "sourceProperties": {
      "isRetrievable": {},
      "isQueryable": {},
      "isTimestampFieldForIncrementalQueries": {}
    },
    "destinationProperties": {
      "isCreatable": {},
      "isNullable": {},
      "isUpsertable": {},
      "isUpdatable": {},
      "isDefaultedOnCreate": {},
      "supportedWriteOperations": {}
    },
    "customProperties": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h2 id="tocS_ConnectorEntityList">ConnectorEntityList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorentitylist"></a>
<a id="schema_ConnectorEntityList"></a>
<a id="tocSconnectorentitylist"></a>
<a id="tocsconnectorentitylist"></a>

```json
[
  {
    "name": {},
    "label": {},
    "hasNestedEntities": {}
  }
]
```

<h2 id="tocS_ConnectorEntityMap">ConnectorEntityMap</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorentitymap"></a>
<a id="schema_ConnectorEntityMap"></a>
<a id="tocSconnectorentitymap"></a>
<a id="tocsconnectorentitymap"></a>

```json
{
  "property1": [
    {
      "name": {},
      "label": {},
      "hasNestedEntities": {}
    }
  ],
  "property2": [
    {
      "name": {},
      "label": {},
      "hasNestedEntities": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ConnectorEntityList](#schemaconnectorentitylist)|false|none|none|

<h2 id="tocS_ConnectorList">ConnectorList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorlist"></a>
<a id="schema_ConnectorList"></a>
<a id="tocSconnectorlist"></a>
<a id="tocsconnectorlist"></a>

```json
[
  {
    "connectorDescription": {},
    "connectorName": {},
    "connectorOwner": {},
    "connectorVersion": {},
    "applicationType": {},
    "connectorType": {},
    "connectorLabel": {},
    "registeredAt": {},
    "registeredBy": {},
    "connectorProvisioningType": {},
    "connectorModes": {}
  }
]
```

<h2 id="tocS_DatadogMetadata">DatadogMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadatadogmetadata"></a>
<a id="schema_DatadogMetadata"></a>
<a id="tocSdatadogmetadata"></a>
<a id="tocsdatadogmetadata"></a>

```json
{}
```

 The connector metadata specific to Datadog.

<h2 id="tocS_DynatraceMetadata">DynatraceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadynatracemetadata"></a>
<a id="schema_DynatraceMetadata"></a>
<a id="tocSdynatracemetadata"></a>
<a id="tocsdynatracemetadata"></a>

```json
{}
```

 The connector metadata specific to Dynatrace.

<h2 id="tocS_GoogleAnalyticsMetadata">GoogleAnalyticsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsmetadata"></a>
<a id="schema_GoogleAnalyticsMetadata"></a>
<a id="tocSgoogleanalyticsmetadata"></a>
<a id="tocsgoogleanalyticsmetadata"></a>

```json
{
  "oAuthScopes": {}
}
```

 The connector metadata specific to Google Analytics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthScopes|object|false|none|none|

<h2 id="tocS_InforNexusMetadata">InforNexusMetadata</h2>
<!-- backwards compatibility -->
<a id="schemainfornexusmetadata"></a>
<a id="schema_InforNexusMetadata"></a>
<a id="tocSinfornexusmetadata"></a>
<a id="tocsinfornexusmetadata"></a>

```json
{}
```

 The connector metadata specific to Infor Nexus.

<h2 id="tocS_MarketoMetadata">MarketoMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamarketometadata"></a>
<a id="schema_MarketoMetadata"></a>
<a id="tocSmarketometadata"></a>
<a id="tocsmarketometadata"></a>

```json
{}
```

 The connector metadata specific to Marketo.

<h2 id="tocS_RedshiftMetadata">RedshiftMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftmetadata"></a>
<a id="schema_RedshiftMetadata"></a>
<a id="tocSredshiftmetadata"></a>
<a id="tocsredshiftmetadata"></a>

```json
{}
```

 The connector metadata specific to Amazon Redshift.

<h2 id="tocS_S3Metadata">S3Metadata</h2>
<!-- backwards compatibility -->
<a id="schemas3metadata"></a>
<a id="schema_S3Metadata"></a>
<a id="tocSs3metadata"></a>
<a id="tocss3metadata"></a>

```json
{}
```

 The connector metadata specific to Amazon S3.

<h2 id="tocS_SalesforceMetadata">SalesforceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcemetadata"></a>
<a id="schema_SalesforceMetadata"></a>
<a id="tocSsalesforcemetadata"></a>
<a id="tocssalesforcemetadata"></a>

```json
{
  "oAuthScopes": {},
  "dataTransferApis": {}
}
```

 The connector metadata specific to Salesforce.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthScopes|object|false|none|none|
|dataTransferApis|object|false|none|none|

<h2 id="tocS_ServiceNowMetadata">ServiceNowMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowmetadata"></a>
<a id="schema_ServiceNowMetadata"></a>
<a id="tocSservicenowmetadata"></a>
<a id="tocsservicenowmetadata"></a>

```json
{}
```

 The connector metadata specific to ServiceNow.

<h2 id="tocS_SingularMetadata">SingularMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasingularmetadata"></a>
<a id="schema_SingularMetadata"></a>
<a id="tocSsingularmetadata"></a>
<a id="tocssingularmetadata"></a>

```json
{}
```

 The connector metadata specific to Singular.

<h2 id="tocS_SlackMetadata">SlackMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaslackmetadata"></a>
<a id="schema_SlackMetadata"></a>
<a id="tocSslackmetadata"></a>
<a id="tocsslackmetadata"></a>

```json
{
  "oAuthScopes": {}
}
```

 The connector metadata specific to Slack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthScopes|object|false|none|none|

<h2 id="tocS_SnowflakeMetadata">SnowflakeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakemetadata"></a>
<a id="schema_SnowflakeMetadata"></a>
<a id="tocSsnowflakemetadata"></a>
<a id="tocssnowflakemetadata"></a>

```json
{
  "supportedRegions": {}
}
```

 The connector metadata specific to Snowflake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportedRegions|object|false|none|none|

<h2 id="tocS_TrendmicroMetadata">TrendmicroMetadata</h2>
<!-- backwards compatibility -->
<a id="schematrendmicrometadata"></a>
<a id="schema_TrendmicroMetadata"></a>
<a id="tocStrendmicrometadata"></a>
<a id="tocstrendmicrometadata"></a>

```json
{}
```

 The connector metadata specific to Trend Micro.

<h2 id="tocS_VeevaMetadata">VeevaMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaveevametadata"></a>
<a id="schema_VeevaMetadata"></a>
<a id="tocSveevametadata"></a>
<a id="tocsveevametadata"></a>

```json
{}
```

 The connector metadata specific to Veeva.

<h2 id="tocS_ZendeskMetadata">ZendeskMetadata</h2>
<!-- backwards compatibility -->
<a id="schemazendeskmetadata"></a>
<a id="schema_ZendeskMetadata"></a>
<a id="tocSzendeskmetadata"></a>
<a id="tocszendeskmetadata"></a>

```json
{
  "oAuthScopes": {}
}
```

 The connector metadata specific to Zendesk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthScopes|object|false|none|none|

<h2 id="tocS_EventBridgeMetadata">EventBridgeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgemetadata"></a>
<a id="schema_EventBridgeMetadata"></a>
<a id="tocSeventbridgemetadata"></a>
<a id="tocseventbridgemetadata"></a>

```json
{}
```

 The connector metadata specific to Amazon EventBridge.

<h2 id="tocS_UpsolverMetadata">UpsolverMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupsolvermetadata"></a>
<a id="schema_UpsolverMetadata"></a>
<a id="tocSupsolvermetadata"></a>
<a id="tocsupsolvermetadata"></a>

```json
{}
```

 The connector metadata specific to Upsolver.

<h2 id="tocS_CustomerProfilesMetadata">CustomerProfilesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacustomerprofilesmetadata"></a>
<a id="schema_CustomerProfilesMetadata"></a>
<a id="tocScustomerprofilesmetadata"></a>
<a id="tocscustomerprofilesmetadata"></a>

```json
{}
```

 The connector metadata specific to Amazon Connect Customer Profiles.

<h2 id="tocS_HoneycodeMetadata">HoneycodeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemahoneycodemetadata"></a>
<a id="schema_HoneycodeMetadata"></a>
<a id="tocShoneycodemetadata"></a>
<a id="tocshoneycodemetadata"></a>

```json
{
  "oAuthScopes": {}
}
```

 The connector metadata specific to Amazon Honeycode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oAuthScopes|object|false|none|none|

<h2 id="tocS_SAPODataMetadata">SAPODataMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasapodatametadata"></a>
<a id="schema_SAPODataMetadata"></a>
<a id="tocSsapodatametadata"></a>
<a id="tocssapodatametadata"></a>

```json
{}
```

 The connector metadata specific to SAPOData.

<h2 id="tocS_PardotMetadata">PardotMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapardotmetadata"></a>
<a id="schema_PardotMetadata"></a>
<a id="tocSpardotmetadata"></a>
<a id="tocspardotmetadata"></a>

```json
{}
```

The connector metadata specific to Salesforce Pardot.

<h2 id="tocS_ConnectorMode">ConnectorMode</h2>
<!-- backwards compatibility -->
<a id="schemaconnectormode"></a>
<a id="schema_ConnectorMode"></a>
<a id="tocSconnectormode"></a>
<a id="tocsconnectormode"></a>

```json
"string"
```

<h2 id="tocS_RedirectUri">RedirectUri</h2>
<!-- backwards compatibility -->
<a id="schemaredirecturi"></a>
<a id="schema_RedirectUri"></a>
<a id="tocSredirecturi"></a>
<a id="tocsredirecturi"></a>

```json
"string"
```

<h2 id="tocS_ConnectorOAuthRequest">ConnectorOAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectoroauthrequest"></a>
<a id="schema_ConnectorOAuthRequest"></a>
<a id="tocSconnectoroauthrequest"></a>
<a id="tocsconnectoroauthrequest"></a>

```json
{
  "authCode": {},
  "redirectUri": {}
}
```

 Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authCode|object|false|none|none|
|redirectUri|object|false|none|none|

<h2 id="tocS_DatadogConnectorOperator">DatadogConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemadatadogconnectoroperator"></a>
<a id="schema_DatadogConnectorOperator"></a>
<a id="tocSdatadogconnectoroperator"></a>
<a id="tocsdatadogconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_DynatraceConnectorOperator">DynatraceConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemadynatraceconnectoroperator"></a>
<a id="schema_DynatraceConnectorOperator"></a>
<a id="tocSdynatraceconnectoroperator"></a>
<a id="tocsdynatraceconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_GoogleAnalyticsConnectorOperator">GoogleAnalyticsConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsconnectoroperator"></a>
<a id="schema_GoogleAnalyticsConnectorOperator"></a>
<a id="tocSgoogleanalyticsconnectoroperator"></a>
<a id="tocsgoogleanalyticsconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_InforNexusConnectorOperator">InforNexusConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemainfornexusconnectoroperator"></a>
<a id="schema_InforNexusConnectorOperator"></a>
<a id="tocSinfornexusconnectoroperator"></a>
<a id="tocsinfornexusconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_MarketoConnectorOperator">MarketoConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemamarketoconnectoroperator"></a>
<a id="schema_MarketoConnectorOperator"></a>
<a id="tocSmarketoconnectoroperator"></a>
<a id="tocsmarketoconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_S3ConnectorOperator">S3ConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemas3connectoroperator"></a>
<a id="schema_S3ConnectorOperator"></a>
<a id="tocSs3connectoroperator"></a>
<a id="tocss3connectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_SalesforceConnectorOperator">SalesforceConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconnectoroperator"></a>
<a id="schema_SalesforceConnectorOperator"></a>
<a id="tocSsalesforceconnectoroperator"></a>
<a id="tocssalesforceconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ServiceNowConnectorOperator">ServiceNowConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowconnectoroperator"></a>
<a id="schema_ServiceNowConnectorOperator"></a>
<a id="tocSservicenowconnectoroperator"></a>
<a id="tocsservicenowconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_SingularConnectorOperator">SingularConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemasingularconnectoroperator"></a>
<a id="schema_SingularConnectorOperator"></a>
<a id="tocSsingularconnectoroperator"></a>
<a id="tocssingularconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_SlackConnectorOperator">SlackConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaslackconnectoroperator"></a>
<a id="schema_SlackConnectorOperator"></a>
<a id="tocSslackconnectoroperator"></a>
<a id="tocsslackconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_TrendmicroConnectorOperator">TrendmicroConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schematrendmicroconnectoroperator"></a>
<a id="schema_TrendmicroConnectorOperator"></a>
<a id="tocStrendmicroconnectoroperator"></a>
<a id="tocstrendmicroconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_VeevaConnectorOperator">VeevaConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaveevaconnectoroperator"></a>
<a id="schema_VeevaConnectorOperator"></a>
<a id="tocSveevaconnectoroperator"></a>
<a id="tocsveevaconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ZendeskConnectorOperator">ZendeskConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemazendeskconnectoroperator"></a>
<a id="schema_ZendeskConnectorOperator"></a>
<a id="tocSzendeskconnectoroperator"></a>
<a id="tocszendeskconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_SAPODataConnectorOperator">SAPODataConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemasapodataconnectoroperator"></a>
<a id="schema_SAPODataConnectorOperator"></a>
<a id="tocSsapodataconnectoroperator"></a>
<a id="tocssapodataconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_PardotConnectorOperator">PardotConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemapardotconnectoroperator"></a>
<a id="schema_PardotConnectorOperator"></a>
<a id="tocSpardotconnectoroperator"></a>
<a id="tocspardotconnectoroperator"></a>

```json
"PROJECTION"
```

<h2 id="tocS_ConnectorOperator">ConnectorOperator</h2>
<!-- backwards compatibility -->
<a id="schemaconnectoroperator"></a>
<a id="schema_ConnectorOperator"></a>
<a id="tocSconnectoroperator"></a>
<a id="tocsconnectoroperator"></a>

```json
{
  "Amplitude": {},
  "Datadog": {},
  "Dynatrace": {},
  "GoogleAnalytics": {},
  "InforNexus": {},
  "Marketo": {},
  "S3": {},
  "Salesforce": {},
  "ServiceNow": {},
  "Singular": {},
  "Slack": {},
  "Trendmicro": {},
  "Veeva": {},
  "Zendesk": {},
  "SAPOData": {},
  "CustomConnector": {},
  "Pardot": {}
}
```

 The operation to be performed on the provided source fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amplitude|object|false|none|none|
|Datadog|object|false|none|none|
|Dynatrace|object|false|none|none|
|GoogleAnalytics|object|false|none|none|
|InforNexus|object|false|none|none|
|Marketo|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|ServiceNow|object|false|none|none|
|Singular|object|false|none|none|
|Slack|object|false|none|none|
|Trendmicro|object|false|none|none|
|Veeva|object|false|none|none|
|Zendesk|object|false|none|none|
|SAPOData|object|false|none|none|
|CustomConnector|object|false|none|none|
|Pardot|object|false|none|none|

<h2 id="tocS_ConnectorProfileArn">ConnectorProfileArn</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofilearn"></a>
<a id="schema_ConnectorProfileArn"></a>
<a id="tocSconnectorprofilearn"></a>
<a id="tocsconnectorprofilearn"></a>

```json
"string"
```

<h2 id="tocS_PrivateConnectionProvisioningState">PrivateConnectionProvisioningState</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnectionprovisioningstate"></a>
<a id="schema_PrivateConnectionProvisioningState"></a>
<a id="tocSprivateconnectionprovisioningstate"></a>
<a id="tocsprivateconnectionprovisioningstate"></a>

```json
{
  "status": {},
  "failureMessage": {},
  "failureCause": {}
}
```

 Specifies the private connection provisioning state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|false|none|none|
|failureMessage|object|false|none|none|
|failureCause|object|false|none|none|

<h2 id="tocS_ConnectorProfile">ConnectorProfile</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofile"></a>
<a id="schema_ConnectorProfile"></a>
<a id="tocSconnectorprofile"></a>
<a id="tocsconnectorprofile"></a>

```json
{
  "connectorProfileArn": {},
  "connectorProfileName": {},
  "connectorType": {},
  "connectorLabel": {},
  "connectionMode": {},
  "credentialsArn": {},
  "connectorProfileProperties": {
    "Amplitude": {},
    "Datadog": {
      "instanceUrl": {}
    },
    "Dynatrace": {
      "instanceUrl": {}
    },
    "GoogleAnalytics": {},
    "Honeycode": {},
    "InforNexus": {
      "instanceUrl": {}
    },
    "Marketo": {
      "instanceUrl": {}
    },
    "Redshift": {
      "databaseUrl": {},
      "bucketName": {},
      "bucketPrefix": {},
      "roleArn": {},
      "dataApiRoleArn": {},
      "isRedshiftServerless": {},
      "clusterIdentifier": {},
      "workgroupName": {},
      "databaseName": {}
    },
    "Salesforce": {
      "instanceUrl": {},
      "isSandboxEnvironment": {},
      "usePrivateLinkForMetadataAndAuthorization": {}
    },
    "ServiceNow": {
      "instanceUrl": {}
    },
    "Singular": {},
    "Slack": {
      "instanceUrl": {}
    },
    "Snowflake": {
      "warehouse": {},
      "stage": {},
      "bucketName": {},
      "bucketPrefix": {},
      "privateLinkServiceName": {},
      "accountName": {},
      "region": {}
    },
    "Trendmicro": {},
    "Veeva": {
      "instanceUrl": {}
    },
    "Zendesk": {
      "instanceUrl": {}
    },
    "SAPOData": {
      "applicationHostUrl": {},
      "applicationServicePath": {},
      "portNumber": {},
      "clientNumber": {},
      "logonLanguage": {},
      "privateLinkServiceName": {},
      "oAuthProperties": {
        "tokenUrl": {},
        "authCodeUrl": {},
        "oAuthScopes": {}
      }
    },
    "CustomConnector": {
      "profileProperties": {
        "property1": "string",
        "property2": "string"
      },
      "oAuth2Properties": {
        "tokenUrl": {},
        "oAuth2GrantType": {},
        "tokenUrlCustomProperties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "Pardot": {
      "instanceUrl": {},
      "isSandboxEnvironment": {},
      "businessUnitId": {}
    }
  },
  "createdAt": {},
  "lastUpdatedAt": {},
  "privateConnectionProvisioningState": {
    "status": {},
    "failureMessage": {},
    "failureCause": {}
  }
}
```

 Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileArn|object|false|none|none|
|connectorProfileName|object|false|none|none|
|connectorType|object|false|none|none|
|connectorLabel|object|false|none|none|
|connectionMode|object|false|none|none|
|credentialsArn|object|false|none|none|
|connectorProfileProperties|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|privateConnectionProvisioningState|object|false|none|none|

<h2 id="tocS_ConnectorProfileConfig">ConnectorProfileConfig</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofileconfig"></a>
<a id="schema_ConnectorProfileConfig"></a>
<a id="tocSconnectorprofileconfig"></a>
<a id="tocsconnectorprofileconfig"></a>

```json
{
  "connectorProfileProperties": {
    "Amplitude": {},
    "Datadog": {
      "instanceUrl": {}
    },
    "Dynatrace": {
      "instanceUrl": {}
    },
    "GoogleAnalytics": {},
    "Honeycode": {},
    "InforNexus": {
      "instanceUrl": {}
    },
    "Marketo": {
      "instanceUrl": {}
    },
    "Redshift": {
      "databaseUrl": {},
      "bucketName": {},
      "bucketPrefix": {},
      "roleArn": {},
      "dataApiRoleArn": {},
      "isRedshiftServerless": {},
      "clusterIdentifier": {},
      "workgroupName": {},
      "databaseName": {}
    },
    "Salesforce": {
      "instanceUrl": {},
      "isSandboxEnvironment": {},
      "usePrivateLinkForMetadataAndAuthorization": {}
    },
    "ServiceNow": {
      "instanceUrl": {}
    },
    "Singular": {},
    "Slack": {
      "instanceUrl": {}
    },
    "Snowflake": {
      "warehouse": {},
      "stage": {},
      "bucketName": {},
      "bucketPrefix": {},
      "privateLinkServiceName": {},
      "accountName": {},
      "region": {}
    },
    "Trendmicro": {},
    "Veeva": {
      "instanceUrl": {}
    },
    "Zendesk": {
      "instanceUrl": {}
    },
    "SAPOData": {
      "applicationHostUrl": {},
      "applicationServicePath": {},
      "portNumber": {},
      "clientNumber": {},
      "logonLanguage": {},
      "privateLinkServiceName": {},
      "oAuthProperties": {
        "tokenUrl": {},
        "authCodeUrl": {},
        "oAuthScopes": {}
      }
    },
    "CustomConnector": {
      "profileProperties": {
        "property1": "string",
        "property2": "string"
      },
      "oAuth2Properties": {
        "tokenUrl": {},
        "oAuth2GrantType": {},
        "tokenUrlCustomProperties": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "Pardot": {
      "instanceUrl": {},
      "isSandboxEnvironment": {},
      "businessUnitId": {}
    }
  },
  "connectorProfileCredentials": {
    "Amplitude": {
      "apiKey": {},
      "secretKey": {}
    },
    "Datadog": {
      "apiKey": {},
      "applicationKey": {}
    },
    "Dynatrace": {
      "apiToken": {}
    },
    "GoogleAnalytics": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "Honeycode": {
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "InforNexus": {
      "accessKeyId": {},
      "userId": {},
      "secretAccessKey": {},
      "datakey": {}
    },
    "Marketo": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "Redshift": {
      "username": {},
      "password": {}
    },
    "Salesforce": {
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      },
      "clientCredentialsArn": {}
    },
    "ServiceNow": {
      "username": {},
      "password": {}
    },
    "Singular": {
      "apiKey": {}
    },
    "Slack": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "Snowflake": {
      "username": {},
      "password": {}
    },
    "Trendmicro": {
      "apiSecretKey": {}
    },
    "Veeva": {
      "username": {},
      "password": {}
    },
    "Zendesk": {
      "clientId": {},
      "clientSecret": {},
      "accessToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      }
    },
    "SAPOData": {
      "basicAuthCredentials": {
        "username": {},
        "password": {}
      },
      "oAuthCredentials": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      }
    },
    "CustomConnector": {
      "authenticationType": {},
      "basic": {
        "username": {},
        "password": {}
      },
      "oauth2": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "apiKey": {
        "apiKey": {},
        "apiSecretKey": {}
      },
      "custom": {
        "customAuthenticationType": {},
        "credentialsMap": {
          "property1": "password",
          "property2": "password"
        }
      }
    },
    "Pardot": {
      "accessToken": {},
      "refreshToken": {},
      "oAuthRequest": {
        "authCode": {},
        "redirectUri": {}
      },
      "clientCredentialsArn": {}
    }
  }
}
```

 Defines the connector-specific configuration and credentials for the connector profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileProperties|object|true|none|none|
|connectorProfileCredentials|object|false|none|none|

<h2 id="tocS_DatadogConnectorProfileCredentials">DatadogConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemadatadogconnectorprofilecredentials"></a>
<a id="schema_DatadogConnectorProfileCredentials"></a>
<a id="tocSdatadogconnectorprofilecredentials"></a>
<a id="tocsdatadogconnectorprofilecredentials"></a>

```json
{
  "apiKey": {},
  "applicationKey": {}
}
```

 The connector-specific credentials required by Datadog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|true|none|none|
|applicationKey|object|true|none|none|

<h2 id="tocS_DynatraceConnectorProfileCredentials">DynatraceConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemadynatraceconnectorprofilecredentials"></a>
<a id="schema_DynatraceConnectorProfileCredentials"></a>
<a id="tocSdynatraceconnectorprofilecredentials"></a>
<a id="tocsdynatraceconnectorprofilecredentials"></a>

```json
{
  "apiToken": {}
}
```

 The connector-specific profile credentials required by Dynatrace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiToken|object|true|none|none|

<h2 id="tocS_GoogleAnalyticsConnectorProfileCredentials">GoogleAnalyticsConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsconnectorprofilecredentials"></a>
<a id="schema_GoogleAnalyticsConnectorProfileCredentials"></a>
<a id="tocSgoogleanalyticsconnectorprofilecredentials"></a>
<a id="tocsgoogleanalyticsconnectorprofilecredentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The connector-specific profile credentials required by Google Analytics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|object|false|none|none|

<h2 id="tocS_HoneycodeConnectorProfileCredentials">HoneycodeConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemahoneycodeconnectorprofilecredentials"></a>
<a id="schema_HoneycodeConnectorProfileCredentials"></a>
<a id="tocShoneycodeconnectorprofilecredentials"></a>
<a id="tocshoneycodeconnectorprofilecredentials"></a>

```json
{
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The connector-specific credentials required when using Amazon Honeycode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false|none| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |

<h2 id="tocS_InforNexusConnectorProfileCredentials">InforNexusConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemainfornexusconnectorprofilecredentials"></a>
<a id="schema_InforNexusConnectorProfileCredentials"></a>
<a id="tocSinfornexusconnectorprofilecredentials"></a>
<a id="tocsinfornexusconnectorprofilecredentials"></a>

```json
{
  "accessKeyId": {},
  "userId": {},
  "secretAccessKey": {},
  "datakey": {}
}
```

 The connector-specific profile credentials required by Infor Nexus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|object|true|none|none|
|userId|object|true|none|none|
|secretAccessKey|object|true|none|none|
|datakey|object|true|none|none|

<h2 id="tocS_MarketoConnectorProfileCredentials">MarketoConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemamarketoconnectorprofilecredentials"></a>
<a id="schema_MarketoConnectorProfileCredentials"></a>
<a id="tocSmarketoconnectorprofilecredentials"></a>
<a id="tocsmarketoconnectorprofilecredentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The connector-specific profile credentials required by Marketo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|accessToken|object|false|none|none|
|oAuthRequest|object|false|none|none|

<h2 id="tocS_RedshiftConnectorProfileCredentials">RedshiftConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftconnectorprofilecredentials"></a>
<a id="schema_RedshiftConnectorProfileCredentials"></a>
<a id="tocSredshiftconnectorprofilecredentials"></a>
<a id="tocsredshiftconnectorprofilecredentials"></a>

```json
{
  "username": {},
  "password": {}
}
```

 The connector-specific profile credentials required when using Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|false|none|none|
|password|object|false|none|none|

<h2 id="tocS_SalesforceConnectorProfileCredentials">SalesforceConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconnectorprofilecredentials"></a>
<a id="schema_SalesforceConnectorProfileCredentials"></a>
<a id="tocSsalesforceconnectorprofilecredentials"></a>
<a id="tocssalesforceconnectorprofilecredentials"></a>

```json
{
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  },
  "clientCredentialsArn": {}
}
```

 The connector-specific profile credentials required when using Salesforce.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|object|false|none|none|
|clientCredentialsArn|object|false|none|none|

<h2 id="tocS_ServiceNowConnectorProfileCredentials">ServiceNowConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowconnectorprofilecredentials"></a>
<a id="schema_ServiceNowConnectorProfileCredentials"></a>
<a id="tocSservicenowconnectorprofilecredentials"></a>
<a id="tocsservicenowconnectorprofilecredentials"></a>

```json
{
  "username": {},
  "password": {}
}
```

 The connector-specific profile credentials required when using ServiceNow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|none|
|password|object|true|none|none|

<h2 id="tocS_SingularConnectorProfileCredentials">SingularConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasingularconnectorprofilecredentials"></a>
<a id="schema_SingularConnectorProfileCredentials"></a>
<a id="tocSsingularconnectorprofilecredentials"></a>
<a id="tocssingularconnectorprofilecredentials"></a>

```json
{
  "apiKey": {}
}
```

 The connector-specific profile credentials required when using Singular.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|object|true|none|none|

<h2 id="tocS_SlackConnectorProfileCredentials">SlackConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaslackconnectorprofilecredentials"></a>
<a id="schema_SlackConnectorProfileCredentials"></a>
<a id="tocSslackconnectorprofilecredentials"></a>
<a id="tocsslackconnectorprofilecredentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The connector-specific profile credentials required when using Slack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|accessToken|object|false|none|none|
|oAuthRequest|object|false|none|none|

<h2 id="tocS_SnowflakeConnectorProfileCredentials">SnowflakeConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakeconnectorprofilecredentials"></a>
<a id="schema_SnowflakeConnectorProfileCredentials"></a>
<a id="tocSsnowflakeconnectorprofilecredentials"></a>
<a id="tocssnowflakeconnectorprofilecredentials"></a>

```json
{
  "username": {},
  "password": {}
}
```

 The connector-specific profile credentials required when using Snowflake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|none|
|password|object|true|none|none|

<h2 id="tocS_TrendmicroConnectorProfileCredentials">TrendmicroConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schematrendmicroconnectorprofilecredentials"></a>
<a id="schema_TrendmicroConnectorProfileCredentials"></a>
<a id="tocStrendmicroconnectorprofilecredentials"></a>
<a id="tocstrendmicroconnectorprofilecredentials"></a>

```json
{
  "apiSecretKey": {}
}
```

 The connector-specific profile credentials required when using Trend Micro.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSecretKey|object|true|none|none|

<h2 id="tocS_VeevaConnectorProfileCredentials">VeevaConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaveevaconnectorprofilecredentials"></a>
<a id="schema_VeevaConnectorProfileCredentials"></a>
<a id="tocSveevaconnectorprofilecredentials"></a>
<a id="tocsveevaconnectorprofilecredentials"></a>

```json
{
  "username": {},
  "password": {}
}
```

 The connector-specific profile credentials required when using Veeva.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|object|true|none|none|
|password|object|true|none|none|

<h2 id="tocS_ZendeskConnectorProfileCredentials">ZendeskConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemazendeskconnectorprofilecredentials"></a>
<a id="schema_ZendeskConnectorProfileCredentials"></a>
<a id="tocSzendeskconnectorprofilecredentials"></a>
<a id="tocszendeskconnectorprofilecredentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The connector-specific profile credentials required when using Zendesk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|accessToken|object|false|none|none|
|oAuthRequest|object|false|none|none|

<h2 id="tocS_SAPODataConnectorProfileCredentials">SAPODataConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasapodataconnectorprofilecredentials"></a>
<a id="schema_SAPODataConnectorProfileCredentials"></a>
<a id="tocSsapodataconnectorprofilecredentials"></a>
<a id="tocssapodataconnectorprofilecredentials"></a>

```json
{
  "basicAuthCredentials": {
    "username": {},
    "password": {}
  },
  "oAuthCredentials": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  }
}
```

 The connector-specific profile credentials required when using SAPOData.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicAuthCredentials|object|false|none|none|
|oAuthCredentials|object|false|none|none|

<h2 id="tocS_CustomConnectorProfileCredentials">CustomConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemacustomconnectorprofilecredentials"></a>
<a id="schema_CustomConnectorProfileCredentials"></a>
<a id="tocScustomconnectorprofilecredentials"></a>
<a id="tocscustomconnectorprofilecredentials"></a>

```json
{
  "authenticationType": {},
  "basic": {
    "username": {},
    "password": {}
  },
  "oauth2": {
    "clientId": {},
    "clientSecret": {},
    "accessToken": {},
    "refreshToken": {},
    "oAuthRequest": {
      "authCode": {},
      "redirectUri": {}
    }
  },
  "apiKey": {
    "apiKey": {},
    "apiSecretKey": {}
  },
  "custom": {
    "customAuthenticationType": {},
    "credentialsMap": {
      "property1": "password",
      "property2": "password"
    }
  }
}
```

The connector-specific profile credentials that are required when using the custom connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationType|object|true|none|none|
|basic|object|false|none|none|
|oauth2|object|false|none|none|
|apiKey|object|false|none|none|
|custom|object|false|none|none|

<h2 id="tocS_PardotConnectorProfileCredentials">PardotConnectorProfileCredentials</h2>
<!-- backwards compatibility -->
<a id="schemapardotconnectorprofilecredentials"></a>
<a id="schema_PardotConnectorProfileCredentials"></a>
<a id="tocSpardotconnectorprofilecredentials"></a>
<a id="tocspardotconnectorprofilecredentials"></a>

```json
{
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  },
  "clientCredentialsArn": {}
}
```

The connector-specific profile credentials required when using Salesforce Pardot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false|none| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |
|clientCredentialsArn|object|false|none|none|

<h2 id="tocS_ConnectorProfileDetailList">ConnectorProfileDetailList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofiledetaillist"></a>
<a id="schema_ConnectorProfileDetailList"></a>
<a id="tocSconnectorprofiledetaillist"></a>
<a id="tocsconnectorprofiledetaillist"></a>

```json
[
  {
    "connectorProfileArn": {},
    "connectorProfileName": {},
    "connectorType": {},
    "connectorLabel": {},
    "connectionMode": {},
    "credentialsArn": {},
    "connectorProfileProperties": {
      "Amplitude": {},
      "Datadog": {
        "instanceUrl": {}
      },
      "Dynatrace": {
        "instanceUrl": {}
      },
      "GoogleAnalytics": {},
      "Honeycode": {},
      "InforNexus": {
        "instanceUrl": {}
      },
      "Marketo": {
        "instanceUrl": {}
      },
      "Redshift": {
        "databaseUrl": {},
        "bucketName": {},
        "bucketPrefix": {},
        "roleArn": {},
        "dataApiRoleArn": {},
        "isRedshiftServerless": {},
        "clusterIdentifier": {},
        "workgroupName": {},
        "databaseName": {}
      },
      "Salesforce": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "usePrivateLinkForMetadataAndAuthorization": {}
      },
      "ServiceNow": {
        "instanceUrl": {}
      },
      "Singular": {},
      "Slack": {
        "instanceUrl": {}
      },
      "Snowflake": {
        "warehouse": {},
        "stage": {},
        "bucketName": {},
        "bucketPrefix": {},
        "privateLinkServiceName": {},
        "accountName": {},
        "region": {}
      },
      "Trendmicro": {},
      "Veeva": {
        "instanceUrl": {}
      },
      "Zendesk": {
        "instanceUrl": {}
      },
      "SAPOData": {
        "applicationHostUrl": {},
        "applicationServicePath": {},
        "portNumber": {},
        "clientNumber": {},
        "logonLanguage": {},
        "privateLinkServiceName": {},
        "oAuthProperties": {
          "tokenUrl": {},
          "authCodeUrl": {},
          "oAuthScopes": {}
        }
      },
      "CustomConnector": {
        "profileProperties": {
          "property1": "string",
          "property2": "string"
        },
        "oAuth2Properties": {
          "tokenUrl": {},
          "oAuth2GrantType": {},
          "tokenUrlCustomProperties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "Pardot": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "businessUnitId": {}
      }
    },
    "createdAt": {},
    "lastUpdatedAt": {},
    "privateConnectionProvisioningState": {
      "status": {},
      "failureMessage": {},
      "failureCause": {}
    }
  }
]
```

<h2 id="tocS_ConnectorProfileNameList">ConnectorProfileNameList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorprofilenamelist"></a>
<a id="schema_ConnectorProfileNameList"></a>
<a id="tocSconnectorprofilenamelist"></a>
<a id="tocsconnectorprofilenamelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_DatadogConnectorProfileProperties">DatadogConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemadatadogconnectorprofileproperties"></a>
<a id="schema_DatadogConnectorProfileProperties"></a>
<a id="tocSdatadogconnectorprofileproperties"></a>
<a id="tocsdatadogconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required by Datadog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_DynatraceConnectorProfileProperties">DynatraceConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemadynatraceconnectorprofileproperties"></a>
<a id="schema_DynatraceConnectorProfileProperties"></a>
<a id="tocSdynatraceconnectorprofileproperties"></a>
<a id="tocsdynatraceconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required by Dynatrace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_GoogleAnalyticsConnectorProfileProperties">GoogleAnalyticsConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticsconnectorprofileproperties"></a>
<a id="schema_GoogleAnalyticsConnectorProfileProperties"></a>
<a id="tocSgoogleanalyticsconnectorprofileproperties"></a>
<a id="tocsgoogleanalyticsconnectorprofileproperties"></a>

```json
{}
```

 The connector-specific profile properties required by Google Analytics.

<h2 id="tocS_HoneycodeConnectorProfileProperties">HoneycodeConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemahoneycodeconnectorprofileproperties"></a>
<a id="schema_HoneycodeConnectorProfileProperties"></a>
<a id="tocShoneycodeconnectorprofileproperties"></a>
<a id="tocshoneycodeconnectorprofileproperties"></a>

```json
{}
```

 The connector-specific properties required when using Amazon Honeycode.

<h2 id="tocS_InforNexusConnectorProfileProperties">InforNexusConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemainfornexusconnectorprofileproperties"></a>
<a id="schema_InforNexusConnectorProfileProperties"></a>
<a id="tocSinfornexusconnectorprofileproperties"></a>
<a id="tocsinfornexusconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required by Infor Nexus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_MarketoConnectorProfileProperties">MarketoConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemamarketoconnectorprofileproperties"></a>
<a id="schema_MarketoConnectorProfileProperties"></a>
<a id="tocSmarketoconnectorprofileproperties"></a>
<a id="tocsmarketoconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required when using Marketo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_RedshiftConnectorProfileProperties">RedshiftConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftconnectorprofileproperties"></a>
<a id="schema_RedshiftConnectorProfileProperties"></a>
<a id="tocSredshiftconnectorprofileproperties"></a>
<a id="tocsredshiftconnectorprofileproperties"></a>

```json
{
  "databaseUrl": {},
  "bucketName": {},
  "bucketPrefix": {},
  "roleArn": {},
  "dataApiRoleArn": {},
  "isRedshiftServerless": {},
  "clusterIdentifier": {},
  "workgroupName": {},
  "databaseName": {}
}
```

 The connector-specific profile properties when using Amazon Redshift.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseUrl|object|false|none|none|
|bucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|roleArn|object|true|none|none|
|dataApiRoleArn|object|false|none|none|
|isRedshiftServerless|object|false|none|none|
|clusterIdentifier|object|false|none|none|
|workgroupName|object|false|none|none|
|databaseName|object|false|none|none|

<h2 id="tocS_SalesforceConnectorProfileProperties">SalesforceConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemasalesforceconnectorprofileproperties"></a>
<a id="schema_SalesforceConnectorProfileProperties"></a>
<a id="tocSsalesforceconnectorprofileproperties"></a>
<a id="tocssalesforceconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {},
  "isSandboxEnvironment": {},
  "usePrivateLinkForMetadataAndAuthorization": {}
}
```

 The connector-specific profile properties required when using Salesforce.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|false|none|none|
|isSandboxEnvironment|object|false|none|none|
|usePrivateLinkForMetadataAndAuthorization|object|false|none|none|

<h2 id="tocS_ServiceNowConnectorProfileProperties">ServiceNowConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowconnectorprofileproperties"></a>
<a id="schema_ServiceNowConnectorProfileProperties"></a>
<a id="tocSservicenowconnectorprofileproperties"></a>
<a id="tocsservicenowconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required when using ServiceNow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_SingularConnectorProfileProperties">SingularConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemasingularconnectorprofileproperties"></a>
<a id="schema_SingularConnectorProfileProperties"></a>
<a id="tocSsingularconnectorprofileproperties"></a>
<a id="tocssingularconnectorprofileproperties"></a>

```json
{}
```

 The connector-specific profile properties required when using Singular.

<h2 id="tocS_SlackConnectorProfileProperties">SlackConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaslackconnectorprofileproperties"></a>
<a id="schema_SlackConnectorProfileProperties"></a>
<a id="tocSslackconnectorprofileproperties"></a>
<a id="tocsslackconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required when using Slack.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_SnowflakeConnectorProfileProperties">SnowflakeConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakeconnectorprofileproperties"></a>
<a id="schema_SnowflakeConnectorProfileProperties"></a>
<a id="tocSsnowflakeconnectorprofileproperties"></a>
<a id="tocssnowflakeconnectorprofileproperties"></a>

```json
{
  "warehouse": {},
  "stage": {},
  "bucketName": {},
  "bucketPrefix": {},
  "privateLinkServiceName": {},
  "accountName": {},
  "region": {}
}
```

 The connector-specific profile properties required when using Snowflake.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warehouse|object|true|none|none|
|stage|object|true|none|none|
|bucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|privateLinkServiceName|object|false|none|none|
|accountName|object|false|none|none|
|region|object|false|none|none|

<h2 id="tocS_TrendmicroConnectorProfileProperties">TrendmicroConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schematrendmicroconnectorprofileproperties"></a>
<a id="schema_TrendmicroConnectorProfileProperties"></a>
<a id="tocStrendmicroconnectorprofileproperties"></a>
<a id="tocstrendmicroconnectorprofileproperties"></a>

```json
{}
```

 The connector-specific profile properties required when using Trend Micro.

<h2 id="tocS_VeevaConnectorProfileProperties">VeevaConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemaveevaconnectorprofileproperties"></a>
<a id="schema_VeevaConnectorProfileProperties"></a>
<a id="tocSveevaconnectorprofileproperties"></a>
<a id="tocsveevaconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required when using Veeva.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_ZendeskConnectorProfileProperties">ZendeskConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemazendeskconnectorprofileproperties"></a>
<a id="schema_ZendeskConnectorProfileProperties"></a>
<a id="tocSzendeskconnectorprofileproperties"></a>
<a id="tocszendeskconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {}
}
```

 The connector-specific profile properties required when using Zendesk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|true|none|none|

<h2 id="tocS_SAPODataConnectorProfileProperties">SAPODataConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemasapodataconnectorprofileproperties"></a>
<a id="schema_SAPODataConnectorProfileProperties"></a>
<a id="tocSsapodataconnectorprofileproperties"></a>
<a id="tocssapodataconnectorprofileproperties"></a>

```json
{
  "applicationHostUrl": {},
  "applicationServicePath": {},
  "portNumber": {},
  "clientNumber": {},
  "logonLanguage": {},
  "privateLinkServiceName": {},
  "oAuthProperties": {
    "tokenUrl": {},
    "authCodeUrl": {},
    "oAuthScopes": {}
  }
}
```

 The connector-specific profile properties required when using SAPOData.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationHostUrl|object|true|none|none|
|applicationServicePath|object|true|none|none|
|portNumber|object|true|none|none|
|clientNumber|object|true|none|none|
|logonLanguage|object|false|none|none|
|privateLinkServiceName|object|false|none|none|
|oAuthProperties|object|false|none|none|

<h2 id="tocS_CustomConnectorProfileProperties">CustomConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemacustomconnectorprofileproperties"></a>
<a id="schema_CustomConnectorProfileProperties"></a>
<a id="tocScustomconnectorprofileproperties"></a>
<a id="tocscustomconnectorprofileproperties"></a>

```json
{
  "profileProperties": {
    "property1": "string",
    "property2": "string"
  },
  "oAuth2Properties": {
    "tokenUrl": {},
    "oAuth2GrantType": {},
    "tokenUrlCustomProperties": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

The profile properties required by the custom connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profileProperties|object|false|none|none|
|oAuth2Properties|[OAuth2Properties](#schemaoauth2properties)|false|none|The OAuth 2.0 properties required for OAuth 2.0 authentication.|

<h2 id="tocS_PardotConnectorProfileProperties">PardotConnectorProfileProperties</h2>
<!-- backwards compatibility -->
<a id="schemapardotconnectorprofileproperties"></a>
<a id="schema_PardotConnectorProfileProperties"></a>
<a id="tocSpardotconnectorprofileproperties"></a>
<a id="tocspardotconnectorprofileproperties"></a>

```json
{
  "instanceUrl": {},
  "isSandboxEnvironment": {},
  "businessUnitId": {}
}
```

The connector-specific profile properties required when using Salesforce Pardot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUrl|object|false|none|none|
|isSandboxEnvironment|object|false|none|none|
|businessUnitId|object|false|none|none|

<h2 id="tocS_ConnectorRuntimeSettingDataType">ConnectorRuntimeSettingDataType</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorruntimesettingdatatype"></a>
<a id="schema_ConnectorRuntimeSettingDataType"></a>
<a id="tocSconnectorruntimesettingdatatype"></a>
<a id="tocsconnectorruntimesettingdatatype"></a>

```json
"string"
```

<h2 id="tocS_ConnectorRuntimeSettingScope">ConnectorRuntimeSettingScope</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorruntimesettingscope"></a>
<a id="schema_ConnectorRuntimeSettingScope"></a>
<a id="tocSconnectorruntimesettingscope"></a>
<a id="tocsconnectorruntimesettingscope"></a>

```json
"string"
```

<h2 id="tocS_ConnectorSuppliedValueOptionList">ConnectorSuppliedValueOptionList</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsuppliedvalueoptionlist"></a>
<a id="schema_ConnectorSuppliedValueOptionList"></a>
<a id="tocSconnectorsuppliedvalueoptionlist"></a>
<a id="tocsconnectorsuppliedvalueoptionlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ConnectorRuntimeSetting">ConnectorRuntimeSetting</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorruntimesetting"></a>
<a id="schema_ConnectorRuntimeSetting"></a>
<a id="tocSconnectorruntimesetting"></a>
<a id="tocsconnectorruntimesetting"></a>

```json
{
  "key": {},
  "dataType": {},
  "isRequired": {},
  "label": {},
  "description": {},
  "scope": {},
  "connectorSuppliedValueOptions": {}
}
```

Contains information about the connector runtime settings that are required for flow execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|dataType|object|false|none|none|
|isRequired|object|false|none|none|
|label|object|false|none|none|
|description|object|false|none|none|
|scope|object|false|none|none|
|connectorSuppliedValueOptions|object|false|none|none|

<h2 id="tocS_ConnectorSuppliedValue">ConnectorSuppliedValue</h2>
<!-- backwards compatibility -->
<a id="schemaconnectorsuppliedvalue"></a>
<a id="schema_ConnectorSuppliedValue"></a>
<a id="tocSconnectorsuppliedvalue"></a>
<a id="tocsconnectorsuppliedvalue"></a>

```json
"string"
```

<h2 id="tocS_KMSArn">KMSArn</h2>
<!-- backwards compatibility -->
<a id="schemakmsarn"></a>
<a id="schema_KMSArn"></a>
<a id="tocSkmsarn"></a>
<a id="tocskmsarn"></a>

```json
"stringstringstringst"
```

<h2 id="tocS_CreateConnectorProfileRequest">CreateConnectorProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconnectorprofilerequest"></a>
<a id="schema_CreateConnectorProfileRequest"></a>
<a id="tocScreateconnectorprofilerequest"></a>
<a id="tocscreateconnectorprofilerequest"></a>

```json
{
  "connectorProfileName": {},
  "kmsArn": {},
  "connectorType": {},
  "connectorLabel": {},
  "connectionMode": {},
  "connectorProfileConfig": {
    "connectorProfileProperties": {
      "Amplitude": {},
      "Datadog": {
        "instanceUrl": {}
      },
      "Dynatrace": {
        "instanceUrl": {}
      },
      "GoogleAnalytics": {},
      "Honeycode": {},
      "InforNexus": {
        "instanceUrl": {}
      },
      "Marketo": {
        "instanceUrl": {}
      },
      "Redshift": {
        "databaseUrl": {},
        "bucketName": {},
        "bucketPrefix": {},
        "roleArn": {},
        "dataApiRoleArn": {},
        "isRedshiftServerless": {},
        "clusterIdentifier": {},
        "workgroupName": {},
        "databaseName": {}
      },
      "Salesforce": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "usePrivateLinkForMetadataAndAuthorization": {}
      },
      "ServiceNow": {
        "instanceUrl": {}
      },
      "Singular": {},
      "Slack": {
        "instanceUrl": {}
      },
      "Snowflake": {
        "warehouse": {},
        "stage": {},
        "bucketName": {},
        "bucketPrefix": {},
        "privateLinkServiceName": {},
        "accountName": {},
        "region": {}
      },
      "Trendmicro": {},
      "Veeva": {
        "instanceUrl": {}
      },
      "Zendesk": {
        "instanceUrl": {}
      },
      "SAPOData": {
        "applicationHostUrl": {},
        "applicationServicePath": {},
        "portNumber": {},
        "clientNumber": {},
        "logonLanguage": {},
        "privateLinkServiceName": {},
        "oAuthProperties": {
          "tokenUrl": {},
          "authCodeUrl": {},
          "oAuthScopes": {}
        }
      },
      "CustomConnector": {
        "profileProperties": {
          "property1": "string",
          "property2": "string"
        },
        "oAuth2Properties": {
          "tokenUrl": {},
          "oAuth2GrantType": {},
          "tokenUrlCustomProperties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "Pardot": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "businessUnitId": {}
      }
    },
    "connectorProfileCredentials": {
      "Amplitude": {
        "apiKey": {},
        "secretKey": {}
      },
      "Datadog": {
        "apiKey": {},
        "applicationKey": {}
      },
      "Dynatrace": {
        "apiToken": {}
      },
      "GoogleAnalytics": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Honeycode": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "InforNexus": {
        "accessKeyId": {},
        "userId": {},
        "secretAccessKey": {},
        "datakey": {}
      },
      "Marketo": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Redshift": {
        "username": {},
        "password": {}
      },
      "Salesforce": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      },
      "ServiceNow": {
        "username": {},
        "password": {}
      },
      "Singular": {
        "apiKey": {}
      },
      "Slack": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Snowflake": {
        "username": {},
        "password": {}
      },
      "Trendmicro": {
        "apiSecretKey": {}
      },
      "Veeva": {
        "username": {},
        "password": {}
      },
      "Zendesk": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "SAPOData": {
        "basicAuthCredentials": {
          "username": {},
          "password": {}
        },
        "oAuthCredentials": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        }
      },
      "CustomConnector": {
        "authenticationType": {},
        "basic": {
          "username": {},
          "password": {}
        },
        "oauth2": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "apiKey": {
          "apiKey": {},
          "apiSecretKey": {}
        },
        "custom": {
          "customAuthenticationType": {},
          "credentialsMap": {
            "property1": "password",
            "property2": "password"
          }
        }
      },
      "Pardot": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      }
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileName|object|true|none|none|
|kmsArn|object|false|none|none|
|connectorType|object|true|none|none|
|connectorLabel|object|false|none|none|
|connectionMode|object|true|none|none|
|connectorProfileConfig|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_FlowName">FlowName</h2>
<!-- backwards compatibility -->
<a id="schemaflowname"></a>
<a id="schema_FlowName"></a>
<a id="tocSflowname"></a>
<a id="tocsflowname"></a>

```json
"string"
```

<h2 id="tocS_FlowDescription">FlowDescription</h2>
<!-- backwards compatibility -->
<a id="schemaflowdescription"></a>
<a id="schema_FlowDescription"></a>
<a id="tocSflowdescription"></a>
<a id="tocsflowdescription"></a>

```json
"string"
```

<h2 id="tocS_TriggerConfig">TriggerConfig</h2>
<!-- backwards compatibility -->
<a id="schematriggerconfig"></a>
<a id="schema_TriggerConfig"></a>
<a id="tocStriggerconfig"></a>
<a id="tocstriggerconfig"></a>

```json
{
  "triggerType": {},
  "triggerProperties": {
    "Scheduled": {
      "scheduleExpression": {},
      "dataPullMode": {},
      "scheduleStartTime": {},
      "scheduleEndTime": {},
      "timezone": {},
      "scheduleOffset": {},
      "firstExecutionFrom": {},
      "flowErrorDeactivationThreshold": {}
    }
  }
}
```

 The trigger settings that determine how and when Amazon AppFlow runs the specified flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerType|object|true|none|none|
|triggerProperties|object|false|none|none|

<h2 id="tocS_SourceFlowConfig">SourceFlowConfig</h2>
<!-- backwards compatibility -->
<a id="schemasourceflowconfig"></a>
<a id="schema_SourceFlowConfig"></a>
<a id="tocSsourceflowconfig"></a>
<a id="tocssourceflowconfig"></a>

```json
{
  "connectorType": {},
  "apiVersion": {},
  "connectorProfileName": {},
  "sourceConnectorProperties": {
    "Amplitude": {
      "object": {}
    },
    "Datadog": {
      "object": {}
    },
    "Dynatrace": {
      "object": {}
    },
    "GoogleAnalytics": {
      "object": {}
    },
    "InforNexus": {
      "object": {}
    },
    "Marketo": {
      "object": {}
    },
    "S3": {
      "bucketName": {},
      "bucketPrefix": {},
      "s3InputFormatConfig": {
        "s3InputFileType": {}
      }
    },
    "Salesforce": {
      "object": {},
      "enableDynamicFieldUpdate": {},
      "includeDeletedRecords": {},
      "dataTransferApi": {}
    },
    "ServiceNow": {
      "object": {}
    },
    "Singular": {
      "object": {}
    },
    "Slack": {
      "object": {}
    },
    "Trendmicro": {
      "object": {}
    },
    "Veeva": {
      "object": {},
      "documentType": {},
      "includeSourceFiles": {},
      "includeRenditions": {},
      "includeAllVersions": {}
    },
    "Zendesk": {
      "object": {}
    },
    "SAPOData": {
      "objectPath": {}
    },
    "CustomConnector": {
      "entityName": {},
      "customProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "Pardot": {
      "object": {}
    }
  },
  "incrementalPullConfig": {
    "datetimeTypeFieldName": {}
  }
}
```

 Contains information about the configuration of the source connector used in the flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorType|object|true|none|none|
|apiVersion|object|false|none|none|
|connectorProfileName|object|false|none|none|
|sourceConnectorProperties|object|true|none|none|
|incrementalPullConfig|object|false|none|none|

<h2 id="tocS_DestinationFlowConfigList">DestinationFlowConfigList</h2>
<!-- backwards compatibility -->
<a id="schemadestinationflowconfiglist"></a>
<a id="schema_DestinationFlowConfigList"></a>
<a id="tocSdestinationflowconfiglist"></a>
<a id="tocsdestinationflowconfiglist"></a>

```json
[
  {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "destinationConnectorProperties": {
      "Redshift": {
        "object": {},
        "intermediateBucketName": {},
        "bucketPrefix": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        }
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3OutputFormatConfig": {
          "fileType": {},
          "prefixConfig": {
            "prefixType": {},
            "prefixFormat": {},
            "pathPrefixHierarchy": {}
          },
          "aggregationConfig": {
            "aggregationType": {},
            "targetFileSize": {}
          },
          "preserveSourceDataTyping": {}
        }
      },
      "Salesforce": {
        "object": {},
        "idFieldNames": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        },
        "writeOperationType": {},
        "dataTransferApi": {}
      },
      "Snowflake": {
        "object": {},
        "intermediateBucketName": {},
        "bucketPrefix": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        }
      },
      "EventBridge": {
        "object": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        }
      },
      "LookoutMetrics": {},
      "Upsolver": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3OutputFormatConfig": {
          "fileType": {},
          "prefixConfig": {
            "prefixType": {},
            "prefixFormat": {},
            "pathPrefixHierarchy": {}
          },
          "aggregationConfig": {
            "aggregationType": {},
            "targetFileSize": {}
          }
        }
      },
      "Honeycode": {
        "object": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        }
      },
      "CustomerProfiles": {
        "domainName": {},
        "objectTypeName": {}
      },
      "Zendesk": {
        "object": {},
        "idFieldNames": [
          "string"
        ],
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        },
        "writeOperationType": "INSERT"
      },
      "Marketo": {
        "object": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        }
      },
      "CustomConnector": {
        "entityName": {},
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        },
        "writeOperationType": {},
        "idFieldNames": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "SAPOData": {
        "objectPath": {},
        "successResponseHandlingConfig": {
          "bucketPrefix": {},
          "bucketName": {}
        },
        "idFieldNames": [
          "string"
        ],
        "errorHandlingConfig": {
          "failOnFirstDestinationError": {},
          "bucketPrefix": {},
          "bucketName": {}
        },
        "writeOperationType": "INSERT"
      }
    }
  }
]
```

<h2 id="tocS_Tasks">Tasks</h2>
<!-- backwards compatibility -->
<a id="schematasks"></a>
<a id="schema_Tasks"></a>
<a id="tocStasks"></a>
<a id="tocstasks"></a>

```json
[
  {
    "sourceFields": {},
    "connectorOperator": {
      "Amplitude": {},
      "Datadog": {},
      "Dynatrace": {},
      "GoogleAnalytics": {},
      "InforNexus": {},
      "Marketo": {},
      "S3": {},
      "Salesforce": {},
      "ServiceNow": {},
      "Singular": {},
      "Slack": {},
      "Trendmicro": {},
      "Veeva": {},
      "Zendesk": {},
      "SAPOData": {},
      "CustomConnector": {},
      "Pardot": {}
    },
    "destinationField": {},
    "taskType": {},
    "taskProperties": {
      "property1": "string",
      "property2": "string"
    }
  }
]
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

<h2 id="tocS_MetadataCatalogConfig">MetadataCatalogConfig</h2>
<!-- backwards compatibility -->
<a id="schemametadatacatalogconfig"></a>
<a id="schema_MetadataCatalogConfig"></a>
<a id="tocSmetadatacatalogconfig"></a>
<a id="tocsmetadatacatalogconfig"></a>

```json
{
  "glueDataCatalog": {
    "roleArn": {},
    "databaseName": {},
    "tablePrefix": {}
  }
}
```

Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|glueDataCatalog|object|false|none|none|

<h2 id="tocS_CreateFlowRequest">CreateFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateflowrequest"></a>
<a id="schema_CreateFlowRequest"></a>
<a id="tocScreateflowrequest"></a>
<a id="tocscreateflowrequest"></a>

```json
{
  "flowName": {},
  "description": {},
  "kmsArn": {},
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": {},
  "tasks": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|
|description|object|false|none|none|
|kmsArn|object|false|none|none|
|triggerConfig|object|true|none|none|
|sourceFlowConfig|object|true|none|none|
|destinationFlowConfigList|object|true|none|none|
|tasks|object|true|none|none|
|tags|object|false|none|none|
|metadataCatalogConfig|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_FlowArn">FlowArn</h2>
<!-- backwards compatibility -->
<a id="schemaflowarn"></a>
<a id="schema_FlowArn"></a>
<a id="tocSflowarn"></a>
<a id="tocsflowarn"></a>

```json
"string"
```

<h2 id="tocS_FlowStatus">FlowStatus</h2>
<!-- backwards compatibility -->
<a id="schemaflowstatus"></a>
<a id="schema_FlowStatus"></a>
<a id="tocSflowstatus"></a>
<a id="tocsflowstatus"></a>

```json
"Active"
```

<h2 id="tocS_CreatedBy">CreatedBy</h2>
<!-- backwards compatibility -->
<a id="schemacreatedby"></a>
<a id="schema_CreatedBy"></a>
<a id="tocScreatedby"></a>
<a id="tocscreatedby"></a>

```json
"string"
```

<h2 id="tocS_CredentialsMapValue">CredentialsMapValue</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsmapvalue"></a>
<a id="schema_CredentialsMapValue"></a>
<a id="tocScredentialsmapvalue"></a>
<a id="tocscredentialsmapvalue"></a>

```json
"password"
```

<h2 id="tocS_CredentialsMap">CredentialsMap</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsmap"></a>
<a id="schema_CredentialsMap"></a>
<a id="tocScredentialsmap"></a>
<a id="tocscredentialsmap"></a>

```json
{
  "property1": "password",
  "property2": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CredentialsMapValue](#schemacredentialsmapvalue)|false|none|none|

<h2 id="tocS_CredentialsMapKey">CredentialsMapKey</h2>
<!-- backwards compatibility -->
<a id="schemacredentialsmapkey"></a>
<a id="schema_CredentialsMapKey"></a>
<a id="tocScredentialsmapkey"></a>
<a id="tocscredentialsmapkey"></a>

```json
"password"
```

<h2 id="tocS_CustomAuthenticationType">CustomAuthenticationType</h2>
<!-- backwards compatibility -->
<a id="schemacustomauthenticationtype"></a>
<a id="schema_CustomAuthenticationType"></a>
<a id="tocScustomauthenticationtype"></a>
<a id="tocscustomauthenticationtype"></a>

```json
"string"
```

<h2 id="tocS_CustomAuthConfig">CustomAuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemacustomauthconfig"></a>
<a id="schema_CustomAuthConfig"></a>
<a id="tocScustomauthconfig"></a>
<a id="tocscustomauthconfig"></a>

```json
{
  "customAuthenticationType": {},
  "authParameters": {}
}
```

Configuration information required for custom authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customAuthenticationType|object|false|none|none|
|authParameters|object|false|none|none|

<h2 id="tocS_CustomAuthCredentials">CustomAuthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemacustomauthcredentials"></a>
<a id="schema_CustomAuthCredentials"></a>
<a id="tocScustomauthcredentials"></a>
<a id="tocscustomauthcredentials"></a>

```json
{
  "customAuthenticationType": {},
  "credentialsMap": {
    "property1": "password",
    "property2": "password"
  }
}
```

The custom credentials required for custom authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customAuthenticationType|object|true|none|none|
|credentialsMap|object|false|none|none|

<h2 id="tocS_EntityName">EntityName</h2>
<!-- backwards compatibility -->
<a id="schemaentityname"></a>
<a id="schema_EntityName"></a>
<a id="tocSentityname"></a>
<a id="tocsentityname"></a>

```json
"string"
```

<h2 id="tocS_ErrorHandlingConfig">ErrorHandlingConfig</h2>
<!-- backwards compatibility -->
<a id="schemaerrorhandlingconfig"></a>
<a id="schema_ErrorHandlingConfig"></a>
<a id="tocSerrorhandlingconfig"></a>
<a id="tocserrorhandlingconfig"></a>

```json
{
  "failOnFirstDestinationError": {},
  "bucketPrefix": {},
  "bucketName": {}
}
```

 The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failOnFirstDestinationError|object|false|none|none|
|bucketPrefix|object|false|none|none|
|bucketName|object|false|none|none|

<h2 id="tocS_WriteOperationType">WriteOperationType</h2>
<!-- backwards compatibility -->
<a id="schemawriteoperationtype"></a>
<a id="schema_WriteOperationType"></a>
<a id="tocSwriteoperationtype"></a>
<a id="tocswriteoperationtype"></a>

```json
"INSERT"
```

 The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation.

<h2 id="tocS_IdFieldNameList">IdFieldNameList</h2>
<!-- backwards compatibility -->
<a id="schemaidfieldnamelist"></a>
<a id="schema_IdFieldNameList"></a>
<a id="tocSidfieldnamelist"></a>
<a id="tocsidfieldnamelist"></a>

```json
[
  "string"
]
```

 A list of field names that can be used as an ID field when performing a write operation.

<h2 id="tocS_CustomConnectorDestinationProperties">CustomConnectorDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemacustomconnectordestinationproperties"></a>
<a id="schema_CustomConnectorDestinationProperties"></a>
<a id="tocScustomconnectordestinationproperties"></a>
<a id="tocscustomconnectordestinationproperties"></a>

```json
{
  "entityName": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  },
  "writeOperationType": {},
  "idFieldNames": {},
  "customProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

The properties that are applied when the custom connector is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityName|object|true|none|none|
|errorHandlingConfig|object|false|none|none|
|writeOperationType|object|false|none|none|
|idFieldNames|object|false|none|none|
|customProperties|object|false|none|none|

<h2 id="tocS_OAuth2Credentials">OAuth2Credentials</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2credentials"></a>
<a id="schema_OAuth2Credentials"></a>
<a id="tocSoauth2credentials"></a>
<a id="tocsoauth2credentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

The OAuth 2.0 credentials required for OAuth 2.0 authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|false|none|none|
|clientSecret|object|false|none|none|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|[ConnectorOAuthRequest](#schemaconnectoroauthrequest)|false|none| Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. |

<h2 id="tocS_ProfilePropertiesMap">ProfilePropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemaprofilepropertiesmap"></a>
<a id="schema_ProfilePropertiesMap"></a>
<a id="tocSprofilepropertiesmap"></a>
<a id="tocsprofilepropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ProfilePropertyValue](#schemaprofilepropertyvalue)|false|none|none|

<h2 id="tocS_OAuth2Properties">OAuth2Properties</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2properties"></a>
<a id="schema_OAuth2Properties"></a>
<a id="tocSoauth2properties"></a>
<a id="tocsoauth2properties"></a>

```json
{
  "tokenUrl": {},
  "oAuth2GrantType": {},
  "tokenUrlCustomProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

The OAuth 2.0 properties required for OAuth 2.0 authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenUrl|object|true|none|none|
|oAuth2GrantType|object|true|none|none|
|tokenUrlCustomProperties|object|false|none|none|

<h2 id="tocS_CustomConnectorSourceProperties">CustomConnectorSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemacustomconnectorsourceproperties"></a>
<a id="schema_CustomConnectorSourceProperties"></a>
<a id="tocScustomconnectorsourceproperties"></a>
<a id="tocscustomconnectorsourceproperties"></a>

```json
{
  "entityName": {},
  "customProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

The properties that are applied when the custom connector is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityName|object|true|none|none|
|customProperties|object|false|none|none|

<h2 id="tocS_CustomPropertyValue">CustomPropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemacustompropertyvalue"></a>
<a id="schema_CustomPropertyValue"></a>
<a id="tocScustompropertyvalue"></a>
<a id="tocscustompropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_CustomPropertyKey">CustomPropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemacustompropertykey"></a>
<a id="schema_CustomPropertyKey"></a>
<a id="tocScustompropertykey"></a>
<a id="tocscustompropertykey"></a>

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

<h2 id="tocS_ObjectTypeName">ObjectTypeName</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypename"></a>
<a id="schema_ObjectTypeName"></a>
<a id="tocSobjecttypename"></a>
<a id="tocsobjecttypename"></a>

```json
"string"
```

<h2 id="tocS_CustomerProfilesDestinationProperties">CustomerProfilesDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemacustomerprofilesdestinationproperties"></a>
<a id="schema_CustomerProfilesDestinationProperties"></a>
<a id="tocScustomerprofilesdestinationproperties"></a>
<a id="tocscustomerprofilesdestinationproperties"></a>

```json
{
  "domainName": {},
  "objectTypeName": {}
}
```

 The properties that are applied when Amazon Connect Customer Profiles is used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainName|object|true|none|none|
|objectTypeName|object|false|none|none|

<h2 id="tocS_DataApiRoleArn">DataApiRoleArn</h2>
<!-- backwards compatibility -->
<a id="schemadataapirolearn"></a>
<a id="schema_DataApiRoleArn"></a>
<a id="tocSdataapirolearn"></a>
<a id="tocsdataapirolearn"></a>

```json
"string"
```

<h2 id="tocS_DataPullMode">DataPullMode</h2>
<!-- backwards compatibility -->
<a id="schemadatapullmode"></a>
<a id="schema_DataPullMode"></a>
<a id="tocSdatapullmode"></a>
<a id="tocsdatapullmode"></a>

```json
"Incremental"
```

<h2 id="tocS_DatabaseName">DatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemadatabasename"></a>
<a id="schema_DatabaseName"></a>
<a id="tocSdatabasename"></a>
<a id="tocsdatabasename"></a>

```json
"string"
```

<h2 id="tocS_DatabaseUrl">DatabaseUrl</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseurl"></a>
<a id="schema_DatabaseUrl"></a>
<a id="tocSdatabaseurl"></a>
<a id="tocsdatabaseurl"></a>

```json
"string"
```

<h2 id="tocS_InstanceUrl">InstanceUrl</h2>
<!-- backwards compatibility -->
<a id="schemainstanceurl"></a>
<a id="schema_InstanceUrl"></a>
<a id="tocSinstanceurl"></a>
<a id="tocsinstanceurl"></a>

```json
"string"
```

<h2 id="tocS_DatadogSourceProperties">DatadogSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemadatadogsourceproperties"></a>
<a id="schema_DatadogSourceProperties"></a>
<a id="tocSdatadogsourceproperties"></a>
<a id="tocsdatadogsourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Datadog is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_DatetimeTypeFieldName">DatetimeTypeFieldName</h2>
<!-- backwards compatibility -->
<a id="schemadatetimetypefieldname"></a>
<a id="schema_DatetimeTypeFieldName"></a>
<a id="tocSdatetimetypefieldname"></a>
<a id="tocsdatetimetypefieldname"></a>

```json
"string"
```

<h2 id="tocS_DeleteConnectorProfileRequest">DeleteConnectorProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconnectorprofilerequest"></a>
<a id="schema_DeleteConnectorProfileRequest"></a>
<a id="tocSdeleteconnectorprofilerequest"></a>
<a id="tocsdeleteconnectorprofilerequest"></a>

```json
{
  "connectorProfileName": {},
  "forceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileName|object|true|none|none|
|forceDelete|object|false|none|none|

<h2 id="tocS_DeleteFlowRequest">DeleteFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteflowrequest"></a>
<a id="schema_DeleteFlowRequest"></a>
<a id="tocSdeleteflowrequest"></a>
<a id="tocsdeleteflowrequest"></a>

```json
{
  "flowName": {},
  "forceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|
|forceDelete|object|false|none|none|

<h2 id="tocS_DescribeConnectorEntityRequest">DescribeConnectorEntityRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorentityrequest"></a>
<a id="schema_DescribeConnectorEntityRequest"></a>
<a id="tocSdescribeconnectorentityrequest"></a>
<a id="tocsdescribeconnectorentityrequest"></a>

```json
{
  "connectorEntityName": {},
  "connectorType": {},
  "connectorProfileName": {},
  "apiVersion": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorEntityName|object|true|none|none|
|connectorType|object|false|none|none|
|connectorProfileName|object|false|none|none|
|apiVersion|object|false|none|none|

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

<h2 id="tocS_DescribeConnectorProfilesRequest">DescribeConnectorProfilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorprofilesrequest"></a>
<a id="schema_DescribeConnectorProfilesRequest"></a>
<a id="tocSdescribeconnectorprofilesrequest"></a>
<a id="tocsdescribeconnectorprofilesrequest"></a>

```json
{
  "connectorProfileNames": {},
  "connectorType": {},
  "connectorLabel": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileNames|object|false|none|none|
|connectorType|object|false|none|none|
|connectorLabel|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeConnectorRequest">DescribeConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorrequest"></a>
<a id="schema_DescribeConnectorRequest"></a>
<a id="tocSdescribeconnectorrequest"></a>
<a id="tocsdescribeconnectorrequest"></a>

```json
{
  "connectorType": {},
  "connectorLabel": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorType|object|true|none|none|
|connectorLabel|object|false|none|none|

<h2 id="tocS_DescribeConnectorsRequest">DescribeConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeconnectorsrequest"></a>
<a id="schema_DescribeConnectorsRequest"></a>
<a id="tocSdescribeconnectorsrequest"></a>
<a id="tocsdescribeconnectorsrequest"></a>

```json
{
  "connectorTypes": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorTypes|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_DescribeFlowExecutionRecordsRequest">DescribeFlowExecutionRecordsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowexecutionrecordsrequest"></a>
<a id="schema_DescribeFlowExecutionRecordsRequest"></a>
<a id="tocSdescribeflowexecutionrecordsrequest"></a>
<a id="tocsdescribeflowexecutionrecordsrequest"></a>

```json
{
  "flowName": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_FlowExecutionList">FlowExecutionList</h2>
<!-- backwards compatibility -->
<a id="schemaflowexecutionlist"></a>
<a id="schema_FlowExecutionList"></a>
<a id="tocSflowexecutionlist"></a>
<a id="tocsflowexecutionlist"></a>

```json
[
  {
    "executionId": {},
    "executionStatus": {},
    "executionResult": {
      "errorInfo": {
        "putFailuresCount": {},
        "executionMessage": {}
      },
      "bytesProcessed": {},
      "bytesWritten": {},
      "recordsProcessed": {}
    },
    "startedAt": {},
    "lastUpdatedAt": {},
    "dataPullStartTime": {},
    "dataPullEndTime": {},
    "metadataCatalogDetails": {}
  }
]
```

<h2 id="tocS_DescribeFlowRequest">DescribeFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeflowrequest"></a>
<a id="schema_DescribeFlowRequest"></a>
<a id="tocSdescribeflowrequest"></a>
<a id="tocsdescribeflowrequest"></a>

```json
{
  "flowName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|

<h2 id="tocS_FlowStatusMessage">FlowStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaflowstatusmessage"></a>
<a id="schema_FlowStatusMessage"></a>
<a id="tocSflowstatusmessage"></a>
<a id="tocsflowstatusmessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionDetails">ExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiondetails"></a>
<a id="schema_ExecutionDetails"></a>
<a id="tocSexecutiondetails"></a>
<a id="tocsexecutiondetails"></a>

```json
{
  "mostRecentExecutionMessage": {},
  "mostRecentExecutionTime": {},
  "mostRecentExecutionStatus": {}
}
```

 Describes the details of the flow run, including the timestamp, status, and message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mostRecentExecutionMessage|object|false|none|none|
|mostRecentExecutionTime|object|false|none|none|
|mostRecentExecutionStatus|object|false|none|none|

<h2 id="tocS_UpdatedBy">UpdatedBy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedby"></a>
<a id="schema_UpdatedBy"></a>
<a id="tocSupdatedby"></a>
<a id="tocsupdatedby"></a>

```json
"string"
```

<h2 id="tocS_MetadataCatalogDetails">MetadataCatalogDetails</h2>
<!-- backwards compatibility -->
<a id="schemametadatacatalogdetails"></a>
<a id="schema_MetadataCatalogDetails"></a>
<a id="tocSmetadatacatalogdetails"></a>
<a id="tocsmetadatacatalogdetails"></a>

```json
[
  {
    "catalogType": {},
    "tableName": {},
    "tableRegistrationOutput": {
      "message": {},
      "result": {},
      "status": {}
    },
    "partitionRegistrationOutput": {
      "message": {},
      "result": {},
      "status": {}
    }
  }
]
```

<h2 id="tocS_RedshiftDestinationProperties">RedshiftDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaredshiftdestinationproperties"></a>
<a id="schema_RedshiftDestinationProperties"></a>
<a id="tocSredshiftdestinationproperties"></a>
<a id="tocsredshiftdestinationproperties"></a>

```json
{
  "object": {},
  "intermediateBucketName": {},
  "bucketPrefix": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  }
}
```

 The properties that are applied when Amazon Redshift is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|intermediateBucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|errorHandlingConfig|object|false|none|none|

<h2 id="tocS_S3DestinationProperties">S3DestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemas3destinationproperties"></a>
<a id="schema_S3DestinationProperties"></a>
<a id="tocSs3destinationproperties"></a>
<a id="tocss3destinationproperties"></a>

```json
{
  "bucketName": {},
  "bucketPrefix": {},
  "s3OutputFormatConfig": {
    "fileType": {},
    "prefixConfig": {
      "prefixType": {},
      "prefixFormat": {},
      "pathPrefixHierarchy": {}
    },
    "aggregationConfig": {
      "aggregationType": {},
      "targetFileSize": {}
    },
    "preserveSourceDataTyping": {}
  }
}
```

 The properties that are applied when Amazon S3 is used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|s3OutputFormatConfig|[S3OutputFormatConfig](#schemas3outputformatconfig)|false|none| The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. |

<h2 id="tocS_SalesforceDestinationProperties">SalesforceDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcedestinationproperties"></a>
<a id="schema_SalesforceDestinationProperties"></a>
<a id="tocSsalesforcedestinationproperties"></a>
<a id="tocssalesforcedestinationproperties"></a>

```json
{
  "object": {},
  "idFieldNames": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  },
  "writeOperationType": {},
  "dataTransferApi": {}
}
```

 The properties that are applied when Salesforce is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|idFieldNames|object|false|none|none|
|errorHandlingConfig|object|false|none|none|
|writeOperationType|object|false|none|none|
|dataTransferApi|object|false|none|none|

<h2 id="tocS_SnowflakeDestinationProperties">SnowflakeDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemasnowflakedestinationproperties"></a>
<a id="schema_SnowflakeDestinationProperties"></a>
<a id="tocSsnowflakedestinationproperties"></a>
<a id="tocssnowflakedestinationproperties"></a>

```json
{
  "object": {},
  "intermediateBucketName": {},
  "bucketPrefix": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  }
}
```

 The properties that are applied when Snowflake is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|intermediateBucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|errorHandlingConfig|object|false|none|none|

<h2 id="tocS_EventBridgeDestinationProperties">EventBridgeDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaeventbridgedestinationproperties"></a>
<a id="schema_EventBridgeDestinationProperties"></a>
<a id="tocSeventbridgedestinationproperties"></a>
<a id="tocseventbridgedestinationproperties"></a>

```json
{
  "object": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  }
}
```

 The properties that are applied when Amazon EventBridge is being used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|errorHandlingConfig|[ErrorHandlingConfig](#schemaerrorhandlingconfig)|false|none| The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. |

<h2 id="tocS_LookoutMetricsDestinationProperties">LookoutMetricsDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemalookoutmetricsdestinationproperties"></a>
<a id="schema_LookoutMetricsDestinationProperties"></a>
<a id="tocSlookoutmetricsdestinationproperties"></a>
<a id="tocslookoutmetricsdestinationproperties"></a>

```json
{}
```

 The properties that are applied when Amazon Lookout for Metrics is used as a destination.

<h2 id="tocS_UpsolverDestinationProperties">UpsolverDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemaupsolverdestinationproperties"></a>
<a id="schema_UpsolverDestinationProperties"></a>
<a id="tocSupsolverdestinationproperties"></a>
<a id="tocsupsolverdestinationproperties"></a>

```json
{
  "bucketName": {},
  "bucketPrefix": {},
  "s3OutputFormatConfig": {
    "fileType": {},
    "prefixConfig": {
      "prefixType": {},
      "prefixFormat": {},
      "pathPrefixHierarchy": {}
    },
    "aggregationConfig": {
      "aggregationType": {},
      "targetFileSize": {}
    }
  }
}
```

 The properties that are applied when Upsolver is used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|s3OutputFormatConfig|object|true|none|none|

<h2 id="tocS_HoneycodeDestinationProperties">HoneycodeDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemahoneycodedestinationproperties"></a>
<a id="schema_HoneycodeDestinationProperties"></a>
<a id="tocShoneycodedestinationproperties"></a>
<a id="tocshoneycodedestinationproperties"></a>

```json
{
  "object": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  }
}
```

 The properties that are applied when Amazon Honeycode is used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|errorHandlingConfig|[ErrorHandlingConfig](#schemaerrorhandlingconfig)|false|none| The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. |

<h2 id="tocS_ZendeskDestinationProperties">ZendeskDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemazendeskdestinationproperties"></a>
<a id="schema_ZendeskDestinationProperties"></a>
<a id="tocSzendeskdestinationproperties"></a>
<a id="tocszendeskdestinationproperties"></a>

```json
{
  "object": {},
  "idFieldNames": [
    "string"
  ],
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  },
  "writeOperationType": "INSERT"
}
```

The properties that are applied when Zendesk is used as a destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|idFieldNames|[IdFieldNameList](#schemaidfieldnamelist)|false|none| A list of field names that can be used as an ID field when performing a write operation. |
|errorHandlingConfig|[ErrorHandlingConfig](#schemaerrorhandlingconfig)|false|none| The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. |
|writeOperationType|[WriteOperationType](#schemawriteoperationtype)|false|none| The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. |

#### Enumerated Values

|Property|Value|
|---|---|
|writeOperationType|INSERT|
|writeOperationType|UPSERT|
|writeOperationType|UPDATE|
|writeOperationType|DELETE|

<h2 id="tocS_MarketoDestinationProperties">MarketoDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemamarketodestinationproperties"></a>
<a id="schema_MarketoDestinationProperties"></a>
<a id="tocSmarketodestinationproperties"></a>
<a id="tocsmarketodestinationproperties"></a>

```json
{
  "object": {},
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  }
}
```

The properties that Amazon AppFlow applies when you use Marketo as a flow destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|errorHandlingConfig|[ErrorHandlingConfig](#schemaerrorhandlingconfig)|false|none| The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. |

<h2 id="tocS_SAPODataDestinationProperties">SAPODataDestinationProperties</h2>
<!-- backwards compatibility -->
<a id="schemasapodatadestinationproperties"></a>
<a id="schema_SAPODataDestinationProperties"></a>
<a id="tocSsapodatadestinationproperties"></a>
<a id="tocssapodatadestinationproperties"></a>

```json
{
  "objectPath": {},
  "successResponseHandlingConfig": {
    "bucketPrefix": {},
    "bucketName": {}
  },
  "idFieldNames": [
    "string"
  ],
  "errorHandlingConfig": {
    "failOnFirstDestinationError": {},
    "bucketPrefix": {},
    "bucketName": {}
  },
  "writeOperationType": "INSERT"
}
```

The properties that are applied when using SAPOData as a flow destination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectPath|object|true|none|none|
|successResponseHandlingConfig|object|false|none|none|
|idFieldNames|[IdFieldNameList](#schemaidfieldnamelist)|false|none| A list of field names that can be used as an ID field when performing a write operation. |
|errorHandlingConfig|[ErrorHandlingConfig](#schemaerrorhandlingconfig)|false|none| The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. |
|writeOperationType|[WriteOperationType](#schemawriteoperationtype)|false|none| The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. |

#### Enumerated Values

|Property|Value|
|---|---|
|writeOperationType|INSERT|
|writeOperationType|UPSERT|
|writeOperationType|UPDATE|
|writeOperationType|DELETE|

<h2 id="tocS_DestinationConnectorProperties">DestinationConnectorProperties</h2>
<!-- backwards compatibility -->
<a id="schemadestinationconnectorproperties"></a>
<a id="schema_DestinationConnectorProperties"></a>
<a id="tocSdestinationconnectorproperties"></a>
<a id="tocsdestinationconnectorproperties"></a>

```json
{
  "Redshift": {
    "object": {},
    "intermediateBucketName": {},
    "bucketPrefix": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    }
  },
  "S3": {
    "bucketName": {},
    "bucketPrefix": {},
    "s3OutputFormatConfig": {
      "fileType": {},
      "prefixConfig": {
        "prefixType": {},
        "prefixFormat": {},
        "pathPrefixHierarchy": {}
      },
      "aggregationConfig": {
        "aggregationType": {},
        "targetFileSize": {}
      },
      "preserveSourceDataTyping": {}
    }
  },
  "Salesforce": {
    "object": {},
    "idFieldNames": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    },
    "writeOperationType": {},
    "dataTransferApi": {}
  },
  "Snowflake": {
    "object": {},
    "intermediateBucketName": {},
    "bucketPrefix": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    }
  },
  "EventBridge": {
    "object": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    }
  },
  "LookoutMetrics": {},
  "Upsolver": {
    "bucketName": {},
    "bucketPrefix": {},
    "s3OutputFormatConfig": {
      "fileType": {},
      "prefixConfig": {
        "prefixType": {},
        "prefixFormat": {},
        "pathPrefixHierarchy": {}
      },
      "aggregationConfig": {
        "aggregationType": {},
        "targetFileSize": {}
      }
    }
  },
  "Honeycode": {
    "object": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    }
  },
  "CustomerProfiles": {
    "domainName": {},
    "objectTypeName": {}
  },
  "Zendesk": {
    "object": {},
    "idFieldNames": [
      "string"
    ],
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    },
    "writeOperationType": "INSERT"
  },
  "Marketo": {
    "object": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    }
  },
  "CustomConnector": {
    "entityName": {},
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    },
    "writeOperationType": {},
    "idFieldNames": {},
    "customProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "SAPOData": {
    "objectPath": {},
    "successResponseHandlingConfig": {
      "bucketPrefix": {},
      "bucketName": {}
    },
    "idFieldNames": [
      "string"
    ],
    "errorHandlingConfig": {
      "failOnFirstDestinationError": {},
      "bucketPrefix": {},
      "bucketName": {}
    },
    "writeOperationType": "INSERT"
  }
}
```

 This stores the information that is required to query a particular connector.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Redshift|object|false|none|none|
|S3|object|false|none|none|
|Salesforce|object|false|none|none|
|Snowflake|object|false|none|none|
|EventBridge|object|false|none|none|
|LookoutMetrics|object|false|none|none|
|Upsolver|object|false|none|none|
|Honeycode|object|false|none|none|
|CustomerProfiles|object|false|none|none|
|Zendesk|object|false|none|none|
|Marketo|object|false|none|none|
|CustomConnector|object|false|none|none|
|SAPOData|object|false|none|none|

<h2 id="tocS_DestinationField">DestinationField</h2>
<!-- backwards compatibility -->
<a id="schemadestinationfield"></a>
<a id="schema_DestinationField"></a>
<a id="tocSdestinationfield"></a>
<a id="tocsdestinationfield"></a>

```json
"string"
```

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
"string"
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

<h2 id="tocS_DynatraceSourceProperties">DynatraceSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemadynatracesourceproperties"></a>
<a id="schema_DynatraceSourceProperties"></a>
<a id="tocSdynatracesourceproperties"></a>
<a id="tocsdynatracesourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Dynatrace is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_EntitiesPath">EntitiesPath</h2>
<!-- backwards compatibility -->
<a id="schemaentitiespath"></a>
<a id="schema_EntitiesPath"></a>
<a id="tocSentitiespath"></a>
<a id="tocsentitiespath"></a>

```json
"string"
```

<h2 id="tocS_ExecutionMessage">ExecutionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionmessage"></a>
<a id="schema_ExecutionMessage"></a>
<a id="tocSexecutionmessage"></a>
<a id="tocsexecutionmessage"></a>

```json
"string"
```

<h2 id="tocS_ErrorInfo">ErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaerrorinfo"></a>
<a id="schema_ErrorInfo"></a>
<a id="tocSerrorinfo"></a>
<a id="tocserrorinfo"></a>

```json
{
  "putFailuresCount": {},
  "executionMessage": {}
}
```

 Provides details in the event of a failed flow, including the failure count and the related error messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|putFailuresCount|object|false|none|none|
|executionMessage|object|false|none|none|

<h2 id="tocS_MostRecentExecutionMessage">MostRecentExecutionMessage</h2>
<!-- backwards compatibility -->
<a id="schemamostrecentexecutionmessage"></a>
<a id="schema_MostRecentExecutionMessage"></a>
<a id="tocSmostrecentexecutionmessage"></a>
<a id="tocsmostrecentexecutionmessage"></a>

```json
"string"
```

<h2 id="tocS_ExecutionStatus">ExecutionStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstatus"></a>
<a id="schema_ExecutionStatus"></a>
<a id="tocSexecutionstatus"></a>
<a id="tocsexecutionstatus"></a>

```json
"InProgress"
```

<h2 id="tocS_ExecutionId">ExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionid"></a>
<a id="schema_ExecutionId"></a>
<a id="tocSexecutionid"></a>
<a id="tocsexecutionid"></a>

```json
"string"
```

<h2 id="tocS_ExecutionResult">ExecutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionresult"></a>
<a id="schema_ExecutionResult"></a>
<a id="tocSexecutionresult"></a>
<a id="tocsexecutionresult"></a>

```json
{
  "errorInfo": {
    "putFailuresCount": {},
    "executionMessage": {}
  },
  "bytesProcessed": {},
  "bytesWritten": {},
  "recordsProcessed": {}
}
```

 Specifies the end result of the flow run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorInfo|object|false|none|none|
|bytesProcessed|object|false|none|none|
|bytesWritten|object|false|none|none|
|recordsProcessed|object|false|none|none|

<h2 id="tocS_ExecutionRecord">ExecutionRecord</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionrecord"></a>
<a id="schema_ExecutionRecord"></a>
<a id="tocSexecutionrecord"></a>
<a id="tocsexecutionrecord"></a>

```json
{
  "executionId": {},
  "executionStatus": {},
  "executionResult": {
    "errorInfo": {
      "putFailuresCount": {},
      "executionMessage": {}
    },
    "bytesProcessed": {},
    "bytesWritten": {},
    "recordsProcessed": {}
  },
  "startedAt": {},
  "lastUpdatedAt": {},
  "dataPullStartTime": {},
  "dataPullEndTime": {},
  "metadataCatalogDetails": {}
}
```

 Specifies information about the past flow run instances for a given flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionId|object|false|none|none|
|executionStatus|object|false|none|none|
|executionResult|object|false|none|none|
|startedAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|dataPullStartTime|object|false|none|none|
|dataPullEndTime|object|false|none|none|
|metadataCatalogDetails|object|false|none|none|

<h2 id="tocS_FieldType">FieldType</h2>
<!-- backwards compatibility -->
<a id="schemafieldtype"></a>
<a id="schema_FieldType"></a>
<a id="tocSfieldtype"></a>
<a id="tocsfieldtype"></a>

```json
"string"
```

<h2 id="tocS_FilterOperatorList">FilterOperatorList</h2>
<!-- backwards compatibility -->
<a id="schemafilteroperatorlist"></a>
<a id="schema_FilterOperatorList"></a>
<a id="tocSfilteroperatorlist"></a>
<a id="tocsfilteroperatorlist"></a>

```json
[
  "PROJECTION"
]
```

<h2 id="tocS_SupportedValueList">SupportedValueList</h2>
<!-- backwards compatibility -->
<a id="schemasupportedvaluelist"></a>
<a id="schema_SupportedValueList"></a>
<a id="tocSsupportedvaluelist"></a>
<a id="tocssupportedvaluelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "maximum": {},
  "minimum": {}
}
```

The range of values that the property supports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|object|false|none|none|
|minimum|object|false|none|none|

<h2 id="tocS_FieldTypeDetails">FieldTypeDetails</h2>
<!-- backwards compatibility -->
<a id="schemafieldtypedetails"></a>
<a id="schema_FieldTypeDetails"></a>
<a id="tocSfieldtypedetails"></a>
<a id="tocsfieldtypedetails"></a>

```json
{
  "fieldType": {},
  "filterOperators": {},
  "supportedValues": {},
  "valueRegexPattern": {},
  "supportedDateFormat": {},
  "fieldValueRange": {
    "maximum": {},
    "minimum": {}
  },
  "fieldLengthRange": {
    "maximum": {},
    "minimum": {}
  }
}
```

 Contains details regarding the supported field type and the operators that can be applied for filtering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldType|object|true|none|none|
|filterOperators|object|true|none|none|
|supportedValues|object|false|none|none|
|valueRegexPattern|object|false|none|none|
|supportedDateFormat|object|false|none|none|
|fieldValueRange|object|false|none|none|
|fieldLengthRange|object|false|none|none|

<h2 id="tocS_FileType">FileType</h2>
<!-- backwards compatibility -->
<a id="schemafiletype"></a>
<a id="schema_FileType"></a>
<a id="tocSfiletype"></a>
<a id="tocsfiletype"></a>

```json
"CSV"
```

<h2 id="tocS_FlowDefinition">FlowDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaflowdefinition"></a>
<a id="schema_FlowDefinition"></a>
<a id="tocSflowdefinition"></a>
<a id="tocsflowdefinition"></a>

```json
{
  "flowArn": {},
  "description": {},
  "flowName": {},
  "flowStatus": {},
  "sourceConnectorType": {},
  "sourceConnectorLabel": {},
  "destinationConnectorType": {},
  "destinationConnectorLabel": {},
  "triggerType": {},
  "createdAt": {},
  "lastUpdatedAt": {},
  "createdBy": {},
  "lastUpdatedBy": {},
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "lastRunExecutionDetails": {
    "mostRecentExecutionMessage": {},
    "mostRecentExecutionTime": {},
    "mostRecentExecutionStatus": {}
  }
}
```

 The properties of the flow, such as its source, destination, trigger type, and so on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowArn|object|false|none|none|
|description|object|false|none|none|
|flowName|object|false|none|none|
|flowStatus|object|false|none|none|
|sourceConnectorType|object|false|none|none|
|sourceConnectorLabel|object|false|none|none|
|destinationConnectorType|object|false|none|none|
|destinationConnectorLabel|object|false|none|none|
|triggerType|object|false|none|none|
|createdAt|object|false|none|none|
|lastUpdatedAt|object|false|none|none|
|createdBy|object|false|none|none|
|lastUpdatedBy|object|false|none|none|
|tags|object|false|none|none|
|lastRunExecutionDetails|object|false|none|none|

<h2 id="tocS_FlowErrorDeactivationThreshold">FlowErrorDeactivationThreshold</h2>
<!-- backwards compatibility -->
<a id="schemaflowerrordeactivationthreshold"></a>
<a id="schema_FlowErrorDeactivationThreshold"></a>
<a id="tocSflowerrordeactivationthreshold"></a>
<a id="tocsflowerrordeactivationthreshold"></a>

```json
1
```

<h2 id="tocS_FlowList">FlowList</h2>
<!-- backwards compatibility -->
<a id="schemaflowlist"></a>
<a id="schema_FlowList"></a>
<a id="tocSflowlist"></a>
<a id="tocsflowlist"></a>

```json
[
  {
    "flowArn": {},
    "description": {},
    "flowName": {},
    "flowStatus": {},
    "sourceConnectorType": {},
    "sourceConnectorLabel": {},
    "destinationConnectorType": {},
    "destinationConnectorLabel": {},
    "triggerType": {},
    "createdAt": {},
    "lastUpdatedAt": {},
    "createdBy": {},
    "lastUpdatedBy": {},
    "tags": {
      "property1": "string",
      "property2": "string"
    },
    "lastRunExecutionDetails": {
      "mostRecentExecutionMessage": {},
      "mostRecentExecutionTime": {},
      "mostRecentExecutionStatus": {}
    }
  }
]
```

<h2 id="tocS_GlueDataCatalogIAMRole">GlueDataCatalogIAMRole</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogiamrole"></a>
<a id="schema_GlueDataCatalogIAMRole"></a>
<a id="tocSgluedatacatalogiamrole"></a>
<a id="tocsgluedatacatalogiamrole"></a>

```json
"string"
```

<h2 id="tocS_GlueDataCatalogDatabaseName">GlueDataCatalogDatabaseName</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogdatabasename"></a>
<a id="schema_GlueDataCatalogDatabaseName"></a>
<a id="tocSgluedatacatalogdatabasename"></a>
<a id="tocsgluedatacatalogdatabasename"></a>

```json
"string"
```

<h2 id="tocS_GlueDataCatalogTablePrefix">GlueDataCatalogTablePrefix</h2>
<!-- backwards compatibility -->
<a id="schemagluedatacatalogtableprefix"></a>
<a id="schema_GlueDataCatalogTablePrefix"></a>
<a id="tocSgluedatacatalogtableprefix"></a>
<a id="tocsgluedatacatalogtableprefix"></a>

```json
"string"
```

<h2 id="tocS_RefreshToken">RefreshToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtoken"></a>
<a id="schema_RefreshToken"></a>
<a id="tocSrefreshtoken"></a>
<a id="tocsrefreshtoken"></a>

```json
"string"
```

<h2 id="tocS_OAuthScopeList">OAuthScopeList</h2>
<!-- backwards compatibility -->
<a id="schemaoauthscopelist"></a>
<a id="schema_OAuthScopeList"></a>
<a id="tocSoauthscopelist"></a>
<a id="tocsoauthscopelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_GoogleAnalyticsSourceProperties">GoogleAnalyticsSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleanalyticssourceproperties"></a>
<a id="schema_GoogleAnalyticsSourceProperties"></a>
<a id="tocSgoogleanalyticssourceproperties"></a>
<a id="tocsgoogleanalyticssourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Google Analytics is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
"string"
```

<h2 id="tocS_InforNexusSourceProperties">InforNexusSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemainfornexussourceproperties"></a>
<a id="schema_InforNexusSourceProperties"></a>
<a id="tocSinfornexussourceproperties"></a>
<a id="tocsinfornexussourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Infor Nexus is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_JavaBoolean">JavaBoolean</h2>
<!-- backwards compatibility -->
<a id="schemajavaboolean"></a>
<a id="schema_JavaBoolean"></a>
<a id="tocSjavaboolean"></a>
<a id="tocsjavaboolean"></a>

```json
true
```

<h2 id="tocS_ListEntitiesMaxResults">ListEntitiesMaxResults</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesmaxresults"></a>
<a id="schema_ListEntitiesMaxResults"></a>
<a id="tocSlistentitiesmaxresults"></a>
<a id="tocslistentitiesmaxresults"></a>

```json
1
```

<h2 id="tocS_ListConnectorEntitiesRequest">ListConnectorEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorentitiesrequest"></a>
<a id="schema_ListConnectorEntitiesRequest"></a>
<a id="tocSlistconnectorentitiesrequest"></a>
<a id="tocslistconnectorentitiesrequest"></a>

```json
{
  "connectorProfileName": {},
  "connectorType": {},
  "entitiesPath": {},
  "apiVersion": {},
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileName|object|false|none|none|
|connectorType|object|false|none|none|
|entitiesPath|object|false|none|none|
|apiVersion|object|false|none|none|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListConnectorsRequest">ListConnectorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistconnectorsrequest"></a>
<a id="schema_ListConnectorsRequest"></a>
<a id="tocSlistconnectorsrequest"></a>
<a id="tocslistconnectorsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|object|false|none|none|
|nextToken|object|false|none|none|

<h2 id="tocS_ListFlowsRequest">ListFlowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistflowsrequest"></a>
<a id="schema_ListFlowsRequest"></a>
<a id="tocSlistflowsrequest"></a>
<a id="tocslistflowsrequest"></a>

```json
{
  "maxResults": {},
  "nextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<h2 id="tocS_LogonLanguage">LogonLanguage</h2>
<!-- backwards compatibility -->
<a id="schemalogonlanguage"></a>
<a id="schema_LogonLanguage"></a>
<a id="tocSlogonlanguage"></a>
<a id="tocslogonlanguage"></a>

```json
"st"
```

<h2 id="tocS_MarketoSourceProperties">MarketoSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemamarketosourceproperties"></a>
<a id="schema_MarketoSourceProperties"></a>
<a id="tocSmarketosourceproperties"></a>
<a id="tocsmarketosourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Marketo is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_RegistrationOutput">RegistrationOutput</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationoutput"></a>
<a id="schema_RegistrationOutput"></a>
<a id="tocSregistrationoutput"></a>
<a id="tocsregistrationoutput"></a>

```json
{
  "message": {},
  "result": {},
  "status": {}
}
```

<p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p> <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|result|object|false|none|none|
|status|object|false|none|none|

<h2 id="tocS_MetadataCatalogDetail">MetadataCatalogDetail</h2>
<!-- backwards compatibility -->
<a id="schemametadatacatalogdetail"></a>
<a id="schema_MetadataCatalogDetail"></a>
<a id="tocSmetadatacatalogdetail"></a>
<a id="tocsmetadatacatalogdetail"></a>

```json
{
  "catalogType": {},
  "tableName": {},
  "tableRegistrationOutput": {
    "message": {},
    "result": {},
    "status": {}
  },
  "partitionRegistrationOutput": {
    "message": {},
    "result": {},
    "status": {}
  }
}
```

Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogType|object|false|none|none|
|tableName|object|false|none|none|
|tableRegistrationOutput|object|false|none|none|
|partitionRegistrationOutput|object|false|none|none|

<h2 id="tocS_OAuth2CustomPropType">OAuth2CustomPropType</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2customproptype"></a>
<a id="schema_OAuth2CustomPropType"></a>
<a id="tocSoauth2customproptype"></a>
<a id="tocsoauth2customproptype"></a>

```json
"TOKEN_URL"
```

<h2 id="tocS_OAuth2CustomParameter">OAuth2CustomParameter</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2customparameter"></a>
<a id="schema_OAuth2CustomParameter"></a>
<a id="tocSoauth2customparameter"></a>
<a id="tocsoauth2customparameter"></a>

```json
{
  "key": {},
  "isRequired": {},
  "label": {},
  "description": {},
  "isSensitiveField": {},
  "connectorSuppliedValues": {},
  "type": {}
}
```

Custom parameter required for OAuth 2.0 authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|object|false|none|none|
|isRequired|object|false|none|none|
|label|object|false|none|none|
|description|object|false|none|none|
|isSensitiveField|object|false|none|none|
|connectorSuppliedValues|object|false|none|none|
|type|object|false|none|none|

<h2 id="tocS_OAuth2CustomPropertiesList">OAuth2CustomPropertiesList</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2custompropertieslist"></a>
<a id="schema_OAuth2CustomPropertiesList"></a>
<a id="tocSoauth2custompropertieslist"></a>
<a id="tocsoauth2custompropertieslist"></a>

```json
[
  {
    "key": {},
    "isRequired": {},
    "label": {},
    "description": {},
    "isSensitiveField": {},
    "connectorSuppliedValues": {},
    "type": {}
  }
]
```

<h2 id="tocS_TokenUrlList">TokenUrlList</h2>
<!-- backwards compatibility -->
<a id="schematokenurllist"></a>
<a id="schema_TokenUrlList"></a>
<a id="tocStokenurllist"></a>
<a id="tocstokenurllist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_OAuth2GrantTypeSupportedList">OAuth2GrantTypeSupportedList</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2granttypesupportedlist"></a>
<a id="schema_OAuth2GrantTypeSupportedList"></a>
<a id="tocSoauth2granttypesupportedlist"></a>
<a id="tocsoauth2granttypesupportedlist"></a>

```json
[
  "CLIENT_CREDENTIALS"
]
```

<h2 id="tocS_OAuth2GrantType">OAuth2GrantType</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2granttype"></a>
<a id="schema_OAuth2GrantType"></a>
<a id="tocSoauth2granttype"></a>
<a id="tocsoauth2granttype"></a>

```json
"CLIENT_CREDENTIALS"
```

<h2 id="tocS_TokenUrl">TokenUrl</h2>
<!-- backwards compatibility -->
<a id="schematokenurl"></a>
<a id="schema_TokenUrl"></a>
<a id="tocStokenurl"></a>
<a id="tocstokenurl"></a>

```json
"string"
```

<h2 id="tocS_TokenUrlCustomProperties">TokenUrlCustomProperties</h2>
<!-- backwards compatibility -->
<a id="schematokenurlcustomproperties"></a>
<a id="schema_TokenUrlCustomProperties"></a>
<a id="tocStokenurlcustomproperties"></a>
<a id="tocstokenurlcustomproperties"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CustomPropertyValue](#schemacustompropertyvalue)|false|none|none|

<h2 id="tocS_OAuthCredentials">OAuthCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaoauthcredentials"></a>
<a id="schema_OAuthCredentials"></a>
<a id="tocSoauthcredentials"></a>
<a id="tocsoauthcredentials"></a>

```json
{
  "clientId": {},
  "clientSecret": {},
  "accessToken": {},
  "refreshToken": {},
  "oAuthRequest": {
    "authCode": {},
    "redirectUri": {}
  }
}
```

 The OAuth credentials required for OAuth type authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|object|true|none|none|
|clientSecret|object|true|none|none|
|accessToken|object|false|none|none|
|refreshToken|object|false|none|none|
|oAuthRequest|object|false|none|none|

<h2 id="tocS_OAuthProperties">OAuthProperties</h2>
<!-- backwards compatibility -->
<a id="schemaoauthproperties"></a>
<a id="schema_OAuthProperties"></a>
<a id="tocSoauthproperties"></a>
<a id="tocsoauthproperties"></a>

```json
{
  "tokenUrl": {},
  "authCodeUrl": {},
  "oAuthScopes": {}
}
```

 The OAuth properties required for OAuth type authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenUrl|object|true|none|none|
|authCodeUrl|object|true|none|none|
|oAuthScopes|object|true|none|none|

<h2 id="tocS_OAuthScope">OAuthScope</h2>
<!-- backwards compatibility -->
<a id="schemaoauthscope"></a>
<a id="schema_OAuthScope"></a>
<a id="tocSoauthscope"></a>
<a id="tocsoauthscope"></a>

```json
"string"
```

<h2 id="tocS_OperatorPropertiesKeys">OperatorPropertiesKeys</h2>
<!-- backwards compatibility -->
<a id="schemaoperatorpropertieskeys"></a>
<a id="schema_OperatorPropertiesKeys"></a>
<a id="tocSoperatorpropertieskeys"></a>
<a id="tocsoperatorpropertieskeys"></a>

```json
"VALUE"
```

<h2 id="tocS_Operators">Operators</h2>
<!-- backwards compatibility -->
<a id="schemaoperators"></a>
<a id="schema_Operators"></a>
<a id="tocSoperators"></a>
<a id="tocsoperators"></a>

```json
"PROJECTION"
```

<h2 id="tocS_PardotSourceProperties">PardotSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemapardotsourceproperties"></a>
<a id="schema_PardotSourceProperties"></a>
<a id="tocSpardotsourceproperties"></a>
<a id="tocspardotsourceproperties"></a>

```json
{
  "object": {}
}
```

The properties that are applied when Salesforce Pardot is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_PathPrefix">PathPrefix</h2>
<!-- backwards compatibility -->
<a id="schemapathprefix"></a>
<a id="schema_PathPrefix"></a>
<a id="tocSpathprefix"></a>
<a id="tocspathprefix"></a>

```json
"EXECUTION_ID"
```

<h2 id="tocS_PathPrefixHierarchy">PathPrefixHierarchy</h2>
<!-- backwards compatibility -->
<a id="schemapathprefixhierarchy"></a>
<a id="schema_PathPrefixHierarchy"></a>
<a id="tocSpathprefixhierarchy"></a>
<a id="tocspathprefixhierarchy"></a>

```json
[
  "EXECUTION_ID"
]
```

<h2 id="tocS_PortNumber">PortNumber</h2>
<!-- backwards compatibility -->
<a id="schemaportnumber"></a>
<a id="schema_PortNumber"></a>
<a id="tocSportnumber"></a>
<a id="tocsportnumber"></a>

```json
1
```

<h2 id="tocS_PrefixType">PrefixType</h2>
<!-- backwards compatibility -->
<a id="schemaprefixtype"></a>
<a id="schema_PrefixType"></a>
<a id="tocSprefixtype"></a>
<a id="tocsprefixtype"></a>

```json
"FILENAME"
```

<h2 id="tocS_PrefixFormat">PrefixFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprefixformat"></a>
<a id="schema_PrefixFormat"></a>
<a id="tocSprefixformat"></a>
<a id="tocsprefixformat"></a>

```json
"YEAR"
```

<h2 id="tocS_PrefixConfig">PrefixConfig</h2>
<!-- backwards compatibility -->
<a id="schemaprefixconfig"></a>
<a id="schema_PrefixConfig"></a>
<a id="tocSprefixconfig"></a>
<a id="tocsprefixconfig"></a>

```json
{
  "prefixType": {},
  "prefixFormat": {},
  "pathPrefixHierarchy": {}
}
```

Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefixType|object|false|none|none|
|prefixFormat|object|false|none|none|
|pathPrefixHierarchy|object|false|none|none|

<h2 id="tocS_PrivateConnectionProvisioningFailureCause">PrivateConnectionProvisioningFailureCause</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnectionprovisioningfailurecause"></a>
<a id="schema_PrivateConnectionProvisioningFailureCause"></a>
<a id="tocSprivateconnectionprovisioningfailurecause"></a>
<a id="tocsprivateconnectionprovisioningfailurecause"></a>

```json
"CONNECTOR_AUTHENTICATION"
```

<h2 id="tocS_PrivateConnectionProvisioningFailureMessage">PrivateConnectionProvisioningFailureMessage</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnectionprovisioningfailuremessage"></a>
<a id="schema_PrivateConnectionProvisioningFailureMessage"></a>
<a id="tocSprivateconnectionprovisioningfailuremessage"></a>
<a id="tocsprivateconnectionprovisioningfailuremessage"></a>

```json
"string"
```

<h2 id="tocS_PrivateConnectionProvisioningStatus">PrivateConnectionProvisioningStatus</h2>
<!-- backwards compatibility -->
<a id="schemaprivateconnectionprovisioningstatus"></a>
<a id="schema_PrivateConnectionProvisioningStatus"></a>
<a id="tocSprivateconnectionprovisioningstatus"></a>
<a id="tocsprivateconnectionprovisioningstatus"></a>

```json
"FAILED"
```

<h2 id="tocS_PrivateLinkServiceName">PrivateLinkServiceName</h2>
<!-- backwards compatibility -->
<a id="schemaprivatelinkservicename"></a>
<a id="schema_PrivateLinkServiceName"></a>
<a id="tocSprivatelinkservicename"></a>
<a id="tocsprivatelinkservicename"></a>

```json
"string"
```

<h2 id="tocS_ProfilePropertyValue">ProfilePropertyValue</h2>
<!-- backwards compatibility -->
<a id="schemaprofilepropertyvalue"></a>
<a id="schema_ProfilePropertyValue"></a>
<a id="tocSprofilepropertyvalue"></a>
<a id="tocsprofilepropertyvalue"></a>

```json
"string"
```

<h2 id="tocS_ProfilePropertyKey">ProfilePropertyKey</h2>
<!-- backwards compatibility -->
<a id="schemaprofilepropertykey"></a>
<a id="schema_ProfilePropertyKey"></a>
<a id="tocSprofilepropertykey"></a>
<a id="tocsprofilepropertykey"></a>

```json
"string"
```

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

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
"string"
```

<h2 id="tocS_WorkgroupName">WorkgroupName</h2>
<!-- backwards compatibility -->
<a id="schemaworkgroupname"></a>
<a id="schema_WorkgroupName"></a>
<a id="tocSworkgroupname"></a>
<a id="tocsworkgroupname"></a>

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

<h2 id="tocS_RegisterConnectorRequest">RegisterConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregisterconnectorrequest"></a>
<a id="schema_RegisterConnectorRequest"></a>
<a id="tocSregisterconnectorrequest"></a>
<a id="tocsregisterconnectorrequest"></a>

```json
{
  "connectorLabel": {},
  "description": {},
  "connectorProvisioningType": {},
  "connectorProvisioningConfig": {
    "lambda": {
      "lambdaArn": {}
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorLabel|object|false|none|none|
|description|object|false|none|none|
|connectorProvisioningType|object|false|none|none|
|connectorProvisioningConfig|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_S3OutputFormatConfig">S3OutputFormatConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3outputformatconfig"></a>
<a id="schema_S3OutputFormatConfig"></a>
<a id="tocSs3outputformatconfig"></a>
<a id="tocss3outputformatconfig"></a>

```json
{
  "fileType": {},
  "prefixConfig": {
    "prefixType": {},
    "prefixFormat": {},
    "pathPrefixHierarchy": {}
  },
  "aggregationConfig": {
    "aggregationType": {},
    "targetFileSize": {}
  },
  "preserveSourceDataTyping": {}
}
```

 The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileType|object|false|none|none|
|prefixConfig|object|false|none|none|
|aggregationConfig|[AggregationConfig](#schemaaggregationconfig)|false|none| The aggregation settings that you can use to customize the output format of your flow data. |
|preserveSourceDataTyping|object|false|none|none|

<h2 id="tocS_S3InputFileType">S3InputFileType</h2>
<!-- backwards compatibility -->
<a id="schemas3inputfiletype"></a>
<a id="schema_S3InputFileType"></a>
<a id="tocSs3inputfiletype"></a>
<a id="tocss3inputfiletype"></a>

```json
"CSV"
```

<h2 id="tocS_S3InputFormatConfig">S3InputFormatConfig</h2>
<!-- backwards compatibility -->
<a id="schemas3inputformatconfig"></a>
<a id="schema_S3InputFormatConfig"></a>
<a id="tocSs3inputformatconfig"></a>
<a id="tocss3inputformatconfig"></a>

```json
{
  "s3InputFileType": {}
}
```

 When you use Amazon S3 as the source, the configuration format that you provide the flow input data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|s3InputFileType|object|false|none|none|

<h2 id="tocS_S3SourceProperties">S3SourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemas3sourceproperties"></a>
<a id="schema_S3SourceProperties"></a>
<a id="tocSs3sourceproperties"></a>
<a id="tocss3sourceproperties"></a>

```json
{
  "bucketName": {},
  "bucketPrefix": {},
  "s3InputFormatConfig": {
    "s3InputFileType": {}
  }
}
```

 The properties that are applied when Amazon S3 is being used as the flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|object|true|none|none|
|bucketPrefix|object|false|none|none|
|s3InputFormatConfig|[S3InputFormatConfig](#schemas3inputformatconfig)|false|none| When you use Amazon S3 as the source, the configuration format that you provide the flow input data. |

<h2 id="tocS_SuccessResponseHandlingConfig">SuccessResponseHandlingConfig</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponsehandlingconfig"></a>
<a id="schema_SuccessResponseHandlingConfig"></a>
<a id="tocSsuccessresponsehandlingconfig"></a>
<a id="tocssuccessresponsehandlingconfig"></a>

```json
{
  "bucketPrefix": {},
  "bucketName": {}
}
```

<p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketPrefix|object|false|none|none|
|bucketName|object|false|none|none|

<h2 id="tocS_SAPODataSourceProperties">SAPODataSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemasapodatasourceproperties"></a>
<a id="schema_SAPODataSourceProperties"></a>
<a id="tocSsapodatasourceproperties"></a>
<a id="tocssapodatasourceproperties"></a>

```json
{
  "objectPath": {}
}
```

 The properties that are applied when using SAPOData as a flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectPath|object|false|none|none|

<h2 id="tocS_SalesforceDataTransferApi">SalesforceDataTransferApi</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcedatatransferapi"></a>
<a id="schema_SalesforceDataTransferApi"></a>
<a id="tocSsalesforcedatatransferapi"></a>
<a id="tocssalesforcedatatransferapi"></a>

```json
"AUTOMATIC"
```

<h2 id="tocS_SalesforceDataTransferApiList">SalesforceDataTransferApiList</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcedatatransferapilist"></a>
<a id="schema_SalesforceDataTransferApiList"></a>
<a id="tocSsalesforcedatatransferapilist"></a>
<a id="tocssalesforcedatatransferapilist"></a>

```json
[
  "AUTOMATIC"
]
```

<h2 id="tocS_SalesforceSourceProperties">SalesforceSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemasalesforcesourceproperties"></a>
<a id="schema_SalesforceSourceProperties"></a>
<a id="tocSsalesforcesourceproperties"></a>
<a id="tocssalesforcesourceproperties"></a>

```json
{
  "object": {},
  "enableDynamicFieldUpdate": {},
  "includeDeletedRecords": {},
  "dataTransferApi": {}
}
```

 The properties that are applied when Salesforce is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|enableDynamicFieldUpdate|object|false|none|none|
|includeDeletedRecords|object|false|none|none|
|dataTransferApi|object|false|none|none|

<h2 id="tocS_ScheduleExpression">ScheduleExpression</h2>
<!-- backwards compatibility -->
<a id="schemascheduleexpression"></a>
<a id="schema_ScheduleExpression"></a>
<a id="tocSscheduleexpression"></a>
<a id="tocsscheduleexpression"></a>

```json
"string"
```

<h2 id="tocS_ScheduleFrequencyType">ScheduleFrequencyType</h2>
<!-- backwards compatibility -->
<a id="schemaschedulefrequencytype"></a>
<a id="schema_ScheduleFrequencyType"></a>
<a id="tocSschedulefrequencytype"></a>
<a id="tocsschedulefrequencytype"></a>

```json
"BYMINUTE"
```

<h2 id="tocS_ScheduleOffset">ScheduleOffset</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoffset"></a>
<a id="schema_ScheduleOffset"></a>
<a id="tocSscheduleoffset"></a>
<a id="tocsscheduleoffset"></a>

```json
0
```

<h2 id="tocS_Timezone">Timezone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_Timezone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
"string"
```

<h2 id="tocS_ScheduledTriggerProperties">ScheduledTriggerProperties</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtriggerproperties"></a>
<a id="schema_ScheduledTriggerProperties"></a>
<a id="tocSscheduledtriggerproperties"></a>
<a id="tocsscheduledtriggerproperties"></a>

```json
{
  "scheduleExpression": {},
  "dataPullMode": {},
  "scheduleStartTime": {},
  "scheduleEndTime": {},
  "timezone": {},
  "scheduleOffset": {},
  "firstExecutionFrom": {},
  "flowErrorDeactivationThreshold": {}
}
```

 Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduleExpression|object|true|none|none|
|dataPullMode|object|false|none|none|
|scheduleStartTime|object|false|none|none|
|scheduleEndTime|object|false|none|none|
|timezone|object|false|none|none|
|scheduleOffset|object|false|none|none|
|firstExecutionFrom|object|false|none|none|
|flowErrorDeactivationThreshold|object|false|none|none|

<h2 id="tocS_ServiceNowSourceProperties">ServiceNowSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaservicenowsourceproperties"></a>
<a id="schema_ServiceNowSourceProperties"></a>
<a id="tocSservicenowsourceproperties"></a>
<a id="tocsservicenowsourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when ServiceNow is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_SingularSourceProperties">SingularSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemasingularsourceproperties"></a>
<a id="schema_SingularSourceProperties"></a>
<a id="tocSsingularsourceproperties"></a>
<a id="tocssingularsourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Singular is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_SlackSourceProperties">SlackSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaslacksourceproperties"></a>
<a id="schema_SlackSourceProperties"></a>
<a id="tocSslacksourceproperties"></a>
<a id="tocsslacksourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when Slack is being used as a source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_Warehouse">Warehouse</h2>
<!-- backwards compatibility -->
<a id="schemawarehouse"></a>
<a id="schema_Warehouse"></a>
<a id="tocSwarehouse"></a>
<a id="tocswarehouse"></a>

```json
"string"
```

<h2 id="tocS_Stage">Stage</h2>
<!-- backwards compatibility -->
<a id="schemastage"></a>
<a id="schema_Stage"></a>
<a id="tocSstage"></a>
<a id="tocsstage"></a>

```json
"string"
```

<h2 id="tocS_TrendmicroSourceProperties">TrendmicroSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schematrendmicrosourceproperties"></a>
<a id="schema_TrendmicroSourceProperties"></a>
<a id="tocStrendmicrosourceproperties"></a>
<a id="tocstrendmicrosourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when using Trend Micro as a flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_VeevaSourceProperties">VeevaSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemaveevasourceproperties"></a>
<a id="schema_VeevaSourceProperties"></a>
<a id="tocSveevasourceproperties"></a>
<a id="tocsveevasourceproperties"></a>

```json
{
  "object": {},
  "documentType": {},
  "includeSourceFiles": {},
  "includeRenditions": {},
  "includeAllVersions": {}
}
```

 The properties that are applied when using Veeva as a flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|
|documentType|object|false|none|none|
|includeSourceFiles|object|false|none|none|
|includeRenditions|object|false|none|none|
|includeAllVersions|object|false|none|none|

<h2 id="tocS_ZendeskSourceProperties">ZendeskSourceProperties</h2>
<!-- backwards compatibility -->
<a id="schemazendesksourceproperties"></a>
<a id="schema_ZendeskSourceProperties"></a>
<a id="tocSzendesksourceproperties"></a>
<a id="tocszendesksourceproperties"></a>

```json
{
  "object": {}
}
```

 The properties that are applied when using Zendesk as a flow source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|object|true|none|none|

<h2 id="tocS_SourceFields">SourceFields</h2>
<!-- backwards compatibility -->
<a id="schemasourcefields"></a>
<a id="schema_SourceFields"></a>
<a id="tocSsourcefields"></a>
<a id="tocssourcefields"></a>

```json
[
  "string"
]
```

<h2 id="tocS_StartFlowRequest">StartFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartflowrequest"></a>
<a id="schema_StartFlowRequest"></a>
<a id="tocSstartflowrequest"></a>
<a id="tocsstartflowrequest"></a>

```json
{
  "flowName": {},
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_StopFlowRequest">StopFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopflowrequest"></a>
<a id="schema_StopFlowRequest"></a>
<a id="tocSstopflowrequest"></a>
<a id="tocsstopflowrequest"></a>

```json
{
  "flowName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|

<h2 id="tocS_SupportedApiVersion">SupportedApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemasupportedapiversion"></a>
<a id="schema_SupportedApiVersion"></a>
<a id="tocSsupportedapiversion"></a>
<a id="tocssupportedapiversion"></a>

```json
"string"
```

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

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

<h2 id="tocS_TaskType">TaskType</h2>
<!-- backwards compatibility -->
<a id="schematasktype"></a>
<a id="schema_TaskType"></a>
<a id="tocStasktype"></a>
<a id="tocstasktype"></a>

```json
"Arithmetic"
```

<h2 id="tocS_TaskPropertiesMap">TaskPropertiesMap</h2>
<!-- backwards compatibility -->
<a id="schemataskpropertiesmap"></a>
<a id="schema_TaskPropertiesMap"></a>
<a id="tocStaskpropertiesmap"></a>
<a id="tocstaskpropertiesmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Property](#schemaproperty)|false|none|none|

<h2 id="tocS_UnregisterConnectorRequest">UnregisterConnectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunregisterconnectorrequest"></a>
<a id="schema_UnregisterConnectorRequest"></a>
<a id="tocSunregisterconnectorrequest"></a>
<a id="tocsunregisterconnectorrequest"></a>

```json
{
  "connectorLabel": {},
  "forceDelete": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorLabel|object|true|none|none|
|forceDelete|object|false|none|none|

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateConnectorProfileRequest">UpdateConnectorProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorprofilerequest"></a>
<a id="schema_UpdateConnectorProfileRequest"></a>
<a id="tocSupdateconnectorprofilerequest"></a>
<a id="tocsupdateconnectorprofilerequest"></a>

```json
{
  "connectorProfileName": {},
  "connectionMode": {},
  "connectorProfileConfig": {
    "connectorProfileProperties": {
      "Amplitude": {},
      "Datadog": {
        "instanceUrl": {}
      },
      "Dynatrace": {
        "instanceUrl": {}
      },
      "GoogleAnalytics": {},
      "Honeycode": {},
      "InforNexus": {
        "instanceUrl": {}
      },
      "Marketo": {
        "instanceUrl": {}
      },
      "Redshift": {
        "databaseUrl": {},
        "bucketName": {},
        "bucketPrefix": {},
        "roleArn": {},
        "dataApiRoleArn": {},
        "isRedshiftServerless": {},
        "clusterIdentifier": {},
        "workgroupName": {},
        "databaseName": {}
      },
      "Salesforce": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "usePrivateLinkForMetadataAndAuthorization": {}
      },
      "ServiceNow": {
        "instanceUrl": {}
      },
      "Singular": {},
      "Slack": {
        "instanceUrl": {}
      },
      "Snowflake": {
        "warehouse": {},
        "stage": {},
        "bucketName": {},
        "bucketPrefix": {},
        "privateLinkServiceName": {},
        "accountName": {},
        "region": {}
      },
      "Trendmicro": {},
      "Veeva": {
        "instanceUrl": {}
      },
      "Zendesk": {
        "instanceUrl": {}
      },
      "SAPOData": {
        "applicationHostUrl": {},
        "applicationServicePath": {},
        "portNumber": {},
        "clientNumber": {},
        "logonLanguage": {},
        "privateLinkServiceName": {},
        "oAuthProperties": {
          "tokenUrl": {},
          "authCodeUrl": {},
          "oAuthScopes": {}
        }
      },
      "CustomConnector": {
        "profileProperties": {
          "property1": "string",
          "property2": "string"
        },
        "oAuth2Properties": {
          "tokenUrl": {},
          "oAuth2GrantType": {},
          "tokenUrlCustomProperties": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "Pardot": {
        "instanceUrl": {},
        "isSandboxEnvironment": {},
        "businessUnitId": {}
      }
    },
    "connectorProfileCredentials": {
      "Amplitude": {
        "apiKey": {},
        "secretKey": {}
      },
      "Datadog": {
        "apiKey": {},
        "applicationKey": {}
      },
      "Dynatrace": {
        "apiToken": {}
      },
      "GoogleAnalytics": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Honeycode": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "InforNexus": {
        "accessKeyId": {},
        "userId": {},
        "secretAccessKey": {},
        "datakey": {}
      },
      "Marketo": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Redshift": {
        "username": {},
        "password": {}
      },
      "Salesforce": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      },
      "ServiceNow": {
        "username": {},
        "password": {}
      },
      "Singular": {
        "apiKey": {}
      },
      "Slack": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "Snowflake": {
        "username": {},
        "password": {}
      },
      "Trendmicro": {
        "apiSecretKey": {}
      },
      "Veeva": {
        "username": {},
        "password": {}
      },
      "Zendesk": {
        "clientId": {},
        "clientSecret": {},
        "accessToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        }
      },
      "SAPOData": {
        "basicAuthCredentials": {
          "username": {},
          "password": {}
        },
        "oAuthCredentials": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        }
      },
      "CustomConnector": {
        "authenticationType": {},
        "basic": {
          "username": {},
          "password": {}
        },
        "oauth2": {
          "clientId": {},
          "clientSecret": {},
          "accessToken": {},
          "refreshToken": {},
          "oAuthRequest": {
            "authCode": {},
            "redirectUri": {}
          }
        },
        "apiKey": {
          "apiKey": {},
          "apiSecretKey": {}
        },
        "custom": {
          "customAuthenticationType": {},
          "credentialsMap": {
            "property1": "password",
            "property2": "password"
          }
        }
      },
      "Pardot": {
        "accessToken": {},
        "refreshToken": {},
        "oAuthRequest": {
          "authCode": {},
          "redirectUri": {}
        },
        "clientCredentialsArn": {}
      }
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorProfileName|object|true|none|none|
|connectionMode|object|true|none|none|
|connectorProfileConfig|object|true|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateConnectorRegistrationRequest">UpdateConnectorRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconnectorregistrationrequest"></a>
<a id="schema_UpdateConnectorRegistrationRequest"></a>
<a id="tocSupdateconnectorregistrationrequest"></a>
<a id="tocsupdateconnectorregistrationrequest"></a>

```json
{
  "connectorLabel": {},
  "description": {},
  "connectorProvisioningConfig": {
    "lambda": {
      "lambdaArn": {}
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectorLabel|object|true|none|none|
|description|object|false|none|none|
|connectorProvisioningConfig|[ConnectorProvisioningConfig](#schemaconnectorprovisioningconfig)|false|none|Contains information about the configuration of the connector being registered.|
|clientToken|object|false|none|none|

<h2 id="tocS_UpdateFlowRequest">UpdateFlowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateflowrequest"></a>
<a id="schema_UpdateFlowRequest"></a>
<a id="tocSupdateflowrequest"></a>
<a id="tocsupdateflowrequest"></a>

```json
{
  "flowName": {},
  "description": {},
  "triggerConfig": {
    "triggerType": {},
    "triggerProperties": {
      "Scheduled": {
        "scheduleExpression": {},
        "dataPullMode": {},
        "scheduleStartTime": {},
        "scheduleEndTime": {},
        "timezone": {},
        "scheduleOffset": {},
        "firstExecutionFrom": {},
        "flowErrorDeactivationThreshold": {}
      }
    }
  },
  "sourceFlowConfig": {
    "connectorType": {},
    "apiVersion": {},
    "connectorProfileName": {},
    "sourceConnectorProperties": {
      "Amplitude": {
        "object": {}
      },
      "Datadog": {
        "object": {}
      },
      "Dynatrace": {
        "object": {}
      },
      "GoogleAnalytics": {
        "object": {}
      },
      "InforNexus": {
        "object": {}
      },
      "Marketo": {
        "object": {}
      },
      "S3": {
        "bucketName": {},
        "bucketPrefix": {},
        "s3InputFormatConfig": {
          "s3InputFileType": {}
        }
      },
      "Salesforce": {
        "object": {},
        "enableDynamicFieldUpdate": {},
        "includeDeletedRecords": {},
        "dataTransferApi": {}
      },
      "ServiceNow": {
        "object": {}
      },
      "Singular": {
        "object": {}
      },
      "Slack": {
        "object": {}
      },
      "Trendmicro": {
        "object": {}
      },
      "Veeva": {
        "object": {},
        "documentType": {},
        "includeSourceFiles": {},
        "includeRenditions": {},
        "includeAllVersions": {}
      },
      "Zendesk": {
        "object": {}
      },
      "SAPOData": {
        "objectPath": {}
      },
      "CustomConnector": {
        "entityName": {},
        "customProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "Pardot": {
        "object": {}
      }
    },
    "incrementalPullConfig": {
      "datetimeTypeFieldName": {}
    }
  },
  "destinationFlowConfigList": {},
  "tasks": {},
  "metadataCatalogConfig": {
    "glueDataCatalog": {
      "roleArn": {},
      "databaseName": {},
      "tablePrefix": {}
    }
  },
  "clientToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowName|object|true|none|none|
|description|object|false|none|none|
|triggerConfig|object|true|none|none|
|sourceFlowConfig|[SourceFlowConfig](#schemasourceflowconfig)|true|none| Contains information about the configuration of the source connector used in the flow. |
|destinationFlowConfigList|object|true|none|none|
|tasks|object|true|none|none|
|metadataCatalogConfig|object|false|none|none|
|clientToken|object|false|none|none|

<h2 id="tocS_UpsolverBucketName">UpsolverBucketName</h2>
<!-- backwards compatibility -->
<a id="schemaupsolverbucketname"></a>
<a id="schema_UpsolverBucketName"></a>
<a id="tocSupsolverbucketname"></a>
<a id="tocsupsolverbucketname"></a>

```json
"stringstringstri"
```

<h2 id="tocS_UpsolverS3OutputFormatConfig">UpsolverS3OutputFormatConfig</h2>
<!-- backwards compatibility -->
<a id="schemaupsolvers3outputformatconfig"></a>
<a id="schema_UpsolverS3OutputFormatConfig"></a>
<a id="tocSupsolvers3outputformatconfig"></a>
<a id="tocsupsolvers3outputformatconfig"></a>

```json
{
  "fileType": {},
  "prefixConfig": {
    "prefixType": {},
    "prefixFormat": {},
    "pathPrefixHierarchy": {}
  },
  "aggregationConfig": {
    "aggregationType": {},
    "targetFileSize": {}
  }
}
```

 The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileType|object|false|none|none|
|prefixConfig|[PrefixConfig](#schemaprefixconfig)|true|none|Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.|
|aggregationConfig|[AggregationConfig](#schemaaggregationconfig)|false|none| The aggregation settings that you can use to customize the output format of your flow data. |
