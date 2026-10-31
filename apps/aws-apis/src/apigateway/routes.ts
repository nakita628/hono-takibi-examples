import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const BooleanSchema = z.boolean().openapi('Boolean')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const MapOfStringToStringSchema = z.record(z.string(), StringSchema).openapi('MapOfStringToString')

const ApiKeySchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the API Key.' }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value of the API Key.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the API Key.' }),
    ).exactOptional(),
    customerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the API Key.' }),
    ).exactOptional(),
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the API Key can be used by callers.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the API Key was created.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the API Key was last updated.' }),
    ).exactOptional(),
    stageKeys: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of Stage resources that are associated with the ApiKey resource.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage.',
    required: [],
  })
  .openapi('ApiKey')

const StageKeySchema = z
  .object({
    restApiId: StringSchema.and(
      z.any().openapi({ description: 'The string identifier of the associated RestApi.' }),
    ).exactOptional(),
    stageName: StringSchema.and(
      z.any().openapi({ description: 'The stage name associated with the stage key.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.',
    required: [],
  })
  .openapi('StageKey')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const AuthorizerTypeSchema = z
  .enum(['TOKEN', 'REQUEST', 'COGNITO_USER_POOLS'])
  .openapi({
    description:
      'The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.',
  })
  .openapi('AuthorizerType')

const ProviderARNSchema = z.string().openapi('ProviderARN')

const ListOfARNsSchema = z.array(ProviderARNSchema).openapi('ListOfARNs')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const AuthorizerSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the authorizer resource.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the authorizer.' }),
    ).exactOptional(),
    type: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.',
        }),
    ).exactOptional(),
    providerARNs: ListOfARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. ',
        }),
    ).exactOptional(),
    authType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional customer-defined field, used in OpenAPI imports and exports without functional impact.',
        }),
    ).exactOptional(),
    authorizerUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.",
        }),
    ).exactOptional(),
    authorizerCredentials: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.",
        }),
    ).exactOptional(),
    identitySource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth</code>, <code>method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. ',
        }),
    ).exactOptional(),
    identityValidationExpression: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.",
        }),
    ).exactOptional(),
    authorizerResultTtlInSeconds: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.',
    required: [],
  })
  .openapi('Authorizer')

const BasePathMappingSchema = z
  .object({
    basePath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The base path name that callers of the API must provide as part of the URL after the domain name.',
        }),
    ).exactOptional(),
    restApiId: StringSchema.and(
      z.any().openapi({ description: 'The string identifier of the associated RestApi.' }),
    ).exactOptional(),
    stage: StringSchema.and(
      z.any().openapi({ description: 'The name of the associated stage.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the base path that callers of the API must provide as part of the URL after the domain name.',
    required: [],
  })
  .openapi('BasePathMapping')

const MethodSnapshotSchema = z
  .object({
    authorizationType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.",
        }),
    ).exactOptional(),
    apiKeyRequired: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the method requires a valid ApiKey.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a summary of a Method resource, given a particular date and time.',
    required: [],
  })
  .openapi('MethodSnapshot')

const MapOfMethodSnapshotSchema = z
  .record(z.string(), MethodSnapshotSchema)
  .openapi('MapOfMethodSnapshot')

const PathToMapOfMethodSnapshotSchema = z
  .record(z.string(), MapOfMethodSnapshotSchema)
  .openapi('PathToMapOfMethodSnapshot')

const DeploymentSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the deployment resource.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description for the deployment resource.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The date and time that the deployment resource was created.' }),
    ).exactOptional(),
    apiSummary: PathToMapOfMethodSnapshotSchema.and(
      z
        .any()
        .openapi({
          description:
            'A summary of the RestApi at the date and time that the deployment resource was created.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet.',
    required: [],
  })
  .openapi('Deployment')

const DoubleSchema = z.float64().openapi('Double')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const DocumentationPartTypeSchema = z
  .enum([
    'API',
    'AUTHORIZER',
    'MODEL',
    'RESOURCE',
    'METHOD',
    'PATH_PARAMETER',
    'QUERY_PARAMETER',
    'REQUEST_HEADER',
    'REQUEST_BODY',
    'RESPONSE',
    'RESPONSE_HEADER',
    'RESPONSE_BODY',
  ])
  .openapi('DocumentationPartType')

const DocumentationPartLocationStatusCodeSchema = z
  .string()
  .regex(/^([1-5]\d\d|\*|\s*)$/)
  .openapi('DocumentationPartLocationStatusCode')

const DocumentationPartLocationSchema = z
  .object({
    type: DocumentationPartTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>, <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.',
        }),
    ),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.",
        }),
    ).exactOptional(),
    method: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The HTTP verb of a method. It is a valid field for the API entity types of <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>method</code> attribute must match that of the parent entity exactly.",
        }),
    ).exactOptional(),
    statusCode: DocumentationPartLocationStatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.",
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['type'],
    description: 'Specifies the target API entity to which the documentation applies.',
  })
  .openapi('DocumentationPartLocation')

const DocumentationPartSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DocumentationPart identifier, generated by API Gateway when the <code>DocumentationPart</code> is created.',
        }),
    ).exactOptional(),
    location: DocumentationPartLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the API entity to which the documentation applies. Valid fields depend on the targeted API entity type. All the valid location fields are not required. If not explicitly specified, a valid location field is treated as a wildcard and associated documentation content may be inherited by matching entities, unless overridden.',
        }),
    ).exactOptional(),
    properties: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"{ \\"description\\": \\"The API does ...\\" }"</code>. Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>.',
      }),
  })
  .openapi({ description: 'A documentation part for a targeted API entity.', required: [] })
  .openapi('DocumentationPart')

const DocumentationVersionSchema = z
  .object({
    version: StringSchema.and(
      z.any().openapi({ description: 'The version identifier of the API documentation snapshot.' }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The date when the API documentation snapshot is created.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the API documentation snapshot.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A snapshot of the documentation of an API.', required: [] })
  .openapi('DocumentationVersion')

const EndpointTypeSchema = z
  .enum(['REGIONAL', 'EDGE', 'PRIVATE'])
  .openapi({
    description:
      'The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs.',
  })
  .openapi('EndpointType')

const ListOfEndpointTypeSchema = z.array(EndpointTypeSchema).openapi('ListOfEndpointType')

const EndpointConfigurationSchema = z
  .object({
    types: ListOfEndpointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.',
        }),
    ).exactOptional(),
    vpcEndpointIds: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for <code>PRIVATE</code> endpoint type.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. ',
    required: [],
  })
  .openapi('EndpointConfiguration')

const DomainNameStatusSchema = z
  .enum([
    'AVAILABLE',
    'UPDATING',
    'PENDING',
    'PENDING_CERTIFICATE_REIMPORT',
    'PENDING_OWNERSHIP_VERIFICATION',
  ])
  .openapi('DomainNameStatus')

const SecurityPolicySchema = z.enum(['TLS_1_0', 'TLS_1_2']).openapi('SecurityPolicy')

const MutualTlsAuthenticationSchema = z
  .object({
    truststoreUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example <code>s3://bucket-name/key-name</code>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
        }),
    ).exactOptional(),
    truststoreVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.',
        }),
    ).exactOptional(),
    truststoreWarnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.',
    required: [],
  })
  .openapi('MutualTlsAuthentication')

const DomainNameSchema = z
  .object({
    domainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom domain name as an API host name, for example, <code>my-api.example.com</code>.',
        }),
    ).exactOptional(),
    certificateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the certificate that will be used by edge-optimized endpoint for this domain name.',
        }),
    ).exactOptional(),
    certificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.',
        }),
    ).exactOptional(),
    certificateUploadDate: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.',
        }),
    ).exactOptional(),
    regionalDomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.',
        }),
    ).exactOptional(),
    regionalHostedZoneId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway. ',
        }),
    ).exactOptional(),
    regionalCertificateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the certificate that will be used for validating the regional domain name.',
        }),
    ).exactOptional(),
    regionalCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.',
        }),
    ).exactOptional(),
    distributionDomainName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the Amazon CloudFront documentation.',
        }),
    ).exactOptional(),
    distributionHostedZoneId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see Set up a Regional Custom Domain Name and AWS Regions and Endpoints for API Gateway. ',
        }),
    ).exactOptional(),
    endpointConfiguration: EndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint configuration of this DomainName showing the endpoint types of the domain name. ',
        }),
    ).exactOptional(),
    domainNameStatus: DomainNameStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the DomainName migration. The valid values are <code>AVAILABLE</code> and <code>UPDATING</code>. If the status is <code>UPDATING</code>, the domain cannot be modified further until the existing operation is complete. If it is <code>AVAILABLE</code>, the domain can be updated.',
        }),
    ).exactOptional(),
    domainNameStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional text message containing detailed information about status of the DomainName migration.',
        }),
    ).exactOptional(),
    securityPolicy: SecurityPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
    mutualTlsAuthentication: MutualTlsAuthenticationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.',
        }),
    ).exactOptional(),
    ownershipVerificationCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a custom domain name as a user-friendly host name of an API (RestApi).',
    required: [],
  })
  .openapi('DomainName')

const ModelSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier for the model resource.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the model. Must be an alphanumeric string.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the model.' }),
    ).exactOptional(),
    schema: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model. Do not include "\\*/" characters in the description of any properties because such "\\*/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API\'s SDK generated by API Gateway to fail.',
        }),
    ).exactOptional(),
    contentType: StringSchema.and(
      z.any().openapi({ description: 'The content-type for the model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: "Represents the data structure of a method's request or response payload.",
    required: [],
  })
  .openapi('Model')

const RequestValidatorSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of this RequestValidator.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of this RequestValidator' }),
    ).exactOptional(),
    validateRequestBody: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether to validate a request body according to the configured Model schema.',
        }),
    ).exactOptional(),
    validateRequestParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether to validate request parameters (<code>true</code>) or not (<code>false</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A set of validation rules for incoming Method requests.', required: [] })
  .openapi('RequestValidator')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const MapOfStringToBooleanSchema = z
  .record(z.string(), NullableBooleanSchema)
  .openapi('MapOfStringToBoolean')

const StatusCodeSchema = z
  .string()
  .regex(/[1-5]\d\d/)
  .openapi({ description: 'The status code.' })
  .openapi('StatusCode')

const MethodResponseSchema = z
  .object({
    statusCode: StatusCodeSchema.and(
      z.any().openapi({ description: "The method response's status code." }),
    ).exactOptional(),
    responseParameters: MapOfStringToBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)",
        }),
    ).exactOptional(),
    responseModels: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. ',
    required: [],
  })
  .openapi('MethodResponse')

const MapOfMethodResponseSchema = z
  .record(z.string(), MethodResponseSchema)
  .openapi('MapOfMethodResponse')

const IntegrationTypeSchema = z
  .enum(['HTTP', 'AWS', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY'])
  .openapi({
    description:
      'The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. ',
  })
  .openapi('IntegrationType')

const ConnectionTypeSchema = z.enum(['INTERNET', 'VPC_LINK']).openapi('ConnectionType')

const ContentHandlingStrategySchema = z
  .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
  .openapi('ContentHandlingStrategy')

const IntegerSchema = z.int().openapi('Integer')

const IntegrationResponseSchema = z
  .object({
    statusCode: StatusCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the status code that is used to map the integration response to an existing MethodResponse.',
        }),
    ).exactOptional(),
    selectionPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the <code>.+</code> regex to match error response. However, make sure that the error response does not contain any newline (<code>\\n</code>) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.',
        }),
    ).exactOptional(),
    responseParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> is a valid and unique response header name and <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.',
        }),
    ).exactOptional(),
    responseTemplates: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    contentHandling: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response.',
    required: [],
  })
  .openapi('IntegrationResponse')

const MapOfIntegrationResponseSchema = z
  .record(z.string(), IntegrationResponseSchema)
  .openapi('MapOfIntegrationResponse')

const TlsConfigSchema = z
  .object({
    insecureSkipVerification: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported certificate authority. This isn’t recommended, but it enables you to use certificates that are signed by private certificate authorities, or certificates that are self-signed. If enabled, API Gateway still performs basic certificate validation, which includes checking the certificate's expiration date, hostname, and presence of a root certificate authority. Supported only for <code>HTTP</code> and <code>HTTP_PROXY</code> integrations.</p> <important> <p>Enabling <code>insecureSkipVerification</code> isn't recommended, especially for integrations with public HTTPS endpoints. If you enable <code>insecureSkipVerification</code>, you increase the risk of man-in-the-middle attacks.</p> </important>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the TLS configuration for an integration.', required: [] })
  .openapi('TlsConfig')

const IntegrationSchema = z
  .object({
    type: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies an API method integration type. The valid value is one of the following:</p> <p>For the HTTP and HTTP proxy integrations, each integration can specify a protocol (<code>http/https</code>), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a <code>connectionType</code> of <code>VPC_LINK</code> is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.</p>',
        }),
    ).exactOptional(),
    httpMethod: StringSchema.and(
      z.any().openapi({ description: "Specifies the integration's HTTP method type." }),
    ).exactOptional(),
    uri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <p>For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an AWS service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code> </p>',
        }),
    ).exactOptional(),
    connectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.',
        }),
    ).exactOptional(),
    connectionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the VpcLink used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.',
        }),
    ).exactOptional(),
    credentials: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string <code>arn:aws:iam::\\*:user/\\*</code>. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    requestParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.',
        }),
    ).exactOptional(),
    requestTemplates: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.',
        }),
    ).exactOptional(),
    passthroughBehavior: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in <code>requestTemplates</code>. The valid value is one of the following: <code>WHEN_NO_MATCH</code>: passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. <code>WHEN_NO_TEMPLATES</code>: passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response. <code>NEVER</code>: rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.',
        }),
    ).exactOptional(),
    contentHandling: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>',
        }),
    ).exactOptional(),
    timeoutInMillis: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.',
        }),
    ).exactOptional(),
    cacheNamespace: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.',
        }),
    ).exactOptional(),
    cacheKeyParameters: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.',
        }),
    ).exactOptional(),
    integrationResponses: MapOfIntegrationResponseSchema.and(
      z.any().openapi({ description: "Specifies the integration's responses." }),
    ).exactOptional(),
    tlsConfig: TlsConfigSchema.and(
      z.any().openapi({ description: 'Specifies the TLS configuration for an integration.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.',
    required: [],
  })
  .openapi('Integration')

const MethodSchema = z
  .object({
    httpMethod: StringSchema.and(
      z.any().openapi({ description: "The method's HTTP verb." }),
    ).exactOptional(),
    authorizationType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.",
        }),
    ).exactOptional(),
    authorizerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of an Authorizer to use on this method. The <code>authorizationType</code> must be <code>CUSTOM</code>.',
        }),
    ).exactOptional(),
    apiKeyRequired: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean flag specifying whether a valid ApiKey is required to invoke this method.',
        }),
    ).exactOptional(),
    requestValidatorId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of a RequestValidator for request validation.' }),
    ).exactOptional(),
    operationName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.',
        }),
    ).exactOptional(),
    requestParameters: MapOfStringToBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.',
        }),
    ).exactOptional(),
    requestModels: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).',
        }),
    ).exactOptional(),
    methodResponses: MapOfMethodResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'Gets a method response associated with a given HTTP status code. ',
        }),
    ).exactOptional(),
    methodIntegration: IntegrationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Gets the method's integration responsible for passing the client-submitted request to the back end and performing necessary transformations to make the request compliant with the back end.",
        }),
    ).exactOptional(),
    authorizationScopes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource. ',
    required: [],
  })
  .openapi('Method')

const MapOfMethodSchema = z.record(z.string(), MethodSchema).openapi('MapOfMethod')

const ResourceSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: "The resource's identifier." }),
    ).exactOptional(),
    parentId: StringSchema.and(
      z.any().openapi({ description: "The parent resource's identifier." }),
    ).exactOptional(),
    pathPart: StringSchema.and(
      z.any().openapi({ description: 'The last path segment for this resource.' }),
    ).exactOptional(),
    path: StringSchema.and(
      z.any().openapi({ description: 'The full path for this resource.' }),
    ).exactOptional(),
    resourceMethods: MapOfMethodSchema.and(
      z.any().openapi({ description: "Gets an API resource's method of a given HTTP verb." }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an API resource.', required: [] })
  .openapi('Resource')

const ApiKeySourceTypeSchema = z.enum(['HEADER', 'AUTHORIZER']).openapi('ApiKeySourceType')

const RestApiSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The API's identifier. This identifier is unique across all of your APIs in API Gateway.",
        }),
    ).exactOptional(),
    name: StringSchema.and(z.any().openapi({ description: "The API's name." })).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: "The API's description." }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the API was created.' }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'A version identifier for the API.' }),
    ).exactOptional(),
    warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The warning messages reported when <code>failonwarnings</code> is turned on during API import.',
        }),
    ).exactOptional(),
    binaryMediaTypes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.',
        }),
    ).exactOptional(),
    minimumCompressionSize: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.',
        }),
    ).exactOptional(),
    apiKeySource: ApiKeySourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.',
        }),
    ).exactOptional(),
    endpointConfiguration: EndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint configuration of this RestApi showing the endpoint types of the API. ',
        }),
    ).exactOptional(),
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
    disableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a REST API.', required: [] })
  .openapi('RestApi')

