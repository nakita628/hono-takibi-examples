type StringWithLengthBetween1And1600 = string
type CreateApiResponse = {
  ApiEndpoint?: {} | undefined
  ApiGatewayManaged?: {} | undefined
  ApiId?: {} | undefined
  ApiKeySelectionExpression?: {} | undefined
  CorsConfiguration?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreatedDate?: {} | undefined
  Description?: {} | undefined
  DisableSchemaValidation?: {} | undefined
  DisableExecuteApiEndpoint?: {} | undefined
  ImportInfo?: {} | undefined
  Name?: {} | undefined
  ProtocolType?: {} | undefined
  RouteSelectionExpression?: {} | undefined
  Tags?: {} | undefined
  Version?: {} | undefined
  Warnings?: {} | undefined
}
type GetApisResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type ImportApiResponse = {
  ApiEndpoint?: {} | undefined
  ApiGatewayManaged?: {} | undefined
  ApiId?: {} | undefined
  ApiKeySelectionExpression?: {} | undefined
  CorsConfiguration?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreatedDate?: {} | undefined
  Description?: {} | undefined
  DisableSchemaValidation?: {} | undefined
  DisableExecuteApiEndpoint?: {} | undefined
  ImportInfo?: {} | undefined
  Name?: {} | undefined
  ProtocolType?: {} | undefined
  RouteSelectionExpression?: {} | undefined
  Tags?: {} | undefined
  Version?: {} | undefined
  Warnings?: {} | undefined
}
type CreateApiMappingResponse = {
  ApiId?: {} | undefined
  ApiMappingId?: {} | undefined
  ApiMappingKey?: {} | undefined
  Stage?: {} | undefined
}
type GetApiMappingsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type String = string
type CreateAuthorizerResponse = {
  AuthorizerCredentialsArn?: {} | undefined
  AuthorizerId?: {} | undefined
  AuthorizerPayloadFormatVersion?: {} | undefined
  AuthorizerResultTtlInSeconds?: {} | undefined
  AuthorizerType?: {} | undefined
  AuthorizerUri?: {} | undefined
  EnableSimpleResponses?: {} | undefined
  IdentitySource?: {} | undefined
  IdentityValidationExpression?: {} | undefined
  JwtConfiguration?: { Audience?: {} | undefined; Issuer?: {} | undefined } | undefined
  Name?: {} | undefined
}
type GetAuthorizersResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type CreateDeploymentResponse = {
  AutoDeployed?: {} | undefined
  CreatedDate?: {} | undefined
  DeploymentId?: {} | undefined
  DeploymentStatus?: {} | undefined
  DeploymentStatusMessage?: {} | undefined
  Description?: {} | undefined
}
type GetDeploymentsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type DomainNameConfiguration = {
  ApiGatewayDomainName?: {} | undefined
  CertificateArn?: {} | undefined
  CertificateName?: {} | undefined
  CertificateUploadDate?: {} | undefined
  DomainNameStatus?: {} | undefined
  DomainNameStatusMessage?: {} | undefined
  EndpointType?: {} | undefined
  HostedZoneId?: {} | undefined
  SecurityPolicy?: {} | undefined
  OwnershipVerificationCertificateArn?: {} | undefined
}
type CreateDomainNameResponse = {
  ApiMappingSelectionExpression?: {} | undefined
  DomainName?: {} | undefined
  DomainNameConfigurations?: {} | undefined
  MutualTlsAuthentication?:
    | {
        TruststoreUri?: {} | undefined
        TruststoreVersion?: {} | undefined
        TruststoreWarnings?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type GetDomainNamesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type StringWithLengthBetween1And512 = string
type StringWithLengthBetween0And32K = string
type IntegrationParameters = { [x: string]: StringWithLengthBetween1And512 }
type CreateIntegrationResult = {
  ApiGatewayManaged?: {} | undefined
  ConnectionId?: {} | undefined
  ConnectionType?: {} | undefined
  ContentHandlingStrategy?: {} | undefined
  CredentialsArn?: {} | undefined
  Description?: {} | undefined
  IntegrationId?: {} | undefined
  IntegrationMethod?: {} | undefined
  IntegrationResponseSelectionExpression?: {} | undefined
  IntegrationSubtype?: {} | undefined
  IntegrationType?: {} | undefined
  IntegrationUri?: {} | undefined
  PassthroughBehavior?: {} | undefined
  PayloadFormatVersion?: {} | undefined
  RequestParameters?: {} | undefined
  RequestTemplates?: {} | undefined
  ResponseParameters?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
  TimeoutInMillis?: {} | undefined
  TlsConfig?: { ServerNameToVerify?: {} | undefined } | undefined
}
type GetIntegrationsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type CreateIntegrationResponseResponse = {
  ContentHandlingStrategy?: {} | undefined
  IntegrationResponseId?: {} | undefined
  IntegrationResponseKey?: {} | undefined
  ResponseParameters?: {} | undefined
  ResponseTemplates?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
}
type GetIntegrationResponsesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type CreateModelResponse = {
  ContentType?: {} | undefined
  Description?: {} | undefined
  ModelId?: {} | undefined
  Name?: {} | undefined
  Schema?: {} | undefined
}
type GetModelsResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type StringWithLengthBetween1And64 = string
type StringWithLengthBetween1And128 = string
type ParameterConstraints = { Required?: {} | undefined }
type CreateRouteResult = {
  ApiGatewayManaged?: {} | undefined
  ApiKeyRequired?: {} | undefined
  AuthorizationScopes?: {} | undefined
  AuthorizationType?: {} | undefined
  AuthorizerId?: {} | undefined
  ModelSelectionExpression?: {} | undefined
  OperationName?: {} | undefined
  RequestModels?: {} | undefined
  RequestParameters?: {} | undefined
  RouteId?: {} | undefined
  RouteKey?: {} | undefined
  RouteResponseSelectionExpression?: {} | undefined
  Target?: {} | undefined
}
type GetRoutesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type CreateRouteResponseResponse = {
  ModelSelectionExpression?: {} | undefined
  ResponseModels?: {} | undefined
  ResponseParameters?: {} | undefined
  RouteResponseId?: {} | undefined
  RouteResponseKey?: {} | undefined
}
type GetRouteResponsesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type RouteSettings = {
  DataTraceEnabled?: {} | undefined
  DetailedMetricsEnabled?: {} | undefined
  LoggingLevel?: {} | undefined
  ThrottlingBurstLimit?: {} | undefined
  ThrottlingRateLimit?: {} | undefined
}
type StringWithLengthBetween0And2048 = string
type CreateStageResponse = {
  AccessLogSettings?: { DestinationArn?: {} | undefined; Format?: {} | undefined } | undefined
  ApiGatewayManaged?: {} | undefined
  AutoDeploy?: {} | undefined
  ClientCertificateId?: {} | undefined
  CreatedDate?: {} | undefined
  DefaultRouteSettings?:
    | {
        DataTraceEnabled?: {} | undefined
        DetailedMetricsEnabled?: {} | undefined
        LoggingLevel?: {} | undefined
        ThrottlingBurstLimit?: {} | undefined
        ThrottlingRateLimit?: {} | undefined
      }
    | undefined
  DeploymentId?: {} | undefined
  Description?: {} | undefined
  LastDeploymentStatusMessage?: {} | undefined
  LastUpdatedDate?: {} | undefined
  RouteSettings?: {} | undefined
  StageName?: {} | undefined
  StageVariables?: {} | undefined
  Tags?: {} | undefined
}
type GetStagesResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type CreateVpcLinkResponse = {
  CreatedDate?: {} | undefined
  Name?: {} | undefined
  SecurityGroupIds?: {} | undefined
  SubnetIds?: {} | undefined
  Tags?: {} | undefined
  VpcLinkId?: {} | undefined
  VpcLinkStatus?: {} | undefined
  VpcLinkStatusMessage?: {} | undefined
  VpcLinkVersion?: {} | undefined
}
type GetVpcLinksResponse = { Items?: {} | undefined; NextToken?: {} | undefined }
type GetApiResponse = {
  ApiEndpoint?: {} | undefined
  ApiGatewayManaged?: {} | undefined
  ApiId?: {} | undefined
  ApiKeySelectionExpression?: {} | undefined
  CorsConfiguration?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreatedDate?: {} | undefined
  Description?: {} | undefined
  DisableSchemaValidation?: {} | undefined
  DisableExecuteApiEndpoint?: {} | undefined
  ImportInfo?: {} | undefined
  Name?: {} | undefined
  ProtocolType?: {} | undefined
  RouteSelectionExpression?: {} | undefined
  Tags?: {} | undefined
  Version?: {} | undefined
  Warnings?: {} | undefined
}
type ReimportApiResponse = {
  ApiEndpoint?: {} | undefined
  ApiGatewayManaged?: {} | undefined
  ApiId?: {} | undefined
  ApiKeySelectionExpression?: {} | undefined
  CorsConfiguration?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreatedDate?: {} | undefined
  Description?: {} | undefined
  DisableSchemaValidation?: {} | undefined
  DisableExecuteApiEndpoint?: {} | undefined
  ImportInfo?: {} | undefined
  Name?: {} | undefined
  ProtocolType?: {} | undefined
  RouteSelectionExpression?: {} | undefined
  Tags?: {} | undefined
  Version?: {} | undefined
  Warnings?: {} | undefined
}
type UpdateApiResponse = {
  ApiEndpoint?: {} | undefined
  ApiGatewayManaged?: {} | undefined
  ApiId?: {} | undefined
  ApiKeySelectionExpression?: {} | undefined
  CorsConfiguration?:
    | {
        AllowCredentials?: {} | undefined
        AllowHeaders?: {} | undefined
        AllowMethods?: {} | undefined
        AllowOrigins?: {} | undefined
        ExposeHeaders?: {} | undefined
        MaxAge?: {} | undefined
      }
    | undefined
  CreatedDate?: {} | undefined
  Description?: {} | undefined
  DisableSchemaValidation?: {} | undefined
  DisableExecuteApiEndpoint?: {} | undefined
  ImportInfo?: {} | undefined
  Name?: {} | undefined
  ProtocolType?: {} | undefined
  RouteSelectionExpression?: {} | undefined
  Tags?: {} | undefined
  Version?: {} | undefined
  Warnings?: {} | undefined
}
type GetApiMappingResponse = {
  ApiId?: {} | undefined
  ApiMappingId?: {} | undefined
  ApiMappingKey?: {} | undefined
  Stage?: {} | undefined
}
type UpdateApiMappingResponse = {
  ApiId?: {} | undefined
  ApiMappingId?: {} | undefined
  ApiMappingKey?: {} | undefined
  Stage?: {} | undefined
}
type GetAuthorizerResponse = {
  AuthorizerCredentialsArn?: {} | undefined
  AuthorizerId?: {} | undefined
  AuthorizerPayloadFormatVersion?: {} | undefined
  AuthorizerResultTtlInSeconds?: {} | undefined
  AuthorizerType?: {} | undefined
  AuthorizerUri?: {} | undefined
  EnableSimpleResponses?: {} | undefined
  IdentitySource?: {} | undefined
  IdentityValidationExpression?: {} | undefined
  JwtConfiguration?: { Audience?: {} | undefined; Issuer?: {} | undefined } | undefined
  Name?: {} | undefined
}
type UpdateAuthorizerResponse = {
  AuthorizerCredentialsArn?: {} | undefined
  AuthorizerId?: {} | undefined
  AuthorizerPayloadFormatVersion?: {} | undefined
  AuthorizerResultTtlInSeconds?: {} | undefined
  AuthorizerType?: {} | undefined
  AuthorizerUri?: {} | undefined
  EnableSimpleResponses?: {} | undefined
  IdentitySource?: {} | undefined
  IdentityValidationExpression?: {} | undefined
  JwtConfiguration?: { Audience?: {} | undefined; Issuer?: {} | undefined } | undefined
  Name?: {} | undefined
}
type GetDeploymentResponse = {
  AutoDeployed?: {} | undefined
  CreatedDate?: {} | undefined
  DeploymentId?: {} | undefined
  DeploymentStatus?: {} | undefined
  DeploymentStatusMessage?: {} | undefined
  Description?: {} | undefined
}
type UpdateDeploymentResponse = {
  AutoDeployed?: {} | undefined
  CreatedDate?: {} | undefined
  DeploymentId?: {} | undefined
  DeploymentStatus?: {} | undefined
  DeploymentStatusMessage?: {} | undefined
  Description?: {} | undefined
}
type GetDomainNameResponse = {
  ApiMappingSelectionExpression?: {} | undefined
  DomainName?: {} | undefined
  DomainNameConfigurations?: {} | undefined
  MutualTlsAuthentication?:
    | {
        TruststoreUri?: {} | undefined
        TruststoreVersion?: {} | undefined
        TruststoreWarnings?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type UpdateDomainNameResponse = {
  ApiMappingSelectionExpression?: {} | undefined
  DomainName?: {} | undefined
  DomainNameConfigurations?: {} | undefined
  MutualTlsAuthentication?:
    | {
        TruststoreUri?: {} | undefined
        TruststoreVersion?: {} | undefined
        TruststoreWarnings?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type GetIntegrationResult = {
  ApiGatewayManaged?: {} | undefined
  ConnectionId?: {} | undefined
  ConnectionType?: {} | undefined
  ContentHandlingStrategy?: {} | undefined
  CredentialsArn?: {} | undefined
  Description?: {} | undefined
  IntegrationId?: {} | undefined
  IntegrationMethod?: {} | undefined
  IntegrationResponseSelectionExpression?: {} | undefined
  IntegrationSubtype?: {} | undefined
  IntegrationType?: {} | undefined
  IntegrationUri?: {} | undefined
  PassthroughBehavior?: {} | undefined
  PayloadFormatVersion?: {} | undefined
  RequestParameters?: {} | undefined
  RequestTemplates?: {} | undefined
  ResponseParameters?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
  TimeoutInMillis?: {} | undefined
  TlsConfig?: { ServerNameToVerify?: {} | undefined } | undefined
}
type UpdateIntegrationResult = {
  ApiGatewayManaged?: {} | undefined
  ConnectionId?: {} | undefined
  ConnectionType?: {} | undefined
  ContentHandlingStrategy?: {} | undefined
  CredentialsArn?: {} | undefined
  Description?: {} | undefined
  IntegrationId?: {} | undefined
  IntegrationMethod?: {} | undefined
  IntegrationResponseSelectionExpression?: {} | undefined
  IntegrationSubtype?: {} | undefined
  IntegrationType?: {} | undefined
  IntegrationUri?: {} | undefined
  PassthroughBehavior?: {} | undefined
  PayloadFormatVersion?: {} | undefined
  RequestParameters?: {} | undefined
  RequestTemplates?: {} | undefined
  ResponseParameters?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
  TimeoutInMillis?: {} | undefined
  TlsConfig?: { ServerNameToVerify?: {} | undefined } | undefined
}
type GetIntegrationResponseResponse = {
  ContentHandlingStrategy?: {} | undefined
  IntegrationResponseId?: {} | undefined
  IntegrationResponseKey?: {} | undefined
  ResponseParameters?: {} | undefined
  ResponseTemplates?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
}
type UpdateIntegrationResponseResponse = {
  ContentHandlingStrategy?: {} | undefined
  IntegrationResponseId?: {} | undefined
  IntegrationResponseKey?: {} | undefined
  ResponseParameters?: {} | undefined
  ResponseTemplates?: {} | undefined
  TemplateSelectionExpression?: {} | undefined
}
type GetModelResponse = {
  ContentType?: {} | undefined
  Description?: {} | undefined
  ModelId?: {} | undefined
  Name?: {} | undefined
  Schema?: {} | undefined
}
type UpdateModelResponse = {
  ContentType?: {} | undefined
  Description?: {} | undefined
  ModelId?: {} | undefined
  Name?: {} | undefined
  Schema?: {} | undefined
}
type GetRouteResult = {
  ApiGatewayManaged?: {} | undefined
  ApiKeyRequired?: {} | undefined
  AuthorizationScopes?: {} | undefined
  AuthorizationType?: {} | undefined
  AuthorizerId?: {} | undefined
  ModelSelectionExpression?: {} | undefined
  OperationName?: {} | undefined
  RequestModels?: {} | undefined
  RequestParameters?: {} | undefined
  RouteId?: {} | undefined
  RouteKey?: {} | undefined
  RouteResponseSelectionExpression?: {} | undefined
  Target?: {} | undefined
}
type UpdateRouteResult = {
  ApiGatewayManaged?: {} | undefined
  ApiKeyRequired?: {} | undefined
  AuthorizationScopes?: {} | undefined
  AuthorizationType?: {} | undefined
  AuthorizerId?: {} | undefined
  ModelSelectionExpression?: {} | undefined
  OperationName?: {} | undefined
  RequestModels?: {} | undefined
  RequestParameters?: {} | undefined
  RouteId?: {} | undefined
  RouteKey?: {} | undefined
  RouteResponseSelectionExpression?: {} | undefined
  Target?: {} | undefined
}
type GetRouteResponseResponse = {
  ModelSelectionExpression?: {} | undefined
  ResponseModels?: {} | undefined
  ResponseParameters?: {} | undefined
  RouteResponseId?: {} | undefined
  RouteResponseKey?: {} | undefined
}
type UpdateRouteResponseResponse = {
  ModelSelectionExpression?: {} | undefined
  ResponseModels?: {} | undefined
  ResponseParameters?: {} | undefined
  RouteResponseId?: {} | undefined
  RouteResponseKey?: {} | undefined
}
type GetStageResponse = {
  AccessLogSettings?: { DestinationArn?: {} | undefined; Format?: {} | undefined } | undefined
  ApiGatewayManaged?: {} | undefined
  AutoDeploy?: {} | undefined
  ClientCertificateId?: {} | undefined
  CreatedDate?: {} | undefined
  DefaultRouteSettings?:
    | {
        DataTraceEnabled?: {} | undefined
        DetailedMetricsEnabled?: {} | undefined
        LoggingLevel?: {} | undefined
        ThrottlingBurstLimit?: {} | undefined
        ThrottlingRateLimit?: {} | undefined
      }
    | undefined
  DeploymentId?: {} | undefined
  Description?: {} | undefined
  LastDeploymentStatusMessage?: {} | undefined
  LastUpdatedDate?: {} | undefined
  RouteSettings?: {} | undefined
  StageName?: {} | undefined
  StageVariables?: {} | undefined
  Tags?: {} | undefined
}
type UpdateStageResponse = {
  AccessLogSettings?: { DestinationArn?: {} | undefined; Format?: {} | undefined } | undefined
  ApiGatewayManaged?: {} | undefined
  AutoDeploy?: {} | undefined
  ClientCertificateId?: {} | undefined
  CreatedDate?: {} | undefined
  DefaultRouteSettings?:
    | {
        DataTraceEnabled?: {} | undefined
        DetailedMetricsEnabled?: {} | undefined
        LoggingLevel?: {} | undefined
        ThrottlingBurstLimit?: {} | undefined
        ThrottlingRateLimit?: {} | undefined
      }
    | undefined
  DeploymentId?: {} | undefined
  Description?: {} | undefined
  LastDeploymentStatusMessage?: {} | undefined
  LastUpdatedDate?: {} | undefined
  RouteSettings?: {} | undefined
  StageName?: {} | undefined
  StageVariables?: {} | undefined
  Tags?: {} | undefined
}
type DeleteVpcLinkResponse = { [x: string]: unknown }
type GetVpcLinkResponse = {
  CreatedDate?: {} | undefined
  Name?: {} | undefined
  SecurityGroupIds?: {} | undefined
  SubnetIds?: {} | undefined
  Tags?: {} | undefined
  VpcLinkId?: {} | undefined
  VpcLinkStatus?: {} | undefined
  VpcLinkStatusMessage?: {} | undefined
  VpcLinkVersion?: {} | undefined
}
type UpdateVpcLinkResponse = {
  CreatedDate?: {} | undefined
  Name?: {} | undefined
  SecurityGroupIds?: {} | undefined
  SubnetIds?: {} | undefined
  Tags?: {} | undefined
  VpcLinkId?: {} | undefined
  VpcLinkStatus?: {} | undefined
  VpcLinkStatusMessage?: {} | undefined
  VpcLinkVersion?: {} | undefined
}
type ExportedApi = string
type ExportApiResponse = { body?: ExportedApi | undefined }
type GetModelTemplateResponse = { Value?: {} | undefined }
type GetTagsResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/apis': {
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
            apiKeySelectionExpression?: string | undefined
            corsConfiguration?:
              | {
                  AllowCredentials?: {} | undefined
                  AllowHeaders?: {} | undefined
                  AllowMethods?: {} | undefined
                  AllowOrigins?: {} | undefined
                  ExposeHeaders?: {} | undefined
                  MaxAge?: {} | undefined
                }
              | undefined
            credentialsArn?: string | undefined
            description?: string | undefined
            disableSchemaValidation?: boolean | undefined
            disableExecuteApiEndpoint?: boolean | undefined
            name: string
            protocolType: 'WEBSOCKET' | 'HTTP'
            routeKey?: string | undefined
            routeSelectionExpression?: string | undefined
            tags?: { [x: string]: StringWithLengthBetween1And1600 } | undefined
            target?: string | undefined
            version?: string | undefined
          }
        }
        output: CreateApiResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
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
        }
        output: GetApisResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: { basepath?: string | undefined; failOnWarnings?: boolean | undefined }
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
        output: ImportApiResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/domainnames/:domainName/apimappings': {
      $post: {
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
        } & { json: { apiId: string; apiMappingKey?: string | undefined; stage: string } }
        output: CreateApiMappingResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { domainName: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetApiMappingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/authorizers': {
      $post: {
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
            authorizerCredentialsArn?: string | undefined
            authorizerPayloadFormatVersion?: string | undefined
            authorizerResultTtlInSeconds?: number | undefined
            authorizerType: 'REQUEST' | 'JWT'
            authorizerUri?: string | undefined
            enableSimpleResponses?: boolean | undefined
            identitySource: String[]
            identityValidationExpression?: string | undefined
            jwtConfiguration?: { Audience?: {} | undefined; Issuer?: {} | undefined } | undefined
            name: string
          }
        }
        output: CreateAuthorizerResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetAuthorizersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/deployments': {
      $post: {
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
        } & { json: { description?: string | undefined; stageName?: string | undefined } }
        output: CreateDeploymentResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/domainnames': {
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
            domainNameConfigurations?: DomainNameConfiguration[] | undefined
            mutualTlsAuthentication?:
              | { TruststoreUri?: {} | undefined; TruststoreVersion?: {} | undefined }
              | undefined
            tags?: { [x: string]: StringWithLengthBetween1And1600 } | undefined
          }
        }
        output: CreateDomainNameResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
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
        }
        output: GetDomainNamesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/integrations': {
      $post: {
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
            connectionId?: string | undefined
            connectionType?: 'INTERNET' | 'VPC_LINK' | undefined
            contentHandlingStrategy?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
            credentialsArn?: string | undefined
            description?: string | undefined
            integrationMethod?: string | undefined
            integrationSubtype?: string | undefined
            integrationType: 'AWS' | 'HTTP' | 'MOCK' | 'HTTP_PROXY' | 'AWS_PROXY'
            integrationUri?: string | undefined
            passthroughBehavior?: 'WHEN_NO_MATCH' | 'NEVER' | 'WHEN_NO_TEMPLATES' | undefined
            payloadFormatVersion?: string | undefined
            requestParameters?: { [x: string]: StringWithLengthBetween1And512 } | undefined
            requestTemplates?: { [x: string]: StringWithLengthBetween0And32K } | undefined
            responseParameters?: { [x: string]: IntegrationParameters } | undefined
            templateSelectionExpression?: string | undefined
            timeoutInMillis?: number | undefined
            tlsConfig?: { ServerNameToVerify?: {} | undefined } | undefined
          }
        }
        output: CreateIntegrationResult
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetIntegrationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses': {
      $post: {
        input: { param: { apiId: string; integrationId: string } } & {
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
            contentHandlingStrategy?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
            integrationResponseKey: string
            responseParameters?: { [x: string]: StringWithLengthBetween1And512 } | undefined
            responseTemplates?: { [x: string]: StringWithLengthBetween0And32K } | undefined
            templateSelectionExpression?: string | undefined
          }
        }
        output: CreateIntegrationResponseResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string; integrationId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetIntegrationResponsesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/models': {
      $post: {
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
            contentType?: string | undefined
            description?: string | undefined
            name: string
            schema: string
          }
        }
        output: CreateModelResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/routes': {
      $post: {
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
            apiKeyRequired?: boolean | undefined
            authorizationScopes?: StringWithLengthBetween1And64[] | undefined
            authorizationType?: 'NONE' | 'AWS_IAM' | 'CUSTOM' | 'JWT' | undefined
            authorizerId?: string | undefined
            modelSelectionExpression?: string | undefined
            operationName?: string | undefined
            requestModels?: { [x: string]: StringWithLengthBetween1And128 } | undefined
            requestParameters?: { [x: string]: ParameterConstraints } | undefined
            routeKey: string
            routeResponseSelectionExpression?: string | undefined
            target?: string | undefined
          }
        }
        output: CreateRouteResult
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetRoutesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/routes/:routeId/routeresponses': {
      $post: {
        input: { param: { apiId: string; routeId: string } } & {
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
            modelSelectionExpression?: string | undefined
            responseModels?: { [x: string]: StringWithLengthBetween1And128 } | undefined
            responseParameters?: { [x: string]: ParameterConstraints } | undefined
            routeResponseKey: string
          }
        }
        output: CreateRouteResponseResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string; routeId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetRouteResponsesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/stages': {
      $post: {
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
            accessLogSettings?:
              | { DestinationArn?: {} | undefined; Format?: {} | undefined }
              | undefined
            autoDeploy?: boolean | undefined
            clientCertificateId?: string | undefined
            defaultRouteSettings?:
              | {
                  DataTraceEnabled?: {} | undefined
                  DetailedMetricsEnabled?: {} | undefined
                  LoggingLevel?: {} | undefined
                  ThrottlingBurstLimit?: {} | undefined
                  ThrottlingRateLimit?: {} | undefined
                }
              | undefined
            deploymentId?: string | undefined
            description?: string | undefined
            routeSettings?: { [x: string]: RouteSettings } | undefined
            stageName: string
            stageVariables?: { [x: string]: StringWithLengthBetween0And2048 } | undefined
            tags?: { [x: string]: StringWithLengthBetween1And1600 } | undefined
          }
        }
        output: CreateStageResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { apiId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        output: GetStagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vpclinks': {
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
            securityGroupIds?: String[] | undefined
            subnetIds: String[]
            tags?: { [x: string]: StringWithLengthBetween1And1600 } | undefined
          }
        }
        output: CreateVpcLinkResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
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
        }
        output: GetVpcLinksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/stages/:stageName/accesslogsettings': {
      $delete: {
        input: { param: { apiId: string; stageName: string } } & {
          header: {
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
    '/v2/apis/:apiId': {
      $delete: {
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
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
        output: GetApiResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { apiId: string } } & {
          query: { basepath?: string | undefined; failOnWarnings?: boolean | undefined }
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
        output: ReimportApiResponse
        outputFormat: 'json'
        status: 201
      }
      $patch: {
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
            apiKeySelectionExpression?: string | undefined
            corsConfiguration?:
              | {
                  AllowCredentials?: {} | undefined
                  AllowHeaders?: {} | undefined
                  AllowMethods?: {} | undefined
                  AllowOrigins?: {} | undefined
                  ExposeHeaders?: {} | undefined
                  MaxAge?: {} | undefined
                }
              | undefined
            credentialsArn?: string | undefined
            description?: string | undefined
            disableSchemaValidation?: boolean | undefined
            disableExecuteApiEndpoint?: boolean | undefined
            name?: string | undefined
            routeKey?: string | undefined
            routeSelectionExpression?: string | undefined
            target?: string | undefined
            version?: string | undefined
          }
        }
        output: UpdateApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/domainnames/:domainName/apimappings/:apiMappingId': {
      $delete: {
        input: { param: { apiMappingId: string; domainName: string } } & {
          header: {
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
        input: { param: { apiMappingId: string; domainName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetApiMappingResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiMappingId: string; domainName: string } } & {
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
          json: { apiId: string; apiMappingKey?: string | undefined; stage?: string | undefined }
        }
        output: UpdateApiMappingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/authorizers/:authorizerId': {
      $delete: {
        input: { param: { apiId: string; authorizerId: string } } & {
          header: {
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
        input: { param: { apiId: string; authorizerId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; authorizerId: string } } & {
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
            authorizerCredentialsArn?: string | undefined
            authorizerPayloadFormatVersion?: string | undefined
            authorizerResultTtlInSeconds?: number | undefined
            authorizerType?: 'REQUEST' | 'JWT' | undefined
            authorizerUri?: string | undefined
            enableSimpleResponses?: boolean | undefined
            identitySource?: String[] | undefined
            identityValidationExpression?: string | undefined
            jwtConfiguration?: { Audience?: {} | undefined; Issuer?: {} | undefined } | undefined
            name?: string | undefined
          }
        }
        output: UpdateAuthorizerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/cors': {
      $delete: {
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v2/apis/:apiId/deployments/:deploymentId': {
      $delete: {
        input: { param: { apiId: string; deploymentId: string } } & {
          header: {
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
        input: { param: { apiId: string; deploymentId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; deploymentId: string } } & {
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
        output: UpdateDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/domainnames/:domainName': {
      $delete: {
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
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
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
      $patch: {
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
        } & {
          json: {
            domainNameConfigurations?: DomainNameConfiguration[] | undefined
            mutualTlsAuthentication?:
              | { TruststoreUri?: {} | undefined; TruststoreVersion?: {} | undefined }
              | undefined
          }
        }
        output: UpdateDomainNameResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/integrations/:integrationId': {
      $delete: {
        input: { param: { apiId: string; integrationId: string } } & {
          header: {
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
        input: { param: { apiId: string; integrationId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetIntegrationResult
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; integrationId: string } } & {
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
            connectionId?: string | undefined
            connectionType?: 'INTERNET' | 'VPC_LINK' | undefined
            contentHandlingStrategy?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
            credentialsArn?: string | undefined
            description?: string | undefined
            integrationMethod?: string | undefined
            integrationSubtype?: string | undefined
            integrationType?: 'AWS' | 'HTTP' | 'MOCK' | 'HTTP_PROXY' | 'AWS_PROXY' | undefined
            integrationUri?: string | undefined
            passthroughBehavior?: 'WHEN_NO_MATCH' | 'NEVER' | 'WHEN_NO_TEMPLATES' | undefined
            payloadFormatVersion?: string | undefined
            requestParameters?: { [x: string]: StringWithLengthBetween1And512 } | undefined
            requestTemplates?: { [x: string]: StringWithLengthBetween0And32K } | undefined
            responseParameters?: { [x: string]: IntegrationParameters } | undefined
            templateSelectionExpression?: string | undefined
            timeoutInMillis?: number | undefined
            tlsConfig?: { ServerNameToVerify?: {} | undefined } | undefined
          }
        }
        output: UpdateIntegrationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId': {
      $delete: {
        input: {
          param: { apiId: string; integrationId: string; integrationResponseId: string }
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
          param: { apiId: string; integrationId: string; integrationResponseId: string }
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
        output: GetIntegrationResponseResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { apiId: string; integrationId: string; integrationResponseId: string }
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
            contentHandlingStrategy?: 'CONVERT_TO_BINARY' | 'CONVERT_TO_TEXT' | undefined
            integrationResponseKey?: string | undefined
            responseParameters?: { [x: string]: StringWithLengthBetween1And512 } | undefined
            responseTemplates?: { [x: string]: StringWithLengthBetween0And32K } | undefined
            templateSelectionExpression?: string | undefined
          }
        }
        output: UpdateIntegrationResponseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/models/:modelId': {
      $delete: {
        input: { param: { apiId: string; modelId: string } } & {
          header: {
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
        input: { param: { apiId: string; modelId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetModelResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; modelId: string } } & {
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
            contentType?: string | undefined
            description?: string | undefined
            name?: string | undefined
            schema?: string | undefined
          }
        }
        output: UpdateModelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/routes/:routeId': {
      $delete: {
        input: { param: { apiId: string; routeId: string } } & {
          header: {
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
        input: { param: { apiId: string; routeId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRouteResult
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; routeId: string } } & {
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
            apiKeyRequired?: boolean | undefined
            authorizationScopes?: StringWithLengthBetween1And64[] | undefined
            authorizationType?: 'NONE' | 'AWS_IAM' | 'CUSTOM' | 'JWT' | undefined
            authorizerId?: string | undefined
            modelSelectionExpression?: string | undefined
            operationName?: string | undefined
            requestModels?: { [x: string]: StringWithLengthBetween1And128 } | undefined
            requestParameters?: { [x: string]: ParameterConstraints } | undefined
            routeKey?: string | undefined
            routeResponseSelectionExpression?: string | undefined
            target?: string | undefined
          }
        }
        output: UpdateRouteResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/routes/:routeId/requestparameters/:requestParameterKey': {
      $delete: {
        input: { param: { apiId: string; requestParameterKey: string; routeId: string } } & {
          header: {
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
    '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId': {
      $delete: {
        input: { param: { apiId: string; routeId: string; routeResponseId: string } } & {
          header: {
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
        input: { param: { apiId: string; routeId: string; routeResponseId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetRouteResponseResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; routeId: string; routeResponseId: string } } & {
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
            modelSelectionExpression?: string | undefined
            responseModels?: { [x: string]: StringWithLengthBetween1And128 } | undefined
            responseParameters?: { [x: string]: ParameterConstraints } | undefined
            routeResponseKey?: string | undefined
          }
        }
        output: UpdateRouteResponseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/stages/:stageName/routesettings/:routeKey': {
      $delete: {
        input: { param: { apiId: string; routeKey: string; stageName: string } } & {
          header: {
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
    '/v2/apis/:apiId/stages/:stageName': {
      $delete: {
        input: { param: { apiId: string; stageName: string } } & {
          header: {
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
        input: { param: { apiId: string; stageName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetStageResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { apiId: string; stageName: string } } & {
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
            accessLogSettings?:
              | { DestinationArn?: {} | undefined; Format?: {} | undefined }
              | undefined
            autoDeploy?: boolean | undefined
            clientCertificateId?: string | undefined
            defaultRouteSettings?:
              | {
                  DataTraceEnabled?: {} | undefined
                  DetailedMetricsEnabled?: {} | undefined
                  LoggingLevel?: {} | undefined
                  ThrottlingBurstLimit?: {} | undefined
                  ThrottlingRateLimit?: {} | undefined
                }
              | undefined
            deploymentId?: string | undefined
            description?: string | undefined
            routeSettings?: { [x: string]: RouteSettings } | undefined
            stageVariables?: { [x: string]: StringWithLengthBetween0And2048 } | undefined
          }
        }
        output: UpdateStageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/vpclinks/:vpcLinkId': {
      $delete: {
        input: { param: { vpcLinkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteVpcLinkResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { vpcLinkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVpcLinkResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { vpcLinkId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { name?: string | undefined } }
        output: UpdateVpcLinkResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/exports/:specification#outputType': {
      $get: {
        input: { param: { apiId: string; specification: string } } & {
          query: {
            exportVersion?: string | undefined
            includeExtensions?: boolean | undefined
            outputType: string
            stageName?: string | undefined
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
        output: ExportApiResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/apis/:apiId/stages/:stageName/cache/authorizers': {
      $delete: {
        input: { param: { apiId: string; stageName: string } } & {
          header: {
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
    '/v2/apis/:apiId/models/:modelId/template': {
      $get: {
        input: { param: { apiId: string; modelId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetModelTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/tags/:resource-arn': {
      $get: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetTagsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags?: { [x: string]: StringWithLengthBetween1And1600 } | undefined } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v2/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
          header: {
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
  },
  '/'
>
export default routes
