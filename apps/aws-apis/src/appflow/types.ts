type SAPODataConnectorProfileProperties = {
  applicationHostUrl: {}
  applicationServicePath: {}
  portNumber: {}
  clientNumber: {}
  logonLanguage?: {} | undefined
  privateLinkServiceName?: {} | undefined
  oAuthProperties?: { tokenUrl: {}; authCodeUrl: {}; oAuthScopes: {} } | undefined
}
type OAuth2Properties = {
  tokenUrl: {}
  oAuth2GrantType: {}
  tokenUrlCustomProperties?: {} | undefined
}
type ConnectorOAuthRequest = { authCode?: {} | undefined; redirectUri?: {} | undefined }
type SAPODataConnectorProfileCredentials = {
  basicAuthCredentials?: { username: {}; password: {} } | undefined
  oAuthCredentials?:
    | {
        clientId: {}
        clientSecret: {}
        accessToken?: {} | undefined
        refreshToken?: {} | undefined
        oAuthRequest?: { authCode?: {} | undefined; redirectUri?: {} | undefined } | undefined
      }
    | undefined
}
type CustomConnectorProfileCredentials = {
  authenticationType: {}
  basic?: { username: {}; password: {} } | undefined
  oauth2?:
    | {
        clientId?: {} | undefined
        clientSecret?: {} | undefined
        accessToken?: {} | undefined
        refreshToken?: {} | undefined
        oAuthRequest?: ConnectorOAuthRequest | undefined
      }
    | undefined
  apiKey?: { apiKey: {}; apiSecretKey?: {} | undefined } | undefined
  custom?: { customAuthenticationType: {}; credentialsMap?: {} | undefined } | undefined
}
type CreateConnectorProfileResponse = { connectorProfileArn?: {} | undefined }
type S3InputFormatConfig = { s3InputFileType?: {} | undefined }
type SAPODataSourceProperties = { objectPath?: {} | undefined }
type CustomConnectorSourceProperties = { entityName: {}; customProperties?: {} | undefined }
type AggregationConfig = { aggregationType?: {} | undefined; targetFileSize?: {} | undefined }
type S3OutputFormatConfig = {
  fileType?: {} | undefined
  prefixConfig?:
    | {
        prefixType?: {} | undefined
        prefixFormat?: {} | undefined
        pathPrefixHierarchy?: {} | undefined
      }
    | undefined
  aggregationConfig?: AggregationConfig | undefined
  preserveSourceDataTyping?: {} | undefined
}
type ErrorHandlingConfig = {
  failOnFirstDestinationError?: {} | undefined
  bucketPrefix?: {} | undefined
  bucketName?: {} | undefined
}
type PrefixConfig = {
  prefixType?: {} | undefined
  prefixFormat?: {} | undefined
  pathPrefixHierarchy?: {} | undefined
}
type Name = string
type IdFieldNameList = Name[]
type WriteOperationType = 'INSERT' | 'UPSERT' | 'UPDATE' | 'DELETE'
type DestinationFlowConfig = {
  connectorType: {}
  apiVersion?: {} | undefined
  connectorProfileName?: {} | undefined
  destinationConnectorProperties: {
    Redshift?:
      | {
          object: {}
          intermediateBucketName: {}
          bucketPrefix?: {} | undefined
          errorHandlingConfig?:
            | {
                failOnFirstDestinationError?: {} | undefined
                bucketPrefix?: {} | undefined
                bucketName?: {} | undefined
              }
            | undefined
        }
      | undefined
    S3?:
      | {
          bucketName: {}
          bucketPrefix?: {} | undefined
          s3OutputFormatConfig?: S3OutputFormatConfig | undefined
        }
      | undefined
    Salesforce?:
      | {
          object: {}
          idFieldNames?: {} | undefined
          errorHandlingConfig?:
            | {
                failOnFirstDestinationError?: {} | undefined
                bucketPrefix?: {} | undefined
                bucketName?: {} | undefined
              }
            | undefined
          writeOperationType?: {} | undefined
          dataTransferApi?: {} | undefined
        }
      | undefined
    Snowflake?:
      | {
          object: {}
          intermediateBucketName: {}
          bucketPrefix?: {} | undefined
          errorHandlingConfig?:
            | {
                failOnFirstDestinationError?: {} | undefined
                bucketPrefix?: {} | undefined
                bucketName?: {} | undefined
              }
            | undefined
        }
      | undefined
    EventBridge?: { object: {}; errorHandlingConfig?: ErrorHandlingConfig | undefined } | undefined
    LookoutMetrics?: {} | undefined
    Upsolver?:
      | {
          bucketName: {}
          bucketPrefix?: {} | undefined
          s3OutputFormatConfig: {
            fileType?: {} | undefined
            prefixConfig: PrefixConfig
            aggregationConfig?: AggregationConfig | undefined
          }
        }
      | undefined
    Honeycode?: { object: {}; errorHandlingConfig?: ErrorHandlingConfig | undefined } | undefined
    CustomerProfiles?: { domainName: {}; objectTypeName?: {} | undefined } | undefined
    Zendesk?:
      | {
          object: {}
          idFieldNames?: IdFieldNameList | undefined
          errorHandlingConfig?: ErrorHandlingConfig | undefined
          writeOperationType?: WriteOperationType | undefined
        }
      | undefined
    Marketo?: { object: {}; errorHandlingConfig?: ErrorHandlingConfig | undefined } | undefined
    CustomConnector?:
      | {
          entityName: {}
          errorHandlingConfig?:
            | {
                failOnFirstDestinationError?: {} | undefined
                bucketPrefix?: {} | undefined
                bucketName?: {} | undefined
              }
            | undefined
          writeOperationType?: {} | undefined
          idFieldNames?: {} | undefined
          customProperties?: {} | undefined
        }
      | undefined
    SAPOData?:
      | {
          objectPath: {}
          successResponseHandlingConfig?:
            | { bucketPrefix?: {} | undefined; bucketName?: {} | undefined }
            | undefined
          idFieldNames?: IdFieldNameList | undefined
          errorHandlingConfig?: ErrorHandlingConfig | undefined
          writeOperationType?: WriteOperationType | undefined
        }
      | undefined
  }
}
type Task = {
  sourceFields: {}
  connectorOperator?:
    | {
        Amplitude?: {} | undefined
        Datadog?: {} | undefined
        Dynatrace?: {} | undefined
        GoogleAnalytics?: {} | undefined
        InforNexus?: {} | undefined
        Marketo?: {} | undefined
        S3?: {} | undefined
        Salesforce?: {} | undefined
        ServiceNow?: {} | undefined
        Singular?: {} | undefined
        Slack?: {} | undefined
        Trendmicro?: {} | undefined
        Veeva?: {} | undefined
        Zendesk?: {} | undefined
        SAPOData?: {} | undefined
        CustomConnector?: {} | undefined
        Pardot?: {} | undefined
      }
    | undefined
  destinationField?: {} | undefined
  taskType: {}
  taskProperties?: {} | undefined
}
type TagValue = string
type CreateFlowResponse = { flowArn?: {} | undefined; flowStatus?: {} | undefined }
type DeleteConnectorProfileResponse = { [x: string]: unknown }
type DeleteFlowResponse = { [x: string]: unknown }
type SAPODataMetadata = { [x: string]: unknown }
type DescribeConnectorResponse = {
  connectorConfiguration?:
    | {
        canUseAsSource?: {} | undefined
        canUseAsDestination?: {} | undefined
        supportedDestinationConnectors?: {} | undefined
        supportedSchedulingFrequencies?: {} | undefined
        isPrivateLinkEnabled?: {} | undefined
        isPrivateLinkEndpointUrlRequired?: {} | undefined
        supportedTriggerTypes?: {} | undefined
        connectorMetadata?:
          | {
              Amplitude?: {} | undefined
              Datadog?: {} | undefined
              Dynatrace?: {} | undefined
              GoogleAnalytics?: { oAuthScopes?: {} | undefined } | undefined
              InforNexus?: {} | undefined
              Marketo?: {} | undefined
              Redshift?: {} | undefined
              S3?: {} | undefined
              Salesforce?:
                | { oAuthScopes?: {} | undefined; dataTransferApis?: {} | undefined }
                | undefined
              ServiceNow?: {} | undefined
              Singular?: {} | undefined
              Slack?: { oAuthScopes?: {} | undefined } | undefined
              Snowflake?: { supportedRegions?: {} | undefined } | undefined
              Trendmicro?: {} | undefined
              Veeva?: {} | undefined
              Zendesk?: { oAuthScopes?: {} | undefined } | undefined
              EventBridge?: {} | undefined
              Upsolver?: {} | undefined
              CustomerProfiles?: {} | undefined
              Honeycode?: { oAuthScopes?: {} | undefined } | undefined
              SAPOData?: SAPODataMetadata | undefined
              Pardot?: {} | undefined
            }
          | undefined
        connectorType?: {} | undefined
        connectorLabel?: {} | undefined
        connectorDescription?: {} | undefined
        connectorOwner?: {} | undefined
        connectorName?: {} | undefined
        connectorVersion?: {} | undefined
        connectorArn?: {} | undefined
        connectorModes?: {} | undefined
        authenticationConfig?:
          | {
              isBasicAuthSupported?: {} | undefined
              isApiKeyAuthSupported?: {} | undefined
              isOAuth2Supported?: {} | undefined
              isCustomAuthSupported?: {} | undefined
              oAuth2Defaults?:
                | {
                    oauthScopes?: {} | undefined
                    tokenUrls?: {} | undefined
                    authCodeUrls?: {} | undefined
                    oauth2GrantTypesSupported?: {} | undefined
                    oauth2CustomProperties?: {} | undefined
                  }
                | undefined
              customAuthConfigs?: {} | undefined
            }
          | undefined
        connectorRuntimeSettings?: {} | undefined
        supportedApiVersions?: {} | undefined
        supportedOperators?: {} | undefined
        supportedWriteOperations?: {} | undefined
        connectorProvisioningType?: {} | undefined
        connectorProvisioningConfig?: { lambda?: { lambdaArn: {} } | undefined } | undefined
        logoURL?: {} | undefined
        registeredAt?: {} | undefined
        registeredBy?: {} | undefined
      }
    | undefined
}
type DescribeConnectorEntityResponse = { connectorEntityFields: {} }
type ConnectorProfileName = string
type DescribeConnectorProfilesResponse = {
  connectorProfileDetails?: {} | undefined
  nextToken?: {} | undefined
}
type ConnectorType =
  | 'Salesforce'
  | 'Singular'
  | 'Slack'
  | 'Redshift'
  | 'S3'
  | 'Marketo'
  | 'Googleanalytics'
  | 'Zendesk'
  | 'Servicenow'
  | 'Datadog'
  | 'Trendmicro'
  | 'Snowflake'
  | 'Dynatrace'
  | 'Infornexus'
  | 'Amplitude'
  | 'Veeva'
  | 'EventBridge'
  | 'LookoutMetrics'
  | 'Upsolver'
  | 'Honeycode'
  | 'CustomerProfiles'
  | 'SAPOData'
  | 'CustomConnector'
  | 'Pardot'