const CacheClusterSizeSchema = z
  .enum(['0.5', '1.6', '6.1', '13.5', '28.4', '58.2', '118', '237'])
  .openapi({ description: 'Returns the size of the CacheCluster.' })
  .openapi('CacheClusterSize')

const CacheClusterStatusSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'AVAILABLE',
    'DELETE_IN_PROGRESS',
    'NOT_AVAILABLE',
    'FLUSH_IN_PROGRESS',
  ])
  .openapi({ description: 'Returns the status of the CacheCluster.' })
  .openapi('CacheClusterStatus')

const UnauthorizedCacheControlHeaderStrategySchema = z
  .enum(['FAIL_WITH_403', 'SUCCEED_WITH_RESPONSE_HEADER', 'SUCCEED_WITHOUT_RESPONSE_HEADER'])
  .openapi('UnauthorizedCacheControlHeaderStrategy')

const MethodSettingSchema = z
  .object({
    metricsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Amazon CloudWatch metrics are enabled for this method. The PATCH path for this setting is <code>/{method_setting_key}/metrics/enabled</code>, and the value is a Boolean.',
        }),
    ).exactOptional(),
    loggingLevel: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/loglevel</code>, and the available levels are <code>OFF</code>, <code>ERROR</code>, and <code>INFO</code>. Choose <code>ERROR</code> to write only error-level entries to CloudWatch Logs, or choose <code>INFO</code> to include all <code>ERROR</code> events as well as extra informational events.',
        }),
    ).exactOptional(),
    dataTraceEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. The PATCH path for this setting is <code>/{method_setting_key}/logging/dataTrace</code>, and the value is a Boolean.',
        }),
    ).exactOptional(),
    throttlingBurstLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the throttling burst limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/burstLimit</code>, and the value is an integer.',
        }),
    ).exactOptional(),
    throttlingRateLimit: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the throttling rate limit. The PATCH path for this setting is <code>/{method_setting_key}/throttling/rateLimit</code>, and the value is a double.',
        }),
    ).exactOptional(),
    cachingEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/enabled</code>, and the value is a Boolean.',
        }),
    ).exactOptional(),
    cacheTtlInSeconds: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached. The PATCH path for this setting is <code>/{method_setting_key}/caching/ttlInSeconds</code>, and the value is an integer.',
        }),
    ).exactOptional(),
    cacheDataEncrypted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the cached responses are encrypted. The PATCH path for this setting is <code>/{method_setting_key}/caching/dataEncrypted</code>, and the value is a Boolean.',
        }),
    ).exactOptional(),
    requireAuthorizationForCacheControl: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether authorization is required for a cache invalidation request. The PATCH path for this setting is <code>/{method_setting_key}/caching/requireAuthorizationForCacheControl</code>, and the value is a Boolean.',
        }),
    ).exactOptional(),
    unauthorizedCacheControlHeaderStrategy: UnauthorizedCacheControlHeaderStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies how to handle unauthorized requests for cache invalidation. The PATCH path for this setting is <code>/{method_setting_key}/caching/unauthorizedCacheControlHeaderStrategy</code>, and the available values are <code>FAIL_WITH_403</code>, <code>SUCCEED_WITH_RESPONSE_HEADER</code>, <code>SUCCEED_WITHOUT_RESPONSE_HEADER</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Specifies the method setting properties.', required: [] })
  .openapi('MethodSetting')

const MapOfMethodSettingsSchema = z
  .record(z.string(), MethodSettingSchema)
  .openapi('MapOfMethodSettings')

const AccessLogSettingsSchema = z
  .object({
    format: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A single line format of the access logs of data, as specified by selected $context variables. The format must include at least <code>$context.requestId</code>.',
        }),
    ).exactOptional(),
    destinationArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with <code>amazon-apigateway-</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Access log settings, including the access log format and access log destination ARN.',
    required: [],
  })
  .openapi('AccessLogSettings')

const CanarySettingsSchema = z
  .object({
    percentTraffic: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The percent (0-100) of traffic diverted to a canary deployment.',
        }),
    ).exactOptional(),
    deploymentId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the canary deployment.' }),
    ).exactOptional(),
    stageVariableOverrides: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.',
        }),
    ).exactOptional(),
    useStageCache: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether the canary deployment uses the stage cache or not.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Configuration settings of a canary deployment.', required: [] })
  .openapi('CanarySettings')

const StageSchema = z
  .object({
    deploymentId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of the Deployment that the stage points to.' }),
    ).exactOptional(),
    clientCertificateId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of a client certificate for an API stage.' }),
    ).exactOptional(),
    stageName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: "The stage's description." }),
    ).exactOptional(),
    cacheClusterEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether a cache cluster is enabled for the stage.' }),
    ).exactOptional(),
    cacheClusterSize: CacheClusterSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stage\'s cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.',
        }),
    ).exactOptional(),
    cacheClusterStatus: CacheClusterStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the cache cluster for the stage, if enabled.' }),
    ).exactOptional(),
    methodSettings: MapOfMethodSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that defines the method settings for a Stage resource. Keys (designated as <code>/{method_setting_key</code> below) are method paths defined as <code>{resource_path}/{http_method}</code> for an individual method override, or <code>/\\*/\\*</code> for overriding all methods in the stage. ',
        }),
    ).exactOptional(),
    variables: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that defines the stage variables for a Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.',
        }),
    ).exactOptional(),
    documentationVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the associated API documentation.' }),
    ).exactOptional(),
    accessLogSettings: AccessLogSettingsSchema.and(
      z.any().openapi({ description: 'Settings for logging access in this stage.' }),
    ).exactOptional(),
    canarySettings: CanarySettingsSchema.and(
      z.any().openapi({ description: 'Settings for the canary deployment in this stage.' }),
    ).exactOptional(),
    tracingEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether active tracing with X-ray is enabled for the Stage.',
        }),
    ).exactOptional(),
    webAclArn: StringSchema.and(
      z.any().openapi({ description: 'The ARN of the WebAcl associated with the Stage.' }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the stage was created.' }),
    ).exactOptional(),
    lastUpdatedDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the stage last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a unique identifier for a version of a deployed RestApi that is callable by users.',
    required: [],
  })
  .openapi('Stage')

const ThrottleSettingsSchema = z
  .object({
    burstLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.',
        }),
    ).exactOptional(),
    rateLimit: DoubleSchema.and(
      z.any().openapi({ description: 'The API target request rate limit.' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The API request rate limits.', required: [] })
  .openapi('ThrottleSettings')

const MapOfApiStageThrottleSettingsSchema = z
  .record(z.string(), ThrottleSettingsSchema)
  .openapi('MapOfApiStageThrottleSettings')

const ApiStageSchema = z
  .object({
    apiId: StringSchema.and(
      z.any().openapi({ description: 'API Id of the associated API stage in a usage plan.' }),
    ).exactOptional(),
    stage: StringSchema.and(
      z
        .any()
        .openapi({ description: 'API stage name of the associated API stage in a usage plan.' }),
    ).exactOptional(),
    throttle: MapOfApiStageThrottleSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map containing method level throttling information for API stage in a usage plan.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'API stage name of the associated API stage in a usage plan.',
    required: [],
  })
  .openapi('ApiStage')

const ListOfApiStageSchema = z.array(ApiStageSchema).openapi('ListOfApiStage')

const QuotaPeriodTypeSchema = z.enum(['DAY', 'WEEK', 'MONTH']).openapi('QuotaPeriodType')

const QuotaSettingsSchema = z
  .object({
    limit: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target maximum number of requests that can be made in a given time period.',
        }),
    ).exactOptional(),
    offset: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of requests subtracted from the given limit in the initial time period.',
        }),
    ).exactOptional(),
    period: QuotaPeriodTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Quotas configured for a usage plan.', required: [] })
  .openapi('QuotaSettings')

const UsagePlanSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of a UsagePlan resource.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of a usage plan.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of a usage plan.' }),
    ).exactOptional(),
    apiStages: ListOfApiStageSchema.and(
      z.any().openapi({ description: 'The associated API stages of a usage plan.' }),
    ).exactOptional(),
    throttle: ThrottleSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map containing method level throttling information for API stage in a usage plan.',
        }),
    ).exactOptional(),
    quota: QuotaSettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target maximum number of permitted requests per a given unit time interval.',
        }),
    ).exactOptional(),
    productCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set. In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html">Amazon Web Services Budgets</a> to monitor costs and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF</a> to manage API requests.',
    required: [],
  })
  .openapi('UsagePlan')

const UsagePlanKeySchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The Id of a usage plan key.' }),
    ).exactOptional(),
    type: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.',
        }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'The value of a usage plan key.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of a usage plan key.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a usage plan key to identify a plan customer.',
    required: [],
  })
  .openapi('UsagePlanKey')

const VpcLinkStatusSchema = z
  .enum(['AVAILABLE', 'PENDING', 'DELETING', 'FAILED'])
  .openapi('VpcLinkStatus')

const VpcLinkSchema = z
  .object({
    id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.',
        }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'The name used to label and identify the VPC link.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the VPC link.' }),
    ).exactOptional(),
    targetArns: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.',
        }),
    ).exactOptional(),
    status: VpcLinkStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the VPC link. The valid values are <code>AVAILABLE</code>, <code>PENDING</code>, <code>DELETING</code>, or <code>FAILED</code>. Deploying an API will wait if the status is <code>PENDING</code> and will fail if the status is <code>DELETING</code>. ',
        }),
    ).exactOptional(),
    statusMessage: StringSchema.and(
      z.any().openapi({ description: 'A description about the VPC link status.' }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC).',
    required: [],
  })
  .openapi('VpcLink')

const ClientCertificateSchema = z
  .object({
    clientCertificateId: StringSchema.and(
      z.any().openapi({ description: 'The identifier of the client certificate.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the client certificate.' }),
    ).exactOptional(),
    pemEncodedCertificate: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The PEM-encoded public key of the client certificate, which can be used to configure certificate authentication in the integration endpoint .',
        }),
    ).exactOptional(),
    createdDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the client certificate was created.' }),
    ).exactOptional(),
    expirationDate: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp when the client certificate will expire.' }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.',
    required: [],
  })
  .openapi('ClientCertificate')

const AccountSchema = z
  .object({
    cloudwatchRoleArn: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of an Amazon CloudWatch role for the current Account. ' }),
    ).exactOptional(),
    throttleSettings: ThrottleSettingsSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the API request limits configured for the current Account.',
        }),
    ).exactOptional(),
    features: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of features supported for the account. When usage plans are enabled, the features list will include an entry of <code>"UsagePlans"</code>.',
        }),
    ).exactOptional(),
    apiKeyVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the API keys used for the account.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents an AWS account that is associated with API Gateway.',
    required: [],
  })
  .openapi('Account')

const ListOfApiKeySchema = z.array(ApiKeySchema).openapi('ListOfApiKey')

const ApiKeysSchema = z
  .object({
    warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.',
        }),
    ).exactOptional(),
    position: StringSchema.exactOptional(),
    items: ListOfApiKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a collection of API keys as represented by an ApiKeys resource.',
    required: [],
  })
  .openapi('ApiKeys')

const ListOfAuthorizerSchema = z.array(AuthorizerSchema).openapi('ListOfAuthorizer')

const AuthorizersSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfAuthorizerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of Authorizer resources.', required: [] })
  .openapi('Authorizers')

const ListOfBasePathMappingSchema = z.array(BasePathMappingSchema).openapi('ListOfBasePathMapping')

const BasePathMappingsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfBasePathMappingSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of BasePathMapping resources.', required: [] })
  .openapi('BasePathMappings')

const ListOfClientCertificateSchema = z
  .array(ClientCertificateSchema)
  .openapi('ListOfClientCertificate')

const ClientCertificatesSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfClientCertificateSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of ClientCertificate resources.', required: [] })
  .openapi('ClientCertificates')

const ListOfDeploymentSchema = z.array(DeploymentSchema).openapi('ListOfDeployment')

const DeploymentsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfDeploymentSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.',
    required: [],
  })
  .openapi('Deployments')

const ListOfDocumentationPartSchema = z
  .array(DocumentationPartSchema)
  .openapi('ListOfDocumentationPart')

const DocumentationPartsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfDocumentationPartSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The collection of documentation parts of an API.', required: [] })
  .openapi('DocumentationParts')

const ListOfDocumentationVersionSchema = z
  .array(DocumentationVersionSchema)
  .openapi('ListOfDocumentationVersion')

const DocumentationVersionsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfDocumentationVersionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The collection of documentation snapshots of an API. ', required: [] })
  .openapi('DocumentationVersions')

const ListOfDomainNameSchema = z.array(DomainNameSchema).openapi('ListOfDomainName')

const DomainNamesSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfDomainNameSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of DomainName resources.', required: [] })
  .openapi('DomainNames')

const BlobSchema = z.string().openapi('Blob')

const ExportResponseSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description: 'The binary blob response to GetExport, which contains the export.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The binary blob response to GetExport, which contains the generated SDK.',
    required: [],
  })
  .openapi('ExportResponse')

const GatewayResponseTypeSchema = z
  .enum([
    'DEFAULT_4XX',
    'DEFAULT_5XX',
    'RESOURCE_NOT_FOUND',
    'UNAUTHORIZED',
    'INVALID_API_KEY',
    'ACCESS_DENIED',
    'AUTHORIZER_FAILURE',
    'AUTHORIZER_CONFIGURATION_ERROR',
    'INVALID_SIGNATURE',
    'EXPIRED_TOKEN',
    'MISSING_AUTHENTICATION_TOKEN',
    'INTEGRATION_FAILURE',
    'INTEGRATION_TIMEOUT',
    'API_CONFIGURATION_ERROR',
    'UNSUPPORTED_MEDIA_TYPE',
    'BAD_REQUEST_PARAMETERS',
    'BAD_REQUEST_BODY',
    'REQUEST_TOO_LARGE',
    'THROTTLED',
    'QUOTA_EXCEEDED',
    'WAF_FILTERED',
  ])
  .openapi('GatewayResponseType')

const GatewayResponseSchema = z
  .object({
    responseType: GatewayResponseTypeSchema.and(
      z.any().openapi({ description: 'The response type of the associated GatewayResponse.' }),
    ).exactOptional(),
    statusCode: StatusCodeSchema.and(
      z.any().openapi({ description: 'The HTTP status code for this GatewayResponse.' }),
    ).exactOptional(),
    responseParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.',
        }),
    ).exactOptional(),
    responseTemplates: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Response templates of the GatewayResponse as a string-to-string map of key-value pairs.',
        }),
    ).exactOptional(),
    defaultResponse: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether this GatewayResponse is the default gateway response (<code>true</code>) or not (<code>false</code>). A default gateway response is one generated by API Gateway without any customization by an API developer. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A gateway response of a given response type and status code, with optional response parameters and mapping templates.',
    required: [],
  })
  .openapi('GatewayResponse')

const ListOfGatewayResponseSchema = z.array(GatewayResponseSchema).openapi('ListOfGatewayResponse')

const GatewayResponsesSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfGatewayResponseSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'Returns the entire collection, because of no pagination support.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The collection of the GatewayResponse instances of a RestApi as a <code>responseType</code>-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection.',
    required: [],
  })
  .openapi('GatewayResponses')

const TemplateSchema = z
  .object({
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Apache Velocity Template Language (VTL) template content used for the template resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a mapping template used to transform a payload.',
    required: [],
  })
  .openapi('Template')

const ListOfModelSchema = z.array(ModelSchema).openapi('ListOfModel')

const ModelsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfModelSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of Model resources.', required: [] })
  .openapi('Models')

const ListOfRequestValidatorSchema = z
  .array(RequestValidatorSchema)
  .openapi('ListOfRequestValidator')

const RequestValidatorsSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfRequestValidatorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of RequestValidator resources of a given RestApi.',
    required: [],
  })
  .openapi('RequestValidators')

const ListOfResourceSchema = z.array(ResourceSchema).openapi('ListOfResource')

const ResourcesSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfResourceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of Resource resources.', required: [] })
  .openapi('Resources')

const ListOfRestApiSchema = z.array(RestApiSchema).openapi('ListOfRestApi')

const RestApisSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfRestApiSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.',
    required: [],
  })
  .openapi('RestApis')

const SdkResponseSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description: 'The binary blob response to GetSdk, which contains the generated SDK.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The binary blob response to GetSdk, which contains the generated SDK.',
    required: [],
  })
  .openapi('SdkResponse')

const SdkConfigurationPropertySchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of a an SdkType configuration property.' }),
    ).exactOptional(),
    friendlyName: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The user-friendly name of an SdkType configuration property.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of an SdkType configuration property.' }),
    ).exactOptional(),
    required: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A boolean flag of an SdkType configuration property to indicate if the associated SDK configuration property is required (<code>true</code>) or not (<code>false</code>).',
        }),
    ).exactOptional(),
    defaultValue: StringSchema.and(
      z.any().openapi({ description: 'The default value of an SdkType configuration property.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A configuration property of an SDK type.', required: [] })
  .openapi('SdkConfigurationProperty')

const ListOfSdkConfigurationPropertySchema = z
  .array(SdkConfigurationPropertySchema)
  .openapi('ListOfSdkConfigurationProperty')

const SdkTypeSchema = z
  .object({
    id: StringSchema.and(
      z.any().openapi({ description: 'The identifier of an SdkType instance.' }),
    ).exactOptional(),
    friendlyName: StringSchema.and(
      z.any().openapi({ description: 'The user-friendly name of an SdkType instance.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of an SdkType.' }),
    ).exactOptional(),
    configurationProperties: ListOfSdkConfigurationPropertySchema.and(
      z.any().openapi({ description: 'A list of configuration properties of an SdkType.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A type of SDK that API Gateway can generate.', required: [] })
  .openapi('SdkType')

const ListOfSdkTypeSchema = z.array(SdkTypeSchema).openapi('ListOfSdkType')

const SdkTypesSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfSdkTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The collection of SdkType instances.', required: [] })
  .openapi('SdkTypes')

const ListOfStageSchema = z.array(StageSchema).openapi('ListOfStage')

const StagesSchema = z
  .object({
    item: ListOfStageSchema.and(
      z.any().openapi({ description: 'The current page of elements from this collection.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of Stage resources that are associated with the ApiKey resource.',
    required: [],
  })
  .openapi('Stages')

const TagsSchema = z
  .object({
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The collection of tags. Each tag element is associated with a given resource.',
    required: [],
  })
  .openapi('Tags')

const LongSchema = z.int().openapi('Long')

const ListOfLongSchema = z.array(LongSchema).openapi('ListOfLong')

const ListOfUsageSchema = z.array(ListOfLongSchema).openapi('ListOfUsage')

const MapOfKeyUsagesSchema = z.record(z.string(), ListOfUsageSchema).openapi('MapOfKeyUsages')

const UsageSchema = z
  .object({
    usagePlanId: StringSchema.and(
      z.any().openapi({ description: 'The plan Id associated with this usage data.' }),
    ).exactOptional(),
    startDate: StringSchema.and(
      z.any().openapi({ description: 'The starting date of the usage data.' }),
    ).exactOptional(),
    endDate: StringSchema.and(
      z.any().openapi({ description: 'The ending date of the usage data.' }),
    ).exactOptional(),
    position: StringSchema.exactOptional(),
    items: MapOfKeyUsagesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'values' },
          description:
            'The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, <code>{..., "values" : { "{api_key}" : [ [0, 100], [10, 90], [100, 10]]}</code>, where <code>{api_key}</code> stands for an API key value and the daily log entry is of the format <code>[used quota, remaining quota]</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents the usage data of a usage plan.', required: [] })
  .openapi('Usage')

const ListOfUsagePlanKeySchema = z.array(UsagePlanKeySchema).openapi('ListOfUsagePlanKey')

const UsagePlanKeysSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfUsagePlanKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.',
    required: [],
  })
  .openapi('UsagePlanKeys')

const ListOfUsagePlanSchema = z.array(UsagePlanSchema).openapi('ListOfUsagePlan')

const UsagePlansSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfUsagePlanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a collection of usage plans for an AWS account.',
    required: [],
  })
  .openapi('UsagePlans')

const ListOfVpcLinkSchema = z.array(VpcLinkSchema).openapi('ListOfVpcLink')

const VpcLinksSchema = z
  .object({
    position: StringSchema.exactOptional(),
    items: ListOfVpcLinkSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'item' },
          description: 'The current page of elements from this collection.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: "The collection of VPC links under the caller's account in a region.",
    required: [],
  })
  .openapi('VpcLinks')

const ApiKeyIdsSchema = z
  .object({
    ids: ListOfStringSchema.and(
      z.any().openapi({ description: 'A list of all the ApiKey identifiers.' }),
    ).exactOptional(),
    warnings: ListOfStringSchema.and(
      z.any().openapi({ description: 'A list of warning messages.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The identifier of an ApiKey used in a UsagePlan.', required: [] })
  .openapi('ApiKeyIds')

const DocumentationPartIdsSchema = z
  .object({
    ids: ListOfStringSchema.and(
      z.any().openapi({ description: 'A list of the returned documentation part identifiers.' }),
    ).exactOptional(),
    warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of warning messages reported during import of documentation parts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A collection of the imported DocumentationPart identifiers.',
    required: [],
  })
  .openapi('DocumentationPartIds')

const MapOfStringToListSchema = z
  .record(z.string(), ListOfStringSchema)
  .openapi('MapOfStringToList')

const TestInvokeAuthorizerResponseSchema = z
  .object({
    clientStatus: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HTTP status code that the client would have received. Value is 0 if the authorizer succeeded.',
        }),
    ).exactOptional(),
    log: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The API Gateway execution log for the test authorizer request.' }),
    ).exactOptional(),
    latency: LongSchema.and(
      z.any().openapi({ description: 'The execution latency of the test authorizer request.' }),
    ).exactOptional(),
    principalId: StringSchema.and(
      z.any().openapi({ description: 'The principal identity returned by the Authorizer' }),
    ).exactOptional(),
    policy: StringSchema.and(
      z.any().openapi({ description: 'The JSON policy document returned by the Authorizer' }),
    ).exactOptional(),
    authorization: MapOfStringToListSchema.and(
      z.any().openapi({ description: 'The authorization response.' }),
    ).exactOptional(),
    claims: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The open identity claims, with any supported custom attributes, returned from the Cognito Your User Pool configured for the API.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response of the test invoke request for a custom Authorizer',
    required: [],
  })
  .openapi('TestInvokeAuthorizerResponse')

const TestInvokeMethodResponseSchema = z
  .object({
    status: IntegerSchema.and(
      z.any().openapi({ description: 'The HTTP status code.' }),
    ).exactOptional(),
    body: StringSchema.and(
      z.any().openapi({ description: 'The body of the HTTP response.' }),
    ).exactOptional(),
    headers: MapOfStringToStringSchema.and(
      z.any().openapi({ description: 'The headers of the HTTP response.' }),
    ).exactOptional(),
    multiValueHeaders: MapOfStringToListSchema.and(
      z
        .any()
        .openapi({
          description: 'The headers of the HTTP response as a map from string to list of values.',
        }),
    ).exactOptional(),
    log: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The API Gateway execution log for the test invoke request.' }),
    ).exactOptional(),
    latency: LongSchema.and(
      z.any().openapi({ description: 'The execution latency of the test invoke request.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the response of the test invoke request in the HTTP method.',
    required: [],
  })
  .openapi('TestInvokeMethodResponse')

const OpSchema = z.enum(['add', 'remove', 'replace', 'move', 'copy', 'test']).openapi('Op')

const PatchOperationSchema = z
  .object({
    op: OpSchema.and(
      z
        .any()
        .openapi({
          description:
            'An update operation to be performed with this PATCH request. The valid value can be add, remove, replace or copy. Not all valid operations are supported for a given resource. Support of the operations depends on specific operational contexts. Attempts to apply an unsupported operation on a resource will return an error message..',
        }),
    ).exactOptional(),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The op operation\'s target, as identified by a JSON Pointer value that references a location within the targeted resource. For example, if the target resource has an updateable property of {"name":"value"}, the path for this property is /name. If the name property value is a JSON object (e.g., {"name": {"child/name": "child-value"}}), the path for the child/name property will be /name/child~1name. Any slash ("/") character appearing in path names must be escaped with "~1", as shown in the example above. Each op operation can have only one path associated with it.',
        }),
    ).exactOptional(),
    value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new target value of the update operation. It is applicable for the add or replace operation. When using AWS CLI to update a property of a JSON value, enclose the JSON object with a pair of single quotes in a Linux shell, e.g., \'{"a": ...}\'.',
        }),
    ).exactOptional(),
    from: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The copy update operation\'s source as identified by a JSON-Pointer value referencing the location within the targeted resource to copy the value from. For example, to promote a canary deployment, you copy the canary deployment ID to the affiliated deployment ID by calling a PATCH request on a Stage resource with "op":"copy", "from":"/canarySettings/deploymentId" and "path":"/deploymentId".',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
    required: [],
  })
  .openapi('PatchOperation')

const ApiKeysFormatSchema = z.literal('csv').openapi('ApiKeysFormat')

const ListOfStageKeysSchema = z.array(StageKeySchema).openapi('ListOfStageKeys')

const CreateApiKeyRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the ApiKey.' }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the ApiKey.' }),
    ).exactOptional(),
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the ApiKey can be used by callers.' }),
    ).exactOptional(),
    generateDistinctId: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.',
        }),
    ).exactOptional(),
    value: StringSchema.and(
      z.any().openapi({ description: 'Specifies a value of the API key.' }),
    ).exactOptional(),
    stageKeys: ListOfStageKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.',
        }),
    ).exactOptional(),
    customerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateApiKeyRequest',
    description: 'Request to create an ApiKey resource.',
    required: [],
  })
  .openapi('CreateApiKeyRequest')

const CreateAuthorizerRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the authorizer.' })),
    type: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.',
        }),
    ),
    providerARNs: ListOfARNsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. ',
        }),
    ).exactOptional(),
    authType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional customer-defined field, used in OpenAPI imports and exports without functional impact.',
        }),
    ).exactOptional(),
    authorizerUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.",
        }),
    ).exactOptional(),
    authorizerCredentials: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.",
        }),
    ).exactOptional(),
    identitySource: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.',
        }),
    ).exactOptional(),
    identityValidationExpression: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.",
        }),
    ).exactOptional(),
    authorizerResultTtlInSeconds: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'type'],
    title: 'CreateAuthorizerRequest',
    description: 'Request to add a new Authorizer to an existing RestApi resource.',
  })
  .openapi('CreateAuthorizerRequest')

const CreateBasePathMappingRequestSchema = z
  .object({
    basePath: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.",
        }),
    ).exactOptional(),
    restApiId: StringSchema.and(
      z.any().openapi({ description: 'The string identifier of the associated RestApi.' }),
    ),
    stage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['restApiId'],
    title: 'CreateBasePathMappingRequest',
    description: 'Requests API Gateway to create a new BasePathMapping resource.',
  })
  .openapi('CreateBasePathMappingRequest')

const DeploymentCanarySettingsSchema = z
  .object({
    percentTraffic: DoubleSchema.and(
      z
        .any()
        .openapi({
          description: 'The percentage (0.0-100.0) of traffic routed to the canary deployment.',
        }),
    ).exactOptional(),
    stageVariableOverrides: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.',
        }),
    ).exactOptional(),
    useStageCache: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The input configuration for a canary deployment.', required: [] })
  .openapi('DeploymentCanarySettings')

const CreateDeploymentRequestSchema = z
  .object({
    stageName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Stage resource for the Deployment resource to create.',
        }),
    ).exactOptional(),
    stageDescription: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The description of the Stage resource for the Deployment resource to create.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description for the Deployment resource to create.' }),
    ).exactOptional(),
    cacheClusterEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Enables a cache cluster for the Stage resource specified in the input.',
        }),
    ).exactOptional(),
    cacheClusterSize: CacheClusterSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stage\'s cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.',
        }),
    ).exactOptional(),
    variables: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.',
        }),
    ).exactOptional(),
    canarySettings: DeploymentCanarySettingsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input configuration for the canary deployment when the deployment is a canary release deployment. ',
        }),
    ).exactOptional(),
    tracingEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether active tracing with X-ray is enabled for the Stage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateDeploymentRequest',
    description: 'Requests API Gateway to create a Deployment resource.',
    required: [],
  })
  .openapi('CreateDeploymentRequest')

const CreateDocumentationPartRequestSchema = z
  .object({
    location: DocumentationPartLocationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the targeted API entity of the to-be-created documentation part.',
        }),
    ),
    properties: z
      .any()
      .openapi({
        description:
          'The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.',
      }),
  })
  .openapi({
    required: ['location', 'properties'],
    title: 'CreateDocumentationPartRequest',
    description: 'Creates a new documentation part of a given API.',
  })
  .openapi('CreateDocumentationPartRequest')

const CreateDocumentationVersionRequestSchema = z
  .object({
    documentationVersion: StringSchema.and(
      z.any().openapi({ description: 'The version identifier of the new snapshot.' }),
    ),
    stageName: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The stage name to be associated with the new documentation snapshot.',
        }),
    ).exactOptional(),
    description: StringSchema.and(
      z.any().openapi({ description: 'A description about the new documentation snapshot.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['documentationVersion'],
    title: 'CreateDocumentationVersionRequest',
    description: 'Creates a new documentation version of a given API.',
  })
  .openapi('CreateDocumentationVersionRequest')

const MutualTlsAuthenticationInputSchema = z
  .object({
    truststoreUri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example <code>s3://bucket-name/key-name</code>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
        }),
    ).exactOptional(),
    truststoreVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.',
    required: [],
  })
  .openapi('MutualTlsAuthenticationInput')

const CreateDomainNameRequestSchema = z
  .object({
    domainName: StringSchema.and(
      z.any().openapi({ description: 'The name of the DomainName resource.' }),
    ),
    certificateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.',
        }),
    ).exactOptional(),
    certificateBody: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.',
        }),
    ).exactOptional(),
    certificatePrivateKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.",
        }),
    ).exactOptional(),
    certificateChain: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.',
        }),
    ).exactOptional(),
    certificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.',
        }),
    ).exactOptional(),
    regionalCertificateName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-friendly name of the certificate that will be used by regional endpoint for this domain name.',
        }),
    ).exactOptional(),
    regionalCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.',
        }),
    ).exactOptional(),
    endpointConfiguration: EndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint configuration of this DomainName showing the endpoint types of the domain name. ',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
    securityPolicy: SecurityPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.',
        }),
    ).exactOptional(),
    mutualTlsAuthentication: MutualTlsAuthenticationInputSchema.exactOptional(),
    ownershipVerificationCertificateArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['domainName'],
    title: 'CreateDomainNameRequest',
    description: 'A request to create a new domain name.',
  })
  .openapi('CreateDomainNameRequest')

const CreateModelRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the model. Must be alphanumeric.' }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the model.' }),
    ).exactOptional(),
    schema: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
    contentType: StringSchema.and(
      z.any().openapi({ description: 'The content-type for the model.' }),
    ),
  })
  .openapi({
    required: ['name', 'contentType'],
    title: 'CreateModelRequest',
    description: 'Request to add a new Model to an existing RestApi resource.',
  })
  .openapi('CreateModelRequest')

const CreateRequestValidatorRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the to-be-created RequestValidator.' }),
    ).exactOptional(),
    validateRequestBody: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).',
        }),
    ).exactOptional(),
    validateRequestParameters: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateRequestValidatorRequest',
    description: 'Creates a RequestValidator of a given RestApi.',
    required: [],
  })
  .openapi('CreateRequestValidatorRequest')

const CreateResourceRequestSchema = z
  .object({
    pathPart: StringSchema.and(
      z.any().openapi({ description: 'The last path segment for this resource.' }),
    ),
  })
  .openapi({
    required: ['pathPart'],
    title: 'CreateResourceRequest',
    description: 'Requests API Gateway to create a Resource resource.',
  })
  .openapi('CreateResourceRequest')

const CreateRestApiRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the RestApi.' })),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the RestApi.' }),
    ).exactOptional(),
    version: StringSchema.and(
      z.any().openapi({ description: 'A version identifier for the API.' }),
    ).exactOptional(),
    cloneFrom: StringSchema.and(
      z.any().openapi({ description: 'The ID of the RestApi that you want to clone from.' }),
    ).exactOptional(),
    binaryMediaTypes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.',
        }),
    ).exactOptional(),
    minimumCompressionSize: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.',
        }),
    ).exactOptional(),
    apiKeySource: ApiKeySourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.',
        }),
    ).exactOptional(),
    endpointConfiguration: EndpointConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint configuration of this RestApi showing the endpoint types of the API. ',
        }),
    ).exactOptional(),
    policy: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
    disableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'CreateRestApiRequest',
    description: 'The POST Request to add a new RestApi resource to your collection.',
  })
  .openapi('CreateRestApiRequest')

const CreateStageRequestSchema = z
  .object({
    stageName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
        }),
    ),
    deploymentId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of the Deployment resource for the Stage resource.',
        }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the Stage resource.' }),
    ).exactOptional(),
    cacheClusterEnabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether cache clustering is enabled for the stage.' }),
    ).exactOptional(),
    cacheClusterSize: CacheClusterSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The stage\'s cache capacity in GB. For more information about choosing a cache size, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html">Enabling API caching to enhance responsiveness</a>.',
        }),
    ).exactOptional(),
    variables: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.',
        }),
    ).exactOptional(),
    documentationVersion: StringSchema.and(
      z.any().openapi({ description: 'The version of the associated API documentation.' }),
    ).exactOptional(),
    canarySettings: CanarySettingsSchema.and(
      z.any().openapi({ description: 'The canary deployment settings of this stage.' }),
    ).exactOptional(),
    tracingEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether active tracing with X-ray is enabled for the Stage.',
        }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['stageName', 'deploymentId'],
    title: 'CreateStageRequest',
    description: 'Requests API Gateway to create a Stage resource.',
  })
  .openapi('CreateStageRequest')

const CreateUsagePlanKeyRequestSchema = z
  .object({
    keyId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The identifier of a UsagePlanKey resource for a plan customer.' }),
    ),
    keyType: StringSchema.and(
      z.any().openapi({ description: 'The type of a UsagePlanKey resource for a plan customer.' }),
    ),
  })
  .openapi({
    required: ['keyId', 'keyType'],
    title: 'CreateUsagePlanKeyRequest',
    description:
      'The POST request to create a usage plan key for adding an existing API key to a usage plan.',
  })
  .openapi('CreateUsagePlanKeyRequest')

const CreateUsagePlanRequestSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'The name of the usage plan.' })),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the usage plan.' }),
    ).exactOptional(),
    apiStages: ListOfApiStageSchema.and(
      z.any().openapi({ description: 'The associated API stages of the usage plan.' }),
    ).exactOptional(),
    throttle: ThrottleSettingsSchema.and(
      z.any().openapi({ description: 'The throttling limits of the usage plan.' }),
    ).exactOptional(),
    quota: QuotaSettingsSchema.and(
      z.any().openapi({ description: 'The quota of the usage plan.' }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name'],
    title: 'CreateUsagePlanRequest',
    description:
      'The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.',
  })
  .openapi('CreateUsagePlanRequest')

const CreateVpcLinkRequestSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name used to label and identify the VPC link.' }),
    ),
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the VPC link.' }),
    ).exactOptional(),
    targetArns: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.',
        }),
    ),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['name', 'targetArns'],
    title: 'CreateVpcLinkRequest',
    description:
      "Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.",
  })
  .openapi('CreateVpcLinkRequest')

const DeleteApiKeyRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteApiKeyRequest',
    description: 'A request to delete the ApiKey resource.',
  })
  .openapi('DeleteApiKeyRequest')

const DeleteAuthorizerRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteAuthorizerRequest',
    description: 'Request to delete an existing Authorizer resource.',
  })
  .openapi('DeleteAuthorizerRequest')

const DeleteBasePathMappingRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteBasePathMappingRequest',
    description: 'A request to delete the BasePathMapping resource.',
  })
  .openapi('DeleteBasePathMappingRequest')

const DeleteClientCertificateRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteClientCertificateRequest',
    description: 'A request to delete the ClientCertificate resource.',
  })
  .openapi('DeleteClientCertificateRequest')

const DeleteDeploymentRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDeploymentRequest',
    description: 'Requests API Gateway to delete a Deployment resource.',
  })
  .openapi('DeleteDeploymentRequest')

const DeleteDocumentationPartRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDocumentationPartRequest',
    description: 'Deletes an existing documentation part of an API.',
  })
  .openapi('DeleteDocumentationPartRequest')

const DeleteDocumentationVersionRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDocumentationVersionRequest',
    description: 'Deletes an existing documentation version of an API.',
  })
  .openapi('DeleteDocumentationVersionRequest')

const DeleteDomainNameRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteDomainNameRequest',
    description: 'A request to delete the DomainName resource.',
  })
  .openapi('DeleteDomainNameRequest')

const DeleteGatewayResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteGatewayResponseRequest',
    description:
      'Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.',
  })
  .openapi('DeleteGatewayResponseRequest')

const DeleteIntegrationRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteIntegrationRequest',
    description: 'Represents a delete integration request.',
  })
  .openapi('DeleteIntegrationRequest')

const DeleteIntegrationResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteIntegrationResponseRequest',
    description: 'Represents a delete integration response request.',
  })
  .openapi('DeleteIntegrationResponseRequest')

const DeleteMethodRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteMethodRequest',
    description: 'Request to delete an existing Method resource.',
  })
  .openapi('DeleteMethodRequest')

const DeleteMethodResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteMethodResponseRequest',
    description: 'A request to delete an existing MethodResponse resource.',
  })
  .openapi('DeleteMethodResponseRequest')

const DeleteModelRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteModelRequest',
    description: 'Request to delete an existing model in an existing RestApi resource.',
  })
  .openapi('DeleteModelRequest')

const DeleteRequestValidatorRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteRequestValidatorRequest',
    description: 'Deletes a specified RequestValidator of a given RestApi.',
  })
  .openapi('DeleteRequestValidatorRequest')

const DeleteResourceRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteResourceRequest', description: 'Request to delete a Resource.' })
  .openapi('DeleteResourceRequest')

const DeleteRestApiRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteRestApiRequest',
    description: 'Request to delete the specified API from your collection.',
  })
  .openapi('DeleteRestApiRequest')

const DeleteStageRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteStageRequest',
    description: 'Requests API Gateway to delete a Stage resource.',
  })
  .openapi('DeleteStageRequest')

const DeleteUsagePlanKeyRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteUsagePlanKeyRequest',
    description:
      'The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.',
  })
  .openapi('DeleteUsagePlanKeyRequest')

const DeleteUsagePlanRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteUsagePlanRequest',
    description: 'The DELETE request to delete a usage plan of a given plan Id.',
  })
  .openapi('DeleteUsagePlanRequest')

const DeleteVpcLinkRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteVpcLinkRequest',
    description: 'Deletes an existing VpcLink of a specified identifier.',
  })
  .openapi('DeleteVpcLinkRequest')

const FlushStageAuthorizersCacheRequestSchema = z
  .object({})
  .openapi({
    title: 'FlushStageAuthorizersCacheRequest',
    description: 'Request to flush authorizer cache entries on a specified stage.',
  })
  .openapi('FlushStageAuthorizersCacheRequest')

const FlushStageCacheRequestSchema = z
  .object({})
  .openapi({
    title: 'FlushStageCacheRequest',
    description: "Requests API Gateway to flush a stage's cache.",
  })
  .openapi('FlushStageCacheRequest')

const GenerateClientCertificateRequestSchema = z
  .object({
    description: StringSchema.and(
      z.any().openapi({ description: 'The description of the ClientCertificate.' }),
    ).exactOptional(),
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'GenerateClientCertificateRequest',
    description: 'A request to generate a ClientCertificate resource.',
    required: [],
  })
  .openapi('GenerateClientCertificateRequest')

const GetAccountRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAccountRequest',
    description: 'Requests API Gateway to get information about the current Account resource.',
  })
  .openapi('GetAccountRequest')

const GetApiKeyRequestSchema = z
  .object({})
  .openapi({
    title: 'GetApiKeyRequest',
    description: 'A request to get information about the current ApiKey resource.',
  })
  .openapi('GetApiKeyRequest')

const GetApiKeysRequestSchema = z
  .object({})
  .openapi({
    title: 'GetApiKeysRequest',
    description: 'A request to get information about the current ApiKeys resource.',
  })
  .openapi('GetApiKeysRequest')

const GetAuthorizerRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAuthorizerRequest',
    description: 'Request to describe an existing Authorizer resource.',
  })
  .openapi('GetAuthorizerRequest')

const GetAuthorizersRequestSchema = z
  .object({})
  .openapi({
    title: 'GetAuthorizersRequest',
    description: 'Request to describe an existing Authorizers resource.',
  })
  .openapi('GetAuthorizersRequest')

const GetBasePathMappingRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBasePathMappingRequest',
    description: 'Request to describe a BasePathMapping resource.',
  })
  .openapi('GetBasePathMappingRequest')

const GetBasePathMappingsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetBasePathMappingsRequest',
    description: 'A request to get information about a collection of BasePathMapping resources.',
  })
  .openapi('GetBasePathMappingsRequest')

const GetClientCertificateRequestSchema = z
  .object({})
  .openapi({
    title: 'GetClientCertificateRequest',
    description: 'A request to get information about the current ClientCertificate resource.',
  })
  .openapi('GetClientCertificateRequest')

const GetClientCertificatesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetClientCertificatesRequest',
    description: 'A request to get information about a collection of ClientCertificate resources.',
  })
  .openapi('GetClientCertificatesRequest')

const GetDeploymentRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDeploymentRequest',
    description: 'Requests API Gateway to get information about a Deployment resource.',
  })
  .openapi('GetDeploymentRequest')

const GetDeploymentsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDeploymentsRequest',
    description: 'Requests API Gateway to get information about a Deployments collection.',
  })
  .openapi('GetDeploymentsRequest')

const GetDocumentationPartRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDocumentationPartRequest',
    description: 'Gets a specified documentation part of a given API.',
  })
  .openapi('GetDocumentationPartRequest')

const LocationStatusTypeSchema = z
  .enum(['DOCUMENTED', 'UNDOCUMENTED'])
  .openapi('LocationStatusType')

const GetDocumentationPartsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDocumentationPartsRequest',
    description:
      'Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).',
  })
  .openapi('GetDocumentationPartsRequest')

const GetDocumentationVersionRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDocumentationVersionRequest',
    description: 'Gets a documentation snapshot of an API.',
  })
  .openapi('GetDocumentationVersionRequest')

const GetDocumentationVersionsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDocumentationVersionsRequest',
    description: 'Gets the documentation versions of an API.',
  })
  .openapi('GetDocumentationVersionsRequest')

const GetDomainNameRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDomainNameRequest',
    description: 'Request to get the name of a DomainName resource.',
  })
  .openapi('GetDomainNameRequest')

const GetDomainNamesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetDomainNamesRequest',
    description: 'Request to describe a collection of DomainName resources.',
  })
  .openapi('GetDomainNamesRequest')

const GetExportRequestSchema = z
  .object({})
  .openapi({
    title: 'GetExportRequest',
    description: 'Request a new export of a RestApi for a particular Stage.',
  })
  .openapi('GetExportRequest')

const GetGatewayResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'GetGatewayResponseRequest',
    description: 'Gets a GatewayResponse of a specified response type on the given RestApi.',
  })
  .openapi('GetGatewayResponseRequest')

const GetGatewayResponsesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetGatewayResponsesRequest',
    description:
      'Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.',
  })
  .openapi('GetGatewayResponsesRequest')

const GetIntegrationRequestSchema = z
  .object({})
  .openapi({
    title: 'GetIntegrationRequest',
    description: 'Represents a request to get the integration configuration.',
  })
  .openapi('GetIntegrationRequest')

const GetIntegrationResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'GetIntegrationResponseRequest',
    description: 'Represents a get integration response request.',
  })
  .openapi('GetIntegrationResponseRequest')

const GetMethodRequestSchema = z
  .object({})
  .openapi({
    title: 'GetMethodRequest',
    description: 'Request to describe an existing Method resource.',
  })
  .openapi('GetMethodRequest')

const GetMethodResponseRequestSchema = z
  .object({})
  .openapi({
    title: 'GetMethodResponseRequest',
    description: 'Request to describe a MethodResponse resource.',
  })
  .openapi('GetMethodResponseRequest')

const GetModelRequestSchema = z
  .object({})
  .openapi({
    title: 'GetModelRequest',
    description: 'Request to list information about a model in an existing RestApi resource.',
  })
  .openapi('GetModelRequest')

const GetModelTemplateRequestSchema = z
  .object({})
  .openapi({
    title: 'GetModelTemplateRequest',
    description: 'Request to generate a sample mapping template used to transform the payload.',
  })
  .openapi('GetModelTemplateRequest')

const GetModelsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetModelsRequest',
    description: 'Request to list existing Models defined for a RestApi resource.',
  })
  .openapi('GetModelsRequest')

const GetRequestValidatorRequestSchema = z
  .object({})
  .openapi({
    title: 'GetRequestValidatorRequest',
    description: 'Gets a RequestValidator of a given RestApi.',
  })
  .openapi('GetRequestValidatorRequest')

const GetRequestValidatorsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetRequestValidatorsRequest',
    description: 'Gets the RequestValidators collection of a given RestApi.',
  })
  .openapi('GetRequestValidatorsRequest')

const GetResourceRequestSchema = z
  .object({})
  .openapi({
    title: 'GetResourceRequest',
    description: 'Request to list information about a resource.',
  })
  .openapi('GetResourceRequest')

const GetResourcesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetResourcesRequest',
    description: 'Request to list information about a collection of resources.',
  })
  .openapi('GetResourcesRequest')

const GetRestApiRequestSchema = z
  .object({})
  .openapi({
    title: 'GetRestApiRequest',
    description: 'The GET request to list an existing RestApi defined for your collection. ',
  })
  .openapi('GetRestApiRequest')

const GetRestApisRequestSchema = z
  .object({})
  .openapi({
    title: 'GetRestApisRequest',
    description: 'The GET request to list existing RestApis defined for your collection.',
  })
  .openapi('GetRestApisRequest')

const GetSdkRequestSchema = z
  .object({})
  .openapi({
    title: 'GetSdkRequest',
    description: 'Request a new generated client SDK for a RestApi and Stage.',
  })
  .openapi('GetSdkRequest')

const GetSdkTypeRequestSchema = z
  .object({})
  .openapi({ title: 'GetSdkTypeRequest', description: 'Get an SdkType instance.' })
  .openapi('GetSdkTypeRequest')

const GetSdkTypesRequestSchema = z
  .object({})
  .openapi({ title: 'GetSdkTypesRequest', description: 'Get the SdkTypes collection.' })
  .openapi('GetSdkTypesRequest')

const GetStageRequestSchema = z
  .object({})
  .openapi({
    title: 'GetStageRequest',
    description: 'Requests API Gateway to get information about a Stage resource.',
  })
  .openapi('GetStageRequest')

const GetStagesRequestSchema = z
  .object({})
  .openapi({
    title: 'GetStagesRequest',
    description: 'Requests API Gateway to get information about one or more Stage resources.',
  })
  .openapi('GetStagesRequest')

const GetTagsRequestSchema = z
  .object({})
  .openapi({
    title: 'GetTagsRequest',
    description: 'Gets the Tags collection for a given resource.',
  })
  .openapi('GetTagsRequest')

const GetUsagePlanKeyRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUsagePlanKeyRequest',
    description: 'The GET request to get a usage plan key of a given key identifier.',
  })
  .openapi('GetUsagePlanKeyRequest')

const GetUsagePlanKeysRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUsagePlanKeysRequest',
    description:
      'The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.',
  })
  .openapi('GetUsagePlanKeysRequest')

const GetUsagePlanRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUsagePlanRequest',
    description: 'The GET request to get a usage plan of a given plan identifier.',
  })
  .openapi('GetUsagePlanRequest')

const GetUsagePlansRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUsagePlansRequest',
    description: "The GET request to get all the usage plans of the caller's account.",
  })
  .openapi('GetUsagePlansRequest')

const GetUsageRequestSchema = z
  .object({})
  .openapi({
    title: 'GetUsageRequest',
    description:
      'The GET request to get the usage data of a usage plan in a specified time interval.',
  })
  .openapi('GetUsageRequest')

const GetVpcLinkRequestSchema = z
  .object({})
  .openapi({
    title: 'GetVpcLinkRequest',
    description: "Gets a specified VPC link under the caller's account in a region.",
  })
  .openapi('GetVpcLinkRequest')

const GetVpcLinksRequestSchema = z
  .object({})
  .openapi({
    title: 'GetVpcLinksRequest',
    description: "Gets the VpcLinks collection under the caller's account in a selected region.",
  })
  .openapi('GetVpcLinksRequest')

const ImportApiKeysRequestSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The payload of the POST request to import API keys. For the payload format, see API Key File Format.',
        }),
    ),
  })
  .openapi({
    required: ['body'],
    title: 'ImportApiKeysRequest',
    description:
      'The POST request to import API keys from an external source, such as a CSV-formatted file.',
  })
  .openapi('ImportApiKeysRequest')

const PutModeSchema = z.enum(['merge', 'overwrite']).openapi('PutMode')

const ImportDocumentationPartsRequestSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.',
        }),
    ),
  })
  .openapi({
    required: ['body'],
    title: 'ImportDocumentationPartsRequest',
    description: 'Import documentation parts from an external (e.g., OpenAPI) definition file. ',
  })
  .openapi('ImportDocumentationPartsRequest')

const ImportRestApiRequestSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.',
        }),
    ),
  })
  .openapi({
    required: ['body'],
    title: 'ImportRestApiRequest',
    description:
      'A POST request to import an API to API Gateway using an input of an API definition file.',
  })
  .openapi('ImportRestApiRequest')

const ListOfPatchOperationSchema = z
  .array(PatchOperationSchema)
  .openapi({
    description:
      'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
  })
  .openapi('ListOfPatchOperation')

const PutGatewayResponseRequestSchema = z
  .object({
    statusCode: StatusCodeSchema.and(
      z.any().openapi({ description: 'The HTTP status code of the GatewayResponse.' }),
    ).exactOptional(),
    responseParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.',
        }),
    ).exactOptional(),
    responseTemplates: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Response templates of the GatewayResponse as a string-to-string map of key-value pairs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutGatewayResponseRequest',
    description:
      'Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.',
    required: [],
  })
  .openapi('PutGatewayResponseRequest')

const PutIntegrationRequestSchema = z
  .object({
    type: IntegrationTypeSchema.and(
      z.any().openapi({ description: "Specifies a put integration input's type." }),
    ),
    integrationHttpMethod: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'httpMethod' },
          description: 'The HTTP method for the integration.',
        }),
    ).exactOptional(),
    uri: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api</code>}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code>.',
        }),
    ).exactOptional(),
    connectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.',
        }),
    ).exactOptional(),
    connectionId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type.',
        }),
    ).exactOptional(),
    credentials: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies whether credentials are required for a put integration.',
        }),
    ).exactOptional(),
    requestParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.',
        }),
    ).exactOptional(),
    requestTemplates: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.',
        }),
    ).exactOptional(),
    passthroughBehavior: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. ',
        }),
    ).exactOptional(),
    cacheNamespace: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.',
        }),
    ).exactOptional(),
    cacheKeyParameters: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.',
        }),
    ).exactOptional(),
    contentHandling: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>',
        }),
    ).exactOptional(),
    timeoutInMillis: NullableIntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.',
        }),
    ).exactOptional(),
    tlsConfig: TlsConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['type'],
    title: 'PutIntegrationRequest',
    description: "Sets up a method's integration.",
  })
  .openapi('PutIntegrationRequest')

