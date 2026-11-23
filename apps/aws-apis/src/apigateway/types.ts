type StageKey = { restApiId?: {} | undefined; stageName?: {} | undefined }
type String = string
type ApiKey = {
  id?: {} | undefined
  value?: {} | undefined
  name?: {} | undefined
  customerId?: {} | undefined
  description?: {} | undefined
  enabled?: {} | undefined
  createdDate?: {} | undefined
  lastUpdatedDate?: {} | undefined
  stageKeys?: {} | undefined
  tags?: {} | undefined
}
type ApiKeys = { warnings?: {} | undefined; position?: String | undefined; items?: {} | undefined }
type ProviderARN = string
type Authorizer = {
  id?: {} | undefined
  name?: {} | undefined
  type?: {} | undefined
  providerARNs?: {} | undefined
  authType?: {} | undefined
  authorizerUri?: {} | undefined
  authorizerCredentials?: {} | undefined
  identitySource?: {} | undefined
  identityValidationExpression?: {} | undefined
  authorizerResultTtlInSeconds?: {} | undefined
}
type Authorizers = { position?: String | undefined; items?: {} | undefined }
type BasePathMapping = {
  basePath?: {} | undefined
  restApiId?: {} | undefined
  stage?: {} | undefined
}
type BasePathMappings = { position?: String | undefined; items?: {} | undefined }
type Deployment = {
  id?: {} | undefined
  description?: {} | undefined
  createdDate?: {} | undefined
  apiSummary?: {} | undefined
}
type Deployments = { position?: String | undefined; items?: {} | undefined }
type DocumentationPart = {
  id?: {} | undefined
  location?:
    | {
        type: {}
        path?: {} | undefined
        method?: {} | undefined
        statusCode?: {} | undefined
        name?: {} | undefined
      }
    | undefined
  properties?: { [x: string]: unknown } | undefined
}
type DocumentationParts = { position?: String | undefined; items?: {} | undefined }
type DocumentationPartIds = { ids?: {} | undefined; warnings?: {} | undefined }
type DocumentationVersion = {
  version?: {} | undefined
  createdDate?: {} | undefined
  description?: {} | undefined
}
type DocumentationVersions = { position?: String | undefined; items?: {} | undefined }
type DomainName = {
  domainName?: {} | undefined
  certificateName?: {} | undefined
  certificateArn?: {} | undefined
  certificateUploadDate?: {} | undefined
  regionalDomainName?: {} | undefined
  regionalHostedZoneId?: {} | undefined
  regionalCertificateName?: {} | undefined
  regionalCertificateArn?: {} | undefined
  distributionDomainName?: {} | undefined
  distributionHostedZoneId?: {} | undefined
  endpointConfiguration?: { types?: {} | undefined; vpcEndpointIds?: {} | undefined } | undefined
  domainNameStatus?: {} | undefined
  domainNameStatusMessage?: {} | undefined
  securityPolicy?: {} | undefined
  tags?: {} | undefined
  mutualTlsAuthentication?:
    | {
        truststoreUri?: {} | undefined
        truststoreVersion?: {} | undefined
        truststoreWarnings?: {} | undefined
      }
    | undefined
  ownershipVerificationCertificateArn?: {} | undefined
}
type DomainNames = { position?: String | undefined; items?: {} | undefined }
type Model = {
  id?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  schema?: {} | undefined
  contentType?: {} | undefined
}
type Models = { position?: String | undefined; items?: {} | undefined }
type RequestValidator = {
  id?: {} | undefined
  name?: {} | undefined
  validateRequestBody?: {} | undefined
  validateRequestParameters?: {} | undefined
}
type RequestValidators = { position?: String | undefined; items?: {} | undefined }
type Resource = {
  id?: {} | undefined
  parentId?: {} | undefined
  pathPart?: {} | undefined
  path?: {} | undefined
  resourceMethods?: {} | undefined
}
type RestApi = {
  id?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  createdDate?: {} | undefined
  version?: {} | undefined
  warnings?: {} | undefined
  binaryMediaTypes?: {} | undefined
  minimumCompressionSize?: {} | undefined
  apiKeySource?: {} | undefined
  endpointConfiguration?: { types?: {} | undefined; vpcEndpointIds?: {} | undefined } | undefined
  policy?: {} | undefined
  tags?: {} | undefined
  disableExecuteApiEndpoint?: {} | undefined
}
type RestApis = { position?: String | undefined; items?: {} | undefined }
type Stage = {
  deploymentId?: {} | undefined
  clientCertificateId?: {} | undefined
  stageName?: {} | undefined
  description?: {} | undefined
  cacheClusterEnabled?: {} | undefined
  cacheClusterSize?: {} | undefined
  cacheClusterStatus?: {} | undefined
  methodSettings?: {} | undefined
  variables?: {} | undefined
  documentationVersion?: {} | undefined
  accessLogSettings?: { format?: {} | undefined; destinationArn?: {} | undefined } | undefined
  canarySettings?:
    | {
        percentTraffic?: {} | undefined
        deploymentId?: {} | undefined
        stageVariableOverrides?: {} | undefined
        useStageCache?: {} | undefined
      }
    | undefined
  tracingEnabled?: {} | undefined
  webAclArn?: {} | undefined
  tags?: {} | undefined
  createdDate?: {} | undefined
  lastUpdatedDate?: {} | undefined
}
type Stages = { item?: {} | undefined }
type ApiStage = { apiId?: {} | undefined; stage?: {} | undefined; throttle?: {} | undefined }
type UsagePlan = {
  id?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  apiStages?: {} | undefined
  throttle?: { burstLimit?: {} | undefined; rateLimit?: {} | undefined } | undefined
  quota?: { limit?: {} | undefined; offset?: {} | undefined; period?: {} | undefined } | undefined
  productCode?: {} | undefined
  tags?: {} | undefined
}
type UsagePlans = { position?: String | undefined; items?: {} | undefined }
type UsagePlanKey = {
  id?: {} | undefined
  type?: {} | undefined
  value?: {} | undefined
  name?: {} | undefined
}
type UsagePlanKeys = { position?: String | undefined; items?: {} | undefined }
type VpcLink = {
  id?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  targetArns?: {} | undefined
  status?: {} | undefined
  statusMessage?: {} | undefined
  tags?: {} | undefined
}
type VpcLinks = { position?: String | undefined; items?: {} | undefined }
type PatchOperation = {
  op?: {} | undefined
  path?: {} | undefined
  value?: {} | undefined
  from?: {} | undefined
}
type ListOfString = String[]
type TestInvokeAuthorizerResponse = {
  clientStatus?: {} | undefined
  log?: {} | undefined
  latency?: {} | undefined
  principalId?: {} | undefined
  policy?: {} | undefined
  authorization?: {} | undefined
  claims?: {} | undefined
}
type ClientCertificate = {
  clientCertificateId?: {} | undefined
  description?: {} | undefined
  pemEncodedCertificate?: {} | undefined
  createdDate?: {} | undefined
  expirationDate?: {} | undefined
  tags?: {} | undefined
}
type GatewayResponse = {
  responseType?: {} | undefined
  statusCode?: {} | undefined
  responseParameters?: {} | undefined
  responseTemplates?: {} | undefined
  defaultResponse?: {} | undefined
}
type Integration = {
  type?: {} | undefined
  httpMethod?: {} | undefined
  uri?: {} | undefined
  connectionType?: {} | undefined
  connectionId?: {} | undefined
  credentials?: {} | undefined
  requestParameters?: {} | undefined
  requestTemplates?: {} | undefined
  passthroughBehavior?: {} | undefined
  contentHandling?: {} | undefined
  timeoutInMillis?: {} | undefined
  cacheNamespace?: {} | undefined
  cacheKeyParameters?: {} | undefined
  integrationResponses?: {} | undefined
  tlsConfig?: { insecureSkipVerification?: {} | undefined } | undefined
}
type IntegrationResponse = {
  statusCode?: {} | undefined
  selectionPattern?: {} | undefined
  responseParameters?: {} | undefined
  responseTemplates?: {} | undefined
  contentHandling?: {} | undefined
}
type Method = {
  httpMethod?: {} | undefined
  authorizationType?: {} | undefined
  authorizerId?: {} | undefined
  apiKeyRequired?: {} | undefined
  requestValidatorId?: {} | undefined
  operationName?: {} | undefined
  requestParameters?: {} | undefined
  requestModels?: {} | undefined
  methodResponses?: {} | undefined
  methodIntegration?:
    | {
        type?: {} | undefined
        httpMethod?: {} | undefined
        uri?: {} | undefined
        connectionType?: {} | undefined
        connectionId?: {} | undefined
        credentials?: {} | undefined
        requestParameters?: {} | undefined
        requestTemplates?: {} | undefined
        passthroughBehavior?: {} | undefined
        contentHandling?: {} | undefined
        timeoutInMillis?: {} | undefined
        cacheNamespace?: {} | undefined
        cacheKeyParameters?: {} | undefined
        integrationResponses?: {} | undefined
        tlsConfig?: { insecureSkipVerification?: {} | undefined } | undefined
      }
    | undefined
  authorizationScopes?: {} | undefined
}
type NullableBoolean = boolean
type TestInvokeMethodResponse = {
  status?: {} | undefined
  body?: {} | undefined
  headers?: {} | undefined
  multiValueHeaders?: {} | undefined
  log?: {} | undefined
  latency?: {} | undefined
}
type MethodResponse = {
  statusCode?: {} | undefined
  responseParameters?: {} | undefined
  responseModels?: {} | undefined
}
type ClientCertificates = { position?: String | undefined; items?: {} | undefined }
type Account = {
  cloudwatchRoleArn?: {} | undefined
  throttleSettings?: { burstLimit?: {} | undefined; rateLimit?: {} | undefined } | undefined
  features?: {} | undefined
  apiKeyVersion?: {} | undefined
}
type ExportResponse = { body?: {} | undefined }
type GatewayResponses = { position?: String | undefined; items?: {} | undefined }
type Template = { value?: {} | undefined }
type Resources = { position?: String | undefined; items?: {} | undefined }
type SdkResponse = { body?: {} | undefined }
type SdkType = {
  id?: {} | undefined
  friendlyName?: {} | undefined
  description?: {} | undefined
  configurationProperties?: {} | undefined
}
type SdkTypes = { position?: String | undefined; items?: {} | undefined }
type Tags = { tags?: {} | undefined }
type Usage = {
  usagePlanId?: {} | undefined
  startDate?: {} | undefined
  endDate?: {} | undefined
  position?: String | undefined
  items?: {} | undefined
}
type ApiKeyIds = { ids?: {} | undefined; warnings?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/apikeys': {
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
            name?: string | undefined
            description?: string | undefined
            enabled?: boolean | undefined
            generateDistinctId?: boolean | undefined
            value?: string | undefined
            stageKeys?: StageKey[] | undefined
            customerId?: string | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: ApiKey
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            position?: string | undefined
            limit?: number | undefined
            name?: string | undefined
            customerId?: string | undefined
            includeValues?: boolean | undefined
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
        output: ApiKeys
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/authorizers': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            type: 'TOKEN' | 'REQUEST' | 'COGNITO_USER_POOLS'
            providerARNs?: ProviderARN[] | undefined
            authType?: string | undefined
            authorizerUri?: string | undefined
            authorizerCredentials?: string | undefined
            identitySource?: string | undefined
            identityValidationExpression?: string | undefined
            authorizerResultTtlInSeconds?: number | undefined
          }
        }
        output: Authorizer
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: Authorizers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainnames/:domain_name/basepathmappings': {
      $post: {
        input: { param: { domain_name: string } } & {
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
          json: { basePath?: string | undefined; restApiId: string; stage?: string | undefined }
        }
        output: BasePathMapping
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { domain_name: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: BasePathMappings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/deployments': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            stageName?: string | undefined
            stageDescription?: string | undefined
            description?: string | undefined
            cacheClusterEnabled?: boolean | undefined
            cacheClusterSize?:
              | '0.5'
              | '1.6'
              | '6.1'
              | '13.5'
              | '28.4'
              | '58.2'
              | '118'
              | '237'
              | undefined
            variables?: { [x: string]: String } | undefined
            canarySettings?:
              | {
                  percentTraffic?: {} | undefined
                  stageVariableOverrides?: {} | undefined
                  useStageCache?: {} | undefined
                }
              | undefined
            tracingEnabled?: boolean | undefined
          }
        }
        output: Deployment
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: Deployments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/documentation/parts': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            location: {
              type?: {} | undefined
              path?: {} | undefined
              method?: {} | undefined
              statusCode?: {} | undefined
              name?: {} | undefined
            }
            properties: string
          }
        }
        output: DocumentationPart
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: {
            type?:
              | 'API'
              | 'AUTHORIZER'
              | 'MODEL'
              | 'RESOURCE'
              | 'METHOD'
              | 'PATH_PARAMETER'
              | 'QUERY_PARAMETER'
              | 'REQUEST_HEADER'
              | 'REQUEST_BODY'
              | 'RESPONSE'
              | 'RESPONSE_HEADER'
              | 'RESPONSE_BODY'
              | undefined
            name?: string | undefined
            path?: string | undefined
            position?: string | undefined
            limit?: number | undefined
            locationStatus?: 'DOCUMENTED' | 'UNDOCUMENTED' | undefined
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
        output: DocumentationParts
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { restapi_id: string } } & {
          query: { mode?: 'merge' | 'overwrite' | undefined; failonwarnings?: boolean | undefined }
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
        } & { json: { body: string } }
        output: DocumentationPartIds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/documentation/versions': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            documentationVersion: string
            stageName?: string | undefined
            description?: string | undefined
          }
        }
        output: DocumentationVersion
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: DocumentationVersions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainnames': {
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
            domainName: string
            certificateName?: string | undefined
            certificateBody?: string | undefined
            certificatePrivateKey?: string | undefined
            certificateChain?: string | undefined
            certificateArn?: string | undefined
            regionalCertificateName?: string | undefined
            regionalCertificateArn?: string | undefined
            endpointConfiguration?:
              | { types?: {} | undefined; vpcEndpointIds?: {} | undefined }
              | undefined
            tags?: { [x: string]: String } | undefined
            securityPolicy?: 'TLS_1_0' | 'TLS_1_2' | undefined
            mutualTlsAuthentication?:
              | { truststoreUri?: {} | undefined; truststoreVersion?: {} | undefined }
              | undefined
            ownershipVerificationCertificateArn?: string | undefined
          }
        }
        output: DomainName
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { position?: string | undefined; limit?: number | undefined } } & {
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
        output: DomainNames
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/models': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            schema?: string | undefined
            contentType: string
          }
        }
        output: Model
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: Models
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/requestvalidators': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            name?: string | undefined
            validateRequestBody?: boolean | undefined
            validateRequestParameters?: boolean | undefined
          }
        }
        output: RequestValidator
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: RequestValidators
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:parent_id': {
      $post: {
        input: { param: { restapi_id: string; parent_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { pathPart: string } }
        output: Resource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/restapis': {
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
            name: string
            description?: string | undefined
            version?: string | undefined
            cloneFrom?: string | undefined
            binaryMediaTypes?: String[] | undefined
            minimumCompressionSize?: number | undefined
            apiKeySource?: 'HEADER' | 'AUTHORIZER' | undefined
            endpointConfiguration?:
              | { types?: {} | undefined; vpcEndpointIds?: {} | undefined }
              | undefined
            policy?: string | undefined
            tags?: { [x: string]: String } | undefined
            disableExecuteApiEndpoint?: boolean | undefined
          }
        }
        output: RestApi
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { position?: string | undefined; limit?: number | undefined } } & {
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
        output: RestApis
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/stages': {
      $post: {
        input: { param: { restapi_id: string } } & {
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
            stageName: string
            deploymentId: string
            description?: string | undefined
            cacheClusterEnabled?: boolean | undefined
            cacheClusterSize?:
              | '0.5'
              | '1.6'
              | '6.1'
              | '13.5'
              | '28.4'
              | '58.2'
              | '118'
              | '237'
              | undefined
            variables?: { [x: string]: String } | undefined
            documentationVersion?: string | undefined
            canarySettings?:
              | {
                  percentTraffic?: {} | undefined
                  deploymentId?: {} | undefined
                  stageVariableOverrides?: {} | undefined
                  useStageCache?: {} | undefined
                }
              | undefined
            tracingEnabled?: boolean | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: Stage
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { deploymentId?: string | undefined }
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
        output: Stages
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usageplans': {
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
            name: string
            description?: string | undefined
            apiStages?: ApiStage[] | undefined
            throttle?: { burstLimit?: {} | undefined; rateLimit?: {} | undefined } | undefined
            quota?:
              | { limit?: {} | undefined; offset?: {} | undefined; period?: {} | undefined }
              | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: UsagePlan
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            position?: string | undefined
            keyId?: string | undefined
            limit?: number | undefined
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
        output: UsagePlans
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usageplans/:usageplanId/keys': {
      $post: {
        input: { param: { usageplanId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { keyId: string; keyType: string } }
        output: UsagePlanKey
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { usageplanId: string } } & {
          query: {
            position?: string | undefined
            limit?: number | undefined
            name?: string | undefined
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
        output: UsagePlanKeys
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpclinks': {
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
            name: string
            description?: string | undefined
            targetArns: String[]
            tags?: { [x: string]: String } | undefined
          }
        }
        output: VpcLink
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { query: { position?: string | undefined; limit?: number | undefined } } & {
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
        output: VpcLinks
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apikeys/:api_Key': {
      $delete: {
        input: { param: { api_Key: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { api_Key: string } } & {
          query: { includeValue?: boolean | undefined }
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
        output: ApiKey
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { api_Key: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: ApiKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/authorizers/:authorizer_id': {
      $delete: {
        input: { param: { restapi_id: string; authorizer_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; authorizer_id: string } } & {
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
        output: Authorizer
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { restapi_id: string; authorizer_id: string } } & {
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
            headers?: { [x: string]: String } | undefined
            multiValueHeaders?: { [x: string]: ListOfString } | undefined
            pathWithQueryString?: string | undefined
            body?: string | undefined
            stageVariables?: { [x: string]: String } | undefined
            additionalContext?: { [x: string]: String } | undefined
          }
        }
        output: TestInvokeAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; authorizer_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Authorizer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainnames/:domain_name/basepathmappings/:base_path': {
      $delete: {
        input: { param: { domain_name: string; base_path: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { domain_name: string; base_path: string } } & {
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
        output: BasePathMapping
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { domain_name: string; base_path: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: BasePathMapping
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clientcertificates/:clientcertificate_id': {
      $delete: {
        input: { param: { clientcertificate_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { clientcertificate_id: string } } & {
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
        output: ClientCertificate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { clientcertificate_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: ClientCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/deployments/:deployment_id': {
      $delete: {
        input: { param: { restapi_id: string; deployment_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; deployment_id: string } } & {
          query: { embed?: String[] | undefined }
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
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; deployment_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/documentation/parts/:part_id': {
      $delete: {
        input: { param: { restapi_id: string; part_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; part_id: string } } & {
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
        output: DocumentationPart
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; part_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: DocumentationPart
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/documentation/versions/:doc_version': {
      $delete: {
        input: { param: { restapi_id: string; doc_version: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; doc_version: string } } & {
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
        output: DocumentationVersion
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; doc_version: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: DocumentationVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domainnames/:domain_name': {
      $delete: {
        input: { param: { domain_name: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { domain_name: string } } & {
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
        output: DomainName
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { domain_name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: DomainName
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/gatewayresponses/:response_type': {
      $delete: {
        input: {
          param: {
            restapi_id: string
            response_type:
              | 'DEFAULT_4XX'
              | 'DEFAULT_5XX'
              | 'RESOURCE_NOT_FOUND'
              | 'UNAUTHORIZED'
              | 'INVALID_API_KEY'
              | 'ACCESS_DENIED'
              | 'AUTHORIZER_FAILURE'
              | 'AUTHORIZER_CONFIGURATION_ERROR'
              | 'INVALID_SIGNATURE'
              | 'EXPIRED_TOKEN'
              | 'MISSING_AUTHENTICATION_TOKEN'
              | 'INTEGRATION_FAILURE'
              | 'INTEGRATION_TIMEOUT'
              | 'API_CONFIGURATION_ERROR'
              | 'UNSUPPORTED_MEDIA_TYPE'
              | 'BAD_REQUEST_PARAMETERS'
              | 'BAD_REQUEST_BODY'
              | 'REQUEST_TOO_LARGE'
              | 'THROTTLED'
              | 'QUOTA_EXCEEDED'
              | 'WAF_FILTERED'
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: {
          param: {
            restapi_id: string
            response_type:
              | 'DEFAULT_4XX'
              | 'DEFAULT_5XX'
              | 'RESOURCE_NOT_FOUND'
              | 'UNAUTHORIZED'
              | 'INVALID_API_KEY'
              | 'ACCESS_DENIED'
              | 'AUTHORIZER_FAILURE'
              | 'AUTHORIZER_CONFIGURATION_ERROR'
              | 'INVALID_SIGNATURE'
              | 'EXPIRED_TOKEN'
              | 'MISSING_AUTHENTICATION_TOKEN'
              | 'INTEGRATION_FAILURE'
              | 'INTEGRATION_TIMEOUT'
              | 'API_CONFIGURATION_ERROR'
              | 'UNSUPPORTED_MEDIA_TYPE'
              | 'BAD_REQUEST_PARAMETERS'
              | 'BAD_REQUEST_BODY'
              | 'REQUEST_TOO_LARGE'
              | 'THROTTLED'
              | 'QUOTA_EXCEEDED'
              | 'WAF_FILTERED'
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
        output: GatewayResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            restapi_id: string
            response_type:
              | 'DEFAULT_4XX'
              | 'DEFAULT_5XX'
              | 'RESOURCE_NOT_FOUND'
              | 'UNAUTHORIZED'
              | 'INVALID_API_KEY'
              | 'ACCESS_DENIED'
              | 'AUTHORIZER_FAILURE'
              | 'AUTHORIZER_CONFIGURATION_ERROR'
              | 'INVALID_SIGNATURE'
              | 'EXPIRED_TOKEN'
              | 'MISSING_AUTHENTICATION_TOKEN'
              | 'INTEGRATION_FAILURE'
              | 'INTEGRATION_TIMEOUT'
              | 'API_CONFIGURATION_ERROR'
              | 'UNSUPPORTED_MEDIA_TYPE'
              | 'BAD_REQUEST_PARAMETERS'
              | 'BAD_REQUEST_BODY'
              | 'REQUEST_TOO_LARGE'
              | 'THROTTLED'
              | 'QUOTA_EXCEEDED'
              | 'WAF_FILTERED'
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
        } & {
          json: {
            statusCode?: string | undefined
            responseParameters?: { [x: string]: String } | undefined
            responseTemplates?: { [x: string]: String } | undefined
          }
        }
        output: GatewayResponse
        outputFormat: 'json'
        status: 201
      }
      $patch: {
        input: {
          param: {
            restapi_id: string
            response_type:
              | 'DEFAULT_4XX'
              | 'DEFAULT_5XX'
              | 'RESOURCE_NOT_FOUND'
              | 'UNAUTHORIZED'
              | 'INVALID_API_KEY'
              | 'ACCESS_DENIED'
              | 'AUTHORIZER_FAILURE'
              | 'AUTHORIZER_CONFIGURATION_ERROR'
              | 'INVALID_SIGNATURE'
              | 'EXPIRED_TOKEN'
              | 'MISSING_AUTHENTICATION_TOKEN'
              | 'INTEGRATION_FAILURE'
              | 'INTEGRATION_TIMEOUT'
              | 'API_CONFIGURATION_ERROR'
              | 'UNSUPPORTED_MEDIA_TYPE'
              | 'BAD_REQUEST_PARAMETERS'
              | 'BAD_REQUEST_BODY'
              | 'REQUEST_TOO_LARGE'
              | 'THROTTLED'
              | 'QUOTA_EXCEEDED'
              | 'WAF_FILTERED'
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
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: GatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration': {
      $delete: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
        output: Integration
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
            type: 'HTTP' | 'AWS' | 'MOCK' | 'HTTP_PROXY' | 'AWS_PROXY'
            httpMethod?: string | undefined
            uri?: string | undefined
            connectionType?: 'INTERNET' | 'VPC_LINK' | undefined
            connectionId?: string | undefined
            credentials?: string | undefined
            requestParameters?: { [x: string]: String } | undefined
            requestTemplates?: { [x: string]: String } | undefined
            passthroughBehavior?: string | undefined
            cacheNamespace?: string | undefined
            cacheKeyParameters?: String[] | undefined
            contentHandling?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
            timeoutInMillis?: number | undefined
            tlsConfig?: { insecureSkipVerification?: {} | undefined } | undefined
          }
        }
        output: Integration
        outputFormat: 'json'
        status: 201
      }
      $patch: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Integration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/integration/responses/:status_code': {
      $delete: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        output: IntegrationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        } & {
          json: {
            selectionPattern?: string | undefined
            responseParameters?: { [x: string]: String } | undefined
            responseTemplates?: { [x: string]: String } | undefined
            contentHandling?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
          }
        }
        output: IntegrationResponse
        outputFormat: 'json'
        status: 201
      }
      $patch: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: IntegrationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method': {
      $delete: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
        output: Method
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
            authorizationType: string
            authorizerId?: string | undefined
            apiKeyRequired?: boolean | undefined
            operationName?: string | undefined
            requestParameters?: { [x: string]: NullableBoolean } | undefined
            requestModels?: { [x: string]: String } | undefined
            requestValidatorId?: string | undefined
            authorizationScopes?: String[] | undefined
          }
        }
        output: Method
        outputFormat: 'json'
        status: 201
      }
      $post: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
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
            pathWithQueryString?: string | undefined
            body?: string | undefined
            headers?: { [x: string]: String } | undefined
            multiValueHeaders?: { [x: string]: ListOfString } | undefined
            clientCertificateId?: string | undefined
            stageVariables?: { [x: string]: String } | undefined
          }
        }
        output: TestInvokeMethodResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; resource_id: string; http_method: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Method
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:resource_id/methods/:http_method/responses/:status_code': {
      $delete: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        output: MethodResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        } & {
          json: {
            responseParameters?: { [x: string]: NullableBoolean } | undefined
            responseModels?: { [x: string]: String } | undefined
          }
        }
        output: MethodResponse
        outputFormat: 'json'
        status: 201
      }
      $patch: {
        input: {
          param: {
            restapi_id: string
            resource_id: string
            http_method: string
            status_code: string
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
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: MethodResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/restapis/:restapi_id/models/:model_name': {
      $delete: {
        input: { param: { restapi_id: string; model_name: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; model_name: string } } & {
          query: { flatten?: boolean | undefined }
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
        output: Model
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; model_name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Model
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/requestvalidators/:requestvalidator_id': {
      $delete: {
        input: { param: { restapi_id: string; requestvalidator_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; requestvalidator_id: string } } & {
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
        output: RequestValidator
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; requestvalidator_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: RequestValidator
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources/:resource_id': {
      $delete: {
        input: { param: { restapi_id: string; resource_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; resource_id: string } } & {
          query: { embed?: String[] | undefined }
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
        output: Resource
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; resource_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Resource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id': {
      $delete: {
        input: { param: { restapi_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string } } & {
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
        output: RestApi
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { restapi_id: string } } & {
          query: {
            mode?: 'merge' | 'overwrite' | undefined
            failonwarnings?: boolean | undefined
            parameters?: { [x: string]: String } | undefined
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
        } & { json: { body: string } }
        output: RestApi
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: RestApi
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/stages/:stage_name': {
      $delete: {
        input: { param: { restapi_id: string; stage_name: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { restapi_id: string; stage_name: string } } & {
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
        output: Stage
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { restapi_id: string; stage_name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Stage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usageplans/:usageplanId': {
      $delete: {
        input: { param: { usageplanId: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { usageplanId: string } } & {
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
        output: UsagePlan
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { usageplanId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: UsagePlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usageplans/:usageplanId/keys/:keyId': {
      $delete: {
        input: { param: { usageplanId: string; keyId: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { usageplanId: string; keyId: string } } & {
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
        output: UsagePlanKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpclinks/:vpclink_id': {
      $delete: {
        input: { param: { vpclink_id: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
      $get: {
        input: { param: { vpclink_id: string } } & {
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
        output: VpcLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { vpclink_id: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: VpcLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/stages/:stage_name/cache/authorizers': {
      $delete: {
        input: { param: { restapi_id: string; stage_name: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/restapis/:restapi_id/stages/:stage_name/cache/data': {
      $delete: {
        input: { param: { restapi_id: string; stage_name: string } } & {
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
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/clientcertificates': {
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
          json: { description?: string | undefined; tags?: { [x: string]: String } | undefined }
        }
        output: ClientCertificate
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { position?: string | undefined; limit?: number | undefined } } & {
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
        output: ClientCertificates
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/account': {
      $get: {
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
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $patch: {
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
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/stages/:stage_name/exports/:export_type': {
      $get: {
        input: { param: { restapi_id: string; stage_name: string; export_type: string } } & {
          query: { parameters?: { [x: string]: String } | undefined }
        } & {
          header: {
            Accept?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/gatewayresponses': {
      $get: {
        input: { param: { restapi_id: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: GatewayResponses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/models/:model_name/default_template': {
      $get: {
        input: { param: { restapi_id: string; model_name: string } } & {
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
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/resources': {
      $get: {
        input: { param: { restapi_id: string } } & {
          query: {
            position?: string | undefined
            limit?: number | undefined
            embed?: String[] | undefined
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
        output: Resources
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/restapis/:restapi_id/stages/:stage_name/sdks/:sdk_type': {
      $get: {
        input: { param: { restapi_id: string; stage_name: string; sdk_type: string } } & {
          query: { parameters?: { [x: string]: String } | undefined }
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
        output: SdkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sdktypes/:sdktype_id': {
      $get: {
        input: { param: { sdktype_id: string } } & {
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
        output: SdkType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sdktypes': {
      $get: {
        input: { query: { position?: string | undefined; limit?: number | undefined } } & {
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
        output: SdkTypes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource_arn': {
      $get: {
        input: { param: { resource_arn: string } } & {
          query: { position?: string | undefined; limit?: number | undefined }
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
        output: Tags
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resource_arn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/usageplans/:usageplanId/usage#startDate&endDate': {
      $get: {
        input: { param: { usageplanId: string } } & {
          query: {
            keyId?: string | undefined
            startDate: string
            endDate: string
            position?: string | undefined
            limit?: number | undefined
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
        output: Usage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/apikeys#mode=import&format': {
      $post: {
        input: {
          query: { format: 'csv'; failonwarnings?: boolean | undefined; mode: 'import' }
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
        } & { json: { body: string } }
        output: ApiKeyIds
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/restapis#mode=import': {
      $post: {
        input: {
          query: {
            failonwarnings?: boolean | undefined
            parameters?: { [x: string]: String } | undefined
            mode: 'import'
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
        } & { json: { body: string } }
        output: RestApi
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/tags/:resource_arn#tagKeys': {
      $delete: {
        input: { param: { resource_arn: string } } & { query: { tagKeys: String[] } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/usageplans/:usageplanId/keys/:keyId/usage': {
      $patch: {
        input: { param: { usageplanId: string; keyId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { patchOperations?: PatchOperation[] | undefined } }
        output: Usage
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