type DescribeConnectorsResponse = {
  connectorConfigurations?: {} | undefined
  connectors?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeFlowResponse = {
  flowArn?: {} | undefined
  description?: {} | undefined
  flowName?: {} | undefined
  kmsArn?: {} | undefined
  flowStatus?: {} | undefined
  flowStatusMessage?: {} | undefined
  sourceFlowConfig?:
    | {
        connectorType: {}
        apiVersion?: {} | undefined
        connectorProfileName?: {} | undefined
        sourceConnectorProperties: {
          Amplitude?: { object: {} } | undefined
          Datadog?: { object: {} } | undefined
          Dynatrace?: { object: {} } | undefined
          GoogleAnalytics?: { object: {} } | undefined
          InforNexus?: { object: {} } | undefined
          Marketo?: { object: {} } | undefined
          S3?:
            | {
                bucketName: {}
                bucketPrefix?: {} | undefined
                s3InputFormatConfig?: S3InputFormatConfig | undefined
              }
            | undefined
          Salesforce?:
            | {
                object: {}
                enableDynamicFieldUpdate?: {} | undefined
                includeDeletedRecords?: {} | undefined
                dataTransferApi?: {} | undefined
              }
            | undefined
          ServiceNow?: { object: {} } | undefined
          Singular?: { object: {} } | undefined
          Slack?: { object: {} } | undefined
          Trendmicro?: { object: {} } | undefined
          Veeva?:
            | {
                object: {}
                documentType?: {} | undefined
                includeSourceFiles?: {} | undefined
                includeRenditions?: {} | undefined
                includeAllVersions?: {} | undefined
              }
            | undefined
          Zendesk?: { object: {} } | undefined
          SAPOData?: SAPODataSourceProperties | undefined
          CustomConnector?: CustomConnectorSourceProperties | undefined
          Pardot?: { object: {} } | undefined
        }
        incrementalPullConfig?: { datetimeTypeFieldName?: {} | undefined } | undefined
      }
    | undefined
  destinationFlowConfigList?: {} | undefined
  lastRunExecutionDetails?:
    | {
        mostRecentExecutionMessage?: {} | undefined
        mostRecentExecutionTime?: {} | undefined
        mostRecentExecutionStatus?: {} | undefined
      }
    | undefined
  triggerConfig?:
    | {
        triggerType: {}
        triggerProperties?:
          | {
              Scheduled?:
                | {
                    scheduleExpression: {}
                    dataPullMode?: {} | undefined
                    scheduleStartTime?: {} | undefined
                    scheduleEndTime?: {} | undefined
                    timezone?: {} | undefined
                    scheduleOffset?: {} | undefined
                    firstExecutionFrom?: {} | undefined
                    flowErrorDeactivationThreshold?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  tasks?: {} | undefined
  createdAt?: {} | undefined
  lastUpdatedAt?: {} | undefined
  createdBy?: {} | undefined
  lastUpdatedBy?: {} | undefined
  tags?: {} | undefined
  metadataCatalogConfig?:
    | { glueDataCatalog?: { roleArn: {}; databaseName: {}; tablePrefix: {} } | undefined }
    | undefined
  lastRunMetadataCatalogDetails?: {} | undefined
  schemaVersion?: {} | undefined
}
type DescribeFlowExecutionRecordsResponse = {
  flowExecutions?: {} | undefined
  nextToken?: {} | undefined
}
type ListConnectorEntitiesResponse = { connectorEntityMap: {}; nextToken?: {} | undefined }
type ListConnectorsResponse = { connectors?: {} | undefined; nextToken?: {} | undefined }
type ListFlowsResponse = { flows?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type RegisterConnectorResponse = { connectorArn?: {} | undefined }
type StartFlowResponse = {
  flowArn?: {} | undefined
  flowStatus?: {} | undefined
  executionId?: {} | undefined
}
type StopFlowResponse = { flowArn?: {} | undefined; flowStatus?: {} | undefined }
type UnregisterConnectorResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateConnectorProfileResponse = { connectorProfileArn?: {} | undefined }
type UpdateConnectorRegistrationResponse = { connectorArn?: {} | undefined }
type UpdateFlowResponse = { flowStatus?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/create-connector-profile': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorProfileName: string
            kmsArn?: string | undefined
            connectorType:
              | 'Salesforce'
              | 'Singular'
              | 'Slack'
              | 'Redshift'
              | 'S3'
              | 'Marketo'
              | 'Googleanalytics'
              | 'Zendesk'
              | 'Servicenow'
              | 'Datadog'
              | 'Trendmicro'
              | 'Snowflake'
              | 'Dynatrace'
              | 'Infornexus'
              | 'Amplitude'
              | 'Veeva'
              | 'EventBridge'
              | 'LookoutMetrics'
              | 'Upsolver'
              | 'Honeycode'
              | 'CustomerProfiles'
              | 'SAPOData'
              | 'CustomConnector'
              | 'Pardot'
            connectorLabel?: string | undefined
            connectionMode: 'Public' | 'Private'
            connectorProfileConfig: {
              connectorProfileProperties?:
                | {
                    Amplitude?: {} | undefined
                    Datadog?: { instanceUrl: {} } | undefined
                    Dynatrace?: { instanceUrl: {} } | undefined
                    GoogleAnalytics?: {} | undefined
                    Honeycode?: {} | undefined
                    InforNexus?: { instanceUrl: {} } | undefined
                    Marketo?: { instanceUrl: {} } | undefined
                    Redshift?:
                      | {
                          databaseUrl?: {} | undefined
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          roleArn: {}
                          dataApiRoleArn?: {} | undefined
                          isRedshiftServerless?: {} | undefined
                          clusterIdentifier?: {} | undefined
                          workgroupName?: {} | undefined
                          databaseName?: {} | undefined
                        }
                      | undefined
                    Salesforce?:
                      | {
                          instanceUrl?: {} | undefined
                          isSandboxEnvironment?: {} | undefined
                          usePrivateLinkForMetadataAndAuthorization?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { instanceUrl: {} } | undefined
                    Singular?: {} | undefined
                    Slack?: { instanceUrl: {} } | undefined
                    Snowflake?:
                      | {
                          warehouse: {}
                          stage: {}
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          privateLinkServiceName?: {} | undefined
                          accountName?: {} | undefined
                          region?: {} | undefined
                        }
                      | undefined
                    Trendmicro?: {} | undefined
                    Veeva?: { instanceUrl: {} } | undefined
                    Zendesk?: { instanceUrl: {} } | undefined
                    SAPOData?: SAPODataConnectorProfileProperties | undefined
                    CustomConnector?:
                      | {
                          profileProperties?: {} | undefined
                          oAuth2Properties?: OAuth2Properties | undefined
                        }
                      | undefined
                    Pardot?:
                      | {
                          instanceUrl?: {} | undefined
                          isSandboxEnvironment?: {} | undefined
                          businessUnitId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              connectorProfileCredentials?:
                | {
                    Amplitude?: { apiKey: {}; secretKey: {} } | undefined
                    Datadog?: { apiKey: {}; applicationKey: {} } | undefined
                    Dynatrace?: { apiToken: {} } | undefined
                    GoogleAnalytics?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Honeycode?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?: ConnectorOAuthRequest | undefined
                        }
                      | undefined
                    InforNexus?:
                      | { accessKeyId: {}; userId: {}; secretAccessKey: {}; datakey: {} }
                      | undefined
                    Marketo?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Redshift?: { username?: {} | undefined; password?: {} | undefined } | undefined
                    Salesforce?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                          clientCredentialsArn?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { username: {}; password: {} } | undefined
                    Singular?: { apiKey: {} } | undefined
                    Slack?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Snowflake?: { username: {}; password: {} } | undefined
                    Trendmicro?: { apiSecretKey: {} } | undefined
                    Veeva?: { username: {}; password: {} } | undefined
                    Zendesk?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    SAPOData?: SAPODataConnectorProfileCredentials | undefined
                    CustomConnector?: CustomConnectorProfileCredentials | undefined
                    Pardot?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?: ConnectorOAuthRequest | undefined
                          clientCredentialsArn?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            clientToken?: string | undefined
          }
        }
        output: CreateConnectorProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/create-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            flowName: string
            description?: string | undefined
            kmsArn?: string | undefined
            triggerConfig: {
              triggerType?: {} | undefined
              triggerProperties?:
                | {
                    Scheduled?:
                      | {
                          scheduleExpression: {}
                          dataPullMode?: {} | undefined
                          scheduleStartTime?: {} | undefined
                          scheduleEndTime?: {} | undefined
                          timezone?: {} | undefined
                          scheduleOffset?: {} | undefined
                          firstExecutionFrom?: {} | undefined
                          flowErrorDeactivationThreshold?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            sourceFlowConfig: {
              connectorType?: {} | undefined
              apiVersion?: {} | undefined
              connectorProfileName?: {} | undefined
              sourceConnectorProperties?:
                | {
                    Amplitude?: { object: {} } | undefined
                    Datadog?: { object: {} } | undefined
                    Dynatrace?: { object: {} } | undefined
                    GoogleAnalytics?: { object: {} } | undefined
                    InforNexus?: { object: {} } | undefined
                    Marketo?: { object: {} } | undefined
                    S3?:
                      | {
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          s3InputFormatConfig?: S3InputFormatConfig | undefined
                        }
                      | undefined
                    Salesforce?:
                      | {
                          object: {}
                          enableDynamicFieldUpdate?: {} | undefined
                          includeDeletedRecords?: {} | undefined
                          dataTransferApi?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { object: {} } | undefined
                    Singular?: { object: {} } | undefined
                    Slack?: { object: {} } | undefined
                    Trendmicro?: { object: {} } | undefined
                    Veeva?:
                      | {
                          object: {}
                          documentType?: {} | undefined
                          includeSourceFiles?: {} | undefined
                          includeRenditions?: {} | undefined
                          includeAllVersions?: {} | undefined
                        }
                      | undefined
                    Zendesk?: { object: {} } | undefined
                    SAPOData?: SAPODataSourceProperties | undefined
                    CustomConnector?: CustomConnectorSourceProperties | undefined
                    Pardot?: { object: {} } | undefined
                  }
                | undefined
              incrementalPullConfig?: { datetimeTypeFieldName?: {} | undefined } | undefined
            }
            destinationFlowConfigList: DestinationFlowConfig[]
            tasks: Task[]
            tags?: { [x: string]: TagValue } | undefined
            metadataCatalogConfig?:
              | { glueDataCatalog?: { roleArn: {}; databaseName: {}; tablePrefix: {} } | undefined }
              | undefined
            clientToken?: string | undefined
          }
        }
        output: CreateFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delete-connector-profile': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { connectorProfileName: string; forceDelete?: boolean | undefined } }
        output: DeleteConnectorProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delete-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { flowName: string; forceDelete?: boolean | undefined } }
        output: DeleteFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-connector': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorType:
              | 'Salesforce'
              | 'Singular'
              | 'Slack'
              | 'Redshift'
              | 'S3'
              | 'Marketo'
              | 'Googleanalytics'
              | 'Zendesk'
              | 'Servicenow'
              | 'Datadog'
              | 'Trendmicro'
              | 'Snowflake'
              | 'Dynatrace'
              | 'Infornexus'
              | 'Amplitude'
              | 'Veeva'
              | 'EventBridge'
              | 'LookoutMetrics'
              | 'Upsolver'
              | 'Honeycode'
              | 'CustomerProfiles'
              | 'SAPOData'
              | 'CustomConnector'
              | 'Pardot'
            connectorLabel?: string | undefined
          }
        }
        output: DescribeConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-connector-entity': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorEntityName: string
            connectorType?:
              | 'Salesforce'
              | 'Singular'
              | 'Slack'
              | 'Redshift'
              | 'S3'
              | 'Marketo'
              | 'Googleanalytics'
              | 'Zendesk'
              | 'Servicenow'
              | 'Datadog'
              | 'Trendmicro'
              | 'Snowflake'
              | 'Dynatrace'
              | 'Infornexus'
              | 'Amplitude'
              | 'Veeva'
              | 'EventBridge'
              | 'LookoutMetrics'
              | 'Upsolver'
              | 'Honeycode'
              | 'CustomerProfiles'
              | 'SAPOData'
              | 'CustomConnector'
              | 'Pardot'
              | undefined
            connectorProfileName?: string | undefined
            apiVersion?: string | undefined
          }
        }
        output: DescribeConnectorEntityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-connector-profiles': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorProfileNames?: ConnectorProfileName[] | undefined
            connectorType?:
              | 'Salesforce'
              | 'Singular'
              | 'Slack'
              | 'Redshift'
              | 'S3'
              | 'Marketo'
              | 'Googleanalytics'
              | 'Zendesk'
              | 'Servicenow'
              | 'Datadog'
              | 'Trendmicro'
              | 'Snowflake'
              | 'Dynatrace'
              | 'Infornexus'
              | 'Amplitude'
              | 'Veeva'
              | 'EventBridge'
              | 'LookoutMetrics'
              | 'Upsolver'
              | 'Honeycode'
              | 'CustomerProfiles'
              | 'SAPOData'
              | 'CustomConnector'
              | 'Pardot'
              | undefined
            connectorLabel?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeConnectorProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-connectors': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorTypes?: ConnectorType[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { flowName: string } }
        output: DescribeFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/describe-flow-execution-records': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            flowName: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: DescribeFlowExecutionRecordsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-connector-entities': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorProfileName?: string | undefined
            connectorType?:
              | 'Salesforce'
              | 'Singular'
              | 'Slack'
              | 'Redshift'
              | 'S3'
              | 'Marketo'
              | 'Googleanalytics'
              | 'Zendesk'
              | 'Servicenow'
              | 'Datadog'
              | 'Trendmicro'
              | 'Snowflake'
              | 'Dynatrace'
              | 'Infornexus'
              | 'Amplitude'
              | 'Veeva'
              | 'EventBridge'
              | 'LookoutMetrics'
              | 'Upsolver'
              | 'Honeycode'
              | 'CustomerProfiles'
              | 'SAPOData'
              | 'CustomConnector'
              | 'Pardot'
              | undefined
            entitiesPath?: string | undefined
            apiVersion?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListConnectorEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-connectors': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-flows': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListFlowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/register-connector': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorLabel?: string | undefined
            description?: string | undefined
            connectorProvisioningType?: 'LAMBDA' | undefined
            connectorProvisioningConfig?: { lambda?: { lambdaArn: {} } | undefined } | undefined
            clientToken?: string | undefined
          }
        }
        output: RegisterConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/start-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { flowName: string; clientToken?: string | undefined } }
        output: StartFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stop-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { flowName: string } }
        output: StopFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/unregister-connector': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { connectorLabel: string; forceDelete?: boolean | undefined } }
        output: UnregisterConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-connector-profile': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorProfileName: string
            connectionMode: 'Public' | 'Private'
            connectorProfileConfig: {
              connectorProfileProperties?:
                | {
                    Amplitude?: {} | undefined
                    Datadog?: { instanceUrl: {} } | undefined
                    Dynatrace?: { instanceUrl: {} } | undefined
                    GoogleAnalytics?: {} | undefined
                    Honeycode?: {} | undefined
                    InforNexus?: { instanceUrl: {} } | undefined
                    Marketo?: { instanceUrl: {} } | undefined
                    Redshift?:
                      | {
                          databaseUrl?: {} | undefined
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          roleArn: {}
                          dataApiRoleArn?: {} | undefined
                          isRedshiftServerless?: {} | undefined
                          clusterIdentifier?: {} | undefined
                          workgroupName?: {} | undefined
                          databaseName?: {} | undefined
                        }
                      | undefined
                    Salesforce?:
                      | {
                          instanceUrl?: {} | undefined
                          isSandboxEnvironment?: {} | undefined
                          usePrivateLinkForMetadataAndAuthorization?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { instanceUrl: {} } | undefined
                    Singular?: {} | undefined
                    Slack?: { instanceUrl: {} } | undefined
                    Snowflake?:
                      | {
                          warehouse: {}
                          stage: {}
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          privateLinkServiceName?: {} | undefined
                          accountName?: {} | undefined
                          region?: {} | undefined
                        }
                      | undefined
                    Trendmicro?: {} | undefined
                    Veeva?: { instanceUrl: {} } | undefined
                    Zendesk?: { instanceUrl: {} } | undefined
                    SAPOData?: SAPODataConnectorProfileProperties | undefined
                    CustomConnector?:
                      | {
                          profileProperties?: {} | undefined
                          oAuth2Properties?: OAuth2Properties | undefined
                        }
                      | undefined
                    Pardot?:
                      | {
                          instanceUrl?: {} | undefined
                          isSandboxEnvironment?: {} | undefined
                          businessUnitId?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              connectorProfileCredentials?:
                | {
                    Amplitude?: { apiKey: {}; secretKey: {} } | undefined
                    Datadog?: { apiKey: {}; applicationKey: {} } | undefined
                    Dynatrace?: { apiToken: {} } | undefined
                    GoogleAnalytics?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Honeycode?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?: ConnectorOAuthRequest | undefined
                        }
                      | undefined
                    InforNexus?:
                      | { accessKeyId: {}; userId: {}; secretAccessKey: {}; datakey: {} }
                      | undefined
                    Marketo?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Redshift?: { username?: {} | undefined; password?: {} | undefined } | undefined
                    Salesforce?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                          clientCredentialsArn?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { username: {}; password: {} } | undefined
                    Singular?: { apiKey: {} } | undefined
                    Slack?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    Snowflake?: { username: {}; password: {} } | undefined
                    Trendmicro?: { apiSecretKey: {} } | undefined
                    Veeva?: { username: {}; password: {} } | undefined
                    Zendesk?:
                      | {
                          clientId: {}
                          clientSecret: {}
                          accessToken?: {} | undefined
                          oAuthRequest?:
                            | { authCode?: {} | undefined; redirectUri?: {} | undefined }
                            | undefined
                        }
                      | undefined
                    SAPOData?: SAPODataConnectorProfileCredentials | undefined
                    CustomConnector?: CustomConnectorProfileCredentials | undefined
                    Pardot?:
                      | {
                          accessToken?: {} | undefined
                          refreshToken?: {} | undefined
                          oAuthRequest?: ConnectorOAuthRequest | undefined
                          clientCredentialsArn?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            clientToken?: string | undefined
          }
        }
        output: UpdateConnectorProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-connector-registration': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            connectorLabel: string
            description?: string | undefined
            connectorProvisioningConfig?: { lambda?: { lambdaArn: {} } | undefined } | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdateConnectorRegistrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/update-flow': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            flowName: string
            description?: string | undefined
            triggerConfig: {
              triggerType?: {} | undefined
              triggerProperties?:
                | {
                    Scheduled?:
                      | {
                          scheduleExpression: {}
                          dataPullMode?: {} | undefined
                          scheduleStartTime?: {} | undefined
                          scheduleEndTime?: {} | undefined
                          timezone?: {} | undefined
                          scheduleOffset?: {} | undefined
                          firstExecutionFrom?: {} | undefined
                          flowErrorDeactivationThreshold?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            sourceFlowConfig: {
              connectorType?: {} | undefined
              apiVersion?: {} | undefined
              connectorProfileName?: {} | undefined
              sourceConnectorProperties?:
                | {
                    Amplitude?: { object: {} } | undefined
                    Datadog?: { object: {} } | undefined
                    Dynatrace?: { object: {} } | undefined
                    GoogleAnalytics?: { object: {} } | undefined
                    InforNexus?: { object: {} } | undefined
                    Marketo?: { object: {} } | undefined
                    S3?:
                      | {
                          bucketName: {}
                          bucketPrefix?: {} | undefined
                          s3InputFormatConfig?: S3InputFormatConfig | undefined
                        }
                      | undefined
                    Salesforce?:
                      | {
                          object: {}
                          enableDynamicFieldUpdate?: {} | undefined
                          includeDeletedRecords?: {} | undefined
                          dataTransferApi?: {} | undefined
                        }
                      | undefined
                    ServiceNow?: { object: {} } | undefined
                    Singular?: { object: {} } | undefined
                    Slack?: { object: {} } | undefined
                    Trendmicro?: { object: {} } | undefined
                    Veeva?:
                      | {
                          object: {}
                          documentType?: {} | undefined
                          includeSourceFiles?: {} | undefined
                          includeRenditions?: {} | undefined
                          includeAllVersions?: {} | undefined
                        }
                      | undefined
                    Zendesk?: { object: {} } | undefined
                    SAPOData?: SAPODataSourceProperties | undefined
                    CustomConnector?: CustomConnectorSourceProperties | undefined
                    Pardot?: { object: {} } | undefined
                  }
                | undefined
              incrementalPullConfig?: { datetimeTypeFieldName?: {} | undefined } | undefined
            }
            destinationFlowConfigList: DestinationFlowConfig[]
            tasks: Task[]
            metadataCatalogConfig?:
              | { glueDataCatalog?: { roleArn: {}; databaseName: {}; tablePrefix: {} } | undefined }
              | undefined
            clientToken?: string | undefined
          }
        }
        output: UpdateFlowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