const PutIntegrationResponseRequestSchema = z
  .object({
    selectionPattern: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the selection pattern of a put integration response.' }),
    ).exactOptional(),
    responseParameters: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.',
        }),
    ).exactOptional(),
    responseTemplates: MapOfStringToStringSchema.and(
      z.any().openapi({ description: "Specifies a put integration response's templates." }),
    ).exactOptional(),
    contentHandling: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutIntegrationResponseRequest',
    description: 'Represents a put integration response request.',
    required: [],
  })
  .openapi('PutIntegrationResponseRequest')

const PutMethodRequestSchema = z
  .object({
    authorizationType: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.",
        }),
    ),
    authorizerId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    apiKeyRequired: BooleanSchema.and(
      z.any().openapi({ description: 'Specifies whether the method required a valid ApiKey.' }),
    ).exactOptional(),
    operationName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.',
        }),
    ).exactOptional(),
    requestParameters: MapOfStringToBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.',
        }),
    ).exactOptional(),
    requestModels: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.",
        }),
    ).exactOptional(),
    requestValidatorId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier of a RequestValidator for validating the method request.',
        }),
    ).exactOptional(),
    authorizationScopes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['authorizationType'],
    title: 'PutMethodRequest',
    description: 'Request to add a method to an existing Resource resource.',
  })
  .openapi('PutMethodRequest')

const PutMethodResponseRequestSchema = z
  .object({
    responseParameters: MapOfStringToBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)",
        }),
    ).exactOptional(),
    responseModels: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'PutMethodResponseRequest',
    description: 'Request to add a MethodResponse to an existing Method resource.',
    required: [],
  })
  .openapi('PutMethodResponseRequest')

const PutRestApiRequestSchema = z
  .object({
    body: BlobSchema.and(
      z
        .any()
        .openapi({
          description:
            'The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.',
        }),
    ),
  })
  .openapi({
    required: ['body'],
    title: 'PutRestApiRequest',
    description:
      'A PUT request to update an existing API, with external API definitions specified as the request body.',
  })
  .openapi('PutRestApiRequest')

const TagResourceRequestSchema = z
  .object({
    tags: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
        }),
    ),
  })
  .openapi({
    required: ['tags'],
    title: 'TagResourceRequest',
    description: 'Adds or updates a tag on a given resource.',
  })
  .openapi('TagResourceRequest')

const TestInvokeAuthorizerRequestSchema = z
  .object({
    headers: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.',
        }),
    ).exactOptional(),
    multiValueHeaders: MapOfStringToListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.',
        }),
    ).exactOptional(),
    pathWithQueryString: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.',
        }),
    ).exactOptional(),
    body: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The simulated request body of an incoming invocation request.' }),
    ).exactOptional(),
    stageVariables: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map of stage variables to simulate an invocation on a deployed Stage.',
        }),
    ).exactOptional(),
    additionalContext: MapOfStringToStringSchema.and(
      z.any().openapi({ description: 'A key-value map of additional context variables.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'TestInvokeAuthorizerRequest',
    description: 'Make a request to simulate the invocation of an Authorizer.',
    required: [],
  })
  .openapi('TestInvokeAuthorizerRequest')

const TestInvokeMethodRequestSchema = z
  .object({
    pathWithQueryString: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.',
        }),
    ).exactOptional(),
    body: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The simulated request body of an incoming invocation request.' }),
    ).exactOptional(),
    headers: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description: 'A key-value map of headers to simulate an incoming invocation request.',
        }),
    ).exactOptional(),
    multiValueHeaders: MapOfStringToListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The headers as a map from string to list of values to simulate an incoming invocation request.',
        }),
    ).exactOptional(),
    clientCertificateId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.',
        }),
    ).exactOptional(),
    stageVariables: MapOfStringToStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A key-value map of stage variables to simulate an invocation on a deployed Stage.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'TestInvokeMethodRequest',
    description: 'Make a request to simulate the invocation of a Method.',
    required: [],
  })
  .openapi('TestInvokeMethodRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest', description: 'Removes a tag from a given resource.' })
  .openapi('UntagResourceRequest')

const UpdateAccountRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateAccountRequest',
    description: 'Requests API Gateway to change information about the current Account resource.',
    required: [],
  })
  .openapi('UpdateAccountRequest')

const UpdateApiKeyRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateApiKeyRequest',
    description: 'A request to change information about an ApiKey resource.',
    required: [],
  })
  .openapi('UpdateApiKeyRequest')

const UpdateAuthorizerRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateAuthorizerRequest',
    description: 'Request to update an existing Authorizer resource.',
    required: [],
  })
  .openapi('UpdateAuthorizerRequest')

const UpdateBasePathMappingRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateBasePathMappingRequest',
    description: 'A request to change information about the BasePathMapping resource.',
    required: [],
  })
  .openapi('UpdateBasePathMappingRequest')

const UpdateClientCertificateRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateClientCertificateRequest',
    description: 'A request to change information about an ClientCertificate resource.',
    required: [],
  })
  .openapi('UpdateClientCertificateRequest')

const UpdateDeploymentRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateDeploymentRequest',
    description: 'Requests API Gateway to change information about a Deployment resource.',
    required: [],
  })
  .openapi('UpdateDeploymentRequest')

const UpdateDocumentationPartRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateDocumentationPartRequest',
    description: 'Updates an existing documentation part of a given API.',
    required: [],
  })
  .openapi('UpdateDocumentationPartRequest')

const UpdateDocumentationVersionRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateDocumentationVersionRequest',
    description: 'Updates an existing documentation version of an API.',
    required: [],
  })
  .openapi('UpdateDocumentationVersionRequest')

const UpdateDomainNameRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateDomainNameRequest',
    description: 'A request to change information about the DomainName resource.',
    required: [],
  })
  .openapi('UpdateDomainNameRequest')

const UpdateGatewayResponseRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateGatewayResponseRequest',
    description: 'Updates a GatewayResponse of a specified response type on the given RestApi.',
    required: [],
  })
  .openapi('UpdateGatewayResponseRequest')

const UpdateIntegrationRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateIntegrationRequest',
    description: 'Represents an update integration request.',
    required: [],
  })
  .openapi('UpdateIntegrationRequest')

const UpdateIntegrationResponseRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateIntegrationResponseRequest',
    description: 'Represents an update integration response request.',
    required: [],
  })
  .openapi('UpdateIntegrationResponseRequest')

const UpdateMethodRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateMethodRequest',
    description: 'Request to update an existing Method resource.',
    required: [],
  })
  .openapi('UpdateMethodRequest')

const UpdateMethodResponseRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateMethodResponseRequest',
    description: 'A request to update an existing MethodResponse resource.',
    required: [],
  })
  .openapi('UpdateMethodResponseRequest')

const UpdateModelRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateModelRequest',
    description: 'Request to update an existing model in an existing RestApi resource.',
    required: [],
  })
  .openapi('UpdateModelRequest')

const UpdateRequestValidatorRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateRequestValidatorRequest',
    description: 'Updates a RequestValidator of a given RestApi.',
    required: [],
  })
  .openapi('UpdateRequestValidatorRequest')

const UpdateResourceRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateResourceRequest',
    description: 'Request to change information about a Resource resource.',
    required: [],
  })
  .openapi('UpdateResourceRequest')

const UpdateRestApiRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateRestApiRequest',
    description: 'Request to update an existing RestApi resource in your collection.',
    required: [],
  })
  .openapi('UpdateRestApiRequest')

const UpdateStageRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateStageRequest',
    description: 'Requests API Gateway to change information about a Stage resource.',
    required: [],
  })
  .openapi('UpdateStageRequest')

const UpdateUsagePlanRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateUsagePlanRequest',
    description: 'The PATCH request to update a usage plan of a given plan Id.',
    required: [],
  })
  .openapi('UpdateUsagePlanRequest')

const UpdateUsageRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateUsageRequest',
    description:
      'The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.',
    required: [],
  })
  .openapi('UpdateUsageRequest')

