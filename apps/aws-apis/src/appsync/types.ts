type AssociateApiResponse = {
  apiAssociation?:
    | {
        domainName?: {} | undefined
        apiId?: {} | undefined
        associationStatus?: {} | undefined
        deploymentDetail?: {} | undefined
      }
    | undefined
}
type AccessDeniedException = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type InternalFailureException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type DisassociateApiResponse = { [x: string]: unknown }
type ConcurrentModificationException = { [x: string]: unknown }
type GetApiAssociationResponse = {
  apiAssociation?:
    | {
        domainName?: {} | undefined
        apiId?: {} | undefined
        associationStatus?: {} | undefined
        deploymentDetail?: {} | undefined
      }
    | undefined
}
type AssociateMergedGraphqlApiResponse = {
  sourceApiAssociation?:
    | {
        associationId?: {} | undefined
        associationArn?: {} | undefined
        sourceApiId?: {} | undefined
        sourceApiArn?: {} | undefined
        mergedApiArn?: {} | undefined
        mergedApiId?: {} | undefined
        description?: {} | undefined
        sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
        sourceApiAssociationStatus?: {} | undefined
        sourceApiAssociationStatusDetail?: {} | undefined
        lastSuccessfulMergeDate?: {} | undefined
      }
    | undefined
}
type UnauthorizedException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type AssociateSourceGraphqlApiResponse = {
  sourceApiAssociation?:
    | {
        associationId?: {} | undefined
        associationArn?: {} | undefined
        sourceApiId?: {} | undefined
        sourceApiArn?: {} | undefined
        mergedApiArn?: {} | undefined
        mergedApiId?: {} | undefined
        description?: {} | undefined
        sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
        sourceApiAssociationStatus?: {} | undefined
        sourceApiAssociationStatusDetail?: {} | undefined
        lastSuccessfulMergeDate?: {} | undefined
      }
    | undefined
}
type CreateApiCacheResponse = {
  apiCache?:
    | {
        ttl?: {} | undefined
        apiCachingBehavior?: {} | undefined
        transitEncryptionEnabled?: {} | undefined
        atRestEncryptionEnabled?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type DeleteApiCacheResponse = { [x: string]: unknown }
type GetApiCacheResponse = {
  apiCache?:
    | {
        ttl?: {} | undefined
        apiCachingBehavior?: {} | undefined
        transitEncryptionEnabled?: {} | undefined
        atRestEncryptionEnabled?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type CreateApiKeyResponse = {
  apiKey?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        expires?: {} | undefined
        deletes?: {} | undefined
      }
    | undefined
}
type ApiKeyLimitExceededException = { [x: string]: unknown }
type ApiKeyValidityOutOfBoundsException = { [x: string]: unknown }
type ListApiKeysResponse = { apiKeys?: {} | undefined; nextToken?: {} | undefined }
type CreateDataSourceResponse = {
  dataSource?:
    | {
        dataSourceArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        serviceRoleArn?: {} | undefined
        dynamodbConfig?:
          | {
              tableName: {}
              awsRegion: {}
              useCallerCredentials?: {} | undefined
              deltaSyncConfig?:
                | {
                    baseTableTTL?: {} | undefined
                    deltaSyncTableName?: {} | undefined
                    deltaSyncTableTTL?: {} | undefined
                  }
                | undefined
              versioned?: {} | undefined
            }
          | undefined
        lambdaConfig?: { lambdaFunctionArn: {} } | undefined
        elasticsearchConfig?: { endpoint: {}; awsRegion: {} } | undefined
        openSearchServiceConfig?: { endpoint: {}; awsRegion: {} } | undefined
        httpConfig?:
          | {
              endpoint?: {} | undefined
              authorizationConfig?:
                | {
                    authorizationType: {}
                    awsIamConfig?:
                      | { signingRegion?: {} | undefined; signingServiceName?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
          | undefined
        relationalDatabaseConfig?:
          | {
              relationalDatabaseSourceType?: {} | undefined
              rdsHttpEndpointConfig?:
                | {
                    awsRegion?: {} | undefined
                    dbClusterIdentifier?: {} | undefined
                    databaseName?: {} | undefined
                    schema?: {} | undefined
                    awsSecretStoreArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        eventBridgeConfig?: { eventBusArn: {} } | undefined
      }
    | undefined
}
type ListDataSourcesResponse = { dataSources?: {} | undefined; nextToken?: {} | undefined }
type CreateDomainNameResponse = {
  domainNameConfig?:
    | {
        domainName?: {} | undefined
        description?: {} | undefined
        certificateArn?: {} | undefined
        appsyncDomainName?: {} | undefined
        hostedZoneId?: {} | undefined
      }
    | undefined
}
type ListDomainNamesResponse = { domainNameConfigs?: {} | undefined; nextToken?: {} | undefined }
type SyncConfig = {
  conflictHandler?: {} | undefined
  conflictDetection?: {} | undefined
  lambdaConflictHandlerConfig?: { lambdaConflictHandlerArn?: {} | undefined } | undefined
}
type AppSyncRuntime = { name: {}; runtimeVersion: {} }
type CreateFunctionResponse = {
  functionConfiguration?:
    | {
        functionId?: {} | undefined
        functionArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        dataSourceName?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        functionVersion?: {} | undefined
        syncConfig?: SyncConfig | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type ListFunctionsResponse = { functions?: {} | undefined; nextToken?: {} | undefined }
type TagValue = string
type AdditionalAuthenticationProvider = {
  authenticationType?: {} | undefined
  openIDConnectConfig?:
    | { issuer: {}; clientId?: {} | undefined; iatTTL?: {} | undefined; authTTL?: {} | undefined }
    | undefined
  userPoolConfig?: { userPoolId: {}; awsRegion: {}; appIdClientRegex?: {} | undefined } | undefined
  lambdaAuthorizerConfig?:
    | {
        authorizerResultTtlInSeconds?: {} | undefined
        authorizerUri: {}
        identityValidationExpression?: {} | undefined
      }
    | undefined
}
type CreateGraphqlApiResponse = {
  graphqlApi?:
    | {
        name?: {} | undefined
        apiId?: {} | undefined
        authenticationType?: {} | undefined
        logConfig?:
          | { fieldLogLevel: {}; cloudWatchLogsRoleArn: {}; excludeVerboseContent?: {} | undefined }
          | undefined
        userPoolConfig?:
          | { userPoolId: {}; awsRegion: {}; defaultAction: {}; appIdClientRegex?: {} | undefined }
          | undefined
        openIDConnectConfig?:
          | {
              issuer: {}
              clientId?: {} | undefined
              iatTTL?: {} | undefined
              authTTL?: {} | undefined
            }
          | undefined
        arn?: {} | undefined
        uris?: {} | undefined
        tags?: {} | undefined
        additionalAuthenticationProviders?: {} | undefined
        xrayEnabled?: {} | undefined
        wafWebAclArn?: {} | undefined
        lambdaAuthorizerConfig?:
          | {
              authorizerResultTtlInSeconds?: {} | undefined
              authorizerUri: {}
              identityValidationExpression?: {} | undefined
            }
          | undefined
        dns?: {} | undefined
        visibility?: {} | undefined
        apiType?: {} | undefined
        mergedApiExecutionRoleArn?: {} | undefined
        owner?: {} | undefined
        ownerContact?: {} | undefined
      }
    | undefined
}
type ApiLimitExceededException = { [x: string]: unknown }
type ListGraphqlApisResponse = { graphqlApis?: {} | undefined; nextToken?: {} | undefined }
type CreateResolverResponse = {
  resolver?:
    | {
        typeName?: {} | undefined
        fieldName?: {} | undefined
        dataSourceName?: {} | undefined
        resolverArn?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        kind?: {} | undefined
        pipelineConfig?: { functions?: {} | undefined } | undefined
        syncConfig?:
          | {
              conflictHandler?: {} | undefined
              conflictDetection?: {} | undefined
              lambdaConflictHandlerConfig?:
                | { lambdaConflictHandlerArn?: {} | undefined }
                | undefined
            }
          | undefined
        cachingConfig?: { ttl: {}; cachingKeys?: {} | undefined } | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type ListResolversResponse = { resolvers?: {} | undefined; nextToken?: {} | undefined }
type CreateTypeResponse = {
  type?:
    | {
        name?: {} | undefined
        description?: {} | undefined
        arn?: {} | undefined
        definition?: {} | undefined
        format?: {} | undefined
      }
    | undefined
}
type DeleteApiKeyResponse = { [x: string]: unknown }
type UpdateApiKeyResponse = {
  apiKey?:
    | {
        id?: {} | undefined
        description?: {} | undefined
        expires?: {} | undefined
        deletes?: {} | undefined
      }
    | undefined
}
type DeleteDataSourceResponse = { [x: string]: unknown }
type GetDataSourceResponse = {
  dataSource?:
    | {
        dataSourceArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        serviceRoleArn?: {} | undefined
        dynamodbConfig?:
          | {
              tableName: {}
              awsRegion: {}
              useCallerCredentials?: {} | undefined
              deltaSyncConfig?:
                | {
                    baseTableTTL?: {} | undefined
                    deltaSyncTableName?: {} | undefined
                    deltaSyncTableTTL?: {} | undefined
                  }
                | undefined
              versioned?: {} | undefined
            }
          | undefined
        lambdaConfig?: { lambdaFunctionArn: {} } | undefined
        elasticsearchConfig?: { endpoint: {}; awsRegion: {} } | undefined
        openSearchServiceConfig?: { endpoint: {}; awsRegion: {} } | undefined
        httpConfig?:
          | {
              endpoint?: {} | undefined
              authorizationConfig?:
                | {
                    authorizationType: {}
                    awsIamConfig?:
                      | { signingRegion?: {} | undefined; signingServiceName?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
          | undefined
        relationalDatabaseConfig?:
          | {
              relationalDatabaseSourceType?: {} | undefined
              rdsHttpEndpointConfig?:
                | {
                    awsRegion?: {} | undefined
                    dbClusterIdentifier?: {} | undefined
                    databaseName?: {} | undefined
                    schema?: {} | undefined
                    awsSecretStoreArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        eventBridgeConfig?: { eventBusArn: {} } | undefined
      }
    | undefined
}
type UpdateDataSourceResponse = {
  dataSource?:
    | {
        dataSourceArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        type?: {} | undefined
        serviceRoleArn?: {} | undefined
        dynamodbConfig?:
          | {
              tableName: {}
              awsRegion: {}
              useCallerCredentials?: {} | undefined
              deltaSyncConfig?:
                | {
                    baseTableTTL?: {} | undefined
                    deltaSyncTableName?: {} | undefined
                    deltaSyncTableTTL?: {} | undefined
                  }
                | undefined
              versioned?: {} | undefined
            }
          | undefined
        lambdaConfig?: { lambdaFunctionArn: {} } | undefined
        elasticsearchConfig?: { endpoint: {}; awsRegion: {} } | undefined
        openSearchServiceConfig?: { endpoint: {}; awsRegion: {} } | undefined
        httpConfig?:
          | {
              endpoint?: {} | undefined
              authorizationConfig?:
                | {
                    authorizationType: {}
                    awsIamConfig?:
                      | { signingRegion?: {} | undefined; signingServiceName?: {} | undefined }
                      | undefined
                  }
                | undefined
            }
          | undefined
        relationalDatabaseConfig?:
          | {
              relationalDatabaseSourceType?: {} | undefined
              rdsHttpEndpointConfig?:
                | {
                    awsRegion?: {} | undefined
                    dbClusterIdentifier?: {} | undefined
                    databaseName?: {} | undefined
                    schema?: {} | undefined
                    awsSecretStoreArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
        eventBridgeConfig?: { eventBusArn: {} } | undefined
      }
    | undefined
}
type DeleteDomainNameResponse = { [x: string]: unknown }
type GetDomainNameResponse = {
  domainNameConfig?:
    | {
        domainName?: {} | undefined
        description?: {} | undefined
        certificateArn?: {} | undefined
        appsyncDomainName?: {} | undefined
        hostedZoneId?: {} | undefined
      }
    | undefined
}
type UpdateDomainNameResponse = {
  domainNameConfig?:
    | {
        domainName?: {} | undefined
        description?: {} | undefined
        certificateArn?: {} | undefined
        appsyncDomainName?: {} | undefined
        hostedZoneId?: {} | undefined
      }
    | undefined
}
type DeleteFunctionResponse = { [x: string]: unknown }
type GetFunctionResponse = {
  functionConfiguration?:
    | {
        functionId?: {} | undefined
        functionArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        dataSourceName?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        functionVersion?: {} | undefined
        syncConfig?: SyncConfig | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type UpdateFunctionResponse = {
  functionConfiguration?:
    | {
        functionId?: {} | undefined
        functionArn?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        dataSourceName?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        functionVersion?: {} | undefined
        syncConfig?: SyncConfig | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type DeleteGraphqlApiResponse = { [x: string]: unknown }
type GetGraphqlApiResponse = {
  graphqlApi?:
    | {
        name?: {} | undefined
        apiId?: {} | undefined
        authenticationType?: {} | undefined
        logConfig?:
          | { fieldLogLevel: {}; cloudWatchLogsRoleArn: {}; excludeVerboseContent?: {} | undefined }
          | undefined
        userPoolConfig?:
          | { userPoolId: {}; awsRegion: {}; defaultAction: {}; appIdClientRegex?: {} | undefined }
          | undefined
        openIDConnectConfig?:
          | {
              issuer: {}
              clientId?: {} | undefined
              iatTTL?: {} | undefined
              authTTL?: {} | undefined
            }
          | undefined
        arn?: {} | undefined
        uris?: {} | undefined
        tags?: {} | undefined
        additionalAuthenticationProviders?: {} | undefined
        xrayEnabled?: {} | undefined
        wafWebAclArn?: {} | undefined
        lambdaAuthorizerConfig?:
          | {
              authorizerResultTtlInSeconds?: {} | undefined
              authorizerUri: {}
              identityValidationExpression?: {} | undefined
            }
          | undefined
        dns?: {} | undefined
        visibility?: {} | undefined
        apiType?: {} | undefined
        mergedApiExecutionRoleArn?: {} | undefined
        owner?: {} | undefined
        ownerContact?: {} | undefined
      }
    | undefined
}
type UpdateGraphqlApiResponse = {
  graphqlApi?:
    | {
        name?: {} | undefined
        apiId?: {} | undefined
        authenticationType?: {} | undefined
        logConfig?:
          | { fieldLogLevel: {}; cloudWatchLogsRoleArn: {}; excludeVerboseContent?: {} | undefined }
          | undefined
        userPoolConfig?:
          | { userPoolId: {}; awsRegion: {}; defaultAction: {}; appIdClientRegex?: {} | undefined }
          | undefined
        openIDConnectConfig?:
          | {
              issuer: {}
              clientId?: {} | undefined
              iatTTL?: {} | undefined
              authTTL?: {} | undefined
            }
          | undefined
        arn?: {} | undefined
        uris?: {} | undefined
        tags?: {} | undefined
        additionalAuthenticationProviders?: {} | undefined
        xrayEnabled?: {} | undefined
        wafWebAclArn?: {} | undefined
        lambdaAuthorizerConfig?:
          | {
              authorizerResultTtlInSeconds?: {} | undefined
              authorizerUri: {}
              identityValidationExpression?: {} | undefined
            }
          | undefined
        dns?: {} | undefined
        visibility?: {} | undefined
        apiType?: {} | undefined
        mergedApiExecutionRoleArn?: {} | undefined
        owner?: {} | undefined
        ownerContact?: {} | undefined
      }
    | undefined
}
type DeleteResolverResponse = { [x: string]: unknown }
type GetResolverResponse = {
  resolver?:
    | {
        typeName?: {} | undefined
        fieldName?: {} | undefined
        dataSourceName?: {} | undefined
        resolverArn?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        kind?: {} | undefined
        pipelineConfig?: { functions?: {} | undefined } | undefined
        syncConfig?:
          | {
              conflictHandler?: {} | undefined
              conflictDetection?: {} | undefined
              lambdaConflictHandlerConfig?:
                | { lambdaConflictHandlerArn?: {} | undefined }
                | undefined
            }
          | undefined
        cachingConfig?: { ttl: {}; cachingKeys?: {} | undefined } | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type UpdateResolverResponse = {
  resolver?:
    | {
        typeName?: {} | undefined
        fieldName?: {} | undefined
        dataSourceName?: {} | undefined
        resolverArn?: {} | undefined
        requestMappingTemplate?: {} | undefined
        responseMappingTemplate?: {} | undefined
        kind?: {} | undefined
        pipelineConfig?: { functions?: {} | undefined } | undefined
        syncConfig?:
          | {
              conflictHandler?: {} | undefined
              conflictDetection?: {} | undefined
              lambdaConflictHandlerConfig?:
                | { lambdaConflictHandlerArn?: {} | undefined }
                | undefined
            }
          | undefined
        cachingConfig?: { ttl: {}; cachingKeys?: {} | undefined } | undefined
        maxBatchSize?: {} | undefined
        runtime?: AppSyncRuntime | undefined
        code?: {} | undefined
      }
    | undefined
}
type DeleteTypeResponse = { [x: string]: unknown }
type UpdateTypeResponse = {
  type?:
    | {
        name?: {} | undefined
        description?: {} | undefined
        arn?: {} | undefined
        definition?: {} | undefined
        format?: {} | undefined
      }
    | undefined
}
type DisassociateMergedGraphqlApiResponse = { sourceApiAssociationStatus?: {} | undefined }
type DisassociateSourceGraphqlApiResponse = { sourceApiAssociationStatus?: {} | undefined }
type GetSourceApiAssociationResponse = {
  sourceApiAssociation?:
    | {
        associationId?: {} | undefined
        associationArn?: {} | undefined
        sourceApiId?: {} | undefined
        sourceApiArn?: {} | undefined
        mergedApiArn?: {} | undefined
        mergedApiId?: {} | undefined
        description?: {} | undefined
        sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
        sourceApiAssociationStatus?: {} | undefined
        sourceApiAssociationStatusDetail?: {} | undefined
        lastSuccessfulMergeDate?: {} | undefined
      }
    | undefined
}
type UpdateSourceApiAssociationResponse = {
  sourceApiAssociation?:
    | {
        associationId?: {} | undefined
        associationArn?: {} | undefined
        sourceApiId?: {} | undefined
        sourceApiArn?: {} | undefined
        mergedApiArn?: {} | undefined
        mergedApiId?: {} | undefined
        description?: {} | undefined
        sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
        sourceApiAssociationStatus?: {} | undefined
        sourceApiAssociationStatusDetail?: {} | undefined
        lastSuccessfulMergeDate?: {} | undefined
      }
    | undefined
}
type EvaluateCodeResponse = {
  evaluationResult?: {} | undefined
  error?: { message?: {} | undefined; codeErrors?: {} | undefined } | undefined
  logs?: {} | undefined
}
type EvaluateMappingTemplateResponse = {
  evaluationResult?: {} | undefined
  error?: { message?: {} | undefined } | undefined
  logs?: {} | undefined
}
type FlushApiCacheResponse = { [x: string]: unknown }
type GetIntrospectionSchemaResponse = { schema?: {} | undefined }
type GraphQLSchemaException = { [x: string]: unknown }
type GetSchemaCreationStatusResponse = { status?: {} | undefined; details?: {} | undefined }
type StartSchemaCreationResponse = { status?: {} | undefined }
type GetTypeResponse = {
  type?:
    | {
        name?: {} | undefined
        description?: {} | undefined
        arn?: {} | undefined
        definition?: {} | undefined
        format?: {} | undefined
      }
    | undefined
}
type ListResolversByFunctionResponse = { resolvers?: {} | undefined; nextToken?: {} | undefined }
type ListSourceApiAssociationsResponse = {
  sourceApiAssociationSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ListTypesResponse = { types?: {} | undefined; nextToken?: {} | undefined }
type ListTypesByAssociationResponse = { types?: {} | undefined; nextToken?: {} | undefined }
type StartSchemaMergeResponse = { sourceApiAssociationStatus?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateApiCacheResponse = {
  apiCache?:
    | {
        ttl?: {} | undefined
        apiCachingBehavior?: {} | undefined
        transitEncryptionEnabled?: {} | undefined
        atRestEncryptionEnabled?: {} | undefined
        type?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/domainnames/:domainName/apiassociation': {
      $post:
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { apiId: string } }
            output: AssociateApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { apiId: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { apiId: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { apiId: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { apiId: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
      $delete:
        | {
            input: { param: { domainName: string } } & {
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
            output: DisassociateApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { domainName: string } } & {
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
            output: GetApiAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations': {
      $post:
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: AssociateMergedGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { sourceApiIdentifier: string } } & {
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
                mergedApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations': {
      $post:
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: AssociateSourceGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { mergedApiIdentifier: string } } & {
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
                sourceApiIdentifier: string
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/apis/:apiId/ApiCaches': {
      $post:
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: CreateApiCacheResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                transitEncryptionEnabled?: boolean | undefined
                atRestEncryptionEnabled?: boolean | undefined
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { apiId: string } } & {
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
            output: DeleteApiCacheResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { apiId: string } } & {
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
            output: GetApiCacheResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/apikeys': {
      $post:
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: CreateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: ApiKeyLimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: ApiKeyValidityOutOfBoundsException
            outputFormat: 'json'
            status: 487
          }
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListApiKeysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis/:apiId/datasources': {
      $post:
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: CreateDataSourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListDataSourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/domainnames': {
      $post:
        | {
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
              json: { domainName: string; certificateArn: string; description?: string | undefined }
            }
            output: CreateDomainNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
              json: { domainName: string; certificateArn: string; description?: string | undefined }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
              json: { domainName: string; certificateArn: string; description?: string | undefined }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
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
              json: { domainName: string; certificateArn: string; description?: string | undefined }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
      $get:
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListDomainNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/apis/:apiId/functions': {
      $post:
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: CreateFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListFunctionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis': {
      $post:
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: CreateGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                tags?: { [x: string]: TagValue } | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                visibility?: 'GLOBAL' | 'PRIVATE' | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: ApiLimitExceededException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                owner?: 'CURRENT_ACCOUNT' | 'OTHER_ACCOUNTS' | undefined
              }
            } & {
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
            output: ListGraphqlApisResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                owner?: 'CURRENT_ACCOUNT' | 'OTHER_ACCOUNTS' | undefined
              }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                owner?: 'CURRENT_ACCOUNT' | 'OTHER_ACCOUNTS' | undefined
              }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                nextToken?: string | undefined
                maxResults?: number | undefined
                apiType?: 'GRAPHQL' | 'MERGED' | undefined
                owner?: 'CURRENT_ACCOUNT' | 'OTHER_ACCOUNTS' | undefined
              }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/apis/:apiId/types/:typeName/resolvers': {
      $post:
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: CreateResolverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
                fieldName: string
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListResolversResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis/:apiId/types': {
      $post:
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: CreateTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string; format: 'SDL' | 'JSON' } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/apikeys/:id': {
      $delete:
        | {
            input: { param: { apiId: string; id: string } } & {
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
            output: DeleteApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; id: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; id: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; id: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; id: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: UpdateApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { apiId: string; id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined; expires?: number | undefined } }
            output: ApiKeyValidityOutOfBoundsException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/apis/:apiId/datasources/:name': {
      $delete:
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: DeleteDataSourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: GetDataSourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: UpdateDataSourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; name: string } } & {
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
                description?: string | undefined
                type:
                  | 'AWS_LAMBDA'
                  | 'AMAZON_DYNAMODB'
                  | 'AMAZON_ELASTICSEARCH'
                  | 'NONE'
                  | 'HTTP'
                  | 'RELATIONAL_DATABASE'
                  | 'AMAZON_OPENSEARCH_SERVICE'
                  | 'AMAZON_EVENTBRIDGE'
                serviceRoleArn?: string | undefined
                dynamodbConfig?:
                  | {
                      tableName?: {} | undefined
                      awsRegion?: {} | undefined
                      useCallerCredentials?: {} | undefined
                      deltaSyncConfig?:
                        | {
                            baseTableTTL?: {} | undefined
                            deltaSyncTableName?: {} | undefined
                            deltaSyncTableTTL?: {} | undefined
                          }
                        | undefined
                      versioned?: {} | undefined
                    }
                  | undefined
                lambdaConfig?: { lambdaFunctionArn?: {} | undefined } | undefined
                elasticsearchConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                openSearchServiceConfig?:
                  | { endpoint?: {} | undefined; awsRegion?: {} | undefined }
                  | undefined
                httpConfig?:
                  | {
                      endpoint?: {} | undefined
                      authorizationConfig?:
                        | {
                            authorizationType: {}
                            awsIamConfig?:
                              | {
                                  signingRegion?: {} | undefined
                                  signingServiceName?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                relationalDatabaseConfig?:
                  | {
                      relationalDatabaseSourceType?: {} | undefined
                      rdsHttpEndpointConfig?:
                        | {
                            awsRegion?: {} | undefined
                            dbClusterIdentifier?: {} | undefined
                            databaseName?: {} | undefined
                            schema?: {} | undefined
                            awsSecretStoreArn?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                eventBridgeConfig?: { eventBusArn?: {} | undefined } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/domainnames/:domainName': {
      $delete:
        | {
            input: { param: { domainName: string } } & {
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
            output: DeleteDomainNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { domainName: string } } & {
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
            output: GetDomainNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: UpdateDomainNameResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { domainName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { description?: string | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/functions/:functionId': {
      $delete:
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: DeleteFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: GetFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UpdateFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
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
                name: string
                description?: string | undefined
                dataSourceName: string
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                functionVersion?: string | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis/:apiId': {
      $delete:
        | {
            input: { param: { apiId: string } } & {
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
            output: DeleteGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { apiId: string } } & {
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
            output: GetGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: UpdateGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { apiId: string } } & {
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
                name: string
                logConfig?:
                  | {
                      fieldLogLevel?: {} | undefined
                      cloudWatchLogsRoleArn?: {} | undefined
                      excludeVerboseContent?: {} | undefined
                    }
                  | undefined
                authenticationType?:
                  | 'API_KEY'
                  | 'AWS_IAM'
                  | 'AMAZON_COGNITO_USER_POOLS'
                  | 'OPENID_CONNECT'
                  | 'AWS_LAMBDA'
                  | undefined
                userPoolConfig?:
                  | {
                      userPoolId?: {} | undefined
                      awsRegion?: {} | undefined
                      defaultAction?: {} | undefined
                      appIdClientRegex?: {} | undefined
                    }
                  | undefined
                openIDConnectConfig?:
                  | {
                      issuer?: {} | undefined
                      clientId?: {} | undefined
                      iatTTL?: {} | undefined
                      authTTL?: {} | undefined
                    }
                  | undefined
                additionalAuthenticationProviders?: AdditionalAuthenticationProvider[] | undefined
                xrayEnabled?: boolean | undefined
                lambdaAuthorizerConfig?:
                  | {
                      authorizerResultTtlInSeconds?: {} | undefined
                      authorizerUri?: {} | undefined
                      identityValidationExpression?: {} | undefined
                    }
                  | undefined
                mergedApiExecutionRoleArn?: string | undefined
                ownerContact?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/apis/:apiId/types/:typeName/resolvers/:fieldName': {
      $delete:
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: DeleteResolverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: GetResolverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
      $post:
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UpdateResolverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string; fieldName: string } } & {
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
                dataSourceName?: string | undefined
                requestMappingTemplate?: string | undefined
                responseMappingTemplate?: string | undefined
                kind?: 'UNIT' | 'PIPELINE' | undefined
                pipelineConfig?: { functions?: {} | undefined } | undefined
                syncConfig?:
                  | {
                      conflictHandler?: {} | undefined
                      conflictDetection?: {} | undefined
                      lambdaConflictHandlerConfig?:
                        | { lambdaConflictHandlerArn?: {} | undefined }
                        | undefined
                    }
                  | undefined
                cachingConfig?: { ttl?: {} | undefined; cachingKeys?: {} | undefined } | undefined
                maxBatchSize?: number | undefined
                runtime?: { name?: {} | undefined; runtimeVersion?: {} | undefined } | undefined
                code?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/types/:typeName': {
      $delete:
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: DeleteTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: UpdateTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition?: string | undefined; format: 'SDL' | 'JSON' } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/sourceApis/:sourceApiIdentifier/mergedApiAssociations/:associationId': {
      $delete:
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: DisassociateMergedGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { sourceApiIdentifier: string; associationId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId': {
      $delete:
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: DisassociateSourceGraphqlApiResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: GetSourceApiAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: UpdateSourceApiAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
                description?: string | undefined
                sourceApiAssociationConfig?: { mergeType?: {} | undefined } | undefined
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/dataplane-evaluatecode': {
      $post:
        | {
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
                runtime: { name?: {} | undefined; runtimeVersion?: {} | undefined }
                code: string
                context: string
                function?: string | undefined
              }
            }
            output: EvaluateCodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                runtime: { name?: {} | undefined; runtimeVersion?: {} | undefined }
                code: string
                context: string
                function?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                runtime: { name?: {} | undefined; runtimeVersion?: {} | undefined }
                code: string
                context: string
                function?: string | undefined
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                runtime: { name?: {} | undefined; runtimeVersion?: {} | undefined }
                code: string
                context: string
                function?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/dataplane-evaluatetemplate': {
      $post:
        | {
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
            } & { json: { template: string; context: string } }
            output: EvaluateMappingTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
            } & { json: { template: string; context: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            } & { json: { template: string; context: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            } & { json: { template: string; context: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/v1/apis/:apiId/FlushCache': {
      $delete:
        | {
            input: { param: { apiId: string } } & {
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
            output: FlushApiCacheResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/schema#format': {
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: { format: 'SDL' | 'JSON'; includeDirectives?: boolean | undefined }
            } & {
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
            output: GetIntrospectionSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: { format: 'SDL' | 'JSON'; includeDirectives?: boolean | undefined }
            } & {
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
            output: GraphQLSchemaException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: { format: 'SDL' | 'JSON'; includeDirectives?: boolean | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: { format: 'SDL' | 'JSON'; includeDirectives?: boolean | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: { format: 'SDL' | 'JSON'; includeDirectives?: boolean | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis/:apiId/schemacreation': {
      $get:
        | {
            input: { param: { apiId: string } } & {
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
            output: GetSchemaCreationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: StartSchemaCreationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { definition: string } }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/types/:typeName#format': {
      $get:
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: GetTypeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string; typeName: string } } & {
              query: { format: 'SDL' | 'JSON' }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/apis/:apiId/functions/:functionId/resolvers': {
      $get:
        | {
            input: { param: { apiId: string; functionId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListResolversByFunctionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string; functionId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/apis/:apiId/sourceApiAssociations': {
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: ListSourceApiAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: { nextToken?: string | undefined; maxResults?: number | undefined }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/v1/tags/:resourceArn': {
      $get:
        | {
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
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
      $post:
        | {
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
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/apis/:apiId/types#format': {
      $get:
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: ListTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/types#format': {
      $get:
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: ListTypesByAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { mergedApiIdentifier: string; associationId: string } } & {
              query: {
                format: 'SDL' | 'JSON'
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/mergedApis/:mergedApiIdentifier/sourceApiAssociations/:associationId/merge': {
      $post:
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: StartSchemaMergeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { associationId: string; mergedApiIdentifier: string } } & {
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
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/v1/tags/:resourceArn#tagKeys': {
      $delete:
        | {
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
        | {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: NotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: LimitExceededException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/v1/apis/:apiId/ApiCaches/update': {
      $post:
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: UpdateApiCacheResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: ConcurrentModificationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: UnauthorizedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { apiId: string } } & {
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
                ttl: number
                apiCachingBehavior: 'FULL_REQUEST_CACHING' | 'PER_RESOLVER_CACHING'
                type:
                  | 'T2_SMALL'
                  | 'T2_MEDIUM'
                  | 'R4_LARGE'
                  | 'R4_XLARGE'
                  | 'R4_2XLARGE'
                  | 'R4_4XLARGE'
                  | 'R4_8XLARGE'
                  | 'SMALL'
                  | 'MEDIUM'
                  | 'LARGE'
                  | 'XLARGE'
                  | 'LARGE_2X'
                  | 'LARGE_4X'
                  | 'LARGE_8X'
                  | 'LARGE_12X'
              }
            }
            output: InternalFailureException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