const UpdateVpcLinkRequestSchema = z
  .object({
    patchOperations: ListOfPatchOperationSchema.and(
      z
        .any()
        .openapi({
          description:
            'For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateVpcLinkRequest',
    description: 'Updates an existing VpcLink of a specified identifier.',
    required: [],
  })
  .openapi('UpdateVpcLinkRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getApikeysRoute = createRoute({
  method: 'get',
  path: '/apikeys',
  description: 'Gets information about the current ApiKeys resource.',
  operationId: 'GetApiKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The name of queried API keys.',
            schema: { type: 'string' },
          },
        }),
      customerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'customerId',
            in: 'query',
            required: false,
            description:
              'The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.',
            schema: { type: 'string' },
          },
        }),
      includeValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeValues',
            in: 'query',
            required: false,
            description:
              'A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApiKeysSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postApikeysRoute = createRoute({
  method: 'post',
  path: '/apikeys',
  description: 'Create an ApiKey resource. ',
  operationId: 'CreateApiKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'The name of the ApiKey.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the ApiKey.' }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Specifies whether the ApiKey can be used by callers.' }),
              generateDistinctId: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.',
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({ description: 'Specifies a value of the API key.' }),
              stageKeys: z
                .array(StageKeySchema)
                .exactOptional()
                .openapi({
                  description:
                    'DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.',
                }),
              customerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ApiKeySchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdAuthorizersRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/authorizers',
  description: 'Describe an existing Authorizers resource.',
  operationId: 'GetAuthorizers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AuthorizersSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdAuthorizersRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/authorizers',
  description: 'Adds a new Authorizer resource to an existing RestApi resource.',
  operationId: 'CreateAuthorizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the authorizer.' }),
              type: z
                .enum(['TOKEN', 'REQUEST', 'COGNITO_USER_POOLS'])
                .openapi({
                  description:
                    'The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.',
                }),
              providerARNs: z
                .array(ProviderARNSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. ',
                }),
              authType: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional customer-defined field, used in OpenAPI imports and exports without functional impact.',
                }),
              authorizerUri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.",
                }),
              authorizerCredentials: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.",
                }),
              identitySource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.',
                }),
              identityValidationExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.",
                }),
              authorizerResultTtlInSeconds: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.',
                }),
            })
            .openapi({ required: ['name', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: AuthorizerSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getDomainnamesDomainNameBasepathmappingsRoute = createRoute({
  method: 'get',
  path: '/domainnames/{domain_name}/basepathmappings',
  description: 'Represents a collection of BasePathMapping resources.',
  operationId: 'GetBasePathMappings',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The domain name of a BasePathMapping resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BasePathMappingsSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postDomainnamesDomainNameBasepathmappingsRoute = createRoute({
  method: 'post',
  path: '/domainnames/{domain_name}/basepathmappings',
  description: 'Creates a new BasePathMapping resource.',
  operationId: 'CreateBasePathMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The domain name of the BasePathMapping resource to create.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              basePath: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.",
                }),
              restApiId: z
                .string()
                .openapi({ description: 'The string identifier of the associated RestApi.' }),
              stage: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.",
                }),
            })
            .openapi({ required: ['restApiId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: BasePathMappingSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/deployments',
  description: 'Gets information about a Deployments collection.',
  operationId: 'GetDeployments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DeploymentsSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/deployments',
  description:
    'Creates a Deployment resource, which makes a specified RestApi callable over the internet.',
  operationId: 'CreateDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              stageName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The name of the Stage resource for the Deployment resource to create.',
                }),
              stageDescription: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The description of the Stage resource for the Deployment resource to create.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description for the Deployment resource to create.' }),
              cacheClusterEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Enables a cache cluster for the Stage resource specified in the input.',
                }),
              cacheClusterSize: z
                .enum(['0.5', '1.6', '6.1', '13.5', '28.4', '58.2', '118', '237'])
                .exactOptional()
                .openapi({ description: 'Returns the size of the CacheCluster.' }),
              variables: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.',
                }),
              canarySettings: z
                .object({
                  percentTraffic: DoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The percentage (0.0-100.0) of traffic routed to the canary deployment.',
                      }),
                  ).exactOptional(),
                  stageVariableOverrides: MapOfStringToStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.',
                      }),
                  ).exactOptional(),
                  useStageCache: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The input configuration for a canary deployment.',
                  required: [],
                }),
              tracingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether active tracing with X-ray is enabled for the Stage.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: DeploymentSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDocumentationPartsRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/documentation/parts',
  description: 'Gets documentation parts.',
  operationId: 'GetDocumentationParts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum([
          'API',
          'AUTHORIZER',
          'MODEL',
          'RESOURCE',
          'METHOD',
          'PATH_PARAMETER',
          'QUERY_PARAMETER',
          'REQUEST_HEADER',
          'REQUEST_BODY',
          'RESPONSE',
          'RESPONSE_HEADER',
          'RESPONSE_BODY',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'The type of API entities of the to-be-retrieved documentation parts. ',
            schema: {
              type: 'string',
              enum: [
                'API',
                'AUTHORIZER',
                'MODEL',
                'RESOURCE',
                'METHOD',
                'PATH_PARAMETER',
                'QUERY_PARAMETER',
                'REQUEST_HEADER',
                'REQUEST_BODY',
                'RESPONSE',
                'RESPONSE_HEADER',
                'RESPONSE_BODY',
              ],
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: 'The name of API entities of the to-be-retrieved documentation parts.',
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            description: 'The path of API entities of the to-be-retrieved documentation parts.',
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
      locationStatus: z
        .enum(['DOCUMENTED', 'UNDOCUMENTED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'locationStatus',
            in: 'query',
            required: false,
            description:
              'The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving DocumentationPart resources with content and <code>UNDOCUMENTED</code> for DocumentationPart resources without content.',
            schema: { type: 'string', enum: ['DOCUMENTED', 'UNDOCUMENTED'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationPartsSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putRestapisRestapiIdDocumentationPartsRoute = createRoute({
  method: 'put',
  path: '/restapis/{restapi_id}/documentation/parts',
  description: 'Imports documentation parts',
  operationId: 'ImportDocumentationParts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      mode: z
        .enum(['merge', 'overwrite'])
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            required: false,
            description:
              'A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing DocumentationParts definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.',
            schema: { type: 'string', enum: ['merge', 'overwrite'] },
          },
        }),
      failonwarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'failonwarnings',
            in: 'query',
            required: false,
            description:
              'A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z
                .string()
                .openapi({
                  description:
                    'Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.',
                }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationPartIdsSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdDocumentationPartsRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/documentation/parts',
  description: 'Creates a documentation part.',
  operationId: 'CreateDocumentationPart',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              location: z
                .object({
                  type: DocumentationPartTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>, <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.',
                      }),
                  ).exactOptional(),
                  path: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.",
                      }),
                  ).exactOptional(),
                  method: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The HTTP verb of a method. It is a valid field for the API entity types of <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>method</code> attribute must match that of the parent entity exactly.",
                      }),
                  ).exactOptional(),
                  statusCode: DocumentationPartLocationStatusCodeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.",
                      }),
                  ).exactOptional(),
                  name: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Specifies the target API entity to which the documentation applies.',
                  required: [],
                }),
              properties: z
                .string()
                .openapi({
                  description:
                    'The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.',
                }),
            })
            .openapi({ required: ['location', 'properties'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationPartSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDocumentationVersionsRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/documentation/versions',
  description: 'Gets documentation versions.',
  operationId: 'GetDocumentationVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationVersionsSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdDocumentationVersionsRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/documentation/versions',
  description: 'Creates a documentation version',
  operationId: 'CreateDocumentationVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              documentationVersion: z
                .string()
                .openapi({ description: 'The version identifier of the new snapshot.' }),
              stageName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The stage name to be associated with the new documentation snapshot.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A description about the new documentation snapshot.' }),
            })
            .openapi({ required: ['documentationVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationVersionSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getDomainnamesRoute = createRoute({
  method: 'get',
  path: '/domainnames',
  description: 'Represents a collection of DomainName resources.',
  operationId: 'GetDomainNames',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DomainNamesSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postDomainnamesRoute = createRoute({
  method: 'post',
  path: '/domainnames',
  description: 'Creates a new domain name.',
  operationId: 'CreateDomainName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domainName: z
                .string()
                .openapi({ description: 'The name of the DomainName resource.' }),
              certificateName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.',
                }),
              certificateBody: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.',
                }),
              certificatePrivateKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.",
                }),
              certificateChain: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.',
                }),
              certificateArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.',
                }),
              regionalCertificateName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user-friendly name of the certificate that will be used by regional endpoint for this domain name.',
                }),
              regionalCertificateArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.',
                }),
              endpointConfiguration: z
                .object({
                  types: ListOfEndpointTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.',
                      }),
                  ).exactOptional(),
                  vpcEndpointIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for <code>PRIVATE</code> endpoint type.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. ',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
              securityPolicy: z
                .enum(['TLS_1_0', 'TLS_1_2'])
                .exactOptional()
                .openapi({
                  description:
                    'The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.',
                }),
              mutualTlsAuthentication: z
                .object({
                  truststoreUri: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example <code>s3://bucket-name/key-name</code>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
                      }),
                  ).exactOptional(),
                  truststoreVersion: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.',
                  required: [],
                }),
              ownershipVerificationCertificateArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn.',
                }),
            })
            .openapi({ required: ['domainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: DomainNameSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdModelsRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/models',
  description: 'Describes existing Models defined for a RestApi resource.',
  operationId: 'GetModels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ModelsSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdModelsRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/models',
  description: 'Adds a new Model resource to an existing RestApi resource.',
  operationId: 'CreateModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The RestApi identifier under which the Model will be created.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name of the model. Must be alphanumeric.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the model.' }),
              schema: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model.',
                }),
              contentType: z.string().openapi({ description: 'The content-type for the model.' }),
            })
            .openapi({ required: ['name', 'contentType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ModelSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdRequestvalidatorsRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/requestvalidators',
  description: 'Gets the RequestValidators collection of a given RestApi.',
  operationId: 'GetRequestValidators',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestValidatorsSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdRequestvalidatorsRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/requestvalidators',
  description: 'Creates a RequestValidator of a given RestApi.',
  operationId: 'CreateRequestValidator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the to-be-created RequestValidator.' }),
              validateRequestBody: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).',
                }),
              validateRequestParameters: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: RequestValidatorSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdResourcesParentIdRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/resources/{parent_id}',
  description: 'Creates a Resource resource.',
  operationId: 'CreateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      parent_id: z
        .string()
        .openapi({
          param: {
            name: 'parent_id',
            in: 'path',
            required: true,
            description: "The parent resource's identifier.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pathPart: z
                .string()
                .openapi({ description: 'The last path segment for this resource.' }),
            })
            .openapi({ required: ['pathPart'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ResourceSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRoute = createRoute({
  method: 'get',
  path: '/restapis',
  description: 'Lists the RestApis resources for your collection.',
  operationId: 'GetRestApis',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: RestApisSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRoute = createRoute({
  method: 'post',
  path: '/restapis',
  description: 'Creates a new RestApi resource.',
  operationId: 'CreateRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the RestApi.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the RestApi.' }),
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'A version identifier for the API.' }),
              cloneFrom: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the RestApi that you want to clone from.' }),
              binaryMediaTypes: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.',
                }),
              minimumCompressionSize: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.',
                }),
              apiKeySource: z
                .enum(['HEADER', 'AUTHORIZER'])
                .exactOptional()
                .openapi({
                  description:
                    'The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.',
                }),
              endpointConfiguration: z
                .object({
                  types: ListOfEndpointTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is <code>"EDGE"</code>. For a regional API and its custom domain name, the endpoint type is <code>REGIONAL</code>. For a private API, the endpoint type is <code>PRIVATE</code>.',
                      }),
                  ).exactOptional(),
                  vpcEndpointIds: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for <code>PRIVATE</code> endpoint type.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. ',
                  required: [],
                }),
              policy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
              disableExecuteApiEndpoint: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: RestApiSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdStagesRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/stages',
  description: 'Gets information about one or more Stage resources.',
  operationId: 'GetStages',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      deploymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'query',
            required: false,
            description: "The stages' deployment identifiers.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: StagesSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdStagesRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/stages',
  description:
    'Creates a new Stage resource that references a pre-existing Deployment for the API. ',
  operationId: 'CreateStage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              stageName: z
                .string()
                .openapi({
                  description:
                    'The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
                }),
              deploymentId: z
                .string()
                .openapi({
                  description: 'The identifier of the Deployment resource for the Stage resource.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the Stage resource.' }),
              cacheClusterEnabled: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether cache clustering is enabled for the stage.' }),
              cacheClusterSize: z
                .enum(['0.5', '1.6', '6.1', '13.5', '28.4', '58.2', '118', '237'])
                .exactOptional()
                .openapi({ description: 'Returns the size of the CacheCluster.' }),
              variables: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.',
                }),
              documentationVersion: z
                .string()
                .exactOptional()
                .openapi({ description: 'The version of the associated API documentation.' }),
              canarySettings: z
                .object({
                  percentTraffic: DoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The percent (0-100) of traffic diverted to a canary deployment.',
                      }),
                  ).exactOptional(),
                  deploymentId: StringSchema.and(
                    z.any().openapi({ description: 'The ID of the canary deployment.' }),
                  ).exactOptional(),
                  stageVariableOverrides: MapOfStringToStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.',
                      }),
                  ).exactOptional(),
                  useStageCache: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A Boolean flag to indicate whether the canary deployment uses the stage cache or not.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration settings of a canary deployment.',
                  required: [],
                }),
              tracingEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether active tracing with X-ray is enabled for the Stage.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: ['stageName', 'deploymentId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: StageSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getUsageplansRoute = createRoute({
  method: 'get',
  path: '/usageplans',
  description: "Gets all the usage plans of the caller's account.",
  operationId: 'GetUsagePlans',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      keyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'keyId',
            in: 'query',
            required: false,
            description: 'The identifier of the API key associated with the usage plans.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UsagePlansSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postUsageplansRoute = createRoute({
  method: 'post',
  path: '/usageplans',
  description:
    'Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. ',
  operationId: 'CreateUsagePlan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the usage plan.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the usage plan.' }),
              apiStages: z
                .array(ApiStageSchema)
                .exactOptional()
                .openapi({ description: 'The associated API stages of the usage plan.' }),
              throttle: z
                .object({
                  burstLimit: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.',
                      }),
                  ).exactOptional(),
                  rateLimit: DoubleSchema.and(
                    z.any().openapi({ description: 'The API target request rate limit.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: ' The API request rate limits.', required: [] }),
              quota: z
                .object({
                  limit: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The target maximum number of requests that can be made in a given time period.',
                      }),
                  ).exactOptional(),
                  offset: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The number of requests subtracted from the given limit in the initial time period.',
                      }),
                  ).exactOptional(),
                  period: QuotaPeriodTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Quotas configured for a usage plan.', required: [] }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: UsagePlanSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getUsageplansUsageplanIdKeysRoute = createRoute({
  method: 'get',
  path: '/usageplans/{usageplanId}/keys',
  description:
    'Gets all the usage plan keys representing the API keys added to a specified usage plan.',
  operationId: 'GetUsagePlanKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description:
              'The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description:
              'A query parameter specifying the name of the to-be-returned usage plan keys.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsagePlanKeysSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postUsageplansUsageplanIdKeysRoute = createRoute({
  method: 'post',
  path: '/usageplans/{usageplanId}/keys',
  description: 'Creates a usage plan key for adding an existing API key to a usage plan.',
  operationId: 'CreateUsagePlanKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description:
              'The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              keyId: z
                .string()
                .openapi({
                  description: 'The identifier of a UsagePlanKey resource for a plan customer.',
                }),
              keyType: z
                .string()
                .openapi({
                  description: 'The type of a UsagePlanKey resource for a plan customer.',
                }),
            })
            .openapi({ required: ['keyId', 'keyType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: UsagePlanKeySchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getVpclinksRoute = createRoute({
  method: 'get',
  path: '/vpclinks',
  description: "Gets the VpcLinks collection under the caller's account in a selected region.",
  operationId: 'GetVpcLinks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: VpcLinksSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postVpclinksRoute = createRoute({
  method: 'post',
  path: '/vpclinks',
  description:
    "Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.",
  operationId: 'CreateVpcLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The name used to label and identify the VPC link.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the VPC link.' }),
              targetArns: z
                .array(StringSchema)
                .openapi({
                  description:
                    'The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: ['name', 'targetArns'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: { description: 'Success', content: { 'application/json': { schema: VpcLinkSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getApikeysApiKeyRoute = createRoute({
  method: 'get',
  path: '/apikeys/{api_Key}',
  description: 'Gets information about the current ApiKey resource.',
  operationId: 'GetApiKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      api_Key: z
        .string()
        .openapi({
          param: {
            name: 'api_Key',
            in: 'path',
            required: true,
            description: 'The identifier of the ApiKey resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeValue: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeValue',
            in: 'query',
            required: false,
            description:
              'A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApiKeySchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteApikeysApiKeyRoute = createRoute({
  method: 'delete',
  path: '/apikeys/{api_Key}',
  description: 'Deletes the ApiKey resource.',
  operationId: 'DeleteApiKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      api_Key: z
        .string()
        .openapi({
          param: {
            name: 'api_Key',
            in: 'path',
            required: true,
            description: 'The identifier of the ApiKey resource to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchApikeysApiKeyRoute = createRoute({
  method: 'patch',
  path: '/apikeys/{api_Key}',
  description: 'Changes information about an ApiKey resource.',
  operationId: 'UpdateApiKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      api_Key: z
        .string()
        .openapi({
          param: {
            name: 'api_Key',
            in: 'path',
            required: true,
            description: 'The identifier of the ApiKey resource to be updated.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ApiKeySchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/authorizers/{authorizer_id}',
  description: 'Describe an existing Authorizer resource.',
  operationId: 'GetAuthorizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      authorizer_id: z
        .string()
        .openapi({
          param: {
            name: 'authorizer_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Authorizer resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AuthorizerSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/authorizers/{authorizer_id}',
  description:
    'Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.',
  operationId: 'TestInvokeAuthorizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      authorizer_id: z
        .string()
        .openapi({
          param: {
            name: 'authorizer_id',
            in: 'path',
            required: true,
            description: "Specifies a test invoke authorizer request's Authorizer ID.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              headers: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.',
                }),
              multiValueHeaders: z
                .record(z.string(), ListOfStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.',
                }),
              pathWithQueryString: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The simulated request body of an incoming invocation request.',
                }),
              stageVariables: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A key-value map of stage variables to simulate an invocation on a deployed Stage.',
                }),
              additionalContext: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'A key-value map of additional context variables.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestInvokeAuthorizerResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/authorizers/{authorizer_id}',
  description: 'Deletes an existing Authorizer resource.',
  operationId: 'DeleteAuthorizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      authorizer_id: z
        .string()
        .openapi({
          param: {
            name: 'authorizer_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Authorizer resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/authorizers/{authorizer_id}',
  description: 'Updates an existing Authorizer resource.',
  operationId: 'UpdateAuthorizer',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      authorizer_id: z
        .string()
        .openapi({
          param: {
            name: 'authorizer_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Authorizer resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AuthorizerSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getDomainnamesDomainNameBasepathmappingsBasePathRoute = createRoute({
  method: 'get',
  path: '/domainnames/{domain_name}/basepathmappings/{base_path}',
  description: 'Describe a BasePathMapping resource.',
  operationId: 'GetBasePathMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The domain name of the BasePathMapping resource to be described.',
            schema: { type: 'string' },
          },
        }),
      base_path: z
        .string()
        .openapi({
          param: {
            name: 'base_path',
            in: 'path',
            required: true,
            description:
              "The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BasePathMappingSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteDomainnamesDomainNameBasepathmappingsBasePathRoute = createRoute({
  method: 'delete',
  path: '/domainnames/{domain_name}/basepathmappings/{base_path}',
  description: 'Deletes the BasePathMapping resource.',
  operationId: 'DeleteBasePathMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The domain name of the BasePathMapping resource to delete.',
            schema: { type: 'string' },
          },
        }),
      base_path: z
        .string()
        .openapi({
          param: {
            name: 'base_path',
            in: 'path',
            required: true,
            description:
              "<p>The base path name of the BasePathMapping resource to delete.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchDomainnamesDomainNameBasepathmappingsBasePathRoute = createRoute({
  method: 'patch',
  path: '/domainnames/{domain_name}/basepathmappings/{base_path}',
  description: 'Changes information about the BasePathMapping resource.',
  operationId: 'UpdateBasePathMapping',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The domain name of the BasePathMapping resource to change.',
            schema: { type: 'string' },
          },
        }),
      base_path: z
        .string()
        .openapi({
          param: {
            name: 'base_path',
            in: 'path',
            required: true,
            description:
              "<p>The base path of the BasePathMapping resource to change.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BasePathMappingSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getClientcertificatesClientcertificateIdRoute = createRoute({
  method: 'get',
  path: '/clientcertificates/{clientcertificate_id}',
  description: 'Gets information about the current ClientCertificate resource.',
  operationId: 'GetClientCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      clientcertificate_id: z
        .string()
        .openapi({
          param: {
            name: 'clientcertificate_id',
            in: 'path',
            required: true,
            description: 'The identifier of the ClientCertificate resource to be described.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClientCertificateSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteClientcertificatesClientcertificateIdRoute = createRoute({
  method: 'delete',
  path: '/clientcertificates/{clientcertificate_id}',
  description: 'Deletes the ClientCertificate resource.',
  operationId: 'DeleteClientCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      clientcertificate_id: z
        .string()
        .openapi({
          param: {
            name: 'clientcertificate_id',
            in: 'path',
            required: true,
            description: 'The identifier of the ClientCertificate resource to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchClientcertificatesClientcertificateIdRoute = createRoute({
  method: 'patch',
  path: '/clientcertificates/{clientcertificate_id}',
  description: 'Changes information about an ClientCertificate resource.',
  operationId: 'UpdateClientCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      clientcertificate_id: z
        .string()
        .openapi({
          param: {
            name: 'clientcertificate_id',
            in: 'path',
            required: true,
            description: 'The identifier of the ClientCertificate resource to be updated.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClientCertificateSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/deployments/{deployment_id}',
  description: 'Gets information about a Deployment resource.',
  operationId: 'GetDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      deployment_id: z
        .string()
        .openapi({
          param: {
            name: 'deployment_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Deployment resource to get information about.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'embed',
            in: 'query',
            required: false,
            description:
              'A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string. For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DeploymentSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/deployments/{deployment_id}',
  description:
    'Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.',
  operationId: 'DeleteDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      deployment_id: z
        .string()
        .openapi({
          param: {
            name: 'deployment_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Deployment resource to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/deployments/{deployment_id}',
  description: 'Changes information about a Deployment resource.',
  operationId: 'UpdateDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      deployment_id: z
        .string()
        .openapi({
          param: {
            name: 'deployment_id',
            in: 'path',
            required: true,
            description:
              'The replacement identifier for the Deployment resource to change information about.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DeploymentSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDocumentationPartsPartIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/documentation/parts/{part_id}',
  description: 'Gets a documentation part.',
  operationId: 'GetDocumentationPart',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      part_id: z
        .string()
        .openapi({
          param: {
            name: 'part_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationPartSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdDocumentationPartsPartIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/documentation/parts/{part_id}',
  description: 'Deletes a documentation part',
  operationId: 'DeleteDocumentationPart',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      part_id: z
        .string()
        .openapi({
          param: {
            name: 'part_id',
            in: 'path',
            required: true,
            description: 'The identifier of the to-be-deleted documentation part.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdDocumentationPartsPartIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/documentation/parts/{part_id}',
  description: 'Updates a documentation part.',
  operationId: 'UpdateDocumentationPart',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      part_id: z
        .string()
        .openapi({
          param: {
            name: 'part_id',
            in: 'path',
            required: true,
            description: 'The identifier of the to-be-updated documentation part.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationPartSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdDocumentationVersionsDocVersionRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/documentation/versions/{doc_version}',
  description: 'Gets a documentation version.',
  operationId: 'GetDocumentationVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      doc_version: z
        .string()
        .openapi({
          param: {
            name: 'doc_version',
            in: 'path',
            required: true,
            description: 'The version identifier of the to-be-retrieved documentation snapshot.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationVersionSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdDocumentationVersionsDocVersionRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/documentation/versions/{doc_version}',
  description: 'Deletes a documentation version.',
  operationId: 'DeleteDocumentationVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      doc_version: z
        .string()
        .openapi({
          param: {
            name: 'doc_version',
            in: 'path',
            required: true,
            description: 'The version identifier of a to-be-deleted documentation snapshot.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdDocumentationVersionsDocVersionRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/documentation/versions/{doc_version}',
  description: 'Updates a documentation version.',
  operationId: 'UpdateDocumentationVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi..',
            schema: { type: 'string' },
          },
        }),
      doc_version: z
        .string()
        .openapi({
          param: {
            name: 'doc_version',
            in: 'path',
            required: true,
            description: 'The version identifier of the to-be-updated documentation version.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DocumentationVersionSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getDomainnamesDomainNameRoute = createRoute({
  method: 'get',
  path: '/domainnames/{domain_name}',
  description:
    'Represents a domain name that is contained in a simpler, more intuitive URL that can be called.',
  operationId: 'GetDomainName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The name of the DomainName resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DomainNameSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteDomainnamesDomainNameRoute = createRoute({
  method: 'delete',
  path: '/domainnames/{domain_name}',
  description: 'Deletes the DomainName resource.',
  operationId: 'DeleteDomainName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The name of the DomainName resource to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchDomainnamesDomainNameRoute = createRoute({
  method: 'patch',
  path: '/domainnames/{domain_name}',
  description: 'Changes information about the DomainName resource.',
  operationId: 'UpdateDomainName',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      domain_name: z
        .string()
        .openapi({
          param: {
            name: 'domain_name',
            in: 'path',
            required: true,
            description: 'The name of the DomainName resource to be changed.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: DomainNameSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdGatewayresponsesResponseTypeRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
  description: 'Gets a GatewayResponse of a specified response type on the given RestApi.',
  operationId: 'GetGatewayResponse',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .enum([
          'DEFAULT_4XX',
          'DEFAULT_5XX',
          'RESOURCE_NOT_FOUND',
          'UNAUTHORIZED',
          'INVALID_API_KEY',
          'ACCESS_DENIED',
          'AUTHORIZER_FAILURE',
          'AUTHORIZER_CONFIGURATION_ERROR',
          'INVALID_SIGNATURE',
          'EXPIRED_TOKEN',
          'MISSING_AUTHENTICATION_TOKEN',
          'INTEGRATION_FAILURE',
          'INTEGRATION_TIMEOUT',
          'API_CONFIGURATION_ERROR',
          'UNSUPPORTED_MEDIA_TYPE',
          'BAD_REQUEST_PARAMETERS',
          'BAD_REQUEST_BODY',
          'REQUEST_TOO_LARGE',
          'THROTTLED',
          'QUOTA_EXCEEDED',
          'WAF_FILTERED',
        ])
        .openapi({
          param: {
            name: 'response_type',
            in: 'path',
            required: true,
            description: 'The response type of the associated GatewayResponse.',
            schema: {
              type: 'string',
              enum: [
                'DEFAULT_4XX',
                'DEFAULT_5XX',
                'RESOURCE_NOT_FOUND',
                'UNAUTHORIZED',
                'INVALID_API_KEY',
                'ACCESS_DENIED',
                'AUTHORIZER_FAILURE',
                'AUTHORIZER_CONFIGURATION_ERROR',
                'INVALID_SIGNATURE',
                'EXPIRED_TOKEN',
                'MISSING_AUTHENTICATION_TOKEN',
                'INTEGRATION_FAILURE',
                'INTEGRATION_TIMEOUT',
                'API_CONFIGURATION_ERROR',
                'UNSUPPORTED_MEDIA_TYPE',
                'BAD_REQUEST_PARAMETERS',
                'BAD_REQUEST_BODY',
                'REQUEST_TOO_LARGE',
                'THROTTLED',
                'QUOTA_EXCEEDED',
                'WAF_FILTERED',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putRestapisRestapiIdGatewayresponsesResponseTypeRoute = createRoute({
  method: 'put',
  path: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
  description:
    'Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.',
  operationId: 'PutGatewayResponse',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .enum([
          'DEFAULT_4XX',
          'DEFAULT_5XX',
          'RESOURCE_NOT_FOUND',
          'UNAUTHORIZED',
          'INVALID_API_KEY',
          'ACCESS_DENIED',
          'AUTHORIZER_FAILURE',
          'AUTHORIZER_CONFIGURATION_ERROR',
          'INVALID_SIGNATURE',
          'EXPIRED_TOKEN',
          'MISSING_AUTHENTICATION_TOKEN',
          'INTEGRATION_FAILURE',
          'INTEGRATION_TIMEOUT',
          'API_CONFIGURATION_ERROR',
          'UNSUPPORTED_MEDIA_TYPE',
          'BAD_REQUEST_PARAMETERS',
          'BAD_REQUEST_BODY',
          'REQUEST_TOO_LARGE',
          'THROTTLED',
          'QUOTA_EXCEEDED',
          'WAF_FILTERED',
        ])
        .openapi({
          param: {
            name: 'response_type',
            in: 'path',
            required: true,
            description: 'The response type of the associated GatewayResponse',
            schema: {
              type: 'string',
              enum: [
                'DEFAULT_4XX',
                'DEFAULT_5XX',
                'RESOURCE_NOT_FOUND',
                'UNAUTHORIZED',
                'INVALID_API_KEY',
                'ACCESS_DENIED',
                'AUTHORIZER_FAILURE',
                'AUTHORIZER_CONFIGURATION_ERROR',
                'INVALID_SIGNATURE',
                'EXPIRED_TOKEN',
                'MISSING_AUTHENTICATION_TOKEN',
                'INTEGRATION_FAILURE',
                'INTEGRATION_TIMEOUT',
                'API_CONFIGURATION_ERROR',
                'UNSUPPORTED_MEDIA_TYPE',
                'BAD_REQUEST_PARAMETERS',
                'BAD_REQUEST_BODY',
                'REQUEST_TOO_LARGE',
                'THROTTLED',
                'QUOTA_EXCEEDED',
                'WAF_FILTERED',
              ],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              statusCode: z
                .string()
                .regex(/[1-5]\d\d/)
                .exactOptional()
                .openapi({ description: 'The status code.' }),
              responseParameters: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.',
                }),
              responseTemplates: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Response templates of the GatewayResponse as a string-to-string map of key-value pairs.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdGatewayresponsesResponseTypeRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
  description:
    'Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.',
  operationId: 'DeleteGatewayResponse',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .enum([
          'DEFAULT_4XX',
          'DEFAULT_5XX',
          'RESOURCE_NOT_FOUND',
          'UNAUTHORIZED',
          'INVALID_API_KEY',
          'ACCESS_DENIED',
          'AUTHORIZER_FAILURE',
          'AUTHORIZER_CONFIGURATION_ERROR',
          'INVALID_SIGNATURE',
          'EXPIRED_TOKEN',
          'MISSING_AUTHENTICATION_TOKEN',
          'INTEGRATION_FAILURE',
          'INTEGRATION_TIMEOUT',
          'API_CONFIGURATION_ERROR',
          'UNSUPPORTED_MEDIA_TYPE',
          'BAD_REQUEST_PARAMETERS',
          'BAD_REQUEST_BODY',
          'REQUEST_TOO_LARGE',
          'THROTTLED',
          'QUOTA_EXCEEDED',
          'WAF_FILTERED',
        ])
        .openapi({
          param: {
            name: 'response_type',
            in: 'path',
            required: true,
            description: 'The response type of the associated GatewayResponse.',
            schema: {
              type: 'string',
              enum: [
                'DEFAULT_4XX',
                'DEFAULT_5XX',
                'RESOURCE_NOT_FOUND',
                'UNAUTHORIZED',
                'INVALID_API_KEY',
                'ACCESS_DENIED',
                'AUTHORIZER_FAILURE',
                'AUTHORIZER_CONFIGURATION_ERROR',
                'INVALID_SIGNATURE',
                'EXPIRED_TOKEN',
                'MISSING_AUTHENTICATION_TOKEN',
                'INTEGRATION_FAILURE',
                'INTEGRATION_TIMEOUT',
                'API_CONFIGURATION_ERROR',
                'UNSUPPORTED_MEDIA_TYPE',
                'BAD_REQUEST_PARAMETERS',
                'BAD_REQUEST_BODY',
                'REQUEST_TOO_LARGE',
                'THROTTLED',
                'QUOTA_EXCEEDED',
                'WAF_FILTERED',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdGatewayresponsesResponseTypeRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/gatewayresponses/{response_type}',
  description: 'Updates a GatewayResponse of a specified response type on the given RestApi.',
  operationId: 'UpdateGatewayResponse',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .enum([
          'DEFAULT_4XX',
          'DEFAULT_5XX',
          'RESOURCE_NOT_FOUND',
          'UNAUTHORIZED',
          'INVALID_API_KEY',
          'ACCESS_DENIED',
          'AUTHORIZER_FAILURE',
          'AUTHORIZER_CONFIGURATION_ERROR',
          'INVALID_SIGNATURE',
          'EXPIRED_TOKEN',
          'MISSING_AUTHENTICATION_TOKEN',
          'INTEGRATION_FAILURE',
          'INTEGRATION_TIMEOUT',
          'API_CONFIGURATION_ERROR',
          'UNSUPPORTED_MEDIA_TYPE',
          'BAD_REQUEST_PARAMETERS',
          'BAD_REQUEST_BODY',
          'REQUEST_TOO_LARGE',
          'THROTTLED',
          'QUOTA_EXCEEDED',
          'WAF_FILTERED',
        ])
        .openapi({
          param: {
            name: 'response_type',
            in: 'path',
            required: true,
            description: 'The response type of the associated GatewayResponse.',
            schema: {
              type: 'string',
              enum: [
                'DEFAULT_4XX',
                'DEFAULT_5XX',
                'RESOURCE_NOT_FOUND',
                'UNAUTHORIZED',
                'INVALID_API_KEY',
                'ACCESS_DENIED',
                'AUTHORIZER_FAILURE',
                'AUTHORIZER_CONFIGURATION_ERROR',
                'INVALID_SIGNATURE',
                'EXPIRED_TOKEN',
                'MISSING_AUTHENTICATION_TOKEN',
                'INTEGRATION_FAILURE',
                'INTEGRATION_TIMEOUT',
                'API_CONFIGURATION_ERROR',
                'UNSUPPORTED_MEDIA_TYPE',
                'BAD_REQUEST_PARAMETERS',
                'BAD_REQUEST_BODY',
                'REQUEST_TOO_LARGE',
                'THROTTLED',
                'QUOTA_EXCEEDED',
                'WAF_FILTERED',
              ],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GatewayResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute = createRoute(
  {
    method: 'get',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
    description: 'Get the integration settings.',
    operationId: 'GetIntegration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a get integration request's resource identifier",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies a get integration request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  },
)

export const putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute = createRoute(
  {
    method: 'put',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
    description: "Sets up a method's integration.",
    operationId: 'PutIntegration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a put integration request's resource ID.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: 'Specifies the HTTP method for the integration.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                type: z
                  .enum(['HTTP', 'AWS', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY'])
                  .openapi({
                    description:
                      'The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. ',
                  }),
                httpMethod: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The HTTP method for the integration.' }),
                uri: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api</code>}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code>.',
                  }),
                connectionType: z
                  .enum(['INTERNET', 'VPC_LINK'])
                  .exactOptional()
                  .openapi({
                    description:
                      'The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.',
                  }),
                connectionId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type.',
                  }),
                credentials: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies whether credentials are required for a put integration.',
                  }),
                requestParameters: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.',
                  }),
                requestTemplates: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.',
                  }),
                passthroughBehavior: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. ',
                  }),
                cacheNamespace: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.',
                  }),
                cacheKeyParameters: z
                  .array(StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>.',
                  }),
                contentHandling: z
                  .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                  .exactOptional()
                  .openapi({
                    description:
                      '<p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>',
                  }),
                timeoutInMillis: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.',
                  }),
                tlsConfig: z
                  .object({
                    insecureSkipVerification: BooleanSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            "<p>Specifies whether or not API Gateway skips verification that the certificate for an integration endpoint is issued by a supported certificate authority. This isn’t recommended, but it enables you to use certificates that are signed by private certificate authorities, or certificates that are self-signed. If enabled, API Gateway still performs basic certificate validation, which includes checking the certificate's expiration date, hostname, and presence of a root certificate authority. Supported only for <code>HTTP</code> and <code>HTTP_PROXY</code> integrations.</p> <important> <p>Enabling <code>insecureSkipVerification</code> isn't recommended, especially for integrations with public HTTPS endpoints. If you enable <code>insecureSkipVerification</code>, you increase the risk of man-in-the-middle attacks.</p> </important>",
                        }),
                    ).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Specifies the TLS configuration for an integration.',
                    required: [],
                  }),
              })
              .openapi({ required: ['type'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      484: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  },
)

export const deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute =
  createRoute({
    method: 'delete',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
    description: 'Represents a delete integration.',
    operationId: 'DeleteIntegration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a delete integration request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies a delete integration request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationRoute =
  createRoute({
    method: 'patch',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration',
    description: 'Represents an update integration.',
    operationId: 'UpdateIntegration',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Represents an update integration request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Represents an update integration request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                patchOperations: z
                  .array(PatchOperationSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      484: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute =
  createRoute({
    method: 'get',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
    description: 'Represents a get integration response.',
    operationId: 'GetIntegrationResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a get integration response request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies a get integration response request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: "Specifies a get integration response request's status code.",
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute =
  createRoute({
    method: 'put',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
    description: 'Represents a put integration.',
    operationId: 'PutIntegrationResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a put integration response request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies a put integration response request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description:
                'Specifies the status code that is used to map the integration response to an existing MethodResponse.',
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                selectionPattern: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Specifies the selection pattern of a put integration response.',
                  }),
                responseParameters: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.',
                  }),
                responseTemplates: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({ description: "Specifies a put integration response's templates." }),
                contentHandling: z
                  .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                  .exactOptional()
                  .openapi({
                    description:
                      '<p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      484: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute =
  createRoute({
    method: 'delete',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
    description: 'Represents a delete integration response.',
    operationId: 'DeleteIntegrationResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: "Specifies a delete integration response request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies a delete integration response request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: "Specifies a delete integration response request's status code.",
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      483: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodIntegrationResponsesStatusCodeRoute =
  createRoute({
    method: 'patch',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}',
    description: 'Represents an update integration response.',
    operationId: 'UpdateIntegrationResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description:
                "Specifies an update integration response request's resource identifier.",
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: "Specifies an update integration response request's HTTP method.",
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: "Specifies an update integration response request's status code.",
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                patchOperations: z
                  .array(PatchOperationSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: IntegrationResponseSchema } },
      },
      480: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      481: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      482: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      483: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      484: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
  description: 'Describe an existing Method resource.',
  operationId: 'GetMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The Resource identifier for the Method resource.',
            schema: { type: 'string' },
          },
        }),
      http_method: z
        .string()
        .openapi({
          param: {
            name: 'http_method',
            in: 'path',
            required: true,
            description: "Specifies the method request's HTTP method type.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MethodSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute = createRoute({
  method: 'put',
  path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
  description: 'Add a method to an existing Resource resource.',
  operationId: 'PutMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The Resource identifier for the new Method resource.',
            schema: { type: 'string' },
          },
        }),
      http_method: z
        .string()
        .openapi({
          param: {
            name: 'http_method',
            in: 'path',
            required: true,
            description: "Specifies the method request's HTTP method type.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authorizationType: z
                .string()
                .openapi({
                  description:
                    "The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.",
                }),
              authorizerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.',
                }),
              apiKeyRequired: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Specifies whether the method required a valid ApiKey.' }),
              operationName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.',
                }),
              requestParameters: z
                .record(z.string(), NullableBooleanSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates.',
                }),
              requestModels: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    "Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value.",
                }),
              requestValidatorId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The identifier of a RequestValidator for validating the method request.',
                }),
              authorizationScopes: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
                }),
            })
            .openapi({ required: ['authorizationType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: MethodSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute = createRoute({
  method: 'post',
  path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
  description:
    'Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.',
  operationId: 'TestInvokeMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: "Specifies a test invoke method request's resource ID.",
            schema: { type: 'string' },
          },
        }),
      http_method: z
        .string()
        .openapi({
          param: {
            name: 'http_method',
            in: 'path',
            required: true,
            description: "Specifies a test invoke method request's HTTP method.",
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pathWithQueryString: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.',
                }),
              body: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The simulated request body of an incoming invocation request.',
                }),
              headers: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A key-value map of headers to simulate an incoming invocation request.',
                }),
              multiValueHeaders: z
                .record(z.string(), ListOfStringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The headers as a map from string to list of values to simulate an incoming invocation request.',
                }),
              clientCertificateId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.',
                }),
              stageVariables: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A key-value map of stage variables to simulate an invocation on a deployed Stage.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestInvokeMethodResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
  description: 'Deletes an existing Method resource.',
  operationId: 'DeleteMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The Resource identifier for the Method resource.',
            schema: { type: 'string' },
          },
        }),
      http_method: z
        .string()
        .openapi({
          param: {
            name: 'http_method',
            in: 'path',
            required: true,
            description: 'The HTTP verb of the Method resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}',
  description: 'Updates an existing Method resource.',
  operationId: 'UpdateMethod',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The Resource identifier for the Method resource.',
            schema: { type: 'string' },
          },
        }),
      http_method: z
        .string()
        .openapi({
          param: {
            name: 'http_method',
            in: 'path',
            required: true,
            description: 'The HTTP verb of the Method resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: MethodSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute =
  createRoute({
    method: 'get',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
    description: 'Describes a MethodResponse resource.',
    operationId: 'GetMethodResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: 'The Resource identifier for the MethodResponse resource.',
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: 'The HTTP verb of the Method resource.',
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: 'The status code for the MethodResponse resource.',
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: MethodResponseSchema } },
      },
      480: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const putRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute =
  createRoute({
    method: 'put',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
    description: 'Adds a MethodResponse to an existing Method resource.',
    operationId: 'PutMethodResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: 'The Resource identifier for the Method resource.',
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: 'The HTTP verb of the Method resource.',
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: "The method response's status code.",
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                responseParameters: z
                  .record(z.string(), NullableBooleanSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      "A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)",
                  }),
                responseModels: z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      "Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value.",
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: MethodResponseSchema } },
      },
      480: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const deleteRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute =
  createRoute({
    method: 'delete',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
    description: 'Deletes an existing MethodResponse resource.',
    operationId: 'DeleteMethodResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: 'The Resource identifier for the MethodResponse resource.',
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: 'The HTTP verb of the Method resource.',
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: 'The status code identifier for the MethodResponse resource.',
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      484: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const patchRestapisRestapiIdResourcesResourceIdMethodsHttpMethodResponsesStatusCodeRoute =
  createRoute({
    method: 'patch',
    path: '/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}',
    description: 'Updates an existing MethodResponse resource.',
    operationId: 'UpdateMethodResponse',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        restapi_id: z
          .string()
          .openapi({
            param: {
              name: 'restapi_id',
              in: 'path',
              required: true,
              description: 'The string identifier of the associated RestApi.',
              schema: { type: 'string' },
            },
          }),
        resource_id: z
          .string()
          .openapi({
            param: {
              name: 'resource_id',
              in: 'path',
              required: true,
              description: 'The Resource identifier for the MethodResponse resource.',
              schema: { type: 'string' },
            },
          }),
        http_method: z
          .string()
          .openapi({
            param: {
              name: 'http_method',
              in: 'path',
              required: true,
              description: 'The HTTP verb of the Method resource.',
              schema: { type: 'string' },
            },
          }),
        status_code: z
          .string()
          .regex(/[1-5]\d\d/)
          .openapi({
            param: {
              name: 'status_code',
              in: 'path',
              required: true,
              description: 'The status code for the MethodResponse resource.',
              schema: { type: 'string', pattern: '[1-5]\\d\\d', description: 'The status code.' },
            },
            description: 'The status code.',
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                patchOperations: z
                  .array(PatchOperationSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      201: {
        description: 'Success',
        content: { 'application/json': { schema: MethodResponseSchema } },
      },
      480: {
        description: 'UnauthorizedException',
        content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
      },
      481: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      484: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      485: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getRestapisRestapiIdModelsModelNameRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/models/{model_name}',
  description: 'Describes an existing model defined for a RestApi resource.',
  operationId: 'GetModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The RestApi identifier under which the Model exists.',
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            name: 'model_name',
            in: 'path',
            required: true,
            description: 'The name of the model as an identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      flatten: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'flatten',
            in: 'query',
            required: false,
            description:
              'A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ModelSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdModelsModelNameRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/models/{model_name}',
  description: 'Deletes a model.',
  operationId: 'DeleteModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            name: 'model_name',
            in: 'path',
            required: true,
            description: 'The name of the model to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdModelsModelNameRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/models/{model_name}',
  description: 'Changes information about a model.',
  operationId: 'UpdateModel',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            name: 'model_name',
            in: 'path',
            required: true,
            description: 'The name of the model to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ModelSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}',
  description: 'Gets a RequestValidator of a given RestApi.',
  operationId: 'GetRequestValidator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      requestvalidator_id: z
        .string()
        .openapi({
          param: {
            name: 'requestvalidator_id',
            in: 'path',
            required: true,
            description: 'The identifier of the RequestValidator to be retrieved.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestValidatorSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}',
  description: 'Deletes a RequestValidator of a given RestApi.',
  operationId: 'DeleteRequestValidator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      requestvalidator_id: z
        .string()
        .openapi({
          param: {
            name: 'requestvalidator_id',
            in: 'path',
            required: true,
            description: 'The identifier of the RequestValidator to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdRequestvalidatorsRequestvalidatorIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}',
  description: 'Updates a RequestValidator of a given RestApi.',
  operationId: 'UpdateRequestValidator',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      requestvalidator_id: z
        .string()
        .openapi({
          param: {
            name: 'requestvalidator_id',
            in: 'path',
            required: true,
            description: 'The identifier of RequestValidator to be updated.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestValidatorSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdResourcesResourceIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/resources/{resource_id}',
  description: 'Lists information about a resource.',
  operationId: 'GetResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The identifier for the Resource resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'embed',
            in: 'query',
            required: false,
            description:
              'A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ResourceSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdResourcesResourceIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/resources/{resource_id}',
  description: 'Deletes a Resource resource.',
  operationId: 'DeleteResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Resource resource.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdResourcesResourceIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/resources/{resource_id}',
  description: 'Changes information about a Resource resource.',
  operationId: 'UpdateResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .openapi({
          param: {
            name: 'resource_id',
            in: 'path',
            required: true,
            description: 'The identifier of the Resource resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ResourceSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}',
  description: 'Lists the RestApi resource in the collection.',
  operationId: 'GetRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: RestApiSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putRestapisRestapiIdRoute = createRoute({
  method: 'put',
  path: '/restapis/{restapi_id}',
  description:
    'A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.',
  operationId: 'PutRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['parameters']
        const taken: string[] = ['mode', 'failonwarnings']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          mode: z
            .enum(['merge', 'overwrite'])
            .exactOptional()
            .openapi({
              param: {
                name: 'mode',
                in: 'query',
                required: false,
                description:
                  'The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".',
                schema: { type: 'string', enum: ['merge', 'overwrite'] },
              },
            }),
          failonwarnings: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'failonwarnings',
                in: 'query',
                required: false,
                description:
                  'A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.',
                schema: { type: 'boolean' },
              },
            }),
          parameters: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'parameters',
                in: 'query',
                required: false,
                description:
                  "Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.",
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
        }),
      ),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z
                .string()
                .openapi({
                  description:
                    'The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.',
                }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: RestApiSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}',
  description: 'Deletes the specified API.',
  operationId: 'DeleteRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}',
  description: 'Changes information about the specified API.',
  operationId: 'UpdateRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: RestApiSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdStagesStageNameRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/stages/{stage_name}',
  description: 'Gets information about a Stage resource.',
  operationId: 'GetStage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the Stage resource to get information about.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: StageSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdStagesStageNameRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/stages/{stage_name}',
  description: 'Deletes a Stage resource.',
  operationId: 'DeleteStage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the Stage resource to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchRestapisRestapiIdStagesStageNameRoute = createRoute({
  method: 'patch',
  path: '/restapis/{restapi_id}/stages/{stage_name}',
  description: 'Changes information about a Stage resource.',
  operationId: 'UpdateStage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the Stage resource to change information about.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: StageSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getUsageplansUsageplanIdRoute = createRoute({
  method: 'get',
  path: '/usageplans/{usageplanId}',
  description: 'Gets a usage plan of a given plan identifier.',
  operationId: 'GetUsagePlan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description: 'The identifier of the UsagePlan resource to be retrieved.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UsagePlanSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteUsageplansUsageplanIdRoute = createRoute({
  method: 'delete',
  path: '/usageplans/{usageplanId}',
  description: 'Deletes a usage plan of a given plan Id.',
  operationId: 'DeleteUsagePlan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description: 'The Id of the to-be-deleted usage plan.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchUsageplansUsageplanIdRoute = createRoute({
  method: 'patch',
  path: '/usageplans/{usageplanId}',
  description: 'Updates a usage plan of a given plan Id.',
  operationId: 'UpdateUsagePlan',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description: 'The Id of the to-be-updated usage plan.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UsagePlanSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getUsageplansUsageplanIdKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/usageplans/{usageplanId}/keys/{keyId}',
  description: 'Gets a usage plan key of a given key identifier.',
  operationId: 'GetUsagePlanKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description:
              'The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.',
            schema: { type: 'string' },
          },
        }),
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            required: true,
            description:
              'The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsagePlanKeySchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteUsageplansUsageplanIdKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/usageplans/{usageplanId}/keys/{keyId}',
  description:
    'Deletes a usage plan key and remove the underlying API key from the associated usage plan.',
  operationId: 'DeleteUsagePlanKey',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description:
              'The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.',
            schema: { type: 'string' },
          },
        }),
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            required: true,
            description: 'The Id of the UsagePlanKey resource to be deleted.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getVpclinksVpclinkIdRoute = createRoute({
  method: 'get',
  path: '/vpclinks/{vpclink_id}',
  description: "Gets a specified VPC link under the caller's account in a region.",
  operationId: 'GetVpcLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      vpclink_id: z
        .string()
        .openapi({
          param: {
            name: 'vpclink_id',
            in: 'path',
            required: true,
            description:
              'The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: VpcLinkSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteVpclinksVpclinkIdRoute = createRoute({
  method: 'delete',
  path: '/vpclinks/{vpclink_id}',
  description: 'Deletes an existing VpcLink of a specified identifier.',
  operationId: 'DeleteVpcLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      vpclink_id: z
        .string()
        .openapi({
          param: {
            name: 'vpclink_id',
            in: 'path',
            required: true,
            description:
              'The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchVpclinksVpclinkIdRoute = createRoute({
  method: 'patch',
  path: '/vpclinks/{vpclink_id}',
  description: 'Updates an existing VpcLink of a specified identifier.',
  operationId: 'UpdateVpcLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      vpclink_id: z
        .string()
        .openapi({
          param: {
            name: 'vpclink_id',
            in: 'path',
            required: true,
            description:
              'The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: VpcLinkSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdStagesStageNameCacheAuthorizersRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers',
  description: 'Flushes all authorizer cache entries on a stage.',
  operationId: 'FlushStageAuthorizersCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the stage to flush.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteRestapisRestapiIdStagesStageNameCacheDataRoute = createRoute({
  method: 'delete',
  path: '/restapis/{restapi_id}/stages/{stage_name}/cache/data',
  description: "Flushes a stage's cache.",
  operationId: 'FlushStageCache',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the stage to flush its cache.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getClientcertificatesRoute = createRoute({
  method: 'get',
  path: '/clientcertificates',
  description: 'Gets a collection of ClientCertificate resources.',
  operationId: 'GetClientCertificates',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClientCertificatesSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postClientcertificatesRoute = createRoute({
  method: 'post',
  path: '/clientcertificates',
  description: 'Generates a ClientCertificate resource.',
  operationId: 'GenerateClientCertificate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description of the ClientCertificate.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ClientCertificateSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  description: 'Gets information about the current Account resource.',
  operationId: 'GetAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchAccountRoute = createRoute({
  method: 'patch',
  path: '/account',
  description: 'Changes information about the current Account resource.',
  operationId: 'UpdateAccount',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdStagesStageNameExportsExportTypeRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}',
  description: 'Exports a deployed version of a RestApi in a specified format.',
  operationId: 'GetExport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Accept: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept',
            in: 'header',
            required: false,
            description:
              'The content-type of the export, for example <code>application/json</code>. Currently <code>application/json</code> and <code>application/yaml</code> are supported for <code>exportType</code> of<code>oas30</code> and <code>swagger</code>. This should be specified in the <code>Accept</code> header for direct API requests.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the Stage that will be exported.',
            schema: { type: 'string' },
          },
        }),
      export_type: z
        .string()
        .openapi({
          param: {
            name: 'export_type',
            in: 'path',
            required: true,
            description:
              "The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['parameters']
        const taken: string[] = []
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          parameters: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'parameters',
                in: 'query',
                required: false,
                description:
                  "A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool",
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdGatewayresponsesRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/gatewayresponses',
  description:
    'Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.',
  operationId: 'GetGatewayResponses',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description:
              'The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GatewayResponsesSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdModelsModelNameDefaultTemplateRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/models/{model_name}/default_template',
  description:
    'Generates a sample mapping template that can be used to transform a payload into the structure of a model.',
  operationId: 'GetModelTemplate',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      model_name: z
        .string()
        .openapi({
          param: {
            name: 'model_name',
            in: 'path',
            required: true,
            description: 'The name of the model for which to generate a template.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TemplateSchema } } },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdResourcesRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/resources',
  description: 'Lists information about a collection of Resource resources.',
  operationId: 'GetResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'embed',
            in: 'query',
            required: false,
            description:
              'A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ResourcesSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getRestapisRestapiIdStagesStageNameSdksSdkTypeRoute = createRoute({
  method: 'get',
  path: '/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}',
  description: 'Generates a client SDK for a RestApi and Stage.',
  operationId: 'GetSdk',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      restapi_id: z
        .string()
        .openapi({
          param: {
            name: 'restapi_id',
            in: 'path',
            required: true,
            description: 'The string identifier of the associated RestApi.',
            schema: { type: 'string' },
          },
        }),
      stage_name: z
        .string()
        .openapi({
          param: {
            name: 'stage_name',
            in: 'path',
            required: true,
            description: 'The name of the Stage that the SDK will use.',
            schema: { type: 'string' },
          },
        }),
      sdk_type: z
        .string()
        .openapi({
          param: {
            name: 'sdk_type',
            in: 'path',
            required: true,
            description:
              'The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code> are supported.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['parameters']
        const taken: string[] = []
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          parameters: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'parameters',
                in: 'query',
                required: false,
                description:
                  'A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>, a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. ',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
        }),
      ),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SdkResponseSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getSdktypesSdktypeIdRoute = createRoute({
  method: 'get',
  path: '/sdktypes/{sdktype_id}',
  description: 'Gets an SDK type.',
  operationId: 'GetSdkType',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      sdktype_id: z
        .string()
        .openapi({
          param: {
            name: 'sdktype_id',
            in: 'path',
            required: true,
            description: 'The identifier of the queried SdkType instance.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SdkTypeSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getSdktypesRoute = createRoute({
  method: 'get',
  path: '/sdktypes',
  description: 'Gets SDK types',
  operationId: 'GetSdkTypes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SdkTypesSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resource_arn}',
  description: 'Gets the Tags collection for a given resource.',
  operationId: 'GetTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resource_arn: z
        .string()
        .openapi({
          param: {
            name: 'resource_arn',
            in: 'path',
            required: true,
            description: 'The ARN of a resource that can be tagged.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description:
              '(Not currently supported) The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              '(Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: TagsSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putTagsResourceArnRoute = createRoute({
  method: 'put',
  path: '/tags/{resource_arn}',
  description: 'Adds or updates a tag on a given resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resource_arn: z
        .string()
        .openapi({
          param: {
            name: 'resource_arn',
            in: 'path',
            required: true,
            description: 'The ARN of a resource that can be tagged.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    'The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getUsageplansUsageplanIdUsageStartDateEndDateRoute = createRoute({
  method: 'get',
  path: '/usageplans/{usageplanId}/usage#startDate&endDate',
  description: 'Gets the usage data of a usage plan in a specified time interval.',
  operationId: 'GetUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description: 'The Id of the usage plan associated with the usage data.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      keyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'keyId',
            in: 'query',
            required: false,
            description: 'The Id of the API key associated with the resultant usage data.',
            schema: { type: 'string' },
          },
        }),
      startDate: z
        .string()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: true,
            description: 'The starting date (e.g., 2016-01-01) of the usage data.',
            schema: { type: 'string' },
          },
        }),
      endDate: z
        .string()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: true,
            description: 'The ending date (e.g., 2016-12-31) of the usage data.',
            schema: { type: 'string' },
          },
        }),
      position: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'position',
            in: 'query',
            required: false,
            description: 'The current pagination position in the paged result set.',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of returned results per page. The default value is 25 and the maximum value is 500.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UsageSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postApikeysModeImportFormatRoute = createRoute({
  method: 'post',
  path: '/apikeys#mode=import&format',
  description: 'Import API keys from an external source, such as a CSV-formatted file.',
  operationId: 'ImportApiKeys',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      format: z
        .literal('csv')
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: true,
            description:
              'A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.',
            schema: { type: 'string', enum: ['csv'] },
          },
        }),
      failonwarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'failonwarnings',
            in: 'query',
            required: false,
            description:
              'A query parameter to indicate whether to rollback ApiKey importation (<code>true</code>) or not (<code>false</code>) when error is encountered.',
            schema: { type: 'boolean' },
          },
        }),
      mode: z
        .literal('import')
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['import'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z
                .string()
                .openapi({
                  description:
                    'The payload of the POST request to import API keys. For the payload format, see API Key File Format.',
                }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: ApiKeyIdsSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postRestapisModeImportRoute = createRoute({
  method: 'post',
  path: '/restapis#mode=import',
  description:
    'A feature of the API Gateway control service for creating a new API from an external API definition file.',
  operationId: 'ImportRestApi',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const open: string[] = ['parameters']
        const taken: string[] = ['failonwarnings', 'mode']
        for (const [key, item] of Object.entries(val)) {
          if (!taken.includes(key)) {
            for (const owner of open) {
              group(owner)[key] = item
            }
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          failonwarnings: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'failonwarnings',
                in: 'query',
                required: false,
                description:
                  'A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.',
                schema: { type: 'boolean' },
              },
            }),
          parameters: z
            .record(z.string(), StringSchema)
            .exactOptional()
            .openapi({
              param: {
                name: 'parameters',
                in: 'query',
                required: false,
                description:
                  '<p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude DocumentationParts from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p>',
                schema: {
                  type: 'object',
                  additionalProperties: { $ref: '#/components/schemas/String' },
                },
              },
            }),
          mode: z
            .literal('import')
            .openapi({
              param: {
                name: 'mode',
                in: 'query',
                required: true,
                schema: { type: 'string', enum: ['import'] },
              },
            }),
        }),
      ),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body: z
                .string()
                .openapi({
                  description:
                    'The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.',
                }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Success', content: { 'application/json': { schema: RestApiSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resource_arn}#tagKeys',
  description: 'Removes a tag from a given resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resource_arn: z
        .string()
        .openapi({
          param: {
            name: 'resource_arn',
            in: 'path',
            required: true,
            description: 'The ARN of a resource that can be tagged.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The Tag keys to delete.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/String' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchUsageplansUsageplanIdKeysKeyIdUsageRoute = createRoute({
  method: 'patch',
  path: '/usageplans/{usageplanId}/keys/{keyId}/usage',
  description:
    'Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.',
  operationId: 'UpdateUsage',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      usageplanId: z
        .string()
        .openapi({
          param: {
            name: 'usageplanId',
            in: 'path',
            required: true,
            description: 'The Id of the usage plan associated with the usage data.',
            schema: { type: 'string' },
          },
        }),
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            required: true,
            description:
              'The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              patchOperations: z
                .array(PatchOperationSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UsageSchema } } },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
